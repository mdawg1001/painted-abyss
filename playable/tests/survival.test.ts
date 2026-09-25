/**
 * Survival firefight: durability, navigation, perception, melee, fire discipline,
 * reinforcements, smoke, supplies, restart cleanup, completability and cost.
 */
import {test} from 'node:test';
import assert from 'node:assert/strict';
import {
 Mission,isolateGuards,FLOOR_Y,WALK_EYE_Y,distance,visible,fits,isOpen,liveGuard,moveBody,
 WALK_SPEED,WALK_SPRINT,EXIT,RELIC,GUARD_BODY_RADIUS,type Guard,
} from '../src/simulation';
import {SURVIVAL,SURVIVAL_COVER,SURVIVAL_CACHES} from '../src/survivalConfig';
import {pistolDamage,patrolPosts,survivalDoors,smokeBlocks,Director} from '../src/survival';

const seeded=(seed:number)=>{let s=seed*9301+49297;return()=>{s=(s*16807)%2147483647;return s/2147483647;};};
/** A quiet bunker with one guard slot put into play where we want him. */
function one(role:'assault'|'rusher'|'flanker'|'heavy',at:{x:number;z:number},player:{x:number;z:number}){
 const m=new Mission(true);isolateGuards(m,-1);m.breathWaterY=FLOOR_Y-.1;m.rand=seeded(3);
 const g=m.activateGuard(m.guards[0],at,0,role);
 m.position={x:player.x,y:WALK_EYE_Y,z:player.z};
 m.inventory=['gun','knife',null,null,null];m.selected=0;
 return {m,g};
}
const aimAt=(m:Mission,g:Guard,y:number)=>({x:g.position.x-m.position.x,y:y-m.position.y,z:g.position.z-m.position.z});
const wait=(m:Mission,s:number,fn?:()=>void)=>{for(let i=0;i<Math.round(s*60);i++){fn?.();m.update(1/60,false);}};

// ── 1. Damage and durability ─────────────────────────────────────────────────────
test('standard guard: two head shots up close, three at 20 m; heads are worth it; heavies are tougher',()=>{
 const hp=SURVIVAL.roles.assault.hp;
 const shotsToKill=(d:number,head:boolean,mult=1,h:number=hp)=>Math.ceil(h/pistolDamage(d,head,mult));
 assert.equal(shotsToKill(6,true),2,'6 m: two head shots');
 assert.equal(shotsToKill(9,true),2,'9 m: two head shots');
 assert.equal(shotsToKill(20,true),3,'20 m: three head shots');
 assert.ok(shotsToKill(8,false)>=5,'body shots take far more');
 assert.ok(shotsToKill(8,true,SURVIVAL.roles.heavy.headMult,SURVIVAL.roles.heavy.hp)>=5,'a heavy soaks a magazine');
 // In the game: fire at a real guard 8 m away and 19 m away.
 for(const [dz,want] of [[8,2],[19,3]] as const){
  const {m,g}=one('assault',{x:0,z:-10},{x:0,z:-10+dz});
  g.state='patrol';g.pause=99;g.pauseTotal=99;g.heading=Math.PI;
  let n=0;
  while(g.hp>0&&n<6){m.pistol.cool=0;m.pistol.mag=8;m.firePistol({...m.position},aimAt(m,g,FLOOR_Y+1.64));n++;}
  assert.equal(n,want,`${dz} m: ${want} head shots`);
 }
});

test('one bullet is one damage event on one guard, even through a line of them',()=>{
 const {m,g}=one('assault',{x:0,z:-12},{x:0,z:-2});
 const h=m.activateGuard(m.guards[1],{x:0,z:-16},0,'assault');
 m.firePistol({...m.position},aimAt(m,g,FLOOR_Y+1.0));
 assert.equal(g.maxHp-g.hp,pistolDamage(distance(m.position,{...g.position,y:m.position.y}),false),'exactly one body hit');
 assert.equal(h.hp,h.maxHp,'the round does not go on into the man behind');
 const hpNow=g.hp;
 wait(m,.5);
 assert.ok(g.hp>=hpNow-0,'no damage ticks on while he stands where the bullet was');
});

