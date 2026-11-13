import {cpSync,mkdirSync} from 'node:fs';
mkdirSync('dist',{recursive:true});
cpSync('classic.html','dist/index.html');
for(const path of ['boundary-demo.css','styles.css','luxe.css','project-explorers.css','art-direction.css','design-tokens.css','clarity.css','lanyard.css','app.js','motion.js','preloader-boot.js','assets','__qa'])cpSync(path,`dist/${path}`,{recursive:true});
console.log('Prepared static preview in dist/');
