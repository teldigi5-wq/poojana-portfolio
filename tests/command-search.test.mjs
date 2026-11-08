import {test} from 'node:test';
import assert from 'node:assert/strict';
import {searchCommands} from '../source/portfolio-copper/lib/command-search.ts';

const commands = [
  {label:'Home', detail:'The person behind the systems', group:'Section'},
  {label:'Selected work', detail:'Three flagship projects', group:'Section'},
  {label:'BoundaryLab', detail:'Authorization security', group:'Project'},
  {label:'Aetheris', detail:'Backend platform architecture', group:'Project'},
  {label:'Wayfarer', detail:'Travel planning experience', group:'Project'},
  {label:'View CV', detail:'Open the résumé · PDF', group:'Resource'},
  {label:'Copy email', detail:'teldigi5@gmail.com', group:'Action'},
];
const labels = query => searchCommands(commands, query).map(item => item.label);

test('empty search preserves navigation order without mutating commands', () => {
  assert.deepEqual(labels('  '), commands.map(item => item.label));
  assert.notEqual(searchCommands(commands, ''), commands);
});
test('project names tolerate a missing letter and an adjacent transposition', () => {
  for (const [query, expected] of [['boundry','BoundaryLab'], ['aethris','Aetheris'], ['wayfrer','Wayfarer'], ['boudnary','BoundaryLab']]) {
    assert.equal(labels(query)[0], expected);
  }
});
test('exact and partial names outrank matching descriptions', () => {
  const items = [{label:'Elsewhere',detail:'Selected work archive',group:'Resource'}, ...commands];
  assert.equal(searchCommands(items,'work')[0].label, 'Selected work');
});
test('multiple terms must all match, including typo and semantic terms', () => {
  assert.deepEqual(labels('boundry security'), ['BoundaryLab']);
  assert.deepEqual(labels('boundry travel'), []);
});
test('short actions remain literal and accented text is searchable', () => {
  assert.deepEqual(labels('CV'), ['View CV']);
  assert.deepEqual(labels('veiw'), ['View CV']);
  assert.deepEqual(labels('resume'), ['View CV']);
  assert.deepEqual(labels('copy email'), ['Copy email']);
  assert.deepEqual(labels('cx'), []);
});
test('unrelated and oversized input produces an honest empty state', () => {
  assert.deepEqual(labels('xylophone'), []);
  assert.deepEqual(labels('a'.repeat(161)), []);
});
