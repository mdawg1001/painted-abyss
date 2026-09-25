import {test} from 'node:test';
import assert from 'node:assert/strict';
import {
 Mission, STASH_CAPACITY, STASH_POSITION, STASH_AMMO_PACK,
 breathHatchSpawn, writeStash, readStash, emptyStash, stashInteractPrompt,
} from '../src/simulation';

/** In-memory localStorage stand-in for Node tests. */
function mockStorage(){
 const map=new Map<string,string>();
 const store={
  getItem:(k:string)=>map.has(k)?map.get(k)!:null,
  setItem:(k:string,v:string)=>{map.set(k,String(v));},
  removeItem:(k:string)=>{map.delete(k);},
  clear:()=>map.clear(),
 };
 (globalThis as {localStorage?:typeof store}).localStorage=store;
 return store;
}

function atStash(m:Mission){
 m.position={x:STASH_POSITION.x,y:m.position.y,z:STASH_POSITION.z};
}

test('stash sits in the hatch alcove, clear of the relic and corridor centerline',()=>{
 const hatch=breathHatchSpawn();
 assert.ok(Math.hypot(STASH_POSITION.x-hatch.x,STASH_POSITION.z-hatch.z)<6,'within hatch alcove');
 assert.ok(Math.abs(STASH_POSITION.x-hatch.x)>2,'off the corridor gear centerline');
 assert.ok(STASH_POSITION.z>20,'south end near hatch, not deep cave');
 assert.equal(STASH_CAPACITY,5);
});

test('deposit gun and ammo, die empty-handed — stash still holds them after wake',()=>{
 mockStorage();
 writeStash(emptyStash());
 const m=new Mission(true);
 atStash(m);
 m.inventory=['gun',null,null,null,null];
 m.selected=0;
 m.pistol.reserve=STASH_AMMO_PACK+4;
 m.interact(); // open
 assert.equal(m.stashOpen,true);
 m.interact(); // store gun
 assert.ok(m.stash.some(s=>s?.kind==='item'&&s.item==='gun'));
 assert.equal(m.inventory[0],null);
 m.interact(); // store ammo into next empty
 assert.ok(m.stash.some(s=>s?.kind==='ammo'&&s.amount===STASH_AMMO_PACK));
 const before=structuredClone(m.stash);
 m.inventory=[null,null,null,null,null];
 m.respawnAtHatch();
 assert.deepEqual(m.stash,before);
 assert.equal(m.stashOpen,false);
 const persisted=readStash();
 assert.ok(persisted.some(s=>s?.kind==='item'&&s.item==='gun'));
 assert.ok(persisted.some(s=>s?.kind==='ammo'&&s.amount===STASH_AMMO_PACK));
});

test('withdraw then new Mission (dive again / reload) still matches localStorage',()=>{
 mockStorage();
 writeStash(emptyStash());
 const m=new Mission(true);
 atStash(m);
 m.inventory=['bottle','coat',null,null,null];
 m.selected=0;
 m.interact();m.interact(); // open + store bottle
 m.selected=1;m.stashFocus=1;m.interact(); // store coat
 assert.ok(m.stash.some(s=>s?.kind==='item'&&s.item==='bottle'));
 assert.ok(m.stash.some(s=>s?.kind==='item'&&s.item==='coat'));
 m.selected=2;
 m.stashFocus=m.stash.findIndex(s=>s?.kind==='item'&&s.item==='bottle');
 m.interact();
 assert.equal(m.inventory[2],'bottle');
 assert.ok(!m.stash.some(s=>s?.kind==='item'&&s.item==='bottle'));
 const left=structuredClone(m.stash);
 const again=new Mission(true);
 assert.deepEqual(again.stash,left);
 assert.ok(again.stash.some(s=>s?.kind==='item'&&s.item==='coat'));
});

test('relic cannot be stored — extract win condition stays on the body',()=>{
 mockStorage();
 writeStash(emptyStash());
 const m=new Mission(true);
 atStash(m);
 m.inventory=['relic',null,null,null,null];
 m.selected=0;
 m.interact();
 m.interact();
 assert.equal(m.inventory[0],'relic');
 assert.ok(m.stash.every(s=>s===null));
 assert.match(m.notice,/relic/i);
});

test('corpse loot and chest loot stay separate on death',()=>{
 mockStorage();
 writeStash(emptyStash());
 const m=new Mission(true);
 atStash(m);
 m.inventory=['gun','flare',null,null,null];
 m.selected=0;
 m.interact();m.interact(); // stash the gun
 assert.ok(m.stash.some(s=>s?.kind==='item'&&s.item==='gun'));
 m.stashOpen=false;
 const corpse={x:0,y:m.position.y,z:0};
 m.position={...corpse};
 m.dropCarriedAt(corpse);
 assert.ok(m.pickups.some(p=>p.item==='flare'));
 assert.ok(m.stash.some(s=>s?.kind==='item'&&s.item==='gun'),'gun stayed in the chest');
 assert.ok(!m.pickups.some(p=>p.item==='gun'&&Math.hypot(p.position.x-corpse.x,p.position.z-corpse.z)<2),'gun did not drop on corpse');
});

test('prompts name open / store and capacity is finite',()=>{
 mockStorage();
 writeStash(emptyStash());
 const m=new Mission(true);
 atStash(m);
 assert.equal(stashInteractPrompt(m),'E · Open chest');
 m.stashOpen=true;
 m.inventory=['coat',null,null,null,null];m.selected=0;
 assert.match(stashInteractPrompt(m),/Store/);
 for(let i=0;i<STASH_CAPACITY;i++){
  m.inventory=['coat',null,null,null,null];m.selected=0;
  m.interact();
 }
 assert.equal(m.stash.filter(Boolean).length,STASH_CAPACITY);
 // Full chest + empty focus path: swap into focused filled slot.
 m.stashFocus=0;
 m.inventory=['bottle',null,null,null,null];m.selected=0;
 m.interact();
 assert.equal(m.stash[0]?.kind==='item'&&m.stash[0].item,'bottle');
 assert.equal(m.inventory[0],'coat');
});