test('knife: three stabs drop a guard facing you; a stab in an unaware back kills',()=>{
 const {m,g}=one('assault',{x:0,z:-10},{x:0,z:-8.5});
 m.selected=1;g.heading=0; // facing you
 let n=0;
 while(g.hp>0&&n<6){m.predator.stabCool=0;assert.equal(m.stab({x:0,y:0,z:-1}),'hit');n++;}
 assert.equal(n,3);
 const b=one('assault',{x:0,z:-10},{x:0,z:-8.5});
 b.m.selected=1;b.g.heading=Math.PI;b.g.state='patrol'; // back to you
 b.m.stab({x:0,y:0,z:-1});
 assert.equal(b.g.hp,0,'silent kill');
 assert.equal(b.m.lastKnifeHit?.backstab,true);
});

test('a hit reads: stagger, hit time for the flash, cancelled wind-up, lost shooting slot',()=>{
 const {m,g}=one('rusher',{x:0,z:-10},{x:0,z:-8.4});
 g.state='chase';g.lastKnown={...m.position};g.meleeToken=true;g.windup=.3;g.windupTotal=.5;
 m.firePistol({...m.position},aimAt(m,g,FLOOR_Y+1.0));
 assert.equal(g.hitAt,m.elapsed);
 assert.ok(g.flinch>0);
 assert.equal(g.windup,0,'the strike is interrupted');
 assert.equal(g.meleeToken,false);
});

// ── 2. Navigation ────────────────────────────────────────────────────────────────
test('patrol posts cover room interiors, clear of walls and cover',()=>{
 const posts=patrolPosts();
 assert.ok(posts.length>=40,`${posts.length} posts`);
 for(const p of posts)assert.ok(fits({x:p.x,y:WALK_EYE_Y,z:p.z},SURVIVAL.postClearance-1e-6));
 const rooms=[
  {name:'entrance',x0:-12,x1:12,z0:-20,z1:-4},{name:'cavern',x0:-28,x1:28,z0:-96,z1:-44},
  {name:'alcove',x0:-12,x1:12,z0:-120,z1:-104},{name:'fissure',x0:28,x1:36,z0:-80,z1:-18},
 ];
 for(const r of rooms)assert.ok(posts.some(p=>p.x>=r.x0&&p.x<=r.x1&&p.z>=r.z0&&p.z<=r.z1),`posts in the ${r.name}`);
 for(const c of SURVIVAL_COVER)assert.ok(isOpen(c.x+c.hx+.6,c.z)||isOpen(c.x-c.hx-.6,c.z),'cover leaves a way round');
});

test('patrolling guards cross room interiors instead of hugging walls, and never clip',()=>{
 const m=new Mission(true);m.rand=seeded(11);m.spawnGuards();m.director.enabled=false;
 m.breathWaterY=FLOOR_Y-.1;m.position={x:500,y:WALK_EYE_Y,z:500};
 let near=0,samples=0;
 const wallGap=(p:{x:number;z:number})=>{let best=9;for(let a=0;a<16;a++){for(let d=.1;d<9;d+=.1){if(!isOpen(p.x+Math.sin(a/16*Math.PI*2)*d,p.z+Math.cos(a/16*Math.PI*2)*d)){best=Math.min(best,d);break;}}}return best;};
 wait(m,90,()=>{m.breathWaterY=FLOOR_Y-.1;});
 for(let k=0;k<180;k++){
  wait(m,.5);
  for(const g of m.guards){
   if(!liveGuard(g))continue;
   assert.ok(fits({x:g.position.x,y:3,z:g.position.z},GUARD_BODY_RADIUS-.02),'inside open floor');
   if(g.speed>.3){samples++;if(wallGap(g.position)<1.0)near++;}
  }
 }
 assert.ok(samples>100);
 assert.ok(near/samples<.12,`walking within 1 m of a wall ${(100*near/samples).toFixed(0)} % of the time`);
});

