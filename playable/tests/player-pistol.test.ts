import {test} from 'node:test';
import assert from 'node:assert/strict';
import {
 PISTOL,makePistol,tickPistol,startReload,canFire,spendRound,takeDamage,hitscan,
 raySphere,rayVerticalCapsule,
} from '../src/playerPistol';
import {
 Mission,isolateGuards,FLOOR_Y,WALK_EYE_Y,breathFootprint,
 GUARD_MAX_HP,GUARD_HORDE,GUNSHOT_HEARING,
} from '../src/simulation';
import {SURVIVAL} from '../src/survivalConfig';

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
 assert.ok(PISTOL.reloadSeconds<=1.3,'reload is fast enough to stay in the fight');
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
 assert.ok(p.reload>1.0&&p.reload<=1.3,'reload timer matches the faster magazine change');
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
 m.inventory=['gun','knife','flare',null,null];m.selected=0;
 const g=m.guard;g.position={...CORRIDOR};g.heading=Math.PI;g.state='patrol';g.pause=99;
 m.position={x:CORRIDOR.x,y:WALK_EYE_Y,z:CORRIDOR.z+8};
 return m;
}
const at=(m:Mission,y:number)=>{const e={...m.position};return{eye:e,dir:{x:m.guard.position.x-e.x,y:y-e.y,z:m.guard.position.z-e.z}};};

test('standard guard: two close head shots or five body hits; every hit staggers and alerts him',()=>{
 const m=armed();const g=m.guard;
 assert.equal(g.role,'assault');assert.equal(g.maxHp,SURVIVAL.roles.assault.hp);
 const wait=()=>{for(let i=0;i<12;i++)m.update(1/60,false);}; // > one fire interval
 const {eye,dir}=at(m,FLOOR_Y+1.0);
 assert.equal(m.firePistol(eye,dir),'fired');
 assert.equal(g.hp,g.maxHp-SURVIVAL.pistol.bodyDamage,'8 m: full body damage, one event');
 assert.equal(g.state,'chase','a hit tells him where you are');
 assert.ok(g.flinch>0&&g.shootCool>=SURVIVAL.hitFlinch,'staggered');
 assert.equal(m.firePistol(eye,dir),'cooldown','semi-auto');
 let bodyHits=1;
 while(g.hp>0&&bodyHits<10){wait();const a=at(m,FLOOR_Y+1.0);m.firePistol(a.eye,a.dir);bodyHits++;}
 assert.equal(bodyHits,5,'five body hits at close range');
 assert.equal(m.combatCue,'pistol-kill');
 const shotsBefore=g.shots;
 for(let i=0;i<120;i++)m.update(1/60,false);
 assert.equal(g.shots,shotsBefore,'a downed guard never fires');
});

test('two head shots drop him up close; his pistol drops and E strips its rounds',()=>{
 const m=armed();const g=m.guard;
 const ammoLeft=g.ammo;
 let a=at(m,FLOOR_Y+1.64);m.firePistol(a.eye,a.dir);
 assert.ok(g.hp>0,'one head shot is not enough');assert.equal(m.lastPistolHit?.headshot,true);
 for(let i=0;i<12;i++)m.update(1/60,false);
 a=at(m,FLOOR_Y+1.64);m.firePistol(a.eye,a.dir);
 assert.equal(g.hp,0,'the second one is');
 assert.equal(g.gun,false,'the gun left his hand');
 const dropped=m.pickups.find(p=>p.item==='gun'&&p.rounds!==undefined);
 assert.ok(dropped,'his pistol lies on the floor');
 const rounds=dropped!.rounds!;
 assert.ok(rounds<=ammoLeft);
 const before=m.pistol.reserve;
 m.position={x:dropped!.position.x,y:WALK_EYE_Y,z:dropped!.position.z+.4};
 m.interact();
 assert.equal(m.pistol.reserve,before+rounds,'one E takes his rounds');
 assert.equal(m.inventory.filter(i=>i==='gun').length,1,'no second pistol in your slots');
 assert.ok(!m.pickups.includes(dropped!));
});

test('E picks up at once: a free slot first, otherwise it swaps with the item in your hand',()=>{
 const m=new Mission(true);isolateGuards(m,-1);
 const gun=m.pickups.find(p=>p.item==='gun')!;
 m.position={x:gun.position.x+.5,y:WALK_EYE_Y,z:gun.position.z};
 m.inventory=['knife',null,'flare',null,null];m.selected=0;
 m.interact();
 assert.deepEqual(m.inventory,['knife','gun','flare',null,null]);assert.equal(m.selected,1,'the new item is in your hand');
 // Full: one press swaps with the selected slot and drops the old item at your feet.
 const bottle=m.pickups.find(p=>p.item==='bottle')!;
 m.position={x:bottle.position.x+.5,y:WALK_EYE_Y,z:bottle.position.z};
 m.inventory=['knife','gun','flare','air','bandage'];m.selected=2;
 m.interact();
 assert.equal(m.inventory[2],'bottle');assert.equal(m.pending,null);
 assert.ok(m.pickups.some(p=>p.item==='flare'&&Math.hypot(p.position.x-m.position.x,p.position.z-m.position.z)<.1),'flare dropped where you stand');
});

test('the shot is loud: patrolling guards in earshot come looking; the empty gun reloads itself',()=>{
 const m=new Mission(true);isolateGuards(m,-1);m.breathWaterY=FLOOR_Y-.1;
 m.inventory[0]='gun';m.selected=0;
 const near=m.guards[1],far=m.guards[2];
 near.active=true;near.hp=near.maxHp;
 near.position={x:CORRIDOR.x,y:WALK_EYE_Y,z:CORRIDOR.z-SURVIVAL.gunshotHearing*.5};near.state='patrol';
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
 assert.equal(m.guard.hp,m.guard.maxHp,'8 m of water stops it');
});

test('R with the pistol selected changes the magazine; nothing fires without it in hand',()=>{
 const m=armed();m.pistol.mag=3;m.pistol.reserve=10;
 m.use();
 assert.ok(m.pistol.reload>0);
 m.selected=2;
 assert.equal(m.firePistol(m.position,{x:0,y:0,z:-1}),'blocked');
});
