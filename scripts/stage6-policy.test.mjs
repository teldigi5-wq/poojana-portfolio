import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';

const source = readFileSync('stage6.js', 'utf8');

function run({ reduced = false, fine = true, forced = false, lite = false, width = 1440 } = {}) {
  const visualEvents = new Map();
  const globalEvents = new Map();
  const styles = new Map();
  const classes = new Set();
  const mediaEvents = [];
  const style = {
    setProperty: (name, value) => styles.set(name, value),
    removeProperty: name => styles.delete(name)
  };
  const visual = {
    style,
    classList: { add: name => classes.add(name), remove: name => classes.delete(name) },
    getBoundingClientRect: () => ({ left: 0, top: 0, width: 800, height: 600 }),
    addEventListener: (name, callback) => visualEvents.set(name, callback),
    removeEventListener: name => visualEvents.delete(name)
  };
  const project = {
    style,
    getBoundingClientRect: () => ({ top: 0, height: 1200 })
  };
  const rootClasses = new Set(lite ? ['performance-lite'] : []);
  const root = { classList: { add: name => rootClasses.add(name), contains: name => rootClasses.has(name) } };
  const queries = {
    '(prefers-reduced-motion: reduce)': reduced,
    '(hover: hover) and (pointer: fine)': fine,
    '(forced-colors: active)': forced
  };
  runInNewContext(source, {
    document: {
      documentElement: root,
      querySelectorAll: selector => selector === '.case-visual' ? [visual] : selector === '.case' ? [project] : []
    },
    navigator: { connection: { saveData: lite }, deviceMemory: lite ? 2 : 8 },
    matchMedia: query => ({ matches: queries[query], addEventListener: (_, callback) => mediaEvents.push(callback) }),
    innerWidth: width,
    innerHeight: 900,
    requestAnimationFrame: callback => { callback(); return 1; },
    cancelAnimationFrame() {},
    addEventListener: (name, callback) => globalEvents.set(name, callback),
    removeEventListener: name => globalEvents.delete(name)
  });
  return { visualEvents, globalEvents, styles, classes, rootClasses };
}

for (const mode of [{ reduced: true }, { fine: false }, { forced: true }, { lite: true }, { width: 768 }]) {
  const result = run(mode);
  assert.equal(result.visualEvents.has('pointermove'), false, 'fallback modes must not attach pointer depth');
  assert.ok(result.rootClasses.has('stage6-ready'), 'static Stage 6 presentation remains available');
}

const desktop = run();
assert.ok(desktop.visualEvents.has('pointermove'), 'fine-pointer desktop enables subtle diagram depth');
desktop.visualEvents.get('pointermove')({ pointerType: 'mouse', clientX: 600, clientY: 180 });
assert.ok(desktop.styles.has('--rx') && desktop.styles.has('--ry'), 'depth values update through requestAnimationFrame');
desktop.visualEvents.get('pointerleave')();
assert.equal(desktop.styles.has('--rx'), false, 'depth resets when pointer leaves');
desktop.globalEvents.get('pagehide')();
assert.equal(desktop.visualEvents.has('pointermove'), false, 'page teardown removes pointer listeners');

console.log('Stage 6 interaction policy passed: desktop depth, fallbacks, reset and teardown.');

