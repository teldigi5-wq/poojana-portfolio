"use client"

import * as React from "react"
import { House, BriefcaseBusiness, Layers3, UserRound, ArrowUpRight } from "lucide-react"
import { LiquidNavbar, type LiquidNavItem } from "@/components/ui/liquid-glass-navbar"

export const PORTFOLIO_ITEMS: LiquidNavItem[] = [
  {label:"Home",href:"#home",icon:<House aria-hidden="true"/>,fx:"glow"},
  {label:"Depth",href:"#dimension",icon:<Layers3 aria-hidden="true"/>,fx:"pop"},
  {label:"Work",href:"#work",icon:<BriefcaseBusiness aria-hidden="true"/>,fx:"pop"},
  {label:"About",href:"#about",icon:<UserRound aria-hidden="true"/>,fx:"wave"},
  {label:"Contact",href:"#contact",icon:<ArrowUpRight aria-hidden="true"/>,fx:"pop"},
]

export function NavigationFallback(){
  return <nav className="nimbus-nav portfolio-liquid-nav" data-tone="dark" aria-label="Main navigation">
    <span className="nimbus-glass" aria-hidden="true"/>
    {PORTFOLIO_ITEMS.map(item=><a className="nimbus-item" key={item.href} href={item.href}>
      <span className="nv-ico">{item.icon}</span><span className="nimbus-label">{item.label}</span>
    </a>)}
  </nav>
}

export class NavigationBoundary extends React.Component<{children:React.ReactNode},{failed:boolean}>{
  state={failed:false}
  static getDerivedStateFromError(){return{failed:true}}
  render(){return this.state.failed?<NavigationFallback/>:this.props.children}
}

export function PortfolioNavigation(){
  const [active,setActive]=React.useState(0)
  const [motion,setMotion]=React.useState(()=>!document.documentElement.classList.contains("motion-off"))
  const pending=React.useRef<{href:string;until:number}|null>(null)
  React.useEffect(()=>{
    document.documentElement.classList.add("has-liquid-nav")
    const observer=new MutationObserver(()=>setMotion(!document.documentElement.classList.contains("motion-off")))
    observer.observe(document.documentElement,{attributes:true,attributeFilter:["class"]})
    let frame=0
    // One order across the desktop pill, mobile index and document sections.
    const sections=PORTFOLIO_ITEMS.map((item,index)=>({element:document.querySelector<HTMLElement>(item.href!),index}))
    const update=()=>{
      frame=0
      const header=document.querySelector(".header")?.getBoundingClientRect().height??84
      if(pending.current){
        const target=document.querySelector(pending.current.href)?.getBoundingClientRect()
        if(target&&Math.abs(target.top-header)<85)pending.current=null
        else if(performance.now()<pending.current.until)return
        else pending.current=null
      }
      let next=0
      for(const section of sections){
        if(section.element&&section.element.getBoundingClientRect().top<=header+120)next=section.index
      }
      if(scrollY+innerHeight>=document.documentElement.scrollHeight-4)next=PORTFOLIO_ITEMS.length-1
      setActive(next)
      document.querySelectorAll<HTMLAnchorElement>(".menu-links a").forEach(link=>{
        if(link.hash===PORTFOLIO_ITEMS[next].href)link.setAttribute("aria-current","location")
        else link.removeAttribute("aria-current")
      })
    }
    const queue=()=>{if(!frame)frame=requestAnimationFrame(update)}
    const interrupt=()=>{pending.current=null;queue()}
    addEventListener("scroll",queue,{passive:true})
    addEventListener("resize",queue,{passive:true})
    addEventListener("hashchange",queue)
    addEventListener("scrollend",queue)
    addEventListener("wheel",interrupt,{passive:true})
    addEventListener("touchstart",interrupt,{passive:true})
    queue()
    return ()=>{
      observer.disconnect();cancelAnimationFrame(frame)
      removeEventListener("scroll",queue);removeEventListener("resize",queue)
      removeEventListener("hashchange",queue);removeEventListener("scrollend",queue)
      removeEventListener("wheel",interrupt);removeEventListener("touchstart",interrupt)
      document.documentElement.classList.remove("has-liquid-nav")
    }
  },[])
  return <LiquidNavbar items={PORTFOLIO_ITEMS} active={active} tone="dark" compact={false}
    motion={motion} sound={false} ariaLabel="Main navigation"
    className="portfolio-liquid-nav select-none"
    onChange={(index,item)=>{
      setActive(index)
      if(item.href)pending.current={href:item.href,until:performance.now()+1800}
    }}/>
}
