/* World stage loader (immersive v3). Source of the inline <script> in index.html's <head>;
   scripts/update-worlds-boot.mjs inlines it and fills in the hashed chunk list.

   Starts as early as possible — before the page's deferred scripts — and preloads every
   file the hero world needs in parallel, so the Gateway is ready the moment the hero is
   visible. Skipped for reduced motion, ?motion=off, ?tier=still, Save-Data and devices
   without WebGL; the page is complete without it. */
(() => {
  const CHUNKS = /*CHUNKS*/[];
  const ASSETS = ['assets/worlds/gateway.glb', 'assets/worlds/matcap-copper.webp', 'assets/worlds/matcap-darkmetal.webp'];
  const query = new URLSearchParams(location.search);
  if (matchMedia('(prefers-reduced-motion: reduce)').matches || query.get('motion') === 'off' || query.get('tier') === 'still') return;
  if (navigator.connection && navigator.connection.saveData) return;
  if (!('IntersectionObserver' in window)) return;
  try {
    const canvas = document.createElement('canvas');
    if (!(canvas.getContext('webgl2') || canvas.getContext('webgl'))) return;
  } catch { return; }
  const head = document.head;
  for (const href of CHUNKS) {
    const link = document.createElement('link');
    link.rel = 'modulepreload'; link.href = href;
    head.append(link);
  }
  for (const href of ASSETS) {
    const link = document.createElement('link');
    link.rel = 'preload'; link.href = href; link.fetchPriority = 'low';
    link.as = href.endsWith('.glb') ? 'fetch' : 'image';
    link.crossOrigin = 'anonymous';   // three's loaders request with CORS; a mismatch would waste the preload
    head.append(link);
  }
  const script = document.createElement('script');
  script.type = 'module';
  script.src = CHUNKS[0];
  head.append(script);
})();
