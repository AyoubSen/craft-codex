import { useEffect, useState } from 'react';
import { useRoute, href } from './router';
import { useTheme } from './theme';
import Home from './pages/Home';
import Mods from './pages/Mods';
import ModDetail from './pages/ModDetail';
import Setup from './pages/Setup';
import { GuideList, GuideDetail } from './pages/Guides';
import CommandPalette from './components/CommandPalette';
import data from './data/mods.json';

const NAV = [
  { id: 'home', label: 'Overview', ico: '◈' },
  { id: 'mods', label: 'All mods', ico: '▦', count: data.stats.total },
  { id: 'added', label: 'Added by us', ico: '★', count: data.stats.added, to: 'mods?src=added' },
  { id: 'guides', label: 'Guides', ico: '¶' },
  { id: 'setup', label: 'Install', ico: '⇩' },
];

export default function App() {
  const { section, param, query } = useRoute();
  const [theme, toggleTheme] = useTheme();
  const [paletteOpen, setPaletteOpen] = useState(false);

  useEffect(() => {
    const onKey = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setPaletteOpen((v) => !v);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => { setPaletteOpen(false); }, [section, param, query.cat, query.src]);

  let page;
  if (section === 'mods') page = param ? <ModDetail id={param} /> : <Mods query={query} />;
  else if (section === 'guides') page = param ? <GuideDetail id={param} /> : <GuideList />;
  else if (section === 'setup') page = <Setup />;
  else page = <Home />;

  const activeCat = section === 'mods' && !param ? query.cat : null;
  const onAdded = section === 'mods' && !param && query.src === 'added';
  const isOn = (n) => {
    if (n.id === 'added') return onAdded;
    if (activeCat || onAdded) return false;
    return section === n.id;
  };

  return (
    <div className="shell">
      <aside className="sidebar">
        <a className="brand" href={href('')}>
          <span className="mark">⛏</span>
          <span>
            <b>Craftoria Codex</b>
            <small>{data.pack.minecraft} · neoforge</small>
          </span>
        </a>

        <button className="side-search" onClick={() => setPaletteOpen(true)}>
          <span>⌕</span> Search…<kbd>Ctrl K</kbd>
        </button>

        {NAV.map((n) => (
          <a
            key={n.id}
            className={'side-link' + (isOn(n) ? ' on' : '')}
            href={href(n.to || (n.id === 'home' ? '' : n.id))}
          >
            <span className="ico">{n.ico}</span>
            {n.label}
            {n.count && <span className="count">{n.count}</span>}
          </a>
        ))}

        <div className="cat-nav">
          <div className="side-label">Categories</div>
          {data.categories.map((c) => (
            <a
              key={c.id}
              className={'side-link' + (activeCat === c.id ? ' on' : '')}
              href={href('mods?cat=' + c.id)}
            >
              <span className="ico">{c.icon}</span>
              {c.name}
              <span className="count">{data.stats.byCategory[c.id]}</span>
            </a>
          ))}
        </div>

        <div className="spacer" />
        <button className="theme-toggle" onClick={toggleTheme}>
          <span className="ico">{theme === 'dark' ? '☾' : '☀'}</span>
          {theme === 'dark' ? 'Dark' : 'Light'} theme
        </button>
      </aside>

      <main className="main">
        {page}
        <div className="page" style={{ paddingTop: 0, paddingBottom: 40 }}>
          <div className="footer">
            Generated from the <code>{data.pack.instance}</code> instance on {data.stats.generatedAt} ·{' '}
            {data.pack.name} {data.pack.version} + {data.stats.added} mods of our own ·{' '}
            re-run <code>npm run sync</code> after changing the pack.
          </div>
        </div>
      </main>

      <CommandPalette open={paletteOpen} onClose={() => setPaletteOpen(false)} />
    </div>
  );
}
