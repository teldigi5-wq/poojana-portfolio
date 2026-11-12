/* Loads the world stage (immersive v3) as soon as the page is parsed. Skipped with reduced motion, ?motion=off, Save-Data,
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
  // introduction plays, or within about a second for returning visitors. Both
  // requests are low priority so the portrait (the page's main image) loads first.
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
  script.src = 'assets/worlds/js/stage.js?v=20261112-v3-4';
  document.head.append(script);
})();
