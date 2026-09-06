import data from '../data/mods.json';
import { guides } from '../data/guides';
import { ModCard } from '../components/bits';
import { href } from '../router';

const { pack, stats, categories, mods } = data;

export default function Home() {
  const core = mods.filter((m) => m.highlight);
  const added = mods.filter((m) => m.source === 'added' && m.category !== 'library');
  const starters = guides
    .filter((g) => ['first-hour', 'quests', 'our-additions', 'tech-tree'].includes(g.id));

  return (
    <div className="page">
      <section className="hero">
        <span className="eyebrow">
          ⛏ {pack.name} {pack.version} · Minecraft {pack.minecraft} · {pack.loader} {pack.loaderVersion}
        </span>
        <h1>
          We’re playing <em>Craftoria</em>,<br />plus a few things of our own.
        </h1>
        <p>
          {stats.total} mods: the {stats.pack} that ship with the pack, and the {stats.added} we
          dropped in on top. What each one does, what depends on what, and {guides.length} guides
          for the ones that actually need explaining.
        </p>
        <div className="hero-actions">
          <a className="btn primary" href={href('guides/first-hour')}>Start here →</a>
          <a className="btn" href={href('mods?src=added')}>What we added</a>
          <a className="btn" href={href('setup')}>Install it</a>
        </div>

        <div className="stats">
          <div className="stat"><b>{stats.total}</b><span>mods total</span></div>
          <div className="stat"><b>{stats.pack}</b><span>from Craftoria</span></div>
          <div className="stat"><b>{stats.added}</b><span>added by us</span></div>
          <div className="stat"><b>{stats.byCategory.dimensions}</b><span>dimensions</span></div>
          <div className="stat"><b>{guides.length}</b><span>guides</span></div>
        </div>
      </section>

      <h2>Read these first</h2>
      <div className="grid wide">
        {starters.map((g) => (
          <a className="card guide" key={g.id} href={href('guides/' + g.id)}>
            <span className="kicker">{g.tags[0] || 'guide'}</span>
            <span className="title">{g.title}</span>
            <span className="desc">{g.subtitle}</span>
            <span className="meta"><span className="badge cat">{g.level}</span></span>
          </a>
        ))}
      </div>

      <h2>What we added on top</h2>
      <p className="lede" style={{ marginTop: -8 }}>
        Stock Craftoria has no Aether, no Undergarden, no space, and no bees worth farming.
        These {added.length} jars are ours — everything else on this site is the pack as shipped.
      </p>
      <div className="grid">
        {added.map((m) => <ModCard key={m.modId} mod={m} categories={categories} />)}
      </div>

      <h2>The mods that define the pack</h2>
      <div className="grid">
        {core.map((m) => <ModCard key={m.modId} mod={m} categories={categories} />)}
      </div>

      <h2>Browse by category</h2>
      <div className="grid">
        {categories.map((c) => (
          <a className="card" key={c.id} href={href('mods?cat=' + c.id)}>
            <div className="icon fallback">{c.icon}</div>
            <div className="body">
              <div className="title">{c.name}</div>
              <div className="desc">{c.blurb}</div>
              <div className="meta"><span className="badge cat">{stats.byCategory[c.id]} mods</span></div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
