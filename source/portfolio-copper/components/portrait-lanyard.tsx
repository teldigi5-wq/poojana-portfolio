"use client"

import * as React from "react"
import {createPortal} from "react-dom"
import type {LanyardMember, TeamLanyardRailProps} from "@/components/ui/team-lanyard-rail"

// The optional badge uses the page's React instance. It never bundles a second one.
Object.defineProperty(window,"__portfolioReact",{value:React,configurable:true})
const moduleUrl="/assets/portrait-lanyard.js?v=20261107-lanyard-1"
const Lanyard=React.lazy(async()=>{
  const module=await import(/* @vite-ignore */ moduleUrl) as typeof import("@/components/ui/team-lanyard-rail")
  return {default:function LoadedLanyard(props:TeamLanyardRailProps){
    React.useLayoutEffect(()=>{
      const host=document.getElementById("portrait-lanyard-root")
      if(host)host.dataset.enhanced="true"
      return ()=>{if(host)delete host.dataset.enhanced}
    },[])
    return <module.TeamLanyardRail {...props}/>
  }}
})
class LanyardBoundary extends React.Component<{children:React.ReactNode},{failed:boolean}>{
  state={failed:false}
  static getDerivedStateFromError(){return {failed:true}}
  componentDidCatch(){const host=document.getElementById("portrait-lanyard-root");if(host)delete host.dataset.enhanced}
  render(){return this.state.failed?null:this.props.children}
}

const PORTRAIT: LanyardMember[] = [{
  id:"poojana-kaveesh", name:"Poojana Kaveesh", role:"Backend · AI · Security",
  team:"SLIIT / Sri Lanka", image:"assets/portrait.webp", tone:1, drop:4,
  bio:"Building BoundaryLab. Open to an engineering internship with real technical ownership.",
  tags:["Sri Lanka", "UTC +05:30"],
  links:[{label:"View my CV",href:"assets/Poojana_Kaveesh_ATS_2026.pdf"},{label:"GitHub",href:"https://github.com/teldigi5-wq"}],
}]

export function PortraitLanyard({motion}:{motion:boolean}) {
  const host=document.getElementById("portrait-lanyard-root")
  const [nearby,setNearby]=React.useState(false)
  React.useEffect(()=>{
    if(!host)return
    const io=new IntersectionObserver(([entry])=>{if(entry.isIntersecting){setNearby(true);io.disconnect()}},{rootMargin:"600px"})
    io.observe(host)
    return ()=>io.disconnect()
  },[host])
  if(!host)return null
  return nearby?createPortal(<LanyardBoundary><React.Suspense fallback={null}><Lanyard
    className="portrait-lanyard" items={PORTRAIT} badgeWidth={242} active={0}
    motion={motion} autoplay={false}
    labels={{flip:"Drag to move · Click or Enter to turn",back:"Your CV & source · Click or Esc to return",show:"Show"}}
    aria-label="Meet Poojana — interactive portrait badge"
  /></React.Suspense></LanyardBoundary>,host):null
}
