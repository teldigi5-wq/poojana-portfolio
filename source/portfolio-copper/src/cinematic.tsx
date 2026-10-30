import * as React from "react"
import { createRoot } from "react-dom/client"
import { CinematicExperience } from "@/components/ui/parallax-scrolling"
import "lenis/dist/lenis.css"
import "../styles/cinematic.css"
import "../styles/cinematic-contact.css"

class ExperienceBoundary extends React.Component<{children:React.ReactNode},{failed:boolean}>{
  state={failed:false}
  static getDerivedStateFromError(){return{failed:true}}
  render(){return this.state.failed?<section className="toolkit-section shell"><h2>Different tools. One considered approach.</h2><p className="toolkit-fallback">React · Next.js · TypeScript · Java · Spring Boot · Python · PostgreSQL · Firebase · Docker</p></section>:this.props.children}
}
const root=document.getElementById("cinematic-ribbon-root")
if(root)createRoot(root).render(<ExperienceBoundary><CinematicExperience/></ExperienceBoundary>)
