/* Lab section: three small 3D instruments that mirror the DOM demos (which stay as the accessible source of truth).
   - bucket: glass token bucket driven by the real limiter
   - scan:   a million-row table scan vs an index lookup
   - gate:   a request passing (or failing) the sign-in / workspace / permission checks */
import {
  SphereGeometry, CylinderGeometry, TorusGeometry, BoxGeometry, Mesh, Group, InstancedMesh, Object3D, Vector3, Color,
  BufferGeometry, Float32BufferAttribute, LineSegments, LineBasicMaterial, AdditiveBlending, DynamicDrawUsage
} from 'three';
import { createView, glassMat, glowSprite, labels, damp, clamp, reduce } from './common.js';

const TEAL = '#35e0b4', BLUE = '#7aa2ff', AMBER = '#ffc27a', RED = '#ff7b86';

/* ---------------- token bucket ---------------- */
export function mountBucket(root, { cap = 6, tokens, frac }) {
  const canvas = root.querySelector('canvas'); if (!canvas) return null;
  const view = createView(canvas, { fov: 34, z: 7.4 }); if (!view) return null;
  const { scene, camera } = view; camera.position.set(0, 0.6, 7.4); camera.lookAt(0, 0.1, 0);
  const g = new Group(); scene.add(g);
  const vessel = new Mesh(new CylinderGeometry(1.25, 1.0, 2.7, 56, 1, true), glassMat('#7aa2ff', 0.9)); g.add(vessel);
  const base = new Mesh(new TorusGeometry(1.0, 0.035, 10, 64), glassMat('#bcd2ff', 1)); base.rotation.x = Math.PI / 2; base.position.y = -1.35; g.add(base);
  const rim = new Mesh(new TorusGeometry(1.25, 0.04, 10, 64), glassMat('#bcd2ff', 1)); rim.rotation.x = Math.PI / 2; rim.position.y = 1.35; g.add(rim);
  const floorGlow = glowSprite('#7aa2ff', 3.4, 0.35); floorGlow.position.set(0, -1.45, 0); g.add(floorGlow);
  const slots = [];
  for (let i = 0; i < cap; i++) {
    const layer = i < 3 ? 0 : 1, a = (layer ? 30 : 90) * Math.PI / 180 + (i % 3) * 2 * Math.PI / 3, r = layer ? 0.46 : 0.56;
    const m = new Mesh(new SphereGeometry(0.34, 28, 20), glassMat(TEAL, 1)); const halo = glowSprite(TEAL, 1.15, 0.6); m.add(halo); g.add(m);
    slots.push({ m, halo, x: Math.cos(a) * r, z: Math.sin(a) * r, rest: layer ? -0.45 : -1.0, y: 3, vy: 0, alive: false, dying: 0, s: 0, glow: 0 });
  }
  const ghost = new Mesh(new SphereGeometry(0.34, 28, 20), glassMat(TEAL, 0.8)); ghost.position.set(0, 1.9, 0); g.add(ghost);
  const burst = glowSprite('#ffffff', 1, 0); g.add(burst);
  let flashT = 0, prev = -1, bursts = 0;
  view.setUpdate((dt, T) => {
    const n = Math.floor(tokens()), f = clamp(frac());
    slots.forEach((s, i) => {
      const want = i < n;
      if (want && !s.alive) { s.alive = true; s.dying = 0; s.y = prev < 0 ? s.rest : 2.2; s.vy = 0; s.s = prev < 0 ? 1 : 0.9; s.glow = prev < 0 ? 0 : 1; }
      if (!want && s.alive) { s.alive = false; s.dying = 1; bursts = 1; burst.position.set(s.x, s.y, s.z); }
      if (s.alive) { s.vy -= 16 * dt; s.y += s.vy * dt; if (s.y < s.rest) { s.y = s.rest; s.vy = Math.abs(s.vy) > 1 ? -s.vy * 0.32 : 0; } s.s = damp(s.s, 1, dt, 10); }
      else if (s.dying > 0) { s.dying = Math.max(0, s.dying - dt * 2.6); s.y += dt * 2.2; s.s = s.dying; }
      else s.s = 0;
      s.glow = damp(s.glow, 0.16 + 0.08 * Math.sin(T * 2 + i), dt, 3);
      s.m.position.set(s.x, s.y, s.z); s.m.scale.setScalar(Math.max(s.s, 0.0001)); s.m.visible = s.s > 0.01; s.m.material.uniforms.uGlow.value = s.glow; s.halo.material.opacity = 0.6 * s.s;
    });
    prev = n;
    ghost.visible = n < cap; ghost.scale.setScalar(0.25 + 0.75 * f); ghost.position.y = 1.9 + Math.sin(T * 2) * 0.06; ghost.material.uniforms.uOpacity.value = 0.25 + 0.6 * f;
    if (bursts > 0) { bursts = Math.max(0, bursts - dt * 3); burst.material.opacity = bursts; burst.scale.setScalar(1 + (1 - bursts) * 2.2); } else burst.material.opacity = 0;
    flashT = Math.max(0, flashT - dt * 2.2);
    const red = flashT; vessel.material.uniforms.uColor.value.set(BLUE).lerp(new Color(RED), red); rim.material.uniforms.uColor.value.set('#bcd2ff').lerp(new Color(RED), red);
    vessel.material.uniforms.uGlow.value = red * 0.7; g.rotation.y = Math.sin(T * 0.35) * 0.35; g.rotation.x = Math.sin(T * 0.27) * 0.06;
    return true;
  });
  return { flash() { flashT = 1; view.invalidate(); }, poke() { view.invalidate(); } };
}

