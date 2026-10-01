import {test} from 'node:test';
import assert from 'node:assert/strict';
import {PresentationCadence} from '../src/presentationCadence';
test('distant poses run at lower rates without losing elapsed animation time',()=>{
 for(const [distance,count] of [[10,60],[30,10],[50,5]]){
  const cadence=new PresentationCadence();let calls=0,time=0;
  for(let i=0;i<60;i++){const dt=cadence.step(0,1/60,distance);if(dt!==null){calls++;time+=dt;}}
  assert.equal(calls,count);assert.ok(Math.abs(time-1)<1e-6);
 }
});
test('combat and approaching guards refresh immediately; slots accumulate independently',()=>{
 const c=new PresentationCadence();assert.equal(c.step(0,.02,50),null);
 assert.equal(c.step(1,.02,50,true),.02);
 assert.equal(c.step(0,.02,5),.04);
 c.step(0,.02,50);c.reset(0);assert.equal(c.step(0,0,50),0);
});
