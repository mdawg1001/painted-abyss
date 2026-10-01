/**
 * Home-loop teaching: compass / first tip use plain words (SAVE GOLD, GET GUN, HATCH).
 */
import {test} from 'node:test';
import assert from 'node:assert/strict';
import {
 Mission,isolateGuards,FLOOR_Y,WALK_EYE_Y,breathFootprint,STASH_POSITION,EXIT,RELIC,
 skinnerGoal,SKINNER_FIRST_TIP,isMainGuard,
} from '../src/simulation';
import {UPGRADE} from '../src/gold';

const CX=breathFootprint().cx;

test('first-dive tip teaches hatch Save Gold + BUY + GET GUN in plain words',()=>{
 assert.match(SKINNER_FIRST_TIP,/hatch/i);
 assert.match(SKINNER_FIRST_TIP,/Save Gold/i);
 assert.match(SKINNER_FIRST_TIP,/BUY/i);
 assert.match(SKINNER_FIRST_TIP,/GET GUN/);
 assert.doesNotMatch(SKINNER_FIRST_TIP,/\bBank\b/);
 const m=new Mission(false);
 assert.equal(m.notice,SKINNER_FIRST_TIP);
});

test('skinnerGoal: empty → HATCH; carrying gold → SAVE GOLD; relic → EXTRACT',()=>{
 const m=new Mission(true);isolateGuards(m,-1);m.breathWaterY=FLOOR_Y-.1;
 m.position={x:CX,y:WALK_EYE_Y,z:24};m.pickups=[];m.gold=0;
 // Start kits sometimes include a gun — strip it so home is HATCH, not GET GUN.
 m.inventory=[null,null,null,null,null];
 const home=skinnerGoal(m);
 assert.equal(home.label,'HATCH');
 assert.equal(home.p.x,STASH_POSITION.x);
 assert.equal(home.p.z,STASH_POSITION.z);

 m.gold=500;
 assert.equal(skinnerGoal(m).label,'SAVE GOLD');

 m.inventory=['relic',null,null,null,null];
 const ex=skinnerGoal(m);
 assert.equal(ex.label,'EXTRACT');
 assert.equal(ex.p.x,EXIT.x);
 assert.equal(ex.p.z,EXIT.z);
});

test('skinnerGoal: no gun + floor rifle → GET GUN; thief with stolen gun → GET GUN',()=>{
 const m=new Mission(true);isolateGuards(m,-1);m.breathWaterY=FLOOR_Y-.1;
 m.gold=0;m.pickups=[];
 m.inventory=['knife',null,null,null,null];
 m.pickups=[{id:1,item:'gun',position:{x:10,y:FLOOR_Y,z:-20},cond:.8,mods:{barrel:1,action:0,mag:0}}];
 const floor=skinnerGoal(m);
 assert.equal(floor.label,'GET GUN');
 assert.equal(floor.p.x,10);
 assert.equal(floor.p.z,-20);

 m.pickups=[];
 const g=m.activateGuard(m.guards[0],{x:-8,z:-40},0,'assault');
 g.gun=true;g.loot={cond:.8,mods:{barrel:1,action:0,mag:0}};
 const thief=skinnerGoal(m);
 assert.equal(thief.label,'GET GUN');
 assert.equal(thief.p.x,g.position.x);
 assert.equal(thief.p.z,g.position.z);
});

test('skinnerGoal: key / officer still route the extract chain',()=>{
 const m=new Mission(true);isolateGuards(m,-1);m.breathWaterY=FLOOR_Y-.1;
 m.gold=0;m.pickups=[];
 m.inventory=['sovietKey',null,null,null,null];
 assert.equal(skinnerGoal(m).label,'RELIC');
 assert.equal(skinnerGoal(m).p.x,RELIC.x);

 m.inventory=[null,null,null,null,null];
 const g=m.activateGuard(m.guards[0],{x:-12,z:-70},0,'officer');
 assert.ok(isMainGuard(g));
 assert.equal(skinnerGoal(m).label,'OFFICER');
});

test('first gold pickup tells you to walk to the hatch and press E',()=>{
 const m=new Mission(true);isolateGuards(m,-1);m.breathWaterY=FLOOR_Y-.1;
 m.gold=0;m.pickups=[];
 m.takeGold({id:9,item:'gold',amount:200,position:{x:0,y:FLOOR_Y,z:0}});
 assert.equal(m.gold,200);
 assert.match(m.notice,/hatch/i);
 assert.match(m.notice,/press E/i);
 assert.doesNotMatch(m.notice,/\bbank\b/i);
});

test('skinnerGoal BUY still beats relic chase when gold is almost enough',()=>{
 const m=new Mission(true);isolateGuards(m,-1);m.breathWaterY=FLOOR_Y-.1;
 m.gold=0;m.pickups=[];
 m.inventory=['gun',null,null,null,null];
 m.bankedGold=UPGRADE.cost[0]-100;
 assert.equal(skinnerGoal(m).label,'BUY');
 m.gold=50;
 assert.equal(skinnerGoal(m).label,'SAVE GOLD','gold on you still goes to the hatch first');
});
