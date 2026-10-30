"use client"

/**
 * Nimbus UI · Liquid Navbar — "Waterline".
 * Original component supplied by the user, by guglielmogiannattasio.it.
 * React + WebGL lens, spring bodies, split droplets, ripples, SVG refraction,
 * and CSS fallback. Adapted for the copper palette and bounded rendering.
 */
import * as React from "react"
import { House, Globe, Send, Droplet, UserRound } from "lucide-react"
import { cn } from "@/lib/utils"
import { VERT, FRAG } from "./liquid-glass-shaders"

export type NimbusFx = "plane" | "drop" | "spin" | "glow" | "wave" | "pop" | "none"
export type LiquidNavItem = { label: string; href?: string; icon?: React.ReactNode; fx?: NimbusFx }
export type LiquidNavbarProps = {
  items?: LiquidNavItem[]
  defaultActive?: number
  active?: number
  onChange?: (index: number, item: LiquidNavItem) => void
  tone?: "light" | "dark"
  compact?: boolean
  sound?: boolean
  /** Also respects the operating system's reduced-motion preference. */
  motion?: boolean
  /** Explicit fallback for environments where WebGL is unavailable or unwanted. */
  webgl?: boolean
  ariaLabel?: string
  className?: string
  style?: React.CSSProperties
}
export const NimbusIcons = {
  home: <House aria-hidden="true" />, globe: <Globe aria-hidden="true" />,
  plane: <Send aria-hidden="true" />, drop: <Droplet aria-hidden="true" />,
  user: <UserRound aria-hidden="true" />,
}
const DEFAULT_ITEMS: LiquidNavItem[] = [
  {label:"Home", icon:NimbusIcons.home, fx:"glow"},
  {label:"Explore", icon:NimbusIcons.globe, fx:"spin"},
  {label:"Flights", icon:NimbusIcons.plane, fx:"plane"},
  {label:"Weather", icon:NimbusIcons.drop, fx:"drop"},
  {label:"Profile", icon:NimbusIcons.user, fx:"wave"},
]
const PAD = 14
type Body = {x:number; v:number}
type Sat = {x:number; y:number; vx:number; vy:number; r:number; k:number}
type Rip = {x:number; y:number; age:number; amp:number}
type GLContext = {
  gl:WebGLRenderingContext
  u:Record<string,WebGLUniformLocation|null>
  dispose:()=>void
}
function makeState() {
  return {
    a:{x:0,v:0} as Body, b:{x:0,v:0} as Body, sy:{s:1,v:0},
    lead:0 as 0|1, lagFrom:0, sats:[] as Sat[], rips:[] as Rip[],
    t:{x:0,cy:0,q:0,r:22}, q:0, mouse:{x:0,y:0,s:0,on:false},
    moving:false, split:false, ready:false, w:0, h:0, visible:true,
    intersecting:true, pageVisible:true, reduce:false, raf:0, last:0,time:0,
    glc:null as GLContext|null, blobs:new Float32Array(24),
    scales:new Float32Array(6), ripples:new Float32Array(24),
  }
}
function initGL(canvas:HTMLCanvasElement):GLContext|null {
  let gl:WebGLRenderingContext|null
  try { gl=canvas.getContext("webgl",{premultipliedAlpha:true,alpha:true,antialias:false}) } catch { return null }
  if (!gl) return null
  const g=gl,shaders:WebGLShader[]=[]
  let program:WebGLProgram|null=null,buffer:WebGLBuffer|null=null
  const dispose=()=>{
    if(buffer)g.deleteBuffer(buffer)
    if(program)g.deleteProgram(program)
    shaders.forEach(shader=>g.deleteShader(shader))
  }
  const compile=(type:number,source:string)=>{
    const shader=g.createShader(type)
    if(!shader)return null
    shaders.push(shader);g.shaderSource(shader,source);g.compileShader(shader)
    return g.getShaderParameter(shader,g.COMPILE_STATUS)?shader:null
  }
  const highp=g.getShaderPrecisionFormat(g.FRAGMENT_SHADER,g.HIGH_FLOAT)?.precision
  const vs=compile(g.VERTEX_SHADER,VERT)
  const fs=compile(g.FRAGMENT_SHADER,highp?FRAG:FRAG.replace("precision highp","precision mediump"))
  if(!vs||!fs){dispose();return null}
  program=g.createProgram()
  if(!program){dispose();return null}
  g.attachShader(program,vs);g.attachShader(program,fs);g.linkProgram(program)
  if(!g.getProgramParameter(program,g.LINK_STATUS)){dispose();return null}
  g.useProgram(program);buffer=g.createBuffer()
  if(!buffer){dispose();return null}
  g.bindBuffer(g.ARRAY_BUFFER,buffer)
  g.bufferData(g.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),g.STATIC_DRAW)
  const location=g.getAttribLocation(program,"a")
  if(location<0){dispose();return null}
  g.enableVertexAttribArray(location);g.vertexAttribPointer(location,2,g.FLOAT,false,0,0)
  const u:GLContext["u"]={}
  for(const name of ["uRes","uDpr","uTime","uPill","uBlob","uSy","uRip","uMouse","uDark","uAmb"]){
    u[name]=g.getUniformLocation(program,name)
  }
  return {gl:g,u,dispose}
}
function supportsRefraction(){
  if(typeof window==="undefined"||typeof CSS==="undefined")return false
  return /Chrome\/|Chromium\/|Edg\//.test(navigator.userAgent)&&
    !/Firefox\//.test(navigator.userAgent)&&CSS.supports("backdrop-filter","url(#a)")
}

