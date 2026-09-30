import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {SpeedFov,SPEED_FOV} from '../src/speedFov';

const V=(s:number)=>({x:s,y:0,z:0});
const run=(f:SpeedFov,speed:number,seconds:number,hz=120)=>{let min=Infinity,max=-Infinity;for(let i=0,n=Math.round(seconds*hz);i<n;i++){f.update(V(speed),1/hz);min=Math.min(min,f.fov);max=Math.max(max,f.fov);}return {min,max};};

test('target: walking leaves the lens alone; above a walk it widens linearly to +18° at a slide',()=>{
 const f=new SpeedFov(),C=SPEED_FOV;
 assert.equal(C.MIN_FOV,64);assert.equal(C.MAX_FOV,82);
 assert.equal(f.targetFor(0),64);
 assert.equal(f.targetFor(1.55),64,'a walk is below the dead zone');
 assert.equal(f.targetFor(C.V_MAX),82);
 assert.ok(Math.abs(f.targetFor(3.4)-(64+18*(3.4-C.V_MIN)/(C.V_MAX-C.V_MIN)))<1e-9);
 assert.ok(f.targetFor(3.4)<71,'a run adds only about 6°');
 assert.equal(f.targetFor(C.V_MAX*3),82,'clamped above');
 assert.equal(f.fov,64,'starts at idle');
});

test('speeding up widens the lens and settles on the target',()=>{
 const f=new SpeedFov();
 run(f,SPEED_FOV.V_MAX,3);
 assert.ok(Math.abs(f.fov-82)<.05,`fov ${f.fov}`);
 assert.ok(Math.abs(f.fovVel)<.5);
});

test('instant stop from top speed still snaps: fast, one small overshoot, then 64°',()=>{
 const f=new SpeedFov();
 run(f,SPEED_FOV.V_MAX,3);
 const {min}=run(f,0,.6);
 assert.ok(min<SPEED_FOV.MIN_FOV-1,`dips to ${min.toFixed(1)}°`);
 assert.ok(min>SPEED_FOV.MIN_FOV-4,`but only a little: ${min.toFixed(1)}°`);
 run(f,0,1);
 assert.ok(Math.abs(f.fov-64)<.05,`settled at ${f.fov}`);
});

test('the snap is quick: half the swing is gone within ~0.15 s of stopping',()=>{
 const f=new SpeedFov();
 run(f,SPEED_FOV.V_MAX,3);
 run(f,0,.15);
 assert.ok(f.fov<73,`after 0.15 s fov ${f.fov.toFixed(1)}`);
});

test('no LSD: the stride speed ripple and vertical bobbing barely move the lens',()=>{
 const f=new SpeedFov();run(f,3.4,3);
 let lo=Infinity,hi=-Infinity;
 for(let i=0;i<240;i++){f.update({x:3.4*(1+.05*Math.cos(2*Math.PI*2.8*i/120)),y:0,z:0},1/120);lo=Math.min(lo,f.fov);hi=Math.max(hi,f.fov);}
 assert.ok(hi-lo<.6,`ripple ${(hi-lo).toFixed(2)}°`);
 const bob=new SpeedFov();run(bob,0,1);
 for(let i=0;i<240;i++)bob.update({x:0,y:3*Math.sin(i/10),z:0},1/120);
 assert.equal(bob.fov,64,'up/down motion is not speed');
});

test('frame-rate independent: 30 Hz, 60 Hz and 240 Hz trace the same curve',()=>{
 const at=(hz:number)=>{const f=new SpeedFov();run(f,SPEED_FOV.V_MAX,2,hz);run(f,0,.2,hz);return f.fov;};
 const a=at(30),b=at(60),c=at(240);
 assert.ok(Math.abs(a-c)<.5&&Math.abs(b-c)<.5,`${a} ${b} ${c}`);
 // One giant hitch frame cannot explode the spring.
 const f=new SpeedFov();f.update(V(SPEED_FOV.V_MAX),5);
 assert.ok(Number.isFinite(f.fov)&&Math.abs(f.fov-82)<1);
});

test('stiffness and damping are live tuning knobs',()=>{
 const soft=new SpeedFov({...SPEED_FOV,SPRING_STIFFNESS:40});
 const hard=new SpeedFov();
 run(soft,SPEED_FOV.V_MAX,.3);run(hard,SPEED_FOV.V_MAX,.3);
 assert.ok(hard.fov>soft.fov);
 const heavy=new SpeedFov({...SPEED_FOV,SPRING_DAMPING:2*Math.sqrt(SPEED_FOV.SPRING_STIFFNESS)});
 run(heavy,SPEED_FOV.V_MAX,3);
 const {min}=run(heavy,0,1);
 assert.ok(min>SPEED_FOV.MIN_FOV-.01,'critically damped: no overshoot');
});

test('peripheral warp follows the lens: none idle, full at top speed',()=>{
 const f=new SpeedFov();
 assert.equal(f.warp(),0);
 run(f,SPEED_FOV.V_MAX,3);
 assert.ok(Math.abs(f.warp()-SPEED_FOV.WARP_MAX)<1e-3);
 assert.ok(SPEED_FOV.WARP_MAX<=.03,'a hint of stretch, not a fisheye');
 run(f,0,.3);
 assert.ok(f.warp()>=0);
});

test('update allocates nothing: no object or array literals inside it',()=>{
 const src=fs.readFileSync(path.join(path.dirname(fileURLToPath(import.meta.url)),'../src/speedFov.ts'),'utf8');
 const body=src.slice(src.indexOf(' update('),src.indexOf(' /** Peripheral warp'));
 assert.doesNotMatch(body,/new |\{\s*[a-z]+\s*:|\[\s*[\d-]/);
});
