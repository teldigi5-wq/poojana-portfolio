"use client"

/**
 * Portfolio adaptation of the supplied Osmo parallax example.
 * React + GSAP/ScrollTrigger + Lenis; typography replaces the parallax layers.
 * Each scene owns its cleanup. No page-wide killAll or global ticker changes.
 */
import * as React from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Lenis from "lenis"
import { Braces, Code2, Coffee, Database, Box, GitBranch, Layers3, Terminal, Wind, Zap, Pause, Play } from "lucide-react"

const TOOLS = [
  {name:"React", icon:Code2}, {name:"Next.js", icon:Layers3},
  {name:"TypeScript", icon:Braces}, {name:"Tailwind CSS", icon:Wind},
  {name:"GSAP", icon:Zap}, {name:"Java", icon:Coffee},
  {name:"Spring Boot", icon:GitBranch}, {name:"Python", icon:Terminal},
  {name:"FastAPI", icon:Zap}, {name:"PostgreSQL", icon:Database},
  {name:"Firebase", icon:Database}, {name:"Docker", icon:Box},
]

function useMotionAllowed() {
  const [allowed,setAllowed] = React.useState(false)
  React.useEffect(()=>{
    const reduce=matchMedia("(prefers-reduced-motion: reduce)")
    const forced=matchMedia("(forced-colors: active)")
    const update=()=>setAllowed(!reduce.matches&&!forced.matches&&!document.documentElement.classList.contains("motion-off"))
    const observer=new MutationObserver(update)
    observer.observe(document.documentElement,{attributes:true,attributeFilter:["class"]})
    reduce.addEventListener("change",update);forced.addEventListener("change",update);update()
    return ()=>{observer.disconnect();reduce.removeEventListener("change",update);forced.removeEventListener("change",update)}
  },[])
  return allowed
}

function ToolkitRibbons({motion}:{motion:boolean}) {
  const ref=React.useRef<HTMLElement>(null)
  const [paused,setPaused]=React.useState(false)
  React.useEffect(()=>{
    const root=ref.current
    if(!root||!motion||paused)return
    const animations=[...root.querySelectorAll<HTMLElement>(".ribbon-track")].map((track,i)=>{
      const animation=track.animate(
        [{transform:"translateX(0)"},{transform:"translateX(-50%)"}],
        {duration:i?54000:42000,iterations:Infinity,easing:"linear",direction:i?"reverse":"normal"}
      )
      animation.pause()
      return animation
    })
    let visible=false
    const update=()=>{
      root.dataset.animation=visible&&!document.hidden?"playing":"paused"
      animations.forEach(animation=>visible&&!document.hidden?animation.play():animation.pause())
    }
    const io=new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;update()},{rootMargin:"50px"})
    io.observe(root)
    document.addEventListener("visibilitychange",update)
    return ()=>{io.disconnect();document.removeEventListener("visibilitychange",update);animations.forEach(a=>a.cancel());root.dataset.animation="static"}
  },[motion,paused])
  return <section ref={ref} className="toolkit-section" aria-labelledby="toolkit-title">
    <div className="toolkit-copy shell">
      <div><p className="eyebrow">THE TOOLKIT / ALWAYS LEARNING</p><h2 id="toolkit-title">Different tools.<br/><em>One considered approach.</em></h2></div>
      <div className="toolkit-aside"><p>Chosen for the problem.<br/>Used across my websites<br/>and engineering projects.</p><button type="button" className="ribbon-pause" aria-pressed={paused} disabled={!motion} onClick={()=>setPaused(!paused)} aria-label={paused?"Resume toolkit animation":"Pause toolkit animation"}>{paused?<Play size={13} aria-hidden="true"/>:<Pause size={13} aria-hidden="true"/>}<span>{!motion?"MOTION OFF":paused?"RESUME RIBBONS":"PAUSE RIBBONS"}</span></button></div>
    </div>
    <p className="visually-hidden">Selected toolkit: {TOOLS.map(t=>t.name).join(", ")}. These tools are used across different projects, not all on this page.</p>
    <div className="ribbon-stage" aria-hidden="true">
      {[0,1].map(row=><div className={`tool-ribbon ribbon-${row}`} key={row}><div className="ribbon-track">
        {[0,1].map(copy=><div className="ribbon-group" key={copy}>{TOOLS.map(({name,icon:Icon},index)=><span className="ribbon-tool" key={name}><Icon strokeWidth={1.4}/><span>{name}</span><i>{String(index+1).padStart(2,"0")}</i></span>)}</div>)}
      </div></div>)}
    </div>
    <div className="toolkit-foot shell"><span>TOOLS CHANGE. THE ATTENTION TO DETAIL STAYS.</span><span>FORM × FUNCTION × INTENT</span></div>
  </section>
}

