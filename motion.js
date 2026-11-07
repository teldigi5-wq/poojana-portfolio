(() => {
  'use strict';
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)');
  const finePointer = matchMedia('(hover: hover) and (pointer: fine)');
  const forced = matchMedia('(forced-colors: active)');
  const rig = $('#system-rig');
  const staticView = new URLSearchParams(location.search).get('motion') === 'off';
  let motionOff = staticView || reduce.matches || forced.matches;
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
    stopTurn();
    rotation += 45;
    rig.style.setProperty('--manual-rotation', `${rotation}deg`);
  });

  // A layer explanation works with mouse, keyboard, touch and motion disabled.
  const layerCopy = {
    experience: ['The interface people use.', 'Clear states, keyboard access and useful feedback connect a person to the system.'],
    trust: ['The boundary every request crosses.', 'Identity is only a starting point. Ownership and permissions decide which actions are allowed.'],
    foundation: ['The state the system depends on.', 'Durable data, explicit contracts and observable failures support the experience above.']
  };
  $$('.layer-legend [data-layer]').forEach(button => {
    button.disabled = false;
    button.addEventListener('click', () => {
    const layer = button.dataset.layer;
    rig.dataset.layer = layer;
    $$('.layer-legend [data-layer]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    $('#layer-explanation strong').textContent = layerCopy[layer][0];
    $('#layer-explanation p').textContent = layerCopy[layer][1];
    });
  });

  // Drag is an optional mouse enhancement. Touch keeps native vertical scrolling;
  // the Rotate button offers the same operation without dragging or inertia.
  const sculpture = $('.system-object');
  let drag = null, turnFrame = 0;
  function stopTurn() { cancelAnimationFrame(turnFrame); turnFrame = 0; delete sculpture.dataset.turning; }
  const releaseDrag = () => {
    if (drag && sculpture.hasPointerCapture(drag.id)) sculpture.releasePointerCapture(drag.id);
    drag = null; delete sculpture.dataset.dragging;
  };
  sculpture.addEventListener('pointerdown', event => {
    if (event.pointerType !== 'mouse' || event.button !== 0) return;
    stopTurn();
    drag = {id:event.pointerId, x:event.clientX, time:event.timeStamp, velocity:0};
    sculpture.setPointerCapture(event.pointerId);
    sculpture.dataset.dragging = 'true';
    sculpture.dataset.turning = 'true';
  });
  sculpture.addEventListener('pointermove', event => {
    if (!drag || event.pointerId !== drag.id) return;
    const change = (event.clientX - drag.x) * .3;
    const elapsed = Math.max(8, event.timeStamp - drag.time);
    rotation += change;
    drag.velocity = Math.max(-.3, Math.min(.3, change / elapsed));
    drag.x = event.clientX; drag.time = event.timeStamp;
    rig.style.setProperty('--manual-rotation', `${rotation}deg`);
  });
  sculpture.addEventListener('pointerup', event => {
    if (!drag || event.pointerId !== drag.id) return;
    let velocity = event.timeStamp - drag.time < 80 ? drag.velocity : 0;
    releaseDrag();
    if (motionOff || document.hidden || Math.abs(velocity) < .01) {stopTurn(); return;}
    let last = performance.now(), age = 0;
    const coast = now => {
      const dt = Math.min(32, now - last); last = now; age += dt;
      velocity *= Math.exp(-dt / 110);
      rotation += velocity * dt;
      rig.style.setProperty('--manual-rotation', `${rotation}deg`);
      if (!motionOff && !document.hidden && Math.abs(velocity) > .005 && age < 600) turnFrame = requestAnimationFrame(coast);
      else stopTurn();
    };
    turnFrame = requestAnimationFrame(coast);
  });
  sculpture.addEventListener('pointercancel', () => {stopTurn(); releaseDrag();});
  sculpture.addEventListener('lostpointercapture', releaseDrag);
  document.addEventListener('visibilitychange', () => {if (document.hidden) {stopTurn(); releaseDrag();}});
  addEventListener('pagehide', () => {stopTurn(); releaseDrag();});

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
    buildMotion();
    window.ScrollTrigger?.refresh();
    updateHeader();
  }
  const updateSystemMotion = () => {
    // Preserve the reader's place if the operating-system preference changes.
    const anchors = $$('.hero-luxe, .intro, .dimension, #work, .project, .compact-project, #about, #approach, #contact');
    const anchor = anchors.filter(item => item.getBoundingClientRect().top <= innerHeight * .45).at(-1) || $('.hero-luxe');
    const before = anchor.getBoundingClientRect().top;
    motionOff = staticView || reduce.matches || forced.matches;
    applyMotion();
    const shift = anchor.getBoundingClientRect().top - before;
    if (Math.abs(shift) > 1 && anchor.id !== 'home') scrollTo({top: scrollY + shift, behavior: 'instant'});
  };
  reduce.addEventListener('change', updateSystemMotion);
  forced.addEventListener('change', updateSystemMotion);
  applyMotion();
  document.fonts?.ready.then(() => window.ScrollTrigger?.refresh());
  addEventListener('load', () => window.ScrollTrigger?.refresh(), {once: true});
})();
