import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {
 MOVE_TECH, STAND_HEIGHT, CROUCH_HEIGHT, SLIDE_HEIGHT, JUMP_SPEED,
 makeTech, stepTech, requestJump, requestSlide, projectOnPlane, slideStep, type TechInput, type TechState,
} from '../src/movementTech';
import {GAIT_SPEED} from '../src/gait';

const DT=1/120;
const UP={x:0,y:1,z:0};
const G=9.81;
/** Camera looking down −Z: forward (0,−1), right (+1,0). */
function input(o:Partial<TechInput>={}):TechInput{
 return {
  wishX:0,wishZ:0,fwd:{x:0,z:-1},right:{x:1,z:0},crouchHeld:false,
  groundSpeed:0,groundVel:{x:0,z:0},normal:UP,stamina:100,drag:1,headroom:()=>true,...o,
 };
}
const run=(o:Partial<TechInput>={})=>input({wishZ:1,groundSpeed:GAIT_SPEED.run,groundVel:{x:0,z:-GAIT_SPEED.run},...o});
const speed=(v:{x:number;y:number;z:number})=>Math.hypot(v.x,v.y,v.z);
/** Run the state machine until it lands (or gives up). */
function untilLanded(st:TechState,inp:TechInput){let t=0,peak=0;while(st.mode==='air'&&t<3){stepTech(st,inp,DT);peak=Math.max(peak,st.air);t+=DT;}return {t,peak};}

test('dash is gone: no dash state or dash tuning left anywhere',()=>{
 const src=fs.readFileSync(path.join(path.dirname(fileURLToPath(import.meta.url)),'../src/movementTech.ts'),'utf8');
 assert.doesNotMatch(src,/dash/i);
 assert.ok(!('dash' in MOVE_TECH));
});

test('Space jumps: take-off at √(2gh), a 0.5 m rise and ~0.64 s in the air under real gravity',()=>{
 assert.ok(Math.abs(JUMP_SPEED-Math.sqrt(2*G*MOVE_TECH.jump.height))<1e-12);
 const st=makeTech();requestJump(st);
 const ev=stepTech(st,input(),DT);
 assert.ok(ev.jumped);assert.equal(st.mode,'air');
 assert.equal(ev.staminaSpent,MOVE_TECH.jump.staminaCost);
 const {t,peak}=untilLanded(st,input());
 assert.ok(Math.abs(peak-MOVE_TECH.jump.height)<.02,`peak ${peak}`);
 assert.ok(Math.abs(t+DT-2*JUMP_SPEED/G)<.03,`air time ${t}`);
 assert.equal(st.mode,'walk');assert.equal(st.air,0);
});

test('one jump per press, none in the air, stamina gate, and a short landing buffer',()=>{
 const st=makeTech();requestJump(st);stepTech(st,input(),DT);
 requestJump(st); // mid-air mash
 let again=0;for(let i=0;i<5;i++)if(stepTech(st,input(),DT).jumped)again++;
 assert.equal(again,0,'no double jump');
 // Press ~60 ms before touchdown: jumps on landing.
 while(st.mode==="air"&&(st.vel.y>0||st.air>JUMP_SPEED*.06-G*.06*.06/2))stepTech(st,input(),DT);
 requestJump(st);
 let rejumped=false;for(let i=0;i<40&&!rejumped;i++)rejumped=stepTech(st,input(),DT).jumped;
 assert.ok(rejumped,'buffered press fires on touchdown');
 const tired=makeTech();requestJump(tired);
 assert.ok(!stepTech(tired,input({stamina:MOVE_TECH.jump.staminaCost-1}),DT).jumped);
 const low=makeTech();requestJump(low);
 assert.ok(!stepTech(low,input({headroom:()=>false}),DT).jumped,'no jumping into a ceiling');
});

