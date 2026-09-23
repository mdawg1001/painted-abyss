import {test} from 'node:test';
import assert from 'node:assert/strict';
import {
 Mission,distance,tile,world,visible,FLOOR_Y,WALK_EYE_Y,
 breathZone,breathHatchSpawn,inBreathCorridor,canWalkBreath,BREATH_WALK_WATER,
 guardSpawnPoint,guardPatrolPoints,pathBreath,breathCell,
 GUARD_MELEE_RANGE,GUARD_MELEE_DAMAGE,GUARD_COAT_DAMAGE_MULT,GUARD_GUN_DAMAGE,
 GUARD_BOTTLE_AIR,GUARD_LOOT_RANGE,SPARE_BOTTLE_LITRES,
} from '../src/simulation';
import {
 SOVIET_GUARD_SOURCE,SOVIET_GUARD_AUTHOR,SOVIET_GUARD_LICENSE,SOVIET_GUARD_GLB,SOVIET_GUARD_HEIGHT,
} from '../src/sovietGuardAsset';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');

test('Soviet guard asset is credited and the glb is present',()=>{
 assert.match(SOVIET_GUARD_SOURCE,/f85a4ed8c33a43eca1a7caa45f7acf99/);
 assert.equal(SOVIET_GUARD_AUTHOR,'tnnv');
 assert.match(SOVIET_GUARD_LICENSE,/CC BY/);
 assert.equal(SOVIET_GUARD_GLB,'/assets/soviet-uniform/ww2_soviet_uniform.glb');
 assert.ok(SOVIET_GUARD_HEIGHT>=1.9&&SOVIET_GUARD_HEIGHT<=2.05);
 const glb=path.join(root,'public/assets/soviet-uniform/ww2_soviet_uniform.glb');
 assert.ok(fs.existsSync(glb),'glb must ship under public/assets');
 const buf=fs.readFileSync(glb);
 assert.equal(buf.toString('ascii',0,4),'glTF');
 const notice=fs.readFileSync(path.join(root,'NOTICE.md'),'utf8');
 assert.match(notice,/WW2 Soviet Uniform/);
 assert.match(notice,/tnnv/);
 assert.match(notice,/CC BY 4\.0/);
});

test('guard spawns and patrols only inside the breath corridor',()=>{
 const spawn=guardSpawnPoint();
 assert.ok(inBreathCorridor(spawn));
 assert.equal(breathZone(tile(spawn).col,tile(spawn).row),'middle');
 assert.ok(distance(spawn,breathHatchSpawn())>4,'clear of hatch');
 for(const p of guardPatrolPoints()){
  assert.ok(inBreathCorridor(p));
  assert.notEqual(breathZone(tile(p).col,tile(p).row),'');
 }
 const m=new Mission(true);
 assert.ok(inBreathCorridor(m.guard.position));
 assert.equal(m.guard.gun,false);
 assert.equal(m.guard.bottle,false);
 assert.equal(m.guard.coat,false);
});

test('pathBreath stays on corridor cells and never enters the cave',()=>{
 const a=guardSpawnPoint();
 const b=world(10,-6);b.y=WALK_EYE_Y;
 const path=pathBreath(a,b);
 assert.ok(path.length>=1);
 for(const p of path){
  const t=tile(p);
  assert.ok(breathCell(t.col,t.row),`step ${t.col},${t.row}`);
 }
 const cave=world(16,19);
 assert.deepEqual(pathBreath(a,cave),[]);
});

test('guard walks dry floor and stops where water is too deep',()=>{
 const m=new Mission(true);
 m.guard.position={...guardSpawnPoint()};
 m.guard.state='chase';
 m.guard.lastKnown={...m.position};
 m.breathWaterY=BREATH_WALK_WATER+.2;
 assert.equal(canWalkBreath(m.guard.position,m.breathWaterY),false);
 const before={...m.guard.position};
 m.update(.05,false);
 assert.ok(distance(m.guard.position,before)<.05,'does not wade into deep water');
 // With dry water he can close distance along the corridor.
 m.breathWaterY=FLOOR_Y-.1;
 m.position={x:m.guard.position.x,y:WALK_EYE_Y,z:m.guard.position.z+6};
 m.guard.state='chase';
 m.guard.lastKnown={...m.position};
 m.guard.meleeCool=9;
 m.guard.shootCool=9;
 const startZ=m.guard.position.z;
 for(let i=0;i<40;i++)m.update(.05,false);
 assert.ok(Math.abs(m.guard.position.z-startZ)>.4||distance(m.guard.position,m.position)<distance({...m.guard.position,z:startZ},m.position));
 assert.ok(canWalkBreath(m.guard.position,m.breathWaterY));
});

