import {test} from 'node:test';
import assert from 'node:assert/strict';
import {Mission,isolateGuards,FLOOR_Y,WALK_EYE_Y,breathFootprint} from '../src/simulation';
import {SURVIVAL} from '../src/survivalConfig';

const CX=breathFootprint().cx;
const PLAYER={x:CX,y:WALK_EYE_Y,z:24};
function setup(distance:number,health:number){
 const m=new Mission(true);isolateGuards(m,-1);m.breathWaterY=FLOOR_Y-.1;m.rand=()=>.99;
 const g=m.guards[0];
 m.activateGuard(g,{x:CX,z:PLAYER.z-distance},0,'assault');
 m.position={...PLAYER};m.health=health;
 return{m,g};
}
const kill=(m:Mission,g:ReturnType<typeof setup>['g'])=>{while(g.hp>0)m.guardTakeDamage(g,40);};

test('close kill while hurt heals a share of the damage dealt, instantly',()=>{
 const {m,g}=setup(3,40);
 const maxHp=g.maxHp;
 kill(m,g);
 const expected=Math.min(60,maxHp*SURVIVAL.leech.fraction);
 assert.ok(Math.abs(m.health-(40+expected))<1e-9,`healed to ${m.health}`);
 assert.equal(m.leech?.seq,1,'the screen flash is triggered');
 assert.ok(Math.abs(m.leech!.amount-expected)<1e-9);
});

test('kills outside the radius do not heal',()=>{
 const {m,g}=setup(SURVIVAL.leech.radius+2,40);
 kill(m,g);
 assert.equal(m.health,40);
 assert.equal(m.leech,null);
});

test('no heal and no flash at full health, and never past 100',()=>{
 const a=setup(2,100);kill(a.m,a.g);
 assert.equal(a.m.health,100);assert.equal(a.m.leech,null);
 const b=setup(2,95);kill(b.m,b.g);
 assert.equal(b.m.health,100,'capped at full');
});

test('the heal counts only damage actually dealt, and resets for the next life',()=>{
 const {m,g}=setup(2,20);
 m.guardTakeDamage(g,g.maxHp*10); // one overkill hit deals at most his remaining hp
 assert.ok(Math.abs(m.health-(20+g.maxHp*SURVIVAL.leech.fraction))<1e-9);
 assert.equal(g.dealtByPlayer,0);
 m.activateGuard(g,{x:CX,z:PLAYER.z-2},0,'assault');
 assert.equal(g.dealtByPlayer,0);
});
