import { LiquidNavbar, NimbusIcons } from "@/components/ui/liquid-glass-navbar"

/** Standalone supplied-component demo; not included in the portfolio bundle. */
export default function Demo(){
  return <div className="nimbus-demo flex min-h-screen w-full flex-col items-center justify-center gap-7 px-4"
    style={{background:"#ece0cc"}}>
    <LiquidNavbar tone="light" defaultActive={0} sound={false} items={[
      {label:"Home",icon:NimbusIcons.home,fx:"glow"},
      {label:"Explore",icon:NimbusIcons.globe,fx:"spin"},
      {label:"Flights",icon:NimbusIcons.plane,fx:"plane"},
      {label:"Weather",icon:NimbusIcons.drop,fx:"drop"},
      {label:"Profile",icon:NimbusIcons.user,fx:"wave"},
    ]}/>
    <span className="text-xs" style={{color:"#66533a"}}>by{" "}
      <a href="https://guglielmogiannattasio.it" target="_blank" rel="noopener noreferrer"
        className="underline underline-offset-4">guglielmogiannattasio.it</a>
    </span>
  </div>
}