/* ---------------- table scan vs index ---------------- */
export function mountScan(root) {
  const canvas = root.querySelector('canvas'); if (!canvas) return null;
  const view = createView(canvas, { fov: 34, z: 9 }); if (!view) return null;
  const { scene, camera } = view; const g = new Group(); scene.add(g);
  const COLS = 20, ROWS = 12, N = COLS * ROWS, GAP = 0.34, TARGET = 7 * COLS + 13;
  const cubes = new InstancedMesh(new BoxGeometry(0.27, 0.27, 0.27), glassMat('#ffffff', 1, 0.5), N); cubes.instanceMatrix.setUsage(DynamicDrawUsage); g.add(cubes);
  const dummy = new Object3D(), base = new Color('#4d68d8'), hot = new Color('#5ef0ff'), amber = new Color(AMBER), green = new Color('#46f2b0'), tmp = new Color();
  const pos = Array.from({ length: N }, (_, i) => new Vector3((i % COLS - (COLS - 1) / 2) * GAP, 0, (Math.floor(i / COLS) - (ROWS - 1) / 2) * GAP));
  // b-tree above the table: 1 root, 3 inner, 9 leaves; path to the target leaf
  const tree = new Group(); g.add(tree); const T3 = [[0, 2.7, -1.2]]; for (let i = 0; i < 3; i++) T3.push([(i - 1) * 2.2, 2.0, -1.2]); for (let i = 0; i < 9; i++) T3.push([(i - 4) * 0.82, 1.3, -1.2]);
  const tn = T3.map((p, i) => { const m = new Mesh(new SphereGeometry(i === 0 ? 0.2 : i < 4 ? 0.16 : 0.12, 18, 14), glassMat(BLUE, 1)); m.position.set(...p); tree.add(m); return m; });
  const link = [[0, 1], [0, 2], [0, 3], [1, 4], [1, 5], [1, 6], [2, 7], [2, 8], [2, 9], [3, 10], [3, 11], [3, 12]];
  const path = [0, 3, 11]; // root -> right inner -> leaf above the target column
  const lg = new BufferGeometry(); const lp = []; link.forEach(([a, b]) => lp.push(...T3[a], ...T3[b])); lg.setAttribute('position', new Float32BufferAttribute(lp, 3));
  const lines = new LineSegments(lg, new LineBasicMaterial({ color: 0x7aa2ff, transparent: true, opacity: 0.5, blending: AdditiveBlending, depthWrite: false })); tree.add(lines);
  const beam = glowSprite('#46f2b0', 0.5, 1); tree.add(beam); const tgt = glowSprite(AMBER, 1.1, 0.9); g.add(tgt);
  tgt.position.set(pos[TARGET].x, 0.05, pos[TARGET].z);
  const head = glowSprite('#5ef0ff', 1.6, 0.8); g.add(head);
  let mix = 0, tmix = 0, scanT = 0, treeT = 0;
  const legs = path.map(i => new Vector3(...T3[i])); legs.push(new Vector3(pos[TARGET].x, 0.1, pos[TARGET].z));
  view.setUpdate((dt, T) => {
    mix = damp(mix, tmix, dt, 4); scanT += dt; treeT += dt;
    const sweep = 3.2, period = sweep + 0.9; const ph = scanT % period, headIdx = ph < sweep ? (ph / sweep) * N : N + 5;
    for (let i = 0; i < N; i++) {
      const age = headIdx - i; let c, lift = 0;
      if (age >= 0 && age < 60) { const a = 1 - age / 60; tmp.copy(base).lerp(hot, a * a); lift = a * 0.06; } else if (age >= 60 && ph < sweep + 0.6) { tmp.copy(base).lerp(hot, 0.04); } else tmp.copy(base);
      tmp.multiplyScalar(1 - mix * 0.62);
      if (i === TARGET) { tmp.copy(mix > 0.5 ? green : amber).multiplyScalar(0.9 + 0.5 * Math.sin(T * 5) * mix + (age >= 0 && age < 30 ? 0.6 : 0)); lift += 0.12 + mix * 0.1; }
      cubes.setColorAt(i, tmp); dummy.position.copy(pos[i]); dummy.position.y = lift; dummy.updateMatrix(); cubes.setMatrixAt(i, dummy.matrix);
    }
    cubes.instanceColor.needsUpdate = true; cubes.instanceMatrix.needsUpdate = true;
    const hp = clamp(headIdx / N); head.position.set(0, 0.1, (Math.floor(Math.min(headIdx, N - 1) / COLS) - (ROWS - 1) / 2) * GAP); head.material.opacity = (1 - mix) * (headIdx < N ? 0.7 : 0);
    head.scale.set(COLS * GAP + 0.6, 0.5, 1);
    tree.visible = mix > 0.02; tn.forEach(m => m.material.uniforms.uOpacity.value = mix); lines.material.opacity = 0.5 * mix;
    // path highlight beam travels root -> leaf -> row
    const seg = (treeT % 3.4) / 1.6; const si = Math.min(Math.floor(seg), legs.length - 2), su = clamp(seg - si);
    if (seg < legs.length - 1) { beam.position.lerpVectors(legs[si], legs[si + 1], su); beam.material.opacity = mix; } else beam.material.opacity = mix * clamp(1 - (seg - (legs.length - 1)) * 2);
    path.forEach(i => { tn[i].material.uniforms.uColor.value.set(BLUE).lerp(green, mix); tn[i].material.uniforms.uGlow.value = 0.4 * mix; });
    tgt.material.opacity = 0.35 + 0.4 * Math.sin(T * 3) * 0.5 + 0.4 * mix; tgt.scale.setScalar(0.9 + mix * 0.4);
    camera.position.set(Math.sin(T * 0.2) * 1.2, 4.9 + mix * 0.3, 6.2); camera.lookAt(0, 0.75 * mix + 0.05, 0.1);
    g.rotation.y = Math.sin(T * 0.18) * 0.12; return true;
  });
  return { setIndexed(on) { tmix = on ? 1 : 0; treeT = 0; view.invalidate(); } };
}

