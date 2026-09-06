// Hand-curated data layered on top of what we read out of the jars.
// Edit this file, then run `npm run build:data` to regenerate src/data/mods.json.
//
// The pack is Craftoria 1.33.2 (Minecraft 1.21.1 / NeoForge 21.1.248) plus the
// handful of jars listed in ADDED_JARS below, which we dropped in ourselves.

export const PACK = {
  name: 'Craftoria',
  version: '1.33.2',
  minecraft: '1.21.1',
  loader: 'NeoForge',
  loaderVersion: '21.1.248',
  curseforge: 'https://www.curseforge.com/minecraft/modpacks/craftoria',
  projectId: 1039252,
  instance: 'clean Craftoria',
};

export const CATEGORIES = [
  { id: 'dimensions', name: 'Dimensions', blurb: 'Whole new worlds to portal into.', icon: '🌌' },
  { id: 'worldgen', name: 'World Generation', blurb: 'Biomes, structures, dungeons and loot tables.', icon: '🗺️' },
  { id: 'mobs', name: 'Creatures & Bosses', blurb: 'New mobs, bosses and the things that hunt you.', icon: '🐉' },
  { id: 'tech', name: 'Tech & Automation', blurb: 'Machines, power, logistics and factories.', icon: '⚙️' },
  { id: 'magic', name: 'Magic & Combat', blurb: 'Spells, rituals, artifacts and gear progression.', icon: '✨' },
  { id: 'farming', name: 'Farming & Food', blurb: 'Crops, cooking, bees and animal husbandry.', icon: '🌾' },
  { id: 'storage', name: 'Storage & Inventory', blurb: 'Backpacks, barrels, drawers and sorting.', icon: '📦' },
  { id: 'building', name: 'Building & Decoration', blurb: 'Blocks, furniture and everything cosmetic you can place.', icon: '🏛️' },
  { id: 'utility', name: 'Utility & QoL', blurb: 'Small mods that remove friction from everyday play.', icon: '🧰' },
  { id: 'client', name: 'Client & Interface', blurb: 'HUD, maps, recipe viewers, shaders, sound.', icon: '🖥️' },
  { id: 'performance', name: 'Performance & Fixes', blurb: 'FPS, memory, chunk loading and bug patches.', icon: '🚀' },
  { id: 'library', name: 'Libraries & APIs', blurb: 'Dependencies. You never interact with these directly.', icon: '🧩' },
];

/* ── The jars WE added on top of stock Craftoria ────────────────────────
   Keyed by file name (without .jar). Everything else is shipped by the pack. */
export const ADDED_JARS = {
  'aether-1.21.1-1.5.10-neoforge': 'The classic floating-island dimension. The reason the rest of the Aether stack is here.',
  'deep_aether-1.21.1-1.1.5.1': 'Expansion for the Aether: extra biomes, two extra bosses, more gear.',
  'AetherVillages-1.21.1-1.0.8-neoforge': 'Puts actual villages — and villagers you can trade with — in the Aether.',
  'The_Undergarden-1.21.1-0.9.6': 'A second Nether-alternative dimension: fungal caverns, nasty mobs, Utherium and Cloggrum.',
  'mowziesmobs-1.21.1-1.8.2': 'Six hand-animated boss-grade mobs with real fight mechanics and real drops.',
  'adastra-1.21.1-1.16.24-neoforge': 'Rockets, space suits, oxygen, and the Moon / Mars / Venus / Mercury / Glacio planets.',
  'Ad-Astra-Giselle-Addon-neoforge-1.21.1-8.1': 'Glue between Ad Astra and the pack tech mods, so machines and power work in space.',
  'productivebees-1.21.1-13.13.5': 'Bees that produce ores, resources and mod materials — a fully passive resource line.',
  'cc-tweaked-1.21.1-forge-1.120.2': 'ComputerCraft: in-game Lua computers, turtles and monitors. Pairs with Advanced Peripherals.',
  'antiquetradingship-1.4.0-neoforge-1.21.1': 'A small wandering trading-ship structure with its own merchant.',
  'emi-qol-tweaks-neoforge-1.2': 'Tiny EMI tweaks — nicer recipe-screen behaviour.',
  'common-storage-lib-neoforge-1.21.1-0.0.10': 'Dependency of Ad Astra.',
  'owo-lib-neoforge-0.12.15.5-beta.1+1.21': 'Dependency of Ad Astra.',
  'XaeroHeadTracker-1.0.0-neoforge-1.21.1': "Puts everyone's player heads on the Xaero minimap and world map instead of plain arrows.",
};

