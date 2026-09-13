(()=>{
'use strict';
const $=(s,c=document)=>c.querySelector(s), $$=(s,c=document)=>[...c.querySelectorAll(s)];
const root=document.documentElement, body=document.body;
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
const coarse=matchMedia('(pointer: coarse)').matches;

// Intro: once per session, with reduced-motion bypass.
const intro=$('#intro');
if(!reduce&&!sessionStorage.getItem('pk-intro')){
  setTimeout(()=>{intro?.classList.add('done');sessionStorage.setItem('pk-intro','1')},1450);
}else intro?.classList.add('done');

// Theme.
const themeToggle=$('#themeToggle');
const saved=localStorage.getItem('pk-theme');
if(saved) root.dataset.theme=saved;
else if(matchMedia('(prefers-color-scheme: light)').matches) root.dataset.theme='light';
function setTheme(next){root.dataset.theme=next;localStorage.setItem('pk-theme',next);document.querySelector('meta[name="theme-color"]')?.setAttribute('content',next==='dark'?'#060913':'#f4f7fc');}
themeToggle?.addEventListener('click',()=>setTheme(root.dataset.theme==='dark'?'light':'dark'));

// Header + progress.
const header=$('#header'), progress=$('#progress');
function onScroll(){
  const y=scrollY, max=Math.max(1,document.documentElement.scrollHeight-innerHeight);
  header?.classList.toggle('scrolled',y>26);
  if(progress) progress.style.width=`${Math.min(100,(y/max)*100)}%`;
  updateTimeline();
}
addEventListener('scroll',onScroll,{passive:true});onScroll();

// Mobile navigation.
const menuBtn=$('#menuToggle'), mobile=$('#mobileNav');
function closeMenu(){mobile?.classList.remove('open');menuBtn?.classList.remove('open');menuBtn?.setAttribute('aria-expanded','false');body.classList.remove('menu-open')}
menuBtn?.addEventListener('click',()=>{
  const open=!mobile?.classList.contains('open');
  mobile?.classList.toggle('open',open);menuBtn.classList.toggle('open',open);menuBtn.setAttribute('aria-expanded',String(open));body.classList.toggle('menu-open',open);
});
$$('#mobileNav a').forEach(a=>a.addEventListener('click',closeMenu));

// Reveal choreography.
const reveals=$$('.reveal');
if(reduce) reveals.forEach(el=>el.classList.add('visible'));
else{
  const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.12,rootMargin:'0px 0px -40px'});
  reveals.forEach(el=>io.observe(el));
}

// Active navigation.
const sections=$$('main section[id]'), navLinks=$$('.desktop-nav a');
const navMap=new Map(navLinks.map(a=>[a.getAttribute('href')?.slice(1),a]));
const sectionObs=new IntersectionObserver(entries=>{
  const visible=entries.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
  if(!visible)return;navLinks.forEach(a=>a.classList.remove('active'));navMap.get(visible.target.id)?.classList.add('active');
},{rootMargin:'-35% 0px -55%',threshold:[0,.15,.4]});
sections.forEach(s=>sectionObs.observe(s));

// Rotating role line.
const role=$('#roleText'), roles=['Software Engineer','AI Systems Builder','Backend Developer','IoT Engineer'];let roleIndex=0;
if(role&&!reduce)setInterval(()=>{role.classList.add('swap');setTimeout(()=>{roleIndex=(roleIndex+1)%roles.length;role.textContent=roles[roleIndex];role.classList.remove('swap')},210)},2700);

// Small 3D tilt — subtle and disabled for touch/reduced motion.
if(!coarse&&!reduce){
  $$('.tilt').forEach(card=>{
    const amount=Number(card.dataset.tilt||3);
    card.addEventListener('pointermove',e=>{
      const r=card.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
      card.style.transform=`perspective(1100px) rotateX(${(-y*amount).toFixed(2)}deg) rotateY(${(x*amount).toFixed(2)}deg) translateY(-2px)`;
    });
    card.addEventListener('pointerleave',()=>card.style.transform='');
  });
  $$('.magnetic').forEach(el=>{
    el.addEventListener('pointermove',e=>{const r=el.getBoundingClientRect();el.style.transform=`translate(${((e.clientX-r.left-r.width/2)*.07).toFixed(1)}px,${((e.clientY-r.top-r.height/2)*.1).toFixed(1)}px)`});
    el.addEventListener('pointerleave',()=>el.style.transform='');
  });
}

// Engineering principle / orbit sync.
const principles=$$('.principle'), engBtns=$$('.eng-orbit button');
function selectEng(id){principles.forEach(x=>x.classList.toggle('active',x.dataset.eng===id));engBtns.forEach(x=>x.classList.toggle('active',x.dataset.id===id));}
principles.forEach(p=>{p.addEventListener('mouseenter',()=>selectEng(p.dataset.eng));p.addEventListener('click',()=>selectEng(p.dataset.eng))});
engBtns.forEach(b=>b.addEventListener('click',()=>selectEng(b.dataset.id)));

// Timeline fill.
const timeline=$('#timeline'), timelineFill=$('#timelineFill');
function updateTimeline(){if(!timeline||!timelineFill)return;const r=timeline.getBoundingClientRect();const span=r.height+innerHeight*.25;const done=Math.max(0,Math.min(1,(innerHeight*.68-r.top)/span));timelineFill.style.height=`${done*100}%`;}

