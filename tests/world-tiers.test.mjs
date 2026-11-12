import test from 'node:test';
import assert from 'node:assert/strict';
import { TIERS, initialTier, createGovernor } from '../source/worlds/tiers.js';

test('software renderers get the still tier (no live 3D)', () => {
  assert.equal(initialTier({ gpu: 'ANGLE (Google, Vulkan 1.3.0 (SwiftShader Device (Subzero)))' }), 'still');
  assert.equal(initialTier({ gpu: 'llvmpipe (LLVM 15.0.7, 256 bits)' }), 'still');
});

test('phones start low, integrated GPUs medium, discrete GPUs high', () => {
  assert.equal(initialTier({ gpu: 'Adreno (TM) 642L', coarse: true, width: 390 }), 'low');
  assert.equal(initialTier({ gpu: 'ANGLE (Intel, Intel(R) UHD Graphics (0x0000A7A8) Direct3D11)' }), 'medium');
  assert.equal(initialTier({ gpu: 'ANGLE (NVIDIA, NVIDIA GeForce RTX 3060 Laptop GPU Direct3D11)' }), 'high');
  assert.equal(initialTier({ gpu: 'Apple M2' }), 'high');
  assert.equal(initialTier({ gpu: 'Unknown', memory: 2 }), 'low');
  assert.equal(initialTier({ gpu: 'Unknown', cores: 4 }), 'medium');
});

test('a valid ?tier= override always wins; an invalid one is ignored', () => {
  assert.equal(initialTier({ gpu: 'SwiftShader', override: 'high' }), 'high');
  assert.equal(initialTier({ gpu: 'NVIDIA GeForce', override: 'ultra' }), 'high');
});

test('the governor steps down one tier when frames are slow, and to still from low', () => {
  const g = createGovernor({ window: 10 });
  for (let i = 0; i < 9; i++) assert.equal(g.sample(30, 'high'), null);
  assert.equal(g.sample(30, 'high'), 'medium');
  for (let i = 0; i < 9; i++) g.sample(16, 'medium');
  assert.equal(g.sample(16, 'medium'), null, 'healthy frames keep the tier');
  for (let i = 0; i < 9; i++) g.sample(50, 'low');
  assert.equal(g.sample(50, 'low'), 'still');
  assert.deepEqual(TIERS, ['still', 'low', 'medium', 'high']);
});
