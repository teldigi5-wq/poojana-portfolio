import{T,G,C,ge,_e,xe,re,ve,ye,Se,A,x,l,i,e,r,M,c,t,z,y,d,p,a,oe,Q,N,h,Ce,_,ke,B,W,Ve,me,qe}from"./stage-g1egc7sq.js";var Le,ce,se,de=(s,n)=>{for(var[u,v,o]of Le||[])for(var m=[s],f=globalThis,S=f.document,D,b,U,w,R;b=m.pop();)if(!ce[b]&&(U=v[b])){ce[b]=1;for(w=1;w<U.length;w++)m.push(o[U[w]]);if(!n&&b!==s&&(D=S&&S.head)){if(se===void 0)se=(w=S.querySelector("meta[property=csp-nonce]"))&&(w.nonce||w.getAttribute("nonce"))||"";if(R=S.createElement("link"),R.rel="modulepreload",R.crossOrigin="",se)R.nonce=se;R.href=new f.URL(U[0],u),D.appendChild(R)}}},Ke=(s,n,u,v)=>{for(var o={},m=0;m<n.length;m++)o[n[m]]=u[m];(Le||=[]).push([s,o,n]),ce||={},de(n[v],1)};Ke(import.meta.url,["6q5vqena","45pgcyhp","dfs9n7n7","g1egc7sq","10hxdep8"],[["./stage.js",3],["./gateway-45pgcyhp.js",4,3],["./strata-dfs9n7n7.js",4,3],["./stage-g1egc7sq.js"],["./stage-10hxdep8.js",3]],0);
class pe extends z{constructor(){super();this.name="RoomEnvironment",this.position.y=-3.5;let s=new Q;s.deleteAttribute("uv");let n=new _({side:T}),u=new _,v=new B(16777215,900,28,2);v.position.set(0.418,16.199,0.3),this.add(v);let o=new a(s,n);o.position.set(-0.757,13.219,0.717),o.scale.set(31.713,28.305,28.591),this.add(o);let m=new oe(s,u,6),f=new c;f.position.set(-10.906,2.009,1.846),f.rotation.set(0,-0.195,0),f.scale.set(2.328,7.905,4.651),f.updateMatrix(),m.setMatrixAt(0,f.matrix),f.position.set(-5.607,-0.754,-0.758),f.rotation.set(0,0.994,0),f.scale.set(1.97,1.534,3.955),f.updateMatrix(),m.setMatrixAt(1,f.matrix),f.position.set(6.167,0.857,7.803),f.rotation.set(0,0.561,0),f.scale.set(3.927,6.285,3.687),f.updateMatrix(),m.setMatrixAt(2,f.matrix),f.position.set(-2.017,0.018,6.124),f.rotation.set(0,0.333,0),f.scale.set(2.002,4.566,2.064),f.updateMatrix(),m.setMatrixAt(3,f.matrix),f.position.set(2.291,-0.756,-2.621),f.rotation.set(0,-0.286,0),f.scale.set(1.546,1.552,1.496),f.updateMatrix(),m.setMatrixAt(4,f.matrix),f.position.set(-2.193,-0.369,-5.547),f.rotation.set(0,0.516,0),f.scale.set(3.875,3.487,2.986),f.updateMatrix(),m.setMatrixAt(5,f.matrix),this.add(m);let S=new a(s,K(50));S.position.set(-16.116,14.37,8.208),S.scale.set(0.1,2.428,2.739),this.add(S);let D=new a(s,K(50));D.position.set(-16.109,18.021,-8.207),D.scale.set(0.1,2.425,2.751),this.add(D);let b=new a(s,K(17));b.position.set(14.904,12.198,-1.832),b.scale.set(0.15,4.265,6.331),this.add(b);let U=new a(s,K(43));U.position.set(-0.462,8.89,14.52),U.scale.set(4.38,5.441,0.088),this.add(U);let w=new a(s,K(20));w.position.set(3.235,11.486,-12.541),w.scale.set(2.5,2,0.1),this.add(w);let R=new a(s,K(100));R.position.set(0,20,0),R.scale.set(1,0.1,1),this.add(R)}dispose(){let s=new Set;this.traverse((n)=>{if(n.isMesh)s.add(n.geometry),s.add(n.material)});for(let n of s)n.dispose()}}function K(s){return new ke({color:0,emissive:16777215,emissiveIntensity:s})}var X={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class O{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}var Xe=new W(-1,1,1,-1,0,1);class Ie extends d{constructor(){super();this.setAttribute("position",new y([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new y([0,2,0,0,2,0],2))}}var je=new Ie;class H{constructor(s){this._mesh=new a(je,s)}dispose(){this._mesh.geometry.dispose()}render(s){s.render(this._mesh,Xe)}get material(){return this._mesh.material}set material(s){this._mesh.material=s}}class Y extends O{constructor(s,n="tDiffuse"){super();if(this.textureID=n,this.uniforms=null,this.material=null,s instanceof h)this.uniforms=s.uniforms,this.material=s;else if(s)this.uniforms=N.clone(s.uniforms),this.material=new h({name:s.name!==void 0?s.name:"unspecified",defines:Object.assign({},s.defines),uniforms:this.uniforms,vertexShader:s.vertexShader,fragmentShader:s.fragmentShader});this._fsQuad=new H(this.material)}render(s,n,u){if(this.uniforms[this.textureID])this.uniforms[this.textureID].value=u.texture;if(this._fsQuad.material=this.material,this.renderToScreen)s.setRenderTarget(null),this._fsQuad.render(s);else{if(s.setRenderTarget(n),this.clear)s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil);this._fsQuad.render(s)}}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class ae extends O{constructor(s,n){super();this.scene=s,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(s,n,u){let v=s.getContext(),o=s.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let m,f;if(this.inverse)m=0,f=1;else m=1,f=0;if(o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(v.REPLACE,v.REPLACE,v.REPLACE),o.buffers.stencil.setFunc(v.ALWAYS,m,4294967295),o.buffers.stencil.setClear(f),o.buffers.stencil.setLocked(!0),s.setRenderTarget(u),this.clear)s.clear();if(s.render(this.scene,this.camera),s.setRenderTarget(n),this.clear)s.clear();s.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(v.EQUAL,1,4294967295),o.buffers.stencil.setOp(v.KEEP,v.KEEP,v.KEEP),o.buffers.stencil.setLocked(!0)}}class Me extends O{constructor(){super();this.needsSwap=!1}render(s){s.state.buffers.stencil.setLocked(!1),s.state.buffers.stencil.setTest(!1)}}class we{constructor(s,n){if(this.renderer=s,this._pixelRatio=s.getPixelRatio(),n===void 0){let u=s.getSize(new i);this._width=u.width,this._height=u.height,n=new M(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:A}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Y(X),this.copyPass.material.blending=G,this.timer=new Ve}swapBuffers(){let s=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=s}addPass(s){this.passes.push(s),s.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(s,n){this.passes.splice(n,0,s),s.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(s){let n=this.passes.indexOf(s);if(n!==-1)this.passes.splice(n,1)}isLastEnabledPass(s){for(let n=s+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(s){if(this.timer.update(),s===void 0)s=this.timer.getDelta();let n=this.renderer.getRenderTarget(),u=!1;for(let v=0,o=this.passes.length;v<o;v++){let m=this.passes[v];if(m.enabled===!1)continue;if(m.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(v),m.render(this.renderer,this.writeBuffer,this.readBuffer,s,u),m.needsSwap){if(u){let f=this.renderer.getContext(),S=this.renderer.state.buffers.stencil;S.setFunc(f.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,s),S.setFunc(f.EQUAL,1,4294967295)}this.swapBuffers()}if(ae!==void 0){if(m instanceof ae)u=!0;else if(m instanceof Me)u=!1}}this.renderer.setRenderTarget(n)}reset(s){if(s===void 0){let n=this.renderer.getSize(new i);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,s=this.renderTarget1.clone(),s.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=s,this.renderTarget2=s.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(s,n){this._width=s,this._height=n;let u=this._width*this._pixelRatio,v=this._height*this._pixelRatio;this.renderTarget1.setSize(u,v),this.renderTarget2.setSize(u,v);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(u,v)}setPixelRatio(s){this._pixelRatio=s,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Te extends O{constructor(s,n,u=null,v=null,o=null){super();this.scene=s,this.camera=n,this.overrideMaterial=u,this.clearColor=v,this.clearAlpha=o,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new t}render(s,n,u){let v=s.autoClear;s.autoClear=!1;let o,m;if(this.overrideMaterial!==null)m=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial;if(this.clearColor!==null)s.getClearColor(this._oldClearColor),s.setClearColor(this.clearColor,s.getClearAlpha());if(this.clearAlpha!==null)o=s.getClearAlpha(),s.setClearAlpha(this.clearAlpha);if(this.clearDepth==!0)s.clearDepth();if(s.setRenderTarget(this.renderToScreen?null:u),this.clear===!0)s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil);if(s.render(this.scene,this.camera),this.clearColor!==null)s.setClearColor(this._oldClearColor);if(this.clearAlpha!==null)s.setClearAlpha(o);if(this.overrideMaterial!==null)this.scene.overrideMaterial=m;s.autoClear=v}}var Oe={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new t(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class k extends O{constructor(s,n=1,u,v){super();this.strength=n,this.radius=u,this.threshold=v,this.resolution=s!==void 0?new i(s.x,s.y):new i(256,256),this.clearColor=new t(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),m=Math.round(this.resolution.y/2);this.renderTargetBright=new M(o,m,{type:A,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let b=0;b<this.nMips;b++){let U=new M(o,m,{type:A,depthBuffer:!1});U.texture.name="UnrealBloomPass.h"+b,U.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(U);let w=new M(o,m,{type:A,depthBuffer:!1});w.texture.name="UnrealBloomPass.v"+b,w.texture.generateMipmaps=!1,this.renderTargetsVertical.push(w),o=Math.round(o/2),m=Math.round(m/2)}let f=Oe;this.highPassUniforms=N.clone(f.uniforms),this.highPassUniforms.luminosityThreshold.value=v,this.highPassUniforms.smoothWidth.value=0.01,this.materialHighPassFilter=new h({uniforms:this.highPassUniforms,vertexShader:f.vertexShader,fragmentShader:f.fragmentShader}),this.separableBlurMaterials=[];let S=[6,10,14,18,22];o=Math.round(this.resolution.x/2),m=Math.round(this.resolution.y/2);for(let b=0;b<this.nMips;b++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(S[b])),this.separableBlurMaterials[b].uniforms.invSize.value=new i(1/o,1/m),o=Math.round(o/2),m=Math.round(m/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=n,this.compositeMaterial.uniforms.bloomRadius.value=0.1;let D=[1,0.8,0.6,0.4,0.2];this.compositeMaterial.uniforms.bloomFactors.value=D,this.bloomTintColors=[new e(1,1,1),new e(1,1,1),new e(1,1,1),new e(1,1,1),new e(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=N.clone(X.uniforms),this.blendMaterial=new h({uniforms:this.copyUniforms,vertexShader:X.vertexShader,fragmentShader:X.fragmentShader,premultipliedAlpha:!0,blending:C,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new t,this._oldClearAlpha=1,this._basic=new p,this._fsQuad=new H(null)}dispose(){for(let s=0;s<this.renderTargetsHorizontal.length;s++)this.renderTargetsHorizontal[s].dispose();for(let s=0;s<this.renderTargetsVertical.length;s++)this.renderTargetsVertical[s].dispose();this.renderTargetBright.dispose();for(let s=0;s<this.separableBlurMaterials.length;s++)this.separableBlurMaterials[s].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(s,n){let u=Math.round(s/2),v=Math.round(n/2);this.renderTargetBright.setSize(u,v);for(let o=0;o<this.nMips;o++)this.renderTargetsHorizontal[o].setSize(u,v),this.renderTargetsVertical[o].setSize(u,v),this.separableBlurMaterials[o].uniforms.invSize.value=new i(1/u,1/v),u=Math.round(u/2),v=Math.round(v/2)}render(s,n,u,v,o){s.getClearColor(this._oldClearColor),this._oldClearAlpha=s.getClearAlpha();let m=s.autoClear;if(s.autoClear=!1,s.setClearColor(this.clearColor,0),o)s.state.buffers.stencil.setTest(!1);if(this.renderToScreen)this._fsQuad.material=this._basic,this._basic.map=u.texture,s.setRenderTarget(null),s.clear(),this._fsQuad.render(s);this.highPassUniforms.tDiffuse.value=u.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,s.setRenderTarget(this.renderTargetBright),s.clear(),this._fsQuad.render(s);let f=this.renderTargetBright;for(let S=0;S<this.nMips;S++)this._fsQuad.material=this.separableBlurMaterials[S],this.separableBlurMaterials[S].uniforms.colorTexture.value=f.texture,this.separableBlurMaterials[S].uniforms.direction.value=k.BlurDirectionX,s.setRenderTarget(this.renderTargetsHorizontal[S]),s.clear(),this._fsQuad.render(s),this.separableBlurMaterials[S].uniforms.colorTexture.value=this.renderTargetsHorizontal[S].texture,this.separableBlurMaterials[S].uniforms.direction.value=k.BlurDirectionY,s.setRenderTarget(this.renderTargetsVertical[S]),s.clear(),this._fsQuad.render(s),f=this.renderTargetsVertical[S];if(this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,s.setRenderTarget(this.renderTargetsHorizontal[0]),s.clear(),this._fsQuad.render(s),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,o)s.state.buffers.stencil.setTest(!0);if(this.renderToScreen)s.setRenderTarget(null),this._fsQuad.render(s);else s.setRenderTarget(u),this._fsQuad.render(s);s.setClearColor(this._oldClearColor,this._oldClearAlpha),s.autoClear=m}_getSeparableBlurMaterial(s){let n=[],u=s/3;for(let m=0;m<s;m++)n.push(0.39894*Math.exp(-0.5*m*m/(u*u))/u);let v=[],o=[];for(let m=1;m<s;m+=2){let f=n[m],S=m+1<s?n[m+1]:0,D=f+S;v.push((m*f+(m+1)*S)/D),o.push(D)}return new h({defines:{KERNEL_PAIRS:v.length},uniforms:{colorTexture:{value:null},invSize:{value:new i(0.5,0.5)},direction:{value:new i(0.5,0.5)},centerWeight:{value:n[0]},gaussianOffsets:{value:v},gaussianWeights:{value:o}},vertexShader:`

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

				}`})}_getCompositeMaterial(s){return new h({defines:{NUM_MIPS:s},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}k.BlurDirectionX=new i(1,0);k.BlurDirectionY=new i(0,1);var J={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class be extends O{constructor(){super();this.isOutputPass=!0,this.uniforms=N.clone(J.uniforms),this.material=new Ce({name:J.name,uniforms:this.uniforms,vertexShader:J.vertexShader,fragmentShader:J.fragmentShader}),this._fsQuad=new H(this.material),this._outputColorSpace=null,this._toneMapping=null}render(s,n,u){if(this.uniforms.tDiffuse.value=u.texture,this.uniforms.toneMappingExposure.value=s.toneMappingExposure,this._outputColorSpace!==s.outputColorSpace||this._toneMapping!==s.toneMapping){if(this._outputColorSpace=s.outputColorSpace,this._toneMapping=s.toneMapping,this.material.defines={},r.getTransfer(this._outputColorSpace)===l)this.material.defines.SRGB_TRANSFER="";if(this._toneMapping===ge)this.material.defines.LINEAR_TONE_MAPPING="";else if(this._toneMapping===_e)this.material.defines.REINHARD_TONE_MAPPING="";else if(this._toneMapping===xe)this.material.defines.CINEON_TONE_MAPPING="";else if(this._toneMapping===re)this.material.defines.ACES_FILMIC_TONE_MAPPING="";else if(this._toneMapping===ye)this.material.defines.AGX_TONE_MAPPING="";else if(this._toneMapping===Se)this.material.defines.NEUTRAL_TONE_MAPPING="";else if(this._toneMapping===ve)this.material.defines.CUSTOM_TONE_MAPPING="";this.material.needsUpdate=!0}if(this.renderToScreen===!0)s.setRenderTarget(null),this._fsQuad.render(s);else{if(s.setRenderTarget(n),this.clear)s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil);this._fsQuad.render(s)}}dispose(){this.material.dispose(),this._fsQuad.dispose()}}var Z=["still","low","medium","high"],Pe={high:{dpr:1.75,bloom:!0,bloomScale:1,particles:1},medium:{dpr:1,bloom:!0,bloomScale:0.4,particles:0.55},low:{dpr:1,bloom:!1,bloomScale:0,particles:0.3}};function ze({gpu:s="",coarse:n=!1,width:u=1440,memory:v=8,cores:o=8,override:m=null}={}){if(m&&Z.includes(m))return m;if(/swiftshader|llvmpipe|software|basic render/i.test(s))return"still";if(n&&u<760)return"low";if(v&&v<=2)return"low";if(/apple (m\d|gpu)|nvidia|geforce|rtx|radeon rx|radeon pro/i.test(s))return"high";if(/uhd|hd graphics|mali|adreno|powervr|videocore/i.test(s))return"low";if(/intel|iris|arc|radeon(tm)? graphics|vega/i.test(s)||v<=4||o<=4)return"medium";return"high"}function Ge({slowMs:s=22,verySlowMs:n=40,window:u=90,warmup:v=45}={}){let o=[],m=v;return{sample(f,S){if(m>0)return m--,null;if(o.push(f),o.length<u)return null;let D=o.reduce((U,w)=>U+w,0)/o.length;o.length=0;let b=Z.indexOf(S);if(S==="low"&&D>n)return"still";if(D>s&&b>1)return Z[b-1];return null},reset(){o.length=0,m=v}}}var Ye={uniforms:{tDiffuse:{value:null},uTime:{value:0},uVignette:{value:0.4},uGrain:{value:0.03}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float uTime, uVignette, uGrain; varying vec2 vUv;
    float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
    void main() {
      vec4 c = texture2D(tDiffuse, vUv);
      vec2 d = vUv - 0.5;
      c.rgb *= 1.0 - uVignette * smoothstep(0.25, 0.85, dot(d, d) * 2.2);
      c.rgb += (hash(vUv * 1000.0 + fract(uTime) * 61.0) - 0.5) * uGrain;
      gl_FragColor = c;
    }`};async function Je(){if(document.readyState==="loading")await new Promise((s)=>document.addEventListener("DOMContentLoaded",s,{once:!0}));if(j.dataset.introState!=="loading")return;return new Promise((s)=>{addEventListener("portfolio:intro-complete",s,{once:!0}),setTimeout(s,9000)})}var Qe=()=>new Promise((s)=>requestAnimationFrame(()=>s()));async function Ze(s,n,u,v){let{scene:o,camera:m}=n,f=[];o.traverse((w)=>{if((w.isMesh||w.isPoints||w.isSprite)&&w.material)f.push(w)});let S=(w)=>`${w.type}|${w.name}|${w.vertexShader?.length||0}|${w.fragmentShader?.length||0}|${w.customProgramCacheKey?.()||""}`,D=new Map;for(let w of f){let R=S(w.material);if(!D.has(R))D.set(R,w)}let b=f.map((w)=>w.visible),U=s.getScissorTest();s.setScissorTest(!0),s.setScissor(0,0,1,1);try{for(let w of D.values())f.forEach((R)=>{R.visible=R===w}),s.setRenderTarget(u),s.render(o,m),s.setRenderTarget(null),await Qe();if(f.forEach((w,R)=>{w.visible=b[R]}),v)v.render(0.016),await Qe()}finally{f.forEach((w,R)=>{w.visible=b[R]}),s.setScissorTest(U),s.setScissor(0,0,s.domElement.width,s.domElement.height)}return D.size}var Ee={gateway:{host:"#home .hero-visual",section:"#home",load:()=>(de("45pgcyhp"),import("./gateway-45pgcyhp.js"))},strata:{host:"#dimension .system-object",section:"#dimension",load:()=>(de("dfs9n7n7"),import("./strata-dfs9n7n7.js")),prefetch:!0}},j=document.documentElement,Re=new URLSearchParams(location.search);function et(){return matchMedia("(prefers-reduced-motion: reduce)").matches||Re.get("motion")==="off"||j.classList.contains("motion-off")}function tt(s){try{let n=s.getExtension("WEBGL_debug_renderer_info");return n?String(s.getParameter(n.UNMASKED_RENDERER_WEBGL)):String(s.getParameter(s.RENDERER))}catch{return""}}function it(){if(et())return;let s={boot:Math.round(performance.now())},n=(g)=>{s[g]=Math.round(performance.now())},u=new qe({antialias:!0,alpha:!1,powerPreference:"high-performance"}),v=u.getContext(),o=ze({gpu:tt(v),coarse:matchMedia("(pointer: coarse)").matches,width:innerWidth,memory:navigator.deviceMemory||8,cores:navigator.hardwareConcurrency||8,override:Re.get("tier")}),m=Z.includes(Re.get("tier"));if(j.dataset.worldTier=o,o==="still"){u.dispose();return}u.outputColorSpace=x,u.toneMapping=re,u.toneMappingExposure=1;let f=u.domElement;f.className="world-canvas",f.setAttribute("aria-hidden","true"),f.tabIndex=-1;let S=null,D=()=>{if(!S){let g=new me(u);S=g.fromScene(new pe,0.04).texture,g.dispose(),n("environment")}return S},b={tier:o,settings:Pe[o],pointer:new i,pointerTarget:new i,progress:0},U=new Map,w=Ge(),R=0,P=null,L=null,ee=null,V=null,Ae=!1,q=0,te=!1,ne=()=>{if(!P)return;let{width:g,height:E}=P.host.getBoundingClientRect();if(!g||!E)return;if(u.setPixelRatio(Math.min(devicePixelRatio||1,b.settings.dpr)),u.setSize(g,E,!1),P.world.resize(g,E,b),L){L.setPixelRatio(u.getPixelRatio()),L.setSize(g,E);let F=u.getPixelRatio()*b.settings.bloomScale;ee?.setSize(Math.max(64,Math.round(g*F)),Math.max(64,Math.round(E*F)))}},Fe=()=>{if(L?.dispose(),L=null,ee=null,V=null,!P||!b.settings.bloom)return;L=new we(u),L.addPass(new Te(P.world.scene,P.world.camera));let g=P.world.bloom||{strength:0.7,radius:0.5,threshold:0.82};ee=new k(new i(256,256),g.strength,g.radius,g.threshold),L.addPass(ee),L.addPass(new be);let E=P.world.finish;if(E)V=new Y(Ye),V.uniforms.uVignette.value=E.vignette,V.uniforms.uGrain.value=E.grain,L.addPass(V)},le=(g)=>{if(g===o)return;if(o=g,j.dataset.worldTier=o,o==="still"){ie(),he(),f.remove();return}if(b.tier=o,b.settings=Pe[o],w.reset(),P)P.world.setTier?.(b),P.world.tierApplied=o;Fe(),ne()},Be=(g)=>{if(b.pointer.lerp(b.pointerTarget,Math.min(1,g*3)),P.section){let E=P.section.getBoundingClientRect();b.progress=Math.min(1,Math.max(0,-E.top/Math.max(1,E.height)))}if(P.world.update(g,b),V)V.uniforms.uTime.value+=g;if(L)L.render(g);else u.render(P.world.scene,P.world.camera)},De=()=>{if(q=0,!P||!te||document.hidden)return;let g=performance.now(),E=Math.min(0.05,(g-R)/1000);R=g;let F=performance.now();Be(E);let I=m?null:w.sample(Math.max(E*1000,performance.now()-F),o);if(I)le(I);if(o!=="still")q=requestAnimationFrame(De)},ue=()=>{if(!q&&P&&te&&Ae)R=performance.now(),q=requestAnimationFrame(De)},ie=()=>{cancelAnimationFrame(q),q=0},he=()=>{if(!P)return;P.host.classList.remove("world-live"),P.section?.classList.remove("world-live"),P=null},fe=new Map;function Ue(g){if(!fe.has(g))fe.set(g,(async()=>{let E=await Ee[g].load();n(`${g}:module`);let F=await E.create({renderer:u,getEnvironment:D,state:b});n(`${g}:created`);try{await u.compileAsync(F.scene,F.camera)}catch{}return n(`${g}:compiled`),F.tierApplied=o,U.set(g,F),F})());return fe.get(g)}async function He(g){if(P?.name===g)return;let E=Ee[g],F=document.querySelector(E.host);if(!F)return;let I=await Ue(g);if(I.tierApplied!==o)I.setTier?.(b),I.tierApplied=o;if(o==="still")return;if(he(),P={name:g,world:I,host:F,section:document.querySelector(E.section)},F.prepend(f),Fe(),ne(),w.reset(),!I.warmed){if(s[`${g}:warm-programs`]=await Ze(u,I,L?L.readBuffer:null,L),I.warmed=!0,n(`${g}:warmed`),P?.name!==g)return}if(Be(0.016),n(`${g}:first-frame`),await Je(),n(`${g}:intro-settled`),P?.name!==g)return;Ae=!0,requestAnimationFrame(()=>{F.classList.add("world-live"),P?.section?.classList.add("world-live"),P?.world.ignite?.(),n(`${g}:revealed`)}),ue()}let We=new IntersectionObserver((g)=>{g.forEach((E)=>{let F=E.target.dataset.world;if(E.isIntersecting)te=!0,He(F).catch((I)=>{j.dataset.worldError=String(I?.message||I).slice(0,120)}),ue();else if(P?.name===F)te=!1,ie()})},{rootMargin:"80px 0px"}),$e=window.requestIdleCallback?(g)=>requestIdleCallback(g,{timeout:2500}):(g)=>setTimeout(g,300),Ne=new IntersectionObserver((g)=>{g.forEach((E)=>{if(!E.isIntersecting)return;Ne.unobserve(E.target),$e(()=>{if(o!=="still")Ue(E.target.dataset.world).catch(()=>{})})})},{rootMargin:"150% 0px"});Object.entries(Ee).forEach(([g,E])=>{let F=document.querySelector(E.section);if(!F)return;if(F.dataset.world=g,We.observe(F),E.prefetch)Ne.observe(F)}),addEventListener("pointermove",(g)=>{b.pointerTarget.set(g.clientX/innerWidth*2-1,g.clientY/innerHeight*2-1)},{passive:!0}),addEventListener("resize",ne,{passive:!0}),document.addEventListener("visibilitychange",()=>{if(!document.hidden)ue();else ie()}),matchMedia("(prefers-reduced-motion: reduce)").addEventListener?.("change",(g)=>{if(g.matches)le("still")}),f.addEventListener("webglcontextlost",(g)=>{g.preventDefault(),ie(),he(),f.remove(),j.dataset.worldTier="still"}),window.__worldStage={get tier(){return o},get active(){return P?.name||null},setTier:le,timings:s,get world(){return P?.world||null}}}if(typeof window<"u"&&typeof document<"u")try{it()}catch(s){document.documentElement.dataset.worldError=String(s?.message||s).slice(0,120)}