test('a running jump keeps its ground speed; air control steers but never adds speed',()=>{
 const st=makeTech();requestJump(st);
 stepTech(st,run(),DT);
 assert.ok(Math.abs(Math.hypot(st.vel.x,st.vel.z)-GAIT_SPEED.run)<1e-9);
 for(let i=0;i<30;i++)stepTech(st,run({wishX:1,wishZ:0}),DT);
 assert.ok(st.vel.x>0,'steered right');
 assert.ok(Math.hypot(st.vel.x,st.vel.z)<=GAIT_SPEED.run+1e-9);
 let hand=null;while(st.mode==='air')hand=stepTech(st,run(),DT).handoff||hand;
 assert.ok(hand&&hand.speed<=GAIT_SPEED.run+1e-9);
});

test('a ceiling stops the rise',()=>{
 const st=makeTech();requestJump(st);
 const low=(crown:number)=>crown<=STAND_HEIGHT+.2+1e-9;
 const {peak}=untilLanded(st,input({headroom:low}));
 assert.ok(peak<=.2+1e-9,`peak ${peak}`);
});

test('C at a run slides at a boosted 7 m/s; from a standstill it is a crouch',()=>{
 const st=makeTech();requestSlide(st);
 const ev=stepTech(st,run({crouchHeld:true}),DT);
 assert.ok(ev.slid);assert.equal(st.mode,'slide');
 assert.ok(Math.abs(speed(st.vel)-(GAIT_SPEED.run+MOVE_TECH.slide.boost))<.02);
 assert.ok(speed(st.vel)>=2*GAIT_SPEED.run,'a slide launches at about twice a run');
 const still=makeTech();requestSlide(still);stepTech(still,input({crouchHeld:true}),DT);
 assert.equal(still.mode,'crouch');
});

test('a slide gets you there faster than running: ahead for ~2 s and several metres',()=>{
 const st=makeTech();requestSlide(st);stepTech(st,run({crouchHeld:true}),DT);
 let t=0,d=0;
 while(speed(st.vel)>GAIT_SPEED.run){stepTech(st,input({crouchHeld:true}),DT);d+=speed(st.vel)*DT;t+=DT;}
 assert.ok(t>1.8,`faster than a run for ${t.toFixed(2)} s`);
 assert.ok(d-GAIT_SPEED.run*t>3,`gains ${(d-GAIT_SPEED.run*t).toFixed(1)} m on a runner`);
});

test('flat slide decays at μk·g and settles into a crouch-walk while held',()=>{
 const st=makeTech();requestSlide(st);stepTech(st,run({crouchHeld:true}),DT);
 const v0=speed(st.vel);
 stepTech(st,input({crouchHeld:true}),.1);
 assert.ok(Math.abs((v0-speed(st.vel))/.1-MOVE_TECH.slide.frictionMu*G)<.02);
 let hand=null;for(let i=0;i<1200&&st.mode==='slide';i++)hand=stepTech(st,input({crouchHeld:true}),DT).handoff||hand;
 assert.equal(st.mode,'crouch');
 assert.ok(hand&&hand.speed<=MOVE_TECH.slide.exitSpeed+1e-9);
});

test('release mid-slide with headroom: stand and run on at a run',()=>{
 const st=makeTech();requestSlide(st);stepTech(st,run({crouchHeld:true}),DT);
 const ev=stepTech(st,input({crouchHeld:false}),DT);
 assert.equal(st.mode,'walk');
 assert.equal(ev.handoff!.speed,GAIT_SPEED.run);
});

test('slide-jump keeps the slide speed; landing with C held slides on without a new boost',()=>{
 const st=makeTech();requestSlide(st);stepTech(st,run({crouchHeld:true}),DT);
 for(let i=0;i<10;i++)stepTech(st,input({crouchHeld:true}),DT);
 const before=speed(st.vel);
 requestJump(st);stepTech(st,input({crouchHeld:true}),DT);
 assert.equal(st.mode,'air');
 assert.ok(Math.abs(Math.hypot(st.vel.x,st.vel.z)-before)<1e-9);
 while(st.mode==='air')stepTech(st,input({crouchHeld:true}),DT);
 assert.equal(st.mode,'slide');
 assert.ok(speed(st.vel)<=before+1e-9,'no speed from hopping');
});

