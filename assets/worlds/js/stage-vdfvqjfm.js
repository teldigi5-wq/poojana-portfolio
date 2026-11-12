var Ql="187";var jl=0,Ba=1,tc=2;var Qs=1,Re=2,Ns=3,H=0,y=1,T=2,B=0,js=1,V=2,za=3,Ga=4,ec=5;var Ds=100,nc=101,ic=102,sc=103,rc=104,ac=200,oc=201,lc=202,cc=203,hc=204,uc=205,dc=206,fc=207,pc=208,mc=209,gc=210,_c=211,xc=212,vc=213,yc=214,Sc=0,Mc=1,bc=2,ka=3,Tc=4,Ec=5,Ac=6,wc=7,Rc=0,Cc=1,Ic=2,R=0,de=1,fe=2,pe=3,W=4,me=5,ge=6,_e=7;var tr=301,Us=302,kr=303,Hr=304,se=1000,re=1001,Ce=1002,N=1003,Ie=1004;var J=1005;var p=1006,ae=1007;var D=1008;var Ti=1009,Pc=1010,Lc=1011,er=1012,Ha=1013,Ki=1014,ki=1015,S=1016,Wa=1017,Va=1018,ds=1020,Nc=35902,Dc=35899,Uc=1021,Fc=1022,Hi=1023,Fs=1026,Qi=1027,Oc=1028,Xa=1029,fs=1030,qa=1031;var Ya=1033,Wr=33776,Vr=33777,Xr=33778,qr=33779,Za=35840,Ja=35841,$a=35842,Ka=35843,Qa=36196,ja=37492,to=37496,eo=37488,no=37489,Yr=37490,io=37491,so=37808,ro=37809,ao=37810,oo=37811,lo=37812,co=37813,ho=37814,uo=37815,fo=37816,po=37817,mo=37818,go=37819,_o=37820,xo=37821,vo=36492,yo=36494,So=36495,Mo=36283,bo=36284,Zr=36285,To=36286;var ke=2300,Pe=2301;var Ge=0,xe=1,oe=2;var Eo=0,Bc=1,ps="",g="srgb",A="srgb-linear",Ao="linear",o="srgb";var zc=512,Gc=513,kc=514,wo=515,Hc=516,Wc=517,Ro=518,Co=519;var Io="300 es",Po=2000;function Yh(tt){for(let et=tt.length-1;et>=0;--et)if(tt[et]>=65535)return!0;return!1}function Zh(tt){return ArrayBuffer.isView(tt)&&!(tt instanceof DataView)}function Ps(tt){return document.createElementNS("http://www.w3.org/1999/xhtml",tt)}function Vc(){let tt=Ps("canvas");return tt.style.display="block",tt}var dl={},Ls=null;function Ks(...tt){let et="THREE."+tt.shift();if(Ls)Ls("log",et,...tt);else console.log(et,...tt)}function Xc(tt){let et=tt[0];if(typeof et==="string"&&et.startsWith("TSL:")){let nt=tt[1];if(nt&&nt.isStackTrace)tt[0]+=" "+nt.getLocation();else tt[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return tt}function fn(...tt){tt=Xc(tt);let et="THREE."+tt.shift();if(Ls)Ls("warn",et,...tt);else{let nt=tt[0];if(nt&&nt.isStackTrace)console.warn(nt.getError(et));else console.warn(et,...tt)}}function vn(...tt){tt=Xc(tt);let et="THREE."+tt.shift();if(Ls)Ls("error",et,...tt);else{let nt=tt[0];if(nt&&nt.isStackTrace)console.error(nt.getError(et));else console.error(et,...tt)}}function cs(...tt){let et=tt.join(" ");if(et in dl)return;dl[et]=!0,fn(...tt)}function qc(tt,et,nt){return new Promise(function(it,st){function rt(){switch(tt.clientWaitSync(et,tt.SYNC_FLUSH_COMMANDS_BIT,0)){case tt.WAIT_FAILED:st();break;case tt.TIMEOUT_EXPIRED:setTimeout(rt,nt);break;default:it()}}setTimeout(rt,nt)})}var Yc={[0]:0,[2]:6,[4]:4,[3]:5,[1]:1,[6]:2,[7]:7,[5]:3};class Wi{addEventListener(tt,et){if(this._listeners===void 0)this._listeners={};let nt=this._listeners;if(nt[tt]===void 0)nt[tt]=[];if(nt[tt].indexOf(et)===-1)nt[tt].push(et)}hasEventListener(tt,et){let nt=this._listeners;if(nt===void 0)return!1;return nt[tt]!==void 0&&nt[tt].indexOf(et)!==-1}removeEventListener(tt,et){let nt=this._listeners;if(nt===void 0)return;let it=nt[tt];if(it!==void 0){let st=it.indexOf(et);if(st!==-1)it.splice(st,1)}}dispatchEvent(tt){let et=this._listeners;if(et===void 0)return;let nt=et[tt.type];if(nt!==void 0){tt.target=this;let it=nt.slice(0);for(let st=0,rt=it.length;st<rt;st++)it[st].call(this,tt);tt.target=null}}}var si=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fl=1234567,Js=Math.PI/180,hs=180/Math.PI;function Ci(){let tt=Math.random()*4294967295|0,et=Math.random()*4294967295|0,nt=Math.random()*4294967295|0,it=Math.random()*4294967295|0;return(si[tt&255]+si[tt>>8&255]+si[tt>>16&255]+si[tt>>24&255]+"-"+si[et&255]+si[et>>8&255]+"-"+si[et>>16&15|64]+si[et>>24&255]+"-"+si[nt&63|128]+si[nt>>8&255]+"-"+si[nt>>16&255]+si[nt>>24&255]+si[it&255]+si[it>>8&255]+si[it>>16&255]+si[it>>24&255]).toLowerCase()}function wn(tt,et,nt){return Math.max(et,Math.min(nt,tt))}function Lo(tt,et){return(tt%et+et)%et}function Jh(tt,et,nt,it,st){return it+(tt-et)*(st-it)/(nt-et)}function $h(tt,et,nt){if(tt!==et)return(nt-tt)/(et-tt);else return 0}function $s(tt,et,nt){return(1-nt)*tt+nt*et}function Kh(tt,et,nt,it){return $s(tt,et,1-Math.exp(-nt*it))}function Qh(tt,et=1){return et-Math.abs(Lo(tt,et*2)-et)}function jh(tt,et,nt){if(tt<=et)return 0;if(tt>=nt)return 1;return tt=(tt-et)/(nt-et),tt*tt*(3-2*tt)}function tu(tt,et,nt){if(tt<=et)return 0;if(tt>=nt)return 1;return tt=(tt-et)/(nt-et),tt*tt*tt*(tt*(tt*6-15)+10)}function eu(tt,et){return tt+Math.floor(Math.random()*(et-tt+1))}function nu(tt,et){return tt+Math.random()*(et-tt)}function iu(tt){return tt*(0.5-Math.random())}function su(tt){if(tt!==void 0)fl=tt;let et=fl+=1831565813;return et=Math.imul(et^et>>>15,et|1),et^=et+Math.imul(et^et>>>7,et|61),((et^et>>>14)>>>0)/4294967296}function ru(tt){return tt*Js}function au(tt){return tt*hs}function ou(tt){return tt>0&&Number.isInteger(tt)&&2**Math.round(Math.log2(tt))===tt}function lu(tt){return Math.pow(2,Math.ceil(Math.log(tt)/Math.LN2))}function No(tt){return Math.pow(2,Math.floor(Math.log(tt)/Math.LN2))}function cu(tt,et,nt,it,st){let{cos:rt,sin:at}=Math,ot=rt(nt/2),lt=at(nt/2),ct=rt((et+it)/2),ht=at((et+it)/2),dt=rt((et-it)/2),ut=at((et-it)/2),pt=rt((it-et)/2),vt=at((it-et)/2);switch(st){case"XYX":tt.set(ot*ht,lt*dt,lt*ut,ot*ct);break;case"YZY":tt.set(lt*ut,ot*ht,lt*dt,ot*ct);break;case"ZXZ":tt.set(lt*dt,lt*ut,ot*ht,ot*ct);break;case"XZX":tt.set(ot*ht,lt*vt,lt*pt,ot*ct);break;case"YXY":tt.set(lt*pt,ot*ht,lt*vt,ot*ct);break;case"ZYZ":tt.set(lt*vt,lt*pt,ot*ht,ot*ct);break;default:fn("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+st)}}function Jr(tt){switch(tt.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Do(tt,et){if(et.constructor===Float32Array)return tt;let nt=Jr(et);if(nt===void 0)throw Error("THREE.MathUtils: Invalid component type.");return Math.max(tt/nt,-1)}function Uo(tt,et){if(et.constructor===Float32Array)return tt;let nt=Jr(et);if(nt===void 0)throw Error("THREE.MathUtils: Invalid component type.");return Math.round(tt*nt)}var U={DEG2RAD:Js,RAD2DEG:hs,generateUUID:Ci,clamp:wn,euclideanModulo:Lo,mapLinear:Jh,inverseLerp:$h,lerp:$s,damp:Kh,pingpong:Qh,smoothstep:jh,smootherstep:tu,randInt:eu,randFloat:nu,randFloatSpread:iu,seededRandom:su,degToRad:ru,radToDeg:au,isPowerOfTwo:ou,ceilPowerOfTwo:lu,floorPowerOfTwo:No,setQuaternionFromProperEuler:cu,normalize:Uo,denormalize:Do};class n{static{this.prototype.isVector2=!0}constructor(tt=0,et=0){this.x=tt,this.y=et}get width(){return this.x}set width(tt){this.x=tt}get height(){return this.y}set height(tt){this.y=tt}set(tt,et){return this.x=tt,this.y=et,this}setScalar(tt){return this.x=tt,this.y=tt,this}setX(tt){return this.x=tt,this}setY(tt){return this.y=tt,this}setComponent(tt,et){switch(tt){case 0:this.x=et;break;case 1:this.y=et;break;default:throw Error("THREE.Vector2: index is out of range: "+tt)}return this}getComponent(tt){switch(tt){case 0:return this.x;case 1:return this.y;default:throw Error("THREE.Vector2: index is out of range: "+tt)}}clone(){return new this.constructor(this.x,this.y)}copy(tt){return this.x=tt.x,this.y=tt.y,this}add(tt){return this.x+=tt.x,this.y+=tt.y,this}addScalar(tt){return this.x+=tt,this.y+=tt,this}addVectors(tt,et){return this.x=tt.x+et.x,this.y=tt.y+et.y,this}addScaledVector(tt,et){return this.x+=tt.x*et,this.y+=tt.y*et,this}sub(tt){return this.x-=tt.x,this.y-=tt.y,this}subScalar(tt){return this.x-=tt,this.y-=tt,this}subVectors(tt,et){return this.x=tt.x-et.x,this.y=tt.y-et.y,this}multiply(tt){return this.x*=tt.x,this.y*=tt.y,this}multiplyScalar(tt){return this.x*=tt,this.y*=tt,this}divide(tt){return this.x/=tt.x,this.y/=tt.y,this}divideScalar(tt){return this.multiplyScalar(1/tt)}applyMatrix3(tt){let et=this.x,nt=this.y,it=tt.elements;return this.x=it[0]*et+it[3]*nt+it[6],this.y=it[1]*et+it[4]*nt+it[7],this}min(tt){return this.x=Math.min(this.x,tt.x),this.y=Math.min(this.y,tt.y),this}max(tt){return this.x=Math.max(this.x,tt.x),this.y=Math.max(this.y,tt.y),this}clamp(tt,et){return this.x=wn(this.x,tt.x,et.x),this.y=wn(this.y,tt.y,et.y),this}clampScalar(tt,et){return this.x=wn(this.x,tt,et),this.y=wn(this.y,tt,et),this}clampLength(tt,et){let nt=this.length();return this.divideScalar(nt||1).multiplyScalar(wn(nt,tt,et))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(tt){return this.x*tt.x+this.y*tt.y}cross(tt){return this.x*tt.y-this.y*tt.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(tt){let et=Math.sqrt(this.lengthSq()*tt.lengthSq());if(et===0)return Math.PI/2;let nt=this.dot(tt)/et;return Math.acos(wn(nt,-1,1))}distanceTo(tt){return Math.sqrt(this.distanceToSquared(tt))}distanceToSquared(tt){let et=this.x-tt.x,nt=this.y-tt.y;return et*et+nt*nt}manhattanDistanceTo(tt){return Math.abs(this.x-tt.x)+Math.abs(this.y-tt.y)}setLength(tt){return this.normalize().multiplyScalar(tt)}lerp(tt,et){return this.x+=(tt.x-this.x)*et,this.y+=(tt.y-this.y)*et,this}lerpVectors(tt,et,nt){return this.x=tt.x+(et.x-tt.x)*nt,this.y=tt.y+(et.y-tt.y)*nt,this}equals(tt){return tt.x===this.x&&tt.y===this.y}fromArray(tt,et=0){return this.x=tt[et],this.y=tt[et+1],this}toArray(tt=[],et=0){return tt[et]=this.x,tt[et+1]=this.y,tt}fromBufferAttribute(tt,et){return this.x=tt.getX(et),this.y=tt.getY(et),this}rotateAround(tt,et){let nt=Math.cos(et),it=Math.sin(et),st=this.x-tt.x,rt=this.y-tt.y;return this.x=st*nt-rt*it+tt.x,this.y=st*it+rt*nt+tt.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class C{constructor(tt=0,et=0,nt=0,it=1){this.isQuaternion=!0,this._x=tt,this._y=et,this._z=nt,this._w=it}static slerpFlat(tt,et,nt,it,st,rt,at){let ot=nt[it+0],lt=nt[it+1],ct=nt[it+2],ht=nt[it+3],dt=st[rt+0],ut=st[rt+1],pt=st[rt+2],vt=st[rt+3];if(ht!==vt||ot!==dt||lt!==ut||ct!==pt){let Mt=ot*dt+lt*ut+ct*pt+ht*vt;if(Mt<0)dt=-dt,ut=-ut,pt=-pt,vt=-vt,Mt=-Mt;let ft=1-at;if(Mt<0.9995){let mt=Math.acos(Mt),Tt=Math.sin(mt);ft=Math.sin(ft*mt)/Tt,at=Math.sin(at*mt)/Tt,ot=ot*ft+dt*at,lt=lt*ft+ut*at,ct=ct*ft+pt*at,ht=ht*ft+vt*at}else{ot=ot*ft+dt*at,lt=lt*ft+ut*at,ct=ct*ft+pt*at,ht=ht*ft+vt*at;let mt=1/Math.sqrt(ot*ot+lt*lt+ct*ct+ht*ht);ot*=mt,lt*=mt,ct*=mt,ht*=mt}}tt[et]=ot,tt[et+1]=lt,tt[et+2]=ct,tt[et+3]=ht}static multiplyQuaternionsFlat(tt,et,nt,it,st,rt){let at=nt[it],ot=nt[it+1],lt=nt[it+2],ct=nt[it+3],ht=st[rt],dt=st[rt+1],ut=st[rt+2],pt=st[rt+3];return tt[et]=at*pt+ct*ht+ot*ut-lt*dt,tt[et+1]=ot*pt+ct*dt+lt*ht-at*ut,tt[et+2]=lt*pt+ct*ut+at*dt-ot*ht,tt[et+3]=ct*pt-at*ht-ot*dt-lt*ut,tt}get x(){return this._x}set x(tt){this._x=tt,this._onChangeCallback()}get y(){return this._y}set y(tt){this._y=tt,this._onChangeCallback()}get z(){return this._z}set z(tt){this._z=tt,this._onChangeCallback()}get w(){return this._w}set w(tt){this._w=tt,this._onChangeCallback()}set(tt,et,nt,it){return this._x=tt,this._y=et,this._z=nt,this._w=it,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(tt){return this._x=tt.x,this._y=tt.y,this._z=tt.z,this._w=tt.w,this._onChangeCallback(),this}setFromEuler(tt,et=!0){let{_x:nt,_y:it,_z:st,_order:rt}=tt,{cos:at,sin:ot}=Math,lt=at(nt/2),ct=at(it/2),ht=at(st/2),dt=ot(nt/2),ut=ot(it/2),pt=ot(st/2);switch(rt){case"XYZ":this._x=dt*ct*ht+lt*ut*pt,this._y=lt*ut*ht-dt*ct*pt,this._z=lt*ct*pt+dt*ut*ht,this._w=lt*ct*ht-dt*ut*pt;break;case"YXZ":this._x=dt*ct*ht+lt*ut*pt,this._y=lt*ut*ht-dt*ct*pt,this._z=lt*ct*pt-dt*ut*ht,this._w=lt*ct*ht+dt*ut*pt;break;case"ZXY":this._x=dt*ct*ht-lt*ut*pt,this._y=lt*ut*ht+dt*ct*pt,this._z=lt*ct*pt+dt*ut*ht,this._w=lt*ct*ht-dt*ut*pt;break;case"ZYX":this._x=dt*ct*ht-lt*ut*pt,this._y=lt*ut*ht+dt*ct*pt,this._z=lt*ct*pt-dt*ut*ht,this._w=lt*ct*ht+dt*ut*pt;break;case"YZX":this._x=dt*ct*ht+lt*ut*pt,this._y=lt*ut*ht+dt*ct*pt,this._z=lt*ct*pt-dt*ut*ht,this._w=lt*ct*ht-dt*ut*pt;break;case"XZY":this._x=dt*ct*ht-lt*ut*pt,this._y=lt*ut*ht-dt*ct*pt,this._z=lt*ct*pt+dt*ut*ht,this._w=lt*ct*ht+dt*ut*pt;break;default:fn("Quaternion: .setFromEuler() encountered an unknown order: "+rt)}if(et===!0)this._onChangeCallback();return this}setFromAxisAngle(tt,et){let nt=et/2,it=Math.sin(nt);return this._x=tt.x*it,this._y=tt.y*it,this._z=tt.z*it,this._w=Math.cos(nt),this._onChangeCallback(),this}setFromRotationMatrix(tt){let et=tt.elements,nt=et[0],it=et[4],st=et[8],rt=et[1],at=et[5],ot=et[9],lt=et[2],ct=et[6],ht=et[10],dt=nt+at+ht;if(dt>0){let ut=0.5/Math.sqrt(dt+1);this._w=0.25/ut,this._x=(ct-ot)*ut,this._y=(st-lt)*ut,this._z=(rt-it)*ut}else if(nt>at&&nt>ht){let ut=2*Math.sqrt(1+nt-at-ht);this._w=(ct-ot)/ut,this._x=0.25*ut,this._y=(it+rt)/ut,this._z=(st+lt)/ut}else if(at>ht){let ut=2*Math.sqrt(1+at-nt-ht);this._w=(st-lt)/ut,this._x=(it+rt)/ut,this._y=0.25*ut,this._z=(ot+ct)/ut}else{let ut=2*Math.sqrt(1+ht-nt-at);this._w=(rt-it)/ut,this._x=(st+lt)/ut,this._y=(ot+ct)/ut,this._z=0.25*ut}return this._onChangeCallback(),this}setFromUnitVectors(tt,et){let nt=tt.dot(et)+1;if(nt<0.00000001)if(nt=0,Math.abs(tt.x)>Math.abs(tt.z))this._x=-tt.y,this._y=tt.x,this._z=0,this._w=nt;else this._x=0,this._y=-tt.z,this._z=tt.y,this._w=nt;else this._x=tt.y*et.z-tt.z*et.y,this._y=tt.z*et.x-tt.x*et.z,this._z=tt.x*et.y-tt.y*et.x,this._w=nt;return this.normalize()}angleTo(tt){return 2*Math.acos(Math.abs(wn(this.dot(tt),-1,1)))}rotateTowards(tt,et){let nt=this.angleTo(tt);if(nt===0)return this;let it=Math.min(1,et/nt);return this.slerp(tt,it),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(tt){return this._x*tt._x+this._y*tt._y+this._z*tt._z+this._w*tt._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let tt=this.length();if(tt===0)this._x=0,this._y=0,this._z=0,this._w=1;else tt=1/tt,this._x=this._x*tt,this._y=this._y*tt,this._z=this._z*tt,this._w=this._w*tt;return this._onChangeCallback(),this}multiply(tt){return this.multiplyQuaternions(this,tt)}premultiply(tt){return this.multiplyQuaternions(tt,this)}multiplyQuaternions(tt,et){let{_x:nt,_y:it,_z:st,_w:rt}=tt,{_x:at,_y:ot,_z:lt,_w:ct}=et;return this._x=nt*ct+rt*at+it*lt-st*ot,this._y=it*ct+rt*ot+st*at-nt*lt,this._z=st*ct+rt*lt+nt*ot-it*at,this._w=rt*ct-nt*at-it*ot-st*lt,this._onChangeCallback(),this}slerp(tt,et){let{_x:nt,_y:it,_z:st,_w:rt}=tt,at=this.dot(tt);if(at<0)nt=-nt,it=-it,st=-st,rt=-rt,at=-at;let ot=1-et;if(at<0.9995){let lt=Math.acos(at),ct=Math.sin(lt);ot=Math.sin(ot*lt)/ct,et=Math.sin(et*lt)/ct,this._x=this._x*ot+nt*et,this._y=this._y*ot+it*et,this._z=this._z*ot+st*et,this._w=this._w*ot+rt*et,this._onChangeCallback()}else this._x=this._x*ot+nt*et,this._y=this._y*ot+it*et,this._z=this._z*ot+st*et,this._w=this._w*ot+rt*et,this.normalize();return this}slerpQuaternions(tt,et,nt){return this.copy(tt).slerp(et,nt)}random(){let tt=2*Math.PI*Math.random(),et=2*Math.PI*Math.random(),nt=Math.random(),it=Math.sqrt(1-nt),st=Math.sqrt(nt);return this.set(it*Math.sin(tt),it*Math.cos(tt),st*Math.sin(et),st*Math.cos(et))}equals(tt){return tt._x===this._x&&tt._y===this._y&&tt._z===this._z&&tt._w===this._w}fromArray(tt,et=0){return this._x=tt[et],this._y=tt[et+1],this._z=tt[et+2],this._w=tt[et+3],this._onChangeCallback(),this}toArray(tt=[],et=0){return tt[et]=this._x,tt[et+1]=this._y,tt[et+2]=this._z,tt[et+3]=this._w,tt}fromBufferAttribute(tt,et){return this._x=tt.getX(et),this._y=tt.getY(et),this._z=tt.getZ(et),this._w=tt.getW(et),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(tt){return this._onChangeCallback=tt,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class e{static{this.prototype.isVector3=!0}constructor(tt=0,et=0,nt=0){this.x=tt,this.y=et,this.z=nt}set(tt,et,nt){if(nt===void 0)nt=this.z;return this.x=tt,this.y=et,this.z=nt,this}setScalar(tt){return this.x=tt,this.y=tt,this.z=tt,this}setX(tt){return this.x=tt,this}setY(tt){return this.y=tt,this}setZ(tt){return this.z=tt,this}setComponent(tt,et){switch(tt){case 0:this.x=et;break;case 1:this.y=et;break;case 2:this.z=et;break;default:throw Error("THREE.Vector3: index is out of range: "+tt)}return this}getComponent(tt){switch(tt){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("THREE.Vector3: index is out of range: "+tt)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(tt){return this.x=tt.x,this.y=tt.y,this.z=tt.z,this}add(tt){return this.x+=tt.x,this.y+=tt.y,this.z+=tt.z,this}addScalar(tt){return this.x+=tt,this.y+=tt,this.z+=tt,this}addVectors(tt,et){return this.x=tt.x+et.x,this.y=tt.y+et.y,this.z=tt.z+et.z,this}addScaledVector(tt,et){return this.x+=tt.x*et,this.y+=tt.y*et,this.z+=tt.z*et,this}sub(tt){return this.x-=tt.x,this.y-=tt.y,this.z-=tt.z,this}subScalar(tt){return this.x-=tt,this.y-=tt,this.z-=tt,this}subVectors(tt,et){return this.x=tt.x-et.x,this.y=tt.y-et.y,this.z=tt.z-et.z,this}multiply(tt){return this.x*=tt.x,this.y*=tt.y,this.z*=tt.z,this}multiplyScalar(tt){return this.x*=tt,this.y*=tt,this.z*=tt,this}multiplyVectors(tt,et){return this.x=tt.x*et.x,this.y=tt.y*et.y,this.z=tt.z*et.z,this}applyEuler(tt){return this.applyQuaternion(pl.setFromEuler(tt))}applyAxisAngle(tt,et){return this.applyQuaternion(pl.setFromAxisAngle(tt,et))}applyMatrix3(tt){let et=this.x,nt=this.y,it=this.z,st=tt.elements;return this.x=st[0]*et+st[3]*nt+st[6]*it,this.y=st[1]*et+st[4]*nt+st[7]*it,this.z=st[2]*et+st[5]*nt+st[8]*it,this}applyNormalMatrix(tt){return this.applyMatrix3(tt).normalize()}applyMatrix4(tt){let et=this.x,nt=this.y,it=this.z,st=tt.elements,rt=1/(st[3]*et+st[7]*nt+st[11]*it+st[15]);return this.x=(st[0]*et+st[4]*nt+st[8]*it+st[12])*rt,this.y=(st[1]*et+st[5]*nt+st[9]*it+st[13])*rt,this.z=(st[2]*et+st[6]*nt+st[10]*it+st[14])*rt,this}applyQuaternion(tt){let et=this.x,nt=this.y,it=this.z,{x:st,y:rt,z:at,w:ot}=tt,lt=2*(rt*it-at*nt),ct=2*(at*et-st*it),ht=2*(st*nt-rt*et);return this.x=et+ot*lt+rt*ht-at*ct,this.y=nt+ot*ct+at*lt-st*ht,this.z=it+ot*ht+st*ct-rt*lt,this}project(tt){return this.applyMatrix4(tt.matrixWorldInverse).applyMatrix4(tt.projectionMatrix)}unproject(tt){return this.applyMatrix4(tt.projectionMatrixInverse).applyMatrix4(tt.matrixWorld)}transformDirection(tt){let et=this.x,nt=this.y,it=this.z,st=tt.elements;return this.x=st[0]*et+st[4]*nt+st[8]*it,this.y=st[1]*et+st[5]*nt+st[9]*it,this.z=st[2]*et+st[6]*nt+st[10]*it,this.normalize()}divide(tt){return this.x/=tt.x,this.y/=tt.y,this.z/=tt.z,this}divideScalar(tt){return this.multiplyScalar(1/tt)}min(tt){return this.x=Math.min(this.x,tt.x),this.y=Math.min(this.y,tt.y),this.z=Math.min(this.z,tt.z),this}max(tt){return this.x=Math.max(this.x,tt.x),this.y=Math.max(this.y,tt.y),this.z=Math.max(this.z,tt.z),this}clamp(tt,et){return this.x=wn(this.x,tt.x,et.x),this.y=wn(this.y,tt.y,et.y),this.z=wn(this.z,tt.z,et.z),this}clampScalar(tt,et){return this.x=wn(this.x,tt,et),this.y=wn(this.y,tt,et),this.z=wn(this.z,tt,et),this}clampLength(tt,et){let nt=this.length();return this.divideScalar(nt||1).multiplyScalar(wn(nt,tt,et))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(tt){return this.x*tt.x+this.y*tt.y+this.z*tt.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(tt){return this.normalize().multiplyScalar(tt)}lerp(tt,et){return this.x+=(tt.x-this.x)*et,this.y+=(tt.y-this.y)*et,this.z+=(tt.z-this.z)*et,this}lerpVectors(tt,et,nt){return this.x=tt.x+(et.x-tt.x)*nt,this.y=tt.y+(et.y-tt.y)*nt,this.z=tt.z+(et.z-tt.z)*nt,this}cross(tt){return this.crossVectors(this,tt)}crossVectors(tt,et){let{x:nt,y:it,z:st}=tt,{x:rt,y:at,z:ot}=et;return this.x=it*ot-st*at,this.y=st*rt-nt*ot,this.z=nt*at-it*rt,this}projectOnVector(tt){let et=tt.lengthSq();if(et===0)return this.set(0,0,0);let nt=tt.dot(this)/et;return this.copy(tt).multiplyScalar(nt)}projectOnPlane(tt){return fa.copy(this).projectOnVector(tt),this.sub(fa)}reflect(tt){return this.sub(fa.copy(tt).multiplyScalar(2*this.dot(tt)))}angleTo(tt){let et=Math.sqrt(this.lengthSq()*tt.lengthSq());if(et===0)return Math.PI/2;let nt=this.dot(tt)/et;return Math.acos(wn(nt,-1,1))}distanceTo(tt){return Math.sqrt(this.distanceToSquared(tt))}distanceToSquared(tt){let et=this.x-tt.x,nt=this.y-tt.y,it=this.z-tt.z;return et*et+nt*nt+it*it}manhattanDistanceTo(tt){return Math.abs(this.x-tt.x)+Math.abs(this.y-tt.y)+Math.abs(this.z-tt.z)}setFromSpherical(tt){return this.setFromSphericalCoords(tt.radius,tt.phi,tt.theta)}setFromSphericalCoords(tt,et,nt){let it=Math.sin(et)*tt;return this.x=it*Math.sin(nt),this.y=Math.cos(et)*tt,this.z=it*Math.cos(nt),this}setFromCylindrical(tt){return this.setFromCylindricalCoords(tt.radius,tt.theta,tt.y)}setFromCylindricalCoords(tt,et,nt){return this.x=tt*Math.sin(et),this.y=nt,this.z=tt*Math.cos(et),this}setFromMatrixPosition(tt){let et=tt.elements;return this.x=et[12],this.y=et[13],this.z=et[14],this}setFromMatrixScale(tt){let et=this.setFromMatrixColumn(tt,0).length(),nt=this.setFromMatrixColumn(tt,1).length(),it=this.setFromMatrixColumn(tt,2).length();return this.x=et,this.y=nt,this.z=it,this}setFromMatrixColumn(tt,et){return this.fromArray(tt.elements,et*4)}setFromMatrix3Column(tt,et){return this.fromArray(tt.elements,et*3)}setFromEuler(tt){return this.x=tt._x,this.y=tt._y,this.z=tt._z,this}setFromColor(tt){return this.x=tt.r,this.y=tt.g,this.z=tt.b,this}equals(tt){return tt.x===this.x&&tt.y===this.y&&tt.z===this.z}fromArray(tt,et=0){return this.x=tt[et],this.y=tt[et+1],this.z=tt[et+2],this}toArray(tt=[],et=0){return tt[et]=this.x,tt[et+1]=this.y,tt[et+2]=this.z,tt}fromBufferAttribute(tt,et){return this.x=tt.getX(et),this.y=tt.getY(et),this.z=tt.getZ(et),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let tt=Math.random()*Math.PI*2,et=Math.random()*2-1,nt=Math.sqrt(1-et*et);return this.x=nt*Math.cos(tt),this.y=et,this.z=nt*Math.sin(tt),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var fa=new e,pl=new C;class yn{static{this.prototype.isMatrix3=!0}constructor(tt,et,nt,it,st,rt,at,ot,lt){if(this.elements=[1,0,0,0,1,0,0,0,1],tt!==void 0)this.set(tt,et,nt,it,st,rt,at,ot,lt)}set(tt,et,nt,it,st,rt,at,ot,lt){let ct=this.elements;return ct[0]=tt,ct[1]=it,ct[2]=at,ct[3]=et,ct[4]=st,ct[5]=ot,ct[6]=nt,ct[7]=rt,ct[8]=lt,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(tt){let et=this.elements,nt=tt.elements;return et[0]=nt[0],et[1]=nt[1],et[2]=nt[2],et[3]=nt[3],et[4]=nt[4],et[5]=nt[5],et[6]=nt[6],et[7]=nt[7],et[8]=nt[8],this}extractBasis(tt,et,nt){return tt.setFromMatrix3Column(this,0),et.setFromMatrix3Column(this,1),nt.setFromMatrix3Column(this,2),this}setFromMatrix4(tt){let et=tt.elements;return this.set(et[0],et[4],et[8],et[1],et[5],et[9],et[2],et[6],et[10]),this}multiply(tt){return this.multiplyMatrices(this,tt)}premultiply(tt){return this.multiplyMatrices(tt,this)}multiplyMatrices(tt,et){let nt=tt.elements,it=et.elements,st=this.elements,rt=nt[0],at=nt[3],ot=nt[6],lt=nt[1],ct=nt[4],ht=nt[7],dt=nt[2],ut=nt[5],pt=nt[8],vt=it[0],Mt=it[3],ft=it[6],mt=it[1],Tt=it[4],Et=it[7],bt=it[2],At=it[5],It=it[8];return st[0]=rt*vt+at*mt+ot*bt,st[3]=rt*Mt+at*Tt+ot*At,st[6]=rt*ft+at*Et+ot*It,st[1]=lt*vt+ct*mt+ht*bt,st[4]=lt*Mt+ct*Tt+ht*At,st[7]=lt*ft+ct*Et+ht*It,st[2]=dt*vt+ut*mt+pt*bt,st[5]=dt*Mt+ut*Tt+pt*At,st[8]=dt*ft+ut*Et+pt*It,this}multiplyScalar(tt){let et=this.elements;return et[0]*=tt,et[3]*=tt,et[6]*=tt,et[1]*=tt,et[4]*=tt,et[7]*=tt,et[2]*=tt,et[5]*=tt,et[8]*=tt,this}determinant(){let tt=this.elements,et=tt[0],nt=tt[1],it=tt[2],st=tt[3],rt=tt[4],at=tt[5],ot=tt[6],lt=tt[7],ct=tt[8];return et*rt*ct-et*at*lt-nt*st*ct+nt*at*ot+it*st*lt-it*rt*ot}invert(){let tt=this.elements,et=tt[0],nt=tt[1],it=tt[2],st=tt[3],rt=tt[4],at=tt[5],ot=tt[6],lt=tt[7],ct=tt[8],ht=ct*rt-at*lt,dt=at*ot-ct*st,ut=lt*st-rt*ot,pt=et*ht+nt*dt+it*ut;if(pt===0)return this.set(0,0,0,0,0,0,0,0,0);let vt=1/pt;return tt[0]=ht*vt,tt[1]=(it*lt-ct*nt)*vt,tt[2]=(at*nt-it*rt)*vt,tt[3]=dt*vt,tt[4]=(ct*et-it*ot)*vt,tt[5]=(it*st-at*et)*vt,tt[6]=ut*vt,tt[7]=(nt*ot-lt*et)*vt,tt[8]=(rt*et-nt*st)*vt,this}transpose(){let tt,et=this.elements;return tt=et[1],et[1]=et[3],et[3]=tt,tt=et[2],et[2]=et[6],et[6]=tt,tt=et[5],et[5]=et[7],et[7]=tt,this}getNormalMatrix(tt){return this.setFromMatrix4(tt).invert().transpose()}transposeIntoArray(tt){let et=this.elements;return tt[0]=et[0],tt[1]=et[3],tt[2]=et[6],tt[3]=et[1],tt[4]=et[4],tt[5]=et[7],tt[6]=et[2],tt[7]=et[5],tt[8]=et[8],this}setUvTransform(tt,et,nt,it,st,rt,at){let ot=Math.cos(st),lt=Math.sin(st);return this.set(nt*ot,nt*lt,-nt*(ot*rt+lt*at)+rt+tt,-it*lt,it*ot,-it*(-lt*rt+ot*at)+at+et,0,0,1),this}scale(tt,et){return cs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(pa.makeScale(tt,et)),this}rotate(tt){return cs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(pa.makeRotation(-tt)),this}translate(tt,et){return cs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(pa.makeTranslation(tt,et)),this}makeTranslation(tt,et){if(tt.isVector2)this.set(1,0,tt.x,0,1,tt.y,0,0,1);else this.set(1,0,tt,0,1,et,0,0,1);return this}makeRotation(tt){let et=Math.cos(tt),nt=Math.sin(tt);return this.set(et,-nt,0,nt,et,0,0,0,1),this}makeScale(tt,et){return this.set(tt,0,0,0,et,0,0,0,1),this}equals(tt){let et=this.elements,nt=tt.elements;for(let it=0;it<9;it++)if(et[it]!==nt[it])return!1;return!0}fromArray(tt,et=0){for(let nt=0;nt<9;nt++)this.elements[nt]=tt[nt+et];return this}toArray(tt=[],et=0){let nt=this.elements;return tt[et]=nt[0],tt[et+1]=nt[1],tt[et+2]=nt[2],tt[et+3]=nt[3],tt[et+4]=nt[4],tt[et+5]=nt[5],tt[et+6]=nt[6],tt[et+7]=nt[7],tt[et+8]=nt[8],tt}clone(){return new this.constructor().fromArray(this.elements)}}var pa=new yn,ml=new yn().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),gl=new yn().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function hu(){let tt={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(st,rt,at){if(this.enabled===!1||rt===at||!rt||!at)return st;if(this.spaces[rt].transfer==="srgb")st.r=Gi(st.r),st.g=Gi(st.g),st.b=Gi(st.b);if(this.spaces[rt].primaries!==this.spaces[at].primaries)st.applyMatrix3(this.spaces[rt].toXYZ),st.applyMatrix3(this.spaces[at].fromXYZ);if(this.spaces[at].transfer==="srgb")st.r=Is(st.r),st.g=Is(st.g),st.b=Is(st.b);return st},workingToColorSpace:function(st,rt){return this.convert(st,this.workingColorSpace,rt)},colorSpaceToWorking:function(st,rt){return this.convert(st,rt,this.workingColorSpace)},getPrimaries:function(st){return this.spaces[st].primaries},getTransfer:function(st){if(st==="")return"linear";return this.spaces[st].transfer},getToneMappingMode:function(st){return this.spaces[st].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(st,rt=this.workingColorSpace){return st.fromArray(this.spaces[rt].luminanceCoefficients)},define:function(st){Object.assign(this.spaces,st)},_getMatrix:function(st,rt,at){return st.copy(this.spaces[at].fromXYZ).multiply(this.spaces[rt].toXYZ)},_getDrawingBufferColorSpace:function(st){return this.spaces[st].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(st=this.workingColorSpace){return this.spaces[st].workingColorSpaceConfig.unpackColorSpace}},et=[0.64,0.33,0.3,0.6,0.15,0.06],nt=[0.2126,0.7152,0.0722],it=[0.3127,0.329];return tt.define({["srgb-linear"]:{primaries:et,whitePoint:it,transfer:"linear",toXYZ:ml,fromXYZ:gl,luminanceCoefficients:nt,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:et,whitePoint:it,transfer:"srgb",toXYZ:ml,fromXYZ:gl,luminanceCoefficients:nt,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),tt}var s=hu();function Gi(tt){return tt<0.04045?tt*0.0773993808:Math.pow(tt*0.9478672986+0.0521327014,2.4)}function Is(tt){return tt<0.0031308?tt*12.92:1.055*Math.pow(tt,0.41666)-0.055}var gs;class Fo{static getDataURL(tt,et="image/png"){if(/^data:/i.test(tt.src))return tt.src;if(typeof HTMLCanvasElement>"u")return tt.src;let nt;if(tt instanceof HTMLCanvasElement)nt=tt;else{if(gs===void 0)gs=Ps("canvas");gs.width=tt.width,gs.height=tt.height;let it=gs.getContext("2d");if(tt instanceof ImageData)it.putImageData(tt,0,0);else it.drawImage(tt,0,0,tt.width,tt.height);nt=gs}return nt.toDataURL(et)}static sRGBToLinear(tt){if(typeof HTMLImageElement<"u"&&tt instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&tt instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&tt instanceof ImageBitmap){let et=Ps("canvas");et.width=tt.width,et.height=tt.height;let nt=et.getContext("2d");nt.drawImage(tt,0,0,tt.width,tt.height);let it=nt.getImageData(0,0,tt.width,tt.height),st=it.data;for(let rt=0;rt<st.length;rt++)st[rt]=Gi(st[rt]/255)*255;return nt.putImageData(it,0,0),et}else if(tt.data){let et=tt.data.slice(0);for(let nt=0;nt<et.length;nt++)if(et instanceof Uint8Array||et instanceof Uint8ClampedArray)et[nt]=Math.floor(Gi(et[nt]/255)*255);else et[nt]=Gi(et[nt]);return{data:et,width:tt.width,height:tt.height}}else return fn("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),tt}}var uu=0;class nr{constructor(tt=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:uu++}),this.uuid=Ci(),this.data=tt,this.dataReady=!0,this.version=0}getSize(tt){let et=this.data;if(typeof HTMLVideoElement<"u"&&et instanceof HTMLVideoElement)tt.set(et.videoWidth,et.videoHeight,0);else if(typeof VideoFrame<"u"&&et instanceof VideoFrame)tt.set(et.displayWidth,et.displayHeight,0);else if(et!==null)tt.set(et.width||0,et.height||0,et.depth||0);else tt.set(0,0,0);return tt}set needsUpdate(tt){if(tt===!0)this.version++}toJSON(tt){let et=tt===void 0||typeof tt==="string";if(!et&&tt.images[this.uuid]!==void 0)return tt.images[this.uuid];let nt={uuid:this.uuid,url:""},it=this.data;if(it!==null){let st;if(Array.isArray(it)){st=[];for(let rt=0,at=it.length;rt<at;rt++)if(it[rt].isDataTexture)st.push(ma(it[rt].image));else st.push(ma(it[rt]))}else st=ma(it);nt.url=st}if(!et)tt.images[this.uuid]=nt;return nt}}function ma(tt){if(typeof HTMLImageElement<"u"&&tt instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&tt instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&tt instanceof ImageBitmap)return Fo.getDataURL(tt);else if(tt.data)return{data:Array.from(tt.data),width:tt.width,height:tt.height,type:tt.data.constructor.name};else return fn("Texture: Unable to serialize Texture."),{}}var du=0,ga=new e;class c extends Wi{constructor(tt=c.DEFAULT_IMAGE,et=c.DEFAULT_MAPPING,nt=1001,it=1001,st=1006,rt=1008,at=1023,ot=1009,lt=c.DEFAULT_ANISOTROPY,ct=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:du++}),this.uuid=Ci(),this.name="",this.source=new nr(tt),this.mipmaps=[],this.mapping=et,this.channel=0,this.wrapS=nt,this.wrapT=it,this.magFilter=st,this.minFilter=rt,this.anisotropy=lt,this.format=at,this.internalFormat=null,this.type=ot,this.offset=new n(0,0),this.repeat=new n(1,1),this.center=new n(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new yn,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=ct,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=tt&&tt.depth&&tt.depth>1?!0:!1,this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(ga).x}get height(){return this.source.getSize(ga).y}get depth(){return this.source.getSize(ga).z}get image(){return this.source.data}set image(tt){this.source.data=tt}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(tt,et){this.updateRanges.push({start:tt,count:et})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(tt){return this.name=tt.name,this.source=tt.source,this.mipmaps=tt.mipmaps.slice(0),this.mapping=tt.mapping,this.channel=tt.channel,this.wrapS=tt.wrapS,this.wrapT=tt.wrapT,this.magFilter=tt.magFilter,this.minFilter=tt.minFilter,this.anisotropy=tt.anisotropy,this.format=tt.format,this.internalFormat=tt.internalFormat,this.type=tt.type,this.normalized=tt.normalized,this.offset.copy(tt.offset),this.repeat.copy(tt.repeat),this.center.copy(tt.center),this.rotation=tt.rotation,this.matrixAutoUpdate=tt.matrixAutoUpdate,this.matrix.copy(tt.matrix),this.generateMipmaps=tt.generateMipmaps,this.mipmapsAutoUpdate=tt.mipmapsAutoUpdate,this.premultiplyAlpha=tt.premultiplyAlpha,this.flipY=tt.flipY,this.unpackAlignment=tt.unpackAlignment,this.colorSpace=tt.colorSpace,this.renderTarget=tt.renderTarget,this.isRenderTargetTexture=tt.isRenderTargetTexture,this.isPMREMTexture=tt.isPMREMTexture,this.isArrayTexture=tt.isArrayTexture,this.userData=JSON.parse(JSON.stringify(tt.userData)),this.needsUpdate=!0,this}setValues(tt){for(let et in tt){let nt=tt[et];if(nt===void 0){fn(`Texture.setValues(): parameter '${et}' has value of undefined.`);continue}let it=this[et];if(it===void 0){fn(`Texture.setValues(): property '${et}' does not exist.`);continue}if(it&&nt&&(it.isVector2&&nt.isVector2))it.copy(nt);else if(it&&nt&&(it.isVector3&&nt.isVector3))it.copy(nt);else if(it&&nt&&(it.isMatrix3&&nt.isMatrix3))it.copy(nt);else this[et]=nt}}toJSON(tt){let et=tt===void 0||typeof tt==="string";if(!et&&tt.textures[this.uuid]!==void 0)return tt.textures[this.uuid];let nt={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(tt).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)nt.userData=this.userData;if(!et)tt.textures[this.uuid]=nt;return nt}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(tt){if(this.mapping!==300)return tt;if(tt.applyMatrix3(this.matrix),tt.x<0||tt.x>1)switch(this.wrapS){case 1000:tt.x=tt.x-Math.floor(tt.x);break;case 1001:tt.x=tt.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(tt.x)%2)===1)tt.x=Math.ceil(tt.x)-tt.x;else tt.x=tt.x-Math.floor(tt.x);break}if(tt.y<0||tt.y>1)switch(this.wrapT){case 1000:tt.y=tt.y-Math.floor(tt.y);break;case 1001:tt.y=tt.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(tt.y)%2)===1)tt.y=Math.ceil(tt.y)-tt.y;else tt.y=tt.y-Math.floor(tt.y);break}if(this.flipY)tt.y=1-tt.y;return tt}set needsUpdate(tt){if(tt===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(tt){if(tt===!0)this.pmremVersion++}}c.DEFAULT_IMAGE=null;c.DEFAULT_MAPPING=300;c.DEFAULT_ANISOTROPY=1;class Fn{static{this.prototype.isVector4=!0}constructor(tt=0,et=0,nt=0,it=1){this.x=tt,this.y=et,this.z=nt,this.w=it}get width(){return this.z}set width(tt){this.z=tt}get height(){return this.w}set height(tt){this.w=tt}set(tt,et,nt,it){return this.x=tt,this.y=et,this.z=nt,this.w=it,this}setScalar(tt){return this.x=tt,this.y=tt,this.z=tt,this.w=tt,this}setX(tt){return this.x=tt,this}setY(tt){return this.y=tt,this}setZ(tt){return this.z=tt,this}setW(tt){return this.w=tt,this}setComponent(tt,et){switch(tt){case 0:this.x=et;break;case 1:this.y=et;break;case 2:this.z=et;break;case 3:this.w=et;break;default:throw Error("THREE.Vector4: index is out of range: "+tt)}return this}getComponent(tt){switch(tt){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("THREE.Vector4: index is out of range: "+tt)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(tt){return this.x=tt.x,this.y=tt.y,this.z=tt.z,this.w=tt.w!==void 0?tt.w:1,this}add(tt){return this.x+=tt.x,this.y+=tt.y,this.z+=tt.z,this.w+=tt.w,this}addScalar(tt){return this.x+=tt,this.y+=tt,this.z+=tt,this.w+=tt,this}addVectors(tt,et){return this.x=tt.x+et.x,this.y=tt.y+et.y,this.z=tt.z+et.z,this.w=tt.w+et.w,this}addScaledVector(tt,et){return this.x+=tt.x*et,this.y+=tt.y*et,this.z+=tt.z*et,this.w+=tt.w*et,this}sub(tt){return this.x-=tt.x,this.y-=tt.y,this.z-=tt.z,this.w-=tt.w,this}subScalar(tt){return this.x-=tt,this.y-=tt,this.z-=tt,this.w-=tt,this}subVectors(tt,et){return this.x=tt.x-et.x,this.y=tt.y-et.y,this.z=tt.z-et.z,this.w=tt.w-et.w,this}multiply(tt){return this.x*=tt.x,this.y*=tt.y,this.z*=tt.z,this.w*=tt.w,this}multiplyScalar(tt){return this.x*=tt,this.y*=tt,this.z*=tt,this.w*=tt,this}applyMatrix4(tt){let et=this.x,nt=this.y,it=this.z,st=this.w,rt=tt.elements;return this.x=rt[0]*et+rt[4]*nt+rt[8]*it+rt[12]*st,this.y=rt[1]*et+rt[5]*nt+rt[9]*it+rt[13]*st,this.z=rt[2]*et+rt[6]*nt+rt[10]*it+rt[14]*st,this.w=rt[3]*et+rt[7]*nt+rt[11]*it+rt[15]*st,this}divide(tt){return this.x/=tt.x,this.y/=tt.y,this.z/=tt.z,this.w/=tt.w,this}divideScalar(tt){return this.multiplyScalar(1/tt)}setAxisAngleFromQuaternion(tt){this.w=2*Math.acos(tt.w);let et=Math.sqrt(1-tt.w*tt.w);if(et<0.0001)this.x=1,this.y=0,this.z=0;else this.x=tt.x/et,this.y=tt.y/et,this.z=tt.z/et;return this}setAxisAngleFromRotationMatrix(tt){let et,nt,it,st,rt=0.01,at=0.1,ot=tt.elements,lt=ot[0],ct=ot[4],ht=ot[8],dt=ot[1],ut=ot[5],pt=ot[9],vt=ot[2],Mt=ot[6],ft=ot[10];if(Math.abs(ct-dt)<0.01&&Math.abs(ht-vt)<0.01&&Math.abs(pt-Mt)<0.01){if(Math.abs(ct+dt)<0.1&&Math.abs(ht+vt)<0.1&&Math.abs(pt+Mt)<0.1&&Math.abs(lt+ut+ft-3)<0.1)return this.set(1,0,0,0),this;et=Math.PI;let Tt=(lt+1)/2,Et=(ut+1)/2,bt=(ft+1)/2,At=(ct+dt)/4,It=(ht+vt)/4,gt=(pt+Mt)/4;if(Tt>Et&&Tt>bt)if(Tt<0.01)nt=0,it=0.707106781,st=0.707106781;else nt=Math.sqrt(Tt),it=At/nt,st=It/nt;else if(Et>bt)if(Et<0.01)nt=0.707106781,it=0,st=0.707106781;else it=Math.sqrt(Et),nt=At/it,st=gt/it;else if(bt<0.01)nt=0.707106781,it=0.707106781,st=0;else st=Math.sqrt(bt),nt=It/st,it=gt/st;return this.set(nt,it,st,et),this}let mt=Math.sqrt((Mt-pt)*(Mt-pt)+(ht-vt)*(ht-vt)+(dt-ct)*(dt-ct));if(Math.abs(mt)<0.001)mt=1;return this.x=(Mt-pt)/mt,this.y=(ht-vt)/mt,this.z=(dt-ct)/mt,this.w=Math.acos((lt+ut+ft-1)/2),this}setFromMatrixPosition(tt){let et=tt.elements;return this.x=et[12],this.y=et[13],this.z=et[14],this.w=et[15],this}min(tt){return this.x=Math.min(this.x,tt.x),this.y=Math.min(this.y,tt.y),this.z=Math.min(this.z,tt.z),this.w=Math.min(this.w,tt.w),this}max(tt){return this.x=Math.max(this.x,tt.x),this.y=Math.max(this.y,tt.y),this.z=Math.max(this.z,tt.z),this.w=Math.max(this.w,tt.w),this}clamp(tt,et){return this.x=wn(this.x,tt.x,et.x),this.y=wn(this.y,tt.y,et.y),this.z=wn(this.z,tt.z,et.z),this.w=wn(this.w,tt.w,et.w),this}clampScalar(tt,et){return this.x=wn(this.x,tt,et),this.y=wn(this.y,tt,et),this.z=wn(this.z,tt,et),this.w=wn(this.w,tt,et),this}clampLength(tt,et){let nt=this.length();return this.divideScalar(nt||1).multiplyScalar(wn(nt,tt,et))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(tt){return this.x*tt.x+this.y*tt.y+this.z*tt.z+this.w*tt.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(tt){return this.normalize().multiplyScalar(tt)}lerp(tt,et){return this.x+=(tt.x-this.x)*et,this.y+=(tt.y-this.y)*et,this.z+=(tt.z-this.z)*et,this.w+=(tt.w-this.w)*et,this}lerpVectors(tt,et,nt){return this.x=tt.x+(et.x-tt.x)*nt,this.y=tt.y+(et.y-tt.y)*nt,this.z=tt.z+(et.z-tt.z)*nt,this.w=tt.w+(et.w-tt.w)*nt,this}equals(tt){return tt.x===this.x&&tt.y===this.y&&tt.z===this.z&&tt.w===this.w}fromArray(tt,et=0){return this.x=tt[et],this.y=tt[et+1],this.z=tt[et+2],this.w=tt[et+3],this}toArray(tt=[],et=0){return tt[et]=this.x,tt[et+1]=this.y,tt[et+2]=this.z,tt[et+3]=this.w,tt}fromBufferAttribute(tt,et){return this.x=tt.getX(et),this.y=tt.getY(et),this.z=tt.getZ(et),this.w=tt.getW(et),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Oo extends Wi{constructor(tt=1,et=1,nt={}){super();nt=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},nt),this.isRenderTarget=!0,this.width=tt,this.height=et,this.depth=nt.depth,this.scissor=new Fn(0,0,tt,et),this.scissorTest=!1,this.viewport=new Fn(0,0,tt,et),this.textures=[];let it=nt.count;for(let st=0;st<it;st++)this.textures[st]=new c({width:tt,height:et,depth:nt.depth}),this.textures[st].isRenderTargetTexture=!0,this.textures[st].renderTarget=this;this._setTextureOptions(nt),this.depthBuffer=nt.depthBuffer,this.stencilBuffer=nt.stencilBuffer,this.resolveColorBuffer=nt.resolveColorBuffer,this.resolveDepthBuffer=nt.resolveDepthBuffer,this.resolveStencilBuffer=nt.resolveStencilBuffer,this.storeMultisampledColorBuffer=nt.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=nt.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=nt.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=nt.depthTexture,this.samples=nt.samples,this.multiview=nt.multiview,this.useArrayDepthTexture=nt.useArrayDepthTexture}_setTextureOptions(tt={}){let et={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(tt.mapping!==void 0)et.mapping=tt.mapping;if(tt.wrapS!==void 0)et.wrapS=tt.wrapS;if(tt.wrapT!==void 0)et.wrapT=tt.wrapT;if(tt.wrapR!==void 0)et.wrapR=tt.wrapR;if(tt.magFilter!==void 0)et.magFilter=tt.magFilter;if(tt.minFilter!==void 0)et.minFilter=tt.minFilter;if(tt.format!==void 0)et.format=tt.format;if(tt.type!==void 0)et.type=tt.type;if(tt.anisotropy!==void 0)et.anisotropy=tt.anisotropy;if(tt.colorSpace!==void 0)et.colorSpace=tt.colorSpace;if(tt.flipY!==void 0)et.flipY=tt.flipY;if(tt.generateMipmaps!==void 0)et.generateMipmaps=tt.generateMipmaps;if(tt.mipmapsAutoUpdate!==void 0)et.mipmapsAutoUpdate=tt.mipmapsAutoUpdate;if(tt.internalFormat!==void 0)et.internalFormat=tt.internalFormat;for(let nt=0;nt<this.textures.length;nt++)this.textures[nt].setValues(et)}get texture(){return this.textures[0]}set texture(tt){this.textures[0]=tt}set depthTexture(tt){if(this._depthTexture!==null&&this._depthTexture.renderTarget===this)this._depthTexture.renderTarget=null;if(tt!==null&&tt.renderTarget===null)tt.renderTarget=this;this._depthTexture=tt}get depthTexture(){return this._depthTexture}setSize(tt,et,nt=1){if(this.width!==tt||this.height!==et||this.depth!==nt){this.width=tt,this.height=et,this.depth=nt;for(let it=0,st=this.textures.length;it<st;it++)if(this.textures[it].image.width=tt,this.textures[it].image.height=et,this.textures[it].image.depth=nt,this.textures[it].isData3DTexture!==!0)this.textures[it].isArrayTexture=this.textures[it].image.depth>1;this.dispose()}this.viewport.set(0,0,tt,et),this.scissor.set(0,0,tt,et)}clone(){return new this.constructor().copy(this)}copy(tt){this.width=tt.width,this.height=tt.height,this.depth=tt.depth,this.scissor.copy(tt.scissor),this.scissorTest=tt.scissorTest,this.viewport.copy(tt.viewport),this.textures.length=0;for(let et=0,nt=tt.textures.length;et<nt;et++){this.textures[et]=tt.textures[et].clone(),this.textures[et].isRenderTargetTexture=!0,this.textures[et].renderTarget=this;let it=Object.assign({},tt.textures[et].image);this.textures[et].source=new nr(it)}if(this.depthBuffer=tt.depthBuffer,this.stencilBuffer=tt.stencilBuffer,this.resolveColorBuffer=tt.resolveColorBuffer,this.resolveDepthBuffer=tt.resolveDepthBuffer,this.resolveStencilBuffer=tt.resolveStencilBuffer,this.storeMultisampledColorBuffer=tt.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=tt.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=tt.storeMultisampledStencilBuffer,tt.depthTexture!==null)if(tt.depthTexture.renderTarget===tt){let et=tt.depthTexture.clone();et.renderTarget=null,this.depthTexture=et}else this.depthTexture=tt.depthTexture;else this.depthTexture=null;return this.samples=tt.samples,this.multiview=tt.multiview,this.useArrayDepthTexture=tt.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _ extends Oo{constructor(tt=1,et=1,nt={}){super(tt,et,nt);this.isWebGLRenderTarget=!0}}class $r extends c{constructor(tt=null,et=1,nt=1,it=1){super(null);this.isDataArrayTexture=!0,this.image={data:tt,width:et,height:nt,depth:it},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(tt){return super.copy(tt),this.wrapR=tt.wrapR,this}addLayerUpdate(tt){this.layerUpdates.add(tt)}clearLayerUpdates(){this.layerUpdates.clear()}}class Bo extends c{constructor(tt=null,et=1,nt=1,it=1){super(null);this.isData3DTexture=!0,this.image={data:tt,width:et,height:nt,depth:it},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(tt){return super.copy(tt),this.wrapR=tt.wrapR,this}}class i{static{this.prototype.isMatrix4=!0}constructor(tt,et,nt,it,st,rt,at,ot,lt,ct,ht,dt,ut,pt,vt,Mt){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],tt!==void 0)this.set(tt,et,nt,it,st,rt,at,ot,lt,ct,ht,dt,ut,pt,vt,Mt)}set(tt,et,nt,it,st,rt,at,ot,lt,ct,ht,dt,ut,pt,vt,Mt){let ft=this.elements;return ft[0]=tt,ft[4]=et,ft[8]=nt,ft[12]=it,ft[1]=st,ft[5]=rt,ft[9]=at,ft[13]=ot,ft[2]=lt,ft[6]=ct,ft[10]=ht,ft[14]=dt,ft[3]=ut,ft[7]=pt,ft[11]=vt,ft[15]=Mt,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(tt){let et=this.elements,nt=tt.elements;return et[0]=nt[0],et[1]=nt[1],et[2]=nt[2],et[3]=nt[3],et[4]=nt[4],et[5]=nt[5],et[6]=nt[6],et[7]=nt[7],et[8]=nt[8],et[9]=nt[9],et[10]=nt[10],et[11]=nt[11],et[12]=nt[12],et[13]=nt[13],et[14]=nt[14],et[15]=nt[15],this}copyPosition(tt){let et=this.elements,nt=tt.elements;return et[12]=nt[12],et[13]=nt[13],et[14]=nt[14],this}setFromMatrix3(tt){let et=tt.elements;return this.set(et[0],et[3],et[6],0,et[1],et[4],et[7],0,et[2],et[5],et[8],0,0,0,0,1),this}extractBasis(tt,et,nt){if(this.determinantAffine()===0)return tt.set(1,0,0),et.set(0,1,0),nt.set(0,0,1),this;return tt.setFromMatrixColumn(this,0),et.setFromMatrixColumn(this,1),nt.setFromMatrixColumn(this,2),this}makeBasis(tt,et,nt){return this.set(tt.x,et.x,nt.x,0,tt.y,et.y,nt.y,0,tt.z,et.z,nt.z,0,0,0,0,1),this}extractRotation(tt){if(tt.determinantAffine()===0)return this.identity();let et=this.elements,nt=tt.elements,it=1/_s.setFromMatrixColumn(tt,0).length(),st=1/_s.setFromMatrixColumn(tt,1).length(),rt=1/_s.setFromMatrixColumn(tt,2).length();return et[0]=nt[0]*it,et[1]=nt[1]*it,et[2]=nt[2]*it,et[3]=0,et[4]=nt[4]*st,et[5]=nt[5]*st,et[6]=nt[6]*st,et[7]=0,et[8]=nt[8]*rt,et[9]=nt[9]*rt,et[10]=nt[10]*rt,et[11]=0,et[12]=0,et[13]=0,et[14]=0,et[15]=1,this}makeRotationFromEuler(tt){let et=this.elements,{x:nt,y:it,z:st}=tt,rt=Math.cos(nt),at=Math.sin(nt),ot=Math.cos(it),lt=Math.sin(it),ct=Math.cos(st),ht=Math.sin(st);if(tt.order==="XYZ"){let dt=rt*ct,ut=rt*ht,pt=at*ct,vt=at*ht;et[0]=ot*ct,et[4]=-ot*ht,et[8]=lt,et[1]=ut+pt*lt,et[5]=dt-vt*lt,et[9]=-at*ot,et[2]=vt-dt*lt,et[6]=pt+ut*lt,et[10]=rt*ot}else if(tt.order==="YXZ"){let dt=ot*ct,ut=ot*ht,pt=lt*ct,vt=lt*ht;et[0]=dt+vt*at,et[4]=pt*at-ut,et[8]=rt*lt,et[1]=rt*ht,et[5]=rt*ct,et[9]=-at,et[2]=ut*at-pt,et[6]=vt+dt*at,et[10]=rt*ot}else if(tt.order==="ZXY"){let dt=ot*ct,ut=ot*ht,pt=lt*ct,vt=lt*ht;et[0]=dt-vt*at,et[4]=-rt*ht,et[8]=pt+ut*at,et[1]=ut+pt*at,et[5]=rt*ct,et[9]=vt-dt*at,et[2]=-rt*lt,et[6]=at,et[10]=rt*ot}else if(tt.order==="ZYX"){let dt=rt*ct,ut=rt*ht,pt=at*ct,vt=at*ht;et[0]=ot*ct,et[4]=pt*lt-ut,et[8]=dt*lt+vt,et[1]=ot*ht,et[5]=vt*lt+dt,et[9]=ut*lt-pt,et[2]=-lt,et[6]=at*ot,et[10]=rt*ot}else if(tt.order==="YZX"){let dt=rt*ot,ut=rt*lt,pt=at*ot,vt=at*lt;et[0]=ot*ct,et[4]=vt-dt*ht,et[8]=pt*ht+ut,et[1]=ht,et[5]=rt*ct,et[9]=-at*ct,et[2]=-lt*ct,et[6]=ut*ht+pt,et[10]=dt-vt*ht}else if(tt.order==="XZY"){let dt=rt*ot,ut=rt*lt,pt=at*ot,vt=at*lt;et[0]=ot*ct,et[4]=-ht,et[8]=lt*ct,et[1]=dt*ht+vt,et[5]=rt*ct,et[9]=ut*ht-pt,et[2]=pt*ht-ut,et[6]=at*ct,et[10]=vt*ht+dt}return et[3]=0,et[7]=0,et[11]=0,et[12]=0,et[13]=0,et[14]=0,et[15]=1,this}makeRotationFromQuaternion(tt){return this.compose(fu,tt,pu)}lookAt(tt,et,nt){let it=this.elements;if(fi.subVectors(tt,et),fi.lengthSq()===0)fi.z=1;if(fi.normalize(),Xi.crossVectors(nt,fi),Xi.lengthSq()===0){if(Math.abs(nt.z)===1)fi.x+=0.0001;else fi.z+=0.0001;fi.normalize(),Xi.crossVectors(nt,fi)}return Xi.normalize(),pr.crossVectors(fi,Xi),it[0]=Xi.x,it[4]=pr.x,it[8]=fi.x,it[1]=Xi.y,it[5]=pr.y,it[9]=fi.y,it[2]=Xi.z,it[6]=pr.z,it[10]=fi.z,this}multiply(tt){return this.multiplyMatrices(this,tt)}premultiply(tt){return this.multiplyMatrices(tt,this)}multiplyMatrices(tt,et){let nt=tt.elements,it=et.elements,st=this.elements,rt=nt[0],at=nt[4],ot=nt[8],lt=nt[12],ct=nt[1],ht=nt[5],dt=nt[9],ut=nt[13],pt=nt[2],vt=nt[6],Mt=nt[10],ft=nt[14],mt=nt[3],Tt=nt[7],Et=nt[11],bt=nt[15],At=it[0],It=it[4],gt=it[8],yt=it[12],Nt=it[1],kt=it[5],Lt=it[9],zt=it[13],Kt=it[2],Rt=it[6],qt=it[10],Zt=it[14],Ot=it[3],Ye=it[7],Wt=it[11],$t=it[15];return st[0]=rt*At+at*Nt+ot*Kt+lt*Ot,st[4]=rt*It+at*kt+ot*Rt+lt*Ye,st[8]=rt*gt+at*Lt+ot*qt+lt*Wt,st[12]=rt*yt+at*zt+ot*Zt+lt*$t,st[1]=ct*At+ht*Nt+dt*Kt+ut*Ot,st[5]=ct*It+ht*kt+dt*Rt+ut*Ye,st[9]=ct*gt+ht*Lt+dt*qt+ut*Wt,st[13]=ct*yt+ht*zt+dt*Zt+ut*$t,st[2]=pt*At+vt*Nt+Mt*Kt+ft*Ot,st[6]=pt*It+vt*kt+Mt*Rt+ft*Ye,st[10]=pt*gt+vt*Lt+Mt*qt+ft*Wt,st[14]=pt*yt+vt*zt+Mt*Zt+ft*$t,st[3]=mt*At+Tt*Nt+Et*Kt+bt*Ot,st[7]=mt*It+Tt*kt+Et*Rt+bt*Ye,st[11]=mt*gt+Tt*Lt+Et*qt+bt*Wt,st[15]=mt*yt+Tt*zt+Et*Zt+bt*$t,this}multiplyScalar(tt){let et=this.elements;return et[0]*=tt,et[4]*=tt,et[8]*=tt,et[12]*=tt,et[1]*=tt,et[5]*=tt,et[9]*=tt,et[13]*=tt,et[2]*=tt,et[6]*=tt,et[10]*=tt,et[14]*=tt,et[3]*=tt,et[7]*=tt,et[11]*=tt,et[15]*=tt,this}determinant(){let tt=this.elements,et=tt[0],nt=tt[4],it=tt[8],st=tt[12],rt=tt[1],at=tt[5],ot=tt[9],lt=tt[13],ct=tt[2],ht=tt[6],dt=tt[10],ut=tt[14],pt=tt[3],vt=tt[7],Mt=tt[11],ft=tt[15],mt=ot*ut-lt*dt,Tt=at*ut-lt*ht,Et=at*dt-ot*ht,bt=rt*ut-lt*ct,At=rt*dt-ot*ct,It=rt*ht-at*ct;return et*(vt*mt-Mt*Tt+ft*Et)-nt*(pt*mt-Mt*bt+ft*At)+it*(pt*Tt-vt*bt+ft*It)-st*(pt*Et-vt*At+Mt*It)}determinantAffine(){let tt=this.elements,et=tt[0],nt=tt[4],it=tt[8],st=tt[1],rt=tt[5],at=tt[9],ot=tt[2],lt=tt[6],ct=tt[10];return et*(rt*ct-at*lt)-nt*(st*ct-at*ot)+it*(st*lt-rt*ot)}transpose(){let tt=this.elements,et;return et=tt[1],tt[1]=tt[4],tt[4]=et,et=tt[2],tt[2]=tt[8],tt[8]=et,et=tt[6],tt[6]=tt[9],tt[9]=et,et=tt[3],tt[3]=tt[12],tt[12]=et,et=tt[7],tt[7]=tt[13],tt[13]=et,et=tt[11],tt[11]=tt[14],tt[14]=et,this}setPosition(tt,et,nt){let it=this.elements;if(tt.isVector3)it[12]=tt.x,it[13]=tt.y,it[14]=tt.z;else it[12]=tt,it[13]=et,it[14]=nt;return this}invert(){let tt=this.elements,et=tt[0],nt=tt[1],it=tt[2],st=tt[3],rt=tt[4],at=tt[5],ot=tt[6],lt=tt[7],ct=tt[8],ht=tt[9],dt=tt[10],ut=tt[11],pt=tt[12],vt=tt[13],Mt=tt[14],ft=tt[15],mt=et*at-nt*rt,Tt=et*ot-it*rt,Et=et*lt-st*rt,bt=nt*ot-it*at,At=nt*lt-st*at,It=it*lt-st*ot,gt=ct*vt-ht*pt,yt=ct*Mt-dt*pt,Nt=ct*ft-ut*pt,kt=ht*Mt-dt*vt,Lt=ht*ft-ut*vt,zt=dt*ft-ut*Mt,Kt=mt*zt-Tt*Lt+Et*kt+bt*Nt-At*yt+It*gt;if(Kt===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let Rt=1/Kt;return tt[0]=(at*zt-ot*Lt+lt*kt)*Rt,tt[1]=(it*Lt-nt*zt-st*kt)*Rt,tt[2]=(vt*It-Mt*At+ft*bt)*Rt,tt[3]=(dt*At-ht*It-ut*bt)*Rt,tt[4]=(ot*Nt-rt*zt-lt*yt)*Rt,tt[5]=(et*zt-it*Nt+st*yt)*Rt,tt[6]=(Mt*Et-pt*It-ft*Tt)*Rt,tt[7]=(ct*It-dt*Et+ut*Tt)*Rt,tt[8]=(rt*Lt-at*Nt+lt*gt)*Rt,tt[9]=(nt*Nt-et*Lt-st*gt)*Rt,tt[10]=(pt*At-vt*Et+ft*mt)*Rt,tt[11]=(ht*Et-ct*At-ut*mt)*Rt,tt[12]=(at*yt-rt*kt-ot*gt)*Rt,tt[13]=(et*kt-nt*yt+it*gt)*Rt,tt[14]=(vt*Tt-pt*bt-Mt*mt)*Rt,tt[15]=(ct*bt-ht*Tt+dt*mt)*Rt,this}scale(tt){let et=this.elements,{x:nt,y:it,z:st}=tt;return et[0]*=nt,et[4]*=it,et[8]*=st,et[1]*=nt,et[5]*=it,et[9]*=st,et[2]*=nt,et[6]*=it,et[10]*=st,et[3]*=nt,et[7]*=it,et[11]*=st,this}getMaxScaleOnAxis(){let tt=this.elements,et=tt[0]*tt[0]+tt[1]*tt[1]+tt[2]*tt[2],nt=tt[4]*tt[4]+tt[5]*tt[5]+tt[6]*tt[6],it=tt[8]*tt[8]+tt[9]*tt[9]+tt[10]*tt[10];return Math.sqrt(Math.max(et,nt,it))}makeTranslation(tt,et,nt){if(tt.isVector3)this.set(1,0,0,tt.x,0,1,0,tt.y,0,0,1,tt.z,0,0,0,1);else this.set(1,0,0,tt,0,1,0,et,0,0,1,nt,0,0,0,1);return this}makeRotationX(tt){let et=Math.cos(tt),nt=Math.sin(tt);return this.set(1,0,0,0,0,et,-nt,0,0,nt,et,0,0,0,0,1),this}makeRotationY(tt){let et=Math.cos(tt),nt=Math.sin(tt);return this.set(et,0,nt,0,0,1,0,0,-nt,0,et,0,0,0,0,1),this}makeRotationZ(tt){let et=Math.cos(tt),nt=Math.sin(tt);return this.set(et,-nt,0,0,nt,et,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(tt,et){let nt=Math.cos(et),it=Math.sin(et),st=1-nt,{x:rt,y:at,z:ot}=tt,lt=st*rt,ct=st*at;return this.set(lt*rt+nt,lt*at-it*ot,lt*ot+it*at,0,lt*at+it*ot,ct*at+nt,ct*ot-it*rt,0,lt*ot-it*at,ct*ot+it*rt,st*ot*ot+nt,0,0,0,0,1),this}makeScale(tt,et,nt){return this.set(tt,0,0,0,0,et,0,0,0,0,nt,0,0,0,0,1),this}makeShear(tt,et,nt,it,st,rt){return this.set(1,nt,st,0,tt,1,rt,0,et,it,1,0,0,0,0,1),this}compose(tt,et,nt){let it=this.elements,{_x:st,_y:rt,_z:at,_w:ot}=et,lt=st+st,ct=rt+rt,ht=at+at,dt=st*lt,ut=st*ct,pt=st*ht,vt=rt*ct,Mt=rt*ht,ft=at*ht,mt=ot*lt,Tt=ot*ct,Et=ot*ht,{x:bt,y:At,z:It}=nt;return it[0]=(1-(vt+ft))*bt,it[1]=(ut+Et)*bt,it[2]=(pt-Tt)*bt,it[3]=0,it[4]=(ut-Et)*At,it[5]=(1-(dt+ft))*At,it[6]=(Mt+mt)*At,it[7]=0,it[8]=(pt+Tt)*It,it[9]=(Mt-mt)*It,it[10]=(1-(dt+vt))*It,it[11]=0,it[12]=tt.x,it[13]=tt.y,it[14]=tt.z,it[15]=1,this}decompose(tt,et,nt){let it=this.elements;tt.x=it[12],tt.y=it[13],tt.z=it[14];let st=this.determinantAffine();if(st===0)return nt.set(1,1,1),et.identity(),this;let rt=_s.set(it[0],it[1],it[2]).length(),at=_s.set(it[4],it[5],it[6]).length(),ot=_s.set(it[8],it[9],it[10]).length();if(st<0)rt=-rt;Si.copy(this);let lt=1/rt,ct=1/at,ht=1/ot;return Si.elements[0]*=lt,Si.elements[1]*=lt,Si.elements[2]*=lt,Si.elements[4]*=ct,Si.elements[5]*=ct,Si.elements[6]*=ct,Si.elements[8]*=ht,Si.elements[9]*=ht,Si.elements[10]*=ht,et.setFromRotationMatrix(Si),nt.x=rt,nt.y=at,nt.z=ot,this}makePerspective(tt,et,nt,it,st,rt,at=2000,ot=!1){let lt=this.elements,ct=2*st/(et-tt),ht=2*st/(nt-it),dt=(et+tt)/(et-tt),ut=(nt+it)/(nt-it),pt,vt;if(ot)pt=st/(rt-st),vt=rt*st/(rt-st);else if(at===2000)pt=-(rt+st)/(rt-st),vt=-2*rt*st/(rt-st);else if(at===2001)pt=-rt/(rt-st),vt=-rt*st/(rt-st);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+at);return lt[0]=ct,lt[4]=0,lt[8]=dt,lt[12]=0,lt[1]=0,lt[5]=ht,lt[9]=ut,lt[13]=0,lt[2]=0,lt[6]=0,lt[10]=pt,lt[14]=vt,lt[3]=0,lt[7]=0,lt[11]=-1,lt[15]=0,this}makeOrthographic(tt,et,nt,it,st,rt,at=2000,ot=!1){let lt=this.elements,ct=2/(et-tt),ht=2/(nt-it),dt=-(et+tt)/(et-tt),ut=-(nt+it)/(nt-it),pt,vt;if(ot)pt=1/(rt-st),vt=rt/(rt-st);else if(at===2000)pt=-2/(rt-st),vt=-(rt+st)/(rt-st);else if(at===2001)pt=-1/(rt-st),vt=-st/(rt-st);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+at);return lt[0]=ct,lt[4]=0,lt[8]=0,lt[12]=dt,lt[1]=0,lt[5]=ht,lt[9]=0,lt[13]=ut,lt[2]=0,lt[6]=0,lt[10]=pt,lt[14]=vt,lt[3]=0,lt[7]=0,lt[11]=0,lt[15]=1,this}equals(tt){let et=this.elements,nt=tt.elements;for(let it=0;it<16;it++)if(et[it]!==nt[it])return!1;return!0}fromArray(tt,et=0){for(let nt=0;nt<16;nt++)this.elements[nt]=tt[nt+et];return this}toArray(tt=[],et=0){let nt=this.elements;return tt[et]=nt[0],tt[et+1]=nt[1],tt[et+2]=nt[2],tt[et+3]=nt[3],tt[et+4]=nt[4],tt[et+5]=nt[5],tt[et+6]=nt[6],tt[et+7]=nt[7],tt[et+8]=nt[8],tt[et+9]=nt[9],tt[et+10]=nt[10],tt[et+11]=nt[11],tt[et+12]=nt[12],tt[et+13]=nt[13],tt[et+14]=nt[14],tt[et+15]=nt[15],tt}}var _s=new e,Si=new i,fu=new e(0,0,0),pu=new e(1,1,1),Xi=new e,pr=new e,fi=new e,_l=new i,xl=new C;class Ri{constructor(tt=0,et=0,nt=0,it=Ri.DEFAULT_ORDER){this.isEuler=!0,this._x=tt,this._y=et,this._z=nt,this._order=it}get x(){return this._x}set x(tt){this._x=tt,this._onChangeCallback()}get y(){return this._y}set y(tt){this._y=tt,this._onChangeCallback()}get z(){return this._z}set z(tt){this._z=tt,this._onChangeCallback()}get order(){return this._order}set order(tt){this._order=tt,this._onChangeCallback()}set(tt,et,nt,it=this._order){return this._x=tt,this._y=et,this._z=nt,this._order=it,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(tt){return this._x=tt._x,this._y=tt._y,this._z=tt._z,this._order=tt._order,this._onChangeCallback(),this}setFromRotationMatrix(tt,et=this._order,nt=!0){let it=tt.elements,st=it[0],rt=it[4],at=it[8],ot=it[1],lt=it[5],ct=it[9],ht=it[2],dt=it[6],ut=it[10];switch(et){case"XYZ":if(this._y=Math.asin(wn(at,-1,1)),Math.abs(at)<0.9999999)this._x=Math.atan2(-ct,ut),this._z=Math.atan2(-rt,st);else this._x=Math.atan2(dt,lt),this._z=0;break;case"YXZ":if(this._x=Math.asin(-wn(ct,-1,1)),Math.abs(ct)<0.9999999)this._y=Math.atan2(at,ut),this._z=Math.atan2(ot,lt);else this._y=Math.atan2(-ht,st),this._z=0;break;case"ZXY":if(this._x=Math.asin(wn(dt,-1,1)),Math.abs(dt)<0.9999999)this._y=Math.atan2(-ht,ut),this._z=Math.atan2(-rt,lt);else this._y=0,this._z=Math.atan2(ot,st);break;case"ZYX":if(this._y=Math.asin(-wn(ht,-1,1)),Math.abs(ht)<0.9999999)this._x=Math.atan2(dt,ut),this._z=Math.atan2(ot,st);else this._x=0,this._z=Math.atan2(-rt,lt);break;case"YZX":if(this._z=Math.asin(wn(ot,-1,1)),Math.abs(ot)<0.9999999)this._x=Math.atan2(-ct,lt),this._y=Math.atan2(-ht,st);else this._x=0,this._y=Math.atan2(at,ut);break;case"XZY":if(this._z=Math.asin(-wn(rt,-1,1)),Math.abs(rt)<0.9999999)this._x=Math.atan2(dt,lt),this._y=Math.atan2(at,st);else this._x=Math.atan2(-ct,ut),this._y=0;break;default:fn("Euler: .setFromRotationMatrix() encountered an unknown order: "+et)}if(this._order=et,nt===!0)this._onChangeCallback();return this}setFromQuaternion(tt,et,nt){return _l.makeRotationFromQuaternion(tt),this.setFromRotationMatrix(_l,et,nt)}setFromVector3(tt,et=this._order){return this.set(tt.x,tt.y,tt.z,et)}reorder(tt){return xl.setFromEuler(this),this.setFromQuaternion(xl,tt)}equals(tt){return tt._x===this._x&&tt._y===this._y&&tt._z===this._z&&tt._order===this._order}fromArray(tt){if(this._x=tt[0],this._y=tt[1],this._z=tt[2],tt[3]!==void 0)this._order=tt[3];return this._onChangeCallback(),this}toArray(tt=[],et=0){return tt[et]=this._x,tt[et+1]=this._y,tt[et+2]=this._z,tt[et+3]=this._order,tt}_onChange(tt){return this._onChangeCallback=tt,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ri.DEFAULT_ORDER="XYZ";class Kr{constructor(){this.mask=1}set(tt){this.mask=(1<<tt|0)>>>0}enable(tt){this.mask|=1<<tt|0}enableAll(){this.mask=-1}toggle(tt){this.mask^=1<<tt|0}disable(tt){this.mask&=~(1<<tt|0)}disableAll(){this.mask=0}test(tt){return(this.mask&tt.mask)!==0}isEnabled(tt){return(this.mask&(1<<tt|0))!==0}}var mu=0,vl=new e,xs=new C,Di=new i,mr=new e,Gs=new e,gu=new e,_u=new C,yl=new e(1,0,0),Sl=new e(0,1,0),Ml=new e(0,0,1),bl={type:"added"},xu={type:"removed"},vs={type:"childadded",child:null},_a={type:"childremoved",child:null};class l extends Wi{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:mu++}),this.uuid=Ci(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=l.DEFAULT_UP.clone();let tt=new e,et=new Ri,nt=new C,it=new e(1,1,1);function st(){nt.setFromEuler(et,!1)}function rt(){et.setFromQuaternion(nt,void 0,!1)}et._onChange(st),nt._onChange(rt),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:tt},rotation:{configurable:!0,enumerable:!0,value:et},quaternion:{configurable:!0,enumerable:!0,value:nt},scale:{configurable:!0,enumerable:!0,value:it},modelViewMatrix:{value:new i},normalMatrix:{value:new yn}}),this.matrix=new i,this.matrixWorld=new i,this.matrixAutoUpdate=l.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=l.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Kr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(tt){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrix.premultiply(tt),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null)this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(tt){return this.quaternion.premultiply(tt),this}setRotationFromAxisAngle(tt,et){this.quaternion.setFromAxisAngle(tt,et)}setRotationFromEuler(tt){this.quaternion.setFromEuler(tt,!0)}setRotationFromMatrix(tt){this.quaternion.setFromRotationMatrix(tt)}setRotationFromQuaternion(tt){this.quaternion.copy(tt)}rotateOnAxis(tt,et){return xs.setFromAxisAngle(tt,et),this.quaternion.multiply(xs),this}rotateOnWorldAxis(tt,et){return xs.setFromAxisAngle(tt,et),this.quaternion.premultiply(xs),this}rotateX(tt){return this.rotateOnAxis(yl,tt)}rotateY(tt){return this.rotateOnAxis(Sl,tt)}rotateZ(tt){return this.rotateOnAxis(Ml,tt)}translateOnAxis(tt,et){return vl.copy(tt).applyQuaternion(this.quaternion),this.position.add(vl.multiplyScalar(et)),this}translateX(tt){return this.translateOnAxis(yl,tt)}translateY(tt){return this.translateOnAxis(Sl,tt)}translateZ(tt){return this.translateOnAxis(Ml,tt)}localToWorld(tt){return this.updateWorldMatrix(!0,!1),tt.applyMatrix4(this.matrixWorld)}worldToLocal(tt){return this.updateWorldMatrix(!0,!1),tt.applyMatrix4(Di.copy(this.matrixWorld).invert())}lookAt(tt,et,nt){if(tt.isVector3)mr.copy(tt);else mr.set(tt,et,nt);let it=this.parent;if(this.updateWorldMatrix(!0,!1),Gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)Di.lookAt(Gs,mr,this.up);else Di.lookAt(mr,Gs,this.up);if(this.quaternion.setFromRotationMatrix(Di),it)Di.extractRotation(it.matrixWorld),xs.setFromRotationMatrix(Di),this.quaternion.premultiply(xs.invert())}add(tt){if(arguments.length>1){for(let et=0;et<arguments.length;et++)this.add(arguments[et]);return this}if(tt===this)return vn("Object3D.add: object can't be added as a child of itself.",tt),this;if(tt&&tt.isObject3D)tt.removeFromParent(),tt.parent=this,this.children.push(tt),tt.dispatchEvent(bl),vs.child=tt,this.dispatchEvent(vs),vs.child=null;else vn("Object3D.add: object not an instance of THREE.Object3D.",tt);return this}remove(tt){if(arguments.length>1){for(let nt=0;nt<arguments.length;nt++)this.remove(arguments[nt]);return this}let et=this.children.indexOf(tt);if(et!==-1)tt.parent=null,this.children.splice(et,1),tt.dispatchEvent(xu),_a.child=tt,this.dispatchEvent(_a),_a.child=null;return this}removeFromParent(){let tt=this.parent;if(tt!==null)tt.remove(this);return this}clear(){return this.remove(...this.children)}attach(tt){if(this.updateWorldMatrix(!0,!1),Di.copy(this.matrixWorld).invert(),tt.parent!==null)tt.parent.updateWorldMatrix(!0,!1),Di.multiply(tt.parent.matrixWorld);return tt.applyMatrix4(Di),tt.removeFromParent(),tt.parent=this,this.children.push(tt),tt.updateWorldMatrix(!1,!0),tt.dispatchEvent(bl),vs.child=tt,this.dispatchEvent(vs),vs.child=null,this}getObjectById(tt){return this.getObjectByProperty("id",tt)}getObjectByName(tt){return this.getObjectByProperty("name",tt)}getObjectByProperty(tt,et){if(this[tt]===et)return this;for(let nt=0,it=this.children.length;nt<it;nt++){let rt=this.children[nt].getObjectByProperty(tt,et);if(rt!==void 0)return rt}return}getObjectsByProperty(tt,et,nt=[]){if(this[tt]===et)nt.push(this);let it=this.children;for(let st=0,rt=it.length;st<rt;st++)it[st].getObjectsByProperty(tt,et,nt);return nt}getWorldPosition(tt){return this.updateWorldMatrix(!0,!1),tt.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(tt){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,tt,gu),tt}getWorldScale(tt){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,_u,tt),tt}getWorldDirection(tt){this.updateWorldMatrix(!0,!1);let et=this.matrixWorld.elements;return tt.set(et[8],et[9],et[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(tt){tt(this);let et=this.children;for(let nt=0,it=et.length;nt<it;nt++)et[nt].traverse(tt)}traverseVisible(tt){if(this.visible===!1)return;tt(this);let et=this.children;for(let nt=0,it=et.length;nt<it;nt++)et[nt].traverseVisible(tt)}traverseAncestors(tt){let et=this.parent;if(et!==null)tt(et),et.traverseAncestors(tt)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let tt=this.pivot;if(tt!==null){let{x:et,y:nt,z:it}=tt,st=this.matrix.elements;st[12]+=et-st[0]*et-st[4]*nt-st[8]*it,st[13]+=nt-st[1]*et-st[5]*nt-st[9]*it,st[14]+=it-st[2]*et-st[6]*nt-st[10]*it}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(tt){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||tt){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,tt=!0}let et=this.children;for(let nt=0,it=et.length;nt<it;nt++)et[nt].updateMatrixWorld(tt)}updateWorldMatrix(tt,et,nt=!1){let it=this.parent;if(tt===!0&&it!==null)it.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||nt){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,nt=!0}if(et===!0){let st=this.children;for(let rt=0,at=st.length;rt<at;rt++)st[rt].updateWorldMatrix(!1,!0,nt)}}toJSON(tt){let et=tt===void 0||typeof tt==="string",nt={};if(et)tt={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},nt.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let it={};if(it.uuid=this.uuid,it.type=this.type,it.name=this.name,it.castShadow=this.castShadow,it.receiveShadow=this.receiveShadow,it.visible=this.visible,it.frustumCulled=this.frustumCulled,it.renderOrder=this.renderOrder,it.static=this.static,it.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0)it.userData=this.userData;if(it.layers=this.layers.mask,it.matrix=this.matrix.toArray(),it.up=this.up.toArray(),this.pivot!==null)it.pivot=this.pivot.toArray();if(this.morphTargetDictionary!==void 0)it.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)it.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(it.type="InstancedMesh",it.count=this.count,it.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)it.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(it.type="BatchedMesh",it.perObjectFrustumCulled=this.perObjectFrustumCulled,it.sortObjects=this.sortObjects,it.drawRanges=this._drawRanges,it.reservedRanges=this._reservedRanges,it.geometryInfo=this._geometryInfo.map((at)=>({...at,boundingBox:at.boundingBox?at.boundingBox.toJSON():void 0,boundingSphere:at.boundingSphere?at.boundingSphere.toJSON():void 0})),it.instanceInfo=this._instanceInfo.map((at)=>({...at})),it.availableInstanceIds=this._availableInstanceIds.slice(),it.availableGeometryIds=this._availableGeometryIds.slice(),it.nextIndexStart=this._nextIndexStart,it.nextVertexStart=this._nextVertexStart,it.geometryCount=this._geometryCount,it.maxInstanceCount=this._maxInstanceCount,it.maxVertexCount=this._maxVertexCount,it.maxIndexCount=this._maxIndexCount,it.geometryInitialized=this._geometryInitialized,it.matricesTexture=this._matricesTexture.toJSON(tt),it.indirectTexture=this._indirectTexture.toJSON(tt),this._colorsTexture!==null)it.colorsTexture=this._colorsTexture.toJSON(tt);if(this.boundingSphere!==null)it.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)it.boundingBox=this.boundingBox.toJSON()}function st(at,ot){if(at[ot.uuid]===void 0)at[ot.uuid]=ot.toJSON(tt);return ot.uuid}if(this.isScene){if(this.background){if(this.background.isColor)it.background=this.background.toJSON();else if(this.background.isTexture)it.background=this.background.toJSON(tt).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)it.environment=this.environment.toJSON(tt).uuid}else if(this.isMesh||this.isLine||this.isPoints){it.geometry=st(tt.geometries,this.geometry);let at=this.geometry.parameters;if(at!==void 0&&at.shapes!==void 0){let ot=at.shapes;if(Array.isArray(ot))for(let lt=0,ct=ot.length;lt<ct;lt++){let ht=ot[lt];st(tt.shapes,ht)}else st(tt.shapes,ot)}}if(this.isSkinnedMesh){if(it.bindMode=this.bindMode,it.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)st(tt.skeletons,this.skeleton),it.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let at=[];for(let ot=0,lt=this.material.length;ot<lt;ot++)at.push(st(tt.materials,this.material[ot]));it.material=at}else it.material=st(tt.materials,this.material);if(this.children.length>0){it.children=[];for(let at=0;at<this.children.length;at++)it.children.push(this.children[at].toJSON(tt).object)}if(this.animations.length>0){it.animations=[];for(let at=0;at<this.animations.length;at++){let ot=this.animations[at];it.animations.push(st(tt.animations,ot))}}if(et){let at=rt(tt.geometries),ot=rt(tt.materials),lt=rt(tt.textures),ct=rt(tt.images),ht=rt(tt.shapes),dt=rt(tt.skeletons),ut=rt(tt.animations),pt=rt(tt.nodes);if(at.length>0)nt.geometries=at;if(ot.length>0)nt.materials=ot;if(lt.length>0)nt.textures=lt;if(ct.length>0)nt.images=ct;if(ht.length>0)nt.shapes=ht;if(dt.length>0)nt.skeletons=dt;if(ut.length>0)nt.animations=ut;if(pt.length>0)nt.nodes=pt}return nt.object=it,nt;function rt(at){let ot=[];for(let lt in at){let ct=at[lt];delete ct.metadata,ot.push(ct)}return ot}}clone(tt){return new this.constructor().copy(this,tt)}copy(tt,et=!0){if(this.name=tt.name,this.up.copy(tt.up),this.position.copy(tt.position),this.rotation.order=tt.rotation.order,this.quaternion.copy(tt.quaternion),this.scale.copy(tt.scale),this.pivot=tt.pivot!==null?tt.pivot.clone():null,this.matrix.copy(tt.matrix),this.matrixWorld.copy(tt.matrixWorld),this.matrixAutoUpdate=tt.matrixAutoUpdate,this.matrixWorldAutoUpdate=tt.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=tt.matrixWorldNeedsUpdate,this.layers.mask=tt.layers.mask,this.visible=tt.visible,this.castShadow=tt.castShadow,this.receiveShadow=tt.receiveShadow,this.frustumCulled=tt.frustumCulled,this.renderOrder=tt.renderOrder,this.static=tt.static,this.animations=tt.animations.slice(),this.userData=JSON.parse(JSON.stringify(tt.userData)),et===!0)for(let nt=0;nt<tt.children.length;nt++){let it=tt.children[nt];this.add(it.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}l.DEFAULT_UP=new e(0,1,0);l.DEFAULT_MATRIX_AUTO_UPDATE=!0;l.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class w extends l{constructor(){super();this.isGroup=!0,this.type="Group"}}var vu={type:"move"};class ir{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new w,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new w,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new e,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new e;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new w,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new e,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new e,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(tt){if(this._targetRay!==null)this._targetRay.dispatchEvent(tt);if(this._grip!==null)this._grip.dispatchEvent(tt);if(this._hand!==null)this._hand.dispatchEvent(tt);return this}connect(tt){if(tt&&tt.hand){let et=this._hand;if(et)for(let nt of tt.hand.values())this._getHandJoint(et,nt)}return this.dispatchEvent({type:"connected",data:tt}),this}disconnect(tt){if(this.dispatchEvent({type:"disconnected",data:tt}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(tt,et,nt){let it=null,st=null,rt=null,at=this._targetRay,ot=this._grip,lt=this._hand;if(tt&&et.session.visibilityState!=="visible-blurred"){if(lt&&tt.hand){rt=!0;for(let vt of tt.hand.values()){let Mt=et.getJointPose(vt,nt),ft=this._getHandJoint(lt,vt);if(Mt!==null)ft.matrix.fromArray(Mt.transform.matrix),ft.matrix.decompose(ft.position,ft.quaternion,ft.scale),ft.matrixWorldNeedsUpdate=!0,ft.jointRadius=Mt.radius;ft.visible=Mt!==null}let ct=lt.joints["index-finger-tip"],ht=lt.joints["thumb-tip"],dt=ct.position.distanceTo(ht.position),ut=0.02,pt=0.005;if(lt.inputState.pinching&&dt>ut+pt)lt.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:tt.handedness,target:this});else if(!lt.inputState.pinching&&dt<=ut-pt)lt.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:tt.handedness,target:this})}else if(ot!==null&&tt.gripSpace){if(st=et.getPose(tt.gripSpace,nt),st!==null){if(ot.matrix.fromArray(st.transform.matrix),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.matrixWorldNeedsUpdate=!0,st.linearVelocity)ot.hasLinearVelocity=!0,ot.linearVelocity.copy(st.linearVelocity);else ot.hasLinearVelocity=!1;if(st.angularVelocity)ot.hasAngularVelocity=!0,ot.angularVelocity.copy(st.angularVelocity);else ot.hasAngularVelocity=!1;if(ot.eventsEnabled)ot.dispatchEvent({type:"gripUpdated",data:tt,target:this})}}if(at!==null){if(it=et.getPose(tt.targetRaySpace,nt),it===null&&st!==null)it=st;if(it!==null){if(at.matrix.fromArray(it.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.matrixWorldNeedsUpdate=!0,it.linearVelocity)at.hasLinearVelocity=!0,at.linearVelocity.copy(it.linearVelocity);else at.hasLinearVelocity=!1;if(it.angularVelocity)at.hasAngularVelocity=!0,at.angularVelocity.copy(it.angularVelocity);else at.hasAngularVelocity=!1;this.dispatchEvent(vu)}}}if(at!==null)at.visible=it!==null;if(ot!==null)ot.visible=st!==null;if(lt!==null)lt.visible=rt!==null;return this}_getHandJoint(tt,et){if(tt.joints[et.jointName]===void 0){let nt=new w;nt.matrixAutoUpdate=!1,nt.visible=!1,tt.joints[et.jointName]=nt,tt.add(nt)}return tt.joints[et.jointName]}}var Zc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qi={h:0,s:0,l:0},gr={h:0,s:0,l:0};function xa(tt,et,nt){if(nt<0)nt+=1;if(nt>1)nt-=1;if(nt<0.16666666666666666)return tt+(et-tt)*6*nt;if(nt<0.5)return et;if(nt<0.6666666666666666)return tt+(et-tt)*6*(0.6666666666666666-nt);return tt}class t{constructor(tt,et,nt){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(tt,et,nt)}set(tt,et,nt){if(et===void 0&&nt===void 0){let it=tt;if(it&&it.isColor)this.copy(it);else if(typeof it==="number")this.setHex(it);else if(typeof it==="string")this.setStyle(it)}else this.setRGB(tt,et,nt);return this}setScalar(tt){return this.r=tt,this.g=tt,this.b=tt,this}setHex(tt,et="srgb"){return tt=Math.floor(tt),this.r=(tt>>16&255)/255,this.g=(tt>>8&255)/255,this.b=(tt&255)/255,s.colorSpaceToWorking(this,et),this}setRGB(tt,et,nt,it=s.workingColorSpace){return this.r=tt,this.g=et,this.b=nt,s.colorSpaceToWorking(this,it),this}setHSL(tt,et,nt,it=s.workingColorSpace){if(tt=Lo(tt,1),et=wn(et,0,1),nt=wn(nt,0,1),et===0)this.r=this.g=this.b=nt;else{let st=nt<=0.5?nt*(1+et):nt+et-nt*et,rt=2*nt-st;this.r=xa(rt,st,tt+0.3333333333333333),this.g=xa(rt,st,tt),this.b=xa(rt,st,tt-0.3333333333333333)}return s.colorSpaceToWorking(this,it),this}setStyle(tt,et="srgb"){function nt(st){if(st===void 0)return;if(parseFloat(st)<1)fn("Color: Alpha component of "+tt+" will be ignored.")}let it;if(it=/^(\w+)\(([^\)]*)\)/.exec(tt)){let st,rt=it[1],at=it[2];switch(rt){case"rgb":case"rgba":if(st=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(at))return nt(st[4]),this.setRGB(Math.min(255,parseInt(st[1],10))/255,Math.min(255,parseInt(st[2],10))/255,Math.min(255,parseInt(st[3],10))/255,et);if(st=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(at))return nt(st[4]),this.setRGB(Math.min(100,parseFloat(st[1]))/100,Math.min(100,parseFloat(st[2]))/100,Math.min(100,parseFloat(st[3]))/100,et);break;case"hsl":case"hsla":if(st=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(at))return nt(st[4]),this.setHSL(parseFloat(st[1])/360,parseFloat(st[2])/100,parseFloat(st[3])/100,et);break;default:fn("Color: Unknown color model "+tt)}}else if(it=/^\#([A-Fa-f\d]+)$/.exec(tt)){let st=it[1],rt=st.length;if(rt===3)return this.setRGB(parseInt(st.charAt(0),16)/15,parseInt(st.charAt(1),16)/15,parseInt(st.charAt(2),16)/15,et);else if(rt===6)return this.setHex(parseInt(st,16),et);else fn("Color: Invalid hex color "+tt)}else if(tt&&tt.length>0)return this.setColorName(tt,et);return this}setColorName(tt,et="srgb"){let nt=Zc[tt.toLowerCase()];if(nt!==void 0)this.setHex(nt,et);else fn("Color: Unknown color "+tt);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(tt){return this.r=tt.r,this.g=tt.g,this.b=tt.b,this}copySRGBToLinear(tt){return this.r=Gi(tt.r),this.g=Gi(tt.g),this.b=Gi(tt.b),this}copyLinearToSRGB(tt){return this.r=Is(tt.r),this.g=Is(tt.g),this.b=Is(tt.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(tt="srgb"){return s.workingToColorSpace(ri.copy(this),tt),Math.round(wn(ri.r*255,0,255))*65536+Math.round(wn(ri.g*255,0,255))*256+Math.round(wn(ri.b*255,0,255))}getHexString(tt="srgb"){return("000000"+this.getHex(tt).toString(16)).slice(-6)}getHSL(tt,et=s.workingColorSpace){s.workingToColorSpace(ri.copy(this),et);let{r:nt,g:it,b:st}=ri,rt=Math.max(nt,it,st),at=Math.min(nt,it,st),ot,lt,ct=(at+rt)/2;if(at===rt)ot=0,lt=0;else{let ht=rt-at;switch(lt=ct<=0.5?ht/(rt+at):ht/(2-rt-at),rt){case nt:ot=(it-st)/ht+(it<st?6:0);break;case it:ot=(st-nt)/ht+2;break;case st:ot=(nt-it)/ht+4;break}ot/=6}return tt.h=ot,tt.s=lt,tt.l=ct,tt}getRGB(tt,et=s.workingColorSpace){return s.workingToColorSpace(ri.copy(this),et),tt.r=ri.r,tt.g=ri.g,tt.b=ri.b,tt}getStyle(tt="srgb"){s.workingToColorSpace(ri.copy(this),tt);let{r:et,g:nt,b:it}=ri;if(tt!=="srgb")return`color(${tt} ${et.toFixed(3)} ${nt.toFixed(3)} ${it.toFixed(3)})`;return`rgb(${Math.round(et*255)},${Math.round(nt*255)},${Math.round(it*255)})`}offsetHSL(tt,et,nt){return this.getHSL(qi),this.setHSL(qi.h+tt,qi.s+et,qi.l+nt)}add(tt){return this.r+=tt.r,this.g+=tt.g,this.b+=tt.b,this}addColors(tt,et){return this.r=tt.r+et.r,this.g=tt.g+et.g,this.b=tt.b+et.b,this}addScalar(tt){return this.r+=tt,this.g+=tt,this.b+=tt,this}sub(tt){return this.r=Math.max(0,this.r-tt.r),this.g=Math.max(0,this.g-tt.g),this.b=Math.max(0,this.b-tt.b),this}multiply(tt){return this.r*=tt.r,this.g*=tt.g,this.b*=tt.b,this}multiplyScalar(tt){return this.r*=tt,this.g*=tt,this.b*=tt,this}lerp(tt,et){return this.r+=(tt.r-this.r)*et,this.g+=(tt.g-this.g)*et,this.b+=(tt.b-this.b)*et,this}lerpColors(tt,et,nt){return this.r=tt.r+(et.r-tt.r)*nt,this.g=tt.g+(et.g-tt.g)*nt,this.b=tt.b+(et.b-tt.b)*nt,this}lerpHSL(tt,et){this.getHSL(qi),tt.getHSL(gr);let nt=$s(qi.h,gr.h,et),it=$s(qi.s,gr.s,et),st=$s(qi.l,gr.l,et);return this.setHSL(nt,it,st),this}setFromVector3(tt){return this.r=tt.x,this.g=tt.y,this.b=tt.z,this}applyMatrix3(tt){let et=this.r,nt=this.g,it=this.b,st=tt.elements;return this.r=st[0]*et+st[3]*nt+st[6]*it,this.g=st[1]*et+st[4]*nt+st[7]*it,this.b=st[2]*et+st[5]*nt+st[8]*it,this}equals(tt){return tt.r===this.r&&tt.g===this.g&&tt.b===this.b}fromArray(tt,et=0){return this.r=tt[et],this.g=tt[et+1],this.b=tt[et+2],this}toArray(tt=[],et=0){return tt[et]=this.r,tt[et+1]=this.g,tt[et+2]=this.b,tt}fromBufferAttribute(tt,et){return this.r=tt.getX(et),this.g=tt.getY(et),this.b=tt.getZ(et),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var ri=new t;t.NAMES=Zc;class ve{constructor(tt,et=1,nt=1000){this.isFog=!0,this.name="",this.color=new t(tt),this.near=et,this.far=nt}clone(){return new ve(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class F extends l{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ri,this.environmentIntensity=1,this.environmentRotation=new Ri,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(tt,et){return super.copy(tt,et),this.background=tt.background!==null?tt.background.clone():null,this.environment=tt.environment!==null?tt.environment.clone():null,this.fog=tt.fog!==null?tt.fog.clone():null,this.backgroundBlurriness=tt.backgroundBlurriness,this.backgroundIntensity=tt.backgroundIntensity,this.backgroundRotation.copy(tt.backgroundRotation),this.environmentIntensity=tt.environmentIntensity,this.environmentRotation.copy(tt.environmentRotation),this.overrideMaterial=tt.overrideMaterial!==null?tt.overrideMaterial.clone():null,this.matrixAutoUpdate=tt.matrixAutoUpdate,this}toJSON(tt){let et=super.toJSON(tt);if(this.fog!==null)et.object.fog=this.fog.toJSON();return et.object.backgroundBlurriness=this.backgroundBlurriness,et.object.backgroundIntensity=this.backgroundIntensity,et.object.backgroundRotation=this.backgroundRotation.toArray(),et.object.environmentIntensity=this.environmentIntensity,et.object.environmentRotation=this.environmentRotation.toArray(),et}}var Mi=new e,Ui=new e,va=new e,Fi=new e,ys=new e,Ss=new e,Tl=new e,ya=new e,Sa=new e,Ma=new e,ba=new Fn,Ta=new Fn,Ea=new Fn;class _i{constructor(tt=new e,et=new e,nt=new e){this.a=tt,this.b=et,this.c=nt}static getNormal(tt,et,nt,it){it.subVectors(nt,et),Mi.subVectors(tt,et),it.cross(Mi);let st=it.lengthSq();if(st>0)return it.multiplyScalar(1/Math.sqrt(st));return it.set(0,0,0)}static getBarycoord(tt,et,nt,it,st){Mi.subVectors(it,et),Ui.subVectors(nt,et),va.subVectors(tt,et);let rt=Mi.dot(Mi),at=Mi.dot(Ui),ot=Mi.dot(va),lt=Ui.dot(Ui),ct=Ui.dot(va),ht=rt*lt-at*at;if(ht===0)return st.set(0,0,0),null;let dt=1/ht,ut=(lt*ot-at*ct)*dt,pt=(rt*ct-at*ot)*dt;return st.set(1-ut-pt,pt,ut)}static containsPoint(tt,et,nt,it){if(this.getBarycoord(tt,et,nt,it,Fi)===null)return!1;return Fi.x>=0&&Fi.y>=0&&Fi.x+Fi.y<=1}static getInterpolation(tt,et,nt,it,st,rt,at,ot){if(this.getBarycoord(tt,et,nt,it,Fi)===null){if(ot.x=0,ot.y=0,"z"in ot)ot.z=0;if("w"in ot)ot.w=0;return null}return ot.setScalar(0),ot.addScaledVector(st,Fi.x),ot.addScaledVector(rt,Fi.y),ot.addScaledVector(at,Fi.z),ot}static getInterpolatedAttribute(tt,et,nt,it,st,rt){return ba.setScalar(0),Ta.setScalar(0),Ea.setScalar(0),ba.fromBufferAttribute(tt,et),Ta.fromBufferAttribute(tt,nt),Ea.fromBufferAttribute(tt,it),rt.setScalar(0),rt.addScaledVector(ba,st.x),rt.addScaledVector(Ta,st.y),rt.addScaledVector(Ea,st.z),rt}static isFrontFacing(tt,et,nt,it){return Mi.subVectors(nt,et),Ui.subVectors(tt,et),Mi.cross(Ui).dot(it)<0}set(tt,et,nt){return this.a.copy(tt),this.b.copy(et),this.c.copy(nt),this}setFromPointsAndIndices(tt,et,nt,it){return this.a.copy(tt[et]),this.b.copy(tt[nt]),this.c.copy(tt[it]),this}setFromAttributeAndIndices(tt,et,nt,it){return this.a.fromBufferAttribute(tt,et),this.b.fromBufferAttribute(tt,nt),this.c.fromBufferAttribute(tt,it),this}clone(){return new this.constructor().copy(this)}copy(tt){return this.a.copy(tt.a),this.b.copy(tt.b),this.c.copy(tt.c),this}getArea(){return Mi.subVectors(this.c,this.b),Ui.subVectors(this.a,this.b),Mi.cross(Ui).length()*0.5}getMidpoint(tt){return tt.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(tt){return _i.getNormal(this.a,this.b,this.c,tt)}getPlane(tt){return tt.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(tt,et){return _i.getBarycoord(tt,this.a,this.b,this.c,et)}getInterpolation(tt,et,nt,it,st){return _i.getInterpolation(tt,this.a,this.b,this.c,et,nt,it,st)}containsPoint(tt){return _i.containsPoint(tt,this.a,this.b,this.c)}isFrontFacing(tt){return _i.isFrontFacing(this.a,this.b,this.c,tt)}intersectsBox(tt){return tt.intersectsTriangle(this)}closestPointToPoint(tt,et){let nt=this.a,it=this.b,st=this.c,rt,at;ys.subVectors(it,nt),Ss.subVectors(st,nt),ya.subVectors(tt,nt);let ot=ys.dot(ya),lt=Ss.dot(ya);if(ot<=0&&lt<=0)return et.copy(nt);Sa.subVectors(tt,it);let ct=ys.dot(Sa),ht=Ss.dot(Sa);if(ct>=0&&ht<=ct)return et.copy(it);let dt=ot*ht-ct*lt;if(dt<=0&&ot>=0&&ct<=0&&ot-ct>0)return rt=ot/(ot-ct),et.copy(nt).addScaledVector(ys,rt);Ma.subVectors(tt,st);let ut=ys.dot(Ma),pt=Ss.dot(Ma);if(pt>=0&&ut<=pt)return et.copy(st);let vt=ut*lt-ot*pt;if(vt<=0&&lt>=0&&pt<=0)return at=lt/(lt-pt),et.copy(nt).addScaledVector(Ss,at);let Mt=ct*pt-ut*ht;if(Mt<=0&&ht-ct>=0&&ut-pt>=0)return Tl.subVectors(st,it),at=(ht-ct)/(ht-ct+(ut-pt)),et.copy(it).addScaledVector(Tl,at);let ft=1/(Mt+vt+dt);return rt=vt*ft,at=dt*ft,et.copy(nt).addScaledVector(ys,rt).addScaledVector(Ss,at)}equals(tt){return tt.a.equals(this.a)&&tt.b.equals(this.b)&&tt.c.equals(this.c)}}class I{constructor(tt=new e(1/0,1/0,1/0),et=new e(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=tt,this.max=et}set(tt,et){return this.min.copy(tt),this.max.copy(et),this}setFromArray(tt){this.makeEmpty();for(let et=0,nt=tt.length;et<nt;et+=3)this.expandByPoint(bi.fromArray(tt,et));return this}setFromBufferAttribute(tt){this.makeEmpty();for(let et=0,nt=tt.count;et<nt;et++)this.expandByPoint(bi.fromBufferAttribute(tt,et));return this}setFromPoints(tt){this.makeEmpty();for(let et=0,nt=tt.length;et<nt;et++)this.expandByPoint(tt[et]);return this}setFromCenterAndSize(tt,et){let nt=bi.copy(et).multiplyScalar(0.5);return this.min.copy(tt).sub(nt),this.max.copy(tt).add(nt),this}setFromObject(tt,et=!1){return this.makeEmpty(),this.expandByObject(tt,et)}clone(){return new this.constructor().copy(this)}copy(tt){return this.min.copy(tt.min),this.max.copy(tt.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(tt){return this.isEmpty()?tt.set(0,0,0):tt.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(tt){return this.isEmpty()?tt.set(0,0,0):tt.subVectors(this.max,this.min)}expandByPoint(tt){return this.min.min(tt),this.max.max(tt),this}expandByVector(tt){return this.min.sub(tt),this.max.add(tt),this}expandByScalar(tt){return this.min.addScalar(-tt),this.max.addScalar(tt),this}expandByObject(tt,et=!1){tt.updateWorldMatrix(!1,!1);let nt=tt.geometry;if(nt!==void 0){let st=nt.getAttribute("position");if(et===!0&&st!==void 0&&tt.isInstancedMesh!==!0&&tt.isBatchedMesh!==!0)for(let rt=0,at=st.count;rt<at;rt++){if(tt.isMesh===!0)tt.getVertexPosition(rt,bi);else bi.fromBufferAttribute(st,rt);bi.applyMatrix4(tt.matrixWorld),this.expandByPoint(bi)}else{if(tt.boundingBox!==void 0){if(tt.boundingBox===null)tt.computeBoundingBox();_r.copy(tt.boundingBox)}else{if(nt.boundingBox===null)nt.computeBoundingBox();_r.copy(nt.boundingBox)}_r.applyMatrix4(tt.matrixWorld),this.union(_r)}}let it=tt.children;for(let st=0,rt=it.length;st<rt;st++)this.expandByObject(it[st],et);return this}containsPoint(tt){return tt.x>=this.min.x&&tt.x<=this.max.x&&tt.y>=this.min.y&&tt.y<=this.max.y&&tt.z>=this.min.z&&tt.z<=this.max.z}containsBox(tt){return this.min.x<=tt.min.x&&tt.max.x<=this.max.x&&this.min.y<=tt.min.y&&tt.max.y<=this.max.y&&this.min.z<=tt.min.z&&tt.max.z<=this.max.z}getParameter(tt,et){return et.set((tt.x-this.min.x)/(this.max.x-this.min.x),(tt.y-this.min.y)/(this.max.y-this.min.y),(tt.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(tt){return tt.max.x>=this.min.x&&tt.min.x<=this.max.x&&tt.max.y>=this.min.y&&tt.min.y<=this.max.y&&tt.max.z>=this.min.z&&tt.min.z<=this.max.z}intersectsSphere(tt){return this.clampPoint(tt.center,bi),bi.distanceToSquared(tt.center)<=tt.radius*tt.radius}intersectsPlane(tt){let et,nt;if(tt.normal.x>0)et=tt.normal.x*this.min.x,nt=tt.normal.x*this.max.x;else et=tt.normal.x*this.max.x,nt=tt.normal.x*this.min.x;if(tt.normal.y>0)et+=tt.normal.y*this.min.y,nt+=tt.normal.y*this.max.y;else et+=tt.normal.y*this.max.y,nt+=tt.normal.y*this.min.y;if(tt.normal.z>0)et+=tt.normal.z*this.min.z,nt+=tt.normal.z*this.max.z;else et+=tt.normal.z*this.max.z,nt+=tt.normal.z*this.min.z;return et<=-tt.constant&&nt>=-tt.constant}intersectsTriangle(tt){if(this.isEmpty())return!1;this.getCenter(ks),xr.subVectors(this.max,ks),Ms.subVectors(tt.a,ks),bs.subVectors(tt.b,ks),Ts.subVectors(tt.c,ks),Yi.subVectors(bs,Ms),Zi.subVectors(Ts,bs),rs.subVectors(Ms,Ts);let et=[0,-Yi.z,Yi.y,0,-Zi.z,Zi.y,0,-rs.z,rs.y,Yi.z,0,-Yi.x,Zi.z,0,-Zi.x,rs.z,0,-rs.x,-Yi.y,Yi.x,0,-Zi.y,Zi.x,0,-rs.y,rs.x,0];if(!Aa(et,Ms,bs,Ts,xr))return!1;if(et=[1,0,0,0,1,0,0,0,1],!Aa(et,Ms,bs,Ts,xr))return!1;return vr.crossVectors(Yi,Zi),et=[vr.x,vr.y,vr.z],Aa(et,Ms,bs,Ts,xr)}clampPoint(tt,et){return et.copy(tt).clamp(this.min,this.max)}distanceToPoint(tt){return this.clampPoint(tt,bi).distanceTo(tt)}getBoundingSphere(tt){if(this.isEmpty())tt.makeEmpty();else this.getCenter(tt.center),tt.radius=this.getSize(bi).length()*0.5;return tt}intersect(tt){if(this.min.max(tt.min),this.max.min(tt.max),this.isEmpty())this.makeEmpty();return this}union(tt){return this.min.min(tt.min),this.max.max(tt.max),this}applyMatrix4(tt){if(this.isEmpty())return this;return Oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(tt),Oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(tt),Oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(tt),Oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(tt),Oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(tt),Oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(tt),Oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(tt),Oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(tt),this.setFromPoints(Oi),this}translate(tt){return this.min.add(tt),this.max.add(tt),this}equals(tt){return tt.min.equals(this.min)&&tt.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(tt){return this.min.fromArray(tt.min),this.max.fromArray(tt.max),this}}var Oi=[new e,new e,new e,new e,new e,new e,new e,new e],bi=new e,_r=new I,Ms=new e,bs=new e,Ts=new e,Yi=new e,Zi=new e,rs=new e,ks=new e,xr=new e,vr=new e,as=new e;function Aa(tt,et,nt,it,st){for(let rt=0,at=tt.length-3;rt<=at;rt+=3){as.fromArray(tt,rt);let ot=st.x*Math.abs(as.x)+st.y*Math.abs(as.y)+st.z*Math.abs(as.z),lt=et.dot(as),ct=nt.dot(as),ht=it.dot(as);if(Math.max(-Math.max(lt,ct,ht),Math.min(lt,ct,ht))>ot)return!1}return!0}var qn=new e,yr=new n,yu=0;class d extends Wi{constructor(tt,et,nt=!1){super();if(Array.isArray(tt))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:yu++}),this.name="",this.array=tt,this.itemSize=et,this.count=tt!==void 0?tt.length/et:0,this.normalized=nt,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0,this._normalizationScale=tt!==void 0?Jr(tt):void 0}onUploadCallback(){}set needsUpdate(tt){if(tt===!0)this.version++}setUsage(tt){return this.usage=tt,this}addUpdateRange(tt,et){this.updateRanges.push({start:tt,count:et})}clearUpdateRanges(){this.updateRanges.length=0}copy(tt){return this.name=tt.name,this.array=new tt.array.constructor(tt.array),this.itemSize=tt.itemSize,this.count=tt.count,this.normalized=tt.normalized,this.usage=tt.usage,this.gpuType=tt.gpuType,this._normalizationScale=tt._normalizationScale,this}copyAt(tt,et,nt){tt*=this.itemSize,nt*=et.itemSize;for(let it=0,st=this.itemSize;it<st;it++)this.array[tt+it]=et.array[nt+it];return this}copyArray(tt){return this.array.set(tt),this}applyMatrix3(tt){if(this.itemSize===2)for(let et=0,nt=this.count;et<nt;et++)yr.fromBufferAttribute(this,et),yr.applyMatrix3(tt),this.setXY(et,yr.x,yr.y);else if(this.itemSize===3)for(let et=0,nt=this.count;et<nt;et++)qn.fromBufferAttribute(this,et),qn.applyMatrix3(tt),this.setXYZ(et,qn.x,qn.y,qn.z);return this}applyMatrix4(tt){for(let et=0,nt=this.count;et<nt;et++)qn.fromBufferAttribute(this,et),qn.applyMatrix4(tt),this.setXYZ(et,qn.x,qn.y,qn.z);return this}applyNormalMatrix(tt){for(let et=0,nt=this.count;et<nt;et++)qn.fromBufferAttribute(this,et),qn.applyNormalMatrix(tt),this.setXYZ(et,qn.x,qn.y,qn.z);return this}transformDirection(tt){for(let et=0,nt=this.count;et<nt;et++)qn.fromBufferAttribute(this,et),qn.transformDirection(tt),this.setXYZ(et,qn.x,qn.y,qn.z);return this}set(tt,et=0){return this.array.set(tt,et),this}getComponent(tt,et){let nt=this.array[tt*this.itemSize+et];if(this.normalized)nt=this._denormalize(nt);return nt}setComponent(tt,et,nt){if(this.normalized)nt=this._normalize(nt);return this.array[tt*this.itemSize+et]=nt,this}getX(tt){let et=this.array[tt*this.itemSize];if(this.normalized)et=this._denormalize(et);return et}setX(tt,et){if(this.normalized)et=this._normalize(et);return this.array[tt*this.itemSize]=et,this}getY(tt){let et=this.array[tt*this.itemSize+1];if(this.normalized)et=this._denormalize(et);return et}setY(tt,et){if(this.normalized)et=this._normalize(et);return this.array[tt*this.itemSize+1]=et,this}getZ(tt){let et=this.array[tt*this.itemSize+2];if(this.normalized)et=this._denormalize(et);return et}setZ(tt,et){if(this.normalized)et=this._normalize(et);return this.array[tt*this.itemSize+2]=et,this}getW(tt){let et=this.array[tt*this.itemSize+3];if(this.normalized)et=this._denormalize(et);return et}setW(tt,et){if(this.normalized)et=this._normalize(et);return this.array[tt*this.itemSize+3]=et,this}setXY(tt,et,nt){if(tt*=this.itemSize,this.normalized)et=this._normalize(et),nt=this._normalize(nt);return this.array[tt+0]=et,this.array[tt+1]=nt,this}setXYZ(tt,et,nt,it){if(tt*=this.itemSize,this.normalized)et=this._normalize(et),nt=this._normalize(nt),it=this._normalize(it);return this.array[tt+0]=et,this.array[tt+1]=nt,this.array[tt+2]=it,this}setXYZW(tt,et,nt,it,st){if(tt*=this.itemSize,this.normalized)et=this._normalize(et),nt=this._normalize(nt),it=this._normalize(it),st=this._normalize(st);return this.array[tt+0]=et,this.array[tt+1]=nt,this.array[tt+2]=it,this.array[tt+3]=st,this}onUpload(tt){return this.onUploadCallback=tt,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let tt={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return tt.name=this.name,tt.usage=this.usage,tt.gpuType=this.gpuType,tt}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(tt){let et=this._normalizationScale;return et!==void 0?Math.max(tt/et,-1):Do(tt,this.array)}_normalize(tt){let et=this._normalizationScale;return et!==void 0?Math.round(tt*et):Uo(tt,this.array)}}class Qr extends d{constructor(tt,et,nt){super(new Uint16Array(tt),et,nt)}}class jr extends d{constructor(tt,et,nt){super(new Uint32Array(tt),et,nt)}}class m extends d{constructor(tt,et,nt){super(new Float32Array(tt),et,nt)}}var Su=new I,Hs=new e,wa=new e;class E{constructor(tt=new e,et=-1){this.isSphere=!0,this.center=tt,this.radius=et}set(tt,et){return this.center.copy(tt),this.radius=et,this}setFromPoints(tt,et){let nt=this.center;if(et!==void 0)nt.copy(et);else Su.setFromPoints(tt).getCenter(nt);let it=0;for(let st=0,rt=tt.length;st<rt;st++)it=Math.max(it,nt.distanceToSquared(tt[st]));return this.radius=Math.sqrt(it),this}copy(tt){return this.center.copy(tt.center),this.radius=tt.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(tt){return tt.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(tt){return tt.distanceTo(this.center)-this.radius}intersectsSphere(tt){let et=this.radius+tt.radius;return tt.center.distanceToSquared(this.center)<=et*et}intersectsBox(tt){return tt.intersectsSphere(this)}intersectsPlane(tt){return Math.abs(tt.distanceToPoint(this.center))<=this.radius}clampPoint(tt,et){let nt=this.center.distanceToSquared(tt);if(et.copy(tt),nt>this.radius*this.radius)et.sub(this.center).normalize(),et.multiplyScalar(this.radius).add(this.center);return et}getBoundingBox(tt){if(this.isEmpty())return tt.makeEmpty(),tt;return tt.set(this.center,this.center),tt.expandByScalar(this.radius),tt}applyMatrix4(tt){return this.center.applyMatrix4(tt),this.radius=this.radius*tt.getMaxScaleOnAxis(),this}translate(tt){return this.center.add(tt),this}expandByPoint(tt){if(this.isEmpty())return this.center.copy(tt),this.radius=0,this;Hs.subVectors(tt,this.center);let et=Hs.lengthSq();if(et>this.radius*this.radius){let nt=Math.sqrt(et),it=(nt-this.radius)*0.5;this.center.addScaledVector(Hs,it/nt),this.radius+=it}return this}union(tt){if(tt.isEmpty())return this;if(this.isEmpty())return this.copy(tt),this;if(this.center.equals(tt.center)===!0)this.radius=Math.max(this.radius,tt.radius);else wa.subVectors(tt.center,this.center).setLength(tt.radius),this.expandByPoint(Hs.copy(tt.center).add(wa)),this.expandByPoint(Hs.copy(tt.center).sub(wa));return this}equals(tt){return tt.center.equals(this.center)&&tt.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(tt){return this.radius=tt.radius,this.center.fromArray(tt.center),this}}var Mu=0,gi=new i,Ra=new l,Es=new e,pi=new I,Ws=new I,Qn=new e;class h extends Wi{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mu++}),this.uuid=Ci(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(tt){if(Array.isArray(tt))this.index=new((Yh(tt))?jr:Qr)(tt,1);else this.index=tt;return this}setIndirect(tt,et=0){return this.indirect=tt,this.indirectOffset=et,this}getIndirect(){return this.indirect}getAttribute(tt){return this.attributes[tt]}setAttribute(tt,et){return this.attributes[tt]=et,this}deleteAttribute(tt){return delete this.attributes[tt],this}hasAttribute(tt){return this.attributes[tt]!==void 0}addGroup(tt,et,nt=0){this.groups.push({start:tt,count:et,materialIndex:nt})}clearGroups(){this.groups=[]}setDrawRange(tt,et){this.drawRange.start=tt,this.drawRange.count=et}applyMatrix4(tt){let et=this.attributes.position;if(et!==void 0)et.applyMatrix4(tt),et.needsUpdate=!0;let nt=this.attributes.normal;if(nt!==void 0){let st=new yn().getNormalMatrix(tt);nt.applyNormalMatrix(st),nt.needsUpdate=!0}let it=this.attributes.tangent;if(it!==void 0)it.transformDirection(tt),it.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this._transformed=!0,this}applyQuaternion(tt){return gi.makeRotationFromQuaternion(tt),this.applyMatrix4(gi),this}rotateX(tt){return gi.makeRotationX(tt),this.applyMatrix4(gi),this}rotateY(tt){return gi.makeRotationY(tt),this.applyMatrix4(gi),this}rotateZ(tt){return gi.makeRotationZ(tt),this.applyMatrix4(gi),this}translate(tt,et,nt){return gi.makeTranslation(tt,et,nt),this.applyMatrix4(gi),this}scale(tt,et,nt){return gi.makeScale(tt,et,nt),this.applyMatrix4(gi),this}lookAt(tt){return Ra.lookAt(tt),Ra.updateMatrix(),this.applyMatrix4(Ra.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Es).negate(),this.translate(Es.x,Es.y,Es.z),this}setFromPoints(tt){let et=this.getAttribute("position");if(et===void 0){let nt=[];for(let it=0,st=tt.length;it<st;it++){let rt=tt[it];nt.push(rt.x,rt.y,rt.z||0)}this.setAttribute("position",new m(nt,3))}else{let nt=Math.min(tt.length,et.count);for(let it=0;it<nt;it++){let st=tt[it];et.setXYZ(it,st.x,st.y,st.z||0)}if(tt.length>et.count)fn("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");et.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new I;let tt=this.attributes.position,et=this.morphAttributes.position;if(tt&&tt.isGLBufferAttribute){vn("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new e(-1/0,-1/0,-1/0),new e(1/0,1/0,1/0));return}if(tt!==void 0){if(this.boundingBox.setFromBufferAttribute(tt),et)for(let nt=0,it=et.length;nt<it;nt++){let st=et[nt];if(pi.setFromBufferAttribute(st),this.morphTargetsRelative)Qn.addVectors(this.boundingBox.min,pi.min),this.boundingBox.expandByPoint(Qn),Qn.addVectors(this.boundingBox.max,pi.max),this.boundingBox.expandByPoint(Qn);else this.boundingBox.expandByPoint(pi.min),this.boundingBox.expandByPoint(pi.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))vn('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new E;let tt=this.attributes.position,et=this.morphAttributes.position;if(tt&&tt.isGLBufferAttribute){vn("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new e,1/0);return}if(tt){let nt=this.boundingSphere.center;if(pi.setFromBufferAttribute(tt),et)for(let st=0,rt=et.length;st<rt;st++){let at=et[st];if(Ws.setFromBufferAttribute(at),this.morphTargetsRelative)Qn.addVectors(pi.min,Ws.min),pi.expandByPoint(Qn),Qn.addVectors(pi.max,Ws.max),pi.expandByPoint(Qn);else pi.expandByPoint(Ws.min),pi.expandByPoint(Ws.max)}pi.getCenter(nt);let it=0;for(let st=0,rt=tt.count;st<rt;st++)Qn.fromBufferAttribute(tt,st),it=Math.max(it,nt.distanceToSquared(Qn));if(et)for(let st=0,rt=et.length;st<rt;st++){let at=et[st],ot=this.morphTargetsRelative;for(let lt=0,ct=at.count;lt<ct;lt++){if(Qn.fromBufferAttribute(at,lt),ot)Es.fromBufferAttribute(tt,lt),Qn.add(Es);it=Math.max(it,nt.distanceToSquared(Qn))}}if(this.boundingSphere.radius=Math.sqrt(it),isNaN(this.boundingSphere.radius))vn('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let tt=this.index,et=this.attributes;if(tt===null||et.position===void 0||et.normal===void 0||et.uv===void 0){vn("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:nt,normal:it,uv:st}=et,rt=this.getAttribute("tangent");if(rt===void 0||rt.count!==nt.count)rt=new d(new Float32Array(4*nt.count),4),this.setAttribute("tangent",rt);let at=[],ot=[],lt=new Uint8Array(nt.count);for(let yt=0;yt<nt.count;yt++)at[yt]=new e,ot[yt]=new e;let ct=new e,ht=new e,dt=new e,ut=new n,pt=new n,vt=new n,Mt=new e,ft=new e;function mt(yt,Nt,kt){lt[yt]=lt[Nt]=lt[kt]=1,ct.fromBufferAttribute(nt,yt),ht.fromBufferAttribute(nt,Nt),dt.fromBufferAttribute(nt,kt),ut.fromBufferAttribute(st,yt),pt.fromBufferAttribute(st,Nt),vt.fromBufferAttribute(st,kt),ht.sub(ct),dt.sub(ct),pt.sub(ut),vt.sub(ut);let Lt=1/(pt.x*vt.y-vt.x*pt.y);if(!isFinite(Lt))return;Mt.copy(ht).multiplyScalar(vt.y).addScaledVector(dt,-pt.y).multiplyScalar(Lt),ft.copy(dt).multiplyScalar(pt.x).addScaledVector(ht,-vt.x).multiplyScalar(Lt),at[yt].add(Mt),at[Nt].add(Mt),at[kt].add(Mt),ot[yt].add(ft),ot[Nt].add(ft),ot[kt].add(ft)}let Tt=this.groups;if(Tt.length===0)Tt=[{start:0,count:tt.count}];for(let yt=0,Nt=Tt.length;yt<Nt;++yt){let kt=Tt[yt],{start:Lt,count:zt}=kt;for(let Kt=Lt,Rt=Lt+zt;Kt<Rt;Kt+=3)mt(tt.getX(Kt+0),tt.getX(Kt+1),tt.getX(Kt+2))}let Et=new e,bt=new e,At=new e,It=new e;function gt(yt){At.fromBufferAttribute(it,yt),It.copy(At);let Nt=at[yt];Et.copy(Nt),Et.sub(At.multiplyScalar(At.dot(Nt))).normalize(),bt.crossVectors(It,Nt);let Lt=bt.dot(ot[yt])<0?-1:1;rt.setXYZW(yt,Et.x,Et.y,Et.z,Lt)}for(let yt=0,Nt=nt.count;yt<Nt;++yt)if(lt[yt])gt(yt);this._transformed=!0}computeVertexNormals(){let tt=this.index,et=this.getAttribute("position");if(et!==void 0){let nt=this.getAttribute("normal");if(nt===void 0||nt.count!==et.count)nt=new d(new Float32Array(et.count*3),3),this.setAttribute("normal",nt);else for(let dt=0,ut=nt.count;dt<ut;dt++)nt.setXYZ(dt,0,0,0);let it=new e,st=new e,rt=new e,at=new e,ot=new e,lt=new e,ct=new e,ht=new e;if(tt)for(let dt=0,ut=tt.count;dt<ut;dt+=3){let pt=tt.getX(dt+0),vt=tt.getX(dt+1),Mt=tt.getX(dt+2);it.fromBufferAttribute(et,pt),st.fromBufferAttribute(et,vt),rt.fromBufferAttribute(et,Mt),ct.subVectors(rt,st),ht.subVectors(it,st),ct.cross(ht),at.fromBufferAttribute(nt,pt),ot.fromBufferAttribute(nt,vt),lt.fromBufferAttribute(nt,Mt),at.add(ct),ot.add(ct),lt.add(ct),nt.setXYZ(pt,at.x,at.y,at.z),nt.setXYZ(vt,ot.x,ot.y,ot.z),nt.setXYZ(Mt,lt.x,lt.y,lt.z)}else for(let dt=0,ut=et.count;dt<ut;dt+=3)it.fromBufferAttribute(et,dt+0),st.fromBufferAttribute(et,dt+1),rt.fromBufferAttribute(et,dt+2),ct.subVectors(rt,st),ht.subVectors(it,st),ct.cross(ht),nt.setXYZ(dt+0,ct.x,ct.y,ct.z),nt.setXYZ(dt+1,ct.x,ct.y,ct.z),nt.setXYZ(dt+2,ct.x,ct.y,ct.z);this.normalizeNormals(),nt.needsUpdate=!0}}normalizeNormals(){let tt=this.attributes.normal;for(let et=0,nt=tt.count;et<nt;et++)Qn.fromBufferAttribute(tt,et),Qn.normalize(),tt.setXYZ(et,Qn.x,Qn.y,Qn.z)}toNonIndexed(){function tt(at,ot){let{array:lt,itemSize:ct,normalized:ht}=at,dt=new lt.constructor(ot.length*ct),ut=0,pt=0;for(let vt=0,Mt=ot.length;vt<Mt;vt++){if(at.isInterleavedBufferAttribute)ut=ot[vt]*at.data.stride+at.offset;else ut=ot[vt]*ct;for(let ft=0;ft<ct;ft++)dt[pt++]=lt[ut++]}return new d(dt,ct,ht)}if(this.index===null)return fn("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let et=new h,nt=this.index.array,it=this.attributes;for(let at in it){let ot=it[at],lt=tt(ot,nt);et.setAttribute(at,lt)}let st=this.morphAttributes;for(let at in st){let ot=[],lt=st[at];for(let ct=0,ht=lt.length;ct<ht;ct++){let dt=lt[ct],ut=tt(dt,nt);ot.push(ut)}et.morphAttributes[at]=ot}et.morphTargetsRelative=this.morphTargetsRelative;let rt=this.groups;for(let at=0,ot=rt.length;at<ot;at++){let lt=rt[at];et.addGroup(lt.start,lt.count,lt.materialIndex)}return et}toJSON(){let tt={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(tt.uuid=this.uuid,tt.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,tt.name=this.name,Object.keys(this.userData).length>0)tt.userData=this.userData;if(this.parameters!==void 0&&this._transformed!==!0){let ot=this.parameters;for(let lt in ot)if(ot[lt]!==void 0)tt[lt]=ot[lt];return tt}tt.data={attributes:{}};let et=this.index;if(et!==null)tt.data.index={type:et.array.constructor.name,array:Array.prototype.slice.call(et.array)};let nt=this.attributes;for(let ot in nt){let lt=nt[ot];tt.data.attributes[ot]=lt.toJSON(tt.data)}let it={},st=!1;for(let ot in this.morphAttributes){let lt=this.morphAttributes[ot],ct=[];for(let ht=0,dt=lt.length;ht<dt;ht++){let ut=lt[ht];ct.push(ut.toJSON(tt.data))}if(ct.length>0)it[ot]=ct,st=!0}if(st)tt.data.morphAttributes=it,tt.data.morphTargetsRelative=this.morphTargetsRelative;let rt=this.groups;if(rt.length>0)tt.data.groups=JSON.parse(JSON.stringify(rt));let at=this.boundingSphere;if(at!==null)tt.data.boundingSphere=at.toJSON();return tt}clone(){return new this.constructor().copy(this)}copy(tt){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let et={};this.name=tt.name;let nt=tt.index;if(nt!==null)this.setIndex(nt.clone());let it=tt.attributes;for(let lt in it){let ct=it[lt];this.setAttribute(lt,ct.clone(et))}let st=tt.morphAttributes;for(let lt in st){let ct=[],ht=st[lt];for(let dt=0,ut=ht.length;dt<ut;dt++)ct.push(ht[dt].clone(et));this.morphAttributes[lt]=ct}this.morphTargetsRelative=tt.morphTargetsRelative;let rt=tt.groups;for(let lt=0,ct=rt.length;lt<ct;lt++){let ht=rt[lt];this.addGroup(ht.start,ht.count,ht.materialIndex)}let at=tt.boundingBox;if(at!==null)this.boundingBox=at.clone();let ot=tt.boundingSphere;if(ot!==null)this.boundingSphere=ot.clone();return this.drawRange.start=tt.drawRange.start,this.drawRange.count=tt.drawRange.count,this.userData=tt.userData,this._transformed=tt._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ye{constructor(tt,et){this.isInterleavedBuffer=!0,this.array=tt,this.stride=et,this.count=tt!==void 0?tt.length/et:0,this.usage=35044,this.updateRanges=[],this.version=0,this.uuid=Ci()}onUploadCallback(){}set needsUpdate(tt){if(tt===!0)this.version++}setUsage(tt){return this.usage=tt,this}addUpdateRange(tt,et){this.updateRanges.push({start:tt,count:et})}clearUpdateRanges(){this.updateRanges.length=0}copy(tt){return this.array=new tt.array.constructor(tt.array),this.count=tt.count,this.stride=tt.stride,this.usage=tt.usage,this}copyAt(tt,et,nt){tt*=this.stride,nt*=et.stride;for(let it=0,st=this.stride;it<st;it++)this.array[tt+it]=et.array[nt+it];return this}set(tt,et=0){return this.array.set(tt,et),this}clone(tt){if(tt.arrayBuffers===void 0)tt.arrayBuffers={};let et=El(this.array);if(tt.arrayBuffers[et]===void 0)tt.arrayBuffers[et]=this.array.slice(0).buffer;let nt=new this.array.constructor(tt.arrayBuffers[et]),it=new this.constructor(nt,this.stride);return it.setUsage(this.usage),it}onUpload(tt){return this.onUploadCallback=tt,this}toJSON(tt){if(tt.arrayBuffers===void 0)tt.arrayBuffers={};let et=El(this.array);if(tt.arrayBuffers[et]===void 0)tt.arrayBuffers[et]=Array.from(new Uint32Array(this.array.slice(0).buffer));let nt={uuid:this.uuid,buffer:et,type:this.array.constructor.name,stride:this.stride};return nt.usage=this.usage,nt}}function El(tt){if(tt.buffer._uuid===void 0)tt.buffer._uuid=Ci();if(tt.byteOffset===0&&tt.byteLength===tt.buffer.byteLength)return tt.buffer._uuid;return tt.buffer._uuid+":"+tt.byteOffset+":"+tt.byteLength}var li=new e;class le{constructor(tt,et,nt,it=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=tt,this.itemSize=et,this.offset=nt,this.normalized=it,this._normalizationScale=tt!==void 0?Jr(tt.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(tt){this.data.needsUpdate=tt}applyMatrix4(tt){for(let et=0,nt=this.data.count;et<nt;et++)li.fromBufferAttribute(this,et),li.applyMatrix4(tt),this.setXYZ(et,li.x,li.y,li.z);return this}applyNormalMatrix(tt){for(let et=0,nt=this.count;et<nt;et++)li.fromBufferAttribute(this,et),li.applyNormalMatrix(tt),this.setXYZ(et,li.x,li.y,li.z);return this}transformDirection(tt){for(let et=0,nt=this.count;et<nt;et++)li.fromBufferAttribute(this,et),li.transformDirection(tt),this.setXYZ(et,li.x,li.y,li.z);return this}getComponent(tt,et){let nt=this.array[tt*this.data.stride+this.offset+et];if(this.normalized)nt=this._denormalize(nt);return nt}setComponent(tt,et,nt){if(this.normalized)nt=this._normalize(nt);return this.data.array[tt*this.data.stride+this.offset+et]=nt,this}setX(tt,et){if(this.normalized)et=this._normalize(et);return this.data.array[tt*this.data.stride+this.offset]=et,this}setY(tt,et){if(this.normalized)et=this._normalize(et);return this.data.array[tt*this.data.stride+this.offset+1]=et,this}setZ(tt,et){if(this.normalized)et=this._normalize(et);return this.data.array[tt*this.data.stride+this.offset+2]=et,this}setW(tt,et){if(this.normalized)et=this._normalize(et);return this.data.array[tt*this.data.stride+this.offset+3]=et,this}getX(tt){let et=this.data.array[tt*this.data.stride+this.offset];if(this.normalized)et=this._denormalize(et);return et}getY(tt){let et=this.data.array[tt*this.data.stride+this.offset+1];if(this.normalized)et=this._denormalize(et);return et}getZ(tt){let et=this.data.array[tt*this.data.stride+this.offset+2];if(this.normalized)et=this._denormalize(et);return et}getW(tt){let et=this.data.array[tt*this.data.stride+this.offset+3];if(this.normalized)et=this._denormalize(et);return et}setXY(tt,et,nt){if(tt=tt*this.data.stride+this.offset,this.normalized)et=this._normalize(et),nt=this._normalize(nt);return this.data.array[tt+0]=et,this.data.array[tt+1]=nt,this}setXYZ(tt,et,nt,it){if(tt=tt*this.data.stride+this.offset,this.normalized)et=this._normalize(et),nt=this._normalize(nt),it=this._normalize(it);return this.data.array[tt+0]=et,this.data.array[tt+1]=nt,this.data.array[tt+2]=it,this}setXYZW(tt,et,nt,it,st){if(tt=tt*this.data.stride+this.offset,this.normalized)et=this._normalize(et),nt=this._normalize(nt),it=this._normalize(it),st=this._normalize(st);return this.data.array[tt+0]=et,this.data.array[tt+1]=nt,this.data.array[tt+2]=it,this.data.array[tt+3]=st,this}clone(tt){if(tt===void 0){Ks("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let et=[];for(let nt=0;nt<this.count;nt++){let it=nt*this.data.stride+this.offset;for(let st=0;st<this.itemSize;st++)et.push(this.data.array[it+st])}return new d(new this.array.constructor(et),this.itemSize,this.normalized)}else{if(tt.interleavedBuffers===void 0)tt.interleavedBuffers={};if(tt.interleavedBuffers[this.data.uuid]===void 0)tt.interleavedBuffers[this.data.uuid]=this.data.clone(tt);return new le(tt.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}}toJSON(tt){if(tt===void 0){Ks("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let et=[];for(let nt=0;nt<this.count;nt++){let it=nt*this.data.stride+this.offset;for(let st=0;st<this.itemSize;st++)et.push(this.data.array[it+st])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:et,normalized:this.normalized}}else{if(tt.interleavedBuffers===void 0)tt.interleavedBuffers={};if(tt.interleavedBuffers[this.data.uuid]===void 0)tt.interleavedBuffers[this.data.uuid]=this.data.toJSON(tt);return{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}_denormalize(tt){let et=this._normalizationScale;return et!==void 0?Math.max(tt/et,-1):Do(tt,this.data.array)}_normalize(tt){let et=this._normalizationScale;return et!==void 0?Math.round(tt*et):Uo(tt,this.data.array)}}var Ca=new e,bu=new e,Tu=new yn;class Ai{constructor(tt=new e(1,0,0),et=0){this.isPlane=!0,this.normal=tt,this.constant=et}set(tt,et){return this.normal.copy(tt),this.constant=et,this}setComponents(tt,et,nt,it){return this.normal.set(tt,et,nt),this.constant=it,this}setFromNormalAndCoplanarPoint(tt,et){return this.normal.copy(tt),this.constant=-et.dot(this.normal),this}setFromCoplanarPoints(tt,et,nt){let it=Ca.subVectors(nt,et).cross(bu.subVectors(tt,et)).normalize();return this.setFromNormalAndCoplanarPoint(it,tt),this}copy(tt){return this.normal.copy(tt.normal),this.constant=tt.constant,this}normalize(){let tt=1/this.normal.length();return this.normal.multiplyScalar(tt),this.constant*=tt,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(tt){return this.normal.dot(tt)+this.constant}distanceToSphere(tt){return this.distanceToPoint(tt.center)-tt.radius}projectPoint(tt,et){return et.copy(tt).addScaledVector(this.normal,-this.distanceToPoint(tt))}intersectLine(tt,et,nt=!0){let it=tt.delta(Ca),st=this.normal.dot(it);if(st===0){if(this.distanceToPoint(tt.start)===0)return et.copy(tt.start);return null}let rt=-(tt.start.dot(this.normal)+this.constant)/st;if(nt===!0&&(rt<0||rt>1))return null;return et.copy(tt.start).addScaledVector(it,rt)}intersectsLine(tt){let et=this.distanceToPoint(tt.start),nt=this.distanceToPoint(tt.end);return et<0&&nt>0||nt<0&&et>0}intersectsBox(tt){return tt.intersectsPlane(this)}intersectsSphere(tt){return tt.intersectsPlane(this)}coplanarPoint(tt){return tt.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(tt,et){let nt=et||Tu.getNormalMatrix(tt),it=this.coplanarPoint(Ca).applyMatrix4(tt),st=this.normal.applyMatrix3(nt).normalize();return this.constant=-it.dot(st),this}translate(tt){return this.constant-=tt.dot(this.normal),this}equals(tt){return tt.normal.equals(this.normal)&&tt.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(tt){return this.normal.fromArray(tt.normal),this.constant=tt.constant,this}}var Eu=0;class b extends Wi{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:Eu++}),this.uuid=Ci(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new t(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(tt){if(this._alphaTest>0!==tt>0)this.version++;this._alphaTest=tt}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(tt){if(tt===void 0)return;for(let et in tt){let nt=tt[et];if(nt===void 0){fn(`Material: parameter '${et}' has value of undefined.`);continue}let it=this[et];if(it===void 0){fn(`Material: '${et}' is not a property of THREE.${this.type}.`);continue}if(it&&it.isColor)it.set(nt);else if(it&&it.isVector2&&(nt&&nt.isVector2)||it&&it.isEuler&&(nt&&nt.isEuler)||it&&it.isVector3&&(nt&&nt.isVector3))it.copy(nt);else this[et]=nt}}toJSON(tt){let et=tt===void 0||typeof tt==="string";if(et)tt={textures:{},images:{}};let nt={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if(nt.uuid=this.uuid,nt.type=this.type,nt.blending=this.blending,nt.side=this.side,nt.shadowSide=this.shadowSide,nt.vertexColors=this.vertexColors,nt.opacity=this.opacity,nt.transparent=this.transparent,nt.blendSrc=this.blendSrc,nt.blendDst=this.blendDst,nt.blendEquation=this.blendEquation,nt.blendSrcAlpha=this.blendSrcAlpha,nt.blendDstAlpha=this.blendDstAlpha,nt.blendEquationAlpha=this.blendEquationAlpha,nt.blendColor=this.blendColor.getHex(),nt.blendAlpha=this.blendAlpha,nt.depthFunc=this.depthFunc,nt.depthTest=this.depthTest,nt.depthWrite=this.depthWrite,nt.colorWrite=this.colorWrite,nt.clipIntersection=this.clipIntersection,nt.clipShadows=this.clipShadows,nt.stencilWriteMask=this.stencilWriteMask,nt.stencilFunc=this.stencilFunc,nt.stencilRef=this.stencilRef,nt.stencilFuncMask=this.stencilFuncMask,nt.stencilFail=this.stencilFail,nt.stencilZFail=this.stencilZFail,nt.stencilZPass=this.stencilZPass,nt.stencilWrite=this.stencilWrite,nt.polygonOffset=this.polygonOffset,nt.polygonOffsetFactor=this.polygonOffsetFactor,nt.polygonOffsetUnits=this.polygonOffsetUnits,nt.dithering=this.dithering,nt.alphaTest=this.alphaTest,nt.alphaHash=this.alphaHash,nt.alphaToCoverage=this.alphaToCoverage,nt.premultipliedAlpha=this.premultipliedAlpha,nt.forceSinglePass=this.forceSinglePass,nt.allowOverride=this.allowOverride,nt.visible=this.visible,nt.toneMapped=this.toneMapped,nt.name=this.name,this.color&&this.color.isColor)nt.color=this.color.getHex();if(this.roughness!==void 0)nt.roughness=this.roughness;if(this.metalness!==void 0)nt.metalness=this.metalness;if(this.sheen!==void 0)nt.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)nt.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)nt.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)nt.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0)nt.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)nt.specular=this.specular.getHex();if(this.specularIntensity!==void 0)nt.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)nt.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)nt.shininess=this.shininess;if(this.clearcoat!==void 0)nt.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)nt.clearcoatRoughness=this.clearcoatRoughness;if(this.diffuseRoughness!==void 0)nt.diffuseRoughness=this.diffuseRoughness;if(this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture)nt.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(tt).uuid;if(this.clearcoatMap&&this.clearcoatMap.isTexture)nt.clearcoatMap=this.clearcoatMap.toJSON(tt).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)nt.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(tt).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)nt.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(tt).uuid,nt.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)nt.sheenColorMap=this.sheenColorMap.toJSON(tt).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)nt.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(tt).uuid;if(this.dispersion!==void 0)nt.dispersion=this.dispersion;if(this.retroreflectivity!==void 0)nt.retroreflectivity=this.retroreflectivity;if(this.iridescence!==void 0)nt.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)nt.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessMinimum!==void 0)nt.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum;if(this.iridescenceThicknessMaximum!==void 0)nt.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum;if(this.iridescenceMap&&this.iridescenceMap.isTexture)nt.iridescenceMap=this.iridescenceMap.toJSON(tt).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)nt.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(tt).uuid;if(this.anisotropy!==void 0)nt.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)nt.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)nt.anisotropyMap=this.anisotropyMap.toJSON(tt).uuid;if(this.map&&this.map.isTexture)nt.map=this.map.toJSON(tt).uuid;if(this.matcap&&this.matcap.isTexture)nt.matcap=this.matcap.toJSON(tt).uuid;if(this.alphaMap&&this.alphaMap.isTexture)nt.alphaMap=this.alphaMap.toJSON(tt).uuid;if(this.lightMap&&this.lightMap.isTexture)nt.lightMap=this.lightMap.toJSON(tt).uuid,nt.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)nt.aoMap=this.aoMap.toJSON(tt).uuid,nt.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)nt.bumpMap=this.bumpMap.toJSON(tt).uuid,nt.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)nt.normalMap=this.normalMap.toJSON(tt).uuid,nt.normalMapType=this.normalMapType,nt.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)nt.displacementMap=this.displacementMap.toJSON(tt).uuid,nt.displacementScale=this.displacementScale,nt.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)nt.roughnessMap=this.roughnessMap.toJSON(tt).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)nt.metalnessMap=this.metalnessMap.toJSON(tt).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)nt.emissiveMap=this.emissiveMap.toJSON(tt).uuid;if(this.specularMap&&this.specularMap.isTexture)nt.specularMap=this.specularMap.toJSON(tt).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)nt.specularIntensityMap=this.specularIntensityMap.toJSON(tt).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)nt.specularColorMap=this.specularColorMap.toJSON(tt).uuid;if(this.envMap&&this.envMap.isTexture){if(nt.envMap=this.envMap.toJSON(tt).uuid,this.combine!==void 0)nt.combine=this.combine}if(this.envMapRotation!==void 0)nt.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)nt.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)nt.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)nt.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)nt.gradientMap=this.gradientMap.toJSON(tt).uuid;if(this.transmission!==void 0)nt.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)nt.transmissionMap=this.transmissionMap.toJSON(tt).uuid;if(this.thickness!==void 0)nt.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)nt.thicknessMap=this.thicknessMap.toJSON(tt).uuid;if(this.attenuationDistance!==void 0)nt.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)nt.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)nt.size=this.size;if(this.sizeAttenuation!==void 0)nt.sizeAttenuation=this.sizeAttenuation;if(Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0)nt.clippingPlanes=this.clippingPlanes.map((st)=>st.toJSON());if(this.rotation!==void 0)nt.rotation=this.rotation;if(this.depthPacking!==void 0)nt.depthPacking=this.depthPacking;if(this.linewidth!==void 0)nt.linewidth=this.linewidth;if(this.linecap!==void 0)nt.linecap=this.linecap;if(this.linejoin!==void 0)nt.linejoin=this.linejoin;if(this.dashSize!==void 0)nt.dashSize=this.dashSize;if(this.gapSize!==void 0)nt.gapSize=this.gapSize;if(this.scale!==void 0)nt.scale=this.scale;if(this.wireframe!==void 0)nt.wireframe=this.wireframe;if(this.wireframeLinewidth!==void 0)nt.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!==void 0)nt.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!==void 0)nt.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading!==void 0)nt.flatShading=this.flatShading;if(this.fog!==void 0)nt.fog=this.fog;if(Object.keys(this.userData).length>0)nt.userData=this.userData;function it(st){let rt=[];for(let at in st){let ot=st[at];delete ot.metadata,rt.push(ot)}return rt}if(et){let st=it(tt.textures),rt=it(tt.images);if(st.length>0)nt.textures=st;if(rt.length>0)nt.images=rt}return nt}fromJSON(tt,et){if(tt.uuid!==void 0)this.uuid=tt.uuid;if(tt.name!==void 0)this.name=tt.name;if(tt.color!==void 0&&this.color!==void 0)this.color.setHex(tt.color);if(tt.roughness!==void 0)this.roughness=tt.roughness;if(tt.metalness!==void 0)this.metalness=tt.metalness;if(tt.sheen!==void 0)this.sheen=tt.sheen;if(tt.sheenColor!==void 0)this.sheenColor=new t().setHex(tt.sheenColor);if(tt.sheenRoughness!==void 0)this.sheenRoughness=tt.sheenRoughness;if(tt.emissive!==void 0&&this.emissive!==void 0)this.emissive.setHex(tt.emissive);if(tt.specular!==void 0&&this.specular!==void 0)this.specular.setHex(tt.specular);if(tt.specularIntensity!==void 0)this.specularIntensity=tt.specularIntensity;if(tt.specularColor!==void 0&&this.specularColor!==void 0)this.specularColor.setHex(tt.specularColor);if(tt.shininess!==void 0)this.shininess=tt.shininess;if(tt.clearcoat!==void 0)this.clearcoat=tt.clearcoat;if(tt.clearcoatRoughness!==void 0)this.clearcoatRoughness=tt.clearcoatRoughness;if(tt.diffuseRoughness!==void 0)this.diffuseRoughness=tt.diffuseRoughness;if(tt.dispersion!==void 0)this.dispersion=tt.dispersion;if(tt.retroreflectivity!==void 0)this.retroreflectivity=tt.retroreflectivity;if(tt.iridescence!==void 0)this.iridescence=tt.iridescence;if(tt.iridescenceIOR!==void 0)this.iridescenceIOR=tt.iridescenceIOR;if(tt.iridescenceThicknessMinimum!==void 0)this.iridescenceThicknessMinimum=tt.iridescenceThicknessMinimum;if(tt.iridescenceThicknessMaximum!==void 0)this.iridescenceThicknessMaximum=tt.iridescenceThicknessMaximum;if(tt.iridescenceThicknessRange!==void 0)this.iridescenceThicknessMinimum=tt.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=tt.iridescenceThicknessRange[1];if(tt.transmission!==void 0)this.transmission=tt.transmission;if(tt.thickness!==void 0)this.thickness=tt.thickness;if(tt.attenuationDistance!==void 0)this.attenuationDistance=tt.attenuationDistance;if(tt.attenuationColor!==void 0&&this.attenuationColor!==void 0)this.attenuationColor.setHex(tt.attenuationColor);if(tt.anisotropy!==void 0)this.anisotropy=tt.anisotropy;if(tt.anisotropyRotation!==void 0)this.anisotropyRotation=tt.anisotropyRotation;if(tt.fog!==void 0)this.fog=tt.fog;if(tt.flatShading!==void 0)this.flatShading=tt.flatShading;if(tt.blending!==void 0)this.blending=tt.blending;if(tt.combine!==void 0)this.combine=tt.combine;if(tt.side!==void 0)this.side=tt.side;if(tt.shadowSide!==void 0)this.shadowSide=tt.shadowSide;if(tt.opacity!==void 0)this.opacity=tt.opacity;if(tt.transparent!==void 0)this.transparent=tt.transparent;if(tt.alphaTest!==void 0)this.alphaTest=tt.alphaTest;if(tt.alphaHash!==void 0)this.alphaHash=tt.alphaHash;if(tt.depthFunc!==void 0)this.depthFunc=tt.depthFunc;if(tt.depthTest!==void 0)this.depthTest=tt.depthTest;if(tt.depthWrite!==void 0)this.depthWrite=tt.depthWrite;if(tt.colorWrite!==void 0)this.colorWrite=tt.colorWrite;if(tt.clippingPlanes!==void 0)this.clippingPlanes=tt.clippingPlanes.map((nt)=>new Ai().fromJSON(nt));if(tt.clipIntersection!==void 0)this.clipIntersection=tt.clipIntersection;if(tt.clipShadows!==void 0)this.clipShadows=tt.clipShadows;if(tt.depthPacking!==void 0)this.depthPacking=tt.depthPacking;if(tt.blendSrc!==void 0)this.blendSrc=tt.blendSrc;if(tt.blendDst!==void 0)this.blendDst=tt.blendDst;if(tt.blendEquation!==void 0)this.blendEquation=tt.blendEquation;if(tt.blendSrcAlpha!==void 0)this.blendSrcAlpha=tt.blendSrcAlpha;if(tt.blendDstAlpha!==void 0)this.blendDstAlpha=tt.blendDstAlpha;if(tt.blendEquationAlpha!==void 0)this.blendEquationAlpha=tt.blendEquationAlpha;if(tt.blendColor!==void 0&&this.blendColor!==void 0)this.blendColor.setHex(tt.blendColor);if(tt.blendAlpha!==void 0)this.blendAlpha=tt.blendAlpha;if(tt.stencilWriteMask!==void 0)this.stencilWriteMask=tt.stencilWriteMask;if(tt.stencilFunc!==void 0)this.stencilFunc=tt.stencilFunc;if(tt.stencilRef!==void 0)this.stencilRef=tt.stencilRef;if(tt.stencilFuncMask!==void 0)this.stencilFuncMask=tt.stencilFuncMask;if(tt.stencilFail!==void 0)this.stencilFail=tt.stencilFail;if(tt.stencilZFail!==void 0)this.stencilZFail=tt.stencilZFail;if(tt.stencilZPass!==void 0)this.stencilZPass=tt.stencilZPass;if(tt.stencilWrite!==void 0)this.stencilWrite=tt.stencilWrite;if(tt.wireframe!==void 0)this.wireframe=tt.wireframe;if(tt.wireframeLinewidth!==void 0)this.wireframeLinewidth=tt.wireframeLinewidth;if(tt.wireframeLinecap!==void 0)this.wireframeLinecap=tt.wireframeLinecap;if(tt.wireframeLinejoin!==void 0)this.wireframeLinejoin=tt.wireframeLinejoin;if(tt.rotation!==void 0)this.rotation=tt.rotation;if(tt.linewidth!==void 0)this.linewidth=tt.linewidth;if(tt.linecap!==void 0)this.linecap=tt.linecap;if(tt.linejoin!==void 0)this.linejoin=tt.linejoin;if(tt.dashSize!==void 0)this.dashSize=tt.dashSize;if(tt.gapSize!==void 0)this.gapSize=tt.gapSize;if(tt.scale!==void 0)this.scale=tt.scale;if(tt.polygonOffset!==void 0)this.polygonOffset=tt.polygonOffset;if(tt.polygonOffsetFactor!==void 0)this.polygonOffsetFactor=tt.polygonOffsetFactor;if(tt.polygonOffsetUnits!==void 0)this.polygonOffsetUnits=tt.polygonOffsetUnits;if(tt.dithering!==void 0)this.dithering=tt.dithering;if(tt.alphaToCoverage!==void 0)this.alphaToCoverage=tt.alphaToCoverage;if(tt.premultipliedAlpha!==void 0)this.premultipliedAlpha=tt.premultipliedAlpha;if(tt.forceSinglePass!==void 0)this.forceSinglePass=tt.forceSinglePass;if(tt.allowOverride!==void 0)this.allowOverride=tt.allowOverride;if(tt.visible!==void 0)this.visible=tt.visible;if(tt.toneMapped!==void 0)this.toneMapped=tt.toneMapped;if(tt.userData!==void 0)this.userData=tt.userData;if(tt.vertexColors!==void 0)if(typeof tt.vertexColors==="number")this.vertexColors=tt.vertexColors>0;else this.vertexColors=tt.vertexColors;if(tt.size!==void 0)this.size=tt.size;if(tt.sizeAttenuation!==void 0)this.sizeAttenuation=tt.sizeAttenuation;if(tt.map!==void 0)this.map=et[tt.map]||null;if(tt.matcap!==void 0)this.matcap=et[tt.matcap]||null;if(tt.alphaMap!==void 0)this.alphaMap=et[tt.alphaMap]||null;if(tt.bumpMap!==void 0)this.bumpMap=et[tt.bumpMap]||null;if(tt.bumpScale!==void 0)this.bumpScale=tt.bumpScale;if(tt.normalMap!==void 0)this.normalMap=et[tt.normalMap]||null;if(tt.normalMapType!==void 0)this.normalMapType=tt.normalMapType;if(tt.normalScale!==void 0){let nt=tt.normalScale;if(Array.isArray(nt)===!1)nt=[nt,nt];this.normalScale=new n().fromArray(nt)}if(tt.displacementMap!==void 0)this.displacementMap=et[tt.displacementMap]||null;if(tt.displacementScale!==void 0)this.displacementScale=tt.displacementScale;if(tt.displacementBias!==void 0)this.displacementBias=tt.displacementBias;if(tt.roughnessMap!==void 0)this.roughnessMap=et[tt.roughnessMap]||null;if(tt.metalnessMap!==void 0)this.metalnessMap=et[tt.metalnessMap]||null;if(tt.emissiveMap!==void 0)this.emissiveMap=et[tt.emissiveMap]||null;if(tt.emissiveIntensity!==void 0)this.emissiveIntensity=tt.emissiveIntensity;if(tt.specularMap!==void 0)this.specularMap=et[tt.specularMap]||null;if(tt.specularIntensityMap!==void 0)this.specularIntensityMap=et[tt.specularIntensityMap]||null;if(tt.specularColorMap!==void 0)this.specularColorMap=et[tt.specularColorMap]||null;if(tt.envMap!==void 0)this.envMap=et[tt.envMap]||null;if(tt.envMapRotation!==void 0)this.envMapRotation.fromArray(tt.envMapRotation);if(tt.envMapIntensity!==void 0)this.envMapIntensity=tt.envMapIntensity;if(tt.reflectivity!==void 0)this.reflectivity=tt.reflectivity;if(tt.refractionRatio!==void 0)this.refractionRatio=tt.refractionRatio;if(tt.lightMap!==void 0)this.lightMap=et[tt.lightMap]||null;if(tt.lightMapIntensity!==void 0)this.lightMapIntensity=tt.lightMapIntensity;if(tt.aoMap!==void 0)this.aoMap=et[tt.aoMap]||null;if(tt.aoMapIntensity!==void 0)this.aoMapIntensity=tt.aoMapIntensity;if(tt.gradientMap!==void 0)this.gradientMap=et[tt.gradientMap]||null;if(tt.clearcoatMap!==void 0)this.clearcoatMap=et[tt.clearcoatMap]||null;if(tt.clearcoatRoughnessMap!==void 0)this.clearcoatRoughnessMap=et[tt.clearcoatRoughnessMap]||null;if(tt.clearcoatNormalMap!==void 0)this.clearcoatNormalMap=et[tt.clearcoatNormalMap]||null;if(tt.clearcoatNormalScale!==void 0)this.clearcoatNormalScale=new n().fromArray(tt.clearcoatNormalScale);if(tt.diffuseRoughnessMap!==void 0)this.diffuseRoughnessMap=et[tt.diffuseRoughnessMap]||null;if(tt.iridescenceMap!==void 0)this.iridescenceMap=et[tt.iridescenceMap]||null;if(tt.iridescenceThicknessMap!==void 0)this.iridescenceThicknessMap=et[tt.iridescenceThicknessMap]||null;if(tt.transmissionMap!==void 0)this.transmissionMap=et[tt.transmissionMap]||null;if(tt.thicknessMap!==void 0)this.thicknessMap=et[tt.thicknessMap]||null;if(tt.anisotropyMap!==void 0)this.anisotropyMap=et[tt.anisotropyMap]||null;if(tt.sheenColorMap!==void 0)this.sheenColorMap=et[tt.sheenColorMap]||null;if(tt.sheenRoughnessMap!==void 0)this.sheenRoughnessMap=et[tt.sheenRoughnessMap]||null;return this}clone(){return new this.constructor().copy(this)}copy(tt){this.name=tt.name,this.blending=tt.blending,this.side=tt.side,this.vertexColors=tt.vertexColors,this.opacity=tt.opacity,this.transparent=tt.transparent,this.blendSrc=tt.blendSrc,this.blendDst=tt.blendDst,this.blendEquation=tt.blendEquation,this.blendSrcAlpha=tt.blendSrcAlpha,this.blendDstAlpha=tt.blendDstAlpha,this.blendEquationAlpha=tt.blendEquationAlpha,this.blendColor.copy(tt.blendColor),this.blendAlpha=tt.blendAlpha,this.depthFunc=tt.depthFunc,this.depthTest=tt.depthTest,this.depthWrite=tt.depthWrite,this.stencilWriteMask=tt.stencilWriteMask,this.stencilFunc=tt.stencilFunc,this.stencilRef=tt.stencilRef,this.stencilFuncMask=tt.stencilFuncMask,this.stencilFail=tt.stencilFail,this.stencilZFail=tt.stencilZFail,this.stencilZPass=tt.stencilZPass,this.stencilWrite=tt.stencilWrite;let et=tt.clippingPlanes,nt=null;if(et!==null){let it=et.length;nt=Array(it);for(let st=0;st!==it;++st)nt[st]=et[st].clone()}return this.clippingPlanes=nt,this.clipIntersection=tt.clipIntersection,this.clipShadows=tt.clipShadows,this.shadowSide=tt.shadowSide,this.colorWrite=tt.colorWrite,this.precision=tt.precision,this.polygonOffset=tt.polygonOffset,this.polygonOffsetFactor=tt.polygonOffsetFactor,this.polygonOffsetUnits=tt.polygonOffsetUnits,this.dithering=tt.dithering,this.alphaTest=tt.alphaTest,this.alphaHash=tt.alphaHash,this.alphaToCoverage=tt.alphaToCoverage,this.premultipliedAlpha=tt.premultipliedAlpha,this.forceSinglePass=tt.forceSinglePass,this.allowOverride=tt.allowOverride,this.visible=tt.visible,this.toneMapped=tt.toneMapped,this.userData=JSON.parse(JSON.stringify(tt.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(tt){if(tt===!0)this.version++}}var Bi=new e,Ia=new e,Sr=new e,Mr=new e;class Os{constructor(tt=new e,et=new e(0,0,-1)){this.origin=tt,this.direction=et}set(tt,et){return this.origin.copy(tt),this.direction.copy(et),this}copy(tt){return this.origin.copy(tt.origin),this.direction.copy(tt.direction),this}at(tt,et){return et.copy(this.origin).addScaledVector(this.direction,tt)}lookAt(tt){return this.direction.copy(tt).sub(this.origin).normalize(),this}recast(tt){return this.origin.copy(this.at(tt,Bi)),this}closestPointToPoint(tt,et){et.subVectors(tt,this.origin);let nt=et.dot(this.direction);if(nt<0)return et.copy(this.origin);return et.copy(this.origin).addScaledVector(this.direction,nt)}distanceToPoint(tt){return Math.sqrt(this.distanceSqToPoint(tt))}distanceSqToPoint(tt){let et=Bi.subVectors(tt,this.origin).dot(this.direction);if(et<0)return this.origin.distanceToSquared(tt);return Bi.copy(this.origin).addScaledVector(this.direction,et),Bi.distanceToSquared(tt)}distanceSqToSegment(tt,et,nt,it){Ia.copy(tt).add(et).multiplyScalar(0.5),Sr.copy(et).sub(tt).normalize(),Mr.copy(this.origin).sub(Ia);let st=tt.distanceTo(et)*0.5,rt=-this.direction.dot(Sr),at=Mr.dot(this.direction),ot=-Mr.dot(Sr),lt=Mr.lengthSq(),ct=Math.abs(1-rt*rt),ht,dt,ut,pt;if(ct>0)if(ht=rt*ot-at,dt=rt*at-ot,pt=st*ct,ht>=0)if(dt>=-pt)if(dt<=pt){let vt=1/ct;ht*=vt,dt*=vt,ut=ht*(ht+rt*dt+2*at)+dt*(rt*ht+dt+2*ot)+lt}else dt=st,ht=Math.max(0,-(rt*dt+at)),ut=-ht*ht+dt*(dt+2*ot)+lt;else dt=-st,ht=Math.max(0,-(rt*dt+at)),ut=-ht*ht+dt*(dt+2*ot)+lt;else if(dt<=-pt)ht=Math.max(0,-(-rt*st+at)),dt=ht>0?-st:Math.min(Math.max(-st,-ot),st),ut=-ht*ht+dt*(dt+2*ot)+lt;else if(dt<=pt)ht=0,dt=Math.min(Math.max(-st,-ot),st),ut=dt*(dt+2*ot)+lt;else ht=Math.max(0,-(rt*st+at)),dt=ht>0?st:Math.min(Math.max(-st,-ot),st),ut=-ht*ht+dt*(dt+2*ot)+lt;else dt=rt>0?-st:st,ht=Math.max(0,-(rt*dt+at)),ut=-ht*ht+dt*(dt+2*ot)+lt;if(nt)nt.copy(this.origin).addScaledVector(this.direction,ht);if(it)it.copy(Ia).addScaledVector(Sr,dt);return ut}intersectSphere(tt,et){if(tt.radius<0)return null;Bi.subVectors(tt.center,this.origin);let nt=Bi.dot(this.direction),it=Bi.dot(Bi)-nt*nt,st=tt.radius*tt.radius;if(it>st)return null;let rt=Math.sqrt(st-it),at=nt-rt,ot=nt+rt;if(ot<0)return null;if(at<0)return this.at(ot,et);return this.at(at,et)}intersectsSphere(tt){if(tt.radius<0)return!1;return this.distanceSqToPoint(tt.center)<=tt.radius*tt.radius}distanceToPlane(tt){let et=tt.normal.dot(this.direction);if(et===0){if(tt.distanceToPoint(this.origin)===0)return 0;return null}let nt=-(this.origin.dot(tt.normal)+tt.constant)/et;return nt>=0?nt:null}intersectPlane(tt,et){let nt=this.distanceToPlane(tt);if(nt===null)return null;return this.at(nt,et)}intersectsPlane(tt){let et=tt.distanceToPoint(this.origin);if(et===0)return!0;if(tt.normal.dot(this.direction)*et<0)return!0;return!1}intersectBox(tt,et){let nt,it,st,rt,at,ot,lt=1/this.direction.x,ct=1/this.direction.y,ht=1/this.direction.z,dt=this.origin;if(lt>=0)nt=(tt.min.x-dt.x)*lt,it=(tt.max.x-dt.x)*lt;else nt=(tt.max.x-dt.x)*lt,it=(tt.min.x-dt.x)*lt;if(ct>=0)st=(tt.min.y-dt.y)*ct,rt=(tt.max.y-dt.y)*ct;else st=(tt.max.y-dt.y)*ct,rt=(tt.min.y-dt.y)*ct;if(nt>rt||st>it)return null;if(st>nt||isNaN(nt))nt=st;if(rt<it||isNaN(it))it=rt;if(ht>=0)at=(tt.min.z-dt.z)*ht,ot=(tt.max.z-dt.z)*ht;else at=(tt.max.z-dt.z)*ht,ot=(tt.min.z-dt.z)*ht;if(nt>ot||at>it)return null;if(at>nt||nt!==nt)nt=at;if(ot<it||it!==it)it=ot;if(it<0)return null;return this.at(nt>=0?nt:it,et)}intersectsBox(tt){return this.intersectBox(tt,Bi)!==null}intersectTriangle(tt,et,nt,it,st){let rt=this.origin,at=this.direction,{x:ot,y:lt,z:ct}=at,ht=tt.x-rt.x,dt=tt.y-rt.y,ut=tt.z-rt.z,pt=et.x-rt.x,vt=et.y-rt.y,Mt=et.z-rt.z,ft=nt.x-rt.x,mt=nt.y-rt.y,Tt=nt.z-rt.z,Et=Math.abs(ot),bt=Math.abs(lt),At=Math.abs(ct),It,gt,yt,Nt,kt,Lt,zt,Kt,Rt,qt,Zt,Ot;if(Et>=bt&&Et>=At)if(yt=ot,Lt=ht,Rt=pt,Ot=ft,ot>=0)It=lt,gt=ct,Nt=dt,kt=ut,zt=vt,Kt=Mt,qt=mt,Zt=Tt;else It=ct,gt=lt,Nt=ut,kt=dt,zt=Mt,Kt=vt,qt=Tt,Zt=mt;else if(bt>=At)if(yt=lt,Lt=dt,Rt=vt,Ot=mt,lt>=0)It=ct,gt=ot,Nt=ut,kt=ht,zt=Mt,Kt=pt,qt=Tt,Zt=ft;else It=ot,gt=ct,Nt=ht,kt=ut,zt=pt,Kt=Mt,qt=ft,Zt=Tt;else if(yt=ct,Lt=ut,Rt=Mt,Ot=Tt,ct>=0)It=ot,gt=lt,Nt=ht,kt=dt,zt=pt,Kt=vt,qt=ft,Zt=mt;else It=lt,gt=ot,Nt=dt,kt=ht,zt=vt,Kt=pt,qt=mt,Zt=ft;if(yt===0)return null;let Ye=It/yt,Wt=gt/yt,$t=1/yt,Ve=Nt-Ye*Lt,hn=kt-Wt*Lt,Yt=zt-Ye*Rt,We=Kt-Wt*Rt,ln=qt-Ye*Ot,gn=Zt-Wt*Ot,_n=ln*We-gn*Yt,cn=Ve*gn-hn*ln,Nn=Yt*hn-We*Ve;if(it){if(_n<0||cn<0||Nn<0)return null}else if((_n<0||cn<0||Nn<0)&&(_n>0||cn>0||Nn>0))return null;let An=_n+cn+Nn;if(An===0)return null;let bn=$t*(_n*Lt+cn*Rt+Nn*Ot);if(An>0?bn<0:bn>0)return null;return this.at(bn/An,st)}applyMatrix4(tt){return this.origin.applyMatrix4(tt),this.direction.transformDirection(tt),this}equals(tt){return tt.origin.equals(this.origin)&&tt.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class v extends b{constructor(tt){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(tt)}copy(tt){return super.copy(tt),this.color.copy(tt.color),this.map=tt.map,this.lightMap=tt.lightMap,this.lightMapIntensity=tt.lightMapIntensity,this.aoMap=tt.aoMap,this.aoMapIntensity=tt.aoMapIntensity,this.specularMap=tt.specularMap,this.alphaMap=tt.alphaMap,this.envMap=tt.envMap,this.envMapRotation.copy(tt.envMapRotation),this.combine=tt.combine,this.reflectivity=tt.reflectivity,this.refractionRatio=tt.refractionRatio,this.wireframe=tt.wireframe,this.wireframeLinewidth=tt.wireframeLinewidth,this.wireframeLinecap=tt.wireframeLinecap,this.wireframeLinejoin=tt.wireframeLinejoin,this.fog=tt.fog,this}}var Al=new i,os=new Os,br=new E,wl=new e,Tr=new e,Er=new e,Ar=new e,Pa=new e,wr=new e,Rl=new e,Rr=new e;class r extends l{constructor(tt=new h,et=new v){super();this.isMesh=!0,this.type="Mesh",this.geometry=tt,this.material=et,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(tt,et){if(super.copy(tt,et),tt.morphTargetInfluences!==void 0)this.morphTargetInfluences=tt.morphTargetInfluences.slice();else this.morphTargetInfluences=void 0;if(tt.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},tt.morphTargetDictionary);else this.morphTargetDictionary=void 0;return this.material=Array.isArray(tt.material)?tt.material.slice():tt.material,this.geometry=tt.geometry,this}updateMorphTargets(){let et=this.geometry.morphAttributes,nt=Object.keys(et);if(nt.length>0){let it=et[nt[0]];if(it!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let st=0,rt=it.length;st<rt;st++){let at=it[st].name||String(st);this.morphTargetInfluences.push(0),this.morphTargetDictionary[at]=st}}}}getVertexPosition(tt,et){let nt=this.geometry,it=nt.attributes.position,st=nt.morphAttributes.position,rt=nt.morphTargetsRelative;et.fromBufferAttribute(it,tt);let at=this.morphTargetInfluences;if(st&&at){wr.set(0,0,0);for(let ot=0,lt=st.length;ot<lt;ot++){let ct=at[ot],ht=st[ot];if(ct===0)continue;if(Pa.fromBufferAttribute(ht,tt),rt)wr.addScaledVector(Pa,ct);else wr.addScaledVector(Pa.sub(et),ct)}et.add(wr)}return et}intersectsFrustum(tt){return tt.intersectsObject(this)}raycast(tt,et){let nt=this.geometry,it=this.material,st=this.matrixWorld;if(it===void 0)return;if(nt.boundingSphere===null)nt.computeBoundingSphere();if(br.copy(nt.boundingSphere),br.applyMatrix4(st),os.copy(tt.ray).recast(tt.near),br.containsPoint(os.origin)===!1){if(os.intersectSphere(br,wl)===null)return;if(os.origin.distanceToSquared(wl)>(tt.far-tt.near)**2)return}if(Al.copy(st).invert(),os.copy(tt.ray).applyMatrix4(Al),nt.boundingBox!==null){if(os.intersectsBox(nt.boundingBox)===!1)return}this._computeIntersections(tt,et,os)}_computeIntersections(tt,et,nt){let it,st=this.geometry,rt=this.material,at=st.index,ot=st.attributes.position,lt=st.attributes.uv,ct=st.attributes.uv1,ht=st.attributes.normal,{groups:dt,drawRange:ut}=st;if(at!==null)if(Array.isArray(rt))for(let pt=0,vt=dt.length;pt<vt;pt++){let Mt=dt[pt],ft=rt[Mt.materialIndex],mt=Math.max(Mt.start,ut.start),Tt=Math.min(at.count,Math.min(Mt.start+Mt.count,ut.start+ut.count));for(let Et=mt,bt=Tt;Et<bt;Et+=3){let At=at.getX(Et),It=at.getX(Et+1),gt=at.getX(Et+2);if(it=Cr(this,ft,tt,nt,lt,ct,ht,At,It,gt),it)it.faceIndex=Math.floor(Et/3),it.face.materialIndex=Mt.materialIndex,et.push(it)}}else{let pt=Math.max(0,ut.start),vt=Math.min(at.count,ut.start+ut.count);for(let Mt=pt,ft=vt;Mt<ft;Mt+=3){let mt=at.getX(Mt),Tt=at.getX(Mt+1),Et=at.getX(Mt+2);if(it=Cr(this,rt,tt,nt,lt,ct,ht,mt,Tt,Et),it)it.faceIndex=Math.floor(Mt/3),et.push(it)}}else if(ot!==void 0)if(Array.isArray(rt))for(let pt=0,vt=dt.length;pt<vt;pt++){let Mt=dt[pt],ft=rt[Mt.materialIndex],mt=Math.max(Mt.start,ut.start),Tt=Math.min(ot.count,Math.min(Mt.start+Mt.count,ut.start+ut.count));for(let Et=mt,bt=Tt;Et<bt;Et+=3){let At=Et,It=Et+1,gt=Et+2;if(it=Cr(this,ft,tt,nt,lt,ct,ht,At,It,gt),it)it.faceIndex=Math.floor(Et/3),it.face.materialIndex=Mt.materialIndex,et.push(it)}}else{let pt=Math.max(0,ut.start),vt=Math.min(ot.count,ut.start+ut.count);for(let Mt=pt,ft=vt;Mt<ft;Mt+=3){let mt=Mt,Tt=Mt+1,Et=Mt+2;if(it=Cr(this,rt,tt,nt,lt,ct,ht,mt,Tt,Et),it)it.faceIndex=Math.floor(Mt/3),et.push(it)}}}}function Au(tt,et,nt,it,st,rt,at,ot){let lt;if(et.side===1)lt=it.intersectTriangle(at,rt,st,!0,ot);else lt=it.intersectTriangle(st,rt,at,et.side===0,ot);if(lt===null)return null;Rr.copy(ot),Rr.applyMatrix4(tt.matrixWorld);let ct=nt.ray.origin.distanceTo(Rr);if(ct<nt.near||ct>nt.far)return null;return{distance:ct,point:Rr.clone(),object:tt}}function Cr(tt,et,nt,it,st,rt,at,ot,lt,ct){tt.getVertexPosition(ot,Tr),tt.getVertexPosition(lt,Er),tt.getVertexPosition(ct,Ar);let ht=Au(tt,et,nt,it,Tr,Er,Ar,Rl);if(ht){let dt=new e;if(_i.getBarycoord(Rl,Tr,Er,Ar,dt),st)ht.uv=_i.getInterpolatedAttribute(st,ot,lt,ct,dt,new n);if(rt)ht.uv1=_i.getInterpolatedAttribute(rt,ot,lt,ct,dt,new n);if(at){if(ht.normal=_i.getInterpolatedAttribute(at,ot,lt,ct,dt,new e),ht.normal.dot(it.direction)>0)ht.normal.multiplyScalar(-1)}let ut={a:ot,b:lt,c:ct,normal:new e,materialIndex:0};_i.getNormal(Tr,Er,Ar,ut.normal),ht.face=ut,ht.barycoord=dt}return ht}var Vs=new Fn,Cl=new Fn,Il=new Fn,wu=new Fn,Pl=new i,Ir=new e,La=new E,Ll=new i,Na=new Os;class Le extends r{constructor(tt,et){super(tt,et);this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new i,this.bindMatrixInverse=new i,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let tt=this.geometry;if(this.boundingBox===null)this.boundingBox=new I;this.boundingBox.makeEmpty();let et=tt.getAttribute("position");for(let nt=0;nt<et.count;nt++)this.getVertexPosition(nt,Ir),this.boundingBox.expandByPoint(Ir)}computeBoundingSphere(){let tt=this.geometry;if(this.boundingSphere===null)this.boundingSphere=new E;this.boundingSphere.makeEmpty();let et=tt.getAttribute("position");for(let nt=0;nt<et.count;nt++)this.getVertexPosition(nt,Ir),this.boundingSphere.expandByPoint(Ir)}copy(tt,et){return super.copy(tt,et),this.bindMode=tt.bindMode,this.bindMatrix.copy(tt.bindMatrix),this.bindMatrixInverse.copy(tt.bindMatrixInverse),this.skeleton=tt.skeleton,this.boundingBox=tt.boundingBox!==null?tt.boundingBox.clone():null,this.boundingSphere=tt.boundingSphere!==null?tt.boundingSphere.clone():null,this}raycast(tt,et){let nt=this.material,it=this.matrixWorld;if(nt===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(La.copy(this.boundingSphere),La.applyMatrix4(it),tt.ray.intersectsSphere(La)===!1)return;if(Ll.copy(it).invert(),Na.copy(tt.ray).applyMatrix4(Ll),this.boundingBox!==null){if(Na.intersectsBox(this.boundingBox)===!1)return}this._computeIntersections(tt,et,Na)}getVertexPosition(tt,et){return super.getVertexPosition(tt,et),this.applyBoneTransform(tt,et),et}bind(tt,et){if(this.skeleton=tt,et===void 0)this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),et=this.matrixWorld;this.bindMatrix.copy(et),this.bindMatrixInverse.copy(et).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let tt=new Fn,et=this.geometry.attributes.skinWeight;for(let nt=0,it=et.count;nt<it;nt++){tt.fromBufferAttribute(et,nt);let st=1/tt.manhattanLength();if(st!==1/0)tt.multiplyScalar(st);else tt.set(1,0,0,0);et.setXYZW(nt,tt.x,tt.y,tt.z,tt.w)}}updateMatrixWorld(tt){if(super.updateMatrixWorld(tt),this.bindMode==="attached")this.bindMatrixInverse.copy(this.matrixWorld).invert();else if(this.bindMode==="detached")this.bindMatrixInverse.copy(this.bindMatrix).invert();else fn("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(tt,et){let nt=this.skeleton,it=this.geometry;if(Cl.fromBufferAttribute(it.attributes.skinIndex,tt),Il.fromBufferAttribute(it.attributes.skinWeight,tt),et.isVector4)Vs.copy(et),et.set(0,0,0,0);else Vs.set(et.x,et.y,et.z,1),et.set(0,0,0);Vs.applyMatrix4(this.bindMatrix);for(let st=0;st<4;st++){let rt=Il.getComponent(st);if(rt!==0){let at=Cl.getComponent(st);Pl.multiplyMatrices(nt.bones[at].matrixWorld,nt.boneInverses[at]),et.addScaledVector(wu.copy(Vs).applyMatrix4(Pl),rt)}}if(et.isVector4)et.w=Vs.w;return et.applyMatrix4(this.bindMatrixInverse)}}class Se extends l{constructor(){super();this.isBone=!0,this.type="Bone"}}class sr extends c{constructor(tt=null,et=1,nt=1,it,st,rt,at,ot,lt=1003,ct=1003,ht,dt){super(null,rt,at,ot,lt,ct,it,st,ht,dt);this.isDataTexture=!0,this.image={data:tt,width:et,height:nt},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}var Nl=new i,Ru=new i;class Me{constructor(tt=[],et=[]){this.uuid=Ci(),this.bones=tt.slice(0),this.boneInverses=et,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let tt=this.bones,et=this.boneInverses;if(this.boneMatrices=new Float32Array(tt.length*16),et.length===0)this.calculateInverses();else if(tt.length!==et.length){fn("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let nt=0,it=this.bones.length;nt<it;nt++)this.boneInverses.push(new i)}}calculateInverses(){this.boneInverses.length=0;for(let tt=0,et=this.bones.length;tt<et;tt++){let nt=new i;if(this.bones[tt])nt.copy(this.bones[tt].matrixWorld).invert();this.boneInverses.push(nt)}}pose(){for(let tt=0,et=this.bones.length;tt<et;tt++){let nt=this.bones[tt];if(nt)nt.matrixWorld.copy(this.boneInverses[tt]).invert()}for(let tt=0,et=this.bones.length;tt<et;tt++){let nt=this.bones[tt];if(nt){if(nt.parent&&nt.parent.isBone)nt.matrix.copy(nt.parent.matrixWorld).invert(),nt.matrix.multiply(nt.matrixWorld);else nt.matrix.copy(nt.matrixWorld);nt.matrix.decompose(nt.position,nt.quaternion,nt.scale)}}}update(){let tt=this.bones,et=this.boneInverses,nt=this.boneMatrices,it=this.boneTexture;for(let st=0,rt=tt.length;st<rt;st++){let at=tt[st]?tt[st].matrixWorld:Ru;Nl.multiplyMatrices(at,et[st]),Nl.toArray(nt,st*16)}if(it!==null)it.needsUpdate=!0}clone(){return new Me(this.bones,this.boneInverses)}computeBoneTexture(){let tt=Math.sqrt(this.bones.length*4);tt=Math.ceil(tt/4)*4,tt=Math.max(tt,4);let et=new Float32Array(tt*tt*4);et.set(this.boneMatrices);let nt=new sr(et,tt,tt,1023,1015);return nt.needsUpdate=!0,this.boneMatrices=et,this.boneTexture=nt,this}getBoneByName(tt){for(let et=0,nt=this.bones.length;et<nt;et++){let it=this.bones[et];if(it.name===tt)return it}return}dispose(){if(this.boneTexture!==null)this.boneTexture.dispose(),this.boneTexture=null;if(this.previousBoneTexture!==null)this.previousBoneTexture.dispose(),this.previousBoneTexture=null}fromJSON(tt,et){this.uuid=tt.uuid;for(let nt=0,it=tt.bones.length;nt<it;nt++){let st=tt.bones[nt],rt=et[st];if(rt===void 0)fn("Skeleton: No bone found with UUID:",st),rt=new Se;this.bones.push(rt),this.boneInverses.push(new i().fromArray(tt.boneInverses[nt]))}return this.init(),this}toJSON(){let tt={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};tt.uuid=this.uuid;let et=this.bones,nt=this.boneInverses;for(let it=0,st=et.length;it<st;it++){let rt=et[it];tt.bones.push(rt.uuid);let at=nt[it];tt.boneInverses.push(at.toArray())}return tt}}class X extends d{constructor(tt,et,nt,it=1){super(tt,et,nt);this.isInstancedBufferAttribute=!0,this.meshPerAttribute=it}copy(tt){return super.copy(tt),this.meshPerAttribute=tt.meshPerAttribute,this}toJSON(){let tt=super.toJSON();return tt.meshPerAttribute=this.meshPerAttribute,tt.isInstancedBufferAttribute=!0,tt}}var As=new i,Dl=new i,Pr=[],Ul=new I,Cu=new i,Xs=new r,qs=new E;class Q extends r{constructor(tt,et,nt){super(tt,et);this.isInstancedMesh=!0,this.instanceMatrix=new X(new Float32Array(nt*16),16),this.instanceColor=null,this.morphTexture=null,this.count=nt,this.boundingBox=null,this.boundingSphere=null;for(let it=0;it<nt;it++)this.setMatrixAt(it,Cu)}computeBoundingBox(){let tt=this.geometry,et=this.count;if(this.boundingBox===null)this.boundingBox=new I;if(tt.boundingBox===null)tt.computeBoundingBox();this.boundingBox.makeEmpty();for(let nt=0;nt<et;nt++)this.getMatrixAt(nt,As),Ul.copy(tt.boundingBox).applyMatrix4(As),this.boundingBox.union(Ul)}computeBoundingSphere(){let tt=this.geometry,et=this.count;if(this.boundingSphere===null)this.boundingSphere=new E;if(tt.boundingSphere===null)tt.computeBoundingSphere();this.boundingSphere.makeEmpty();for(let nt=0;nt<et;nt++)this.getMatrixAt(nt,As),qs.copy(tt.boundingSphere).applyMatrix4(As),this.boundingSphere.union(qs)}copy(tt,et){return super.copy(tt,et),this.instanceMatrix.copy(tt.instanceMatrix),this.morphTexture=tt.morphTexture!==null?tt.morphTexture.clone():null,this.instanceColor=tt.instanceColor!==null?tt.instanceColor.clone():null,this.count=tt.count,this.boundingBox=tt.boundingBox!==null?tt.boundingBox.clone():null,this.boundingSphere=tt.boundingSphere!==null?tt.boundingSphere.clone():null,this}getColorAt(tt,et){if(this.instanceColor===null)return et.setRGB(1,1,1);else return et.fromArray(this.instanceColor.array,tt*3)}getMatrixAt(tt,et){return et.fromArray(this.instanceMatrix.array,tt*16)}getMorphAt(tt,et){let nt=et.morphTargetInfluences,it=this.morphTexture.source.data.data,st=nt.length+1,rt=tt*st+1;for(let at=0;at<nt.length;at++)nt[at]=it[rt+at]}raycast(tt,et){let nt=this.matrixWorld,it=this.count;if(Xs.geometry=this.geometry,Xs.material=this.material,Xs.material===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(qs.copy(this.boundingSphere),qs.applyMatrix4(nt),tt.ray.intersectsSphere(qs)===!1)return;for(let st=0;st<it;st++){this.getMatrixAt(st,As),Dl.multiplyMatrices(nt,As),Xs.matrixWorld=Dl,Xs.raycast(tt,Pr);for(let rt=0,at=Pr.length;rt<at;rt++){let ot=Pr[rt];ot.instanceId=st,ot.object=this,et.push(ot)}Pr.length=0}}setColorAt(tt,et){if(this.instanceColor===null)this.instanceColor=new X(new Float32Array(this.instanceMatrix.count*3).fill(1),3);return et.toArray(this.instanceColor.array,tt*3),this}setMatrixAt(tt,et){return et.toArray(this.instanceMatrix.array,tt*16),this}setMorphAt(tt,et){let nt=et.morphTargetInfluences,it=nt.length+1;if(this.morphTexture===null)this.morphTexture=new sr(new Float32Array(it*this.count),it,this.count,1028,1015);let st=this.morphTexture.source.data.data,rt=0;for(let lt=0;lt<nt.length;lt++)rt+=nt[lt];let at=this.geometry.morphTargetsRelative?1:1-rt,ot=it*tt;return st[ot]=at,st.set(nt,ot+1),this}updateMorphTargets(){}dispose(){if(super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null)this.instanceColor.dispose();if(this.morphTexture!==null)this.morphTexture.dispose(),this.morphTexture=null}}var ls=new E,Iu=new n(0.5,0.5),Lr=new e;class us{constructor(tt=new Ai,et=new Ai,nt=new Ai,it=new Ai,st=new Ai,rt=new Ai){this.planes=[tt,et,nt,it,st,rt]}set(tt,et,nt,it,st,rt){let at=this.planes;return at[0].copy(tt),at[1].copy(et),at[2].copy(nt),at[3].copy(it),at[4].copy(st),at[5].copy(rt),this}copy(tt){let et=this.planes;for(let nt=0;nt<6;nt++)et[nt].copy(tt.planes[nt]);return this}setFromProjectionMatrix(tt,et=2000,nt=!1){let it=this.planes,st=tt.elements,rt=st[0],at=st[1],ot=st[2],lt=st[3],ct=st[4],ht=st[5],dt=st[6],ut=st[7],pt=st[8],vt=st[9],Mt=st[10],ft=st[11],mt=st[12],Tt=st[13],Et=st[14],bt=st[15];if(it[0].setComponents(lt-rt,ut-ct,ft-pt,bt-mt).normalize(),it[1].setComponents(lt+rt,ut+ct,ft+pt,bt+mt).normalize(),it[2].setComponents(lt+at,ut+ht,ft+vt,bt+Tt).normalize(),it[3].setComponents(lt-at,ut-ht,ft-vt,bt-Tt).normalize(),nt)it[4].setComponents(ot,dt,Mt,Et).normalize(),it[5].setComponents(lt-ot,ut-dt,ft-Mt,bt-Et).normalize();else if(it[4].setComponents(lt-ot,ut-dt,ft-Mt,bt-Et).normalize(),et===2000)it[5].setComponents(lt+ot,ut+dt,ft+Mt,bt+Et).normalize();else if(et===2001)it[5].setComponents(ot,dt,Mt,Et).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+et);return this}intersectsObject(tt){if(tt.boundingSphere!==void 0){if(tt.boundingSphere===null)tt.computeBoundingSphere();ls.copy(tt.boundingSphere).applyMatrix4(tt.matrixWorld)}else{let et=tt.geometry;if(et.boundingSphere===null)et.computeBoundingSphere();ls.copy(et.boundingSphere).applyMatrix4(tt.matrixWorld)}return this.intersectsSphere(ls)}intersectsSprite(tt){ls.center.set(0,0,0);let et=Iu.distanceTo(tt.center);return ls.radius=0.7071067811865476+et,ls.applyMatrix4(tt.matrixWorld),this.intersectsSphere(ls)}intersectsSphere(tt){let et=this.planes,nt=tt.center,it=-tt.radius;for(let st=0;st<6;st++)if(et[st].distanceToPoint(nt)<it)return!1;return!0}intersectsBox(tt){let et=this.planes;for(let nt=0;nt<6;nt++){let it=et[nt];if(Lr.x=it.normal.x>0?tt.max.x:tt.min.x,Lr.y=it.normal.y>0?tt.max.y:tt.min.y,Lr.z=it.normal.z>0?tt.max.z:tt.min.z,it.distanceToPoint(Lr)<0)return!1}return!0}containsPoint(tt){let et=this.planes;for(let nt=0;nt<6;nt++)if(et[nt].distanceToPoint(tt)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}var Fl=new i;class ta{constructor(){this.coordinateSystem=2000,this._frustums=[],this._count=0}setFromArrayCamera(tt){let et=tt.cameras,nt=this._frustums;for(let it=0;it<et.length;it++){let st=et[it];if(Fl.multiplyMatrices(st.projectionMatrix,st.matrixWorldInverse),nt[it]===void 0)nt[it]=new us;nt[it].setFromProjectionMatrix(Fl,st.coordinateSystem,st.reversedDepth)}return this._count=et.length,this}getFrustum(tt){return this._frustums[tt]}intersectsObject(tt){let et=this._frustums;for(let nt=0;nt<this._count;nt++)if(et[nt].intersectsObject(tt))return!0;return!1}intersectsSprite(tt){let et=this._frustums;for(let nt=0;nt<this._count;nt++)if(et[nt].intersectsSprite(tt))return!0;return!1}intersectsSphere(tt){let et=this._frustums;for(let nt=0;nt<this._count;nt++)if(et[nt].intersectsSphere(tt))return!0;return!1}intersectsBox(tt){let et=this._frustums;for(let nt=0;nt<this._count;nt++)if(et[nt].intersectsBox(tt))return!0;return!1}containsPoint(tt){let et=this._frustums;for(let nt=0;nt<this._count;nt++)if(et[nt].containsPoint(tt))return!0;return!1}copy(tt){this.coordinateSystem=tt.coordinateSystem;let et=this._frustums,nt=tt._frustums;for(let it=0;it<tt._count;it++){if(et[it]===void 0)et[it]=new us;et[it].copy(nt[it])}return this._count=tt._count,this}clone(){return new ta().copy(this)}}class be extends b{constructor(tt){super();this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new t(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(tt)}copy(tt){return super.copy(tt),this.color.copy(tt.color),this.map=tt.map,this.linewidth=tt.linewidth,this.linecap=tt.linecap,this.linejoin=tt.linejoin,this.fog=tt.fog,this}}var zr=new e,Gr=new e,Ol=new i,Ys=new Os,Nr=new E,Da=new e,Bl=new e;class ce extends l{constructor(tt=new h,et=new be){super();this.isLine=!0,this.type="Line",this.geometry=tt,this.material=et,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(tt,et){if(super.copy(tt,et),tt.morphTargetInfluences!==void 0)this.morphTargetInfluences=tt.morphTargetInfluences.slice();else this.morphTargetInfluences=void 0;if(tt.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},tt.morphTargetDictionary);else this.morphTargetDictionary=void 0;return this.material=Array.isArray(tt.material)?tt.material.slice():tt.material,this.geometry=tt.geometry,this}computeLineDistances(){let tt=this.geometry;if(tt.index===null){let et=tt.attributes.position,nt=[0];for(let it=1,st=et.count;it<st;it++)zr.fromBufferAttribute(et,it-1),Gr.fromBufferAttribute(et,it),nt[it]=nt[it-1],nt[it]+=zr.distanceTo(Gr);tt.setAttribute("lineDistance",new m(nt,1))}else fn("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(tt){return tt.intersectsObject(this)}raycast(tt,et){let nt=this.geometry,it=this.matrixWorld,st=tt.params.Line.threshold,rt=nt.drawRange;if(nt.boundingSphere===null)nt.computeBoundingSphere();if(Nr.copy(nt.boundingSphere),Nr.applyMatrix4(it),Nr.radius+=st,tt.ray.intersectsSphere(Nr)===!1)return;Ol.copy(it).invert(),Ys.copy(tt.ray).applyMatrix4(Ol);let at=st/((this.scale.x+this.scale.y+this.scale.z)/3),ot=at*at,lt=this.isLineSegments?2:1,ct=nt.index,dt=nt.attributes.position;if(ct!==null){let ut=Math.max(0,rt.start),pt=Math.min(ct.count,rt.start+rt.count);for(let vt=ut,Mt=pt-1;vt<Mt;vt+=lt){let ft=ct.getX(vt),mt=ct.getX(vt+1),Tt=Dr(this,tt,Ys,ot,ft,mt,vt);if(Tt)et.push(Tt)}if(this.isLineLoop){let vt=ct.getX(pt-1),Mt=ct.getX(ut),ft=Dr(this,tt,Ys,ot,vt,Mt,pt-1);if(ft)et.push(ft)}}else{let ut=Math.max(0,rt.start),pt=Math.min(dt.count,rt.start+rt.count);for(let vt=ut,Mt=pt-1;vt<Mt;vt+=lt){let ft=Dr(this,tt,Ys,ot,vt,vt+1,vt);if(ft)et.push(ft)}if(this.isLineLoop){let vt=Dr(this,tt,Ys,ot,pt-1,ut,pt-1);if(vt)et.push(vt)}}}updateMorphTargets(){let et=this.geometry.morphAttributes,nt=Object.keys(et);if(nt.length>0){let it=et[nt[0]];if(it!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let st=0,rt=it.length;st<rt;st++){let at=it[st].name||String(st);this.morphTargetInfluences.push(0),this.morphTargetDictionary[at]=st}}}}}function Dr(tt,et,nt,it,st,rt,at){let ot=tt.geometry.attributes.position;if(zr.fromBufferAttribute(ot,st),Gr.fromBufferAttribute(ot,rt),nt.distanceSqToSegment(zr,Gr,Da,Bl)>it)return;Da.applyMatrix4(tt.matrixWorld);let ct=et.ray.origin.distanceTo(Da);if(ct<et.near||ct>et.far)return;return{distance:ct,point:Bl.clone().applyMatrix4(tt.matrixWorld),index:at,face:null,faceIndex:null,barycoord:null,object:tt}}var zl=new e,Gl=new e;class Ne extends ce{constructor(tt,et){super(tt,et);this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let tt=this.geometry;if(tt.index===null){let et=tt.attributes.position,nt=[];for(let it=0,st=et.count;it<st;it+=2)zl.fromBufferAttribute(et,it),Gl.fromBufferAttribute(et,it+1),nt[it]=it===0?0:nt[it-1],nt[it+1]=nt[it]+zl.distanceTo(Gl);tt.setAttribute("lineDistance",new m(nt,1))}else fn("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class De extends ce{constructor(tt,et){super(tt,et);this.isLineLoop=!0,this.type="LineLoop"}}class Te extends b{constructor(tt){super();this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new t(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(tt)}copy(tt){return super.copy(tt),this.color.copy(tt.color),this.map=tt.map,this.alphaMap=tt.alphaMap,this.size=tt.size,this.sizeAttenuation=tt.sizeAttenuation,this.fog=tt.fog,this}}var kl=new i,Oa=new Os,Ur=new E,Fr=new e;class j extends l{constructor(tt=new h,et=new Te){super();this.isPoints=!0,this.type="Points",this.geometry=tt,this.material=et,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(tt,et){if(super.copy(tt,et),tt.morphTargetInfluences!==void 0)this.morphTargetInfluences=tt.morphTargetInfluences.slice();else this.morphTargetInfluences=void 0;if(tt.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},tt.morphTargetDictionary);else this.morphTargetDictionary=void 0;return this.material=Array.isArray(tt.material)?tt.material.slice():tt.material,this.geometry=tt.geometry,this}intersectsFrustum(tt){return tt.intersectsObject(this)}raycast(tt,et){let nt=this.geometry,it=this.matrixWorld,st=tt.params.Points.threshold,rt=nt.drawRange;if(nt.boundingSphere===null)nt.computeBoundingSphere();if(Ur.copy(nt.boundingSphere),Ur.applyMatrix4(it),Ur.radius+=st,tt.ray.intersectsSphere(Ur)===!1)return;kl.copy(it).invert(),Oa.copy(tt.ray).applyMatrix4(kl);let at=st/((this.scale.x+this.scale.y+this.scale.z)/3),ot=at*at,lt=nt.index,ht=nt.attributes.position;if(lt!==null){let dt=Math.max(0,rt.start),ut=Math.min(lt.count,rt.start+rt.count);for(let pt=dt,vt=ut;pt<vt;pt++){let Mt=lt.getX(pt);Fr.fromBufferAttribute(ht,Mt),Hl(Fr,Mt,ot,it,tt,et,this)}}else{let dt=Math.max(0,rt.start),ut=Math.min(ht.count,rt.start+rt.count);for(let pt=dt,vt=ut;pt<vt;pt++)Fr.fromBufferAttribute(ht,pt),Hl(Fr,pt,ot,it,tt,et,this)}}updateMorphTargets(){let et=this.geometry.morphAttributes,nt=Object.keys(et);if(nt.length>0){let it=et[nt[0]];if(it!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let st=0,rt=it.length;st<rt;st++){let at=it[st].name||String(st);this.morphTargetInfluences.push(0),this.morphTargetDictionary[at]=st}}}}}function Hl(tt,et,nt,it,st,rt,at){let ot=Oa.distanceSqToPoint(tt);if(ot<nt){let lt=new e;Oa.closestPointToPoint(tt,lt),lt.applyMatrix4(it);let ct=st.ray.origin.distanceTo(lt);if(ct<st.near||ct>st.far)return;rt.push({distance:ct,distanceToRay:Math.sqrt(ot),point:lt,index:et,face:null,faceIndex:null,barycoord:null,object:at})}}class ea extends c{constructor(tt=[],et=301,nt,it,st,rt,at,ot,lt,ct){super(tt,et,nt,it,st,rt,at,ot,lt,ct);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(tt){this.image=tt}}class ee extends c{constructor(tt,et,nt,it,st,rt,at,ot,lt){super(tt,et,nt,it,st,rt,at,ot,lt);this.isCanvasTexture=!0,this.needsUpdate=!0}}class ji extends c{constructor(tt,et,nt=1014,it,st,rt,at=1003,ot=1003,lt,ct=1026,ht=1){if(ct!==1026&&ct!==1027)throw Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let dt={width:tt,height:et,depth:ht};super(dt,it,st,rt,at,ot,ct,nt,lt);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(tt){return super.copy(tt),this.source=new nr(Object.assign({},tt.image)),this.compareFunction=tt.compareFunction,this}toJSON(tt){let et=super.toJSON(tt);return et.compareFunction=this.compareFunction,et}}class na extends ji{constructor(tt,et=1014,nt=301,it,st,rt=1003,at=1003,ot,lt=1026){let ct={width:tt,height:tt,depth:1},ht=[ct,ct,ct,ct,ct,ct];super(tt,tt,et,nt,it,st,rt,at,ot,lt);this.image=ht,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(tt){this.image=tt}}class ia extends c{constructor(tt=null){super();this.sourceTexture=tt,this.isExternalTexture=!0}copy(tt){return super.copy(tt),this.sourceTexture=tt.sourceTexture,this}}class q extends h{constructor(tt=1,et=1,nt=1,it=1,st=1,rt=1){super();this.type="BoxGeometry",this.parameters={width:tt,height:et,depth:nt,widthSegments:it,heightSegments:st,depthSegments:rt};let at=this;it=Math.floor(it),st=Math.floor(st),rt=Math.floor(rt);let ot=[],lt=[],ct=[],ht=[],dt=0,ut=0;pt("z","y","x",-1,-1,nt,et,tt,rt,st,0),pt("z","y","x",1,-1,nt,et,-tt,rt,st,1),pt("x","z","y",1,1,tt,nt,et,it,rt,2),pt("x","z","y",1,-1,tt,nt,-et,it,rt,3),pt("x","y","z",1,-1,tt,et,nt,it,st,4),pt("x","y","z",-1,-1,tt,et,-nt,it,st,5),this.setIndex(ot),this.setAttribute("position",new m(lt,3)),this.setAttribute("normal",new m(ct,3)),this.setAttribute("uv",new m(ht,2));function pt(vt,Mt,ft,mt,Tt,Et,bt,At,It,gt,yt){let Nt=Et/It,kt=bt/gt,Lt=Et/2,zt=bt/2,Kt=At/2,Rt=It+1,qt=gt+1,Zt=0,Ot=0,Ye=new e;for(let Wt=0;Wt<qt;Wt++){let $t=Wt*kt-zt;for(let Ve=0;Ve<Rt;Ve++){let hn=Ve*Nt-Lt;Ye[vt]=hn*mt,Ye[Mt]=$t*Tt,Ye[ft]=Kt,lt.push(Ye.x,Ye.y,Ye.z),Ye[vt]=0,Ye[Mt]=0,Ye[ft]=At>0?1:-1,ct.push(Ye.x,Ye.y,Ye.z),ht.push(Ve/It),ht.push(1-Wt/gt),Zt+=1}}for(let Wt=0;Wt<gt;Wt++)for(let $t=0;$t<It;$t++){let Ve=dt+$t+Rt*Wt,hn=dt+$t+Rt*(Wt+1),Yt=dt+($t+1)+Rt*(Wt+1),We=dt+($t+1)+Rt*Wt;ot.push(Ve,hn,We),ot.push(hn,Yt,We),Ot+=6}at.addGroup(ut,Ot,yt),ut+=Ot,dt+=Zt}}copy(tt){return super.copy(tt),this.parameters=Object.assign({},tt.parameters),this}static fromJSON(tt){return new q(tt.width,tt.height,tt.depth,tt.widthSegments,tt.heightSegments,tt.depthSegments)}}class we extends h{constructor(tt=1,et=32,nt=0,it=Math.PI*2){super();this.type="CircleGeometry",this.parameters={radius:tt,segments:et,thetaStart:nt,thetaLength:it},et=Math.max(3,et);let st=[],rt=[],at=[],ot=[],lt=new e,ct=new n;rt.push(0,0,0),at.push(0,0,1),ot.push(0.5,0.5);for(let ht=0,dt=3;ht<=et;ht++,dt+=3){let ut=nt+ht/et*it;lt.x=tt*Math.cos(ut),lt.y=tt*Math.sin(ut),rt.push(lt.x,lt.y,lt.z),at.push(0,0,1),ct.x=(rt[dt]/tt+1)/2,ct.y=(rt[dt+1]/tt+1)/2,ot.push(ct.x,ct.y)}for(let ht=1;ht<=et;ht++)st.push(ht,ht+1,0);this.setIndex(st),this.setAttribute("position",new m(rt,3)),this.setAttribute("normal",new m(at,3)),this.setAttribute("uv",new m(ot,2))}copy(tt){return super.copy(tt),this.parameters=Object.assign({},tt.parameters),this}static fromJSON(tt){return new we(tt.radius,tt.segments,tt.thetaStart,tt.thetaLength)}}class O extends h{constructor(tt=1,et=1,nt=1,it=1){super();this.type="PlaneGeometry",this.parameters={width:tt,height:et,widthSegments:nt,heightSegments:it};let st=tt/2,rt=et/2,at=Math.floor(nt),ot=Math.floor(it),lt=at+1,ct=ot+1,ht=tt/at,dt=et/ot,ut=[],pt=[],vt=[],Mt=[];for(let ft=0;ft<ct;ft++){let mt=ft*dt-rt;for(let Tt=0;Tt<lt;Tt++){let Et=Tt*ht-st;pt.push(Et,-mt,0),vt.push(0,0,1),Mt.push(Tt/at),Mt.push(1-ft/ot)}}for(let ft=0;ft<ot;ft++)for(let mt=0;mt<at;mt++){let Tt=mt+lt*ft,Et=mt+lt*(ft+1),bt=mt+1+lt*(ft+1),At=mt+1+lt*ft;ut.push(Tt,Et,At),ut.push(Et,bt,At)}this.setIndex(ut),this.setAttribute("position",new m(pt,3)),this.setAttribute("normal",new m(vt,3)),this.setAttribute("uv",new m(Mt,2))}copy(tt){return super.copy(tt),this.parameters=Object.assign({},tt.parameters),this}static fromJSON(tt){return new O(tt.width,tt.height,tt.widthSegments,tt.heightSegments)}}function ms(tt){let et={};for(let nt in tt){et[nt]={};for(let it in tt[nt]){let st=tt[nt][it];if(Wl(st))if(st.isRenderTargetTexture)fn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),et[nt][it]=null;else et[nt][it]=st.clone();else if(Array.isArray(st))if(Wl(st[0])){let rt=[];for(let at=0,ot=st.length;at<ot;at++)rt[at]=st[at].clone();et[nt][it]=rt}else et[nt][it]=st.slice();else et[nt][it]=st}}return et}function ai(tt){let et={};for(let nt=0;nt<tt.length;nt++){let it=ms(tt[nt]);for(let st in it)et[st]=it[st]}return et}function Wl(tt){return tt&&(tt.isColor||tt.isMatrix3||tt.isMatrix4||tt.isVector2||tt.isVector3||tt.isVector4||tt.isTexture||tt.isQuaternion)}function Pu(tt){let et=[];for(let nt=0;nt<tt.length;nt++)et.push(tt[nt].clone());return et}function zo(tt){let et=tt.getRenderTarget();if(et===null)return tt.outputColorSpace;if(et.isXRRenderTarget===!0)return et.texture.colorSpace;return s.workingColorSpace}var z={clone:ms,merge:ai},Lu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class u extends b{constructor(tt){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Lu,this.fragmentShader=Nu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,tt!==void 0)this.setValues(tt)}copy(tt){return super.copy(tt),this.fragmentShader=tt.fragmentShader,this.vertexShader=tt.vertexShader,this.uniforms=ms(tt.uniforms),this.uniformsGroups=Pu(tt.uniformsGroups),this.defines=Object.assign({},tt.defines),this.wireframe=tt.wireframe,this.wireframeLinewidth=tt.wireframeLinewidth,this.fog=tt.fog,this.lights=tt.lights,this.clipping=tt.clipping,this.extensions=Object.assign({},tt.extensions),this.glslVersion=tt.glslVersion,this.defaultAttributeValues=Object.assign({},tt.defaultAttributeValues),this.index0AttributeName=tt.index0AttributeName,this.uniformsNeedUpdate=tt.uniformsNeedUpdate,this}toJSON(tt){let et=super.toJSON(tt);et.glslVersion=this.glslVersion,et.uniforms={};for(let it in this.uniforms){let rt=this.uniforms[it].value;if(rt&&rt.isTexture)et.uniforms[it]={type:"t",value:rt.toJSON(tt).uuid};else if(rt&&rt.isColor)et.uniforms[it]={type:"c",value:rt.getHex()};else if(rt&&rt.isVector2)et.uniforms[it]={type:"v2",value:rt.toArray()};else if(rt&&rt.isVector3)et.uniforms[it]={type:"v3",value:rt.toArray()};else if(rt&&rt.isVector4)et.uniforms[it]={type:"v4",value:rt.toArray()};else if(rt&&rt.isMatrix3)et.uniforms[it]={type:"m3",value:rt.toArray()};else if(rt&&rt.isMatrix4)et.uniforms[it]={type:"m4",value:rt.toArray()};else et.uniforms[it]={value:rt}}if(Object.keys(this.defines).length>0)et.defines=this.defines;et.vertexShader=this.vertexShader,et.fragmentShader=this.fragmentShader,et.lights=this.lights,et.clipping=this.clipping;let nt={};for(let it in this.extensions)if(this.extensions[it]===!0)nt[it]=!0;if(Object.keys(nt).length>0)et.extensions=nt;return et}fromJSON(tt,et){if(super.fromJSON(tt,et),tt.uniforms!==void 0)for(let nt in tt.uniforms){let it=tt.uniforms[nt];switch(this.uniforms[nt]={},it.type){case"t":this.uniforms[nt].value=et[it.value]||null;break;case"c":this.uniforms[nt].value=new t().setHex(it.value);break;case"v2":this.uniforms[nt].value=new n().fromArray(it.value);break;case"v3":this.uniforms[nt].value=new e().fromArray(it.value);break;case"v4":this.uniforms[nt].value=new Fn().fromArray(it.value);break;case"m3":this.uniforms[nt].value=new yn().fromArray(it.value);break;case"m4":this.uniforms[nt].value=new i().fromArray(it.value);break;default:this.uniforms[nt].value=it.value}}if(tt.defines!==void 0)this.defines=tt.defines;if(tt.vertexShader!==void 0)this.vertexShader=tt.vertexShader;if(tt.fragmentShader!==void 0)this.fragmentShader=tt.fragmentShader;if(tt.glslVersion!==void 0)this.glslVersion=tt.glslVersion;if(tt.extensions!==void 0)for(let nt in tt.extensions)this.extensions[nt]=tt.extensions[nt];if(tt.lights!==void 0)this.lights=tt.lights;if(tt.clipping!==void 0)this.clipping=tt.clipping;return this}}class Ae extends u{constructor(tt){super(tt);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class f extends b{constructor(tt){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new t(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new n(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(tt)}copy(tt){return super.copy(tt),this.defines={STANDARD:""},this.color.copy(tt.color),this.roughness=tt.roughness,this.metalness=tt.metalness,this.map=tt.map,this.lightMap=tt.lightMap,this.lightMapIntensity=tt.lightMapIntensity,this.aoMap=tt.aoMap,this.aoMapIntensity=tt.aoMapIntensity,this.emissive.copy(tt.emissive),this.emissiveMap=tt.emissiveMap,this.emissiveIntensity=tt.emissiveIntensity,this.bumpMap=tt.bumpMap,this.bumpScale=tt.bumpScale,this.normalMap=tt.normalMap,this.normalMapType=tt.normalMapType,this.normalScale.copy(tt.normalScale),this.displacementMap=tt.displacementMap,this.displacementScale=tt.displacementScale,this.displacementBias=tt.displacementBias,this.roughnessMap=tt.roughnessMap,this.metalnessMap=tt.metalnessMap,this.alphaMap=tt.alphaMap,this.envMap=tt.envMap,this.envMapRotation.copy(tt.envMapRotation),this.envMapIntensity=tt.envMapIntensity,this.wireframe=tt.wireframe,this.wireframeLinewidth=tt.wireframeLinewidth,this.wireframeLinecap=tt.wireframeLinecap,this.wireframeLinejoin=tt.wireframeLinejoin,this.flatShading=tt.flatShading,this.fog=tt.fog,this}}class M extends f{constructor(tt){super();this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new n(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return wn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(et){this.ior=(1+0.4*et)/(1-0.4*et)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new t(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new t(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new t(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(tt)}get anisotropy(){return this._anisotropy}set anisotropy(tt){if(this._anisotropy>0!==tt>0)this.version++;this._anisotropy=tt}get clearcoat(){return this._clearcoat}set clearcoat(tt){if(this._clearcoat>0!==tt>0)this.version++;this._clearcoat=tt}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(tt){if(this._diffuseRoughness>0!==tt>0)this.version++;this._diffuseRoughness=tt}get iridescence(){return this._iridescence}set iridescence(tt){if(this._iridescence>0!==tt>0)this.version++;this._iridescence=tt}get dispersion(){return this._dispersion}set dispersion(tt){if(this._dispersion>0!==tt>0)this.version++;this._dispersion=tt}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(tt){if(this._retroreflectivity>0!==tt>0)this.version++;this._retroreflectivity=tt}get sheen(){return this._sheen}set sheen(tt){if(this._sheen>0!==tt>0)this.version++;this._sheen=tt}get transmission(){return this._transmission}set transmission(tt){if(this._transmission>0!==tt>0)this.version++;this._transmission=tt}get iridescenceThicknessRange(){return cs('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(tt){cs('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=tt[0],this.iridescenceThicknessMaximum=tt[1]}copy(tt){return super.copy(tt),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=tt.anisotropy,this.anisotropyRotation=tt.anisotropyRotation,this.anisotropyMap=tt.anisotropyMap,this.clearcoat=tt.clearcoat,this.clearcoatMap=tt.clearcoatMap,this.clearcoatRoughness=tt.clearcoatRoughness,this.clearcoatRoughnessMap=tt.clearcoatRoughnessMap,this.clearcoatNormalMap=tt.clearcoatNormalMap,this.clearcoatNormalScale.copy(tt.clearcoatNormalScale),this.diffuseRoughness=tt.diffuseRoughness,this.diffuseRoughnessMap=tt.diffuseRoughnessMap,this.dispersion=tt.dispersion,this.ior=tt.ior,this.iridescence=tt.iridescence,this.iridescenceMap=tt.iridescenceMap,this.iridescenceIOR=tt.iridescenceIOR,this.iridescenceThicknessMinimum=tt.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=tt.iridescenceThicknessMaximum,this.iridescenceThicknessMap=tt.iridescenceThicknessMap,this.retroreflectivity=tt.retroreflectivity,this.sheen=tt.sheen,this.sheenColor.copy(tt.sheenColor),this.sheenColorMap=tt.sheenColorMap,this.sheenRoughness=tt.sheenRoughness,this.sheenRoughnessMap=tt.sheenRoughnessMap,this.transmission=tt.transmission,this.transmissionMap=tt.transmissionMap,this.thickness=tt.thickness,this.thicknessMap=tt.thicknessMap,this.attenuationDistance=tt.attenuationDistance,this.attenuationColor.copy(tt.attenuationColor),this.specularIntensity=tt.specularIntensity,this.specularIntensityMap=tt.specularIntensityMap,this.specularColor.copy(tt.specularColor),this.specularColorMap=tt.specularColorMap,this}}class Ue extends b{constructor(tt){super();this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new n(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(tt)}copy(tt){return super.copy(tt),this.color.copy(tt.color),this.map=tt.map,this.lightMap=tt.lightMap,this.lightMapIntensity=tt.lightMapIntensity,this.aoMap=tt.aoMap,this.aoMapIntensity=tt.aoMapIntensity,this.emissive.copy(tt.emissive),this.emissiveMap=tt.emissiveMap,this.emissiveIntensity=tt.emissiveIntensity,this.bumpMap=tt.bumpMap,this.bumpScale=tt.bumpScale,this.normalMap=tt.normalMap,this.normalMapType=tt.normalMapType,this.normalScale.copy(tt.normalScale),this.displacementMap=tt.displacementMap,this.displacementScale=tt.displacementScale,this.displacementBias=tt.displacementBias,this.specularMap=tt.specularMap,this.alphaMap=tt.alphaMap,this.envMap=tt.envMap,this.envMapRotation.copy(tt.envMapRotation),this.combine=tt.combine,this.reflectivity=tt.reflectivity,this.envMapIntensity=tt.envMapIntensity,this.refractionRatio=tt.refractionRatio,this.wireframe=tt.wireframe,this.wireframeLinewidth=tt.wireframeLinewidth,this.wireframeLinecap=tt.wireframeLinecap,this.wireframeLinejoin=tt.wireframeLinejoin,this.flatShading=tt.flatShading,this.fog=tt.fog,this}}class Go extends b{constructor(tt){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(tt)}copy(tt){return super.copy(tt),this.depthPacking=tt.depthPacking,this.map=tt.map,this.alphaMap=tt.alphaMap,this.displacementMap=tt.displacementMap,this.displacementScale=tt.displacementScale,this.displacementBias=tt.displacementBias,this.wireframe=tt.wireframe,this.wireframeLinewidth=tt.wireframeLinewidth,this}}class ko extends b{constructor(tt){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(tt)}copy(tt){return super.copy(tt),this.map=tt.map,this.alphaMap=tt.alphaMap,this.displacementMap=tt.displacementMap,this.displacementScale=tt.displacementScale,this.displacementBias=tt.displacementBias,this}}class P extends b{constructor(tt){super();this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new t(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new n(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.fog=!0,this.setValues(tt)}copy(tt){return super.copy(tt),this.defines={MATCAP:""},this.color.copy(tt.color),this.matcap=tt.matcap,this.map=tt.map,this.bumpMap=tt.bumpMap,this.bumpScale=tt.bumpScale,this.normalMap=tt.normalMap,this.normalMapType=tt.normalMapType,this.normalScale.copy(tt.normalScale),this.displacementMap=tt.displacementMap,this.displacementScale=tt.displacementScale,this.displacementBias=tt.displacementBias,this.alphaMap=tt.alphaMap,this.wireframe=tt.wireframe,this.wireframeLinewidth=tt.wireframeLinewidth,this.flatShading=tt.flatShading,this.fog=tt.fog,this}}function $i(tt,et){if(!tt||tt.constructor===et)return tt;if(typeof et.BYTES_PER_ELEMENT==="number")return new et(tt);return Array.prototype.slice.call(tt)}function Zs(tt){return tt!==void 0&&tt.inTangents!==void 0&&tt.outTangents!==void 0}function Du(tt){function et(st,rt){return tt[st]-tt[rt]}let nt=tt.length,it=Array(nt);for(let st=0;st!==nt;++st)it[st]=st;return it.sort(et),it}function Vl(tt,et,nt){let it=tt.length,st=new tt.constructor(it);for(let rt=0,at=0;at!==it;++rt){let ot=nt[rt]*et;for(let lt=0;lt!==et;++lt)st[at++]=tt[ot+lt]}return st}function Uu(tt,et,nt,it){let st=1,rt=tt[0];while(rt!==void 0&&rt[it]===void 0)rt=tt[st++];if(rt===void 0)return;let at=rt[it];if(at===void 0)return;if(Array.isArray(at))do{if(at=rt[it],at!==void 0)et.push(rt.time),nt.push(...at);rt=tt[st++]}while(rt!==void 0);else if(at.toArray!==void 0)do{if(at=rt[it],at!==void 0)et.push(rt.time),at.toArray(nt,nt.length);rt=tt[st++]}while(rt!==void 0);else do{if(at=rt[it],at!==void 0)et.push(rt.time),nt.push(at);rt=tt[st++]}while(rt!==void 0)}class k{constructor(tt,et,nt,it){this.parameterPositions=tt,this._cachedIndex=0,this.resultBuffer=it!==void 0?it:new et.constructor(nt),this.sampleValues=et,this.valueSize=nt,this.settings=null,this.DefaultSettings_={}}evaluate(tt){let et=this.parameterPositions,nt=this._cachedIndex,it=et[nt],st=et[nt-1];n:{t:{let rt;e:{i:if(!(tt<it)){for(let at=nt+2;;){if(it===void 0){if(tt<st)break i;return nt=et.length,this._cachedIndex=nt,this.copySampleValue_(nt-1)}if(nt===at)break;if(st=it,it=et[++nt],tt<it)break t}rt=et.length;break e}if(!(tt>=st)){let at=et[1];if(tt<at)nt=2,st=at;for(let ot=nt-2;;){if(st===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(nt===ot)break;if(it=st,st=et[--nt-1],tt>=st)break t}rt=nt,nt=0;break e}break n}while(nt<rt){let at=nt+rt>>>1;if(tt<et[at])rt=at;else nt=at+1}if(it=et[nt],st=et[nt-1],st===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(it===void 0)return nt=et.length,this._cachedIndex=nt,this.copySampleValue_(nt-1)}this._cachedIndex=nt,this.intervalChanged_(nt,st,it)}return this.interpolate_(nt,st,tt,it)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(tt){let et=this.resultBuffer,nt=this.sampleValues,it=this.valueSize,st=tt*it;for(let rt=0;rt!==it;++rt)et[rt]=nt[st+rt];return et}interpolate_(){throw Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class Ho extends k{constructor(tt,et,nt,it){super(tt,et,nt,it);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(tt,et,nt){let it=this.parameterPositions,st=tt-2,rt=tt+1,at=it[st],ot=it[rt];if(at===void 0)switch(this.getSettings_().endingStart){case 2401:st=tt,at=2*et-nt;break;case 2402:st=it.length-2,at=et+it[st]-it[st+1];break;default:st=tt,at=nt}if(ot===void 0)switch(this.getSettings_().endingEnd){case 2401:rt=tt,ot=2*nt-et;break;case 2402:rt=1,ot=nt+it[1]-it[0];break;default:rt=tt-1,ot=et}let lt=(nt-et)*0.5,ct=this.valueSize;this._weightPrev=lt/(et-at),this._weightNext=lt/(ot-nt),this._offsetPrev=st*ct,this._offsetNext=rt*ct}interpolate_(tt,et,nt,it){let st=this.resultBuffer,rt=this.sampleValues,at=this.valueSize,ot=tt*at,lt=ot-at,ct=this._offsetPrev,ht=this._offsetNext,dt=this._weightPrev,ut=this._weightNext,pt=(nt-et)/(it-et),vt=pt*pt,Mt=vt*pt,ft=-dt*Mt+2*dt*vt-dt*pt,mt=(1+dt)*Mt+(-1.5-2*dt)*vt+(-0.5+dt)*pt+1,Tt=(-1-ut)*Mt+(1.5+ut)*vt+0.5*pt,Et=ut*Mt-ut*vt;for(let bt=0;bt!==at;++bt)st[bt]=ft*rt[ct+bt]+mt*rt[lt+bt]+Tt*rt[ot+bt]+Et*rt[ht+bt];return st}}class Wo extends k{constructor(tt,et,nt,it){super(tt,et,nt,it)}interpolate_(tt,et,nt,it){let st=this.resultBuffer,rt=this.sampleValues,at=this.valueSize,ot=tt*at,lt=ot-at,ct=(nt-et)/(it-et),ht=1-ct;for(let dt=0;dt!==at;++dt)st[dt]=rt[lt+dt]*ht+rt[ot+dt]*ct;return st}}class Vo extends k{constructor(tt,et,nt,it){super(tt,et,nt,it)}interpolate_(tt){return this.copySampleValue_(tt-1)}}class Xo extends k{interpolate_(tt,et,nt,it){let st=this.resultBuffer,rt=this.sampleValues,at=this.valueSize,ot=tt*at,lt=ot-at,ct=this.inTangents,ht=this.outTangents;if(!ct||!ht){let pt=(nt-et)/(it-et),vt=1-pt;for(let Mt=0;Mt!==at;++Mt)st[Mt]=rt[lt+Mt]*vt+rt[ot+Mt]*pt;return st}let dt=at*2,ut=tt-1;for(let pt=0;pt!==at;++pt){let vt=rt[lt+pt],Mt=rt[ot+pt],ft=ut*dt+pt*2,mt=ht[ft],Tt=ht[ft+1],Et=tt*dt+pt*2,bt=ct[Et],At=ct[Et+1],It=Ou(nt,et,mt,bt,it);st[pt]=Jc(It,vt,Tt,At,Mt)}return st}}function Jc(tt,et,nt,it,st){let rt=1-tt;return rt*rt*rt*et+3*rt*rt*tt*nt+3*rt*tt*tt*it+tt*tt*tt*st}function Fu(tt,et,nt,it,st){let rt=1-tt;return 3*rt*rt*(nt-et)+6*rt*tt*(it-nt)+3*tt*tt*(st-it)}function Ou(tt,et,nt,it,st){let rt=(tt-et)/(st-et);for(let at=0;at<8;at++){let ot=Jc(rt,et,nt,it,st)-tt;if(Math.abs(ot)<0.0000000001)break;let lt=Fu(rt,et,nt,it,st);if(Math.abs(lt)<0.0000000001)break;rt=Math.max(0,Math.min(1,rt-ot/lt))}return rt}class mi{constructor(tt,et,nt,it){if(tt===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(et===void 0||et.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+tt);this.name=tt,this.times=$i(et,this.TimeBufferType),this.values=$i(nt,this.ValueBufferType),this.setInterpolation(it||this.DefaultInterpolation)}static toJSON(tt){let et=tt.constructor,nt;if(et.toJSON!==this.toJSON)nt=et.toJSON(tt);else{nt={name:tt.name,times:$i(tt.times,Array),values:$i(tt.values,Array)};let it=tt.getInterpolation();if(it!==tt.DefaultInterpolation)nt.interpolation=it;if(Zs(tt.settings))nt.settings={inTangents:$i(tt.settings.inTangents,Array),outTangents:$i(tt.settings.outTangents,Array)}}return nt.type=tt.ValueTypeName,nt}InterpolantFactoryMethodDiscrete(tt){return new Vo(this.times,this.values,this.getValueSize(),tt)}InterpolantFactoryMethodLinear(tt){return new Wo(this.times,this.values,this.getValueSize(),tt)}InterpolantFactoryMethodSmooth(tt){return new Ho(this.times,this.values,this.getValueSize(),tt)}InterpolantFactoryMethodBezier(tt){let et=new Xo(this.times,this.values,this.getValueSize(),tt);if(this.settings)et.inTangents=this.settings.inTangents,et.outTangents=this.settings.outTangents;return et}setInterpolation(tt){let et;switch(tt){case 2300:et=this.InterpolantFactoryMethodDiscrete;break;case 2301:et=this.InterpolantFactoryMethodLinear;break;case 2302:et=this.InterpolantFactoryMethodSmooth;break;case 2303:et=this.InterpolantFactoryMethodBezier;break}if(et===void 0){let nt="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(tt!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(nt);return fn("KeyframeTrack:",nt),this}return this.createInterpolant=et,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;case this.InterpolantFactoryMethodBezier:return 2303}}getValueSize(){return this.values.length/this.times.length}shift(tt){if(tt!==0){let et=this.times;for(let nt=0,it=et.length;nt!==it;++nt)et[nt]+=tt;if(Zs(this.settings))Xl(this.settings.inTangents,tt),Xl(this.settings.outTangents,tt)}return this}scale(tt){if(tt!==1){let et=this.times;for(let nt=0,it=et.length;nt!==it;++nt)et[nt]*=tt;if(Zs(this.settings))ql(this.settings.inTangents,tt),ql(this.settings.outTangents,tt)}return this}trim(tt,et){let nt=this.times,it=nt.length,st=0,rt=it-1;while(st!==it&&nt[st]<tt)++st;while(rt!==-1&&nt[rt]>et)--rt;if(++rt,st!==0||rt!==it){if(st>=rt)rt=Math.max(rt,1),st=rt-1;let at=this.getValueSize();this.times=nt.slice(st,rt),this.values=this.values.slice(st*at,rt*at)}return this}validate(){let tt=!0,et=this.getValueSize();if(et-Math.floor(et)!==0)vn("KeyframeTrack: Invalid value size in track.",this),tt=!1;let nt=this.times,it=this.values,st=nt.length;if(st===0)vn("KeyframeTrack: Track is empty.",this),tt=!1;let rt=null;for(let at=0;at!==st;at++){let ot=nt[at];if(typeof ot==="number"&&isNaN(ot)){vn("KeyframeTrack: Time is not a valid number.",this,at,ot),tt=!1;break}if(rt!==null&&rt>ot){vn("KeyframeTrack: Out of order keys.",this,at,ot,rt),tt=!1;break}rt=ot}if(it!==void 0){if(Zh(it))for(let at=0,ot=it.length;at!==ot;++at){let lt=it[at];if(isNaN(lt)){vn("KeyframeTrack: Value is not a valid number.",this,at,lt),tt=!1;break}}}return tt}optimize(){let tt=this.times.slice(),et=this.values.slice(),nt=this.getValueSize(),it=this.getInterpolation()===2302,st=tt.length-1,rt=1;for(let at=1;at<st;++at){let ot=!1,lt=tt[at],ct=tt[at+1];if(lt!==ct&&(at!==1||lt!==tt[0]))if(!it){let ht=at*nt,dt=ht-nt,ut=ht+nt;for(let pt=0;pt!==nt;++pt){let vt=et[ht+pt];if(vt!==et[dt+pt]||vt!==et[ut+pt]){ot=!0;break}}}else ot=!0;if(ot){if(at!==rt){tt[rt]=tt[at];let ht=at*nt,dt=rt*nt;for(let ut=0;ut!==nt;++ut)et[dt+ut]=et[ht+ut]}++rt}}if(st>0){tt[rt]=tt[st];for(let at=st*nt,ot=rt*nt,lt=0;lt!==nt;++lt)et[ot+lt]=et[at+lt];++rt}if(rt!==tt.length)this.times=tt.slice(0,rt),this.values=et.slice(0,rt*nt);else this.times=tt,this.values=et;return this}clone(){let tt=this.times.slice(),et=this.values.slice(),it=new this.constructor(this.name,tt,et);if(it.createInterpolant=this.createInterpolant,Zs(this.settings))it.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()};return it}}function Xl(tt,et){for(let nt=0,it=tt.length;nt!==it;nt+=2)tt[nt]+=et}function ql(tt,et){for(let nt=0,it=tt.length;nt!==it;nt+=2)tt[nt]*=et}mi.prototype.ValueTypeName="";mi.prototype.TimeBufferType=Float32Array;mi.prototype.ValueBufferType=Float32Array;mi.prototype.DefaultInterpolation=2301;class ts extends mi{constructor(tt,et,nt){super(tt,et,nt)}}ts.prototype.ValueTypeName="bool";ts.prototype.ValueBufferType=Array;ts.prototype.DefaultInterpolation=2300;ts.prototype.InterpolantFactoryMethodLinear=void 0;ts.prototype.InterpolantFactoryMethodSmooth=void 0;class sa extends mi{constructor(tt,et,nt,it){super(tt,et,nt,it)}}sa.prototype.ValueTypeName="color";class Y extends mi{constructor(tt,et,nt,it){super(tt,et,nt,it)}}Y.prototype.ValueTypeName="number";class qo extends k{constructor(tt,et,nt,it){super(tt,et,nt,it)}interpolate_(tt,et,nt,it){let st=this.resultBuffer,rt=this.sampleValues,at=this.valueSize,ot=(nt-et)/(it-et),lt=tt*at;for(let ct=lt+at;lt!==ct;lt+=4)C.slerpFlat(st,0,rt,lt-at,rt,lt,ot);return st}}class Z extends mi{constructor(tt,et,nt,it){super(tt,et,nt,it)}InterpolantFactoryMethodLinear(tt){return new qo(this.times,this.values,this.getValueSize(),tt)}}Z.prototype.ValueTypeName="quaternion";Z.prototype.InterpolantFactoryMethodSmooth=void 0;class es extends mi{constructor(tt,et,nt){super(tt,et,nt)}}es.prototype.ValueTypeName="string";es.prototype.ValueBufferType=Array;es.prototype.DefaultInterpolation=2300;es.prototype.InterpolantFactoryMethodLinear=void 0;es.prototype.InterpolantFactoryMethodSmooth=void 0;class te extends mi{constructor(tt,et,nt,it){super(tt,et,nt,it)}}te.prototype.ValueTypeName="vector";class Fe{constructor(tt="",et=-1,nt=[],it=2500){if(this.name=tt,this.tracks=nt,this.duration=et,this.blendMode=it,this.uuid=Ci(),this.userData={},this.duration<0)this.resetDuration()}static parse(tt){let et=[],nt=tt.tracks,it=1/(tt.fps||1);for(let rt=0,at=nt.length;rt!==at;++rt)et.push(zu(nt[rt]).scale(it));let st=new this(tt.name,tt.duration,et,tt.blendMode);return st.uuid=tt.uuid,st.userData=JSON.parse(tt.userData||"{}"),st}static toJSON(tt){let et=[],nt=tt.tracks,it={name:tt.name,duration:tt.duration,tracks:et,uuid:tt.uuid,blendMode:tt.blendMode,userData:JSON.stringify(tt.userData)};for(let st=0,rt=nt.length;st!==rt;++st)et.push(mi.toJSON(nt[st]));return it}static CreateFromMorphTargetSequence(tt,et,nt,it){let st=et.length,rt=[];for(let at=0;at<st;at++){let ot=[],lt=[];ot.push((at+st-1)%st,at,(at+1)%st),lt.push(0,1,0);let ct=Du(ot);if(ot=Vl(ot,1,ct),lt=Vl(lt,1,ct),!it&&ot[0]===0)ot.push(st),lt.push(lt[0]);rt.push(new Y(".morphTargetInfluences["+et[at].name+"]",ot,lt).scale(1/nt))}return new this(tt,-1,rt)}static findByName(tt,et){let nt=tt;if(!Array.isArray(tt)){let it=tt;nt=it.geometry&&it.geometry.animations||it.animations}for(let it=0;it<nt.length;it++)if(nt[it].name===et)return nt[it];return null}static CreateClipsFromMorphTargetSequences(tt,et,nt){let it={},st=/^([\w-]*?)([\d]+)$/;for(let at=0,ot=tt.length;at<ot;at++){let lt=tt[at],ct=lt.name.match(st);if(ct&&ct.length>1){let ht=ct[1],dt=it[ht];if(!dt)it[ht]=dt=[];dt.push(lt)}}let rt=[];for(let at in it)rt.push(this.CreateFromMorphTargetSequence(at,it[at],et,nt));return rt}resetDuration(){let tt=this.tracks,et=0;for(let nt=0,it=tt.length;nt!==it;++nt){let st=this.tracks[nt];et=Math.max(et,st.times[st.times.length-1])}return this.duration=et,this}trim(){for(let tt=0;tt<this.tracks.length;tt++)this.tracks[tt].trim(0,this.duration);return this}validate(){let tt=!0;for(let et=0;et<this.tracks.length;et++)tt=tt&&this.tracks[et].validate();return tt}optimize(){for(let tt=0;tt<this.tracks.length;tt++)this.tracks[tt].optimize();return this}clone(){let tt=[];for(let nt=0;nt<this.tracks.length;nt++)tt.push(this.tracks[nt].clone());let et=new this.constructor(this.name,this.duration,tt,this.blendMode);return et.userData=JSON.parse(JSON.stringify(this.userData)),et}toJSON(){return this.constructor.toJSON(this)}}function Bu(tt){switch(tt.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Y;case"vector":case"vector2":case"vector3":case"vector4":return te;case"color":return sa;case"quaternion":return Z;case"bool":case"boolean":return ts;case"string":return es}throw Error("THREE.KeyframeTrack: Unsupported typeName: "+tt)}function zu(tt){if(tt.type===void 0)throw Error("THREE.KeyframeTrack: track type undefined, can not parse");let et=Bu(tt.type);if(tt.times===void 0){let it=[],st=[];Uu(tt.keys,it,st,"value"),tt.times=it,tt.values=st}let nt;if(et.parse!==void 0)nt=et.parse(tt);else nt=new et(tt.name,tt.times,tt.values,tt.interpolation);if(Zs(tt.settings))nt.settings={inTangents:$i(tt.settings.inTangents,Float32Array),outTangents:$i(tt.settings.outTangents,Float32Array)};return nt}var wi={enabled:!1,files:{},add:function(tt,et){if(this.enabled===!1)return;if(Yl(tt))return;this.files[tt]=et},get:function(tt){if(this.enabled===!1)return;if(Yl(tt))return;return this.files[tt]},remove:function(tt){delete this.files[tt]},clear:function(){this.files={}}};function Yl(tt){try{let et=tt.slice(tt.indexOf(":")+1);return new URL(et).protocol==="blob:"}catch(et){return!1}}class Yo{constructor(tt,et,nt){let it=this,st=!1,rt=0,at=0,ot=void 0,lt=[];this.onStart=void 0,this.onLoad=tt,this.onProgress=et,this.onError=nt,this._abortController=null,this.itemStart=function(ct){if(at++,st===!1){if(it.onStart!==void 0)it.onStart(ct,rt,at)}st=!0},this.itemEnd=function(ct){if(rt++,it.onProgress!==void 0)it.onProgress(ct,rt,at);if(rt===at){if(st=!1,it.onLoad!==void 0)it.onLoad()}},this.itemError=function(ct){if(it.onError!==void 0)it.onError(ct)},this.resolveURL=function(ct){if(ct=ct.normalize("NFC"),ot)return ot(ct);return ct},this.setURLModifier=function(ct){return ot=ct,this},this.addHandler=function(ct,ht){return lt.push(ct,ht),this},this.removeHandler=function(ct){let ht=lt.indexOf(ct);if(ht!==-1)lt.splice(ht,2);return this},this.getHandler=function(ct){for(let ht=0,dt=lt.length;ht<dt;ht+=2){let ut=lt[ht],pt=lt[ht+1];if(ut.global)ut.lastIndex=0;if(ut.test(ct))return pt}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var $c=new Yo;class G{constructor(tt){if(this.manager=tt!==void 0?tt:$c,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(tt,et){let nt=this;return new Promise(function(it,st){nt.load(tt,it,et,st)})}parse(){}setCrossOrigin(tt){return this.crossOrigin=tt,this}setWithCredentials(tt){return this.withCredentials=tt,this}setPath(tt){return this.path=tt,this}setResourcePath(tt){return this.resourcePath=tt,this}setRequestHeader(tt){return this.requestHeader=tt,this}setPriority(tt){return this.priority=tt,this}setCache(tt){return this.cache=tt,this}abort(){return this}}G.DEFAULT_MATERIAL_NAME="__DEFAULT";var zi={};class Kc extends Error{constructor(tt,et){super(tt);this.response=et}}class Ee extends G{constructor(tt){super(tt);this.mimeType="",this.responseType="",this._abortController=new AbortController}load(tt,et,nt,it){if(tt===void 0)tt="";if(this.path!==void 0)tt=this.path+tt;tt=this.manager.resolveURL(tt);let st=wi.get(`file:${tt}`);if(st!==void 0){this.manager.itemStart(tt),setTimeout(()=>{if(et)et(st);this.manager.itemEnd(tt)},0);return}if(zi[tt]!==void 0){zi[tt].push({onLoad:et,onProgress:nt,onError:it});return}zi[tt]=[],zi[tt].push({onLoad:et,onProgress:nt,onError:it});let rt=new Request(tt,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any==="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),at=this.mimeType,ot=this.responseType;fetch(rt).then((lt)=>{if(lt.status===200||lt.status===0){if(lt.status===0)fn("FileLoader: HTTP Status 0 received.");if(typeof ReadableStream>"u"||lt.body===void 0||lt.body.getReader===void 0)return lt;let ct=zi[tt],ht=lt.body.getReader(),dt=lt.headers.get("X-File-Size")||lt.headers.get("Content-Length"),ut=dt?parseInt(dt):0,pt=ut!==0,vt=0,Mt=new ReadableStream({start(ft){mt();function mt(){ht.read().then(({done:Tt,value:Et})=>{if(Tt)ft.close();else{vt+=Et.byteLength;let bt=new ProgressEvent("progress",{lengthComputable:pt,loaded:vt,total:ut});for(let At=0,It=ct.length;At<It;At++){let gt=ct[At];if(gt.onProgress)gt.onProgress(bt)}ft.enqueue(Et),mt()}},(Tt)=>{ft.error(Tt)})}}});return new Response(Mt)}else throw new Kc(`fetch for "${lt.url}" responded with ${lt.status}: ${lt.statusText}`,lt)}).then((lt)=>{switch(ot){case"arraybuffer":return lt.arrayBuffer();case"blob":return lt.blob();case"document":return lt.text().then((ct)=>new DOMParser().parseFromString(ct,at));case"json":return lt.json();default:if(at==="")return lt.text();else{let ht=/charset="?([^;"\s]*)"?/i.exec(at),dt=ht&&ht[1]?ht[1].toLowerCase():void 0,ut=new TextDecoder(dt);return lt.arrayBuffer().then((pt)=>ut.decode(pt))}}}).then((lt)=>{wi.add(`file:${tt}`,lt);let ct=zi[tt];delete zi[tt];for(let ht=0,dt=ct.length;ht<dt;ht++){let ut=ct[ht];if(ut.onLoad)ut.onLoad(lt)}}).catch((lt)=>{let ct=zi[tt];if(ct===void 0)throw this.manager.itemError(tt),lt;delete zi[tt];for(let ht=0,dt=ct.length;ht<dt;ht++){let ut=ct[ht];if(ut.onError)ut.onError(lt)}this.manager.itemError(tt)}).finally(()=>{this.manager.itemEnd(tt)}),this.manager.itemStart(tt)}setResponseType(tt){return this.responseType=tt,this}setMimeType(tt){return this.mimeType=tt,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}var ws=new WeakMap;class Zo extends G{constructor(tt){super(tt)}load(tt,et,nt,it){if(this.path!==void 0)tt=this.path+tt;tt=this.manager.resolveURL(tt);let st=this,rt=wi.get(`image:${tt}`);if(rt!==void 0){if(rt.complete===!0)st.manager.itemStart(tt),setTimeout(function(){if(et)et(rt);st.manager.itemEnd(tt)},0);else{let ht=ws.get(rt);if(ht===void 0)ht=[],ws.set(rt,ht);ht.push({onLoad:et,onError:it})}return rt}let at=Ps("img");function ot(){if(ct(),et)et(this);let ht=ws.get(this)||[];for(let dt=0;dt<ht.length;dt++){let ut=ht[dt];if(ut.onLoad)ut.onLoad(this)}ws.delete(this),st.manager.itemEnd(tt)}function lt(ht){if(ct(),it)it(ht);wi.remove(`image:${tt}`);let dt=ws.get(this)||[];for(let ut=0;ut<dt.length;ut++){let pt=dt[ut];if(pt.onError)pt.onError(ht)}ws.delete(this),st.manager.itemError(tt),st.manager.itemEnd(tt)}function ct(){at.removeEventListener("load",ot,!1),at.removeEventListener("error",lt,!1)}if(at.addEventListener("load",ot,!1),at.addEventListener("error",lt,!1),tt.slice(0,5)!=="data:"){if(this.crossOrigin!==void 0)at.crossOrigin=this.crossOrigin}return wi.add(`image:${tt}`,at),st.manager.itemStart(tt),at.fetchPriority=this.priority,at.src=tt,at}}class he extends G{constructor(tt){super(tt)}load(tt,et,nt,it){let st=new c,rt=new Zo(this.manager);return rt.setPriority(this.priority),rt.setCache(this.cache),rt.setCrossOrigin(this.crossOrigin),rt.setPath(this.path),rt.load(tt,function(at){if(st.image=at,st.needsUpdate=!0,et!==void 0)et(st)},nt,it),st}}class rr extends l{static registerNode(tt){this.prototype._lightNode=tt}constructor(tt,et=1){super();this.isLight=!0,this.type="Light",this.color=new t(tt),this.intensity=et}copy(tt,et){return super.copy(tt,et),this.color.copy(tt.color),this.intensity=tt.intensity,this}toJSON(tt){let et=super.toJSON(tt);return et.object.color=this.color.getHex(),et.object.intensity=this.intensity,et}}var Ua=new i,Zl=new e,Jl=new e;class ar{constructor(tt){this.camera=tt,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new n(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new i,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new us,this._frameExtents=new n(1,1),this._viewportCount=1,this._viewports=[new Fn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(tt){let et=this.camera;Zl.setFromMatrixPosition(tt.matrixWorld),et.position.copy(Zl),Jl.setFromMatrixPosition(tt.target.matrixWorld),et.lookAt(Jl),et.updateMatrixWorld(),this._updateMatrix(et,this.matrix,this._frustum)}_updateMatrix(tt,et,nt,it){Ua.multiplyMatrices(tt.projectionMatrix,tt.matrixWorldInverse),nt.setFromProjectionMatrix(Ua,tt.coordinateSystem,tt.reversedDepth);let st=this._frameExtents,rt=it?it.z/st.x:1,at=it?it.w/st.y:1,ot=it?it.x/st.x:0,lt=it?it.y/st.y:0;if(tt.coordinateSystem===2001||tt.reversedDepth)et.set(0.5*rt,0,0,0.5*rt+ot,0,0.5*at,0,0.5*at+lt,0,0,1,0,0,0,0,1);else et.set(0.5*rt,0,0,0.5*rt+ot,0,0.5*at,0,0.5*at+lt,0,0,0.5,0.5,0,0,0,1);et.multiply(Ua)}getViewport(tt){return this._viewports[tt]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(tt){return this.camera=tt.camera.clone(),this.intensity=tt.intensity,this.bias=tt.bias,this.radius=tt.radius,this.autoUpdate=tt.autoUpdate,this.needsUpdate=tt.needsUpdate,this.normalBias=tt.normalBias,this.blurSamples=tt.blurSamples,this.mapSize.copy(tt.mapSize),this.mapType=tt.mapType,this.biasNode=tt.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let tt={};return tt.intensity=this.intensity,tt.bias=this.bias,tt.normalBias=this.normalBias,tt.radius=this.radius,tt.blurSamples=this.blurSamples,tt.mapSize=this.mapSize.toArray(),tt.mapType=this.mapType,tt.camera=this.camera.toJSON(!1).object,delete tt.camera.matrix,tt}}var Or=new e,Br=new C,Ei=new e;class ra extends l{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new i,this.projectionMatrix=new i,this.projectionMatrixInverse=new i,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(tt,et){return super.copy(tt,et),this.matrixWorldInverse.copy(tt.matrixWorldInverse),this.projectionMatrix.copy(tt.projectionMatrix),this.projectionMatrixInverse.copy(tt.projectionMatrixInverse),this.coordinateSystem=tt.coordinateSystem,this}getWorldDirection(tt){return super.getWorldDirection(tt).negate()}updateMatrixWorld(tt){if(super.updateMatrixWorld(tt),this.matrixWorld.decompose(Or,Br,Ei),Ei.x===1&&Ei.y===1&&Ei.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(Or,Br,Ei.set(1,1,1)).invert()}updateWorldMatrix(tt,et,nt=!1){if(super.updateWorldMatrix(tt,et,nt),this.matrixWorld.decompose(Or,Br,Ei),Ei.x===1&&Ei.y===1&&Ei.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(Or,Br,Ei.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var Ji=new e,$l=new n,Kl=new n;class x extends ra{constructor(tt=50,et=1,nt=0.1,it=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=tt,this.zoom=1,this.near=nt,this.far=it,this.focus=10,this.aspect=et,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(tt,et){return super.copy(tt,et),this.fov=tt.fov,this.zoom=tt.zoom,this.near=tt.near,this.far=tt.far,this.focus=tt.focus,this.aspect=tt.aspect,this.view=tt.view===null?null:Object.assign({},tt.view),this.filmGauge=tt.filmGauge,this.filmOffset=tt.filmOffset,this}setFocalLength(tt){let et=0.5*this.getFilmHeight()/tt;this.fov=hs*2*Math.atan(et),this.updateProjectionMatrix()}getFocalLength(){let tt=Math.tan(Js*0.5*this.fov);return 0.5*this.getFilmHeight()/tt}getEffectiveFOV(){return hs*2*Math.atan(Math.tan(Js*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(tt,et,nt){Ji.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),et.set(Ji.x,Ji.y).multiplyScalar(-tt/Ji.z),Ji.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),nt.set(Ji.x,Ji.y).multiplyScalar(-tt/Ji.z)}getViewSize(tt,et){return this.getViewBounds(tt,$l,Kl),et.subVectors(Kl,$l)}setViewOffset(tt,et,nt,it,st,rt){if(this.aspect=tt/et,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=tt,this.view.fullHeight=et,this.view.offsetX=nt,this.view.offsetY=it,this.view.width=st,this.view.height=rt,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let tt=this.near,et=tt*Math.tan(Js*0.5*this.fov)/this.zoom,nt=2*et,it=this.aspect*nt,st=-0.5*it,rt=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:ot,fullHeight:lt}=rt;st+=rt.offsetX*it/ot,et-=rt.offsetY*nt/lt,it*=rt.width/ot,nt*=rt.height/lt}let at=this.filmOffset;if(at!==0)st+=tt*at/this.getFilmWidth();this.projectionMatrix.makePerspective(st,st+it,et,et-nt,tt,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(tt){let et=super.toJSON(tt);if(et.object.fov=this.fov,et.object.zoom=this.zoom,et.object.near=this.near,et.object.far=this.far,et.object.focus=this.focus,et.object.aspect=this.aspect,this.view!==null)et.object.view=Object.assign({},this.view);return et.object.filmGauge=this.filmGauge,et.object.filmOffset=this.filmOffset,et}}class Qc extends ar{constructor(){super(new x(50,1,0.5,500));this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(tt){let et=this.camera,nt=hs*2*tt.angle*this.focus,it=this.mapSize.width/this.mapSize.height*this.aspect,st=tt.distance||et.far;if(nt!==et.fov||it!==et.aspect||st!==et.far)et.fov=nt,et.aspect=it,et.far=st,et.updateProjectionMatrix();super.updateMatrices(tt)}copy(tt){return super.copy(tt),this.focus=tt.focus,this.aspect=tt.aspect,this}toJSON(){let tt=super.toJSON();return tt.focus=this.focus,tt.aspect=this.aspect,tt}}class Oe extends rr{constructor(tt,et,nt=0,it=Math.PI/3,st=0,rt=2){super(tt,et);this.isSpotLight=!0,this.type="SpotLight",this.position.copy(l.DEFAULT_UP),this.updateMatrix(),this.target=new l,this.distance=nt,this.angle=it,this.penumbra=st,this.decay=rt,this.map=null,this.shadow=new Qc}get power(){return this.intensity*Math.PI}set power(tt){this.intensity=tt/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(tt,et){return super.copy(tt,et),this.distance=tt.distance,this.angle=tt.angle,this.penumbra=tt.penumbra,this.decay=tt.decay,this.target=tt.target.clone(),this.map=tt.map,this.shadow=tt.shadow.clone(),this}toJSON(tt){let et=super.toJSON(tt);if(et.object.distance=this.distance,et.object.angle=this.angle,et.object.decay=this.decay,et.object.penumbra=this.penumbra,et.object.target=this.target.uuid,this.map&&this.map.isTexture)et.object.map=this.map.toJSON(tt).uuid;return et.object.shadow=this.shadow.toJSON(),et}}class jc extends ar{constructor(){super(new x(90,1,0.5,500));this.isPointLightShadow=!0}}class ne extends rr{constructor(tt,et,nt=0,it=2){super(tt,et);this.isPointLight=!0,this.type="PointLight",this.distance=nt,this.decay=it,this.shadow=new jc}get power(){return this.intensity*4*Math.PI}set power(tt){this.intensity=tt/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(tt,et){return super.copy(tt,et),this.distance=tt.distance,this.decay=tt.decay,this.shadow=tt.shadow.clone(),this}toJSON(tt){let et=super.toJSON(tt);return et.object.distance=this.distance,et.object.decay=this.decay,et.object.shadow=this.shadow.toJSON(),et}}class L extends ra{constructor(tt=-1,et=1,nt=1,it=-1,st=0.1,rt=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=tt,this.right=et,this.top=nt,this.bottom=it,this.near=st,this.far=rt,this.updateProjectionMatrix()}copy(tt,et){return super.copy(tt,et),this.left=tt.left,this.right=tt.right,this.top=tt.top,this.bottom=tt.bottom,this.near=tt.near,this.far=tt.far,this.zoom=tt.zoom,this.view=tt.view===null?null:Object.assign({},tt.view),this}setViewOffset(tt,et,nt,it,st,rt){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=tt,this.view.fullHeight=et,this.view.offsetX=nt,this.view.offsetY=it,this.view.width=st,this.view.height=rt,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let tt=(this.right-this.left)/(2*this.zoom),et=(this.top-this.bottom)/(2*this.zoom),nt=(this.right+this.left)/2,it=(this.top+this.bottom)/2,st=nt-tt,rt=nt+tt,at=it+et,ot=it-et;if(this.view!==null&&this.view.enabled){let lt=(this.right-this.left)/this.view.fullWidth/this.zoom,ct=(this.top-this.bottom)/this.view.fullHeight/this.zoom;st+=lt*this.view.offsetX,rt=st+lt*this.view.width,at-=ct*this.view.offsetY,ot=at-ct*this.view.height}this.projectionMatrix.makeOrthographic(st,rt,at,ot,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(tt){let et=super.toJSON(tt);if(et.object.zoom=this.zoom,et.object.left=this.left,et.object.right=this.right,et.object.top=this.top,et.object.bottom=this.bottom,et.object.near=this.near,et.object.far=this.far,this.view!==null)et.object.view=Object.assign({},this.view);return et}}class th extends ar{constructor(){super(new L(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class ie extends rr{constructor(tt,et){super(tt,et);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(l.DEFAULT_UP),this.updateMatrix(),this.target=new l,this.shadow=new th}dispose(){super.dispose(),this.shadow.dispose()}copy(tt){return super.copy(tt),this.target=tt.target.clone(),this.shadow=tt.shadow.clone(),this}toJSON(tt){let et=super.toJSON(tt);return et.object.shadow=this.shadow.toJSON(),et.object.target=this.target.uuid,et}}class K{static extractUrlBase(tt){let et=tt.lastIndexOf("/");if(et===-1)return"./";return tt.slice(0,et+1)}static resolveURL(tt,et){if(typeof tt!=="string"||tt==="")return"";if(/^https?:\/\//i.test(et)&&/^\//.test(tt))et=et.replace(/(^https?:\/\/[^\/]+).*/i,"$1");if(/^(https?:)?\/\//i.test(tt))return tt;if(/^data:.*,.*$/i.test(tt))return tt;if(/^blob:.*$/i.test(tt))return tt;return et+tt}}var Fa=new WeakMap;class Be extends G{constructor(tt){super(tt);if(this.isImageBitmapLoader=!0,typeof createImageBitmap>"u")fn("ImageBitmapLoader: createImageBitmap() not supported.");if(typeof fetch>"u")fn("ImageBitmapLoader: fetch() not supported.");this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(tt){return this.options=tt,this}load(tt,et,nt,it){if(tt===void 0)tt="";if(this.path!==void 0)tt=this.path+tt;tt=this.manager.resolveURL(tt);let st=this,rt=wi.get(`image-bitmap:${tt}`);if(rt!==void 0){if(st.manager.itemStart(tt),rt.then){rt.then((lt)=>{if(Fa.has(rt)===!0){if(it)it(Fa.get(rt));st.manager.itemError(tt),st.manager.itemEnd(tt)}else{if(et)et(lt);st.manager.itemEnd(tt)}});return}setTimeout(function(){if(et)et(rt);st.manager.itemEnd(tt)},0);return}let at={};at.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",at.headers=this.requestHeader,at.priority=this.priority,at.cache=this.cache,at.signal=typeof AbortSignal.any==="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let ot=fetch(tt,at).then(function(lt){return lt.blob()}).then(function(lt){return createImageBitmap(lt,Object.assign({},st.options,{colorSpaceConversion:"none"}))}).then(function(lt){if(wi.add(`image-bitmap:${tt}`,lt),et)et(lt);return st.manager.itemEnd(tt),lt}).catch(function(lt){if(it)it(lt);Fa.set(ot,lt),wi.remove(`image-bitmap:${tt}`),st.manager.itemError(tt),st.manager.itemEnd(tt)});wi.add(`image-bitmap:${tt}`,ot),st.manager.itemStart(tt)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}var Rs=-90,Cs=1;class or extends l{constructor(tt,et,nt){super();this.type="CubeCamera",this.renderTarget=nt,this.coordinateSystem=null,this.activeMipmapLevel=0;let it=new x(Rs,Cs,tt,et);it.layers=this.layers,this.add(it);let st=new x(Rs,Cs,tt,et);st.layers=this.layers,this.add(st);let rt=new x(Rs,Cs,tt,et);rt.layers=this.layers,this.add(rt);let at=new x(Rs,Cs,tt,et);at.layers=this.layers,this.add(at);let ot=new x(Rs,Cs,tt,et);ot.layers=this.layers,this.add(ot);let lt=new x(Rs,Cs,tt,et);lt.layers=this.layers,this.add(lt)}updateCoordinateSystem(){let tt=this.coordinateSystem,et=this.children.concat(),[nt,it,st,rt,at,ot]=et;for(let lt of et)this.remove(lt);if(tt===2000)nt.up.set(0,1,0),nt.lookAt(1,0,0),it.up.set(0,1,0),it.lookAt(-1,0,0),st.up.set(0,0,-1),st.lookAt(0,1,0),rt.up.set(0,0,1),rt.lookAt(0,-1,0),at.up.set(0,1,0),at.lookAt(0,0,1),ot.up.set(0,1,0),ot.lookAt(0,0,-1);else if(tt===2001)nt.up.set(0,-1,0),nt.lookAt(-1,0,0),it.up.set(0,-1,0),it.lookAt(1,0,0),st.up.set(0,0,1),st.lookAt(0,1,0),rt.up.set(0,0,-1),rt.lookAt(0,-1,0),at.up.set(0,-1,0),at.lookAt(0,0,1),ot.up.set(0,-1,0),ot.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+tt);for(let lt of et)this.add(lt),lt.updateMatrixWorld()}update(tt,et){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:nt,activeMipmapLevel:it}=this;if(this.coordinateSystem!==tt.coordinateSystem)this.coordinateSystem=tt.coordinateSystem,this.updateCoordinateSystem();let[st,rt,at,ot,lt,ct]=this.children,ht=tt.getRenderTarget(),dt=tt.getActiveCubeFace(),ut=tt.getActiveMipmapLevel(),pt=tt.xr.enabled;tt.xr.enabled=!1;let vt=nt.texture.mipmapsAutoUpdate;nt.texture.mipmapsAutoUpdate=!1;let Mt=!1;if(tt.isWebGLRenderer===!0)Mt=tt.state.buffers.depth.getReversed();else Mt=tt.reversedDepthBuffer;if(tt.setRenderTarget(nt,0,it),Mt&&tt.autoClear===!1)tt.clearDepth();if(tt.render(et,st),tt.setRenderTarget(nt,1,it),Mt&&tt.autoClear===!1)tt.clearDepth();if(tt.render(et,rt),tt.setRenderTarget(nt,2,it),Mt&&tt.autoClear===!1)tt.clearDepth();if(tt.render(et,at),tt.setRenderTarget(nt,3,it),Mt&&tt.autoClear===!1)tt.clearDepth();if(tt.render(et,ot),tt.setRenderTarget(nt,4,it),Mt&&tt.autoClear===!1)tt.clearDepth();if(tt.render(et,lt),nt.texture.mipmapsAutoUpdate=vt,tt.setRenderTarget(nt,5,it),Mt&&tt.autoClear===!1)tt.clearDepth();tt.render(et,ct),tt.setRenderTarget(ht,dt,ut),tt.xr.enabled=pt,nt.texture.needsPMREMUpdate=!0}}class Jo extends x{constructor(tt=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=tt,this.perCameraFrustumCulled=!1}}class ze{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(tt){if(this._document=tt,tt.hidden!==void 0)this._pageVisibilityHandler=Gu.bind(this),tt.addEventListener("visibilitychange",this._pageVisibilityHandler,!1)}disconnect(){if(this._pageVisibilityHandler!==null)this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null;this._document=null}getDelta(){return this._delta/1000}getElapsed(){return this._elapsed/1000}getTimescale(){return this._timescale}setTimescale(tt){return this._timescale=tt,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(tt){if(this._pageVisibilityHandler!==null&&this._document.hidden===!0)this._delta=0;else this._previousTime=this._currentTime,this._currentTime=(tt!==void 0?tt:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta;return this}}function Gu(){if(this._document.hidden===!1)this.reset()}var $o="\\[\\]\\.:\\/",ku=new RegExp("["+$o+"]","g"),Ko="[^"+$o+"]",Hu="[^"+$o.replace("\\.","")+"]",Wu=/((?:WC+[\/:])*)/.source.replace("WC",Ko),Vu=/(WCOD+)?/.source.replace("WCOD",Hu),Xu=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ko),qu=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ko),Yu=new RegExp("^"+Wu+Vu+Xu+qu+"$"),Zu=["material","materials","bones","map"];class eh{constructor(tt,et,nt){let it=nt||a.parseTrackName(et);this._targetGroup=tt,this._bindings=tt.subscribe_(et,it)}getValue(tt,et){this.bind();let nt=this._targetGroup.nCachedObjects_,it=this._bindings[nt];if(it!==void 0)it.getValue(tt,et)}setValue(tt,et){let nt=this._bindings;for(let it=this._targetGroup.nCachedObjects_,st=nt.length;it!==st;++it)nt[it].setValue(tt,et)}bind(){let tt=this._bindings;for(let et=this._targetGroup.nCachedObjects_,nt=tt.length;et!==nt;++et)tt[et].bind()}unbind(){let tt=this._bindings;for(let et=this._targetGroup.nCachedObjects_,nt=tt.length;et!==nt;++et)tt[et].unbind()}}class a{constructor(tt,et,nt){this.path=et,this.parsedPath=nt||a.parseTrackName(et),this.node=a.findNode(tt,this.parsedPath.nodeName),this.rootNode=tt,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(tt,et,nt){if(!(tt&&tt.isAnimationObjectGroup))return new a(tt,et,nt);else return new a.Composite(tt,et,nt)}static sanitizeNodeName(tt){return tt.replace(/\s/g,"_").replace(ku,"")}static parseTrackName(tt){let et=Yu.exec(tt);if(et===null)throw Error("THREE.PropertyBinding: Cannot parse trackName: "+tt);let nt={nodeName:et[2],objectName:et[3],objectIndex:et[4],propertyName:et[5],propertyIndex:et[6]},it=nt.nodeName&&nt.nodeName.lastIndexOf(".");if(it!==void 0&&it!==-1){let st=nt.nodeName.substring(it+1);if(Zu.indexOf(st)!==-1)nt.nodeName=nt.nodeName.substring(0,it),nt.objectName=st}if(nt.propertyName===null||nt.propertyName.length===0)throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+tt);return nt}static findNode(tt,et){if(et===void 0||et===""||et==="."||et===-1||et===tt.name||et===tt.uuid)return tt;if(tt.skeleton){let nt=tt.skeleton.getBoneByName(et);if(nt!==void 0)return nt}if(tt.children){let nt=function(st){for(let rt=0;rt<st.length;rt++){let at=st[rt];if(at.name===et||at.uuid===et)return at;let ot=nt(at.children);if(ot)return ot}return null},it=nt(tt.children);if(it)return it}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(tt,et){tt[et]=this.targetObject[this.propertyName]}_getValue_array(tt,et){let nt=this.resolvedProperty;for(let it=0,st=nt.length;it!==st;++it)tt[et++]=nt[it]}_getValue_arrayElement(tt,et){tt[et]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(tt,et){this.resolvedProperty.toArray(tt,et)}_setValue_direct(tt,et){this.targetObject[this.propertyName]=tt[et]}_setValue_direct_setNeedsUpdate(tt,et){this.targetObject[this.propertyName]=tt[et],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(tt,et){this.targetObject[this.propertyName]=tt[et],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(tt,et){let nt=this.resolvedProperty;for(let it=0,st=nt.length;it!==st;++it)nt[it]=tt[et++]}_setValue_array_setNeedsUpdate(tt,et){let nt=this.resolvedProperty;for(let it=0,st=nt.length;it!==st;++it)nt[it]=tt[et++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(tt,et){let nt=this.resolvedProperty;for(let it=0,st=nt.length;it!==st;++it)nt[it]=tt[et++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(tt,et){this.resolvedProperty[this.propertyIndex]=tt[et]}_setValue_arrayElement_setNeedsUpdate(tt,et){this.resolvedProperty[this.propertyIndex]=tt[et],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(tt,et){this.resolvedProperty[this.propertyIndex]=tt[et],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(tt,et){this.resolvedProperty.fromArray(tt,et)}_setValue_fromArray_setNeedsUpdate(tt,et){this.resolvedProperty.fromArray(tt,et),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(tt,et){this.resolvedProperty.fromArray(tt,et),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(tt,et){this.bind(),this.getValue(tt,et)}_setValue_unbound(tt,et){this.bind(),this.setValue(tt,et)}bind(){let tt=this.node,et=this.parsedPath,{objectName:nt,propertyName:it,propertyIndex:st}=et;if(!tt)tt=a.findNode(this.rootNode,et.nodeName),this.node=tt;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!tt){fn("PropertyBinding: No target node found for track: "+this.path+".");return}if(nt){let lt=et.objectIndex;switch(nt){case"materials":if(!tt.material){vn("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!tt.material.materials){vn("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}tt=tt.material.materials;break;case"bones":if(!tt.skeleton){vn("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}tt=tt.skeleton.bones;for(let ct=0;ct<tt.length;ct++)if(tt[ct].name===lt){lt=ct;break}break;case"map":if("map"in tt){tt=tt.map;break}if(!tt.material){vn("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!tt.material.map){vn("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}tt=tt.material.map;break;default:if(tt[nt]===void 0){vn("PropertyBinding: Can not bind to objectName of node undefined.",this);return}tt=tt[nt]}if(lt!==void 0){if(tt[lt]===void 0){vn("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,tt);return}tt=tt[lt]}}let rt=tt[it];if(rt===void 0){let lt=et.nodeName;vn("PropertyBinding: Trying to update property for track: "+lt+"."+it+" but it wasn't found.",tt);return}let at=this.Versioning.None;if(this.targetObject=tt,tt.isMaterial===!0)at=this.Versioning.NeedsUpdate;else if(tt.isObject3D===!0)at=this.Versioning.MatrixWorldNeedsUpdate;let ot=this.BindingType.Direct;if(st!==void 0){if(it==="morphTargetInfluences"){if(!tt.geometry){vn("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!tt.geometry.morphAttributes){vn("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(tt.morphTargetDictionary[st]!==void 0)st=tt.morphTargetDictionary[st]}ot=this.BindingType.ArrayElement,this.resolvedProperty=rt,this.propertyIndex=st}else if(rt.fromArray!==void 0&&rt.toArray!==void 0)ot=this.BindingType.HasFromToArray,this.resolvedProperty=rt;else if(Array.isArray(rt))ot=this.BindingType.EntireArray,this.resolvedProperty=rt;else this.propertyName=it;this.getValue=this.GetterByBindingType[ot],this.setValue=this.SetterByBindingTypeAndVersioning[ot][at]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}a.Composite=eh;a.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};a.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};a.prototype.GetterByBindingType=[a.prototype._getValue_direct,a.prototype._getValue_array,a.prototype._getValue_arrayElement,a.prototype._getValue_toArray];a.prototype.SetterByBindingTypeAndVersioning=[[a.prototype._setValue_direct,a.prototype._setValue_direct_setNeedsUpdate,a.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[a.prototype._setValue_array,a.prototype._setValue_array_setNeedsUpdate,a.prototype._setValue_array_setMatrixWorldNeedsUpdate],[a.prototype._setValue_arrayElement,a.prototype._setValue_arrayElement_setNeedsUpdate,a.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[a.prototype._setValue_fromArray,a.prototype._setValue_fromArray_setNeedsUpdate,a.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Fg=new Float32Array(1);class nh{static{this.prototype.isMatrix2=!0}constructor(tt,et,nt,it){if(this.elements=[1,0,0,1],tt!==void 0)this.set(tt,et,nt,it)}identity(){return this.set(1,0,0,1),this}fromArray(tt,et=0){for(let nt=0;nt<4;nt++)this.elements[nt]=tt[nt+et];return this}set(tt,et,nt,it){let st=this.elements;return st[0]=tt,st[2]=et,st[1]=nt,st[3]=it,this}}function Qo(tt,et,nt,it){let st=Ju(it);switch(nt){case 1021:return tt*et;case 1028:return tt*et/st.components*st.byteLength;case 1029:return tt*et/st.components*st.byteLength;case 1030:return tt*et*2/st.components*st.byteLength;case 1031:return tt*et*2/st.components*st.byteLength;case 1022:return tt*et*3/st.components*st.byteLength;case 1023:return tt*et*4/st.components*st.byteLength;case 1033:return tt*et*4/st.components*st.byteLength;case 33776:case 33777:return Math.floor((tt+3)/4)*Math.floor((et+3)/4)*8;case 33778:case 33779:return Math.floor((tt+3)/4)*Math.floor((et+3)/4)*16;case 35841:case 35843:return Math.max(tt,16)*Math.max(et,8)/4;case 35840:case 35842:return Math.max(tt,8)*Math.max(et,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((tt+3)/4)*Math.floor((et+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((tt+3)/4)*Math.floor((et+3)/4)*16;case 37808:return Math.floor((tt+3)/4)*Math.floor((et+3)/4)*16;case 37809:return Math.floor((tt+4)/5)*Math.floor((et+3)/4)*16;case 37810:return Math.floor((tt+4)/5)*Math.floor((et+4)/5)*16;case 37811:return Math.floor((tt+5)/6)*Math.floor((et+4)/5)*16;case 37812:return Math.floor((tt+5)/6)*Math.floor((et+5)/6)*16;case 37813:return Math.floor((tt+7)/8)*Math.floor((et+4)/5)*16;case 37814:return Math.floor((tt+7)/8)*Math.floor((et+5)/6)*16;case 37815:return Math.floor((tt+7)/8)*Math.floor((et+7)/8)*16;case 37816:return Math.floor((tt+9)/10)*Math.floor((et+4)/5)*16;case 37817:return Math.floor((tt+9)/10)*Math.floor((et+5)/6)*16;case 37818:return Math.floor((tt+9)/10)*Math.floor((et+7)/8)*16;case 37819:return Math.floor((tt+9)/10)*Math.floor((et+9)/10)*16;case 37820:return Math.floor((tt+11)/12)*Math.floor((et+9)/10)*16;case 37821:return Math.floor((tt+11)/12)*Math.floor((et+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(tt/4)*Math.ceil(et/4)*16;case 36283:case 36284:return Math.ceil(tt/4)*Math.ceil(et/4)*8;case 36285:case 36286:return Math.ceil(tt/4)*Math.ceil(et/4)*16}throw Error(`Unable to determine texture byte length for ${nt} format.`)}function Ju(tt){switch(tt){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${tt}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));if(typeof window<"u")if(window.__THREE__)fn("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="187";function Th(){let tt=null,et=!1,nt=null,it=null;function st(rt,at){it=tt.requestAnimationFrame(st),nt(rt,at)}return{start:function(){if(et===!0)return;if(nt===null)return;if(tt===null)return;it=tt.requestAnimationFrame(st),et=!0},stop:function(){if(tt!==null)tt.cancelAnimationFrame(it);et=!1},setAnimationLoop:function(rt){nt=rt},setContext:function(rt){tt=rt}}}function $u(tt){let et=new WeakMap;function nt(ot,lt){let{array:ct,usage:ht}=ot,dt=ct.byteLength,ut=tt.createBuffer();tt.bindBuffer(lt,ut),tt.bufferData(lt,ct,ht),ot.onUploadCallback();let pt;if(ct instanceof Float32Array)pt=tt.FLOAT;else if(typeof Float16Array<"u"&&ct instanceof Float16Array)pt=tt.HALF_FLOAT;else if(ct instanceof Uint16Array)if(ot.isFloat16BufferAttribute)pt=tt.HALF_FLOAT;else pt=tt.UNSIGNED_SHORT;else if(ct instanceof Int16Array)pt=tt.SHORT;else if(ct instanceof Uint32Array)pt=tt.UNSIGNED_INT;else if(ct instanceof Int32Array)pt=tt.INT;else if(ct instanceof Int8Array)pt=tt.BYTE;else if(ct instanceof Uint8Array)pt=tt.UNSIGNED_BYTE;else if(ct instanceof Uint8ClampedArray)pt=tt.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+ct);return{buffer:ut,type:pt,bytesPerElement:ct.BYTES_PER_ELEMENT,version:ot.version,size:dt}}function it(ot,lt,ct){let{array:ht,updateRanges:dt}=lt;if(tt.bindBuffer(ct,ot),dt.length===0)tt.bufferSubData(ct,0,ht);else{dt.sort((pt,vt)=>pt.start-vt.start);let ut=0;for(let pt=1;pt<dt.length;pt++){let vt=dt[ut],Mt=dt[pt];if(Mt.start<=vt.start+vt.count+1)vt.count=Math.max(vt.count,Mt.start+Mt.count-vt.start);else++ut,dt[ut]=Mt}dt.length=ut+1;for(let pt=0,vt=dt.length;pt<vt;pt++){let Mt=dt[pt];tt.bufferSubData(ct,Mt.start*ht.BYTES_PER_ELEMENT,ht,Mt.start,Mt.count)}lt.clearUpdateRanges()}lt.onUploadCallback()}function st(ot){if(ot.isInterleavedBufferAttribute)ot=ot.data;return et.get(ot)}function rt(ot){if(ot.isInterleavedBufferAttribute)ot=ot.data;let lt=et.get(ot);if(lt)tt.deleteBuffer(lt.buffer),et.delete(ot)}function at(ot,lt){if(ot.isInterleavedBufferAttribute)ot=ot.data;if(ot.isGLBufferAttribute){let ht=et.get(ot);if(!ht||ht.version<ot.version)et.set(ot,{buffer:ot.buffer,type:ot.type,bytesPerElement:ot.elementSize,version:ot.version});return}let ct=et.get(ot);if(ct===void 0)et.set(ot,nt(ot,lt));else if(ct.version<ot.version){if(ct.size!==ot.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");it(ct.buffer,ot,lt),ct.version=ot.version}}return{get:st,remove:rt,update:at}}var Ku=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ju=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,td=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ed=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,id=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,sd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,ad=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,od=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ld=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,hd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ud=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,dd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,fd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,md=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,_d=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,xd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,vd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,yd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Sd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Md=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Td=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ed=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ad="gl_FragColor = linearToOutputTexel( gl_FragColor );",wd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Rd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Cd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Id=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Pd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ld=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Nd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Dd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ud=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Od=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Bd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Hd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Wd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Yd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Zd=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Jd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$d=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Kd=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qd=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,jd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ef=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,af=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,of=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,uf=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,df=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ff=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,pf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,gf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,_f=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,yf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Sf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Mf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Tf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ef=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Af=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,wf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,If=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Nf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Df=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Uf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ff=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Of=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,zf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,kf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,qf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Yf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Zf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Jf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`;var $f=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Kf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tp=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ep=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,np=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ip=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,sp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,rp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ap=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,op=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,up=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,dp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,gp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_p=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,xp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,vp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Mp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ep=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ap=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Cp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ip=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,En={alphahash_fragment:Ku,alphahash_pars_fragment:Qu,alphamap_fragment:ju,alphamap_pars_fragment:td,alphatest_fragment:ed,alphatest_pars_fragment:nd,aomap_fragment:id,aomap_pars_fragment:sd,batching_pars_vertex:rd,batching_vertex:ad,begin_vertex:od,beginnormal_vertex:ld,bsdfs:cd,iridescence_fragment:hd,bumpmap_pars_fragment:ud,clipping_planes_fragment:dd,clipping_planes_pars_fragment:fd,clipping_planes_pars_vertex:pd,clipping_planes_vertex:md,color_fragment:gd,color_pars_fragment:_d,color_pars_vertex:xd,color_vertex:vd,common:yd,defaultnormal_vertex:Sd,displacementmap_pars_vertex:Md,displacementmap_vertex:bd,emissivemap_fragment:Td,emissivemap_pars_fragment:Ed,colorspace_fragment:Ad,colorspace_pars_fragment:wd,envmap_fragment:Rd,envmap_common_pars_fragment:Cd,envmap_pars_fragment:Id,envmap_pars_vertex:Pd,envmap_physical_pars_fragment:Hd,envmap_vertex:Ld,fog_vertex:Nd,fog_pars_vertex:Dd,fog_fragment:Ud,fog_pars_fragment:Fd,gradientmap_pars_fragment:Od,lightmap_pars_fragment:Bd,lights_lambert_fragment:zd,lights_lambert_pars_fragment:Gd,lights_pars_begin:kd,lights_toon_fragment:Wd,lights_toon_pars_fragment:Vd,lights_phong_fragment:Xd,lights_phong_pars_fragment:qd,lights_physical_fragment:Yd,lights_physical_pars_fragment:Zd,lights_fragment_begin:Jd,lights_fragment_maps:$d,lights_fragment_end:Kd,lightprobes_pars_fragment:Qd,logdepthbuf_fragment:jd,logdepthbuf_pars_fragment:tf,logdepthbuf_pars_vertex:ef,logdepthbuf_vertex:nf,map_fragment:sf,map_pars_fragment:rf,map_particle_fragment:af,map_particle_pars_fragment:of,metalnessmap_fragment:lf,metalnessmap_pars_fragment:cf,morphinstance_vertex:hf,morphcolor_vertex:uf,morphnormal_vertex:df,morphtarget_pars_vertex:ff,morphtarget_vertex:pf,normal_fragment_begin:mf,normal_fragment_maps:gf,normal_pars_fragment:_f,normal_pars_vertex:xf,normal_vertex:vf,normalmap_pars_fragment:yf,clearcoat_normal_fragment_begin:Sf,clearcoat_normal_fragment_maps:Mf,clearcoat_pars_fragment:bf,iridescence_pars_fragment:Tf,opaque_fragment:Ef,packing:Af,premultiplied_alpha_fragment:wf,project_vertex:Rf,dithering_fragment:Cf,dithering_pars_fragment:If,roughnessmap_fragment:Pf,roughnessmap_pars_fragment:Lf,shadowmap_pars_fragment:Nf,shadowmap_pars_vertex:Df,shadowmap_vertex:Uf,shadowmask_pars_fragment:Ff,skinbase_vertex:Of,skinning_pars_vertex:Bf,skinning_vertex:zf,skinnormal_vertex:Gf,specularmap_fragment:kf,specularmap_pars_fragment:Hf,tonemapping_fragment:Wf,tonemapping_pars_fragment:Vf,transmission_fragment:Xf,transmission_pars_fragment:qf,uv_pars_fragment:Yf,uv_pars_vertex:Zf,uv_vertex:Jf,worldpos_vertex:$f,background_vert:Kf,background_frag:Qf,backgroundCube_vert:jf,backgroundCube_frag:tp,cube_vert:ep,cube_frag:np,depth_vert:ip,depth_frag:sp,distance_vert:rp,distance_frag:ap,equirect_vert:op,equirect_frag:lp,linedashed_vert:cp,linedashed_frag:hp,meshbasic_vert:up,meshbasic_frag:dp,meshlambert_vert:fp,meshlambert_frag:pp,meshmatcap_vert:mp,meshmatcap_frag:gp,meshnormal_vert:_p,meshnormal_frag:xp,meshphong_vert:vp,meshphong_frag:yp,meshphysical_vert:Sp,meshphysical_frag:Mp,meshtoon_vert:bp,meshtoon_frag:Tp,points_vert:Ep,points_frag:Ap,shadow_vert:wp,shadow_frag:Rp,sprite_vert:Cp,sprite_frag:Ip},tn={common:{diffuse:{value:new t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new yn},alphaMap:{value:null},alphaMapTransform:{value:new yn},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new yn}},envmap:{envMap:{value:null},envMapRotation:{value:new yn},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new yn}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new yn}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new yn},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new yn},normalScale:{value:new n(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new yn},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new yn}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new yn}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new yn}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new yn},alphaTest:{value:0},uvTransform:{value:new yn}},sprite:{diffuse:{value:new t(16777215)},opacity:{value:1},center:{value:new n(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new yn},alphaMap:{value:null},alphaMapTransform:{value:new yn},alphaTest:{value:0}}},Pi={basic:{uniforms:ai([tn.common,tn.specularmap,tn.envmap,tn.aomap,tn.lightmap,tn.fog]),vertexShader:En.meshbasic_vert,fragmentShader:En.meshbasic_frag},lambert:{uniforms:ai([tn.common,tn.specularmap,tn.envmap,tn.aomap,tn.lightmap,tn.emissivemap,tn.bumpmap,tn.normalmap,tn.displacementmap,tn.fog,tn.lights,{emissive:{value:new t(0)},envMapIntensity:{value:1}}]),vertexShader:En.meshlambert_vert,fragmentShader:En.meshlambert_frag},phong:{uniforms:ai([tn.common,tn.specularmap,tn.envmap,tn.aomap,tn.lightmap,tn.emissivemap,tn.bumpmap,tn.normalmap,tn.displacementmap,tn.fog,tn.lights,{emissive:{value:new t(0)},specular:{value:new t(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:En.meshphong_vert,fragmentShader:En.meshphong_frag},standard:{uniforms:ai([tn.common,tn.envmap,tn.aomap,tn.lightmap,tn.emissivemap,tn.bumpmap,tn.normalmap,tn.displacementmap,tn.roughnessmap,tn.metalnessmap,tn.fog,tn.lights,{emissive:{value:new t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:En.meshphysical_vert,fragmentShader:En.meshphysical_frag},toon:{uniforms:ai([tn.common,tn.aomap,tn.lightmap,tn.emissivemap,tn.bumpmap,tn.normalmap,tn.displacementmap,tn.gradientmap,tn.fog,tn.lights,{emissive:{value:new t(0)}}]),vertexShader:En.meshtoon_vert,fragmentShader:En.meshtoon_frag},matcap:{uniforms:ai([tn.common,tn.bumpmap,tn.normalmap,tn.displacementmap,tn.fog,{matcap:{value:null}}]),vertexShader:En.meshmatcap_vert,fragmentShader:En.meshmatcap_frag},points:{uniforms:ai([tn.points,tn.fog]),vertexShader:En.points_vert,fragmentShader:En.points_frag},dashed:{uniforms:ai([tn.common,tn.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:En.linedashed_vert,fragmentShader:En.linedashed_frag},depth:{uniforms:ai([tn.common,tn.displacementmap]),vertexShader:En.depth_vert,fragmentShader:En.depth_frag},normal:{uniforms:ai([tn.common,tn.bumpmap,tn.normalmap,tn.displacementmap,{opacity:{value:1}}]),vertexShader:En.meshnormal_vert,fragmentShader:En.meshnormal_frag},sprite:{uniforms:ai([tn.sprite,tn.fog]),vertexShader:En.sprite_vert,fragmentShader:En.sprite_frag},background:{uniforms:{uvTransform:{value:new yn},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:En.background_vert,fragmentShader:En.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new yn}},vertexShader:En.backgroundCube_vert,fragmentShader:En.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:En.cube_vert,fragmentShader:En.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:En.equirect_vert,fragmentShader:En.equirect_frag},distance:{uniforms:ai([tn.common,tn.displacementmap,{referencePosition:{value:new e},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:En.distance_vert,fragmentShader:En.distance_frag},shadow:{uniforms:ai([tn.lights,tn.fog,{color:{value:new t(0)},opacity:{value:1}}]),vertexShader:En.shadow_vert,fragmentShader:En.shadow_frag}};Pi.physical={uniforms:ai([Pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new yn},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new yn},clearcoatNormalScale:{value:new n(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new yn},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new yn},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new yn},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new yn},sheen:{value:0},sheenColor:{value:new t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new yn},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new yn},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new yn},transmissionSamplerSize:{value:new n},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new yn},attenuationDistance:{value:0},attenuationColor:{value:new t(0)},specularColor:{value:new t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new yn},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new yn},anisotropyVector:{value:new n},anisotropyMap:{value:null},anisotropyMapTransform:{value:new yn}}]),vertexShader:En.meshphysical_vert,fragmentShader:En.meshphysical_frag};var aa={r:0,b:0,g:0},Pp=new i,Eh=new yn;Eh.set(-1,0,0,0,1,0,0,0,1);function Lp(tt,et,nt,it,st,rt){let at=new t(0),ot=st===!0?0:1,lt,ct,ht=null,dt=0,ut=null;function pt(Tt){let Et=Tt.isScene===!0?Tt.background:null;if(Et&&Et.isTexture){let bt=Tt.backgroundBlurriness>0;Et=et.get(Et,bt)}return Et}function vt(Tt){let Et=!1,bt=pt(Tt);if(bt===null)ft(at,ot);else if(bt&&bt.isColor)ft(bt,1),Et=!0;let At=tt.xr.getEnvironmentBlendMode();if(At==="additive")nt.buffers.color.setClear(0,0,0,1,rt);else if(At==="alpha-blend")nt.buffers.color.setClear(0,0,0,0,rt);if(tt.autoClear||Et)nt.buffers.depth.setTest(!0),nt.buffers.depth.setMask(!0),nt.buffers.color.setMask(!0),tt.clear(tt.autoClearColor,tt.autoClearDepth,tt.autoClearStencil)}function Mt(Tt,Et){let bt=pt(Et);if(bt&&bt.isCubeTexture){if(ct===void 0)ct=new r(new q(1,1,1),new u({name:"BackgroundCubeMaterial",uniforms:ms(Pi.backgroundCube.uniforms),vertexShader:Pi.backgroundCube.vertexShader,fragmentShader:Pi.backgroundCube.fragmentShader,side:y,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),ct.geometry.deleteAttribute("normal"),ct.geometry.deleteAttribute("uv"),ct.onBeforeRender=function(At,It,gt){this.matrixWorld.copyPosition(gt.matrixWorld)},Object.defineProperty(ct.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),it.update(ct);if(ct.material.uniforms.envMap.value=bt,ct.material.uniforms.backgroundBlurriness.value=Et.backgroundBlurriness,ct.material.uniforms.backgroundIntensity.value=Et.backgroundIntensity,ct.material.uniforms.backgroundRotation.value.setFromMatrix4(Pp.makeRotationFromEuler(Et.backgroundRotation)).transpose(),bt.isRenderTargetTexture===!1)ct.material.uniforms.backgroundRotation.value.premultiply(Eh);if(ct.material.toneMapped=s.getTransfer(bt.colorSpace)!==o,ht!==bt||dt!==bt.version||ut!==tt.toneMapping)ct.material.needsUpdate=!0,ht=bt,dt=bt.version,ut=tt.toneMapping;ct.layers.enableAll(),Tt.unshift(ct,ct.geometry,ct.material,0,0,null)}else if(bt&&bt.isTexture){if(lt===void 0)lt=new r(new O(2,2),new u({name:"BackgroundMaterial",uniforms:ms(Pi.background.uniforms),vertexShader:Pi.background.vertexShader,fragmentShader:Pi.background.fragmentShader,side:H,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),lt.geometry.deleteAttribute("normal"),Object.defineProperty(lt.material,"map",{get:function(){return this.uniforms.t2D.value}}),it.update(lt);if(lt.material.uniforms.t2D.value=bt,lt.material.uniforms.backgroundIntensity.value=Et.backgroundIntensity,lt.material.toneMapped=s.getTransfer(bt.colorSpace)!==o,bt.matrixAutoUpdate===!0)bt.updateMatrix();if(lt.material.uniforms.uvTransform.value.copy(bt.matrix),ht!==bt||dt!==bt.version||ut!==tt.toneMapping)lt.material.needsUpdate=!0,ht=bt,dt=bt.version,ut=tt.toneMapping;lt.layers.enableAll(),Tt.unshift(lt,lt.geometry,lt.material,0,0,null)}}function ft(Tt,Et){Tt.getRGB(aa,zo(tt)),nt.buffers.color.setClear(aa.r,aa.g,aa.b,Et,rt)}function mt(){if(ct!==void 0)ct.geometry.dispose(),ct.material.dispose(),ct=void 0;if(lt!==void 0)lt.geometry.dispose(),lt.material.dispose(),lt=void 0}return{getClearColor:function(){return at},setClearColor:function(Tt,Et=1){at.set(Tt),ot=Et,ft(at,ot)},getClearAlpha:function(){return ot},setClearAlpha:function(Tt){ot=Tt,ft(at,ot)},render:vt,addToRenderList:Mt,dispose:mt}}function Np(tt,et){let nt=tt.getParameter(tt.MAX_VERTEX_ATTRIBS),it={},st=ut(null),rt=st,at=!1;function ot(Lt,zt,Kt,Rt,qt){let Zt=!1,Ot=dt(Lt,Rt,Kt,zt);if(rt!==Ot)rt=Ot,ct(rt.object);if(Zt=pt(Lt,Rt,Kt,qt),Zt)vt(Lt,Rt,Kt,qt);if(qt!==null)et.update(qt,tt.ELEMENT_ARRAY_BUFFER);if(Zt||at){if(at=!1,bt(Lt,zt,Kt,Rt),qt!==null)tt.bindBuffer(tt.ELEMENT_ARRAY_BUFFER,et.get(qt).buffer)}}function lt(){return tt.createVertexArray()}function ct(Lt){return tt.bindVertexArray(Lt)}function ht(Lt){return tt.deleteVertexArray(Lt)}function dt(Lt,zt,Kt,Rt){let qt=Rt.wireframe===!0,Zt=it[zt.id];if(Zt===void 0)Zt={},it[zt.id]=Zt;let Ot=Lt.isInstancedMesh===!0?Lt.id:0,Ye=Zt[Ot];if(Ye===void 0)Ye={},Zt[Ot]=Ye;let Wt=Ye[Kt.id];if(Wt===void 0)Wt={},Ye[Kt.id]=Wt;let $t=Wt[qt];if($t===void 0)$t=ut(lt()),Wt[qt]=$t;return $t}function ut(Lt){let zt=[],Kt=[],Rt=[];for(let qt=0;qt<nt;qt++)zt[qt]=0,Kt[qt]=0,Rt[qt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:zt,enabledAttributes:Kt,attributeDivisors:Rt,object:Lt,attributes:{},index:null}}function pt(Lt,zt,Kt,Rt){let qt=rt.attributes,Zt=zt.attributes,Ot=0,Ye=Kt.getAttributes();for(let Wt in Ye)if(Ye[Wt].location>=0){let Ve=qt[Wt],hn=Zt[Wt];if(hn===void 0){if(Wt==="instanceMatrix"&&Lt.instanceMatrix)hn=Lt.instanceMatrix;if(Wt==="instanceColor"&&Lt.instanceColor)hn=Lt.instanceColor}if(Ve===void 0)return!0;if(Ve.attribute!==hn)return!0;if(hn&&Ve.data!==hn.data)return!0;Ot++}if(rt.attributesNum!==Ot)return!0;if(rt.index!==Rt)return!0;return!1}function vt(Lt,zt,Kt,Rt){let qt={},Zt=zt.attributes,Ot=0,Ye=Kt.getAttributes();for(let Wt in Ye)if(Ye[Wt].location>=0){let Ve=Zt[Wt];if(Ve===void 0){if(Wt==="instanceMatrix"&&Lt.instanceMatrix)Ve=Lt.instanceMatrix;if(Wt==="instanceColor"&&Lt.instanceColor)Ve=Lt.instanceColor}let hn={};if(hn.attribute=Ve,Ve&&Ve.data)hn.data=Ve.data;qt[Wt]=hn,Ot++}rt.attributes=qt,rt.attributesNum=Ot,rt.index=Rt}function Mt(){let Lt=rt.newAttributes;for(let zt=0,Kt=Lt.length;zt<Kt;zt++)Lt[zt]=0}function ft(Lt){mt(Lt,0)}function mt(Lt,zt){let Kt=rt.newAttributes,Rt=rt.enabledAttributes,qt=rt.attributeDivisors;if(Kt[Lt]=1,Rt[Lt]===0)tt.enableVertexAttribArray(Lt),Rt[Lt]=1;if(qt[Lt]!==zt)tt.vertexAttribDivisor(Lt,zt),qt[Lt]=zt}function Tt(){let Lt=rt.newAttributes,zt=rt.enabledAttributes;for(let Kt=0,Rt=zt.length;Kt<Rt;Kt++)if(zt[Kt]!==Lt[Kt])tt.disableVertexAttribArray(Kt),zt[Kt]=0}function Et(Lt,zt,Kt,Rt,qt,Zt,Ot){if(Ot===!0)tt.vertexAttribIPointer(Lt,zt,Kt,qt,Zt);else tt.vertexAttribPointer(Lt,zt,Kt,Rt,qt,Zt)}function bt(Lt,zt,Kt,Rt){Mt();let qt=Rt.attributes,Zt=Kt.getAttributes(),Ot=zt.defaultAttributeValues;for(let Ye in Zt){let Wt=Zt[Ye];if(Wt.location>=0){let $t=qt[Ye];if($t===void 0){if(Ye==="instanceMatrix"&&Lt.instanceMatrix)$t=Lt.instanceMatrix;if(Ye==="instanceColor"&&Lt.instanceColor)$t=Lt.instanceColor}if($t!==void 0){let Ve=$t.normalized,hn=$t.itemSize,Yt=et.get($t);if(Yt===void 0)continue;let{buffer:We,type:ln,bytesPerElement:gn}=Yt,_n=ln===tt.INT||ln===tt.UNSIGNED_INT||$t.gpuType===Ha;if($t.isInterleavedBufferAttribute){let cn=$t.data,Nn=cn.isInterleavedBuffer===!0?cn.stride:cn.itemSize,An=$t.offset;if(cn.isInstancedInterleavedBuffer||cn.isInstancedBufferAttribute){for(let bn=0;bn<Wt.locationSize;bn++)mt(Wt.location+bn,cn.meshPerAttribute);if(Lt.isInstancedMesh!==!0&&Rt._maxInstanceCount===void 0)Rt._maxInstanceCount=cn.meshPerAttribute*cn.count}else for(let bn=0;bn<Wt.locationSize;bn++)ft(Wt.location+bn);tt.bindBuffer(tt.ARRAY_BUFFER,We);for(let bn=0;bn<Wt.locationSize;bn++)Et(Wt.location+bn,hn/Wt.locationSize,ln,Ve,Nn*gn,(An+hn/Wt.locationSize*bn)*gn,_n)}else{if($t.isInstancedBufferAttribute){for(let cn=0;cn<Wt.locationSize;cn++)mt(Wt.location+cn,$t.meshPerAttribute);if(Lt.isInstancedMesh!==!0&&Rt._maxInstanceCount===void 0)Rt._maxInstanceCount=$t.meshPerAttribute*$t.count}else for(let cn=0;cn<Wt.locationSize;cn++)ft(Wt.location+cn);tt.bindBuffer(tt.ARRAY_BUFFER,We);for(let cn=0;cn<Wt.locationSize;cn++)Et(Wt.location+cn,hn/Wt.locationSize,ln,Ve,hn*gn,hn/Wt.locationSize*cn*gn,_n)}}else if(Ot!==void 0){let Ve=Ot[Ye];if(Ve!==void 0)switch(Ve.length){case 2:tt.vertexAttrib2fv(Wt.location,Ve);break;case 3:tt.vertexAttrib3fv(Wt.location,Ve);break;case 4:tt.vertexAttrib4fv(Wt.location,Ve);break;default:tt.vertexAttrib1fv(Wt.location,Ve)}}}}Tt()}function At(){Nt();for(let Lt in it){let zt=it[Lt];for(let Kt in zt){let Rt=zt[Kt];for(let qt in Rt){let Zt=Rt[qt];for(let Ot in Zt)ht(Zt[Ot].object),delete Zt[Ot];delete Rt[qt]}}delete it[Lt]}}function It(Lt){if(it[Lt.id]===void 0)return;let zt=it[Lt.id];for(let Kt in zt){let Rt=zt[Kt];for(let qt in Rt){let Zt=Rt[qt];for(let Ot in Zt)ht(Zt[Ot].object),delete Zt[Ot];delete Rt[qt]}}delete it[Lt.id]}function gt(Lt){for(let zt in it){let Kt=it[zt];for(let Rt in Kt){let qt=Kt[Rt];if(qt[Lt.id]===void 0)continue;let Zt=qt[Lt.id];for(let Ot in Zt)ht(Zt[Ot].object),delete Zt[Ot];delete qt[Lt.id]}}}function yt(Lt){for(let zt in it){let Kt=it[zt],Rt=Lt.isInstancedMesh===!0?Lt.id:0,qt=Kt[Rt];if(qt===void 0)continue;for(let Zt in qt){let Ot=qt[Zt];for(let Ye in Ot)ht(Ot[Ye].object),delete Ot[Ye];delete qt[Zt]}if(delete Kt[Rt],Object.keys(Kt).length===0)delete it[zt]}}function Nt(){if(kt(),at=!0,rt===st)return;rt=st,ct(rt.object)}function kt(){st.geometry=null,st.program=null,st.wireframe=!1}return{setup:ot,reset:Nt,resetDefaultState:kt,dispose:At,releaseStatesOfGeometry:It,releaseStatesOfObject:yt,releaseStatesOfProgram:gt,initAttributes:Mt,enableAttribute:ft,disableUnusedAttributes:Tt}}function Dp(tt,et,nt){let it;function st(lt){it=lt}function rt(lt,ct){tt.drawArrays(it,lt,ct),nt.update(ct,it,1)}function at(lt,ct,ht){if(ht===0)return;tt.drawArraysInstanced(it,lt,ct,ht),nt.update(ct,it,ht)}function ot(lt,ct,ht){if(ht===0)return;et.get("WEBGL_multi_draw").multiDrawArraysWEBGL(it,lt,0,ct,0,ht);let ut=0;for(let pt=0;pt<ht;pt++)ut+=ct[pt];nt.update(ut,it,1)}this.setMode=st,this.render=rt,this.renderInstances=at,this.renderMultiDraw=ot}function Up(tt,et,nt,it){let st;function rt(){if(st!==void 0)return st;if(et.has("EXT_texture_filter_anisotropic")===!0){let gt=et.get("EXT_texture_filter_anisotropic");st=tt.getParameter(gt.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else st=0;return st}function at(gt){if(gt!==Hi&&it.convert(gt)!==tt.getParameter(tt.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function ot(gt){let yt=gt===S&&(et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float"));if(gt!==Ti&&gt!==ki&&!yt&&it.convert(gt)!==tt.getParameter(tt.IMPLEMENTATION_COLOR_READ_TYPE))return!1;return!0}function lt(gt){if(gt==="highp"){if(tt.getShaderPrecisionFormat(tt.VERTEX_SHADER,tt.HIGH_FLOAT).precision>0&&tt.getShaderPrecisionFormat(tt.FRAGMENT_SHADER,tt.HIGH_FLOAT).precision>0)return"highp";gt="mediump"}if(gt==="mediump"){if(tt.getShaderPrecisionFormat(tt.VERTEX_SHADER,tt.MEDIUM_FLOAT).precision>0&&tt.getShaderPrecisionFormat(tt.FRAGMENT_SHADER,tt.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let ct=nt.precision!==void 0?nt.precision:"highp",ht=lt(ct);if(ht!==ct)fn("WebGLRenderer:",ct,"not supported, using",ht,"instead."),ct=ht;let dt=nt.reversedDepthBuffer===!0&&et.has("EXT_clip_control"),ut=nt.logarithmicDepthBuffer===!0&&dt===!1;if(nt.reversedDepthBuffer===!0&&dt===!1)fn("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");if(nt.logarithmicDepthBuffer===!0&&dt===!0)fn("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let pt=tt.getParameter(tt.MAX_TEXTURE_IMAGE_UNITS),vt=tt.getParameter(tt.MAX_VERTEX_TEXTURE_IMAGE_UNITS),Mt=tt.getParameter(tt.MAX_TEXTURE_SIZE),ft=tt.getParameter(tt.MAX_CUBE_MAP_TEXTURE_SIZE),mt=tt.getParameter(tt.MAX_VERTEX_ATTRIBS),Tt=tt.getParameter(tt.MAX_VERTEX_UNIFORM_VECTORS),Et=tt.getParameter(tt.MAX_VARYING_VECTORS),bt=tt.getParameter(tt.MAX_FRAGMENT_UNIFORM_VECTORS),At=tt.getParameter(tt.MAX_SAMPLES),It=tt.getParameter(tt.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:rt,getMaxPrecision:lt,textureFormatReadable:at,textureTypeReadable:ot,precision:ct,logarithmicDepthBuffer:ut,reversedDepthBuffer:dt,maxTextures:pt,maxVertexTextures:vt,maxTextureSize:Mt,maxCubemapSize:ft,maxAttributes:mt,maxVertexUniforms:Tt,maxVaryings:Et,maxFragmentUniforms:bt,maxSamples:At,samples:It}}function Fp(tt){let et=this,nt=null,it=0,st=!1,rt=!1,at=new Ai,ot=new yn,lt={value:null,needsUpdate:!1};this.uniform=lt,this.numPlanes=0,this.numIntersection=0,this.init=function(dt,ut){let pt=dt.length!==0||ut||it!==0||st;return st=ut,it=dt.length,pt},this.beginShadows=function(){rt=!0,ht(null)},this.endShadows=function(){rt=!1},this.setGlobalState=function(dt,ut){nt=ht(dt,ut,0)},this.setState=function(dt,ut,pt){let{clippingPlanes:vt,clipIntersection:Mt,clipShadows:ft}=dt,mt=tt.get(dt);if(!st||vt===null||vt.length===0||rt&&!ft)if(rt)ht(null);else ct();else{let Tt=rt?0:it,Et=Tt*4,bt=mt.clippingState||null;lt.value=bt,bt=ht(vt,ut,Et,pt);for(let At=0;At!==Et;++At)bt[At]=nt[At];mt.clippingState=bt,this.numIntersection=Mt?this.numPlanes:0,this.numPlanes+=Tt}};function ct(){if(lt.value!==nt)lt.value=nt,lt.needsUpdate=it>0;et.numPlanes=it,et.numIntersection=0}function ht(dt,ut,pt,vt){let Mt=dt!==null?dt.length:0,ft=null;if(Mt!==0){if(ft=lt.value,vt!==!0||ft===null){let mt=pt+Mt*4,Tt=ut.matrixWorldInverse;if(ot.getNormalMatrix(Tt),ft===null||ft.length<mt)ft=new Float32Array(mt);for(let Et=0,bt=pt;Et!==Mt;++Et,bt+=4)at.copy(dt[Et]).applyMatrix4(Tt,ot),at.normal.toArray(ft,bt),ft[bt+3]=at.constant}lt.value=ft,lt.needsUpdate=!0}return et.numPlanes=Mt,et.numIntersection=0,ft}}class la extends _{constructor(tt=1,et={}){super(tt,tt,et);this.isWebGLCubeRenderTarget=!0;let nt={width:tt,height:tt,depth:1},it=[nt,nt,nt,nt,nt,nt];this.texture=new ea(it),this._setTextureOptions(et),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(tt,et){this.texture.type=et.type,this.texture.colorSpace=et.colorSpace,this.texture.generateMipmaps=et.generateMipmaps,this.texture.minFilter=et.minFilter,this.texture.magFilter=et.magFilter;let nt={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},it=new q(5,5,5),st=new u({name:"CubemapFromEquirect",uniforms:ms(nt.uniforms),vertexShader:nt.vertexShader,fragmentShader:nt.fragmentShader,side:y,blending:B});st.uniforms.tEquirect.value=et;let rt=new r(it,st),at=et.minFilter;if(et.minFilter===D)et.minFilter=p;return new or(1,10,this).update(tt,rt),et.minFilter=at,rt.geometry.dispose(),rt.material.dispose(),this}clear(tt,et=!0,nt=!0,it=!0){let st=tt.getRenderTarget();for(let rt=0;rt<6;rt++)tt.setRenderTarget(this,rt),tt.clear(et,nt,it);tt.setRenderTarget(st)}}var ih=256,Op=3,Bp=20,Ah=256,wh=16,zp=3,Gp=new e,kp=new t;class ue{constructor(tt){this._renderer=tt,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new or(1,10,null),this._boxMesh=new r(new q(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(tt,et=0,nt=0.1,it=100,st={}){let{size:rt=256,position:at=Gp}=st,ot=this._renderer;this._setSize(rt);let lt=this._allocateTarget(),ct=this._getSourceTarget(!0);if(et>0)ct.texture.mipmapsAutoUpdate=!1;let{autoClear:ht,autoClearColor:dt,autoClearDepth:ut,autoClearStencil:pt}=ot,vt=tt.background;if(ot.autoClear=!0,ot.autoClearColor=!0,ot.autoClearDepth=!0,ot.autoClearStencil=!0,vt===null)tt.background=ot.getClearColor(kp);let Mt=new or(nt,it,ct);if(Mt.position.copy(at),Mt.update(ot,tt),ot.autoClear=ht,ot.autoClearColor=dt,ot.autoClearDepth=ut,ot.autoClearStencil=pt,tt.background=vt,et>0)ct.texture.mipmapsAutoUpdate=!0,this._blur(lt,et);return this._applyPMREM(lt),lt}fromEquirectangular(tt,et=null){return this._fromTexture(tt,et)}fromCubemap(tt,et=null){return this._fromTexture(tt,et)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=ah(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=rh(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._sourceTarget!==null)this._sourceTarget.dispose();if(this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._integrationMaterial!==null)this._integrationMaterial.dispose();this._boxMesh.geometry.dispose()}static lodToRoughness(tt,et){return et>0?1-Math.sqrt(1-tt/et):0}_setSize(tt){this._cubeSize=Math.max(ih,No(tt))}_fromTexture(tt,et){if(tt.mapping===tr||tt.mapping===Us)this._setSize(tt.image.length===0?ih:tt.image[0].width||tt.image[0].image.width);else this._setSize(tt.image.width/4);let nt=et||this._allocateTarget();return this._textureToCubemap(tt),this._applyPMREM(nt),nt}_allocateTarget(){let tt=this._cubeSize,et=sh(tt,!1,!1),nt=Math.log2(tt)-Op;for(let it=0;it<=nt;it++)et.texture.mipmaps.push({width:tt>>it,height:tt>>it});return et.texture.name="PMREM",et.texture.isPMREMTexture=!0,et}_getSourceTarget(tt=!1){let et=this._cubeSize,nt=this._sourceTarget;if(nt===null||nt.width!==et||tt&&nt.depthBuffer===!1){if(nt!==null)nt.dispose();this._sourceTarget=sh(et,!0,tt)}return this._sourceTarget}_compileMaterial(tt){this._boxMesh.material=tt,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(tt,et,nt){let it=this._boxMesh,st=this._cubeCamera;it.material=nt,st.renderTarget=tt,st.activeMipmapLevel=et;let rt=tt.width>>et;tt.viewport.set(0,0,rt,rt),st.update(this._renderer,it),tt.viewport.set(0,0,tt.width,tt.height)}_textureToCubemap(tt){let et;if(tt.mapping===tr||tt.mapping===Us){if(this._cubemapMaterial===null)this._cubemapMaterial=ah();et=this._cubemapMaterial,et.uniforms.flipEnvMap.value=tt.isRenderTargetTexture===!1?-1:1}else{if(this._equirectMaterial===null)this._equirectMaterial=rh();et=this._equirectMaterial}et.uniforms.envMap.value=tt,this._renderCube(this._getSourceTarget(),0,et)}_applyPMREM(tt){if(this._ggxMaterial===null)this._ggxMaterial=Hp(),this._integrationMaterial=Wp();let et=this._cubeSize,nt=tt.texture.mipmaps.length-1,it=this._ggxMaterial.uniforms;it.envMap.value=this._sourceTarget.texture;let st=this._integrationMaterial.uniforms;st.envMap.value=this._sourceTarget.texture,st.sourceLod.value=Math.log2(et/wh);for(let rt=0;rt<=nt;rt++){let at=ue.lodToRoughness(rt,nt);if(rt>nt-zp)st.roughness.value=at,this._renderCube(tt,rt,this._integrationMaterial);else{let ot=at>0?Math.log2(et)+0.5*Math.log2(6/(Ah*Math.pow(at,4)))+0.5:0;it.roughness.value=at,it.lodBias.value=ot,this._renderCube(tt,rt,this._ggxMaterial)}}}_blur(tt,et){if(this._blurMaterial===null)this._blurMaterial=Vp();let nt=this._blurMaterial,it=nt.uniforms,st=this._sourceTarget;it.sigma.value=Math.min(et,Math.PI)/Math.SQRT2,it.envMap.value=st.texture,this._renderCube(tt,0,nt),it.envMap.value=tt.texture,this._renderCube(st,0,nt)}}function sh(tt,et,nt){return new la(tt,{minFilter:D,generateMipmaps:et,type:S,colorSpace:A,depthBuffer:nt})}function ur(tt,et,nt){return new u({name:tt,uniforms:et,vertexShader:En.cube_vert,fragmentShader:nt,side:y,blending:B,depthTest:!1,depthWrite:!1})}function Hp(){return ur("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Ah}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Wp(){return ur("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:wh}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Vp(){return ur("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Bp}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function rh(){return ur("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function ah(){return ur("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Xp(tt){let et=new WeakMap,nt=new WeakMap,it=null;function st(ut,pt=!1){if(ut===null||ut===void 0)return null;if(pt)return at(ut);return rt(ut)}function rt(ut){if(ut&&ut.isTexture){let pt=ut.mapping;if(pt===kr||pt===Hr)if(et.has(ut)){let vt=et.get(ut).texture;return ot(vt,ut.mapping)}else{let vt=ut.image;if(vt&&vt.height>0){let Mt=new la(vt.height);return Mt.fromEquirectangularTexture(tt,ut),et.set(ut,Mt),ut.addEventListener("dispose",ct),ot(Mt.texture,ut.mapping)}else return null}}return ut}function at(ut){if(ut&&ut.isTexture&&ut.isPMREMTexture!==!0){let pt=ut.mapping,vt=pt===kr||pt===Hr,Mt=pt===tr||pt===Us;if(vt||Mt){let ft=nt.get(ut),mt=ft!==void 0?ft.texture.pmremVersion:0;if(ut.isRenderTargetTexture&&ut.pmremVersion!==mt){if(it===null)it=new ue(tt);return ft=vt?it.fromEquirectangular(ut,ft):it.fromCubemap(ut,ft),ft.texture.pmremVersion=ut.pmremVersion,nt.set(ut,ft),ft.texture}else if(ft!==void 0)return ft.texture;else{let Tt=ut.image;if(vt&&Tt&&Tt.height>0||Mt&&Tt&&lt(Tt)){if(it===null)it=new ue(tt);return ft=vt?it.fromEquirectangular(ut):it.fromCubemap(ut),ft.texture.pmremVersion=ut.pmremVersion,nt.set(ut,ft),ut.addEventListener("dispose",ht),ft.texture}else return null}}}return ut}function ot(ut,pt){if(pt===kr)ut.mapping=tr;else if(pt===Hr)ut.mapping=Us;return ut}function lt(ut){let pt=0,vt=6;for(let Mt=0;Mt<vt;Mt++)if(ut[Mt]!==void 0)pt++;return pt===vt}function ct(ut){let pt=ut.target;pt.removeEventListener("dispose",ct);let vt=et.get(pt);if(vt!==void 0)et.delete(pt),vt.dispose()}function ht(ut){let pt=ut.target;pt.removeEventListener("dispose",ht);let vt=nt.get(pt);if(vt!==void 0)nt.delete(pt),vt.dispose()}function dt(){if(et=new WeakMap,nt=new WeakMap,it!==null)it.dispose(),it=null}return{get:st,dispose:dt}}function qp(tt){let et={};function nt(it){if(et[it]!==void 0)return et[it];let st=tt.getExtension(it);return et[it]=st,st}return{has:function(it){return nt(it)!==null},init:function(){nt("EXT_color_buffer_float"),nt("WEBGL_clip_cull_distance"),nt("OES_texture_float_linear"),nt("EXT_color_buffer_half_float"),nt("WEBGL_multisampled_render_to_texture"),nt("WEBGL_render_shared_exponent")},get:function(it){let st=nt(it);if(st===null)cs("WebGLRenderer: "+it+" extension not supported.");return st}}}function Yp(tt,et,nt,it){let st={},rt=new WeakMap,at=new FinalizationRegistry((vt)=>delete st[vt]);function ot(vt){lt(vt.target)}function lt(vt){if(vt.index!==null)et.remove(vt.index);for(let ft in vt.attributes)et.remove(vt.attributes[ft]);vt.removeEventListener("dispose",ot),delete st[vt.id],at.unregister(vt);let Mt=rt.get(vt);if(Mt)et.remove(Mt),rt.delete(vt);if(it.releaseStatesOfGeometry(vt),vt.isInstancedBufferGeometry===!0)delete vt._maxInstanceCount;nt.memory.geometries--}function ct(vt,Mt){if(st[Mt.id]!==void 0)return Mt;return Mt.addEventListener("dispose",ot),st[Mt.id]=new WeakRef(Mt),at.register(Mt,Mt.id,Mt),nt.memory.geometries++,Mt}function ht(vt){let Mt=vt.attributes;for(let ft in Mt)et.update(Mt[ft],tt.ARRAY_BUFFER)}function dt(vt){let Mt=vt.index,ft=vt.attributes.position,mt=0;if(ft===void 0)return;let Tt=Mt!==null?Mt.array.length:ft.array.length/3-1,bt=new(ft.count>=65535?jr:Qr)(Math.ceil(Tt/3)*6,1),At=bt.array;if(Mt!==null){let gt=Mt.array;mt=Mt.version;for(let yt=0,Nt=0;yt<Tt;yt+=3){let kt=gt[yt+0],Lt=gt[yt+1],zt=gt[yt+2];At[Nt++]=kt,At[Nt++]=Lt,At[Nt++]=Lt,At[Nt++]=zt,At[Nt++]=zt,At[Nt++]=kt}}else{mt=ft.version;for(let gt=0,yt=0;gt<Tt;gt+=3){let Nt=gt+0,kt=gt+1,Lt=gt+2;At[yt++]=Nt,At[yt++]=kt,At[yt++]=kt,At[yt++]=Lt,At[yt++]=Lt,At[yt++]=Nt}}bt.version=mt;let It=rt.get(vt);if(It)et.remove(It);rt.set(vt,bt)}function ut(vt){let Mt=rt.get(vt);if(Mt){let ft=vt.index;if(ft!==null){if(Mt.version<ft.version)dt(vt)}}else dt(vt);return rt.get(vt)}function pt(){for(let vt in st){let Mt=st[vt].deref();if(Mt!==void 0)lt(Mt)}}return{get:ct,update:ht,getWireframeAttribute:ut,dispose:pt}}function Zp(tt,et,nt){let it;function st(dt){it=dt}let rt,at;function ot(dt){rt=dt.type,at=dt.bytesPerElement}function lt(dt,ut){tt.drawElements(it,ut,rt,dt*at),nt.update(ut,it,1)}function ct(dt,ut,pt){if(pt===0)return;tt.drawElementsInstanced(it,ut,rt,dt*at,pt),nt.update(ut,it,pt)}function ht(dt,ut,pt){if(pt===0)return;et.get("WEBGL_multi_draw").multiDrawElementsWEBGL(it,ut,0,rt,dt,0,pt);let Mt=0;for(let ft=0;ft<pt;ft++)Mt+=ut[ft];nt.update(Mt,it,1)}this.setMode=st,this.setIndex=ot,this.render=lt,this.renderInstances=ct,this.renderMultiDraw=ht}function Jp(tt){let et={geometries:0,textures:0},nt={frame:0,calls:0,triangles:0,points:0,lines:0};function it(rt,at,ot){switch(nt.calls++,at){case tt.TRIANGLES:nt.triangles+=ot*(rt/3);break;case tt.LINES:nt.lines+=ot*(rt/2);break;case tt.LINE_STRIP:nt.lines+=ot*(rt-1);break;case tt.LINE_LOOP:nt.lines+=ot*rt;break;case tt.POINTS:nt.points+=ot*rt;break;default:vn("WebGLInfo: Unknown draw mode:",at);break}}function st(){nt.calls=0,nt.triangles=0,nt.points=0,nt.lines=0}return{memory:et,render:nt,programs:null,autoReset:!0,reset:st,update:it}}function $p(tt,et,nt){let it=new WeakMap,st=new Fn;function rt(at,ot,lt){let ct=at.morphTargetInfluences,ht=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,dt=ht!==void 0?ht.length:0,ut=it.get(ot);if(ut===void 0||ut.count!==dt){let Nt=function(){gt.dispose(),it.delete(ot),ot.removeEventListener("dispose",Nt)};if(ut!==void 0)ut.texture.dispose();let pt=ot.morphAttributes.position!==void 0,vt=ot.morphAttributes.normal!==void 0,Mt=ot.morphAttributes.color!==void 0,ft=ot.morphAttributes.position||[],mt=ot.morphAttributes.normal||[],Tt=ot.morphAttributes.color||[],Et=0;if(pt===!0)Et=1;if(vt===!0)Et=2;if(Mt===!0)Et=3;let bt=ot.attributes.position.count*Et,At=1;if(bt>et.maxTextureSize)At=Math.ceil(bt/et.maxTextureSize),bt=et.maxTextureSize;let It=new Float32Array(bt*At*4*dt),gt=new $r(It,bt,At,dt);gt.type=ki,gt.needsUpdate=!0;let yt=Et*4;for(let kt=0;kt<dt;kt++){let Lt=ft[kt],zt=mt[kt],Kt=Tt[kt],Rt=bt*At*4*kt;for(let qt=0;qt<Lt.count;qt++){let Zt=qt*yt;if(pt===!0)st.fromBufferAttribute(Lt,qt),It[Rt+Zt+0]=st.x,It[Rt+Zt+1]=st.y,It[Rt+Zt+2]=st.z,It[Rt+Zt+3]=0;if(vt===!0)st.fromBufferAttribute(zt,qt),It[Rt+Zt+4]=st.x,It[Rt+Zt+5]=st.y,It[Rt+Zt+6]=st.z,It[Rt+Zt+7]=0;if(Mt===!0)st.fromBufferAttribute(Kt,qt),It[Rt+Zt+8]=st.x,It[Rt+Zt+9]=st.y,It[Rt+Zt+10]=st.z,It[Rt+Zt+11]=Kt.itemSize===4?st.w:1}}ut={count:dt,texture:gt,size:new n(bt,At)},it.set(ot,ut),ot.addEventListener("dispose",Nt)}if(at.isInstancedMesh===!0&&at.morphTexture!==null)lt.getUniforms().setValue(tt,"morphTexture",at.morphTexture,nt);else{let pt=0;for(let Mt=0;Mt<ct.length;Mt++)pt+=ct[Mt];let vt=ot.morphTargetsRelative?1:1-pt;lt.getUniforms().setValue(tt,"morphTargetBaseInfluence",vt),lt.getUniforms().setValue(tt,"morphTargetInfluences",ct)}lt.getUniforms().setValue(tt,"morphTargetsTexture",ut.texture,nt),lt.getUniforms().setValue(tt,"morphTargetsTextureSize",ut.size)}return{update:rt}}function Kp(tt,et,nt,it,st){let rt=new WeakMap;function at(ct){let ht=st.render.frame,dt=ct.geometry,ut=et.get(ct,dt);if(rt.get(ut)!==ht)et.update(ut),rt.set(ut,ht);if(ct.isInstancedMesh){if(ct.hasEventListener("dispose",lt)===!1)ct.addEventListener("dispose",lt);if(rt.get(ct)!==ht){if(nt.update(ct.instanceMatrix,tt.ARRAY_BUFFER),ct.instanceColor!==null)nt.update(ct.instanceColor,tt.ARRAY_BUFFER);rt.set(ct,ht)}}if(ct.isSkinnedMesh){let pt=ct.skeleton;if(rt.get(pt)!==ht)pt.update(),rt.set(pt,ht)}return ut}function ot(){rt=new WeakMap}function lt(ct){let ht=ct.target;if(ht.removeEventListener("dispose",lt),it.releaseStatesOfObject(ht),nt.remove(ht.instanceMatrix),ht.instanceColor!==null)nt.remove(ht.instanceColor)}return{update:at,dispose:ot}}var Qp={[de]:"LINEAR_TONE_MAPPING",[fe]:"REINHARD_TONE_MAPPING",[pe]:"CINEON_TONE_MAPPING",[W]:"ACES_FILMIC_TONE_MAPPING",[ge]:"AGX_TONE_MAPPING",[_e]:"NEUTRAL_TONE_MAPPING",[me]:"CUSTOM_TONE_MAPPING"};function jp(tt,et,nt,it,st,rt){let at=new _(et,nt,{type:tt,depthBuffer:st,stencilBuffer:rt,samples:it?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),ot=null,lt=null,ct=null,ht=new h;ht.setAttribute("position",new m([-1,3,0,-1,-1,0,3,-1,0],3)),ht.setAttribute("uv",new m([0,2,0,0,2,0],2));let dt=new Ae({uniforms:{tDiffuse:{value:null}},vertexShader:`
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

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

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

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),ut=new r(ht,dt),pt=new L(-1,1,1,-1,0,1),vt=null,Mt=null,ft=!1,mt,Tt=null,Et=[],bt=!1;this.setSize=function(At,It){if(at.setSize(At,It),ot!==null)ot.setSize(At,It);if(lt!==null)lt.setSize(At,It);for(let gt=0;gt<Et.length;gt++){let yt=Et[gt];if(yt.setSize)yt.setSize(At,It)}},this.setEffects=function(At){Et=At,bt=Et.length>0&&Et[0].isRenderPass===!0;let{width:It,height:gt}=at;if(Et.length>0&&ot===null)ot=new _(It,gt,{type:S,depthBuffer:!1,stencilBuffer:!1}),lt=new _(It,gt,{type:S,depthBuffer:!1,stencilBuffer:!1});let yt=st===!0&&Et.some((Nt)=>Nt.needsDepthTexture===!0);if(yt!==(at.depthTexture!==null)){if(yt===!0&&ct===null){if(ct=new ji(It,gt),rt===!0)ct.format=Qi,ct.type=ds}at.dispose(),at.depthTexture=yt?ct:null,at.resolveDepthBuffer=yt,at.storeMultisampledDepthBuffer=yt}for(let Nt=0;Nt<Et.length;Nt++){let kt=Et[Nt];if(kt.setSize)kt.setSize(It,gt);if(yt&&kt.needsDepthTexture===!0&&kt.setDepthTexture)kt.setDepthTexture(ct)}},this.begin=function(At,It){if(ft)return!1;if(At.toneMapping===R&&Et.length===0)return!1;if(Tt=It,It!==null){let{width:gt,height:yt}=It;if(at.width!==gt||at.height!==yt)this.setSize(gt,yt)}if(bt===!1)At.setRenderTarget(at);return mt=At.toneMapping,At.toneMapping=R,!0},this.hasRenderPass=function(){return bt},this.end=function(At,It){At.toneMapping=mt,ft=!0;let gt=at,yt=ot;for(let Nt=0;Nt<Et.length;Nt++){let kt=Et[Nt];if(kt.enabled===!1)continue;if(kt.render(At,yt,gt,It),kt.needsSwap!==!1)gt=yt,yt=yt===ot?lt:ot}if(vt!==At.outputColorSpace||Mt!==At.toneMapping){if(vt=At.outputColorSpace,Mt=At.toneMapping,dt.defines={},s.getTransfer(vt)===o)dt.defines.SRGB_TRANSFER="";let Nt=Qp[Mt];if(Nt)dt.defines[Nt]="";dt.needsUpdate=!0}dt.uniforms.tDiffuse.value=gt.texture,At.setRenderTarget(Tt),At.render(ut,pt),Tt=null,ft=!1},this.isCompositing=function(){return ft},this.dispose=function(){if(at.dispose(),ot!==null)ot.dispose();if(lt!==null)lt.dispose();ht.dispose(),dt.dispose()}}var Rh=new c,Ch=new ji(1,1),Ih=new na(1),Ph=new $r,Lh=new Bo,Nh=new ea,oh=[],lh=[],ch=new Float32Array(16),hh=new Float32Array(9),uh=new Float32Array(4);function Bs(tt,et,nt){let it=tt[0];if(it<=0||it>0)return tt;let st=et*nt,rt=oh[st];if(rt===void 0)rt=new Float32Array(st),oh[st]=rt;if(et!==0){it.toArray(rt,0);for(let at=1,ot=0;at!==et;++at)ot+=nt,tt[at].toArray(rt,ot)}return rt}function Yn(tt,et){if(tt.length!==et.length)return!1;for(let nt=0,it=tt.length;nt<it;nt++)if(tt[nt]!==et[nt])return!1;return!0}function Zn(tt,et){for(let nt=0,it=et.length;nt<it;nt++)tt[nt]=et[nt]}function ca(tt,et){let nt=lh[et];if(nt===void 0)nt=new Int32Array(et),lh[et]=nt;for(let it=0;it!==et;++it)nt[it]=tt.allocateTextureUnit();return nt}function tm(tt,et){let nt=this.cache;if(nt[0]===et)return;tt.uniform1f(this.addr,et),nt[0]=et}function em(tt,et){let nt=this.cache;if(et.x!==void 0){if(nt[0]!==et.x||nt[1]!==et.y)tt.uniform2f(this.addr,et.x,et.y),nt[0]=et.x,nt[1]=et.y}else{if(Yn(nt,et))return;tt.uniform2fv(this.addr,et),Zn(nt,et)}}function nm(tt,et){let nt=this.cache;if(et.x!==void 0){if(nt[0]!==et.x||nt[1]!==et.y||nt[2]!==et.z)tt.uniform3f(this.addr,et.x,et.y,et.z),nt[0]=et.x,nt[1]=et.y,nt[2]=et.z}else if(et.r!==void 0){if(nt[0]!==et.r||nt[1]!==et.g||nt[2]!==et.b)tt.uniform3f(this.addr,et.r,et.g,et.b),nt[0]=et.r,nt[1]=et.g,nt[2]=et.b}else{if(Yn(nt,et))return;tt.uniform3fv(this.addr,et),Zn(nt,et)}}function im(tt,et){let nt=this.cache;if(et.x!==void 0){if(nt[0]!==et.x||nt[1]!==et.y||nt[2]!==et.z||nt[3]!==et.w)tt.uniform4f(this.addr,et.x,et.y,et.z,et.w),nt[0]=et.x,nt[1]=et.y,nt[2]=et.z,nt[3]=et.w}else{if(Yn(nt,et))return;tt.uniform4fv(this.addr,et),Zn(nt,et)}}function sm(tt,et){let nt=this.cache,it=et.elements;if(it===void 0){if(Yn(nt,et))return;tt.uniformMatrix2fv(this.addr,!1,et),Zn(nt,et)}else{if(Yn(nt,it))return;uh.set(it),tt.uniformMatrix2fv(this.addr,!1,uh),Zn(nt,it)}}function rm(tt,et){let nt=this.cache,it=et.elements;if(it===void 0){if(Yn(nt,et))return;tt.uniformMatrix3fv(this.addr,!1,et),Zn(nt,et)}else{if(Yn(nt,it))return;hh.set(it),tt.uniformMatrix3fv(this.addr,!1,hh),Zn(nt,it)}}function am(tt,et){let nt=this.cache,it=et.elements;if(it===void 0){if(Yn(nt,et))return;tt.uniformMatrix4fv(this.addr,!1,et),Zn(nt,et)}else{if(Yn(nt,it))return;ch.set(it),tt.uniformMatrix4fv(this.addr,!1,ch),Zn(nt,it)}}function om(tt,et){let nt=this.cache;if(nt[0]===et)return;tt.uniform1i(this.addr,et),nt[0]=et}function lm(tt,et){let nt=this.cache;if(et.x!==void 0){if(nt[0]!==et.x||nt[1]!==et.y)tt.uniform2i(this.addr,et.x,et.y),nt[0]=et.x,nt[1]=et.y}else{if(Yn(nt,et))return;tt.uniform2iv(this.addr,et),Zn(nt,et)}}function cm(tt,et){let nt=this.cache;if(et.x!==void 0){if(nt[0]!==et.x||nt[1]!==et.y||nt[2]!==et.z)tt.uniform3i(this.addr,et.x,et.y,et.z),nt[0]=et.x,nt[1]=et.y,nt[2]=et.z}else{if(Yn(nt,et))return;tt.uniform3iv(this.addr,et),Zn(nt,et)}}function hm(tt,et){let nt=this.cache;if(et.x!==void 0){if(nt[0]!==et.x||nt[1]!==et.y||nt[2]!==et.z||nt[3]!==et.w)tt.uniform4i(this.addr,et.x,et.y,et.z,et.w),nt[0]=et.x,nt[1]=et.y,nt[2]=et.z,nt[3]=et.w}else{if(Yn(nt,et))return;tt.uniform4iv(this.addr,et),Zn(nt,et)}}function um(tt,et){let nt=this.cache;if(nt[0]===et)return;tt.uniform1ui(this.addr,et),nt[0]=et}function dm(tt,et){let nt=this.cache;if(et.x!==void 0){if(nt[0]!==et.x||nt[1]!==et.y)tt.uniform2ui(this.addr,et.x,et.y),nt[0]=et.x,nt[1]=et.y}else{if(Yn(nt,et))return;tt.uniform2uiv(this.addr,et),Zn(nt,et)}}function fm(tt,et){let nt=this.cache;if(et.x!==void 0){if(nt[0]!==et.x||nt[1]!==et.y||nt[2]!==et.z)tt.uniform3ui(this.addr,et.x,et.y,et.z),nt[0]=et.x,nt[1]=et.y,nt[2]=et.z}else{if(Yn(nt,et))return;tt.uniform3uiv(this.addr,et),Zn(nt,et)}}function pm(tt,et){let nt=this.cache;if(et.x!==void 0){if(nt[0]!==et.x||nt[1]!==et.y||nt[2]!==et.z||nt[3]!==et.w)tt.uniform4ui(this.addr,et.x,et.y,et.z,et.w),nt[0]=et.x,nt[1]=et.y,nt[2]=et.z,nt[3]=et.w}else{if(Yn(nt,et))return;tt.uniform4uiv(this.addr,et),Zn(nt,et)}}function ha(tt){if(tt.version===0)tt.compareFunction=Co,tt.needsUpdate=!0;return tt}function mm(tt,et,nt){let it=this.cache,st=nt.allocateTextureUnit();if(it[0]!==st)tt.uniform1i(this.addr,st),it[0]=st;let rt;if(this.type===tt.SAMPLER_2D_SHADOW)rt=ha(Ch);else rt=Rh;nt.setTexture2D(et||rt,st)}function gm(tt,et,nt){let it=this.cache,st=nt.allocateTextureUnit();if(it[0]!==st)tt.uniform1i(this.addr,st),it[0]=st;nt.setTexture3D(et||Lh,st)}function _m(tt,et,nt){let it=this.cache,st=nt.allocateTextureUnit();if(it[0]!==st)tt.uniform1i(this.addr,st),it[0]=st;let rt;if(this.type===tt.SAMPLER_CUBE_SHADOW)rt=ha(Ih);else rt=Nh;nt.setTextureCube(et||rt,st)}function xm(tt,et,nt){let it=this.cache,st=nt.allocateTextureUnit();if(it[0]!==st)tt.uniform1i(this.addr,st),it[0]=st;nt.setTexture2DArray(et||Ph,st)}function vm(tt){switch(tt){case 5126:return tm;case 35664:return em;case 35665:return nm;case 35666:return im;case 35674:return sm;case 35675:return rm;case 35676:return am;case 5124:case 35670:return om;case 35667:case 35671:return lm;case 35668:case 35672:return cm;case 35669:case 35673:return hm;case 5125:return um;case 36294:return dm;case 36295:return fm;case 36296:return pm;case 35678:case 36198:case 36298:case 36306:case 35682:return mm;case 35679:case 36299:case 36307:return gm;case 35680:case 36300:case 36308:case 36293:return _m;case 36289:case 36303:case 36311:case 36292:return xm}}function ym(tt,et){tt.uniform1fv(this.addr,et)}function Sm(tt,et){let nt=Bs(et,this.size,2);tt.uniform2fv(this.addr,nt)}function Mm(tt,et){let nt=Bs(et,this.size,3);tt.uniform3fv(this.addr,nt)}function bm(tt,et){let nt=Bs(et,this.size,4);tt.uniform4fv(this.addr,nt)}function Tm(tt,et){let nt=Bs(et,this.size,4);tt.uniformMatrix2fv(this.addr,!1,nt)}function Em(tt,et){let nt=Bs(et,this.size,9);tt.uniformMatrix3fv(this.addr,!1,nt)}function Am(tt,et){let nt=Bs(et,this.size,16);tt.uniformMatrix4fv(this.addr,!1,nt)}function wm(tt,et){tt.uniform1iv(this.addr,et)}function Rm(tt,et){tt.uniform2iv(this.addr,et)}function Cm(tt,et){tt.uniform3iv(this.addr,et)}function Im(tt,et){tt.uniform4iv(this.addr,et)}function Pm(tt,et){tt.uniform1uiv(this.addr,et)}function Lm(tt,et){tt.uniform2uiv(this.addr,et)}function Nm(tt,et){tt.uniform3uiv(this.addr,et)}function Dm(tt,et){tt.uniform4uiv(this.addr,et)}function Um(tt,et,nt){let it=this.cache,st=et.length,rt=ca(nt,st);if(!Yn(it,rt))tt.uniform1iv(this.addr,rt),Zn(it,rt);let at;if(this.type===tt.SAMPLER_2D_SHADOW)at=ha(Ch);else at=Rh;for(let ot=0;ot!==st;++ot)nt.setTexture2D(et[ot]||at,rt[ot])}function Fm(tt,et,nt){let it=this.cache,st=et.length,rt=ca(nt,st);if(!Yn(it,rt))tt.uniform1iv(this.addr,rt),Zn(it,rt);for(let at=0;at!==st;++at)nt.setTexture3D(et[at]||Lh,rt[at])}function Om(tt,et,nt){let it=this.cache,st=et.length,rt=ca(nt,st);if(!Yn(it,rt))tt.uniform1iv(this.addr,rt),Zn(it,rt);let at;if(this.type===tt.SAMPLER_CUBE_SHADOW)at=ha(Ih);else at=Nh;for(let ot=0;ot!==st;++ot)nt.setTextureCube(et[ot]||at,rt[ot])}function Bm(tt,et,nt){let it=this.cache,st=et.length,rt=ca(nt,st);if(!Yn(it,rt))tt.uniform1iv(this.addr,rt),Zn(it,rt);for(let at=0;at!==st;++at)nt.setTexture2DArray(et[at]||Ph,rt[at])}function zm(tt){switch(tt){case 5126:return ym;case 35664:return Sm;case 35665:return Mm;case 35666:return bm;case 35674:return Tm;case 35675:return Em;case 35676:return Am;case 5124:case 35670:return wm;case 35667:case 35671:return Rm;case 35668:case 35672:return Cm;case 35669:case 35673:return Im;case 5125:return Pm;case 36294:return Lm;case 36295:return Nm;case 36296:return Dm;case 35678:case 36198:case 36298:case 36306:case 35682:return Um;case 35679:case 36299:case 36307:return Fm;case 35680:case 36300:case 36308:case 36293:return Om;case 36289:case 36303:case 36311:case 36292:return Bm}}class Dh{constructor(tt,et,nt){this.id=tt,this.addr=nt,this.cache=[],this.type=et.type,this.setValue=vm(et.type)}}class Uh{constructor(tt,et,nt){this.id=tt,this.addr=nt,this.cache=[],this.type=et.type,this.size=et.size,this.setValue=zm(et.type)}}class Fh{constructor(tt){this.id=tt,this.seq=[],this.map={}}setValue(tt,et,nt){let it=this.seq;for(let st=0,rt=it.length;st!==rt;++st){let at=it[st];at.setValue(tt,et[at.id],nt)}}}var jo=/(\w+)(\])?(\[|\.)?/g;function dh(tt,et){tt.seq.push(et),tt.map[et.id]=et}function Gm(tt,et,nt){let it=tt.name,st=it.length;jo.lastIndex=0;while(!0){let rt=jo.exec(it),at=jo.lastIndex,ot=rt[1],lt=rt[2]==="]",ct=rt[3];if(lt)ot=ot|0;if(ct===void 0||ct==="["&&at+2===st){dh(nt,ct===void 0?new Dh(ot,tt,et):new Uh(ot,tt,et));break}else{let dt=nt.map[ot];if(dt===void 0)dt=new Fh(ot),dh(nt,dt);nt=dt}}}class hr{constructor(tt,et){this.seq=[],this.map={};let nt=tt.getProgramParameter(et,tt.ACTIVE_UNIFORMS);for(let rt=0;rt<nt;++rt){let at=tt.getActiveUniform(et,rt),ot=tt.getUniformLocation(et,at.name);Gm(at,ot,this)}let it=[],st=[];for(let rt of this.seq)if(rt.type===tt.SAMPLER_2D_SHADOW||rt.type===tt.SAMPLER_CUBE_SHADOW||rt.type===tt.SAMPLER_2D_ARRAY_SHADOW)it.push(rt);else st.push(rt);if(it.length>0)this.seq=it.concat(st)}setValue(tt,et,nt,it){let st=this.map[et];if(st!==void 0)st.setValue(tt,nt,it)}setOptional(tt,et,nt){let it=et[nt];if(it!==void 0)this.setValue(tt,nt,it)}static upload(tt,et,nt,it){for(let st=0,rt=et.length;st!==rt;++st){let at=et[st],ot=nt[at.id];if(ot.needsUpdate!==!1)at.setValue(tt,ot.value,it)}}static seqWithValue(tt,et){let nt=[];for(let it=0,st=tt.length;it!==st;++it){let rt=tt[it];if(rt.id in et)nt.push(rt)}return nt}}function fh(tt,et,nt){let it=tt.createShader(et);return tt.shaderSource(it,nt),tt.compileShader(it),it}var km=37297,Hm=0;function Wm(tt,et){let nt=tt.split(`
`),it=[],st=Math.max(et-6,0),rt=Math.min(et+6,nt.length);for(let at=st;at<rt;at++){let ot=at+1;it.push(`${ot===et?">":" "} ${ot}: ${nt[at]}`)}return it.join(`
`)}var ph=new yn;function Vm(tt){s._getMatrix(ph,s.workingColorSpace,tt);let et=`mat3( ${ph.elements.map((nt)=>nt.toFixed(4))} )`;switch(s.getTransfer(tt)){case Ao:return[et,"LinearTransferOETF"];case o:return[et,"sRGBTransferOETF"];default:return fn("WebGLProgram: Unsupported color space: ",tt),[et,"LinearTransferOETF"]}}function mh(tt,et,nt){let it=tt.getShaderParameter(et,tt.COMPILE_STATUS),rt=(tt.getShaderInfoLog(et)||"").trim();if(it&&rt==="")return"";let at=/ERROR: 0:(\d+)/.exec(rt);if(at){let ot=parseInt(at[1]);return nt.toUpperCase()+`

`+rt+`

`+Wm(tt.getShaderSource(et),ot)}else return rt}function Xm(tt,et){let nt=Vm(et);return[`vec4 ${tt}( vec4 value ) {`,`	return ${nt[1]}( vec4( ${nt[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var qm={[de]:"Linear",[fe]:"Reinhard",[pe]:"Cineon",[W]:"ACESFilmic",[ge]:"AgX",[_e]:"Neutral",[me]:"Custom"};function Ym(tt,et){let nt=qm[et];if(nt===void 0)return fn("WebGLProgram: Unsupported toneMapping:",et),"vec3 "+tt+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+tt+"( vec3 color ) { return "+nt+"ToneMapping( color ); }"}var oa=new e;function Zm(){s.getLuminanceCoefficients(oa);let tt=oa.x.toFixed(4),et=oa.y.toFixed(4),nt=oa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${tt}, ${et}, ${nt} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function Jm(tt){return[tt.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",tt.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(cr).join(`
`)}function $m(tt){let et=[];for(let nt in tt){let it=tt[nt];if(it===!1)continue;et.push("#define "+nt+" "+it)}return et.join(`
`)}function Km(tt,et){let nt={},it=tt.getProgramParameter(et,tt.ACTIVE_ATTRIBUTES);for(let st=0;st<it;st++){let rt=tt.getActiveAttrib(et,st),at=rt.name,ot=1;if(rt.type===tt.FLOAT_MAT2)ot=2;if(rt.type===tt.FLOAT_MAT3)ot=3;if(rt.type===tt.FLOAT_MAT4)ot=4;nt[at]={type:rt.type,location:tt.getAttribLocation(et,at),locationSize:ot}}return nt}function cr(tt){return tt!==""}function gh(tt,et){let nt=et.numSpotLightShadows+et.numSpotLightMaps-et.numSpotLightShadowsWithMaps;return tt.replace(/NUM_SUN_LIGHTS/g,et.numSunLights).replace(/NUM_DIR_LIGHTS/g,et.numDirLights).replace(/NUM_SPOT_LIGHTS/g,et.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,et.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,nt).replace(/NUM_RECT_AREA_LIGHTS/g,et.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,et.numPointLights).replace(/NUM_HEMI_LIGHTS/g,et.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,et.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,et.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,et.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,et.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,et.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,et.numLightProbeGrids)}function _h(tt,et){return tt.replace(/NUM_CLIPPING_PLANES/g,et.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,et.numClippingPlanes-et.numClipIntersection)}var Qm=/^[ \t]*#include +<([\w\d./]+)>/gm;function el(tt){return tt.replace(Qm,jm)}function jm(tt,et){let nt=En[et];if(nt===void 0)throw Error("THREE.WebGLProgram: Can not resolve #include <"+et+">");return el(nt)}var tg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xh(tt){return tt.replace(tg,eg)}function eg(tt,et,nt,it){let st="";for(let rt=parseInt(et);rt<parseInt(nt);rt++)st+=it.replace(/\[\s*i\s*\]/g,"[ "+rt+" ]").replace(/UNROLLED_LOOP_INDEX/g,rt);return st}function vh(tt){let et=`precision ${tt.precision} float;
	precision ${tt.precision} int;
	precision ${tt.precision} sampler2D;
	precision ${tt.precision} samplerCube;
	precision ${tt.precision} sampler3D;
	precision ${tt.precision} sampler2DArray;
	precision ${tt.precision} sampler2DShadow;
	precision ${tt.precision} samplerCubeShadow;
	precision ${tt.precision} sampler2DArrayShadow;
	precision ${tt.precision} isampler2D;
	precision ${tt.precision} isampler3D;
	precision ${tt.precision} isamplerCube;
	precision ${tt.precision} isampler2DArray;
	precision ${tt.precision} usampler2D;
	precision ${tt.precision} usampler3D;
	precision ${tt.precision} usamplerCube;
	precision ${tt.precision} usampler2DArray;
	`;if(tt.precision==="highp")et+=`
#define HIGH_PRECISION`;else if(tt.precision==="mediump")et+=`
#define MEDIUM_PRECISION`;else if(tt.precision==="lowp")et+=`
#define LOW_PRECISION`;return et}var ng={[Qs]:"SHADOWMAP_TYPE_PCF",[Ns]:"SHADOWMAP_TYPE_VSM"};function ig(tt){return ng[tt.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var sg={[Us]:"ENVMAP_MODE_REFRACTION"};function rg(tt){if(tt.envMap===!1)return"ENVMAP_MODE_REFLECTION";return sg[tt.envMapMode]||"ENVMAP_MODE_REFLECTION"}var ag={[Rc]:"ENVMAP_BLENDING_MULTIPLY",[Cc]:"ENVMAP_BLENDING_MIX",[Ic]:"ENVMAP_BLENDING_ADD"};function og(tt){if(tt.envMap===!1)return"ENVMAP_BLENDING_NONE";return ag[tt.combine]||"ENVMAP_BLENDING_NONE"}function lg(tt,et,nt,it){let st=tt.getContext(),{defines:rt,vertexShader:at,fragmentShader:ot}=nt,lt=ig(nt),ct=nt.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",ht=rg(nt),dt=og(nt),ut=Jm(nt),pt=$m(rt),vt=st.createProgram(),Mt,ft,mt=nt.glslVersion?"#version "+nt.glslVersion+`
`:"";if(nt.isRawShaderMaterial){if(Mt=["#define SHADER_TYPE "+nt.shaderType,"#define SHADER_NAME "+nt.shaderName,pt].filter(cr).join(`
`),Mt.length>0)Mt+=`
`;if(ft=["#define SHADER_TYPE "+nt.shaderType,"#define SHADER_NAME "+nt.shaderName,pt].filter(cr).join(`
`),ft.length>0)ft+=`
`}else Mt=[vh(nt),"#define SHADER_TYPE "+nt.shaderType,"#define SHADER_NAME "+nt.shaderName,pt,nt.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",nt.batching?"#define USE_BATCHING":"",nt.batchingColor?"#define USE_BATCHING_COLOR":"",nt.instancing?"#define USE_INSTANCING":"",nt.instancingColor?"#define USE_INSTANCING_COLOR":"",nt.instancingMorph?"#define USE_INSTANCING_MORPH":"",nt.useFog&&nt.fog?"#define USE_FOG":"",nt.useFog&&nt.fogExp2?"#define FOG_EXP2":"",nt.map?"#define USE_MAP":"",nt.envMap?"#define USE_ENVMAP":"",nt.envMap?"#define "+ht:"",nt.lightMap?"#define USE_LIGHTMAP":"",nt.aoMap?"#define USE_AOMAP":"",nt.bumpMap?"#define USE_BUMPMAP":"",nt.normalMap?"#define USE_NORMALMAP":"",nt.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",nt.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",nt.displacementMap?"#define USE_DISPLACEMENTMAP":"",nt.emissiveMap?"#define USE_EMISSIVEMAP":"",nt.anisotropy?"#define USE_ANISOTROPY":"",nt.anisotropyMap?"#define USE_ANISOTROPYMAP":"",nt.clearcoatMap?"#define USE_CLEARCOATMAP":"",nt.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",nt.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",nt.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",nt.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",nt.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",nt.specularMap?"#define USE_SPECULARMAP":"",nt.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",nt.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",nt.roughnessMap?"#define USE_ROUGHNESSMAP":"",nt.metalnessMap?"#define USE_METALNESSMAP":"",nt.alphaMap?"#define USE_ALPHAMAP":"",nt.alphaHash?"#define USE_ALPHAHASH":"",nt.transmission?"#define USE_TRANSMISSION":"",nt.transmissionMap?"#define USE_TRANSMISSIONMAP":"",nt.thicknessMap?"#define USE_THICKNESSMAP":"",nt.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",nt.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",nt.mapUv?"#define MAP_UV "+nt.mapUv:"",nt.alphaMapUv?"#define ALPHAMAP_UV "+nt.alphaMapUv:"",nt.lightMapUv?"#define LIGHTMAP_UV "+nt.lightMapUv:"",nt.aoMapUv?"#define AOMAP_UV "+nt.aoMapUv:"",nt.emissiveMapUv?"#define EMISSIVEMAP_UV "+nt.emissiveMapUv:"",nt.bumpMapUv?"#define BUMPMAP_UV "+nt.bumpMapUv:"",nt.normalMapUv?"#define NORMALMAP_UV "+nt.normalMapUv:"",nt.displacementMapUv?"#define DISPLACEMENTMAP_UV "+nt.displacementMapUv:"",nt.metalnessMapUv?"#define METALNESSMAP_UV "+nt.metalnessMapUv:"",nt.roughnessMapUv?"#define ROUGHNESSMAP_UV "+nt.roughnessMapUv:"",nt.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+nt.anisotropyMapUv:"",nt.clearcoatMapUv?"#define CLEARCOATMAP_UV "+nt.clearcoatMapUv:"",nt.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+nt.clearcoatNormalMapUv:"",nt.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+nt.clearcoatRoughnessMapUv:"",nt.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+nt.diffuseRoughnessMapUv:"",nt.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+nt.iridescenceMapUv:"",nt.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+nt.iridescenceThicknessMapUv:"",nt.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+nt.sheenColorMapUv:"",nt.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+nt.sheenRoughnessMapUv:"",nt.specularMapUv?"#define SPECULARMAP_UV "+nt.specularMapUv:"",nt.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+nt.specularColorMapUv:"",nt.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+nt.specularIntensityMapUv:"",nt.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+nt.transmissionMapUv:"",nt.thicknessMapUv?"#define THICKNESSMAP_UV "+nt.thicknessMapUv:"",nt.vertexTangents&&nt.flatShading===!1?"#define USE_TANGENT":"",nt.vertexNormals?"#define HAS_NORMAL":"",nt.vertexColors?"#define USE_COLOR":"",nt.vertexAlphas?"#define USE_COLOR_ALPHA":"",nt.vertexUv1s?"#define USE_UV1":"",nt.vertexUv2s?"#define USE_UV2":"",nt.vertexUv3s?"#define USE_UV3":"",nt.pointsUvs?"#define USE_POINTS_UV":"",nt.flatShading?"#define FLAT_SHADED":"",nt.skinning?"#define USE_SKINNING":"",nt.morphTargets?"#define USE_MORPHTARGETS":"",nt.morphNormals&&nt.flatShading===!1?"#define USE_MORPHNORMALS":"",nt.morphColors?"#define USE_MORPHCOLORS":"",nt.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+nt.morphTextureStride:"",nt.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+nt.morphTargetsCount:"",nt.doubleSided?"#define DOUBLE_SIDED":"",nt.flipSided?"#define FLIP_SIDED":"",nt.shadowMapEnabled?"#define USE_SHADOWMAP":"",nt.shadowMapEnabled?"#define "+lt:"",nt.sizeAttenuation?"#define USE_SIZEATTENUATION":"",nt.numLightProbes>0?"#define USE_LIGHT_PROBES":"",nt.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",nt.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(cr).join(`
`),ft=[vh(nt),"#define SHADER_TYPE "+nt.shaderType,"#define SHADER_NAME "+nt.shaderName,pt,nt.useFog&&nt.fog?"#define USE_FOG":"",nt.useFog&&nt.fogExp2?"#define FOG_EXP2":"",nt.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",nt.map?"#define USE_MAP":"",nt.matcap?"#define USE_MATCAP":"",nt.envMap?"#define USE_ENVMAP":"",nt.envMap?"#define "+ct:"",nt.envMap?"#define "+ht:"",nt.envMap?"#define "+dt:"",nt.envMapPMREM?"#define ENVMAP_MAX_LOD "+nt.envMapMaxLod+".0":"",nt.envMapPMREM?"#define ENVMAP_SIZE "+nt.envMapSize+".0":"",nt.lightMap?"#define USE_LIGHTMAP":"",nt.aoMap?"#define USE_AOMAP":"",nt.bumpMap?"#define USE_BUMPMAP":"",nt.normalMap?"#define USE_NORMALMAP":"",nt.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",nt.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",nt.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",nt.emissiveMap?"#define USE_EMISSIVEMAP":"",nt.anisotropy?"#define USE_ANISOTROPY":"",nt.anisotropyMap?"#define USE_ANISOTROPYMAP":"",nt.clearcoat?"#define USE_CLEARCOAT":"",nt.clearcoatMap?"#define USE_CLEARCOATMAP":"",nt.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",nt.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",nt.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",nt.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",nt.dispersion?"#define USE_DISPERSION":"",nt.retroreflection?"#define USE_RETROREFLECTION":"",nt.iridescence?"#define USE_IRIDESCENCE":"",nt.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",nt.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",nt.specularMap?"#define USE_SPECULARMAP":"",nt.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",nt.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",nt.roughnessMap?"#define USE_ROUGHNESSMAP":"",nt.metalnessMap?"#define USE_METALNESSMAP":"",nt.alphaMap?"#define USE_ALPHAMAP":"",nt.alphaTest?"#define USE_ALPHATEST":"",nt.alphaHash?"#define USE_ALPHAHASH":"",nt.sheen?"#define USE_SHEEN":"",nt.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",nt.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",nt.transmission?"#define USE_TRANSMISSION":"",nt.transmissionMap?"#define USE_TRANSMISSIONMAP":"",nt.thicknessMap?"#define USE_THICKNESSMAP":"",nt.vertexTangents&&nt.flatShading===!1?"#define USE_TANGENT":"",nt.vertexColors||nt.instancingColor?"#define USE_COLOR":"",nt.vertexAlphas||nt.batchingColor?"#define USE_COLOR_ALPHA":"",nt.vertexUv1s?"#define USE_UV1":"",nt.vertexUv2s?"#define USE_UV2":"",nt.vertexUv3s?"#define USE_UV3":"",nt.pointsUvs?"#define USE_POINTS_UV":"",nt.gradientMap?"#define USE_GRADIENTMAP":"",nt.flatShading?"#define FLAT_SHADED":"",nt.doubleSided?"#define DOUBLE_SIDED":"",nt.flipSided?"#define FLIP_SIDED":"",nt.shadowMapEnabled?"#define USE_SHADOWMAP":"",nt.shadowMapEnabled?"#define "+lt:"",nt.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",nt.numLightProbes>0?"#define USE_LIGHT_PROBES":"",nt.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",nt.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",nt.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",nt.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",nt.toneMapping!==R?"#define TONE_MAPPING":"",nt.toneMapping!==R?En.tonemapping_pars_fragment:"",nt.toneMapping!==R?Ym("toneMapping",nt.toneMapping):"",nt.dithering?"#define DITHERING":"",nt.opaque?"#define OPAQUE":"",En.colorspace_pars_fragment,Xm("linearToOutputTexel",nt.outputColorSpace),Zm(),nt.useDepthPacking?"#define DEPTH_PACKING "+nt.depthPacking:"",`
`].filter(cr).join(`
`);if(at=el(at),at=gh(at,nt),at=_h(at,nt),ot=el(ot),ot=gh(ot,nt),ot=_h(ot,nt),at=xh(at),ot=xh(ot),nt.isRawShaderMaterial!==!0)mt=`#version 300 es
`,Mt=[ut,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+Mt,ft=["#define varying in",nt.glslVersion===Io?"":"layout(location = 0) out highp vec4 pc_fragColor;",nt.glslVersion===Io?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+ft;let Tt=mt+Mt+at,Et=mt+ft+ot,bt=fh(st,st.VERTEX_SHADER,Tt),At=fh(st,st.FRAGMENT_SHADER,Et);if(st.attachShader(vt,bt),st.attachShader(vt,At),nt.index0AttributeName!==void 0)st.bindAttribLocation(vt,0,nt.index0AttributeName);else if(nt.hasPositionAttribute===!0)st.bindAttribLocation(vt,0,"position");st.linkProgram(vt);function It(kt){if(tt.debug.checkShaderErrors){let Lt=st.getProgramInfoLog(vt)||"",zt=st.getShaderInfoLog(bt)||"",Kt=st.getShaderInfoLog(At)||"",Rt=Lt.trim(),qt=zt.trim(),Zt=Kt.trim(),Ot=!0,Ye=!0;if(st.getProgramParameter(vt,st.LINK_STATUS)===!1)if(Ot=!1,typeof tt.debug.onShaderError==="function")tt.debug.onShaderError(st,vt,bt,At);else{let Wt=mh(st,bt,"vertex"),$t=mh(st,At,"fragment");vn("WebGLProgram: Shader Error "+st.getError()+" - VALIDATE_STATUS "+st.getProgramParameter(vt,st.VALIDATE_STATUS)+`

Material Name: `+kt.name+`
Material Type: `+kt.type+`

Program Info Log: `+Rt+`
`+Wt+`
`+$t)}else if(Rt!=="")fn("WebGLProgram: Program Info Log:",Rt);else if(qt===""||Zt==="")Ye=!1;if(Ye)kt.diagnostics={runnable:Ot,programLog:Rt,vertexShader:{log:qt,prefix:Mt},fragmentShader:{log:Zt,prefix:ft}}}st.deleteShader(bt),st.deleteShader(At),gt=new hr(st,vt),yt=Km(st,vt)}let gt;this.getUniforms=function(){if(gt===void 0)It(this);return gt};let yt;this.getAttributes=function(){if(yt===void 0)It(this);return yt};let Nt=nt.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(Nt===!1)Nt=st.getProgramParameter(vt,km);return Nt},this.destroy=function(){it.releaseStatesOfProgram(this),st.deleteProgram(vt),this.program=void 0},this.type=nt.shaderType,this.name=nt.shaderName,this.id=Hm++,this.cacheKey=et,this.usedTimes=1,this.program=vt,this.vertexShader=bt,this.fragmentShader=At,this}var cg=0;class Oh{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(tt,et,nt){let it=this._getShaderCacheForMaterial(tt);if(it.has(et)===!1)it.add(et),et.usedTimes++;if(it.has(nt)===!1)it.add(nt),nt.usedTimes++;return this}remove(tt){let et=this.materialCache.get(tt);for(let nt of et)if(nt.usedTimes--,nt.usedTimes===0)this.shaderCache.delete(nt.code);return this.materialCache.delete(tt),this}getVertexShaderStage(tt){return this._getShaderStage(tt.vertexShader)}getFragmentShaderStage(tt){return this._getShaderStage(tt.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(tt){let et=this.materialCache,nt=et.get(tt);if(nt===void 0)nt=new Set,et.set(tt,nt);return nt}_getShaderStage(tt){let et=this.shaderCache,nt=et.get(tt);if(nt===void 0)nt=new Bh(tt),et.set(tt,nt);return nt}}class Bh{constructor(tt){this.id=cg++,this.code=tt,this.usedTimes=0}}function hg(tt){return tt===fs||tt===Yr||tt===Zr}function ug(tt,et,nt,it,st,rt){let at=new Kr,ot=new Oh,lt=new Set,ct=[],ht=new Map,dt=it.logarithmicDepthBuffer,ut={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function pt(gt){if(lt.add(gt),gt===0)return"uv";return`uv${gt}`}function vt(gt,yt,Nt,kt,Lt,zt){let Kt=kt.fog,Rt=Lt.geometry,qt=gt.isMeshStandardMaterial||gt.isMeshLambertMaterial||gt.isMeshPhongMaterial?kt.environment:null,Zt=gt.isMeshStandardMaterial||gt.isMeshLambertMaterial&&!gt.envMap||gt.isMeshPhongMaterial&&!gt.envMap,Ot=et.get(gt.envMap||qt,Zt),Ye=ut[gt.type],Wt=it.precision;if(gt.precision!==null){if(Wt=it.getMaxPrecision(gt.precision),Wt!==gt.precision)fn("WebGLProgram.getParameters:",gt.precision,"not supported, using",Wt,"instead.")}let $t=Rt.morphAttributes.position||Rt.morphAttributes.normal||Rt.morphAttributes.color,Ve=$t!==void 0?$t.length:0,hn=0;if(Rt.morphAttributes.position!==void 0)hn=1;if(Rt.morphAttributes.normal!==void 0)hn=2;if(Rt.morphAttributes.color!==void 0)hn=3;let Yt,We,ln,gn;if(Ye){let nn=Pi[Ye];Yt=nn.vertexShader,We=nn.fragmentShader}else{Yt=gt.vertexShader,We=gt.fragmentShader;let nn=ot.getVertexShaderStage(gt),Un=ot.getFragmentShaderStage(gt);ot.update(gt,nn,Un),ln=nn.id,gn=Un.id}let _n=tt.getRenderTarget(),cn=tt.state.buffers.depth.getReversed(),Nn=Lt.isInstancedMesh===!0,An=Lt.isBatchedMesh===!0,bn=!!gt.map,Gn=!!gt.matcap,In=!!Ot,Hn=In&&Ot.isPMREMTexture===!0,Wn=!!gt.aoMap,ci=!!gt.lightMap,di=!!gt.bumpMap&&gt.wireframe===!1,Vn=!!gt.normalMap,ti=!!gt.displacementMap,hi=!!gt.emissiveMap,ui=!!gt.metalnessMap,xi=!!gt.roughnessMap,Pt=gt.anisotropy>0,vi=gt.clearcoat>0,Dn=gt.diffuseRoughness>0,Jn=gt.dispersion>0,je=gt.retroreflectivity>0,Bn=gt.iridescence>0,xn=gt.sheen>0,Sn=gt.transmission>0,ei=Pt&&!!gt.anisotropyMap,St=vi&&!!gt.clearcoatMap,_t=vi&&!!gt.clearcoatNormalMap,Dt=vi&&!!gt.clearcoatRoughnessMap,Qt=Dn&&!!gt.diffuseRoughnessMap,Jt=Bn&&!!gt.iridescenceMap,qe=Bn&&!!gt.iridescenceThicknessMap,$e=xn&&!!gt.sheenColorMap,Gt=xn&&!!gt.sheenRoughnessMap,Xt=!!gt.specularMap,Ze=!!gt.specularColorMap,wt=!!gt.specularIntensityMap,Vt=Sn&&!!gt.transmissionMap,Ht=Sn&&!!gt.thicknessMap,jt=!!gt.gradientMap,Xe=!!gt.alphaMap,Qe=gt.alphaTest>0,pn=!!gt.alphaHash,dn=!!gt.extensions,en=R;if(gt.toneMapped){if(_n===null||_n.isXRRenderTarget===!0)en=tt.toneMapping}let mn=Hn?Ot.isCompressedCubeTexture?Ot.image[0].mipmaps:Ot.mipmaps:null,Tn={shaderID:Ye,shaderType:gt.type,shaderName:gt.name,vertexShader:Yt,fragmentShader:We,defines:gt.defines,customVertexShaderID:ln,customFragmentShaderID:gn,isRawShaderMaterial:gt.isRawShaderMaterial===!0,glslVersion:gt.glslVersion,precision:Wt,batching:An,batchingColor:An&&Lt._colorsTexture!==null,instancing:Nn,instancingColor:Nn&&Lt.instanceColor!==null,instancingMorph:Nn&&Lt.morphTexture!==null,outputColorSpace:_n===null?tt.outputColorSpace:_n.isXRRenderTarget===!0?_n.texture.colorSpace:s.workingColorSpace,alphaToCoverage:!!gt.alphaToCoverage,map:bn,matcap:Gn,envMap:In,envMapMode:In&&Ot.mapping,envMapPMREM:Hn,envMapMaxLod:Hn?mn.length-1:null,envMapSize:Hn?mn[0].width:null,aoMap:Wn,lightMap:ci,bumpMap:di,normalMap:Vn,displacementMap:ti,emissiveMap:hi,normalMapObjectSpace:Vn&&gt.normalMapType===Bc,normalMapTangentSpace:Vn&&gt.normalMapType===Eo,packedNormalMap:Vn&&gt.normalMapType===Eo&&hg(gt.normalMap.format),metalnessMap:ui,roughnessMap:xi,anisotropy:Pt,anisotropyMap:ei,clearcoat:vi,clearcoatMap:St,clearcoatNormalMap:_t,clearcoatRoughnessMap:Dt,diffuseRoughness:Dn,diffuseRoughnessMap:Qt,dispersion:Jn,retroreflection:je,iridescence:Bn,iridescenceMap:Jt,iridescenceThicknessMap:qe,sheen:xn,sheenColorMap:$e,sheenRoughnessMap:Gt,specularMap:Xt,specularColorMap:Ze,specularIntensityMap:wt,transmission:Sn,transmissionMap:Vt,thicknessMap:Ht,gradientMap:jt,opaque:gt.transparent===!1&&gt.blending===js&&gt.alphaToCoverage===!1,alphaMap:Xe,alphaTest:Qe,alphaHash:pn,combine:gt.combine,mapUv:bn&&pt(gt.map.channel),aoMapUv:Wn&&pt(gt.aoMap.channel),lightMapUv:ci&&pt(gt.lightMap.channel),bumpMapUv:di&&pt(gt.bumpMap.channel),normalMapUv:Vn&&pt(gt.normalMap.channel),displacementMapUv:ti&&pt(gt.displacementMap.channel),emissiveMapUv:hi&&pt(gt.emissiveMap.channel),metalnessMapUv:ui&&pt(gt.metalnessMap.channel),roughnessMapUv:xi&&pt(gt.roughnessMap.channel),anisotropyMapUv:ei&&pt(gt.anisotropyMap.channel),clearcoatMapUv:St&&pt(gt.clearcoatMap.channel),clearcoatNormalMapUv:_t&&pt(gt.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Dt&&pt(gt.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Qt&&pt(gt.diffuseRoughnessMap.channel),iridescenceMapUv:Jt&&pt(gt.iridescenceMap.channel),iridescenceThicknessMapUv:qe&&pt(gt.iridescenceThicknessMap.channel),sheenColorMapUv:$e&&pt(gt.sheenColorMap.channel),sheenRoughnessMapUv:Gt&&pt(gt.sheenRoughnessMap.channel),specularMapUv:Xt&&pt(gt.specularMap.channel),specularColorMapUv:Ze&&pt(gt.specularColorMap.channel),specularIntensityMapUv:wt&&pt(gt.specularIntensityMap.channel),transmissionMapUv:Vt&&pt(gt.transmissionMap.channel),thicknessMapUv:Ht&&pt(gt.thicknessMap.channel),alphaMapUv:Xe&&pt(gt.alphaMap.channel),vertexTangents:!!Rt.attributes.tangent&&(Vn||Pt),vertexNormals:!!Rt.attributes.normal,vertexColors:gt.vertexColors,vertexAlphas:gt.vertexColors===!0&&!!Rt.attributes.color&&Rt.attributes.color.itemSize===4,pointsUvs:Lt.isPoints===!0&&!!Rt.attributes.uv&&(bn||Xe),fog:!!Kt,useFog:gt.fog===!0,fogExp2:!!Kt&&Kt.isFogExp2,flatShading:gt.wireframe===!1&&(gt.flatShading===!0||Rt.attributes.normal===void 0&&Vn===!1&&(gt.isMeshLambertMaterial||gt.isMeshPhongMaterial||gt.isMeshStandardMaterial||gt.isMeshPhysicalMaterial)),sizeAttenuation:gt.sizeAttenuation===!0,logarithmicDepthBuffer:dt,reversedDepthBuffer:cn,skinning:Lt.isSkinnedMesh===!0,hasPositionAttribute:Rt.attributes.position!==void 0,morphTargets:Rt.morphAttributes.position!==void 0,morphNormals:Rt.morphAttributes.normal!==void 0,morphColors:Rt.morphAttributes.color!==void 0,morphTargetsCount:Ve,morphTextureStride:hn,numSunLights:yt.sun.length,numDirLights:yt.directional.length,numPointLights:yt.point.length,numSpotLights:yt.spot.length,numSpotLightMaps:yt.spotLightMap.length,numRectAreaLights:yt.rectArea.length,numHemiLights:yt.hemi.length,numSunLightShadows:yt.sunShadowMap.length,numDirLightShadows:yt.directionalShadowMap.length,numPointLightShadows:yt.pointShadowMap.length,numSpotLightShadows:yt.spotShadowMap.length,numSpotLightShadowsWithMaps:yt.numSpotLightShadowsWithMaps,numLightProbes:yt.numLightProbes,numLightProbeGrids:zt.filter((nn)=>nn.texture!==null).length,numClippingPlanes:rt.numPlanes,numClipIntersection:rt.numIntersection,dithering:gt.dithering,shadowMapEnabled:tt.shadowMap.enabled&&Nt.length>0,shadowMapType:tt.shadowMap.type,toneMapping:en,decodeVideoTexture:bn&&gt.map.isVideoTexture===!0&&s.getTransfer(gt.map.colorSpace)===o,decodeVideoTextureEmissive:hi&&gt.emissiveMap.isVideoTexture===!0&&s.getTransfer(gt.emissiveMap.colorSpace)===o,premultipliedAlpha:gt.premultipliedAlpha,doubleSided:gt.side===T,flipSided:gt.side===y,useDepthPacking:gt.depthPacking>=0,depthPacking:gt.depthPacking||0,index0AttributeName:gt.index0AttributeName,extensionClipCullDistance:dn&&gt.extensions.clipCullDistance===!0&&nt.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(dn&&gt.extensions.multiDraw===!0||An)&&nt.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:nt.has("KHR_parallel_shader_compile"),customProgramCacheKey:gt.customProgramCacheKey()};return Tn.vertexUv1s=lt.has(1),Tn.vertexUv2s=lt.has(2),Tn.vertexUv3s=lt.has(3),lt.clear(),Tn}function Mt(gt){let yt=[];if(gt.shaderID)yt.push(gt.shaderID);else yt.push(gt.customVertexShaderID),yt.push(gt.customFragmentShaderID);if(gt.defines!==void 0)for(let Nt in gt.defines)yt.push(Nt),yt.push(gt.defines[Nt]);if(gt.isRawShaderMaterial===!1)ft(yt,gt),mt(yt,gt),yt.push(tt.outputColorSpace);return yt.push(gt.customProgramCacheKey),yt.join()}function ft(gt,yt){gt.push(yt.precision),gt.push(yt.outputColorSpace),gt.push(yt.envMapMode),gt.push(yt.envMapPMREM),gt.push(yt.envMapMaxLod),gt.push(yt.envMapSize),gt.push(yt.mapUv),gt.push(yt.alphaMapUv),gt.push(yt.lightMapUv),gt.push(yt.aoMapUv),gt.push(yt.bumpMapUv),gt.push(yt.normalMapUv),gt.push(yt.displacementMapUv),gt.push(yt.emissiveMapUv),gt.push(yt.metalnessMapUv),gt.push(yt.roughnessMapUv),gt.push(yt.anisotropyMapUv),gt.push(yt.clearcoatMapUv),gt.push(yt.clearcoatNormalMapUv),gt.push(yt.clearcoatRoughnessMapUv),gt.push(yt.diffuseRoughnessMapUv),gt.push(yt.iridescenceMapUv),gt.push(yt.iridescenceThicknessMapUv),gt.push(yt.sheenColorMapUv),gt.push(yt.sheenRoughnessMapUv),gt.push(yt.specularMapUv),gt.push(yt.specularColorMapUv),gt.push(yt.specularIntensityMapUv),gt.push(yt.transmissionMapUv),gt.push(yt.thicknessMapUv),gt.push(yt.combine),gt.push(yt.fogExp2),gt.push(yt.sizeAttenuation),gt.push(yt.morphTargetsCount),gt.push(yt.numSunLights),gt.push(yt.numDirLights),gt.push(yt.numPointLights),gt.push(yt.numSpotLights),gt.push(yt.numSpotLightMaps),gt.push(yt.numHemiLights),gt.push(yt.numRectAreaLights),gt.push(yt.numSunLightShadows),gt.push(yt.numDirLightShadows),gt.push(yt.numPointLightShadows),gt.push(yt.numSpotLightShadows),gt.push(yt.numSpotLightShadowsWithMaps),gt.push(yt.numLightProbes),gt.push(yt.numLightProbeGrids),gt.push(yt.shadowMapType),gt.push(yt.toneMapping),gt.push(yt.numClippingPlanes),gt.push(yt.numClipIntersection),gt.push(yt.depthPacking)}function mt(gt,yt){if(at.disableAll(),yt.instancing)at.enable(0);if(yt.instancingColor)at.enable(1);if(yt.instancingMorph)at.enable(2);if(yt.matcap)at.enable(3);if(yt.envMap)at.enable(4);if(yt.normalMapObjectSpace)at.enable(5);if(yt.normalMapTangentSpace)at.enable(6);if(yt.clearcoat)at.enable(7);if(yt.iridescence)at.enable(8);if(yt.alphaTest)at.enable(9);if(yt.vertexColors)at.enable(10);if(yt.vertexAlphas)at.enable(11);if(yt.vertexUv1s)at.enable(12);if(yt.vertexUv2s)at.enable(13);if(yt.vertexUv3s)at.enable(14);if(yt.vertexTangents)at.enable(15);if(yt.anisotropy)at.enable(16);if(yt.alphaHash)at.enable(17);if(yt.batching)at.enable(18);if(yt.dispersion)at.enable(19);if(yt.retroreflection)at.enable(24);if(yt.diffuseRoughness)at.enable(25);if(yt.batchingColor)at.enable(20);if(yt.gradientMap)at.enable(21);if(yt.packedNormalMap)at.enable(22);if(yt.vertexNormals)at.enable(23);if(gt.push(at.mask),at.disableAll(),yt.fog)at.enable(0);if(yt.useFog)at.enable(1);if(yt.flatShading)at.enable(2);if(yt.logarithmicDepthBuffer)at.enable(3);if(yt.reversedDepthBuffer)at.enable(4);if(yt.skinning)at.enable(5);if(yt.morphTargets)at.enable(6);if(yt.morphNormals)at.enable(7);if(yt.morphColors)at.enable(8);if(yt.premultipliedAlpha)at.enable(9);if(yt.shadowMapEnabled)at.enable(10);if(yt.doubleSided)at.enable(11);if(yt.flipSided)at.enable(12);if(yt.useDepthPacking)at.enable(13);if(yt.dithering)at.enable(14);if(yt.transmission)at.enable(15);if(yt.sheen)at.enable(16);if(yt.opaque)at.enable(17);if(yt.pointsUvs)at.enable(18);if(yt.decodeVideoTexture)at.enable(19);if(yt.decodeVideoTextureEmissive)at.enable(20);if(yt.alphaToCoverage)at.enable(21);if(yt.numLightProbeGrids>0)at.enable(22);if(yt.hasPositionAttribute)at.enable(23);gt.push(at.mask)}function Tt(gt){let yt=ut[gt.type],Nt;if(yt){let kt=Pi[yt];Nt=z.clone(kt.uniforms)}else Nt=gt.uniforms;return Nt}function Et(gt,yt){let Nt=ht.get(yt);if(Nt!==void 0)++Nt.usedTimes;else Nt=new lg(tt,yt,gt,st),ct.push(Nt),ht.set(yt,Nt);return Nt}function bt(gt){if(--gt.usedTimes===0){let yt=ct.indexOf(gt);ct[yt]=ct[ct.length-1],ct.pop(),ht.delete(gt.cacheKey),gt.destroy()}}function At(gt){ot.remove(gt)}function It(){ot.dispose()}return{getParameters:vt,getProgramCacheKey:Mt,getUniforms:Tt,acquireProgram:Et,releaseProgram:bt,releaseShaderCache:At,programs:ct,dispose:It}}function dg(){let tt=new WeakMap;function et(at){return tt.has(at)}function nt(at){let ot=tt.get(at);if(ot===void 0)ot={},tt.set(at,ot);return ot}function it(at){tt.delete(at)}function st(at,ot,lt){tt.get(at)[ot]=lt}function rt(){tt=new WeakMap}return{has:et,get:nt,remove:it,update:st,dispose:rt}}function fg(tt,et){if(tt.groupOrder!==et.groupOrder)return tt.groupOrder-et.groupOrder;else if(tt.renderOrder!==et.renderOrder)return tt.renderOrder-et.renderOrder;else if(tt.material.id!==et.material.id)return tt.material.id-et.material.id;else if(tt.materialVariant!==et.materialVariant)return tt.materialVariant-et.materialVariant;else if(tt.z!==et.z)return tt.z-et.z;else return tt.id-et.id}function yh(tt,et){if(tt.groupOrder!==et.groupOrder)return tt.groupOrder-et.groupOrder;else if(tt.renderOrder!==et.renderOrder)return tt.renderOrder-et.renderOrder;else if(tt.z!==et.z)return et.z-tt.z;else return tt.id-et.id}function Sh(){let tt=[],et=0,nt=[],it=[],st=[];function rt(){et=0,nt.length=0,it.length=0,st.length=0}function at(ut){let pt=0;if(ut.isInstancedMesh)pt+=2;if(ut.isSkinnedMesh)pt+=1;return pt}function ot(ut,pt,vt,Mt,ft,mt){let Tt=tt[et];if(Tt===void 0)Tt={id:ut.id,object:ut,geometry:pt,material:vt,materialVariant:at(ut),groupOrder:Mt,renderOrder:ut.renderOrder,z:ft,group:mt},tt[et]=Tt;else Tt.id=ut.id,Tt.object=ut,Tt.geometry=pt,Tt.material=vt,Tt.materialVariant=at(ut),Tt.groupOrder=Mt,Tt.renderOrder=ut.renderOrder,Tt.z=ft,Tt.group=mt;return et++,Tt}function lt(ut,pt,vt,Mt,ft,mt,Tt){if(Tt.reversedDepth===!0)ft=-ft;let Et=ot(ut,pt,vt,Mt,ft,mt);if(vt.transmission>0)it.push(Et);else if(vt.transparent===!0)st.push(Et);else nt.push(Et)}function ct(ut,pt,vt,Mt,ft,mt){let Tt=ot(ut,pt,vt,Mt,ft,mt);if(vt.transmission>0)it.unshift(Tt);else if(vt.transparent===!0)st.unshift(Tt);else nt.unshift(Tt)}function ht(ut,pt){if(nt.length>1)nt.sort(ut||fg);if(it.length>1)it.sort(pt||yh);if(st.length>1)st.sort(pt||yh)}function dt(){for(let ut=et,pt=tt.length;ut<pt;ut++){let vt=tt[ut];if(vt.id===null)break;vt.id=null,vt.object=null,vt.geometry=null,vt.material=null,vt.group=null}}return{opaque:nt,transmissive:it,transparent:st,init:rt,push:lt,unshift:ct,finish:dt,sort:ht}}function pg(){let tt=new WeakMap;function et(it,st){let rt=tt.get(it),at;if(rt===void 0)at=new Sh,tt.set(it,[at]);else if(st>=rt.length)at=new Sh,rt.push(at);else at=rt[st];return at}function nt(){tt=new WeakMap}return{get:et,dispose:nt}}function mg(){let tt={};return{get:function(et){if(tt[et.id]!==void 0)return tt[et.id];let nt;switch(et.type){case"SunLight":case"DirectionalLight":nt={direction:new e,color:new t};break;case"SpotLight":nt={position:new e,direction:new e,color:new t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":nt={position:new e,color:new t,distance:0,decay:0};break;case"HemisphereLight":nt={direction:new e,skyColor:new t,groundColor:new t};break;case"RectAreaLight":nt={color:new t,position:new e,halfWidth:new e,halfHeight:new e};break}return tt[et.id]=nt,nt}}}function gg(){let tt={};return{get:function(et){if(tt[et.id]!==void 0)return tt[et.id];let nt;switch(et.type){case"SunLight":case"DirectionalLight":nt={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new n};break;case"SpotLight":nt={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new n};break;case"PointLight":nt={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new n,shadowCameraNear:1,shadowCameraFar:1000};break}return tt[et.id]=nt,nt}}}var _g=0;function xg(tt,et){return(et.castShadow?2:0)-(tt.castShadow?2:0)+(et.map?1:0)-(tt.map?1:0)}function vg(tt){let et=new mg,nt=gg(),it={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let ct=0;ct<9;ct++)it.probe.push(new e);let st=new e,rt=new i,at=new i;function ot(ct){let ht=0,dt=0,ut=0;for(let zt=0;zt<9;zt++)it.probe[zt].set(0,0,0);let pt=0,vt=0,Mt=0,ft=0,mt=0,Tt=0,Et=0,bt=0,At=0,It=0,gt=0,yt=0,Nt=0,kt=0;ct.sort(xg);for(let zt=0,Kt=ct.length;zt<Kt;zt++){let Rt=ct[zt],{color:qt,intensity:Zt,distance:Ot}=Rt,Ye=null;if(Rt.shadow&&Rt.shadow.map)if(Rt.shadow.map.texture.format===fs)Ye=Rt.shadow.map.texture;else Ye=Rt.shadow.map.depthTexture||Rt.shadow.map.texture;if(Rt.isAmbientLight)ht+=qt.r*Zt,dt+=qt.g*Zt,ut+=qt.b*Zt;else if(Rt.isLightProbe){for(let Wt=0;Wt<9;Wt++)it.probe[Wt].addScaledVector(Rt.sh.coefficients[Wt],Zt);kt++}else if(Rt.isSunLight){let Wt=et.get(Rt);if(Wt.color.copy(Rt.color).multiplyScalar(Rt.intensity),Rt.castShadow){let $t=Rt.shadow,Ve=nt.get(Rt);Ve.shadowIntensity=$t.intensity,Ve.shadowBias=$t.bias,Ve.shadowNormalBias=$t.normalBias,Ve.shadowRadius=$t.radius,Ve.shadowMapSize.copy($t.mapSize).multiply($t.getFrameExtents()),it.sunShadow[vt]=Ve,it.sunShadowMap[vt]=Ye;let hn=$t.getViewportCount();for(let Yt=0;Yt<hn;Yt++)it.sunShadowMatrix[Mt+Yt]=$t.getMatrix(Yt),it.sunShadowCascade[Mt+Yt]=$t._cascadeData[Yt];Mt+=hn,vt++}it.sun[pt]=Wt,pt++}else if(Rt.isDirectionalLight){let Wt=et.get(Rt);if(Wt.color.copy(Rt.color).multiplyScalar(Rt.intensity),Rt.castShadow){let $t=Rt.shadow,Ve=nt.get(Rt);Ve.shadowIntensity=$t.intensity,Ve.shadowBias=$t.bias,Ve.shadowNormalBias=$t.normalBias,Ve.shadowRadius=$t.radius,Ve.shadowMapSize=$t.mapSize,it.directionalShadow[ft]=Ve,it.directionalShadowMap[ft]=Ye,it.directionalShadowMatrix[ft]=Rt.shadow.matrix,At++}it.directional[ft]=Wt,ft++}else if(Rt.isSpotLight){let Wt=et.get(Rt);Wt.position.setFromMatrixPosition(Rt.matrixWorld),Wt.color.copy(qt).multiplyScalar(Zt),Wt.distance=Ot,Wt.coneCos=Math.cos(Rt.angle),Wt.penumbraCos=Math.cos(Rt.angle*(1-Rt.penumbra)),Wt.decay=Rt.decay,it.spot[Tt]=Wt;let $t=Rt.shadow;if(Rt.map){if(it.spotLightMap[yt]=Rt.map,yt++,$t.updateMatrices(Rt),Rt.castShadow)Nt++}if(it.spotLightMatrix[Tt]=$t.matrix,Rt.castShadow){let Ve=nt.get(Rt);Ve.shadowIntensity=$t.intensity,Ve.shadowBias=$t.bias,Ve.shadowNormalBias=$t.normalBias,Ve.shadowRadius=$t.radius,Ve.shadowMapSize=$t.mapSize,it.spotShadow[Tt]=Ve,it.spotShadowMap[Tt]=Ye,gt++}Tt++}else if(Rt.isRectAreaLight){let Wt=et.get(Rt);Wt.color.copy(qt).multiplyScalar(Zt),Wt.halfWidth.set(Rt.width*0.5,0,0),Wt.halfHeight.set(0,Rt.height*0.5,0),it.rectArea[Et]=Wt,Et++}else if(Rt.isPointLight){let Wt=et.get(Rt);if(Wt.color.copy(Rt.color).multiplyScalar(Rt.intensity),Wt.distance=Rt.distance,Wt.decay=Rt.decay,Rt.castShadow){let $t=Rt.shadow,Ve=nt.get(Rt);Ve.shadowIntensity=$t.intensity,Ve.shadowBias=$t.bias,Ve.shadowNormalBias=$t.normalBias,Ve.shadowRadius=$t.radius,Ve.shadowMapSize=$t.mapSize,Ve.shadowCameraNear=$t.camera.near,Ve.shadowCameraFar=$t.camera.far,it.pointShadow[mt]=Ve,it.pointShadowMap[mt]=Ye,it.pointShadowMatrix[mt]=Rt.shadow.matrix,It++}it.point[mt]=Wt,mt++}else if(Rt.isHemisphereLight){let Wt=et.get(Rt);Wt.skyColor.copy(Rt.color).multiplyScalar(Zt),Wt.groundColor.copy(Rt.groundColor).multiplyScalar(Zt),it.hemi[bt]=Wt,bt++}}if(Et>0)if(tt.has("OES_texture_float_linear")===!0)it.rectAreaLTC1=tn.LTC_FLOAT_1,it.rectAreaLTC2=tn.LTC_FLOAT_2;else it.rectAreaLTC1=tn.LTC_HALF_1,it.rectAreaLTC2=tn.LTC_HALF_2;it.ambient[0]=ht,it.ambient[1]=dt,it.ambient[2]=ut;let Lt=it.hash;if(Lt.sunLength!==pt||Lt.directionalLength!==ft||Lt.pointLength!==mt||Lt.spotLength!==Tt||Lt.rectAreaLength!==Et||Lt.hemiLength!==bt||Lt.numSunShadows!==vt||Lt.numDirectionalShadows!==At||Lt.numPointShadows!==It||Lt.numSpotShadows!==gt||Lt.numSpotMaps!==yt||Lt.numLightProbes!==kt)it.sun.length=pt,it.directional.length=ft,it.spot.length=Tt,it.rectArea.length=Et,it.point.length=mt,it.hemi.length=bt,it.sunShadow.length=vt,it.sunShadowMap.length=vt,it.sunShadowMatrix.length=Mt,it.sunShadowCascade.length=Mt,it.directionalShadow.length=At,it.directionalShadowMap.length=At,it.directionalShadowMatrix.length=At,it.pointShadow.length=It,it.pointShadowMap.length=It,it.pointShadowMatrix.length=It,it.spotShadow.length=gt,it.spotShadowMap.length=gt,it.spotLightMatrix.length=gt+yt-Nt,it.spotLightMap.length=yt,it.numSpotLightShadowsWithMaps=Nt,it.numLightProbes=kt,Lt.sunLength=pt,Lt.directionalLength=ft,Lt.pointLength=mt,Lt.spotLength=Tt,Lt.rectAreaLength=Et,Lt.hemiLength=bt,Lt.numSunShadows=vt,Lt.numDirectionalShadows=At,Lt.numPointShadows=It,Lt.numSpotShadows=gt,Lt.numSpotMaps=yt,Lt.numLightProbes=kt,it.version=_g++}function lt(ct,ht){let dt=0,ut=0,pt=0,vt=0,Mt=0,ft=0,mt=ht.matrixWorldInverse;for(let Tt=0,Et=ct.length;Tt<Et;Tt++){let bt=ct[Tt];if(bt.isSunLight){let At=it.sun[dt];At.direction.setFromMatrixPosition(bt.matrixWorld),At.direction.transformDirection(mt),dt++}else if(bt.isDirectionalLight){let At=it.directional[ut];At.direction.setFromMatrixPosition(bt.matrixWorld),st.setFromMatrixPosition(bt.target.matrixWorld),At.direction.sub(st),At.direction.transformDirection(mt),ut++}else if(bt.isSpotLight){let At=it.spot[vt];At.position.setFromMatrixPosition(bt.matrixWorld),At.position.applyMatrix4(mt),At.direction.setFromMatrixPosition(bt.matrixWorld),st.setFromMatrixPosition(bt.target.matrixWorld),At.direction.sub(st),At.direction.transformDirection(mt),vt++}else if(bt.isRectAreaLight){let At=it.rectArea[Mt];At.position.setFromMatrixPosition(bt.matrixWorld),At.position.applyMatrix4(mt),at.identity(),rt.copy(bt.matrixWorld),rt.premultiply(mt),at.extractRotation(rt),At.halfWidth.set(bt.width*0.5,0,0),At.halfHeight.set(0,bt.height*0.5,0),At.halfWidth.applyMatrix4(at),At.halfHeight.applyMatrix4(at),Mt++}else if(bt.isPointLight){let At=it.point[pt];At.position.setFromMatrixPosition(bt.matrixWorld),At.position.applyMatrix4(mt),pt++}else if(bt.isHemisphereLight){let At=it.hemi[ft];At.direction.setFromMatrixPosition(bt.matrixWorld),At.direction.transformDirection(mt),ft++}}}return{setup:ot,setupView:lt,state:it}}function Mh(tt){let et=new vg(tt),nt=[],it=[],st=[];function rt(dt){ht.camera=dt,nt.length=0,it.length=0,st.length=0}function at(dt){if(dt.isLightProbeGrid)st.push(dt);else nt.push(dt)}function ot(dt){it.push(dt)}function lt(){et.setup(nt),st.sort((dt,ut)=>dt.priority-ut.priority||dt.id-ut.id)}function ct(dt){et.setupView(nt,dt)}let ht={lightsArray:nt,shadowsArray:it,lightProbeGridArray:st,camera:null,lights:et,transmissionRenderTarget:{},textureUnits:0};return{init:rt,state:ht,setupLights:lt,setupLightsView:ct,pushLight:at,pushShadow:ot}}function yg(tt){let et=new WeakMap;function nt(st,rt=0){let at=et.get(st),ot;if(at===void 0)ot=new Mh(tt),et.set(st,[ot]);else if(rt>=at.length)ot=new Mh(tt),at.push(ot);else ot=at[rt];return ot}function it(){et=new WeakMap}return{get:nt,dispose:it}}var Sg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Mg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,bg=[new e(1,0,0),new e(-1,0,0),new e(0,1,0),new e(0,-1,0),new e(0,0,1),new e(0,0,-1)],Tg=[new e(0,-1,0),new e(0,-1,0),new e(0,0,1),new e(0,0,-1),new e(0,-1,0),new e(0,-1,0)],bh=new i,lr=new e,tl=new e;function Eg(tt,et,nt){let it=new us,st=new n,rt=new n,at=new Fn,ot=new Go,lt=new ko,ct={},ht=nt.maxTextureSize,dt={[H]:y,[y]:H,[T]:T},ut=new u({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new n},radius:{value:4}},vertexShader:Sg,fragmentShader:Mg}),pt=ut.clone();pt.defines.HORIZONTAL_PASS=1;let vt=new h;vt.setAttribute("position",new d(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let Mt=new r(vt,ut),ft=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qs;let mt=this.type;this.render=function(It,gt,yt){if(ft.enabled===!1)return;if(ft.autoUpdate===!1&&ft.needsUpdate===!1)return;if(It.length===0)return;if(this.type===Re)fn("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Qs;let Nt=tt.getRenderTarget(),kt=tt.getActiveCubeFace(),Lt=tt.getActiveMipmapLevel(),zt=tt.state;if(zt.setBlending(B),zt.buffers.depth.getReversed()===!0)zt.buffers.color.setClear(0,0,0,0);else zt.buffers.color.setClear(1,1,1,1);zt.buffers.depth.setTest(!0),zt.setScissorTest(!1);let Kt=mt!==this.type;if(Kt)gt.traverse(function(Rt){if(Rt.material)if(Array.isArray(Rt.material))Rt.material.forEach((qt)=>qt.needsUpdate=!0);else Rt.material.needsUpdate=!0});for(let Rt=0,qt=It.length;Rt<qt;Rt++){let Zt=It[Rt],Ot=Zt.shadow;if(Ot===void 0){fn("WebGLShadowMap:",Zt,"has no shadow.");continue}if(Ot.autoUpdate===!1&&Ot.needsUpdate===!1)continue;st.copy(Ot.mapSize);let Ye=Ot.getFrameExtents();if(st.multiply(Ye),rt.copy(Ot.mapSize),st.x>ht||st.y>ht){if(st.x>ht)rt.x=Math.floor(ht/Ye.x),st.x=rt.x*Ye.x,Ot.mapSize.x=rt.x;if(st.y>ht)rt.y=Math.floor(ht/Ye.y),st.y=rt.y*Ye.y,Ot.mapSize.y=rt.y}let Wt=tt.state.buffers.depth.getReversed();if(Ot.camera._reversedDepth=Wt,Ot.map===null||Kt===!0){if(Ot.map!==null){if(Ot.map.depthTexture!==null)Ot.map.depthTexture.dispose(),Ot.map.depthTexture=null;Ot.map.dispose()}if(this.type===Ns){if(Zt.isPointLight){fn("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Ot.map=new _(st.x,st.y,{format:fs,type:S,minFilter:p,magFilter:p,generateMipmaps:!1}),Ot.map.texture.name=Zt.name+".shadowMap",Ot.map.depthTexture=new ji(st.x,st.y,ki),Ot.map.depthTexture.name=Zt.name+".shadowMapDepth",Ot.map.depthTexture.format=Fs,Ot.map.depthTexture.compareFunction=null,Ot.map.depthTexture.minFilter=N,Ot.map.depthTexture.magFilter=N}else{if(Zt.isPointLight)Ot.map=new la(st.x),Ot.map.depthTexture=new na(st.x,Ki);else Ot.map=new _(st.x,st.y),Ot.map.depthTexture=new ji(st.x,st.y,Ki);if(Ot.map.depthTexture.name=Zt.name+".shadowMap",Ot.map.depthTexture.format=Fs,this.type===Qs)Ot.map.depthTexture.compareFunction=Wt?Ro:wo,Ot.map.depthTexture.minFilter=p,Ot.map.depthTexture.magFilter=p;else Ot.map.depthTexture.compareFunction=null,Ot.map.depthTexture.minFilter=N,Ot.map.depthTexture.magFilter=N}Ot.camera.updateProjectionMatrix()}if(Ot.map.isWebGLCubeRenderTarget!==!0&&(Ot.map.width!==st.x||Ot.map.height!==st.y))Ot.map.setSize(st.x,st.y);let $t=Ot.map.isWebGLCubeRenderTarget?6:Ot.getViewportCount();if(Zt.isPointLight!==!0)Ot.updateMatrices(Zt,yt);let Ve=(Ot.camera.layers.mask&4294967294)!==0?Ot.camera.layers:yt.layers;for(let hn=0;hn<$t;hn++){let Yt=Ot.getCamera(hn);if(Zt.isPointLight){let{camera:We,matrix:ln}=Ot,gn=Zt.distance||We.far;if(gn!==We.far)We.far=gn,We.updateProjectionMatrix();lr.setFromMatrixPosition(Zt.matrixWorld),We.position.copy(lr),tl.copy(We.position),tl.add(bg[hn]),We.up.copy(Tg[hn]),We.lookAt(tl),We.updateMatrixWorld(),ln.makeTranslation(-lr.x,-lr.y,-lr.z),bh.multiplyMatrices(We.projectionMatrix,We.matrixWorldInverse),Ot._frustum.setFromProjectionMatrix(bh,We.coordinateSystem,We.reversedDepth)}if(Ot.map.isWebGLCubeRenderTarget)tt.setRenderTarget(Ot.map,hn),tt.clear();else{if(hn===0)tt.setRenderTarget(Ot.map),tt.clear();let We=Ot.getViewport(hn);at.set(rt.x*We.x,rt.y*We.y,rt.x*We.z,rt.y*We.w),zt.viewport(at)}it=Ot.getFrustum(hn),bt(gt,yt,Yt,Zt,Ve,this.type)}if(Ot.isPointLightShadow!==!0&&this.type===Ns)Tt(Ot,yt);Ot.needsUpdate=!1}mt=this.type,ft.needsUpdate=!1,tt.setRenderTarget(Nt,kt,Lt)};function Tt(It,gt){let yt=et.update(Mt);if(ut.defines.VSM_SAMPLES!==It.blurSamples)ut.defines.VSM_SAMPLES=It.blurSamples,pt.defines.VSM_SAMPLES=It.blurSamples,ut.needsUpdate=!0,pt.needsUpdate=!0;if(It.mapPass===null)It.mapPass=new _(st.x,st.y,{format:fs,type:S});else if(It.mapPass.width!==It.map.width||It.mapPass.height!==It.map.height)It.mapPass.setSize(It.map.width,It.map.height);ut.uniforms.shadow_pass.value=It.map.depthTexture,ut.uniforms.resolution.value.set(It.map.width,It.map.height),ut.uniforms.radius.value=It.radius,tt.setRenderTarget(It.mapPass),tt.clear(),tt.renderBufferDirect(gt,null,yt,ut,Mt,null),pt.uniforms.shadow_pass.value=It.mapPass.texture,pt.uniforms.resolution.value.set(It.map.width,It.map.height),pt.uniforms.radius.value=It.radius,tt.setRenderTarget(It.map),tt.clear(),tt.renderBufferDirect(gt,null,yt,pt,Mt,null)}function Et(It,gt,yt,Nt){let kt=null,Lt=yt.isPointLight===!0?It.customDistanceMaterial:It.customDepthMaterial;if(Lt!==void 0)kt=Lt;else if(kt=yt.isPointLight===!0?lt:ot,tt.localClippingEnabled&&gt.clipShadows===!0&&Array.isArray(gt.clippingPlanes)&&gt.clippingPlanes.length!==0||gt.displacementMap&&gt.displacementScale!==0||gt.alphaMap&&gt.alphaTest>0||gt.map&&gt.alphaTest>0||gt.alphaToCoverage===!0){let zt=kt.uuid,Kt=gt.uuid,Rt=ct[zt];if(Rt===void 0)Rt={},ct[zt]=Rt;let qt=Rt[Kt];if(qt===void 0)qt=kt.clone(),Rt[Kt]=qt,gt.addEventListener("dispose",At);kt=qt}if(kt.visible=gt.visible,kt.wireframe=gt.wireframe,Nt===Ns)kt.side=gt.shadowSide!==null?gt.shadowSide:gt.side;else kt.side=gt.shadowSide!==null?gt.shadowSide:dt[gt.side];if(kt.alphaMap=gt.alphaMap,kt.alphaTest=gt.alphaToCoverage===!0?0.5:gt.alphaTest,kt.map=gt.map,kt.clipShadows=gt.clipShadows,kt.clippingPlanes=gt.clippingPlanes,kt.clipIntersection=gt.clipIntersection,kt.displacementMap=gt.displacementMap,kt.displacementScale=gt.displacementScale,kt.displacementBias=gt.displacementBias,kt.wireframeLinewidth=gt.wireframeLinewidth,kt.linewidth=gt.linewidth,yt.isPointLight===!0&&kt.isMeshDistanceMaterial===!0){let zt=tt.properties.get(kt);zt.light=yt}return kt}function bt(It,gt,yt,Nt,kt,Lt){if(It.visible===!1)return;if(It.layers.test(kt)&&(It.isMesh||It.isLine||It.isPoints)){if((It.castShadow||It.receiveShadow&&Lt===Ns)&&(!It.frustumCulled||It.intersectsFrustum(it))){It.modelViewMatrix.multiplyMatrices(yt.matrixWorldInverse,It.matrixWorld);let Rt=et.update(It),qt=It.material;if(Array.isArray(qt)){let Zt=Rt.groups;for(let Ot=0,Ye=Zt.length;Ot<Ye;Ot++){let Wt=Zt[Ot],$t=qt[Wt.materialIndex];if($t&&$t.visible){let Ve=Et(It,$t,Nt,Lt);It.onBeforeShadow(tt,It,gt,yt,Rt,Ve,Wt),tt.renderBufferDirect(yt,null,Rt,Ve,It,Wt),It.onAfterShadow(tt,It,gt,yt,Rt,Ve,Wt)}}}else if(qt.visible){let Zt=Et(It,qt,Nt,Lt);It.onBeforeShadow(tt,It,gt,yt,Rt,Zt,null),tt.renderBufferDirect(yt,null,Rt,Zt,It,null),It.onAfterShadow(tt,It,gt,yt,Rt,Zt,null)}}}let Kt=It.children;for(let Rt=0,qt=Kt.length;Rt<qt;Rt++)bt(Kt[Rt],gt,yt,Nt,kt,Lt)}function At(It){It.target.removeEventListener("dispose",At);for(let yt in ct){let Nt=ct[yt],kt=It.target.uuid;if(kt in Nt)Nt[kt].dispose(),delete Nt[kt]}}}function Ag(tt,et){function nt(){let wt=!1,Vt=new Fn,Ht=null,jt=new Fn(0,0,0,0);return{setMask:function(Xe){if(Ht!==Xe&&!wt)tt.colorMask(Xe,Xe,Xe,Xe),Ht=Xe},setLocked:function(Xe){wt=Xe},setClear:function(Xe,Qe,pn,dn,en){if(en===!0)Xe*=dn,Qe*=dn,pn*=dn;if(Vt.set(Xe,Qe,pn,dn),jt.equals(Vt)===!1)tt.clearColor(Xe,Qe,pn,dn),jt.copy(Vt)},reset:function(){wt=!1,Ht=null,jt.set(-1,0,0,0)}}}function it(){let wt=!1,Vt=!1,Ht=null,jt=null,Xe=null;return{setReversed:function(Qe){if(Vt!==Qe){let pn=et.get("EXT_clip_control");if(Qe)pn.clipControlEXT(pn.LOWER_LEFT_EXT,pn.ZERO_TO_ONE_EXT);else pn.clipControlEXT(pn.LOWER_LEFT_EXT,pn.NEGATIVE_ONE_TO_ONE_EXT);Vt=Qe;let dn=Xe;Xe=null,this.setClear(dn)}},getReversed:function(){return Vt},setTest:function(Qe){if(Qe)cn(tt.DEPTH_TEST);else Nn(tt.DEPTH_TEST)},setMask:function(Qe){if(Ht!==Qe&&!wt)tt.depthMask(Qe),Ht=Qe},setFunc:function(Qe){if(Vt)Qe=Yc[Qe];if(jt!==Qe){switch(Qe){case Sc:tt.depthFunc(tt.NEVER);break;case Mc:tt.depthFunc(tt.ALWAYS);break;case bc:tt.depthFunc(tt.LESS);break;case ka:tt.depthFunc(tt.LEQUAL);break;case Tc:tt.depthFunc(tt.EQUAL);break;case Ec:tt.depthFunc(tt.GEQUAL);break;case Ac:tt.depthFunc(tt.GREATER);break;case wc:tt.depthFunc(tt.NOTEQUAL);break;default:tt.depthFunc(tt.LEQUAL)}jt=Qe}},setLocked:function(Qe){wt=Qe},setClear:function(Qe){if(Xe!==Qe){if(Xe=Qe,Vt)Qe=1-Qe;tt.clearDepth(Qe)}},reset:function(){wt=!1,Ht=null,jt=null,Xe=null,Vt=!1}}}function st(){let wt=!1,Vt=null,Ht=null,jt=null,Xe=null,Qe=null,pn=null,dn=null,en=null;return{setTest:function(mn){if(!wt)if(mn)cn(tt.STENCIL_TEST);else Nn(tt.STENCIL_TEST)},setMask:function(mn){if(Vt!==mn&&!wt)tt.stencilMask(mn),Vt=mn},setFunc:function(mn,Tn,nn){if(Ht!==mn||jt!==Tn||Xe!==nn)tt.stencilFunc(mn,Tn,nn),Ht=mn,jt=Tn,Xe=nn},setOp:function(mn,Tn,nn){if(Qe!==mn||pn!==Tn||dn!==nn)tt.stencilOp(mn,Tn,nn),Qe=mn,pn=Tn,dn=nn},setLocked:function(mn){wt=mn},setClear:function(mn){if(en!==mn)tt.clearStencil(mn),en=mn},reset:function(){wt=!1,Vt=null,Ht=null,jt=null,Xe=null,Qe=null,pn=null,dn=null,en=null}}}let rt=new nt,at=new it,ot=new st,lt={},ct=new WeakMap,ht={},dt={},ut={},pt=new WeakMap,vt=[],Mt=null,ft=!1,mt=null,Tt=null,Et=null,bt=null,At=null,It=null,gt=null,yt=new t(0,0,0),Nt=0,kt=!1,Lt=null,zt=null,Kt=null,Rt=null,qt=null,Zt=tt.getParameter(tt.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Ot=!1,Ye=0,Wt=tt.getParameter(tt.VERSION);if(Wt.indexOf("WebGL")!==-1)Ye=parseFloat(/^WebGL (\d)/.exec(Wt)[1]),Ot=Ye>=1;else if(Wt.indexOf("OpenGL ES")!==-1)Ye=parseFloat(/^OpenGL ES (\d)/.exec(Wt)[1]),Ot=Ye>=2;let $t=null,Ve={},hn=tt.getParameter(tt.SCISSOR_BOX),Yt=tt.getParameter(tt.VIEWPORT),We=new Fn().fromArray(hn),ln=new Fn().fromArray(Yt);function gn(wt,Vt,Ht,jt){let Xe=new Uint8Array(4),Qe=tt.createTexture();tt.bindTexture(wt,Qe),tt.texParameteri(wt,tt.TEXTURE_MIN_FILTER,tt.NEAREST),tt.texParameteri(wt,tt.TEXTURE_MAG_FILTER,tt.NEAREST);for(let pn=0;pn<Ht;pn++)if(wt===tt.TEXTURE_3D||wt===tt.TEXTURE_2D_ARRAY)tt.texImage3D(Vt,0,tt.RGBA,1,1,jt,0,tt.RGBA,tt.UNSIGNED_BYTE,Xe);else tt.texImage2D(Vt+pn,0,tt.RGBA,1,1,0,tt.RGBA,tt.UNSIGNED_BYTE,Xe);return Qe}let _n={};_n[tt.TEXTURE_2D]=gn(tt.TEXTURE_2D,tt.TEXTURE_2D,1),_n[tt.TEXTURE_CUBE_MAP]=gn(tt.TEXTURE_CUBE_MAP,tt.TEXTURE_CUBE_MAP_POSITIVE_X,6),_n[tt.TEXTURE_2D_ARRAY]=gn(tt.TEXTURE_2D_ARRAY,tt.TEXTURE_2D_ARRAY,1,1),_n[tt.TEXTURE_3D]=gn(tt.TEXTURE_3D,tt.TEXTURE_3D,1,1),rt.setClear(0,0,0,1),at.setClear(1),ot.setClear(0),cn(tt.DEPTH_TEST),at.setFunc(ka),di(!1),Vn(Ba),cn(tt.CULL_FACE),Wn(B);function cn(wt){if(ht[wt]!==!0)tt.enable(wt),ht[wt]=!0}function Nn(wt){if(ht[wt]!==!1)tt.disable(wt),ht[wt]=!1}function An(wt,Vt){if(ut[wt]!==Vt){if(tt.bindFramebuffer(wt,Vt),ut[wt]=Vt,wt===tt.DRAW_FRAMEBUFFER)ut[tt.FRAMEBUFFER]=Vt;if(wt===tt.FRAMEBUFFER)ut[tt.DRAW_FRAMEBUFFER]=Vt;return!0}return!1}function bn(wt,Vt){let Ht=vt,jt=!1;if(wt){if(Ht=pt.get(Vt),Ht===void 0)Ht=[],pt.set(Vt,Ht);let Xe=wt.textures;if(Ht.length!==Xe.length||Ht[0]!==tt.COLOR_ATTACHMENT0){for(let Qe=0,pn=Xe.length;Qe<pn;Qe++)Ht[Qe]=tt.COLOR_ATTACHMENT0+Qe;Ht.length=Xe.length,jt=!0}}else if(Ht[0]!==tt.BACK)Ht[0]=tt.BACK,jt=!0;if(jt)tt.drawBuffers(Ht)}function Gn(wt){if(Mt!==wt)return tt.useProgram(wt),Mt=wt,!0;return!1}let In={[Ds]:tt.FUNC_ADD,[nc]:tt.FUNC_SUBTRACT,[ic]:tt.FUNC_REVERSE_SUBTRACT};In[sc]=tt.MIN,In[rc]=tt.MAX;let Hn={[ac]:tt.ZERO,[oc]:tt.ONE,[lc]:tt.SRC_COLOR,[hc]:tt.SRC_ALPHA,[gc]:tt.SRC_ALPHA_SATURATE,[pc]:tt.DST_COLOR,[dc]:tt.DST_ALPHA,[cc]:tt.ONE_MINUS_SRC_COLOR,[uc]:tt.ONE_MINUS_SRC_ALPHA,[mc]:tt.ONE_MINUS_DST_COLOR,[fc]:tt.ONE_MINUS_DST_ALPHA,[_c]:tt.CONSTANT_COLOR,[xc]:tt.ONE_MINUS_CONSTANT_COLOR,[vc]:tt.CONSTANT_ALPHA,[yc]:tt.ONE_MINUS_CONSTANT_ALPHA};function Wn(wt,Vt,Ht,jt,Xe,Qe,pn,dn,en,mn){if(wt===B){if(ft===!0)Nn(tt.BLEND),ft=!1;return}if(ft===!1)cn(tt.BLEND),ft=!0;if(wt!==ec){if(wt!==mt||mn!==kt){if(Tt!==Ds||At!==Ds)tt.blendEquation(tt.FUNC_ADD),Tt=Ds,At=Ds;if(mn)switch(wt){case js:tt.blendFuncSeparate(tt.ONE,tt.ONE_MINUS_SRC_ALPHA,tt.ONE,tt.ONE_MINUS_SRC_ALPHA);break;case V:tt.blendFunc(tt.ONE,tt.ONE);break;case za:tt.blendFuncSeparate(tt.ZERO,tt.ONE_MINUS_SRC_COLOR,tt.ZERO,tt.ONE);break;case Ga:tt.blendFuncSeparate(tt.DST_COLOR,tt.ONE_MINUS_SRC_ALPHA,tt.ZERO,tt.ONE);break;default:vn("WebGLState: Invalid blending: ",wt);break}else switch(wt){case js:tt.blendFuncSeparate(tt.SRC_ALPHA,tt.ONE_MINUS_SRC_ALPHA,tt.ONE,tt.ONE_MINUS_SRC_ALPHA);break;case V:tt.blendFuncSeparate(tt.SRC_ALPHA,tt.ONE,tt.ONE,tt.ONE);break;case za:vn("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ga:vn("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:vn("WebGLState: Invalid blending: ",wt);break}Et=null,bt=null,It=null,gt=null,yt.set(0,0,0),Nt=0,mt=wt,kt=mn}return}if(Xe=Xe||Vt,Qe=Qe||Ht,pn=pn||jt,Vt!==Tt||Xe!==At)tt.blendEquationSeparate(In[Vt],In[Xe]),Tt=Vt,At=Xe;if(Ht!==Et||jt!==bt||Qe!==It||pn!==gt)tt.blendFuncSeparate(Hn[Ht],Hn[jt],Hn[Qe],Hn[pn]),Et=Ht,bt=jt,It=Qe,gt=pn;if(dn.equals(yt)===!1||en!==Nt)tt.blendColor(dn.r,dn.g,dn.b,en),yt.copy(dn),Nt=en;mt=wt,kt=!1}function ci(wt,Vt){wt.side===T?Nn(tt.CULL_FACE):cn(tt.CULL_FACE);let Ht=wt.side===y;if(Vt)Ht=!Ht;di(Ht),wt.blending===js&&wt.transparent===!1?Wn(B):Wn(wt.blending,wt.blendEquation,wt.blendSrc,wt.blendDst,wt.blendEquationAlpha,wt.blendSrcAlpha,wt.blendDstAlpha,wt.blendColor,wt.blendAlpha,wt.premultipliedAlpha),at.setFunc(wt.depthFunc),at.setTest(wt.depthTest),at.setMask(wt.depthWrite),rt.setMask(wt.colorWrite);let jt=wt.stencilWrite;if(ot.setTest(jt),jt)ot.setMask(wt.stencilWriteMask),ot.setFunc(wt.stencilFunc,wt.stencilRef,wt.stencilFuncMask),ot.setOp(wt.stencilFail,wt.stencilZFail,wt.stencilZPass);hi(wt.polygonOffset,wt.polygonOffsetFactor,wt.polygonOffsetUnits),wt.alphaToCoverage===!0?cn(tt.SAMPLE_ALPHA_TO_COVERAGE):Nn(tt.SAMPLE_ALPHA_TO_COVERAGE)}function di(wt){if(Lt!==wt){if(wt)tt.frontFace(tt.CW);else tt.frontFace(tt.CCW);Lt=wt}}function Vn(wt){if(wt!==jl){if(cn(tt.CULL_FACE),wt!==zt)if(wt===Ba)tt.cullFace(tt.BACK);else if(wt===tc)tt.cullFace(tt.FRONT);else tt.cullFace(tt.FRONT_AND_BACK)}else Nn(tt.CULL_FACE);zt=wt}function ti(wt){if(wt!==Kt){if(Ot)tt.lineWidth(wt);Kt=wt}}function hi(wt,Vt,Ht){if(wt){if(cn(tt.POLYGON_OFFSET_FILL),Rt!==Vt||qt!==Ht){if(Rt=Vt,qt=Ht,at.getReversed())Vt=-Vt,Ht=-Ht;tt.polygonOffset(Vt,Ht)}}else Nn(tt.POLYGON_OFFSET_FILL)}function ui(wt){if(wt)cn(tt.SCISSOR_TEST);else Nn(tt.SCISSOR_TEST)}function xi(wt){if(wt===void 0)wt=tt.TEXTURE0+Zt-1;if($t!==wt)tt.activeTexture(wt),$t=wt}function Pt(wt,Vt,Ht){if(Ht===void 0)if($t===null)Ht=tt.TEXTURE0+Zt-1;else Ht=$t;let jt=Ve[Ht];if(jt===void 0)jt={type:void 0,texture:void 0},Ve[Ht]=jt;if(jt.type!==wt||jt.texture!==Vt){if($t!==Ht)tt.activeTexture(Ht),$t=Ht;tt.bindTexture(wt,Vt||_n[wt]),jt.type=wt,jt.texture=Vt}}function vi(){let wt=Ve[$t];if(wt!==void 0&&wt.type!==void 0)tt.bindTexture(wt.type,null),wt.type=void 0,wt.texture=void 0}function Dn(){try{tt.compressedTexImage2D(...arguments)}catch(wt){vn("WebGLState:",wt)}}function Jn(){try{tt.compressedTexImage3D(...arguments)}catch(wt){vn("WebGLState:",wt)}}function je(){try{tt.texSubImage2D(...arguments)}catch(wt){vn("WebGLState:",wt)}}function Bn(){try{tt.texSubImage3D(...arguments)}catch(wt){vn("WebGLState:",wt)}}function xn(){try{tt.compressedTexSubImage2D(...arguments)}catch(wt){vn("WebGLState:",wt)}}function Sn(){try{tt.compressedTexSubImage3D(...arguments)}catch(wt){vn("WebGLState:",wt)}}function ei(){try{tt.texStorage2D(...arguments)}catch(wt){vn("WebGLState:",wt)}}function St(){try{tt.texStorage3D(...arguments)}catch(wt){vn("WebGLState:",wt)}}function _t(){try{tt.texImage2D(...arguments)}catch(wt){vn("WebGLState:",wt)}}function Dt(){try{tt.texImage3D(...arguments)}catch(wt){vn("WebGLState:",wt)}}function Qt(wt){if(dt[wt]!==void 0)return dt[wt];else return tt.getParameter(wt)}function Jt(wt,Vt){if(dt[wt]!==Vt)tt.pixelStorei(wt,Vt),dt[wt]=Vt}function qe(wt){if(We.equals(wt)===!1)tt.scissor(wt.x,wt.y,wt.z,wt.w),We.copy(wt)}function $e(wt){if(ln.equals(wt)===!1)tt.viewport(wt.x,wt.y,wt.z,wt.w),ln.copy(wt)}function Gt(wt,Vt){let Ht=ct.get(Vt);if(Ht===void 0)Ht=new WeakMap,ct.set(Vt,Ht);let jt=Ht.get(wt);if(jt===void 0)jt=tt.getUniformBlockIndex(Vt,wt.name),tt.uniformBlockBinding(Vt,jt,jt),Ht.set(wt,jt)}function Xt(wt,Vt,Ht){let Xe=ct.get(Vt).get(wt);if(lt[Xe]!==Ht)tt.bindBufferBase(tt.UNIFORM_BUFFER,Xe,Ht),lt[Xe]=Ht}function Ze(){tt.disable(tt.BLEND),tt.disable(tt.CULL_FACE),tt.disable(tt.DEPTH_TEST),tt.disable(tt.POLYGON_OFFSET_FILL),tt.disable(tt.SCISSOR_TEST),tt.disable(tt.STENCIL_TEST),tt.disable(tt.SAMPLE_ALPHA_TO_COVERAGE),tt.blendEquation(tt.FUNC_ADD),tt.blendFunc(tt.ONE,tt.ZERO),tt.blendFuncSeparate(tt.ONE,tt.ZERO,tt.ONE,tt.ZERO),tt.blendColor(0,0,0,0),tt.colorMask(!0,!0,!0,!0),tt.clearColor(0,0,0,0),tt.depthMask(!0),tt.depthFunc(tt.LESS),at.setReversed(!1),tt.clearDepth(1),tt.stencilMask(4294967295),tt.stencilFunc(tt.ALWAYS,0,4294967295),tt.stencilOp(tt.KEEP,tt.KEEP,tt.KEEP),tt.clearStencil(0),tt.cullFace(tt.BACK),tt.frontFace(tt.CCW),tt.polygonOffset(0,0),tt.activeTexture(tt.TEXTURE0),tt.bindFramebuffer(tt.FRAMEBUFFER,null),tt.bindFramebuffer(tt.DRAW_FRAMEBUFFER,null),tt.bindFramebuffer(tt.READ_FRAMEBUFFER,null),tt.useProgram(null),tt.lineWidth(1),tt.scissor(0,0,tt.canvas.width,tt.canvas.height),tt.viewport(0,0,tt.canvas.width,tt.canvas.height),tt.pixelStorei(tt.PACK_ALIGNMENT,4),tt.pixelStorei(tt.UNPACK_ALIGNMENT,4),tt.pixelStorei(tt.UNPACK_FLIP_Y_WEBGL,!1),tt.pixelStorei(tt.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),tt.pixelStorei(tt.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt.BROWSER_DEFAULT_WEBGL),tt.pixelStorei(tt.PACK_ROW_LENGTH,0),tt.pixelStorei(tt.PACK_SKIP_PIXELS,0),tt.pixelStorei(tt.PACK_SKIP_ROWS,0),tt.pixelStorei(tt.UNPACK_ROW_LENGTH,0),tt.pixelStorei(tt.UNPACK_IMAGE_HEIGHT,0),tt.pixelStorei(tt.UNPACK_SKIP_PIXELS,0),tt.pixelStorei(tt.UNPACK_SKIP_ROWS,0),tt.pixelStorei(tt.UNPACK_SKIP_IMAGES,0),ht={},dt={},$t=null,Ve={},ut={},lt={},pt=new WeakMap,vt=[],Mt=null,ft=!1,mt=null,Tt=null,Et=null,bt=null,At=null,It=null,gt=null,yt=new t(0,0,0),Nt=0,kt=!1,Lt=null,zt=null,Kt=null,Rt=null,qt=null,We.set(0,0,tt.canvas.width,tt.canvas.height),ln.set(0,0,tt.canvas.width,tt.canvas.height),rt.reset(),at.reset(),ot.reset()}return{buffers:{color:rt,depth:at,stencil:ot},enable:cn,disable:Nn,bindFramebuffer:An,drawBuffers:bn,useProgram:Gn,setBlending:Wn,setMaterial:ci,setFlipSided:di,setCullFace:Vn,setLineWidth:ti,setPolygonOffset:hi,setScissorTest:ui,activeTexture:xi,bindTexture:Pt,unbindTexture:vi,compressedTexImage2D:Dn,compressedTexImage3D:Jn,texImage2D:_t,texImage3D:Dt,pixelStorei:Jt,getParameter:Qt,updateUBOMapping:Gt,uniformBlockBinding:Xt,texStorage2D:ei,texStorage3D:St,texSubImage2D:je,texSubImage3D:Bn,compressedTexSubImage2D:xn,compressedTexSubImage3D:Sn,scissor:qe,viewport:$e,reset:Ze}}function wg(tt,et,nt,it,st,rt,at){let ot=et.has("WEBGL_multisampled_render_to_texture")?et.get("WEBGL_multisampled_render_to_texture"):null,lt=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),ct=new n,ht=new WeakMap,dt=new Set,ut,pt=new WeakMap,vt=new Set,Mt=new FinalizationRegistry((St)=>vt.delete(St)),ft=!1;try{ft=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(St){}function mt(St,_t){return ft?new OffscreenCanvas(St,_t):Ps("canvas")}function Tt(St,_t,Dt){let Qt=1,Jt=ei(St);if(Jt.width>Dt||Jt.height>Dt)Qt=Dt/Math.max(Jt.width,Jt.height);if(Qt<1)if(typeof HTMLImageElement<"u"&&St instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&St instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&St instanceof ImageBitmap||typeof VideoFrame<"u"&&St instanceof VideoFrame){let qe=Math.floor(Qt*Jt.width),$e=Math.floor(Qt*Jt.height);if(ut===void 0)ut=mt(qe,$e);let Gt=_t?mt(qe,$e):ut;return Gt.width=qe,Gt.height=$e,Gt.getContext("2d").drawImage(St,0,0,qe,$e),fn("WebGLRenderer: Texture has been resized from ("+Jt.width+"x"+Jt.height+") to ("+qe+"x"+$e+")."),Gt}else{if("data"in St)fn("WebGLRenderer: Image in DataTexture is too big ("+Jt.width+"x"+Jt.height+").");return St}return St}function Et(St){return St.generateMipmaps}function bt(St){tt.generateMipmap(St)}function At(St){if(St.isWebGLCubeRenderTarget)return tt.TEXTURE_CUBE_MAP;if(St.isWebGL3DRenderTarget)return tt.TEXTURE_3D;if(St.isWebGLArrayRenderTarget||St.isCompressedArrayTexture)return tt.TEXTURE_2D_ARRAY;return tt.TEXTURE_2D}function It(St,_t,Dt,Qt,Jt,qe=!1){if(St!==null){if(tt[St]!==void 0)return tt[St];fn("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+St+"'")}let $e;if(Qt){if($e=et.get("EXT_texture_norm16"),!$e)fn("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let Gt=_t;if(_t===tt.RED){if(Dt===tt.FLOAT)Gt=tt.R32F;if(Dt===tt.HALF_FLOAT)Gt=tt.R16F;if(Dt===tt.UNSIGNED_BYTE)Gt=tt.R8;if(Dt===tt.UNSIGNED_SHORT&&$e)Gt=$e.R16_EXT;if(Dt===tt.SHORT&&$e)Gt=$e.R16_SNORM_EXT}if(_t===tt.RED_INTEGER){if(Dt===tt.UNSIGNED_BYTE)Gt=tt.R8UI;if(Dt===tt.UNSIGNED_SHORT)Gt=tt.R16UI;if(Dt===tt.UNSIGNED_INT)Gt=tt.R32UI;if(Dt===tt.BYTE)Gt=tt.R8I;if(Dt===tt.SHORT)Gt=tt.R16I;if(Dt===tt.INT)Gt=tt.R32I}if(_t===tt.RG){if(Dt===tt.FLOAT)Gt=tt.RG32F;if(Dt===tt.HALF_FLOAT)Gt=tt.RG16F;if(Dt===tt.UNSIGNED_BYTE)Gt=tt.RG8;if(Dt===tt.UNSIGNED_SHORT&&$e)Gt=$e.RG16_EXT;if(Dt===tt.SHORT&&$e)Gt=$e.RG16_SNORM_EXT}if(_t===tt.RG_INTEGER){if(Dt===tt.UNSIGNED_BYTE)Gt=tt.RG8UI;if(Dt===tt.UNSIGNED_SHORT)Gt=tt.RG16UI;if(Dt===tt.UNSIGNED_INT)Gt=tt.RG32UI;if(Dt===tt.BYTE)Gt=tt.RG8I;if(Dt===tt.SHORT)Gt=tt.RG16I;if(Dt===tt.INT)Gt=tt.RG32I}if(_t===tt.RGB_INTEGER){if(Dt===tt.UNSIGNED_BYTE)Gt=tt.RGB8UI;if(Dt===tt.UNSIGNED_SHORT)Gt=tt.RGB16UI;if(Dt===tt.UNSIGNED_INT)Gt=tt.RGB32UI;if(Dt===tt.BYTE)Gt=tt.RGB8I;if(Dt===tt.SHORT)Gt=tt.RGB16I;if(Dt===tt.INT)Gt=tt.RGB32I}if(_t===tt.RGBA_INTEGER){if(Dt===tt.UNSIGNED_BYTE)Gt=tt.RGBA8UI;if(Dt===tt.UNSIGNED_SHORT)Gt=tt.RGBA16UI;if(Dt===tt.UNSIGNED_INT)Gt=tt.RGBA32UI;if(Dt===tt.BYTE)Gt=tt.RGBA8I;if(Dt===tt.SHORT)Gt=tt.RGBA16I;if(Dt===tt.INT)Gt=tt.RGBA32I}if(_t===tt.RGB){if(Dt===tt.UNSIGNED_SHORT&&$e)Gt=$e.RGB16_EXT;if(Dt===tt.SHORT&&$e)Gt=$e.RGB16_SNORM_EXT;if(Dt===tt.UNSIGNED_INT_5_9_9_9_REV)Gt=tt.RGB9_E5;if(Dt===tt.UNSIGNED_INT_10F_11F_11F_REV)Gt=tt.R11F_G11F_B10F}if(_t===tt.RGBA){let Xt=qe?Ao:s.getTransfer(Jt);if(Dt===tt.FLOAT)Gt=tt.RGBA32F;if(Dt===tt.HALF_FLOAT)Gt=tt.RGBA16F;if(Dt===tt.UNSIGNED_BYTE)Gt=Xt===o?tt.SRGB8_ALPHA8:tt.RGBA8;if(Dt===tt.UNSIGNED_SHORT&&$e)Gt=$e.RGBA16_EXT;if(Dt===tt.SHORT&&$e)Gt=$e.RGBA16_SNORM_EXT;if(Dt===tt.UNSIGNED_SHORT_4_4_4_4)Gt=tt.RGBA4;if(Dt===tt.UNSIGNED_SHORT_5_5_5_1)Gt=tt.RGB5_A1}if(Gt===tt.R16F||Gt===tt.R32F||Gt===tt.RG16F||Gt===tt.RG32F||Gt===tt.RGBA16F||Gt===tt.RGBA32F)et.get("EXT_color_buffer_float");return Gt}function gt(St,_t){let Dt;if(St){if(_t===null||_t===Ki||_t===ds)Dt=tt.DEPTH24_STENCIL8;else if(_t===ki)Dt=tt.DEPTH32F_STENCIL8;else if(_t===er)Dt=tt.DEPTH24_STENCIL8,fn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(_t===null||_t===Ki||_t===ds)Dt=tt.DEPTH_COMPONENT24;else if(_t===ki)Dt=tt.DEPTH_COMPONENT32F;else if(_t===er)Dt=tt.DEPTH_COMPONENT16;return Dt}function yt(St,_t){if(Et(St)===!0||St.isFramebufferTexture&&St.minFilter!==N&&St.minFilter!==p)return Math.log2(Math.max(_t.width,_t.height))+1;else if(St.mipmaps.length>0)return St.mipmaps.length;else if(St.isCompressedTexture&&Array.isArray(St.image))return _t.mipmaps.length;else return 1}function Nt(St){let _t=new WeakRef(St);it.get(St).__ref=_t,vt.add(_t),Mt.register(St,_t,_t)}function kt(St){let _t=it.get(St).__ref;if(_t===void 0)return;vt.delete(_t),Mt.unregister(_t)}function Lt(St){Kt(St.target)}function zt(St){Rt(St.target)}function Kt(St){if(St.removeEventListener("dispose",Lt),kt(St),Zt(St),St.isVideoTexture)ht.delete(St);if(St.isHTMLTexture)dt.delete(St)}function Rt(St){St.removeEventListener("dispose",zt),kt(St),Ye(St)}function qt(){for(let St of vt){let _t=St.deref();if(_t===void 0)continue;if(_t.isRenderTarget===!0)Rt(_t);else Kt(_t)}vt.clear(),dt.clear()}function Zt(St){let _t=it.get(St);if(_t.__webglInit===void 0)return;let Dt=St.source,Qt=pt.get(Dt);if(Qt){let Jt=Qt[_t.__cacheKey];if(Jt.usedTimes--,Jt.usedTimes===0)Ot(St);if(Object.keys(Qt).length===0)pt.delete(Dt)}it.remove(St)}function Ot(St){let _t=it.get(St);tt.deleteTexture(_t.__webglTexture);let Dt=St.source,Qt=pt.get(Dt);delete Qt[_t.__cacheKey],at.memory.textures--}function Ye(St){let _t=it.get(St);if(_t.__depthDisposeCallback)_t.__depthDisposeCallback();let Dt=St.depthTexture;if(Dt&&Dt.renderTarget===St)Kt(Dt);if(St.isWebGLCubeRenderTarget)for(let Jt=0;Jt<6;Jt++){if(Array.isArray(_t.__webglFramebuffer[Jt]))for(let qe=0;qe<_t.__webglFramebuffer[Jt].length;qe++)tt.deleteFramebuffer(_t.__webglFramebuffer[Jt][qe]);else tt.deleteFramebuffer(_t.__webglFramebuffer[Jt]);if(_t.__webglDepthbuffer)tt.deleteRenderbuffer(_t.__webglDepthbuffer[Jt])}else{if(Array.isArray(_t.__webglFramebuffer))for(let Jt=0;Jt<_t.__webglFramebuffer.length;Jt++)tt.deleteFramebuffer(_t.__webglFramebuffer[Jt]);else tt.deleteFramebuffer(_t.__webglFramebuffer);if(_t.__webglDepthbuffer)tt.deleteRenderbuffer(_t.__webglDepthbuffer);if(_t.__webglMultisampledFramebuffer)tt.deleteFramebuffer(_t.__webglMultisampledFramebuffer);if(_t.__webglColorRenderbuffer){for(let Jt=0;Jt<_t.__webglColorRenderbuffer.length;Jt++)if(_t.__webglColorRenderbuffer[Jt])tt.deleteRenderbuffer(_t.__webglColorRenderbuffer[Jt])}if(_t.__webglDepthRenderbuffer)tt.deleteRenderbuffer(_t.__webglDepthRenderbuffer)}let Qt=St.textures;for(let Jt=0,qe=Qt.length;Jt<qe;Jt++){let $e=it.get(Qt[Jt]);if($e.__webglTexture)tt.deleteTexture($e.__webglTexture),at.memory.textures--;it.remove(Qt[Jt])}it.remove(St)}let Wt=0;function $t(){Wt=0}function Ve(){return Wt}function hn(St){Wt=St}function Yt(){let St=Wt;if(St>=st.maxTextures)fn("WebGLTextures: Trying to use "+(St+1)+" texture units while this GPU supports only "+st.maxTextures);return Wt+=1,St}function We(St){let _t=[];return _t.push(St.wrapS),_t.push(St.wrapT),_t.push(St.wrapR||0),_t.push(St.magFilter),_t.push(St.minFilter),_t.push(St.anisotropy),_t.push(St.internalFormat),_t.push(St.format),_t.push(St.type),_t.push(St.generateMipmaps),_t.push(St.mipmapsAutoUpdate),_t.push(St.premultiplyAlpha),_t.push(St.flipY),_t.push(St.unpackAlignment),_t.push(St.colorSpace),_t.join()}function ln(St,_t){let Dt=it.get(St);if(St.isVideoTexture)xn(St);if(St.isRenderTargetTexture===!1&&St.isExternalTexture!==!0&&St.version>0&&Dt.__version!==St.version){let Qt=St.image;if(Qt===null)fn("WebGLRenderer: Texture marked for update but no image data found.");else if(Qt.complete===!1)fn("WebGLRenderer: Texture marked for update but image is incomplete");else{ci(Dt,St,_t);return}}else if(St.isExternalTexture)Dt.__webglTexture=St.sourceTexture?St.sourceTexture:null;nt.bindTexture(tt.TEXTURE_2D,Dt.__webglTexture,tt.TEXTURE0+_t)}function gn(St,_t){let Dt=it.get(St);if(St.isRenderTargetTexture===!1&&St.version>0&&Dt.__version!==St.version){ci(Dt,St,_t);return}else if(St.isExternalTexture)Dt.__webglTexture=St.sourceTexture?St.sourceTexture:null;nt.bindTexture(tt.TEXTURE_2D_ARRAY,Dt.__webglTexture,tt.TEXTURE0+_t)}function _n(St,_t){let Dt=it.get(St);if(St.isRenderTargetTexture===!1&&St.version>0&&Dt.__version!==St.version){ci(Dt,St,_t);return}nt.bindTexture(tt.TEXTURE_3D,Dt.__webglTexture,tt.TEXTURE0+_t)}function cn(St,_t){let Dt=it.get(St);if(St.version>0&&Dt.__version!==St.version){di(Dt,St,_t);return}nt.bindTexture(tt.TEXTURE_CUBE_MAP,Dt.__webglTexture,tt.TEXTURE0+_t)}let Nn={[se]:tt.REPEAT,[re]:tt.CLAMP_TO_EDGE,[Ce]:tt.MIRRORED_REPEAT},An={[N]:tt.NEAREST,[Ie]:tt.NEAREST_MIPMAP_NEAREST,[J]:tt.NEAREST_MIPMAP_LINEAR,[p]:tt.LINEAR,[ae]:tt.LINEAR_MIPMAP_NEAREST,[D]:tt.LINEAR_MIPMAP_LINEAR},bn={[zc]:tt.NEVER,[Co]:tt.ALWAYS,[Gc]:tt.LESS,[wo]:tt.LEQUAL,[kc]:tt.EQUAL,[Ro]:tt.GEQUAL,[Hc]:tt.GREATER,[Wc]:tt.NOTEQUAL};function Gn(St,_t){if(_t.type===ki&&et.has("OES_texture_float_linear")===!1&&(_t.magFilter===p||_t.magFilter===ae||_t.magFilter===J||_t.magFilter===D||_t.minFilter===p||_t.minFilter===ae||_t.minFilter===J||_t.minFilter===D))fn("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(tt.texParameteri(St,tt.TEXTURE_WRAP_S,Nn[_t.wrapS]),tt.texParameteri(St,tt.TEXTURE_WRAP_T,Nn[_t.wrapT]),St===tt.TEXTURE_3D||St===tt.TEXTURE_2D_ARRAY)tt.texParameteri(St,tt.TEXTURE_WRAP_R,Nn[_t.wrapR]);if(tt.texParameteri(St,tt.TEXTURE_MAG_FILTER,An[_t.magFilter]),tt.texParameteri(St,tt.TEXTURE_MIN_FILTER,An[_t.minFilter]),_t.compareFunction)tt.texParameteri(St,tt.TEXTURE_COMPARE_MODE,tt.COMPARE_REF_TO_TEXTURE),tt.texParameteri(St,tt.TEXTURE_COMPARE_FUNC,bn[_t.compareFunction]);if(et.has("EXT_texture_filter_anisotropic")===!0){if(_t.magFilter===N)return;if(_t.minFilter!==J&&_t.minFilter!==D)return;if(_t.type===ki&&et.has("OES_texture_float_linear")===!1)return;if(_t.anisotropy>1||it.get(_t).__currentAnisotropy){let Dt=et.get("EXT_texture_filter_anisotropic");tt.texParameterf(St,Dt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_t.anisotropy,st.getMaxAnisotropy())),it.get(_t).__currentAnisotropy=_t.anisotropy}}}function In(St,_t){let Dt=!1;if(St.__webglInit===void 0)St.__webglInit=!0,_t.addEventListener("dispose",Lt),Nt(_t);let Qt=_t.source,Jt=pt.get(Qt);if(Jt===void 0)Jt={},pt.set(Qt,Jt);let qe=We(_t);if(qe!==St.__cacheKey){if(Jt[qe]===void 0)Jt[qe]={texture:tt.createTexture(),usedTimes:0},at.memory.textures++,Dt=!0;Jt[qe].usedTimes++;let $e=Jt[St.__cacheKey];if($e!==void 0){if(Jt[St.__cacheKey].usedTimes--,$e.usedTimes===0)Ot(_t)}St.__cacheKey=qe,St.__webglTexture=Jt[qe].texture}return Dt}function Hn(St,_t,Dt){return Math.floor(Math.floor(St/Dt)/_t)}function Wn(St,_t,Dt,Qt){let qe=St.updateRanges;if(qe.length===0)nt.texSubImage2D(tt.TEXTURE_2D,0,0,0,_t.width,_t.height,Dt,Qt,_t.data);else{qe.sort((wt,Vt)=>wt.start-Vt.start);let $e=0;for(let wt=1;wt<qe.length;wt++){let Vt=qe[$e],Ht=qe[wt],jt=Vt.start+Vt.count,Xe=Hn(Ht.start,_t.width,4),Qe=Hn(Vt.start,_t.width,4);if(Ht.start<=jt+1&&Xe===Qe&&Hn(Ht.start+Ht.count-1,_t.width,4)===Xe)Vt.count=Math.max(Vt.count,Ht.start+Ht.count-Vt.start);else++$e,qe[$e]=Ht}qe.length=$e+1;let Gt=nt.getParameter(tt.UNPACK_ROW_LENGTH),Xt=nt.getParameter(tt.UNPACK_SKIP_PIXELS),Ze=nt.getParameter(tt.UNPACK_SKIP_ROWS);nt.pixelStorei(tt.UNPACK_ROW_LENGTH,_t.width);for(let wt=0,Vt=qe.length;wt<Vt;wt++){let Ht=qe[wt],jt=Math.floor(Ht.start/4),Xe=Math.ceil(Ht.count/4),Qe=jt%_t.width,pn=Math.floor(jt/_t.width),dn=Xe,en=1;nt.pixelStorei(tt.UNPACK_SKIP_PIXELS,Qe),nt.pixelStorei(tt.UNPACK_SKIP_ROWS,pn),nt.texSubImage2D(tt.TEXTURE_2D,0,Qe,pn,dn,1,Dt,Qt,_t.data)}St.clearUpdateRanges(),nt.pixelStorei(tt.UNPACK_ROW_LENGTH,Gt),nt.pixelStorei(tt.UNPACK_SKIP_PIXELS,Xt),nt.pixelStorei(tt.UNPACK_SKIP_ROWS,Ze)}}function ci(St,_t,Dt){let Qt=tt.TEXTURE_2D;if(_t.isDataArrayTexture||_t.isCompressedArrayTexture)Qt=tt.TEXTURE_2D_ARRAY;if(_t.isData3DTexture)Qt=tt.TEXTURE_3D;let Jt=In(St,_t),qe=_t.source;nt.bindTexture(Qt,St.__webglTexture,tt.TEXTURE0+Dt);let $e=it.get(qe);if(qe.version!==$e.__version||Jt===!0){if(nt.activeTexture(tt.TEXTURE0+Dt),(typeof ImageBitmap<"u"&&_t.image instanceof ImageBitmap)===!1){let en=s.getPrimaries(s.workingColorSpace),mn=_t.colorSpace===ps?null:s.getPrimaries(_t.colorSpace),Tn=_t.colorSpace===ps||en===mn?tt.NONE:tt.BROWSER_DEFAULT_WEBGL;nt.pixelStorei(tt.UNPACK_FLIP_Y_WEBGL,_t.flipY),nt.pixelStorei(tt.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_t.premultiplyAlpha),nt.pixelStorei(tt.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tn)}nt.pixelStorei(tt.UNPACK_ALIGNMENT,_t.unpackAlignment);let Xt=Tt(_t.image,!1,st.maxTextureSize);Xt=Sn(_t,Xt);let Ze=rt.convert(_t.format,_t.colorSpace),wt=rt.convert(_t.type),Vt=It(_t.internalFormat,Ze,wt,_t.normalized,_t.colorSpace,_t.isVideoTexture);Gn(Qt,_t);let Ht,jt=_t.mipmaps,Xe=_t.isVideoTexture!==!0,Qe=$e.__version===void 0||Jt===!0,pn=qe.dataReady,dn=yt(_t,Xt);if(_t.isDepthTexture){if(Vt=gt(_t.format===Qi,_t.type),Qe)if(Xe)nt.texStorage2D(tt.TEXTURE_2D,1,Vt,Xt.width,Xt.height);else nt.texImage2D(tt.TEXTURE_2D,0,Vt,Xt.width,Xt.height,0,Ze,wt,null)}else if(_t.isDataTexture)if(jt.length>0){if(Xe&&Qe)nt.texStorage2D(tt.TEXTURE_2D,dn,Vt,jt[0].width,jt[0].height);for(let en=0,mn=jt.length;en<mn;en++)if(Ht=jt[en],Xe){if(pn)nt.texSubImage2D(tt.TEXTURE_2D,en,0,0,Ht.width,Ht.height,Ze,wt,Ht.data)}else nt.texImage2D(tt.TEXTURE_2D,en,Vt,Ht.width,Ht.height,0,Ze,wt,Ht.data);_t.generateMipmaps=!1}else if(Xe){if(Qe)nt.texStorage2D(tt.TEXTURE_2D,dn,Vt,Xt.width,Xt.height);if(pn)Wn(_t,Xt,Ze,wt)}else nt.texImage2D(tt.TEXTURE_2D,0,Vt,Xt.width,Xt.height,0,Ze,wt,Xt.data);else if(_t.isCompressedTexture)if(_t.isCompressedArrayTexture){if(Xe&&Qe)nt.texStorage3D(tt.TEXTURE_2D_ARRAY,dn,Vt,jt[0].width,jt[0].height,Xt.depth);for(let en=0,mn=jt.length;en<mn;en++)if(Ht=jt[en],_t.format!==Hi)if(Ze!==null)if(Xe){if(pn)if(_t.layerUpdates.size>0){let Tn=Qo(Ht.width,Ht.height,_t.format,_t.type);for(let nn of _t.layerUpdates){let Un=Ht.data.subarray(nn*Tn/Ht.data.BYTES_PER_ELEMENT,(nn+1)*Tn/Ht.data.BYTES_PER_ELEMENT);nt.compressedTexSubImage3D(tt.TEXTURE_2D_ARRAY,en,0,0,nn,Ht.width,Ht.height,1,Ze,Un)}}else nt.compressedTexSubImage3D(tt.TEXTURE_2D_ARRAY,en,0,0,0,Ht.width,Ht.height,Xt.depth,Ze,Ht.data)}else nt.compressedTexImage3D(tt.TEXTURE_2D_ARRAY,en,Vt,Ht.width,Ht.height,Xt.depth,0,Ht.data,0,0);else fn("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(Xe){if(pn)nt.texSubImage3D(tt.TEXTURE_2D_ARRAY,en,0,0,0,Ht.width,Ht.height,Xt.depth,Ze,wt,Ht.data)}else nt.texImage3D(tt.TEXTURE_2D_ARRAY,en,Vt,Ht.width,Ht.height,Xt.depth,0,Ze,wt,Ht.data);if(_t.layerUpdates.size>0)_t.clearLayerUpdates()}else{if(Xe&&Qe)nt.texStorage2D(tt.TEXTURE_2D,dn,Vt,jt[0].width,jt[0].height);for(let en=0,mn=jt.length;en<mn;en++)if(Ht=jt[en],_t.format!==Hi)if(Ze!==null)if(Xe){if(pn)nt.compressedTexSubImage2D(tt.TEXTURE_2D,en,0,0,Ht.width,Ht.height,Ze,Ht.data)}else nt.compressedTexImage2D(tt.TEXTURE_2D,en,Vt,Ht.width,Ht.height,0,Ht.data);else fn("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(Xe){if(pn)nt.texSubImage2D(tt.TEXTURE_2D,en,0,0,Ht.width,Ht.height,Ze,wt,Ht.data)}else nt.texImage2D(tt.TEXTURE_2D,en,Vt,Ht.width,Ht.height,0,Ze,wt,Ht.data)}else if(_t.isDataArrayTexture)if(Xe){if(Qe)nt.texStorage3D(tt.TEXTURE_2D_ARRAY,dn,Vt,Xt.width,Xt.height,Xt.depth);if(pn)if(_t.layerUpdates.size>0){let en=Qo(Xt.width,Xt.height,_t.format,_t.type);for(let mn of _t.layerUpdates){let Tn=Xt.data.subarray(mn*en/Xt.data.BYTES_PER_ELEMENT,(mn+1)*en/Xt.data.BYTES_PER_ELEMENT);nt.texSubImage3D(tt.TEXTURE_2D_ARRAY,0,0,0,mn,Xt.width,Xt.height,1,Ze,wt,Tn)}_t.clearLayerUpdates()}else nt.texSubImage3D(tt.TEXTURE_2D_ARRAY,0,0,0,0,Xt.width,Xt.height,Xt.depth,Ze,wt,Xt.data)}else nt.texImage3D(tt.TEXTURE_2D_ARRAY,0,Vt,Xt.width,Xt.height,Xt.depth,0,Ze,wt,Xt.data);else if(_t.isData3DTexture)if(Xe){if(Qe)nt.texStorage3D(tt.TEXTURE_3D,dn,Vt,Xt.width,Xt.height,Xt.depth);if(pn)nt.texSubImage3D(tt.TEXTURE_3D,0,0,0,0,Xt.width,Xt.height,Xt.depth,Ze,wt,Xt.data)}else nt.texImage3D(tt.TEXTURE_3D,0,Vt,Xt.width,Xt.height,Xt.depth,0,Ze,wt,Xt.data);else if(_t.isFramebufferTexture){if(Qe)if(Xe)nt.texStorage2D(tt.TEXTURE_2D,dn,Vt,Xt.width,Xt.height);else{let en=Xt.width,mn=Xt.height;for(let Tn=0;Tn<dn;Tn++)nt.texImage2D(tt.TEXTURE_2D,Tn,Vt,en,mn,0,Ze,wt,null),en>>=1,mn>>=1}}else if(_t.isHTMLTexture){if("texElementImage2D"in tt){let en=tt.canvas;if(!en.hasAttribute("layoutsubtree"))en.setAttribute("layoutsubtree","true");if(Xt.parentNode!==en){en.appendChild(Xt),dt.add(_t),en.onpaint=(mn)=>{let Tn=mn.changedElements;for(let nn of dt)if(Tn.includes(nn.image))nn.needsUpdate=!0},en.requestPaint();return}if(tt.texElementImage2D.length===3)tt.texElementImage2D(tt.TEXTURE_2D,tt.RGBA8,Xt);else{let{RGBA:Tn,RGBA:nn,UNSIGNED_BYTE:Un}=tt;tt.texElementImage2D(tt.TEXTURE_2D,0,Tn,nn,Un,Xt)}tt.texParameteri(tt.TEXTURE_2D,tt.TEXTURE_MIN_FILTER,tt.LINEAR),tt.texParameteri(tt.TEXTURE_2D,tt.TEXTURE_WRAP_S,tt.CLAMP_TO_EDGE),tt.texParameteri(tt.TEXTURE_2D,tt.TEXTURE_WRAP_T,tt.CLAMP_TO_EDGE)}}else if(jt.length>0){if(Xe&&Qe){let en=ei(jt[0]);nt.texStorage2D(tt.TEXTURE_2D,dn,Vt,en.width,en.height)}for(let en=0,mn=jt.length;en<mn;en++)if(Ht=jt[en],Xe){if(pn)nt.texSubImage2D(tt.TEXTURE_2D,en,0,0,Ze,wt,Ht)}else nt.texImage2D(tt.TEXTURE_2D,en,Vt,Ze,wt,Ht);_t.generateMipmaps=!1}else if(Xe){if(Qe){let en=ei(Xt);nt.texStorage2D(tt.TEXTURE_2D,dn,Vt,en.width,en.height)}if(pn)nt.texSubImage2D(tt.TEXTURE_2D,0,0,0,Ze,wt,Xt)}else nt.texImage2D(tt.TEXTURE_2D,0,Vt,Ze,wt,Xt);if(Et(_t)&&_t.mipmapsAutoUpdate===!0)bt(Qt);if($e.__version=qe.version,_t.onUpdate)_t.onUpdate(_t)}St.__version=_t.version}function di(St,_t,Dt){if(_t.image.length!==6)return;let Qt=In(St,_t),Jt=_t.source;nt.bindTexture(tt.TEXTURE_CUBE_MAP,St.__webglTexture,tt.TEXTURE0+Dt);let qe=it.get(Jt);if(Jt.version!==qe.__version||Qt===!0){nt.activeTexture(tt.TEXTURE0+Dt);let $e=s.getPrimaries(s.workingColorSpace),Gt=_t.colorSpace===ps?null:s.getPrimaries(_t.colorSpace),Xt=_t.colorSpace===ps||$e===Gt?tt.NONE:tt.BROWSER_DEFAULT_WEBGL;nt.pixelStorei(tt.UNPACK_FLIP_Y_WEBGL,_t.flipY),nt.pixelStorei(tt.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_t.premultiplyAlpha),nt.pixelStorei(tt.UNPACK_ALIGNMENT,_t.unpackAlignment),nt.pixelStorei(tt.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);let Ze=_t.isCompressedTexture||_t.image[0].isCompressedTexture,wt=_t.image[0]&&_t.image[0].isDataTexture,Vt=[];for(let nn=0;nn<6;nn++){if(!Ze&&!wt)Vt[nn]=Tt(_t.image[nn],!0,st.maxCubemapSize);else Vt[nn]=wt?_t.image[nn].image:_t.image[nn];Vt[nn]=Sn(_t,Vt[nn])}let Ht=Vt[0],jt=rt.convert(_t.format,_t.colorSpace),Xe=rt.convert(_t.type),Qe=It(_t.internalFormat,jt,Xe,_t.normalized,_t.colorSpace),pn=_t.isVideoTexture!==!0,dn=qe.__version===void 0||Qt===!0,en=Jt.dataReady,mn=yt(_t,Ht);Gn(tt.TEXTURE_CUBE_MAP,_t);let Tn;if(_t.isDepthTexture){if(Qe=gt(_t.format===Qi,_t.type),dn)if(pn)nt.texStorage2D(tt.TEXTURE_CUBE_MAP,1,Qe,Ht.width,Ht.height);else for(let nn=0;nn<6;nn++)nt.texImage2D(tt.TEXTURE_CUBE_MAP_POSITIVE_X+nn,0,Qe,Ht.width,Ht.height,0,jt,Xe,null)}else if(Ze){if(pn&&dn)nt.texStorage2D(tt.TEXTURE_CUBE_MAP,mn,Qe,Ht.width,Ht.height);for(let nn=0;nn<6;nn++){Tn=Vt[nn].mipmaps;for(let Un=0;Un<Tn.length;Un++){let $n=Tn[Un];if(_t.format!==Hi)if(jt!==null)if(pn){if(en)nt.compressedTexSubImage2D(tt.TEXTURE_CUBE_MAP_POSITIVE_X+nn,Un,0,0,$n.width,$n.height,jt,$n.data)}else nt.compressedTexImage2D(tt.TEXTURE_CUBE_MAP_POSITIVE_X+nn,Un,Qe,$n.width,$n.height,0,$n.data);else fn("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(pn){if(en)nt.texSubImage2D(tt.TEXTURE_CUBE_MAP_POSITIVE_X+nn,Un,0,0,$n.width,$n.height,jt,Xe,$n.data)}else nt.texImage2D(tt.TEXTURE_CUBE_MAP_POSITIVE_X+nn,Un,Qe,$n.width,$n.height,0,jt,Xe,$n.data)}}}else{if(Tn=_t.mipmaps,pn&&dn){if(Tn.length>0)mn++;let nn=ei(Vt[0]);nt.texStorage2D(tt.TEXTURE_CUBE_MAP,mn,Qe,nn.width,nn.height)}for(let nn=0;nn<6;nn++)if(wt){if(pn){if(en)nt.texSubImage2D(tt.TEXTURE_CUBE_MAP_POSITIVE_X+nn,0,0,0,Vt[nn].width,Vt[nn].height,jt,Xe,Vt[nn].data)}else nt.texImage2D(tt.TEXTURE_CUBE_MAP_POSITIVE_X+nn,0,Qe,Vt[nn].width,Vt[nn].height,0,jt,Xe,Vt[nn].data);for(let Un=0;Un<Tn.length;Un++){let Li=Tn[Un].image[nn].image;if(pn){if(en)nt.texSubImage2D(tt.TEXTURE_CUBE_MAP_POSITIVE_X+nn,Un+1,0,0,Li.width,Li.height,jt,Xe,Li.data)}else nt.texImage2D(tt.TEXTURE_CUBE_MAP_POSITIVE_X+nn,Un+1,Qe,Li.width,Li.height,0,jt,Xe,Li.data)}}else{if(pn){if(en)nt.texSubImage2D(tt.TEXTURE_CUBE_MAP_POSITIVE_X+nn,0,0,0,jt,Xe,Vt[nn])}else nt.texImage2D(tt.TEXTURE_CUBE_MAP_POSITIVE_X+nn,0,Qe,jt,Xe,Vt[nn]);for(let Un=0;Un<Tn.length;Un++){let $n=Tn[Un];if(pn){if(en)nt.texSubImage2D(tt.TEXTURE_CUBE_MAP_POSITIVE_X+nn,Un+1,0,0,jt,Xe,$n.image[nn])}else nt.texImage2D(tt.TEXTURE_CUBE_MAP_POSITIVE_X+nn,Un+1,Qe,jt,Xe,$n.image[nn])}}}if(Et(_t)&&_t.mipmapsAutoUpdate===!0)bt(tt.TEXTURE_CUBE_MAP);if(qe.__version=Jt.version,_t.onUpdate)_t.onUpdate(_t)}St.__version=_t.version}function Vn(St,_t,Dt,Qt,Jt,qe){let $e=rt.convert(Dt.format,Dt.colorSpace),Gt=rt.convert(Dt.type),Xt=It(Dt.internalFormat,$e,Gt,Dt.normalized,Dt.colorSpace),Ze=it.get(_t),wt=it.get(Dt);if(wt.__renderTarget=_t,!Ze.__hasExternalTextures){let Vt=Math.max(1,_t.width>>qe),Ht=Math.max(1,_t.height>>qe);if(Jt===tt.TEXTURE_3D||Jt===tt.TEXTURE_2D_ARRAY)nt.texImage3D(Jt,qe,Xt,Vt,Ht,_t.depth,0,$e,Gt,null);else nt.texImage2D(Jt,qe,Xt,Vt,Ht,0,$e,Gt,null)}if(nt.bindFramebuffer(tt.FRAMEBUFFER,St),Bn(_t))ot.framebufferTexture2DMultisampleEXT(tt.FRAMEBUFFER,Qt,Jt,wt.__webglTexture,0,je(_t));else if(Jt===tt.TEXTURE_2D||Jt>=tt.TEXTURE_CUBE_MAP_POSITIVE_X&&Jt<=tt.TEXTURE_CUBE_MAP_NEGATIVE_Z)tt.framebufferTexture2D(tt.FRAMEBUFFER,Qt,Jt,wt.__webglTexture,qe);nt.bindFramebuffer(tt.FRAMEBUFFER,null)}function ti(St,_t,Dt){if(tt.bindRenderbuffer(tt.RENDERBUFFER,St),_t.depthBuffer){let Qt=_t.depthTexture,Jt=Qt&&Qt.isDepthTexture?Qt.type:null,qe=gt(_t.stencilBuffer,Jt),$e=_t.stencilBuffer?tt.DEPTH_STENCIL_ATTACHMENT:tt.DEPTH_ATTACHMENT;if(Bn(_t))ot.renderbufferStorageMultisampleEXT(tt.RENDERBUFFER,je(_t),qe,_t.width,_t.height);else if(Dt)tt.renderbufferStorageMultisample(tt.RENDERBUFFER,je(_t),qe,_t.width,_t.height);else tt.renderbufferStorage(tt.RENDERBUFFER,qe,_t.width,_t.height);tt.framebufferRenderbuffer(tt.FRAMEBUFFER,$e,tt.RENDERBUFFER,St)}else{let Qt=_t.textures;for(let Jt=0;Jt<Qt.length;Jt++){let qe=Qt[Jt],$e=rt.convert(qe.format,qe.colorSpace),Gt=rt.convert(qe.type),Xt=It(qe.internalFormat,$e,Gt,qe.normalized,qe.colorSpace);if(Bn(_t))ot.renderbufferStorageMultisampleEXT(tt.RENDERBUFFER,je(_t),Xt,_t.width,_t.height);else if(Dt)tt.renderbufferStorageMultisample(tt.RENDERBUFFER,je(_t),Xt,_t.width,_t.height);else tt.renderbufferStorage(tt.RENDERBUFFER,Xt,_t.width,_t.height)}}tt.bindRenderbuffer(tt.RENDERBUFFER,null)}function hi(St,_t,Dt){let Qt=_t.isWebGLCubeRenderTarget===!0;if(nt.bindFramebuffer(tt.FRAMEBUFFER,St),!(_t.depthTexture&&_t.depthTexture.isDepthTexture))throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Jt=it.get(_t.depthTexture);Jt.__renderTarget=_t;let qe=Qt?_t.depthTexture.image[0]:_t.depthTexture.image;if(!Jt.__webglTexture||qe.width!==_t.width||qe.height!==_t.height)qe.width=_t.width,qe.height=_t.height,_t.depthTexture.needsUpdate=!0;if(Qt)cn(_t.depthTexture,0);else ln(_t.depthTexture,0);let $e=Jt.__webglTexture,Gt=je(_t),Xt=Qt?tt.TEXTURE_CUBE_MAP_POSITIVE_X+Dt:tt.TEXTURE_2D,Ze=_t.depthTexture.format===Qi?tt.DEPTH_STENCIL_ATTACHMENT:tt.DEPTH_ATTACHMENT;if(_t.depthTexture.format===Fs)if(Bn(_t))ot.framebufferTexture2DMultisampleEXT(tt.FRAMEBUFFER,Ze,Xt,$e,0,Gt);else tt.framebufferTexture2D(tt.FRAMEBUFFER,Ze,Xt,$e,0);else if(_t.depthTexture.format===Qi)if(Bn(_t))ot.framebufferTexture2DMultisampleEXT(tt.FRAMEBUFFER,Ze,Xt,$e,0,Gt);else tt.framebufferTexture2D(tt.FRAMEBUFFER,Ze,Xt,$e,0);else throw Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ui(St){let _t=it.get(St),Dt=St.isWebGLCubeRenderTarget===!0;if(_t.__boundDepthTexture!==St.depthTexture){let Qt=St.depthTexture;if(_t.__depthDisposeCallback)_t.__depthDisposeCallback();if(Qt){let Jt=()=>{delete _t.__boundDepthTexture,delete _t.__depthDisposeCallback,Qt.removeEventListener("dispose",Jt)};Qt.addEventListener("dispose",Jt),_t.__depthDisposeCallback=Jt}_t.__boundDepthTexture=Qt}if(St.depthTexture&&!_t.__autoAllocateDepthBuffer)if(Dt)for(let Qt=0;Qt<6;Qt++)hi(_t.__webglFramebuffer[Qt],St,Qt);else if(St.texture.mipmaps.length>0)hi(_t.__webglFramebuffer[0],St,0);else hi(_t.__webglFramebuffer,St,0);else if(Dt){_t.__webglDepthbuffer=[];for(let Qt=0;Qt<6;Qt++)if(nt.bindFramebuffer(tt.FRAMEBUFFER,_t.__webglFramebuffer[Qt]),_t.__webglDepthbuffer[Qt]===void 0)_t.__webglDepthbuffer[Qt]=tt.createRenderbuffer(),ti(_t.__webglDepthbuffer[Qt],St,!1);else{let Jt=St.stencilBuffer?tt.DEPTH_STENCIL_ATTACHMENT:tt.DEPTH_ATTACHMENT,qe=_t.__webglDepthbuffer[Qt];tt.bindRenderbuffer(tt.RENDERBUFFER,qe),tt.framebufferRenderbuffer(tt.FRAMEBUFFER,Jt,tt.RENDERBUFFER,qe)}}else{if(St.texture.mipmaps.length>0)nt.bindFramebuffer(tt.FRAMEBUFFER,_t.__webglFramebuffer[0]);else nt.bindFramebuffer(tt.FRAMEBUFFER,_t.__webglFramebuffer);if(_t.__webglDepthbuffer===void 0)_t.__webglDepthbuffer=tt.createRenderbuffer(),ti(_t.__webglDepthbuffer,St,!1);else{let Jt=St.stencilBuffer?tt.DEPTH_STENCIL_ATTACHMENT:tt.DEPTH_ATTACHMENT,qe=_t.__webglDepthbuffer;tt.bindRenderbuffer(tt.RENDERBUFFER,qe),tt.framebufferRenderbuffer(tt.FRAMEBUFFER,Jt,tt.RENDERBUFFER,qe)}}nt.bindFramebuffer(tt.FRAMEBUFFER,null)}function xi(St,_t,Dt){let Qt=it.get(St);if(_t!==void 0)Vn(Qt.__webglFramebuffer,St,St.texture,tt.COLOR_ATTACHMENT0,tt.TEXTURE_2D,0);if(Dt!==void 0)ui(St)}function Pt(St){let _t=St.texture,Dt=it.get(St),Qt=it.get(_t);St.addEventListener("dispose",zt),Nt(St);let Jt=St.textures,qe=St.isWebGLCubeRenderTarget===!0,$e=Jt.length>1;if(!$e){if(Qt.__webglTexture===void 0)Qt.__webglTexture=tt.createTexture();Qt.__version=_t.version,at.memory.textures++}if(qe){Dt.__webglFramebuffer=[];for(let Gt=0;Gt<6;Gt++)if(_t.mipmaps.length>0){Dt.__webglFramebuffer[Gt]=[];for(let Xt=0;Xt<_t.mipmaps.length;Xt++)Dt.__webglFramebuffer[Gt][Xt]=tt.createFramebuffer()}else Dt.__webglFramebuffer[Gt]=tt.createFramebuffer()}else{if(_t.mipmaps.length>0){Dt.__webglFramebuffer=[];for(let Gt=0;Gt<_t.mipmaps.length;Gt++)Dt.__webglFramebuffer[Gt]=tt.createFramebuffer()}else Dt.__webglFramebuffer=tt.createFramebuffer();if($e)for(let Gt=0,Xt=Jt.length;Gt<Xt;Gt++){let Ze=it.get(Jt[Gt]);if(Ze.__webglTexture===void 0)Ze.__webglTexture=tt.createTexture(),at.memory.textures++}if(St.samples>0&&Bn(St)===!1){Dt.__webglMultisampledFramebuffer=tt.createFramebuffer(),Dt.__webglColorRenderbuffer=[],nt.bindFramebuffer(tt.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer);for(let Gt=0;Gt<Jt.length;Gt++){let Xt=Jt[Gt];Dt.__webglColorRenderbuffer[Gt]=tt.createRenderbuffer(),tt.bindRenderbuffer(tt.RENDERBUFFER,Dt.__webglColorRenderbuffer[Gt]);let Ze=rt.convert(Xt.format,Xt.colorSpace),wt=rt.convert(Xt.type),Vt=It(Xt.internalFormat,Ze,wt,Xt.normalized,Xt.colorSpace,St.isXRRenderTarget===!0),Ht=je(St);tt.renderbufferStorageMultisample(tt.RENDERBUFFER,Ht,Vt,St.width,St.height),tt.framebufferRenderbuffer(tt.FRAMEBUFFER,tt.COLOR_ATTACHMENT0+Gt,tt.RENDERBUFFER,Dt.__webglColorRenderbuffer[Gt])}if(tt.bindRenderbuffer(tt.RENDERBUFFER,null),St.depthBuffer)Dt.__webglDepthRenderbuffer=tt.createRenderbuffer(),ti(Dt.__webglDepthRenderbuffer,St,!0);nt.bindFramebuffer(tt.FRAMEBUFFER,null)}}if(qe){nt.bindTexture(tt.TEXTURE_CUBE_MAP,Qt.__webglTexture),Gn(tt.TEXTURE_CUBE_MAP,_t);for(let Gt=0;Gt<6;Gt++)if(_t.mipmaps.length>0)for(let Xt=0;Xt<_t.mipmaps.length;Xt++)Vn(Dt.__webglFramebuffer[Gt][Xt],St,_t,tt.COLOR_ATTACHMENT0,tt.TEXTURE_CUBE_MAP_POSITIVE_X+Gt,Xt);else Vn(Dt.__webglFramebuffer[Gt],St,_t,tt.COLOR_ATTACHMENT0,tt.TEXTURE_CUBE_MAP_POSITIVE_X+Gt,0);if(Et(_t))bt(tt.TEXTURE_CUBE_MAP);else if(_t.mipmaps.length>0)tt.texParameteri(tt.TEXTURE_CUBE_MAP,tt.TEXTURE_MAX_LEVEL,_t.mipmaps.length-1);nt.unbindTexture()}else if($e){for(let Gt=0,Xt=Jt.length;Gt<Xt;Gt++){let Ze=Jt[Gt],wt=it.get(Ze),Vt=tt.TEXTURE_2D;if(St.isWebGL3DRenderTarget||St.isWebGLArrayRenderTarget)Vt=St.isWebGL3DRenderTarget?tt.TEXTURE_3D:tt.TEXTURE_2D_ARRAY;if(nt.bindTexture(Vt,wt.__webglTexture),Gn(Vt,Ze),Vn(Dt.__webglFramebuffer,St,Ze,tt.COLOR_ATTACHMENT0+Gt,Vt,0),Et(Ze))bt(Vt)}nt.unbindTexture()}else{let Gt=tt.TEXTURE_2D;if(St.isWebGL3DRenderTarget||St.isWebGLArrayRenderTarget)Gt=St.isWebGL3DRenderTarget?tt.TEXTURE_3D:tt.TEXTURE_2D_ARRAY;if(nt.bindTexture(Gt,Qt.__webglTexture),Gn(Gt,_t),_t.mipmaps.length>0)for(let Xt=0;Xt<_t.mipmaps.length;Xt++)Vn(Dt.__webglFramebuffer[Xt],St,_t,tt.COLOR_ATTACHMENT0,Gt,Xt);else Vn(Dt.__webglFramebuffer,St,_t,tt.COLOR_ATTACHMENT0,Gt,0);if(Et(_t))bt(Gt);else if(_t.mipmaps.length>0)tt.texParameteri(Gt,tt.TEXTURE_MAX_LEVEL,_t.mipmaps.length-1);nt.unbindTexture()}if(St.depthBuffer)ui(St)}function vi(St){let _t=St.textures;for(let Dt=0,Qt=_t.length;Dt<Qt;Dt++){let Jt=_t[Dt];if(Et(Jt)&&Jt.mipmapsAutoUpdate===!0){let qe=At(St),$e=it.get(Jt).__webglTexture;nt.bindTexture(qe,$e),bt(qe),nt.unbindTexture()}}}let Dn=[];function Jn(St){if(St.samples>0){if(Bn(St)===!1){let{textures:_t,width:Dt,height:Qt}=St,Jt=tt.COLOR_BUFFER_BIT,qe=St.stencilBuffer?tt.DEPTH_STENCIL_ATTACHMENT:tt.DEPTH_ATTACHMENT,$e=it.get(St),Gt=_t.length>1;if(Gt)for(let Ze=0;Ze<_t.length;Ze++)nt.bindFramebuffer(tt.FRAMEBUFFER,$e.__webglMultisampledFramebuffer),tt.framebufferRenderbuffer(tt.FRAMEBUFFER,tt.COLOR_ATTACHMENT0+Ze,tt.RENDERBUFFER,null),nt.bindFramebuffer(tt.FRAMEBUFFER,$e.__webglFramebuffer),tt.framebufferTexture2D(tt.DRAW_FRAMEBUFFER,tt.COLOR_ATTACHMENT0+Ze,tt.TEXTURE_2D,null,0);if(nt.bindFramebuffer(tt.READ_FRAMEBUFFER,$e.__webglMultisampledFramebuffer),St.texture.mipmaps.length>0)nt.bindFramebuffer(tt.DRAW_FRAMEBUFFER,$e.__webglFramebuffer[0]);else nt.bindFramebuffer(tt.DRAW_FRAMEBUFFER,$e.__webglFramebuffer);for(let Ze=0;Ze<_t.length;Ze++){if(St.resolveDepthBuffer){if(St.depthBuffer)Jt|=tt.DEPTH_BUFFER_BIT;if(St.stencilBuffer&&St.resolveStencilBuffer)Jt|=tt.STENCIL_BUFFER_BIT}if(Gt){tt.framebufferRenderbuffer(tt.READ_FRAMEBUFFER,tt.COLOR_ATTACHMENT0,tt.RENDERBUFFER,$e.__webglColorRenderbuffer[Ze]);let wt=it.get(_t[Ze]).__webglTexture;tt.framebufferTexture2D(tt.DRAW_FRAMEBUFFER,tt.COLOR_ATTACHMENT0,tt.TEXTURE_2D,wt,0)}if(tt.blitFramebuffer(0,0,Dt,Qt,0,0,Dt,Qt,Jt,tt.NEAREST),lt===!0){if(Dn.length=0,Dn.push(tt.COLOR_ATTACHMENT0+Ze),St.depthBuffer&&St.storeMultisampledDepthBuffer===!1)Dn.push(qe);tt.invalidateFramebuffer(tt.READ_FRAMEBUFFER,Dn)}}if(nt.bindFramebuffer(tt.READ_FRAMEBUFFER,null),nt.bindFramebuffer(tt.DRAW_FRAMEBUFFER,null),Gt)for(let Ze=0;Ze<_t.length;Ze++){nt.bindFramebuffer(tt.FRAMEBUFFER,$e.__webglMultisampledFramebuffer),tt.framebufferRenderbuffer(tt.FRAMEBUFFER,tt.COLOR_ATTACHMENT0+Ze,tt.RENDERBUFFER,$e.__webglColorRenderbuffer[Ze]);let wt=it.get(_t[Ze]).__webglTexture;nt.bindFramebuffer(tt.FRAMEBUFFER,$e.__webglFramebuffer),tt.framebufferTexture2D(tt.DRAW_FRAMEBUFFER,tt.COLOR_ATTACHMENT0+Ze,tt.TEXTURE_2D,wt,0)}nt.bindFramebuffer(tt.DRAW_FRAMEBUFFER,$e.__webglMultisampledFramebuffer)}else if(St.depthBuffer&&St.storeMultisampledDepthBuffer===!1&&lt){let _t=St.stencilBuffer?tt.DEPTH_STENCIL_ATTACHMENT:tt.DEPTH_ATTACHMENT;tt.invalidateFramebuffer(tt.DRAW_FRAMEBUFFER,[_t])}}}function je(St){return Math.min(st.maxSamples,St.samples)}function Bn(St){let _t=it.get(St);return St.samples>0&&et.has("WEBGL_multisampled_render_to_texture")===!0&&_t.__useRenderToTexture!==!1}function xn(St){let _t=at.render.frame;if(ht.get(St)!==_t)ht.set(St,_t),St.update()}function Sn(St,_t){let{colorSpace:Dt,format:Qt,type:Jt}=St;if(St.isCompressedTexture===!0||St.isVideoTexture===!0)return _t;if(Dt!==A&&Dt!==ps)if(s.getTransfer(Dt)===o){if(Qt!==Hi||Jt!==Ti)fn("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else vn("WebGLTextures: Unsupported texture color space:",Dt);return _t}function ei(St){if(typeof HTMLImageElement<"u"&&St instanceof HTMLImageElement)ct.width=St.naturalWidth||St.width,ct.height=St.naturalHeight||St.height;else if(typeof VideoFrame<"u"&&St instanceof VideoFrame)ct.width=St.displayWidth,ct.height=St.displayHeight;else ct.width=St.width,ct.height=St.height;return ct}this.allocateTextureUnit=Yt,this.resetTextureUnits=$t,this.getTextureUnits=Ve,this.setTextureUnits=hn,this.setTexture2D=ln,this.setTexture2DArray=gn,this.setTexture3D=_n,this.setTextureCube=cn,this.rebindTextures=xi,this.setupRenderTarget=Pt,this.updateRenderTargetMipmap=vi,this.updateMultisampleRenderTarget=Jn,this.setupDepthRenderbuffer=ui,this.setupFrameBufferTexture=Vn,this.useMultisampledRTT=Bn,this.dispose=qt}function Rg(tt,et){function nt(it,st=ps){let rt,at=s.getTransfer(st);if(it===Ti)return tt.UNSIGNED_BYTE;if(it===Wa)return tt.UNSIGNED_SHORT_4_4_4_4;if(it===Va)return tt.UNSIGNED_SHORT_5_5_5_1;if(it===Nc)return tt.UNSIGNED_INT_5_9_9_9_REV;if(it===Dc)return tt.UNSIGNED_INT_10F_11F_11F_REV;if(it===Pc)return tt.BYTE;if(it===Lc)return tt.SHORT;if(it===er)return tt.UNSIGNED_SHORT;if(it===Ha)return tt.INT;if(it===Ki)return tt.UNSIGNED_INT;if(it===ki)return tt.FLOAT;if(it===S)return tt.HALF_FLOAT;if(it===Uc)return tt.ALPHA;if(it===Fc)return tt.RGB;if(it===Hi)return tt.RGBA;if(it===Fs)return tt.DEPTH_COMPONENT;if(it===Qi)return tt.DEPTH_STENCIL;if(it===Oc)return tt.RED;if(it===Xa)return tt.RED_INTEGER;if(it===fs)return tt.RG;if(it===qa)return tt.RG_INTEGER;if(it===Ya)return tt.RGBA_INTEGER;if(it===Wr||it===Vr||it===Xr||it===qr)if(at===o)if(rt=et.get("WEBGL_compressed_texture_s3tc_srgb"),rt!==null){if(it===Wr)return rt.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(it===Vr)return rt.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(it===Xr)return rt.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(it===qr)return rt.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(rt=et.get("WEBGL_compressed_texture_s3tc"),rt!==null){if(it===Wr)return rt.COMPRESSED_RGB_S3TC_DXT1_EXT;if(it===Vr)return rt.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(it===Xr)return rt.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(it===qr)return rt.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(it===Za||it===Ja||it===$a||it===Ka)if(rt=et.get("WEBGL_compressed_texture_pvrtc"),rt!==null){if(it===Za)return rt.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(it===Ja)return rt.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(it===$a)return rt.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(it===Ka)return rt.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(it===Qa||it===ja||it===to||it===eo||it===no||it===Yr||it===io)if(rt=et.get("WEBGL_compressed_texture_etc"),rt!==null){if(it===Qa||it===ja)return at===o?rt.COMPRESSED_SRGB8_ETC2:rt.COMPRESSED_RGB8_ETC2;if(it===to)return at===o?rt.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:rt.COMPRESSED_RGBA8_ETC2_EAC;if(it===eo)return rt.COMPRESSED_R11_EAC;if(it===no)return rt.COMPRESSED_SIGNED_R11_EAC;if(it===Yr)return rt.COMPRESSED_RG11_EAC;if(it===io)return rt.COMPRESSED_SIGNED_RG11_EAC}else return null;if(it===so||it===ro||it===ao||it===oo||it===lo||it===co||it===ho||it===uo||it===fo||it===po||it===mo||it===go||it===_o||it===xo)if(rt=et.get("WEBGL_compressed_texture_astc"),rt!==null){if(it===so)return at===o?rt.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:rt.COMPRESSED_RGBA_ASTC_4x4_KHR;if(it===ro)return at===o?rt.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:rt.COMPRESSED_RGBA_ASTC_5x4_KHR;if(it===ao)return at===o?rt.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:rt.COMPRESSED_RGBA_ASTC_5x5_KHR;if(it===oo)return at===o?rt.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:rt.COMPRESSED_RGBA_ASTC_6x5_KHR;if(it===lo)return at===o?rt.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:rt.COMPRESSED_RGBA_ASTC_6x6_KHR;if(it===co)return at===o?rt.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:rt.COMPRESSED_RGBA_ASTC_8x5_KHR;if(it===ho)return at===o?rt.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:rt.COMPRESSED_RGBA_ASTC_8x6_KHR;if(it===uo)return at===o?rt.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:rt.COMPRESSED_RGBA_ASTC_8x8_KHR;if(it===fo)return at===o?rt.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:rt.COMPRESSED_RGBA_ASTC_10x5_KHR;if(it===po)return at===o?rt.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:rt.COMPRESSED_RGBA_ASTC_10x6_KHR;if(it===mo)return at===o?rt.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:rt.COMPRESSED_RGBA_ASTC_10x8_KHR;if(it===go)return at===o?rt.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:rt.COMPRESSED_RGBA_ASTC_10x10_KHR;if(it===_o)return at===o?rt.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:rt.COMPRESSED_RGBA_ASTC_12x10_KHR;if(it===xo)return at===o?rt.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:rt.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(it===vo||it===yo||it===So)if(rt=et.get("EXT_texture_compression_bptc"),rt!==null){if(it===vo)return at===o?rt.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:rt.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(it===yo)return rt.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(it===So)return rt.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(it===Mo||it===bo||it===Zr||it===To)if(rt=et.get("EXT_texture_compression_rgtc"),rt!==null){if(it===Mo)return rt.COMPRESSED_RED_RGTC1_EXT;if(it===bo)return rt.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(it===Zr)return rt.COMPRESSED_RED_GREEN_RGTC2_EXT;if(it===To)return rt.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(it===ds)return tt.UNSIGNED_INT_24_8;return tt[it]!==void 0?tt[it]:null}return{convert:nt}}var Cg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ig=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class zh{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(tt,et){if(this.texture===null){let nt=new ia(tt.texture);if(tt.depthNear!==et.depthNear||tt.depthFar!==et.depthFar)this.depthNear=tt.depthNear,this.depthFar=tt.depthFar;this.texture=nt}}getMesh(tt){if(this.texture!==null){if(this.mesh===null){let et=tt.cameras[0].viewport,nt=new u({vertexShader:Cg,fragmentShader:Ig,uniforms:{depthColor:{value:this.texture},depthWidth:{value:et.z},depthHeight:{value:et.w}}});this.mesh=new r(new O(20,20),nt)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Gh extends Wi{constructor(tt,et){super();let nt=this,it=null,st=1,rt=null,at="local-floor",ot=1,lt=null,ct=null,ht=null,dt=null,ut=null,pt=null,vt=typeof XRWebGLBinding<"u",Mt=new zh,ft={},mt=et.getContextAttributes(),Tt=null,Et=null,bt=[],At=[],It=new n,gt=null,yt=null,Nt=new x;Nt.viewport=new Fn;let kt=new x;kt.viewport=new Fn;let Lt=[Nt,kt],zt=new Jo,Kt=null,Rt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Yt){let We=bt[Yt];if(We===void 0)We=new ir,bt[Yt]=We;return We.getTargetRaySpace()},this.getControllerGrip=function(Yt){let We=bt[Yt];if(We===void 0)We=new ir,bt[Yt]=We;return We.getGripSpace()},this.getHand=function(Yt){let We=bt[Yt];if(We===void 0)We=new ir,bt[Yt]=We;return We.getHandSpace()};function qt(Yt){let We=At.indexOf(Yt.inputSource);if(We===-1)return;let ln=bt[We];if(ln!==void 0)ln.update(Yt.inputSource,Yt.frame,lt||rt),ln.dispatchEvent({type:Yt.type,data:Yt.inputSource})}function Zt(){it.removeEventListener("select",qt),it.removeEventListener("selectstart",qt),it.removeEventListener("selectend",qt),it.removeEventListener("squeeze",qt),it.removeEventListener("squeezestart",qt),it.removeEventListener("squeezeend",qt),it.removeEventListener("end",Zt),it.removeEventListener("inputsourceschange",Ot);for(let Yt=0;Yt<bt.length;Yt++){let We=At[Yt];if(We===null)continue;At[Yt]=null,bt[Yt].disconnect(We)}Kt=null,Rt=null,Mt.reset();for(let Yt in ft)delete ft[Yt];if(tt.setRenderTarget(Tt),ut=null,dt=null,ht=null,it=null,Et=null,hn.stop(),nt.isPresenting=!1,tt.setPixelRatio(gt),tt.setSize(It.width,It.height,!1),yt!==null){let Yt=yt.camera;Yt.fov=yt.fov,Yt.zoom=yt.zoom,Yt.updateProjectionMatrix(),yt=null}nt.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Yt){if(st=Yt,nt.isPresenting===!0)fn("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Yt){if(at=Yt,nt.isPresenting===!0)fn("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return lt||rt},this.setReferenceSpace=function(Yt){lt=Yt},this.getBaseLayer=function(){return dt!==null?dt:ut},this.getBinding=function(){if(ht===null&&vt)ht=new XRWebGLBinding(it,et);return ht},this.getFrame=function(){return pt},this.getSession=function(){return it},this.setSession=async function(Yt){if(it=Yt,it!==null){if(Tt=tt.getRenderTarget(),it.addEventListener("select",qt),it.addEventListener("selectstart",qt),it.addEventListener("selectend",qt),it.addEventListener("squeeze",qt),it.addEventListener("squeezestart",qt),it.addEventListener("squeezeend",qt),it.addEventListener("end",Zt),it.addEventListener("inputsourceschange",Ot),mt.xrCompatible!==!0)await et.makeXRCompatible();if(gt=tt.getPixelRatio(),tt.getSize(It),!(vt&&("createProjectionLayer"in XRWebGLBinding.prototype))){let ln={antialias:mt.antialias,alpha:!0,depth:mt.depth,stencil:mt.stencil,framebufferScaleFactor:st};ut=new XRWebGLLayer(it,et,ln),it.updateRenderState({baseLayer:ut}),tt.setPixelRatio(1),tt.setSize(ut.framebufferWidth,ut.framebufferHeight,!1),Et=new _(ut.framebufferWidth,ut.framebufferHeight,{format:Hi,type:Ti,colorSpace:tt.outputColorSpace,stencilBuffer:mt.stencil,resolveDepthBuffer:ut.ignoreDepthValues===!1,resolveStencilBuffer:ut.ignoreDepthValues===!1,storeMultisampledDepthBuffer:ut.ignoreDepthValues===!1,storeMultisampledStencilBuffer:ut.ignoreDepthValues===!1})}else{let ln=null,gn=null,_n=null;if(mt.depth)_n=mt.stencil?et.DEPTH24_STENCIL8:et.DEPTH_COMPONENT24,ln=mt.stencil?Qi:Fs,gn=mt.stencil?ds:Ki;let cn={colorFormat:et.RGBA8,depthFormat:_n,scaleFactor:st};ht=this.getBinding(),dt=ht.createProjectionLayer(cn),it.updateRenderState({layers:[dt]}),tt.setPixelRatio(1),tt.setSize(dt.textureWidth,dt.textureHeight,!1),Et=new _(dt.textureWidth,dt.textureHeight,{format:Hi,type:Ti,depthTexture:new ji(dt.textureWidth,dt.textureHeight,gn,void 0,void 0,void 0,void 0,void 0,void 0,ln),stencilBuffer:mt.stencil,colorSpace:tt.outputColorSpace,samples:mt.antialias?4:0,resolveDepthBuffer:dt.ignoreDepthValues===!1,resolveStencilBuffer:dt.ignoreDepthValues===!1,storeMultisampledDepthBuffer:dt.ignoreDepthValues===!1,storeMultisampledStencilBuffer:dt.ignoreDepthValues===!1})}Et.isXRRenderTarget=!0,this.setFoveation(ot),lt=null,rt=await it.requestReferenceSpace(at),hn.setContext(it),hn.start(),nt.isPresenting=!0,nt.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(it!==null)return it.environmentBlendMode},this.getDepthTexture=function(){return Mt.getDepthTexture()};function Ot(Yt){for(let We=0;We<Yt.removed.length;We++){let ln=Yt.removed[We],gn=At.indexOf(ln);if(gn>=0)At[gn]=null,bt[gn].disconnect(ln)}for(let We=0;We<Yt.added.length;We++){let ln=Yt.added[We],gn=At.indexOf(ln);if(gn===-1){for(let cn=0;cn<bt.length;cn++)if(cn>=At.length){At.push(ln),gn=cn;break}else if(At[cn]===null){At[cn]=ln,gn=cn;break}if(gn===-1)break}let _n=bt[gn];if(_n)_n.connect(ln)}}function Ye(Yt,We){if(We===null)Yt.matrixWorld.copy(Yt.matrix);else Yt.matrixWorld.multiplyMatrices(We.matrixWorld,Yt.matrix);Yt.matrixWorldInverse.copy(Yt.matrixWorld).invert()}this.updateCamera=function(Yt){if(it===null)return;let{near:We,far:ln}=Yt;if(Mt.texture!==null){if(Mt.depthNear>0)We=Mt.depthNear;if(Mt.depthFar>0)ln=Mt.depthFar}if(zt.near=kt.near=Nt.near=We,zt.far=kt.far=Nt.far=ln,Kt!==zt.near||Rt!==zt.far)it.updateRenderState({depthNear:zt.near,depthFar:zt.far}),Kt=zt.near,Rt=zt.far;zt.layers.mask=Yt.layers.mask|6,Nt.layers.mask=zt.layers.mask&-5,kt.layers.mask=zt.layers.mask&-3;let gn=Yt.parent,_n=zt.cameras;Ye(zt,gn);for(let cn=0;cn<_n.length;cn++)Ye(_n[cn],gn);if(zt.projectionMatrix.copy(Nt.projectionMatrix),zt.projectionMatrixInverse.copy(Nt.projectionMatrixInverse),yt===null&&Yt.isPerspectiveCamera)yt={camera:Yt,fov:Yt.fov,zoom:Yt.zoom};Wt(Yt,zt,gn)};function Wt(Yt,We,ln){if(ln===null)Yt.matrix.copy(We.matrixWorld);else Yt.matrix.copy(ln.matrixWorld),Yt.matrix.invert(),Yt.matrix.multiply(We.matrixWorld);if(Yt.matrix.decompose(Yt.position,Yt.quaternion,Yt.scale),Yt.updateMatrixWorld(!0),Yt.projectionMatrix.copy(We.projectionMatrix),Yt.projectionMatrixInverse.copy(We.projectionMatrixInverse),Yt.isPerspectiveCamera)Yt.fov=hs*2*Math.atan(1/Yt.projectionMatrix.elements[5]),Yt.zoom=1}this.getCamera=function(){return zt},this.getFoveation=function(){if(dt===null&&ut===null)return;return ot},this.setFoveation=function(Yt){if(ot=Yt,dt!==null)dt.fixedFoveation=Yt;if(ut!==null&&ut.fixedFoveation!==void 0)ut.fixedFoveation=Yt},this.hasDepthSensing=function(){return Mt.texture!==null},this.getDepthSensingMesh=function(){return Mt.getMesh(zt)},this.getCameraTexture=function(Yt){return ft[Yt]};let $t=null;function Ve(Yt,We){if(ct=We.getViewerPose(lt||rt),pt=We,ct!==null){let ln=ct.views;if(ut!==null)tt.setRenderTargetFramebuffer(Et,ut.framebuffer),tt.setRenderTarget(Et);let gn=!1;if(ln.length!==zt.cameras.length)zt.cameras.length=0,gn=!0;for(let An=0;An<ln.length;An++){let bn=ln[An],Gn=null;if(ut!==null)Gn=ut.getViewport(bn);else{let Hn=ht.getViewSubImage(dt,bn);if(Gn=Hn.viewport,An===0)tt.setRenderTargetTextures(Et,Hn.colorTexture,Hn.depthStencilTexture),tt.setRenderTarget(Et)}let In=Lt[An];if(In===void 0)In=new x,In.layers.enable(An),In.viewport=new Fn,Lt[An]=In;if(In.matrix.fromArray(bn.transform.matrix),In.matrix.decompose(In.position,In.quaternion,In.scale),In.projectionMatrix.fromArray(bn.projectionMatrix),In.projectionMatrixInverse.copy(In.projectionMatrix).invert(),In.viewport.set(Gn.x,Gn.y,Gn.width,Gn.height),An===0)zt.matrix.copy(In.matrix),zt.matrix.decompose(zt.position,zt.quaternion,zt.scale);if(gn===!0)zt.cameras.push(In)}let _n=it.enabledFeatures;if(_n&&_n.includes("depth-sensing")&&it.depthUsage=="gpu-optimized"&&vt){ht=nt.getBinding();let An=ht.getDepthInformation(ln[0]);if(An&&An.isValid&&An.texture)Mt.init(An,it.renderState)}if(_n&&_n.includes("camera-access")&&vt){tt.state.unbindTexture(),ht=nt.getBinding();for(let An=0;An<ln.length;An++){let bn=ln[An].camera;if(bn){let Gn=ft[bn];if(!Gn)Gn=new ia,ft[bn]=Gn;let In=ht.getCameraImage(bn);Gn.sourceTexture=In}}}}for(let ln=0;ln<bt.length;ln++){let gn=At[ln],_n=bt[ln];if(gn!==null&&_n!==void 0)_n.update(gn,We,lt||rt)}if($t)$t(Yt,We);if(We.detectedPlanes)nt.dispatchEvent({type:"planesdetected",data:We});pt=null}let hn=new Th;hn.setAnimationLoop(Ve),this.setAnimationLoop=function(Yt){$t=Yt},this.dispose=function(){}}}var Pg=new i,kh=new yn;kh.set(-1,0,0,0,1,0,0,0,1);function Lg(tt,et){function nt(ft,mt){if(ft.matrixAutoUpdate===!0)ft.updateMatrix();mt.value.copy(ft.matrix)}function it(ft,mt){if(mt.color.getRGB(ft.fogColor.value,zo(tt)),mt.isFog)ft.fogNear.value=mt.near,ft.fogFar.value=mt.far;else if(mt.isFogExp2)ft.fogDensity.value=mt.density}function st(ft,mt,Tt,Et,bt){if(mt.isNodeMaterial)mt.uniformsNeedUpdate=!1;else if(mt.isMeshBasicMaterial)rt(ft,mt);else if(mt.isMeshLambertMaterial){if(rt(ft,mt),mt.envMap)ft.envMapIntensity.value=mt.envMapIntensity}else if(mt.isMeshToonMaterial)rt(ft,mt),dt(ft,mt);else if(mt.isMeshPhongMaterial){if(rt(ft,mt),ht(ft,mt),mt.envMap)ft.envMapIntensity.value=mt.envMapIntensity}else if(mt.isMeshStandardMaterial){if(rt(ft,mt),ut(ft,mt),mt.isMeshPhysicalMaterial)pt(ft,mt,bt)}else if(mt.isMeshMatcapMaterial)rt(ft,mt),vt(ft,mt);else if(mt.isMeshDepthMaterial)rt(ft,mt);else if(mt.isMeshDistanceMaterial)rt(ft,mt),Mt(ft,mt);else if(mt.isMeshNormalMaterial)rt(ft,mt);else if(mt.isLineBasicMaterial){if(at(ft,mt),mt.isLineDashedMaterial)ot(ft,mt)}else if(mt.isPointsMaterial)lt(ft,mt,Tt,Et);else if(mt.isSpriteMaterial)ct(ft,mt);else if(mt.isShadowMaterial)ft.color.value.copy(mt.color),ft.opacity.value=mt.opacity;else if(mt.isShaderMaterial)mt.uniformsNeedUpdate=!1}function rt(ft,mt){if(ft.opacity.value=mt.opacity,mt.color)ft.diffuse.value.copy(mt.color);if(mt.emissive)ft.emissive.value.copy(mt.emissive).multiplyScalar(mt.emissiveIntensity);if(mt.map)ft.map.value=mt.map,nt(mt.map,ft.mapTransform);if(mt.alphaMap)ft.alphaMap.value=mt.alphaMap,nt(mt.alphaMap,ft.alphaMapTransform);if(mt.bumpMap){if(ft.bumpMap.value=mt.bumpMap,nt(mt.bumpMap,ft.bumpMapTransform),ft.bumpScale.value=mt.bumpScale,mt.side===y)ft.bumpScale.value*=-1}if(mt.normalMap){if(ft.normalMap.value=mt.normalMap,nt(mt.normalMap,ft.normalMapTransform),ft.normalScale.value.copy(mt.normalScale),mt.side===y)ft.normalScale.value.negate()}if(mt.displacementMap)ft.displacementMap.value=mt.displacementMap,nt(mt.displacementMap,ft.displacementMapTransform),ft.displacementScale.value=mt.displacementScale,ft.displacementBias.value=mt.displacementBias;if(mt.emissiveMap)ft.emissiveMap.value=mt.emissiveMap,nt(mt.emissiveMap,ft.emissiveMapTransform);if(mt.specularMap)ft.specularMap.value=mt.specularMap,nt(mt.specularMap,ft.specularMapTransform);if(mt.alphaTest>0)ft.alphaTest.value=mt.alphaTest;let Tt=et.get(mt),{envMap:Et,envMapRotation:bt}=Tt;if(Et){if(ft.envMap.value=Et,ft.envMapRotation.value.setFromMatrix4(Pg.makeRotationFromEuler(bt)).transpose(),Et.isCubeTexture&&Et.isRenderTargetTexture===!1)ft.envMapRotation.value.premultiply(kh);ft.reflectivity.value=mt.reflectivity,ft.ior.value=mt.ior,ft.refractionRatio.value=mt.refractionRatio}if(mt.lightMap)ft.lightMap.value=mt.lightMap,ft.lightMapIntensity.value=mt.lightMapIntensity,nt(mt.lightMap,ft.lightMapTransform);if(mt.aoMap)ft.aoMap.value=mt.aoMap,ft.aoMapIntensity.value=mt.aoMapIntensity,nt(mt.aoMap,ft.aoMapTransform)}function at(ft,mt){if(ft.diffuse.value.copy(mt.color),ft.opacity.value=mt.opacity,mt.map)ft.map.value=mt.map,nt(mt.map,ft.mapTransform)}function ot(ft,mt){ft.dashSize.value=mt.dashSize,ft.totalSize.value=mt.dashSize+mt.gapSize,ft.scale.value=mt.scale}function lt(ft,mt,Tt,Et){if(ft.diffuse.value.copy(mt.color),ft.opacity.value=mt.opacity,ft.size.value=mt.size*Tt,ft.scale.value=Et*0.5,mt.map)ft.map.value=mt.map,nt(mt.map,ft.uvTransform);if(mt.alphaMap)ft.alphaMap.value=mt.alphaMap,nt(mt.alphaMap,ft.alphaMapTransform);if(mt.alphaTest>0)ft.alphaTest.value=mt.alphaTest}function ct(ft,mt){if(ft.diffuse.value.copy(mt.color),ft.opacity.value=mt.opacity,ft.rotation.value=mt.rotation,mt.map)ft.map.value=mt.map,nt(mt.map,ft.mapTransform);if(mt.alphaMap)ft.alphaMap.value=mt.alphaMap,nt(mt.alphaMap,ft.alphaMapTransform);if(mt.alphaTest>0)ft.alphaTest.value=mt.alphaTest}function ht(ft,mt){ft.specular.value.copy(mt.specular),ft.shininess.value=Math.max(mt.shininess,0.0001)}function dt(ft,mt){if(mt.gradientMap)ft.gradientMap.value=mt.gradientMap}function ut(ft,mt){if(ft.metalness.value=mt.metalness,mt.metalnessMap)ft.metalnessMap.value=mt.metalnessMap,nt(mt.metalnessMap,ft.metalnessMapTransform);if(ft.roughness.value=mt.roughness,mt.roughnessMap)ft.roughnessMap.value=mt.roughnessMap,nt(mt.roughnessMap,ft.roughnessMapTransform);if(mt.envMap)ft.envMapIntensity.value=mt.envMapIntensity}function pt(ft,mt,Tt){if(ft.ior.value=mt.ior,mt.diffuseRoughness>0){if(ft.diffuseRoughness.value=mt.diffuseRoughness,mt.diffuseRoughnessMap)ft.diffuseRoughnessMap.value=mt.diffuseRoughnessMap,nt(mt.diffuseRoughnessMap,ft.diffuseRoughnessMapTransform)}if(mt.sheen>0){if(ft.sheenColor.value.copy(mt.sheenColor).multiplyScalar(mt.sheen),ft.sheenRoughness.value=mt.sheenRoughness,mt.sheenColorMap)ft.sheenColorMap.value=mt.sheenColorMap,nt(mt.sheenColorMap,ft.sheenColorMapTransform);if(mt.sheenRoughnessMap)ft.sheenRoughnessMap.value=mt.sheenRoughnessMap,nt(mt.sheenRoughnessMap,ft.sheenRoughnessMapTransform)}if(mt.clearcoat>0){if(ft.clearcoat.value=mt.clearcoat,ft.clearcoatRoughness.value=mt.clearcoatRoughness,mt.clearcoatMap)ft.clearcoatMap.value=mt.clearcoatMap,nt(mt.clearcoatMap,ft.clearcoatMapTransform);if(mt.clearcoatRoughnessMap)ft.clearcoatRoughnessMap.value=mt.clearcoatRoughnessMap,nt(mt.clearcoatRoughnessMap,ft.clearcoatRoughnessMapTransform);if(mt.clearcoatNormalMap){if(ft.clearcoatNormalMap.value=mt.clearcoatNormalMap,nt(mt.clearcoatNormalMap,ft.clearcoatNormalMapTransform),ft.clearcoatNormalScale.value.copy(mt.clearcoatNormalScale),mt.side===y)ft.clearcoatNormalScale.value.negate()}}if(mt.dispersion>0)ft.dispersion.value=mt.dispersion;if(mt.retroreflectivity>0)ft.retroreflectivity.value=mt.retroreflectivity;if(mt.iridescence>0){if(ft.iridescence.value=mt.iridescence,ft.iridescenceIOR.value=mt.iridescenceIOR,ft.iridescenceThicknessMinimum.value=mt.iridescenceThicknessMinimum,ft.iridescenceThicknessMaximum.value=mt.iridescenceThicknessMaximum,mt.iridescenceMap)ft.iridescenceMap.value=mt.iridescenceMap,nt(mt.iridescenceMap,ft.iridescenceMapTransform);if(mt.iridescenceThicknessMap)ft.iridescenceThicknessMap.value=mt.iridescenceThicknessMap,nt(mt.iridescenceThicknessMap,ft.iridescenceThicknessMapTransform)}if(mt.transmission>0){if(ft.transmission.value=mt.transmission,ft.transmissionSamplerMap.value=Tt.texture,ft.transmissionSamplerSize.value.set(Tt.width,Tt.height),mt.transmissionMap)ft.transmissionMap.value=mt.transmissionMap,nt(mt.transmissionMap,ft.transmissionMapTransform);if(ft.thickness.value=mt.thickness,mt.thicknessMap)ft.thicknessMap.value=mt.thicknessMap,nt(mt.thicknessMap,ft.thicknessMapTransform);ft.attenuationDistance.value=mt.attenuationDistance,ft.attenuationColor.value.copy(mt.attenuationColor)}if(mt.anisotropy>0){if(ft.anisotropyVector.value.set(mt.anisotropy*Math.cos(mt.anisotropyRotation),mt.anisotropy*Math.sin(mt.anisotropyRotation)),mt.anisotropyMap)ft.anisotropyMap.value=mt.anisotropyMap,nt(mt.anisotropyMap,ft.anisotropyMapTransform)}if(ft.specularIntensity.value=mt.specularIntensity,ft.specularColor.value.copy(mt.specularColor),mt.specularColorMap)ft.specularColorMap.value=mt.specularColorMap,nt(mt.specularColorMap,ft.specularColorMapTransform);if(mt.specularIntensityMap)ft.specularIntensityMap.value=mt.specularIntensityMap,nt(mt.specularIntensityMap,ft.specularIntensityMapTransform)}function vt(ft,mt){if(mt.matcap)ft.matcap.value=mt.matcap}function Mt(ft,mt){let Tt=et.get(mt).light;ft.referencePosition.value.setFromMatrixPosition(Tt.matrixWorld),ft.nearDistance.value=Tt.shadow.camera.near,ft.farDistance.value=Tt.shadow.camera.far}return{refreshFogUniforms:it,refreshMaterialUniforms:st}}function Ng(tt,et,nt,it){let st={},rt={};function at(Tt,Et){let bt=Et.program;it.uniformBlockBinding(Tt,bt,st[Tt.id])}function ot(Tt,Et){let bt=st[Tt.id];if(bt===void 0)vt(Tt),bt=lt(Tt),st[Tt.id]=bt,Tt.addEventListener("dispose",ft);let At=Et.program;it.updateUBOMapping(Tt,At);let It=et.render.frame;if(rt[Tt.id]!==It)ct(Tt),rt[Tt.id]=It}function lt(Tt){let Et=tt.createBuffer(),{__size:bt,usage:At}=Tt;return tt.bindBuffer(tt.UNIFORM_BUFFER,Et),tt.bufferData(tt.UNIFORM_BUFFER,bt,At),tt.bindBuffer(tt.UNIFORM_BUFFER,null),Et}function ct(Tt){let Et=st[Tt.id],{uniforms:bt,__cache:At}=Tt;tt.bindBuffer(tt.UNIFORM_BUFFER,Et);for(let It=0,gt=bt.length;It<gt;It++){let yt=bt[It];if(Array.isArray(yt))for(let Nt=0,kt=yt.length;Nt<kt;Nt++)ht(yt[Nt],It,Nt,At);else ht(yt,It,0,At)}tt.bindBuffer(tt.UNIFORM_BUFFER,null)}function ht(Tt,Et,bt,At){if(ut(Tt,Et,bt,At)===!0){let{__offset:It,value:gt}=Tt;if(Array.isArray(gt)){let yt=0;for(let Nt=0;Nt<gt.length;Nt++){let kt=gt[Nt],Lt=Mt(kt,!0);dt(kt,Tt.__data,yt),yt+=Lt.storage/Float32Array.BYTES_PER_ELEMENT}}else dt(gt,Tt.__data,0);tt.bufferSubData(tt.UNIFORM_BUFFER,It,Tt.__data)}}function dt(Tt,Et,bt){if(typeof Tt==="number"||typeof Tt==="boolean")Et[bt]=Tt;else if(Tt.isMatrix3)Et[bt]=Tt.elements[0],Et[bt+1]=Tt.elements[1],Et[bt+2]=Tt.elements[2],Et[bt+3]=0,Et[bt+4]=Tt.elements[3],Et[bt+5]=Tt.elements[4],Et[bt+6]=Tt.elements[5],Et[bt+7]=0,Et[bt+8]=Tt.elements[6],Et[bt+9]=Tt.elements[7],Et[bt+10]=Tt.elements[8],Et[bt+11]=0;else if(ArrayBuffer.isView(Tt))Et.set(Tt.subarray(0,Et.length-bt),bt);else Tt.toArray(Et,bt)}function ut(Tt,Et,bt,At){let It=Tt.value,gt=Et+"_"+bt;if(Array.isArray(It)){if(At[gt]===void 0)At[gt]=[];let yt=At[gt],Nt=!1;for(let kt=0;kt<It.length;kt++)if(pt(It[kt],yt,kt)===!0)Nt=!0;return Nt}return pt(It,At,gt)}function pt(Tt,Et,bt){if(Et[bt]===void 0){if(typeof Tt==="number"||typeof Tt==="boolean")Et[bt]=Tt;else if(ArrayBuffer.isView(Tt))Et[bt]=Tt.slice();else Et[bt]=Tt.clone();return!0}else{let At=Et[bt];if(typeof Tt==="number"||typeof Tt==="boolean"){if(At!==Tt)return Et[bt]=Tt,!0}else if(ArrayBuffer.isView(Tt))return!0;else if(At.equals(Tt)===!1)return At.copy(Tt),!0}return!1}function vt(Tt){let Et=Tt.uniforms,bt=0,At=16;for(let gt=0,yt=Et.length;gt<yt;gt++){let Nt=Array.isArray(Et[gt])?Et[gt]:[Et[gt]];for(let kt=0,Lt=Nt.length;kt<Lt;kt++){let zt=Nt[kt],Kt=Array.isArray(zt.value)?zt.value:[zt.value],Rt=Array.isArray(Et[gt])||Array.isArray(zt.value),qt=bt;for(let Ot=0,Ye=Kt.length;Ot<Ye;Ot++){let Wt=Kt[Ot],$t=Mt(Wt,Rt),Ve=bt%At,hn=Ve%$t.boundary,Yt=Ve+hn;if(bt+=hn,Yt!==0&&At-Yt<$t.storage)bt+=At-Yt;if(Ot===0)qt=bt;bt+=$t.storage}let Zt=zt.type==="int"?Int32Array:zt.type==="uint"?Uint32Array:Float32Array;zt.__data=new Zt((bt-qt)/Float32Array.BYTES_PER_ELEMENT),zt.__offset=qt}}let It=bt%At;if(It>0)bt+=At-It;return Tt.__size=bt,Tt.__cache={},this}function Mt(Tt,Et){let bt={boundary:0,storage:0};if(typeof Tt==="number"||typeof Tt==="boolean")bt.boundary=4,bt.storage=4;else if(Tt.isVector2)bt.boundary=8,bt.storage=8;else if(Tt.isVector3||Tt.isColor)bt.boundary=16,bt.storage=12;else if(Tt.isVector4)bt.boundary=16,bt.storage=16;else if(Tt.isMatrix3)bt.boundary=16,bt.storage=48;else if(Tt.isMatrix4)bt.boundary=16,bt.storage=64;else if(Tt.isTexture)fn("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(Tt))bt.boundary=16,bt.storage=Tt.byteLength;else fn("WebGLRenderer: Unsupported uniform value type.",Tt);if(Et===!0)bt.boundary=16,bt.storage=Math.ceil(bt.storage/16)*16;return bt}function ft(Tt){let Et=Tt.target;Et.removeEventListener("dispose",ft),tt.deleteBuffer(st[Et.id]),delete st[Et.id],delete rt[Et.id]}function mt(){for(let Tt in st)tt.deleteBuffer(st[Tt]);st={},rt={}}return{bind:at,update:ot,dispose:mt}}var Dg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ii=null;function Ug(){if(Ii===null)Ii=new sr(Dg,16,16,fs,S),Ii.name="DFG_LUT",Ii.minFilter=p,Ii.magFilter=p,Ii.wrapS=re,Ii.wrapT=re,Ii.generateMipmaps=!1,Ii.needsUpdate=!0;return Ii}class He{constructor(tt={}){let{canvas:et=Vc(),context:nt=null,depth:it=!0,stencil:st=!1,alpha:rt=!1,antialias:at=!1,premultipliedAlpha:ot=!0,preserveDrawingBuffer:lt=!1,powerPreference:ct="default",failIfMajorPerformanceCaveat:ht=!1,reversedDepthBuffer:dt=!1,outputBufferType:ut=Ti}=tt;this.isWebGLRenderer=!0;let pt;if(nt!==null){if(typeof WebGLRenderingContext<"u"&&nt instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");pt=nt.getContextAttributes().alpha}else pt=rt;let vt=ut,Mt=new Set([Ya,qa,Xa]),ft=new Set([Ti,Ki,er,ds,Wa,Va]),mt=new Uint32Array(4),Tt=new Int32Array(4),Et={textures:[],min:[],max:[],resolution:[]},bt=null,At=null,It=[],gt=[],yt=null;this.domElement=et,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=R,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let Nt=this,kt=!1,Lt=null,zt=null,Kt=null,Rt=null;this._outputColorSpace=g;let qt=0,Zt=0,Ot=null,Ye=-1,Wt=null,$t=new Fn,Ve=new Fn,hn=null,Yt=new t(0),We=0,{width:ln,height:gn}=et,_n=1,cn=null,Nn=null,An=new Fn(0,0,ln,gn),bn=new Fn(0,0,ln,gn),Gn=!1,In=new us,Hn=new ta,Wn=!1,ci=!1,di=new i,Vn=new e,ti=new Fn,hi={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ui=!1;function xi(){return Ot===null?_n:1}let Pt=nt;function vi(xt,Ct){return et.getContext(xt,Ct)}let Dn,Jn,je,Bn,xn,Sn,ei,St,_t,Dt,Qt,Jt,qe,$e,Gt,Xt,Ze,wt,Vt,Ht,jt,Xe,Qe;try{let xt={alpha:!0,depth:it,stencil:st,antialias:at,premultipliedAlpha:ot,preserveDrawingBuffer:lt,powerPreference:ct,failIfMajorPerformanceCaveat:ht};if("setAttribute"in et)et.setAttribute("data-engine",`three.js r${Ql}`);if(et.addEventListener("webglcontextlost",en,!1),et.addEventListener("webglcontextrestored",mn,!1),et.addEventListener("webglcontextcreationerror",Tn,!1),Pt===null){if(Pt=vi("webgl2",xt),Pt===null)if(vi("webgl2"))throw Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw Error("THREE.WebGLRenderer: Error creating WebGL context.")}pn()}catch(xt){throw et.removeEventListener("webglcontextlost",en,!1),et.removeEventListener("webglcontextrestored",mn,!1),et.removeEventListener("webglcontextcreationerror",Tn,!1),vn("WebGLRenderer: "+xt.message),xt}function pn(){if(Dn=new qp(Pt),Dn.init(),jt=new Rg(Pt,Dn),Jn=new Up(Pt,Dn,tt,jt),je=new Ag(Pt,Dn),Jn.reversedDepthBuffer&&dt)je.buffers.depth.setReversed(!0);zt=Pt.createFramebuffer(),Kt=Pt.createFramebuffer(),Rt=Pt.createFramebuffer(),Bn=new Jp(Pt),xn=new dg,Sn=new wg(Pt,Dn,je,xn,Jn,jt,Bn),ei=new Xp(Nt),St=new $u(Pt),Xe=new Np(Pt,St),_t=new Yp(Pt,St,Bn,Xe),Dt=new Kp(Pt,_t,St,Xe,Bn),wt=new $p(Pt,Jn,Sn),Gt=new Fp(xn),Qt=new ug(Nt,ei,Dn,Jn,Xe,Gt),Jt=new Lg(Nt,xn),qe=new pg,$e=new yg(Dn),Ze=new Lp(Nt,ei,je,Dt,pt,ot),Xt=new Eg(Nt,Dt,Jn),Qe=new Ng(Pt,Bn,Jn,je),Vt=new Dp(Pt,Dn,Bn),Ht=new Zp(Pt,Dn,Bn),Bn.programs=Qt.programs,Nt.capabilities=Jn,Nt.extensions=Dn,Nt.properties=xn,Nt.renderLists=qe,Nt.shadowMap=Xt,Nt.state=je,Nt.info=Bn}if(vt!==Ti)yt=new jp(vt,et.width,et.height,at,it,st);let dn=new Gh(Nt,Pt);this.xr=dn,this.getContext=function(){return Pt},this.getContextAttributes=function(){return Pt.getContextAttributes()},this.forceContextLoss=function(){let xt=Dn.get("WEBGL_lose_context");if(xt)xt.loseContext()},this.forceContextRestore=function(){let xt=Dn.get("WEBGL_lose_context");if(xt)xt.restoreContext()},this.getPixelRatio=function(){return _n},this.setPixelRatio=function(xt){if(xt===void 0)return;_n=xt,this.setSize(ln,gn,!1)},this.getSize=function(xt){return xt.set(ln,gn)},this.setSize=function(xt,Ct,Bt=!0){if(dn.isPresenting){fn("WebGLRenderer: Can't change size while VR device is presenting.");return}if(ln=xt,gn=Ct,et.width=Math.floor(xt*_n),et.height=Math.floor(Ct*_n),Bt===!0)et.style.width=xt+"px",et.style.height=Ct+"px";if(yt!==null)yt.setSize(et.width,et.height);this.setViewport(0,0,xt,Ct)},this.getDrawingBufferSize=function(xt){return xt.set(ln*_n,gn*_n).floor()},this.setDrawingBufferSize=function(xt,Ct,Bt){ln=xt,gn=Ct,_n=Bt,et.width=Math.floor(xt*Bt),et.height=Math.floor(Ct*Bt),this.setViewport(0,0,xt,Ct)},this.setEffects=function(xt){if(vt===Ti){vn("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(xt){for(let Ct=0;Ct<xt.length;Ct++)if(xt[Ct].isOutputPass===!0){fn("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}yt.setEffects(xt||[])},this.getCurrentViewport=function(xt){return xt.copy($t)},this.getViewport=function(xt){return xt.copy(An)},this.setViewport=function(xt,Ct,Bt,Ut){if(xt.isVector4)An.set(xt.x,xt.y,xt.z,xt.w);else An.set(xt,Ct,Bt,Ut);je.viewport($t.copy(An).multiplyScalar(xi()).round())},this.getScissor=function(xt){return xt.copy(bn)},this.setScissor=function(xt,Ct,Bt,Ut){if(xt.isVector4)bn.set(xt.x,xt.y,xt.z,xt.w);else bn.set(xt,Ct,Bt,Ut);je.scissor(Ve.copy(bn).multiplyScalar(xi()).round())},this.getScissorTest=function(){return Gn},this.setScissorTest=function(xt){je.setScissorTest(Gn=xt)},this.setOpaqueSort=function(xt){cn=xt},this.setTransparentSort=function(xt){Nn=xt},this.getClearColor=function(xt){return xt.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor(...arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha(...arguments)},this.clear=function(xt=!0,Ct=!0,Bt=!0){let Ut=0;if(xt){let Ft=!1;if(Ot!==null){let Ke=Ot.texture.format;Ft=Mt.has(Ke)}if(Ft){let Ke=Ot.texture.type,rn=ft.has(Ke),Je=Ze.getClearColor(),sn=Ze.getClearAlpha(),{r:un,g:Mn,b:Rn}=Je;if(rn)mt[0]=un,mt[1]=Mn,mt[2]=Rn,mt[3]=sn,Pt.clearBufferuiv(Pt.COLOR,0,mt);else Tt[0]=un,Tt[1]=Mn,Tt[2]=Rn,Tt[3]=sn,Pt.clearBufferiv(Pt.COLOR,0,Tt)}else Ut|=Pt.COLOR_BUFFER_BIT}if(Ct)Ut|=Pt.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(Bt)Ut|=Pt.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(Ut!==0)Pt.clear(Ut)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(xt){xt.setRenderer(this),Lt=xt},this.dispose=function(){et.removeEventListener("webglcontextlost",en,!1),et.removeEventListener("webglcontextrestored",mn,!1),et.removeEventListener("webglcontextcreationerror",Tn,!1),Ze.dispose(),qe.dispose(),$e.dispose(),Sn.dispose(),xn.dispose(),ei.dispose(),Dt.dispose(),_t.dispose(),Xe.dispose(),Qe.dispose(),Qt.dispose(),dn.dispose(),dn.removeEventListener("sessionstart",nl),dn.removeEventListener("sessionend",il),ns.stop()};function en(xt){xt.preventDefault(),Ks("WebGLRenderer: Context Lost."),kt=!0}function mn(){Ks("WebGLRenderer: Context Restored."),kt=!1;let xt=Bn.autoReset,Ct=Xt.enabled,Bt=Xt.autoUpdate,Ut=Xt.needsUpdate,Ft=Xt.type;pn(),Bn.autoReset=xt,Xt.enabled=Ct,Xt.autoUpdate=Bt,Xt.needsUpdate=Ut,Xt.type=Ft}function Tn(xt){vn("WebGLRenderer: A WebGL context could not be created. Reason: ",xt.statusMessage)}function nn(xt){let Ct=xt.target;Ct.removeEventListener("dispose",nn),Un(Ct)}function Un(xt){$n(xt),xn.remove(xt)}function $n(xt){let Ct=xn.get(xt).programs;if(Ct!==void 0){if(Ct.forEach(function(Bt){Qt.releaseProgram(Bt)}),xt.isShaderMaterial)Qt.releaseShaderCache(xt)}}this.renderBufferDirect=function(xt,Ct,Bt,Ut,Ft,Ke){if(Ct===null)Ct=hi;let rn=Ft.isMesh&&Ft.matrixWorld.determinantAffine()<0,Je=Vh(xt,Ct,Bt,Ut,Ft);je.setMaterial(Ut,rn);let sn=Bt.index,un=1;if(Ut.wireframe===!0){if(sn=_t.getWireframeAttribute(Bt),sn===void 0)return;un=2}let Mn=Bt.drawRange,Rn=Bt.attributes.position,an=Mn.start*un,Cn=(Mn.start+Mn.count)*un;if(Ke!==null)an=Math.max(an,Ke.start*un),Cn=Math.min(Cn,(Ke.start+Ke.count)*un);if(sn!==null)an=Math.max(an,0),Cn=Math.min(Cn,sn.count);else if(Rn!==void 0&&Rn!==null)an=Math.max(an,0),Cn=Math.min(Cn,Rn.count);let Xn=Cn-an;if(Xn<0||Xn===1/0)return;Xe.setup(Ft,Ut,Je,Bt,sn);let zn,On=Vt;if(sn!==null)zn=St.get(sn),On=Ht,On.setIndex(zn);if(Ft.isMesh)if(Ut.wireframe===!0)je.setLineWidth(Ut.wireframeLinewidth*xi()),On.setMode(Pt.LINES);else On.setMode(Pt.TRIANGLES);else if(Ft.isLine){let ni=Ut.linewidth;if(ni===void 0)ni=1;if(je.setLineWidth(ni*xi()),Ft.isLineSegments)On.setMode(Pt.LINES);else if(Ft.isLineLoop)On.setMode(Pt.LINE_LOOP);else On.setMode(Pt.LINE_STRIP)}else if(Ft.isPoints)On.setMode(Pt.POINTS);else if(Ft.isSprite)On.setMode(Pt.TRIANGLES);if(Ft.isBatchedMesh)if(!Dn.get("WEBGL_multi_draw")){let{_multiDrawStarts:ni,_multiDrawCounts:on,_multiDrawCount:oi}=Ft,Ln=sn?St.get(sn).bytesPerElement:1,is=xn.get(Ut).currentProgram.getUniforms();for(let ii=0;ii<oi;ii++)is.setValue(Pt,"_gl_DrawID",ii),On.render(ni[ii]/Ln,on[ii])}else On.renderMultiDraw(Ft._multiDrawStarts,Ft._multiDrawCounts,Ft._multiDrawCount);else if(Ft.isInstancedMesh)On.renderInstances(an,Xn,Ft.count);else if(Bt.isInstancedBufferGeometry){let ni=Bt._maxInstanceCount!==void 0?Bt._maxInstanceCount:1/0,on=Math.min(Bt.instanceCount,ni);On.renderInstances(an,Xn,on)}else On.render(an,Xn)};function Li(xt,Ct,Bt,Ut){if(Lt!==null&&xt.isNodeMaterial)Lt.setObject(Ut,xt);if(Wn===!0)Gt.setState(xt,Bt,!1);if(xt.transparent===!0&&xt.side===T&&xt.forceSinglePass===!1)xt.side=y,xt.needsUpdate=!0,zs(xt,Ct,Ut),xt.side=H,xt.needsUpdate=!0,zs(xt,Ct,Ut),xt.side=T;else zs(xt,Ct,Ut)}this.compile=function(xt,Ct,Bt=null){if(Bt===null)Bt=xt;if(Lt!==null)Lt.renderStart(xt,Ct,Bt);if(At=$e.get(Bt),At.init(Ct),gt.push(At),Bt.traverseVisible(function(Ft){if(Ft.isLight&&Ft.layers.test(Ct.layers)){if(At.pushLight(Ft),Ft.castShadow)At.pushShadow(Ft)}}),xt!==Bt)xt.traverseVisible(function(Ft){if(Ft.isLight&&Ft.layers.test(Ct.layers)){if(At.pushLight(Ft),Ft.castShadow)At.pushShadow(Ft)}});if(At.setupLights(),Lt!==null)Lt.updateLights(At.state.lightsArray);if(ci=this.localClippingEnabled,Wn=Gt.init(this.clippingPlanes,ci),Wn===!0)Gt.setGlobalState(this.clippingPlanes,Ct);if(Lt!==null)Xt.render(At.state.shadowsArray,Bt,Ct);let Ut=new Set;if(xt.traverse(function(Ft){if(!(Ft.isMesh||Ft.isPoints||Ft.isLine||Ft.isSprite))return;let Ke=Ft.material;if(Ke)if(Array.isArray(Ke))for(let rn=0;rn<Ke.length;rn++){let Je=Ke[rn];Li(Je,Bt,Ct,Ft),Ut.add(Je)}else Li(Ke,Bt,Ct,Ft),Ut.add(Ke)}),At=gt.pop(),Lt!==null)Lt.renderEnd();return Ut},this.compileAsync=function(xt,Ct,Bt=null){let Ut=this.compile(xt,Ct,Bt);return new Promise((Ft)=>{function Ke(){if(Ut.forEach(function(rn){let sn=xn.get(rn).currentProgram;if(sn===void 0||sn.isReady())Ut.delete(rn)}),Ut.size===0){Ft(xt);return}setTimeout(Ke,10)}if(Dn.get("KHR_parallel_shader_compile")!==null)Ke();else setTimeout(Ke,10)})};let ua=null;function Hh(xt){if(ua)ua(xt)}function nl(){ns.stop()}function il(){ns.start()}let ns=new Th;if(ns.setAnimationLoop(Hh),typeof self<"u")ns.setContext(self);this.setAnimationLoop=function(xt){ua=xt,dn.setAnimationLoop(xt),xt===null?ns.stop():ns.start()},dn.addEventListener("sessionstart",nl),dn.addEventListener("sessionend",il),this.render=function(xt,Ct){if(Ct!==void 0&&Ct.isCamera!==!0){vn("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(kt===!0)return;if(Lt!==null)Lt.renderStart(xt,Ct);let Bt=dn.enabled===!0&&dn.isPresenting===!0,Ut=yt!==null&&(Ot===null||Bt)&&yt.begin(Nt,Ot);if(xt.matrixWorldAutoUpdate===!0)xt.updateMatrixWorld();if(Ct.parent===null&&Ct.matrixWorldAutoUpdate===!0)Ct.updateMatrixWorld();if(dn.enabled===!0&&dn.isPresenting===!0&&(yt===null||yt.isCompositing()===!1)){if(dn.cameraAutoUpdate===!0)dn.updateCamera(Ct);Ct=dn.getCamera()}if(xt.isScene===!0)xt.onBeforeRender(Nt,xt,Ct,Ot);if(At=$e.get(xt,gt.length),At.init(Ct),At.state.textureUnits=Sn.getTextureUnits(),gt.push(At),di.multiplyMatrices(Ct.projectionMatrix,Ct.matrixWorldInverse),Ct.isArrayCamera)Hn.setFromArrayCamera(Ct);else In.setFromProjectionMatrix(di,Po,Ct.reversedDepth);if(ci=this.localClippingEnabled,Wn=Gt.init(this.clippingPlanes,ci),bt=qe.get(xt,It.length),bt.init(),It.push(bt),this.info.render.frame++,dn.enabled===!0&&dn.isPresenting===!0){let rn=Nt.xr.getDepthSensingMesh();if(rn!==null)da(rn,Ct,-1/0,Nt.sortObjects)}if(da(xt,Ct,0,Nt.sortObjects),bt.finish(),Lt!==null)Lt.updateLights(At.state.lightsArray);if(Nt.sortObjects===!0)bt.sort(cn,Nn);if(ui=dn.enabled===!1||dn.isPresenting===!1||dn.hasDepthSensing()===!1,ui)Ze.addToRenderList(bt,xt);if(this.info.autoReset===!0)this.info.reset();if(Wn===!0)Gt.beginShadows();let Ft=At.state.shadowsArray;if(Xt.render(Ft,xt,Ct),Wn===!0)Gt.endShadows();if((Ut&&yt.hasRenderPass())===!1){let rn=bt.opaque,Je=bt.transmissive;if(At.setupLights(),Ct.isArrayCamera){let sn=Ct.cameras;if(Je.length>0)for(let un=0,Mn=sn.length;un<Mn;un++){let Rn=sn[un];rl(rn,Je,xt,Rn)}if(ui)Ze.render(xt);for(let un=0,Mn=sn.length;un<Mn;un++){let Rn=sn[un];sl(bt,xt,Rn,Rn.viewport)}}else{if(Je.length>0)rl(rn,Je,xt,Ct);if(ui)Ze.render(xt);sl(bt,xt,Ct)}}if(Ot!==null&&Zt===0)Sn.updateMultisampleRenderTarget(Ot),Sn.updateRenderTargetMipmap(Ot);if(Ut)yt.end(Nt);if(xt.isScene===!0)xt.onAfterRender(Nt,xt,Ct);if(Xe.resetDefaultState(),Ye=-1,Wt=null,gt.pop(),gt.length>0){if(At=gt[gt.length-1],Sn.setTextureUnits(At.state.textureUnits),Wn===!0)Gt.setGlobalState(Nt.clippingPlanes,At.state.camera)}else At=null;if(It.pop(),It.length>0)bt=It[It.length-1];else bt=null;if(Lt!==null)Lt.renderEnd()};function da(xt,Ct,Bt,Ut){if(xt.visible===!1)return;if(xt.layers.test(Ct.layers)){if(xt.isGroup)Bt=xt.renderOrder;else if(xt.isLOD){if(xt.autoUpdate===!0)xt.update(Ct)}else if(xt.isLight){if(At.pushLight(xt),xt.castShadow)At.pushShadow(xt)}else if(xt.isSprite){let rn=Ct.isArrayCamera?Hn:In;if(!xt.frustumCulled||xt.intersectsFrustum(rn)){if(Ut)ti.setFromMatrixPosition(xt.matrixWorld).applyMatrix4(di);let Je=Dt.update(xt),sn=xt.material;if(sn.visible)bt.push(xt,Je,sn,Bt,ti.z,null,Ct)}}else if(xt.isMesh||xt.isLine||xt.isPoints){let rn=Ct.isArrayCamera?Hn:In;if(!xt.frustumCulled||xt.intersectsFrustum(rn)){let Je=Dt.update(xt),sn=xt.material;if(Ut){if(xt.boundingSphere!==void 0){if(xt.boundingSphere===null)xt.computeBoundingSphere();ti.copy(xt.boundingSphere.center)}else{if(Je.boundingSphere===null)Je.computeBoundingSphere();ti.copy(Je.boundingSphere.center)}ti.applyMatrix4(xt.matrixWorld).applyMatrix4(di)}if(Array.isArray(sn)){let un=Je.groups;for(let Mn=0,Rn=un.length;Mn<Rn;Mn++){let an=un[Mn],Cn=sn[an.materialIndex];if(Cn&&Cn.visible)bt.push(xt,Je,Cn,Bt,ti.z,an,Ct)}}else if(sn.visible)bt.push(xt,Je,sn,Bt,ti.z,null,Ct)}}}let Ke=xt.children;for(let rn=0,Je=Ke.length;rn<Je;rn++)da(Ke[rn],Ct,Bt,Ut)}function sl(xt,Ct,Bt,Ut){let{opaque:Ft,transmissive:Ke,transparent:rn}=xt;if(At.setupLightsView(Bt),Wn===!0)Gt.setGlobalState(Nt.clippingPlanes,Bt);if(Ut)je.viewport($t.copy(Ut));if(Ft.length>0)dr(Ft,Ct,Bt);if(Ke.length>0)dr(Ke,Ct,Bt);if(rn.length>0)dr(rn,Ct,Bt);je.buffers.depth.setTest(!0),je.buffers.depth.setMask(!0),je.buffers.color.setMask(!0),je.setPolygonOffset(!1)}function rl(xt,Ct,Bt,Ut){if((Bt.isScene===!0?Bt.overrideMaterial:null)!==null)return;if(At.state.transmissionRenderTarget[Ut.id]===void 0){let an=Dn.has("EXT_color_buffer_half_float")||Dn.has("EXT_color_buffer_float");At.state.transmissionRenderTarget[Ut.id]=new _(1,1,{generateMipmaps:!0,type:an?S:Ti,minFilter:D,samples:Math.max(4,Jn.samples),stencilBuffer:st,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:s.workingColorSpace})}let Ke=At.state.transmissionRenderTarget[Ut.id],rn=Ut.viewport||$t;Ke.setSize(rn.z*Nt.transmissionResolutionScale,rn.w*Nt.transmissionResolutionScale);let Je=Nt.getRenderTarget(),sn=Nt.getActiveCubeFace(),un=Nt.getActiveMipmapLevel();if(Nt.setRenderTarget(Ke),Nt.getClearColor(Yt),We=Nt.getClearAlpha(),We<1)Nt.setClearColor(16777215,0.5);if(Nt.clear(),ui)Ze.render(Bt);let Mn=Nt.toneMapping;Nt.toneMapping=R;let Rn=Ut.viewport;if(Ut.viewport!==void 0)Ut.viewport=void 0;if(At.setupLightsView(Ut),Wn===!0)Gt.setGlobalState(Nt.clippingPlanes,Ut);if(dr(xt,Bt,Ut),Sn.updateMultisampleRenderTarget(Ke),Sn.updateRenderTargetMipmap(Ke),Dn.has("WEBGL_multisampled_render_to_texture")===!1){let an=!1;for(let Cn=0,Xn=Ct.length;Cn<Xn;Cn++){let zn=Ct[Cn],{object:On,geometry:ni,material:on,group:oi}=zn;if(on.side===T&&On.layers.test(Ut.layers)){let Ln=on.side;on.side=y,on.needsUpdate=!0,al(On,Bt,Ut,ni,on,oi),on.side=Ln,on.needsUpdate=!0,an=!0}}if(an===!0)Sn.updateMultisampleRenderTarget(Ke),Sn.updateRenderTargetMipmap(Ke)}if(Nt.setRenderTarget(Je,sn,un),Nt.setClearColor(Yt,We),Rn!==void 0)Ut.viewport=Rn;Nt.toneMapping=Mn}function dr(xt,Ct,Bt){let Ut=Ct.isScene===!0?Ct.overrideMaterial:null;for(let Ft=0,Ke=xt.length;Ft<Ke;Ft++){let rn=xt[Ft],{object:Je,geometry:sn,group:un}=rn,Mn=rn.material;if(Mn.allowOverride===!0&&Ut!==null)Mn=Ut;if(Je.layers.test(Bt.layers))al(Je,Ct,Bt,sn,Mn,un)}}function al(xt,Ct,Bt,Ut,Ft,Ke){if(Lt!==null&&Ft.isNodeMaterial)Lt.setObject(xt,Ft);if(xt.onBeforeRender(Nt,Ct,Bt,Ut,Ft,Ke),xt.modelViewMatrix.multiplyMatrices(Bt.matrixWorldInverse,xt.matrixWorld),xt.normalMatrix.getNormalMatrix(xt.modelViewMatrix),Ft.onBeforeRender(Nt,Ct,Bt,Ut,xt,Ke),Ft.transparent===!0&&Ft.side===T&&Ft.forceSinglePass===!1)Ft.side=y,Ft.needsUpdate=!0,Nt.renderBufferDirect(Bt,Ct,Ut,Ft,xt,Ke),Ft.side=H,Ft.needsUpdate=!0,Nt.renderBufferDirect(Bt,Ct,Ut,Ft,xt,Ke),Ft.side=T;else Nt.renderBufferDirect(Bt,Ct,Ut,Ft,xt,Ke);xt.onAfterRender(Nt,Ct,Bt,Ut,Ft,Ke)}function ol(xt){let Ct=0;for(let Bt of xt)if(Bt.texture!==null)Ct++;return Ct}function zs(xt,Ct,Bt){if(Ct.isScene!==!0)Ct=hi;let Ut=xn.get(xt),Ft=At.state.lights,Ke=At.state.shadowsArray,rn=Ft.state.version,Je=Qt.getParameters(xt,Ft.state,Ke,Ct,Bt,At.state.lightProbeGridArray),sn=Qt.getProgramCacheKey(Je),un=Ut.programs;Ut.environment=xt.isMeshStandardMaterial||xt.isMeshLambertMaterial||xt.isMeshPhongMaterial?Ct.environment:null,Ut.fog=Ct.fog;let Mn=xt.isMeshStandardMaterial||xt.isMeshLambertMaterial&&!xt.envMap||xt.isMeshPhongMaterial&&!xt.envMap;if(Ut.envMap=ei.get(xt.envMap||Ut.environment,Mn),Ut.envMapRotation=Ut.environment!==null&&xt.envMap===null?Ct.environmentRotation:xt.envMapRotation,un===void 0)xt.addEventListener("dispose",nn),un=new Map,Ut.programs=un,Ut.programVariants=new Map;let Rn=un.get(sn);if(Rn!==void 0){if(Ut.currentProgram===Rn&&Ut.lightsStateVersion===rn)return cl(xt,Je),Rn}else{if(Je.uniforms=Qt.getUniforms(xt),Lt!==null&&xt.isNodeMaterial)Lt.build(xt,Bt,Je);xt.onBeforeCompile(Je,Nt),Rn=Qt.acquireProgram(Je,sn),un.set(sn,Rn),Ut.uniforms=Je.uniforms}let an=Ut.uniforms;if(!xt.isShaderMaterial&&!xt.isRawShaderMaterial||xt.clipping===!0)an.clippingPlanes=Gt.uniform;if(cl(xt,Je),Ut.needsLights=qh(xt),Ut.lightsStateVersion=rn,Ut.needsLights)an.ambientLightColor.value=Ft.state.ambient,an.lightProbe.value=Ft.state.probe,an.sunLights.value=Ft.state.sun,an.sunLightShadows.value=Ft.state.sunShadow,an.directionalLights.value=Ft.state.directional,an.directionalLightShadows.value=Ft.state.directionalShadow,an.spotLights.value=Ft.state.spot,an.spotLightShadows.value=Ft.state.spotShadow,an.rectAreaLights.value=Ft.state.rectArea,an.ltc_1.value=Ft.state.rectAreaLTC1,an.ltc_2.value=Ft.state.rectAreaLTC2,an.pointLights.value=Ft.state.point,an.pointLightShadows.value=Ft.state.pointShadow,an.hemisphereLights.value=Ft.state.hemi,an.sunShadowMatrix.value=Ft.state.sunShadowMatrix,an.sunShadowCascade.value=Ft.state.sunShadowCascade,an.directionalShadowMatrix.value=Ft.state.directionalShadowMatrix,an.spotLightMatrix.value=Ft.state.spotLightMatrix,an.spotLightMap.value=Ft.state.spotLightMap,an.pointShadowMatrix.value=Ft.state.pointShadowMatrix;return Ut.numLightProbeGrids=ol(At.state.lightProbeGridArray),Ut.currentProgram=Rn,Ut.uniformsList=null,Rn}function Wh(xt,Ct,Bt,Ut,Ft){let Ke=xn.get(xt),rn=Ke.currentProgram.id+","+Ut+","+Ft,Je=Ke.programVariants.get(rn);if(Je===void 0)Je=zs(xt,Ct,Bt),Ke.programVariants.set(rn,Je);else Ke.currentProgram=Je,Ke.uniformsList=null,Ke.outputColorSpace=Ut,Ke.toneMapping=Ft;return Je}function ll(xt){if(xt.uniformsList===null){let Ct=xt.currentProgram.getUniforms();xt.uniformsList=hr.seqWithValue(Ct.seq,xt.uniforms)}return xt.uniformsList}function cl(xt,Ct){let Bt=xn.get(xt);Bt.outputColorSpace=Ct.outputColorSpace,Bt.batching=Ct.batching,Bt.batchingColor=Ct.batchingColor,Bt.instancing=Ct.instancing,Bt.instancingColor=Ct.instancingColor,Bt.instancingMorph=Ct.instancingMorph,Bt.skinning=Ct.skinning,Bt.morphTargets=Ct.morphTargets,Bt.morphNormals=Ct.morphNormals,Bt.morphColors=Ct.morphColors,Bt.morphTargetsCount=Ct.morphTargetsCount,Bt.numClippingPlanes=Ct.numClippingPlanes,Bt.numIntersection=Ct.numClipIntersection,Bt.vertexAlphas=Ct.vertexAlphas,Bt.vertexTangents=Ct.vertexTangents,Bt.toneMapping=Ct.toneMapping}function Vh(xt,Ct,Bt,Ut,Ft){if(Ct.isScene!==!0)Ct=hi;Sn.resetTextureUnits();let Ke=Ct.fog,rn=Ut.isMeshStandardMaterial||Ut.isMeshLambertMaterial||Ut.isMeshPhongMaterial?Ct.environment:null,Je=Ot===null?Nt.outputColorSpace:Ot.isXRRenderTarget===!0?Ot.texture.colorSpace:s.workingColorSpace,sn=Ut.isMeshStandardMaterial||Ut.isMeshLambertMaterial&&!Ut.envMap||Ut.isMeshPhongMaterial&&!Ut.envMap,un=ei.get(Ut.envMap||rn,sn),Mn=Ut.vertexColors===!0&&!!Bt.attributes.color&&Bt.attributes.color.itemSize===4,Rn=!!Bt.attributes.tangent&&(!!Ut.normalMap||Ut.anisotropy>0),an=!!Bt.morphAttributes.position,Cn=!!Bt.morphAttributes.normal,Xn=!!Bt.morphAttributes.color,zn=R;if(Ut.toneMapped){if(Ot===null||Ot.isXRRenderTarget===!0)zn=Nt.toneMapping}let On=Bt.morphAttributes.position||Bt.morphAttributes.normal||Bt.morphAttributes.color,ni=On!==void 0?On.length:0,on=xn.get(Ut),oi=At.state.lights;if(Wn===!0){if(ci===!0||xt!==Wt){let kn=xt===Wt&&Ut.id===Ye;Gt.setState(Ut,xt,kn)}}let Ln=!1,is=!1;if(Ut.version===on.__version){if(on.needsLights&&on.lightsStateVersion!==oi.state.version)Ln=!0;else if(Ft.isBatchedMesh&&on.batching===!1)Ln=!0;else if(!Ft.isBatchedMesh&&on.batching===!0)Ln=!0;else if(Ft.isBatchedMesh&&on.batchingColor===!0&&Ft._colorsTexture===null)Ln=!0;else if(Ft.isBatchedMesh&&on.batchingColor===!1&&Ft._colorsTexture!==null)Ln=!0;else if(Ft.isInstancedMesh&&on.instancing===!1)Ln=!0;else if(!Ft.isInstancedMesh&&on.instancing===!0)Ln=!0;else if(Ft.isSkinnedMesh&&on.skinning===!1)Ln=!0;else if(!Ft.isSkinnedMesh&&on.skinning===!0)Ln=!0;else if(Ft.isInstancedMesh&&on.instancingColor===!0&&Ft.instanceColor===null)Ln=!0;else if(Ft.isInstancedMesh&&on.instancingColor===!1&&Ft.instanceColor!==null)Ln=!0;else if(Ft.isInstancedMesh&&on.instancingMorph===!0&&Ft.morphTexture===null)Ln=!0;else if(Ft.isInstancedMesh&&on.instancingMorph===!1&&Ft.morphTexture!==null)Ln=!0;else if(on.envMap!==un)Ln=!0;else if(Ut.fog===!0&&on.fog!==Ke)Ln=!0;else if(on.numClippingPlanes!==void 0&&(on.numClippingPlanes!==Gt.numPlanes||on.numIntersection!==Gt.numIntersection))Ln=!0;else if(on.vertexAlphas!==Mn)Ln=!0;else if(on.vertexTangents!==Rn)Ln=!0;else if(on.morphTargets!==an)Ln=!0;else if(on.morphNormals!==Cn)Ln=!0;else if(on.morphColors!==Xn)Ln=!0;else if(on.morphTargetsCount!==ni)Ln=!0;else if(on.numLightProbeGrids!==ol(At.state.lightProbeGridArray))Ln=!0;else if(on.outputColorSpace!==Je||on.toneMapping!==zn)is=!0}else Ln=!0,on.__version=Ut.version;let ii=on.currentProgram;if(Ln===!0||is===!0){if(ii=is===!0?Wh(Ut,Ct,Ft,Je,zn):zs(Ut,Ct,Ft),Lt&&Ut.isNodeMaterial)Lt.onUpdateProgram(Ut,ii,on)}let fr=!1,Vi=!1,ss=!1,Pn=ii.getUniforms(),jn=on.uniforms;if(je.useProgram(ii.program))fr=!0,Vi=!0,ss=!0;if(Ut.id!==Ye)Ye=Ut.id,Vi=!0;if(fr||Wt!==xt){if(je.buffers.depth.getReversed()&&xt.reversedDepth!==!0)xt._reversedDepth=!0,xt.updateProjectionMatrix();Pn.setValue(Pt,"projectionMatrix",xt.projectionMatrix),Pn.setValue(Pt,"viewMatrix",xt.matrixWorldInverse);let Kn=Pn.map.cameraPosition;if(Kn!==void 0)Kn.setValue(Pt,Vn.setFromMatrixPosition(xt.matrixWorld));if(Jn.logarithmicDepthBuffer)Pn.setValue(Pt,"logDepthBufFC",2/(Math.log(xt.far+1)/Math.LN2));if(Ut.isMeshPhongMaterial||Ut.isMeshToonMaterial||Ut.isMeshLambertMaterial||Ut.isMeshBasicMaterial||Ut.isMeshStandardMaterial||Ut.isShaderMaterial)Pn.setValue(Pt,"isOrthographic",xt.isOrthographicCamera===!0);if(Wt!==xt)Wt=xt,Vi=!0,ss=!0}if(on.needsLights){if(oi.state.sunShadowMap.length>0)Pn.setValue(Pt,"sunShadowMap",oi.state.sunShadowMap,Sn);if(oi.state.directionalShadowMap.length>0)Pn.setValue(Pt,"directionalShadowMap",oi.state.directionalShadowMap,Sn);if(oi.state.spotShadowMap.length>0)Pn.setValue(Pt,"spotShadowMap",oi.state.spotShadowMap,Sn);if(oi.state.pointShadowMap.length>0)Pn.setValue(Pt,"pointShadowMap",oi.state.pointShadowMap,Sn)}if(Ft.isSkinnedMesh){Pn.setOptional(Pt,Ft,"bindMatrix"),Pn.setOptional(Pt,Ft,"bindMatrixInverse");let kn=Ft.skeleton;if(kn){if(kn.boneTexture===null)kn.computeBoneTexture();Pn.setValue(Pt,"boneTexture",kn.boneTexture,Sn)}}if(Ft.isBatchedMesh){if(Pn.setOptional(Pt,Ft,"batchingTexture"),Pn.setValue(Pt,"batchingTexture",Ft._matricesTexture,Sn),Pn.setOptional(Pt,Ft,"batchingIdTexture"),Pn.setValue(Pt,"batchingIdTexture",Ft._indirectTexture,Sn),Pn.setOptional(Pt,Ft,"batchingColorTexture"),Ft._colorsTexture!==null)Pn.setValue(Pt,"batchingColorTexture",Ft._colorsTexture,Sn)}let yi=Bt.morphAttributes;if(yi.position!==void 0||yi.normal!==void 0||yi.color!==void 0)wt.update(Ft,Bt,ii);if(Vi||on.receiveShadow!==Ft.receiveShadow)on.receiveShadow=Ft.receiveShadow,Pn.setValue(Pt,"receiveShadow",Ft.receiveShadow);if((Ut.isMeshStandardMaterial||Ut.isMeshLambertMaterial||Ut.isMeshPhongMaterial)&&Ut.envMap===null&&Ct.environment!==null)jn.envMapIntensity.value=Ct.environmentIntensity;if(jn.dfgLUT!==void 0)jn.dfgLUT.value=Ug();if(Vi){if(Pn.setValue(Pt,"toneMappingExposure",Nt.toneMappingExposure),on.needsLights)Xh(jn,ss);if(Ke&&Ut.fog===!0)Jt.refreshFogUniforms(jn,Ke);if(Jt.refreshMaterialUniforms(jn,Ut,_n,gn,At.state.transmissionRenderTarget[xt.id]),on.needsLights&&on.numLightProbeGrids>0){let kn=Et,Kn=0;for(let Ni of At.state.lightProbeGridArray){if(Ni.texture===null)continue;kn.textures[Kn]=Ni.texture,kn.min[Kn]=Ni.boundingBox.min,kn.max[Kn]=Ni.boundingBox.max,kn.resolution[Kn]=Ni.resolution,Kn++}for(let Ni in kn)kn[Ni].length=Kn;jn.probesSH.value=kn.textures,jn.probesMin.value=kn.min,jn.probesMax.value=kn.max,jn.probesResolution.value=kn.resolution}hr.upload(Pt,ll(on),jn,Sn)}if(Ut.isShaderMaterial&&Ut.uniformsNeedUpdate===!0)hr.upload(Pt,ll(on),jn,Sn),Ut.uniformsNeedUpdate=!1;if(Ut.isSpriteMaterial)Pn.setValue(Pt,"center",Ft.center);if(Pn.setValue(Pt,"modelViewMatrix",Ft.modelViewMatrix),Pn.setValue(Pt,"normalMatrix",Ft.normalMatrix),Pn.setValue(Pt,"modelMatrix",Ft.matrixWorld),Ut.uniformsGroups!==void 0){let kn=Ut.uniformsGroups;for(let Kn=0,Ni=kn.length;Kn<Ni;Kn++){let ul=kn[Kn];Qe.update(ul,ii),Qe.bind(ul,ii)}}return ii}function Xh(xt,Ct){xt.ambientLightColor.needsUpdate=Ct,xt.lightProbe.needsUpdate=Ct,xt.sunLights.needsUpdate=Ct,xt.sunLightShadows.needsUpdate=Ct,xt.directionalLights.needsUpdate=Ct,xt.directionalLightShadows.needsUpdate=Ct,xt.pointLights.needsUpdate=Ct,xt.pointLightShadows.needsUpdate=Ct,xt.spotLights.needsUpdate=Ct,xt.spotLightShadows.needsUpdate=Ct,xt.rectAreaLights.needsUpdate=Ct,xt.hemisphereLights.needsUpdate=Ct}function qh(xt){return xt.isMeshLambertMaterial||xt.isMeshToonMaterial||xt.isMeshPhongMaterial||xt.isMeshStandardMaterial||xt.isShadowMaterial||xt.isShaderMaterial&&xt.lights===!0}this.getActiveCubeFace=function(){return qt},this.getActiveMipmapLevel=function(){return Zt},this.getRenderTarget=function(){return Ot},this.setRenderTargetTextures=function(xt,Ct,Bt){let Ut=xn.get(xt);if(Ut.__autoAllocateDepthBuffer=xt.resolveDepthBuffer===!1,Ut.__autoAllocateDepthBuffer===!1)Ut.__useRenderToTexture=!1;xn.get(xt.texture).__webglTexture=Ct,xn.get(xt.depthTexture).__webglTexture=Ut.__autoAllocateDepthBuffer?void 0:Bt,Ut.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(xt,Ct){let Bt=xn.get(xt);Bt.__webglFramebuffer=Ct,Bt.__useDefaultFramebuffer=Ct===void 0},this.setRenderTarget=function(xt,Ct=0,Bt=0){Ot=xt,qt=Ct,Zt=Bt;let Ut=null,Ft=!1,Ke=!1;if(xt){let Je=xn.get(xt);if(Je.__useDefaultFramebuffer!==void 0){je.bindFramebuffer(Pt.FRAMEBUFFER,Je.__webglFramebuffer),$t.copy(xt.viewport),Ve.copy(xt.scissor),hn=xt.scissorTest,je.viewport($t),je.scissor(Ve),je.setScissorTest(hn),Ye=-1;return}else if(Je.__webglFramebuffer===void 0)Sn.setupRenderTarget(xt);else if(Je.__hasExternalTextures)Sn.rebindTextures(xt,xn.get(xt.texture).__webglTexture,xn.get(xt.depthTexture).__webglTexture);else if(xt.depthBuffer){let Mn=xt.depthTexture;if(Je.__boundDepthTexture!==Mn){if(Mn!==null&&xn.has(Mn)&&(xt.width!==Mn.image.width||xt.height!==Mn.image.height))throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Sn.setupDepthRenderbuffer(xt)}}let sn=xt.texture;if(sn.isData3DTexture||sn.isDataArrayTexture||sn.isCompressedArrayTexture)Ke=!0;let un=xn.get(xt).__webglFramebuffer;if(xt.isWebGLCubeRenderTarget){if(Array.isArray(un[Ct]))Ut=un[Ct][Bt];else Ut=un[Ct];Ft=!0}else if(xt.samples>0&&Sn.useMultisampledRTT(xt)===!1)Ut=xn.get(xt).__webglMultisampledFramebuffer;else if(Array.isArray(un))Ut=un[Bt];else Ut=un;$t.copy(xt.viewport),Ve.copy(xt.scissor),hn=xt.scissorTest}else $t.copy(An).multiplyScalar(_n).floor(),Ve.copy(bn).multiplyScalar(_n).floor(),hn=Gn;if(Bt!==0)Ut=zt;if(je.bindFramebuffer(Pt.FRAMEBUFFER,Ut))je.drawBuffers(xt,Ut);if(je.viewport($t),je.scissor(Ve),je.setScissorTest(hn),Ft){let Je=xn.get(xt.texture);Pt.framebufferTexture2D(Pt.FRAMEBUFFER,Pt.COLOR_ATTACHMENT0,Pt.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Je.__webglTexture,Bt)}else if(Ke){let Je=Ct;for(let sn=0;sn<xt.textures.length;sn++){let un=xn.get(xt.textures[sn]);Pt.framebufferTextureLayer(Pt.FRAMEBUFFER,Pt.COLOR_ATTACHMENT0+sn,un.__webglTexture,Bt,Je)}}else if(xt!==null&&Bt!==0){let Je=xn.get(xt.texture);Pt.framebufferTexture2D(Pt.FRAMEBUFFER,Pt.COLOR_ATTACHMENT0,Pt.TEXTURE_2D,Je.__webglTexture,Bt)}Ye=-1};function hl(xt){let Ct=xn.get(xt);if(Ct.__readFormat!==xt.format||Ct.__readType!==xt.type)Ct.__readFormat=xt.format,Ct.__readType=xt.type,Ct.__formatReadable=Jn.textureFormatReadable(xt.format),Ct.__typeReadable=Jn.textureTypeReadable(xt.type);return Ct}if(this.readRenderTargetPixels=function(xt,Ct,Bt,Ut,Ft,Ke,rn,Je=0){if(!(xt&&xt.isWebGLRenderTarget)){vn("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let sn=xn.get(xt).__webglFramebuffer;if(xt.isWebGLCubeRenderTarget&&rn!==void 0){if(sn=sn[rn],Array.isArray(sn))sn=sn[0]}if(sn){je.bindFramebuffer(Pt.FRAMEBUFFER,sn);try{let un=xt.textures[Je],{format:Mn,type:Rn}=un;if(xt.textures.length>1)Pt.readBuffer(Pt.COLOR_ATTACHMENT0+Je);let an=hl(un);if(an.__formatReadable===!1){vn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(an.__typeReadable===!1){vn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(Ct>=0&&Ct<=xt.width-Ut&&(Bt>=0&&Bt<=xt.height-Ft))Pt.readPixels(Ct,Bt,Ut,Ft,jt.convert(Mn),jt.convert(Rn),Ke)}finally{let un=Ot!==null?xn.get(Ot).__webglFramebuffer:null;je.bindFramebuffer(Pt.FRAMEBUFFER,un)}}},this.readRenderTargetPixelsAsync=async function(xt,Ct,Bt,Ut,Ft,Ke,rn,Je=0){if(!(xt&&xt.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let sn=xn.get(xt).__webglFramebuffer;if(xt.isWebGLCubeRenderTarget&&rn!==void 0){if(sn=sn[rn],Array.isArray(sn))sn=sn[0]}if(sn)if(Ct>=0&&Ct<=xt.width-Ut&&(Bt>=0&&Bt<=xt.height-Ft)){je.bindFramebuffer(Pt.FRAMEBUFFER,sn);let un=xt.textures[Je],{format:Mn,type:Rn}=un;if(xt.textures.length>1)Pt.readBuffer(Pt.COLOR_ATTACHMENT0+Je);let an=hl(un);if(an.__formatReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(an.__typeReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Cn=Pt.createBuffer();Pt.bindBuffer(Pt.PIXEL_PACK_BUFFER,Cn),Pt.bufferData(Pt.PIXEL_PACK_BUFFER,Ke.byteLength,Pt.STREAM_READ),Pt.readPixels(Ct,Bt,Ut,Ft,jt.convert(Mn),jt.convert(Rn),0),Pt.bindBuffer(Pt.PIXEL_PACK_BUFFER,null);let Xn=Ot!==null?xn.get(Ot).__webglFramebuffer:null;je.bindFramebuffer(Pt.FRAMEBUFFER,Xn);let zn=Pt.fenceSync(Pt.SYNC_GPU_COMMANDS_COMPLETE,0);return Pt.flush(),await qc(Pt,zn,4),Pt.bindBuffer(Pt.PIXEL_PACK_BUFFER,Cn),Pt.getBufferSubData(Pt.PIXEL_PACK_BUFFER,0,Ke),Pt.bindBuffer(Pt.PIXEL_PACK_BUFFER,null),Pt.deleteBuffer(Cn),Pt.deleteSync(zn),Ke}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(xt,Ct=null,Bt=0){let Ut=Math.pow(2,-Bt),Ft=Math.floor(xt.image.width*Ut),Ke=Math.floor(xt.image.height*Ut),rn=Ct!==null?Ct.x:0,Je=Ct!==null?Ct.y:0;Sn.setTexture2D(xt,0),Pt.copyTexSubImage2D(Pt.TEXTURE_2D,Bt,0,0,rn,Je,Ft,Ke),je.unbindTexture()},this.copyTextureToTexture=function(xt,Ct,Bt=null,Ut=null,Ft=0,Ke=0){let rn,Je,sn,un,Mn,Rn,an,Cn,Xn,zn=xt.isCompressedTexture?xt.mipmaps[Ke]:xt.image;if(Bt!==null)rn=Bt.max.x-Bt.min.x,Je=Bt.max.y-Bt.min.y,sn=Bt.isBox3?Bt.max.z-Bt.min.z:1,un=Bt.min.x,Mn=Bt.min.y,Rn=Bt.isBox3?Bt.min.z:0;else{let Pn=Math.pow(2,-Ft);if(rn=Math.floor(zn.width*Pn),Je=Math.floor(zn.height*Pn),xt.isDataArrayTexture)sn=zn.depth;else if(xt.isData3DTexture)sn=Math.floor(zn.depth*Pn);else sn=1;un=0,Mn=0,Rn=0}if(Ut!==null)an=Ut.x,Cn=Ut.y,Xn=Ut.z;else an=0,Cn=0,Xn=0;let On=jt.convert(Ct.format),ni=jt.convert(Ct.type),on;if(Ct.isData3DTexture)Sn.setTexture3D(Ct,0),on=Pt.TEXTURE_3D;else if(Ct.isDataArrayTexture||Ct.isCompressedArrayTexture)Sn.setTexture2DArray(Ct,0),on=Pt.TEXTURE_2D_ARRAY;else Sn.setTexture2D(Ct,0),on=Pt.TEXTURE_2D;je.activeTexture(Pt.TEXTURE0),je.pixelStorei(Pt.UNPACK_FLIP_Y_WEBGL,Ct.flipY),je.pixelStorei(Pt.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Ct.premultiplyAlpha),je.pixelStorei(Pt.UNPACK_ALIGNMENT,Ct.unpackAlignment);let oi=je.getParameter(Pt.UNPACK_ROW_LENGTH),Ln=je.getParameter(Pt.UNPACK_IMAGE_HEIGHT),is=je.getParameter(Pt.UNPACK_SKIP_PIXELS),ii=je.getParameter(Pt.UNPACK_SKIP_ROWS),fr=je.getParameter(Pt.UNPACK_SKIP_IMAGES);je.pixelStorei(Pt.UNPACK_ROW_LENGTH,zn.width),je.pixelStorei(Pt.UNPACK_IMAGE_HEIGHT,zn.height),je.pixelStorei(Pt.UNPACK_SKIP_PIXELS,un),je.pixelStorei(Pt.UNPACK_SKIP_ROWS,Mn),je.pixelStorei(Pt.UNPACK_SKIP_IMAGES,Rn);let Vi=xt.isDataArrayTexture||xt.isData3DTexture,ss=Ct.isDataArrayTexture||Ct.isData3DTexture;if(xt.isDepthTexture){let Pn=xn.get(xt),jn=xn.get(Ct),yi=xn.get(Pn.__renderTarget),kn=xn.get(jn.__renderTarget);je.bindFramebuffer(Pt.READ_FRAMEBUFFER,yi.__webglFramebuffer),je.bindFramebuffer(Pt.DRAW_FRAMEBUFFER,kn.__webglFramebuffer);for(let Kn=0;Kn<sn;Kn++){if(Vi)Pt.framebufferTextureLayer(Pt.READ_FRAMEBUFFER,Pt.COLOR_ATTACHMENT0,xn.get(xt).__webglTexture,Ft,Rn+Kn),Pt.framebufferTextureLayer(Pt.DRAW_FRAMEBUFFER,Pt.COLOR_ATTACHMENT0,xn.get(Ct).__webglTexture,Ke,Xn+Kn);Pt.blitFramebuffer(un,Mn,un+rn,Mn+Je,an,Cn,an+rn,Cn+Je,Pt.DEPTH_BUFFER_BIT,Pt.NEAREST)}je.bindFramebuffer(Pt.READ_FRAMEBUFFER,null),je.bindFramebuffer(Pt.DRAW_FRAMEBUFFER,null)}else if(Ft!==0||xt.isRenderTargetTexture||xn.has(xt)){let Pn=xn.get(xt),jn=xn.get(Ct);je.bindFramebuffer(Pt.READ_FRAMEBUFFER,Kt),je.bindFramebuffer(Pt.DRAW_FRAMEBUFFER,Rt);for(let yi=0;yi<sn;yi++){if(Vi)Pt.framebufferTextureLayer(Pt.READ_FRAMEBUFFER,Pt.COLOR_ATTACHMENT0,Pn.__webglTexture,Ft,Rn+yi);else Pt.framebufferTexture2D(Pt.READ_FRAMEBUFFER,Pt.COLOR_ATTACHMENT0,Pt.TEXTURE_2D,Pn.__webglTexture,Ft);if(ss)Pt.framebufferTextureLayer(Pt.DRAW_FRAMEBUFFER,Pt.COLOR_ATTACHMENT0,jn.__webglTexture,Ke,Xn+yi);else Pt.framebufferTexture2D(Pt.DRAW_FRAMEBUFFER,Pt.COLOR_ATTACHMENT0,Pt.TEXTURE_2D,jn.__webglTexture,Ke);if(Ft!==0)Pt.blitFramebuffer(un,Mn,un+rn,Mn+Je,an,Cn,an+rn,Cn+Je,Pt.COLOR_BUFFER_BIT,Pt.NEAREST);else if(ss)Pt.copyTexSubImage3D(on,Ke,an,Cn,Xn+yi,un,Mn,rn,Je);else Pt.copyTexSubImage2D(on,Ke,an,Cn,un,Mn,rn,Je)}je.bindFramebuffer(Pt.READ_FRAMEBUFFER,null),je.bindFramebuffer(Pt.DRAW_FRAMEBUFFER,null)}else if(ss)if(xt.isDataTexture||xt.isData3DTexture)Pt.texSubImage3D(on,Ke,an,Cn,Xn,rn,Je,sn,On,ni,zn.data);else if(Ct.isCompressedArrayTexture)Pt.compressedTexSubImage3D(on,Ke,an,Cn,Xn,rn,Je,sn,On,zn.data);else Pt.texSubImage3D(on,Ke,an,Cn,Xn,rn,Je,sn,On,ni,zn);else if(xt.isDataTexture)Pt.texSubImage2D(Pt.TEXTURE_2D,Ke,an,Cn,rn,Je,On,ni,zn.data);else if(xt.isCompressedTexture)Pt.compressedTexSubImage2D(Pt.TEXTURE_2D,Ke,an,Cn,zn.width,zn.height,On,zn.data);else Pt.texSubImage2D(Pt.TEXTURE_2D,Ke,an,Cn,rn,Je,On,ni,zn);if(je.pixelStorei(Pt.UNPACK_ROW_LENGTH,oi),je.pixelStorei(Pt.UNPACK_IMAGE_HEIGHT,Ln),je.pixelStorei(Pt.UNPACK_SKIP_PIXELS,is),je.pixelStorei(Pt.UNPACK_SKIP_ROWS,ii),je.pixelStorei(Pt.UNPACK_SKIP_IMAGES,fr),Ke===0&&Ct.generateMipmaps===!0&&Ct.mipmapsAutoUpdate===!0)Pt.generateMipmap(on);je.unbindTexture()},this.initRenderTarget=function(xt){if(xn.get(xt).__webglFramebuffer===void 0)Sn.setupRenderTarget(xt)},this.initTexture=function(xt){if(xt.isCubeTexture)Sn.setTextureCube(xt,0);else if(xt.isData3DTexture)Sn.setTexture3D(xt,0);else if(xt.isDataArrayTexture||xt.isCompressedArrayTexture)Sn.setTexture2DArray(xt,0);else Sn.setTexture2D(xt,0);je.unbindTexture()},this.resetState=function(){qt=0,Zt=0,Ot=null,je.reset(),Xe.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Po}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(tt){this._outputColorSpace=tt;let et=this.getContext();et.drawingBufferColorSpace=s._getDrawingBufferColorSpace(tt),et.unpackColorSpace=s._getUnpackColorSpace()}}
export{Re,H,y,T,B,V,R,de,fe,pe,W,me,ge,_e,se,re,Ce,N,Ie,J,p,ae,D,S,ke,Pe,Ge,xe,oe,g,A,o,U,n,C,e,s,c,_,i,l,w,t,ve,F,I,d,m,E,h,ye,le,b,v,r,Le,Se,Me,X,Q,be,ce,Ne,De,Te,j,ee,q,we,O,z,u,Ae,f,M,Ue,P,k,Y,Z,te,Fe,G,Ee,he,x,Oe,ne,L,ie,K,Be,ze,a,ue,He};
