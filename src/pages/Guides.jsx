import { guides, guideById } from '../data/guides';
import data from '../data/mods.json';
import { href } from '../router';

const byId = Object.fromEntries(data.mods.map((m) => [m.modId, m]));
const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

export function GuideList() {
  // Every guide lands in exactly one group, in tag order.
  const GROUPS = [
    ['Start here', ['start here']],
    ['Tech & automation', ['tech']],
    ['Magic & combat', ['magic', 'combat']],
    ['Worlds & exploration', ['exploration']],
    ['Everything else', ['farming', 'building', 'storage', 'utility']],
    ['Running the server', ['support']],
  ];
  const taken = new Set();
  const groups = GROUPS.map(([label, tags]) => {
    const list = guides.filter((g) => !taken.has(g.id) && g.tags.some((t) => tags.includes(t)));
    for (const g of list) taken.add(g.id);
    return [label, list];
  });

  return (
    <div className="page">
      <h1>Guides</h1>
      <p className="lede">
        Written for our Craftoria run specifically — no generic wiki copy. Start with “Your first
        hour”, then read whichever one matches what you feel like doing.
      </p>

      {groups.map(([label, list]) => list.length > 0 && (
        <div key={label}>
          <h2>{label}</h2>
          <div className="grid wide">
            {list.map((g) => (
              <a className="card guide" key={g.id} href={href('guides/' + g.id)}>
                <span className="kicker">{g.level}</span>
                <span className="title">{g.title}</span>
                <span className="desc">{g.subtitle}</span>
                <span className="meta">
                  {g.mods.length > 0 && <span className="badge cat">{g.mods.length} mods</span>}
                  {g.tags.map((t) => <span className="badge lib" key={t}>{t}</span>)}
                </span>
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// tiny inline markdown: **bold** and `code`
function md(s) {
  return String(s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/`(.+?)`/g, '<code>$1</code>');
}

function Section({ s }) {
  const head = s.heading ? <h3 id={slug(s.heading)}>{s.heading}</h3> : null;

  if (s.type === 'text') {
    return <>{head}{s.body.map((p, i) => <p key={i} dangerouslySetInnerHTML={{ __html: md(p) }} />)}</>;
  }
  if (s.type === 'steps') {
    return <>{head}<ol>{s.items.map((it, i) => <li key={i} dangerouslySetInnerHTML={{ __html: md(it) }} />)}</ol></>;
  }
  if (s.type === 'list') {
    return <>{head}<ul>{s.items.map((it, i) => <li key={i} dangerouslySetInnerHTML={{ __html: md(it) }} />)}</ul></>;
  }
  if (s.type === 'tip' || s.type === 'warn') {
    return (
      <div className={'callout' + (s.type === 'warn' ? ' warn' : '')}>
        <b>{s.type === 'warn' ? '⚠ ' : '💡 '}{s.heading}</b>
        <span dangerouslySetInnerHTML={{ __html: md(s.body) }} />
      </div>
    );
  }
  if (s.type === 'table') {
    return (
      <>
        {head}
        <div style={{ overflowX: 'auto' }}>
          <table className="data">
            <thead><tr>{s.head.map((h) => <th key={h}>{h}</th>)}</tr></thead>
            <tbody>
              {s.rows.map((r, i) => (
                <tr key={i}>{r.map((c, j) => <td key={j} dangerouslySetInnerHTML={{ __html: md(c) }} />)}</tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
  return null;
}

export function GuideDetail({ id }) {
  const g = guideById[id];
  if (!g) {
    return (
      <div className="page">
        <a className="back" href={href('guides')}>← All guides</a>
        <div className="panel empty">No guide called <code>{id}</code>.</div>
      </div>
    );
  }
  const heads = g.sections.filter((s) => s.heading && s.type !== 'tip' && s.type !== 'warn').map((s) => s.heading);
  const linkedMods = g.mods.map((m) => byId[m]).filter(Boolean);
  const idx = guides.findIndex((x) => x.id === id);
  const next = guides[idx + 1];

  return (
    <div className="page">
      <a className="back" href={href('guides')}>← All guides</a>
      <h1>{g.title}</h1>
      <p className="lede">{g.subtitle}</p>

      <div className="two-col">
        <div className="guide-body">
          {g.sections.map((s, i) => <Section key={i} s={s} />)}

          {next && (
            <a className="card" href={href('guides/' + next.id)} style={{ marginTop: 30 }}>
              <div className="icon fallback">→</div>
              <div className="body">
                <div className="title">Next: {next.title}</div>
                <div className="desc">{next.subtitle}</div>
              </div>
            </a>
          )}
        </div>

        <div className="toc">
          {heads.length > 0 && (
            <div className="panel box" style={{ marginBottom: 12 }}>
              <h3>On this page</h3>
              {heads.map((h) => <a key={h} href={'#' + slug(h)} onClick={(e) => {
                e.preventDefault();
                document.getElementById(slug(h))?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}>{h}</a>)}
            </div>
          )}
          {linkedMods.length > 0 && (
            <div className="panel box">
              <h3>Mods covered</h3>
              <div className="pill-list">
                {linkedMods.map((m) => <a className="pill" key={m.modId} href={href('mods/' + m.modId)}>{m.name}</a>)}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
