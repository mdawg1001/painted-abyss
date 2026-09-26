import test from 'node:test';
import assert from 'node:assert/strict';
import {ITEM_BODY,itemDensity,itemFloats,stepBody,floatBottom,verticalAccel,GRAVITY,WATER_DENSITY,type BodyState} from '../src/propPhysics.ts';
import {Mission,FLOOR_Y,RELIC,RELIC_PLINTH,supportHeight,createDiveChests,STASH_POSITION,type Item} from '../src/simulation.ts';

const run=(item:Item,y:number,waterY:number,seconds:number,ground=FLOOR_Y)=>{
 const p={x:0,y,z:0},s:BodyState={vy:0,resting:false};
 for(let t=0;t<seconds;t+=1/60)stepBody(item,p,s,1/60,waterY,ground);
 return{p,s};
};

test('densities follow the real materials: steel, stone and fossil sink; wood and flare float',()=>{
 for(const i of ['knife','stone','relic','gun','bottle','air','coat'] as Item[])assert.ok(!itemFloats(i),`${i} ${itemDensity(i).toFixed(0)} kg/m³ sinks`);
 for(const i of ['wood','flare','bandage'] as Item[])assert.ok(itemFloats(i),`${i} ${itemDensity(i).toFixed(0)} kg/m³ floats`);
});

test('a dropped item in air falls like a stone: ~g for the first instant, lands, stops',()=>{
 assert.ok(Math.abs(verticalAccel('stone',2,0,-10)+GRAVITY)<.05,'free fall ≈ −9.81 m/s² in air');
 // 1.5 m drop: t = sqrt(2h/g) ≈ 0.553 s.
 const p={x:0,y:FLOOR_Y+1.5,z:0},s:BodyState={vy:0,resting:false};
 let t=0;while(p.y>FLOOR_Y+1e-6&&t<2){stepBody('stone',p,s,1/240,-10,FLOOR_Y);t+=1/240;}
 assert.ok(Math.abs(t-Math.sqrt(2*1.5/GRAVITY))<.02,`landing time ${t.toFixed(3)} s`);
 const end=run('stone',FLOOR_Y+1.5,-10,2);
 assert.equal(end.p.y,FLOOR_Y);assert.ok(end.s.resting,'comes to rest, no endless bounce');
});

test('in water sinkers settle on the floor and floaters ride the surface at their draft',()=>{
 const water=FLOOR_Y+1.2;
 const knife=run('knife',FLOOR_Y+1.0,water,6);
 assert.equal(knife.p.y,FLOOR_Y);
 const wood=run('wood',FLOOR_Y,water,12);
 const expect=floatBottom('wood',water)!;
 assert.ok(Math.abs(wood.p.y-expect)<.01,`driftwood floats at ${wood.p.y.toFixed(3)} (draft ${expect.toFixed(3)})`);
 assert.ok(Math.abs(wood.s.vy)<.02,'bobbing damps out');
 // Draft = density ratio × height (Archimedes).
 assert.ok(Math.abs((water-expect)-ITEM_BODY.wood.height*itemDensity('wood')/WATER_DENSITY)<1e-9);
});

test('water drag and added mass: a stone sinks far slower than it falls',()=>{
 const inAir=run('stone',FLOOR_Y+1.5,-10,.4).p.y;
 const inWater=run('stone',FLOOR_Y+1.5,FLOOR_Y+5,.4).p.y;
 assert.ok(inWater>inAir+.3,`after 0.4 s: water ${inWater.toFixed(2)} vs air ${inAir.toFixed(2)}`);
});

test('rising flood lifts floaters off the floor and leaves sinkers where they lie',()=>{
 const m=new Mission(true);
 m.pickups=[{id:90,item:'wood',position:{x:0,y:FLOOR_Y,z:20}},{id:91,item:'knife',position:{x:1,y:FLOOR_Y,z:20}}];
 m.breathWaterY=FLOOR_Y+.9;
 for(let i=0;i<400;i++)m.stepPickups(1/60);
 const [wood,knife]=m.pickups;
 assert.ok(wood.position.y>FLOOR_Y+.7,'driftwood rose with the water');
 assert.equal(knife.position.y,FLOOR_Y,'knife stayed on the floor');
});

test('dropping from the hand falls to the floor instead of hanging in the air',()=>{
 const m=new Mission(true);
 m.inventory[1]='stone';m.selected=1;
 m.drop();
 const p=m.pickups[m.pickups.length-1];
 assert.ok(p.position.y>FLOOR_Y+.5,'let go at hand height');
 for(let i=0;i<120;i++)m.stepPickups(1/60);
 assert.equal(p.position.y,supportHeight(p.position.x,p.position.z));
});

test('the relic lies on its plinth, and every chest, crate and stash stands on the floor',()=>{
 const m=new Mission(true);
 const relic=m.pickups.find(p=>p.item==='relic')!;
 assert.equal(relic.position.y,FLOOR_Y+RELIC_PLINTH.height);
 assert.equal(supportHeight(RELIC.x,RELIC.z),FLOOR_Y+RELIC_PLINTH.height);
 for(let i=0;i<120;i++)m.stepPickups(1/60);
 assert.equal(relic.position.y,FLOOR_Y+RELIC_PLINTH.height,'it does not sink into the stone or lift off');
 for(const c of createDiveChests())assert.equal(c.position.y,FLOOR_Y);
 assert.equal(STASH_POSITION.y,FLOOR_Y);
 for(const p of m.pickups)if(p.item!=='relic')assert.equal(p.position.y,FLOOR_Y,`${p.item} rests on the floor`);
});
