/* Project labs — small, honest, in-browser models of two project ideas.
   1. Aetheris claim race: 8 workers compete for 24 queued events, with or without row locking.
   2. Wayfarer rules: a readable rule set turns place, days and pace into a first-draft plan. */
(() => {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches ||
    new URLSearchParams(location.search).get('motion') === 'off';
  const pad = n => String(n).padStart(2, '0');

  /* ---------- 1. Claim race ---------- */
  const claim = document.querySelector('[data-claim-lab]');
  if (claim) {
    const EVENTS = 24, WORKERS = 8, TICK = 130;
    const run = claim.querySelector('[data-claim-run]');
    const lock = claim.querySelector('[data-claim-lock]');
    const queueEl = claim.querySelector('[data-claim-queue]');
    const workersEl = claim.querySelector('[data-claim-workers]');
    const deliveredEl = claim.querySelector('[data-claim-delivered]');
    const dupesEl = claim.querySelector('[data-claim-dupes]');
    const resultEl = claim.querySelector('[data-claim-result]');

    const tiles = Array.from({ length: EVENTS }, (_, i) => {
      const tile = document.createElement('span');
      tile.className = 'claim-event';
      tile.innerHTML = `<b>E${pad(i + 1)}</b><i></i>`;
      queueEl.append(tile);
      return tile;
    });
    const chips = Array.from({ length: WORKERS }, (_, i) => {
      const chip = document.createElement('span');
      chip.className = 'claim-worker';
      chip.style.setProperty('--w', i);
      chip.innerHTML = `<b>W${i + 1}</b><i>idle</i>`;
      workersEl.append(chip);
      return chip;
    });

    let timer = 0, events, workers, locking;
    const rand = (min, max) => min + Math.floor(Math.random() * (max - min + 1));

    const reset = () => {
      locking = lock.checked;
      events = Array.from({ length: EVENTS }, () => ({ state: 'queued', claims: [], deliveries: 0 }));
      workers = Array.from({ length: WORKERS }, () => ({ event: -1, left: 0 }));
      claim.dataset.mode = locking ? 'locked' : 'naive';
    };

    const step = () => {
      // 1. busy workers make progress; finished work is delivered.
      workers.forEach(worker => {
        if (worker.event < 0) return;
        if (--worker.left > 0) return;
        const event = events[worker.event];
        event.deliveries++;
        event.state = 'done';
        worker.event = -1;
      });
      // 2. idle workers claim.
      const idle = workers.map((w, i) => i).filter(i => workers[i].event < 0).sort(() => Math.random() - .5);
      if (locking) {
        // SELECT … FOR UPDATE SKIP LOCKED: a claimed row is invisible to the next worker.
        idle.forEach(i => {
          const next = events.findIndex(e => e.state === 'queued');
          if (next < 0) return;
          events[next].state = 'claimed';
          events[next].claims.push(i);
          Object.assign(workers[i], { event: next, left: rand(3, 6) });
        });
      } else {
        // Read, then update: workers reading in the same moment can pick the same row.
        const snapshot = events.map((e, idx) => idx).filter(idx => events[idx].state === 'queued');
        idle.forEach(i => {
          if (!snapshot.length) return;
          const pick = snapshot[Math.min(snapshot.length - 1, rand(0, 2))];
          events[pick].claims.push(i);
          Object.assign(workers[i], { event: pick, left: rand(3, 6) });
        });
        idle.forEach(i => { if (workers[i].event >= 0 && events[workers[i].event].state === 'queued') events[workers[i].event].state = 'claimed'; });
      }
      return events.every(e => e.state === 'done') && workers.every(w => w.event < 0);
    };

    const render = finished => {
      let delivered = 0, dupes = 0;
      events.forEach((event, i) => {
        const tile = tiles[i];
        tile.dataset.state = event.state;
        const extra = Math.max(0, event.claims.length - 1);
        dupes += extra;
        if (event.deliveries) delivered++;
        tile.classList.toggle('is-duplicate', extra > 0);
        tile.dataset.claims = String(event.claims.length);
        tile.querySelector('i').textContent = event.claims.length ? event.claims.map(w => `W${w + 1}`).join(' ') : '';
        tile.style.setProperty('--w', event.claims.length ? event.claims[event.claims.length - 1] : -1);
      });
      workers.forEach((worker, i) => {
        chips[i].classList.toggle('is-busy', worker.event >= 0);
        chips[i].querySelector('i').textContent = worker.event >= 0 ? `→ E${pad(worker.event + 1)}` : 'idle';
      });
      deliveredEl.textContent = `${delivered} / ${EVENTS}`;
      dupesEl.textContent = String(dupes);
      claim.classList.toggle('has-duplicates', dupes > 0);
      if (finished) {
        resultEl.textContent = dupes
          ? `${dupes} duplicate claim${dupes > 1 ? 's' : ''}. A real system would send ${dupes > 1 ? 'those messages' : 'that message'} twice.`
          : 'Every event claimed once.';
      } else resultEl.textContent = 'Running…';
    };

    const start = () => {
      clearInterval(timer);
      reset();
      run.disabled = true;
      lock.disabled = true;
      claim.classList.add('is-running');
      const done = () => {
        clearInterval(timer);
        render(true);
        run.disabled = false;
        lock.disabled = false;
        run.firstChild.textContent = 'Run again ';
        claim.classList.remove('is-running');
      };
      if (reduce) {
        let guard = 0;
        while (!step() && guard++ < 500);
        done();
        return;
      }
      render(false);
      timer = setInterval(() => { const finished = step(); render(false); if (finished) done(); }, TICK);
    };

    reset();
    render(false);
    resultEl.textContent = 'Ready';
    run.addEventListener('click', start);
    lock.addEventListener('change', () => {
      reset(); render(false);
      resultEl.textContent = lock.checked ? 'Ready · locking on' : 'Ready · locking off';
    });
    run.disabled = false;
    lock.disabled = false;
  }

  /* ---------- 2. Rule-based planner ---------- */
  const plan = document.querySelector('[data-plan-lab]');
  if (plan) {
    // kind: hike | sight | water | evening
    const PLACES = {
      kandy: { region: 'hill', stops: [
        ['Temple of the Sacred Tooth Relic', 'sight'], ['Royal Botanical Gardens, Peradeniya', 'sight'],
        ['Udawattakele forest walk', 'hike'], ['Kandy Lake loop', 'water'], ['Bahirawakanda viewpoint', 'hike'],
        ['Embekke Devalaya carvings', 'sight'], ['Kandyan dance performance', 'evening']
      ] },
      ella: { region: 'hill', stops: [
        ['Little Adam’s Peak', 'hike'], ['Nine Arch Bridge', 'sight'], ['Ella Rock', 'hike'],
        ['Ravana Falls', 'water'], ['Tea factory visit', 'sight'], ['Dowa Rock Temple', 'sight'], ['Ella town at dusk', 'evening']
      ] },
      galle: { region: 'coast', stops: [
        ['Galle Fort ramparts', 'sight'], ['Unawatuna beach', 'water'], ['Japanese Peace Pagoda', 'hike'],
        ['Galle lighthouse', 'sight'], ['Jungle Beach', 'water'], ['Dutch Reformed Church', 'sight'], ['Sunset on the fort walls', 'evening']
      ] }
    };
    const PER_DAY = { relaxed: 2, balanced: 3, packed: 4 };
    const placeEl = plan.querySelector('[data-plan-place]');
    const daysEl = plan.querySelector('[data-plan-days]');
    const paceEl = plan.querySelector('[data-plan-pace]');
    const daysOut = plan.querySelector('[data-plan-days-out]');
    const rulesOut = plan.querySelector('[data-plan-rules]');

    const build = () => {
      const place = PLACES[placeEl.value];
      const days = Number(daysEl.value);
      const pace = paceEl.value;
      const rules = new Set();
      const capacity = Array.from({ length: days }, (_, d) => {
        let n = PER_DAY[pace];
        if (d === 0) { n -= 1; rules.add('Arrival day is lighter: one stop fewer.'); }
        if (d === days - 1 && days > 1 && pace !== 'packed') { n -= 1; rules.add('Last day ends early for onward travel.'); }
        return Math.max(1, n);
      });
      rules.add(`${pace[0].toUpperCase() + pace.slice(1)} pace: up to ${PER_DAY[pace]} stops a day.`);

      const pool = place.stops.map(([name, kind]) => ({ name, kind }));
      const draft = capacity.map(() => []);
      // Evenings are saved for evening slots; everything else is assigned in order.
      const evenings = pool.filter(s => s.kind === 'evening');
      const daytime = pool.filter(s => s.kind !== 'evening');
      for (let d = 0; d < days; d++) {
        while (draft[d].length < capacity[d] && daytime.length) {
          const hikeToday = draft[d].some(s => s.kind === 'hike');
          const idx = daytime.findIndex(s => !(hikeToday && s.kind === 'hike'));
          if (idx < 0) break;
          if (idx > 0) rules.add('At most one hike a day.'); // only skipped because of a second hike
          draft[d].push(daytime.splice(idx, 1)[0]);
        }
      }
      if (evenings.length) {
        const d = days > 1 ? 1 : 0;
        if (draft[d].length >= capacity[d] && draft[d].length) draft[d].pop();
        draft[d].push(evenings[0]);
        rules.add('Evening experiences close the day.');
      }
      draft.forEach(day => day.sort((a, b) => {
        const rank = s => (s.kind === 'hike' ? 0 : s.kind === 'evening' ? 2 : 1);
        return rank(a) - rank(b);
      }));
      if (draft.some(day => day[0]?.kind === 'hike')) rules.add(place.region === 'hill' ? 'Hikes go first, before hill-country cloud rolls in.' : 'Climbs go first, before the midday heat.');
      if (pace === 'relaxed') rules.add('Relaxed pace keeps every afternoon open.');

      daysOut.replaceChildren(...draft.map((stops, d) => {
        const li = document.createElement('li');
        const label = d === 0 ? 'Arrive' : d === days - 1 ? 'Depart' : 'Explore';
        const items = stops.map(s => `<span data-kind="${s.kind}">${s.name}</span>`);
        if (pace === 'relaxed') {
          const evening = stops.findIndex(s => s.kind === 'evening');
          items.splice(evening < 0 ? items.length : evening, 0, '<span data-kind="free">Open afternoon</span>');
        }
        li.innerHTML = `<strong>Day ${d + 1}<small>${label}</small></strong>${items.join('')}`;
        return li;
      }));
      rulesOut.replaceChildren(...[...rules].map(rule => {
        const li = document.createElement('li');
        li.textContent = rule;
        return li;
      }));
    };

    [placeEl, daysEl, paceEl].forEach(el => { el.disabled = false; el.addEventListener('change', build); });
    build();
  }
})();
