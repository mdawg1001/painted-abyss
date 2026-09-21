import {test} from 'node:test';
import assert from 'node:assert/strict';
import {Mission,moveBody,distance} from '../src/simulation';
test('full dive can be completed through collision and live AI with sprinting and usable supplies',()=>{
 const m=new Mission();const states=new Set<string>();
 function swim(x:number,z:number){let frames=0;while(Math.hypot(m.position.x-x,m.position.z-z)>.2&&m.outcome==='playing'&&frames++<6000){const dx=x-m.position.x,dz=z-m.position.z,len=Math.hypot(dx,dz);const sprint=m.predator.state==='chase'&&m.stamina>3;const speed=sprint?4.8:2.8;moveBody(m.position,dx/len*speed/60,0,dz/len*speed/60);m.update(1/60,sprint);states.add(m.predator.state);if(m.health<=66&&m.inventory.includes('bandage')){m.selected=m.inventory.indexOf('bandage');m.use();}if(m.predator.state==='chase'&&distance(m.position,m.predator.position)<10&&m.inventory.includes('flare')){m.selected=m.inventory.indexOf('flare');m.use();}}assert.ok(frames<6000,`Route stuck toward ${x},${z}: ${JSON.stringify(m.position)}`);assert.equal(m.outcome,'playing',m.reason);}
 swim(0,-44);swim(-20,-48);swim(-20,-88);swim(0,-92);swim(0,-112);m.selected=0;m.interact();if(!m.hasRelic)m.interact();assert.ok(m.hasRelic);
 swim(0,-92);swim(24,-92);swim(28,-84);swim(32,-80);swim(32,-12);m.interact();assert.equal(m.outcome,'won');assert.ok(states.has('alert'));assert.ok(states.has('chase'));console.log(JSON.stringify({routeSeconds:Math.round(m.elapsed),health:m.health,states:[...states]}));
});