/* ── Explicit modId → category ─────────────────────────────────────────── */
export const CATEGORY_OF = {
  // Dimensions
  aether: 'dimensions', deep_aether: 'dimensions', aether_villages: 'dimensions',
  thaumon: 'dimensions', undergarden: 'dimensions', twilightforest: 'dimensions',
  twilightdelight: 'dimensions', twilight_treehouses: 'dimensions', deeperdarker: 'dimensions',
  eternal_starlight: 'dimensions', the_bumblezone: 'dimensions', ad_astra: 'dimensions',
  ad_astra_giselle_addon: 'dimensions', ends_delight: 'dimensions', trenzalore: 'dimensions',
  compactmachines: 'tech', rftoolsbuilder: 'tech',

  // World generation
  yungsapi: 'worldgen', yungsbridges: 'worldgen', yungscavebiomes: 'worldgen', yungsextras: 'worldgen',
  betterdeserttemples: 'worldgen', betterdungeons: 'worldgen', betterendisland: 'worldgen',
  betterjungletemples: 'worldgen', bettermineshafts: 'worldgen', betterfortresses: 'worldgen',
  betteroceanmonuments: 'worldgen', betterstrongholds: 'worldgen', betterwitchhuts: 'worldgen',
  dungeons_arise: 'worldgen', dungeons_arise_seven_seas: 'worldgen', dungeoncrawl: 'worldgen',
  structory: 'worldgen', structory_towers: 'worldgen', t_and_t: 'worldgen', hopo: 'worldgen',
  hoporp: 'worldgen', hopour: 'worldgen', farmers_structures: 'worldgen', sawmillhouse: 'worldgen',
  smallhorsestable: 'worldgen', antiquetradingship: 'worldgen', desert_oasis: 'worldgen',
  biomeswevegone: 'worldgen', biolith: 'worldgen', terrablender: 'worldgen', tectonic: 'worldgen',
  ohthetreesyoullgrow: 'worldgen', snowundertrees: 'worldgen', simple_snowy_fix: 'worldgen',
  cursedearth: 'worldgen', repeatable_trial_vaults: 'worldgen', gateways: 'worldgen',
  lootr: 'worldgen', openloader: 'worldgen', sereneseasons: 'worldgen',
  enhancedcelestials2core: 'worldgen', enhancedcelestials2defaultlunarevents: 'worldgen',
  accelerateddecay: 'worldgen', duckling: 'worldgen', trofers: 'worldgen',
  jamd: 'worldgen', javd: 'worldgen', xycraft_world: 'worldgen',

  // Creatures & bosses
  mowziesmobs: 'mobs', cataclysm: 'mobs', bosses_of_mass_destruction: 'mobs',
  creeperoverhaul: 'mobs', endermanoverhaul: 'mobs', guardvillagers: 'mobs',
  sussysniffers: 'mobs', moredragoneggs: 'mobs', ribbits: 'mobs',
  cant_sleep_clowns_will_eat_me: 'mobs', phantoms_utilities: 'mobs',

  // Tech & automation
  mekanism: 'tech', mekanismgenerators: 'tech', mekanismtools: 'tech', mekaweapons: 'tech',
  mekanism_extras: 'tech', mekanism_unleashed: 'tech', moremekanismprocessing: 'tech',
  mekanismcurios: 'tech', mekanisticrouters: 'tech', mffs: 'tech',
  ae2: 'tech', appmek: 'tech', appflux: 'tech', ae2wtlib: 'tech', ae2ct: 'tech',
  ae2netanalyser: 'tech', ae2importexportcard: 'tech', advanced_ae: 'tech', extendedae: 'tech',
  megacells: 'tech', bigger_ae2: 'tech', arseng: 'tech', merequester: 'tech',
  rep_ae2_bridge: 'tech', hostilenetworks: 'tech',
  modern_industrialization: 'tech', extended_industrialization: 'tech',
  industrialization_overdrive: 'tech', mi_tweaks: 'tech', mifa: 'tech',
  modernindustrialrouters: 'tech', moderndynamics: 'tech',
  create: 'tech', createcasing: 'tech', create_hypertube: 'tech',
  createstockbridge: 'tech', create_connected: 'tech', create_dragons_plus: 'tech',
  create_enchantment_industry: 'tech', createfiltersanywhere: 'tech',
  create_pattern_schematics: 'tech', createschematicchecker: 'tech', colorwheel: 'tech',
  actuallyadditions: 'tech', industrialforegoing: 'tech', powah: 'tech', fluxnetworks: 'tech',
  pipez: 'tech', pipe_connector: 'tech', laserio: 'tech', sfm: 'tech', modularrouters: 'tech',
  rftoolsbase: 'tech', rftoolsutility: 'tech', entangled: 'tech', tesseract: 'tech',
  rangedpumps: 'tech', replication: 'tech', justdirethings: 'tech', pneumaticcraft: 'tech',
  pocketmachines: 'tech', xycraft_core: 'tech', xycraft_machines: 'tech', xycraft_override: 'tech',
  computercraft: 'tech', advancedperipherals: 'tech', integrateddynamics: 'tech',
  integratedcrafting: 'tech', integratedterminals: 'tech', integratedtunnels: 'tech',
  integratedscripting: 'tech', little_big_redstone: 'tech', morered: 'tech',
  moreredxcctcompat: 'tech', mob_grinding_utils: 'tech', jumbofurnace: 'tech', pylons: 'tech',
  charginggadgets: 'tech', mininggadgets: 'tech', immersive_aircraft: 'tech', wstweaks: 'tech',

  // Magic & combat
  ars_nouveau: 'magic', ars_additions: 'magic', ars_controle: 'magic', ars_creo: 'magic',
  ars_elemancy: 'magic', ars_elemental: 'magic', ars_musique: 'magic', ars_ocultas: 'magic',
  ars_technica: 'magic', ars_unification: 'magic',
  not_enough_glyphs: 'magic', starbunclemania: 'magic', reliquified_ars_nouveau: 'magic',
  irons_spellbooks: 'magic', irons_spells_js: 'magic', irons_spells_dynamic_skilltree: 'magic',
  irons_apothic: 'magic', irons_apothic_invaders: 'magic', irons_jewelry: 'magic',
  cataclysm_spellbooks: 'magic', gametechbcs_spellbooks: 'magic',
  aces_spell_utils: 'magic', enigmatic_arcana: 'magic', malum: 'magic', occultism: 'magic',
  occultism_kubejs: 'magic', spectrum: 'magic', neovitae: 'magic', animusnv: 'magic',
  crystal_chronicles: 'magic', oathboundrelics: 'magic', relics: 'magic', reliquary: 'magic',
  reliquified_lenders_cataclysm: 'magic', reliquified_twilight_forest: 'magic',
  artifacts: 'magic', apotheosis: 'magic', apothic_attributes: 'magic',
  apothic_enchanting: 'magic', apothic_spawners: 'magic', extra_apoth_compat: 'magic',
  advancednetherite: 'magic', justhammers: 'magic', moretotems: 'magic',
  charmofundying: 'magic', usefulhats: 'magic', darkglint: 'magic', blueflame: 'magic',
  puffish_skills: 'magic', puffish_attributes: 'magic', adventurer_skills: 'magic',
  luminax: 'magic', prickle: 'magic',

  // Farming & food
  farmersdelight: 'farming', moredelight: 'farming', oceansdelight: 'farming',
  fruitsdelight: 'farming', rusticdelight: 'farming', storagedelight: 'farming',
  displaydelight: 'farming', dumplings_delight: 'farming', barbequesdelight: 'farming',
  autochefsdelight: 'farming', sushigocrafting: 'farming', arsdelight: 'farming',
  cookingforblockheads: 'farming', farmingforblockheads: 'farming', productivebees: 'farming',
  letsdocompat: 'farming', beachparty: 'farming', brewery: 'farming', farm_and_charm: 'farming',
  herbalbrews: 'farming', vinery: 'farming', seasonal_lets_do: 'farming', aquaculture: 'farming',
  animal_pen: 'farming', animal_feeding_trough: 'farming',
  'farmers-cutting-oh-the-biomes-weve-gone-1.21.1-2.1-neoforge': 'farming',

  // Storage & inventory
  sophisticatedbackpacks: 'storage', sophisticatedstorage: 'storage',
  sophisticatedstoragecreateintegration: 'storage', sophisticatedstorageinmotion: 'storage',
  functionalstorage: 'storage', morefunctionalstorage: 'storage', bankstorage: 'storage',
  tankstorage: 'storage', shrink: 'storage', akashictome: 'storage', trashcans: 'storage',
  enderdrives: 'storage', enderstorage: 'storage',

  // Building & decoration
  chipped: 'building', rechiseled: 'building', rechiseled_chipped: 'building',
  rechiseledae: 'building', chisel: 'building', xtonesreworked: 'building',
  framedblocks: 'building', handcrafted: 'building', refurbished_furniture: 'building',
  cfm_wap: 'building', another_furniture: 'building', supplementaries: 'building',
  mcwbridges: 'building', mcwdoors: 'building', mcwfences: 'building', mcwholidays: 'building',
  mcwlights: 'building', mcwpaintings: 'building', mcwpaths: 'building', mcwroofs: 'building',
  mcwstairs: 'building', mcwtrpdoors: 'building', mcwwindows: 'building',
  simplylight: 'building', spectral_decorations: 'building', arts_and_crafts: 'building',
  aurelj_paintings: 'building', exposure: 'building', exposure_polaroid: 'building',
  gag: 'building', hazennstuff: 'building', dawnoftimebuilder: 'building',
  createdeco: 'building', bellsandwhistles: 'building', factory_blocks: 'building',
  glassential: 'building', woodwevegot: 'building', plushie_buddies: 'building',
  blahaj: 'building', buildinggadgets2: 'building', mbtool: 'building',
  mechtrowel: 'building', constructionstick: 'building',

  // Utility & QoL
  waystones: 'utility', netherportalfix: 'utility', naturescompass: 'utility',
  comforts: 'utility', clumps: 'utility', jumpoverfences: 'utility', jumpboat: 'utility',
  cleanswing: 'utility', almostunified: 'utility', utilitarian: 'utility', nanny: 'utility',
  serverstarted: 'utility', torchmaster: 'utility', revelationary: 'utility',
  stickit: 'utility', voicechat: 'utility', darkutils: 'utility', attributefix: 'utility',
  trade_cycling: 'utility', dummmmmmy: 'utility', extrasponges: 'utility',
  bridgingmod: 'utility', elevatorid: 'utility', obsidianboat: 'utility', tempad: 'utility',
  leaderboards: 'utility', createultimine: 'utility', lootbeams: 'utility',
  trashslot: 'utility', simplemagnets: 'utility', craftingstation: 'utility',
  craftingtweaks: 'utility', inventoryessentials: 'utility', findme: 'utility',
  curious_armor_stands: 'utility', yigd: 'utility', measurements: 'utility',
  modernworldcreation: 'utility',

  // FTB / quests
  ftbquests: 'utility', ftbquestslangsplitter: 'utility', ftbteams: 'utility',
  ftbranks: 'utility', ftbessentials: 'utility', ftbchunks: 'utility',
  ftbultimine: 'utility', ftbfiltersystem: 'utility', ftbxaerocompat: 'client',
  ftbxmodcompat: 'utility',

  // Recipe viewers, HUD, client
  emi: 'client', emi_loot: 'client', emi_ores: 'client', emiprofessions: 'client',
  emi_letsdo_compat: 'client', emiaddon: 'client', emiffect: 'client', emi_enchanting: 'client',
  toomanyrecipeviewers: 'client', jade: 'client', jadeaddons: 'client',
  mekagenjei: 'client', mekajadeupgrade: 'client', jei_mekanism_multiblocks: 'client',
  xaerominimap: 'client', xaeroworldmap: 'client', xaeroheadtracker: 'client', iris: 'client', iris_shader_folder: 'client',
  euphoria_patcher: 'client', lambdynlights: 'client', lighty: 'client',
  entity_model_features: 'client', entity_texture_features: 'client', fusion: 'client',
  ctm: 'client', darkmodeeverywhere: 'client', enhancedcelestials2shaders: 'client',
  fancymenu: 'client', fancytoasts: 'client', melody: 'client', bhmenu: 'client',
  mod_menu: 'client', betteradvancements: 'client', overloadedarmorbar: 'client',
  colorfulhearts: 'client', legendarytooltips: 'client', mousetweaks: 'client',
  moremousetweaks: 'client', controlling: 'client', notenoughanimations: 'client',
  chat_heads: 'client', subtle_effects: 'client', particle_effects: 'client',
  more_sounds: 'client', sounds: 'client', ambientsounds: 'client',
  sound_physics_remastered: 'client', seasonhud: 'client', pinghud: 'client',
  wits: 'client', nerb: 'client', immersiveui: 'client', sdrp: 'client',
  starcatcher: 'client', crystalix: 'client', flickerfix: 'client', clienttweaks: 'client',
  transmog: 'client', equipmentcompare: 'client', showcaseitem: 'client',
  transfer_labels: 'client', wireless_terminal_color: 'client', zume: 'client',
  cherishedworlds: 'client', keybindbundles: 'client', keybindjs: 'client',
  desiredservers: 'client', travelerstitles: 'client', bwncr: 'client',
  heyberryshutup: 'client', chattoggle: 'client', extremesoundmuffler: 'client',
  smithingtemplateviewer: 'client', gmut: 'client', modlistmemory: 'client',
  crash_assistant: 'client', emotecraft: 'client', capejs: 'client', waveycapes: 'client',
  chatimpressiveanimation: 'client', justenoughbreeding: 'client', boss_checklist: 'client',
  inventoryprofilesnext: 'client', yeetusexperimentus: 'client', mi_sound_addon: 'client',
  playeranimator: 'library',

  // Performance & fixes
  modernfix: 'performance', ferritecore: 'performance', alltheleaks: 'performance',
  entityculling: 'performance', immediatelyfast: 'performance', noisium: 'performance',
  c2me: 'performance', cupboard: 'performance', packetfixer: 'performance',
  invasiveopts: 'performance', fastbench: 'performance', fastfurnace: 'performance',
  fastsuite: 'performance', aiimprovements: 'performance', connectivity: 'performance',
  tfthreadsafetyaddon: 'performance', sodium: 'performance', sodium_extra: 'performance',
  nolijium: 'performance', imfast: 'performance', spark: 'performance',
  observable: 'performance', crashutilities: 'performance', dataanchor: 'performance',
  lmft: 'performance', bcc: 'performance', alternate_current: 'performance',
  raricompat: 'performance', pufferfish_unofficial_additions: 'performance',

  // Loot integrations
  lootintegrations: 'worldgen', lootintegrations_cataclysm: 'worldgen',
  lootintegrations_dungeoncrawl: 'worldgen', lootintegrations_hopo: 'worldgen',
  lootintegrations_structory: 'worldgen', lootintegrations_yungs: 'worldgen',
  lootintegration_townsandtowers: 'worldgen', lootintegration_wda: 'worldgen',

  // Libraries & pack plumbing
  craftoria_core: 'library', kubejs: 'library', kubejs_actuallyadditions: 'library',
  kubejs_mekanism: 'library', rhino: 'library', lootjs: 'library', probejs: 'library',
  architectury: 'library', balm: 'library', bookshelf: 'library', botarium: 'library',
  caelus: 'library', cerbons_api: 'library', cloth_config: 'library', codechickenlib: 'library',
  collective: 'library', commoncapabilities: 'library', commonnetworking: 'library',
  common_storage_lib: 'library', corgilib: 'library', creativecore: 'library',
  cristellib: 'library', cryonicconfig: 'library', curios: 'library', cyclopscore: 'library',
  elytraslot: 'library', framework: 'library', fzzy_config: 'library', geckolib: 'library',
  glitchcore: 'library', glodium: 'library', guideme: 'library', hazentouvelib: 'library',
  iceberg: 'library', irons_lib: 'library', jamlib: 'library', jinxedlib: 'library',
  lionfishapi: 'library', lithostitched: 'library', lodestone: 'library', mcjtylib: 'library',
  midnightlib: 'library', modonomicon: 'library', monolib: 'library', moonlight: 'library',
  mru: 'library', octolib: 'library', owo: 'library', patchouli: 'library',
  perception: 'library', placebo: 'library', polylib: 'library', prism: 'library',
  puzzleslib: 'library', resourcefullib: 'library', resourcefulconfig: 'library',
  searchables: 'library', smartbrainlib: 'library', supermartijn642configlib: 'library',
  supermartijn642corelib: 'library', titanium: 'library', txnilib: 'library',
  atlas_api: 'library', azurelib: 'library', temporalapi: 'library', tesseract_api: 'library',
  yet_another_config_lib_v3: 'library', kotlinforforge: 'library', konkrete: 'library',
  delightlib: 'library', doapi: 'library', gtbcs_spell_lib: 'library', libipn: 'library',
  nirvana_lib: 'library', athena: 'library', loadingprotection: 'performance',
  distraction_free_recipes: 'client', enchdesc: 'client', smoothchunk: 'performance',
  chunksending: 'performance', memoryleakfix: 'performance', continuity: 'client',
  spikyspikes: 'magic', embeddium: 'performance', biomemusic: 'client',
  appleskin: 'client', extra_mod_integrations: 'client', ftblibrary: 'library',
  gaze: 'client', rarcompat: 'utility', sophisticatedcore: 'library', theurgy: 'magic',
};

