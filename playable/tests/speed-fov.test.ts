import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {SpeedFov,SPEED_FOV} from '../src/speedFov';

const V=(s:number)=>({x:s,y:0,z:0});
const run=(f:SpeedFov,speed:number,seconds:number,hz=120)=>{let min=Infinity,max=-Infinity;for(let i=0,n=Math.round(seconds*hz);i<n;i++){f.update(V(speed),1/hz);min=Math.min(min,f.fov);max=Math.max(max,f.fov);}return {min,max};};

test('target FOV maps normalised speed linearly from 60° idle to 110° at top speed, clamped',()=>{
 const f=new SpeedFov();
 assert.equal(SPEED_FOV.MIN_FOV,60);assert.equal(SPEED_FOV.MAX_FOV,110);
 assert.equal(f.targetFor(0),60);
 assert.equal(f.targetFor(SPEED_FOV.V_MAX),110);
 assert.equal(f.targetFor(SPEED_FOV.V_MAX/2),85);
 assert.equal(f.targetFor(SPEED_FOV.V_MAX*3),110,'clamped above');
 assert.equal(f.targetFor(-4),60,'clamped below');
 assert.equal(f.fov,60,'starts at idle');
});

test('speeding up widens the lens and settles on the target',()=>{
 const f=new SpeedFov();
 run(f,SPEED_FOV.V_MAX,2);
 assert.ok(Math.abs(f.fov-110)<.05,`fov ${f.fov}`);
 assert.ok(Math.abs(f.fovVel)<.5);
});

test('instant stop from top speed: the spring overshoots below idle, then settles on 60°',()=>{
 const f=new SpeedFov();
 run(f,SPEED_FOV.V_MAX,2);
 const {min}=run(f,0,.6);
 assert.ok(min<SPEED_FOV.MIN_FOV-5,`snap-back dips to ${min.toFixed(1)}°`);
 assert.ok(min>=SPEED_FOV.FLOOR_FOV);
 run(f,0,1.5);
 assert.ok(Math.abs(f.fov-60)<.05,`settled at ${f.fov}`);
});

test('the snap is quick: most of the 50° swing happens in the first ~0.15 s',()=>{
 const f=new SpeedFov();
 run(f,SPEED_FOV.V_MAX,2);
 run(f,0,.15);
 assert.ok(f.fov<75,`after 0.15 s fov ${f.fov.toFixed(1)}`);
});

test('frame-rate independent: 30 Hz, 60 Hz and 240 Hz trace the same curve',()=>{
 const at=(hz:number)=>{const f=new SpeedFov();run(f,SPEED_FOV.V_MAX,1,hz);run(f,0,.2,hz);return f.fov;};
 const a=at(30),b=at(60),c=at(240);
 assert.ok(Math.abs(a-c)<.5&&Math.abs(b-c)<.5,`${a} ${b} ${c}`);
 // One giant hitch frame cannot explode the spring.
 const f=new SpeedFov();f.update(V(SPEED_FOV.V_MAX),5);
 assert.ok(Number.isFinite(f.fov)&&Math.abs(f.fov-110)<1);
});

test('stiffness and damping are live tuning knobs',()=>{
 const soft=new SpeedFov({...SPEED_FOV,SPRING_STIFFNESS:40});
 const hard=new SpeedFov();
 run(soft,SPEED_FOV.V_MAX,.1);run(hard,SPEED_FOV.V_MAX,.1);
 assert.ok(hard.fov>soft.fov);
 const heavy=new SpeedFov({...SPEED_FOV,SPRING_DAMPING:2*Math.sqrt(SPEED_FOV.SPRING_STIFFNESS)});
 run(heavy,SPEED_FOV.V_MAX,2);
 const {min}=run(heavy,0,1);
 assert.ok(min>SPEED_FOV.MIN_FOV-.01,'critically damped: no overshoot');
});

test('peripheral warp follows the lens: none idle, full at top speed',()=>{
 const f=new SpeedFov();
 assert.equal(f.warp(),0);
 run(f,SPEED_FOV.V_MAX,2);
 assert.ok(Math.abs(f.warp()-SPEED_FOV.WARP_MAX)<1e-3);
 run(f,0,.3);
 assert.ok(f.warp()>=0);
});

test('update allocates nothing: no object or array literals inside it',()=>{
 const src=fs.readFileSync(path.join(path.dirname(fileURLToPath(import.meta.url)),'../src/speedFov.ts'),'utf8');
 const body=src.slice(src.indexOf(' update('),src.indexOf(' /** Peripheral warp'));
 assert.doesNotMatch(body,/new |\{\s*[a-z]+\s*:|\[\s*[\d-]/);
});
