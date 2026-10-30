import * as React from "react"
import { createRoot } from "react-dom/client"
import { NavigationBoundary, PortfolioNavigation } from "@/components/portfolio-navigation"

const container=document.getElementById("liquid-nav-root")
if(container){
  createRoot(container).render(
    <React.StrictMode><NavigationBoundary><PortfolioNavigation/></NavigationBoundary></React.StrictMode>
  )
}
