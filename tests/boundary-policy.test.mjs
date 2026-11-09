import {test} from 'node:test';
import assert from 'node:assert/strict';
import {evaluatePolicy} from '../source/portfolio-copper/lib/boundary-policy.ts';

const request = Object.freeze({identity:'owner', resource:'private', action:'read', policy:'ownership'});
const decide = overrides => evaluatePolicy({...request, ...overrides});

test('all 32 example combinations match the explicit acceptance matrix', () => {
  const allowed = new Set([
    'owner/private/read/ownership', 'owner/private/write/ownership',
    'owner/shared/read/ownership', 'owner/shared/write/ownership',
    'owner/private/read/team-read', 'owner/private/write/team-read',
    'owner/shared/read/team-read', 'owner/shared/write/team-read',
    'teammate/shared/read/team-read',
  ]);
  for (const identity of ['owner','teammate','outsider','guest'])
    for (const resource of ['private','shared'])
      for (const action of ['read','write'])
        for (const policy of ['ownership','team-read']) {
          const key = [identity,resource,action,policy].join('/');
          const result = evaluatePolicy({identity,resource,action,policy});
          assert.equal(result.allowed, allowed.has(key), key);
          assert.equal(result.trace.length, 3, key);
        }
});
test('guests stop at sign-in without claiming the later checks passed', () => {
  const result = decide({identity:'guest'});
  assert.deepEqual(result.trace.map(step=>step.state), ['deny','skipped','skipped']);
  assert.match(result.reason, /Sign in/);
});
test('sharing never permits a signed-in outsider across the workspace boundary', () => {
  const result = decide({identity:'outsider', resource:'shared', policy:'team-read'});
  assert.deepEqual(result.trace.map(step=>step.state), ['pass','deny','skipped']);
  assert.match(result.trace[1].detail, /elsewhere.*studio/);
});
test('team reading requires a shared resource and never allows writing', () => {
  const shared = {identity:'teammate', resource:'shared', policy:'team-read'};
  assert.equal(decide(shared).allowed, true);
  assert.match(decide({...shared, resource:'private'}).reason, /private/);
  assert.match(decide({...shared, action:'write'}).reason, /read access only/);
  assert.match(decide({...shared, policy:'ownership'}).reason, /only Alice/);
});
test('unknown or malformed inputs deny by default without coercion or exceptions', () => {
  for (const input of [null, undefined, 42, '', [], {}, {identity:'owner'}]) {
    assert.equal(evaluatePolicy(input).allowed, false);
  }
  const hostileCoercion = {toString(){throw Error('Do not coerce request values');}};
  for (const key of Object.keys(request)) {
    for (const value of ['__proto__','constructor','toString','unknown',null,undefined,hostileCoercion]) {
      const result = evaluatePolicy({...request,[key]:value});
      assert.equal(result.allowed, false, key);
      assert.equal(result.trace[0].check, 'Request');
    }
  }
});
test('accepted decisions carry the requested path and a complete passing trace', () => {
  const result = decide({resource:'shared',action:'write'});
  assert.equal(result.actor,'alice');
  assert.equal(result.path,'studio/alice/shared');
  assert.deepEqual(result.trace.map(step=>step.state),['pass','pass','pass']);
  assert.match(result.reason,/write/);
});
test('evaluation leaves its input unchanged and does not share mutable traces', () => {
  const first = evaluatePolicy(request);
  first.trace[0].state='deny'; first.trace.pop();
  const second = evaluatePolicy(request);
  assert.equal(second.allowed,true);
  assert.equal(second.trace.length,3);
  assert.equal(second.trace[0].state,'pass');
  assert.deepEqual(request,{identity:'owner',resource:'private',action:'read',policy:'ownership'});
});