/* ---------------- access checkpoints ---------------- */
export function mountGate(root) {
  const canvas = root.querySelector('canvas'); if (!canvas) return null;
  const view = createView(canvas, { fov: 34, z: 9.8 }); if (!view) return null;
  const { scene, camera } = view; camera.position.set(0.3, 1.5, 9.8); camera.lookAt(0, 0, 0);
  const lab = labels(root, 4), g = new Group(); scene.add(g);
  const XS = [-1.9, 0, 1.9], NAMES = ['sign-in', 'tenant', 'access'];
  const rings = XS.map(x => { const m = new Mesh(new TorusGeometry(0.95, 0.07, 14, 64), glassMat(BLUE, 1)); m.rotation.y = Math.PI / 2; m.position.x = x; g.add(m); const halo = glowSprite(BLUE, 3, 0.25); halo.position.x = x; g.add(halo); return { m, halo, state: 0, pulse: 0 }; });
  const res = new Mesh(new BoxGeometry(0.9, 0.9, 0.9), glassMat('#8aa2d8', 1)); res.position.x = 3.6; g.add(res); const resGlow = glowSprite(TEAL, 2.4, 0); resGlow.position.x = 3.6; g.add(resGlow);
  const src = new Mesh(new SphereGeometry(0.22, 18, 14), glassMat(AMBER, 1)); src.position.x = -3.6; g.add(src);
  const orb = glowSprite('#ffd9a0', 0.7, 1); g.add(orb); const orbCore = new Mesh(new SphereGeometry(0.17, 18, 14), glassMat('#ffd9a0', 1)); g.add(orbCore);
  const sparks = Array.from({ length: 16 }, () => { const s = glowSprite(RED, 0.3, 0); g.add(s); return { s, v: new Vector3() }; });
  const rail = new Mesh(new CylinderGeometry(0.01, 0.01, 7.6, 6), glassMat(BLUE, 0.6)); rail.rotation.z = Math.PI / 2; rail.position.x = 0; g.add(rail);
  let pass = [true, true, true], clock = 0, ox = -3.6, state = 'run', failAt = -1, shake = 0;
  const colors = { ok: new Color('#46f2b0'), bad: new Color(RED), idle: new Color(BLUE), dim: new Color('#3a4670') };
  function restart() {
    clock = 0; ox = -3.6; state = 'run'; failAt = pass.findIndex(p => !p); rings.forEach(r => { r.state = 0; r.pulse = 0; }); sparks.forEach(s => s.s.material.opacity = 0);
    resGlow.material.opacity = 0; res.material.uniforms.uColor.value.set('#8aa2d8'); view.invalidate();
  }
  view.setUpdate((dt, T) => {
    clock += dt;
    if (state === 'run') {
      const stopX = failAt >= 0 ? XS[failAt] - 0.45 : 3.1; const sp = 2.6; ox = Math.min(ox + sp * dt, stopX);
      rings.forEach((r, i) => { if (r.state === 0 && ox > XS[i] - 0.5 && (failAt < 0 || i <= failAt)) { r.state = pass[i] ? 1 : -1; r.pulse = 1; if (!pass[i]) { state = 'fail'; shake = 1; sparks.forEach(s => { s.v.set((Math.random() - 0.2) * 3, (Math.random() - 0.5) * 3, (Math.random() - 0.5) * 3); s.s.position.set(ox, 0, 0); s.s.material.opacity = 1; }); clock = 0; } } });
      if (state === 'run' && failAt < 0 && ox >= 3.1) { state = 'ok'; clock = 0; resGlow.material.opacity = 1; res.material.uniforms.uColor.value.set('#46f2b0'); shake = 0.6; }
    }
    if (clock > 2.6 && state !== 'run') restart();
    rings.forEach((r, i) => {
      r.pulse = Math.max(0, r.pulse - dt * 1.8); const c = r.state === 1 ? colors.ok : r.state === -1 ? colors.bad : (failAt >= 0 && i > failAt && state !== 'run') ? colors.dim : colors.idle;
      r.m.material.uniforms.uColor.value.lerp(c, clamp(dt * 8)); r.m.material.uniforms.uGlow.value = 0.12 + r.pulse * 0.9; r.halo.material.color.copy(r.m.material.uniforms.uColor.value); r.halo.material.opacity = 0.18 + r.pulse * 0.5; r.m.scale.setScalar(1 + r.pulse * 0.18);
    });
    orb.position.set(ox, Math.sin(T * 6) * 0.03, 0); orbCore.position.copy(orb.position); orb.visible = orbCore.visible = !(state === 'fail' && clock > 0.05);
    orb.material.color.set(state === 'ok' ? '#9bffd6' : '#ffd9a0'); orbCore.material.uniforms.uColor.value.set(state === 'ok' ? '#46f2b0' : '#ffd9a0');
    sparks.forEach(s => { if (s.s.material.opacity > 0) { s.s.position.addScaledVector(s.v, dt); s.v.multiplyScalar(1 - dt * 1.5); s.s.material.opacity = Math.max(0, s.s.material.opacity - dt * 1.3); } });
    res.rotation.y = T * 0.5; res.rotation.x = 0.3; res.material.uniforms.uGlow.value = state === 'ok' ? 0.5 + Math.sin(T * 6) * 0.2 : 0.1; shake = Math.max(0, shake - dt * 2);
    g.position.x = Math.sin(T * 40) * shake * 0.03; g.rotation.y = Math.sin(T * 0.3) * 0.18 - 0.1;
    XS.forEach((x, i) => lab.place(view, i, new Vector3(x, -1.25, 0), NAMES[i], 0, 1)); lab.place(view, 3, new Vector3(3.6, -1.1, 0), 'resource', 0, 1);
    return true;
  });
  return { set(p) { pass = [!!p.signed, !!p.sameWs, !!p.perm]; restart(); } };
}
