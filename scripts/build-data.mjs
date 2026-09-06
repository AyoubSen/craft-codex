// Merges jar metadata + the curation into src/data/mods.json
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  PACK, CATEGORIES, CATEGORY_OF, CATEGORY_RULES, OVERRIDES, HIGHLIGHTS, ADDED_JARS,
} from './curation.mjs';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(here, '..');

const raw = JSON.parse(fs.readFileSync(path.join(here, 'raw/mods.raw.json'), 'utf8'));
const logos = new Set(
  fs.existsSync(path.join(root, 'public/logos')) ? fs.readdirSync(path.join(root, 'public/logos')) : []
);

const categorise = (modId, file) => {
  if (CATEGORY_OF[modId]) return CATEGORY_OF[modId];
  const key = file.replace(/\.jar$/, '');
  if (CATEGORY_OF[key]) return CATEGORY_OF[key];
  for (const [re, cat] of CATEGORY_RULES) if (re.test(modId)) return cat;
  return 'utility';
};

const mods = raw.map((m) => {
  const stem = m.file.replace(/\.jar$/, '');
  const o = OVERRIDES[m.modId] || OVERRIDES[stem] || {};
  return {
    ...m,
    ...o,
    category: categorise(m.modId, m.file),
    source: stem in ADDED_JARS ? 'added' : 'pack',
    addedNote: ADDED_JARS[stem] || null,
    logo: logos.has(m.modId + '.webp') ? `logos/${m.modId}.webp` : null,
    highlight: HIGHLIGHTS.includes(m.modId),
  };
});

// Manual entry for the jar that ships no readable NeoForge metadata.
mods.push({
  file: 'kotlinforforge-5.10.0-all.jar', modId: 'kotlinforforge', name: 'Kotlin for Forge',
  version: '5.10.0', authors: 'thedarkcolour', mtime: null,
  description: 'Kotlin runtime + NeoForge bindings. A pure dependency for the mods in the pack written in Kotlin.',
  url: 'https://github.com/thedarkcolour/KotlinForForge', license: 'MIT',
  extraModIds: [], dependencies: [],
  category: 'library', source: 'pack', addedNote: null, logo: null, highlight: false,
});

mods.sort((a, b) => a.name.localeCompare(b.name));

const byId = new Map(mods.map((m) => [m.modId, m]));
// Resolve dependency display names + reverse dependencies.
for (const m of mods) m.requiredBy = [];
for (const m of mods) {
  m.dependencies = m.dependencies
    .filter((d) => byId.has(d.modId))
    .map((d) => ({ ...d, name: byId.get(d.modId).name }));
  for (const d of m.dependencies) if (d.mandatory) byId.get(d.modId).requiredBy.push(m.modId);
}

const stats = {
  total: mods.length,
  added: mods.filter((m) => m.source === 'added').length,
  pack: mods.filter((m) => m.source === 'pack').length,
  libraries: mods.filter((m) => m.category === 'library').length,
  byCategory: Object.fromEntries(CATEGORIES.map((c) => [c.id, mods.filter((m) => m.category === c.id).length])),
  generatedAt: new Date().toISOString().slice(0, 10),
};

const outDir = path.join(root, 'src/data');
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(
  path.join(outDir, 'mods.json'),
  JSON.stringify({ pack: PACK, stats, categories: CATEGORIES, mods }, null, 2)
);
console.log('wrote src/data/mods.json —', stats.total, 'mods,', stats.added, 'added by us');
console.log('categories:', stats.byCategory);
