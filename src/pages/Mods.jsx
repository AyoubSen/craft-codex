import { useMemo, useState, useEffect } from 'react';
import data from '../data/mods.json';
import { ModCard } from '../components/bits';

const { categories, mods, stats, pack } = data;

export default function Mods({ query }) {
  const [q, setQ] = useState('');
  const [cat, setCat] = useState(query.cat || 'all');
  const [src, setSrc] = useState(query.src || 'all');
  const [sort, setSort] = useState('name');
  const [hideLibs, setHideLibs] = useState(false);

  useEffect(() => { setCat(query.cat || 'all'); }, [query.cat]);
  useEffect(() => { setSrc(query.src || 'all'); }, [query.src]);

  const list = useMemo(() => {
    const needle = q.trim().toLowerCase();
    let out = mods.filter((m) => {
      if (cat !== 'all' && m.category !== cat) return false;
      if (src !== 'all' && m.source !== src) return false;
      if (hideLibs && m.category === 'library') return false;
      if (!needle) return true;
      return (
        m.name.toLowerCase().includes(needle) ||
        m.modId.toLowerCase().includes(needle) ||
        (m.description || '').toLowerCase().includes(needle) ||
        (m.authors || '').toLowerCase().includes(needle) ||
        m.file.toLowerCase().includes(needle)
      );
    });
    if (sort === 'name') out = [...out].sort((a, b) => a.name.localeCompare(b.name));
    if (sort === 'category') out = [...out].sort((a, b) => a.category.localeCompare(b.category) || a.name.localeCompare(b.name));
    if (sort === 'depended') out = [...out].sort((a, b) => b.requiredBy.length - a.requiredBy.length);
    if (sort === 'added') out = [...out].sort((a, b) => (a.source === b.source ? a.name.localeCompare(b.name) : a.source === 'added' ? -1 : 1));
    return out;
  }, [q, cat, src, sort, hideLibs]);

  return (
    <div className="page">
      <h1>All mods</h1>
      <p className="lede">
        {stats.total} jars read straight out of the <code>{pack.instance}</code> instance —
        {' '}{stats.pack} from {pack.name} {pack.version} and {stats.added} we added ourselves.
        Click any mod for its description, dependencies and linked guides.
      </p>

      <div className="controls">
        <label className="search">
          <span className="dim">🔍</span>
          <input
            placeholder="Search name, description, author, file name…"
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
          {q && <button className="chip" onClick={() => setQ('')}>clear</button>}
        </label>
        <select className="select" value={src} onChange={(e) => setSrc(e.target.value)}>
          <option value="all">Any source</option>
          <option value="pack">Ships with Craftoria</option>
          <option value="added">Added by us</option>
        </select>
        <select className="select" value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="name">Sort: name</option>
          <option value="category">Sort: category</option>
          <option value="depended">Sort: most depended on</option>
          <option value="added">Sort: ours first</option>
        </select>
        <button className={'chip' + (hideLibs ? ' on' : '')} onClick={() => setHideLibs((v) => !v)}>
          hide libraries
        </button>
      </div>

      <div className="chips">
        <button className={'chip' + (cat === 'all' ? ' on' : '')} onClick={() => setCat('all')}>
          All<span className="n">{stats.total}</span>
        </button>
        {categories.map((c) => (
          <button key={c.id} className={'chip' + (cat === c.id ? ' on' : '')} onClick={() => setCat(c.id)}>
            {c.icon} {c.name}<span className="n">{stats.byCategory[c.id]}</span>
          </button>
        ))}
      </div>

      <p className="muted" style={{ marginTop: 0 }}>{list.length} shown</p>

      {list.length === 0 ? (
        <div className="panel empty">Nothing matches that filter.</div>
      ) : (
        <div className="grid">
          {list.map((m) => <ModCard key={m.modId} mod={m} categories={categories} />)}
        </div>
      )}
    </div>
  );
}
