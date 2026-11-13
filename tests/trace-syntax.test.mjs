import test from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';

// trace.js is loaded as an ES module: a redeclared name there kills the whole hero at runtime.
for (const f of ['trace.js', 'assets/trace/glass-nav.js', 'assets/trace/belt.js']) {
  test(`${f} parses as an ES module`, () => {
    assert.doesNotThrow(() => execFileSync(process.execPath, ['--input-type=module', '--check'], { input: readFileSync(f), stdio: ['pipe', 'pipe', 'pipe'] }));
  });
}
