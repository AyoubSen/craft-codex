import data from '../data/mods.json';
import { guidesForMod, guides } from '../data/guides';
import { ModIcon, SourceBadge, SOURCE_LABEL, ModCard } from '../components/bits';
import { href } from '../router';

const { mods, categories } = data;
const byId = Object.fromEntries(mods.map((m) => [m.modId, m]));

export default function ModDetail({ id }) {
  const mod = byId[id];
  if (!mod) {
    return (
      <div className="page">
        <a className="back" href={href('mods')}>← All mods</a>
        <div className="panel empty">No mod with the id <code>{id}</code>.</div>
      </div>
    );
  }

  const cat = categories.find((c) => c.id === mod.category);
  const linked = guidesForMod(mod.modId);
  const mentions = guides.filter((g) => !g.mods.includes(mod.modId) && g.mods.some((x) => byId[x]?.category === mod.category)).slice(0, 3);
  const siblings = mods.filter((m) => m.category === mod.category && m.modId !== mod.modId).slice(0, 6);

  return (
    <div className="page">
      <a className="back" href={href('mods?cat=' + mod.category)}>← {cat ? cat.name : 'All mods'}</a>

      <div className="detail-head">
        <ModIcon mod={mod} />
        <div>
          <h1 style={{ marginBottom: 8 }}>{mod.name}</h1>
          <div className="meta" style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            <SourceBadge source={mod.source} />
            <span className="badge cat">{cat ? cat.icon + ' ' + cat.name : mod.category}</span>
            {mod.highlight && <span className="badge star">core mod</span>}
            {mod.category === 'library' && <span className="badge lib">dependency — not gameplay</span>}
          </div>
        </div>
      </div>

      {mod.addedNote && (
        <div className="callout">
          <b>★ Not part of stock Craftoria</b>
          {mod.addedNote}
        </div>
      )}

      <p className="lede" style={{ fontSize: 16 }}>
        {mod.description || 'This mod ships no description in its metadata.'}
      </p>

      <div className="two-col">
        <div>
          {linked.length > 0 && (
            <div className="panel box" style={{ marginBottom: 16 }}>
              <h3>Guides covering this mod</h3>
              <div className="pill-list">
                {linked.map((g) => (
                  <a className="pill" key={g.id} href={href('guides/' + g.id)}>📖 {g.title}</a>
                ))}
              </div>
            </div>
          )}

          {mod.dependencies.length > 0 && (
            <div className="panel box" style={{ marginBottom: 16 }}>
              <h3>Needs these mods</h3>
              <div className="pill-list">
                {mod.dependencies.map((d) => (
                  <a className="pill" key={d.modId} href={href('mods/' + d.modId)}>
                    {d.name}{!d.mandatory && <span className="dim"> (optional)</span>}
                  </a>
                ))}
              </div>
            </div>
          )}

          {mod.requiredBy.length > 0 && (
            <div className="panel box" style={{ marginBottom: 16 }}>
              <h3>Required by {mod.requiredBy.length} mod{mod.requiredBy.length > 1 ? 's' : ''}</h3>
              <p className="muted" style={{ marginTop: 0, fontSize: 13.5 }}>
                Removing this jar breaks all of them.
              </p>
              <div className="pill-list">
                {mod.requiredBy.map((r) => (
                  <a className="pill" key={r} href={href('mods/' + r)}>{byId[r]?.name || r}</a>
                ))}
              </div>
            </div>
          )}

          {linked.length === 0 && mentions.length > 0 && (
            <div className="panel box">
              <h3>Related reading</h3>
              <div className="pill-list">
                {mentions.map((g) => <a className="pill" key={g.id} href={href('guides/' + g.id)}>📖 {g.title}</a>)}
              </div>
            </div>
          )}
        </div>

        <div className="panel box">
          <h3>Details</h3>
          <dl className="kv">
            <dt>Mod id</dt><dd className="mono">{mod.modId}</dd>
            <dt>Version</dt><dd>{mod.version || '—'}</dd>
            <dt>Author</dt><dd>{mod.authors || '—'}</dd>
            <dt>Source</dt><dd>{SOURCE_LABEL[mod.source]}</dd>
            <dt>Licence</dt><dd>{mod.license || '—'}</dd>
            <dt>Jar</dt><dd className="mono" style={{ wordBreak: 'break-all' }}>{mod.file}</dd>
            {mod.url && (
              <>
                <dt>Link</dt>
                <dd><a className="link" href={mod.url} target="_blank" rel="noreferrer">project page ↗</a></dd>
              </>
            )}
          </dl>
        </div>
      </div>

      {siblings.length > 0 && (
        <>
          <h2>More in {cat?.name}</h2>
          <div className="grid">
            {siblings.map((m) => <ModCard key={m.modId} mod={m} categories={categories} />)}
          </div>
        </>
      )}
    </div>
  );
}
