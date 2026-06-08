import { useEffect } from 'react';

const getOrCreateMeta = (selector: string, create: () => HTMLMetaElement) => {
  let el = document.querySelector(selector) as HTMLMetaElement | null;
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  return el;
};

export function useSEO(title: string, description: string, siteName: string) {
  useEffect(() => {
    const fullTitle = `${title} | ${siteName}`;
    document.title = fullTitle;

    const metaDesc = getOrCreateMeta('meta[name="description"]', () => {
      const m = document.createElement('meta');
      m.setAttribute('name', 'description');
      return m;
    });
    metaDesc.content = description;

    const ogTitle = getOrCreateMeta('meta[property="og:title"]', () => {
      const m = document.createElement('meta');
      m.setAttribute('property', 'og:title');
      return m;
    });
    ogTitle.content = fullTitle;

    const ogDesc = getOrCreateMeta('meta[property="og:description"]', () => {
      const m = document.createElement('meta');
      m.setAttribute('property', 'og:description');
      return m;
    });
    ogDesc.content = description;
  }, [title, description, siteName]);
}