test('guards route round cover to reach you, and spread out instead of stacking in a line',()=>{
 const m=new Mission(true);isolateGuards(m,-1);m.breathWaterY=FLOOR_Y-.1;m.rand=seeded(5);
 // Four guards start in a file at the cavern mouth; you are across the room behind a crate.
 const gs=[0,1,2,3].map(i=>m.activateGuard(m.guards[i],{x:0,z:-46-i*1.2},Math.PI,'assault'));
 m.position={x:-18,y:WALK_EYE_Y,z:-58};
 for(const g of gs){g.state='chase';g.lastKnown={...m.position};g.team=1e9;}
 m.rand=seeded(6);
 wait(m,8,()=>{m.health=100;for(const g of gs){g.lastKnown={...m.position};g.state='chase';}});
 for(const g of gs)assert.ok(fits({x:g.position.x,y:3,z:g.position.z},GUARD_BODY_RADIUS-.02),'never inside cover or rock');
 for(let i=0;i<gs.length;i++)for(let j=i+1;j<gs.length;j++)
  assert.ok(Math.hypot(gs[i].position.x-gs[j].position.x,gs[i].position.z-gs[j].position.z)>.8,'not stacked');
 const bearings=gs.map(g=>Math.atan2(g.position.x-m.position.x,g.position.z-m.position.z)).sort((a,b)=>a-b);
 assert.ok(bearings[bearings.length-1]-bearings[0]>.5,`spread round you (${(bearings[bearings.length-1]-bearings[0]).toFixed(2)} rad)`);
 assert.ok(gs.every(g=>distance(g.position,m.position)<16),'and they came across the room');
});

test('a guard jammed against cover gets unstuck',()=>{
 const {m,g}=one('assault',{x:-2,z:-47.5},{x:500,z:500});
 g.state='search';g.lastKnown={x:-2,y:WALK_EYE_Y,z:-60};g.arrived=false;
 // Poison his route cache: a step straight through the crate at (-2, -50), refreshed never.
 const step={x:-2,z:-52,final:false};
 const start={...g.position};
 wait(m,5,()=>{if(g.stuckCount===0){g.navStep=step;g.navGoal={x:g.lastKnown.x,z:g.lastKnown.z};g.navAt=m.elapsed;}});
 assert.ok(g.stuckCount>0,'noticed he was stuck');
 assert.ok(Math.hypot(g.position.x-start.x,g.position.z-start.z)>.8,'and moved off');
});

// ── 3. Perception ────────────────────────────────────────────────────────────────
test('rock and smoke both block a guard\'s sight; point blank still counts',()=>{
 const make=()=>{const r=one('assault',{x:0,z:-10},{x:0,z:-2});r.g.state='patrol';r.g.pause=99;r.g.pauseTotal=99;r.g.heading=0;return r;};
 const clear=make();wait(clear.m,.1);assert.notEqual(clear.g.state,'patrol','sees you in the open');
 const smoked=make();
 smoked.m.clouds.push({id:1,x:0,z:-6,born:smoked.m.elapsed-2,player:true});
 assert.ok(smokeBlocks(smoked.m.clouds,smoked.g.position,smoked.m.position,smoked.m.elapsed));
 wait(smoked.m,.5);assert.equal(smoked.g.state,'patrol','smoke hides you');
 const rock=one('assault',{x:0,z:-10},{x:20,z:-60});rock.g.state='patrol';rock.g.pause=99;
 wait(rock.m,.5);assert.equal(rock.g.state,'patrol','no sight through rock');
 const blank=make();blank.m.position={x:0,y:WALK_EYE_Y,z:-8.6};
 blank.m.clouds.push({id:1,x:0,z:-9,born:blank.m.elapsed-2,player:true});
 wait(blank.m,.1);assert.notEqual(blank.g.state,'patrol','inside the same cloud at arm\'s length he feels you');
});

test('smoke clears after its time and never piles past the cap',()=>{
 const {m}=one('assault',{x:500,z:500},{x:0,z:-30});
 m.smokes=9;
 for(let i=0;i<6;i++)m.throwSmoke(0,-1);
 wait(m,1.2);
 assert.ok(m.clouds.length<=SURVIVAL.smoke.maxClouds);
 const s=SURVIVAL.smoke;
 wait(m,s.grow+s.hold+s.fade+.5);
 assert.equal(m.clouds.length,0,'cleared');
 assert.equal(m.grenades.length,0);
});

