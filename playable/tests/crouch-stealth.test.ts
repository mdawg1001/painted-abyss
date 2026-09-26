import {test} from 'node:test';
import assert from 'node:assert/strict';
import {Mission,isolateGuards,FLOOR_Y,WALK_EYE_Y,breathFootprint,visible,stealthSightFactor,GUARD_GUN_RANGE,type Guard} from '../src/simulation';
import {SURVIVAL} from '../src/survivalConfig';

const CX=breathFootprint().cx;
const PLAYER={x:CX,y:WALK_EYE_Y,z:24};

/** One guard on patrol, standing still and looking straight at you from `d` metres. */
function watch(d:number,state:Guard['state']='patrol'){
 const m=new Mission(true);isolateGuards(m,-1);m.breathWaterY=FLOOR_Y-.1;m.rand=()=>.99;m.torch=false;
 const g=m.guards[0];
 m.activateGuard(g,{x:CX,z:PLAYER.z-d},0,'assault');
 g.state=state;g.pause=99;g.pauseTotal=99;g.heading=0;
 if(state==='search'){g.lastKnown={x:CX,y:WALK_EYE_Y,z:PLAYER.z-d-6};g.arrived=true;g.timer=0;}
 m.position={...PLAYER};
 return {m,g};
}
const run=(m:Mission,crouch:boolean,seconds=1)=>{for(let t=0;t<seconds;t+=1/60){m.crouching=crouch;m.update(1/60,false);}};

test('crouching makes you 35% harder to see: every pick-up distance is cut to 0.65',()=>{
 assert.equal(SURVIVAL.stealth.sightFactor,.65);
 assert.equal(stealthSightFactor(true),.65);
 assert.equal(stealthSightFactor(false),1);
});

test('standing at 7 m in his view he spots you; crouched at the same spot he does not',()=>{
 const stand=watch(7);assert.ok(visible(stand.g.position,stand.m.position));
 run(stand.m,false);
 assert.notEqual(stand.g.state,'patrol','standing: spotted (9 m sight)');
 const sneak=watch(7);
 run(sneak.m,true);
 assert.equal(sneak.g.state,'patrol','crouched: 7 m is past his 5.85 m reach');
});

test('crouching is not invisibility: close enough and he still sees you',()=>{
 const {m,g}=watch(5);
 run(m,true);
 assert.notEqual(g.state,'patrol','5 m is inside the crouched reach');
});

test('a searching guard re-acquires a standing player far off, but not a crouched one',()=>{
 const far=(GUARD_GUN_RANGE+8)*.8; // inside standing reach, beyond crouched reach
 assert.ok(far>(GUARD_GUN_RANGE+8)*SURVIVAL.stealth.sightFactor);
 const stand=watch(far,'search');run(stand.m,false,.2);
 assert.equal(stand.g.state,'chase');
 const sneak=watch(far,'search');run(sneak.m,true,.2);
 assert.notEqual(sneak.g.state,'chase');
});

test('once he is chasing you, ducking down does not shake him',()=>{
 const {m,g}=watch(14,'chase');g.lastKnown={...PLAYER};
 run(m,true,1.5);
 assert.equal(g.state,'chase');
});
