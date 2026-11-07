"use client"

/**
 * Portfolio adaptation of the supplied Osmo parallax example.
 * React + GSAP/ScrollTrigger + Lenis; the supplied layered scroll choreography
 * is applied to the portrait, architecture, wordmark and welcome typography.
 * Each scene owns its cleanup. No page-wide killAll or global ticker changes.
 */
import * as React from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Lenis from "lenis"
import {PortfolioTextRoll} from "@/components/ui/text-roll"
import {CinematicContact} from "@/components/ui/cinematic-contact"
import {CommandPalette} from "@/components/ui/command-palette"
import {ProjectExplorers} from "@/components/ui/project-explorers"
import { Braces, Code2, Coffee, Database, Box, GitBranch, Layers3, Terminal, Wind, Zap } from "lucide-react"

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
    const update=()=>setAllowed(!reduce.matches&&!forced.matches&&!document.documentElement.classList.contains("motion-off")&&!document.documentElement.classList.contains("intro-active"))
    const observer=new MutationObserver(update)
    observer.observe(document.documentElement,{attributes:true,attributeFilter:["class"]})
    reduce.addEventListener("change",update);forced.addEventListener("change",update);update()
    return ()=>{observer.disconnect();reduce.removeEventListener("change",update);forced.removeEventListener("change",update)}
  },[])
  return allowed
}

function ToolkitRibbons({motion}:{motion:boolean}) {
  const ref=React.useRef<HTMLElement>(null)
  React.useEffect(()=>{
    const root=ref.current
    if(!root||!motion)return
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
      const playing=visible&&!document.hidden
      root.dataset.animation=playing?"playing":"paused"
      animations.forEach(animation=>playing?animation.play():animation.pause())
    }
    // Scroll adds bounded acceleration; hover never stops the ribbons.
    let reset:ReturnType<typeof setTimeout>|undefined
    let lastY=scrollY,lastTime=performance.now()
    const rate={value:1}
    const setRate=()=>animations.forEach(animation=>animation.updatePlaybackRate(rate.value))
    const onScroll=()=>{
      const now=performance.now(),distance=Math.abs(scrollY-lastY),elapsed=Math.max(16,now-lastTime)
      lastY=scrollY;lastTime=now
      if(!visible||document.hidden)return
      if(reset)clearTimeout(reset)
      gsap.to(rate,{value:1+Math.min(.8,distance/elapsed*.14),duration:.25,overwrite:true,onUpdate:setRate})
      reset=setTimeout(()=>gsap.to(rate,{value:1,duration:.65,overwrite:true,onUpdate:setRate}),140)
    }
    addEventListener("scroll",onScroll,{passive:true})
    const io=new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;update()},{rootMargin:"50px"})
    io.observe(root)
    document.addEventListener("visibilitychange",update)
    return ()=>{io.disconnect();document.removeEventListener("visibilitychange",update);removeEventListener("scroll",onScroll);if(reset)clearTimeout(reset);gsap.killTweensOf(rate);animations.forEach(a=>a.cancel());root.dataset.animation="static"}
  },[motion])
  return <section ref={ref} className="toolkit-section" aria-labelledby="toolkit-title">
    <div className="toolkit-copy shell">
      <div><p className="eyebrow">THE TOOLKIT / ALWAYS LEARNING</p><h2 id="toolkit-title">Different tools.<br/><em>One considered approach.</em></h2></div>
      <div className="toolkit-aside"><p>Chosen for the problem.<br/>Used across my websites<br/>and engineering projects.</p></div>
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

function useCodeTypewriter(enabled:boolean) {
  React.useEffect(()=>{
    const root=document.querySelector<HTMLElement>(".hero-code")
    if(!root||!enabled||!gsap)return
    const lines=[...root.querySelectorAll<HTMLElement>(".code-line")]
    if(!lines.length)return
    const ctx=gsap.context(()=>{},root)
    let timeline:gsap.core.Timeline
    ctx.add(()=>{
      timeline=gsap.timeline({paused:true,repeat:-1,repeatDelay:.8})
      timeline.set(lines,{clipPath:"inset(0 100% 0 0)"})
      lines.forEach(line=>{
        const characters=line.textContent?.length??28
        timeline.to(line,{clipPath:"inset(0 0% 0 0)",duration:characters*.04,ease:`steps(${characters})`})
      })
      timeline.to([...lines].reverse(),{clipPath:"inset(0 100% 0 0)",duration:.25,stagger:.12,ease:"steps(12)"},"+=4.5")
    })
    let visible=false
    const update=()=>{
      const active=visible&&!document.hidden
      root.dataset.typing=active?"playing":"paused"
      if(active)timeline.play();else timeline.pause()
    }
    const io=new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;update()},{threshold:.1})
    io.observe(root);document.addEventListener("visibilitychange",update)
    return ()=>{io.disconnect();document.removeEventListener("visibilitychange",update);ctx.revert();delete root.dataset.typing}
  },[enabled])
}

