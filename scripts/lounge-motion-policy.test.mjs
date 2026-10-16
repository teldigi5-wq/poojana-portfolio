import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {runInNewContext} from 'node:vm';

const motion=readFileSync('lounge-case-motion.js','utf8');
function exercise({reduced=false,forced=false,mobile=false,saveData=false,lowMemory=false,withoutGSAP=false,withoutPlugin=false}={}){
  const calls=[],section={
    querySelector:()=>({nodeType:1}),
  };
  const gsap={registerPlugin(plugin){calls.push(['plugin',plugin])},from(elements,opts){calls.push(['from',elements.length,opts])}};
  const plugin={name:'ScrollTrigger'};
  runInNewContext(motion,{
    document:{getElementById:id=>id==='lounge-concept'?section:null},
    window:{gsap:withoutGSAP?undefined:gsap,ScrollTrigger:withoutPlugin?undefined:plugin},
    navigator:{connection:{saveData},deviceMemory:lowMemory?2:8},
    matchMedia:query=>({matches:query.includes('prefers-reduced-motion')?reduced:
      query.includes('forced-colors')?forced:query.includes('max-width')?mobile:false})
  });
  return calls;
}
for(const flags of [{reduced:true},{forced:true},{mobile:true},{saveData:true},{lowMemory:true},{withoutGSAP:true},{withoutPlugin:true}]){
  assert.equal(exercise(flags).length,0,'Motion must not run for accessibility, data-save, or missing library fallback');
}
const calls=exercise();
assert.equal(calls[0]?.[0],'plugin');
assert.equal(calls[1]?.[0],'from');
assert.equal(calls[1][1],6);
assert.equal(calls[1][2].scrollTrigger.once,true);
assert.ok(!calls[1][2].scrollTrigger.scrub && !calls[1][2].repeat);
assert.equal(calls[1][2].clearProps,'opacity,transform');
console.log('PASS Restaurant portfolio reveal: finite local GSAP with reduced-motion, data and missing-library fallbacks.');
