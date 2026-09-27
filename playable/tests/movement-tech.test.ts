import {test} from 'node:test';
import assert from 'node:assert/strict';
import {
 MOVE_TECH, STAND_HEIGHT, CROUCH_HEIGHT, SLIDE_HEIGHT,
 makeTech, stepTech, requestDash, requestSlide, projectOnPlane, slideStep, eyeDrop, type TechInput,
} from '../src/movementTech';
import {GAIT_SPEED} from '../src/gait';

const DT=1/120;
const UP={x:0,y:1,z:0};
/** Camera looking down −Z: forward (0,−1), right (+1,0). */
function input(o:Partial<TechInput>={}):TechInput{
 return {
  wishX:0,wishZ:0,fwd:{x:0,z:-1},right:{x:1,z:0},crouchHeld:false,
  groundSpeed:0,groundVel:{x:0,z:0},normal:UP,stamina:100,drag:1,headroom:()=>true,...o,
 };
}
const run=(o:Partial<TechInput>={})=>input({wishZ:1,groundSpeed:GAIT_SPEED.run,groundVel:{x:0,z:-GAIT_SPEED.run},...o});
const speed=(v:{x:number;y:number;z:number})=>Math.hypot(v.x,v.y,v.z);

test('dash overrides velocity along the camera-relative wish; no input dashes straight ahead',()=>{
 const st=makeTech();
 // Running forward, dash right: the old forward momentum is gone, not added to.
 requestDash(st);
 const ev=stepTech(st,run({wishX:1,wishZ:0}),DT);
 assert.ok(ev.dashed);
 assert.equal(st.mode,'dash');
 assert.ok(Math.abs(st.vel.x-MOVE_TECH.dash.speed)<1e-9);
 assert.ok(Math.abs(st.vel.z)<1e-9);
 const idle=makeTech();requestDash(idle);stepTech(idle,input(),DT);
 assert.ok(Math.abs(idle.vel.z+MOVE_TECH.dash.speed)<1e-9,'no keys: dash along the gaze');
 // Diagonal is still exactly dash speed (normalised, no √2 bonus).
 const diag=makeTech();requestDash(diag);stepTech(diag,input({wishX:1,wishZ:1}),DT);
 assert.ok(Math.abs(speed(diag.vel)-MOVE_TECH.dash.speed)<1e-9);
});

test('dash suspends gravity: velocity is flat and constant for the whole window',()=>{
 const st=makeTech();requestDash(st);
 stepTech(st,input({wishZ:1}),DT);
 st.vel.y=-3; // anything vertical is cancelled while dashing
 const v0={...st.vel};
 let t=DT;
 while(st.mode==='dash'){stepTech(st,input({wishZ:1}),DT);t+=DT;if(st.mode==='dash'){assert.equal(st.vel.y,0);assert.equal(st.vel.x,v0.x);assert.equal(st.vel.z,v0.z);}}
 assert.ok(Math.abs(t-MOVE_TECH.dash.duration)<=DT+1e-9,`dash lasted ${t}`);
});

test('strict cooldown, one dash per press, no dash while dashing, stamina gate',()=>{
 const st=makeTech();
 requestDash(st);stepTech(st,input(),DT);
 // Mashing during the dash does nothing.
 requestDash(st);stepTech(st,input(),DT);
 assert.equal(st.mode,'dash');
 while(st.mode==='dash')stepTech(st,input(),DT);
 // Buffered press expires before the 0.5 s cooldown ends: no surprise dash.
 let fired=0;
 for(let t=0;t<MOVE_TECH.dash.cooldown-.02;t+=DT){if(stepTech(st,input(),DT).dashed)fired++;}
 assert.equal(fired,0);
 requestDash(st);
 let at=0;for(let t=0;t<.1&&!at;t+=DT)if(stepTech(st,input(),DT).dashed)at=1;
 assert.equal(at,1,'press just before the cooldown ends fires on time (buffer)');
 const tired=makeTech();requestDash(tired);
 assert.ok(!stepTech(tired,input({stamina:MOVE_TECH.dash.staminaCost-1}),DT).dashed);
 const ok=makeTech();requestDash(ok);
 assert.equal(stepTech(ok,input(),DT).staminaSpent,MOVE_TECH.dash.staminaCost);
});

