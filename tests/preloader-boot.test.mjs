import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';

const source=readFileSync(new URL('../preloader-boot.js',import.meta.url),'utf8');
function boot({hash='',query='',reduced=false,forced=false,navigation='navigate',scrollY=0,showFails=false,storage}={}){
  const root={dataset:{},classList:new Set()};
  root.classList.remove=root.classList.delete.bind(root.classList);
  const dialog=new EventTarget();dialog.open=false;dialog.closes=0;
  dialog.showModal=()=>{if(showFails)throw Error('unavailable');dialog.open=true};
  dialog.close=()=>{dialog.open=false;dialog.closes++;dialog.dispatchEvent(new Event('close'))};
  const document=new EventTarget();document.hidden=false;document.documentElement=root;
  document.getElementById=()=>dialog;
  const preferences=[new EventTarget(),new EventTarget()];
  preferences[0].matches=reduced;preferences[1].matches=forced;
  const events=new EventTarget();let completed=0;events.addEventListener('portfolio:intro-complete',()=>completed++);
  const timers=new Map();let id=0;
  const context={document,location:{hash,search:query},scrollY,Event,URLSearchParams,
    performance:{now:()=>100,getEntriesByType:()=>[{type:navigation}]},
    matchMedia:q=>preferences[q.includes('forced-colors')?1:0],
    setTimeout:(fn,ms)=>{timers.set(++id,{fn,ms});return id},clearTimeout:key=>timers.delete(key),
    addEventListener:events.addEventListener.bind(events),removeEventListener:events.removeEventListener.bind(events),dispatchEvent:events.dispatchEvent.bind(events),Date};
  if(storage)context.localStorage=storage;
  context.window=context;vm.runInNewContext(source,context);
  return {context,root,dialog,timers,preferences,document,completed:()=>completed};
}

test('a missing React bundle releases the native modal at the independent deadline',()=>{
  const b=boot();assert.equal(b.dialog.open,true);assert.equal(b.timers.size,1);
  const timer=[...b.timers.values()][0];assert.ok(timer.ms <= 3500, 'the opening must release within 3.5 seconds even without React');timer.fn();
  assert.equal(b.dialog.open,false);assert.equal(b.context.__portfolioIntro.active,false);
  assert.equal(b.root.classList.has('intro-active'),false);assert.equal(b.completed(),1);
});
test('completion and a late watchdog are idempotent',()=>{
  const b=boot(),late=[...b.timers.values()][0].fn;
  b.context.__portfolioIntro.complete();late();b.context.__portfolioIntro.complete();
  assert.equal(b.completed(),1);assert.equal(b.dialog.closes,1);assert.equal(b.timers.size,0);
});
test('fresh home visits and home reloads show the introduction at a restored scroll offset',()=>{
  for(const hash of ['', '#home', '#main']){
    for(const navigation of ['navigate', 'reload']){
      const b=boot({hash,navigation,scrollY:3600});
      assert.equal(b.dialog.open,true);assert.equal(b.context.__portfolioIntro.active,true);
      assert.equal(b.root.dataset.introState,'loading');
    }
  }
});
test('deep links, static view, motion preferences and history restoration bypass the gate',()=>{
  for(const settings of [{hash:'#contact'},{query:'?motion=off'},{reduced:true},{forced:true},{navigation:'back_forward'}]){
    const b=boot(settings);assert.equal(b.dialog.open,false);assert.equal(b.timers.size,0);assert.equal(b.root.dataset.introState,'bypassed');
  }
});
test('native Escape/close restores the page without an on-screen skip control',()=>{
  const b=boot();b.dialog.close();assert.equal(b.context.__portfolioIntro.active,false);assert.equal(b.completed(),1);assert.equal(b.timers.size,0);
});
test('hiding the page or changing its motion preference releases an active intro',()=>{
  const b=boot();b.document.hidden=true;b.document.dispatchEvent(new Event('visibilitychange'));
  assert.equal(b.dialog.open,false);
  const c=boot();c.preferences[0].matches=true;c.preferences[0].dispatchEvent(new Event('change'));
  assert.equal(c.dialog.open,false);assert.equal(c.root.classList.has('intro-active'),false);
});
test('a browser that rejects showModal leaves normal content available',()=>{
  const b=boot({showFails:true});assert.equal(b.context.__portfolioIntro.active,false);assert.equal(b.root.classList.has('intro-active'),false);assert.equal(b.timers.size,0);
});
test('a completed intro is remembered and skipped for returning visitors for a week',()=>{
  const data=new Map();const storage={getItem:k=>data.get(k)??null,setItem:(k,v)=>data.set(k,v)};
  const first=boot({storage});assert.equal(first.dialog.open,true);first.context.__portfolioIntro.complete();
  assert.ok(Number(data.get('pk-intro-seen'))>0);
  const second=boot({storage});assert.equal(second.dialog.open,false);assert.equal(second.root.dataset.introState,'bypassed');assert.equal(second.root.dataset.introReason,'returning');
  data.set('pk-intro-seen',String(Date.now()-8*24*60*60*1000));
  const later=boot({storage});assert.equal(later.dialog.open,true);
});
test('storage that throws never blocks the introduction',()=>{
  const storage={getItem:()=>{throw Error('denied')},setItem:()=>{throw Error('denied')}};
  const b=boot({storage});assert.equal(b.dialog.open,true);b.context.__portfolioIntro.complete();assert.equal(b.dialog.open,false);
});
