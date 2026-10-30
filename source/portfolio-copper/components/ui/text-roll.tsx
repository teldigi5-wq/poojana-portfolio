"use client"

/*!
 * Character-face composition adapted from Motion Primitives Text Roll:
 * https://github.com/ibelick/motion-primitives/blob/120f64f6ca60348e251f929e9c81f11ccbe45eda/components/core/text-roll.tsx
 * WAAPI drives the same paired, staggered letter faces in this portfolio.
 *
 * MIT License
 * Copyright (c) 2024 ibelick
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
 * of the Software, and to permit persons to whom the Software is furnished to do
 * so, subject to the following conditions:
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import * as React from "react"
import {createPortal} from "react-dom"

export type TextRollProps = {
  children:string
  className?:string
  enabled?:boolean
  autoplay?:boolean
  duration?:number
  stagger?:number
  host?:HTMLElement
}

export function TextRoll({children,className="",enabled=true,autoplay=false,duration=.48,stagger=.026,host}:TextRollProps){
  const ref=React.useRef<HTMLSpanElement>(null)
  const played=React.useRef(false)
  React.useLayoutEffect(()=>{
    if(!host)return
    host.dataset.textRollReady="true"
    return ()=>{delete host.dataset.textRollReady}
  },[host])
  React.useEffect(()=>{
    const root=ref.current
    if(!root||!enabled)return
    const target=host?.closest<HTMLElement>("a,button")??host??root
    const faces=[...root.querySelectorAll<HTMLElement>(".text-roll-letter")]
    let animations:Animation[]=[]
    let disposed=false,generation=0
    const finish=()=>{
      generation++
      animations.forEach(animation=>animation.cancel());animations=[]
      root.dataset.rollState="idle"
    }
    const play=()=>{
      if(disposed||document.hidden||root.dataset.rollState==="rolling")return
      root.dataset.rollState="rolling"
      root.dataset.rollCount=String(Number(root.dataset.rollCount??0)+1)
      const run=++generation
      faces.forEach((letter,index)=>{
        const outgoing=letter.querySelector<HTMLElement>(".text-roll-out")!
        const incoming=letter.querySelector<HTMLElement>(".text-roll-in")!
        const delay=Math.min(index*stagger,.36)*1000
        animations.push(outgoing.animate([
          {transform:"rotateX(0deg)",opacity:1},
          {transform:"rotateX(-90deg)",opacity:0},
        ],{duration:duration*750,delay,easing:"cubic-bezier(.55,0,.3,1)",fill:"both"}))
        animations.push(incoming.animate([
          {transform:"rotateX(90deg)",opacity:0},
          {transform:"rotateX(0deg)",opacity:1},
        ],{duration:duration*1000,delay:delay+75,easing:"cubic-bezier(.22,.7,.2,1)",fill:"both"}))
      })
      Promise.all(animations.map(animation=>animation.finished)).then(()=>{
        if(!disposed&&generation===run)finish()
      }).catch(()=>{/* Cancellation restores the readable first face. */})
    }
    const io=new IntersectionObserver(([entry])=>{
      const visible=entry.isIntersecting
      if(!visible)finish()
      else if(autoplay&&!played.current){played.current=true;play()}
    },{threshold:.55})
    io.observe(host??root)
    const pointer=(event:PointerEvent)=>{if(event.pointerType==="mouse")play()}
    const focus=()=>play()
    const visibility=()=>{if(document.hidden)finish()}
    target.addEventListener("pointerenter",pointer)
    target.addEventListener("focusin",focus)
    document.addEventListener("visibilitychange",visibility)
    return ()=>{
      disposed=true;io.disconnect();finish()
      target.removeEventListener("pointerenter",pointer)
      target.removeEventListener("focusin",focus)
      document.removeEventListener("visibilitychange",visibility)
    }
  },[enabled,autoplay,duration,stagger,children,host])
  return <span ref={ref} className={`text-roll ${className}`} data-roll-state="idle" data-roll-count="0">
    <span aria-hidden="true" className="text-roll-visual">{Array.from(children).map((letter,index)=><span key={index} className="text-roll-letter">
      <span className="text-roll-face text-roll-out">{letter===" "?"\u00a0":letter}</span>
      <span className="text-roll-face text-roll-in">{letter===" "?"\u00a0":letter}</span>
      <span className="text-roll-measure">{letter===" "?"\u00a0":letter}</span>
    </span>)}</span>
    <span className="visually-hidden">{children}</span>
  </span>
}

/** Enhance existing static copy without replacing the page's semantic HTML. */
export function PortfolioTextRoll({enabled}:{enabled:boolean}){
  const [targets,setTargets]=React.useState<{element:HTMLElement;text:string;autoplay:boolean}[]>([])
  React.useEffect(()=>{
    setTargets([...document.querySelectorAll<HTMLElement>("[data-text-roll]")].map(element=>({
      element,text:element.querySelector(".text-roll-source")?.textContent??"",autoplay:element.hasAttribute("data-roll-autoplay"),
    })))
  },[])
  return <>{targets.map(({element,text,autoplay},index)=>createPortal(
    <TextRoll enabled={enabled} autoplay={autoplay} host={element}>{text}</TextRoll>,element,String(index)
  ))}</>
}
