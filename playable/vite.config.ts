import { defineConfig } from 'vite';
import { execSync } from 'node:child_process';
import { writeFileSync, readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(fileURLToPath(import.meta.url));
const pkg = JSON.parse(readFileSync(resolve(root, 'package.json'), 'utf8'));
function gitSha(){
 try{return execSync('git rev-parse --short HEAD',{cwd:root,stdio:['ignore','pipe','ignore']}).toString().trim();}
 catch{return 'unknown';}
}
const sha=gitSha();
const builtAt=new Date().toISOString();

function buildInfoPlugin(){
 return {
  name:'painted-abyss-build-info',
  closeBundle(){
   const info={version:pkg.version,sha,builtAt};
   writeFileSync(resolve(root,'dist/build-info.json'),JSON.stringify(info,null,2)+'\n');
  },
  transformIndexHtml(html){
   return html
    .replace(/<title>.*?<\/title>/,`<title>Painted Abyss · v${pkg.version}</title>`)
    .replace('</head>',`  <meta name="painted-abyss-version" content="${pkg.version}"/>\n  <meta name="painted-abyss-sha" content="${sha}"/>\n</head>`);
  },
 };
}

export default defineConfig({
 base:'./',
 build:{chunkSizeWarningLimit:800},
 define:{
  __APP_VERSION__:JSON.stringify(pkg.version),
  __APP_BUILD_SHA__:JSON.stringify(sha),
  __APP_BUILT_AT__:JSON.stringify(builtAt),
 },
 plugins:[buildInfoPlugin()],
});
