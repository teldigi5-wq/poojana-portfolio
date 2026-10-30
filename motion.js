(() => {
  'use strict';
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)');
  const finePointer = matchMedia('(hover: hover) and (pointer: fine)');
  const toggle = $('.motion-toggle');
  const rig = $('#system-rig');
  let preference = 'on';
  try { preference = localStorage.getItem('pk-motion') || 'on'; } catch (_) { /* Storage is optional. */ }
  let motionOff = preference === 'off' || reduce.matches;
  let scenes;
  let entrance;
  let rotation = 0;
  let headerFrame = false;

  const updateHeader = () => {
    $('.header').classList.toggle('is-scrolled', scrollY > 30);
    headerFrame = false;
  };
  addEventListener('scroll', () => {
    if (!headerFrame) { headerFrame = true; requestAnimationFrame(updateHeader); }
  }, {passive: true});
  updateHeader();

  // These controls remain useful with animation off and do not depend on GSAP.
  $$('.exhibit-controls [data-view]').forEach(button => {
    button.addEventListener('click', () => {
      rig.dataset.view = button.dataset.view;
      $$('.exhibit-controls [data-view]').forEach(item => {
        item.setAttribute('aria-pressed', String(item === button));
      });
    });
  });
  $('#rotate-object').addEventListener('click', () => {
    rotation += 45;
    rig.style.setProperty('--manual-rotation', `${rotation}deg`);
  });

  // Small pointer responses suggest the weight of a physical object.
  const tiltTargets = [$('.system-object'), ...$$('.compact-project')];
  tiltTargets.forEach(element => {
    let pending = false;
    let pointer = {x: 0, y: 0};
    const render = () => {
      pending = false;
      if (motionOff || !finePointer.matches) return;
      const target = element.matches('.system-object') ? $('.system-interaction', element) : element;
      const sculpted = element.matches('.system-object');
      target.style.setProperty(sculpted ? '--pointer-x' : '--tilt-y', `${pointer.x * 3}deg`);
      target.style.setProperty(sculpted ? '--pointer-y' : '--tilt-x', `${pointer.y * -2}deg`);
      element.style.setProperty('--spot-x', `${(pointer.x + 1) * 50}%`);
      element.style.setProperty('--spot-y', `${(pointer.y + 1) * 50}%`);
    };
    element.addEventListener('pointermove', event => {
      if (motionOff || !finePointer.matches || event.pointerType === 'touch') return;
      const box = element.getBoundingClientRect();
      pointer = {x: (event.clientX - box.left) / box.width * 2 - 1, y: (event.clientY - box.top) / box.height * 2 - 1};
      if (!pending) { pending = true; requestAnimationFrame(render); }
    }, {passive: true});
    element.addEventListener('pointerleave', () => {
      pointer = {x: 0, y: 0};
      const target = element.matches('.system-object') ? $('.system-interaction', element) : element;
      ['--pointer-x', '--pointer-y', '--tilt-x', '--tilt-y'].forEach(key => target.style.removeProperty(key));
    }, {passive: true});
  });

  function buildMotion() {
    if (!window.gsap || !window.ScrollTrigger || motionOff) return;
    gsap.registerPlugin(ScrollTrigger);
    scenes = gsap.matchMedia();
    scenes.add({
      spacious: '(min-width: 1100px) and (min-height: 700px)',
      compact: '(max-width: 1099px), (max-height: 699px)'
    }, context => {
      const spacious = context.conditions.spacious;
      if (spacious) {
        const system = gsap.timeline({
          defaults: {ease: 'none'},
          scrollTrigger: {trigger: '.dimension', start: 'top top', end: () => `+=${innerHeight * .8}`, pin: '.dimension-stage', scrub: .75, anticipatePin: 1, invalidateOnRefresh: true}
        });
        system.fromTo(rig, {'--scroll-spread': .05}, {'--scroll-spread': 1, duration: 1}, 0)
          .fromTo('.system-camera', {rotationX: 50, rotationZ: -25}, {rotationX: 58, rotationZ: -34, duration: 1}, 0)
          .fromTo('.plate-surface', {'--sheen': '-85%'}, {'--sheen': '75%', duration: 1}, 0)
          .to('.dimension-progress i', {scaleX: 1, duration: 1}, 0);
      } else {
        // No pinned sections on phones or short landscape viewports.
        gsap.fromTo(rig, {'--scroll-spread': .2}, {
          '--scroll-spread': .9, ease: 'none',
          scrollTrigger: {trigger: '.system-object', start: 'top 90%', end: 'bottom 25%', scrub: .8}
        });
      }
      $$('.reveal').forEach(element => {
        gsap.from(element, {y: spacious ? 26 : 14, opacity: 0, duration: .8, ease: 'power2.out', scrollTrigger: {trigger: element, start: 'top 94%', once: true}});
      });
      if (spacious) {
        $$('.featured-stack .project-stage').forEach(element => {
          gsap.from(element, {y: 35, duration: .9, ease: 'power2.out', scrollTrigger: {trigger: element, start: 'top 90%', once: true}});
        });
        gsap.fromTo('.architecture', {rotationY: -12}, {rotationY: -4, ease: 'none', scrollTrigger: {trigger: '.aetheris-stage', start: 'top 90%', end: 'bottom 20%', scrub: .8}});
      }
    });
  }

  function applyMotion() {
    entrance?.revert();
    scenes?.revert();
    scenes = undefined;
    document.documentElement.classList.toggle('motion-off', motionOff);
    toggle.disabled = reduce.matches;
    toggle.setAttribute('aria-pressed', String(motionOff));
    $('span', toggle).textContent = motionOff ? 'OFF' : 'ON';
    toggle.title = reduce.matches ? 'Animation follows your system reduced-motion setting' : motionOff ? 'Turn on animation' : 'Turn off animation';
    toggle.setAttribute('aria-label', `${motionOff ? 'Enable' : 'Disable'} scroll animation`);
    buildMotion();
    window.ScrollTrigger?.refresh();
    updateHeader();
  }
  toggle.addEventListener('click', () => {
    // Keep the nearest content in place as pin spacing changes.
    const anchors = $$('.hero-luxe, .intro, .dimension, #work, .project, .compact-project, #about, #approach, #contact');
    const anchor = anchors.filter(item => item.getBoundingClientRect().top <= innerHeight * .45).at(-1) || $('.hero-luxe');
    const before = anchor.getBoundingClientRect().top;
    motionOff = !motionOff;
    preference = motionOff ? 'off' : 'on';
    try { localStorage.setItem('pk-motion', preference); } catch (_) { /* Private browsing may disable storage. */ }
    applyMotion();
    const shift = anchor.getBoundingClientRect().top - before;
    if (Math.abs(shift) > 1 && anchor.id !== 'home') scrollTo({top: scrollY + shift, behavior: 'instant'});
  });
  reduce.addEventListener('change', () => {
    motionOff = reduce.matches || preference === 'off';
    applyMotion();
  });
  applyMotion();
  document.fonts?.ready.then(() => window.ScrollTrigger?.refresh());
  addEventListener('load', () => window.ScrollTrigger?.refresh(), {once: true});
})();
