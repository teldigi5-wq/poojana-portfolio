/*
 * BoundaryLab — 3D request trace (Three.js r187, WebGL).
 *
 * A request packet travels through three gates (Sign-in, Workspace, Permission)
 * towards a protected resource. The scene mirrors the existing policy demo:
 * it reads the decision trace the demo already renders, so the 3D view never
 * makes its own authorization decision.
 *
 * Build: see source/boundary-3d/README.md
 */
import {
  ACESFilmicToneMapping, AdditiveBlending, BufferAttribute, BufferGeometry, CanvasTexture,
  CircleGeometry, Color, CylinderGeometry, DirectionalLight, DoubleSide, Fog, Group,
  IcosahedronGeometry, InstancedMesh, MathUtils, Matrix4, Mesh, MeshBasicMaterial,
  MeshStandardMaterial, OctahedronGeometry, PerspectiveCamera, PMREMGenerator, PointLight,
  Points, PointsMaterial, Scene, ShaderMaterial, SphereGeometry, SRGBColorSpace,
  TorusGeometry, BoxGeometry, Vector3, WebGLRenderer, Quaternion, Euler
} from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

const PALETTE = {
  chamber: 0x120e0b,
  copper: 0xc08a5b,
  ivory: 0xf3eddf,
  amber: 0xdcad7e,
  pass: 0xa9c79a,
  deny: 0xe0644a,
  idle: 0x6d5a48
};

const GATES = [
  { key: 'Sign-in', label: 'SIGN-IN', x: -2.3 },
  { key: 'Workspace', label: 'WORKSPACE', x: -0.35 },
  { key: 'Permission', label: 'PERMISSION', x: 1.6 }
];
const START_X = -4.7;
const CORE_X = 3.65;
const SPEED = 2.4; // world units per second

const reducedMotion = () =>
  matchMedia('(prefers-reduced-motion: reduce)').matches ||
  document.documentElement.classList.contains('motion-off') ||
  new URLSearchParams(location.search).get('motion') === 'off';

/* ---------- small helpers ---------- */

