import {test} from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import {Mission,START,RELIC,EXIT,world,moveBody,visible,fits,pathBetween,lookDelta,edgeTurn,FREE_LOOK_RATE,torchModulation,distance,cells} from '../src/simulation';
const advance=(m:Mission,seconds:number)=>{for(let i=0;i<seconds*60;i++)m.update(1/60);};
test('torch modulation dims and muddies with depth and floor aim',()=>{
 const shallowUp=torchModulation(6.5,-1.2);
 const deepDown=torchModulation(.8,1.2);
 const midLevel=torchModulation(3,0);
 assert.ok(shallowUp.intensity>midLevel.intensity);
 assert.ok(deepDown.intensity<midLevel.intensity);
 assert.ok(deepDown.distance<shallowUp.distance);
 assert.ok(deepDown.decay>shallowUp.decay);
 assert.ok(deepDown.b<shallowUp.b);
 assert.ok(deepDown.beamOpacity<shallowUp.beamOpacity);
 assert.ok(deepDown.particle<shallowUp.particle);
});
test('camera movement right produces positive world X with real Three camera',()=>{const d=lookDelta(0,0,100,0);const c=new THREE.PerspectiveCamera();c.rotation.order='YXZ';c.rotation.set(d.pitch,d.yaw,0);const forward=c.getWorldDirection(new THREE.Vector3());assert.ok(forward.x>0);assert.ok(lookDelta(0,0,-100,0).yaw>0);assert.equal(lookDelta(0,0,0,99999).pitch,-1.4);});
test('unlocked free look supports continuous 360-degree rotation without pressing the OS edge',()=>{
 assert.equal(edgeTurn(500,0,1000),0);
 assert.ok(edgeTurn(550,0,1000)===0&&edgeTurn(450,0,1000)===0);
 assert.ok(edgeTurn(200,0,1000)<0);assert.ok(edgeTurn(800,0,1000)>0);
 assert.equal(edgeTurn(0,0,1000),-1);assert.equal(edgeTurn(1000,0,1000),1);
 // Continuous yaw engages well inside the canvas (hold left/right of center), not only at the rim.
 assert.ok(Math.abs(edgeTurn(200,0,1000))>0.2);
 let yaw=0;for(let i=0;i<360;i++)yaw=lookDelta(yaw,0,edgeTurn(900,0,1000)*FREE_LOOK_RATE/60*650,0).yaw;assert.ok(yaw<-Math.PI*2);
 for(let i=0;i<720;i++)yaw=lookDelta(yaw,0,edgeTurn(100,0,1000)*FREE_LOOK_RATE/60*650,0).yaw;assert.ok(yaw>Math.PI*2);
});
test('five slots: pickup asks before replacing, displaced item is recoverable',()=>{const m=new Mission();m.position={...RELIC};m.interact();assert.equal(m.pending,1);assert.equal(m.hasRelic,false);m.selected=1;m.interact();assert.equal(m.inventory.length,5);assert.equal(m.inventory[1],'relic');assert.equal(m.pickups.filter(x=>x.item==='wood').length,1);m.drop();assert.equal(m.hasRelic,false);m.position={...RELIC};m.interact();assert.equal(m.inventory.length,5);assert.equal(m.pickups.length,2);});
test('extraction requires currently carried objective, dropping it revokes win',()=>{const m=new Mission();m.position={...EXIT};m.interact();assert.equal(m.outcome,'playing');m.position={...RELIC};m.interact();m.interact();assert.ok(m.hasRelic);m.position={...EXIT};m.interact();assert.equal(m.outcome,'won');const elapsed=m.elapsed;m.update(.05);assert.equal(m.elapsed,elapsed);});
test('cancelled / out of range swap cannot remotely collect objective',()=>{const m=new Mission();m.position={...RELIC};m.interact();m.position={...START};m.interact();assert.equal(m.pending,null);assert.equal(m.hasRelic,false);});
test('world collision stops walls, floor, roof, and large movement tunnelling',()=>{const p={...START};moveBody(p,400,0,0);assert.ok(p.x<14);assert.ok(fits(p));moveBody(p,0,100,0);assert.ok(p.y<=7.1);moveBody(p,0,-200,0);assert.ok(p.y>=.65);const pillar=world(8,17);moveBody(pillar,20,0,0);assert.ok(pillar.x<-10);assert.ok(fits(pillar));});
test('solid central pillar blocks detection and navigation routes around it',()=>{const a=world(7,17),b=world(15,17);assert.equal(visible(a,b),false);const path=pathBetween(a,b);assert.ok(path.length>0);assert.ok(path.every(p=>fits(p,1.3)));assert.equal(pathBetween(a,EXIT).length,0);});
test('all level cells connect, including objective and exit',()=>{const first=[...cells][0],visited=new Set([first]),queue=[first];for(let i=0;i<queue.length;i++){const [c,r]=queue[i].split(',').map(Number);for(const [dc,dr] of [[1,0],[-1,0],[0,1],[0,-1]]){const k=`${c+dc},${r+dr}`;if(cells.has(k)&&!visited.has(k)){visited.add(k);queue.push(k);}}}assert.equal(visited.size,cells.size);});
test('predator transitions patrol → alert → chase → search → patrol',()=>{const m=new Mission();m.predator.position=world(16,19);m.position=world(16,16);advance(m,.2);assert.equal(m.predator.state,'alert');advance(m,2);assert.equal(m.predator.state,'chase');m.position={...START};advance(m,3);assert.equal(m.predator.state,'search');advance(m,8);assert.equal(m.predator.state,'patrol');});
test('predator cannot see or bite through rock',()=>{const m=new Mission();m.predator.position=world(8,17);m.position=world(13,17);advance(m,.2);assert.equal(m.predator.state,'patrol');assert.equal(m.health,100);});
test('four bites lose the mission; fresh mission resets every system',()=>{const m=new Mission();m.position=world(16,19);m.predator.position={...m.position};m.predator.state='chase';advance(m,6);assert.equal(m.outcome,'lost');assert.equal(m.health,0);const fresh=new Mission();assert.equal(fresh.health,100);assert.equal(fresh.air,240);assert.equal(fresh.outcome,'playing');assert.equal(fresh.pending,null);assert.equal(fresh.pickups[0].item,'relic');assert.deepEqual(fresh.position,START);});
test('air loss, reserve, sealant and distraction have tangible effects',()=>{const m=new Mission();m.air=100;m.selected=3;m.use();assert.equal(m.air,160);assert.equal(m.inventory[3],null);m.health=30;m.selected=4;m.use();assert.equal(m.health,75);m.selected=2;m.use();assert.ok(m.decoy);assert.equal(m.predator.state,'search');advance(m,13);assert.equal(m.decoy,null);m.air=.01;m.update(.05);assert.equal(m.outcome,'lost');});
test('safe narrow passage prevents bites and leaves an escape route',()=>{const m=new Mission();m.position=world(19,20);m.predator.position=world(18,20);m.predator.state='chase';m.predator.lastKnown={...m.position};advance(m,3);assert.equal(m.health,100);assert.equal(m.predator.state,'search');assert.ok(m.predator.position.x<30);});
