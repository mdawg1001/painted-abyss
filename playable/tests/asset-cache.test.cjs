const {test}=require('node:test');
const assert=require('node:assert/strict');
const http=require('node:http');
const {mkdtemp,writeFile,mkdir,rm}=require('node:fs/promises');
const path=require('node:path');
const os=require('node:os');

test('HTTP assets reuse unchanged bytes and invalidate changes without caching the page',async t=>{
 const {createAssetResponder}=await import('../static-assets.mjs');
 const root=await mkdtemp(path.join(os.tmpdir(),'abyss-cache-'));
 await mkdir(path.join(root,'assets'));
 for(const [name,data] of Object.entries({'model.glb':'AAAA','index.html':'page','build-info.json':'{}','assets/game-Abcd1234.js':'code'}))await writeFile(path.join(root,name),data);
 const respond=createAssetResponder(root);
 const server=http.createServer((req,res)=>respond(req,res,decodeURIComponent(new URL(req.url,'http://test').pathname),new Set(['assets/game-Abcd1234.js'])).catch(()=>res.writeHead(404).end()));
 await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
 t.after(async()=>{await new Promise(resolve=>server.close(resolve));await rm(root,{recursive:true,force:true});});
 const request=(url,headers={},method='GET')=>new Promise((resolve,reject)=>{
  const req=http.request({hostname:'127.0.0.1',port:server.address().port,path:url,headers,method},res=>{let body='';res.on('data',chunk=>body+=chunk);res.on('end',()=>resolve({status:res.statusCode,headers:res.headers,body}));});req.on('error',reject);req.end();
 });
 const first=await request('/model.glb');assert.equal(first.status,200);assert.equal(first.body,'AAAA');assert.ok(first.headers.etag);
 assert.match(first.headers['cache-control'],/max-age=0, must-revalidate/);
 const unchanged=await request('/model.glb',{'If-None-Match':first.headers.etag});assert.equal(unchanged.status,304);assert.equal(unchanged.body,'');
 assert.equal((await request('/model.glb',{'If-None-Match':`"old", W/${first.headers.etag}`})).status,304);
 await writeFile(path.join(root,'model.glb'),'BBBB'); // Same length, changed content.
 const changed=await request('/model.glb',{'If-None-Match':first.headers.etag});assert.equal(changed.status,200);assert.equal(changed.body,'BBBB');assert.notEqual(changed.headers.etag,first.headers.etag);
 const head=await request('/model.glb',{},'HEAD');assert.equal(head.body,'');assert.equal(head.headers.etag,changed.headers.etag);assert.equal(head.headers['content-length'],'4');
 const hashed=await request('/assets/game-Abcd1234.js');assert.match(hashed.headers['cache-control'],/max-age=31536000, immutable/);
 for(const url of ['/','/index.html','/build-info.json']){
  const fresh=await request(url,{'If-None-Match':'*'});assert.equal(fresh.status,200);assert.match(fresh.headers['cache-control'],/no-store/);assert.equal(fresh.headers.etag,undefined);
 }
 assert.equal((await request('/..%2foutside')).status,403);
});
