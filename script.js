(() => {
  'use strict';
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const root = document.documentElement;
  root.classList.add('js');
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  const finePointer = matchMedia('(hover: hover) and (pointer: fine)');
  function wrapWords(element, className) {
    if (!element || element.dataset.kineticReady) return;
    element.dataset.kineticReady = 'true';
    element.classList.add(className);
    element.setAttribute('aria-label', element.textContent.replace(/\s+/g, ' ').trim());
    const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
    const textNodes = [];
    while (walker.nextNode()) {
      if (walker.currentNode.nodeValue.trim()) textNodes.push(walker.currentNode);
    }
    let wordIndex = 0;
    textNodes.forEach(node => {
      const fragment = document.createDocumentFragment();
      node.nodeValue.split(/(\s+)/).forEach(part => {
        if (!part) return;
        if (/^\s+$/.test(part)) {
          fragment.append(document.createTextNode(part));
          return;
        }
        const word = document.createElement('span');
        word.className = 'kinetic-word';
        word.setAttribute('aria-hidden', 'true');
        word.style.setProperty('--word-delay', `${wordIndex++ * 60}ms`);
        word.textContent = part;
        fragment.append(word);
      });
      node.replaceWith(fragment);
    });
  }
  const heroTitle = $('#heroTitle');
  wrapWords(heroTitle, 'hero-kinetic');
  const studentTyping = $('.student-typing');
  const startHero = () => requestAnimationFrame(() => requestAnimationFrame(() => {
      heroTitle?.classList.add('kinetic-visible');
      studentTyping?.classList.add('is-typing');
    }));
  if (motion.matches) startHero();
  else setTimeout(startHero, 230);
  const portraitImage = $('.studio-portrait .portrait-image');
  const portraitFigure = portraitImage?.closest('.studio-portrait');
  const portraitHero = portraitImage?.closest('.studio-hero');
  if (portraitImage && portraitFigure && portraitHero) {
    const portraitContainers = [portraitFigure, portraitHero];
    let portraitRevealed = false;
    let portraitFallback;
    portraitContainers.forEach(container => {
      container.classList.add('portrait-loading');
      container.classList.remove('portrait-loaded');
    });
    const revealPortrait = (useFallback = false) => {
      const showingFallback = portraitFigure.classList.contains('portrait-fallback');
      if ((portraitRevealed && useFallback) || (portraitRevealed && !showingFallback)) return;
      portraitRevealed = true;
      clearTimeout(portraitFallback);
      portraitContainers.forEach(container => {
        container.classList.remove('portrait-loading');
        container.classList.add('portrait-loaded');
        container.classList.toggle('portrait-fallback', useFallback);
      });
      portraitFigure.removeAttribute('aria-busy');
    };
    const settlePortraitError = () => revealPortrait(true);
    portraitFallback = setTimeout(settlePortraitError, 2500);
    if (portraitImage.complete) {
      if (portraitImage.naturalWidth > 0) revealPortrait(false);
      else settlePortraitError();
    } else {
      portraitImage.addEventListener('load', () => revealPortrait(false), { once: true });
      portraitImage.addEventListener('error', settlePortraitError, { once: true });
    }
  }
  const menu = $('#mobileNav');
  const menuButton = $('#menuToggle');
  function closeMenu(returnFocus = false) {
    menu.hidden = true;
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open menu');
    document.body.classList.remove('menu-open');
    if (returnFocus) menuButton.focus();
  }
  menuButton.addEventListener('click', () => {
    const opening = menu.hidden;
    menu.hidden = !opening;
    menuButton.setAttribute('aria-expanded', String(opening));
    menuButton.setAttribute('aria-label', opening ? 'Close menu' : 'Open menu');
    document.body.classList.toggle('menu-open', opening);
  });
  $$('a', menu).forEach(link => link.addEventListener('click', () => closeMenu()));
  matchMedia('(min-width: 901px)').addEventListener('change', event => { if (event.matches) closeMenu(); });
  // Case studies work without JavaScript; deep links open them when enhanced.
  function openCase(hash) {
    if (!hash || !hash.startsWith('#')) return;
    const element = document.getElementById(hash.slice(1));
    if (element?.matches('details')) element.open = true;
  }
  $$('a[href^="#"]').forEach(link => link.addEventListener('click', () => openCase(link.hash)));
  addEventListener('hashchange', () => openCase(location.hash));
  openCase(location.hash);
  if (location.hash && document.getElementById(location.hash.slice(1))?.matches('details')) {
    requestAnimationFrame(() => document.getElementById(location.hash.slice(1)).scrollIntoView());
  }
  const progress = $('#progress');
  const header = $('.header');
  const backToTop = $('#backToTop');
  const hero = $('.studio-hero');
  let scrollPending = false;
  function updateScroll() {
    const viewportHeight = window.visualViewport?.height || innerHeight;
    const max = root.scrollHeight - viewportHeight;
    const ratio = max > 0 ? Math.min(1, scrollY / max) : 0;
    progress.style.transform = `scaleX(${ratio})`;
    header?.classList.toggle('is-scrolled', scrollY > 12);
    backToTop?.classList.toggle('is-visible', scrollY > (hero?.offsetHeight || viewportHeight) * .72);
    scrollPending = false;
  }
  function scheduleScrollUpdate() {
    if (!scrollPending) { scrollPending = true; requestAnimationFrame(updateScroll); }
  }
  addEventListener('scroll', scheduleScrollUpdate, { passive: true });
  addEventListener('resize', scheduleScrollUpdate, { passive: true });
  window.visualViewport?.addEventListener('resize', scheduleScrollUpdate, { passive: true });
  updateScroll();
  const navLinks = $$('.desktop-nav a');
  const navIndicator = $('.nav-indicator');
  function moveNavIndicator(link, instant = false) {
    if (!link || !navIndicator) return;
    navIndicator.style.transitionDuration = instant ? '0s' : '';
    navIndicator.style.width = `${link.offsetWidth}px`;
    navIndicator.style.transform = `translate3d(${link.offsetLeft}px,0,0)`;
    if (instant) requestAnimationFrame(() => { navIndicator.style.transitionDuration = ''; });
  }
  function setActiveNav(link) {
    if (!link) return;
    navLinks.forEach(item => {
      const active = item === link;
      item.classList.toggle('active', active);
      if (active) item.setAttribute('aria-current', 'location');
      else item.removeAttribute('aria-current');
    });
    moveNavIndicator(link);
  }
  requestAnimationFrame(() => moveNavIndicator($('.desktop-nav a.active'), true));
  navLinks.forEach(link => link.addEventListener('click', () => setActiveNav(link)));
  addEventListener('resize', () => moveNavIndicator($('.desktop-nav a.active'), true), { passive: true });
  if ('IntersectionObserver' in window) {
    const visibleSections = new Set();
    const navObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => entry.isIntersecting ? visibleSections.add(entry.target) : visibleSections.delete(entry.target));
      const current = [...visibleSections].sort((a, b) => Math.abs(a.getBoundingClientRect().top - 120) - Math.abs(b.getBoundingClientRect().top - 120))[0];
      if (current) setActiveNav(navLinks.find(link => link.hash === `#${current.id}`));
    }, { rootMargin: '-15% 0px -65% 0px', threshold: 0 });
    navLinks.forEach(link => {
      const section = document.getElementById(link.hash.slice(1));
      if (section) navObserver.observe(section);
    });
  }
  if (finePointer.matches) {
  $$('.tilt, .case').forEach(card => {
    let frame = 0;
    card.addEventListener('pointerenter', event => {
      if (event.pointerType === 'mouse' && !motion.matches) card.classList.add('is-tilting');
    });
    card.addEventListener('pointermove', event => {
      if (event.pointerType !== 'mouse' || motion.matches) return;
      cancelAnimationFrame(frame);
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - .5;
      const y = (event.clientY - rect.top) / rect.height - .5;
      frame = requestAnimationFrame(() => {
        card.style.setProperty('--tilt-x', `${-y * 5}deg`);
        card.style.setProperty('--tilt-y', `${x * 5}deg`);
        card.style.setProperty('--shine-x', `${(x + .5) * 100}%`);
        card.style.setProperty('--shine-y', `${(y + .5) * 100}%`);
        card.style.setProperty('--lift', '-5px');
      });
    });
    function reset() {
      cancelAnimationFrame(frame);
      card.style.removeProperty('--tilt-x');
      card.style.removeProperty('--tilt-y');
      card.style.removeProperty('--shine-x');
      card.style.removeProperty('--shine-y');
      card.style.removeProperty('--lift');
      card.classList.remove('is-tilting');
    }
    card.addEventListener('pointerleave', reset);
    motion.addEventListener('change', reset);
  });
  const ambientLight = $('#ambientLight');
  if (ambientLight) {
    let currentX = -700;
    let currentY = -700;
    let targetX = currentX;
    let targetY = currentY;
    let ambientFrame = 0;
    const animateAmbient = () => {
      currentX += (targetX - currentX) * .11;
      currentY += (targetY - currentY) * .11;
      ambientLight.style.transform = `translate3d(${currentX}px,${currentY}px,0)`;
      if (Math.abs(targetX - currentX) > .35 || Math.abs(targetY - currentY) > .35) ambientFrame = requestAnimationFrame(animateAmbient);
      else ambientFrame = 0;
    };
    addEventListener('pointermove', event => {
      if (event.pointerType !== 'mouse' || motion.matches) return;
      targetX = event.clientX - 280;
      targetY = event.clientY - 280;
      ambientLight.classList.toggle('is-visible', !event.target.closest('.studio-hero,.header,.command'));
      if (!ambientFrame) ambientFrame = requestAnimationFrame(animateAmbient);
    }, { passive: true });
    addEventListener('pointerleave', () => ambientLight.classList.remove('is-visible'));
    motion.addEventListener('change', event => {
      if (event.matches) ambientLight.classList.remove('is-visible');
    });
  }
  $$('.btn.primary, .contact-card .btn').forEach(button => {
    let frame = 0;
    button.addEventListener('pointermove', event => {
      if (event.pointerType !== 'mouse' || motion.matches) return;
      cancelAnimationFrame(frame);
      const rect = button.getBoundingClientRect();
      frame = requestAnimationFrame(() => {
        button.style.setProperty('--button-glow-x', `${event.clientX - rect.left}px`);
        button.style.setProperty('--button-glow-y', `${event.clientY - rect.top}px`);
      });
    });
    button.addEventListener('pointerleave', () => {
      cancelAnimationFrame(frame);
      button.style.removeProperty('--button-glow-x');
      button.style.removeProperty('--button-glow-y');
    });
  });
  }
  if ('IntersectionObserver' in window && !motion.matches) {
    const effectsObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.target === hero) entry.target.classList.toggle('effects-paused', !entry.isIntersecting);
        else entry.target.classList.toggle('is-onscreen', entry.isIntersecting);
      });
    }, { rootMargin: '12% 0px 12% 0px', threshold: .01 });
    if (hero) effectsObserver.observe(hero);
    $$('.project').forEach(project => effectsObserver.observe(project));
    document.addEventListener('visibilitychange', () => {
      hero?.classList.toggle('effects-paused', document.hidden);
    });
  }
  if ('IntersectionObserver' in window && !motion.matches) {
    $$('.section-heading h2, .about-title h2, .contact-card h2').forEach(heading => wrapWords(heading, 'kinetic-heading'));
    const revealGroups = [
      $$('.section-heading'),
      $$('.project-grid .project'),
      $$('.case-studies .case'),
      $$('.about-section > *'),
      $$('.journey li'),
      $$('.principles article'),
      $$('.skill-grid article'),
      $$('.writing-card'),
      $$('.closing > *')
    ];
    const revealTargets = [];
    const registered = new Set();
    revealGroups.forEach(group => group.forEach((element, index) => {
      if (registered.has(element)) return;
      registered.add(element);
      revealTargets.push(element);
      element.classList.add('reveal');
      element.style.setProperty('--reveal-delay', `${Math.min(index, 4) * 70}ms`);
    }));
    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('in-view');
        revealObserver.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: .08 });
    revealTargets.forEach(element => revealObserver.observe(element));
    motion.addEventListener('change', event => {
      if (event.matches) revealTargets.forEach(element => {
        element.classList.add('in-view');
        revealObserver.unobserve(element);
      });
    }, { once: true });
  }
  const command = $('#command');
  const input = $('#commandInput');
  const commandButtons = $$('#commandList button');
  const empty = $('#commandEmpty');
  let selected = 0;
  let previousFocus;
  const visible = () => commandButtons.filter(button => !button.hidden);
  function select() { visible().forEach((button, index) => button.classList.toggle('selected', selected === index)); }
  function closeCommand() { command.close(); previousFocus?.focus(); }
  function openCommand() {
    if (command.open) return;
    closeMenu();
    previousFocus = document.activeElement;
    input.value = '';
    commandButtons.forEach(button => button.hidden = false);
    empty.hidden = true;
    selected = 0;
    select();
    command.showModal();
    input.focus();
  }
  $('#cmdOpen').addEventListener('click', openCommand);
  $('#cmdClose').addEventListener('click', closeCommand);
  command.addEventListener('cancel', event => { event.preventDefault(); closeCommand(); });
  command.addEventListener('click', event => {
    const rect = command.getBoundingClientRect();
    if (event.target === command && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) closeCommand();
  });
  commandButtons.forEach(button => button.addEventListener('click', () => {
    closeCommand();
    location.hash = button.dataset.target;
    document.getElementById(button.dataset.target)?.scrollIntoView({ behavior: motion.matches ? 'auto' : 'smooth' });
  }));
  input.addEventListener('input', () => {
    const query = input.value.trim().toLowerCase();
    commandButtons.forEach(button => button.hidden = !button.textContent.toLowerCase().includes(query));
    selected = 0;
    empty.hidden = visible().length > 0;
    select();
  });
  input.addEventListener('keydown', event => {
    const buttons = visible();
    if (!buttons.length) return;
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      selected = (selected + (event.key === 'ArrowDown' ? 1 : -1) + buttons.length) % buttons.length;
      select();
    } else if (event.key === 'Enter') {
      event.preventDefault();
      buttons[selected]?.click();
    }
  });
  addEventListener('keydown', event => {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
      event.preventDefault();
      command.open ? closeCommand() : openCommand();
    }
    if (event.key === 'Escape' && !menu.hidden) closeMenu(true);
  });
  $('#year').textContent = new Date().getFullYear();
})();
