/*
 * Liquid-glass navigation (WebGL2).
 *
 * Draws only what real glass changes: the bent, dispersed light at the rim,
 * the specular edge, and a liquid lens that slides under the active link.
 * The middle of the pill stays transparent, so the page behind it still shows
 * through (CSS backdrop-filter supplies the frosting there).
 *
 * The refracted pixels come from the same fixed scene image the page uses as
 * its backdrop, mapped with the same "cover" maths, so the bend lines up with
 * what is really behind the bar.
 */
const VERT = `#version 300 es
in vec2 aPos; out vec2 vUv;
void main(){ vUv = aPos*0.5+0.5; gl_Position = vec4(aPos,0.,1.); }`;

const FRAG = `#version 300 es
precision highp float;
in vec2 vUv; out vec4 outColor;
uniform sampler2D uTex;
uniform vec2 uSize;     // canvas size, css px
uniform vec2 uOrigin;   // canvas top-left in viewport, css px
uniform vec2 uView;     // viewport size, css px
uniform float uImgA;    // image aspect
uniform vec3 uBlob;     // x centre (css px), width, squash
uniform vec2 uLight;    // light direction
uniform float uHasTex;
uniform float uMode;    // 1 = full lens over the backdrop, 0 = rim only (content may sit underneath)
uniform float uThick;   // glass thickness, css px

float sdCap(vec2 p, float hx, float r){ vec2 q = vec2(max(abs(p.x)-hx,0.), p.y); return length(q)-r; }
float sdMain(vec2 p){ float R=uSize.y*0.5; return sdCap(p, uSize.x*0.5-R, R); }
float sdBlob(vec2 p){ float r=uSize.y*0.5*0.84*uBlob.z; vec2 c=vec2(uBlob.x-uSize.x*0.5,0.); return sdCap(p-c, max(uBlob.y*0.5-r,0.), r); }

vec3 scene(vec2 viewPx){
  vec2 uv = viewPx/uView;
  float va = uView.x/uView.y;
  vec2 s = va>uImgA ? vec2(1., uImgA/va) : vec2(va/uImgA, 1.);
  uv = (uv-0.5)*s+0.5;
  return texture(uTex, vec2(clamp(uv.x,0.,1.), clamp(uv.y,0.,1.))).rgb;
}
// convex squircle: height 0 at the edge, rises to 1 inside
float prof(float x){ x=clamp(x,0.,1.); return pow(1.-pow(1.-x,4.), 0.25); }

// Snell refraction through the curved top face. Returns the lateral shift (css px, along outward normal)
// and the surface normal tilt (for lighting).
vec2 lens(float dIn, float B, float T, float eta){
  float x = clamp(dIn/B, 0., 1.);
  float e = 0.004;
  float slope = (prof(x+e)-prof(x))/e * (T/B);          // dz per css px going inward
  slope = min(slope, 4.5);
  vec3 N = normalize(vec3(slope, 0., 1.));              // x axis = outward
  vec3 R = refract(vec3(0.,0.,-1.), N, eta);
  float path = T*prof(x) + 3.0;
  float shift = (R.x/max(-R.z,0.05)) * path;            // outward shift of where the ray lands
  return vec2(shift, slope);
}

void main(){
  vec2 p = vUv*uSize - uSize*0.5; p.y = -p.y;           // origin at centre, y up
  vec2 e = vec2(1.0,0.);
  float dM = sdMain(p);
  vec2 nM = normalize(vec2(sdMain(p+e.xy)-sdMain(p-e.xy), sdMain(p+e.yx)-sdMain(p-e.yx))+1e-5);
  float dB = sdBlob(p);
  vec2 nB = normalize(vec2(sdBlob(p+e.xy)-sdBlob(p-e.xy), sdBlob(p+e.yx)-sdBlob(p-e.yx))+1e-5);

  float H = uSize.y;
  float inM = clamp(-dM, 0., 1e3), inB = clamp(-dB, 0., 1e3);
  float BM = H*0.46, BB = H*0.40;
  float TM = uThick, TB = uThick*1.55;

  // per-channel index of refraction -> chromatic dispersion
  vec3 etas = vec3(1.0/1.46, 1.0/1.50, 1.0/1.55);
  vec2 sl = lens(inM, BM, TM, etas.g);
  vec2 sb = lens(inB, BB, TB, etas.g);
  float inMask = step(dM, 0.), inBMask = step(dB, 0.) * smoothstep(0.,2.,-dB);

  vec2 pc = vec2(0.);
  vec2 mag = p*(-0.045);                                  // faint magnification toward the centre
  vec3 col;
  vec2 base = vec2(uOrigin.x + vUv.x*uSize.x, uOrigin.y + (1.-vUv.y)*uSize.y);
  vec3 k = vec3(0.94, 1.0, 1.08);
  vec3 acc = vec3(0.);
  for(int i=0;i<3;i++){
    vec2 off = nM*sl.x*k[i]*inMask + nB*sb.x*k[i]*inBMask*1.35 + mag*inMask;
    off.y = -off.y;                                       // y up -> screen y down
    vec2 q = base + off;
    vec3 c = uHasTex>0.5 ? scene(q) : vec3(0.92,0.94,1.0);
    acc[i] = c[i];
  }
  col = acc;

  // glass body: slight milk, darker just inside the rim on bright scenes (like the reference)
  float lum = dot(col, vec3(.299,.587,.114));
  float innerEdge = smoothstep(0.,5.,inM) ;
  col = mix(col, vec3(1.), 0.07);
  col *= 1.0 - (1.-innerEdge)*0.10*(0.4+lum);

  // lighting: thin specular rim lit from the light direction and the opposite side
  vec2 L = normalize(uLight);
  float nl = dot(nM, L);
  float rim = smoothstep(-2.4,-0.3,dM) * (1.-smoothstep(-0.3,0.9,dM));
  float spec = rim * (0.20 + 0.80*pow(clamp(abs(nl),0.,1.), 2.4));
  float wide = (1.-smoothstep(0.,H*0.34,inM)) * inMask * (0.05 + 0.20*pow(clamp(nl,0.,1.),2.0));
  float nlb = dot(nB, L);
  float rimB = smoothstep(-2.0,-0.3,dB) * (1.-smoothstep(-0.3,0.8,dB));
  float specB = rimB * (0.28 + 0.72*pow(clamp(abs(nlb),0.,1.), 2.0));
  float poolB = (1.-smoothstep(0.,H*0.30,inB)) * inBMask * (0.04 + 0.16*clamp(-nlb,0.,1.));
  float lit = clamp(spec + specB + wide + poolB, 0., 1.);

  float aa = 1. - smoothstep(-0.5, 0.6, dM);
  // rim-only mode keeps just the bent edge so page content underneath remains visible
  float ringMask = clamp(pow(1.-clamp(inM/(H*0.30),0.,1.), 2.2) + (1.-clamp(inB/(H*0.26),0.,1.))*inBMask, 0., 1.);
  float body = mix(ringMask*0.96, 1.0, uMode);
  vec3 rgb = mix(col, vec3(1.), lit);
  float a = clamp(body + lit, 0., 1.) * aa;
  outColor = vec4(rgb*a, a);
}`;

