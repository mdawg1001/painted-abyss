// Serves playable/dist. Rebuilds automatically when package.json version ≠ dist/build-info.json.
import http from 'node:http';
import { readFile, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
import { execSync } from 'node:child_process';
import { createServer as netCreateServer } from 'node:net';

const require=createRequire(import.meta.url);
const playableDir=fileURLToPath(new URL('./', import.meta.url));
const root=fileURLToPath(new URL('./dist/', import.meta.url));
const port=Number(process.env.PORT||5173);
const types={'.html':'text/html','.js':'text/javascript','.css':'text/css','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.webp':'image/webp','.svg':'image/svg+xml','.mp3':'audio/mpeg','.json':'application/json','.gltf':'model/gltf+json','.glb':'model/gltf-binary','.bin':'application/octet-stream'};
let rebuildLock=Promise.resolve();

async function readJson(file){
 try{return JSON.parse(await readFile(file,'utf8'));}catch{return null;}
}

async function ensureFreshDist(){
 const pkg=require('./package.json');
 const infoPath=path.join(root,'build-info.json');
 const info=await readJson(infoPath);
 if(info?.version===pkg.version){
  try{await access(path.join(root,'index.html'));return {pkg,info};}catch{/* rebuild */}
 }
 console.log(`dist is stale or missing (dist=${info?.version||'none'} · package=${pkg.version}) — rebuilding…`);
 execSync('npm run build',{cwd:playableDir,stdio:'inherit'});
 const fresh=await readJson(infoPath);
 if(!fresh||fresh.version!==pkg.version){
  throw new Error(`Build finished but dist/build-info.json still does not match package.json (${pkg.version}).`);
 }
 return {pkg,info:fresh};
}

function portFree(p){
 return new Promise(resolve=>{
  const tester=netCreateServer().once('error',()=>resolve(false)).once('listening',()=>tester.close(()=>resolve(true)));
  tester.listen(p,'127.0.0.1');
 });
}

function cacheHeaders(pathname){
 if(pathname==='/'||pathname.endsWith('.html')||pathname.endsWith('.json')){
  return {'Cache-Control':'no-store, no-cache, must-revalidate','Pragma':'no-cache'};
 }
 return {'Cache-Control':'no-cache'};
}

async function buildPayload(){
 const {pkg,info}=await ensureFreshDist();
 return {
  packageVersion:pkg.version,
  distVersion:info.version,
  sha:info.sha,
  builtAt:info.builtAt,
  stale:pkg.version!==info.version,
 };
}

const ready=await ensureFreshDist();
if(!(await portFree(port))){
 console.error(`\nPort ${port} is already in use — Safari is probably still talking to an OLD server.`);
 console.error(`Kill it and refresh:\n  lsof -ti:${port} | xargs kill\n  node playable/refresh.mjs\n`);
 process.exit(1);
}

http.createServer(async(req,res)=>{
 try{
  const pathname=decodeURIComponent(new URL(req.url||'/','http://localhost').pathname);
  if(pathname==='/__build.json'){
   // Re-check on every poll so a git pull without restart can trigger rebuild on next load.
   rebuildLock=rebuildLock.then(()=>buildPayload(),()=>buildPayload());
   const payload=await rebuildLock;
   res.writeHead(200,{'Content-Type':'application/json',...cacheHeaders(pathname)}).end(JSON.stringify(payload));
   return;
  }
  if(pathname==='/'||pathname==='/index.html'){
   rebuildLock=rebuildLock.then(()=>ensureFreshDist(),()=>ensureFreshDist());
   await rebuildLock;
  }
  const file=path.resolve(root,'.'+(pathname==='/'?'/index.html':pathname));
  if(!file.startsWith(root)){res.writeHead(403).end();return;}
  const data=await readFile(file);
  res.writeHead(200,{'Content-Type':types[path.extname(file)]||'application/octet-stream',...cacheHeaders(pathname)}).end(data);
 }catch{
  res.writeHead(404).end('File not found');
 }
}).listen(port,'127.0.0.1',()=>{
 console.log(`Painted Abyss v${ready.pkg.version} · ${ready.info.sha} ready: http://127.0.0.1:${port}`);
 console.log(`After another agent merges: node playable/refresh.mjs  (pull + rebuild + restart)`);
});
