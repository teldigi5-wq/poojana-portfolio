(() => {
  'use strict';
  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => [...root.querySelectorAll(s)];
  const narrowScreen = window.matchMedia('(max-width: 900px)');
  const clock = $('#local-time');
  const timeFormat = new Intl.DateTimeFormat('en-GB', {hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'Asia/Colombo'});
  const updateClock = () => { clock.textContent = `${timeFormat.format(new Date())} / LOCAL TIME`; };
  updateClock();
  setInterval(() => { if (!document.hidden) updateClock(); }, 30000);

  let scrollQueued = false;
  const progress = $('.reading-line');
  function updateProgress() {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.transform = `scaleX(${max > 0 ? Math.min(1, window.scrollY / max) : 0})`;
    scrollQueued = false;
  }
  window.addEventListener('scroll', () => {
    if (!scrollQueued) { scrollQueued = true; requestAnimationFrame(updateProgress); }
  }, {passive: true});
  window.addEventListener('resize', updateProgress, {passive: true});
  updateProgress();

  const menuButton = $('.menu-toggle');
  const menu = $('#menu');
  const menuClose = $('.menu-close', menu);
  let menuAnimations = [];
  function closeMenu(restoreFocus = false) {
    if (!menu.open) return;
    menu.close();
    if (restoreFocus) menuButton.focus();
  }
  menu.addEventListener('close', () => {
    menuButton.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
    menuAnimations.forEach(animation => animation.cancel());
    menuAnimations = [];
  });
  menuButton.addEventListener('click', () => {
    if (menu.open) return closeMenu(true);
    menu.showModal();
    menuButton.setAttribute('aria-expanded', 'true');
    document.body.classList.add('menu-open');
    menuClose.focus();
    if (!document.documentElement.classList.contains('motion-off') && !matchMedia('(prefers-reduced-motion: reduce), (forced-colors: active)').matches) {
      menuAnimations = $$('.menu-links a, .menu-bottom', menu).map((item, index) => item.animate(
        [{opacity:0, transform:'translateY(18px)'}, {opacity:1, transform:'translateY(0)'}],
        {duration:450, delay:index*45, easing:'cubic-bezier(.2,.7,.2,1)', fill:'both'}
      ));
    }
  });
  menuClose.addEventListener('click', () => closeMenu(true));
  $('.menu-bottom-close')?.addEventListener('click', () => closeMenu(true));
  $$('a', menu).forEach(a => a.addEventListener('click', () => {
    closeMenu(false);
    if (a.hash) requestAnimationFrame(() => {
      const section = document.getElementById(a.hash.slice(1));
      if (!section) return;
      section.setAttribute('tabindex', '-1');
      section.focus({preventScroll:true});
      section.addEventListener('blur', () => section.removeAttribute('tabindex'), {once:true});
    });
  }));
  $$('.header a').forEach(a => a.addEventListener('click', () => closeMenu(false)));
  narrowScreen.addEventListener('change', () => closeMenu(false));

  const identities = {
    owner: {id: 'alice', authenticated: true},
    other: {id: 'bob', authenticated: true},
    guest: {id: null, authenticated: false}
  };
  function evaluateAccess(identity, resourceOwner) {
    if (!identity.authenticated) return {allowed: false, reason: 'Sign-in is required to read this private resource.'};
    if (identity.id !== resourceOwner) return {allowed: false, reason: 'Signing in does not grant access to another user’s data.'};
    return {allowed: true, reason: 'The signed-in user owns this resource.'};
  }
  $$('[data-identity]').forEach(button => button.addEventListener('click', () => {
    const identity = identities[button.dataset.identity];
    const result = evaluateAccess(identity, 'alice');
    $$('[data-identity]').forEach(option => {
      const selected = option === button;
      option.setAttribute('aria-pressed', String(selected));
      option.classList.toggle('is-active', selected);
    });
    $('#demo-actor').textContent = identity.id ? `user: ${identity.id}` : 'anonymous';
    $('#access-result').textContent = result.allowed ? 'ALLOW ↗' : 'DENY ×';
    $('#access-result').classList.toggle('is-denied', !result.allowed);
    $('#access-reason').textContent = result.reason;
  }));

  const projects = {
    wayfarer: {
      title: 'Wayfarer', lead: 'A connected travel-planning experience, from a first idea to the moment of arrival.', status: 'Public planning experience / optional provider integrations disabled',
      sections: [
        ['The experience', 'Discover, Journey Studio, Arrival Companion and My Journeys connect destination research, itinerary composition, saved plans and practical arrival checklists. The baseline runs without paid APIs.'],
        ['The engineering', 'Browser-local persistence and deterministic planning assistants support the core experience. Optional Groq/n8n and travel-search integrations sit behind private credentials and explicit activation controls.'],
        ['The boundary', 'The repository states that production Groq and SerpApi credentials are not configured. The planning assistants are rule-based, not live LLM inference. Live fares, booking inventory, confirmed rooms and checkout are not available.']
      ], links: [['Explore Wayfarer', 'https://wayfarer-world-travel.vercel.app/'], ['Review the source', 'https://github.com/teldigi5-wq/wayfarer-world-travel']]
    },

    boundary: {
      title: 'BoundaryLab', lead: 'Authorization should be understandable, repeatable and backed by evidence.', status: 'Pre-release engineering prototype',
      sections: [
        ['The problem', 'SaaS teams need to know whether users and services can access only the data and actions they are authorized to use. Checking that a login works does not establish account ownership or tenant isolation.'],
        ['The work', 'I’m building BoundaryLab around declared allow/deny expectations, repeatable checks and reviewable evidence. The scope includes anonymous access, account ownership, user-to-user boundaries, tenant isolation and administrator privileges.'],
        ['The boundary', 'The public website explains the product direction. This is a pre-release prototype, with no claim of complete vulnerability coverage or production readiness. The interactive example on this page is a local illustration of one ownership rule; it does not run BoundaryLab or test an external system.']
      ], links: [['Explore BoundaryLab', 'https://boundarylab.vercel.app/']]
    },
    aetheris: {
      title: 'Aetheris Platform', lead: 'A backend platform designed around explicit service, data and AI-runtime boundaries.', status: 'Research / physical-machine validation pending',
      sections: [
        ['The problem', 'Coordinating identity, application services, state and an optional AI runtime requires clear ownership and predictable failure behavior.'],
        ['The implementation', 'Java and Spring foundations connect gateway, identity and user services with PostgreSQL, Redis and RabbitMQ. Observability is represented through OpenTelemetry, Prometheus and Grafana. The Python AI runtime lives in a separate repository behind explicit contracts.'],
        ['Evidence & maturity', 'Architecture decisions and a verification checklist are available in the repository. These provide inspectable implementation context; they are not proof of production activation. Physical-machine validation and hardware-backed runtime integration still require verification.']
      ], links: [['Platform source', 'https://github.com/teldigi5-wq/aetheris-platform'], ['Architecture decisions', 'https://github.com/teldigi5-wq/aetheris-platform/blob/main/docs/architecture-decisions.md'], ['AI runtime', 'https://github.com/teldigi5-wq/aetheris-ai-runtime']]
    },
  };
  const dialog = $('#project-dialog');
  const dialogContent = $('#dialog-content');
  let dialogOpener = null;
  const element = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  };
  $$('.case-open').forEach(button => button.addEventListener('click', () => {
    const project = projects[button.dataset.project];
    if (!project) return;
    dialogContent.replaceChildren();
    const title = element('h2', 'dialog-title', project.title);
    title.id = 'dialog-title';
    dialogContent.append(title, element('p', 'dialog-lead', project.lead), element('p', 'dialog-status', project.status));
    project.sections.forEach(([heading, body]) => {
      const section = element('section', 'dialog-section');
      section.append(element('h3', '', heading), element('p', '', body));
      dialogContent.append(section);
    });
    const links = element('div', 'dialog-links');
    project.links.forEach(([label, url]) => {
      const link = element('a', '', `${label} ↗`);
      link.href = url; link.target = '_blank'; link.rel = 'noopener noreferrer';
      links.append(link);
    });
    dialogContent.append(links);
    dialogOpener = button;
    dialog.showModal();
    document.body.style.overflow = 'hidden';
    dialog.scrollTop = 0;
    $('.dialog-close').focus();
  }));
  $('.dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (event) => {
    const rect = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
  });
  dialog.addEventListener('close', () => {
    document.body.style.overflow = '';
    dialogOpener?.focus({preventScroll: true});
  });

  $('.copy-email').addEventListener('click', async () => {
    const status = $('.copy-status');
    try {
      await navigator.clipboard.writeText('teldigi5@gmail.com');
      status.textContent = 'Email copied.';
    } catch {
      status.textContent = 'Select the email address to copy it.';
      const range = document.createRange();
      range.selectNodeContents($('.email'));
      const selection = window.getSelection();
      selection.removeAllRanges(); selection.addRange(range);
    }
  });
})();