// ── 4. Melee and fire discipline ────────────────────────────────────────────────
test('rusher stab: readable wind-up; it only lands inside its reach; step back and it whiffs',()=>{
 const {m,g}=one('rusher',{x:0,z:-10},{x:0,z:-8.2});
 g.state='chase';g.lastKnown={...m.position};g.heading=0;g.team=1e9;
 let windupSeen=0;
 wait(m,.4,()=>{if(g.windup>0)windupSeen++;});
 assert.ok(windupSeen>0&&m.health===100,'winds up first; nothing lands during the wind-up');
 wait(m,SURVIVAL.melee.rusher.windup);
 assert.equal(m.health,100-SURVIVAL.melee.rusher.damage,'the stab lands in reach');
 // Dodge: start a new swing, then back away out of reach before it lands.
 const b=one('rusher',{x:0,z:-10},{x:0,z:-8.2});
 b.g.state='chase';b.g.lastKnown={...b.m.position};b.g.heading=0;b.g.team=1e9;
 let started=false;
 wait(b.m,1.2,()=>{if(b.g.windup>0)started=true;if(started)b.m.position.z=Math.min(b.m.position.z+WALK_SPRINT/60,-2);});
 assert.ok(started);
 assert.equal(b.m.health,100,'sprinting away through the wind-up dodges it');
});

test('no strike from beyond reach, and at most two close attackers at once',()=>{
 const {m,g}=one('rusher',{x:0,z:-10},{x:0,z:-6.8}); // 3.2 m
 g.state='chase';g.lastKnown={...m.position};g.team=1e9;
 // Pin him in place: he may try, but must not connect from 3 m.
 wait(m,3,()=>{g.position={x:0,y:WALK_EYE_Y,z:-10};g.speed=0;m.position={x:0,y:WALK_EYE_Y,z:-6.8};});
 assert.equal(m.health,100);
 const n=new Mission(true);isolateGuards(n,-1);n.breathWaterY=FLOOR_Y-.1;n.rand=seeded(9);
 n.position={x:0,y:WALK_EYE_Y,z:-12};
 const ring=[0,1,2,3,4].map(i=>n.activateGuard(n.guards[i],{x:Math.sin(i*1.25)*3,z:-12+Math.cos(i*1.25)*3},0,'rusher'));
 for(const r of ring){r.state='chase';r.lastKnown={...n.position};r.team=1e9;}
 let worst=0;
 wait(n,6,()=>{n.health=100;worst=Math.max(worst,n.guards.filter(x=>liveGuard(x)&&(x.meleeToken||x.windup>0)).length);});
 assert.ok(worst<=SURVIVAL.melee.maxAttackers,`${worst} close attackers at once`);
});

test('fire discipline: never more than the shooter cap, in bursts, only after reacting',()=>{
 const m=new Mission(true);isolateGuards(m,-1);m.breathWaterY=FLOOR_Y-.1;m.rand=seeded(4);
 m.position={x:-18,y:WALK_EYE_Y,z:-66};
 const gs=[0,1,2,3,4,5].map(i=>m.activateGuard(m.guards[i],{x:-16+i*6.4,z:-48},Math.PI,'assault'));
 for(const g of gs){g.state='chase';g.lastKnown={...m.position};g.team=1e9;}
 let worst=0,t=0,firstShot=-1;
 const perTick:number[]=[];
 wait(m,12,()=>{
  m.health=100;t+=1/60;
  worst=Math.max(worst,gs.filter(g=>g.fireToken).length);
  const n=gs.reduce((a,g)=>a+g.shots,0);
  if(firstShot<0&&n>0)firstShot=t;
  perTick.push(n);
 });
 const total=gs.reduce((a,g)=>a+g.shots,0);
 assert.ok(worst<=SURVIVAL.maxShooters,`${worst} shooters at once`);
 assert.ok(total>10,`they do shoot (${total} rounds)`);
 assert.ok(firstShot>=SURVIVAL.roles.assault.reaction[0]-.05,`first round after a reaction time (${firstShot.toFixed(2)} s)`);
 // Bursts: in any half second the group fires far fewer rounds than six men could.
 let peak=0;for(let k=30;k<perTick.length;k++)peak=Math.max(peak,perTick[k]-perTick[k-30]);
 assert.ok(peak<=SURVIVAL.maxShooters*3,`at most ${peak} rounds in any half second`);
});

