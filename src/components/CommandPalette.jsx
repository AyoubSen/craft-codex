import { useEffect, useMemo, useRef, useState } from 'react';
import data from '../data/mods.json';
import { guides } from '../data/guides';
import { go } from '../router';

const ITEMS = [
  ...data.mods.map((m) => ({
    kind: 'mod', id: m.modId, title: m.name, sub: m.description || m.modId,
    logo: m.logo, to: 'mods/' + m.modId, hay: (m.name + ' ' + m.modId + ' ' + (m.description || '') + ' ' + m.file).toLowerCase(),
  })),
  ...guides.map((g) => ({
    kind: 'guide', id: g.id, title: g.title, sub: g.subtitle,
    logo: null, to: 'guides/' + g.id, hay: (g.title + ' ' + g.subtitle + ' ' + g.tags.join(' ')).toLowerCase(),
  })),
  ...data.categories.map((c) => ({
    kind: 'category', id: c.id, title: c.name, sub: c.blurb,
    logo: null, to: 'mods?cat=' + c.id, hay: (c.name + ' ' + c.blurb).toLowerCase(),
  })),
];

export default function CommandPalette({ open, onClose }) {
  const [q, setQ] = useState('');
  const [sel, setSel] = useState(0);
  const inputRef = useRef(null);
  const listRef = useRef(null);

  const results = useMemo(() => {
    const n = q.trim().toLowerCase();
    if (!n) return ITEMS.filter((i) => i.kind !== 'mod').slice(0, 12);
    const scored = [];
    for (const it of ITEMS) {
      const i = it.hay.indexOf(n);
      if (i === -1) continue;
      scored.push([it.title.toLowerCase().startsWith(n) ? 0 : it.title.toLowerCase().includes(n) ? 1 : 2, i, it]);
    }
    return scored.sort((a, b) => a[0] - b[0] || a[1] - b[1]).slice(0, 30).map((s) => s[2]);
  }, [q]);

  useEffect(() => { setSel(0); }, [q]);
  useEffect(() => {
    if (open) { setQ(''); setSel(0); setTimeout(() => inputRef.current?.focus(), 10); }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') { e.preventDefault(); onClose(); }
      else if (e.key === 'ArrowDown') { e.preventDefault(); setSel((s) => Math.min(s + 1, results.length - 1)); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); setSel((s) => Math.max(s - 1, 0)); }
      else if (e.key === 'Enter' && results[sel]) { e.preventDefault(); go(results[sel].to); onClose(); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, results, sel, onClose]);

  useEffect(() => {
    listRef.current?.querySelector('.palette-item.sel')?.scrollIntoView({ block: 'nearest' });
  }, [sel]);

  if (!open) return null;

  const kindLabel = { mod: 'Mod', guide: 'Guide', category: 'Category' };

  return (
    <div className="overlay" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className="palette">
        <div className="palette-input">
          <span className="dim">⌕</span>
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search mods, guides, categories…"
          />
          <span className="badge cat">esc</span>
        </div>
        <div className="palette-results" ref={listRef}>
          {results.length === 0 && <div className="empty" style={{ padding: 32 }}>Nothing found.</div>}
          {results.map((r, i) => (
            <button
              key={r.kind + r.id}
              className={'palette-item' + (i === sel ? ' sel' : '')}
              onMouseEnter={() => setSel(i)}
              onClick={() => { go(r.to); onClose(); }}
            >
              {r.logo
                ? <img className="icon" src={import.meta.env.BASE_URL + r.logo} alt="" />
                : <span className="icon fallback">{r.kind === 'guide' ? '¶' : r.title.slice(0, 1)}</span>}
              <span style={{ minWidth: 0 }}>
                <span className="t" style={{ display: 'block' }}>{r.title}</span>
                <span className="s" style={{ display: 'block', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{r.sub}</span>
              </span>
              <span className="badge cat" style={{ marginLeft: 'auto' }}>{kindLabel[r.kind]}</span>
            </button>
          ))}
        </div>
        <div className="palette-foot">
          <span>↑↓ navigate</span><span>↵ open</span><span>esc close</span>
          <span style={{ marginLeft: 'auto' }}>{results.length} results</span>
        </div>
      </div>
    </div>
  );
}