test('guard cannot see through walls',()=>{
 const m=new Mission(true);
 // Put guard in corridor and player behind the central pillar void (classic LOS break).
 m.guard.position={...guardSpawnPoint()};
 m.position=world(11,17); // inside deleted pillar cells region-ish — use known blocked pair
 // Use two points with a solid between them: hatch vs deep cave shelf with wall.
 m.position={x:20,y:3,z:-60};
 assert.equal(visible(m.guard.position,m.position),false);
 m.guard.state='patrol';
 m.guard.timer=0;
 m.update(.2,false);
 assert.equal(m.guard.state,'patrol','no alert without LOS');
});

test('guard melee kills, claims corpse gear, and uses gun / bottle / coat',()=>{
 const m=new Mission(true);
 // Clear corridor floor gear so only corpse drops are claimable nearby.
 m.pickups=m.pickups.filter(p=>p.item!=='gun'&&p.item!=='bottle'&&p.item!=='coat');
 m.inventory=['gun','bottle','coat',null,null];
 m.position={...m.guard.position};
 m.position.z+=GUARD_MELEE_RANGE*.4;
 m.guard.state='chase';
 m.guard.lastKnown={...m.position};
 m.guard.meleeCool=0;
 m.guard.gun=false;m.guard.bottle=false;m.guard.coat=false;
 m.health=GUARD_MELEE_DAMAGE; // one strike kills
 m.update(.05,false);
 assert.equal(m.outcome,'lost');
 assert.equal(m.killedByGuard,true);
 m.respawnAtHatch();
 assert.equal(m.guard.gun,true);
 assert.equal(m.guard.bottle,true);
 assert.equal(m.guard.coat,true);
 assert.equal(m.guard.air,GUARD_BOTTLE_AIR);
 assert.equal(GUARD_BOTTLE_AIR,SPARE_BOTTLE_LITRES);
 assert.ok(!m.pickups.some(p=>p.item==='gun'&&distance(p.position,m.guard.position)<GUARD_LOOT_RANGE));
 // Coat softens his next melee after respawn.
 m.position={...m.guard.position};
 m.position.z+=.5;
 m.guard.state='chase';
 m.guard.meleeCool=0;
 m.guard.shootCool=9; // force melee path
 const before=m.health;
 m.update(.05,false);
 const expected=Math.round(GUARD_MELEE_DAMAGE*GUARD_COAT_DAMAGE_MULT);
 assert.equal(before-m.health,expected);
 // Gun shoots for GUARD_GUN_DAMAGE (coat-softened) when out of melee.
 m.health=100;
 m.guard.meleeCool=9;
 m.guard.shootCool=0;
 m.position={...m.guard.position};
 m.position.z+=6;
 m.guard.state='chase';
 m.guard.lastKnown={...m.position};
 // Ensure LOS along open corridor
 assert.ok(visible(m.guard.position,m.position));
 const hp=m.health;
 m.update(.05,false);
 assert.equal(hp-m.health,Math.round(GUARD_GUN_DAMAGE*GUARD_COAT_DAMAGE_MULT));
});

test('player coat still does not reduce a guardian bite',()=>{
 const coated=new Mission(true);
 coated.inventory=['coat','knife','wood','flare','air'];
 coated.selected=0;
 coated.position=world(16,19);
 coated.predator.position={...coated.position};
 coated.predator.state='chase';
 coated.predator.bite=0;
 // Keep guard away so only the ichthyosaur hits.
 coated.guard.position={...breathHatchSpawn()};
 coated.guard.meleeCool=99;
 coated.guard.shootCool=99;
 coated.update(.05);
 assert.equal(coated.health,75);
});
