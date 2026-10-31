"use client"
import OldMastersPreloader from "@/components/ui/old-masters-preloader"

/** Standalone registry example; production adds its native-dialog lifecycle. */
export default function OldMastersPreloaderDemo(){
  return <OldMastersPreloader
    figures={[
      {src:"/assets/intro-apollo.webp",alt:"Apollo Belvedere",x:58,y:100,h:84,depth:1},
      {src:"/assets/intro-hercules.webp",alt:"A marble Hercules",x:24,y:103,h:90,depth:1.25},
      {src:"/assets/intro-flowers.webp",alt:"A figure holding flowers",x:88,y:100,h:100,depth:.75,flip:true,phone:false},
    ]}
    backdrop="/assets/intro-david.webp" fontHref={null} wordmark="Poojana" brand="pk·"
    eyebrow="ENGINEERING WITH INTENT · MMXXVI" tagline="Thoughtful systems. Human experiences."
    nav={[]} labels={["BACKEND · AI · SECURITY","SRI LANKA / 2026"]} asides={[]} annotations={[]}
    tone="noir" palette={{stage:"#282017",ground:"#0c0b0a",text:"#f1e9db",muted:"#b7a58e",accent:"#d6b18a",word:"#f0e6d4",rule:"#5f4933",glow:"#e3be91",highlight:"#e4c8a1"}}
    skippable={false} cta={null} duotone={true} minLoadMs={1000} progress={100}
    height="100dvh" className="portfolio-intro" plate="THE PORTFOLIO" loadingLabel="Preparing"
  />
}
