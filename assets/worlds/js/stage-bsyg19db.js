var tc="187";var ec=0,Ga=1,nc=2;var js=1,Ae=2,Ns=3,H=0,ii=1,p=2,U=0,tr=1,ce=2,ka=3,Ha=4,ic=5;var Ds=100,sc=101,rc=102,ac=103,oc=104,lc=200,cc=201,hc=202,uc=203,dc=204,fc=205,pc=206,mc=207,gc=208,_c=209,xc=210,vc=211,yc=212,Sc=213,Mc=214,bc=0,Tc=1,Ec=2,Wa=3,Ac=4,wc=5,Rc=6,Cc=7,Ic=0,Pc=1,Lc=2,wi=0,he=1,ue=2,de=3,D=4,fe=5,pe=6,me=7;var er=301,Us=302,Hr=303,Wr=304,j=1000,ee=1001,Ee=1002,L=1003,Re=1004;var Z=1005;var M=1006,te=1007;var N=1008;var Mi=1009,Nc=1010,Dc=1011,nr=1012,Va=1013,$i=1014,Gi=1015,b=1016,Xa=1017,qa=1018,ds=1020,Uc=35902,Fc=35899,Oc=1021,Bc=1022,ki=1023,Fs=1026,Ki=1027,zc=1028,Ya=1029,fs=1030,Za=1031;var Ja=1033,Vr=33776,Xr=33777,qr=33778,Yr=33779,$a=35840,Ka=35841,Qa=35842,ja=35843,to=36196,eo=37492,no=37496,io=37488,so=37489,Zr=37490,ro=37491,ao=37808,oo=37809,lo=37810,co=37811,ho=37812,uo=37813,fo=37814,po=37815,mo=37816,go=37817,_o=37818,xo=37819,vo=37820,yo=37821,So=36492,Mo=36494,bo=36495,To=36283,Eo=36284,Jr=36285,Ao=36286;var ze=2300,Ce=2301;var ke=0,ge=1,ne=2;var wo=0,Gc=1,ps="",m="srgb",R="srgb-linear",Ro="linear",a="srgb";var kc=512,Hc=513,Wc=514,Co=515,Vc=516,Xc=517,Io=518,Po=519;var Lo="300 es",No=2000;function Jh(Y){for(let tt=Y.length-1;tt>=0;--tt)if(Y[tt]>=65535)return!0;return!1}function $h(Y){return ArrayBuffer.isView(Y)&&!(Y instanceof DataView)}function Ps(Y){return document.createElementNS("http://www.w3.org/1999/xhtml",Y)}function qc(){let Y=Ps("canvas");return Y.style.display="block",Y}var pl={},Ls=null;function Qs(...Y){let tt="THREE."+Y.shift();if(Ls)Ls("log",tt,...Y);else console.log(tt,...Y)}function Yc(Y){let tt=Y[0];if(typeof tt==="string"&&tt.startsWith("TSL:")){let et=Y[1];if(et&&et.isStackTrace)Y[0]+=" "+et.getLocation();else Y[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return Y}function hn(...Y){Y=Yc(Y);let tt="THREE."+Y.shift();if(Ls)Ls("warn",tt,...Y);else{let et=Y[0];if(et&&et.isStackTrace)console.warn(et.getError(tt));else console.warn(tt,...Y)}}function gn(...Y){Y=Yc(Y);let tt="THREE."+Y.shift();if(Ls)Ls("error",tt,...Y);else{let et=Y[0];if(et&&et.isStackTrace)console.error(et.getError(tt));else console.error(tt,...Y)}}function cs(...Y){let tt=Y.join(" ");if(tt in pl)return;pl[tt]=!0,hn(...Y)}function Zc(Y,tt,et){return new Promise(function(nt,it){function st(){switch(Y.clientWaitSync(tt,Y.SYNC_FLUSH_COMMANDS_BIT,0)){case Y.WAIT_FAILED:it();break;case Y.TIMEOUT_EXPIRED:setTimeout(st,et);break;default:nt()}}setTimeout(st,et)})}var Jc={[0]:0,[2]:6,[4]:4,[3]:5,[1]:1,[6]:2,[7]:7,[5]:3};class Hi{addEventListener(Y,tt){if(this._listeners===void 0)this._listeners={};let et=this._listeners;if(et[Y]===void 0)et[Y]=[];if(et[Y].indexOf(tt)===-1)et[Y].push(tt)}hasEventListener(Y,tt){let et=this._listeners;if(et===void 0)return!1;return et[Y]!==void 0&&et[Y].indexOf(tt)!==-1}removeEventListener(Y,tt){let et=this._listeners;if(et===void 0)return;let nt=et[Y];if(nt!==void 0){let it=nt.indexOf(tt);if(it!==-1)nt.splice(it,1)}}dispatchEvent(Y){let tt=this._listeners;if(tt===void 0)return;let et=tt[Y.type];if(et!==void 0){Y.target=this;let nt=et.slice(0);for(let it=0,st=nt.length;it<st;it++)nt[it].call(this,Y);Y.target=null}}}var ei=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ml=1234567,$s=Math.PI/180,hs=180/Math.PI;function Ri(){let Y=Math.random()*4294967295|0,tt=Math.random()*4294967295|0,et=Math.random()*4294967295|0,nt=Math.random()*4294967295|0;return(ei[Y&255]+ei[Y>>8&255]+ei[Y>>16&255]+ei[Y>>24&255]+"-"+ei[tt&255]+ei[tt>>8&255]+"-"+ei[tt>>16&15|64]+ei[tt>>24&255]+"-"+ei[et&63|128]+ei[et>>8&255]+"-"+ei[et>>16&255]+ei[et>>24&255]+ei[nt&255]+ei[nt>>8&255]+ei[nt>>16&255]+ei[nt>>24&255]).toLowerCase()}function Tn(Y,tt,et){return Math.max(tt,Math.min(et,Y))}function Do(Y,tt){return(Y%tt+tt)%tt}function Kh(Y,tt,et,nt,it){return nt+(Y-tt)*(it-nt)/(et-tt)}function Qh(Y,tt,et){if(Y!==tt)return(et-Y)/(tt-Y);else return 0}function Ks(Y,tt,et){return(1-et)*Y+et*tt}function jh(Y,tt,et,nt){return Ks(Y,tt,1-Math.exp(-et*nt))}function tu(Y,tt=1){return tt-Math.abs(Do(Y,tt*2)-tt)}function eu(Y,tt,et){if(Y<=tt)return 0;if(Y>=et)return 1;return Y=(Y-tt)/(et-tt),Y*Y*(3-2*Y)}function nu(Y,tt,et){if(Y<=tt)return 0;if(Y>=et)return 1;return Y=(Y-tt)/(et-tt),Y*Y*Y*(Y*(Y*6-15)+10)}function iu(Y,tt){return Y+Math.floor(Math.random()*(tt-Y+1))}function su(Y,tt){return Y+Math.random()*(tt-Y)}function ru(Y){return Y*(0.5-Math.random())}function au(Y){if(Y!==void 0)ml=Y;let tt=ml+=1831565813;return tt=Math.imul(tt^tt>>>15,tt|1),tt^=tt+Math.imul(tt^tt>>>7,tt|61),((tt^tt>>>14)>>>0)/4294967296}function ou(Y){return Y*$s}function lu(Y){return Y*hs}function cu(Y){return Y>0&&Number.isInteger(Y)&&2**Math.round(Math.log2(Y))===Y}function hu(Y){return Math.pow(2,Math.ceil(Math.log(Y)/Math.LN2))}function Uo(Y){return Math.pow(2,Math.floor(Math.log(Y)/Math.LN2))}function uu(Y,tt,et,nt,it){let{cos:st,sin:rt}=Math,at=st(et/2),ot=rt(et/2),lt=st((tt+nt)/2),ct=rt((tt+nt)/2),ut=st((tt-nt)/2),ht=rt((tt-nt)/2),ft=st((nt-tt)/2),xt=rt((nt-tt)/2);switch(it){case"XYX":Y.set(at*ct,ot*ut,ot*ht,at*lt);break;case"YZY":Y.set(ot*ht,at*ct,ot*ut,at*lt);break;case"ZXZ":Y.set(ot*ut,ot*ht,at*ct,at*lt);break;case"XZX":Y.set(at*ct,ot*xt,ot*ft,at*lt);break;case"YXY":Y.set(ot*ft,at*ct,ot*xt,at*lt);break;case"ZYZ":Y.set(ot*xt,ot*ft,at*ct,at*lt);break;default:hn("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+it)}}function $r(Y){switch(Y.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Fo(Y,tt){if(tt.constructor===Float32Array)return Y;let et=$r(tt);if(et===void 0)throw Error("THREE.MathUtils: Invalid component type.");return Math.max(Y/et,-1)}function Oo(Y,tt){if(tt.constructor===Float32Array)return Y;let et=$r(tt);if(et===void 0)throw Error("THREE.MathUtils: Invalid component type.");return Math.round(Y*et)}var g={DEG2RAD:$s,RAD2DEG:hs,generateUUID:Ri,clamp:Tn,euclideanModulo:Do,mapLinear:Kh,inverseLerp:Qh,lerp:Ks,damp:jh,pingpong:tu,smoothstep:eu,smootherstep:nu,randInt:iu,randFloat:su,randFloatSpread:ru,seededRandom:au,degToRad:ou,radToDeg:lu,isPowerOfTwo:cu,ceilPowerOfTwo:hu,floorPowerOfTwo:Uo,setQuaternionFromProperEuler:uu,normalize:Oo,denormalize:Fo};class n{static{this.prototype.isVector2=!0}constructor(Y=0,tt=0){this.x=Y,this.y=tt}get width(){return this.x}set width(Y){this.x=Y}get height(){return this.y}set height(Y){this.y=Y}set(Y,tt){return this.x=Y,this.y=tt,this}setScalar(Y){return this.x=Y,this.y=Y,this}setX(Y){return this.x=Y,this}setY(Y){return this.y=Y,this}setComponent(Y,tt){switch(Y){case 0:this.x=tt;break;case 1:this.y=tt;break;default:throw Error("THREE.Vector2: index is out of range: "+Y)}return this}getComponent(Y){switch(Y){case 0:return this.x;case 1:return this.y;default:throw Error("THREE.Vector2: index is out of range: "+Y)}}clone(){return new this.constructor(this.x,this.y)}copy(Y){return this.x=Y.x,this.y=Y.y,this}add(Y){return this.x+=Y.x,this.y+=Y.y,this}addScalar(Y){return this.x+=Y,this.y+=Y,this}addVectors(Y,tt){return this.x=Y.x+tt.x,this.y=Y.y+tt.y,this}addScaledVector(Y,tt){return this.x+=Y.x*tt,this.y+=Y.y*tt,this}sub(Y){return this.x-=Y.x,this.y-=Y.y,this}subScalar(Y){return this.x-=Y,this.y-=Y,this}subVectors(Y,tt){return this.x=Y.x-tt.x,this.y=Y.y-tt.y,this}multiply(Y){return this.x*=Y.x,this.y*=Y.y,this}multiplyScalar(Y){return this.x*=Y,this.y*=Y,this}divide(Y){return this.x/=Y.x,this.y/=Y.y,this}divideScalar(Y){return this.multiplyScalar(1/Y)}applyMatrix3(Y){let tt=this.x,et=this.y,nt=Y.elements;return this.x=nt[0]*tt+nt[3]*et+nt[6],this.y=nt[1]*tt+nt[4]*et+nt[7],this}min(Y){return this.x=Math.min(this.x,Y.x),this.y=Math.min(this.y,Y.y),this}max(Y){return this.x=Math.max(this.x,Y.x),this.y=Math.max(this.y,Y.y),this}clamp(Y,tt){return this.x=Tn(this.x,Y.x,tt.x),this.y=Tn(this.y,Y.y,tt.y),this}clampScalar(Y,tt){return this.x=Tn(this.x,Y,tt),this.y=Tn(this.y,Y,tt),this}clampLength(Y,tt){let et=this.length();return this.divideScalar(et||1).multiplyScalar(Tn(et,Y,tt))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(Y){return this.x*Y.x+this.y*Y.y}cross(Y){return this.x*Y.y-this.y*Y.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(Y){let tt=Math.sqrt(this.lengthSq()*Y.lengthSq());if(tt===0)return Math.PI/2;let et=this.dot(Y)/tt;return Math.acos(Tn(et,-1,1))}distanceTo(Y){return Math.sqrt(this.distanceToSquared(Y))}distanceToSquared(Y){let tt=this.x-Y.x,et=this.y-Y.y;return tt*tt+et*et}manhattanDistanceTo(Y){return Math.abs(this.x-Y.x)+Math.abs(this.y-Y.y)}setLength(Y){return this.normalize().multiplyScalar(Y)}lerp(Y,tt){return this.x+=(Y.x-this.x)*tt,this.y+=(Y.y-this.y)*tt,this}lerpVectors(Y,tt,et){return this.x=Y.x+(tt.x-Y.x)*et,this.y=Y.y+(tt.y-Y.y)*et,this}equals(Y){return Y.x===this.x&&Y.y===this.y}fromArray(Y,tt=0){return this.x=Y[tt],this.y=Y[tt+1],this}toArray(Y=[],tt=0){return Y[tt]=this.x,Y[tt+1]=this.y,Y}fromBufferAttribute(Y,tt){return this.x=Y.getX(tt),this.y=Y.getY(tt),this}rotateAround(Y,tt){let et=Math.cos(tt),nt=Math.sin(tt),it=this.x-Y.x,st=this.y-Y.y;return this.x=it*et-st*nt+Y.x,this.y=it*nt+st*et+Y.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class I{constructor(Y=0,tt=0,et=0,nt=1){this.isQuaternion=!0,this._x=Y,this._y=tt,this._z=et,this._w=nt}static slerpFlat(Y,tt,et,nt,it,st,rt){let at=et[nt+0],ot=et[nt+1],lt=et[nt+2],ct=et[nt+3],ut=it[st+0],ht=it[st+1],ft=it[st+2],xt=it[st+3];if(ct!==xt||at!==ut||ot!==ht||lt!==ft){let St=at*ut+ot*ht+lt*ft+ct*xt;if(St<0)ut=-ut,ht=-ht,ft=-ft,xt=-xt,St=-St;let dt=1-rt;if(St<0.9995){let pt=Math.acos(St),bt=Math.sin(pt);dt=Math.sin(dt*pt)/bt,rt=Math.sin(rt*pt)/bt,at=at*dt+ut*rt,ot=ot*dt+ht*rt,lt=lt*dt+ft*rt,ct=ct*dt+xt*rt}else{at=at*dt+ut*rt,ot=ot*dt+ht*rt,lt=lt*dt+ft*rt,ct=ct*dt+xt*rt;let pt=1/Math.sqrt(at*at+ot*ot+lt*lt+ct*ct);at*=pt,ot*=pt,lt*=pt,ct*=pt}}Y[tt]=at,Y[tt+1]=ot,Y[tt+2]=lt,Y[tt+3]=ct}static multiplyQuaternionsFlat(Y,tt,et,nt,it,st){let rt=et[nt],at=et[nt+1],ot=et[nt+2],lt=et[nt+3],ct=it[st],ut=it[st+1],ht=it[st+2],ft=it[st+3];return Y[tt]=rt*ft+lt*ct+at*ht-ot*ut,Y[tt+1]=at*ft+lt*ut+ot*ct-rt*ht,Y[tt+2]=ot*ft+lt*ht+rt*ut-at*ct,Y[tt+3]=lt*ft-rt*ct-at*ut-ot*ht,Y}get x(){return this._x}set x(Y){this._x=Y,this._onChangeCallback()}get y(){return this._y}set y(Y){this._y=Y,this._onChangeCallback()}get z(){return this._z}set z(Y){this._z=Y,this._onChangeCallback()}get w(){return this._w}set w(Y){this._w=Y,this._onChangeCallback()}set(Y,tt,et,nt){return this._x=Y,this._y=tt,this._z=et,this._w=nt,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(Y){return this._x=Y.x,this._y=Y.y,this._z=Y.z,this._w=Y.w,this._onChangeCallback(),this}setFromEuler(Y,tt=!0){let{_x:et,_y:nt,_z:it,_order:st}=Y,{cos:rt,sin:at}=Math,ot=rt(et/2),lt=rt(nt/2),ct=rt(it/2),ut=at(et/2),ht=at(nt/2),ft=at(it/2);switch(st){case"XYZ":this._x=ut*lt*ct+ot*ht*ft,this._y=ot*ht*ct-ut*lt*ft,this._z=ot*lt*ft+ut*ht*ct,this._w=ot*lt*ct-ut*ht*ft;break;case"YXZ":this._x=ut*lt*ct+ot*ht*ft,this._y=ot*ht*ct-ut*lt*ft,this._z=ot*lt*ft-ut*ht*ct,this._w=ot*lt*ct+ut*ht*ft;break;case"ZXY":this._x=ut*lt*ct-ot*ht*ft,this._y=ot*ht*ct+ut*lt*ft,this._z=ot*lt*ft+ut*ht*ct,this._w=ot*lt*ct-ut*ht*ft;break;case"ZYX":this._x=ut*lt*ct-ot*ht*ft,this._y=ot*ht*ct+ut*lt*ft,this._z=ot*lt*ft-ut*ht*ct,this._w=ot*lt*ct+ut*ht*ft;break;case"YZX":this._x=ut*lt*ct+ot*ht*ft,this._y=ot*ht*ct+ut*lt*ft,this._z=ot*lt*ft-ut*ht*ct,this._w=ot*lt*ct-ut*ht*ft;break;case"XZY":this._x=ut*lt*ct-ot*ht*ft,this._y=ot*ht*ct-ut*lt*ft,this._z=ot*lt*ft+ut*ht*ct,this._w=ot*lt*ct+ut*ht*ft;break;default:hn("Quaternion: .setFromEuler() encountered an unknown order: "+st)}if(tt===!0)this._onChangeCallback();return this}setFromAxisAngle(Y,tt){let et=tt/2,nt=Math.sin(et);return this._x=Y.x*nt,this._y=Y.y*nt,this._z=Y.z*nt,this._w=Math.cos(et),this._onChangeCallback(),this}setFromRotationMatrix(Y){let tt=Y.elements,et=tt[0],nt=tt[4],it=tt[8],st=tt[1],rt=tt[5],at=tt[9],ot=tt[2],lt=tt[6],ct=tt[10],ut=et+rt+ct;if(ut>0){let ht=0.5/Math.sqrt(ut+1);this._w=0.25/ht,this._x=(lt-at)*ht,this._y=(it-ot)*ht,this._z=(st-nt)*ht}else if(et>rt&&et>ct){let ht=2*Math.sqrt(1+et-rt-ct);this._w=(lt-at)/ht,this._x=0.25*ht,this._y=(nt+st)/ht,this._z=(it+ot)/ht}else if(rt>ct){let ht=2*Math.sqrt(1+rt-et-ct);this._w=(it-ot)/ht,this._x=(nt+st)/ht,this._y=0.25*ht,this._z=(at+lt)/ht}else{let ht=2*Math.sqrt(1+ct-et-rt);this._w=(st-nt)/ht,this._x=(it+ot)/ht,this._y=(at+lt)/ht,this._z=0.25*ht}return this._onChangeCallback(),this}setFromUnitVectors(Y,tt){let et=Y.dot(tt)+1;if(et<0.00000001)if(et=0,Math.abs(Y.x)>Math.abs(Y.z))this._x=-Y.y,this._y=Y.x,this._z=0,this._w=et;else this._x=0,this._y=-Y.z,this._z=Y.y,this._w=et;else this._x=Y.y*tt.z-Y.z*tt.y,this._y=Y.z*tt.x-Y.x*tt.z,this._z=Y.x*tt.y-Y.y*tt.x,this._w=et;return this.normalize()}angleTo(Y){return 2*Math.acos(Math.abs(Tn(this.dot(Y),-1,1)))}rotateTowards(Y,tt){let et=this.angleTo(Y);if(et===0)return this;let nt=Math.min(1,tt/et);return this.slerp(Y,nt),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(Y){return this._x*Y._x+this._y*Y._y+this._z*Y._z+this._w*Y._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let Y=this.length();if(Y===0)this._x=0,this._y=0,this._z=0,this._w=1;else Y=1/Y,this._x=this._x*Y,this._y=this._y*Y,this._z=this._z*Y,this._w=this._w*Y;return this._onChangeCallback(),this}multiply(Y){return this.multiplyQuaternions(this,Y)}premultiply(Y){return this.multiplyQuaternions(Y,this)}multiplyQuaternions(Y,tt){let{_x:et,_y:nt,_z:it,_w:st}=Y,{_x:rt,_y:at,_z:ot,_w:lt}=tt;return this._x=et*lt+st*rt+nt*ot-it*at,this._y=nt*lt+st*at+it*rt-et*ot,this._z=it*lt+st*ot+et*at-nt*rt,this._w=st*lt-et*rt-nt*at-it*ot,this._onChangeCallback(),this}slerp(Y,tt){let{_x:et,_y:nt,_z:it,_w:st}=Y,rt=this.dot(Y);if(rt<0)et=-et,nt=-nt,it=-it,st=-st,rt=-rt;let at=1-tt;if(rt<0.9995){let ot=Math.acos(rt),lt=Math.sin(ot);at=Math.sin(at*ot)/lt,tt=Math.sin(tt*ot)/lt,this._x=this._x*at+et*tt,this._y=this._y*at+nt*tt,this._z=this._z*at+it*tt,this._w=this._w*at+st*tt,this._onChangeCallback()}else this._x=this._x*at+et*tt,this._y=this._y*at+nt*tt,this._z=this._z*at+it*tt,this._w=this._w*at+st*tt,this.normalize();return this}slerpQuaternions(Y,tt,et){return this.copy(Y).slerp(tt,et)}random(){let Y=2*Math.PI*Math.random(),tt=2*Math.PI*Math.random(),et=Math.random(),nt=Math.sqrt(1-et),it=Math.sqrt(et);return this.set(nt*Math.sin(Y),nt*Math.cos(Y),it*Math.sin(tt),it*Math.cos(tt))}equals(Y){return Y._x===this._x&&Y._y===this._y&&Y._z===this._z&&Y._w===this._w}fromArray(Y,tt=0){return this._x=Y[tt],this._y=Y[tt+1],this._z=Y[tt+2],this._w=Y[tt+3],this._onChangeCallback(),this}toArray(Y=[],tt=0){return Y[tt]=this._x,Y[tt+1]=this._y,Y[tt+2]=this._z,Y[tt+3]=this._w,Y}fromBufferAttribute(Y,tt){return this._x=Y.getX(tt),this._y=Y.getY(tt),this._z=Y.getZ(tt),this._w=Y.getW(tt),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(Y){return this._onChangeCallback=Y,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class e{static{this.prototype.isVector3=!0}constructor(Y=0,tt=0,et=0){this.x=Y,this.y=tt,this.z=et}set(Y,tt,et){if(et===void 0)et=this.z;return this.x=Y,this.y=tt,this.z=et,this}setScalar(Y){return this.x=Y,this.y=Y,this.z=Y,this}setX(Y){return this.x=Y,this}setY(Y){return this.y=Y,this}setZ(Y){return this.z=Y,this}setComponent(Y,tt){switch(Y){case 0:this.x=tt;break;case 1:this.y=tt;break;case 2:this.z=tt;break;default:throw Error("THREE.Vector3: index is out of range: "+Y)}return this}getComponent(Y){switch(Y){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("THREE.Vector3: index is out of range: "+Y)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(Y){return this.x=Y.x,this.y=Y.y,this.z=Y.z,this}add(Y){return this.x+=Y.x,this.y+=Y.y,this.z+=Y.z,this}addScalar(Y){return this.x+=Y,this.y+=Y,this.z+=Y,this}addVectors(Y,tt){return this.x=Y.x+tt.x,this.y=Y.y+tt.y,this.z=Y.z+tt.z,this}addScaledVector(Y,tt){return this.x+=Y.x*tt,this.y+=Y.y*tt,this.z+=Y.z*tt,this}sub(Y){return this.x-=Y.x,this.y-=Y.y,this.z-=Y.z,this}subScalar(Y){return this.x-=Y,this.y-=Y,this.z-=Y,this}subVectors(Y,tt){return this.x=Y.x-tt.x,this.y=Y.y-tt.y,this.z=Y.z-tt.z,this}multiply(Y){return this.x*=Y.x,this.y*=Y.y,this.z*=Y.z,this}multiplyScalar(Y){return this.x*=Y,this.y*=Y,this.z*=Y,this}multiplyVectors(Y,tt){return this.x=Y.x*tt.x,this.y=Y.y*tt.y,this.z=Y.z*tt.z,this}applyEuler(Y){return this.applyQuaternion(gl.setFromEuler(Y))}applyAxisAngle(Y,tt){return this.applyQuaternion(gl.setFromAxisAngle(Y,tt))}applyMatrix3(Y){let tt=this.x,et=this.y,nt=this.z,it=Y.elements;return this.x=it[0]*tt+it[3]*et+it[6]*nt,this.y=it[1]*tt+it[4]*et+it[7]*nt,this.z=it[2]*tt+it[5]*et+it[8]*nt,this}applyNormalMatrix(Y){return this.applyMatrix3(Y).normalize()}applyMatrix4(Y){let tt=this.x,et=this.y,nt=this.z,it=Y.elements,st=1/(it[3]*tt+it[7]*et+it[11]*nt+it[15]);return this.x=(it[0]*tt+it[4]*et+it[8]*nt+it[12])*st,this.y=(it[1]*tt+it[5]*et+it[9]*nt+it[13])*st,this.z=(it[2]*tt+it[6]*et+it[10]*nt+it[14])*st,this}applyQuaternion(Y){let tt=this.x,et=this.y,nt=this.z,{x:it,y:st,z:rt,w:at}=Y,ot=2*(st*nt-rt*et),lt=2*(rt*tt-it*nt),ct=2*(it*et-st*tt);return this.x=tt+at*ot+st*ct-rt*lt,this.y=et+at*lt+rt*ot-it*ct,this.z=nt+at*ct+it*lt-st*ot,this}project(Y){return this.applyMatrix4(Y.matrixWorldInverse).applyMatrix4(Y.projectionMatrix)}unproject(Y){return this.applyMatrix4(Y.projectionMatrixInverse).applyMatrix4(Y.matrixWorld)}transformDirection(Y){let tt=this.x,et=this.y,nt=this.z,it=Y.elements;return this.x=it[0]*tt+it[4]*et+it[8]*nt,this.y=it[1]*tt+it[5]*et+it[9]*nt,this.z=it[2]*tt+it[6]*et+it[10]*nt,this.normalize()}divide(Y){return this.x/=Y.x,this.y/=Y.y,this.z/=Y.z,this}divideScalar(Y){return this.multiplyScalar(1/Y)}min(Y){return this.x=Math.min(this.x,Y.x),this.y=Math.min(this.y,Y.y),this.z=Math.min(this.z,Y.z),this}max(Y){return this.x=Math.max(this.x,Y.x),this.y=Math.max(this.y,Y.y),this.z=Math.max(this.z,Y.z),this}clamp(Y,tt){return this.x=Tn(this.x,Y.x,tt.x),this.y=Tn(this.y,Y.y,tt.y),this.z=Tn(this.z,Y.z,tt.z),this}clampScalar(Y,tt){return this.x=Tn(this.x,Y,tt),this.y=Tn(this.y,Y,tt),this.z=Tn(this.z,Y,tt),this}clampLength(Y,tt){let et=this.length();return this.divideScalar(et||1).multiplyScalar(Tn(et,Y,tt))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(Y){return this.x*Y.x+this.y*Y.y+this.z*Y.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(Y){return this.normalize().multiplyScalar(Y)}lerp(Y,tt){return this.x+=(Y.x-this.x)*tt,this.y+=(Y.y-this.y)*tt,this.z+=(Y.z-this.z)*tt,this}lerpVectors(Y,tt,et){return this.x=Y.x+(tt.x-Y.x)*et,this.y=Y.y+(tt.y-Y.y)*et,this.z=Y.z+(tt.z-Y.z)*et,this}cross(Y){return this.crossVectors(this,Y)}crossVectors(Y,tt){let{x:et,y:nt,z:it}=Y,{x:st,y:rt,z:at}=tt;return this.x=nt*at-it*rt,this.y=it*st-et*at,this.z=et*rt-nt*st,this}projectOnVector(Y){let tt=Y.lengthSq();if(tt===0)return this.set(0,0,0);let et=Y.dot(this)/tt;return this.copy(Y).multiplyScalar(et)}projectOnPlane(Y){return ma.copy(this).projectOnVector(Y),this.sub(ma)}reflect(Y){return this.sub(ma.copy(Y).multiplyScalar(2*this.dot(Y)))}angleTo(Y){let tt=Math.sqrt(this.lengthSq()*Y.lengthSq());if(tt===0)return Math.PI/2;let et=this.dot(Y)/tt;return Math.acos(Tn(et,-1,1))}distanceTo(Y){return Math.sqrt(this.distanceToSquared(Y))}distanceToSquared(Y){let tt=this.x-Y.x,et=this.y-Y.y,nt=this.z-Y.z;return tt*tt+et*et+nt*nt}manhattanDistanceTo(Y){return Math.abs(this.x-Y.x)+Math.abs(this.y-Y.y)+Math.abs(this.z-Y.z)}setFromSpherical(Y){return this.setFromSphericalCoords(Y.radius,Y.phi,Y.theta)}setFromSphericalCoords(Y,tt,et){let nt=Math.sin(tt)*Y;return this.x=nt*Math.sin(et),this.y=Math.cos(tt)*Y,this.z=nt*Math.cos(et),this}setFromCylindrical(Y){return this.setFromCylindricalCoords(Y.radius,Y.theta,Y.y)}setFromCylindricalCoords(Y,tt,et){return this.x=Y*Math.sin(tt),this.y=et,this.z=Y*Math.cos(tt),this}setFromMatrixPosition(Y){let tt=Y.elements;return this.x=tt[12],this.y=tt[13],this.z=tt[14],this}setFromMatrixScale(Y){let tt=this.setFromMatrixColumn(Y,0).length(),et=this.setFromMatrixColumn(Y,1).length(),nt=this.setFromMatrixColumn(Y,2).length();return this.x=tt,this.y=et,this.z=nt,this}setFromMatrixColumn(Y,tt){return this.fromArray(Y.elements,tt*4)}setFromMatrix3Column(Y,tt){return this.fromArray(Y.elements,tt*3)}setFromEuler(Y){return this.x=Y._x,this.y=Y._y,this.z=Y._z,this}setFromColor(Y){return this.x=Y.r,this.y=Y.g,this.z=Y.b,this}equals(Y){return Y.x===this.x&&Y.y===this.y&&Y.z===this.z}fromArray(Y,tt=0){return this.x=Y[tt],this.y=Y[tt+1],this.z=Y[tt+2],this}toArray(Y=[],tt=0){return Y[tt]=this.x,Y[tt+1]=this.y,Y[tt+2]=this.z,Y}fromBufferAttribute(Y,tt){return this.x=Y.getX(tt),this.y=Y.getY(tt),this.z=Y.getZ(tt),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let Y=Math.random()*Math.PI*2,tt=Math.random()*2-1,et=Math.sqrt(1-tt*tt);return this.x=et*Math.cos(Y),this.y=tt,this.z=et*Math.sin(Y),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var ma=new e,gl=new I;class _n{static{this.prototype.isMatrix3=!0}constructor(Y,tt,et,nt,it,st,rt,at,ot){if(this.elements=[1,0,0,0,1,0,0,0,1],Y!==void 0)this.set(Y,tt,et,nt,it,st,rt,at,ot)}set(Y,tt,et,nt,it,st,rt,at,ot){let lt=this.elements;return lt[0]=Y,lt[1]=nt,lt[2]=rt,lt[3]=tt,lt[4]=it,lt[5]=at,lt[6]=et,lt[7]=st,lt[8]=ot,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(Y){let tt=this.elements,et=Y.elements;return tt[0]=et[0],tt[1]=et[1],tt[2]=et[2],tt[3]=et[3],tt[4]=et[4],tt[5]=et[5],tt[6]=et[6],tt[7]=et[7],tt[8]=et[8],this}extractBasis(Y,tt,et){return Y.setFromMatrix3Column(this,0),tt.setFromMatrix3Column(this,1),et.setFromMatrix3Column(this,2),this}setFromMatrix4(Y){let tt=Y.elements;return this.set(tt[0],tt[4],tt[8],tt[1],tt[5],tt[9],tt[2],tt[6],tt[10]),this}multiply(Y){return this.multiplyMatrices(this,Y)}premultiply(Y){return this.multiplyMatrices(Y,this)}multiplyMatrices(Y,tt){let et=Y.elements,nt=tt.elements,it=this.elements,st=et[0],rt=et[3],at=et[6],ot=et[1],lt=et[4],ct=et[7],ut=et[2],ht=et[5],ft=et[8],xt=nt[0],St=nt[3],dt=nt[6],pt=nt[1],bt=nt[4],Tt=nt[7],Mt=nt[2],Et=nt[5],Ct=nt[8];return it[0]=st*xt+rt*pt+at*Mt,it[3]=st*St+rt*bt+at*Et,it[6]=st*dt+rt*Tt+at*Ct,it[1]=ot*xt+lt*pt+ct*Mt,it[4]=ot*St+lt*bt+ct*Et,it[7]=ot*dt+lt*Tt+ct*Ct,it[2]=ut*xt+ht*pt+ft*Mt,it[5]=ut*St+ht*bt+ft*Et,it[8]=ut*dt+ht*Tt+ft*Ct,this}multiplyScalar(Y){let tt=this.elements;return tt[0]*=Y,tt[3]*=Y,tt[6]*=Y,tt[1]*=Y,tt[4]*=Y,tt[7]*=Y,tt[2]*=Y,tt[5]*=Y,tt[8]*=Y,this}determinant(){let Y=this.elements,tt=Y[0],et=Y[1],nt=Y[2],it=Y[3],st=Y[4],rt=Y[5],at=Y[6],ot=Y[7],lt=Y[8];return tt*st*lt-tt*rt*ot-et*it*lt+et*rt*at+nt*it*ot-nt*st*at}invert(){let Y=this.elements,tt=Y[0],et=Y[1],nt=Y[2],it=Y[3],st=Y[4],rt=Y[5],at=Y[6],ot=Y[7],lt=Y[8],ct=lt*st-rt*ot,ut=rt*at-lt*it,ht=ot*it-st*at,ft=tt*ct+et*ut+nt*ht;if(ft===0)return this.set(0,0,0,0,0,0,0,0,0);let xt=1/ft;return Y[0]=ct*xt,Y[1]=(nt*ot-lt*et)*xt,Y[2]=(rt*et-nt*st)*xt,Y[3]=ut*xt,Y[4]=(lt*tt-nt*at)*xt,Y[5]=(nt*it-rt*tt)*xt,Y[6]=ht*xt,Y[7]=(et*at-ot*tt)*xt,Y[8]=(st*tt-et*it)*xt,this}transpose(){let Y,tt=this.elements;return Y=tt[1],tt[1]=tt[3],tt[3]=Y,Y=tt[2],tt[2]=tt[6],tt[6]=Y,Y=tt[5],tt[5]=tt[7],tt[7]=Y,this}getNormalMatrix(Y){return this.setFromMatrix4(Y).invert().transpose()}transposeIntoArray(Y){let tt=this.elements;return Y[0]=tt[0],Y[1]=tt[3],Y[2]=tt[6],Y[3]=tt[1],Y[4]=tt[4],Y[5]=tt[7],Y[6]=tt[2],Y[7]=tt[5],Y[8]=tt[8],this}setUvTransform(Y,tt,et,nt,it,st,rt){let at=Math.cos(it),ot=Math.sin(it);return this.set(et*at,et*ot,-et*(at*st+ot*rt)+st+Y,-nt*ot,nt*at,-nt*(-ot*st+at*rt)+rt+tt,0,0,1),this}scale(Y,tt){return cs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ga.makeScale(Y,tt)),this}rotate(Y){return cs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ga.makeRotation(-Y)),this}translate(Y,tt){return cs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ga.makeTranslation(Y,tt)),this}makeTranslation(Y,tt){if(Y.isVector2)this.set(1,0,Y.x,0,1,Y.y,0,0,1);else this.set(1,0,Y,0,1,tt,0,0,1);return this}makeRotation(Y){let tt=Math.cos(Y),et=Math.sin(Y);return this.set(tt,-et,0,et,tt,0,0,0,1),this}makeScale(Y,tt){return this.set(Y,0,0,0,tt,0,0,0,1),this}equals(Y){let tt=this.elements,et=Y.elements;for(let nt=0;nt<9;nt++)if(tt[nt]!==et[nt])return!1;return!0}fromArray(Y,tt=0){for(let et=0;et<9;et++)this.elements[et]=Y[et+tt];return this}toArray(Y=[],tt=0){let et=this.elements;return Y[tt]=et[0],Y[tt+1]=et[1],Y[tt+2]=et[2],Y[tt+3]=et[3],Y[tt+4]=et[4],Y[tt+5]=et[5],Y[tt+6]=et[6],Y[tt+7]=et[7],Y[tt+8]=et[8],Y}clone(){return new this.constructor().fromArray(this.elements)}}var ga=new _n,_l=new _n().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),xl=new _n().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function du(){let Y={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(it,st,rt){if(this.enabled===!1||st===rt||!st||!rt)return it;if(this.spaces[st].transfer==="srgb")it.r=zi(it.r),it.g=zi(it.g),it.b=zi(it.b);if(this.spaces[st].primaries!==this.spaces[rt].primaries)it.applyMatrix3(this.spaces[st].toXYZ),it.applyMatrix3(this.spaces[rt].fromXYZ);if(this.spaces[rt].transfer==="srgb")it.r=Is(it.r),it.g=Is(it.g),it.b=Is(it.b);return it},workingToColorSpace:function(it,st){return this.convert(it,this.workingColorSpace,st)},colorSpaceToWorking:function(it,st){return this.convert(it,st,this.workingColorSpace)},getPrimaries:function(it){return this.spaces[it].primaries},getTransfer:function(it){if(it==="")return"linear";return this.spaces[it].transfer},getToneMappingMode:function(it){return this.spaces[it].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(it,st=this.workingColorSpace){return it.fromArray(this.spaces[st].luminanceCoefficients)},define:function(it){Object.assign(this.spaces,it)},_getMatrix:function(it,st,rt){return it.copy(this.spaces[rt].fromXYZ).multiply(this.spaces[st].toXYZ)},_getDrawingBufferColorSpace:function(it){return this.spaces[it].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(it=this.workingColorSpace){return this.spaces[it].workingColorSpaceConfig.unpackColorSpace}},tt=[0.64,0.33,0.3,0.6,0.15,0.06],et=[0.2126,0.7152,0.0722],nt=[0.3127,0.329];return Y.define({["srgb-linear"]:{primaries:tt,whitePoint:nt,transfer:"linear",toXYZ:_l,fromXYZ:xl,luminanceCoefficients:et,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:tt,whitePoint:nt,transfer:"srgb",toXYZ:_l,fromXYZ:xl,luminanceCoefficients:et,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),Y}var s=du();function zi(Y){return Y<0.04045?Y*0.0773993808:Math.pow(Y*0.9478672986+0.0521327014,2.4)}function Is(Y){return Y<0.0031308?Y*12.92:1.055*Math.pow(Y,0.41666)-0.055}var gs;class Bo{static getDataURL(Y,tt="image/png"){if(/^data:/i.test(Y.src))return Y.src;if(typeof HTMLCanvasElement>"u")return Y.src;let et;if(Y instanceof HTMLCanvasElement)et=Y;else{if(gs===void 0)gs=Ps("canvas");gs.width=Y.width,gs.height=Y.height;let nt=gs.getContext("2d");if(Y instanceof ImageData)nt.putImageData(Y,0,0);else nt.drawImage(Y,0,0,Y.width,Y.height);et=gs}return et.toDataURL(tt)}static sRGBToLinear(Y){if(typeof HTMLImageElement<"u"&&Y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&Y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&Y instanceof ImageBitmap){let tt=Ps("canvas");tt.width=Y.width,tt.height=Y.height;let et=tt.getContext("2d");et.drawImage(Y,0,0,Y.width,Y.height);let nt=et.getImageData(0,0,Y.width,Y.height),it=nt.data;for(let st=0;st<it.length;st++)it[st]=zi(it[st]/255)*255;return et.putImageData(nt,0,0),tt}else if(Y.data){let tt=Y.data.slice(0);for(let et=0;et<tt.length;et++)if(tt instanceof Uint8Array||tt instanceof Uint8ClampedArray)tt[et]=Math.floor(zi(tt[et]/255)*255);else tt[et]=zi(tt[et]);return{data:tt,width:Y.width,height:Y.height}}else return hn("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),Y}}var fu=0;class ir{constructor(Y=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:fu++}),this.uuid=Ri(),this.data=Y,this.dataReady=!0,this.version=0}getSize(Y){let tt=this.data;if(typeof HTMLVideoElement<"u"&&tt instanceof HTMLVideoElement)Y.set(tt.videoWidth,tt.videoHeight,0);else if(typeof VideoFrame<"u"&&tt instanceof VideoFrame)Y.set(tt.displayWidth,tt.displayHeight,0);else if(tt!==null)Y.set(tt.width||0,tt.height||0,tt.depth||0);else Y.set(0,0,0);return Y}set needsUpdate(Y){if(Y===!0)this.version++}toJSON(Y){let tt=Y===void 0||typeof Y==="string";if(!tt&&Y.images[this.uuid]!==void 0)return Y.images[this.uuid];let et={uuid:this.uuid,url:""},nt=this.data;if(nt!==null){let it;if(Array.isArray(nt)){it=[];for(let st=0,rt=nt.length;st<rt;st++)if(nt[st].isDataTexture)it.push(_a(nt[st].image));else it.push(_a(nt[st]))}else it=_a(nt);et.url=it}if(!tt)Y.images[this.uuid]=et;return et}}function _a(Y){if(typeof HTMLImageElement<"u"&&Y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&Y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&Y instanceof ImageBitmap)return Bo.getDataURL(Y);else if(Y.data)return{data:Array.from(Y.data),width:Y.width,height:Y.height,type:Y.data.constructor.name};else return hn("Texture: Unable to serialize Texture."),{}}var pu=0,xa=new e;class h extends Hi{constructor(Y=h.DEFAULT_IMAGE,tt=h.DEFAULT_MAPPING,et=1001,nt=1001,it=1006,st=1008,rt=1023,at=1009,ot=h.DEFAULT_ANISOTROPY,lt=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:pu++}),this.uuid=Ri(),this.name="",this.source=new ir(Y),this.mipmaps=[],this.mapping=tt,this.channel=0,this.wrapS=et,this.wrapT=nt,this.magFilter=it,this.minFilter=st,this.anisotropy=ot,this.format=rt,this.internalFormat=null,this.type=at,this.offset=new n(0,0),this.repeat=new n(1,1),this.center=new n(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new _n,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=lt,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=Y&&Y.depth&&Y.depth>1?!0:!1,this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(xa).x}get height(){return this.source.getSize(xa).y}get depth(){return this.source.getSize(xa).z}get image(){return this.source.data}set image(Y){this.source.data=Y}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(Y,tt){this.updateRanges.push({start:Y,count:tt})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(Y){return this.name=Y.name,this.source=Y.source,this.mipmaps=Y.mipmaps.slice(0),this.mapping=Y.mapping,this.channel=Y.channel,this.wrapS=Y.wrapS,this.wrapT=Y.wrapT,this.magFilter=Y.magFilter,this.minFilter=Y.minFilter,this.anisotropy=Y.anisotropy,this.format=Y.format,this.internalFormat=Y.internalFormat,this.type=Y.type,this.normalized=Y.normalized,this.offset.copy(Y.offset),this.repeat.copy(Y.repeat),this.center.copy(Y.center),this.rotation=Y.rotation,this.matrixAutoUpdate=Y.matrixAutoUpdate,this.matrix.copy(Y.matrix),this.generateMipmaps=Y.generateMipmaps,this.mipmapsAutoUpdate=Y.mipmapsAutoUpdate,this.premultiplyAlpha=Y.premultiplyAlpha,this.flipY=Y.flipY,this.unpackAlignment=Y.unpackAlignment,this.colorSpace=Y.colorSpace,this.renderTarget=Y.renderTarget,this.isRenderTargetTexture=Y.isRenderTargetTexture,this.isPMREMTexture=Y.isPMREMTexture,this.isArrayTexture=Y.isArrayTexture,this.userData=JSON.parse(JSON.stringify(Y.userData)),this.needsUpdate=!0,this}setValues(Y){for(let tt in Y){let et=Y[tt];if(et===void 0){hn(`Texture.setValues(): parameter '${tt}' has value of undefined.`);continue}let nt=this[tt];if(nt===void 0){hn(`Texture.setValues(): property '${tt}' does not exist.`);continue}if(nt&&et&&(nt.isVector2&&et.isVector2))nt.copy(et);else if(nt&&et&&(nt.isVector3&&et.isVector3))nt.copy(et);else if(nt&&et&&(nt.isMatrix3&&et.isMatrix3))nt.copy(et);else this[tt]=et}}toJSON(Y){let tt=Y===void 0||typeof Y==="string";if(!tt&&Y.textures[this.uuid]!==void 0)return Y.textures[this.uuid];let et={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(Y).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)et.userData=this.userData;if(!tt)Y.textures[this.uuid]=et;return et}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(Y){if(this.mapping!==300)return Y;if(Y.applyMatrix3(this.matrix),Y.x<0||Y.x>1)switch(this.wrapS){case 1000:Y.x=Y.x-Math.floor(Y.x);break;case 1001:Y.x=Y.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(Y.x)%2)===1)Y.x=Math.ceil(Y.x)-Y.x;else Y.x=Y.x-Math.floor(Y.x);break}if(Y.y<0||Y.y>1)switch(this.wrapT){case 1000:Y.y=Y.y-Math.floor(Y.y);break;case 1001:Y.y=Y.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(Y.y)%2)===1)Y.y=Math.ceil(Y.y)-Y.y;else Y.y=Y.y-Math.floor(Y.y);break}if(this.flipY)Y.y=1-Y.y;return Y}set needsUpdate(Y){if(Y===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(Y){if(Y===!0)this.pmremVersion++}}h.DEFAULT_IMAGE=null;h.DEFAULT_MAPPING=300;h.DEFAULT_ANISOTROPY=1;class Nn{static{this.prototype.isVector4=!0}constructor(Y=0,tt=0,et=0,nt=1){this.x=Y,this.y=tt,this.z=et,this.w=nt}get width(){return this.z}set width(Y){this.z=Y}get height(){return this.w}set height(Y){this.w=Y}set(Y,tt,et,nt){return this.x=Y,this.y=tt,this.z=et,this.w=nt,this}setScalar(Y){return this.x=Y,this.y=Y,this.z=Y,this.w=Y,this}setX(Y){return this.x=Y,this}setY(Y){return this.y=Y,this}setZ(Y){return this.z=Y,this}setW(Y){return this.w=Y,this}setComponent(Y,tt){switch(Y){case 0:this.x=tt;break;case 1:this.y=tt;break;case 2:this.z=tt;break;case 3:this.w=tt;break;default:throw Error("THREE.Vector4: index is out of range: "+Y)}return this}getComponent(Y){switch(Y){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("THREE.Vector4: index is out of range: "+Y)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(Y){return this.x=Y.x,this.y=Y.y,this.z=Y.z,this.w=Y.w!==void 0?Y.w:1,this}add(Y){return this.x+=Y.x,this.y+=Y.y,this.z+=Y.z,this.w+=Y.w,this}addScalar(Y){return this.x+=Y,this.y+=Y,this.z+=Y,this.w+=Y,this}addVectors(Y,tt){return this.x=Y.x+tt.x,this.y=Y.y+tt.y,this.z=Y.z+tt.z,this.w=Y.w+tt.w,this}addScaledVector(Y,tt){return this.x+=Y.x*tt,this.y+=Y.y*tt,this.z+=Y.z*tt,this.w+=Y.w*tt,this}sub(Y){return this.x-=Y.x,this.y-=Y.y,this.z-=Y.z,this.w-=Y.w,this}subScalar(Y){return this.x-=Y,this.y-=Y,this.z-=Y,this.w-=Y,this}subVectors(Y,tt){return this.x=Y.x-tt.x,this.y=Y.y-tt.y,this.z=Y.z-tt.z,this.w=Y.w-tt.w,this}multiply(Y){return this.x*=Y.x,this.y*=Y.y,this.z*=Y.z,this.w*=Y.w,this}multiplyScalar(Y){return this.x*=Y,this.y*=Y,this.z*=Y,this.w*=Y,this}applyMatrix4(Y){let tt=this.x,et=this.y,nt=this.z,it=this.w,st=Y.elements;return this.x=st[0]*tt+st[4]*et+st[8]*nt+st[12]*it,this.y=st[1]*tt+st[5]*et+st[9]*nt+st[13]*it,this.z=st[2]*tt+st[6]*et+st[10]*nt+st[14]*it,this.w=st[3]*tt+st[7]*et+st[11]*nt+st[15]*it,this}divide(Y){return this.x/=Y.x,this.y/=Y.y,this.z/=Y.z,this.w/=Y.w,this}divideScalar(Y){return this.multiplyScalar(1/Y)}setAxisAngleFromQuaternion(Y){this.w=2*Math.acos(Y.w);let tt=Math.sqrt(1-Y.w*Y.w);if(tt<0.0001)this.x=1,this.y=0,this.z=0;else this.x=Y.x/tt,this.y=Y.y/tt,this.z=Y.z/tt;return this}setAxisAngleFromRotationMatrix(Y){let tt,et,nt,it,st=0.01,rt=0.1,at=Y.elements,ot=at[0],lt=at[4],ct=at[8],ut=at[1],ht=at[5],ft=at[9],xt=at[2],St=at[6],dt=at[10];if(Math.abs(lt-ut)<0.01&&Math.abs(ct-xt)<0.01&&Math.abs(ft-St)<0.01){if(Math.abs(lt+ut)<0.1&&Math.abs(ct+xt)<0.1&&Math.abs(ft+St)<0.1&&Math.abs(ot+ht+dt-3)<0.1)return this.set(1,0,0,0),this;tt=Math.PI;let bt=(ot+1)/2,Tt=(ht+1)/2,Mt=(dt+1)/2,Et=(lt+ut)/4,Ct=(ct+xt)/4,mt=(ft+St)/4;if(bt>Tt&&bt>Mt)if(bt<0.01)et=0,nt=0.707106781,it=0.707106781;else et=Math.sqrt(bt),nt=Et/et,it=Ct/et;else if(Tt>Mt)if(Tt<0.01)et=0.707106781,nt=0,it=0.707106781;else nt=Math.sqrt(Tt),et=Et/nt,it=mt/nt;else if(Mt<0.01)et=0.707106781,nt=0.707106781,it=0;else it=Math.sqrt(Mt),et=Ct/it,nt=mt/it;return this.set(et,nt,it,tt),this}let pt=Math.sqrt((St-ft)*(St-ft)+(ct-xt)*(ct-xt)+(ut-lt)*(ut-lt));if(Math.abs(pt)<0.001)pt=1;return this.x=(St-ft)/pt,this.y=(ct-xt)/pt,this.z=(ut-lt)/pt,this.w=Math.acos((ot+ht+dt-1)/2),this}setFromMatrixPosition(Y){let tt=Y.elements;return this.x=tt[12],this.y=tt[13],this.z=tt[14],this.w=tt[15],this}min(Y){return this.x=Math.min(this.x,Y.x),this.y=Math.min(this.y,Y.y),this.z=Math.min(this.z,Y.z),this.w=Math.min(this.w,Y.w),this}max(Y){return this.x=Math.max(this.x,Y.x),this.y=Math.max(this.y,Y.y),this.z=Math.max(this.z,Y.z),this.w=Math.max(this.w,Y.w),this}clamp(Y,tt){return this.x=Tn(this.x,Y.x,tt.x),this.y=Tn(this.y,Y.y,tt.y),this.z=Tn(this.z,Y.z,tt.z),this.w=Tn(this.w,Y.w,tt.w),this}clampScalar(Y,tt){return this.x=Tn(this.x,Y,tt),this.y=Tn(this.y,Y,tt),this.z=Tn(this.z,Y,tt),this.w=Tn(this.w,Y,tt),this}clampLength(Y,tt){let et=this.length();return this.divideScalar(et||1).multiplyScalar(Tn(et,Y,tt))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(Y){return this.x*Y.x+this.y*Y.y+this.z*Y.z+this.w*Y.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(Y){return this.normalize().multiplyScalar(Y)}lerp(Y,tt){return this.x+=(Y.x-this.x)*tt,this.y+=(Y.y-this.y)*tt,this.z+=(Y.z-this.z)*tt,this.w+=(Y.w-this.w)*tt,this}lerpVectors(Y,tt,et){return this.x=Y.x+(tt.x-Y.x)*et,this.y=Y.y+(tt.y-Y.y)*et,this.z=Y.z+(tt.z-Y.z)*et,this.w=Y.w+(tt.w-Y.w)*et,this}equals(Y){return Y.x===this.x&&Y.y===this.y&&Y.z===this.z&&Y.w===this.w}fromArray(Y,tt=0){return this.x=Y[tt],this.y=Y[tt+1],this.z=Y[tt+2],this.w=Y[tt+3],this}toArray(Y=[],tt=0){return Y[tt]=this.x,Y[tt+1]=this.y,Y[tt+2]=this.z,Y[tt+3]=this.w,Y}fromBufferAttribute(Y,tt){return this.x=Y.getX(tt),this.y=Y.getY(tt),this.z=Y.getZ(tt),this.w=Y.getW(tt),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class zo extends Hi{constructor(Y=1,tt=1,et={}){super();et=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},et),this.isRenderTarget=!0,this.width=Y,this.height=tt,this.depth=et.depth,this.scissor=new Nn(0,0,Y,tt),this.scissorTest=!1,this.viewport=new Nn(0,0,Y,tt),this.textures=[];let nt=et.count;for(let it=0;it<nt;it++)this.textures[it]=new h({width:Y,height:tt,depth:et.depth}),this.textures[it].isRenderTargetTexture=!0,this.textures[it].renderTarget=this;this._setTextureOptions(et),this.depthBuffer=et.depthBuffer,this.stencilBuffer=et.stencilBuffer,this.resolveColorBuffer=et.resolveColorBuffer,this.resolveDepthBuffer=et.resolveDepthBuffer,this.resolveStencilBuffer=et.resolveStencilBuffer,this.storeMultisampledColorBuffer=et.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=et.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=et.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=et.depthTexture,this.samples=et.samples,this.multiview=et.multiview,this.useArrayDepthTexture=et.useArrayDepthTexture}_setTextureOptions(Y={}){let tt={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(Y.mapping!==void 0)tt.mapping=Y.mapping;if(Y.wrapS!==void 0)tt.wrapS=Y.wrapS;if(Y.wrapT!==void 0)tt.wrapT=Y.wrapT;if(Y.wrapR!==void 0)tt.wrapR=Y.wrapR;if(Y.magFilter!==void 0)tt.magFilter=Y.magFilter;if(Y.minFilter!==void 0)tt.minFilter=Y.minFilter;if(Y.format!==void 0)tt.format=Y.format;if(Y.type!==void 0)tt.type=Y.type;if(Y.anisotropy!==void 0)tt.anisotropy=Y.anisotropy;if(Y.colorSpace!==void 0)tt.colorSpace=Y.colorSpace;if(Y.flipY!==void 0)tt.flipY=Y.flipY;if(Y.generateMipmaps!==void 0)tt.generateMipmaps=Y.generateMipmaps;if(Y.mipmapsAutoUpdate!==void 0)tt.mipmapsAutoUpdate=Y.mipmapsAutoUpdate;if(Y.internalFormat!==void 0)tt.internalFormat=Y.internalFormat;for(let et=0;et<this.textures.length;et++)this.textures[et].setValues(tt)}get texture(){return this.textures[0]}set texture(Y){this.textures[0]=Y}set depthTexture(Y){if(this._depthTexture!==null&&this._depthTexture.renderTarget===this)this._depthTexture.renderTarget=null;if(Y!==null&&Y.renderTarget===null)Y.renderTarget=this;this._depthTexture=Y}get depthTexture(){return this._depthTexture}setSize(Y,tt,et=1){if(this.width!==Y||this.height!==tt||this.depth!==et){this.width=Y,this.height=tt,this.depth=et;for(let nt=0,it=this.textures.length;nt<it;nt++)if(this.textures[nt].image.width=Y,this.textures[nt].image.height=tt,this.textures[nt].image.depth=et,this.textures[nt].isData3DTexture!==!0)this.textures[nt].isArrayTexture=this.textures[nt].image.depth>1;this.dispose()}this.viewport.set(0,0,Y,tt),this.scissor.set(0,0,Y,tt)}clone(){return new this.constructor().copy(this)}copy(Y){this.width=Y.width,this.height=Y.height,this.depth=Y.depth,this.scissor.copy(Y.scissor),this.scissorTest=Y.scissorTest,this.viewport.copy(Y.viewport),this.textures.length=0;for(let tt=0,et=Y.textures.length;tt<et;tt++){this.textures[tt]=Y.textures[tt].clone(),this.textures[tt].isRenderTargetTexture=!0,this.textures[tt].renderTarget=this;let nt=Object.assign({},Y.textures[tt].image);this.textures[tt].source=new ir(nt)}if(this.depthBuffer=Y.depthBuffer,this.stencilBuffer=Y.stencilBuffer,this.resolveColorBuffer=Y.resolveColorBuffer,this.resolveDepthBuffer=Y.resolveDepthBuffer,this.resolveStencilBuffer=Y.resolveStencilBuffer,this.storeMultisampledColorBuffer=Y.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=Y.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=Y.storeMultisampledStencilBuffer,Y.depthTexture!==null)if(Y.depthTexture.renderTarget===Y){let tt=Y.depthTexture.clone();tt.renderTarget=null,this.depthTexture=tt}else this.depthTexture=Y.depthTexture;else this.depthTexture=null;return this.samples=Y.samples,this.multiview=Y.multiview,this.useArrayDepthTexture=Y.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _ extends zo{constructor(Y=1,tt=1,et={}){super(Y,tt,et);this.isWebGLRenderTarget=!0}}class Kr extends h{constructor(Y=null,tt=1,et=1,nt=1){super(null);this.isDataArrayTexture=!0,this.image={data:Y,width:tt,height:et,depth:nt},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(Y){return super.copy(Y),this.wrapR=Y.wrapR,this}addLayerUpdate(Y){this.layerUpdates.add(Y)}clearLayerUpdates(){this.layerUpdates.clear()}}class Go extends h{constructor(Y=null,tt=1,et=1,nt=1){super(null);this.isData3DTexture=!0,this.image={data:Y,width:tt,height:et,depth:nt},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(Y){return super.copy(Y),this.wrapR=Y.wrapR,this}}class i{static{this.prototype.isMatrix4=!0}constructor(Y,tt,et,nt,it,st,rt,at,ot,lt,ct,ut,ht,ft,xt,St){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],Y!==void 0)this.set(Y,tt,et,nt,it,st,rt,at,ot,lt,ct,ut,ht,ft,xt,St)}set(Y,tt,et,nt,it,st,rt,at,ot,lt,ct,ut,ht,ft,xt,St){let dt=this.elements;return dt[0]=Y,dt[4]=tt,dt[8]=et,dt[12]=nt,dt[1]=it,dt[5]=st,dt[9]=rt,dt[13]=at,dt[2]=ot,dt[6]=lt,dt[10]=ct,dt[14]=ut,dt[3]=ht,dt[7]=ft,dt[11]=xt,dt[15]=St,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(Y){let tt=this.elements,et=Y.elements;return tt[0]=et[0],tt[1]=et[1],tt[2]=et[2],tt[3]=et[3],tt[4]=et[4],tt[5]=et[5],tt[6]=et[6],tt[7]=et[7],tt[8]=et[8],tt[9]=et[9],tt[10]=et[10],tt[11]=et[11],tt[12]=et[12],tt[13]=et[13],tt[14]=et[14],tt[15]=et[15],this}copyPosition(Y){let tt=this.elements,et=Y.elements;return tt[12]=et[12],tt[13]=et[13],tt[14]=et[14],this}setFromMatrix3(Y){let tt=Y.elements;return this.set(tt[0],tt[3],tt[6],0,tt[1],tt[4],tt[7],0,tt[2],tt[5],tt[8],0,0,0,0,1),this}extractBasis(Y,tt,et){if(this.determinantAffine()===0)return Y.set(1,0,0),tt.set(0,1,0),et.set(0,0,1),this;return Y.setFromMatrixColumn(this,0),tt.setFromMatrixColumn(this,1),et.setFromMatrixColumn(this,2),this}makeBasis(Y,tt,et){return this.set(Y.x,tt.x,et.x,0,Y.y,tt.y,et.y,0,Y.z,tt.z,et.z,0,0,0,0,1),this}extractRotation(Y){if(Y.determinantAffine()===0)return this.identity();let tt=this.elements,et=Y.elements,nt=1/_s.setFromMatrixColumn(Y,0).length(),it=1/_s.setFromMatrixColumn(Y,1).length(),st=1/_s.setFromMatrixColumn(Y,2).length();return tt[0]=et[0]*nt,tt[1]=et[1]*nt,tt[2]=et[2]*nt,tt[3]=0,tt[4]=et[4]*it,tt[5]=et[5]*it,tt[6]=et[6]*it,tt[7]=0,tt[8]=et[8]*st,tt[9]=et[9]*st,tt[10]=et[10]*st,tt[11]=0,tt[12]=0,tt[13]=0,tt[14]=0,tt[15]=1,this}makeRotationFromEuler(Y){let tt=this.elements,{x:et,y:nt,z:it}=Y,st=Math.cos(et),rt=Math.sin(et),at=Math.cos(nt),ot=Math.sin(nt),lt=Math.cos(it),ct=Math.sin(it);if(Y.order==="XYZ"){let ut=st*lt,ht=st*ct,ft=rt*lt,xt=rt*ct;tt[0]=at*lt,tt[4]=-at*ct,tt[8]=ot,tt[1]=ht+ft*ot,tt[5]=ut-xt*ot,tt[9]=-rt*at,tt[2]=xt-ut*ot,tt[6]=ft+ht*ot,tt[10]=st*at}else if(Y.order==="YXZ"){let ut=at*lt,ht=at*ct,ft=ot*lt,xt=ot*ct;tt[0]=ut+xt*rt,tt[4]=ft*rt-ht,tt[8]=st*ot,tt[1]=st*ct,tt[5]=st*lt,tt[9]=-rt,tt[2]=ht*rt-ft,tt[6]=xt+ut*rt,tt[10]=st*at}else if(Y.order==="ZXY"){let ut=at*lt,ht=at*ct,ft=ot*lt,xt=ot*ct;tt[0]=ut-xt*rt,tt[4]=-st*ct,tt[8]=ft+ht*rt,tt[1]=ht+ft*rt,tt[5]=st*lt,tt[9]=xt-ut*rt,tt[2]=-st*ot,tt[6]=rt,tt[10]=st*at}else if(Y.order==="ZYX"){let ut=st*lt,ht=st*ct,ft=rt*lt,xt=rt*ct;tt[0]=at*lt,tt[4]=ft*ot-ht,tt[8]=ut*ot+xt,tt[1]=at*ct,tt[5]=xt*ot+ut,tt[9]=ht*ot-ft,tt[2]=-ot,tt[6]=rt*at,tt[10]=st*at}else if(Y.order==="YZX"){let ut=st*at,ht=st*ot,ft=rt*at,xt=rt*ot;tt[0]=at*lt,tt[4]=xt-ut*ct,tt[8]=ft*ct+ht,tt[1]=ct,tt[5]=st*lt,tt[9]=-rt*lt,tt[2]=-ot*lt,tt[6]=ht*ct+ft,tt[10]=ut-xt*ct}else if(Y.order==="XZY"){let ut=st*at,ht=st*ot,ft=rt*at,xt=rt*ot;tt[0]=at*lt,tt[4]=-ct,tt[8]=ot*lt,tt[1]=ut*ct+xt,tt[5]=st*lt,tt[9]=ht*ct-ft,tt[2]=ft*ct-ht,tt[6]=rt*lt,tt[10]=xt*ct+ut}return tt[3]=0,tt[7]=0,tt[11]=0,tt[12]=0,tt[13]=0,tt[14]=0,tt[15]=1,this}makeRotationFromQuaternion(Y){return this.compose(mu,Y,gu)}lookAt(Y,tt,et){let nt=this.elements;if(ui.subVectors(Y,tt),ui.lengthSq()===0)ui.z=1;if(ui.normalize(),Vi.crossVectors(et,ui),Vi.lengthSq()===0){if(Math.abs(et.z)===1)ui.x+=0.0001;else ui.z+=0.0001;ui.normalize(),Vi.crossVectors(et,ui)}return Vi.normalize(),mr.crossVectors(ui,Vi),nt[0]=Vi.x,nt[4]=mr.x,nt[8]=ui.x,nt[1]=Vi.y,nt[5]=mr.y,nt[9]=ui.y,nt[2]=Vi.z,nt[6]=mr.z,nt[10]=ui.z,this}multiply(Y){return this.multiplyMatrices(this,Y)}premultiply(Y){return this.multiplyMatrices(Y,this)}multiplyMatrices(Y,tt){let et=Y.elements,nt=tt.elements,it=this.elements,st=et[0],rt=et[4],at=et[8],ot=et[12],lt=et[1],ct=et[5],ut=et[9],ht=et[13],ft=et[2],xt=et[6],St=et[10],dt=et[14],pt=et[3],bt=et[7],Tt=et[11],Mt=et[15],Et=nt[0],Ct=nt[4],mt=nt[8],vt=nt[12],Lt=nt[1],Gt=nt[5],Pt=nt[9],Bt=nt[13],$t=nt[2],wt=nt[6],Xt=nt[10],Yt=nt[14],Ft=nt[3],Ve=nt[7],Ht=nt[11],Jt=nt[15];return it[0]=st*Et+rt*Lt+at*$t+ot*Ft,it[4]=st*Ct+rt*Gt+at*wt+ot*Ve,it[8]=st*mt+rt*Pt+at*Xt+ot*Ht,it[12]=st*vt+rt*Bt+at*Yt+ot*Jt,it[1]=lt*Et+ct*Lt+ut*$t+ht*Ft,it[5]=lt*Ct+ct*Gt+ut*wt+ht*Ve,it[9]=lt*mt+ct*Pt+ut*Xt+ht*Ht,it[13]=lt*vt+ct*Bt+ut*Yt+ht*Jt,it[2]=ft*Et+xt*Lt+St*$t+dt*Ft,it[6]=ft*Ct+xt*Gt+St*wt+dt*Ve,it[10]=ft*mt+xt*Pt+St*Xt+dt*Ht,it[14]=ft*vt+xt*Bt+St*Yt+dt*Jt,it[3]=pt*Et+bt*Lt+Tt*$t+Mt*Ft,it[7]=pt*Ct+bt*Gt+Tt*wt+Mt*Ve,it[11]=pt*mt+bt*Pt+Tt*Xt+Mt*Ht,it[15]=pt*vt+bt*Bt+Tt*Yt+Mt*Jt,this}multiplyScalar(Y){let tt=this.elements;return tt[0]*=Y,tt[4]*=Y,tt[8]*=Y,tt[12]*=Y,tt[1]*=Y,tt[5]*=Y,tt[9]*=Y,tt[13]*=Y,tt[2]*=Y,tt[6]*=Y,tt[10]*=Y,tt[14]*=Y,tt[3]*=Y,tt[7]*=Y,tt[11]*=Y,tt[15]*=Y,this}determinant(){let Y=this.elements,tt=Y[0],et=Y[4],nt=Y[8],it=Y[12],st=Y[1],rt=Y[5],at=Y[9],ot=Y[13],lt=Y[2],ct=Y[6],ut=Y[10],ht=Y[14],ft=Y[3],xt=Y[7],St=Y[11],dt=Y[15],pt=at*ht-ot*ut,bt=rt*ht-ot*ct,Tt=rt*ut-at*ct,Mt=st*ht-ot*lt,Et=st*ut-at*lt,Ct=st*ct-rt*lt;return tt*(xt*pt-St*bt+dt*Tt)-et*(ft*pt-St*Mt+dt*Et)+nt*(ft*bt-xt*Mt+dt*Ct)-it*(ft*Tt-xt*Et+St*Ct)}determinantAffine(){let Y=this.elements,tt=Y[0],et=Y[4],nt=Y[8],it=Y[1],st=Y[5],rt=Y[9],at=Y[2],ot=Y[6],lt=Y[10];return tt*(st*lt-rt*ot)-et*(it*lt-rt*at)+nt*(it*ot-st*at)}transpose(){let Y=this.elements,tt;return tt=Y[1],Y[1]=Y[4],Y[4]=tt,tt=Y[2],Y[2]=Y[8],Y[8]=tt,tt=Y[6],Y[6]=Y[9],Y[9]=tt,tt=Y[3],Y[3]=Y[12],Y[12]=tt,tt=Y[7],Y[7]=Y[13],Y[13]=tt,tt=Y[11],Y[11]=Y[14],Y[14]=tt,this}setPosition(Y,tt,et){let nt=this.elements;if(Y.isVector3)nt[12]=Y.x,nt[13]=Y.y,nt[14]=Y.z;else nt[12]=Y,nt[13]=tt,nt[14]=et;return this}invert(){let Y=this.elements,tt=Y[0],et=Y[1],nt=Y[2],it=Y[3],st=Y[4],rt=Y[5],at=Y[6],ot=Y[7],lt=Y[8],ct=Y[9],ut=Y[10],ht=Y[11],ft=Y[12],xt=Y[13],St=Y[14],dt=Y[15],pt=tt*rt-et*st,bt=tt*at-nt*st,Tt=tt*ot-it*st,Mt=et*at-nt*rt,Et=et*ot-it*rt,Ct=nt*ot-it*at,mt=lt*xt-ct*ft,vt=lt*St-ut*ft,Lt=lt*dt-ht*ft,Gt=ct*St-ut*xt,Pt=ct*dt-ht*xt,Bt=ut*dt-ht*St,$t=pt*Bt-bt*Pt+Tt*Gt+Mt*Lt-Et*vt+Ct*mt;if($t===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let wt=1/$t;return Y[0]=(rt*Bt-at*Pt+ot*Gt)*wt,Y[1]=(nt*Pt-et*Bt-it*Gt)*wt,Y[2]=(xt*Ct-St*Et+dt*Mt)*wt,Y[3]=(ut*Et-ct*Ct-ht*Mt)*wt,Y[4]=(at*Lt-st*Bt-ot*vt)*wt,Y[5]=(tt*Bt-nt*Lt+it*vt)*wt,Y[6]=(St*Tt-ft*Ct-dt*bt)*wt,Y[7]=(lt*Ct-ut*Tt+ht*bt)*wt,Y[8]=(st*Pt-rt*Lt+ot*mt)*wt,Y[9]=(et*Lt-tt*Pt-it*mt)*wt,Y[10]=(ft*Et-xt*Tt+dt*pt)*wt,Y[11]=(ct*Tt-lt*Et-ht*pt)*wt,Y[12]=(rt*vt-st*Gt-at*mt)*wt,Y[13]=(tt*Gt-et*vt+nt*mt)*wt,Y[14]=(xt*bt-ft*Mt-St*pt)*wt,Y[15]=(lt*Mt-ct*bt+ut*pt)*wt,this}scale(Y){let tt=this.elements,{x:et,y:nt,z:it}=Y;return tt[0]*=et,tt[4]*=nt,tt[8]*=it,tt[1]*=et,tt[5]*=nt,tt[9]*=it,tt[2]*=et,tt[6]*=nt,tt[10]*=it,tt[3]*=et,tt[7]*=nt,tt[11]*=it,this}getMaxScaleOnAxis(){let Y=this.elements,tt=Y[0]*Y[0]+Y[1]*Y[1]+Y[2]*Y[2],et=Y[4]*Y[4]+Y[5]*Y[5]+Y[6]*Y[6],nt=Y[8]*Y[8]+Y[9]*Y[9]+Y[10]*Y[10];return Math.sqrt(Math.max(tt,et,nt))}makeTranslation(Y,tt,et){if(Y.isVector3)this.set(1,0,0,Y.x,0,1,0,Y.y,0,0,1,Y.z,0,0,0,1);else this.set(1,0,0,Y,0,1,0,tt,0,0,1,et,0,0,0,1);return this}makeRotationX(Y){let tt=Math.cos(Y),et=Math.sin(Y);return this.set(1,0,0,0,0,tt,-et,0,0,et,tt,0,0,0,0,1),this}makeRotationY(Y){let tt=Math.cos(Y),et=Math.sin(Y);return this.set(tt,0,et,0,0,1,0,0,-et,0,tt,0,0,0,0,1),this}makeRotationZ(Y){let tt=Math.cos(Y),et=Math.sin(Y);return this.set(tt,-et,0,0,et,tt,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(Y,tt){let et=Math.cos(tt),nt=Math.sin(tt),it=1-et,{x:st,y:rt,z:at}=Y,ot=it*st,lt=it*rt;return this.set(ot*st+et,ot*rt-nt*at,ot*at+nt*rt,0,ot*rt+nt*at,lt*rt+et,lt*at-nt*st,0,ot*at-nt*rt,lt*at+nt*st,it*at*at+et,0,0,0,0,1),this}makeScale(Y,tt,et){return this.set(Y,0,0,0,0,tt,0,0,0,0,et,0,0,0,0,1),this}makeShear(Y,tt,et,nt,it,st){return this.set(1,et,it,0,Y,1,st,0,tt,nt,1,0,0,0,0,1),this}compose(Y,tt,et){let nt=this.elements,{_x:it,_y:st,_z:rt,_w:at}=tt,ot=it+it,lt=st+st,ct=rt+rt,ut=it*ot,ht=it*lt,ft=it*ct,xt=st*lt,St=st*ct,dt=rt*ct,pt=at*ot,bt=at*lt,Tt=at*ct,{x:Mt,y:Et,z:Ct}=et;return nt[0]=(1-(xt+dt))*Mt,nt[1]=(ht+Tt)*Mt,nt[2]=(ft-bt)*Mt,nt[3]=0,nt[4]=(ht-Tt)*Et,nt[5]=(1-(ut+dt))*Et,nt[6]=(St+pt)*Et,nt[7]=0,nt[8]=(ft+bt)*Ct,nt[9]=(St-pt)*Ct,nt[10]=(1-(ut+xt))*Ct,nt[11]=0,nt[12]=Y.x,nt[13]=Y.y,nt[14]=Y.z,nt[15]=1,this}decompose(Y,tt,et){let nt=this.elements;Y.x=nt[12],Y.y=nt[13],Y.z=nt[14];let it=this.determinantAffine();if(it===0)return et.set(1,1,1),tt.identity(),this;let st=_s.set(nt[0],nt[1],nt[2]).length(),rt=_s.set(nt[4],nt[5],nt[6]).length(),at=_s.set(nt[8],nt[9],nt[10]).length();if(it<0)st=-st;vi.copy(this);let ot=1/st,lt=1/rt,ct=1/at;return vi.elements[0]*=ot,vi.elements[1]*=ot,vi.elements[2]*=ot,vi.elements[4]*=lt,vi.elements[5]*=lt,vi.elements[6]*=lt,vi.elements[8]*=ct,vi.elements[9]*=ct,vi.elements[10]*=ct,tt.setFromRotationMatrix(vi),et.x=st,et.y=rt,et.z=at,this}makePerspective(Y,tt,et,nt,it,st,rt=2000,at=!1){let ot=this.elements,lt=2*it/(tt-Y),ct=2*it/(et-nt),ut=(tt+Y)/(tt-Y),ht=(et+nt)/(et-nt),ft,xt;if(at)ft=it/(st-it),xt=st*it/(st-it);else if(rt===2000)ft=-(st+it)/(st-it),xt=-2*st*it/(st-it);else if(rt===2001)ft=-st/(st-it),xt=-st*it/(st-it);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+rt);return ot[0]=lt,ot[4]=0,ot[8]=ut,ot[12]=0,ot[1]=0,ot[5]=ct,ot[9]=ht,ot[13]=0,ot[2]=0,ot[6]=0,ot[10]=ft,ot[14]=xt,ot[3]=0,ot[7]=0,ot[11]=-1,ot[15]=0,this}makeOrthographic(Y,tt,et,nt,it,st,rt=2000,at=!1){let ot=this.elements,lt=2/(tt-Y),ct=2/(et-nt),ut=-(tt+Y)/(tt-Y),ht=-(et+nt)/(et-nt),ft,xt;if(at)ft=1/(st-it),xt=st/(st-it);else if(rt===2000)ft=-2/(st-it),xt=-(st+it)/(st-it);else if(rt===2001)ft=-1/(st-it),xt=-it/(st-it);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+rt);return ot[0]=lt,ot[4]=0,ot[8]=0,ot[12]=ut,ot[1]=0,ot[5]=ct,ot[9]=0,ot[13]=ht,ot[2]=0,ot[6]=0,ot[10]=ft,ot[14]=xt,ot[3]=0,ot[7]=0,ot[11]=0,ot[15]=1,this}equals(Y){let tt=this.elements,et=Y.elements;for(let nt=0;nt<16;nt++)if(tt[nt]!==et[nt])return!1;return!0}fromArray(Y,tt=0){for(let et=0;et<16;et++)this.elements[et]=Y[et+tt];return this}toArray(Y=[],tt=0){let et=this.elements;return Y[tt]=et[0],Y[tt+1]=et[1],Y[tt+2]=et[2],Y[tt+3]=et[3],Y[tt+4]=et[4],Y[tt+5]=et[5],Y[tt+6]=et[6],Y[tt+7]=et[7],Y[tt+8]=et[8],Y[tt+9]=et[9],Y[tt+10]=et[10],Y[tt+11]=et[11],Y[tt+12]=et[12],Y[tt+13]=et[13],Y[tt+14]=et[14],Y[tt+15]=et[15],Y}}var _s=new e,vi=new i,mu=new e(0,0,0),gu=new e(1,1,1),Vi=new e,mr=new e,ui=new e,vl=new i,yl=new I;class Ai{constructor(Y=0,tt=0,et=0,nt=Ai.DEFAULT_ORDER){this.isEuler=!0,this._x=Y,this._y=tt,this._z=et,this._order=nt}get x(){return this._x}set x(Y){this._x=Y,this._onChangeCallback()}get y(){return this._y}set y(Y){this._y=Y,this._onChangeCallback()}get z(){return this._z}set z(Y){this._z=Y,this._onChangeCallback()}get order(){return this._order}set order(Y){this._order=Y,this._onChangeCallback()}set(Y,tt,et,nt=this._order){return this._x=Y,this._y=tt,this._z=et,this._order=nt,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(Y){return this._x=Y._x,this._y=Y._y,this._z=Y._z,this._order=Y._order,this._onChangeCallback(),this}setFromRotationMatrix(Y,tt=this._order,et=!0){let nt=Y.elements,it=nt[0],st=nt[4],rt=nt[8],at=nt[1],ot=nt[5],lt=nt[9],ct=nt[2],ut=nt[6],ht=nt[10];switch(tt){case"XYZ":if(this._y=Math.asin(Tn(rt,-1,1)),Math.abs(rt)<0.9999999)this._x=Math.atan2(-lt,ht),this._z=Math.atan2(-st,it);else this._x=Math.atan2(ut,ot),this._z=0;break;case"YXZ":if(this._x=Math.asin(-Tn(lt,-1,1)),Math.abs(lt)<0.9999999)this._y=Math.atan2(rt,ht),this._z=Math.atan2(at,ot);else this._y=Math.atan2(-ct,it),this._z=0;break;case"ZXY":if(this._x=Math.asin(Tn(ut,-1,1)),Math.abs(ut)<0.9999999)this._y=Math.atan2(-ct,ht),this._z=Math.atan2(-st,ot);else this._y=0,this._z=Math.atan2(at,it);break;case"ZYX":if(this._y=Math.asin(-Tn(ct,-1,1)),Math.abs(ct)<0.9999999)this._x=Math.atan2(ut,ht),this._z=Math.atan2(at,it);else this._x=0,this._z=Math.atan2(-st,ot);break;case"YZX":if(this._z=Math.asin(Tn(at,-1,1)),Math.abs(at)<0.9999999)this._x=Math.atan2(-lt,ot),this._y=Math.atan2(-ct,it);else this._x=0,this._y=Math.atan2(rt,ht);break;case"XZY":if(this._z=Math.asin(-Tn(st,-1,1)),Math.abs(st)<0.9999999)this._x=Math.atan2(ut,ot),this._y=Math.atan2(rt,it);else this._x=Math.atan2(-lt,ht),this._y=0;break;default:hn("Euler: .setFromRotationMatrix() encountered an unknown order: "+tt)}if(this._order=tt,et===!0)this._onChangeCallback();return this}setFromQuaternion(Y,tt,et){return vl.makeRotationFromQuaternion(Y),this.setFromRotationMatrix(vl,tt,et)}setFromVector3(Y,tt=this._order){return this.set(Y.x,Y.y,Y.z,tt)}reorder(Y){return yl.setFromEuler(this),this.setFromQuaternion(yl,Y)}equals(Y){return Y._x===this._x&&Y._y===this._y&&Y._z===this._z&&Y._order===this._order}fromArray(Y){if(this._x=Y[0],this._y=Y[1],this._z=Y[2],Y[3]!==void 0)this._order=Y[3];return this._onChangeCallback(),this}toArray(Y=[],tt=0){return Y[tt]=this._x,Y[tt+1]=this._y,Y[tt+2]=this._z,Y[tt+3]=this._order,Y}_onChange(Y){return this._onChangeCallback=Y,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ai.DEFAULT_ORDER="XYZ";class Qr{constructor(){this.mask=1}set(Y){this.mask=(1<<Y|0)>>>0}enable(Y){this.mask|=1<<Y|0}enableAll(){this.mask=-1}toggle(Y){this.mask^=1<<Y|0}disable(Y){this.mask&=~(1<<Y|0)}disableAll(){this.mask=0}test(Y){return(this.mask&Y.mask)!==0}isEnabled(Y){return(this.mask&(1<<Y|0))!==0}}var _u=0,Sl=new e,xs=new I,Ni=new i,gr=new e,ks=new e,xu=new e,vu=new I,Ml=new e(1,0,0),bl=new e(0,1,0),Tl=new e(0,0,1),El={type:"added"},yu={type:"removed"},vs={type:"childadded",child:null},va={type:"childremoved",child:null};class l extends Hi{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:_u++}),this.uuid=Ri(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=l.DEFAULT_UP.clone();let Y=new e,tt=new Ai,et=new I,nt=new e(1,1,1);function it(){et.setFromEuler(tt,!1)}function st(){tt.setFromQuaternion(et,void 0,!1)}tt._onChange(it),et._onChange(st),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:Y},rotation:{configurable:!0,enumerable:!0,value:tt},quaternion:{configurable:!0,enumerable:!0,value:et},scale:{configurable:!0,enumerable:!0,value:nt},modelViewMatrix:{value:new i},normalMatrix:{value:new _n}}),this.matrix=new i,this.matrixWorld=new i,this.matrixAutoUpdate=l.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=l.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(Y){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrix.premultiply(Y),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null)this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(Y){return this.quaternion.premultiply(Y),this}setRotationFromAxisAngle(Y,tt){this.quaternion.setFromAxisAngle(Y,tt)}setRotationFromEuler(Y){this.quaternion.setFromEuler(Y,!0)}setRotationFromMatrix(Y){this.quaternion.setFromRotationMatrix(Y)}setRotationFromQuaternion(Y){this.quaternion.copy(Y)}rotateOnAxis(Y,tt){return xs.setFromAxisAngle(Y,tt),this.quaternion.multiply(xs),this}rotateOnWorldAxis(Y,tt){return xs.setFromAxisAngle(Y,tt),this.quaternion.premultiply(xs),this}rotateX(Y){return this.rotateOnAxis(Ml,Y)}rotateY(Y){return this.rotateOnAxis(bl,Y)}rotateZ(Y){return this.rotateOnAxis(Tl,Y)}translateOnAxis(Y,tt){return Sl.copy(Y).applyQuaternion(this.quaternion),this.position.add(Sl.multiplyScalar(tt)),this}translateX(Y){return this.translateOnAxis(Ml,Y)}translateY(Y){return this.translateOnAxis(bl,Y)}translateZ(Y){return this.translateOnAxis(Tl,Y)}localToWorld(Y){return this.updateWorldMatrix(!0,!1),Y.applyMatrix4(this.matrixWorld)}worldToLocal(Y){return this.updateWorldMatrix(!0,!1),Y.applyMatrix4(Ni.copy(this.matrixWorld).invert())}lookAt(Y,tt,et){if(Y.isVector3)gr.copy(Y);else gr.set(Y,tt,et);let nt=this.parent;if(this.updateWorldMatrix(!0,!1),ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)Ni.lookAt(ks,gr,this.up);else Ni.lookAt(gr,ks,this.up);if(this.quaternion.setFromRotationMatrix(Ni),nt)Ni.extractRotation(nt.matrixWorld),xs.setFromRotationMatrix(Ni),this.quaternion.premultiply(xs.invert())}add(Y){if(arguments.length>1){for(let tt=0;tt<arguments.length;tt++)this.add(arguments[tt]);return this}if(Y===this)return gn("Object3D.add: object can't be added as a child of itself.",Y),this;if(Y&&Y.isObject3D)Y.removeFromParent(),Y.parent=this,this.children.push(Y),Y.dispatchEvent(El),vs.child=Y,this.dispatchEvent(vs),vs.child=null;else gn("Object3D.add: object not an instance of THREE.Object3D.",Y);return this}remove(Y){if(arguments.length>1){for(let et=0;et<arguments.length;et++)this.remove(arguments[et]);return this}let tt=this.children.indexOf(Y);if(tt!==-1)Y.parent=null,this.children.splice(tt,1),Y.dispatchEvent(yu),va.child=Y,this.dispatchEvent(va),va.child=null;return this}removeFromParent(){let Y=this.parent;if(Y!==null)Y.remove(this);return this}clear(){return this.remove(...this.children)}attach(Y){if(this.updateWorldMatrix(!0,!1),Ni.copy(this.matrixWorld).invert(),Y.parent!==null)Y.parent.updateWorldMatrix(!0,!1),Ni.multiply(Y.parent.matrixWorld);return Y.applyMatrix4(Ni),Y.removeFromParent(),Y.parent=this,this.children.push(Y),Y.updateWorldMatrix(!1,!0),Y.dispatchEvent(El),vs.child=Y,this.dispatchEvent(vs),vs.child=null,this}getObjectById(Y){return this.getObjectByProperty("id",Y)}getObjectByName(Y){return this.getObjectByProperty("name",Y)}getObjectByProperty(Y,tt){if(this[Y]===tt)return this;for(let et=0,nt=this.children.length;et<nt;et++){let st=this.children[et].getObjectByProperty(Y,tt);if(st!==void 0)return st}return}getObjectsByProperty(Y,tt,et=[]){if(this[Y]===tt)et.push(this);let nt=this.children;for(let it=0,st=nt.length;it<st;it++)nt[it].getObjectsByProperty(Y,tt,et);return et}getWorldPosition(Y){return this.updateWorldMatrix(!0,!1),Y.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(Y){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ks,Y,xu),Y}getWorldScale(Y){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ks,vu,Y),Y}getWorldDirection(Y){this.updateWorldMatrix(!0,!1);let tt=this.matrixWorld.elements;return Y.set(tt[8],tt[9],tt[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(Y){Y(this);let tt=this.children;for(let et=0,nt=tt.length;et<nt;et++)tt[et].traverse(Y)}traverseVisible(Y){if(this.visible===!1)return;Y(this);let tt=this.children;for(let et=0,nt=tt.length;et<nt;et++)tt[et].traverseVisible(Y)}traverseAncestors(Y){let tt=this.parent;if(tt!==null)Y(tt),tt.traverseAncestors(Y)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let Y=this.pivot;if(Y!==null){let{x:tt,y:et,z:nt}=Y,it=this.matrix.elements;it[12]+=tt-it[0]*tt-it[4]*et-it[8]*nt,it[13]+=et-it[1]*tt-it[5]*et-it[9]*nt,it[14]+=nt-it[2]*tt-it[6]*et-it[10]*nt}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(Y){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||Y){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,Y=!0}let tt=this.children;for(let et=0,nt=tt.length;et<nt;et++)tt[et].updateMatrixWorld(Y)}updateWorldMatrix(Y,tt,et=!1){let nt=this.parent;if(Y===!0&&nt!==null)nt.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||et){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,et=!0}if(tt===!0){let it=this.children;for(let st=0,rt=it.length;st<rt;st++)it[st].updateWorldMatrix(!1,!0,et)}}toJSON(Y){let tt=Y===void 0||typeof Y==="string",et={};if(tt)Y={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},et.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let nt={};if(nt.uuid=this.uuid,nt.type=this.type,nt.name=this.name,nt.castShadow=this.castShadow,nt.receiveShadow=this.receiveShadow,nt.visible=this.visible,nt.frustumCulled=this.frustumCulled,nt.renderOrder=this.renderOrder,nt.static=this.static,nt.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0)nt.userData=this.userData;if(nt.layers=this.layers.mask,nt.matrix=this.matrix.toArray(),nt.up=this.up.toArray(),this.pivot!==null)nt.pivot=this.pivot.toArray();if(this.morphTargetDictionary!==void 0)nt.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)nt.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(nt.type="InstancedMesh",nt.count=this.count,nt.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)nt.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(nt.type="BatchedMesh",nt.perObjectFrustumCulled=this.perObjectFrustumCulled,nt.sortObjects=this.sortObjects,nt.drawRanges=this._drawRanges,nt.reservedRanges=this._reservedRanges,nt.geometryInfo=this._geometryInfo.map((rt)=>({...rt,boundingBox:rt.boundingBox?rt.boundingBox.toJSON():void 0,boundingSphere:rt.boundingSphere?rt.boundingSphere.toJSON():void 0})),nt.instanceInfo=this._instanceInfo.map((rt)=>({...rt})),nt.availableInstanceIds=this._availableInstanceIds.slice(),nt.availableGeometryIds=this._availableGeometryIds.slice(),nt.nextIndexStart=this._nextIndexStart,nt.nextVertexStart=this._nextVertexStart,nt.geometryCount=this._geometryCount,nt.maxInstanceCount=this._maxInstanceCount,nt.maxVertexCount=this._maxVertexCount,nt.maxIndexCount=this._maxIndexCount,nt.geometryInitialized=this._geometryInitialized,nt.matricesTexture=this._matricesTexture.toJSON(Y),nt.indirectTexture=this._indirectTexture.toJSON(Y),this._colorsTexture!==null)nt.colorsTexture=this._colorsTexture.toJSON(Y);if(this.boundingSphere!==null)nt.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)nt.boundingBox=this.boundingBox.toJSON()}function it(rt,at){if(rt[at.uuid]===void 0)rt[at.uuid]=at.toJSON(Y);return at.uuid}if(this.isScene){if(this.background){if(this.background.isColor)nt.background=this.background.toJSON();else if(this.background.isTexture)nt.background=this.background.toJSON(Y).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)nt.environment=this.environment.toJSON(Y).uuid}else if(this.isMesh||this.isLine||this.isPoints){nt.geometry=it(Y.geometries,this.geometry);let rt=this.geometry.parameters;if(rt!==void 0&&rt.shapes!==void 0){let at=rt.shapes;if(Array.isArray(at))for(let ot=0,lt=at.length;ot<lt;ot++){let ct=at[ot];it(Y.shapes,ct)}else it(Y.shapes,at)}}if(this.isSkinnedMesh){if(nt.bindMode=this.bindMode,nt.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)it(Y.skeletons,this.skeleton),nt.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let rt=[];for(let at=0,ot=this.material.length;at<ot;at++)rt.push(it(Y.materials,this.material[at]));nt.material=rt}else nt.material=it(Y.materials,this.material);if(this.children.length>0){nt.children=[];for(let rt=0;rt<this.children.length;rt++)nt.children.push(this.children[rt].toJSON(Y).object)}if(this.animations.length>0){nt.animations=[];for(let rt=0;rt<this.animations.length;rt++){let at=this.animations[rt];nt.animations.push(it(Y.animations,at))}}if(tt){let rt=st(Y.geometries),at=st(Y.materials),ot=st(Y.textures),lt=st(Y.images),ct=st(Y.shapes),ut=st(Y.skeletons),ht=st(Y.animations),ft=st(Y.nodes);if(rt.length>0)et.geometries=rt;if(at.length>0)et.materials=at;if(ot.length>0)et.textures=ot;if(lt.length>0)et.images=lt;if(ct.length>0)et.shapes=ct;if(ut.length>0)et.skeletons=ut;if(ht.length>0)et.animations=ht;if(ft.length>0)et.nodes=ft}return et.object=nt,et;function st(rt){let at=[];for(let ot in rt){let lt=rt[ot];delete lt.metadata,at.push(lt)}return at}}clone(Y){return new this.constructor().copy(this,Y)}copy(Y,tt=!0){if(this.name=Y.name,this.up.copy(Y.up),this.position.copy(Y.position),this.rotation.order=Y.rotation.order,this.quaternion.copy(Y.quaternion),this.scale.copy(Y.scale),this.pivot=Y.pivot!==null?Y.pivot.clone():null,this.matrix.copy(Y.matrix),this.matrixWorld.copy(Y.matrixWorld),this.matrixAutoUpdate=Y.matrixAutoUpdate,this.matrixWorldAutoUpdate=Y.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=Y.matrixWorldNeedsUpdate,this.layers.mask=Y.layers.mask,this.visible=Y.visible,this.castShadow=Y.castShadow,this.receiveShadow=Y.receiveShadow,this.frustumCulled=Y.frustumCulled,this.renderOrder=Y.renderOrder,this.static=Y.static,this.animations=Y.animations.slice(),this.userData=JSON.parse(JSON.stringify(Y.userData)),tt===!0)for(let et=0;et<Y.children.length;et++){let nt=Y.children[et];this.add(nt.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}l.DEFAULT_UP=new e(0,1,0);l.DEFAULT_MATRIX_AUTO_UPDATE=!0;l.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class x extends l{constructor(){super();this.isGroup=!0,this.type="Group"}}var Su={type:"move"};class sr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new x,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new x,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new e,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new e;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new x,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new e,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new e,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(Y){if(this._targetRay!==null)this._targetRay.dispatchEvent(Y);if(this._grip!==null)this._grip.dispatchEvent(Y);if(this._hand!==null)this._hand.dispatchEvent(Y);return this}connect(Y){if(Y&&Y.hand){let tt=this._hand;if(tt)for(let et of Y.hand.values())this._getHandJoint(tt,et)}return this.dispatchEvent({type:"connected",data:Y}),this}disconnect(Y){if(this.dispatchEvent({type:"disconnected",data:Y}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(Y,tt,et){let nt=null,it=null,st=null,rt=this._targetRay,at=this._grip,ot=this._hand;if(Y&&tt.session.visibilityState!=="visible-blurred"){if(ot&&Y.hand){st=!0;for(let xt of Y.hand.values()){let St=tt.getJointPose(xt,et),dt=this._getHandJoint(ot,xt);if(St!==null)dt.matrix.fromArray(St.transform.matrix),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.matrixWorldNeedsUpdate=!0,dt.jointRadius=St.radius;dt.visible=St!==null}let lt=ot.joints["index-finger-tip"],ct=ot.joints["thumb-tip"],ut=lt.position.distanceTo(ct.position),ht=0.02,ft=0.005;if(ot.inputState.pinching&&ut>ht+ft)ot.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:Y.handedness,target:this});else if(!ot.inputState.pinching&&ut<=ht-ft)ot.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:Y.handedness,target:this})}else if(at!==null&&Y.gripSpace){if(it=tt.getPose(Y.gripSpace,et),it!==null){if(at.matrix.fromArray(it.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.matrixWorldNeedsUpdate=!0,it.linearVelocity)at.hasLinearVelocity=!0,at.linearVelocity.copy(it.linearVelocity);else at.hasLinearVelocity=!1;if(it.angularVelocity)at.hasAngularVelocity=!0,at.angularVelocity.copy(it.angularVelocity);else at.hasAngularVelocity=!1;if(at.eventsEnabled)at.dispatchEvent({type:"gripUpdated",data:Y,target:this})}}if(rt!==null){if(nt=tt.getPose(Y.targetRaySpace,et),nt===null&&it!==null)nt=it;if(nt!==null){if(rt.matrix.fromArray(nt.transform.matrix),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.matrixWorldNeedsUpdate=!0,nt.linearVelocity)rt.hasLinearVelocity=!0,rt.linearVelocity.copy(nt.linearVelocity);else rt.hasLinearVelocity=!1;if(nt.angularVelocity)rt.hasAngularVelocity=!0,rt.angularVelocity.copy(nt.angularVelocity);else rt.hasAngularVelocity=!1;this.dispatchEvent(Su)}}}if(rt!==null)rt.visible=nt!==null;if(at!==null)at.visible=it!==null;if(ot!==null)ot.visible=st!==null;return this}_getHandJoint(Y,tt){if(Y.joints[tt.jointName]===void 0){let et=new x;et.matrixAutoUpdate=!1,et.visible=!1,Y.joints[tt.jointName]=et,Y.add(et)}return Y.joints[tt.jointName]}}var $c={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xi={h:0,s:0,l:0},_r={h:0,s:0,l:0};function ya(Y,tt,et){if(et<0)et+=1;if(et>1)et-=1;if(et<0.16666666666666666)return Y+(tt-Y)*6*et;if(et<0.5)return tt;if(et<0.6666666666666666)return Y+(tt-Y)*6*(0.6666666666666666-et);return Y}class t{constructor(Y,tt,et){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(Y,tt,et)}set(Y,tt,et){if(tt===void 0&&et===void 0){let nt=Y;if(nt&&nt.isColor)this.copy(nt);else if(typeof nt==="number")this.setHex(nt);else if(typeof nt==="string")this.setStyle(nt)}else this.setRGB(Y,tt,et);return this}setScalar(Y){return this.r=Y,this.g=Y,this.b=Y,this}setHex(Y,tt="srgb"){return Y=Math.floor(Y),this.r=(Y>>16&255)/255,this.g=(Y>>8&255)/255,this.b=(Y&255)/255,s.colorSpaceToWorking(this,tt),this}setRGB(Y,tt,et,nt=s.workingColorSpace){return this.r=Y,this.g=tt,this.b=et,s.colorSpaceToWorking(this,nt),this}setHSL(Y,tt,et,nt=s.workingColorSpace){if(Y=Do(Y,1),tt=Tn(tt,0,1),et=Tn(et,0,1),tt===0)this.r=this.g=this.b=et;else{let it=et<=0.5?et*(1+tt):et+tt-et*tt,st=2*et-it;this.r=ya(st,it,Y+0.3333333333333333),this.g=ya(st,it,Y),this.b=ya(st,it,Y-0.3333333333333333)}return s.colorSpaceToWorking(this,nt),this}setStyle(Y,tt="srgb"){function et(it){if(it===void 0)return;if(parseFloat(it)<1)hn("Color: Alpha component of "+Y+" will be ignored.")}let nt;if(nt=/^(\w+)\(([^\)]*)\)/.exec(Y)){let it,st=nt[1],rt=nt[2];switch(st){case"rgb":case"rgba":if(it=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(rt))return et(it[4]),this.setRGB(Math.min(255,parseInt(it[1],10))/255,Math.min(255,parseInt(it[2],10))/255,Math.min(255,parseInt(it[3],10))/255,tt);if(it=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(rt))return et(it[4]),this.setRGB(Math.min(100,parseFloat(it[1]))/100,Math.min(100,parseFloat(it[2]))/100,Math.min(100,parseFloat(it[3]))/100,tt);break;case"hsl":case"hsla":if(it=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(rt))return et(it[4]),this.setHSL(parseFloat(it[1])/360,parseFloat(it[2])/100,parseFloat(it[3])/100,tt);break;default:hn("Color: Unknown color model "+Y)}}else if(nt=/^\#([A-Fa-f\d]+)$/.exec(Y)){let it=nt[1],st=it.length;if(st===3)return this.setRGB(parseInt(it.charAt(0),16)/15,parseInt(it.charAt(1),16)/15,parseInt(it.charAt(2),16)/15,tt);else if(st===6)return this.setHex(parseInt(it,16),tt);else hn("Color: Invalid hex color "+Y)}else if(Y&&Y.length>0)return this.setColorName(Y,tt);return this}setColorName(Y,tt="srgb"){let et=$c[Y.toLowerCase()];if(et!==void 0)this.setHex(et,tt);else hn("Color: Unknown color "+Y);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(Y){return this.r=Y.r,this.g=Y.g,this.b=Y.b,this}copySRGBToLinear(Y){return this.r=zi(Y.r),this.g=zi(Y.g),this.b=zi(Y.b),this}copyLinearToSRGB(Y){return this.r=Is(Y.r),this.g=Is(Y.g),this.b=Is(Y.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(Y="srgb"){return s.workingToColorSpace(ni.copy(this),Y),Math.round(Tn(ni.r*255,0,255))*65536+Math.round(Tn(ni.g*255,0,255))*256+Math.round(Tn(ni.b*255,0,255))}getHexString(Y="srgb"){return("000000"+this.getHex(Y).toString(16)).slice(-6)}getHSL(Y,tt=s.workingColorSpace){s.workingToColorSpace(ni.copy(this),tt);let{r:et,g:nt,b:it}=ni,st=Math.max(et,nt,it),rt=Math.min(et,nt,it),at,ot,lt=(rt+st)/2;if(rt===st)at=0,ot=0;else{let ct=st-rt;switch(ot=lt<=0.5?ct/(st+rt):ct/(2-st-rt),st){case et:at=(nt-it)/ct+(nt<it?6:0);break;case nt:at=(it-et)/ct+2;break;case it:at=(et-nt)/ct+4;break}at/=6}return Y.h=at,Y.s=ot,Y.l=lt,Y}getRGB(Y,tt=s.workingColorSpace){return s.workingToColorSpace(ni.copy(this),tt),Y.r=ni.r,Y.g=ni.g,Y.b=ni.b,Y}getStyle(Y="srgb"){s.workingToColorSpace(ni.copy(this),Y);let{r:tt,g:et,b:nt}=ni;if(Y!=="srgb")return`color(${Y} ${tt.toFixed(3)} ${et.toFixed(3)} ${nt.toFixed(3)})`;return`rgb(${Math.round(tt*255)},${Math.round(et*255)},${Math.round(nt*255)})`}offsetHSL(Y,tt,et){return this.getHSL(Xi),this.setHSL(Xi.h+Y,Xi.s+tt,Xi.l+et)}add(Y){return this.r+=Y.r,this.g+=Y.g,this.b+=Y.b,this}addColors(Y,tt){return this.r=Y.r+tt.r,this.g=Y.g+tt.g,this.b=Y.b+tt.b,this}addScalar(Y){return this.r+=Y,this.g+=Y,this.b+=Y,this}sub(Y){return this.r=Math.max(0,this.r-Y.r),this.g=Math.max(0,this.g-Y.g),this.b=Math.max(0,this.b-Y.b),this}multiply(Y){return this.r*=Y.r,this.g*=Y.g,this.b*=Y.b,this}multiplyScalar(Y){return this.r*=Y,this.g*=Y,this.b*=Y,this}lerp(Y,tt){return this.r+=(Y.r-this.r)*tt,this.g+=(Y.g-this.g)*tt,this.b+=(Y.b-this.b)*tt,this}lerpColors(Y,tt,et){return this.r=Y.r+(tt.r-Y.r)*et,this.g=Y.g+(tt.g-Y.g)*et,this.b=Y.b+(tt.b-Y.b)*et,this}lerpHSL(Y,tt){this.getHSL(Xi),Y.getHSL(_r);let et=Ks(Xi.h,_r.h,tt),nt=Ks(Xi.s,_r.s,tt),it=Ks(Xi.l,_r.l,tt);return this.setHSL(et,nt,it),this}setFromVector3(Y){return this.r=Y.x,this.g=Y.y,this.b=Y.z,this}applyMatrix3(Y){let tt=this.r,et=this.g,nt=this.b,it=Y.elements;return this.r=it[0]*tt+it[3]*et+it[6]*nt,this.g=it[1]*tt+it[4]*et+it[7]*nt,this.b=it[2]*tt+it[5]*et+it[8]*nt,this}equals(Y){return Y.r===this.r&&Y.g===this.g&&Y.b===this.b}fromArray(Y,tt=0){return this.r=Y[tt],this.g=Y[tt+1],this.b=Y[tt+2],this}toArray(Y=[],tt=0){return Y[tt]=this.r,Y[tt+1]=this.g,Y[tt+2]=this.b,Y}fromBufferAttribute(Y,tt){return this.r=Y.getX(tt),this.g=Y.getY(tt),this.b=Y.getZ(tt),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var ni=new t;t.NAMES=$c;class _e{constructor(Y,tt=1,et=1000){this.isFog=!0,this.name="",this.color=new t(Y),this.near=tt,this.far=et}clone(){return new _e(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class F extends l{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ai,this.environmentIntensity=1,this.environmentRotation=new Ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(Y,tt){return super.copy(Y,tt),this.background=Y.background!==null?Y.background.clone():null,this.environment=Y.environment!==null?Y.environment.clone():null,this.fog=Y.fog!==null?Y.fog.clone():null,this.backgroundBlurriness=Y.backgroundBlurriness,this.backgroundIntensity=Y.backgroundIntensity,this.backgroundRotation.copy(Y.backgroundRotation),this.environmentIntensity=Y.environmentIntensity,this.environmentRotation.copy(Y.environmentRotation),this.overrideMaterial=Y.overrideMaterial!==null?Y.overrideMaterial.clone():null,this.matrixAutoUpdate=Y.matrixAutoUpdate,this}toJSON(Y){let tt=super.toJSON(Y);if(this.fog!==null)tt.object.fog=this.fog.toJSON();return tt.object.backgroundBlurriness=this.backgroundBlurriness,tt.object.backgroundIntensity=this.backgroundIntensity,tt.object.backgroundRotation=this.backgroundRotation.toArray(),tt.object.environmentIntensity=this.environmentIntensity,tt.object.environmentRotation=this.environmentRotation.toArray(),tt}}var yi=new e,Di=new e,Sa=new e,Ui=new e,ys=new e,Ss=new e,Al=new e,Ma=new e,ba=new e,Ta=new e,Ea=new Nn,Aa=new Nn,wa=new Nn;class mi{constructor(Y=new e,tt=new e,et=new e){this.a=Y,this.b=tt,this.c=et}static getNormal(Y,tt,et,nt){nt.subVectors(et,tt),yi.subVectors(Y,tt),nt.cross(yi);let it=nt.lengthSq();if(it>0)return nt.multiplyScalar(1/Math.sqrt(it));return nt.set(0,0,0)}static getBarycoord(Y,tt,et,nt,it){yi.subVectors(nt,tt),Di.subVectors(et,tt),Sa.subVectors(Y,tt);let st=yi.dot(yi),rt=yi.dot(Di),at=yi.dot(Sa),ot=Di.dot(Di),lt=Di.dot(Sa),ct=st*ot-rt*rt;if(ct===0)return it.set(0,0,0),null;let ut=1/ct,ht=(ot*at-rt*lt)*ut,ft=(st*lt-rt*at)*ut;return it.set(1-ht-ft,ft,ht)}static containsPoint(Y,tt,et,nt){if(this.getBarycoord(Y,tt,et,nt,Ui)===null)return!1;return Ui.x>=0&&Ui.y>=0&&Ui.x+Ui.y<=1}static getInterpolation(Y,tt,et,nt,it,st,rt,at){if(this.getBarycoord(Y,tt,et,nt,Ui)===null){if(at.x=0,at.y=0,"z"in at)at.z=0;if("w"in at)at.w=0;return null}return at.setScalar(0),at.addScaledVector(it,Ui.x),at.addScaledVector(st,Ui.y),at.addScaledVector(rt,Ui.z),at}static getInterpolatedAttribute(Y,tt,et,nt,it,st){return Ea.setScalar(0),Aa.setScalar(0),wa.setScalar(0),Ea.fromBufferAttribute(Y,tt),Aa.fromBufferAttribute(Y,et),wa.fromBufferAttribute(Y,nt),st.setScalar(0),st.addScaledVector(Ea,it.x),st.addScaledVector(Aa,it.y),st.addScaledVector(wa,it.z),st}static isFrontFacing(Y,tt,et,nt){return yi.subVectors(et,tt),Di.subVectors(Y,tt),yi.cross(Di).dot(nt)<0}set(Y,tt,et){return this.a.copy(Y),this.b.copy(tt),this.c.copy(et),this}setFromPointsAndIndices(Y,tt,et,nt){return this.a.copy(Y[tt]),this.b.copy(Y[et]),this.c.copy(Y[nt]),this}setFromAttributeAndIndices(Y,tt,et,nt){return this.a.fromBufferAttribute(Y,tt),this.b.fromBufferAttribute(Y,et),this.c.fromBufferAttribute(Y,nt),this}clone(){return new this.constructor().copy(this)}copy(Y){return this.a.copy(Y.a),this.b.copy(Y.b),this.c.copy(Y.c),this}getArea(){return yi.subVectors(this.c,this.b),Di.subVectors(this.a,this.b),yi.cross(Di).length()*0.5}getMidpoint(Y){return Y.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(Y){return mi.getNormal(this.a,this.b,this.c,Y)}getPlane(Y){return Y.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(Y,tt){return mi.getBarycoord(Y,this.a,this.b,this.c,tt)}getInterpolation(Y,tt,et,nt,it){return mi.getInterpolation(Y,this.a,this.b,this.c,tt,et,nt,it)}containsPoint(Y){return mi.containsPoint(Y,this.a,this.b,this.c)}isFrontFacing(Y){return mi.isFrontFacing(this.a,this.b,this.c,Y)}intersectsBox(Y){return Y.intersectsTriangle(this)}closestPointToPoint(Y,tt){let et=this.a,nt=this.b,it=this.c,st,rt;ys.subVectors(nt,et),Ss.subVectors(it,et),Ma.subVectors(Y,et);let at=ys.dot(Ma),ot=Ss.dot(Ma);if(at<=0&&ot<=0)return tt.copy(et);ba.subVectors(Y,nt);let lt=ys.dot(ba),ct=Ss.dot(ba);if(lt>=0&&ct<=lt)return tt.copy(nt);let ut=at*ct-lt*ot;if(ut<=0&&at>=0&&lt<=0&&at-lt>0)return st=at/(at-lt),tt.copy(et).addScaledVector(ys,st);Ta.subVectors(Y,it);let ht=ys.dot(Ta),ft=Ss.dot(Ta);if(ft>=0&&ht<=ft)return tt.copy(it);let xt=ht*ot-at*ft;if(xt<=0&&ot>=0&&ft<=0)return rt=ot/(ot-ft),tt.copy(et).addScaledVector(Ss,rt);let St=lt*ft-ht*ct;if(St<=0&&ct-lt>=0&&ht-ft>=0)return Al.subVectors(it,nt),rt=(ct-lt)/(ct-lt+(ht-ft)),tt.copy(nt).addScaledVector(Al,rt);let dt=1/(St+xt+ut);return st=xt*dt,rt=ut*dt,tt.copy(et).addScaledVector(ys,st).addScaledVector(Ss,rt)}equals(Y){return Y.a.equals(this.a)&&Y.b.equals(this.b)&&Y.c.equals(this.c)}}class A{constructor(Y=new e(1/0,1/0,1/0),tt=new e(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=Y,this.max=tt}set(Y,tt){return this.min.copy(Y),this.max.copy(tt),this}setFromArray(Y){this.makeEmpty();for(let tt=0,et=Y.length;tt<et;tt+=3)this.expandByPoint(Si.fromArray(Y,tt));return this}setFromBufferAttribute(Y){this.makeEmpty();for(let tt=0,et=Y.count;tt<et;tt++)this.expandByPoint(Si.fromBufferAttribute(Y,tt));return this}setFromPoints(Y){this.makeEmpty();for(let tt=0,et=Y.length;tt<et;tt++)this.expandByPoint(Y[tt]);return this}setFromCenterAndSize(Y,tt){let et=Si.copy(tt).multiplyScalar(0.5);return this.min.copy(Y).sub(et),this.max.copy(Y).add(et),this}setFromObject(Y,tt=!1){return this.makeEmpty(),this.expandByObject(Y,tt)}clone(){return new this.constructor().copy(this)}copy(Y){return this.min.copy(Y.min),this.max.copy(Y.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(Y){return this.isEmpty()?Y.set(0,0,0):Y.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(Y){return this.isEmpty()?Y.set(0,0,0):Y.subVectors(this.max,this.min)}expandByPoint(Y){return this.min.min(Y),this.max.max(Y),this}expandByVector(Y){return this.min.sub(Y),this.max.add(Y),this}expandByScalar(Y){return this.min.addScalar(-Y),this.max.addScalar(Y),this}expandByObject(Y,tt=!1){Y.updateWorldMatrix(!1,!1);let et=Y.geometry;if(et!==void 0){let it=et.getAttribute("position");if(tt===!0&&it!==void 0&&Y.isInstancedMesh!==!0&&Y.isBatchedMesh!==!0)for(let st=0,rt=it.count;st<rt;st++){if(Y.isMesh===!0)Y.getVertexPosition(st,Si);else Si.fromBufferAttribute(it,st);Si.applyMatrix4(Y.matrixWorld),this.expandByPoint(Si)}else{if(Y.boundingBox!==void 0){if(Y.boundingBox===null)Y.computeBoundingBox();xr.copy(Y.boundingBox)}else{if(et.boundingBox===null)et.computeBoundingBox();xr.copy(et.boundingBox)}xr.applyMatrix4(Y.matrixWorld),this.union(xr)}}let nt=Y.children;for(let it=0,st=nt.length;it<st;it++)this.expandByObject(nt[it],tt);return this}containsPoint(Y){return Y.x>=this.min.x&&Y.x<=this.max.x&&Y.y>=this.min.y&&Y.y<=this.max.y&&Y.z>=this.min.z&&Y.z<=this.max.z}containsBox(Y){return this.min.x<=Y.min.x&&Y.max.x<=this.max.x&&this.min.y<=Y.min.y&&Y.max.y<=this.max.y&&this.min.z<=Y.min.z&&Y.max.z<=this.max.z}getParameter(Y,tt){return tt.set((Y.x-this.min.x)/(this.max.x-this.min.x),(Y.y-this.min.y)/(this.max.y-this.min.y),(Y.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(Y){return Y.max.x>=this.min.x&&Y.min.x<=this.max.x&&Y.max.y>=this.min.y&&Y.min.y<=this.max.y&&Y.max.z>=this.min.z&&Y.min.z<=this.max.z}intersectsSphere(Y){return this.clampPoint(Y.center,Si),Si.distanceToSquared(Y.center)<=Y.radius*Y.radius}intersectsPlane(Y){let tt,et;if(Y.normal.x>0)tt=Y.normal.x*this.min.x,et=Y.normal.x*this.max.x;else tt=Y.normal.x*this.max.x,et=Y.normal.x*this.min.x;if(Y.normal.y>0)tt+=Y.normal.y*this.min.y,et+=Y.normal.y*this.max.y;else tt+=Y.normal.y*this.max.y,et+=Y.normal.y*this.min.y;if(Y.normal.z>0)tt+=Y.normal.z*this.min.z,et+=Y.normal.z*this.max.z;else tt+=Y.normal.z*this.max.z,et+=Y.normal.z*this.min.z;return tt<=-Y.constant&&et>=-Y.constant}intersectsTriangle(Y){if(this.isEmpty())return!1;this.getCenter(Hs),vr.subVectors(this.max,Hs),Ms.subVectors(Y.a,Hs),bs.subVectors(Y.b,Hs),Ts.subVectors(Y.c,Hs),qi.subVectors(bs,Ms),Yi.subVectors(Ts,bs),rs.subVectors(Ms,Ts);let tt=[0,-qi.z,qi.y,0,-Yi.z,Yi.y,0,-rs.z,rs.y,qi.z,0,-qi.x,Yi.z,0,-Yi.x,rs.z,0,-rs.x,-qi.y,qi.x,0,-Yi.y,Yi.x,0,-rs.y,rs.x,0];if(!Ra(tt,Ms,bs,Ts,vr))return!1;if(tt=[1,0,0,0,1,0,0,0,1],!Ra(tt,Ms,bs,Ts,vr))return!1;return yr.crossVectors(qi,Yi),tt=[yr.x,yr.y,yr.z],Ra(tt,Ms,bs,Ts,vr)}clampPoint(Y,tt){return tt.copy(Y).clamp(this.min,this.max)}distanceToPoint(Y){return this.clampPoint(Y,Si).distanceTo(Y)}getBoundingSphere(Y){if(this.isEmpty())Y.makeEmpty();else this.getCenter(Y.center),Y.radius=this.getSize(Si).length()*0.5;return Y}intersect(Y){if(this.min.max(Y.min),this.max.min(Y.max),this.isEmpty())this.makeEmpty();return this}union(Y){return this.min.min(Y.min),this.max.max(Y.max),this}applyMatrix4(Y){if(this.isEmpty())return this;return Fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(Y),Fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(Y),Fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(Y),Fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(Y),Fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(Y),Fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(Y),Fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(Y),Fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(Y),this.setFromPoints(Fi),this}translate(Y){return this.min.add(Y),this.max.add(Y),this}equals(Y){return Y.min.equals(this.min)&&Y.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(Y){return this.min.fromArray(Y.min),this.max.fromArray(Y.max),this}}var Fi=[new e,new e,new e,new e,new e,new e,new e,new e],Si=new e,xr=new A,Ms=new e,bs=new e,Ts=new e,qi=new e,Yi=new e,rs=new e,Hs=new e,vr=new e,yr=new e,as=new e;function Ra(Y,tt,et,nt,it){for(let st=0,rt=Y.length-3;st<=rt;st+=3){as.fromArray(Y,st);let at=it.x*Math.abs(as.x)+it.y*Math.abs(as.y)+it.z*Math.abs(as.z),ot=tt.dot(as),lt=et.dot(as),ct=nt.dot(as);if(Math.max(-Math.max(ot,lt,ct),Math.min(ot,lt,ct))>at)return!1}return!0}var Wn=new e,Sr=new n,Mu=0;class T extends Hi{constructor(Y,tt,et=!1){super();if(Array.isArray(Y))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Mu++}),this.name="",this.array=Y,this.itemSize=tt,this.count=Y!==void 0?Y.length/tt:0,this.normalized=et,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0,this._normalizationScale=Y!==void 0?$r(Y):void 0}onUploadCallback(){}set needsUpdate(Y){if(Y===!0)this.version++}setUsage(Y){return this.usage=Y,this}addUpdateRange(Y,tt){this.updateRanges.push({start:Y,count:tt})}clearUpdateRanges(){this.updateRanges.length=0}copy(Y){return this.name=Y.name,this.array=new Y.array.constructor(Y.array),this.itemSize=Y.itemSize,this.count=Y.count,this.normalized=Y.normalized,this.usage=Y.usage,this.gpuType=Y.gpuType,this._normalizationScale=Y._normalizationScale,this}copyAt(Y,tt,et){Y*=this.itemSize,et*=tt.itemSize;for(let nt=0,it=this.itemSize;nt<it;nt++)this.array[Y+nt]=tt.array[et+nt];return this}copyArray(Y){return this.array.set(Y),this}applyMatrix3(Y){if(this.itemSize===2)for(let tt=0,et=this.count;tt<et;tt++)Sr.fromBufferAttribute(this,tt),Sr.applyMatrix3(Y),this.setXY(tt,Sr.x,Sr.y);else if(this.itemSize===3)for(let tt=0,et=this.count;tt<et;tt++)Wn.fromBufferAttribute(this,tt),Wn.applyMatrix3(Y),this.setXYZ(tt,Wn.x,Wn.y,Wn.z);return this}applyMatrix4(Y){for(let tt=0,et=this.count;tt<et;tt++)Wn.fromBufferAttribute(this,tt),Wn.applyMatrix4(Y),this.setXYZ(tt,Wn.x,Wn.y,Wn.z);return this}applyNormalMatrix(Y){for(let tt=0,et=this.count;tt<et;tt++)Wn.fromBufferAttribute(this,tt),Wn.applyNormalMatrix(Y),this.setXYZ(tt,Wn.x,Wn.y,Wn.z);return this}transformDirection(Y){for(let tt=0,et=this.count;tt<et;tt++)Wn.fromBufferAttribute(this,tt),Wn.transformDirection(Y),this.setXYZ(tt,Wn.x,Wn.y,Wn.z);return this}set(Y,tt=0){return this.array.set(Y,tt),this}getComponent(Y,tt){let et=this.array[Y*this.itemSize+tt];if(this.normalized)et=this._denormalize(et);return et}setComponent(Y,tt,et){if(this.normalized)et=this._normalize(et);return this.array[Y*this.itemSize+tt]=et,this}getX(Y){let tt=this.array[Y*this.itemSize];if(this.normalized)tt=this._denormalize(tt);return tt}setX(Y,tt){if(this.normalized)tt=this._normalize(tt);return this.array[Y*this.itemSize]=tt,this}getY(Y){let tt=this.array[Y*this.itemSize+1];if(this.normalized)tt=this._denormalize(tt);return tt}setY(Y,tt){if(this.normalized)tt=this._normalize(tt);return this.array[Y*this.itemSize+1]=tt,this}getZ(Y){let tt=this.array[Y*this.itemSize+2];if(this.normalized)tt=this._denormalize(tt);return tt}setZ(Y,tt){if(this.normalized)tt=this._normalize(tt);return this.array[Y*this.itemSize+2]=tt,this}getW(Y){let tt=this.array[Y*this.itemSize+3];if(this.normalized)tt=this._denormalize(tt);return tt}setW(Y,tt){if(this.normalized)tt=this._normalize(tt);return this.array[Y*this.itemSize+3]=tt,this}setXY(Y,tt,et){if(Y*=this.itemSize,this.normalized)tt=this._normalize(tt),et=this._normalize(et);return this.array[Y+0]=tt,this.array[Y+1]=et,this}setXYZ(Y,tt,et,nt){if(Y*=this.itemSize,this.normalized)tt=this._normalize(tt),et=this._normalize(et),nt=this._normalize(nt);return this.array[Y+0]=tt,this.array[Y+1]=et,this.array[Y+2]=nt,this}setXYZW(Y,tt,et,nt,it){if(Y*=this.itemSize,this.normalized)tt=this._normalize(tt),et=this._normalize(et),nt=this._normalize(nt),it=this._normalize(it);return this.array[Y+0]=tt,this.array[Y+1]=et,this.array[Y+2]=nt,this.array[Y+3]=it,this}onUpload(Y){return this.onUploadCallback=Y,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let Y={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return Y.name=this.name,Y.usage=this.usage,Y.gpuType=this.gpuType,Y}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(Y){let tt=this._normalizationScale;return tt!==void 0?Math.max(Y/tt,-1):Fo(Y,this.array)}_normalize(Y){let tt=this._normalizationScale;return tt!==void 0?Math.round(Y*tt):Oo(Y,this.array)}}class jr extends T{constructor(Y,tt,et){super(new Uint16Array(Y),tt,et)}}class ta extends T{constructor(Y,tt,et){super(new Uint32Array(Y),tt,et)}}class f extends T{constructor(Y,tt,et){super(new Float32Array(Y),tt,et)}}var bu=new A,Ws=new e,Ca=new e;class w{constructor(Y=new e,tt=-1){this.isSphere=!0,this.center=Y,this.radius=tt}set(Y,tt){return this.center.copy(Y),this.radius=tt,this}setFromPoints(Y,tt){let et=this.center;if(tt!==void 0)et.copy(tt);else bu.setFromPoints(Y).getCenter(et);let nt=0;for(let it=0,st=Y.length;it<st;it++)nt=Math.max(nt,et.distanceToSquared(Y[it]));return this.radius=Math.sqrt(nt),this}copy(Y){return this.center.copy(Y.center),this.radius=Y.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(Y){return Y.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(Y){return Y.distanceTo(this.center)-this.radius}intersectsSphere(Y){let tt=this.radius+Y.radius;return Y.center.distanceToSquared(this.center)<=tt*tt}intersectsBox(Y){return Y.intersectsSphere(this)}intersectsPlane(Y){return Math.abs(Y.distanceToPoint(this.center))<=this.radius}clampPoint(Y,tt){let et=this.center.distanceToSquared(Y);if(tt.copy(Y),et>this.radius*this.radius)tt.sub(this.center).normalize(),tt.multiplyScalar(this.radius).add(this.center);return tt}getBoundingBox(Y){if(this.isEmpty())return Y.makeEmpty(),Y;return Y.set(this.center,this.center),Y.expandByScalar(this.radius),Y}applyMatrix4(Y){return this.center.applyMatrix4(Y),this.radius=this.radius*Y.getMaxScaleOnAxis(),this}translate(Y){return this.center.add(Y),this}expandByPoint(Y){if(this.isEmpty())return this.center.copy(Y),this.radius=0,this;Ws.subVectors(Y,this.center);let tt=Ws.lengthSq();if(tt>this.radius*this.radius){let et=Math.sqrt(tt),nt=(et-this.radius)*0.5;this.center.addScaledVector(Ws,nt/et),this.radius+=nt}return this}union(Y){if(Y.isEmpty())return this;if(this.isEmpty())return this.copy(Y),this;if(this.center.equals(Y.center)===!0)this.radius=Math.max(this.radius,Y.radius);else Ca.subVectors(Y.center,this.center).setLength(Y.radius),this.expandByPoint(Ws.copy(Y.center).add(Ca)),this.expandByPoint(Ws.copy(Y.center).sub(Ca));return this}equals(Y){return Y.center.equals(this.center)&&Y.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(Y){return this.radius=Y.radius,this.center.fromArray(Y.center),this}}var Tu=0,pi=new i,Ia=new l,Es=new e,di=new A,Vs=new A,Jn=new e;class v extends Hi{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tu++}),this.uuid=Ri(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(Y){if(Array.isArray(Y))this.index=new((Jh(Y))?ta:jr)(Y,1);else this.index=Y;return this}setIndirect(Y,tt=0){return this.indirect=Y,this.indirectOffset=tt,this}getIndirect(){return this.indirect}getAttribute(Y){return this.attributes[Y]}setAttribute(Y,tt){return this.attributes[Y]=tt,this}deleteAttribute(Y){return delete this.attributes[Y],this}hasAttribute(Y){return this.attributes[Y]!==void 0}addGroup(Y,tt,et=0){this.groups.push({start:Y,count:tt,materialIndex:et})}clearGroups(){this.groups=[]}setDrawRange(Y,tt){this.drawRange.start=Y,this.drawRange.count=tt}applyMatrix4(Y){let tt=this.attributes.position;if(tt!==void 0)tt.applyMatrix4(Y),tt.needsUpdate=!0;let et=this.attributes.normal;if(et!==void 0){let it=new _n().getNormalMatrix(Y);et.applyNormalMatrix(it),et.needsUpdate=!0}let nt=this.attributes.tangent;if(nt!==void 0)nt.transformDirection(Y),nt.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this._transformed=!0,this}applyQuaternion(Y){return pi.makeRotationFromQuaternion(Y),this.applyMatrix4(pi),this}rotateX(Y){return pi.makeRotationX(Y),this.applyMatrix4(pi),this}rotateY(Y){return pi.makeRotationY(Y),this.applyMatrix4(pi),this}rotateZ(Y){return pi.makeRotationZ(Y),this.applyMatrix4(pi),this}translate(Y,tt,et){return pi.makeTranslation(Y,tt,et),this.applyMatrix4(pi),this}scale(Y,tt,et){return pi.makeScale(Y,tt,et),this.applyMatrix4(pi),this}lookAt(Y){return Ia.lookAt(Y),Ia.updateMatrix(),this.applyMatrix4(Ia.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Es).negate(),this.translate(Es.x,Es.y,Es.z),this}setFromPoints(Y){let tt=this.getAttribute("position");if(tt===void 0){let et=[];for(let nt=0,it=Y.length;nt<it;nt++){let st=Y[nt];et.push(st.x,st.y,st.z||0)}this.setAttribute("position",new f(et,3))}else{let et=Math.min(Y.length,tt.count);for(let nt=0;nt<et;nt++){let it=Y[nt];tt.setXYZ(nt,it.x,it.y,it.z||0)}if(Y.length>tt.count)hn("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");tt.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new A;let Y=this.attributes.position,tt=this.morphAttributes.position;if(Y&&Y.isGLBufferAttribute){gn("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new e(-1/0,-1/0,-1/0),new e(1/0,1/0,1/0));return}if(Y!==void 0){if(this.boundingBox.setFromBufferAttribute(Y),tt)for(let et=0,nt=tt.length;et<nt;et++){let it=tt[et];if(di.setFromBufferAttribute(it),this.morphTargetsRelative)Jn.addVectors(this.boundingBox.min,di.min),this.boundingBox.expandByPoint(Jn),Jn.addVectors(this.boundingBox.max,di.max),this.boundingBox.expandByPoint(Jn);else this.boundingBox.expandByPoint(di.min),this.boundingBox.expandByPoint(di.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))gn('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new w;let Y=this.attributes.position,tt=this.morphAttributes.position;if(Y&&Y.isGLBufferAttribute){gn("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new e,1/0);return}if(Y){let et=this.boundingSphere.center;if(di.setFromBufferAttribute(Y),tt)for(let it=0,st=tt.length;it<st;it++){let rt=tt[it];if(Vs.setFromBufferAttribute(rt),this.morphTargetsRelative)Jn.addVectors(di.min,Vs.min),di.expandByPoint(Jn),Jn.addVectors(di.max,Vs.max),di.expandByPoint(Jn);else di.expandByPoint(Vs.min),di.expandByPoint(Vs.max)}di.getCenter(et);let nt=0;for(let it=0,st=Y.count;it<st;it++)Jn.fromBufferAttribute(Y,it),nt=Math.max(nt,et.distanceToSquared(Jn));if(tt)for(let it=0,st=tt.length;it<st;it++){let rt=tt[it],at=this.morphTargetsRelative;for(let ot=0,lt=rt.count;ot<lt;ot++){if(Jn.fromBufferAttribute(rt,ot),at)Es.fromBufferAttribute(Y,ot),Jn.add(Es);nt=Math.max(nt,et.distanceToSquared(Jn))}}if(this.boundingSphere.radius=Math.sqrt(nt),isNaN(this.boundingSphere.radius))gn('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let Y=this.index,tt=this.attributes;if(Y===null||tt.position===void 0||tt.normal===void 0||tt.uv===void 0){gn("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:et,normal:nt,uv:it}=tt,st=this.getAttribute("tangent");if(st===void 0||st.count!==et.count)st=new T(new Float32Array(4*et.count),4),this.setAttribute("tangent",st);let rt=[],at=[],ot=new Uint8Array(et.count);for(let vt=0;vt<et.count;vt++)rt[vt]=new e,at[vt]=new e;let lt=new e,ct=new e,ut=new e,ht=new n,ft=new n,xt=new n,St=new e,dt=new e;function pt(vt,Lt,Gt){ot[vt]=ot[Lt]=ot[Gt]=1,lt.fromBufferAttribute(et,vt),ct.fromBufferAttribute(et,Lt),ut.fromBufferAttribute(et,Gt),ht.fromBufferAttribute(it,vt),ft.fromBufferAttribute(it,Lt),xt.fromBufferAttribute(it,Gt),ct.sub(lt),ut.sub(lt),ft.sub(ht),xt.sub(ht);let Pt=1/(ft.x*xt.y-xt.x*ft.y);if(!isFinite(Pt))return;St.copy(ct).multiplyScalar(xt.y).addScaledVector(ut,-ft.y).multiplyScalar(Pt),dt.copy(ut).multiplyScalar(ft.x).addScaledVector(ct,-xt.x).multiplyScalar(Pt),rt[vt].add(St),rt[Lt].add(St),rt[Gt].add(St),at[vt].add(dt),at[Lt].add(dt),at[Gt].add(dt)}let bt=this.groups;if(bt.length===0)bt=[{start:0,count:Y.count}];for(let vt=0,Lt=bt.length;vt<Lt;++vt){let Gt=bt[vt],{start:Pt,count:Bt}=Gt;for(let $t=Pt,wt=Pt+Bt;$t<wt;$t+=3)pt(Y.getX($t+0),Y.getX($t+1),Y.getX($t+2))}let Tt=new e,Mt=new e,Et=new e,Ct=new e;function mt(vt){Et.fromBufferAttribute(nt,vt),Ct.copy(Et);let Lt=rt[vt];Tt.copy(Lt),Tt.sub(Et.multiplyScalar(Et.dot(Lt))).normalize(),Mt.crossVectors(Ct,Lt);let Pt=Mt.dot(at[vt])<0?-1:1;st.setXYZW(vt,Tt.x,Tt.y,Tt.z,Pt)}for(let vt=0,Lt=et.count;vt<Lt;++vt)if(ot[vt])mt(vt);this._transformed=!0}computeVertexNormals(){let Y=this.index,tt=this.getAttribute("position");if(tt!==void 0){let et=this.getAttribute("normal");if(et===void 0||et.count!==tt.count)et=new T(new Float32Array(tt.count*3),3),this.setAttribute("normal",et);else for(let ut=0,ht=et.count;ut<ht;ut++)et.setXYZ(ut,0,0,0);let nt=new e,it=new e,st=new e,rt=new e,at=new e,ot=new e,lt=new e,ct=new e;if(Y)for(let ut=0,ht=Y.count;ut<ht;ut+=3){let ft=Y.getX(ut+0),xt=Y.getX(ut+1),St=Y.getX(ut+2);nt.fromBufferAttribute(tt,ft),it.fromBufferAttribute(tt,xt),st.fromBufferAttribute(tt,St),lt.subVectors(st,it),ct.subVectors(nt,it),lt.cross(ct),rt.fromBufferAttribute(et,ft),at.fromBufferAttribute(et,xt),ot.fromBufferAttribute(et,St),rt.add(lt),at.add(lt),ot.add(lt),et.setXYZ(ft,rt.x,rt.y,rt.z),et.setXYZ(xt,at.x,at.y,at.z),et.setXYZ(St,ot.x,ot.y,ot.z)}else for(let ut=0,ht=tt.count;ut<ht;ut+=3)nt.fromBufferAttribute(tt,ut+0),it.fromBufferAttribute(tt,ut+1),st.fromBufferAttribute(tt,ut+2),lt.subVectors(st,it),ct.subVectors(nt,it),lt.cross(ct),et.setXYZ(ut+0,lt.x,lt.y,lt.z),et.setXYZ(ut+1,lt.x,lt.y,lt.z),et.setXYZ(ut+2,lt.x,lt.y,lt.z);this.normalizeNormals(),et.needsUpdate=!0}}normalizeNormals(){let Y=this.attributes.normal;for(let tt=0,et=Y.count;tt<et;tt++)Jn.fromBufferAttribute(Y,tt),Jn.normalize(),Y.setXYZ(tt,Jn.x,Jn.y,Jn.z)}toNonIndexed(){function Y(rt,at){let{array:ot,itemSize:lt,normalized:ct}=rt,ut=new ot.constructor(at.length*lt),ht=0,ft=0;for(let xt=0,St=at.length;xt<St;xt++){if(rt.isInterleavedBufferAttribute)ht=at[xt]*rt.data.stride+rt.offset;else ht=at[xt]*lt;for(let dt=0;dt<lt;dt++)ut[ft++]=ot[ht++]}return new T(ut,lt,ct)}if(this.index===null)return hn("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let tt=new v,et=this.index.array,nt=this.attributes;for(let rt in nt){let at=nt[rt],ot=Y(at,et);tt.setAttribute(rt,ot)}let it=this.morphAttributes;for(let rt in it){let at=[],ot=it[rt];for(let lt=0,ct=ot.length;lt<ct;lt++){let ut=ot[lt],ht=Y(ut,et);at.push(ht)}tt.morphAttributes[rt]=at}tt.morphTargetsRelative=this.morphTargetsRelative;let st=this.groups;for(let rt=0,at=st.length;rt<at;rt++){let ot=st[rt];tt.addGroup(ot.start,ot.count,ot.materialIndex)}return tt}toJSON(){let Y={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(Y.uuid=this.uuid,Y.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,Y.name=this.name,Object.keys(this.userData).length>0)Y.userData=this.userData;if(this.parameters!==void 0&&this._transformed!==!0){let at=this.parameters;for(let ot in at)if(at[ot]!==void 0)Y[ot]=at[ot];return Y}Y.data={attributes:{}};let tt=this.index;if(tt!==null)Y.data.index={type:tt.array.constructor.name,array:Array.prototype.slice.call(tt.array)};let et=this.attributes;for(let at in et){let ot=et[at];Y.data.attributes[at]=ot.toJSON(Y.data)}let nt={},it=!1;for(let at in this.morphAttributes){let ot=this.morphAttributes[at],lt=[];for(let ct=0,ut=ot.length;ct<ut;ct++){let ht=ot[ct];lt.push(ht.toJSON(Y.data))}if(lt.length>0)nt[at]=lt,it=!0}if(it)Y.data.morphAttributes=nt,Y.data.morphTargetsRelative=this.morphTargetsRelative;let st=this.groups;if(st.length>0)Y.data.groups=JSON.parse(JSON.stringify(st));let rt=this.boundingSphere;if(rt!==null)Y.data.boundingSphere=rt.toJSON();return Y}clone(){return new this.constructor().copy(this)}copy(Y){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let tt={};this.name=Y.name;let et=Y.index;if(et!==null)this.setIndex(et.clone());let nt=Y.attributes;for(let ot in nt){let lt=nt[ot];this.setAttribute(ot,lt.clone(tt))}let it=Y.morphAttributes;for(let ot in it){let lt=[],ct=it[ot];for(let ut=0,ht=ct.length;ut<ht;ut++)lt.push(ct[ut].clone(tt));this.morphAttributes[ot]=lt}this.morphTargetsRelative=Y.morphTargetsRelative;let st=Y.groups;for(let ot=0,lt=st.length;ot<lt;ot++){let ct=st[ot];this.addGroup(ct.start,ct.count,ct.materialIndex)}let rt=Y.boundingBox;if(rt!==null)this.boundingBox=rt.clone();let at=Y.boundingSphere;if(at!==null)this.boundingSphere=at.clone();return this.drawRange.start=Y.drawRange.start,this.drawRange.count=Y.drawRange.count,this.userData=Y.userData,this._transformed=Y._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xe{constructor(Y,tt){this.isInterleavedBuffer=!0,this.array=Y,this.stride=tt,this.count=Y!==void 0?Y.length/tt:0,this.usage=35044,this.updateRanges=[],this.version=0,this.uuid=Ri()}onUploadCallback(){}set needsUpdate(Y){if(Y===!0)this.version++}setUsage(Y){return this.usage=Y,this}addUpdateRange(Y,tt){this.updateRanges.push({start:Y,count:tt})}clearUpdateRanges(){this.updateRanges.length=0}copy(Y){return this.array=new Y.array.constructor(Y.array),this.count=Y.count,this.stride=Y.stride,this.usage=Y.usage,this}copyAt(Y,tt,et){Y*=this.stride,et*=tt.stride;for(let nt=0,it=this.stride;nt<it;nt++)this.array[Y+nt]=tt.array[et+nt];return this}set(Y,tt=0){return this.array.set(Y,tt),this}clone(Y){if(Y.arrayBuffers===void 0)Y.arrayBuffers={};let tt=wl(this.array);if(Y.arrayBuffers[tt]===void 0)Y.arrayBuffers[tt]=this.array.slice(0).buffer;let et=new this.array.constructor(Y.arrayBuffers[tt]),nt=new this.constructor(et,this.stride);return nt.setUsage(this.usage),nt}onUpload(Y){return this.onUploadCallback=Y,this}toJSON(Y){if(Y.arrayBuffers===void 0)Y.arrayBuffers={};let tt=wl(this.array);if(Y.arrayBuffers[tt]===void 0)Y.arrayBuffers[tt]=Array.from(new Uint32Array(this.array.slice(0).buffer));let et={uuid:this.uuid,buffer:tt,type:this.array.constructor.name,stride:this.stride};return et.usage=this.usage,et}}function wl(Y){if(Y.buffer._uuid===void 0)Y.buffer._uuid=Ri();if(Y.byteOffset===0&&Y.byteLength===Y.buffer.byteLength)return Y.buffer._uuid;return Y.buffer._uuid+":"+Y.byteOffset+":"+Y.byteLength}var ai=new e;class ie{constructor(Y,tt,et,nt=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=Y,this.itemSize=tt,this.offset=et,this.normalized=nt,this._normalizationScale=Y!==void 0?$r(Y.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(Y){this.data.needsUpdate=Y}applyMatrix4(Y){for(let tt=0,et=this.data.count;tt<et;tt++)ai.fromBufferAttribute(this,tt),ai.applyMatrix4(Y),this.setXYZ(tt,ai.x,ai.y,ai.z);return this}applyNormalMatrix(Y){for(let tt=0,et=this.count;tt<et;tt++)ai.fromBufferAttribute(this,tt),ai.applyNormalMatrix(Y),this.setXYZ(tt,ai.x,ai.y,ai.z);return this}transformDirection(Y){for(let tt=0,et=this.count;tt<et;tt++)ai.fromBufferAttribute(this,tt),ai.transformDirection(Y),this.setXYZ(tt,ai.x,ai.y,ai.z);return this}getComponent(Y,tt){let et=this.array[Y*this.data.stride+this.offset+tt];if(this.normalized)et=this._denormalize(et);return et}setComponent(Y,tt,et){if(this.normalized)et=this._normalize(et);return this.data.array[Y*this.data.stride+this.offset+tt]=et,this}setX(Y,tt){if(this.normalized)tt=this._normalize(tt);return this.data.array[Y*this.data.stride+this.offset]=tt,this}setY(Y,tt){if(this.normalized)tt=this._normalize(tt);return this.data.array[Y*this.data.stride+this.offset+1]=tt,this}setZ(Y,tt){if(this.normalized)tt=this._normalize(tt);return this.data.array[Y*this.data.stride+this.offset+2]=tt,this}setW(Y,tt){if(this.normalized)tt=this._normalize(tt);return this.data.array[Y*this.data.stride+this.offset+3]=tt,this}getX(Y){let tt=this.data.array[Y*this.data.stride+this.offset];if(this.normalized)tt=this._denormalize(tt);return tt}getY(Y){let tt=this.data.array[Y*this.data.stride+this.offset+1];if(this.normalized)tt=this._denormalize(tt);return tt}getZ(Y){let tt=this.data.array[Y*this.data.stride+this.offset+2];if(this.normalized)tt=this._denormalize(tt);return tt}getW(Y){let tt=this.data.array[Y*this.data.stride+this.offset+3];if(this.normalized)tt=this._denormalize(tt);return tt}setXY(Y,tt,et){if(Y=Y*this.data.stride+this.offset,this.normalized)tt=this._normalize(tt),et=this._normalize(et);return this.data.array[Y+0]=tt,this.data.array[Y+1]=et,this}setXYZ(Y,tt,et,nt){if(Y=Y*this.data.stride+this.offset,this.normalized)tt=this._normalize(tt),et=this._normalize(et),nt=this._normalize(nt);return this.data.array[Y+0]=tt,this.data.array[Y+1]=et,this.data.array[Y+2]=nt,this}setXYZW(Y,tt,et,nt,it){if(Y=Y*this.data.stride+this.offset,this.normalized)tt=this._normalize(tt),et=this._normalize(et),nt=this._normalize(nt),it=this._normalize(it);return this.data.array[Y+0]=tt,this.data.array[Y+1]=et,this.data.array[Y+2]=nt,this.data.array[Y+3]=it,this}clone(Y){if(Y===void 0){Qs("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let tt=[];for(let et=0;et<this.count;et++){let nt=et*this.data.stride+this.offset;for(let it=0;it<this.itemSize;it++)tt.push(this.data.array[nt+it])}return new T(new this.array.constructor(tt),this.itemSize,this.normalized)}else{if(Y.interleavedBuffers===void 0)Y.interleavedBuffers={};if(Y.interleavedBuffers[this.data.uuid]===void 0)Y.interleavedBuffers[this.data.uuid]=this.data.clone(Y);return new ie(Y.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}}toJSON(Y){if(Y===void 0){Qs("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let tt=[];for(let et=0;et<this.count;et++){let nt=et*this.data.stride+this.offset;for(let it=0;it<this.itemSize;it++)tt.push(this.data.array[nt+it])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:tt,normalized:this.normalized}}else{if(Y.interleavedBuffers===void 0)Y.interleavedBuffers={};if(Y.interleavedBuffers[this.data.uuid]===void 0)Y.interleavedBuffers[this.data.uuid]=this.data.toJSON(Y);return{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}_denormalize(Y){let tt=this._normalizationScale;return tt!==void 0?Math.max(Y/tt,-1):Fo(Y,this.data.array)}_normalize(Y){let tt=this._normalizationScale;return tt!==void 0?Math.round(Y*tt):Oo(Y,this.data.array)}}var Pa=new e,Eu=new e,Au=new _n;class Ti{constructor(Y=new e(1,0,0),tt=0){this.isPlane=!0,this.normal=Y,this.constant=tt}set(Y,tt){return this.normal.copy(Y),this.constant=tt,this}setComponents(Y,tt,et,nt){return this.normal.set(Y,tt,et),this.constant=nt,this}setFromNormalAndCoplanarPoint(Y,tt){return this.normal.copy(Y),this.constant=-tt.dot(this.normal),this}setFromCoplanarPoints(Y,tt,et){let nt=Pa.subVectors(et,tt).cross(Eu.subVectors(Y,tt)).normalize();return this.setFromNormalAndCoplanarPoint(nt,Y),this}copy(Y){return this.normal.copy(Y.normal),this.constant=Y.constant,this}normalize(){let Y=1/this.normal.length();return this.normal.multiplyScalar(Y),this.constant*=Y,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(Y){return this.normal.dot(Y)+this.constant}distanceToSphere(Y){return this.distanceToPoint(Y.center)-Y.radius}projectPoint(Y,tt){return tt.copy(Y).addScaledVector(this.normal,-this.distanceToPoint(Y))}intersectLine(Y,tt,et=!0){let nt=Y.delta(Pa),it=this.normal.dot(nt);if(it===0){if(this.distanceToPoint(Y.start)===0)return tt.copy(Y.start);return null}let st=-(Y.start.dot(this.normal)+this.constant)/it;if(et===!0&&(st<0||st>1))return null;return tt.copy(Y.start).addScaledVector(nt,st)}intersectsLine(Y){let tt=this.distanceToPoint(Y.start),et=this.distanceToPoint(Y.end);return tt<0&&et>0||et<0&&tt>0}intersectsBox(Y){return Y.intersectsPlane(this)}intersectsSphere(Y){return Y.intersectsPlane(this)}coplanarPoint(Y){return Y.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(Y,tt){let et=tt||Au.getNormalMatrix(Y),nt=this.coplanarPoint(Pa).applyMatrix4(Y),it=this.normal.applyMatrix3(et).normalize();return this.constant=-nt.dot(it),this}translate(Y){return this.constant-=Y.dot(this.normal),this}equals(Y){return Y.normal.equals(this.normal)&&Y.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(Y){return this.normal.fromArray(Y.normal),this.constant=Y.constant,this}}var wu=0;class E extends Hi{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:wu++}),this.uuid=Ri(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new t(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(Y){if(this._alphaTest>0!==Y>0)this.version++;this._alphaTest=Y}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(Y){if(Y===void 0)return;for(let tt in Y){let et=Y[tt];if(et===void 0){hn(`Material: parameter '${tt}' has value of undefined.`);continue}let nt=this[tt];if(nt===void 0){hn(`Material: '${tt}' is not a property of THREE.${this.type}.`);continue}if(nt&&nt.isColor)nt.set(et);else if(nt&&nt.isVector2&&(et&&et.isVector2)||nt&&nt.isEuler&&(et&&et.isEuler)||nt&&nt.isVector3&&(et&&et.isVector3))nt.copy(et);else this[tt]=et}}toJSON(Y){let tt=Y===void 0||typeof Y==="string";if(tt)Y={textures:{},images:{}};let et={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if(et.uuid=this.uuid,et.type=this.type,et.blending=this.blending,et.side=this.side,et.shadowSide=this.shadowSide,et.vertexColors=this.vertexColors,et.opacity=this.opacity,et.transparent=this.transparent,et.blendSrc=this.blendSrc,et.blendDst=this.blendDst,et.blendEquation=this.blendEquation,et.blendSrcAlpha=this.blendSrcAlpha,et.blendDstAlpha=this.blendDstAlpha,et.blendEquationAlpha=this.blendEquationAlpha,et.blendColor=this.blendColor.getHex(),et.blendAlpha=this.blendAlpha,et.depthFunc=this.depthFunc,et.depthTest=this.depthTest,et.depthWrite=this.depthWrite,et.colorWrite=this.colorWrite,et.clipIntersection=this.clipIntersection,et.clipShadows=this.clipShadows,et.stencilWriteMask=this.stencilWriteMask,et.stencilFunc=this.stencilFunc,et.stencilRef=this.stencilRef,et.stencilFuncMask=this.stencilFuncMask,et.stencilFail=this.stencilFail,et.stencilZFail=this.stencilZFail,et.stencilZPass=this.stencilZPass,et.stencilWrite=this.stencilWrite,et.polygonOffset=this.polygonOffset,et.polygonOffsetFactor=this.polygonOffsetFactor,et.polygonOffsetUnits=this.polygonOffsetUnits,et.dithering=this.dithering,et.alphaTest=this.alphaTest,et.alphaHash=this.alphaHash,et.alphaToCoverage=this.alphaToCoverage,et.premultipliedAlpha=this.premultipliedAlpha,et.forceSinglePass=this.forceSinglePass,et.allowOverride=this.allowOverride,et.visible=this.visible,et.toneMapped=this.toneMapped,et.name=this.name,this.color&&this.color.isColor)et.color=this.color.getHex();if(this.roughness!==void 0)et.roughness=this.roughness;if(this.metalness!==void 0)et.metalness=this.metalness;if(this.sheen!==void 0)et.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)et.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)et.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)et.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0)et.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)et.specular=this.specular.getHex();if(this.specularIntensity!==void 0)et.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)et.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)et.shininess=this.shininess;if(this.clearcoat!==void 0)et.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)et.clearcoatRoughness=this.clearcoatRoughness;if(this.diffuseRoughness!==void 0)et.diffuseRoughness=this.diffuseRoughness;if(this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture)et.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(Y).uuid;if(this.clearcoatMap&&this.clearcoatMap.isTexture)et.clearcoatMap=this.clearcoatMap.toJSON(Y).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)et.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(Y).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)et.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(Y).uuid,et.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)et.sheenColorMap=this.sheenColorMap.toJSON(Y).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)et.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(Y).uuid;if(this.dispersion!==void 0)et.dispersion=this.dispersion;if(this.retroreflectivity!==void 0)et.retroreflectivity=this.retroreflectivity;if(this.iridescence!==void 0)et.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)et.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessMinimum!==void 0)et.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum;if(this.iridescenceThicknessMaximum!==void 0)et.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum;if(this.iridescenceMap&&this.iridescenceMap.isTexture)et.iridescenceMap=this.iridescenceMap.toJSON(Y).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)et.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(Y).uuid;if(this.anisotropy!==void 0)et.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)et.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)et.anisotropyMap=this.anisotropyMap.toJSON(Y).uuid;if(this.map&&this.map.isTexture)et.map=this.map.toJSON(Y).uuid;if(this.matcap&&this.matcap.isTexture)et.matcap=this.matcap.toJSON(Y).uuid;if(this.alphaMap&&this.alphaMap.isTexture)et.alphaMap=this.alphaMap.toJSON(Y).uuid;if(this.lightMap&&this.lightMap.isTexture)et.lightMap=this.lightMap.toJSON(Y).uuid,et.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)et.aoMap=this.aoMap.toJSON(Y).uuid,et.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)et.bumpMap=this.bumpMap.toJSON(Y).uuid,et.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)et.normalMap=this.normalMap.toJSON(Y).uuid,et.normalMapType=this.normalMapType,et.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)et.displacementMap=this.displacementMap.toJSON(Y).uuid,et.displacementScale=this.displacementScale,et.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)et.roughnessMap=this.roughnessMap.toJSON(Y).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)et.metalnessMap=this.metalnessMap.toJSON(Y).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)et.emissiveMap=this.emissiveMap.toJSON(Y).uuid;if(this.specularMap&&this.specularMap.isTexture)et.specularMap=this.specularMap.toJSON(Y).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)et.specularIntensityMap=this.specularIntensityMap.toJSON(Y).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)et.specularColorMap=this.specularColorMap.toJSON(Y).uuid;if(this.envMap&&this.envMap.isTexture){if(et.envMap=this.envMap.toJSON(Y).uuid,this.combine!==void 0)et.combine=this.combine}if(this.envMapRotation!==void 0)et.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)et.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)et.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)et.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)et.gradientMap=this.gradientMap.toJSON(Y).uuid;if(this.transmission!==void 0)et.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)et.transmissionMap=this.transmissionMap.toJSON(Y).uuid;if(this.thickness!==void 0)et.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)et.thicknessMap=this.thicknessMap.toJSON(Y).uuid;if(this.attenuationDistance!==void 0)et.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)et.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)et.size=this.size;if(this.sizeAttenuation!==void 0)et.sizeAttenuation=this.sizeAttenuation;if(Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0)et.clippingPlanes=this.clippingPlanes.map((it)=>it.toJSON());if(this.rotation!==void 0)et.rotation=this.rotation;if(this.depthPacking!==void 0)et.depthPacking=this.depthPacking;if(this.linewidth!==void 0)et.linewidth=this.linewidth;if(this.linecap!==void 0)et.linecap=this.linecap;if(this.linejoin!==void 0)et.linejoin=this.linejoin;if(this.dashSize!==void 0)et.dashSize=this.dashSize;if(this.gapSize!==void 0)et.gapSize=this.gapSize;if(this.scale!==void 0)et.scale=this.scale;if(this.wireframe!==void 0)et.wireframe=this.wireframe;if(this.wireframeLinewidth!==void 0)et.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!==void 0)et.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!==void 0)et.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading!==void 0)et.flatShading=this.flatShading;if(this.fog!==void 0)et.fog=this.fog;if(Object.keys(this.userData).length>0)et.userData=this.userData;function nt(it){let st=[];for(let rt in it){let at=it[rt];delete at.metadata,st.push(at)}return st}if(tt){let it=nt(Y.textures),st=nt(Y.images);if(it.length>0)et.textures=it;if(st.length>0)et.images=st}return et}fromJSON(Y,tt){if(Y.uuid!==void 0)this.uuid=Y.uuid;if(Y.name!==void 0)this.name=Y.name;if(Y.color!==void 0&&this.color!==void 0)this.color.setHex(Y.color);if(Y.roughness!==void 0)this.roughness=Y.roughness;if(Y.metalness!==void 0)this.metalness=Y.metalness;if(Y.sheen!==void 0)this.sheen=Y.sheen;if(Y.sheenColor!==void 0)this.sheenColor=new t().setHex(Y.sheenColor);if(Y.sheenRoughness!==void 0)this.sheenRoughness=Y.sheenRoughness;if(Y.emissive!==void 0&&this.emissive!==void 0)this.emissive.setHex(Y.emissive);if(Y.specular!==void 0&&this.specular!==void 0)this.specular.setHex(Y.specular);if(Y.specularIntensity!==void 0)this.specularIntensity=Y.specularIntensity;if(Y.specularColor!==void 0&&this.specularColor!==void 0)this.specularColor.setHex(Y.specularColor);if(Y.shininess!==void 0)this.shininess=Y.shininess;if(Y.clearcoat!==void 0)this.clearcoat=Y.clearcoat;if(Y.clearcoatRoughness!==void 0)this.clearcoatRoughness=Y.clearcoatRoughness;if(Y.diffuseRoughness!==void 0)this.diffuseRoughness=Y.diffuseRoughness;if(Y.dispersion!==void 0)this.dispersion=Y.dispersion;if(Y.retroreflectivity!==void 0)this.retroreflectivity=Y.retroreflectivity;if(Y.iridescence!==void 0)this.iridescence=Y.iridescence;if(Y.iridescenceIOR!==void 0)this.iridescenceIOR=Y.iridescenceIOR;if(Y.iridescenceThicknessMinimum!==void 0)this.iridescenceThicknessMinimum=Y.iridescenceThicknessMinimum;if(Y.iridescenceThicknessMaximum!==void 0)this.iridescenceThicknessMaximum=Y.iridescenceThicknessMaximum;if(Y.iridescenceThicknessRange!==void 0)this.iridescenceThicknessMinimum=Y.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=Y.iridescenceThicknessRange[1];if(Y.transmission!==void 0)this.transmission=Y.transmission;if(Y.thickness!==void 0)this.thickness=Y.thickness;if(Y.attenuationDistance!==void 0)this.attenuationDistance=Y.attenuationDistance;if(Y.attenuationColor!==void 0&&this.attenuationColor!==void 0)this.attenuationColor.setHex(Y.attenuationColor);if(Y.anisotropy!==void 0)this.anisotropy=Y.anisotropy;if(Y.anisotropyRotation!==void 0)this.anisotropyRotation=Y.anisotropyRotation;if(Y.fog!==void 0)this.fog=Y.fog;if(Y.flatShading!==void 0)this.flatShading=Y.flatShading;if(Y.blending!==void 0)this.blending=Y.blending;if(Y.combine!==void 0)this.combine=Y.combine;if(Y.side!==void 0)this.side=Y.side;if(Y.shadowSide!==void 0)this.shadowSide=Y.shadowSide;if(Y.opacity!==void 0)this.opacity=Y.opacity;if(Y.transparent!==void 0)this.transparent=Y.transparent;if(Y.alphaTest!==void 0)this.alphaTest=Y.alphaTest;if(Y.alphaHash!==void 0)this.alphaHash=Y.alphaHash;if(Y.depthFunc!==void 0)this.depthFunc=Y.depthFunc;if(Y.depthTest!==void 0)this.depthTest=Y.depthTest;if(Y.depthWrite!==void 0)this.depthWrite=Y.depthWrite;if(Y.colorWrite!==void 0)this.colorWrite=Y.colorWrite;if(Y.clippingPlanes!==void 0)this.clippingPlanes=Y.clippingPlanes.map((et)=>new Ti().fromJSON(et));if(Y.clipIntersection!==void 0)this.clipIntersection=Y.clipIntersection;if(Y.clipShadows!==void 0)this.clipShadows=Y.clipShadows;if(Y.depthPacking!==void 0)this.depthPacking=Y.depthPacking;if(Y.blendSrc!==void 0)this.blendSrc=Y.blendSrc;if(Y.blendDst!==void 0)this.blendDst=Y.blendDst;if(Y.blendEquation!==void 0)this.blendEquation=Y.blendEquation;if(Y.blendSrcAlpha!==void 0)this.blendSrcAlpha=Y.blendSrcAlpha;if(Y.blendDstAlpha!==void 0)this.blendDstAlpha=Y.blendDstAlpha;if(Y.blendEquationAlpha!==void 0)this.blendEquationAlpha=Y.blendEquationAlpha;if(Y.blendColor!==void 0&&this.blendColor!==void 0)this.blendColor.setHex(Y.blendColor);if(Y.blendAlpha!==void 0)this.blendAlpha=Y.blendAlpha;if(Y.stencilWriteMask!==void 0)this.stencilWriteMask=Y.stencilWriteMask;if(Y.stencilFunc!==void 0)this.stencilFunc=Y.stencilFunc;if(Y.stencilRef!==void 0)this.stencilRef=Y.stencilRef;if(Y.stencilFuncMask!==void 0)this.stencilFuncMask=Y.stencilFuncMask;if(Y.stencilFail!==void 0)this.stencilFail=Y.stencilFail;if(Y.stencilZFail!==void 0)this.stencilZFail=Y.stencilZFail;if(Y.stencilZPass!==void 0)this.stencilZPass=Y.stencilZPass;if(Y.stencilWrite!==void 0)this.stencilWrite=Y.stencilWrite;if(Y.wireframe!==void 0)this.wireframe=Y.wireframe;if(Y.wireframeLinewidth!==void 0)this.wireframeLinewidth=Y.wireframeLinewidth;if(Y.wireframeLinecap!==void 0)this.wireframeLinecap=Y.wireframeLinecap;if(Y.wireframeLinejoin!==void 0)this.wireframeLinejoin=Y.wireframeLinejoin;if(Y.rotation!==void 0)this.rotation=Y.rotation;if(Y.linewidth!==void 0)this.linewidth=Y.linewidth;if(Y.linecap!==void 0)this.linecap=Y.linecap;if(Y.linejoin!==void 0)this.linejoin=Y.linejoin;if(Y.dashSize!==void 0)this.dashSize=Y.dashSize;if(Y.gapSize!==void 0)this.gapSize=Y.gapSize;if(Y.scale!==void 0)this.scale=Y.scale;if(Y.polygonOffset!==void 0)this.polygonOffset=Y.polygonOffset;if(Y.polygonOffsetFactor!==void 0)this.polygonOffsetFactor=Y.polygonOffsetFactor;if(Y.polygonOffsetUnits!==void 0)this.polygonOffsetUnits=Y.polygonOffsetUnits;if(Y.dithering!==void 0)this.dithering=Y.dithering;if(Y.alphaToCoverage!==void 0)this.alphaToCoverage=Y.alphaToCoverage;if(Y.premultipliedAlpha!==void 0)this.premultipliedAlpha=Y.premultipliedAlpha;if(Y.forceSinglePass!==void 0)this.forceSinglePass=Y.forceSinglePass;if(Y.allowOverride!==void 0)this.allowOverride=Y.allowOverride;if(Y.visible!==void 0)this.visible=Y.visible;if(Y.toneMapped!==void 0)this.toneMapped=Y.toneMapped;if(Y.userData!==void 0)this.userData=Y.userData;if(Y.vertexColors!==void 0)if(typeof Y.vertexColors==="number")this.vertexColors=Y.vertexColors>0;else this.vertexColors=Y.vertexColors;if(Y.size!==void 0)this.size=Y.size;if(Y.sizeAttenuation!==void 0)this.sizeAttenuation=Y.sizeAttenuation;if(Y.map!==void 0)this.map=tt[Y.map]||null;if(Y.matcap!==void 0)this.matcap=tt[Y.matcap]||null;if(Y.alphaMap!==void 0)this.alphaMap=tt[Y.alphaMap]||null;if(Y.bumpMap!==void 0)this.bumpMap=tt[Y.bumpMap]||null;if(Y.bumpScale!==void 0)this.bumpScale=Y.bumpScale;if(Y.normalMap!==void 0)this.normalMap=tt[Y.normalMap]||null;if(Y.normalMapType!==void 0)this.normalMapType=Y.normalMapType;if(Y.normalScale!==void 0){let et=Y.normalScale;if(Array.isArray(et)===!1)et=[et,et];this.normalScale=new n().fromArray(et)}if(Y.displacementMap!==void 0)this.displacementMap=tt[Y.displacementMap]||null;if(Y.displacementScale!==void 0)this.displacementScale=Y.displacementScale;if(Y.displacementBias!==void 0)this.displacementBias=Y.displacementBias;if(Y.roughnessMap!==void 0)this.roughnessMap=tt[Y.roughnessMap]||null;if(Y.metalnessMap!==void 0)this.metalnessMap=tt[Y.metalnessMap]||null;if(Y.emissiveMap!==void 0)this.emissiveMap=tt[Y.emissiveMap]||null;if(Y.emissiveIntensity!==void 0)this.emissiveIntensity=Y.emissiveIntensity;if(Y.specularMap!==void 0)this.specularMap=tt[Y.specularMap]||null;if(Y.specularIntensityMap!==void 0)this.specularIntensityMap=tt[Y.specularIntensityMap]||null;if(Y.specularColorMap!==void 0)this.specularColorMap=tt[Y.specularColorMap]||null;if(Y.envMap!==void 0)this.envMap=tt[Y.envMap]||null;if(Y.envMapRotation!==void 0)this.envMapRotation.fromArray(Y.envMapRotation);if(Y.envMapIntensity!==void 0)this.envMapIntensity=Y.envMapIntensity;if(Y.reflectivity!==void 0)this.reflectivity=Y.reflectivity;if(Y.refractionRatio!==void 0)this.refractionRatio=Y.refractionRatio;if(Y.lightMap!==void 0)this.lightMap=tt[Y.lightMap]||null;if(Y.lightMapIntensity!==void 0)this.lightMapIntensity=Y.lightMapIntensity;if(Y.aoMap!==void 0)this.aoMap=tt[Y.aoMap]||null;if(Y.aoMapIntensity!==void 0)this.aoMapIntensity=Y.aoMapIntensity;if(Y.gradientMap!==void 0)this.gradientMap=tt[Y.gradientMap]||null;if(Y.clearcoatMap!==void 0)this.clearcoatMap=tt[Y.clearcoatMap]||null;if(Y.clearcoatRoughnessMap!==void 0)this.clearcoatRoughnessMap=tt[Y.clearcoatRoughnessMap]||null;if(Y.clearcoatNormalMap!==void 0)this.clearcoatNormalMap=tt[Y.clearcoatNormalMap]||null;if(Y.clearcoatNormalScale!==void 0)this.clearcoatNormalScale=new n().fromArray(Y.clearcoatNormalScale);if(Y.diffuseRoughnessMap!==void 0)this.diffuseRoughnessMap=tt[Y.diffuseRoughnessMap]||null;if(Y.iridescenceMap!==void 0)this.iridescenceMap=tt[Y.iridescenceMap]||null;if(Y.iridescenceThicknessMap!==void 0)this.iridescenceThicknessMap=tt[Y.iridescenceThicknessMap]||null;if(Y.transmissionMap!==void 0)this.transmissionMap=tt[Y.transmissionMap]||null;if(Y.thicknessMap!==void 0)this.thicknessMap=tt[Y.thicknessMap]||null;if(Y.anisotropyMap!==void 0)this.anisotropyMap=tt[Y.anisotropyMap]||null;if(Y.sheenColorMap!==void 0)this.sheenColorMap=tt[Y.sheenColorMap]||null;if(Y.sheenRoughnessMap!==void 0)this.sheenRoughnessMap=tt[Y.sheenRoughnessMap]||null;return this}clone(){return new this.constructor().copy(this)}copy(Y){this.name=Y.name,this.blending=Y.blending,this.side=Y.side,this.vertexColors=Y.vertexColors,this.opacity=Y.opacity,this.transparent=Y.transparent,this.blendSrc=Y.blendSrc,this.blendDst=Y.blendDst,this.blendEquation=Y.blendEquation,this.blendSrcAlpha=Y.blendSrcAlpha,this.blendDstAlpha=Y.blendDstAlpha,this.blendEquationAlpha=Y.blendEquationAlpha,this.blendColor.copy(Y.blendColor),this.blendAlpha=Y.blendAlpha,this.depthFunc=Y.depthFunc,this.depthTest=Y.depthTest,this.depthWrite=Y.depthWrite,this.stencilWriteMask=Y.stencilWriteMask,this.stencilFunc=Y.stencilFunc,this.stencilRef=Y.stencilRef,this.stencilFuncMask=Y.stencilFuncMask,this.stencilFail=Y.stencilFail,this.stencilZFail=Y.stencilZFail,this.stencilZPass=Y.stencilZPass,this.stencilWrite=Y.stencilWrite;let tt=Y.clippingPlanes,et=null;if(tt!==null){let nt=tt.length;et=Array(nt);for(let it=0;it!==nt;++it)et[it]=tt[it].clone()}return this.clippingPlanes=et,this.clipIntersection=Y.clipIntersection,this.clipShadows=Y.clipShadows,this.shadowSide=Y.shadowSide,this.colorWrite=Y.colorWrite,this.precision=Y.precision,this.polygonOffset=Y.polygonOffset,this.polygonOffsetFactor=Y.polygonOffsetFactor,this.polygonOffsetUnits=Y.polygonOffsetUnits,this.dithering=Y.dithering,this.alphaTest=Y.alphaTest,this.alphaHash=Y.alphaHash,this.alphaToCoverage=Y.alphaToCoverage,this.premultipliedAlpha=Y.premultipliedAlpha,this.forceSinglePass=Y.forceSinglePass,this.allowOverride=Y.allowOverride,this.visible=Y.visible,this.toneMapped=Y.toneMapped,this.userData=JSON.parse(JSON.stringify(Y.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(Y){if(Y===!0)this.version++}}var Oi=new e,La=new e,Mr=new e,br=new e;class Os{constructor(Y=new e,tt=new e(0,0,-1)){this.origin=Y,this.direction=tt}set(Y,tt){return this.origin.copy(Y),this.direction.copy(tt),this}copy(Y){return this.origin.copy(Y.origin),this.direction.copy(Y.direction),this}at(Y,tt){return tt.copy(this.origin).addScaledVector(this.direction,Y)}lookAt(Y){return this.direction.copy(Y).sub(this.origin).normalize(),this}recast(Y){return this.origin.copy(this.at(Y,Oi)),this}closestPointToPoint(Y,tt){tt.subVectors(Y,this.origin);let et=tt.dot(this.direction);if(et<0)return tt.copy(this.origin);return tt.copy(this.origin).addScaledVector(this.direction,et)}distanceToPoint(Y){return Math.sqrt(this.distanceSqToPoint(Y))}distanceSqToPoint(Y){let tt=Oi.subVectors(Y,this.origin).dot(this.direction);if(tt<0)return this.origin.distanceToSquared(Y);return Oi.copy(this.origin).addScaledVector(this.direction,tt),Oi.distanceToSquared(Y)}distanceSqToSegment(Y,tt,et,nt){La.copy(Y).add(tt).multiplyScalar(0.5),Mr.copy(tt).sub(Y).normalize(),br.copy(this.origin).sub(La);let it=Y.distanceTo(tt)*0.5,st=-this.direction.dot(Mr),rt=br.dot(this.direction),at=-br.dot(Mr),ot=br.lengthSq(),lt=Math.abs(1-st*st),ct,ut,ht,ft;if(lt>0)if(ct=st*at-rt,ut=st*rt-at,ft=it*lt,ct>=0)if(ut>=-ft)if(ut<=ft){let xt=1/lt;ct*=xt,ut*=xt,ht=ct*(ct+st*ut+2*rt)+ut*(st*ct+ut+2*at)+ot}else ut=it,ct=Math.max(0,-(st*ut+rt)),ht=-ct*ct+ut*(ut+2*at)+ot;else ut=-it,ct=Math.max(0,-(st*ut+rt)),ht=-ct*ct+ut*(ut+2*at)+ot;else if(ut<=-ft)ct=Math.max(0,-(-st*it+rt)),ut=ct>0?-it:Math.min(Math.max(-it,-at),it),ht=-ct*ct+ut*(ut+2*at)+ot;else if(ut<=ft)ct=0,ut=Math.min(Math.max(-it,-at),it),ht=ut*(ut+2*at)+ot;else ct=Math.max(0,-(st*it+rt)),ut=ct>0?it:Math.min(Math.max(-it,-at),it),ht=-ct*ct+ut*(ut+2*at)+ot;else ut=st>0?-it:it,ct=Math.max(0,-(st*ut+rt)),ht=-ct*ct+ut*(ut+2*at)+ot;if(et)et.copy(this.origin).addScaledVector(this.direction,ct);if(nt)nt.copy(La).addScaledVector(Mr,ut);return ht}intersectSphere(Y,tt){if(Y.radius<0)return null;Oi.subVectors(Y.center,this.origin);let et=Oi.dot(this.direction),nt=Oi.dot(Oi)-et*et,it=Y.radius*Y.radius;if(nt>it)return null;let st=Math.sqrt(it-nt),rt=et-st,at=et+st;if(at<0)return null;if(rt<0)return this.at(at,tt);return this.at(rt,tt)}intersectsSphere(Y){if(Y.radius<0)return!1;return this.distanceSqToPoint(Y.center)<=Y.radius*Y.radius}distanceToPlane(Y){let tt=Y.normal.dot(this.direction);if(tt===0){if(Y.distanceToPoint(this.origin)===0)return 0;return null}let et=-(this.origin.dot(Y.normal)+Y.constant)/tt;return et>=0?et:null}intersectPlane(Y,tt){let et=this.distanceToPlane(Y);if(et===null)return null;return this.at(et,tt)}intersectsPlane(Y){let tt=Y.distanceToPoint(this.origin);if(tt===0)return!0;if(Y.normal.dot(this.direction)*tt<0)return!0;return!1}intersectBox(Y,tt){let et,nt,it,st,rt,at,ot=1/this.direction.x,lt=1/this.direction.y,ct=1/this.direction.z,ut=this.origin;if(ot>=0)et=(Y.min.x-ut.x)*ot,nt=(Y.max.x-ut.x)*ot;else et=(Y.max.x-ut.x)*ot,nt=(Y.min.x-ut.x)*ot;if(lt>=0)it=(Y.min.y-ut.y)*lt,st=(Y.max.y-ut.y)*lt;else it=(Y.max.y-ut.y)*lt,st=(Y.min.y-ut.y)*lt;if(et>st||it>nt)return null;if(it>et||isNaN(et))et=it;if(st<nt||isNaN(nt))nt=st;if(ct>=0)rt=(Y.min.z-ut.z)*ct,at=(Y.max.z-ut.z)*ct;else rt=(Y.max.z-ut.z)*ct,at=(Y.min.z-ut.z)*ct;if(et>at||rt>nt)return null;if(rt>et||et!==et)et=rt;if(at<nt||nt!==nt)nt=at;if(nt<0)return null;return this.at(et>=0?et:nt,tt)}intersectsBox(Y){return this.intersectBox(Y,Oi)!==null}intersectTriangle(Y,tt,et,nt,it){let st=this.origin,rt=this.direction,{x:at,y:ot,z:lt}=rt,ct=Y.x-st.x,ut=Y.y-st.y,ht=Y.z-st.z,ft=tt.x-st.x,xt=tt.y-st.y,St=tt.z-st.z,dt=et.x-st.x,pt=et.y-st.y,bt=et.z-st.z,Tt=Math.abs(at),Mt=Math.abs(ot),Et=Math.abs(lt),Ct,mt,vt,Lt,Gt,Pt,Bt,$t,wt,Xt,Yt,Ft;if(Tt>=Mt&&Tt>=Et)if(vt=at,Pt=ct,wt=ft,Ft=dt,at>=0)Ct=ot,mt=lt,Lt=ut,Gt=ht,Bt=xt,$t=St,Xt=pt,Yt=bt;else Ct=lt,mt=ot,Lt=ht,Gt=ut,Bt=St,$t=xt,Xt=bt,Yt=pt;else if(Mt>=Et)if(vt=ot,Pt=ut,wt=xt,Ft=pt,ot>=0)Ct=lt,mt=at,Lt=ht,Gt=ct,Bt=St,$t=ft,Xt=bt,Yt=dt;else Ct=at,mt=lt,Lt=ct,Gt=ht,Bt=ft,$t=St,Xt=dt,Yt=bt;else if(vt=lt,Pt=ht,wt=St,Ft=bt,lt>=0)Ct=at,mt=ot,Lt=ct,Gt=ut,Bt=ft,$t=xt,Xt=dt,Yt=pt;else Ct=ot,mt=at,Lt=ut,Gt=ct,Bt=xt,$t=ft,Xt=pt,Yt=dt;if(vt===0)return null;let Ve=Ct/vt,Ht=mt/vt,Jt=1/vt,Ge=Lt-Ve*Pt,on=Gt-Ht*Pt,qt=Bt-Ve*wt,jt=$t-Ht*wt,rn=Xt-Ve*Ft,fn=Yt-Ht*Ft,pn=rn*jt-fn*qt,an=Ge*fn-on*rn,In=qt*on-jt*Ge;if(nt){if(pn<0||an<0||In<0)return null}else if((pn<0||an<0||In<0)&&(pn>0||an>0||In>0))return null;let bn=pn+an+In;if(bn===0)return null;let yn=Jt*(pn*Pt+an*wt+In*Ft);if(bn>0?yn<0:yn>0)return null;return this.at(yn/bn,it)}applyMatrix4(Y){return this.origin.applyMatrix4(Y),this.direction.transformDirection(Y),this}equals(Y){return Y.origin.equals(this.origin)&&Y.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class y extends E{constructor(Y){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(Y)}copy(Y){return super.copy(Y),this.color.copy(Y.color),this.map=Y.map,this.lightMap=Y.lightMap,this.lightMapIntensity=Y.lightMapIntensity,this.aoMap=Y.aoMap,this.aoMapIntensity=Y.aoMapIntensity,this.specularMap=Y.specularMap,this.alphaMap=Y.alphaMap,this.envMap=Y.envMap,this.envMapRotation.copy(Y.envMapRotation),this.combine=Y.combine,this.reflectivity=Y.reflectivity,this.refractionRatio=Y.refractionRatio,this.wireframe=Y.wireframe,this.wireframeLinewidth=Y.wireframeLinewidth,this.wireframeLinecap=Y.wireframeLinecap,this.wireframeLinejoin=Y.wireframeLinejoin,this.fog=Y.fog,this}}var Rl=new i,os=new Os,Tr=new w,Cl=new e,Er=new e,Ar=new e,wr=new e,Na=new e,Rr=new e,Il=new e,Cr=new e;class o extends l{constructor(Y=new v,tt=new y){super();this.isMesh=!0,this.type="Mesh",this.geometry=Y,this.material=tt,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(Y,tt){if(super.copy(Y,tt),Y.morphTargetInfluences!==void 0)this.morphTargetInfluences=Y.morphTargetInfluences.slice();else this.morphTargetInfluences=void 0;if(Y.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},Y.morphTargetDictionary);else this.morphTargetDictionary=void 0;return this.material=Array.isArray(Y.material)?Y.material.slice():Y.material,this.geometry=Y.geometry,this}updateMorphTargets(){let tt=this.geometry.morphAttributes,et=Object.keys(tt);if(et.length>0){let nt=tt[et[0]];if(nt!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let it=0,st=nt.length;it<st;it++){let rt=nt[it].name||String(it);this.morphTargetInfluences.push(0),this.morphTargetDictionary[rt]=it}}}}getVertexPosition(Y,tt){let et=this.geometry,nt=et.attributes.position,it=et.morphAttributes.position,st=et.morphTargetsRelative;tt.fromBufferAttribute(nt,Y);let rt=this.morphTargetInfluences;if(it&&rt){Rr.set(0,0,0);for(let at=0,ot=it.length;at<ot;at++){let lt=rt[at],ct=it[at];if(lt===0)continue;if(Na.fromBufferAttribute(ct,Y),st)Rr.addScaledVector(Na,lt);else Rr.addScaledVector(Na.sub(tt),lt)}tt.add(Rr)}return tt}intersectsFrustum(Y){return Y.intersectsObject(this)}raycast(Y,tt){let et=this.geometry,nt=this.material,it=this.matrixWorld;if(nt===void 0)return;if(et.boundingSphere===null)et.computeBoundingSphere();if(Tr.copy(et.boundingSphere),Tr.applyMatrix4(it),os.copy(Y.ray).recast(Y.near),Tr.containsPoint(os.origin)===!1){if(os.intersectSphere(Tr,Cl)===null)return;if(os.origin.distanceToSquared(Cl)>(Y.far-Y.near)**2)return}if(Rl.copy(it).invert(),os.copy(Y.ray).applyMatrix4(Rl),et.boundingBox!==null){if(os.intersectsBox(et.boundingBox)===!1)return}this._computeIntersections(Y,tt,os)}_computeIntersections(Y,tt,et){let nt,it=this.geometry,st=this.material,rt=it.index,at=it.attributes.position,ot=it.attributes.uv,lt=it.attributes.uv1,ct=it.attributes.normal,{groups:ut,drawRange:ht}=it;if(rt!==null)if(Array.isArray(st))for(let ft=0,xt=ut.length;ft<xt;ft++){let St=ut[ft],dt=st[St.materialIndex],pt=Math.max(St.start,ht.start),bt=Math.min(rt.count,Math.min(St.start+St.count,ht.start+ht.count));for(let Tt=pt,Mt=bt;Tt<Mt;Tt+=3){let Et=rt.getX(Tt),Ct=rt.getX(Tt+1),mt=rt.getX(Tt+2);if(nt=Ir(this,dt,Y,et,ot,lt,ct,Et,Ct,mt),nt)nt.faceIndex=Math.floor(Tt/3),nt.face.materialIndex=St.materialIndex,tt.push(nt)}}else{let ft=Math.max(0,ht.start),xt=Math.min(rt.count,ht.start+ht.count);for(let St=ft,dt=xt;St<dt;St+=3){let pt=rt.getX(St),bt=rt.getX(St+1),Tt=rt.getX(St+2);if(nt=Ir(this,st,Y,et,ot,lt,ct,pt,bt,Tt),nt)nt.faceIndex=Math.floor(St/3),tt.push(nt)}}else if(at!==void 0)if(Array.isArray(st))for(let ft=0,xt=ut.length;ft<xt;ft++){let St=ut[ft],dt=st[St.materialIndex],pt=Math.max(St.start,ht.start),bt=Math.min(at.count,Math.min(St.start+St.count,ht.start+ht.count));for(let Tt=pt,Mt=bt;Tt<Mt;Tt+=3){let Et=Tt,Ct=Tt+1,mt=Tt+2;if(nt=Ir(this,dt,Y,et,ot,lt,ct,Et,Ct,mt),nt)nt.faceIndex=Math.floor(Tt/3),nt.face.materialIndex=St.materialIndex,tt.push(nt)}}else{let ft=Math.max(0,ht.start),xt=Math.min(at.count,ht.start+ht.count);for(let St=ft,dt=xt;St<dt;St+=3){let pt=St,bt=St+1,Tt=St+2;if(nt=Ir(this,st,Y,et,ot,lt,ct,pt,bt,Tt),nt)nt.faceIndex=Math.floor(St/3),tt.push(nt)}}}}function Ru(Y,tt,et,nt,it,st,rt,at){let ot;if(tt.side===1)ot=nt.intersectTriangle(rt,st,it,!0,at);else ot=nt.intersectTriangle(it,st,rt,tt.side===0,at);if(ot===null)return null;Cr.copy(at),Cr.applyMatrix4(Y.matrixWorld);let lt=et.ray.origin.distanceTo(Cr);if(lt<et.near||lt>et.far)return null;return{distance:lt,point:Cr.clone(),object:Y}}function Ir(Y,tt,et,nt,it,st,rt,at,ot,lt){Y.getVertexPosition(at,Er),Y.getVertexPosition(ot,Ar),Y.getVertexPosition(lt,wr);let ct=Ru(Y,tt,et,nt,Er,Ar,wr,Il);if(ct){let ut=new e;if(mi.getBarycoord(Il,Er,Ar,wr,ut),it)ct.uv=mi.getInterpolatedAttribute(it,at,ot,lt,ut,new n);if(st)ct.uv1=mi.getInterpolatedAttribute(st,at,ot,lt,ut,new n);if(rt){if(ct.normal=mi.getInterpolatedAttribute(rt,at,ot,lt,ut,new e),ct.normal.dot(nt.direction)>0)ct.normal.multiplyScalar(-1)}let ht={a:at,b:ot,c:lt,normal:new e,materialIndex:0};mi.getNormal(Er,Ar,wr,ht.normal),ct.face=ht,ct.barycoord=ut}return ct}var Xs=new Nn,Pl=new Nn,Ll=new Nn,Cu=new Nn,Nl=new i,Pr=new e,Da=new w,Dl=new i,Ua=new Os;class Ie extends o{constructor(Y,tt){super(Y,tt);this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new i,this.bindMatrixInverse=new i,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let Y=this.geometry;if(this.boundingBox===null)this.boundingBox=new A;this.boundingBox.makeEmpty();let tt=Y.getAttribute("position");for(let et=0;et<tt.count;et++)this.getVertexPosition(et,Pr),this.boundingBox.expandByPoint(Pr)}computeBoundingSphere(){let Y=this.geometry;if(this.boundingSphere===null)this.boundingSphere=new w;this.boundingSphere.makeEmpty();let tt=Y.getAttribute("position");for(let et=0;et<tt.count;et++)this.getVertexPosition(et,Pr),this.boundingSphere.expandByPoint(Pr)}copy(Y,tt){return super.copy(Y,tt),this.bindMode=Y.bindMode,this.bindMatrix.copy(Y.bindMatrix),this.bindMatrixInverse.copy(Y.bindMatrixInverse),this.skeleton=Y.skeleton,this.boundingBox=Y.boundingBox!==null?Y.boundingBox.clone():null,this.boundingSphere=Y.boundingSphere!==null?Y.boundingSphere.clone():null,this}raycast(Y,tt){let et=this.material,nt=this.matrixWorld;if(et===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(Da.copy(this.boundingSphere),Da.applyMatrix4(nt),Y.ray.intersectsSphere(Da)===!1)return;if(Dl.copy(nt).invert(),Ua.copy(Y.ray).applyMatrix4(Dl),this.boundingBox!==null){if(Ua.intersectsBox(this.boundingBox)===!1)return}this._computeIntersections(Y,tt,Ua)}getVertexPosition(Y,tt){return super.getVertexPosition(Y,tt),this.applyBoneTransform(Y,tt),tt}bind(Y,tt){if(this.skeleton=Y,tt===void 0)this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),tt=this.matrixWorld;this.bindMatrix.copy(tt),this.bindMatrixInverse.copy(tt).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let Y=new Nn,tt=this.geometry.attributes.skinWeight;for(let et=0,nt=tt.count;et<nt;et++){Y.fromBufferAttribute(tt,et);let it=1/Y.manhattanLength();if(it!==1/0)Y.multiplyScalar(it);else Y.set(1,0,0,0);tt.setXYZW(et,Y.x,Y.y,Y.z,Y.w)}}updateMatrixWorld(Y){if(super.updateMatrixWorld(Y),this.bindMode==="attached")this.bindMatrixInverse.copy(this.matrixWorld).invert();else if(this.bindMode==="detached")this.bindMatrixInverse.copy(this.bindMatrix).invert();else hn("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(Y,tt){let et=this.skeleton,nt=this.geometry;if(Pl.fromBufferAttribute(nt.attributes.skinIndex,Y),Ll.fromBufferAttribute(nt.attributes.skinWeight,Y),tt.isVector4)Xs.copy(tt),tt.set(0,0,0,0);else Xs.set(tt.x,tt.y,tt.z,1),tt.set(0,0,0);Xs.applyMatrix4(this.bindMatrix);for(let it=0;it<4;it++){let st=Ll.getComponent(it);if(st!==0){let rt=Pl.getComponent(it);Nl.multiplyMatrices(et.bones[rt].matrixWorld,et.boneInverses[rt]),tt.addScaledVector(Cu.copy(Xs).applyMatrix4(Nl),st)}}if(tt.isVector4)tt.w=Xs.w;return tt.applyMatrix4(this.bindMatrixInverse)}}class ve extends l{constructor(){super();this.isBone=!0,this.type="Bone"}}class rr extends h{constructor(Y=null,tt=1,et=1,nt,it,st,rt,at,ot=1003,lt=1003,ct,ut){super(null,st,rt,at,ot,lt,nt,it,ct,ut);this.isDataTexture=!0,this.image={data:Y,width:tt,height:et},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}var Ul=new i,Iu=new i;class ye{constructor(Y=[],tt=[]){this.uuid=Ri(),this.bones=Y.slice(0),this.boneInverses=tt,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let Y=this.bones,tt=this.boneInverses;if(this.boneMatrices=new Float32Array(Y.length*16),tt.length===0)this.calculateInverses();else if(Y.length!==tt.length){hn("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let et=0,nt=this.bones.length;et<nt;et++)this.boneInverses.push(new i)}}calculateInverses(){this.boneInverses.length=0;for(let Y=0,tt=this.bones.length;Y<tt;Y++){let et=new i;if(this.bones[Y])et.copy(this.bones[Y].matrixWorld).invert();this.boneInverses.push(et)}}pose(){for(let Y=0,tt=this.bones.length;Y<tt;Y++){let et=this.bones[Y];if(et)et.matrixWorld.copy(this.boneInverses[Y]).invert()}for(let Y=0,tt=this.bones.length;Y<tt;Y++){let et=this.bones[Y];if(et){if(et.parent&&et.parent.isBone)et.matrix.copy(et.parent.matrixWorld).invert(),et.matrix.multiply(et.matrixWorld);else et.matrix.copy(et.matrixWorld);et.matrix.decompose(et.position,et.quaternion,et.scale)}}}update(){let Y=this.bones,tt=this.boneInverses,et=this.boneMatrices,nt=this.boneTexture;for(let it=0,st=Y.length;it<st;it++){let rt=Y[it]?Y[it].matrixWorld:Iu;Ul.multiplyMatrices(rt,tt[it]),Ul.toArray(et,it*16)}if(nt!==null)nt.needsUpdate=!0}clone(){return new ye(this.bones,this.boneInverses)}computeBoneTexture(){let Y=Math.sqrt(this.bones.length*4);Y=Math.ceil(Y/4)*4,Y=Math.max(Y,4);let tt=new Float32Array(Y*Y*4);tt.set(this.boneMatrices);let et=new rr(tt,Y,Y,1023,1015);return et.needsUpdate=!0,this.boneMatrices=tt,this.boneTexture=et,this}getBoneByName(Y){for(let tt=0,et=this.bones.length;tt<et;tt++){let nt=this.bones[tt];if(nt.name===Y)return nt}return}dispose(){if(this.boneTexture!==null)this.boneTexture.dispose(),this.boneTexture=null;if(this.previousBoneTexture!==null)this.previousBoneTexture.dispose(),this.previousBoneTexture=null}fromJSON(Y,tt){this.uuid=Y.uuid;for(let et=0,nt=Y.bones.length;et<nt;et++){let it=Y.bones[et],st=tt[it];if(st===void 0)hn("Skeleton: No bone found with UUID:",it),st=new ve;this.bones.push(st),this.boneInverses.push(new i().fromArray(Y.boneInverses[et]))}return this.init(),this}toJSON(){let Y={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};Y.uuid=this.uuid;let tt=this.bones,et=this.boneInverses;for(let nt=0,it=tt.length;nt<it;nt++){let st=tt[nt];Y.bones.push(st.uuid);let rt=et[nt];Y.boneInverses.push(rt.toArray())}return Y}}class V extends T{constructor(Y,tt,et,nt=1){super(Y,tt,et);this.isInstancedBufferAttribute=!0,this.meshPerAttribute=nt}copy(Y){return super.copy(Y),this.meshPerAttribute=Y.meshPerAttribute,this}toJSON(){let Y=super.toJSON();return Y.meshPerAttribute=this.meshPerAttribute,Y.isInstancedBufferAttribute=!0,Y}}var As=new i,Fl=new i,Lr=[],Ol=new A,Pu=new i,qs=new o,Ys=new w;class se extends o{constructor(Y,tt,et){super(Y,tt);this.isInstancedMesh=!0,this.instanceMatrix=new V(new Float32Array(et*16),16),this.instanceColor=null,this.morphTexture=null,this.count=et,this.boundingBox=null,this.boundingSphere=null;for(let nt=0;nt<et;nt++)this.setMatrixAt(nt,Pu)}computeBoundingBox(){let Y=this.geometry,tt=this.count;if(this.boundingBox===null)this.boundingBox=new A;if(Y.boundingBox===null)Y.computeBoundingBox();this.boundingBox.makeEmpty();for(let et=0;et<tt;et++)this.getMatrixAt(et,As),Ol.copy(Y.boundingBox).applyMatrix4(As),this.boundingBox.union(Ol)}computeBoundingSphere(){let Y=this.geometry,tt=this.count;if(this.boundingSphere===null)this.boundingSphere=new w;if(Y.boundingSphere===null)Y.computeBoundingSphere();this.boundingSphere.makeEmpty();for(let et=0;et<tt;et++)this.getMatrixAt(et,As),Ys.copy(Y.boundingSphere).applyMatrix4(As),this.boundingSphere.union(Ys)}copy(Y,tt){return super.copy(Y,tt),this.instanceMatrix.copy(Y.instanceMatrix),this.morphTexture=Y.morphTexture!==null?Y.morphTexture.clone():null,this.instanceColor=Y.instanceColor!==null?Y.instanceColor.clone():null,this.count=Y.count,this.boundingBox=Y.boundingBox!==null?Y.boundingBox.clone():null,this.boundingSphere=Y.boundingSphere!==null?Y.boundingSphere.clone():null,this}getColorAt(Y,tt){if(this.instanceColor===null)return tt.setRGB(1,1,1);else return tt.fromArray(this.instanceColor.array,Y*3)}getMatrixAt(Y,tt){return tt.fromArray(this.instanceMatrix.array,Y*16)}getMorphAt(Y,tt){let et=tt.morphTargetInfluences,nt=this.morphTexture.source.data.data,it=et.length+1,st=Y*it+1;for(let rt=0;rt<et.length;rt++)et[rt]=nt[st+rt]}raycast(Y,tt){let et=this.matrixWorld,nt=this.count;if(qs.geometry=this.geometry,qs.material=this.material,qs.material===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(Ys.copy(this.boundingSphere),Ys.applyMatrix4(et),Y.ray.intersectsSphere(Ys)===!1)return;for(let it=0;it<nt;it++){this.getMatrixAt(it,As),Fl.multiplyMatrices(et,As),qs.matrixWorld=Fl,qs.raycast(Y,Lr);for(let st=0,rt=Lr.length;st<rt;st++){let at=Lr[st];at.instanceId=it,at.object=this,tt.push(at)}Lr.length=0}}setColorAt(Y,tt){if(this.instanceColor===null)this.instanceColor=new V(new Float32Array(this.instanceMatrix.count*3).fill(1),3);return tt.toArray(this.instanceColor.array,Y*3),this}setMatrixAt(Y,tt){return tt.toArray(this.instanceMatrix.array,Y*16),this}setMorphAt(Y,tt){let et=tt.morphTargetInfluences,nt=et.length+1;if(this.morphTexture===null)this.morphTexture=new rr(new Float32Array(nt*this.count),nt,this.count,1028,1015);let it=this.morphTexture.source.data.data,st=0;for(let ot=0;ot<et.length;ot++)st+=et[ot];let rt=this.geometry.morphTargetsRelative?1:1-st,at=nt*Y;return it[at]=rt,it.set(et,at+1),this}updateMorphTargets(){}dispose(){if(super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null)this.instanceColor.dispose();if(this.morphTexture!==null)this.morphTexture.dispose(),this.morphTexture=null}}var ls=new w,Lu=new n(0.5,0.5),Nr=new e;class us{constructor(Y=new Ti,tt=new Ti,et=new Ti,nt=new Ti,it=new Ti,st=new Ti){this.planes=[Y,tt,et,nt,it,st]}set(Y,tt,et,nt,it,st){let rt=this.planes;return rt[0].copy(Y),rt[1].copy(tt),rt[2].copy(et),rt[3].copy(nt),rt[4].copy(it),rt[5].copy(st),this}copy(Y){let tt=this.planes;for(let et=0;et<6;et++)tt[et].copy(Y.planes[et]);return this}setFromProjectionMatrix(Y,tt=2000,et=!1){let nt=this.planes,it=Y.elements,st=it[0],rt=it[1],at=it[2],ot=it[3],lt=it[4],ct=it[5],ut=it[6],ht=it[7],ft=it[8],xt=it[9],St=it[10],dt=it[11],pt=it[12],bt=it[13],Tt=it[14],Mt=it[15];if(nt[0].setComponents(ot-st,ht-lt,dt-ft,Mt-pt).normalize(),nt[1].setComponents(ot+st,ht+lt,dt+ft,Mt+pt).normalize(),nt[2].setComponents(ot+rt,ht+ct,dt+xt,Mt+bt).normalize(),nt[3].setComponents(ot-rt,ht-ct,dt-xt,Mt-bt).normalize(),et)nt[4].setComponents(at,ut,St,Tt).normalize(),nt[5].setComponents(ot-at,ht-ut,dt-St,Mt-Tt).normalize();else if(nt[4].setComponents(ot-at,ht-ut,dt-St,Mt-Tt).normalize(),tt===2000)nt[5].setComponents(ot+at,ht+ut,dt+St,Mt+Tt).normalize();else if(tt===2001)nt[5].setComponents(at,ut,St,Tt).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+tt);return this}intersectsObject(Y){if(Y.boundingSphere!==void 0){if(Y.boundingSphere===null)Y.computeBoundingSphere();ls.copy(Y.boundingSphere).applyMatrix4(Y.matrixWorld)}else{let tt=Y.geometry;if(tt.boundingSphere===null)tt.computeBoundingSphere();ls.copy(tt.boundingSphere).applyMatrix4(Y.matrixWorld)}return this.intersectsSphere(ls)}intersectsSprite(Y){ls.center.set(0,0,0);let tt=Lu.distanceTo(Y.center);return ls.radius=0.7071067811865476+tt,ls.applyMatrix4(Y.matrixWorld),this.intersectsSphere(ls)}intersectsSphere(Y){let tt=this.planes,et=Y.center,nt=-Y.radius;for(let it=0;it<6;it++)if(tt[it].distanceToPoint(et)<nt)return!1;return!0}intersectsBox(Y){let tt=this.planes;for(let et=0;et<6;et++){let nt=tt[et];if(Nr.x=nt.normal.x>0?Y.max.x:Y.min.x,Nr.y=nt.normal.y>0?Y.max.y:Y.min.y,Nr.z=nt.normal.z>0?Y.max.z:Y.min.z,nt.distanceToPoint(Nr)<0)return!1}return!0}containsPoint(Y){let tt=this.planes;for(let et=0;et<6;et++)if(tt[et].distanceToPoint(Y)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}var Bl=new i;class ea{constructor(){this.coordinateSystem=2000,this._frustums=[],this._count=0}setFromArrayCamera(Y){let tt=Y.cameras,et=this._frustums;for(let nt=0;nt<tt.length;nt++){let it=tt[nt];if(Bl.multiplyMatrices(it.projectionMatrix,it.matrixWorldInverse),et[nt]===void 0)et[nt]=new us;et[nt].setFromProjectionMatrix(Bl,it.coordinateSystem,it.reversedDepth)}return this._count=tt.length,this}getFrustum(Y){return this._frustums[Y]}intersectsObject(Y){let tt=this._frustums;for(let et=0;et<this._count;et++)if(tt[et].intersectsObject(Y))return!0;return!1}intersectsSprite(Y){let tt=this._frustums;for(let et=0;et<this._count;et++)if(tt[et].intersectsSprite(Y))return!0;return!1}intersectsSphere(Y){let tt=this._frustums;for(let et=0;et<this._count;et++)if(tt[et].intersectsSphere(Y))return!0;return!1}intersectsBox(Y){let tt=this._frustums;for(let et=0;et<this._count;et++)if(tt[et].intersectsBox(Y))return!0;return!1}containsPoint(Y){let tt=this._frustums;for(let et=0;et<this._count;et++)if(tt[et].containsPoint(Y))return!0;return!1}copy(Y){this.coordinateSystem=Y.coordinateSystem;let tt=this._frustums,et=Y._frustums;for(let nt=0;nt<Y._count;nt++){if(tt[nt]===void 0)tt[nt]=new us;tt[nt].copy(et[nt])}return this._count=Y._count,this}clone(){return new ea().copy(this)}}class Se extends E{constructor(Y){super();this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new t(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(Y)}copy(Y){return super.copy(Y),this.color.copy(Y.color),this.map=Y.map,this.linewidth=Y.linewidth,this.linecap=Y.linecap,this.linejoin=Y.linejoin,this.fog=Y.fog,this}}var Gr=new e,kr=new e,zl=new i,Zs=new Os,Dr=new w,Fa=new e,Gl=new e;class re extends l{constructor(Y=new v,tt=new Se){super();this.isLine=!0,this.type="Line",this.geometry=Y,this.material=tt,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(Y,tt){if(super.copy(Y,tt),Y.morphTargetInfluences!==void 0)this.morphTargetInfluences=Y.morphTargetInfluences.slice();else this.morphTargetInfluences=void 0;if(Y.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},Y.morphTargetDictionary);else this.morphTargetDictionary=void 0;return this.material=Array.isArray(Y.material)?Y.material.slice():Y.material,this.geometry=Y.geometry,this}computeLineDistances(){let Y=this.geometry;if(Y.index===null){let tt=Y.attributes.position,et=[0];for(let nt=1,it=tt.count;nt<it;nt++)Gr.fromBufferAttribute(tt,nt-1),kr.fromBufferAttribute(tt,nt),et[nt]=et[nt-1],et[nt]+=Gr.distanceTo(kr);Y.setAttribute("lineDistance",new f(et,1))}else hn("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(Y){return Y.intersectsObject(this)}raycast(Y,tt){let et=this.geometry,nt=this.matrixWorld,it=Y.params.Line.threshold,st=et.drawRange;if(et.boundingSphere===null)et.computeBoundingSphere();if(Dr.copy(et.boundingSphere),Dr.applyMatrix4(nt),Dr.radius+=it,Y.ray.intersectsSphere(Dr)===!1)return;zl.copy(nt).invert(),Zs.copy(Y.ray).applyMatrix4(zl);let rt=it/((this.scale.x+this.scale.y+this.scale.z)/3),at=rt*rt,ot=this.isLineSegments?2:1,lt=et.index,ut=et.attributes.position;if(lt!==null){let ht=Math.max(0,st.start),ft=Math.min(lt.count,st.start+st.count);for(let xt=ht,St=ft-1;xt<St;xt+=ot){let dt=lt.getX(xt),pt=lt.getX(xt+1),bt=Ur(this,Y,Zs,at,dt,pt,xt);if(bt)tt.push(bt)}if(this.isLineLoop){let xt=lt.getX(ft-1),St=lt.getX(ht),dt=Ur(this,Y,Zs,at,xt,St,ft-1);if(dt)tt.push(dt)}}else{let ht=Math.max(0,st.start),ft=Math.min(ut.count,st.start+st.count);for(let xt=ht,St=ft-1;xt<St;xt+=ot){let dt=Ur(this,Y,Zs,at,xt,xt+1,xt);if(dt)tt.push(dt)}if(this.isLineLoop){let xt=Ur(this,Y,Zs,at,ft-1,ht,ft-1);if(xt)tt.push(xt)}}}updateMorphTargets(){let tt=this.geometry.morphAttributes,et=Object.keys(tt);if(et.length>0){let nt=tt[et[0]];if(nt!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let it=0,st=nt.length;it<st;it++){let rt=nt[it].name||String(it);this.morphTargetInfluences.push(0),this.morphTargetDictionary[rt]=it}}}}}function Ur(Y,tt,et,nt,it,st,rt){let at=Y.geometry.attributes.position;if(Gr.fromBufferAttribute(at,it),kr.fromBufferAttribute(at,st),et.distanceSqToSegment(Gr,kr,Fa,Gl)>nt)return;Fa.applyMatrix4(Y.matrixWorld);let lt=tt.ray.origin.distanceTo(Fa);if(lt<tt.near||lt>tt.far)return;return{distance:lt,point:Gl.clone().applyMatrix4(Y.matrixWorld),index:rt,face:null,faceIndex:null,barycoord:null,object:Y}}var kl=new e,Hl=new e;class Pe extends re{constructor(Y,tt){super(Y,tt);this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let Y=this.geometry;if(Y.index===null){let tt=Y.attributes.position,et=[];for(let nt=0,it=tt.count;nt<it;nt+=2)kl.fromBufferAttribute(tt,nt),Hl.fromBufferAttribute(tt,nt+1),et[nt]=nt===0?0:et[nt-1],et[nt+1]=et[nt]+kl.distanceTo(Hl);Y.setAttribute("lineDistance",new f(et,1))}else hn("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Le extends re{constructor(Y,tt){super(Y,tt);this.isLineLoop=!0,this.type="LineLoop"}}class Me extends E{constructor(Y){super();this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new t(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(Y)}copy(Y){return super.copy(Y),this.color.copy(Y.color),this.map=Y.map,this.alphaMap=Y.alphaMap,this.size=Y.size,this.sizeAttenuation=Y.sizeAttenuation,this.fog=Y.fog,this}}var Wl=new i,za=new Os,Fr=new w,Or=new e;class Ne extends l{constructor(Y=new v,tt=new Me){super();this.isPoints=!0,this.type="Points",this.geometry=Y,this.material=tt,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(Y,tt){if(super.copy(Y,tt),Y.morphTargetInfluences!==void 0)this.morphTargetInfluences=Y.morphTargetInfluences.slice();else this.morphTargetInfluences=void 0;if(Y.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},Y.morphTargetDictionary);else this.morphTargetDictionary=void 0;return this.material=Array.isArray(Y.material)?Y.material.slice():Y.material,this.geometry=Y.geometry,this}intersectsFrustum(Y){return Y.intersectsObject(this)}raycast(Y,tt){let et=this.geometry,nt=this.matrixWorld,it=Y.params.Points.threshold,st=et.drawRange;if(et.boundingSphere===null)et.computeBoundingSphere();if(Fr.copy(et.boundingSphere),Fr.applyMatrix4(nt),Fr.radius+=it,Y.ray.intersectsSphere(Fr)===!1)return;Wl.copy(nt).invert(),za.copy(Y.ray).applyMatrix4(Wl);let rt=it/((this.scale.x+this.scale.y+this.scale.z)/3),at=rt*rt,ot=et.index,ct=et.attributes.position;if(ot!==null){let ut=Math.max(0,st.start),ht=Math.min(ot.count,st.start+st.count);for(let ft=ut,xt=ht;ft<xt;ft++){let St=ot.getX(ft);Or.fromBufferAttribute(ct,St),Vl(Or,St,at,nt,Y,tt,this)}}else{let ut=Math.max(0,st.start),ht=Math.min(ct.count,st.start+st.count);for(let ft=ut,xt=ht;ft<xt;ft++)Or.fromBufferAttribute(ct,ft),Vl(Or,ft,at,nt,Y,tt,this)}}updateMorphTargets(){let tt=this.geometry.morphAttributes,et=Object.keys(tt);if(et.length>0){let nt=tt[et[0]];if(nt!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let it=0,st=nt.length;it<st;it++){let rt=nt[it].name||String(it);this.morphTargetInfluences.push(0),this.morphTargetDictionary[rt]=it}}}}}function Vl(Y,tt,et,nt,it,st,rt){let at=za.distanceSqToPoint(Y);if(at<et){let ot=new e;za.closestPointToPoint(Y,ot),ot.applyMatrix4(nt);let lt=it.ray.origin.distanceTo(ot);if(lt<it.near||lt>it.far)return;st.push({distance:lt,distanceToRay:Math.sqrt(at),point:ot,index:tt,face:null,faceIndex:null,barycoord:null,object:rt})}}class na extends h{constructor(Y=[],tt=301,et,nt,it,st,rt,at,ot,lt){super(Y,tt,et,nt,it,st,rt,at,ot,lt);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(Y){this.image=Y}}class De extends h{constructor(Y,tt,et,nt,it,st,rt,at,ot){super(Y,tt,et,nt,it,st,rt,at,ot);this.isCanvasTexture=!0,this.needsUpdate=!0}}class Qi extends h{constructor(Y,tt,et=1014,nt,it,st,rt=1003,at=1003,ot,lt=1026,ct=1){if(lt!==1026&&lt!==1027)throw Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let ut={width:Y,height:tt,depth:ct};super(ut,nt,it,st,rt,at,lt,et,ot);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(Y){return super.copy(Y),this.source=new ir(Object.assign({},Y.image)),this.compareFunction=Y.compareFunction,this}toJSON(Y){let tt=super.toJSON(Y);return tt.compareFunction=this.compareFunction,tt}}class ia extends Qi{constructor(Y,tt=1014,et=301,nt,it,st=1003,rt=1003,at,ot=1026){let lt={width:Y,height:Y,depth:1},ct=[lt,lt,lt,lt,lt,lt];super(Y,Y,tt,et,nt,it,st,rt,at,ot);this.image=ct,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(Y){this.image=Y}}class sa extends h{constructor(Y=null){super();this.sourceTexture=Y,this.isExternalTexture=!0}copy(Y){return super.copy(Y),this.sourceTexture=Y.sourceTexture,this}}class ji extends v{constructor(Y=1,tt=1,et=1,nt=1,it=1,st=1){super();this.type="BoxGeometry",this.parameters={width:Y,height:tt,depth:et,widthSegments:nt,heightSegments:it,depthSegments:st};let rt=this;nt=Math.floor(nt),it=Math.floor(it),st=Math.floor(st);let at=[],ot=[],lt=[],ct=[],ut=0,ht=0;ft("z","y","x",-1,-1,et,tt,Y,st,it,0),ft("z","y","x",1,-1,et,tt,-Y,st,it,1),ft("x","z","y",1,1,Y,et,tt,nt,st,2),ft("x","z","y",1,-1,Y,et,-tt,nt,st,3),ft("x","y","z",1,-1,Y,tt,et,nt,it,4),ft("x","y","z",-1,-1,Y,tt,-et,nt,it,5),this.setIndex(at),this.setAttribute("position",new f(ot,3)),this.setAttribute("normal",new f(lt,3)),this.setAttribute("uv",new f(ct,2));function ft(xt,St,dt,pt,bt,Tt,Mt,Et,Ct,mt,vt){let Lt=Tt/Ct,Gt=Mt/mt,Pt=Tt/2,Bt=Mt/2,$t=Et/2,wt=Ct+1,Xt=mt+1,Yt=0,Ft=0,Ve=new e;for(let Ht=0;Ht<Xt;Ht++){let Jt=Ht*Gt-Bt;for(let Ge=0;Ge<wt;Ge++){let on=Ge*Lt-Pt;Ve[xt]=on*pt,Ve[St]=Jt*bt,Ve[dt]=$t,ot.push(Ve.x,Ve.y,Ve.z),Ve[xt]=0,Ve[St]=0,Ve[dt]=Et>0?1:-1,lt.push(Ve.x,Ve.y,Ve.z),ct.push(Ge/Ct),ct.push(1-Ht/mt),Yt+=1}}for(let Ht=0;Ht<mt;Ht++)for(let Jt=0;Jt<Ct;Jt++){let Ge=ut+Jt+wt*Ht,on=ut+Jt+wt*(Ht+1),qt=ut+(Jt+1)+wt*(Ht+1),jt=ut+(Jt+1)+wt*Ht;at.push(Ge,on,jt),at.push(on,qt,jt),Ft+=6}rt.addGroup(ht,Ft,vt),ht+=Ft,ut+=Yt}}copy(Y){return super.copy(Y),this.parameters=Object.assign({},Y.parameters),this}static fromJSON(Y){return new ji(Y.width,Y.height,Y.depth,Y.widthSegments,Y.heightSegments,Y.depthSegments)}}class be extends v{constructor(Y=1,tt=32,et=0,nt=Math.PI*2){super();this.type="CircleGeometry",this.parameters={radius:Y,segments:tt,thetaStart:et,thetaLength:nt},tt=Math.max(3,tt);let it=[],st=[],rt=[],at=[],ot=new e,lt=new n;st.push(0,0,0),rt.push(0,0,1),at.push(0.5,0.5);for(let ct=0,ut=3;ct<=tt;ct++,ut+=3){let ht=et+ct/tt*nt;ot.x=Y*Math.cos(ht),ot.y=Y*Math.sin(ht),st.push(ot.x,ot.y,ot.z),rt.push(0,0,1),lt.x=(st[ut]/Y+1)/2,lt.y=(st[ut+1]/Y+1)/2,at.push(lt.x,lt.y)}for(let ct=1;ct<=tt;ct++)it.push(ct,ct+1,0);this.setIndex(it),this.setAttribute("position",new f(st,3)),this.setAttribute("normal",new f(rt,3)),this.setAttribute("uv",new f(at,2))}copy(Y){return super.copy(Y),this.parameters=Object.assign({},Y.parameters),this}static fromJSON(Y){return new be(Y.radius,Y.segments,Y.thetaStart,Y.thetaLength)}}class K extends v{constructor(Y=1,tt=1,et=1,nt=1){super();this.type="PlaneGeometry",this.parameters={width:Y,height:tt,widthSegments:et,heightSegments:nt};let it=Y/2,st=tt/2,rt=Math.floor(et),at=Math.floor(nt),ot=rt+1,lt=at+1,ct=Y/rt,ut=tt/at,ht=[],ft=[],xt=[],St=[];for(let dt=0;dt<lt;dt++){let pt=dt*ut-st;for(let bt=0;bt<ot;bt++){let Tt=bt*ct-it;ft.push(Tt,-pt,0),xt.push(0,0,1),St.push(bt/rt),St.push(1-dt/at)}}for(let dt=0;dt<at;dt++)for(let pt=0;pt<rt;pt++){let bt=pt+ot*dt,Tt=pt+ot*(dt+1),Mt=pt+1+ot*(dt+1),Et=pt+1+ot*dt;ht.push(bt,Tt,Et),ht.push(Tt,Mt,Et)}this.setIndex(ht),this.setAttribute("position",new f(ft,3)),this.setAttribute("normal",new f(xt,3)),this.setAttribute("uv",new f(St,2))}copy(Y){return super.copy(Y),this.parameters=Object.assign({},Y.parameters),this}static fromJSON(Y){return new K(Y.width,Y.height,Y.widthSegments,Y.heightSegments)}}function ms(Y){let tt={};for(let et in Y){tt[et]={};for(let nt in Y[et]){let it=Y[et][nt];if(Xl(it))if(it.isRenderTargetTexture)hn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),tt[et][nt]=null;else tt[et][nt]=it.clone();else if(Array.isArray(it))if(Xl(it[0])){let st=[];for(let rt=0,at=it.length;rt<at;rt++)st[rt]=it[rt].clone();tt[et][nt]=st}else tt[et][nt]=it.slice();else tt[et][nt]=it}}return tt}function si(Y){let tt={};for(let et=0;et<Y.length;et++){let nt=ms(Y[et]);for(let it in nt)tt[it]=nt[it]}return tt}function Xl(Y){return Y&&(Y.isColor||Y.isMatrix3||Y.isMatrix4||Y.isVector2||Y.isVector3||Y.isVector4||Y.isTexture||Y.isQuaternion)}function Nu(Y){let tt=[];for(let et=0;et<Y.length;et++)tt.push(Y[et].clone());return tt}function ko(Y){let tt=Y.getRenderTarget();if(tt===null)return Y.outputColorSpace;if(tt.isXRRenderTarget===!0)return tt.texture.colorSpace;return s.workingColorSpace}var O={clone:ms,merge:si},Du=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Uu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class S extends E{constructor(Y){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Du,this.fragmentShader=Uu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,Y!==void 0)this.setValues(Y)}copy(Y){return super.copy(Y),this.fragmentShader=Y.fragmentShader,this.vertexShader=Y.vertexShader,this.uniforms=ms(Y.uniforms),this.uniformsGroups=Nu(Y.uniformsGroups),this.defines=Object.assign({},Y.defines),this.wireframe=Y.wireframe,this.wireframeLinewidth=Y.wireframeLinewidth,this.fog=Y.fog,this.lights=Y.lights,this.clipping=Y.clipping,this.extensions=Object.assign({},Y.extensions),this.glslVersion=Y.glslVersion,this.defaultAttributeValues=Object.assign({},Y.defaultAttributeValues),this.index0AttributeName=Y.index0AttributeName,this.uniformsNeedUpdate=Y.uniformsNeedUpdate,this}toJSON(Y){let tt=super.toJSON(Y);tt.glslVersion=this.glslVersion,tt.uniforms={};for(let nt in this.uniforms){let st=this.uniforms[nt].value;if(st&&st.isTexture)tt.uniforms[nt]={type:"t",value:st.toJSON(Y).uuid};else if(st&&st.isColor)tt.uniforms[nt]={type:"c",value:st.getHex()};else if(st&&st.isVector2)tt.uniforms[nt]={type:"v2",value:st.toArray()};else if(st&&st.isVector3)tt.uniforms[nt]={type:"v3",value:st.toArray()};else if(st&&st.isVector4)tt.uniforms[nt]={type:"v4",value:st.toArray()};else if(st&&st.isMatrix3)tt.uniforms[nt]={type:"m3",value:st.toArray()};else if(st&&st.isMatrix4)tt.uniforms[nt]={type:"m4",value:st.toArray()};else tt.uniforms[nt]={value:st}}if(Object.keys(this.defines).length>0)tt.defines=this.defines;tt.vertexShader=this.vertexShader,tt.fragmentShader=this.fragmentShader,tt.lights=this.lights,tt.clipping=this.clipping;let et={};for(let nt in this.extensions)if(this.extensions[nt]===!0)et[nt]=!0;if(Object.keys(et).length>0)tt.extensions=et;return tt}fromJSON(Y,tt){if(super.fromJSON(Y,tt),Y.uniforms!==void 0)for(let et in Y.uniforms){let nt=Y.uniforms[et];switch(this.uniforms[et]={},nt.type){case"t":this.uniforms[et].value=tt[nt.value]||null;break;case"c":this.uniforms[et].value=new t().setHex(nt.value);break;case"v2":this.uniforms[et].value=new n().fromArray(nt.value);break;case"v3":this.uniforms[et].value=new e().fromArray(nt.value);break;case"v4":this.uniforms[et].value=new Nn().fromArray(nt.value);break;case"m3":this.uniforms[et].value=new _n().fromArray(nt.value);break;case"m4":this.uniforms[et].value=new i().fromArray(nt.value);break;default:this.uniforms[et].value=nt.value}}if(Y.defines!==void 0)this.defines=Y.defines;if(Y.vertexShader!==void 0)this.vertexShader=Y.vertexShader;if(Y.fragmentShader!==void 0)this.fragmentShader=Y.fragmentShader;if(Y.glslVersion!==void 0)this.glslVersion=Y.glslVersion;if(Y.extensions!==void 0)for(let et in Y.extensions)this.extensions[et]=Y.extensions[et];if(Y.lights!==void 0)this.lights=Y.lights;if(Y.clipping!==void 0)this.clipping=Y.clipping;return this}}class Te extends S{constructor(Y){super(Y);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class u extends E{constructor(Y){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new t(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new n(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(Y)}copy(Y){return super.copy(Y),this.defines={STANDARD:""},this.color.copy(Y.color),this.roughness=Y.roughness,this.metalness=Y.metalness,this.map=Y.map,this.lightMap=Y.lightMap,this.lightMapIntensity=Y.lightMapIntensity,this.aoMap=Y.aoMap,this.aoMapIntensity=Y.aoMapIntensity,this.emissive.copy(Y.emissive),this.emissiveMap=Y.emissiveMap,this.emissiveIntensity=Y.emissiveIntensity,this.bumpMap=Y.bumpMap,this.bumpScale=Y.bumpScale,this.normalMap=Y.normalMap,this.normalMapType=Y.normalMapType,this.normalScale.copy(Y.normalScale),this.displacementMap=Y.displacementMap,this.displacementScale=Y.displacementScale,this.displacementBias=Y.displacementBias,this.roughnessMap=Y.roughnessMap,this.metalnessMap=Y.metalnessMap,this.alphaMap=Y.alphaMap,this.envMap=Y.envMap,this.envMapRotation.copy(Y.envMapRotation),this.envMapIntensity=Y.envMapIntensity,this.wireframe=Y.wireframe,this.wireframeLinewidth=Y.wireframeLinewidth,this.wireframeLinecap=Y.wireframeLinecap,this.wireframeLinejoin=Y.wireframeLinejoin,this.flatShading=Y.flatShading,this.fog=Y.fog,this}}class d extends u{constructor(Y){super();this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new n(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Tn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(tt){this.ior=(1+0.4*tt)/(1-0.4*tt)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new t(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new t(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new t(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(Y)}get anisotropy(){return this._anisotropy}set anisotropy(Y){if(this._anisotropy>0!==Y>0)this.version++;this._anisotropy=Y}get clearcoat(){return this._clearcoat}set clearcoat(Y){if(this._clearcoat>0!==Y>0)this.version++;this._clearcoat=Y}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(Y){if(this._diffuseRoughness>0!==Y>0)this.version++;this._diffuseRoughness=Y}get iridescence(){return this._iridescence}set iridescence(Y){if(this._iridescence>0!==Y>0)this.version++;this._iridescence=Y}get dispersion(){return this._dispersion}set dispersion(Y){if(this._dispersion>0!==Y>0)this.version++;this._dispersion=Y}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(Y){if(this._retroreflectivity>0!==Y>0)this.version++;this._retroreflectivity=Y}get sheen(){return this._sheen}set sheen(Y){if(this._sheen>0!==Y>0)this.version++;this._sheen=Y}get transmission(){return this._transmission}set transmission(Y){if(this._transmission>0!==Y>0)this.version++;this._transmission=Y}get iridescenceThicknessRange(){return cs('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(Y){cs('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=Y[0],this.iridescenceThicknessMaximum=Y[1]}copy(Y){return super.copy(Y),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=Y.anisotropy,this.anisotropyRotation=Y.anisotropyRotation,this.anisotropyMap=Y.anisotropyMap,this.clearcoat=Y.clearcoat,this.clearcoatMap=Y.clearcoatMap,this.clearcoatRoughness=Y.clearcoatRoughness,this.clearcoatRoughnessMap=Y.clearcoatRoughnessMap,this.clearcoatNormalMap=Y.clearcoatNormalMap,this.clearcoatNormalScale.copy(Y.clearcoatNormalScale),this.diffuseRoughness=Y.diffuseRoughness,this.diffuseRoughnessMap=Y.diffuseRoughnessMap,this.dispersion=Y.dispersion,this.ior=Y.ior,this.iridescence=Y.iridescence,this.iridescenceMap=Y.iridescenceMap,this.iridescenceIOR=Y.iridescenceIOR,this.iridescenceThicknessMinimum=Y.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=Y.iridescenceThicknessMaximum,this.iridescenceThicknessMap=Y.iridescenceThicknessMap,this.retroreflectivity=Y.retroreflectivity,this.sheen=Y.sheen,this.sheenColor.copy(Y.sheenColor),this.sheenColorMap=Y.sheenColorMap,this.sheenRoughness=Y.sheenRoughness,this.sheenRoughnessMap=Y.sheenRoughnessMap,this.transmission=Y.transmission,this.transmissionMap=Y.transmissionMap,this.thickness=Y.thickness,this.thicknessMap=Y.thicknessMap,this.attenuationDistance=Y.attenuationDistance,this.attenuationColor.copy(Y.attenuationColor),this.specularIntensity=Y.specularIntensity,this.specularIntensityMap=Y.specularIntensityMap,this.specularColor.copy(Y.specularColor),this.specularColorMap=Y.specularColorMap,this}}class ra extends E{constructor(Y){super();this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new n(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(Y)}copy(Y){return super.copy(Y),this.color.copy(Y.color),this.map=Y.map,this.lightMap=Y.lightMap,this.lightMapIntensity=Y.lightMapIntensity,this.aoMap=Y.aoMap,this.aoMapIntensity=Y.aoMapIntensity,this.emissive.copy(Y.emissive),this.emissiveMap=Y.emissiveMap,this.emissiveIntensity=Y.emissiveIntensity,this.bumpMap=Y.bumpMap,this.bumpScale=Y.bumpScale,this.normalMap=Y.normalMap,this.normalMapType=Y.normalMapType,this.normalScale.copy(Y.normalScale),this.displacementMap=Y.displacementMap,this.displacementScale=Y.displacementScale,this.displacementBias=Y.displacementBias,this.specularMap=Y.specularMap,this.alphaMap=Y.alphaMap,this.envMap=Y.envMap,this.envMapRotation.copy(Y.envMapRotation),this.combine=Y.combine,this.reflectivity=Y.reflectivity,this.envMapIntensity=Y.envMapIntensity,this.refractionRatio=Y.refractionRatio,this.wireframe=Y.wireframe,this.wireframeLinewidth=Y.wireframeLinewidth,this.wireframeLinecap=Y.wireframeLinecap,this.wireframeLinejoin=Y.wireframeLinejoin,this.flatShading=Y.flatShading,this.fog=Y.fog,this}}class Ho extends E{constructor(Y){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(Y)}copy(Y){return super.copy(Y),this.depthPacking=Y.depthPacking,this.map=Y.map,this.alphaMap=Y.alphaMap,this.displacementMap=Y.displacementMap,this.displacementScale=Y.displacementScale,this.displacementBias=Y.displacementBias,this.wireframe=Y.wireframe,this.wireframeLinewidth=Y.wireframeLinewidth,this}}class Wo extends E{constructor(Y){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(Y)}copy(Y){return super.copy(Y),this.map=Y.map,this.alphaMap=Y.alphaMap,this.displacementMap=Y.displacementMap,this.displacementScale=Y.displacementScale,this.displacementBias=Y.displacementBias,this}}class P extends E{constructor(Y){super();this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new t(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new n(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.fog=!0,this.setValues(Y)}copy(Y){return super.copy(Y),this.defines={MATCAP:""},this.color.copy(Y.color),this.matcap=Y.matcap,this.map=Y.map,this.bumpMap=Y.bumpMap,this.bumpScale=Y.bumpScale,this.normalMap=Y.normalMap,this.normalMapType=Y.normalMapType,this.normalScale.copy(Y.normalScale),this.displacementMap=Y.displacementMap,this.displacementScale=Y.displacementScale,this.displacementBias=Y.displacementBias,this.alphaMap=Y.alphaMap,this.wireframe=Y.wireframe,this.wireframeLinewidth=Y.wireframeLinewidth,this.flatShading=Y.flatShading,this.fog=Y.fog,this}}function Ji(Y,tt){if(!Y||Y.constructor===tt)return Y;if(typeof tt.BYTES_PER_ELEMENT==="number")return new tt(Y);return Array.prototype.slice.call(Y)}function Js(Y){return Y!==void 0&&Y.inTangents!==void 0&&Y.outTangents!==void 0}function Fu(Y){function tt(it,st){return Y[it]-Y[st]}let et=Y.length,nt=Array(et);for(let it=0;it!==et;++it)nt[it]=it;return nt.sort(tt),nt}function ql(Y,tt,et){let nt=Y.length,it=new Y.constructor(nt);for(let st=0,rt=0;rt!==nt;++st){let at=et[st]*tt;for(let ot=0;ot!==tt;++ot)it[rt++]=Y[at+ot]}return it}function Ou(Y,tt,et,nt){let it=1,st=Y[0];while(st!==void 0&&st[nt]===void 0)st=Y[it++];if(st===void 0)return;let rt=st[nt];if(rt===void 0)return;if(Array.isArray(rt))do{if(rt=st[nt],rt!==void 0)tt.push(st.time),et.push(...rt);st=Y[it++]}while(st!==void 0);else if(rt.toArray!==void 0)do{if(rt=st[nt],rt!==void 0)tt.push(st.time),rt.toArray(et,et.length);st=Y[it++]}while(st!==void 0);else do{if(rt=st[nt],rt!==void 0)tt.push(st.time),et.push(rt);st=Y[it++]}while(st!==void 0)}class B{constructor(Y,tt,et,nt){this.parameterPositions=Y,this._cachedIndex=0,this.resultBuffer=nt!==void 0?nt:new tt.constructor(et),this.sampleValues=tt,this.valueSize=et,this.settings=null,this.DefaultSettings_={}}evaluate(Y){let tt=this.parameterPositions,et=this._cachedIndex,nt=tt[et],it=tt[et-1];n:{t:{let st;e:{i:if(!(Y<nt)){for(let rt=et+2;;){if(nt===void 0){if(Y<it)break i;return et=tt.length,this._cachedIndex=et,this.copySampleValue_(et-1)}if(et===rt)break;if(it=nt,nt=tt[++et],Y<nt)break t}st=tt.length;break e}if(!(Y>=it)){let rt=tt[1];if(Y<rt)et=2,it=rt;for(let at=et-2;;){if(it===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(et===at)break;if(nt=it,it=tt[--et-1],Y>=it)break t}st=et,et=0;break e}break n}while(et<st){let rt=et+st>>>1;if(Y<tt[rt])st=rt;else et=rt+1}if(nt=tt[et],it=tt[et-1],it===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(nt===void 0)return et=tt.length,this._cachedIndex=et,this.copySampleValue_(et-1)}this._cachedIndex=et,this.intervalChanged_(et,it,nt)}return this.interpolate_(et,it,Y,nt)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(Y){let tt=this.resultBuffer,et=this.sampleValues,nt=this.valueSize,it=Y*nt;for(let st=0;st!==nt;++st)tt[st]=et[it+st];return tt}interpolate_(){throw Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class Vo extends B{constructor(Y,tt,et,nt){super(Y,tt,et,nt);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(Y,tt,et){let nt=this.parameterPositions,it=Y-2,st=Y+1,rt=nt[it],at=nt[st];if(rt===void 0)switch(this.getSettings_().endingStart){case 2401:it=Y,rt=2*tt-et;break;case 2402:it=nt.length-2,rt=tt+nt[it]-nt[it+1];break;default:it=Y,rt=et}if(at===void 0)switch(this.getSettings_().endingEnd){case 2401:st=Y,at=2*et-tt;break;case 2402:st=1,at=et+nt[1]-nt[0];break;default:st=Y-1,at=tt}let ot=(et-tt)*0.5,lt=this.valueSize;this._weightPrev=ot/(tt-rt),this._weightNext=ot/(at-et),this._offsetPrev=it*lt,this._offsetNext=st*lt}interpolate_(Y,tt,et,nt){let it=this.resultBuffer,st=this.sampleValues,rt=this.valueSize,at=Y*rt,ot=at-rt,lt=this._offsetPrev,ct=this._offsetNext,ut=this._weightPrev,ht=this._weightNext,ft=(et-tt)/(nt-tt),xt=ft*ft,St=xt*ft,dt=-ut*St+2*ut*xt-ut*ft,pt=(1+ut)*St+(-1.5-2*ut)*xt+(-0.5+ut)*ft+1,bt=(-1-ht)*St+(1.5+ht)*xt+0.5*ft,Tt=ht*St-ht*xt;for(let Mt=0;Mt!==rt;++Mt)it[Mt]=dt*st[lt+Mt]+pt*st[ot+Mt]+bt*st[at+Mt]+Tt*st[ct+Mt];return it}}class Xo extends B{constructor(Y,tt,et,nt){super(Y,tt,et,nt)}interpolate_(Y,tt,et,nt){let it=this.resultBuffer,st=this.sampleValues,rt=this.valueSize,at=Y*rt,ot=at-rt,lt=(et-tt)/(nt-tt),ct=1-lt;for(let ut=0;ut!==rt;++ut)it[ut]=st[ot+ut]*ct+st[at+ut]*lt;return it}}class qo extends B{constructor(Y,tt,et,nt){super(Y,tt,et,nt)}interpolate_(Y){return this.copySampleValue_(Y-1)}}class Yo extends B{interpolate_(Y,tt,et,nt){let it=this.resultBuffer,st=this.sampleValues,rt=this.valueSize,at=Y*rt,ot=at-rt,lt=this.inTangents,ct=this.outTangents;if(!lt||!ct){let ft=(et-tt)/(nt-tt),xt=1-ft;for(let St=0;St!==rt;++St)it[St]=st[ot+St]*xt+st[at+St]*ft;return it}let ut=rt*2,ht=Y-1;for(let ft=0;ft!==rt;++ft){let xt=st[ot+ft],St=st[at+ft],dt=ht*ut+ft*2,pt=ct[dt],bt=ct[dt+1],Tt=Y*ut+ft*2,Mt=lt[Tt],Et=lt[Tt+1],Ct=zu(et,tt,pt,Mt,nt);it[ft]=Kc(Ct,xt,bt,Et,St)}return it}}function Kc(Y,tt,et,nt,it){let st=1-Y;return st*st*st*tt+3*st*st*Y*et+3*st*Y*Y*nt+Y*Y*Y*it}function Bu(Y,tt,et,nt,it){let st=1-Y;return 3*st*st*(et-tt)+6*st*Y*(nt-et)+3*Y*Y*(it-nt)}function zu(Y,tt,et,nt,it){let st=(Y-tt)/(it-tt);for(let rt=0;rt<8;rt++){let at=Kc(st,tt,et,nt,it)-Y;if(Math.abs(at)<0.0000000001)break;let ot=Bu(st,tt,et,nt,it);if(Math.abs(ot)<0.0000000001)break;st=Math.max(0,Math.min(1,st-at/ot))}return st}class fi{constructor(Y,tt,et,nt){if(Y===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(tt===void 0||tt.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+Y);this.name=Y,this.times=Ji(tt,this.TimeBufferType),this.values=Ji(et,this.ValueBufferType),this.setInterpolation(nt||this.DefaultInterpolation)}static toJSON(Y){let tt=Y.constructor,et;if(tt.toJSON!==this.toJSON)et=tt.toJSON(Y);else{et={name:Y.name,times:Ji(Y.times,Array),values:Ji(Y.values,Array)};let nt=Y.getInterpolation();if(nt!==Y.DefaultInterpolation)et.interpolation=nt;if(Js(Y.settings))et.settings={inTangents:Ji(Y.settings.inTangents,Array),outTangents:Ji(Y.settings.outTangents,Array)}}return et.type=Y.ValueTypeName,et}InterpolantFactoryMethodDiscrete(Y){return new qo(this.times,this.values,this.getValueSize(),Y)}InterpolantFactoryMethodLinear(Y){return new Xo(this.times,this.values,this.getValueSize(),Y)}InterpolantFactoryMethodSmooth(Y){return new Vo(this.times,this.values,this.getValueSize(),Y)}InterpolantFactoryMethodBezier(Y){let tt=new Yo(this.times,this.values,this.getValueSize(),Y);if(this.settings)tt.inTangents=this.settings.inTangents,tt.outTangents=this.settings.outTangents;return tt}setInterpolation(Y){let tt;switch(Y){case 2300:tt=this.InterpolantFactoryMethodDiscrete;break;case 2301:tt=this.InterpolantFactoryMethodLinear;break;case 2302:tt=this.InterpolantFactoryMethodSmooth;break;case 2303:tt=this.InterpolantFactoryMethodBezier;break}if(tt===void 0){let et="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(Y!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(et);return hn("KeyframeTrack:",et),this}return this.createInterpolant=tt,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;case this.InterpolantFactoryMethodBezier:return 2303}}getValueSize(){return this.values.length/this.times.length}shift(Y){if(Y!==0){let tt=this.times;for(let et=0,nt=tt.length;et!==nt;++et)tt[et]+=Y;if(Js(this.settings))Yl(this.settings.inTangents,Y),Yl(this.settings.outTangents,Y)}return this}scale(Y){if(Y!==1){let tt=this.times;for(let et=0,nt=tt.length;et!==nt;++et)tt[et]*=Y;if(Js(this.settings))Zl(this.settings.inTangents,Y),Zl(this.settings.outTangents,Y)}return this}trim(Y,tt){let et=this.times,nt=et.length,it=0,st=nt-1;while(it!==nt&&et[it]<Y)++it;while(st!==-1&&et[st]>tt)--st;if(++st,it!==0||st!==nt){if(it>=st)st=Math.max(st,1),it=st-1;let rt=this.getValueSize();this.times=et.slice(it,st),this.values=this.values.slice(it*rt,st*rt)}return this}validate(){let Y=!0,tt=this.getValueSize();if(tt-Math.floor(tt)!==0)gn("KeyframeTrack: Invalid value size in track.",this),Y=!1;let et=this.times,nt=this.values,it=et.length;if(it===0)gn("KeyframeTrack: Track is empty.",this),Y=!1;let st=null;for(let rt=0;rt!==it;rt++){let at=et[rt];if(typeof at==="number"&&isNaN(at)){gn("KeyframeTrack: Time is not a valid number.",this,rt,at),Y=!1;break}if(st!==null&&st>at){gn("KeyframeTrack: Out of order keys.",this,rt,at,st),Y=!1;break}st=at}if(nt!==void 0){if($h(nt))for(let rt=0,at=nt.length;rt!==at;++rt){let ot=nt[rt];if(isNaN(ot)){gn("KeyframeTrack: Value is not a valid number.",this,rt,ot),Y=!1;break}}}return Y}optimize(){let Y=this.times.slice(),tt=this.values.slice(),et=this.getValueSize(),nt=this.getInterpolation()===2302,it=Y.length-1,st=1;for(let rt=1;rt<it;++rt){let at=!1,ot=Y[rt],lt=Y[rt+1];if(ot!==lt&&(rt!==1||ot!==Y[0]))if(!nt){let ct=rt*et,ut=ct-et,ht=ct+et;for(let ft=0;ft!==et;++ft){let xt=tt[ct+ft];if(xt!==tt[ut+ft]||xt!==tt[ht+ft]){at=!0;break}}}else at=!0;if(at){if(rt!==st){Y[st]=Y[rt];let ct=rt*et,ut=st*et;for(let ht=0;ht!==et;++ht)tt[ut+ht]=tt[ct+ht]}++st}}if(it>0){Y[st]=Y[it];for(let rt=it*et,at=st*et,ot=0;ot!==et;++ot)tt[at+ot]=tt[rt+ot];++st}if(st!==Y.length)this.times=Y.slice(0,st),this.values=tt.slice(0,st*et);else this.times=Y,this.values=tt;return this}clone(){let Y=this.times.slice(),tt=this.values.slice(),nt=new this.constructor(this.name,Y,tt);if(nt.createInterpolant=this.createInterpolant,Js(this.settings))nt.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()};return nt}}function Yl(Y,tt){for(let et=0,nt=Y.length;et!==nt;et+=2)Y[et]+=tt}function Zl(Y,tt){for(let et=0,nt=Y.length;et!==nt;et+=2)Y[et]*=tt}fi.prototype.ValueTypeName="";fi.prototype.TimeBufferType=Float32Array;fi.prototype.ValueBufferType=Float32Array;fi.prototype.DefaultInterpolation=2301;class ts extends fi{constructor(Y,tt,et){super(Y,tt,et)}}ts.prototype.ValueTypeName="bool";ts.prototype.ValueBufferType=Array;ts.prototype.DefaultInterpolation=2300;ts.prototype.InterpolantFactoryMethodLinear=void 0;ts.prototype.InterpolantFactoryMethodSmooth=void 0;class aa extends fi{constructor(Y,tt,et,nt){super(Y,tt,et,nt)}}aa.prototype.ValueTypeName="color";class W extends fi{constructor(Y,tt,et,nt){super(Y,tt,et,nt)}}W.prototype.ValueTypeName="number";class Zo extends B{constructor(Y,tt,et,nt){super(Y,tt,et,nt)}interpolate_(Y,tt,et,nt){let it=this.resultBuffer,st=this.sampleValues,rt=this.valueSize,at=(et-tt)/(nt-tt),ot=Y*rt;for(let lt=ot+rt;ot!==lt;ot+=4)I.slerpFlat(it,0,st,ot-rt,st,ot,at);return it}}class X extends fi{constructor(Y,tt,et,nt){super(Y,tt,et,nt)}InterpolantFactoryMethodLinear(Y){return new Zo(this.times,this.values,this.getValueSize(),Y)}}X.prototype.ValueTypeName="quaternion";X.prototype.InterpolantFactoryMethodSmooth=void 0;class es extends fi{constructor(Y,tt,et){super(Y,tt,et)}}es.prototype.ValueTypeName="string";es.prototype.ValueBufferType=Array;es.prototype.DefaultInterpolation=2300;es.prototype.InterpolantFactoryMethodLinear=void 0;es.prototype.InterpolantFactoryMethodSmooth=void 0;class J extends fi{constructor(Y,tt,et,nt){super(Y,tt,et,nt)}}J.prototype.ValueTypeName="vector";class Ue{constructor(Y="",tt=-1,et=[],nt=2500){if(this.name=Y,this.tracks=et,this.duration=tt,this.blendMode=nt,this.uuid=Ri(),this.userData={},this.duration<0)this.resetDuration()}static parse(Y){let tt=[],et=Y.tracks,nt=1/(Y.fps||1);for(let st=0,rt=et.length;st!==rt;++st)tt.push(ku(et[st]).scale(nt));let it=new this(Y.name,Y.duration,tt,Y.blendMode);return it.uuid=Y.uuid,it.userData=JSON.parse(Y.userData||"{}"),it}static toJSON(Y){let tt=[],et=Y.tracks,nt={name:Y.name,duration:Y.duration,tracks:tt,uuid:Y.uuid,blendMode:Y.blendMode,userData:JSON.stringify(Y.userData)};for(let it=0,st=et.length;it!==st;++it)tt.push(fi.toJSON(et[it]));return nt}static CreateFromMorphTargetSequence(Y,tt,et,nt){let it=tt.length,st=[];for(let rt=0;rt<it;rt++){let at=[],ot=[];at.push((rt+it-1)%it,rt,(rt+1)%it),ot.push(0,1,0);let lt=Fu(at);if(at=ql(at,1,lt),ot=ql(ot,1,lt),!nt&&at[0]===0)at.push(it),ot.push(ot[0]);st.push(new W(".morphTargetInfluences["+tt[rt].name+"]",at,ot).scale(1/et))}return new this(Y,-1,st)}static findByName(Y,tt){let et=Y;if(!Array.isArray(Y)){let nt=Y;et=nt.geometry&&nt.geometry.animations||nt.animations}for(let nt=0;nt<et.length;nt++)if(et[nt].name===tt)return et[nt];return null}static CreateClipsFromMorphTargetSequences(Y,tt,et){let nt={},it=/^([\w-]*?)([\d]+)$/;for(let rt=0,at=Y.length;rt<at;rt++){let ot=Y[rt],lt=ot.name.match(it);if(lt&&lt.length>1){let ct=lt[1],ut=nt[ct];if(!ut)nt[ct]=ut=[];ut.push(ot)}}let st=[];for(let rt in nt)st.push(this.CreateFromMorphTargetSequence(rt,nt[rt],tt,et));return st}resetDuration(){let Y=this.tracks,tt=0;for(let et=0,nt=Y.length;et!==nt;++et){let it=this.tracks[et];tt=Math.max(tt,it.times[it.times.length-1])}return this.duration=tt,this}trim(){for(let Y=0;Y<this.tracks.length;Y++)this.tracks[Y].trim(0,this.duration);return this}validate(){let Y=!0;for(let tt=0;tt<this.tracks.length;tt++)Y=Y&&this.tracks[tt].validate();return Y}optimize(){for(let Y=0;Y<this.tracks.length;Y++)this.tracks[Y].optimize();return this}clone(){let Y=[];for(let et=0;et<this.tracks.length;et++)Y.push(this.tracks[et].clone());let tt=new this.constructor(this.name,this.duration,Y,this.blendMode);return tt.userData=JSON.parse(JSON.stringify(this.userData)),tt}toJSON(){return this.constructor.toJSON(this)}}function Gu(Y){switch(Y.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return W;case"vector":case"vector2":case"vector3":case"vector4":return J;case"color":return aa;case"quaternion":return X;case"bool":case"boolean":return ts;case"string":return es}throw Error("THREE.KeyframeTrack: Unsupported typeName: "+Y)}function ku(Y){if(Y.type===void 0)throw Error("THREE.KeyframeTrack: track type undefined, can not parse");let tt=Gu(Y.type);if(Y.times===void 0){let nt=[],it=[];Ou(Y.keys,nt,it,"value"),Y.times=nt,Y.values=it}let et;if(tt.parse!==void 0)et=tt.parse(Y);else et=new tt(Y.name,Y.times,Y.values,Y.interpolation);if(Js(Y.settings))et.settings={inTangents:Ji(Y.settings.inTangents,Float32Array),outTangents:Ji(Y.settings.outTangents,Float32Array)};return et}var Ei={enabled:!1,files:{},add:function(Y,tt){if(this.enabled===!1)return;if(Jl(Y))return;this.files[Y]=tt},get:function(Y){if(this.enabled===!1)return;if(Jl(Y))return;return this.files[Y]},remove:function(Y){delete this.files[Y]},clear:function(){this.files={}}};function Jl(Y){try{let tt=Y.slice(Y.indexOf(":")+1);return new URL(tt).protocol==="blob:"}catch(tt){return!1}}class Jo{constructor(Y,tt,et){let nt=this,it=!1,st=0,rt=0,at=void 0,ot=[];this.onStart=void 0,this.onLoad=Y,this.onProgress=tt,this.onError=et,this._abortController=null,this.itemStart=function(lt){if(rt++,it===!1){if(nt.onStart!==void 0)nt.onStart(lt,st,rt)}it=!0},this.itemEnd=function(lt){if(st++,nt.onProgress!==void 0)nt.onProgress(lt,st,rt);if(st===rt){if(it=!1,nt.onLoad!==void 0)nt.onLoad()}},this.itemError=function(lt){if(nt.onError!==void 0)nt.onError(lt)},this.resolveURL=function(lt){if(lt=lt.normalize("NFC"),at)return at(lt);return lt},this.setURLModifier=function(lt){return at=lt,this},this.addHandler=function(lt,ct){return ot.push(lt,ct),this},this.removeHandler=function(lt){let ct=ot.indexOf(lt);if(ct!==-1)ot.splice(ct,2);return this},this.getHandler=function(lt){for(let ct=0,ut=ot.length;ct<ut;ct+=2){let ht=ot[ct],ft=ot[ct+1];if(ht.global)ht.lastIndex=0;if(ht.test(lt))return ft}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var Qc=new Jo;class z{constructor(Y){if(this.manager=Y!==void 0?Y:Qc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(Y,tt){let et=this;return new Promise(function(nt,it){et.load(Y,nt,tt,it)})}parse(){}setCrossOrigin(Y){return this.crossOrigin=Y,this}setWithCredentials(Y){return this.withCredentials=Y,this}setPath(Y){return this.path=Y,this}setResourcePath(Y){return this.resourcePath=Y,this}setRequestHeader(Y){return this.requestHeader=Y,this}setPriority(Y){return this.priority=Y,this}setCache(Y){return this.cache=Y,this}abort(){return this}}z.DEFAULT_MATERIAL_NAME="__DEFAULT";var Bi={};class jc extends Error{constructor(Y,tt){super(Y);this.response=tt}}class we extends z{constructor(Y){super(Y);this.mimeType="",this.responseType="",this._abortController=new AbortController}load(Y,tt,et,nt){if(Y===void 0)Y="";if(this.path!==void 0)Y=this.path+Y;Y=this.manager.resolveURL(Y);let it=Ei.get(`file:${Y}`);if(it!==void 0){this.manager.itemStart(Y),setTimeout(()=>{if(tt)tt(it);this.manager.itemEnd(Y)},0);return}if(Bi[Y]!==void 0){Bi[Y].push({onLoad:tt,onProgress:et,onError:nt});return}Bi[Y]=[],Bi[Y].push({onLoad:tt,onProgress:et,onError:nt});let st=new Request(Y,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any==="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),rt=this.mimeType,at=this.responseType;fetch(st).then((ot)=>{if(ot.status===200||ot.status===0){if(ot.status===0)hn("FileLoader: HTTP Status 0 received.");if(typeof ReadableStream>"u"||ot.body===void 0||ot.body.getReader===void 0)return ot;let lt=Bi[Y],ct=ot.body.getReader(),ut=ot.headers.get("X-File-Size")||ot.headers.get("Content-Length"),ht=ut?parseInt(ut):0,ft=ht!==0,xt=0,St=new ReadableStream({start(dt){pt();function pt(){ct.read().then(({done:bt,value:Tt})=>{if(bt)dt.close();else{xt+=Tt.byteLength;let Mt=new ProgressEvent("progress",{lengthComputable:ft,loaded:xt,total:ht});for(let Et=0,Ct=lt.length;Et<Ct;Et++){let mt=lt[Et];if(mt.onProgress)mt.onProgress(Mt)}dt.enqueue(Tt),pt()}},(bt)=>{dt.error(bt)})}}});return new Response(St)}else throw new jc(`fetch for "${ot.url}" responded with ${ot.status}: ${ot.statusText}`,ot)}).then((ot)=>{switch(at){case"arraybuffer":return ot.arrayBuffer();case"blob":return ot.blob();case"document":return ot.text().then((lt)=>new DOMParser().parseFromString(lt,rt));case"json":return ot.json();default:if(rt==="")return ot.text();else{let ct=/charset="?([^;"\s]*)"?/i.exec(rt),ut=ct&&ct[1]?ct[1].toLowerCase():void 0,ht=new TextDecoder(ut);return ot.arrayBuffer().then((ft)=>ht.decode(ft))}}}).then((ot)=>{Ei.add(`file:${Y}`,ot);let lt=Bi[Y];delete Bi[Y];for(let ct=0,ut=lt.length;ct<ut;ct++){let ht=lt[ct];if(ht.onLoad)ht.onLoad(ot)}}).catch((ot)=>{let lt=Bi[Y];if(lt===void 0)throw this.manager.itemError(Y),ot;delete Bi[Y];for(let ct=0,ut=lt.length;ct<ut;ct++){let ht=lt[ct];if(ht.onError)ht.onError(ot)}this.manager.itemError(Y)}).finally(()=>{this.manager.itemEnd(Y)}),this.manager.itemStart(Y)}setResponseType(Y){return this.responseType=Y,this}setMimeType(Y){return this.mimeType=Y,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}var ws=new WeakMap;class $o extends z{constructor(Y){super(Y)}load(Y,tt,et,nt){if(this.path!==void 0)Y=this.path+Y;Y=this.manager.resolveURL(Y);let it=this,st=Ei.get(`image:${Y}`);if(st!==void 0){if(st.complete===!0)it.manager.itemStart(Y),setTimeout(function(){if(tt)tt(st);it.manager.itemEnd(Y)},0);else{let ct=ws.get(st);if(ct===void 0)ct=[],ws.set(st,ct);ct.push({onLoad:tt,onError:nt})}return st}let rt=Ps("img");function at(){if(lt(),tt)tt(this);let ct=ws.get(this)||[];for(let ut=0;ut<ct.length;ut++){let ht=ct[ut];if(ht.onLoad)ht.onLoad(this)}ws.delete(this),it.manager.itemEnd(Y)}function ot(ct){if(lt(),nt)nt(ct);Ei.remove(`image:${Y}`);let ut=ws.get(this)||[];for(let ht=0;ht<ut.length;ht++){let ft=ut[ht];if(ft.onError)ft.onError(ct)}ws.delete(this),it.manager.itemError(Y),it.manager.itemEnd(Y)}function lt(){rt.removeEventListener("load",at,!1),rt.removeEventListener("error",ot,!1)}if(rt.addEventListener("load",at,!1),rt.addEventListener("error",ot,!1),Y.slice(0,5)!=="data:"){if(this.crossOrigin!==void 0)rt.crossOrigin=this.crossOrigin}return Ei.add(`image:${Y}`,rt),it.manager.itemStart(Y),rt.fetchPriority=this.priority,rt.src=Y,rt}}class Q extends z{constructor(Y){super(Y)}load(Y,tt,et,nt){let it=new h,st=new $o(this.manager);return st.setPriority(this.priority),st.setCache(this.cache),st.setCrossOrigin(this.crossOrigin),st.setPath(this.path),st.load(Y,function(rt){if(it.image=rt,it.needsUpdate=!0,tt!==void 0)tt(it)},et,nt),it}}class ar extends l{static registerNode(Y){this.prototype._lightNode=Y}constructor(Y,tt=1){super();this.isLight=!0,this.type="Light",this.color=new t(Y),this.intensity=tt}copy(Y,tt){return super.copy(Y,tt),this.color.copy(Y.color),this.intensity=Y.intensity,this}toJSON(Y){let tt=super.toJSON(Y);return tt.object.color=this.color.getHex(),tt.object.intensity=this.intensity,tt}}var Oa=new i,$l=new e,Kl=new e;class or{constructor(Y){this.camera=Y,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new n(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new i,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new us,this._frameExtents=new n(1,1),this._viewportCount=1,this._viewports=[new Nn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(Y){let tt=this.camera;$l.setFromMatrixPosition(Y.matrixWorld),tt.position.copy($l),Kl.setFromMatrixPosition(Y.target.matrixWorld),tt.lookAt(Kl),tt.updateMatrixWorld(),this._updateMatrix(tt,this.matrix,this._frustum)}_updateMatrix(Y,tt,et,nt){Oa.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),et.setFromProjectionMatrix(Oa,Y.coordinateSystem,Y.reversedDepth);let it=this._frameExtents,st=nt?nt.z/it.x:1,rt=nt?nt.w/it.y:1,at=nt?nt.x/it.x:0,ot=nt?nt.y/it.y:0;if(Y.coordinateSystem===2001||Y.reversedDepth)tt.set(0.5*st,0,0,0.5*st+at,0,0.5*rt,0,0.5*rt+ot,0,0,1,0,0,0,0,1);else tt.set(0.5*st,0,0,0.5*st+at,0,0.5*rt,0,0.5*rt+ot,0,0,0.5,0.5,0,0,0,1);tt.multiply(Oa)}getViewport(Y){return this._viewports[Y]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(Y){return this.camera=Y.camera.clone(),this.intensity=Y.intensity,this.bias=Y.bias,this.radius=Y.radius,this.autoUpdate=Y.autoUpdate,this.needsUpdate=Y.needsUpdate,this.normalBias=Y.normalBias,this.blurSamples=Y.blurSamples,this.mapSize.copy(Y.mapSize),this.mapType=Y.mapType,this.biasNode=Y.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let Y={};return Y.intensity=this.intensity,Y.bias=this.bias,Y.normalBias=this.normalBias,Y.radius=this.radius,Y.blurSamples=this.blurSamples,Y.mapSize=this.mapSize.toArray(),Y.mapType=this.mapType,Y.camera=this.camera.toJSON(!1).object,delete Y.camera.matrix,Y}}var Br=new e,zr=new I,bi=new e;class oa extends l{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new i,this.projectionMatrix=new i,this.projectionMatrixInverse=new i,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(Y,tt){return super.copy(Y,tt),this.matrixWorldInverse.copy(Y.matrixWorldInverse),this.projectionMatrix.copy(Y.projectionMatrix),this.projectionMatrixInverse.copy(Y.projectionMatrixInverse),this.coordinateSystem=Y.coordinateSystem,this}getWorldDirection(Y){return super.getWorldDirection(Y).negate()}updateMatrixWorld(Y){if(super.updateMatrixWorld(Y),this.matrixWorld.decompose(Br,zr,bi),bi.x===1&&bi.y===1&&bi.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(Br,zr,bi.set(1,1,1)).invert()}updateWorldMatrix(Y,tt,et=!1){if(super.updateWorldMatrix(Y,tt,et),this.matrixWorld.decompose(Br,zr,bi),bi.x===1&&bi.y===1&&bi.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(Br,zr,bi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var Zi=new e,Ql=new n,jl=new n;class c extends oa{constructor(Y=50,tt=1,et=0.1,nt=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=Y,this.zoom=1,this.near=et,this.far=nt,this.focus=10,this.aspect=tt,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(Y,tt){return super.copy(Y,tt),this.fov=Y.fov,this.zoom=Y.zoom,this.near=Y.near,this.far=Y.far,this.focus=Y.focus,this.aspect=Y.aspect,this.view=Y.view===null?null:Object.assign({},Y.view),this.filmGauge=Y.filmGauge,this.filmOffset=Y.filmOffset,this}setFocalLength(Y){let tt=0.5*this.getFilmHeight()/Y;this.fov=hs*2*Math.atan(tt),this.updateProjectionMatrix()}getFocalLength(){let Y=Math.tan($s*0.5*this.fov);return 0.5*this.getFilmHeight()/Y}getEffectiveFOV(){return hs*2*Math.atan(Math.tan($s*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(Y,tt,et){Zi.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),tt.set(Zi.x,Zi.y).multiplyScalar(-Y/Zi.z),Zi.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),et.set(Zi.x,Zi.y).multiplyScalar(-Y/Zi.z)}getViewSize(Y,tt){return this.getViewBounds(Y,Ql,jl),tt.subVectors(jl,Ql)}setViewOffset(Y,tt,et,nt,it,st){if(this.aspect=Y/tt,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=Y,this.view.fullHeight=tt,this.view.offsetX=et,this.view.offsetY=nt,this.view.width=it,this.view.height=st,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let Y=this.near,tt=Y*Math.tan($s*0.5*this.fov)/this.zoom,et=2*tt,nt=this.aspect*et,it=-0.5*nt,st=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:at,fullHeight:ot}=st;it+=st.offsetX*nt/at,tt-=st.offsetY*et/ot,nt*=st.width/at,et*=st.height/ot}let rt=this.filmOffset;if(rt!==0)it+=Y*rt/this.getFilmWidth();this.projectionMatrix.makePerspective(it,it+nt,tt,tt-et,Y,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(Y){let tt=super.toJSON(Y);if(tt.object.fov=this.fov,tt.object.zoom=this.zoom,tt.object.near=this.near,tt.object.far=this.far,tt.object.focus=this.focus,tt.object.aspect=this.aspect,this.view!==null)tt.object.view=Object.assign({},this.view);return tt.object.filmGauge=this.filmGauge,tt.object.filmOffset=this.filmOffset,tt}}class th extends or{constructor(){super(new c(50,1,0.5,500));this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(Y){let tt=this.camera,et=hs*2*Y.angle*this.focus,nt=this.mapSize.width/this.mapSize.height*this.aspect,it=Y.distance||tt.far;if(et!==tt.fov||nt!==tt.aspect||it!==tt.far)tt.fov=et,tt.aspect=nt,tt.far=it,tt.updateProjectionMatrix();super.updateMatrices(Y)}copy(Y){return super.copy(Y),this.focus=Y.focus,this.aspect=Y.aspect,this}toJSON(){let Y=super.toJSON();return Y.focus=this.focus,Y.aspect=this.aspect,Y}}class Fe extends ar{constructor(Y,tt,et=0,nt=Math.PI/3,it=0,st=2){super(Y,tt);this.isSpotLight=!0,this.type="SpotLight",this.position.copy(l.DEFAULT_UP),this.updateMatrix(),this.target=new l,this.distance=et,this.angle=nt,this.penumbra=it,this.decay=st,this.map=null,this.shadow=new th}get power(){return this.intensity*Math.PI}set power(Y){this.intensity=Y/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(Y,tt){return super.copy(Y,tt),this.distance=Y.distance,this.angle=Y.angle,this.penumbra=Y.penumbra,this.decay=Y.decay,this.target=Y.target.clone(),this.map=Y.map,this.shadow=Y.shadow.clone(),this}toJSON(Y){let tt=super.toJSON(Y);if(tt.object.distance=this.distance,tt.object.angle=this.angle,tt.object.decay=this.decay,tt.object.penumbra=this.penumbra,tt.object.target=this.target.uuid,this.map&&this.map.isTexture)tt.object.map=this.map.toJSON(Y).uuid;return tt.object.shadow=this.shadow.toJSON(),tt}}class eh extends or{constructor(){super(new c(90,1,0.5,500));this.isPointLightShadow=!0}}class ae extends ar{constructor(Y,tt,et=0,nt=2){super(Y,tt);this.isPointLight=!0,this.type="PointLight",this.distance=et,this.decay=nt,this.shadow=new eh}get power(){return this.intensity*4*Math.PI}set power(Y){this.intensity=Y/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(Y,tt){return super.copy(Y,tt),this.distance=Y.distance,this.decay=Y.decay,this.shadow=Y.shadow.clone(),this}toJSON(Y){let tt=super.toJSON(Y);return tt.object.distance=this.distance,tt.object.decay=this.decay,tt.object.shadow=this.shadow.toJSON(),tt}}class k extends oa{constructor(Y=-1,tt=1,et=1,nt=-1,it=0.1,st=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=Y,this.right=tt,this.top=et,this.bottom=nt,this.near=it,this.far=st,this.updateProjectionMatrix()}copy(Y,tt){return super.copy(Y,tt),this.left=Y.left,this.right=Y.right,this.top=Y.top,this.bottom=Y.bottom,this.near=Y.near,this.far=Y.far,this.zoom=Y.zoom,this.view=Y.view===null?null:Object.assign({},Y.view),this}setViewOffset(Y,tt,et,nt,it,st){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=Y,this.view.fullHeight=tt,this.view.offsetX=et,this.view.offsetY=nt,this.view.width=it,this.view.height=st,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let Y=(this.right-this.left)/(2*this.zoom),tt=(this.top-this.bottom)/(2*this.zoom),et=(this.right+this.left)/2,nt=(this.top+this.bottom)/2,it=et-Y,st=et+Y,rt=nt+tt,at=nt-tt;if(this.view!==null&&this.view.enabled){let ot=(this.right-this.left)/this.view.fullWidth/this.zoom,lt=(this.top-this.bottom)/this.view.fullHeight/this.zoom;it+=ot*this.view.offsetX,st=it+ot*this.view.width,rt-=lt*this.view.offsetY,at=rt-lt*this.view.height}this.projectionMatrix.makeOrthographic(it,st,rt,at,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(Y){let tt=super.toJSON(Y);if(tt.object.zoom=this.zoom,tt.object.left=this.left,tt.object.right=this.right,tt.object.top=this.top,tt.object.bottom=this.bottom,tt.object.near=this.near,tt.object.far=this.far,this.view!==null)tt.object.view=Object.assign({},this.view);return tt}}class nh extends or{constructor(){super(new k(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class C extends ar{constructor(Y,tt){super(Y,tt);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(l.DEFAULT_UP),this.updateMatrix(),this.target=new l,this.shadow=new nh}dispose(){super.dispose(),this.shadow.dispose()}copy(Y){return super.copy(Y),this.target=Y.target.clone(),this.shadow=Y.shadow.clone(),this}toJSON(Y){let tt=super.toJSON(Y);return tt.object.shadow=this.shadow.toJSON(),tt.object.target=this.target.uuid,tt}}class q{static extractUrlBase(Y){let tt=Y.lastIndexOf("/");if(tt===-1)return"./";return Y.slice(0,tt+1)}static resolveURL(Y,tt){if(typeof Y!=="string"||Y==="")return"";if(/^https?:\/\//i.test(tt)&&/^\//.test(Y))tt=tt.replace(/(^https?:\/\/[^\/]+).*/i,"$1");if(/^(https?:)?\/\//i.test(Y))return Y;if(/^data:.*,.*$/i.test(Y))return Y;if(/^blob:.*$/i.test(Y))return Y;return tt+Y}}var Ba=new WeakMap;class Oe extends z{constructor(Y){super(Y);if(this.isImageBitmapLoader=!0,typeof createImageBitmap>"u")hn("ImageBitmapLoader: createImageBitmap() not supported.");if(typeof fetch>"u")hn("ImageBitmapLoader: fetch() not supported.");this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(Y){return this.options=Y,this}load(Y,tt,et,nt){if(Y===void 0)Y="";if(this.path!==void 0)Y=this.path+Y;Y=this.manager.resolveURL(Y);let it=this,st=Ei.get(`image-bitmap:${Y}`);if(st!==void 0){if(it.manager.itemStart(Y),st.then){st.then((ot)=>{if(Ba.has(st)===!0){if(nt)nt(Ba.get(st));it.manager.itemError(Y),it.manager.itemEnd(Y)}else{if(tt)tt(ot);it.manager.itemEnd(Y)}});return}setTimeout(function(){if(tt)tt(st);it.manager.itemEnd(Y)},0);return}let rt={};rt.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",rt.headers=this.requestHeader,rt.priority=this.priority,rt.cache=this.cache,rt.signal=typeof AbortSignal.any==="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let at=fetch(Y,rt).then(function(ot){return ot.blob()}).then(function(ot){return createImageBitmap(ot,Object.assign({},it.options,{colorSpaceConversion:"none"}))}).then(function(ot){if(Ei.add(`image-bitmap:${Y}`,ot),tt)tt(ot);return it.manager.itemEnd(Y),ot}).catch(function(ot){if(nt)nt(ot);Ba.set(at,ot),Ei.remove(`image-bitmap:${Y}`),it.manager.itemError(Y),it.manager.itemEnd(Y)});Ei.add(`image-bitmap:${Y}`,at),it.manager.itemStart(Y)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}var Rs=-90,Cs=1;class lr extends l{constructor(Y,tt,et){super();this.type="CubeCamera",this.renderTarget=et,this.coordinateSystem=null,this.activeMipmapLevel=0;let nt=new c(Rs,Cs,Y,tt);nt.layers=this.layers,this.add(nt);let it=new c(Rs,Cs,Y,tt);it.layers=this.layers,this.add(it);let st=new c(Rs,Cs,Y,tt);st.layers=this.layers,this.add(st);let rt=new c(Rs,Cs,Y,tt);rt.layers=this.layers,this.add(rt);let at=new c(Rs,Cs,Y,tt);at.layers=this.layers,this.add(at);let ot=new c(Rs,Cs,Y,tt);ot.layers=this.layers,this.add(ot)}updateCoordinateSystem(){let Y=this.coordinateSystem,tt=this.children.concat(),[et,nt,it,st,rt,at]=tt;for(let ot of tt)this.remove(ot);if(Y===2000)et.up.set(0,1,0),et.lookAt(1,0,0),nt.up.set(0,1,0),nt.lookAt(-1,0,0),it.up.set(0,0,-1),it.lookAt(0,1,0),st.up.set(0,0,1),st.lookAt(0,-1,0),rt.up.set(0,1,0),rt.lookAt(0,0,1),at.up.set(0,1,0),at.lookAt(0,0,-1);else if(Y===2001)et.up.set(0,-1,0),et.lookAt(-1,0,0),nt.up.set(0,-1,0),nt.lookAt(1,0,0),it.up.set(0,0,1),it.lookAt(0,1,0),st.up.set(0,0,-1),st.lookAt(0,-1,0),rt.up.set(0,-1,0),rt.lookAt(0,0,1),at.up.set(0,-1,0),at.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+Y);for(let ot of tt)this.add(ot),ot.updateMatrixWorld()}update(Y,tt){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:et,activeMipmapLevel:nt}=this;if(this.coordinateSystem!==Y.coordinateSystem)this.coordinateSystem=Y.coordinateSystem,this.updateCoordinateSystem();let[it,st,rt,at,ot,lt]=this.children,ct=Y.getRenderTarget(),ut=Y.getActiveCubeFace(),ht=Y.getActiveMipmapLevel(),ft=Y.xr.enabled;Y.xr.enabled=!1;let xt=et.texture.mipmapsAutoUpdate;et.texture.mipmapsAutoUpdate=!1;let St=!1;if(Y.isWebGLRenderer===!0)St=Y.state.buffers.depth.getReversed();else St=Y.reversedDepthBuffer;if(Y.setRenderTarget(et,0,nt),St&&Y.autoClear===!1)Y.clearDepth();if(Y.render(tt,it),Y.setRenderTarget(et,1,nt),St&&Y.autoClear===!1)Y.clearDepth();if(Y.render(tt,st),Y.setRenderTarget(et,2,nt),St&&Y.autoClear===!1)Y.clearDepth();if(Y.render(tt,rt),Y.setRenderTarget(et,3,nt),St&&Y.autoClear===!1)Y.clearDepth();if(Y.render(tt,at),Y.setRenderTarget(et,4,nt),St&&Y.autoClear===!1)Y.clearDepth();if(Y.render(tt,ot),et.texture.mipmapsAutoUpdate=xt,Y.setRenderTarget(et,5,nt),St&&Y.autoClear===!1)Y.clearDepth();Y.render(tt,lt),Y.setRenderTarget(ct,ut,ht),Y.xr.enabled=ft,et.texture.needsPMREMUpdate=!0}}class Ko extends c{constructor(Y=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=Y,this.perCameraFrustumCulled=!1}}class Be{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(Y){if(this._document=Y,Y.hidden!==void 0)this._pageVisibilityHandler=Hu.bind(this),Y.addEventListener("visibilitychange",this._pageVisibilityHandler,!1)}disconnect(){if(this._pageVisibilityHandler!==null)this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null;this._document=null}getDelta(){return this._delta/1000}getElapsed(){return this._elapsed/1000}getTimescale(){return this._timescale}setTimescale(Y){return this._timescale=Y,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(Y){if(this._pageVisibilityHandler!==null&&this._document.hidden===!0)this._delta=0;else this._previousTime=this._currentTime,this._currentTime=(Y!==void 0?Y:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta;return this}}function Hu(){if(this._document.hidden===!1)this.reset()}var Qo="\\[\\]\\.:\\/",Wu=new RegExp("["+Qo+"]","g"),jo="[^"+Qo+"]",Vu="[^"+Qo.replace("\\.","")+"]",Xu=/((?:WC+[\/:])*)/.source.replace("WC",jo),qu=/(WCOD+)?/.source.replace("WCOD",Vu),Yu=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",jo),Zu=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",jo),Ju=new RegExp("^"+Xu+qu+Yu+Zu+"$"),$u=["material","materials","bones","map"];class ih{constructor(Y,tt,et){let nt=et||r.parseTrackName(tt);this._targetGroup=Y,this._bindings=Y.subscribe_(tt,nt)}getValue(Y,tt){this.bind();let et=this._targetGroup.nCachedObjects_,nt=this._bindings[et];if(nt!==void 0)nt.getValue(Y,tt)}setValue(Y,tt){let et=this._bindings;for(let nt=this._targetGroup.nCachedObjects_,it=et.length;nt!==it;++nt)et[nt].setValue(Y,tt)}bind(){let Y=this._bindings;for(let tt=this._targetGroup.nCachedObjects_,et=Y.length;tt!==et;++tt)Y[tt].bind()}unbind(){let Y=this._bindings;for(let tt=this._targetGroup.nCachedObjects_,et=Y.length;tt!==et;++tt)Y[tt].unbind()}}class r{constructor(Y,tt,et){this.path=tt,this.parsedPath=et||r.parseTrackName(tt),this.node=r.findNode(Y,this.parsedPath.nodeName),this.rootNode=Y,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(Y,tt,et){if(!(Y&&Y.isAnimationObjectGroup))return new r(Y,tt,et);else return new r.Composite(Y,tt,et)}static sanitizeNodeName(Y){return Y.replace(/\s/g,"_").replace(Wu,"")}static parseTrackName(Y){let tt=Ju.exec(Y);if(tt===null)throw Error("THREE.PropertyBinding: Cannot parse trackName: "+Y);let et={nodeName:tt[2],objectName:tt[3],objectIndex:tt[4],propertyName:tt[5],propertyIndex:tt[6]},nt=et.nodeName&&et.nodeName.lastIndexOf(".");if(nt!==void 0&&nt!==-1){let it=et.nodeName.substring(nt+1);if($u.indexOf(it)!==-1)et.nodeName=et.nodeName.substring(0,nt),et.objectName=it}if(et.propertyName===null||et.propertyName.length===0)throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+Y);return et}static findNode(Y,tt){if(tt===void 0||tt===""||tt==="."||tt===-1||tt===Y.name||tt===Y.uuid)return Y;if(Y.skeleton){let et=Y.skeleton.getBoneByName(tt);if(et!==void 0)return et}if(Y.children){let et=function(it){for(let st=0;st<it.length;st++){let rt=it[st];if(rt.name===tt||rt.uuid===tt)return rt;let at=et(rt.children);if(at)return at}return null},nt=et(Y.children);if(nt)return nt}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(Y,tt){Y[tt]=this.targetObject[this.propertyName]}_getValue_array(Y,tt){let et=this.resolvedProperty;for(let nt=0,it=et.length;nt!==it;++nt)Y[tt++]=et[nt]}_getValue_arrayElement(Y,tt){Y[tt]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(Y,tt){this.resolvedProperty.toArray(Y,tt)}_setValue_direct(Y,tt){this.targetObject[this.propertyName]=Y[tt]}_setValue_direct_setNeedsUpdate(Y,tt){this.targetObject[this.propertyName]=Y[tt],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(Y,tt){this.targetObject[this.propertyName]=Y[tt],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(Y,tt){let et=this.resolvedProperty;for(let nt=0,it=et.length;nt!==it;++nt)et[nt]=Y[tt++]}_setValue_array_setNeedsUpdate(Y,tt){let et=this.resolvedProperty;for(let nt=0,it=et.length;nt!==it;++nt)et[nt]=Y[tt++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(Y,tt){let et=this.resolvedProperty;for(let nt=0,it=et.length;nt!==it;++nt)et[nt]=Y[tt++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(Y,tt){this.resolvedProperty[this.propertyIndex]=Y[tt]}_setValue_arrayElement_setNeedsUpdate(Y,tt){this.resolvedProperty[this.propertyIndex]=Y[tt],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(Y,tt){this.resolvedProperty[this.propertyIndex]=Y[tt],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(Y,tt){this.resolvedProperty.fromArray(Y,tt)}_setValue_fromArray_setNeedsUpdate(Y,tt){this.resolvedProperty.fromArray(Y,tt),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(Y,tt){this.resolvedProperty.fromArray(Y,tt),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(Y,tt){this.bind(),this.getValue(Y,tt)}_setValue_unbound(Y,tt){this.bind(),this.setValue(Y,tt)}bind(){let Y=this.node,tt=this.parsedPath,{objectName:et,propertyName:nt,propertyIndex:it}=tt;if(!Y)Y=r.findNode(this.rootNode,tt.nodeName),this.node=Y;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!Y){hn("PropertyBinding: No target node found for track: "+this.path+".");return}if(et){let ot=tt.objectIndex;switch(et){case"materials":if(!Y.material){gn("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!Y.material.materials){gn("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}Y=Y.material.materials;break;case"bones":if(!Y.skeleton){gn("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}Y=Y.skeleton.bones;for(let lt=0;lt<Y.length;lt++)if(Y[lt].name===ot){ot=lt;break}break;case"map":if("map"in Y){Y=Y.map;break}if(!Y.material){gn("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!Y.material.map){gn("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}Y=Y.material.map;break;default:if(Y[et]===void 0){gn("PropertyBinding: Can not bind to objectName of node undefined.",this);return}Y=Y[et]}if(ot!==void 0){if(Y[ot]===void 0){gn("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,Y);return}Y=Y[ot]}}let st=Y[nt];if(st===void 0){let ot=tt.nodeName;gn("PropertyBinding: Trying to update property for track: "+ot+"."+nt+" but it wasn't found.",Y);return}let rt=this.Versioning.None;if(this.targetObject=Y,Y.isMaterial===!0)rt=this.Versioning.NeedsUpdate;else if(Y.isObject3D===!0)rt=this.Versioning.MatrixWorldNeedsUpdate;let at=this.BindingType.Direct;if(it!==void 0){if(nt==="morphTargetInfluences"){if(!Y.geometry){gn("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!Y.geometry.morphAttributes){gn("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(Y.morphTargetDictionary[it]!==void 0)it=Y.morphTargetDictionary[it]}at=this.BindingType.ArrayElement,this.resolvedProperty=st,this.propertyIndex=it}else if(st.fromArray!==void 0&&st.toArray!==void 0)at=this.BindingType.HasFromToArray,this.resolvedProperty=st;else if(Array.isArray(st))at=this.BindingType.EntireArray,this.resolvedProperty=st;else this.propertyName=nt;this.getValue=this.GetterByBindingType[at],this.setValue=this.SetterByBindingTypeAndVersioning[at][rt]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}r.Composite=ih;r.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};r.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};r.prototype.GetterByBindingType=[r.prototype._getValue_direct,r.prototype._getValue_array,r.prototype._getValue_arrayElement,r.prototype._getValue_toArray];r.prototype.SetterByBindingTypeAndVersioning=[[r.prototype._setValue_direct,r.prototype._setValue_direct_setNeedsUpdate,r.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[r.prototype._setValue_array,r.prototype._setValue_array_setNeedsUpdate,r.prototype._setValue_array_setMatrixWorldNeedsUpdate],[r.prototype._setValue_arrayElement,r.prototype._setValue_arrayElement_setNeedsUpdate,r.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[r.prototype._setValue_fromArray,r.prototype._setValue_fromArray_setNeedsUpdate,r.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Bg=new Float32Array(1);class sh{static{this.prototype.isMatrix2=!0}constructor(Y,tt,et,nt){if(this.elements=[1,0,0,1],Y!==void 0)this.set(Y,tt,et,nt)}identity(){return this.set(1,0,0,1),this}fromArray(Y,tt=0){for(let et=0;et<4;et++)this.elements[et]=Y[et+tt];return this}set(Y,tt,et,nt){let it=this.elements;return it[0]=Y,it[2]=tt,it[1]=et,it[3]=nt,this}}function tl(Y,tt,et,nt){let it=Ku(nt);switch(et){case 1021:return Y*tt;case 1028:return Y*tt/it.components*it.byteLength;case 1029:return Y*tt/it.components*it.byteLength;case 1030:return Y*tt*2/it.components*it.byteLength;case 1031:return Y*tt*2/it.components*it.byteLength;case 1022:return Y*tt*3/it.components*it.byteLength;case 1023:return Y*tt*4/it.components*it.byteLength;case 1033:return Y*tt*4/it.components*it.byteLength;case 33776:case 33777:return Math.floor((Y+3)/4)*Math.floor((tt+3)/4)*8;case 33778:case 33779:return Math.floor((Y+3)/4)*Math.floor((tt+3)/4)*16;case 35841:case 35843:return Math.max(Y,16)*Math.max(tt,8)/4;case 35840:case 35842:return Math.max(Y,8)*Math.max(tt,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((Y+3)/4)*Math.floor((tt+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((Y+3)/4)*Math.floor((tt+3)/4)*16;case 37808:return Math.floor((Y+3)/4)*Math.floor((tt+3)/4)*16;case 37809:return Math.floor((Y+4)/5)*Math.floor((tt+3)/4)*16;case 37810:return Math.floor((Y+4)/5)*Math.floor((tt+4)/5)*16;case 37811:return Math.floor((Y+5)/6)*Math.floor((tt+4)/5)*16;case 37812:return Math.floor((Y+5)/6)*Math.floor((tt+5)/6)*16;case 37813:return Math.floor((Y+7)/8)*Math.floor((tt+4)/5)*16;case 37814:return Math.floor((Y+7)/8)*Math.floor((tt+5)/6)*16;case 37815:return Math.floor((Y+7)/8)*Math.floor((tt+7)/8)*16;case 37816:return Math.floor((Y+9)/10)*Math.floor((tt+4)/5)*16;case 37817:return Math.floor((Y+9)/10)*Math.floor((tt+5)/6)*16;case 37818:return Math.floor((Y+9)/10)*Math.floor((tt+7)/8)*16;case 37819:return Math.floor((Y+9)/10)*Math.floor((tt+9)/10)*16;case 37820:return Math.floor((Y+11)/12)*Math.floor((tt+9)/10)*16;case 37821:return Math.floor((Y+11)/12)*Math.floor((tt+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(Y/4)*Math.ceil(tt/4)*16;case 36283:case 36284:return Math.ceil(Y/4)*Math.ceil(tt/4)*8;case 36285:case 36286:return Math.ceil(Y/4)*Math.ceil(tt/4)*16}throw Error(`Unable to determine texture byte length for ${et} format.`)}function Ku(Y){switch(Y){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${Y}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));if(typeof window<"u")if(window.__THREE__)hn("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="187";function Ah(){let Y=null,tt=!1,et=null,nt=null;function it(st,rt){nt=Y.requestAnimationFrame(it),et(st,rt)}return{start:function(){if(tt===!0)return;if(et===null)return;if(Y===null)return;nt=Y.requestAnimationFrame(it),tt=!0},stop:function(){if(Y!==null)Y.cancelAnimationFrame(nt);tt=!1},setAnimationLoop:function(st){et=st},setContext:function(st){Y=st}}}function Qu(Y){let tt=new WeakMap;function et(at,ot){let{array:lt,usage:ct}=at,ut=lt.byteLength,ht=Y.createBuffer();Y.bindBuffer(ot,ht),Y.bufferData(ot,lt,ct),at.onUploadCallback();let ft;if(lt instanceof Float32Array)ft=Y.FLOAT;else if(typeof Float16Array<"u"&&lt instanceof Float16Array)ft=Y.HALF_FLOAT;else if(lt instanceof Uint16Array)if(at.isFloat16BufferAttribute)ft=Y.HALF_FLOAT;else ft=Y.UNSIGNED_SHORT;else if(lt instanceof Int16Array)ft=Y.SHORT;else if(lt instanceof Uint32Array)ft=Y.UNSIGNED_INT;else if(lt instanceof Int32Array)ft=Y.INT;else if(lt instanceof Int8Array)ft=Y.BYTE;else if(lt instanceof Uint8Array)ft=Y.UNSIGNED_BYTE;else if(lt instanceof Uint8ClampedArray)ft=Y.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+lt);return{buffer:ht,type:ft,bytesPerElement:lt.BYTES_PER_ELEMENT,version:at.version,size:ut}}function nt(at,ot,lt){let{array:ct,updateRanges:ut}=ot;if(Y.bindBuffer(lt,at),ut.length===0)Y.bufferSubData(lt,0,ct);else{ut.sort((ft,xt)=>ft.start-xt.start);let ht=0;for(let ft=1;ft<ut.length;ft++){let xt=ut[ht],St=ut[ft];if(St.start<=xt.start+xt.count+1)xt.count=Math.max(xt.count,St.start+St.count-xt.start);else++ht,ut[ht]=St}ut.length=ht+1;for(let ft=0,xt=ut.length;ft<xt;ft++){let St=ut[ft];Y.bufferSubData(lt,St.start*ct.BYTES_PER_ELEMENT,ct,St.start,St.count)}ot.clearUpdateRanges()}ot.onUploadCallback()}function it(at){if(at.isInterleavedBufferAttribute)at=at.data;return tt.get(at)}function st(at){if(at.isInterleavedBufferAttribute)at=at.data;let ot=tt.get(at);if(ot)Y.deleteBuffer(ot.buffer),tt.delete(at)}function rt(at,ot){if(at.isInterleavedBufferAttribute)at=at.data;if(at.isGLBufferAttribute){let ct=tt.get(at);if(!ct||ct.version<at.version)tt.set(at,{buffer:at.buffer,type:at.type,bytesPerElement:at.elementSize,version:at.version});return}let lt=tt.get(at);if(lt===void 0)tt.set(at,et(at,ot));else if(lt.version<at.version){if(lt.size!==at.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");nt(lt.buffer,at,ot),lt.version=at.version}}return{get:it,remove:st,update:rt}}var ju=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,td=`#ifdef USE_ALPHAHASH
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
#endif`,ed=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,id=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rd=`#ifdef USE_AOMAP
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
#endif`,ad=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,od=`#ifdef USE_BATCHING
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
#endif`,ld=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ud=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,dd=`#ifdef USE_IRIDESCENCE
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
#endif`,fd=`#ifdef USE_BUMPMAP
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
#endif`,pd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,md=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_d=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,vd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,yd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Sd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Md=`#define PI 3.141592653589793
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
} // validated`,bd=`vec3 transformedNormal = objectNormal;
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
#endif`,Td=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ed=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ad=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Rd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Id=`#ifdef USE_ENVMAP
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
#endif`,Pd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Ld=`#ifdef USE_ENVMAP
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
#endif`,Nd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Dd=`#ifdef USE_ENVMAP
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
#endif`,Ud=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Od=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zd=`#ifdef USE_GRADIENTMAP
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
}`,Gd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wd=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Vd=`#ifdef USE_ENVMAP
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
#endif`,Xd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jd=`PhysicalMaterial material;
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
#endif`,$d=`uniform sampler2D dfgLUT;
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
}`,Kd=`
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
#endif`,Qd=`#if defined( RE_IndirectDiffuse )
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
#endif`,jd=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tf=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,ef=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,af=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,of=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,cf=`#if defined( USE_POINTS_UV )
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
#endif`,hf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,uf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,df=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ff=`#if defined( USE_MORPHCOLORS )
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
#endif`,pf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mf=`#ifdef USE_MORPHTARGETS
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
#endif`,gf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_f=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,xf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,vf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Mf=`#ifdef USE_NORMALMAP
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
#endif`,bf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Tf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ef=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Af=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Rf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Cf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,If=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Pf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Nf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Df=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Uf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ff=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Of=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Bf=`float getShadowMask() {
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
}`,zf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gf=`#ifdef USE_SKINNING
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
#endif`,kf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hf=`#ifdef USE_SKINNING
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
#endif`,Wf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yf=`#ifdef USE_TRANSMISSION
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
#endif`,Zf=`#ifdef USE_TRANSMISSION
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
#endif`,Jf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$f=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`;var Qf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,jf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tp=`uniform sampler2D t2D;
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
}`,ep=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,np=`uniform float backgroundBlurriness;
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
}`,ip=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rp=`#include <common>
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
}`,ap=`#if DEPTH_PACKING == 3200
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
}`,op=`#define DISTANCE
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
}`,lp=`#define DISTANCE
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
}`,cp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,up=`uniform float scale;
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
}`,dp=`uniform vec3 diffuse;
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
}`,fp=`#include <common>
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
}`,pp=`uniform vec3 diffuse;
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
}`,mp=`#define LAMBERT
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
}`,gp=`#define LAMBERT
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
}`,_p=`#define MATCAP
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
}`,xp=`#define MATCAP
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
}`,vp=`#define NORMAL
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
}`,yp=`#define NORMAL
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
}`,Sp=`#define PHONG
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
}`,Mp=`#define PHONG
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
}`,bp=`#define STANDARD
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
}`,Tp=`#define STANDARD
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
}`,Ep=`#define TOON
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
}`,Ap=`#define TOON
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
}`,wp=`uniform float size;
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
}`,Rp=`uniform vec3 diffuse;
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
}`,Cp=`#include <common>
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
}`,Ip=`uniform vec3 color;
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
}`,Pp=`uniform float rotation;
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
}`,Lp=`uniform vec3 diffuse;
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
}`,Mn={alphahash_fragment:ju,alphahash_pars_fragment:td,alphamap_fragment:ed,alphamap_pars_fragment:nd,alphatest_fragment:id,alphatest_pars_fragment:sd,aomap_fragment:rd,aomap_pars_fragment:ad,batching_pars_vertex:od,batching_vertex:ld,begin_vertex:cd,beginnormal_vertex:hd,bsdfs:ud,iridescence_fragment:dd,bumpmap_pars_fragment:fd,clipping_planes_fragment:pd,clipping_planes_pars_fragment:md,clipping_planes_pars_vertex:gd,clipping_planes_vertex:_d,color_fragment:xd,color_pars_fragment:vd,color_pars_vertex:yd,color_vertex:Sd,common:Md,defaultnormal_vertex:bd,displacementmap_pars_vertex:Td,displacementmap_vertex:Ed,emissivemap_fragment:Ad,emissivemap_pars_fragment:wd,colorspace_fragment:Rd,colorspace_pars_fragment:Cd,envmap_fragment:Id,envmap_common_pars_fragment:Pd,envmap_pars_fragment:Ld,envmap_pars_vertex:Nd,envmap_physical_pars_fragment:Vd,envmap_vertex:Dd,fog_vertex:Ud,fog_pars_vertex:Fd,fog_fragment:Od,fog_pars_fragment:Bd,gradientmap_pars_fragment:zd,lightmap_pars_fragment:Gd,lights_lambert_fragment:kd,lights_lambert_pars_fragment:Hd,lights_pars_begin:Wd,lights_toon_fragment:Xd,lights_toon_pars_fragment:qd,lights_phong_fragment:Yd,lights_phong_pars_fragment:Zd,lights_physical_fragment:Jd,lights_physical_pars_fragment:$d,lights_fragment_begin:Kd,lights_fragment_maps:Qd,lights_fragment_end:jd,lightprobes_pars_fragment:tf,logdepthbuf_fragment:ef,logdepthbuf_pars_fragment:nf,logdepthbuf_pars_vertex:sf,logdepthbuf_vertex:rf,map_fragment:af,map_pars_fragment:of,map_particle_fragment:lf,map_particle_pars_fragment:cf,metalnessmap_fragment:hf,metalnessmap_pars_fragment:uf,morphinstance_vertex:df,morphcolor_vertex:ff,morphnormal_vertex:pf,morphtarget_pars_vertex:mf,morphtarget_vertex:gf,normal_fragment_begin:_f,normal_fragment_maps:xf,normal_pars_fragment:vf,normal_pars_vertex:yf,normal_vertex:Sf,normalmap_pars_fragment:Mf,clearcoat_normal_fragment_begin:bf,clearcoat_normal_fragment_maps:Tf,clearcoat_pars_fragment:Ef,iridescence_pars_fragment:Af,opaque_fragment:wf,packing:Rf,premultiplied_alpha_fragment:Cf,project_vertex:If,dithering_fragment:Pf,dithering_pars_fragment:Lf,roughnessmap_fragment:Nf,roughnessmap_pars_fragment:Df,shadowmap_pars_fragment:Uf,shadowmap_pars_vertex:Ff,shadowmap_vertex:Of,shadowmask_pars_fragment:Bf,skinbase_vertex:zf,skinning_pars_vertex:Gf,skinning_vertex:kf,skinnormal_vertex:Hf,specularmap_fragment:Wf,specularmap_pars_fragment:Vf,tonemapping_fragment:Xf,tonemapping_pars_fragment:qf,transmission_fragment:Yf,transmission_pars_fragment:Zf,uv_pars_fragment:Jf,uv_pars_vertex:$f,uv_vertex:Kf,worldpos_vertex:Qf,background_vert:jf,background_frag:tp,backgroundCube_vert:ep,backgroundCube_frag:np,cube_vert:ip,cube_frag:sp,depth_vert:rp,depth_frag:ap,distance_vert:op,distance_frag:lp,equirect_vert:cp,equirect_frag:hp,linedashed_vert:up,linedashed_frag:dp,meshbasic_vert:fp,meshbasic_frag:pp,meshlambert_vert:mp,meshlambert_frag:gp,meshmatcap_vert:_p,meshmatcap_frag:xp,meshnormal_vert:vp,meshnormal_frag:yp,meshphong_vert:Sp,meshphong_frag:Mp,meshphysical_vert:bp,meshphysical_frag:Tp,meshtoon_vert:Ep,meshtoon_frag:Ap,points_vert:wp,points_frag:Rp,shadow_vert:Cp,shadow_frag:Ip,sprite_vert:Pp,sprite_frag:Lp},Ke={common:{diffuse:{value:new t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new _n},alphaMap:{value:null},alphaMapTransform:{value:new _n},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new _n}},envmap:{envMap:{value:null},envMapRotation:{value:new _n},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new _n}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new _n}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new _n},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new _n},normalScale:{value:new n(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new _n},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new _n}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new _n}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new _n}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new _n},alphaTest:{value:0},uvTransform:{value:new _n}},sprite:{diffuse:{value:new t(16777215)},opacity:{value:1},center:{value:new n(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new _n},alphaMap:{value:null},alphaMapTransform:{value:new _n},alphaTest:{value:0}}},Ii={basic:{uniforms:si([Ke.common,Ke.specularmap,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.fog]),vertexShader:Mn.meshbasic_vert,fragmentShader:Mn.meshbasic_frag},lambert:{uniforms:si([Ke.common,Ke.specularmap,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.fog,Ke.lights,{emissive:{value:new t(0)},envMapIntensity:{value:1}}]),vertexShader:Mn.meshlambert_vert,fragmentShader:Mn.meshlambert_frag},phong:{uniforms:si([Ke.common,Ke.specularmap,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.fog,Ke.lights,{emissive:{value:new t(0)},specular:{value:new t(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Mn.meshphong_vert,fragmentShader:Mn.meshphong_frag},standard:{uniforms:si([Ke.common,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.roughnessmap,Ke.metalnessmap,Ke.fog,Ke.lights,{emissive:{value:new t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Mn.meshphysical_vert,fragmentShader:Mn.meshphysical_frag},toon:{uniforms:si([Ke.common,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.gradientmap,Ke.fog,Ke.lights,{emissive:{value:new t(0)}}]),vertexShader:Mn.meshtoon_vert,fragmentShader:Mn.meshtoon_frag},matcap:{uniforms:si([Ke.common,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.fog,{matcap:{value:null}}]),vertexShader:Mn.meshmatcap_vert,fragmentShader:Mn.meshmatcap_frag},points:{uniforms:si([Ke.points,Ke.fog]),vertexShader:Mn.points_vert,fragmentShader:Mn.points_frag},dashed:{uniforms:si([Ke.common,Ke.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Mn.linedashed_vert,fragmentShader:Mn.linedashed_frag},depth:{uniforms:si([Ke.common,Ke.displacementmap]),vertexShader:Mn.depth_vert,fragmentShader:Mn.depth_frag},normal:{uniforms:si([Ke.common,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,{opacity:{value:1}}]),vertexShader:Mn.meshnormal_vert,fragmentShader:Mn.meshnormal_frag},sprite:{uniforms:si([Ke.sprite,Ke.fog]),vertexShader:Mn.sprite_vert,fragmentShader:Mn.sprite_frag},background:{uniforms:{uvTransform:{value:new _n},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Mn.background_vert,fragmentShader:Mn.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new _n}},vertexShader:Mn.backgroundCube_vert,fragmentShader:Mn.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Mn.cube_vert,fragmentShader:Mn.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Mn.equirect_vert,fragmentShader:Mn.equirect_frag},distance:{uniforms:si([Ke.common,Ke.displacementmap,{referencePosition:{value:new e},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:Mn.distance_vert,fragmentShader:Mn.distance_frag},shadow:{uniforms:si([Ke.lights,Ke.fog,{color:{value:new t(0)},opacity:{value:1}}]),vertexShader:Mn.shadow_vert,fragmentShader:Mn.shadow_frag}};Ii.physical={uniforms:si([Ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new _n},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new _n},clearcoatNormalScale:{value:new n(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new _n},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new _n},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new _n},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new _n},sheen:{value:0},sheenColor:{value:new t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new _n},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new _n},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new _n},transmissionSamplerSize:{value:new n},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new _n},attenuationDistance:{value:0},attenuationColor:{value:new t(0)},specularColor:{value:new t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new _n},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new _n},anisotropyVector:{value:new n},anisotropyMap:{value:null},anisotropyMapTransform:{value:new _n}}]),vertexShader:Mn.meshphysical_vert,fragmentShader:Mn.meshphysical_frag};var la={r:0,b:0,g:0},Np=new i,wh=new _n;wh.set(-1,0,0,0,1,0,0,0,1);function Dp(Y,tt,et,nt,it,st){let rt=new t(0),at=it===!0?0:1,ot,lt,ct=null,ut=0,ht=null;function ft(bt){let Tt=bt.isScene===!0?bt.background:null;if(Tt&&Tt.isTexture){let Mt=bt.backgroundBlurriness>0;Tt=tt.get(Tt,Mt)}return Tt}function xt(bt){let Tt=!1,Mt=ft(bt);if(Mt===null)dt(rt,at);else if(Mt&&Mt.isColor)dt(Mt,1),Tt=!0;let Et=Y.xr.getEnvironmentBlendMode();if(Et==="additive")et.buffers.color.setClear(0,0,0,1,st);else if(Et==="alpha-blend")et.buffers.color.setClear(0,0,0,0,st);if(Y.autoClear||Tt)et.buffers.depth.setTest(!0),et.buffers.depth.setMask(!0),et.buffers.color.setMask(!0),Y.clear(Y.autoClearColor,Y.autoClearDepth,Y.autoClearStencil)}function St(bt,Tt){let Mt=ft(Tt);if(Mt&&Mt.isCubeTexture){if(lt===void 0)lt=new o(new ji(1,1,1),new S({name:"BackgroundCubeMaterial",uniforms:ms(Ii.backgroundCube.uniforms),vertexShader:Ii.backgroundCube.vertexShader,fragmentShader:Ii.backgroundCube.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),lt.geometry.deleteAttribute("normal"),lt.geometry.deleteAttribute("uv"),lt.onBeforeRender=function(Et,Ct,mt){this.matrixWorld.copyPosition(mt.matrixWorld)},Object.defineProperty(lt.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),nt.update(lt);if(lt.material.uniforms.envMap.value=Mt,lt.material.uniforms.backgroundBlurriness.value=Tt.backgroundBlurriness,lt.material.uniforms.backgroundIntensity.value=Tt.backgroundIntensity,lt.material.uniforms.backgroundRotation.value.setFromMatrix4(Np.makeRotationFromEuler(Tt.backgroundRotation)).transpose(),Mt.isRenderTargetTexture===!1)lt.material.uniforms.backgroundRotation.value.premultiply(wh);if(lt.material.toneMapped=s.getTransfer(Mt.colorSpace)!==a,ct!==Mt||ut!==Mt.version||ht!==Y.toneMapping)lt.material.needsUpdate=!0,ct=Mt,ut=Mt.version,ht=Y.toneMapping;lt.layers.enableAll(),bt.unshift(lt,lt.geometry,lt.material,0,0,null)}else if(Mt&&Mt.isTexture){if(ot===void 0)ot=new o(new K(2,2),new S({name:"BackgroundMaterial",uniforms:ms(Ii.background.uniforms),vertexShader:Ii.background.vertexShader,fragmentShader:Ii.background.fragmentShader,side:H,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),ot.geometry.deleteAttribute("normal"),Object.defineProperty(ot.material,"map",{get:function(){return this.uniforms.t2D.value}}),nt.update(ot);if(ot.material.uniforms.t2D.value=Mt,ot.material.uniforms.backgroundIntensity.value=Tt.backgroundIntensity,ot.material.toneMapped=s.getTransfer(Mt.colorSpace)!==a,Mt.matrixAutoUpdate===!0)Mt.updateMatrix();if(ot.material.uniforms.uvTransform.value.copy(Mt.matrix),ct!==Mt||ut!==Mt.version||ht!==Y.toneMapping)ot.material.needsUpdate=!0,ct=Mt,ut=Mt.version,ht=Y.toneMapping;ot.layers.enableAll(),bt.unshift(ot,ot.geometry,ot.material,0,0,null)}}function dt(bt,Tt){bt.getRGB(la,ko(Y)),et.buffers.color.setClear(la.r,la.g,la.b,Tt,st)}function pt(){if(lt!==void 0)lt.geometry.dispose(),lt.material.dispose(),lt=void 0;if(ot!==void 0)ot.geometry.dispose(),ot.material.dispose(),ot=void 0}return{getClearColor:function(){return rt},setClearColor:function(bt,Tt=1){rt.set(bt),at=Tt,dt(rt,at)},getClearAlpha:function(){return at},setClearAlpha:function(bt){at=bt,dt(rt,at)},render:xt,addToRenderList:St,dispose:pt}}function Up(Y,tt){let et=Y.getParameter(Y.MAX_VERTEX_ATTRIBS),nt={},it=ht(null),st=it,rt=!1;function at(Pt,Bt,$t,wt,Xt){let Yt=!1,Ft=ut(Pt,wt,$t,Bt);if(st!==Ft)st=Ft,lt(st.object);if(Yt=ft(Pt,wt,$t,Xt),Yt)xt(Pt,wt,$t,Xt);if(Xt!==null)tt.update(Xt,Y.ELEMENT_ARRAY_BUFFER);if(Yt||rt){if(rt=!1,Mt(Pt,Bt,$t,wt),Xt!==null)Y.bindBuffer(Y.ELEMENT_ARRAY_BUFFER,tt.get(Xt).buffer)}}function ot(){return Y.createVertexArray()}function lt(Pt){return Y.bindVertexArray(Pt)}function ct(Pt){return Y.deleteVertexArray(Pt)}function ut(Pt,Bt,$t,wt){let Xt=wt.wireframe===!0,Yt=nt[Bt.id];if(Yt===void 0)Yt={},nt[Bt.id]=Yt;let Ft=Pt.isInstancedMesh===!0?Pt.id:0,Ve=Yt[Ft];if(Ve===void 0)Ve={},Yt[Ft]=Ve;let Ht=Ve[$t.id];if(Ht===void 0)Ht={},Ve[$t.id]=Ht;let Jt=Ht[Xt];if(Jt===void 0)Jt=ht(ot()),Ht[Xt]=Jt;return Jt}function ht(Pt){let Bt=[],$t=[],wt=[];for(let Xt=0;Xt<et;Xt++)Bt[Xt]=0,$t[Xt]=0,wt[Xt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Bt,enabledAttributes:$t,attributeDivisors:wt,object:Pt,attributes:{},index:null}}function ft(Pt,Bt,$t,wt){let Xt=st.attributes,Yt=Bt.attributes,Ft=0,Ve=$t.getAttributes();for(let Ht in Ve)if(Ve[Ht].location>=0){let Ge=Xt[Ht],on=Yt[Ht];if(on===void 0){if(Ht==="instanceMatrix"&&Pt.instanceMatrix)on=Pt.instanceMatrix;if(Ht==="instanceColor"&&Pt.instanceColor)on=Pt.instanceColor}if(Ge===void 0)return!0;if(Ge.attribute!==on)return!0;if(on&&Ge.data!==on.data)return!0;Ft++}if(st.attributesNum!==Ft)return!0;if(st.index!==wt)return!0;return!1}function xt(Pt,Bt,$t,wt){let Xt={},Yt=Bt.attributes,Ft=0,Ve=$t.getAttributes();for(let Ht in Ve)if(Ve[Ht].location>=0){let Ge=Yt[Ht];if(Ge===void 0){if(Ht==="instanceMatrix"&&Pt.instanceMatrix)Ge=Pt.instanceMatrix;if(Ht==="instanceColor"&&Pt.instanceColor)Ge=Pt.instanceColor}let on={};if(on.attribute=Ge,Ge&&Ge.data)on.data=Ge.data;Xt[Ht]=on,Ft++}st.attributes=Xt,st.attributesNum=Ft,st.index=wt}function St(){let Pt=st.newAttributes;for(let Bt=0,$t=Pt.length;Bt<$t;Bt++)Pt[Bt]=0}function dt(Pt){pt(Pt,0)}function pt(Pt,Bt){let $t=st.newAttributes,wt=st.enabledAttributes,Xt=st.attributeDivisors;if($t[Pt]=1,wt[Pt]===0)Y.enableVertexAttribArray(Pt),wt[Pt]=1;if(Xt[Pt]!==Bt)Y.vertexAttribDivisor(Pt,Bt),Xt[Pt]=Bt}function bt(){let Pt=st.newAttributes,Bt=st.enabledAttributes;for(let $t=0,wt=Bt.length;$t<wt;$t++)if(Bt[$t]!==Pt[$t])Y.disableVertexAttribArray($t),Bt[$t]=0}function Tt(Pt,Bt,$t,wt,Xt,Yt,Ft){if(Ft===!0)Y.vertexAttribIPointer(Pt,Bt,$t,Xt,Yt);else Y.vertexAttribPointer(Pt,Bt,$t,wt,Xt,Yt)}function Mt(Pt,Bt,$t,wt){St();let Xt=wt.attributes,Yt=$t.getAttributes(),Ft=Bt.defaultAttributeValues;for(let Ve in Yt){let Ht=Yt[Ve];if(Ht.location>=0){let Jt=Xt[Ve];if(Jt===void 0){if(Ve==="instanceMatrix"&&Pt.instanceMatrix)Jt=Pt.instanceMatrix;if(Ve==="instanceColor"&&Pt.instanceColor)Jt=Pt.instanceColor}if(Jt!==void 0){let Ge=Jt.normalized,on=Jt.itemSize,qt=tt.get(Jt);if(qt===void 0)continue;let{buffer:jt,type:rn,bytesPerElement:fn}=qt,pn=rn===Y.INT||rn===Y.UNSIGNED_INT||Jt.gpuType===Va;if(Jt.isInterleavedBufferAttribute){let an=Jt.data,In=an.isInterleavedBuffer===!0?an.stride:an.itemSize,bn=Jt.offset;if(an.isInstancedInterleavedBuffer||an.isInstancedBufferAttribute){for(let yn=0;yn<Ht.locationSize;yn++)pt(Ht.location+yn,an.meshPerAttribute);if(Pt.isInstancedMesh!==!0&&wt._maxInstanceCount===void 0)wt._maxInstanceCount=an.meshPerAttribute*an.count}else for(let yn=0;yn<Ht.locationSize;yn++)dt(Ht.location+yn);Y.bindBuffer(Y.ARRAY_BUFFER,jt);for(let yn=0;yn<Ht.locationSize;yn++)Tt(Ht.location+yn,on/Ht.locationSize,rn,Ge,In*fn,(bn+on/Ht.locationSize*yn)*fn,pn)}else{if(Jt.isInstancedBufferAttribute){for(let an=0;an<Ht.locationSize;an++)pt(Ht.location+an,Jt.meshPerAttribute);if(Pt.isInstancedMesh!==!0&&wt._maxInstanceCount===void 0)wt._maxInstanceCount=Jt.meshPerAttribute*Jt.count}else for(let an=0;an<Ht.locationSize;an++)dt(Ht.location+an);Y.bindBuffer(Y.ARRAY_BUFFER,jt);for(let an=0;an<Ht.locationSize;an++)Tt(Ht.location+an,on/Ht.locationSize,rn,Ge,on*fn,on/Ht.locationSize*an*fn,pn)}}else if(Ft!==void 0){let Ge=Ft[Ve];if(Ge!==void 0)switch(Ge.length){case 2:Y.vertexAttrib2fv(Ht.location,Ge);break;case 3:Y.vertexAttrib3fv(Ht.location,Ge);break;case 4:Y.vertexAttrib4fv(Ht.location,Ge);break;default:Y.vertexAttrib1fv(Ht.location,Ge)}}}}bt()}function Et(){Lt();for(let Pt in nt){let Bt=nt[Pt];for(let $t in Bt){let wt=Bt[$t];for(let Xt in wt){let Yt=wt[Xt];for(let Ft in Yt)ct(Yt[Ft].object),delete Yt[Ft];delete wt[Xt]}}delete nt[Pt]}}function Ct(Pt){if(nt[Pt.id]===void 0)return;let Bt=nt[Pt.id];for(let $t in Bt){let wt=Bt[$t];for(let Xt in wt){let Yt=wt[Xt];for(let Ft in Yt)ct(Yt[Ft].object),delete Yt[Ft];delete wt[Xt]}}delete nt[Pt.id]}function mt(Pt){for(let Bt in nt){let $t=nt[Bt];for(let wt in $t){let Xt=$t[wt];if(Xt[Pt.id]===void 0)continue;let Yt=Xt[Pt.id];for(let Ft in Yt)ct(Yt[Ft].object),delete Yt[Ft];delete Xt[Pt.id]}}}function vt(Pt){for(let Bt in nt){let $t=nt[Bt],wt=Pt.isInstancedMesh===!0?Pt.id:0,Xt=$t[wt];if(Xt===void 0)continue;for(let Yt in Xt){let Ft=Xt[Yt];for(let Ve in Ft)ct(Ft[Ve].object),delete Ft[Ve];delete Xt[Yt]}if(delete $t[wt],Object.keys($t).length===0)delete nt[Bt]}}function Lt(){if(Gt(),rt=!0,st===it)return;st=it,lt(st.object)}function Gt(){it.geometry=null,it.program=null,it.wireframe=!1}return{setup:at,reset:Lt,resetDefaultState:Gt,dispose:Et,releaseStatesOfGeometry:Ct,releaseStatesOfObject:vt,releaseStatesOfProgram:mt,initAttributes:St,enableAttribute:dt,disableUnusedAttributes:bt}}function Fp(Y,tt,et){let nt;function it(ot){nt=ot}function st(ot,lt){Y.drawArrays(nt,ot,lt),et.update(lt,nt,1)}function rt(ot,lt,ct){if(ct===0)return;Y.drawArraysInstanced(nt,ot,lt,ct),et.update(lt,nt,ct)}function at(ot,lt,ct){if(ct===0)return;tt.get("WEBGL_multi_draw").multiDrawArraysWEBGL(nt,ot,0,lt,0,ct);let ht=0;for(let ft=0;ft<ct;ft++)ht+=lt[ft];et.update(ht,nt,1)}this.setMode=it,this.render=st,this.renderInstances=rt,this.renderMultiDraw=at}function Op(Y,tt,et,nt){let it;function st(){if(it!==void 0)return it;if(tt.has("EXT_texture_filter_anisotropic")===!0){let mt=tt.get("EXT_texture_filter_anisotropic");it=Y.getParameter(mt.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else it=0;return it}function rt(mt){if(mt!==ki&&nt.convert(mt)!==Y.getParameter(Y.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function at(mt){let vt=mt===b&&(tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float"));if(mt!==Mi&&mt!==Gi&&!vt&&nt.convert(mt)!==Y.getParameter(Y.IMPLEMENTATION_COLOR_READ_TYPE))return!1;return!0}function ot(mt){if(mt==="highp"){if(Y.getShaderPrecisionFormat(Y.VERTEX_SHADER,Y.HIGH_FLOAT).precision>0&&Y.getShaderPrecisionFormat(Y.FRAGMENT_SHADER,Y.HIGH_FLOAT).precision>0)return"highp";mt="mediump"}if(mt==="mediump"){if(Y.getShaderPrecisionFormat(Y.VERTEX_SHADER,Y.MEDIUM_FLOAT).precision>0&&Y.getShaderPrecisionFormat(Y.FRAGMENT_SHADER,Y.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let lt=et.precision!==void 0?et.precision:"highp",ct=ot(lt);if(ct!==lt)hn("WebGLRenderer:",lt,"not supported, using",ct,"instead."),lt=ct;let ut=et.reversedDepthBuffer===!0&&tt.has("EXT_clip_control"),ht=et.logarithmicDepthBuffer===!0&&ut===!1;if(et.reversedDepthBuffer===!0&&ut===!1)hn("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");if(et.logarithmicDepthBuffer===!0&&ut===!0)hn("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let ft=Y.getParameter(Y.MAX_TEXTURE_IMAGE_UNITS),xt=Y.getParameter(Y.MAX_VERTEX_TEXTURE_IMAGE_UNITS),St=Y.getParameter(Y.MAX_TEXTURE_SIZE),dt=Y.getParameter(Y.MAX_CUBE_MAP_TEXTURE_SIZE),pt=Y.getParameter(Y.MAX_VERTEX_ATTRIBS),bt=Y.getParameter(Y.MAX_VERTEX_UNIFORM_VECTORS),Tt=Y.getParameter(Y.MAX_VARYING_VECTORS),Mt=Y.getParameter(Y.MAX_FRAGMENT_UNIFORM_VECTORS),Et=Y.getParameter(Y.MAX_SAMPLES),Ct=Y.getParameter(Y.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:st,getMaxPrecision:ot,textureFormatReadable:rt,textureTypeReadable:at,precision:lt,logarithmicDepthBuffer:ht,reversedDepthBuffer:ut,maxTextures:ft,maxVertexTextures:xt,maxTextureSize:St,maxCubemapSize:dt,maxAttributes:pt,maxVertexUniforms:bt,maxVaryings:Tt,maxFragmentUniforms:Mt,maxSamples:Et,samples:Ct}}function Bp(Y){let tt=this,et=null,nt=0,it=!1,st=!1,rt=new Ti,at=new _n,ot={value:null,needsUpdate:!1};this.uniform=ot,this.numPlanes=0,this.numIntersection=0,this.init=function(ut,ht){let ft=ut.length!==0||ht||nt!==0||it;return it=ht,nt=ut.length,ft},this.beginShadows=function(){st=!0,ct(null)},this.endShadows=function(){st=!1},this.setGlobalState=function(ut,ht){et=ct(ut,ht,0)},this.setState=function(ut,ht,ft){let{clippingPlanes:xt,clipIntersection:St,clipShadows:dt}=ut,pt=Y.get(ut);if(!it||xt===null||xt.length===0||st&&!dt)if(st)ct(null);else lt();else{let bt=st?0:nt,Tt=bt*4,Mt=pt.clippingState||null;ot.value=Mt,Mt=ct(xt,ht,Tt,ft);for(let Et=0;Et!==Tt;++Et)Mt[Et]=et[Et];pt.clippingState=Mt,this.numIntersection=St?this.numPlanes:0,this.numPlanes+=bt}};function lt(){if(ot.value!==et)ot.value=et,ot.needsUpdate=nt>0;tt.numPlanes=nt,tt.numIntersection=0}function ct(ut,ht,ft,xt){let St=ut!==null?ut.length:0,dt=null;if(St!==0){if(dt=ot.value,xt!==!0||dt===null){let pt=ft+St*4,bt=ht.matrixWorldInverse;if(at.getNormalMatrix(bt),dt===null||dt.length<pt)dt=new Float32Array(pt);for(let Tt=0,Mt=ft;Tt!==St;++Tt,Mt+=4)rt.copy(ut[Tt]).applyMatrix4(bt,at),rt.normal.toArray(dt,Mt),dt[Mt+3]=rt.constant}ot.value=dt,ot.needsUpdate=!0}return tt.numPlanes=St,tt.numIntersection=0,dt}}class ha extends _{constructor(Y=1,tt={}){super(Y,Y,tt);this.isWebGLCubeRenderTarget=!0;let et={width:Y,height:Y,depth:1},nt=[et,et,et,et,et,et];this.texture=new na(nt),this._setTextureOptions(tt),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(Y,tt){this.texture.type=tt.type,this.texture.colorSpace=tt.colorSpace,this.texture.generateMipmaps=tt.generateMipmaps,this.texture.minFilter=tt.minFilter,this.texture.magFilter=tt.magFilter;let et={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},nt=new ji(5,5,5),it=new S({name:"CubemapFromEquirect",uniforms:ms(et.uniforms),vertexShader:et.vertexShader,fragmentShader:et.fragmentShader,side:ii,blending:U});it.uniforms.tEquirect.value=tt;let st=new o(nt,it),rt=tt.minFilter;if(tt.minFilter===N)tt.minFilter=M;return new lr(1,10,this).update(Y,st),tt.minFilter=rt,st.geometry.dispose(),st.material.dispose(),this}clear(Y,tt=!0,et=!0,nt=!0){let it=Y.getRenderTarget();for(let st=0;st<6;st++)Y.setRenderTarget(this,st),Y.clear(tt,et,nt);Y.setRenderTarget(it)}}var rh=256,zp=3,Gp=20,Rh=256,Ch=16,kp=3,Hp=new e,Wp=new t;class G{constructor(Y){this._renderer=Y,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new lr(1,10,null),this._boxMesh=new o(new ji(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(Y,tt=0,et=0.1,nt=100,it={}){let{size:st=256,position:rt=Hp}=it,at=this._renderer;this._setSize(st);let ot=this._allocateTarget(),lt=this._getSourceTarget(!0);if(tt>0)lt.texture.mipmapsAutoUpdate=!1;let{autoClear:ct,autoClearColor:ut,autoClearDepth:ht,autoClearStencil:ft}=at,xt=Y.background;if(at.autoClear=!0,at.autoClearColor=!0,at.autoClearDepth=!0,at.autoClearStencil=!0,xt===null)Y.background=at.getClearColor(Wp);let St=new lr(et,nt,lt);if(St.position.copy(rt),St.update(at,Y),at.autoClear=ct,at.autoClearColor=ut,at.autoClearDepth=ht,at.autoClearStencil=ft,Y.background=xt,tt>0)lt.texture.mipmapsAutoUpdate=!0,this._blur(ot,tt);return this._applyPMREM(ot),ot}fromEquirectangular(Y,tt=null){return this._fromTexture(Y,tt)}fromCubemap(Y,tt=null){return this._fromTexture(Y,tt)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=lh(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=oh(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._sourceTarget!==null)this._sourceTarget.dispose();if(this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._integrationMaterial!==null)this._integrationMaterial.dispose();this._boxMesh.geometry.dispose()}static lodToRoughness(Y,tt){return tt>0?1-Math.sqrt(1-Y/tt):0}_setSize(Y){this._cubeSize=Math.max(rh,Uo(Y))}_fromTexture(Y,tt){if(Y.mapping===er||Y.mapping===Us)this._setSize(Y.image.length===0?rh:Y.image[0].width||Y.image[0].image.width);else this._setSize(Y.image.width/4);let et=tt||this._allocateTarget();return this._textureToCubemap(Y),this._applyPMREM(et),et}_allocateTarget(){let Y=this._cubeSize,tt=ah(Y,!1,!1),et=Math.log2(Y)-zp;for(let nt=0;nt<=et;nt++)tt.texture.mipmaps.push({width:Y>>nt,height:Y>>nt});return tt.texture.name="PMREM",tt.texture.isPMREMTexture=!0,tt}_getSourceTarget(Y=!1){let tt=this._cubeSize,et=this._sourceTarget;if(et===null||et.width!==tt||Y&&et.depthBuffer===!1){if(et!==null)et.dispose();this._sourceTarget=ah(tt,!0,Y)}return this._sourceTarget}_compileMaterial(Y){this._boxMesh.material=Y,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(Y,tt,et){let nt=this._boxMesh,it=this._cubeCamera;nt.material=et,it.renderTarget=Y,it.activeMipmapLevel=tt;let st=Y.width>>tt;Y.viewport.set(0,0,st,st),it.update(this._renderer,nt),Y.viewport.set(0,0,Y.width,Y.height)}_textureToCubemap(Y){let tt;if(Y.mapping===er||Y.mapping===Us){if(this._cubemapMaterial===null)this._cubemapMaterial=lh();tt=this._cubemapMaterial,tt.uniforms.flipEnvMap.value=Y.isRenderTargetTexture===!1?-1:1}else{if(this._equirectMaterial===null)this._equirectMaterial=oh();tt=this._equirectMaterial}tt.uniforms.envMap.value=Y,this._renderCube(this._getSourceTarget(),0,tt)}_applyPMREM(Y){if(this._ggxMaterial===null)this._ggxMaterial=Vp(),this._integrationMaterial=Xp();let tt=this._cubeSize,et=Y.texture.mipmaps.length-1,nt=this._ggxMaterial.uniforms;nt.envMap.value=this._sourceTarget.texture;let it=this._integrationMaterial.uniforms;it.envMap.value=this._sourceTarget.texture,it.sourceLod.value=Math.log2(tt/Ch);for(let st=0;st<=et;st++){let rt=G.lodToRoughness(st,et);if(st>et-kp)it.roughness.value=rt,this._renderCube(Y,st,this._integrationMaterial);else{let at=rt>0?Math.log2(tt)+0.5*Math.log2(6/(Rh*Math.pow(rt,4)))+0.5:0;nt.roughness.value=rt,nt.lodBias.value=at,this._renderCube(Y,st,this._ggxMaterial)}}}_blur(Y,tt){if(this._blurMaterial===null)this._blurMaterial=qp();let et=this._blurMaterial,nt=et.uniforms,it=this._sourceTarget;nt.sigma.value=Math.min(tt,Math.PI)/Math.SQRT2,nt.envMap.value=it.texture,this._renderCube(Y,0,et),nt.envMap.value=Y.texture,this._renderCube(it,0,et)}}function ah(Y,tt,et){return new ha(Y,{minFilter:N,generateMipmaps:tt,type:b,colorSpace:R,depthBuffer:et})}function dr(Y,tt,et){return new S({name:Y,uniforms:tt,vertexShader:Mn.cube_vert,fragmentShader:et,side:ii,blending:U,depthTest:!1,depthWrite:!1})}function Vp(){return dr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Rh}u

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
	`)}function Xp(){return dr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Ch}},`

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
	`)}function qp(){return dr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Gp}
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
	`)}function oh(){return dr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function lh(){return dr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Yp(Y){let tt=new WeakMap,et=new WeakMap,nt=null;function it(ht,ft=!1){if(ht===null||ht===void 0)return null;if(ft)return rt(ht);return st(ht)}function st(ht){if(ht&&ht.isTexture){let ft=ht.mapping;if(ft===Hr||ft===Wr)if(tt.has(ht)){let xt=tt.get(ht).texture;return at(xt,ht.mapping)}else{let xt=ht.image;if(xt&&xt.height>0){let St=new ha(xt.height);return St.fromEquirectangularTexture(Y,ht),tt.set(ht,St),ht.addEventListener("dispose",lt),at(St.texture,ht.mapping)}else return null}}return ht}function rt(ht){if(ht&&ht.isTexture&&ht.isPMREMTexture!==!0){let ft=ht.mapping,xt=ft===Hr||ft===Wr,St=ft===er||ft===Us;if(xt||St){let dt=et.get(ht),pt=dt!==void 0?dt.texture.pmremVersion:0;if(ht.isRenderTargetTexture&&ht.pmremVersion!==pt){if(nt===null)nt=new G(Y);return dt=xt?nt.fromEquirectangular(ht,dt):nt.fromCubemap(ht,dt),dt.texture.pmremVersion=ht.pmremVersion,et.set(ht,dt),dt.texture}else if(dt!==void 0)return dt.texture;else{let bt=ht.image;if(xt&&bt&&bt.height>0||St&&bt&&ot(bt)){if(nt===null)nt=new G(Y);return dt=xt?nt.fromEquirectangular(ht):nt.fromCubemap(ht),dt.texture.pmremVersion=ht.pmremVersion,et.set(ht,dt),ht.addEventListener("dispose",ct),dt.texture}else return null}}}return ht}function at(ht,ft){if(ft===Hr)ht.mapping=er;else if(ft===Wr)ht.mapping=Us;return ht}function ot(ht){let ft=0,xt=6;for(let St=0;St<xt;St++)if(ht[St]!==void 0)ft++;return ft===xt}function lt(ht){let ft=ht.target;ft.removeEventListener("dispose",lt);let xt=tt.get(ft);if(xt!==void 0)tt.delete(ft),xt.dispose()}function ct(ht){let ft=ht.target;ft.removeEventListener("dispose",ct);let xt=et.get(ft);if(xt!==void 0)et.delete(ft),xt.dispose()}function ut(){if(tt=new WeakMap,et=new WeakMap,nt!==null)nt.dispose(),nt=null}return{get:it,dispose:ut}}function Zp(Y){let tt={};function et(nt){if(tt[nt]!==void 0)return tt[nt];let it=Y.getExtension(nt);return tt[nt]=it,it}return{has:function(nt){return et(nt)!==null},init:function(){et("EXT_color_buffer_float"),et("WEBGL_clip_cull_distance"),et("OES_texture_float_linear"),et("EXT_color_buffer_half_float"),et("WEBGL_multisampled_render_to_texture"),et("WEBGL_render_shared_exponent")},get:function(nt){let it=et(nt);if(it===null)cs("WebGLRenderer: "+nt+" extension not supported.");return it}}}function Jp(Y,tt,et,nt){let it={},st=new WeakMap,rt=new FinalizationRegistry((xt)=>delete it[xt]);function at(xt){ot(xt.target)}function ot(xt){if(xt.index!==null)tt.remove(xt.index);for(let dt in xt.attributes)tt.remove(xt.attributes[dt]);xt.removeEventListener("dispose",at),delete it[xt.id],rt.unregister(xt);let St=st.get(xt);if(St)tt.remove(St),st.delete(xt);if(nt.releaseStatesOfGeometry(xt),xt.isInstancedBufferGeometry===!0)delete xt._maxInstanceCount;et.memory.geometries--}function lt(xt,St){if(it[St.id]!==void 0)return St;return St.addEventListener("dispose",at),it[St.id]=new WeakRef(St),rt.register(St,St.id,St),et.memory.geometries++,St}function ct(xt){let St=xt.attributes;for(let dt in St)tt.update(St[dt],Y.ARRAY_BUFFER)}function ut(xt){let St=xt.index,dt=xt.attributes.position,pt=0;if(dt===void 0)return;let bt=St!==null?St.array.length:dt.array.length/3-1,Mt=new(dt.count>=65535?ta:jr)(Math.ceil(bt/3)*6,1),Et=Mt.array;if(St!==null){let mt=St.array;pt=St.version;for(let vt=0,Lt=0;vt<bt;vt+=3){let Gt=mt[vt+0],Pt=mt[vt+1],Bt=mt[vt+2];Et[Lt++]=Gt,Et[Lt++]=Pt,Et[Lt++]=Pt,Et[Lt++]=Bt,Et[Lt++]=Bt,Et[Lt++]=Gt}}else{pt=dt.version;for(let mt=0,vt=0;mt<bt;mt+=3){let Lt=mt+0,Gt=mt+1,Pt=mt+2;Et[vt++]=Lt,Et[vt++]=Gt,Et[vt++]=Gt,Et[vt++]=Pt,Et[vt++]=Pt,Et[vt++]=Lt}}Mt.version=pt;let Ct=st.get(xt);if(Ct)tt.remove(Ct);st.set(xt,Mt)}function ht(xt){let St=st.get(xt);if(St){let dt=xt.index;if(dt!==null){if(St.version<dt.version)ut(xt)}}else ut(xt);return st.get(xt)}function ft(){for(let xt in it){let St=it[xt].deref();if(St!==void 0)ot(St)}}return{get:lt,update:ct,getWireframeAttribute:ht,dispose:ft}}function $p(Y,tt,et){let nt;function it(ut){nt=ut}let st,rt;function at(ut){st=ut.type,rt=ut.bytesPerElement}function ot(ut,ht){Y.drawElements(nt,ht,st,ut*rt),et.update(ht,nt,1)}function lt(ut,ht,ft){if(ft===0)return;Y.drawElementsInstanced(nt,ht,st,ut*rt,ft),et.update(ht,nt,ft)}function ct(ut,ht,ft){if(ft===0)return;tt.get("WEBGL_multi_draw").multiDrawElementsWEBGL(nt,ht,0,st,ut,0,ft);let St=0;for(let dt=0;dt<ft;dt++)St+=ht[dt];et.update(St,nt,1)}this.setMode=it,this.setIndex=at,this.render=ot,this.renderInstances=lt,this.renderMultiDraw=ct}function Kp(Y){let tt={geometries:0,textures:0},et={frame:0,calls:0,triangles:0,points:0,lines:0};function nt(st,rt,at){switch(et.calls++,rt){case Y.TRIANGLES:et.triangles+=at*(st/3);break;case Y.LINES:et.lines+=at*(st/2);break;case Y.LINE_STRIP:et.lines+=at*(st-1);break;case Y.LINE_LOOP:et.lines+=at*st;break;case Y.POINTS:et.points+=at*st;break;default:gn("WebGLInfo: Unknown draw mode:",rt);break}}function it(){et.calls=0,et.triangles=0,et.points=0,et.lines=0}return{memory:tt,render:et,programs:null,autoReset:!0,reset:it,update:nt}}function Qp(Y,tt,et){let nt=new WeakMap,it=new Nn;function st(rt,at,ot){let lt=rt.morphTargetInfluences,ct=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,ut=ct!==void 0?ct.length:0,ht=nt.get(at);if(ht===void 0||ht.count!==ut){let Lt=function(){mt.dispose(),nt.delete(at),at.removeEventListener("dispose",Lt)};if(ht!==void 0)ht.texture.dispose();let ft=at.morphAttributes.position!==void 0,xt=at.morphAttributes.normal!==void 0,St=at.morphAttributes.color!==void 0,dt=at.morphAttributes.position||[],pt=at.morphAttributes.normal||[],bt=at.morphAttributes.color||[],Tt=0;if(ft===!0)Tt=1;if(xt===!0)Tt=2;if(St===!0)Tt=3;let Mt=at.attributes.position.count*Tt,Et=1;if(Mt>tt.maxTextureSize)Et=Math.ceil(Mt/tt.maxTextureSize),Mt=tt.maxTextureSize;let Ct=new Float32Array(Mt*Et*4*ut),mt=new Kr(Ct,Mt,Et,ut);mt.type=Gi,mt.needsUpdate=!0;let vt=Tt*4;for(let Gt=0;Gt<ut;Gt++){let Pt=dt[Gt],Bt=pt[Gt],$t=bt[Gt],wt=Mt*Et*4*Gt;for(let Xt=0;Xt<Pt.count;Xt++){let Yt=Xt*vt;if(ft===!0)it.fromBufferAttribute(Pt,Xt),Ct[wt+Yt+0]=it.x,Ct[wt+Yt+1]=it.y,Ct[wt+Yt+2]=it.z,Ct[wt+Yt+3]=0;if(xt===!0)it.fromBufferAttribute(Bt,Xt),Ct[wt+Yt+4]=it.x,Ct[wt+Yt+5]=it.y,Ct[wt+Yt+6]=it.z,Ct[wt+Yt+7]=0;if(St===!0)it.fromBufferAttribute($t,Xt),Ct[wt+Yt+8]=it.x,Ct[wt+Yt+9]=it.y,Ct[wt+Yt+10]=it.z,Ct[wt+Yt+11]=$t.itemSize===4?it.w:1}}ht={count:ut,texture:mt,size:new n(Mt,Et)},nt.set(at,ht),at.addEventListener("dispose",Lt)}if(rt.isInstancedMesh===!0&&rt.morphTexture!==null)ot.getUniforms().setValue(Y,"morphTexture",rt.morphTexture,et);else{let ft=0;for(let St=0;St<lt.length;St++)ft+=lt[St];let xt=at.morphTargetsRelative?1:1-ft;ot.getUniforms().setValue(Y,"morphTargetBaseInfluence",xt),ot.getUniforms().setValue(Y,"morphTargetInfluences",lt)}ot.getUniforms().setValue(Y,"morphTargetsTexture",ht.texture,et),ot.getUniforms().setValue(Y,"morphTargetsTextureSize",ht.size)}return{update:st}}function jp(Y,tt,et,nt,it){let st=new WeakMap;function rt(lt){let ct=it.render.frame,ut=lt.geometry,ht=tt.get(lt,ut);if(st.get(ht)!==ct)tt.update(ht),st.set(ht,ct);if(lt.isInstancedMesh){if(lt.hasEventListener("dispose",ot)===!1)lt.addEventListener("dispose",ot);if(st.get(lt)!==ct){if(et.update(lt.instanceMatrix,Y.ARRAY_BUFFER),lt.instanceColor!==null)et.update(lt.instanceColor,Y.ARRAY_BUFFER);st.set(lt,ct)}}if(lt.isSkinnedMesh){let ft=lt.skeleton;if(st.get(ft)!==ct)ft.update(),st.set(ft,ct)}return ht}function at(){st=new WeakMap}function ot(lt){let ct=lt.target;if(ct.removeEventListener("dispose",ot),nt.releaseStatesOfObject(ct),et.remove(ct.instanceMatrix),ct.instanceColor!==null)et.remove(ct.instanceColor)}return{update:rt,dispose:at}}var tm={[he]:"LINEAR_TONE_MAPPING",[ue]:"REINHARD_TONE_MAPPING",[de]:"CINEON_TONE_MAPPING",[D]:"ACES_FILMIC_TONE_MAPPING",[pe]:"AGX_TONE_MAPPING",[me]:"NEUTRAL_TONE_MAPPING",[fe]:"CUSTOM_TONE_MAPPING"};function em(Y,tt,et,nt,it,st){let rt=new _(tt,et,{type:Y,depthBuffer:it,stencilBuffer:st,samples:nt?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),at=null,ot=null,lt=null,ct=new v;ct.setAttribute("position",new f([-1,3,0,-1,-1,0,3,-1,0],3)),ct.setAttribute("uv",new f([0,2,0,0,2,0],2));let ut=new Te({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),ht=new o(ct,ut),ft=new k(-1,1,1,-1,0,1),xt=null,St=null,dt=!1,pt,bt=null,Tt=[],Mt=!1;this.setSize=function(Et,Ct){if(rt.setSize(Et,Ct),at!==null)at.setSize(Et,Ct);if(ot!==null)ot.setSize(Et,Ct);for(let mt=0;mt<Tt.length;mt++){let vt=Tt[mt];if(vt.setSize)vt.setSize(Et,Ct)}},this.setEffects=function(Et){Tt=Et,Mt=Tt.length>0&&Tt[0].isRenderPass===!0;let{width:Ct,height:mt}=rt;if(Tt.length>0&&at===null)at=new _(Ct,mt,{type:b,depthBuffer:!1,stencilBuffer:!1}),ot=new _(Ct,mt,{type:b,depthBuffer:!1,stencilBuffer:!1});let vt=it===!0&&Tt.some((Lt)=>Lt.needsDepthTexture===!0);if(vt!==(rt.depthTexture!==null)){if(vt===!0&&lt===null){if(lt=new Qi(Ct,mt),st===!0)lt.format=Ki,lt.type=ds}rt.dispose(),rt.depthTexture=vt?lt:null,rt.resolveDepthBuffer=vt,rt.storeMultisampledDepthBuffer=vt}for(let Lt=0;Lt<Tt.length;Lt++){let Gt=Tt[Lt];if(Gt.setSize)Gt.setSize(Ct,mt);if(vt&&Gt.needsDepthTexture===!0&&Gt.setDepthTexture)Gt.setDepthTexture(lt)}},this.begin=function(Et,Ct){if(dt)return!1;if(Et.toneMapping===wi&&Tt.length===0)return!1;if(bt=Ct,Ct!==null){let{width:mt,height:vt}=Ct;if(rt.width!==mt||rt.height!==vt)this.setSize(mt,vt)}if(Mt===!1)Et.setRenderTarget(rt);return pt=Et.toneMapping,Et.toneMapping=wi,!0},this.hasRenderPass=function(){return Mt},this.end=function(Et,Ct){Et.toneMapping=pt,dt=!0;let mt=rt,vt=at;for(let Lt=0;Lt<Tt.length;Lt++){let Gt=Tt[Lt];if(Gt.enabled===!1)continue;if(Gt.render(Et,vt,mt,Ct),Gt.needsSwap!==!1)mt=vt,vt=vt===at?ot:at}if(xt!==Et.outputColorSpace||St!==Et.toneMapping){if(xt=Et.outputColorSpace,St=Et.toneMapping,ut.defines={},s.getTransfer(xt)===a)ut.defines.SRGB_TRANSFER="";let Lt=tm[St];if(Lt)ut.defines[Lt]="";ut.needsUpdate=!0}ut.uniforms.tDiffuse.value=mt.texture,Et.setRenderTarget(bt),Et.render(ht,ft),bt=null,dt=!1},this.isCompositing=function(){return dt},this.dispose=function(){if(rt.dispose(),at!==null)at.dispose();if(ot!==null)ot.dispose();ct.dispose(),ut.dispose()}}var Ih=new h,Ph=new Qi(1,1),Lh=new ia(1),Nh=new Kr,Dh=new Go,Uh=new na,ch=[],hh=[],uh=new Float32Array(16),dh=new Float32Array(9),fh=new Float32Array(4);function Bs(Y,tt,et){let nt=Y[0];if(nt<=0||nt>0)return Y;let it=tt*et,st=ch[it];if(st===void 0)st=new Float32Array(it),ch[it]=st;if(tt!==0){nt.toArray(st,0);for(let rt=1,at=0;rt!==tt;++rt)at+=et,Y[rt].toArray(st,at)}return st}function Vn(Y,tt){if(Y.length!==tt.length)return!1;for(let et=0,nt=Y.length;et<nt;et++)if(Y[et]!==tt[et])return!1;return!0}function Xn(Y,tt){for(let et=0,nt=tt.length;et<nt;et++)Y[et]=tt[et]}function ua(Y,tt){let et=hh[tt];if(et===void 0)et=new Int32Array(tt),hh[tt]=et;for(let nt=0;nt!==tt;++nt)et[nt]=Y.allocateTextureUnit();return et}function nm(Y,tt){let et=this.cache;if(et[0]===tt)return;Y.uniform1f(this.addr,tt),et[0]=tt}function im(Y,tt){let et=this.cache;if(tt.x!==void 0){if(et[0]!==tt.x||et[1]!==tt.y)Y.uniform2f(this.addr,tt.x,tt.y),et[0]=tt.x,et[1]=tt.y}else{if(Vn(et,tt))return;Y.uniform2fv(this.addr,tt),Xn(et,tt)}}function sm(Y,tt){let et=this.cache;if(tt.x!==void 0){if(et[0]!==tt.x||et[1]!==tt.y||et[2]!==tt.z)Y.uniform3f(this.addr,tt.x,tt.y,tt.z),et[0]=tt.x,et[1]=tt.y,et[2]=tt.z}else if(tt.r!==void 0){if(et[0]!==tt.r||et[1]!==tt.g||et[2]!==tt.b)Y.uniform3f(this.addr,tt.r,tt.g,tt.b),et[0]=tt.r,et[1]=tt.g,et[2]=tt.b}else{if(Vn(et,tt))return;Y.uniform3fv(this.addr,tt),Xn(et,tt)}}function rm(Y,tt){let et=this.cache;if(tt.x!==void 0){if(et[0]!==tt.x||et[1]!==tt.y||et[2]!==tt.z||et[3]!==tt.w)Y.uniform4f(this.addr,tt.x,tt.y,tt.z,tt.w),et[0]=tt.x,et[1]=tt.y,et[2]=tt.z,et[3]=tt.w}else{if(Vn(et,tt))return;Y.uniform4fv(this.addr,tt),Xn(et,tt)}}function am(Y,tt){let et=this.cache,nt=tt.elements;if(nt===void 0){if(Vn(et,tt))return;Y.uniformMatrix2fv(this.addr,!1,tt),Xn(et,tt)}else{if(Vn(et,nt))return;fh.set(nt),Y.uniformMatrix2fv(this.addr,!1,fh),Xn(et,nt)}}function om(Y,tt){let et=this.cache,nt=tt.elements;if(nt===void 0){if(Vn(et,tt))return;Y.uniformMatrix3fv(this.addr,!1,tt),Xn(et,tt)}else{if(Vn(et,nt))return;dh.set(nt),Y.uniformMatrix3fv(this.addr,!1,dh),Xn(et,nt)}}function lm(Y,tt){let et=this.cache,nt=tt.elements;if(nt===void 0){if(Vn(et,tt))return;Y.uniformMatrix4fv(this.addr,!1,tt),Xn(et,tt)}else{if(Vn(et,nt))return;uh.set(nt),Y.uniformMatrix4fv(this.addr,!1,uh),Xn(et,nt)}}function cm(Y,tt){let et=this.cache;if(et[0]===tt)return;Y.uniform1i(this.addr,tt),et[0]=tt}function hm(Y,tt){let et=this.cache;if(tt.x!==void 0){if(et[0]!==tt.x||et[1]!==tt.y)Y.uniform2i(this.addr,tt.x,tt.y),et[0]=tt.x,et[1]=tt.y}else{if(Vn(et,tt))return;Y.uniform2iv(this.addr,tt),Xn(et,tt)}}function um(Y,tt){let et=this.cache;if(tt.x!==void 0){if(et[0]!==tt.x||et[1]!==tt.y||et[2]!==tt.z)Y.uniform3i(this.addr,tt.x,tt.y,tt.z),et[0]=tt.x,et[1]=tt.y,et[2]=tt.z}else{if(Vn(et,tt))return;Y.uniform3iv(this.addr,tt),Xn(et,tt)}}function dm(Y,tt){let et=this.cache;if(tt.x!==void 0){if(et[0]!==tt.x||et[1]!==tt.y||et[2]!==tt.z||et[3]!==tt.w)Y.uniform4i(this.addr,tt.x,tt.y,tt.z,tt.w),et[0]=tt.x,et[1]=tt.y,et[2]=tt.z,et[3]=tt.w}else{if(Vn(et,tt))return;Y.uniform4iv(this.addr,tt),Xn(et,tt)}}function fm(Y,tt){let et=this.cache;if(et[0]===tt)return;Y.uniform1ui(this.addr,tt),et[0]=tt}function pm(Y,tt){let et=this.cache;if(tt.x!==void 0){if(et[0]!==tt.x||et[1]!==tt.y)Y.uniform2ui(this.addr,tt.x,tt.y),et[0]=tt.x,et[1]=tt.y}else{if(Vn(et,tt))return;Y.uniform2uiv(this.addr,tt),Xn(et,tt)}}function mm(Y,tt){let et=this.cache;if(tt.x!==void 0){if(et[0]!==tt.x||et[1]!==tt.y||et[2]!==tt.z)Y.uniform3ui(this.addr,tt.x,tt.y,tt.z),et[0]=tt.x,et[1]=tt.y,et[2]=tt.z}else{if(Vn(et,tt))return;Y.uniform3uiv(this.addr,tt),Xn(et,tt)}}function gm(Y,tt){let et=this.cache;if(tt.x!==void 0){if(et[0]!==tt.x||et[1]!==tt.y||et[2]!==tt.z||et[3]!==tt.w)Y.uniform4ui(this.addr,tt.x,tt.y,tt.z,tt.w),et[0]=tt.x,et[1]=tt.y,et[2]=tt.z,et[3]=tt.w}else{if(Vn(et,tt))return;Y.uniform4uiv(this.addr,tt),Xn(et,tt)}}function da(Y){if(Y.version===0)Y.compareFunction=Po,Y.needsUpdate=!0;return Y}function _m(Y,tt,et){let nt=this.cache,it=et.allocateTextureUnit();if(nt[0]!==it)Y.uniform1i(this.addr,it),nt[0]=it;let st;if(this.type===Y.SAMPLER_2D_SHADOW)st=da(Ph);else st=Ih;et.setTexture2D(tt||st,it)}function xm(Y,tt,et){let nt=this.cache,it=et.allocateTextureUnit();if(nt[0]!==it)Y.uniform1i(this.addr,it),nt[0]=it;et.setTexture3D(tt||Dh,it)}function vm(Y,tt,et){let nt=this.cache,it=et.allocateTextureUnit();if(nt[0]!==it)Y.uniform1i(this.addr,it),nt[0]=it;let st;if(this.type===Y.SAMPLER_CUBE_SHADOW)st=da(Lh);else st=Uh;et.setTextureCube(tt||st,it)}function ym(Y,tt,et){let nt=this.cache,it=et.allocateTextureUnit();if(nt[0]!==it)Y.uniform1i(this.addr,it),nt[0]=it;et.setTexture2DArray(tt||Nh,it)}function Sm(Y){switch(Y){case 5126:return nm;case 35664:return im;case 35665:return sm;case 35666:return rm;case 35674:return am;case 35675:return om;case 35676:return lm;case 5124:case 35670:return cm;case 35667:case 35671:return hm;case 35668:case 35672:return um;case 35669:case 35673:return dm;case 5125:return fm;case 36294:return pm;case 36295:return mm;case 36296:return gm;case 35678:case 36198:case 36298:case 36306:case 35682:return _m;case 35679:case 36299:case 36307:return xm;case 35680:case 36300:case 36308:case 36293:return vm;case 36289:case 36303:case 36311:case 36292:return ym}}function Mm(Y,tt){Y.uniform1fv(this.addr,tt)}function bm(Y,tt){let et=Bs(tt,this.size,2);Y.uniform2fv(this.addr,et)}function Tm(Y,tt){let et=Bs(tt,this.size,3);Y.uniform3fv(this.addr,et)}function Em(Y,tt){let et=Bs(tt,this.size,4);Y.uniform4fv(this.addr,et)}function Am(Y,tt){let et=Bs(tt,this.size,4);Y.uniformMatrix2fv(this.addr,!1,et)}function wm(Y,tt){let et=Bs(tt,this.size,9);Y.uniformMatrix3fv(this.addr,!1,et)}function Rm(Y,tt){let et=Bs(tt,this.size,16);Y.uniformMatrix4fv(this.addr,!1,et)}function Cm(Y,tt){Y.uniform1iv(this.addr,tt)}function Im(Y,tt){Y.uniform2iv(this.addr,tt)}function Pm(Y,tt){Y.uniform3iv(this.addr,tt)}function Lm(Y,tt){Y.uniform4iv(this.addr,tt)}function Nm(Y,tt){Y.uniform1uiv(this.addr,tt)}function Dm(Y,tt){Y.uniform2uiv(this.addr,tt)}function Um(Y,tt){Y.uniform3uiv(this.addr,tt)}function Fm(Y,tt){Y.uniform4uiv(this.addr,tt)}function Om(Y,tt,et){let nt=this.cache,it=tt.length,st=ua(et,it);if(!Vn(nt,st))Y.uniform1iv(this.addr,st),Xn(nt,st);let rt;if(this.type===Y.SAMPLER_2D_SHADOW)rt=da(Ph);else rt=Ih;for(let at=0;at!==it;++at)et.setTexture2D(tt[at]||rt,st[at])}function Bm(Y,tt,et){let nt=this.cache,it=tt.length,st=ua(et,it);if(!Vn(nt,st))Y.uniform1iv(this.addr,st),Xn(nt,st);for(let rt=0;rt!==it;++rt)et.setTexture3D(tt[rt]||Dh,st[rt])}function zm(Y,tt,et){let nt=this.cache,it=tt.length,st=ua(et,it);if(!Vn(nt,st))Y.uniform1iv(this.addr,st),Xn(nt,st);let rt;if(this.type===Y.SAMPLER_CUBE_SHADOW)rt=da(Lh);else rt=Uh;for(let at=0;at!==it;++at)et.setTextureCube(tt[at]||rt,st[at])}function Gm(Y,tt,et){let nt=this.cache,it=tt.length,st=ua(et,it);if(!Vn(nt,st))Y.uniform1iv(this.addr,st),Xn(nt,st);for(let rt=0;rt!==it;++rt)et.setTexture2DArray(tt[rt]||Nh,st[rt])}function km(Y){switch(Y){case 5126:return Mm;case 35664:return bm;case 35665:return Tm;case 35666:return Em;case 35674:return Am;case 35675:return wm;case 35676:return Rm;case 5124:case 35670:return Cm;case 35667:case 35671:return Im;case 35668:case 35672:return Pm;case 35669:case 35673:return Lm;case 5125:return Nm;case 36294:return Dm;case 36295:return Um;case 36296:return Fm;case 35678:case 36198:case 36298:case 36306:case 35682:return Om;case 35679:case 36299:case 36307:return Bm;case 35680:case 36300:case 36308:case 36293:return zm;case 36289:case 36303:case 36311:case 36292:return Gm}}class Fh{constructor(Y,tt,et){this.id=Y,this.addr=et,this.cache=[],this.type=tt.type,this.setValue=Sm(tt.type)}}class Oh{constructor(Y,tt,et){this.id=Y,this.addr=et,this.cache=[],this.type=tt.type,this.size=tt.size,this.setValue=km(tt.type)}}class Bh{constructor(Y){this.id=Y,this.seq=[],this.map={}}setValue(Y,tt,et){let nt=this.seq;for(let it=0,st=nt.length;it!==st;++it){let rt=nt[it];rt.setValue(Y,tt[rt.id],et)}}}var el=/(\w+)(\])?(\[|\.)?/g;function ph(Y,tt){Y.seq.push(tt),Y.map[tt.id]=tt}function Hm(Y,tt,et){let nt=Y.name,it=nt.length;el.lastIndex=0;while(!0){let st=el.exec(nt),rt=el.lastIndex,at=st[1],ot=st[2]==="]",lt=st[3];if(ot)at=at|0;if(lt===void 0||lt==="["&&rt+2===it){ph(et,lt===void 0?new Fh(at,Y,tt):new Oh(at,Y,tt));break}else{let ut=et.map[at];if(ut===void 0)ut=new Bh(at),ph(et,ut);et=ut}}}class ur{constructor(Y,tt){this.seq=[],this.map={};let et=Y.getProgramParameter(tt,Y.ACTIVE_UNIFORMS);for(let st=0;st<et;++st){let rt=Y.getActiveUniform(tt,st),at=Y.getUniformLocation(tt,rt.name);Hm(rt,at,this)}let nt=[],it=[];for(let st of this.seq)if(st.type===Y.SAMPLER_2D_SHADOW||st.type===Y.SAMPLER_CUBE_SHADOW||st.type===Y.SAMPLER_2D_ARRAY_SHADOW)nt.push(st);else it.push(st);if(nt.length>0)this.seq=nt.concat(it)}setValue(Y,tt,et,nt){let it=this.map[tt];if(it!==void 0)it.setValue(Y,et,nt)}setOptional(Y,tt,et){let nt=tt[et];if(nt!==void 0)this.setValue(Y,et,nt)}static upload(Y,tt,et,nt){for(let it=0,st=tt.length;it!==st;++it){let rt=tt[it],at=et[rt.id];if(at.needsUpdate!==!1)rt.setValue(Y,at.value,nt)}}static seqWithValue(Y,tt){let et=[];for(let nt=0,it=Y.length;nt!==it;++nt){let st=Y[nt];if(st.id in tt)et.push(st)}return et}}function mh(Y,tt,et){let nt=Y.createShader(tt);return Y.shaderSource(nt,et),Y.compileShader(nt),nt}var Wm=37297,Vm=0;function Xm(Y,tt){let et=Y.split(`
`),nt=[],it=Math.max(tt-6,0),st=Math.min(tt+6,et.length);for(let rt=it;rt<st;rt++){let at=rt+1;nt.push(`${at===tt?">":" "} ${at}: ${et[rt]}`)}return nt.join(`
`)}var gh=new _n;function qm(Y){s._getMatrix(gh,s.workingColorSpace,Y);let tt=`mat3( ${gh.elements.map((et)=>et.toFixed(4))} )`;switch(s.getTransfer(Y)){case Ro:return[tt,"LinearTransferOETF"];case a:return[tt,"sRGBTransferOETF"];default:return hn("WebGLProgram: Unsupported color space: ",Y),[tt,"LinearTransferOETF"]}}function _h(Y,tt,et){let nt=Y.getShaderParameter(tt,Y.COMPILE_STATUS),st=(Y.getShaderInfoLog(tt)||"").trim();if(nt&&st==="")return"";let rt=/ERROR: 0:(\d+)/.exec(st);if(rt){let at=parseInt(rt[1]);return et.toUpperCase()+`

`+st+`

`+Xm(Y.getShaderSource(tt),at)}else return st}function Ym(Y,tt){let et=qm(tt);return[`vec4 ${Y}( vec4 value ) {`,`	return ${et[1]}( vec4( ${et[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Zm={[he]:"Linear",[ue]:"Reinhard",[de]:"Cineon",[D]:"ACESFilmic",[pe]:"AgX",[me]:"Neutral",[fe]:"Custom"};function Jm(Y,tt){let et=Zm[tt];if(et===void 0)return hn("WebGLProgram: Unsupported toneMapping:",tt),"vec3 "+Y+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+Y+"( vec3 color ) { return "+et+"ToneMapping( color ); }"}var ca=new e;function $m(){s.getLuminanceCoefficients(ca);let Y=ca.x.toFixed(4),tt=ca.y.toFixed(4),et=ca.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${Y}, ${tt}, ${et} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function Km(Y){return[Y.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",Y.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hr).join(`
`)}function Qm(Y){let tt=[];for(let et in Y){let nt=Y[et];if(nt===!1)continue;tt.push("#define "+et+" "+nt)}return tt.join(`
`)}function jm(Y,tt){let et={},nt=Y.getProgramParameter(tt,Y.ACTIVE_ATTRIBUTES);for(let it=0;it<nt;it++){let st=Y.getActiveAttrib(tt,it),rt=st.name,at=1;if(st.type===Y.FLOAT_MAT2)at=2;if(st.type===Y.FLOAT_MAT3)at=3;if(st.type===Y.FLOAT_MAT4)at=4;et[rt]={type:st.type,location:Y.getAttribLocation(tt,rt),locationSize:at}}return et}function hr(Y){return Y!==""}function xh(Y,tt){let et=tt.numSpotLightShadows+tt.numSpotLightMaps-tt.numSpotLightShadowsWithMaps;return Y.replace(/NUM_SUN_LIGHTS/g,tt.numSunLights).replace(/NUM_DIR_LIGHTS/g,tt.numDirLights).replace(/NUM_SPOT_LIGHTS/g,tt.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,tt.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,et).replace(/NUM_RECT_AREA_LIGHTS/g,tt.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,tt.numPointLights).replace(/NUM_HEMI_LIGHTS/g,tt.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,tt.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,tt.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,tt.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,tt.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,tt.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,tt.numLightProbeGrids)}function vh(Y,tt){return Y.replace(/NUM_CLIPPING_PLANES/g,tt.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,tt.numClippingPlanes-tt.numClipIntersection)}var tg=/^[ \t]*#include +<([\w\d./]+)>/gm;function il(Y){return Y.replace(tg,eg)}function eg(Y,tt){let et=Mn[tt];if(et===void 0)throw Error("THREE.WebGLProgram: Can not resolve #include <"+tt+">");return il(et)}var ng=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yh(Y){return Y.replace(ng,ig)}function ig(Y,tt,et,nt){let it="";for(let st=parseInt(tt);st<parseInt(et);st++)it+=nt.replace(/\[\s*i\s*\]/g,"[ "+st+" ]").replace(/UNROLLED_LOOP_INDEX/g,st);return it}function Sh(Y){let tt=`precision ${Y.precision} float;
	precision ${Y.precision} int;
	precision ${Y.precision} sampler2D;
	precision ${Y.precision} samplerCube;
	precision ${Y.precision} sampler3D;
	precision ${Y.precision} sampler2DArray;
	precision ${Y.precision} sampler2DShadow;
	precision ${Y.precision} samplerCubeShadow;
	precision ${Y.precision} sampler2DArrayShadow;
	precision ${Y.precision} isampler2D;
	precision ${Y.precision} isampler3D;
	precision ${Y.precision} isamplerCube;
	precision ${Y.precision} isampler2DArray;
	precision ${Y.precision} usampler2D;
	precision ${Y.precision} usampler3D;
	precision ${Y.precision} usamplerCube;
	precision ${Y.precision} usampler2DArray;
	`;if(Y.precision==="highp")tt+=`
#define HIGH_PRECISION`;else if(Y.precision==="mediump")tt+=`
#define MEDIUM_PRECISION`;else if(Y.precision==="lowp")tt+=`
#define LOW_PRECISION`;return tt}var sg={[js]:"SHADOWMAP_TYPE_PCF",[Ns]:"SHADOWMAP_TYPE_VSM"};function rg(Y){return sg[Y.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var ag={[Us]:"ENVMAP_MODE_REFRACTION"};function og(Y){if(Y.envMap===!1)return"ENVMAP_MODE_REFLECTION";return ag[Y.envMapMode]||"ENVMAP_MODE_REFLECTION"}var lg={[Ic]:"ENVMAP_BLENDING_MULTIPLY",[Pc]:"ENVMAP_BLENDING_MIX",[Lc]:"ENVMAP_BLENDING_ADD"};function cg(Y){if(Y.envMap===!1)return"ENVMAP_BLENDING_NONE";return lg[Y.combine]||"ENVMAP_BLENDING_NONE"}function hg(Y,tt,et,nt){let it=Y.getContext(),{defines:st,vertexShader:rt,fragmentShader:at}=et,ot=rg(et),lt=et.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",ct=og(et),ut=cg(et),ht=Km(et),ft=Qm(st),xt=it.createProgram(),St,dt,pt=et.glslVersion?"#version "+et.glslVersion+`
`:"";if(et.isRawShaderMaterial){if(St=["#define SHADER_TYPE "+et.shaderType,"#define SHADER_NAME "+et.shaderName,ft].filter(hr).join(`
`),St.length>0)St+=`
`;if(dt=["#define SHADER_TYPE "+et.shaderType,"#define SHADER_NAME "+et.shaderName,ft].filter(hr).join(`
`),dt.length>0)dt+=`
`}else St=[Sh(et),"#define SHADER_TYPE "+et.shaderType,"#define SHADER_NAME "+et.shaderName,ft,et.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",et.batching?"#define USE_BATCHING":"",et.batchingColor?"#define USE_BATCHING_COLOR":"",et.instancing?"#define USE_INSTANCING":"",et.instancingColor?"#define USE_INSTANCING_COLOR":"",et.instancingMorph?"#define USE_INSTANCING_MORPH":"",et.useFog&&et.fog?"#define USE_FOG":"",et.useFog&&et.fogExp2?"#define FOG_EXP2":"",et.map?"#define USE_MAP":"",et.envMap?"#define USE_ENVMAP":"",et.envMap?"#define "+ct:"",et.lightMap?"#define USE_LIGHTMAP":"",et.aoMap?"#define USE_AOMAP":"",et.bumpMap?"#define USE_BUMPMAP":"",et.normalMap?"#define USE_NORMALMAP":"",et.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",et.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",et.displacementMap?"#define USE_DISPLACEMENTMAP":"",et.emissiveMap?"#define USE_EMISSIVEMAP":"",et.anisotropy?"#define USE_ANISOTROPY":"",et.anisotropyMap?"#define USE_ANISOTROPYMAP":"",et.clearcoatMap?"#define USE_CLEARCOATMAP":"",et.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",et.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",et.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",et.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",et.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",et.specularMap?"#define USE_SPECULARMAP":"",et.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",et.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",et.roughnessMap?"#define USE_ROUGHNESSMAP":"",et.metalnessMap?"#define USE_METALNESSMAP":"",et.alphaMap?"#define USE_ALPHAMAP":"",et.alphaHash?"#define USE_ALPHAHASH":"",et.transmission?"#define USE_TRANSMISSION":"",et.transmissionMap?"#define USE_TRANSMISSIONMAP":"",et.thicknessMap?"#define USE_THICKNESSMAP":"",et.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",et.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",et.mapUv?"#define MAP_UV "+et.mapUv:"",et.alphaMapUv?"#define ALPHAMAP_UV "+et.alphaMapUv:"",et.lightMapUv?"#define LIGHTMAP_UV "+et.lightMapUv:"",et.aoMapUv?"#define AOMAP_UV "+et.aoMapUv:"",et.emissiveMapUv?"#define EMISSIVEMAP_UV "+et.emissiveMapUv:"",et.bumpMapUv?"#define BUMPMAP_UV "+et.bumpMapUv:"",et.normalMapUv?"#define NORMALMAP_UV "+et.normalMapUv:"",et.displacementMapUv?"#define DISPLACEMENTMAP_UV "+et.displacementMapUv:"",et.metalnessMapUv?"#define METALNESSMAP_UV "+et.metalnessMapUv:"",et.roughnessMapUv?"#define ROUGHNESSMAP_UV "+et.roughnessMapUv:"",et.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+et.anisotropyMapUv:"",et.clearcoatMapUv?"#define CLEARCOATMAP_UV "+et.clearcoatMapUv:"",et.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+et.clearcoatNormalMapUv:"",et.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+et.clearcoatRoughnessMapUv:"",et.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+et.diffuseRoughnessMapUv:"",et.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+et.iridescenceMapUv:"",et.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+et.iridescenceThicknessMapUv:"",et.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+et.sheenColorMapUv:"",et.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+et.sheenRoughnessMapUv:"",et.specularMapUv?"#define SPECULARMAP_UV "+et.specularMapUv:"",et.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+et.specularColorMapUv:"",et.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+et.specularIntensityMapUv:"",et.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+et.transmissionMapUv:"",et.thicknessMapUv?"#define THICKNESSMAP_UV "+et.thicknessMapUv:"",et.vertexTangents&&et.flatShading===!1?"#define USE_TANGENT":"",et.vertexNormals?"#define HAS_NORMAL":"",et.vertexColors?"#define USE_COLOR":"",et.vertexAlphas?"#define USE_COLOR_ALPHA":"",et.vertexUv1s?"#define USE_UV1":"",et.vertexUv2s?"#define USE_UV2":"",et.vertexUv3s?"#define USE_UV3":"",et.pointsUvs?"#define USE_POINTS_UV":"",et.flatShading?"#define FLAT_SHADED":"",et.skinning?"#define USE_SKINNING":"",et.morphTargets?"#define USE_MORPHTARGETS":"",et.morphNormals&&et.flatShading===!1?"#define USE_MORPHNORMALS":"",et.morphColors?"#define USE_MORPHCOLORS":"",et.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+et.morphTextureStride:"",et.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+et.morphTargetsCount:"",et.doubleSided?"#define DOUBLE_SIDED":"",et.flipSided?"#define FLIP_SIDED":"",et.shadowMapEnabled?"#define USE_SHADOWMAP":"",et.shadowMapEnabled?"#define "+ot:"",et.sizeAttenuation?"#define USE_SIZEATTENUATION":"",et.numLightProbes>0?"#define USE_LIGHT_PROBES":"",et.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",et.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(hr).join(`
`),dt=[Sh(et),"#define SHADER_TYPE "+et.shaderType,"#define SHADER_NAME "+et.shaderName,ft,et.useFog&&et.fog?"#define USE_FOG":"",et.useFog&&et.fogExp2?"#define FOG_EXP2":"",et.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",et.map?"#define USE_MAP":"",et.matcap?"#define USE_MATCAP":"",et.envMap?"#define USE_ENVMAP":"",et.envMap?"#define "+lt:"",et.envMap?"#define "+ct:"",et.envMap?"#define "+ut:"",et.envMapPMREM?"#define ENVMAP_MAX_LOD "+et.envMapMaxLod+".0":"",et.envMapPMREM?"#define ENVMAP_SIZE "+et.envMapSize+".0":"",et.lightMap?"#define USE_LIGHTMAP":"",et.aoMap?"#define USE_AOMAP":"",et.bumpMap?"#define USE_BUMPMAP":"",et.normalMap?"#define USE_NORMALMAP":"",et.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",et.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",et.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",et.emissiveMap?"#define USE_EMISSIVEMAP":"",et.anisotropy?"#define USE_ANISOTROPY":"",et.anisotropyMap?"#define USE_ANISOTROPYMAP":"",et.clearcoat?"#define USE_CLEARCOAT":"",et.clearcoatMap?"#define USE_CLEARCOATMAP":"",et.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",et.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",et.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",et.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",et.dispersion?"#define USE_DISPERSION":"",et.retroreflection?"#define USE_RETROREFLECTION":"",et.iridescence?"#define USE_IRIDESCENCE":"",et.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",et.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",et.specularMap?"#define USE_SPECULARMAP":"",et.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",et.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",et.roughnessMap?"#define USE_ROUGHNESSMAP":"",et.metalnessMap?"#define USE_METALNESSMAP":"",et.alphaMap?"#define USE_ALPHAMAP":"",et.alphaTest?"#define USE_ALPHATEST":"",et.alphaHash?"#define USE_ALPHAHASH":"",et.sheen?"#define USE_SHEEN":"",et.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",et.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",et.transmission?"#define USE_TRANSMISSION":"",et.transmissionMap?"#define USE_TRANSMISSIONMAP":"",et.thicknessMap?"#define USE_THICKNESSMAP":"",et.vertexTangents&&et.flatShading===!1?"#define USE_TANGENT":"",et.vertexColors||et.instancingColor?"#define USE_COLOR":"",et.vertexAlphas||et.batchingColor?"#define USE_COLOR_ALPHA":"",et.vertexUv1s?"#define USE_UV1":"",et.vertexUv2s?"#define USE_UV2":"",et.vertexUv3s?"#define USE_UV3":"",et.pointsUvs?"#define USE_POINTS_UV":"",et.gradientMap?"#define USE_GRADIENTMAP":"",et.flatShading?"#define FLAT_SHADED":"",et.doubleSided?"#define DOUBLE_SIDED":"",et.flipSided?"#define FLIP_SIDED":"",et.shadowMapEnabled?"#define USE_SHADOWMAP":"",et.shadowMapEnabled?"#define "+ot:"",et.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",et.numLightProbes>0?"#define USE_LIGHT_PROBES":"",et.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",et.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",et.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",et.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",et.toneMapping!==wi?"#define TONE_MAPPING":"",et.toneMapping!==wi?Mn.tonemapping_pars_fragment:"",et.toneMapping!==wi?Jm("toneMapping",et.toneMapping):"",et.dithering?"#define DITHERING":"",et.opaque?"#define OPAQUE":"",Mn.colorspace_pars_fragment,Ym("linearToOutputTexel",et.outputColorSpace),$m(),et.useDepthPacking?"#define DEPTH_PACKING "+et.depthPacking:"",`
`].filter(hr).join(`
`);if(rt=il(rt),rt=xh(rt,et),rt=vh(rt,et),at=il(at),at=xh(at,et),at=vh(at,et),rt=yh(rt),at=yh(at),et.isRawShaderMaterial!==!0)pt=`#version 300 es
`,St=[ht,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+St,dt=["#define varying in",et.glslVersion===Lo?"":"layout(location = 0) out highp vec4 pc_fragColor;",et.glslVersion===Lo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+dt;let bt=pt+St+rt,Tt=pt+dt+at,Mt=mh(it,it.VERTEX_SHADER,bt),Et=mh(it,it.FRAGMENT_SHADER,Tt);if(it.attachShader(xt,Mt),it.attachShader(xt,Et),et.index0AttributeName!==void 0)it.bindAttribLocation(xt,0,et.index0AttributeName);else if(et.hasPositionAttribute===!0)it.bindAttribLocation(xt,0,"position");it.linkProgram(xt);function Ct(Gt){if(Y.debug.checkShaderErrors){let Pt=it.getProgramInfoLog(xt)||"",Bt=it.getShaderInfoLog(Mt)||"",$t=it.getShaderInfoLog(Et)||"",wt=Pt.trim(),Xt=Bt.trim(),Yt=$t.trim(),Ft=!0,Ve=!0;if(it.getProgramParameter(xt,it.LINK_STATUS)===!1)if(Ft=!1,typeof Y.debug.onShaderError==="function")Y.debug.onShaderError(it,xt,Mt,Et);else{let Ht=_h(it,Mt,"vertex"),Jt=_h(it,Et,"fragment");gn("WebGLProgram: Shader Error "+it.getError()+" - VALIDATE_STATUS "+it.getProgramParameter(xt,it.VALIDATE_STATUS)+`

Material Name: `+Gt.name+`
Material Type: `+Gt.type+`

Program Info Log: `+wt+`
`+Ht+`
`+Jt)}else if(wt!=="")hn("WebGLProgram: Program Info Log:",wt);else if(Xt===""||Yt==="")Ve=!1;if(Ve)Gt.diagnostics={runnable:Ft,programLog:wt,vertexShader:{log:Xt,prefix:St},fragmentShader:{log:Yt,prefix:dt}}}it.deleteShader(Mt),it.deleteShader(Et),mt=new ur(it,xt),vt=jm(it,xt)}let mt;this.getUniforms=function(){if(mt===void 0)Ct(this);return mt};let vt;this.getAttributes=function(){if(vt===void 0)Ct(this);return vt};let Lt=et.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(Lt===!1)Lt=it.getProgramParameter(xt,Wm);return Lt},this.destroy=function(){nt.releaseStatesOfProgram(this),it.deleteProgram(xt),this.program=void 0},this.type=et.shaderType,this.name=et.shaderName,this.id=Vm++,this.cacheKey=tt,this.usedTimes=1,this.program=xt,this.vertexShader=Mt,this.fragmentShader=Et,this}var ug=0;class zh{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(Y,tt,et){let nt=this._getShaderCacheForMaterial(Y);if(nt.has(tt)===!1)nt.add(tt),tt.usedTimes++;if(nt.has(et)===!1)nt.add(et),et.usedTimes++;return this}remove(Y){let tt=this.materialCache.get(Y);for(let et of tt)if(et.usedTimes--,et.usedTimes===0)this.shaderCache.delete(et.code);return this.materialCache.delete(Y),this}getVertexShaderStage(Y){return this._getShaderStage(Y.vertexShader)}getFragmentShaderStage(Y){return this._getShaderStage(Y.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(Y){let tt=this.materialCache,et=tt.get(Y);if(et===void 0)et=new Set,tt.set(Y,et);return et}_getShaderStage(Y){let tt=this.shaderCache,et=tt.get(Y);if(et===void 0)et=new Gh(Y),tt.set(Y,et);return et}}class Gh{constructor(Y){this.id=ug++,this.code=Y,this.usedTimes=0}}function dg(Y){return Y===fs||Y===Zr||Y===Jr}function fg(Y,tt,et,nt,it,st){let rt=new Qr,at=new zh,ot=new Set,lt=[],ct=new Map,ut=nt.logarithmicDepthBuffer,ht={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function ft(mt){if(ot.add(mt),mt===0)return"uv";return`uv${mt}`}function xt(mt,vt,Lt,Gt,Pt,Bt){let $t=Gt.fog,wt=Pt.geometry,Xt=mt.isMeshStandardMaterial||mt.isMeshLambertMaterial||mt.isMeshPhongMaterial?Gt.environment:null,Yt=mt.isMeshStandardMaterial||mt.isMeshLambertMaterial&&!mt.envMap||mt.isMeshPhongMaterial&&!mt.envMap,Ft=tt.get(mt.envMap||Xt,Yt),Ve=ht[mt.type],Ht=nt.precision;if(mt.precision!==null){if(Ht=nt.getMaxPrecision(mt.precision),Ht!==mt.precision)hn("WebGLProgram.getParameters:",mt.precision,"not supported, using",Ht,"instead.")}let Jt=wt.morphAttributes.position||wt.morphAttributes.normal||wt.morphAttributes.color,Ge=Jt!==void 0?Jt.length:0,on=0;if(wt.morphAttributes.position!==void 0)on=1;if(wt.morphAttributes.normal!==void 0)on=2;if(wt.morphAttributes.color!==void 0)on=3;let qt,jt,rn,fn;if(Ve){let je=Ii[Ve];qt=je.vertexShader,jt=je.fragmentShader}else{qt=mt.vertexShader,jt=mt.fragmentShader;let je=at.getVertexShaderStage(mt),Ln=at.getFragmentShaderStage(mt);at.update(mt,je,Ln),rn=je.id,fn=Ln.id}let pn=Y.getRenderTarget(),an=Y.state.buffers.depth.getReversed(),In=Pt.isInstancedMesh===!0,bn=Pt.isBatchedMesh===!0,yn=!!mt.map,On=!!mt.matcap,wn=!!Ft,zn=wn&&Ft.isPMREMTexture===!0,Gn=!!mt.aoMap,oi=!!mt.lightMap,hi=!!mt.bumpMap&&mt.wireframe===!1,kn=!!mt.normalMap,Kn=!!mt.displacementMap,li=!!mt.emissiveMap,ci=!!mt.metalnessMap,gi=!!mt.roughnessMap,It=mt.anisotropy>0,_i=mt.clearcoat>0,Pn=mt.diffuseRoughness>0,qn=mt.dispersion>0,$e=mt.retroreflectivity>0,Un=mt.iridescence>0,mn=mt.sheen>0,xn=mt.transmission>0,Qn=It&&!!mt.anisotropyMap,yt=_i&&!!mt.clearcoatMap,gt=_i&&!!mt.clearcoatNormalMap,Nt=_i&&!!mt.clearcoatRoughnessMap,Kt=Pn&&!!mt.diffuseRoughnessMap,Zt=Un&&!!mt.iridescenceMap,We=Un&&!!mt.iridescenceThicknessMap,Ye=mn&&!!mt.sheenColorMap,zt=mn&&!!mt.sheenRoughnessMap,Vt=!!mt.specularMap,Xe=!!mt.specularColorMap,At=!!mt.specularIntensityMap,Wt=xn&&!!mt.transmissionMap,kt=xn&&!!mt.thicknessMap,Qt=!!mt.gradientMap,He=!!mt.alphaMap,Je=mt.alphaTest>0,un=!!mt.alphaHash,cn=!!mt.extensions,Qe=wi;if(mt.toneMapped){if(pn===null||pn.isXRRenderTarget===!0)Qe=Y.toneMapping}let dn=zn?Ft.isCompressedCubeTexture?Ft.image[0].mipmaps:Ft.mipmaps:null,Sn={shaderID:Ve,shaderType:mt.type,shaderName:mt.name,vertexShader:qt,fragmentShader:jt,defines:mt.defines,customVertexShaderID:rn,customFragmentShaderID:fn,isRawShaderMaterial:mt.isRawShaderMaterial===!0,glslVersion:mt.glslVersion,precision:Ht,batching:bn,batchingColor:bn&&Pt._colorsTexture!==null,instancing:In,instancingColor:In&&Pt.instanceColor!==null,instancingMorph:In&&Pt.morphTexture!==null,outputColorSpace:pn===null?Y.outputColorSpace:pn.isXRRenderTarget===!0?pn.texture.colorSpace:s.workingColorSpace,alphaToCoverage:!!mt.alphaToCoverage,map:yn,matcap:On,envMap:wn,envMapMode:wn&&Ft.mapping,envMapPMREM:zn,envMapMaxLod:zn?dn.length-1:null,envMapSize:zn?dn[0].width:null,aoMap:Gn,lightMap:oi,bumpMap:hi,normalMap:kn,displacementMap:Kn,emissiveMap:li,normalMapObjectSpace:kn&&mt.normalMapType===Gc,normalMapTangentSpace:kn&&mt.normalMapType===wo,packedNormalMap:kn&&mt.normalMapType===wo&&dg(mt.normalMap.format),metalnessMap:ci,roughnessMap:gi,anisotropy:It,anisotropyMap:Qn,clearcoat:_i,clearcoatMap:yt,clearcoatNormalMap:gt,clearcoatRoughnessMap:Nt,diffuseRoughness:Pn,diffuseRoughnessMap:Kt,dispersion:qn,retroreflection:$e,iridescence:Un,iridescenceMap:Zt,iridescenceThicknessMap:We,sheen:mn,sheenColorMap:Ye,sheenRoughnessMap:zt,specularMap:Vt,specularColorMap:Xe,specularIntensityMap:At,transmission:xn,transmissionMap:Wt,thicknessMap:kt,gradientMap:Qt,opaque:mt.transparent===!1&&mt.blending===tr&&mt.alphaToCoverage===!1,alphaMap:He,alphaTest:Je,alphaHash:un,combine:mt.combine,mapUv:yn&&ft(mt.map.channel),aoMapUv:Gn&&ft(mt.aoMap.channel),lightMapUv:oi&&ft(mt.lightMap.channel),bumpMapUv:hi&&ft(mt.bumpMap.channel),normalMapUv:kn&&ft(mt.normalMap.channel),displacementMapUv:Kn&&ft(mt.displacementMap.channel),emissiveMapUv:li&&ft(mt.emissiveMap.channel),metalnessMapUv:ci&&ft(mt.metalnessMap.channel),roughnessMapUv:gi&&ft(mt.roughnessMap.channel),anisotropyMapUv:Qn&&ft(mt.anisotropyMap.channel),clearcoatMapUv:yt&&ft(mt.clearcoatMap.channel),clearcoatNormalMapUv:gt&&ft(mt.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Nt&&ft(mt.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Kt&&ft(mt.diffuseRoughnessMap.channel),iridescenceMapUv:Zt&&ft(mt.iridescenceMap.channel),iridescenceThicknessMapUv:We&&ft(mt.iridescenceThicknessMap.channel),sheenColorMapUv:Ye&&ft(mt.sheenColorMap.channel),sheenRoughnessMapUv:zt&&ft(mt.sheenRoughnessMap.channel),specularMapUv:Vt&&ft(mt.specularMap.channel),specularColorMapUv:Xe&&ft(mt.specularColorMap.channel),specularIntensityMapUv:At&&ft(mt.specularIntensityMap.channel),transmissionMapUv:Wt&&ft(mt.transmissionMap.channel),thicknessMapUv:kt&&ft(mt.thicknessMap.channel),alphaMapUv:He&&ft(mt.alphaMap.channel),vertexTangents:!!wt.attributes.tangent&&(kn||It),vertexNormals:!!wt.attributes.normal,vertexColors:mt.vertexColors,vertexAlphas:mt.vertexColors===!0&&!!wt.attributes.color&&wt.attributes.color.itemSize===4,pointsUvs:Pt.isPoints===!0&&!!wt.attributes.uv&&(yn||He),fog:!!$t,useFog:mt.fog===!0,fogExp2:!!$t&&$t.isFogExp2,flatShading:mt.wireframe===!1&&(mt.flatShading===!0||wt.attributes.normal===void 0&&kn===!1&&(mt.isMeshLambertMaterial||mt.isMeshPhongMaterial||mt.isMeshStandardMaterial||mt.isMeshPhysicalMaterial)),sizeAttenuation:mt.sizeAttenuation===!0,logarithmicDepthBuffer:ut,reversedDepthBuffer:an,skinning:Pt.isSkinnedMesh===!0,hasPositionAttribute:wt.attributes.position!==void 0,morphTargets:wt.morphAttributes.position!==void 0,morphNormals:wt.morphAttributes.normal!==void 0,morphColors:wt.morphAttributes.color!==void 0,morphTargetsCount:Ge,morphTextureStride:on,numSunLights:vt.sun.length,numDirLights:vt.directional.length,numPointLights:vt.point.length,numSpotLights:vt.spot.length,numSpotLightMaps:vt.spotLightMap.length,numRectAreaLights:vt.rectArea.length,numHemiLights:vt.hemi.length,numSunLightShadows:vt.sunShadowMap.length,numDirLightShadows:vt.directionalShadowMap.length,numPointLightShadows:vt.pointShadowMap.length,numSpotLightShadows:vt.spotShadowMap.length,numSpotLightShadowsWithMaps:vt.numSpotLightShadowsWithMaps,numLightProbes:vt.numLightProbes,numLightProbeGrids:Bt.filter((je)=>je.texture!==null).length,numClippingPlanes:st.numPlanes,numClipIntersection:st.numIntersection,dithering:mt.dithering,shadowMapEnabled:Y.shadowMap.enabled&&Lt.length>0,shadowMapType:Y.shadowMap.type,toneMapping:Qe,decodeVideoTexture:yn&&mt.map.isVideoTexture===!0&&s.getTransfer(mt.map.colorSpace)===a,decodeVideoTextureEmissive:li&&mt.emissiveMap.isVideoTexture===!0&&s.getTransfer(mt.emissiveMap.colorSpace)===a,premultipliedAlpha:mt.premultipliedAlpha,doubleSided:mt.side===p,flipSided:mt.side===ii,useDepthPacking:mt.depthPacking>=0,depthPacking:mt.depthPacking||0,index0AttributeName:mt.index0AttributeName,extensionClipCullDistance:cn&&mt.extensions.clipCullDistance===!0&&et.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(cn&&mt.extensions.multiDraw===!0||bn)&&et.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:et.has("KHR_parallel_shader_compile"),customProgramCacheKey:mt.customProgramCacheKey()};return Sn.vertexUv1s=ot.has(1),Sn.vertexUv2s=ot.has(2),Sn.vertexUv3s=ot.has(3),ot.clear(),Sn}function St(mt){let vt=[];if(mt.shaderID)vt.push(mt.shaderID);else vt.push(mt.customVertexShaderID),vt.push(mt.customFragmentShaderID);if(mt.defines!==void 0)for(let Lt in mt.defines)vt.push(Lt),vt.push(mt.defines[Lt]);if(mt.isRawShaderMaterial===!1)dt(vt,mt),pt(vt,mt),vt.push(Y.outputColorSpace);return vt.push(mt.customProgramCacheKey),vt.join()}function dt(mt,vt){mt.push(vt.precision),mt.push(vt.outputColorSpace),mt.push(vt.envMapMode),mt.push(vt.envMapPMREM),mt.push(vt.envMapMaxLod),mt.push(vt.envMapSize),mt.push(vt.mapUv),mt.push(vt.alphaMapUv),mt.push(vt.lightMapUv),mt.push(vt.aoMapUv),mt.push(vt.bumpMapUv),mt.push(vt.normalMapUv),mt.push(vt.displacementMapUv),mt.push(vt.emissiveMapUv),mt.push(vt.metalnessMapUv),mt.push(vt.roughnessMapUv),mt.push(vt.anisotropyMapUv),mt.push(vt.clearcoatMapUv),mt.push(vt.clearcoatNormalMapUv),mt.push(vt.clearcoatRoughnessMapUv),mt.push(vt.diffuseRoughnessMapUv),mt.push(vt.iridescenceMapUv),mt.push(vt.iridescenceThicknessMapUv),mt.push(vt.sheenColorMapUv),mt.push(vt.sheenRoughnessMapUv),mt.push(vt.specularMapUv),mt.push(vt.specularColorMapUv),mt.push(vt.specularIntensityMapUv),mt.push(vt.transmissionMapUv),mt.push(vt.thicknessMapUv),mt.push(vt.combine),mt.push(vt.fogExp2),mt.push(vt.sizeAttenuation),mt.push(vt.morphTargetsCount),mt.push(vt.numSunLights),mt.push(vt.numDirLights),mt.push(vt.numPointLights),mt.push(vt.numSpotLights),mt.push(vt.numSpotLightMaps),mt.push(vt.numHemiLights),mt.push(vt.numRectAreaLights),mt.push(vt.numSunLightShadows),mt.push(vt.numDirLightShadows),mt.push(vt.numPointLightShadows),mt.push(vt.numSpotLightShadows),mt.push(vt.numSpotLightShadowsWithMaps),mt.push(vt.numLightProbes),mt.push(vt.numLightProbeGrids),mt.push(vt.shadowMapType),mt.push(vt.toneMapping),mt.push(vt.numClippingPlanes),mt.push(vt.numClipIntersection),mt.push(vt.depthPacking)}function pt(mt,vt){if(rt.disableAll(),vt.instancing)rt.enable(0);if(vt.instancingColor)rt.enable(1);if(vt.instancingMorph)rt.enable(2);if(vt.matcap)rt.enable(3);if(vt.envMap)rt.enable(4);if(vt.normalMapObjectSpace)rt.enable(5);if(vt.normalMapTangentSpace)rt.enable(6);if(vt.clearcoat)rt.enable(7);if(vt.iridescence)rt.enable(8);if(vt.alphaTest)rt.enable(9);if(vt.vertexColors)rt.enable(10);if(vt.vertexAlphas)rt.enable(11);if(vt.vertexUv1s)rt.enable(12);if(vt.vertexUv2s)rt.enable(13);if(vt.vertexUv3s)rt.enable(14);if(vt.vertexTangents)rt.enable(15);if(vt.anisotropy)rt.enable(16);if(vt.alphaHash)rt.enable(17);if(vt.batching)rt.enable(18);if(vt.dispersion)rt.enable(19);if(vt.retroreflection)rt.enable(24);if(vt.diffuseRoughness)rt.enable(25);if(vt.batchingColor)rt.enable(20);if(vt.gradientMap)rt.enable(21);if(vt.packedNormalMap)rt.enable(22);if(vt.vertexNormals)rt.enable(23);if(mt.push(rt.mask),rt.disableAll(),vt.fog)rt.enable(0);if(vt.useFog)rt.enable(1);if(vt.flatShading)rt.enable(2);if(vt.logarithmicDepthBuffer)rt.enable(3);if(vt.reversedDepthBuffer)rt.enable(4);if(vt.skinning)rt.enable(5);if(vt.morphTargets)rt.enable(6);if(vt.morphNormals)rt.enable(7);if(vt.morphColors)rt.enable(8);if(vt.premultipliedAlpha)rt.enable(9);if(vt.shadowMapEnabled)rt.enable(10);if(vt.doubleSided)rt.enable(11);if(vt.flipSided)rt.enable(12);if(vt.useDepthPacking)rt.enable(13);if(vt.dithering)rt.enable(14);if(vt.transmission)rt.enable(15);if(vt.sheen)rt.enable(16);if(vt.opaque)rt.enable(17);if(vt.pointsUvs)rt.enable(18);if(vt.decodeVideoTexture)rt.enable(19);if(vt.decodeVideoTextureEmissive)rt.enable(20);if(vt.alphaToCoverage)rt.enable(21);if(vt.numLightProbeGrids>0)rt.enable(22);if(vt.hasPositionAttribute)rt.enable(23);mt.push(rt.mask)}function bt(mt){let vt=ht[mt.type],Lt;if(vt){let Gt=Ii[vt];Lt=O.clone(Gt.uniforms)}else Lt=mt.uniforms;return Lt}function Tt(mt,vt){let Lt=ct.get(vt);if(Lt!==void 0)++Lt.usedTimes;else Lt=new hg(Y,vt,mt,it),lt.push(Lt),ct.set(vt,Lt);return Lt}function Mt(mt){if(--mt.usedTimes===0){let vt=lt.indexOf(mt);lt[vt]=lt[lt.length-1],lt.pop(),ct.delete(mt.cacheKey),mt.destroy()}}function Et(mt){at.remove(mt)}function Ct(){at.dispose()}return{getParameters:xt,getProgramCacheKey:St,getUniforms:bt,acquireProgram:Tt,releaseProgram:Mt,releaseShaderCache:Et,programs:lt,dispose:Ct}}function pg(){let Y=new WeakMap;function tt(rt){return Y.has(rt)}function et(rt){let at=Y.get(rt);if(at===void 0)at={},Y.set(rt,at);return at}function nt(rt){Y.delete(rt)}function it(rt,at,ot){Y.get(rt)[at]=ot}function st(){Y=new WeakMap}return{has:tt,get:et,remove:nt,update:it,dispose:st}}function mg(Y,tt){if(Y.groupOrder!==tt.groupOrder)return Y.groupOrder-tt.groupOrder;else if(Y.renderOrder!==tt.renderOrder)return Y.renderOrder-tt.renderOrder;else if(Y.material.id!==tt.material.id)return Y.material.id-tt.material.id;else if(Y.materialVariant!==tt.materialVariant)return Y.materialVariant-tt.materialVariant;else if(Y.z!==tt.z)return Y.z-tt.z;else return Y.id-tt.id}function Mh(Y,tt){if(Y.groupOrder!==tt.groupOrder)return Y.groupOrder-tt.groupOrder;else if(Y.renderOrder!==tt.renderOrder)return Y.renderOrder-tt.renderOrder;else if(Y.z!==tt.z)return tt.z-Y.z;else return Y.id-tt.id}function bh(){let Y=[],tt=0,et=[],nt=[],it=[];function st(){tt=0,et.length=0,nt.length=0,it.length=0}function rt(ht){let ft=0;if(ht.isInstancedMesh)ft+=2;if(ht.isSkinnedMesh)ft+=1;return ft}function at(ht,ft,xt,St,dt,pt){let bt=Y[tt];if(bt===void 0)bt={id:ht.id,object:ht,geometry:ft,material:xt,materialVariant:rt(ht),groupOrder:St,renderOrder:ht.renderOrder,z:dt,group:pt},Y[tt]=bt;else bt.id=ht.id,bt.object=ht,bt.geometry=ft,bt.material=xt,bt.materialVariant=rt(ht),bt.groupOrder=St,bt.renderOrder=ht.renderOrder,bt.z=dt,bt.group=pt;return tt++,bt}function ot(ht,ft,xt,St,dt,pt,bt){if(bt.reversedDepth===!0)dt=-dt;let Tt=at(ht,ft,xt,St,dt,pt);if(xt.transmission>0)nt.push(Tt);else if(xt.transparent===!0)it.push(Tt);else et.push(Tt)}function lt(ht,ft,xt,St,dt,pt){let bt=at(ht,ft,xt,St,dt,pt);if(xt.transmission>0)nt.unshift(bt);else if(xt.transparent===!0)it.unshift(bt);else et.unshift(bt)}function ct(ht,ft){if(et.length>1)et.sort(ht||mg);if(nt.length>1)nt.sort(ft||Mh);if(it.length>1)it.sort(ft||Mh)}function ut(){for(let ht=tt,ft=Y.length;ht<ft;ht++){let xt=Y[ht];if(xt.id===null)break;xt.id=null,xt.object=null,xt.geometry=null,xt.material=null,xt.group=null}}return{opaque:et,transmissive:nt,transparent:it,init:st,push:ot,unshift:lt,finish:ut,sort:ct}}function gg(){let Y=new WeakMap;function tt(nt,it){let st=Y.get(nt),rt;if(st===void 0)rt=new bh,Y.set(nt,[rt]);else if(it>=st.length)rt=new bh,st.push(rt);else rt=st[it];return rt}function et(){Y=new WeakMap}return{get:tt,dispose:et}}function _g(){let Y={};return{get:function(tt){if(Y[tt.id]!==void 0)return Y[tt.id];let et;switch(tt.type){case"SunLight":case"DirectionalLight":et={direction:new e,color:new t};break;case"SpotLight":et={position:new e,direction:new e,color:new t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":et={position:new e,color:new t,distance:0,decay:0};break;case"HemisphereLight":et={direction:new e,skyColor:new t,groundColor:new t};break;case"RectAreaLight":et={color:new t,position:new e,halfWidth:new e,halfHeight:new e};break}return Y[tt.id]=et,et}}}function xg(){let Y={};return{get:function(tt){if(Y[tt.id]!==void 0)return Y[tt.id];let et;switch(tt.type){case"SunLight":case"DirectionalLight":et={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new n};break;case"SpotLight":et={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new n};break;case"PointLight":et={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new n,shadowCameraNear:1,shadowCameraFar:1000};break}return Y[tt.id]=et,et}}}var vg=0;function yg(Y,tt){return(tt.castShadow?2:0)-(Y.castShadow?2:0)+(tt.map?1:0)-(Y.map?1:0)}function Sg(Y){let tt=new _g,et=xg(),nt={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let lt=0;lt<9;lt++)nt.probe.push(new e);let it=new e,st=new i,rt=new i;function at(lt){let ct=0,ut=0,ht=0;for(let Bt=0;Bt<9;Bt++)nt.probe[Bt].set(0,0,0);let ft=0,xt=0,St=0,dt=0,pt=0,bt=0,Tt=0,Mt=0,Et=0,Ct=0,mt=0,vt=0,Lt=0,Gt=0;lt.sort(yg);for(let Bt=0,$t=lt.length;Bt<$t;Bt++){let wt=lt[Bt],{color:Xt,intensity:Yt,distance:Ft}=wt,Ve=null;if(wt.shadow&&wt.shadow.map)if(wt.shadow.map.texture.format===fs)Ve=wt.shadow.map.texture;else Ve=wt.shadow.map.depthTexture||wt.shadow.map.texture;if(wt.isAmbientLight)ct+=Xt.r*Yt,ut+=Xt.g*Yt,ht+=Xt.b*Yt;else if(wt.isLightProbe){for(let Ht=0;Ht<9;Ht++)nt.probe[Ht].addScaledVector(wt.sh.coefficients[Ht],Yt);Gt++}else if(wt.isSunLight){let Ht=tt.get(wt);if(Ht.color.copy(wt.color).multiplyScalar(wt.intensity),wt.castShadow){let Jt=wt.shadow,Ge=et.get(wt);Ge.shadowIntensity=Jt.intensity,Ge.shadowBias=Jt.bias,Ge.shadowNormalBias=Jt.normalBias,Ge.shadowRadius=Jt.radius,Ge.shadowMapSize.copy(Jt.mapSize).multiply(Jt.getFrameExtents()),nt.sunShadow[xt]=Ge,nt.sunShadowMap[xt]=Ve;let on=Jt.getViewportCount();for(let qt=0;qt<on;qt++)nt.sunShadowMatrix[St+qt]=Jt.getMatrix(qt),nt.sunShadowCascade[St+qt]=Jt._cascadeData[qt];St+=on,xt++}nt.sun[ft]=Ht,ft++}else if(wt.isDirectionalLight){let Ht=tt.get(wt);if(Ht.color.copy(wt.color).multiplyScalar(wt.intensity),wt.castShadow){let Jt=wt.shadow,Ge=et.get(wt);Ge.shadowIntensity=Jt.intensity,Ge.shadowBias=Jt.bias,Ge.shadowNormalBias=Jt.normalBias,Ge.shadowRadius=Jt.radius,Ge.shadowMapSize=Jt.mapSize,nt.directionalShadow[dt]=Ge,nt.directionalShadowMap[dt]=Ve,nt.directionalShadowMatrix[dt]=wt.shadow.matrix,Et++}nt.directional[dt]=Ht,dt++}else if(wt.isSpotLight){let Ht=tt.get(wt);Ht.position.setFromMatrixPosition(wt.matrixWorld),Ht.color.copy(Xt).multiplyScalar(Yt),Ht.distance=Ft,Ht.coneCos=Math.cos(wt.angle),Ht.penumbraCos=Math.cos(wt.angle*(1-wt.penumbra)),Ht.decay=wt.decay,nt.spot[bt]=Ht;let Jt=wt.shadow;if(wt.map){if(nt.spotLightMap[vt]=wt.map,vt++,Jt.updateMatrices(wt),wt.castShadow)Lt++}if(nt.spotLightMatrix[bt]=Jt.matrix,wt.castShadow){let Ge=et.get(wt);Ge.shadowIntensity=Jt.intensity,Ge.shadowBias=Jt.bias,Ge.shadowNormalBias=Jt.normalBias,Ge.shadowRadius=Jt.radius,Ge.shadowMapSize=Jt.mapSize,nt.spotShadow[bt]=Ge,nt.spotShadowMap[bt]=Ve,mt++}bt++}else if(wt.isRectAreaLight){let Ht=tt.get(wt);Ht.color.copy(Xt).multiplyScalar(Yt),Ht.halfWidth.set(wt.width*0.5,0,0),Ht.halfHeight.set(0,wt.height*0.5,0),nt.rectArea[Tt]=Ht,Tt++}else if(wt.isPointLight){let Ht=tt.get(wt);if(Ht.color.copy(wt.color).multiplyScalar(wt.intensity),Ht.distance=wt.distance,Ht.decay=wt.decay,wt.castShadow){let Jt=wt.shadow,Ge=et.get(wt);Ge.shadowIntensity=Jt.intensity,Ge.shadowBias=Jt.bias,Ge.shadowNormalBias=Jt.normalBias,Ge.shadowRadius=Jt.radius,Ge.shadowMapSize=Jt.mapSize,Ge.shadowCameraNear=Jt.camera.near,Ge.shadowCameraFar=Jt.camera.far,nt.pointShadow[pt]=Ge,nt.pointShadowMap[pt]=Ve,nt.pointShadowMatrix[pt]=wt.shadow.matrix,Ct++}nt.point[pt]=Ht,pt++}else if(wt.isHemisphereLight){let Ht=tt.get(wt);Ht.skyColor.copy(wt.color).multiplyScalar(Yt),Ht.groundColor.copy(wt.groundColor).multiplyScalar(Yt),nt.hemi[Mt]=Ht,Mt++}}if(Tt>0)if(Y.has("OES_texture_float_linear")===!0)nt.rectAreaLTC1=Ke.LTC_FLOAT_1,nt.rectAreaLTC2=Ke.LTC_FLOAT_2;else nt.rectAreaLTC1=Ke.LTC_HALF_1,nt.rectAreaLTC2=Ke.LTC_HALF_2;nt.ambient[0]=ct,nt.ambient[1]=ut,nt.ambient[2]=ht;let Pt=nt.hash;if(Pt.sunLength!==ft||Pt.directionalLength!==dt||Pt.pointLength!==pt||Pt.spotLength!==bt||Pt.rectAreaLength!==Tt||Pt.hemiLength!==Mt||Pt.numSunShadows!==xt||Pt.numDirectionalShadows!==Et||Pt.numPointShadows!==Ct||Pt.numSpotShadows!==mt||Pt.numSpotMaps!==vt||Pt.numLightProbes!==Gt)nt.sun.length=ft,nt.directional.length=dt,nt.spot.length=bt,nt.rectArea.length=Tt,nt.point.length=pt,nt.hemi.length=Mt,nt.sunShadow.length=xt,nt.sunShadowMap.length=xt,nt.sunShadowMatrix.length=St,nt.sunShadowCascade.length=St,nt.directionalShadow.length=Et,nt.directionalShadowMap.length=Et,nt.directionalShadowMatrix.length=Et,nt.pointShadow.length=Ct,nt.pointShadowMap.length=Ct,nt.pointShadowMatrix.length=Ct,nt.spotShadow.length=mt,nt.spotShadowMap.length=mt,nt.spotLightMatrix.length=mt+vt-Lt,nt.spotLightMap.length=vt,nt.numSpotLightShadowsWithMaps=Lt,nt.numLightProbes=Gt,Pt.sunLength=ft,Pt.directionalLength=dt,Pt.pointLength=pt,Pt.spotLength=bt,Pt.rectAreaLength=Tt,Pt.hemiLength=Mt,Pt.numSunShadows=xt,Pt.numDirectionalShadows=Et,Pt.numPointShadows=Ct,Pt.numSpotShadows=mt,Pt.numSpotMaps=vt,Pt.numLightProbes=Gt,nt.version=vg++}function ot(lt,ct){let ut=0,ht=0,ft=0,xt=0,St=0,dt=0,pt=ct.matrixWorldInverse;for(let bt=0,Tt=lt.length;bt<Tt;bt++){let Mt=lt[bt];if(Mt.isSunLight){let Et=nt.sun[ut];Et.direction.setFromMatrixPosition(Mt.matrixWorld),Et.direction.transformDirection(pt),ut++}else if(Mt.isDirectionalLight){let Et=nt.directional[ht];Et.direction.setFromMatrixPosition(Mt.matrixWorld),it.setFromMatrixPosition(Mt.target.matrixWorld),Et.direction.sub(it),Et.direction.transformDirection(pt),ht++}else if(Mt.isSpotLight){let Et=nt.spot[xt];Et.position.setFromMatrixPosition(Mt.matrixWorld),Et.position.applyMatrix4(pt),Et.direction.setFromMatrixPosition(Mt.matrixWorld),it.setFromMatrixPosition(Mt.target.matrixWorld),Et.direction.sub(it),Et.direction.transformDirection(pt),xt++}else if(Mt.isRectAreaLight){let Et=nt.rectArea[St];Et.position.setFromMatrixPosition(Mt.matrixWorld),Et.position.applyMatrix4(pt),rt.identity(),st.copy(Mt.matrixWorld),st.premultiply(pt),rt.extractRotation(st),Et.halfWidth.set(Mt.width*0.5,0,0),Et.halfHeight.set(0,Mt.height*0.5,0),Et.halfWidth.applyMatrix4(rt),Et.halfHeight.applyMatrix4(rt),St++}else if(Mt.isPointLight){let Et=nt.point[ft];Et.position.setFromMatrixPosition(Mt.matrixWorld),Et.position.applyMatrix4(pt),ft++}else if(Mt.isHemisphereLight){let Et=nt.hemi[dt];Et.direction.setFromMatrixPosition(Mt.matrixWorld),Et.direction.transformDirection(pt),dt++}}}return{setup:at,setupView:ot,state:nt}}function Th(Y){let tt=new Sg(Y),et=[],nt=[],it=[];function st(ut){ct.camera=ut,et.length=0,nt.length=0,it.length=0}function rt(ut){if(ut.isLightProbeGrid)it.push(ut);else et.push(ut)}function at(ut){nt.push(ut)}function ot(){tt.setup(et),it.sort((ut,ht)=>ut.priority-ht.priority||ut.id-ht.id)}function lt(ut){tt.setupView(et,ut)}let ct={lightsArray:et,shadowsArray:nt,lightProbeGridArray:it,camera:null,lights:tt,transmissionRenderTarget:{},textureUnits:0};return{init:st,state:ct,setupLights:ot,setupLightsView:lt,pushLight:rt,pushShadow:at}}function Mg(Y){let tt=new WeakMap;function et(it,st=0){let rt=tt.get(it),at;if(rt===void 0)at=new Th(Y),tt.set(it,[at]);else if(st>=rt.length)at=new Th(Y),rt.push(at);else at=rt[st];return at}function nt(){tt=new WeakMap}return{get:et,dispose:nt}}var bg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Tg=`uniform sampler2D shadow_pass;
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
}`,Eg=[new e(1,0,0),new e(-1,0,0),new e(0,1,0),new e(0,-1,0),new e(0,0,1),new e(0,0,-1)],Ag=[new e(0,-1,0),new e(0,-1,0),new e(0,0,1),new e(0,0,-1),new e(0,-1,0),new e(0,-1,0)],Eh=new i,cr=new e,nl=new e;function wg(Y,tt,et){let nt=new us,it=new n,st=new n,rt=new Nn,at=new Ho,ot=new Wo,lt={},ct=et.maxTextureSize,ut={[H]:ii,[ii]:H,[p]:p},ht=new S({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new n},radius:{value:4}},vertexShader:bg,fragmentShader:Tg}),ft=ht.clone();ft.defines.HORIZONTAL_PASS=1;let xt=new v;xt.setAttribute("position",new T(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let St=new o(xt,ht),dt=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=js;let pt=this.type;this.render=function(Ct,mt,vt){if(dt.enabled===!1)return;if(dt.autoUpdate===!1&&dt.needsUpdate===!1)return;if(Ct.length===0)return;if(this.type===Ae)hn("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=js;let Lt=Y.getRenderTarget(),Gt=Y.getActiveCubeFace(),Pt=Y.getActiveMipmapLevel(),Bt=Y.state;if(Bt.setBlending(U),Bt.buffers.depth.getReversed()===!0)Bt.buffers.color.setClear(0,0,0,0);else Bt.buffers.color.setClear(1,1,1,1);Bt.buffers.depth.setTest(!0),Bt.setScissorTest(!1);let $t=pt!==this.type;if($t)mt.traverse(function(wt){if(wt.material)if(Array.isArray(wt.material))wt.material.forEach((Xt)=>Xt.needsUpdate=!0);else wt.material.needsUpdate=!0});for(let wt=0,Xt=Ct.length;wt<Xt;wt++){let Yt=Ct[wt],Ft=Yt.shadow;if(Ft===void 0){hn("WebGLShadowMap:",Yt,"has no shadow.");continue}if(Ft.autoUpdate===!1&&Ft.needsUpdate===!1)continue;it.copy(Ft.mapSize);let Ve=Ft.getFrameExtents();if(it.multiply(Ve),st.copy(Ft.mapSize),it.x>ct||it.y>ct){if(it.x>ct)st.x=Math.floor(ct/Ve.x),it.x=st.x*Ve.x,Ft.mapSize.x=st.x;if(it.y>ct)st.y=Math.floor(ct/Ve.y),it.y=st.y*Ve.y,Ft.mapSize.y=st.y}let Ht=Y.state.buffers.depth.getReversed();if(Ft.camera._reversedDepth=Ht,Ft.map===null||$t===!0){if(Ft.map!==null){if(Ft.map.depthTexture!==null)Ft.map.depthTexture.dispose(),Ft.map.depthTexture=null;Ft.map.dispose()}if(this.type===Ns){if(Yt.isPointLight){hn("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Ft.map=new _(it.x,it.y,{format:fs,type:b,minFilter:M,magFilter:M,generateMipmaps:!1}),Ft.map.texture.name=Yt.name+".shadowMap",Ft.map.depthTexture=new Qi(it.x,it.y,Gi),Ft.map.depthTexture.name=Yt.name+".shadowMapDepth",Ft.map.depthTexture.format=Fs,Ft.map.depthTexture.compareFunction=null,Ft.map.depthTexture.minFilter=L,Ft.map.depthTexture.magFilter=L}else{if(Yt.isPointLight)Ft.map=new ha(it.x),Ft.map.depthTexture=new ia(it.x,$i);else Ft.map=new _(it.x,it.y),Ft.map.depthTexture=new Qi(it.x,it.y,$i);if(Ft.map.depthTexture.name=Yt.name+".shadowMap",Ft.map.depthTexture.format=Fs,this.type===js)Ft.map.depthTexture.compareFunction=Ht?Io:Co,Ft.map.depthTexture.minFilter=M,Ft.map.depthTexture.magFilter=M;else Ft.map.depthTexture.compareFunction=null,Ft.map.depthTexture.minFilter=L,Ft.map.depthTexture.magFilter=L}Ft.camera.updateProjectionMatrix()}if(Ft.map.isWebGLCubeRenderTarget!==!0&&(Ft.map.width!==it.x||Ft.map.height!==it.y))Ft.map.setSize(it.x,it.y);let Jt=Ft.map.isWebGLCubeRenderTarget?6:Ft.getViewportCount();if(Yt.isPointLight!==!0)Ft.updateMatrices(Yt,vt);let Ge=(Ft.camera.layers.mask&4294967294)!==0?Ft.camera.layers:vt.layers;for(let on=0;on<Jt;on++){let qt=Ft.getCamera(on);if(Yt.isPointLight){let{camera:jt,matrix:rn}=Ft,fn=Yt.distance||jt.far;if(fn!==jt.far)jt.far=fn,jt.updateProjectionMatrix();cr.setFromMatrixPosition(Yt.matrixWorld),jt.position.copy(cr),nl.copy(jt.position),nl.add(Eg[on]),jt.up.copy(Ag[on]),jt.lookAt(nl),jt.updateMatrixWorld(),rn.makeTranslation(-cr.x,-cr.y,-cr.z),Eh.multiplyMatrices(jt.projectionMatrix,jt.matrixWorldInverse),Ft._frustum.setFromProjectionMatrix(Eh,jt.coordinateSystem,jt.reversedDepth)}if(Ft.map.isWebGLCubeRenderTarget)Y.setRenderTarget(Ft.map,on),Y.clear();else{if(on===0)Y.setRenderTarget(Ft.map),Y.clear();let jt=Ft.getViewport(on);rt.set(st.x*jt.x,st.y*jt.y,st.x*jt.z,st.y*jt.w),Bt.viewport(rt)}nt=Ft.getFrustum(on),Mt(mt,vt,qt,Yt,Ge,this.type)}if(Ft.isPointLightShadow!==!0&&this.type===Ns)bt(Ft,vt);Ft.needsUpdate=!1}pt=this.type,dt.needsUpdate=!1,Y.setRenderTarget(Lt,Gt,Pt)};function bt(Ct,mt){let vt=tt.update(St);if(ht.defines.VSM_SAMPLES!==Ct.blurSamples)ht.defines.VSM_SAMPLES=Ct.blurSamples,ft.defines.VSM_SAMPLES=Ct.blurSamples,ht.needsUpdate=!0,ft.needsUpdate=!0;if(Ct.mapPass===null)Ct.mapPass=new _(it.x,it.y,{format:fs,type:b});else if(Ct.mapPass.width!==Ct.map.width||Ct.mapPass.height!==Ct.map.height)Ct.mapPass.setSize(Ct.map.width,Ct.map.height);ht.uniforms.shadow_pass.value=Ct.map.depthTexture,ht.uniforms.resolution.value.set(Ct.map.width,Ct.map.height),ht.uniforms.radius.value=Ct.radius,Y.setRenderTarget(Ct.mapPass),Y.clear(),Y.renderBufferDirect(mt,null,vt,ht,St,null),ft.uniforms.shadow_pass.value=Ct.mapPass.texture,ft.uniforms.resolution.value.set(Ct.map.width,Ct.map.height),ft.uniforms.radius.value=Ct.radius,Y.setRenderTarget(Ct.map),Y.clear(),Y.renderBufferDirect(mt,null,vt,ft,St,null)}function Tt(Ct,mt,vt,Lt){let Gt=null,Pt=vt.isPointLight===!0?Ct.customDistanceMaterial:Ct.customDepthMaterial;if(Pt!==void 0)Gt=Pt;else if(Gt=vt.isPointLight===!0?ot:at,Y.localClippingEnabled&&mt.clipShadows===!0&&Array.isArray(mt.clippingPlanes)&&mt.clippingPlanes.length!==0||mt.displacementMap&&mt.displacementScale!==0||mt.alphaMap&&mt.alphaTest>0||mt.map&&mt.alphaTest>0||mt.alphaToCoverage===!0){let Bt=Gt.uuid,$t=mt.uuid,wt=lt[Bt];if(wt===void 0)wt={},lt[Bt]=wt;let Xt=wt[$t];if(Xt===void 0)Xt=Gt.clone(),wt[$t]=Xt,mt.addEventListener("dispose",Et);Gt=Xt}if(Gt.visible=mt.visible,Gt.wireframe=mt.wireframe,Lt===Ns)Gt.side=mt.shadowSide!==null?mt.shadowSide:mt.side;else Gt.side=mt.shadowSide!==null?mt.shadowSide:ut[mt.side];if(Gt.alphaMap=mt.alphaMap,Gt.alphaTest=mt.alphaToCoverage===!0?0.5:mt.alphaTest,Gt.map=mt.map,Gt.clipShadows=mt.clipShadows,Gt.clippingPlanes=mt.clippingPlanes,Gt.clipIntersection=mt.clipIntersection,Gt.displacementMap=mt.displacementMap,Gt.displacementScale=mt.displacementScale,Gt.displacementBias=mt.displacementBias,Gt.wireframeLinewidth=mt.wireframeLinewidth,Gt.linewidth=mt.linewidth,vt.isPointLight===!0&&Gt.isMeshDistanceMaterial===!0){let Bt=Y.properties.get(Gt);Bt.light=vt}return Gt}function Mt(Ct,mt,vt,Lt,Gt,Pt){if(Ct.visible===!1)return;if(Ct.layers.test(Gt)&&(Ct.isMesh||Ct.isLine||Ct.isPoints)){if((Ct.castShadow||Ct.receiveShadow&&Pt===Ns)&&(!Ct.frustumCulled||Ct.intersectsFrustum(nt))){Ct.modelViewMatrix.multiplyMatrices(vt.matrixWorldInverse,Ct.matrixWorld);let wt=tt.update(Ct),Xt=Ct.material;if(Array.isArray(Xt)){let Yt=wt.groups;for(let Ft=0,Ve=Yt.length;Ft<Ve;Ft++){let Ht=Yt[Ft],Jt=Xt[Ht.materialIndex];if(Jt&&Jt.visible){let Ge=Tt(Ct,Jt,Lt,Pt);Ct.onBeforeShadow(Y,Ct,mt,vt,wt,Ge,Ht),Y.renderBufferDirect(vt,null,wt,Ge,Ct,Ht),Ct.onAfterShadow(Y,Ct,mt,vt,wt,Ge,Ht)}}}else if(Xt.visible){let Yt=Tt(Ct,Xt,Lt,Pt);Ct.onBeforeShadow(Y,Ct,mt,vt,wt,Yt,null),Y.renderBufferDirect(vt,null,wt,Yt,Ct,null),Ct.onAfterShadow(Y,Ct,mt,vt,wt,Yt,null)}}}let $t=Ct.children;for(let wt=0,Xt=$t.length;wt<Xt;wt++)Mt($t[wt],mt,vt,Lt,Gt,Pt)}function Et(Ct){Ct.target.removeEventListener("dispose",Et);for(let vt in lt){let Lt=lt[vt],Gt=Ct.target.uuid;if(Gt in Lt)Lt[Gt].dispose(),delete Lt[Gt]}}}function Rg(Y,tt){function et(){let At=!1,Wt=new Nn,kt=null,Qt=new Nn(0,0,0,0);return{setMask:function(He){if(kt!==He&&!At)Y.colorMask(He,He,He,He),kt=He},setLocked:function(He){At=He},setClear:function(He,Je,un,cn,Qe){if(Qe===!0)He*=cn,Je*=cn,un*=cn;if(Wt.set(He,Je,un,cn),Qt.equals(Wt)===!1)Y.clearColor(He,Je,un,cn),Qt.copy(Wt)},reset:function(){At=!1,kt=null,Qt.set(-1,0,0,0)}}}function nt(){let At=!1,Wt=!1,kt=null,Qt=null,He=null;return{setReversed:function(Je){if(Wt!==Je){let un=tt.get("EXT_clip_control");if(Je)un.clipControlEXT(un.LOWER_LEFT_EXT,un.ZERO_TO_ONE_EXT);else un.clipControlEXT(un.LOWER_LEFT_EXT,un.NEGATIVE_ONE_TO_ONE_EXT);Wt=Je;let cn=He;He=null,this.setClear(cn)}},getReversed:function(){return Wt},setTest:function(Je){if(Je)an(Y.DEPTH_TEST);else In(Y.DEPTH_TEST)},setMask:function(Je){if(kt!==Je&&!At)Y.depthMask(Je),kt=Je},setFunc:function(Je){if(Wt)Je=Jc[Je];if(Qt!==Je){switch(Je){case bc:Y.depthFunc(Y.NEVER);break;case Tc:Y.depthFunc(Y.ALWAYS);break;case Ec:Y.depthFunc(Y.LESS);break;case Wa:Y.depthFunc(Y.LEQUAL);break;case Ac:Y.depthFunc(Y.EQUAL);break;case wc:Y.depthFunc(Y.GEQUAL);break;case Rc:Y.depthFunc(Y.GREATER);break;case Cc:Y.depthFunc(Y.NOTEQUAL);break;default:Y.depthFunc(Y.LEQUAL)}Qt=Je}},setLocked:function(Je){At=Je},setClear:function(Je){if(He!==Je){if(He=Je,Wt)Je=1-Je;Y.clearDepth(Je)}},reset:function(){At=!1,kt=null,Qt=null,He=null,Wt=!1}}}function it(){let At=!1,Wt=null,kt=null,Qt=null,He=null,Je=null,un=null,cn=null,Qe=null;return{setTest:function(dn){if(!At)if(dn)an(Y.STENCIL_TEST);else In(Y.STENCIL_TEST)},setMask:function(dn){if(Wt!==dn&&!At)Y.stencilMask(dn),Wt=dn},setFunc:function(dn,Sn,je){if(kt!==dn||Qt!==Sn||He!==je)Y.stencilFunc(dn,Sn,je),kt=dn,Qt=Sn,He=je},setOp:function(dn,Sn,je){if(Je!==dn||un!==Sn||cn!==je)Y.stencilOp(dn,Sn,je),Je=dn,un=Sn,cn=je},setLocked:function(dn){At=dn},setClear:function(dn){if(Qe!==dn)Y.clearStencil(dn),Qe=dn},reset:function(){At=!1,Wt=null,kt=null,Qt=null,He=null,Je=null,un=null,cn=null,Qe=null}}}let st=new et,rt=new nt,at=new it,ot={},lt=new WeakMap,ct={},ut={},ht={},ft=new WeakMap,xt=[],St=null,dt=!1,pt=null,bt=null,Tt=null,Mt=null,Et=null,Ct=null,mt=null,vt=new t(0,0,0),Lt=0,Gt=!1,Pt=null,Bt=null,$t=null,wt=null,Xt=null,Yt=Y.getParameter(Y.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Ft=!1,Ve=0,Ht=Y.getParameter(Y.VERSION);if(Ht.indexOf("WebGL")!==-1)Ve=parseFloat(/^WebGL (\d)/.exec(Ht)[1]),Ft=Ve>=1;else if(Ht.indexOf("OpenGL ES")!==-1)Ve=parseFloat(/^OpenGL ES (\d)/.exec(Ht)[1]),Ft=Ve>=2;let Jt=null,Ge={},on=Y.getParameter(Y.SCISSOR_BOX),qt=Y.getParameter(Y.VIEWPORT),jt=new Nn().fromArray(on),rn=new Nn().fromArray(qt);function fn(At,Wt,kt,Qt){let He=new Uint8Array(4),Je=Y.createTexture();Y.bindTexture(At,Je),Y.texParameteri(At,Y.TEXTURE_MIN_FILTER,Y.NEAREST),Y.texParameteri(At,Y.TEXTURE_MAG_FILTER,Y.NEAREST);for(let un=0;un<kt;un++)if(At===Y.TEXTURE_3D||At===Y.TEXTURE_2D_ARRAY)Y.texImage3D(Wt,0,Y.RGBA,1,1,Qt,0,Y.RGBA,Y.UNSIGNED_BYTE,He);else Y.texImage2D(Wt+un,0,Y.RGBA,1,1,0,Y.RGBA,Y.UNSIGNED_BYTE,He);return Je}let pn={};pn[Y.TEXTURE_2D]=fn(Y.TEXTURE_2D,Y.TEXTURE_2D,1),pn[Y.TEXTURE_CUBE_MAP]=fn(Y.TEXTURE_CUBE_MAP,Y.TEXTURE_CUBE_MAP_POSITIVE_X,6),pn[Y.TEXTURE_2D_ARRAY]=fn(Y.TEXTURE_2D_ARRAY,Y.TEXTURE_2D_ARRAY,1,1),pn[Y.TEXTURE_3D]=fn(Y.TEXTURE_3D,Y.TEXTURE_3D,1,1),st.setClear(0,0,0,1),rt.setClear(1),at.setClear(0),an(Y.DEPTH_TEST),rt.setFunc(Wa),hi(!1),kn(Ga),an(Y.CULL_FACE),Gn(U);function an(At){if(ct[At]!==!0)Y.enable(At),ct[At]=!0}function In(At){if(ct[At]!==!1)Y.disable(At),ct[At]=!1}function bn(At,Wt){if(ht[At]!==Wt){if(Y.bindFramebuffer(At,Wt),ht[At]=Wt,At===Y.DRAW_FRAMEBUFFER)ht[Y.FRAMEBUFFER]=Wt;if(At===Y.FRAMEBUFFER)ht[Y.DRAW_FRAMEBUFFER]=Wt;return!0}return!1}function yn(At,Wt){let kt=xt,Qt=!1;if(At){if(kt=ft.get(Wt),kt===void 0)kt=[],ft.set(Wt,kt);let He=At.textures;if(kt.length!==He.length||kt[0]!==Y.COLOR_ATTACHMENT0){for(let Je=0,un=He.length;Je<un;Je++)kt[Je]=Y.COLOR_ATTACHMENT0+Je;kt.length=He.length,Qt=!0}}else if(kt[0]!==Y.BACK)kt[0]=Y.BACK,Qt=!0;if(Qt)Y.drawBuffers(kt)}function On(At){if(St!==At)return Y.useProgram(At),St=At,!0;return!1}let wn={[Ds]:Y.FUNC_ADD,[sc]:Y.FUNC_SUBTRACT,[rc]:Y.FUNC_REVERSE_SUBTRACT};wn[ac]=Y.MIN,wn[oc]=Y.MAX;let zn={[lc]:Y.ZERO,[cc]:Y.ONE,[hc]:Y.SRC_COLOR,[dc]:Y.SRC_ALPHA,[xc]:Y.SRC_ALPHA_SATURATE,[gc]:Y.DST_COLOR,[pc]:Y.DST_ALPHA,[uc]:Y.ONE_MINUS_SRC_COLOR,[fc]:Y.ONE_MINUS_SRC_ALPHA,[_c]:Y.ONE_MINUS_DST_COLOR,[mc]:Y.ONE_MINUS_DST_ALPHA,[vc]:Y.CONSTANT_COLOR,[yc]:Y.ONE_MINUS_CONSTANT_COLOR,[Sc]:Y.CONSTANT_ALPHA,[Mc]:Y.ONE_MINUS_CONSTANT_ALPHA};function Gn(At,Wt,kt,Qt,He,Je,un,cn,Qe,dn){if(At===U){if(dt===!0)In(Y.BLEND),dt=!1;return}if(dt===!1)an(Y.BLEND),dt=!0;if(At!==ic){if(At!==pt||dn!==Gt){if(bt!==Ds||Et!==Ds)Y.blendEquation(Y.FUNC_ADD),bt=Ds,Et=Ds;if(dn)switch(At){case tr:Y.blendFuncSeparate(Y.ONE,Y.ONE_MINUS_SRC_ALPHA,Y.ONE,Y.ONE_MINUS_SRC_ALPHA);break;case ce:Y.blendFunc(Y.ONE,Y.ONE);break;case ka:Y.blendFuncSeparate(Y.ZERO,Y.ONE_MINUS_SRC_COLOR,Y.ZERO,Y.ONE);break;case Ha:Y.blendFuncSeparate(Y.DST_COLOR,Y.ONE_MINUS_SRC_ALPHA,Y.ZERO,Y.ONE);break;default:gn("WebGLState: Invalid blending: ",At);break}else switch(At){case tr:Y.blendFuncSeparate(Y.SRC_ALPHA,Y.ONE_MINUS_SRC_ALPHA,Y.ONE,Y.ONE_MINUS_SRC_ALPHA);break;case ce:Y.blendFuncSeparate(Y.SRC_ALPHA,Y.ONE,Y.ONE,Y.ONE);break;case ka:gn("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ha:gn("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:gn("WebGLState: Invalid blending: ",At);break}Tt=null,Mt=null,Ct=null,mt=null,vt.set(0,0,0),Lt=0,pt=At,Gt=dn}return}if(He=He||Wt,Je=Je||kt,un=un||Qt,Wt!==bt||He!==Et)Y.blendEquationSeparate(wn[Wt],wn[He]),bt=Wt,Et=He;if(kt!==Tt||Qt!==Mt||Je!==Ct||un!==mt)Y.blendFuncSeparate(zn[kt],zn[Qt],zn[Je],zn[un]),Tt=kt,Mt=Qt,Ct=Je,mt=un;if(cn.equals(vt)===!1||Qe!==Lt)Y.blendColor(cn.r,cn.g,cn.b,Qe),vt.copy(cn),Lt=Qe;pt=At,Gt=!1}function oi(At,Wt){At.side===p?In(Y.CULL_FACE):an(Y.CULL_FACE);let kt=At.side===ii;if(Wt)kt=!kt;hi(kt),At.blending===tr&&At.transparent===!1?Gn(U):Gn(At.blending,At.blendEquation,At.blendSrc,At.blendDst,At.blendEquationAlpha,At.blendSrcAlpha,At.blendDstAlpha,At.blendColor,At.blendAlpha,At.premultipliedAlpha),rt.setFunc(At.depthFunc),rt.setTest(At.depthTest),rt.setMask(At.depthWrite),st.setMask(At.colorWrite);let Qt=At.stencilWrite;if(at.setTest(Qt),Qt)at.setMask(At.stencilWriteMask),at.setFunc(At.stencilFunc,At.stencilRef,At.stencilFuncMask),at.setOp(At.stencilFail,At.stencilZFail,At.stencilZPass);li(At.polygonOffset,At.polygonOffsetFactor,At.polygonOffsetUnits),At.alphaToCoverage===!0?an(Y.SAMPLE_ALPHA_TO_COVERAGE):In(Y.SAMPLE_ALPHA_TO_COVERAGE)}function hi(At){if(Pt!==At){if(At)Y.frontFace(Y.CW);else Y.frontFace(Y.CCW);Pt=At}}function kn(At){if(At!==ec){if(an(Y.CULL_FACE),At!==Bt)if(At===Ga)Y.cullFace(Y.BACK);else if(At===nc)Y.cullFace(Y.FRONT);else Y.cullFace(Y.FRONT_AND_BACK)}else In(Y.CULL_FACE);Bt=At}function Kn(At){if(At!==$t){if(Ft)Y.lineWidth(At);$t=At}}function li(At,Wt,kt){if(At){if(an(Y.POLYGON_OFFSET_FILL),wt!==Wt||Xt!==kt){if(wt=Wt,Xt=kt,rt.getReversed())Wt=-Wt,kt=-kt;Y.polygonOffset(Wt,kt)}}else In(Y.POLYGON_OFFSET_FILL)}function ci(At){if(At)an(Y.SCISSOR_TEST);else In(Y.SCISSOR_TEST)}function gi(At){if(At===void 0)At=Y.TEXTURE0+Yt-1;if(Jt!==At)Y.activeTexture(At),Jt=At}function It(At,Wt,kt){if(kt===void 0)if(Jt===null)kt=Y.TEXTURE0+Yt-1;else kt=Jt;let Qt=Ge[kt];if(Qt===void 0)Qt={type:void 0,texture:void 0},Ge[kt]=Qt;if(Qt.type!==At||Qt.texture!==Wt){if(Jt!==kt)Y.activeTexture(kt),Jt=kt;Y.bindTexture(At,Wt||pn[At]),Qt.type=At,Qt.texture=Wt}}function _i(){let At=Ge[Jt];if(At!==void 0&&At.type!==void 0)Y.bindTexture(At.type,null),At.type=void 0,At.texture=void 0}function Pn(){try{Y.compressedTexImage2D(...arguments)}catch(At){gn("WebGLState:",At)}}function qn(){try{Y.compressedTexImage3D(...arguments)}catch(At){gn("WebGLState:",At)}}function $e(){try{Y.texSubImage2D(...arguments)}catch(At){gn("WebGLState:",At)}}function Un(){try{Y.texSubImage3D(...arguments)}catch(At){gn("WebGLState:",At)}}function mn(){try{Y.compressedTexSubImage2D(...arguments)}catch(At){gn("WebGLState:",At)}}function xn(){try{Y.compressedTexSubImage3D(...arguments)}catch(At){gn("WebGLState:",At)}}function Qn(){try{Y.texStorage2D(...arguments)}catch(At){gn("WebGLState:",At)}}function yt(){try{Y.texStorage3D(...arguments)}catch(At){gn("WebGLState:",At)}}function gt(){try{Y.texImage2D(...arguments)}catch(At){gn("WebGLState:",At)}}function Nt(){try{Y.texImage3D(...arguments)}catch(At){gn("WebGLState:",At)}}function Kt(At){if(ut[At]!==void 0)return ut[At];else return Y.getParameter(At)}function Zt(At,Wt){if(ut[At]!==Wt)Y.pixelStorei(At,Wt),ut[At]=Wt}function We(At){if(jt.equals(At)===!1)Y.scissor(At.x,At.y,At.z,At.w),jt.copy(At)}function Ye(At){if(rn.equals(At)===!1)Y.viewport(At.x,At.y,At.z,At.w),rn.copy(At)}function zt(At,Wt){let kt=lt.get(Wt);if(kt===void 0)kt=new WeakMap,lt.set(Wt,kt);let Qt=kt.get(At);if(Qt===void 0)Qt=Y.getUniformBlockIndex(Wt,At.name),Y.uniformBlockBinding(Wt,Qt,Qt),kt.set(At,Qt)}function Vt(At,Wt,kt){let He=lt.get(Wt).get(At);if(ot[He]!==kt)Y.bindBufferBase(Y.UNIFORM_BUFFER,He,kt),ot[He]=kt}function Xe(){Y.disable(Y.BLEND),Y.disable(Y.CULL_FACE),Y.disable(Y.DEPTH_TEST),Y.disable(Y.POLYGON_OFFSET_FILL),Y.disable(Y.SCISSOR_TEST),Y.disable(Y.STENCIL_TEST),Y.disable(Y.SAMPLE_ALPHA_TO_COVERAGE),Y.blendEquation(Y.FUNC_ADD),Y.blendFunc(Y.ONE,Y.ZERO),Y.blendFuncSeparate(Y.ONE,Y.ZERO,Y.ONE,Y.ZERO),Y.blendColor(0,0,0,0),Y.colorMask(!0,!0,!0,!0),Y.clearColor(0,0,0,0),Y.depthMask(!0),Y.depthFunc(Y.LESS),rt.setReversed(!1),Y.clearDepth(1),Y.stencilMask(4294967295),Y.stencilFunc(Y.ALWAYS,0,4294967295),Y.stencilOp(Y.KEEP,Y.KEEP,Y.KEEP),Y.clearStencil(0),Y.cullFace(Y.BACK),Y.frontFace(Y.CCW),Y.polygonOffset(0,0),Y.activeTexture(Y.TEXTURE0),Y.bindFramebuffer(Y.FRAMEBUFFER,null),Y.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null),Y.bindFramebuffer(Y.READ_FRAMEBUFFER,null),Y.useProgram(null),Y.lineWidth(1),Y.scissor(0,0,Y.canvas.width,Y.canvas.height),Y.viewport(0,0,Y.canvas.width,Y.canvas.height),Y.pixelStorei(Y.PACK_ALIGNMENT,4),Y.pixelStorei(Y.UNPACK_ALIGNMENT,4),Y.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,!1),Y.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),Y.pixelStorei(Y.UNPACK_COLORSPACE_CONVERSION_WEBGL,Y.BROWSER_DEFAULT_WEBGL),Y.pixelStorei(Y.PACK_ROW_LENGTH,0),Y.pixelStorei(Y.PACK_SKIP_PIXELS,0),Y.pixelStorei(Y.PACK_SKIP_ROWS,0),Y.pixelStorei(Y.UNPACK_ROW_LENGTH,0),Y.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,0),Y.pixelStorei(Y.UNPACK_SKIP_PIXELS,0),Y.pixelStorei(Y.UNPACK_SKIP_ROWS,0),Y.pixelStorei(Y.UNPACK_SKIP_IMAGES,0),ct={},ut={},Jt=null,Ge={},ht={},ot={},ft=new WeakMap,xt=[],St=null,dt=!1,pt=null,bt=null,Tt=null,Mt=null,Et=null,Ct=null,mt=null,vt=new t(0,0,0),Lt=0,Gt=!1,Pt=null,Bt=null,$t=null,wt=null,Xt=null,jt.set(0,0,Y.canvas.width,Y.canvas.height),rn.set(0,0,Y.canvas.width,Y.canvas.height),st.reset(),rt.reset(),at.reset()}return{buffers:{color:st,depth:rt,stencil:at},enable:an,disable:In,bindFramebuffer:bn,drawBuffers:yn,useProgram:On,setBlending:Gn,setMaterial:oi,setFlipSided:hi,setCullFace:kn,setLineWidth:Kn,setPolygonOffset:li,setScissorTest:ci,activeTexture:gi,bindTexture:It,unbindTexture:_i,compressedTexImage2D:Pn,compressedTexImage3D:qn,texImage2D:gt,texImage3D:Nt,pixelStorei:Zt,getParameter:Kt,updateUBOMapping:zt,uniformBlockBinding:Vt,texStorage2D:Qn,texStorage3D:yt,texSubImage2D:$e,texSubImage3D:Un,compressedTexSubImage2D:mn,compressedTexSubImage3D:xn,scissor:We,viewport:Ye,reset:Xe}}function Cg(Y,tt,et,nt,it,st,rt){let at=tt.has("WEBGL_multisampled_render_to_texture")?tt.get("WEBGL_multisampled_render_to_texture"):null,ot=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),lt=new n,ct=new WeakMap,ut=new Set,ht,ft=new WeakMap,xt=new Set,St=new FinalizationRegistry((yt)=>xt.delete(yt)),dt=!1;try{dt=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(yt){}function pt(yt,gt){return dt?new OffscreenCanvas(yt,gt):Ps("canvas")}function bt(yt,gt,Nt){let Kt=1,Zt=Qn(yt);if(Zt.width>Nt||Zt.height>Nt)Kt=Nt/Math.max(Zt.width,Zt.height);if(Kt<1)if(typeof HTMLImageElement<"u"&&yt instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&yt instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&yt instanceof ImageBitmap||typeof VideoFrame<"u"&&yt instanceof VideoFrame){let We=Math.floor(Kt*Zt.width),Ye=Math.floor(Kt*Zt.height);if(ht===void 0)ht=pt(We,Ye);let zt=gt?pt(We,Ye):ht;return zt.width=We,zt.height=Ye,zt.getContext("2d").drawImage(yt,0,0,We,Ye),hn("WebGLRenderer: Texture has been resized from ("+Zt.width+"x"+Zt.height+") to ("+We+"x"+Ye+")."),zt}else{if("data"in yt)hn("WebGLRenderer: Image in DataTexture is too big ("+Zt.width+"x"+Zt.height+").");return yt}return yt}function Tt(yt){return yt.generateMipmaps}function Mt(yt){Y.generateMipmap(yt)}function Et(yt){if(yt.isWebGLCubeRenderTarget)return Y.TEXTURE_CUBE_MAP;if(yt.isWebGL3DRenderTarget)return Y.TEXTURE_3D;if(yt.isWebGLArrayRenderTarget||yt.isCompressedArrayTexture)return Y.TEXTURE_2D_ARRAY;return Y.TEXTURE_2D}function Ct(yt,gt,Nt,Kt,Zt,We=!1){if(yt!==null){if(Y[yt]!==void 0)return Y[yt];hn("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+yt+"'")}let Ye;if(Kt){if(Ye=tt.get("EXT_texture_norm16"),!Ye)hn("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let zt=gt;if(gt===Y.RED){if(Nt===Y.FLOAT)zt=Y.R32F;if(Nt===Y.HALF_FLOAT)zt=Y.R16F;if(Nt===Y.UNSIGNED_BYTE)zt=Y.R8;if(Nt===Y.UNSIGNED_SHORT&&Ye)zt=Ye.R16_EXT;if(Nt===Y.SHORT&&Ye)zt=Ye.R16_SNORM_EXT}if(gt===Y.RED_INTEGER){if(Nt===Y.UNSIGNED_BYTE)zt=Y.R8UI;if(Nt===Y.UNSIGNED_SHORT)zt=Y.R16UI;if(Nt===Y.UNSIGNED_INT)zt=Y.R32UI;if(Nt===Y.BYTE)zt=Y.R8I;if(Nt===Y.SHORT)zt=Y.R16I;if(Nt===Y.INT)zt=Y.R32I}if(gt===Y.RG){if(Nt===Y.FLOAT)zt=Y.RG32F;if(Nt===Y.HALF_FLOAT)zt=Y.RG16F;if(Nt===Y.UNSIGNED_BYTE)zt=Y.RG8;if(Nt===Y.UNSIGNED_SHORT&&Ye)zt=Ye.RG16_EXT;if(Nt===Y.SHORT&&Ye)zt=Ye.RG16_SNORM_EXT}if(gt===Y.RG_INTEGER){if(Nt===Y.UNSIGNED_BYTE)zt=Y.RG8UI;if(Nt===Y.UNSIGNED_SHORT)zt=Y.RG16UI;if(Nt===Y.UNSIGNED_INT)zt=Y.RG32UI;if(Nt===Y.BYTE)zt=Y.RG8I;if(Nt===Y.SHORT)zt=Y.RG16I;if(Nt===Y.INT)zt=Y.RG32I}if(gt===Y.RGB_INTEGER){if(Nt===Y.UNSIGNED_BYTE)zt=Y.RGB8UI;if(Nt===Y.UNSIGNED_SHORT)zt=Y.RGB16UI;if(Nt===Y.UNSIGNED_INT)zt=Y.RGB32UI;if(Nt===Y.BYTE)zt=Y.RGB8I;if(Nt===Y.SHORT)zt=Y.RGB16I;if(Nt===Y.INT)zt=Y.RGB32I}if(gt===Y.RGBA_INTEGER){if(Nt===Y.UNSIGNED_BYTE)zt=Y.RGBA8UI;if(Nt===Y.UNSIGNED_SHORT)zt=Y.RGBA16UI;if(Nt===Y.UNSIGNED_INT)zt=Y.RGBA32UI;if(Nt===Y.BYTE)zt=Y.RGBA8I;if(Nt===Y.SHORT)zt=Y.RGBA16I;if(Nt===Y.INT)zt=Y.RGBA32I}if(gt===Y.RGB){if(Nt===Y.UNSIGNED_SHORT&&Ye)zt=Ye.RGB16_EXT;if(Nt===Y.SHORT&&Ye)zt=Ye.RGB16_SNORM_EXT;if(Nt===Y.UNSIGNED_INT_5_9_9_9_REV)zt=Y.RGB9_E5;if(Nt===Y.UNSIGNED_INT_10F_11F_11F_REV)zt=Y.R11F_G11F_B10F}if(gt===Y.RGBA){let Vt=We?Ro:s.getTransfer(Zt);if(Nt===Y.FLOAT)zt=Y.RGBA32F;if(Nt===Y.HALF_FLOAT)zt=Y.RGBA16F;if(Nt===Y.UNSIGNED_BYTE)zt=Vt===a?Y.SRGB8_ALPHA8:Y.RGBA8;if(Nt===Y.UNSIGNED_SHORT&&Ye)zt=Ye.RGBA16_EXT;if(Nt===Y.SHORT&&Ye)zt=Ye.RGBA16_SNORM_EXT;if(Nt===Y.UNSIGNED_SHORT_4_4_4_4)zt=Y.RGBA4;if(Nt===Y.UNSIGNED_SHORT_5_5_5_1)zt=Y.RGB5_A1}if(zt===Y.R16F||zt===Y.R32F||zt===Y.RG16F||zt===Y.RG32F||zt===Y.RGBA16F||zt===Y.RGBA32F)tt.get("EXT_color_buffer_float");return zt}function mt(yt,gt){let Nt;if(yt){if(gt===null||gt===$i||gt===ds)Nt=Y.DEPTH24_STENCIL8;else if(gt===Gi)Nt=Y.DEPTH32F_STENCIL8;else if(gt===nr)Nt=Y.DEPTH24_STENCIL8,hn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(gt===null||gt===$i||gt===ds)Nt=Y.DEPTH_COMPONENT24;else if(gt===Gi)Nt=Y.DEPTH_COMPONENT32F;else if(gt===nr)Nt=Y.DEPTH_COMPONENT16;return Nt}function vt(yt,gt){if(Tt(yt)===!0||yt.isFramebufferTexture&&yt.minFilter!==L&&yt.minFilter!==M)return Math.log2(Math.max(gt.width,gt.height))+1;else if(yt.mipmaps.length>0)return yt.mipmaps.length;else if(yt.isCompressedTexture&&Array.isArray(yt.image))return gt.mipmaps.length;else return 1}function Lt(yt){let gt=new WeakRef(yt);nt.get(yt).__ref=gt,xt.add(gt),St.register(yt,gt,gt)}function Gt(yt){let gt=nt.get(yt).__ref;if(gt===void 0)return;xt.delete(gt),St.unregister(gt)}function Pt(yt){$t(yt.target)}function Bt(yt){wt(yt.target)}function $t(yt){if(yt.removeEventListener("dispose",Pt),Gt(yt),Yt(yt),yt.isVideoTexture)ct.delete(yt);if(yt.isHTMLTexture)ut.delete(yt)}function wt(yt){yt.removeEventListener("dispose",Bt),Gt(yt),Ve(yt)}function Xt(){for(let yt of xt){let gt=yt.deref();if(gt===void 0)continue;if(gt.isRenderTarget===!0)wt(gt);else $t(gt)}xt.clear(),ut.clear()}function Yt(yt){let gt=nt.get(yt);if(gt.__webglInit===void 0)return;let Nt=yt.source,Kt=ft.get(Nt);if(Kt){let Zt=Kt[gt.__cacheKey];if(Zt.usedTimes--,Zt.usedTimes===0)Ft(yt);if(Object.keys(Kt).length===0)ft.delete(Nt)}nt.remove(yt)}function Ft(yt){let gt=nt.get(yt);Y.deleteTexture(gt.__webglTexture);let Nt=yt.source,Kt=ft.get(Nt);delete Kt[gt.__cacheKey],rt.memory.textures--}function Ve(yt){let gt=nt.get(yt);if(gt.__depthDisposeCallback)gt.__depthDisposeCallback();let Nt=yt.depthTexture;if(Nt&&Nt.renderTarget===yt)$t(Nt);if(yt.isWebGLCubeRenderTarget)for(let Zt=0;Zt<6;Zt++){if(Array.isArray(gt.__webglFramebuffer[Zt]))for(let We=0;We<gt.__webglFramebuffer[Zt].length;We++)Y.deleteFramebuffer(gt.__webglFramebuffer[Zt][We]);else Y.deleteFramebuffer(gt.__webglFramebuffer[Zt]);if(gt.__webglDepthbuffer)Y.deleteRenderbuffer(gt.__webglDepthbuffer[Zt])}else{if(Array.isArray(gt.__webglFramebuffer))for(let Zt=0;Zt<gt.__webglFramebuffer.length;Zt++)Y.deleteFramebuffer(gt.__webglFramebuffer[Zt]);else Y.deleteFramebuffer(gt.__webglFramebuffer);if(gt.__webglDepthbuffer)Y.deleteRenderbuffer(gt.__webglDepthbuffer);if(gt.__webglMultisampledFramebuffer)Y.deleteFramebuffer(gt.__webglMultisampledFramebuffer);if(gt.__webglColorRenderbuffer){for(let Zt=0;Zt<gt.__webglColorRenderbuffer.length;Zt++)if(gt.__webglColorRenderbuffer[Zt])Y.deleteRenderbuffer(gt.__webglColorRenderbuffer[Zt])}if(gt.__webglDepthRenderbuffer)Y.deleteRenderbuffer(gt.__webglDepthRenderbuffer)}let Kt=yt.textures;for(let Zt=0,We=Kt.length;Zt<We;Zt++){let Ye=nt.get(Kt[Zt]);if(Ye.__webglTexture)Y.deleteTexture(Ye.__webglTexture),rt.memory.textures--;nt.remove(Kt[Zt])}nt.remove(yt)}let Ht=0;function Jt(){Ht=0}function Ge(){return Ht}function on(yt){Ht=yt}function qt(){let yt=Ht;if(yt>=it.maxTextures)hn("WebGLTextures: Trying to use "+(yt+1)+" texture units while this GPU supports only "+it.maxTextures);return Ht+=1,yt}function jt(yt){let gt=[];return gt.push(yt.wrapS),gt.push(yt.wrapT),gt.push(yt.wrapR||0),gt.push(yt.magFilter),gt.push(yt.minFilter),gt.push(yt.anisotropy),gt.push(yt.internalFormat),gt.push(yt.format),gt.push(yt.type),gt.push(yt.generateMipmaps),gt.push(yt.mipmapsAutoUpdate),gt.push(yt.premultiplyAlpha),gt.push(yt.flipY),gt.push(yt.unpackAlignment),gt.push(yt.colorSpace),gt.join()}function rn(yt,gt){let Nt=nt.get(yt);if(yt.isVideoTexture)mn(yt);if(yt.isRenderTargetTexture===!1&&yt.isExternalTexture!==!0&&yt.version>0&&Nt.__version!==yt.version){let Kt=yt.image;if(Kt===null)hn("WebGLRenderer: Texture marked for update but no image data found.");else if(Kt.complete===!1)hn("WebGLRenderer: Texture marked for update but image is incomplete");else{oi(Nt,yt,gt);return}}else if(yt.isExternalTexture)Nt.__webglTexture=yt.sourceTexture?yt.sourceTexture:null;et.bindTexture(Y.TEXTURE_2D,Nt.__webglTexture,Y.TEXTURE0+gt)}function fn(yt,gt){let Nt=nt.get(yt);if(yt.isRenderTargetTexture===!1&&yt.version>0&&Nt.__version!==yt.version){oi(Nt,yt,gt);return}else if(yt.isExternalTexture)Nt.__webglTexture=yt.sourceTexture?yt.sourceTexture:null;et.bindTexture(Y.TEXTURE_2D_ARRAY,Nt.__webglTexture,Y.TEXTURE0+gt)}function pn(yt,gt){let Nt=nt.get(yt);if(yt.isRenderTargetTexture===!1&&yt.version>0&&Nt.__version!==yt.version){oi(Nt,yt,gt);return}et.bindTexture(Y.TEXTURE_3D,Nt.__webglTexture,Y.TEXTURE0+gt)}function an(yt,gt){let Nt=nt.get(yt);if(yt.version>0&&Nt.__version!==yt.version){hi(Nt,yt,gt);return}et.bindTexture(Y.TEXTURE_CUBE_MAP,Nt.__webglTexture,Y.TEXTURE0+gt)}let In={[j]:Y.REPEAT,[ee]:Y.CLAMP_TO_EDGE,[Ee]:Y.MIRRORED_REPEAT},bn={[L]:Y.NEAREST,[Re]:Y.NEAREST_MIPMAP_NEAREST,[Z]:Y.NEAREST_MIPMAP_LINEAR,[M]:Y.LINEAR,[te]:Y.LINEAR_MIPMAP_NEAREST,[N]:Y.LINEAR_MIPMAP_LINEAR},yn={[kc]:Y.NEVER,[Po]:Y.ALWAYS,[Hc]:Y.LESS,[Co]:Y.LEQUAL,[Wc]:Y.EQUAL,[Io]:Y.GEQUAL,[Vc]:Y.GREATER,[Xc]:Y.NOTEQUAL};function On(yt,gt){if(gt.type===Gi&&tt.has("OES_texture_float_linear")===!1&&(gt.magFilter===M||gt.magFilter===te||gt.magFilter===Z||gt.magFilter===N||gt.minFilter===M||gt.minFilter===te||gt.minFilter===Z||gt.minFilter===N))hn("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(Y.texParameteri(yt,Y.TEXTURE_WRAP_S,In[gt.wrapS]),Y.texParameteri(yt,Y.TEXTURE_WRAP_T,In[gt.wrapT]),yt===Y.TEXTURE_3D||yt===Y.TEXTURE_2D_ARRAY)Y.texParameteri(yt,Y.TEXTURE_WRAP_R,In[gt.wrapR]);if(Y.texParameteri(yt,Y.TEXTURE_MAG_FILTER,bn[gt.magFilter]),Y.texParameteri(yt,Y.TEXTURE_MIN_FILTER,bn[gt.minFilter]),gt.compareFunction)Y.texParameteri(yt,Y.TEXTURE_COMPARE_MODE,Y.COMPARE_REF_TO_TEXTURE),Y.texParameteri(yt,Y.TEXTURE_COMPARE_FUNC,yn[gt.compareFunction]);if(tt.has("EXT_texture_filter_anisotropic")===!0){if(gt.magFilter===L)return;if(gt.minFilter!==Z&&gt.minFilter!==N)return;if(gt.type===Gi&&tt.has("OES_texture_float_linear")===!1)return;if(gt.anisotropy>1||nt.get(gt).__currentAnisotropy){let Nt=tt.get("EXT_texture_filter_anisotropic");Y.texParameterf(yt,Nt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(gt.anisotropy,it.getMaxAnisotropy())),nt.get(gt).__currentAnisotropy=gt.anisotropy}}}function wn(yt,gt){let Nt=!1;if(yt.__webglInit===void 0)yt.__webglInit=!0,gt.addEventListener("dispose",Pt),Lt(gt);let Kt=gt.source,Zt=ft.get(Kt);if(Zt===void 0)Zt={},ft.set(Kt,Zt);let We=jt(gt);if(We!==yt.__cacheKey){if(Zt[We]===void 0)Zt[We]={texture:Y.createTexture(),usedTimes:0},rt.memory.textures++,Nt=!0;Zt[We].usedTimes++;let Ye=Zt[yt.__cacheKey];if(Ye!==void 0){if(Zt[yt.__cacheKey].usedTimes--,Ye.usedTimes===0)Ft(gt)}yt.__cacheKey=We,yt.__webglTexture=Zt[We].texture}return Nt}function zn(yt,gt,Nt){return Math.floor(Math.floor(yt/Nt)/gt)}function Gn(yt,gt,Nt,Kt){let We=yt.updateRanges;if(We.length===0)et.texSubImage2D(Y.TEXTURE_2D,0,0,0,gt.width,gt.height,Nt,Kt,gt.data);else{We.sort((At,Wt)=>At.start-Wt.start);let Ye=0;for(let At=1;At<We.length;At++){let Wt=We[Ye],kt=We[At],Qt=Wt.start+Wt.count,He=zn(kt.start,gt.width,4),Je=zn(Wt.start,gt.width,4);if(kt.start<=Qt+1&&He===Je&&zn(kt.start+kt.count-1,gt.width,4)===He)Wt.count=Math.max(Wt.count,kt.start+kt.count-Wt.start);else++Ye,We[Ye]=kt}We.length=Ye+1;let zt=et.getParameter(Y.UNPACK_ROW_LENGTH),Vt=et.getParameter(Y.UNPACK_SKIP_PIXELS),Xe=et.getParameter(Y.UNPACK_SKIP_ROWS);et.pixelStorei(Y.UNPACK_ROW_LENGTH,gt.width);for(let At=0,Wt=We.length;At<Wt;At++){let kt=We[At],Qt=Math.floor(kt.start/4),He=Math.ceil(kt.count/4),Je=Qt%gt.width,un=Math.floor(Qt/gt.width),cn=He,Qe=1;et.pixelStorei(Y.UNPACK_SKIP_PIXELS,Je),et.pixelStorei(Y.UNPACK_SKIP_ROWS,un),et.texSubImage2D(Y.TEXTURE_2D,0,Je,un,cn,1,Nt,Kt,gt.data)}yt.clearUpdateRanges(),et.pixelStorei(Y.UNPACK_ROW_LENGTH,zt),et.pixelStorei(Y.UNPACK_SKIP_PIXELS,Vt),et.pixelStorei(Y.UNPACK_SKIP_ROWS,Xe)}}function oi(yt,gt,Nt){let Kt=Y.TEXTURE_2D;if(gt.isDataArrayTexture||gt.isCompressedArrayTexture)Kt=Y.TEXTURE_2D_ARRAY;if(gt.isData3DTexture)Kt=Y.TEXTURE_3D;let Zt=wn(yt,gt),We=gt.source;et.bindTexture(Kt,yt.__webglTexture,Y.TEXTURE0+Nt);let Ye=nt.get(We);if(We.version!==Ye.__version||Zt===!0){if(et.activeTexture(Y.TEXTURE0+Nt),(typeof ImageBitmap<"u"&&gt.image instanceof ImageBitmap)===!1){let Qe=s.getPrimaries(s.workingColorSpace),dn=gt.colorSpace===ps?null:s.getPrimaries(gt.colorSpace),Sn=gt.colorSpace===ps||Qe===dn?Y.NONE:Y.BROWSER_DEFAULT_WEBGL;et.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,gt.flipY),et.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,gt.premultiplyAlpha),et.pixelStorei(Y.UNPACK_COLORSPACE_CONVERSION_WEBGL,Sn)}et.pixelStorei(Y.UNPACK_ALIGNMENT,gt.unpackAlignment);let Vt=bt(gt.image,!1,it.maxTextureSize);Vt=xn(gt,Vt);let Xe=st.convert(gt.format,gt.colorSpace),At=st.convert(gt.type),Wt=Ct(gt.internalFormat,Xe,At,gt.normalized,gt.colorSpace,gt.isVideoTexture);On(Kt,gt);let kt,Qt=gt.mipmaps,He=gt.isVideoTexture!==!0,Je=Ye.__version===void 0||Zt===!0,un=We.dataReady,cn=vt(gt,Vt);if(gt.isDepthTexture){if(Wt=mt(gt.format===Ki,gt.type),Je)if(He)et.texStorage2D(Y.TEXTURE_2D,1,Wt,Vt.width,Vt.height);else et.texImage2D(Y.TEXTURE_2D,0,Wt,Vt.width,Vt.height,0,Xe,At,null)}else if(gt.isDataTexture)if(Qt.length>0){if(He&&Je)et.texStorage2D(Y.TEXTURE_2D,cn,Wt,Qt[0].width,Qt[0].height);for(let Qe=0,dn=Qt.length;Qe<dn;Qe++)if(kt=Qt[Qe],He){if(un)et.texSubImage2D(Y.TEXTURE_2D,Qe,0,0,kt.width,kt.height,Xe,At,kt.data)}else et.texImage2D(Y.TEXTURE_2D,Qe,Wt,kt.width,kt.height,0,Xe,At,kt.data);gt.generateMipmaps=!1}else if(He){if(Je)et.texStorage2D(Y.TEXTURE_2D,cn,Wt,Vt.width,Vt.height);if(un)Gn(gt,Vt,Xe,At)}else et.texImage2D(Y.TEXTURE_2D,0,Wt,Vt.width,Vt.height,0,Xe,At,Vt.data);else if(gt.isCompressedTexture)if(gt.isCompressedArrayTexture){if(He&&Je)et.texStorage3D(Y.TEXTURE_2D_ARRAY,cn,Wt,Qt[0].width,Qt[0].height,Vt.depth);for(let Qe=0,dn=Qt.length;Qe<dn;Qe++)if(kt=Qt[Qe],gt.format!==ki)if(Xe!==null)if(He){if(un)if(gt.layerUpdates.size>0){let Sn=tl(kt.width,kt.height,gt.format,gt.type);for(let je of gt.layerUpdates){let Ln=kt.data.subarray(je*Sn/kt.data.BYTES_PER_ELEMENT,(je+1)*Sn/kt.data.BYTES_PER_ELEMENT);et.compressedTexSubImage3D(Y.TEXTURE_2D_ARRAY,Qe,0,0,je,kt.width,kt.height,1,Xe,Ln)}}else et.compressedTexSubImage3D(Y.TEXTURE_2D_ARRAY,Qe,0,0,0,kt.width,kt.height,Vt.depth,Xe,kt.data)}else et.compressedTexImage3D(Y.TEXTURE_2D_ARRAY,Qe,Wt,kt.width,kt.height,Vt.depth,0,kt.data,0,0);else hn("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(He){if(un)et.texSubImage3D(Y.TEXTURE_2D_ARRAY,Qe,0,0,0,kt.width,kt.height,Vt.depth,Xe,At,kt.data)}else et.texImage3D(Y.TEXTURE_2D_ARRAY,Qe,Wt,kt.width,kt.height,Vt.depth,0,Xe,At,kt.data);if(gt.layerUpdates.size>0)gt.clearLayerUpdates()}else{if(He&&Je)et.texStorage2D(Y.TEXTURE_2D,cn,Wt,Qt[0].width,Qt[0].height);for(let Qe=0,dn=Qt.length;Qe<dn;Qe++)if(kt=Qt[Qe],gt.format!==ki)if(Xe!==null)if(He){if(un)et.compressedTexSubImage2D(Y.TEXTURE_2D,Qe,0,0,kt.width,kt.height,Xe,kt.data)}else et.compressedTexImage2D(Y.TEXTURE_2D,Qe,Wt,kt.width,kt.height,0,kt.data);else hn("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(He){if(un)et.texSubImage2D(Y.TEXTURE_2D,Qe,0,0,kt.width,kt.height,Xe,At,kt.data)}else et.texImage2D(Y.TEXTURE_2D,Qe,Wt,kt.width,kt.height,0,Xe,At,kt.data)}else if(gt.isDataArrayTexture)if(He){if(Je)et.texStorage3D(Y.TEXTURE_2D_ARRAY,cn,Wt,Vt.width,Vt.height,Vt.depth);if(un)if(gt.layerUpdates.size>0){let Qe=tl(Vt.width,Vt.height,gt.format,gt.type);for(let dn of gt.layerUpdates){let Sn=Vt.data.subarray(dn*Qe/Vt.data.BYTES_PER_ELEMENT,(dn+1)*Qe/Vt.data.BYTES_PER_ELEMENT);et.texSubImage3D(Y.TEXTURE_2D_ARRAY,0,0,0,dn,Vt.width,Vt.height,1,Xe,At,Sn)}gt.clearLayerUpdates()}else et.texSubImage3D(Y.TEXTURE_2D_ARRAY,0,0,0,0,Vt.width,Vt.height,Vt.depth,Xe,At,Vt.data)}else et.texImage3D(Y.TEXTURE_2D_ARRAY,0,Wt,Vt.width,Vt.height,Vt.depth,0,Xe,At,Vt.data);else if(gt.isData3DTexture)if(He){if(Je)et.texStorage3D(Y.TEXTURE_3D,cn,Wt,Vt.width,Vt.height,Vt.depth);if(un)et.texSubImage3D(Y.TEXTURE_3D,0,0,0,0,Vt.width,Vt.height,Vt.depth,Xe,At,Vt.data)}else et.texImage3D(Y.TEXTURE_3D,0,Wt,Vt.width,Vt.height,Vt.depth,0,Xe,At,Vt.data);else if(gt.isFramebufferTexture){if(Je)if(He)et.texStorage2D(Y.TEXTURE_2D,cn,Wt,Vt.width,Vt.height);else{let Qe=Vt.width,dn=Vt.height;for(let Sn=0;Sn<cn;Sn++)et.texImage2D(Y.TEXTURE_2D,Sn,Wt,Qe,dn,0,Xe,At,null),Qe>>=1,dn>>=1}}else if(gt.isHTMLTexture){if("texElementImage2D"in Y){let Qe=Y.canvas;if(!Qe.hasAttribute("layoutsubtree"))Qe.setAttribute("layoutsubtree","true");if(Vt.parentNode!==Qe){Qe.appendChild(Vt),ut.add(gt),Qe.onpaint=(dn)=>{let Sn=dn.changedElements;for(let je of ut)if(Sn.includes(je.image))je.needsUpdate=!0},Qe.requestPaint();return}if(Y.texElementImage2D.length===3)Y.texElementImage2D(Y.TEXTURE_2D,Y.RGBA8,Vt);else{let{RGBA:Sn,RGBA:je,UNSIGNED_BYTE:Ln}=Y;Y.texElementImage2D(Y.TEXTURE_2D,0,Sn,je,Ln,Vt)}Y.texParameteri(Y.TEXTURE_2D,Y.TEXTURE_MIN_FILTER,Y.LINEAR),Y.texParameteri(Y.TEXTURE_2D,Y.TEXTURE_WRAP_S,Y.CLAMP_TO_EDGE),Y.texParameteri(Y.TEXTURE_2D,Y.TEXTURE_WRAP_T,Y.CLAMP_TO_EDGE)}}else if(Qt.length>0){if(He&&Je){let Qe=Qn(Qt[0]);et.texStorage2D(Y.TEXTURE_2D,cn,Wt,Qe.width,Qe.height)}for(let Qe=0,dn=Qt.length;Qe<dn;Qe++)if(kt=Qt[Qe],He){if(un)et.texSubImage2D(Y.TEXTURE_2D,Qe,0,0,Xe,At,kt)}else et.texImage2D(Y.TEXTURE_2D,Qe,Wt,Xe,At,kt);gt.generateMipmaps=!1}else if(He){if(Je){let Qe=Qn(Vt);et.texStorage2D(Y.TEXTURE_2D,cn,Wt,Qe.width,Qe.height)}if(un)et.texSubImage2D(Y.TEXTURE_2D,0,0,0,Xe,At,Vt)}else et.texImage2D(Y.TEXTURE_2D,0,Wt,Xe,At,Vt);if(Tt(gt)&&gt.mipmapsAutoUpdate===!0)Mt(Kt);if(Ye.__version=We.version,gt.onUpdate)gt.onUpdate(gt)}yt.__version=gt.version}function hi(yt,gt,Nt){if(gt.image.length!==6)return;let Kt=wn(yt,gt),Zt=gt.source;et.bindTexture(Y.TEXTURE_CUBE_MAP,yt.__webglTexture,Y.TEXTURE0+Nt);let We=nt.get(Zt);if(Zt.version!==We.__version||Kt===!0){et.activeTexture(Y.TEXTURE0+Nt);let Ye=s.getPrimaries(s.workingColorSpace),zt=gt.colorSpace===ps?null:s.getPrimaries(gt.colorSpace),Vt=gt.colorSpace===ps||Ye===zt?Y.NONE:Y.BROWSER_DEFAULT_WEBGL;et.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,gt.flipY),et.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,gt.premultiplyAlpha),et.pixelStorei(Y.UNPACK_ALIGNMENT,gt.unpackAlignment),et.pixelStorei(Y.UNPACK_COLORSPACE_CONVERSION_WEBGL,Vt);let Xe=gt.isCompressedTexture||gt.image[0].isCompressedTexture,At=gt.image[0]&&gt.image[0].isDataTexture,Wt=[];for(let je=0;je<6;je++){if(!Xe&&!At)Wt[je]=bt(gt.image[je],!0,it.maxCubemapSize);else Wt[je]=At?gt.image[je].image:gt.image[je];Wt[je]=xn(gt,Wt[je])}let kt=Wt[0],Qt=st.convert(gt.format,gt.colorSpace),He=st.convert(gt.type),Je=Ct(gt.internalFormat,Qt,He,gt.normalized,gt.colorSpace),un=gt.isVideoTexture!==!0,cn=We.__version===void 0||Kt===!0,Qe=Zt.dataReady,dn=vt(gt,kt);On(Y.TEXTURE_CUBE_MAP,gt);let Sn;if(gt.isDepthTexture){if(Je=mt(gt.format===Ki,gt.type),cn)if(un)et.texStorage2D(Y.TEXTURE_CUBE_MAP,1,Je,kt.width,kt.height);else for(let je=0;je<6;je++)et.texImage2D(Y.TEXTURE_CUBE_MAP_POSITIVE_X+je,0,Je,kt.width,kt.height,0,Qt,He,null)}else if(Xe){if(un&&cn)et.texStorage2D(Y.TEXTURE_CUBE_MAP,dn,Je,kt.width,kt.height);for(let je=0;je<6;je++){Sn=Wt[je].mipmaps;for(let Ln=0;Ln<Sn.length;Ln++){let Yn=Sn[Ln];if(gt.format!==ki)if(Qt!==null)if(un){if(Qe)et.compressedTexSubImage2D(Y.TEXTURE_CUBE_MAP_POSITIVE_X+je,Ln,0,0,Yn.width,Yn.height,Qt,Yn.data)}else et.compressedTexImage2D(Y.TEXTURE_CUBE_MAP_POSITIVE_X+je,Ln,Je,Yn.width,Yn.height,0,Yn.data);else hn("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(un){if(Qe)et.texSubImage2D(Y.TEXTURE_CUBE_MAP_POSITIVE_X+je,Ln,0,0,Yn.width,Yn.height,Qt,He,Yn.data)}else et.texImage2D(Y.TEXTURE_CUBE_MAP_POSITIVE_X+je,Ln,Je,Yn.width,Yn.height,0,Qt,He,Yn.data)}}}else{if(Sn=gt.mipmaps,un&&cn){if(Sn.length>0)dn++;let je=Qn(Wt[0]);et.texStorage2D(Y.TEXTURE_CUBE_MAP,dn,Je,je.width,je.height)}for(let je=0;je<6;je++)if(At){if(un){if(Qe)et.texSubImage2D(Y.TEXTURE_CUBE_MAP_POSITIVE_X+je,0,0,0,Wt[je].width,Wt[je].height,Qt,He,Wt[je].data)}else et.texImage2D(Y.TEXTURE_CUBE_MAP_POSITIVE_X+je,0,Je,Wt[je].width,Wt[je].height,0,Qt,He,Wt[je].data);for(let Ln=0;Ln<Sn.length;Ln++){let Pi=Sn[Ln].image[je].image;if(un){if(Qe)et.texSubImage2D(Y.TEXTURE_CUBE_MAP_POSITIVE_X+je,Ln+1,0,0,Pi.width,Pi.height,Qt,He,Pi.data)}else et.texImage2D(Y.TEXTURE_CUBE_MAP_POSITIVE_X+je,Ln+1,Je,Pi.width,Pi.height,0,Qt,He,Pi.data)}}else{if(un){if(Qe)et.texSubImage2D(Y.TEXTURE_CUBE_MAP_POSITIVE_X+je,0,0,0,Qt,He,Wt[je])}else et.texImage2D(Y.TEXTURE_CUBE_MAP_POSITIVE_X+je,0,Je,Qt,He,Wt[je]);for(let Ln=0;Ln<Sn.length;Ln++){let Yn=Sn[Ln];if(un){if(Qe)et.texSubImage2D(Y.TEXTURE_CUBE_MAP_POSITIVE_X+je,Ln+1,0,0,Qt,He,Yn.image[je])}else et.texImage2D(Y.TEXTURE_CUBE_MAP_POSITIVE_X+je,Ln+1,Je,Qt,He,Yn.image[je])}}}if(Tt(gt)&&gt.mipmapsAutoUpdate===!0)Mt(Y.TEXTURE_CUBE_MAP);if(We.__version=Zt.version,gt.onUpdate)gt.onUpdate(gt)}yt.__version=gt.version}function kn(yt,gt,Nt,Kt,Zt,We){let Ye=st.convert(Nt.format,Nt.colorSpace),zt=st.convert(Nt.type),Vt=Ct(Nt.internalFormat,Ye,zt,Nt.normalized,Nt.colorSpace),Xe=nt.get(gt),At=nt.get(Nt);if(At.__renderTarget=gt,!Xe.__hasExternalTextures){let Wt=Math.max(1,gt.width>>We),kt=Math.max(1,gt.height>>We);if(Zt===Y.TEXTURE_3D||Zt===Y.TEXTURE_2D_ARRAY)et.texImage3D(Zt,We,Vt,Wt,kt,gt.depth,0,Ye,zt,null);else et.texImage2D(Zt,We,Vt,Wt,kt,0,Ye,zt,null)}if(et.bindFramebuffer(Y.FRAMEBUFFER,yt),Un(gt))at.framebufferTexture2DMultisampleEXT(Y.FRAMEBUFFER,Kt,Zt,At.__webglTexture,0,$e(gt));else if(Zt===Y.TEXTURE_2D||Zt>=Y.TEXTURE_CUBE_MAP_POSITIVE_X&&Zt<=Y.TEXTURE_CUBE_MAP_NEGATIVE_Z)Y.framebufferTexture2D(Y.FRAMEBUFFER,Kt,Zt,At.__webglTexture,We);et.bindFramebuffer(Y.FRAMEBUFFER,null)}function Kn(yt,gt,Nt){if(Y.bindRenderbuffer(Y.RENDERBUFFER,yt),gt.depthBuffer){let Kt=gt.depthTexture,Zt=Kt&&Kt.isDepthTexture?Kt.type:null,We=mt(gt.stencilBuffer,Zt),Ye=gt.stencilBuffer?Y.DEPTH_STENCIL_ATTACHMENT:Y.DEPTH_ATTACHMENT;if(Un(gt))at.renderbufferStorageMultisampleEXT(Y.RENDERBUFFER,$e(gt),We,gt.width,gt.height);else if(Nt)Y.renderbufferStorageMultisample(Y.RENDERBUFFER,$e(gt),We,gt.width,gt.height);else Y.renderbufferStorage(Y.RENDERBUFFER,We,gt.width,gt.height);Y.framebufferRenderbuffer(Y.FRAMEBUFFER,Ye,Y.RENDERBUFFER,yt)}else{let Kt=gt.textures;for(let Zt=0;Zt<Kt.length;Zt++){let We=Kt[Zt],Ye=st.convert(We.format,We.colorSpace),zt=st.convert(We.type),Vt=Ct(We.internalFormat,Ye,zt,We.normalized,We.colorSpace);if(Un(gt))at.renderbufferStorageMultisampleEXT(Y.RENDERBUFFER,$e(gt),Vt,gt.width,gt.height);else if(Nt)Y.renderbufferStorageMultisample(Y.RENDERBUFFER,$e(gt),Vt,gt.width,gt.height);else Y.renderbufferStorage(Y.RENDERBUFFER,Vt,gt.width,gt.height)}}Y.bindRenderbuffer(Y.RENDERBUFFER,null)}function li(yt,gt,Nt){let Kt=gt.isWebGLCubeRenderTarget===!0;if(et.bindFramebuffer(Y.FRAMEBUFFER,yt),!(gt.depthTexture&&gt.depthTexture.isDepthTexture))throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Zt=nt.get(gt.depthTexture);Zt.__renderTarget=gt;let We=Kt?gt.depthTexture.image[0]:gt.depthTexture.image;if(!Zt.__webglTexture||We.width!==gt.width||We.height!==gt.height)We.width=gt.width,We.height=gt.height,gt.depthTexture.needsUpdate=!0;if(Kt)an(gt.depthTexture,0);else rn(gt.depthTexture,0);let Ye=Zt.__webglTexture,zt=$e(gt),Vt=Kt?Y.TEXTURE_CUBE_MAP_POSITIVE_X+Nt:Y.TEXTURE_2D,Xe=gt.depthTexture.format===Ki?Y.DEPTH_STENCIL_ATTACHMENT:Y.DEPTH_ATTACHMENT;if(gt.depthTexture.format===Fs)if(Un(gt))at.framebufferTexture2DMultisampleEXT(Y.FRAMEBUFFER,Xe,Vt,Ye,0,zt);else Y.framebufferTexture2D(Y.FRAMEBUFFER,Xe,Vt,Ye,0);else if(gt.depthTexture.format===Ki)if(Un(gt))at.framebufferTexture2DMultisampleEXT(Y.FRAMEBUFFER,Xe,Vt,Ye,0,zt);else Y.framebufferTexture2D(Y.FRAMEBUFFER,Xe,Vt,Ye,0);else throw Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ci(yt){let gt=nt.get(yt),Nt=yt.isWebGLCubeRenderTarget===!0;if(gt.__boundDepthTexture!==yt.depthTexture){let Kt=yt.depthTexture;if(gt.__depthDisposeCallback)gt.__depthDisposeCallback();if(Kt){let Zt=()=>{delete gt.__boundDepthTexture,delete gt.__depthDisposeCallback,Kt.removeEventListener("dispose",Zt)};Kt.addEventListener("dispose",Zt),gt.__depthDisposeCallback=Zt}gt.__boundDepthTexture=Kt}if(yt.depthTexture&&!gt.__autoAllocateDepthBuffer)if(Nt)for(let Kt=0;Kt<6;Kt++)li(gt.__webglFramebuffer[Kt],yt,Kt);else if(yt.texture.mipmaps.length>0)li(gt.__webglFramebuffer[0],yt,0);else li(gt.__webglFramebuffer,yt,0);else if(Nt){gt.__webglDepthbuffer=[];for(let Kt=0;Kt<6;Kt++)if(et.bindFramebuffer(Y.FRAMEBUFFER,gt.__webglFramebuffer[Kt]),gt.__webglDepthbuffer[Kt]===void 0)gt.__webglDepthbuffer[Kt]=Y.createRenderbuffer(),Kn(gt.__webglDepthbuffer[Kt],yt,!1);else{let Zt=yt.stencilBuffer?Y.DEPTH_STENCIL_ATTACHMENT:Y.DEPTH_ATTACHMENT,We=gt.__webglDepthbuffer[Kt];Y.bindRenderbuffer(Y.RENDERBUFFER,We),Y.framebufferRenderbuffer(Y.FRAMEBUFFER,Zt,Y.RENDERBUFFER,We)}}else{if(yt.texture.mipmaps.length>0)et.bindFramebuffer(Y.FRAMEBUFFER,gt.__webglFramebuffer[0]);else et.bindFramebuffer(Y.FRAMEBUFFER,gt.__webglFramebuffer);if(gt.__webglDepthbuffer===void 0)gt.__webglDepthbuffer=Y.createRenderbuffer(),Kn(gt.__webglDepthbuffer,yt,!1);else{let Zt=yt.stencilBuffer?Y.DEPTH_STENCIL_ATTACHMENT:Y.DEPTH_ATTACHMENT,We=gt.__webglDepthbuffer;Y.bindRenderbuffer(Y.RENDERBUFFER,We),Y.framebufferRenderbuffer(Y.FRAMEBUFFER,Zt,Y.RENDERBUFFER,We)}}et.bindFramebuffer(Y.FRAMEBUFFER,null)}function gi(yt,gt,Nt){let Kt=nt.get(yt);if(gt!==void 0)kn(Kt.__webglFramebuffer,yt,yt.texture,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,0);if(Nt!==void 0)ci(yt)}function It(yt){let gt=yt.texture,Nt=nt.get(yt),Kt=nt.get(gt);yt.addEventListener("dispose",Bt),Lt(yt);let Zt=yt.textures,We=yt.isWebGLCubeRenderTarget===!0,Ye=Zt.length>1;if(!Ye){if(Kt.__webglTexture===void 0)Kt.__webglTexture=Y.createTexture();Kt.__version=gt.version,rt.memory.textures++}if(We){Nt.__webglFramebuffer=[];for(let zt=0;zt<6;zt++)if(gt.mipmaps.length>0){Nt.__webglFramebuffer[zt]=[];for(let Vt=0;Vt<gt.mipmaps.length;Vt++)Nt.__webglFramebuffer[zt][Vt]=Y.createFramebuffer()}else Nt.__webglFramebuffer[zt]=Y.createFramebuffer()}else{if(gt.mipmaps.length>0){Nt.__webglFramebuffer=[];for(let zt=0;zt<gt.mipmaps.length;zt++)Nt.__webglFramebuffer[zt]=Y.createFramebuffer()}else Nt.__webglFramebuffer=Y.createFramebuffer();if(Ye)for(let zt=0,Vt=Zt.length;zt<Vt;zt++){let Xe=nt.get(Zt[zt]);if(Xe.__webglTexture===void 0)Xe.__webglTexture=Y.createTexture(),rt.memory.textures++}if(yt.samples>0&&Un(yt)===!1){Nt.__webglMultisampledFramebuffer=Y.createFramebuffer(),Nt.__webglColorRenderbuffer=[],et.bindFramebuffer(Y.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer);for(let zt=0;zt<Zt.length;zt++){let Vt=Zt[zt];Nt.__webglColorRenderbuffer[zt]=Y.createRenderbuffer(),Y.bindRenderbuffer(Y.RENDERBUFFER,Nt.__webglColorRenderbuffer[zt]);let Xe=st.convert(Vt.format,Vt.colorSpace),At=st.convert(Vt.type),Wt=Ct(Vt.internalFormat,Xe,At,Vt.normalized,Vt.colorSpace,yt.isXRRenderTarget===!0),kt=$e(yt);Y.renderbufferStorageMultisample(Y.RENDERBUFFER,kt,Wt,yt.width,yt.height),Y.framebufferRenderbuffer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0+zt,Y.RENDERBUFFER,Nt.__webglColorRenderbuffer[zt])}if(Y.bindRenderbuffer(Y.RENDERBUFFER,null),yt.depthBuffer)Nt.__webglDepthRenderbuffer=Y.createRenderbuffer(),Kn(Nt.__webglDepthRenderbuffer,yt,!0);et.bindFramebuffer(Y.FRAMEBUFFER,null)}}if(We){et.bindTexture(Y.TEXTURE_CUBE_MAP,Kt.__webglTexture),On(Y.TEXTURE_CUBE_MAP,gt);for(let zt=0;zt<6;zt++)if(gt.mipmaps.length>0)for(let Vt=0;Vt<gt.mipmaps.length;Vt++)kn(Nt.__webglFramebuffer[zt][Vt],yt,gt,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+zt,Vt);else kn(Nt.__webglFramebuffer[zt],yt,gt,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+zt,0);if(Tt(gt))Mt(Y.TEXTURE_CUBE_MAP);else if(gt.mipmaps.length>0)Y.texParameteri(Y.TEXTURE_CUBE_MAP,Y.TEXTURE_MAX_LEVEL,gt.mipmaps.length-1);et.unbindTexture()}else if(Ye){for(let zt=0,Vt=Zt.length;zt<Vt;zt++){let Xe=Zt[zt],At=nt.get(Xe),Wt=Y.TEXTURE_2D;if(yt.isWebGL3DRenderTarget||yt.isWebGLArrayRenderTarget)Wt=yt.isWebGL3DRenderTarget?Y.TEXTURE_3D:Y.TEXTURE_2D_ARRAY;if(et.bindTexture(Wt,At.__webglTexture),On(Wt,Xe),kn(Nt.__webglFramebuffer,yt,Xe,Y.COLOR_ATTACHMENT0+zt,Wt,0),Tt(Xe))Mt(Wt)}et.unbindTexture()}else{let zt=Y.TEXTURE_2D;if(yt.isWebGL3DRenderTarget||yt.isWebGLArrayRenderTarget)zt=yt.isWebGL3DRenderTarget?Y.TEXTURE_3D:Y.TEXTURE_2D_ARRAY;if(et.bindTexture(zt,Kt.__webglTexture),On(zt,gt),gt.mipmaps.length>0)for(let Vt=0;Vt<gt.mipmaps.length;Vt++)kn(Nt.__webglFramebuffer[Vt],yt,gt,Y.COLOR_ATTACHMENT0,zt,Vt);else kn(Nt.__webglFramebuffer,yt,gt,Y.COLOR_ATTACHMENT0,zt,0);if(Tt(gt))Mt(zt);else if(gt.mipmaps.length>0)Y.texParameteri(zt,Y.TEXTURE_MAX_LEVEL,gt.mipmaps.length-1);et.unbindTexture()}if(yt.depthBuffer)ci(yt)}function _i(yt){let gt=yt.textures;for(let Nt=0,Kt=gt.length;Nt<Kt;Nt++){let Zt=gt[Nt];if(Tt(Zt)&&Zt.mipmapsAutoUpdate===!0){let We=Et(yt),Ye=nt.get(Zt).__webglTexture;et.bindTexture(We,Ye),Mt(We),et.unbindTexture()}}}let Pn=[];function qn(yt){if(yt.samples>0){if(Un(yt)===!1){let{textures:gt,width:Nt,height:Kt}=yt,Zt=Y.COLOR_BUFFER_BIT,We=yt.stencilBuffer?Y.DEPTH_STENCIL_ATTACHMENT:Y.DEPTH_ATTACHMENT,Ye=nt.get(yt),zt=gt.length>1;if(zt)for(let Xe=0;Xe<gt.length;Xe++)et.bindFramebuffer(Y.FRAMEBUFFER,Ye.__webglMultisampledFramebuffer),Y.framebufferRenderbuffer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0+Xe,Y.RENDERBUFFER,null),et.bindFramebuffer(Y.FRAMEBUFFER,Ye.__webglFramebuffer),Y.framebufferTexture2D(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0+Xe,Y.TEXTURE_2D,null,0);if(et.bindFramebuffer(Y.READ_FRAMEBUFFER,Ye.__webglMultisampledFramebuffer),yt.texture.mipmaps.length>0)et.bindFramebuffer(Y.DRAW_FRAMEBUFFER,Ye.__webglFramebuffer[0]);else et.bindFramebuffer(Y.DRAW_FRAMEBUFFER,Ye.__webglFramebuffer);for(let Xe=0;Xe<gt.length;Xe++){if(yt.resolveDepthBuffer){if(yt.depthBuffer)Zt|=Y.DEPTH_BUFFER_BIT;if(yt.stencilBuffer&&yt.resolveStencilBuffer)Zt|=Y.STENCIL_BUFFER_BIT}if(zt){Y.framebufferRenderbuffer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.RENDERBUFFER,Ye.__webglColorRenderbuffer[Xe]);let At=nt.get(gt[Xe]).__webglTexture;Y.framebufferTexture2D(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,At,0)}if(Y.blitFramebuffer(0,0,Nt,Kt,0,0,Nt,Kt,Zt,Y.NEAREST),ot===!0){if(Pn.length=0,Pn.push(Y.COLOR_ATTACHMENT0+Xe),yt.depthBuffer&&yt.storeMultisampledDepthBuffer===!1)Pn.push(We);Y.invalidateFramebuffer(Y.READ_FRAMEBUFFER,Pn)}}if(et.bindFramebuffer(Y.READ_FRAMEBUFFER,null),et.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null),zt)for(let Xe=0;Xe<gt.length;Xe++){et.bindFramebuffer(Y.FRAMEBUFFER,Ye.__webglMultisampledFramebuffer),Y.framebufferRenderbuffer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0+Xe,Y.RENDERBUFFER,Ye.__webglColorRenderbuffer[Xe]);let At=nt.get(gt[Xe]).__webglTexture;et.bindFramebuffer(Y.FRAMEBUFFER,Ye.__webglFramebuffer),Y.framebufferTexture2D(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0+Xe,Y.TEXTURE_2D,At,0)}et.bindFramebuffer(Y.DRAW_FRAMEBUFFER,Ye.__webglMultisampledFramebuffer)}else if(yt.depthBuffer&&yt.storeMultisampledDepthBuffer===!1&&ot){let gt=yt.stencilBuffer?Y.DEPTH_STENCIL_ATTACHMENT:Y.DEPTH_ATTACHMENT;Y.invalidateFramebuffer(Y.DRAW_FRAMEBUFFER,[gt])}}}function $e(yt){return Math.min(it.maxSamples,yt.samples)}function Un(yt){let gt=nt.get(yt);return yt.samples>0&&tt.has("WEBGL_multisampled_render_to_texture")===!0&&gt.__useRenderToTexture!==!1}function mn(yt){let gt=rt.render.frame;if(ct.get(yt)!==gt)ct.set(yt,gt),yt.update()}function xn(yt,gt){let{colorSpace:Nt,format:Kt,type:Zt}=yt;if(yt.isCompressedTexture===!0||yt.isVideoTexture===!0)return gt;if(Nt!==R&&Nt!==ps)if(s.getTransfer(Nt)===a){if(Kt!==ki||Zt!==Mi)hn("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else gn("WebGLTextures: Unsupported texture color space:",Nt);return gt}function Qn(yt){if(typeof HTMLImageElement<"u"&&yt instanceof HTMLImageElement)lt.width=yt.naturalWidth||yt.width,lt.height=yt.naturalHeight||yt.height;else if(typeof VideoFrame<"u"&&yt instanceof VideoFrame)lt.width=yt.displayWidth,lt.height=yt.displayHeight;else lt.width=yt.width,lt.height=yt.height;return lt}this.allocateTextureUnit=qt,this.resetTextureUnits=Jt,this.getTextureUnits=Ge,this.setTextureUnits=on,this.setTexture2D=rn,this.setTexture2DArray=fn,this.setTexture3D=pn,this.setTextureCube=an,this.rebindTextures=gi,this.setupRenderTarget=It,this.updateRenderTargetMipmap=_i,this.updateMultisampleRenderTarget=qn,this.setupDepthRenderbuffer=ci,this.setupFrameBufferTexture=kn,this.useMultisampledRTT=Un,this.dispose=Xt}function Ig(Y,tt){function et(nt,it=ps){let st,rt=s.getTransfer(it);if(nt===Mi)return Y.UNSIGNED_BYTE;if(nt===Xa)return Y.UNSIGNED_SHORT_4_4_4_4;if(nt===qa)return Y.UNSIGNED_SHORT_5_5_5_1;if(nt===Uc)return Y.UNSIGNED_INT_5_9_9_9_REV;if(nt===Fc)return Y.UNSIGNED_INT_10F_11F_11F_REV;if(nt===Nc)return Y.BYTE;if(nt===Dc)return Y.SHORT;if(nt===nr)return Y.UNSIGNED_SHORT;if(nt===Va)return Y.INT;if(nt===$i)return Y.UNSIGNED_INT;if(nt===Gi)return Y.FLOAT;if(nt===b)return Y.HALF_FLOAT;if(nt===Oc)return Y.ALPHA;if(nt===Bc)return Y.RGB;if(nt===ki)return Y.RGBA;if(nt===Fs)return Y.DEPTH_COMPONENT;if(nt===Ki)return Y.DEPTH_STENCIL;if(nt===zc)return Y.RED;if(nt===Ya)return Y.RED_INTEGER;if(nt===fs)return Y.RG;if(nt===Za)return Y.RG_INTEGER;if(nt===Ja)return Y.RGBA_INTEGER;if(nt===Vr||nt===Xr||nt===qr||nt===Yr)if(rt===a)if(st=tt.get("WEBGL_compressed_texture_s3tc_srgb"),st!==null){if(nt===Vr)return st.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(nt===Xr)return st.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(nt===qr)return st.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(nt===Yr)return st.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(st=tt.get("WEBGL_compressed_texture_s3tc"),st!==null){if(nt===Vr)return st.COMPRESSED_RGB_S3TC_DXT1_EXT;if(nt===Xr)return st.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(nt===qr)return st.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(nt===Yr)return st.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(nt===$a||nt===Ka||nt===Qa||nt===ja)if(st=tt.get("WEBGL_compressed_texture_pvrtc"),st!==null){if(nt===$a)return st.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(nt===Ka)return st.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(nt===Qa)return st.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(nt===ja)return st.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(nt===to||nt===eo||nt===no||nt===io||nt===so||nt===Zr||nt===ro)if(st=tt.get("WEBGL_compressed_texture_etc"),st!==null){if(nt===to||nt===eo)return rt===a?st.COMPRESSED_SRGB8_ETC2:st.COMPRESSED_RGB8_ETC2;if(nt===no)return rt===a?st.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:st.COMPRESSED_RGBA8_ETC2_EAC;if(nt===io)return st.COMPRESSED_R11_EAC;if(nt===so)return st.COMPRESSED_SIGNED_R11_EAC;if(nt===Zr)return st.COMPRESSED_RG11_EAC;if(nt===ro)return st.COMPRESSED_SIGNED_RG11_EAC}else return null;if(nt===ao||nt===oo||nt===lo||nt===co||nt===ho||nt===uo||nt===fo||nt===po||nt===mo||nt===go||nt===_o||nt===xo||nt===vo||nt===yo)if(st=tt.get("WEBGL_compressed_texture_astc"),st!==null){if(nt===ao)return rt===a?st.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:st.COMPRESSED_RGBA_ASTC_4x4_KHR;if(nt===oo)return rt===a?st.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:st.COMPRESSED_RGBA_ASTC_5x4_KHR;if(nt===lo)return rt===a?st.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:st.COMPRESSED_RGBA_ASTC_5x5_KHR;if(nt===co)return rt===a?st.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:st.COMPRESSED_RGBA_ASTC_6x5_KHR;if(nt===ho)return rt===a?st.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:st.COMPRESSED_RGBA_ASTC_6x6_KHR;if(nt===uo)return rt===a?st.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:st.COMPRESSED_RGBA_ASTC_8x5_KHR;if(nt===fo)return rt===a?st.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:st.COMPRESSED_RGBA_ASTC_8x6_KHR;if(nt===po)return rt===a?st.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:st.COMPRESSED_RGBA_ASTC_8x8_KHR;if(nt===mo)return rt===a?st.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:st.COMPRESSED_RGBA_ASTC_10x5_KHR;if(nt===go)return rt===a?st.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:st.COMPRESSED_RGBA_ASTC_10x6_KHR;if(nt===_o)return rt===a?st.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:st.COMPRESSED_RGBA_ASTC_10x8_KHR;if(nt===xo)return rt===a?st.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:st.COMPRESSED_RGBA_ASTC_10x10_KHR;if(nt===vo)return rt===a?st.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:st.COMPRESSED_RGBA_ASTC_12x10_KHR;if(nt===yo)return rt===a?st.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:st.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(nt===So||nt===Mo||nt===bo)if(st=tt.get("EXT_texture_compression_bptc"),st!==null){if(nt===So)return rt===a?st.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:st.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(nt===Mo)return st.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(nt===bo)return st.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(nt===To||nt===Eo||nt===Jr||nt===Ao)if(st=tt.get("EXT_texture_compression_rgtc"),st!==null){if(nt===To)return st.COMPRESSED_RED_RGTC1_EXT;if(nt===Eo)return st.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(nt===Jr)return st.COMPRESSED_RED_GREEN_RGTC2_EXT;if(nt===Ao)return st.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(nt===ds)return Y.UNSIGNED_INT_24_8;return Y[nt]!==void 0?Y[nt]:null}return{convert:et}}var Pg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Lg=`
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

}`;class kh{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(Y,tt){if(this.texture===null){let et=new sa(Y.texture);if(Y.depthNear!==tt.depthNear||Y.depthFar!==tt.depthFar)this.depthNear=Y.depthNear,this.depthFar=Y.depthFar;this.texture=et}}getMesh(Y){if(this.texture!==null){if(this.mesh===null){let tt=Y.cameras[0].viewport,et=new S({vertexShader:Pg,fragmentShader:Lg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:tt.z},depthHeight:{value:tt.w}}});this.mesh=new o(new K(20,20),et)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Hh extends Hi{constructor(Y,tt){super();let et=this,nt=null,it=1,st=null,rt="local-floor",at=1,ot=null,lt=null,ct=null,ut=null,ht=null,ft=null,xt=typeof XRWebGLBinding<"u",St=new kh,dt={},pt=tt.getContextAttributes(),bt=null,Tt=null,Mt=[],Et=[],Ct=new n,mt=null,vt=null,Lt=new c;Lt.viewport=new Nn;let Gt=new c;Gt.viewport=new Nn;let Pt=[Lt,Gt],Bt=new Ko,$t=null,wt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(qt){let jt=Mt[qt];if(jt===void 0)jt=new sr,Mt[qt]=jt;return jt.getTargetRaySpace()},this.getControllerGrip=function(qt){let jt=Mt[qt];if(jt===void 0)jt=new sr,Mt[qt]=jt;return jt.getGripSpace()},this.getHand=function(qt){let jt=Mt[qt];if(jt===void 0)jt=new sr,Mt[qt]=jt;return jt.getHandSpace()};function Xt(qt){let jt=Et.indexOf(qt.inputSource);if(jt===-1)return;let rn=Mt[jt];if(rn!==void 0)rn.update(qt.inputSource,qt.frame,ot||st),rn.dispatchEvent({type:qt.type,data:qt.inputSource})}function Yt(){nt.removeEventListener("select",Xt),nt.removeEventListener("selectstart",Xt),nt.removeEventListener("selectend",Xt),nt.removeEventListener("squeeze",Xt),nt.removeEventListener("squeezestart",Xt),nt.removeEventListener("squeezeend",Xt),nt.removeEventListener("end",Yt),nt.removeEventListener("inputsourceschange",Ft);for(let qt=0;qt<Mt.length;qt++){let jt=Et[qt];if(jt===null)continue;Et[qt]=null,Mt[qt].disconnect(jt)}$t=null,wt=null,St.reset();for(let qt in dt)delete dt[qt];if(Y.setRenderTarget(bt),ht=null,ut=null,ct=null,nt=null,Tt=null,on.stop(),et.isPresenting=!1,Y.setPixelRatio(mt),Y.setSize(Ct.width,Ct.height,!1),vt!==null){let qt=vt.camera;qt.fov=vt.fov,qt.zoom=vt.zoom,qt.updateProjectionMatrix(),vt=null}et.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(qt){if(it=qt,et.isPresenting===!0)hn("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(qt){if(rt=qt,et.isPresenting===!0)hn("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return ot||st},this.setReferenceSpace=function(qt){ot=qt},this.getBaseLayer=function(){return ut!==null?ut:ht},this.getBinding=function(){if(ct===null&&xt)ct=new XRWebGLBinding(nt,tt);return ct},this.getFrame=function(){return ft},this.getSession=function(){return nt},this.setSession=async function(qt){if(nt=qt,nt!==null){if(bt=Y.getRenderTarget(),nt.addEventListener("select",Xt),nt.addEventListener("selectstart",Xt),nt.addEventListener("selectend",Xt),nt.addEventListener("squeeze",Xt),nt.addEventListener("squeezestart",Xt),nt.addEventListener("squeezeend",Xt),nt.addEventListener("end",Yt),nt.addEventListener("inputsourceschange",Ft),pt.xrCompatible!==!0)await tt.makeXRCompatible();if(mt=Y.getPixelRatio(),Y.getSize(Ct),!(xt&&("createProjectionLayer"in XRWebGLBinding.prototype))){let rn={antialias:pt.antialias,alpha:!0,depth:pt.depth,stencil:pt.stencil,framebufferScaleFactor:it};ht=new XRWebGLLayer(nt,tt,rn),nt.updateRenderState({baseLayer:ht}),Y.setPixelRatio(1),Y.setSize(ht.framebufferWidth,ht.framebufferHeight,!1),Tt=new _(ht.framebufferWidth,ht.framebufferHeight,{format:ki,type:Mi,colorSpace:Y.outputColorSpace,stencilBuffer:pt.stencil,resolveDepthBuffer:ht.ignoreDepthValues===!1,resolveStencilBuffer:ht.ignoreDepthValues===!1,storeMultisampledDepthBuffer:ht.ignoreDepthValues===!1,storeMultisampledStencilBuffer:ht.ignoreDepthValues===!1})}else{let rn=null,fn=null,pn=null;if(pt.depth)pn=pt.stencil?tt.DEPTH24_STENCIL8:tt.DEPTH_COMPONENT24,rn=pt.stencil?Ki:Fs,fn=pt.stencil?ds:$i;let an={colorFormat:tt.RGBA8,depthFormat:pn,scaleFactor:it};ct=this.getBinding(),ut=ct.createProjectionLayer(an),nt.updateRenderState({layers:[ut]}),Y.setPixelRatio(1),Y.setSize(ut.textureWidth,ut.textureHeight,!1),Tt=new _(ut.textureWidth,ut.textureHeight,{format:ki,type:Mi,depthTexture:new Qi(ut.textureWidth,ut.textureHeight,fn,void 0,void 0,void 0,void 0,void 0,void 0,rn),stencilBuffer:pt.stencil,colorSpace:Y.outputColorSpace,samples:pt.antialias?4:0,resolveDepthBuffer:ut.ignoreDepthValues===!1,resolveStencilBuffer:ut.ignoreDepthValues===!1,storeMultisampledDepthBuffer:ut.ignoreDepthValues===!1,storeMultisampledStencilBuffer:ut.ignoreDepthValues===!1})}Tt.isXRRenderTarget=!0,this.setFoveation(at),ot=null,st=await nt.requestReferenceSpace(rt),on.setContext(nt),on.start(),et.isPresenting=!0,et.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(nt!==null)return nt.environmentBlendMode},this.getDepthTexture=function(){return St.getDepthTexture()};function Ft(qt){for(let jt=0;jt<qt.removed.length;jt++){let rn=qt.removed[jt],fn=Et.indexOf(rn);if(fn>=0)Et[fn]=null,Mt[fn].disconnect(rn)}for(let jt=0;jt<qt.added.length;jt++){let rn=qt.added[jt],fn=Et.indexOf(rn);if(fn===-1){for(let an=0;an<Mt.length;an++)if(an>=Et.length){Et.push(rn),fn=an;break}else if(Et[an]===null){Et[an]=rn,fn=an;break}if(fn===-1)break}let pn=Mt[fn];if(pn)pn.connect(rn)}}function Ve(qt,jt){if(jt===null)qt.matrixWorld.copy(qt.matrix);else qt.matrixWorld.multiplyMatrices(jt.matrixWorld,qt.matrix);qt.matrixWorldInverse.copy(qt.matrixWorld).invert()}this.updateCamera=function(qt){if(nt===null)return;let{near:jt,far:rn}=qt;if(St.texture!==null){if(St.depthNear>0)jt=St.depthNear;if(St.depthFar>0)rn=St.depthFar}if(Bt.near=Gt.near=Lt.near=jt,Bt.far=Gt.far=Lt.far=rn,$t!==Bt.near||wt!==Bt.far)nt.updateRenderState({depthNear:Bt.near,depthFar:Bt.far}),$t=Bt.near,wt=Bt.far;Bt.layers.mask=qt.layers.mask|6,Lt.layers.mask=Bt.layers.mask&-5,Gt.layers.mask=Bt.layers.mask&-3;let fn=qt.parent,pn=Bt.cameras;Ve(Bt,fn);for(let an=0;an<pn.length;an++)Ve(pn[an],fn);if(Bt.projectionMatrix.copy(Lt.projectionMatrix),Bt.projectionMatrixInverse.copy(Lt.projectionMatrixInverse),vt===null&&qt.isPerspectiveCamera)vt={camera:qt,fov:qt.fov,zoom:qt.zoom};Ht(qt,Bt,fn)};function Ht(qt,jt,rn){if(rn===null)qt.matrix.copy(jt.matrixWorld);else qt.matrix.copy(rn.matrixWorld),qt.matrix.invert(),qt.matrix.multiply(jt.matrixWorld);if(qt.matrix.decompose(qt.position,qt.quaternion,qt.scale),qt.updateMatrixWorld(!0),qt.projectionMatrix.copy(jt.projectionMatrix),qt.projectionMatrixInverse.copy(jt.projectionMatrixInverse),qt.isPerspectiveCamera)qt.fov=hs*2*Math.atan(1/qt.projectionMatrix.elements[5]),qt.zoom=1}this.getCamera=function(){return Bt},this.getFoveation=function(){if(ut===null&&ht===null)return;return at},this.setFoveation=function(qt){if(at=qt,ut!==null)ut.fixedFoveation=qt;if(ht!==null&&ht.fixedFoveation!==void 0)ht.fixedFoveation=qt},this.hasDepthSensing=function(){return St.texture!==null},this.getDepthSensingMesh=function(){return St.getMesh(Bt)},this.getCameraTexture=function(qt){return dt[qt]};let Jt=null;function Ge(qt,jt){if(lt=jt.getViewerPose(ot||st),ft=jt,lt!==null){let rn=lt.views;if(ht!==null)Y.setRenderTargetFramebuffer(Tt,ht.framebuffer),Y.setRenderTarget(Tt);let fn=!1;if(rn.length!==Bt.cameras.length)Bt.cameras.length=0,fn=!0;for(let bn=0;bn<rn.length;bn++){let yn=rn[bn],On=null;if(ht!==null)On=ht.getViewport(yn);else{let zn=ct.getViewSubImage(ut,yn);if(On=zn.viewport,bn===0)Y.setRenderTargetTextures(Tt,zn.colorTexture,zn.depthStencilTexture),Y.setRenderTarget(Tt)}let wn=Pt[bn];if(wn===void 0)wn=new c,wn.layers.enable(bn),wn.viewport=new Nn,Pt[bn]=wn;if(wn.matrix.fromArray(yn.transform.matrix),wn.matrix.decompose(wn.position,wn.quaternion,wn.scale),wn.projectionMatrix.fromArray(yn.projectionMatrix),wn.projectionMatrixInverse.copy(wn.projectionMatrix).invert(),wn.viewport.set(On.x,On.y,On.width,On.height),bn===0)Bt.matrix.copy(wn.matrix),Bt.matrix.decompose(Bt.position,Bt.quaternion,Bt.scale);if(fn===!0)Bt.cameras.push(wn)}let pn=nt.enabledFeatures;if(pn&&pn.includes("depth-sensing")&&nt.depthUsage=="gpu-optimized"&&xt){ct=et.getBinding();let bn=ct.getDepthInformation(rn[0]);if(bn&&bn.isValid&&bn.texture)St.init(bn,nt.renderState)}if(pn&&pn.includes("camera-access")&&xt){Y.state.unbindTexture(),ct=et.getBinding();for(let bn=0;bn<rn.length;bn++){let yn=rn[bn].camera;if(yn){let On=dt[yn];if(!On)On=new sa,dt[yn]=On;let wn=ct.getCameraImage(yn);On.sourceTexture=wn}}}}for(let rn=0;rn<Mt.length;rn++){let fn=Et[rn],pn=Mt[rn];if(fn!==null&&pn!==void 0)pn.update(fn,jt,ot||st)}if(Jt)Jt(qt,jt);if(jt.detectedPlanes)et.dispatchEvent({type:"planesdetected",data:jt});ft=null}let on=new Ah;on.setAnimationLoop(Ge),this.setAnimationLoop=function(qt){Jt=qt},this.dispose=function(){}}}var Ng=new i,Wh=new _n;Wh.set(-1,0,0,0,1,0,0,0,1);function Dg(Y,tt){function et(dt,pt){if(dt.matrixAutoUpdate===!0)dt.updateMatrix();pt.value.copy(dt.matrix)}function nt(dt,pt){if(pt.color.getRGB(dt.fogColor.value,ko(Y)),pt.isFog)dt.fogNear.value=pt.near,dt.fogFar.value=pt.far;else if(pt.isFogExp2)dt.fogDensity.value=pt.density}function it(dt,pt,bt,Tt,Mt){if(pt.isNodeMaterial)pt.uniformsNeedUpdate=!1;else if(pt.isMeshBasicMaterial)st(dt,pt);else if(pt.isMeshLambertMaterial){if(st(dt,pt),pt.envMap)dt.envMapIntensity.value=pt.envMapIntensity}else if(pt.isMeshToonMaterial)st(dt,pt),ut(dt,pt);else if(pt.isMeshPhongMaterial){if(st(dt,pt),ct(dt,pt),pt.envMap)dt.envMapIntensity.value=pt.envMapIntensity}else if(pt.isMeshStandardMaterial){if(st(dt,pt),ht(dt,pt),pt.isMeshPhysicalMaterial)ft(dt,pt,Mt)}else if(pt.isMeshMatcapMaterial)st(dt,pt),xt(dt,pt);else if(pt.isMeshDepthMaterial)st(dt,pt);else if(pt.isMeshDistanceMaterial)st(dt,pt),St(dt,pt);else if(pt.isMeshNormalMaterial)st(dt,pt);else if(pt.isLineBasicMaterial){if(rt(dt,pt),pt.isLineDashedMaterial)at(dt,pt)}else if(pt.isPointsMaterial)ot(dt,pt,bt,Tt);else if(pt.isSpriteMaterial)lt(dt,pt);else if(pt.isShadowMaterial)dt.color.value.copy(pt.color),dt.opacity.value=pt.opacity;else if(pt.isShaderMaterial)pt.uniformsNeedUpdate=!1}function st(dt,pt){if(dt.opacity.value=pt.opacity,pt.color)dt.diffuse.value.copy(pt.color);if(pt.emissive)dt.emissive.value.copy(pt.emissive).multiplyScalar(pt.emissiveIntensity);if(pt.map)dt.map.value=pt.map,et(pt.map,dt.mapTransform);if(pt.alphaMap)dt.alphaMap.value=pt.alphaMap,et(pt.alphaMap,dt.alphaMapTransform);if(pt.bumpMap){if(dt.bumpMap.value=pt.bumpMap,et(pt.bumpMap,dt.bumpMapTransform),dt.bumpScale.value=pt.bumpScale,pt.side===ii)dt.bumpScale.value*=-1}if(pt.normalMap){if(dt.normalMap.value=pt.normalMap,et(pt.normalMap,dt.normalMapTransform),dt.normalScale.value.copy(pt.normalScale),pt.side===ii)dt.normalScale.value.negate()}if(pt.displacementMap)dt.displacementMap.value=pt.displacementMap,et(pt.displacementMap,dt.displacementMapTransform),dt.displacementScale.value=pt.displacementScale,dt.displacementBias.value=pt.displacementBias;if(pt.emissiveMap)dt.emissiveMap.value=pt.emissiveMap,et(pt.emissiveMap,dt.emissiveMapTransform);if(pt.specularMap)dt.specularMap.value=pt.specularMap,et(pt.specularMap,dt.specularMapTransform);if(pt.alphaTest>0)dt.alphaTest.value=pt.alphaTest;let bt=tt.get(pt),{envMap:Tt,envMapRotation:Mt}=bt;if(Tt){if(dt.envMap.value=Tt,dt.envMapRotation.value.setFromMatrix4(Ng.makeRotationFromEuler(Mt)).transpose(),Tt.isCubeTexture&&Tt.isRenderTargetTexture===!1)dt.envMapRotation.value.premultiply(Wh);dt.reflectivity.value=pt.reflectivity,dt.ior.value=pt.ior,dt.refractionRatio.value=pt.refractionRatio}if(pt.lightMap)dt.lightMap.value=pt.lightMap,dt.lightMapIntensity.value=pt.lightMapIntensity,et(pt.lightMap,dt.lightMapTransform);if(pt.aoMap)dt.aoMap.value=pt.aoMap,dt.aoMapIntensity.value=pt.aoMapIntensity,et(pt.aoMap,dt.aoMapTransform)}function rt(dt,pt){if(dt.diffuse.value.copy(pt.color),dt.opacity.value=pt.opacity,pt.map)dt.map.value=pt.map,et(pt.map,dt.mapTransform)}function at(dt,pt){dt.dashSize.value=pt.dashSize,dt.totalSize.value=pt.dashSize+pt.gapSize,dt.scale.value=pt.scale}function ot(dt,pt,bt,Tt){if(dt.diffuse.value.copy(pt.color),dt.opacity.value=pt.opacity,dt.size.value=pt.size*bt,dt.scale.value=Tt*0.5,pt.map)dt.map.value=pt.map,et(pt.map,dt.uvTransform);if(pt.alphaMap)dt.alphaMap.value=pt.alphaMap,et(pt.alphaMap,dt.alphaMapTransform);if(pt.alphaTest>0)dt.alphaTest.value=pt.alphaTest}function lt(dt,pt){if(dt.diffuse.value.copy(pt.color),dt.opacity.value=pt.opacity,dt.rotation.value=pt.rotation,pt.map)dt.map.value=pt.map,et(pt.map,dt.mapTransform);if(pt.alphaMap)dt.alphaMap.value=pt.alphaMap,et(pt.alphaMap,dt.alphaMapTransform);if(pt.alphaTest>0)dt.alphaTest.value=pt.alphaTest}function ct(dt,pt){dt.specular.value.copy(pt.specular),dt.shininess.value=Math.max(pt.shininess,0.0001)}function ut(dt,pt){if(pt.gradientMap)dt.gradientMap.value=pt.gradientMap}function ht(dt,pt){if(dt.metalness.value=pt.metalness,pt.metalnessMap)dt.metalnessMap.value=pt.metalnessMap,et(pt.metalnessMap,dt.metalnessMapTransform);if(dt.roughness.value=pt.roughness,pt.roughnessMap)dt.roughnessMap.value=pt.roughnessMap,et(pt.roughnessMap,dt.roughnessMapTransform);if(pt.envMap)dt.envMapIntensity.value=pt.envMapIntensity}function ft(dt,pt,bt){if(dt.ior.value=pt.ior,pt.diffuseRoughness>0){if(dt.diffuseRoughness.value=pt.diffuseRoughness,pt.diffuseRoughnessMap)dt.diffuseRoughnessMap.value=pt.diffuseRoughnessMap,et(pt.diffuseRoughnessMap,dt.diffuseRoughnessMapTransform)}if(pt.sheen>0){if(dt.sheenColor.value.copy(pt.sheenColor).multiplyScalar(pt.sheen),dt.sheenRoughness.value=pt.sheenRoughness,pt.sheenColorMap)dt.sheenColorMap.value=pt.sheenColorMap,et(pt.sheenColorMap,dt.sheenColorMapTransform);if(pt.sheenRoughnessMap)dt.sheenRoughnessMap.value=pt.sheenRoughnessMap,et(pt.sheenRoughnessMap,dt.sheenRoughnessMapTransform)}if(pt.clearcoat>0){if(dt.clearcoat.value=pt.clearcoat,dt.clearcoatRoughness.value=pt.clearcoatRoughness,pt.clearcoatMap)dt.clearcoatMap.value=pt.clearcoatMap,et(pt.clearcoatMap,dt.clearcoatMapTransform);if(pt.clearcoatRoughnessMap)dt.clearcoatRoughnessMap.value=pt.clearcoatRoughnessMap,et(pt.clearcoatRoughnessMap,dt.clearcoatRoughnessMapTransform);if(pt.clearcoatNormalMap){if(dt.clearcoatNormalMap.value=pt.clearcoatNormalMap,et(pt.clearcoatNormalMap,dt.clearcoatNormalMapTransform),dt.clearcoatNormalScale.value.copy(pt.clearcoatNormalScale),pt.side===ii)dt.clearcoatNormalScale.value.negate()}}if(pt.dispersion>0)dt.dispersion.value=pt.dispersion;if(pt.retroreflectivity>0)dt.retroreflectivity.value=pt.retroreflectivity;if(pt.iridescence>0){if(dt.iridescence.value=pt.iridescence,dt.iridescenceIOR.value=pt.iridescenceIOR,dt.iridescenceThicknessMinimum.value=pt.iridescenceThicknessMinimum,dt.iridescenceThicknessMaximum.value=pt.iridescenceThicknessMaximum,pt.iridescenceMap)dt.iridescenceMap.value=pt.iridescenceMap,et(pt.iridescenceMap,dt.iridescenceMapTransform);if(pt.iridescenceThicknessMap)dt.iridescenceThicknessMap.value=pt.iridescenceThicknessMap,et(pt.iridescenceThicknessMap,dt.iridescenceThicknessMapTransform)}if(pt.transmission>0){if(dt.transmission.value=pt.transmission,dt.transmissionSamplerMap.value=bt.texture,dt.transmissionSamplerSize.value.set(bt.width,bt.height),pt.transmissionMap)dt.transmissionMap.value=pt.transmissionMap,et(pt.transmissionMap,dt.transmissionMapTransform);if(dt.thickness.value=pt.thickness,pt.thicknessMap)dt.thicknessMap.value=pt.thicknessMap,et(pt.thicknessMap,dt.thicknessMapTransform);dt.attenuationDistance.value=pt.attenuationDistance,dt.attenuationColor.value.copy(pt.attenuationColor)}if(pt.anisotropy>0){if(dt.anisotropyVector.value.set(pt.anisotropy*Math.cos(pt.anisotropyRotation),pt.anisotropy*Math.sin(pt.anisotropyRotation)),pt.anisotropyMap)dt.anisotropyMap.value=pt.anisotropyMap,et(pt.anisotropyMap,dt.anisotropyMapTransform)}if(dt.specularIntensity.value=pt.specularIntensity,dt.specularColor.value.copy(pt.specularColor),pt.specularColorMap)dt.specularColorMap.value=pt.specularColorMap,et(pt.specularColorMap,dt.specularColorMapTransform);if(pt.specularIntensityMap)dt.specularIntensityMap.value=pt.specularIntensityMap,et(pt.specularIntensityMap,dt.specularIntensityMapTransform)}function xt(dt,pt){if(pt.matcap)dt.matcap.value=pt.matcap}function St(dt,pt){let bt=tt.get(pt).light;dt.referencePosition.value.setFromMatrixPosition(bt.matrixWorld),dt.nearDistance.value=bt.shadow.camera.near,dt.farDistance.value=bt.shadow.camera.far}return{refreshFogUniforms:nt,refreshMaterialUniforms:it}}function Ug(Y,tt,et,nt){let it={},st={};function rt(bt,Tt){let Mt=Tt.program;nt.uniformBlockBinding(bt,Mt,it[bt.id])}function at(bt,Tt){let Mt=it[bt.id];if(Mt===void 0)xt(bt),Mt=ot(bt),it[bt.id]=Mt,bt.addEventListener("dispose",dt);let Et=Tt.program;nt.updateUBOMapping(bt,Et);let Ct=tt.render.frame;if(st[bt.id]!==Ct)lt(bt),st[bt.id]=Ct}function ot(bt){let Tt=Y.createBuffer(),{__size:Mt,usage:Et}=bt;return Y.bindBuffer(Y.UNIFORM_BUFFER,Tt),Y.bufferData(Y.UNIFORM_BUFFER,Mt,Et),Y.bindBuffer(Y.UNIFORM_BUFFER,null),Tt}function lt(bt){let Tt=it[bt.id],{uniforms:Mt,__cache:Et}=bt;Y.bindBuffer(Y.UNIFORM_BUFFER,Tt);for(let Ct=0,mt=Mt.length;Ct<mt;Ct++){let vt=Mt[Ct];if(Array.isArray(vt))for(let Lt=0,Gt=vt.length;Lt<Gt;Lt++)ct(vt[Lt],Ct,Lt,Et);else ct(vt,Ct,0,Et)}Y.bindBuffer(Y.UNIFORM_BUFFER,null)}function ct(bt,Tt,Mt,Et){if(ht(bt,Tt,Mt,Et)===!0){let{__offset:Ct,value:mt}=bt;if(Array.isArray(mt)){let vt=0;for(let Lt=0;Lt<mt.length;Lt++){let Gt=mt[Lt],Pt=St(Gt,!0);ut(Gt,bt.__data,vt),vt+=Pt.storage/Float32Array.BYTES_PER_ELEMENT}}else ut(mt,bt.__data,0);Y.bufferSubData(Y.UNIFORM_BUFFER,Ct,bt.__data)}}function ut(bt,Tt,Mt){if(typeof bt==="number"||typeof bt==="boolean")Tt[Mt]=bt;else if(bt.isMatrix3)Tt[Mt]=bt.elements[0],Tt[Mt+1]=bt.elements[1],Tt[Mt+2]=bt.elements[2],Tt[Mt+3]=0,Tt[Mt+4]=bt.elements[3],Tt[Mt+5]=bt.elements[4],Tt[Mt+6]=bt.elements[5],Tt[Mt+7]=0,Tt[Mt+8]=bt.elements[6],Tt[Mt+9]=bt.elements[7],Tt[Mt+10]=bt.elements[8],Tt[Mt+11]=0;else if(ArrayBuffer.isView(bt))Tt.set(bt.subarray(0,Tt.length-Mt),Mt);else bt.toArray(Tt,Mt)}function ht(bt,Tt,Mt,Et){let Ct=bt.value,mt=Tt+"_"+Mt;if(Array.isArray(Ct)){if(Et[mt]===void 0)Et[mt]=[];let vt=Et[mt],Lt=!1;for(let Gt=0;Gt<Ct.length;Gt++)if(ft(Ct[Gt],vt,Gt)===!0)Lt=!0;return Lt}return ft(Ct,Et,mt)}function ft(bt,Tt,Mt){if(Tt[Mt]===void 0){if(typeof bt==="number"||typeof bt==="boolean")Tt[Mt]=bt;else if(ArrayBuffer.isView(bt))Tt[Mt]=bt.slice();else Tt[Mt]=bt.clone();return!0}else{let Et=Tt[Mt];if(typeof bt==="number"||typeof bt==="boolean"){if(Et!==bt)return Tt[Mt]=bt,!0}else if(ArrayBuffer.isView(bt))return!0;else if(Et.equals(bt)===!1)return Et.copy(bt),!0}return!1}function xt(bt){let Tt=bt.uniforms,Mt=0,Et=16;for(let mt=0,vt=Tt.length;mt<vt;mt++){let Lt=Array.isArray(Tt[mt])?Tt[mt]:[Tt[mt]];for(let Gt=0,Pt=Lt.length;Gt<Pt;Gt++){let Bt=Lt[Gt],$t=Array.isArray(Bt.value)?Bt.value:[Bt.value],wt=Array.isArray(Tt[mt])||Array.isArray(Bt.value),Xt=Mt;for(let Ft=0,Ve=$t.length;Ft<Ve;Ft++){let Ht=$t[Ft],Jt=St(Ht,wt),Ge=Mt%Et,on=Ge%Jt.boundary,qt=Ge+on;if(Mt+=on,qt!==0&&Et-qt<Jt.storage)Mt+=Et-qt;if(Ft===0)Xt=Mt;Mt+=Jt.storage}let Yt=Bt.type==="int"?Int32Array:Bt.type==="uint"?Uint32Array:Float32Array;Bt.__data=new Yt((Mt-Xt)/Float32Array.BYTES_PER_ELEMENT),Bt.__offset=Xt}}let Ct=Mt%Et;if(Ct>0)Mt+=Et-Ct;return bt.__size=Mt,bt.__cache={},this}function St(bt,Tt){let Mt={boundary:0,storage:0};if(typeof bt==="number"||typeof bt==="boolean")Mt.boundary=4,Mt.storage=4;else if(bt.isVector2)Mt.boundary=8,Mt.storage=8;else if(bt.isVector3||bt.isColor)Mt.boundary=16,Mt.storage=12;else if(bt.isVector4)Mt.boundary=16,Mt.storage=16;else if(bt.isMatrix3)Mt.boundary=16,Mt.storage=48;else if(bt.isMatrix4)Mt.boundary=16,Mt.storage=64;else if(bt.isTexture)hn("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(bt))Mt.boundary=16,Mt.storage=bt.byteLength;else hn("WebGLRenderer: Unsupported uniform value type.",bt);if(Tt===!0)Mt.boundary=16,Mt.storage=Math.ceil(Mt.storage/16)*16;return Mt}function dt(bt){let Tt=bt.target;Tt.removeEventListener("dispose",dt),Y.deleteBuffer(it[Tt.id]),delete it[Tt.id],delete st[Tt.id]}function pt(){for(let bt in it)Y.deleteBuffer(it[bt]);it={},st={}}return{bind:rt,update:at,dispose:pt}}var Fg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ci=null;function Og(){if(Ci===null)Ci=new rr(Fg,16,16,fs,b),Ci.name="DFG_LUT",Ci.minFilter=M,Ci.magFilter=M,Ci.wrapS=ee,Ci.wrapT=ee,Ci.generateMipmaps=!1,Ci.needsUpdate=!0;return Ci}class oe{constructor(Y={}){let{canvas:tt=qc(),context:et=null,depth:nt=!0,stencil:it=!1,alpha:st=!1,antialias:rt=!1,premultipliedAlpha:at=!0,preserveDrawingBuffer:ot=!1,powerPreference:lt="default",failIfMajorPerformanceCaveat:ct=!1,reversedDepthBuffer:ut=!1,outputBufferType:ht=Mi}=Y;this.isWebGLRenderer=!0;let ft;if(et!==null){if(typeof WebGLRenderingContext<"u"&&et instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");ft=et.getContextAttributes().alpha}else ft=st;let xt=ht,St=new Set([Ja,Za,Ya]),dt=new Set([Mi,$i,nr,ds,Xa,qa]),pt=new Uint32Array(4),bt=new Int32Array(4),Tt={textures:[],min:[],max:[],resolution:[]},Mt=null,Et=null,Ct=[],mt=[],vt=null;this.domElement=tt,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let Lt=this,Gt=!1,Pt=null,Bt=null,$t=null,wt=null;this._outputColorSpace=m;let Xt=0,Yt=0,Ft=null,Ve=-1,Ht=null,Jt=new Nn,Ge=new Nn,on=null,qt=new t(0),jt=0,{width:rn,height:fn}=tt,pn=1,an=null,In=null,bn=new Nn(0,0,rn,fn),yn=new Nn(0,0,rn,fn),On=!1,wn=new us,zn=new ea,Gn=!1,oi=!1,hi=new i,kn=new e,Kn=new Nn,li={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ci=!1;function gi(){return Ft===null?pn:1}let It=et;function _i(_t,Rt){return tt.getContext(_t,Rt)}let Pn,qn,$e,Un,mn,xn,Qn,yt,gt,Nt,Kt,Zt,We,Ye,zt,Vt,Xe,At,Wt,kt,Qt,He,Je;try{let _t={alpha:!0,depth:nt,stencil:it,antialias:rt,premultipliedAlpha:at,preserveDrawingBuffer:ot,powerPreference:lt,failIfMajorPerformanceCaveat:ct};if("setAttribute"in tt)tt.setAttribute("data-engine",`three.js r${tc}`);if(tt.addEventListener("webglcontextlost",Qe,!1),tt.addEventListener("webglcontextrestored",dn,!1),tt.addEventListener("webglcontextcreationerror",Sn,!1),It===null){if(It=_i("webgl2",_t),It===null)if(_i("webgl2"))throw Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw Error("THREE.WebGLRenderer: Error creating WebGL context.")}un()}catch(_t){throw tt.removeEventListener("webglcontextlost",Qe,!1),tt.removeEventListener("webglcontextrestored",dn,!1),tt.removeEventListener("webglcontextcreationerror",Sn,!1),gn("WebGLRenderer: "+_t.message),_t}function un(){if(Pn=new Zp(It),Pn.init(),Qt=new Ig(It,Pn),qn=new Op(It,Pn,Y,Qt),$e=new Rg(It,Pn),qn.reversedDepthBuffer&&ut)$e.buffers.depth.setReversed(!0);Bt=It.createFramebuffer(),$t=It.createFramebuffer(),wt=It.createFramebuffer(),Un=new Kp(It),mn=new pg,xn=new Cg(It,Pn,$e,mn,qn,Qt,Un),Qn=new Yp(Lt),yt=new Qu(It),He=new Up(It,yt),gt=new Jp(It,yt,Un,He),Nt=new jp(It,gt,yt,He,Un),At=new Qp(It,qn,xn),zt=new Bp(mn),Kt=new fg(Lt,Qn,Pn,qn,He,zt),Zt=new Dg(Lt,mn),We=new gg,Ye=new Mg(Pn),Xe=new Dp(Lt,Qn,$e,Nt,ft,at),Vt=new wg(Lt,Nt,qn),Je=new Ug(It,Un,qn,$e),Wt=new Fp(It,Pn,Un),kt=new $p(It,Pn,Un),Un.programs=Kt.programs,Lt.capabilities=qn,Lt.extensions=Pn,Lt.properties=mn,Lt.renderLists=We,Lt.shadowMap=Vt,Lt.state=$e,Lt.info=Un}if(xt!==Mi)vt=new em(xt,tt.width,tt.height,rt,nt,it);let cn=new Hh(Lt,It);this.xr=cn,this.getContext=function(){return It},this.getContextAttributes=function(){return It.getContextAttributes()},this.forceContextLoss=function(){let _t=Pn.get("WEBGL_lose_context");if(_t)_t.loseContext()},this.forceContextRestore=function(){let _t=Pn.get("WEBGL_lose_context");if(_t)_t.restoreContext()},this.getPixelRatio=function(){return pn},this.setPixelRatio=function(_t){if(_t===void 0)return;pn=_t,this.setSize(rn,fn,!1)},this.getSize=function(_t){return _t.set(rn,fn)},this.setSize=function(_t,Rt,Ot=!0){if(cn.isPresenting){hn("WebGLRenderer: Can't change size while VR device is presenting.");return}if(rn=_t,fn=Rt,tt.width=Math.floor(_t*pn),tt.height=Math.floor(Rt*pn),Ot===!0)tt.style.width=_t+"px",tt.style.height=Rt+"px";if(vt!==null)vt.setSize(tt.width,tt.height);this.setViewport(0,0,_t,Rt)},this.getDrawingBufferSize=function(_t){return _t.set(rn*pn,fn*pn).floor()},this.setDrawingBufferSize=function(_t,Rt,Ot){rn=_t,fn=Rt,pn=Ot,tt.width=Math.floor(_t*Ot),tt.height=Math.floor(Rt*Ot),this.setViewport(0,0,_t,Rt)},this.setEffects=function(_t){if(xt===Mi){gn("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(_t){for(let Rt=0;Rt<_t.length;Rt++)if(_t[Rt].isOutputPass===!0){hn("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}vt.setEffects(_t||[])},this.getCurrentViewport=function(_t){return _t.copy(Jt)},this.getViewport=function(_t){return _t.copy(bn)},this.setViewport=function(_t,Rt,Ot,Dt){if(_t.isVector4)bn.set(_t.x,_t.y,_t.z,_t.w);else bn.set(_t,Rt,Ot,Dt);$e.viewport(Jt.copy(bn).multiplyScalar(gi()).round())},this.getScissor=function(_t){return _t.copy(yn)},this.setScissor=function(_t,Rt,Ot,Dt){if(_t.isVector4)yn.set(_t.x,_t.y,_t.z,_t.w);else yn.set(_t,Rt,Ot,Dt);$e.scissor(Ge.copy(yn).multiplyScalar(gi()).round())},this.getScissorTest=function(){return On},this.setScissorTest=function(_t){$e.setScissorTest(On=_t)},this.setOpaqueSort=function(_t){an=_t},this.setTransparentSort=function(_t){In=_t},this.getClearColor=function(_t){return _t.copy(Xe.getClearColor())},this.setClearColor=function(){Xe.setClearColor(...arguments)},this.getClearAlpha=function(){return Xe.getClearAlpha()},this.setClearAlpha=function(){Xe.setClearAlpha(...arguments)},this.clear=function(_t=!0,Rt=!0,Ot=!0){let Dt=0;if(_t){let Ut=!1;if(Ft!==null){let Ze=Ft.texture.format;Ut=St.has(Ze)}if(Ut){let Ze=Ft.texture.type,en=dt.has(Ze),qe=Xe.getClearColor(),tn=Xe.getClearAlpha(),{r:ln,g:vn,b:En}=qe;if(en)pt[0]=ln,pt[1]=vn,pt[2]=En,pt[3]=tn,It.clearBufferuiv(It.COLOR,0,pt);else bt[0]=ln,bt[1]=vn,bt[2]=En,bt[3]=tn,It.clearBufferiv(It.COLOR,0,bt)}else Dt|=It.COLOR_BUFFER_BIT}if(Rt)Dt|=It.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(Ot)Dt|=It.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(Dt!==0)It.clear(Dt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(_t){_t.setRenderer(this),Pt=_t},this.dispose=function(){tt.removeEventListener("webglcontextlost",Qe,!1),tt.removeEventListener("webglcontextrestored",dn,!1),tt.removeEventListener("webglcontextcreationerror",Sn,!1),Xe.dispose(),We.dispose(),Ye.dispose(),xn.dispose(),mn.dispose(),Qn.dispose(),Nt.dispose(),gt.dispose(),He.dispose(),Je.dispose(),Kt.dispose(),cn.dispose(),cn.removeEventListener("sessionstart",sl),cn.removeEventListener("sessionend",rl),ns.stop()};function Qe(_t){_t.preventDefault(),Qs("WebGLRenderer: Context Lost."),Gt=!0}function dn(){Qs("WebGLRenderer: Context Restored."),Gt=!1;let _t=Un.autoReset,Rt=Vt.enabled,Ot=Vt.autoUpdate,Dt=Vt.needsUpdate,Ut=Vt.type;un(),Un.autoReset=_t,Vt.enabled=Rt,Vt.autoUpdate=Ot,Vt.needsUpdate=Dt,Vt.type=Ut}function Sn(_t){gn("WebGLRenderer: A WebGL context could not be created. Reason: ",_t.statusMessage)}function je(_t){let Rt=_t.target;Rt.removeEventListener("dispose",je),Ln(Rt)}function Ln(_t){Yn(_t),mn.remove(_t)}function Yn(_t){let Rt=mn.get(_t).programs;if(Rt!==void 0){if(Rt.forEach(function(Ot){Kt.releaseProgram(Ot)}),_t.isShaderMaterial)Kt.releaseShaderCache(_t)}}this.renderBufferDirect=function(_t,Rt,Ot,Dt,Ut,Ze){if(Rt===null)Rt=li;let en=Ut.isMesh&&Ut.matrixWorld.determinantAffine()<0,qe=qh(_t,Rt,Ot,Dt,Ut);$e.setMaterial(Dt,en);let tn=Ot.index,ln=1;if(Dt.wireframe===!0){if(tn=gt.getWireframeAttribute(Ot),tn===void 0)return;ln=2}let vn=Ot.drawRange,En=Ot.attributes.position,nn=vn.start*ln,An=(vn.start+vn.count)*ln;if(Ze!==null)nn=Math.max(nn,Ze.start*ln),An=Math.min(An,(Ze.start+Ze.count)*ln);if(tn!==null)nn=Math.max(nn,0),An=Math.min(An,tn.count);else if(En!==void 0&&En!==null)nn=Math.max(nn,0),An=Math.min(An,En.count);let Hn=An-nn;if(Hn<0||Hn===1/0)return;He.setup(Ut,Dt,qe,Ot,tn);let Fn,Dn=Wt;if(tn!==null)Fn=yt.get(tn),Dn=kt,Dn.setIndex(Fn);if(Ut.isMesh)if(Dt.wireframe===!0)$e.setLineWidth(Dt.wireframeLinewidth*gi()),Dn.setMode(It.LINES);else Dn.setMode(It.TRIANGLES);else if(Ut.isLine){let jn=Dt.linewidth;if(jn===void 0)jn=1;if($e.setLineWidth(jn*gi()),Ut.isLineSegments)Dn.setMode(It.LINES);else if(Ut.isLineLoop)Dn.setMode(It.LINE_LOOP);else Dn.setMode(It.LINE_STRIP)}else if(Ut.isPoints)Dn.setMode(It.POINTS);else if(Ut.isSprite)Dn.setMode(It.TRIANGLES);if(Ut.isBatchedMesh)if(!Pn.get("WEBGL_multi_draw")){let{_multiDrawStarts:jn,_multiDrawCounts:sn,_multiDrawCount:ri}=Ut,Cn=tn?yt.get(tn).bytesPerElement:1,is=mn.get(Dt).currentProgram.getUniforms();for(let ti=0;ti<ri;ti++)is.setValue(It,"_gl_DrawID",ti),Dn.render(jn[ti]/Cn,sn[ti])}else Dn.renderMultiDraw(Ut._multiDrawStarts,Ut._multiDrawCounts,Ut._multiDrawCount);else if(Ut.isInstancedMesh)Dn.renderInstances(nn,Hn,Ut.count);else if(Ot.isInstancedBufferGeometry){let jn=Ot._maxInstanceCount!==void 0?Ot._maxInstanceCount:1/0,sn=Math.min(Ot.instanceCount,jn);Dn.renderInstances(nn,Hn,sn)}else Dn.render(nn,Hn)};function Pi(_t,Rt,Ot,Dt){if(Pt!==null&&_t.isNodeMaterial)Pt.setObject(Dt,_t);if(Gn===!0)zt.setState(_t,Ot,!1);if(_t.transparent===!0&&_t.side===p&&_t.forceSinglePass===!1)_t.side=ii,_t.needsUpdate=!0,Gs(_t,Rt,Dt),_t.side=H,_t.needsUpdate=!0,Gs(_t,Rt,Dt),_t.side=p;else Gs(_t,Rt,Dt)}this.compile=function(_t,Rt,Ot=null){if(Ot===null)Ot=_t;if(Pt!==null)Pt.renderStart(_t,Rt,Ot);if(Et=Ye.get(Ot),Et.init(Rt),mt.push(Et),Ot.traverseVisible(function(Ut){if(Ut.isLight&&Ut.layers.test(Rt.layers)){if(Et.pushLight(Ut),Ut.castShadow)Et.pushShadow(Ut)}}),_t!==Ot)_t.traverseVisible(function(Ut){if(Ut.isLight&&Ut.layers.test(Rt.layers)){if(Et.pushLight(Ut),Ut.castShadow)Et.pushShadow(Ut)}});if(Et.setupLights(),Pt!==null)Pt.updateLights(Et.state.lightsArray);if(oi=this.localClippingEnabled,Gn=zt.init(this.clippingPlanes,oi),Gn===!0)zt.setGlobalState(this.clippingPlanes,Rt);if(Pt!==null)Vt.render(Et.state.shadowsArray,Ot,Rt);let Dt=new Set;if(_t.traverse(function(Ut){if(!(Ut.isMesh||Ut.isPoints||Ut.isLine||Ut.isSprite))return;let Ze=Ut.material;if(Ze)if(Array.isArray(Ze))for(let en=0;en<Ze.length;en++){let qe=Ze[en];Pi(qe,Ot,Rt,Ut),Dt.add(qe)}else Pi(Ze,Ot,Rt,Ut),Dt.add(Ze)}),Et=mt.pop(),Pt!==null)Pt.renderEnd();return Dt},this.compileAsync=function(_t,Rt,Ot=null){let Dt=this.compile(_t,Rt,Ot);return new Promise((Ut)=>{function Ze(){if(Dt.forEach(function(en){let tn=mn.get(en).currentProgram;if(tn===void 0||tn.isReady())Dt.delete(en)}),Dt.size===0){Ut(_t);return}setTimeout(Ze,10)}if(Pn.get("KHR_parallel_shader_compile")!==null)Ze();else setTimeout(Ze,10)})};let fa=null;function Vh(_t){if(fa)fa(_t)}function sl(){ns.stop()}function rl(){ns.start()}let ns=new Ah;if(ns.setAnimationLoop(Vh),typeof self<"u")ns.setContext(self);this.setAnimationLoop=function(_t){fa=_t,cn.setAnimationLoop(_t),_t===null?ns.stop():ns.start()},cn.addEventListener("sessionstart",sl),cn.addEventListener("sessionend",rl),this.render=function(_t,Rt){if(Rt!==void 0&&Rt.isCamera!==!0){gn("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Gt===!0)return;if(Pt!==null)Pt.renderStart(_t,Rt);let Ot=cn.enabled===!0&&cn.isPresenting===!0,Dt=vt!==null&&(Ft===null||Ot)&&vt.begin(Lt,Ft);if(_t.matrixWorldAutoUpdate===!0)_t.updateMatrixWorld();if(Rt.parent===null&&Rt.matrixWorldAutoUpdate===!0)Rt.updateMatrixWorld();if(cn.enabled===!0&&cn.isPresenting===!0&&(vt===null||vt.isCompositing()===!1)){if(cn.cameraAutoUpdate===!0)cn.updateCamera(Rt);Rt=cn.getCamera()}if(_t.isScene===!0)_t.onBeforeRender(Lt,_t,Rt,Ft);if(Et=Ye.get(_t,mt.length),Et.init(Rt),Et.state.textureUnits=xn.getTextureUnits(),mt.push(Et),hi.multiplyMatrices(Rt.projectionMatrix,Rt.matrixWorldInverse),Rt.isArrayCamera)zn.setFromArrayCamera(Rt);else wn.setFromProjectionMatrix(hi,No,Rt.reversedDepth);if(oi=this.localClippingEnabled,Gn=zt.init(this.clippingPlanes,oi),Mt=We.get(_t,Ct.length),Mt.init(),Ct.push(Mt),this.info.render.frame++,cn.enabled===!0&&cn.isPresenting===!0){let en=Lt.xr.getDepthSensingMesh();if(en!==null)pa(en,Rt,-1/0,Lt.sortObjects)}if(pa(_t,Rt,0,Lt.sortObjects),Mt.finish(),Pt!==null)Pt.updateLights(Et.state.lightsArray);if(Lt.sortObjects===!0)Mt.sort(an,In);if(ci=cn.enabled===!1||cn.isPresenting===!1||cn.hasDepthSensing()===!1,ci)Xe.addToRenderList(Mt,_t);if(this.info.autoReset===!0)this.info.reset();if(Gn===!0)zt.beginShadows();let Ut=Et.state.shadowsArray;if(Vt.render(Ut,_t,Rt),Gn===!0)zt.endShadows();if((Dt&&vt.hasRenderPass())===!1){let en=Mt.opaque,qe=Mt.transmissive;if(Et.setupLights(),Rt.isArrayCamera){let tn=Rt.cameras;if(qe.length>0)for(let ln=0,vn=tn.length;ln<vn;ln++){let En=tn[ln];ol(en,qe,_t,En)}if(ci)Xe.render(_t);for(let ln=0,vn=tn.length;ln<vn;ln++){let En=tn[ln];al(Mt,_t,En,En.viewport)}}else{if(qe.length>0)ol(en,qe,_t,Rt);if(ci)Xe.render(_t);al(Mt,_t,Rt)}}if(Ft!==null&&Yt===0)xn.updateMultisampleRenderTarget(Ft),xn.updateRenderTargetMipmap(Ft);if(Dt)vt.end(Lt);if(_t.isScene===!0)_t.onAfterRender(Lt,_t,Rt);if(He.resetDefaultState(),Ve=-1,Ht=null,mt.pop(),mt.length>0){if(Et=mt[mt.length-1],xn.setTextureUnits(Et.state.textureUnits),Gn===!0)zt.setGlobalState(Lt.clippingPlanes,Et.state.camera)}else Et=null;if(Ct.pop(),Ct.length>0)Mt=Ct[Ct.length-1];else Mt=null;if(Pt!==null)Pt.renderEnd()};function pa(_t,Rt,Ot,Dt){if(_t.visible===!1)return;if(_t.layers.test(Rt.layers)){if(_t.isGroup)Ot=_t.renderOrder;else if(_t.isLOD){if(_t.autoUpdate===!0)_t.update(Rt)}else if(_t.isLight){if(Et.pushLight(_t),_t.castShadow)Et.pushShadow(_t)}else if(_t.isSprite){let en=Rt.isArrayCamera?zn:wn;if(!_t.frustumCulled||_t.intersectsFrustum(en)){if(Dt)Kn.setFromMatrixPosition(_t.matrixWorld).applyMatrix4(hi);let qe=Nt.update(_t),tn=_t.material;if(tn.visible)Mt.push(_t,qe,tn,Ot,Kn.z,null,Rt)}}else if(_t.isMesh||_t.isLine||_t.isPoints){let en=Rt.isArrayCamera?zn:wn;if(!_t.frustumCulled||_t.intersectsFrustum(en)){let qe=Nt.update(_t),tn=_t.material;if(Dt){if(_t.boundingSphere!==void 0){if(_t.boundingSphere===null)_t.computeBoundingSphere();Kn.copy(_t.boundingSphere.center)}else{if(qe.boundingSphere===null)qe.computeBoundingSphere();Kn.copy(qe.boundingSphere.center)}Kn.applyMatrix4(_t.matrixWorld).applyMatrix4(hi)}if(Array.isArray(tn)){let ln=qe.groups;for(let vn=0,En=ln.length;vn<En;vn++){let nn=ln[vn],An=tn[nn.materialIndex];if(An&&An.visible)Mt.push(_t,qe,An,Ot,Kn.z,nn,Rt)}}else if(tn.visible)Mt.push(_t,qe,tn,Ot,Kn.z,null,Rt)}}}let Ze=_t.children;for(let en=0,qe=Ze.length;en<qe;en++)pa(Ze[en],Rt,Ot,Dt)}function al(_t,Rt,Ot,Dt){let{opaque:Ut,transmissive:Ze,transparent:en}=_t;if(Et.setupLightsView(Ot),Gn===!0)zt.setGlobalState(Lt.clippingPlanes,Ot);if(Dt)$e.viewport(Jt.copy(Dt));if(Ut.length>0)fr(Ut,Rt,Ot);if(Ze.length>0)fr(Ze,Rt,Ot);if(en.length>0)fr(en,Rt,Ot);$e.buffers.depth.setTest(!0),$e.buffers.depth.setMask(!0),$e.buffers.color.setMask(!0),$e.setPolygonOffset(!1)}function ol(_t,Rt,Ot,Dt){if((Ot.isScene===!0?Ot.overrideMaterial:null)!==null)return;if(Et.state.transmissionRenderTarget[Dt.id]===void 0){let nn=Pn.has("EXT_color_buffer_half_float")||Pn.has("EXT_color_buffer_float");Et.state.transmissionRenderTarget[Dt.id]=new _(1,1,{generateMipmaps:!0,type:nn?b:Mi,minFilter:N,samples:Math.max(4,qn.samples),stencilBuffer:it,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:s.workingColorSpace})}let Ze=Et.state.transmissionRenderTarget[Dt.id],en=Dt.viewport||Jt;Ze.setSize(en.z*Lt.transmissionResolutionScale,en.w*Lt.transmissionResolutionScale);let qe=Lt.getRenderTarget(),tn=Lt.getActiveCubeFace(),ln=Lt.getActiveMipmapLevel();if(Lt.setRenderTarget(Ze),Lt.getClearColor(qt),jt=Lt.getClearAlpha(),jt<1)Lt.setClearColor(16777215,0.5);if(Lt.clear(),ci)Xe.render(Ot);let vn=Lt.toneMapping;Lt.toneMapping=wi;let En=Dt.viewport;if(Dt.viewport!==void 0)Dt.viewport=void 0;if(Et.setupLightsView(Dt),Gn===!0)zt.setGlobalState(Lt.clippingPlanes,Dt);if(fr(_t,Ot,Dt),xn.updateMultisampleRenderTarget(Ze),xn.updateRenderTargetMipmap(Ze),Pn.has("WEBGL_multisampled_render_to_texture")===!1){let nn=!1;for(let An=0,Hn=Rt.length;An<Hn;An++){let Fn=Rt[An],{object:Dn,geometry:jn,material:sn,group:ri}=Fn;if(sn.side===p&&Dn.layers.test(Dt.layers)){let Cn=sn.side;sn.side=ii,sn.needsUpdate=!0,ll(Dn,Ot,Dt,jn,sn,ri),sn.side=Cn,sn.needsUpdate=!0,nn=!0}}if(nn===!0)xn.updateMultisampleRenderTarget(Ze),xn.updateRenderTargetMipmap(Ze)}if(Lt.setRenderTarget(qe,tn,ln),Lt.setClearColor(qt,jt),En!==void 0)Dt.viewport=En;Lt.toneMapping=vn}function fr(_t,Rt,Ot){let Dt=Rt.isScene===!0?Rt.overrideMaterial:null;for(let Ut=0,Ze=_t.length;Ut<Ze;Ut++){let en=_t[Ut],{object:qe,geometry:tn,group:ln}=en,vn=en.material;if(vn.allowOverride===!0&&Dt!==null)vn=Dt;if(qe.layers.test(Ot.layers))ll(qe,Rt,Ot,tn,vn,ln)}}function ll(_t,Rt,Ot,Dt,Ut,Ze){if(Pt!==null&&Ut.isNodeMaterial)Pt.setObject(_t,Ut);if(_t.onBeforeRender(Lt,Rt,Ot,Dt,Ut,Ze),_t.modelViewMatrix.multiplyMatrices(Ot.matrixWorldInverse,_t.matrixWorld),_t.normalMatrix.getNormalMatrix(_t.modelViewMatrix),Ut.onBeforeRender(Lt,Rt,Ot,Dt,_t,Ze),Ut.transparent===!0&&Ut.side===p&&Ut.forceSinglePass===!1)Ut.side=ii,Ut.needsUpdate=!0,Lt.renderBufferDirect(Ot,Rt,Dt,Ut,_t,Ze),Ut.side=H,Ut.needsUpdate=!0,Lt.renderBufferDirect(Ot,Rt,Dt,Ut,_t,Ze),Ut.side=p;else Lt.renderBufferDirect(Ot,Rt,Dt,Ut,_t,Ze);_t.onAfterRender(Lt,Rt,Ot,Dt,Ut,Ze)}function cl(_t){let Rt=0;for(let Ot of _t)if(Ot.texture!==null)Rt++;return Rt}function Gs(_t,Rt,Ot){if(Rt.isScene!==!0)Rt=li;let Dt=mn.get(_t),Ut=Et.state.lights,Ze=Et.state.shadowsArray,en=Ut.state.version,qe=Kt.getParameters(_t,Ut.state,Ze,Rt,Ot,Et.state.lightProbeGridArray),tn=Kt.getProgramCacheKey(qe),ln=Dt.programs;Dt.environment=_t.isMeshStandardMaterial||_t.isMeshLambertMaterial||_t.isMeshPhongMaterial?Rt.environment:null,Dt.fog=Rt.fog;let vn=_t.isMeshStandardMaterial||_t.isMeshLambertMaterial&&!_t.envMap||_t.isMeshPhongMaterial&&!_t.envMap;if(Dt.envMap=Qn.get(_t.envMap||Dt.environment,vn),Dt.envMapRotation=Dt.environment!==null&&_t.envMap===null?Rt.environmentRotation:_t.envMapRotation,ln===void 0)_t.addEventListener("dispose",je),ln=new Map,Dt.programs=ln,Dt.programVariants=new Map;let En=ln.get(tn);if(En!==void 0){if(Dt.currentProgram===En&&Dt.lightsStateVersion===en)return ul(_t,qe),En}else{if(qe.uniforms=Kt.getUniforms(_t),Pt!==null&&_t.isNodeMaterial)Pt.build(_t,Ot,qe);_t.onBeforeCompile(qe,Lt),En=Kt.acquireProgram(qe,tn),ln.set(tn,En),Dt.uniforms=qe.uniforms}let nn=Dt.uniforms;if(!_t.isShaderMaterial&&!_t.isRawShaderMaterial||_t.clipping===!0)nn.clippingPlanes=zt.uniform;if(ul(_t,qe),Dt.needsLights=Zh(_t),Dt.lightsStateVersion=en,Dt.needsLights)nn.ambientLightColor.value=Ut.state.ambient,nn.lightProbe.value=Ut.state.probe,nn.sunLights.value=Ut.state.sun,nn.sunLightShadows.value=Ut.state.sunShadow,nn.directionalLights.value=Ut.state.directional,nn.directionalLightShadows.value=Ut.state.directionalShadow,nn.spotLights.value=Ut.state.spot,nn.spotLightShadows.value=Ut.state.spotShadow,nn.rectAreaLights.value=Ut.state.rectArea,nn.ltc_1.value=Ut.state.rectAreaLTC1,nn.ltc_2.value=Ut.state.rectAreaLTC2,nn.pointLights.value=Ut.state.point,nn.pointLightShadows.value=Ut.state.pointShadow,nn.hemisphereLights.value=Ut.state.hemi,nn.sunShadowMatrix.value=Ut.state.sunShadowMatrix,nn.sunShadowCascade.value=Ut.state.sunShadowCascade,nn.directionalShadowMatrix.value=Ut.state.directionalShadowMatrix,nn.spotLightMatrix.value=Ut.state.spotLightMatrix,nn.spotLightMap.value=Ut.state.spotLightMap,nn.pointShadowMatrix.value=Ut.state.pointShadowMatrix;return Dt.numLightProbeGrids=cl(Et.state.lightProbeGridArray),Dt.currentProgram=En,Dt.uniformsList=null,En}function Xh(_t,Rt,Ot,Dt,Ut){let Ze=mn.get(_t),en=Ze.currentProgram.id+","+Dt+","+Ut,qe=Ze.programVariants.get(en);if(qe===void 0)qe=Gs(_t,Rt,Ot),Ze.programVariants.set(en,qe);else Ze.currentProgram=qe,Ze.uniformsList=null,Ze.outputColorSpace=Dt,Ze.toneMapping=Ut;return qe}function hl(_t){if(_t.uniformsList===null){let Rt=_t.currentProgram.getUniforms();_t.uniformsList=ur.seqWithValue(Rt.seq,_t.uniforms)}return _t.uniformsList}function ul(_t,Rt){let Ot=mn.get(_t);Ot.outputColorSpace=Rt.outputColorSpace,Ot.batching=Rt.batching,Ot.batchingColor=Rt.batchingColor,Ot.instancing=Rt.instancing,Ot.instancingColor=Rt.instancingColor,Ot.instancingMorph=Rt.instancingMorph,Ot.skinning=Rt.skinning,Ot.morphTargets=Rt.morphTargets,Ot.morphNormals=Rt.morphNormals,Ot.morphColors=Rt.morphColors,Ot.morphTargetsCount=Rt.morphTargetsCount,Ot.numClippingPlanes=Rt.numClippingPlanes,Ot.numIntersection=Rt.numClipIntersection,Ot.vertexAlphas=Rt.vertexAlphas,Ot.vertexTangents=Rt.vertexTangents,Ot.toneMapping=Rt.toneMapping}function qh(_t,Rt,Ot,Dt,Ut){if(Rt.isScene!==!0)Rt=li;xn.resetTextureUnits();let Ze=Rt.fog,en=Dt.isMeshStandardMaterial||Dt.isMeshLambertMaterial||Dt.isMeshPhongMaterial?Rt.environment:null,qe=Ft===null?Lt.outputColorSpace:Ft.isXRRenderTarget===!0?Ft.texture.colorSpace:s.workingColorSpace,tn=Dt.isMeshStandardMaterial||Dt.isMeshLambertMaterial&&!Dt.envMap||Dt.isMeshPhongMaterial&&!Dt.envMap,ln=Qn.get(Dt.envMap||en,tn),vn=Dt.vertexColors===!0&&!!Ot.attributes.color&&Ot.attributes.color.itemSize===4,En=!!Ot.attributes.tangent&&(!!Dt.normalMap||Dt.anisotropy>0),nn=!!Ot.morphAttributes.position,An=!!Ot.morphAttributes.normal,Hn=!!Ot.morphAttributes.color,Fn=wi;if(Dt.toneMapped){if(Ft===null||Ft.isXRRenderTarget===!0)Fn=Lt.toneMapping}let Dn=Ot.morphAttributes.position||Ot.morphAttributes.normal||Ot.morphAttributes.color,jn=Dn!==void 0?Dn.length:0,sn=mn.get(Dt),ri=Et.state.lights;if(Gn===!0){if(oi===!0||_t!==Ht){let Bn=_t===Ht&&Dt.id===Ve;zt.setState(Dt,_t,Bn)}}let Cn=!1,is=!1;if(Dt.version===sn.__version){if(sn.needsLights&&sn.lightsStateVersion!==ri.state.version)Cn=!0;else if(Ut.isBatchedMesh&&sn.batching===!1)Cn=!0;else if(!Ut.isBatchedMesh&&sn.batching===!0)Cn=!0;else if(Ut.isBatchedMesh&&sn.batchingColor===!0&&Ut._colorsTexture===null)Cn=!0;else if(Ut.isBatchedMesh&&sn.batchingColor===!1&&Ut._colorsTexture!==null)Cn=!0;else if(Ut.isInstancedMesh&&sn.instancing===!1)Cn=!0;else if(!Ut.isInstancedMesh&&sn.instancing===!0)Cn=!0;else if(Ut.isSkinnedMesh&&sn.skinning===!1)Cn=!0;else if(!Ut.isSkinnedMesh&&sn.skinning===!0)Cn=!0;else if(Ut.isInstancedMesh&&sn.instancingColor===!0&&Ut.instanceColor===null)Cn=!0;else if(Ut.isInstancedMesh&&sn.instancingColor===!1&&Ut.instanceColor!==null)Cn=!0;else if(Ut.isInstancedMesh&&sn.instancingMorph===!0&&Ut.morphTexture===null)Cn=!0;else if(Ut.isInstancedMesh&&sn.instancingMorph===!1&&Ut.morphTexture!==null)Cn=!0;else if(sn.envMap!==ln)Cn=!0;else if(Dt.fog===!0&&sn.fog!==Ze)Cn=!0;else if(sn.numClippingPlanes!==void 0&&(sn.numClippingPlanes!==zt.numPlanes||sn.numIntersection!==zt.numIntersection))Cn=!0;else if(sn.vertexAlphas!==vn)Cn=!0;else if(sn.vertexTangents!==En)Cn=!0;else if(sn.morphTargets!==nn)Cn=!0;else if(sn.morphNormals!==An)Cn=!0;else if(sn.morphColors!==Hn)Cn=!0;else if(sn.morphTargetsCount!==jn)Cn=!0;else if(sn.numLightProbeGrids!==cl(Et.state.lightProbeGridArray))Cn=!0;else if(sn.outputColorSpace!==qe||sn.toneMapping!==Fn)is=!0}else Cn=!0,sn.__version=Dt.version;let ti=sn.currentProgram;if(Cn===!0||is===!0){if(ti=is===!0?Xh(Dt,Rt,Ut,qe,Fn):Gs(Dt,Rt,Ut),Pt&&Dt.isNodeMaterial)Pt.onUpdateProgram(Dt,ti,sn)}let pr=!1,Wi=!1,ss=!1,Rn=ti.getUniforms(),$n=sn.uniforms;if($e.useProgram(ti.program))pr=!0,Wi=!0,ss=!0;if(Dt.id!==Ve)Ve=Dt.id,Wi=!0;if(pr||Ht!==_t){if($e.buffers.depth.getReversed()&&_t.reversedDepth!==!0)_t._reversedDepth=!0,_t.updateProjectionMatrix();Rn.setValue(It,"projectionMatrix",_t.projectionMatrix),Rn.setValue(It,"viewMatrix",_t.matrixWorldInverse);let Zn=Rn.map.cameraPosition;if(Zn!==void 0)Zn.setValue(It,kn.setFromMatrixPosition(_t.matrixWorld));if(qn.logarithmicDepthBuffer)Rn.setValue(It,"logDepthBufFC",2/(Math.log(_t.far+1)/Math.LN2));if(Dt.isMeshPhongMaterial||Dt.isMeshToonMaterial||Dt.isMeshLambertMaterial||Dt.isMeshBasicMaterial||Dt.isMeshStandardMaterial||Dt.isShaderMaterial)Rn.setValue(It,"isOrthographic",_t.isOrthographicCamera===!0);if(Ht!==_t)Ht=_t,Wi=!0,ss=!0}if(sn.needsLights){if(ri.state.sunShadowMap.length>0)Rn.setValue(It,"sunShadowMap",ri.state.sunShadowMap,xn);if(ri.state.directionalShadowMap.length>0)Rn.setValue(It,"directionalShadowMap",ri.state.directionalShadowMap,xn);if(ri.state.spotShadowMap.length>0)Rn.setValue(It,"spotShadowMap",ri.state.spotShadowMap,xn);if(ri.state.pointShadowMap.length>0)Rn.setValue(It,"pointShadowMap",ri.state.pointShadowMap,xn)}if(Ut.isSkinnedMesh){Rn.setOptional(It,Ut,"bindMatrix"),Rn.setOptional(It,Ut,"bindMatrixInverse");let Bn=Ut.skeleton;if(Bn){if(Bn.boneTexture===null)Bn.computeBoneTexture();Rn.setValue(It,"boneTexture",Bn.boneTexture,xn)}}if(Ut.isBatchedMesh){if(Rn.setOptional(It,Ut,"batchingTexture"),Rn.setValue(It,"batchingTexture",Ut._matricesTexture,xn),Rn.setOptional(It,Ut,"batchingIdTexture"),Rn.setValue(It,"batchingIdTexture",Ut._indirectTexture,xn),Rn.setOptional(It,Ut,"batchingColorTexture"),Ut._colorsTexture!==null)Rn.setValue(It,"batchingColorTexture",Ut._colorsTexture,xn)}let xi=Ot.morphAttributes;if(xi.position!==void 0||xi.normal!==void 0||xi.color!==void 0)At.update(Ut,Ot,ti);if(Wi||sn.receiveShadow!==Ut.receiveShadow)sn.receiveShadow=Ut.receiveShadow,Rn.setValue(It,"receiveShadow",Ut.receiveShadow);if((Dt.isMeshStandardMaterial||Dt.isMeshLambertMaterial||Dt.isMeshPhongMaterial)&&Dt.envMap===null&&Rt.environment!==null)$n.envMapIntensity.value=Rt.environmentIntensity;if($n.dfgLUT!==void 0)$n.dfgLUT.value=Og();if(Wi){if(Rn.setValue(It,"toneMappingExposure",Lt.toneMappingExposure),sn.needsLights)Yh($n,ss);if(Ze&&Dt.fog===!0)Zt.refreshFogUniforms($n,Ze);if(Zt.refreshMaterialUniforms($n,Dt,pn,fn,Et.state.transmissionRenderTarget[_t.id]),sn.needsLights&&sn.numLightProbeGrids>0){let Bn=Tt,Zn=0;for(let Li of Et.state.lightProbeGridArray){if(Li.texture===null)continue;Bn.textures[Zn]=Li.texture,Bn.min[Zn]=Li.boundingBox.min,Bn.max[Zn]=Li.boundingBox.max,Bn.resolution[Zn]=Li.resolution,Zn++}for(let Li in Bn)Bn[Li].length=Zn;$n.probesSH.value=Bn.textures,$n.probesMin.value=Bn.min,$n.probesMax.value=Bn.max,$n.probesResolution.value=Bn.resolution}ur.upload(It,hl(sn),$n,xn)}if(Dt.isShaderMaterial&&Dt.uniformsNeedUpdate===!0)ur.upload(It,hl(sn),$n,xn),Dt.uniformsNeedUpdate=!1;if(Dt.isSpriteMaterial)Rn.setValue(It,"center",Ut.center);if(Rn.setValue(It,"modelViewMatrix",Ut.modelViewMatrix),Rn.setValue(It,"normalMatrix",Ut.normalMatrix),Rn.setValue(It,"modelMatrix",Ut.matrixWorld),Dt.uniformsGroups!==void 0){let Bn=Dt.uniformsGroups;for(let Zn=0,Li=Bn.length;Zn<Li;Zn++){let fl=Bn[Zn];Je.update(fl,ti),Je.bind(fl,ti)}}return ti}function Yh(_t,Rt){_t.ambientLightColor.needsUpdate=Rt,_t.lightProbe.needsUpdate=Rt,_t.sunLights.needsUpdate=Rt,_t.sunLightShadows.needsUpdate=Rt,_t.directionalLights.needsUpdate=Rt,_t.directionalLightShadows.needsUpdate=Rt,_t.pointLights.needsUpdate=Rt,_t.pointLightShadows.needsUpdate=Rt,_t.spotLights.needsUpdate=Rt,_t.spotLightShadows.needsUpdate=Rt,_t.rectAreaLights.needsUpdate=Rt,_t.hemisphereLights.needsUpdate=Rt}function Zh(_t){return _t.isMeshLambertMaterial||_t.isMeshToonMaterial||_t.isMeshPhongMaterial||_t.isMeshStandardMaterial||_t.isShadowMaterial||_t.isShaderMaterial&&_t.lights===!0}this.getActiveCubeFace=function(){return Xt},this.getActiveMipmapLevel=function(){return Yt},this.getRenderTarget=function(){return Ft},this.setRenderTargetTextures=function(_t,Rt,Ot){let Dt=mn.get(_t);if(Dt.__autoAllocateDepthBuffer=_t.resolveDepthBuffer===!1,Dt.__autoAllocateDepthBuffer===!1)Dt.__useRenderToTexture=!1;mn.get(_t.texture).__webglTexture=Rt,mn.get(_t.depthTexture).__webglTexture=Dt.__autoAllocateDepthBuffer?void 0:Ot,Dt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(_t,Rt){let Ot=mn.get(_t);Ot.__webglFramebuffer=Rt,Ot.__useDefaultFramebuffer=Rt===void 0},this.setRenderTarget=function(_t,Rt=0,Ot=0){Ft=_t,Xt=Rt,Yt=Ot;let Dt=null,Ut=!1,Ze=!1;if(_t){let qe=mn.get(_t);if(qe.__useDefaultFramebuffer!==void 0){$e.bindFramebuffer(It.FRAMEBUFFER,qe.__webglFramebuffer),Jt.copy(_t.viewport),Ge.copy(_t.scissor),on=_t.scissorTest,$e.viewport(Jt),$e.scissor(Ge),$e.setScissorTest(on),Ve=-1;return}else if(qe.__webglFramebuffer===void 0)xn.setupRenderTarget(_t);else if(qe.__hasExternalTextures)xn.rebindTextures(_t,mn.get(_t.texture).__webglTexture,mn.get(_t.depthTexture).__webglTexture);else if(_t.depthBuffer){let vn=_t.depthTexture;if(qe.__boundDepthTexture!==vn){if(vn!==null&&mn.has(vn)&&(_t.width!==vn.image.width||_t.height!==vn.image.height))throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");xn.setupDepthRenderbuffer(_t)}}let tn=_t.texture;if(tn.isData3DTexture||tn.isDataArrayTexture||tn.isCompressedArrayTexture)Ze=!0;let ln=mn.get(_t).__webglFramebuffer;if(_t.isWebGLCubeRenderTarget){if(Array.isArray(ln[Rt]))Dt=ln[Rt][Ot];else Dt=ln[Rt];Ut=!0}else if(_t.samples>0&&xn.useMultisampledRTT(_t)===!1)Dt=mn.get(_t).__webglMultisampledFramebuffer;else if(Array.isArray(ln))Dt=ln[Ot];else Dt=ln;Jt.copy(_t.viewport),Ge.copy(_t.scissor),on=_t.scissorTest}else Jt.copy(bn).multiplyScalar(pn).floor(),Ge.copy(yn).multiplyScalar(pn).floor(),on=On;if(Ot!==0)Dt=Bt;if($e.bindFramebuffer(It.FRAMEBUFFER,Dt))$e.drawBuffers(_t,Dt);if($e.viewport(Jt),$e.scissor(Ge),$e.setScissorTest(on),Ut){let qe=mn.get(_t.texture);It.framebufferTexture2D(It.FRAMEBUFFER,It.COLOR_ATTACHMENT0,It.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,qe.__webglTexture,Ot)}else if(Ze){let qe=Rt;for(let tn=0;tn<_t.textures.length;tn++){let ln=mn.get(_t.textures[tn]);It.framebufferTextureLayer(It.FRAMEBUFFER,It.COLOR_ATTACHMENT0+tn,ln.__webglTexture,Ot,qe)}}else if(_t!==null&&Ot!==0){let qe=mn.get(_t.texture);It.framebufferTexture2D(It.FRAMEBUFFER,It.COLOR_ATTACHMENT0,It.TEXTURE_2D,qe.__webglTexture,Ot)}Ve=-1};function dl(_t){let Rt=mn.get(_t);if(Rt.__readFormat!==_t.format||Rt.__readType!==_t.type)Rt.__readFormat=_t.format,Rt.__readType=_t.type,Rt.__formatReadable=qn.textureFormatReadable(_t.format),Rt.__typeReadable=qn.textureTypeReadable(_t.type);return Rt}if(this.readRenderTargetPixels=function(_t,Rt,Ot,Dt,Ut,Ze,en,qe=0){if(!(_t&&_t.isWebGLRenderTarget)){gn("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let tn=mn.get(_t).__webglFramebuffer;if(_t.isWebGLCubeRenderTarget&&en!==void 0){if(tn=tn[en],Array.isArray(tn))tn=tn[0]}if(tn){$e.bindFramebuffer(It.FRAMEBUFFER,tn);try{let ln=_t.textures[qe],{format:vn,type:En}=ln;if(_t.textures.length>1)It.readBuffer(It.COLOR_ATTACHMENT0+qe);let nn=dl(ln);if(nn.__formatReadable===!1){gn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(nn.__typeReadable===!1){gn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(Rt>=0&&Rt<=_t.width-Dt&&(Ot>=0&&Ot<=_t.height-Ut))It.readPixels(Rt,Ot,Dt,Ut,Qt.convert(vn),Qt.convert(En),Ze)}finally{let ln=Ft!==null?mn.get(Ft).__webglFramebuffer:null;$e.bindFramebuffer(It.FRAMEBUFFER,ln)}}},this.readRenderTargetPixelsAsync=async function(_t,Rt,Ot,Dt,Ut,Ze,en,qe=0){if(!(_t&&_t.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let tn=mn.get(_t).__webglFramebuffer;if(_t.isWebGLCubeRenderTarget&&en!==void 0){if(tn=tn[en],Array.isArray(tn))tn=tn[0]}if(tn)if(Rt>=0&&Rt<=_t.width-Dt&&(Ot>=0&&Ot<=_t.height-Ut)){$e.bindFramebuffer(It.FRAMEBUFFER,tn);let ln=_t.textures[qe],{format:vn,type:En}=ln;if(_t.textures.length>1)It.readBuffer(It.COLOR_ATTACHMENT0+qe);let nn=dl(ln);if(nn.__formatReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(nn.__typeReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let An=It.createBuffer();It.bindBuffer(It.PIXEL_PACK_BUFFER,An),It.bufferData(It.PIXEL_PACK_BUFFER,Ze.byteLength,It.STREAM_READ),It.readPixels(Rt,Ot,Dt,Ut,Qt.convert(vn),Qt.convert(En),0),It.bindBuffer(It.PIXEL_PACK_BUFFER,null);let Hn=Ft!==null?mn.get(Ft).__webglFramebuffer:null;$e.bindFramebuffer(It.FRAMEBUFFER,Hn);let Fn=It.fenceSync(It.SYNC_GPU_COMMANDS_COMPLETE,0);return It.flush(),await Zc(It,Fn,4),It.bindBuffer(It.PIXEL_PACK_BUFFER,An),It.getBufferSubData(It.PIXEL_PACK_BUFFER,0,Ze),It.bindBuffer(It.PIXEL_PACK_BUFFER,null),It.deleteBuffer(An),It.deleteSync(Fn),Ze}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(_t,Rt=null,Ot=0){let Dt=Math.pow(2,-Ot),Ut=Math.floor(_t.image.width*Dt),Ze=Math.floor(_t.image.height*Dt),en=Rt!==null?Rt.x:0,qe=Rt!==null?Rt.y:0;xn.setTexture2D(_t,0),It.copyTexSubImage2D(It.TEXTURE_2D,Ot,0,0,en,qe,Ut,Ze),$e.unbindTexture()},this.copyTextureToTexture=function(_t,Rt,Ot=null,Dt=null,Ut=0,Ze=0){let en,qe,tn,ln,vn,En,nn,An,Hn,Fn=_t.isCompressedTexture?_t.mipmaps[Ze]:_t.image;if(Ot!==null)en=Ot.max.x-Ot.min.x,qe=Ot.max.y-Ot.min.y,tn=Ot.isBox3?Ot.max.z-Ot.min.z:1,ln=Ot.min.x,vn=Ot.min.y,En=Ot.isBox3?Ot.min.z:0;else{let Rn=Math.pow(2,-Ut);if(en=Math.floor(Fn.width*Rn),qe=Math.floor(Fn.height*Rn),_t.isDataArrayTexture)tn=Fn.depth;else if(_t.isData3DTexture)tn=Math.floor(Fn.depth*Rn);else tn=1;ln=0,vn=0,En=0}if(Dt!==null)nn=Dt.x,An=Dt.y,Hn=Dt.z;else nn=0,An=0,Hn=0;let Dn=Qt.convert(Rt.format),jn=Qt.convert(Rt.type),sn;if(Rt.isData3DTexture)xn.setTexture3D(Rt,0),sn=It.TEXTURE_3D;else if(Rt.isDataArrayTexture||Rt.isCompressedArrayTexture)xn.setTexture2DArray(Rt,0),sn=It.TEXTURE_2D_ARRAY;else xn.setTexture2D(Rt,0),sn=It.TEXTURE_2D;$e.activeTexture(It.TEXTURE0),$e.pixelStorei(It.UNPACK_FLIP_Y_WEBGL,Rt.flipY),$e.pixelStorei(It.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Rt.premultiplyAlpha),$e.pixelStorei(It.UNPACK_ALIGNMENT,Rt.unpackAlignment);let ri=$e.getParameter(It.UNPACK_ROW_LENGTH),Cn=$e.getParameter(It.UNPACK_IMAGE_HEIGHT),is=$e.getParameter(It.UNPACK_SKIP_PIXELS),ti=$e.getParameter(It.UNPACK_SKIP_ROWS),pr=$e.getParameter(It.UNPACK_SKIP_IMAGES);$e.pixelStorei(It.UNPACK_ROW_LENGTH,Fn.width),$e.pixelStorei(It.UNPACK_IMAGE_HEIGHT,Fn.height),$e.pixelStorei(It.UNPACK_SKIP_PIXELS,ln),$e.pixelStorei(It.UNPACK_SKIP_ROWS,vn),$e.pixelStorei(It.UNPACK_SKIP_IMAGES,En);let Wi=_t.isDataArrayTexture||_t.isData3DTexture,ss=Rt.isDataArrayTexture||Rt.isData3DTexture;if(_t.isDepthTexture){let Rn=mn.get(_t),$n=mn.get(Rt),xi=mn.get(Rn.__renderTarget),Bn=mn.get($n.__renderTarget);$e.bindFramebuffer(It.READ_FRAMEBUFFER,xi.__webglFramebuffer),$e.bindFramebuffer(It.DRAW_FRAMEBUFFER,Bn.__webglFramebuffer);for(let Zn=0;Zn<tn;Zn++){if(Wi)It.framebufferTextureLayer(It.READ_FRAMEBUFFER,It.COLOR_ATTACHMENT0,mn.get(_t).__webglTexture,Ut,En+Zn),It.framebufferTextureLayer(It.DRAW_FRAMEBUFFER,It.COLOR_ATTACHMENT0,mn.get(Rt).__webglTexture,Ze,Hn+Zn);It.blitFramebuffer(ln,vn,ln+en,vn+qe,nn,An,nn+en,An+qe,It.DEPTH_BUFFER_BIT,It.NEAREST)}$e.bindFramebuffer(It.READ_FRAMEBUFFER,null),$e.bindFramebuffer(It.DRAW_FRAMEBUFFER,null)}else if(Ut!==0||_t.isRenderTargetTexture||mn.has(_t)){let Rn=mn.get(_t),$n=mn.get(Rt);$e.bindFramebuffer(It.READ_FRAMEBUFFER,$t),$e.bindFramebuffer(It.DRAW_FRAMEBUFFER,wt);for(let xi=0;xi<tn;xi++){if(Wi)It.framebufferTextureLayer(It.READ_FRAMEBUFFER,It.COLOR_ATTACHMENT0,Rn.__webglTexture,Ut,En+xi);else It.framebufferTexture2D(It.READ_FRAMEBUFFER,It.COLOR_ATTACHMENT0,It.TEXTURE_2D,Rn.__webglTexture,Ut);if(ss)It.framebufferTextureLayer(It.DRAW_FRAMEBUFFER,It.COLOR_ATTACHMENT0,$n.__webglTexture,Ze,Hn+xi);else It.framebufferTexture2D(It.DRAW_FRAMEBUFFER,It.COLOR_ATTACHMENT0,It.TEXTURE_2D,$n.__webglTexture,Ze);if(Ut!==0)It.blitFramebuffer(ln,vn,ln+en,vn+qe,nn,An,nn+en,An+qe,It.COLOR_BUFFER_BIT,It.NEAREST);else if(ss)It.copyTexSubImage3D(sn,Ze,nn,An,Hn+xi,ln,vn,en,qe);else It.copyTexSubImage2D(sn,Ze,nn,An,ln,vn,en,qe)}$e.bindFramebuffer(It.READ_FRAMEBUFFER,null),$e.bindFramebuffer(It.DRAW_FRAMEBUFFER,null)}else if(ss)if(_t.isDataTexture||_t.isData3DTexture)It.texSubImage3D(sn,Ze,nn,An,Hn,en,qe,tn,Dn,jn,Fn.data);else if(Rt.isCompressedArrayTexture)It.compressedTexSubImage3D(sn,Ze,nn,An,Hn,en,qe,tn,Dn,Fn.data);else It.texSubImage3D(sn,Ze,nn,An,Hn,en,qe,tn,Dn,jn,Fn);else if(_t.isDataTexture)It.texSubImage2D(It.TEXTURE_2D,Ze,nn,An,en,qe,Dn,jn,Fn.data);else if(_t.isCompressedTexture)It.compressedTexSubImage2D(It.TEXTURE_2D,Ze,nn,An,Fn.width,Fn.height,Dn,Fn.data);else It.texSubImage2D(It.TEXTURE_2D,Ze,nn,An,en,qe,Dn,jn,Fn);if($e.pixelStorei(It.UNPACK_ROW_LENGTH,ri),$e.pixelStorei(It.UNPACK_IMAGE_HEIGHT,Cn),$e.pixelStorei(It.UNPACK_SKIP_PIXELS,is),$e.pixelStorei(It.UNPACK_SKIP_ROWS,ti),$e.pixelStorei(It.UNPACK_SKIP_IMAGES,pr),Ze===0&&Rt.generateMipmaps===!0&&Rt.mipmapsAutoUpdate===!0)It.generateMipmap(sn);$e.unbindTexture()},this.initRenderTarget=function(_t){if(mn.get(_t).__webglFramebuffer===void 0)xn.setupRenderTarget(_t)},this.initTexture=function(_t){if(_t.isCubeTexture)xn.setTextureCube(_t,0);else if(_t.isData3DTexture)xn.setTexture3D(_t,0);else if(_t.isDataArrayTexture||_t.isCompressedArrayTexture)xn.setTexture2DArray(_t,0);else xn.setTexture2D(_t,0);$e.unbindTexture()},this.resetState=function(){Xt=0,Yt=0,Ft=null,$e.reset(),He.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return No}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(Y){this._outputColorSpace=Y;let tt=this.getContext();tt.drawingBufferColorSpace=s._getDrawingBufferColorSpace(Y),tt.unpackColorSpace=s._getUnpackColorSpace()}}class le extends F{constructor(){super();this.name="RoomEnvironment",this.position.y=-3.5;let Y=new ji;Y.deleteAttribute("uv");let tt=new u({side:ii}),et=new u,nt=new ae(16777215,900,28,2);nt.position.set(0.418,16.199,0.3),this.add(nt);let it=new o(Y,tt);it.position.set(-0.757,13.219,0.717),it.scale.set(31.713,28.305,28.591),this.add(it);let st=new se(Y,et,6),rt=new l;rt.position.set(-10.906,2.009,1.846),rt.rotation.set(0,-0.195,0),rt.scale.set(2.328,7.905,4.651),rt.updateMatrix(),st.setMatrixAt(0,rt.matrix),rt.position.set(-5.607,-0.754,-0.758),rt.rotation.set(0,0.994,0),rt.scale.set(1.97,1.534,3.955),rt.updateMatrix(),st.setMatrixAt(1,rt.matrix),rt.position.set(6.167,0.857,7.803),rt.rotation.set(0,0.561,0),rt.scale.set(3.927,6.285,3.687),rt.updateMatrix(),st.setMatrixAt(2,rt.matrix),rt.position.set(-2.017,0.018,6.124),rt.rotation.set(0,0.333,0),rt.scale.set(2.002,4.566,2.064),rt.updateMatrix(),st.setMatrixAt(3,rt.matrix),rt.position.set(2.291,-0.756,-2.621),rt.rotation.set(0,-0.286,0),rt.scale.set(1.546,1.552,1.496),rt.updateMatrix(),st.setMatrixAt(4,rt.matrix),rt.position.set(-2.193,-0.369,-5.547),rt.rotation.set(0,0.516,0),rt.scale.set(3.875,3.487,2.986),rt.updateMatrix(),st.setMatrixAt(5,rt.matrix),this.add(st);let at=new o(Y,zs(50));at.position.set(-16.116,14.37,8.208),at.scale.set(0.1,2.428,2.739),this.add(at);let ot=new o(Y,zs(50));ot.position.set(-16.109,18.021,-8.207),ot.scale.set(0.1,2.425,2.751),this.add(ot);let lt=new o(Y,zs(17));lt.position.set(14.904,12.198,-1.832),lt.scale.set(0.15,4.265,6.331),this.add(lt);let ct=new o(Y,zs(43));ct.position.set(-0.462,8.89,14.52),ct.scale.set(4.38,5.441,0.088),this.add(ct);let ut=new o(Y,zs(20));ut.position.set(3.235,11.486,-12.541),ut.scale.set(2.5,2,0.1),this.add(ut);let ht=new o(Y,zs(100));ht.position.set(0,20,0),ht.scale.set(1,0.1,1),this.add(ht)}dispose(){let Y=new Set;this.traverse((tt)=>{if(tt.isMesh)Y.add(tt.geometry),Y.add(tt.material)});for(let tt of Y)tt.dispose()}}function zs(Y){return new ra({color:0,emissive:16777215,emissiveIntensity:Y})}
export{Ae,H,p,U,ce,he,ue,de,D,fe,pe,me,j,ee,Ee,L,Re,Z,M,te,N,b,ze,Ce,ke,ge,ne,m,R,a,g,n,I,e,s,h,_,i,l,x,t,_e,F,A,T,f,w,v,xe,ie,E,y,o,Ie,ve,ye,V,se,Se,re,Pe,Le,Me,Ne,De,be,K,O,S,Te,u,d,P,B,W,X,J,Ue,z,we,Q,c,Fe,ae,k,C,q,Oe,Be,r,G,oe,le};
