import {test} from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import {Mission,START,RELIC,EXIT,world,moveBody,visible,fits,pathBetween,lookDelta,edgeTurn,FREE_LOOK_RATE,torchModulation,TORCH_BASELINE,beerLambertTransmit,torchBetas,distance,cells,SURFACE_Y,FLOOR_Y,hydrostaticDepth,ata,gasDrainRate,AIR_MAIN_MAX,AIR_BAILOUT_MAX,AIR_MAIN_LITRES,AIR_BAILOUT_LITRES,SAC_CRUISE_LPM,updateBuoyancy,updateBuoyancyTrim,stepSwimVelocity,terminalSwimSpeed,terminalBuoyancySpeed,PREDATOR_SPEED,SWIM_BUOYANCY_ACCEL,SWIM_KICK_VERTICAL_SCALE,BCD_TRIM_BIAS_MAX,KNIFE_RANGE,BITE_RANGE,KNIFE_DAMAGE,KNIFE_COOLDOWN,PREDATOR_HP_MAX,PREDATOR_BREAK_HP,createDiveChests,CHEST_LABEL,chestHasLid,chestInteractPrompt,MAP_FRAGMENT_ORDER,MAP_FRAGMENT_LABEL,torchShouldShine,holdingTorchItem,occupiesFpsHand,predatorSpawnCandidates,randomPredatorSpawn,PREDATOR_SPAWN_CELLS,playerSpawnCandidates,randomPlayerSpawn,PLAYER_SPAWN_CELLS,SPAWN_SEPARATION,breathHatchSpawn,isolateGuards,PREDATOR_SWIM_DEPTH,
} from '../src/simulation';
const advance=(m:Mission,seconds:number)=>{isolateGuards(m);for(let i=0;i<seconds*60;i++)m.update(1/60);};
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
test('five slots full: one E swaps into the selected slot, displaced item is recoverable',()=>{const m=new Mission();m.inventory=['knife','wood','flare','air','bandage'];m.selected=0;m.position={...RELIC};m.selected=1;m.interact();assert.equal(m.pending,null);assert.equal(m.inventory.length,5);assert.equal(m.inventory[1],'relic');assert.equal(m.pickups.filter(x=>x.item==='wood').length,1);m.drop();assert.equal(m.hasRelic,false);m.position={...RELIC};m.interact();assert.equal(m.inventory.length,5);assert.equal(m.pickups.length,5);assert.equal(m.pickups.filter(p=>p.item==='gun'||p.item==='bottle'||p.item==='coat').length,3);});
test('extraction requires currently carried objective, dropping it revokes win',()=>{const m=new Mission();m.position={...EXIT};m.interact();assert.equal(m.outcome,'playing');m.position={...RELIC};m.interact();m.interact();assert.ok(m.hasRelic);m.position={...EXIT};m.interact();assert.equal(m.outcome,'won');const elapsed=m.elapsed;m.update(.05);assert.equal(m.elapsed,elapsed);});
test('out of range E cannot remotely collect the objective',()=>{const m=new Mission();m.position={...START};m.interact();assert.equal(m.pending,null);assert.equal(m.hasRelic,false);});
test('world collision stops walls, floor, roof, and large movement tunnelling',()=>{const p={...START};moveBody(p,400,0,0);assert.ok(p.x<14);assert.ok(fits(p));moveBody(p,0,100,0);assert.ok(p.y<=SURFACE_Y);moveBody(p,0,-200,0);assert.ok(p.y>=FLOOR_Y);const pillar=world(8,17);moveBody(pillar,20,0,0);assert.ok(pillar.x<-10);assert.ok(fits(pillar));});
test('solid central pillar blocks detection and navigation routes around it',()=>{const a=world(7,17),b=world(15,17);assert.equal(visible(a,b),false);const path=pathBetween(a,b);assert.ok(path.length>0);assert.ok(path.every(p=>fits(p,1.3)));assert.equal(pathBetween(a,EXIT).length,0);});
test('all level cells connect, including objective and exit',()=>{const first=[...cells][0],visited=new Set([first]),queue=[first];for(let i=0;i<queue.length;i++){const [c,r]=queue[i].split(',').map(Number);for(const [dc,dr] of [[1,0],[-1,0],[0,1],[0,-1]]){const k=`${c+dc},${r+dr}`;if(cells.has(k)&&!visited.has(k)){visited.add(k);queue.push(k);}}}assert.equal(visited.size,cells.size);});
test('player spawn candidates span distant open-floor regions of the map',()=>{
 const picks=playerSpawnCandidates();
 assert.ok(picks.length>=12);
 for(const p of picks){
  assert.ok(fits(p,.48));
  const t={col:Math.round(p.x/4)+11,row:Math.round(-p.z/4)};
  assert.ok(cells.has(`${t.col},${t.row}`));
 }
 assert.equal(PLAYER_SPAWN_CELLS.length,picks.length);
 assert.ok(picks.some(p=>p.x===START.x&&p.z===START.z),'classic START remains a candidate');
 // Distinct regions: entrance, exit arm, deep north — not one chamber cluster.
 assert.ok(picks.some(p=>distance(p,START)<5));
 assert.ok(picks.some(p=>distance(p,EXIT)<16));
 assert.ok(picks.some(p=>distance(p,RELIC)<40));
 const depths=picks.map(p=>-p.z);
 assert.ok(Math.max(...depths)-Math.min(...depths)>80,'spawn Z span should cover most of the cave length');
 // Prefer regional corners: most pairs should not be neighbouring tiles.
 let close=0;
 for(let i=0;i<picks.length;i++)for(let j=i+1;j<picks.length;j++)if(distance(picks[i],picks[j])<12)close++;
 assert.ok(close<=3,'curated set should avoid a tight same-chamber cluster');
});
test('predator spawn candidates are open cavern floor away from the diver start',()=>{
 const picks=predatorSpawnCandidates(START);
 assert.ok(picks.length>=6);
 for(const p of picks){
  assert.ok(fits(p,1.3));
  assert.ok(distance(p,START)>SPAWN_SEPARATION);
  const t={col:Math.round(p.x/4)+11,row:Math.round(-p.z/4)};
  assert.ok(t.col>=4&&t.col<=18&&t.row>=12&&t.row<=28);
  assert.ok(cells.has(`${t.col},${t.row}`));
 }
 assert.equal(PREDATOR_SPAWN_CELLS.length>=picks.length,true);
});
test('each new mission rolls diver and predator spawns with separation',()=>{
 const playerKeys=new Set<string>();
 const predatorKeys=new Set<string>();
 let i=0;
 const rand=()=>((i++)%Math.max(PLAYER_SPAWN_CELLS.length,PREDATOR_SPAWN_CELLS.length))/Math.max(PLAYER_SPAWN_CELLS.length,PREDATOR_SPAWN_CELLS.length);
 for(let n=0;n<PLAYER_SPAWN_CELLS.length*2;n++){
  const p=randomPlayerSpawn(rand);
  playerKeys.add(`${p.x},${p.z}`);
  assert.ok(playerSpawnCandidates().some(c=>c.x===p.x&&c.z===p.z));
 }
 assert.ok(playerKeys.size>=8,'diver spawn should cover many distant regions across dives');
 i=0;
 for(let n=0;n<PREDATOR_SPAWN_CELLS.length*2;n++){
  const p=randomPredatorSpawn(rand,START);
  predatorKeys.add(`${p.x},${p.z}`);
  assert.ok(predatorSpawnCandidates(START).some(c=>c.x===p.x&&c.z===p.z));
 }
 assert.ok(predatorKeys.size>=4,'spawn should cover multiple cavern corners across dives');
 const hatch=breathHatchSpawn();
 const a=new Mission(true),b=new Mission(true),c=new Mission(true);
 for(const m of [a,b,c]){
  assert.ok(fits(m.position,.48));
  assert.equal(m.position.x,hatch.x);
  assert.equal(m.position.z,hatch.z);
  assert.ok(fits(m.predator.position,1.3));
  assert.ok(distance(m.predator.position,m.position)>SPAWN_SEPARATION);
  assert.deepEqual(m.predator.lastKnown,m.predator.position);
 }
 // Far-region diver starts still leave the guardian somewhere else that dive.
 for(let n=0;n<40;n++){
  const m=new Mission(true);
  assert.ok(distance(m.predator.position,m.position)>SPAWN_SEPARATION);
  assert.ok(predatorSpawnCandidates(m.position).length>=1);
 }
});
test('predator transitions patrol → alert → chase → search → patrol',()=>{const m=new Mission();m.breathWaterY=FLOOR_Y+PREDATOR_SWIM_DEPTH+.3;isolateGuards(m); /* keep the armed corridor squad out of this predator-only test */m.predator.position=world(16,19);m.position=world(16,16);advance(m,.2);assert.equal(m.predator.state,'alert');advance(m,2);assert.equal(m.predator.state,'chase');m.position={...START};advance(m,3);assert.equal(m.predator.state,'search');advance(m,8);assert.equal(m.predator.state,'patrol');});
test('predator cannot see or bite through rock',()=>{const m=new Mission();m.predator.position=world(8,17);m.position=world(13,17);advance(m,.2);assert.equal(m.predator.state,'patrol');assert.equal(m.health,100);});
test('four bites lose the mission; fresh mission resets every system',()=>{const m=new Mission();m.breathWaterY=FLOOR_Y+PREDATOR_SWIM_DEPTH+.3;m.position=world(16,19);m.predator.position={...m.position};m.predator.state='chase';advance(m,6);assert.equal(m.outcome,'lost');assert.equal(m.health,0);const fresh=new Mission();fresh.breathWaterY=FLOOR_Y+PREDATOR_SWIM_DEPTH+.3;assert.equal(fresh.health,100);assert.equal(fresh.air,AIR_MAIN_MAX);assert.equal(fresh.bailout,0);assert.equal(fresh.outcome,'playing');assert.equal(fresh.pending,null);assert.equal(fresh.pickups[0].item,'relic');assert.ok(fits(fresh.position,.48));assert.equal(fresh.position.x,breathHatchSpawn().x);assert.equal(fresh.position.z,breathHatchSpawn().z);assert.ok(distance(fresh.predator.position,fresh.position)>SPAWN_SEPARATION);});
test('air loss, pony bailout, sealant and distraction have tangible effects',()=>{
 const m=new Mission();m.breathWaterY=FLOOR_Y+PREDATOR_SWIM_DEPTH+.3;m.inventory=['knife','wood','flare','air','bandage'];m.selected=0;m.air=20;m.selected=3;m.use();
 assert.equal(m.air,20);assert.equal(m.bailout,AIR_BAILOUT_LITRES);assert.equal(m.inventory[3],null);assert.equal(m.feedbackKind,'ok');
 m.use();assert.equal(m.feedbackKind,'blocked'); // slot empty
 m.inventory[3]='air';m.use();assert.equal(m.bailout,AIR_BAILOUT_LITRES);assert.equal(m.feedbackKind,'blocked'); // pony already full
 m.health=30;m.selected=4;m.use();assert.equal(m.health,75);
 m.selected=2;m.use();assert.ok(m.decoy);assert.equal(m.predator.state,'search');advance(m,13);assert.equal(m.decoy,null);
 // Drown in the flooded cave — hatch free-air does not burn the tank.
 m.breathWaterY=SURFACE_Y;m.position={...START};m.air=.01;m.bailout=0;isolateGuards(m);m.update(.05);assert.equal(m.outcome,'lost');
});
test('main tank empties in well under four minutes at depth',()=>{
 const m=new Mission(true);isolateGuards(m);m.position={...START,y:FLOOR_Y};m.breathWaterY=SURFACE_Y; // fully flooded bunker
 // Floor cruise: ~1.65 ATA × 0.3 L/s → ~202 s of a 100 L surface tank.
 for(let i=0;i<Math.ceil(230*60);i++)m.update(1/60,false);
 assert.equal(m.outcome,'lost');
 assert.ok(m.elapsed<240,'main tank should die under four minutes at floor cruise');
});
test('gas drain scales with ATA and sprint; bailout feeds after main',()=>{
 assert.ok(gasDrainRate(FLOOR_Y,false)>gasDrainRate(SURFACE_Y,false));
 assert.ok(gasDrainRate(FLOOR_Y,true)>gasDrainRate(FLOOR_Y,false));
 assert.ok(gasDrainRate(FLOOR_Y,false,true)>gasDrainRate(FLOOR_Y,true));
 assert.ok(Math.abs(gasDrainRate(SURFACE_Y,false)-(SAC_CRUISE_LPM/60))<1e-9);
 assert.equal(AIR_MAIN_LITRES,100);
 assert.equal(AIR_BAILOUT_LITRES,9);
 const deep=new Mission(true);isolateGuards(deep);deep.position={...START,y:FLOOR_Y};deep.breathWaterY=SURFACE_Y;
 const shallow=new Mission(true);isolateGuards(shallow);shallow.position={...START,y:SURFACE_Y};shallow.breathWaterY=SURFACE_Y;
 for(let i=0;i<60;i++){deep.update(1/60,true);shallow.update(1/60,false);}
 assert.ok(deep.air<shallow.air);
 const m=new Mission(true);isolateGuards(m);m.position={...START};m.breathWaterY=SURFACE_Y;m.air=.2;m.bailout=AIR_BAILOUT_LITRES;
 for(let i=0;i<20;i++)m.update(.05,false);
 assert.equal(m.air,0);assert.ok(m.bailout<AIR_BAILOUT_LITRES);assert.equal(m.outcome,'playing');
 m.bailout=.01;m.update(.2,false);assert.equal(m.outcome,'lost');
});
test('player can lock a non-zero trim bias that idle buoyancy settles onto',()=>{
 let trim=0;
 for(let i=0;i<180;i++)trim=updateBuoyancyTrim(trim,1,1/60);
 assert.ok(trim>BCD_TRIM_BIAS_MAX*.85);
 assert.ok(trim<=BCD_TRIM_BIAS_MAX+1e-9);
 let b=0;
 for(let i=0;i<180;i++)b=updateBuoyancy(b,0,1/60,trim);
 assert.ok(Math.abs(b-trim)<.08,'idle settles onto locked bias');
 trim=0;b=.4;
 for(let i=0;i<180;i++)b=updateBuoyancy(b,0,1/60,trim);
 assert.equal(b,0);
});
test('guardian bite raises panic gas effort briefly',()=>{
 const m=new Mission(true);isolateGuards(m);m.position=world(16,19);m.position.y=FLOOR_Y;m.breathWaterY=SURFACE_Y;
 m.predator.position={...m.position};m.predator.state='chase';m.predator.bite=0;
 m.update(.05,false);
 assert.ok(m.gasPanicUntil>m.elapsed);assert.equal(m.health,75);
 const panic=new Mission(true);isolateGuards(panic);panic.position={...START,y:FLOOR_Y};panic.gasPanicUntil=1e9;panic.breathWaterY=SURFACE_Y;
 const calm=new Mission(true);isolateGuards(calm);calm.position={...START,y:FLOOR_Y};calm.breathWaterY=SURFACE_Y;
 for(let i=0;i<60;i++){panic.update(1/60,false);calm.update(1/60,false);}
 assert.ok(panic.air<calm.air);
});
test('inventory select/use stay quiet after the one-time first-play tip',()=>{
 const first=new Mission(false);first.inventory=['knife','wood','flare','air','bandage'];first.selected=0;
 assert.match(first.notice,/knife|1–5 select/i);
 assert.equal(first.tipsSeen,false);
 const opening=first.notice;
 assert.equal(first.select(2),true);assert.equal(first.selected,2);assert.equal(first.feedbackKind,'select');assert.equal(first.notice,opening);
 assert.equal(first.select(2),false);
 first.use();assert.equal(first.inventory[2],null);assert.equal(first.feedbackKind,'ok');assert.equal(first.notice,opening);
 first.select(0);first.use();assert.equal(first.inventory[0],'knife');assert.equal(first.feedbackKind,'blocked');assert.equal(first.notice,opening);
 const quiet=new Mission(true);quiet.inventory=['knife','wood','flare','air','bandage'];quiet.selected=0;
 assert.equal(quiet.notice,'');assert.equal(quiet.noticeUntil,0);
 quiet.select(3);assert.equal(quiet.feedbackKind,'select');assert.equal(quiet.notice,'');
 quiet.air=100;quiet.use();assert.equal(quiet.inventory[3],null);assert.equal(quiet.feedbackKind,'ok');assert.equal(quiet.notice,'');
 quiet.inventory[1]=null;quiet.select(1);quiet.use();assert.equal(quiet.feedbackKind,'blocked');
 quiet.drop();assert.equal(quiet.feedbackKind,'blocked');
});
test('torch shine follows the held prop, not merely the F flag',()=>{
 assert.equal(occupiesFpsHand('knife'),true);
 assert.equal(occupiesFpsHand('gun'),true);
 assert.equal(occupiesFpsHand('bottle'),false);
 assert.equal(occupiesFpsHand('coat'),false);
 assert.equal(occupiesFpsHand('wood'),false);
 assert.equal(occupiesFpsHand(null),false);
 assert.equal(holdingTorchItem('knife'),false);
 assert.equal(holdingTorchItem('wood'),true);
 assert.equal(holdingTorchItem('flare'),true);
 assert.equal(holdingTorchItem('air'),true);
 assert.equal(holdingTorchItem('bandage'),true);
 assert.equal(holdingTorchItem('relic'),true);
 assert.equal(holdingTorchItem(null),true);
 // F on + torch in hand → shine.
 assert.equal(torchShouldShine(true,'wood'),true);
 assert.equal(torchShouldShine(true,null),true);
 // Knife (or any hand-prop) out → no beam, no SpotLight, no lens glow.
 assert.equal(torchShouldShine(true,'knife'),false);
 assert.equal(torchShouldShine(true,'gun'),false);
 // F off → dark even with torch in hand.
 assert.equal(torchShouldShine(false,'wood'),false);
 assert.equal(torchShouldShine(false,'knife'),false);
 const m=new Mission(true);m.inventory=['knife','wood','flare','air','bandage'];m.selected=0;
 assert.equal(m.inventory[m.selected],'knife');
 assert.equal(m.torch,true);
 assert.equal(torchShouldShine(m.torch,m.inventory[m.selected]),false);
 m.select(1);
 assert.equal(m.inventory[m.selected],'wood');
 assert.equal(torchShouldShine(m.torch,m.inventory[m.selected]),true);
 m.torch=false;
 assert.equal(torchShouldShine(m.torch,m.inventory[m.selected]),false);
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
test('safe narrow passage prevents bites and leaves an escape route',()=>{const m=new Mission();m.breathWaterY=FLOOR_Y+PREDATOR_SWIM_DEPTH+.3;m.position=world(19,20);m.predator.position=world(18,20);m.predator.state='chase';m.predator.lastKnown={...m.position};advance(m,3);assert.equal(m.health,100);assert.equal(m.predator.state,'search');assert.ok(m.predator.position.x<30);});
test('three distinct Poly Haven chests sit in the cavern and open with E',()=>{
 const chests=createDiveChests();
 assert.equal(chests.length,3);
 assert.deepEqual(chests.map(c=>c.kind).sort(),['military','plastic','suitcase']);
 assert.deepEqual(chests.map(c=>c.fragment).sort(),['deep','east','west']);
 assert.ok(chests.every(c=>!c.open&&Number.isFinite(c.yaw)));
 const m=new Mission(true);
 assert.equal(m.chests.length,3);
 assert.equal(m.mapFragmentCount,0);
 assert.equal(m.mapComplete,false);
 const target=m.chests.find(c=>c.kind==='military')!;
 m.position={x:target.position.x,y:3,z:target.position.z};
 assert.equal(m.nearestChest()?.id,target.id);
 // First E opens only — scrap stays inside.
 m.interact();
 assert.equal(target.open,true);
 assert.equal(m.mapFragmentCount,0);
 assert.match(m.notice,/Opened the military crate/i);
 assert.match(m.notice,/chart scrap rests inside/i);
 // Second E takes the physical scroll.
 m.interact();
 assert.equal(m.mapFragmentCount,1);
 assert.ok(m.hasMapFragment('west'));
 assert.match(m.notice,/Map fragment \(1\/3\).*west cavern/i);
 assert.match(m.notice,/Tab/i);
 m.interact();
 assert.match(m.notice,/empty/i);
 // Restart restores closed chests and clears scraps.
 const fresh=new Mission(true);
 assert.ok(fresh.chests.every(c=>!c.open));
 assert.equal(fresh.mapFragmentCount,0);
 assert.equal(CHEST_LABEL.suitcase,'vintage suitcase');
});
test('plastic crate is grab-only: one E takes the scrap and the crate stays shut',()=>{
 const m=new Mission(true);
 const chest=m.chests.find(c=>c.kind==='plastic')!;
 assert.equal(chestHasLid('plastic'),false);
 assert.equal(chestHasLid('military'),true);
 assert.equal(chestHasLid('suitcase'),true);
 assert.equal(chest.open,false);
 m.position={x:chest.position.x,y:3,z:chest.position.z};
 assert.equal(chestInteractPrompt(chest,false),'E · Grab chart scrap');
 m.interact();
 assert.equal(chest.open,false);
 assert.ok(m.hasMapFragment('east'));
 assert.equal(m.mapFragmentCount,1);
 assert.doesNotMatch(m.notice,/Opened/i);
 assert.match(m.notice,/east shelf/i);
 assert.equal(chestInteractPrompt(chest,m.hasMapFragment(chest.fragment)),'The plastic crate is empty');
 m.interact();
 assert.match(m.notice,/empty/i);
 assert.equal(chest.open,false);
 const military=m.chests.find(c=>c.kind==='military')!;
 assert.equal(chestInteractPrompt(military,false),'E · Open military crate');
 military.open=true;
 assert.equal(chestInteractPrompt(military,false),'E · Take chart scrap');
});
test('opening all three crates fits the cave chart and Tab toggles the overlay',()=>{
 const m=new Mission(true);
 assert.equal(m.mapOpen,false);
 assert.ok(m.toggleMap());
 assert.equal(m.mapOpen,true);
 assert.ok(m.toggleMap());
 assert.equal(m.mapOpen,false);
 for(const id of MAP_FRAGMENT_ORDER){
  const chest=m.chests.find(c=>c.fragment===id)!;
  m.position={x:chest.position.x,y:3,z:chest.position.z};
  if(!chestHasLid(chest.kind)){
   m.interact();
   assert.equal(chest.open,false);
   assert.ok(m.hasMapFragment(id));
  }else{
   m.interact();
   assert.equal(chest.open,true);
   assert.equal(m.hasMapFragment(id),false);
   m.interact();
   assert.ok(m.hasMapFragment(id));
  }
 }
 assert.equal(m.mapFragmentCount,3);
 assert.equal(m.mapComplete,true);
 assert.match(m.notice,/Map complete/i);
 assert.equal(MAP_FRAGMENT_LABEL.east,'east shelf');
 // Duplicate scrap is ignored.
 assert.equal(m.collectMapFragment('west'),false);
 assert.equal(m.mapFragmentCount,3);
});

test('rapid clicks become rapid stabs: the arm recovers in about a quarter second',()=>{
 assert.ok(KNIFE_COOLDOWN<=.3,'three clicks in under a second can all land');
 const m=new Mission(true);
 isolateGuards(m);
 m.position=world(16,16);m.predator.position={...m.position,z:m.position.z-1.2};
 m.selected=0;const look={x:0,y:0,z:-1};
 let hits=0;
 for(let t=0;t<.85;t+=.05){
  if(m.stab(look)==='hit')hits++;
  m.predator.flinch=0;m.predator.position={...m.position,z:m.position.z-1.2};
  m.update(.05,false);
 }
 assert.ok(hits>=3,`three stabs land inside 0.85 s (got ${hits})`);
});

test('the knife keeps working after the guardian is dead',()=>{
 const m=new Mission(true);
 isolateGuards(m);
 m.position=world(16,16);m.predator.position={...m.position,z:m.position.z-1.2};
 m.selected=0;m.predator.hp=0;m.predator.state='dead';
 const look={x:0,y:0,z:-1};
 assert.equal(m.stab(look),'miss');
 for(let i=0;i<8;i++)m.update(.05,false);
 assert.notEqual(m.stab(look),'cooldown','arm recovers even with no living guardian');
});
