"use client"

import * as React from "react"
import gsap from "gsap"

const LAYERS = {
  gateway: ["01 / INGRESS", "One deliberate entry point.", "A Spring gateway routes requests to services with defined responsibilities. Select a layer to inspect its role."],
  identity: ["02 / IDENTITY", "Know who is asking.", "Identity services establish who is making a request. Resource ownership and authorization remain separate checks."],
  users: ["03 / APPLICATION", "Give each service a boundary.", "Application services own their user workflows. Explicit contracts keep responsibilities visible across the platform."],
  data: ["04 / PERSISTENCE", "Keep durable state deliberate.", "PostgreSQL holds durable application data. Redis and RabbitMQ have separate caching and asynchronous messaging roles."],
  runtime: ["05 / EXTERNAL BOUNDARY", "AI is a separate responsibility.", "The AI runtime lives in its own repository behind explicit contracts. This diagram does not imply production activation."],
} as const
type Layer = keyof typeof LAYERS
const FLOW: Layer[] = ["gateway", "identity", "users", "data"]
const CHAPTERS = [
  ["01 / DISCOVER", "Find the place that pulls you in.", "Explore destination context, then turn a first idea into a journey worth planning."],
  ["02 / PLAN", "Give the journey a little structure.", "Bring an itinerary, a budget and checklists together. Planning assistants use deterministic rules; saved plans stay in your browser."],
  ["03 / ARRIVE", "Make the first moments easier.", "Keep practical arrival details together. Live prices, bookings and official requirements lead to external providers."],
] as const

/** Progressive interactions on the existing project artwork; no backend calls. */
export function ProjectExplorers({motion}: {motion:boolean}) {
  React.useEffect(()=>{
    const stage=document.querySelector<HTMLElement>(".aetheris-stage")
    const journey=document.querySelector<HTMLElement>(".wayfarer-stage")
    if(!stage||!journey)return
    const cleanup:(()=>void)[]=[]
    const nodes=[...stage.querySelectorAll<HTMLButtonElement>("[data-arch-node]")]
    const flowButton=stage.querySelector<HTMLButtonElement>(".architecture-flow")!
    const flowLabel=flowButton.querySelector<HTMLElement>(".flow-label")!
    const inspector=stage.querySelector<HTMLElement>(".inspector-copy")!
    const status=stage.querySelector<HTMLElement>(".architecture-status")!
    let flow:gsap.core.Timeline|undefined
    let inspectorAnimation:Animation|undefined
    let chapterAnimation:Animation|undefined
    let photoAnimation:Animation|undefined
    const reveal=(element:HTMLElement)=>motion?element.animate(
      [{opacity:.35,transform:"translateY(8px)"},{opacity:1,transform:"translateY(0)"}],
      {duration:280,easing:"cubic-bezier(.2,.7,.2,1)"}
    ):undefined
    const selectLayer=(key:Layer,animate=true)=>{
      if(!(key in LAYERS))return
      const [number,title,description]=LAYERS[key]
      stage.dataset.archActive=key
      nodes.forEach(node=>node.setAttribute("aria-pressed",String(node.dataset.archNode===key)))
      inspector.querySelector(".inspector-number")!.textContent=number
      inspector.querySelector("h4")!.textContent=title
      inspector.querySelector("p")!.textContent=description
      inspectorAnimation?.cancel()
      if(animate)inspectorAnimation=reveal(inspector)
    }
    const stopFlow=()=>{
      flow?.kill();flow=undefined
      stage.dataset.tracing="false"
      flowLabel.textContent="Follow a request"
      flowButton.setAttribute("aria-label","Follow an illustrative request through the architecture")
    }
    nodes.forEach(node=>{
      node.disabled=false
      const click=()=>{stopFlow();selectLayer(node.dataset.archNode as Layer);status.textContent=LAYERS[node.dataset.archNode as Layer][1]}
      node.addEventListener("click",click);cleanup.push(()=>{node.removeEventListener("click",click);node.disabled=true})
    })
    flowButton.disabled=false
    const trace=()=>{
      if(flow){stopFlow();status.textContent="Walkthrough stopped. Select any layer to explore.";return}
      status.textContent="Illustrative request: gateway, identity, application service, then durable state."
      if(!motion||!gsap){selectLayer("data",false);return}
      stage.dataset.tracing="true"
      flowLabel.textContent="Stop walkthrough"
      flowButton.setAttribute("aria-label","Stop the architecture walkthrough")
      flow=gsap.timeline({onComplete:()=>{stopFlow();status.textContent="Walkthrough complete. This is an architecture illustration, not a live backend request."}})
      FLOW.forEach((key,i)=>flow!.call(()=>selectLayer(key),[],i*.8))
      flow.to({}, {duration:.7})
    }
    flowButton.addEventListener("click",trace)
    cleanup.push(()=>{flowButton.removeEventListener("click",trace);flowButton.disabled=true})
    selectLayer((stage.dataset.archActive as Layer)||"gateway",false)

    const tabs=[...journey.querySelectorAll<HTMLButtonElement>("[data-journey-tab]")]
    const panel=journey.querySelector<HTMLElement>(".journey-panel")!
    const photo=journey.querySelector<HTMLImageElement>(".wayfarer-image")!
    const selectChapter=(index:number,animate=true)=>{
      const [number,title,description]=CHAPTERS[index]
      journey.dataset.chapter=String(index)
      tabs.forEach((tab,i)=>{tab.setAttribute("aria-selected",String(i===index));tab.tabIndex=i===index?0:-1})
      panel.setAttribute("aria-labelledby",tabs[index].id)
      panel.querySelector(".journey-number")!.textContent=number
      panel.querySelector("h4")!.textContent=title
      panel.querySelector("p")!.textContent=description
      chapterAnimation?.cancel();photoAnimation?.cancel()
      if(animate&&motion){
        chapterAnimation=reveal(panel)
        photoAnimation=photo.animate([{transform:"scale(1.035)"},{transform:"scale(1)"}],{duration:800,easing:"cubic-bezier(.2,.7,.2,1)"})
      }
    }
    tabs.forEach((tab,index)=>{
      tab.disabled=false
      const click=()=>selectChapter(index)
      const keys=(event:KeyboardEvent)=>{
        let next=index
        if(event.key==="ArrowRight")next=(index+1)%tabs.length
        else if(event.key==="ArrowLeft")next=(index+tabs.length-1)%tabs.length
        else if(event.key==="Home")next=0
        else if(event.key==="End")next=tabs.length-1
        else return
        event.preventDefault();selectChapter(next);tabs[next].focus()
      }
      tab.addEventListener("click",click);tab.addEventListener("keydown",keys)
      cleanup.push(()=>{tab.removeEventListener("click",click);tab.removeEventListener("keydown",keys);tab.disabled=true})
    })
    selectChapter(Number(journey.dataset.chapter)||0,false)
    const visibility=()=>{if(document.hidden){stopFlow();inspectorAnimation?.cancel();chapterAnimation?.cancel();photoAnimation?.cancel()}}
    document.addEventListener("visibilitychange",visibility)
    const observer=new IntersectionObserver(([entry])=>{if(!entry.isIntersecting)stopFlow()})
    observer.observe(stage)
    return ()=>{
      stopFlow();observer.disconnect();document.removeEventListener("visibilitychange",visibility)
      inspectorAnimation?.cancel();chapterAnimation?.cancel();photoAnimation?.cancel()
      cleanup.forEach(remove=>remove())
    }
  },[motion])
  return null
}