test('standing in the open against three shooters is lethal within seconds; cover saves you',()=>{
 const run=(hide:boolean,seed:number)=>{
  const m=new Mission(true);isolateGuards(m,-1);m.breathWaterY=FLOOR_Y-.1;m.rand=seeded(seed);
  m.position={x:-18,y:WALK_EYE_Y,z:-66};
  for(let i=0;i<3;i++){const g=m.activateGuard(m.guards[i],{x:-12+i*12,z:-48},Math.PI,'assault');g.state='chase';g.lastKnown={...m.position};g.team=1e9;}
  let t=0;
  while(m.outcome==='playing'&&t<(hide?15:30)){
   if(hide)m.position={x:0,y:WALK_EYE_Y,z:20}; // far down the hatch corridor, out of every line
   for(const g of m.guards)if(liveGuard(g)&&distance(g.position,m.position)<5){g.position.z=-48;}
   m.update(1/60,false);t+=1/60;
  }
  return t;
 };
 const open=[1,2,3,4].map(s=>run(false,s));
 const avg=open.reduce((a,b)=>a+b,0)/open.length;
 assert.ok(avg>2.5&&avg<15,`standing still in the open you last ${avg.toFixed(1)} s`);
 assert.ok(run(true,1)>=14.9,'out of their sight you are not shot');
});

// ── 5. Reinforcements ────────────────────────────────────────────────────────────
test('reinforcements arrive repeatedly, announced first, through doors away from you',()=>{
 const m=new Mission(true);m.rand=seeded(21);m.spawnGuards();m.breathWaterY=FLOOR_Y-.1;
 m.health=1e9;m.position={x:0,y:WALK_EYE_Y,z:-60};
 // Start the fight.
 const first=m.guards.find(liveGuard)!;m.squadAlert(first,'spotted');
 const doors=survivalDoors();
 const cueAt=new Map<number,number>();
 let arrivals=0;const seenLife=new Map<Guard,number>(m.guards.map(g=>[g,g.life]));
 for(let i=0;i<60*120;i++){
  m.health=1e9;
  // Kill guards that get close so the director keeps sending more.
  for(const g of m.guards)if(liveGuard(g)&&distance(g.position,m.position)<9)m.guardTakeDamage(g,9999);
  m.update(1/60,false);
  for(const c of m.director.cues)if(c.kind==='door')cueAt.set(doors.findIndex(d=>d.door.x===c.x&&d.door.z===c.z),c.at);
  for(const g of m.guards){
   if(g.life!==seenLife.get(g)&&g.active&&g.hp>0){
    seenLife.set(g,g.life);
    const door=doors.find(d=>Math.hypot(d.spawn.x-g.position.x,d.spawn.z-g.position.z)<.05);
    assert.ok(door,'stepped in at a door');
    arrivals++;
    const dd=distance({...g.position,y:m.position.y},m.position);
    assert.ok(dd>=SURVIVAL.director.spawnMinDistance-1,`arrived ${dd.toFixed(1)} m away`);
    assert.ok(!visible(g.position,m.position)||dd>=SURVIVAL.director.spawnVisibleOk-1,'not in plain sight');
    const cue=cueAt.get(door!.index);
    assert.ok(cue!==undefined&&m.elapsed-cue>=SURVIVAL.director.warnSeconds-.05,'announced before he came through');
   }
  }
 }
 assert.ok(arrivals>=10,`${arrivals} reinforcements in two minutes`);
 assert.ok(new Set([...cueAt.keys()]).size>=3,'from several directions');
 assert.ok(m.director.cycle>=1||m.director.phase==='lull'||m.director.phase==='peak','the pressure cycles');
});

test('director: build → peak → lull → harder build; the relic starts the final push',()=>{
 const d=new Director();d.reset(0);
 assert.equal(d.advance(1,true,false),'build');
 const c=SURVIVAL.director;
 assert.equal(d.advance(1+c.buildSeconds,true,false),'peak');
 assert.equal(d.advance(1+c.buildSeconds+c.peakSeconds,true,false),'lull');
 assert.equal(d.target(),0,'a lull sends nobody');
 const buildTarget=c.buildTarget;
 assert.equal(d.advance(1+c.buildSeconds+c.peakSeconds+c.lullSeconds,true,false),'build');
 assert.ok(d.target()>buildTarget,'each cycle harder');
 assert.equal(d.advance(200,true,true),'final');
 assert.equal(d.target(),c.finalTarget);
});

