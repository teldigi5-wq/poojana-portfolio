/* Loads the world stage (immersive v3) during browser idle time, after the page and
   introduction have settled. Skipped with reduced motion, ?motion=off, Save-Data,
   or without WebGL; the page is complete without it. */
(() => {
  const query = new URLSearchParams(location.search);
  if (matchMedia('(prefers-reduced-motion: reduce)').matches || query.get('motion') === 'off' || query.get('tier') === 'still') return;
  if (navigator.connection && navigator.connection.saveData) return;
  if (!('IntersectionObserver' in window)) return;
  try {
    const canvas = document.createElement('canvas');
    if (!(canvas.getContext('webgl2') || canvas.getContext('webgl'))) return;
  } catch { return; }

  const load = () => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'assets/worlds/js/stage.js?v=20261112-v3-2';
    document.head.append(script);
  };
  const idle = cb => ('requestIdleCallback' in window ? requestIdleCallback(cb, { timeout: 2500 }) : setTimeout(cb, 800));
  const settled = () => {
    if (document.documentElement.dataset.introState === 'loading') addEventListener('portfolio:intro-complete', () => idle(load), { once: true });
    else idle(load);
  };
  if (document.readyState === 'complete') setTimeout(settled, 300);
  else addEventListener('load', () => setTimeout(settled, 300), { once: true });
})();
