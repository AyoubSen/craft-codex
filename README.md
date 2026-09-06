# Craftoria Codex

A browsable library + guide site for our Minecraft server: **Craftoria 1.33.2**
(Minecraft 1.21.1, NeoForge 21.1.248) plus **13 jars we added ourselves** — 533 mods total.

- **Mods** — every jar in the instance, searchable and filtered by category and by
  source (ships with Craftoria / added by us), with description, author, version,
  licence, dependencies and reverse-dependencies read straight out of each jar.
- **Guides** — 23 hand-written guides for the mods that actually need explaining
  (the quest book, the three competing tech mods, Ars Nouveau, Iron's Spellbooks,
  Apotheosis, dimensions, the Aether, Ad Astra, bees, performance, etiquette…).
- **Install** — how to get Craftoria from CurseForge and which extra jars to drop
  in, with a copy-to-clipboard file list and a troubleshooting table.

## What we added on top of the pack

The full list, with a note on each, lives in `ADDED_JARS` in `scripts/curation.mjs`
and is rendered on the site's home page and Install page.

| Jar | Why |
| --- | --- |
| The Aether + Deep Aether + Aether Villages | A whole second overworld with its own bosses and gear |
| The Undergarden | A Nether-alternative dimension with real progression |
| Mowzie's Mobs | Six hand-animated boss fights |
| Ad Astra + Giselle Addon | Space, five planets, and tech mods that work off-world |
| Productive Bees | A passive, automatable resource line |
| CC: Tweaked | ComputerCraft — the pack already had its addon but not the mod |
| Antique Trading Ship | A small structure with a merchant |
| EMI QoL Tweaks | Recipe-screen polish |
| oωo Lib, Common Storage Lib | Dependencies of Ad Astra, not content |

Everyone on the server needs all thirteen, at these exact versions.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # static site in dist/ — host it anywhere
```

## Keeping it in sync with the pack

Everything factual is generated from the real instance folder. After adding or
removing mods:

```bash
npm run sync
```

That runs two steps:

| Script | What it does |
| --- | --- |
| `scripts/sync-instance.mjs` | Opens every `.jar`, parses `META-INF/neoforge.mods.toml` (falling back to `mods.toml`), writes `scripts/raw/mods.raw.json` and extracts each mod's icon into `public/logos/<modid>.webp` (128px). |
| `scripts/build-data.mjs` | Merges that with the curation and writes `src/data/mods.json`. |

The instance path is hardcoded at the top of `sync-instance.mjs`; override it with
an argument or the `MODS_DIR` env var:

```bash
node scripts/sync-instance.mjs "D:/servers/craftoria/mods"
```

## Files you edit by hand

| File | Purpose |
| --- | --- |
| `scripts/curation.mjs` | `PACK` (pack name/version/loader), `CATEGORIES`, the `modId → category` map, `CATEGORY_RULES` (regex fallbacks for anything unmapped), `ADDED_JARS` (**the jars we added, keyed by file name — this is what drives the "added by us" split**), name/description overrides, and the "core mod" highlight list. |
| `src/data/guides.js` | The guides. Each guide lists the `modId`s it covers, and the mod pages link back to it automatically. |

`src/data/mods.json` is generated — do not edit it by hand.

### Adding a mod to the pack

1. Drop the jar in the instance's `mods` folder.
2. Add its file name (without `.jar`) to `ADDED_JARS` in `scripts/curation.mjs`, with a one-line note.
3. `npm run sync`.

## Adding a guide

Append to the `guides` array in `src/data/guides.js`:

```js
{
  id: 'my-guide',                  // becomes #/guides/my-guide
  title: 'Title',
  subtitle: 'One line.',
  mods: ['create', 'mekanism'],    // links appear on those mod pages
  tags: ['tech'],                  // drives the grouping on the guides page
  level: 'Beginner',
  sections: [
    { type: 'text',  body: ['Paragraph one.', 'Paragraph two.'] },
    { type: 'steps', heading: 'Do this', items: ['Step 1', 'Step 2'] },
    { type: 'list',  heading: 'Notes', items: ['A', 'B'] },
    { type: 'tip',   heading: 'Tip title', body: 'Body.' },
    { type: 'warn',  heading: 'Careful', body: 'Body.' },
    { type: 'table', head: ['A', 'B'], rows: [['1', '2']] },
  ],
}
```

`**bold**` and `` `code` `` work inside any of those strings. Recognised tags are
`start here`, `tech`, `magic`, `combat`, `exploration`, `farming`, `building`,
`storage`, `utility`, `support`.

## Stack

Vite + React, no router or UI library — routing is a ~20-line hash router
(`src/router.js`), styling is one CSS file (`src/styles.css`). `sharp` and
`adm-zip` are dev-only, used by the sync script.
