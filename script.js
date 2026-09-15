(() => {
  'use strict';
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const root = document.documentElement;
  root.classList.add('js');
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  const finePointer = matchMedia('(hover: hover) and (pointer: fine)');
  const portraitImage = $('.studio-portrait img');
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
    const revealPortrait = () => {
      if (portraitRevealed) return;
      portraitRevealed = true;
      clearTimeout(portraitFallback);
      portraitContainers.forEach(container => {
        container.classList.remove('portrait-loading');
        container.classList.add('portrait-loaded');
      });
      portraitFigure.removeAttribute('aria-busy');
    };
    const settlePortraitError = () => revealPortrait();
    portraitFallback = setTimeout(revealPortrait, 4500);
    if (portraitImage.complete) {
      if (portraitImage.naturalWidth > 0) revealPortrait();
      else settlePortraitError();
    } else {
      portraitImage.addEventListener('load', revealPortrait, { once: true });
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
  let scrollPending = false;
  function updateScroll() {
    const max = root.scrollHeight - innerHeight;
    progress.style.width = `${max > 0 ? Math.min(100, scrollY / max * 100) : 0}%`;
    scrollPending = false;
  }
  addEventListener('scroll', () => {
    if (!scrollPending) { scrollPending = true; requestAnimationFrame(updateScroll); }
  }, { passive: true });
  updateScroll();
  if ('IntersectionObserver' in window) {
    const navLinks = $$('.desktop-nav a');
    const navObserver = new IntersectionObserver(entries => {
      const current = entries.find(entry => entry.isIntersecting);
      if (!current) return;
      navLinks.forEach(link => {
        const active = link.hash === `#${current.target.id}`;
        link.classList.toggle('active', active);
        if (active) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    }, { rootMargin: '-15% 0px -65% 0px', threshold: 0 });
    ['home', 'projects', 'about', 'skills', 'journey', 'contact'].forEach(id => navObserver.observe(document.getElementById(id)));
  }
  $$('.tilt').forEach(card => {
    let frame = 0;
    card.addEventListener('pointermove', event => {
      if (motion.matches || !finePointer.matches) return;
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
    }
    card.addEventListener('pointerleave', reset);
    motion.addEventListener('change', reset);
  });
  if ('IntersectionObserver' in window && !motion.matches) {
    const revealTargets = $$('.section-heading, .project, .case, .about-title, .journey, .principles article, .skill-grid article, .writing-card, .closing > *');
    revealTargets.forEach((element, index) => {
      element.classList.add('reveal');
      element.style.setProperty('--reveal-delay', `${Math.min(index % 4, 3) * 70}ms`);
    });
    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('in-view');
        revealObserver.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: .08 });
    revealTargets.forEach(element => revealObserver.observe(element));
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
