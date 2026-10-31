"use client"

import * as React from "react"
import OldMastersPreloader, {type OldMastersFigure} from "@/components/ui/old-masters-preloader"

declare global {
  interface Window {
    __portfolioIntro?: {active:boolean;startedAt:number;complete:(reason?:string)=>void}
  }
}

const FIGURES:OldMastersFigure[] = [
  {src:"assets/intro-apollo.webp",alt:"The Apollo Belvedere, a cloak over one arm",x:58,y:100,h:84,depth:1},
  {src:"assets/intro-hercules.webp",alt:"The torso of a marble Hercules",x:24,y:103,h:90,depth:1.25},
  {src:"assets/intro-flowers.webp",alt:"A marble figure holding flowers",x:88,y:100,h:100,depth:.75,flip:true,phone:false},
]
const BACKDROP="assets/intro-david.webp"
const PALETTE={stage:"#282017",ground:"#0c0b0a",text:"#f1e9db",muted:"#b7a58e",accent:"#d6b18a",word:"#f0e6d4",rule:"#5f4933",glow:"#e3be91",highlight:"#e4c8a1"}

/** The supplied diorama, mounted as a bounded native-modal introduction. */
export function PortfolioPreloader(){
  const [visible,setVisible]=React.useState(()=>!!window.__portfolioIntro?.active)
  const [progress,setProgress]=React.useState(0)
  React.useEffect(()=>{
    const complete=()=>setVisible(false)
    addEventListener("portfolio:intro-complete",complete)
    if(!window.__portfolioIntro?.active)complete()
    return ()=>removeEventListener("portfolio:intro-complete",complete)
  },[])
  React.useEffect(()=>{
    if(!visible)return
    let alive=true,settled=0
    const cleanup:(()=>void)[]=[]
    const urls=[...FIGURES.filter(f=>innerWidth>=640||f.phone!==false).map(f=>f.src),BACKDROP]
    const pageImages=[...document.querySelectorAll<HTMLImageElement>(".hero-figure img,.hero-visual .vault")]
    const total=urls.length+pageImages.length+1
    const done=()=>{if(alive){settled++;setProgress(Math.round(settled/total*100))}}
    const observe=(img:HTMLImageElement)=>{
      let finished=false,timer=0
      const finish=()=>{
        if(finished)return
        finished=true;clearTimeout(timer)
        img.removeEventListener("load",finish);img.removeEventListener("error",finish)
        // An unavailable asset is settled too; the live page has its own fallback.
        done()
      }
      img.addEventListener("load",finish,{once:true});img.addEventListener("error",finish,{once:true})
      timer=window.setTimeout(finish,2500)
      cleanup.push(()=>{clearTimeout(timer);img.removeEventListener("load",finish);img.removeEventListener("error",finish)})
      if(img.complete&&img.currentSrc)finish()
    }
    pageImages.forEach(observe)
    urls.forEach(src=>{const img=new Image();observe(img);img.src=src})
    let fontDone=false
    const fonts=()=>{if(!fontDone){fontDone=true;clearTimeout(fontDeadline);done()}}
    // Resolve once, whether fonts load, fail or exceed the bounded wait.
    const fontDeadline=window.setTimeout(fonts,2500)
    document.fonts.ready.then(fonts,fonts)
    cleanup.push(()=>clearTimeout(fontDeadline))
    return ()=>{alive=false;cleanup.forEach(fn=>fn())}
  },[visible])
  if(!visible)return null
  return <OldMastersPreloader
    figures={FIGURES} backdrop={BACKDROP} fontHref={null}
    wordmark="Poojana" brand="pk·" eyebrow="ENGINEERING WITH INTENT · MMXXVI"
    tagline="Thoughtful systems. Human experiences."
    nav={[]} labels={["BACKEND · AI · SECURITY","SRI LANKA / 2026"]}
    asides={[]} annotations={[]} plate="THE PORTFOLIO"
    tone="noir" palette={PALETTE} duotone={true}
    skippable={false} progress={progress} minLoadMs={1000}
    cta={null} holdMs={220} scrollToEnter={false} tilt={1.5}
    className="portfolio-intro" height="100dvh" loadingLabel="Preparing"
    onComplete={()=>window.__portfolioIntro?.complete()}
  ><span/></OldMastersPreloader>
}

export class PreloaderBoundary extends React.Component<{children:React.ReactNode},{failed:boolean}>{
  state={failed:false}
  static getDerivedStateFromError(){return{failed:true}}
  componentDidCatch(){window.__portfolioIntro?.complete("error")}
  render(){return this.state.failed?null:this.props.children}
}
