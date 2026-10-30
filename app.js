(() => {
  'use strict';
  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => [...root.querySelectorAll(s)];
  const narrowScreen = window.matchMedia('(max-width: 760px)');
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
  function closeMenu(restoreFocus = false) {
    menu.hidden = true;
    menuButton.setAttribute('aria-expanded', 'false');
    $('span', menuButton).textContent = 'Menu';
    document.body.classList.remove('menu-open');
    $('#main').inert = false;
    if (restoreFocus) menuButton.focus();
  }
  menuButton.addEventListener('click', () => {
    if (!menu.hidden) return closeMenu(true);
    menu.hidden = false;
    menuButton.setAttribute('aria-expanded', 'true');
    $('span', menuButton).textContent = 'Close';
    document.body.classList.add('menu-open');
    $('#main').inert = true;
    $('a', menu).focus();
  });
  $$('a', menu).forEach(a => a.addEventListener('click', () => closeMenu(false)));
  $$('.header a').forEach(a => a.addEventListener('click', () => closeMenu(false)));
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && !menu.hidden) closeMenu(true); });
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
    sentinel: {
      title: 'Sentinel', lead: 'Security events connected to deterministic detections and reviewable evidence.', status: 'Pre-production local security lab',
      sections: [
        ['The problem', 'A useful security signal should lead back to an explainable rule and the evidence that triggered it. Sentinel explores that path in a constrained local environment.'],
        ['The implementation', 'The repository describes HMAC-authenticated event ingestion, nonce and timestamp checks, bounded payloads, deterministic detection rules, evidence links and an HMAC-linked local audit. FastAPI and SQLite support the local core.'],
        ['The boundary', 'The dashboard source is provided, but its README does not claim a locally verified frontend build. Live endpoint adapters, automatic blocking and AI-powered investigation are roadmap items. Sentinel is not a complete SOC, EDR, antivirus or commercial security replacement.']
      ], links: [['Source & implementation status', 'https://github.com/teldigi5-wq/sentinel-security-platform'], ['Threat model', 'https://github.com/teldigi5-wq/sentinel-security-platform/blob/main/docs/THREAT_MODEL.md']]
    },
    floodguard: {
      title: 'FloodGuard', lead: 'A student IoT project connecting water-level sensing with understandable notifications.', status: 'Hardware & notification prototype / live delivery unverified',
      sections: [
        ['The system', 'The broader student project links an ultrasonic sensor and Arduino Uno through an ESP8266 to Firebase telemetry. The maintained Node.js and WhatsApp component reads telemetry and evaluates status changes.'],
        ['The engineering', 'The messaging layer includes child-specific Firebase reads, stale-data handling, validated readings, deduplicated transition alerts and protected setup endpoints. Its offline command center demonstrates fictional scenarios without contacting Firebase or WhatsApp.'],
        ['The boundary', 'Synthetic checks do not establish sensor accuracy, actual message delivery or continuous availability. Hardware, cloud hosting and production Firebase rules require separate validation. This is not an officially certified emergency-warning system. The sculpture on this page is conceptual, not a photograph of the hardware.']
      ], links: [['Notification source', 'https://github.com/teldigi5-wq/floodguard-whatsapp-bot'], ['Website source', 'https://github.com/teldigi5-wq/floodguard-website']]
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
    finalforge: {
      title: 'FinalForge', lead: 'A study platform that connects verified student access, assessment workflows and progress.', status: 'Implemented workflows / production policies need verification',
      sections: [
        ['The problem', 'A student study product needs useful revision workflows and clear access controls, with a way to recover progress when an assessment is interrupted.'],
        ['The implementation', 'The project combines a student-ID allowlist and email verification with mock exams, quizzes, marking guides and progress tracking. Its access model derives student email addresses from IDs and treats verified membership as an explicit requirement.'],
        ['Evidence & maturity', 'The repository provides the implementation and checks. Selected source checks have passed in the existing project history; production Firebase policies require independent verification. No student numbers, learning outcomes or production security results are asserted here.']
      ], links: [['Review the source', 'https://github.com/teldigi5-wq/finalforge'], ['Visit FinalForge', 'https://finalforge-weld.vercel.app/']]
    },
    averis: {
      title: 'Averis AI', lead: 'Document comparison built to explain evidence, not automate accusations.', status: 'Beta / runtime verification required',
      sections: [
        ['The problem', 'Students need to understand overlapping passages before submission. A similarity score on its own cannot establish plagiarism or prove AI authorship.'],
        ['The implementation', 'FastAPI ingestion supports TXT, PDF and DOCX. Deterministic comparisons use word shingles, Jaccard similarity and sentence matching, with Supabase-based private scan history. AI features remain optional and advisory.'],
        ['Evidence & maturity', 'The source includes architecture and upload-security documentation. This is a beta foundation requiring runtime verification. Semantic analysis, citation verification and code similarity should not be read as completed features. The paper artwork on this page is illustrative, not a real student document or scan result.']
      ], links: [['Review the source', 'https://github.com/teldigi5-wq/averis-ai'], ['Architecture', 'https://github.com/teldigi5-wq/averis-ai/blob/main/docs/ARCHITECTURE.md']]
    }
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
