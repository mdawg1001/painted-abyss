import {test} from 'node:test';
import assert from 'node:assert/strict';
import {
 PISTOL,makePistol,tickPistol,startReload,canFire,spendRound,takeDamage,hitscan,
 raySphere,rayVerticalCapsule,
} from '../src/playerPistol';
import {
 Mission,isolateGuards,FLOOR_Y,WALK_EYE_Y,breathFootprint,
 GUARD_MAX_HP,GUARD_HIT_FLINCH,GUNSHOT_HEARING,
} from '../src/simulation';

const CORRIDOR={x:breathFootprint().cx,y:WALK_EYE_Y,z:16};
const clear=()=>true;

test('ray primitives: sphere and vertical capsule',()=>{
 const t=raySphere({x:0,y:0,z:0},{x:0,y:0,z:1},{x:0,y:0,z:5},1);
 assert.ok(t!==null&&Math.abs(t-4)<1e-9);
 assert.equal(raySphere({x:0,y:0,z:0},{x:0,y:0,z:1},{x:3,y:0,z:5},1),null);
 const c=rayVerticalCapsule({x:0,y:1,z:0},{x:0,y:0,z:1},{x:0,y:0,z:6},1.4,.3);
 assert.ok(c!==null&&Math.abs(c-5.7)<1e-9);
 assert.equal(rayVerticalCapsule({x:0,y:2,z:0},{x:0,y:0,z:1},{x:0,y:0,z:6},1.4,.3),null,'passes over his shoulders');
});

test('hitscan: centre ray, nearest target wins, head vs body, walls block',()=>{
 const eye={x:0,y:FLOOR_Y+1.6,z:0};
 const targets=[{id:0,foot:{x:0,y:FLOOR_Y,z:10}},{id:1,foot:{x:0,y:FLOOR_Y,z:6}}];
 const body=hitscan(eye,{x:0,y:-.1,z:1},targets,45,clear)!;
 assert.equal(body.id,1,'the nearer guard takes the round');
 assert.equal(body.headshot,false);
 const head=hitscan(eye,{x:0,y:0,z:1},targets,45,clear)!;
 assert.equal(head.id,1);assert.equal(head.headshot,true,'level at eye height is a head shot');
 assert.equal(hitscan(eye,{x:1,y:0,z:0},targets,45,clear),null,'looking away misses');
 assert.equal(hitscan(eye,{x:0,y:0,z:1},targets,3,clear),null,'out of range');
 assert.equal(hitscan(eye,{x:0,y:0,z:1},targets,45,()=>false),null,'a wall in the way');
});

test('semi-automatic: one round per pull, cooldown, magazine, reload from reserve',()=>{
 const p=makePistol(8,10);
 assert.equal(canFire(p),'ready');
 spendRound(p);
 assert.equal(canFire(p),'cooldown','no second round inside the fire interval');
 tickPistol(p,PISTOL.fireInterval);
 assert.equal(canFire(p),'ready');
 for(let i=0;i<7;i++){spendRound(p);tickPistol(p,PISTOL.fireInterval);}
 assert.equal(p.mag,0);assert.equal(canFire(p),'empty');
 assert.ok(startReload(p));
 assert.equal(canFire(p),'reloading');
 tickPistol(p,PISTOL.reloadSeconds);
 assert.equal(p.mag,8);assert.equal(p.reserve,2);
 // Adjustable capacity.
 const big=makePistol(12,0);assert.equal(big.mag,12);assert.equal(startReload(big),false,'full: nothing to do');
});

test('takeDamage: generic health rule, no overkill, dead stay dead',()=>{
 const t={hp:100,maxHp:100};
 assert.deepEqual(takeDamage(t,38),{killed:false,dealt:38});
 assert.deepEqual(takeDamage(t,100),{killed:true,dealt:62});
 assert.deepEqual(takeDamage(t,50),{killed:false,dealt:0});
});

