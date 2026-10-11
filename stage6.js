/* Stage 6 interaction polish. Native cursor, layout and reading order stay untouched. */
(() => {
  'use strict';
  const root = document.documentElement;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const fine = matchMedia('(hover: hover) and (pointer: fine)');
  const forced = matchMedia('(forced-colors: active)');
  const lite = root.classList.contains('performance-lite') || navigator.connection?.saveData || navigator.deviceMemory <= 2;
  const visuals = [...document.querySelectorAll('.case-visual')];
  const cases = [...document.querySelectorAll('.case')];
  const cleanups = [];

  root.classList.add('stage6-ready');

  function enableVisualDepth() {
    if (!fine.matches || reduced.matches || forced.matches || lite || innerWidth < 900) return;
    visuals.forEach(visual => {
      let frame = 0;
      let pending;
      const render = () => {
        frame = 0;
        if (!pending) return;
        const rect = visual.getBoundingClientRect();
        const px = Math.max(0, Math.min(1, (pending.clientX - rect.left) / rect.width));
        const py = Math.max(0, Math.min(1, (pending.clientY - rect.top) / rect.height));
        visual.style.setProperty('--visual-x', `${(px * 100).toFixed(1)}%`);
        visual.style.setProperty('--visual-y', `${(py * 100).toFixed(1)}%`);
        visual.style.setProperty('--rx', `${((.5 - py) * 1.8).toFixed(2)}deg`);
        visual.style.setProperty('--ry', `${((px - .5) * 2.2).toFixed(2)}deg`);
      };
      const move = event => {
        if (event.pointerType !== 'mouse') return;
        pending = event;
        visual.classList.add('is-engaged');
        if (!frame) frame = requestAnimationFrame(render);
      };
      const reset = () => {
        pending = null;
        cancelAnimationFrame(frame);
        frame = 0;
        visual.classList.remove('is-engaged');
        visual.style.removeProperty('--rx');
        visual.style.removeProperty('--ry');
      };
      visual.addEventListener('pointermove', move, { passive: true });
      visual.addEventListener('pointerleave', reset);
      cleanups.push(() => {
        visual.removeEventListener('pointermove', move);
        visual.removeEventListener('pointerleave', reset);
        reset();
      });
    });
  }

  let scrollFrame = 0;
  const updateProjectLight = () => {
    scrollFrame = 0;
    const focusY = innerHeight * .48;
    cases.forEach(project => {
      const rect = project.getBoundingClientRect();
      const local = Math.max(0, Math.min(1, (focusY - rect.top) / Math.max(rect.height, 1)));
      project.style.setProperty('--case-y', `${(24 + local * 52).toFixed(1)}%`);
    });
  };
  const requestProjectLight = () => {
    if (!scrollFrame) scrollFrame = requestAnimationFrame(updateProjectLight);
  };

  enableVisualDepth();
  updateProjectLight();
  addEventListener('scroll', requestProjectLight, { passive: true });
  addEventListener('resize', requestProjectLight, { passive: true });
  const disableDepth = () => cleanups.splice(0).forEach(dispose => dispose());
  reduced.addEventListener?.('change', event => { if (event.matches) disableDepth(); });
  forced.addEventListener?.('change', event => { if (event.matches) disableDepth(); });

  addEventListener('pagehide', () => {
    disableDepth();
    removeEventListener('scroll', requestProjectLight);
    removeEventListener('resize', requestProjectLight);
    cancelAnimationFrame(scrollFrame);
  }, { once: true });
})();
