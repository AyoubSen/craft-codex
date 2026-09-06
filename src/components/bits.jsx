import { href } from '../router';

export const SOURCE_LABEL = {
  pack: 'Ships with Craftoria',
  added: 'Added by us',
};

export function SourceBadge({ source }) {
  return (
    <span className={'badge ' + (source === 'added' ? 'added' : 'both')}>
      {source === 'added' ? '★ added by us' : 'craftoria'}
    </span>
  );
}

export function ModIcon({ mod, size = 'card' }) {
  const cls = size === 'card' ? 'icon' : 'icon';
  if (mod.logo) return <img className={cls} src={import.meta.env.BASE_URL + mod.logo} alt="" loading="lazy" />;
  return <div className={cls + ' fallback'}>{mod.name.slice(0, 1).toUpperCase()}</div>;
}

export function ModCard({ mod, categories }) {
  const cat = categories.find((c) => c.id === mod.category);
  return (
    <a className={'card' + (mod.source === 'added' ? ' is-added' : '')} href={href('mods/' + mod.modId)}>
      <ModIcon mod={mod} />
      <div className="body">
        <div className="title">
          {mod.name}
          {mod.highlight && <span className="badge star">core</span>}
        </div>
        <div className="desc">{mod.addedNote || mod.description || 'No description shipped with this mod.'}</div>
        <div className="meta">
          <SourceBadge source={mod.source} />
          <span className="badge cat">{cat ? cat.icon + ' ' + cat.name : mod.category}</span>
        </div>
      </div>
    </a>
  );
}

export function Stat({ n, label }) {
  return (
    <div className="panel stat">
      <b>{n}</b>
      <span>{label}</span>
    </div>
  );
}
