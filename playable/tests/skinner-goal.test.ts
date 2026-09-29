/**
 * Skinner teaching: compass / first tip point at the hatch vault loop.
 */
import {test} from 'node:test';
import assert from 'node:assert/strict';
import {
 Mission,isolateGuards,FLOOR_Y,WALK_EYE_Y,breathFootprint,STASH_POSITION,EXIT,RELIC,
 skinnerGoal,SKINNER_FIRST_TIP,isMainGuard,
} from '../src/simulation';

const CX=breathFootprint().cx;

test('first-dive tip teaches kill → bank → upgrade, not relic-first',()=>{
 assert.match(SKINNER_FIRST_TIP,/hatch stash/i);
 assert.match(SKINNER_FIRST_TIP,/Bank/i);
 const m=new Mission(false);
 assert.equal(m.notice,SKINNER_FIRST_TIP);
});

test('skinnerGoal: empty → STASH; carrying gold → BANK; relic → EXTRACT',()=>{
 const m=new Mission(true);isolateGuards(m,-1);m.breathWaterY=FLOOR_Y-.1;
 m.position={x:CX,y:WALK_EYE_Y,z:24};m.pickups=[];m.gold=0;
 const home=skinnerGoal(m);
 assert.equal(home.label,'STASH');
 assert.equal(home.p.x,STASH_POSITION.x);
 assert.equal(home.p.z,STASH_POSITION.z);

 m.gold=500;
 assert.equal(skinnerGoal(m).label,'BANK');

 m.inventory=['relic',null,null,null,null];
 const ex=skinnerGoal(m);
 assert.equal(ex.label,'EXTRACT');
 assert.equal(ex.p.x,EXIT.x);
 assert.equal(ex.p.z,EXIT.z);
});

test('skinnerGoal: key / officer still route the extract jackpot chain',()=>{
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

test('first gold pickup tells you to bank at the hatch stash',()=>{
 const m=new Mission(true);isolateGuards(m,-1);m.breathWaterY=FLOOR_Y-.1;
 m.gold=0;m.pickups=[];
 m.takeGold({id:9,item:'gold',amount:200,position:{x:0,y:FLOOR_Y,z:0}});
 assert.equal(m.gold,200);
 assert.match(m.notice,/hatch stash/i);
});