test('dash hands speed and heading back to the gait, capped at a run',()=>{
 const st=makeTech();requestDash(st);
 let hand=null;
 for(let i=0;i<40&&!hand;i++)hand=stepTech(st,input({wishX:-1}),DT).handoff;
 assert.ok(hand);
 assert.equal(hand!.speed,GAIT_SPEED.run);
 assert.equal(hand!.x,-1);
 assert.equal(st.mode,'walk');
});

test('C at a run slides with a boost; from a standstill it is a crouch',()=>{
 const st=makeTech();requestSlide(st);
 const ev=stepTech(st,run({crouchHeld:true}),DT);
 assert.ok(ev.slid);assert.equal(st.mode,'slide');
 assert.ok(speed(st.vel)>GAIT_SPEED.run+MOVE_TECH.slide.boost-.1);
 const still=makeTech();requestSlide(still);stepTech(still,input({crouchHeld:true}),DT);
 assert.equal(still.mode,'crouch');
 const walk=makeTech();requestSlide(walk);stepTech(walk,input({crouchHeld:true,wishZ:1,groundSpeed:GAIT_SPEED.walk,groundVel:{x:0,z:-GAIT_SPEED.walk}}),DT);
 assert.equal(walk.mode,'crouch','a walk is below the slide threshold');
});

test('slide capsule drops to 50 % from the bottom up (eye drop = half the body)',()=>{
 const st=makeTech();requestSlide(st);
 for(let i=0;i<30;i++)stepTech(st,run({crouchHeld:true}),DT);
 assert.equal(st.height,SLIDE_HEIGHT);
 assert.ok(Math.abs(SLIDE_HEIGHT-STAND_HEIGHT/2)<1e-9);
 assert.ok(Math.abs(eyeDrop(st)-STAND_HEIGHT/2)<1e-9);
 assert.ok(SLIDE_HEIGHT<CROUCH_HEIGHT);
});

test('flat slide decays at μk·g and settles into a crouch-walk while held',()=>{
 const st=makeTech();requestSlide(st);
 stepTech(st,run({crouchHeld:true}),DT);
 const v0=speed(st.vel);
 stepTech(st,run({crouchHeld:true,wishZ:0}),.1);
 const decel=(v0-speed(st.vel))/.1;
 assert.ok(Math.abs(decel-MOVE_TECH.slide.frictionMu*9.81)<.05,`decel ${decel}`);
 let t=.1,hand=null; // the 0.1 s step above counts
 while(st.mode==='slide'&&t<5){hand=stepTech(st,input({crouchHeld:true}),DT).handoff||hand;t+=DT;}
 assert.equal(st.mode,'crouch');
 assert.ok(hand&&hand.speed<=MOVE_TECH.slide.exitSpeed+1e-9);
 // ≈ (v0 − exit)/(μg) seconds on the flat.
 const expect=(v0-MOVE_TECH.slide.exitSpeed)/(MOVE_TECH.slide.frictionMu*9.81);
 assert.ok(Math.abs(t-expect)<.05,`slide ${t.toFixed(2)} s vs ${expect.toFixed(2)} s`);
});

test('slope: slide velocity stays in the ground plane; steep downhill gains, uphill loses faster',()=>{
 const tilt=(deg:number)=>{const a=deg*Math.PI/180;return {x:0,y:Math.cos(a),z:-Math.sin(a)};}; // falls away toward −Z
 const n=tilt(30);
 const v=projectOnPlane({x:0,y:0,z:-4},n);
 assert.ok(Math.abs(v.x*n.x+v.y*n.y+v.z*n.z)<1e-9);
 // 30° > atan(0.34) ≈ 18.8°: downhill accelerates by g(sinθ − μ cosθ).
 const down=slideStep(v,n,.1);
 const gain=(speed(down)-speed(v))/.1;
 const a=30*Math.PI/180;
 assert.ok(Math.abs(gain-9.81*(Math.sin(a)-MOVE_TECH.slide.frictionMu*Math.cos(a)))<.02,`gain ${gain}`);
 assert.ok(Math.abs(down.x*n.x+down.y*n.y+down.z*n.z)<1e-9,'still in plane');
 // At the friction angle the slide holds its speed.
 const hold=tilt(Math.atan(MOVE_TECH.slide.frictionMu)*180/Math.PI);
 const vh=projectOnPlane({x:0,y:0,z:-4},hold);
 assert.ok(Math.abs(speed(slideStep(vh,hold,.1))-speed(vh))<1e-6);
 // Uphill: friction and gravity both brake.
 const upV=projectOnPlane({x:0,y:0,z:4},n);
 assert.ok(speed(slideStep(upV,n,.1))<speed(v)-9.81*MOVE_TECH.slide.frictionMu*Math.cos(a)*.1);
 // Launching a slide on the slope keeps the full launch speed along the plane.
 const st=makeTech();requestSlide(st);
 stepTech(st,run({crouchHeld:true,normal:n}),1e-6);
 assert.ok(Math.abs(speed(st.vel)-(GAIT_SPEED.run+MOVE_TECH.slide.boost))<1e-3);
});

