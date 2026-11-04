import * as React from "react"
import {createRoot} from "react-dom/client"
import WildHuntFooter from "@/components/ui/wild-hunt-footer"

function FooterFallback(){
  return <footer className="footer-fallback shell"><span>© 2026 Poojana Kaveesh</span><nav aria-label="Footer navigation"><a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact</a></nav><a href="assets/Poojana_Kaveesh_ATS_2026.pdf" download="Poojana_Kaveesh_CV_2026.pdf">Download CV ↓</a><a href="#home">Back to top ↑</a></footer>
}
class FooterBoundary extends React.Component<{children:React.ReactNode},{failed:boolean}>{
  state={failed:false}
  static getDerivedStateFromError(){return{failed:true}}
  render(){return this.state.failed?<FooterFallback/>:this.props.children}
}

const root=document.getElementById("portfolio-footer-root")
if(root)createRoot(root).render(<FooterBoundary><WildHuntFooter
  className="portfolio-footer"
  wordmark="KAVEESH"
  preset="ink"
  palette={{background:"#17120f",ink:"#e2bb93"}}
  image={{src:"assets/vault.webp",alt:"Copper architectural vault",position:"50% 48%"}}
  imageHeight={.47}
  dissolve={.46}
  grain={.16}
  tracking={0}
  height="clamp(820px, 100svh, 1080px)"
  fontFamily='"Studio", system-ui, sans-serif'
  tagline=""
  sideNote=""
  columns={[
    {title:"Explore",links:[{label:"Home",href:"#home"},{label:"Depth",href:"#dimension"},{label:"Work",href:"#work"},{label:"About",href:"#about"},{label:"Contact",href:"#contact"}]},
    {title:"Selected work",links:[{label:"BoundaryLab",href:"#boundary-card"},{label:"Aetheris",href:"#aetheris-card"},{label:"Wayfarer",href:"#wayfarer-card"},{label:"More projects",href:"#more-projects"}]},
    {title:"Elsewhere",links:[{label:"GitHub ↗",href:"https://github.com/teldigi5-wq"},{label:"LinkedIn ↗",href:"https://www.linkedin.com/in/poojana-kaveesh-3048b8387"}]},
    {title:"Resume",links:[{label:"Download CV ↓",href:"assets/Poojana_Kaveesh_ATS_2026.pdf",download:"Poojana_Kaveesh_CV_2026.pdf"}]},
  ]}
  colophon=""
  legal="© 2026 Poojana Kaveesh"
/></FooterBoundary>)
