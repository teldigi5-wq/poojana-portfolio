import * as React from "react"
import {createRoot} from "react-dom/client"
import {PortfolioPreloader,PreloaderBoundary} from "@/components/portfolio-preloader"
import "../styles/preloader.css"
const root=document.getElementById("preloader-root")
if(root&&window.__portfolioIntro?.active){
  createRoot(root).render(<PreloaderBoundary><PortfolioPreloader/></PreloaderBoundary>)
}
