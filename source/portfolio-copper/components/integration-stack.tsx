"use client"
import * as React from "react"
import { createPortal } from "react-dom"
import type { IntegrationHeroProps } from "@/components/ui/integration-hero"

// Shared with the existing optional portrait badge; no second React runtime.
const moduleUrl = "/assets/integration-hero.js?v=20261109-stack-3"
const Stack = React.lazy(async () => {
  const module = await import(/* @vite-ignore */ moduleUrl) as typeof import("@/components/ui/integration-hero")
  return { default: function LoadedStack(props: IntegrationHeroProps) {
    React.useLayoutEffect(() => {
      const host = document.getElementById("toolkit")
      if (host) host.dataset.enhanced = "true"
      return () => { if (host) delete host.dataset.enhanced }
    }, [])
    return <module.default {...props} />
  } }
})
class StackBoundary extends React.Component<{ children: React.ReactNode }, { failed: boolean }> {
  state = { failed: false }
  static getDerivedStateFromError() { return { failed: true } }
  componentDidCatch() { const host = document.getElementById("toolkit"); if (host) delete host.dataset.enhanced }
  render() { return this.state.failed ? null : this.props.children }
}
export function IntegrationStack({ motion }: { motion: boolean }) {
  const host = document.getElementById("toolkit")
  const [nearby, setNearby] = React.useState(false)
  React.useEffect(() => {
    if (!host) return
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setNearby(true); observer.disconnect() } }, { rootMargin: "600px" })
    observer.observe(host)
    return () => observer.disconnect()
  }, [host])
  return host && nearby ? createPortal(<StackBoundary><React.Suspense fallback={null}><Stack motion={motion} /></React.Suspense></StackBoundary>, host) : null
}
