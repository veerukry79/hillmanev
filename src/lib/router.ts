import { useEffect, useState } from 'react';

const readPath = () => window.location.hash.replace(/^#/, '') || '/';

export function usePath(): string {
  const [path, setPath] = useState(readPath);

  useEffect(() => {
    const onChange = () => setPath(readPath());
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);

  return path;
}
