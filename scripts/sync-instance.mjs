/**
 * Reads the real Minecraft instance and refreshes everything the app renders:
 *   scripts/raw/mods.raw.json   ← metadata parsed out of every jar
 *   public/logos/<modid>.webp   ← each mod's icon, downscaled
 * Then run scripts/build-data.mjs to merge in the curation.
 *
 *   node scripts/sync-instance.mjs [pathToInstance]
 *
 * Default instance path lives in MODS_DIR below (or set the MODS_DIR env var).
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import AdmZip from 'adm-zip';
import sharp from 'sharp';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(here, '..');

const DEFAULT_DIR =
  'C:/Users/ayoub/AppData/Roaming/PrismLauncher/instances/clean Craftoria/minecraft/mods';
const MODS_DIR = process.argv[2] || process.env.MODS_DIR || DEFAULT_DIR;

if (!fs.existsSync(MODS_DIR)) {
  console.error('Mods folder not found:', MODS_DIR);
  process.exit(1);
}

/* ── minimal mods.toml parser ─────────────────────────────── */
function parseToml(txt) {
  const lines = txt.split(/\r?\n/);
  const root_ = {}; const mods = []; const deps = {};
  let ctx = root_, i = 0;
  const readValue = (raw) => {
    raw = raw.trim();
    if (raw.startsWith("'''") || raw.startsWith('"""')) {
      const q = raw.slice(0, 3); const body = raw.slice(3);
      if (body.trimEnd().endsWith(q)) return body.trimEnd().slice(0, -3).trim();
      const buf = [body];
      while (++i < lines.length) {
        const l = lines[i];
        if (l.trim().endsWith(q)) { buf.push(l.trim().slice(0, -3)); break; }
        buf.push(l);
      }
      return buf.join('\n').trim();
    }
    if (raw.startsWith('"') || raw.startsWith("'")) {
      const q = raw[0]; const end = raw.lastIndexOf(q);
      return raw.slice(1, end > 0 ? end : undefined);
    }
    if (raw === 'true' || raw === 'false') return raw === 'true';
    return raw.replace(/\s*#.*$/, '').trim();
  };
  for (; i < lines.length; i++) {
    const t = lines[i].trim();
    if (!t || t.startsWith('#')) continue;
    let m;
    if (/^\[\[mods\]\]\s*(#.*)?$/.test(t)) { ctx = {}; mods.push(ctx); continue; }
    if ((m = t.match(/^\[\[dependencies\.([^\]]+)\]\]\s*(#.*)?$/))) {
      const key = m[1].replace(/["']/g, '');
      (deps[key] ||= []).push((ctx = {}));
      continue;
    }
    if (t.startsWith('[')) { ctx = {}; continue; }
    if ((m = t.match(/^([A-Za-z0-9_\-."']+)\s*=\s*(.*)$/))) ctx[m[1].replace(/["']/g, '')] = readValue(m[2]);
  }
  return { root: root_, mods, deps };
}

const clean = (s) => (typeof s === 'string' ? s.replace(/\s*\n\s*/g, ' ').replace(/\s+/g, ' ').trim() : s);
const usable = (s) => typeof s === 'string' && s && !s.includes('${');

/* ── walk the jars ────────────────────────────────────────── */
const logoDir = path.join(root, 'public/logos');
fs.mkdirSync(logoDir, { recursive: true });
fs.mkdirSync(path.join(here, 'raw'), { recursive: true });

const jars = fs.readdirSync(MODS_DIR).filter((f) => f.toLowerCase().endsWith('.jar'));
const out = [];
let icons = 0, skipped = [];

for (const jar of jars) {
  let zip;
  try { zip = new AdmZip(path.join(MODS_DIR, jar)); } catch { skipped.push(jar); continue; }
  // NeoForge 1.21+ uses neoforge.mods.toml; older / ported jars still ship mods.toml.
  const entry = zip.getEntry('META-INF/neoforge.mods.toml') || zip.getEntry('META-INF/mods.toml');
  if (!entry) { skipped.push(jar); continue; }

  const { root: r, mods, deps } = parseToml(zip.readAsText(entry));
  const p = mods[0] || {};
  const modId = p.modId || path.basename(jar, '.jar');

  out.push({
    file: jar,
    mtime: fs.statSync(path.join(MODS_DIR, jar)).mtime.toISOString(),
    modId,
    name: usable(clean(p.displayName)) ? clean(p.displayName) : path.basename(jar, '.jar'),
    version: usable(p.version) ? p.version : null,
    authors: usable(clean(p.authors)) ? clean(p.authors) : null,
    description: usable(clean(p.description)) ? clean(p.description) : null,
    url: p.displayURL || r.issueTrackerURL || null,
    logoFile: p.logoFile || r.logoFile || null,
    license: r.license || null,
    extraModIds: mods.slice(1).map((m) => m.modId).filter(Boolean),
    dependencies: (deps[p.modId] || [])
      .filter((d) => d.modId && !['forge', 'neoforge', 'minecraft'].includes(d.modId))
      .map((d) => ({ modId: d.modId, mandatory: d.mandatory === true || d.mandatory === 'true', side: d.side || 'BOTH' })),
  });

  // Many 1.21 jars declare no logoFile but still ship an icon at the jar root.
  const declared = p.logoFile || r.logoFile;
  const candidates = [
    ...(declared ? [declared, declared.replace(/^\//, '')] : []),
    `${modId}.png`, 'icon.png', 'logo.png', 'pack.png', 'logo_icon.png',
    `assets/${modId}/icon.png`, `assets/${modId}/logo.png`,
  ];
  {
    const img = candidates.map((c) => zip.getEntry(c)).find(Boolean);
    if (img) {
      try {
        const buf = await sharp(zip.readFile(img))
          .resize(128, 128, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
          .webp({ quality: 82 })
          .toBuffer();
        fs.writeFileSync(path.join(logoDir, modId + '.webp'), buf);
        icons++;
      } catch { /* unreadable icon, fall back to initials */ }
    }
  }
}

out.sort((a, b) => a.name.localeCompare(b.name));
fs.writeFileSync(path.join(here, 'raw/mods.raw.json'), JSON.stringify(out, null, 2));

console.log(`scanned ${jars.length} jars → ${out.length} with metadata, ${icons} icons`);
if (skipped.length) console.log('no readable mods.toml (handled manually in build-data.mjs):', skipped.join(', '));
