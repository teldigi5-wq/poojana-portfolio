"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, ArrowUp, Search, X } from "lucide-react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import tools from "@/lib/tech-stack.json"
import "../../styles/integration-hero.css"

export type IntegrationHeroProps = { motion?: boolean }
type Tool = (typeof tools)[number]
const groups = ["All", ...new Set(tools.map(tool => tool.group))]
// Each track consists of two IDENTICAL, intrinsic-width groups, including its
// trailing gap. A half-track translation is exactly one group, at every width.
const rows = [tools.filter((_, i) => i % 2 === 0), tools.filter((_, i) => i % 2 !== 0)]

function ToolMark({ tool }: { tool: Tool }) {
  return <span className="stack-mark" aria-hidden="true">{tool.icon
    ? <img src={`/assets/tech/${tool.icon}.svg`} width="36" height="36" alt="" loading="lazy" decoding="async" />
    : <span className="stack-monogram">{tool.name.replace(/[^a-zA-Z]/g, "").slice(0, 2)}</span>}
  </span>
}

export default function IntegrationHero({ motion = true }: IntegrationHeroProps) {
  const root = React.useRef<HTMLElement>(null)
  const [playing, setPlaying] = React.useState(false)
  const [calm, setCalm] = React.useState(true)
  const [open, setOpen] = React.useState(false)
  const [query, setQuery] = React.useState("")
  const [group, setGroup] = React.useState("All")
  const id = React.useId()
  const normalized = query.trim().toLocaleLowerCase()
  const matches = tools.filter(tool => (group === "All" || tool.group === group) &&
    `${tool.name} ${tool.group} ${tool.project}`.toLocaleLowerCase().includes(normalized))

  React.useEffect(() => {
    const el = root.current
    if (!el) return
    const reduced = matchMedia("(prefers-reduced-motion: reduce)")
    const forced = matchMedia("(forced-colors: active)")
    let visible = false
    const update = () => {
      const staticMode = !motion || reduced.matches || forced.matches
      setCalm(staticMode)
      setPlaying(!staticMode && visible && !document.hidden)
    }
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; update() }, { rootMargin: "80px" })
    observer.observe(el)
    reduced.addEventListener("change", update)
    forced.addEventListener("change", update)
    document.addEventListener("visibilitychange", update)
    update()
    return () => {
      observer.disconnect()
      reduced.removeEventListener("change", update)
      forced.removeEventListener("change", update)
      document.removeEventListener("visibilitychange", update)
    }
  }, [motion])

  // The catalog changes document height. Keep the existing pinned scenes aligned.
  React.useEffect(() => {
    const el = root.current
    if (!el) return
    let frame = 0
    const observer = new ResizeObserver(() => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        // Safe refresh waits for the browser to commit newly revealed layout.
        ScrollTrigger?.refresh(true)
        window.dispatchEvent(new Event("resize"))
      })
    })
    observer.observe(el)
    return () => { observer.disconnect(); cancelAnimationFrame(frame) }
  }, [])

  return <section ref={root} className="integration-hero" aria-labelledby={`${id}-title`}
    data-motion={calm ? "static" : "enabled"} data-playing={playing}>
    <div className="stack-heading shell">
      <span className="stack-kicker"><span aria-hidden="true" />THE ENGINEERING TOOLKIT</span>
      <h2 id={`${id}-title`}>The tools behind<br /><em>the work.</em></h2>
      <p>From interfaces to infrastructure. Languages, frameworks and tools used across my projects.</p>
      <Button type="button" className="stack-toggle" aria-expanded={open} aria-controls={`${id}-catalog`} onClick={() => setOpen(value => !value)}>
        {open ? "Close the stack" : "Explore the full stack"}<span className="stack-count">{tools.length}</span>
        {open ? <ArrowUp size={16} aria-hidden="true" /> : <ArrowDown size={16} aria-hidden="true" />}
      </Button>
    </div>

    <div className="stack-carousel" aria-hidden="true">
      {rows.map((row, i) => <div className="stack-window" key={i}>
        <div className={`stack-track stack-track-${i}`} style={{ "--stack-duration": `${row.length * 3.5}s` } as React.CSSProperties}>
          {[0, 1].map(copy => <div className="stack-group" key={copy}>
            {row.map(tool => <div className="stack-token" key={tool.id}><ToolMark tool={tool} /><span>{tool.name}</span></div>)}
          </div>)}
        </div>
      </div>)}
    </div>

    <div id={`${id}-catalog`} className="stack-catalog shell" hidden={!open}>
      <div className="stack-catalog-top">
        <div><h3>Explore the toolkit</h3><p>Used across shipped sites, prototypes and development tooling. Project context is shown for each.</p></div>
        <label className="stack-search"><Search size={18} aria-hidden="true" /><span className="visually-hidden">Search technologies or projects</span>
          <input type="search" value={query} placeholder="Find a tool or project…" onChange={event => setQuery(event.target.value)} />
        </label>
      </div>
      <div className="stack-filters" role="group" aria-label="Filter technology category">
        {groups.map(category => <Button type="button" variant="ghost" className="stack-filter" key={category} aria-pressed={group === category} onClick={() => setGroup(category)}>{category}</Button>)}
      </div>
      <p className="stack-results" role="status">{matches.length} {matches.length === 1 ? "technology" : "technologies"}{group !== "All" ? ` in ${group}` : " across the projects"}</p>
      <ul className="stack-grid">
        {matches.map(tool => <li key={tool.id}><ToolMark tool={tool} /><div><h4>{tool.name}</h4><p>{tool.project}</p><span>{tool.group}</span></div></li>)}
      </ul>
      {!matches.length && <div className="stack-empty"><p>No technologies match this search.</p><Button variant="outline" className="stack-toggle" onClick={() => { setQuery(""); setGroup("All") }}><X size={16} aria-hidden="true" />Clear filters</Button></div>}
    </div>
    <div className="stack-foot shell"><span>INTERFACE / SYSTEM / INFRASTRUCTURE</span><span>ONE TOOLKIT. DIFFERENT CONTEXTS.</span></div>
  </section>
}
