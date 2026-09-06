import { useEffect, useState } from 'react';

export function useRoute() {
  const read = () => window.location.hash.replace(/^#\/?/, '') || '';
  const [path, setPath] = useState(read);

  useEffect(() => {
    const on = () => {
      setPath(read());
      window.scrollTo({ top: 0 });
    };
    window.addEventListener('hashchange', on);
    return () => window.removeEventListener('hashchange', on);
  }, []);

  const [route, qs = ''] = path.split('?');
  const parts = route.split('/').filter(Boolean).map(decodeURIComponent);
  const query = Object.fromEntries(new URLSearchParams(qs));
  return { path, section: parts[0] || 'home', param: parts[1] || null, query };
}

export const go = (to) => { window.location.hash = '#/' + String(to).replace(/^\/+/, ''); };
export const href = (to) => '#/' + String(to).replace(/^\/+/, '');
