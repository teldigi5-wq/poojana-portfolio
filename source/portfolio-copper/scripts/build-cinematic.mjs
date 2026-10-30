import {build} from 'esbuild';
import {fileURLToPath} from 'node:url';
import {readFileSync} from 'node:fs';
import {gzipSync} from 'node:zlib';
const sourceRoot=fileURLToPath(new URL('..',import.meta.url));
process.chdir(sourceRoot);
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
for(const ext of ['js','css']){
  const path=`dist/assets/portfolio-v2.${ext}`,data=readFileSync(path);
  console.log(`${path}: ${data.length} bytes, ${gzipSync(data).length} gzip`);
}