function glowTexture() {
  const size = 128;
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext('2d');
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  g.addColorStop(0, 'rgba(255,255,255,1)');
  g.addColorStop(0.22, 'rgba(255,255,255,.55)');
  g.addColorStop(0.55, 'rgba(255,255,255,.12)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  const texture = new CanvasTexture(canvas);
  texture.colorSpace = SRGBColorSpace;
  return texture;
}

function readDecision(demo) {
  const items = [...demo.querySelectorAll('#decision-trace li')];
  const states = GATES.map(gate => {
    const li = items.find(item => item.textContent.includes(gate.key));
    return li?.dataset.state || 'skipped';
  });
  const allowed = !demo.querySelector('#access-result')?.classList.contains('is-denied');
  return { states, allowed, signature: `${states.join('|')}|${allowed}` };
}

/* ---------- scene ---------- */

function createScene(host, demo) {
  const reduce = reducedMotion();
  const renderer = new WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'default' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, innerWidth < 760 ? 1.5 : 1.75));
  renderer.toneMapping = ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  renderer.outputColorSpace = SRGBColorSpace;
  renderer.setClearColor(PALETTE.chamber, 1);
  renderer.domElement.className = 'b3d-canvas';
  renderer.domElement.setAttribute('aria-hidden', 'true');
  host.prepend(renderer.domElement);

  const scene = new Scene();
  scene.fog = new Fog(PALETTE.chamber, 9, 17);
  const pmrem = new PMREMGenerator(renderer);
  const envTarget = pmrem.fromScene(new RoomEnvironment(), 0.04);
  scene.environment = envTarget.texture;
  scene.environmentIntensity = 0.55;
  pmrem.dispose();

  const camera = new PerspectiveCamera(34, 1, 0.1, 40);
  const cameraBase = new Vector3(-3.4, 2.5, 7.6);
  const lookTarget = new Vector3(0.5, -0.05, 0);
  camera.position.copy(cameraBase);
  camera.lookAt(lookTarget);

  const world = new Group();
  scene.add(world);

  const key = new DirectionalLight(0xffe2c4, 1.6);
  key.position.set(-4, 6, 5);
  scene.add(key);
  const rim = new DirectionalLight(0x8fa6b8, 0.5);
  rim.position.set(5, 2, -6);
  scene.add(rim);

  const glow = glowTexture();
  const disposables = [envTarget, glow];
  const track = item => { disposables.push(item); return item; };

  /* floor: a field of copper dots */
  {
    const cols = 46, rows = 22, gap = 0.36;
    const positions = new Float32Array(cols * rows * 3);
    let i = 0;
    for (let c = 0; c < cols; c++) for (let r = 0; r < rows; r++) {
      positions[i++] = (c - cols / 2) * gap;
      positions[i++] = -1.32;
      positions[i++] = (r - rows / 2) * gap;
    }
    const geometry = track(new BufferGeometry());
    geometry.setAttribute('position', new BufferAttribute(positions, 3));
    const material = track(new PointsMaterial({ color: PALETTE.copper, size: 0.035, transparent: true, opacity: 0.55, depthWrite: false }));
    world.add(new Points(geometry, material));
  }

  /* the request corridor: a faint line the packet follows */
  {
    const geometry = track(new CylinderGeometry(0.008, 0.008, CORE_X - START_X, 8, 1, true));
    geometry.rotateZ(Math.PI / 2);
    const material = track(new MeshBasicMaterial({ color: PALETTE.amber, transparent: true, opacity: 0.22, depthWrite: false }));
    const line = new Mesh(geometry, material);
    line.position.x = (CORE_X + START_X) / 2;
    world.add(line);
  }

  /* floating dust */
  const dust = (() => {
    const count = 160;
    const positions = new Float32Array(count * 3);
    const seeds = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = MathUtils.randFloatSpread(12);
      positions[i * 3 + 1] = MathUtils.randFloat(-1.2, 2.6);
      positions[i * 3 + 2] = MathUtils.randFloatSpread(7);
      seeds[i] = Math.random() * Math.PI * 2;
    }
    const geometry = track(new BufferGeometry());
    geometry.setAttribute('position', new BufferAttribute(positions, 3));
    const material = track(new PointsMaterial({ map: glow, color: PALETTE.amber, size: 0.06, transparent: true, opacity: 0.5, blending: AdditiveBlending, depthWrite: false }));
    const points = new Points(geometry, material);
    world.add(points);
    return { points, positions, seeds, count };
  })();

  /* gates */
  const ringGeometry = track(new TorusGeometry(1.05, 0.065, 28, 120));
  const haloGeometry = track(new TorusGeometry(1.24, 0.011, 8, 160));
  const membraneGeometry = track(new CircleGeometry(1.0, 72));
  const tickGeometry = track(new BoxGeometry(0.035, 0.16, 0.035));
  const lampGeometry = track(new SphereGeometry(0.06, 20, 20));
  const baseGeometry = track(new BoxGeometry(0.5, 0.08, 0.5));

  const gates = GATES.map((spec, index) => {
    const group = new Group();
    group.position.set(spec.x, 0, 0);
    group.rotation.y = Math.PI / 2 + 0.3; // open the rings slightly toward the viewer

    const ringMaterial = track(new MeshStandardMaterial({ color: PALETTE.copper, metalness: 1, roughness: 0.26, emissive: new Color(PALETTE.copper), emissiveIntensity: 0.04 }));
    const ring = new Mesh(ringGeometry, ringMaterial);
    group.add(ring);

    const haloMaterial = track(new MeshBasicMaterial({ color: PALETTE.amber, transparent: true, opacity: 0.35, blending: AdditiveBlending, depthWrite: false }));
    const halo = new Mesh(haloGeometry, haloMaterial);
    group.add(halo);

    const membraneMaterial = track(new MeshBasicMaterial({ color: PALETTE.amber, transparent: true, opacity: 0.05, side: DoubleSide, blending: AdditiveBlending, depthWrite: false }));
    const membrane = new Mesh(membraneGeometry, membraneMaterial);
    group.add(membrane);

    const tickMaterial = track(new MeshStandardMaterial({ color: PALETTE.ivory, metalness: 0.6, roughness: 0.35 }));
    const ticks = new InstancedMesh(tickGeometry, tickMaterial, 24);
    const m = new Matrix4(), q = new Quaternion(), p = new Vector3(), s = new Vector3(1, 1, 1);
    for (let t = 0; t < 24; t++) {
      const a = (t / 24) * Math.PI * 2;
      const major = t % 6 === 0;
      p.set(Math.cos(a) * 1.13, Math.sin(a) * 1.13, 0);
      q.setFromEuler(new Euler(0, 0, a - Math.PI / 2));
      s.set(1, major ? 1.6 : 0.8, 1);
      ticks.setMatrixAt(t, m.compose(p, q, s));
    }
    group.add(ticks);

    const lampMaterial = track(new MeshBasicMaterial({ color: PALETTE.idle }));
    const lamp = new Mesh(lampGeometry, lampMaterial);
    lamp.position.set(0, 1.36, 0);
    group.add(lamp);

    const baseMaterial = track(new MeshStandardMaterial({ color: 0x2a211b, metalness: 0.8, roughness: 0.5 }));
    const base = new Mesh(baseGeometry, baseMaterial);
    base.position.y = -1.26;
    group.add(base);

    world.add(group);
    return {
      index, spec, group, ring, halo, membrane, lamp, ringMaterial, membraneMaterial, haloMaterial, lampMaterial,
      state: 'idle', flash: 0, spin: 0, target: new Color(PALETTE.amber), current: new Color(PALETTE.amber)
    };
  });

  /* protected resource */
  const core = (() => {
    const group = new Group();
    group.position.set(CORE_X, 0, 0);
    const shellMaterial = track(new MeshStandardMaterial({ color: PALETTE.ivory, metalness: 0.9, roughness: 0.18, flatShading: true, transparent: true, opacity: 0.92 }));
    const shell = new Mesh(track(new IcosahedronGeometry(0.58, 0)), shellMaterial);
    const heartMaterial = track(new MeshBasicMaterial({ color: PALETTE.amber }));
    const heart = new Mesh(track(new OctahedronGeometry(0.24, 0)), heartMaterial);
    const auraMaterial = track(new MeshBasicMaterial({ map: glow, color: PALETTE.amber, transparent: true, opacity: 0.35, blending: AdditiveBlending, depthWrite: false }));
    const aura = new Mesh(track(new CircleGeometry(1.6, 48)), auraMaterial);
    aura.rotation.x = -Math.PI / 2;
    aura.position.y = -1.3;

    const beamMaterial = track(new ShaderMaterial({
      transparent: true, depthWrite: false, blending: AdditiveBlending, side: DoubleSide,
      uniforms: { uColor: { value: new Color(PALETTE.pass) }, uStrength: { value: 0 } },
      vertexShader: 'varying float vY; void main(){ vY = uv.y; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
      fragmentShader: 'uniform vec3 uColor; uniform float uStrength; varying float vY; void main(){ float a = pow(1.0 - vY, 1.6) * uStrength * 0.55; gl_FragColor = vec4(uColor, a); }'
    }));
    const beam = new Mesh(track(new CylinderGeometry(0.42, 0.62, 4.4, 40, 1, true)), beamMaterial);
    beam.position.y = 1.0;

    const light = new PointLight(PALETTE.amber, 2.2, 6, 1.6);
    group.add(shell, heart, aura, beam, light);
    world.add(group);
    return { group, shell, heart, aura, beam, beamMaterial, auraMaterial, heartMaterial, light, pulse: 0, open: 0 };
  })();

  /* request packet + trail */
  const packet = (() => {
    const group = new Group();
    const bodyMaterial = track(new MeshBasicMaterial({ color: PALETTE.ivory }));
    const body = new Mesh(track(new SphereGeometry(0.13, 24, 24)), bodyMaterial);
    const haloMaterial = track(new PointsMaterial({ map: glow, color: PALETTE.amber, size: 1.7, transparent: true, blending: AdditiveBlending, depthWrite: false }));
    const haloGeometry = track(new BufferGeometry());
    haloGeometry.setAttribute('position', new BufferAttribute(new Float32Array(3), 3));
    const halo = new Points(haloGeometry, haloMaterial);
    const light = new PointLight(PALETTE.amber, 3.2, 3.2, 1.8);
    group.add(body, halo, light);
    world.add(group);

    const trailCount = 34;
    const trailPositions = new Float32Array(trailCount * 3);
    const trailColors = new Float32Array(trailCount * 3);
    const trailGeometry = track(new BufferGeometry());
    trailGeometry.setAttribute('position', new BufferAttribute(trailPositions, 3));
    trailGeometry.setAttribute('color', new BufferAttribute(trailColors, 3));
    const trailMaterial = track(new PointsMaterial({ map: glow, size: 0.34, vertexColors: true, transparent: true, blending: AdditiveBlending, depthWrite: false }));
    const trail = new Points(trailGeometry, trailMaterial);
    world.add(trail);
    return { group, body, halo, light, bodyMaterial, haloMaterial, trail, trailPositions, trailColors, trailGeometry, trailCount, scale: 1 };
  })();

  /* denial burst */
  const burst = (() => {
    const count = 90;
    const positions = new Float32Array(count * 3);
    const velocity = new Float32Array(count * 3);
    const geometry = track(new BufferGeometry());
    geometry.setAttribute('position', new BufferAttribute(positions, 3));
    const material = track(new PointsMaterial({ map: glow, color: PALETTE.deny, size: 0.16, transparent: true, opacity: 0, blending: AdditiveBlending, depthWrite: false }));
    const points = new Points(geometry, material);
    world.add(points);
    return { points, positions, velocity, count, geometry, material, life: 0 };
  })();

  function fireBurst(origin) {
    for (let i = 0; i < burst.count; i++) {
      burst.positions[i * 3] = origin.x;
      burst.positions[i * 3 + 1] = origin.y;
      burst.positions[i * 3 + 2] = origin.z;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(MathUtils.randFloat(-1, 1));
      const speed = MathUtils.randFloat(0.8, 2.6);
      burst.velocity[i * 3] = -Math.abs(Math.sin(phi) * Math.cos(theta)) * speed * 0.9; // spray back toward the sender
      burst.velocity[i * 3 + 1] = Math.cos(phi) * speed;
      burst.velocity[i * 3 + 2] = Math.sin(phi) * Math.sin(theta) * speed;
    }
    burst.geometry.attributes.position.needsUpdate = true;
    burst.life = 1;
  }

  /* HTML overlay labels, projected from 3D */
  const labels = document.createElement('div');
  labels.className = 'b3d-labels';
  labels.setAttribute('aria-hidden', 'true');
  const labelEls = [...GATES.map((g, i) => `0${i + 1} ${g.label}`), 'RESOURCE'].map(text => {
    const el = document.createElement('span');
    el.className = 'b3d-label';
    el.innerHTML = `<i></i>${text}`;
    labels.append(el);
    return el;
  });
  host.append(labels);
  const labelAnchors = [...GATES.map(g => new Vector3(g.x, 1.62, 0)), new Vector3(CORE_X, 1.05, 0)];

  /* ---------- run state ---------- */
  let decision = readDecision(demo);
  const run = { x: START_X, phase: 'travel', stopIndex: -1, hold: 0, passed: new Set() };

  function resetRun() {
    run.x = START_X;
    run.phase = 'travel';
    run.passed.clear();
    run.hold = 0;
    run.stopIndex = decision.states.findIndex(state => state === 'deny');
    packet.scale = 1;
    gates.forEach(gate => { gate.state = 'idle'; gate.target.set(PALETTE.amber); });
    core.open = 0;
    for (let i = 0; i < packet.trailCount; i++) {
      packet.trailPositions[i * 3] = START_X;
      packet.trailPositions[i * 3 + 1] = 0;
      packet.trailPositions[i * 3 + 2] = 0;
    }
    updateLabels();
  }

  function setGate(gate, state) {
    gate.state = state;
    if (state === 'pass') { gate.target.set(PALETTE.pass); gate.flash = 1; gate.spin = 1; }
    if (state === 'deny') { gate.target.set(PALETTE.deny); gate.flash = 1.4; }
    if (state === 'skipped') gate.target.set(PALETTE.idle);
    updateLabels();
  }

  function updateLabels() {
    gates.forEach((gate, i) => { labelEls[i].dataset.state = gate.state; });
    labelEls[3].dataset.state = core.open > 0.5 ? 'pass' : run.stopIndex >= 0 && run.phase !== 'travel' ? 'deny' : 'idle';
  }

  /* jump straight to the end state (reduced motion) */
  function settle() {
    resetRun();
    decision.states.forEach((state, i) => setGate(gates[i], state === 'skipped' ? 'skipped' : state));
    gates.forEach(gate => { gate.current.copy(gate.target); gate.flash = 0; gate.spin = 0; });
    if (run.stopIndex >= 0) {
      run.x = GATES[run.stopIndex].x - 0.32;
      run.phase = 'denied';
    } else {
      run.x = CORE_X - 0.85;
      run.phase = 'granted';
      core.open = 1;
    }
    for (let i = 0; i < packet.trailCount; i++) packet.trailPositions[i * 3] = run.x;
    updateLabels();
  }

  function onDecisionChange() {
    const next = readDecision(demo);
    if (next.signature === decision.signature) return;
    decision = next;
    host.dataset.decision = decision.allowed ? 'allow' : 'deny';
    if (reduce) settle(); else resetRun();
    requestRender();
  }

  /* ---------- interaction ---------- */
  const pointer = { x: 0, y: 0, tx: 0, ty: 0 };
  const yaw = { value: 0, target: 0, dragging: false, startX: 0, startYaw: 0, idle: 0 };

  const onPointerMove = event => {
    const rect = host.getBoundingClientRect();
    pointer.tx = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    pointer.ty = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    if (yaw.dragging) {
      yaw.target = MathUtils.clamp(yaw.startYaw + (event.clientX - yaw.startX) / rect.width * 1.6, -0.6, 0.6);
    }
    requestRender();
  };
  const onPointerDown = event => {
    if (event.button !== 0) return;
    yaw.dragging = true;
    yaw.startX = event.clientX;
    yaw.startYaw = yaw.target;
    host.setPointerCapture?.(event.pointerId);
    host.classList.add('is-dragging');
  };
  const onPointerUp = event => {
    yaw.dragging = false;
    yaw.idle = 0;
    host.releasePointerCapture?.(event.pointerId);
    host.classList.remove('is-dragging');
  };
  const onPointerLeave = () => { pointer.tx = 0; pointer.ty = 0; };
  host.addEventListener('pointermove', onPointerMove);
  host.addEventListener('pointerdown', onPointerDown);
  host.addEventListener('pointerup', onPointerUp);
  host.addEventListener('pointercancel', onPointerUp);
  host.addEventListener('pointerleave', onPointerLeave);

  /* ---------- sizing ---------- */
  const resize = () => {
    const { width, height } = host.getBoundingClientRect();
    if (!width || !height) return;
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    // Narrow viewports: pull back so the whole corridor stays in frame.
    const fit = MathUtils.clamp(1.55 / camera.aspect, 1, 1.9);
    cameraBase.set(-3.4 * fit, 2.5 * fit, 7.6 * fit);
    camera.updateProjectionMatrix();
    requestRender();
  };
  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(host);

  /* ---------- frame ---------- */
  const projected = new Vector3();
  let last = performance.now();
  let elapsed = 0;

  function step(dt) {
    elapsed += dt;

    // camera: pointer parallax + drag yaw
    pointer.x += (pointer.tx - pointer.x) * Math.min(1, dt * 3);
    pointer.y += (pointer.ty - pointer.y) * Math.min(1, dt * 3);
    if (!yaw.dragging) {
      yaw.idle += dt;
      if (yaw.idle > 2.5) yaw.target += (0 - yaw.target) * Math.min(1, dt * 0.8);
    }
    yaw.value += (yaw.target - yaw.value) * Math.min(1, dt * 6);
    world.rotation.y = yaw.value;
    camera.position.set(cameraBase.x + pointer.x * 0.55, cameraBase.y - pointer.y * 0.3, cameraBase.z);
    camera.lookAt(lookTarget);

    // packet run
    if (!reduce) {
      if (run.phase === 'travel') {
        const nextGateIndex = GATES.findIndex((gate, i) => !run.passed.has(i));
        const stopAt = run.stopIndex >= 0 ? GATES[run.stopIndex].x - 0.32 : CORE_X - 0.85;
        run.x = Math.min(run.x + SPEED * dt, stopAt);
        if (nextGateIndex >= 0 && nextGateIndex !== run.stopIndex && run.x >= GATES[nextGateIndex].x) {
          run.passed.add(nextGateIndex);
          setGate(gates[nextGateIndex], 'pass');
        }
        if (run.x >= stopAt) {
          if (run.stopIndex >= 0) {
            run.phase = 'denied';
            setGate(gates[run.stopIndex], 'deny');
            gates.forEach((gate, i) => { if (i > run.stopIndex) setGate(gate, 'skipped'); });
            fireBurst(new Vector3(run.x + 0.2, 0, 0));
          } else {
            run.phase = 'granted';
            core.pulse = 1;
          }
          run.hold = 0;
          updateLabels();
        }
      } else {
        run.hold += dt;
        if (run.phase === 'denied') {
          run.x -= dt * 0.35 * Math.max(0, 1 - run.hold);    // recoil
          packet.scale = Math.max(0, 1 - run.hold * 1.4);
        } else {
          run.x = Math.min(run.x + dt * 1.2, CORE_X);          // absorbed by the resource
          packet.scale = Math.max(0, 1 - run.hold * 1.8);
          core.open = Math.min(1, core.open + dt * 2);
          updateLabels();
        }
        if (run.hold > (run.phase === 'granted' ? 2.6 : 2.2)) resetRun();
      }
    }

    // packet transform + trail
    const bob = reduce ? 0 : Math.sin(elapsed * 6) * 0.025;
    packet.group.position.set(run.x, bob, 0);
    packet.group.scale.setScalar(Math.max(0.0001, packet.scale));
    packet.light.intensity = 3.2 * packet.scale;
    const packetColor = run.phase === 'denied' ? PALETTE.deny : run.phase === 'granted' ? PALETTE.pass : PALETTE.amber;
    packet.haloMaterial.color.lerp(new Color(packetColor), Math.min(1, dt * 6));
    packet.light.color.copy(packet.haloMaterial.color);

    if (!reduce) {
      for (let i = packet.trailCount - 1; i > 0; i--) {
        packet.trailPositions[i * 3] = packet.trailPositions[(i - 1) * 3];
        packet.trailPositions[i * 3 + 1] = packet.trailPositions[(i - 1) * 3 + 1];
        packet.trailPositions[i * 3 + 2] = packet.trailPositions[(i - 1) * 3 + 2];
      }
      packet.trailPositions[0] = run.x;
      packet.trailPositions[1] = bob;
      packet.trailPositions[2] = 0;
    }
    const tc = packet.haloMaterial.color;
    for (let i = 0; i < packet.trailCount; i++) {
      const f = Math.pow(1 - i / packet.trailCount, 1.6) * 0.7 * packet.scale;
      packet.trailColors[i * 3] = tc.r * f;
      packet.trailColors[i * 3 + 1] = tc.g * f;
      packet.trailColors[i * 3 + 2] = tc.b * f;
    }
    packet.trailGeometry.attributes.position.needsUpdate = true;
    packet.trailGeometry.attributes.color.needsUpdate = true;

    // gates
    gates.forEach(gate => {
      gate.current.lerp(gate.target, Math.min(1, dt * (reduce ? 60 : 5)));
      gate.flash = Math.max(0, gate.flash - dt * 1.6);
      gate.spin = Math.max(0, gate.spin - dt * 0.9);
      const settled = gate.state === 'idle' ? 0.05 : gate.state === 'skipped' ? 0.02 : gate.state === 'deny' ? 0.2 : 0.09;
      gate.membraneMaterial.color.copy(gate.current);
      gate.membraneMaterial.opacity = settled + gate.flash * 0.35;
      gate.haloMaterial.color.copy(gate.current);
      gate.haloMaterial.opacity = (gate.state === 'skipped' ? 0.12 : 0.35) + gate.flash * 0.4;
      gate.lampMaterial.color.copy(gate.state === 'idle' ? new Color(PALETTE.idle) : gate.current);
      gate.ringMaterial.emissive.copy(gate.current);
      gate.ringMaterial.emissiveIntensity = 0.04 + gate.flash * 0.5 + (gate.state === 'deny' ? 0.18 : 0);
      if (!reduce) {
        gate.halo.rotation.z += dt * (0.15 + gate.spin * 3.5) * (gate.index % 2 ? -1 : 1);
        gate.ring.rotation.z += dt * gate.spin * 2.2;
        if (gate.state === 'deny') gate.group.position.y = Math.sin(elapsed * 40) * 0.012 * gate.flash;
        else gate.group.position.y = 0;
      }
    });

    // core
    core.pulse = Math.max(0, core.pulse - dt * 1.2);
    if (!reduce) {
      core.shell.rotation.y += dt * 0.35;
      core.shell.rotation.x += dt * 0.12;
      core.heart.rotation.y -= dt * 0.9;
    }
    const coreScale = 1 + core.pulse * 0.18 + (reduce ? 0 : Math.sin(elapsed * 2) * 0.015);
    core.shell.scale.setScalar(coreScale);
    core.beamMaterial.uniforms.uStrength.value += ((core.open ? 1 : 0) - core.beamMaterial.uniforms.uStrength.value) * Math.min(1, dt * 3);
    core.heartMaterial.color.lerpColors(new Color(PALETTE.amber), new Color(PALETTE.pass), core.open);
    core.auraMaterial.color.copy(core.heartMaterial.color);
    core.auraMaterial.opacity = 0.3 + core.open * 0.25 + core.pulse * 0.3;
    core.light.color.copy(core.heartMaterial.color);
    core.light.intensity = 2 + core.open * 2.2 + core.pulse * 4;

    // burst
    if (burst.life > 0) {
      burst.life = Math.max(0, burst.life - dt * 0.9);
      for (let i = 0; i < burst.count; i++) {
        burst.velocity[i * 3 + 1] -= dt * 2.2;
        burst.positions[i * 3] += burst.velocity[i * 3] * dt;
        burst.positions[i * 3 + 1] += burst.velocity[i * 3 + 1] * dt;
        burst.positions[i * 3 + 2] += burst.velocity[i * 3 + 2] * dt;
      }
      burst.geometry.attributes.position.needsUpdate = true;
    }
    burst.material.opacity = burst.life;

    // dust
    if (!reduce) {
      for (let i = 0; i < dust.count; i++) {
        dust.positions[i * 3 + 1] += Math.sin(elapsed * 0.4 + dust.seeds[i]) * dt * 0.06;
        dust.positions[i * 3] += dt * 0.04;
        if (dust.positions[i * 3] > 6) dust.positions[i * 3] = -6;
      }
      dust.points.geometry.attributes.position.needsUpdate = true;
    }

    // labels
    const { width, height } = host.getBoundingClientRect();
    world.updateMatrixWorld();
    labelAnchors.forEach((anchor, i) => {
      projected.copy(anchor).applyMatrix4(world.matrixWorld).project(camera);
      const x = (projected.x * 0.5 + 0.5) * width;
      const y = (-projected.y * 0.5 + 0.5) * height;
      labelEls[i].style.transform = `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px) translate(-50%, -100%)`;
    });
  }

  /* ---------- loop control ---------- */
  let visible = false;
  let frameId = 0;
  let renderQueued = false;

  function frame(now) {
    frameId = 0;
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    step(dt);
    renderer.render(scene, camera);
    if (!reduce && visible && !document.hidden) frameId = requestAnimationFrame(frame);
  }
  function start() {
    if (frameId) return;
    last = performance.now();
    frameId = requestAnimationFrame(frame);
  }
  function requestRender() {
    if (!reduce) return;            // the animated loop already renders every frame
    if (renderQueued) return;
    renderQueued = true;
    requestAnimationFrame(now => {
      renderQueued = false;
      last = now - 16;
      // Run a few settling steps so colours and the beam reach their final values.
      for (let i = 0; i < 30; i++) step(1 / 30);
      renderer.render(scene, camera);
    });
  }

  const visibility = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    if (visible && !reduce) start();
  }, { rootMargin: '120px' });
  visibility.observe(host);
  const onVisibility = () => { if (!document.hidden && visible && !reduce) start(); };
  document.addEventListener('visibilitychange', onVisibility);

  const decisionObserver = new MutationObserver(onDecisionChange);
  decisionObserver.observe(demo, { subtree: true, childList: true, attributes: true, attributeFilter: ['class'] });

  host.dataset.decision = decision.allowed ? 'allow' : 'deny';
  if (reduce) settle(); else resetRun();
  resize();
  requestRender();

  function dispose() {
    cancelAnimationFrame(frameId);
    visibility.disconnect();
    decisionObserver.disconnect();
    resizeObserver.disconnect();
    document.removeEventListener('visibilitychange', onVisibility);
    host.removeEventListener('pointermove', onPointerMove);
    host.removeEventListener('pointerdown', onPointerDown);
    host.removeEventListener('pointerup', onPointerUp);
    host.removeEventListener('pointercancel', onPointerUp);
    host.removeEventListener('pointerleave', onPointerLeave);
    disposables.forEach(item => item.dispose?.());
    renderer.dispose();
    renderer.domElement.remove();
    labels.remove();
  }

  return { renderer, dispose };
}

