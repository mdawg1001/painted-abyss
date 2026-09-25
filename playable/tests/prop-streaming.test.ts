import {test} from 'node:test';
import assert from 'node:assert/strict';
import {PropStreaming} from '../src/propStreaming';
const settle=()=>new Promise<void>(resolve=>setImmediate(resolve));

test('starting area gets priority; distant assets wait until approach and load only once',async()=>{
 const queue=new PropStreaming(0);const calls:string[]=[];
 queue.add('far',{x:0,z:100},async()=>{calls.push('far')});
 queue.add('near',{x:0,z:4},async()=>{calls.push('near')});
 queue.update({x:0,z:0},1);await settle();assert.deepEqual(calls,[]);
 queue.update({x:0,z:0},2);await settle();assert.deepEqual(calls,['near']);
 queue.update({x:0,z:70},3);await settle();assert.deepEqual(calls,['near','far']);
 queue.update({x:0,z:0},4);queue.update({x:0,z:70},5);await settle();assert.equal(calls.length,2);
});
test('two upgrade limit, nearest first, and new position reprioritises queued work',async()=>{
 const queue=new PropStreaming(0);const calls:number[]=[];const release:(()=>void)[]=[];
 for(const z of [30,20,10,0])queue.add(String(z),{x:0,z},()=>new Promise<void>(resolve=>{calls.push(z);release.push(resolve)}));
 queue.update({x:0,z:0},2);await settle();assert.deepEqual(calls,[0,10]);
 queue.update({x:0,z:100},3);await settle();assert.equal(calls.length,2);
 release.forEach(r=>r());await settle();queue.update({x:0,z:100},4);await settle();assert.equal(calls.length,2);
 queue.update({x:0,z:30},5);await settle();assert.deepEqual(calls,[0,10,30,20]);release.forEach(r=>r());
});
test('failed upgrades retry with a cooldown and stop after three attempts',async()=>{
 const queue=new PropStreaming(0);let calls=0;
 queue.add('fail',{x:0,z:0},async()=>{calls++;return false});
 for(const t of [2,3,12,13,22,33]){queue.update({x:0,z:0},t);await settle();}
 assert.equal(calls,3);assert.equal(queue.jobs[0].state,'failed');
});
test('dispose cancels queued and not-yet-started tasks',async()=>{
 const queue=new PropStreaming(0);let calls=0;
 queue.add('near',{x:0,z:0},async()=>{calls++});queue.update({x:0,z:0},2);queue.dispose();
 await settle();queue.update({x:0,z:0},3);assert.equal(calls,0);assert.equal(queue.jobs.length,0);
});
