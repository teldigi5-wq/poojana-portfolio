import{y,B,V,R,de,fe,pe,W,me,ge,_e,S,g,o,n,e,s,_,l,t,F,m,h,v,r,Q,q,z,u,Ae,f,Ue,ne,L,ze,ue,He}from"./stage-vdfvqjfm.js";var Oe,Me,oe,we=(i,c)=>{for(var[d,w,a]of Oe||[])for(var x=[i],p=globalThis,C=p.document,U,b,N,T,D;b=x.pop();)if(!Me[b]&&(N=w[b])){Me[b]=1;for(T=1;T<N.length;T++)x.push(a[N[T]]);if(!c&&b!==i&&(U=C&&C.head)){if(oe===void 0)oe=(T=C.querySelector("meta[property=csp-nonce]"))&&(T.nonce||T.getAttribute("nonce"))||"";if(D=C.createElement("link"),D.rel="modulepreload",D.crossOrigin="",oe)D.nonce=oe;D.href=new p.URL(N[0],d),U.appendChild(D)}}},Xe=(i,c,d,w)=>{for(var a={},x=0;x<c.length;x++)a[c[x]]=d[x];(Oe||=[]).push([i,a,c]),Me||={},we(c[w],1)};Xe(import.meta.url,["mqgn54k4","pxh6qzdh","gverqetr","vdfvqjfm"],[["./stage.js",3],["./temple-film-pxh6qzdh.js",3],["./strata-gverqetr.js",3],["./stage-vdfvqjfm.js"]],0);
class Te extends F{constructor(){super();this.name="RoomEnvironment",this.position.y=-3.5;let i=new q;i.deleteAttribute("uv");let c=new f({side:y}),d=new f,w=new ne(16777215,900,28,2);w.position.set(0.418,16.199,0.3),this.add(w);let a=new r(i,c);a.position.set(-0.757,13.219,0.717),a.scale.set(31.713,28.305,28.591),this.add(a);let x=new Q(i,d,6),p=new l;p.position.set(-10.906,2.009,1.846),p.rotation.set(0,-0.195,0),p.scale.set(2.328,7.905,4.651),p.updateMatrix(),x.setMatrixAt(0,p.matrix),p.position.set(-5.607,-0.754,-0.758),p.rotation.set(0,0.994,0),p.scale.set(1.97,1.534,3.955),p.updateMatrix(),x.setMatrixAt(1,p.matrix),p.position.set(6.167,0.857,7.803),p.rotation.set(0,0.561,0),p.scale.set(3.927,6.285,3.687),p.updateMatrix(),x.setMatrixAt(2,p.matrix),p.position.set(-2.017,0.018,6.124),p.rotation.set(0,0.333,0),p.scale.set(2.002,4.566,2.064),p.updateMatrix(),x.setMatrixAt(3,p.matrix),p.position.set(2.291,-0.756,-2.621),p.rotation.set(0,-0.286,0),p.scale.set(1.546,1.552,1.496),p.updateMatrix(),x.setMatrixAt(4,p.matrix),p.position.set(-2.193,-0.369,-5.547),p.rotation.set(0,0.516,0),p.scale.set(3.875,3.487,2.986),p.updateMatrix(),x.setMatrixAt(5,p.matrix),this.add(x);let C=new r(i,j(50));C.position.set(-16.116,14.37,8.208),C.scale.set(0.1,2.428,2.739),this.add(C);let U=new r(i,j(50));U.position.set(-16.109,18.021,-8.207),U.scale.set(0.1,2.425,2.751),this.add(U);let b=new r(i,j(17));b.position.set(14.904,12.198,-1.832),b.scale.set(0.15,4.265,6.331),this.add(b);let N=new r(i,j(43));N.position.set(-0.462,8.89,14.52),N.scale.set(4.38,5.441,0.088),this.add(N);let T=new r(i,j(20));T.position.set(3.235,11.486,-12.541),T.scale.set(2.5,2,0.1),this.add(T);let D=new r(i,j(100));D.position.set(0,20,0),D.scale.set(1,0.1,1),this.add(D)}dispose(){let i=new Set;this.traverse((c)=>{if(c.isMesh)i.add(c.geometry),i.add(c.material)});for(let c of i)c.dispose()}}function j(i){return new Ue({color:0,emissive:16777215,emissiveIntensity:i})}var Y={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class G{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}var je=new L(-1,1,1,-1,0,1);class Ge extends h{constructor(){super();this.setAttribute("position",new m([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new m([0,2,0,0,2,0],2))}}var Ye=new Ge;class k{constructor(i){this._mesh=new r(Ye,i)}dispose(){this._mesh.geometry.dispose()}render(i){i.render(this._mesh,je)}get material(){return this._mesh.material}set material(i){this._mesh.material=i}}class Z extends G{constructor(i,c="tDiffuse"){super();if(this.textureID=c,this.uniforms=null,this.material=null,i instanceof u)this.uniforms=i.uniforms,this.material=i;else if(i)this.uniforms=z.clone(i.uniforms),this.material=new u({name:i.name!==void 0?i.name:"unspecified",defines:Object.assign({},i.defines),uniforms:this.uniforms,vertexShader:i.vertexShader,fragmentShader:i.fragmentShader});this._fsQuad=new k(this.material)}render(i,c,d){if(this.uniforms[this.textureID])this.uniforms[this.textureID].value=d.texture;if(this._fsQuad.material=this.material,this.renderToScreen)i.setRenderTarget(null),this._fsQuad.render(i);else{if(i.setRenderTarget(c),this.clear)i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil);this._fsQuad.render(i)}}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class ae extends G{constructor(i,c){super();this.scene=i,this.camera=c,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(i,c,d){let w=i.getContext(),a=i.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let x,p;if(this.inverse)x=0,p=1;else x=1,p=0;if(a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(w.REPLACE,w.REPLACE,w.REPLACE),a.buffers.stencil.setFunc(w.ALWAYS,x,4294967295),a.buffers.stencil.setClear(p),a.buffers.stencil.setLocked(!0),i.setRenderTarget(d),this.clear)i.clear();if(i.render(this.scene,this.camera),i.setRenderTarget(c),this.clear)i.clear();i.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.color.setMask(!0),a.buffers.depth.setMask(!0),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(w.EQUAL,1,4294967295),a.buffers.stencil.setOp(w.KEEP,w.KEEP,w.KEEP),a.buffers.stencil.setLocked(!0)}}class be extends G{constructor(){super();this.needsSwap=!1}render(i){i.state.buffers.stencil.setLocked(!1),i.state.buffers.stencil.setTest(!1)}}class Se{constructor(i,c){if(this.renderer=i,this._pixelRatio=i.getPixelRatio(),c===void 0){let d=i.getSize(new n);this._width=d.width,this._height=d.height,c=new _(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:S}),c.texture.name="EffectComposer.rt1"}else this._width=c.width,this._height=c.height;this.renderTarget1=c,this.renderTarget2=c.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Z(Y),this.copyPass.material.blending=B,this.timer=new ze}swapBuffers(){let i=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=i}addPass(i){this.passes.push(i),i.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(i,c){this.passes.splice(c,0,i),i.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(i){let c=this.passes.indexOf(i);if(c!==-1)this.passes.splice(c,1)}isLastEnabledPass(i){for(let c=i+1;c<this.passes.length;c++)if(this.passes[c].enabled)return!1;return!0}render(i){if(this.timer.update(),i===void 0)i=this.timer.getDelta();let c=this.renderer.getRenderTarget(),d=!1;for(let w=0,a=this.passes.length;w<a;w++){let x=this.passes[w];if(x.enabled===!1)continue;if(x.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(w),x.render(this.renderer,this.writeBuffer,this.readBuffer,i,d),x.needsSwap){if(d){let p=this.renderer.getContext(),C=this.renderer.state.buffers.stencil;C.setFunc(p.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,i),C.setFunc(p.EQUAL,1,4294967295)}this.swapBuffers()}if(ae!==void 0){if(x instanceof ae)d=!0;else if(x instanceof be)d=!1}}this.renderer.setRenderTarget(c)}reset(i){if(i===void 0){let c=this.renderer.getSize(new n);this._pixelRatio=this.renderer.getPixelRatio(),this._width=c.width,this._height=c.height,i=this.renderTarget1.clone(),i.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=i,this.renderTarget2=i.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(i,c){this._width=i,this._height=c;let d=this._width*this._pixelRatio,w=this._height*this._pixelRatio;this.renderTarget1.setSize(d,w),this.renderTarget2.setSize(d,w);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(d,w)}setPixelRatio(i){this._pixelRatio=i,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Ce extends G{constructor(i,c,d=null,w=null,a=null){super();this.scene=i,this.camera=c,this.overrideMaterial=d,this.clearColor=w,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new t}render(i,c,d){let w=i.autoClear;i.autoClear=!1;let a,x;if(this.overrideMaterial!==null)x=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial;if(this.clearColor!==null)i.getClearColor(this._oldClearColor),i.setClearColor(this.clearColor,i.getClearAlpha());if(this.clearAlpha!==null)a=i.getClearAlpha(),i.setClearAlpha(this.clearAlpha);if(this.clearDepth==!0)i.clearDepth();if(i.setRenderTarget(this.renderToScreen?null:d),this.clear===!0)i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil);if(i.render(this.scene,this.camera),this.clearColor!==null)i.setClearColor(this._oldClearColor);if(this.clearAlpha!==null)i.setClearAlpha(a);if(this.overrideMaterial!==null)this.scene.overrideMaterial=x;i.autoClear=w}}var Ve={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new t(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class K extends G{constructor(i,c=1,d,w){super();this.strength=c,this.radius=d,this.threshold=w,this.resolution=i!==void 0?new n(i.x,i.y):new n(256,256),this.clearColor=new t(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let a=Math.round(this.resolution.x/2),x=Math.round(this.resolution.y/2);this.renderTargetBright=new _(a,x,{type:S,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let b=0;b<this.nMips;b++){let N=new _(a,x,{type:S,depthBuffer:!1});N.texture.name="UnrealBloomPass.h"+b,N.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(N);let T=new _(a,x,{type:S,depthBuffer:!1});T.texture.name="UnrealBloomPass.v"+b,T.texture.generateMipmaps=!1,this.renderTargetsVertical.push(T),a=Math.round(a/2),x=Math.round(x/2)}let p=Ve;this.highPassUniforms=z.clone(p.uniforms),this.highPassUniforms.luminosityThreshold.value=w,this.highPassUniforms.smoothWidth.value=0.01,this.materialHighPassFilter=new u({uniforms:this.highPassUniforms,vertexShader:p.vertexShader,fragmentShader:p.fragmentShader}),this.separableBlurMaterials=[];let C=[6,10,14,18,22];a=Math.round(this.resolution.x/2),x=Math.round(this.resolution.y/2);for(let b=0;b<this.nMips;b++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(C[b])),this.separableBlurMaterials[b].uniforms.invSize.value=new n(1/a,1/x),a=Math.round(a/2),x=Math.round(x/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=c,this.compositeMaterial.uniforms.bloomRadius.value=0.1;let U=[1,0.8,0.6,0.4,0.2];this.compositeMaterial.uniforms.bloomFactors.value=U,this.bloomTintColors=[new e(1,1,1),new e(1,1,1),new e(1,1,1),new e(1,1,1),new e(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=z.clone(Y.uniforms),this.blendMaterial=new u({uniforms:this.copyUniforms,vertexShader:Y.vertexShader,fragmentShader:Y.fragmentShader,premultipliedAlpha:!0,blending:V,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new t,this._oldClearAlpha=1,this._basic=new v,this._fsQuad=new k(null)}dispose(){for(let i=0;i<this.renderTargetsHorizontal.length;i++)this.renderTargetsHorizontal[i].dispose();for(let i=0;i<this.renderTargetsVertical.length;i++)this.renderTargetsVertical[i].dispose();this.renderTargetBright.dispose();for(let i=0;i<this.separableBlurMaterials.length;i++)this.separableBlurMaterials[i].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(i,c){let d=Math.round(i/2),w=Math.round(c/2);this.renderTargetBright.setSize(d,w);for(let a=0;a<this.nMips;a++)this.renderTargetsHorizontal[a].setSize(d,w),this.renderTargetsVertical[a].setSize(d,w),this.separableBlurMaterials[a].uniforms.invSize.value=new n(1/d,1/w),d=Math.round(d/2),w=Math.round(w/2)}render(i,c,d,w,a){i.getClearColor(this._oldClearColor),this._oldClearAlpha=i.getClearAlpha();let x=i.autoClear;if(i.autoClear=!1,i.setClearColor(this.clearColor,0),a)i.state.buffers.stencil.setTest(!1);if(this.renderToScreen)this._fsQuad.material=this._basic,this._basic.map=d.texture,i.setRenderTarget(null),i.clear(),this._fsQuad.render(i);this.highPassUniforms.tDiffuse.value=d.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,i.setRenderTarget(this.renderTargetBright),i.clear(),this._fsQuad.render(i);let p=this.renderTargetBright;for(let C=0;C<this.nMips;C++)this._fsQuad.material=this.separableBlurMaterials[C],this.separableBlurMaterials[C].uniforms.colorTexture.value=p.texture,this.separableBlurMaterials[C].uniforms.direction.value=K.BlurDirectionX,i.setRenderTarget(this.renderTargetsHorizontal[C]),i.clear(),this._fsQuad.render(i),this.separableBlurMaterials[C].uniforms.colorTexture.value=this.renderTargetsHorizontal[C].texture,this.separableBlurMaterials[C].uniforms.direction.value=K.BlurDirectionY,i.setRenderTarget(this.renderTargetsVertical[C]),i.clear(),this._fsQuad.render(i),p=this.renderTargetsVertical[C];if(this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,i.setRenderTarget(this.renderTargetsHorizontal[0]),i.clear(),this._fsQuad.render(i),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a)i.state.buffers.stencil.setTest(!0);if(this.renderToScreen)i.setRenderTarget(null),this._fsQuad.render(i);else i.setRenderTarget(d),this._fsQuad.render(i);i.setClearColor(this._oldClearColor,this._oldClearAlpha),i.autoClear=x}_getSeparableBlurMaterial(i){let c=[],d=i/3;for(let x=0;x<i;x++)c.push(0.39894*Math.exp(-0.5*x*x/(d*d))/d);let w=[],a=[];for(let x=1;x<i;x+=2){let p=c[x],C=x+1<i?c[x+1]:0,U=p+C;w.push((x*p+(x+1)*C)/U),a.push(U)}return new u({defines:{KERNEL_PAIRS:w.length},uniforms:{colorTexture:{value:null},invSize:{value:new n(0.5,0.5)},direction:{value:new n(0.5,0.5)},centerWeight:{value:c[0]},gaussianOffsets:{value:w},gaussianWeights:{value:a}},vertexShader:`

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

				}`})}_getCompositeMaterial(i){return new u({defines:{NUM_MIPS:i},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}K.BlurDirectionX=new n(1,0);K.BlurDirectionY=new n(0,1);var ee={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class Pe extends G{constructor(){super();this.isOutputPass=!0,this.uniforms=z.clone(ee.uniforms),this.material=new Ae({name:ee.name,uniforms:this.uniforms,vertexShader:ee.vertexShader,fragmentShader:ee.fragmentShader}),this._fsQuad=new k(this.material),this._outputColorSpace=null,this._toneMapping=null}render(i,c,d){if(this.uniforms.tDiffuse.value=d.texture,this.uniforms.toneMappingExposure.value=i.toneMappingExposure,this._outputColorSpace!==i.outputColorSpace||this._toneMapping!==i.toneMapping){if(this._outputColorSpace=i.outputColorSpace,this._toneMapping=i.toneMapping,this.material.defines={},s.getTransfer(this._outputColorSpace)===o)this.material.defines.SRGB_TRANSFER="";if(this._toneMapping===de)this.material.defines.LINEAR_TONE_MAPPING="";else if(this._toneMapping===fe)this.material.defines.REINHARD_TONE_MAPPING="";else if(this._toneMapping===pe)this.material.defines.CINEON_TONE_MAPPING="";else if(this._toneMapping===W)this.material.defines.ACES_FILMIC_TONE_MAPPING="";else if(this._toneMapping===ge)this.material.defines.AGX_TONE_MAPPING="";else if(this._toneMapping===_e)this.material.defines.NEUTRAL_TONE_MAPPING="";else if(this._toneMapping===me)this.material.defines.CUSTOM_TONE_MAPPING="";this.material.needsUpdate=!0}if(this.renderToScreen===!0)i.setRenderTarget(null),this._fsQuad.render(i);else{if(i.setRenderTarget(c),this.clear)i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil);this._fsQuad.render(i)}}dispose(){this.material.dispose(),this._fsQuad.dispose()}}var te=["still","low","medium","high"],Ee={high:{dpr:1.75,bloom:!0,bloomScale:1,particles:1},medium:{dpr:1,bloom:!0,bloomScale:0.4,particles:0.55},low:{dpr:1,bloom:!1,bloomScale:0,particles:0.3}};function Qe({gpu:i="",coarse:c=!1,width:d=1440,memory:w=8,cores:a=8,override:x=null}={}){if(x&&te.includes(x))return x;if(/swiftshader|llvmpipe|software|basic render/i.test(i))return"still";if(c&&d<760)return"low";if(w&&w<=2)return"low";if(/apple (m\d|gpu)|nvidia|geforce|rtx|radeon rx|radeon pro/i.test(i))return"high";if(/uhd|hd graphics|mali|adreno|powervr|videocore/i.test(i))return"low";if(/intel|iris|arc|radeon(tm)? graphics|vega/i.test(i)||w<=4||a<=4)return"medium";return"high"}function We({slowMs:i=22,verySlowMs:c=40,window:d=90,warmup:w=45}={}){let a=[],x=w;return{sample(p,C){if(x>0)return x--,null;if(a.push(p),a.length<d)return null;let U=a.reduce((N,T)=>N+T,0)/a.length;a.length=0;let b=te.indexOf(C);if(C==="low"&&U>c)return"still";if(U>i&&b>1)return te[b-1];return null},reset(){a.length=0,x=w}}}var Je={uniforms:{tDiffuse:{value:null},uTime:{value:0},uVignette:{value:0.4},uGrain:{value:0.03}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float uTime, uVignette, uGrain; varying vec2 vUv;
    float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
    void main() {
      vec4 c = texture2D(tDiffuse, vUv);
      vec2 d = vUv - 0.5;
      c.rgb *= 1.0 - uVignette * smoothstep(0.25, 0.85, dot(d, d) * 2.2);
      c.rgb += (hash(vUv * 1000.0 + fract(uTime) * 61.0) - 0.5) * uGrain;
      gl_FragColor = c;
    }`};async function Ze(){if(document.readyState==="loading")await new Promise((i)=>document.addEventListener("DOMContentLoaded",i,{once:!0}));if(J.dataset.introState!=="loading")return;return new Promise((i)=>{addEventListener("portfolio:intro-complete",i,{once:!0}),setTimeout(i,9000)})}var ke=()=>new Promise((i)=>requestAnimationFrame(()=>i()));async function et(i,c,d,w){let{scene:a,camera:x}=c,p=[];a.traverse((T)=>{if((T.isMesh||T.isPoints||T.isSprite)&&T.material)p.push(T)});let C=(T)=>`${T.type}|${T.name}|${T.vertexShader?.length||0}|${T.fragmentShader?.length||0}|${T.customProgramCacheKey?.()||""}`,U=new Map;for(let T of p){let D=C(T.material);if(!U.has(D))U.set(D,T)}let b=p.map((T)=>T.visible),N=i.getScissorTest();i.setScissorTest(!0),i.setScissor(0,0,1,1);try{for(let T of U.values())p.forEach((D)=>{D.visible=D===T}),i.setRenderTarget(d),i.render(a,x),i.setRenderTarget(null),await ke();if(p.forEach((T,D)=>{T.visible=b[D]}),w)w.render(0.016),await ke()}finally{p.forEach((T,D)=>{T.visible=b[D]}),i.setScissorTest(N),i.setScissor(0,0,i.domElement.width,i.domElement.height)}return U.size}var Re={temple:{host:"#home .hero-visual",section:"#home",load:()=>(we("pxh6qzdh"),import("./temple-film-pxh6qzdh.js"))},strata:{host:"#dimension .system-object",section:"#dimension",load:()=>(we("gverqetr"),import("./strata-gverqetr.js")),prefetch:!0}},J=document.documentElement,ye=new URLSearchParams(location.search);function tt(){return matchMedia("(prefers-reduced-motion: reduce)").matches||ye.get("motion")==="off"||J.classList.contains("motion-off")}function it(i){try{let c=i.getExtension("WEBGL_debug_renderer_info");return c?String(i.getParameter(c.UNMASKED_RENDERER_WEBGL)):String(i.getParameter(i.RENDERER))}catch{return""}}function st(){if(tt())return;let i={boot:Math.round(performance.now())},c=(M)=>{i[M]=Math.round(performance.now())},d=new He({antialias:!0,alpha:!1,powerPreference:"high-performance"}),w=d.getContext(),a=Qe({gpu:it(w),coarse:matchMedia("(pointer: coarse)").matches,width:innerWidth,memory:navigator.deviceMemory||8,cores:navigator.hardwareConcurrency||8,override:ye.get("tier")}),x=te.includes(ye.get("tier"));if(J.dataset.worldTier=a,a==="still"){d.dispose();return}d.outputColorSpace=g,d.toneMapping=W,d.toneMappingExposure=1;let p=d.domElement;p.className="world-canvas",p.setAttribute("aria-hidden","true"),p.tabIndex=-1;let C=null,U=()=>{if(!C){let M=new ue(d);C=M.fromScene(new Te,0.04).texture,M.dispose(),c("environment")}return C},b={tier:a,settings:Ee[a],pointer:new n,pointerTarget:new n,progress:0},N=new Map,T=We(),D=0,P=null,I=null,ie=null,H=null,Fe=!1,X=0,se=!1,le=()=>{if(!P)return;let{width:M,height:E}=P.host.getBoundingClientRect();if(!M||!E)return;if(d.setPixelRatio(Math.min(devicePixelRatio||1,b.settings.dpr)),d.setSize(M,E,!1),P.world.resize(M,E,b),I){I.setPixelRatio(d.getPixelRatio()),I.setSize(M,E);let A=d.getPixelRatio()*b.settings.bloomScale;ie?.setSize(Math.max(64,Math.round(M*A)),Math.max(64,Math.round(E*A)))}},Be=()=>{if(I?.dispose(),I=null,ie=null,H=null,!P||!b.settings.bloom)return;I=new Se(d),I.addPass(new Ce(P.world.scene,P.world.camera));let M=P.world.bloom||{strength:0.7,radius:0.5,threshold:0.82};ie=new K(new n(256,256),M.strength,M.radius,M.threshold),I.addPass(ie),I.addPass(new Pe);let E=P.world.finish;if(E)H=new Z(Je),H.uniforms.uVignette.value=E.vignette,H.uniforms.uGrain.value=E.grain,I.addPass(H)},he=(M)=>{if(M===a)return;if(a=M,J.dataset.worldTier=a,a==="still"){re(),ve(),p.remove();return}if(b.tier=a,b.settings=Ee[a],T.reset(),P)P.world.setTier?.(b),P.world.tierApplied=a;Be(),le()},De=(M)=>{if(b.pointer.lerp(b.pointerTarget,Math.min(1,M*3)),P.section){let E=P.section.worldProgress;if(typeof E==="number")b.progress=E;else{let A=P.section.getBoundingClientRect();b.progress=Math.min(1,Math.max(0,-A.top/Math.max(1,A.height)))}}if(P.world.update(M,b),H)H.uniforms.uTime.value+=M;if(I)I.render(M);else d.render(P.world.scene,P.world.camera)},Ne=()=>{if(X=0,!P||!se||document.hidden)return;let M=performance.now(),E=Math.min(0.05,(M-D)/1000);D=M;let A=performance.now();De(E);let O=x?null:T.sample(Math.max(E*1000,performance.now()-A),a);if(O)he(O);if(a!=="still")X=requestAnimationFrame(Ne)},ce=()=>{if(!X&&P&&se&&Fe)D=performance.now(),X=requestAnimationFrame(Ne)},re=()=>{cancelAnimationFrame(X),X=0},ve=()=>{if(!P)return;P.host.classList.remove("world-live"),P.section?.classList.remove("world-live"),P=null},xe=new Map;function Le(M){if(!xe.has(M))xe.set(M,(async()=>{let E=await Re[M].load();c(`${M}:module`);let A=await E.create({renderer:d,getEnvironment:U,state:b});c(`${M}:created`);try{await d.compileAsync(A.scene,A.camera)}catch{}return c(`${M}:compiled`),A.tierApplied=a,N.set(M,A),A})());return xe.get(M)}async function $e(M){if(P?.name===M)return;let E=Re[M],A=document.querySelector(E.host);if(!A)return;let O=await Le(M);if(O.tierApplied!==a)O.setTier?.(b),O.tierApplied=a;if(a==="still")return;if(ve(),P={name:M,world:O,host:A,section:document.querySelector(E.section)},A.prepend(p),d.toneMapping=O.toneMapping==="none"?R:W,Be(),le(),T.reset(),!O.warmed){if(i[`${M}:warm-programs`]=await et(d,O,I?I.readBuffer:null,I),O.warmed=!0,c(`${M}:warmed`),P?.name!==M)return}if(De(0.016),c(`${M}:first-frame`),await Ze(),c(`${M}:intro-settled`),P?.name!==M)return;Fe=!0,requestAnimationFrame(()=>{A.classList.add("world-live"),P?.section?.classList.add("world-live"),P?.world.ignite?.(),c(`${M}:revealed`)}),ce()}let qe=new IntersectionObserver((M)=>{M.forEach((E)=>{let A=E.target.dataset.world;if(E.isIntersecting)se=!0,$e(A).catch((O)=>{J.dataset.worldError=String(O?.message||O).slice(0,120)}),ce();else if(P?.name===A)se=!1,re()})},{rootMargin:"80px 0px"}),Ke=window.requestIdleCallback?(M)=>requestIdleCallback(M,{timeout:2500}):(M)=>setTimeout(M,300),Ie=new IntersectionObserver((M)=>{M.forEach((E)=>{if(!E.isIntersecting)return;Ie.unobserve(E.target),Ke(()=>{if(a!=="still")Le(E.target.dataset.world).catch(()=>{})})})},{rootMargin:"150% 0px"});Object.entries(Re).forEach(([M,E])=>{let A=document.querySelector(E.section);if(!A)return;if(A.dataset.world=M,qe.observe(A),E.prefetch)Ie.observe(A)}),addEventListener("pointermove",(M)=>{b.pointerTarget.set(M.clientX/innerWidth*2-1,M.clientY/innerHeight*2-1)},{passive:!0}),addEventListener("resize",le,{passive:!0}),document.addEventListener("visibilitychange",()=>{if(!document.hidden)ce();else re()}),matchMedia("(prefers-reduced-motion: reduce)").addEventListener?.("change",(M)=>{if(M.matches)he("still")}),p.addEventListener("webglcontextlost",(M)=>{M.preventDefault(),re(),ve(),p.remove(),J.dataset.worldTier="still"}),window.__worldStage={get tier(){return a},get active(){return P?.name||null},setTier:he,timings:i,get world(){return P?.world||null}}}if(typeof window<"u"&&typeof document<"u")try{st()}catch(i){document.documentElement.dataset.worldError=String(i?.message||i).slice(0,120)}