/* ---------- mount ---------- */

function mount() {
  const demo = document.querySelector('[data-policy-demo]');
  const intro = document.querySelector('.boundary-intro');
  if (!demo || !intro || document.querySelector('.b3d-chamber')) return;

  const chamber = document.createElement('figure');
  chamber.className = 'b3d-chamber';
  chamber.innerHTML =
    '<figcaption class="b3d-caption"><span><b></b>REQUEST TRACE · 3D</span><span class="b3d-hint">DRAG TO TURN</span></figcaption>' +
    '<p class="visually-hidden">A three-dimensional illustration of the request above travelling through the sign-in, workspace and permission checks. It mirrors the decision trace in the explorer.</p>' +
    '<p class="b3d-fallback" hidden>3D view paused. The decision trace on the right is unaffected.</p>';
  intro.append(chamber);

  let instance;
  const boot = () => {
    try {
      instance = createScene(chamber, demo);
      chamber.dataset.ready = 'true';
    } catch (error) {
      chamber.remove();
      return;
    }
    const canvas = instance.renderer.domElement;
    canvas.addEventListener('webglcontextlost', event => {
      event.preventDefault();
      chamber.dataset.ready = 'lost';
      chamber.querySelector('.b3d-fallback').hidden = false;
    });
    canvas.addEventListener('webglcontextrestored', () => {
      instance.dispose();
      chamber.querySelector('.b3d-fallback').hidden = true;
      boot();
    });
  };

  // Wait for the explorer to be interactive so the first trace is the live one.
  if (demo.dataset.ready === 'true') boot();
  else {
    const wait = new MutationObserver(() => {
      if (demo.dataset.ready === 'true') { wait.disconnect(); boot(); }
    });
    wait.observe(demo, { attributes: true, attributeFilter: ['data-ready'] });
    setTimeout(() => { if (!chamber.dataset.ready) { wait.disconnect(); boot(); } }, 3000);
  }
}

mount();
