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
    script.src = 'assets/boundary-3d.js?v=20261111-3d-2';
    script.defer = true;
    document.body.append(script);
  };

  const observer = new IntersectionObserver(entries => {
    if (entries.some(entry => entry.isIntersecting)) { observer.disconnect(); load(); }
  }, { rootMargin: '900px 0px' });
  observer.observe(card);
})();
