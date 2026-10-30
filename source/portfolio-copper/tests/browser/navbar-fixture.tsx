import * as React from 'react'
import { createRoot } from 'react-dom/client'
import { LiquidNavbar, NimbusIcons } from '@/components/ui/liquid-glass-navbar'
import { VERT, FRAG } from '@/components/ui/liquid-glass-shaders'

const items = [
  {label:'Home',icon:NimbusIcons.home},
  {label:'Work',icon:NimbusIcons.globe},
  {label:'Contact',icon:NimbusIcons.plane},
]
function Fixture(){
  const [motion,setMotion]=React.useState(true)
  const [diagnostic,setDiagnostic]=React.useState('Not run')
  const context=React.useRef<WEBGL_lose_context|null>(null)
  const probe=()=>{
    const canvas=document.createElement('canvas')
    const gl=canvas.getContext('webgl')
    if(!gl){setDiagnostic('WebGL context unavailable in this browser');return}
    const messages:string[]=[]
    const shaders=[gl.VERTEX_SHADER,gl.FRAGMENT_SHADER].map((type,i)=>{
      const shader=gl.createShader(type)!
      gl.shaderSource(shader,[VERT,FRAG][i]);gl.compileShader(shader)
      messages.push((i?'Fragment':'Vertex')+': '+(gl.getShaderParameter(shader,gl.COMPILE_STATUS)?'PASS':gl.getShaderInfoLog(shader)))
      return shader
    })
    const program=gl.createProgram()!
    shaders.forEach(shader=>gl.attachShader(program,shader));gl.linkProgram(program)
    messages.push('Link: '+(gl.getProgramParameter(program,gl.LINK_STATUS)?'PASS':gl.getProgramInfoLog(program)))
    gl.deleteProgram(program);shaders.forEach(shader=>gl.deleteShader(shader))
    gl.getExtension('WEBGL_lose_context')?.loseContext()
    setDiagnostic(messages.join('\n'))
  }
  const lose=()=>{
    const gl=document.querySelector<HTMLCanvasElement>('#gpu canvas')?.getContext('webgl')
    context.current=gl?.getExtension('WEBGL_lose_context')??null
    context.current?.loseContext()
    if(!context.current)setDiagnostic('Context-loss test unavailable: WebGL extension absent')
  }
  return <main style={{padding:40,minHeight:'180vh',color:'#f0e4d1',background:'#15110d',fontFamily:'Arial'}}>
    <h1>Liquid navbar browser fixture</h1>
    <p>Local test only. The production build removes this fixture.</p>
    <p><button onClick={probe}>Probe shader</button> <button onClick={()=>setMotion(!motion)}>Motion {motion?'on':'off'}</button> <button onClick={lose}>Lose context</button> <button onClick={()=>context.current?.restoreContext()}>Restore context</button></p>
    <pre role="status">{diagnostic}</pre>
    <h2>WebGL enabled</h2>
    <div id="gpu"><LiquidNavbar items={items} tone="dark" motion={motion} ariaLabel="GPU fixture"/></div>
    <h2>Forced CSS fallback</h2>
    <div id="fallback"><LiquidNavbar items={items} tone="dark" motion={motion} webgl={false} ariaLabel="Fallback fixture"/></div>
    <p style={{marginTop:900}}>Scroll here to check that off-screen rendering stops.</p>
  </main>
}
createRoot(document.getElementById('fixture')!).render(<React.StrictMode><Fixture/></React.StrictMode>)