export function LiquidNavbar({
  items=DEFAULT_ITEMS,defaultActive=0,active,onChange,tone="light",
  compact,sound=false,motion=true,webgl=true,ariaLabel="Main navigation",className,style,
}:LiquidNavbarProps){
  const [inner,setInner]=React.useState(defaultActive)
  const current=Math.max(0,Math.min(items.length-1,active??inner))
  const navRef=React.useRef<HTMLElement>(null)
  const canvasRef=React.useRef<HTMLCanvasElement>(null)
  const dropRef=React.useRef<HTMLSpanElement>(null)
  const itemRefs=React.useRef<(HTMLElement|null)[]>([])
  const iconRefs=React.useRef<(HTMLSpanElement|null)[]>([])
  const audio=React.useRef<AudioContext|null>(null)
  const delay=React.useRef<ReturnType<typeof setTimeout>|null>(null)
  const st=React.useRef(makeState())
  const [gl,setGl]=React.useState<"on"|"off">("off")
  const [refract,setRefract]=React.useState(false)
  const [reduced,setReduced]=React.useState(!motion)
  const [fx,setFx]=React.useState({i:-1,n:0})
  const filterId="nimbus-refract-"+React.useId().replace(/[^a-zA-Z0-9_-]/g,"")
  const darkRef=React.useRef(tone==="dark"?1:0)
  darkRef.current=tone==="dark"?1:0

  const draw=React.useCallback(()=>{
    const s=st.current,T=s.t
    if(!s.ready||s.w<=0||s.h<=0)return
    const sep=Math.abs(s.a.x-s.b.x),thin=Math.min(sep/(2*(s.q+T.r)||1),1),r=T.r*(1-.3*thin)
    if(s.glc){
      const {gl:g,u}=s.glc
      if(g.isContextLost())return
      const dpr=Math.min(window.devicePixelRatio||1,2)
      g.viewport(0,0,g.drawingBufferWidth,g.drawingBufferHeight)
      g.uniform2f(u.uRes,s.w+PAD*2,s.h+PAD*2);g.uniform1f(u.uDpr,dpr)
      g.uniform1f(u.uTime,s.time);g.uniform4f(u.uPill,PAD,PAD,s.w,s.h)
      const blobs=s.blobs,sy=s.scales
      blobs.fill(0);sy.fill(1)
      const head=s.lead===0?s.a:s.b,tail=s.lead===0?s.b:s.a
      blobs.set([head.x,T.cy,s.q*(1-.25*thin),T.r*(1-.12*thin),tail.x,T.cy,s.q*(1-.8*thin),T.r*(1-.5*thin)])
      sy[0]=sy[1]=s.sy.s
      s.sats.slice(0,4).forEach((d,i)=>blobs.set([d.x,d.y,0,d.r],8+i*4))
      g.uniform4fv(u.uBlob,blobs);g.uniform1fv(u.uSy,sy)
      s.ripples.fill(0)
      s.rips.slice(-6).forEach((p,i)=>s.ripples.set([p.x,p.y,p.age,p.amp],i*4))
      g.uniform4fv(u.uRip,s.ripples);g.uniform3f(u.uMouse,s.mouse.x,s.mouse.y,s.mouse.s)
      g.uniform1f(u.uDark,darkRef.current)
      g.uniform1f(u.uAmb,!s.reduce&&(s.moving||s.rips.length)?.14:0)
      g.clearColor(0,0,0,0);g.clear(g.COLOR_BUFFER_BIT);g.drawArrays(g.TRIANGLES,0,3)
    }
    // Keep the CSS lens ready for immediate context-loss fallback.
    if(dropRef.current){
      const left=Math.min(s.a.x,s.b.x)-s.q-r-PAD
      dropRef.current.style.width=(sep+2*(s.q+r))+"px"
      dropRef.current.style.transform="translateX("+left+"px) scaleY("+s.sy.s+")"
    }
  },[])

  const step=React.useCallback((dt:number,now:number)=>{
    const s=st.current,T=s.t
    s.time+=dt
    if(s.reduce){
      s.a.x=s.b.x=T.x;s.a.v=s.b.v=0;s.q=T.q;s.sy={s:1,v:0}
      s.sats=[];s.rips=[];s.moving=false;s.mouse.s=0;s.mouse.on=false
      return
    }
    s.q+=(T.q-s.q)*Math.min(1,dt*12)
    const bodies=[s.a,s.b]
    let still=Math.abs(T.q-s.q)<.05
    bodies.forEach((body,i)=>{
      const lead=i===s.lead,k=lead?210:72,c=lead?25:13
      const f=!lead&&now<s.lagFrom?.08:1
      body.v+=(k*(T.x-body.x)-c*body.v)*dt*f;body.x+=body.v*dt
      const lo=PAD+6+s.q+T.r-3,hi=PAD+s.w-6-s.q-T.r+3
      if(body.x<lo||body.x>hi){
        s.sy.v-=Math.min(Math.abs(body.v),900)*.0016
        body.x=Math.max(lo,Math.min(hi,body.x));body.v*=-.25
      }
      if(Math.abs(T.x-body.x)>.3||Math.abs(body.v)>3)still=false
    })
    const syT=1-.2*Math.min(Math.abs(bodies[s.lead].v)/1500,1)
    s.sy.v+=(280*(syT-s.sy.s)-9*s.sy.v)*dt;s.sy.s+=s.sy.v*dt
    if(Math.abs(s.sy.s-1)>.002||Math.abs(s.sy.v)>.02)still=false
    const sep=Math.abs(s.a.x-s.b.x),r=T.r*(1-.3*Math.min(sep/(2*(T.q+T.r)||1),1))
    if(!s.split&&s.moving&&sep-2*T.q-2*r>-6){
      s.split=true
      const lo=bodies[1-s.lead],hi=bodies[s.lead]
      ;[.3,.5,.72].forEach((t,j)=>s.sats.push({
        x:lo.x+(hi.x-lo.x)*t+(Math.random()-.5)*4,y:T.cy+(Math.random()-.5)*8,
        vx:(lo.v+hi.v)*.45,vy:(Math.random()-.5)*40,r:4+Math.random()*2-j*.5,k:70+Math.random()*90,
      }))
      s.sats=s.sats.slice(-4)
    }
    s.sats=s.sats.filter(d=>{
      d.vx+=(d.k*(T.x-d.x)-9*d.vx)*dt;d.vy+=(90*(T.cy-d.y)-7*d.vy)*dt
      d.x+=d.vx*dt;d.y+=d.vy*dt
      d.x=Math.max(PAD+8+d.r,Math.min(PAD+s.w-8-d.r,d.x))
      d.y=Math.max(T.cy-T.r+d.r,Math.min(T.cy+T.r-d.r,d.y))
      if(Math.abs(T.x-d.x)<T.q+T.r*.5)d.r-=dt*26
      return d.r>.6
    })
    if(s.sats.length)still=false
    if(s.moving&&still){
      s.moving=false;s.a.x=s.b.x=T.x;s.a.v=s.b.v=0;s.q=T.q;s.sy={s:1,v:0}
      s.rips.push({x:T.x,y:T.cy,age:0,amp:s.split?.8:.45})
    }
    s.rips=s.rips.slice(-6).filter(p=>(p.age+=dt)<2.4)
    const target=s.mouse.on?1:0
    s.mouse.s+=(target-s.mouse.s)*Math.min(1,dt*7)
    if(Math.abs(target-s.mouse.s)<.005)s.mouse.s=target
  },[])

  const stop=React.useCallback(()=>{
    const s=st.current
    cancelAnimationFrame(s.raf);s.raf=0
    if(navRef.current)navRef.current.dataset.animating="false"
  },[])
  const loop=React.useCallback(()=>{
    const s=st.current
    if(s.raf||!s.visible||!s.ready)return
    if(s.reduce){step(0,performance.now());draw();return}
    s.last=performance.now()
    if(navRef.current)navRef.current.dataset.animating="true"
    const tick=(now:number)=>{
      const dt=Math.min((now-s.last)/1000,1/30)
      s.last=now;step(dt,now);draw()
      const busy=s.moving||s.rips.length>0||s.sats.length>0||
        Math.abs((s.mouse.on?1:0)-s.mouse.s)>.005||Math.abs(s.q-s.t.q)>.05
      if(s.visible&&!s.reduce&&busy)s.raf=requestAnimationFrame(tick)
      else{s.raf=0;if(navRef.current)navRef.current.dataset.animating="false"}
    }
    s.raf=requestAnimationFrame(tick)
  },[draw,step])

  const measure=React.useCallback(()=>{
    const nav=navRef.current,el=itemRefs.current[current]
    if(!nav||!el||!nav.offsetWidth)return
    const s=st.current,T=s.t
    s.w=nav.offsetWidth;s.h=nav.offsetHeight
    T.r=el.offsetHeight/2;T.q=Math.max(0,el.offsetWidth/2-T.r)
    T.cy=PAD+el.offsetTop+el.offsetHeight/2
    const nx=PAD+el.offsetLeft+el.offsetWidth/2
    if(!s.ready){s.a.x=s.b.x=nx;s.q=T.q;s.ready=true}
    else if(Math.abs(nx-T.x)>.5){
      s.lead=Math.abs(nx-s.a.x)<=Math.abs(nx-s.b.x)?0:1
      s.lagFrom=performance.now()+70;s.moving=true;s.split=false
    }
    T.x=nx;nav.dataset.ready="true"
    const cv=canvasRef.current
    if(cv){
      const dpr=Math.min(window.devicePixelRatio||1,2),width=s.w+PAD*2,height=s.h+PAD*2
      if(cv.width!==Math.round(width*dpr)||cv.height!==Math.round(height*dpr)){
        cv.width=Math.round(width*dpr);cv.height=Math.round(height*dpr)
        cv.style.width=width+"px";cv.style.height=height+"px"
      }
    }
    draw();loop()
  },[current,draw,loop])
  const measureRef=React.useRef(measure)
  measureRef.current=measure
  React.useLayoutEffect(()=>{measure()},[measure,items,compact])

  React.useEffect(()=>{
    const s=st.current,cv=canvasRef.current
    const setup=()=>{
      s.glc?.dispose();s.glc=webgl&&cv?initGL(cv):null
      setGl(s.glc?"on":"off");draw();loop()
    }
    setup();setRefract(supportsRefraction())
    const lost=(event:Event)=>{
      event.preventDefault();s.glc?.dispose();s.glc=null;setGl("off");draw()
    }
    cv?.addEventListener("webglcontextlost",lost)
    cv?.addEventListener("webglcontextrestored",setup)
    const visibility=()=>{
      s.pageVisible=document.visibilityState==="visible";s.visible=s.intersecting&&s.pageVisible
      if(s.visible)loop();else stop()
    }
    const io=new IntersectionObserver(([entry])=>{s.intersecting=entry.isIntersecting;visibility()})
    if(navRef.current)io.observe(navRef.current)
    document.addEventListener("visibilitychange",visibility);visibility()
    return ()=>{
      cv?.removeEventListener("webglcontextlost",lost)
      cv?.removeEventListener("webglcontextrestored",setup)
      io.disconnect();document.removeEventListener("visibilitychange",visibility)
      stop();s.glc?.dispose();s.glc=null
    }
  },[draw,loop,stop,webgl])
  React.useEffect(()=>{
    const media=matchMedia("(prefers-reduced-motion: reduce)")
    const update=()=>{
      const s=st.current;s.reduce=media.matches||!motion;setReduced(s.reduce)
      if(s.reduce){
        stop();step(0,performance.now());draw()
        if(delay.current)clearTimeout(delay.current)
      }else loop()
    }
    update();media.addEventListener("change",update)
    return ()=>media.removeEventListener("change",update)
  },[motion,draw,loop,stop,step])
  React.useEffect(()=>{
    const ro=new ResizeObserver(()=>{measureRef.current()})
    if(navRef.current)ro.observe(navRef.current)
    itemRefs.current.forEach(el=>{if(el)ro.observe(el)})
    let alive=true
    document.fonts.ready.then(()=>{if(alive)measureRef.current()})
    const resize=()=>measureRef.current()
    addEventListener("resize",resize,{passive:true})
    return ()=>{alive=false;ro.disconnect();removeEventListener("resize",resize)}
  },[items.length])
  React.useEffect(()=>{draw()},[tone,draw])
  React.useEffect(()=>()=>{
    if(delay.current)clearTimeout(delay.current)
    void audio.current?.close().catch(()=>{})
  },[])

  const local=(clientX:number,clientY:number)=>{
    const box=navRef.current!.getBoundingClientRect()
    return{x:clientX-box.left+PAD,y:clientY-box.top+PAD}
  }
  const ripple=(x:number,y:number,amp:number)=>{
    const s=st.current
    if(s.reduce)return
    s.rips=[...s.rips,{x,y,age:0,amp}].slice(-6);loop()
  }
  const plip=()=>{
    if(!sound||st.current.reduce)return
    try{
      const Constructor=window.AudioContext||(window as Window & {webkitAudioContext?:typeof AudioContext}).webkitAudioContext
      if(!Constructor)return
      const ctx=(audio.current ||=new Constructor())
      void ctx.resume().catch(()=>{})
      const time=ctx.currentTime,osc=ctx.createOscillator(),gain=ctx.createGain()
      osc.type="sine";osc.frequency.setValueAtTime(420+Math.random()*80,time)
      osc.frequency.exponentialRampToValueAtTime(1500,time+.07)
      gain.gain.setValueAtTime(.0001,time);gain.gain.exponentialRampToValueAtTime(.1,time+.008)
      gain.gain.exponentialRampToValueAtTime(.0001,time+.16)
      osc.connect(gain).connect(ctx.destination);osc.start(time);osc.stop(time+.18)
      osc.onended=()=>{osc.disconnect();gain.disconnect()}
    }catch{/* Audio is optional and never blocks navigation. */}
  }
  const select=(index:number)=>{
    const item=items[index]
    if(!item)return
    const kind=item.fx??(item.icon?"pop":"none")
    if(!st.current.reduce)setFx(f=>({i:index,n:f.n+1}))
    plip()
    if(delay.current)clearTimeout(delay.current)
    const icon=iconRefs.current[index]
    if(icon&&!st.current.reduce){
      const rect=icon.getBoundingClientRect(),point=local(rect.left+rect.width/2,rect.top+rect.height/2)
      if(kind==="drop")delay.current=setTimeout(()=>ripple(point.x,st.current.t.cy,.9),430)
      if(kind==="plane")ripple(point.x,point.y,.5)
    }
    if(index!==current){
      if(active===undefined)setInner(index)
      onChange?.(index,item)
    }
  }
  const onKeyDown=(event:React.KeyboardEvent<HTMLElement>)=>{
    if(!["ArrowRight","ArrowLeft","Home","End"].includes(event.key)||!items.length)return
    event.preventDefault()
    const focused=itemRefs.current.indexOf(document.activeElement as HTMLElement),from=focused<0?current:focused
    const next=event.key==="Home"?0:event.key==="End"?items.length-1:
      (from+(event.key==="ArrowRight"?1:-1)+items.length)%items.length
    // Ordinary links: arrow keys move focus; Enter follows the actual href.
    itemRefs.current[next]?.focus()
  }
  const onMove=(event:React.PointerEvent<HTMLElement>)=>{
    if(event.pointerType!=="mouse"||st.current.reduce)return
    const point=local(event.clientX,event.clientY),s=st.current
    s.mouse.x=point.x;s.mouse.y=point.y;s.mouse.on=true;loop()
  }
  const navStyle={...style,"--n-refraction":"url(#"+filterId+")"} as React.CSSProperties
  return(
    <nav ref={navRef} className={cn("nimbus-nav",className)} data-tone={tone} data-gl={gl}
      data-compact={compact===undefined?undefined:String(compact)} data-reduced={String(reduced)}
      data-refract={refract?"on":"off"} aria-label={ariaLabel} style={navStyle}
      onKeyDown={onKeyDown} onPointerMove={onMove}
      onPointerLeave={()=>{st.current.mouse.on=false;loop()}}
      onPointerDown={event=>{const point=local(event.clientX,event.clientY);ripple(point.x,point.y,.65)}}>
      <svg width="0" height="0" className="absolute pointer-events-none" aria-hidden="true">
        <filter id={filterId} x="0" y="0" width="100%" height="100%" colorInterpolationFilters="sRGB">
          <feTurbulence type="fractalNoise" baseFrequency="0.006 0.02" numOctaves="2" seed="7" result="noise"/>
          <feGaussianBlur in="noise" stdDeviation="2" result="soft"/>
          <feDisplacementMap in="SourceGraphic" in2="soft" scale="36" xChannelSelector="R" yChannelSelector="G"/>
        </filter>
      </svg>
      <span className="nimbus-glass" aria-hidden="true"/>
      <canvas className="nimbus-water" ref={canvasRef} aria-hidden="true"/>
      <span className="nimbus-drop" ref={dropRef} aria-hidden="true"/>
      {items.map((item,index)=>{
        const kind=item.fx??"pop",playing=fx.i===index&&kind!=="none"&&!reduced
        const content=<>
          {item.icon&&<span className="nv-ico" key={playing?fx.n:0} data-fx={playing?kind:undefined}
            ref={el=>{iconRefs.current[index]=el}}>{item.icon}</span>}
          <span className="nimbus-label">{item.label}</span>
        </>
        const shared={
          className:"nimbus-item",
          "aria-current":index===current?(item.href?.startsWith("#")?"location" as const:"page" as const):undefined,
          "aria-label":item.label,
        }
        return item.href
          ? <a key={item.label+index} {...shared} ref={el=>{itemRefs.current[index]=el}} href={item.href}
              onClick={event=>{if(!event.metaKey&&!event.ctrlKey&&!event.shiftKey&&!event.altKey)select(index)}}>{content}</a>
          : <button key={item.label+index} {...shared} ref={el=>{itemRefs.current[index]=el}} type="button"
              onClick={()=>select(index)}>{content}</button>
      })}
    </nav>
  )
}
export {LiquidNavbar as Component}
export default LiquidNavbar
