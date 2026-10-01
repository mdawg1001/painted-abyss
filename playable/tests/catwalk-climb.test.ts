import {test} from 'node:test';
import assert from 'node:assert/strict';
import {makeTech,stepTech,requestJump,MOVE_TECH,type TechInput} from '../src/movementTech';
import {CATWALK_DECK_RISE} from '../src/catwalkLayout';

const DT=1/120;
const UP={x:0,y:1,z:0};
function input(o:Partial<TechInput>={}):TechInput{
 return {
  wishX:0,wishZ:0,fwd:{x:0,z:-1},right:{x:1,z:0},crouchHeld:false,
  groundSpeed:0,groundVel:{x:0,z:0},normal:UP,stamina:100,drag:1,headroom:()=>true,
  groundAir:0,...o,
 };
}

test('elevated groundAir: jump peaks above the grate and lands back on it',()=>{
 const st=makeTech();
 st.air=CATWALK_DECK_RISE;
 requestJump(st);
 const ev=stepTech(st,input({groundAir:CATWALK_DECK_RISE}),DT);
 assert.ok(ev.jumped);
 assert.equal(st.mode,'air');
 let peak=st.air,t=0;
 while(st.mode==='air'&&t<3){
  stepTech(st,input({groundAir:CATWALK_DECK_RISE}),DT);
  peak=Math.max(peak,st.air);t+=DT;
 }
 assert.ok(Math.abs(peak-(CATWALK_DECK_RISE+MOVE_TECH.jump.height))<.03,`peak ${peak}`);
 assert.equal(st.mode,'walk');
 assert.ok(Math.abs(st.air-CATWALK_DECK_RISE)<1e-9);
});

test('falling from grate height lands on floor when groundAir drops to 0',()=>{
 const st=makeTech();
 st.mode='air';
 st.air=CATWALK_DECK_RISE;
 st.vel={x:0,y:0,z:0};
 let t=0;
 while(st.mode==='air'&&t<4){
  stepTech(st,input({groundAir:0}),DT);
  t+=DT;
 }
 assert.equal(st.mode,'walk');
 assert.equal(st.air,0);
 assert.ok(t>0.5,'takes real fall time from 3.2 m');
});