function useCinematicScenes(enabled:boolean) {
  const played=React.useRef(false)
  React.useEffect(()=>{
    if(!enabled||!gsap||!ScrollTrigger)return
    const scope=document.querySelector<HTMLElement>("main")
    if(!scope)return
    gsap.registerPlugin(ScrollTrigger)
    const remove: (()=>void)[]=[]
    let lenis:Lenis|undefined
    const finePointer=matchMedia("(hover: hover) and (pointer: fine)")
    const ctx=gsap.context(()=>{
      // A single finite entrance. Text and links exist before any animation runs.
      if(!played.current&&scrollY<40&&!location.hash){
        played.current=true
        const entrance=gsap.timeline({defaults:{ease:"power3.out"}})
        // The supplied loader now owns the opening; text roll runs after it closes.
        entrance.from(".hero-intro-line, .hero-description, .hero-explore",{y:14,opacity:0,duration:.7,stagger:.09,clearProps:"transform,opacity"})
        const finish=()=>entrance.progress(1)
        const onKey=(event:KeyboardEvent)=>{if(event.key==="Tab")finish()}
        addEventListener("keydown",onKey,{once:true});remove.push(()=>removeEventListener("keydown",onKey))
      }

      gsap.fromTo(".intro-word",{color:"#928575"},{color:"#f1e9dc",stagger:.12,ease:"none",scrollTrigger:{trigger:".intro",start:"top 75%",end:"center 52%",scrub:.4}})

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
      mm.add({desktop:"(min-width:901px)",mobile:"(max-width:900px)"},context=>{
        const hero=scope.querySelector<HTMLElement>("[data-parallax-layers]")
        if(!hero)return
        const depth=context.conditions?.desktop?[70,55,40,10]:[18,15,7,4]
        const scene=gsap.timeline({scrollTrigger:{trigger:hero,start:"top top",end:"bottom top",scrub:true,invalidateOnRefresh:true}})
        depth.forEach((yPercent,index)=>scene.to(hero.querySelector(`[data-parallax-layer="${index+1}"]`),{yPercent,ease:"none"},0))
        hero.dataset.scene="layered"
        return ()=>{delete hero.dataset.scene}
      })
      remove.push(()=>mm.revert())
    },scope)

    // Share GSAP's clock. Prime it at wake so the first Lenis frame can advance;
    // a short idle grace period covers wheel batches before their scroll begins.
    let ticking=false,smoothTime=0,previousTick=0,lastInput=0
    const tick=(time:number)=>{
      // An idle pause must not become a huge first-frame delta on the next scroll.
      smoothTime+=previousTick?Math.max(0,time-previousTick):1/60
      previousTick=time
      lenis?.raf(smoothTime*1000)
      if(!lenis?.isScrolling&&performance.now()-lastInput>150){gsap.ticker.remove(tick);ticking=false;scope.dataset.scrollActive="false"}
    }
    const wake=()=>{
      lastInput=performance.now()
      if(lenis&&!ticking&&!document.hidden){
        lenis.raf(smoothTime*1000)
        ticking=true;previousTick=0;scope.dataset.scrollActive="true";gsap.ticker.add(tick)
      }
    }
    const stopTicker=()=>{gsap.ticker.remove(tick);ticking=false;scope.dataset.scrollActive="false"}
    const connectLenis=()=>{
      stopTicker();lenis?.destroy();lenis=undefined
      scope.dataset.scrollEngine="native"
      if(!finePointer.matches)return
      lenis=new Lenis({lerp:.1,smoothWheel:true,syncTouch:false,autoRaf:false,
        prevent:node=>!!node.closest("dialog, .mobile-menu")||document.body.classList.contains("menu-open")})
      scope.dataset.scrollEngine="lenis"
      lenis.on("scroll",ScrollTrigger.update)
    }
    connectLenis();finePointer.addEventListener("change",connectLenis)
    addEventListener("wheel",wake,{passive:true})
    const visibility=()=>{if(document.hidden){stopTicker();lenis?.stop()}else lenis?.start()}
    document.addEventListener("visibilitychange",visibility)
    // Let browser history and native hash navigation own their scroll position.
    const cancelSmoothScroll=()=>{
      stopTicker()
      if(lenis&&!lenis.isStopped){lenis.stop();lenis.start()}
    }
    addEventListener("popstate",cancelSmoothScroll)
    addEventListener("hashchange",cancelSmoothScroll)
    const anchors=(event:MouseEvent)=>{
      if(!lenis||event.defaultPrevented||event.button!==0||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey)return
      const link=(event.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]')
      const href=link?.getAttribute("href")
      if(!href||href==="#"||href==="#main")return
      const target=document.getElementById(href.slice(1))
      if(!target)return
      event.preventDefault()
      if(location.hash!==href)history.pushState(null,"",href)
      // Lenis 1.3 honors the document's CSS scroll-padding-top for elements.
      lenis.scrollTo(target,{duration:.8,onComplete:()=>{
        if(event.detail!==0||document.activeElement!==link)return
        if(!target.hasAttribute("tabindex")){
          target.setAttribute("tabindex","-1")
          target.addEventListener("blur",()=>target.removeAttribute("tabindex"),{once:true})
        }
        target.focus({preventScroll:true})
      }});wake()
    }
    document.addEventListener("click",anchors)

    const refresh=()=>ScrollTrigger.refresh()
    document.fonts?.ready.then(refresh)
    addEventListener("load",refresh,{once:true})
    return ()=>{
      remove.forEach(fn=>fn());ctx.revert();stopTicker();lenis?.destroy()
      finePointer.removeEventListener("change",connectLenis);removeEventListener("wheel",wake)
      document.removeEventListener("visibilitychange",visibility);document.removeEventListener("click",anchors)
      removeEventListener("popstate",cancelSmoothScroll);removeEventListener("hashchange",cancelSmoothScroll)
      removeEventListener("load",refresh)
      delete scope.dataset.scrollEngine;delete scope.dataset.scrollActive
    }
  },[enabled])
}

export function CinematicExperience(){
  const enabled=useMotionAllowed()
  useCinematicScenes(enabled)
  useCodeTypewriter(enabled)
  return <><CommandPalette/><ToolkitRibbons motion={enabled}/><PortfolioTextRoll enabled={enabled}/><CinematicContact enabled={enabled}/><ProjectExplorers motion={enabled}/></>
}

/** Registry compatibility with the filename in the supplied prompt. */
export { CinematicExperience as ParallaxComponent }
export default CinematicExperience
