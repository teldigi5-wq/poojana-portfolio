(() => {
  'use strict';
  const dialog = document.getElementById('portfolio-preloader');
  if (!dialog || typeof dialog.showModal !== 'function') return;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const forced = matchMedia('(forced-colors: active)');
  const navigation = performance.getEntriesByType('navigation')[0];
  // A fresh home visit/reload owns the opening, even when the browser restores
  // a previous scroll offset. Real section links and history remain direct.
  // Returning visitors (intro seen in the last 7 days) go straight to the page.
  const SEEN_KEY = 'pk-intro-seen';
  const WEEK = 7 * 24 * 60 * 60 * 1000;
  const store = (() => { try { return typeof localStorage === 'undefined' ? null : localStorage; } catch { return null; } })();
  const returning = (() => {
    try { const seen = Number(store?.getItem(SEEN_KEY)); return seen > 0 && Date.now() - seen < WEEK; } catch { return false; }
  })();
  const bypass = (location.hash && location.hash !== '#home' && location.hash !== '#main') ||
    new URLSearchParams(location.search).get('motion') === 'off' ||
    reduced.matches || forced.matches || navigation?.type === 'back_forward' || returning;
  const state = {active: false, startedAt: performance.now(), complete: () => {}};
  window.__portfolioIntro = state;
  if (bypass) {
    document.documentElement.dataset.introState = 'bypassed';
    if (returning) document.documentElement.dataset.introReason = 'returning';
    return;
  }
  let timer;
  const finish = (reason = 'animation') => {
    if (!state.active) return;
    state.active = false;
    clearTimeout(timer);
    document.documentElement.classList.remove('intro-active');
    document.documentElement.dataset.introState = 'complete';
    document.documentElement.dataset.introReason = typeof reason === 'string' ? reason : 'closed';
    document.documentElement.dataset.introElapsed = String(Math.round(performance.now() - state.startedAt));
    dialog.removeEventListener('close', finish);
    document.removeEventListener('visibilitychange', visibility);
    reduced.removeEventListener('change', preference);
    forced.removeEventListener('change', preference);
    removeEventListener('pagehide', finish);
    if (dialog.open) dialog.close();
    try { store?.setItem(SEEN_KEY, String(Date.now())); } catch { /* private mode: show it next time */ }
    dispatchEvent(new Event('portfolio:intro-complete'));
  };
  const visibility = () => { if (document.hidden) finish('hidden'); };
  const preference = () => { if (reduced.matches || forced.matches) finish('preference'); };
  state.complete = finish;
  state.active = true;
  try { dialog.showModal(); } catch { state.active = false; return; }
  document.documentElement.classList.add('intro-active');
  document.documentElement.dataset.introState = 'loading';
  dialog.addEventListener('close', finish);
  document.addEventListener('visibilitychange', visibility);
  reduced.addEventListener('change', preference);
  forced.addEventListener('change', preference);
  addEventListener('pagehide', finish);
  // Independent of React, image promises and animation frames: never strand the page.
  timer = setTimeout(() => finish('deadline'), 3500);
})();