function useCinematicScenes(enabled:boolean) {
  const played=React.useRef(false)
  React.useEffect(()=>{
    if(!enabled||!gsap||!ScrollTrigger)return
    const scope=document.querySelector<HTMLElement>("main")
    if(!scope)return
    gsap.registerPlugin(ScrollTrigger)
    const remove: (()=>void)[]=[]
    let galleryTrigger:ScrollTrigger|undefined
    let lenis:Lenis|undefined
    let galleryIndex=0
    const wide=matchMedia("(min-width: 1100px) and (min-height: 700px) and (hover: hover) and (pointer: fine)")
    const ctx=gsap.context(()=>{
      // A single finite entrance. Text and links exist before any animation runs.
      if(!played.current&&scrollY<40&&!location.hash){
        played.current=true
        const entrance=gsap.timeline({defaults:{ease:"power3.out"}})
        entrance.set(".hero-shutters",{display:"flex"})
          .fromTo(".hero-shutters i",{scaleX:1},{scaleX:0,duration:.85,stagger:.065,transformOrigin:"right",onComplete:()=>{gsap.set(".hero-shutters",{display:"none"})}},0)
          .from(".hero-statement .line-mask > span",{yPercent:110,rotationX:-12,duration:1,stagger:.13,clearProps:"transform"},.1)
          .from(".hero-intro-line, .hero-description, .hero-explore",{y:14,opacity:0,duration:.7,stagger:.09,clearProps:"transform,opacity"},.35)
          .fromTo(".code-line",{clipPath:"inset(0 100% 0 0)"},{clipPath:"inset(0 0% 0 0)",duration:.7,stagger:.55,ease:"steps(28)",clearProps:"clipPath"},.7)
        const finish=()=>entrance.progress(1)
        const onKey=(event:KeyboardEvent)=>{if(event.key==="Tab")finish()}
        addEventListener("keydown",onKey,{once:true});remove.push(()=>removeEventListener("keydown",onKey))
      }

      scope.querySelectorAll<HTMLElement>(".case-timeline").forEach(list=>{
        gsap.fromTo(list,{"--case-progress":0},{"--case-progress":1,ease:"none",scrollTrigger:{trigger:list,start:"top 78%",end:"bottom 48%",scrub:.35}})
        list.querySelectorAll("li").forEach(row=>{
          gsap.from(row,{y:18,opacity:0,duration:.65,ease:"power2.out",scrollTrigger:{trigger:row,start:"top 91%",once:true}})
        })
      })
      scope.querySelectorAll<HTMLElement>(".case-notes-intro h4, .toolkit-copy h2").forEach(heading=>{
        gsap.from(heading,{y:22,opacity:0,duration:.8,ease:"power3.out",scrollTrigger:{trigger:heading,start:"top 92%",once:true}})
      })
      // A film-frame reveal replaces the old image parallax.
      gsap.from(".wayfarer-stage",{clipPath:"inset(4% 3% 4% 3%)",duration:1.1,ease:"power3.out",clearProps:"clipPath",scrollTrigger:{trigger:".wayfarer-stage",start:"top 88%",once:true}})
      gsap.from(".arch-node",{opacity:.25,y:12,duration:.6,stagger:.12,scrollTrigger:{trigger:".aetheris-stage",start:"top 65%",once:true}})

      const mm=gsap.matchMedia()
      mm.add(wide.media,()=>{
        const viewport=scope.querySelector<HTMLElement>(".gallery-viewport")
        const track=scope.querySelector<HTMLElement>(".gallery-track")
        const gallery=scope.querySelector<HTMLElement>(".project-gallery")
        const stage=scope.querySelector<HTMLElement>(".gallery-stage")
        if(!viewport||!track||!gallery||!stage)return
        const distance=()=>Math.max(0,track.scrollWidth-viewport.clientWidth)
        if(distance()<20)return
        gallery.dataset.mode="pinned"
        viewport.scrollLeft=0
        const tween=gsap.to(track,{x:()=>-distance(),ease:"none",scrollTrigger:{
          trigger:stage,start:"top 80px",end:()=>`+=${distance()}`,pin:true,scrub:.45,
          invalidateOnRefresh:true,anticipatePin:1,
          onUpdate:self=>{
            gallery.style.setProperty("--gallery-progress",String(self.progress))
            galleryIndex=Math.round(self.progress*3)
          }
        }})
        galleryTrigger=tween.scrollTrigger
        const focus=(event:FocusEvent)=>{
          const card=(event.target as HTMLElement).closest(".compact-project")
          if(!card||!galleryTrigger)return
          const index=[...track.children].indexOf(card)
          viewport.scrollLeft=0
          const position=galleryTrigger.start+(galleryTrigger.end-galleryTrigger.start)*index/3
          if(lenis)lenis.scrollTo(position,{immediate:true});else scrollTo({top:position,behavior:"instant"})
        }
        track.addEventListener("focusin",focus)
        return ()=>{
          track.removeEventListener("focusin",focus)
          galleryTrigger=undefined;delete gallery.dataset.mode;gallery.style.removeProperty("--gallery-progress")
        }
      })
      remove.push(()=>mm.revert())
    },scope)

    const viewport=scope.querySelector<HTMLElement>(".gallery-viewport")
    const track=scope.querySelector<HTMLElement>(".gallery-track")
    scope.querySelectorAll<HTMLButtonElement>("[data-gallery-direction]").forEach(button=>{
      const click=()=>{
        if(!viewport||!track)return
        const step=Number(button.dataset.galleryDirection)
        if(galleryTrigger){
          galleryIndex=Math.max(0,Math.min(3,galleryIndex+step))
          const position=galleryTrigger.start+(galleryTrigger.end-galleryTrigger.start)*galleryIndex/3
          if(lenis)lenis.scrollTo(position,{duration:.7});else scrollTo({top:position,behavior:"smooth"})
          wake()
        }else viewport.scrollBy({left:step*(track.children[0]?.getBoundingClientRect().width??360)+step*24,behavior:"smooth"})
      }
      button.addEventListener("click",click);remove.push(()=>button.removeEventListener("click",click))
    })

    // Lenis only on spacious fine-pointer screens; native touch remains intact.
    // Wake the shared ticker for a scroll, then remove our callback once settled.
    let ticking=false,smoothTime=0,previousTick=0
    const tick=(time:number)=>{
      // An idle pause must not become a huge first-frame delta on the next scroll.
      smoothTime+=previousTick?Math.min(Math.max(0,time-previousTick),1/30):1/60
      previousTick=time
      lenis?.raf(smoothTime*1000)
      if(!lenis?.isScrolling){gsap.ticker.remove(tick);ticking=false;scope.dataset.scrollActive="false"}
    }
    const wake=()=>{if(lenis&&!ticking&&!document.hidden){ticking=true;previousTick=0;scope.dataset.scrollActive="true";gsap.ticker.add(tick)}}
    const stopTicker=()=>{gsap.ticker.remove(tick);ticking=false;scope.dataset.scrollActive="false"}
    const connectLenis=()=>{
      stopTicker();lenis?.destroy();lenis=undefined
      scope.dataset.scrollEngine="native"
      if(!wide.matches)return
      lenis=new Lenis({lerp:.12,smoothWheel:true,syncTouch:false,autoRaf:false,
        prevent:node=>!!node.closest("dialog, .mobile-menu, .gallery-viewport")||document.body.classList.contains("menu-open")})
      scope.dataset.scrollEngine="lenis"
      lenis.on("scroll",ScrollTrigger.update)
    }
    connectLenis();wide.addEventListener("change",connectLenis)
    addEventListener("wheel",wake,{passive:true})
    const visibility=()=>{if(document.hidden){stopTicker();lenis?.stop()}else lenis?.start()}
    document.addEventListener("visibilitychange",visibility)
    const anchors=(event:MouseEvent)=>{
      if(!lenis||event.defaultPrevented||event.button!==0||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey)return
      const link=(event.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]')
      const href=link?.getAttribute("href")
      if(!href||href==="#"||href==="#main")return
      const target=document.getElementById(href.slice(1))
      if(!target)return
      event.preventDefault();history.pushState(null,"",href)
      // Lenis 1.3 honors the document's CSS scroll-padding-top for elements.
      lenis.scrollTo(target,{duration:.8});wake()
    }
    document.addEventListener("click",anchors)

    // Text rolls use WAAPI, independent of GSAP's scroll scene transforms.
    scope.querySelectorAll<HTMLElement>("[data-roll-text]").forEach(element=>{
      const original=element.textContent??""
      const roller=document.createElement("span")
      roller.className="roll-track"
      const first=document.createElement("span");first.textContent=original
      const second=first.cloneNode(true) as HTMLElement;second.setAttribute("aria-hidden","true")
      roller.append(first,second);element.replaceChildren(roller);element.classList.add("roll-clip")
      const animation=roller.animate([{transform:"translateY(0)"},{transform:"translateY(-50%)"}],{duration:430,easing:"cubic-bezier(.22,.75,.22,1)",fill:"both"})
      animation.pause();animation.currentTime=0
      const enter=()=>{animation.playbackRate=1;animation.play()}
      const leave=()=>animation.reverse()
      const parent=element.closest("a")??element
      parent.addEventListener("pointerenter",enter);parent.addEventListener("pointerleave",leave)
      parent.addEventListener("focus",enter);parent.addEventListener("blur",leave)
      remove.push(()=>{animation.cancel();parent.removeEventListener("pointerenter",enter);parent.removeEventListener("pointerleave",leave);parent.removeEventListener("focus",enter);parent.removeEventListener("blur",leave);element.textContent=original;element.classList.remove("roll-clip")})
    })
    const refresh=()=>ScrollTrigger.refresh()
    document.fonts?.ready.then(refresh)
    addEventListener("load",refresh,{once:true})
    return ()=>{
      const stage=scope.querySelector<HTMLElement>(".gallery-stage")
      const before=stage?.getBoundingClientRect()
      const preserve=!!before&&before.top<200&&before.bottom>200&&scope.querySelector('.project-gallery[data-mode="pinned"]')!==null
      remove.forEach(fn=>fn());ctx.revert();stopTicker();lenis?.destroy()
      if(preserve&&stage&&before){
        const shift=stage.getBoundingClientRect().top-before.top
        if(Math.abs(shift)>1)scrollTo({top:scrollY+shift,behavior:"instant"})
      }
      wide.removeEventListener("change",connectLenis);removeEventListener("wheel",wake)
      document.removeEventListener("visibilitychange",visibility);document.removeEventListener("click",anchors)
      removeEventListener("load",refresh)
      delete scope.dataset.scrollEngine;delete scope.dataset.scrollActive
    }
  },[enabled])
}

