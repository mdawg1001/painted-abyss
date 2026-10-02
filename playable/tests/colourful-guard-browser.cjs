const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
const assert=require('node:assert/strict');
(async()=>{const browser=await chromium.launch({channel:'chrome',headless:true});try{
 const p=await browser.newPage({viewport:{width:1100,height:850}});const errors=[];p.on('pageerror',e=>errors.push(e.message));
 await p.goto((process.env.GAME_URL||'http://127.0.0.1:5190')+'/?test=1');await p.waitForFunction(()=>window.__abyss,null,{timeout:60000});
 await p.evaluate(()=>{window.__abyss.sound=false;window.__abyss.bootEssentials();});await p.waitForFunction(()=>window.__abyss.sovietGuards.every(v=>v.ready&&v.loco)&&window.__abyss.guardActs.every(Boolean),null,{timeout:120000});
 // Isolated render of the actual game visual, independent of the bunker post-processing.
 await p.evaluate(async()=>{const T=await import('/node_modules/.vite/deps/three.js');const w=window.__abyss;w.pause();window.__realRequest=w.requestRender;w.requestRender=()=>{};cancelAnimationFrame(w.frame);w.frame=0;const v=w.sovietGuards[0];window.__qaVisual=v;const scene=new T.Scene();scene.background=new T.Color(0x242c33);scene.add(new T.HemisphereLight(0xeaf6ff,0x535049,2));const light=new T.DirectionalLight(0xffedd4,3);light.position.set(3,5,5);scene.add(light);scene.add(v.root);v.root.position.set(0,0,0);v.root.rotation.set(0,0,0);v.root.visible=true;v.coat.visible=false;v.fill.intensity=0;v.rim.intensity=0;
 const floor=new T.Mesh(new T.PlaneGeometry(20,20),new T.MeshStandardMaterial({color:0x363f45}));floor.rotation.x=-Math.PI/2;floor.position.y=-.02;scene.add(floor);
 const camera=new T.PerspectiveCamera(35,1100/850,.01,100);camera.position.set(3,2.1,4.5);camera.lookAt(0,1,0);const renderer=new T.WebGLRenderer({antialias:true});renderer.setSize(1100,850);renderer.setPixelRatio(1);renderer.domElement.id='character-test';renderer.domElement.style.cssText='position:fixed;inset:0;z-index:99999';document.body.append(renderer.domElement);v.loco.mixer.update(.1);scene.updateMatrixWorld(true);renderer.render(scene,camera);window.__characterQA={scene,camera,renderer};});
 await p.screenshot({path:'/tmp/colourful-character-idle.png'});
 const result=await p.evaluate(async()=>{
  const T=await import('/node_modules/.vite/deps/three.js');const {applyGuardCombatPose}=await import('/src/guardCombatPose.ts');
  const {updateGuardLocomotion}=await import('/src/sovietGuardAsset.ts');const {playGuardAction,stepGuardAction,clearGuardAction}=await import('/src/guardActions.ts');
  const w=window.__abyss,v=window.__qaVisual,q=window.__characterQA;const act=w.guardActs[0];v.gun.visible=true;
  window.__qaPose=(kind)=>{clearGuardAction(act);for(let i=0;i<60;i++){updateGuardLocomotion(v.loco,1/60,{moving:kind==='walk'||kind==='run',speed:kind==='run'?3:kind==='walk'?1:0,state:'chase'});if(kind==='aim')applyGuardCombatPose(v.rig,v.pose,v.gun,{target:new T.Vector3(0,1.5,6),aim:1,engaged:true,recoil:0,speed:0,dt:1/60});}
   if(['hit','stab','death'].includes(kind)){playGuardAction(act,kind);stepGuardAction(v.loco,act,kind==='death'?1.5:.25);}
   q.scene.updateMatrixWorld(true);v.loco.skin.computeBoundingBox();q.renderer.render(q.scene,q.camera);
   return v.loco.skin.boundingBox.getSize(new T.Vector3()).toArray();};
  const poses={};for(const kind of ['idle','walk','run','aim','hit','stab','death'])poses[kind]=window.__qaPose(kind);
  window.__qaPose('aim');return {poses,gunParent:v.gun.parent.name,bones:v.loco.skin.skeleton.bones.length,triangles:v.loco.skin.geometry.attributes.position.count/3,muzzle:!!v.gun.getObjectByName('guardMuzzle')};
 });
 await p.screenshot({path:'/tmp/colourful-character-aim.png'});
 const independent=await p.evaluate(()=>{const [a,b]=window.__abyss.sovietGuards;return a.loco.skin.material!==b.loco.skin.material&&a.loco.skin.geometry===b.loco.skin.geometry&&a.loco.skin.skeleton!==b.loco.skin.skeleton;});assert.ok(independent,'per-enemy skeleton and hit-flash material, shared geometry');
 assert.equal(result.gunParent,'FistR');assert.equal(result.bones,23);assert.ok(result.muzzle);for(const size of Object.values(result.poses))assert.ok(size.every(n=>Number.isFinite(n)&&n>0&&n<5));
 // Fresh real-game instance: do not carry the isolated fixture's animation state over.
 await p.goto((process.env.GAME_URL||'http://127.0.0.1:5190')+'/?test=1');await p.waitForFunction(()=>window.__abyss);
 await p.evaluate(()=>{const w=window.__abyss;w.sound=false;w.requestLookLock=()=>{};w.start();});
 await p.waitForFunction(()=>window.__abyss.sovietGuards.every(v=>v.ready)&&window.__abyss.guardActs.filter(Boolean).length===window.__abyss.sovietGuards.length,null,{timeout:120000});await p.waitForTimeout(4000);
 const inGame=await p.evaluate(async()=>{const T=await import('/node_modules/.vite/deps/three.js');const {FLOOR_Y}=await import('/src/simulation.ts');const w=window.__abyss;w.pause();w.requestRender=()=>{};cancelAnimationFrame(w.frame);w.frame=0;
 for(const g of w.mission.guards)g.active=false;
 const g=w.mission.guards[0];g.active=true;g.hp=100;g.gun=true;g.coat=false;g.speed=0;g.aim=1;g.state='chase';g.role='sentry';g.heading=0;g.life++;g.position.x=w.position.x;g.position.z=w.position.z-3.5;
 const v=w.sovietGuards[0];for(let i=0;i<90;i++)w.syncSovietGuard(1/60);v.root.visible=true;
 w.camera.position.copy(w.position);w.camera.lookAt(g.position.x,FLOOR_Y+1.1,g.position.z);w.camera.updateMatrixWorld(true);w.updatePointCull();w.composer.render();
 const style=document.createElement('style');style.textContent='.menu-backdrop{display:none!important}';document.head.append(style);
 return {camera:w.camera.position.toArray(),guard:v.root.position.toArray(),head:v.rig.head.getWorldPosition(new T.Vector3()).toArray(),bodyBox:new T.Box3().setFromObject(v.body).getSize(new T.Vector3()).toArray()};});
 await p.screenshot({path:'/tmp/colourful-character-bunker.png'});
 assert.ok(inGame.head[1]>inGame.guard[1]+1,'head above torso in the bunker');
 console.log({inGame});
 assert.deepEqual(errors,[]);console.log(JSON.stringify(result));
}finally{await browser.close();}})().catch(e=>{console.error(e);process.exit(1)});
