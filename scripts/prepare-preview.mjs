import {cpSync,mkdirSync} from 'node:fs';
mkdirSync('dist',{recursive:true});
for(const path of ['index.html','styles.css','luxe.css','app.js','motion.js','assets','__qa'])cpSync(path,`dist/${path}`,{recursive:true});
console.log('Prepared static preview in dist/');
