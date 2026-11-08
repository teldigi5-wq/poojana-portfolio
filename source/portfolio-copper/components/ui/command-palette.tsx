"use client"

import * as React from "react"
import { createPortal } from "react-dom"
import { searchCommands } from "@/lib/command-search"

const commands = [
  {label:"Home", detail:"The person behind the systems", href:"#home", group:"Section"},
  {label:"Depth", detail:"Explore the system layers", href:"#dimension", group:"Section"},
  {label:"Selected work", detail:"Three flagship projects", href:"#work", group:"Section"},
  {label:"About", detail:"Background and approach", href:"#about", group:"Section"},
  {label:"Contact", detail:"Start a conversation", href:"#contact", group:"Section"},
  {label:"BoundaryLab", detail:"Authorization security", href:"#boundary-card", group:"Project"},
  {label:"Aetheris", detail:"Backend platform architecture", href:"#aetheris-card", group:"Project"},
  {label:"Wayfarer", detail:"Travel planning experience", href:"#wayfarer-card", group:"Project"},
  {label:"View CV", detail:"Open the résumé · PDF", href:"assets/Poojana_Kaveesh_ATS_2026.pdf", group:"Resource"},
  {label:"GitHub", detail:"Source and engineering work", href:"https://github.com/teldigi5-wq", group:"Elsewhere"},
  {label:"LinkedIn", detail:"Professional profile", href:"https://www.linkedin.com/in/poojana-kaveesh-sellahewa-3048b8387/", group:"Elsewhere"},
  {label:"Copy email", detail:"teldigi5@gmail.com", href:"", group:"Action"},
] as const

/** Native dialog + native links: search assists navigation, it never replaces it. */
export function CommandPalette() {
  const dialog = React.useRef<HTMLDialogElement>(null)
  const input = React.useRef<HTMLInputElement>(null)
  const opener = React.useRef<HTMLElement | null>(null)
  const [query, setQuery] = React.useState("")
  const [status, setStatus] = React.useState("")
  const matches = searchCommands(commands, query)

  React.useEffect(() => {
    const open = () => {
      const modal = document.querySelector<HTMLDialogElement>("dialog[open]")
      if (modal && modal !== dialog.current && modal.id !== "menu") return
      opener.current = modal?.id === "menu" ? document.querySelector<HTMLElement>(".menu-toggle") : document.activeElement as HTMLElement
      if (modal?.id === "menu") modal.close()
      setQuery(""); setStatus("")
      dialog.current?.showModal()
      document.body.classList.add("command-open")
      input.current?.focus()
    }
    const key = (event: KeyboardEvent) => {
      if (!(event.metaKey || event.ctrlKey) || event.altKey || event.shiftKey || event.key.toLowerCase() !== "k" || event.isComposing || event.repeat) return
      event.preventDefault()
      if (dialog.current?.open) dialog.current.close()
      else open()
    }
    const triggers = [...document.querySelectorAll<HTMLButtonElement>("[data-command-open]")]
    triggers.forEach(button => button.addEventListener("click", open))
    document.addEventListener("keydown", key)
    document.documentElement.classList.add("command-ready")
    return () => {
      triggers.forEach(button => button.removeEventListener("click", open))
      document.removeEventListener("keydown", key)
      document.documentElement.classList.remove("command-ready")
      document.body.classList.remove("command-open")
      dialog.current?.close()
    }
  }, [])

  const close = () => dialog.current?.close()
  const chooseLink = (href: string, event: React.MouseEvent) => {
    if (event.button || event.metaKey || event.ctrlKey || event.altKey || event.shiftKey) return
    close()
    // Let the existing Lenis anchor handler (or native navigation) own scrolling.
    // Move focus out of the closed dialog without introducing a second scroll.
    if (href.startsWith("#")) requestAnimationFrame(() => {
      const target = document.getElementById(href.slice(1))
      if (!target) return
      if (!target.hasAttribute("tabindex")) {
        target.setAttribute("tabindex", "-1")
        target.addEventListener("blur", () => target.removeAttribute("tabindex"), {once:true})
      }
      target.focus({preventScroll:true})
    })
  }
  const copyEmail = async () => {
    try { await navigator.clipboard.writeText("teldigi5@gmail.com"); setStatus("Email copied: teldigi5@gmail.com") }
    catch { setStatus("Copy this address: teldigi5@gmail.com") }
  }
  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.nativeEvent.isComposing) return
    if (event.key === "Escape") { event.preventDefault(); event.stopPropagation(); close(); return }
    const results = [...dialog.current!.querySelectorAll<HTMLElement>("[data-command-result]")]
    if (!results.length) return
    const index = results.indexOf(document.activeElement as HTMLElement)
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault()
      const next = index < 0 ? (event.key === "ArrowDown" ? 0 : results.length - 1) : (index + (event.key === "ArrowDown" ? 1 : -1) + results.length) % results.length
      results[next].focus()
    } else if (event.key === "Enter" && event.target === input.current) {
      event.preventDefault(); results[0].click()
    }
  }
  return createPortal(<dialog ref={dialog} className="command-dialog" aria-labelledby="command-title" onKeyDown={onKeyDown}
    onClose={() => {
      document.body.classList.remove("command-open")
      const target = opener.current
      if (!target?.isConnected) return
      if (target.tabIndex < 0 && !target.hasAttribute("tabindex")) {
        target.setAttribute("tabindex", "-1")
        target.addEventListener("blur", () => target.removeAttribute("tabindex"), {once:true})
      }
      target.focus({preventScroll:true})
    }}
    onClick={event => {
      if (event.target !== dialog.current) return
      const box = dialog.current.getBoundingClientRect()
      if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) close()
    }}>
    <div className="command-heading"><div><span className="command-eyebrow">POOJANA KAVEESH / QUICK ACCESS</span><h2 id="command-title">Where to next?</h2></div><button type="button" className="command-close" onClick={close} aria-label="Close quick navigation">×</button></div>
    <label className="command-search"><span aria-hidden="true">⌕</span><input ref={input} type="search" value={query} onChange={event => {setQuery(event.target.value); setStatus("")}} placeholder="Find a section, project or action…" aria-label="Search portfolio commands" autoComplete="off" spellCheck={false}/></label>
    <p className="command-status" role="status">{status || `${matches.length} ${matches.length === 1 ? "result" : "results"}`}</p>
    <ul className="command-results" aria-label="Search results" data-lenis-prevent>
      {matches.map(item => <li key={item.label}>{item.href ? <a data-command-result href={item.href} target={item.href.startsWith("#") ? undefined : "_blank"} rel={item.href.startsWith("#") ? undefined : "noopener noreferrer"} onClick={event => chooseLink(item.href, event)}><span><strong>{item.label}</strong><small>{item.detail}</small></span><span className="command-kind">{item.group} <i aria-hidden="true">↗</i></span></a> : <button data-command-result type="button" onClick={copyEmail}><span><strong>{item.label}</strong><small>{item.detail}</small></span><span className="command-kind">{item.group} <i aria-hidden="true">↗</i></span></button>}</li>)}
      {!matches.length && <li className="command-empty">No matches. Try “work”, “security”, or “CV”.</li>}
    </ul>
    <div className="command-help"><span>↑ ↓ to move · Enter to open</span><span>Esc to close</span></div>
  </dialog>, document.body)
}
