const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const url=(process.env.GAME_URL||'http://127.0.0.1:5184')+'/?test=1';
const stats=()=>{
 const v=window.__abyss.copperPipe;let tris=0;
 v.group.traverseVisible(o=>{if(o.isMesh)tris+=(o.geometry.index?.count??o.geometry.attributes.position.count)/3;});
 return {ready:v.ready,detailReady:v.detailReady,near:v.sections.filter(s=>s.detailed).length,tris,sections:v.sections.length};
};
const move=async(page,z)=>page.evaluate(async z=>{
 const w=window.__abyss;const {PIPE_MOUNT}=await import('/src/pipeAsset.ts');
 const p={x:PIPE_MOUNT.x,y:1.65,z:PIPE_MOUNT.z+z};
 Object.assign(w.mission.position,p);w.position.copy(p);w.camera.position.copy(p);w.velocity.set(0,0,0);w.yaw=w.targetYaw=0;w.pitch=w.targetPitch=0;w.camera.rotation.set(0,0,0,'YXZ');
},z);
(async()=>{
 const browser=await chromium.launch({channel:'chrome',headless:true});
 try{
  const page=await browser.newPage({viewport:{width:1280,height:800}});const requests=[],errors=[];
  page.on('request',r=>{if(r.url().endsWith('/copper_pipe.glb'))requests.push(r.url());});
  page.on('pageerror',e=>errors.push(e.message));
  page.on('console',m=>{if(/WebGL.*(INVALID|error)|GL_INVALID|THREE.*Error/.test(m.text()))errors.push(m.text());});
  await page.goto(url,{waitUntil:'domcontentloaded'});await page.waitForFunction(()=>window.__abyss,null,{timeout:60000});
  await move(page,20);await page.waitForFunction(()=>window.__abyss.copperPipe.ready,null,{timeout:60000});
  await page.evaluate(()=>{window.__abyss.sound=false;window.__abyss.start();window.__abyss.playing=false;});
  await page.waitForTimeout(500);
  const far=await page.evaluate(stats);assert.equal(far.sections,8);assert.equal(far.near,0);assert.equal(far.tris,82064);assert.equal(requests.length,0);
  // Pause simulation for repeatable camera views; hide only the pause overlay in QA captures.
  await page.addStyleTag({content:'.menu-backdrop{display:none!important}'});
  fs.mkdirSync('test-results',{recursive:true});await page.screenshot({path:'test-results/copper-far.png'});
  await move(page,4);await page.waitForFunction(()=>window.__abyss.copperPipe.detailReady,null,{timeout:60000});await page.waitForTimeout(500);
  const near=await page.evaluate(stats);assert.ok(near.near>0&&near.near<8);assert.equal(requests.length,1);assert.ok(near.tris<389072);
  const fitting=await page.evaluate(async()=>{const THREE=await import('/node_modules/.vite/deps/three.js');return window.__abyss.copperPipe.sections.map(s=>{const a=new THREE.Box3().setFromObject(s.far),b=new THREE.Box3().setFromObject(s.near);return {min:a.min.distanceTo(b.min),max:a.max.distanceTo(b.max)};});});
  assert.ok(fitting.every(b=>b.min<.025&&b.max<.025),JSON.stringify(fitting));
  await page.screenshot({path:'test-results/copper-near.png'});
  await move(page,20);await page.waitForTimeout(500);assert.equal((await page.evaluate(stats)).tris,82064);
  await move(page,4);await page.waitForTimeout(500);assert.equal(requests.length,1,'return approach reuses original');
  assert.deepEqual(errors,[]);console.log(JSON.stringify({far,near,fitting,originalDownloads:requests.length}));
  await page.close();
  const fail=await browser.newPage();await fail.route('**/copper_pipe.glb',r=>r.abort());
  await fail.goto(url,{waitUntil:'domcontentloaded'});await fail.waitForFunction(()=>window.__abyss,null,{timeout:60000});
  await move(fail,4);await fail.waitForFunction(()=>window.__abyss.copperPipe.detailAttempts===1&&!window.__abyss.copperPipe.detailLoading,null,{timeout:60000});
  assert.equal((await fail.evaluate(stats)).tris,82064);console.log('Failed original download retained all distant sections.');
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exit(1)});
