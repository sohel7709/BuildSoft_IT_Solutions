import React, { useEffect, useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import AppShell from './app/AppShell';
import { routes } from './app/routes';

// Suppress the @types/react-router-dom v6 RouteProps issue: the typing doesn't include `key`
// but the runtime component does. Cast to a permissive type to allow the key prop.
const RouteAny = Route as unknown as React.ComponentType<{
  key?: string;
  path?: string;
  element?: React.ReactNode;
}>;

export default function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      return (
        (localStorage.getItem('theme') as 'light' | 'dark' | null) ||
        (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
      );
    }
    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
    try {
      localStorage.setItem('theme', theme);
    } catch {
      // ignore
    }
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  // IMPORTANT: must use `window.location.hash =` (not pushState) so HashRouter's
  // hashchange listener fires and re-renders the matched route. pushState mutates
  // the URL but does not emit the event HashRouter subscribes to.
  const navigate = (path: string) => {
    const target = `#${path}`;
    if (window.location.hash !== target) {
      window.location.hash = target;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <HashRouter>
      <AppShell theme={theme} toggleTheme={toggleTheme} navigate={navigate}>
        <Routes>
          {routes.map((r) => (
            <RouteAny key={r.path} path={r.path} element={r.element} />
          ))}
        </Routes>
      </AppShell>
    </HashRouter>
  );
}
