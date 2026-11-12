/* Hellenic hero (preview): pins the hero for about one and a half screens and walks a camera
   down a temple aisle as you scroll. GSAP ScrollTrigger drives it; Lenis (already on the page)
   supplies the smooth scroll. The portrait stays in front. Skipped for reduced motion,
   ?motion=off and Save-Data: the poster frame remains. */
(() => {
  const hero = document.getElementById('home');
  const video = hero && hero.querySelector('.temple-video');
  if (!hero || !video) return;
  const query = new URLSearchParams(location.search);
  if (matchMedia('(prefers-reduced-motion: reduce)').matches || query.get('motion') === 'off') return;
  if (navigator.connection && navigator.connection.saveData) { video.removeAttribute('src'); video.querySelectorAll('source').forEach(s => s.remove()); video.load(); return; }

  const start = () => {
    const { gsap, ScrollTrigger } = window;
    if (!gsap || !ScrollTrigger) return;
    gsap.registerPlugin(ScrollTrigger);
    video.pause();
    const chapters = [...hero.querySelectorAll('.temple-chapters li')];
    const fill = hero.querySelector('.temple-rail-fill');
    const copy = hero.querySelector('.hero-copy');
    const figure = hero.querySelector('.hero-figure');
    const wordmark = hero.querySelector('.hero-wordmark');
    const bottom = hero.querySelector('.hero-bottom');
    const small = matchMedia('(max-width: 760px)').matches;
    hero.classList.add('has-temple-scroll');
    document.documentElement.classList.add('has-temple-scroll');

    const ranges = [[0.26, 0.5], [0.5, 0.76], [0.76, 1.01]];
    let target = 0;
    let shown = 0;
    let lastSeek = -1;
    const seek = () => {
      shown += (target - shown) * 0.14;
      const d = video.duration;
      if (!Number.isFinite(d) || d <= 0) return;
      const time = Math.min(d - 0.04, Math.max(0, shown * d));
      if (Math.abs(time - lastSeek) > 1 / 60 && !video.seeking) { video.currentTime = time; lastSeek = time; }
    };
    gsap.ticker.add(seek);

    const tl = gsap.timeline({
      defaults: { ease: 'none' },
      scrollTrigger: {
        trigger: hero, start: 'top top', end: () => `+=${Math.round(innerHeight * (small ? 1.1 : 1.5))}`,
        pin: true, scrub: 0.7, anticipatePin: 1, invalidateOnRefresh: true, refreshPriority: 1,
        onUpdate: self => {
          target = self.progress;
          chapters.forEach((li, i) => li.classList.toggle('is-active', self.progress >= ranges[i][0] && self.progress < ranges[i][1]));
          if (fill) fill.style.transform = `scaleX(${self.progress})`;
        }
      }
    });
    // The headline gives way to the chapters; the portrait leans in; the wordmark opens up.
    tl.to(copy, { autoAlpha: 0, y: -48, duration: 0.14 }, 0.1)
      .to(figure, { scale: 1.07, yPercent: 3, duration: 1 }, 0)
      .to(wordmark, { letterSpacing: '0.16em', opacity: 0.55, duration: 1 }, 0)
      .to(bottom, { autoAlpha: 0, duration: 0.18 }, 0.04);

    addEventListener('load', () => ScrollTrigger.refresh(), { once: true });
  };

  const ready = () => (document.readyState === 'complete' ? start() : addEventListener('load', start, { once: true }));
  // Wait for the page's own scroll scenes to exist so the pin is measured against them.
  if (video.readyState >= 1) ready(); else video.addEventListener('loadedmetadata', ready, { once: true });
  setTimeout(() => { if (!hero.classList.contains('has-temple-scroll')) ready(); }, 4000);
})();
