import{se}from"./stage-cjqgk5vp.js";import{S,C,x,d,e,v,t,q,z,f,u,be,Ue,p,a,K,J,ze,L,N,h,R,k,m,te,B,n}from"./stage-z8d5n7fw.js";var Ie=789258,Ve=14462334,Xe=-0.235,Ze=6,Qe=3.6,Se=2.3,tt=1.124,je=2*Se+Math.PI*tt;function lt(){let M=document.createElement("canvas");M.width=M.height=128;let D=M.getContext("2d"),s=D.createRadialGradient(64,64,0,64,64,64);s.addColorStop(0,"rgba(255,255,255,1)"),s.addColorStop(0.25,"rgba(255,255,255,.5)"),s.addColorStop(0.6,"rgba(255,255,255,.1)"),s.addColorStop(1,"rgba(255,255,255,0)"),D.fillStyle=s,D.fillRect(0,0,128,128);let c=new J(M);return c.colorSpace=x,c}function ct(y,M){let c=document.createElement("canvas"),g=c.getContext("2d"),U="500 30px ui-monospace, SFMono-Regular, Consolas, monospace";g.font="500 30px ui-monospace, SFMono-Regular, Consolas, monospace";let I=Math.ceil(g.measureText(y).width)+36+22;if(c.width=I,c.height=64,g.font="500 30px ui-monospace, SFMono-Regular, Consolas, monospace",g.fillStyle="rgba(14,11,9,0.78)",g.strokeStyle=M==="ok"?"rgba(169,199,154,0.7)":"rgba(220,173,126,0.6)",g.lineWidth=2,g.beginPath(),g.roundRect)g.roundRect(1,1,I-2,62,6);else g.rect(1,1,I-2,62);g.fill(),g.stroke(),g.fillStyle=M==="ok"?"#a9c79a":"#dcad7e",g.beginPath(),g.arc(23,32,5,0,Math.PI*2),g.fill(),g.fillStyle="#f3eddf",g.textBaseline="middle",g.fillText(y,38,33);let l=new J(c);l.colorSpace=x,l.anisotropy=4;let Q=new be({map:l,transparent:!0,depthWrite:!1,depthTest:!1,opacity:0,fog:!1,sizeAttenuation:!1}),j=new Ue(Q);return j.userData.aspect=I/64,j.renderOrder=10,{sprite:j,texture:l,material:Q}}var et=`
  uniform float uTime, uIgnite, uFlash, uOffset, uDim;
  varying vec3 vArch;
  float archParam(vec3 p) {
    float h = -p.z;
    if (h < ${Se.toFixed(3)}) return p.x < 0.0 ? h : ${je.toFixed(4)} - h;
    float a = atan(h - ${Se.toFixed(3)}, p.x);
    return ${Se.toFixed(3)} + (3.14159265 - a) * ${tt.toFixed(4)};
  }
  float archEnergy(out float lit) {
    float s = archParam(vArch) / ${je.toFixed(4)};
    lit = smoothstep(0.0, 0.06, uIgnite * 1.12 - abs(s - 0.5) * 2.0);
    float f1 = fract(s - uTime * 0.11 + uOffset);
    float f2 = fract(s + uTime * 0.07 + uOffset * 1.7);
    return exp(-pow((f1 - 0.5) * 18.0, 2.0)) + 0.6 * exp(-pow((f2 - 0.5) * 24.0, 2.0));
  }`;function ut(y){let M={uTime:{value:0},uIgnite:{value:0},uFlash:{value:0},uOffset:{value:y*0.37},uDim:{value:Math.pow(0.6,y)},uColor:{value:new t(1,0.66,0.4)}},D=new h({fog:!0,uniforms:N.clone(n.fog),vertexShader:`varying vec3 vArch;
      #include <fog_pars_vertex>
      void main() { vArch = position; vec4 mvPosition = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * mvPosition;
      #include <fog_vertex>
      }`,fragmentShader:`uniform vec3 uColor; ${et}
      #include <fog_pars_fragment>
      void main() {
        float lit; float pulse = archEnergy(lit);
        vec3 c = uColor * 6.0 * (lit * uDim * (0.55 + 1.25 * pulse) + uFlash * 2.2 * lit);
        gl_FragColor = vec4(c, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
        #include <fog_fragment>
      }`}),s=new h({transparent:!0,depthWrite:!1,blending:C,fog:!0,uniforms:N.clone(n.fog),vertexShader:`varying vec3 vArch; varying vec3 vNormalV; varying vec3 vViewV;
      #include <fog_pars_vertex>
      void main() { vArch = position; vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        vNormalV = normalize(normalMatrix * normal); vViewV = -mvPosition.xyz; gl_Position = projectionMatrix * mvPosition;
      #include <fog_vertex>
      }`,fragmentShader:`uniform vec3 uColor; ${et}
      varying vec3 vNormalV; varying vec3 vViewV;
      #include <fog_pars_fragment>
      void main() {
        float lit; float pulse = archEnergy(lit);
        float facing = pow(abs(dot(normalize(vNormalV), normalize(vViewV))), 2.2);
        float e = lit * uDim * (0.35 + 0.9 * pulse) + uFlash * 1.6 * lit;
        gl_FragColor = vec4(uColor * e * 0.55, facing * clamp(e, 0.0, 1.0) * 0.5);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
        #include <fog_fragment>
      }`});return Object.assign(D.uniforms,M),Object.assign(s.uniforms,M),{seam:D,halo:s,uniforms:M}}function pt(y){y.onBeforeCompile=(M)=>{M.vertexShader=M.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vBrush;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vBrush = position;`),M.fragmentShader=M.fragmentShader.replace("#include <common>",`#include <common>
        varying vec3 vBrush;
        float brushHash(vec2 p) { return fract(sin(dot(p, vec2(41.3, 289.1))) * 43758.5453); }`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
        float streak = brushHash(vec2(floor(vBrush.x * 900.0 + vBrush.z * 40.0), floor(vBrush.y * 30.0)));
        roughnessFactor = clamp(roughnessFactor * (0.78 + 0.44 * streak), 0.08, 1.0);`)},y.customProgramCacheKey=()=>"gateway-copper"}function ft(){return new h({transparent:!0,depthWrite:!1,uniforms:{uTime:{value:0},uGlow:{value:new t(Ve)},uBase:{value:new t(Ie)},uIgnite:{value:0}},vertexShader:`
      varying vec3 vWorld;
      void main() { vec4 w = modelMatrix * vec4(position, 1.0); vWorld = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`,fragmentShader:`
      uniform float uTime, uIgnite; uniform vec3 uGlow, uBase;
      varying vec3 vWorld;
      float gridLine(vec2 p, float scale) {
        vec2 g = abs(fract(p * scale - 0.5) - 0.5) / fwidth(p * scale);
        return 1.0 - min(min(g.x, g.y), 1.0);
      }
      void main() {
        float d = length(vWorld.xz - vec2(0.0, -4.0));
        float fade = smoothstep(18.0, 2.0, d);
        float grid = (gridLine(vWorld.xz, 1.0) * 0.16 + gridLine(vWorld.xz, 4.0) * 0.04) * fade * uIgnite;
        float pool = exp(-pow(length(vWorld.xz - vec2(0.2, 0.8)) * 0.5, 2.0)) * uIgnite;
        // Mostly opaque: the mirrored gateways below show through faintly, like polished stone.
        vec3 col = mix(uBase, uGlow, grid + pool * 0.16);
        gl_FragColor = vec4(col, 0.84 - pool * 0.08);
      }`})}function mt(y){return new h({transparent:!0,depthWrite:!1,side:S,blending:C,uniforms:{uTime:{value:0},uSeed:{value:y},uStrength:{value:0},uColor:{value:new t(16762512)}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
      uniform float uTime, uSeed, uStrength; uniform vec3 uColor; varying vec2 vUv;
      float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float noise(vec2 p) { vec2 i = floor(p), f = fract(p); vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(mix(hash(i), hash(i + vec2(1, 0)), u.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), u.x), u.y); }
      void main() {
        float across = pow(clamp(1.0 - abs(vUv.x - 0.5) * 2.0, 0.0, 1.0), 2.4);
        float along = smoothstep(0.0, 0.3, vUv.y) * smoothstep(1.0, 0.5, vUv.y);
        float n = noise(vec2(vUv.x * 7.0 + uSeed, vUv.y * 2.5 - uTime * 0.1)) * 0.55 + 0.45;
        gl_FragColor = vec4(uColor, across * along * n * uStrength);
      }`})}function vt(y,M){return new h({transparent:!0,depthWrite:!1,blending:C,uniforms:{uMap:{value:y},uTime:{value:0},uSize:{value:26*M},uIgnite:{value:0},uShaftPoint:{value:new e(1,4.3,0.4)},uShaftDir:{value:new e(-0.315,0.949,0).normalize()}},vertexShader:`
      attribute float aSeed;
      uniform float uTime, uSize; uniform vec3 uShaftPoint, uShaftDir;
      varying float vLight;
      void main() {
        vec4 world = modelMatrix * vec4(position, 1.0);
        vec3 rel = world.xyz - uShaftPoint;
        float d = length(rel - dot(rel, uShaftDir) * uShaftDir);
        vLight = 0.08 + exp(-d * d / 0.55) * (0.65 + 0.35 * sin(uTime * 1.7 + aSeed * 6.2831));
        vec4 mv = viewMatrix * world;
        gl_PointSize = uSize * (0.6 + fract(aSeed * 13.7) * 0.8) / -mv.z;
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`
      uniform sampler2D uMap; uniform float uIgnite; varying float vLight;
      void main() {
        vec4 t = texture2D(uMap, gl_PointCoord);
        gl_FragColor = vec4(vec3(1.0, 0.86, 0.7) * vLight, t.a * vLight * uIgnite);
      }`})}async function St({renderer:y,getEnvironment:M,state:D}){let s=new z;s.background=new t(Ie),s.fog=new q(Ie,6,20),s.environmentIntensity=0.32;let c=new m(32,1,0.1,60),g=new e,U=lt(),I=[U],l=(o)=>(I.push(o),o),Q=new k,[j,Me,Ce]=await Promise.all([new se().loadAsync("assets/worlds/gateway.glb"),Q.loadAsync("assets/worlds/matcap-copper.webp"),Q.loadAsync("assets/worlds/matcap-darkmetal.webp")]);Me.colorSpace=Ce.colorSpace=x,l(Me),l(Ce);let Pe=j.scene,O={pbr:{},matcap:{}};Pe.traverse((o)=>{if(!o.isMesh)return;let r=o.material;if(r.side=0,r.name.startsWith("Copper"))r.metalness=1,r.roughness=0.34,r.envMapIntensity=0.75,r.color.setRGB(0.66,0.3,0.15),pt(r),O.pbr.copper=r,O.matcap.copper||=l(new R({matcap:Me,name:"CopperMatcap"})),o.userData.metal="copper";if(r.name.startsWith("DarkMetal"))r.envMapIntensity=0.6,O.pbr.dark=r,O.matcap.dark||=l(new R({matcap:Ce,name:"DarkMatcap"})),o.userData.metal="dark";if(r.name.startsWith("Glow"))o.userData.glow="seam";if(r.name.startsWith("Halo"))o.userData.glow="halo"});let ee=new v;ee.rotation.y=0.55,s.add(ee);let oe=[];for(let o=0;o<Ze;o++){let r=Pe.clone(!0);r.scale.setScalar(1.05*Math.pow(0.975,o)),r.position.set(Math.sin(o*0.7)*0.05,0,-o*Qe);let{seam:w,halo:_,uniforms:G}=ut(o);l(w),l(_),r.traverse((A)=>{if(A.userData.glow==="seam")A.material=w;if(A.userData.glow==="halo")A.material=_,A.renderOrder=2}),ee.add(r),oe.push({object:r,uniforms:G,flash:0})}let pe=ee.clone(!0);pe.scale.y=-1,pe.position.y=2*Xe,s.add(pe);let _e=l(ft()),fe=new a(l(new L(70,70)),_e);fe.rotation.x=-Math.PI/2,fe.position.y=Xe,fe.renderOrder=1,s.add(fe);let H=new te(16765606,0,24,0.42,0.65,1.6);H.position.set(3.2,8.5,3),H.target.position.set(0,0.6,0);let Y=new te(8955588,0,22,0.6,0.8,1.6);Y.position.set(-4,4,-6),Y.target.position.set(0,1.5,0);let me=new B(Ve,0,5,1.8);me.position.set(0,2.6,0.3),s.add(H,H.target,Y,Y.target,me);let ve=new v,Ae=[0,1.7,3.1,4.4].map((o)=>l(mt(o)));Ae.forEach((o,r)=>{let w=new a(l(new L(1.4+r*0.45,11.5)),o);w.rotation.y=r*0.5,ve.add(w)}),ve.position.set(1,4.3,0.4),ve.rotation.z=0.32,s.add(ve);let ae=900,E=new Float32Array(ae*3),de=new Float32Array(ae);for(let o=0;o<ae;o++)E[o*3]=d.randFloat(-2.6,3.4),E[o*3+1]=d.randFloat(-0.1,6),E[o*3+2]=d.randFloat(-4,3),de[o]=Math.random();let ie=l(new u);ie.setAttribute("position",new f(E,3)),ie.setAttribute("aSeed",new f(de,1));let ne=l(vt(U,y.getPixelRatio()));s.add(new K(ie,ne));let T=new v,Te=new a(l(new L(0.55,0.55)),l(new p({map:U,color:16774114,transparent:!0,blending:C,depthWrite:!1}))),Fe=new a(l(new L(2,2)),l(new p({map:U,color:Ve,transparent:!0,opacity:0.5,blending:C,depthWrite:!1}))),De=new B(16767152,0,4.5,1.6);T.add(Fe,Te,De),s.add(T);let re=56,F=new Float32Array(re*3),ge=new Float32Array(re*3),le=l(new u);le.setAttribute("position",new f(F,3)),le.setAttribute("color",new f(ge,3));let ke=l(new h({transparent:!0,depthWrite:!1,blending:C,vertexColors:!0,uniforms:{uMap:{value:U},uSize:{value:70*y.getPixelRatio()}},vertexShader:"uniform float uSize; varying vec3 vColor; void main() { vColor = color; vec4 mv = modelViewMatrix * vec4(position, 1.0); gl_PointSize = uSize / -mv.z; gl_Position = projectionMatrix * mv; }",fragmentShader:"uniform sampler2D uMap; varying vec3 vColor; void main() { gl_FragColor = vec4(vColor, texture2D(uMap, gl_PointCoord).a); }"}));s.add(new K(le,ke));let Be=oe.map((o,r)=>new e(o.object.position.x,1.75-r*0.02,o.object.position.z)),Oe=new ze([new e(0,1.9,-(Ze+0.6)*Qe),...Be.slice().reverse(),new e(-3.2,1.4,2.6),new e(-6.9,0.5,4.6)],!1,"centripetal",0.4),he=Be.map((o)=>{let r=0,w=1/0;for(let _=0;_<=400;_++){let G=Oe.getPointAt(_/400).distanceTo(o);if(G<w)w=G,r=_/400}return r}),we=5.2,ot=3.4,at=we+ot,Ee=[{text:"GET /work",gate:4,tone:"step"},{text:"TLS ✓",gate:3,tone:"step"},{text:"AUTHZ ✓ scope:read",gate:1,tone:"step"},{text:"200 OK",gate:0,tone:"ok"}].map((o)=>{let r=ct(o.text,o.tone);return l(r.texture),l(r.material),s.add(r.sprite),{...r,param:he[o.gate],opacity:0,slot:0}}),Le=ae,He=[];s.traverse((o)=>{if(o.isMesh&&o.userData.metal)He.push(o)});let it=[H,Y,me],Ne=(o)=>{let r=o.tier==="low"?O.matcap:O.pbr;He.forEach((w)=>{w.material=r[w.userData.metal]}),it.forEach((w)=>{w.visible=o.tier!=="low"}),De.visible=o.tier==="high",s.environment=o.tier==="low"?null:M(),Le=Math.floor(ae*o.settings.particles),ie.setDrawRange(0,Le),Ae.forEach((w,_)=>{w.visible=_<(o.tier==="low"?2:4)}),pe.visible=o.tier!=="low",ne.uniforms.uSize.value=26*y.getPixelRatio(),ke.uniforms.uSize.value=70*y.getPixelRatio()};Ne(D);let xe=!1,ye=0.034,Re=900,nt=(o,r)=>{if(c.aspect=o/r,xe=c.aspect<0.9,c.fov=xe?44:32,ye=d.clamp(28/r,0.02,0.05),Re=r,xe)c.setViewOffset(o,r,0,-r*0.3,o,r);else c.setViewOffset(o,r,-o*0.15,-r*0.02,o,r);c.updateProjectionMatrix(),ne.uniforms.uSize.value=26*y.getPixelRatio(),ke.uniforms.uSize.value=70*y.getPixelRatio()},W=-1,P=0,rt=()=>{if(W<0)W=P},V=(o)=>W<0?0:d.clamp((P-W-o)/1.4,0,1),ce=new e,$e=new e,qe=new e,We=new e,st=new e(0,1,0);return{scene:s,camera:c,update:(o,r)=>{P+=o;let w=r.progress,_=1-Math.pow(1-d.clamp(W<0?0:(P-W)/3.2,0,1),3);if(xe)ce.set(0,2.1,12.5);else ce.set(0.9,1.9,10.2);c.position.set(ce.x+Math.sin(P*0.11)*0.25+r.pointer.x*0.45+(1-_)*0.6,ce.y+Math.sin(P*0.17)*0.08-r.pointer.y*0.22+w*0.25+(1-_)*0.9,ce.z-w*6.5-(1-_)*3.2),g.set(0,1.75+w*0.3,-w*4),c.lookAt(g),H.intensity=46*V(0),Y.intensity=22*V(0.3),_e.uniforms.uIgnite.value=V(0.2),_e.uniforms.uTime.value=P,ne.uniforms.uTime.value=P,ne.uniforms.uIgnite.value=V(0.6),Ae.forEach((i)=>{i.uniforms.uTime.value=P,i.uniforms.uStrength.value=0.32*V(0.4)*(1-w*0.6)}),oe.forEach((i,b)=>{i.flash=Math.max(0,i.flash-o*2.2),i.uniforms.uTime.value=P,i.uniforms.uIgnite.value=V(0.15+b*0.22),i.uniforms.uFlash.value=i.flash,i.object.position.y=Math.sin(P*0.6+b)*0.006});for(let i=0;i<Le;i++){let b=i*3;if(E[b+1]+=o*(0.04+de[i]*0.06),E[b]+=Math.sin(P*0.3+de[i]*50)*o*0.04,E[b+1]>6)E[b+1]=-0.1}ie.attributes.position.needsUpdate=!0;let G=W<0?-1:P-W-1.4,A=0,X=0,ue=0;if(G>=0){if(ue=G%at,ue<we){X=d.smootherstep(ue/we,0,1),Oe.getPointAt(X,We),We.applyAxisAngle(st,ee.rotation.y),T.position.copy(We);let i=he[0]+0.05;A=Math.min(1,ue/0.5)*(1-d.smoothstep(X,i,i+0.09)),T.scale.setScalar(0.7+X*0.9),he.forEach((b,Z)=>{if(Math.abs(X-b)<0.012)oe[Z].flash=1})}}let Ye=-1;Ee.forEach((i,b)=>{if(G>=0&&ue<we&&X>i.param-0.01)Ye=b}),$e.setFromMatrixColumn(c.matrixWorld,0),qe.setFromMatrixColumn(c.matrixWorld,1);let Ke=2*c.position.distanceTo(T.position)*Math.tan(d.degToRad(c.fov)/2)/Re;Ee.forEach((i,b)=>{let Z=Ye-b,Je=(Z<0?0:[1,0.6,0.38,0.24][Math.min(Z,3)])*A;i.opacity+=(Je-i.opacity)*Math.min(1,o*(Je>i.opacity?9:6)),i.slot+=((Z<0?0:Z)-i.slot)*Math.min(1,o*8),i.material.opacity=i.opacity*(1-w),i.sprite.visible=i.material.opacity>0.01,i.sprite.scale.set(ye*i.sprite.userData.aspect,ye,1);let Ge=ye*Re;i.sprite.position.copy(T.position).addScaledVector(qe,(Ge*0.9+i.slot*Ge*1.25)*Ke).addScaledVector($e,(18+Ge*i.sprite.userData.aspect*0.5)*Ke)}),T.visible=A>0.01,Te.material.opacity=A,Fe.material.opacity=A*0.45,De.intensity=A*5.5,Te.lookAt(c.position),Fe.lookAt(c.position),me.intensity=(4.5+Math.sin(P*2.2)*0.8)*V(0.15)+oe[0].flash*6;for(let i=re-1;i>0;i--)F[i*3]=F[(i-1)*3],F[i*3+1]=F[(i-1)*3+1],F[i*3+2]=F[(i-1)*3+2];F[0]=T.position.x,F[1]=T.position.y,F[2]=T.position.z;for(let i=0;i<re;i++){let b=Math.pow(1-i/re,1.8)*A*0.85;ge[i*3]=b,ge[i*3+1]=0.74*b,ge[i*3+2]=0.48*b}le.attributes.position.needsUpdate=!0,le.attributes.color.needsUpdate=!0},resize:nt,setTier:Ne,dispose:()=>{I.forEach((o)=>o.dispose?.()),Pe.traverse((o)=>{if(o.isMesh)o.geometry.dispose(),o.material.dispose()})},ignite:rt,debug:{labels:Ee,gateParams:he},bloom:{strength:0.9,radius:0.6,threshold:0.84},finish:{vignette:0.42,grain:0.035}}}export{St as create};
