import * as React from "react"
import {createRoot} from "react-dom/client"
import WildHuntFooter from "@/components/ui/wild-hunt-footer"

function FooterFallback(){
  return <footer className="footer-fallback shell"><span>© 2026 Poojana Kaveesh</span><a href="mailto:teldigi5@gmail.com">Let’s build something ↗</a><a href="#home">Back to top ↑</a></footer>
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
  fontFamily='"Studio Sans", system-ui, sans-serif'
  tagline="Thoughtful systems · Human experiences"
  sideNote="Sri Lanka · Engineering with intent"
  columns={[
    {title:"Explore",links:[{label:"Home",href:"#home"},{label:"Depth",href:"#dimension"},{label:"Work",href:"#work"},{label:"About",href:"#about"},{label:"Contact",href:"#contact"}]},
    {title:"Selected work",links:[{label:"BoundaryLab",href:"#boundary-card"},{label:"Aetheris",href:"#aetheris-card"},{label:"Wayfarer",href:"#wayfarer-card"},{label:"More projects",href:"#more-projects"}]},
    {title:"Elsewhere",links:[{label:"GitHub ↗",href:"https://github.com/teldigi5-wq"},{label:"LinkedIn ↗",href:"https://www.linkedin.com/in/poojana-kaveesh-3048b8387"},{label:"View CV ↗",href:"assets/Poojana_Kaveesh_ATS_2026.pdf"}]},
    {title:"Start a conversation",links:[{label:"teldigi5@gmail.com ↗",href:"mailto:teldigi5@gmail.com"}]},
  ]}
  colophon="An engineer in the making. Thoughtfully built in Sri Lanka. Always evolving."
  legal="© 2026 Poojana Kaveesh"
/></FooterBoundary>)