// ── 6. Supplies, objective, restart ─────────────────────────────────────────────
test('walk over supplies to take them; a lull restocks caches away from you',()=>{
 const m=new Mission(true);isolateGuards(m,-1);
 const ammo=SURVIVAL_CACHES.findIndex(c=>c.kind==='ammo');
 m.pistol.reserve=0;m.position={x:SURVIVAL_CACHES[ammo].x,y:WALK_EYE_Y,z:SURVIVAL_CACHES[ammo].z};
 m.update(1/60,false);
 assert.equal(m.pistol.reserve,SURVIVAL.supplies.ammo);
 assert.equal(m.caches[ammo].stocked,false);
 const med=SURVIVAL_CACHES.findIndex(c=>c.kind==='medkit');
 m.health=100;m.position={x:SURVIVAL_CACHES[med].x,y:WALK_EYE_Y,z:SURVIVAL_CACHES[med].z};
 m.update(1/60,false);
 assert.equal(m.caches[med].stocked,true,'a full-health walk-over leaves the kit');
 m.health=50;m.update(1/60,false);
 assert.equal(m.health,50+SURVIVAL.supplies.medkit);
 for(const c of SURVIVAL_CACHES)assert.ok(fits({x:c.x,y:WALK_EYE_Y,z:c.z},.5),'cache on open floor');
});

test('death and restart clean up the fight completely',()=>{
 const m=new Mission(true);m.rand=seeded(8);m.spawnGuards();m.breathWaterY=FLOOR_Y-.1;
 m.position={x:0,y:WALK_EYE_Y,z:-60};m.health=1e9;
 m.squadAlert(m.guards.find(liveGuard)!,'spotted');
 m.throwSmoke(0,-1);
 wait(m,40,()=>{m.health=1e9;});
 assert.ok(m.director.arrivals>0);
 m.health=0;m.outcome='lost';
 m.respawnAtHatch();
 assert.equal(m.director.phase,'intro');
 assert.equal(m.director.pending.length,0);
 assert.equal(m.director.cues.length,0);
 assert.equal(m.clouds.length+m.grenades.length,0);
 assert.equal(m.guards.filter(liveGuard).length,SURVIVAL.director.initial);
 assert.ok(m.guards.every(g=>!g.active||(g.state==='patrol'&&g.hp===g.maxHp)));
 assert.ok(m.caches.every(c=>c.stocked));
 assert.deepEqual(m.inventory.slice(0,2),['knife','gun']);
 assert.equal(m.pistol.mag,SURVIVAL.pistol.magazine);
 assert.equal(m.smokes,SURVIVAL.smoke.start);
 assert.ok(m.guards.every(g=>!liveGuard(g)||distance(g.position,m.position)>=24),'nobody waiting at the hatch');
});

/** A scripted player: runs the route, shoots the nearest visible guard's head with some error, uses flares on the guardian. */
function playMission(seed:number){
 const rnd=seeded(seed);
 const m=new Mission(true);m.rand=rnd;m.spawnGuards();m.air=1e6;
 const route:(readonly [number,number]|'relic'|'exit')[]=[[0,-8],[0,-44],[-20,-48],[-20,-88],[0,-92],[0,-110],'relic',[0,-92],[24,-92],[28,-84],[32,-80],[32,-12],'exit'];
 let wi=0,t=0,maxLive=0,worstTick=0,ticks=0,total=0;const phases=new Set<string>();
 while(m.outcome==='playing'&&t<400&&wi<route.length){
  const w=route[wi];
  if(w==='relic'){m.position={...RELIC,y:WALK_EYE_Y};const k=m.inventory.indexOf(null);m.selected=k>=0?k:2;m.interact();m.selected=1;wi++;continue;}
  if(w==='exit'){m.interact();wi++;continue;}
  const vis=m.guards.filter(g=>liveGuard(g)&&visible(m.position,g.position)&&distance(m.position,g.position)<25)
   .sort((a,b)=>distance(m.position,a.position)-distance(m.position,b.position));
  const tg=vis[0];let move=true;
  if(tg){
   const e={...m.position};const err=(rnd()-.5)*.06*distance(e,tg.position);
   const dir={x:tg.position.x+err-e.x,y:FLOOR_Y+1.64+(rnd()-.5)*.4-e.y,z:tg.position.z-e.z};
   m.facing=Math.atan2(dir.x,dir.z);
   if(m.pistol.cool<=0&&m.pistol.reload<=0)m.firePistol(e,dir);
   if(m.pistol.mag===0)m.reloadPistol();
   move=distance(m.position,tg.position)>6;
  }
  if(move){
   const dx=w[0]-m.position.x,dz=w[1]-m.position.z,l=Math.hypot(dx,dz);
   if(l<.4){wi++;continue;}
   if(!tg)m.facing=Math.atan2(dx,dz);
   const sp=tg?WALK_SPEED:WALK_SPRINT*.8;
   moveBody(m.position,dx/l*sp/60,0,dz/l*sp/60);
  }
  if(m.predator.state==='chase'&&distance(m.position,m.predator.position)<14&&m.inventory.includes('flare')){const k=m.selected;m.selected=m.inventory.indexOf('flare');m.use();m.selected=k;}
  const t0=performance.now();m.update(1/60,false);const dtm=performance.now()-t0;
  total+=dtm;ticks++;if(ticks>60)worstTick=Math.max(worstTick,dtm);
  t+=1/60;phases.add(m.director.phase);maxLive=Math.max(maxLive,m.guards.filter(liveGuard).length);
 }
 return{m,t,phases,maxLive,avgTick:total/ticks,worstTick};
}

