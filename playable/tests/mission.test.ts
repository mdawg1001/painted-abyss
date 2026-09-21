import {test} from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import {Mission,START,RELIC,EXIT,world,moveBody,visible,fits,pathBetween,lookDelta,edgeTurn,FREE_LOOK_RATE,torchModulation,TORCH_BASELINE,beerLambertTransmit,torchBetas,applySiltToTorch,stepSilt,siltAt,createSiltPlume,siltLoad,distance,cells,SURFACE_Y,FLOOR_Y,hydrostaticDepth,ata,gasDrainRate,AIR_MAIN_MAX,AIR_BAILOUT_MAX,updateBuoyancy,stepSwimVelocity,terminalSwimSpeed,terminalBuoyancySpeed,PREDATOR_SPEED,SWIM_BUOYANCY_ACCEL,SWIM_KICK_VERTICAL_SCALE,KNIFE_RANGE,BITE_RANGE,KNIFE_DAMAGE,PREDATOR_HP_MAX,PREDATOR_BREAK_HP} from '../src/simulation';
const advance=(m:Mission,seconds:number)=>{for(let i=0;i<seconds*60;i++)m.update(1/60);};
test('hydrostatic depth and ata share one surface plane',()=>{
 assert.equal(hydrostaticDepth(SURFACE_Y),0);
 assert.equal(hydrostaticDepth(FLOOR_Y),SURFACE_Y-FLOOR_Y);
 assert.equal(hydrostaticDepth(START.y),SURFACE_Y-START.y);
 assert.equal(ata(SURFACE_Y),1);
 assert.ok(Math.abs(ata(FLOOR_Y)-(1+(SURFACE_Y-FLOOR_Y)/10))<1e-12);
 assert.equal(Math.round(hydrostaticDepth(START.y)),4);
 assert.equal(Math.round(hydrostaticDepth(RELIC.y)),5);
 // Same Y ⇒ same depth regardless of cavern −Z (no theatrical fake metres).
 assert.equal(hydrostaticDepth(3),SURFACE_Y-3);
});
test('force swim reaches dive-plausible cruise/sprint and coasts under quadratic drag',()=>{
 const cruise=terminalSwimSpeed(false),sprint=terminalSwimSpeed(true);
 assert.ok(cruise>=2.0&&cruise<=2.4,`cruise ${cruise}`);
 assert.ok(sprint>=3.2&&sprint<=3.8,`sprint ${sprint}`);
 assert.ok(PREDATOR_SPEED.chase>cruise&&PREDATOR_SPEED.chase<sprint);
 assert.ok(PREDATOR_SPEED.rage>PREDATOR_SPEED.chase);
 assert.ok(PREDATOR_SPEED.damaged<PREDATOR_SPEED.patrol);
 assert.ok(KNIFE_RANGE<BITE_RANGE);
 const v={x:0,y:0,z:0};
 for(let i=0;i<180;i++)stepSwimVelocity(v,{x:0,y:0,z:-1},0,false,1/60);
 assert.ok(Math.abs(v.z+cruise)<.05,`steady z ${v.z} vs ${-cruise}`);
 const speed=Math.hypot(v.x,v.y,v.z);
 let coast=0;
 for(let i=0;i<300;i++){const before=Math.hypot(v.x,v.y,v.z);stepSwimVelocity(v,{x:0,y:0,z:0},0,false,1/60);coast+=Math.hypot(v.x,v.y,v.z)/60;if(Math.hypot(v.x,v.y,v.z)<.01)break;}
 assert.ok(coast<2.5,`coast ${coast} from ${speed}`);
});
test('BCD buoyancy rises on Space input and trims toward neutral when released',()=>{
 let b=0;
 for(let i=0;i<180;i++)b=updateBuoyancy(b,1,1/60);
 assert.ok(b>.85,'Space fills buoyancy slowly toward +1');
 for(let i=0;i<180;i++)b=updateBuoyancy(b,0,1/60);
 assert.equal(b,0,'idle snaps onto neutral so residual BCD does not linger');
 // Buoyancy alone produces vertical accel without horizontal kick.
 const v={x:0,y:0,z:0};
 for(let i=0;i<120;i++)stepSwimVelocity(v,{x:0,y:0,z:0},1,false,1/60);
 assert.ok(v.y>0.2);
 assert.ok(Math.abs(v.x)<1e-9&&Math.abs(v.z)<1e-9);
 assert.ok(SWIM_BUOYANCY_ACCEL>0);
 const floatMs=terminalBuoyancySpeed();
 assert.ok(floatMs>1.2&&floatMs<1.7,`BCD float ${floatMs} should stay well below arcade 2.8`);
 assert.ok(floatMs<terminalSwimSpeed(false)*.8,'pure BCD slower than cruise kick');
 const m=new Mission(true);assert.equal(m.buoyancy,0);assert.equal(m.buoyancyTrim,0);
});
test('releasing BCD stops vertical drift after trim and coast',()=>{
 let b=0;
 for(let i=0;i<120;i++)b=updateBuoyancy(b,1,1/60);
 const v={x:0,y:0,z:0};
 for(let i=0;i<90;i++)stepSwimVelocity(v,{x:0,y:0,z:0},b,false,1/60);
 assert.ok(v.y>.5,'holding Space builds upward speed');
 // Release Space — buoyancy snaps to 0 and drag kills leftover vy.
 for(let i=0;i<180;i++){
  b=updateBuoyancy(b,0,1/60);
  stepSwimVelocity(v,{x:0,y:0,z:0},b,false,1/60);
 }
 assert.equal(b,0);
 assert.ok(Math.abs(v.y)<.05,`vertical speed should settle near rest, got ${v.y}`);
});
test('look-pitch finning is attenuated; vertical climb is mostly a BCD skill',()=>{
 assert.ok(SWIM_KICK_VERTICAL_SCALE>0&&SWIM_KICK_VERTICAL_SCALE<.5);
 const lookUp={x:0,y:0,z:0};
 for(let i=0;i<180;i++)stepSwimVelocity(lookUp,{x:0,y:1,z:0},0,false,1/60);
 const bcdUp={x:0,y:0,z:0};
 for(let i=0;i<180;i++)stepSwimVelocity(bcdUp,{x:0,y:0,z:0},1,false,1/60);
 assert.ok(lookUp.y>0.05,'finning still adds a bit of vertical thrust');
 assert.ok(bcdUp.y>lookUp.y*1.2,'full BCD outclimbs attenuated look-kick');
 assert.ok(lookUp.y<terminalSwimSpeed(false)*.6,'look-up kick is not equal XYZ flight');
 // Idle can drift toward a non-zero trim target.
 let b=.8;
 for(let i=0;i<240;i++)b=updateBuoyancy(b,0,1/60,.35);
 assert.ok(Math.abs(b-.35)<.08,`trim target drift ${b}`);
});
test('floor sprint kicks a two-phase silt plume; mid-water settling clears coarse first',()=>{
 const plume=createSiltPlume({...START,y:FLOOR_Y+.2});
 for(let i=0;i<90;i++)stepSilt(plume,{x:0,y:FLOOR_Y+.15,z:-12},{x:0,y:-.4,z:-3.2},true,1/60);
 assert.ok(siltLoad(plume)>.55,'bed shear must raise suspended load');
 assert.ok(plume.coarse>plume.fine*.4);
 assert.ok(siltAt(plume,{x:0,y:FLOOR_Y+.2,z:-12})>siltAt(plume,{x:0,y:SURFACE_Y-0.2,z:-12}),'density falls with height');
 const beforeFine=plume.fine,beforeCoarse=plume.coarse;
 for(let i=0;i<180;i++)stepSilt(plume,{x:0,y:4,z:-12},{x:0,y:.6,z:0},false,1/60);
 assert.ok(plume.coarse<beforeCoarse*.35,'coarse settles faster once you leave the bed');
 assert.ok(plume.fine>beforeFine*.25,'fine clay hangs longer');
 const clear=torchModulation(3,0);
 const stormed=applySiltToTorch(clear,.9);
 assert.ok(stormed.distance<clear.distance*.5);
 assert.ok(stormed.beamOpacity>clear.beamOpacity*2);
 assert.ok(stormed.betaBackscatter.r>clear.betaBackscatter.r*2);
 // Muddy taupe cone (Dayo silt stills) — warm beam, not cyan/white fog wall.
 assert.ok(stormed.beamR>stormed.beamB+.12,'silt beam stays warmer than cool murk');
 assert.ok(stormed.beamB<.72,'silt beam must not wash toward white/cyan');
});
test('torch modulation dims and muddies with depth and floor aim',()=>{
 const shallowUp=torchModulation(6.5,-1.2);
 const deepDown=torchModulation(.8,1.2);
 const midLevel=torchModulation(3,0);
 assert.ok(shallowUp.intensity>midLevel.intensity);
 assert.ok(deepDown.intensity<midLevel.intensity);
 assert.ok(deepDown.distance<shallowUp.distance);
 assert.ok(deepDown.decay>shallowUp.decay);
 assert.ok(deepDown.b<shallowUp.b);
 assert.ok(deepDown.beamOpacity<shallowUp.beamOpacity);
 assert.ok(deepDown.particle<shallowUp.particle);
 const column=SURFACE_Y-FLOOR_Y;
 assert.ok((1-hydrostaticDepth(6.5)/column)>(1-hydrostaticDepth(.8)/column));
});
test('torch SpotLight and beam share Beer–Lambert murk (direct ≠ backscatter)',()=>{
 const mid=torchModulation(3,0);
 assert.ok(Math.abs(mid.intensity-TORCH_BASELINE.intensity)<1e-6);
 assert.ok(Math.abs(mid.distance-TORCH_BASELINE.distance)<1e-6);
 assert.ok(Math.abs(mid.decay-TORCH_BASELINE.decay)<1e-6);
 assert.ok(Math.abs(mid.beamOpacity-TORCH_BASELINE.beamOpacity)<1e-6);
 // Sea-thru: β^D ≠ β^B; red dies first on the direct path.
 assert.ok(mid.betaDirect.r!==mid.betaBackscatter.r);
 assert.ok(mid.betaDirect.r>mid.betaDirect.b);
 const deep=torchModulation(.8,1.2);
 const shallow=torchModulation(6.5,-1.2);
 assert.ok(deep.betaDirect.r>shallow.betaDirect.r);
 assert.ok(deep.betaBackscatter.b>shallow.betaBackscatter.b);
 // Same murk drives both channels; beam tint is separate from direct tint.
 assert.ok(deep.beamB!==deep.b||deep.beamR!==deep.r);
 const clear=torchBetas(0).direct;
 const murky=torchBetas(1).direct;
 const tClear=beerLambertTransmit(clear,5);
 const tMurky=beerLambertTransmit(murky,5);
 assert.ok(tClear.r>tMurky.r&&tClear.b>tMurky.b);
 assert.ok(tClear.r<tClear.b&&tMurky.r<tMurky.b); // red attenuates faster than blue
});
test('camera movement right produces positive world X with real Three camera',()=>{const d=lookDelta(0,0,100,0);const c=new THREE.PerspectiveCamera();c.rotation.order='YXZ';c.rotation.set(d.pitch,d.yaw,0);const forward=c.getWorldDirection(new THREE.Vector3());assert.ok(forward.x>0);assert.ok(lookDelta(0,0,-100,0).yaw>0);assert.equal(lookDelta(0,0,0,99999).pitch,-1.4);});
test('unlocked free look supports continuous 360-degree rotation without pressing the OS edge',()=>{
 assert.equal(edgeTurn(500,0,1000),0);
 assert.ok(edgeTurn(550,0,1000)===0&&edgeTurn(450,0,1000)===0);
 assert.ok(edgeTurn(200,0,1000)<0);assert.ok(edgeTurn(800,0,1000)>0);
 assert.equal(edgeTurn(0,0,1000),-1);assert.equal(edgeTurn(1000,0,1000),1);
 // Continuous yaw engages well inside the canvas (hold left/right of center), not only at the rim.
 assert.ok(Math.abs(edgeTurn(200,0,1000))>0.2);
 let yaw=0;for(let i=0;i<360;i++)yaw=lookDelta(yaw,0,edgeTurn(900,0,1000)*FREE_LOOK_RATE/60*650,0).yaw;assert.ok(yaw<-Math.PI*2);
 for(let i=0;i<720;i++)yaw=lookDelta(yaw,0,edgeTurn(100,0,1000)*FREE_LOOK_RATE/60*650,0).yaw;assert.ok(yaw>Math.PI*2);
});
test('five slots: pickup asks before replacing, displaced item is recoverable',()=>{const m=new Mission();m.position={...RELIC};m.interact();assert.equal(m.pending,1);assert.equal(m.hasRelic,false);m.selected=1;m.interact();assert.equal(m.inventory.length,5);assert.equal(m.inventory[1],'relic');assert.equal(m.pickups.filter(x=>x.item==='wood').length,1);m.drop();assert.equal(m.hasRelic,false);m.position={...RELIC};m.interact();assert.equal(m.inventory.length,5);assert.equal(m.pickups.length,2);});
test('extraction requires currently carried objective, dropping it revokes win',()=>{const m=new Mission();m.position={...EXIT};m.interact();assert.equal(m.outcome,'playing');m.position={...RELIC};m.interact();m.interact();assert.ok(m.hasRelic);m.position={...EXIT};m.interact();assert.equal(m.outcome,'won');const elapsed=m.elapsed;m.update(.05);assert.equal(m.elapsed,elapsed);});
test('cancelled / out of range swap cannot remotely collect objective',()=>{const m=new Mission();m.position={...RELIC};m.interact();m.position={...START};m.interact();assert.equal(m.pending,null);assert.equal(m.hasRelic,false);});
test('world collision stops walls, floor, roof, and large movement tunnelling',()=>{const p={...START};moveBody(p,400,0,0);assert.ok(p.x<14);assert.ok(fits(p));moveBody(p,0,100,0);assert.ok(p.y<=SURFACE_Y);moveBody(p,0,-200,0);assert.ok(p.y>=FLOOR_Y);const pillar=world(8,17);moveBody(pillar,20,0,0);assert.ok(pillar.x<-10);assert.ok(fits(pillar));});
test('solid central pillar blocks detection and navigation routes around it',()=>{const a=world(7,17),b=world(15,17);assert.equal(visible(a,b),false);const path=pathBetween(a,b);assert.ok(path.length>0);assert.ok(path.every(p=>fits(p,1.3)));assert.equal(pathBetween(a,EXIT).length,0);});
test('all level cells connect, including objective and exit',()=>{const first=[...cells][0],visited=new Set([first]),queue=[first];for(let i=0;i<queue.length;i++){const [c,r]=queue[i].split(',').map(Number);for(const [dc,dr] of [[1,0],[-1,0],[0,1],[0,-1]]){const k=`${c+dc},${r+dr}`;if(cells.has(k)&&!visited.has(k)){visited.add(k);queue.push(k);}}}assert.equal(visited.size,cells.size);});
test('predator transitions patrol → alert → chase → search → patrol',()=>{const m=new Mission();m.predator.position=world(16,19);m.position=world(16,16);advance(m,.2);assert.equal(m.predator.state,'alert');advance(m,2);assert.equal(m.predator.state,'chase');m.position={...START};advance(m,3);assert.equal(m.predator.state,'search');advance(m,8);assert.equal(m.predator.state,'patrol');});
test('predator cannot see or bite through rock',()=>{const m=new Mission();m.predator.position=world(8,17);m.position=world(13,17);advance(m,.2);assert.equal(m.predator.state,'patrol');assert.equal(m.health,100);});
test('four bites lose the mission; fresh mission resets every system',()=>{const m=new Mission();m.position=world(16,19);m.predator.position={...m.position};m.predator.state='chase';advance(m,6);assert.equal(m.outcome,'lost');assert.equal(m.health,0);const fresh=new Mission();assert.equal(fresh.health,100);assert.equal(fresh.air,AIR_MAIN_MAX);assert.equal(fresh.bailout,0);assert.equal(fresh.outcome,'playing');assert.equal(fresh.pending,null);assert.equal(fresh.pickups[0].item,'relic');assert.deepEqual(fresh.position,START);});
test('air loss, pony bailout, sealant and distraction have tangible effects',()=>{
 const m=new Mission();m.air=100;m.selected=3;m.use();
 assert.equal(m.air,100);assert.equal(m.bailout,AIR_BAILOUT_MAX);assert.equal(m.inventory[3],null);assert.equal(m.feedbackKind,'ok');
 m.use();assert.equal(m.feedbackKind,'blocked'); // slot empty
 m.inventory[3]='air';m.use();assert.equal(m.bailout,AIR_BAILOUT_MAX);assert.equal(m.feedbackKind,'blocked'); // pony already full
 m.health=30;m.selected=4;m.use();assert.equal(m.health,75);
 m.selected=2;m.use();assert.ok(m.decoy);assert.equal(m.predator.state,'search');advance(m,13);assert.equal(m.decoy,null);
 m.air=.01;m.bailout=0;m.update(.05);assert.equal(m.outcome,'lost');
});
test('high-stakes tank empties in well under four minutes at depth',()=>{
 const m=new Mission(true);m.position={...START,y:FLOOR_Y};
 // Floor cruise: ~1.65 ATA × 1 → ~55 s of a 90 s surface tank.
 for(let i=0;i<Math.ceil(70*60);i++)m.update(1/60,false);
 assert.equal(m.outcome,'lost');
 assert.ok(m.elapsed<80,'main tank should die well before the old 4-minute fuse');
});
test('gas drain scales with ATA and sprint; bailout feeds after main',()=>{
 assert.ok(gasDrainRate(FLOOR_Y,false)>gasDrainRate(SURFACE_Y,false));
 assert.ok(gasDrainRate(FLOOR_Y,true)>gasDrainRate(FLOOR_Y,false));
 assert.ok(gasDrainRate(FLOOR_Y,false,true)>gasDrainRate(FLOOR_Y,true));
 assert.ok(Math.abs(gasDrainRate(SURFACE_Y,false)-1)<1e-9);
 const deep=new Mission(true);deep.position={...START,y:FLOOR_Y};
 const shallow=new Mission(true);shallow.position={...START,y:SURFACE_Y};
 for(let i=0;i<60;i++){deep.update(1/60,true);shallow.update(1/60,false);}
 assert.ok(deep.air<shallow.air);
 const m=new Mission(true);m.air=.2;m.bailout=AIR_BAILOUT_MAX;
 for(let i=0;i<20;i++)m.update(.05,false);
 assert.equal(m.air,0);assert.ok(m.bailout<AIR_BAILOUT_MAX);assert.equal(m.outcome,'playing');
 m.bailout=.01;m.update(.2,false);assert.equal(m.outcome,'lost');
});
test('guardian bite raises panic gas effort briefly',()=>{
 const m=new Mission(true);m.position=world(16,19);m.position.y=FLOOR_Y;
 m.predator.position={...m.position};m.predator.state='chase';m.predator.bite=0;
 m.update(.05,false);
 assert.ok(m.gasPanicUntil>m.elapsed);assert.equal(m.health,75);
 const panic=new Mission(true);panic.position={...START,y:FLOOR_Y};panic.gasPanicUntil=1e9;
 const calm=new Mission(true);calm.position={...START,y:FLOOR_Y};
 for(let i=0;i<60;i++){panic.update(1/60,false);calm.update(1/60,false);}
 assert.ok(panic.air<calm.air);
});
test('inventory select/use stay quiet after the one-time first-play tip',()=>{
 const first=new Mission(false);
 assert.match(first.notice,/knife|1–5 select/i);
 assert.equal(first.tipsSeen,false);
 const opening=first.notice;
 assert.equal(first.select(2),true);assert.equal(first.selected,2);assert.equal(first.feedbackKind,'select');assert.equal(first.notice,opening);
 assert.equal(first.select(2),false);
 first.use();assert.equal(first.inventory[2],null);assert.equal(first.feedbackKind,'ok');assert.equal(first.notice,opening);
 first.select(0);first.use();assert.equal(first.inventory[0],'knife');assert.equal(first.feedbackKind,'blocked');assert.equal(first.notice,opening);
 const quiet=new Mission(true);
 assert.equal(quiet.notice,'');assert.equal(quiet.noticeUntil,0);
 quiet.select(3);assert.equal(quiet.feedbackKind,'select');assert.equal(quiet.notice,'');
 quiet.air=100;quiet.use();assert.equal(quiet.inventory[3],null);assert.equal(quiet.feedbackKind,'ok');assert.equal(quiet.notice,'');
 quiet.inventory[1]=null;quiet.select(1);quiet.use();assert.equal(quiet.feedbackKind,'blocked');
 quiet.drop();assert.equal(quiet.feedbackKind,'blocked');
});
test('diving knife starts in slot 1 and stabs apply damage with cooldown',()=>{
 const m=new Mission(true);
 assert.equal(m.inventory[0],'knife');
 assert.equal(m.predator.hp,PREDATOR_HP_MAX);
 m.selected=0;
 m.predator.position={...m.position,z:m.position.z-1.5};
 const look={x:0,y:0,z:-1};
 assert.equal(m.stab(look),'hit');
 assert.equal(m.predator.hp,PREDATOR_HP_MAX-KNIFE_DAMAGE);
 assert.ok(m.predator.raged);
 assert.equal(m.predator.state,'chase');
 assert.equal(m.stab(look),'cooldown');
 m.predator.stabCool=0;
 assert.equal(m.stab({x:0,y:0,z:1}),'miss'); // facing away
});
test('knife wound rages then breaks off at 85% damage; death sinks FSM',()=>{
 const m=new Mission(true);
 m.position=world(16,16);m.predator.position={...m.position,z:m.position.z-1.2};
 m.selected=0;const look={x:0,y:0,z:-1};
 assert.equal(m.stab(look),'hit');assert.ok(m.predator.raged);assert.equal(m.predator.state,'chase');
 m.predator.stabCool=0;m.predator.flinch=0;
 assert.equal(m.stab(look),'hit');assert.ok(m.predator.raged);
 m.predator.stabCool=0;m.predator.flinch=0;
 assert.equal(m.stab(look),'hit');
 assert.ok(m.predator.hp<=PREDATOR_BREAK_HP&&m.predator.hp>0);
 assert.equal(m.predator.state,'damaged');assert.equal(m.predator.raged,false);
 assert.match(m.notice,/breaks off|wounded/i);
 m.predator.stabCool=0;m.predator.flinch=0;
 assert.equal(m.stab(look),'hit');
 assert.equal(m.predator.hp,0);assert.equal(m.predator.state,'dead');
 assert.match(m.notice,/Guardian down/i);
 const y0=m.predator.position.y;
 advance(m,4);
 assert.ok(m.predator.position.y<y0);
 assert.ok(m.predator.position.y<=FLOOR_Y+1);
 // Dead guardian no longer bites.
 const health=m.health;m.position={...m.predator.position};advance(m,3);assert.equal(m.health,health);
 assert.equal(m.outcome,'playing');
});
test('safe narrow passage prevents bites and leaves an escape route',()=>{const m=new Mission();m.position=world(19,20);m.predator.position=world(18,20);m.predator.state='chase';m.predator.lastKnown={...m.position};advance(m,3);assert.equal(m.health,100);assert.equal(m.predator.state,'search');assert.ok(m.predator.position.x<30);});