export function CinematicExperience(){
  const enabled=useMotionAllowed()
  useCinematicScenes(enabled)
  React.useEffect(()=>{
    const viewport=document.querySelector<HTMLElement>(".gallery-viewport")
    const keys=(event:KeyboardEvent)=>{
      if(event.target!==viewport||(event.key!=="ArrowRight"&&event.key!=="ArrowLeft"))return
      event.preventDefault()
      document.querySelector<HTMLButtonElement>(`[data-gallery-direction="${event.key==="ArrowRight"?1:-1}"]`)?.click()
    }
    viewport?.addEventListener("keydown",keys)
    return ()=>viewport?.removeEventListener("keydown",keys)
  },[])
  // Keep native carousel buttons useful when animation is disabled.
  React.useEffect(()=>{
    if(enabled)return
    const viewport=document.querySelector<HTMLElement>(".gallery-viewport")
    const cleanup:(()=>void)[]=[]
    document.querySelectorAll<HTMLButtonElement>("[data-gallery-direction]").forEach(button=>{
      const click=()=>viewport?.scrollBy({left:Number(button.dataset.galleryDirection)*(viewport.clientWidth*.85),behavior:"instant"})
      button.addEventListener("click",click);cleanup.push(()=>button.removeEventListener("click",click))
    })
    return ()=>cleanup.forEach(fn=>fn())
  },[enabled])
  return <ToolkitRibbons motion={enabled}/>
}

/** Registry compatibility with the filename in the supplied prompt. */
export { CinematicExperience as ParallaxComponent }
export default CinematicExperience
