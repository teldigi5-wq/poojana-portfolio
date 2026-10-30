"use client"

import * as React from "react"
import gsap from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"

/** A progressively enhanced, unpinned CSS 3D calling-card scene. */
export function CinematicContact({enabled}:{enabled:boolean}){
  React.useEffect(()=>{
    if(location.hash!=="#contact")return
    const root=document.querySelector<HTMLElement>("#contact")
    let frame=0,alive=true,interacted=false
    const interrupt=()=>{interacted=true}
    const events=["wheel","touchstart","pointerdown","keydown"] as const
    events.forEach(event=>addEventListener(event,interrupt,{once:true,passive:true}))
    // Fonts and earlier pinned scenes can change the section's initial position.
    ;(document.fonts?.ready??Promise.resolve()).then(()=>{
      if(!alive)return
      frame=requestAnimationFrame(()=>{
        if(!interacted&&location.hash==="#contact")root?.scrollIntoView({block:"start",behavior:"instant"})
      })
    })
    return ()=>{alive=false;cancelAnimationFrame(frame);events.forEach(event=>removeEventListener(event,interrupt))}
  },[])
  React.useEffect(()=>{
    const root=document.querySelector<HTMLElement>("#contact")
    if(!root||!enabled||!gsap||!ScrollTrigger)return
    const art=root.querySelector<HTMLElement>(".contact-art")!
    const pointer=root.querySelector<HTMLElement>(".contact-card-pointer")!
    gsap.registerPlugin(ScrollTrigger)
    const ctx=gsap.context(()=>{
      const mm=gsap.matchMedia()
      mm.add({wide:"(min-width:901px)",narrow:"(max-width:900px)"},media=>{
        const wide=media.conditions?.wide
        root.dataset.contactMotion="scroll"
        const scene=gsap.timeline({scrollTrigger:{
          // This child effect mounts before the parent's gallery pin. Measure last.
          trigger:wide?root:art,refreshPriority:-10,start:"top bottom",end:wide?"top 10%":"center 55%",scrub:true,invalidateOnRefresh:true,
          onUpdate:self=>{root.dataset.contactProgress=self.progress.toFixed(3)},
        }})
        scene.fromTo(".contact-card-rig",{
          rotationX:wide?54:30,rotationY:wide?-42:-25,rotationZ:wide?9:5,y:wide?70:30,
        },{rotationX:16,rotationY:-20,rotationZ:-8,y:-12,ease:"none"},0)
          .fromTo(".contact-paper",{rotationZ:0,x:0,y:0},{rotationZ:11,x:14,y:24,ease:"none"},0)
          .fromTo(".contact-card-sheen",{xPercent:-130},{xPercent:130,ease:"none"},0)
          .fromTo(root,{"--contact-progress":0},{"--contact-progress":1,ease:"none"},0)
          .fromTo(".contact-card-shadow",{scaleX:.72,scaleY:.4,opacity:.3},{scaleX:1,scaleY:.55,opacity:.65,ease:"none"},0)
        return ()=>{delete root.dataset.contactMotion;delete root.dataset.contactProgress}
      })
      gsap.from(".contact-line > span",{
        yPercent:110,duration:.9,stagger:.1,ease:"power3.out",clearProps:"transform",
        scrollTrigger:{trigger:root,refreshPriority:-10,start:"top 84%",once:true},
      })
      gsap.from(".contact-overline, .contact-description, .contact-cta, .contact-email-group",{
        y:16,opacity:0,duration:.7,stagger:.08,ease:"power2.out",clearProps:"transform,opacity",
        scrollTrigger:{trigger:root,refreshPriority:-10,start:"top 82%",once:true},
      })
      return ()=>mm.revert()
    },root)

    const fine=matchMedia("(hover:hover) and (pointer:fine)")
    let frame=0,x=0,y=0,alive=true
    const render=()=>{
      frame=0
      pointer.style.setProperty("--contact-tilt-x",`${y*-3}deg`)
      pointer.style.setProperty("--contact-tilt-y",`${x*4}deg`)
    }
    const move=(event:PointerEvent)=>{
      if(!fine.matches||event.pointerType!=="mouse")return
      const rect=art.getBoundingClientRect()
      x=Math.max(-1,Math.min(1,(event.clientX-rect.left)/rect.width*2-1))
      y=Math.max(-1,Math.min(1,(event.clientY-rect.top)/rect.height*2-1))
      if(!frame)frame=requestAnimationFrame(render)
    }
    const reset=()=>{
      cancelAnimationFrame(frame);frame=0;x=y=0
      pointer.style.removeProperty("--contact-tilt-x");pointer.style.removeProperty("--contact-tilt-y")
    }
    art.addEventListener("pointermove",move,{passive:true})
    art.addEventListener("pointerleave",reset)
    fine.addEventListener("change",reset)
    const visibility=()=>{if(document.hidden)reset()}
    document.addEventListener("visibilitychange",visibility)
    const imagesReady=()=>{if(alive&&root.isConnected)ScrollTrigger.refresh()}
    document.fonts?.ready.then(imagesReady)
    return ()=>{
      alive=false;reset();ctx.revert();art.removeEventListener("pointermove",move);art.removeEventListener("pointerleave",reset);fine.removeEventListener("change",reset)
      document.removeEventListener("visibilitychange",visibility);delete root.dataset.contactMotion;delete root.dataset.contactProgress
    }
  },[enabled])
  return null
}
