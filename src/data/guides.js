// Hand-written guides for our Craftoria run. Each guide is attached to one or
// more modIds so the mod detail page can link to it automatically.
//
// Section types: 'text' (paragraphs), 'steps' (ordered list), 'list' (bullets),
// 'tip' | 'warn' (callout), 'table' ({ head: [], rows: [[]] }).

export const guides = [
  {
    id: 'first-hour',
    title: 'Your first hour in Craftoria',
    subtitle: 'What to do, what to ignore, and what not to panic about.',
    mods: ['ftbquests', 'emi', 'jade', 'waystones'],
    tags: ['start here'],
    level: 'Beginner',
    sections: [
      { type: 'text', body: [
        'Craftoria is a **kitchen-sink pack with a quest book**. That combination matters: 500+ mods is intimidating, but you are never supposed to browse them. The quest book decides what you look at next.',
        'So: play Minecraft normally for the first evening, and let the book pull you forward. Everything on this site is a reference for *after* you have hit something confusing.',
      ]},
      { type: 'steps', heading: 'Do these five things', items: [
        'Open the **FTB Quests** book (the icon in the top-left, or the book in your inventory on spawn). Do the first chapter. It hands you starting gear and teaches the pack\'s own shortcuts.',
        'Learn **EMI**, not JEI. This pack uses EMI as the recipe viewer — `R` for recipe, `U` for uses, and the tree button in a recipe screen builds the whole crafting chain for you.',
        'Look at any block or mob and read the **Jade** tooltip at the top of the screen. Block name, mod, energy, fluid, progress, mob health — it answers most "what is this" questions.',
        'Claim your base with **FTB Chunks** (`M` for the map, left-drag to claim, shift-drag to force-load). Do this before you build anything you care about.',
        'Bind the first **Waystone** you find. They are in villages and scattered in the world, and they are the fast-travel network.',
      ]},
      { type: 'tip', heading: 'Your stuff does not scatter when you die', body: 'The pack keeps your inventory in a grave at the death spot. Walk back and break it. Nothing despawns, so a bad death is a walk, not a disaster.' },
      { type: 'list', heading: 'Quality-of-life you already have and probably don\'t know about', items: [
        '**FTB Ultimine** — hold the ultimine key while mining and the whole vein / tree / patch goes at once.',
        '**Carry On** — sneak + right-click a chest or machine with an empty hand to pick it up with its contents.',
        '**Clumps** — XP orbs merge, so grinders stop lagging.',
        '**Zume** — a zoom key, like Optifine\'s.',
        '**Akashic Tome** — combine all your mod guide books into one item.',
        '**Almost Unified** — copper is copper. You will not end up with nine incompatible ingots of the same metal.',
      ]},
      { type: 'warn', heading: 'Don\'t chase tech on day one', body: 'Mekanism, Modern Industrialization and AE2 are all in here and all deep. Pick **one** and ignore the others until you have a power source. Trying all three at once is how people bounce off this pack.' },
    ],
  },

  {
    id: 'quests',
    title: 'The quest book is the actual guide',
    subtitle: 'How Craftoria expects you to progress, and why you should follow it.',
    mods: ['ftbquests', 'ftbteams', 'ftbchunks', 'ftbessentials', 'craftoria_core'],
    tags: ['start here'],
    level: 'Beginner',
    sections: [
      { type: 'text', body: [
        'Craftoria is not a "do whatever" pack pretending to have quests. The book is a real progression spine: it gates the big tech mods behind each other, hands out meaningful rewards, and — critically — tells you which of the 500 mods are actually load-bearing.',
        'Chapters unlock as you complete the previous ones. Quests with a **dotted outline** are optional side content; solid ones are the main line.',
      ]},
      { type: 'steps', heading: 'How to actually use it', items: [
        'Open the book. Read the chapter list on the left before doing anything — that list *is* the pack\'s table of contents.',
        'Click a quest to see its requirements and its reward. Most requirements auto-detect: just have the item in your inventory.',
        'Claim rewards manually. They do not auto-collect, and people finish the pack with fifty unclaimed reward chests.',
        'When you don\'t know what to build next, open the book, not this website.',
      ]},
      { type: 'tip', heading: 'Play as a team', body: 'FTB Teams shares quest progress, chunk claims and rewards across the team. Make one team on day one — `/ftbteams` or the Teams tab — otherwise everyone grinds the same quests separately.' },
      { type: 'list', heading: 'The rest of the FTB stack', items: [
        '**FTB Chunks** — `M` for map, claiming and force-loading. Force-loaded chunks keep ticking when you log off; use them for farms, not for scenery.',
        '**FTB Essentials** — `/home`, `/back`, `/tpa`, `/rtp`. Check what the server has enabled.',
        '**FTB Ranks** — permissions, if we ever need them.',
        '**FTB Filter System** — the filter UI shared by several of the pack\'s machines.',
      ]},
    ],
  },

  {
    id: 'our-additions',
    title: 'What we added on top of Craftoria',
    subtitle: 'The fourteen mods we added, why each one is there, and what it changes.',
    mods: ['aether', 'deep_aether', 'aether_villages', 'undergarden', 'mowziesmobs', 'ad_astra', 'ad_astra_giselle_addon', 'productivebees', 'computercraft', 'antiquetradingship', 'xaeroheadtracker'],
    tags: ['start here'],
    level: 'Beginner',
    sections: [
      { type: 'text', body: [
        'Stock Craftoria is excellent at tech and magic and slightly thin on **places to go**. Everything we added is either a destination, a boss fight, or a passive resource line that pairs with the pack\'s automation.',
        'These are the only differences from the pack as published. Nothing was removed.',
      ]},
      { type: 'table', head: ['What', 'Why we added it'], rows: [
        ['**The Aether** + Deep Aether + Aether Villages', 'A proper second overworld. Floating islands, four bosses, its own gear tree, and now villages you can trade in.'],
        ['**The Undergarden**', 'A Nether-alternative with real progression — Cloggrum, Froststeel, Utherium — and it is genuinely dangerous.'],
        ['**Mowzie\'s Mobs**', 'Six hand-animated bosses. Pure fight quality; the Ferrous Wroughtnaut and Umvuthi are among the best boss fights in modded.'],
        ['**Ad Astra** (+ Giselle addon)', 'Space. Rockets, oxygen, five planets. The Giselle addon is what lets Mekanism / Modern Industrialization machines actually work off-world.'],
        ['**Productive Bees**', 'A passive, fully automatable resource line that pairs perfectly with the pack\'s existing automation without competing with it.'],
        ['**CC: Tweaked**', 'Lua computers and turtles. Craftoria already ships Advanced Peripherals, which is a CC addon — it was strange for the base mod to be missing.'],
        ['**Antique Trading Ship**', 'A small structure with a merchant. Cheap flavour.'],
        ['**EMI QoL Tweaks**', 'Minor recipe-screen polish.'],
        ['**Xaero Head Tracker**', 'Shows each player’s head on the minimap and world map instead of an anonymous arrow, so you can tell who is who at a glance.'],
        ['**oωo Lib, Common Storage Lib**', 'Not content — required dependencies of Ad Astra.'],
      ]},
      { type: 'warn', heading: 'Everyone needs all fourteen', body: 'These are not optional client mods. A player missing Ad Astra or the Aether cannot join. See the Install page for the full list.' },
      { type: 'tip', heading: 'They are not in the quest book', body: 'The FTB Quests chapters only cover stock Craftoria. Nothing we added has quests — you find it by going there. That is fine; the Aether and the Undergarden have their own in-game progression.' },
    ],
  },

  {
    id: 'tech-tree',
    title: 'Three tech mods, one base: which to pick',
    subtitle: 'Mekanism vs Modern Industrialization vs Create — and how to not do all three.',
    mods: ['mekanism', 'modern_industrialization', 'create', 'actuallyadditions', 'powah'],
    tags: ['tech'],
    level: 'Beginner',
    sections: [
      { type: 'text', body: [
        'Craftoria ships three complete, overlapping tech mods. They all make power, they all process ores, and any one of them can carry you to the end of the pack. Doing all three at once is the most common way to stall out.',
        'Pick one as your **spine**, and use the others for the two or three things they do best.',
      ]},
      { type: 'table', head: ['Mod', 'Feels like', 'Pick it if'], rows: [
        ['**Mekanism**', 'Clean, linear, extremely well documented. Ore multiplication from 2x up to 5x in tidy steps.', 'You want an obvious ladder to climb and the best ore processing in the pack.'],
        ['**Modern Industrialization**', 'Realistic, multiblock-heavy, unforgiving. Steam → electric → nuclear, with real chemistry.', 'You liked GregTech but want it readable. This is Craftoria\'s signature mod.'],
        ['**Create**', 'Kinetic, physical, beautiful. Rotation instead of electricity.', 'You care how a factory *looks* and want to build contraptions, not just place blocks.'],
      ]},
      { type: 'steps', heading: 'A route that works', items: [
        'Get through iron and a basic ore doubler with whichever mod\'s quest chapter you\'re on.',
        'Build **one** reliable power source and enough of it. Powah reactors and Mekanism\'s heat generators are the boring, correct early answers.',
        'Automate ore processing before anything else. Everything downstream needs materials.',
        'Add **AE2** once you have more than three chests of clutter. Do not add it before — it will eat your time.',
        'Use Create only for what it is best at: bulk processing, trains, and moving contraptions. Its power does not need to run your base.',
      ]},
      { type: 'tip', heading: 'The mods do interconnect', body: 'Every power system in the pack speaks Forge Energy through converters, and Almost Unified means their ingots are the same ingots. Mixing is fine — just have one *primary*.' },
      { type: 'warn', heading: 'Modern Industrialization is the deep end', body: 'MI\'s steam age is a real time investment and its multiblocks are unforgiving about block placement. Excellent mod, but not the one to learn on your first evening.' },
    ],
  },

  {
    id: 'create',
    title: 'Create: rotation, stress and your first machines',
    subtitle: 'The kinetic mod. Everything runs on rotation instead of energy.',
    mods: ['create', 'create_connected', 'create_enchantment_industry', 'createstockbridge', 'create_dragons_plus', 'createdeco', 'create_hypertube'],
    tags: ['tech'],
    level: 'Beginner',
    sections: [
      { type: 'text', body: [
        'Create does not use electricity. Machines are powered by **rotation**, produced by a generator and carried through shafts, cogwheels and belts.',
        'Two numbers matter: **speed** (RPM) and **stress**. Every machine consumes stress units; every generator supplies them. Overload the network and everything stops until you add another generator.',
      ]},
      { type: 'steps', heading: 'The starter loop', items: [
        'Craft Andesite Alloy (andesite + iron/zinc nuggets) — this is Create\'s "sticks".',
        'Build a Water Wheel or Windmill for early rotation. Large Water Wheels in flowing water are the cheapest stable power.',
        'Place a Cogwheel against the shaft, then Large Cogwheel + small cogwheel pairs to change speed ratios.',
        'Make a Millstone (grinds ores and wheat) and a Mechanical Press (makes plates). These two carry you through the early game.',
        'Add a Mechanical Mixer + Basin over a Blaze Burner for alloys and mixing recipes.',
      ]},
      { type: 'tip', heading: 'Ponder is the real manual', body: 'Hold any Create item and press `W`. Create animates exactly how the block works. It is better than any wiki page — use it before asking in chat.' },
      { type: 'list', heading: 'The Create addons in this pack', items: [
        '**Create: Connected** — the quality-of-life addon. Better belts, more casings, and the things you expected Create to already have.',
        '**Create: Enchantment Industry** — automate enchanting and disenchanting with experience as a fluid. One of the best reasons to run Create here.',
        '**Create: Dragons Plus** — dragon-themed machines and materials.',
        '**Create Stock Bridge** — links Create\'s stock keeper logistics to other storage systems.',
        '**Hypertube** — fast player/item transport tubes.',
      ]},
      { type: 'warn', heading: 'Contraptions and chunk borders', body: 'Moving contraptions that cross unloaded chunks will stall. Keep trains and elevators inside FTB Chunks force-loaded areas.' },
    ],
  },

  {
    id: 'mekanism',
    title: 'Mekanism: ore multiplication and the factory ladder',
    subtitle: 'The most legible tech progression in the pack.',
    mods: ['mekanism', 'mekanismgenerators', 'mekanismtools', 'mekaweapons', 'mekanism_extras', 'moremekanismprocessing', 'appmek'],
    tags: ['tech'],
    level: 'Intermediate',
    sections: [
      { type: 'text', body: [
        'Mekanism is a ladder. Each tier of machine and cable is Basic → Advanced → Elite → Ultimate → Creative, and each tier of ore processing multiplies your ore output further.',
        'Everything runs on **Joules** (which convert cleanly to Forge Energy), moved by Universal Cables and stored in Energy Cubes.',
      ]},
      { type: 'table', head: ['Tier', 'Chain', 'Output'], rows: [
        ['2x', 'Enrichment Chamber', 'ore → 2 dust'],
        ['3x', '+ Purification Chamber (oxygen)', 'ore → 3 clumps'],
        ['4x', '+ Chemical Injection Chamber (HCl)', 'ore → 4 shards'],
        ['5x', '+ Chemical Dissolution + Washer + Crystallizer', 'ore → 5 crystals'],
      ]},
      { type: 'steps', heading: 'Getting started', items: [
        'Osmium is the gate. Find it, make an Enrichment Chamber and a Metallurgic Infuser.',
        'Power it with a Heat Generator burning coal (fine early) or a Gas-Burning Generator on ethylene (the real answer).',
        'Build the 3x chain next — an Electrolytic Separator on water gives you the oxygen and hydrogen you need.',
        'Get a Digital Miner as soon as you can afford it. It replaces mining entirely.',
        'Use Factories (Basic/Advanced/Elite) instead of rows of single machines — one Factory does 3–9 items at once.',
      ]},
      { type: 'tip', heading: 'Configurator and wrench', body: 'The Configurator changes machine side I/O, and shift-right-click with a wrench picks up a machine keeping its contents and config. This saves hours.' },
      { type: 'tip', heading: 'AppMek', body: 'AppMek bridges Mekanism chemicals into your AE2 network so you can store and auto-craft with gases directly.' },
    ],
  },

  {
    id: 'modern-industrialization',
    title: 'Modern Industrialization: the steam age',
    subtitle: 'Craftoria\'s signature tech mod. Multiblocks, chemistry and no shortcuts.',
    mods: ['modern_industrialization', 'extended_industrialization', 'industrialization_overdrive', 'mi_tweaks', 'moderndynamics'],
    tags: ['tech'],
    level: 'Advanced',
    sections: [
      { type: 'text', body: [
        'Modern Industrialization is GregTech-shaped: you start with a bronze-and-steam era, graduate to electricity in LV/MV/HV/EV tiers, and end up doing actual chemistry to make the materials you need.',
        'It is the deepest mod in the pack and it has the steepest early curve. The payoff is a factory that feels earned.',
      ]},
      { type: 'steps', heading: 'The steam age, in order', items: [
        'Make a Forge Hammer (no power) and a Bronze Furnace. Bronze is your first metal.',
        'Build the **Coke Oven** multiblock — coke and creosote are the bottleneck for everything after this.',
        'Steel via the **Blast Furnace** multiblock. This is the real gate; everything electric needs steel.',
        'Boiler + steam pipes → Steam Machines (macerator, compressor, cutting machine).',
        'Then the **Electric Blast Furnace** and LV circuits, and you are into the electric era.',
      ]},
      { type: 'warn', heading: 'Multiblocks are literal', body: 'Every casing must be the right block in the right position, including corners and the controller facing. MI tells you exactly which block is wrong in the controller GUI — read it rather than rebuilding blindly.' },
      { type: 'list', heading: 'Things that make MI bearable', items: [
        '**Modern Dynamics** — the pipe mod MI expects you to use. Items, fluids and energy, with filters and priorities.',
        '**Extended Industrialization** and **Industrialization Overdrive** — extra machines, materials and higher tiers.',
        '**MI Tweaks** — pack-side balance and recipe adjustments.',
        'EMI\'s recipe tree button. For MI it is not a convenience, it is a necessity.',
      ]},
    ],
  },

  {
    id: 'ae2',
    title: 'Applied Energistics 2: digital storage',
    subtitle: 'When chests stop working, this is the answer.',
    mods: ['ae2', 'ae2wtlib', 'advanced_ae', 'extendedae', 'megacells', 'appmek', 'appflux', 'merequester', 'arseng', 'ae2netanalyser'],
    tags: ['tech'],
    level: 'Intermediate',
    sections: [
      { type: 'text', body: [
        'AE2 turns your entire inventory into a searchable network you access from a terminal. It also does **autocrafting**: ask for 64 gearboxes, and the network crafts the whole tree for you.',
        'The cost is that it needs power, channels, and a bit of thinking about network layout.',
      ]},
      { type: 'steps', heading: 'Minimum viable network', items: [
        'Get Certus Quartz (grow it in water with Charged Certus + Crystal Growth Accelerators) and Fluix (charged certus + quartz + redstone, thrown in water).',
        'Craft an ME Controller, an Energy Acceptor, an ME Drive and a couple of 4k/16k storage cells.',
        'Add an ME Terminal (or Crafting Terminal — you want the crafting one).',
        'Feed it power from whatever tech mod you chose. AE2 is cheap to run at this scale.',
        'For autocrafting: a Molecular Assembler, a Pattern Provider, and Crafting Storage blocks. Encode patterns in the Pattern Encoding Terminal.',
      ]},
      { type: 'tip', heading: 'Channels, in one line', body: 'Each cable carries 8 channels; each device that needs one eats one. If something shows "device offline", you ran out — put an ME Controller face or a Dense Cable in the path.' },
      { type: 'list', heading: 'The addons here', items: [
        '**AE2 Wireless Terminals** — wireless crafting/pattern terminals. Get this early, it changes how the mod feels.',
        '**Advanced AE** and **ExtendedAE** — bigger crafting CPUs, better cells, quality-of-life blocks.',
        '**MEGA Cells** — absurdly large storage cells for late game.',
        '**AppMek** / **AppFlux** — Mekanism chemicals and Forge Energy inside the network.',
        '**ME Requester** and **AE2 Network Analyser** — automatic restocking, and a tool that shows you where your channels went.',
        '**Ars Energistique** — bridges Ars Nouveau source into AE2.',
      ]},
      { type: 'warn', heading: 'Don\'t start AE2 first', body: 'It is a logistics solution to a problem you have not got yet. Build a factory, get overwhelmed, then build AE2 to fix it.' },
    ],
  },

  {
    id: 'ars-nouveau',
    title: 'Ars Nouveau: build your own spells',
    subtitle: 'The most creative magic mod in the pack, and it automates things.',
    mods: ['ars_nouveau', 'ars_elemental', 'ars_additions', 'ars_technica', 'ars_elemancy', 'ars_creo', 'ars_ocultas', 'ars_controle', 'ars_musique', 'not_enough_glyphs', 'starbunclemania', 'arsdelight', 'arseng', 'ars_unification'],
    tags: ['magic'],
    level: 'Beginner',
    sections: [
      { type: 'text', body: [
        'Ars Nouveau lets you **write** spells out of glyphs instead of picking from a list. A spell is a Form (Projectile, Touch, Self, AoE) followed by Effects (Break, Harm, Place Block…) and Augments (Amplify, Extend Time, Pierce).',
        'It runs on **Source**, a magical fluid you generate from Source Relays and jars, and it is genuinely good at automation — not just combat.',
      ]},
      { type: 'steps', heading: 'Getting going', items: [
        'Craft the **Worn Notebook** first. It is the in-game guide and it is excellent.',
        'Make an Arcane Pedestal ring around an **Enchanting Apparatus** — this is your ritual crafting station.',
        'Build a Novice Spell Book and a **Scribe\'s Table** to unlock glyphs from research.',
        'Your first useful spell: `Projectile → Break → Amplify` is a mining laser. `Touch → Grow` is a farm.',
        'Set up **Source Jars** + a Source Relay chain, then Sourceberry bushes or a Volcanic Sourcelink for generation.',
      ]},
      { type: 'tip', heading: 'Automation, quietly', body: 'Whirlisprigs harvest crops, Drygmys collect mob drops passively, Wixies auto-craft, and Starbuncles move items. This is a full automation mod dressed as a magic mod.' },
      { type: 'list', heading: 'What the addons add', items: [
        '**Ars Elemental** — elemental schools, more glyphs, and the Mage\'s Chest.',
        '**Ars Technica** — Create integration.',
        '**Ars Elemancy / Additions / Ocultas / Creo** — more glyphs, rituals and gear.',
        '**Ars Controle** and **Ars Énergistique** — control blocks and AE2 integration.',
        '**Not Enough Glyphs** — better spell-crafting UI. Turn it on.',
        '**Starbunclemania** — Starbuncles that move fluids, not just items.',
      ]},
    ],
  },

  {
    id: 'irons-spellbooks',
    title: 'Iron\'s Spells & Spellbooks',
    subtitle: 'Pick-a-spell magic combat. The other half of the magic side.',
    mods: ['irons_spellbooks', 'irons_apothic', 'irons_jewelry', 'cataclysm_spellbooks', 'aces_spell_utils', 'irons_spells_dynamic_skilltree', 'irons_spells_js', 'gametechbcs_spellbooks'],
    tags: ['magic'],
    level: 'Beginner',
    sections: [
      { type: 'text', body: [
        'Where Ars Nouveau is about *building* spells, Iron\'s is about *collecting* them. Ten schools — fire, ice, lightning, holy, ender, blood, evocation, nature, eldritch, poison — each with its own scrolls, gear and playstyle.',
        'You have a mana bar, spells have cast times and cooldowns, and gear scales specific schools. It plays like an action RPG.',
      ]},
      { type: 'steps', heading: 'Becoming a caster', items: [
        'Find or craft **spell scrolls**. They drop from mobs and generate in chests; the pack also has ways to craft them.',
        'Get a **spell book** (Novice → Apprentice → Wizard → …). More slots and higher-tier spells as you upgrade.',
        'Inscribe scrolls into the book at an Inscription Table.',
        'Wear school-matching robes/staffs — Fire gear boosts fire spells and gives you spell power and cooldown reduction.',
        'Watch your mana. Mana regen gear matters more than raw damage early.',
      ]},
      { type: 'tip', heading: 'It has a skill tree here', body: 'Iron\'s Spells: Dynamic Skill Tree is installed, so casting progression is a tree you spend points in rather than pure gear luck.' },
      { type: 'list', heading: 'Addons in the pack', items: [
        '**Iron\'s Apothic** — Apotheosis affixes and gems apply to spell gear.',
        '**Iron\'s Jewelry** — rings and amulets that modify spells.',
        '**Cataclysm Spellbooks** — spells themed on the Cataclysm bosses.',
        '**Ace\'s Spell Utils** and **GameTech BCS** — extra spells and utilities.',
      ]},
    ],
  },

  {
    id: 'magic-others',
    title: 'The other four magic mods',
    subtitle: 'Spectrum, Malum, Occultism and NeoVitae — what each is for.',
    mods: ['spectrum', 'malum', 'occultism', 'neovitae', 'animusnv', 'enigmatic_arcana', 'crystal_chronicles', 'theurgy'],
    tags: ['magic'],
    level: 'Intermediate',
    sections: [
      { type: 'text', body: [
        'Craftoria has more magic mods than most people will ever finish. Here is what each is actually about so you can pick.',
      ]},
      { type: 'table', head: ['Mod', 'The pitch', 'Time cost'], rows: [
        ['**Spectrum**', 'Colour, pigment and ink as a resource system, leading to the Deeper Down dimension. Huge, self-contained, has one of the best guide books in modded.', 'Very high — it is basically its own pack.'],
        ['**Malum**', 'Dark, atmospheric alchemy. Spirits harvested from mobs, a runewood tree farm, and a tidy little progression. Beautiful.', 'Low to medium. Good first magic mod.'],
        ['**Occultism**', 'Summon demons. They mine for you, craft for you, and provide dimensional storage bigger than any chest.', 'Medium. The storage alone justifies it.'],
        ['**NeoVitae**', 'Blood Magic reborn: a blood altar, life essence, sigils, rituals. Costs HP, pays in power.', 'Medium-high.'],
      ]},
      { type: 'tip', heading: 'Start with the book', body: 'Every one of these ships a guide book (Patchouli or Modonomicon). Craft it first — combine them into the Akashic Tome so you carry one item instead of six.' },
      { type: 'warn', heading: 'Don\'t start four at once', body: 'Same rule as the tech mods. Pick one, finish its early chapters, then branch.' },
    ],
  },

  {
    id: 'apotheosis',
    title: 'Apotheosis: gear that actually matters',
    subtitle: 'Affixes, gems, enchanting beyond 30, and boss mobs worth killing.',
    mods: ['apotheosis', 'apothic_attributes', 'apothic_enchanting', 'apothic_spawners', 'gateways', 'irons_apothic'],
    tags: ['combat'],
    level: 'Intermediate',
    sections: [
      { type: 'text', body: [
        'Apotheosis is why loot in this pack is exciting. Weapons and armour roll **affixes** and rarities (Common → Mythic), have **gem sockets**, and can be enchanted well past vanilla level 30.',
        'It also spawns **Apotheosis bosses** — invaders with names, buffs and guaranteed good drops. Fighting them is the main gear loop.',
      ]},
      { type: 'steps', heading: 'The enchanting rework', items: [
        'Your enchanting table now cares about what surrounds it: bookshelves for eterna (max level), candles/sea lanterns for quanta (randomness), and blocks for arcana (rare enchant chance).',
        'Read the info panel in the enchanting table GUI — it tells you your current eterna/quanta/arcana and what is capping you.',
        'Build an Infusion Enchanting setup to push past vanilla caps.',
        'Use the Salvaging Table to break bad affix gear into materials and gem dust.',
        'Reforge gear at a Reforging Table using gem dust and rarity materials to reroll affixes.',
      ]},
      { type: 'tip', heading: 'Gems and sockets', body: 'Sockets come from the Sigil of Socketing. Gems slot into them and give real stats — a socketed Mythic weapon outclasses anything you can enchant normally.' },
      { type: 'list', heading: 'The rest of the stack', items: [
        '**Apothic Attributes** — the extended attribute system everything else hooks into (crit chance, armour pierce, life steal…).',
        '**Apothic Spawners** — spawners can be captured and upgraded. A silk-touched spawner is a real prize.',
        '**Gateways to Eternity** — placeable wave-arena challenges with big rewards. The most reliable gear source in the pack.',
      ]},
    ],
  },

  {
    id: 'combat-bosses',
    title: 'Bosses and what they want from you',
    subtitle: 'Cataclysm, Bosses of Mass Destruction, Mowzie\'s Mobs.',
    mods: ['cataclysm', 'bosses_of_mass_destruction', 'mowziesmobs', 'creeperoverhaul', 'endermanoverhaul', 'dummmmmmy', 'boss_checklist'],
    tags: ['combat'],
    level: 'Intermediate',
    sections: [
      { type: 'text', body: [
        'This pack has real boss fights with mechanics, not damage sponges. Most of them will kill an unprepared player in under five seconds.',
        'Before any of them: hit the **Target Dummy** with your weapon to see your actual DPS, and bring a totem.',
      ]},
      { type: 'table', head: ['Boss', 'Where', 'Notes'], rows: [
        ['**Ignis**', 'Cataclysm — Fiery Sanctum, Nether', 'Fire resist is mandatory. Drops the Ignitium set.'],
        ['**Netherite Monstrosity**', 'Cataclysm — Ruined Citadel', 'Knockback and ground slams. Fight it in the open.'],
        ['**Ender Guardian**', 'Cataclysm — Ancient Factory', 'Teleports and summons. Bring ranged.'],
        ['**The Harbinger**', 'Cataclysm — Sunken City', 'Underwater. Water breathing and Depth Strider or don\'t bother.'],
        ['**Obsidilith / Void Blossom / Gauntlet / Lich**', 'Bosses of Mass Destruction structures', 'Pattern-based fights — learn the tells, they are all dodgeable.'],
        ['**Ferrous Wroughtnaut**', 'Mowzie\'s — underground chambers', 'Ours. Slow, telegraphed, brutal. One of the best melee fights in modded.'],
        ['**Umvuthi / Frostmaw / Naga**', 'Mowzie\'s — biome-specific', 'Ours. Each drops a unique and genuinely useful item.'],
      ]},
      { type: 'tip', heading: 'Boss Checklist', body: 'Press the Boss Checklist key for an in-game list of every boss in the pack, where it spawns and what it drops. It tracks which ones you have killed.' },
      { type: 'warn', heading: 'Gear check', body: 'Apotheosis-affixed diamond gear beats plain netherite. Do not fight a Cataclysm boss just because your armour bar is full — check your resistances and your escape plan.' },
    ],
  },

  {
    id: 'dimensions',
    title: 'Every dimension and when to go',
    subtitle: 'Fifteen places to be, roughly in order of difficulty.',
    mods: ['aether', 'deep_aether', 'aether_villages', 'undergarden', 'twilightforest', 'deeperdarker', 'eternal_starlight', 'the_bumblezone', 'ad_astra', 'trenzalore'],
    tags: ['exploration'],
    level: 'Beginner',
    sections: [
      { type: 'text', body: [
        'Craftoria ships several dimensions and we added several more. Roughly in the order you should visit them:',
      ]},
      { type: 'table', head: ['Dimension', 'Portal', 'When'], rows: [
        ['**The Bumblezone**', 'Empty honeycomb on a beehive', 'Any time. Silly, easy, good early resources.'],
        ['**The Aether** *(ours)*', 'Glowstone frame, water bucket', 'Early. Floating islands, four dungeon bosses, its own tool tier. Deep Aether and Aether Villages extend it.'],
        ['**Twilight Forest**', '2×2 water, diamond + flowers, lightning', 'Early-mid. A whole progression tree of bosses gating each other.'],
        ['**The Undergarden** *(ours)*', 'Portal frame of Cloggrum/Depthrock, catalyst', 'Mid. Nether-alternative — Utherium, Froststeel, and it hits hard.'],
        ['**Eternal Starlight**', 'Ritual — see its guide book', 'Mid-late. Gorgeous, dark, difficult.'],
        ['**Deeper Dark**', 'Ancient City portal frame', 'Late. Warden territory, sculk progression.'],
        ['**Ad Astra planets** *(ours)*', 'Rocket from a launch pad', 'Late. Moon → Mars → Venus/Mercury → Glacio, each needing better suits and rockets.'],
      ]},
      { type: 'warn', heading: 'Take a Waystone', body: 'Some dimensions have no easy way home. Carry a Waystone or Warp Scroll before you portal.' },
      { type: 'tip', heading: 'Check the biome first', body: 'Nature\'s Compass will find a biome in whatever dimension you\'re standing in. Combined with the FTB Chunks map, it saves a lot of aimless flying.' },
    ],
  },

  {
    id: 'aether',
    title: 'The Aether: our headline addition',
    subtitle: 'Floating islands, four dungeons, and now villages.',
    mods: ['aether', 'deep_aether', 'aether_villages'],
    tags: ['exploration'],
    level: 'Beginner',
    sections: [
      { type: 'text', body: [
        'The Aether is a full opposite-of-the-Nether dimension: bright, floating, and dangerous mostly because of the fall. It has its own ores, its own tools, four dungeons with real bosses, and — with the two addons we installed — extra biomes, extra bosses, and villages you can trade in.',
        'It is a great **early-mid** destination. You can go in iron gear and come out meaningfully stronger.',
      ]},
      { type: 'steps', heading: 'Getting there and surviving', items: [
        'Build a Nether-portal-shaped frame out of **glowstone** and activate it with a **water bucket**.',
        'Bring a bucket of water for the trip back down, and something to stop fall damage. Falling out of the Aether drops you into the overworld from the sky.',
        'Mine Skyroot for tools, then Zanite (the Aether\'s "iron") — Zanite tools get stronger as they wear down.',
        'Find a **Bronze Dungeon** (in the islands), beat the Slider, and take the key. That is your first real progression step.',
        'Silver Dungeons (Valkyrie Queen) and Gold Dungeons (Sun Spirit) come after. The Sun Spirit ends the Aether\'s eternal day.',
      ]},
      { type: 'list', heading: 'What Deep Aether and Aether Villages add', items: [
        '**Deep Aether** — new biomes, two extra bosses, more gear and materials layered onto the base progression.',
        '**Aether Villages** — actual villages with Aether villagers and trades, which makes settling up there viable.',
        'Together they roughly double how long the Aether stays interesting.',
      ]},
      { type: 'tip', heading: 'Moas', body: 'Moas are the Aether\'s mounts — hatch an egg, feed it, and you get a bird that glides and double-jumps. The best way to move around floating islands.' },
    ],
  },

  {
    id: 'space',
    title: 'Ad Astra: getting to space',
    subtitle: 'Rockets, oxygen, and running machines on other planets.',
    mods: ['ad_astra', 'ad_astra_giselle_addon'],
    tags: ['exploration'],
    level: 'Advanced',
    sections: [
      { type: 'text', body: [
        'Ad Astra is late-game content and we added it deliberately as an endgame destination. You build rockets, wear pressurised suits, manage oxygen, and set up bases on five worlds.',
        'The **Giselle Addon** is the important half for us: without it, your Mekanism / MI machines are useless off-world. With it, space is a real base location.',
      ]},
      { type: 'steps', heading: 'The route', items: [
        'Build the Ad Astra machines: Compressor, Fuel Refinery, Oxygen Loader, NASA Workbench.',
        'Refine oil into rocket fuel. You need a lot; automate it before you commit.',
        'Assemble a **Tier 1 rocket** in the NASA Workbench and place it on a Launch Pad.',
        'Craft a full **Space Suit** and fill its oxygen tank at an Oxygen Loader. No suit, no survival.',
        'Launch to the **Moon**. Set up an Oxygen Distributor with a sealed room before doing anything else.',
        'Moon → Mars (Tier 2) → Venus/Mercury (Tier 3) → Glacio (Tier 4). Each needs better materials from the previous.',
      ]},
      { type: 'warn', heading: 'Oxygen is not optional', body: 'Every planet except Glacio will kill you without a sealed, distributor-fed room. Build the room first, explore second.' },
      { type: 'tip', heading: 'Bring your tech mod with you', body: 'That is what the Giselle Addon is for — Mekanism cables, MI machines and Forge Energy all work in space with it installed. A moon base can be a real factory.' },
    ],
  },

  {
    id: 'storage',
    title: 'Storage before you need AE2',
    subtitle: 'Backpacks, drawers, barrels and not losing everything.',
    mods: ['sophisticatedbackpacks', 'sophisticatedstorage', 'functionalstorage', 'bankstorage', 'tankstorage', 'enderstorage', 'akashictome', 'shrink'],
    tags: ['utility'],
    level: 'Beginner',
    sections: [
      { type: 'text', body: [
        'AE2 is the endgame answer. Before that, Sophisticated Storage and Functional Storage will carry you comfortably for a hundred hours.',
      ]},
      { type: 'list', heading: 'Sophisticated Backpacks', items: [
        'Upgrade path: Backpack → Iron → Gold → Diamond → Netherite. Each is bigger and takes more upgrades.',
        '**Magnet upgrade** — picks up drops as you walk. Get this first.',
        '**Pickup / filter upgrades** — auto-sort what goes in.',
        '**Smelting / crafting upgrades** — a furnace and a crafting grid in your bag.',
        '**Feeding upgrade** — eats for you. Silly and excellent.',
        'Right-click a backpack while it is on your back with the keybind, no need to take it off.',
      ]},
      { type: 'list', heading: 'Bulk and specialised storage', items: [
        '**Functional Storage** drawers — one item type, enormous capacity, and the drawer controller makes a whole wall act as one inventory.',
        '**Sophisticated Storage** chests and barrels — same upgrade system as the backpacks, applied to blocks.',
        '**Bank Storage** and **Tank Storage** — portable currency and fluids.',
        '**Ender Storage** / **Ender Drives** — colour-coded chests and tanks shared across dimensions.',
        '**Akashic Tome** — every guide book in one item. Do this on day one.',
        '**Shrink** — shrink blocks (and yourself) for transport.',
      ]},
      { type: 'tip', heading: 'Carry On is your moving van', body: 'Sneak + right-click with an empty hand picks up a full chest, machine or drawer with contents intact. Relocating a base is a ten-minute job.' },
    ],
  },

  {
    id: 'farming',
    title: 'Food, farms and bees',
    subtitle: 'Farmer\'s Delight, the Let\'s Do series, and Productive Bees.',
    mods: ['farmersdelight', 'cookingforblockheads', 'farmingforblockheads', 'productivebees', 'vinery', 'brewery', 'beachparty', 'farm_and_charm', 'herbalbrews', 'aquaculture', 'sereneseasons'],
    tags: ['farming'],
    level: 'Beginner',
    sections: [
      { type: 'text', body: [
        'Food in this pack is a real system: good meals give long buffs, and the cooking mods stack into a genuinely enjoyable side game.',
        'It also has **Serene Seasons** — crops only grow in the right season. That surprises people around day 40.',
      ]},
      { type: 'steps', heading: 'A kitchen worth having', items: [
        'Farmer\'s Delight first: a Cooking Pot, a Cutting Board, a Skillet and a Stove. Knives replace shears for most harvesting.',
        'Add a **Cooking for Blockheads** kitchen — the fridge/counter/oven set pulls ingredients from connected inventories, so you cook from your whole pantry.',
        '**Farming for Blockheads** gives you the Market (buy any seed/sapling) and the Fertilized Dirt line. This solves seed hunting entirely.',
        'Then pick a Let\'s Do mod for flavour: **Vinery** (wine), **Brewery** (beer), **Beachparty**, **Farm & Charm**, **Herbal Brews**.',
        '**Aquaculture** makes fishing worth doing again — new fish, better rods, real loot.',
      ]},
      { type: 'tip', heading: 'Serene Seasons', body: 'Check the season HUD before planting a field. Greenhouse glass or Botany-style growing removes the restriction if you\'d rather not think about it.' },
      { type: 'list', heading: 'Productive Bees — ours', items: [
        'We added it as a passive resource line. Bees produce ores, metals and mod materials while you do something else.',
        'Start with a Nest → an Advanced Beehive → Expansion Boxes. Feed them flowers.',
        'Breed bees by putting two parents near the right block — EMI shows the breeding recipe for every bee.',
        'Ore bees (iron, gold, diamond, and mod metals) are the point. A wall of hives is a mine that never runs out.',
        'It automates cleanly into any of the three tech mods — this is why it fits the pack.',
      ]},
    ],
  },

  {
    id: 'building',
    title: 'Building: the block palette',
    subtitle: 'Chipped, Macaw\'s, Framed Blocks and friends.',
    mods: ['chipped', 'rechiseled', 'framedblocks', 'supplementaries', 'handcrafted', 'mcwroofs', 'mcwwindows', 'mcwbridges', 'mcwfences', 'mcwlights', 'buildinggadgets2', 'arts_and_crafts', 'refurbished_furniture'],
    tags: ['building'],
    level: 'Beginner',
    sections: [
      { type: 'list', heading: 'Where the blocks are', items: [
        '**Chipped** — put a vanilla block in a Chipped workbench and get dozens of variants of it. This is the single biggest palette expansion in the pack.',
        '**Rechiseled** (+ Chipped compat) — the same idea from the other direction, with in-world chiselling.',
        '**Framed Blocks** — a block that takes on the texture of whatever you put in it, in any shape. Slopes, prisms, corners, all camouflaged.',
        '**Macaw\'s** everything — roofs, windows, doors, bridges, fences, paths, lights, trapdoors, paintings. Enormous and consistent.',
        '**Supplementaries** — the good decoration mod. Signs, hanging pots, ash, flags, and dozens of interactive props.',
        '**Handcrafted** and **Refurbished Furniture** — actual furniture, chairs, tables, cushions.',
        '**Arts and Crafts** and **AurelJ\'s Paintings** — colours, textures and wall art.',
      ]},
      { type: 'list', heading: 'Tools that make it fast', items: [
        '**Building Gadgets 2** — copy/paste, mirror, exchange and build large areas from a template.',
        '**Multi Builder Tool** / **Construction Stick** — extend a surface in one click.',
        '**Mech Trowel** — place blocks from a palette.',
        '**Carry On** — move furniture without breaking it.',
        '**Measurements** — measure a build before you commit to it.',
      ]},
      { type: 'tip', heading: 'Fusion + CTM', body: 'Fusion and Connected Textures are installed, so many block sets visually merge when placed adjacent. Large flat walls look far better than the item preview suggests.' },
    ],
  },

  {
    id: 'exploration',
    title: 'Exploration: structures and loot',
    subtitle: 'Where the good chests are.',
    mods: ['dungeons_arise', 'dungeons_arise_seven_seas', 'yungsapi', 'betterdungeons', 'betterstrongholds', 'structory', 'structory_towers', 't_and_t', 'lootr', 'gateways', 'biomeswevegone', 'naturescompass', 'waystones', 'antiquetradingship'],
    tags: ['exploration'],
    level: 'Beginner',
    sections: [
      { type: 'text', body: [
        'The world is dense with structures, and unlike vanilla, the loot in them is worth the trip — Apotheosis affixes mean a random chest can hold something genuinely better than what you crafted.',
      ]},
      { type: 'list', heading: 'What you\'ll run into', items: [
        '**When Dungeons Arise** (+ Seven Seas) — the big landmark dungeons: keeps, monasteries, airships, pirate ships. Highest reward per trip.',
        '**YUNG\'s** overhauls — every vanilla structure (mineshafts, strongholds, temples, fortresses, witch huts, ocean monuments) rebuilt to be worth exploring.',
        '**Structory** and **Structory: Towers** — atmospheric small ruins. Great scenery, decent loot.',
        '**Towns and Towers** — expanded villages and outposts.',
        '**Dungeon Crawl** — a large procedural dungeon under the world.',
        '**Oh The Biomes We\'ve Gone** — the biome overhaul the whole world sits on.',
        '**Antique Trading Ship** *(ours)* — a small wandering ship with its own merchant.',
      ]},
      { type: 'tip', heading: 'Lootr means no race', body: 'Lootr gives every player their own copy of each loot chest. Nobody gets there first — explore together without splitting the reward.' },
      { type: 'list', heading: 'Navigation kit', items: [
        '**Xaero\'s Minimap + World Map**, wired into FTB Chunks. Waypoints with `B`.',
        '**Nature\'s Compass** — find any biome.',
        '**Waystones** — bind every one you pass. It costs nothing and builds the fast-travel network.',
        '**Traveler\'s Titles** — tells you what biome you just walked into.',
      ]},
    ],
  },

  {
    id: 'computers',
    title: 'CC: Tweaked and Advanced Peripherals',
    subtitle: 'Lua computers, turtles and monitors — one of our additions.',
    mods: ['computercraft', 'advancedperipherals', 'integratedscripting', 'little_big_redstone'],
    tags: ['tech'],
    level: 'Advanced',
    sections: [
      { type: 'text', body: [
        'Craftoria ships **Advanced Peripherals**, which is an addon for ComputerCraft — but not ComputerCraft itself. We added **CC: Tweaked** to fix that, and now the pair works.',
        'These are real Lua computers. If you can write a loop, you can automate anything in the pack.',
      ]},
      { type: 'steps', heading: 'Starting out', items: [
        'Craft a Computer (stone + redstone + glass panel). Right-click it, type `edit hello`, write Lua, `Ctrl` to save and exit, then run it by name.',
        'Turtles are computers with tools: `turtle.dig()`, `turtle.forward()`, `turtle.place()`. A mining turtle digs a quarry in about fifteen lines.',
        'Monitors display output — put a 3×3 array of Advanced Monitors next to a computer for a real dashboard.',
        'Wired Modems + Networking Cable connect computers to peripherals and to each other.',
        '`pastebin get <code> <name>` pulls a program off the internet if the server allows it.',
      ]},
      { type: 'list', heading: 'What Advanced Peripherals unlocks', items: [
        '**ME Bridge** — read and control your AE2 network from Lua. Auto-crafting dashboards, stock alerts.',
        '**Energy Detector** — measure FE flow, and gate it.',
        '**Player Detector**, **Chat Box**, **Environment Detector** — the glue for base automation and alerts.',
        '**Redstone Integrator** — output redstone on all six sides from code.',
      ]},
      { type: 'tip', heading: 'Not a coder?', body: 'Integrated Scripting and Little Big Redstone are both in the pack and give you most of the same power without Lua. Little Big Redstone in particular lets you build compact circuits inside a single block.' },
    ],
  },

  {
    id: 'performance',
    title: 'Making it run well',
    subtitle: '533 mods is a lot. Here is what actually helps.',
    mods: ['sodium', 'iris', 'modernfix', 'ferritecore', 'entityculling', 'spark', 'euphoria_patcher'],
    tags: ['support'],
    level: 'Beginner',
    sections: [
      { type: 'steps', heading: 'In order of impact', items: [
        'RAM: **8–10 GB**. Not 16. Bigger heaps mean longer GC pauses, which is what the stutter actually is.',
        'Render distance **12**, simulation distance **8**. This is the biggest single lever, by a wide margin.',
        'Turn off shaders while you build. Iris + Euphoria Patcher are lovely and they cost 30–50% of your frames.',
        'Entity Culling and Sodium are already installed and already working — you don\'t need to configure them.',
        'Close the game between long sessions. Modded Minecraft accumulates.',
      ]},
      { type: 'tip', heading: 'First launch is always slow', body: 'The first start after any mod change rebuilds registries, recipes and shaders. Several minutes is normal and it only happens once.' },
      { type: 'list', heading: 'Diagnosing a laggy base', items: [
        '`/spark tps` — is it the server or your client? If TPS is 20, the problem is your GPU/CPU, not the world.',
        '`/spark profiler start` … `/spark profiler stop` — gives a link showing exactly which mod is eating ticks.',
        'Item entities on the floor are the number one TPS killer. Never let a farm overflow onto the ground.',
        'Hoppers are expensive. Use Pipez, Modern Dynamics or AE2 instead.',
        'Force-loaded chunks cost even when you\'re offline. Only force-load what has to keep running.',
      ]},
    ],
  },

  {
    id: 'server-etiquette',
    title: 'Playing together without wrecking it',
    subtitle: 'Rules of thumb for a shared world.',
    mods: ['ftbchunks', 'ftbteams', 'spark', 'waystones', 'lootr', 'voicechat'],
    tags: ['support'],
    level: 'Beginner',
    sections: [
      { type: 'list', items: [
        'Claim your base with FTB Chunks on the first day. Unclaimed builds are fair game for accidents.',
        'Build heavy farms in one shared industry area rather than five private ones — it makes lag diagnosable.',
        'Ask before force-loading chunks. Every force-loaded chunk is permanent server cost.',
        'Name your Waystones so the network stays readable for everyone.',
        'Kill mob farms when you log off if they run on spawners with no despawn.',
        'Lootr means nobody has to rush a dungeon. Explore together.',
        'If it crashes, keep the log. `logs/latest.log` and the crash report say far more than "it crashed".',
        'Simple Voice Chat is installed — proximity voice, no Discord needed.',
        'If you want to add a mod, say so first. Everyone needs the same list of 533.',
      ]},
    ],
  },
];

export const guideById = Object.fromEntries(guides.map((g) => [g.id, g]));
export const guidesForMod = (modId) => guides.filter((g) => g.mods.includes(modId));
