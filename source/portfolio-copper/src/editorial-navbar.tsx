import * as React from "react"
import { createRoot } from "react-dom/client"
import { AnimatedNavFramer, NavigationLinks } from "@/components/ui/navigation-menu"

class NavigationBoundary extends React.Component<{ children: React.ReactNode }, { failed: boolean }> {
  state = { failed: false }
  static getDerivedStateFromError() { return { failed: true } }
  render() {
    return this.state.failed
      ? <nav className="editorial-nav-fallback" aria-label="Main navigation"><NavigationLinks /></nav>
      : this.props.children
  }
}

const root = document.getElementById("portfolio-nav-root")
if (root) createRoot(root).render(<NavigationBoundary><AnimatedNavFramer /></NavigationBoundary>)
