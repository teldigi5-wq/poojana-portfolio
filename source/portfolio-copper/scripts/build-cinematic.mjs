import {build} from 'esbuild';
import {fileURLToPath} from 'node:url';
import {readFileSync} from 'node:fs';
import {gzipSync} from 'node:zlib';
import {spawnSync} from 'node:child_process';
const sourceRoot=fileURLToPath(new URL('..',import.meta.url));
process.chdir(sourceRoot);
// Small, dependency-free policy demo, independent of the cinematic React bundle.
await build({absWorkingDir:sourceRoot,entryPoints:['src/boundary-demo.ts'],outfile:'dist/assets/boundary-demo.js',bundle:true,minify:true,
  format:'iife',platform:'browser',target:'es2022',legalComments:'external'});
// The page already ships GSAP 3.13.0 and ScrollTrigger. Share that instance.
// Package imports still provide full types and work normally in a React app.
const runtime={name:'shared-gsap',setup(b){
  b.onResolve({filter:/^gsap(?:\/ScrollTrigger)?$/},args=>({path:args.path,namespace:'shared-gsap'}));
  b.onLoad({filter:/.*/,namespace:'shared-gsap'},args=>({contents:args.path==='gsap'
    ?'const gsap=window.gsap; export {gsap}; export default gsap;'
    :'const ScrollTrigger=window.ScrollTrigger; export {ScrollTrigger}; export default ScrollTrigger;',loader:'js'}));
}};
await build({absWorkingDir:sourceRoot,entryPoints:['src/portfolio.tsx'],outfile:'dist/assets/portfolio-v2.js',bundle:true,minify:true,
  format:'iife',platform:'browser',target:'es2022',jsx:'automatic',tsconfig:'tsconfig.json',
  define:{'process.env.NODE_ENV':'"production"'},legalComments:'external',plugins:[runtime]});
// Optional lanyard module shares React and keeps the critical runtime within its budget.
const sharedReact={name:'shared-react',setup(b){
  b.onResolve({filter:/^react$/},()=>({path:'react',namespace:'shared-react'}));
  b.onLoad({filter:/.*/,namespace:'shared-react'},()=>({contents:'module.exports=window.__portfolioReact;',loader:'js'}));
}};
await build({absWorkingDir:sourceRoot,entryPoints:['components/ui/team-lanyard-rail.tsx'],outfile:'dist/assets/portrait-lanyard.js',bundle:true,minify:true,
  format:'esm',platform:'browser',target:'es2022',jsx:'transform',jsxFactory:'React.createElement',jsxFragment:'React.Fragment',
  tsconfigRaw:{compilerOptions:{jsx:'react'}},define:{'process.env.NODE_ENV':'"production"'},legalComments:'external',plugins:[sharedReact]});
const lanyardCss=spawnSync(process.execPath,['node_modules/@tailwindcss/cli/dist/index.mjs','-i','styles/lanyard-utilities.css','-o','dist/assets/portrait-lanyard.css','--minify'],{stdio:'inherit'});
if(lanyardCss.status!==0)process.exit(lanyardCss.status||1);
for(const ext of ['js','css']){
  const path=`dist/assets/portfolio-v2.${ext}`,data=readFileSync(path);
  console.log(`${path}: ${data.length} bytes, ${gzipSync(data).length} gzip`);
}
for(const ext of ['js','css']){
  const path=`dist/assets/portrait-lanyard.${ext}`,data=readFileSync(path);
  console.log(`${path}: ${data.length} bytes, ${gzipSync(data).length} gzip`);
}