export function mountGlassNav(host, { imgSrc, activeSelector = '[aria-current="true"]', blob = true, thickness = 16, mode = 1 } = {}) {
  const canvas = host.querySelector('canvas.glass-gl');
  if (!canvas) return null;
  const gl = canvas.getContext('webgl2', { premultipliedAlpha: true, alpha: true, antialias: false });
  if (!gl) { host.classList.add('no-gl'); return null; }

  const sh = (type, src) => { const s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(s)); return s; };
  const prog = gl.createProgram();
  try { gl.attachShader(prog, sh(gl.VERTEX_SHADER, VERT)); gl.attachShader(prog, sh(gl.FRAGMENT_SHADER, FRAG)); gl.linkProgram(prog); }
  catch (err) { host.classList.add('no-gl'); return null; }
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) { host.classList.add('no-gl'); return null; }
  gl.useProgram(prog);
  const buf = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW);
  const loc = gl.getAttribLocation(prog, 'aPos'); gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
  const U = n => gl.getUniformLocation(prog, n);
  const u = { tex: U('uTex'), size: U('uSize'), origin: U('uOrigin'), view: U('uView'), imgA: U('uImgA'), blob: U('uBlob'), light: U('uLight'), hasTex: U('uHasTex'), mode: U('uMode'), thick: U('uThick') };

  const tex = gl.createTexture(); gl.bindTexture(gl.TEXTURE_2D, tex);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([235, 240, 255, 255]));
  let hasTex = 0, imgA = 16 / 9;
  const img = new Image(); img.decoding = 'async';
  img.onload = () => { gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    hasTex = 1; imgA = img.naturalWidth / img.naturalHeight; kick(); };
  img.src = imgSrc;

  const links = [...host.querySelectorAll('nav a')];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let W = 0, H = 0, dpr = 1;
  // spring state for the liquid lens (x centre, width)
  const st = { x: 0, w: 80, vx: 0, vw: 0, tx: 0, tw: 80 };
  let light = [-0.55, 0.85], tlight = [-0.55, 0.85];
  let raf = 0, last = 0, modeV = mode, idle = 0;

  const resize = () => {
    const r = host.getBoundingClientRect(); dpr = Math.min(devicePixelRatio || 1, 2);
    W = r.width; H = r.height; canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
    canvas.style.width = W + 'px'; canvas.style.height = H + 'px'; gl.viewport(0, 0, canvas.width, canvas.height);
    retarget(true);
  };
  const retarget = (snap) => {
    const hr = host.getBoundingClientRect();
    const el = hovered || links.find(a => a.matches(activeSelector)) || links[0];
    if (!blob || !el) { st.tx = st.x = 0; st.tw = st.w = 0; kick(); return; }
    const r = el.getBoundingClientRect();
    const tw = r.width + 12; const cx = r.left - hr.left + r.width / 2;
    st.tw = tw; st.tx = Math.min(Math.max(cx, tw / 2 + 6), hr.width - tw / 2 - 6);
    if (snap || reduce) { st.x = st.tx; st.w = st.tw; st.vx = st.vw = 0; }
    kick();
  };
  let hovered = null;
  links.forEach(a => {
    a.addEventListener('pointerenter', () => { hovered = a; retarget(); });
    a.addEventListener('focus', () => { hovered = a; retarget(); });
  });
  host.addEventListener('pointerleave', () => { hovered = null; tlight = [-0.55, 0.85]; retarget(); });
  host.addEventListener('pointermove', e => {
    const r = host.getBoundingClientRect();
    const nx = ((e.clientX - r.left) / r.width) * 2 - 1;
    tlight = [-0.55 + nx * 0.9, 0.85]; kick();
  });
  new ResizeObserver(resize).observe(host);
  addEventListener('resize', resize);
  const mo = new MutationObserver(() => retarget()); links.forEach(a => mo.observe(a, { attributes: true, attributeFilter: ['aria-current'] }));

  function draw() {
    const hr = host.getBoundingClientRect();
    gl.clearColor(0, 0, 0, 0); gl.clear(gl.COLOR_BUFFER_BIT);
    gl.uniform1i(u.tex, 0); gl.uniform2f(u.size, W, H); gl.uniform2f(u.origin, hr.left, hr.top);
    gl.uniform2f(u.view, innerWidth, innerHeight); gl.uniform1f(u.imgA, imgA);
    const squash = blob ? 1 - Math.min(Math.abs(st.vx) / 9000, 0.18) + Math.min(Math.abs(st.vw) / 6000, 0.06) : 0;
    const stretch = st.w + Math.min(Math.abs(st.vx) * 0.018, 26);
    gl.uniform3f(u.blob, st.x, stretch, squash);
    const ang = idle; const lx = light[0] + Math.cos(ang) * 0.55, ly = light[1] + Math.sin(ang) * 0.35;
    gl.uniform2f(u.light, lx, ly); gl.uniform1f(u.hasTex, hasTex); gl.uniform1f(u.mode, modeV); gl.uniform1f(u.thick, thickness);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  }
  function tick(t) {
    const dt = Math.min((t - last) / 1000 || 0.016, 0.033); last = t;
    // critically-damped-ish spring: snappy with a little overshoot, so it feels like liquid
    const k = 420, c = 26;
    st.vx += ((st.tx - st.x) * k - st.vx * c) * dt; st.x += st.vx * dt;
    st.vw += ((st.tw - st.w) * k - st.vw * c) * dt; st.w += st.vw * dt;
    light[0] += (tlight[0] - light[0]) * Math.min(dt * 8, 1); light[1] += (tlight[1] - light[1]) * Math.min(dt * 8, 1);
    draw();
    const moving = Math.abs(st.tx - st.x) > 0.2 || Math.abs(st.vx) > 4 || Math.abs(st.tw - st.w) > 0.2 || Math.abs(tlight[0] - light[0]) > 0.003;
    if (!reduce) idle += dt * 0.7;
    raf = (moving || (!reduce && modeV > 0.02)) ? requestAnimationFrame(tick) : 0;
  }
  function kick() { if (!raf) { last = performance.now(); raf = requestAnimationFrame(tick); } }
  document.addEventListener('visibilitychange', () => { if (document.hidden && raf) { cancelAnimationFrame(raf); raf = 0; } else kick(); });
  resize();
  host.classList.add('has-gl');
  return { redraw: kick, setMode(v) { modeV = Math.max(0, Math.min(1, v)); kick(); } };
}
