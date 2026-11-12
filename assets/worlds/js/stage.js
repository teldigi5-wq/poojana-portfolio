import{g,B,E,ue,de,fe,K,pe,me,ge,x,S,l,i,e,r,p,c,n,Q,v,f,M,o,j,X,I,h,we,F,Fe,O,G,ke,he,Ve}from"./stage-pnrvtk1c.js";var Be,xe,oe,De=(t,a)=>{for(var[u,T,s]of Be||[])for(var m=[t],d=globalThis,C=d.document,A,_,D,b,R;_=m.pop();)if(!xe[_]&&(D=T[_])){xe[_]=1;for(b=1;b<D.length;b++)m.push(s[D[b]]);if(!a&&_!==t&&(A=C&&C.head)){if(oe===void 0)oe=(b=C.querySelector("meta[property=csp-nonce]"))&&(b.nonce||b.getAttribute("nonce"))||"";if(R=C.createElement("link"),R.rel="modulepreload",R.crossOrigin="",oe)R.nonce=oe;R.href=new d.URL(D[0],u),A.appendChild(R)}}},We=(t,a,u,T)=>{for(var s={},m=0;m<a.length;m++)s[a[m]]=u[m];(Be||=[]).push([t,s,a]),xe||={},De(a[T],1)};We(import.meta.url,["j4hwmp28","16evxax9","pnrvtk1c"],[["./stage.js",2],["./gateway-16evxax9.js",2],["./stage-pnrvtk1c.js"]],0);
class Me extends Q{constructor(){super();this.name="RoomEnvironment",this.position.y=-3.5;let t=new X;t.deleteAttribute("uv");let a=new F({side:g}),u=new F,T=new O(16777215,900,28,2);T.position.set(0.418,16.199,0.3),this.add(T);let s=new o(t,a);s.position.set(-0.757,13.219,0.717),s.scale.set(31.713,28.305,28.591),this.add(s);let m=new j(t,u,6),d=new c;d.position.set(-10.906,2.009,1.846),d.rotation.set(0,-0.195,0),d.scale.set(2.328,7.905,4.651),d.updateMatrix(),m.setMatrixAt(0,d.matrix),d.position.set(-5.607,-0.754,-0.758),d.rotation.set(0,0.994,0),d.scale.set(1.97,1.534,3.955),d.updateMatrix(),m.setMatrixAt(1,d.matrix),d.position.set(6.167,0.857,7.803),d.rotation.set(0,0.561,0),d.scale.set(3.927,6.285,3.687),d.updateMatrix(),m.setMatrixAt(2,d.matrix),d.position.set(-2.017,0.018,6.124),d.rotation.set(0,0.333,0),d.scale.set(2.002,4.566,2.064),d.updateMatrix(),m.setMatrixAt(3,d.matrix),d.position.set(2.291,-0.756,-2.621),d.rotation.set(0,-0.286,0),d.scale.set(1.546,1.552,1.496),d.updateMatrix(),m.setMatrixAt(4,d.matrix),d.position.set(-2.193,-0.369,-5.547),d.rotation.set(0,0.516,0),d.scale.set(3.875,3.487,2.986),d.updateMatrix(),m.setMatrixAt(5,d.matrix),this.add(m);let C=new o(t,q(50));C.position.set(-16.116,14.37,8.208),C.scale.set(0.1,2.428,2.739),this.add(C);let A=new o(t,q(50));A.position.set(-16.109,18.021,-8.207),A.scale.set(0.1,2.425,2.751),this.add(A);let _=new o(t,q(17));_.position.set(14.904,12.198,-1.832),_.scale.set(0.15,4.265,6.331),this.add(_);let D=new o(t,q(43));D.position.set(-0.462,8.89,14.52),D.scale.set(4.38,5.441,0.088),this.add(D);let b=new o(t,q(20));b.position.set(3.235,11.486,-12.541),b.scale.set(2.5,2,0.1),this.add(b);let R=new o(t,q(100));R.position.set(0,20,0),R.scale.set(1,0.1,1),this.add(R)}dispose(){let t=new Set;this.traverse((a)=>{if(a.isMesh)t.add(a.geometry),t.add(a.material)});for(let a of t)a.dispose()}}function q(t){return new Fe({color:0,emissive:16777215,emissiveIntensity:t})}var Y={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class z{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}var $e=new G(-1,1,1,-1,0,1);class Ue extends f{constructor(){super();this.setAttribute("position",new v([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new v([0,2,0,0,2,0],2))}}var Ke=new Ue;class H{constructor(t){this._mesh=new o(Ke,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,$e)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Z extends z{constructor(t,a="tDiffuse"){super();if(this.textureID=a,this.uniforms=null,this.material=null,t instanceof h)this.uniforms=t.uniforms,this.material=t;else if(t)this.uniforms=I.clone(t.uniforms),this.material=new h({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader});this._fsQuad=new H(this.material)}render(t,a,u){if(this.uniforms[this.textureID])this.uniforms[this.textureID].value=u.texture;if(this._fsQuad.material=this.material,this.renderToScreen)t.setRenderTarget(null),this._fsQuad.render(t);else{if(t.setRenderTarget(a),this.clear)t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil);this._fsQuad.render(t)}}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class ae extends z{constructor(t,a){super();this.scene=t,this.camera=a,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,a,u){let T=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let m,d;if(this.inverse)m=0,d=1;else m=1,d=0;if(s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(T.REPLACE,T.REPLACE,T.REPLACE),s.buffers.stencil.setFunc(T.ALWAYS,m,4294967295),s.buffers.stencil.setClear(d),s.buffers.stencil.setLocked(!0),t.setRenderTarget(u),this.clear)t.clear();if(t.render(this.scene,this.camera),t.setRenderTarget(a),this.clear)t.clear();t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(T.EQUAL,1,4294967295),s.buffers.stencil.setOp(T.KEEP,T.KEEP,T.KEEP),s.buffers.stencil.setLocked(!0)}}class Te extends z{constructor(){super();this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class be{constructor(t,a){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),a===void 0){let u=t.getSize(new i);this._width=u.width,this._height=u.height,a=new p(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:x}),a.texture.name="EffectComposer.rt1"}else this._width=a.width,this._height=a.height;this.renderTarget1=a,this.renderTarget2=a.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Z(Y),this.copyPass.material.blending=B,this.timer=new ke}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,a){this.passes.splice(a,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let a=this.passes.indexOf(t);if(a!==-1)this.passes.splice(a,1)}isLastEnabledPass(t){for(let a=t+1;a<this.passes.length;a++)if(this.passes[a].enabled)return!1;return!0}render(t){if(this.timer.update(),t===void 0)t=this.timer.getDelta();let a=this.renderer.getRenderTarget(),u=!1;for(let T=0,s=this.passes.length;T<s;T++){let m=this.passes[T];if(m.enabled===!1)continue;if(m.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(T),m.render(this.renderer,this.writeBuffer,this.readBuffer,t,u),m.needsSwap){if(u){let d=this.renderer.getContext(),C=this.renderer.state.buffers.stencil;C.setFunc(d.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),C.setFunc(d.EQUAL,1,4294967295)}this.swapBuffers()}if(ae!==void 0){if(m instanceof ae)u=!0;else if(m instanceof Te)u=!1}}this.renderer.setRenderTarget(a)}reset(t){if(t===void 0){let a=this.renderer.getSize(new i);this._pixelRatio=this.renderer.getPixelRatio(),this._width=a.width,this._height=a.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,a){this._width=t,this._height=a;let u=this._width*this._pixelRatio,T=this._height*this._pixelRatio;this.renderTarget1.setSize(u,T),this.renderTarget2.setSize(u,T);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(u,T)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class _e extends z{constructor(t,a,u=null,T=null,s=null){super();this.scene=t,this.camera=a,this.overrideMaterial=u,this.clearColor=T,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new n}render(t,a,u){let T=t.autoClear;t.autoClear=!1;let s,m;if(this.overrideMaterial!==null)m=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial;if(this.clearColor!==null)t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha());if(this.clearAlpha!==null)s=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha);if(this.clearDepth==!0)t.clearDepth();if(t.setRenderTarget(this.renderToScreen?null:u),this.clear===!0)t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil);if(t.render(this.scene,this.camera),this.clearColor!==null)t.setClearColor(this._oldClearColor);if(this.clearAlpha!==null)t.setClearAlpha(s);if(this.overrideMaterial!==null)this.scene.overrideMaterial=m;t.autoClear=T}}var Ne={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new n(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class W extends z{constructor(t,a=1,u,T){super();this.strength=a,this.radius=u,this.threshold=T,this.resolution=t!==void 0?new i(t.x,t.y):new i(256,256),this.clearColor=new n(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),m=Math.round(this.resolution.y/2);this.renderTargetBright=new p(s,m,{type:x,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let _=0;_<this.nMips;_++){let D=new p(s,m,{type:x,depthBuffer:!1});D.texture.name="UnrealBloomPass.h"+_,D.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(D);let b=new p(s,m,{type:x,depthBuffer:!1});b.texture.name="UnrealBloomPass.v"+_,b.texture.generateMipmaps=!1,this.renderTargetsVertical.push(b),s=Math.round(s/2),m=Math.round(m/2)}let d=Ne;this.highPassUniforms=I.clone(d.uniforms),this.highPassUniforms.luminosityThreshold.value=T,this.highPassUniforms.smoothWidth.value=0.01,this.materialHighPassFilter=new h({uniforms:this.highPassUniforms,vertexShader:d.vertexShader,fragmentShader:d.fragmentShader}),this.separableBlurMaterials=[];let C=[6,10,14,18,22];s=Math.round(this.resolution.x/2),m=Math.round(this.resolution.y/2);for(let _=0;_<this.nMips;_++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(C[_])),this.separableBlurMaterials[_].uniforms.invSize.value=new i(1/s,1/m),s=Math.round(s/2),m=Math.round(m/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=a,this.compositeMaterial.uniforms.bloomRadius.value=0.1;let A=[1,0.8,0.6,0.4,0.2];this.compositeMaterial.uniforms.bloomFactors.value=A,this.bloomTintColors=[new e(1,1,1),new e(1,1,1),new e(1,1,1),new e(1,1,1),new e(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=I.clone(Y.uniforms),this.blendMaterial=new h({uniforms:this.copyUniforms,vertexShader:Y.vertexShader,fragmentShader:Y.fragmentShader,premultipliedAlpha:!0,blending:E,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new n,this._oldClearAlpha=1,this._basic=new M,this._fsQuad=new H(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,a){let u=Math.round(t/2),T=Math.round(a/2);this.renderTargetBright.setSize(u,T);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(u,T),this.renderTargetsVertical[s].setSize(u,T),this.separableBlurMaterials[s].uniforms.invSize.value=new i(1/u,1/T),u=Math.round(u/2),T=Math.round(T/2)}render(t,a,u,T,s){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let m=t.autoClear;if(t.autoClear=!1,t.setClearColor(this.clearColor,0),s)t.state.buffers.stencil.setTest(!1);if(this.renderToScreen)this._fsQuad.material=this._basic,this._basic.map=u.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t);this.highPassUniforms.tDiffuse.value=u.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let d=this.renderTargetBright;for(let C=0;C<this.nMips;C++)this._fsQuad.material=this.separableBlurMaterials[C],this.separableBlurMaterials[C].uniforms.colorTexture.value=d.texture,this.separableBlurMaterials[C].uniforms.direction.value=W.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[C]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[C].uniforms.colorTexture.value=this.renderTargetsHorizontal[C].texture,this.separableBlurMaterials[C].uniforms.direction.value=W.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[C]),t.clear(),this._fsQuad.render(t),d=this.renderTargetsVertical[C];if(this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s)t.state.buffers.stencil.setTest(!0);if(this.renderToScreen)t.setRenderTarget(null),this._fsQuad.render(t);else t.setRenderTarget(u),this._fsQuad.render(t);t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=m}_getSeparableBlurMaterial(t){let a=[],u=t/3;for(let m=0;m<t;m++)a.push(0.39894*Math.exp(-0.5*m*m/(u*u))/u);let T=[],s=[];for(let m=1;m<t;m+=2){let d=a[m],C=m+1<t?a[m+1]:0,A=d+C;T.push((m*d+(m+1)*C)/A),s.push(A)}return new h({defines:{KERNEL_PAIRS:T.length},uniforms:{colorTexture:{value:null},invSize:{value:new i(0.5,0.5)},direction:{value:new i(0.5,0.5)},centerWeight:{value:a[0]},gaussianOffsets:{value:T},gaussianWeights:{value:s}},vertexShader:`

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

				}`})}_getCompositeMaterial(t){return new h({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}W.BlurDirectionX=new i(1,0);W.BlurDirectionY=new i(0,1);var ee={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class Se extends z{constructor(){super();this.isOutputPass=!0,this.uniforms=I.clone(ee.uniforms),this.material=new we({name:ee.name,uniforms:this.uniforms,vertexShader:ee.vertexShader,fragmentShader:ee.fragmentShader}),this._fsQuad=new H(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,a,u){if(this.uniforms.tDiffuse.value=u.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping){if(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},r.getTransfer(this._outputColorSpace)===l)this.material.defines.SRGB_TRANSFER="";if(this._toneMapping===ue)this.material.defines.LINEAR_TONE_MAPPING="";else if(this._toneMapping===de)this.material.defines.REINHARD_TONE_MAPPING="";else if(this._toneMapping===fe)this.material.defines.CINEON_TONE_MAPPING="";else if(this._toneMapping===K)this.material.defines.ACES_FILMIC_TONE_MAPPING="";else if(this._toneMapping===me)this.material.defines.AGX_TONE_MAPPING="";else if(this._toneMapping===ge)this.material.defines.NEUTRAL_TONE_MAPPING="";else if(this._toneMapping===pe)this.material.defines.CUSTOM_TONE_MAPPING="";this.material.needsUpdate=!0}if(this.renderToScreen===!0)t.setRenderTarget(null),this._fsQuad.render(t);else{if(t.setRenderTarget(a),this.clear)t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil);this._fsQuad.render(t)}}dispose(){this.material.dispose(),this._fsQuad.dispose()}}var te=["still","low","medium","high"],Ce={high:{dpr:1.75,bloom:!0,bloomScale:1,particles:1},medium:{dpr:1,bloom:!0,bloomScale:0.4,particles:0.55},low:{dpr:1,bloom:!1,bloomScale:0,particles:0.3}};function Le({gpu:t="",coarse:a=!1,width:u=1440,memory:T=8,cores:s=8,override:m=null}={}){if(m&&te.includes(m))return m;if(/swiftshader|llvmpipe|software|basic render/i.test(t))return"still";if(a&&u<760)return"low";if(T&&T<=2)return"low";if(/apple (m\d|gpu)|nvidia|geforce|rtx|radeon rx|radeon pro/i.test(t))return"high";if(/uhd|hd graphics|mali|adreno|powervr|videocore/i.test(t))return"low";if(/intel|iris|arc|radeon(tm)? graphics|vega/i.test(t)||T<=4||s<=4)return"medium";return"high"}function Oe({slowMs:t=22,verySlowMs:a=40,window:u=90,warmup:T=45}={}){let s=[],m=T;return{sample(d,C){if(m>0)return m--,null;if(s.push(d),s.length<u)return null;let A=s.reduce((D,b)=>D+b,0)/s.length;s.length=0;let _=te.indexOf(C);if(C==="low"&&A>a)return"still";if(A>t&&_>1)return te[_-1];return null},reset(){s.length=0,m=T}}}var qe={uniforms:{tDiffuse:{value:null},uTime:{value:0},uVignette:{value:0.4},uGrain:{value:0.03}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float uTime, uVignette, uGrain; varying vec2 vUv;
    float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
    void main() {
      vec4 c = texture2D(tDiffuse, vUv);
      vec2 d = vUv - 0.5;
      c.rgb *= 1.0 - uVignette * smoothstep(0.25, 0.85, dot(d, d) * 2.2);
      c.rgb += (hash(vUv * 1000.0 + fract(uTime) * 61.0) - 0.5) * uGrain;
      gl_FragColor = c;
    }`};async function Xe(){if(document.readyState==="loading")await new Promise((t)=>document.addEventListener("DOMContentLoaded",t,{once:!0}));if(J.dataset.introState!=="loading")return;return new Promise((t)=>{addEventListener("portfolio:intro-complete",t,{once:!0}),setTimeout(t,9000)})}var Ie=()=>new Promise((t)=>requestAnimationFrame(()=>t()));async function je(t,a,u,T){let{scene:s,camera:m}=a,d=[];s.traverse((b)=>{if((b.isMesh||b.isPoints||b.isSprite)&&b.material)d.push(b)});let C=(b)=>`${b.type}|${b.name}|${b.vertexShader?.length||0}|${b.fragmentShader?.length||0}|${b.customProgramCacheKey?.()||""}`,A=new Map;for(let b of d){let R=C(b.material);if(!A.has(R))A.set(R,b)}let _=d.map((b)=>b.visible),D=t.getScissorTest();t.setScissorTest(!0),t.setScissor(0,0,1,1);try{for(let b of A.values())d.forEach((R)=>{R.visible=R===b}),t.setRenderTarget(u),t.render(s,m),t.setRenderTarget(null),await Ie();if(d.forEach((b,R)=>{b.visible=_[R]}),T)T.render(0.016),await Ie()}finally{d.forEach((b,R)=>{b.visible=_[R]}),t.setScissorTest(D),t.setScissor(0,0,t.domElement.width,t.domElement.height)}return A.size}var ze={gateway:{host:"#home .hero-visual",section:"#home",load:()=>(De("16evxax9"),import("./gateway-16evxax9.js"))}},J=document.documentElement,Pe=new URLSearchParams(location.search);function Ye(){return matchMedia("(prefers-reduced-motion: reduce)").matches||Pe.get("motion")==="off"||J.classList.contains("motion-off")}function Je(t){try{let a=t.getExtension("WEBGL_debug_renderer_info");return a?String(t.getParameter(a.UNMASKED_RENDERER_WEBGL)):String(t.getParameter(t.RENDERER))}catch{return""}}function Ze(){if(Ye())return;let t={boot:Math.round(performance.now())},a=(w)=>{t[w]=Math.round(performance.now())},u=new Ve({antialias:!0,alpha:!1,powerPreference:"high-performance"}),T=u.getContext(),s=Le({gpu:Je(T),coarse:matchMedia("(pointer: coarse)").matches,width:innerWidth,memory:navigator.deviceMemory||8,cores:navigator.hardwareConcurrency||8,override:Pe.get("tier")}),m=te.includes(Pe.get("tier"));if(J.dataset.worldTier=s,s==="still"){u.dispose();return}u.outputColorSpace=S,u.toneMapping=K,u.toneMappingExposure=1;let d=u.domElement;d.className="world-canvas",d.setAttribute("aria-hidden","true"),d.tabIndex=-1;let C=null,A=()=>{if(!C){let w=new he(u);C=w.fromScene(new Me,0.04).texture,w.dispose(),a("environment")}return C},_={tier:s,settings:Ce[s],pointer:new i,pointerTarget:new i,progress:0},D=new Map,b=Oe(),R=0,P=null,N=null,ie=null,V=null,Ee=!1,k=0,se=!1,ne=()=>{if(!P)return;let{width:w,height:y}=P.host.getBoundingClientRect();if(!w||!y)return;if(u.setPixelRatio(Math.min(devicePixelRatio||1,_.settings.dpr)),u.setSize(w,y,!1),P.world.resize(w,y,_),N){N.setPixelRatio(u.getPixelRatio()),N.setSize(w,y);let U=u.getPixelRatio()*_.settings.bloomScale;ie?.setSize(Math.max(64,Math.round(w*U)),Math.max(64,Math.round(y*U)))}},Re=()=>{if(N?.dispose(),N=null,ie=null,V=null,!P||!_.settings.bloom)return;N=new be(u),N.addPass(new _e(P.world.scene,P.world.camera));let w=P.world.bloom||{strength:0.7,radius:0.5,threshold:0.82};ie=new W(new i(256,256),w.strength,w.radius,w.threshold),N.addPass(ie),N.addPass(new Se);let y=P.world.finish;if(y)V=new Z(qe),V.uniforms.uVignette.value=y.vignette,V.uniforms.uGrain.value=y.grain,N.addPass(V)},le=(w)=>{if(w===s)return;if(s=w,J.dataset.worldTier=s,s==="still"){re(),ve(),d.remove();return}_.tier=s,_.settings=Ce[s],b.reset(),P?.world.setTier?.(_),Re(),ne()},ye=(w)=>{if(_.pointer.lerp(_.pointerTarget,Math.min(1,w*3)),P.section){let y=P.section.getBoundingClientRect();_.progress=Math.min(1,Math.max(0,-y.top/Math.max(1,y.height)))}if(P.world.update(w,_),V)V.uniforms.uTime.value+=w;if(N)N.render(w);else u.render(P.world.scene,P.world.camera)},Ae=()=>{if(k=0,!P||!se||document.hidden)return;let w=performance.now(),y=Math.min(0.05,(w-R)/1000);R=w;let U=performance.now();ye(y);let L=m?null:b.sample(Math.max(y*1000,performance.now()-U),s);if(L)le(L);if(s!=="still")k=requestAnimationFrame(Ae)},ce=()=>{if(!k&&P&&se&&Ee)R=performance.now(),k=requestAnimationFrame(Ae)},re=()=>{cancelAnimationFrame(k),k=0},ve=()=>{if(!P)return;P.host.classList.remove("world-live"),P.section?.classList.remove("world-live"),P=null};async function Ge(w){if(P?.name===w)return;let y=ze[w],U=document.querySelector(y.host);if(!U)return;let L=D.get(w);if(!L){let He=await y.load();a(`${w}:module`),L=await He.create({renderer:u,getEnvironment:A,state:_}),a(`${w}:created`);try{await u.compileAsync(L.scene,L.camera)}catch{}a(`${w}:compiled`),D.set(w,L)}if(s==="still")return;if(ve(),P={name:w,world:L,host:U,section:document.querySelector(y.section)},U.prepend(d),Re(),ne(),b.reset(),!L.warmed){if(t[`${w}:warm-programs`]=await je(u,L,N?N.readBuffer:null,N),L.warmed=!0,a(`${w}:warmed`),P?.name!==w)return}if(ye(0.016),a(`${w}:first-frame`),await Xe(),a(`${w}:intro-settled`),P?.name!==w)return;Ee=!0,requestAnimationFrame(()=>{U.classList.add("world-live"),P?.section?.classList.add("world-live"),P?.world.ignite?.(),a(`${w}:revealed`)}),ce()}let Qe=new IntersectionObserver((w)=>{w.forEach((y)=>{let U=y.target.dataset.world;if(y.isIntersecting)se=!0,Ge(U).catch((L)=>{J.dataset.worldError=String(L?.message||L).slice(0,120)}),ce();else if(P?.name===U)se=!1,re()})},{rootMargin:"80px 0px"});Object.entries(ze).forEach(([w,y])=>{let U=document.querySelector(y.section);if(!U)return;U.dataset.world=w,Qe.observe(U)}),addEventListener("pointermove",(w)=>{_.pointerTarget.set(w.clientX/innerWidth*2-1,w.clientY/innerHeight*2-1)},{passive:!0}),addEventListener("resize",ne,{passive:!0}),document.addEventListener("visibilitychange",()=>{if(!document.hidden)ce();else re()}),matchMedia("(prefers-reduced-motion: reduce)").addEventListener?.("change",(w)=>{if(w.matches)le("still")}),d.addEventListener("webglcontextlost",(w)=>{w.preventDefault(),re(),ve(),d.remove(),J.dataset.worldTier="still"}),window.__worldStage={get tier(){return s},get active(){return P?.name||null},setTier:le,timings:t,get world(){return P?.world||null}}}if(typeof window<"u"&&typeof document<"u")try{Ze()}catch(t){document.documentElement.dataset.worldError=String(t?.message||t).slice(0,120)}
