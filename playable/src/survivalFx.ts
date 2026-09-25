import { PALETTE } from './artPalette';
import { GUARD_KEY_GRADE, GUARD_RIM_GRADE } from './frameGrade';
/**
 * Survival firefight visuals: cover, reinforcement doors, supply caches, smoke, grenades,
 * sparks and blood puffs, guard hit flashes, per-guard muzzle glows, and a small pool of
 * guard key lights that follows the nearest guards (so ten guards never cost twenty lights).
 *
 * Everything is pooled and created once; `update` only moves and fades things.
 */
import * as THREE from 'three';
import { SURVIVAL, SURVIVAL_COVER } from './survivalConfig';
import { survivalDoors, smokeDensity, smokeRadius, type SmokeCloud, type SmokeGrenade, type SupplyCache } from './survival';
import { FLOOR_Y, type Guard, type Point } from './simulation';
import { GUARD_KEY_INTENSITY, GUARD_RIM_INTENSITY, type SovietGuardVisual } from './sovietGuardAsset';
import { createCardboardCoverVisual, upgradeCardboardCover } from './cardboardBoxAsset';
import { createDeskCoverVisual, upgradeDeskCover } from './metalDeskAsset';

const LIGHT_SLOTS=4;
const CLOUD_SPRITES=14;
const PARTICLES=96;

function canvasTex(w:number,h:number,draw:(g:CanvasRenderingContext2D)=>void){
 const c=document.createElement('canvas');c.width=w;c.height=h;draw(c.getContext('2d')!);
 const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;return t;
}
/** Soft, lumpy smoke puff. */
function smokeTexture(){
 return canvasTex(128,128,g=>{
  for(let i=0;i<26;i++){
   const x=64+(Math.random()-.5)*50,y=64+(Math.random()-.5)*50,r=18+Math.random()*30;
   const gr=g.createRadialGradient(x,y,0,x,y,r);
   gr.addColorStop(0,'rgba(255,255,255,.22)');gr.addColorStop(1,'rgba(255,255,255,0)');
   g.fillStyle=gr;g.fillRect(0,0,128,128);
  }
 });
}

type CloudView={id:number;group:THREE.Group;sprites:THREE.Sprite[];seeds:number[]};
type Particle={v:THREE.Vector3;life:number;max:number;grav:number};

