/* Review fixes — 11 November preview.
   - Highlights the current project in the sticky Selected Work index.
   - Keeps the Aetheris diagram in view while "Follow a request" walks through it. */
(() => {
  const index = document.querySelector('.work-index');
  const stack = document.querySelector('.featured-stack');
  if (index && stack && 'IntersectionObserver' in window) {
    const links = [...index.querySelectorAll('a[href^="#"]')];
    const projects = links.map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean);

    const setActive = id => links.forEach(link => {
      if (link.getAttribute('href') === `#${id}`) link.setAttribute('aria-current', 'true');
      else link.removeAttribute('aria-current');
    });

    // A project counts as current once it crosses the upper third of the viewport.
    const projectObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) setActive(entry.target.id); });
    }, { rootMargin: '-30% 0px -60% 0px' });
    projects.forEach(project => projectObserver.observe(project));

    // Show a divider while stuck; hide the bar once the featured projects have scrolled past.
    const update = () => {
      const indexBox = index.getBoundingClientRect();
      const stackBox = stack.getBoundingClientRect();
      const top = parseFloat(getComputedStyle(index).top) || 0;
      index.classList.toggle('is-stuck', indexBox.top <= top + 1 && stackBox.bottom > indexBox.bottom);
      index.classList.toggle('is-past', stackBox.bottom < indexBox.bottom + 40);
      if (stackBox.top > window.innerHeight * 0.3) links.forEach(link => link.removeAttribute('aria-current'));
    };
    let frame = 0;
    window.addEventListener('scroll', () => {
      if (!frame) frame = requestAnimationFrame(() => { frame = 0; update(); });
    }, { passive: true });
    update();
  }

  // "Follow a request" animates the Aetheris diagram; make sure the diagram is visible.
  document.addEventListener('click', event => {
    const flow = event.target.closest?.('.architecture-flow');
    if (!flow) return;
    const diagram = flow.closest('.aetheris-layout')?.querySelector('.architecture');
    if (!diagram) return;
    const box = diagram.getBoundingClientRect();
    const fullyVisible = box.top >= 90 && box.bottom <= window.innerHeight;
    if (fullyVisible) return;
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches || document.documentElement.classList.contains('motion-off');
    diagram.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'center' });
  });
})();