test('slope: in-plane velocity; steep downhill gains g(sinθ − μ cosθ); friction angle holds',()=>{
 const tilt=(deg:number)=>{const a=deg*Math.PI/180;return {x:0,y:Math.cos(a),z:-Math.sin(a)};};
 const n=tilt(20),a=20*Math.PI/180;
 const v=projectOnPlane({x:0,y:0,z:-4},n);
 assert.ok(Math.abs(v.x*n.x+v.y*n.y+v.z*n.z)<1e-9);
 const down=slideStep(v,n,.1);
 assert.ok(Math.abs((speed(down)-speed(v))/.1-G*(Math.sin(a)-MOVE_TECH.slide.frictionMu*Math.cos(a)))<.02);
 const hold=tilt(Math.atan(MOVE_TECH.slide.frictionMu)*180/Math.PI);
 const vh=projectOnPlane({x:0,y:0,z:-4},hold);
 assert.ok(Math.abs(speed(slideStep(vh,hold,.1))-speed(vh))<1e-6);
});

test('slide capsule eases to 50 % from the feet up, no snap',()=>{
 const st=makeTech();requestSlide(st);
 stepTech(st,run({crouchHeld:true}),DT);
 assert.ok(STAND_HEIGHT-st.height<.2,'first frame moves a little, not the whole way');
 let prev=st.height,maxStep=0;
 for(let i=0;i<60;i++){stepTech(st,input({crouchHeld:true}),DT);maxStep=Math.max(maxStep,prev-st.height);prev=st.height;}
 assert.equal(st.height,SLIDE_HEIGHT);
 assert.ok(Math.abs(SLIDE_HEIGHT-STAND_HEIGHT/2)<1e-9);
 assert.ok(maxStep<.12,`largest per-frame drop ${maxStep.toFixed(3)} m`);
 assert.ok(SLIDE_HEIGHT<CROUCH_HEIGHT);
});

test('uncrouch safety: released under a ceiling you stay low until it clears',()=>{
 let ceiling=true;
 const headroom=(crown:number)=>!ceiling||crown<=SLIDE_HEIGHT+.01;
 const st=makeTech();requestSlide(st);
 for(let i=0;i<60;i++)stepTech(st,run({crouchHeld:true,headroom}),DT);
 for(let i=0;i<30;i++)stepTech(st,input({crouchHeld:false,headroom}),DT);
 assert.equal(st.mode,'slide','forced to keep sliding');
 for(let i=0;i<2000&&st.mode==='slide';i++)stepTech(st,input({crouchHeld:false,headroom}),DT);
 assert.equal(st.mode,'crouch');
 for(let i=0;i<30;i++)stepTech(st,input({crouchHeld:false,headroom}),DT);
 assert.ok(st.height<=SLIDE_HEIGHT+.01&&st.blocked);
 ceiling=false;
 for(let i=0;i<120;i++)stepTech(st,input({crouchHeld:false,headroom}),DT);
 assert.equal(st.mode,'walk');assert.equal(st.height,STAND_HEIGHT);
});

test('slide tilt is 2.5° + 15 % and leans toward the slide',()=>{
 assert.ok(Math.abs(MOVE_TECH.slide.tiltDeg-2.5*1.15)<1e-9);
 const full=MOVE_TECH.slide.tiltDeg*Math.PI/180;
 const right=makeTech();requestSlide(right);
 for(let i=0;i<120;i++)stepTech(right,input({crouchHeld:true,groundSpeed:3.4,groundVel:{x:3.4,z:0}}),DT);
 assert.ok(right.roll>full*.95&&right.roll<=full+1e-9);
 const straight=makeTech();requestSlide(straight);
 for(let i=0;i<120;i++)stepTech(straight,run({crouchHeld:true,wishZ:0}),DT);
 assert.ok(straight.roll<-full*.95);
});
