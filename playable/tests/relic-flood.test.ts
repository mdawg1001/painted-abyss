import {test} from 'node:test';
import assert from 'node:assert/strict';
import {Mission, RELIC, BREATH_WATER_START, isolateGuards} from '../src/simulation';
import {VALVE_CLOSE_RAD} from '../src/valve';

test('flood stays dormant until a successful relic pickup, then latches across drop and death',()=>{
 const m=new Mission(true);isolateGuards(m);
 for(let i=0;i<12000;i++)m.update(.05);
 assert.equal(m.breathWaterY,BREATH_WATER_START);
 assert.equal(m.leakFlow,0);
 m.interact();assert.equal(m.floodTriggered,false);
 m.position={...RELIC};
 m.turnValve(VALVE_CLOSE_RAD); // Pre-closing cannot bypass the booby trap.
 m.interact();assert.ok(m.hasRelic);assert.ok(m.floodTriggered);
 assert.equal(m.valveTurned,0);
 m.update(.05);assert.ok(m.breathWaterY>BREATH_WATER_START);
 m.drop();assert.equal(m.hasRelic,false);
 const before=m.breathWaterY;m.update(.05);assert.ok(m.breathWaterY>before);
 m.turnValve(VALVE_CLOSE_RAD);
 const wet=m.breathWaterY;m.update(.05);assert.ok(m.breathWaterY<wet);
 m.interact();assert.ok(m.hasRelic);assert.ok(m.valveSealed,'recollecting cannot retrigger the valve');
 m.respawnAtHatch();assert.ok(m.floodTriggered);assert.ok(m.valveSealed);
 m.turnValve(-VALVE_CLOSE_RAD);
 const afterDeath=m.breathWaterY;m.update(.05);assert.ok(m.breathWaterY>afterDeath);
 const fresh=new Mission(true);assert.equal(fresh.floodTriggered,false);assert.equal(fresh.breathWaterY,BREATH_WATER_START);
});
