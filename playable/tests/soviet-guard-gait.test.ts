import {test} from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { clone as cloneSkinned } from 'three/examples/jsm/utils/SkeletonUtils.js';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {
 SOVIET_GUARD_GLB,SOVIET_GUARD_HEIGHT,normalizeHumanoid,
 GUARD_WALK_CLIP_SPEED,GUARD_RUN_CLIP_SPEED,guardGaitWeights,
 attachGuardLocomotion,updateGuardLocomotion,
} from '../src/sovietGuardAsset';
import {
 Mission,FLOOR_Y,WALK_EYE_Y,breathFootprint,
 GUARD_CHASE_STANDOFF,GUARD_SPEED,
} from '../src/simulation';
import {GUARD_STEER_RUN,GUARD_STEER_WALK,forwardOf,wrapAngle} from '../src/guardSteering';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');

function installImageStubs(){
 const g=globalThis as unknown as Record<string,unknown>;
 g.self=globalThis;
 class FakeImage{
  width=1;height=1;onload:(()=>void)|null=null;onerror:((e?:unknown)=>void)|null=null;_src='';
  set src(v:string){this._src=v;queueMicrotask(()=>{this.width=4;this.height=4;this.onload?.();});}
  get src(){return this._src;}
 }
 g.Image=FakeImage;g.HTMLImageElement=FakeImage;
 g.document={createElementNS:()=>new FakeImage(),createElement:()=>new FakeImage()};
 g.createImageBitmap=async()=>({width:4,height:4,close(){}});
 if(!g.ProgressEvent)g.ProgressEvent=class extends Event{lengthComputable=false;loaded=0;total=0;};
}
async function loadGltf(){
 installImageStubs();
 const buf=fs.readFileSync(path.join(root,'public',SOVIET_GUARD_GLB.replace(/^\//,'')));
 const ab=buf.buffer.slice(buf.byteOffset,buf.byteOffset+buf.byteLength);
 return new Promise<Awaited<ReturnType<GLTFLoader['parseAsync']>>>((res,rej)=>new GLTFLoader().parse(ab,'',res,rej));
}

/** Sample a clip; per foot return planted-foot slide speed along Z (median) and contact phase centre. */
function gait(scene:THREE.Object3D,clip:THREE.AnimationClip){
 const inst=cloneSkinned(scene);const g=new THREE.Group();g.add(inst);
 const mixer=new THREE.AnimationMixer(inst);mixer.clipAction(clip).play();
 const N=240,dt=clip.duration/N,v=new THREE.Vector3();
 const feet={L:inst.getObjectByName('FootL')!,R:inst.getObjectByName('FootR')!};
 const tr:{L:number[][];R:number[][]}={L:[],R:[]};
 for(let i=0;i<N;i++){mixer.update(i?dt:0);g.updateMatrixWorld(true);for(const k of ['L','R'] as const){feet[k].getWorldPosition(v);tr[k].push([v.x,v.y,v.z]);}}
 const out:Record<string,{slide:number;centre:number}>={};
 for(const k of ['L','R'] as const){
  const F=tr[k],minY=Math.min(...F.map(p=>p[1]));
  const contact=F.map(p=>p[1]<minY+.035);
  const dz:number[]=[];let sx=0,sy=0,n=0;
  for(let i=0;i<N;i++){
   if(contact[i]&&contact[(i+N-1)%N]&&i>0)dz.push((F[i][2]-F[i-1][2])/dt);
   if(contact[i]){const a=i/N*Math.PI*2;sx+=Math.cos(a);sy+=Math.sin(a);n++;}
  }
  dz.sort((a,b)=>a-b);
  const centre=((Math.atan2(sy/n,sx/n)/(Math.PI*2))+1)%1;
  out[k]={slide:dz[Math.floor(dz.length/2)],centre};
 }
 return out;
}

test('guard rig faces +Z and clip stride speeds match the tuned constants',async()=>{
 const gltf=await loadGltf();
 normalizeHumanoid(gltf.scene,SOVIET_GUARD_HEIGHT);
 const by=new Map(gltf.animations.map(a=>[a.name.toLowerCase(),a]));
 const walk=gait(gltf.scene,by.get('walk')!),run=gait(gltf.scene,by.get('run')!);
 // A planted foot slides backwards under a forward-walking body: negative Z means the rig faces +Z.
 assert.ok(walk.L.slide<0&&walk.R.slide<0,'walk planted feet slide toward −Z (rig forward is +Z)');
 assert.ok(run.L.slide<0,'run planted foot slides toward −Z');
 const walkSpeed=(Math.abs(walk.L.slide)+Math.abs(walk.R.slide))/2;
 assert.ok(Math.abs(walkSpeed-GUARD_WALK_CLIP_SPEED)/GUARD_WALK_CLIP_SPEED<.15,`walk clip ${walkSpeed.toFixed(2)} m/s vs ${GUARD_WALK_CLIP_SPEED}`);
 // Left foot is the cleaner contact in the run clip; use it as the reference.
 assert.ok(Math.abs(Math.abs(run.L.slide)-GUARD_RUN_CLIP_SPEED)/GUARD_RUN_CLIP_SPEED<.15,`run clip ${Math.abs(run.L.slide).toFixed(2)} m/s vs ${GUARD_RUN_CLIP_SPEED}`);
 // Phase-synced blending needs the same foot planted at the same normalised time.
 const d=(a:number,b:number)=>Math.abs(((a-b+1.5)%1)-.5);
 assert.ok(d(walk.L.centre,run.L.centre)<.1,`left contact walk ${walk.L.centre.toFixed(2)} / run ${run.L.centre.toFixed(2)}`);
 assert.ok(d(walk.R.centre,run.R.centre)<.1,`right contact walk ${walk.R.centre.toFixed(2)} / run ${run.R.centre.toFixed(2)}`);
});

test('gait blend space: idle at rest, walk at patrol pace, run at chase pace, weights sum to 1',()=>{
 const sum=(w:Record<string,number>)=>w.idle+w.walk+w.run;
 const rest=guardGaitWeights(0);assert.equal(rest.idle,1);
 const walk=guardGaitWeights(GUARD_SPEED.patrol);assert.ok(walk.walk>.99,`walk ${JSON.stringify(walk)}`);
 const run=guardGaitWeights(GUARD_SPEED.chase);assert.ok(run.run>.99,`run ${JSON.stringify(run)}`);
 for(let s=0;s<=3;s+=.1)assert.ok(Math.abs(sum(guardGaitWeights(s))-1)<1e-9);
 const pivot=guardGaitWeights(0,3);assert.ok(pivot.walk>0&&pivot.walk<.5,'pivot shuffles feet without a full stride');
});

test('stride phase advances at speed ÷ stride length (no foot skating)',async()=>{
 const gltf=await loadGltf();
 normalizeHumanoid(gltf.scene,SOVIET_GUARD_HEIGHT);
 const by=new Map(gltf.animations.map(a=>[a.name.toLowerCase(),a]));
 const inst=cloneSkinned(gltf.scene);
 const loco=attachGuardLocomotion(inst,{idle:by.get('idle')!,walk:by.get('walk')!,run:by.get('run')!})!;
 const walkClip=by.get('walk')!;
 for(let i=0;i<60;i++)updateGuardLocomotion(loco,1/60,{moving:true,speed:GUARD_WALK_CLIP_SPEED,state:'patrol'});
 const p0=loco.phase;
 for(let i=0;i<60;i++)updateGuardLocomotion(loco,1/60,{moving:true,speed:GUARD_WALK_CLIP_SPEED,state:'patrol'});
 const cycles=((loco.phase-p0)+1)%1;
 // At native clip speed one second should advance exactly 1/duration cycles.
 assert.ok(Math.abs(cycles-(1/walkClip.duration)%1)<.02,`cycles/s ${cycles}`);
});

type Sample={x:number;z:number;heading:number;speed:number};
function track(m:Mission,steps:number,dt:number,each?:(m:Mission)=>void){
 const out:Sample[]=[];
 for(let i=0;i<steps;i++){each?.(m);m.update(dt,false);const g=m.guard;out.push({x:g.position.x,z:g.position.z,heading:g.heading,speed:g.speed});}
 return out;
}
/** Assert every displacement goes the way the body faces: no backwards, no sideways slide. */
function assertFacingTravel(s:Sample[],label:string){
 let moves=0;
 for(let i=1;i<s.length;i++){
  const dx=s[i].x-s[i-1].x,dz=s[i].z-s[i-1].z,len=Math.hypot(dx,dz);
  if(len<1e-5)continue;moves++;
  const f=forwardOf(s[i].heading);
  const along=(dx*f.x+dz*f.z)/len;
  assert.ok(along>.995,`${label}: step ${i} travels ${Math.acos(Math.min(1,along))*57.3}° off facing`);
 }
 assert.ok(moves>10,`${label}: guard actually moved`);
}
function assertTurnRate(s:Sample[],dt:number,max:number,label:string){
 for(let i=1;i<s.length;i++){
  const rate=Math.abs(wrapAngle(s[i].heading-s[i-1].heading))/dt;
  assert.ok(rate<=max+1e-6,`${label}: yaw rate ${rate.toFixed(2)} rad/s over cap ${max}`);
 }
}
function dryMission(){
 const m=new Mission(true);
 m.breathWaterY=FLOOR_Y-.1;
 return m;
}

test('chase: squares up, closes in one straight line, stops at arm\'s length without circling',()=>{
 const m=dryMission();
 const fp=breathFootprint();
 m.guard.position={x:fp.minX+1.2,y:WALK_EYE_Y,z:fp.cz-6};
 m.guard.heading=Math.PI; // facing away: he must pivot first, not moonwalk
 m.position={x:fp.maxX-1.5,y:WALK_EYE_Y,z:fp.cz+5};
 m.guard.state='chase';m.guard.lastState='chase';
 m.guard.bottle=true;m.guard.air=999;
 m.guard.lastKnown={...m.position};
 const start={...m.guard.position};
 const dt=1/60;
 const s=track(m,60*8,dt,mm=>{mm.guard.meleeCool=99;mm.guard.shootCool=99;mm.health=100;mm.guard.state='chase';mm.guard.lastKnown={...mm.position};});
 assertFacingTravel(s,'chase');
 assertTurnRate(s,dt,GUARD_STEER_RUN.turnRateStanding,'chase');
 // No translation until he has turned most of the way round.
 const firstMove=s.findIndex((p,i)=>i>0&&Math.hypot(p.x-start.x,p.z-start.z)>1e-4);
 const toward=Math.atan2(m.position.x-start.x,m.position.z-start.z);
 assert.ok(Math.abs(wrapAngle(s[firstMove].heading-toward))<GUARD_STEER_RUN.pivotAngle+.05,'pivots before stepping off');
 // Straight line: once under way, lateral deviation from the start→target line stays tiny.
 const ux=(m.position.x-start.x),uz=(m.position.z-start.z),ul=Math.hypot(ux,uz);
 let maxDev=0;
 for(const p of s){const dev=Math.abs(((p.x-start.x)*uz-(p.z-start.z)*ux)/ul);maxDev=Math.max(maxDev,dev);}
 assert.ok(maxDev<.05,`straight approach (max lateral ${maxDev.toFixed(3)} m)`);
 // Ends at the standoff and holds still (no orbit).
 const end=s[s.length-1];
 const d=Math.hypot(end.x-m.position.x,end.z-m.position.z);
 assert.ok(Math.abs(d-GUARD_CHASE_STANDOFF)<.05,`standoff ${d.toFixed(2)} m`);
 const tail=s.slice(-120);
 const drift=Math.max(...tail.map(p=>Math.hypot(p.x-end.x,p.z-end.z)));
 assert.ok(drift<1e-6,'holds position at arm\'s length');
 assert.ok(Math.max(...s.map(p=>p.speed))>GUARD_SPEED.chase-.05,'reaches running pace');
});

test('alert halts and turns to the noise; search walks there and scans without moving',()=>{
 const m=dryMission();
 const axis=breathFootprint().cx;
 m.guard.position={x:axis,y:WALK_EYE_Y,z:breathFootprint().cz};
 m.guard.heading=0;m.guard.speed=GUARD_SPEED.patrol;
 m.position={x:500,y:WALK_EYE_Y,z:500}; // outside the building: never seen
 m.guard.state='alert';m.guard.timer=0;
 m.guard.lastKnown={x:axis+2,y:WALK_EYE_Y,z:m.guard.position.z-4};
 const dt=1/60;
 const a=track(m,90,dt,mm=>{mm.guard.state='alert';mm.guard.timer=0;});
 assertTurnRate(a,dt,GUARD_STEER_WALK.turnRateStanding,'alert');
 const g=m.guard;const want=Math.atan2(g.lastKnown.x-g.position.x,g.lastKnown.z-g.position.z);
 assert.ok(Math.abs(wrapAngle(a[a.length-1].heading-want))<.02,'faces the noise');
 assert.equal(a[a.length-1].speed,0,'stopped');
 m.guard.state='search';m.guard.timer=0;
 const s=track(m,60*6,dt,mm=>{mm.guard.state='search';mm.guard.timer=0;});
 assertFacingTravel(s,'search');
 assert.ok(m.guard.arrived,'reached the last sighting');
 const tail=s.slice(-60);
 assert.ok(Math.max(...tail.map(p=>Math.hypot(p.x-tail[0].x,p.z-tail[0].z)))<1e-9,'scans on the spot');
 assert.ok(Math.max(...tail.map(p=>p.heading))-Math.min(...tail.map(p=>p.heading))>.05,'looks around');
});
