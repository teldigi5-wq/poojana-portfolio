/* Temple hero choreography. Uses the page's existing GSAP + ScrollTrigger (and Lenis, which
   the React island already wires to ScrollTrigger.update) — nothing new is loaded.

   - Entrance (after the Old Masters intro closes): headline lines rise through masks,
     the kicker types in (clip-path only, so the text itself never changes for screen
     readers), the index numerals count in.
   - Scroll: the hero pins for ~1.25 viewport heights on desktop; the progress drives the
     camera walk in the 3D temple (stage.js reads section.worldProgress), the copy exits
     through its masks, the portrait drifts forward and a meander-edged wipe hands over to
     the next section. Phones: no pin; the walk follows the hero scrolling away.
   - Reduced motion / ?motion=off / forced colours: none of this runs. The HTML is complete
     and visible without JavaScript; the scene is replaced by its designed still. */
(() => {
  const hero = document.getElementById('home');
  if (!hero || !hero.classList.contains('hero-temple')) return;
  const root = document.documentElement;
  const query = new URLSearchParams(location.search);
  const reduce = matchMedia('(prefers-reduced-motion: reduce)');
  const forced = matchMedia('(forced-colors: active)');
  const finePointer = matchMedia('(hover: hover) and (pointer: fine)');
  const motionOff = () => reduce.matches || forced.matches || query.get('motion') === 'off' || root.classList.contains('motion-off');
  const $ = (s, el = hero) => el.querySelector(s);
  const $$ = (s, el = hero) => [...el.querySelectorAll(s)];

  const index = $('.hero-index');
  const indexItems = index ? $$('li', index) : [];
  const setIndex = progress => { index?.style.setProperty('--hero-progress', progress.toFixed(4)); };

  const introDone = () => new Promise(resolve => {
    if (root.dataset.introState !== 'loading' && !root.classList.contains('intro-active')) return resolve();
    addEventListener('portfolio:intro-complete', () => resolve(), { once: true });
    setTimeout(resolve, 9000);   // never wait forever (the intro has its own watchdog too)
  });

  let scenes = null;
  let entrancePlayed = false;

  function entrance() {
    if (entrancePlayed || !window.gsap) return;
    entrancePlayed = true;
    // Deep links and restored scroll positions skip the entrance (content is already in view).
    if (scrollY > 40 || location.hash) return;
    const lines = $$('.temple-title .tl > span');
    const typed = $$('.hero-kicker [data-type]');
    const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });
    tl.fromTo(lines, { yPercent: 112 }, { yPercent: 0, duration: 1.25, stagger: 0.09, clearProps: 'transform' }, 0.05)
      .fromTo('.hero-kicker .kicker-rule', { scaleX: 0, transformOrigin: 'left center' }, { scaleX: 1, duration: 0.9, ease: 'power3.out' }, 0);
    typed.forEach((span, i) => {
      const n = Math.max(1, span.textContent.length);
      tl.fromTo(span, { clipPath: 'inset(-10% 100% -10% 0)' }, { clipPath: 'inset(-10% 0% -10% 0)', duration: n * 0.026, ease: `steps(${n})`, clearProps: 'clipPath' }, 0.15 + i * 0.42);
    });
    // Index numerals count in (00 → 05), then settle.
    indexItems.forEach((li, i) => {
      const b = li.querySelector('b');
      const target = i + 1;
      const counter = { v: 0 };
      tl.fromTo(li, { opacity: 0, x: -6 }, { opacity: 1, x: 0, duration: 0.7, ease: 'power3.out', clearProps: 'opacity,transform' }, 0.35 + i * 0.07);
      tl.to(counter, { v: target, duration: 0.6, ease: 'power2.out', onUpdate: () => { b.textContent = String(Math.round(counter.v)).padStart(2, '0'); } }, 0.35 + i * 0.07);
    });
    // Anyone tabbing in during the entrance gets the finished state immediately.
    addEventListener('keydown', event => { if (event.key === 'Tab') tl.progress(1); }, { once: true });
  }

  function magnetic(el) {
    if (!finePointer.matches) return () => {};
    const xTo = gsap.quickTo(el, 'x', { duration: 0.6, ease: 'power3.out' });
    const yTo = gsap.quickTo(el, 'y', { duration: 0.6, ease: 'power3.out' });
    const move = event => {
      const r = el.getBoundingClientRect();
      xTo((event.clientX - (r.left + r.width / 2)) * 0.28);
      yTo((event.clientY - (r.top + r.height / 2)) * 0.4);
    };
    const leave = () => gsap.to(el, { x: 0, y: 0, duration: 0.9, ease: 'elastic.out(1, 0.45)' });
    el.addEventListener('pointermove', move, { passive: true });
    el.addEventListener('pointerleave', leave);
    return () => { el.removeEventListener('pointermove', move); el.removeEventListener('pointerleave', leave); gsap.set(el, { clearProps: 'transform' }); };
  }

  function build() {
    scenes?.revert();
    scenes = null;
    delete hero.worldProgress;
    setIndex(0);
    const off = motionOff() || !window.gsap || !window.ScrollTrigger;
    hero.classList.toggle('temple-static', off);
    if (off) return;
    gsap.registerPlugin(ScrollTrigger);
    scenes = gsap.matchMedia();
    scenes.add({
      pinned: '(min-width: 901px) and (min-height: 620px)',
      flowing: '(max-width: 900px), (max-height: 619px)'
    }, context => {
      const pinned = context.conditions.pinned;
      const update = self => { hero.worldProgress = self.progress; setIndex(self.progress); };
      if (!pinned) {
        // Phones and short landscape screens: no pin (it fights touch scrolling); walk as the hero leaves.
        ScrollTrigger.create({ trigger: hero, start: 'top top', end: 'bottom top', scrub: 0.6, onUpdate: update, invalidateOnRefresh: true });
        return () => { delete hero.worldProgress; };
      }
      const tl = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: {
          trigger: hero, start: 'top top', end: () => `+=${Math.round(innerHeight * 1.25)}`,
          pin: true, pinSpacing: true, scrub: 0.8, anticipatePin: 1, invalidateOnRefresh: true,
          refreshPriority: 20, onUpdate: update
        }
      });
      // Layered parallax: the portrait (nearest layer) drifts forward and down the most.
      tl.to('.hero-figure', { yPercent: 9, scale: 1.06, transformOrigin: '62% 30%', ease: 'power2.inOut', duration: 1 }, 0)
        .to('.hero-top, .hero-nameplate, .hero-bottom', { autoAlpha: 0, y: -12, ease: 'power2.in', duration: 0.22 }, 0.18)
        .to('.hero-kicker, .hero-description, .hero-actions', { autoAlpha: 0, y: -28, stagger: 0.035, ease: 'power3.in', duration: 0.26 }, 0.3)
        .to('.temple-title .tl > span', { yPercent: -118, stagger: 0.045, ease: 'power3.in', duration: 0.3 }, 0.34)
        .to('.hero-index', { autoAlpha: 0, duration: 0.15 }, 0.82)
        .fromTo('.temple-wipe', { yPercent: 101 }, { yPercent: 0, ease: 'expo.inOut', duration: 0.3 }, 0.7);
      const unmagnet = $$('[data-magnetic]').map(magnetic);
      return () => { unmagnet.forEach(fn => fn()); delete hero.worldProgress; };
    });
  }

  reduce.addEventListener?.('change', build);
  forced.addEventListener?.('change', build);
  new MutationObserver(() => {
    const off = root.classList.contains('motion-off');
    if (off !== hero.classList.contains('temple-static')) build();
  }).observe(root, { attributes: true, attributeFilter: ['class'] });

  const start = () => {
    build();
    if (!motionOff() && window.gsap) introDone().then(entrance);
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start, { once: true });
  else start();
})();
