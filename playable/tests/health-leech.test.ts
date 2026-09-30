import {test} from 'node:test';
import assert from 'node:assert/strict';
import {Mission,isolateGuards,EGO_SAVIOR,FLOOR_Y,WALK_EYE_Y,breathFootprint} from '../src/simulation';
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

test('at critical HP, a non-lethal hit still heals (clutch shoot-to-feed)',()=>{
 const {m,g}=setup(3,EGO_SAVIOR.criticalHp);
 const before=m.health;
 const dealt=40;
 m.guardTakeDamage(g,dealt);
 assert.ok(g.hp>0,'precondition: non-lethal');
 const expected=dealt*SURVIVAL.leech.criticalHitFraction;
 assert.ok(Math.abs(m.health-(before+expected))<1e-9,`hit-leech ${before} → ${m.health}`);
 assert.ok(m.leech&&m.leech.amount>0,'flash on hit-leech');
 assert.ok(Math.abs((g.leechPaid??0)-expected)<1e-9);
});

test('above critical HP, non-lethal hits do not heal',()=>{
 const {m,g}=setup(3,EGO_SAVIOR.criticalHp+5);
 m.guardTakeDamage(g,40);
 assert.ok(g.hp>0);
 assert.equal(m.health,EGO_SAVIOR.criticalHp+5);
 assert.equal(m.leech,null);
});

test('at critical HP, kill leech uses the wider radius',()=>{
 const mid=SURVIVAL.leech.radius+2; // outside normal, inside critical
 assert.ok(mid<=SURVIVAL.leech.criticalRadius);
 const {m,g}=setup(mid,EGO_SAVIOR.criticalHp);
 const maxHp=g.maxHp;
 // One-shot so no on-hit advances dilute the kill payout.
 m.guardTakeDamage(g,maxHp*10);
 const expected=Math.min(100-EGO_SAVIOR.criticalHp,maxHp*SURVIVAL.leech.criticalFraction);
 assert.ok(Math.abs(m.health-(EGO_SAVIOR.criticalHp+expected))<1e-9,`critical kill-leech → ${m.health}`);
});

test('at critical HP, kill outside even the critical radius does not heal',()=>{
 const {m,g}=setup(SURVIVAL.leech.criticalRadius+2,EGO_SAVIOR.criticalHp);
 kill(m,g);
 // Multi-hit kill from far: on-hit also requires criticalRadius, so no heal at all.
 assert.equal(m.health,EGO_SAVIOR.criticalHp);
 assert.equal(m.leech,null);
});

test('leech never soft-caps below full — regen soft cap must not clamp combat heals',()=>{
 const {m,g}=setup(3,2);
 m.suitRegenArmed=true;
 kill(m,g);
 assert.ok(m.health>40,'combat leech climbs well past the passive soft cap');
 assert.ok(m.health<=100);
 assert.equal(m.suitRegenArmed,false,'leech past soft cap disarms passive regen');
});
