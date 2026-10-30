import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';

const source = readFileSync('editorial-hero.js', 'utf8');
function fixture({ fine = true, reduced = false, forced = false, masks = true, loaded = true } = {}) {
  const events = () => {
    const handlers = new Map();
    return {
      addEventListener: (name, fn) => handlers.set(name, fn),
      emit: (name, event = {}) => handlers.get(name)?.(event)
    };
  };
  const reveal = { ...events(), style: {}, complete: loaded, naturalWidth: loaded ? 1254 : 0 };
  const hero = { ...events(), querySelector: () => reveal, getBoundingClientRect: () => ({ left: 20, top: 40 }) };
  const document = { ...events(), hidden: false, querySelector: () => hero };
  const window = { ...events(), CSS: { supports: () => masks } };
  const queries = [fine, reduced, forced].map(matches => ({ ...events(), matches }));
  let queryIndex = 0, nextFrame = 0, scheduled = 0;
  const frames = new Map();
  runInNewContext(source, {
    document, window, matchMedia: () => queries[queryIndex++],
    requestAnimationFrame: fn => { scheduled++; frames.set(++nextFrame, fn); return nextFrame; },
    cancelAnimationFrame: id => frames.delete(id)
  });
  const move = (x, y) => hero.emit('mousemove', { clientX: x + 20, clientY: y + 40 });
  const step = () => {
    const current = [...frames.values()];
    frames.clear();
    current.forEach(fn => fn());
  };
  return { reveal, hero, document, window, queries, frames, move, step, scheduled: () => scheduled };
}

const desktop = fixture();
assert.equal(desktop.scheduled(), 0, 'loading the page cannot start an animation');
desktop.move(100, 120);
assert.equal(desktop.reveal.style.maskPosition, '45px 50px', 'first move snaps relative to the hero');
assert.equal(desktop.reveal.style.webkitMaskPosition, '45px 50px', 'WebKit receives the same mask position');
assert.equal(desktop.reveal.style.opacity, '1');
assert.equal(desktop.frames.size, 0, 'snapping does not leave an idle loop');
desktop.move(200, 220);
desktop.move(300, 320);
assert.equal(desktop.frames.size, 1, 'rapid events share one frame');
desktop.step();
assert.equal(desktop.reveal.style.maskPosition, '89px 94px', 'the frame lerps toward the latest target by 0.22');
let ticks = 0;
while (desktop.frames.size && ticks++ < 100) desktop.step();
assert.equal(desktop.frames.size, 0, 'the loop stops when the pointer settles');
assert.equal(desktop.reveal.style.maskPosition, '245px 250px');
desktop.move(400, 420);
desktop.hero.emit('mouseleave');
assert.equal(desktop.frames.size, 0, 'leaving cancels a pending frame');
assert.equal(desktop.reveal.style.opacity, '0');
desktop.move(40, 80);
assert.equal(desktop.reveal.style.maskPosition, '-15px 10px', 're-entry snaps instead of crossing the photo');

for (const options of [{ fine: false }, { reduced: true }, { forced: true }, { masks: false }, { loaded: false }]) {
  const item = fixture(options);
  item.move(100, 120);
  assert.notEqual(item.reveal.style.opacity, '1', 'static modes never expose an unmasked or animated layer');
  assert.equal(item.frames.size, 0);
}
for (const event of ['blur', 'resize', 'scroll', 'pagehide']) {
  const item = fixture();
  item.move(100, 120); item.move(300, 320);
  item.window.emit(event);
  assert.equal(item.reveal.style.opacity, '0', `${event} clears the reveal`);
  assert.equal(item.frames.size, 0);
}
const dynamic = fixture();
dynamic.move(100, 120); dynamic.move(300, 320);
dynamic.queries[1].matches = true;
dynamic.queries[1].emit('change');
dynamic.move(400, 420);
assert.equal(dynamic.frames.size, 0, 'changing to reduced motion stops further frames');
assert.equal(dynamic.reveal.style.opacity, '0');
dynamic.queries[1].matches = false;
dynamic.queries[1].emit('change');
dynamic.move(40, 80);
assert.equal(dynamic.reveal.style.opacity, '1', 'preference changes can re-enable the interaction');
dynamic.document.hidden = true;
dynamic.document.emit('visibilitychange');
dynamic.move(100, 100);
assert.equal(dynamic.reveal.style.opacity, '0', 'background tabs remain idle');
dynamic.document.hidden = false;
dynamic.move(40, 80);
dynamic.document.emit('keydown', { key: 'Tab' });
assert.equal(dynamic.reveal.style.opacity, '0', 'keyboard navigation removes the spotlight');
dynamic.move(40, 80);
dynamic.reveal.naturalWidth = 0;
dynamic.reveal.emit('error');
assert.equal(dynamic.reveal.style.opacity, '0', 'a failed image remains hidden');

console.log('Editorial hero passed: first move, local coordinates, coalescing, interpolation, idle shutdown, exit, re-entry, static modes, preference changes and page lifecycle.');