test('uncrouch safety: released under a ceiling you stay low until it clears',()=>{
 let ceiling=true;
 const headroom=(h:number)=>!ceiling||h<=SLIDE_HEIGHT+1e-9;
 const st=makeTech();requestSlide(st);
 for(let i=0;i<10;i++)stepTech(st,run({crouchHeld:true,headroom}),DT);
 // Let go of C mid-slide under a low ceiling.
 for(let i=0;i<30;i++)stepTech(st,input({crouchHeld:false,headroom}),DT);
 assert.equal(st.mode,'slide','forced to keep sliding');
 assert.equal(st.height,SLIDE_HEIGHT);
 // Momentum runs out while still under it: crouch, but the capsule cannot rise either.
 for(let i=0;i<600;i++)stepTech(st,input({crouchHeld:false,headroom}),DT);
 assert.equal(st.mode,'crouch');
 assert.equal(st.height,SLIDE_HEIGHT);
 assert.ok(st.blocked);
 // Clear of the obstacle: stand up.
 ceiling=false;
 for(let i=0;i<120;i++)stepTech(st,input({crouchHeld:false,headroom}),DT);
 assert.equal(st.mode,'walk');
 assert.equal(st.height,STAND_HEIGHT);
});

test('released with headroom mid-slide: stand and run on at the slide speed (capped)',()=>{
 const st=makeTech();requestSlide(st);
 stepTech(st,run({crouchHeld:true}),DT);
 const ev=stepTech(st,input({crouchHeld:false}),DT);
 assert.equal(st.mode,'walk');
 assert.ok(ev.handoff&&ev.handoff.speed===GAIT_SPEED.run);
});

test('camera leans toward the slide: right slide leans right, straight slide leans left',()=>{
 const right=makeTech();requestSlide(right);
 for(let i=0;i<60;i++)stepTech(right,input({crouchHeld:true,groundSpeed:3.4,groundVel:{x:3.4,z:0}}),DT);
 assert.ok(right.roll>0&&right.roll<=MOVE_TECH.slide.tiltDeg*Math.PI/180+1e-9);
 const straight=makeTech();requestSlide(straight);
 for(let i=0;i<60;i++)stepTech(straight,run({crouchHeld:true,wishZ:0}),DT);
 assert.ok(straight.roll<0);
 assert.ok(Math.abs(straight.roll)>2*Math.PI/180,'reaches ~2.5°');
});

test('dash out of a slide cancels it; holding C through a dash lands in a slide',()=>{
 const st=makeTech();requestSlide(st);stepTech(st,run({crouchHeld:true}),DT);
 requestDash(st);stepTech(st,run({crouchHeld:true,wishX:1,wishZ:0}),DT);
 assert.equal(st.mode,'dash');
 while(st.mode==='dash')stepTech(st,input({crouchHeld:true,wishX:1}),DT);
 assert.equal(st.mode,'slide');
 assert.ok(st.vel.x>MOVE_TECH.slide.minSpeed);
});

test('dash into a slide carries at most a boosted run',()=>{
 const st=makeTech();requestDash(st);
 while(stepTech(st,input({crouchHeld:true,wishZ:1}),DT).slid===false&&st.mode==='dash');
 assert.equal(st.mode,'slide');
 assert.ok(speed(st.vel)<=GAIT_SPEED.run+MOVE_TECH.slide.boost+1e-9);
});
