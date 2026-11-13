import test from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';

test('script and style references carry the current content hash (run: node scripts/stamp-assets.mjs)', () => {
  assert.doesNotThrow(() => execFileSync(process.execPath, ['scripts/stamp-assets.mjs', '--check'], { stdio: 'pipe' }));
});
