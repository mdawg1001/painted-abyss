import {test} from 'node:test';
import assert from 'node:assert/strict';
import {
 Mission,isolateGuards,FLOOR_Y,WALK_EYE_Y,breathFootprint,distance,visible,
 GUARD_SQUAD_RADIUS,GUARD_TARGETED_DWELL,GUARD_TEAM_MEMORY,GUARD_FLANK_DISTANCE,
 type Guard,
} from '../src/simulation';
import {SURVIVAL} from '../src/survivalConfig';

const CX=breathFootprint().cx;
const PLAYER={x:CX,y:WALK_EYE_Y,z:24};

/** Put a squad member into play: armed, on patrol, facing away from you. */
function place(m:Mission,g:Guard,x:number,z:number){
 m.activateGuard(g,{x,z},Math.PI,'assault');
 g.state='patrol';g.pause=99;g.pauseTotal=99;
}
function squad(){
 const m=new Mission(true);isolateGuards(m,-1);m.breathWaterY=FLOOR_Y-.1;m.rand=()=>.99; // their rounds miss
 m.inventory=['gun','knife',null,null,null];m.selected=0;
 const [a,b,c]=m.guards;
 place(m,a,CX,16);place(m,b,CX,10.5);
 m.position={...PLAYER};
 return {m,a,b,c};
}
const chest=(m:Mission,g:Guard)=>({x:g.position.x-m.position.x,y:FLOOR_Y+1-m.position.y,z:g.position.z-m.position.z});

test('shoot guard A: guard B in range goes on alert with A, shows his notice and opens fire after reacting',()=>{
 const {m,a,b,c}=squad();
 assert.ok(distance(a.position,b.position)<GUARD_SQUAD_RADIUS);
 assert.ok(visible(b.position,m.position),'B has a line down the corridor');
 assert.equal(m.firePistol(m.position,chest(m,a)),'fired');
 assert.ok(a.hp<a.maxHp,'A is hit');
 for(const g of [a,b]){
  assert.equal(g.state,'chase','engaging, not wandering over to look');
  assert.deepEqual(g.lastKnown,m.position,'knows where the shot came from');
  assert.ok(g.team>m.elapsed,'hunting as a team');
 }
 assert.equal(b.noticeAt,m.elapsed,'B shows his detection notice');
 assert.equal(c.active,false,'C is not in play and never hears it');
 assert.equal(m.squadAlertAt,m.elapsed);
 let t=0;const before=b.shots;
 while(b.shots===before&&t<3){m.update(1/60,false);t+=1/60;}
 const r=SURVIVAL.roles.assault.reaction;
 assert.ok(b.shots>before,'B fires');
 assert.ok(t>=r[0]-.05,`not before a human reaction (${t.toFixed(2)} s)`);
 assert.ok(t<1.6,`but quickly (${t.toFixed(2)} s)`);
});

test('holding your sights on A for a moment sets the squad off; a flick across him does not',()=>{
 const {m,a,b}=squad();
 const dt=1/60;
 for(let t=0;t<GUARD_TARGETED_DWELL*.6;t+=dt)m.aimAt(m.position,chest(m,a),dt);
 m.aimAt(m.position,{x:1,y:0,z:0},dt); // sights come off him
 assert.equal(b.state,'patrol','a passing crosshair is not a threat');
 for(let t=0;t<GUARD_TARGETED_DWELL+.05;t+=dt)m.aimAt(m.position,chest(m,a),dt);
 assert.equal(a.state,'chase','A sees the gun on him');
 assert.equal(b.state,'chase','and B comes in with him');
});

test('the squad shares what one of them sees; out of everyone\'s sight they search, not track you',()=>{
 const {m,a,b}=squad();
 m.firePistol(m.position,chest(m,a));
 // B loses his line; A still sees you and calls your new position.
 b.position={x:500,y:WALK_EYE_Y,z:500};b.sees=false;b.speed=0; // out of the building: no line on you
 const moved={x:CX,y:WALK_EYE_Y,z:22};m.position={...moved};
 m.update(1/60,false);m.update(1/60,false);
 assert.deepEqual(b.lastKnown,moved,'A called your new position to B');
 // Now nobody sees you: after losing sight they go to where you were and search.
 const hidden={x:20,y:3,z:-60};
 m.position={...hidden};
 a.position={x:CX,y:WALK_EYE_Y,z:16};
 for(let i=0;i<60*(SURVIVAL.loseSightSeconds+.5);i++)m.update(1/60,false);
 assert.equal(a.state,'search','lost sight: searching');
 assert.notDeepEqual(a.lastKnown,hidden,'he does not know where you went through the rock');
});

test('without a line on you a squad member flanks: he aims to come in from the side, not in a queue',()=>{
 const {m,a,b}=squad();
 m.firePistol(m.position,chest(m,a));
 assert.notEqual(a.flankSide,b.flankSide,'the pair split to both sides');
 const target={...m.position};
 b.lastKnown=target;
 const p=m.flankPoint(b,target);
 const r=Math.hypot(p.x-target.x,p.z-target.z);
 if(r>.1){
  assert.ok(Math.abs(r-GUARD_FLANK_DISTANCE)<1e-6,'a flank post a few metres from you');
  const straight=Math.atan2(b.position.x-target.x,b.position.z-target.z);
  const off=Math.atan2(p.x-target.x,p.z-target.z);
  assert.ok(Math.abs(Math.atan2(Math.sin(off-straight),Math.cos(off-straight)))>.5,'swung well off the straight line');
 }
 void GUARD_TEAM_MEMORY;
});
