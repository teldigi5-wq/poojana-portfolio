/*
 * Quality tiers for the world stage. Pure functions (no Three.js) so they can be
 * unit-tested in Node: see tests/world-tiers.test.mjs.
 */
export const TIERS = ['still', 'low', 'medium', 'high'];
export const TIER_SETTINGS = {
  high: { dpr: 1.75, bloom: true, bloomScale: 1, particles: 1 },
  medium: { dpr: 1, bloom: true, bloomScale: 0.4, particles: 0.55 },
  low: { dpr: 1, bloom: false, bloomScale: 0, particles: 0.3 }
};

/** Pick a starting tier from what the device tells us. Exported for tests. */
export function initialTier({ gpu = '', coarse = false, width = 1440, memory = 8, cores = 8, override = null } = {}) {
  if (override && TIERS.includes(override)) return override;
  if (/swiftshader|llvmpipe|software|basic render/i.test(gpu)) return 'still';
  if (coarse && width < 760) return 'low';
  if (memory && memory <= 2) return 'low';
  if (/apple (m\d|gpu)|nvidia|geforce|rtx|radeon rx|radeon pro/i.test(gpu)) return 'high';
  if (/intel|uhd|iris|mali|adreno|powervr|radeon(tm)? graphics|vega/i.test(gpu) || memory <= 4 || cores <= 4) return 'medium';
  return 'high';
}

/** Rolling frame-time monitor; returns a new tier or null. Exported for tests. */
export function createGovernor({ slowMs = 22, verySlowMs = 40, window = 90, warmup = 45 } = {}) {
  const samples = [];
  // Frames right after a (re)start or tier change include shader compiles and
  // render-target rebuilds; they say nothing about steady-state cost.
  let skip = warmup;
  return {
    sample(ms, tier) {
      if (skip > 0) { skip--; return null; }
      samples.push(ms);
      if (samples.length < window) return null;
      const avg = samples.reduce((a, b) => a + b, 0) / samples.length;
      samples.length = 0;
      const index = TIERS.indexOf(tier);
      if (tier === 'low' && avg > verySlowMs) return 'still';
      if (avg > slowMs && index > 1) return TIERS[index - 1];
      return null;
    },
    reset() { samples.length = 0; skip = warmup; }
  };
}
