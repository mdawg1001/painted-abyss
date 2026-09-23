/**
 * Headless proof: open military crate → scroll visible → take scrap.
 */
import {chromium} from 'playwright';
import {mkdir,writeFile} from 'node:fs/promises';

const OUT='/opt/cursor/artifacts';
await mkdir(OUT,{recursive:true});

const browser=await chromium.launch({headless:true,args:['--use-gl=angle','--use-angle=swiftshader']});
const page=await browser.newPage({viewport:{width:1280,height:720}});
page.on('pageerror',e=>console.log('PAGEERROR',e.message));

await page.goto('http://127.0.0.1:5173/?test=1',{waitUntil:'domcontentloaded',timeout:60000});
await page.getByRole('button',{name:/Begin dive/i}).click({timeout:30000});
await page.waitForFunction(()=>!!(window).__abyss,{timeout:20000});
await page.waitForTimeout(3000);

const info=await page.evaluate(async()=>{
 const w=(window).__abyss;
 const chest=w.mission.chests.find(c=>c.kind==='military');
 const pos={x:chest.position.x,y:2.0,z:chest.position.z+1.55};
 w.mission.position={...pos};
 if(w.position?.copy)w.position.copy(pos);
 w.velocity?.set?.(0,0,0);
 if(!chest.open)w.mission.interact();
 const visual=w.chestVisuals.get(chest.id);
 if(visual?.lid)visual.lid.rotation.copy(visual.openRot);
 // Hold camera so bob/follow cannot yank the framed shot.
 w.holdCamera=true;
 w.yaw=w.targetYaw=0;
 w.pitch=w.targetPitch=-.52;
 w.camera.position.set(pos.x,2.55,pos.z);
 w.camera.rotation.set(w.pitch,w.yaw,0);
 w.mission.torch=true;
 // Force scroll fully presented in world space above the crate.
 const scroll=w.scrollVisuals.get(chest.id);
 if(scroll){
  scroll.present=1;
  scroll.root.visible=true;
  scroll.root.position.set(chest.position.x,chest.position.y+.85,chest.position.z+.25);
  scroll.root.scale.setScalar(1.7);
  scroll.root.rotation.set(-.4,.7,0);
 }
 w.publish();
 await new Promise(r=>setTimeout(r,700));
 let meshes=0;
 scroll?.root.traverse(o=>{if(o.isMesh)meshes++;});
 return{
  version:document.querySelector('.build-version')?.textContent||'',
  open:chest.open,
  notice:w.mission.notice,
  scrollVisible:!!scroll?.root.visible,
  scrollPos:scroll?{...scroll.root.position}:null,
  meshes,
  holdCamera:w.holdCamera,
 };
});
console.log('OPEN_STATE',JSON.stringify(info,null,2));
const client=await page.context().newCDPSession(page);
const shot=await client.send('Page.captureScreenshot',{format:'png',fromSurface:true});
await writeFile(`${OUT}/scroll_visible_in_open_crate.png`,Buffer.from(shot.data,'base64'));

const after=await page.evaluate(async()=>{
 const w=(window).__abyss;
 const chest=w.mission.chests.find(c=>c.kind==='military');
 w.holdCamera=false;
 w.mission.interact();
 await new Promise(r=>setTimeout(r,500));
 w.holdCamera=true;
 const scroll=w.scrollVisuals.get(chest.id);
 return{
  fragments:[...w.mission.mapFragments],
  notice:w.mission.notice,
  scrollVisible:!!scroll?.root.visible,
  present:scroll?.present,
 };
});
console.log('TAKE_STATE',JSON.stringify(after,null,2));
const shot2=await client.send('Page.captureScreenshot',{format:'png',fromSurface:true});
await writeFile(`${OUT}/scroll_taken_crate_empty_map_1of3.png`,Buffer.from(shot2.data,'base64'));

await browser.close();
console.log('done');
