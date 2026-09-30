import {readFile,stat} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import path from 'node:path';

export const FRESH_HEADERS={'Cache-Control':'no-store, no-cache, must-revalidate','Pragma':'no-cache'};
const types={'.html':'text/html','.js':'text/javascript','.css':'text/css','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.webp':'image/webp','.svg':'image/svg+xml','.mp3':'audio/mpeg','.json':'application/json','.gltf':'model/gltf+json','.glb':'model/gltf-binary','.bin':'application/octet-stream','.ktx2':'image/ktx2','.wasm':'application/wasm','.woff2':'font/woff2'};

/** Cache small validators, never the large model/texture buffers. */
export function createAssetResponder(root){
 const validators=new Map();
 return async function respond(req,res,pathname,immutableFiles=new Set()){
  const relative=pathname==='/'?'index.html':pathname.replace(/^\//,'');
  const file=path.resolve(root,relative);
  if(!file.startsWith(path.resolve(root)+path.sep)){res.writeHead(403,FRESH_HEADERS).end();return;}
  const fresh=relative.endsWith('.html')||relative==='build-info.json';
  const headers={'Content-Type':types[path.extname(file)]||'application/octet-stream',
   ...(fresh?FRESH_HEADERS:{'Cache-Control':immutableFiles.has(relative)?'public, max-age=31536000, immutable':'public, max-age=0, must-revalidate'})};
  if(fresh){
   const data=await readFile(file);
   res.writeHead(200,{...headers,'Content-Length':data.length});res.end(req.method==='HEAD'?undefined:data);return;
  }
  const info=await stat(file,{bigint:true});
  const signature=`${info.ino}:${info.size}:${info.mtimeNs}:${info.ctimeNs}`;
  let cached=validators.get(file),data;
  if(!cached||cached.signature!==signature){
   data=await readFile(file);
   cached={signature,etag:'"'+createHash('sha256').update(data).digest('hex')+'"'};
   if(validators.size>=512)validators.delete(validators.keys().next().value);
   validators.set(file,cached);
  }
  headers.ETag=cached.etag;
  const condition=req.headers['if-none-match'];
  if(condition?.split(',').some(tag=>tag.trim()==='*'||tag.trim().replace(/^W\//,'')===cached.etag)){
   res.writeHead(304,headers).end();return;
  }
  const body=req.method==='HEAD'?undefined:data??await readFile(file);
  res.writeHead(200,{...headers,'Content-Length':String(info.size)});
  res.end(body);
 };
}
