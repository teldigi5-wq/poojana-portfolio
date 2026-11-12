import{m,F,R,ce,he,ue,Z,de,fe,pe,_,M,o,n,e,s,f,l,t,J,x,d,y,a,Q,W,O,c,be,D,Ne,U,G,Be,le,ke}from"./stage-h0tnhm4r.js";var Fe,xe,oe,De=(i,u)=>{for(var[h,v,r]of Fe||[])for(var p=[i],g=globalThis,w=g.document,A,b,E,P,N;b=p.pop();)if(!xe[b]&&(E=v[b])){xe[b]=1;for(P=1;P<E.length;P++)p.push(r[E[P]]);if(!u&&b!==i&&(A=w&&w.head)){if(oe===void 0)oe=(P=w.querySelector("meta[property=csp-nonce]"))&&(P.nonce||P.getAttribute("nonce"))||"";if(N=w.createElement("link"),N.rel="modulepreload",N.crossOrigin="",oe)N.nonce=oe;N.href=new g.URL(E[0],h),A.appendChild(N)}}},He=(i,u,h,v)=>{for(var r={},p=0;p<u.length;p++)r[u[p]]=h[p];(Fe||=[]).push([i,r,u]),xe||={},De(u[v],1)};He(import.meta.url,["mwzh21f7","jsj53rey","h0tnhm4r"],[["./stage.js",2],["./gateway-jsj53rey.js",2],["./stage-h0tnhm4r.js"]],0);
class Me extends J{constructor(){super();this.name="RoomEnvironment",this.position.y=-3.5;let i=new W;i.deleteAttribute("uv");let u=new D({side:m}),h=new D,v=new U(16777215,900,28,2);v.position.set(0.418,16.199,0.3),this.add(v);let r=new a(i,u);r.position.set(-0.757,13.219,0.717),r.scale.set(31.713,28.305,28.591),this.add(r);let p=new Q(i,h,6),g=new l;g.position.set(-10.906,2.009,1.846),g.rotation.set(0,-0.195,0),g.scale.set(2.328,7.905,4.651),g.updateMatrix(),p.setMatrixAt(0,g.matrix),g.position.set(-5.607,-0.754,-0.758),g.rotation.set(0,0.994,0),g.scale.set(1.97,1.534,3.955),g.updateMatrix(),p.setMatrixAt(1,g.matrix),g.position.set(6.167,0.857,7.803),g.rotation.set(0,0.561,0),g.scale.set(3.927,6.285,3.687),g.updateMatrix(),p.setMatrixAt(2,g.matrix),g.position.set(-2.017,0.018,6.124),g.rotation.set(0,0.333,0),g.scale.set(2.002,4.566,2.064),g.updateMatrix(),p.setMatrixAt(3,g.matrix),g.position.set(2.291,-0.756,-2.621),g.rotation.set(0,-0.286,0),g.scale.set(1.546,1.552,1.496),g.updateMatrix(),p.setMatrixAt(4,g.matrix),g.position.set(-2.193,-0.369,-5.547),g.rotation.set(0,0.516,0),g.scale.set(3.875,3.487,2.986),g.updateMatrix(),p.setMatrixAt(5,g.matrix),this.add(p);let w=new a(i,K(50));w.position.set(-16.116,14.37,8.208),w.scale.set(0.1,2.428,2.739),this.add(w);let A=new a(i,K(50));A.position.set(-16.109,18.021,-8.207),A.scale.set(0.1,2.425,2.751),this.add(A);let b=new a(i,K(17));b.position.set(14.904,12.198,-1.832),b.scale.set(0.15,4.265,6.331),this.add(b);let E=new a(i,K(43));E.position.set(-0.462,8.89,14.52),E.scale.set(4.38,5.441,0.088),this.add(E);let P=new a(i,K(20));P.position.set(3.235,11.486,-12.541),P.scale.set(2.5,2,0.1),this.add(P);let N=new a(i,K(100));N.position.set(0,20,0),N.scale.set(1,0.1,1),this.add(N)}dispose(){let i=new Set;this.traverse((u)=>{if(u.isMesh)i.add(u.geometry),i.add(u.material)});for(let u of i)u.dispose()}}function K(i){return new Ne({color:0,emissive:16777215,emissiveIntensity:i})}var q={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class z{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}var We=new G(-1,1,1,-1,0,1);class Ue extends d{constructor(){super();this.setAttribute("position",new x([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new x([0,2,0,0,2,0],2))}}var je=new Ue;class H{constructor(i){this._mesh=new a(je,i)}dispose(){this._mesh.geometry.dispose()}render(i){i.render(this._mesh,We)}get material(){return this._mesh.material}set material(i){this._mesh.material=i}}class Y extends z{constructor(i,u="tDiffuse"){super();if(this.textureID=u,this.uniforms=null,this.material=null,i instanceof c)this.uniforms=i.uniforms,this.material=i;else if(i)this.uniforms=O.clone(i.uniforms),this.material=new c({name:i.name!==void 0?i.name:"unspecified",defines:Object.assign({},i.defines),uniforms:this.uniforms,vertexShader:i.vertexShader,fragmentShader:i.fragmentShader});this._fsQuad=new H(this.material)}render(i,u,h){if(this.uniforms[this.textureID])this.uniforms[this.textureID].value=h.texture;if(this._fsQuad.material=this.material,this.renderToScreen)i.setRenderTarget(null),this._fsQuad.render(i);else{if(i.setRenderTarget(u),this.clear)i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil);this._fsQuad.render(i)}}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class ae extends z{constructor(i,u){super();this.scene=i,this.camera=u,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(i,u,h){let v=i.getContext(),r=i.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let p,g;if(this.inverse)p=0,g=1;else p=1,g=0;if(r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(v.REPLACE,v.REPLACE,v.REPLACE),r.buffers.stencil.setFunc(v.ALWAYS,p,4294967295),r.buffers.stencil.setClear(g),r.buffers.stencil.setLocked(!0),i.setRenderTarget(h),this.clear)i.clear();if(i.render(this.scene,this.camera),i.setRenderTarget(u),this.clear)i.clear();i.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(v.EQUAL,1,4294967295),r.buffers.stencil.setOp(v.KEEP,v.KEEP,v.KEEP),r.buffers.stencil.setLocked(!0)}}class Te extends z{constructor(){super();this.needsSwap=!1}render(i){i.state.buffers.stencil.setLocked(!1),i.state.buffers.stencil.setTest(!1)}}class _e{constructor(i,u){if(this.renderer=i,this._pixelRatio=i.getPixelRatio(),u===void 0){let h=i.getSize(new n);this._width=h.width,this._height=h.height,u=new f(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:_}),u.texture.name="EffectComposer.rt1"}else this._width=u.width,this._height=u.height;this.renderTarget1=u,this.renderTarget2=u.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Y(q),this.copyPass.material.blending=F,this.timer=new Be}swapBuffers(){let i=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=i}addPass(i){this.passes.push(i),i.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(i,u){this.passes.splice(u,0,i),i.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(i){let u=this.passes.indexOf(i);if(u!==-1)this.passes.splice(u,1)}isLastEnabledPass(i){for(let u=i+1;u<this.passes.length;u++)if(this.passes[u].enabled)return!1;return!0}render(i){if(this.timer.update(),i===void 0)i=this.timer.getDelta();let u=this.renderer.getRenderTarget(),h=!1;for(let v=0,r=this.passes.length;v<r;v++){let p=this.passes[v];if(p.enabled===!1)continue;if(p.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(v),p.render(this.renderer,this.writeBuffer,this.readBuffer,i,h),p.needsSwap){if(h){let g=this.renderer.getContext(),w=this.renderer.state.buffers.stencil;w.setFunc(g.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,i),w.setFunc(g.EQUAL,1,4294967295)}this.swapBuffers()}if(ae!==void 0){if(p instanceof ae)h=!0;else if(p instanceof Te)h=!1}}this.renderer.setRenderTarget(u)}reset(i){if(i===void 0){let u=this.renderer.getSize(new n);this._pixelRatio=this.renderer.getPixelRatio(),this._width=u.width,this._height=u.height,i=this.renderTarget1.clone(),i.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=i,this.renderTarget2=i.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(i,u){this._width=i,this._height=u;let h=this._width*this._pixelRatio,v=this._height*this._pixelRatio;this.renderTarget1.setSize(h,v),this.renderTarget2.setSize(h,v);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(h,v)}setPixelRatio(i){this._pixelRatio=i,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class we extends z{constructor(i,u,h=null,v=null,r=null){super();this.scene=i,this.camera=u,this.overrideMaterial=h,this.clearColor=v,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new t}render(i,u,h){let v=i.autoClear;i.autoClear=!1;let r,p;if(this.overrideMaterial!==null)p=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial;if(this.clearColor!==null)i.getClearColor(this._oldClearColor),i.setClearColor(this.clearColor,i.getClearAlpha());if(this.clearAlpha!==null)r=i.getClearAlpha(),i.setClearAlpha(this.clearAlpha);if(this.clearDepth==!0)i.clearDepth();if(i.setRenderTarget(this.renderToScreen?null:h),this.clear===!0)i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil);if(i.render(this.scene,this.camera),this.clearColor!==null)i.setClearColor(this._oldClearColor);if(this.clearAlpha!==null)i.setClearAlpha(r);if(this.overrideMaterial!==null)this.scene.overrideMaterial=p;i.autoClear=v}}var Le={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new t(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class k extends z{constructor(i,u=1,h,v){super();this.strength=u,this.radius=h,this.threshold=v,this.resolution=i!==void 0?new n(i.x,i.y):new n(256,256),this.clearColor=new t(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),p=Math.round(this.resolution.y/2);this.renderTargetBright=new f(r,p,{type:_,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let b=0;b<this.nMips;b++){let E=new f(r,p,{type:_,depthBuffer:!1});E.texture.name="UnrealBloomPass.h"+b,E.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(E);let P=new f(r,p,{type:_,depthBuffer:!1});P.texture.name="UnrealBloomPass.v"+b,P.texture.generateMipmaps=!1,this.renderTargetsVertical.push(P),r=Math.round(r/2),p=Math.round(p/2)}let g=Le;this.highPassUniforms=O.clone(g.uniforms),this.highPassUniforms.luminosityThreshold.value=v,this.highPassUniforms.smoothWidth.value=0.01,this.materialHighPassFilter=new c({uniforms:this.highPassUniforms,vertexShader:g.vertexShader,fragmentShader:g.fragmentShader}),this.separableBlurMaterials=[];let w=[6,10,14,18,22];r=Math.round(this.resolution.x/2),p=Math.round(this.resolution.y/2);for(let b=0;b<this.nMips;b++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(w[b])),this.separableBlurMaterials[b].uniforms.invSize.value=new n(1/r,1/p),r=Math.round(r/2),p=Math.round(p/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=u,this.compositeMaterial.uniforms.bloomRadius.value=0.1;let A=[1,0.8,0.6,0.4,0.2];this.compositeMaterial.uniforms.bloomFactors.value=A,this.bloomTintColors=[new e(1,1,1),new e(1,1,1),new e(1,1,1),new e(1,1,1),new e(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=O.clone(q.uniforms),this.blendMaterial=new c({uniforms:this.copyUniforms,vertexShader:q.vertexShader,fragmentShader:q.fragmentShader,premultipliedAlpha:!0,blending:R,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new t,this._oldClearAlpha=1,this._basic=new y,this._fsQuad=new H(null)}dispose(){for(let i=0;i<this.renderTargetsHorizontal.length;i++)this.renderTargetsHorizontal[i].dispose();for(let i=0;i<this.renderTargetsVertical.length;i++)this.renderTargetsVertical[i].dispose();this.renderTargetBright.dispose();for(let i=0;i<this.separableBlurMaterials.length;i++)this.separableBlurMaterials[i].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(i,u){let h=Math.round(i/2),v=Math.round(u/2);this.renderTargetBright.setSize(h,v);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(h,v),this.renderTargetsVertical[r].setSize(h,v),this.separableBlurMaterials[r].uniforms.invSize.value=new n(1/h,1/v),h=Math.round(h/2),v=Math.round(v/2)}render(i,u,h,v,r){i.getClearColor(this._oldClearColor),this._oldClearAlpha=i.getClearAlpha();let p=i.autoClear;if(i.autoClear=!1,i.setClearColor(this.clearColor,0),r)i.state.buffers.stencil.setTest(!1);if(this.renderToScreen)this._fsQuad.material=this._basic,this._basic.map=h.texture,i.setRenderTarget(null),i.clear(),this._fsQuad.render(i);this.highPassUniforms.tDiffuse.value=h.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,i.setRenderTarget(this.renderTargetBright),i.clear(),this._fsQuad.render(i);let g=this.renderTargetBright;for(let w=0;w<this.nMips;w++)this._fsQuad.material=this.separableBlurMaterials[w],this.separableBlurMaterials[w].uniforms.colorTexture.value=g.texture,this.separableBlurMaterials[w].uniforms.direction.value=k.BlurDirectionX,i.setRenderTarget(this.renderTargetsHorizontal[w]),i.clear(),this._fsQuad.render(i),this.separableBlurMaterials[w].uniforms.colorTexture.value=this.renderTargetsHorizontal[w].texture,this.separableBlurMaterials[w].uniforms.direction.value=k.BlurDirectionY,i.setRenderTarget(this.renderTargetsVertical[w]),i.clear(),this._fsQuad.render(i),g=this.renderTargetsVertical[w];if(this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,i.setRenderTarget(this.renderTargetsHorizontal[0]),i.clear(),this._fsQuad.render(i),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r)i.state.buffers.stencil.setTest(!0);if(this.renderToScreen)i.setRenderTarget(null),this._fsQuad.render(i);else i.setRenderTarget(h),this._fsQuad.render(i);i.setClearColor(this._oldClearColor,this._oldClearAlpha),i.autoClear=p}_getSeparableBlurMaterial(i){let u=[],h=i/3;for(let p=0;p<i;p++)u.push(0.39894*Math.exp(-0.5*p*p/(h*h))/h);let v=[],r=[];for(let p=1;p<i;p+=2){let g=u[p],w=p+1<i?u[p+1]:0,A=g+w;v.push((p*g+(p+1)*w)/A),r.push(A)}return new c({defines:{KERNEL_PAIRS:v.length},uniforms:{colorTexture:{value:null},invSize:{value:new n(0.5,0.5)},direction:{value:new n(0.5,0.5)},centerWeight:{value:u[0]},gaussianOffsets:{value:v},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(i){return new c({defines:{NUM_MIPS:i},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}k.BlurDirectionX=new n(1,0);k.BlurDirectionY=new n(0,1);var ee={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class Se extends z{constructor(){super();this.isOutputPass=!0,this.uniforms=O.clone(ee.uniforms),this.material=new be({name:ee.name,uniforms:this.uniforms,vertexShader:ee.vertexShader,fragmentShader:ee.fragmentShader}),this._fsQuad=new H(this.material),this._outputColorSpace=null,this._toneMapping=null}render(i,u,h){if(this.uniforms.tDiffuse.value=h.texture,this.uniforms.toneMappingExposure.value=i.toneMappingExposure,this._outputColorSpace!==i.outputColorSpace||this._toneMapping!==i.toneMapping){if(this._outputColorSpace=i.outputColorSpace,this._toneMapping=i.toneMapping,this.material.defines={},s.getTransfer(this._outputColorSpace)===o)this.material.defines.SRGB_TRANSFER="";if(this._toneMapping===ce)this.material.defines.LINEAR_TONE_MAPPING="";else if(this._toneMapping===he)this.material.defines.REINHARD_TONE_MAPPING="";else if(this._toneMapping===ue)this.material.defines.CINEON_TONE_MAPPING="";else if(this._toneMapping===Z)this.material.defines.ACES_FILMIC_TONE_MAPPING="";else if(this._toneMapping===fe)this.material.defines.AGX_TONE_MAPPING="";else if(this._toneMapping===pe)this.material.defines.NEUTRAL_TONE_MAPPING="";else if(this._toneMapping===de)this.material.defines.CUSTOM_TONE_MAPPING="";this.material.needsUpdate=!0}if(this.renderToScreen===!0)i.setRenderTarget(null),this._fsQuad.render(i);else{if(i.setRenderTarget(u),this.clear)i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil);this._fsQuad.render(i)}}dispose(){this.material.dispose(),this._fsQuad.dispose()}}var te=["still","low","medium","high"],Ce={high:{dpr:1.75,bloom:!0,bloomScale:1,particles:1},medium:{dpr:1,bloom:!0,bloomScale:0.4,particles:0.55},low:{dpr:1,bloom:!1,bloomScale:0,particles:0.3}};function Ie({gpu:i="",coarse:u=!1,width:h=1440,memory:v=8,cores:r=8,override:p=null}={}){if(p&&te.includes(p))return p;if(/swiftshader|llvmpipe|software|basic render/i.test(i))return"still";if(u&&h<760)return"low";if(v&&v<=2)return"low";if(/apple (m\d|gpu)|nvidia|geforce|rtx|radeon rx|radeon pro/i.test(i))return"high";if(/intel|uhd|iris|mali|adreno|powervr|radeon(tm)? graphics|vega/i.test(i)||v<=4||r<=4)return"medium";return"high"}function Oe({slowMs:i=22,verySlowMs:u=40,window:h=90,warmup:v=45}={}){let r=[],p=v;return{sample(g,w){if(p>0)return p--,null;if(r.push(g),r.length<h)return null;let A=r.reduce((E,P)=>E+P,0)/r.length;r.length=0;let b=te.indexOf(w);if(w==="low"&&A>u)return"still";if(A>i&&b>1)return te[b-1];return null},reset(){r.length=0,p=v}}}var Ke={uniforms:{tDiffuse:{value:null},uTime:{value:0},uVignette:{value:0.4},uGrain:{value:0.03}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float uTime, uVignette, uGrain; varying vec2 vUv;
    float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
    void main() {
      vec4 c = texture2D(tDiffuse, vUv);
      vec2 d = vUv - 0.5;
      c.rgb *= 1.0 - uVignette * smoothstep(0.25, 0.85, dot(d, d) * 2.2);
      c.rgb += (hash(vUv * 1000.0 + fract(uTime) * 61.0) - 0.5) * uGrain;
      gl_FragColor = c;
    }`};function qe(){if(X.dataset.introState!=="loading")return Promise.resolve();return new Promise((i)=>{addEventListener("portfolio:intro-complete",i,{once:!0}),setTimeout(i,9000)})}var ze={gateway:{host:"#home .hero-visual",section:"#home",load:()=>(De("jsj53rey"),import("./gateway-jsj53rey.js"))}},X=document.documentElement,Pe=new URLSearchParams(location.search);function Xe(){return matchMedia("(prefers-reduced-motion: reduce)").matches||Pe.get("motion")==="off"||X.classList.contains("motion-off")}function $e(i){try{let u=i.getExtension("WEBGL_debug_renderer_info");return u?String(i.getParameter(u.UNMASKED_RENDERER_WEBGL)):String(i.getParameter(i.RENDERER))}catch{return""}}function Ye(){if(Xe())return;let i={boot:Math.round(performance.now())},u=(T)=>{i[T]=Math.round(performance.now())},h=new ke({antialias:!0,alpha:!1,powerPreference:"high-performance"}),v=h.getContext(),r=Ie({gpu:$e(v),coarse:matchMedia("(pointer: coarse)").matches,width:innerWidth,memory:navigator.deviceMemory||8,cores:navigator.hardwareConcurrency||8,override:Pe.get("tier")}),p=te.includes(Pe.get("tier"));if(X.dataset.worldTier=r,r==="still"){h.dispose();return}h.outputColorSpace=M,h.toneMapping=Z,h.toneMappingExposure=1;let g=h.domElement;g.className="world-canvas",g.setAttribute("aria-hidden","true"),g.tabIndex=-1;let w=new le(h),A=w.fromScene(new Me,0.04).texture;w.dispose(),u("environment");let b={tier:r,settings:Ce[r],pointer:new n,pointerTarget:new n,progress:0},E=new Map,P=Oe(),N=0,S=null,L=null,ie=null,V=null,Ee=!1,j=0,se=!1,ne=()=>{if(!S)return;let{width:T,height:C}=S.host.getBoundingClientRect();if(!T||!C)return;if(h.setPixelRatio(Math.min(devicePixelRatio||1,b.settings.dpr)),h.setSize(T,C,!1),S.world.resize(T,C,b),L){L.setPixelRatio(h.getPixelRatio()),L.setSize(T,C);let B=h.getPixelRatio()*b.settings.bloomScale;ie?.setSize(Math.max(64,Math.round(T*B)),Math.max(64,Math.round(C*B)))}},Re=()=>{if(L?.dispose(),L=null,ie=null,V=null,!S||!b.settings.bloom)return;L=new _e(h),L.addPass(new we(S.world.scene,S.world.camera));let T=S.world.bloom||{strength:0.7,radius:0.5,threshold:0.82};ie=new k(new n(256,256),T.strength,T.radius,T.threshold),L.addPass(ie),L.addPass(new Se);let C=S.world.finish;if(C)V=new Y(Ke),V.uniforms.uVignette.value=C.vignette,V.uniforms.uGrain.value=C.grain,L.addPass(V)},me=(T)=>{if(T===r)return;if(r=T,X.dataset.worldTier=r,r==="still"){re(),ve(),g.remove();return}b.tier=r,b.settings=Ce[r],P.reset(),S?.world.setTier?.(b),Re(),ne()},Ae=(T)=>{if(b.pointer.lerp(b.pointerTarget,Math.min(1,T*3)),S.section){let C=S.section.getBoundingClientRect();b.progress=Math.min(1,Math.max(0,-C.top/Math.max(1,C.height)))}if(S.world.update(T,b),V)V.uniforms.uTime.value+=T;if(L)L.render(T);else h.render(S.world.scene,S.world.camera)},ye=()=>{if(j=0,!S||!se||document.hidden)return;let T=performance.now(),C=Math.min(0.05,(T-N)/1000);N=T;let B=performance.now();Ae(C);let I=p?null:P.sample(Math.max(C*1000,performance.now()-B),r);if(I)me(I);if(r!=="still")j=requestAnimationFrame(ye)},ge=()=>{if(!j&&S&&se&&Ee)N=performance.now(),j=requestAnimationFrame(ye)},re=()=>{cancelAnimationFrame(j),j=0},ve=()=>{if(!S)return;S.host.classList.remove("world-live"),S.section?.classList.remove("world-live"),S=null};async function Ge(T){if(S?.name===T)return;let C=ze[T],B=document.querySelector(C.host);if(!B)return;let I=E.get(T);if(!I){let Qe=await C.load();u(`${T}:module`),I=await Qe.create({renderer:h,environment:A,state:b}),u(`${T}:created`);try{await h.compileAsync(I.scene,I.camera)}catch{}u(`${T}:compiled`),E.set(T,I)}if(r==="still")return;if(ve(),S={name:T,world:I,host:B,section:document.querySelector(C.section)},B.prepend(g),Re(),ne(),P.reset(),Ae(0.016),u(`${T}:first-frame`),await qe(),u(`${T}:intro-settled`),S?.name!==T)return;Ee=!0,requestAnimationFrame(()=>{B.classList.add("world-live"),S?.section?.classList.add("world-live"),S?.world.ignite?.(),u(`${T}:revealed`)}),ge()}let Ve=new IntersectionObserver((T)=>{T.forEach((C)=>{let B=C.target.dataset.world;if(C.isIntersecting)se=!0,Ge(B).catch((I)=>{X.dataset.worldError=String(I?.message||I).slice(0,120)}),ge();else if(S?.name===B)se=!1,re()})},{rootMargin:"80px 0px"});Object.entries(ze).forEach(([T,C])=>{let B=document.querySelector(C.section);if(!B)return;B.dataset.world=T,Ve.observe(B)}),addEventListener("pointermove",(T)=>{b.pointerTarget.set(T.clientX/innerWidth*2-1,T.clientY/innerHeight*2-1)},{passive:!0}),addEventListener("resize",ne,{passive:!0}),document.addEventListener("visibilitychange",()=>{if(!document.hidden)ge();else re()}),matchMedia("(prefers-reduced-motion: reduce)").addEventListener?.("change",(T)=>{if(T.matches)me("still")}),g.addEventListener("webglcontextlost",(T)=>{T.preventDefault(),re(),ve(),g.remove(),X.dataset.worldTier="still"}),window.__worldStage={get tier(){return r},get active(){return S?.name||null},setTier:me,timings:i,get world(){return S?.world||null}}}if(typeof window<"u"&&typeof document<"u")try{Ye()}catch(i){document.documentElement.dataset.worldError=String(i?.message||i).slice(0,120)}
