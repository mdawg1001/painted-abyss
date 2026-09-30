import {test} from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import { SOVIET_GUARD_GLB, attachGuardLocomotion, updateGuardLocomotion } from '../src/sovietGuardAsset';
import { parseGuardActions, attachGuardActions, playGuardAction, stepGuardAction, clearGuardAction, UPPER_BODY, ACTION_TUNING, GUARD_ACTIONS_URL } from '../src/guardActions';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const json=JSON.parse(fs.readFileSync(path.join(root,'public',GUARD_ACTIONS_URL.replace(/^\//,'')),'utf8'));

function installImageStubs(){
 const g=globalThis as unknown as Record<string,unknown>;
 g.self=globalThis;
 class FakeImage{width=1;height=1;onload:(()=>void)|null=null;set src(_v:string){queueMicrotask(()=>this.onload?.());}}
 g.Image=FakeImage;g.HTMLImageElement=FakeImage;
 g.document={createElementNS:()=>new FakeImage(),createElement:()=>new FakeImage()};
 g.createImageBitmap=async()=>({width:4,height:4,close(){}});
 if(!g.ProgressEvent)g.ProgressEvent=class extends Event{lengthComputable=false;loaded=0;total=0;};
}
async function guard(){
 installImageStubs();
 const buf=fs.readFileSync(path.join(root,'public',SOVIET_GUARD_GLB.replace(/^\//,'')));
 const ab=buf.buffer.slice(buf.byteOffset,buf.byteOffset+buf.byteLength);
 const gltf=await new Promise<{scene:THREE.Object3D;animations:THREE.AnimationClip[]}>((res,rej)=>new GLTFLoader().parse(ab,'',res as never,rej));
 const by=new Map(gltf.animations.map(a=>[a.name.toLowerCase(),a]));
 const find=(k:string)=>[...by.entries()].find(([n])=>n.includes(k))![1];
 const loco=attachGuardLocomotion(gltf.scene,{idle:find('idle'),walk:find('walk'),run:find('run')})!;
 return {scene:gltf.scene,loco};
}
const bone=(s:THREE.Object3D,n:string)=>s.getObjectByName(n)!;
const wy=(s:THREE.Object3D,n:string)=>{s.updateMatrixWorld(true);return bone(s,n).getWorldPosition(new THREE.Vector3()).y;};

test('the Kevin Iglesias clips are credited, complete and drive the guard rig', async()=>{
 assert.match(json.source,/Kevin Iglesias/);
 const clips=parseGuardActions(json);
 const {scene}=await guard();
 for(const c of [clips.death,clips.hit,clips.stab])for(const t of c.tracks)assert.ok(scene.getObjectByName(t.name.split('.')[0]),`${c.name}: ${t.name} has a bone`);
 for(const c of [clips.hit,clips.stab])for(const t of c.tracks)assert.ok(UPPER_BODY.includes(t.name.split('.')[0]),`${c.name} leaves the legs alone (${t.name})`);
 assert.ok(clips.stabHitTime>.1&&clips.stabHitTime<clips.stab.duration*.8,'the thrust is inside the clip, with recovery after it');
 const notice=fs.readFileSync(path.join(root,'NOTICE.md'),'utf8');
 assert.match(notice,/Kevin Iglesias/);
});

test('death: he ends down on the floor, not through it, and the clip owns his whole body', async()=>{
 const clips=parseGuardActions(json);
 const {scene,loco}=await guard();
 updateGuardLocomotion(loco,1/60,{moving:false,speed:0,state:'patrol'});
 const standing=wy(scene,'Head');
 const act=attachGuardActions(loco,clips);
 playGuardAction(act,'death');
 for(let t=0;t<1.2;t+=1/60){updateGuardLocomotion(loco,1/60,{moving:false,speed:0,state:'patrol'});stepGuardAction(loco,act,1/60);}
 assert.equal(act.kind,'death','stays dead');
 assert.ok(act.weight>.98);
 for(const g of ['idle','walk','run'] as const)assert.ok(loco.actions[g].getEffectiveWeight()<.02,`${g} faded out under him`);
 const head=wy(scene,'Head');
 assert.ok(head<standing*.3,`head down near the floor (${head.toFixed(2)} of ${standing.toFixed(2)})`);
 for(const n of ['Head','Torso','Hips','FistL','FistR','LowerLegL','LowerLegR'])assert.ok(wy(scene,n)>0,`${n} above the floor`);
 playGuardAction(act,'hit');
 assert.equal(act.kind,'death','a corpse does not flinch');
 clearGuardAction(act);
 assert.equal(act.kind,null);
});

test('hit flinch is a short upper-body overlay; the stab wind-up follows the sim', async()=>{
 const clips=parseGuardActions(json);
 const {loco}=await guard();
 const act=attachGuardActions(loco,clips);
 playGuardAction(act,'hit');
 let peak=0,t=0;
 for(;t<2&&act.kind==='hit';t+=1/60){stepGuardAction(loco,act,1/60);peak=Math.max(peak,act.weight);}
 assert.ok(peak>.6,'visible flinch');
 assert.ok(t<=ACTION_TUNING.hit.length+.05,'and over quickly');
 playGuardAction(act,'stab');
 stepGuardAction(loco,act,1/60,.5);
 assert.ok(Math.abs(act.time-.5*clips.stabHitTime)<1e-6,'half-way through the wind-up is half-way to the thrust');
 stepGuardAction(loco,act,1/60,1);
 assert.ok(Math.abs(act.time-clips.stabHitTime)<1e-6,'blow lands on the thrust frame');
 for(let k=0;k<200&&act.kind==='stab';k++)stepGuardAction(loco,act,1/60,null);
 assert.equal(act.kind,null,'recovers and hands back to the gait');
});
