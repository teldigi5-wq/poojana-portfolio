/* Details — small touches that make the site feel considered.
   1. Context cursor: a label follows the pointer over things you can drag, play or open.
   2. Terminal commands in the ⌘K menu (whoami, ping, sudo hire poojana, sound on…).
   3. Optional sound, off by default, synthesised with Web Audio (no audio files). */
(() => {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches ||
    new URLSearchParams(location.search).get('motion') === 'off';

  /* ---------- 3. sound (used by the others) ---------- */
  const SOUND_KEY = 'pk-sound';
  let audio = null;
  const soundOn = () => { try { return localStorage.getItem(SOUND_KEY) === 'on'; } catch { return false; } };
  const setSound = on => { try { localStorage.setItem(SOUND_KEY, on ? 'on' : 'off'); } catch { /* ignore */ } };
  const tone = (freq, { duration = 0.12, type = 'sine', gain = 0.05, slide = 0 } = {}) => {
    if (!soundOn()) return;
    try {
      audio ||= new (window.AudioContext || window.webkitAudioContext)();
      if (audio.state === 'suspended') audio.resume();
      const t = audio.currentTime;
      const osc = audio.createOscillator();
      const amp = audio.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, t);
      if (slide) osc.frequency.exponentialRampToValueAtTime(Math.max(40, freq + slide), t + duration);
      amp.gain.setValueAtTime(0.0001, t);
      amp.gain.exponentialRampToValueAtTime(gain, t + 0.012);
      amp.gain.exponentialRampToValueAtTime(0.0001, t + duration);
      osc.connect(amp).connect(audio.destination);
      osc.start(t);
      osc.stop(t + duration + 0.02);
    } catch { /* audio unavailable */ }
  };
  const sounds = {
    allow: () => { tone(660, { duration: 0.12 }); setTimeout(() => tone(990, { duration: 0.18 }), 90); },
    deny: () => tone(150, { duration: 0.22, type: 'triangle', gain: 0.08, slide: -60 }),
    tick: () => tone(1400, { duration: 0.04, gain: 0.02 }),
    ok: () => { tone(523, { duration: 0.1 }); setTimeout(() => tone(659, { duration: 0.1 }), 80); setTimeout(() => tone(784, { duration: 0.2 }), 160); }
  };

  // Decision sounds follow the BoundaryLab explorer's live result.
  const result = document.getElementById('access-result');
  if (result) {
    let last = result.classList.contains('is-denied');
    new MutationObserver(() => {
      const denied = result.classList.contains('is-denied');
      if (denied === last && result.dataset.soundSeen === result.textContent) return;
      last = denied;
      result.dataset.soundSeen = result.textContent;
      (denied ? sounds.deny : sounds.allow)();
    }).observe(result, { attributes: true, attributeFilter: ['class'], childList: true, characterData: true, subtree: true });
  }
  document.addEventListener('click', event => {
    if (event.target.closest('.exhibit-controls button, .identity-options button, .case-toggle, .work-index a')) sounds.tick();
  });

  /* ---------- 1. context cursor ---------- */
  const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;
  const forced = matchMedia('(forced-colors: active)').matches;
  if (fine && !reduced && !forced) {
    const CONTEXTS = [
      ['.b3d-chamber, .system-object, .system-exhibit', 'Drag'],
      ['.boundary-test', 'Try it'],
      ['.architecture', 'Inspect'],
      ['.hero-code', 'Read'],
      ['.compact-project, .gallery-track > *', 'Open'],
      ['a[href^="mailto:"]', 'Say hi']
    ];
    const cursor = document.createElement('div');
    cursor.className = 'context-cursor';
    cursor.setAttribute('aria-hidden', 'true');
    cursor.innerHTML = '<span></span>';
    document.body.append(cursor);
    const text = cursor.firstChild;
    let x = 0, y = 0, tx = 0, ty = 0, frame = 0, label = '';
    const loop = () => {
      x += (tx - x) * 0.22; y += (ty - y) * 0.22;
      cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      frame = Math.abs(tx - x) + Math.abs(ty - y) > 0.3 ? requestAnimationFrame(loop) : 0;
    };
    addEventListener('pointermove', event => {
      if (event.pointerType !== 'mouse') return;
      tx = event.clientX; ty = event.clientY;
      const match = CONTEXTS.find(([selector]) => event.target.closest?.(selector));
      const next = match ? match[1] : '';
      if (next !== label) {
        label = next;
        if (next) text.textContent = next;
        cursor.classList.toggle('is-on', Boolean(next));
      }
      if (!frame) frame = requestAnimationFrame(loop);
    }, { passive: true });
    document.addEventListener('pointerleave', () => cursor.classList.remove('is-on'));
    addEventListener('pointerdown', () => cursor.classList.add('is-pressed'));
    addEventListener('pointerup', () => cursor.classList.remove('is-pressed'));
  }

  /* ---------- 2. terminal commands in ⌘K ---------- */
  const time = () => new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Colombo' }).format(new Date());
  const COMMANDS = {
    help: () => ({ out: 'whoami · ping · ls · curl cv · sudo hire poojana · sound on · sound off' }),
    whoami: () => ({ out: 'poojana — backend, applied AI and authorization. IT undergraduate at SLIIT, open to internships.' }),
    ping: () => ({ out: `pong · Sri Lanka · ${time()} local (UTC+05:30)` }),
    ls: () => ({ out: 'home/  depth/  work/  about/  contact/', link: ['#work', 'cd work/ ↘'] }),
    'curl cv': () => ({ out: '200 OK · application/pdf', link: ['assets/Poojana_Kaveesh_ATS_2026.pdf', 'Open the CV ↗'] }),
    'sudo hire poojana': () => { sounds.ok(); return { out: 'Permission granted ✓ 200 OK. Escalating to a real conversation…', link: ['mailto:teldigi5@gmail.com', 'Write an email ↗'], tone: 'ok' }; },
    'rm -rf /': () => { sounds.deny(); return { out: '403 Forbidden. Nice try — this workspace has boundaries.', tone: 'deny' }; },
    'sound on': () => { setSound(true); sounds.ok(); return { out: 'Sound on. Decisions and controls now make a small sound. Type “sound off” to stop.', tone: 'ok' }; },
    'sound off': () => { setSound(false); return { out: 'Sound off.' }; }
  };
  const ALIASES = { 'sudo hire': 'sudo hire poojana', 'hire poojana': 'sudo hire poojana', 'curl /cv': 'curl cv', '?': 'help', 'man': 'help' };

  const render = (dialog, query) => {
    let panel = dialog.querySelector('.command-terminal');
    if (!panel) {
      panel = document.createElement('div');
      panel.className = 'command-terminal';
      panel.setAttribute('role', 'status');
      panel.setAttribute('aria-live', 'polite');
      dialog.append(panel);
    }
    const key = query.trim().toLowerCase().replace(/\s+/g, ' ');
    const command = COMMANDS[ALIASES[key] || key];
    if (!command) {
      panel.dataset.tone = 'hint';
      panel.innerHTML = '<code>$</code> <span>Tip: this menu also takes a few terminal commands. Try <kbd>whoami</kbd> or <kbd>help</kbd>.</span>';
      return;
    }
    const { out, link, tone } = command();
    panel.dataset.tone = tone || 'out';
    panel.innerHTML = `<code>$ ${key}</code><span></span>`;
    panel.querySelector('span').textContent = out;
    if (link) {
      const a = document.createElement('a');
      a.href = link[0];
      a.textContent = link[1];
      if (!link[0].startsWith('#') && !link[0].startsWith('mailto:')) { a.target = '_blank'; a.rel = 'noopener noreferrer'; }
      if (link[0].startsWith('#')) a.addEventListener('click', () => dialog.close?.());
      panel.append(a);
    }
  };
  document.addEventListener('input', event => {
    const input = event.target;
    if (!(input instanceof HTMLInputElement) || !input.closest('.command-dialog')) return;
    render(input.closest('.command-dialog'), input.value);
  });
  // Show the hint whenever the menu opens.
  new MutationObserver(() => {
    const dialog = document.querySelector('.command-dialog[open]');
    if (dialog && !dialog.querySelector('.command-terminal')) render(dialog, '');
  }).observe(document.body, { subtree: true, attributes: true, attributeFilter: ['open'], childList: true });
})();
