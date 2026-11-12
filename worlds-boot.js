/* Loads the world stage (immersive v3) as early as possible: this file is async in <head>,
   so it runs before the page's deferred scripts. Skipped with reduced motion, ?motion=off, Save-Data,
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

  // Start at once so the Gateway is ready the moment the hero appears: while the
  // introduction plays, or within about a second for returning visitors. Requests
  // are low priority so the portrait (the page's main image) loads first.
  for (const href of ['assets/worlds/matcap-copper.webp', 'assets/worlds/matcap-darkmetal.webp']) {
    const link = document.createElement('link');
    link.rel = 'preload'; link.as = 'image'; link.href = href; link.fetchPriority = 'low';
    document.head.append(link);
  }
  const preload = document.createElement('link');
  preload.rel = 'preload';
  preload.as = 'fetch';
  preload.href = 'assets/worlds/gateway.glb';
  preload.crossOrigin = 'anonymous';
  preload.fetchPriority = 'low';
  document.head.append(preload);

  const script = document.createElement('script');
  script.type = 'module';
  script.fetchPriority = 'low';
  script.src = 'assets/worlds/js/stage.js?v=20261112-v3-5';
  document.head.append(script);
})();