export class SurvivalFx{
 scene:THREE.Scene;
 keyLights:THREE.PointLight[]=[];rimLights:THREE.PointLight[]=[];
 glows:THREE.Sprite[]=[];glowT:number[]=[];
 knives:(THREE.Object3D|null)[]=[];
 doorLeaves:THREE.Object3D[]=[];doorLamps:THREE.Sprite[]=[];doorOpenAt:number[]=[];
 cacheProps:THREE.Group[]=[];
 clouds:CloudView[]=[];
 grenadeMeshes:THREE.Mesh[]=[];
 smokeMat:THREE.SpriteMaterial;
 points:THREE.Points;pts:Particle[]=[];next=0;
 flashMats=new WeakMap<THREE.Object3D,{m:THREE.MeshStandardMaterial;e:THREE.Color;i:number}[]>();
 constructor(scene:THREE.Scene,visuals:SovietGuardVisual[],glowTex:THREE.Texture,adopt:(o:THREE.Object3D)=>void){
  this.scene=scene;
  // Guard key/rim light pool (replaces each guard's own pair).
  for(const v of visuals){v.root.remove(v.fill);v.root.remove(v.rim);}
  for(let i=0;i<LIGHT_SLOTS;i++){
   const k=new THREE.PointLight(PALETTE.ivory,0,3.6,2);k.castShadow=false;
   const r=new THREE.PointLight(PALETTE.fill,0,3,2);r.castShadow=false;
   scene.add(k,r);this.keyLights.push(k);this.rimLights.push(r);
  }
  // Per-guard muzzle glow.
  for(let i=0;i<visuals.length;i++){
   const s=new THREE.Sprite(new THREE.SpriteMaterial({map:glowTex,transparent:true,depthWrite:false,blending:THREE.AdditiveBlending,opacity:0}));
   s.visible=false;scene.add(s);this.glows.push(s);this.glowT.push(0);this.knives.push(null);
  }
  this.buildCover(adopt);
  this.buildDoors(adopt);
  this.buildCaches(adopt);
  this.smokeMat=new THREE.SpriteMaterial({map:smokeTexture(),color:0x9aa096,transparent:true,depthWrite:false,opacity:0,fog:true});
  for(let c=0;c<SURVIVAL.smoke.maxClouds+2;c++){
   const group=new THREE.Group();group.visible=false;
   const sprites:THREE.Sprite[]=[],seeds:number[]=[];
   for(let k=0;k<CLOUD_SPRITES;k++){const s=new THREE.Sprite(this.smokeMat.clone());group.add(s);sprites.push(s);seeds.push(Math.random()*1000);}
   scene.add(group);this.clouds.push({id:-1,group,sprites,seeds});
  }
  const tin=new THREE.CylinderGeometry(.045,.045,.16,10);
  const tinMat=new THREE.MeshStandardMaterial({color:0x3f5b33,roughness:.6,metalness:.4});
  for(let i=0;i<6;i++){const m=new THREE.Mesh(tin,tinMat);m.visible=false;scene.add(m);this.grenadeMeshes.push(m);}
  // Sparks / dust / blood: one Points cloud with vertex colours.
  const geo=new THREE.BufferGeometry();
  geo.setAttribute('position',new THREE.Float32BufferAttribute(new Float32Array(PARTICLES*3).fill(-999),3));
  geo.setAttribute('color',new THREE.Float32BufferAttribute(new Float32Array(PARTICLES*3),3));
  this.points=new THREE.Points(geo,new THREE.PointsMaterial({size:.06,vertexColors:true,transparent:true,depthWrite:false,sizeAttenuation:true}));
  this.points.frustumCulled=false;scene.add(this.points);
  for(let i=0;i<PARTICLES;i++)this.pts.push({v:new THREE.Vector3(),life:0,max:1,grav:0});
 }
 /** Stacked ammo crates, cardboard piles, metal desk, and concrete blast walls, where the sim puts cover. */
 private buildCover(adopt:(o:THREE.Object3D)=>void){
  // Stylized, saturated prop paint (flat colour, no photo maps): readable cover at a glance.
  const wood=new THREE.MeshStandardMaterial({color:0x557d2a,roughness:.8});
  const band=new THREE.MeshStandardMaterial({color:0x2b3320,roughness:.7,metalness:.3});
  const concrete=new THREE.MeshStandardMaterial({color:0xb9a88c,roughness:.95});
  const hazard=new THREE.MeshStandardMaterial({map:canvasTex(64,16,g=>{g.fillStyle='#f2c230';g.fillRect(0,0,64,16);g.fillStyle='#1d1d1d';for(let x=-16;x<64;x+=16){g.beginPath();g.moveTo(x,16);g.lineTo(x+8,16);g.lineTo(x+16,0);g.lineTo(x+8,0);g.closePath();g.fill();}}),roughness:.8});
  for(const c of SURVIVAL_COVER){
   let g:THREE.Group;
   if(c.kind==='cardboard'){
    g=createCardboardCoverVisual(c.x*0.17+c.z*0.11);
    g.position.set(c.x,FLOOR_Y,c.z);
    void upgradeCardboardCover(g);
   }else if(c.kind==='desk'){
    g=createDeskCoverVisual(c.x*0.13+c.z*0.09);
    g.position.set(c.x,FLOOR_Y,c.z);
    void upgradeDeskCover(g);
   }else{
    g=new THREE.Group();g.position.set(c.x,FLOOR_Y,c.z);
    if(c.kind==='crates'){
     const w=c.hx*2,d=c.hz*2;
     const lower=new THREE.Mesh(new THREE.BoxGeometry(w,1.0,d),wood);lower.position.y=.5;
     const upper=new THREE.Mesh(new THREE.BoxGeometry(w*.92,.95,d*.92),wood);upper.position.y=1.48;upper.rotation.y=.08;
     for(const y of [.2,.8,1.25,1.75]){const b=new THREE.Mesh(new THREE.BoxGeometry(w*1.01,.06,d*1.01),band);b.position.y=y;g.add(b);}
     g.add(lower,upper);
    }else{
     const wall=new THREE.Mesh(new THREE.BoxGeometry(c.hx*2,2.1,c.hz*2),concrete);wall.position.y=1.05;
     const cap=new THREE.Mesh(new THREE.BoxGeometry(c.hx*2+.08,.12,c.hz*2+.08),concrete);cap.position.y=2.12;
     const stripe=new THREE.Mesh(new THREE.BoxGeometry(c.hx*2+.02,.22,c.hz*2+.02),hazard);stripe.position.y=.32;
     g.add(wall,cap,stripe);
    }
   }
   g.traverse(o=>{if((o as THREE.Mesh).isMesh){o.castShadow=true;o.receiveShadow=true;}});
   this.scene.add(g);adopt(g);
  }
 }
 /** Steel bulkheads where reinforcements come through, each with a red warning lamp. */
 private buildDoors(adopt:(o:THREE.Object3D)=>void){
  const steel=new THREE.MeshStandardMaterial({color:0x2f7f8c,roughness:.55,metalness:.35,emissive:0x0c2226,emissiveIntensity:.6});
  const frameMat=new THREE.MeshStandardMaterial({color:0xe0a21c,roughness:.6,metalness:.3,emissive:0x2a1d08,emissiveIntensity:.8});
  const lampTex=canvasTex(32,32,g=>{const gr=g.createRadialGradient(16,16,0,16,16,16);gr.addColorStop(0,'rgba(255,90,60,1)');gr.addColorStop(1,'rgba(255,40,20,0)');g.fillStyle=gr;g.fillRect(0,0,32,32);});
  for(const d of survivalDoors()){
   const g=new THREE.Group();
   g.position.set(d.door.x,FLOOR_Y,d.door.z);g.rotation.y=d.yaw;
   const frame=new THREE.Mesh(new THREE.BoxGeometry(1.5,2.3,.12),frameMat);frame.position.set(0,1.15,-.02);
   const hinge=new THREE.Group();hinge.position.set(-.62,0,.05);
   const leaf=new THREE.Mesh(new THREE.BoxGeometry(1.24,2.06,.07),steel);leaf.position.set(.62,1.05,0);
   const wheel=new THREE.Mesh(new THREE.TorusGeometry(.16,.025,6,14),frameMat);wheel.position.set(.62,1.1,.06);
   hinge.add(leaf,wheel);
   const lamp=new THREE.Sprite(new THREE.SpriteMaterial({map:lampTex,transparent:true,depthWrite:false,blending:THREE.AdditiveBlending,opacity:.15}));
   lamp.position.set(0,2.45,.12);lamp.scale.setScalar(.6);
   g.add(frame,hinge,lamp);
   this.scene.add(g);adopt(g);
   this.doorLeaves.push(hinge);this.doorLamps.push(lamp);this.doorOpenAt.push(-99);
  }
 }
 /** Supply caches: olive ammo boxes, white field-dressing kits, green smoke tins. */
 private buildCaches(adopt:(o:THREE.Object3D)=>void){
  const crossTex=canvasTex(64,64,g=>{g.fillStyle='#f4f1ea';g.fillRect(0,0,64,64);g.fillStyle='#e0261c';g.fillRect(26,10,12,44);g.fillRect(10,26,44,12);});
  const stripeTex=canvasTex(64,32,g=>{g.fillStyle='#5f8a2c';g.fillRect(0,0,64,32);g.fillStyle='#f2c230';g.fillRect(0,12,64,7);});
  const glowTex=canvasTex(32,32,g=>{const gr=g.createRadialGradient(16,16,0,16,16,16);gr.addColorStop(0,'rgba(255,240,200,.9)');gr.addColorStop(1,'rgba(255,240,200,0)');g.fillStyle=gr;g.fillRect(0,0,32,32);});
  const make=(kind:'ammo'|'medkit'|'smoke')=>{
   const g=new THREE.Group();
   if(kind==='ammo'){
    const m=new THREE.MeshStandardMaterial({map:stripeTex,roughness:.7,metalness:.2});
    const box=new THREE.Mesh(new THREE.BoxGeometry(.5,.28,.26),m);box.position.y=.14;g.add(box);
   }else if(kind==='medkit'){
    const m=new THREE.MeshStandardMaterial({map:crossTex,roughness:.6});
    const box=new THREE.Mesh(new THREE.BoxGeometry(.42,.2,.3),m);box.position.y=.1;g.add(box);
   }else{
    const m=new THREE.MeshStandardMaterial({color:0x3f5b33,roughness:.5,metalness:.5});
    for(let i=0;i<2;i++){const t=new THREE.Mesh(new THREE.CylinderGeometry(.05,.05,.17,10),m);t.position.set(i*.12-.06,.085,0);g.add(t);}
   }
   const glow=new THREE.Sprite(new THREE.SpriteMaterial({map:glowTex,transparent:true,depthWrite:false,blending:THREE.AdditiveBlending,opacity:.35,color:PALETTE.ivory}));
   glow.position.y=.35;glow.scale.setScalar(.9);g.add(glow);
   return g;
  };
  return {make,adopt};
 }
 /** Build (once) and show / hide the cache props for the mission's current caches. */
 syncCaches(caches:SupplyCache[],time:number,adopt:(o:THREE.Object3D)=>void){
  const {make}=this.buildCaches(()=>{});
  while(this.cacheProps.length<caches.length){
   const c=caches[this.cacheProps.length];
   const g=make(c.kind);g.position.set(c.x,FLOOR_Y,c.z);g.rotation.y=c.id*1.7;
   this.scene.add(g);adopt(g);this.cacheProps.push(g);
  }
  caches.forEach((c,i)=>{const g=this.cacheProps[i];g.visible=c.stocked;const s=g.children[g.children.length-1] as THREE.Sprite;s.material.opacity=.25+.15*Math.sin(time*3+i);});
 }
 /** A reinforcement door: lamp flashes during the warning, leaf swings open as he comes through. */
 cueDoor(index:number,at:number){this.doorOpenAt[index]=at;}
 /** Knife in a rusher's fist (built on demand once the rig is loaded). */
 private knifeFor(i:number,visual:SovietGuardVisual){
  if(this.knives[i]||!visual.ready)return this.knives[i];
  let fist:THREE.Object3D|null=null;visual.body.traverse(o=>{if(!fist&&o.name==='FistR')fist=o;});
  if(!fist)return null;
  const g=new THREE.Group();
  const blade=new THREE.Mesh(new THREE.BoxGeometry(.035,.3,.012),new THREE.MeshStandardMaterial({color:0xcfd4d6,metalness:.9,roughness:.25}));
  blade.position.y=.28;
  const grip=new THREE.Mesh(new THREE.CylinderGeometry(.025,.025,.14,8),new THREE.MeshStandardMaterial({color:0x2a211a,roughness:.8}));
  grip.position.y=.07;
  g.add(blade,grip);
  const fw=new THREE.Vector3();(fist as THREE.Object3D).getWorldScale(fw);g.scale.setScalar(1/Math.max(1e-3,fw.x));
  (fist as THREE.Object3D).add(g);this.knives[i]=g;return g;
 }
 /** Per-guard role props, hit flash and muzzle glow. */
 syncGuard(i:number,visual:SovietGuardVisual,g:Guard,elapsed:number,shot:boolean,muzzle:THREE.Vector3|null,dt:number){
  visual.root.visible=g.active;
  visual.root.scale.setScalar(g.role==='heavy'?1.12:1);
  const k=this.knifeFor(i,visual);if(k)k.visible=g.active&&g.role==='rusher';
  // Hit flash: a hard red pulse on his kit for a tenth of a second.
  const since=elapsed-g.hitAt;
  this.flash(visual,g.hitAt>=0&&since>=0&&since<.12?1-since/.12:0);
  if(shot)this.glowT[i]=1;
  const s=this.glows[i];const f=this.glowT[i];
  s.visible=f>0&&!!muzzle;
  if(muzzle&&f>0){s.position.copy(muzzle);s.material.opacity=f;s.scale.setScalar(.14+.22*f);}
  this.glowT[i]=Math.max(0,f-dt/.06);
 }
 private flash(visual:SovietGuardVisual,k:number){
  let list=this.flashMats.get(visual.body);
  if(!list){
   list=[];
   visual.body.traverse(o=>{const m=(o as THREE.Mesh).material as THREE.MeshStandardMaterial|undefined;if(m&&(m as THREE.MeshStandardMaterial).isMeshStandardMaterial&&m.emissive)list!.push({m,e:m.emissive.clone(),i:m.emissiveIntensity});});
   this.flashMats.set(visual.body,list);
  }
  for(const f of list){
   if(k<=0){if(f.m.userData.flashing){f.m.emissive.copy(f.e);f.m.emissiveIntensity=f.i;f.m.userData.flashing=false;}continue;}
   f.m.emissive.copy(f.e).lerp(new THREE.Color(0xff2a1a),k);f.m.emissiveIntensity=f.i+1.2*k;f.m.userData.flashing=true;
  }
 }
 /** Burst of particles: sparks off rock, dust, or blood off a guard. */
 burst(p:Point,kind:'spark'|'dust'|'blood',n:number){
  const pos=this.points.geometry.getAttribute('position') as THREE.BufferAttribute;
  const col=this.points.geometry.getAttribute('color') as THREE.BufferAttribute;
  const c=kind==='spark'?[1,.7,.3]:kind==='dust'?[.55,.53,.48]:[.5,.04,.03];
  for(let k=0;k<n;k++){
   const i=this.next;this.next=(this.next+1)%PARTICLES;
   const q=this.pts[i];
   pos.setXYZ(i,p.x,p.y,p.z);col.setXYZ(i,c[0],c[1],c[2]);
   const sp=kind==='spark'?3.5:kind==='dust'?.9:1.6;
   q.v.set((Math.random()-.5)*sp,Math.random()*sp*.7,(Math.random()-.5)*sp);
   q.max=kind==='spark'?.25:kind==='dust'?.9:.55;q.life=q.max;q.grav=kind==='dust'?-.6:-9;
  }
  pos.needsUpdate=true;col.needsUpdate=true;
 }
 /**
  * Per frame: light pool follows the nearest guards, doors, smoke, grenades, particles.
  */
 update(dt:number,time:number,elapsed:number,camera:THREE.Camera,visuals:SovietGuardVisual[],guards:Guard[],clouds:SmokeCloud[],grenades:SmokeGrenade[]){
  // Light pool.
  const cam=camera.getWorldPosition(new THREE.Vector3());
  const order=visuals.map((v,i)=>({v,i,d:guards[i]?.active?v.root.position.distanceToSquared(cam):Infinity})).sort((a,b)=>a.d-b.d);
  for(let s=0;s<LIGHT_SLOTS;s++){
   const o=order[s];const key=this.keyLights[s],rim=this.rimLights[s];
   if(!o||o.d>40*40){key.intensity=0;rim.intensity=0;continue;}
   key.position.copy(o.v.root.localToWorld(new THREE.Vector3(.25,1.75,.9)));
   rim.position.copy(o.v.root.localToWorld(new THREE.Vector3(-.3,2.1,-.7)));
   key.intensity=GUARD_KEY_INTENSITY*GUARD_KEY_GRADE;rim.intensity=GUARD_RIM_INTENSITY*GUARD_RIM_GRADE;
  }
  // Doors.
  const warn=SURVIVAL.director.warnSeconds;
  this.doorLeaves.forEach((leaf,i)=>{
   const t=elapsed-this.doorOpenAt[i];
   const lamp=this.doorLamps[i];
   const flashing=t>=0&&t<warn+2;
   lamp.material.opacity=flashing?(Math.sin(time*18)>0?1:.25):.3;lamp.scale.setScalar(flashing?.9:.5);
   const open=t>=warn-.3&&t<warn+2.2?Math.min(1,(t-(warn-.3))/.35):t>=warn+2.2&&t<warn+3?1-(t-warn-2.2)/.8:0;
   leaf.rotation.y=-open*1.4;
  });
  // Smoke clouds.
  const live=clouds.slice(-this.clouds.length);
  for(const view of this.clouds){if(!live.some(c=>c.id===view.id)){view.id=-1;view.group.visible=false;}}
  for(const c of live){
   let view=this.clouds.find(v=>v.id===c.id);
   if(!view){view=this.clouds.find(v=>v.id===-1)!;if(!view)continue;view.id=c.id;view.group.position.set(c.x,FLOOR_Y,c.z);view.group.visible=true;}
   const dens=smokeDensity(c,elapsed),r=smokeRadius(c,elapsed);
   view.sprites.forEach((s,k)=>{
    const sd=view!.seeds[k];
    const a=sd+time*.05*(k%2?1:-1),rr=r*(.2+.65*((sd*7.13)%1));
    s.position.set(Math.cos(a)*rr,.4+((sd*3.7)%1)*1.9+Math.sin(time*.3+sd)*.1,Math.sin(a)*rr);
    s.scale.setScalar(r*(.75+.35*((sd*1.9)%1)));
    s.material.opacity=Math.min(.62,dens*.62);
    s.material.rotation=sd+time*.03;
   });
  }
  // Grenades in flight.
  this.grenadeMeshes.forEach((m,i)=>{
   const gr=grenades[i];m.visible=!!gr;
   if(!gr)return;
   const t=Math.min(1,(elapsed-gr.thrownAt)/SURVIVAL.smoke.flight);
   m.position.set(gr.from.x+(gr.to.x-gr.from.x)*t,(gr.from.y-.3)+(gr.to.y+.1-(gr.from.y-.3))*t+Math.sin(Math.PI*t)*1.6,gr.from.z+(gr.to.z-gr.from.z)*t);
   m.rotation.x=time*12;
  });
  // Particles.
  const pos=this.points.geometry.getAttribute('position') as THREE.BufferAttribute;
  let any=false;
  for(let i=0;i<PARTICLES;i++){
   const q=this.pts[i];if(q.life<=0)continue;any=true;
   q.life-=dt;q.v.y+=q.grav*dt;
   if(q.life<=0){pos.setXYZ(i,0,-999,0);continue;}
   pos.setXYZ(i,pos.getX(i)+q.v.x*dt,Math.max(FLOOR_Y+.02,pos.getY(i)+q.v.y*dt),pos.getZ(i)+q.v.z*dt);
  }
  if(any)pos.needsUpdate=true;
 }
 /** Mission restart: clear transient effects. */
 reset(){
  for(const v of this.clouds){v.id=-1;v.group.visible=false;}
  for(const m of this.grenadeMeshes)m.visible=false;
  this.doorOpenAt.fill(-99);this.glowT.fill(0);
  const pos=this.points.geometry.getAttribute('position') as THREE.BufferAttribute;
  for(let i=0;i<PARTICLES;i++){this.pts[i].life=0;pos.setXYZ(i,0,-999,0);}
  pos.needsUpdate=true;
 }
}
