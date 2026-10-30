// Local QA only. The directory is gitignored and never enters a release tree.
import {mkdirSync,writeFileSync} from 'node:fs';
mkdirSync('__qa',{recursive:true});
const frames=[['phone',390,844],['small',320,740],['tablet',768,1024],['landscape',844,390],['nojs',390,844]];
writeFileSync('__qa/responsive.html',`<!doctype html><html lang="en"><meta charset="utf-8"><title>Portfolio responsive QA</title><style>body{margin:20px;background:#ccc;font:14px Arial}.frames{display:flex;align-items:start;gap:25px;flex-wrap:wrap}iframe{display:block;border:1px solid #666}h2{font-size:16px}</style><div class="frames">${frames.map(([name,w,h])=>`<div><h2>${name} ${w} × ${h}</h2><iframe id="${name}" title="${name}" src="/" width="${w}" height="${h}" ${name==='nojs'?'sandbox="allow-same-origin"':''}></iframe></div>`).join('')}</div></html>`);
console.log('Local QA fixture: /__qa/responsive.html');