/* ── Fallback rules, applied in order when a modId is not in the map ───── */
export const CATEGORY_RULES = [
  [/^ars_/, 'magic'],
  [/^(create|mekanism|ae2|rftools|xycraft|mi_|integrated)/, 'tech'],
  [/^(mcw|chipped|rechiseled|deco)/, 'building'],
  [/^(yungs|better|dungeons|structor|loot)/, 'worldgen'],
  [/^(ftb|emi|kubejs)/, 'utility'],
  [/(delight|cooking|farming|_food)/, 'farming'],
  [/(lib$|_lib|_api|api$|core$|^lib)/, 'library'],
  [/(hud|tooltip|menu|screen|chat|sound|shader|texture|anim|render)/, 'client'],
  [/(fix|perf|fast|optim|leak)/, 'performance'],
];

/* ── Descriptions for jars whose metadata is empty or useless ──────────── */
export const OVERRIDES = {
  emiaddon: { name: 'EMI QoL Tweaks', description: 'Small quality-of-life tweaks to the EMI recipe viewer.' },
  dummmmmmy: { name: 'Target Dummy', description: 'A punching bag that reports your real DPS. Use it before you go fight anything from Cataclysm.' },
  craftoria_core: { description: 'Craftoria’s own glue mod — pack recipes, tags, worldgen tweaks and quest hooks live here. Never remove it.' },
  irons_spellbooks: { description: 'A full spellcasting system: ten schools of magic, spell scrolls, spell books, mana, cast times and upgrade gear.' },
  occultism: { description: 'Summoning-based magic: demon rituals, familiars, spirit-powered storage and automation.' },
  modonomicon: { description: 'In-game guide-book engine used by several mods in this pack.' },
  neovitae: { description: 'Blood Magic reborn for 1.21 — blood altar, life essence, sigils and rituals.' },
  spectrum: { description: 'A very large progression magic mod: pigment, ink, the Deeper Down dimension, and a guide book that walks you through all of it.' },
  emi: { description: 'The recipe viewer this pack uses — not JEI. Same idea, better sidebar, and it can build a crafting tree for you.' },
};

// Mods that deserve a "start here" badge on the home page.
export const HIGHLIGHTS = [
  'create', 'mekanism', 'ae2', 'modern_industrialization', 'ars_nouveau', 'irons_spellbooks',
  'apotheosis', 'ftbquests', 'aether', 'undergarden', 'ad_astra', 'cataclysm',
  'sophisticatedbackpacks', 'twilightforest', 'emi', 'productivebees',
];

export const IS_LIBRARY = (m) => m.category === 'library';
