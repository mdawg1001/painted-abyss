import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { OceanWorld } from './legacy/ocean';
import { buildDiveAudio, playDiveChime } from './diveAudio';
import { BackgroundMusic } from './backgroundMusic';
import { Mission, cells, world, CELL, EXIT, RELIC, distance, moveBody, lookDelta, edgeTurn, FREE_LOOK_RATE, ITEMS, type Item } from './simulation';
export type Snapshot={mission:Mission;playing:boolean;started:boolean;pointerLocked:boolean;error:string;audioNotice:string};
const V=(x=0,y=0,z=0)=>new THREE.Vector3(x,y,z);
const FREE_LOOK_HINT='360° free look active. Steer left or right of center to keep turning — pointer stays in the dive.';
export class CaveWorld extends OceanWorld {
 audioNotice='';audioProbe:AnalyserNode|null=null;audioTestTimer=0;
 backgroundMusic:BackgroundMusic|null=null;
 mission=new Mission();ui:(snapshot:Snapshot)=>void;error='';pointerLocked=false;everLocked=false;lastSent=0;
 fallbackTurn=0;lockDenied=false;lookPointer:{x:number;y:number}|null=null;
 torchLight=new THREE.SpotLight(0xd9f9e5,95,29,.48,.7,1.15);beam!:THREE.Mesh;
 guardian!:ReturnType<OceanWorld['ichthyosaur']>;pickupMeshes=new Map<number,THREE.Group>();decoyMesh!:THREE.Mesh;
 constructor(host:HTMLDivElement,ui:(snapshot:Snapshot)=>void){
  super(host,{onReady:()=>{},onPause:()=>{},onStatus:()=>{},onToggleUI:()=>{},onGlide:()=>{},onError:()=>{}},{deferStart:true});
  this.ui=ui;this.position.copy(this.mission.position);this.camera.position.copy(this.position);this.pitch=this.targetPitch=0;
  this.scene.background=new THREE.Color(0x031015);this.scene.fog=new THREE.FogExp2(0x031015,.065);
  this.camera.far=110;this.camera.updateProjectionMatrix();this.renderer.toneMappingExposure=1.25;
  this.scene.add(new THREE.HemisphereLight(0x5a8692,0x14251f,.32));
  this.buildCave();this.buildLights();this.guardian=this.ichthyosaur(.9);this.scene.add(this.guardian.group);
  const eyeMat=new THREE.MeshBasicMaterial({color:0xe0a772});
  for(const side of [-1,1])this.ellipsoid(this.guardian.group,eyeMat,1.8,.27,side*.5,.1,.1,.04);
  // Retain the original procedural sediment and animated skin/material foundations.
  this.suspendedParticles();const positions=this.particles.geometry.attributes.position;
  for(let i=0;i<positions.count;i++)positions.setXYZ(i,Math.sin(i*78.23)*37,1+(i%71)/10,-(i*13.23)%122);
  this.particles.geometry.computeBoundingSphere();
  const pm=this.particles.material as THREE.ShaderMaterial;
  pm.uniforms.uTorch={value:1};pm.vertexShader='uniform float uTorch;\n'+pm.vertexShader;
  pm.vertexShader=pm.vertexShader.replace('a=clamp(1.-length(mv.xyz)/95.,0.,1.)*.33;', 'float cone=1.-smoothstep(.28,.55,length(mv.xy)/max(.1,-mv.z));a=clamp(1.-length(mv.xyz)/23.,0.,1.)*(.025+cone*.38*uTorch);');
  this.decoyMesh=new THREE.Mesh(new THREE.IcosahedronGeometry(.18,1),new THREE.MeshBasicMaterial({color:0xff7040}));
  this.decoyMesh.add(new THREE.PointLight(0xff6831,9,10));this.scene.add(this.decoyMesh);
  this.bind();this.observer=new ResizeObserver(()=>this.resize());this.observer.observe(host);this.syncPickups();this.animate();this.publish();
 }
 buildCave(){
  const floor=this.material(0x747e71,'sand'),rock=this.material(0x587069,'rock'),ceiling=this.material(0x46585b,'rock');
  const floors:THREE.BufferGeometry[]=[],roofs:THREE.BufferGeometry[]=[],walls:THREE.BufferGeometry[]=[],details:THREE.BufferGeometry[]=[];
  for(const key of cells){const [c,r]=key.split(',').map(Number),p=world(c,r);
   const fg=new THREE.PlaneGeometry(CELL,CELL,2,2);fg.rotateX(-Math.PI/2);fg.translate(p.x,0,p.z);floors.push(fg);
   if(!(c===19&&r===3)){const cg=fg.clone();cg.rotateZ(Math.PI);cg.translate(p.x*2,8,0);roofs.push(cg);}
   for(const [dc,dr] of [[1,0],[-1,0],[0,1],[0,-1]])if(!cells.has(`${c+dc},${r+dr}`)){
    const g=new THREE.BoxGeometry(dc?1:CELL+.05,8.5,dr?1:CELL+.05);g.translate(p.x+dc*2.5,4,p.z-dr*2.5);walls.push(g);
    // Rock relief extends into solid wall, leaving a consistent navigable interior.
    for(let n=0;n<3;n++){const stone=new THREE.IcosahedronGeometry(1,1);stone.scale(dc?.7:1.7,1.3+(n%2)*.5,dr?.7:1.7);stone.translate(p.x+dc*2.45,1.3+n*2.5,p.z-dr*2.45);details.push(stone);}
   }
  }
  for(const [geos,mat] of [[floors,floor],[roofs,ceiling],[walls,rock],[details,rock]] as const){const merged=mergeGeometries(geos);if(merged)this.scene.add(new THREE.Mesh(merged,mat));geos.forEach(g=>g.dispose());}
  // Broken ribs at the relic: reuse the existing tube helper.
  const bone=this.material(0x9f9a7a,'rock');for(let i=0;i<6;i++)for(const s of [-1,1])this.scene.add(this.tube([V(-3+i*.75,.25,-113),V(-3+i*.75,1.3,-113+s*1.2),V(-3+i*.75,.3,-113+s*2.2)],[.12,.09,.025],bone,12,5));
  // A weathered stone plinth under the objective.
  const plinth=new THREE.Mesh(new THREE.CylinderGeometry(1.1,1.5,1.2,7),rock);plinth.position.set(RELIC.x,.6,RELIC.z);this.scene.add(plinth);
 }
 buildLights(){
  this.scene.add(this.camera);this.torchLight.position.set(.25,-.15,-.2);this.torchLight.target.position.set(0,0,-15);this.camera.add(this.torchLight,this.torchLight.target);
  const cone=new THREE.CylinderGeometry(.025,4.8,17,24,1,true);cone.rotateX(Math.PI/2);
  this.beam=new THREE.Mesh(cone,new THREE.MeshBasicMaterial({color:0x8ac9ac,transparent:true,opacity:.012,depthWrite:false,side:THREE.DoubleSide,blending:THREE.AdditiveBlending}));this.beam.position.set(.2,-.18,-8.6);this.camera.add(this.beam);
  const lamp=(x:number,z:number,color:number)=>{const mesh=new THREE.Mesh(new THREE.SphereGeometry(.12,8,6),new THREE.MeshBasicMaterial({color}));mesh.position.set(x,.75,z);mesh.add(new THREE.PointLight(color,1.4,6,1.3));this.scene.add(mesh);};
  for(const [x,z] of [[0,-18],[0,-28],[0,-40],[-12,-48],[-22,-60],[-22,-78],[-16,-90],[0,-98],[0,-108]])lamp(x,z,0x6ae4cf);
  for(const [x,z] of [[12,-94],[24,-87],[30,-80],[32,-65],[32,-49],[32,-33],[32,-19]])lamp(x,z,0xf3b762);
  const exit=new THREE.Group();exit.position.set(EXIT.x,.65,EXIT.z);const ring=new THREE.Mesh(new THREE.TorusGeometry(1.6,.05,8,48),new THREE.MeshBasicMaterial({color:0xb9ffdc}));ring.rotation.x=Math.PI/2;exit.add(ring);this.scene.add(exit);
  const sunlight=new THREE.SpotLight(0x9be3de,120,18,.65,1,1);sunlight.position.set(32,11,-12);sunlight.target.position.set(32,0,-12);this.scene.add(sunlight,sunlight.target);
  const shaft=new THREE.Mesh(new THREE.CylinderGeometry(.9,2.6,8,24,1,true),new THREE.MeshBasicMaterial({color:0x9ce1d4,transparent:true,opacity:.065,depthWrite:false,side:THREE.DoubleSide,blending:THREE.AdditiveBlending}));shaft.position.set(32,4,-12);this.scene.add(shaft);
 }
 syncPickups(){
  for(const [id,group] of this.pickupMeshes)if(!this.mission.pickups.some(p=>p.id===id)){this.scene.remove(group);group.traverse(o=>{if(o instanceof THREE.Mesh){o.geometry.dispose();(o.material as THREE.Material).dispose();}});this.pickupMeshes.delete(id);}
  for(const p of this.mission.pickups){let group=this.pickupMeshes.get(p.id);if(!group){group=new THREE.Group();const mat=new THREE.MeshStandardMaterial({color:p.item==='relic'?0xe2b65e:0x82c8b7,emissive:p.item==='relic'?0x6b3c07:0x153c36,emissiveIntensity:.7,metalness:.4,roughness:.45});
    if(p.item==='relic'){const points:THREE.Vector3[]=[],radii:number[]=[];for(let i=0;i<=72;i++){const t=i/72,a=t*Math.PI*4.5,r=.03+t*t*.62;points.push(V(Math.cos(a)*r,Math.sin(a)*r,0));radii.push(.01+t*.12);}group.add(this.tube(points,radii,mat,90,8));group.add(new THREE.PointLight(0xefbb68,3.5,7));}else group.add(new THREE.Mesh(new THREE.IcosahedronGeometry(.3,1),mat));
    this.scene.add(group);this.pickupMeshes.set(p.id,group);
   }group.position.set(p.position.x,p.position.y+Math.sin(this.time*1.7+p.id)*.12,p.position.z);group.rotation.y=this.time*.45;
  }
 }
 publish(){this.ui({mission:this.mission,playing:this.playing,started:this.started,pointerLocked:this.pointerLocked,error:this.error,audioNotice:this.audioNotice});}
 bind(){
  const on=(target:EventTarget,type:string,fn:EventListener,options?:AddEventListenerOptions)=>{target.addEventListener(type,fn,options);this.listeners.push(()=>target.removeEventListener(type,fn,options));};
  on(window,'keydown',((e:KeyboardEvent)=>{
   if(!this.playing)return;
   if(['Space','ArrowUp','ArrowDown','ArrowLeft','ArrowRight','Tab'].includes(e.code))e.preventDefault();
   this.keys.add(e.code);if(e.repeat)return;
   if(e.code==='Escape'){if(this.mission.pending!==null){this.mission.pending=null;this.publish();}else this.pause();}
   if(/^Digit[1-5]$/.test(e.code))this.mission.selected=Number(e.code.slice(-1))-1;
   if(e.code==='KeyE')this.mission.interact();if(e.code==='KeyF')this.mission.torch=!this.mission.torch;
   if(e.code==='KeyR')this.mission.use();if(e.code==='KeyG')this.mission.drop();if(e.code==='KeyM')this.setSound(!this.sound);
   this.publish();
  }) as EventListener);
  on(window,'keyup',((e:KeyboardEvent)=>{this.keys.delete(e.code);}) as EventListener);
  on(window,'blur',(()=>this.pause()) as EventListener);on(document,'visibilitychange',(()=>{if(document.hidden)this.pause();}) as EventListener);
  const canvas=this.renderer.domElement;
  on(canvas,'pointerdown',((e:PointerEvent)=>{
   if(!this.playing)return;
   // Capture keeps look events on the canvas while the button is held; also retry lock.
   try{canvas.setPointerCapture(e.pointerId);}catch{/* unsupported */}
   if(document.pointerLockElement!==canvas)this.requestLookLock(false);
  }) as EventListener);
  on(document,'pointermove',((e:PointerEvent)=>{if(!this.playing)return;
   // Pointer lock: relative motion. Unlocked: soft look-stick yaw inside the canvas,
   // without stacking raw movementX on continuous turn (that combination felt shaky).
   const locked=document.pointerLockElement===canvas;
   if(locked){this.lookPointer=null;this.fallbackTurn=0;const delta=lookDelta(this.targetYaw,this.targetPitch,e.movementX,e.movementY);this.targetYaw=delta.yaw;this.targetPitch=delta.pitch;return;}
   const bounds=canvas.getBoundingClientRect();
   if(e.clientX<bounds.left||e.clientX>bounds.right||e.clientY<bounds.top||e.clientY>bounds.bottom){this.lookPointer=null;this.fallbackTurn=0;return;}
   this.lookPointer={x:e.clientX,y:e.clientY};
   this.fallbackTurn=edgeTurn(e.clientX,bounds.left,bounds.width);
   const mx=this.fallbackTurn!==0?0:e.movementX;
   const delta=lookDelta(this.targetYaw,this.targetPitch,mx,e.movementY);this.targetYaw=delta.yaw;this.targetPitch=delta.pitch;
  }) as EventListener);
  on(window,'mouseout',((e:MouseEvent)=>{if(!e.relatedTarget){this.lookPointer=null;this.fallbackTurn=0;}}) as EventListener);
  // Reserve wheel/trackpad scroll for looking, never inventory selection.
  on(canvas,'wheel',((e:WheelEvent)=>{if(!this.playing)return;e.preventDefault();const scale=e.deltaMode===1?16:e.deltaMode===2?200:1;const delta=lookDelta(this.targetYaw,this.targetPitch,e.deltaX*scale,e.deltaY*scale);this.targetYaw=delta.yaw;this.targetPitch=delta.pitch;}) as EventListener,{passive:false});
  on(document,'pointerlockchange',(()=>{const was=this.pointerLocked;this.pointerLocked=document.pointerLockElement===canvas;if(this.pointerLocked){this.everLocked=true;this.lockDenied=false;this.lookPointer=null;this.fallbackTurn=0;}if(was&&!this.pointerLocked)this.pause();this.publish();}) as EventListener);
  on(document,'pointerlockerror',(()=>{this.lockDenied=true;this.mission.say(FREE_LOOK_HINT);this.publish();}) as EventListener);
  on(canvas,'webglcontextlost',((e:Event)=>{e.preventDefault();this.error='The graphics connection was lost. Reload the page to restart the dive.';this.pause();this.publish();}) as EventListener);
 }
 requestLookLock(announce=true){
  if(!this.playing||document.pointerLockElement===this.renderer.domElement)return;
  const fail=()=>{this.lockDenied=true;if(announce){this.mission.say(FREE_LOOK_HINT);this.publish();}};
  try{const result=this.renderer.domElement.requestPointerLock?.();result?.catch(fail);}catch{fail();}
 }
 initAudio(){
  if(this.audioContext)return;
  try{
   const Ctx=window.AudioContext||(window as unknown as {webkitAudioContext:typeof AudioContext}).webkitAudioContext;
   const ctx=new Ctx();this.audioContext=ctx;this.master=ctx.createGain();this.master.gain.value=this.sound?.7:0;
   this.audioProbe=buildDiveAudio(ctx,this.master);
   this.backgroundMusic=new BackgroundMusic(ctx,this.master);
   ctx.onstatechange=()=>{if(!this.alive)return;if(this.playing&&this.sound&&ctx.state!=='running')this.audioNotice='Sound interrupted. Pause and choose Test sound.';this.publish();};
  }catch{
   this.audioContext?.close().catch(()=>{});this.audioContext=null;this.master=null;
   this.audioNotice='Audio could not start in this browser. Try Test sound or open the game in Chrome.';
  }
 }
 enableAudio(chime=false){
  window.clearTimeout(this.audioTestTimer);this.initAudio();
  const ctx=this.audioContext,master=this.master;
  if(!ctx||!master){this.publish();return;}
  master.gain.setTargetAtTime(this.sound?.7:0,ctx.currentTime,.04);
  ctx.resume().then(()=>{
   if(!this.alive)return;
   if(!this.playing&&!this.testingAudio){ctx.suspend().catch(()=>{});return;}
   if(ctx.state!=='running'){this.audioNotice='Sound is blocked. Pause and choose Test sound.';this.publish();return;}
   this.audioNotice='';if(chime&&this.sound&&(this.playing||this.testingAudio))playDiveChime(ctx,master);
   if(this.playing)this.backgroundMusic?.start().catch(()=>{if(this.alive){this.audioNotice='Background music could not load. Pause and resume to retry.';this.publish();}});
   this.publish();
  }).catch(()=>{if(this.alive){this.audioNotice='Sound is blocked. Pause and choose Test sound.';this.publish();}});
 }
 testingAudio=false;
 testSound(){
  this.sound=true;this.testingAudio=true;this.enableAudio(true);
  this.audioTestTimer=window.setTimeout(()=>{this.testingAudio=false;if(!this.playing)this.audioContext?.suspend().catch(()=>{});},1500);
  this.publish();
 }
 setSound(value:boolean){
  this.sound=value;this.audioNotice='';
  if(value){if(this.playing)this.enableAudio();else this.testSound();}
  else if(this.master&&this.audioContext)this.master.gain.setTargetAtTime(0,this.audioContext.currentTime,.04);
  this.publish();
 }
 start(){
  if(this.mission.outcome!=='playing')this.reset();this.playing=true;this.started=true;this.keys.clear();this.clock.getDelta();this.testingAudio=false;if(this.sound)this.enableAudio(true);
  this.lookPointer=null;this.fallbackTurn=0;this.requestLookLock(true);this.publish();
 }
 pause(){if(!this.playing)return;this.testingAudio=false;window.clearTimeout(this.audioTestTimer);this.playing=false;this.lookPointer=null;this.fallbackTurn=0;this.keys.clear();this.velocity.set(0,0,0);if(document.pointerLockElement===this.renderer.domElement)document.exitPointerLock();this.audioContext?.suspend().catch(()=>{});this.publish();}
 reset(){this.backgroundMusic?.reset();this.mission=new Mission();this.position.copy(this.mission.position);this.camera.position.copy(this.position);this.yaw=this.targetYaw=0;this.pitch=this.targetPitch=0;this.lookPointer=null;this.fallbackTurn=0;this.lockDenied=false;this.velocity.set(0,0,0);this.time=0;this.lastSent=0;this.keys.clear();this.syncPickups();this.publish();}
 animate=()=>{
  if(!this.alive)return;this.frame=requestAnimationFrame(this.animate);const dt=Math.min(this.clock.getDelta(),.05);
  if(this.playing){this.time+=dt;const m=this.mission;
   const pressed=(...keys:string[])=>keys.some(k=>this.keys.has(k))?1:0;
   if(!this.pointerLocked&&this.lookPointer){const bounds=this.renderer.domElement.getBoundingClientRect();this.fallbackTurn=edgeTurn(this.lookPointer.x,bounds.left,bounds.width);}
   else if(!this.pointerLocked&&!this.lookPointer)this.fallbackTurn=0;
   const horizontalLook=pressed('ArrowRight')-pressed('ArrowLeft')+(!this.pointerLocked?this.fallbackTurn*FREE_LOOK_RATE:0);
   const delta=lookDelta(this.targetYaw,this.targetPitch,horizontalLook*dt*650,(pressed('ArrowDown')-pressed('ArrowUp'))*dt*650);this.targetYaw=delta.yaw;this.targetPitch=delta.pitch;
   this.yaw=THREE.MathUtils.lerp(this.yaw,this.targetYaw,1-Math.exp(-16*dt));this.pitch=THREE.MathUtils.lerp(this.pitch,this.targetPitch,1-Math.exp(-16*dt));this.camera.rotation.set(this.pitch,this.yaw,0);
   this.camera.getWorldDirection(this.forward);this.right.crossVectors(this.forward,this.upAxis).normalize();
   this.move.copy(this.forward).multiplyScalar(pressed('KeyW')-pressed('KeyS')).addScaledVector(this.right,pressed('KeyD')-pressed('KeyA'));this.move.y+=pressed('Space')-pressed('KeyQ','ControlLeft','ControlRight');
   const sprint=!!pressed('ShiftLeft','ShiftRight')&&m.stamina>3&&this.move.lengthSq()>.1;
   if(this.move.lengthSq()>1)this.move.normalize();this.move.multiplyScalar(sprint?4.8:2.8);this.velocity.lerp(this.move,1-Math.exp(-4*dt));
   moveBody(m.position,this.velocity.x*dt,this.velocity.y*dt,this.velocity.z*dt);m.update(dt,sprint);this.position.copy(m.position);this.camera.position.copy(this.position);
   if(m.outcome!=='playing')this.pause();
  }
  const blue=THREE.MathUtils.smoothstep(-this.position.z,40,58);
  const fog=this.scene.fog as THREE.FogExp2;fog.color.set(0x041913).lerp(new THREE.Color(0x030c1b),blue);(this.scene.background as THREE.Color).copy(fog.color);
  this.uniforms.uTime.value=this.time;this.torchLight.visible=this.mission.torch;this.beam.visible=this.mission.torch;
  (this.particles.material as THREE.ShaderMaterial).uniforms.uTorch.value=this.mission.torch?1:0;
  const p=this.mission.predator;this.guardian.group.position.copy(p.position);const diff=Math.atan2(Math.sin(p.heading-this.guardian.group.rotation.y),Math.cos(p.heading-this.guardian.group.rotation.y));this.guardian.group.rotation.y+=diff*Math.min(1,dt*5);
  this.guardian.fins.forEach(f=>f.rotation.x=Math.sin(this.time*2+(f.userData.phase||0))*.25*(f.userData.side||1));this.guardian.tail.rotation.y=Math.sin(this.time*3)*.22;
  this.syncPickups();this.decoyMesh.visible=!!this.mission.decoy;if(this.mission.decoy)this.decoyMesh.position.copy(this.mission.decoy.position);
  if(this.time-this.lastSent>.1){this.lastSent=this.time;this.publish();}
  this.renderer.render(this.scene,this.camera);
 }
 dispose(){window.clearTimeout(this.audioTestTimer);if(this.audioContext)this.audioContext.onstatechange=null;this.backgroundMusic?.dispose();this.pause();super.dispose();}
}
