import{U,ce,he,ue,de,D,fe,pe,me,b,m,a,n,e,s,_,t,f,v,y,o,O,S,Te,k,Be,G,oe,le}from"./stage-bsyg19db.js";var Ae,se,Y,ae=(i,l)=>{for(var[h,d,r]of Ae||[])for(var c=[i],g=globalThis,x=g.document,E,T,A,p,P;T=c.pop();)if(!se[T]&&(A=d[T])){se[T]=1;for(p=1;p<A.length;p++)c.push(r[A[p]]);if(!l&&T!==i&&(E=x&&x.head)){if(Y===void 0)Y=(p=x.querySelector("meta[property=csp-nonce]"))&&(p.nonce||p.getAttribute("nonce"))||"";if(P=x.createElement("link"),P.rel="modulepreload",P.crossOrigin="",Y)P.nonce=Y;P.href=new g.URL(A[0],h),E.appendChild(P)}}},Ge=(i,l,h,d)=>{for(var r={},c=0;c<l.length;c++)r[l[c]]=h[c];(Ae||=[]).push([i,r,l]),se||={},ae(l[d],1)};Ge(import.meta.url,["azsfqts7","ehspsv18","678n80d1","bsyg19db","2qmzswj4"],[["./stage.js",3],["./strata-ehspsv18.js",4,3],["./helmet-678n80d1.js",4,3],["./stage-bsyg19db.js"],["./stage-2qmzswj4.js",3]],0);
var Q={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class B{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}var Ve=new k(-1,1,1,-1,0,1);class Fe extends v{constructor(){super();this.setAttribute("position",new f([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new f([0,2,0,0,2,0],2))}}var Qe=new Fe;class L{constructor(i){this._mesh=new o(Qe,i)}dispose(){this._mesh.geometry.dispose()}render(i){i.render(this._mesh,Ve)}get material(){return this._mesh.material}set material(i){this._mesh.material=i}}class H extends B{constructor(i,l="tDiffuse"){super();if(this.textureID=l,this.uniforms=null,this.material=null,i instanceof S)this.uniforms=i.uniforms,this.material=i;else if(i)this.uniforms=O.clone(i.uniforms),this.material=new S({name:i.name!==void 0?i.name:"unspecified",defines:Object.assign({},i.defines),uniforms:this.uniforms,vertexShader:i.vertexShader,fragmentShader:i.fragmentShader});this._fsQuad=new L(this.material)}render(i,l,h){if(this.uniforms[this.textureID])this.uniforms[this.textureID].value=h.texture;if(this._fsQuad.material=this.material,this.renderToScreen)i.setRenderTarget(null),this._fsQuad.render(i);else{if(i.setRenderTarget(l),this.clear)i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil);this._fsQuad.render(i)}}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class J extends B{constructor(i,l){super();this.scene=i,this.camera=l,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(i,l,h){let d=i.getContext(),r=i.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let c,g;if(this.inverse)c=0,g=1;else c=1,g=0;if(r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(d.REPLACE,d.REPLACE,d.REPLACE),r.buffers.stencil.setFunc(d.ALWAYS,c,4294967295),r.buffers.stencil.setClear(g),r.buffers.stencil.setLocked(!0),i.setRenderTarget(h),this.clear)i.clear();if(i.render(this.scene,this.camera),i.setRenderTarget(l),this.clear)i.clear();i.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(d.EQUAL,1,4294967295),r.buffers.stencil.setOp(d.KEEP,d.KEEP,d.KEEP),r.buffers.stencil.setLocked(!0)}}class ne extends B{constructor(){super();this.needsSwap=!1}render(i){i.state.buffers.stencil.setLocked(!1),i.state.buffers.stencil.setTest(!1)}}class ge{constructor(i,l){if(this.renderer=i,this._pixelRatio=i.getPixelRatio(),l===void 0){let h=i.getSize(new n);this._width=h.width,this._height=h.height,l=new _(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:b}),l.texture.name="EffectComposer.rt1"}else this._width=l.width,this._height=l.height;this.renderTarget1=l,this.renderTarget2=l.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new H(Q),this.copyPass.material.blending=U,this.timer=new Be}swapBuffers(){let i=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=i}addPass(i){this.passes.push(i),i.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(i,l){this.passes.splice(l,0,i),i.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(i){let l=this.passes.indexOf(i);if(l!==-1)this.passes.splice(l,1)}isLastEnabledPass(i){for(let l=i+1;l<this.passes.length;l++)if(this.passes[l].enabled)return!1;return!0}render(i){if(this.timer.update(),i===void 0)i=this.timer.getDelta();let l=this.renderer.getRenderTarget(),h=!1;for(let d=0,r=this.passes.length;d<r;d++){let c=this.passes[d];if(c.enabled===!1)continue;if(c.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(d),c.render(this.renderer,this.writeBuffer,this.readBuffer,i,h),c.needsSwap){if(h){let g=this.renderer.getContext(),x=this.renderer.state.buffers.stencil;x.setFunc(g.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,i),x.setFunc(g.EQUAL,1,4294967295)}this.swapBuffers()}if(J!==void 0){if(c instanceof J)h=!0;else if(c instanceof ne)h=!1}}this.renderer.setRenderTarget(l)}reset(i){if(i===void 0){let l=this.renderer.getSize(new n);this._pixelRatio=this.renderer.getPixelRatio(),this._width=l.width,this._height=l.height,i=this.renderTarget1.clone(),i.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=i,this.renderTarget2=i.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(i,l){this._width=i,this._height=l;let h=this._width*this._pixelRatio,d=this._height*this._pixelRatio;this.renderTarget1.setSize(h,d),this.renderTarget2.setSize(h,d);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(h,d)}setPixelRatio(i){this._pixelRatio=i,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class ve extends B{constructor(i,l,h=null,d=null,r=null){super();this.scene=i,this.camera=l,this.overrideMaterial=h,this.clearColor=d,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new t}render(i,l,h){let d=i.autoClear;i.autoClear=!1;let r,c;if(this.overrideMaterial!==null)c=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial;if(this.clearColor!==null)i.getClearColor(this._oldClearColor),i.setClearColor(this.clearColor,i.getClearAlpha());if(this.clearAlpha!==null)r=i.getClearAlpha(),i.setClearAlpha(this.clearAlpha);if(this.clearDepth==!0)i.clearDepth();if(i.setRenderTarget(this.renderToScreen?null:h),this.clear===!0)i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil);if(i.render(this.scene,this.camera),this.clearColor!==null)i.setClearColor(this._oldClearColor);if(this.clearAlpha!==null)i.setClearAlpha(r);if(this.overrideMaterial!==null)this.scene.overrideMaterial=c;i.autoClear=d}}var Ue={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new t(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class I extends B{constructor(i,l=1,h,d){super();this.strength=l,this.radius=h,this.threshold=d,this.resolution=i!==void 0?new n(i.x,i.y):new n(256,256),this.clearColor=new t(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),c=Math.round(this.resolution.y/2);this.renderTargetBright=new _(r,c,{type:b,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let T=0;T<this.nMips;T++){let A=new _(r,c,{type:b,depthBuffer:!1});A.texture.name="UnrealBloomPass.h"+T,A.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(A);let p=new _(r,c,{type:b,depthBuffer:!1});p.texture.name="UnrealBloomPass.v"+T,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),c=Math.round(c/2)}let g=Ue;this.highPassUniforms=O.clone(g.uniforms),this.highPassUniforms.luminosityThreshold.value=d,this.highPassUniforms.smoothWidth.value=0.01,this.materialHighPassFilter=new S({uniforms:this.highPassUniforms,vertexShader:g.vertexShader,fragmentShader:g.fragmentShader}),this.separableBlurMaterials=[];let x=[6,10,14,18,22];r=Math.round(this.resolution.x/2),c=Math.round(this.resolution.y/2);for(let T=0;T<this.nMips;T++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(x[T])),this.separableBlurMaterials[T].uniforms.invSize.value=new n(1/r,1/c),r=Math.round(r/2),c=Math.round(c/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=l,this.compositeMaterial.uniforms.bloomRadius.value=0.1;let E=[1,0.8,0.6,0.4,0.2];this.compositeMaterial.uniforms.bloomFactors.value=E,this.bloomTintColors=[new e(1,1,1),new e(1,1,1),new e(1,1,1),new e(1,1,1),new e(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=O.clone(Q.uniforms),this.blendMaterial=new S({uniforms:this.copyUniforms,vertexShader:Q.vertexShader,fragmentShader:Q.fragmentShader,premultipliedAlpha:!0,blending:ce,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new t,this._oldClearAlpha=1,this._basic=new y,this._fsQuad=new L(null)}dispose(){for(let i=0;i<this.renderTargetsHorizontal.length;i++)this.renderTargetsHorizontal[i].dispose();for(let i=0;i<this.renderTargetsVertical.length;i++)this.renderTargetsVertical[i].dispose();this.renderTargetBright.dispose();for(let i=0;i<this.separableBlurMaterials.length;i++)this.separableBlurMaterials[i].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(i,l){let h=Math.round(i/2),d=Math.round(l/2);this.renderTargetBright.setSize(h,d);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(h,d),this.renderTargetsVertical[r].setSize(h,d),this.separableBlurMaterials[r].uniforms.invSize.value=new n(1/h,1/d),h=Math.round(h/2),d=Math.round(d/2)}render(i,l,h,d,r){i.getClearColor(this._oldClearColor),this._oldClearAlpha=i.getClearAlpha();let c=i.autoClear;if(i.autoClear=!1,i.setClearColor(this.clearColor,0),r)i.state.buffers.stencil.setTest(!1);if(this.renderToScreen)this._fsQuad.material=this._basic,this._basic.map=h.texture,i.setRenderTarget(null),i.clear(),this._fsQuad.render(i);this.highPassUniforms.tDiffuse.value=h.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,i.setRenderTarget(this.renderTargetBright),i.clear(),this._fsQuad.render(i);let g=this.renderTargetBright;for(let x=0;x<this.nMips;x++)this._fsQuad.material=this.separableBlurMaterials[x],this.separableBlurMaterials[x].uniforms.colorTexture.value=g.texture,this.separableBlurMaterials[x].uniforms.direction.value=I.BlurDirectionX,i.setRenderTarget(this.renderTargetsHorizontal[x]),i.clear(),this._fsQuad.render(i),this.separableBlurMaterials[x].uniforms.colorTexture.value=this.renderTargetsHorizontal[x].texture,this.separableBlurMaterials[x].uniforms.direction.value=I.BlurDirectionY,i.setRenderTarget(this.renderTargetsVertical[x]),i.clear(),this._fsQuad.render(i),g=this.renderTargetsVertical[x];if(this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,i.setRenderTarget(this.renderTargetsHorizontal[0]),i.clear(),this._fsQuad.render(i),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r)i.state.buffers.stencil.setTest(!0);if(this.renderToScreen)i.setRenderTarget(null),this._fsQuad.render(i);else i.setRenderTarget(h),this._fsQuad.render(i);i.setClearColor(this._oldClearColor,this._oldClearAlpha),i.autoClear=c}_getSeparableBlurMaterial(i){let l=[],h=i/3;for(let c=0;c<i;c++)l.push(0.39894*Math.exp(-0.5*c*c/(h*h))/h);let d=[],r=[];for(let c=1;c<i;c+=2){let g=l[c],x=c+1<i?l[c+1]:0,E=g+x;d.push((c*g+(c+1)*x)/E),r.push(E)}return new S({defines:{KERNEL_PAIRS:d.length},uniforms:{colorTexture:{value:null},invSize:{value:new n(0.5,0.5)},direction:{value:new n(0.5,0.5)},centerWeight:{value:l[0]},gaussianOffsets:{value:d},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(i){return new S({defines:{NUM_MIPS:i},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}I.BlurDirectionX=new n(1,0);I.BlurDirectionY=new n(0,1);var W={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class xe extends B{constructor(){super();this.isOutputPass=!0,this.uniforms=O.clone(W.uniforms),this.material=new Te({name:W.name,uniforms:this.uniforms,vertexShader:W.vertexShader,fragmentShader:W.fragmentShader}),this._fsQuad=new L(this.material),this._outputColorSpace=null,this._toneMapping=null}render(i,l,h){if(this.uniforms.tDiffuse.value=h.texture,this.uniforms.toneMappingExposure.value=i.toneMappingExposure,this._outputColorSpace!==i.outputColorSpace||this._toneMapping!==i.toneMapping){if(this._outputColorSpace=i.outputColorSpace,this._toneMapping=i.toneMapping,this.material.defines={},s.getTransfer(this._outputColorSpace)===a)this.material.defines.SRGB_TRANSFER="";if(this._toneMapping===he)this.material.defines.LINEAR_TONE_MAPPING="";else if(this._toneMapping===ue)this.material.defines.REINHARD_TONE_MAPPING="";else if(this._toneMapping===de)this.material.defines.CINEON_TONE_MAPPING="";else if(this._toneMapping===D)this.material.defines.ACES_FILMIC_TONE_MAPPING="";else if(this._toneMapping===pe)this.material.defines.AGX_TONE_MAPPING="";else if(this._toneMapping===me)this.material.defines.NEUTRAL_TONE_MAPPING="";else if(this._toneMapping===fe)this.material.defines.CUSTOM_TONE_MAPPING="";this.material.needsUpdate=!0}if(this.renderToScreen===!0)i.setRenderTarget(null),this._fsQuad.render(i);else{if(i.setRenderTarget(l),this.clear)i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil);this._fsQuad.render(i)}}dispose(){this.material.dispose(),this._fsQuad.dispose()}}var q=["still","low","medium","high"],be={high:{dpr:1.75,bloom:!0,bloomScale:1,particles:1},medium:{dpr:1,bloom:!0,bloomScale:0.4,particles:0.55},low:{dpr:1,bloom:!1,bloomScale:0,particles:0.3}};function De({gpu:i="",coarse:l=!1,width:h=1440,memory:d=8,cores:r=8,override:c=null}={}){if(c&&q.includes(c))return c;if(/swiftshader|llvmpipe|software|basic render/i.test(i))return"still";if(l&&h<760)return"low";if(d&&d<=2)return"low";if(/apple (m\d|gpu)|nvidia|geforce|rtx|radeon rx|radeon pro/i.test(i))return"high";if(/uhd|hd graphics|mali|adreno|powervr|videocore/i.test(i))return"low";if(/intel|iris|arc|radeon(tm)? graphics|vega/i.test(i)||d<=4||r<=4)return"medium";return"high"}function Ne({slowMs:i=22,verySlowMs:l=40,window:h=90,warmup:d=45}={}){let r=[],c=d;return{sample(g,x){if(c>0)return c--,null;if(r.push(g),r.length<h)return null;let E=r.reduce((A,p)=>A+p,0)/r.length;r.length=0;let T=q.indexOf(x);if(x==="low"&&E>l)return"still";if(E>i&&T>1)return q[T-1];return null},reset(){r.length=0,c=d}}}var He={uniforms:{tDiffuse:{value:null},uTime:{value:0},uVignette:{value:0.4},uGrain:{value:0.03}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float uTime, uVignette, uGrain; varying vec2 vUv;
    float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
    void main() {
      vec4 c = texture2D(tDiffuse, vUv);
      vec2 d = vUv - 0.5;
      c.rgb *= 1.0 - uVignette * smoothstep(0.25, 0.85, dot(d, d) * 2.2);
      c.rgb += (hash(vUv * 1000.0 + fract(uTime) * 61.0) - 0.5) * uGrain;
      gl_FragColor = c;
    }`};async function We(){if(document.readyState==="loading")await new Promise((i)=>document.addEventListener("DOMContentLoaded",i,{once:!0}));if(z.dataset.introState!=="loading")return;return new Promise((i)=>{addEventListener("portfolio:intro-complete",i,{once:!0}),setTimeout(i,9000)})}var Le=()=>new Promise((i)=>requestAnimationFrame(()=>i()));async function ke(i,l,h,d){let{scene:r,camera:c}=l,g=[];r.traverse((p)=>{if((p.isMesh||p.isPoints||p.isSprite)&&p.material)g.push(p)});let x=(p)=>`${p.type}|${p.name}|${p.vertexShader?.length||0}|${p.fragmentShader?.length||0}|${p.customProgramCacheKey?.()||""}`,E=new Map;for(let p of g){let P=x(p.material);if(!E.has(P))E.set(P,p)}let T=g.map((p)=>p.visible),A=i.getScissorTest();i.setScissorTest(!0),i.setScissor(0,0,1,1);try{for(let p of E.values())g.forEach((P)=>{P.visible=P===p}),i.setRenderTarget(h),i.render(r,c),i.setRenderTarget(null),await Le();if(g.forEach((p,P)=>{p.visible=T[P]}),d)d.render(0.016),await Le()}finally{g.forEach((p,P)=>{p.visible=T[P]}),i.setScissorTest(A),i.setScissor(0,0,i.domElement.width,i.domElement.height)}return E.size}var we={strata:{host:"#dimension .system-object",section:"#dimension",load:()=>(ae("ehspsv18"),import("./strata-ehspsv18.js")),prefetch:!0}},z=document.documentElement,Me=new URLSearchParams(location.search);function $e(){return matchMedia("(prefers-reduced-motion: reduce)").matches||Me.get("motion")==="off"||z.classList.contains("motion-off")}function qe(i){try{let l=i.getExtension("WEBGL_debug_renderer_info");return l?String(i.getParameter(l.UNMASKED_RENDERER_WEBGL)):String(i.getParameter(i.RENDERER))}catch{return""}}function Ke(){if($e())return;let i={boot:Math.round(performance.now())},l=(u)=>{i[u]=Math.round(performance.now())},h=new oe({antialias:!0,alpha:!1,powerPreference:"high-performance"}),d=h.getContext(),r=De({gpu:qe(d),coarse:matchMedia("(pointer: coarse)").matches,width:innerWidth,memory:navigator.deviceMemory||8,cores:navigator.hardwareConcurrency||8,override:Me.get("tier")}),c=q.includes(Me.get("tier"));if(z.dataset.worldTier=r,r==="still"){h.dispose();return}h.outputColorSpace=m,h.toneMapping=D,h.toneMappingExposure=1;let g=h.domElement;g.className="world-canvas",g.setAttribute("aria-hidden","true"),g.tabIndex=-1;let x=null,E=()=>{if(!x){let u=new G(h);x=u.fromScene(new le,0.04).texture,u.dispose(),l("environment")}return x},T={tier:r,settings:be[r],pointer:new n,pointerTarget:new n,progress:0},A=new Map,p=Ne(),P=0,w=null,R=null,K=null,N=null,_e=!1,V=0,X=!1,Z=()=>{if(!w)return;let{width:u,height:M}=w.host.getBoundingClientRect();if(!u||!M)return;if(h.setPixelRatio(Math.min(devicePixelRatio||1,T.settings.dpr)),h.setSize(u,M,!1),w.world.resize(u,M,T),R){R.setPixelRatio(h.getPixelRatio()),R.setSize(u,M);let C=h.getPixelRatio()*T.settings.bloomScale;K?.setSize(Math.max(64,Math.round(u*C)),Math.max(64,Math.round(M*C)))}},Se=()=>{if(R?.dispose(),R=null,K=null,N=null,!w||!T.settings.bloom)return;R=new ge(h),R.addPass(new ve(w.world.scene,w.world.camera));let u=w.world.bloom||{strength:0.7,radius:0.5,threshold:0.82};K=new I(new n(256,256),u.strength,u.radius,u.threshold),R.addPass(K),R.addPass(new xe);let M=w.world.finish;if(M)N=new H(He),N.uniforms.uVignette.value=M.vignette,N.uniforms.uGrain.value=M.grain,R.addPass(N)},ee=(u)=>{if(u===r)return;if(r=u,z.dataset.worldTier=r,r==="still"){j(),ie(),g.remove();return}if(T.tier=r,T.settings=be[r],p.reset(),w)w.world.setTier?.(T),w.world.tierApplied=r;Se(),Z()},Ce=(u)=>{if(T.pointer.lerp(T.pointerTarget,Math.min(1,u*3)),w.section){let M=w.section.getBoundingClientRect();T.progress=Math.min(1,Math.max(0,-M.top/Math.max(1,M.height)))}if(w.world.update(u,T),N)N.uniforms.uTime.value+=u;if(R)R.render(u);else h.render(w.world.scene,w.world.camera)},Pe=()=>{if(V=0,!w||!X||document.hidden)return;let u=performance.now(),M=Math.min(0.05,(u-P)/1000);P=u;let C=performance.now();Ce(M);let F=c?null:p.sample(Math.max(M*1000,performance.now()-C),r);if(F)ee(F);if(r!=="still")V=requestAnimationFrame(Pe)},te=()=>{if(!V&&w&&X&&_e)P=performance.now(),V=requestAnimationFrame(Pe)},j=()=>{cancelAnimationFrame(V),V=0},ie=()=>{if(!w)return;w.host.classList.remove("world-live"),w.section?.classList.remove("world-live"),w=null},re=new Map;function Ee(u){if(!re.has(u))re.set(u,(async()=>{let M=await we[u].load();l(`${u}:module`);let C=await M.create({renderer:h,getEnvironment:E,state:T});l(`${u}:created`);try{await h.compileAsync(C.scene,C.camera)}catch{}return l(`${u}:compiled`),C.tierApplied=r,A.set(u,C),C})());return re.get(u)}async function Ie(u){if(w?.name===u)return;let M=we[u],C=document.querySelector(M.host);if(!C)return;let F=await Ee(u);if(F.tierApplied!==r)F.setTier?.(T),F.tierApplied=r;if(r==="still")return;if(ie(),w={name:u,world:F,host:C,section:document.querySelector(M.section)},C.prepend(g),Se(),Z(),p.reset(),!F.warmed){if(i[`${u}:warm-programs`]=await ke(h,F,R?R.readBuffer:null,R),F.warmed=!0,l(`${u}:warmed`),w?.name!==u)return}if(Ce(0.016),l(`${u}:first-frame`),await We(),l(`${u}:intro-settled`),w?.name!==u)return;_e=!0,requestAnimationFrame(()=>{C.classList.add("world-live"),w?.section?.classList.add("world-live"),w?.world.ignite?.(),l(`${u}:revealed`)}),te()}let Oe=new IntersectionObserver((u)=>{u.forEach((M)=>{let C=M.target.dataset.world;if(M.isIntersecting)X=!0,Ie(C).catch((F)=>{z.dataset.worldError=String(F?.message||F).slice(0,120)}),te();else if(w?.name===C)X=!1,j()})},{rootMargin:"80px 0px"}),ze=window.requestIdleCallback?(u)=>requestIdleCallback(u,{timeout:2500}):(u)=>setTimeout(u,300),Re=new IntersectionObserver((u)=>{u.forEach((M)=>{if(!M.isIntersecting)return;Re.unobserve(M.target),ze(()=>{if(r!=="still")Ee(M.target.dataset.world).catch(()=>{})})})},{rootMargin:"150% 0px"});Object.entries(we).forEach(([u,M])=>{let C=document.querySelector(M.section);if(!C)return;if(C.dataset.world=u,Oe.observe(C),M.prefetch)Re.observe(C)}),addEventListener("pointermove",(u)=>{T.pointerTarget.set(u.clientX/innerWidth*2-1,u.clientY/innerHeight*2-1)},{passive:!0}),addEventListener("resize",Z,{passive:!0}),document.addEventListener("visibilitychange",()=>{if(!document.hidden)te();else j()}),matchMedia("(prefers-reduced-motion: reduce)").addEventListener?.("change",(u)=>{if(u.matches)ee("still")}),g.addEventListener("webglcontextlost",(u)=>{u.preventDefault(),j(),ie(),g.remove(),z.dataset.worldTier="still"});let ye=document.querySelector(".hero-helmet");if(ye&&innerWidth>=760)(ae("678n80d1"),import("./helmet-678n80d1.js")).then((u)=>u.mount({host:ye,tier:r})).catch((u)=>{z.dataset.helmetError=String(u?.message||u).slice(0,120)});window.__worldStage={get tier(){return r},get active(){return w?.name||null},setTier:ee,timings:i,get world(){return w?.world||null}}}if(typeof window<"u"&&typeof document<"u")try{Ke()}catch(i){document.documentElement.dataset.worldError=String(i?.message||i).slice(0,120)}