function armed(){
 const m=new Mission(true);isolateGuards(m,0);m.breathWaterY=FLOOR_Y-.1;m.rand=()=>.99;
 m.inventory[0]='gun';m.selected=0;
 const g=m.guard;g.position={...CORRIDOR};g.heading=Math.PI;g.state='patrol';g.pause=99;
 m.position={x:CORRIDOR.x,y:WALK_EYE_Y,z:CORRIDOR.z+8};
 return m;
}
const at=(m:Mission,y:number)=>{const e={...m.position};return{eye:e,dir:{x:m.guard.position.x-e.x,y:y-e.y,z:m.guard.position.z-e.z}};};

test('three body hits drop a guard; every hit staggers and alerts him',()=>{
 const m=armed();const g=m.guard;
 const {eye,dir}=at(m,FLOOR_Y+1.0);
 assert.equal(m.firePistol(eye,dir),'fired');
 assert.equal(g.hp,GUARD_MAX_HP-PISTOL.bodyDamage);
 assert.equal(g.state,'chase','a hit tells him where you are');
 assert.ok(g.flinch>0&&g.shootCool>=GUARD_HIT_FLINCH,'staggered: no instant return fire');
 assert.equal(m.firePistol(eye,dir),'cooldown','semi-auto');
 const wait=()=>{for(let i=0;i<12;i++)m.update(1/60,false);}; // > one fire interval
 wait();
 assert.equal(m.firePistol(eye,at(m,FLOOR_Y+1.0).dir),'fired');
 wait();
 assert.equal(m.firePistol(eye,at(m,FLOOR_Y+1.0).dir),'fired');
 assert.equal(g.hp,0);
 assert.equal(m.combatCue,'pistol-kill');
 const shotsBefore=g.shots;
 for(let i=0;i<120;i++)m.update(1/60,false);
 assert.equal(g.shots,shotsBefore,'a downed guard never fires');
 assert.equal(m.health,100);
});

test('one head shot drops him; his magazine is yours when you walk over him',()=>{
 const m=armed();const g=m.guard;
 const {eye,dir}=at(m,FLOOR_Y+1.64);
 m.firePistol(eye,dir);
 assert.equal(g.hp,0);assert.equal(m.lastPistolHit?.headshot,true);
 const before=m.pistol.reserve;
 m.position={x:g.position.x,y:WALK_EYE_Y,z:g.position.z+.5};
 m.update(1/60,false);
 assert.ok(m.pistol.reserve>before,'picked up his rounds');
 assert.equal(g.loot,0);
});

test('the shot is loud: patrolling guards in earshot come looking; the empty gun reloads itself',()=>{
 const m=new Mission(true);isolateGuards(m,-1);m.breathWaterY=FLOOR_Y-.1;
 m.inventory[0]='gun';m.selected=0;
 const near=m.guards[1],far=m.guards[2];
 near.position={x:CORRIDOR.x,y:WALK_EYE_Y,z:CORRIDOR.z-GUNSHOT_HEARING*.5};near.hp=100;near.state='patrol';
 far.position={x:500,y:WALK_EYE_Y,z:500};far.state='patrol';
 m.position={...CORRIDOR};
 m.pistol.mag=1;m.pistol.reserve=8;
 m.firePistol(m.position,{x:1,y:0,z:0});
 assert.equal(near.state,'search');assert.deepEqual(near.lastKnown,m.position);
 assert.equal(far.state,'patrol');
 assert.ok(m.pistol.reload>0,'last round out: the magazine change starts on its own');
 assert.equal(m.firePistol(m.position,{x:1,y:0,z:0}),'reloading');
});

test('underwater the round dies within a couple of metres',()=>{
 const m=armed();m.breathWaterY=WALK_EYE_Y+1; // flooded above the eye
 const {eye,dir}=at(m,FLOOR_Y+1.0);
 m.firePistol(eye,dir);
 assert.equal(m.guard.hp,GUARD_MAX_HP,'8 m of water stops it');
});

test('R with the pistol selected changes the magazine; nothing fires without it in hand',()=>{
 const m=armed();m.pistol.mag=3;m.pistol.reserve=10;
 m.use();
 assert.ok(m.pistol.reload>0);
 m.selected=1;
 assert.equal(m.firePistol(m.position,{x:0,y:0,z:-1}),'blocked');
});