// Command palette.
const cmd=$('#command'), cmdOpen=$('#cmdOpen'), cmdClose=$('#cmdClose'), cmdInput=$('#commandInput'), cmdList=$('#commandList');let cmdIndex=0;
const cmdButtons=()=>$$('button[data-cmd]',cmdList);
function paintCmd(){cmdButtons().forEach((b,i)=>b.classList.toggle('selected',i===cmdIndex));cmdButtons()[cmdIndex]?.scrollIntoView({block:'nearest'});}
function openCmd(){if(!cmd?.open)cmd.showModal();cmdIndex=0;paintCmd();setTimeout(()=>cmdInput?.focus(),30)}
function closeCmd(){if(cmd?.open)cmd.close()}
function runCmd(name){
  const go=id=>{closeCmd();document.getElementById(id)?.scrollIntoView({behavior:reduce?'auto':'smooth'})};
  ({projects:()=>go('projects'),skills:()=>go('skills'),contact:()=>go('contact'),github:()=>open('https://github.com/teldigi5-wq','_blank','noopener'),linkedin:()=>open('https://www.linkedin.com/in/poojana-kaveesh-3048b8387','_blank','noopener'),resume:()=>open('assets/Poojana_Kaveesh_CV.pdf','_blank'),theme:()=>{setTheme(root.dataset.theme==='dark'?'light':'dark');closeCmd()}}[name]||(()=>{}))();
}
cmdOpen?.addEventListener('click',openCmd);cmdClose?.addEventListener('click',closeCmd);cmdButtons().forEach(b=>b.addEventListener('click',()=>runCmd(b.dataset.cmd)));
cmdInput?.addEventListener('input',()=>{const q=cmdInput.value.toLowerCase().trim();cmdButtons().forEach(b=>b.hidden=q&&!b.textContent.toLowerCase().includes(q));cmdIndex=0;paintCmd()});
addEventListener('keydown',e=>{
  if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==='k'){e.preventDefault();openCmd();return}
  if(!cmd?.open)return;
  const visible=cmdButtons().filter(b=>!b.hidden);if(!visible.length)return;
  if(e.key==='ArrowDown'){e.preventDefault();cmdIndex=(cmdIndex+1)%visible.length;cmdButtons().forEach(b=>b.classList.remove('selected'));visible[cmdIndex]?.classList.add('selected')}
  if(e.key==='ArrowUp'){e.preventDefault();cmdIndex=(cmdIndex-1+visible.length)%visible.length;cmdButtons().forEach(b=>b.classList.remove('selected'));visible[cmdIndex]?.classList.add('selected')}
  if(e.key==='Enter'){e.preventDefault();runCmd((visible[cmdIndex]||visible[0]).dataset.cmd)}
});
cmd?.addEventListener('click',e=>{const r=cmd.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)closeCmd()});

// Custom cursor.
const dot=$('#cursorDot'), ring=$('#cursorRing');
if(!coarse&&!reduce&&dot&&ring){
  let mx=0,my=0,rx=0,ry=0;
  addEventListener('pointermove',e=>{mx=e.clientX;my=e.clientY;dot.style.opacity='1';ring.style.opacity='1';dot.style.transform=`translate(${mx-2.5}px,${my-2.5}px)`},{passive:true});
  const follow=()=>{rx+=(mx-rx)*.14;ry+=(my-ry)*.14;ring.style.transform=`translate(${rx-15.5}px,${ry-15.5}px)`;requestAnimationFrame(follow)};follow();
  $$('a,button,.project,.skill-card').forEach(el=>{el.addEventListener('mouseenter',()=>ring.classList.add('hover'));el.addEventListener('mouseleave',()=>ring.classList.remove('hover'))});
}

// Lightweight ambient engineering network — no WebGL dependency.
const canvas=$('#network');
if(canvas&&!reduce){
  const ctx=canvas.getContext('2d',{alpha:true});let nodes=[],w=0,h=0,dpr=1,raf=0;
  function resize(){dpr=Math.min(devicePixelRatio||1,1.5);w=innerWidth;h=innerHeight;canvas.width=w*dpr;canvas.height=h*dpr;canvas.style.width=w+'px';canvas.style.height=h+'px';ctx.setTransform(dpr,0,0,dpr,0,0);const count=w<700?22:w<1100?34:48;nodes=Array.from({length:count},()=>({x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-.5)*.16,vy:(Math.random()-.5)*.16,r:Math.random()*1.2+.45}))}
  function draw(){ctx.clearRect(0,0,w,h);const dark=root.dataset.theme!=='light';const line=dark?'rgba(86,168,255,.10)':'rgba(18,108,224,.08)',point=dark?'rgba(85,241,230,.4)':'rgba(18,108,224,.28)';
    nodes.forEach(n=>{n.x+=n.vx;n.y+=n.vy;if(n.x<0||n.x>w)n.vx*=-1;if(n.y<0||n.y>h)n.vy*=-1;ctx.fillStyle=point;ctx.beginPath();ctx.arc(n.x,n.y,n.r,0,Math.PI*2);ctx.fill()});
    for(let i=0;i<nodes.length;i++)for(let j=i+1;j<nodes.length;j++){const a=nodes[i],b=nodes[j],dx=a.x-b.x,dy=a.y-b.y,d=Math.hypot(dx,dy);if(d<135){ctx.strokeStyle=line;ctx.globalAlpha=1-d/135;ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke();ctx.globalAlpha=1}}
    raf=requestAnimationFrame(draw)}
  resize();draw();addEventListener('resize',()=>{cancelAnimationFrame(raf);resize();draw()},{passive:true});
}

document.getElementById('year').textContent=new Date().getFullYear();
})();