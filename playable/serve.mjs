// Serves playable/dist. Rebuilds automatically when package.json version ≠ dist/build-info.json.
import http from 'node:http';
import { readFile, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createAssetResponder, FRESH_HEADERS } from './static-assets.mjs';
import { execSync } from 'node:child_process';
import { createServer as netCreateServer } from 'node:net';

const playableDir=fileURLToPath(new URL('./', import.meta.url));
const root=fileURLToPath(new URL('./dist/', import.meta.url));
const port=Number(process.env.PORT||5173);
const respondAsset=createAssetResponder(root);
let immutableFiles=new Set();
const rememberBuild=(pkg,info)=>{immutableFiles=new Set(info.immutableAssets||[]);return {pkg,info};};
let rebuildLock=Promise.resolve();

async function readJson(file){
 try{return JSON.parse(await readFile(file,'utf8'));}catch{return null;}
}

async function ensureFreshDist(){
 const pkg=await readJson(path.join(playableDir,'package.json'));
 if(!pkg?.version)throw new Error('Cannot read playable/package.json');
 const infoPath=path.join(root,'build-info.json');
 const info=await readJson(infoPath);
 if(info?.version===pkg.version){
  try{await access(path.join(root,'index.html'));return rememberBuild(pkg,info);}catch{/* rebuild */}
 }
 console.log(`dist is stale or missing (dist=${info?.version||'none'} · package=${pkg.version}) — rebuilding…`);
 execSync('npm run build',{cwd:playableDir,stdio:'inherit'});
 const fresh=await readJson(infoPath);
 if(!fresh||fresh.version!==pkg.version){
  throw new Error(`Build finished but dist/build-info.json still does not match package.json (${pkg.version}).`);
 }
 return rememberBuild(pkg,fresh);
}

function portFree(p){
 return new Promise(resolve=>{
  const tester=netCreateServer().once('error',()=>resolve(false)).once('listening',()=>tester.close(()=>resolve(true)));
  tester.listen(p,'127.0.0.1');
 });
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
  if(!['GET','HEAD'].includes(req.method)){res.writeHead(405,{Allow:'GET, HEAD',...FRESH_HEADERS}).end();return;}
  const pathname=decodeURIComponent(new URL(req.url||'/','http://localhost').pathname);
  if(pathname==='/__build.json'){
   // Re-check on every poll so a git pull without restart can trigger rebuild on next load.
   rebuildLock=rebuildLock.then(()=>buildPayload(),()=>buildPayload());
   const payload=await rebuildLock;
   res.writeHead(200,{'Content-Type':'application/json',...FRESH_HEADERS}).end(req.method==='HEAD'?undefined:JSON.stringify(payload));
   return;
  }
  if(pathname==='/'||pathname==='/index.html'){
   rebuildLock=rebuildLock.then(()=>ensureFreshDist(),()=>ensureFreshDist());
   await rebuildLock;
  }
  await respondAsset(req,res,pathname,immutableFiles);
 }catch{
  res.writeHead(404,FRESH_HEADERS).end(req.method==='HEAD'?undefined:'File not found');
 }
}).listen(port,'127.0.0.1',()=>{
 console.log(`Painted Abyss v${ready.pkg.version} · ${ready.info.sha} ready: http://127.0.0.1:${port}`);
 console.log(`After another agent merges: node playable/refresh.mjs  (pull + rebuild + restart)`);
});
