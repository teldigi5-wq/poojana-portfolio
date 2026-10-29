/* Stage 4: optional motion, ordinary scrolling, persistent native controls. */
(() => {
  const lite = navigator.connection?.saveData || navigator.deviceMemory <= 2;
  document.documentElement.classList.toggle('performance-lite', Boolean(lite));
  const chapters = [...document.querySelectorAll('.case')];
  const links = [...document.querySelectorAll('.chapter-nav a')];
  let queued = false;
  function updateChapters() {
    let current = -1;
    chapters.forEach((chapter, index) => {
      const rect = chapter.getBoundingClientRect();
      if (rect.top <= innerHeight * .35 && rect.bottom > innerHeight * .35) current = index;
    });
    links.forEach((link, index) => {
      if (index === current) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
    queued = false;
  }
  addEventListener('scroll', () => {
    if (!queued) { queued = true; requestAnimationFrame(updateChapters); }
  }, { passive: true });
  addEventListener('resize', updateChapters, { passive: true });
  updateChapters();
  if (!window.gsap || !window.ScrollTrigger || lite) return;
  gsap.registerPlugin(ScrollTrigger);
  gsap.matchMedia().add({ motion: '(prefers-reduced-motion: no-preference)', desktop: '(min-width: 900px)', fine: '(hover: hover) and (pointer: fine)', colors: '(forced-colors: active)' }, context => {
    const { motion, fine, colors } = context.conditions;
    const desktop = context.conditions.desktop && fine;
    if (!motion || colors) return;
    const cleanup = [];
    const distance = desktop ? 28 : 12;
    // One entrance; no preloader or dependency on portrait loading.
    if (scrollY < innerHeight * .5 && !document.querySelector('.editorial-hero')) {
      const hero = gsap.timeline({ defaults: { ease: 'power4.out', duration: .85 } });
      hero.from('.hero-meta, .hero-copy > .overline', { y: 14, opacity: 0, stagger: .07 })
        .from('.hero-line', { yPercent: 112, rotate: 1.5, stagger: .11, duration: 1.15 }, .08)
        .from('.hero-system', { x: 24, opacity: 0, duration: 1.2 }, .14)
        .from('.hero-portrait', { y: distance + 10, scale: .985, opacity: 0, duration: 1.3 }, .2)
        .from('.portrait-reflection', { xPercent: -40, opacity: 0, duration: .9 }, .48)
        .from('.hero-intro, .hero-cta, .hero-foot', { y: 16, opacity: 0, stagger: .1 }, .44);
      hero.eventCallback('onComplete', () => gsap.set('.hero-meta, .hero-copy > .overline, .hero-line, .hero-portrait, .hero-intro, .hero-cta, .hero-foot', { clearProps: 'transform,opacity' }));
      const finishForKeyboard = event => { if (event.key === 'Tab') hero.progress(1); };
      document.addEventListener('keydown', finishForKeyboard);
      cleanup.push(() => document.removeEventListener('keydown', finishForKeyboard));
    }
    // Scroll reveals never hide readable text from fast or keyboard navigation.
    gsap.utils.toArray('main > section:not(.hero) .reveal, .case-copy > .reveal, .other-work .reveal').forEach(element => {
      gsap.from(element, { y: distance, duration: .7, ease: 'power3.out', clearProps: 'transform', scrollTrigger: { trigger: element, start: 'top 94%', once: true } });
    });
    chapters.forEach(chapter => {
      const visual = chapter.querySelector('.case-visual');
      const pieces = visual.querySelectorAll('.node, .paper, .source, .forge-shell, .access-flow, .sensor, .telemetry > span, .state-legend');
      // Sticky desktop diagrams follow the evidence. Touch uses a finite entrance.
      const copy = chapter.querySelector('.case-copy');
      const timeline = gsap.timeline({ defaults: { ease: desktop ? 'none' : 'power4.out' }, scrollTrigger: desktop
        ? { trigger: chapter, start: 'top 78%', end: 'bottom 82%', scrub: .6 }
        : { trigger: visual, start: 'top 94%', once: true } });
      timeline.from(visual, { y: desktop ? 34 : 12, opacity: .7, duration: .7 })
        .from(pieces, { y: desktop ? 18 : 8, opacity: .32, stagger: .09, duration: .68 }, .06);
      if (desktop && copy) timeline.from(copy, { y: 18, opacity: .72, duration: .55 }, 0);
      if (desktop) {
        visual.querySelectorAll('.chapter-route').forEach(path => {
          const length = path.getTotalLength();
          timeline.fromTo(path, { strokeDasharray: `${length} ${length}`, strokeDashoffset: length }, { strokeDasharray: `${length} ${length}`, strokeDashoffset: 0, duration: 1 }, 0);
        });
        const scan = visual.querySelector('.scan-beam');
        if (scan) timeline.fromTo(scan, { top: '15%' }, { top: '82%', duration: 1.2 }, 0);
        const progress = visual.querySelector('.forge-progress i');
        if (progress) timeline.from(progress, { scaleX: .25, transformOrigin: 'left', duration: 1.2 }, 0);
      }
    });
    if (fine && desktop) {
      // Move arrows only: hit targets and focus outlines remain stationary.
      document.querySelectorAll('.action > span, .text-action > span, .header-cv > span').forEach(arrow => {
        const target = arrow.parentElement;
        const xTo = gsap.quickTo(arrow, 'x', { duration: .35, ease: 'power3.out' });
        const yTo = gsap.quickTo(arrow, 'y', { duration: .35, ease: 'power3.out' });
        const move = event => {
          if (event.pointerType !== 'mouse' || target.matches(':focus-visible')) return;
          const rect = target.getBoundingClientRect();
          xTo((event.clientX - rect.left - rect.width / 2) / rect.width * 6);
          yTo((event.clientY - rect.top - rect.height / 2) / rect.height * 6);
        };
        const reset = () => { xTo(0); yTo(0); };
        target.addEventListener('pointermove', move, { passive: true });
        target.addEventListener('pointerleave', reset);
        target.addEventListener('focus', reset);
        cleanup.push(() => { target.removeEventListener('pointermove', move); target.removeEventListener('pointerleave', reset); target.removeEventListener('focus', reset); xTo.tween.kill(); yTo.tween.kill(); });
      });
    }
    return () => cleanup.forEach(dispose => dispose());
  });
})();
