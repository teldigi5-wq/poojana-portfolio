var Ol="187";var Bl=0,va=1,zl=2;var ws=1,q=2,ss=3,rs=0,u=1,qn=2,_=0,Rs=1,I=2,ya=3,Sa=4,Gl=5;var as=100,kl=101,Hl=102,Wl=103,Vl=104,Xl=200,ql=201,Yl=202,Zl=203,Jl=204,$l=205,Kl=206,Ql=207,jl=208,tc=209,ec=210,nc=211,ic=212,sc=213,rc=214,ac=0,oc=1,lc=2,Ma=3,cc=4,hc=5,uc=6,dc=7,fc=0,pc=1,mc=2,Yn=0,P=1,L=2,N=3,b=4,D=5,U=6,F=7;var Cs=301,os=302,pr=303,mr=304,Y=1000,gr=1001,gc=1002,gi=1003,_c=1004;var Is=1005;var Dn=1006,_r=1007;var _i=1008;var kn=1009,xc=1010,vc=1011,Ps=1012,ba=1013,xi=1014,si=1015,d=1016,Ta=1017,Ea=1018,Pi=1020,yc=35902,Sc=35899,Mc=1021,bc=1022,ri=1023,ls=1026,vi=1027,Tc=1028,Aa=1029,Li=1030,wa=1031;var Ra=1033,xr=33776,vr=33777,yr=33778,Sr=33779,Ca=35840,Ia=35841,Pa=35842,La=35843,Na=36196,Da=37492,Ua=37496,Fa=37488,Oa=37489,Mr=37490,Ba=37491,za=37808,Ga=37809,ka=37810,Ha=37811,Wa=37812,Va=37813,Xa=37814,qa=37815,Ya=37816,Za=37817,Ja=37818,$a=37819,Ka=37820,Qa=37821,ja=36492,to=36494,eo=36495,no=36283,io=36284,br=36285,so=36286;var ro=0,Ec=1,Ni="",y="srgb",ao="srgb-linear",oo="linear",s="srgb";var Ac=512,wc=513,Rc=514,lo=515,Cc=516,Ic=517,co=518,ho=519;var uo="300 es",fo=2000;function zh(tt){for(let et=tt.length-1;et>=0;--et)if(tt[et]>=65535)return!0;return!1}function Gh(tt){return ArrayBuffer.isView(tt)&&!(tt instanceof DataView)}function bs(tt){return document.createElementNS("http://www.w3.org/1999/xhtml",tt)}function Pc(){let tt=bs("canvas");return tt.style.display="block",tt}var rl={},es=null;function po(...tt){let et="THREE."+tt.shift();if(es)es("log",et,...tt);else console.log(et,...tt)}function Lc(tt){let et=tt[0];if(typeof et==="string"&&et.startsWith("TSL:")){let nt=tt[1];if(nt&&nt.isStackTrace)tt[0]+=" "+nt.getLocation();else tt[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return tt}function Oe(...tt){tt=Lc(tt);let et="THREE."+tt.shift();if(es)es("warn",et,...tt);else{let nt=tt[0];if(nt&&nt.isStackTrace)console.warn(nt.getError(et));else console.warn(et,...tt)}}function Be(...tt){tt=Lc(tt);let et="THREE."+tt.shift();if(es)es("error",et,...tt);else{let nt=tt[0];if(nt&&nt.isStackTrace)console.error(nt.getError(et));else console.error(et,...tt)}}function xs(...tt){let et=tt.join(" ");if(et in rl)return;rl[et]=!0,Oe(...tt)}function Nc(tt,et,nt){return new Promise(function(it,st){function rt(){switch(tt.clientWaitSync(et,tt.SYNC_FLUSH_COMMANDS_BIT,0)){case tt.WAIT_FAILED:st();break;case tt.TIMEOUT_EXPIRED:setTimeout(rt,nt);break;default:it()}}setTimeout(rt,nt)})}var Dc={[0]:0,[2]:6,[4]:4,[3]:5,[1]:1,[6]:2,[7]:7,[5]:3};class ai{addEventListener(tt,et){if(this._listeners===void 0)this._listeners={};let nt=this._listeners;if(nt[tt]===void 0)nt[tt]=[];if(nt[tt].indexOf(et)===-1)nt[tt].push(et)}hasEventListener(tt,et){let nt=this._listeners;if(nt===void 0)return!1;return nt[tt]!==void 0&&nt[tt].indexOf(et)!==-1}removeEventListener(tt,et){let nt=this._listeners;if(nt===void 0)return;let it=nt[tt];if(it!==void 0){let st=it.indexOf(et);if(st!==-1)it.splice(st,1)}}dispatchEvent(tt){let et=this._listeners;if(et===void 0)return;let nt=et[tt.type];if(nt!==void 0){tt.target=this;let it=nt.slice(0);for(let st=0,rt=it.length;st<rt;st++)it[st].call(this,tt);tt.target=null}}}var An=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],al=1234567,vs=Math.PI/180,ns=180/Math.PI;function Di(){let tt=Math.random()*4294967295|0,et=Math.random()*4294967295|0,nt=Math.random()*4294967295|0,it=Math.random()*4294967295|0;return(An[tt&255]+An[tt>>8&255]+An[tt>>16&255]+An[tt>>24&255]+"-"+An[et&255]+An[et>>8&255]+"-"+An[et>>16&15|64]+An[et>>24&255]+"-"+An[nt&63|128]+An[nt>>8&255]+"-"+An[nt>>16&255]+An[nt>>24&255]+An[it&255]+An[it>>8&255]+An[it>>16&255]+An[it>>24&255]).toLowerCase()}function Ze(tt,et,nt){return Math.max(et,Math.min(nt,tt))}function mo(tt,et){return(tt%et+et)%et}function kh(tt,et,nt,it,st){return it+(tt-et)*(st-it)/(nt-et)}function Hh(tt,et,nt){if(tt!==et)return(nt-tt)/(et-tt);else return 0}function ys(tt,et,nt){return(1-nt)*tt+nt*et}function Wh(tt,et,nt,it){return ys(tt,et,1-Math.exp(-nt*it))}function Vh(tt,et=1){return et-Math.abs(mo(tt,et*2)-et)}function Xh(tt,et,nt){if(tt<=et)return 0;if(tt>=nt)return 1;return tt=(tt-et)/(nt-et),tt*tt*(3-2*tt)}function qh(tt,et,nt){if(tt<=et)return 0;if(tt>=nt)return 1;return tt=(tt-et)/(nt-et),tt*tt*tt*(tt*(tt*6-15)+10)}function Yh(tt,et){return tt+Math.floor(Math.random()*(et-tt+1))}function Zh(tt,et){return tt+Math.random()*(et-tt)}function Jh(tt){return tt*(0.5-Math.random())}function $h(tt){if(tt!==void 0)al=tt;let et=al+=1831565813;return et=Math.imul(et^et>>>15,et|1),et^=et+Math.imul(et^et>>>7,et|61),((et^et>>>14)>>>0)/4294967296}function Kh(tt){return tt*vs}function Qh(tt){return tt*ns}function jh(tt){return tt>0&&Number.isInteger(tt)&&2**Math.round(Math.log2(tt))===tt}function tu(tt){return Math.pow(2,Math.ceil(Math.log(tt)/Math.LN2))}function go(tt){return Math.pow(2,Math.floor(Math.log(tt)/Math.LN2))}function eu(tt,et,nt,it,st){let{cos:rt,sin:at}=Math,ot=rt(nt/2),lt=at(nt/2),ct=rt((et+it)/2),ut=at((et+it)/2),dt=rt((et-it)/2),ht=at((et-it)/2),pt=rt((it-et)/2),xt=at((it-et)/2);switch(st){case"XYX":tt.set(ot*ut,lt*dt,lt*ht,ot*ct);break;case"YZY":tt.set(lt*ht,ot*ut,lt*dt,ot*ct);break;case"ZXZ":tt.set(lt*dt,lt*ht,ot*ut,ot*ct);break;case"XZX":tt.set(ot*ut,lt*xt,lt*pt,ot*ct);break;case"YXY":tt.set(lt*pt,ot*ut,lt*xt,ot*ct);break;case"ZYZ":tt.set(lt*xt,lt*pt,ot*ut,ot*ct);break;default:Oe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+st)}}function _o(tt){switch(tt.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Uc(tt,et){if(et.constructor===Float32Array)return tt;let nt=_o(et);if(nt===void 0)throw Error("THREE.MathUtils: Invalid component type.");return Math.max(tt/nt,-1)}function Fc(tt,et){if(et.constructor===Float32Array)return tt;let nt=_o(et);if(nt===void 0)throw Error("THREE.MathUtils: Invalid component type.");return Math.round(tt*nt)}var S={DEG2RAD:vs,RAD2DEG:ns,generateUUID:Di,clamp:Ze,euclideanModulo:mo,mapLinear:kh,inverseLerp:Hh,lerp:ys,damp:Wh,pingpong:Vh,smoothstep:Xh,smootherstep:qh,randInt:Yh,randFloat:Zh,randFloatSpread:Jh,seededRandom:$h,degToRad:Kh,radToDeg:Qh,isPowerOfTwo:jh,ceilPowerOfTwo:tu,floorPowerOfTwo:go,setQuaternionFromProperEuler:eu,normalize:Fc,denormalize:Uc};class t{static{this.prototype.isVector2=!0}constructor(tt=0,et=0){this.x=tt,this.y=et}get width(){return this.x}set width(tt){this.x=tt}get height(){return this.y}set height(tt){this.y=tt}set(tt,et){return this.x=tt,this.y=et,this}setScalar(tt){return this.x=tt,this.y=tt,this}setX(tt){return this.x=tt,this}setY(tt){return this.y=tt,this}setComponent(tt,et){switch(tt){case 0:this.x=et;break;case 1:this.y=et;break;default:throw Error("THREE.Vector2: index is out of range: "+tt)}return this}getComponent(tt){switch(tt){case 0:return this.x;case 1:return this.y;default:throw Error("THREE.Vector2: index is out of range: "+tt)}}clone(){return new this.constructor(this.x,this.y)}copy(tt){return this.x=tt.x,this.y=tt.y,this}add(tt){return this.x+=tt.x,this.y+=tt.y,this}addScalar(tt){return this.x+=tt,this.y+=tt,this}addVectors(tt,et){return this.x=tt.x+et.x,this.y=tt.y+et.y,this}addScaledVector(tt,et){return this.x+=tt.x*et,this.y+=tt.y*et,this}sub(tt){return this.x-=tt.x,this.y-=tt.y,this}subScalar(tt){return this.x-=tt,this.y-=tt,this}subVectors(tt,et){return this.x=tt.x-et.x,this.y=tt.y-et.y,this}multiply(tt){return this.x*=tt.x,this.y*=tt.y,this}multiplyScalar(tt){return this.x*=tt,this.y*=tt,this}divide(tt){return this.x/=tt.x,this.y/=tt.y,this}divideScalar(tt){return this.multiplyScalar(1/tt)}applyMatrix3(tt){let et=this.x,nt=this.y,it=tt.elements;return this.x=it[0]*et+it[3]*nt+it[6],this.y=it[1]*et+it[4]*nt+it[7],this}min(tt){return this.x=Math.min(this.x,tt.x),this.y=Math.min(this.y,tt.y),this}max(tt){return this.x=Math.max(this.x,tt.x),this.y=Math.max(this.y,tt.y),this}clamp(tt,et){return this.x=Ze(this.x,tt.x,et.x),this.y=Ze(this.y,tt.y,et.y),this}clampScalar(tt,et){return this.x=Ze(this.x,tt,et),this.y=Ze(this.y,tt,et),this}clampLength(tt,et){let nt=this.length();return this.divideScalar(nt||1).multiplyScalar(Ze(nt,tt,et))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(tt){return this.x*tt.x+this.y*tt.y}cross(tt){return this.x*tt.y-this.y*tt.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(tt){let et=Math.sqrt(this.lengthSq()*tt.lengthSq());if(et===0)return Math.PI/2;let nt=this.dot(tt)/et;return Math.acos(Ze(nt,-1,1))}distanceTo(tt){return Math.sqrt(this.distanceToSquared(tt))}distanceToSquared(tt){let et=this.x-tt.x,nt=this.y-tt.y;return et*et+nt*nt}manhattanDistanceTo(tt){return Math.abs(this.x-tt.x)+Math.abs(this.y-tt.y)}setLength(tt){return this.normalize().multiplyScalar(tt)}lerp(tt,et){return this.x+=(tt.x-this.x)*et,this.y+=(tt.y-this.y)*et,this}lerpVectors(tt,et,nt){return this.x=tt.x+(et.x-tt.x)*nt,this.y=tt.y+(et.y-tt.y)*nt,this}equals(tt){return tt.x===this.x&&tt.y===this.y}fromArray(tt,et=0){return this.x=tt[et],this.y=tt[et+1],this}toArray(tt=[],et=0){return tt[et]=this.x,tt[et+1]=this.y,tt}fromBufferAttribute(tt,et){return this.x=tt.getX(et),this.y=tt.getY(et),this}rotateAround(tt,et){let nt=Math.cos(et),it=Math.sin(et),st=this.x-tt.x,rt=this.y-tt.y;return this.x=st*nt-rt*it+tt.x,this.y=st*it+rt*nt+tt.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class oi{constructor(tt=0,et=0,nt=0,it=1){this.isQuaternion=!0,this._x=tt,this._y=et,this._z=nt,this._w=it}static slerpFlat(tt,et,nt,it,st,rt,at){let ot=nt[it+0],lt=nt[it+1],ct=nt[it+2],ut=nt[it+3],dt=st[rt+0],ht=st[rt+1],pt=st[rt+2],xt=st[rt+3];if(ut!==xt||ot!==dt||lt!==ht||ct!==pt){let Mt=ot*dt+lt*ht+ct*pt+ut*xt;if(Mt<0)dt=-dt,ht=-ht,pt=-pt,xt=-xt,Mt=-Mt;let ft=1-at;if(Mt<0.9995){let mt=Math.acos(Mt),Et=Math.sin(mt);ft=Math.sin(ft*mt)/Et,at=Math.sin(at*mt)/Et,ot=ot*ft+dt*at,lt=lt*ft+ht*at,ct=ct*ft+pt*at,ut=ut*ft+xt*at}else{ot=ot*ft+dt*at,lt=lt*ft+ht*at,ct=ct*ft+pt*at,ut=ut*ft+xt*at;let mt=1/Math.sqrt(ot*ot+lt*lt+ct*ct+ut*ut);ot*=mt,lt*=mt,ct*=mt,ut*=mt}}tt[et]=ot,tt[et+1]=lt,tt[et+2]=ct,tt[et+3]=ut}static multiplyQuaternionsFlat(tt,et,nt,it,st,rt){let at=nt[it],ot=nt[it+1],lt=nt[it+2],ct=nt[it+3],ut=st[rt],dt=st[rt+1],ht=st[rt+2],pt=st[rt+3];return tt[et]=at*pt+ct*ut+ot*ht-lt*dt,tt[et+1]=ot*pt+ct*dt+lt*ut-at*ht,tt[et+2]=lt*pt+ct*ht+at*dt-ot*ut,tt[et+3]=ct*pt-at*ut-ot*dt-lt*ht,tt}get x(){return this._x}set x(tt){this._x=tt,this._onChangeCallback()}get y(){return this._y}set y(tt){this._y=tt,this._onChangeCallback()}get z(){return this._z}set z(tt){this._z=tt,this._onChangeCallback()}get w(){return this._w}set w(tt){this._w=tt,this._onChangeCallback()}set(tt,et,nt,it){return this._x=tt,this._y=et,this._z=nt,this._w=it,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(tt){return this._x=tt.x,this._y=tt.y,this._z=tt.z,this._w=tt.w,this._onChangeCallback(),this}setFromEuler(tt,et=!0){let{_x:nt,_y:it,_z:st,_order:rt}=tt,{cos:at,sin:ot}=Math,lt=at(nt/2),ct=at(it/2),ut=at(st/2),dt=ot(nt/2),ht=ot(it/2),pt=ot(st/2);switch(rt){case"XYZ":this._x=dt*ct*ut+lt*ht*pt,this._y=lt*ht*ut-dt*ct*pt,this._z=lt*ct*pt+dt*ht*ut,this._w=lt*ct*ut-dt*ht*pt;break;case"YXZ":this._x=dt*ct*ut+lt*ht*pt,this._y=lt*ht*ut-dt*ct*pt,this._z=lt*ct*pt-dt*ht*ut,this._w=lt*ct*ut+dt*ht*pt;break;case"ZXY":this._x=dt*ct*ut-lt*ht*pt,this._y=lt*ht*ut+dt*ct*pt,this._z=lt*ct*pt+dt*ht*ut,this._w=lt*ct*ut-dt*ht*pt;break;case"ZYX":this._x=dt*ct*ut-lt*ht*pt,this._y=lt*ht*ut+dt*ct*pt,this._z=lt*ct*pt-dt*ht*ut,this._w=lt*ct*ut+dt*ht*pt;break;case"YZX":this._x=dt*ct*ut+lt*ht*pt,this._y=lt*ht*ut+dt*ct*pt,this._z=lt*ct*pt-dt*ht*ut,this._w=lt*ct*ut-dt*ht*pt;break;case"XZY":this._x=dt*ct*ut-lt*ht*pt,this._y=lt*ht*ut-dt*ct*pt,this._z=lt*ct*pt+dt*ht*ut,this._w=lt*ct*ut+dt*ht*pt;break;default:Oe("Quaternion: .setFromEuler() encountered an unknown order: "+rt)}if(et===!0)this._onChangeCallback();return this}setFromAxisAngle(tt,et){let nt=et/2,it=Math.sin(nt);return this._x=tt.x*it,this._y=tt.y*it,this._z=tt.z*it,this._w=Math.cos(nt),this._onChangeCallback(),this}setFromRotationMatrix(tt){let et=tt.elements,nt=et[0],it=et[4],st=et[8],rt=et[1],at=et[5],ot=et[9],lt=et[2],ct=et[6],ut=et[10],dt=nt+at+ut;if(dt>0){let ht=0.5/Math.sqrt(dt+1);this._w=0.25/ht,this._x=(ct-ot)*ht,this._y=(st-lt)*ht,this._z=(rt-it)*ht}else if(nt>at&&nt>ut){let ht=2*Math.sqrt(1+nt-at-ut);this._w=(ct-ot)/ht,this._x=0.25*ht,this._y=(it+rt)/ht,this._z=(st+lt)/ht}else if(at>ut){let ht=2*Math.sqrt(1+at-nt-ut);this._w=(st-lt)/ht,this._x=(it+rt)/ht,this._y=0.25*ht,this._z=(ot+ct)/ht}else{let ht=2*Math.sqrt(1+ut-nt-at);this._w=(rt-it)/ht,this._x=(st+lt)/ht,this._y=(ot+ct)/ht,this._z=0.25*ht}return this._onChangeCallback(),this}setFromUnitVectors(tt,et){let nt=tt.dot(et)+1;if(nt<0.00000001)if(nt=0,Math.abs(tt.x)>Math.abs(tt.z))this._x=-tt.y,this._y=tt.x,this._z=0,this._w=nt;else this._x=0,this._y=-tt.z,this._z=tt.y,this._w=nt;else this._x=tt.y*et.z-tt.z*et.y,this._y=tt.z*et.x-tt.x*et.z,this._z=tt.x*et.y-tt.y*et.x,this._w=nt;return this.normalize()}angleTo(tt){return 2*Math.acos(Math.abs(Ze(this.dot(tt),-1,1)))}rotateTowards(tt,et){let nt=this.angleTo(tt);if(nt===0)return this;let it=Math.min(1,et/nt);return this.slerp(tt,it),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(tt){return this._x*tt._x+this._y*tt._y+this._z*tt._z+this._w*tt._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let tt=this.length();if(tt===0)this._x=0,this._y=0,this._z=0,this._w=1;else tt=1/tt,this._x=this._x*tt,this._y=this._y*tt,this._z=this._z*tt,this._w=this._w*tt;return this._onChangeCallback(),this}multiply(tt){return this.multiplyQuaternions(this,tt)}premultiply(tt){return this.multiplyQuaternions(tt,this)}multiplyQuaternions(tt,et){let{_x:nt,_y:it,_z:st,_w:rt}=tt,{_x:at,_y:ot,_z:lt,_w:ct}=et;return this._x=nt*ct+rt*at+it*lt-st*ot,this._y=it*ct+rt*ot+st*at-nt*lt,this._z=st*ct+rt*lt+nt*ot-it*at,this._w=rt*ct-nt*at-it*ot-st*lt,this._onChangeCallback(),this}slerp(tt,et){let{_x:nt,_y:it,_z:st,_w:rt}=tt,at=this.dot(tt);if(at<0)nt=-nt,it=-it,st=-st,rt=-rt,at=-at;let ot=1-et;if(at<0.9995){let lt=Math.acos(at),ct=Math.sin(lt);ot=Math.sin(ot*lt)/ct,et=Math.sin(et*lt)/ct,this._x=this._x*ot+nt*et,this._y=this._y*ot+it*et,this._z=this._z*ot+st*et,this._w=this._w*ot+rt*et,this._onChangeCallback()}else this._x=this._x*ot+nt*et,this._y=this._y*ot+it*et,this._z=this._z*ot+st*et,this._w=this._w*ot+rt*et,this.normalize();return this}slerpQuaternions(tt,et,nt){return this.copy(tt).slerp(et,nt)}random(){let tt=2*Math.PI*Math.random(),et=2*Math.PI*Math.random(),nt=Math.random(),it=Math.sqrt(1-nt),st=Math.sqrt(nt);return this.set(it*Math.sin(tt),it*Math.cos(tt),st*Math.sin(et),st*Math.cos(et))}equals(tt){return tt._x===this._x&&tt._y===this._y&&tt._z===this._z&&tt._w===this._w}fromArray(tt,et=0){return this._x=tt[et],this._y=tt[et+1],this._z=tt[et+2],this._w=tt[et+3],this._onChangeCallback(),this}toArray(tt=[],et=0){return tt[et]=this._x,tt[et+1]=this._y,tt[et+2]=this._z,tt[et+3]=this._w,tt}fromBufferAttribute(tt,et){return this._x=tt.getX(et),this._y=tt.getY(et),this._z=tt.getZ(et),this._w=tt.getW(et),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(tt){return this._onChangeCallback=tt,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class e{static{this.prototype.isVector3=!0}constructor(tt=0,et=0,nt=0){this.x=tt,this.y=et,this.z=nt}set(tt,et,nt){if(nt===void 0)nt=this.z;return this.x=tt,this.y=et,this.z=nt,this}setScalar(tt){return this.x=tt,this.y=tt,this.z=tt,this}setX(tt){return this.x=tt,this}setY(tt){return this.y=tt,this}setZ(tt){return this.z=tt,this}setComponent(tt,et){switch(tt){case 0:this.x=et;break;case 1:this.y=et;break;case 2:this.z=et;break;default:throw Error("THREE.Vector3: index is out of range: "+tt)}return this}getComponent(tt){switch(tt){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("THREE.Vector3: index is out of range: "+tt)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(tt){return this.x=tt.x,this.y=tt.y,this.z=tt.z,this}add(tt){return this.x+=tt.x,this.y+=tt.y,this.z+=tt.z,this}addScalar(tt){return this.x+=tt,this.y+=tt,this.z+=tt,this}addVectors(tt,et){return this.x=tt.x+et.x,this.y=tt.y+et.y,this.z=tt.z+et.z,this}addScaledVector(tt,et){return this.x+=tt.x*et,this.y+=tt.y*et,this.z+=tt.z*et,this}sub(tt){return this.x-=tt.x,this.y-=tt.y,this.z-=tt.z,this}subScalar(tt){return this.x-=tt,this.y-=tt,this.z-=tt,this}subVectors(tt,et){return this.x=tt.x-et.x,this.y=tt.y-et.y,this.z=tt.z-et.z,this}multiply(tt){return this.x*=tt.x,this.y*=tt.y,this.z*=tt.z,this}multiplyScalar(tt){return this.x*=tt,this.y*=tt,this.z*=tt,this}multiplyVectors(tt,et){return this.x=tt.x*et.x,this.y=tt.y*et.y,this.z=tt.z*et.z,this}applyEuler(tt){return this.applyQuaternion(ol.setFromEuler(tt))}applyAxisAngle(tt,et){return this.applyQuaternion(ol.setFromAxisAngle(tt,et))}applyMatrix3(tt){let et=this.x,nt=this.y,it=this.z,st=tt.elements;return this.x=st[0]*et+st[3]*nt+st[6]*it,this.y=st[1]*et+st[4]*nt+st[7]*it,this.z=st[2]*et+st[5]*nt+st[8]*it,this}applyNormalMatrix(tt){return this.applyMatrix3(tt).normalize()}applyMatrix4(tt){let et=this.x,nt=this.y,it=this.z,st=tt.elements,rt=1/(st[3]*et+st[7]*nt+st[11]*it+st[15]);return this.x=(st[0]*et+st[4]*nt+st[8]*it+st[12])*rt,this.y=(st[1]*et+st[5]*nt+st[9]*it+st[13])*rt,this.z=(st[2]*et+st[6]*nt+st[10]*it+st[14])*rt,this}applyQuaternion(tt){let et=this.x,nt=this.y,it=this.z,{x:st,y:rt,z:at,w:ot}=tt,lt=2*(rt*it-at*nt),ct=2*(at*et-st*it),ut=2*(st*nt-rt*et);return this.x=et+ot*lt+rt*ut-at*ct,this.y=nt+ot*ct+at*lt-st*ut,this.z=it+ot*ut+st*ct-rt*lt,this}project(tt){return this.applyMatrix4(tt.matrixWorldInverse).applyMatrix4(tt.projectionMatrix)}unproject(tt){return this.applyMatrix4(tt.projectionMatrixInverse).applyMatrix4(tt.matrixWorld)}transformDirection(tt){let et=this.x,nt=this.y,it=this.z,st=tt.elements;return this.x=st[0]*et+st[4]*nt+st[8]*it,this.y=st[1]*et+st[5]*nt+st[9]*it,this.z=st[2]*et+st[6]*nt+st[10]*it,this.normalize()}divide(tt){return this.x/=tt.x,this.y/=tt.y,this.z/=tt.z,this}divideScalar(tt){return this.multiplyScalar(1/tt)}min(tt){return this.x=Math.min(this.x,tt.x),this.y=Math.min(this.y,tt.y),this.z=Math.min(this.z,tt.z),this}max(tt){return this.x=Math.max(this.x,tt.x),this.y=Math.max(this.y,tt.y),this.z=Math.max(this.z,tt.z),this}clamp(tt,et){return this.x=Ze(this.x,tt.x,et.x),this.y=Ze(this.y,tt.y,et.y),this.z=Ze(this.z,tt.z,et.z),this}clampScalar(tt,et){return this.x=Ze(this.x,tt,et),this.y=Ze(this.y,tt,et),this.z=Ze(this.z,tt,et),this}clampLength(tt,et){let nt=this.length();return this.divideScalar(nt||1).multiplyScalar(Ze(nt,tt,et))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(tt){return this.x*tt.x+this.y*tt.y+this.z*tt.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(tt){return this.normalize().multiplyScalar(tt)}lerp(tt,et){return this.x+=(tt.x-this.x)*et,this.y+=(tt.y-this.y)*et,this.z+=(tt.z-this.z)*et,this}lerpVectors(tt,et,nt){return this.x=tt.x+(et.x-tt.x)*nt,this.y=tt.y+(et.y-tt.y)*nt,this.z=tt.z+(et.z-tt.z)*nt,this}cross(tt){return this.crossVectors(this,tt)}crossVectors(tt,et){let{x:nt,y:it,z:st}=tt,{x:rt,y:at,z:ot}=et;return this.x=it*ot-st*at,this.y=st*rt-nt*ot,this.z=nt*at-it*rt,this}projectOnVector(tt){let et=tt.lengthSq();if(et===0)return this.set(0,0,0);let nt=tt.dot(this)/et;return this.copy(tt).multiplyScalar(nt)}projectOnPlane(tt){return Yr.copy(this).projectOnVector(tt),this.sub(Yr)}reflect(tt){return this.sub(Yr.copy(tt).multiplyScalar(2*this.dot(tt)))}angleTo(tt){let et=Math.sqrt(this.lengthSq()*tt.lengthSq());if(et===0)return Math.PI/2;let nt=this.dot(tt)/et;return Math.acos(Ze(nt,-1,1))}distanceTo(tt){return Math.sqrt(this.distanceToSquared(tt))}distanceToSquared(tt){let et=this.x-tt.x,nt=this.y-tt.y,it=this.z-tt.z;return et*et+nt*nt+it*it}manhattanDistanceTo(tt){return Math.abs(this.x-tt.x)+Math.abs(this.y-tt.y)+Math.abs(this.z-tt.z)}setFromSpherical(tt){return this.setFromSphericalCoords(tt.radius,tt.phi,tt.theta)}setFromSphericalCoords(tt,et,nt){let it=Math.sin(et)*tt;return this.x=it*Math.sin(nt),this.y=Math.cos(et)*tt,this.z=it*Math.cos(nt),this}setFromCylindrical(tt){return this.setFromCylindricalCoords(tt.radius,tt.theta,tt.y)}setFromCylindricalCoords(tt,et,nt){return this.x=tt*Math.sin(et),this.y=nt,this.z=tt*Math.cos(et),this}setFromMatrixPosition(tt){let et=tt.elements;return this.x=et[12],this.y=et[13],this.z=et[14],this}setFromMatrixScale(tt){let et=this.setFromMatrixColumn(tt,0).length(),nt=this.setFromMatrixColumn(tt,1).length(),it=this.setFromMatrixColumn(tt,2).length();return this.x=et,this.y=nt,this.z=it,this}setFromMatrixColumn(tt,et){return this.fromArray(tt.elements,et*4)}setFromMatrix3Column(tt,et){return this.fromArray(tt.elements,et*3)}setFromEuler(tt){return this.x=tt._x,this.y=tt._y,this.z=tt._z,this}setFromColor(tt){return this.x=tt.r,this.y=tt.g,this.z=tt.b,this}equals(tt){return tt.x===this.x&&tt.y===this.y&&tt.z===this.z}fromArray(tt,et=0){return this.x=tt[et],this.y=tt[et+1],this.z=tt[et+2],this}toArray(tt=[],et=0){return tt[et]=this.x,tt[et+1]=this.y,tt[et+2]=this.z,tt}fromBufferAttribute(tt,et){return this.x=tt.getX(et),this.y=tt.getY(et),this.z=tt.getZ(et),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let tt=Math.random()*Math.PI*2,et=Math.random()*2-1,nt=Math.sqrt(1-et*et);return this.x=nt*Math.cos(tt),this.y=et,this.z=nt*Math.sin(tt),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var Yr=new e,ol=new oi;class Ge{static{this.prototype.isMatrix3=!0}constructor(tt,et,nt,it,st,rt,at,ot,lt){if(this.elements=[1,0,0,0,1,0,0,0,1],tt!==void 0)this.set(tt,et,nt,it,st,rt,at,ot,lt)}set(tt,et,nt,it,st,rt,at,ot,lt){let ct=this.elements;return ct[0]=tt,ct[1]=it,ct[2]=at,ct[3]=et,ct[4]=st,ct[5]=ot,ct[6]=nt,ct[7]=rt,ct[8]=lt,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(tt){let et=this.elements,nt=tt.elements;return et[0]=nt[0],et[1]=nt[1],et[2]=nt[2],et[3]=nt[3],et[4]=nt[4],et[5]=nt[5],et[6]=nt[6],et[7]=nt[7],et[8]=nt[8],this}extractBasis(tt,et,nt){return tt.setFromMatrix3Column(this,0),et.setFromMatrix3Column(this,1),nt.setFromMatrix3Column(this,2),this}setFromMatrix4(tt){let et=tt.elements;return this.set(et[0],et[4],et[8],et[1],et[5],et[9],et[2],et[6],et[10]),this}multiply(tt){return this.multiplyMatrices(this,tt)}premultiply(tt){return this.multiplyMatrices(tt,this)}multiplyMatrices(tt,et){let nt=tt.elements,it=et.elements,st=this.elements,rt=nt[0],at=nt[3],ot=nt[6],lt=nt[1],ct=nt[4],ut=nt[7],dt=nt[2],ht=nt[5],pt=nt[8],xt=it[0],Mt=it[3],ft=it[6],mt=it[1],Et=it[4],Tt=it[7],yt=it[2],At=it[5],Rt=it[8];return st[0]=rt*xt+at*mt+ot*yt,st[3]=rt*Mt+at*Et+ot*At,st[6]=rt*ft+at*Tt+ot*Rt,st[1]=lt*xt+ct*mt+ut*yt,st[4]=lt*Mt+ct*Et+ut*At,st[7]=lt*ft+ct*Tt+ut*Rt,st[2]=dt*xt+ht*mt+pt*yt,st[5]=dt*Mt+ht*Et+pt*At,st[8]=dt*ft+ht*Tt+pt*Rt,this}multiplyScalar(tt){let et=this.elements;return et[0]*=tt,et[3]*=tt,et[6]*=tt,et[1]*=tt,et[4]*=tt,et[7]*=tt,et[2]*=tt,et[5]*=tt,et[8]*=tt,this}determinant(){let tt=this.elements,et=tt[0],nt=tt[1],it=tt[2],st=tt[3],rt=tt[4],at=tt[5],ot=tt[6],lt=tt[7],ct=tt[8];return et*rt*ct-et*at*lt-nt*st*ct+nt*at*ot+it*st*lt-it*rt*ot}invert(){let tt=this.elements,et=tt[0],nt=tt[1],it=tt[2],st=tt[3],rt=tt[4],at=tt[5],ot=tt[6],lt=tt[7],ct=tt[8],ut=ct*rt-at*lt,dt=at*ot-ct*st,ht=lt*st-rt*ot,pt=et*ut+nt*dt+it*ht;if(pt===0)return this.set(0,0,0,0,0,0,0,0,0);let xt=1/pt;return tt[0]=ut*xt,tt[1]=(it*lt-ct*nt)*xt,tt[2]=(at*nt-it*rt)*xt,tt[3]=dt*xt,tt[4]=(ct*et-it*ot)*xt,tt[5]=(it*st-at*et)*xt,tt[6]=ht*xt,tt[7]=(nt*ot-lt*et)*xt,tt[8]=(rt*et-nt*st)*xt,this}transpose(){let tt,et=this.elements;return tt=et[1],et[1]=et[3],et[3]=tt,tt=et[2],et[2]=et[6],et[6]=tt,tt=et[5],et[5]=et[7],et[7]=tt,this}getNormalMatrix(tt){return this.setFromMatrix4(tt).invert().transpose()}transposeIntoArray(tt){let et=this.elements;return tt[0]=et[0],tt[1]=et[3],tt[2]=et[6],tt[3]=et[1],tt[4]=et[4],tt[5]=et[7],tt[6]=et[2],tt[7]=et[5],tt[8]=et[8],this}setUvTransform(tt,et,nt,it,st,rt,at){let ot=Math.cos(st),lt=Math.sin(st);return this.set(nt*ot,nt*lt,-nt*(ot*rt+lt*at)+rt+tt,-it*lt,it*ot,-it*(-lt*rt+ot*at)+at+et,0,0,1),this}scale(tt,et){return xs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Zr.makeScale(tt,et)),this}rotate(tt){return xs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Zr.makeRotation(-tt)),this}translate(tt,et){return xs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Zr.makeTranslation(tt,et)),this}makeTranslation(tt,et){if(tt.isVector2)this.set(1,0,tt.x,0,1,tt.y,0,0,1);else this.set(1,0,tt,0,1,et,0,0,1);return this}makeRotation(tt){let et=Math.cos(tt),nt=Math.sin(tt);return this.set(et,-nt,0,nt,et,0,0,0,1),this}makeScale(tt,et){return this.set(tt,0,0,0,et,0,0,0,1),this}equals(tt){let et=this.elements,nt=tt.elements;for(let it=0;it<9;it++)if(et[it]!==nt[it])return!1;return!0}fromArray(tt,et=0){for(let nt=0;nt<9;nt++)this.elements[nt]=tt[nt+et];return this}toArray(tt=[],et=0){let nt=this.elements;return tt[et]=nt[0],tt[et+1]=nt[1],tt[et+2]=nt[2],tt[et+3]=nt[3],tt[et+4]=nt[4],tt[et+5]=nt[5],tt[et+6]=nt[6],tt[et+7]=nt[7],tt[et+8]=nt[8],tt}clone(){return new this.constructor().fromArray(this.elements)}}var Zr=new Ge,ll=new Ge().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),cl=new Ge().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function nu(){let tt={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(st,rt,at){if(this.enabled===!1||rt===at||!rt||!at)return st;if(this.spaces[rt].transfer==="srgb")st.r=ii(st.r),st.g=ii(st.g),st.b=ii(st.b);if(this.spaces[rt].primaries!==this.spaces[at].primaries)st.applyMatrix3(this.spaces[rt].toXYZ),st.applyMatrix3(this.spaces[at].fromXYZ);if(this.spaces[at].transfer==="srgb")st.r=ts(st.r),st.g=ts(st.g),st.b=ts(st.b);return st},workingToColorSpace:function(st,rt){return this.convert(st,this.workingColorSpace,rt)},colorSpaceToWorking:function(st,rt){return this.convert(st,rt,this.workingColorSpace)},getPrimaries:function(st){return this.spaces[st].primaries},getTransfer:function(st){if(st==="")return"linear";return this.spaces[st].transfer},getToneMappingMode:function(st){return this.spaces[st].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(st,rt=this.workingColorSpace){return st.fromArray(this.spaces[rt].luminanceCoefficients)},define:function(st){Object.assign(this.spaces,st)},_getMatrix:function(st,rt,at){return st.copy(this.spaces[at].fromXYZ).multiply(this.spaces[rt].toXYZ)},_getDrawingBufferColorSpace:function(st){return this.spaces[st].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(st=this.workingColorSpace){return this.spaces[st].workingColorSpaceConfig.unpackColorSpace}},et=[0.64,0.33,0.3,0.6,0.15,0.06],nt=[0.2126,0.7152,0.0722],it=[0.3127,0.329];return tt.define({["srgb-linear"]:{primaries:et,whitePoint:it,transfer:"linear",toXYZ:ll,fromXYZ:cl,luminanceCoefficients:nt,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:et,whitePoint:it,transfer:"srgb",toXYZ:ll,fromXYZ:cl,luminanceCoefficients:nt,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),tt}var i=nu();function ii(tt){return tt<0.04045?tt*0.0773993808:Math.pow(tt*0.9478672986+0.0521327014,2.4)}function ts(tt){return tt<0.0031308?tt*12.92:1.055*Math.pow(tt,0.41666)-0.055}var Gi;class xo{static getDataURL(tt,et="image/png"){if(/^data:/i.test(tt.src))return tt.src;if(typeof HTMLCanvasElement>"u")return tt.src;let nt;if(tt instanceof HTMLCanvasElement)nt=tt;else{if(Gi===void 0)Gi=bs("canvas");Gi.width=tt.width,Gi.height=tt.height;let it=Gi.getContext("2d");if(tt instanceof ImageData)it.putImageData(tt,0,0);else it.drawImage(tt,0,0,tt.width,tt.height);nt=Gi}return nt.toDataURL(et)}static sRGBToLinear(tt){if(typeof HTMLImageElement<"u"&&tt instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&tt instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&tt instanceof ImageBitmap){let et=bs("canvas");et.width=tt.width,et.height=tt.height;let nt=et.getContext("2d");nt.drawImage(tt,0,0,tt.width,tt.height);let it=nt.getImageData(0,0,tt.width,tt.height),st=it.data;for(let rt=0;rt<st.length;rt++)st[rt]=ii(st[rt]/255)*255;return nt.putImageData(it,0,0),et}else if(tt.data){let et=tt.data.slice(0);for(let nt=0;nt<et.length;nt++)if(et instanceof Uint8Array||et instanceof Uint8ClampedArray)et[nt]=Math.floor(ii(et[nt]/255)*255);else et[nt]=ii(et[nt]);return{data:et,width:tt.width,height:tt.height}}else return Oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),tt}}var iu=0;class Ls{constructor(tt=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:iu++}),this.uuid=Di(),this.data=tt,this.dataReady=!0,this.version=0}getSize(tt){let et=this.data;if(typeof HTMLVideoElement<"u"&&et instanceof HTMLVideoElement)tt.set(et.videoWidth,et.videoHeight,0);else if(typeof VideoFrame<"u"&&et instanceof VideoFrame)tt.set(et.displayWidth,et.displayHeight,0);else if(et!==null)tt.set(et.width||0,et.height||0,et.depth||0);else tt.set(0,0,0);return tt}set needsUpdate(tt){if(tt===!0)this.version++}toJSON(tt){let et=tt===void 0||typeof tt==="string";if(!et&&tt.images[this.uuid]!==void 0)return tt.images[this.uuid];let nt={uuid:this.uuid,url:""},it=this.data;if(it!==null){let st;if(Array.isArray(it)){st=[];for(let rt=0,at=it.length;rt<at;rt++)if(it[rt].isDataTexture)st.push(Jr(it[rt].image));else st.push(Jr(it[rt]))}else st=Jr(it);nt.url=st}if(!et)tt.images[this.uuid]=nt;return nt}}function Jr(tt){if(typeof HTMLImageElement<"u"&&tt instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&tt instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&tt instanceof ImageBitmap)return xo.getDataURL(tt);else if(tt.data)return{data:Array.from(tt.data),width:tt.width,height:tt.height,type:tt.data.constructor.name};else return Oe("Texture: Unable to serialize Texture."),{}}var su=0,$r=new e;class bn extends ai{constructor(tt=bn.DEFAULT_IMAGE,et=bn.DEFAULT_MAPPING,nt=1001,it=1001,st=1006,rt=1008,at=1023,ot=1009,lt=bn.DEFAULT_ANISOTROPY,ct=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:su++}),this.uuid=Di(),this.name="",this.source=new Ls(tt),this.mipmaps=[],this.mapping=et,this.channel=0,this.wrapS=nt,this.wrapT=it,this.magFilter=st,this.minFilter=rt,this.anisotropy=lt,this.format=at,this.internalFormat=null,this.type=ot,this.offset=new t(0,0),this.repeat=new t(1,1),this.center=new t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=ct,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=tt&&tt.depth&&tt.depth>1?!0:!1,this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize($r).x}get height(){return this.source.getSize($r).y}get depth(){return this.source.getSize($r).z}get image(){return this.source.data}set image(tt){this.source.data=tt}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(tt,et){this.updateRanges.push({start:tt,count:et})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(tt){return this.name=tt.name,this.source=tt.source,this.mipmaps=tt.mipmaps.slice(0),this.mapping=tt.mapping,this.channel=tt.channel,this.wrapS=tt.wrapS,this.wrapT=tt.wrapT,this.magFilter=tt.magFilter,this.minFilter=tt.minFilter,this.anisotropy=tt.anisotropy,this.format=tt.format,this.internalFormat=tt.internalFormat,this.type=tt.type,this.normalized=tt.normalized,this.offset.copy(tt.offset),this.repeat.copy(tt.repeat),this.center.copy(tt.center),this.rotation=tt.rotation,this.matrixAutoUpdate=tt.matrixAutoUpdate,this.matrix.copy(tt.matrix),this.generateMipmaps=tt.generateMipmaps,this.mipmapsAutoUpdate=tt.mipmapsAutoUpdate,this.premultiplyAlpha=tt.premultiplyAlpha,this.flipY=tt.flipY,this.unpackAlignment=tt.unpackAlignment,this.colorSpace=tt.colorSpace,this.renderTarget=tt.renderTarget,this.isRenderTargetTexture=tt.isRenderTargetTexture,this.isPMREMTexture=tt.isPMREMTexture,this.isArrayTexture=tt.isArrayTexture,this.userData=JSON.parse(JSON.stringify(tt.userData)),this.needsUpdate=!0,this}setValues(tt){for(let et in tt){let nt=tt[et];if(nt===void 0){Oe(`Texture.setValues(): parameter '${et}' has value of undefined.`);continue}let it=this[et];if(it===void 0){Oe(`Texture.setValues(): property '${et}' does not exist.`);continue}if(it&&nt&&(it.isVector2&&nt.isVector2))it.copy(nt);else if(it&&nt&&(it.isVector3&&nt.isVector3))it.copy(nt);else if(it&&nt&&(it.isMatrix3&&nt.isMatrix3))it.copy(nt);else this[et]=nt}}toJSON(tt){let et=tt===void 0||typeof tt==="string";if(!et&&tt.textures[this.uuid]!==void 0)return tt.textures[this.uuid];let nt={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(tt).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)nt.userData=this.userData;if(!et)tt.textures[this.uuid]=nt;return nt}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(tt){if(this.mapping!==300)return tt;if(tt.applyMatrix3(this.matrix),tt.x<0||tt.x>1)switch(this.wrapS){case 1000:tt.x=tt.x-Math.floor(tt.x);break;case 1001:tt.x=tt.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(tt.x)%2)===1)tt.x=Math.ceil(tt.x)-tt.x;else tt.x=tt.x-Math.floor(tt.x);break}if(tt.y<0||tt.y>1)switch(this.wrapT){case 1000:tt.y=tt.y-Math.floor(tt.y);break;case 1001:tt.y=tt.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(tt.y)%2)===1)tt.y=Math.ceil(tt.y)-tt.y;else tt.y=tt.y-Math.floor(tt.y);break}if(this.flipY)tt.y=1-tt.y;return tt}set needsUpdate(tt){if(tt===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(tt){if(tt===!0)this.pmremVersion++}}bn.DEFAULT_IMAGE=null;bn.DEFAULT_MAPPING=300;bn.DEFAULT_ANISOTROPY=1;class un{static{this.prototype.isVector4=!0}constructor(tt=0,et=0,nt=0,it=1){this.x=tt,this.y=et,this.z=nt,this.w=it}get width(){return this.z}set width(tt){this.z=tt}get height(){return this.w}set height(tt){this.w=tt}set(tt,et,nt,it){return this.x=tt,this.y=et,this.z=nt,this.w=it,this}setScalar(tt){return this.x=tt,this.y=tt,this.z=tt,this.w=tt,this}setX(tt){return this.x=tt,this}setY(tt){return this.y=tt,this}setZ(tt){return this.z=tt,this}setW(tt){return this.w=tt,this}setComponent(tt,et){switch(tt){case 0:this.x=et;break;case 1:this.y=et;break;case 2:this.z=et;break;case 3:this.w=et;break;default:throw Error("THREE.Vector4: index is out of range: "+tt)}return this}getComponent(tt){switch(tt){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("THREE.Vector4: index is out of range: "+tt)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(tt){return this.x=tt.x,this.y=tt.y,this.z=tt.z,this.w=tt.w!==void 0?tt.w:1,this}add(tt){return this.x+=tt.x,this.y+=tt.y,this.z+=tt.z,this.w+=tt.w,this}addScalar(tt){return this.x+=tt,this.y+=tt,this.z+=tt,this.w+=tt,this}addVectors(tt,et){return this.x=tt.x+et.x,this.y=tt.y+et.y,this.z=tt.z+et.z,this.w=tt.w+et.w,this}addScaledVector(tt,et){return this.x+=tt.x*et,this.y+=tt.y*et,this.z+=tt.z*et,this.w+=tt.w*et,this}sub(tt){return this.x-=tt.x,this.y-=tt.y,this.z-=tt.z,this.w-=tt.w,this}subScalar(tt){return this.x-=tt,this.y-=tt,this.z-=tt,this.w-=tt,this}subVectors(tt,et){return this.x=tt.x-et.x,this.y=tt.y-et.y,this.z=tt.z-et.z,this.w=tt.w-et.w,this}multiply(tt){return this.x*=tt.x,this.y*=tt.y,this.z*=tt.z,this.w*=tt.w,this}multiplyScalar(tt){return this.x*=tt,this.y*=tt,this.z*=tt,this.w*=tt,this}applyMatrix4(tt){let et=this.x,nt=this.y,it=this.z,st=this.w,rt=tt.elements;return this.x=rt[0]*et+rt[4]*nt+rt[8]*it+rt[12]*st,this.y=rt[1]*et+rt[5]*nt+rt[9]*it+rt[13]*st,this.z=rt[2]*et+rt[6]*nt+rt[10]*it+rt[14]*st,this.w=rt[3]*et+rt[7]*nt+rt[11]*it+rt[15]*st,this}divide(tt){return this.x/=tt.x,this.y/=tt.y,this.z/=tt.z,this.w/=tt.w,this}divideScalar(tt){return this.multiplyScalar(1/tt)}setAxisAngleFromQuaternion(tt){this.w=2*Math.acos(tt.w);let et=Math.sqrt(1-tt.w*tt.w);if(et<0.0001)this.x=1,this.y=0,this.z=0;else this.x=tt.x/et,this.y=tt.y/et,this.z=tt.z/et;return this}setAxisAngleFromRotationMatrix(tt){let et,nt,it,st,rt=0.01,at=0.1,ot=tt.elements,lt=ot[0],ct=ot[4],ut=ot[8],dt=ot[1],ht=ot[5],pt=ot[9],xt=ot[2],Mt=ot[6],ft=ot[10];if(Math.abs(ct-dt)<0.01&&Math.abs(ut-xt)<0.01&&Math.abs(pt-Mt)<0.01){if(Math.abs(ct+dt)<0.1&&Math.abs(ut+xt)<0.1&&Math.abs(pt+Mt)<0.1&&Math.abs(lt+ht+ft-3)<0.1)return this.set(1,0,0,0),this;et=Math.PI;let Et=(lt+1)/2,Tt=(ht+1)/2,yt=(ft+1)/2,At=(ct+dt)/4,Rt=(ut+xt)/4,gt=(pt+Mt)/4;if(Et>Tt&&Et>yt)if(Et<0.01)nt=0,it=0.707106781,st=0.707106781;else nt=Math.sqrt(Et),it=At/nt,st=Rt/nt;else if(Tt>yt)if(Tt<0.01)nt=0.707106781,it=0,st=0.707106781;else it=Math.sqrt(Tt),nt=At/it,st=gt/it;else if(yt<0.01)nt=0.707106781,it=0.707106781,st=0;else st=Math.sqrt(yt),nt=Rt/st,it=gt/st;return this.set(nt,it,st,et),this}let mt=Math.sqrt((Mt-pt)*(Mt-pt)+(ut-xt)*(ut-xt)+(dt-ct)*(dt-ct));if(Math.abs(mt)<0.001)mt=1;return this.x=(Mt-pt)/mt,this.y=(ut-xt)/mt,this.z=(dt-ct)/mt,this.w=Math.acos((lt+ht+ft-1)/2),this}setFromMatrixPosition(tt){let et=tt.elements;return this.x=et[12],this.y=et[13],this.z=et[14],this.w=et[15],this}min(tt){return this.x=Math.min(this.x,tt.x),this.y=Math.min(this.y,tt.y),this.z=Math.min(this.z,tt.z),this.w=Math.min(this.w,tt.w),this}max(tt){return this.x=Math.max(this.x,tt.x),this.y=Math.max(this.y,tt.y),this.z=Math.max(this.z,tt.z),this.w=Math.max(this.w,tt.w),this}clamp(tt,et){return this.x=Ze(this.x,tt.x,et.x),this.y=Ze(this.y,tt.y,et.y),this.z=Ze(this.z,tt.z,et.z),this.w=Ze(this.w,tt.w,et.w),this}clampScalar(tt,et){return this.x=Ze(this.x,tt,et),this.y=Ze(this.y,tt,et),this.z=Ze(this.z,tt,et),this.w=Ze(this.w,tt,et),this}clampLength(tt,et){let nt=this.length();return this.divideScalar(nt||1).multiplyScalar(Ze(nt,tt,et))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(tt){return this.x*tt.x+this.y*tt.y+this.z*tt.z+this.w*tt.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(tt){return this.normalize().multiplyScalar(tt)}lerp(tt,et){return this.x+=(tt.x-this.x)*et,this.y+=(tt.y-this.y)*et,this.z+=(tt.z-this.z)*et,this.w+=(tt.w-this.w)*et,this}lerpVectors(tt,et,nt){return this.x=tt.x+(et.x-tt.x)*nt,this.y=tt.y+(et.y-tt.y)*nt,this.z=tt.z+(et.z-tt.z)*nt,this.w=tt.w+(et.w-tt.w)*nt,this}equals(tt){return tt.x===this.x&&tt.y===this.y&&tt.z===this.z&&tt.w===this.w}fromArray(tt,et=0){return this.x=tt[et],this.y=tt[et+1],this.z=tt[et+2],this.w=tt[et+3],this}toArray(tt=[],et=0){return tt[et]=this.x,tt[et+1]=this.y,tt[et+2]=this.z,tt[et+3]=this.w,tt}fromBufferAttribute(tt,et){return this.x=tt.getX(et),this.y=tt.getY(et),this.z=tt.getZ(et),this.w=tt.getW(et),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vo extends ai{constructor(tt=1,et=1,nt={}){super();nt=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},nt),this.isRenderTarget=!0,this.width=tt,this.height=et,this.depth=nt.depth,this.scissor=new un(0,0,tt,et),this.scissorTest=!1,this.viewport=new un(0,0,tt,et),this.textures=[];let it=nt.count;for(let st=0;st<it;st++)this.textures[st]=new bn({width:tt,height:et,depth:nt.depth}),this.textures[st].isRenderTargetTexture=!0,this.textures[st].renderTarget=this;this._setTextureOptions(nt),this.depthBuffer=nt.depthBuffer,this.stencilBuffer=nt.stencilBuffer,this.resolveColorBuffer=nt.resolveColorBuffer,this.resolveDepthBuffer=nt.resolveDepthBuffer,this.resolveStencilBuffer=nt.resolveStencilBuffer,this.storeMultisampledColorBuffer=nt.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=nt.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=nt.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=nt.depthTexture,this.samples=nt.samples,this.multiview=nt.multiview,this.useArrayDepthTexture=nt.useArrayDepthTexture}_setTextureOptions(tt={}){let et={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(tt.mapping!==void 0)et.mapping=tt.mapping;if(tt.wrapS!==void 0)et.wrapS=tt.wrapS;if(tt.wrapT!==void 0)et.wrapT=tt.wrapT;if(tt.wrapR!==void 0)et.wrapR=tt.wrapR;if(tt.magFilter!==void 0)et.magFilter=tt.magFilter;if(tt.minFilter!==void 0)et.minFilter=tt.minFilter;if(tt.format!==void 0)et.format=tt.format;if(tt.type!==void 0)et.type=tt.type;if(tt.anisotropy!==void 0)et.anisotropy=tt.anisotropy;if(tt.colorSpace!==void 0)et.colorSpace=tt.colorSpace;if(tt.flipY!==void 0)et.flipY=tt.flipY;if(tt.generateMipmaps!==void 0)et.generateMipmaps=tt.generateMipmaps;if(tt.mipmapsAutoUpdate!==void 0)et.mipmapsAutoUpdate=tt.mipmapsAutoUpdate;if(tt.internalFormat!==void 0)et.internalFormat=tt.internalFormat;for(let nt=0;nt<this.textures.length;nt++)this.textures[nt].setValues(et)}get texture(){return this.textures[0]}set texture(tt){this.textures[0]=tt}set depthTexture(tt){if(this._depthTexture!==null&&this._depthTexture.renderTarget===this)this._depthTexture.renderTarget=null;if(tt!==null&&tt.renderTarget===null)tt.renderTarget=this;this._depthTexture=tt}get depthTexture(){return this._depthTexture}setSize(tt,et,nt=1){if(this.width!==tt||this.height!==et||this.depth!==nt){this.width=tt,this.height=et,this.depth=nt;for(let it=0,st=this.textures.length;it<st;it++)if(this.textures[it].image.width=tt,this.textures[it].image.height=et,this.textures[it].image.depth=nt,this.textures[it].isData3DTexture!==!0)this.textures[it].isArrayTexture=this.textures[it].image.depth>1;this.dispose()}this.viewport.set(0,0,tt,et),this.scissor.set(0,0,tt,et)}clone(){return new this.constructor().copy(this)}copy(tt){this.width=tt.width,this.height=tt.height,this.depth=tt.depth,this.scissor.copy(tt.scissor),this.scissorTest=tt.scissorTest,this.viewport.copy(tt.viewport),this.textures.length=0;for(let et=0,nt=tt.textures.length;et<nt;et++){this.textures[et]=tt.textures[et].clone(),this.textures[et].isRenderTargetTexture=!0,this.textures[et].renderTarget=this;let it=Object.assign({},tt.textures[et].image);this.textures[et].source=new Ls(it)}if(this.depthBuffer=tt.depthBuffer,this.stencilBuffer=tt.stencilBuffer,this.resolveColorBuffer=tt.resolveColorBuffer,this.resolveDepthBuffer=tt.resolveDepthBuffer,this.resolveStencilBuffer=tt.resolveStencilBuffer,this.storeMultisampledColorBuffer=tt.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=tt.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=tt.storeMultisampledStencilBuffer,tt.depthTexture!==null)if(tt.depthTexture.renderTarget===tt){let et=tt.depthTexture.clone();et.renderTarget=null,this.depthTexture=et}else this.depthTexture=tt.depthTexture;else this.depthTexture=null;return this.samples=tt.samples,this.multiview=tt.multiview,this.useArrayDepthTexture=tt.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class c extends vo{constructor(tt=1,et=1,nt={}){super(tt,et,nt);this.isWebGLRenderTarget=!0}}class Tr extends bn{constructor(tt=null,et=1,nt=1,it=1){super(null);this.isDataArrayTexture=!0,this.image={data:tt,width:et,height:nt,depth:it},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(tt){return super.copy(tt),this.wrapR=tt.wrapR,this}addLayerUpdate(tt){this.layerUpdates.add(tt)}clearLayerUpdates(){this.layerUpdates.clear()}}class yo extends bn{constructor(tt=null,et=1,nt=1,it=1){super(null);this.isData3DTexture=!0,this.image={data:tt,width:et,height:nt,depth:it},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(tt){return super.copy(tt),this.wrapR=tt.wrapR,this}}class an{static{this.prototype.isMatrix4=!0}constructor(tt,et,nt,it,st,rt,at,ot,lt,ct,ut,dt,ht,pt,xt,Mt){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],tt!==void 0)this.set(tt,et,nt,it,st,rt,at,ot,lt,ct,ut,dt,ht,pt,xt,Mt)}set(tt,et,nt,it,st,rt,at,ot,lt,ct,ut,dt,ht,pt,xt,Mt){let ft=this.elements;return ft[0]=tt,ft[4]=et,ft[8]=nt,ft[12]=it,ft[1]=st,ft[5]=rt,ft[9]=at,ft[13]=ot,ft[2]=lt,ft[6]=ct,ft[10]=ut,ft[14]=dt,ft[3]=ht,ft[7]=pt,ft[11]=xt,ft[15]=Mt,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new an().fromArray(this.elements)}copy(tt){let et=this.elements,nt=tt.elements;return et[0]=nt[0],et[1]=nt[1],et[2]=nt[2],et[3]=nt[3],et[4]=nt[4],et[5]=nt[5],et[6]=nt[6],et[7]=nt[7],et[8]=nt[8],et[9]=nt[9],et[10]=nt[10],et[11]=nt[11],et[12]=nt[12],et[13]=nt[13],et[14]=nt[14],et[15]=nt[15],this}copyPosition(tt){let et=this.elements,nt=tt.elements;return et[12]=nt[12],et[13]=nt[13],et[14]=nt[14],this}setFromMatrix3(tt){let et=tt.elements;return this.set(et[0],et[3],et[6],0,et[1],et[4],et[7],0,et[2],et[5],et[8],0,0,0,0,1),this}extractBasis(tt,et,nt){if(this.determinantAffine()===0)return tt.set(1,0,0),et.set(0,1,0),nt.set(0,0,1),this;return tt.setFromMatrixColumn(this,0),et.setFromMatrixColumn(this,1),nt.setFromMatrixColumn(this,2),this}makeBasis(tt,et,nt){return this.set(tt.x,et.x,nt.x,0,tt.y,et.y,nt.y,0,tt.z,et.z,nt.z,0,0,0,0,1),this}extractRotation(tt){if(tt.determinantAffine()===0)return this.identity();let et=this.elements,nt=tt.elements,it=1/ki.setFromMatrixColumn(tt,0).length(),st=1/ki.setFromMatrixColumn(tt,1).length(),rt=1/ki.setFromMatrixColumn(tt,2).length();return et[0]=nt[0]*it,et[1]=nt[1]*it,et[2]=nt[2]*it,et[3]=0,et[4]=nt[4]*st,et[5]=nt[5]*st,et[6]=nt[6]*st,et[7]=0,et[8]=nt[8]*rt,et[9]=nt[9]*rt,et[10]=nt[10]*rt,et[11]=0,et[12]=0,et[13]=0,et[14]=0,et[15]=1,this}makeRotationFromEuler(tt){let et=this.elements,{x:nt,y:it,z:st}=tt,rt=Math.cos(nt),at=Math.sin(nt),ot=Math.cos(it),lt=Math.sin(it),ct=Math.cos(st),ut=Math.sin(st);if(tt.order==="XYZ"){let dt=rt*ct,ht=rt*ut,pt=at*ct,xt=at*ut;et[0]=ot*ct,et[4]=-ot*ut,et[8]=lt,et[1]=ht+pt*lt,et[5]=dt-xt*lt,et[9]=-at*ot,et[2]=xt-dt*lt,et[6]=pt+ht*lt,et[10]=rt*ot}else if(tt.order==="YXZ"){let dt=ot*ct,ht=ot*ut,pt=lt*ct,xt=lt*ut;et[0]=dt+xt*at,et[4]=pt*at-ht,et[8]=rt*lt,et[1]=rt*ut,et[5]=rt*ct,et[9]=-at,et[2]=ht*at-pt,et[6]=xt+dt*at,et[10]=rt*ot}else if(tt.order==="ZXY"){let dt=ot*ct,ht=ot*ut,pt=lt*ct,xt=lt*ut;et[0]=dt-xt*at,et[4]=-rt*ut,et[8]=pt+ht*at,et[1]=ht+pt*at,et[5]=rt*ct,et[9]=xt-dt*at,et[2]=-rt*lt,et[6]=at,et[10]=rt*ot}else if(tt.order==="ZYX"){let dt=rt*ct,ht=rt*ut,pt=at*ct,xt=at*ut;et[0]=ot*ct,et[4]=pt*lt-ht,et[8]=dt*lt+xt,et[1]=ot*ut,et[5]=xt*lt+dt,et[9]=ht*lt-pt,et[2]=-lt,et[6]=at*ot,et[10]=rt*ot}else if(tt.order==="YZX"){let dt=rt*ot,ht=rt*lt,pt=at*ot,xt=at*lt;et[0]=ot*ct,et[4]=xt-dt*ut,et[8]=pt*ut+ht,et[1]=ut,et[5]=rt*ct,et[9]=-at*ct,et[2]=-lt*ct,et[6]=ht*ut+pt,et[10]=dt-xt*ut}else if(tt.order==="XZY"){let dt=rt*ot,ht=rt*lt,pt=at*ot,xt=at*lt;et[0]=ot*ct,et[4]=-ut,et[8]=lt*ct,et[1]=dt*ut+xt,et[5]=rt*ct,et[9]=ht*ut-pt,et[2]=pt*ut-ht,et[6]=at*ct,et[10]=xt*ut+dt}return et[3]=0,et[7]=0,et[11]=0,et[12]=0,et[13]=0,et[14]=0,et[15]=1,this}makeRotationFromQuaternion(tt){return this.compose(ru,tt,au)}lookAt(tt,et,nt){let it=this.elements;if(In.subVectors(tt,et),In.lengthSq()===0)In.z=1;if(In.normalize(),ui.crossVectors(nt,In),ui.lengthSq()===0){if(Math.abs(nt.z)===1)In.x+=0.0001;else In.z+=0.0001;In.normalize(),ui.crossVectors(nt,In)}return ui.normalize(),Ws.crossVectors(In,ui),it[0]=ui.x,it[4]=Ws.x,it[8]=In.x,it[1]=ui.y,it[5]=Ws.y,it[9]=In.y,it[2]=ui.z,it[6]=Ws.z,it[10]=In.z,this}multiply(tt){return this.multiplyMatrices(this,tt)}premultiply(tt){return this.multiplyMatrices(tt,this)}multiplyMatrices(tt,et){let nt=tt.elements,it=et.elements,st=this.elements,rt=nt[0],at=nt[4],ot=nt[8],lt=nt[12],ct=nt[1],ut=nt[5],dt=nt[9],ht=nt[13],pt=nt[2],xt=nt[6],Mt=nt[10],ft=nt[14],mt=nt[3],Et=nt[7],Tt=nt[11],yt=nt[15],At=it[0],Rt=it[4],gt=it[8],St=it[12],It=it[1],Bt=it[5],Lt=it[9],zt=it[13],$t=it[2],wt=it[6],Vt=it[10],Xt=it[14],Ft=it[3],se=it[7],Ht=it[11],Jt=it[15];return st[0]=rt*At+at*It+ot*$t+lt*Ft,st[4]=rt*Rt+at*Bt+ot*wt+lt*se,st[8]=rt*gt+at*Lt+ot*Vt+lt*Ht,st[12]=rt*St+at*zt+ot*Xt+lt*Jt,st[1]=ct*At+ut*It+dt*$t+ht*Ft,st[5]=ct*Rt+ut*Bt+dt*wt+ht*se,st[9]=ct*gt+ut*Lt+dt*Vt+ht*Ht,st[13]=ct*St+ut*zt+dt*Xt+ht*Jt,st[2]=pt*At+xt*It+Mt*$t+ft*Ft,st[6]=pt*Rt+xt*Bt+Mt*wt+ft*se,st[10]=pt*gt+xt*Lt+Mt*Vt+ft*Ht,st[14]=pt*St+xt*zt+Mt*Xt+ft*Jt,st[3]=mt*At+Et*It+Tt*$t+yt*Ft,st[7]=mt*Rt+Et*Bt+Tt*wt+yt*se,st[11]=mt*gt+Et*Lt+Tt*Vt+yt*Ht,st[15]=mt*St+Et*zt+Tt*Xt+yt*Jt,this}multiplyScalar(tt){let et=this.elements;return et[0]*=tt,et[4]*=tt,et[8]*=tt,et[12]*=tt,et[1]*=tt,et[5]*=tt,et[9]*=tt,et[13]*=tt,et[2]*=tt,et[6]*=tt,et[10]*=tt,et[14]*=tt,et[3]*=tt,et[7]*=tt,et[11]*=tt,et[15]*=tt,this}determinant(){let tt=this.elements,et=tt[0],nt=tt[4],it=tt[8],st=tt[12],rt=tt[1],at=tt[5],ot=tt[9],lt=tt[13],ct=tt[2],ut=tt[6],dt=tt[10],ht=tt[14],pt=tt[3],xt=tt[7],Mt=tt[11],ft=tt[15],mt=ot*ht-lt*dt,Et=at*ht-lt*ut,Tt=at*dt-ot*ut,yt=rt*ht-lt*ct,At=rt*dt-ot*ct,Rt=rt*ut-at*ct;return et*(xt*mt-Mt*Et+ft*Tt)-nt*(pt*mt-Mt*yt+ft*At)+it*(pt*Et-xt*yt+ft*Rt)-st*(pt*Tt-xt*At+Mt*Rt)}determinantAffine(){let tt=this.elements,et=tt[0],nt=tt[4],it=tt[8],st=tt[1],rt=tt[5],at=tt[9],ot=tt[2],lt=tt[6],ct=tt[10];return et*(rt*ct-at*lt)-nt*(st*ct-at*ot)+it*(st*lt-rt*ot)}transpose(){let tt=this.elements,et;return et=tt[1],tt[1]=tt[4],tt[4]=et,et=tt[2],tt[2]=tt[8],tt[8]=et,et=tt[6],tt[6]=tt[9],tt[9]=et,et=tt[3],tt[3]=tt[12],tt[12]=et,et=tt[7],tt[7]=tt[13],tt[13]=et,et=tt[11],tt[11]=tt[14],tt[14]=et,this}setPosition(tt,et,nt){let it=this.elements;if(tt.isVector3)it[12]=tt.x,it[13]=tt.y,it[14]=tt.z;else it[12]=tt,it[13]=et,it[14]=nt;return this}invert(){let tt=this.elements,et=tt[0],nt=tt[1],it=tt[2],st=tt[3],rt=tt[4],at=tt[5],ot=tt[6],lt=tt[7],ct=tt[8],ut=tt[9],dt=tt[10],ht=tt[11],pt=tt[12],xt=tt[13],Mt=tt[14],ft=tt[15],mt=et*at-nt*rt,Et=et*ot-it*rt,Tt=et*lt-st*rt,yt=nt*ot-it*at,At=nt*lt-st*at,Rt=it*lt-st*ot,gt=ct*xt-ut*pt,St=ct*Mt-dt*pt,It=ct*ft-ht*pt,Bt=ut*Mt-dt*xt,Lt=ut*ft-ht*xt,zt=dt*ft-ht*Mt,$t=mt*zt-Et*Lt+Tt*Bt+yt*It-At*St+Rt*gt;if($t===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let wt=1/$t;return tt[0]=(at*zt-ot*Lt+lt*Bt)*wt,tt[1]=(it*Lt-nt*zt-st*Bt)*wt,tt[2]=(xt*Rt-Mt*At+ft*yt)*wt,tt[3]=(dt*At-ut*Rt-ht*yt)*wt,tt[4]=(ot*It-rt*zt-lt*St)*wt,tt[5]=(et*zt-it*It+st*St)*wt,tt[6]=(Mt*Tt-pt*Rt-ft*Et)*wt,tt[7]=(ct*Rt-dt*Tt+ht*Et)*wt,tt[8]=(rt*Lt-at*It+lt*gt)*wt,tt[9]=(nt*It-et*Lt-st*gt)*wt,tt[10]=(pt*At-xt*Tt+ft*mt)*wt,tt[11]=(ut*Tt-ct*At-ht*mt)*wt,tt[12]=(at*St-rt*Bt-ot*gt)*wt,tt[13]=(et*Bt-nt*St+it*gt)*wt,tt[14]=(xt*Et-pt*yt-Mt*mt)*wt,tt[15]=(ct*yt-ut*Et+dt*mt)*wt,this}scale(tt){let et=this.elements,{x:nt,y:it,z:st}=tt;return et[0]*=nt,et[4]*=it,et[8]*=st,et[1]*=nt,et[5]*=it,et[9]*=st,et[2]*=nt,et[6]*=it,et[10]*=st,et[3]*=nt,et[7]*=it,et[11]*=st,this}getMaxScaleOnAxis(){let tt=this.elements,et=tt[0]*tt[0]+tt[1]*tt[1]+tt[2]*tt[2],nt=tt[4]*tt[4]+tt[5]*tt[5]+tt[6]*tt[6],it=tt[8]*tt[8]+tt[9]*tt[9]+tt[10]*tt[10];return Math.sqrt(Math.max(et,nt,it))}makeTranslation(tt,et,nt){if(tt.isVector3)this.set(1,0,0,tt.x,0,1,0,tt.y,0,0,1,tt.z,0,0,0,1);else this.set(1,0,0,tt,0,1,0,et,0,0,1,nt,0,0,0,1);return this}makeRotationX(tt){let et=Math.cos(tt),nt=Math.sin(tt);return this.set(1,0,0,0,0,et,-nt,0,0,nt,et,0,0,0,0,1),this}makeRotationY(tt){let et=Math.cos(tt),nt=Math.sin(tt);return this.set(et,0,nt,0,0,1,0,0,-nt,0,et,0,0,0,0,1),this}makeRotationZ(tt){let et=Math.cos(tt),nt=Math.sin(tt);return this.set(et,-nt,0,0,nt,et,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(tt,et){let nt=Math.cos(et),it=Math.sin(et),st=1-nt,{x:rt,y:at,z:ot}=tt,lt=st*rt,ct=st*at;return this.set(lt*rt+nt,lt*at-it*ot,lt*ot+it*at,0,lt*at+it*ot,ct*at+nt,ct*ot-it*rt,0,lt*ot-it*at,ct*ot+it*rt,st*ot*ot+nt,0,0,0,0,1),this}makeScale(tt,et,nt){return this.set(tt,0,0,0,0,et,0,0,0,0,nt,0,0,0,0,1),this}makeShear(tt,et,nt,it,st,rt){return this.set(1,nt,st,0,tt,1,rt,0,et,it,1,0,0,0,0,1),this}compose(tt,et,nt){let it=this.elements,{_x:st,_y:rt,_z:at,_w:ot}=et,lt=st+st,ct=rt+rt,ut=at+at,dt=st*lt,ht=st*ct,pt=st*ut,xt=rt*ct,Mt=rt*ut,ft=at*ut,mt=ot*lt,Et=ot*ct,Tt=ot*ut,{x:yt,y:At,z:Rt}=nt;return it[0]=(1-(xt+ft))*yt,it[1]=(ht+Tt)*yt,it[2]=(pt-Et)*yt,it[3]=0,it[4]=(ht-Tt)*At,it[5]=(1-(dt+ft))*At,it[6]=(Mt+mt)*At,it[7]=0,it[8]=(pt+Et)*Rt,it[9]=(Mt-mt)*Rt,it[10]=(1-(dt+xt))*Rt,it[11]=0,it[12]=tt.x,it[13]=tt.y,it[14]=tt.z,it[15]=1,this}decompose(tt,et,nt){let it=this.elements;tt.x=it[12],tt.y=it[13],tt.z=it[14];let st=this.determinantAffine();if(st===0)return nt.set(1,1,1),et.identity(),this;let rt=ki.set(it[0],it[1],it[2]).length(),at=ki.set(it[4],it[5],it[6]).length(),ot=ki.set(it[8],it[9],it[10]).length();if(st<0)rt=-rt;Bn.copy(this);let lt=1/rt,ct=1/at,ut=1/ot;return Bn.elements[0]*=lt,Bn.elements[1]*=lt,Bn.elements[2]*=lt,Bn.elements[4]*=ct,Bn.elements[5]*=ct,Bn.elements[6]*=ct,Bn.elements[8]*=ut,Bn.elements[9]*=ut,Bn.elements[10]*=ut,et.setFromRotationMatrix(Bn),nt.x=rt,nt.y=at,nt.z=ot,this}makePerspective(tt,et,nt,it,st,rt,at=2000,ot=!1){let lt=this.elements,ct=2*st/(et-tt),ut=2*st/(nt-it),dt=(et+tt)/(et-tt),ht=(nt+it)/(nt-it),pt,xt;if(ot)pt=st/(rt-st),xt=rt*st/(rt-st);else if(at===2000)pt=-(rt+st)/(rt-st),xt=-2*rt*st/(rt-st);else if(at===2001)pt=-rt/(rt-st),xt=-rt*st/(rt-st);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+at);return lt[0]=ct,lt[4]=0,lt[8]=dt,lt[12]=0,lt[1]=0,lt[5]=ut,lt[9]=ht,lt[13]=0,lt[2]=0,lt[6]=0,lt[10]=pt,lt[14]=xt,lt[3]=0,lt[7]=0,lt[11]=-1,lt[15]=0,this}makeOrthographic(tt,et,nt,it,st,rt,at=2000,ot=!1){let lt=this.elements,ct=2/(et-tt),ut=2/(nt-it),dt=-(et+tt)/(et-tt),ht=-(nt+it)/(nt-it),pt,xt;if(ot)pt=1/(rt-st),xt=rt/(rt-st);else if(at===2000)pt=-2/(rt-st),xt=-(rt+st)/(rt-st);else if(at===2001)pt=-1/(rt-st),xt=-st/(rt-st);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+at);return lt[0]=ct,lt[4]=0,lt[8]=0,lt[12]=dt,lt[1]=0,lt[5]=ut,lt[9]=0,lt[13]=ht,lt[2]=0,lt[6]=0,lt[10]=pt,lt[14]=xt,lt[3]=0,lt[7]=0,lt[11]=0,lt[15]=1,this}equals(tt){let et=this.elements,nt=tt.elements;for(let it=0;it<16;it++)if(et[it]!==nt[it])return!1;return!0}fromArray(tt,et=0){for(let nt=0;nt<16;nt++)this.elements[nt]=tt[nt+et];return this}toArray(tt=[],et=0){let nt=this.elements;return tt[et]=nt[0],tt[et+1]=nt[1],tt[et+2]=nt[2],tt[et+3]=nt[3],tt[et+4]=nt[4],tt[et+5]=nt[5],tt[et+6]=nt[6],tt[et+7]=nt[7],tt[et+8]=nt[8],tt[et+9]=nt[9],tt[et+10]=nt[10],tt[et+11]=nt[11],tt[et+12]=nt[12],tt[et+13]=nt[13],tt[et+14]=nt[14],tt[et+15]=nt[15],tt}}var ki=new e,Bn=new an,ru=new e(0,0,0),au=new e(1,1,1),ui=new e,Ws=new e,In=new e,hl=new an,ul=new oi;class Xn{constructor(tt=0,et=0,nt=0,it=Xn.DEFAULT_ORDER){this.isEuler=!0,this._x=tt,this._y=et,this._z=nt,this._order=it}get x(){return this._x}set x(tt){this._x=tt,this._onChangeCallback()}get y(){return this._y}set y(tt){this._y=tt,this._onChangeCallback()}get z(){return this._z}set z(tt){this._z=tt,this._onChangeCallback()}get order(){return this._order}set order(tt){this._order=tt,this._onChangeCallback()}set(tt,et,nt,it=this._order){return this._x=tt,this._y=et,this._z=nt,this._order=it,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(tt){return this._x=tt._x,this._y=tt._y,this._z=tt._z,this._order=tt._order,this._onChangeCallback(),this}setFromRotationMatrix(tt,et=this._order,nt=!0){let it=tt.elements,st=it[0],rt=it[4],at=it[8],ot=it[1],lt=it[5],ct=it[9],ut=it[2],dt=it[6],ht=it[10];switch(et){case"XYZ":if(this._y=Math.asin(Ze(at,-1,1)),Math.abs(at)<0.9999999)this._x=Math.atan2(-ct,ht),this._z=Math.atan2(-rt,st);else this._x=Math.atan2(dt,lt),this._z=0;break;case"YXZ":if(this._x=Math.asin(-Ze(ct,-1,1)),Math.abs(ct)<0.9999999)this._y=Math.atan2(at,ht),this._z=Math.atan2(ot,lt);else this._y=Math.atan2(-ut,st),this._z=0;break;case"ZXY":if(this._x=Math.asin(Ze(dt,-1,1)),Math.abs(dt)<0.9999999)this._y=Math.atan2(-ut,ht),this._z=Math.atan2(-rt,lt);else this._y=0,this._z=Math.atan2(ot,st);break;case"ZYX":if(this._y=Math.asin(-Ze(ut,-1,1)),Math.abs(ut)<0.9999999)this._x=Math.atan2(dt,ht),this._z=Math.atan2(ot,st);else this._x=0,this._z=Math.atan2(-rt,lt);break;case"YZX":if(this._z=Math.asin(Ze(ot,-1,1)),Math.abs(ot)<0.9999999)this._x=Math.atan2(-ct,lt),this._y=Math.atan2(-ut,st);else this._x=0,this._y=Math.atan2(at,ht);break;case"XZY":if(this._z=Math.asin(-Ze(rt,-1,1)),Math.abs(rt)<0.9999999)this._x=Math.atan2(dt,lt),this._y=Math.atan2(at,st);else this._x=Math.atan2(-ct,ht),this._y=0;break;default:Oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+et)}if(this._order=et,nt===!0)this._onChangeCallback();return this}setFromQuaternion(tt,et,nt){return hl.makeRotationFromQuaternion(tt),this.setFromRotationMatrix(hl,et,nt)}setFromVector3(tt,et=this._order){return this.set(tt.x,tt.y,tt.z,et)}reorder(tt){return ul.setFromEuler(this),this.setFromQuaternion(ul,tt)}equals(tt){return tt._x===this._x&&tt._y===this._y&&tt._z===this._z&&tt._order===this._order}fromArray(tt){if(this._x=tt[0],this._y=tt[1],this._z=tt[2],tt[3]!==void 0)this._order=tt[3];return this._onChangeCallback(),this}toArray(tt=[],et=0){return tt[et]=this._x,tt[et+1]=this._y,tt[et+2]=this._z,tt[et+3]=this._order,tt}_onChange(tt){return this._onChangeCallback=tt,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xn.DEFAULT_ORDER="XYZ";class Er{constructor(){this.mask=1}set(tt){this.mask=(1<<tt|0)>>>0}enable(tt){this.mask|=1<<tt|0}enableAll(){this.mask=-1}toggle(tt){this.mask^=1<<tt|0}disable(tt){this.mask&=~(1<<tt|0)}disableAll(){this.mask=0}test(tt){return(this.mask&tt.mask)!==0}isEnabled(tt){return(this.mask&(1<<tt|0))!==0}}var ou=0,dl=new e,Hi=new oi,Qn=new an,Vs=new e,us=new e,lu=new e,cu=new oi,fl=new e(1,0,0),pl=new e(0,1,0),ml=new e(0,0,1),gl={type:"added"},hu={type:"removed"},Wi={type:"childadded",child:null},Kr={type:"childremoved",child:null};class o extends ai{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:ou++}),this.uuid=Di(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=o.DEFAULT_UP.clone();let tt=new e,et=new Xn,nt=new oi,it=new e(1,1,1);function st(){nt.setFromEuler(et,!1)}function rt(){et.setFromQuaternion(nt,void 0,!1)}et._onChange(st),nt._onChange(rt),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:tt},rotation:{configurable:!0,enumerable:!0,value:et},quaternion:{configurable:!0,enumerable:!0,value:nt},scale:{configurable:!0,enumerable:!0,value:it},modelViewMatrix:{value:new an},normalMatrix:{value:new Ge}}),this.matrix=new an,this.matrixWorld=new an,this.matrixAutoUpdate=o.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=o.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Er,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(tt){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrix.premultiply(tt),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null)this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(tt){return this.quaternion.premultiply(tt),this}setRotationFromAxisAngle(tt,et){this.quaternion.setFromAxisAngle(tt,et)}setRotationFromEuler(tt){this.quaternion.setFromEuler(tt,!0)}setRotationFromMatrix(tt){this.quaternion.setFromRotationMatrix(tt)}setRotationFromQuaternion(tt){this.quaternion.copy(tt)}rotateOnAxis(tt,et){return Hi.setFromAxisAngle(tt,et),this.quaternion.multiply(Hi),this}rotateOnWorldAxis(tt,et){return Hi.setFromAxisAngle(tt,et),this.quaternion.premultiply(Hi),this}rotateX(tt){return this.rotateOnAxis(fl,tt)}rotateY(tt){return this.rotateOnAxis(pl,tt)}rotateZ(tt){return this.rotateOnAxis(ml,tt)}translateOnAxis(tt,et){return dl.copy(tt).applyQuaternion(this.quaternion),this.position.add(dl.multiplyScalar(et)),this}translateX(tt){return this.translateOnAxis(fl,tt)}translateY(tt){return this.translateOnAxis(pl,tt)}translateZ(tt){return this.translateOnAxis(ml,tt)}localToWorld(tt){return this.updateWorldMatrix(!0,!1),tt.applyMatrix4(this.matrixWorld)}worldToLocal(tt){return this.updateWorldMatrix(!0,!1),tt.applyMatrix4(Qn.copy(this.matrixWorld).invert())}lookAt(tt,et,nt){if(tt.isVector3)Vs.copy(tt);else Vs.set(tt,et,nt);let it=this.parent;if(this.updateWorldMatrix(!0,!1),us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)Qn.lookAt(us,Vs,this.up);else Qn.lookAt(Vs,us,this.up);if(this.quaternion.setFromRotationMatrix(Qn),it)Qn.extractRotation(it.matrixWorld),Hi.setFromRotationMatrix(Qn),this.quaternion.premultiply(Hi.invert())}add(tt){if(arguments.length>1){for(let et=0;et<arguments.length;et++)this.add(arguments[et]);return this}if(tt===this)return Be("Object3D.add: object can't be added as a child of itself.",tt),this;if(tt&&tt.isObject3D)tt.removeFromParent(),tt.parent=this,this.children.push(tt),tt.dispatchEvent(gl),Wi.child=tt,this.dispatchEvent(Wi),Wi.child=null;else Be("Object3D.add: object not an instance of THREE.Object3D.",tt);return this}remove(tt){if(arguments.length>1){for(let nt=0;nt<arguments.length;nt++)this.remove(arguments[nt]);return this}let et=this.children.indexOf(tt);if(et!==-1)tt.parent=null,this.children.splice(et,1),tt.dispatchEvent(hu),Kr.child=tt,this.dispatchEvent(Kr),Kr.child=null;return this}removeFromParent(){let tt=this.parent;if(tt!==null)tt.remove(this);return this}clear(){return this.remove(...this.children)}attach(tt){if(this.updateWorldMatrix(!0,!1),Qn.copy(this.matrixWorld).invert(),tt.parent!==null)tt.parent.updateWorldMatrix(!0,!1),Qn.multiply(tt.parent.matrixWorld);return tt.applyMatrix4(Qn),tt.removeFromParent(),tt.parent=this,this.children.push(tt),tt.updateWorldMatrix(!1,!0),tt.dispatchEvent(gl),Wi.child=tt,this.dispatchEvent(Wi),Wi.child=null,this}getObjectById(tt){return this.getObjectByProperty("id",tt)}getObjectByName(tt){return this.getObjectByProperty("name",tt)}getObjectByProperty(tt,et){if(this[tt]===et)return this;for(let nt=0,it=this.children.length;nt<it;nt++){let rt=this.children[nt].getObjectByProperty(tt,et);if(rt!==void 0)return rt}return}getObjectsByProperty(tt,et,nt=[]){if(this[tt]===et)nt.push(this);let it=this.children;for(let st=0,rt=it.length;st<rt;st++)it[st].getObjectsByProperty(tt,et,nt);return nt}getWorldPosition(tt){return this.updateWorldMatrix(!0,!1),tt.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(tt){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(us,tt,lu),tt}getWorldScale(tt){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(us,cu,tt),tt}getWorldDirection(tt){this.updateWorldMatrix(!0,!1);let et=this.matrixWorld.elements;return tt.set(et[8],et[9],et[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(tt){tt(this);let et=this.children;for(let nt=0,it=et.length;nt<it;nt++)et[nt].traverse(tt)}traverseVisible(tt){if(this.visible===!1)return;tt(this);let et=this.children;for(let nt=0,it=et.length;nt<it;nt++)et[nt].traverseVisible(tt)}traverseAncestors(tt){let et=this.parent;if(et!==null)tt(et),et.traverseAncestors(tt)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let tt=this.pivot;if(tt!==null){let{x:et,y:nt,z:it}=tt,st=this.matrix.elements;st[12]+=et-st[0]*et-st[4]*nt-st[8]*it,st[13]+=nt-st[1]*et-st[5]*nt-st[9]*it,st[14]+=it-st[2]*et-st[6]*nt-st[10]*it}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(tt){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||tt){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,tt=!0}let et=this.children;for(let nt=0,it=et.length;nt<it;nt++)et[nt].updateMatrixWorld(tt)}updateWorldMatrix(tt,et,nt=!1){let it=this.parent;if(tt===!0&&it!==null)it.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||nt){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,nt=!0}if(et===!0){let st=this.children;for(let rt=0,at=st.length;rt<at;rt++)st[rt].updateWorldMatrix(!1,!0,nt)}}toJSON(tt){let et=tt===void 0||typeof tt==="string",nt={};if(et)tt={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},nt.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let it={};if(it.uuid=this.uuid,it.type=this.type,it.name=this.name,it.castShadow=this.castShadow,it.receiveShadow=this.receiveShadow,it.visible=this.visible,it.frustumCulled=this.frustumCulled,it.renderOrder=this.renderOrder,it.static=this.static,it.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0)it.userData=this.userData;if(it.layers=this.layers.mask,it.matrix=this.matrix.toArray(),it.up=this.up.toArray(),this.pivot!==null)it.pivot=this.pivot.toArray();if(this.morphTargetDictionary!==void 0)it.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)it.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(it.type="InstancedMesh",it.count=this.count,it.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)it.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(it.type="BatchedMesh",it.perObjectFrustumCulled=this.perObjectFrustumCulled,it.sortObjects=this.sortObjects,it.drawRanges=this._drawRanges,it.reservedRanges=this._reservedRanges,it.geometryInfo=this._geometryInfo.map((at)=>({...at,boundingBox:at.boundingBox?at.boundingBox.toJSON():void 0,boundingSphere:at.boundingSphere?at.boundingSphere.toJSON():void 0})),it.instanceInfo=this._instanceInfo.map((at)=>({...at})),it.availableInstanceIds=this._availableInstanceIds.slice(),it.availableGeometryIds=this._availableGeometryIds.slice(),it.nextIndexStart=this._nextIndexStart,it.nextVertexStart=this._nextVertexStart,it.geometryCount=this._geometryCount,it.maxInstanceCount=this._maxInstanceCount,it.maxVertexCount=this._maxVertexCount,it.maxIndexCount=this._maxIndexCount,it.geometryInitialized=this._geometryInitialized,it.matricesTexture=this._matricesTexture.toJSON(tt),it.indirectTexture=this._indirectTexture.toJSON(tt),this._colorsTexture!==null)it.colorsTexture=this._colorsTexture.toJSON(tt);if(this.boundingSphere!==null)it.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)it.boundingBox=this.boundingBox.toJSON()}function st(at,ot){if(at[ot.uuid]===void 0)at[ot.uuid]=ot.toJSON(tt);return ot.uuid}if(this.isScene){if(this.background){if(this.background.isColor)it.background=this.background.toJSON();else if(this.background.isTexture)it.background=this.background.toJSON(tt).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)it.environment=this.environment.toJSON(tt).uuid}else if(this.isMesh||this.isLine||this.isPoints){it.geometry=st(tt.geometries,this.geometry);let at=this.geometry.parameters;if(at!==void 0&&at.shapes!==void 0){let ot=at.shapes;if(Array.isArray(ot))for(let lt=0,ct=ot.length;lt<ct;lt++){let ut=ot[lt];st(tt.shapes,ut)}else st(tt.shapes,ot)}}if(this.isSkinnedMesh){if(it.bindMode=this.bindMode,it.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)st(tt.skeletons,this.skeleton),it.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let at=[];for(let ot=0,lt=this.material.length;ot<lt;ot++)at.push(st(tt.materials,this.material[ot]));it.material=at}else it.material=st(tt.materials,this.material);if(this.children.length>0){it.children=[];for(let at=0;at<this.children.length;at++)it.children.push(this.children[at].toJSON(tt).object)}if(this.animations.length>0){it.animations=[];for(let at=0;at<this.animations.length;at++){let ot=this.animations[at];it.animations.push(st(tt.animations,ot))}}if(et){let at=rt(tt.geometries),ot=rt(tt.materials),lt=rt(tt.textures),ct=rt(tt.images),ut=rt(tt.shapes),dt=rt(tt.skeletons),ht=rt(tt.animations),pt=rt(tt.nodes);if(at.length>0)nt.geometries=at;if(ot.length>0)nt.materials=ot;if(lt.length>0)nt.textures=lt;if(ct.length>0)nt.images=ct;if(ut.length>0)nt.shapes=ut;if(dt.length>0)nt.skeletons=dt;if(ht.length>0)nt.animations=ht;if(pt.length>0)nt.nodes=pt}return nt.object=it,nt;function rt(at){let ot=[];for(let lt in at){let ct=at[lt];delete ct.metadata,ot.push(ct)}return ot}}clone(tt){return new this.constructor().copy(this,tt)}copy(tt,et=!0){if(this.name=tt.name,this.up.copy(tt.up),this.position.copy(tt.position),this.rotation.order=tt.rotation.order,this.quaternion.copy(tt.quaternion),this.scale.copy(tt.scale),this.pivot=tt.pivot!==null?tt.pivot.clone():null,this.matrix.copy(tt.matrix),this.matrixWorld.copy(tt.matrixWorld),this.matrixAutoUpdate=tt.matrixAutoUpdate,this.matrixWorldAutoUpdate=tt.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=tt.matrixWorldNeedsUpdate,this.layers.mask=tt.layers.mask,this.visible=tt.visible,this.castShadow=tt.castShadow,this.receiveShadow=tt.receiveShadow,this.frustumCulled=tt.frustumCulled,this.renderOrder=tt.renderOrder,this.static=tt.static,this.animations=tt.animations.slice(),this.userData=JSON.parse(JSON.stringify(tt.userData)),et===!0)for(let nt=0;nt<tt.children.length;nt++){let it=tt.children[nt];this.add(it.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}o.DEFAULT_UP=new e(0,1,0);o.DEFAULT_MATRIX_AUTO_UPDATE=!0;o.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class m extends o{constructor(){super();this.isGroup=!0,this.type="Group"}}var uu={type:"move"};class Ns{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new m,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new m,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new e,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new e;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new m,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new e,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new e,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(tt){if(this._targetRay!==null)this._targetRay.dispatchEvent(tt);if(this._grip!==null)this._grip.dispatchEvent(tt);if(this._hand!==null)this._hand.dispatchEvent(tt);return this}connect(tt){if(tt&&tt.hand){let et=this._hand;if(et)for(let nt of tt.hand.values())this._getHandJoint(et,nt)}return this.dispatchEvent({type:"connected",data:tt}),this}disconnect(tt){if(this.dispatchEvent({type:"disconnected",data:tt}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(tt,et,nt){let it=null,st=null,rt=null,at=this._targetRay,ot=this._grip,lt=this._hand;if(tt&&et.session.visibilityState!=="visible-blurred"){if(lt&&tt.hand){rt=!0;for(let xt of tt.hand.values()){let Mt=et.getJointPose(xt,nt),ft=this._getHandJoint(lt,xt);if(Mt!==null)ft.matrix.fromArray(Mt.transform.matrix),ft.matrix.decompose(ft.position,ft.quaternion,ft.scale),ft.matrixWorldNeedsUpdate=!0,ft.jointRadius=Mt.radius;ft.visible=Mt!==null}let ct=lt.joints["index-finger-tip"],ut=lt.joints["thumb-tip"],dt=ct.position.distanceTo(ut.position),ht=0.02,pt=0.005;if(lt.inputState.pinching&&dt>ht+pt)lt.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:tt.handedness,target:this});else if(!lt.inputState.pinching&&dt<=ht-pt)lt.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:tt.handedness,target:this})}else if(ot!==null&&tt.gripSpace){if(st=et.getPose(tt.gripSpace,nt),st!==null){if(ot.matrix.fromArray(st.transform.matrix),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.matrixWorldNeedsUpdate=!0,st.linearVelocity)ot.hasLinearVelocity=!0,ot.linearVelocity.copy(st.linearVelocity);else ot.hasLinearVelocity=!1;if(st.angularVelocity)ot.hasAngularVelocity=!0,ot.angularVelocity.copy(st.angularVelocity);else ot.hasAngularVelocity=!1;if(ot.eventsEnabled)ot.dispatchEvent({type:"gripUpdated",data:tt,target:this})}}if(at!==null){if(it=et.getPose(tt.targetRaySpace,nt),it===null&&st!==null)it=st;if(it!==null){if(at.matrix.fromArray(it.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.matrixWorldNeedsUpdate=!0,it.linearVelocity)at.hasLinearVelocity=!0,at.linearVelocity.copy(it.linearVelocity);else at.hasLinearVelocity=!1;if(it.angularVelocity)at.hasAngularVelocity=!0,at.angularVelocity.copy(it.angularVelocity);else at.hasAngularVelocity=!1;this.dispatchEvent(uu)}}}if(at!==null)at.visible=it!==null;if(ot!==null)ot.visible=st!==null;if(lt!==null)lt.visible=rt!==null;return this}_getHandJoint(tt,et){if(tt.joints[et.jointName]===void 0){let nt=new m;nt.matrixAutoUpdate=!1,nt.visible=!1,tt.joints[et.jointName]=nt,tt.add(nt)}return tt.joints[et.jointName]}}var Oc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},di={h:0,s:0,l:0},Xs={h:0,s:0,l:0};function Qr(tt,et,nt){if(nt<0)nt+=1;if(nt>1)nt-=1;if(nt<0.16666666666666666)return tt+(et-tt)*6*nt;if(nt<0.5)return et;if(nt<0.6666666666666666)return tt+(et-tt)*6*(0.6666666666666666-nt);return tt}class n{constructor(tt,et,nt){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(tt,et,nt)}set(tt,et,nt){if(et===void 0&&nt===void 0){let it=tt;if(it&&it.isColor)this.copy(it);else if(typeof it==="number")this.setHex(it);else if(typeof it==="string")this.setStyle(it)}else this.setRGB(tt,et,nt);return this}setScalar(tt){return this.r=tt,this.g=tt,this.b=tt,this}setHex(tt,et="srgb"){return tt=Math.floor(tt),this.r=(tt>>16&255)/255,this.g=(tt>>8&255)/255,this.b=(tt&255)/255,i.colorSpaceToWorking(this,et),this}setRGB(tt,et,nt,it=i.workingColorSpace){return this.r=tt,this.g=et,this.b=nt,i.colorSpaceToWorking(this,it),this}setHSL(tt,et,nt,it=i.workingColorSpace){if(tt=mo(tt,1),et=Ze(et,0,1),nt=Ze(nt,0,1),et===0)this.r=this.g=this.b=nt;else{let st=nt<=0.5?nt*(1+et):nt+et-nt*et,rt=2*nt-st;this.r=Qr(rt,st,tt+0.3333333333333333),this.g=Qr(rt,st,tt),this.b=Qr(rt,st,tt-0.3333333333333333)}return i.colorSpaceToWorking(this,it),this}setStyle(tt,et="srgb"){function nt(st){if(st===void 0)return;if(parseFloat(st)<1)Oe("Color: Alpha component of "+tt+" will be ignored.")}let it;if(it=/^(\w+)\(([^\)]*)\)/.exec(tt)){let st,rt=it[1],at=it[2];switch(rt){case"rgb":case"rgba":if(st=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(at))return nt(st[4]),this.setRGB(Math.min(255,parseInt(st[1],10))/255,Math.min(255,parseInt(st[2],10))/255,Math.min(255,parseInt(st[3],10))/255,et);if(st=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(at))return nt(st[4]),this.setRGB(Math.min(100,parseFloat(st[1]))/100,Math.min(100,parseFloat(st[2]))/100,Math.min(100,parseFloat(st[3]))/100,et);break;case"hsl":case"hsla":if(st=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(at))return nt(st[4]),this.setHSL(parseFloat(st[1])/360,parseFloat(st[2])/100,parseFloat(st[3])/100,et);break;default:Oe("Color: Unknown color model "+tt)}}else if(it=/^\#([A-Fa-f\d]+)$/.exec(tt)){let st=it[1],rt=st.length;if(rt===3)return this.setRGB(parseInt(st.charAt(0),16)/15,parseInt(st.charAt(1),16)/15,parseInt(st.charAt(2),16)/15,et);else if(rt===6)return this.setHex(parseInt(st,16),et);else Oe("Color: Invalid hex color "+tt)}else if(tt&&tt.length>0)return this.setColorName(tt,et);return this}setColorName(tt,et="srgb"){let nt=Oc[tt.toLowerCase()];if(nt!==void 0)this.setHex(nt,et);else Oe("Color: Unknown color "+tt);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(tt){return this.r=tt.r,this.g=tt.g,this.b=tt.b,this}copySRGBToLinear(tt){return this.r=ii(tt.r),this.g=ii(tt.g),this.b=ii(tt.b),this}copyLinearToSRGB(tt){return this.r=ts(tt.r),this.g=ts(tt.g),this.b=ts(tt.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(tt="srgb"){return i.workingToColorSpace(wn.copy(this),tt),Math.round(Ze(wn.r*255,0,255))*65536+Math.round(Ze(wn.g*255,0,255))*256+Math.round(Ze(wn.b*255,0,255))}getHexString(tt="srgb"){return("000000"+this.getHex(tt).toString(16)).slice(-6)}getHSL(tt,et=i.workingColorSpace){i.workingToColorSpace(wn.copy(this),et);let{r:nt,g:it,b:st}=wn,rt=Math.max(nt,it,st),at=Math.min(nt,it,st),ot,lt,ct=(at+rt)/2;if(at===rt)ot=0,lt=0;else{let ut=rt-at;switch(lt=ct<=0.5?ut/(rt+at):ut/(2-rt-at),rt){case nt:ot=(it-st)/ut+(it<st?6:0);break;case it:ot=(st-nt)/ut+2;break;case st:ot=(nt-it)/ut+4;break}ot/=6}return tt.h=ot,tt.s=lt,tt.l=ct,tt}getRGB(tt,et=i.workingColorSpace){return i.workingToColorSpace(wn.copy(this),et),tt.r=wn.r,tt.g=wn.g,tt.b=wn.b,tt}getStyle(tt="srgb"){i.workingToColorSpace(wn.copy(this),tt);let{r:et,g:nt,b:it}=wn;if(tt!=="srgb")return`color(${tt} ${et.toFixed(3)} ${nt.toFixed(3)} ${it.toFixed(3)})`;return`rgb(${Math.round(et*255)},${Math.round(nt*255)},${Math.round(it*255)})`}offsetHSL(tt,et,nt){return this.getHSL(di),this.setHSL(di.h+tt,di.s+et,di.l+nt)}add(tt){return this.r+=tt.r,this.g+=tt.g,this.b+=tt.b,this}addColors(tt,et){return this.r=tt.r+et.r,this.g=tt.g+et.g,this.b=tt.b+et.b,this}addScalar(tt){return this.r+=tt,this.g+=tt,this.b+=tt,this}sub(tt){return this.r=Math.max(0,this.r-tt.r),this.g=Math.max(0,this.g-tt.g),this.b=Math.max(0,this.b-tt.b),this}multiply(tt){return this.r*=tt.r,this.g*=tt.g,this.b*=tt.b,this}multiplyScalar(tt){return this.r*=tt,this.g*=tt,this.b*=tt,this}lerp(tt,et){return this.r+=(tt.r-this.r)*et,this.g+=(tt.g-this.g)*et,this.b+=(tt.b-this.b)*et,this}lerpColors(tt,et,nt){return this.r=tt.r+(et.r-tt.r)*nt,this.g=tt.g+(et.g-tt.g)*nt,this.b=tt.b+(et.b-tt.b)*nt,this}lerpHSL(tt,et){this.getHSL(di),tt.getHSL(Xs);let nt=ys(di.h,Xs.h,et),it=ys(di.s,Xs.s,et),st=ys(di.l,Xs.l,et);return this.setHSL(nt,it,st),this}setFromVector3(tt){return this.r=tt.x,this.g=tt.y,this.b=tt.z,this}applyMatrix3(tt){let et=this.r,nt=this.g,it=this.b,st=tt.elements;return this.r=st[0]*et+st[3]*nt+st[6]*it,this.g=st[1]*et+st[4]*nt+st[7]*it,this.b=st[2]*et+st[5]*nt+st[8]*it,this}equals(tt){return tt.r===this.r&&tt.g===this.g&&tt.b===this.b}fromArray(tt,et=0){return this.r=tt[et],this.g=tt[et+1],this.b=tt[et+2],this}toArray(tt=[],et=0){return tt[et]=this.r,tt[et+1]=this.g,tt[et+2]=this.b,tt}fromBufferAttribute(tt,et){return this.r=tt.getX(et),this.g=tt.getY(et),this.b=tt.getZ(et),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var wn=new n;n.NAMES=Oc;class O{constructor(tt,et=1,nt=1000){this.isFog=!0,this.name="",this.color=new n(tt),this.near=et,this.far=nt}clone(){return new O(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class T extends o{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xn,this.environmentIntensity=1,this.environmentRotation=new Xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(tt,et){return super.copy(tt,et),this.background=tt.background!==null?tt.background.clone():null,this.environment=tt.environment!==null?tt.environment.clone():null,this.fog=tt.fog!==null?tt.fog.clone():null,this.backgroundBlurriness=tt.backgroundBlurriness,this.backgroundIntensity=tt.backgroundIntensity,this.backgroundRotation.copy(tt.backgroundRotation),this.environmentIntensity=tt.environmentIntensity,this.environmentRotation.copy(tt.environmentRotation),this.overrideMaterial=tt.overrideMaterial!==null?tt.overrideMaterial.clone():null,this.matrixAutoUpdate=tt.matrixAutoUpdate,this}toJSON(tt){let et=super.toJSON(tt);if(this.fog!==null)et.object.fog=this.fog.toJSON();return et.object.backgroundBlurriness=this.backgroundBlurriness,et.object.backgroundIntensity=this.backgroundIntensity,et.object.backgroundRotation=this.backgroundRotation.toArray(),et.object.environmentIntensity=this.environmentIntensity,et.object.environmentRotation=this.environmentRotation.toArray(),et}}var zn=new e,jn=new e,jr=new e,ti=new e,Vi=new e,Xi=new e,_l=new e,ta=new e,ea=new e,na=new e,ia=new un,sa=new un,ra=new un;class Nn{constructor(tt=new e,et=new e,nt=new e){this.a=tt,this.b=et,this.c=nt}static getNormal(tt,et,nt,it){it.subVectors(nt,et),zn.subVectors(tt,et),it.cross(zn);let st=it.lengthSq();if(st>0)return it.multiplyScalar(1/Math.sqrt(st));return it.set(0,0,0)}static getBarycoord(tt,et,nt,it,st){zn.subVectors(it,et),jn.subVectors(nt,et),jr.subVectors(tt,et);let rt=zn.dot(zn),at=zn.dot(jn),ot=zn.dot(jr),lt=jn.dot(jn),ct=jn.dot(jr),ut=rt*lt-at*at;if(ut===0)return st.set(0,0,0),null;let dt=1/ut,ht=(lt*ot-at*ct)*dt,pt=(rt*ct-at*ot)*dt;return st.set(1-ht-pt,pt,ht)}static containsPoint(tt,et,nt,it){if(this.getBarycoord(tt,et,nt,it,ti)===null)return!1;return ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getInterpolation(tt,et,nt,it,st,rt,at,ot){if(this.getBarycoord(tt,et,nt,it,ti)===null){if(ot.x=0,ot.y=0,"z"in ot)ot.z=0;if("w"in ot)ot.w=0;return null}return ot.setScalar(0),ot.addScaledVector(st,ti.x),ot.addScaledVector(rt,ti.y),ot.addScaledVector(at,ti.z),ot}static getInterpolatedAttribute(tt,et,nt,it,st,rt){return ia.setScalar(0),sa.setScalar(0),ra.setScalar(0),ia.fromBufferAttribute(tt,et),sa.fromBufferAttribute(tt,nt),ra.fromBufferAttribute(tt,it),rt.setScalar(0),rt.addScaledVector(ia,st.x),rt.addScaledVector(sa,st.y),rt.addScaledVector(ra,st.z),rt}static isFrontFacing(tt,et,nt,it){return zn.subVectors(nt,et),jn.subVectors(tt,et),zn.cross(jn).dot(it)<0}set(tt,et,nt){return this.a.copy(tt),this.b.copy(et),this.c.copy(nt),this}setFromPointsAndIndices(tt,et,nt,it){return this.a.copy(tt[et]),this.b.copy(tt[nt]),this.c.copy(tt[it]),this}setFromAttributeAndIndices(tt,et,nt,it){return this.a.fromBufferAttribute(tt,et),this.b.fromBufferAttribute(tt,nt),this.c.fromBufferAttribute(tt,it),this}clone(){return new this.constructor().copy(this)}copy(tt){return this.a.copy(tt.a),this.b.copy(tt.b),this.c.copy(tt.c),this}getArea(){return zn.subVectors(this.c,this.b),jn.subVectors(this.a,this.b),zn.cross(jn).length()*0.5}getMidpoint(tt){return tt.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(tt){return Nn.getNormal(this.a,this.b,this.c,tt)}getPlane(tt){return tt.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(tt,et){return Nn.getBarycoord(tt,this.a,this.b,this.c,et)}getInterpolation(tt,et,nt,it,st){return Nn.getInterpolation(tt,this.a,this.b,this.c,et,nt,it,st)}containsPoint(tt){return Nn.containsPoint(tt,this.a,this.b,this.c)}isFrontFacing(tt){return Nn.isFrontFacing(this.a,this.b,this.c,tt)}intersectsBox(tt){return tt.intersectsTriangle(this)}closestPointToPoint(tt,et){let nt=this.a,it=this.b,st=this.c,rt,at;Vi.subVectors(it,nt),Xi.subVectors(st,nt),ta.subVectors(tt,nt);let ot=Vi.dot(ta),lt=Xi.dot(ta);if(ot<=0&&lt<=0)return et.copy(nt);ea.subVectors(tt,it);let ct=Vi.dot(ea),ut=Xi.dot(ea);if(ct>=0&&ut<=ct)return et.copy(it);let dt=ot*ut-ct*lt;if(dt<=0&&ot>=0&&ct<=0&&ot-ct>0)return rt=ot/(ot-ct),et.copy(nt).addScaledVector(Vi,rt);na.subVectors(tt,st);let ht=Vi.dot(na),pt=Xi.dot(na);if(pt>=0&&ht<=pt)return et.copy(st);let xt=ht*lt-ot*pt;if(xt<=0&&lt>=0&&pt<=0)return at=lt/(lt-pt),et.copy(nt).addScaledVector(Xi,at);let Mt=ct*pt-ht*ut;if(Mt<=0&&ut-ct>=0&&ht-pt>=0)return _l.subVectors(st,it),at=(ut-ct)/(ut-ct+(ht-pt)),et.copy(it).addScaledVector(_l,at);let ft=1/(Mt+xt+dt);return rt=xt*ft,at=dt*ft,et.copy(nt).addScaledVector(Vi,rt).addScaledVector(Xi,at)}equals(tt){return tt.a.equals(this.a)&&tt.b.equals(this.b)&&tt.c.equals(this.c)}}class li{constructor(tt=new e(1/0,1/0,1/0),et=new e(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=tt,this.max=et}set(tt,et){return this.min.copy(tt),this.max.copy(et),this}setFromArray(tt){this.makeEmpty();for(let et=0,nt=tt.length;et<nt;et+=3)this.expandByPoint(Gn.fromArray(tt,et));return this}setFromBufferAttribute(tt){this.makeEmpty();for(let et=0,nt=tt.count;et<nt;et++)this.expandByPoint(Gn.fromBufferAttribute(tt,et));return this}setFromPoints(tt){this.makeEmpty();for(let et=0,nt=tt.length;et<nt;et++)this.expandByPoint(tt[et]);return this}setFromCenterAndSize(tt,et){let nt=Gn.copy(et).multiplyScalar(0.5);return this.min.copy(tt).sub(nt),this.max.copy(tt).add(nt),this}setFromObject(tt,et=!1){return this.makeEmpty(),this.expandByObject(tt,et)}clone(){return new this.constructor().copy(this)}copy(tt){return this.min.copy(tt.min),this.max.copy(tt.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(tt){return this.isEmpty()?tt.set(0,0,0):tt.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(tt){return this.isEmpty()?tt.set(0,0,0):tt.subVectors(this.max,this.min)}expandByPoint(tt){return this.min.min(tt),this.max.max(tt),this}expandByVector(tt){return this.min.sub(tt),this.max.add(tt),this}expandByScalar(tt){return this.min.addScalar(-tt),this.max.addScalar(tt),this}expandByObject(tt,et=!1){tt.updateWorldMatrix(!1,!1);let nt=tt.geometry;if(nt!==void 0){let st=nt.getAttribute("position");if(et===!0&&st!==void 0&&tt.isInstancedMesh!==!0&&tt.isBatchedMesh!==!0)for(let rt=0,at=st.count;rt<at;rt++){if(tt.isMesh===!0)tt.getVertexPosition(rt,Gn);else Gn.fromBufferAttribute(st,rt);Gn.applyMatrix4(tt.matrixWorld),this.expandByPoint(Gn)}else{if(tt.boundingBox!==void 0){if(tt.boundingBox===null)tt.computeBoundingBox();qs.copy(tt.boundingBox)}else{if(nt.boundingBox===null)nt.computeBoundingBox();qs.copy(nt.boundingBox)}qs.applyMatrix4(tt.matrixWorld),this.union(qs)}}let it=tt.children;for(let st=0,rt=it.length;st<rt;st++)this.expandByObject(it[st],et);return this}containsPoint(tt){return tt.x>=this.min.x&&tt.x<=this.max.x&&tt.y>=this.min.y&&tt.y<=this.max.y&&tt.z>=this.min.z&&tt.z<=this.max.z}containsBox(tt){return this.min.x<=tt.min.x&&tt.max.x<=this.max.x&&this.min.y<=tt.min.y&&tt.max.y<=this.max.y&&this.min.z<=tt.min.z&&tt.max.z<=this.max.z}getParameter(tt,et){return et.set((tt.x-this.min.x)/(this.max.x-this.min.x),(tt.y-this.min.y)/(this.max.y-this.min.y),(tt.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(tt){return tt.max.x>=this.min.x&&tt.min.x<=this.max.x&&tt.max.y>=this.min.y&&tt.min.y<=this.max.y&&tt.max.z>=this.min.z&&tt.min.z<=this.max.z}intersectsSphere(tt){return this.clampPoint(tt.center,Gn),Gn.distanceToSquared(tt.center)<=tt.radius*tt.radius}intersectsPlane(tt){let et,nt;if(tt.normal.x>0)et=tt.normal.x*this.min.x,nt=tt.normal.x*this.max.x;else et=tt.normal.x*this.max.x,nt=tt.normal.x*this.min.x;if(tt.normal.y>0)et+=tt.normal.y*this.min.y,nt+=tt.normal.y*this.max.y;else et+=tt.normal.y*this.max.y,nt+=tt.normal.y*this.min.y;if(tt.normal.z>0)et+=tt.normal.z*this.min.z,nt+=tt.normal.z*this.max.z;else et+=tt.normal.z*this.max.z,nt+=tt.normal.z*this.min.z;return et<=-tt.constant&&nt>=-tt.constant}intersectsTriangle(tt){if(this.isEmpty())return!1;this.getCenter(ds),Ys.subVectors(this.max,ds),qi.subVectors(tt.a,ds),Yi.subVectors(tt.b,ds),Zi.subVectors(tt.c,ds),fi.subVectors(Yi,qi),pi.subVectors(Zi,Yi),Ti.subVectors(qi,Zi);let et=[0,-fi.z,fi.y,0,-pi.z,pi.y,0,-Ti.z,Ti.y,fi.z,0,-fi.x,pi.z,0,-pi.x,Ti.z,0,-Ti.x,-fi.y,fi.x,0,-pi.y,pi.x,0,-Ti.y,Ti.x,0];if(!aa(et,qi,Yi,Zi,Ys))return!1;if(et=[1,0,0,0,1,0,0,0,1],!aa(et,qi,Yi,Zi,Ys))return!1;return Zs.crossVectors(fi,pi),et=[Zs.x,Zs.y,Zs.z],aa(et,qi,Yi,Zi,Ys)}clampPoint(tt,et){return et.copy(tt).clamp(this.min,this.max)}distanceToPoint(tt){return this.clampPoint(tt,Gn).distanceTo(tt)}getBoundingSphere(tt){if(this.isEmpty())tt.makeEmpty();else this.getCenter(tt.center),tt.radius=this.getSize(Gn).length()*0.5;return tt}intersect(tt){if(this.min.max(tt.min),this.max.min(tt.max),this.isEmpty())this.makeEmpty();return this}union(tt){return this.min.min(tt.min),this.max.max(tt.max),this}applyMatrix4(tt){if(this.isEmpty())return this;return ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(tt),ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(tt),ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(tt),ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(tt),ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(tt),ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(tt),ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(tt),ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(tt),this.setFromPoints(ei),this}translate(tt){return this.min.add(tt),this.max.add(tt),this}equals(tt){return tt.min.equals(this.min)&&tt.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(tt){return this.min.fromArray(tt.min),this.max.fromArray(tt.max),this}}var ei=[new e,new e,new e,new e,new e,new e,new e,new e],Gn=new e,qs=new li,qi=new e,Yi=new e,Zi=new e,fi=new e,pi=new e,Ti=new e,ds=new e,Ys=new e,Zs=new e,Ei=new e;function aa(tt,et,nt,it,st){for(let rt=0,at=tt.length-3;rt<=at;rt+=3){Ei.fromArray(tt,rt);let ot=st.x*Math.abs(Ei.x)+st.y*Math.abs(Ei.y)+st.z*Math.abs(Ei.z),lt=et.dot(Ei),ct=nt.dot(Ei),ut=it.dot(Ei);if(Math.max(-Math.max(lt,ct,ut),Math.min(lt,ct,ut))>ot)return!1}return!0}var pn=new e,Js=new t,du=0;class Vn extends ai{constructor(tt,et,nt=!1){super();if(Array.isArray(tt))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:du++}),this.name="",this.array=tt,this.itemSize=et,this.count=tt!==void 0?tt.length/et:0,this.normalized=nt,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0,this._normalizationScale=tt!==void 0?_o(tt):void 0}onUploadCallback(){}set needsUpdate(tt){if(tt===!0)this.version++}setUsage(tt){return this.usage=tt,this}addUpdateRange(tt,et){this.updateRanges.push({start:tt,count:et})}clearUpdateRanges(){this.updateRanges.length=0}copy(tt){return this.name=tt.name,this.array=new tt.array.constructor(tt.array),this.itemSize=tt.itemSize,this.count=tt.count,this.normalized=tt.normalized,this.usage=tt.usage,this.gpuType=tt.gpuType,this._normalizationScale=tt._normalizationScale,this}copyAt(tt,et,nt){tt*=this.itemSize,nt*=et.itemSize;for(let it=0,st=this.itemSize;it<st;it++)this.array[tt+it]=et.array[nt+it];return this}copyArray(tt){return this.array.set(tt),this}applyMatrix3(tt){if(this.itemSize===2)for(let et=0,nt=this.count;et<nt;et++)Js.fromBufferAttribute(this,et),Js.applyMatrix3(tt),this.setXY(et,Js.x,Js.y);else if(this.itemSize===3)for(let et=0,nt=this.count;et<nt;et++)pn.fromBufferAttribute(this,et),pn.applyMatrix3(tt),this.setXYZ(et,pn.x,pn.y,pn.z);return this}applyMatrix4(tt){for(let et=0,nt=this.count;et<nt;et++)pn.fromBufferAttribute(this,et),pn.applyMatrix4(tt),this.setXYZ(et,pn.x,pn.y,pn.z);return this}applyNormalMatrix(tt){for(let et=0,nt=this.count;et<nt;et++)pn.fromBufferAttribute(this,et),pn.applyNormalMatrix(tt),this.setXYZ(et,pn.x,pn.y,pn.z);return this}transformDirection(tt){for(let et=0,nt=this.count;et<nt;et++)pn.fromBufferAttribute(this,et),pn.transformDirection(tt),this.setXYZ(et,pn.x,pn.y,pn.z);return this}set(tt,et=0){return this.array.set(tt,et),this}getComponent(tt,et){let nt=this.array[tt*this.itemSize+et];if(this.normalized)nt=this._denormalize(nt);return nt}setComponent(tt,et,nt){if(this.normalized)nt=this._normalize(nt);return this.array[tt*this.itemSize+et]=nt,this}getX(tt){let et=this.array[tt*this.itemSize];if(this.normalized)et=this._denormalize(et);return et}setX(tt,et){if(this.normalized)et=this._normalize(et);return this.array[tt*this.itemSize]=et,this}getY(tt){let et=this.array[tt*this.itemSize+1];if(this.normalized)et=this._denormalize(et);return et}setY(tt,et){if(this.normalized)et=this._normalize(et);return this.array[tt*this.itemSize+1]=et,this}getZ(tt){let et=this.array[tt*this.itemSize+2];if(this.normalized)et=this._denormalize(et);return et}setZ(tt,et){if(this.normalized)et=this._normalize(et);return this.array[tt*this.itemSize+2]=et,this}getW(tt){let et=this.array[tt*this.itemSize+3];if(this.normalized)et=this._denormalize(et);return et}setW(tt,et){if(this.normalized)et=this._normalize(et);return this.array[tt*this.itemSize+3]=et,this}setXY(tt,et,nt){if(tt*=this.itemSize,this.normalized)et=this._normalize(et),nt=this._normalize(nt);return this.array[tt+0]=et,this.array[tt+1]=nt,this}setXYZ(tt,et,nt,it){if(tt*=this.itemSize,this.normalized)et=this._normalize(et),nt=this._normalize(nt),it=this._normalize(it);return this.array[tt+0]=et,this.array[tt+1]=nt,this.array[tt+2]=it,this}setXYZW(tt,et,nt,it,st){if(tt*=this.itemSize,this.normalized)et=this._normalize(et),nt=this._normalize(nt),it=this._normalize(it),st=this._normalize(st);return this.array[tt+0]=et,this.array[tt+1]=nt,this.array[tt+2]=it,this.array[tt+3]=st,this}onUpload(tt){return this.onUploadCallback=tt,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let tt={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return tt.name=this.name,tt.usage=this.usage,tt.gpuType=this.gpuType,tt}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(tt){let et=this._normalizationScale;return et!==void 0?Math.max(tt/et,-1):Uc(tt,this.array)}_normalize(tt){let et=this._normalizationScale;return et!==void 0?Math.round(tt*et):Fc(tt,this.array)}}class Ar extends Vn{constructor(tt,et,nt){super(new Uint16Array(tt),et,nt)}}class wr extends Vn{constructor(tt,et,nt){super(new Uint32Array(tt),et,nt)}}class r extends Vn{constructor(tt,et,nt){super(new Float32Array(tt),et,nt)}}var fu=new li,fs=new e,oa=new e;class Ui{constructor(tt=new e,et=-1){this.isSphere=!0,this.center=tt,this.radius=et}set(tt,et){return this.center.copy(tt),this.radius=et,this}setFromPoints(tt,et){let nt=this.center;if(et!==void 0)nt.copy(et);else fu.setFromPoints(tt).getCenter(nt);let it=0;for(let st=0,rt=tt.length;st<rt;st++)it=Math.max(it,nt.distanceToSquared(tt[st]));return this.radius=Math.sqrt(it),this}copy(tt){return this.center.copy(tt.center),this.radius=tt.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(tt){return tt.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(tt){return tt.distanceTo(this.center)-this.radius}intersectsSphere(tt){let et=this.radius+tt.radius;return tt.center.distanceToSquared(this.center)<=et*et}intersectsBox(tt){return tt.intersectsSphere(this)}intersectsPlane(tt){return Math.abs(tt.distanceToPoint(this.center))<=this.radius}clampPoint(tt,et){let nt=this.center.distanceToSquared(tt);if(et.copy(tt),nt>this.radius*this.radius)et.sub(this.center).normalize(),et.multiplyScalar(this.radius).add(this.center);return et}getBoundingBox(tt){if(this.isEmpty())return tt.makeEmpty(),tt;return tt.set(this.center,this.center),tt.expandByScalar(this.radius),tt}applyMatrix4(tt){return this.center.applyMatrix4(tt),this.radius=this.radius*tt.getMaxScaleOnAxis(),this}translate(tt){return this.center.add(tt),this}expandByPoint(tt){if(this.isEmpty())return this.center.copy(tt),this.radius=0,this;fs.subVectors(tt,this.center);let et=fs.lengthSq();if(et>this.radius*this.radius){let nt=Math.sqrt(et),it=(nt-this.radius)*0.5;this.center.addScaledVector(fs,it/nt),this.radius+=it}return this}union(tt){if(tt.isEmpty())return this;if(this.isEmpty())return this.copy(tt),this;if(this.center.equals(tt.center)===!0)this.radius=Math.max(this.radius,tt.radius);else oa.subVectors(tt.center,this.center).setLength(tt.radius),this.expandByPoint(fs.copy(tt.center).add(oa)),this.expandByPoint(fs.copy(tt.center).sub(oa));return this}equals(tt){return tt.center.equals(this.center)&&tt.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(tt){return this.radius=tt.radius,this.center.fromArray(tt.center),this}}var pu=0,Ln=new an,la=new o,Ji=new e,Pn=new li,ps=new li,Sn=new e;class f extends ai{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pu++}),this.uuid=Di(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(tt){if(Array.isArray(tt))this.index=new((zh(tt))?wr:Ar)(tt,1);else this.index=tt;return this}setIndirect(tt,et=0){return this.indirect=tt,this.indirectOffset=et,this}getIndirect(){return this.indirect}getAttribute(tt){return this.attributes[tt]}setAttribute(tt,et){return this.attributes[tt]=et,this}deleteAttribute(tt){return delete this.attributes[tt],this}hasAttribute(tt){return this.attributes[tt]!==void 0}addGroup(tt,et,nt=0){this.groups.push({start:tt,count:et,materialIndex:nt})}clearGroups(){this.groups=[]}setDrawRange(tt,et){this.drawRange.start=tt,this.drawRange.count=et}applyMatrix4(tt){let et=this.attributes.position;if(et!==void 0)et.applyMatrix4(tt),et.needsUpdate=!0;let nt=this.attributes.normal;if(nt!==void 0){let st=new Ge().getNormalMatrix(tt);nt.applyNormalMatrix(st),nt.needsUpdate=!0}let it=this.attributes.tangent;if(it!==void 0)it.transformDirection(tt),it.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this._transformed=!0,this}applyQuaternion(tt){return Ln.makeRotationFromQuaternion(tt),this.applyMatrix4(Ln),this}rotateX(tt){return Ln.makeRotationX(tt),this.applyMatrix4(Ln),this}rotateY(tt){return Ln.makeRotationY(tt),this.applyMatrix4(Ln),this}rotateZ(tt){return Ln.makeRotationZ(tt),this.applyMatrix4(Ln),this}translate(tt,et,nt){return Ln.makeTranslation(tt,et,nt),this.applyMatrix4(Ln),this}scale(tt,et,nt){return Ln.makeScale(tt,et,nt),this.applyMatrix4(Ln),this}lookAt(tt){return la.lookAt(tt),la.updateMatrix(),this.applyMatrix4(la.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ji).negate(),this.translate(Ji.x,Ji.y,Ji.z),this}setFromPoints(tt){let et=this.getAttribute("position");if(et===void 0){let nt=[];for(let it=0,st=tt.length;it<st;it++){let rt=tt[it];nt.push(rt.x,rt.y,rt.z||0)}this.setAttribute("position",new r(nt,3))}else{let nt=Math.min(tt.length,et.count);for(let it=0;it<nt;it++){let st=tt[it];et.setXYZ(it,st.x,st.y,st.z||0)}if(tt.length>et.count)Oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");et.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new li;let tt=this.attributes.position,et=this.morphAttributes.position;if(tt&&tt.isGLBufferAttribute){Be("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new e(-1/0,-1/0,-1/0),new e(1/0,1/0,1/0));return}if(tt!==void 0){if(this.boundingBox.setFromBufferAttribute(tt),et)for(let nt=0,it=et.length;nt<it;nt++){let st=et[nt];if(Pn.setFromBufferAttribute(st),this.morphTargetsRelative)Sn.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint(Sn);else this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))Be('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new Ui;let tt=this.attributes.position,et=this.morphAttributes.position;if(tt&&tt.isGLBufferAttribute){Be("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new e,1/0);return}if(tt){let nt=this.boundingSphere.center;if(Pn.setFromBufferAttribute(tt),et)for(let st=0,rt=et.length;st<rt;st++){let at=et[st];if(ps.setFromBufferAttribute(at),this.morphTargetsRelative)Sn.addVectors(Pn.min,ps.min),Pn.expandByPoint(Sn),Sn.addVectors(Pn.max,ps.max),Pn.expandByPoint(Sn);else Pn.expandByPoint(ps.min),Pn.expandByPoint(ps.max)}Pn.getCenter(nt);let it=0;for(let st=0,rt=tt.count;st<rt;st++)Sn.fromBufferAttribute(tt,st),it=Math.max(it,nt.distanceToSquared(Sn));if(et)for(let st=0,rt=et.length;st<rt;st++){let at=et[st],ot=this.morphTargetsRelative;for(let lt=0,ct=at.count;lt<ct;lt++){if(Sn.fromBufferAttribute(at,lt),ot)Ji.fromBufferAttribute(tt,lt),Sn.add(Ji);it=Math.max(it,nt.distanceToSquared(Sn))}}if(this.boundingSphere.radius=Math.sqrt(it),isNaN(this.boundingSphere.radius))Be('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let tt=this.index,et=this.attributes;if(tt===null||et.position===void 0||et.normal===void 0||et.uv===void 0){Be("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:nt,normal:it,uv:st}=et,rt=this.getAttribute("tangent");if(rt===void 0||rt.count!==nt.count)rt=new Vn(new Float32Array(4*nt.count),4),this.setAttribute("tangent",rt);let at=[],ot=[],lt=new Uint8Array(nt.count);for(let St=0;St<nt.count;St++)at[St]=new e,ot[St]=new e;let ct=new e,ut=new e,dt=new e,ht=new t,pt=new t,xt=new t,Mt=new e,ft=new e;function mt(St,It,Bt){lt[St]=lt[It]=lt[Bt]=1,ct.fromBufferAttribute(nt,St),ut.fromBufferAttribute(nt,It),dt.fromBufferAttribute(nt,Bt),ht.fromBufferAttribute(st,St),pt.fromBufferAttribute(st,It),xt.fromBufferAttribute(st,Bt),ut.sub(ct),dt.sub(ct),pt.sub(ht),xt.sub(ht);let Lt=1/(pt.x*xt.y-xt.x*pt.y);if(!isFinite(Lt))return;Mt.copy(ut).multiplyScalar(xt.y).addScaledVector(dt,-pt.y).multiplyScalar(Lt),ft.copy(dt).multiplyScalar(pt.x).addScaledVector(ut,-xt.x).multiplyScalar(Lt),at[St].add(Mt),at[It].add(Mt),at[Bt].add(Mt),ot[St].add(ft),ot[It].add(ft),ot[Bt].add(ft)}let Et=this.groups;if(Et.length===0)Et=[{start:0,count:tt.count}];for(let St=0,It=Et.length;St<It;++St){let Bt=Et[St],{start:Lt,count:zt}=Bt;for(let $t=Lt,wt=Lt+zt;$t<wt;$t+=3)mt(tt.getX($t+0),tt.getX($t+1),tt.getX($t+2))}let Tt=new e,yt=new e,At=new e,Rt=new e;function gt(St){At.fromBufferAttribute(it,St),Rt.copy(At);let It=at[St];Tt.copy(It),Tt.sub(At.multiplyScalar(At.dot(It))).normalize(),yt.crossVectors(Rt,It);let Lt=yt.dot(ot[St])<0?-1:1;rt.setXYZW(St,Tt.x,Tt.y,Tt.z,Lt)}for(let St=0,It=nt.count;St<It;++St)if(lt[St])gt(St);this._transformed=!0}computeVertexNormals(){let tt=this.index,et=this.getAttribute("position");if(et!==void 0){let nt=this.getAttribute("normal");if(nt===void 0||nt.count!==et.count)nt=new Vn(new Float32Array(et.count*3),3),this.setAttribute("normal",nt);else for(let dt=0,ht=nt.count;dt<ht;dt++)nt.setXYZ(dt,0,0,0);let it=new e,st=new e,rt=new e,at=new e,ot=new e,lt=new e,ct=new e,ut=new e;if(tt)for(let dt=0,ht=tt.count;dt<ht;dt+=3){let pt=tt.getX(dt+0),xt=tt.getX(dt+1),Mt=tt.getX(dt+2);it.fromBufferAttribute(et,pt),st.fromBufferAttribute(et,xt),rt.fromBufferAttribute(et,Mt),ct.subVectors(rt,st),ut.subVectors(it,st),ct.cross(ut),at.fromBufferAttribute(nt,pt),ot.fromBufferAttribute(nt,xt),lt.fromBufferAttribute(nt,Mt),at.add(ct),ot.add(ct),lt.add(ct),nt.setXYZ(pt,at.x,at.y,at.z),nt.setXYZ(xt,ot.x,ot.y,ot.z),nt.setXYZ(Mt,lt.x,lt.y,lt.z)}else for(let dt=0,ht=et.count;dt<ht;dt+=3)it.fromBufferAttribute(et,dt+0),st.fromBufferAttribute(et,dt+1),rt.fromBufferAttribute(et,dt+2),ct.subVectors(rt,st),ut.subVectors(it,st),ct.cross(ut),nt.setXYZ(dt+0,ct.x,ct.y,ct.z),nt.setXYZ(dt+1,ct.x,ct.y,ct.z),nt.setXYZ(dt+2,ct.x,ct.y,ct.z);this.normalizeNormals(),nt.needsUpdate=!0}}normalizeNormals(){let tt=this.attributes.normal;for(let et=0,nt=tt.count;et<nt;et++)Sn.fromBufferAttribute(tt,et),Sn.normalize(),tt.setXYZ(et,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function tt(at,ot){let{array:lt,itemSize:ct,normalized:ut}=at,dt=new lt.constructor(ot.length*ct),ht=0,pt=0;for(let xt=0,Mt=ot.length;xt<Mt;xt++){if(at.isInterleavedBufferAttribute)ht=ot[xt]*at.data.stride+at.offset;else ht=ot[xt]*ct;for(let ft=0;ft<ct;ft++)dt[pt++]=lt[ht++]}return new Vn(dt,ct,ut)}if(this.index===null)return Oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let et=new f,nt=this.index.array,it=this.attributes;for(let at in it){let ot=it[at],lt=tt(ot,nt);et.setAttribute(at,lt)}let st=this.morphAttributes;for(let at in st){let ot=[],lt=st[at];for(let ct=0,ut=lt.length;ct<ut;ct++){let dt=lt[ct],ht=tt(dt,nt);ot.push(ht)}et.morphAttributes[at]=ot}et.morphTargetsRelative=this.morphTargetsRelative;let rt=this.groups;for(let at=0,ot=rt.length;at<ot;at++){let lt=rt[at];et.addGroup(lt.start,lt.count,lt.materialIndex)}return et}toJSON(){let tt={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(tt.uuid=this.uuid,tt.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,tt.name=this.name,Object.keys(this.userData).length>0)tt.userData=this.userData;if(this.parameters!==void 0&&this._transformed!==!0){let ot=this.parameters;for(let lt in ot)if(ot[lt]!==void 0)tt[lt]=ot[lt];return tt}tt.data={attributes:{}};let et=this.index;if(et!==null)tt.data.index={type:et.array.constructor.name,array:Array.prototype.slice.call(et.array)};let nt=this.attributes;for(let ot in nt){let lt=nt[ot];tt.data.attributes[ot]=lt.toJSON(tt.data)}let it={},st=!1;for(let ot in this.morphAttributes){let lt=this.morphAttributes[ot],ct=[];for(let ut=0,dt=lt.length;ut<dt;ut++){let ht=lt[ut];ct.push(ht.toJSON(tt.data))}if(ct.length>0)it[ot]=ct,st=!0}if(st)tt.data.morphAttributes=it,tt.data.morphTargetsRelative=this.morphTargetsRelative;let rt=this.groups;if(rt.length>0)tt.data.groups=JSON.parse(JSON.stringify(rt));let at=this.boundingSphere;if(at!==null)tt.data.boundingSphere=at.toJSON();return tt}clone(){return new this.constructor().copy(this)}copy(tt){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let et={};this.name=tt.name;let nt=tt.index;if(nt!==null)this.setIndex(nt.clone());let it=tt.attributes;for(let lt in it){let ct=it[lt];this.setAttribute(lt,ct.clone(et))}let st=tt.morphAttributes;for(let lt in st){let ct=[],ut=st[lt];for(let dt=0,ht=ut.length;dt<ht;dt++)ct.push(ut[dt].clone(et));this.morphAttributes[lt]=ct}this.morphTargetsRelative=tt.morphTargetsRelative;let rt=tt.groups;for(let lt=0,ct=rt.length;lt<ct;lt++){let ut=rt[lt];this.addGroup(ut.start,ut.count,ut.materialIndex)}let at=tt.boundingBox;if(at!==null)this.boundingBox=at.clone();let ot=tt.boundingSphere;if(ot!==null)this.boundingSphere=ot.clone();return this.drawRange.start=tt.drawRange.start,this.drawRange.count=tt.drawRange.count,this.userData=tt.userData,this._transformed=tt._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}var ca=new e,mu=new e,gu=new Ge;class Wn{constructor(tt=new e(1,0,0),et=0){this.isPlane=!0,this.normal=tt,this.constant=et}set(tt,et){return this.normal.copy(tt),this.constant=et,this}setComponents(tt,et,nt,it){return this.normal.set(tt,et,nt),this.constant=it,this}setFromNormalAndCoplanarPoint(tt,et){return this.normal.copy(tt),this.constant=-et.dot(this.normal),this}setFromCoplanarPoints(tt,et,nt){let it=ca.subVectors(nt,et).cross(mu.subVectors(tt,et)).normalize();return this.setFromNormalAndCoplanarPoint(it,tt),this}copy(tt){return this.normal.copy(tt.normal),this.constant=tt.constant,this}normalize(){let tt=1/this.normal.length();return this.normal.multiplyScalar(tt),this.constant*=tt,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(tt){return this.normal.dot(tt)+this.constant}distanceToSphere(tt){return this.distanceToPoint(tt.center)-tt.radius}projectPoint(tt,et){return et.copy(tt).addScaledVector(this.normal,-this.distanceToPoint(tt))}intersectLine(tt,et,nt=!0){let it=tt.delta(ca),st=this.normal.dot(it);if(st===0){if(this.distanceToPoint(tt.start)===0)return et.copy(tt.start);return null}let rt=-(tt.start.dot(this.normal)+this.constant)/st;if(nt===!0&&(rt<0||rt>1))return null;return et.copy(tt.start).addScaledVector(it,rt)}intersectsLine(tt){let et=this.distanceToPoint(tt.start),nt=this.distanceToPoint(tt.end);return et<0&&nt>0||nt<0&&et>0}intersectsBox(tt){return tt.intersectsPlane(this)}intersectsSphere(tt){return tt.intersectsPlane(this)}coplanarPoint(tt){return tt.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(tt,et){let nt=et||gu.getNormalMatrix(tt),it=this.coplanarPoint(ca).applyMatrix4(tt),st=this.normal.applyMatrix3(nt).normalize();return this.constant=-it.dot(st),this}translate(tt){return this.constant-=tt.dot(this.normal),this}equals(tt){return tt.normal.equals(this.normal)&&tt.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(tt){return this.normal.fromArray(tt.normal),this.constant=tt.constant,this}}var _u=0;class ci extends ai{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:_u++}),this.uuid=Di(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new n(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(tt){if(this._alphaTest>0!==tt>0)this.version++;this._alphaTest=tt}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(tt){if(tt===void 0)return;for(let et in tt){let nt=tt[et];if(nt===void 0){Oe(`Material: parameter '${et}' has value of undefined.`);continue}let it=this[et];if(it===void 0){Oe(`Material: '${et}' is not a property of THREE.${this.type}.`);continue}if(it&&it.isColor)it.set(nt);else if(it&&it.isVector2&&(nt&&nt.isVector2)||it&&it.isEuler&&(nt&&nt.isEuler)||it&&it.isVector3&&(nt&&nt.isVector3))it.copy(nt);else this[et]=nt}}toJSON(tt){let et=tt===void 0||typeof tt==="string";if(et)tt={textures:{},images:{}};let nt={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if(nt.uuid=this.uuid,nt.type=this.type,nt.blending=this.blending,nt.side=this.side,nt.shadowSide=this.shadowSide,nt.vertexColors=this.vertexColors,nt.opacity=this.opacity,nt.transparent=this.transparent,nt.blendSrc=this.blendSrc,nt.blendDst=this.blendDst,nt.blendEquation=this.blendEquation,nt.blendSrcAlpha=this.blendSrcAlpha,nt.blendDstAlpha=this.blendDstAlpha,nt.blendEquationAlpha=this.blendEquationAlpha,nt.blendColor=this.blendColor.getHex(),nt.blendAlpha=this.blendAlpha,nt.depthFunc=this.depthFunc,nt.depthTest=this.depthTest,nt.depthWrite=this.depthWrite,nt.colorWrite=this.colorWrite,nt.clipIntersection=this.clipIntersection,nt.clipShadows=this.clipShadows,nt.stencilWriteMask=this.stencilWriteMask,nt.stencilFunc=this.stencilFunc,nt.stencilRef=this.stencilRef,nt.stencilFuncMask=this.stencilFuncMask,nt.stencilFail=this.stencilFail,nt.stencilZFail=this.stencilZFail,nt.stencilZPass=this.stencilZPass,nt.stencilWrite=this.stencilWrite,nt.polygonOffset=this.polygonOffset,nt.polygonOffsetFactor=this.polygonOffsetFactor,nt.polygonOffsetUnits=this.polygonOffsetUnits,nt.dithering=this.dithering,nt.alphaTest=this.alphaTest,nt.alphaHash=this.alphaHash,nt.alphaToCoverage=this.alphaToCoverage,nt.premultipliedAlpha=this.premultipliedAlpha,nt.forceSinglePass=this.forceSinglePass,nt.allowOverride=this.allowOverride,nt.visible=this.visible,nt.toneMapped=this.toneMapped,nt.name=this.name,this.color&&this.color.isColor)nt.color=this.color.getHex();if(this.roughness!==void 0)nt.roughness=this.roughness;if(this.metalness!==void 0)nt.metalness=this.metalness;if(this.sheen!==void 0)nt.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)nt.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)nt.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)nt.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0)nt.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)nt.specular=this.specular.getHex();if(this.specularIntensity!==void 0)nt.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)nt.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)nt.shininess=this.shininess;if(this.clearcoat!==void 0)nt.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)nt.clearcoatRoughness=this.clearcoatRoughness;if(this.diffuseRoughness!==void 0)nt.diffuseRoughness=this.diffuseRoughness;if(this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture)nt.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(tt).uuid;if(this.clearcoatMap&&this.clearcoatMap.isTexture)nt.clearcoatMap=this.clearcoatMap.toJSON(tt).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)nt.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(tt).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)nt.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(tt).uuid,nt.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)nt.sheenColorMap=this.sheenColorMap.toJSON(tt).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)nt.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(tt).uuid;if(this.dispersion!==void 0)nt.dispersion=this.dispersion;if(this.retroreflectivity!==void 0)nt.retroreflectivity=this.retroreflectivity;if(this.iridescence!==void 0)nt.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)nt.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessMinimum!==void 0)nt.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum;if(this.iridescenceThicknessMaximum!==void 0)nt.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum;if(this.iridescenceMap&&this.iridescenceMap.isTexture)nt.iridescenceMap=this.iridescenceMap.toJSON(tt).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)nt.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(tt).uuid;if(this.anisotropy!==void 0)nt.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)nt.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)nt.anisotropyMap=this.anisotropyMap.toJSON(tt).uuid;if(this.map&&this.map.isTexture)nt.map=this.map.toJSON(tt).uuid;if(this.matcap&&this.matcap.isTexture)nt.matcap=this.matcap.toJSON(tt).uuid;if(this.alphaMap&&this.alphaMap.isTexture)nt.alphaMap=this.alphaMap.toJSON(tt).uuid;if(this.lightMap&&this.lightMap.isTexture)nt.lightMap=this.lightMap.toJSON(tt).uuid,nt.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)nt.aoMap=this.aoMap.toJSON(tt).uuid,nt.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)nt.bumpMap=this.bumpMap.toJSON(tt).uuid,nt.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)nt.normalMap=this.normalMap.toJSON(tt).uuid,nt.normalMapType=this.normalMapType,nt.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)nt.displacementMap=this.displacementMap.toJSON(tt).uuid,nt.displacementScale=this.displacementScale,nt.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)nt.roughnessMap=this.roughnessMap.toJSON(tt).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)nt.metalnessMap=this.metalnessMap.toJSON(tt).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)nt.emissiveMap=this.emissiveMap.toJSON(tt).uuid;if(this.specularMap&&this.specularMap.isTexture)nt.specularMap=this.specularMap.toJSON(tt).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)nt.specularIntensityMap=this.specularIntensityMap.toJSON(tt).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)nt.specularColorMap=this.specularColorMap.toJSON(tt).uuid;if(this.envMap&&this.envMap.isTexture){if(nt.envMap=this.envMap.toJSON(tt).uuid,this.combine!==void 0)nt.combine=this.combine}if(this.envMapRotation!==void 0)nt.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)nt.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)nt.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)nt.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)nt.gradientMap=this.gradientMap.toJSON(tt).uuid;if(this.transmission!==void 0)nt.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)nt.transmissionMap=this.transmissionMap.toJSON(tt).uuid;if(this.thickness!==void 0)nt.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)nt.thicknessMap=this.thicknessMap.toJSON(tt).uuid;if(this.attenuationDistance!==void 0)nt.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)nt.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)nt.size=this.size;if(this.sizeAttenuation!==void 0)nt.sizeAttenuation=this.sizeAttenuation;if(Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0)nt.clippingPlanes=this.clippingPlanes.map((st)=>st.toJSON());if(this.rotation!==void 0)nt.rotation=this.rotation;if(this.depthPacking!==void 0)nt.depthPacking=this.depthPacking;if(this.linewidth!==void 0)nt.linewidth=this.linewidth;if(this.linecap!==void 0)nt.linecap=this.linecap;if(this.linejoin!==void 0)nt.linejoin=this.linejoin;if(this.dashSize!==void 0)nt.dashSize=this.dashSize;if(this.gapSize!==void 0)nt.gapSize=this.gapSize;if(this.scale!==void 0)nt.scale=this.scale;if(this.wireframe!==void 0)nt.wireframe=this.wireframe;if(this.wireframeLinewidth!==void 0)nt.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!==void 0)nt.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!==void 0)nt.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading!==void 0)nt.flatShading=this.flatShading;if(this.fog!==void 0)nt.fog=this.fog;if(Object.keys(this.userData).length>0)nt.userData=this.userData;function it(st){let rt=[];for(let at in st){let ot=st[at];delete ot.metadata,rt.push(ot)}return rt}if(et){let st=it(tt.textures),rt=it(tt.images);if(st.length>0)nt.textures=st;if(rt.length>0)nt.images=rt}return nt}fromJSON(tt,et){if(tt.uuid!==void 0)this.uuid=tt.uuid;if(tt.name!==void 0)this.name=tt.name;if(tt.color!==void 0&&this.color!==void 0)this.color.setHex(tt.color);if(tt.roughness!==void 0)this.roughness=tt.roughness;if(tt.metalness!==void 0)this.metalness=tt.metalness;if(tt.sheen!==void 0)this.sheen=tt.sheen;if(tt.sheenColor!==void 0)this.sheenColor=new n().setHex(tt.sheenColor);if(tt.sheenRoughness!==void 0)this.sheenRoughness=tt.sheenRoughness;if(tt.emissive!==void 0&&this.emissive!==void 0)this.emissive.setHex(tt.emissive);if(tt.specular!==void 0&&this.specular!==void 0)this.specular.setHex(tt.specular);if(tt.specularIntensity!==void 0)this.specularIntensity=tt.specularIntensity;if(tt.specularColor!==void 0&&this.specularColor!==void 0)this.specularColor.setHex(tt.specularColor);if(tt.shininess!==void 0)this.shininess=tt.shininess;if(tt.clearcoat!==void 0)this.clearcoat=tt.clearcoat;if(tt.clearcoatRoughness!==void 0)this.clearcoatRoughness=tt.clearcoatRoughness;if(tt.diffuseRoughness!==void 0)this.diffuseRoughness=tt.diffuseRoughness;if(tt.dispersion!==void 0)this.dispersion=tt.dispersion;if(tt.retroreflectivity!==void 0)this.retroreflectivity=tt.retroreflectivity;if(tt.iridescence!==void 0)this.iridescence=tt.iridescence;if(tt.iridescenceIOR!==void 0)this.iridescenceIOR=tt.iridescenceIOR;if(tt.iridescenceThicknessMinimum!==void 0)this.iridescenceThicknessMinimum=tt.iridescenceThicknessMinimum;if(tt.iridescenceThicknessMaximum!==void 0)this.iridescenceThicknessMaximum=tt.iridescenceThicknessMaximum;if(tt.iridescenceThicknessRange!==void 0)this.iridescenceThicknessMinimum=tt.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=tt.iridescenceThicknessRange[1];if(tt.transmission!==void 0)this.transmission=tt.transmission;if(tt.thickness!==void 0)this.thickness=tt.thickness;if(tt.attenuationDistance!==void 0)this.attenuationDistance=tt.attenuationDistance;if(tt.attenuationColor!==void 0&&this.attenuationColor!==void 0)this.attenuationColor.setHex(tt.attenuationColor);if(tt.anisotropy!==void 0)this.anisotropy=tt.anisotropy;if(tt.anisotropyRotation!==void 0)this.anisotropyRotation=tt.anisotropyRotation;if(tt.fog!==void 0)this.fog=tt.fog;if(tt.flatShading!==void 0)this.flatShading=tt.flatShading;if(tt.blending!==void 0)this.blending=tt.blending;if(tt.combine!==void 0)this.combine=tt.combine;if(tt.side!==void 0)this.side=tt.side;if(tt.shadowSide!==void 0)this.shadowSide=tt.shadowSide;if(tt.opacity!==void 0)this.opacity=tt.opacity;if(tt.transparent!==void 0)this.transparent=tt.transparent;if(tt.alphaTest!==void 0)this.alphaTest=tt.alphaTest;if(tt.alphaHash!==void 0)this.alphaHash=tt.alphaHash;if(tt.depthFunc!==void 0)this.depthFunc=tt.depthFunc;if(tt.depthTest!==void 0)this.depthTest=tt.depthTest;if(tt.depthWrite!==void 0)this.depthWrite=tt.depthWrite;if(tt.colorWrite!==void 0)this.colorWrite=tt.colorWrite;if(tt.clippingPlanes!==void 0)this.clippingPlanes=tt.clippingPlanes.map((nt)=>new Wn().fromJSON(nt));if(tt.clipIntersection!==void 0)this.clipIntersection=tt.clipIntersection;if(tt.clipShadows!==void 0)this.clipShadows=tt.clipShadows;if(tt.depthPacking!==void 0)this.depthPacking=tt.depthPacking;if(tt.blendSrc!==void 0)this.blendSrc=tt.blendSrc;if(tt.blendDst!==void 0)this.blendDst=tt.blendDst;if(tt.blendEquation!==void 0)this.blendEquation=tt.blendEquation;if(tt.blendSrcAlpha!==void 0)this.blendSrcAlpha=tt.blendSrcAlpha;if(tt.blendDstAlpha!==void 0)this.blendDstAlpha=tt.blendDstAlpha;if(tt.blendEquationAlpha!==void 0)this.blendEquationAlpha=tt.blendEquationAlpha;if(tt.blendColor!==void 0&&this.blendColor!==void 0)this.blendColor.setHex(tt.blendColor);if(tt.blendAlpha!==void 0)this.blendAlpha=tt.blendAlpha;if(tt.stencilWriteMask!==void 0)this.stencilWriteMask=tt.stencilWriteMask;if(tt.stencilFunc!==void 0)this.stencilFunc=tt.stencilFunc;if(tt.stencilRef!==void 0)this.stencilRef=tt.stencilRef;if(tt.stencilFuncMask!==void 0)this.stencilFuncMask=tt.stencilFuncMask;if(tt.stencilFail!==void 0)this.stencilFail=tt.stencilFail;if(tt.stencilZFail!==void 0)this.stencilZFail=tt.stencilZFail;if(tt.stencilZPass!==void 0)this.stencilZPass=tt.stencilZPass;if(tt.stencilWrite!==void 0)this.stencilWrite=tt.stencilWrite;if(tt.wireframe!==void 0)this.wireframe=tt.wireframe;if(tt.wireframeLinewidth!==void 0)this.wireframeLinewidth=tt.wireframeLinewidth;if(tt.wireframeLinecap!==void 0)this.wireframeLinecap=tt.wireframeLinecap;if(tt.wireframeLinejoin!==void 0)this.wireframeLinejoin=tt.wireframeLinejoin;if(tt.rotation!==void 0)this.rotation=tt.rotation;if(tt.linewidth!==void 0)this.linewidth=tt.linewidth;if(tt.linecap!==void 0)this.linecap=tt.linecap;if(tt.linejoin!==void 0)this.linejoin=tt.linejoin;if(tt.dashSize!==void 0)this.dashSize=tt.dashSize;if(tt.gapSize!==void 0)this.gapSize=tt.gapSize;if(tt.scale!==void 0)this.scale=tt.scale;if(tt.polygonOffset!==void 0)this.polygonOffset=tt.polygonOffset;if(tt.polygonOffsetFactor!==void 0)this.polygonOffsetFactor=tt.polygonOffsetFactor;if(tt.polygonOffsetUnits!==void 0)this.polygonOffsetUnits=tt.polygonOffsetUnits;if(tt.dithering!==void 0)this.dithering=tt.dithering;if(tt.alphaToCoverage!==void 0)this.alphaToCoverage=tt.alphaToCoverage;if(tt.premultipliedAlpha!==void 0)this.premultipliedAlpha=tt.premultipliedAlpha;if(tt.forceSinglePass!==void 0)this.forceSinglePass=tt.forceSinglePass;if(tt.allowOverride!==void 0)this.allowOverride=tt.allowOverride;if(tt.visible!==void 0)this.visible=tt.visible;if(tt.toneMapped!==void 0)this.toneMapped=tt.toneMapped;if(tt.userData!==void 0)this.userData=tt.userData;if(tt.vertexColors!==void 0)if(typeof tt.vertexColors==="number")this.vertexColors=tt.vertexColors>0;else this.vertexColors=tt.vertexColors;if(tt.size!==void 0)this.size=tt.size;if(tt.sizeAttenuation!==void 0)this.sizeAttenuation=tt.sizeAttenuation;if(tt.map!==void 0)this.map=et[tt.map]||null;if(tt.matcap!==void 0)this.matcap=et[tt.matcap]||null;if(tt.alphaMap!==void 0)this.alphaMap=et[tt.alphaMap]||null;if(tt.bumpMap!==void 0)this.bumpMap=et[tt.bumpMap]||null;if(tt.bumpScale!==void 0)this.bumpScale=tt.bumpScale;if(tt.normalMap!==void 0)this.normalMap=et[tt.normalMap]||null;if(tt.normalMapType!==void 0)this.normalMapType=tt.normalMapType;if(tt.normalScale!==void 0){let nt=tt.normalScale;if(Array.isArray(nt)===!1)nt=[nt,nt];this.normalScale=new t().fromArray(nt)}if(tt.displacementMap!==void 0)this.displacementMap=et[tt.displacementMap]||null;if(tt.displacementScale!==void 0)this.displacementScale=tt.displacementScale;if(tt.displacementBias!==void 0)this.displacementBias=tt.displacementBias;if(tt.roughnessMap!==void 0)this.roughnessMap=et[tt.roughnessMap]||null;if(tt.metalnessMap!==void 0)this.metalnessMap=et[tt.metalnessMap]||null;if(tt.emissiveMap!==void 0)this.emissiveMap=et[tt.emissiveMap]||null;if(tt.emissiveIntensity!==void 0)this.emissiveIntensity=tt.emissiveIntensity;if(tt.specularMap!==void 0)this.specularMap=et[tt.specularMap]||null;if(tt.specularIntensityMap!==void 0)this.specularIntensityMap=et[tt.specularIntensityMap]||null;if(tt.specularColorMap!==void 0)this.specularColorMap=et[tt.specularColorMap]||null;if(tt.envMap!==void 0)this.envMap=et[tt.envMap]||null;if(tt.envMapRotation!==void 0)this.envMapRotation.fromArray(tt.envMapRotation);if(tt.envMapIntensity!==void 0)this.envMapIntensity=tt.envMapIntensity;if(tt.reflectivity!==void 0)this.reflectivity=tt.reflectivity;if(tt.refractionRatio!==void 0)this.refractionRatio=tt.refractionRatio;if(tt.lightMap!==void 0)this.lightMap=et[tt.lightMap]||null;if(tt.lightMapIntensity!==void 0)this.lightMapIntensity=tt.lightMapIntensity;if(tt.aoMap!==void 0)this.aoMap=et[tt.aoMap]||null;if(tt.aoMapIntensity!==void 0)this.aoMapIntensity=tt.aoMapIntensity;if(tt.gradientMap!==void 0)this.gradientMap=et[tt.gradientMap]||null;if(tt.clearcoatMap!==void 0)this.clearcoatMap=et[tt.clearcoatMap]||null;if(tt.clearcoatRoughnessMap!==void 0)this.clearcoatRoughnessMap=et[tt.clearcoatRoughnessMap]||null;if(tt.clearcoatNormalMap!==void 0)this.clearcoatNormalMap=et[tt.clearcoatNormalMap]||null;if(tt.clearcoatNormalScale!==void 0)this.clearcoatNormalScale=new t().fromArray(tt.clearcoatNormalScale);if(tt.diffuseRoughnessMap!==void 0)this.diffuseRoughnessMap=et[tt.diffuseRoughnessMap]||null;if(tt.iridescenceMap!==void 0)this.iridescenceMap=et[tt.iridescenceMap]||null;if(tt.iridescenceThicknessMap!==void 0)this.iridescenceThicknessMap=et[tt.iridescenceThicknessMap]||null;if(tt.transmissionMap!==void 0)this.transmissionMap=et[tt.transmissionMap]||null;if(tt.thicknessMap!==void 0)this.thicknessMap=et[tt.thicknessMap]||null;if(tt.anisotropyMap!==void 0)this.anisotropyMap=et[tt.anisotropyMap]||null;if(tt.sheenColorMap!==void 0)this.sheenColorMap=et[tt.sheenColorMap]||null;if(tt.sheenRoughnessMap!==void 0)this.sheenRoughnessMap=et[tt.sheenRoughnessMap]||null;return this}clone(){return new this.constructor().copy(this)}copy(tt){this.name=tt.name,this.blending=tt.blending,this.side=tt.side,this.vertexColors=tt.vertexColors,this.opacity=tt.opacity,this.transparent=tt.transparent,this.blendSrc=tt.blendSrc,this.blendDst=tt.blendDst,this.blendEquation=tt.blendEquation,this.blendSrcAlpha=tt.blendSrcAlpha,this.blendDstAlpha=tt.blendDstAlpha,this.blendEquationAlpha=tt.blendEquationAlpha,this.blendColor.copy(tt.blendColor),this.blendAlpha=tt.blendAlpha,this.depthFunc=tt.depthFunc,this.depthTest=tt.depthTest,this.depthWrite=tt.depthWrite,this.stencilWriteMask=tt.stencilWriteMask,this.stencilFunc=tt.stencilFunc,this.stencilRef=tt.stencilRef,this.stencilFuncMask=tt.stencilFuncMask,this.stencilFail=tt.stencilFail,this.stencilZFail=tt.stencilZFail,this.stencilZPass=tt.stencilZPass,this.stencilWrite=tt.stencilWrite;let et=tt.clippingPlanes,nt=null;if(et!==null){let it=et.length;nt=Array(it);for(let st=0;st!==it;++st)nt[st]=et[st].clone()}return this.clippingPlanes=nt,this.clipIntersection=tt.clipIntersection,this.clipShadows=tt.clipShadows,this.shadowSide=tt.shadowSide,this.colorWrite=tt.colorWrite,this.precision=tt.precision,this.polygonOffset=tt.polygonOffset,this.polygonOffsetFactor=tt.polygonOffsetFactor,this.polygonOffsetUnits=tt.polygonOffsetUnits,this.dithering=tt.dithering,this.alphaTest=tt.alphaTest,this.alphaHash=tt.alphaHash,this.alphaToCoverage=tt.alphaToCoverage,this.premultipliedAlpha=tt.premultipliedAlpha,this.forceSinglePass=tt.forceSinglePass,this.allowOverride=tt.allowOverride,this.visible=tt.visible,this.toneMapped=tt.toneMapped,this.userData=JSON.parse(JSON.stringify(tt.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(tt){if(tt===!0)this.version++}}var ni=new e,ha=new e,$s=new e,Ks=new e;class So{constructor(tt=new e,et=new e(0,0,-1)){this.origin=tt,this.direction=et}set(tt,et){return this.origin.copy(tt),this.direction.copy(et),this}copy(tt){return this.origin.copy(tt.origin),this.direction.copy(tt.direction),this}at(tt,et){return et.copy(this.origin).addScaledVector(this.direction,tt)}lookAt(tt){return this.direction.copy(tt).sub(this.origin).normalize(),this}recast(tt){return this.origin.copy(this.at(tt,ni)),this}closestPointToPoint(tt,et){et.subVectors(tt,this.origin);let nt=et.dot(this.direction);if(nt<0)return et.copy(this.origin);return et.copy(this.origin).addScaledVector(this.direction,nt)}distanceToPoint(tt){return Math.sqrt(this.distanceSqToPoint(tt))}distanceSqToPoint(tt){let et=ni.subVectors(tt,this.origin).dot(this.direction);if(et<0)return this.origin.distanceToSquared(tt);return ni.copy(this.origin).addScaledVector(this.direction,et),ni.distanceToSquared(tt)}distanceSqToSegment(tt,et,nt,it){ha.copy(tt).add(et).multiplyScalar(0.5),$s.copy(et).sub(tt).normalize(),Ks.copy(this.origin).sub(ha);let st=tt.distanceTo(et)*0.5,rt=-this.direction.dot($s),at=Ks.dot(this.direction),ot=-Ks.dot($s),lt=Ks.lengthSq(),ct=Math.abs(1-rt*rt),ut,dt,ht,pt;if(ct>0)if(ut=rt*ot-at,dt=rt*at-ot,pt=st*ct,ut>=0)if(dt>=-pt)if(dt<=pt){let xt=1/ct;ut*=xt,dt*=xt,ht=ut*(ut+rt*dt+2*at)+dt*(rt*ut+dt+2*ot)+lt}else dt=st,ut=Math.max(0,-(rt*dt+at)),ht=-ut*ut+dt*(dt+2*ot)+lt;else dt=-st,ut=Math.max(0,-(rt*dt+at)),ht=-ut*ut+dt*(dt+2*ot)+lt;else if(dt<=-pt)ut=Math.max(0,-(-rt*st+at)),dt=ut>0?-st:Math.min(Math.max(-st,-ot),st),ht=-ut*ut+dt*(dt+2*ot)+lt;else if(dt<=pt)ut=0,dt=Math.min(Math.max(-st,-ot),st),ht=dt*(dt+2*ot)+lt;else ut=Math.max(0,-(rt*st+at)),dt=ut>0?st:Math.min(Math.max(-st,-ot),st),ht=-ut*ut+dt*(dt+2*ot)+lt;else dt=rt>0?-st:st,ut=Math.max(0,-(rt*dt+at)),ht=-ut*ut+dt*(dt+2*ot)+lt;if(nt)nt.copy(this.origin).addScaledVector(this.direction,ut);if(it)it.copy(ha).addScaledVector($s,dt);return ht}intersectSphere(tt,et){if(tt.radius<0)return null;ni.subVectors(tt.center,this.origin);let nt=ni.dot(this.direction),it=ni.dot(ni)-nt*nt,st=tt.radius*tt.radius;if(it>st)return null;let rt=Math.sqrt(st-it),at=nt-rt,ot=nt+rt;if(ot<0)return null;if(at<0)return this.at(ot,et);return this.at(at,et)}intersectsSphere(tt){if(tt.radius<0)return!1;return this.distanceSqToPoint(tt.center)<=tt.radius*tt.radius}distanceToPlane(tt){let et=tt.normal.dot(this.direction);if(et===0){if(tt.distanceToPoint(this.origin)===0)return 0;return null}let nt=-(this.origin.dot(tt.normal)+tt.constant)/et;return nt>=0?nt:null}intersectPlane(tt,et){let nt=this.distanceToPlane(tt);if(nt===null)return null;return this.at(nt,et)}intersectsPlane(tt){let et=tt.distanceToPoint(this.origin);if(et===0)return!0;if(tt.normal.dot(this.direction)*et<0)return!0;return!1}intersectBox(tt,et){let nt,it,st,rt,at,ot,lt=1/this.direction.x,ct=1/this.direction.y,ut=1/this.direction.z,dt=this.origin;if(lt>=0)nt=(tt.min.x-dt.x)*lt,it=(tt.max.x-dt.x)*lt;else nt=(tt.max.x-dt.x)*lt,it=(tt.min.x-dt.x)*lt;if(ct>=0)st=(tt.min.y-dt.y)*ct,rt=(tt.max.y-dt.y)*ct;else st=(tt.max.y-dt.y)*ct,rt=(tt.min.y-dt.y)*ct;if(nt>rt||st>it)return null;if(st>nt||isNaN(nt))nt=st;if(rt<it||isNaN(it))it=rt;if(ut>=0)at=(tt.min.z-dt.z)*ut,ot=(tt.max.z-dt.z)*ut;else at=(tt.max.z-dt.z)*ut,ot=(tt.min.z-dt.z)*ut;if(nt>ot||at>it)return null;if(at>nt||nt!==nt)nt=at;if(ot<it||it!==it)it=ot;if(it<0)return null;return this.at(nt>=0?nt:it,et)}intersectsBox(tt){return this.intersectBox(tt,ni)!==null}intersectTriangle(tt,et,nt,it,st){let rt=this.origin,at=this.direction,{x:ot,y:lt,z:ct}=at,ut=tt.x-rt.x,dt=tt.y-rt.y,ht=tt.z-rt.z,pt=et.x-rt.x,xt=et.y-rt.y,Mt=et.z-rt.z,ft=nt.x-rt.x,mt=nt.y-rt.y,Et=nt.z-rt.z,Tt=Math.abs(ot),yt=Math.abs(lt),At=Math.abs(ct),Rt,gt,St,It,Bt,Lt,zt,$t,wt,Vt,Xt,Ft;if(Tt>=yt&&Tt>=At)if(St=ot,Lt=ut,wt=pt,Ft=ft,ot>=0)Rt=lt,gt=ct,It=dt,Bt=ht,zt=xt,$t=Mt,Vt=mt,Xt=Et;else Rt=ct,gt=lt,It=ht,Bt=dt,zt=Mt,$t=xt,Vt=Et,Xt=mt;else if(yt>=At)if(St=lt,Lt=dt,wt=xt,Ft=mt,lt>=0)Rt=ct,gt=ot,It=ht,Bt=ut,zt=Mt,$t=pt,Vt=Et,Xt=ft;else Rt=ot,gt=ct,It=ut,Bt=ht,zt=pt,$t=Mt,Vt=ft,Xt=Et;else if(St=ct,Lt=ht,wt=Mt,Ft=Et,ct>=0)Rt=ot,gt=lt,It=ut,Bt=dt,zt=pt,$t=xt,Vt=ft,Xt=mt;else Rt=lt,gt=ot,It=dt,Bt=ut,zt=xt,$t=pt,Vt=mt,Xt=ft;if(St===0)return null;let se=Rt/St,Ht=gt/St,Jt=1/St,te=It-se*Lt,Se=Bt-Ht*Lt,Yt=zt-se*wt,ne=$t-Ht*wt,be=Vt-se*Ft,Pe=Xt-Ht*Ft,Le=be*ne-Pe*Yt,ve=te*Pe-Se*be,Qe=Yt*Se-ne*te;if(it){if(Le<0||ve<0||Qe<0)return null}else if((Le<0||ve<0||Qe<0)&&(Le>0||ve>0||Qe>0))return null;let Ve=Le+ve+Qe;if(Ve===0)return null;let Fe=Jt*(Le*Lt+ve*wt+Qe*Ft);if(Ve>0?Fe<0:Fe>0)return null;return this.at(Fe/Ve,st)}applyMatrix4(tt){return this.origin.applyMatrix4(tt),this.direction.transformDirection(tt),this}equals(tt){return tt.origin.equals(this.origin)&&tt.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class x extends ci{constructor(tt){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new n(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(tt)}copy(tt){return super.copy(tt),this.color.copy(tt.color),this.map=tt.map,this.lightMap=tt.lightMap,this.lightMapIntensity=tt.lightMapIntensity,this.aoMap=tt.aoMap,this.aoMapIntensity=tt.aoMapIntensity,this.specularMap=tt.specularMap,this.alphaMap=tt.alphaMap,this.envMap=tt.envMap,this.envMapRotation.copy(tt.envMapRotation),this.combine=tt.combine,this.reflectivity=tt.reflectivity,this.refractionRatio=tt.refractionRatio,this.wireframe=tt.wireframe,this.wireframeLinewidth=tt.wireframeLinewidth,this.wireframeLinecap=tt.wireframeLinecap,this.wireframeLinejoin=tt.wireframeLinejoin,this.fog=tt.fog,this}}var xl=new an,Ai=new So,Qs=new Ui,vl=new e,js=new e,tr=new e,er=new e,ua=new e,nr=new e,yl=new e,ir=new e;class a extends o{constructor(tt=new f,et=new x){super();this.isMesh=!0,this.type="Mesh",this.geometry=tt,this.material=et,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(tt,et){if(super.copy(tt,et),tt.morphTargetInfluences!==void 0)this.morphTargetInfluences=tt.morphTargetInfluences.slice();else this.morphTargetInfluences=void 0;if(tt.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},tt.morphTargetDictionary);else this.morphTargetDictionary=void 0;return this.material=Array.isArray(tt.material)?tt.material.slice():tt.material,this.geometry=tt.geometry,this}updateMorphTargets(){let et=this.geometry.morphAttributes,nt=Object.keys(et);if(nt.length>0){let it=et[nt[0]];if(it!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let st=0,rt=it.length;st<rt;st++){let at=it[st].name||String(st);this.morphTargetInfluences.push(0),this.morphTargetDictionary[at]=st}}}}getVertexPosition(tt,et){let nt=this.geometry,it=nt.attributes.position,st=nt.morphAttributes.position,rt=nt.morphTargetsRelative;et.fromBufferAttribute(it,tt);let at=this.morphTargetInfluences;if(st&&at){nr.set(0,0,0);for(let ot=0,lt=st.length;ot<lt;ot++){let ct=at[ot],ut=st[ot];if(ct===0)continue;if(ua.fromBufferAttribute(ut,tt),rt)nr.addScaledVector(ua,ct);else nr.addScaledVector(ua.sub(et),ct)}et.add(nr)}return et}intersectsFrustum(tt){return tt.intersectsObject(this)}raycast(tt,et){let nt=this.geometry,it=this.material,st=this.matrixWorld;if(it===void 0)return;if(nt.boundingSphere===null)nt.computeBoundingSphere();if(Qs.copy(nt.boundingSphere),Qs.applyMatrix4(st),Ai.copy(tt.ray).recast(tt.near),Qs.containsPoint(Ai.origin)===!1){if(Ai.intersectSphere(Qs,vl)===null)return;if(Ai.origin.distanceToSquared(vl)>(tt.far-tt.near)**2)return}if(xl.copy(st).invert(),Ai.copy(tt.ray).applyMatrix4(xl),nt.boundingBox!==null){if(Ai.intersectsBox(nt.boundingBox)===!1)return}this._computeIntersections(tt,et,Ai)}_computeIntersections(tt,et,nt){let it,st=this.geometry,rt=this.material,at=st.index,ot=st.attributes.position,lt=st.attributes.uv,ct=st.attributes.uv1,ut=st.attributes.normal,{groups:dt,drawRange:ht}=st;if(at!==null)if(Array.isArray(rt))for(let pt=0,xt=dt.length;pt<xt;pt++){let Mt=dt[pt],ft=rt[Mt.materialIndex],mt=Math.max(Mt.start,ht.start),Et=Math.min(at.count,Math.min(Mt.start+Mt.count,ht.start+ht.count));for(let Tt=mt,yt=Et;Tt<yt;Tt+=3){let At=at.getX(Tt),Rt=at.getX(Tt+1),gt=at.getX(Tt+2);if(it=sr(this,ft,tt,nt,lt,ct,ut,At,Rt,gt),it)it.faceIndex=Math.floor(Tt/3),it.face.materialIndex=Mt.materialIndex,et.push(it)}}else{let pt=Math.max(0,ht.start),xt=Math.min(at.count,ht.start+ht.count);for(let Mt=pt,ft=xt;Mt<ft;Mt+=3){let mt=at.getX(Mt),Et=at.getX(Mt+1),Tt=at.getX(Mt+2);if(it=sr(this,rt,tt,nt,lt,ct,ut,mt,Et,Tt),it)it.faceIndex=Math.floor(Mt/3),et.push(it)}}else if(ot!==void 0)if(Array.isArray(rt))for(let pt=0,xt=dt.length;pt<xt;pt++){let Mt=dt[pt],ft=rt[Mt.materialIndex],mt=Math.max(Mt.start,ht.start),Et=Math.min(ot.count,Math.min(Mt.start+Mt.count,ht.start+ht.count));for(let Tt=mt,yt=Et;Tt<yt;Tt+=3){let At=Tt,Rt=Tt+1,gt=Tt+2;if(it=sr(this,ft,tt,nt,lt,ct,ut,At,Rt,gt),it)it.faceIndex=Math.floor(Tt/3),it.face.materialIndex=Mt.materialIndex,et.push(it)}}else{let pt=Math.max(0,ht.start),xt=Math.min(ot.count,ht.start+ht.count);for(let Mt=pt,ft=xt;Mt<ft;Mt+=3){let mt=Mt,Et=Mt+1,Tt=Mt+2;if(it=sr(this,rt,tt,nt,lt,ct,ut,mt,Et,Tt),it)it.faceIndex=Math.floor(Mt/3),et.push(it)}}}}function xu(tt,et,nt,it,st,rt,at,ot){let lt;if(et.side===1)lt=it.intersectTriangle(at,rt,st,!0,ot);else lt=it.intersectTriangle(st,rt,at,et.side===0,ot);if(lt===null)return null;ir.copy(ot),ir.applyMatrix4(tt.matrixWorld);let ct=nt.ray.origin.distanceTo(ir);if(ct<nt.near||ct>nt.far)return null;return{distance:ct,point:ir.clone(),object:tt}}function sr(tt,et,nt,it,st,rt,at,ot,lt,ct){tt.getVertexPosition(ot,js),tt.getVertexPosition(lt,tr),tt.getVertexPosition(ct,er);let ut=xu(tt,et,nt,it,js,tr,er,yl);if(ut){let dt=new e;if(Nn.getBarycoord(yl,js,tr,er,dt),st)ut.uv=Nn.getInterpolatedAttribute(st,ot,lt,ct,dt,new t);if(rt)ut.uv1=Nn.getInterpolatedAttribute(rt,ot,lt,ct,dt,new t);if(at){if(ut.normal=Nn.getInterpolatedAttribute(at,ot,lt,ct,dt,new e),ut.normal.dot(it.direction)>0)ut.normal.multiplyScalar(-1)}let ht={a:ot,b:lt,c:ct,normal:new e,materialIndex:0};Nn.getNormal(js,tr,er,ht.normal),ut.face=ht,ut.barycoord=dt}return ut}class Rr extends bn{constructor(tt=null,et=1,nt=1,it,st,rt,at,ot,lt=1003,ct=1003,ut,dt){super(null,rt,at,ot,lt,ct,it,st,ut,dt);this.isDataTexture=!0,this.image={data:tt,width:et,height:nt},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class dr extends Vn{constructor(tt,et,nt,it=1){super(tt,et,nt);this.isInstancedBufferAttribute=!0,this.meshPerAttribute=it}copy(tt){return super.copy(tt),this.meshPerAttribute=tt.meshPerAttribute,this}toJSON(){let tt=super.toJSON();return tt.meshPerAttribute=this.meshPerAttribute,tt.isInstancedBufferAttribute=!0,tt}}var $i=new an,Sl=new an,rr=[],Ml=new li,vu=new an,ms=new a,gs=new Ui;class Z extends a{constructor(tt,et,nt){super(tt,et);this.isInstancedMesh=!0,this.instanceMatrix=new dr(new Float32Array(nt*16),16),this.instanceColor=null,this.morphTexture=null,this.count=nt,this.boundingBox=null,this.boundingSphere=null;for(let it=0;it<nt;it++)this.setMatrixAt(it,vu)}computeBoundingBox(){let tt=this.geometry,et=this.count;if(this.boundingBox===null)this.boundingBox=new li;if(tt.boundingBox===null)tt.computeBoundingBox();this.boundingBox.makeEmpty();for(let nt=0;nt<et;nt++)this.getMatrixAt(nt,$i),Ml.copy(tt.boundingBox).applyMatrix4($i),this.boundingBox.union(Ml)}computeBoundingSphere(){let tt=this.geometry,et=this.count;if(this.boundingSphere===null)this.boundingSphere=new Ui;if(tt.boundingSphere===null)tt.computeBoundingSphere();this.boundingSphere.makeEmpty();for(let nt=0;nt<et;nt++)this.getMatrixAt(nt,$i),gs.copy(tt.boundingSphere).applyMatrix4($i),this.boundingSphere.union(gs)}copy(tt,et){return super.copy(tt,et),this.instanceMatrix.copy(tt.instanceMatrix),this.morphTexture=tt.morphTexture!==null?tt.morphTexture.clone():null,this.instanceColor=tt.instanceColor!==null?tt.instanceColor.clone():null,this.count=tt.count,this.boundingBox=tt.boundingBox!==null?tt.boundingBox.clone():null,this.boundingSphere=tt.boundingSphere!==null?tt.boundingSphere.clone():null,this}getColorAt(tt,et){if(this.instanceColor===null)return et.setRGB(1,1,1);else return et.fromArray(this.instanceColor.array,tt*3)}getMatrixAt(tt,et){return et.fromArray(this.instanceMatrix.array,tt*16)}getMorphAt(tt,et){let nt=et.morphTargetInfluences,it=this.morphTexture.source.data.data,st=nt.length+1,rt=tt*st+1;for(let at=0;at<nt.length;at++)nt[at]=it[rt+at]}raycast(tt,et){let nt=this.matrixWorld,it=this.count;if(ms.geometry=this.geometry,ms.material=this.material,ms.material===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(gs.copy(this.boundingSphere),gs.applyMatrix4(nt),tt.ray.intersectsSphere(gs)===!1)return;for(let st=0;st<it;st++){this.getMatrixAt(st,$i),Sl.multiplyMatrices(nt,$i),ms.matrixWorld=Sl,ms.raycast(tt,rr);for(let rt=0,at=rr.length;rt<at;rt++){let ot=rr[rt];ot.instanceId=st,ot.object=this,et.push(ot)}rr.length=0}}setColorAt(tt,et){if(this.instanceColor===null)this.instanceColor=new dr(new Float32Array(this.instanceMatrix.count*3).fill(1),3);return et.toArray(this.instanceColor.array,tt*3),this}setMatrixAt(tt,et){return et.toArray(this.instanceMatrix.array,tt*16),this}setMorphAt(tt,et){let nt=et.morphTargetInfluences,it=nt.length+1;if(this.morphTexture===null)this.morphTexture=new Rr(new Float32Array(it*this.count),it,this.count,1028,1015);let st=this.morphTexture.source.data.data,rt=0;for(let lt=0;lt<nt.length;lt++)rt+=nt[lt];let at=this.geometry.morphTargetsRelative?1:1-rt,ot=it*tt;return st[ot]=at,st.set(nt,ot+1),this}updateMorphTargets(){}dispose(){if(super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null)this.instanceColor.dispose();if(this.morphTexture!==null)this.morphTexture.dispose(),this.morphTexture=null}}var wi=new Ui,yu=new t(0.5,0.5),ar=new e;class Ci{constructor(tt=new Wn,et=new Wn,nt=new Wn,it=new Wn,st=new Wn,rt=new Wn){this.planes=[tt,et,nt,it,st,rt]}set(tt,et,nt,it,st,rt){let at=this.planes;return at[0].copy(tt),at[1].copy(et),at[2].copy(nt),at[3].copy(it),at[4].copy(st),at[5].copy(rt),this}copy(tt){let et=this.planes;for(let nt=0;nt<6;nt++)et[nt].copy(tt.planes[nt]);return this}setFromProjectionMatrix(tt,et=2000,nt=!1){let it=this.planes,st=tt.elements,rt=st[0],at=st[1],ot=st[2],lt=st[3],ct=st[4],ut=st[5],dt=st[6],ht=st[7],pt=st[8],xt=st[9],Mt=st[10],ft=st[11],mt=st[12],Et=st[13],Tt=st[14],yt=st[15];if(it[0].setComponents(lt-rt,ht-ct,ft-pt,yt-mt).normalize(),it[1].setComponents(lt+rt,ht+ct,ft+pt,yt+mt).normalize(),it[2].setComponents(lt+at,ht+ut,ft+xt,yt+Et).normalize(),it[3].setComponents(lt-at,ht-ut,ft-xt,yt-Et).normalize(),nt)it[4].setComponents(ot,dt,Mt,Tt).normalize(),it[5].setComponents(lt-ot,ht-dt,ft-Mt,yt-Tt).normalize();else if(it[4].setComponents(lt-ot,ht-dt,ft-Mt,yt-Tt).normalize(),et===2000)it[5].setComponents(lt+ot,ht+dt,ft+Mt,yt+Tt).normalize();else if(et===2001)it[5].setComponents(ot,dt,Mt,Tt).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+et);return this}intersectsObject(tt){if(tt.boundingSphere!==void 0){if(tt.boundingSphere===null)tt.computeBoundingSphere();wi.copy(tt.boundingSphere).applyMatrix4(tt.matrixWorld)}else{let et=tt.geometry;if(et.boundingSphere===null)et.computeBoundingSphere();wi.copy(et.boundingSphere).applyMatrix4(tt.matrixWorld)}return this.intersectsSphere(wi)}intersectsSprite(tt){wi.center.set(0,0,0);let et=yu.distanceTo(tt.center);return wi.radius=0.7071067811865476+et,wi.applyMatrix4(tt.matrixWorld),this.intersectsSphere(wi)}intersectsSphere(tt){let et=this.planes,nt=tt.center,it=-tt.radius;for(let st=0;st<6;st++)if(et[st].distanceToPoint(nt)<it)return!1;return!0}intersectsBox(tt){let et=this.planes;for(let nt=0;nt<6;nt++){let it=et[nt];if(ar.x=it.normal.x>0?tt.max.x:tt.min.x,ar.y=it.normal.y>0?tt.max.y:tt.min.y,ar.z=it.normal.z>0?tt.max.z:tt.min.z,it.distanceToPoint(ar)<0)return!1}return!0}containsPoint(tt){let et=this.planes;for(let nt=0;nt<6;nt++)if(et[nt].distanceToPoint(tt)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}var bl=new an;class Cr{constructor(){this.coordinateSystem=2000,this._frustums=[],this._count=0}setFromArrayCamera(tt){let et=tt.cameras,nt=this._frustums;for(let it=0;it<et.length;it++){let st=et[it];if(bl.multiplyMatrices(st.projectionMatrix,st.matrixWorldInverse),nt[it]===void 0)nt[it]=new Ci;nt[it].setFromProjectionMatrix(bl,st.coordinateSystem,st.reversedDepth)}return this._count=et.length,this}getFrustum(tt){return this._frustums[tt]}intersectsObject(tt){let et=this._frustums;for(let nt=0;nt<this._count;nt++)if(et[nt].intersectsObject(tt))return!0;return!1}intersectsSprite(tt){let et=this._frustums;for(let nt=0;nt<this._count;nt++)if(et[nt].intersectsSprite(tt))return!0;return!1}intersectsSphere(tt){let et=this._frustums;for(let nt=0;nt<this._count;nt++)if(et[nt].intersectsSphere(tt))return!0;return!1}intersectsBox(tt){let et=this._frustums;for(let nt=0;nt<this._count;nt++)if(et[nt].intersectsBox(tt))return!0;return!1}containsPoint(tt){let et=this._frustums;for(let nt=0;nt<this._count;nt++)if(et[nt].containsPoint(tt))return!0;return!1}copy(tt){this.coordinateSystem=tt.coordinateSystem;let et=this._frustums,nt=tt._frustums;for(let it=0;it<tt._count;it++){if(et[it]===void 0)et[it]=new Ci;et[it].copy(nt[it])}return this._count=tt._count,this}clone(){return new Cr().copy(this)}}class Ir extends bn{constructor(tt=[],et=301,nt,it,st,rt,at,ot,lt,ct){super(tt,et,nt,it,st,rt,at,ot,lt,ct);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(tt){this.image=tt}}class B extends bn{constructor(tt,et,nt,it,st,rt,at,ot,lt){super(tt,et,nt,it,st,rt,at,ot,lt);this.isCanvasTexture=!0,this.needsUpdate=!0}}class yi extends bn{constructor(tt,et,nt=1014,it,st,rt,at=1003,ot=1003,lt,ct=1026,ut=1){if(ct!==1026&&ct!==1027)throw Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let dt={width:tt,height:et,depth:ut};super(dt,it,st,rt,at,ot,ct,nt,lt);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(tt){return super.copy(tt),this.source=new Ls(Object.assign({},tt.image)),this.compareFunction=tt.compareFunction,this}toJSON(tt){let et=super.toJSON(tt);return et.compareFunction=this.compareFunction,et}}class Pr extends yi{constructor(tt,et=1014,nt=301,it,st,rt=1003,at=1003,ot,lt=1026){let ct={width:tt,height:tt,depth:1},ut=[ct,ct,ct,ct,ct,ct];super(tt,tt,et,nt,it,st,rt,at,ot,lt);this.image=ut,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(tt){this.image=tt}}class Lr extends bn{constructor(tt=null){super();this.sourceTexture=tt,this.isExternalTexture=!0}copy(tt){return super.copy(tt),this.sourceTexture=tt.sourceTexture,this}}class l extends f{constructor(tt=1,et=1,nt=1,it=1,st=1,rt=1){super();this.type="BoxGeometry",this.parameters={width:tt,height:et,depth:nt,widthSegments:it,heightSegments:st,depthSegments:rt};let at=this;it=Math.floor(it),st=Math.floor(st),rt=Math.floor(rt);let ot=[],lt=[],ct=[],ut=[],dt=0,ht=0;pt("z","y","x",-1,-1,nt,et,tt,rt,st,0),pt("z","y","x",1,-1,nt,et,-tt,rt,st,1),pt("x","z","y",1,1,tt,nt,et,it,rt,2),pt("x","z","y",1,-1,tt,nt,-et,it,rt,3),pt("x","y","z",1,-1,tt,et,nt,it,st,4),pt("x","y","z",-1,-1,tt,et,-nt,it,st,5),this.setIndex(ot),this.setAttribute("position",new r(lt,3)),this.setAttribute("normal",new r(ct,3)),this.setAttribute("uv",new r(ut,2));function pt(xt,Mt,ft,mt,Et,Tt,yt,At,Rt,gt,St){let It=Tt/Rt,Bt=yt/gt,Lt=Tt/2,zt=yt/2,$t=At/2,wt=Rt+1,Vt=gt+1,Xt=0,Ft=0,se=new e;for(let Ht=0;Ht<Vt;Ht++){let Jt=Ht*Bt-zt;for(let te=0;te<wt;te++){let Se=te*It-Lt;se[xt]=Se*mt,se[Mt]=Jt*Et,se[ft]=$t,lt.push(se.x,se.y,se.z),se[xt]=0,se[Mt]=0,se[ft]=At>0?1:-1,ct.push(se.x,se.y,se.z),ut.push(te/Rt),ut.push(1-Ht/gt),Xt+=1}}for(let Ht=0;Ht<gt;Ht++)for(let Jt=0;Jt<Rt;Jt++){let te=dt+Jt+wt*Ht,Se=dt+Jt+wt*(Ht+1),Yt=dt+(Jt+1)+wt*(Ht+1),ne=dt+(Jt+1)+wt*Ht;ot.push(te,Se,ne),ot.push(Se,Yt,ne),Ft+=6}at.addGroup(ht,Ft,St),ht+=Ft,dt+=Xt}}copy(tt){return super.copy(tt),this.parameters=Object.assign({},tt.parameters),this}static fromJSON(tt){return new l(tt.width,tt.height,tt.depth,tt.widthSegments,tt.heightSegments,tt.depthSegments)}}class E extends f{constructor(tt=1,et=32,nt=0,it=Math.PI*2){super();this.type="CircleGeometry",this.parameters={radius:tt,segments:et,thetaStart:nt,thetaLength:it},et=Math.max(3,et);let st=[],rt=[],at=[],ot=[],lt=new e,ct=new t;rt.push(0,0,0),at.push(0,0,1),ot.push(0.5,0.5);for(let ut=0,dt=3;ut<=et;ut++,dt+=3){let ht=nt+ut/et*it;lt.x=tt*Math.cos(ht),lt.y=tt*Math.sin(ht),rt.push(lt.x,lt.y,lt.z),at.push(0,0,1),ct.x=(rt[dt]/tt+1)/2,ct.y=(rt[dt+1]/tt+1)/2,ot.push(ct.x,ct.y)}for(let ut=1;ut<=et;ut++)st.push(ut,ut+1,0);this.setIndex(st),this.setAttribute("position",new r(rt,3)),this.setAttribute("normal",new r(at,3)),this.setAttribute("uv",new r(ot,2))}copy(tt){return super.copy(tt),this.parameters=Object.assign({},tt.parameters),this}static fromJSON(tt){return new E(tt.radius,tt.segments,tt.thetaStart,tt.thetaLength)}}class M extends f{constructor(tt=1,et=1,nt=1,it=32,st=1,rt=!1,at=0,ot=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:tt,radiusBottom:et,height:nt,radialSegments:it,heightSegments:st,openEnded:rt,thetaStart:at,thetaLength:ot};let lt=this;it=Math.floor(it),st=Math.floor(st);let ct=[],ut=[],dt=[],ht=[],pt=0,xt=[],Mt=nt/2,ft=0;if(mt(),rt===!1){if(tt>0)Et(!0);if(et>0)Et(!1)}this.setIndex(ct),this.setAttribute("position",new r(ut,3)),this.setAttribute("normal",new r(dt,3)),this.setAttribute("uv",new r(ht,2));function mt(){let Tt=new e,yt=new e,At=0,Rt=(et-tt)/nt;for(let gt=0;gt<=st;gt++){let St=[],It=gt/st,Bt=It*(et-tt)+tt;for(let Lt=0;Lt<=it;Lt++){let zt=Lt/it,$t=zt*ot+at,wt=Math.sin($t),Vt=Math.cos($t);yt.x=Bt*wt,yt.y=-It*nt+Mt,yt.z=Bt*Vt,ut.push(yt.x,yt.y,yt.z),Tt.set(wt,Rt,Vt).normalize(),dt.push(Tt.x,Tt.y,Tt.z),ht.push(zt,1-It),St.push(pt++)}xt.push(St)}for(let gt=0;gt<it;gt++)for(let St=0;St<st;St++){let It=xt[St][gt],Bt=xt[St+1][gt],Lt=xt[St+1][gt+1],zt=xt[St][gt+1];if(tt>0||St!==0)ct.push(It,Bt,zt),At+=3;if(et>0||St!==st-1)ct.push(Bt,Lt,zt),At+=3}lt.addGroup(ft,At,0),ft+=At}function Et(Tt){let yt=pt,At=new t,Rt=new e,gt=0,St=Tt===!0?tt:et,It=Tt===!0?1:-1;for(let Lt=1;Lt<=it;Lt++)ut.push(0,Mt*It,0),dt.push(0,It,0),ht.push(0.5,0.5),pt++;let Bt=pt;for(let Lt=0;Lt<=it;Lt++){let $t=Lt/it*ot+at,wt=Math.cos($t),Vt=Math.sin($t);Rt.x=St*Vt,Rt.y=Mt*It,Rt.z=St*wt,ut.push(Rt.x,Rt.y,Rt.z),dt.push(0,It,0),At.x=wt*0.5+0.5,At.y=Vt*0.5*It+0.5,ht.push(At.x,At.y),pt++}for(let Lt=0;Lt<it;Lt++){let zt=yt+Lt,$t=Bt+Lt;if(Tt===!0)ct.push($t,$t+1,zt);else ct.push($t+1,$t,zt);gt+=3}lt.addGroup(ft,gt,Tt===!0?1:2),ft+=gt}}copy(tt){return super.copy(tt),this.parameters=Object.assign({},tt.parameters),this}static fromJSON(tt){return new M(tt.radiusTop,tt.radiusBottom,tt.height,tt.radialSegments,tt.heightSegments,tt.openEnded,tt.thetaStart,tt.thetaLength)}}class z extends M{constructor(tt=1,et=1,nt=32,it=1,st=!1,rt=0,at=Math.PI*2){super(0,tt,et,nt,it,st,rt,at);this.type="ConeGeometry",this.parameters={radius:tt,height:et,radialSegments:nt,heightSegments:it,openEnded:st,thetaStart:rt,thetaLength:at}}static fromJSON(tt){return new z(tt.radius,tt.height,tt.radialSegments,tt.heightSegments,tt.openEnded,tt.thetaStart,tt.thetaLength)}}class Un{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Oe("Curve: .getPoint() not implemented.")}getPointAt(tt,et){let nt=this.getUtoTmapping(tt);return this.getPoint(nt,et)}getPoints(tt=5){let et=[];for(let nt=0;nt<=tt;nt++)et.push(this.getPoint(nt/tt));return et}getSpacedPoints(tt=5){let et=[];for(let nt=0;nt<=tt;nt++)et.push(this.getPointAt(nt/tt));return et}getLength(){let tt=this.getLengths();return tt[tt.length-1]}getLengths(tt=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===tt+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let et=[],nt,it=this.getPoint(0),st=0;et.push(0);for(let rt=1;rt<=tt;rt++)nt=this.getPoint(rt/tt),st+=nt.distanceTo(it),et.push(st),it=nt;return this.cacheArcLengths=et,et}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(tt,et=null){let nt=this.getLengths(),it=0,st=nt.length,rt;if(et)rt=et;else rt=tt*nt[st-1];let at=0,ot=st-1,lt;while(at<=ot)if(it=Math.floor(at+(ot-at)/2),lt=nt[it]-rt,lt<0)at=it+1;else if(lt>0)ot=it-1;else{ot=it;break}if(it=ot,nt[it]===rt)return it/(st-1);let ct=nt[it],dt=nt[it+1]-ct,ht=(rt-ct)/dt;return(it+ht)/(st-1)}getTangent(tt,et){let it=tt-0.0001,st=tt+0.0001;if(it<0)it=0;if(st>1)st=1;let rt=this.getPoint(it),at=this.getPoint(st),ot=et||(rt.isVector2?new t:new e);return ot.copy(at).sub(rt).normalize(),ot}getTangentAt(tt,et){let nt=this.getUtoTmapping(tt);return this.getTangent(nt,et)}computeFrenetFrames(tt,et=!1){let nt=new e,it=[],st=[],rt=[],at=new e,ot=new an;for(let ht=0;ht<=tt;ht++){let pt=ht/tt;it[ht]=this.getTangentAt(pt,new e)}st[0]=new e,rt[0]=new e;let lt=Number.MAX_VALUE,ct=Math.abs(it[0].x),ut=Math.abs(it[0].y),dt=Math.abs(it[0].z);if(ct<=lt)lt=ct,nt.set(1,0,0);if(ut<=lt)lt=ut,nt.set(0,1,0);if(dt<=lt)nt.set(0,0,1);at.crossVectors(it[0],nt).normalize(),st[0].crossVectors(it[0],at),rt[0].crossVectors(it[0],st[0]);for(let ht=1;ht<=tt;ht++){if(st[ht]=st[ht-1].clone(),rt[ht]=rt[ht-1].clone(),at.crossVectors(it[ht-1],it[ht]),at.length()>Number.EPSILON){at.normalize();let pt=Math.acos(Ze(it[ht-1].dot(it[ht]),-1,1));st[ht].applyMatrix4(ot.makeRotationAxis(at,pt))}rt[ht].crossVectors(it[ht],st[ht])}if(et===!0){let ht=Math.acos(Ze(st[0].dot(st[tt]),-1,1));if(ht/=tt,it[0].dot(at.crossVectors(st[0],st[tt]))>0)ht=-ht;for(let pt=1;pt<=tt;pt++)st[pt].applyMatrix4(ot.makeRotationAxis(it[pt],ht*pt)),rt[pt].crossVectors(it[pt],st[pt])}return{tangents:it,normals:st,binormals:rt}}clone(){return new this.constructor().copy(this)}copy(tt){return this.arcLengthDivisions=tt.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let tt={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return tt.arcLengthDivisions=this.arcLengthDivisions,tt.type=this.type,tt}fromJSON(tt){return this.arcLengthDivisions=tt.arcLengthDivisions,this.cacheArcLengths=null,this}}class Ds extends Un{constructor(tt=0,et=0,nt=1,it=1,st=0,rt=Math.PI*2,at=!1,ot=0){super();this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=tt,this.aY=et,this.xRadius=nt,this.yRadius=it,this.aStartAngle=st,this.aEndAngle=rt,this.aClockwise=at,this.aRotation=ot}getPoint(tt,et=new t){let nt=et,it=Math.PI*2,st=this.aEndAngle-this.aStartAngle,rt=Math.abs(st)<Number.EPSILON;while(st<0)st+=it;while(st>it)st-=it;if(st<Number.EPSILON)if(rt)st=0;else st=it;if(this.aClockwise===!0&&!rt)if(st===it)st=-it;else st=st-it;let at=this.aStartAngle+tt*st,ot=this.aX+this.xRadius*Math.cos(at),lt=this.aY+this.yRadius*Math.sin(at);if(this.aRotation!==0){let ct=Math.cos(this.aRotation),ut=Math.sin(this.aRotation),dt=ot-this.aX,ht=lt-this.aY;ot=dt*ct-ht*ut+this.aX,lt=dt*ut+ht*ct+this.aY}return nt.set(ot,lt)}copy(tt){return super.copy(tt),this.aX=tt.aX,this.aY=tt.aY,this.xRadius=tt.xRadius,this.yRadius=tt.yRadius,this.aStartAngle=tt.aStartAngle,this.aEndAngle=tt.aEndAngle,this.aClockwise=tt.aClockwise,this.aRotation=tt.aRotation,this}toJSON(){let tt=super.toJSON();return tt.aX=this.aX,tt.aY=this.aY,tt.xRadius=this.xRadius,tt.yRadius=this.yRadius,tt.aStartAngle=this.aStartAngle,tt.aEndAngle=this.aEndAngle,tt.aClockwise=this.aClockwise,tt.aRotation=this.aRotation,tt}fromJSON(tt){return super.fromJSON(tt),this.aX=tt.aX,this.aY=tt.aY,this.xRadius=tt.xRadius,this.yRadius=tt.yRadius,this.aStartAngle=tt.aStartAngle,this.aEndAngle=tt.aEndAngle,this.aClockwise=tt.aClockwise,this.aRotation=tt.aRotation,this}}class Mo extends Ds{constructor(tt,et,nt,it,st,rt){super(tt,et,nt,nt,it,st,rt);this.isArcCurve=!0,this.type="ArcCurve"}}function bo(){let tt=0,et=0,nt=0,it=0;function st(rt,at,ot,lt){tt=rt,et=ot,nt=-3*rt+3*at-2*ot-lt,it=2*rt-2*at+ot+lt}return{initCatmullRom:function(rt,at,ot,lt,ct){st(at,ot,ct*(ot-rt),ct*(lt-at))},initNonuniformCatmullRom:function(rt,at,ot,lt,ct,ut,dt){let ht=(at-rt)/ct-(ot-rt)/(ct+ut)+(ot-at)/ut,pt=(ot-at)/ut-(lt-at)/(ut+dt)+(lt-ot)/dt;ht*=ut,pt*=ut,st(at,ot,ht,pt)},calc:function(rt){let at=rt*rt,ot=at*rt;return tt+et*rt+nt*at+it*ot}}}var Tl=new e,El=new e,da=new bo,fa=new bo,pa=new bo;class To extends Un{constructor(tt=[],et=!1,nt="centripetal",it=0.5){super();this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=tt,this.closed=et,this.curveType=nt,this.tension=it}getPoint(tt,et=new e){let nt=et,it=this.points,st=it.length,rt=(st-(this.closed?0:1))*tt,at=Math.floor(rt),ot=rt-at;if(this.closed)at+=at>0?0:(Math.floor(Math.abs(at)/st)+1)*st;else if(ot===0&&at===st-1)at=st-2,ot=1;let lt,ct;if(this.closed||at>0)lt=it[(at-1)%st];else El.subVectors(it[0],it[1]).add(it[0]),lt=El;let ut=it[at%st],dt=it[(at+1)%st];if(this.closed||at+2<st)ct=it[(at+2)%st];else Tl.subVectors(it[st-1],it[st-2]).add(it[st-1]),ct=Tl;if(this.curveType==="centripetal"||this.curveType==="chordal"){let ht=this.curveType==="chordal"?0.5:0.25,pt=Math.pow(lt.distanceToSquared(ut),ht),xt=Math.pow(ut.distanceToSquared(dt),ht),Mt=Math.pow(dt.distanceToSquared(ct),ht);if(xt<0.0001)xt=1;if(pt<0.0001)pt=xt;if(Mt<0.0001)Mt=xt;da.initNonuniformCatmullRom(lt.x,ut.x,dt.x,ct.x,pt,xt,Mt),fa.initNonuniformCatmullRom(lt.y,ut.y,dt.y,ct.y,pt,xt,Mt),pa.initNonuniformCatmullRom(lt.z,ut.z,dt.z,ct.z,pt,xt,Mt)}else if(this.curveType==="catmullrom")da.initCatmullRom(lt.x,ut.x,dt.x,ct.x,this.tension),fa.initCatmullRom(lt.y,ut.y,dt.y,ct.y,this.tension),pa.initCatmullRom(lt.z,ut.z,dt.z,ct.z,this.tension);return nt.set(da.calc(ot),fa.calc(ot),pa.calc(ot)),nt}copy(tt){super.copy(tt),this.points=[];for(let et=0,nt=tt.points.length;et<nt;et++){let it=tt.points[et];this.points.push(it.clone())}return this.closed=tt.closed,this.curveType=tt.curveType,this.tension=tt.tension,this}toJSON(){let tt=super.toJSON();tt.points=[];for(let et=0,nt=this.points.length;et<nt;et++){let it=this.points[et];tt.points.push(it.toArray())}return tt.closed=this.closed,tt.curveType=this.curveType,tt.tension=this.tension,tt}fromJSON(tt){super.fromJSON(tt),this.points=[];for(let et=0,nt=tt.points.length;et<nt;et++){let it=tt.points[et];this.points.push(new e().fromArray(it))}return this.closed=tt.closed,this.curveType=tt.curveType,this.tension=tt.tension,this}}function Al(tt,et,nt,it,st){let rt=(it-et)*0.5,at=(st-nt)*0.5,ot=tt*tt,lt=tt*ot;return(2*nt-2*it+rt+at)*lt+(-3*nt+3*it-2*rt-at)*ot+rt*tt+nt}function Su(tt,et){let nt=1-tt;return nt*nt*et}function Mu(tt,et){return 2*(1-tt)*tt*et}function bu(tt,et){return tt*tt*et}function Ss(tt,et,nt,it){return Su(tt,et)+Mu(tt,nt)+bu(tt,it)}function Tu(tt,et){let nt=1-tt;return nt*nt*nt*et}function Eu(tt,et){let nt=1-tt;return 3*nt*nt*tt*et}function Au(tt,et){return 3*(1-tt)*tt*tt*et}function wu(tt,et){return tt*tt*tt*et}function Ms(tt,et,nt,it,st){return Tu(tt,et)+Eu(tt,nt)+Au(tt,it)+wu(tt,st)}class Nr extends Un{constructor(tt=new t,et=new t,nt=new t,it=new t){super();this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=tt,this.v1=et,this.v2=nt,this.v3=it}getPoint(tt,et=new t){let nt=et,it=this.v0,st=this.v1,rt=this.v2,at=this.v3;return nt.set(Ms(tt,it.x,st.x,rt.x,at.x),Ms(tt,it.y,st.y,rt.y,at.y)),nt}copy(tt){return super.copy(tt),this.v0.copy(tt.v0),this.v1.copy(tt.v1),this.v2.copy(tt.v2),this.v3.copy(tt.v3),this}toJSON(){let tt=super.toJSON();return tt.v0=this.v0.toArray(),tt.v1=this.v1.toArray(),tt.v2=this.v2.toArray(),tt.v3=this.v3.toArray(),tt}fromJSON(tt){return super.fromJSON(tt),this.v0.fromArray(tt.v0),this.v1.fromArray(tt.v1),this.v2.fromArray(tt.v2),this.v3.fromArray(tt.v3),this}}class Eo extends Un{constructor(tt=new e,et=new e,nt=new e,it=new e){super();this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=tt,this.v1=et,this.v2=nt,this.v3=it}getPoint(tt,et=new e){let nt=et,it=this.v0,st=this.v1,rt=this.v2,at=this.v3;return nt.set(Ms(tt,it.x,st.x,rt.x,at.x),Ms(tt,it.y,st.y,rt.y,at.y),Ms(tt,it.z,st.z,rt.z,at.z)),nt}copy(tt){return super.copy(tt),this.v0.copy(tt.v0),this.v1.copy(tt.v1),this.v2.copy(tt.v2),this.v3.copy(tt.v3),this}toJSON(){let tt=super.toJSON();return tt.v0=this.v0.toArray(),tt.v1=this.v1.toArray(),tt.v2=this.v2.toArray(),tt.v3=this.v3.toArray(),tt}fromJSON(tt){return super.fromJSON(tt),this.v0.fromArray(tt.v0),this.v1.fromArray(tt.v1),this.v2.fromArray(tt.v2),this.v3.fromArray(tt.v3),this}}class Dr extends Un{constructor(tt=new t,et=new t){super();this.isLineCurve=!0,this.type="LineCurve",this.v1=tt,this.v2=et}getPoint(tt,et=new t){let nt=et;if(tt===1)nt.copy(this.v2);else nt.copy(this.v2).sub(this.v1),nt.multiplyScalar(tt).add(this.v1);return nt}getPointAt(tt,et){return this.getPoint(tt,et)}getTangent(tt,et=new t){return et.subVectors(this.v2,this.v1).normalize()}getTangentAt(tt,et){return this.getTangent(tt,et)}copy(tt){return super.copy(tt),this.v1.copy(tt.v1),this.v2.copy(tt.v2),this}toJSON(){let tt=super.toJSON();return tt.v1=this.v1.toArray(),tt.v2=this.v2.toArray(),tt}fromJSON(tt){return super.fromJSON(tt),this.v1.fromArray(tt.v1),this.v2.fromArray(tt.v2),this}}class Ao extends Un{constructor(tt=new e,et=new e){super();this.isLineCurve3=!0,this.type="LineCurve3",this.v1=tt,this.v2=et}getPoint(tt,et=new e){let nt=et;if(tt===1)nt.copy(this.v2);else nt.copy(this.v2).sub(this.v1),nt.multiplyScalar(tt).add(this.v1);return nt}getPointAt(tt,et){return this.getPoint(tt,et)}getTangent(tt,et=new e){return et.subVectors(this.v2,this.v1).normalize()}getTangentAt(tt,et){return this.getTangent(tt,et)}copy(tt){return super.copy(tt),this.v1.copy(tt.v1),this.v2.copy(tt.v2),this}toJSON(){let tt=super.toJSON();return tt.v1=this.v1.toArray(),tt.v2=this.v2.toArray(),tt}fromJSON(tt){return super.fromJSON(tt),this.v1.fromArray(tt.v1),this.v2.fromArray(tt.v2),this}}class Ur extends Un{constructor(tt=new t,et=new t,nt=new t){super();this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=tt,this.v1=et,this.v2=nt}getPoint(tt,et=new t){let nt=et,it=this.v0,st=this.v1,rt=this.v2;return nt.set(Ss(tt,it.x,st.x,rt.x),Ss(tt,it.y,st.y,rt.y)),nt}copy(tt){return super.copy(tt),this.v0.copy(tt.v0),this.v1.copy(tt.v1),this.v2.copy(tt.v2),this}toJSON(){let tt=super.toJSON();return tt.v0=this.v0.toArray(),tt.v1=this.v1.toArray(),tt.v2=this.v2.toArray(),tt}fromJSON(tt){return super.fromJSON(tt),this.v0.fromArray(tt.v0),this.v1.fromArray(tt.v1),this.v2.fromArray(tt.v2),this}}class wo extends Un{constructor(tt=new e,et=new e,nt=new e){super();this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=tt,this.v1=et,this.v2=nt}getPoint(tt,et=new e){let nt=et,it=this.v0,st=this.v1,rt=this.v2;return nt.set(Ss(tt,it.x,st.x,rt.x),Ss(tt,it.y,st.y,rt.y),Ss(tt,it.z,st.z,rt.z)),nt}copy(tt){return super.copy(tt),this.v0.copy(tt.v0),this.v1.copy(tt.v1),this.v2.copy(tt.v2),this}toJSON(){let tt=super.toJSON();return tt.v0=this.v0.toArray(),tt.v1=this.v1.toArray(),tt.v2=this.v2.toArray(),tt}fromJSON(tt){return super.fromJSON(tt),this.v0.fromArray(tt.v0),this.v1.fromArray(tt.v1),this.v2.fromArray(tt.v2),this}}class Fr extends Un{constructor(tt=[]){super();this.isSplineCurve=!0,this.type="SplineCurve",this.points=tt}getPoint(tt,et=new t){let nt=et,it=this.points,st=(it.length-1)*tt,rt=Math.floor(st),at=st-rt,ot=it[rt===0?rt:rt-1],lt=it[rt],ct=it[rt>it.length-2?it.length-1:rt+1],ut=it[rt>it.length-3?it.length-1:rt+2];return nt.set(Al(at,ot.x,lt.x,ct.x,ut.x),Al(at,ot.y,lt.y,ct.y,ut.y)),nt}copy(tt){super.copy(tt),this.points=[];for(let et=0,nt=tt.points.length;et<nt;et++){let it=tt.points[et];this.points.push(it.clone())}return this}toJSON(){let tt=super.toJSON();tt.points=[];for(let et=0,nt=this.points.length;et<nt;et++){let it=this.points[et];tt.points.push(it.toArray())}return tt}fromJSON(tt){super.fromJSON(tt),this.points=[];for(let et=0,nt=tt.points.length;et<nt;et++){let it=tt.points[et];this.points.push(new t().fromArray(it))}return this}}var ga=Object.freeze({__proto__:null,ArcCurve:Mo,CatmullRomCurve3:To,CubicBezierCurve:Nr,CubicBezierCurve3:Eo,EllipseCurve:Ds,LineCurve:Dr,LineCurve3:Ao,QuadraticBezierCurve:Ur,QuadraticBezierCurve3:wo,SplineCurve:Fr});class Ro extends Un{constructor(){super();this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(tt){this.curves.push(tt)}closePath(){let tt=this.curves[0].getPoint(0),et=this.curves[this.curves.length-1].getPoint(1);if(!tt.equals(et)){let nt=tt.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ga[nt](et,tt))}return this}getPoint(tt,et){let nt=tt*this.getLength(),it=this.getCurveLengths(),st=0;while(st<it.length){if(it[st]>=nt){let rt=it[st]-nt,at=this.curves[st],ot=at.getLength(),lt=ot===0?0:1-rt/ot;return at.getPointAt(lt,et)}st++}return null}getLength(){let tt=this.getCurveLengths();return tt[tt.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let tt=[],et=0;for(let nt=0,it=this.curves.length;nt<it;nt++)et+=this.curves[nt].getLength(),tt.push(et);return this.cacheLengths=tt,tt}getSpacedPoints(tt=40){let et=[];for(let nt=0;nt<=tt;nt++)et.push(this.getPoint(nt/tt));if(this.autoClose)et.push(et[0]);return et}getPoints(tt=12){let et=[],nt;for(let it=0,st=this.curves;it<st.length;it++){let rt=st[it],at=rt.isEllipseCurve?tt*2:rt.isLineCurve||rt.isLineCurve3?1:rt.isSplineCurve?tt*rt.points.length:tt,ot=rt.getPoints(at);for(let lt=0;lt<ot.length;lt++){let ct=ot[lt];if(nt&&nt.equals(ct))continue;et.push(ct),nt=ct}}if(this.autoClose&&et.length>1&&!et[et.length-1].equals(et[0]))et.push(et[0]);return et}copy(tt){super.copy(tt),this.curves=[];for(let et=0,nt=tt.curves.length;et<nt;et++){let it=tt.curves[et];this.curves.push(it.clone())}return this.autoClose=tt.autoClose,this.cacheLengths=null,this}toJSON(){let tt=super.toJSON();tt.autoClose=this.autoClose,tt.curves=[];for(let et=0,nt=this.curves.length;et<nt;et++){let it=this.curves[et];tt.curves.push(it.toJSON())}return tt}fromJSON(tt){super.fromJSON(tt),this.autoClose=tt.autoClose,this.curves=[];for(let et=0,nt=tt.curves.length;et<nt;et++){let it=tt.curves[et];this.curves.push(new ga[it.type]().fromJSON(it))}return this.cacheLengths=null,this}}class fr extends Ro{constructor(tt){super();if(this.type="Path",this.currentPoint=new t,tt)this.setFromPoints(tt)}setFromPoints(tt){this.moveTo(tt[0].x,tt[0].y);for(let et=1,nt=tt.length;et<nt;et++)this.lineTo(tt[et].x,tt[et].y);return this}moveTo(tt,et){return this.currentPoint.set(tt,et),this}lineTo(tt,et){let nt=new Dr(this.currentPoint.clone(),new t(tt,et));return this.curves.push(nt),this.currentPoint.set(tt,et),this}quadraticCurveTo(tt,et,nt,it){let st=new Ur(this.currentPoint.clone(),new t(tt,et),new t(nt,it));return this.curves.push(st),this.currentPoint.set(nt,it),this}bezierCurveTo(tt,et,nt,it,st,rt){let at=new Nr(this.currentPoint.clone(),new t(tt,et),new t(nt,it),new t(st,rt));return this.curves.push(at),this.currentPoint.set(st,rt),this}splineThru(tt){let et=[this.currentPoint.clone()].concat(tt),nt=new Fr(et);return this.curves.push(nt),this.currentPoint.copy(tt[tt.length-1]),this}arc(tt,et,nt,it,st,rt){let at=this.currentPoint.x,ot=this.currentPoint.y;return this.absarc(tt+at,et+ot,nt,it,st,rt),this}absarc(tt,et,nt,it,st,rt){return this.absellipse(tt,et,nt,nt,it,st,rt),this}ellipse(tt,et,nt,it,st,rt,at,ot){let lt=this.currentPoint.x,ct=this.currentPoint.y;return this.absellipse(tt+lt,et+ct,nt,it,st,rt,at,ot),this}absellipse(tt,et,nt,it,st,rt,at,ot){let lt=new Ds(tt,et,nt,it,st,rt,at,ot);if(this.curves.length>0){let ut=lt.getPoint(0);if(!ut.equals(this.currentPoint))this.lineTo(ut.x,ut.y)}this.curves.push(lt);let ct=lt.getPoint(1);return this.currentPoint.copy(ct),this}copy(tt){return super.copy(tt),this.currentPoint.copy(tt.currentPoint),this}toJSON(){let tt=super.toJSON();return tt.currentPoint=this.currentPoint.toArray(),tt}fromJSON(tt){return super.fromJSON(tt),this.currentPoint.fromArray(tt.currentPoint),this}}class G extends fr{constructor(tt){super(tt);this.uuid=Di(),this.type="Shape",this.holes=[]}getPointsHoles(tt){let et=[];for(let nt=0,it=this.holes.length;nt<it;nt++)et[nt]=this.holes[nt].getPoints(tt);return et}extractPoints(tt){return{shape:this.getPoints(tt),holes:this.getPointsHoles(tt)}}copy(tt){super.copy(tt),this.holes=[];for(let et=0,nt=tt.holes.length;et<nt;et++){let it=tt.holes[et];this.holes.push(it.clone())}return this}toJSON(){let tt=super.toJSON();tt.uuid=this.uuid,tt.holes=[];for(let et=0,nt=this.holes.length;et<nt;et++){let it=this.holes[et];tt.holes.push(it.toJSON())}return tt}fromJSON(tt){super.fromJSON(tt),this.uuid=tt.uuid,this.holes=[];for(let et=0,nt=tt.holes.length;et<nt;et++){let it=tt.holes[et];this.holes.push(new fr().fromJSON(it))}return this}}function Ru(tt,et,nt=2){let it=et&&et.length,st=it?et[0]*nt:tt.length,rt=Bc(tt,0,st,nt,!0),at=[];if(!rt||rt.next===rt.prev)return at;let ot,lt,ct;if(it)rt=Nu(tt,et,rt,nt);if(tt.length>80*nt){ot=tt[0],lt=tt[1];let ut=ot,dt=lt;for(let ht=nt;ht<st;ht+=nt){let pt=tt[ht],xt=tt[ht+1];if(pt<ot)ot=pt;if(xt<lt)lt=xt;if(pt>ut)ut=pt;if(xt>dt)dt=xt}ct=Math.max(ut-ot,dt-lt),ct=ct!==0?32767/ct:0}return Ts(rt,at,nt,ot,lt,ct,0),at}function Bc(tt,et,nt,it,st){let rt;if(st===Vu(tt,et,nt,it)>0)for(let at=et;at<nt;at+=it)rt=wl(at/it|0,tt[at],tt[at+1],rt);else for(let at=nt-it;at>=et;at-=it)rt=wl(at/it|0,tt[at],tt[at+1],rt);if(rt&&is(rt,rt.next))As(rt),rt=rt.next;return rt}function Ii(tt,et){if(!tt)return tt;if(!et)et=tt;let nt=tt,it;do if(it=!1,!nt.steiner&&(is(nt,nt.next)||hn(nt.prev,nt,nt.next)===0)){if(As(nt),nt=et=nt.prev,nt===nt.next)break;it=!0}else nt=nt.next;while(it||nt!==et);return et}function Ts(tt,et,nt,it,st,rt,at){if(!tt)return;if(!at&&rt)Bu(tt,it,st,rt);let ot=tt;while(tt.prev!==tt.next){let lt=tt.prev,ct=tt.next;if(rt?Iu(tt,it,st,rt):Cu(tt)){et.push(lt.i,tt.i,ct.i),As(tt),tt=ct.next,ot=ct.next;continue}if(tt=ct,tt===ot){if(!at)Ts(Ii(tt),et,nt,it,st,rt,1);else if(at===1)tt=Pu(Ii(tt),et),Ts(tt,et,nt,it,st,rt,2);else if(at===2)Lu(tt,et,nt,it,st,rt);break}}}function Cu(tt){let et=tt.prev,nt=tt,it=tt.next;if(hn(et,nt,it)>=0)return!1;let st=et.x,rt=nt.x,at=it.x,ot=et.y,lt=nt.y,ct=it.y,ut=Math.min(st,rt,at),dt=Math.min(ot,lt,ct),ht=Math.max(st,rt,at),pt=Math.max(ot,lt,ct),xt=it.next;while(xt!==et){if(xt.x>=ut&&xt.x<=ht&&xt.y>=dt&&xt.y<=pt&&_s(st,ot,rt,lt,at,ct,xt.x,xt.y)&&hn(xt.prev,xt,xt.next)>=0)return!1;xt=xt.next}return!0}function Iu(tt,et,nt,it){let st=tt.prev,rt=tt,at=tt.next;if(hn(st,rt,at)>=0)return!1;let ot=st.x,lt=rt.x,ct=at.x,ut=st.y,dt=rt.y,ht=at.y,pt=Math.min(ot,lt,ct),xt=Math.min(ut,dt,ht),Mt=Math.max(ot,lt,ct),ft=Math.max(ut,dt,ht),mt=_a(pt,xt,et,nt,it),Et=_a(Mt,ft,et,nt,it),{prevZ:Tt,nextZ:yt}=tt;while(Tt&&Tt.z>=mt&&yt&&yt.z<=Et){if(Tt.x>=pt&&Tt.x<=Mt&&Tt.y>=xt&&Tt.y<=ft&&Tt!==st&&Tt!==at&&_s(ot,ut,lt,dt,ct,ht,Tt.x,Tt.y)&&hn(Tt.prev,Tt,Tt.next)>=0)return!1;if(Tt=Tt.prevZ,yt.x>=pt&&yt.x<=Mt&&yt.y>=xt&&yt.y<=ft&&yt!==st&&yt!==at&&_s(ot,ut,lt,dt,ct,ht,yt.x,yt.y)&&hn(yt.prev,yt,yt.next)>=0)return!1;yt=yt.nextZ}while(Tt&&Tt.z>=mt){if(Tt.x>=pt&&Tt.x<=Mt&&Tt.y>=xt&&Tt.y<=ft&&Tt!==st&&Tt!==at&&_s(ot,ut,lt,dt,ct,ht,Tt.x,Tt.y)&&hn(Tt.prev,Tt,Tt.next)>=0)return!1;Tt=Tt.prevZ}while(yt&&yt.z<=Et){if(yt.x>=pt&&yt.x<=Mt&&yt.y>=xt&&yt.y<=ft&&yt!==st&&yt!==at&&_s(ot,ut,lt,dt,ct,ht,yt.x,yt.y)&&hn(yt.prev,yt,yt.next)>=0)return!1;yt=yt.nextZ}return!0}function Pu(tt,et){let nt=tt;do{let it=nt.prev,st=nt.next.next;if(!is(it,st)&&Gc(it,nt,nt.next,st)&&Es(it,st)&&Es(st,it))et.push(it.i,nt.i,st.i),As(nt),As(nt.next),nt=tt=st;nt=nt.next}while(nt!==tt);return Ii(nt)}function Lu(tt,et,nt,it,st,rt){let at=tt;do{let ot=at.next.next;while(ot!==at.prev){if(at.i!==ot.i&&ku(at,ot)){let lt=kc(at,ot);at=Ii(at,at.next),lt=Ii(lt,lt.next),Ts(at,et,nt,it,st,rt,0),Ts(lt,et,nt,it,st,rt,0);return}ot=ot.next}at=at.next}while(at!==tt)}function Nu(tt,et,nt,it){let st=[];for(let rt=0,at=et.length;rt<at;rt++){let ot=et[rt]*it,lt=rt<at-1?et[rt+1]*it:tt.length,ct=Bc(tt,ot,lt,it,!1);if(ct===ct.next)ct.steiner=!0;st.push(Gu(ct))}st.sort(Du);for(let rt=0;rt<st.length;rt++)nt=Uu(st[rt],nt);return nt}function Du(tt,et){let nt=tt.x-et.x;if(nt===0){if(nt=tt.y-et.y,nt===0){let it=(tt.next.y-tt.y)/(tt.next.x-tt.x),st=(et.next.y-et.y)/(et.next.x-et.x);nt=it-st}}return nt}function Uu(tt,et){let nt=Fu(tt,et);if(!nt)return et;let it=kc(nt,tt);return Ii(it,it.next),Ii(nt,nt.next)}function Fu(tt,et){let nt=et,{x:it,y:st}=tt,rt=-1/0,at;if(is(tt,nt))return nt;do{if(is(tt,nt.next))return nt.next;else if(st<=nt.y&&st>=nt.next.y&&nt.next.y!==nt.y){let dt=nt.x+(st-nt.y)*(nt.next.x-nt.x)/(nt.next.y-nt.y);if(dt<=it&&dt>rt){if(rt=dt,at=nt.x<nt.next.x?nt:nt.next,dt===it)return at}}nt=nt.next}while(nt!==et);if(!at)return null;let ot=at,lt=at.x,ct=at.y,ut=1/0;nt=at;do{if(it>=nt.x&&nt.x>=lt&&it!==nt.x&&zc(st<ct?it:rt,st,lt,ct,st<ct?rt:it,st,nt.x,nt.y)){let dt=Math.abs(st-nt.y)/(it-nt.x);if(Es(nt,tt)&&(dt<ut||dt===ut&&(nt.x>at.x||nt.x===at.x&&Ou(at,nt))))at=nt,ut=dt}nt=nt.next}while(nt!==ot);return at}function Ou(tt,et){return hn(tt.prev,tt,et.prev)<0&&hn(et.next,tt,tt.next)<0}function Bu(tt,et,nt,it){let st=tt;do{if(st.z===0)st.z=_a(st.x,st.y,et,nt,it);st.prevZ=st.prev,st.nextZ=st.next,st=st.next}while(st!==tt);st.prevZ.nextZ=null,st.prevZ=null,zu(st)}function zu(tt){let et,nt=1;do{let it=tt,st;tt=null;let rt=null;et=0;while(it){et++;let at=it,ot=0;for(let ct=0;ct<nt;ct++)if(ot++,at=at.nextZ,!at)break;let lt=nt;while(ot>0||lt>0&&at){if(ot!==0&&(lt===0||!at||it.z<=at.z))st=it,it=it.nextZ,ot--;else st=at,at=at.nextZ,lt--;if(rt)rt.nextZ=st;else tt=st;st.prevZ=rt,rt=st}it=at}rt.nextZ=null,nt*=2}while(et>1);return tt}function _a(tt,et,nt,it,st){return tt=(tt-nt)*st|0,et=(et-it)*st|0,tt=(tt|tt<<8)&16711935,tt=(tt|tt<<4)&252645135,tt=(tt|tt<<2)&858993459,tt=(tt|tt<<1)&1431655765,et=(et|et<<8)&16711935,et=(et|et<<4)&252645135,et=(et|et<<2)&858993459,et=(et|et<<1)&1431655765,tt|et<<1}function Gu(tt){let et=tt,nt=tt;do{if(et.x<nt.x||et.x===nt.x&&et.y<nt.y)nt=et;et=et.next}while(et!==tt);return nt}function zc(tt,et,nt,it,st,rt,at,ot){return(st-at)*(et-ot)>=(tt-at)*(rt-ot)&&(tt-at)*(it-ot)>=(nt-at)*(et-ot)&&(nt-at)*(rt-ot)>=(st-at)*(it-ot)}function _s(tt,et,nt,it,st,rt,at,ot){return!(tt===at&&et===ot)&&zc(tt,et,nt,it,st,rt,at,ot)}function ku(tt,et){return tt.next.i!==et.i&&tt.prev.i!==et.i&&!Hu(tt,et)&&(Es(tt,et)&&Es(et,tt)&&Wu(tt,et)&&(hn(tt.prev,tt,et.prev)||hn(tt,et.prev,et))||is(tt,et)&&hn(tt.prev,tt,tt.next)>0&&hn(et.prev,et,et.next)>0)}function hn(tt,et,nt){return(et.y-tt.y)*(nt.x-et.x)-(et.x-tt.x)*(nt.y-et.y)}function is(tt,et){return tt.x===et.x&&tt.y===et.y}function Gc(tt,et,nt,it){let st=lr(hn(tt,et,nt)),rt=lr(hn(tt,et,it)),at=lr(hn(nt,it,tt)),ot=lr(hn(nt,it,et));if(st!==rt&&at!==ot)return!0;if(st===0&&or(tt,nt,et))return!0;if(rt===0&&or(tt,it,et))return!0;if(at===0&&or(nt,tt,it))return!0;if(ot===0&&or(nt,et,it))return!0;return!1}function or(tt,et,nt){return et.x<=Math.max(tt.x,nt.x)&&et.x>=Math.min(tt.x,nt.x)&&et.y<=Math.max(tt.y,nt.y)&&et.y>=Math.min(tt.y,nt.y)}function lr(tt){return tt>0?1:tt<0?-1:0}function Hu(tt,et){let nt=tt;do{if(nt.i!==tt.i&&nt.next.i!==tt.i&&nt.i!==et.i&&nt.next.i!==et.i&&Gc(nt,nt.next,tt,et))return!0;nt=nt.next}while(nt!==tt);return!1}function Es(tt,et){return hn(tt.prev,tt,tt.next)<0?hn(tt,et,tt.next)>=0&&hn(tt,tt.prev,et)>=0:hn(tt,et,tt.prev)<0||hn(tt,tt.next,et)<0}function Wu(tt,et){let nt=tt,it=!1,st=(tt.x+et.x)/2,rt=(tt.y+et.y)/2;do{if(nt.y>rt!==nt.next.y>rt&&nt.next.y!==nt.y&&st<(nt.next.x-nt.x)*(rt-nt.y)/(nt.next.y-nt.y)+nt.x)it=!it;nt=nt.next}while(nt!==tt);return it}function kc(tt,et){let nt=xa(tt.i,tt.x,tt.y),it=xa(et.i,et.x,et.y),st=tt.next,rt=et.prev;return tt.next=et,et.prev=tt,nt.next=st,st.prev=nt,it.next=nt,nt.prev=it,rt.next=it,it.prev=rt,it}function wl(tt,et,nt,it){let st=xa(tt,et,nt);if(!it)st.prev=st,st.next=st;else st.next=it.next,st.prev=it,it.next.prev=st,it.next=st;return st}function As(tt){if(tt.next.prev=tt.prev,tt.prev.next=tt.next,tt.prevZ)tt.prevZ.nextZ=tt.nextZ;if(tt.nextZ)tt.nextZ.prevZ=tt.prevZ}function xa(tt,et,nt){return{i:tt,x:et,y:nt,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Vu(tt,et,nt,it){let st=0;for(let rt=et,at=nt-it;rt<nt;rt+=it)st+=(tt[at]-tt[rt])*(tt[rt+1]+tt[at+1]),at=rt;return st}class Hc{static triangulate(tt,et,nt=2){return Ru(tt,et,nt)}}class Ri{static area(tt){let et=tt.length,nt=0;for(let it=et-1,st=0;st<et;it=st++)nt+=tt[it].x*tt[st].y-tt[st].x*tt[it].y;return nt*0.5}static isClockWise(tt){return Ri.area(tt)<0}static triangulateShape(tt,et){let nt=[],it=[],st=[];Rl(tt),Cl(nt,tt);let rt=tt.length;et.forEach(Rl);for(let ot=0;ot<et.length;ot++)it.push(rt),rt+=et[ot].length,Cl(nt,et[ot]);let at=Hc.triangulate(nt,it);for(let ot=0;ot<at.length;ot+=3)st.push(at.slice(ot,ot+3));return st}}function Rl(tt){let et=tt.length;if(et>2&&tt[et-1].equals(tt[0]))tt.pop()}function Cl(tt,et){for(let nt=0;nt<et.length;nt++)tt.push(et[nt].x),tt.push(et[nt].y)}class k extends f{constructor(tt=new G([new t(0.5,0.5),new t(-0.5,0.5),new t(-0.5,-0.5),new t(0.5,-0.5)]),et={}){super();this.type="ExtrudeGeometry",this.parameters={shapes:tt,options:et},tt=Array.isArray(tt)?tt:[tt];let nt=this,it=[],st=[];for(let at=0,ot=tt.length;at<ot;at++){let lt=tt[at];rt(lt)}this.setAttribute("position",new r(it,3)),this.setAttribute("uv",new r(st,2)),this.computeVertexNormals();function rt(at){let ot=[],lt=et.curveSegments!==void 0?et.curveSegments:12,ct=et.steps!==void 0?et.steps:1,ut=et.depth!==void 0?et.depth:1,dt=et.bevelEnabled!==void 0?et.bevelEnabled:!0,ht=et.bevelThickness!==void 0?et.bevelThickness:0.2,pt=et.bevelSize!==void 0?et.bevelSize:ht-0.1,xt=et.bevelOffset!==void 0?et.bevelOffset:0,Mt=et.bevelSegments!==void 0?et.bevelSegments:3,ft=et.extrudePath,mt=et.UVGenerator!==void 0?et.UVGenerator:Xu,Et,Tt=!1,yt,At,Rt,gt;if(ft){Et=ft.getSpacedPoints(ct),Tt=!0,dt=!1;let Kt=ft.isCatmullRomCurve3?ft.closed:!1;yt=ft.computeFrenetFrames(ct,Kt),At=new e,Rt=new e,gt=new e}if(!dt)Mt=0,ht=0,pt=0,xt=0;let St=at.extractPoints(lt),{shape:It,holes:Bt}=St;if(!Ri.isClockWise(It)){It=It.reverse();for(let Kt=0,re=Bt.length;Kt<re;Kt++){let le=Bt[Kt];if(Ri.isClockWise(le))Bt[Kt]=le.reverse()}}function zt(Kt){let Me=Kt[0];for(let ye=1;ye<=Kt.length;ye++){let De=ye%Kt.length,Ce=Kt[De],qe=Ce.x-Me.x,Ye=Ce.y-Me.y,tn=qe*qe+Ye*Ye,Nt=Math.max(Math.abs(Ce.x),Math.abs(Ce.y),Math.abs(Me.x),Math.abs(Me.y)),mn=0.000000000000000000010000000000000001*Nt*Nt;if(tn<=mn){Kt.splice(De,1),ye--;continue}Me=Ce}}zt(It),Bt.forEach(zt);let $t=Bt.length,wt=It;for(let Kt=0;Kt<$t;Kt++){let re=Bt[Kt];It=It.concat(re)}function Vt(Kt,re,le){if(!re)Be("ExtrudeGeometry: vec does not exist");return Kt.clone().addScaledVector(re,le)}let Xt=It.length;function Ft(Kt,re,le){let Me,ye,De,Ce=Kt.x-re.x,qe=Kt.y-re.y,Ye=le.x-Kt.x,tn=le.y-Kt.y,Nt=Ce*Ce+qe*qe,mn=Ce*tn-qe*Ye;if(Math.abs(mn)>Number.EPSILON){let He=Math.sqrt(Nt),dn=Math.sqrt(Ye*Ye+tn*tn),pe=re.x-qe/He,nn=re.y+Ce/He,Ue=le.x-tn/dn,ze=le.y+Ye/dn,gn=((Ue-pe)*tn-(ze-nn)*Ye)/(Ce*tn-qe*Ye);Me=pe+Ce*gn-Kt.x,ye=nn+qe*gn-Kt.y;let bt=Me*Me+ye*ye;if(bt<=2)return new t(Me,ye);else De=Math.sqrt(bt/2)}else{let He=!1;if(Ce>Number.EPSILON){if(Ye>Number.EPSILON)He=!0}else if(Ce<-Number.EPSILON){if(Ye<-Number.EPSILON)He=!0}else if(Math.sign(qe)===Math.sign(tn))He=!0;if(He)Me=-qe,ye=Ce,De=Math.sqrt(Nt);else Me=Ce,ye=qe,De=Math.sqrt(Nt/2)}return new t(Me/De,ye/De)}let se=[];for(let Kt=0,re=wt.length,le=re-1,Me=Kt+1;Kt<re;Kt++,le++,Me++){if(le===re)le=0;if(Me===re)Me=0;se[Kt]=Ft(wt[Kt],wt[le],wt[Me])}let Ht=[],Jt,te=se.concat();for(let Kt=0,re=$t;Kt<re;Kt++){let le=Bt[Kt];Jt=[];for(let Me=0,ye=le.length,De=ye-1,Ce=Me+1;Me<ye;Me++,De++,Ce++){if(De===ye)De=0;if(Ce===ye)Ce=0;Jt[Me]=Ft(le[Me],le[De],le[Ce])}Ht.push(Jt),te=te.concat(Jt)}let Se;if(Mt===0)Se=Ri.triangulateShape(wt,Bt);else{let Kt=[],re=[];for(let le=0;le<Mt;le++){let Me=le/Mt,ye=ht*Math.cos(Me*Math.PI/2),De=pt*Math.sin(Me*Math.PI/2)+xt;for(let Ce=0,qe=wt.length;Ce<qe;Ce++){let Ye=Vt(wt[Ce],se[Ce],De);if(ve(Ye.x,Ye.y,-ye),Me===0)Kt.push(Ye)}for(let Ce=0,qe=$t;Ce<qe;Ce++){let Ye=Bt[Ce];Jt=Ht[Ce];let tn=[];for(let Nt=0,mn=Ye.length;Nt<mn;Nt++){let He=Vt(Ye[Nt],Jt[Nt],De);if(ve(He.x,He.y,-ye),Me===0)tn.push(He)}if(Me===0)re.push(tn)}}Se=Ri.triangulateShape(Kt,re)}let Yt=Se.length,ne=pt+xt;for(let Kt=0;Kt<Xt;Kt++){let re=dt?Vt(It[Kt],te[Kt],ne):It[Kt];if(!Tt)ve(re.x,re.y,0);else Rt.copy(yt.normals[0]).multiplyScalar(re.x),At.copy(yt.binormals[0]).multiplyScalar(re.y),gt.copy(Et[0]).add(Rt).add(At),ve(gt.x,gt.y,gt.z)}for(let Kt=1;Kt<=ct;Kt++)for(let re=0;re<Xt;re++){let le=dt?Vt(It[re],te[re],ne):It[re];if(!Tt)ve(le.x,le.y,ut/ct*Kt);else Rt.copy(yt.normals[Kt]).multiplyScalar(le.x),At.copy(yt.binormals[Kt]).multiplyScalar(le.y),gt.copy(Et[Kt]).add(Rt).add(At),ve(gt.x,gt.y,gt.z)}for(let Kt=Mt-1;Kt>=0;Kt--){let re=Kt/Mt,le=ht*Math.cos(re*Math.PI/2),Me=pt*Math.sin(re*Math.PI/2)+xt;for(let ye=0,De=wt.length;ye<De;ye++){let Ce=Vt(wt[ye],se[ye],Me);ve(Ce.x,Ce.y,ut+le)}for(let ye=0,De=Bt.length;ye<De;ye++){let Ce=Bt[ye];Jt=Ht[ye];for(let qe=0,Ye=Ce.length;qe<Ye;qe++){let tn=Vt(Ce[qe],Jt[qe],Me);if(!Tt)ve(tn.x,tn.y,ut+le);else ve(tn.x,tn.y+Et[ct-1].y,Et[ct-1].x+le)}}}be(),Pe();function be(){let Kt=it.length/3;if(dt){let re=0,le=Xt*re;for(let Me=0;Me<Yt;Me++){let ye=Se[Me];Qe(ye[2]+le,ye[1]+le,ye[0]+le)}re=ct+Mt*2,le=Xt*re;for(let Me=0;Me<Yt;Me++){let ye=Se[Me];Qe(ye[0]+le,ye[1]+le,ye[2]+le)}}else{for(let re=0;re<Yt;re++){let le=Se[re];Qe(le[2],le[1],le[0])}for(let re=0;re<Yt;re++){let le=Se[re];Qe(le[0]+Xt*ct,le[1]+Xt*ct,le[2]+Xt*ct)}}nt.addGroup(Kt,it.length/3-Kt,0)}function Pe(){let Kt=it.length/3,re=0;Le(wt,re),re+=wt.length;for(let le=0,Me=Bt.length;le<Me;le++){let ye=Bt[le];Le(ye,re),re+=ye.length}nt.addGroup(Kt,it.length/3-Kt,1)}function Le(Kt,re){let le=Kt.length;while(--le>=0){let Me=le,ye=le-1;if(ye<0)ye=Kt.length-1;for(let De=0,Ce=ct+Mt*2;De<Ce;De++){let qe=Xt*De,Ye=Xt*(De+1),tn=re+Me+qe,Nt=re+ye+qe,mn=re+ye+Ye,He=re+Me+Ye;Ve(tn,Nt,mn,He)}}}function ve(Kt,re,le){ot.push(Kt),ot.push(re),ot.push(le)}function Qe(Kt,re,le){Fe(Kt),Fe(re),Fe(le);let Me=it.length/3,ye=mt.generateTopUV(nt,it,Me-3,Me-2,Me-1);Ke(ye[0]),Ke(ye[1]),Ke(ye[2])}function Ve(Kt,re,le,Me){Fe(Kt),Fe(re),Fe(Me),Fe(re),Fe(le),Fe(Me);let ye=it.length/3,De=mt.generateSideWallUV(nt,it,ye-6,ye-3,ye-2,ye-1);Ke(De[0]),Ke(De[1]),Ke(De[3]),Ke(De[1]),Ke(De[2]),Ke(De[3])}function Fe(Kt){it.push(ot[Kt*3+0]),it.push(ot[Kt*3+1]),it.push(ot[Kt*3+2])}function Ke(Kt){st.push(Kt.x),st.push(Kt.y)}}}copy(tt){return super.copy(tt),this.parameters=Object.assign({},tt.parameters),this}toJSON(){let tt=super.toJSON(),et=this.parameters.shapes,nt=this.parameters.options;return qu(et,nt,tt)}static fromJSON(tt,et){let nt=[];for(let st=0,rt=tt.shapes.length;st<rt;st++){let at=et[tt.shapes[st]];nt.push(at)}let it=tt.options.extrudePath;if(it!==void 0)tt.options.extrudePath=new ga[it.type]().fromJSON(it);return new k(nt,tt.options)}}var Xu={generateTopUV:function(tt,et,nt,it,st){let rt=et[nt*3],at=et[nt*3+1],ot=et[it*3],lt=et[it*3+1],ct=et[st*3],ut=et[st*3+1];return[new t(rt,at),new t(ot,lt),new t(ct,ut)]},generateSideWallUV:function(tt,et,nt,it,st,rt){let at=et[nt*3],ot=et[nt*3+1],lt=et[nt*3+2],ct=et[it*3],ut=et[it*3+1],dt=et[it*3+2],ht=et[st*3],pt=et[st*3+1],xt=et[st*3+2],Mt=et[rt*3],ft=et[rt*3+1],mt=et[rt*3+2];if(Math.abs(ot-ut)<Math.abs(at-ct))return[new t(at,1-lt),new t(ct,1-dt),new t(ht,1-xt),new t(Mt,1-mt)];else return[new t(ot,1-lt),new t(ut,1-dt),new t(pt,1-xt),new t(ft,1-mt)]}};function qu(tt,et,nt){if(nt.shapes=[],Array.isArray(tt))for(let it=0,st=tt.length;it<st;it++){let rt=tt[it];nt.shapes.push(rt.uuid)}else nt.shapes.push(tt.uuid);if(nt.options=Object.assign({},et),et.extrudePath!==void 0)nt.options.extrudePath=et.extrudePath.toJSON();return nt}class w extends f{constructor(tt=1,et=1,nt=1,it=1){super();this.type="PlaneGeometry",this.parameters={width:tt,height:et,widthSegments:nt,heightSegments:it};let st=tt/2,rt=et/2,at=Math.floor(nt),ot=Math.floor(it),lt=at+1,ct=ot+1,ut=tt/at,dt=et/ot,ht=[],pt=[],xt=[],Mt=[];for(let ft=0;ft<ct;ft++){let mt=ft*dt-rt;for(let Et=0;Et<lt;Et++){let Tt=Et*ut-st;pt.push(Tt,-mt,0),xt.push(0,0,1),Mt.push(Et/at),Mt.push(1-ft/ot)}}for(let ft=0;ft<ot;ft++)for(let mt=0;mt<at;mt++){let Et=mt+lt*ft,Tt=mt+lt*(ft+1),yt=mt+1+lt*(ft+1),At=mt+1+lt*ft;ht.push(Et,Tt,At),ht.push(Tt,yt,At)}this.setIndex(ht),this.setAttribute("position",new r(pt,3)),this.setAttribute("normal",new r(xt,3)),this.setAttribute("uv",new r(Mt,2))}copy(tt){return super.copy(tt),this.parameters=Object.assign({},tt.parameters),this}static fromJSON(tt){return new w(tt.width,tt.height,tt.widthSegments,tt.heightSegments)}}class H extends f{constructor(tt=1,et=32,nt=16,it=0,st=Math.PI*2,rt=0,at=Math.PI){super();this.type="SphereGeometry",this.parameters={radius:tt,widthSegments:et,heightSegments:nt,phiStart:it,phiLength:st,thetaStart:rt,thetaLength:at},et=Math.max(3,Math.floor(et)),nt=Math.max(2,Math.floor(nt));let ot=Math.min(rt+at,Math.PI),lt=0,ct=[],ut=new e,dt=new e,ht=[],pt=[],xt=[],Mt=[];for(let ft=0;ft<=nt;ft++){let mt=[],Et=ft/nt,Tt=rt+Et*at,yt=tt*Math.cos(Tt),At=Math.sqrt(tt*tt-yt*yt),Rt=0;if(ft===0&&rt===0)Rt=0.5/et;else if(ft===nt&&ot===Math.PI)Rt=-0.5/et;for(let gt=0;gt<=et;gt++){let St=gt/et,It=it+St*st;ut.x=-At*Math.cos(It),ut.y=yt,ut.z=At*Math.sin(It),pt.push(ut.x,ut.y,ut.z),dt.copy(ut).normalize(),xt.push(dt.x,dt.y,dt.z),Mt.push(St+Rt,1-Et),mt.push(lt++)}ct.push(mt)}for(let ft=0;ft<nt;ft++)for(let mt=0;mt<et;mt++){let Et=ct[ft][mt+1],Tt=ct[ft][mt],yt=ct[ft+1][mt],At=ct[ft+1][mt+1];if(ft!==0||rt>0)ht.push(Et,Tt,At);if(ft!==nt-1||ot<Math.PI)ht.push(Tt,yt,At)}this.setIndex(ht),this.setAttribute("position",new r(pt,3)),this.setAttribute("normal",new r(xt,3)),this.setAttribute("uv",new r(Mt,2))}copy(tt){return super.copy(tt),this.parameters=Object.assign({},tt.parameters),this}static fromJSON(tt){return new H(tt.radius,tt.widthSegments,tt.heightSegments,tt.phiStart,tt.phiLength,tt.thetaStart,tt.thetaLength)}}class A extends f{constructor(tt=1,et=0.4,nt=12,it=48,st=Math.PI*2,rt=0,at=Math.PI*2){super();this.type="TorusGeometry",this.parameters={radius:tt,tube:et,radialSegments:nt,tubularSegments:it,arc:st,thetaStart:rt,thetaLength:at},nt=Math.floor(nt),it=Math.floor(it);let ot=[],lt=[],ct=[],ut=[],dt=new e,ht=new e,pt=new e;for(let xt=0;xt<=nt;xt++){let Mt=rt+xt/nt*at;for(let ft=0;ft<=it;ft++){let mt=ft/it*st;ht.x=(tt+et*Math.cos(Mt))*Math.cos(mt),ht.y=(tt+et*Math.cos(Mt))*Math.sin(mt),ht.z=et*Math.sin(Mt),lt.push(ht.x,ht.y,ht.z),dt.x=tt*Math.cos(mt),dt.y=tt*Math.sin(mt),pt.subVectors(ht,dt).normalize(),ct.push(pt.x,pt.y,pt.z),ut.push(ft/it),ut.push(xt/nt)}}for(let xt=1;xt<=nt;xt++)for(let Mt=1;Mt<=it;Mt++){let ft=(it+1)*xt+Mt-1,mt=(it+1)*(xt-1)+Mt-1,Et=(it+1)*(xt-1)+Mt,Tt=(it+1)*xt+Mt;ot.push(ft,mt,Tt),ot.push(mt,Et,Tt)}this.setIndex(ot),this.setAttribute("position",new r(lt,3)),this.setAttribute("normal",new r(ct,3)),this.setAttribute("uv",new r(ut,2))}copy(tt){return super.copy(tt),this.parameters=Object.assign({},tt.parameters),this}static fromJSON(tt){return new A(tt.radius,tt.tube,tt.radialSegments,tt.tubularSegments,tt.arc,tt.thetaStart,tt.thetaLength)}}class W extends ci{constructor(tt){super();this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new n(0),this.transparent=!0,this.fog=!0,this.setValues(tt)}copy(tt){return super.copy(tt),this.color.copy(tt.color),this.fog=tt.fog,this}}function Fi(tt){let et={};for(let nt in tt){et[nt]={};for(let it in tt[nt]){let st=tt[nt][it];if(Il(st))if(st.isRenderTargetTexture)Oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),et[nt][it]=null;else et[nt][it]=st.clone();else if(Array.isArray(st))if(Il(st[0])){let rt=[];for(let at=0,ot=st.length;at<ot;at++)rt[at]=st[at].clone();et[nt][it]=rt}else et[nt][it]=st.slice();else et[nt][it]=st}}return et}function Rn(tt){let et={};for(let nt=0;nt<tt.length;nt++){let it=Fi(tt[nt]);for(let st in it)et[st]=it[st]}return et}function Il(tt){return tt&&(tt.isColor||tt.isMatrix3||tt.isMatrix4||tt.isVector2||tt.isVector3||tt.isVector4||tt.isTexture||tt.isQuaternion)}function Yu(tt){let et=[];for(let nt=0;nt<tt.length;nt++)et.push(tt[nt].clone());return et}function Co(tt){let et=tt.getRenderTarget();if(et===null)return tt.outputColorSpace;if(et.isXRRenderTarget===!0)return et.texture.colorSpace;return i.workingColorSpace}var v={clone:Fi,merge:Rn},Zu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ju=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class h extends ci{constructor(tt){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zu,this.fragmentShader=Ju,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,tt!==void 0)this.setValues(tt)}copy(tt){return super.copy(tt),this.fragmentShader=tt.fragmentShader,this.vertexShader=tt.vertexShader,this.uniforms=Fi(tt.uniforms),this.uniformsGroups=Yu(tt.uniformsGroups),this.defines=Object.assign({},tt.defines),this.wireframe=tt.wireframe,this.wireframeLinewidth=tt.wireframeLinewidth,this.fog=tt.fog,this.lights=tt.lights,this.clipping=tt.clipping,this.extensions=Object.assign({},tt.extensions),this.glslVersion=tt.glslVersion,this.defaultAttributeValues=Object.assign({},tt.defaultAttributeValues),this.index0AttributeName=tt.index0AttributeName,this.uniformsNeedUpdate=tt.uniformsNeedUpdate,this}toJSON(tt){let et=super.toJSON(tt);et.glslVersion=this.glslVersion,et.uniforms={};for(let it in this.uniforms){let rt=this.uniforms[it].value;if(rt&&rt.isTexture)et.uniforms[it]={type:"t",value:rt.toJSON(tt).uuid};else if(rt&&rt.isColor)et.uniforms[it]={type:"c",value:rt.getHex()};else if(rt&&rt.isVector2)et.uniforms[it]={type:"v2",value:rt.toArray()};else if(rt&&rt.isVector3)et.uniforms[it]={type:"v3",value:rt.toArray()};else if(rt&&rt.isVector4)et.uniforms[it]={type:"v4",value:rt.toArray()};else if(rt&&rt.isMatrix3)et.uniforms[it]={type:"m3",value:rt.toArray()};else if(rt&&rt.isMatrix4)et.uniforms[it]={type:"m4",value:rt.toArray()};else et.uniforms[it]={value:rt}}if(Object.keys(this.defines).length>0)et.defines=this.defines;et.vertexShader=this.vertexShader,et.fragmentShader=this.fragmentShader,et.lights=this.lights,et.clipping=this.clipping;let nt={};for(let it in this.extensions)if(this.extensions[it]===!0)nt[it]=!0;if(Object.keys(nt).length>0)et.extensions=nt;return et}fromJSON(tt,et){if(super.fromJSON(tt,et),tt.uniforms!==void 0)for(let nt in tt.uniforms){let it=tt.uniforms[nt];switch(this.uniforms[nt]={},it.type){case"t":this.uniforms[nt].value=et[it.value]||null;break;case"c":this.uniforms[nt].value=new n().setHex(it.value);break;case"v2":this.uniforms[nt].value=new t().fromArray(it.value);break;case"v3":this.uniforms[nt].value=new e().fromArray(it.value);break;case"v4":this.uniforms[nt].value=new un().fromArray(it.value);break;case"m3":this.uniforms[nt].value=new Ge().fromArray(it.value);break;case"m4":this.uniforms[nt].value=new an().fromArray(it.value);break;default:this.uniforms[nt].value=it.value}}if(tt.defines!==void 0)this.defines=tt.defines;if(tt.vertexShader!==void 0)this.vertexShader=tt.vertexShader;if(tt.fragmentShader!==void 0)this.fragmentShader=tt.fragmentShader;if(tt.glslVersion!==void 0)this.glslVersion=tt.glslVersion;if(tt.extensions!==void 0)for(let nt in tt.extensions)this.extensions[nt]=tt.extensions[nt];if(tt.lights!==void 0)this.lights=tt.lights;if(tt.clipping!==void 0)this.clipping=tt.clipping;return this}}class V extends h{constructor(tt){super(tt);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class g extends ci{constructor(tt){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new n(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new n(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(tt)}copy(tt){return super.copy(tt),this.defines={STANDARD:""},this.color.copy(tt.color),this.roughness=tt.roughness,this.metalness=tt.metalness,this.map=tt.map,this.lightMap=tt.lightMap,this.lightMapIntensity=tt.lightMapIntensity,this.aoMap=tt.aoMap,this.aoMapIntensity=tt.aoMapIntensity,this.emissive.copy(tt.emissive),this.emissiveMap=tt.emissiveMap,this.emissiveIntensity=tt.emissiveIntensity,this.bumpMap=tt.bumpMap,this.bumpScale=tt.bumpScale,this.normalMap=tt.normalMap,this.normalMapType=tt.normalMapType,this.normalScale.copy(tt.normalScale),this.displacementMap=tt.displacementMap,this.displacementScale=tt.displacementScale,this.displacementBias=tt.displacementBias,this.roughnessMap=tt.roughnessMap,this.metalnessMap=tt.metalnessMap,this.alphaMap=tt.alphaMap,this.envMap=tt.envMap,this.envMapRotation.copy(tt.envMapRotation),this.envMapIntensity=tt.envMapIntensity,this.wireframe=tt.wireframe,this.wireframeLinewidth=tt.wireframeLinewidth,this.wireframeLinecap=tt.wireframeLinecap,this.wireframeLinejoin=tt.wireframeLinejoin,this.flatShading=tt.flatShading,this.fog=tt.fog,this}}class J extends ci{constructor(tt){super();this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new n(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new n(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(tt)}copy(tt){return super.copy(tt),this.color.copy(tt.color),this.map=tt.map,this.lightMap=tt.lightMap,this.lightMapIntensity=tt.lightMapIntensity,this.aoMap=tt.aoMap,this.aoMapIntensity=tt.aoMapIntensity,this.emissive.copy(tt.emissive),this.emissiveMap=tt.emissiveMap,this.emissiveIntensity=tt.emissiveIntensity,this.bumpMap=tt.bumpMap,this.bumpScale=tt.bumpScale,this.normalMap=tt.normalMap,this.normalMapType=tt.normalMapType,this.normalScale.copy(tt.normalScale),this.displacementMap=tt.displacementMap,this.displacementScale=tt.displacementScale,this.displacementBias=tt.displacementBias,this.specularMap=tt.specularMap,this.alphaMap=tt.alphaMap,this.envMap=tt.envMap,this.envMapRotation.copy(tt.envMapRotation),this.combine=tt.combine,this.reflectivity=tt.reflectivity,this.envMapIntensity=tt.envMapIntensity,this.refractionRatio=tt.refractionRatio,this.wireframe=tt.wireframe,this.wireframeLinewidth=tt.wireframeLinewidth,this.wireframeLinecap=tt.wireframeLinecap,this.wireframeLinejoin=tt.wireframeLinejoin,this.flatShading=tt.flatShading,this.fog=tt.fog,this}}class Io extends ci{constructor(tt){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(tt)}copy(tt){return super.copy(tt),this.depthPacking=tt.depthPacking,this.map=tt.map,this.alphaMap=tt.alphaMap,this.displacementMap=tt.displacementMap,this.displacementScale=tt.displacementScale,this.displacementBias=tt.displacementBias,this.wireframe=tt.wireframe,this.wireframeLinewidth=tt.wireframeLinewidth,this}}class Po extends ci{constructor(tt){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(tt)}copy(tt){return super.copy(tt),this.map=tt.map,this.alphaMap=tt.alphaMap,this.displacementMap=tt.displacementMap,this.displacementScale=tt.displacementScale,this.displacementBias=tt.displacementBias,this}}function Ki(tt,et){if(!tt||tt.constructor===et)return tt;if(typeof et.BYTES_PER_ELEMENT==="number")return new et(tt);return Array.prototype.slice.call(tt)}function cr(tt){return tt!==void 0&&tt.inTangents!==void 0&&tt.outTangents!==void 0}class Oi{constructor(tt,et,nt,it){this.parameterPositions=tt,this._cachedIndex=0,this.resultBuffer=it!==void 0?it:new et.constructor(nt),this.sampleValues=et,this.valueSize=nt,this.settings=null,this.DefaultSettings_={}}evaluate(tt){let et=this.parameterPositions,nt=this._cachedIndex,it=et[nt],st=et[nt-1];n:{t:{let rt;e:{i:if(!(tt<it)){for(let at=nt+2;;){if(it===void 0){if(tt<st)break i;return nt=et.length,this._cachedIndex=nt,this.copySampleValue_(nt-1)}if(nt===at)break;if(st=it,it=et[++nt],tt<it)break t}rt=et.length;break e}if(!(tt>=st)){let at=et[1];if(tt<at)nt=2,st=at;for(let ot=nt-2;;){if(st===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(nt===ot)break;if(it=st,st=et[--nt-1],tt>=st)break t}rt=nt,nt=0;break e}break n}while(nt<rt){let at=nt+rt>>>1;if(tt<et[at])rt=at;else nt=at+1}if(it=et[nt],st=et[nt-1],st===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(it===void 0)return nt=et.length,this._cachedIndex=nt,this.copySampleValue_(nt-1)}this._cachedIndex=nt,this.intervalChanged_(nt,st,it)}return this.interpolate_(nt,st,tt,it)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(tt){let et=this.resultBuffer,nt=this.sampleValues,it=this.valueSize,st=tt*it;for(let rt=0;rt!==it;++rt)et[rt]=nt[st+rt];return et}interpolate_(){throw Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class Lo extends Oi{constructor(tt,et,nt,it){super(tt,et,nt,it);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(tt,et,nt){let it=this.parameterPositions,st=tt-2,rt=tt+1,at=it[st],ot=it[rt];if(at===void 0)switch(this.getSettings_().endingStart){case 2401:st=tt,at=2*et-nt;break;case 2402:st=it.length-2,at=et+it[st]-it[st+1];break;default:st=tt,at=nt}if(ot===void 0)switch(this.getSettings_().endingEnd){case 2401:rt=tt,ot=2*nt-et;break;case 2402:rt=1,ot=nt+it[1]-it[0];break;default:rt=tt-1,ot=et}let lt=(nt-et)*0.5,ct=this.valueSize;this._weightPrev=lt/(et-at),this._weightNext=lt/(ot-nt),this._offsetPrev=st*ct,this._offsetNext=rt*ct}interpolate_(tt,et,nt,it){let st=this.resultBuffer,rt=this.sampleValues,at=this.valueSize,ot=tt*at,lt=ot-at,ct=this._offsetPrev,ut=this._offsetNext,dt=this._weightPrev,ht=this._weightNext,pt=(nt-et)/(it-et),xt=pt*pt,Mt=xt*pt,ft=-dt*Mt+2*dt*xt-dt*pt,mt=(1+dt)*Mt+(-1.5-2*dt)*xt+(-0.5+dt)*pt+1,Et=(-1-ht)*Mt+(1.5+ht)*xt+0.5*pt,Tt=ht*Mt-ht*xt;for(let yt=0;yt!==at;++yt)st[yt]=ft*rt[ct+yt]+mt*rt[lt+yt]+Et*rt[ot+yt]+Tt*rt[ut+yt];return st}}class No extends Oi{constructor(tt,et,nt,it){super(tt,et,nt,it)}interpolate_(tt,et,nt,it){let st=this.resultBuffer,rt=this.sampleValues,at=this.valueSize,ot=tt*at,lt=ot-at,ct=(nt-et)/(it-et),ut=1-ct;for(let dt=0;dt!==at;++dt)st[dt]=rt[lt+dt]*ut+rt[ot+dt]*ct;return st}}class Do extends Oi{constructor(tt,et,nt,it){super(tt,et,nt,it)}interpolate_(tt){return this.copySampleValue_(tt-1)}}class Uo extends Oi{interpolate_(tt,et,nt,it){let st=this.resultBuffer,rt=this.sampleValues,at=this.valueSize,ot=tt*at,lt=ot-at,ct=this.inTangents,ut=this.outTangents;if(!ct||!ut){let pt=(nt-et)/(it-et),xt=1-pt;for(let Mt=0;Mt!==at;++Mt)st[Mt]=rt[lt+Mt]*xt+rt[ot+Mt]*pt;return st}let dt=at*2,ht=tt-1;for(let pt=0;pt!==at;++pt){let xt=rt[lt+pt],Mt=rt[ot+pt],ft=ht*dt+pt*2,mt=ut[ft],Et=ut[ft+1],Tt=tt*dt+pt*2,yt=ct[Tt],At=ct[Tt+1],Rt=Ku(nt,et,mt,yt,it);st[pt]=Wc(Rt,xt,Et,At,Mt)}return st}}function Wc(tt,et,nt,it,st){let rt=1-tt;return rt*rt*rt*et+3*rt*rt*tt*nt+3*rt*tt*tt*it+tt*tt*tt*st}function $u(tt,et,nt,it,st){let rt=1-tt;return 3*rt*rt*(nt-et)+6*rt*tt*(it-nt)+3*tt*tt*(st-it)}function Ku(tt,et,nt,it,st){let rt=(tt-et)/(st-et);for(let at=0;at<8;at++){let ot=Wc(rt,et,nt,it,st)-tt;if(Math.abs(ot)<0.0000000001)break;let lt=$u(rt,et,nt,it,st);if(Math.abs(lt)<0.0000000001)break;rt=Math.max(0,Math.min(1,rt-ot/lt))}return rt}class Fn{constructor(tt,et,nt,it){if(tt===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(et===void 0||et.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+tt);this.name=tt,this.times=Ki(et,this.TimeBufferType),this.values=Ki(nt,this.ValueBufferType),this.setInterpolation(it||this.DefaultInterpolation)}static toJSON(tt){let et=tt.constructor,nt;if(et.toJSON!==this.toJSON)nt=et.toJSON(tt);else{nt={name:tt.name,times:Ki(tt.times,Array),values:Ki(tt.values,Array)};let it=tt.getInterpolation();if(it!==tt.DefaultInterpolation)nt.interpolation=it;if(cr(tt.settings))nt.settings={inTangents:Ki(tt.settings.inTangents,Array),outTangents:Ki(tt.settings.outTangents,Array)}}return nt.type=tt.ValueTypeName,nt}InterpolantFactoryMethodDiscrete(tt){return new Do(this.times,this.values,this.getValueSize(),tt)}InterpolantFactoryMethodLinear(tt){return new No(this.times,this.values,this.getValueSize(),tt)}InterpolantFactoryMethodSmooth(tt){return new Lo(this.times,this.values,this.getValueSize(),tt)}InterpolantFactoryMethodBezier(tt){let et=new Uo(this.times,this.values,this.getValueSize(),tt);if(this.settings)et.inTangents=this.settings.inTangents,et.outTangents=this.settings.outTangents;return et}setInterpolation(tt){let et;switch(tt){case 2300:et=this.InterpolantFactoryMethodDiscrete;break;case 2301:et=this.InterpolantFactoryMethodLinear;break;case 2302:et=this.InterpolantFactoryMethodSmooth;break;case 2303:et=this.InterpolantFactoryMethodBezier;break}if(et===void 0){let nt="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(tt!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(nt);return Oe("KeyframeTrack:",nt),this}return this.createInterpolant=et,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;case this.InterpolantFactoryMethodBezier:return 2303}}getValueSize(){return this.values.length/this.times.length}shift(tt){if(tt!==0){let et=this.times;for(let nt=0,it=et.length;nt!==it;++nt)et[nt]+=tt;if(cr(this.settings))Pl(this.settings.inTangents,tt),Pl(this.settings.outTangents,tt)}return this}scale(tt){if(tt!==1){let et=this.times;for(let nt=0,it=et.length;nt!==it;++nt)et[nt]*=tt;if(cr(this.settings))Ll(this.settings.inTangents,tt),Ll(this.settings.outTangents,tt)}return this}trim(tt,et){let nt=this.times,it=nt.length,st=0,rt=it-1;while(st!==it&&nt[st]<tt)++st;while(rt!==-1&&nt[rt]>et)--rt;if(++rt,st!==0||rt!==it){if(st>=rt)rt=Math.max(rt,1),st=rt-1;let at=this.getValueSize();this.times=nt.slice(st,rt),this.values=this.values.slice(st*at,rt*at)}return this}validate(){let tt=!0,et=this.getValueSize();if(et-Math.floor(et)!==0)Be("KeyframeTrack: Invalid value size in track.",this),tt=!1;let nt=this.times,it=this.values,st=nt.length;if(st===0)Be("KeyframeTrack: Track is empty.",this),tt=!1;let rt=null;for(let at=0;at!==st;at++){let ot=nt[at];if(typeof ot==="number"&&isNaN(ot)){Be("KeyframeTrack: Time is not a valid number.",this,at,ot),tt=!1;break}if(rt!==null&&rt>ot){Be("KeyframeTrack: Out of order keys.",this,at,ot,rt),tt=!1;break}rt=ot}if(it!==void 0){if(Gh(it))for(let at=0,ot=it.length;at!==ot;++at){let lt=it[at];if(isNaN(lt)){Be("KeyframeTrack: Value is not a valid number.",this,at,lt),tt=!1;break}}}return tt}optimize(){let tt=this.times.slice(),et=this.values.slice(),nt=this.getValueSize(),it=this.getInterpolation()===2302,st=tt.length-1,rt=1;for(let at=1;at<st;++at){let ot=!1,lt=tt[at],ct=tt[at+1];if(lt!==ct&&(at!==1||lt!==tt[0]))if(!it){let ut=at*nt,dt=ut-nt,ht=ut+nt;for(let pt=0;pt!==nt;++pt){let xt=et[ut+pt];if(xt!==et[dt+pt]||xt!==et[ht+pt]){ot=!0;break}}}else ot=!0;if(ot){if(at!==rt){tt[rt]=tt[at];let ut=at*nt,dt=rt*nt;for(let ht=0;ht!==nt;++ht)et[dt+ht]=et[ut+ht]}++rt}}if(st>0){tt[rt]=tt[st];for(let at=st*nt,ot=rt*nt,lt=0;lt!==nt;++lt)et[ot+lt]=et[at+lt];++rt}if(rt!==tt.length)this.times=tt.slice(0,rt),this.values=et.slice(0,rt*nt);else this.times=tt,this.values=et;return this}clone(){let tt=this.times.slice(),et=this.values.slice(),it=new this.constructor(this.name,tt,et);if(it.createInterpolant=this.createInterpolant,cr(this.settings))it.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()};return it}}function Pl(tt,et){for(let nt=0,it=tt.length;nt!==it;nt+=2)tt[nt]+=et}function Ll(tt,et){for(let nt=0,it=tt.length;nt!==it;nt+=2)tt[nt]*=et}Fn.prototype.ValueTypeName="";Fn.prototype.TimeBufferType=Float32Array;Fn.prototype.ValueBufferType=Float32Array;Fn.prototype.DefaultInterpolation=2301;class Bi extends Fn{constructor(tt,et,nt){super(tt,et,nt)}}Bi.prototype.ValueTypeName="bool";Bi.prototype.ValueBufferType=Array;Bi.prototype.DefaultInterpolation=2300;Bi.prototype.InterpolantFactoryMethodLinear=void 0;Bi.prototype.InterpolantFactoryMethodSmooth=void 0;class Fo extends Fn{constructor(tt,et,nt,it){super(tt,et,nt,it)}}Fo.prototype.ValueTypeName="color";class Oo extends Fn{constructor(tt,et,nt,it){super(tt,et,nt,it)}}Oo.prototype.ValueTypeName="number";class Bo extends Oi{constructor(tt,et,nt,it){super(tt,et,nt,it)}interpolate_(tt,et,nt,it){let st=this.resultBuffer,rt=this.sampleValues,at=this.valueSize,ot=(nt-et)/(it-et),lt=tt*at;for(let ct=lt+at;lt!==ct;lt+=4)oi.slerpFlat(st,0,rt,lt-at,rt,lt,ot);return st}}class Or extends Fn{constructor(tt,et,nt,it){super(tt,et,nt,it)}InterpolantFactoryMethodLinear(tt){return new Bo(this.times,this.values,this.getValueSize(),tt)}}Or.prototype.ValueTypeName="quaternion";Or.prototype.InterpolantFactoryMethodSmooth=void 0;class zi extends Fn{constructor(tt,et,nt){super(tt,et,nt)}}zi.prototype.ValueTypeName="string";zi.prototype.ValueBufferType=Array;zi.prototype.DefaultInterpolation=2300;zi.prototype.InterpolantFactoryMethodLinear=void 0;zi.prototype.InterpolantFactoryMethodSmooth=void 0;class zo extends Fn{constructor(tt,et,nt,it){super(tt,et,nt,it)}}zo.prototype.ValueTypeName="vector";class Go{constructor(tt,et,nt){let it=this,st=!1,rt=0,at=0,ot=void 0,lt=[];this.onStart=void 0,this.onLoad=tt,this.onProgress=et,this.onError=nt,this._abortController=null,this.itemStart=function(ct){if(at++,st===!1){if(it.onStart!==void 0)it.onStart(ct,rt,at)}st=!0},this.itemEnd=function(ct){if(rt++,it.onProgress!==void 0)it.onProgress(ct,rt,at);if(rt===at){if(st=!1,it.onLoad!==void 0)it.onLoad()}},this.itemError=function(ct){if(it.onError!==void 0)it.onError(ct)},this.resolveURL=function(ct){if(ct=ct.normalize("NFC"),ot)return ot(ct);return ct},this.setURLModifier=function(ct){return ot=ct,this},this.addHandler=function(ct,ut){return lt.push(ct,ut),this},this.removeHandler=function(ct){let ut=lt.indexOf(ct);if(ut!==-1)lt.splice(ut,2);return this},this.getHandler=function(ct){for(let ut=0,dt=lt.length;ut<dt;ut+=2){let ht=lt[ut],pt=lt[ut+1];if(ht.global)ht.lastIndex=0;if(ht.test(ct))return pt}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var Vc=new Go;class ko{constructor(tt){if(this.manager=tt!==void 0?tt:Vc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(tt,et){let nt=this;return new Promise(function(it,st){nt.load(tt,it,et,st)})}parse(){}setCrossOrigin(tt){return this.crossOrigin=tt,this}setWithCredentials(tt){return this.withCredentials=tt,this}setPath(tt){return this.path=tt,this}setResourcePath(tt){return this.resourcePath=tt,this}setRequestHeader(tt){return this.requestHeader=tt,this}setPriority(tt){return this.priority=tt,this}setCache(tt){return this.cache=tt,this}abort(){return this}}ko.DEFAULT_MATERIAL_NAME="__DEFAULT";class Us extends o{static registerNode(tt){this.prototype._lightNode=tt}constructor(tt,et=1){super();this.isLight=!0,this.type="Light",this.color=new n(tt),this.intensity=et}copy(tt,et){return super.copy(tt,et),this.color.copy(tt.color),this.intensity=tt.intensity,this}toJSON(tt){let et=super.toJSON(tt);return et.object.color=this.color.getHex(),et.object.intensity=this.intensity,et}}class K extends Us{constructor(tt,et,nt){super(tt,nt);this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(o.DEFAULT_UP),this.updateMatrix(),this.groundColor=new n(et)}copy(tt,et){return super.copy(tt,et),this.groundColor.copy(tt.groundColor),this}toJSON(tt){let et=super.toJSON(tt);return et.object.groundColor=this.groundColor.getHex(),et}}var ma=new an,Nl=new e,Dl=new e;class Br{constructor(tt){this.camera=tt,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new t(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new an,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ci,this._frameExtents=new t(1,1),this._viewportCount=1,this._viewports=[new un(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(tt){let et=this.camera;Nl.setFromMatrixPosition(tt.matrixWorld),et.position.copy(Nl),Dl.setFromMatrixPosition(tt.target.matrixWorld),et.lookAt(Dl),et.updateMatrixWorld(),this._updateMatrix(et,this.matrix,this._frustum)}_updateMatrix(tt,et,nt,it){ma.multiplyMatrices(tt.projectionMatrix,tt.matrixWorldInverse),nt.setFromProjectionMatrix(ma,tt.coordinateSystem,tt.reversedDepth);let st=this._frameExtents,rt=it?it.z/st.x:1,at=it?it.w/st.y:1,ot=it?it.x/st.x:0,lt=it?it.y/st.y:0;if(tt.coordinateSystem===2001||tt.reversedDepth)et.set(0.5*rt,0,0,0.5*rt+ot,0,0.5*at,0,0.5*at+lt,0,0,1,0,0,0,0,1);else et.set(0.5*rt,0,0,0.5*rt+ot,0,0.5*at,0,0.5*at+lt,0,0,0.5,0.5,0,0,0,1);et.multiply(ma)}getViewport(tt){return this._viewports[tt]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(tt){return this.camera=tt.camera.clone(),this.intensity=tt.intensity,this.bias=tt.bias,this.radius=tt.radius,this.autoUpdate=tt.autoUpdate,this.needsUpdate=tt.needsUpdate,this.normalBias=tt.normalBias,this.blurSamples=tt.blurSamples,this.mapSize.copy(tt.mapSize),this.mapType=tt.mapType,this.biasNode=tt.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let tt={};return tt.intensity=this.intensity,tt.bias=this.bias,tt.normalBias=this.normalBias,tt.radius=this.radius,tt.blurSamples=this.blurSamples,tt.mapSize=this.mapSize.toArray(),tt.mapType=this.mapType,tt.camera=this.camera.toJSON(!1).object,delete tt.camera.matrix,tt}}var hr=new e,ur=new oi,Hn=new e;class zr extends o{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new an,this.projectionMatrix=new an,this.projectionMatrixInverse=new an,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(tt,et){return super.copy(tt,et),this.matrixWorldInverse.copy(tt.matrixWorldInverse),this.projectionMatrix.copy(tt.projectionMatrix),this.projectionMatrixInverse.copy(tt.projectionMatrixInverse),this.coordinateSystem=tt.coordinateSystem,this}getWorldDirection(tt){return super.getWorldDirection(tt).negate()}updateMatrixWorld(tt){if(super.updateMatrixWorld(tt),this.matrixWorld.decompose(hr,ur,Hn),Hn.x===1&&Hn.y===1&&Hn.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(hr,ur,Hn.set(1,1,1)).invert()}updateWorldMatrix(tt,et,nt=!1){if(super.updateWorldMatrix(tt,et,nt),this.matrixWorld.decompose(hr,ur,Hn),Hn.x===1&&Hn.y===1&&Hn.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(hr,ur,Hn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var mi=new e,Ul=new t,Fl=new t;class p extends zr{constructor(tt=50,et=1,nt=0.1,it=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=tt,this.zoom=1,this.near=nt,this.far=it,this.focus=10,this.aspect=et,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(tt,et){return super.copy(tt,et),this.fov=tt.fov,this.zoom=tt.zoom,this.near=tt.near,this.far=tt.far,this.focus=tt.focus,this.aspect=tt.aspect,this.view=tt.view===null?null:Object.assign({},tt.view),this.filmGauge=tt.filmGauge,this.filmOffset=tt.filmOffset,this}setFocalLength(tt){let et=0.5*this.getFilmHeight()/tt;this.fov=ns*2*Math.atan(et),this.updateProjectionMatrix()}getFocalLength(){let tt=Math.tan(vs*0.5*this.fov);return 0.5*this.getFilmHeight()/tt}getEffectiveFOV(){return ns*2*Math.atan(Math.tan(vs*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(tt,et,nt){mi.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),et.set(mi.x,mi.y).multiplyScalar(-tt/mi.z),mi.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),nt.set(mi.x,mi.y).multiplyScalar(-tt/mi.z)}getViewSize(tt,et){return this.getViewBounds(tt,Ul,Fl),et.subVectors(Fl,Ul)}setViewOffset(tt,et,nt,it,st,rt){if(this.aspect=tt/et,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=tt,this.view.fullHeight=et,this.view.offsetX=nt,this.view.offsetY=it,this.view.width=st,this.view.height=rt,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let tt=this.near,et=tt*Math.tan(vs*0.5*this.fov)/this.zoom,nt=2*et,it=this.aspect*nt,st=-0.5*it,rt=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:ot,fullHeight:lt}=rt;st+=rt.offsetX*it/ot,et-=rt.offsetY*nt/lt,it*=rt.width/ot,nt*=rt.height/lt}let at=this.filmOffset;if(at!==0)st+=tt*at/this.getFilmWidth();this.projectionMatrix.makePerspective(st,st+it,et,et-nt,tt,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(tt){let et=super.toJSON(tt);if(et.object.fov=this.fov,et.object.zoom=this.zoom,et.object.near=this.near,et.object.far=this.far,et.object.focus=this.focus,et.object.aspect=this.aspect,this.view!==null)et.object.view=Object.assign({},this.view);return et.object.filmGauge=this.filmGauge,et.object.filmOffset=this.filmOffset,et}}class Xc extends Br{constructor(){super(new p(90,1,0.5,500));this.isPointLightShadow=!0}}class Q extends Us{constructor(tt,et,nt=0,it=2){super(tt,et);this.isPointLight=!0,this.type="PointLight",this.distance=nt,this.decay=it,this.shadow=new Xc}get power(){return this.intensity*4*Math.PI}set power(tt){this.intensity=tt/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(tt,et){return super.copy(tt,et),this.distance=tt.distance,this.decay=tt.decay,this.shadow=tt.shadow.clone(),this}toJSON(tt){let et=super.toJSON(tt);return et.object.distance=this.distance,et.object.decay=this.decay,et.object.shadow=this.shadow.toJSON(),et}}class R extends zr{constructor(tt=-1,et=1,nt=1,it=-1,st=0.1,rt=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=tt,this.right=et,this.top=nt,this.bottom=it,this.near=st,this.far=rt,this.updateProjectionMatrix()}copy(tt,et){return super.copy(tt,et),this.left=tt.left,this.right=tt.right,this.top=tt.top,this.bottom=tt.bottom,this.near=tt.near,this.far=tt.far,this.zoom=tt.zoom,this.view=tt.view===null?null:Object.assign({},tt.view),this}setViewOffset(tt,et,nt,it,st,rt){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=tt,this.view.fullHeight=et,this.view.offsetX=nt,this.view.offsetY=it,this.view.width=st,this.view.height=rt,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let tt=(this.right-this.left)/(2*this.zoom),et=(this.top-this.bottom)/(2*this.zoom),nt=(this.right+this.left)/2,it=(this.top+this.bottom)/2,st=nt-tt,rt=nt+tt,at=it+et,ot=it-et;if(this.view!==null&&this.view.enabled){let lt=(this.right-this.left)/this.view.fullWidth/this.zoom,ct=(this.top-this.bottom)/this.view.fullHeight/this.zoom;st+=lt*this.view.offsetX,rt=st+lt*this.view.width,at-=ct*this.view.offsetY,ot=at-ct*this.view.height}this.projectionMatrix.makeOrthographic(st,rt,at,ot,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(tt){let et=super.toJSON(tt);if(et.object.zoom=this.zoom,et.object.left=this.left,et.object.right=this.right,et.object.top=this.top,et.object.bottom=this.bottom,et.object.near=this.near,et.object.far=this.far,this.view!==null)et.object.view=Object.assign({},this.view);return et}}class qc extends Br{constructor(){super(new R(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class X extends Us{constructor(tt,et){super(tt,et);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(o.DEFAULT_UP),this.updateMatrix(),this.target=new o,this.shadow=new qc}dispose(){super.dispose(),this.shadow.dispose()}copy(tt){return super.copy(tt),this.target=tt.target.clone(),this.shadow=tt.shadow.clone(),this}toJSON(tt){let et=super.toJSON(tt);return et.object.shadow=this.shadow.toJSON(),et.object.target=this.target.uuid,et}}var Qi=-90,ji=1;class Fs extends o{constructor(tt,et,nt){super();this.type="CubeCamera",this.renderTarget=nt,this.coordinateSystem=null,this.activeMipmapLevel=0;let it=new p(Qi,ji,tt,et);it.layers=this.layers,this.add(it);let st=new p(Qi,ji,tt,et);st.layers=this.layers,this.add(st);let rt=new p(Qi,ji,tt,et);rt.layers=this.layers,this.add(rt);let at=new p(Qi,ji,tt,et);at.layers=this.layers,this.add(at);let ot=new p(Qi,ji,tt,et);ot.layers=this.layers,this.add(ot);let lt=new p(Qi,ji,tt,et);lt.layers=this.layers,this.add(lt)}updateCoordinateSystem(){let tt=this.coordinateSystem,et=this.children.concat(),[nt,it,st,rt,at,ot]=et;for(let lt of et)this.remove(lt);if(tt===2000)nt.up.set(0,1,0),nt.lookAt(1,0,0),it.up.set(0,1,0),it.lookAt(-1,0,0),st.up.set(0,0,-1),st.lookAt(0,1,0),rt.up.set(0,0,1),rt.lookAt(0,-1,0),at.up.set(0,1,0),at.lookAt(0,0,1),ot.up.set(0,1,0),ot.lookAt(0,0,-1);else if(tt===2001)nt.up.set(0,-1,0),nt.lookAt(-1,0,0),it.up.set(0,-1,0),it.lookAt(1,0,0),st.up.set(0,0,1),st.lookAt(0,1,0),rt.up.set(0,0,-1),rt.lookAt(0,-1,0),at.up.set(0,-1,0),at.lookAt(0,0,1),ot.up.set(0,-1,0),ot.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+tt);for(let lt of et)this.add(lt),lt.updateMatrixWorld()}update(tt,et){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:nt,activeMipmapLevel:it}=this;if(this.coordinateSystem!==tt.coordinateSystem)this.coordinateSystem=tt.coordinateSystem,this.updateCoordinateSystem();let[st,rt,at,ot,lt,ct]=this.children,ut=tt.getRenderTarget(),dt=tt.getActiveCubeFace(),ht=tt.getActiveMipmapLevel(),pt=tt.xr.enabled;tt.xr.enabled=!1;let xt=nt.texture.mipmapsAutoUpdate;nt.texture.mipmapsAutoUpdate=!1;let Mt=!1;if(tt.isWebGLRenderer===!0)Mt=tt.state.buffers.depth.getReversed();else Mt=tt.reversedDepthBuffer;if(tt.setRenderTarget(nt,0,it),Mt&&tt.autoClear===!1)tt.clearDepth();if(tt.render(et,st),tt.setRenderTarget(nt,1,it),Mt&&tt.autoClear===!1)tt.clearDepth();if(tt.render(et,rt),tt.setRenderTarget(nt,2,it),Mt&&tt.autoClear===!1)tt.clearDepth();if(tt.render(et,at),tt.setRenderTarget(nt,3,it),Mt&&tt.autoClear===!1)tt.clearDepth();if(tt.render(et,ot),tt.setRenderTarget(nt,4,it),Mt&&tt.autoClear===!1)tt.clearDepth();if(tt.render(et,lt),nt.texture.mipmapsAutoUpdate=xt,tt.setRenderTarget(nt,5,it),Mt&&tt.autoClear===!1)tt.clearDepth();tt.render(et,ct),tt.setRenderTarget(ut,dt,ht),tt.xr.enabled=pt,nt.texture.needsPMREMUpdate=!0}}class Ho extends p{constructor(tt=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=tt,this.perCameraFrustumCulled=!1}}class j{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(tt){if(this._document=tt,tt.hidden!==void 0)this._pageVisibilityHandler=Qu.bind(this),tt.addEventListener("visibilitychange",this._pageVisibilityHandler,!1)}disconnect(){if(this._pageVisibilityHandler!==null)this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null;this._document=null}getDelta(){return this._delta/1000}getElapsed(){return this._elapsed/1000}getTimescale(){return this._timescale}setTimescale(tt){return this._timescale=tt,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(tt){if(this._pageVisibilityHandler!==null&&this._document.hidden===!0)this._delta=0;else this._previousTime=this._currentTime,this._currentTime=(tt!==void 0?tt:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta;return this}}function Qu(){if(this._document.hidden===!1)this.reset()}var Wo="\\[\\]\\.:\\/",ju=new RegExp("["+Wo+"]","g"),Vo="[^"+Wo+"]",td="[^"+Wo.replace("\\.","")+"]",ed=/((?:WC+[\/:])*)/.source.replace("WC",Vo),nd=/(WCOD+)?/.source.replace("WCOD",td),id=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Vo),sd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Vo),rd=new RegExp("^"+ed+nd+id+sd+"$"),ad=["material","materials","bones","map"];class Yc{constructor(tt,et,nt){let it=nt||sn.parseTrackName(et);this._targetGroup=tt,this._bindings=tt.subscribe_(et,it)}getValue(tt,et){this.bind();let nt=this._targetGroup.nCachedObjects_,it=this._bindings[nt];if(it!==void 0)it.getValue(tt,et)}setValue(tt,et){let nt=this._bindings;for(let it=this._targetGroup.nCachedObjects_,st=nt.length;it!==st;++it)nt[it].setValue(tt,et)}bind(){let tt=this._bindings;for(let et=this._targetGroup.nCachedObjects_,nt=tt.length;et!==nt;++et)tt[et].bind()}unbind(){let tt=this._bindings;for(let et=this._targetGroup.nCachedObjects_,nt=tt.length;et!==nt;++et)tt[et].unbind()}}class sn{constructor(tt,et,nt){this.path=et,this.parsedPath=nt||sn.parseTrackName(et),this.node=sn.findNode(tt,this.parsedPath.nodeName),this.rootNode=tt,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(tt,et,nt){if(!(tt&&tt.isAnimationObjectGroup))return new sn(tt,et,nt);else return new sn.Composite(tt,et,nt)}static sanitizeNodeName(tt){return tt.replace(/\s/g,"_").replace(ju,"")}static parseTrackName(tt){let et=rd.exec(tt);if(et===null)throw Error("THREE.PropertyBinding: Cannot parse trackName: "+tt);let nt={nodeName:et[2],objectName:et[3],objectIndex:et[4],propertyName:et[5],propertyIndex:et[6]},it=nt.nodeName&&nt.nodeName.lastIndexOf(".");if(it!==void 0&&it!==-1){let st=nt.nodeName.substring(it+1);if(ad.indexOf(st)!==-1)nt.nodeName=nt.nodeName.substring(0,it),nt.objectName=st}if(nt.propertyName===null||nt.propertyName.length===0)throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+tt);return nt}static findNode(tt,et){if(et===void 0||et===""||et==="."||et===-1||et===tt.name||et===tt.uuid)return tt;if(tt.skeleton){let nt=tt.skeleton.getBoneByName(et);if(nt!==void 0)return nt}if(tt.children){let nt=function(st){for(let rt=0;rt<st.length;rt++){let at=st[rt];if(at.name===et||at.uuid===et)return at;let ot=nt(at.children);if(ot)return ot}return null},it=nt(tt.children);if(it)return it}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(tt,et){tt[et]=this.targetObject[this.propertyName]}_getValue_array(tt,et){let nt=this.resolvedProperty;for(let it=0,st=nt.length;it!==st;++it)tt[et++]=nt[it]}_getValue_arrayElement(tt,et){tt[et]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(tt,et){this.resolvedProperty.toArray(tt,et)}_setValue_direct(tt,et){this.targetObject[this.propertyName]=tt[et]}_setValue_direct_setNeedsUpdate(tt,et){this.targetObject[this.propertyName]=tt[et],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(tt,et){this.targetObject[this.propertyName]=tt[et],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(tt,et){let nt=this.resolvedProperty;for(let it=0,st=nt.length;it!==st;++it)nt[it]=tt[et++]}_setValue_array_setNeedsUpdate(tt,et){let nt=this.resolvedProperty;for(let it=0,st=nt.length;it!==st;++it)nt[it]=tt[et++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(tt,et){let nt=this.resolvedProperty;for(let it=0,st=nt.length;it!==st;++it)nt[it]=tt[et++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(tt,et){this.resolvedProperty[this.propertyIndex]=tt[et]}_setValue_arrayElement_setNeedsUpdate(tt,et){this.resolvedProperty[this.propertyIndex]=tt[et],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(tt,et){this.resolvedProperty[this.propertyIndex]=tt[et],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(tt,et){this.resolvedProperty.fromArray(tt,et)}_setValue_fromArray_setNeedsUpdate(tt,et){this.resolvedProperty.fromArray(tt,et),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(tt,et){this.resolvedProperty.fromArray(tt,et),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(tt,et){this.bind(),this.getValue(tt,et)}_setValue_unbound(tt,et){this.bind(),this.setValue(tt,et)}bind(){let tt=this.node,et=this.parsedPath,{objectName:nt,propertyName:it,propertyIndex:st}=et;if(!tt)tt=sn.findNode(this.rootNode,et.nodeName),this.node=tt;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!tt){Oe("PropertyBinding: No target node found for track: "+this.path+".");return}if(nt){let lt=et.objectIndex;switch(nt){case"materials":if(!tt.material){Be("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!tt.material.materials){Be("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}tt=tt.material.materials;break;case"bones":if(!tt.skeleton){Be("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}tt=tt.skeleton.bones;for(let ct=0;ct<tt.length;ct++)if(tt[ct].name===lt){lt=ct;break}break;case"map":if("map"in tt){tt=tt.map;break}if(!tt.material){Be("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!tt.material.map){Be("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}tt=tt.material.map;break;default:if(tt[nt]===void 0){Be("PropertyBinding: Can not bind to objectName of node undefined.",this);return}tt=tt[nt]}if(lt!==void 0){if(tt[lt]===void 0){Be("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,tt);return}tt=tt[lt]}}let rt=tt[it];if(rt===void 0){let lt=et.nodeName;Be("PropertyBinding: Trying to update property for track: "+lt+"."+it+" but it wasn't found.",tt);return}let at=this.Versioning.None;if(this.targetObject=tt,tt.isMaterial===!0)at=this.Versioning.NeedsUpdate;else if(tt.isObject3D===!0)at=this.Versioning.MatrixWorldNeedsUpdate;let ot=this.BindingType.Direct;if(st!==void 0){if(it==="morphTargetInfluences"){if(!tt.geometry){Be("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!tt.geometry.morphAttributes){Be("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(tt.morphTargetDictionary[st]!==void 0)st=tt.morphTargetDictionary[st]}ot=this.BindingType.ArrayElement,this.resolvedProperty=rt,this.propertyIndex=st}else if(rt.fromArray!==void 0&&rt.toArray!==void 0)ot=this.BindingType.HasFromToArray,this.resolvedProperty=rt;else if(Array.isArray(rt))ot=this.BindingType.EntireArray,this.resolvedProperty=rt;else this.propertyName=it;this.getValue=this.GetterByBindingType[ot],this.setValue=this.SetterByBindingTypeAndVersioning[ot][at]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}sn.Composite=Yc;sn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};sn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};sn.prototype.GetterByBindingType=[sn.prototype._getValue_direct,sn.prototype._getValue_array,sn.prototype._getValue_arrayElement,sn.prototype._getValue_toArray];sn.prototype.SetterByBindingTypeAndVersioning=[[sn.prototype._setValue_direct,sn.prototype._setValue_direct_setNeedsUpdate,sn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[sn.prototype._setValue_array,sn.prototype._setValue_array_setNeedsUpdate,sn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[sn.prototype._setValue_arrayElement,sn.prototype._setValue_arrayElement_setNeedsUpdate,sn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[sn.prototype._setValue_fromArray,sn.prototype._setValue_fromArray_setNeedsUpdate,sn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Zg=new Float32Array(1);class Zc{static{this.prototype.isMatrix2=!0}constructor(tt,et,nt,it){if(this.elements=[1,0,0,1],tt!==void 0)this.set(tt,et,nt,it)}identity(){return this.set(1,0,0,1),this}fromArray(tt,et=0){for(let nt=0;nt<4;nt++)this.elements[nt]=tt[nt+et];return this}set(tt,et,nt,it){let st=this.elements;return st[0]=tt,st[2]=et,st[1]=nt,st[3]=it,this}}function Xo(tt,et,nt,it){let st=od(it);switch(nt){case 1021:return tt*et;case 1028:return tt*et/st.components*st.byteLength;case 1029:return tt*et/st.components*st.byteLength;case 1030:return tt*et*2/st.components*st.byteLength;case 1031:return tt*et*2/st.components*st.byteLength;case 1022:return tt*et*3/st.components*st.byteLength;case 1023:return tt*et*4/st.components*st.byteLength;case 1033:return tt*et*4/st.components*st.byteLength;case 33776:case 33777:return Math.floor((tt+3)/4)*Math.floor((et+3)/4)*8;case 33778:case 33779:return Math.floor((tt+3)/4)*Math.floor((et+3)/4)*16;case 35841:case 35843:return Math.max(tt,16)*Math.max(et,8)/4;case 35840:case 35842:return Math.max(tt,8)*Math.max(et,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((tt+3)/4)*Math.floor((et+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((tt+3)/4)*Math.floor((et+3)/4)*16;case 37808:return Math.floor((tt+3)/4)*Math.floor((et+3)/4)*16;case 37809:return Math.floor((tt+4)/5)*Math.floor((et+3)/4)*16;case 37810:return Math.floor((tt+4)/5)*Math.floor((et+4)/5)*16;case 37811:return Math.floor((tt+5)/6)*Math.floor((et+4)/5)*16;case 37812:return Math.floor((tt+5)/6)*Math.floor((et+5)/6)*16;case 37813:return Math.floor((tt+7)/8)*Math.floor((et+4)/5)*16;case 37814:return Math.floor((tt+7)/8)*Math.floor((et+5)/6)*16;case 37815:return Math.floor((tt+7)/8)*Math.floor((et+7)/8)*16;case 37816:return Math.floor((tt+9)/10)*Math.floor((et+4)/5)*16;case 37817:return Math.floor((tt+9)/10)*Math.floor((et+5)/6)*16;case 37818:return Math.floor((tt+9)/10)*Math.floor((et+7)/8)*16;case 37819:return Math.floor((tt+9)/10)*Math.floor((et+9)/10)*16;case 37820:return Math.floor((tt+11)/12)*Math.floor((et+9)/10)*16;case 37821:return Math.floor((tt+11)/12)*Math.floor((et+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(tt/4)*Math.ceil(et/4)*16;case 36283:case 36284:return Math.ceil(tt/4)*Math.ceil(et/4)*8;case 36285:case 36286:return Math.ceil(tt/4)*Math.ceil(et/4)*16}throw Error(`Unable to determine texture byte length for ${nt} format.`)}function od(tt){switch(tt){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${tt}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));if(typeof window<"u")if(window.__THREE__)Oe("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="187";function gh(){let tt=null,et=!1,nt=null,it=null;function st(rt,at){it=tt.requestAnimationFrame(st),nt(rt,at)}return{start:function(){if(et===!0)return;if(nt===null)return;if(tt===null)return;it=tt.requestAnimationFrame(st),et=!0},stop:function(){if(tt!==null)tt.cancelAnimationFrame(it);et=!1},setAnimationLoop:function(rt){nt=rt},setContext:function(rt){tt=rt}}}function ld(tt){let et=new WeakMap;function nt(ot,lt){let{array:ct,usage:ut}=ot,dt=ct.byteLength,ht=tt.createBuffer();tt.bindBuffer(lt,ht),tt.bufferData(lt,ct,ut),ot.onUploadCallback();let pt;if(ct instanceof Float32Array)pt=tt.FLOAT;else if(typeof Float16Array<"u"&&ct instanceof Float16Array)pt=tt.HALF_FLOAT;else if(ct instanceof Uint16Array)if(ot.isFloat16BufferAttribute)pt=tt.HALF_FLOAT;else pt=tt.UNSIGNED_SHORT;else if(ct instanceof Int16Array)pt=tt.SHORT;else if(ct instanceof Uint32Array)pt=tt.UNSIGNED_INT;else if(ct instanceof Int32Array)pt=tt.INT;else if(ct instanceof Int8Array)pt=tt.BYTE;else if(ct instanceof Uint8Array)pt=tt.UNSIGNED_BYTE;else if(ct instanceof Uint8ClampedArray)pt=tt.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+ct);return{buffer:ht,type:pt,bytesPerElement:ct.BYTES_PER_ELEMENT,version:ot.version,size:dt}}function it(ot,lt,ct){let{array:ut,updateRanges:dt}=lt;if(tt.bindBuffer(ct,ot),dt.length===0)tt.bufferSubData(ct,0,ut);else{dt.sort((pt,xt)=>pt.start-xt.start);let ht=0;for(let pt=1;pt<dt.length;pt++){let xt=dt[ht],Mt=dt[pt];if(Mt.start<=xt.start+xt.count+1)xt.count=Math.max(xt.count,Mt.start+Mt.count-xt.start);else++ht,dt[ht]=Mt}dt.length=ht+1;for(let pt=0,xt=dt.length;pt<xt;pt++){let Mt=dt[pt];tt.bufferSubData(ct,Mt.start*ut.BYTES_PER_ELEMENT,ut,Mt.start,Mt.count)}lt.clearUpdateRanges()}lt.onUploadCallback()}function st(ot){if(ot.isInterleavedBufferAttribute)ot=ot.data;return et.get(ot)}function rt(ot){if(ot.isInterleavedBufferAttribute)ot=ot.data;let lt=et.get(ot);if(lt)tt.deleteBuffer(lt.buffer),et.delete(ot)}function at(ot,lt){if(ot.isInterleavedBufferAttribute)ot=ot.data;if(ot.isGLBufferAttribute){let ut=et.get(ot);if(!ut||ut.version<ot.version)et.set(ot,{buffer:ot.buffer,type:ot.type,bytesPerElement:ot.elementSize,version:ot.version});return}let ct=et.get(ot);if(ct===void 0)et.set(ot,nt(ot,lt));else if(ct.version<ot.version){if(ct.size!==ot.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");it(ct.buffer,ot,lt),ct.version=ot.version}}return{get:st,remove:rt,update:at}}var cd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hd=`#ifdef USE_ALPHAHASH
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
#endif`,ud=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,md=`#ifdef USE_AOMAP
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
#endif`,gd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_d=`#ifdef USE_BATCHING
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
#endif`,xd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Sd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Md=`#ifdef USE_IRIDESCENCE
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
#endif`,bd=`#ifdef USE_BUMPMAP
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
#endif`,Td=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ed=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ad=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Rd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Cd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Id=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Pd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Ld=`#define PI 3.141592653589793
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
} // validated`,Nd=`vec3 transformedNormal = objectNormal;
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
#endif`,Dd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ud=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Od=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bd="gl_FragColor = linearToOutputTexel( gl_FragColor );",zd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gd=`#ifdef USE_ENVMAP
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
#endif`,kd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Hd=`#ifdef USE_ENVMAP
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
#endif`,Wd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vd=`#ifdef USE_ENVMAP
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
#endif`,Xd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Yd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jd=`#ifdef USE_GRADIENTMAP
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
}`,$d=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Kd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Qd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jd=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,tf=`#ifdef USE_ENVMAP
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
#endif`,ef=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,af=`PhysicalMaterial material;
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
#endif`,of=`uniform sampler2D dfgLUT;
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
}`,lf=`
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
#endif`,cf=`#if defined( RE_IndirectDiffuse )
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
#endif`,hf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,uf=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,df=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ff=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_f=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,vf=`#if defined( USE_POINTS_UV )
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
#endif`,yf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Mf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bf=`#if defined( USE_MORPHCOLORS )
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
#endif`,Tf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ef=`#ifdef USE_MORPHTARGETS
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
#endif`,Af=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Rf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Cf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,If=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Lf=`#ifdef USE_NORMALMAP
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
#endif`,Nf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Df=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Uf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ff=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Of=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,zf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Wf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Yf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Zf=`float getShadowMask() {
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
}`,Jf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$f=`#ifdef USE_SKINNING
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
#endif`,Kf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qf=`#ifdef USE_SKINNING
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
#endif`,jf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ep=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,np=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ip=`#ifdef USE_TRANSMISSION
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
#endif`,sp=`#ifdef USE_TRANSMISSION
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
#endif`,rp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ap=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,op=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`;var lp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,cp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hp=`uniform sampler2D t2D;
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
}`,up=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dp=`uniform float backgroundBlurriness;
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
}`,fp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mp=`#include <common>
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
}`,gp=`#if DEPTH_PACKING == 3200
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
}`,_p=`#define DISTANCE
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
}`,xp=`#define DISTANCE
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
}`,vp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sp=`uniform float scale;
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
}`,Mp=`uniform vec3 diffuse;
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
}`,bp=`#include <common>
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
}`,Tp=`uniform vec3 diffuse;
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
}`,Ep=`#define LAMBERT
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
}`,Ap=`#define LAMBERT
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
}`,wp=`#define MATCAP
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
}`,Rp=`#define MATCAP
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
}`,Cp=`#define NORMAL
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
}`,Ip=`#define NORMAL
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
}`,Pp=`#define PHONG
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
}`,Lp=`#define PHONG
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
}`,Np=`#define STANDARD
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
}`,Dp=`#define STANDARD
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
}`,Up=`#define TOON
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
}`,Fp=`#define TOON
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
}`,Op=`uniform float size;
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
}`,Bp=`uniform vec3 diffuse;
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
}`,zp=`#include <common>
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
}`,Gp=`uniform vec3 color;
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
}`,kp=`uniform float rotation;
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
}`,Hp=`uniform vec3 diffuse;
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
}`,Xe={alphahash_fragment:cd,alphahash_pars_fragment:hd,alphamap_fragment:ud,alphamap_pars_fragment:dd,alphatest_fragment:fd,alphatest_pars_fragment:pd,aomap_fragment:md,aomap_pars_fragment:gd,batching_pars_vertex:_d,batching_vertex:xd,begin_vertex:vd,beginnormal_vertex:yd,bsdfs:Sd,iridescence_fragment:Md,bumpmap_pars_fragment:bd,clipping_planes_fragment:Td,clipping_planes_pars_fragment:Ed,clipping_planes_pars_vertex:Ad,clipping_planes_vertex:wd,color_fragment:Rd,color_pars_fragment:Cd,color_pars_vertex:Id,color_vertex:Pd,common:Ld,defaultnormal_vertex:Nd,displacementmap_pars_vertex:Dd,displacementmap_vertex:Ud,emissivemap_fragment:Fd,emissivemap_pars_fragment:Od,colorspace_fragment:Bd,colorspace_pars_fragment:zd,envmap_fragment:Gd,envmap_common_pars_fragment:kd,envmap_pars_fragment:Hd,envmap_pars_vertex:Wd,envmap_physical_pars_fragment:tf,envmap_vertex:Vd,fog_vertex:Xd,fog_pars_vertex:qd,fog_fragment:Yd,fog_pars_fragment:Zd,gradientmap_pars_fragment:Jd,lightmap_pars_fragment:$d,lights_lambert_fragment:Kd,lights_lambert_pars_fragment:Qd,lights_pars_begin:jd,lights_toon_fragment:ef,lights_toon_pars_fragment:nf,lights_phong_fragment:sf,lights_phong_pars_fragment:rf,lights_physical_fragment:af,lights_physical_pars_fragment:of,lights_fragment_begin:lf,lights_fragment_maps:cf,lights_fragment_end:hf,lightprobes_pars_fragment:uf,logdepthbuf_fragment:df,logdepthbuf_pars_fragment:ff,logdepthbuf_pars_vertex:pf,logdepthbuf_vertex:mf,map_fragment:gf,map_pars_fragment:_f,map_particle_fragment:xf,map_particle_pars_fragment:vf,metalnessmap_fragment:yf,metalnessmap_pars_fragment:Sf,morphinstance_vertex:Mf,morphcolor_vertex:bf,morphnormal_vertex:Tf,morphtarget_pars_vertex:Ef,morphtarget_vertex:Af,normal_fragment_begin:wf,normal_fragment_maps:Rf,normal_pars_fragment:Cf,normal_pars_vertex:If,normal_vertex:Pf,normalmap_pars_fragment:Lf,clearcoat_normal_fragment_begin:Nf,clearcoat_normal_fragment_maps:Df,clearcoat_pars_fragment:Uf,iridescence_pars_fragment:Ff,opaque_fragment:Of,packing:Bf,premultiplied_alpha_fragment:zf,project_vertex:Gf,dithering_fragment:kf,dithering_pars_fragment:Hf,roughnessmap_fragment:Wf,roughnessmap_pars_fragment:Vf,shadowmap_pars_fragment:Xf,shadowmap_pars_vertex:qf,shadowmap_vertex:Yf,shadowmask_pars_fragment:Zf,skinbase_vertex:Jf,skinning_pars_vertex:$f,skinning_vertex:Kf,skinnormal_vertex:Qf,specularmap_fragment:jf,specularmap_pars_fragment:tp,tonemapping_fragment:ep,tonemapping_pars_fragment:np,transmission_fragment:ip,transmission_pars_fragment:sp,uv_pars_fragment:rp,uv_pars_vertex:ap,uv_vertex:op,worldpos_vertex:lp,background_vert:cp,background_frag:hp,backgroundCube_vert:up,backgroundCube_frag:dp,cube_vert:fp,cube_frag:pp,depth_vert:mp,depth_frag:gp,distance_vert:_p,distance_frag:xp,equirect_vert:vp,equirect_frag:yp,linedashed_vert:Sp,linedashed_frag:Mp,meshbasic_vert:bp,meshbasic_frag:Tp,meshlambert_vert:Ep,meshlambert_frag:Ap,meshmatcap_vert:wp,meshmatcap_frag:Rp,meshnormal_vert:Cp,meshnormal_frag:Ip,meshphong_vert:Pp,meshphong_frag:Lp,meshphysical_vert:Np,meshphysical_frag:Dp,meshtoon_vert:Up,meshtoon_frag:Fp,points_vert:Op,points_frag:Bp,shadow_vert:zp,shadow_frag:Gp,sprite_vert:kp,sprite_frag:Hp},me={common:{diffuse:{value:new n(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new n(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new n(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new n(16777215)},opacity:{value:1},center:{value:new t(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},Jn={basic:{uniforms:Rn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:Rn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new n(0)},envMapIntensity:{value:1}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:Rn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new n(0)},specular:{value:new n(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:Rn([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new n(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:Rn([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new n(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:Rn([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:Rn([me.points,me.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:Rn([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:Rn([me.common,me.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:Rn([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:Rn([me.sprite,me.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distance:{uniforms:Rn([me.common,me.displacementmap,{referencePosition:{value:new e},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:Xe.distance_vert,fragmentShader:Xe.distance_frag},shadow:{uniforms:Rn([me.lights,me.fog,{color:{value:new n(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};Jn.physical={uniforms:Rn([Jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ge},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new n(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new n(0)},specularColor:{value:new n(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};var Gr={r:0,b:0,g:0},Wp=new an,_h=new Ge;_h.set(-1,0,0,0,1,0,0,0,1);function Vp(tt,et,nt,it,st,rt){let at=new n(0),ot=st===!0?0:1,lt,ct,ut=null,dt=0,ht=null;function pt(Et){let Tt=Et.isScene===!0?Et.background:null;if(Tt&&Tt.isTexture){let yt=Et.backgroundBlurriness>0;Tt=et.get(Tt,yt)}return Tt}function xt(Et){let Tt=!1,yt=pt(Et);if(yt===null)ft(at,ot);else if(yt&&yt.isColor)ft(yt,1),Tt=!0;let At=tt.xr.getEnvironmentBlendMode();if(At==="additive")nt.buffers.color.setClear(0,0,0,1,rt);else if(At==="alpha-blend")nt.buffers.color.setClear(0,0,0,0,rt);if(tt.autoClear||Tt)nt.buffers.depth.setTest(!0),nt.buffers.depth.setMask(!0),nt.buffers.color.setMask(!0),tt.clear(tt.autoClearColor,tt.autoClearDepth,tt.autoClearStencil)}function Mt(Et,Tt){let yt=pt(Tt);if(yt&&yt.isCubeTexture){if(ct===void 0)ct=new a(new l(1,1,1),new h({name:"BackgroundCubeMaterial",uniforms:Fi(Jn.backgroundCube.uniforms),vertexShader:Jn.backgroundCube.vertexShader,fragmentShader:Jn.backgroundCube.fragmentShader,side:u,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),ct.geometry.deleteAttribute("normal"),ct.geometry.deleteAttribute("uv"),ct.onBeforeRender=function(At,Rt,gt){this.matrixWorld.copyPosition(gt.matrixWorld)},Object.defineProperty(ct.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),it.update(ct);if(ct.material.uniforms.envMap.value=yt,ct.material.uniforms.backgroundBlurriness.value=Tt.backgroundBlurriness,ct.material.uniforms.backgroundIntensity.value=Tt.backgroundIntensity,ct.material.uniforms.backgroundRotation.value.setFromMatrix4(Wp.makeRotationFromEuler(Tt.backgroundRotation)).transpose(),yt.isRenderTargetTexture===!1)ct.material.uniforms.backgroundRotation.value.premultiply(_h);if(ct.material.toneMapped=i.getTransfer(yt.colorSpace)!==s,ut!==yt||dt!==yt.version||ht!==tt.toneMapping)ct.material.needsUpdate=!0,ut=yt,dt=yt.version,ht=tt.toneMapping;ct.layers.enableAll(),Et.unshift(ct,ct.geometry,ct.material,0,0,null)}else if(yt&&yt.isTexture){if(lt===void 0)lt=new a(new w(2,2),new h({name:"BackgroundMaterial",uniforms:Fi(Jn.background.uniforms),vertexShader:Jn.background.vertexShader,fragmentShader:Jn.background.fragmentShader,side:rs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),lt.geometry.deleteAttribute("normal"),Object.defineProperty(lt.material,"map",{get:function(){return this.uniforms.t2D.value}}),it.update(lt);if(lt.material.uniforms.t2D.value=yt,lt.material.uniforms.backgroundIntensity.value=Tt.backgroundIntensity,lt.material.toneMapped=i.getTransfer(yt.colorSpace)!==s,yt.matrixAutoUpdate===!0)yt.updateMatrix();if(lt.material.uniforms.uvTransform.value.copy(yt.matrix),ut!==yt||dt!==yt.version||ht!==tt.toneMapping)lt.material.needsUpdate=!0,ut=yt,dt=yt.version,ht=tt.toneMapping;lt.layers.enableAll(),Et.unshift(lt,lt.geometry,lt.material,0,0,null)}}function ft(Et,Tt){Et.getRGB(Gr,Co(tt)),nt.buffers.color.setClear(Gr.r,Gr.g,Gr.b,Tt,rt)}function mt(){if(ct!==void 0)ct.geometry.dispose(),ct.material.dispose(),ct=void 0;if(lt!==void 0)lt.geometry.dispose(),lt.material.dispose(),lt=void 0}return{getClearColor:function(){return at},setClearColor:function(Et,Tt=1){at.set(Et),ot=Tt,ft(at,ot)},getClearAlpha:function(){return ot},setClearAlpha:function(Et){ot=Et,ft(at,ot)},render:xt,addToRenderList:Mt,dispose:mt}}function Xp(tt,et){let nt=tt.getParameter(tt.MAX_VERTEX_ATTRIBS),it={},st=ht(null),rt=st,at=!1;function ot(Lt,zt,$t,wt,Vt){let Xt=!1,Ft=dt(Lt,wt,$t,zt);if(rt!==Ft)rt=Ft,ct(rt.object);if(Xt=pt(Lt,wt,$t,Vt),Xt)xt(Lt,wt,$t,Vt);if(Vt!==null)et.update(Vt,tt.ELEMENT_ARRAY_BUFFER);if(Xt||at){if(at=!1,yt(Lt,zt,$t,wt),Vt!==null)tt.bindBuffer(tt.ELEMENT_ARRAY_BUFFER,et.get(Vt).buffer)}}function lt(){return tt.createVertexArray()}function ct(Lt){return tt.bindVertexArray(Lt)}function ut(Lt){return tt.deleteVertexArray(Lt)}function dt(Lt,zt,$t,wt){let Vt=wt.wireframe===!0,Xt=it[zt.id];if(Xt===void 0)Xt={},it[zt.id]=Xt;let Ft=Lt.isInstancedMesh===!0?Lt.id:0,se=Xt[Ft];if(se===void 0)se={},Xt[Ft]=se;let Ht=se[$t.id];if(Ht===void 0)Ht={},se[$t.id]=Ht;let Jt=Ht[Vt];if(Jt===void 0)Jt=ht(lt()),Ht[Vt]=Jt;return Jt}function ht(Lt){let zt=[],$t=[],wt=[];for(let Vt=0;Vt<nt;Vt++)zt[Vt]=0,$t[Vt]=0,wt[Vt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:zt,enabledAttributes:$t,attributeDivisors:wt,object:Lt,attributes:{},index:null}}function pt(Lt,zt,$t,wt){let Vt=rt.attributes,Xt=zt.attributes,Ft=0,se=$t.getAttributes();for(let Ht in se)if(se[Ht].location>=0){let te=Vt[Ht],Se=Xt[Ht];if(Se===void 0){if(Ht==="instanceMatrix"&&Lt.instanceMatrix)Se=Lt.instanceMatrix;if(Ht==="instanceColor"&&Lt.instanceColor)Se=Lt.instanceColor}if(te===void 0)return!0;if(te.attribute!==Se)return!0;if(Se&&te.data!==Se.data)return!0;Ft++}if(rt.attributesNum!==Ft)return!0;if(rt.index!==wt)return!0;return!1}function xt(Lt,zt,$t,wt){let Vt={},Xt=zt.attributes,Ft=0,se=$t.getAttributes();for(let Ht in se)if(se[Ht].location>=0){let te=Xt[Ht];if(te===void 0){if(Ht==="instanceMatrix"&&Lt.instanceMatrix)te=Lt.instanceMatrix;if(Ht==="instanceColor"&&Lt.instanceColor)te=Lt.instanceColor}let Se={};if(Se.attribute=te,te&&te.data)Se.data=te.data;Vt[Ht]=Se,Ft++}rt.attributes=Vt,rt.attributesNum=Ft,rt.index=wt}function Mt(){let Lt=rt.newAttributes;for(let zt=0,$t=Lt.length;zt<$t;zt++)Lt[zt]=0}function ft(Lt){mt(Lt,0)}function mt(Lt,zt){let $t=rt.newAttributes,wt=rt.enabledAttributes,Vt=rt.attributeDivisors;if($t[Lt]=1,wt[Lt]===0)tt.enableVertexAttribArray(Lt),wt[Lt]=1;if(Vt[Lt]!==zt)tt.vertexAttribDivisor(Lt,zt),Vt[Lt]=zt}function Et(){let Lt=rt.newAttributes,zt=rt.enabledAttributes;for(let $t=0,wt=zt.length;$t<wt;$t++)if(zt[$t]!==Lt[$t])tt.disableVertexAttribArray($t),zt[$t]=0}function Tt(Lt,zt,$t,wt,Vt,Xt,Ft){if(Ft===!0)tt.vertexAttribIPointer(Lt,zt,$t,Vt,Xt);else tt.vertexAttribPointer(Lt,zt,$t,wt,Vt,Xt)}function yt(Lt,zt,$t,wt){Mt();let Vt=wt.attributes,Xt=$t.getAttributes(),Ft=zt.defaultAttributeValues;for(let se in Xt){let Ht=Xt[se];if(Ht.location>=0){let Jt=Vt[se];if(Jt===void 0){if(se==="instanceMatrix"&&Lt.instanceMatrix)Jt=Lt.instanceMatrix;if(se==="instanceColor"&&Lt.instanceColor)Jt=Lt.instanceColor}if(Jt!==void 0){let te=Jt.normalized,Se=Jt.itemSize,Yt=et.get(Jt);if(Yt===void 0)continue;let{buffer:ne,type:be,bytesPerElement:Pe}=Yt,Le=be===tt.INT||be===tt.UNSIGNED_INT||Jt.gpuType===ba;if(Jt.isInterleavedBufferAttribute){let ve=Jt.data,Qe=ve.isInterleavedBuffer===!0?ve.stride:ve.itemSize,Ve=Jt.offset;if(ve.isInstancedInterleavedBuffer||ve.isInstancedBufferAttribute){for(let Fe=0;Fe<Ht.locationSize;Fe++)mt(Ht.location+Fe,ve.meshPerAttribute);if(Lt.isInstancedMesh!==!0&&wt._maxInstanceCount===void 0)wt._maxInstanceCount=ve.meshPerAttribute*ve.count}else for(let Fe=0;Fe<Ht.locationSize;Fe++)ft(Ht.location+Fe);tt.bindBuffer(tt.ARRAY_BUFFER,ne);for(let Fe=0;Fe<Ht.locationSize;Fe++)Tt(Ht.location+Fe,Se/Ht.locationSize,be,te,Qe*Pe,(Ve+Se/Ht.locationSize*Fe)*Pe,Le)}else{if(Jt.isInstancedBufferAttribute){for(let ve=0;ve<Ht.locationSize;ve++)mt(Ht.location+ve,Jt.meshPerAttribute);if(Lt.isInstancedMesh!==!0&&wt._maxInstanceCount===void 0)wt._maxInstanceCount=Jt.meshPerAttribute*Jt.count}else for(let ve=0;ve<Ht.locationSize;ve++)ft(Ht.location+ve);tt.bindBuffer(tt.ARRAY_BUFFER,ne);for(let ve=0;ve<Ht.locationSize;ve++)Tt(Ht.location+ve,Se/Ht.locationSize,be,te,Se*Pe,Se/Ht.locationSize*ve*Pe,Le)}}else if(Ft!==void 0){let te=Ft[se];if(te!==void 0)switch(te.length){case 2:tt.vertexAttrib2fv(Ht.location,te);break;case 3:tt.vertexAttrib3fv(Ht.location,te);break;case 4:tt.vertexAttrib4fv(Ht.location,te);break;default:tt.vertexAttrib1fv(Ht.location,te)}}}}Et()}function At(){It();for(let Lt in it){let zt=it[Lt];for(let $t in zt){let wt=zt[$t];for(let Vt in wt){let Xt=wt[Vt];for(let Ft in Xt)ut(Xt[Ft].object),delete Xt[Ft];delete wt[Vt]}}delete it[Lt]}}function Rt(Lt){if(it[Lt.id]===void 0)return;let zt=it[Lt.id];for(let $t in zt){let wt=zt[$t];for(let Vt in wt){let Xt=wt[Vt];for(let Ft in Xt)ut(Xt[Ft].object),delete Xt[Ft];delete wt[Vt]}}delete it[Lt.id]}function gt(Lt){for(let zt in it){let $t=it[zt];for(let wt in $t){let Vt=$t[wt];if(Vt[Lt.id]===void 0)continue;let Xt=Vt[Lt.id];for(let Ft in Xt)ut(Xt[Ft].object),delete Xt[Ft];delete Vt[Lt.id]}}}function St(Lt){for(let zt in it){let $t=it[zt],wt=Lt.isInstancedMesh===!0?Lt.id:0,Vt=$t[wt];if(Vt===void 0)continue;for(let Xt in Vt){let Ft=Vt[Xt];for(let se in Ft)ut(Ft[se].object),delete Ft[se];delete Vt[Xt]}if(delete $t[wt],Object.keys($t).length===0)delete it[zt]}}function It(){if(Bt(),at=!0,rt===st)return;rt=st,ct(rt.object)}function Bt(){st.geometry=null,st.program=null,st.wireframe=!1}return{setup:ot,reset:It,resetDefaultState:Bt,dispose:At,releaseStatesOfGeometry:Rt,releaseStatesOfObject:St,releaseStatesOfProgram:gt,initAttributes:Mt,enableAttribute:ft,disableUnusedAttributes:Et}}function qp(tt,et,nt){let it;function st(lt){it=lt}function rt(lt,ct){tt.drawArrays(it,lt,ct),nt.update(ct,it,1)}function at(lt,ct,ut){if(ut===0)return;tt.drawArraysInstanced(it,lt,ct,ut),nt.update(ct,it,ut)}function ot(lt,ct,ut){if(ut===0)return;et.get("WEBGL_multi_draw").multiDrawArraysWEBGL(it,lt,0,ct,0,ut);let ht=0;for(let pt=0;pt<ut;pt++)ht+=ct[pt];nt.update(ht,it,1)}this.setMode=st,this.render=rt,this.renderInstances=at,this.renderMultiDraw=ot}function Yp(tt,et,nt,it){let st;function rt(){if(st!==void 0)return st;if(et.has("EXT_texture_filter_anisotropic")===!0){let gt=et.get("EXT_texture_filter_anisotropic");st=tt.getParameter(gt.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else st=0;return st}function at(gt){if(gt!==ri&&it.convert(gt)!==tt.getParameter(tt.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function ot(gt){let St=gt===d&&(et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float"));if(gt!==kn&&gt!==si&&!St&&it.convert(gt)!==tt.getParameter(tt.IMPLEMENTATION_COLOR_READ_TYPE))return!1;return!0}function lt(gt){if(gt==="highp"){if(tt.getShaderPrecisionFormat(tt.VERTEX_SHADER,tt.HIGH_FLOAT).precision>0&&tt.getShaderPrecisionFormat(tt.FRAGMENT_SHADER,tt.HIGH_FLOAT).precision>0)return"highp";gt="mediump"}if(gt==="mediump"){if(tt.getShaderPrecisionFormat(tt.VERTEX_SHADER,tt.MEDIUM_FLOAT).precision>0&&tt.getShaderPrecisionFormat(tt.FRAGMENT_SHADER,tt.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let ct=nt.precision!==void 0?nt.precision:"highp",ut=lt(ct);if(ut!==ct)Oe("WebGLRenderer:",ct,"not supported, using",ut,"instead."),ct=ut;let dt=nt.reversedDepthBuffer===!0&&et.has("EXT_clip_control"),ht=nt.logarithmicDepthBuffer===!0&&dt===!1;if(nt.reversedDepthBuffer===!0&&dt===!1)Oe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");if(nt.logarithmicDepthBuffer===!0&&dt===!0)Oe("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let pt=tt.getParameter(tt.MAX_TEXTURE_IMAGE_UNITS),xt=tt.getParameter(tt.MAX_VERTEX_TEXTURE_IMAGE_UNITS),Mt=tt.getParameter(tt.MAX_TEXTURE_SIZE),ft=tt.getParameter(tt.MAX_CUBE_MAP_TEXTURE_SIZE),mt=tt.getParameter(tt.MAX_VERTEX_ATTRIBS),Et=tt.getParameter(tt.MAX_VERTEX_UNIFORM_VECTORS),Tt=tt.getParameter(tt.MAX_VARYING_VECTORS),yt=tt.getParameter(tt.MAX_FRAGMENT_UNIFORM_VECTORS),At=tt.getParameter(tt.MAX_SAMPLES),Rt=tt.getParameter(tt.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:rt,getMaxPrecision:lt,textureFormatReadable:at,textureTypeReadable:ot,precision:ct,logarithmicDepthBuffer:ht,reversedDepthBuffer:dt,maxTextures:pt,maxVertexTextures:xt,maxTextureSize:Mt,maxCubemapSize:ft,maxAttributes:mt,maxVertexUniforms:Et,maxVaryings:Tt,maxFragmentUniforms:yt,maxSamples:At,samples:Rt}}function Zp(tt){let et=this,nt=null,it=0,st=!1,rt=!1,at=new Wn,ot=new Ge,lt={value:null,needsUpdate:!1};this.uniform=lt,this.numPlanes=0,this.numIntersection=0,this.init=function(dt,ht){let pt=dt.length!==0||ht||it!==0||st;return st=ht,it=dt.length,pt},this.beginShadows=function(){rt=!0,ut(null)},this.endShadows=function(){rt=!1},this.setGlobalState=function(dt,ht){nt=ut(dt,ht,0)},this.setState=function(dt,ht,pt){let{clippingPlanes:xt,clipIntersection:Mt,clipShadows:ft}=dt,mt=tt.get(dt);if(!st||xt===null||xt.length===0||rt&&!ft)if(rt)ut(null);else ct();else{let Et=rt?0:it,Tt=Et*4,yt=mt.clippingState||null;lt.value=yt,yt=ut(xt,ht,Tt,pt);for(let At=0;At!==Tt;++At)yt[At]=nt[At];mt.clippingState=yt,this.numIntersection=Mt?this.numPlanes:0,this.numPlanes+=Et}};function ct(){if(lt.value!==nt)lt.value=nt,lt.needsUpdate=it>0;et.numPlanes=it,et.numIntersection=0}function ut(dt,ht,pt,xt){let Mt=dt!==null?dt.length:0,ft=null;if(Mt!==0){if(ft=lt.value,xt!==!0||ft===null){let mt=pt+Mt*4,Et=ht.matrixWorldInverse;if(ot.getNormalMatrix(Et),ft===null||ft.length<mt)ft=new Float32Array(mt);for(let Tt=0,yt=pt;Tt!==Mt;++Tt,yt+=4)at.copy(dt[Tt]).applyMatrix4(Et,ot),at.normal.toArray(ft,yt),ft[yt+3]=at.constant}lt.value=ft,lt.needsUpdate=!0}return et.numPlanes=Mt,et.numIntersection=0,ft}}class Hr extends c{constructor(tt=1,et={}){super(tt,tt,et);this.isWebGLCubeRenderTarget=!0;let nt={width:tt,height:tt,depth:1},it=[nt,nt,nt,nt,nt,nt];this.texture=new Ir(it),this._setTextureOptions(et),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(tt,et){this.texture.type=et.type,this.texture.colorSpace=et.colorSpace,this.texture.generateMipmaps=et.generateMipmaps,this.texture.minFilter=et.minFilter,this.texture.magFilter=et.magFilter;let nt={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},it=new l(5,5,5),st=new h({name:"CubemapFromEquirect",uniforms:Fi(nt.uniforms),vertexShader:nt.vertexShader,fragmentShader:nt.fragmentShader,side:u,blending:_});st.uniforms.tEquirect.value=et;let rt=new a(it,st),at=et.minFilter;if(et.minFilter===_i)et.minFilter=Dn;return new Fs(1,10,this).update(tt,rt),et.minFilter=at,rt.geometry.dispose(),rt.material.dispose(),this}clear(tt,et=!0,nt=!0,it=!0){let st=tt.getRenderTarget();for(let rt=0;rt<6;rt++)tt.setRenderTarget(this,rt),tt.clear(et,nt,it);tt.setRenderTarget(st)}}var Jc=256,Jp=3,$p=20,xh=256,vh=16,Kp=3,Qp=new e,jp=new n;class C{constructor(tt){this._renderer=tt,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Fs(1,10,null),this._boxMesh=new a(new l(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(tt,et=0,nt=0.1,it=100,st={}){let{size:rt=256,position:at=Qp}=st,ot=this._renderer;this._setSize(rt);let lt=this._allocateTarget(),ct=this._getSourceTarget(!0);if(et>0)ct.texture.mipmapsAutoUpdate=!1;let{autoClear:ut,autoClearColor:dt,autoClearDepth:ht,autoClearStencil:pt}=ot,xt=tt.background;if(ot.autoClear=!0,ot.autoClearColor=!0,ot.autoClearDepth=!0,ot.autoClearStencil=!0,xt===null)tt.background=ot.getClearColor(jp);let Mt=new Fs(nt,it,ct);if(Mt.position.copy(at),Mt.update(ot,tt),ot.autoClear=ut,ot.autoClearColor=dt,ot.autoClearDepth=ht,ot.autoClearStencil=pt,tt.background=xt,et>0)ct.texture.mipmapsAutoUpdate=!0,this._blur(lt,et);return this._applyPMREM(lt),lt}fromEquirectangular(tt,et=null){return this._fromTexture(tt,et)}fromCubemap(tt,et=null){return this._fromTexture(tt,et)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=Qc(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=Kc(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._sourceTarget!==null)this._sourceTarget.dispose();if(this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._integrationMaterial!==null)this._integrationMaterial.dispose();this._boxMesh.geometry.dispose()}static lodToRoughness(tt,et){return et>0?1-Math.sqrt(1-tt/et):0}_setSize(tt){this._cubeSize=Math.max(Jc,go(tt))}_fromTexture(tt,et){if(tt.mapping===Cs||tt.mapping===os)this._setSize(tt.image.length===0?Jc:tt.image[0].width||tt.image[0].image.width);else this._setSize(tt.image.width/4);let nt=et||this._allocateTarget();return this._textureToCubemap(tt),this._applyPMREM(nt),nt}_allocateTarget(){let tt=this._cubeSize,et=$c(tt,!1,!1),nt=Math.log2(tt)-Jp;for(let it=0;it<=nt;it++)et.texture.mipmaps.push({width:tt>>it,height:tt>>it});return et.texture.name="PMREM",et.texture.isPMREMTexture=!0,et}_getSourceTarget(tt=!1){let et=this._cubeSize,nt=this._sourceTarget;if(nt===null||nt.width!==et||tt&&nt.depthBuffer===!1){if(nt!==null)nt.dispose();this._sourceTarget=$c(et,!0,tt)}return this._sourceTarget}_compileMaterial(tt){this._boxMesh.material=tt,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(tt,et,nt){let it=this._boxMesh,st=this._cubeCamera;it.material=nt,st.renderTarget=tt,st.activeMipmapLevel=et;let rt=tt.width>>et;tt.viewport.set(0,0,rt,rt),st.update(this._renderer,it),tt.viewport.set(0,0,tt.width,tt.height)}_textureToCubemap(tt){let et;if(tt.mapping===Cs||tt.mapping===os){if(this._cubemapMaterial===null)this._cubemapMaterial=Qc();et=this._cubemapMaterial,et.uniforms.flipEnvMap.value=tt.isRenderTargetTexture===!1?-1:1}else{if(this._equirectMaterial===null)this._equirectMaterial=Kc();et=this._equirectMaterial}et.uniforms.envMap.value=tt,this._renderCube(this._getSourceTarget(),0,et)}_applyPMREM(tt){if(this._ggxMaterial===null)this._ggxMaterial=tm(),this._integrationMaterial=em();let et=this._cubeSize,nt=tt.texture.mipmaps.length-1,it=this._ggxMaterial.uniforms;it.envMap.value=this._sourceTarget.texture;let st=this._integrationMaterial.uniforms;st.envMap.value=this._sourceTarget.texture,st.sourceLod.value=Math.log2(et/vh);for(let rt=0;rt<=nt;rt++){let at=C.lodToRoughness(rt,nt);if(rt>nt-Kp)st.roughness.value=at,this._renderCube(tt,rt,this._integrationMaterial);else{let ot=at>0?Math.log2(et)+0.5*Math.log2(6/(xh*Math.pow(at,4)))+0.5:0;it.roughness.value=at,it.lodBias.value=ot,this._renderCube(tt,rt,this._ggxMaterial)}}}_blur(tt,et){if(this._blurMaterial===null)this._blurMaterial=nm();let nt=this._blurMaterial,it=nt.uniforms,st=this._sourceTarget;it.sigma.value=Math.min(et,Math.PI)/Math.SQRT2,it.envMap.value=st.texture,this._renderCube(tt,0,nt),it.envMap.value=tt.texture,this._renderCube(st,0,nt)}}function $c(tt,et,nt){return new Hr(tt,{minFilter:_i,generateMipmaps:et,type:d,colorSpace:ao,depthBuffer:nt})}function Gs(tt,et,nt){return new h({name:tt,uniforms:et,vertexShader:Xe.cube_vert,fragmentShader:nt,side:u,blending:_,depthTest:!1,depthWrite:!1})}function tm(){return Gs("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${xh}u

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
	`)}function em(){return Gs("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:vh}},`

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
	`)}function nm(){return Gs("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${$p}
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
	`)}function Kc(){return Gs("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Qc(){return Gs("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function im(tt){let et=new WeakMap,nt=new WeakMap,it=null;function st(ht,pt=!1){if(ht===null||ht===void 0)return null;if(pt)return at(ht);return rt(ht)}function rt(ht){if(ht&&ht.isTexture){let pt=ht.mapping;if(pt===pr||pt===mr)if(et.has(ht)){let xt=et.get(ht).texture;return ot(xt,ht.mapping)}else{let xt=ht.image;if(xt&&xt.height>0){let Mt=new Hr(xt.height);return Mt.fromEquirectangularTexture(tt,ht),et.set(ht,Mt),ht.addEventListener("dispose",ct),ot(Mt.texture,ht.mapping)}else return null}}return ht}function at(ht){if(ht&&ht.isTexture&&ht.isPMREMTexture!==!0){let pt=ht.mapping,xt=pt===pr||pt===mr,Mt=pt===Cs||pt===os;if(xt||Mt){let ft=nt.get(ht),mt=ft!==void 0?ft.texture.pmremVersion:0;if(ht.isRenderTargetTexture&&ht.pmremVersion!==mt){if(it===null)it=new C(tt);return ft=xt?it.fromEquirectangular(ht,ft):it.fromCubemap(ht,ft),ft.texture.pmremVersion=ht.pmremVersion,nt.set(ht,ft),ft.texture}else if(ft!==void 0)return ft.texture;else{let Et=ht.image;if(xt&&Et&&Et.height>0||Mt&&Et&&lt(Et)){if(it===null)it=new C(tt);return ft=xt?it.fromEquirectangular(ht):it.fromCubemap(ht),ft.texture.pmremVersion=ht.pmremVersion,nt.set(ht,ft),ht.addEventListener("dispose",ut),ft.texture}else return null}}}return ht}function ot(ht,pt){if(pt===pr)ht.mapping=Cs;else if(pt===mr)ht.mapping=os;return ht}function lt(ht){let pt=0,xt=6;for(let Mt=0;Mt<xt;Mt++)if(ht[Mt]!==void 0)pt++;return pt===xt}function ct(ht){let pt=ht.target;pt.removeEventListener("dispose",ct);let xt=et.get(pt);if(xt!==void 0)et.delete(pt),xt.dispose()}function ut(ht){let pt=ht.target;pt.removeEventListener("dispose",ut);let xt=nt.get(pt);if(xt!==void 0)nt.delete(pt),xt.dispose()}function dt(){if(et=new WeakMap,nt=new WeakMap,it!==null)it.dispose(),it=null}return{get:st,dispose:dt}}function sm(tt){let et={};function nt(it){if(et[it]!==void 0)return et[it];let st=tt.getExtension(it);return et[it]=st,st}return{has:function(it){return nt(it)!==null},init:function(){nt("EXT_color_buffer_float"),nt("WEBGL_clip_cull_distance"),nt("OES_texture_float_linear"),nt("EXT_color_buffer_half_float"),nt("WEBGL_multisampled_render_to_texture"),nt("WEBGL_render_shared_exponent")},get:function(it){let st=nt(it);if(st===null)xs("WebGLRenderer: "+it+" extension not supported.");return st}}}function rm(tt,et,nt,it){let st={},rt=new WeakMap,at=new FinalizationRegistry((xt)=>delete st[xt]);function ot(xt){lt(xt.target)}function lt(xt){if(xt.index!==null)et.remove(xt.index);for(let ft in xt.attributes)et.remove(xt.attributes[ft]);xt.removeEventListener("dispose",ot),delete st[xt.id],at.unregister(xt);let Mt=rt.get(xt);if(Mt)et.remove(Mt),rt.delete(xt);if(it.releaseStatesOfGeometry(xt),xt.isInstancedBufferGeometry===!0)delete xt._maxInstanceCount;nt.memory.geometries--}function ct(xt,Mt){if(st[Mt.id]!==void 0)return Mt;return Mt.addEventListener("dispose",ot),st[Mt.id]=new WeakRef(Mt),at.register(Mt,Mt.id,Mt),nt.memory.geometries++,Mt}function ut(xt){let Mt=xt.attributes;for(let ft in Mt)et.update(Mt[ft],tt.ARRAY_BUFFER)}function dt(xt){let Mt=xt.index,ft=xt.attributes.position,mt=0;if(ft===void 0)return;let Et=Mt!==null?Mt.array.length:ft.array.length/3-1,yt=new(ft.count>=65535?wr:Ar)(Math.ceil(Et/3)*6,1),At=yt.array;if(Mt!==null){let gt=Mt.array;mt=Mt.version;for(let St=0,It=0;St<Et;St+=3){let Bt=gt[St+0],Lt=gt[St+1],zt=gt[St+2];At[It++]=Bt,At[It++]=Lt,At[It++]=Lt,At[It++]=zt,At[It++]=zt,At[It++]=Bt}}else{mt=ft.version;for(let gt=0,St=0;gt<Et;gt+=3){let It=gt+0,Bt=gt+1,Lt=gt+2;At[St++]=It,At[St++]=Bt,At[St++]=Bt,At[St++]=Lt,At[St++]=Lt,At[St++]=It}}yt.version=mt;let Rt=rt.get(xt);if(Rt)et.remove(Rt);rt.set(xt,yt)}function ht(xt){let Mt=rt.get(xt);if(Mt){let ft=xt.index;if(ft!==null){if(Mt.version<ft.version)dt(xt)}}else dt(xt);return rt.get(xt)}function pt(){for(let xt in st){let Mt=st[xt].deref();if(Mt!==void 0)lt(Mt)}}return{get:ct,update:ut,getWireframeAttribute:ht,dispose:pt}}function am(tt,et,nt){let it;function st(dt){it=dt}let rt,at;function ot(dt){rt=dt.type,at=dt.bytesPerElement}function lt(dt,ht){tt.drawElements(it,ht,rt,dt*at),nt.update(ht,it,1)}function ct(dt,ht,pt){if(pt===0)return;tt.drawElementsInstanced(it,ht,rt,dt*at,pt),nt.update(ht,it,pt)}function ut(dt,ht,pt){if(pt===0)return;et.get("WEBGL_multi_draw").multiDrawElementsWEBGL(it,ht,0,rt,dt,0,pt);let Mt=0;for(let ft=0;ft<pt;ft++)Mt+=ht[ft];nt.update(Mt,it,1)}this.setMode=st,this.setIndex=ot,this.render=lt,this.renderInstances=ct,this.renderMultiDraw=ut}function om(tt){let et={geometries:0,textures:0},nt={frame:0,calls:0,triangles:0,points:0,lines:0};function it(rt,at,ot){switch(nt.calls++,at){case tt.TRIANGLES:nt.triangles+=ot*(rt/3);break;case tt.LINES:nt.lines+=ot*(rt/2);break;case tt.LINE_STRIP:nt.lines+=ot*(rt-1);break;case tt.LINE_LOOP:nt.lines+=ot*rt;break;case tt.POINTS:nt.points+=ot*rt;break;default:Be("WebGLInfo: Unknown draw mode:",at);break}}function st(){nt.calls=0,nt.triangles=0,nt.points=0,nt.lines=0}return{memory:et,render:nt,programs:null,autoReset:!0,reset:st,update:it}}function lm(tt,et,nt){let it=new WeakMap,st=new un;function rt(at,ot,lt){let ct=at.morphTargetInfluences,ut=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,dt=ut!==void 0?ut.length:0,ht=it.get(ot);if(ht===void 0||ht.count!==dt){let It=function(){gt.dispose(),it.delete(ot),ot.removeEventListener("dispose",It)};if(ht!==void 0)ht.texture.dispose();let pt=ot.morphAttributes.position!==void 0,xt=ot.morphAttributes.normal!==void 0,Mt=ot.morphAttributes.color!==void 0,ft=ot.morphAttributes.position||[],mt=ot.morphAttributes.normal||[],Et=ot.morphAttributes.color||[],Tt=0;if(pt===!0)Tt=1;if(xt===!0)Tt=2;if(Mt===!0)Tt=3;let yt=ot.attributes.position.count*Tt,At=1;if(yt>et.maxTextureSize)At=Math.ceil(yt/et.maxTextureSize),yt=et.maxTextureSize;let Rt=new Float32Array(yt*At*4*dt),gt=new Tr(Rt,yt,At,dt);gt.type=si,gt.needsUpdate=!0;let St=Tt*4;for(let Bt=0;Bt<dt;Bt++){let Lt=ft[Bt],zt=mt[Bt],$t=Et[Bt],wt=yt*At*4*Bt;for(let Vt=0;Vt<Lt.count;Vt++){let Xt=Vt*St;if(pt===!0)st.fromBufferAttribute(Lt,Vt),Rt[wt+Xt+0]=st.x,Rt[wt+Xt+1]=st.y,Rt[wt+Xt+2]=st.z,Rt[wt+Xt+3]=0;if(xt===!0)st.fromBufferAttribute(zt,Vt),Rt[wt+Xt+4]=st.x,Rt[wt+Xt+5]=st.y,Rt[wt+Xt+6]=st.z,Rt[wt+Xt+7]=0;if(Mt===!0)st.fromBufferAttribute($t,Vt),Rt[wt+Xt+8]=st.x,Rt[wt+Xt+9]=st.y,Rt[wt+Xt+10]=st.z,Rt[wt+Xt+11]=$t.itemSize===4?st.w:1}}ht={count:dt,texture:gt,size:new t(yt,At)},it.set(ot,ht),ot.addEventListener("dispose",It)}if(at.isInstancedMesh===!0&&at.morphTexture!==null)lt.getUniforms().setValue(tt,"morphTexture",at.morphTexture,nt);else{let pt=0;for(let Mt=0;Mt<ct.length;Mt++)pt+=ct[Mt];let xt=ot.morphTargetsRelative?1:1-pt;lt.getUniforms().setValue(tt,"morphTargetBaseInfluence",xt),lt.getUniforms().setValue(tt,"morphTargetInfluences",ct)}lt.getUniforms().setValue(tt,"morphTargetsTexture",ht.texture,nt),lt.getUniforms().setValue(tt,"morphTargetsTextureSize",ht.size)}return{update:rt}}function cm(tt,et,nt,it,st){let rt=new WeakMap;function at(ct){let ut=st.render.frame,dt=ct.geometry,ht=et.get(ct,dt);if(rt.get(ht)!==ut)et.update(ht),rt.set(ht,ut);if(ct.isInstancedMesh){if(ct.hasEventListener("dispose",lt)===!1)ct.addEventListener("dispose",lt);if(rt.get(ct)!==ut){if(nt.update(ct.instanceMatrix,tt.ARRAY_BUFFER),ct.instanceColor!==null)nt.update(ct.instanceColor,tt.ARRAY_BUFFER);rt.set(ct,ut)}}if(ct.isSkinnedMesh){let pt=ct.skeleton;if(rt.get(pt)!==ut)pt.update(),rt.set(pt,ut)}return ht}function ot(){rt=new WeakMap}function lt(ct){let ut=ct.target;if(ut.removeEventListener("dispose",lt),it.releaseStatesOfObject(ut),nt.remove(ut.instanceMatrix),ut.instanceColor!==null)nt.remove(ut.instanceColor)}return{update:at,dispose:ot}}var hm={[P]:"LINEAR_TONE_MAPPING",[L]:"REINHARD_TONE_MAPPING",[N]:"CINEON_TONE_MAPPING",[b]:"ACES_FILMIC_TONE_MAPPING",[U]:"AGX_TONE_MAPPING",[F]:"NEUTRAL_TONE_MAPPING",[D]:"CUSTOM_TONE_MAPPING"};function um(tt,et,nt,it,st,rt){let at=new c(et,nt,{type:tt,depthBuffer:st,stencilBuffer:rt,samples:it?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),ot=null,lt=null,ct=null,ut=new f;ut.setAttribute("position",new r([-1,3,0,-1,-1,0,3,-1,0],3)),ut.setAttribute("uv",new r([0,2,0,0,2,0],2));let dt=new V({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),ht=new a(ut,dt),pt=new R(-1,1,1,-1,0,1),xt=null,Mt=null,ft=!1,mt,Et=null,Tt=[],yt=!1;this.setSize=function(At,Rt){if(at.setSize(At,Rt),ot!==null)ot.setSize(At,Rt);if(lt!==null)lt.setSize(At,Rt);for(let gt=0;gt<Tt.length;gt++){let St=Tt[gt];if(St.setSize)St.setSize(At,Rt)}},this.setEffects=function(At){Tt=At,yt=Tt.length>0&&Tt[0].isRenderPass===!0;let{width:Rt,height:gt}=at;if(Tt.length>0&&ot===null)ot=new c(Rt,gt,{type:d,depthBuffer:!1,stencilBuffer:!1}),lt=new c(Rt,gt,{type:d,depthBuffer:!1,stencilBuffer:!1});let St=st===!0&&Tt.some((It)=>It.needsDepthTexture===!0);if(St!==(at.depthTexture!==null)){if(St===!0&&ct===null){if(ct=new yi(Rt,gt),rt===!0)ct.format=vi,ct.type=Pi}at.dispose(),at.depthTexture=St?ct:null,at.resolveDepthBuffer=St,at.storeMultisampledDepthBuffer=St}for(let It=0;It<Tt.length;It++){let Bt=Tt[It];if(Bt.setSize)Bt.setSize(Rt,gt);if(St&&Bt.needsDepthTexture===!0&&Bt.setDepthTexture)Bt.setDepthTexture(ct)}},this.begin=function(At,Rt){if(ft)return!1;if(At.toneMapping===Yn&&Tt.length===0)return!1;if(Et=Rt,Rt!==null){let{width:gt,height:St}=Rt;if(at.width!==gt||at.height!==St)this.setSize(gt,St)}if(yt===!1)At.setRenderTarget(at);return mt=At.toneMapping,At.toneMapping=Yn,!0},this.hasRenderPass=function(){return yt},this.end=function(At,Rt){At.toneMapping=mt,ft=!0;let gt=at,St=ot;for(let It=0;It<Tt.length;It++){let Bt=Tt[It];if(Bt.enabled===!1)continue;if(Bt.render(At,St,gt,Rt),Bt.needsSwap!==!1)gt=St,St=St===ot?lt:ot}if(xt!==At.outputColorSpace||Mt!==At.toneMapping){if(xt=At.outputColorSpace,Mt=At.toneMapping,dt.defines={},i.getTransfer(xt)===s)dt.defines.SRGB_TRANSFER="";let It=hm[Mt];if(It)dt.defines[It]="";dt.needsUpdate=!0}dt.uniforms.tDiffuse.value=gt.texture,At.setRenderTarget(Et),At.render(ht,pt),Et=null,ft=!1},this.isCompositing=function(){return ft},this.dispose=function(){if(at.dispose(),ot!==null)ot.dispose();if(lt!==null)lt.dispose();ut.dispose(),dt.dispose()}}var yh=new bn,Sh=new yi(1,1),Mh=new Pr(1),bh=new Tr,Th=new yo,Eh=new Ir,jc=[],th=[],eh=new Float32Array(16),nh=new Float32Array(9),ih=new Float32Array(4);function cs(tt,et,nt){let it=tt[0];if(it<=0||it>0)return tt;let st=et*nt,rt=jc[st];if(rt===void 0)rt=new Float32Array(st),jc[st]=rt;if(et!==0){it.toArray(rt,0);for(let at=1,ot=0;at!==et;++at)ot+=nt,tt[at].toArray(rt,ot)}return rt}function _n(tt,et){if(tt.length!==et.length)return!1;for(let nt=0,it=tt.length;nt<it;nt++)if(tt[nt]!==et[nt])return!1;return!0}function xn(tt,et){for(let nt=0,it=et.length;nt<it;nt++)tt[nt]=et[nt]}function Wr(tt,et){let nt=th[et];if(nt===void 0)nt=new Int32Array(et),th[et]=nt;for(let it=0;it!==et;++it)nt[it]=tt.allocateTextureUnit();return nt}function dm(tt,et){let nt=this.cache;if(nt[0]===et)return;tt.uniform1f(this.addr,et),nt[0]=et}function fm(tt,et){let nt=this.cache;if(et.x!==void 0){if(nt[0]!==et.x||nt[1]!==et.y)tt.uniform2f(this.addr,et.x,et.y),nt[0]=et.x,nt[1]=et.y}else{if(_n(nt,et))return;tt.uniform2fv(this.addr,et),xn(nt,et)}}function pm(tt,et){let nt=this.cache;if(et.x!==void 0){if(nt[0]!==et.x||nt[1]!==et.y||nt[2]!==et.z)tt.uniform3f(this.addr,et.x,et.y,et.z),nt[0]=et.x,nt[1]=et.y,nt[2]=et.z}else if(et.r!==void 0){if(nt[0]!==et.r||nt[1]!==et.g||nt[2]!==et.b)tt.uniform3f(this.addr,et.r,et.g,et.b),nt[0]=et.r,nt[1]=et.g,nt[2]=et.b}else{if(_n(nt,et))return;tt.uniform3fv(this.addr,et),xn(nt,et)}}function mm(tt,et){let nt=this.cache;if(et.x!==void 0){if(nt[0]!==et.x||nt[1]!==et.y||nt[2]!==et.z||nt[3]!==et.w)tt.uniform4f(this.addr,et.x,et.y,et.z,et.w),nt[0]=et.x,nt[1]=et.y,nt[2]=et.z,nt[3]=et.w}else{if(_n(nt,et))return;tt.uniform4fv(this.addr,et),xn(nt,et)}}function gm(tt,et){let nt=this.cache,it=et.elements;if(it===void 0){if(_n(nt,et))return;tt.uniformMatrix2fv(this.addr,!1,et),xn(nt,et)}else{if(_n(nt,it))return;ih.set(it),tt.uniformMatrix2fv(this.addr,!1,ih),xn(nt,it)}}function _m(tt,et){let nt=this.cache,it=et.elements;if(it===void 0){if(_n(nt,et))return;tt.uniformMatrix3fv(this.addr,!1,et),xn(nt,et)}else{if(_n(nt,it))return;nh.set(it),tt.uniformMatrix3fv(this.addr,!1,nh),xn(nt,it)}}function xm(tt,et){let nt=this.cache,it=et.elements;if(it===void 0){if(_n(nt,et))return;tt.uniformMatrix4fv(this.addr,!1,et),xn(nt,et)}else{if(_n(nt,it))return;eh.set(it),tt.uniformMatrix4fv(this.addr,!1,eh),xn(nt,it)}}function vm(tt,et){let nt=this.cache;if(nt[0]===et)return;tt.uniform1i(this.addr,et),nt[0]=et}function ym(tt,et){let nt=this.cache;if(et.x!==void 0){if(nt[0]!==et.x||nt[1]!==et.y)tt.uniform2i(this.addr,et.x,et.y),nt[0]=et.x,nt[1]=et.y}else{if(_n(nt,et))return;tt.uniform2iv(this.addr,et),xn(nt,et)}}function Sm(tt,et){let nt=this.cache;if(et.x!==void 0){if(nt[0]!==et.x||nt[1]!==et.y||nt[2]!==et.z)tt.uniform3i(this.addr,et.x,et.y,et.z),nt[0]=et.x,nt[1]=et.y,nt[2]=et.z}else{if(_n(nt,et))return;tt.uniform3iv(this.addr,et),xn(nt,et)}}function Mm(tt,et){let nt=this.cache;if(et.x!==void 0){if(nt[0]!==et.x||nt[1]!==et.y||nt[2]!==et.z||nt[3]!==et.w)tt.uniform4i(this.addr,et.x,et.y,et.z,et.w),nt[0]=et.x,nt[1]=et.y,nt[2]=et.z,nt[3]=et.w}else{if(_n(nt,et))return;tt.uniform4iv(this.addr,et),xn(nt,et)}}function bm(tt,et){let nt=this.cache;if(nt[0]===et)return;tt.uniform1ui(this.addr,et),nt[0]=et}function Tm(tt,et){let nt=this.cache;if(et.x!==void 0){if(nt[0]!==et.x||nt[1]!==et.y)tt.uniform2ui(this.addr,et.x,et.y),nt[0]=et.x,nt[1]=et.y}else{if(_n(nt,et))return;tt.uniform2uiv(this.addr,et),xn(nt,et)}}function Em(tt,et){let nt=this.cache;if(et.x!==void 0){if(nt[0]!==et.x||nt[1]!==et.y||nt[2]!==et.z)tt.uniform3ui(this.addr,et.x,et.y,et.z),nt[0]=et.x,nt[1]=et.y,nt[2]=et.z}else{if(_n(nt,et))return;tt.uniform3uiv(this.addr,et),xn(nt,et)}}function Am(tt,et){let nt=this.cache;if(et.x!==void 0){if(nt[0]!==et.x||nt[1]!==et.y||nt[2]!==et.z||nt[3]!==et.w)tt.uniform4ui(this.addr,et.x,et.y,et.z,et.w),nt[0]=et.x,nt[1]=et.y,nt[2]=et.z,nt[3]=et.w}else{if(_n(nt,et))return;tt.uniform4uiv(this.addr,et),xn(nt,et)}}function Vr(tt){if(tt.version===0)tt.compareFunction=ho,tt.needsUpdate=!0;return tt}function wm(tt,et,nt){let it=this.cache,st=nt.allocateTextureUnit();if(it[0]!==st)tt.uniform1i(this.addr,st),it[0]=st;let rt;if(this.type===tt.SAMPLER_2D_SHADOW)rt=Vr(Sh);else rt=yh;nt.setTexture2D(et||rt,st)}function Rm(tt,et,nt){let it=this.cache,st=nt.allocateTextureUnit();if(it[0]!==st)tt.uniform1i(this.addr,st),it[0]=st;nt.setTexture3D(et||Th,st)}function Cm(tt,et,nt){let it=this.cache,st=nt.allocateTextureUnit();if(it[0]!==st)tt.uniform1i(this.addr,st),it[0]=st;let rt;if(this.type===tt.SAMPLER_CUBE_SHADOW)rt=Vr(Mh);else rt=Eh;nt.setTextureCube(et||rt,st)}function Im(tt,et,nt){let it=this.cache,st=nt.allocateTextureUnit();if(it[0]!==st)tt.uniform1i(this.addr,st),it[0]=st;nt.setTexture2DArray(et||bh,st)}function Pm(tt){switch(tt){case 5126:return dm;case 35664:return fm;case 35665:return pm;case 35666:return mm;case 35674:return gm;case 35675:return _m;case 35676:return xm;case 5124:case 35670:return vm;case 35667:case 35671:return ym;case 35668:case 35672:return Sm;case 35669:case 35673:return Mm;case 5125:return bm;case 36294:return Tm;case 36295:return Em;case 36296:return Am;case 35678:case 36198:case 36298:case 36306:case 35682:return wm;case 35679:case 36299:case 36307:return Rm;case 35680:case 36300:case 36308:case 36293:return Cm;case 36289:case 36303:case 36311:case 36292:return Im}}function Lm(tt,et){tt.uniform1fv(this.addr,et)}function Nm(tt,et){let nt=cs(et,this.size,2);tt.uniform2fv(this.addr,nt)}function Dm(tt,et){let nt=cs(et,this.size,3);tt.uniform3fv(this.addr,nt)}function Um(tt,et){let nt=cs(et,this.size,4);tt.uniform4fv(this.addr,nt)}function Fm(tt,et){let nt=cs(et,this.size,4);tt.uniformMatrix2fv(this.addr,!1,nt)}function Om(tt,et){let nt=cs(et,this.size,9);tt.uniformMatrix3fv(this.addr,!1,nt)}function Bm(tt,et){let nt=cs(et,this.size,16);tt.uniformMatrix4fv(this.addr,!1,nt)}function zm(tt,et){tt.uniform1iv(this.addr,et)}function Gm(tt,et){tt.uniform2iv(this.addr,et)}function km(tt,et){tt.uniform3iv(this.addr,et)}function Hm(tt,et){tt.uniform4iv(this.addr,et)}function Wm(tt,et){tt.uniform1uiv(this.addr,et)}function Vm(tt,et){tt.uniform2uiv(this.addr,et)}function Xm(tt,et){tt.uniform3uiv(this.addr,et)}function qm(tt,et){tt.uniform4uiv(this.addr,et)}function Ym(tt,et,nt){let it=this.cache,st=et.length,rt=Wr(nt,st);if(!_n(it,rt))tt.uniform1iv(this.addr,rt),xn(it,rt);let at;if(this.type===tt.SAMPLER_2D_SHADOW)at=Vr(Sh);else at=yh;for(let ot=0;ot!==st;++ot)nt.setTexture2D(et[ot]||at,rt[ot])}function Zm(tt,et,nt){let it=this.cache,st=et.length,rt=Wr(nt,st);if(!_n(it,rt))tt.uniform1iv(this.addr,rt),xn(it,rt);for(let at=0;at!==st;++at)nt.setTexture3D(et[at]||Th,rt[at])}function Jm(tt,et,nt){let it=this.cache,st=et.length,rt=Wr(nt,st);if(!_n(it,rt))tt.uniform1iv(this.addr,rt),xn(it,rt);let at;if(this.type===tt.SAMPLER_CUBE_SHADOW)at=Vr(Mh);else at=Eh;for(let ot=0;ot!==st;++ot)nt.setTextureCube(et[ot]||at,rt[ot])}function $m(tt,et,nt){let it=this.cache,st=et.length,rt=Wr(nt,st);if(!_n(it,rt))tt.uniform1iv(this.addr,rt),xn(it,rt);for(let at=0;at!==st;++at)nt.setTexture2DArray(et[at]||bh,rt[at])}function Km(tt){switch(tt){case 5126:return Lm;case 35664:return Nm;case 35665:return Dm;case 35666:return Um;case 35674:return Fm;case 35675:return Om;case 35676:return Bm;case 5124:case 35670:return zm;case 35667:case 35671:return Gm;case 35668:case 35672:return km;case 35669:case 35673:return Hm;case 5125:return Wm;case 36294:return Vm;case 36295:return Xm;case 36296:return qm;case 35678:case 36198:case 36298:case 36306:case 35682:return Ym;case 35679:case 36299:case 36307:return Zm;case 35680:case 36300:case 36308:case 36293:return Jm;case 36289:case 36303:case 36311:case 36292:return $m}}class Ah{constructor(tt,et,nt){this.id=tt,this.addr=nt,this.cache=[],this.type=et.type,this.setValue=Pm(et.type)}}class wh{constructor(tt,et,nt){this.id=tt,this.addr=nt,this.cache=[],this.type=et.type,this.size=et.size,this.setValue=Km(et.type)}}class Rh{constructor(tt){this.id=tt,this.seq=[],this.map={}}setValue(tt,et,nt){let it=this.seq;for(let st=0,rt=it.length;st!==rt;++st){let at=it[st];at.setValue(tt,et[at.id],nt)}}}var qo=/(\w+)(\])?(\[|\.)?/g;function sh(tt,et){tt.seq.push(et),tt.map[et.id]=et}function Qm(tt,et,nt){let it=tt.name,st=it.length;qo.lastIndex=0;while(!0){let rt=qo.exec(it),at=qo.lastIndex,ot=rt[1],lt=rt[2]==="]",ct=rt[3];if(lt)ot=ot|0;if(ct===void 0||ct==="["&&at+2===st){sh(nt,ct===void 0?new Ah(ot,tt,et):new wh(ot,tt,et));break}else{let dt=nt.map[ot];if(dt===void 0)dt=new Rh(ot),sh(nt,dt);nt=dt}}}class zs{constructor(tt,et){this.seq=[],this.map={};let nt=tt.getProgramParameter(et,tt.ACTIVE_UNIFORMS);for(let rt=0;rt<nt;++rt){let at=tt.getActiveUniform(et,rt),ot=tt.getUniformLocation(et,at.name);Qm(at,ot,this)}let it=[],st=[];for(let rt of this.seq)if(rt.type===tt.SAMPLER_2D_SHADOW||rt.type===tt.SAMPLER_CUBE_SHADOW||rt.type===tt.SAMPLER_2D_ARRAY_SHADOW)it.push(rt);else st.push(rt);if(it.length>0)this.seq=it.concat(st)}setValue(tt,et,nt,it){let st=this.map[et];if(st!==void 0)st.setValue(tt,nt,it)}setOptional(tt,et,nt){let it=et[nt];if(it!==void 0)this.setValue(tt,nt,it)}static upload(tt,et,nt,it){for(let st=0,rt=et.length;st!==rt;++st){let at=et[st],ot=nt[at.id];if(ot.needsUpdate!==!1)at.setValue(tt,ot.value,it)}}static seqWithValue(tt,et){let nt=[];for(let it=0,st=tt.length;it!==st;++it){let rt=tt[it];if(rt.id in et)nt.push(rt)}return nt}}function rh(tt,et,nt){let it=tt.createShader(et);return tt.shaderSource(it,nt),tt.compileShader(it),it}var jm=37297,tg=0;function eg(tt,et){let nt=tt.split(`
`),it=[],st=Math.max(et-6,0),rt=Math.min(et+6,nt.length);for(let at=st;at<rt;at++){let ot=at+1;it.push(`${ot===et?">":" "} ${ot}: ${nt[at]}`)}return it.join(`
`)}var ah=new Ge;function ng(tt){i._getMatrix(ah,i.workingColorSpace,tt);let et=`mat3( ${ah.elements.map((nt)=>nt.toFixed(4))} )`;switch(i.getTransfer(tt)){case oo:return[et,"LinearTransferOETF"];case s:return[et,"sRGBTransferOETF"];default:return Oe("WebGLProgram: Unsupported color space: ",tt),[et,"LinearTransferOETF"]}}function oh(tt,et,nt){let it=tt.getShaderParameter(et,tt.COMPILE_STATUS),rt=(tt.getShaderInfoLog(et)||"").trim();if(it&&rt==="")return"";let at=/ERROR: 0:(\d+)/.exec(rt);if(at){let ot=parseInt(at[1]);return nt.toUpperCase()+`

`+rt+`

`+eg(tt.getShaderSource(et),ot)}else return rt}function ig(tt,et){let nt=ng(et);return[`vec4 ${tt}( vec4 value ) {`,`	return ${nt[1]}( vec4( ${nt[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var sg={[P]:"Linear",[L]:"Reinhard",[N]:"Cineon",[b]:"ACESFilmic",[U]:"AgX",[F]:"Neutral",[D]:"Custom"};function rg(tt,et){let nt=sg[et];if(nt===void 0)return Oe("WebGLProgram: Unsupported toneMapping:",et),"vec3 "+tt+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+tt+"( vec3 color ) { return "+nt+"ToneMapping( color ); }"}var kr=new e;function ag(){i.getLuminanceCoefficients(kr);let tt=kr.x.toFixed(4),et=kr.y.toFixed(4),nt=kr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${tt}, ${et}, ${nt} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function og(tt){return[tt.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",tt.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bs).join(`
`)}function lg(tt){let et=[];for(let nt in tt){let it=tt[nt];if(it===!1)continue;et.push("#define "+nt+" "+it)}return et.join(`
`)}function cg(tt,et){let nt={},it=tt.getProgramParameter(et,tt.ACTIVE_ATTRIBUTES);for(let st=0;st<it;st++){let rt=tt.getActiveAttrib(et,st),at=rt.name,ot=1;if(rt.type===tt.FLOAT_MAT2)ot=2;if(rt.type===tt.FLOAT_MAT3)ot=3;if(rt.type===tt.FLOAT_MAT4)ot=4;nt[at]={type:rt.type,location:tt.getAttribLocation(et,at),locationSize:ot}}return nt}function Bs(tt){return tt!==""}function lh(tt,et){let nt=et.numSpotLightShadows+et.numSpotLightMaps-et.numSpotLightShadowsWithMaps;return tt.replace(/NUM_SUN_LIGHTS/g,et.numSunLights).replace(/NUM_DIR_LIGHTS/g,et.numDirLights).replace(/NUM_SPOT_LIGHTS/g,et.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,et.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,nt).replace(/NUM_RECT_AREA_LIGHTS/g,et.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,et.numPointLights).replace(/NUM_HEMI_LIGHTS/g,et.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,et.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,et.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,et.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,et.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,et.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,et.numLightProbeGrids)}function ch(tt,et){return tt.replace(/NUM_CLIPPING_PLANES/g,et.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,et.numClippingPlanes-et.numClipIntersection)}var hg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zo(tt){return tt.replace(hg,ug)}function ug(tt,et){let nt=Xe[et];if(nt===void 0)throw Error("THREE.WebGLProgram: Can not resolve #include <"+et+">");return Zo(nt)}var dg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hh(tt){return tt.replace(dg,fg)}function fg(tt,et,nt,it){let st="";for(let rt=parseInt(et);rt<parseInt(nt);rt++)st+=it.replace(/\[\s*i\s*\]/g,"[ "+rt+" ]").replace(/UNROLLED_LOOP_INDEX/g,rt);return st}function uh(tt){let et=`precision ${tt.precision} float;
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
#define LOW_PRECISION`;return et}var pg={[ws]:"SHADOWMAP_TYPE_PCF",[ss]:"SHADOWMAP_TYPE_VSM"};function mg(tt){return pg[tt.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var gg={[os]:"ENVMAP_MODE_REFRACTION"};function _g(tt){if(tt.envMap===!1)return"ENVMAP_MODE_REFLECTION";return gg[tt.envMapMode]||"ENVMAP_MODE_REFLECTION"}var xg={[fc]:"ENVMAP_BLENDING_MULTIPLY",[pc]:"ENVMAP_BLENDING_MIX",[mc]:"ENVMAP_BLENDING_ADD"};function vg(tt){if(tt.envMap===!1)return"ENVMAP_BLENDING_NONE";return xg[tt.combine]||"ENVMAP_BLENDING_NONE"}function yg(tt,et,nt,it){let st=tt.getContext(),{defines:rt,vertexShader:at,fragmentShader:ot}=nt,lt=mg(nt),ct=nt.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",ut=_g(nt),dt=vg(nt),ht=og(nt),pt=lg(rt),xt=st.createProgram(),Mt,ft,mt=nt.glslVersion?"#version "+nt.glslVersion+`
`:"";if(nt.isRawShaderMaterial){if(Mt=["#define SHADER_TYPE "+nt.shaderType,"#define SHADER_NAME "+nt.shaderName,pt].filter(Bs).join(`
`),Mt.length>0)Mt+=`
`;if(ft=["#define SHADER_TYPE "+nt.shaderType,"#define SHADER_NAME "+nt.shaderName,pt].filter(Bs).join(`
`),ft.length>0)ft+=`
`}else Mt=[uh(nt),"#define SHADER_TYPE "+nt.shaderType,"#define SHADER_NAME "+nt.shaderName,pt,nt.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",nt.batching?"#define USE_BATCHING":"",nt.batchingColor?"#define USE_BATCHING_COLOR":"",nt.instancing?"#define USE_INSTANCING":"",nt.instancingColor?"#define USE_INSTANCING_COLOR":"",nt.instancingMorph?"#define USE_INSTANCING_MORPH":"",nt.useFog&&nt.fog?"#define USE_FOG":"",nt.useFog&&nt.fogExp2?"#define FOG_EXP2":"",nt.map?"#define USE_MAP":"",nt.envMap?"#define USE_ENVMAP":"",nt.envMap?"#define "+ut:"",nt.lightMap?"#define USE_LIGHTMAP":"",nt.aoMap?"#define USE_AOMAP":"",nt.bumpMap?"#define USE_BUMPMAP":"",nt.normalMap?"#define USE_NORMALMAP":"",nt.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",nt.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",nt.displacementMap?"#define USE_DISPLACEMENTMAP":"",nt.emissiveMap?"#define USE_EMISSIVEMAP":"",nt.anisotropy?"#define USE_ANISOTROPY":"",nt.anisotropyMap?"#define USE_ANISOTROPYMAP":"",nt.clearcoatMap?"#define USE_CLEARCOATMAP":"",nt.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",nt.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",nt.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",nt.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",nt.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",nt.specularMap?"#define USE_SPECULARMAP":"",nt.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",nt.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",nt.roughnessMap?"#define USE_ROUGHNESSMAP":"",nt.metalnessMap?"#define USE_METALNESSMAP":"",nt.alphaMap?"#define USE_ALPHAMAP":"",nt.alphaHash?"#define USE_ALPHAHASH":"",nt.transmission?"#define USE_TRANSMISSION":"",nt.transmissionMap?"#define USE_TRANSMISSIONMAP":"",nt.thicknessMap?"#define USE_THICKNESSMAP":"",nt.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",nt.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",nt.mapUv?"#define MAP_UV "+nt.mapUv:"",nt.alphaMapUv?"#define ALPHAMAP_UV "+nt.alphaMapUv:"",nt.lightMapUv?"#define LIGHTMAP_UV "+nt.lightMapUv:"",nt.aoMapUv?"#define AOMAP_UV "+nt.aoMapUv:"",nt.emissiveMapUv?"#define EMISSIVEMAP_UV "+nt.emissiveMapUv:"",nt.bumpMapUv?"#define BUMPMAP_UV "+nt.bumpMapUv:"",nt.normalMapUv?"#define NORMALMAP_UV "+nt.normalMapUv:"",nt.displacementMapUv?"#define DISPLACEMENTMAP_UV "+nt.displacementMapUv:"",nt.metalnessMapUv?"#define METALNESSMAP_UV "+nt.metalnessMapUv:"",nt.roughnessMapUv?"#define ROUGHNESSMAP_UV "+nt.roughnessMapUv:"",nt.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+nt.anisotropyMapUv:"",nt.clearcoatMapUv?"#define CLEARCOATMAP_UV "+nt.clearcoatMapUv:"",nt.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+nt.clearcoatNormalMapUv:"",nt.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+nt.clearcoatRoughnessMapUv:"",nt.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+nt.diffuseRoughnessMapUv:"",nt.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+nt.iridescenceMapUv:"",nt.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+nt.iridescenceThicknessMapUv:"",nt.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+nt.sheenColorMapUv:"",nt.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+nt.sheenRoughnessMapUv:"",nt.specularMapUv?"#define SPECULARMAP_UV "+nt.specularMapUv:"",nt.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+nt.specularColorMapUv:"",nt.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+nt.specularIntensityMapUv:"",nt.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+nt.transmissionMapUv:"",nt.thicknessMapUv?"#define THICKNESSMAP_UV "+nt.thicknessMapUv:"",nt.vertexTangents&&nt.flatShading===!1?"#define USE_TANGENT":"",nt.vertexNormals?"#define HAS_NORMAL":"",nt.vertexColors?"#define USE_COLOR":"",nt.vertexAlphas?"#define USE_COLOR_ALPHA":"",nt.vertexUv1s?"#define USE_UV1":"",nt.vertexUv2s?"#define USE_UV2":"",nt.vertexUv3s?"#define USE_UV3":"",nt.pointsUvs?"#define USE_POINTS_UV":"",nt.flatShading?"#define FLAT_SHADED":"",nt.skinning?"#define USE_SKINNING":"",nt.morphTargets?"#define USE_MORPHTARGETS":"",nt.morphNormals&&nt.flatShading===!1?"#define USE_MORPHNORMALS":"",nt.morphColors?"#define USE_MORPHCOLORS":"",nt.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+nt.morphTextureStride:"",nt.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+nt.morphTargetsCount:"",nt.doubleSided?"#define DOUBLE_SIDED":"",nt.flipSided?"#define FLIP_SIDED":"",nt.shadowMapEnabled?"#define USE_SHADOWMAP":"",nt.shadowMapEnabled?"#define "+lt:"",nt.sizeAttenuation?"#define USE_SIZEATTENUATION":"",nt.numLightProbes>0?"#define USE_LIGHT_PROBES":"",nt.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",nt.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(Bs).join(`
`),ft=[uh(nt),"#define SHADER_TYPE "+nt.shaderType,"#define SHADER_NAME "+nt.shaderName,pt,nt.useFog&&nt.fog?"#define USE_FOG":"",nt.useFog&&nt.fogExp2?"#define FOG_EXP2":"",nt.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",nt.map?"#define USE_MAP":"",nt.matcap?"#define USE_MATCAP":"",nt.envMap?"#define USE_ENVMAP":"",nt.envMap?"#define "+ct:"",nt.envMap?"#define "+ut:"",nt.envMap?"#define "+dt:"",nt.envMapPMREM?"#define ENVMAP_MAX_LOD "+nt.envMapMaxLod+".0":"",nt.envMapPMREM?"#define ENVMAP_SIZE "+nt.envMapSize+".0":"",nt.lightMap?"#define USE_LIGHTMAP":"",nt.aoMap?"#define USE_AOMAP":"",nt.bumpMap?"#define USE_BUMPMAP":"",nt.normalMap?"#define USE_NORMALMAP":"",nt.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",nt.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",nt.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",nt.emissiveMap?"#define USE_EMISSIVEMAP":"",nt.anisotropy?"#define USE_ANISOTROPY":"",nt.anisotropyMap?"#define USE_ANISOTROPYMAP":"",nt.clearcoat?"#define USE_CLEARCOAT":"",nt.clearcoatMap?"#define USE_CLEARCOATMAP":"",nt.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",nt.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",nt.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",nt.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",nt.dispersion?"#define USE_DISPERSION":"",nt.retroreflection?"#define USE_RETROREFLECTION":"",nt.iridescence?"#define USE_IRIDESCENCE":"",nt.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",nt.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",nt.specularMap?"#define USE_SPECULARMAP":"",nt.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",nt.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",nt.roughnessMap?"#define USE_ROUGHNESSMAP":"",nt.metalnessMap?"#define USE_METALNESSMAP":"",nt.alphaMap?"#define USE_ALPHAMAP":"",nt.alphaTest?"#define USE_ALPHATEST":"",nt.alphaHash?"#define USE_ALPHAHASH":"",nt.sheen?"#define USE_SHEEN":"",nt.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",nt.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",nt.transmission?"#define USE_TRANSMISSION":"",nt.transmissionMap?"#define USE_TRANSMISSIONMAP":"",nt.thicknessMap?"#define USE_THICKNESSMAP":"",nt.vertexTangents&&nt.flatShading===!1?"#define USE_TANGENT":"",nt.vertexColors||nt.instancingColor?"#define USE_COLOR":"",nt.vertexAlphas||nt.batchingColor?"#define USE_COLOR_ALPHA":"",nt.vertexUv1s?"#define USE_UV1":"",nt.vertexUv2s?"#define USE_UV2":"",nt.vertexUv3s?"#define USE_UV3":"",nt.pointsUvs?"#define USE_POINTS_UV":"",nt.gradientMap?"#define USE_GRADIENTMAP":"",nt.flatShading?"#define FLAT_SHADED":"",nt.doubleSided?"#define DOUBLE_SIDED":"",nt.flipSided?"#define FLIP_SIDED":"",nt.shadowMapEnabled?"#define USE_SHADOWMAP":"",nt.shadowMapEnabled?"#define "+lt:"",nt.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",nt.numLightProbes>0?"#define USE_LIGHT_PROBES":"",nt.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",nt.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",nt.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",nt.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",nt.toneMapping!==Yn?"#define TONE_MAPPING":"",nt.toneMapping!==Yn?Xe.tonemapping_pars_fragment:"",nt.toneMapping!==Yn?rg("toneMapping",nt.toneMapping):"",nt.dithering?"#define DITHERING":"",nt.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,ig("linearToOutputTexel",nt.outputColorSpace),ag(),nt.useDepthPacking?"#define DEPTH_PACKING "+nt.depthPacking:"",`
`].filter(Bs).join(`
`);if(at=Zo(at),at=lh(at,nt),at=ch(at,nt),ot=Zo(ot),ot=lh(ot,nt),ot=ch(ot,nt),at=hh(at),ot=hh(ot),nt.isRawShaderMaterial!==!0)mt=`#version 300 es
`,Mt=[ht,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+Mt,ft=["#define varying in",nt.glslVersion===uo?"":"layout(location = 0) out highp vec4 pc_fragColor;",nt.glslVersion===uo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+ft;let Et=mt+Mt+at,Tt=mt+ft+ot,yt=rh(st,st.VERTEX_SHADER,Et),At=rh(st,st.FRAGMENT_SHADER,Tt);if(st.attachShader(xt,yt),st.attachShader(xt,At),nt.index0AttributeName!==void 0)st.bindAttribLocation(xt,0,nt.index0AttributeName);else if(nt.hasPositionAttribute===!0)st.bindAttribLocation(xt,0,"position");st.linkProgram(xt);function Rt(Bt){if(tt.debug.checkShaderErrors){let Lt=st.getProgramInfoLog(xt)||"",zt=st.getShaderInfoLog(yt)||"",$t=st.getShaderInfoLog(At)||"",wt=Lt.trim(),Vt=zt.trim(),Xt=$t.trim(),Ft=!0,se=!0;if(st.getProgramParameter(xt,st.LINK_STATUS)===!1)if(Ft=!1,typeof tt.debug.onShaderError==="function")tt.debug.onShaderError(st,xt,yt,At);else{let Ht=oh(st,yt,"vertex"),Jt=oh(st,At,"fragment");Be("WebGLProgram: Shader Error "+st.getError()+" - VALIDATE_STATUS "+st.getProgramParameter(xt,st.VALIDATE_STATUS)+`

Material Name: `+Bt.name+`
Material Type: `+Bt.type+`

Program Info Log: `+wt+`
`+Ht+`
`+Jt)}else if(wt!=="")Oe("WebGLProgram: Program Info Log:",wt);else if(Vt===""||Xt==="")se=!1;if(se)Bt.diagnostics={runnable:Ft,programLog:wt,vertexShader:{log:Vt,prefix:Mt},fragmentShader:{log:Xt,prefix:ft}}}st.deleteShader(yt),st.deleteShader(At),gt=new zs(st,xt),St=cg(st,xt)}let gt;this.getUniforms=function(){if(gt===void 0)Rt(this);return gt};let St;this.getAttributes=function(){if(St===void 0)Rt(this);return St};let It=nt.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(It===!1)It=st.getProgramParameter(xt,jm);return It},this.destroy=function(){it.releaseStatesOfProgram(this),st.deleteProgram(xt),this.program=void 0},this.type=nt.shaderType,this.name=nt.shaderName,this.id=tg++,this.cacheKey=et,this.usedTimes=1,this.program=xt,this.vertexShader=yt,this.fragmentShader=At,this}var Sg=0;class Ch{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(tt,et,nt){let it=this._getShaderCacheForMaterial(tt);if(it.has(et)===!1)it.add(et),et.usedTimes++;if(it.has(nt)===!1)it.add(nt),nt.usedTimes++;return this}remove(tt){let et=this.materialCache.get(tt);for(let nt of et)if(nt.usedTimes--,nt.usedTimes===0)this.shaderCache.delete(nt.code);return this.materialCache.delete(tt),this}getVertexShaderStage(tt){return this._getShaderStage(tt.vertexShader)}getFragmentShaderStage(tt){return this._getShaderStage(tt.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(tt){let et=this.materialCache,nt=et.get(tt);if(nt===void 0)nt=new Set,et.set(tt,nt);return nt}_getShaderStage(tt){let et=this.shaderCache,nt=et.get(tt);if(nt===void 0)nt=new Ih(tt),et.set(tt,nt);return nt}}class Ih{constructor(tt){this.id=Sg++,this.code=tt,this.usedTimes=0}}function Mg(tt){return tt===Li||tt===Mr||tt===br}function bg(tt,et,nt,it,st,rt){let at=new Er,ot=new Ch,lt=new Set,ct=[],ut=new Map,dt=it.logarithmicDepthBuffer,ht={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function pt(gt){if(lt.add(gt),gt===0)return"uv";return`uv${gt}`}function xt(gt,St,It,Bt,Lt,zt){let $t=Bt.fog,wt=Lt.geometry,Vt=gt.isMeshStandardMaterial||gt.isMeshLambertMaterial||gt.isMeshPhongMaterial?Bt.environment:null,Xt=gt.isMeshStandardMaterial||gt.isMeshLambertMaterial&&!gt.envMap||gt.isMeshPhongMaterial&&!gt.envMap,Ft=et.get(gt.envMap||Vt,Xt),se=ht[gt.type],Ht=it.precision;if(gt.precision!==null){if(Ht=it.getMaxPrecision(gt.precision),Ht!==gt.precision)Oe("WebGLProgram.getParameters:",gt.precision,"not supported, using",Ht,"instead.")}let Jt=wt.morphAttributes.position||wt.morphAttributes.normal||wt.morphAttributes.color,te=Jt!==void 0?Jt.length:0,Se=0;if(wt.morphAttributes.position!==void 0)Se=1;if(wt.morphAttributes.normal!==void 0)Se=2;if(wt.morphAttributes.color!==void 0)Se=3;let Yt,ne,be,Pe;if(se){let _e=Jn[se];Yt=_e.vertexShader,ne=_e.fragmentShader}else{Yt=gt.vertexShader,ne=gt.fragmentShader;let _e=ot.getVertexShaderStage(gt),rn=ot.getFragmentShaderStage(gt);ot.update(gt,_e,rn),be=_e.id,Pe=rn.id}let Le=tt.getRenderTarget(),ve=tt.state.buffers.depth.getReversed(),Qe=Lt.isInstancedMesh===!0,Ve=Lt.isBatchedMesh===!0,Fe=!!gt.map,Ke=!!gt.matcap,Kt=!!Ft,re=Kt&&Ft.isPMREMTexture===!0,le=!!gt.aoMap,Me=!!gt.lightMap,ye=!!gt.bumpMap&&gt.wireframe===!1,De=!!gt.normalMap,Ce=!!gt.displacementMap,qe=!!gt.emissiveMap,Ye=!!gt.metalnessMap,tn=!!gt.roughnessMap,Nt=gt.anisotropy>0,mn=gt.clearcoat>0,He=gt.diffuseRoughness>0,dn=gt.dispersion>0,pe=gt.retroreflectivity>0,nn=gt.iridescence>0,Ue=gt.sheen>0,ze=gt.transmission>0,gn=Nt&&!!gt.anisotropyMap,bt=mn&&!!gt.clearcoatMap,_t=mn&&!!gt.clearcoatNormalMap,Dt=mn&&!!gt.clearcoatRoughnessMap,jt=He&&!!gt.diffuseRoughnessMap,Qt=nn&&!!gt.iridescenceMap,oe=nn&&!!gt.iridescenceThicknessMap,ue=Ue&&!!gt.sheenColorMap,kt=Ue&&!!gt.sheenRoughnessMap,Zt=!!gt.specularMap,ce=!!gt.specularColorMap,Ct=!!gt.specularIntensityMap,qt=ze&&!!gt.transmissionMap,Wt=ze&&!!gt.thicknessMap,ie=!!gt.gradientMap,ae=!!gt.alphaMap,fe=gt.alphaTest>0,Ie=!!gt.alphaHash,Re=!!gt.extensions,ge=Yn;if(gt.toneMapped){if(Le===null||Le.isXRRenderTarget===!0)ge=tt.toneMapping}let Ne=re?Ft.isCompressedCubeTexture?Ft.image[0].mipmaps:Ft.mipmaps:null,We={shaderID:se,shaderType:gt.type,shaderName:gt.name,vertexShader:Yt,fragmentShader:ne,defines:gt.defines,customVertexShaderID:be,customFragmentShaderID:Pe,isRawShaderMaterial:gt.isRawShaderMaterial===!0,glslVersion:gt.glslVersion,precision:Ht,batching:Ve,batchingColor:Ve&&Lt._colorsTexture!==null,instancing:Qe,instancingColor:Qe&&Lt.instanceColor!==null,instancingMorph:Qe&&Lt.morphTexture!==null,outputColorSpace:Le===null?tt.outputColorSpace:Le.isXRRenderTarget===!0?Le.texture.colorSpace:i.workingColorSpace,alphaToCoverage:!!gt.alphaToCoverage,map:Fe,matcap:Ke,envMap:Kt,envMapMode:Kt&&Ft.mapping,envMapPMREM:re,envMapMaxLod:re?Ne.length-1:null,envMapSize:re?Ne[0].width:null,aoMap:le,lightMap:Me,bumpMap:ye,normalMap:De,displacementMap:Ce,emissiveMap:qe,normalMapObjectSpace:De&&gt.normalMapType===Ec,normalMapTangentSpace:De&&gt.normalMapType===ro,packedNormalMap:De&&gt.normalMapType===ro&&Mg(gt.normalMap.format),metalnessMap:Ye,roughnessMap:tn,anisotropy:Nt,anisotropyMap:gn,clearcoat:mn,clearcoatMap:bt,clearcoatNormalMap:_t,clearcoatRoughnessMap:Dt,diffuseRoughness:He,diffuseRoughnessMap:jt,dispersion:dn,retroreflection:pe,iridescence:nn,iridescenceMap:Qt,iridescenceThicknessMap:oe,sheen:Ue,sheenColorMap:ue,sheenRoughnessMap:kt,specularMap:Zt,specularColorMap:ce,specularIntensityMap:Ct,transmission:ze,transmissionMap:qt,thicknessMap:Wt,gradientMap:ie,opaque:gt.transparent===!1&&gt.blending===Rs&&gt.alphaToCoverage===!1,alphaMap:ae,alphaTest:fe,alphaHash:Ie,combine:gt.combine,mapUv:Fe&&pt(gt.map.channel),aoMapUv:le&&pt(gt.aoMap.channel),lightMapUv:Me&&pt(gt.lightMap.channel),bumpMapUv:ye&&pt(gt.bumpMap.channel),normalMapUv:De&&pt(gt.normalMap.channel),displacementMapUv:Ce&&pt(gt.displacementMap.channel),emissiveMapUv:qe&&pt(gt.emissiveMap.channel),metalnessMapUv:Ye&&pt(gt.metalnessMap.channel),roughnessMapUv:tn&&pt(gt.roughnessMap.channel),anisotropyMapUv:gn&&pt(gt.anisotropyMap.channel),clearcoatMapUv:bt&&pt(gt.clearcoatMap.channel),clearcoatNormalMapUv:_t&&pt(gt.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Dt&&pt(gt.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:jt&&pt(gt.diffuseRoughnessMap.channel),iridescenceMapUv:Qt&&pt(gt.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&pt(gt.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&pt(gt.sheenColorMap.channel),sheenRoughnessMapUv:kt&&pt(gt.sheenRoughnessMap.channel),specularMapUv:Zt&&pt(gt.specularMap.channel),specularColorMapUv:ce&&pt(gt.specularColorMap.channel),specularIntensityMapUv:Ct&&pt(gt.specularIntensityMap.channel),transmissionMapUv:qt&&pt(gt.transmissionMap.channel),thicknessMapUv:Wt&&pt(gt.thicknessMap.channel),alphaMapUv:ae&&pt(gt.alphaMap.channel),vertexTangents:!!wt.attributes.tangent&&(De||Nt),vertexNormals:!!wt.attributes.normal,vertexColors:gt.vertexColors,vertexAlphas:gt.vertexColors===!0&&!!wt.attributes.color&&wt.attributes.color.itemSize===4,pointsUvs:Lt.isPoints===!0&&!!wt.attributes.uv&&(Fe||ae),fog:!!$t,useFog:gt.fog===!0,fogExp2:!!$t&&$t.isFogExp2,flatShading:gt.wireframe===!1&&(gt.flatShading===!0||wt.attributes.normal===void 0&&De===!1&&(gt.isMeshLambertMaterial||gt.isMeshPhongMaterial||gt.isMeshStandardMaterial||gt.isMeshPhysicalMaterial)),sizeAttenuation:gt.sizeAttenuation===!0,logarithmicDepthBuffer:dt,reversedDepthBuffer:ve,skinning:Lt.isSkinnedMesh===!0,hasPositionAttribute:wt.attributes.position!==void 0,morphTargets:wt.morphAttributes.position!==void 0,morphNormals:wt.morphAttributes.normal!==void 0,morphColors:wt.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:Se,numSunLights:St.sun.length,numDirLights:St.directional.length,numPointLights:St.point.length,numSpotLights:St.spot.length,numSpotLightMaps:St.spotLightMap.length,numRectAreaLights:St.rectArea.length,numHemiLights:St.hemi.length,numSunLightShadows:St.sunShadowMap.length,numDirLightShadows:St.directionalShadowMap.length,numPointLightShadows:St.pointShadowMap.length,numSpotLightShadows:St.spotShadowMap.length,numSpotLightShadowsWithMaps:St.numSpotLightShadowsWithMaps,numLightProbes:St.numLightProbes,numLightProbeGrids:zt.filter((_e)=>_e.texture!==null).length,numClippingPlanes:rt.numPlanes,numClipIntersection:rt.numIntersection,dithering:gt.dithering,shadowMapEnabled:tt.shadowMap.enabled&&It.length>0,shadowMapType:tt.shadowMap.type,toneMapping:ge,decodeVideoTexture:Fe&&gt.map.isVideoTexture===!0&&i.getTransfer(gt.map.colorSpace)===s,decodeVideoTextureEmissive:qe&&gt.emissiveMap.isVideoTexture===!0&&i.getTransfer(gt.emissiveMap.colorSpace)===s,premultipliedAlpha:gt.premultipliedAlpha,doubleSided:gt.side===qn,flipSided:gt.side===u,useDepthPacking:gt.depthPacking>=0,depthPacking:gt.depthPacking||0,index0AttributeName:gt.index0AttributeName,extensionClipCullDistance:Re&&gt.extensions.clipCullDistance===!0&&nt.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Re&&gt.extensions.multiDraw===!0||Ve)&&nt.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:nt.has("KHR_parallel_shader_compile"),customProgramCacheKey:gt.customProgramCacheKey()};return We.vertexUv1s=lt.has(1),We.vertexUv2s=lt.has(2),We.vertexUv3s=lt.has(3),lt.clear(),We}function Mt(gt){let St=[];if(gt.shaderID)St.push(gt.shaderID);else St.push(gt.customVertexShaderID),St.push(gt.customFragmentShaderID);if(gt.defines!==void 0)for(let It in gt.defines)St.push(It),St.push(gt.defines[It]);if(gt.isRawShaderMaterial===!1)ft(St,gt),mt(St,gt),St.push(tt.outputColorSpace);return St.push(gt.customProgramCacheKey),St.join()}function ft(gt,St){gt.push(St.precision),gt.push(St.outputColorSpace),gt.push(St.envMapMode),gt.push(St.envMapPMREM),gt.push(St.envMapMaxLod),gt.push(St.envMapSize),gt.push(St.mapUv),gt.push(St.alphaMapUv),gt.push(St.lightMapUv),gt.push(St.aoMapUv),gt.push(St.bumpMapUv),gt.push(St.normalMapUv),gt.push(St.displacementMapUv),gt.push(St.emissiveMapUv),gt.push(St.metalnessMapUv),gt.push(St.roughnessMapUv),gt.push(St.anisotropyMapUv),gt.push(St.clearcoatMapUv),gt.push(St.clearcoatNormalMapUv),gt.push(St.clearcoatRoughnessMapUv),gt.push(St.diffuseRoughnessMapUv),gt.push(St.iridescenceMapUv),gt.push(St.iridescenceThicknessMapUv),gt.push(St.sheenColorMapUv),gt.push(St.sheenRoughnessMapUv),gt.push(St.specularMapUv),gt.push(St.specularColorMapUv),gt.push(St.specularIntensityMapUv),gt.push(St.transmissionMapUv),gt.push(St.thicknessMapUv),gt.push(St.combine),gt.push(St.fogExp2),gt.push(St.sizeAttenuation),gt.push(St.morphTargetsCount),gt.push(St.numSunLights),gt.push(St.numDirLights),gt.push(St.numPointLights),gt.push(St.numSpotLights),gt.push(St.numSpotLightMaps),gt.push(St.numHemiLights),gt.push(St.numRectAreaLights),gt.push(St.numSunLightShadows),gt.push(St.numDirLightShadows),gt.push(St.numPointLightShadows),gt.push(St.numSpotLightShadows),gt.push(St.numSpotLightShadowsWithMaps),gt.push(St.numLightProbes),gt.push(St.numLightProbeGrids),gt.push(St.shadowMapType),gt.push(St.toneMapping),gt.push(St.numClippingPlanes),gt.push(St.numClipIntersection),gt.push(St.depthPacking)}function mt(gt,St){if(at.disableAll(),St.instancing)at.enable(0);if(St.instancingColor)at.enable(1);if(St.instancingMorph)at.enable(2);if(St.matcap)at.enable(3);if(St.envMap)at.enable(4);if(St.normalMapObjectSpace)at.enable(5);if(St.normalMapTangentSpace)at.enable(6);if(St.clearcoat)at.enable(7);if(St.iridescence)at.enable(8);if(St.alphaTest)at.enable(9);if(St.vertexColors)at.enable(10);if(St.vertexAlphas)at.enable(11);if(St.vertexUv1s)at.enable(12);if(St.vertexUv2s)at.enable(13);if(St.vertexUv3s)at.enable(14);if(St.vertexTangents)at.enable(15);if(St.anisotropy)at.enable(16);if(St.alphaHash)at.enable(17);if(St.batching)at.enable(18);if(St.dispersion)at.enable(19);if(St.retroreflection)at.enable(24);if(St.diffuseRoughness)at.enable(25);if(St.batchingColor)at.enable(20);if(St.gradientMap)at.enable(21);if(St.packedNormalMap)at.enable(22);if(St.vertexNormals)at.enable(23);if(gt.push(at.mask),at.disableAll(),St.fog)at.enable(0);if(St.useFog)at.enable(1);if(St.flatShading)at.enable(2);if(St.logarithmicDepthBuffer)at.enable(3);if(St.reversedDepthBuffer)at.enable(4);if(St.skinning)at.enable(5);if(St.morphTargets)at.enable(6);if(St.morphNormals)at.enable(7);if(St.morphColors)at.enable(8);if(St.premultipliedAlpha)at.enable(9);if(St.shadowMapEnabled)at.enable(10);if(St.doubleSided)at.enable(11);if(St.flipSided)at.enable(12);if(St.useDepthPacking)at.enable(13);if(St.dithering)at.enable(14);if(St.transmission)at.enable(15);if(St.sheen)at.enable(16);if(St.opaque)at.enable(17);if(St.pointsUvs)at.enable(18);if(St.decodeVideoTexture)at.enable(19);if(St.decodeVideoTextureEmissive)at.enable(20);if(St.alphaToCoverage)at.enable(21);if(St.numLightProbeGrids>0)at.enable(22);if(St.hasPositionAttribute)at.enable(23);gt.push(at.mask)}function Et(gt){let St=ht[gt.type],It;if(St){let Bt=Jn[St];It=v.clone(Bt.uniforms)}else It=gt.uniforms;return It}function Tt(gt,St){let It=ut.get(St);if(It!==void 0)++It.usedTimes;else It=new yg(tt,St,gt,st),ct.push(It),ut.set(St,It);return It}function yt(gt){if(--gt.usedTimes===0){let St=ct.indexOf(gt);ct[St]=ct[ct.length-1],ct.pop(),ut.delete(gt.cacheKey),gt.destroy()}}function At(gt){ot.remove(gt)}function Rt(){ot.dispose()}return{getParameters:xt,getProgramCacheKey:Mt,getUniforms:Et,acquireProgram:Tt,releaseProgram:yt,releaseShaderCache:At,programs:ct,dispose:Rt}}function Tg(){let tt=new WeakMap;function et(at){return tt.has(at)}function nt(at){let ot=tt.get(at);if(ot===void 0)ot={},tt.set(at,ot);return ot}function it(at){tt.delete(at)}function st(at,ot,lt){tt.get(at)[ot]=lt}function rt(){tt=new WeakMap}return{has:et,get:nt,remove:it,update:st,dispose:rt}}function Eg(tt,et){if(tt.groupOrder!==et.groupOrder)return tt.groupOrder-et.groupOrder;else if(tt.renderOrder!==et.renderOrder)return tt.renderOrder-et.renderOrder;else if(tt.material.id!==et.material.id)return tt.material.id-et.material.id;else if(tt.materialVariant!==et.materialVariant)return tt.materialVariant-et.materialVariant;else if(tt.z!==et.z)return tt.z-et.z;else return tt.id-et.id}function dh(tt,et){if(tt.groupOrder!==et.groupOrder)return tt.groupOrder-et.groupOrder;else if(tt.renderOrder!==et.renderOrder)return tt.renderOrder-et.renderOrder;else if(tt.z!==et.z)return et.z-tt.z;else return tt.id-et.id}function fh(){let tt=[],et=0,nt=[],it=[],st=[];function rt(){et=0,nt.length=0,it.length=0,st.length=0}function at(ht){let pt=0;if(ht.isInstancedMesh)pt+=2;if(ht.isSkinnedMesh)pt+=1;return pt}function ot(ht,pt,xt,Mt,ft,mt){let Et=tt[et];if(Et===void 0)Et={id:ht.id,object:ht,geometry:pt,material:xt,materialVariant:at(ht),groupOrder:Mt,renderOrder:ht.renderOrder,z:ft,group:mt},tt[et]=Et;else Et.id=ht.id,Et.object=ht,Et.geometry=pt,Et.material=xt,Et.materialVariant=at(ht),Et.groupOrder=Mt,Et.renderOrder=ht.renderOrder,Et.z=ft,Et.group=mt;return et++,Et}function lt(ht,pt,xt,Mt,ft,mt,Et){if(Et.reversedDepth===!0)ft=-ft;let Tt=ot(ht,pt,xt,Mt,ft,mt);if(xt.transmission>0)it.push(Tt);else if(xt.transparent===!0)st.push(Tt);else nt.push(Tt)}function ct(ht,pt,xt,Mt,ft,mt){let Et=ot(ht,pt,xt,Mt,ft,mt);if(xt.transmission>0)it.unshift(Et);else if(xt.transparent===!0)st.unshift(Et);else nt.unshift(Et)}function ut(ht,pt){if(nt.length>1)nt.sort(ht||Eg);if(it.length>1)it.sort(pt||dh);if(st.length>1)st.sort(pt||dh)}function dt(){for(let ht=et,pt=tt.length;ht<pt;ht++){let xt=tt[ht];if(xt.id===null)break;xt.id=null,xt.object=null,xt.geometry=null,xt.material=null,xt.group=null}}return{opaque:nt,transmissive:it,transparent:st,init:rt,push:lt,unshift:ct,finish:dt,sort:ut}}function Ag(){let tt=new WeakMap;function et(it,st){let rt=tt.get(it),at;if(rt===void 0)at=new fh,tt.set(it,[at]);else if(st>=rt.length)at=new fh,rt.push(at);else at=rt[st];return at}function nt(){tt=new WeakMap}return{get:et,dispose:nt}}function wg(){let tt={};return{get:function(et){if(tt[et.id]!==void 0)return tt[et.id];let nt;switch(et.type){case"SunLight":case"DirectionalLight":nt={direction:new e,color:new n};break;case"SpotLight":nt={position:new e,direction:new e,color:new n,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":nt={position:new e,color:new n,distance:0,decay:0};break;case"HemisphereLight":nt={direction:new e,skyColor:new n,groundColor:new n};break;case"RectAreaLight":nt={color:new n,position:new e,halfWidth:new e,halfHeight:new e};break}return tt[et.id]=nt,nt}}}function Rg(){let tt={};return{get:function(et){if(tt[et.id]!==void 0)return tt[et.id];let nt;switch(et.type){case"SunLight":case"DirectionalLight":nt={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new t};break;case"SpotLight":nt={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new t};break;case"PointLight":nt={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new t,shadowCameraNear:1,shadowCameraFar:1000};break}return tt[et.id]=nt,nt}}}var Cg=0;function Ig(tt,et){return(et.castShadow?2:0)-(tt.castShadow?2:0)+(et.map?1:0)-(tt.map?1:0)}function Pg(tt){let et=new wg,nt=Rg(),it={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let ct=0;ct<9;ct++)it.probe.push(new e);let st=new e,rt=new an,at=new an;function ot(ct){let ut=0,dt=0,ht=0;for(let zt=0;zt<9;zt++)it.probe[zt].set(0,0,0);let pt=0,xt=0,Mt=0,ft=0,mt=0,Et=0,Tt=0,yt=0,At=0,Rt=0,gt=0,St=0,It=0,Bt=0;ct.sort(Ig);for(let zt=0,$t=ct.length;zt<$t;zt++){let wt=ct[zt],{color:Vt,intensity:Xt,distance:Ft}=wt,se=null;if(wt.shadow&&wt.shadow.map)if(wt.shadow.map.texture.format===Li)se=wt.shadow.map.texture;else se=wt.shadow.map.depthTexture||wt.shadow.map.texture;if(wt.isAmbientLight)ut+=Vt.r*Xt,dt+=Vt.g*Xt,ht+=Vt.b*Xt;else if(wt.isLightProbe){for(let Ht=0;Ht<9;Ht++)it.probe[Ht].addScaledVector(wt.sh.coefficients[Ht],Xt);Bt++}else if(wt.isSunLight){let Ht=et.get(wt);if(Ht.color.copy(wt.color).multiplyScalar(wt.intensity),wt.castShadow){let Jt=wt.shadow,te=nt.get(wt);te.shadowIntensity=Jt.intensity,te.shadowBias=Jt.bias,te.shadowNormalBias=Jt.normalBias,te.shadowRadius=Jt.radius,te.shadowMapSize.copy(Jt.mapSize).multiply(Jt.getFrameExtents()),it.sunShadow[xt]=te,it.sunShadowMap[xt]=se;let Se=Jt.getViewportCount();for(let Yt=0;Yt<Se;Yt++)it.sunShadowMatrix[Mt+Yt]=Jt.getMatrix(Yt),it.sunShadowCascade[Mt+Yt]=Jt._cascadeData[Yt];Mt+=Se,xt++}it.sun[pt]=Ht,pt++}else if(wt.isDirectionalLight){let Ht=et.get(wt);if(Ht.color.copy(wt.color).multiplyScalar(wt.intensity),wt.castShadow){let Jt=wt.shadow,te=nt.get(wt);te.shadowIntensity=Jt.intensity,te.shadowBias=Jt.bias,te.shadowNormalBias=Jt.normalBias,te.shadowRadius=Jt.radius,te.shadowMapSize=Jt.mapSize,it.directionalShadow[ft]=te,it.directionalShadowMap[ft]=se,it.directionalShadowMatrix[ft]=wt.shadow.matrix,At++}it.directional[ft]=Ht,ft++}else if(wt.isSpotLight){let Ht=et.get(wt);Ht.position.setFromMatrixPosition(wt.matrixWorld),Ht.color.copy(Vt).multiplyScalar(Xt),Ht.distance=Ft,Ht.coneCos=Math.cos(wt.angle),Ht.penumbraCos=Math.cos(wt.angle*(1-wt.penumbra)),Ht.decay=wt.decay,it.spot[Et]=Ht;let Jt=wt.shadow;if(wt.map){if(it.spotLightMap[St]=wt.map,St++,Jt.updateMatrices(wt),wt.castShadow)It++}if(it.spotLightMatrix[Et]=Jt.matrix,wt.castShadow){let te=nt.get(wt);te.shadowIntensity=Jt.intensity,te.shadowBias=Jt.bias,te.shadowNormalBias=Jt.normalBias,te.shadowRadius=Jt.radius,te.shadowMapSize=Jt.mapSize,it.spotShadow[Et]=te,it.spotShadowMap[Et]=se,gt++}Et++}else if(wt.isRectAreaLight){let Ht=et.get(wt);Ht.color.copy(Vt).multiplyScalar(Xt),Ht.halfWidth.set(wt.width*0.5,0,0),Ht.halfHeight.set(0,wt.height*0.5,0),it.rectArea[Tt]=Ht,Tt++}else if(wt.isPointLight){let Ht=et.get(wt);if(Ht.color.copy(wt.color).multiplyScalar(wt.intensity),Ht.distance=wt.distance,Ht.decay=wt.decay,wt.castShadow){let Jt=wt.shadow,te=nt.get(wt);te.shadowIntensity=Jt.intensity,te.shadowBias=Jt.bias,te.shadowNormalBias=Jt.normalBias,te.shadowRadius=Jt.radius,te.shadowMapSize=Jt.mapSize,te.shadowCameraNear=Jt.camera.near,te.shadowCameraFar=Jt.camera.far,it.pointShadow[mt]=te,it.pointShadowMap[mt]=se,it.pointShadowMatrix[mt]=wt.shadow.matrix,Rt++}it.point[mt]=Ht,mt++}else if(wt.isHemisphereLight){let Ht=et.get(wt);Ht.skyColor.copy(wt.color).multiplyScalar(Xt),Ht.groundColor.copy(wt.groundColor).multiplyScalar(Xt),it.hemi[yt]=Ht,yt++}}if(Tt>0)if(tt.has("OES_texture_float_linear")===!0)it.rectAreaLTC1=me.LTC_FLOAT_1,it.rectAreaLTC2=me.LTC_FLOAT_2;else it.rectAreaLTC1=me.LTC_HALF_1,it.rectAreaLTC2=me.LTC_HALF_2;it.ambient[0]=ut,it.ambient[1]=dt,it.ambient[2]=ht;let Lt=it.hash;if(Lt.sunLength!==pt||Lt.directionalLength!==ft||Lt.pointLength!==mt||Lt.spotLength!==Et||Lt.rectAreaLength!==Tt||Lt.hemiLength!==yt||Lt.numSunShadows!==xt||Lt.numDirectionalShadows!==At||Lt.numPointShadows!==Rt||Lt.numSpotShadows!==gt||Lt.numSpotMaps!==St||Lt.numLightProbes!==Bt)it.sun.length=pt,it.directional.length=ft,it.spot.length=Et,it.rectArea.length=Tt,it.point.length=mt,it.hemi.length=yt,it.sunShadow.length=xt,it.sunShadowMap.length=xt,it.sunShadowMatrix.length=Mt,it.sunShadowCascade.length=Mt,it.directionalShadow.length=At,it.directionalShadowMap.length=At,it.directionalShadowMatrix.length=At,it.pointShadow.length=Rt,it.pointShadowMap.length=Rt,it.pointShadowMatrix.length=Rt,it.spotShadow.length=gt,it.spotShadowMap.length=gt,it.spotLightMatrix.length=gt+St-It,it.spotLightMap.length=St,it.numSpotLightShadowsWithMaps=It,it.numLightProbes=Bt,Lt.sunLength=pt,Lt.directionalLength=ft,Lt.pointLength=mt,Lt.spotLength=Et,Lt.rectAreaLength=Tt,Lt.hemiLength=yt,Lt.numSunShadows=xt,Lt.numDirectionalShadows=At,Lt.numPointShadows=Rt,Lt.numSpotShadows=gt,Lt.numSpotMaps=St,Lt.numLightProbes=Bt,it.version=Cg++}function lt(ct,ut){let dt=0,ht=0,pt=0,xt=0,Mt=0,ft=0,mt=ut.matrixWorldInverse;for(let Et=0,Tt=ct.length;Et<Tt;Et++){let yt=ct[Et];if(yt.isSunLight){let At=it.sun[dt];At.direction.setFromMatrixPosition(yt.matrixWorld),At.direction.transformDirection(mt),dt++}else if(yt.isDirectionalLight){let At=it.directional[ht];At.direction.setFromMatrixPosition(yt.matrixWorld),st.setFromMatrixPosition(yt.target.matrixWorld),At.direction.sub(st),At.direction.transformDirection(mt),ht++}else if(yt.isSpotLight){let At=it.spot[xt];At.position.setFromMatrixPosition(yt.matrixWorld),At.position.applyMatrix4(mt),At.direction.setFromMatrixPosition(yt.matrixWorld),st.setFromMatrixPosition(yt.target.matrixWorld),At.direction.sub(st),At.direction.transformDirection(mt),xt++}else if(yt.isRectAreaLight){let At=it.rectArea[Mt];At.position.setFromMatrixPosition(yt.matrixWorld),At.position.applyMatrix4(mt),at.identity(),rt.copy(yt.matrixWorld),rt.premultiply(mt),at.extractRotation(rt),At.halfWidth.set(yt.width*0.5,0,0),At.halfHeight.set(0,yt.height*0.5,0),At.halfWidth.applyMatrix4(at),At.halfHeight.applyMatrix4(at),Mt++}else if(yt.isPointLight){let At=it.point[pt];At.position.setFromMatrixPosition(yt.matrixWorld),At.position.applyMatrix4(mt),pt++}else if(yt.isHemisphereLight){let At=it.hemi[ft];At.direction.setFromMatrixPosition(yt.matrixWorld),At.direction.transformDirection(mt),ft++}}}return{setup:ot,setupView:lt,state:it}}function ph(tt){let et=new Pg(tt),nt=[],it=[],st=[];function rt(dt){ut.camera=dt,nt.length=0,it.length=0,st.length=0}function at(dt){if(dt.isLightProbeGrid)st.push(dt);else nt.push(dt)}function ot(dt){it.push(dt)}function lt(){et.setup(nt),st.sort((dt,ht)=>dt.priority-ht.priority||dt.id-ht.id)}function ct(dt){et.setupView(nt,dt)}let ut={lightsArray:nt,shadowsArray:it,lightProbeGridArray:st,camera:null,lights:et,transmissionRenderTarget:{},textureUnits:0};return{init:rt,state:ut,setupLights:lt,setupLightsView:ct,pushLight:at,pushShadow:ot}}function Lg(tt){let et=new WeakMap;function nt(st,rt=0){let at=et.get(st),ot;if(at===void 0)ot=new ph(tt),et.set(st,[ot]);else if(rt>=at.length)ot=new ph(tt),at.push(ot);else ot=at[rt];return ot}function it(){et=new WeakMap}return{get:nt,dispose:it}}var Ng=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Dg=`uniform sampler2D shadow_pass;
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
}`,Ug=[new e(1,0,0),new e(-1,0,0),new e(0,1,0),new e(0,-1,0),new e(0,0,1),new e(0,0,-1)],Fg=[new e(0,-1,0),new e(0,-1,0),new e(0,0,1),new e(0,0,-1),new e(0,-1,0),new e(0,-1,0)],mh=new an,Os=new e,Yo=new e;function Og(tt,et,nt){let it=new Ci,st=new t,rt=new t,at=new un,ot=new Io,lt=new Po,ct={},ut=nt.maxTextureSize,dt={[rs]:u,[u]:rs,[qn]:qn},ht=new h({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new t},radius:{value:4}},vertexShader:Ng,fragmentShader:Dg}),pt=ht.clone();pt.defines.HORIZONTAL_PASS=1;let xt=new f;xt.setAttribute("position",new Vn(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let Mt=new a(xt,ht),ft=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ws;let mt=this.type;this.render=function(Rt,gt,St){if(ft.enabled===!1)return;if(ft.autoUpdate===!1&&ft.needsUpdate===!1)return;if(Rt.length===0)return;if(this.type===q)Oe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ws;let It=tt.getRenderTarget(),Bt=tt.getActiveCubeFace(),Lt=tt.getActiveMipmapLevel(),zt=tt.state;if(zt.setBlending(_),zt.buffers.depth.getReversed()===!0)zt.buffers.color.setClear(0,0,0,0);else zt.buffers.color.setClear(1,1,1,1);zt.buffers.depth.setTest(!0),zt.setScissorTest(!1);let $t=mt!==this.type;if($t)gt.traverse(function(wt){if(wt.material)if(Array.isArray(wt.material))wt.material.forEach((Vt)=>Vt.needsUpdate=!0);else wt.material.needsUpdate=!0});for(let wt=0,Vt=Rt.length;wt<Vt;wt++){let Xt=Rt[wt],Ft=Xt.shadow;if(Ft===void 0){Oe("WebGLShadowMap:",Xt,"has no shadow.");continue}if(Ft.autoUpdate===!1&&Ft.needsUpdate===!1)continue;st.copy(Ft.mapSize);let se=Ft.getFrameExtents();if(st.multiply(se),rt.copy(Ft.mapSize),st.x>ut||st.y>ut){if(st.x>ut)rt.x=Math.floor(ut/se.x),st.x=rt.x*se.x,Ft.mapSize.x=rt.x;if(st.y>ut)rt.y=Math.floor(ut/se.y),st.y=rt.y*se.y,Ft.mapSize.y=rt.y}let Ht=tt.state.buffers.depth.getReversed();if(Ft.camera._reversedDepth=Ht,Ft.map===null||$t===!0){if(Ft.map!==null){if(Ft.map.depthTexture!==null)Ft.map.depthTexture.dispose(),Ft.map.depthTexture=null;Ft.map.dispose()}if(this.type===ss){if(Xt.isPointLight){Oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Ft.map=new c(st.x,st.y,{format:Li,type:d,minFilter:Dn,magFilter:Dn,generateMipmaps:!1}),Ft.map.texture.name=Xt.name+".shadowMap",Ft.map.depthTexture=new yi(st.x,st.y,si),Ft.map.depthTexture.name=Xt.name+".shadowMapDepth",Ft.map.depthTexture.format=ls,Ft.map.depthTexture.compareFunction=null,Ft.map.depthTexture.minFilter=gi,Ft.map.depthTexture.magFilter=gi}else{if(Xt.isPointLight)Ft.map=new Hr(st.x),Ft.map.depthTexture=new Pr(st.x,xi);else Ft.map=new c(st.x,st.y),Ft.map.depthTexture=new yi(st.x,st.y,xi);if(Ft.map.depthTexture.name=Xt.name+".shadowMap",Ft.map.depthTexture.format=ls,this.type===ws)Ft.map.depthTexture.compareFunction=Ht?co:lo,Ft.map.depthTexture.minFilter=Dn,Ft.map.depthTexture.magFilter=Dn;else Ft.map.depthTexture.compareFunction=null,Ft.map.depthTexture.minFilter=gi,Ft.map.depthTexture.magFilter=gi}Ft.camera.updateProjectionMatrix()}if(Ft.map.isWebGLCubeRenderTarget!==!0&&(Ft.map.width!==st.x||Ft.map.height!==st.y))Ft.map.setSize(st.x,st.y);let Jt=Ft.map.isWebGLCubeRenderTarget?6:Ft.getViewportCount();if(Xt.isPointLight!==!0)Ft.updateMatrices(Xt,St);let te=(Ft.camera.layers.mask&4294967294)!==0?Ft.camera.layers:St.layers;for(let Se=0;Se<Jt;Se++){let Yt=Ft.getCamera(Se);if(Xt.isPointLight){let{camera:ne,matrix:be}=Ft,Pe=Xt.distance||ne.far;if(Pe!==ne.far)ne.far=Pe,ne.updateProjectionMatrix();Os.setFromMatrixPosition(Xt.matrixWorld),ne.position.copy(Os),Yo.copy(ne.position),Yo.add(Ug[Se]),ne.up.copy(Fg[Se]),ne.lookAt(Yo),ne.updateMatrixWorld(),be.makeTranslation(-Os.x,-Os.y,-Os.z),mh.multiplyMatrices(ne.projectionMatrix,ne.matrixWorldInverse),Ft._frustum.setFromProjectionMatrix(mh,ne.coordinateSystem,ne.reversedDepth)}if(Ft.map.isWebGLCubeRenderTarget)tt.setRenderTarget(Ft.map,Se),tt.clear();else{if(Se===0)tt.setRenderTarget(Ft.map),tt.clear();let ne=Ft.getViewport(Se);at.set(rt.x*ne.x,rt.y*ne.y,rt.x*ne.z,rt.y*ne.w),zt.viewport(at)}it=Ft.getFrustum(Se),yt(gt,St,Yt,Xt,te,this.type)}if(Ft.isPointLightShadow!==!0&&this.type===ss)Et(Ft,St);Ft.needsUpdate=!1}mt=this.type,ft.needsUpdate=!1,tt.setRenderTarget(It,Bt,Lt)};function Et(Rt,gt){let St=et.update(Mt);if(ht.defines.VSM_SAMPLES!==Rt.blurSamples)ht.defines.VSM_SAMPLES=Rt.blurSamples,pt.defines.VSM_SAMPLES=Rt.blurSamples,ht.needsUpdate=!0,pt.needsUpdate=!0;if(Rt.mapPass===null)Rt.mapPass=new c(st.x,st.y,{format:Li,type:d});else if(Rt.mapPass.width!==Rt.map.width||Rt.mapPass.height!==Rt.map.height)Rt.mapPass.setSize(Rt.map.width,Rt.map.height);ht.uniforms.shadow_pass.value=Rt.map.depthTexture,ht.uniforms.resolution.value.set(Rt.map.width,Rt.map.height),ht.uniforms.radius.value=Rt.radius,tt.setRenderTarget(Rt.mapPass),tt.clear(),tt.renderBufferDirect(gt,null,St,ht,Mt,null),pt.uniforms.shadow_pass.value=Rt.mapPass.texture,pt.uniforms.resolution.value.set(Rt.map.width,Rt.map.height),pt.uniforms.radius.value=Rt.radius,tt.setRenderTarget(Rt.map),tt.clear(),tt.renderBufferDirect(gt,null,St,pt,Mt,null)}function Tt(Rt,gt,St,It){let Bt=null,Lt=St.isPointLight===!0?Rt.customDistanceMaterial:Rt.customDepthMaterial;if(Lt!==void 0)Bt=Lt;else if(Bt=St.isPointLight===!0?lt:ot,tt.localClippingEnabled&&gt.clipShadows===!0&&Array.isArray(gt.clippingPlanes)&&gt.clippingPlanes.length!==0||gt.displacementMap&&gt.displacementScale!==0||gt.alphaMap&&gt.alphaTest>0||gt.map&&gt.alphaTest>0||gt.alphaToCoverage===!0){let zt=Bt.uuid,$t=gt.uuid,wt=ct[zt];if(wt===void 0)wt={},ct[zt]=wt;let Vt=wt[$t];if(Vt===void 0)Vt=Bt.clone(),wt[$t]=Vt,gt.addEventListener("dispose",At);Bt=Vt}if(Bt.visible=gt.visible,Bt.wireframe=gt.wireframe,It===ss)Bt.side=gt.shadowSide!==null?gt.shadowSide:gt.side;else Bt.side=gt.shadowSide!==null?gt.shadowSide:dt[gt.side];if(Bt.alphaMap=gt.alphaMap,Bt.alphaTest=gt.alphaToCoverage===!0?0.5:gt.alphaTest,Bt.map=gt.map,Bt.clipShadows=gt.clipShadows,Bt.clippingPlanes=gt.clippingPlanes,Bt.clipIntersection=gt.clipIntersection,Bt.displacementMap=gt.displacementMap,Bt.displacementScale=gt.displacementScale,Bt.displacementBias=gt.displacementBias,Bt.wireframeLinewidth=gt.wireframeLinewidth,Bt.linewidth=gt.linewidth,St.isPointLight===!0&&Bt.isMeshDistanceMaterial===!0){let zt=tt.properties.get(Bt);zt.light=St}return Bt}function yt(Rt,gt,St,It,Bt,Lt){if(Rt.visible===!1)return;if(Rt.layers.test(Bt)&&(Rt.isMesh||Rt.isLine||Rt.isPoints)){if((Rt.castShadow||Rt.receiveShadow&&Lt===ss)&&(!Rt.frustumCulled||Rt.intersectsFrustum(it))){Rt.modelViewMatrix.multiplyMatrices(St.matrixWorldInverse,Rt.matrixWorld);let wt=et.update(Rt),Vt=Rt.material;if(Array.isArray(Vt)){let Xt=wt.groups;for(let Ft=0,se=Xt.length;Ft<se;Ft++){let Ht=Xt[Ft],Jt=Vt[Ht.materialIndex];if(Jt&&Jt.visible){let te=Tt(Rt,Jt,It,Lt);Rt.onBeforeShadow(tt,Rt,gt,St,wt,te,Ht),tt.renderBufferDirect(St,null,wt,te,Rt,Ht),Rt.onAfterShadow(tt,Rt,gt,St,wt,te,Ht)}}}else if(Vt.visible){let Xt=Tt(Rt,Vt,It,Lt);Rt.onBeforeShadow(tt,Rt,gt,St,wt,Xt,null),tt.renderBufferDirect(St,null,wt,Xt,Rt,null),Rt.onAfterShadow(tt,Rt,gt,St,wt,Xt,null)}}}let $t=Rt.children;for(let wt=0,Vt=$t.length;wt<Vt;wt++)yt($t[wt],gt,St,It,Bt,Lt)}function At(Rt){Rt.target.removeEventListener("dispose",At);for(let St in ct){let It=ct[St],Bt=Rt.target.uuid;if(Bt in It)It[Bt].dispose(),delete It[Bt]}}}function Bg(tt,et){function nt(){let Ct=!1,qt=new un,Wt=null,ie=new un(0,0,0,0);return{setMask:function(ae){if(Wt!==ae&&!Ct)tt.colorMask(ae,ae,ae,ae),Wt=ae},setLocked:function(ae){Ct=ae},setClear:function(ae,fe,Ie,Re,ge){if(ge===!0)ae*=Re,fe*=Re,Ie*=Re;if(qt.set(ae,fe,Ie,Re),ie.equals(qt)===!1)tt.clearColor(ae,fe,Ie,Re),ie.copy(qt)},reset:function(){Ct=!1,Wt=null,ie.set(-1,0,0,0)}}}function it(){let Ct=!1,qt=!1,Wt=null,ie=null,ae=null;return{setReversed:function(fe){if(qt!==fe){let Ie=et.get("EXT_clip_control");if(fe)Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT);else Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT);qt=fe;let Re=ae;ae=null,this.setClear(Re)}},getReversed:function(){return qt},setTest:function(fe){if(fe)ve(tt.DEPTH_TEST);else Qe(tt.DEPTH_TEST)},setMask:function(fe){if(Wt!==fe&&!Ct)tt.depthMask(fe),Wt=fe},setFunc:function(fe){if(qt)fe=Dc[fe];if(ie!==fe){switch(fe){case ac:tt.depthFunc(tt.NEVER);break;case oc:tt.depthFunc(tt.ALWAYS);break;case lc:tt.depthFunc(tt.LESS);break;case Ma:tt.depthFunc(tt.LEQUAL);break;case cc:tt.depthFunc(tt.EQUAL);break;case hc:tt.depthFunc(tt.GEQUAL);break;case uc:tt.depthFunc(tt.GREATER);break;case dc:tt.depthFunc(tt.NOTEQUAL);break;default:tt.depthFunc(tt.LEQUAL)}ie=fe}},setLocked:function(fe){Ct=fe},setClear:function(fe){if(ae!==fe){if(ae=fe,qt)fe=1-fe;tt.clearDepth(fe)}},reset:function(){Ct=!1,Wt=null,ie=null,ae=null,qt=!1}}}function st(){let Ct=!1,qt=null,Wt=null,ie=null,ae=null,fe=null,Ie=null,Re=null,ge=null;return{setTest:function(Ne){if(!Ct)if(Ne)ve(tt.STENCIL_TEST);else Qe(tt.STENCIL_TEST)},setMask:function(Ne){if(qt!==Ne&&!Ct)tt.stencilMask(Ne),qt=Ne},setFunc:function(Ne,We,_e){if(Wt!==Ne||ie!==We||ae!==_e)tt.stencilFunc(Ne,We,_e),Wt=Ne,ie=We,ae=_e},setOp:function(Ne,We,_e){if(fe!==Ne||Ie!==We||Re!==_e)tt.stencilOp(Ne,We,_e),fe=Ne,Ie=We,Re=_e},setLocked:function(Ne){Ct=Ne},setClear:function(Ne){if(ge!==Ne)tt.clearStencil(Ne),ge=Ne},reset:function(){Ct=!1,qt=null,Wt=null,ie=null,ae=null,fe=null,Ie=null,Re=null,ge=null}}}let rt=new nt,at=new it,ot=new st,lt={},ct=new WeakMap,ut={},dt={},ht={},pt=new WeakMap,xt=[],Mt=null,ft=!1,mt=null,Et=null,Tt=null,yt=null,At=null,Rt=null,gt=null,St=new n(0,0,0),It=0,Bt=!1,Lt=null,zt=null,$t=null,wt=null,Vt=null,Xt=tt.getParameter(tt.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Ft=!1,se=0,Ht=tt.getParameter(tt.VERSION);if(Ht.indexOf("WebGL")!==-1)se=parseFloat(/^WebGL (\d)/.exec(Ht)[1]),Ft=se>=1;else if(Ht.indexOf("OpenGL ES")!==-1)se=parseFloat(/^OpenGL ES (\d)/.exec(Ht)[1]),Ft=se>=2;let Jt=null,te={},Se=tt.getParameter(tt.SCISSOR_BOX),Yt=tt.getParameter(tt.VIEWPORT),ne=new un().fromArray(Se),be=new un().fromArray(Yt);function Pe(Ct,qt,Wt,ie){let ae=new Uint8Array(4),fe=tt.createTexture();tt.bindTexture(Ct,fe),tt.texParameteri(Ct,tt.TEXTURE_MIN_FILTER,tt.NEAREST),tt.texParameteri(Ct,tt.TEXTURE_MAG_FILTER,tt.NEAREST);for(let Ie=0;Ie<Wt;Ie++)if(Ct===tt.TEXTURE_3D||Ct===tt.TEXTURE_2D_ARRAY)tt.texImage3D(qt,0,tt.RGBA,1,1,ie,0,tt.RGBA,tt.UNSIGNED_BYTE,ae);else tt.texImage2D(qt+Ie,0,tt.RGBA,1,1,0,tt.RGBA,tt.UNSIGNED_BYTE,ae);return fe}let Le={};Le[tt.TEXTURE_2D]=Pe(tt.TEXTURE_2D,tt.TEXTURE_2D,1),Le[tt.TEXTURE_CUBE_MAP]=Pe(tt.TEXTURE_CUBE_MAP,tt.TEXTURE_CUBE_MAP_POSITIVE_X,6),Le[tt.TEXTURE_2D_ARRAY]=Pe(tt.TEXTURE_2D_ARRAY,tt.TEXTURE_2D_ARRAY,1,1),Le[tt.TEXTURE_3D]=Pe(tt.TEXTURE_3D,tt.TEXTURE_3D,1,1),rt.setClear(0,0,0,1),at.setClear(1),ot.setClear(0),ve(tt.DEPTH_TEST),at.setFunc(Ma),ye(!1),De(va),ve(tt.CULL_FACE),le(_);function ve(Ct){if(ut[Ct]!==!0)tt.enable(Ct),ut[Ct]=!0}function Qe(Ct){if(ut[Ct]!==!1)tt.disable(Ct),ut[Ct]=!1}function Ve(Ct,qt){if(ht[Ct]!==qt){if(tt.bindFramebuffer(Ct,qt),ht[Ct]=qt,Ct===tt.DRAW_FRAMEBUFFER)ht[tt.FRAMEBUFFER]=qt;if(Ct===tt.FRAMEBUFFER)ht[tt.DRAW_FRAMEBUFFER]=qt;return!0}return!1}function Fe(Ct,qt){let Wt=xt,ie=!1;if(Ct){if(Wt=pt.get(qt),Wt===void 0)Wt=[],pt.set(qt,Wt);let ae=Ct.textures;if(Wt.length!==ae.length||Wt[0]!==tt.COLOR_ATTACHMENT0){for(let fe=0,Ie=ae.length;fe<Ie;fe++)Wt[fe]=tt.COLOR_ATTACHMENT0+fe;Wt.length=ae.length,ie=!0}}else if(Wt[0]!==tt.BACK)Wt[0]=tt.BACK,ie=!0;if(ie)tt.drawBuffers(Wt)}function Ke(Ct){if(Mt!==Ct)return tt.useProgram(Ct),Mt=Ct,!0;return!1}let Kt={[as]:tt.FUNC_ADD,[kl]:tt.FUNC_SUBTRACT,[Hl]:tt.FUNC_REVERSE_SUBTRACT};Kt[Wl]=tt.MIN,Kt[Vl]=tt.MAX;let re={[Xl]:tt.ZERO,[ql]:tt.ONE,[Yl]:tt.SRC_COLOR,[Jl]:tt.SRC_ALPHA,[ec]:tt.SRC_ALPHA_SATURATE,[jl]:tt.DST_COLOR,[Kl]:tt.DST_ALPHA,[Zl]:tt.ONE_MINUS_SRC_COLOR,[$l]:tt.ONE_MINUS_SRC_ALPHA,[tc]:tt.ONE_MINUS_DST_COLOR,[Ql]:tt.ONE_MINUS_DST_ALPHA,[nc]:tt.CONSTANT_COLOR,[ic]:tt.ONE_MINUS_CONSTANT_COLOR,[sc]:tt.CONSTANT_ALPHA,[rc]:tt.ONE_MINUS_CONSTANT_ALPHA};function le(Ct,qt,Wt,ie,ae,fe,Ie,Re,ge,Ne){if(Ct===_){if(ft===!0)Qe(tt.BLEND),ft=!1;return}if(ft===!1)ve(tt.BLEND),ft=!0;if(Ct!==Gl){if(Ct!==mt||Ne!==Bt){if(Et!==as||At!==as)tt.blendEquation(tt.FUNC_ADD),Et=as,At=as;if(Ne)switch(Ct){case Rs:tt.blendFuncSeparate(tt.ONE,tt.ONE_MINUS_SRC_ALPHA,tt.ONE,tt.ONE_MINUS_SRC_ALPHA);break;case I:tt.blendFunc(tt.ONE,tt.ONE);break;case ya:tt.blendFuncSeparate(tt.ZERO,tt.ONE_MINUS_SRC_COLOR,tt.ZERO,tt.ONE);break;case Sa:tt.blendFuncSeparate(tt.DST_COLOR,tt.ONE_MINUS_SRC_ALPHA,tt.ZERO,tt.ONE);break;default:Be("WebGLState: Invalid blending: ",Ct);break}else switch(Ct){case Rs:tt.blendFuncSeparate(tt.SRC_ALPHA,tt.ONE_MINUS_SRC_ALPHA,tt.ONE,tt.ONE_MINUS_SRC_ALPHA);break;case I:tt.blendFuncSeparate(tt.SRC_ALPHA,tt.ONE,tt.ONE,tt.ONE);break;case ya:Be("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Sa:Be("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Be("WebGLState: Invalid blending: ",Ct);break}Tt=null,yt=null,Rt=null,gt=null,St.set(0,0,0),It=0,mt=Ct,Bt=Ne}return}if(ae=ae||qt,fe=fe||Wt,Ie=Ie||ie,qt!==Et||ae!==At)tt.blendEquationSeparate(Kt[qt],Kt[ae]),Et=qt,At=ae;if(Wt!==Tt||ie!==yt||fe!==Rt||Ie!==gt)tt.blendFuncSeparate(re[Wt],re[ie],re[fe],re[Ie]),Tt=Wt,yt=ie,Rt=fe,gt=Ie;if(Re.equals(St)===!1||ge!==It)tt.blendColor(Re.r,Re.g,Re.b,ge),St.copy(Re),It=ge;mt=Ct,Bt=!1}function Me(Ct,qt){Ct.side===qn?Qe(tt.CULL_FACE):ve(tt.CULL_FACE);let Wt=Ct.side===u;if(qt)Wt=!Wt;ye(Wt),Ct.blending===Rs&&Ct.transparent===!1?le(_):le(Ct.blending,Ct.blendEquation,Ct.blendSrc,Ct.blendDst,Ct.blendEquationAlpha,Ct.blendSrcAlpha,Ct.blendDstAlpha,Ct.blendColor,Ct.blendAlpha,Ct.premultipliedAlpha),at.setFunc(Ct.depthFunc),at.setTest(Ct.depthTest),at.setMask(Ct.depthWrite),rt.setMask(Ct.colorWrite);let ie=Ct.stencilWrite;if(ot.setTest(ie),ie)ot.setMask(Ct.stencilWriteMask),ot.setFunc(Ct.stencilFunc,Ct.stencilRef,Ct.stencilFuncMask),ot.setOp(Ct.stencilFail,Ct.stencilZFail,Ct.stencilZPass);qe(Ct.polygonOffset,Ct.polygonOffsetFactor,Ct.polygonOffsetUnits),Ct.alphaToCoverage===!0?ve(tt.SAMPLE_ALPHA_TO_COVERAGE):Qe(tt.SAMPLE_ALPHA_TO_COVERAGE)}function ye(Ct){if(Lt!==Ct){if(Ct)tt.frontFace(tt.CW);else tt.frontFace(tt.CCW);Lt=Ct}}function De(Ct){if(Ct!==Bl){if(ve(tt.CULL_FACE),Ct!==zt)if(Ct===va)tt.cullFace(tt.BACK);else if(Ct===zl)tt.cullFace(tt.FRONT);else tt.cullFace(tt.FRONT_AND_BACK)}else Qe(tt.CULL_FACE);zt=Ct}function Ce(Ct){if(Ct!==$t){if(Ft)tt.lineWidth(Ct);$t=Ct}}function qe(Ct,qt,Wt){if(Ct){if(ve(tt.POLYGON_OFFSET_FILL),wt!==qt||Vt!==Wt){if(wt=qt,Vt=Wt,at.getReversed())qt=-qt,Wt=-Wt;tt.polygonOffset(qt,Wt)}}else Qe(tt.POLYGON_OFFSET_FILL)}function Ye(Ct){if(Ct)ve(tt.SCISSOR_TEST);else Qe(tt.SCISSOR_TEST)}function tn(Ct){if(Ct===void 0)Ct=tt.TEXTURE0+Xt-1;if(Jt!==Ct)tt.activeTexture(Ct),Jt=Ct}function Nt(Ct,qt,Wt){if(Wt===void 0)if(Jt===null)Wt=tt.TEXTURE0+Xt-1;else Wt=Jt;let ie=te[Wt];if(ie===void 0)ie={type:void 0,texture:void 0},te[Wt]=ie;if(ie.type!==Ct||ie.texture!==qt){if(Jt!==Wt)tt.activeTexture(Wt),Jt=Wt;tt.bindTexture(Ct,qt||Le[Ct]),ie.type=Ct,ie.texture=qt}}function mn(){let Ct=te[Jt];if(Ct!==void 0&&Ct.type!==void 0)tt.bindTexture(Ct.type,null),Ct.type=void 0,Ct.texture=void 0}function He(){try{tt.compressedTexImage2D(...arguments)}catch(Ct){Be("WebGLState:",Ct)}}function dn(){try{tt.compressedTexImage3D(...arguments)}catch(Ct){Be("WebGLState:",Ct)}}function pe(){try{tt.texSubImage2D(...arguments)}catch(Ct){Be("WebGLState:",Ct)}}function nn(){try{tt.texSubImage3D(...arguments)}catch(Ct){Be("WebGLState:",Ct)}}function Ue(){try{tt.compressedTexSubImage2D(...arguments)}catch(Ct){Be("WebGLState:",Ct)}}function ze(){try{tt.compressedTexSubImage3D(...arguments)}catch(Ct){Be("WebGLState:",Ct)}}function gn(){try{tt.texStorage2D(...arguments)}catch(Ct){Be("WebGLState:",Ct)}}function bt(){try{tt.texStorage3D(...arguments)}catch(Ct){Be("WebGLState:",Ct)}}function _t(){try{tt.texImage2D(...arguments)}catch(Ct){Be("WebGLState:",Ct)}}function Dt(){try{tt.texImage3D(...arguments)}catch(Ct){Be("WebGLState:",Ct)}}function jt(Ct){if(dt[Ct]!==void 0)return dt[Ct];else return tt.getParameter(Ct)}function Qt(Ct,qt){if(dt[Ct]!==qt)tt.pixelStorei(Ct,qt),dt[Ct]=qt}function oe(Ct){if(ne.equals(Ct)===!1)tt.scissor(Ct.x,Ct.y,Ct.z,Ct.w),ne.copy(Ct)}function ue(Ct){if(be.equals(Ct)===!1)tt.viewport(Ct.x,Ct.y,Ct.z,Ct.w),be.copy(Ct)}function kt(Ct,qt){let Wt=ct.get(qt);if(Wt===void 0)Wt=new WeakMap,ct.set(qt,Wt);let ie=Wt.get(Ct);if(ie===void 0)ie=tt.getUniformBlockIndex(qt,Ct.name),tt.uniformBlockBinding(qt,ie,ie),Wt.set(Ct,ie)}function Zt(Ct,qt,Wt){let ae=ct.get(qt).get(Ct);if(lt[ae]!==Wt)tt.bindBufferBase(tt.UNIFORM_BUFFER,ae,Wt),lt[ae]=Wt}function ce(){tt.disable(tt.BLEND),tt.disable(tt.CULL_FACE),tt.disable(tt.DEPTH_TEST),tt.disable(tt.POLYGON_OFFSET_FILL),tt.disable(tt.SCISSOR_TEST),tt.disable(tt.STENCIL_TEST),tt.disable(tt.SAMPLE_ALPHA_TO_COVERAGE),tt.blendEquation(tt.FUNC_ADD),tt.blendFunc(tt.ONE,tt.ZERO),tt.blendFuncSeparate(tt.ONE,tt.ZERO,tt.ONE,tt.ZERO),tt.blendColor(0,0,0,0),tt.colorMask(!0,!0,!0,!0),tt.clearColor(0,0,0,0),tt.depthMask(!0),tt.depthFunc(tt.LESS),at.setReversed(!1),tt.clearDepth(1),tt.stencilMask(4294967295),tt.stencilFunc(tt.ALWAYS,0,4294967295),tt.stencilOp(tt.KEEP,tt.KEEP,tt.KEEP),tt.clearStencil(0),tt.cullFace(tt.BACK),tt.frontFace(tt.CCW),tt.polygonOffset(0,0),tt.activeTexture(tt.TEXTURE0),tt.bindFramebuffer(tt.FRAMEBUFFER,null),tt.bindFramebuffer(tt.DRAW_FRAMEBUFFER,null),tt.bindFramebuffer(tt.READ_FRAMEBUFFER,null),tt.useProgram(null),tt.lineWidth(1),tt.scissor(0,0,tt.canvas.width,tt.canvas.height),tt.viewport(0,0,tt.canvas.width,tt.canvas.height),tt.pixelStorei(tt.PACK_ALIGNMENT,4),tt.pixelStorei(tt.UNPACK_ALIGNMENT,4),tt.pixelStorei(tt.UNPACK_FLIP_Y_WEBGL,!1),tt.pixelStorei(tt.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),tt.pixelStorei(tt.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt.BROWSER_DEFAULT_WEBGL),tt.pixelStorei(tt.PACK_ROW_LENGTH,0),tt.pixelStorei(tt.PACK_SKIP_PIXELS,0),tt.pixelStorei(tt.PACK_SKIP_ROWS,0),tt.pixelStorei(tt.UNPACK_ROW_LENGTH,0),tt.pixelStorei(tt.UNPACK_IMAGE_HEIGHT,0),tt.pixelStorei(tt.UNPACK_SKIP_PIXELS,0),tt.pixelStorei(tt.UNPACK_SKIP_ROWS,0),tt.pixelStorei(tt.UNPACK_SKIP_IMAGES,0),ut={},dt={},Jt=null,te={},ht={},lt={},pt=new WeakMap,xt=[],Mt=null,ft=!1,mt=null,Et=null,Tt=null,yt=null,At=null,Rt=null,gt=null,St=new n(0,0,0),It=0,Bt=!1,Lt=null,zt=null,$t=null,wt=null,Vt=null,ne.set(0,0,tt.canvas.width,tt.canvas.height),be.set(0,0,tt.canvas.width,tt.canvas.height),rt.reset(),at.reset(),ot.reset()}return{buffers:{color:rt,depth:at,stencil:ot},enable:ve,disable:Qe,bindFramebuffer:Ve,drawBuffers:Fe,useProgram:Ke,setBlending:le,setMaterial:Me,setFlipSided:ye,setCullFace:De,setLineWidth:Ce,setPolygonOffset:qe,setScissorTest:Ye,activeTexture:tn,bindTexture:Nt,unbindTexture:mn,compressedTexImage2D:He,compressedTexImage3D:dn,texImage2D:_t,texImage3D:Dt,pixelStorei:Qt,getParameter:jt,updateUBOMapping:kt,uniformBlockBinding:Zt,texStorage2D:gn,texStorage3D:bt,texSubImage2D:pe,texSubImage3D:nn,compressedTexSubImage2D:Ue,compressedTexSubImage3D:ze,scissor:oe,viewport:ue,reset:ce}}function zg(tt,et,nt,it,st,rt,at){let ot=et.has("WEBGL_multisampled_render_to_texture")?et.get("WEBGL_multisampled_render_to_texture"):null,lt=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),ct=new t,ut=new WeakMap,dt=new Set,ht,pt=new WeakMap,xt=new Set,Mt=new FinalizationRegistry((bt)=>xt.delete(bt)),ft=!1;try{ft=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(bt){}function mt(bt,_t){return ft?new OffscreenCanvas(bt,_t):bs("canvas")}function Et(bt,_t,Dt){let jt=1,Qt=gn(bt);if(Qt.width>Dt||Qt.height>Dt)jt=Dt/Math.max(Qt.width,Qt.height);if(jt<1)if(typeof HTMLImageElement<"u"&&bt instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&bt instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&bt instanceof ImageBitmap||typeof VideoFrame<"u"&&bt instanceof VideoFrame){let oe=Math.floor(jt*Qt.width),ue=Math.floor(jt*Qt.height);if(ht===void 0)ht=mt(oe,ue);let kt=_t?mt(oe,ue):ht;return kt.width=oe,kt.height=ue,kt.getContext("2d").drawImage(bt,0,0,oe,ue),Oe("WebGLRenderer: Texture has been resized from ("+Qt.width+"x"+Qt.height+") to ("+oe+"x"+ue+")."),kt}else{if("data"in bt)Oe("WebGLRenderer: Image in DataTexture is too big ("+Qt.width+"x"+Qt.height+").");return bt}return bt}function Tt(bt){return bt.generateMipmaps}function yt(bt){tt.generateMipmap(bt)}function At(bt){if(bt.isWebGLCubeRenderTarget)return tt.TEXTURE_CUBE_MAP;if(bt.isWebGL3DRenderTarget)return tt.TEXTURE_3D;if(bt.isWebGLArrayRenderTarget||bt.isCompressedArrayTexture)return tt.TEXTURE_2D_ARRAY;return tt.TEXTURE_2D}function Rt(bt,_t,Dt,jt,Qt,oe=!1){if(bt!==null){if(tt[bt]!==void 0)return tt[bt];Oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+bt+"'")}let ue;if(jt){if(ue=et.get("EXT_texture_norm16"),!ue)Oe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let kt=_t;if(_t===tt.RED){if(Dt===tt.FLOAT)kt=tt.R32F;if(Dt===tt.HALF_FLOAT)kt=tt.R16F;if(Dt===tt.UNSIGNED_BYTE)kt=tt.R8;if(Dt===tt.UNSIGNED_SHORT&&ue)kt=ue.R16_EXT;if(Dt===tt.SHORT&&ue)kt=ue.R16_SNORM_EXT}if(_t===tt.RED_INTEGER){if(Dt===tt.UNSIGNED_BYTE)kt=tt.R8UI;if(Dt===tt.UNSIGNED_SHORT)kt=tt.R16UI;if(Dt===tt.UNSIGNED_INT)kt=tt.R32UI;if(Dt===tt.BYTE)kt=tt.R8I;if(Dt===tt.SHORT)kt=tt.R16I;if(Dt===tt.INT)kt=tt.R32I}if(_t===tt.RG){if(Dt===tt.FLOAT)kt=tt.RG32F;if(Dt===tt.HALF_FLOAT)kt=tt.RG16F;if(Dt===tt.UNSIGNED_BYTE)kt=tt.RG8;if(Dt===tt.UNSIGNED_SHORT&&ue)kt=ue.RG16_EXT;if(Dt===tt.SHORT&&ue)kt=ue.RG16_SNORM_EXT}if(_t===tt.RG_INTEGER){if(Dt===tt.UNSIGNED_BYTE)kt=tt.RG8UI;if(Dt===tt.UNSIGNED_SHORT)kt=tt.RG16UI;if(Dt===tt.UNSIGNED_INT)kt=tt.RG32UI;if(Dt===tt.BYTE)kt=tt.RG8I;if(Dt===tt.SHORT)kt=tt.RG16I;if(Dt===tt.INT)kt=tt.RG32I}if(_t===tt.RGB_INTEGER){if(Dt===tt.UNSIGNED_BYTE)kt=tt.RGB8UI;if(Dt===tt.UNSIGNED_SHORT)kt=tt.RGB16UI;if(Dt===tt.UNSIGNED_INT)kt=tt.RGB32UI;if(Dt===tt.BYTE)kt=tt.RGB8I;if(Dt===tt.SHORT)kt=tt.RGB16I;if(Dt===tt.INT)kt=tt.RGB32I}if(_t===tt.RGBA_INTEGER){if(Dt===tt.UNSIGNED_BYTE)kt=tt.RGBA8UI;if(Dt===tt.UNSIGNED_SHORT)kt=tt.RGBA16UI;if(Dt===tt.UNSIGNED_INT)kt=tt.RGBA32UI;if(Dt===tt.BYTE)kt=tt.RGBA8I;if(Dt===tt.SHORT)kt=tt.RGBA16I;if(Dt===tt.INT)kt=tt.RGBA32I}if(_t===tt.RGB){if(Dt===tt.UNSIGNED_SHORT&&ue)kt=ue.RGB16_EXT;if(Dt===tt.SHORT&&ue)kt=ue.RGB16_SNORM_EXT;if(Dt===tt.UNSIGNED_INT_5_9_9_9_REV)kt=tt.RGB9_E5;if(Dt===tt.UNSIGNED_INT_10F_11F_11F_REV)kt=tt.R11F_G11F_B10F}if(_t===tt.RGBA){let Zt=oe?oo:i.getTransfer(Qt);if(Dt===tt.FLOAT)kt=tt.RGBA32F;if(Dt===tt.HALF_FLOAT)kt=tt.RGBA16F;if(Dt===tt.UNSIGNED_BYTE)kt=Zt===s?tt.SRGB8_ALPHA8:tt.RGBA8;if(Dt===tt.UNSIGNED_SHORT&&ue)kt=ue.RGBA16_EXT;if(Dt===tt.SHORT&&ue)kt=ue.RGBA16_SNORM_EXT;if(Dt===tt.UNSIGNED_SHORT_4_4_4_4)kt=tt.RGBA4;if(Dt===tt.UNSIGNED_SHORT_5_5_5_1)kt=tt.RGB5_A1}if(kt===tt.R16F||kt===tt.R32F||kt===tt.RG16F||kt===tt.RG32F||kt===tt.RGBA16F||kt===tt.RGBA32F)et.get("EXT_color_buffer_float");return kt}function gt(bt,_t){let Dt;if(bt){if(_t===null||_t===xi||_t===Pi)Dt=tt.DEPTH24_STENCIL8;else if(_t===si)Dt=tt.DEPTH32F_STENCIL8;else if(_t===Ps)Dt=tt.DEPTH24_STENCIL8,Oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(_t===null||_t===xi||_t===Pi)Dt=tt.DEPTH_COMPONENT24;else if(_t===si)Dt=tt.DEPTH_COMPONENT32F;else if(_t===Ps)Dt=tt.DEPTH_COMPONENT16;return Dt}function St(bt,_t){if(Tt(bt)===!0||bt.isFramebufferTexture&&bt.minFilter!==gi&&bt.minFilter!==Dn)return Math.log2(Math.max(_t.width,_t.height))+1;else if(bt.mipmaps.length>0)return bt.mipmaps.length;else if(bt.isCompressedTexture&&Array.isArray(bt.image))return _t.mipmaps.length;else return 1}function It(bt){let _t=new WeakRef(bt);it.get(bt).__ref=_t,xt.add(_t),Mt.register(bt,_t,_t)}function Bt(bt){let _t=it.get(bt).__ref;if(_t===void 0)return;xt.delete(_t),Mt.unregister(_t)}function Lt(bt){$t(bt.target)}function zt(bt){wt(bt.target)}function $t(bt){if(bt.removeEventListener("dispose",Lt),Bt(bt),Xt(bt),bt.isVideoTexture)ut.delete(bt);if(bt.isHTMLTexture)dt.delete(bt)}function wt(bt){bt.removeEventListener("dispose",zt),Bt(bt),se(bt)}function Vt(){for(let bt of xt){let _t=bt.deref();if(_t===void 0)continue;if(_t.isRenderTarget===!0)wt(_t);else $t(_t)}xt.clear(),dt.clear()}function Xt(bt){let _t=it.get(bt);if(_t.__webglInit===void 0)return;let Dt=bt.source,jt=pt.get(Dt);if(jt){let Qt=jt[_t.__cacheKey];if(Qt.usedTimes--,Qt.usedTimes===0)Ft(bt);if(Object.keys(jt).length===0)pt.delete(Dt)}it.remove(bt)}function Ft(bt){let _t=it.get(bt);tt.deleteTexture(_t.__webglTexture);let Dt=bt.source,jt=pt.get(Dt);delete jt[_t.__cacheKey],at.memory.textures--}function se(bt){let _t=it.get(bt);if(_t.__depthDisposeCallback)_t.__depthDisposeCallback();let Dt=bt.depthTexture;if(Dt&&Dt.renderTarget===bt)$t(Dt);if(bt.isWebGLCubeRenderTarget)for(let Qt=0;Qt<6;Qt++){if(Array.isArray(_t.__webglFramebuffer[Qt]))for(let oe=0;oe<_t.__webglFramebuffer[Qt].length;oe++)tt.deleteFramebuffer(_t.__webglFramebuffer[Qt][oe]);else tt.deleteFramebuffer(_t.__webglFramebuffer[Qt]);if(_t.__webglDepthbuffer)tt.deleteRenderbuffer(_t.__webglDepthbuffer[Qt])}else{if(Array.isArray(_t.__webglFramebuffer))for(let Qt=0;Qt<_t.__webglFramebuffer.length;Qt++)tt.deleteFramebuffer(_t.__webglFramebuffer[Qt]);else tt.deleteFramebuffer(_t.__webglFramebuffer);if(_t.__webglDepthbuffer)tt.deleteRenderbuffer(_t.__webglDepthbuffer);if(_t.__webglMultisampledFramebuffer)tt.deleteFramebuffer(_t.__webglMultisampledFramebuffer);if(_t.__webglColorRenderbuffer){for(let Qt=0;Qt<_t.__webglColorRenderbuffer.length;Qt++)if(_t.__webglColorRenderbuffer[Qt])tt.deleteRenderbuffer(_t.__webglColorRenderbuffer[Qt])}if(_t.__webglDepthRenderbuffer)tt.deleteRenderbuffer(_t.__webglDepthRenderbuffer)}let jt=bt.textures;for(let Qt=0,oe=jt.length;Qt<oe;Qt++){let ue=it.get(jt[Qt]);if(ue.__webglTexture)tt.deleteTexture(ue.__webglTexture),at.memory.textures--;it.remove(jt[Qt])}it.remove(bt)}let Ht=0;function Jt(){Ht=0}function te(){return Ht}function Se(bt){Ht=bt}function Yt(){let bt=Ht;if(bt>=st.maxTextures)Oe("WebGLTextures: Trying to use "+(bt+1)+" texture units while this GPU supports only "+st.maxTextures);return Ht+=1,bt}function ne(bt){let _t=[];return _t.push(bt.wrapS),_t.push(bt.wrapT),_t.push(bt.wrapR||0),_t.push(bt.magFilter),_t.push(bt.minFilter),_t.push(bt.anisotropy),_t.push(bt.internalFormat),_t.push(bt.format),_t.push(bt.type),_t.push(bt.generateMipmaps),_t.push(bt.mipmapsAutoUpdate),_t.push(bt.premultiplyAlpha),_t.push(bt.flipY),_t.push(bt.unpackAlignment),_t.push(bt.colorSpace),_t.join()}function be(bt,_t){let Dt=it.get(bt);if(bt.isVideoTexture)Ue(bt);if(bt.isRenderTargetTexture===!1&&bt.isExternalTexture!==!0&&bt.version>0&&Dt.__version!==bt.version){let jt=bt.image;if(jt===null)Oe("WebGLRenderer: Texture marked for update but no image data found.");else if(jt.complete===!1)Oe("WebGLRenderer: Texture marked for update but image is incomplete");else{Me(Dt,bt,_t);return}}else if(bt.isExternalTexture)Dt.__webglTexture=bt.sourceTexture?bt.sourceTexture:null;nt.bindTexture(tt.TEXTURE_2D,Dt.__webglTexture,tt.TEXTURE0+_t)}function Pe(bt,_t){let Dt=it.get(bt);if(bt.isRenderTargetTexture===!1&&bt.version>0&&Dt.__version!==bt.version){Me(Dt,bt,_t);return}else if(bt.isExternalTexture)Dt.__webglTexture=bt.sourceTexture?bt.sourceTexture:null;nt.bindTexture(tt.TEXTURE_2D_ARRAY,Dt.__webglTexture,tt.TEXTURE0+_t)}function Le(bt,_t){let Dt=it.get(bt);if(bt.isRenderTargetTexture===!1&&bt.version>0&&Dt.__version!==bt.version){Me(Dt,bt,_t);return}nt.bindTexture(tt.TEXTURE_3D,Dt.__webglTexture,tt.TEXTURE0+_t)}function ve(bt,_t){let Dt=it.get(bt);if(bt.version>0&&Dt.__version!==bt.version){ye(Dt,bt,_t);return}nt.bindTexture(tt.TEXTURE_CUBE_MAP,Dt.__webglTexture,tt.TEXTURE0+_t)}let Qe={[Y]:tt.REPEAT,[gr]:tt.CLAMP_TO_EDGE,[gc]:tt.MIRRORED_REPEAT},Ve={[gi]:tt.NEAREST,[_c]:tt.NEAREST_MIPMAP_NEAREST,[Is]:tt.NEAREST_MIPMAP_LINEAR,[Dn]:tt.LINEAR,[_r]:tt.LINEAR_MIPMAP_NEAREST,[_i]:tt.LINEAR_MIPMAP_LINEAR},Fe={[Ac]:tt.NEVER,[ho]:tt.ALWAYS,[wc]:tt.LESS,[lo]:tt.LEQUAL,[Rc]:tt.EQUAL,[co]:tt.GEQUAL,[Cc]:tt.GREATER,[Ic]:tt.NOTEQUAL};function Ke(bt,_t){if(_t.type===si&&et.has("OES_texture_float_linear")===!1&&(_t.magFilter===Dn||_t.magFilter===_r||_t.magFilter===Is||_t.magFilter===_i||_t.minFilter===Dn||_t.minFilter===_r||_t.minFilter===Is||_t.minFilter===_i))Oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(tt.texParameteri(bt,tt.TEXTURE_WRAP_S,Qe[_t.wrapS]),tt.texParameteri(bt,tt.TEXTURE_WRAP_T,Qe[_t.wrapT]),bt===tt.TEXTURE_3D||bt===tt.TEXTURE_2D_ARRAY)tt.texParameteri(bt,tt.TEXTURE_WRAP_R,Qe[_t.wrapR]);if(tt.texParameteri(bt,tt.TEXTURE_MAG_FILTER,Ve[_t.magFilter]),tt.texParameteri(bt,tt.TEXTURE_MIN_FILTER,Ve[_t.minFilter]),_t.compareFunction)tt.texParameteri(bt,tt.TEXTURE_COMPARE_MODE,tt.COMPARE_REF_TO_TEXTURE),tt.texParameteri(bt,tt.TEXTURE_COMPARE_FUNC,Fe[_t.compareFunction]);if(et.has("EXT_texture_filter_anisotropic")===!0){if(_t.magFilter===gi)return;if(_t.minFilter!==Is&&_t.minFilter!==_i)return;if(_t.type===si&&et.has("OES_texture_float_linear")===!1)return;if(_t.anisotropy>1||it.get(_t).__currentAnisotropy){let Dt=et.get("EXT_texture_filter_anisotropic");tt.texParameterf(bt,Dt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_t.anisotropy,st.getMaxAnisotropy())),it.get(_t).__currentAnisotropy=_t.anisotropy}}}function Kt(bt,_t){let Dt=!1;if(bt.__webglInit===void 0)bt.__webglInit=!0,_t.addEventListener("dispose",Lt),It(_t);let jt=_t.source,Qt=pt.get(jt);if(Qt===void 0)Qt={},pt.set(jt,Qt);let oe=ne(_t);if(oe!==bt.__cacheKey){if(Qt[oe]===void 0)Qt[oe]={texture:tt.createTexture(),usedTimes:0},at.memory.textures++,Dt=!0;Qt[oe].usedTimes++;let ue=Qt[bt.__cacheKey];if(ue!==void 0){if(Qt[bt.__cacheKey].usedTimes--,ue.usedTimes===0)Ft(_t)}bt.__cacheKey=oe,bt.__webglTexture=Qt[oe].texture}return Dt}function re(bt,_t,Dt){return Math.floor(Math.floor(bt/Dt)/_t)}function le(bt,_t,Dt,jt){let oe=bt.updateRanges;if(oe.length===0)nt.texSubImage2D(tt.TEXTURE_2D,0,0,0,_t.width,_t.height,Dt,jt,_t.data);else{oe.sort((Ct,qt)=>Ct.start-qt.start);let ue=0;for(let Ct=1;Ct<oe.length;Ct++){let qt=oe[ue],Wt=oe[Ct],ie=qt.start+qt.count,ae=re(Wt.start,_t.width,4),fe=re(qt.start,_t.width,4);if(Wt.start<=ie+1&&ae===fe&&re(Wt.start+Wt.count-1,_t.width,4)===ae)qt.count=Math.max(qt.count,Wt.start+Wt.count-qt.start);else++ue,oe[ue]=Wt}oe.length=ue+1;let kt=nt.getParameter(tt.UNPACK_ROW_LENGTH),Zt=nt.getParameter(tt.UNPACK_SKIP_PIXELS),ce=nt.getParameter(tt.UNPACK_SKIP_ROWS);nt.pixelStorei(tt.UNPACK_ROW_LENGTH,_t.width);for(let Ct=0,qt=oe.length;Ct<qt;Ct++){let Wt=oe[Ct],ie=Math.floor(Wt.start/4),ae=Math.ceil(Wt.count/4),fe=ie%_t.width,Ie=Math.floor(ie/_t.width),Re=ae,ge=1;nt.pixelStorei(tt.UNPACK_SKIP_PIXELS,fe),nt.pixelStorei(tt.UNPACK_SKIP_ROWS,Ie),nt.texSubImage2D(tt.TEXTURE_2D,0,fe,Ie,Re,1,Dt,jt,_t.data)}bt.clearUpdateRanges(),nt.pixelStorei(tt.UNPACK_ROW_LENGTH,kt),nt.pixelStorei(tt.UNPACK_SKIP_PIXELS,Zt),nt.pixelStorei(tt.UNPACK_SKIP_ROWS,ce)}}function Me(bt,_t,Dt){let jt=tt.TEXTURE_2D;if(_t.isDataArrayTexture||_t.isCompressedArrayTexture)jt=tt.TEXTURE_2D_ARRAY;if(_t.isData3DTexture)jt=tt.TEXTURE_3D;let Qt=Kt(bt,_t),oe=_t.source;nt.bindTexture(jt,bt.__webglTexture,tt.TEXTURE0+Dt);let ue=it.get(oe);if(oe.version!==ue.__version||Qt===!0){if(nt.activeTexture(tt.TEXTURE0+Dt),(typeof ImageBitmap<"u"&&_t.image instanceof ImageBitmap)===!1){let ge=i.getPrimaries(i.workingColorSpace),Ne=_t.colorSpace===Ni?null:i.getPrimaries(_t.colorSpace),We=_t.colorSpace===Ni||ge===Ne?tt.NONE:tt.BROWSER_DEFAULT_WEBGL;nt.pixelStorei(tt.UNPACK_FLIP_Y_WEBGL,_t.flipY),nt.pixelStorei(tt.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_t.premultiplyAlpha),nt.pixelStorei(tt.UNPACK_COLORSPACE_CONVERSION_WEBGL,We)}nt.pixelStorei(tt.UNPACK_ALIGNMENT,_t.unpackAlignment);let Zt=Et(_t.image,!1,st.maxTextureSize);Zt=ze(_t,Zt);let ce=rt.convert(_t.format,_t.colorSpace),Ct=rt.convert(_t.type),qt=Rt(_t.internalFormat,ce,Ct,_t.normalized,_t.colorSpace,_t.isVideoTexture);Ke(jt,_t);let Wt,ie=_t.mipmaps,ae=_t.isVideoTexture!==!0,fe=ue.__version===void 0||Qt===!0,Ie=oe.dataReady,Re=St(_t,Zt);if(_t.isDepthTexture){if(qt=gt(_t.format===vi,_t.type),fe)if(ae)nt.texStorage2D(tt.TEXTURE_2D,1,qt,Zt.width,Zt.height);else nt.texImage2D(tt.TEXTURE_2D,0,qt,Zt.width,Zt.height,0,ce,Ct,null)}else if(_t.isDataTexture)if(ie.length>0){if(ae&&fe)nt.texStorage2D(tt.TEXTURE_2D,Re,qt,ie[0].width,ie[0].height);for(let ge=0,Ne=ie.length;ge<Ne;ge++)if(Wt=ie[ge],ae){if(Ie)nt.texSubImage2D(tt.TEXTURE_2D,ge,0,0,Wt.width,Wt.height,ce,Ct,Wt.data)}else nt.texImage2D(tt.TEXTURE_2D,ge,qt,Wt.width,Wt.height,0,ce,Ct,Wt.data);_t.generateMipmaps=!1}else if(ae){if(fe)nt.texStorage2D(tt.TEXTURE_2D,Re,qt,Zt.width,Zt.height);if(Ie)le(_t,Zt,ce,Ct)}else nt.texImage2D(tt.TEXTURE_2D,0,qt,Zt.width,Zt.height,0,ce,Ct,Zt.data);else if(_t.isCompressedTexture)if(_t.isCompressedArrayTexture){if(ae&&fe)nt.texStorage3D(tt.TEXTURE_2D_ARRAY,Re,qt,ie[0].width,ie[0].height,Zt.depth);for(let ge=0,Ne=ie.length;ge<Ne;ge++)if(Wt=ie[ge],_t.format!==ri)if(ce!==null)if(ae){if(Ie)if(_t.layerUpdates.size>0){let We=Xo(Wt.width,Wt.height,_t.format,_t.type);for(let _e of _t.layerUpdates){let rn=Wt.data.subarray(_e*We/Wt.data.BYTES_PER_ELEMENT,(_e+1)*We/Wt.data.BYTES_PER_ELEMENT);nt.compressedTexSubImage3D(tt.TEXTURE_2D_ARRAY,ge,0,0,_e,Wt.width,Wt.height,1,ce,rn)}}else nt.compressedTexSubImage3D(tt.TEXTURE_2D_ARRAY,ge,0,0,0,Wt.width,Wt.height,Zt.depth,ce,Wt.data)}else nt.compressedTexImage3D(tt.TEXTURE_2D_ARRAY,ge,qt,Wt.width,Wt.height,Zt.depth,0,Wt.data,0,0);else Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(ae){if(Ie)nt.texSubImage3D(tt.TEXTURE_2D_ARRAY,ge,0,0,0,Wt.width,Wt.height,Zt.depth,ce,Ct,Wt.data)}else nt.texImage3D(tt.TEXTURE_2D_ARRAY,ge,qt,Wt.width,Wt.height,Zt.depth,0,ce,Ct,Wt.data);if(_t.layerUpdates.size>0)_t.clearLayerUpdates()}else{if(ae&&fe)nt.texStorage2D(tt.TEXTURE_2D,Re,qt,ie[0].width,ie[0].height);for(let ge=0,Ne=ie.length;ge<Ne;ge++)if(Wt=ie[ge],_t.format!==ri)if(ce!==null)if(ae){if(Ie)nt.compressedTexSubImage2D(tt.TEXTURE_2D,ge,0,0,Wt.width,Wt.height,ce,Wt.data)}else nt.compressedTexImage2D(tt.TEXTURE_2D,ge,qt,Wt.width,Wt.height,0,Wt.data);else Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(ae){if(Ie)nt.texSubImage2D(tt.TEXTURE_2D,ge,0,0,Wt.width,Wt.height,ce,Ct,Wt.data)}else nt.texImage2D(tt.TEXTURE_2D,ge,qt,Wt.width,Wt.height,0,ce,Ct,Wt.data)}else if(_t.isDataArrayTexture)if(ae){if(fe)nt.texStorage3D(tt.TEXTURE_2D_ARRAY,Re,qt,Zt.width,Zt.height,Zt.depth);if(Ie)if(_t.layerUpdates.size>0){let ge=Xo(Zt.width,Zt.height,_t.format,_t.type);for(let Ne of _t.layerUpdates){let We=Zt.data.subarray(Ne*ge/Zt.data.BYTES_PER_ELEMENT,(Ne+1)*ge/Zt.data.BYTES_PER_ELEMENT);nt.texSubImage3D(tt.TEXTURE_2D_ARRAY,0,0,0,Ne,Zt.width,Zt.height,1,ce,Ct,We)}_t.clearLayerUpdates()}else nt.texSubImage3D(tt.TEXTURE_2D_ARRAY,0,0,0,0,Zt.width,Zt.height,Zt.depth,ce,Ct,Zt.data)}else nt.texImage3D(tt.TEXTURE_2D_ARRAY,0,qt,Zt.width,Zt.height,Zt.depth,0,ce,Ct,Zt.data);else if(_t.isData3DTexture)if(ae){if(fe)nt.texStorage3D(tt.TEXTURE_3D,Re,qt,Zt.width,Zt.height,Zt.depth);if(Ie)nt.texSubImage3D(tt.TEXTURE_3D,0,0,0,0,Zt.width,Zt.height,Zt.depth,ce,Ct,Zt.data)}else nt.texImage3D(tt.TEXTURE_3D,0,qt,Zt.width,Zt.height,Zt.depth,0,ce,Ct,Zt.data);else if(_t.isFramebufferTexture){if(fe)if(ae)nt.texStorage2D(tt.TEXTURE_2D,Re,qt,Zt.width,Zt.height);else{let ge=Zt.width,Ne=Zt.height;for(let We=0;We<Re;We++)nt.texImage2D(tt.TEXTURE_2D,We,qt,ge,Ne,0,ce,Ct,null),ge>>=1,Ne>>=1}}else if(_t.isHTMLTexture){if("texElementImage2D"in tt){let ge=tt.canvas;if(!ge.hasAttribute("layoutsubtree"))ge.setAttribute("layoutsubtree","true");if(Zt.parentNode!==ge){ge.appendChild(Zt),dt.add(_t),ge.onpaint=(Ne)=>{let We=Ne.changedElements;for(let _e of dt)if(We.includes(_e.image))_e.needsUpdate=!0},ge.requestPaint();return}if(tt.texElementImage2D.length===3)tt.texElementImage2D(tt.TEXTURE_2D,tt.RGBA8,Zt);else{let{RGBA:We,RGBA:_e,UNSIGNED_BYTE:rn}=tt;tt.texElementImage2D(tt.TEXTURE_2D,0,We,_e,rn,Zt)}tt.texParameteri(tt.TEXTURE_2D,tt.TEXTURE_MIN_FILTER,tt.LINEAR),tt.texParameteri(tt.TEXTURE_2D,tt.TEXTURE_WRAP_S,tt.CLAMP_TO_EDGE),tt.texParameteri(tt.TEXTURE_2D,tt.TEXTURE_WRAP_T,tt.CLAMP_TO_EDGE)}}else if(ie.length>0){if(ae&&fe){let ge=gn(ie[0]);nt.texStorage2D(tt.TEXTURE_2D,Re,qt,ge.width,ge.height)}for(let ge=0,Ne=ie.length;ge<Ne;ge++)if(Wt=ie[ge],ae){if(Ie)nt.texSubImage2D(tt.TEXTURE_2D,ge,0,0,ce,Ct,Wt)}else nt.texImage2D(tt.TEXTURE_2D,ge,qt,ce,Ct,Wt);_t.generateMipmaps=!1}else if(ae){if(fe){let ge=gn(Zt);nt.texStorage2D(tt.TEXTURE_2D,Re,qt,ge.width,ge.height)}if(Ie)nt.texSubImage2D(tt.TEXTURE_2D,0,0,0,ce,Ct,Zt)}else nt.texImage2D(tt.TEXTURE_2D,0,qt,ce,Ct,Zt);if(Tt(_t)&&_t.mipmapsAutoUpdate===!0)yt(jt);if(ue.__version=oe.version,_t.onUpdate)_t.onUpdate(_t)}bt.__version=_t.version}function ye(bt,_t,Dt){if(_t.image.length!==6)return;let jt=Kt(bt,_t),Qt=_t.source;nt.bindTexture(tt.TEXTURE_CUBE_MAP,bt.__webglTexture,tt.TEXTURE0+Dt);let oe=it.get(Qt);if(Qt.version!==oe.__version||jt===!0){nt.activeTexture(tt.TEXTURE0+Dt);let ue=i.getPrimaries(i.workingColorSpace),kt=_t.colorSpace===Ni?null:i.getPrimaries(_t.colorSpace),Zt=_t.colorSpace===Ni||ue===kt?tt.NONE:tt.BROWSER_DEFAULT_WEBGL;nt.pixelStorei(tt.UNPACK_FLIP_Y_WEBGL,_t.flipY),nt.pixelStorei(tt.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_t.premultiplyAlpha),nt.pixelStorei(tt.UNPACK_ALIGNMENT,_t.unpackAlignment),nt.pixelStorei(tt.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt);let ce=_t.isCompressedTexture||_t.image[0].isCompressedTexture,Ct=_t.image[0]&&_t.image[0].isDataTexture,qt=[];for(let _e=0;_e<6;_e++){if(!ce&&!Ct)qt[_e]=Et(_t.image[_e],!0,st.maxCubemapSize);else qt[_e]=Ct?_t.image[_e].image:_t.image[_e];qt[_e]=ze(_t,qt[_e])}let Wt=qt[0],ie=rt.convert(_t.format,_t.colorSpace),ae=rt.convert(_t.type),fe=Rt(_t.internalFormat,ie,ae,_t.normalized,_t.colorSpace),Ie=_t.isVideoTexture!==!0,Re=oe.__version===void 0||jt===!0,ge=Qt.dataReady,Ne=St(_t,Wt);Ke(tt.TEXTURE_CUBE_MAP,_t);let We;if(_t.isDepthTexture){if(fe=gt(_t.format===vi,_t.type),Re)if(Ie)nt.texStorage2D(tt.TEXTURE_CUBE_MAP,1,fe,Wt.width,Wt.height);else for(let _e=0;_e<6;_e++)nt.texImage2D(tt.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,fe,Wt.width,Wt.height,0,ie,ae,null)}else if(ce){if(Ie&&Re)nt.texStorage2D(tt.TEXTURE_CUBE_MAP,Ne,fe,Wt.width,Wt.height);for(let _e=0;_e<6;_e++){We=qt[_e].mipmaps;for(let rn=0;rn<We.length;rn++){let vn=We[rn];if(_t.format!==ri)if(ie!==null)if(Ie){if(ge)nt.compressedTexSubImage2D(tt.TEXTURE_CUBE_MAP_POSITIVE_X+_e,rn,0,0,vn.width,vn.height,ie,vn.data)}else nt.compressedTexImage2D(tt.TEXTURE_CUBE_MAP_POSITIVE_X+_e,rn,fe,vn.width,vn.height,0,vn.data);else Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(Ie){if(ge)nt.texSubImage2D(tt.TEXTURE_CUBE_MAP_POSITIVE_X+_e,rn,0,0,vn.width,vn.height,ie,ae,vn.data)}else nt.texImage2D(tt.TEXTURE_CUBE_MAP_POSITIVE_X+_e,rn,fe,vn.width,vn.height,0,ie,ae,vn.data)}}}else{if(We=_t.mipmaps,Ie&&Re){if(We.length>0)Ne++;let _e=gn(qt[0]);nt.texStorage2D(tt.TEXTURE_CUBE_MAP,Ne,fe,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(Ct){if(Ie){if(ge)nt.texSubImage2D(tt.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,qt[_e].width,qt[_e].height,ie,ae,qt[_e].data)}else nt.texImage2D(tt.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,fe,qt[_e].width,qt[_e].height,0,ie,ae,qt[_e].data);for(let rn=0;rn<We.length;rn++){let $n=We[rn].image[_e].image;if(Ie){if(ge)nt.texSubImage2D(tt.TEXTURE_CUBE_MAP_POSITIVE_X+_e,rn+1,0,0,$n.width,$n.height,ie,ae,$n.data)}else nt.texImage2D(tt.TEXTURE_CUBE_MAP_POSITIVE_X+_e,rn+1,fe,$n.width,$n.height,0,ie,ae,$n.data)}}else{if(Ie){if(ge)nt.texSubImage2D(tt.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,ie,ae,qt[_e])}else nt.texImage2D(tt.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,fe,ie,ae,qt[_e]);for(let rn=0;rn<We.length;rn++){let vn=We[rn];if(Ie){if(ge)nt.texSubImage2D(tt.TEXTURE_CUBE_MAP_POSITIVE_X+_e,rn+1,0,0,ie,ae,vn.image[_e])}else nt.texImage2D(tt.TEXTURE_CUBE_MAP_POSITIVE_X+_e,rn+1,fe,ie,ae,vn.image[_e])}}}if(Tt(_t)&&_t.mipmapsAutoUpdate===!0)yt(tt.TEXTURE_CUBE_MAP);if(oe.__version=Qt.version,_t.onUpdate)_t.onUpdate(_t)}bt.__version=_t.version}function De(bt,_t,Dt,jt,Qt,oe){let ue=rt.convert(Dt.format,Dt.colorSpace),kt=rt.convert(Dt.type),Zt=Rt(Dt.internalFormat,ue,kt,Dt.normalized,Dt.colorSpace),ce=it.get(_t),Ct=it.get(Dt);if(Ct.__renderTarget=_t,!ce.__hasExternalTextures){let qt=Math.max(1,_t.width>>oe),Wt=Math.max(1,_t.height>>oe);if(Qt===tt.TEXTURE_3D||Qt===tt.TEXTURE_2D_ARRAY)nt.texImage3D(Qt,oe,Zt,qt,Wt,_t.depth,0,ue,kt,null);else nt.texImage2D(Qt,oe,Zt,qt,Wt,0,ue,kt,null)}if(nt.bindFramebuffer(tt.FRAMEBUFFER,bt),nn(_t))ot.framebufferTexture2DMultisampleEXT(tt.FRAMEBUFFER,jt,Qt,Ct.__webglTexture,0,pe(_t));else if(Qt===tt.TEXTURE_2D||Qt>=tt.TEXTURE_CUBE_MAP_POSITIVE_X&&Qt<=tt.TEXTURE_CUBE_MAP_NEGATIVE_Z)tt.framebufferTexture2D(tt.FRAMEBUFFER,jt,Qt,Ct.__webglTexture,oe);nt.bindFramebuffer(tt.FRAMEBUFFER,null)}function Ce(bt,_t,Dt){if(tt.bindRenderbuffer(tt.RENDERBUFFER,bt),_t.depthBuffer){let jt=_t.depthTexture,Qt=jt&&jt.isDepthTexture?jt.type:null,oe=gt(_t.stencilBuffer,Qt),ue=_t.stencilBuffer?tt.DEPTH_STENCIL_ATTACHMENT:tt.DEPTH_ATTACHMENT;if(nn(_t))ot.renderbufferStorageMultisampleEXT(tt.RENDERBUFFER,pe(_t),oe,_t.width,_t.height);else if(Dt)tt.renderbufferStorageMultisample(tt.RENDERBUFFER,pe(_t),oe,_t.width,_t.height);else tt.renderbufferStorage(tt.RENDERBUFFER,oe,_t.width,_t.height);tt.framebufferRenderbuffer(tt.FRAMEBUFFER,ue,tt.RENDERBUFFER,bt)}else{let jt=_t.textures;for(let Qt=0;Qt<jt.length;Qt++){let oe=jt[Qt],ue=rt.convert(oe.format,oe.colorSpace),kt=rt.convert(oe.type),Zt=Rt(oe.internalFormat,ue,kt,oe.normalized,oe.colorSpace);if(nn(_t))ot.renderbufferStorageMultisampleEXT(tt.RENDERBUFFER,pe(_t),Zt,_t.width,_t.height);else if(Dt)tt.renderbufferStorageMultisample(tt.RENDERBUFFER,pe(_t),Zt,_t.width,_t.height);else tt.renderbufferStorage(tt.RENDERBUFFER,Zt,_t.width,_t.height)}}tt.bindRenderbuffer(tt.RENDERBUFFER,null)}function qe(bt,_t,Dt){let jt=_t.isWebGLCubeRenderTarget===!0;if(nt.bindFramebuffer(tt.FRAMEBUFFER,bt),!(_t.depthTexture&&_t.depthTexture.isDepthTexture))throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Qt=it.get(_t.depthTexture);Qt.__renderTarget=_t;let oe=jt?_t.depthTexture.image[0]:_t.depthTexture.image;if(!Qt.__webglTexture||oe.width!==_t.width||oe.height!==_t.height)oe.width=_t.width,oe.height=_t.height,_t.depthTexture.needsUpdate=!0;if(jt)ve(_t.depthTexture,0);else be(_t.depthTexture,0);let ue=Qt.__webglTexture,kt=pe(_t),Zt=jt?tt.TEXTURE_CUBE_MAP_POSITIVE_X+Dt:tt.TEXTURE_2D,ce=_t.depthTexture.format===vi?tt.DEPTH_STENCIL_ATTACHMENT:tt.DEPTH_ATTACHMENT;if(_t.depthTexture.format===ls)if(nn(_t))ot.framebufferTexture2DMultisampleEXT(tt.FRAMEBUFFER,ce,Zt,ue,0,kt);else tt.framebufferTexture2D(tt.FRAMEBUFFER,ce,Zt,ue,0);else if(_t.depthTexture.format===vi)if(nn(_t))ot.framebufferTexture2DMultisampleEXT(tt.FRAMEBUFFER,ce,Zt,ue,0,kt);else tt.framebufferTexture2D(tt.FRAMEBUFFER,ce,Zt,ue,0);else throw Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ye(bt){let _t=it.get(bt),Dt=bt.isWebGLCubeRenderTarget===!0;if(_t.__boundDepthTexture!==bt.depthTexture){let jt=bt.depthTexture;if(_t.__depthDisposeCallback)_t.__depthDisposeCallback();if(jt){let Qt=()=>{delete _t.__boundDepthTexture,delete _t.__depthDisposeCallback,jt.removeEventListener("dispose",Qt)};jt.addEventListener("dispose",Qt),_t.__depthDisposeCallback=Qt}_t.__boundDepthTexture=jt}if(bt.depthTexture&&!_t.__autoAllocateDepthBuffer)if(Dt)for(let jt=0;jt<6;jt++)qe(_t.__webglFramebuffer[jt],bt,jt);else if(bt.texture.mipmaps.length>0)qe(_t.__webglFramebuffer[0],bt,0);else qe(_t.__webglFramebuffer,bt,0);else if(Dt){_t.__webglDepthbuffer=[];for(let jt=0;jt<6;jt++)if(nt.bindFramebuffer(tt.FRAMEBUFFER,_t.__webglFramebuffer[jt]),_t.__webglDepthbuffer[jt]===void 0)_t.__webglDepthbuffer[jt]=tt.createRenderbuffer(),Ce(_t.__webglDepthbuffer[jt],bt,!1);else{let Qt=bt.stencilBuffer?tt.DEPTH_STENCIL_ATTACHMENT:tt.DEPTH_ATTACHMENT,oe=_t.__webglDepthbuffer[jt];tt.bindRenderbuffer(tt.RENDERBUFFER,oe),tt.framebufferRenderbuffer(tt.FRAMEBUFFER,Qt,tt.RENDERBUFFER,oe)}}else{if(bt.texture.mipmaps.length>0)nt.bindFramebuffer(tt.FRAMEBUFFER,_t.__webglFramebuffer[0]);else nt.bindFramebuffer(tt.FRAMEBUFFER,_t.__webglFramebuffer);if(_t.__webglDepthbuffer===void 0)_t.__webglDepthbuffer=tt.createRenderbuffer(),Ce(_t.__webglDepthbuffer,bt,!1);else{let Qt=bt.stencilBuffer?tt.DEPTH_STENCIL_ATTACHMENT:tt.DEPTH_ATTACHMENT,oe=_t.__webglDepthbuffer;tt.bindRenderbuffer(tt.RENDERBUFFER,oe),tt.framebufferRenderbuffer(tt.FRAMEBUFFER,Qt,tt.RENDERBUFFER,oe)}}nt.bindFramebuffer(tt.FRAMEBUFFER,null)}function tn(bt,_t,Dt){let jt=it.get(bt);if(_t!==void 0)De(jt.__webglFramebuffer,bt,bt.texture,tt.COLOR_ATTACHMENT0,tt.TEXTURE_2D,0);if(Dt!==void 0)Ye(bt)}function Nt(bt){let _t=bt.texture,Dt=it.get(bt),jt=it.get(_t);bt.addEventListener("dispose",zt),It(bt);let Qt=bt.textures,oe=bt.isWebGLCubeRenderTarget===!0,ue=Qt.length>1;if(!ue){if(jt.__webglTexture===void 0)jt.__webglTexture=tt.createTexture();jt.__version=_t.version,at.memory.textures++}if(oe){Dt.__webglFramebuffer=[];for(let kt=0;kt<6;kt++)if(_t.mipmaps.length>0){Dt.__webglFramebuffer[kt]=[];for(let Zt=0;Zt<_t.mipmaps.length;Zt++)Dt.__webglFramebuffer[kt][Zt]=tt.createFramebuffer()}else Dt.__webglFramebuffer[kt]=tt.createFramebuffer()}else{if(_t.mipmaps.length>0){Dt.__webglFramebuffer=[];for(let kt=0;kt<_t.mipmaps.length;kt++)Dt.__webglFramebuffer[kt]=tt.createFramebuffer()}else Dt.__webglFramebuffer=tt.createFramebuffer();if(ue)for(let kt=0,Zt=Qt.length;kt<Zt;kt++){let ce=it.get(Qt[kt]);if(ce.__webglTexture===void 0)ce.__webglTexture=tt.createTexture(),at.memory.textures++}if(bt.samples>0&&nn(bt)===!1){Dt.__webglMultisampledFramebuffer=tt.createFramebuffer(),Dt.__webglColorRenderbuffer=[],nt.bindFramebuffer(tt.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer);for(let kt=0;kt<Qt.length;kt++){let Zt=Qt[kt];Dt.__webglColorRenderbuffer[kt]=tt.createRenderbuffer(),tt.bindRenderbuffer(tt.RENDERBUFFER,Dt.__webglColorRenderbuffer[kt]);let ce=rt.convert(Zt.format,Zt.colorSpace),Ct=rt.convert(Zt.type),qt=Rt(Zt.internalFormat,ce,Ct,Zt.normalized,Zt.colorSpace,bt.isXRRenderTarget===!0),Wt=pe(bt);tt.renderbufferStorageMultisample(tt.RENDERBUFFER,Wt,qt,bt.width,bt.height),tt.framebufferRenderbuffer(tt.FRAMEBUFFER,tt.COLOR_ATTACHMENT0+kt,tt.RENDERBUFFER,Dt.__webglColorRenderbuffer[kt])}if(tt.bindRenderbuffer(tt.RENDERBUFFER,null),bt.depthBuffer)Dt.__webglDepthRenderbuffer=tt.createRenderbuffer(),Ce(Dt.__webglDepthRenderbuffer,bt,!0);nt.bindFramebuffer(tt.FRAMEBUFFER,null)}}if(oe){nt.bindTexture(tt.TEXTURE_CUBE_MAP,jt.__webglTexture),Ke(tt.TEXTURE_CUBE_MAP,_t);for(let kt=0;kt<6;kt++)if(_t.mipmaps.length>0)for(let Zt=0;Zt<_t.mipmaps.length;Zt++)De(Dt.__webglFramebuffer[kt][Zt],bt,_t,tt.COLOR_ATTACHMENT0,tt.TEXTURE_CUBE_MAP_POSITIVE_X+kt,Zt);else De(Dt.__webglFramebuffer[kt],bt,_t,tt.COLOR_ATTACHMENT0,tt.TEXTURE_CUBE_MAP_POSITIVE_X+kt,0);if(Tt(_t))yt(tt.TEXTURE_CUBE_MAP);else if(_t.mipmaps.length>0)tt.texParameteri(tt.TEXTURE_CUBE_MAP,tt.TEXTURE_MAX_LEVEL,_t.mipmaps.length-1);nt.unbindTexture()}else if(ue){for(let kt=0,Zt=Qt.length;kt<Zt;kt++){let ce=Qt[kt],Ct=it.get(ce),qt=tt.TEXTURE_2D;if(bt.isWebGL3DRenderTarget||bt.isWebGLArrayRenderTarget)qt=bt.isWebGL3DRenderTarget?tt.TEXTURE_3D:tt.TEXTURE_2D_ARRAY;if(nt.bindTexture(qt,Ct.__webglTexture),Ke(qt,ce),De(Dt.__webglFramebuffer,bt,ce,tt.COLOR_ATTACHMENT0+kt,qt,0),Tt(ce))yt(qt)}nt.unbindTexture()}else{let kt=tt.TEXTURE_2D;if(bt.isWebGL3DRenderTarget||bt.isWebGLArrayRenderTarget)kt=bt.isWebGL3DRenderTarget?tt.TEXTURE_3D:tt.TEXTURE_2D_ARRAY;if(nt.bindTexture(kt,jt.__webglTexture),Ke(kt,_t),_t.mipmaps.length>0)for(let Zt=0;Zt<_t.mipmaps.length;Zt++)De(Dt.__webglFramebuffer[Zt],bt,_t,tt.COLOR_ATTACHMENT0,kt,Zt);else De(Dt.__webglFramebuffer,bt,_t,tt.COLOR_ATTACHMENT0,kt,0);if(Tt(_t))yt(kt);else if(_t.mipmaps.length>0)tt.texParameteri(kt,tt.TEXTURE_MAX_LEVEL,_t.mipmaps.length-1);nt.unbindTexture()}if(bt.depthBuffer)Ye(bt)}function mn(bt){let _t=bt.textures;for(let Dt=0,jt=_t.length;Dt<jt;Dt++){let Qt=_t[Dt];if(Tt(Qt)&&Qt.mipmapsAutoUpdate===!0){let oe=At(bt),ue=it.get(Qt).__webglTexture;nt.bindTexture(oe,ue),yt(oe),nt.unbindTexture()}}}let He=[];function dn(bt){if(bt.samples>0){if(nn(bt)===!1){let{textures:_t,width:Dt,height:jt}=bt,Qt=tt.COLOR_BUFFER_BIT,oe=bt.stencilBuffer?tt.DEPTH_STENCIL_ATTACHMENT:tt.DEPTH_ATTACHMENT,ue=it.get(bt),kt=_t.length>1;if(kt)for(let ce=0;ce<_t.length;ce++)nt.bindFramebuffer(tt.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),tt.framebufferRenderbuffer(tt.FRAMEBUFFER,tt.COLOR_ATTACHMENT0+ce,tt.RENDERBUFFER,null),nt.bindFramebuffer(tt.FRAMEBUFFER,ue.__webglFramebuffer),tt.framebufferTexture2D(tt.DRAW_FRAMEBUFFER,tt.COLOR_ATTACHMENT0+ce,tt.TEXTURE_2D,null,0);if(nt.bindFramebuffer(tt.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer),bt.texture.mipmaps.length>0)nt.bindFramebuffer(tt.DRAW_FRAMEBUFFER,ue.__webglFramebuffer[0]);else nt.bindFramebuffer(tt.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let ce=0;ce<_t.length;ce++){if(bt.resolveDepthBuffer){if(bt.depthBuffer)Qt|=tt.DEPTH_BUFFER_BIT;if(bt.stencilBuffer&&bt.resolveStencilBuffer)Qt|=tt.STENCIL_BUFFER_BIT}if(kt){tt.framebufferRenderbuffer(tt.READ_FRAMEBUFFER,tt.COLOR_ATTACHMENT0,tt.RENDERBUFFER,ue.__webglColorRenderbuffer[ce]);let Ct=it.get(_t[ce]).__webglTexture;tt.framebufferTexture2D(tt.DRAW_FRAMEBUFFER,tt.COLOR_ATTACHMENT0,tt.TEXTURE_2D,Ct,0)}if(tt.blitFramebuffer(0,0,Dt,jt,0,0,Dt,jt,Qt,tt.NEAREST),lt===!0){if(He.length=0,He.push(tt.COLOR_ATTACHMENT0+ce),bt.depthBuffer&&bt.storeMultisampledDepthBuffer===!1)He.push(oe);tt.invalidateFramebuffer(tt.READ_FRAMEBUFFER,He)}}if(nt.bindFramebuffer(tt.READ_FRAMEBUFFER,null),nt.bindFramebuffer(tt.DRAW_FRAMEBUFFER,null),kt)for(let ce=0;ce<_t.length;ce++){nt.bindFramebuffer(tt.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),tt.framebufferRenderbuffer(tt.FRAMEBUFFER,tt.COLOR_ATTACHMENT0+ce,tt.RENDERBUFFER,ue.__webglColorRenderbuffer[ce]);let Ct=it.get(_t[ce]).__webglTexture;nt.bindFramebuffer(tt.FRAMEBUFFER,ue.__webglFramebuffer),tt.framebufferTexture2D(tt.DRAW_FRAMEBUFFER,tt.COLOR_ATTACHMENT0+ce,tt.TEXTURE_2D,Ct,0)}nt.bindFramebuffer(tt.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(bt.depthBuffer&&bt.storeMultisampledDepthBuffer===!1&&lt){let _t=bt.stencilBuffer?tt.DEPTH_STENCIL_ATTACHMENT:tt.DEPTH_ATTACHMENT;tt.invalidateFramebuffer(tt.DRAW_FRAMEBUFFER,[_t])}}}function pe(bt){return Math.min(st.maxSamples,bt.samples)}function nn(bt){let _t=it.get(bt);return bt.samples>0&&et.has("WEBGL_multisampled_render_to_texture")===!0&&_t.__useRenderToTexture!==!1}function Ue(bt){let _t=at.render.frame;if(ut.get(bt)!==_t)ut.set(bt,_t),bt.update()}function ze(bt,_t){let{colorSpace:Dt,format:jt,type:Qt}=bt;if(bt.isCompressedTexture===!0||bt.isVideoTexture===!0)return _t;if(Dt!==ao&&Dt!==Ni)if(i.getTransfer(Dt)===s){if(jt!==ri||Qt!==kn)Oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else Be("WebGLTextures: Unsupported texture color space:",Dt);return _t}function gn(bt){if(typeof HTMLImageElement<"u"&&bt instanceof HTMLImageElement)ct.width=bt.naturalWidth||bt.width,ct.height=bt.naturalHeight||bt.height;else if(typeof VideoFrame<"u"&&bt instanceof VideoFrame)ct.width=bt.displayWidth,ct.height=bt.displayHeight;else ct.width=bt.width,ct.height=bt.height;return ct}this.allocateTextureUnit=Yt,this.resetTextureUnits=Jt,this.getTextureUnits=te,this.setTextureUnits=Se,this.setTexture2D=be,this.setTexture2DArray=Pe,this.setTexture3D=Le,this.setTextureCube=ve,this.rebindTextures=tn,this.setupRenderTarget=Nt,this.updateRenderTargetMipmap=mn,this.updateMultisampleRenderTarget=dn,this.setupDepthRenderbuffer=Ye,this.setupFrameBufferTexture=De,this.useMultisampledRTT=nn,this.dispose=Vt}function Gg(tt,et){function nt(it,st=Ni){let rt,at=i.getTransfer(st);if(it===kn)return tt.UNSIGNED_BYTE;if(it===Ta)return tt.UNSIGNED_SHORT_4_4_4_4;if(it===Ea)return tt.UNSIGNED_SHORT_5_5_5_1;if(it===yc)return tt.UNSIGNED_INT_5_9_9_9_REV;if(it===Sc)return tt.UNSIGNED_INT_10F_11F_11F_REV;if(it===xc)return tt.BYTE;if(it===vc)return tt.SHORT;if(it===Ps)return tt.UNSIGNED_SHORT;if(it===ba)return tt.INT;if(it===xi)return tt.UNSIGNED_INT;if(it===si)return tt.FLOAT;if(it===d)return tt.HALF_FLOAT;if(it===Mc)return tt.ALPHA;if(it===bc)return tt.RGB;if(it===ri)return tt.RGBA;if(it===ls)return tt.DEPTH_COMPONENT;if(it===vi)return tt.DEPTH_STENCIL;if(it===Tc)return tt.RED;if(it===Aa)return tt.RED_INTEGER;if(it===Li)return tt.RG;if(it===wa)return tt.RG_INTEGER;if(it===Ra)return tt.RGBA_INTEGER;if(it===xr||it===vr||it===yr||it===Sr)if(at===s)if(rt=et.get("WEBGL_compressed_texture_s3tc_srgb"),rt!==null){if(it===xr)return rt.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(it===vr)return rt.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(it===yr)return rt.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(it===Sr)return rt.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(rt=et.get("WEBGL_compressed_texture_s3tc"),rt!==null){if(it===xr)return rt.COMPRESSED_RGB_S3TC_DXT1_EXT;if(it===vr)return rt.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(it===yr)return rt.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(it===Sr)return rt.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(it===Ca||it===Ia||it===Pa||it===La)if(rt=et.get("WEBGL_compressed_texture_pvrtc"),rt!==null){if(it===Ca)return rt.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(it===Ia)return rt.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(it===Pa)return rt.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(it===La)return rt.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(it===Na||it===Da||it===Ua||it===Fa||it===Oa||it===Mr||it===Ba)if(rt=et.get("WEBGL_compressed_texture_etc"),rt!==null){if(it===Na||it===Da)return at===s?rt.COMPRESSED_SRGB8_ETC2:rt.COMPRESSED_RGB8_ETC2;if(it===Ua)return at===s?rt.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:rt.COMPRESSED_RGBA8_ETC2_EAC;if(it===Fa)return rt.COMPRESSED_R11_EAC;if(it===Oa)return rt.COMPRESSED_SIGNED_R11_EAC;if(it===Mr)return rt.COMPRESSED_RG11_EAC;if(it===Ba)return rt.COMPRESSED_SIGNED_RG11_EAC}else return null;if(it===za||it===Ga||it===ka||it===Ha||it===Wa||it===Va||it===Xa||it===qa||it===Ya||it===Za||it===Ja||it===$a||it===Ka||it===Qa)if(rt=et.get("WEBGL_compressed_texture_astc"),rt!==null){if(it===za)return at===s?rt.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:rt.COMPRESSED_RGBA_ASTC_4x4_KHR;if(it===Ga)return at===s?rt.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:rt.COMPRESSED_RGBA_ASTC_5x4_KHR;if(it===ka)return at===s?rt.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:rt.COMPRESSED_RGBA_ASTC_5x5_KHR;if(it===Ha)return at===s?rt.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:rt.COMPRESSED_RGBA_ASTC_6x5_KHR;if(it===Wa)return at===s?rt.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:rt.COMPRESSED_RGBA_ASTC_6x6_KHR;if(it===Va)return at===s?rt.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:rt.COMPRESSED_RGBA_ASTC_8x5_KHR;if(it===Xa)return at===s?rt.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:rt.COMPRESSED_RGBA_ASTC_8x6_KHR;if(it===qa)return at===s?rt.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:rt.COMPRESSED_RGBA_ASTC_8x8_KHR;if(it===Ya)return at===s?rt.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:rt.COMPRESSED_RGBA_ASTC_10x5_KHR;if(it===Za)return at===s?rt.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:rt.COMPRESSED_RGBA_ASTC_10x6_KHR;if(it===Ja)return at===s?rt.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:rt.COMPRESSED_RGBA_ASTC_10x8_KHR;if(it===$a)return at===s?rt.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:rt.COMPRESSED_RGBA_ASTC_10x10_KHR;if(it===Ka)return at===s?rt.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:rt.COMPRESSED_RGBA_ASTC_12x10_KHR;if(it===Qa)return at===s?rt.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:rt.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(it===ja||it===to||it===eo)if(rt=et.get("EXT_texture_compression_bptc"),rt!==null){if(it===ja)return at===s?rt.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:rt.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(it===to)return rt.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(it===eo)return rt.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(it===no||it===io||it===br||it===so)if(rt=et.get("EXT_texture_compression_rgtc"),rt!==null){if(it===no)return rt.COMPRESSED_RED_RGTC1_EXT;if(it===io)return rt.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(it===br)return rt.COMPRESSED_RED_GREEN_RGTC2_EXT;if(it===so)return rt.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(it===Pi)return tt.UNSIGNED_INT_24_8;return tt[it]!==void 0?tt[it]:null}return{convert:nt}}var kg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Hg=`
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

}`;class Ph{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(tt,et){if(this.texture===null){let nt=new Lr(tt.texture);if(tt.depthNear!==et.depthNear||tt.depthFar!==et.depthFar)this.depthNear=tt.depthNear,this.depthFar=tt.depthFar;this.texture=nt}}getMesh(tt){if(this.texture!==null){if(this.mesh===null){let et=tt.cameras[0].viewport,nt=new h({vertexShader:kg,fragmentShader:Hg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:et.z},depthHeight:{value:et.w}}});this.mesh=new a(new w(20,20),nt)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Lh extends ai{constructor(tt,et){super();let nt=this,it=null,st=1,rt=null,at="local-floor",ot=1,lt=null,ct=null,ut=null,dt=null,ht=null,pt=null,xt=typeof XRWebGLBinding<"u",Mt=new Ph,ft={},mt=et.getContextAttributes(),Et=null,Tt=null,yt=[],At=[],Rt=new t,gt=null,St=null,It=new p;It.viewport=new un;let Bt=new p;Bt.viewport=new un;let Lt=[It,Bt],zt=new Ho,$t=null,wt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Yt){let ne=yt[Yt];if(ne===void 0)ne=new Ns,yt[Yt]=ne;return ne.getTargetRaySpace()},this.getControllerGrip=function(Yt){let ne=yt[Yt];if(ne===void 0)ne=new Ns,yt[Yt]=ne;return ne.getGripSpace()},this.getHand=function(Yt){let ne=yt[Yt];if(ne===void 0)ne=new Ns,yt[Yt]=ne;return ne.getHandSpace()};function Vt(Yt){let ne=At.indexOf(Yt.inputSource);if(ne===-1)return;let be=yt[ne];if(be!==void 0)be.update(Yt.inputSource,Yt.frame,lt||rt),be.dispatchEvent({type:Yt.type,data:Yt.inputSource})}function Xt(){it.removeEventListener("select",Vt),it.removeEventListener("selectstart",Vt),it.removeEventListener("selectend",Vt),it.removeEventListener("squeeze",Vt),it.removeEventListener("squeezestart",Vt),it.removeEventListener("squeezeend",Vt),it.removeEventListener("end",Xt),it.removeEventListener("inputsourceschange",Ft);for(let Yt=0;Yt<yt.length;Yt++){let ne=At[Yt];if(ne===null)continue;At[Yt]=null,yt[Yt].disconnect(ne)}$t=null,wt=null,Mt.reset();for(let Yt in ft)delete ft[Yt];if(tt.setRenderTarget(Et),ht=null,dt=null,ut=null,it=null,Tt=null,Se.stop(),nt.isPresenting=!1,tt.setPixelRatio(gt),tt.setSize(Rt.width,Rt.height,!1),St!==null){let Yt=St.camera;Yt.fov=St.fov,Yt.zoom=St.zoom,Yt.updateProjectionMatrix(),St=null}nt.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Yt){if(st=Yt,nt.isPresenting===!0)Oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Yt){if(at=Yt,nt.isPresenting===!0)Oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return lt||rt},this.setReferenceSpace=function(Yt){lt=Yt},this.getBaseLayer=function(){return dt!==null?dt:ht},this.getBinding=function(){if(ut===null&&xt)ut=new XRWebGLBinding(it,et);return ut},this.getFrame=function(){return pt},this.getSession=function(){return it},this.setSession=async function(Yt){if(it=Yt,it!==null){if(Et=tt.getRenderTarget(),it.addEventListener("select",Vt),it.addEventListener("selectstart",Vt),it.addEventListener("selectend",Vt),it.addEventListener("squeeze",Vt),it.addEventListener("squeezestart",Vt),it.addEventListener("squeezeend",Vt),it.addEventListener("end",Xt),it.addEventListener("inputsourceschange",Ft),mt.xrCompatible!==!0)await et.makeXRCompatible();if(gt=tt.getPixelRatio(),tt.getSize(Rt),!(xt&&("createProjectionLayer"in XRWebGLBinding.prototype))){let be={antialias:mt.antialias,alpha:!0,depth:mt.depth,stencil:mt.stencil,framebufferScaleFactor:st};ht=new XRWebGLLayer(it,et,be),it.updateRenderState({baseLayer:ht}),tt.setPixelRatio(1),tt.setSize(ht.framebufferWidth,ht.framebufferHeight,!1),Tt=new c(ht.framebufferWidth,ht.framebufferHeight,{format:ri,type:kn,colorSpace:tt.outputColorSpace,stencilBuffer:mt.stencil,resolveDepthBuffer:ht.ignoreDepthValues===!1,resolveStencilBuffer:ht.ignoreDepthValues===!1,storeMultisampledDepthBuffer:ht.ignoreDepthValues===!1,storeMultisampledStencilBuffer:ht.ignoreDepthValues===!1})}else{let be=null,Pe=null,Le=null;if(mt.depth)Le=mt.stencil?et.DEPTH24_STENCIL8:et.DEPTH_COMPONENT24,be=mt.stencil?vi:ls,Pe=mt.stencil?Pi:xi;let ve={colorFormat:et.RGBA8,depthFormat:Le,scaleFactor:st};ut=this.getBinding(),dt=ut.createProjectionLayer(ve),it.updateRenderState({layers:[dt]}),tt.setPixelRatio(1),tt.setSize(dt.textureWidth,dt.textureHeight,!1),Tt=new c(dt.textureWidth,dt.textureHeight,{format:ri,type:kn,depthTexture:new yi(dt.textureWidth,dt.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:mt.stencil,colorSpace:tt.outputColorSpace,samples:mt.antialias?4:0,resolveDepthBuffer:dt.ignoreDepthValues===!1,resolveStencilBuffer:dt.ignoreDepthValues===!1,storeMultisampledDepthBuffer:dt.ignoreDepthValues===!1,storeMultisampledStencilBuffer:dt.ignoreDepthValues===!1})}Tt.isXRRenderTarget=!0,this.setFoveation(ot),lt=null,rt=await it.requestReferenceSpace(at),Se.setContext(it),Se.start(),nt.isPresenting=!0,nt.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(it!==null)return it.environmentBlendMode},this.getDepthTexture=function(){return Mt.getDepthTexture()};function Ft(Yt){for(let ne=0;ne<Yt.removed.length;ne++){let be=Yt.removed[ne],Pe=At.indexOf(be);if(Pe>=0)At[Pe]=null,yt[Pe].disconnect(be)}for(let ne=0;ne<Yt.added.length;ne++){let be=Yt.added[ne],Pe=At.indexOf(be);if(Pe===-1){for(let ve=0;ve<yt.length;ve++)if(ve>=At.length){At.push(be),Pe=ve;break}else if(At[ve]===null){At[ve]=be,Pe=ve;break}if(Pe===-1)break}let Le=yt[Pe];if(Le)Le.connect(be)}}function se(Yt,ne){if(ne===null)Yt.matrixWorld.copy(Yt.matrix);else Yt.matrixWorld.multiplyMatrices(ne.matrixWorld,Yt.matrix);Yt.matrixWorldInverse.copy(Yt.matrixWorld).invert()}this.updateCamera=function(Yt){if(it===null)return;let{near:ne,far:be}=Yt;if(Mt.texture!==null){if(Mt.depthNear>0)ne=Mt.depthNear;if(Mt.depthFar>0)be=Mt.depthFar}if(zt.near=Bt.near=It.near=ne,zt.far=Bt.far=It.far=be,$t!==zt.near||wt!==zt.far)it.updateRenderState({depthNear:zt.near,depthFar:zt.far}),$t=zt.near,wt=zt.far;zt.layers.mask=Yt.layers.mask|6,It.layers.mask=zt.layers.mask&-5,Bt.layers.mask=zt.layers.mask&-3;let Pe=Yt.parent,Le=zt.cameras;se(zt,Pe);for(let ve=0;ve<Le.length;ve++)se(Le[ve],Pe);if(zt.projectionMatrix.copy(It.projectionMatrix),zt.projectionMatrixInverse.copy(It.projectionMatrixInverse),St===null&&Yt.isPerspectiveCamera)St={camera:Yt,fov:Yt.fov,zoom:Yt.zoom};Ht(Yt,zt,Pe)};function Ht(Yt,ne,be){if(be===null)Yt.matrix.copy(ne.matrixWorld);else Yt.matrix.copy(be.matrixWorld),Yt.matrix.invert(),Yt.matrix.multiply(ne.matrixWorld);if(Yt.matrix.decompose(Yt.position,Yt.quaternion,Yt.scale),Yt.updateMatrixWorld(!0),Yt.projectionMatrix.copy(ne.projectionMatrix),Yt.projectionMatrixInverse.copy(ne.projectionMatrixInverse),Yt.isPerspectiveCamera)Yt.fov=ns*2*Math.atan(1/Yt.projectionMatrix.elements[5]),Yt.zoom=1}this.getCamera=function(){return zt},this.getFoveation=function(){if(dt===null&&ht===null)return;return ot},this.setFoveation=function(Yt){if(ot=Yt,dt!==null)dt.fixedFoveation=Yt;if(ht!==null&&ht.fixedFoveation!==void 0)ht.fixedFoveation=Yt},this.hasDepthSensing=function(){return Mt.texture!==null},this.getDepthSensingMesh=function(){return Mt.getMesh(zt)},this.getCameraTexture=function(Yt){return ft[Yt]};let Jt=null;function te(Yt,ne){if(ct=ne.getViewerPose(lt||rt),pt=ne,ct!==null){let be=ct.views;if(ht!==null)tt.setRenderTargetFramebuffer(Tt,ht.framebuffer),tt.setRenderTarget(Tt);let Pe=!1;if(be.length!==zt.cameras.length)zt.cameras.length=0,Pe=!0;for(let Ve=0;Ve<be.length;Ve++){let Fe=be[Ve],Ke=null;if(ht!==null)Ke=ht.getViewport(Fe);else{let re=ut.getViewSubImage(dt,Fe);if(Ke=re.viewport,Ve===0)tt.setRenderTargetTextures(Tt,re.colorTexture,re.depthStencilTexture),tt.setRenderTarget(Tt)}let Kt=Lt[Ve];if(Kt===void 0)Kt=new p,Kt.layers.enable(Ve),Kt.viewport=new un,Lt[Ve]=Kt;if(Kt.matrix.fromArray(Fe.transform.matrix),Kt.matrix.decompose(Kt.position,Kt.quaternion,Kt.scale),Kt.projectionMatrix.fromArray(Fe.projectionMatrix),Kt.projectionMatrixInverse.copy(Kt.projectionMatrix).invert(),Kt.viewport.set(Ke.x,Ke.y,Ke.width,Ke.height),Ve===0)zt.matrix.copy(Kt.matrix),zt.matrix.decompose(zt.position,zt.quaternion,zt.scale);if(Pe===!0)zt.cameras.push(Kt)}let Le=it.enabledFeatures;if(Le&&Le.includes("depth-sensing")&&it.depthUsage=="gpu-optimized"&&xt){ut=nt.getBinding();let Ve=ut.getDepthInformation(be[0]);if(Ve&&Ve.isValid&&Ve.texture)Mt.init(Ve,it.renderState)}if(Le&&Le.includes("camera-access")&&xt){tt.state.unbindTexture(),ut=nt.getBinding();for(let Ve=0;Ve<be.length;Ve++){let Fe=be[Ve].camera;if(Fe){let Ke=ft[Fe];if(!Ke)Ke=new Lr,ft[Fe]=Ke;let Kt=ut.getCameraImage(Fe);Ke.sourceTexture=Kt}}}}for(let be=0;be<yt.length;be++){let Pe=At[be],Le=yt[be];if(Pe!==null&&Le!==void 0)Le.update(Pe,ne,lt||rt)}if(Jt)Jt(Yt,ne);if(ne.detectedPlanes)nt.dispatchEvent({type:"planesdetected",data:ne});pt=null}let Se=new gh;Se.setAnimationLoop(te),this.setAnimationLoop=function(Yt){Jt=Yt},this.dispose=function(){}}}var Wg=new an,Nh=new Ge;Nh.set(-1,0,0,0,1,0,0,0,1);function Vg(tt,et){function nt(ft,mt){if(ft.matrixAutoUpdate===!0)ft.updateMatrix();mt.value.copy(ft.matrix)}function it(ft,mt){if(mt.color.getRGB(ft.fogColor.value,Co(tt)),mt.isFog)ft.fogNear.value=mt.near,ft.fogFar.value=mt.far;else if(mt.isFogExp2)ft.fogDensity.value=mt.density}function st(ft,mt,Et,Tt,yt){if(mt.isNodeMaterial)mt.uniformsNeedUpdate=!1;else if(mt.isMeshBasicMaterial)rt(ft,mt);else if(mt.isMeshLambertMaterial){if(rt(ft,mt),mt.envMap)ft.envMapIntensity.value=mt.envMapIntensity}else if(mt.isMeshToonMaterial)rt(ft,mt),dt(ft,mt);else if(mt.isMeshPhongMaterial){if(rt(ft,mt),ut(ft,mt),mt.envMap)ft.envMapIntensity.value=mt.envMapIntensity}else if(mt.isMeshStandardMaterial){if(rt(ft,mt),ht(ft,mt),mt.isMeshPhysicalMaterial)pt(ft,mt,yt)}else if(mt.isMeshMatcapMaterial)rt(ft,mt),xt(ft,mt);else if(mt.isMeshDepthMaterial)rt(ft,mt);else if(mt.isMeshDistanceMaterial)rt(ft,mt),Mt(ft,mt);else if(mt.isMeshNormalMaterial)rt(ft,mt);else if(mt.isLineBasicMaterial){if(at(ft,mt),mt.isLineDashedMaterial)ot(ft,mt)}else if(mt.isPointsMaterial)lt(ft,mt,Et,Tt);else if(mt.isSpriteMaterial)ct(ft,mt);else if(mt.isShadowMaterial)ft.color.value.copy(mt.color),ft.opacity.value=mt.opacity;else if(mt.isShaderMaterial)mt.uniformsNeedUpdate=!1}function rt(ft,mt){if(ft.opacity.value=mt.opacity,mt.color)ft.diffuse.value.copy(mt.color);if(mt.emissive)ft.emissive.value.copy(mt.emissive).multiplyScalar(mt.emissiveIntensity);if(mt.map)ft.map.value=mt.map,nt(mt.map,ft.mapTransform);if(mt.alphaMap)ft.alphaMap.value=mt.alphaMap,nt(mt.alphaMap,ft.alphaMapTransform);if(mt.bumpMap){if(ft.bumpMap.value=mt.bumpMap,nt(mt.bumpMap,ft.bumpMapTransform),ft.bumpScale.value=mt.bumpScale,mt.side===u)ft.bumpScale.value*=-1}if(mt.normalMap){if(ft.normalMap.value=mt.normalMap,nt(mt.normalMap,ft.normalMapTransform),ft.normalScale.value.copy(mt.normalScale),mt.side===u)ft.normalScale.value.negate()}if(mt.displacementMap)ft.displacementMap.value=mt.displacementMap,nt(mt.displacementMap,ft.displacementMapTransform),ft.displacementScale.value=mt.displacementScale,ft.displacementBias.value=mt.displacementBias;if(mt.emissiveMap)ft.emissiveMap.value=mt.emissiveMap,nt(mt.emissiveMap,ft.emissiveMapTransform);if(mt.specularMap)ft.specularMap.value=mt.specularMap,nt(mt.specularMap,ft.specularMapTransform);if(mt.alphaTest>0)ft.alphaTest.value=mt.alphaTest;let Et=et.get(mt),{envMap:Tt,envMapRotation:yt}=Et;if(Tt){if(ft.envMap.value=Tt,ft.envMapRotation.value.setFromMatrix4(Wg.makeRotationFromEuler(yt)).transpose(),Tt.isCubeTexture&&Tt.isRenderTargetTexture===!1)ft.envMapRotation.value.premultiply(Nh);ft.reflectivity.value=mt.reflectivity,ft.ior.value=mt.ior,ft.refractionRatio.value=mt.refractionRatio}if(mt.lightMap)ft.lightMap.value=mt.lightMap,ft.lightMapIntensity.value=mt.lightMapIntensity,nt(mt.lightMap,ft.lightMapTransform);if(mt.aoMap)ft.aoMap.value=mt.aoMap,ft.aoMapIntensity.value=mt.aoMapIntensity,nt(mt.aoMap,ft.aoMapTransform)}function at(ft,mt){if(ft.diffuse.value.copy(mt.color),ft.opacity.value=mt.opacity,mt.map)ft.map.value=mt.map,nt(mt.map,ft.mapTransform)}function ot(ft,mt){ft.dashSize.value=mt.dashSize,ft.totalSize.value=mt.dashSize+mt.gapSize,ft.scale.value=mt.scale}function lt(ft,mt,Et,Tt){if(ft.diffuse.value.copy(mt.color),ft.opacity.value=mt.opacity,ft.size.value=mt.size*Et,ft.scale.value=Tt*0.5,mt.map)ft.map.value=mt.map,nt(mt.map,ft.uvTransform);if(mt.alphaMap)ft.alphaMap.value=mt.alphaMap,nt(mt.alphaMap,ft.alphaMapTransform);if(mt.alphaTest>0)ft.alphaTest.value=mt.alphaTest}function ct(ft,mt){if(ft.diffuse.value.copy(mt.color),ft.opacity.value=mt.opacity,ft.rotation.value=mt.rotation,mt.map)ft.map.value=mt.map,nt(mt.map,ft.mapTransform);if(mt.alphaMap)ft.alphaMap.value=mt.alphaMap,nt(mt.alphaMap,ft.alphaMapTransform);if(mt.alphaTest>0)ft.alphaTest.value=mt.alphaTest}function ut(ft,mt){ft.specular.value.copy(mt.specular),ft.shininess.value=Math.max(mt.shininess,0.0001)}function dt(ft,mt){if(mt.gradientMap)ft.gradientMap.value=mt.gradientMap}function ht(ft,mt){if(ft.metalness.value=mt.metalness,mt.metalnessMap)ft.metalnessMap.value=mt.metalnessMap,nt(mt.metalnessMap,ft.metalnessMapTransform);if(ft.roughness.value=mt.roughness,mt.roughnessMap)ft.roughnessMap.value=mt.roughnessMap,nt(mt.roughnessMap,ft.roughnessMapTransform);if(mt.envMap)ft.envMapIntensity.value=mt.envMapIntensity}function pt(ft,mt,Et){if(ft.ior.value=mt.ior,mt.diffuseRoughness>0){if(ft.diffuseRoughness.value=mt.diffuseRoughness,mt.diffuseRoughnessMap)ft.diffuseRoughnessMap.value=mt.diffuseRoughnessMap,nt(mt.diffuseRoughnessMap,ft.diffuseRoughnessMapTransform)}if(mt.sheen>0){if(ft.sheenColor.value.copy(mt.sheenColor).multiplyScalar(mt.sheen),ft.sheenRoughness.value=mt.sheenRoughness,mt.sheenColorMap)ft.sheenColorMap.value=mt.sheenColorMap,nt(mt.sheenColorMap,ft.sheenColorMapTransform);if(mt.sheenRoughnessMap)ft.sheenRoughnessMap.value=mt.sheenRoughnessMap,nt(mt.sheenRoughnessMap,ft.sheenRoughnessMapTransform)}if(mt.clearcoat>0){if(ft.clearcoat.value=mt.clearcoat,ft.clearcoatRoughness.value=mt.clearcoatRoughness,mt.clearcoatMap)ft.clearcoatMap.value=mt.clearcoatMap,nt(mt.clearcoatMap,ft.clearcoatMapTransform);if(mt.clearcoatRoughnessMap)ft.clearcoatRoughnessMap.value=mt.clearcoatRoughnessMap,nt(mt.clearcoatRoughnessMap,ft.clearcoatRoughnessMapTransform);if(mt.clearcoatNormalMap){if(ft.clearcoatNormalMap.value=mt.clearcoatNormalMap,nt(mt.clearcoatNormalMap,ft.clearcoatNormalMapTransform),ft.clearcoatNormalScale.value.copy(mt.clearcoatNormalScale),mt.side===u)ft.clearcoatNormalScale.value.negate()}}if(mt.dispersion>0)ft.dispersion.value=mt.dispersion;if(mt.retroreflectivity>0)ft.retroreflectivity.value=mt.retroreflectivity;if(mt.iridescence>0){if(ft.iridescence.value=mt.iridescence,ft.iridescenceIOR.value=mt.iridescenceIOR,ft.iridescenceThicknessMinimum.value=mt.iridescenceThicknessMinimum,ft.iridescenceThicknessMaximum.value=mt.iridescenceThicknessMaximum,mt.iridescenceMap)ft.iridescenceMap.value=mt.iridescenceMap,nt(mt.iridescenceMap,ft.iridescenceMapTransform);if(mt.iridescenceThicknessMap)ft.iridescenceThicknessMap.value=mt.iridescenceThicknessMap,nt(mt.iridescenceThicknessMap,ft.iridescenceThicknessMapTransform)}if(mt.transmission>0){if(ft.transmission.value=mt.transmission,ft.transmissionSamplerMap.value=Et.texture,ft.transmissionSamplerSize.value.set(Et.width,Et.height),mt.transmissionMap)ft.transmissionMap.value=mt.transmissionMap,nt(mt.transmissionMap,ft.transmissionMapTransform);if(ft.thickness.value=mt.thickness,mt.thicknessMap)ft.thicknessMap.value=mt.thicknessMap,nt(mt.thicknessMap,ft.thicknessMapTransform);ft.attenuationDistance.value=mt.attenuationDistance,ft.attenuationColor.value.copy(mt.attenuationColor)}if(mt.anisotropy>0){if(ft.anisotropyVector.value.set(mt.anisotropy*Math.cos(mt.anisotropyRotation),mt.anisotropy*Math.sin(mt.anisotropyRotation)),mt.anisotropyMap)ft.anisotropyMap.value=mt.anisotropyMap,nt(mt.anisotropyMap,ft.anisotropyMapTransform)}if(ft.specularIntensity.value=mt.specularIntensity,ft.specularColor.value.copy(mt.specularColor),mt.specularColorMap)ft.specularColorMap.value=mt.specularColorMap,nt(mt.specularColorMap,ft.specularColorMapTransform);if(mt.specularIntensityMap)ft.specularIntensityMap.value=mt.specularIntensityMap,nt(mt.specularIntensityMap,ft.specularIntensityMapTransform)}function xt(ft,mt){if(mt.matcap)ft.matcap.value=mt.matcap}function Mt(ft,mt){let Et=et.get(mt).light;ft.referencePosition.value.setFromMatrixPosition(Et.matrixWorld),ft.nearDistance.value=Et.shadow.camera.near,ft.farDistance.value=Et.shadow.camera.far}return{refreshFogUniforms:it,refreshMaterialUniforms:st}}function Xg(tt,et,nt,it){let st={},rt={};function at(Et,Tt){let yt=Tt.program;it.uniformBlockBinding(Et,yt,st[Et.id])}function ot(Et,Tt){let yt=st[Et.id];if(yt===void 0)xt(Et),yt=lt(Et),st[Et.id]=yt,Et.addEventListener("dispose",ft);let At=Tt.program;it.updateUBOMapping(Et,At);let Rt=et.render.frame;if(rt[Et.id]!==Rt)ct(Et),rt[Et.id]=Rt}function lt(Et){let Tt=tt.createBuffer(),{__size:yt,usage:At}=Et;return tt.bindBuffer(tt.UNIFORM_BUFFER,Tt),tt.bufferData(tt.UNIFORM_BUFFER,yt,At),tt.bindBuffer(tt.UNIFORM_BUFFER,null),Tt}function ct(Et){let Tt=st[Et.id],{uniforms:yt,__cache:At}=Et;tt.bindBuffer(tt.UNIFORM_BUFFER,Tt);for(let Rt=0,gt=yt.length;Rt<gt;Rt++){let St=yt[Rt];if(Array.isArray(St))for(let It=0,Bt=St.length;It<Bt;It++)ut(St[It],Rt,It,At);else ut(St,Rt,0,At)}tt.bindBuffer(tt.UNIFORM_BUFFER,null)}function ut(Et,Tt,yt,At){if(ht(Et,Tt,yt,At)===!0){let{__offset:Rt,value:gt}=Et;if(Array.isArray(gt)){let St=0;for(let It=0;It<gt.length;It++){let Bt=gt[It],Lt=Mt(Bt,!0);dt(Bt,Et.__data,St),St+=Lt.storage/Float32Array.BYTES_PER_ELEMENT}}else dt(gt,Et.__data,0);tt.bufferSubData(tt.UNIFORM_BUFFER,Rt,Et.__data)}}function dt(Et,Tt,yt){if(typeof Et==="number"||typeof Et==="boolean")Tt[yt]=Et;else if(Et.isMatrix3)Tt[yt]=Et.elements[0],Tt[yt+1]=Et.elements[1],Tt[yt+2]=Et.elements[2],Tt[yt+3]=0,Tt[yt+4]=Et.elements[3],Tt[yt+5]=Et.elements[4],Tt[yt+6]=Et.elements[5],Tt[yt+7]=0,Tt[yt+8]=Et.elements[6],Tt[yt+9]=Et.elements[7],Tt[yt+10]=Et.elements[8],Tt[yt+11]=0;else if(ArrayBuffer.isView(Et))Tt.set(Et.subarray(0,Tt.length-yt),yt);else Et.toArray(Tt,yt)}function ht(Et,Tt,yt,At){let Rt=Et.value,gt=Tt+"_"+yt;if(Array.isArray(Rt)){if(At[gt]===void 0)At[gt]=[];let St=At[gt],It=!1;for(let Bt=0;Bt<Rt.length;Bt++)if(pt(Rt[Bt],St,Bt)===!0)It=!0;return It}return pt(Rt,At,gt)}function pt(Et,Tt,yt){if(Tt[yt]===void 0){if(typeof Et==="number"||typeof Et==="boolean")Tt[yt]=Et;else if(ArrayBuffer.isView(Et))Tt[yt]=Et.slice();else Tt[yt]=Et.clone();return!0}else{let At=Tt[yt];if(typeof Et==="number"||typeof Et==="boolean"){if(At!==Et)return Tt[yt]=Et,!0}else if(ArrayBuffer.isView(Et))return!0;else if(At.equals(Et)===!1)return At.copy(Et),!0}return!1}function xt(Et){let Tt=Et.uniforms,yt=0,At=16;for(let gt=0,St=Tt.length;gt<St;gt++){let It=Array.isArray(Tt[gt])?Tt[gt]:[Tt[gt]];for(let Bt=0,Lt=It.length;Bt<Lt;Bt++){let zt=It[Bt],$t=Array.isArray(zt.value)?zt.value:[zt.value],wt=Array.isArray(Tt[gt])||Array.isArray(zt.value),Vt=yt;for(let Ft=0,se=$t.length;Ft<se;Ft++){let Ht=$t[Ft],Jt=Mt(Ht,wt),te=yt%At,Se=te%Jt.boundary,Yt=te+Se;if(yt+=Se,Yt!==0&&At-Yt<Jt.storage)yt+=At-Yt;if(Ft===0)Vt=yt;yt+=Jt.storage}let Xt=zt.type==="int"?Int32Array:zt.type==="uint"?Uint32Array:Float32Array;zt.__data=new Xt((yt-Vt)/Float32Array.BYTES_PER_ELEMENT),zt.__offset=Vt}}let Rt=yt%At;if(Rt>0)yt+=At-Rt;return Et.__size=yt,Et.__cache={},this}function Mt(Et,Tt){let yt={boundary:0,storage:0};if(typeof Et==="number"||typeof Et==="boolean")yt.boundary=4,yt.storage=4;else if(Et.isVector2)yt.boundary=8,yt.storage=8;else if(Et.isVector3||Et.isColor)yt.boundary=16,yt.storage=12;else if(Et.isVector4)yt.boundary=16,yt.storage=16;else if(Et.isMatrix3)yt.boundary=16,yt.storage=48;else if(Et.isMatrix4)yt.boundary=16,yt.storage=64;else if(Et.isTexture)Oe("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(Et))yt.boundary=16,yt.storage=Et.byteLength;else Oe("WebGLRenderer: Unsupported uniform value type.",Et);if(Tt===!0)yt.boundary=16,yt.storage=Math.ceil(yt.storage/16)*16;return yt}function ft(Et){let Tt=Et.target;Tt.removeEventListener("dispose",ft),tt.deleteBuffer(st[Tt.id]),delete st[Tt.id],delete rt[Tt.id]}function mt(){for(let Et in st)tt.deleteBuffer(st[Et]);st={},rt={}}return{bind:at,update:ot,dispose:mt}}var qg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Zn=null;function Yg(){if(Zn===null)Zn=new Rr(qg,16,16,Li,d),Zn.name="DFG_LUT",Zn.minFilter=Dn,Zn.magFilter=Dn,Zn.wrapS=gr,Zn.wrapT=gr,Zn.generateMipmaps=!1,Zn.needsUpdate=!0;return Zn}class ee{constructor(tt={}){let{canvas:et=Pc(),context:nt=null,depth:it=!0,stencil:st=!1,alpha:rt=!1,antialias:at=!1,premultipliedAlpha:ot=!0,preserveDrawingBuffer:lt=!1,powerPreference:ct="default",failIfMajorPerformanceCaveat:ut=!1,reversedDepthBuffer:dt=!1,outputBufferType:ht=kn}=tt;this.isWebGLRenderer=!0;let pt;if(nt!==null){if(typeof WebGLRenderingContext<"u"&&nt instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");pt=nt.getContextAttributes().alpha}else pt=rt;let xt=ht,Mt=new Set([Ra,wa,Aa]),ft=new Set([kn,xi,Ps,Pi,Ta,Ea]),mt=new Uint32Array(4),Et=new Int32Array(4),Tt={textures:[],min:[],max:[],resolution:[]},yt=null,At=null,Rt=[],gt=[],St=null;this.domElement=et,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Yn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let It=this,Bt=!1,Lt=null,zt=null,$t=null,wt=null;this._outputColorSpace=y;let Vt=0,Xt=0,Ft=null,se=-1,Ht=null,Jt=new un,te=new un,Se=null,Yt=new n(0),ne=0,{width:be,height:Pe}=et,Le=1,ve=null,Qe=null,Ve=new un(0,0,be,Pe),Fe=new un(0,0,be,Pe),Ke=!1,Kt=new Ci,re=new Cr,le=!1,Me=!1,ye=new an,De=new e,Ce=new un,qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ye=!1;function tn(){return Ft===null?Le:1}let Nt=nt;function mn(vt,Pt){return et.getContext(vt,Pt)}let He,dn,pe,nn,Ue,ze,gn,bt,_t,Dt,jt,Qt,oe,ue,kt,Zt,ce,Ct,qt,Wt,ie,ae,fe;try{let vt={alpha:!0,depth:it,stencil:st,antialias:at,premultipliedAlpha:ot,preserveDrawingBuffer:lt,powerPreference:ct,failIfMajorPerformanceCaveat:ut};if("setAttribute"in et)et.setAttribute("data-engine",`three.js r${Ol}`);if(et.addEventListener("webglcontextlost",ge,!1),et.addEventListener("webglcontextrestored",Ne,!1),et.addEventListener("webglcontextcreationerror",We,!1),Nt===null){if(Nt=mn("webgl2",vt),Nt===null)if(mn("webgl2"))throw Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ie()}catch(vt){throw et.removeEventListener("webglcontextlost",ge,!1),et.removeEventListener("webglcontextrestored",Ne,!1),et.removeEventListener("webglcontextcreationerror",We,!1),Be("WebGLRenderer: "+vt.message),vt}function Ie(){if(He=new sm(Nt),He.init(),ie=new Gg(Nt,He),dn=new Yp(Nt,He,tt,ie),pe=new Bg(Nt,He),dn.reversedDepthBuffer&&dt)pe.buffers.depth.setReversed(!0);zt=Nt.createFramebuffer(),$t=Nt.createFramebuffer(),wt=Nt.createFramebuffer(),nn=new om(Nt),Ue=new Tg,ze=new zg(Nt,He,pe,Ue,dn,ie,nn),gn=new im(It),bt=new ld(Nt),ae=new Xp(Nt,bt),_t=new rm(Nt,bt,nn,ae),Dt=new cm(Nt,_t,bt,ae,nn),Ct=new lm(Nt,dn,ze),kt=new Zp(Ue),jt=new bg(It,gn,He,dn,ae,kt),Qt=new Vg(It,Ue),oe=new Ag,ue=new Lg(He),ce=new Vp(It,gn,pe,Dt,pt,ot),Zt=new Og(It,Dt,dn),fe=new Xg(Nt,nn,dn,pe),qt=new qp(Nt,He,nn),Wt=new am(Nt,He,nn),nn.programs=jt.programs,It.capabilities=dn,It.extensions=He,It.properties=Ue,It.renderLists=oe,It.shadowMap=Zt,It.state=pe,It.info=nn}if(xt!==kn)St=new um(xt,et.width,et.height,at,it,st);let Re=new Lh(It,Nt);this.xr=Re,this.getContext=function(){return Nt},this.getContextAttributes=function(){return Nt.getContextAttributes()},this.forceContextLoss=function(){let vt=He.get("WEBGL_lose_context");if(vt)vt.loseContext()},this.forceContextRestore=function(){let vt=He.get("WEBGL_lose_context");if(vt)vt.restoreContext()},this.getPixelRatio=function(){return Le},this.setPixelRatio=function(vt){if(vt===void 0)return;Le=vt,this.setSize(be,Pe,!1)},this.getSize=function(vt){return vt.set(be,Pe)},this.setSize=function(vt,Pt,Gt=!0){if(Re.isPresenting){Oe("WebGLRenderer: Can't change size while VR device is presenting.");return}if(be=vt,Pe=Pt,et.width=Math.floor(vt*Le),et.height=Math.floor(Pt*Le),Gt===!0)et.style.width=vt+"px",et.style.height=Pt+"px";if(St!==null)St.setSize(et.width,et.height);this.setViewport(0,0,vt,Pt)},this.getDrawingBufferSize=function(vt){return vt.set(be*Le,Pe*Le).floor()},this.setDrawingBufferSize=function(vt,Pt,Gt){be=vt,Pe=Pt,Le=Gt,et.width=Math.floor(vt*Gt),et.height=Math.floor(Pt*Gt),this.setViewport(0,0,vt,Pt)},this.setEffects=function(vt){if(xt===kn){Be("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(vt){for(let Pt=0;Pt<vt.length;Pt++)if(vt[Pt].isOutputPass===!0){Oe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}St.setEffects(vt||[])},this.getCurrentViewport=function(vt){return vt.copy(Jt)},this.getViewport=function(vt){return vt.copy(Ve)},this.setViewport=function(vt,Pt,Gt,Ut){if(vt.isVector4)Ve.set(vt.x,vt.y,vt.z,vt.w);else Ve.set(vt,Pt,Gt,Ut);pe.viewport(Jt.copy(Ve).multiplyScalar(tn()).round())},this.getScissor=function(vt){return vt.copy(Fe)},this.setScissor=function(vt,Pt,Gt,Ut){if(vt.isVector4)Fe.set(vt.x,vt.y,vt.z,vt.w);else Fe.set(vt,Pt,Gt,Ut);pe.scissor(te.copy(Fe).multiplyScalar(tn()).round())},this.getScissorTest=function(){return Ke},this.setScissorTest=function(vt){pe.setScissorTest(Ke=vt)},this.setOpaqueSort=function(vt){ve=vt},this.setTransparentSort=function(vt){Qe=vt},this.getClearColor=function(vt){return vt.copy(ce.getClearColor())},this.setClearColor=function(){ce.setClearColor(...arguments)},this.getClearAlpha=function(){return ce.getClearAlpha()},this.setClearAlpha=function(){ce.setClearAlpha(...arguments)},this.clear=function(vt=!0,Pt=!0,Gt=!0){let Ut=0;if(vt){let Ot=!1;if(Ft!==null){let de=Ft.texture.format;Ot=Mt.has(de)}if(Ot){let de=Ft.texture.type,Te=ft.has(de),he=ce.getClearColor(),xe=ce.getClearAlpha(),{r:we,g:ke,b:Je}=he;if(Te)mt[0]=we,mt[1]=ke,mt[2]=Je,mt[3]=xe,Nt.clearBufferuiv(Nt.COLOR,0,mt);else Et[0]=we,Et[1]=ke,Et[2]=Je,Et[3]=xe,Nt.clearBufferiv(Nt.COLOR,0,Et)}else Ut|=Nt.COLOR_BUFFER_BIT}if(Pt)Ut|=Nt.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(Gt)Ut|=Nt.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(Ut!==0)Nt.clear(Ut)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(vt){vt.setRenderer(this),Lt=vt},this.dispose=function(){et.removeEventListener("webglcontextlost",ge,!1),et.removeEventListener("webglcontextrestored",Ne,!1),et.removeEventListener("webglcontextcreationerror",We,!1),ce.dispose(),oe.dispose(),ue.dispose(),ze.dispose(),Ue.dispose(),gn.dispose(),Dt.dispose(),_t.dispose(),ae.dispose(),fe.dispose(),jt.dispose(),Re.dispose(),Re.removeEventListener("sessionstart",Jo),Re.removeEventListener("sessionend",$o),Si.stop()};function ge(vt){vt.preventDefault(),po("WebGLRenderer: Context Lost."),Bt=!0}function Ne(){po("WebGLRenderer: Context Restored."),Bt=!1;let vt=nn.autoReset,Pt=Zt.enabled,Gt=Zt.autoUpdate,Ut=Zt.needsUpdate,Ot=Zt.type;Ie(),nn.autoReset=vt,Zt.enabled=Pt,Zt.autoUpdate=Gt,Zt.needsUpdate=Ut,Zt.type=Ot}function We(vt){Be("WebGLRenderer: A WebGL context could not be created. Reason: ",vt.statusMessage)}function _e(vt){let Pt=vt.target;Pt.removeEventListener("dispose",_e),rn(Pt)}function rn(vt){vn(vt),Ue.remove(vt)}function vn(vt){let Pt=Ue.get(vt).programs;if(Pt!==void 0){if(Pt.forEach(function(Gt){jt.releaseProgram(Gt)}),vt.isShaderMaterial)jt.releaseShaderCache(vt)}}this.renderBufferDirect=function(vt,Pt,Gt,Ut,Ot,de){if(Pt===null)Pt=qe;let Te=Ot.isMesh&&Ot.matrixWorld.determinantAffine()<0,he=Fh(vt,Pt,Gt,Ut,Ot);pe.setMaterial(Ut,Te);let xe=Gt.index,we=1;if(Ut.wireframe===!0){if(xe=_t.getWireframeAttribute(Gt),xe===void 0)return;we=2}let ke=Gt.drawRange,Je=Gt.attributes.position,Ee=ke.start*we,$e=(ke.start+ke.count)*we;if(de!==null)Ee=Math.max(Ee,de.start*we),$e=Math.min($e,(de.start+de.count)*we);if(xe!==null)Ee=Math.max(Ee,0),$e=Math.min($e,xe.count);else if(Je!==void 0&&Je!==null)Ee=Math.max(Ee,0),$e=Math.min($e,Je.count);let fn=$e-Ee;if(fn<0||fn===1/0)return;ae.setup(Ot,Ut,he,Gt,xe);let ln,on=qt;if(xe!==null)ln=bt.get(xe),on=Wt,on.setIndex(ln);if(Ot.isMesh)if(Ut.wireframe===!0)pe.setLineWidth(Ut.wireframeLinewidth*tn()),on.setMode(Nt.LINES);else on.setMode(Nt.TRIANGLES);else if(Ot.isLine){let Tn=Ut.linewidth;if(Tn===void 0)Tn=1;if(pe.setLineWidth(Tn*tn()),Ot.isLineSegments)on.setMode(Nt.LINES);else if(Ot.isLineLoop)on.setMode(Nt.LINE_LOOP);else on.setMode(Nt.LINE_STRIP)}else if(Ot.isPoints)on.setMode(Nt.POINTS);else if(Ot.isSprite)on.setMode(Nt.TRIANGLES);if(Ot.isBatchedMesh)if(!He.get("WEBGL_multi_draw")){let{_multiDrawStarts:Tn,_multiDrawCounts:Ae,_multiDrawCount:Cn}=Ot,en=xe?bt.get(xe).bytesPerElement:1,Mi=Ue.get(Ut).currentProgram.getUniforms();for(let En=0;En<Cn;En++)Mi.setValue(Nt,"_gl_DrawID",En),on.render(Tn[En]/en,Ae[En])}else on.renderMultiDraw(Ot._multiDrawStarts,Ot._multiDrawCounts,Ot._multiDrawCount);else if(Ot.isInstancedMesh)on.renderInstances(Ee,fn,Ot.count);else if(Gt.isInstancedBufferGeometry){let Tn=Gt._maxInstanceCount!==void 0?Gt._maxInstanceCount:1/0,Ae=Math.min(Gt.instanceCount,Tn);on.renderInstances(Ee,fn,Ae)}else on.render(Ee,fn)};function $n(vt,Pt,Gt,Ut){if(Lt!==null&&vt.isNodeMaterial)Lt.setObject(Ut,vt);if(le===!0)kt.setState(vt,Gt,!1);if(vt.transparent===!0&&vt.side===qn&&vt.forceSinglePass===!1)vt.side=u,vt.needsUpdate=!0,hs(vt,Pt,Ut),vt.side=rs,vt.needsUpdate=!0,hs(vt,Pt,Ut),vt.side=qn;else hs(vt,Pt,Ut)}this.compile=function(vt,Pt,Gt=null){if(Gt===null)Gt=vt;if(Lt!==null)Lt.renderStart(vt,Pt,Gt);if(At=ue.get(Gt),At.init(Pt),gt.push(At),Gt.traverseVisible(function(Ot){if(Ot.isLight&&Ot.layers.test(Pt.layers)){if(At.pushLight(Ot),Ot.castShadow)At.pushShadow(Ot)}}),vt!==Gt)vt.traverseVisible(function(Ot){if(Ot.isLight&&Ot.layers.test(Pt.layers)){if(At.pushLight(Ot),Ot.castShadow)At.pushShadow(Ot)}});if(At.setupLights(),Lt!==null)Lt.updateLights(At.state.lightsArray);if(Me=this.localClippingEnabled,le=kt.init(this.clippingPlanes,Me),le===!0)kt.setGlobalState(this.clippingPlanes,Pt);if(Lt!==null)Zt.render(At.state.shadowsArray,Gt,Pt);let Ut=new Set;if(vt.traverse(function(Ot){if(!(Ot.isMesh||Ot.isPoints||Ot.isLine||Ot.isSprite))return;let de=Ot.material;if(de)if(Array.isArray(de))for(let Te=0;Te<de.length;Te++){let he=de[Te];$n(he,Gt,Pt,Ot),Ut.add(he)}else $n(de,Gt,Pt,Ot),Ut.add(de)}),At=gt.pop(),Lt!==null)Lt.renderEnd();return Ut},this.compileAsync=function(vt,Pt,Gt=null){let Ut=this.compile(vt,Pt,Gt);return new Promise((Ot)=>{function de(){if(Ut.forEach(function(Te){let xe=Ue.get(Te).currentProgram;if(xe===void 0||xe.isReady())Ut.delete(Te)}),Ut.size===0){Ot(vt);return}setTimeout(de,10)}if(He.get("KHR_parallel_shader_compile")!==null)de();else setTimeout(de,10)})};let Xr=null;function Dh(vt){if(Xr)Xr(vt)}function Jo(){Si.stop()}function $o(){Si.start()}let Si=new gh;if(Si.setAnimationLoop(Dh),typeof self<"u")Si.setContext(self);this.setAnimationLoop=function(vt){Xr=vt,Re.setAnimationLoop(vt),vt===null?Si.stop():Si.start()},Re.addEventListener("sessionstart",Jo),Re.addEventListener("sessionend",$o),this.render=function(vt,Pt){if(Pt!==void 0&&Pt.isCamera!==!0){Be("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Bt===!0)return;if(Lt!==null)Lt.renderStart(vt,Pt);let Gt=Re.enabled===!0&&Re.isPresenting===!0,Ut=St!==null&&(Ft===null||Gt)&&St.begin(It,Ft);if(vt.matrixWorldAutoUpdate===!0)vt.updateMatrixWorld();if(Pt.parent===null&&Pt.matrixWorldAutoUpdate===!0)Pt.updateMatrixWorld();if(Re.enabled===!0&&Re.isPresenting===!0&&(St===null||St.isCompositing()===!1)){if(Re.cameraAutoUpdate===!0)Re.updateCamera(Pt);Pt=Re.getCamera()}if(vt.isScene===!0)vt.onBeforeRender(It,vt,Pt,Ft);if(At=ue.get(vt,gt.length),At.init(Pt),At.state.textureUnits=ze.getTextureUnits(),gt.push(At),ye.multiplyMatrices(Pt.projectionMatrix,Pt.matrixWorldInverse),Pt.isArrayCamera)re.setFromArrayCamera(Pt);else Kt.setFromProjectionMatrix(ye,fo,Pt.reversedDepth);if(Me=this.localClippingEnabled,le=kt.init(this.clippingPlanes,Me),yt=oe.get(vt,Rt.length),yt.init(),Rt.push(yt),this.info.render.frame++,Re.enabled===!0&&Re.isPresenting===!0){let Te=It.xr.getDepthSensingMesh();if(Te!==null)qr(Te,Pt,-1/0,It.sortObjects)}if(qr(vt,Pt,0,It.sortObjects),yt.finish(),Lt!==null)Lt.updateLights(At.state.lightsArray);if(It.sortObjects===!0)yt.sort(ve,Qe);if(Ye=Re.enabled===!1||Re.isPresenting===!1||Re.hasDepthSensing()===!1,Ye)ce.addToRenderList(yt,vt);if(this.info.autoReset===!0)this.info.reset();if(le===!0)kt.beginShadows();let Ot=At.state.shadowsArray;if(Zt.render(Ot,vt,Pt),le===!0)kt.endShadows();if((Ut&&St.hasRenderPass())===!1){let Te=yt.opaque,he=yt.transmissive;if(At.setupLights(),Pt.isArrayCamera){let xe=Pt.cameras;if(he.length>0)for(let we=0,ke=xe.length;we<ke;we++){let Je=xe[we];Qo(Te,he,vt,Je)}if(Ye)ce.render(vt);for(let we=0,ke=xe.length;we<ke;we++){let Je=xe[we];Ko(yt,vt,Je,Je.viewport)}}else{if(he.length>0)Qo(Te,he,vt,Pt);if(Ye)ce.render(vt);Ko(yt,vt,Pt)}}if(Ft!==null&&Xt===0)ze.updateMultisampleRenderTarget(Ft),ze.updateRenderTargetMipmap(Ft);if(Ut)St.end(It);if(vt.isScene===!0)vt.onAfterRender(It,vt,Pt);if(ae.resetDefaultState(),se=-1,Ht=null,gt.pop(),gt.length>0){if(At=gt[gt.length-1],ze.setTextureUnits(At.state.textureUnits),le===!0)kt.setGlobalState(It.clippingPlanes,At.state.camera)}else At=null;if(Rt.pop(),Rt.length>0)yt=Rt[Rt.length-1];else yt=null;if(Lt!==null)Lt.renderEnd()};function qr(vt,Pt,Gt,Ut){if(vt.visible===!1)return;if(vt.layers.test(Pt.layers)){if(vt.isGroup)Gt=vt.renderOrder;else if(vt.isLOD){if(vt.autoUpdate===!0)vt.update(Pt)}else if(vt.isLight){if(At.pushLight(vt),vt.castShadow)At.pushShadow(vt)}else if(vt.isSprite){let Te=Pt.isArrayCamera?re:Kt;if(!vt.frustumCulled||vt.intersectsFrustum(Te)){if(Ut)Ce.setFromMatrixPosition(vt.matrixWorld).applyMatrix4(ye);let he=Dt.update(vt),xe=vt.material;if(xe.visible)yt.push(vt,he,xe,Gt,Ce.z,null,Pt)}}else if(vt.isMesh||vt.isLine||vt.isPoints){let Te=Pt.isArrayCamera?re:Kt;if(!vt.frustumCulled||vt.intersectsFrustum(Te)){let he=Dt.update(vt),xe=vt.material;if(Ut){if(vt.boundingSphere!==void 0){if(vt.boundingSphere===null)vt.computeBoundingSphere();Ce.copy(vt.boundingSphere.center)}else{if(he.boundingSphere===null)he.computeBoundingSphere();Ce.copy(he.boundingSphere.center)}Ce.applyMatrix4(vt.matrixWorld).applyMatrix4(ye)}if(Array.isArray(xe)){let we=he.groups;for(let ke=0,Je=we.length;ke<Je;ke++){let Ee=we[ke],$e=xe[Ee.materialIndex];if($e&&$e.visible)yt.push(vt,he,$e,Gt,Ce.z,Ee,Pt)}}else if(xe.visible)yt.push(vt,he,xe,Gt,Ce.z,null,Pt)}}}let de=vt.children;for(let Te=0,he=de.length;Te<he;Te++)qr(de[Te],Pt,Gt,Ut)}function Ko(vt,Pt,Gt,Ut){let{opaque:Ot,transmissive:de,transparent:Te}=vt;if(At.setupLightsView(Gt),le===!0)kt.setGlobalState(It.clippingPlanes,Gt);if(Ut)pe.viewport(Jt.copy(Ut));if(Ot.length>0)ks(Ot,Pt,Gt);if(de.length>0)ks(de,Pt,Gt);if(Te.length>0)ks(Te,Pt,Gt);pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function Qo(vt,Pt,Gt,Ut){if((Gt.isScene===!0?Gt.overrideMaterial:null)!==null)return;if(At.state.transmissionRenderTarget[Ut.id]===void 0){let Ee=He.has("EXT_color_buffer_half_float")||He.has("EXT_color_buffer_float");At.state.transmissionRenderTarget[Ut.id]=new c(1,1,{generateMipmaps:!0,type:Ee?d:kn,minFilter:_i,samples:Math.max(4,dn.samples),stencilBuffer:st,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:i.workingColorSpace})}let de=At.state.transmissionRenderTarget[Ut.id],Te=Ut.viewport||Jt;de.setSize(Te.z*It.transmissionResolutionScale,Te.w*It.transmissionResolutionScale);let he=It.getRenderTarget(),xe=It.getActiveCubeFace(),we=It.getActiveMipmapLevel();if(It.setRenderTarget(de),It.getClearColor(Yt),ne=It.getClearAlpha(),ne<1)It.setClearColor(16777215,0.5);if(It.clear(),Ye)ce.render(Gt);let ke=It.toneMapping;It.toneMapping=Yn;let Je=Ut.viewport;if(Ut.viewport!==void 0)Ut.viewport=void 0;if(At.setupLightsView(Ut),le===!0)kt.setGlobalState(It.clippingPlanes,Ut);if(ks(vt,Gt,Ut),ze.updateMultisampleRenderTarget(de),ze.updateRenderTargetMipmap(de),He.has("WEBGL_multisampled_render_to_texture")===!1){let Ee=!1;for(let $e=0,fn=Pt.length;$e<fn;$e++){let ln=Pt[$e],{object:on,geometry:Tn,material:Ae,group:Cn}=ln;if(Ae.side===qn&&on.layers.test(Ut.layers)){let en=Ae.side;Ae.side=u,Ae.needsUpdate=!0,jo(on,Gt,Ut,Tn,Ae,Cn),Ae.side=en,Ae.needsUpdate=!0,Ee=!0}}if(Ee===!0)ze.updateMultisampleRenderTarget(de),ze.updateRenderTargetMipmap(de)}if(It.setRenderTarget(he,xe,we),It.setClearColor(Yt,ne),Je!==void 0)Ut.viewport=Je;It.toneMapping=ke}function ks(vt,Pt,Gt){let Ut=Pt.isScene===!0?Pt.overrideMaterial:null;for(let Ot=0,de=vt.length;Ot<de;Ot++){let Te=vt[Ot],{object:he,geometry:xe,group:we}=Te,ke=Te.material;if(ke.allowOverride===!0&&Ut!==null)ke=Ut;if(he.layers.test(Gt.layers))jo(he,Pt,Gt,xe,ke,we)}}function jo(vt,Pt,Gt,Ut,Ot,de){if(Lt!==null&&Ot.isNodeMaterial)Lt.setObject(vt,Ot);if(vt.onBeforeRender(It,Pt,Gt,Ut,Ot,de),vt.modelViewMatrix.multiplyMatrices(Gt.matrixWorldInverse,vt.matrixWorld),vt.normalMatrix.getNormalMatrix(vt.modelViewMatrix),Ot.onBeforeRender(It,Pt,Gt,Ut,vt,de),Ot.transparent===!0&&Ot.side===qn&&Ot.forceSinglePass===!1)Ot.side=u,Ot.needsUpdate=!0,It.renderBufferDirect(Gt,Pt,Ut,Ot,vt,de),Ot.side=rs,Ot.needsUpdate=!0,It.renderBufferDirect(Gt,Pt,Ut,Ot,vt,de),Ot.side=qn;else It.renderBufferDirect(Gt,Pt,Ut,Ot,vt,de);vt.onAfterRender(It,Pt,Gt,Ut,Ot,de)}function tl(vt){let Pt=0;for(let Gt of vt)if(Gt.texture!==null)Pt++;return Pt}function hs(vt,Pt,Gt){if(Pt.isScene!==!0)Pt=qe;let Ut=Ue.get(vt),Ot=At.state.lights,de=At.state.shadowsArray,Te=Ot.state.version,he=jt.getParameters(vt,Ot.state,de,Pt,Gt,At.state.lightProbeGridArray),xe=jt.getProgramCacheKey(he),we=Ut.programs;Ut.environment=vt.isMeshStandardMaterial||vt.isMeshLambertMaterial||vt.isMeshPhongMaterial?Pt.environment:null,Ut.fog=Pt.fog;let ke=vt.isMeshStandardMaterial||vt.isMeshLambertMaterial&&!vt.envMap||vt.isMeshPhongMaterial&&!vt.envMap;if(Ut.envMap=gn.get(vt.envMap||Ut.environment,ke),Ut.envMapRotation=Ut.environment!==null&&vt.envMap===null?Pt.environmentRotation:vt.envMapRotation,we===void 0)vt.addEventListener("dispose",_e),we=new Map,Ut.programs=we,Ut.programVariants=new Map;let Je=we.get(xe);if(Je!==void 0){if(Ut.currentProgram===Je&&Ut.lightsStateVersion===Te)return nl(vt,he),Je}else{if(he.uniforms=jt.getUniforms(vt),Lt!==null&&vt.isNodeMaterial)Lt.build(vt,Gt,he);vt.onBeforeCompile(he,It),Je=jt.acquireProgram(he,xe),we.set(xe,Je),Ut.uniforms=he.uniforms}let Ee=Ut.uniforms;if(!vt.isShaderMaterial&&!vt.isRawShaderMaterial||vt.clipping===!0)Ee.clippingPlanes=kt.uniform;if(nl(vt,he),Ut.needsLights=Bh(vt),Ut.lightsStateVersion=Te,Ut.needsLights)Ee.ambientLightColor.value=Ot.state.ambient,Ee.lightProbe.value=Ot.state.probe,Ee.sunLights.value=Ot.state.sun,Ee.sunLightShadows.value=Ot.state.sunShadow,Ee.directionalLights.value=Ot.state.directional,Ee.directionalLightShadows.value=Ot.state.directionalShadow,Ee.spotLights.value=Ot.state.spot,Ee.spotLightShadows.value=Ot.state.spotShadow,Ee.rectAreaLights.value=Ot.state.rectArea,Ee.ltc_1.value=Ot.state.rectAreaLTC1,Ee.ltc_2.value=Ot.state.rectAreaLTC2,Ee.pointLights.value=Ot.state.point,Ee.pointLightShadows.value=Ot.state.pointShadow,Ee.hemisphereLights.value=Ot.state.hemi,Ee.sunShadowMatrix.value=Ot.state.sunShadowMatrix,Ee.sunShadowCascade.value=Ot.state.sunShadowCascade,Ee.directionalShadowMatrix.value=Ot.state.directionalShadowMatrix,Ee.spotLightMatrix.value=Ot.state.spotLightMatrix,Ee.spotLightMap.value=Ot.state.spotLightMap,Ee.pointShadowMatrix.value=Ot.state.pointShadowMatrix;return Ut.numLightProbeGrids=tl(At.state.lightProbeGridArray),Ut.currentProgram=Je,Ut.uniformsList=null,Je}function Uh(vt,Pt,Gt,Ut,Ot){let de=Ue.get(vt),Te=de.currentProgram.id+","+Ut+","+Ot,he=de.programVariants.get(Te);if(he===void 0)he=hs(vt,Pt,Gt),de.programVariants.set(Te,he);else de.currentProgram=he,de.uniformsList=null,de.outputColorSpace=Ut,de.toneMapping=Ot;return he}function el(vt){if(vt.uniformsList===null){let Pt=vt.currentProgram.getUniforms();vt.uniformsList=zs.seqWithValue(Pt.seq,vt.uniforms)}return vt.uniformsList}function nl(vt,Pt){let Gt=Ue.get(vt);Gt.outputColorSpace=Pt.outputColorSpace,Gt.batching=Pt.batching,Gt.batchingColor=Pt.batchingColor,Gt.instancing=Pt.instancing,Gt.instancingColor=Pt.instancingColor,Gt.instancingMorph=Pt.instancingMorph,Gt.skinning=Pt.skinning,Gt.morphTargets=Pt.morphTargets,Gt.morphNormals=Pt.morphNormals,Gt.morphColors=Pt.morphColors,Gt.morphTargetsCount=Pt.morphTargetsCount,Gt.numClippingPlanes=Pt.numClippingPlanes,Gt.numIntersection=Pt.numClipIntersection,Gt.vertexAlphas=Pt.vertexAlphas,Gt.vertexTangents=Pt.vertexTangents,Gt.toneMapping=Pt.toneMapping}function Fh(vt,Pt,Gt,Ut,Ot){if(Pt.isScene!==!0)Pt=qe;ze.resetTextureUnits();let de=Pt.fog,Te=Ut.isMeshStandardMaterial||Ut.isMeshLambertMaterial||Ut.isMeshPhongMaterial?Pt.environment:null,he=Ft===null?It.outputColorSpace:Ft.isXRRenderTarget===!0?Ft.texture.colorSpace:i.workingColorSpace,xe=Ut.isMeshStandardMaterial||Ut.isMeshLambertMaterial&&!Ut.envMap||Ut.isMeshPhongMaterial&&!Ut.envMap,we=gn.get(Ut.envMap||Te,xe),ke=Ut.vertexColors===!0&&!!Gt.attributes.color&&Gt.attributes.color.itemSize===4,Je=!!Gt.attributes.tangent&&(!!Ut.normalMap||Ut.anisotropy>0),Ee=!!Gt.morphAttributes.position,$e=!!Gt.morphAttributes.normal,fn=!!Gt.morphAttributes.color,ln=Yn;if(Ut.toneMapped){if(Ft===null||Ft.isXRRenderTarget===!0)ln=It.toneMapping}let on=Gt.morphAttributes.position||Gt.morphAttributes.normal||Gt.morphAttributes.color,Tn=on!==void 0?on.length:0,Ae=Ue.get(Ut),Cn=At.state.lights;if(le===!0){if(Me===!0||vt!==Ht){let cn=vt===Ht&&Ut.id===se;kt.setState(Ut,vt,cn)}}let en=!1,Mi=!1;if(Ut.version===Ae.__version){if(Ae.needsLights&&Ae.lightsStateVersion!==Cn.state.version)en=!0;else if(Ot.isBatchedMesh&&Ae.batching===!1)en=!0;else if(!Ot.isBatchedMesh&&Ae.batching===!0)en=!0;else if(Ot.isBatchedMesh&&Ae.batchingColor===!0&&Ot._colorsTexture===null)en=!0;else if(Ot.isBatchedMesh&&Ae.batchingColor===!1&&Ot._colorsTexture!==null)en=!0;else if(Ot.isInstancedMesh&&Ae.instancing===!1)en=!0;else if(!Ot.isInstancedMesh&&Ae.instancing===!0)en=!0;else if(Ot.isSkinnedMesh&&Ae.skinning===!1)en=!0;else if(!Ot.isSkinnedMesh&&Ae.skinning===!0)en=!0;else if(Ot.isInstancedMesh&&Ae.instancingColor===!0&&Ot.instanceColor===null)en=!0;else if(Ot.isInstancedMesh&&Ae.instancingColor===!1&&Ot.instanceColor!==null)en=!0;else if(Ot.isInstancedMesh&&Ae.instancingMorph===!0&&Ot.morphTexture===null)en=!0;else if(Ot.isInstancedMesh&&Ae.instancingMorph===!1&&Ot.morphTexture!==null)en=!0;else if(Ae.envMap!==we)en=!0;else if(Ut.fog===!0&&Ae.fog!==de)en=!0;else if(Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==kt.numPlanes||Ae.numIntersection!==kt.numIntersection))en=!0;else if(Ae.vertexAlphas!==ke)en=!0;else if(Ae.vertexTangents!==Je)en=!0;else if(Ae.morphTargets!==Ee)en=!0;else if(Ae.morphNormals!==$e)en=!0;else if(Ae.morphColors!==fn)en=!0;else if(Ae.morphTargetsCount!==Tn)en=!0;else if(Ae.numLightProbeGrids!==tl(At.state.lightProbeGridArray))en=!0;else if(Ae.outputColorSpace!==he||Ae.toneMapping!==ln)Mi=!0}else en=!0,Ae.__version=Ut.version;let En=Ae.currentProgram;if(en===!0||Mi===!0){if(En=Mi===!0?Uh(Ut,Pt,Ot,he,ln):hs(Ut,Pt,Ot),Lt&&Ut.isNodeMaterial)Lt.onUpdateProgram(Ut,En,Ae)}let Hs=!1,hi=!1,bi=!1,je=En.getUniforms(),Mn=Ae.uniforms;if(pe.useProgram(En.program))Hs=!0,hi=!0,bi=!0;if(Ut.id!==se)se=Ut.id,hi=!0;if(Hs||Ht!==vt){if(pe.buffers.depth.getReversed()&&vt.reversedDepth!==!0)vt._reversedDepth=!0,vt.updateProjectionMatrix();je.setValue(Nt,"projectionMatrix",vt.projectionMatrix),je.setValue(Nt,"viewMatrix",vt.matrixWorldInverse);let yn=je.map.cameraPosition;if(yn!==void 0)yn.setValue(Nt,De.setFromMatrixPosition(vt.matrixWorld));if(dn.logarithmicDepthBuffer)je.setValue(Nt,"logDepthBufFC",2/(Math.log(vt.far+1)/Math.LN2));if(Ut.isMeshPhongMaterial||Ut.isMeshToonMaterial||Ut.isMeshLambertMaterial||Ut.isMeshBasicMaterial||Ut.isMeshStandardMaterial||Ut.isShaderMaterial)je.setValue(Nt,"isOrthographic",vt.isOrthographicCamera===!0);if(Ht!==vt)Ht=vt,hi=!0,bi=!0}if(Ae.needsLights){if(Cn.state.sunShadowMap.length>0)je.setValue(Nt,"sunShadowMap",Cn.state.sunShadowMap,ze);if(Cn.state.directionalShadowMap.length>0)je.setValue(Nt,"directionalShadowMap",Cn.state.directionalShadowMap,ze);if(Cn.state.spotShadowMap.length>0)je.setValue(Nt,"spotShadowMap",Cn.state.spotShadowMap,ze);if(Cn.state.pointShadowMap.length>0)je.setValue(Nt,"pointShadowMap",Cn.state.pointShadowMap,ze)}if(Ot.isSkinnedMesh){je.setOptional(Nt,Ot,"bindMatrix"),je.setOptional(Nt,Ot,"bindMatrixInverse");let cn=Ot.skeleton;if(cn){if(cn.boneTexture===null)cn.computeBoneTexture();je.setValue(Nt,"boneTexture",cn.boneTexture,ze)}}if(Ot.isBatchedMesh){if(je.setOptional(Nt,Ot,"batchingTexture"),je.setValue(Nt,"batchingTexture",Ot._matricesTexture,ze),je.setOptional(Nt,Ot,"batchingIdTexture"),je.setValue(Nt,"batchingIdTexture",Ot._indirectTexture,ze),je.setOptional(Nt,Ot,"batchingColorTexture"),Ot._colorsTexture!==null)je.setValue(Nt,"batchingColorTexture",Ot._colorsTexture,ze)}let On=Gt.morphAttributes;if(On.position!==void 0||On.normal!==void 0||On.color!==void 0)Ct.update(Ot,Gt,En);if(hi||Ae.receiveShadow!==Ot.receiveShadow)Ae.receiveShadow=Ot.receiveShadow,je.setValue(Nt,"receiveShadow",Ot.receiveShadow);if((Ut.isMeshStandardMaterial||Ut.isMeshLambertMaterial||Ut.isMeshPhongMaterial)&&Ut.envMap===null&&Pt.environment!==null)Mn.envMapIntensity.value=Pt.environmentIntensity;if(Mn.dfgLUT!==void 0)Mn.dfgLUT.value=Yg();if(hi){if(je.setValue(Nt,"toneMappingExposure",It.toneMappingExposure),Ae.needsLights)Oh(Mn,bi);if(de&&Ut.fog===!0)Qt.refreshFogUniforms(Mn,de);if(Qt.refreshMaterialUniforms(Mn,Ut,Le,Pe,At.state.transmissionRenderTarget[vt.id]),Ae.needsLights&&Ae.numLightProbeGrids>0){let cn=Tt,yn=0;for(let Kn of At.state.lightProbeGridArray){if(Kn.texture===null)continue;cn.textures[yn]=Kn.texture,cn.min[yn]=Kn.boundingBox.min,cn.max[yn]=Kn.boundingBox.max,cn.resolution[yn]=Kn.resolution,yn++}for(let Kn in cn)cn[Kn].length=yn;Mn.probesSH.value=cn.textures,Mn.probesMin.value=cn.min,Mn.probesMax.value=cn.max,Mn.probesResolution.value=cn.resolution}zs.upload(Nt,el(Ae),Mn,ze)}if(Ut.isShaderMaterial&&Ut.uniformsNeedUpdate===!0)zs.upload(Nt,el(Ae),Mn,ze),Ut.uniformsNeedUpdate=!1;if(Ut.isSpriteMaterial)je.setValue(Nt,"center",Ot.center);if(je.setValue(Nt,"modelViewMatrix",Ot.modelViewMatrix),je.setValue(Nt,"normalMatrix",Ot.normalMatrix),je.setValue(Nt,"modelMatrix",Ot.matrixWorld),Ut.uniformsGroups!==void 0){let cn=Ut.uniformsGroups;for(let yn=0,Kn=cn.length;yn<Kn;yn++){let sl=cn[yn];fe.update(sl,En),fe.bind(sl,En)}}return En}function Oh(vt,Pt){vt.ambientLightColor.needsUpdate=Pt,vt.lightProbe.needsUpdate=Pt,vt.sunLights.needsUpdate=Pt,vt.sunLightShadows.needsUpdate=Pt,vt.directionalLights.needsUpdate=Pt,vt.directionalLightShadows.needsUpdate=Pt,vt.pointLights.needsUpdate=Pt,vt.pointLightShadows.needsUpdate=Pt,vt.spotLights.needsUpdate=Pt,vt.spotLightShadows.needsUpdate=Pt,vt.rectAreaLights.needsUpdate=Pt,vt.hemisphereLights.needsUpdate=Pt}function Bh(vt){return vt.isMeshLambertMaterial||vt.isMeshToonMaterial||vt.isMeshPhongMaterial||vt.isMeshStandardMaterial||vt.isShadowMaterial||vt.isShaderMaterial&&vt.lights===!0}this.getActiveCubeFace=function(){return Vt},this.getActiveMipmapLevel=function(){return Xt},this.getRenderTarget=function(){return Ft},this.setRenderTargetTextures=function(vt,Pt,Gt){let Ut=Ue.get(vt);if(Ut.__autoAllocateDepthBuffer=vt.resolveDepthBuffer===!1,Ut.__autoAllocateDepthBuffer===!1)Ut.__useRenderToTexture=!1;Ue.get(vt.texture).__webglTexture=Pt,Ue.get(vt.depthTexture).__webglTexture=Ut.__autoAllocateDepthBuffer?void 0:Gt,Ut.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(vt,Pt){let Gt=Ue.get(vt);Gt.__webglFramebuffer=Pt,Gt.__useDefaultFramebuffer=Pt===void 0},this.setRenderTarget=function(vt,Pt=0,Gt=0){Ft=vt,Vt=Pt,Xt=Gt;let Ut=null,Ot=!1,de=!1;if(vt){let he=Ue.get(vt);if(he.__useDefaultFramebuffer!==void 0){pe.bindFramebuffer(Nt.FRAMEBUFFER,he.__webglFramebuffer),Jt.copy(vt.viewport),te.copy(vt.scissor),Se=vt.scissorTest,pe.viewport(Jt),pe.scissor(te),pe.setScissorTest(Se),se=-1;return}else if(he.__webglFramebuffer===void 0)ze.setupRenderTarget(vt);else if(he.__hasExternalTextures)ze.rebindTextures(vt,Ue.get(vt.texture).__webglTexture,Ue.get(vt.depthTexture).__webglTexture);else if(vt.depthBuffer){let ke=vt.depthTexture;if(he.__boundDepthTexture!==ke){if(ke!==null&&Ue.has(ke)&&(vt.width!==ke.image.width||vt.height!==ke.image.height))throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ze.setupDepthRenderbuffer(vt)}}let xe=vt.texture;if(xe.isData3DTexture||xe.isDataArrayTexture||xe.isCompressedArrayTexture)de=!0;let we=Ue.get(vt).__webglFramebuffer;if(vt.isWebGLCubeRenderTarget){if(Array.isArray(we[Pt]))Ut=we[Pt][Gt];else Ut=we[Pt];Ot=!0}else if(vt.samples>0&&ze.useMultisampledRTT(vt)===!1)Ut=Ue.get(vt).__webglMultisampledFramebuffer;else if(Array.isArray(we))Ut=we[Gt];else Ut=we;Jt.copy(vt.viewport),te.copy(vt.scissor),Se=vt.scissorTest}else Jt.copy(Ve).multiplyScalar(Le).floor(),te.copy(Fe).multiplyScalar(Le).floor(),Se=Ke;if(Gt!==0)Ut=zt;if(pe.bindFramebuffer(Nt.FRAMEBUFFER,Ut))pe.drawBuffers(vt,Ut);if(pe.viewport(Jt),pe.scissor(te),pe.setScissorTest(Se),Ot){let he=Ue.get(vt.texture);Nt.framebufferTexture2D(Nt.FRAMEBUFFER,Nt.COLOR_ATTACHMENT0,Nt.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,he.__webglTexture,Gt)}else if(de){let he=Pt;for(let xe=0;xe<vt.textures.length;xe++){let we=Ue.get(vt.textures[xe]);Nt.framebufferTextureLayer(Nt.FRAMEBUFFER,Nt.COLOR_ATTACHMENT0+xe,we.__webglTexture,Gt,he)}}else if(vt!==null&&Gt!==0){let he=Ue.get(vt.texture);Nt.framebufferTexture2D(Nt.FRAMEBUFFER,Nt.COLOR_ATTACHMENT0,Nt.TEXTURE_2D,he.__webglTexture,Gt)}se=-1};function il(vt){let Pt=Ue.get(vt);if(Pt.__readFormat!==vt.format||Pt.__readType!==vt.type)Pt.__readFormat=vt.format,Pt.__readType=vt.type,Pt.__formatReadable=dn.textureFormatReadable(vt.format),Pt.__typeReadable=dn.textureTypeReadable(vt.type);return Pt}if(this.readRenderTargetPixels=function(vt,Pt,Gt,Ut,Ot,de,Te,he=0){if(!(vt&&vt.isWebGLRenderTarget)){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=Ue.get(vt).__webglFramebuffer;if(vt.isWebGLCubeRenderTarget&&Te!==void 0){if(xe=xe[Te],Array.isArray(xe))xe=xe[0]}if(xe){pe.bindFramebuffer(Nt.FRAMEBUFFER,xe);try{let we=vt.textures[he],{format:ke,type:Je}=we;if(vt.textures.length>1)Nt.readBuffer(Nt.COLOR_ATTACHMENT0+he);let Ee=il(we);if(Ee.__formatReadable===!1){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ee.__typeReadable===!1){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(Pt>=0&&Pt<=vt.width-Ut&&(Gt>=0&&Gt<=vt.height-Ot))Nt.readPixels(Pt,Gt,Ut,Ot,ie.convert(ke),ie.convert(Je),de)}finally{let we=Ft!==null?Ue.get(Ft).__webglFramebuffer:null;pe.bindFramebuffer(Nt.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(vt,Pt,Gt,Ut,Ot,de,Te,he=0){if(!(vt&&vt.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=Ue.get(vt).__webglFramebuffer;if(vt.isWebGLCubeRenderTarget&&Te!==void 0){if(xe=xe[Te],Array.isArray(xe))xe=xe[0]}if(xe)if(Pt>=0&&Pt<=vt.width-Ut&&(Gt>=0&&Gt<=vt.height-Ot)){pe.bindFramebuffer(Nt.FRAMEBUFFER,xe);let we=vt.textures[he],{format:ke,type:Je}=we;if(vt.textures.length>1)Nt.readBuffer(Nt.COLOR_ATTACHMENT0+he);let Ee=il(we);if(Ee.__formatReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ee.__typeReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let $e=Nt.createBuffer();Nt.bindBuffer(Nt.PIXEL_PACK_BUFFER,$e),Nt.bufferData(Nt.PIXEL_PACK_BUFFER,de.byteLength,Nt.STREAM_READ),Nt.readPixels(Pt,Gt,Ut,Ot,ie.convert(ke),ie.convert(Je),0),Nt.bindBuffer(Nt.PIXEL_PACK_BUFFER,null);let fn=Ft!==null?Ue.get(Ft).__webglFramebuffer:null;pe.bindFramebuffer(Nt.FRAMEBUFFER,fn);let ln=Nt.fenceSync(Nt.SYNC_GPU_COMMANDS_COMPLETE,0);return Nt.flush(),await Nc(Nt,ln,4),Nt.bindBuffer(Nt.PIXEL_PACK_BUFFER,$e),Nt.getBufferSubData(Nt.PIXEL_PACK_BUFFER,0,de),Nt.bindBuffer(Nt.PIXEL_PACK_BUFFER,null),Nt.deleteBuffer($e),Nt.deleteSync(ln),de}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(vt,Pt=null,Gt=0){let Ut=Math.pow(2,-Gt),Ot=Math.floor(vt.image.width*Ut),de=Math.floor(vt.image.height*Ut),Te=Pt!==null?Pt.x:0,he=Pt!==null?Pt.y:0;ze.setTexture2D(vt,0),Nt.copyTexSubImage2D(Nt.TEXTURE_2D,Gt,0,0,Te,he,Ot,de),pe.unbindTexture()},this.copyTextureToTexture=function(vt,Pt,Gt=null,Ut=null,Ot=0,de=0){let Te,he,xe,we,ke,Je,Ee,$e,fn,ln=vt.isCompressedTexture?vt.mipmaps[de]:vt.image;if(Gt!==null)Te=Gt.max.x-Gt.min.x,he=Gt.max.y-Gt.min.y,xe=Gt.isBox3?Gt.max.z-Gt.min.z:1,we=Gt.min.x,ke=Gt.min.y,Je=Gt.isBox3?Gt.min.z:0;else{let je=Math.pow(2,-Ot);if(Te=Math.floor(ln.width*je),he=Math.floor(ln.height*je),vt.isDataArrayTexture)xe=ln.depth;else if(vt.isData3DTexture)xe=Math.floor(ln.depth*je);else xe=1;we=0,ke=0,Je=0}if(Ut!==null)Ee=Ut.x,$e=Ut.y,fn=Ut.z;else Ee=0,$e=0,fn=0;let on=ie.convert(Pt.format),Tn=ie.convert(Pt.type),Ae;if(Pt.isData3DTexture)ze.setTexture3D(Pt,0),Ae=Nt.TEXTURE_3D;else if(Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)ze.setTexture2DArray(Pt,0),Ae=Nt.TEXTURE_2D_ARRAY;else ze.setTexture2D(Pt,0),Ae=Nt.TEXTURE_2D;pe.activeTexture(Nt.TEXTURE0),pe.pixelStorei(Nt.UNPACK_FLIP_Y_WEBGL,Pt.flipY),pe.pixelStorei(Nt.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Pt.premultiplyAlpha),pe.pixelStorei(Nt.UNPACK_ALIGNMENT,Pt.unpackAlignment);let Cn=pe.getParameter(Nt.UNPACK_ROW_LENGTH),en=pe.getParameter(Nt.UNPACK_IMAGE_HEIGHT),Mi=pe.getParameter(Nt.UNPACK_SKIP_PIXELS),En=pe.getParameter(Nt.UNPACK_SKIP_ROWS),Hs=pe.getParameter(Nt.UNPACK_SKIP_IMAGES);pe.pixelStorei(Nt.UNPACK_ROW_LENGTH,ln.width),pe.pixelStorei(Nt.UNPACK_IMAGE_HEIGHT,ln.height),pe.pixelStorei(Nt.UNPACK_SKIP_PIXELS,we),pe.pixelStorei(Nt.UNPACK_SKIP_ROWS,ke),pe.pixelStorei(Nt.UNPACK_SKIP_IMAGES,Je);let hi=vt.isDataArrayTexture||vt.isData3DTexture,bi=Pt.isDataArrayTexture||Pt.isData3DTexture;if(vt.isDepthTexture){let je=Ue.get(vt),Mn=Ue.get(Pt),On=Ue.get(je.__renderTarget),cn=Ue.get(Mn.__renderTarget);pe.bindFramebuffer(Nt.READ_FRAMEBUFFER,On.__webglFramebuffer),pe.bindFramebuffer(Nt.DRAW_FRAMEBUFFER,cn.__webglFramebuffer);for(let yn=0;yn<xe;yn++){if(hi)Nt.framebufferTextureLayer(Nt.READ_FRAMEBUFFER,Nt.COLOR_ATTACHMENT0,Ue.get(vt).__webglTexture,Ot,Je+yn),Nt.framebufferTextureLayer(Nt.DRAW_FRAMEBUFFER,Nt.COLOR_ATTACHMENT0,Ue.get(Pt).__webglTexture,de,fn+yn);Nt.blitFramebuffer(we,ke,we+Te,ke+he,Ee,$e,Ee+Te,$e+he,Nt.DEPTH_BUFFER_BIT,Nt.NEAREST)}pe.bindFramebuffer(Nt.READ_FRAMEBUFFER,null),pe.bindFramebuffer(Nt.DRAW_FRAMEBUFFER,null)}else if(Ot!==0||vt.isRenderTargetTexture||Ue.has(vt)){let je=Ue.get(vt),Mn=Ue.get(Pt);pe.bindFramebuffer(Nt.READ_FRAMEBUFFER,$t),pe.bindFramebuffer(Nt.DRAW_FRAMEBUFFER,wt);for(let On=0;On<xe;On++){if(hi)Nt.framebufferTextureLayer(Nt.READ_FRAMEBUFFER,Nt.COLOR_ATTACHMENT0,je.__webglTexture,Ot,Je+On);else Nt.framebufferTexture2D(Nt.READ_FRAMEBUFFER,Nt.COLOR_ATTACHMENT0,Nt.TEXTURE_2D,je.__webglTexture,Ot);if(bi)Nt.framebufferTextureLayer(Nt.DRAW_FRAMEBUFFER,Nt.COLOR_ATTACHMENT0,Mn.__webglTexture,de,fn+On);else Nt.framebufferTexture2D(Nt.DRAW_FRAMEBUFFER,Nt.COLOR_ATTACHMENT0,Nt.TEXTURE_2D,Mn.__webglTexture,de);if(Ot!==0)Nt.blitFramebuffer(we,ke,we+Te,ke+he,Ee,$e,Ee+Te,$e+he,Nt.COLOR_BUFFER_BIT,Nt.NEAREST);else if(bi)Nt.copyTexSubImage3D(Ae,de,Ee,$e,fn+On,we,ke,Te,he);else Nt.copyTexSubImage2D(Ae,de,Ee,$e,we,ke,Te,he)}pe.bindFramebuffer(Nt.READ_FRAMEBUFFER,null),pe.bindFramebuffer(Nt.DRAW_FRAMEBUFFER,null)}else if(bi)if(vt.isDataTexture||vt.isData3DTexture)Nt.texSubImage3D(Ae,de,Ee,$e,fn,Te,he,xe,on,Tn,ln.data);else if(Pt.isCompressedArrayTexture)Nt.compressedTexSubImage3D(Ae,de,Ee,$e,fn,Te,he,xe,on,ln.data);else Nt.texSubImage3D(Ae,de,Ee,$e,fn,Te,he,xe,on,Tn,ln);else if(vt.isDataTexture)Nt.texSubImage2D(Nt.TEXTURE_2D,de,Ee,$e,Te,he,on,Tn,ln.data);else if(vt.isCompressedTexture)Nt.compressedTexSubImage2D(Nt.TEXTURE_2D,de,Ee,$e,ln.width,ln.height,on,ln.data);else Nt.texSubImage2D(Nt.TEXTURE_2D,de,Ee,$e,Te,he,on,Tn,ln);if(pe.pixelStorei(Nt.UNPACK_ROW_LENGTH,Cn),pe.pixelStorei(Nt.UNPACK_IMAGE_HEIGHT,en),pe.pixelStorei(Nt.UNPACK_SKIP_PIXELS,Mi),pe.pixelStorei(Nt.UNPACK_SKIP_ROWS,En),pe.pixelStorei(Nt.UNPACK_SKIP_IMAGES,Hs),de===0&&Pt.generateMipmaps===!0&&Pt.mipmapsAutoUpdate===!0)Nt.generateMipmap(Ae);pe.unbindTexture()},this.initRenderTarget=function(vt){if(Ue.get(vt).__webglFramebuffer===void 0)ze.setupRenderTarget(vt)},this.initTexture=function(vt){if(vt.isCubeTexture)ze.setTextureCube(vt,0);else if(vt.isData3DTexture)ze.setTexture3D(vt,0);else if(vt.isDataArrayTexture||vt.isCompressedArrayTexture)ze.setTexture2DArray(vt,0);else ze.setTexture2D(vt,0);pe.unbindTexture()},this.resetState=function(){Vt=0,Xt=0,Ft=null,pe.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fo}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(tt){this._outputColorSpace=tt;let et=this.getContext();et.drawingBufferColorSpace=i._getDrawingBufferColorSpace(tt),et.unpackColorSpace=i._getUnpackColorSpace()}}
export{q,u,_,I,P,L,N,b,D,U,F,Y,d,y,s,S,t,e,i,c,o,m,n,O,T,r,f,x,a,Z,B,l,E,M,z,G,k,w,H,A,W,v,h,V,g,J,K,p,Q,R,X,j,C,ee};
