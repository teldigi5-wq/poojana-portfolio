"use client"

import * as React from "react"
import { spring, useMotionValueEvent, useScroll } from "framer-motion"
import { animate } from "framer-motion/dom/mini"
import { Menu, Navigation } from "lucide-react"

export const portfolioLinks = [
  { name: "Home", href: "#home" },
  { name: "Depth", href: "#dimension" },
  { name: "Work", href: "#work" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
] as const

export function NavigationLinks({ active, onSelect }: {
  active?: string
  onSelect?: (href: string) => void
}) {
  return portfolioLinks.map(({ name, href }) => (
    <a key={href} href={href} aria-current={active === href ? "location" : undefined}
      onClick={onSelect ? () => onSelect(href) : undefined}>{name}</a>
  ))
}

export function AnimatedNavFramer() {
  const [expanded, setExpanded] = React.useState(true)
  const [motionAllowed, setMotionAllowed] = React.useState(false)
  const [active, setActive] = React.useState<string>("#home")
  const nav = React.useRef<HTMLElement>(null)
  const trigger = React.useRef<HTMLButtonElement>(null)
  const lastY = React.useRef(0)
  const furthestY = React.useRef(0)
  const lastOpenedAt = React.useRef(0)
  const { scrollY } = useScroll()
  const linksId = React.useId()

  React.useEffect(() => {
    const preference = matchMedia("(prefers-reduced-motion: reduce), (forced-colors: active)")
    const desktop = matchMedia("(min-width: 901px)")
    const update = () => {
      const allowed = desktop.matches && !preference.matches &&
        !document.documentElement.classList.contains("motion-off")
      setMotionAllowed(allowed)
      if (!allowed) setExpanded(true)
    }
    const observer = new MutationObserver(update)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] })
    preference.addEventListener("change", update)
    desktop.addEventListener("change", update)
    update()
    return () => {
      preference.removeEventListener("change", update)
      desktop.removeEventListener("change", update)
      observer.disconnect()
    }
  }, [])

  React.useEffect(() => {
    const sections = portfolioLinks.map(({ href }) => ({ href, element: document.querySelector(href) }))
    const mobileLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>(".menu-links a"))
    let frame = 0
    const update = () => {
      frame = 0
      let href: string = "#home"
      for (const section of sections) {
        if (section.element && section.element.getBoundingClientRect().top <= 165) href = section.href
      }
      setActive(href)
      for (const link of mobileLinks) {
        if (link.hash === href) link.setAttribute("aria-current", "location")
        else link.removeAttribute("aria-current")
      }
    }
    const queue = () => { if (!frame) frame = requestAnimationFrame(update) }
    addEventListener("scroll", queue, { passive: true })
    addEventListener("resize", queue, { passive: true })
    addEventListener("hashchange", queue)
    queue()
    return () => {
      cancelAnimationFrame(frame)
      removeEventListener("scroll", queue)
      removeEventListener("resize", queue)
      removeEventListener("hashchange", queue)
    }
  }, [])

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = lastY.current
    lastY.current = latest
    if (!motionAllowed) return
    if (latest <= 80) {
      lastOpenedAt.current = latest
      if (!expanded) setExpanded(true)
    } else if (expanded && latest > 150 && latest > previous &&
      latest > lastOpenedAt.current + 28 && !nav.current?.contains(document.activeElement)) {
      furthestY.current = latest
      setExpanded(false)
    } else if (!expanded) {
      furthestY.current = Math.max(furthestY.current, latest)
      if (furthestY.current - latest > 80) {
        lastOpenedAt.current = latest
        setExpanded(true)
      }
    }
  })

  React.useLayoutEffect(() => {
    const element = nav.current
    if (!element) return
    if (!motionAllowed) {
      element.style.removeProperty("width")
      return
    }
    const from = element.getBoundingClientRect().width
    const to = expanded ? 426 : 48
    element.style.width = `${to}px`
    if (Math.abs(from - to) < 1 || typeof element.animate !== "function") return
    const animation = animate(element, { width: [`${from}px`, `${to}px`] },
      { type: spring, stiffness: 300, damping: 32 })
    return () => animation.stop()
  }, [expanded, motionAllowed])

  const close = () => {
    trigger.current?.focus()
    furthestY.current = scrollY.get()
    setExpanded(false)
  }
  const toggle = () => {
    if (expanded) close()
    else {
      lastOpenedAt.current = scrollY.get()
      setExpanded(true)
    }
  }

  return (
    <nav ref={nav} className="editorial-nav" aria-label="Main navigation"
      data-expanded={expanded} data-motion={motionAllowed}
      onKeyDown={(event) => {
        if (event.key === "Escape" && expanded && motionAllowed) {
          event.preventDefault()
          close()
        }
      }}>
      {motionAllowed ? (
        <button className="editorial-nav-toggle" ref={trigger} type="button"
          aria-label={expanded ? "Collapse navigation" : "Expand navigation"}
          aria-controls={linksId} aria-expanded={expanded} onClick={toggle}>
          {expanded ? <Navigation size={17} aria-hidden="true" /> : <Menu size={19} aria-hidden="true" />}
        </button>
      ) : <span className="editorial-nav-mark" aria-hidden="true"><Navigation size={17} /></span>}
      <div className="editorial-nav-links" id={linksId} inert={!expanded}>
        <NavigationLinks active={active} onSelect={setActive} />
      </div>
    </nav>
  )
}
