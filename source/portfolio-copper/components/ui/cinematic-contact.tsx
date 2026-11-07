"use client"

import * as React from "react"
import gsap from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"

/** A readable contact invitation with a restrained, unpinned text reveal. */
export function CinematicContact({enabled}:{enabled:boolean}){
  React.useEffect(()=>{
    if(location.hash!=="#contact")return
    const root=document.querySelector<HTMLElement>("#contact")
    let frame=0,alive=true,interacted=false
    const interrupt=()=>{interacted=true}
    const events=["wheel","touchstart","pointerdown","keydown"] as const
    events.forEach(event=>addEventListener(event,interrupt,{once:true,passive:true}))
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
    gsap.registerPlugin(ScrollTrigger)
    const ctx=gsap.context(()=>{
      gsap.from(".contact-line > span",{
        yPercent:110,duration:.85,stagger:.09,ease:"power3.out",clearProps:"transform",
        scrollTrigger:{trigger:root,refreshPriority:-10,start:"top 84%",once:true},
      })
      gsap.from(".contact-details",{
        y:16,opacity:0,duration:.65,ease:"power2.out",clearProps:"transform,opacity",
        scrollTrigger:{trigger:root,refreshPriority:-10,start:"top 82%",once:true},
      })
    },root)
    return ()=>ctx.revert()
  },[enabled])
  return null
}
