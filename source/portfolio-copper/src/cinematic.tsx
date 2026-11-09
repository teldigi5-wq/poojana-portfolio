import * as React from "react"
import { createRoot } from "react-dom/client"
import { CinematicExperience } from "@/components/ui/parallax-scrolling"
import "lenis/dist/lenis.css"
import "../styles/cinematic.css"
import "../styles/cinematic-contact.css"

class ExperienceBoundary extends React.Component<{children:React.ReactNode},{failed:boolean}>{
  state={failed:false}
  static getDerivedStateFromError(){return{failed:true}}
  render(){return this.state.failed?null:this.props.children}
}
const root=document.getElementById("cinematic-root")
if(root)createRoot(root).render(<ExperienceBoundary><CinematicExperience/></ExperienceBoundary>)
