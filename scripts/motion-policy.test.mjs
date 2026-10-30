import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';
import assert from 'node:assert/strict';

const source = readFileSync('main.js', 'utf8');
function run({ reduced = false, touch = false, lite = false, forced = false, missing = false } = {}) {
  const animations = [];
  const events = new Map();
  const visual = { querySelectorAll: () => [], querySelector: () => null };
  const chapter = { getBoundingClientRect: () => ({ top: 0, bottom: 1000 }), querySelector: () => visual };
  const attributes = new Map();
  const link = { setAttribute: (key, value) => attributes.set(key, value), removeAttribute: key => attributes.delete(key) };
  const gsap = {
    registerPlugin() {},
    matchMedia: () => ({ add: (_, setup) => { gsap.dispose = setup({ conditions: { motion: !reduced, fine: !touch, desktop: true, colors: forced } }); } }),
    timeline: options => {
      const timeline = { from: (...args) => { animations.push(args); return timeline; }, fromTo: () => timeline, eventCallback() {}, progress: () => { gsap.finished = true; } };
      animations.push(options);
      return timeline;
    },
    utils: { toArray: () => [] },
    set() {}
  };
  const document = {
    documentElement: { classList: { toggle() {} } },
    querySelectorAll: selector => selector === '.case' ? [chapter] : selector === '.chapter-nav a' ? [link] : [],
    addEventListener: (name, callback) => events.set(name, callback),
    removeEventListener: name => events.delete(name)
  };
  runInNewContext(source, {
    document, navigator: { connection: { saveData: lite } }, innerHeight: 900, scrollY: 0,
    window: missing ? {} : { gsap, ScrollTrigger: {} }, gsap, ScrollTrigger: {},
    addEventListener() {}, requestAnimationFrame: callback => callback()
  });
  return { animations, attributes, events, gsap };
}
for (const mode of [{ reduced: true }, { lite: true }, { forced: true }, { missing: true }]) {
  const result = run(mode);
  assert.equal(result.animations.length, 0, 'fallback must not schedule motion');
  assert.equal(result.attributes.get('aria-current'), 'location', 'chapter navigation must survive fallback');
}
const touch = run({ touch: true });
assert.ok(touch.animations.some(item => item?.scrollTrigger?.once === true), 'touch uses finite entrance');
assert.ok(!touch.animations.some(item => item?.scrollTrigger?.scrub), 'touch must not scrub');
const desktop = run();
assert.ok(desktop.animations.some(item => item?.scrollTrigger?.scrub), 'desktop enables story');
desktop.events.get('keydown')({ key: 'Tab' });
assert.equal(desktop.gsap.finished, true, 'keyboard focus finishes hero entrance');
desktop.gsap.dispose();
assert.equal(desktop.events.has('keydown'), false, 'media teardown removes keyboard listener');
console.log('Motion policy passed: reduced motion, touch, save-data, forced colors, missing libraries, keyboard and teardown.');
