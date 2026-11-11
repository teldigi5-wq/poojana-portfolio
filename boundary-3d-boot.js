/* Loads the BoundaryLab 3D scene only when it is about to be seen, and only
   where WebGL is available. Without it the page is exactly as before. */
(() => {
  const card = document.getElementById('boundary-card');
  if (!card || !('IntersectionObserver' in window) || !('ResizeObserver' in window)) return;
  if (navigator.connection && navigator.connection.saveData) return;

  const hasWebGL = (() => {
    try {
      const canvas = document.createElement('canvas');
      return Boolean(canvas.getContext('webgl2') || canvas.getContext('webgl'));
    } catch { return false; }
  })();
  if (!hasWebGL) return;

  const load = () => {
    const script = document.createElement('script');
    script.src = 'assets/boundary-3d.js?v=20261111-3d-5';
    script.defer = true;
    document.body.append(script);
  };

  // Parsing Three.js costs a few hundred milliseconds of main-thread time. Do it while
  // the visitor is reading (browser idle time), not while they scroll into Work.
  let started = false;
  const once = () => { if (started) return; started = true; observer.disconnect(); load(); };
  const idle = cb => ('requestIdleCallback' in window ? requestIdleCallback(cb, { timeout: 6000 }) : setTimeout(cb, 2500));
  const whenSettled = () => {
    const intro = document.documentElement.dataset.introState;
    if (intro === 'loading') addEventListener('portfolio:intro-complete', () => idle(once), { once: true });
    else idle(once);
  };
  if (document.readyState === 'complete') setTimeout(whenSettled, 1200);
  else addEventListener('load', () => setTimeout(whenSettled, 1200), { once: true });

  // Fallback: a visitor who jumps straight to the card still gets it.
  const observer = new IntersectionObserver(entries => {
    if (entries.some(entry => entry.isIntersecting)) once();
  }, { rootMargin: '900px 0px' });
  observer.observe(card);
})();
