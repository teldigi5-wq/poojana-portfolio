import{ae}from"./stage-c2a58xfd.js";import{S,I,G,y,h,n,R,e,a,i,v,t,Y,B,C,m,f,me,we,u,r,D,J,Q,Ge,Pe,P,p,d,ee,z,We,_,ie}from"./stage-szk1j1pj.js";var Lt=789258,V=3.4,Gt=9,Ht=3.5,Dt=V*Gt,re=-(Dt+2.4),Vt=4,ze=-(V/2+Vt*V),jt=new e(0.8,7.9,re+0.1),qt=new e(0,15.5,re+0.6),mt=12;function Yt(){let L=document.createElement("canvas");L.width=L.height=128;let j=L.getContext("2d"),x=j.createRadialGradient(64,64,0,64,64,64);x.addColorStop(0,"rgba(255,255,255,1)"),x.addColorStop(0.22,"rgba(255,255,255,.55)"),x.addColorStop(0.55,"rgba(255,255,255,.12)"),x.addColorStop(1,"rgba(255,255,255,0)"),j.fillStyle=x,j.fillRect(0,0,128,128);let w=new Q(L);return w.colorSpace=y,w}function Zt(A,L){let w=document.createElement("canvas"),b=w.getContext("2d"),F="500 28px ui-monospace, SFMono-Regular, Consolas, monospace";b.font="500 28px ui-monospace, SFMono-Regular, Consolas, monospace";let q=Math.ceil(b.measureText(A).width)+36+24;if(w.width=q,w.height=64,b.font="500 28px ui-monospace, SFMono-Regular, Consolas, monospace",b.fillStyle="rgba(16,13,10,0.84)",b.strokeStyle=L==="ok"?"rgba(243,237,223,0.75)":"rgba(192,138,91,0.75)",b.lineWidth=2,b.beginPath(),b.roundRect)b.roundRect(1,1,q-2,62,3);else b.rect(1,1,q-2,62);b.fill(),b.stroke(),b.strokeStyle="rgba(192,138,91,0.25)",b.lineWidth=1,b.strokeRect(5.5,5.5,q-11,53),b.fillStyle=L==="ok"?"#f3eddf":"#c08a5b",b.beginPath(),b.arc(24,32,5,0,Math.PI*2),b.fill(),b.fillStyle="#f3eddf",b.textBaseline="middle",b.fillText(A,40,33);let M=new Q(w);M.colorSpace=y,M.anisotropy=4;let he=new me({map:M,transparent:!0,depthWrite:!1,depthTest:!1,opacity:0,fog:!1,sizeAttenuation:!1}),ge=new we(he);return ge.userData.aspect=q/64,ge.renderOrder=10,{sprite:ge,texture:M,material:he}}function dt(A,L,j,x){let w=L!=="low",b=w?new d({roughness:x.roughness,metalness:0,envMapIntensity:x.env??0.35}):new ee;if(b.name=`${A}-${w?"pbr":"lit"}`,b.vertexColors=!!x.vertexColors,b.color.set(x.tint??16777215),x.floor)b.map=x.map,b.transparent=w&&x.reflective,b.opacity=1;return b.onBeforeCompile=(F)=>{Object.assign(F.uniforms,j.uniforms,{uStone:{value:x.stone||x.map},uScale:{value:x.scale??0.5},uFloorAlpha:{value:x.floorAlpha??1}}),F.vertexShader=F.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vTpPos; varying vec3 vTpNrm;`).replace("#include <project_vertex>",`#include <project_vertex>
        vec4 tpWorld = vec4(transformed, 1.0);
        vec3 tpN = objectNormal;
        #ifdef USE_INSTANCING
          tpWorld = instanceMatrix * tpWorld;
          tpN = mat3(instanceMatrix) * tpN;
        #endif
        tpWorld = modelMatrix * tpWorld;
        vTpPos = tpWorld.xyz;
        vTpNrm = normalize(mat3(modelMatrix) * tpN);`);let q=`
      uniform vec4 uTorches[${mt}];
      uniform vec3 uTorchColor; uniform float uTorchPower;
      uniform vec4 uOrb; uniform vec3 uOrbColor;
      uniform vec4 uPoolA; uniform vec4 uPoolB; uniform vec3 uSkyColor; uniform float uPools;
      uniform float uWake; uniform vec4 uFill;
      vec3 warmLight(vec3 p, vec3 n) {
        // Warm fill from the entrance (the visitor's side), fading with depth into the hall.
        vec3 sum = uTorchColor * 0.55 * uFill.w * (max(dot(n, normalize(uFill.xyz - p)), 0.0) * 0.8 + 0.2)
          * exp(-max(0.0, uFill.z - p.z) * 0.06);
        for (int i = 0; i < ${mt}; i++) {
          vec4 t = uTorches[i];
          vec3 d = t.xyz - p;
          float r2 = dot(d, d);
          float lambert = max(dot(n, d * inversesqrt(r2)), 0.0) * 0.8 + 0.2;
          sum += uTorchColor * t.w * lambert / (1.0 + r2 * 0.32);
        }
        vec3 o = uOrb.xyz - p;
        float o2 = dot(o, o);
        sum += uOrbColor * uOrb.w * (max(dot(n, o * inversesqrt(o2 + 1e-4)), 0.0) * 0.75 + 0.25) / (1.0 + o2 * 1.6);
        return sum * uTorchPower;
      }
      // Daylight pools for the low tier: a soft vertical cone from the skylight and the oculus.
      vec3 skyPools(vec3 p, vec3 n) {
        float a = exp(-dot(p.xz - uPoolA.xy, p.xz - uPoolA.xy) / uPoolA.z) * uPoolA.w;
        float b = exp(-dot(p.xz - uPoolB.xy, p.xz - uPoolB.xy) / uPoolB.z) * uPoolB.w;
        return uSkyColor * (a + b) * (max(n.y, 0.0) * 0.7 + 0.3) * uPools;
      }`;if(F.fragmentShader=F.fragmentShader.replace("#include <common>",`#include <common>
        varying vec3 vTpPos; varying vec3 vTpNrm;
        uniform sampler2D uStone; uniform float uScale; uniform float uFloorAlpha;
        ${q}`).replace("#include <map_fragment>",x.floor?`
        vec4 floorTex = texture2D(map, vec2((vTpPos.x + 7.0) / 14.0, -vTpPos.z / ${V.toFixed(2)}));
        diffuseColor.rgb *= floorTex.rgb;
        // Contact shadow at every column base and under the plinths (exact, analytic).
        float cz = mod(-vTpPos.z - ${(V/2).toFixed(2)} + ${(V/2).toFixed(2)}, ${V.toFixed(2)}) - ${(V/2).toFixed(2)};
        float colD = length(vec2(abs(vTpPos.x) - ${Ht.toFixed(2)}, cz));
        float contact = mix(0.35, 1.0, smoothstep(0.62, 1.5, colD));
        if (-vTpPos.z > ${(Dt-1.2).toFixed(2)} + 1.5) contact = 1.0;
        vec2 pq = abs(vec2(vTpPos.x, vTpPos.z - ${re.toFixed(2)})) - vec2(1.75, 1.35);
        contact *= mix(0.4, 1.0, smoothstep(-0.05, 0.9, length(max(pq, 0.0)) + min(max(pq.x, pq.y), 0.0)));
        vec2 ped = vec2(abs(vTpPos.x) - 5.35, mod(-vTpPos.z, ${(2*V).toFixed(2)}) - ${V.toFixed(2)});
        contact *= mix(0.55, 1.0, smoothstep(0.35, 1.1, length(max(abs(ped) - vec2(0.4), 0.0))));
        diffuseColor.rgb *= contact;
        float tpAO = contact;
        float tpRough = floorTex.a;`:`
${w?`
        vec3 bw = pow(abs(vTpNrm), vec3(4.0)); bw /= dot(bw, vec3(1.0));
        vec3 tx = texture2D(uStone, vTpPos.zy * uScale).rgb;
        vec3 ty = texture2D(uStone, vTpPos.xz * uScale).rgb;
        vec3 tz = texture2D(uStone, vTpPos.xy * uScale).rgb;
        vec3 stoneTex = tx * bw.x + ty * bw.y + tz * bw.z;`:`
        // Low tier: one fetch along the dominant axis instead of three (measured: the triplanar
        // fetches were the single largest cost of the scene on a software rasteriser).
        vec3 an = abs(vTpNrm);
        vec2 tuv = (an.x > an.y && an.x > an.z) ? vTpPos.zy : (an.y > an.z ? vTpPos.xz : vTpPos.xy);
        vec3 stoneTex = texture2D(uStone, tuv * uScale).rgb;`}
        diffuseColor.rgb *= stoneTex;
        float tpAO = 1.0;
        float tpRough = 0.0;`).replace("#include <color_fragment>",x.vertexColors?`
        #ifdef USE_COLOR
          tpAO = vColor.r;
          // Edge wear: convex arrises are paler (handled stone) and break into chips.
          float edge = smoothstep(0.53, 0.68, vColor.g);
          float chip = step(0.52, fract(sin(dot(floor(vTpPos * 24.0), vec3(12.9898, 78.233, 37.719))) * 43758.5453));
          diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * 1.22 + 0.025, edge * (0.45 + 0.55 * chip));
          diffuseColor.rgb *= mix(0.28, 1.0, tpAO);
        #endif`:"").replace("#include <opaque_fragment>",`
        vec3 tpLit = warmLight(vTpPos, normalize(vTpNrm)) + skyPools(vTpPos, normalize(vTpNrm));
        outgoingLight += diffuseColor.rgb * tpLit * mix(0.45, 1.0, tpAO);
        outgoingLight *= uWake;
        #include <opaque_fragment>`),w)F.fragmentShader=F.fragmentShader.replace("#include <roughnessmap_fragment>",x.floor?`#include <roughnessmap_fragment>
roughnessFactor = clamp(tpRough * 1.1, 0.18, 1.0);`:`#include <roughnessmap_fragment>
roughnessFactor = clamp(roughnessFactor + (0.5 - stoneTex.r) * 0.35, 0.2, 1.0);`);if(x.floor&&w&&x.reflective)F.fragmentShader=F.fragmentShader.replace("#include <opaque_fragment>",`#include <opaque_fragment>
gl_FragColor.a = mix(0.72, 0.97, smoothstep(0.25, 0.6, tpRough));`)},b.customProgramCacheKey=()=>`temple-${A}-${L}-${!!x.reflective}`,b}function Kt(A){return new p({uniforms:{uTime:A.uniforms.uTime,uWake:A.uniforms.uWake,uLevel:{value:0}},vertexShader:`varying vec3 vP; varying float vH; uniform float uTime;
      void main() {
        vec3 p = position; vH = clamp(p.y, 0.0, 1.0);
        vec4 origin = vec4(0.0, 0.0, 0.0, 1.0);
        #ifdef USE_INSTANCING
          origin = instanceMatrix * origin;
        #endif
        float seed = origin.x * 3.1 + origin.z * 1.7;
        float sway = sin(uTime * 7.0 + seed) * 0.12 + sin(uTime * 12.3 + seed * 2.0) * 0.07;
        p.x += sway * vH * vH; p.z += sway * 0.6 * vH * vH;
        p.y *= 0.88 + 0.14 * sin(uTime * 9.0 + seed * 3.0);
        vec4 local = vec4(p, 1.0);
        #ifdef USE_INSTANCING
          local = instanceMatrix * local;
        #endif
        vP = p; gl_Position = projectionMatrix * modelViewMatrix * local;
      }`,fragmentShader:`varying vec3 vP; varying float vH; uniform float uLevel; uniform float uWake;
      void main() {
        vec3 hot = vec3(1.0, 0.86, 0.62), warm = vec3(1.0, 0.48, 0.16);
        vec3 c = mix(hot * 4.0, warm * 2.4, vH);
        gl_FragColor = vec4(c * uLevel * uWake, 1.0);
      }`})}function Xt(A,L){return new p({transparent:!0,depthWrite:!1,side:S,blending:I,uniforms:{uTime:{value:0},uSeed:{value:A},uStrength:{value:0},uColor:{value:new t(L)}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
      uniform float uTime, uSeed, uStrength; uniform vec3 uColor; varying vec2 vUv;
      float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float noise(vec2 p) { vec2 i = floor(p), f = fract(p); vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(mix(hash(i), hash(i + vec2(1, 0)), u.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), u.x), u.y); }
      void main() {
        float across = pow(clamp(1.0 - abs(vUv.x - 0.5) * 2.0, 0.0, 1.0), 2.2);
        float along = smoothstep(0.0, 0.25, vUv.y) * smoothstep(1.0, 0.75, vUv.y);
        float n = noise(vec2(vUv.x * 6.0 + uSeed, vUv.y * 2.0 - uTime * 0.06)) * 0.5 + 0.5;
        gl_FragColor = vec4(uColor, across * along * n * uStrength);
      }`})}function Jt(A,L,j){return new p({transparent:!0,depthWrite:!1,blending:I,uniforms:{uMap:{value:A},uTime:j.uniforms.uTime,uSize:{value:24*L},uLevel:{value:0},uA:{value:new e(0.4,0,ze+0.9)},uB:{value:new e(0.1,0,re+0.3)}},vertexShader:`
      attribute float aSeed; uniform float uTime, uSize; uniform vec3 uA, uB; varying float vLight;
      void main() {
        vec4 world = modelMatrix * vec4(position, 1.0);
        // Shafts lean slightly (sun from the right): offset the axis with height.
        vec2 a = world.xz - (uA.xz + vec2(-0.12, 0.0) * world.y);
        vec2 b = world.xz - (uB.xz + vec2(-0.05, 0.0) * world.y);
        float d = min(dot(a, a) / 1.6, dot(b, b) / 1.1);
        vLight = 0.04 + exp(-d) * (0.65 + 0.35 * sin(uTime * 1.5 + aSeed * 6.2831));
        vec4 mv = viewMatrix * world;
        gl_PointSize = uSize * (0.55 + fract(aSeed * 13.7) * 0.9) / -mv.z;
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`
      uniform sampler2D uMap; uniform float uLevel; varying float vLight;
      void main() {
        vec4 t = texture2D(uMap, gl_PointCoord);
        gl_FragColor = vec4(vec3(0.92, 0.95, 1.0) * vLight, t.a * vLight * uLevel);
      }`})}async function no({renderer:A,getEnvironment:L,state:j}){let x=new B;x.background=new t(Lt),x.fog=new Y(Lt,16,70),x.environmentIntensity=0.25;let w=new _(38,1,0.1,90),b=new e,F=Yt(),q=[F],M=(o)=>(q.push(o),o),he=new z,[ge,Xe,Je,Ce]=await Promise.all([new ae().loadAsync("assets/worlds/temple.glb"),he.loadAsync("assets/worlds/temple-limestone.webp"),he.loadAsync("assets/worlds/temple-marble.webp"),he.loadAsync("assets/worlds/temple-floor.webp")]);for(let o of[Xe,Je,Ce])o.colorSpace=y,o.wrapS=o.wrapT=G,M(o);let se=[],E={uniforms:{uTime:{value:0},uWake:{value:0},uTorches:{value:Array.from({length:mt},()=>new a)},uTorchColor:{value:new t(1,0.52,0.22)},uTorchPower:{value:1},uOrb:{value:new a},uOrbColor:{value:new t(1,0.78,0.52)},uPoolA:{value:new a(0,ze+1,4,0.9)},uPoolB:{value:new a(0,re+0.4,3,1.4)},uSkyColor:{value:new t(0.55,0.68,0.95)},uPools:{value:0},uFill:{value:new a(0,4.5,6,0)}}};ge.scene.updateMatrixWorld(!0);let Ne=new Map,_t=[];ge.scene.traverse((o)=>{if(!o.isMesh)return;let s=`${o.geometry.uuid}|${o.material.name}`;if(!Ne.has(s))Ne.set(s,[]);Ne.get(s).push(o)});let Ae=new v;x.add(Ae);let W=[],ne=new i;for(let o of Ne.values()){let s=o[0],g=(s.material.name||"").replace(/\.\d+$/,""),l;if(o.length>1)l=new D(s.geometry,s.material,o.length),o.forEach((oe,Oe)=>l.setMatrixAt(Oe,ne.copy(oe.matrixWorld))),l.instanceMatrix.needsUpdate=!0,l.computeBoundingSphere();else l=new r(s.geometry,s.material),l.matrixAutoUpdate=!1,l.matrix.copy(s.matrixWorld),_t.push(l);l.name=s.name||s.parent?.name||g;let k=[[/Column/,1],[/Pedestal|Figure|Colossus|Plinth/,2],[/Entablature/,3],[/Wall/,4],[/Vault/,5],[/Apse/,6],[/Floor/,7]].find(([oe])=>oe.test(l.name));l.renderOrder=k?k[1]:3,l.userData.kind=g,l.userData.node=s.parent?.name||s.name||"",Ae.add(l),W.push(l)}let xe=W.find((o)=>o.isInstancedMesh&&/^Column(?!Far)/.test(o.name)),le=W.find((o)=>o.isInstancedMesh&&/^ColumnFar/.test(o.name)),O=null;if(xe&&le){O=new D(le.geometry,le.material,xe.count+le.count);for(let o=0;o<xe.count;o++)xe.getMatrixAt(o,ne),O.setMatrixAt(o,ne);for(let o=0;o<le.count;o++)le.getMatrixAt(o,ne),O.setMatrixAt(xe.count+o,ne);O.instanceMatrix.needsUpdate=!0,O.computeBoundingSphere(),O.name="ColumnLow",O.userData.kind=le.userData.kind,O.renderOrder=1,Ae.add(O),W.push(O)}let Qe=[],Z=new C;W.filter((o)=>o.userData.kind==="Flame").forEach((o)=>{o.geometry.computeBoundingBox();let s=o.isInstancedMesh?o.count:1;for(let g=0;g<s;g++){if(o.isInstancedMesh)o.getMatrixAt(g,ne);else ne.copy(o.matrix);Z.copy(o.geometry.boundingBox).applyMatrix4(ne);let l=new e((Z.min.x+Z.max.x)/2,Z.min.y,(Z.min.z+Z.max.z)/2);Qe.push({base:l,height:Z.max.y-Z.min.y}),se.push(l.clone().setY(l.y+(Z.max.y-Z.min.y)*0.45))}Ae.remove(o)});for(let o=W.length-1;o>=0;o--)if(W[o].userData.kind==="Flame")W.splice(o,1);se.sort((o,s)=>s.z-o.z);let et=se.map(()=>0),ye={},Et=(o)=>{let s=o==="low"?"low":o;if(ye[s])return ye[s];let g=o!=="low";return ye[s]={Limestone:M(dt("limestone",o,E,{stone:Xe,scale:0.42,roughness:0.82,tint:15918804,vertexColors:!0})),Marble:M(dt("marble",o,E,{stone:Je,scale:0.5,roughness:0.42,tint:16774890,vertexColors:!0,env:0.5})),FloorStone:M(dt("floor",o,E,{map:Ce,floor:!0,reflective:g,roughness:0.4})),Bronze:M(o==="low"?new ee({color:5911072,emissive:1707013}):new d({color:10115636,metalness:1,roughness:0.38,envMapIntensity:0.9}))},ye[s]},$e=M(Kt(E)),Wt=[[0,0],[0.09,0.05],[0.13,0.16],[0.1,0.3],[0.05,0.44],[0,0.55]].map(([o,s])=>new n(o/0.55,s/0.55)),be=new D(M(new Pe(Wt,12)),$e,Qe.length);Qe.forEach(({base:o,height:s},g)=>{be.setMatrixAt(g,ne.compose(o,new R,new e(s,s,s)))}),be.instanceMatrix.needsUpdate=!0,be.computeBoundingSphere(),be.userData.kind="Flame",Ae.add(be),W.push(be);let Ot=M(new u({color:new t(0.62,0.78,1).multiplyScalar(2.2),fog:!1})),Bt=(o)=>{let s=Et(o);W.forEach((g)=>{let l=g.userData.kind;if(l==="Flame")g.material=$e;else if(l==="Glass")g.material=Ot;else if(s[l])g.material=s[l]}),vt.forEach((g)=>{if(s[g.userData.kind])g.material=s[g.userData.kind];else if(g.userData.kind==="Flame")g.material=$e})},Ie=new v;Ie.scale.y=-1;let vt=[];W.forEach((o)=>{if(o===O)return;if(!["Flame","Marble","Bronze"].includes(o.userData.kind)&&!/Column|Pedestal|Plinth/.test(o.name))return;let s=o.clone();s.userData={...o.userData},Ie.add(s),vt.push(s)}),x.add(Ie);let tt=new We(9413572,2759954,0);x.add(tt);let N=new ie(12900095,0,30,0.34,0.55,1.2);N.position.copy(qt),N.target.position.set(0,4,re+0.3);let Se=new ie(13162751,0,30,0.36,0.6,1.2);Se.position.set(1.4,18,ze+2.4),Se.target.position.set(-0.3,0,ze-0.6),x.add(N,N.target,Se,Se.target),N.shadow.mapSize.set(1024,1024),N.shadow.bias=-0.0006,N.shadow.camera.near=4,N.shadow.camera.far=22;let ot=[],ht=(o,s,g,l,k,oe,Oe)=>{let ce=new v;for(let ue=0;ue<4;ue++){let fe=M(Xt(oe+ue*1.3,Oe)),Te=new r(M(new P(l+ue*0.35,g)),fe);Te.rotation.y=ue*0.45,ce.add(Te),ot.push(fe)}return ce.position.set(o,g/2,s),ce.rotation.z=k,x.add(ce),ce};ht(0.2,ze+0.9,12,1.6,0.12,0,12374271),ht(0.1,re+0.3,15,1.4,0.05,2,13162751);let ke=1100,K=new Float32Array(ke*3),Fe=new Float32Array(ke);for(let o=0;o<ke;o++){let s=o%3===0;K[o*3]=h.randFloat(-2.4,2.4),K[o*3+1]=h.randFloat(0.1,s?11:9),K[o*3+2]=s?re+h.randFloat(-2.5,2.5):ze+h.randFloat(-3,4),Fe[o]=Math.random()}let Le=M(new f);Le.setAttribute("position",new m(K,3)),Le.setAttribute("aSeed",new m(Fe,1));let He=M(Jt(F,A.getPixelRatio(),E)),gt=new J(Le,He);gt.frustumCulled=!1,x.add(gt);let Ut=se.map((o,s)=>{let g=s===se.length-1&&o.y>5,l=new we(M(new me({map:F,color:16754789,transparent:!0,depthWrite:!1,blending:I,opacity:0})));return l.position.copy(o),l.scale.setScalar(g?2.6:1.5),x.add(l),l}),U=new v,at=new r(M(new P(0.42,0.42)),M(new u({map:F,color:16774114,transparent:!0,blending:I,depthWrite:!1,fog:!1}))),nt=new r(M(new P(1.8,1.8)),M(new u({map:F,color:14462334,transparent:!0,opacity:0.5,blending:I,depthWrite:!1,fog:!1})));U.add(nt,at),x.add(U);let De=48,X=new Float32Array(De*3),Ve=new Float32Array(De*3),_e=M(new f);_e.setAttribute("position",new m(X,3)),_e.setAttribute("color",new m(Ve,3));let rt=M(new p({transparent:!0,depthWrite:!1,blending:I,vertexColors:!0,uniforms:{uMap:{value:F},uSize:{value:60*A.getPixelRatio()}},vertexShader:"uniform float uSize; varying vec3 vColor; void main() { vColor = color; vec4 mv = modelViewMatrix * vec4(position, 1.0); gl_PointSize = uSize / -mv.z; gl_Position = projectionMatrix * mv; }",fragmentShader:"uniform sampler2D uMap; varying vec3 vColor; void main() { gl_FragColor = vec4(vColor, texture2D(uMap, gl_PointCoord).a); }"})),xt=new J(_e,rt);xt.frustumCulled=!1,x.add(xt);let te=(o)=>-(V/2+o*V),wt=new Ge([jt.clone(),new e(0.5,6.4,re+2),new e(0,3.6,te(8)+0.4),new e(-0.35,2.5,te(7)),new e(0.35,2.3,te(5)),new e(-0.3,2.2,te(3)),new e(0.2,2.1,te(1)),new e(-1.4,1.9,1.2),new e(-4.6,1.3,4.2)],!1,"centripetal",0.5),yt=(o)=>{let s=0,g=1/0;for(let l=0;l<=500;l++){let k=Math.abs(wt.getPointAt(l/500).z-o);if(k<g)g=k,s=l/500}return s},je=7,Rt=3,Nt=je+Rt,st=[{text:"GET /work",z:te(7),tone:"step"},{text:"TLS ✓",z:te(5),tone:"step"},{text:"AUTHZ ✓ scope:read",z:te(3),tone:"step"},{text:"200 OK",z:te(1),tone:"ok"}].map((o)=>{let s=Zt(o.text,o.tone);return M(s.texture),M(s.material),x.add(s.sprite),{...s,param:yt(o.z),opacity:0,slot:0}}),bt=yt(te(0))+0.02,St=M(new u({color:789258,transparent:!0,opacity:1,depthTest:!1,depthWrite:!1,fog:!1})),it=new r(M(new P(4,4)),St);it.position.z=-0.2,it.renderOrder=999,w.add(it);let Mt=M(new u({map:F,color:15983560,transparent:!0,opacity:0,blending:I,depthTest:!1,depthWrite:!1,fog:!1})),qe=new r(M(new P(1.4,1.4)),Mt);qe.position.z=-0.25,qe.renderOrder=1000,w.add(qe),x.add(w);let lt=ke,Ye=j.tier,Tt=(o)=>{Ye=o.tier;for(let l of[Xe,Je,Ce]){let k=o.tier==="high"?l===Ce?8:4:o.tier==="medium"&&l===Ce?4:1;if(l.anisotropy!==k)l.anisotropy=k,l.needsUpdate=!0}let s=o.tier!=="low";if(Bt(o.tier),Ie.visible=s,O)O.visible=!s,xe.visible=le.visible=s;N.visible=Se.visible=s,tt.visible=!0,x.environment=s?L():null,E.uniforms.uPools.value=s?0:1;let g=o.tier==="high";if(A.shadowMap.enabled!==g)A.shadowMap.enabled=g,Object.values(ye).forEach((l)=>Object.values(l).forEach((k)=>{k.needsUpdate=!0}));N.castShadow=g,W.forEach((l)=>{let k=l.userData.kind;l.castShadow=g&&(k==="Marble"||/Column/.test(l.name)),l.receiveShadow=g&&(k==="FloorStone"||k==="Limestone")}),lt=Math.floor(ke*o.settings.particles),Le.setDrawRange(0,lt),ot.forEach((l,k)=>{l.visible=k%4<(o.tier==="low"?2:4)}),He.uniforms.uSize.value=24*A.getPixelRatio(),rt.uniforms.uSize.value=60*A.getPixelRatio()};Tt(j);let ve=!1,Ze=0.034,ct=900,$t=(o,s)=>{if(w.aspect=o/s,ve=w.aspect<0.9,Ze=h.clamp(26/s,0.02,0.05),ct=s,ve)w.setViewOffset(o,s,0,s*0.16,o,s);else w.setViewOffset(o,s,o*0.07,0,o,s);w.updateProjectionMatrix(),He.uniforms.uSize.value=24*A.getPixelRatio(),rt.uniforms.uSize.value=60*A.getPixelRatio()},Me=-1,H=0,It=()=>{if(Me<0)Me=H},Ee=(o,s=1.4)=>Me<0?0:h.clamp((H-Me-o)/s,0,1),Pt=(o)=>1-Math.pow(1-o,3),zt=new e,Ct=new e,At=new e,ut=0;return{scene:x,camera:w,update:(o,s)=>{H+=o,E.uniforms.uTime.value=H,ut+=(s.progress-ut)*Math.min(1,o*6);let g=ut,l=g<0.5?4*g*g*g:1-Math.pow(-2*g+2,3)/2,k=Pt(Ee(0,3.4)),oe=Pt(Ee(0,2.2));E.uniforms.uWake.value=oe,St.opacity=1-oe;let Oe=ve?4.6:3.2,ce=(ve?50:38)-l*(ve?5:4.5);if(Math.abs(w.fov-ce)>0.01)w.fov=ce,w.updateProjectionMatrix();w.position.set(Math.sin(H*0.09)*0.12+s.pointer.x*0.32,(ve?1.8:1.72)+Math.sin(H*0.13)*0.04-s.pointer.y*0.12+l*0.35+(1-k)*0.25,Oe-l*15.5+(1-k)*2.4),b.set(s.pointer.x*0.6,(ve?3.6:3.1)+l*1.4,-22),w.lookAt(b);let ue=se.length;se.forEach((c,T)=>{let de=T===ue-1,Ke=de?Ee(1.9,0.8):Ee(0.35+T*0.12,0.6),Re=0.88+0.08*Math.sin(H*8.3+T*1.7)+0.05*Math.sin(H*13.1+T*3.1);et[T]=Ke,E.uniforms.uTorches.value[T].set(c.x,c.y,c.z,Ke*Re*(de?7:3.2)),Ut[T].material.opacity=Ke*(de?0.85:0.6)*Re}),$e.uniforms.uLevel.value=Math.max(...et.slice(0,-1),0)*0.5+0.5*et[ue-1];let fe=Ee(0.9,2),Te=fe*(0.85+0.45*l);tt.intensity=(Ye==="low"?1:0.55)*oe,E.uniforms.uFill.value.w=(Ye==="low"?1:0.7)*oe,N.intensity=420*Te,Se.intensity=260*fe*(1-0.3*l),N.target.position.x=-0.2+0.5*l,E.uniforms.uPoolA.value.w=0.55*fe*(1-0.3*l),E.uniforms.uPoolB.value.w=1.1*Te,ot.forEach((c,T)=>{c.uniforms.uTime.value=H,c.uniforms.uStrength.value=T<4?0.16*fe*(1-0.3*l):0.2*Te}),He.uniforms.uLevel.value=fe;for(let c=0;c<lt;c++){let T=c*3;if(K[T+1]+=o*(0.03+Fe[c]*0.05)*(Fe[c]>0.5?1:-0.6),K[T]+=Math.sin(H*0.25+Fe[c]*50)*o*0.05,K[T+1]>11)K[T+1]=0.1;if(K[T+1]<0.1)K[T+1]=11}Le.attributes.position.needsUpdate=!0;let ft=Me<0?-1:H-Me-2.6,pe=0,Be=0,Ue=0;if(ft>=0){if(Ue=ft%Nt,Ue<je)Be=h.smootherstep(Ue/je,0,1),wt.getPointAt(Be,At),U.position.copy(At),pe=Math.min(1,Ue/0.6)*(1-h.smoothstep(Be,bt,bt+0.07)),U.scale.setScalar(0.75+Be*0.6)}pe*=1-h.smoothstep(g,0.35,0.75),E.uniforms.uOrb.value.set(U.position.x,U.position.y,U.position.z,pe*3.2),U.visible=pe>0.01,at.material.opacity=pe,nt.material.opacity=pe*0.45,at.lookAt(w.position),nt.lookAt(w.position);let kt=-1;st.forEach((c,T)=>{if(ft>=0&&Ue<je&&Be>c.param-0.01)kt=T}),zt.setFromMatrixColumn(w.matrixWorld,0),Ct.setFromMatrixColumn(w.matrixWorld,1);let Ft=2*w.position.distanceTo(U.position)*Math.tan(h.degToRad(w.fov)/2)/ct;st.forEach((c,T)=>{let de=kt-T,Re=(de<0?0:[1,0.6,0.38,0.24][Math.min(de,3)])*pe;c.opacity+=(Re-c.opacity)*Math.min(1,o*(Re>c.opacity?9:6)),c.slot+=((de<0?0:de)-c.slot)*Math.min(1,o*8),c.material.opacity=c.opacity,c.sprite.visible=c.material.opacity>0.01,c.sprite.scale.set(Ze*c.sprite.userData.aspect,Ze,1);let pt=Ze*ct;c.sprite.position.copy(U.position).addScaledVector(Ct,(pt*0.9+c.slot*pt*1.25)*Ft).addScaledVector(zt,(18+pt*c.sprite.userData.aspect*0.5)*Ft)});for(let c=De-1;c>0;c--)X[c*3]=X[(c-1)*3],X[c*3+1]=X[(c-1)*3+1],X[c*3+2]=X[(c-1)*3+2];X[0]=U.position.x,X[1]=U.position.y,X[2]=U.position.z;for(let c=0;c<De;c++){let T=Math.pow(1-c/De,1.8)*pe*0.8;Ve[c*3]=T,Ve[c*3+1]=0.76*T,Ve[c*3+2]=0.5*T}_e.attributes.position.needsUpdate=!0,_e.attributes.color.needsUpdate=!0,Mt.opacity=h.smoothstep(g,0.78,0.97)*0.55,qe.scale.setScalar(1+h.smoothstep(g,0.78,1)*1.6)},resize:$t,setTier:Tt,dispose:()=>{q.forEach((o)=>o.dispose?.()),Object.values(ye).forEach((o)=>Object.values(o).forEach((s)=>s.dispose?.())),W.forEach((o)=>o.geometry.dispose())},ignite:It,debug:{labels:st,torches:se,get tier(){return Ye},advance(o){H+=o}},bloom:{strength:0.75,radius:0.55,threshold:0.86},finish:{vignette:0.48,grain:0.03}}}export{no as create};