test('the mission is completable under the new pressure, and the pressure is real',()=>{
 const runs=[1,5,7,9].map(playMission);
 const wins=runs.filter(r=>r.m.outcome==='won').length;
 console.log(JSON.stringify(runs.map(r=>({outcome:r.m.outcome,t:+r.t.toFixed(0),kills:r.m.kills,maxLive:r.maxLive,phases:[...r.phases],avgTickMs:+r.avgTick.toFixed(3)}))));
 assert.ok(wins>=1,`a scripted player gets out in ${wins} of 4 runs`);
 assert.ok(wins<4,'but not every time: it is dangerous');
 for(const r of runs.filter(r=>r.m.outcome==='won'))assert.ok(r.phases.has('final'),'the relic triggered the final push');
 assert.ok(runs.some(r=>r.maxLive>=8),'busy: eight or more guards alive at once');
});

test('cost at the maximum guard count stays small',()=>{
 const m=new Mission(true);m.rand=seeded(2);m.spawnGuards();m.breathWaterY=FLOOR_Y-.1;
 m.position={x:0,y:WALK_EYE_Y,z:-70};m.health=1e9;
 const doors=survivalDoors();
 for(const g of m.guards)if(!g.active){const d=doors[m.guards.indexOf(g)%doors.length];m.activateGuard(g,d.spawn,d.yaw,'assault');}
 for(const g of m.guards){g.state='chase';g.lastKnown={...m.position};g.team=1e9;}
 assert.equal(m.guards.filter(liveGuard).length,SURVIVAL.maxGuards);
 let total=0;const n=600;
 for(let i=0;i<n;i++){m.health=1e9;const t0=performance.now();m.update(1/60,false);total+=performance.now()-t0;}
 const avg=total/n;
 console.log(JSON.stringify({guards:SURVIVAL.maxGuards,avgTickMs:+avg.toFixed(3)}));
 assert.ok(avg<2,`simulation tick ${avg.toFixed(2)} ms with ${SURVIVAL.maxGuards} guards`);
 void EXIT;
});

test('the guardian needs water to hunt: stranded on a dry floor it only snaps at arm\'s length',()=>{
 const m=new Mission(true);isolateGuards(m,-1);
 m.breathWaterY=FLOOR_Y-.1; // dry
 const start={...m.predator.position};
 m.position={x:start.x+6,y:WALK_EYE_Y,z:start.z};
 wait(m,5);
 assert.ok(Math.hypot(m.predator.position.x-start.x,m.predator.position.z-start.z)<.01,'it cannot move on dry floor');
 assert.equal(m.health,100,'6 m away you are safe');
 m.position={x:start.x+1,y:WALK_EYE_Y,z:start.z};
 wait(m,.2);
 assert.ok(m.health<100,'step into its jaws and it bites');
 const wet=new Mission(true);isolateGuards(wet,-1);
 wet.breathWaterY=FLOOR_Y+1.6;wet.position={x:wet.predator.position.x+8,y:2.5,z:wet.predator.position.z};
 const s2={...wet.predator.position};
 wait(wet,3,()=>{wet.health=100;});
 assert.ok(Math.hypot(wet.predator.position.x-s2.x,wet.predator.position.z-s2.z)>.5,'with water over the floor it swims again');
});
