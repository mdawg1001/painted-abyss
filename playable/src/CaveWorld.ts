import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { OceanWorld } from './legacy/ocean';
import { buildDiveAudio, playDiveChime, playInventoryClick, playStabSound, playGuardianDeath, SwimWaterAudio } from './diveAudio';
import { BackgroundMusic } from './backgroundMusic';
import { loadCaveRockMaps, type CaveRockMaps } from './rockMaps';
import { createKnifeVisual, upgradeKnifeVisual, poseKnife, KNIFE_HOLD_POS, KNIFE_HOLD_ROT, KNIFE_STAB_Z } from './knifeAsset';
import { Mission, cells, world, CELL, EXIT, RELIC, FLOOR_Y, distance, moveBody, lookDelta, edgeTurn, FREE_LOOK_RATE, torchModulation, applySiltToTorch, stepSilt, siltAt, createSiltPlume, readInventoryTipsSeen, writeInventoryTipsSeen, updateBuoyancy, stepSwimVelocity } from './simulation';
export type Snapshot={mission:Mission;playing:boolean;started:boolean;pointerLocked:boolean;error:string;audioNotice:string;yaw:number};
const V=(x=0,y=0,z=0)=>new THREE.Vector3(x,y,z);

const shaftVert=`varying vec2 vUv;varying vec3 wPos;void main(){vUv=uv;wPos=(modelMatrix*vec4(position,1.)).xyz;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`;
const shaftFrag=`varying vec2 vUv;varying vec3 wPos;uniform float uTime;uniform vec3 uColor;uniform float uOpacity;
void main(){
  float edge=pow(max(0.,sin(vUv.x*3.14159)),2.4);
  float vertical=pow(sin(vUv.y*3.14159),.55);
  float pulse=.82+sin(wPos.x*.11+wPos.z*.09+uTime*.19)*.14;
  float core=pow(max(0.,1.-abs(vUv.x-.5)*2.4),3.2)*.55;
  float a=(edge*vertical*pulse+core*vertical)*uOpacity;
  gl_FragColor=vec4(uColor,a);
}`;
/** Torch volume: Beer–Lambert scatter along the spot cone (not a flat lit shell). */
const torchBeamVert=`varying vec2 vUv;varying vec3 vLocal;varying vec3 vView;
void main(){
  vUv=uv;vLocal=position;
  vec4 mv=modelViewMatrix*vec4(position,1.);
  vView=mv.xyz;gl_Position=projectionMatrix*mv;
}`;
const torchBeamFrag=`varying vec2 vUv;varying vec3 vLocal;varying vec3 vView;
uniform float uTime;uniform vec3 uColor;uniform float uOpacity;uniform float uBeta;uniform float uBeamLen;
void main(){
  // Cylinder UV: y=1 at tip (+Z), y=0 at far end. along 0→1 tip→far.
  float along=1.-vUv.y;
  float dist=along*uBeamLen;
  // Backscatter column: bright near the lamp, dies with β^B · range (Sea-thru / Beer–Lambert).
  float scatter=exp(-uBeta*dist);
  float tip=smoothstep(0.,.06,along);
  float endFade=1.-smoothstep(.5,1.,along);
  // Soft radial core — denser on axis, soft outer edge (reads as spot penumbra, not a solid tube).
  float axis=length(vLocal.xy);
  float coneR=mix(.02,3.15,along);
  float radial=1.-smoothstep(coneR*.15,coneR*.92,axis);
  radial*=radial;
  // Prefer looking across the shaft (cheap Mie-ish); dims when staring straight down the bore.
  vec3 Vn=normalize(vView);
  float across=1.-pow(abs(Vn.z),.85);
  float pulse=.88+sin(dist*.35+uTime*.55+axis*2.2)*.1;
  float a=scatter*tip*endFade*radial*across*pulse*uOpacity;
  if(a<.002)discard;
  gl_FragColor=vec4(uColor,a);
}`;

export class CaveWorld extends OceanWorld {
 audioNotice='';audioProbe:AnalyserNode|null=null;audioTestTimer=0;
 backgroundMusic:BackgroundMusic|null=null;
 swimWater:SwimWaterAudio|null=null;
 mission=new Mission(readInventoryTipsSeen());ui:(snapshot:Snapshot)=>void;error='';pointerLocked=false;everLocked=false;lastSent=0;
 fallbackTurn=0;lockDenied=false;lookPointer:{x:number;y:number}|null=null;
 torchLight=new THREE.SpotLight(0xeaf6ff,210,34,.38,.55,1.05);
 beam!:THREE.Mesh;torchBody!:THREE.Group;torchLensMat!:THREE.MeshStandardMaterial;
 /** Rest pose for the camera-parented lantern (local space). */
 torchRestPos=V(.44,-.4,-.62);torchRestRot=new THREE.Euler(.18,-.22,.32);
 composer!:EffectComposer;bloom!:UnrealBloomPass;
 guardian!:ReturnType<OceanWorld['ichthyosaur']>;pickupMeshes=new Map<number,THREE.Group>();decoyMesh!:THREE.Mesh;
 /** Held FPS knife when inventory knife is selected; torch meshes hide meanwhile. */
 knifeVisual:THREE.Group|null=null;knifeFlashUntil=0;
 shakeAmp=0;blood:THREE.Points|null=null;bloodVel:Float32Array|null=null;bloodLife=0;
 /** Floor-kick silt storm (separate from ambient suspended dust). */
 siltStorm:THREE.Points|null=null;siltStormVel:Float32Array|null=null;siltStormLife:Float32Array|null=null;
 rockMaps:CaveRockMaps;
 constructor(host:HTMLDivElement,ui:(snapshot:Snapshot)=>void){
  super(host,{onReady:()=>{},onPause:()=>{},onStatus:()=>{},onToggleUI:()=>{},onGlide:()=>{},onError:()=>{}},{deferStart:true});
  this.ui=ui;this.rockMaps=loadCaveRockMaps();this.position.copy(this.mission.position);this.camera.position.copy(this.position);this.pitch=this.targetPitch=0;
  // Deep teal void — matches reference plates (cyan haze, not pure black)
  this.scene.background=new THREE.Color(0x041a22);this.scene.fog=new THREE.FogExp2(0x0a2e38,.038);
  this.camera.far=130;this.camera.fov=64;this.camera.updateProjectionMatrix();
  this.renderer.toneMappingExposure=1.12;this.renderer.toneMapping=THREE.ACESFilmicToneMapping;
  // Modest torch shadows only (no other casters) — 512² map for Safari cost.
  this.renderer.shadowMap.enabled=true;
  this.renderer.shadowMap.type=THREE.PCFShadowMap;
  // Cool teal ambient fill so rock reads in the murk; shafts/torch still dominate
  this.scene.add(new THREE.HemisphereLight(0x5a9eae,0x081820,.42));
  this.scene.add(new THREE.AmbientLight(0x123840,.22));
  const skyFill=new THREE.DirectionalLight(0x7ec8d4,.55);skyFill.position.set(-8,30,-20);this.scene.add(skyFill);
  this.buildCave();this.buildLights();this.buildComposer();
  this.guardian=this.ichthyosaur(.9);this.scene.add(this.guardian.group);
  this.guardian.group.traverse(o=>{if(o instanceof THREE.Mesh){o.castShadow=true;o.receiveShadow=true;}});
  const eyeMat=new THREE.MeshBasicMaterial({color:0xe0a772});
  for(const side of [-1,1])this.ellipsoid(this.guardian.group,eyeMat,1.8,.27,side*.5,.1,.1,.04);
  this.suspendedParticles();const positions=this.particles.geometry.attributes.position;
  for(let i=0;i<positions.count;i++)positions.setXYZ(i,Math.sin(i*78.23)*37,1+(i%71)/10,-(i*13.23)%122);
  this.particles.geometry.computeBoundingSphere();
  const pm=this.particles.material as THREE.ShaderMaterial;
  pm.uniforms.uTorch={value:1};
  pm.vertexShader='uniform float uTorch;\n'+pm.vertexShader;
  pm.vertexShader=pm.vertexShader.replace(
   'gl_PointSize=clamp(38./-mv.z,1.,3.5)*uPixelRatio;gl_Position=projectionMatrix*mv;a=clamp(1.-length(mv.xyz)/95.,0.,1.)*.33;',
   'float cone=1.-smoothstep(.22,.52,length(mv.xy)/max(.08,-mv.z));gl_PointSize=clamp((28.+cone*42.*uTorch)/-mv.z,1.2,5.5)*uPixelRatio;gl_Position=projectionMatrix*mv;a=clamp(1.-length(mv.xyz)/28.,0.,1.)*(.04+cone*.55*uTorch);'
  );
  pm.fragmentShader=pm.fragmentShader.replace(
   'gl_FragColor=vec4(.65,.87,.79,a*smoothstep(.5,.0,d));',
   'gl_FragColor=vec4(.78,.92,.96,a*smoothstep(.5,.0,d));'
  );
  this.decoyMesh=new THREE.Mesh(new THREE.IcosahedronGeometry(.18,1),new THREE.MeshBasicMaterial({color:0xff7040}));
  this.decoyMesh.add(new THREE.PointLight(0xff6831,12,12));this.scene.add(this.decoyMesh);
  this.buildBlood();
  this.buildSiltStorm();
  // Mount knife stub immediately so selecting slot 1 always shows a held prop;
  // Poly Haven glTF upgrades the mesh when ready.
  this.knifeVisual=createKnifeVisual();
  this.camera.add(this.knifeVisual);
  this.knifeVisual.visible=this.holdingKnife();
  if(this.holdingKnife())this.setTorchMeshesVisible(false);
  const w=window as Window&{__knifeLoad?:string};
  w.__knifeLoad='pending';
  upgradeKnifeVisual(this.knifeVisual).then(ok=>{
   if(!this.alive||!this.knifeVisual){w.__knifeLoad='disposed';return;}
   if(ok)poseKnife(this.knifeVisual);
   this.knifeVisual.visible=this.holdingKnife();
   if(this.holdingKnife())this.setTorchMeshesVisible(false);
   w.__knifeLoad=ok?'ok':'fail';
  }).catch(err=>{w.__knifeLoad='error:'+String(err);});
  this.bind();this.observer=new ResizeObserver(()=>this.resize());this.observer.observe(host);this.syncPickups();this.animate();this.publish();
 }
 /** Floating blood cloud spawned on guardian death (world-space points). */
 buildBlood(){
  const n=48;
  const pos=new Float32Array(n*3);
  const vel=new Float32Array(n*3);
  for(let i=0;i<n;i++){pos[i*3]=0;pos[i*3+1]=-40;pos[i*3+2]=0;vel[i*3]=0;vel[i*3+1]=0;vel[i*3+2]=0;}
  const geo=new THREE.BufferGeometry();
  geo.setAttribute('position',new THREE.BufferAttribute(pos,3));
  const mat=new THREE.PointsMaterial({color:0x8a1a22,size:.18,transparent:true,opacity:.85,depthWrite:false,sizeAttenuation:true});
  this.blood=new THREE.Points(geo,mat);this.blood.visible=false;this.bloodVel=vel;this.scene.add(this.blood);
 }
 spawnBlood(at:THREE.Vector3| {x:number;y:number;z:number}){
  if(!this.blood||!this.bloodVel)return;
  const pos=this.blood.geometry.attributes.position as THREE.BufferAttribute;
  for(let i=0;i<pos.count;i++){
   pos.setXYZ(i,at.x+(Math.random()-.5)*.6,at.y+(Math.random()-.5)*.35,at.z+(Math.random()-.5)*.6);
   this.bloodVel[i*3]=(Math.random()-.5)*.35;
   this.bloodVel[i*3+1]=.05+Math.random()*.22;
   this.bloodVel[i*3+2]=(Math.random()-.5)*.35;
  }
  pos.needsUpdate=true;this.blood.visible=true;this.bloodLife=14;
  (this.blood.material as THREE.PointsMaterial).opacity=.9;
 }
 updateBlood(dt:number){
  if(!this.blood||!this.bloodVel||!this.blood.visible)return;
  this.bloodLife-=dt;
  const pos=this.blood.geometry.attributes.position as THREE.BufferAttribute;
  for(let i=0;i<pos.count;i++){
   let x=pos.getX(i)+this.bloodVel[i*3]*dt;
   let y=pos.getY(i)+this.bloodVel[i*3+1]*dt;
   let z=pos.getZ(i)+this.bloodVel[i*3+2]*dt;
   this.bloodVel[i*3]*=Math.exp(-dt*.4);
   this.bloodVel[i*3+1]=this.bloodVel[i*3+1]*Math.exp(-dt*.35)+Math.sin(this.time*1.7+i)*.02*dt;
   this.bloodVel[i*3+2]*=Math.exp(-dt*.4);
   if(y<FLOOR_Y+.2){y=FLOOR_Y+.2;this.bloodVel[i*3+1]=Math.abs(this.bloodVel[i*3+1])*.3;}
   pos.setXYZ(i,x,y,z);
  }
  pos.needsUpdate=true;
  const mat=this.blood.material as THREE.PointsMaterial;
  mat.opacity=Math.max(0,Math.min(.9,this.bloodLife/6));
  if(this.bloodLife<=0){this.blood.visible=false;mat.opacity=0;}
 }
 /** Dense silt motes spawned by bed shear — settle with gravity, not ambient dust. */
 buildSiltStorm(){
  const n=420;
  const pos=new Float32Array(n*3);
  const vel=new Float32Array(n*3);
  const life=new Float32Array(n);
  for(let i=0;i<n;i++){pos[i*3]=0;pos[i*3+1]=-80;pos[i*3+2]=0;life[i]=0;}
  const geo=new THREE.BufferGeometry();
  geo.setAttribute('position',new THREE.BufferAttribute(pos,3));
  const mat=new THREE.PointsMaterial({
   color:0xc8d8e0,size:.11,transparent:true,opacity:0,depthWrite:false,sizeAttenuation:true,
   blending:THREE.AdditiveBlending,
  });
  this.siltStorm=new THREE.Points(geo,mat);this.siltStorm.visible=false;
  this.siltStormVel=vel;this.siltStormLife=life;this.scene.add(this.siltStorm);
 }
 /** Inject a burst of silt particles at the diver's feet when the bed is kicked. */
 emitSiltBurst(intensity:number){
  if(!this.siltStorm||!this.siltStormVel||!this.siltStormLife||intensity<.04)return;
  const pos=this.siltStorm.geometry.attributes.position as THREE.BufferAttribute;
  const n=pos.count;
  const count=Math.min(28,Math.max(1,Math.floor(2+intensity*36)));
  const p=this.mission.position;
  let spawned=0;
  for(let i=0;i<n&&spawned<count;i++){
   if(this.siltStormLife[i]>.15)continue;
   const ang=Math.random()*Math.PI*2;
   const rad=Math.random()*1.1;
   pos.setXYZ(i,p.x+Math.cos(ang)*rad,FLOOR_Y+.08+Math.random()*.35,p.z+Math.sin(ang)*rad);
   this.siltStormVel[i*3]=(Math.random()-.5)*(.4+intensity*.9);
   this.siltStormVel[i*3+1]=.35+Math.random()*(.9+intensity*1.4);
   this.siltStormVel[i*3+2]=(Math.random()-.5)*(.4+intensity*.9);
   this.siltStormLife[i]=1.8+Math.random()*3.2+intensity*2.5;
   spawned++;
  }
  pos.needsUpdate=true;
  this.siltStorm.visible=true;
 }
 updateSiltStorm(dt:number,optical:number){
  if(!this.siltStorm||!this.siltStormVel||!this.siltStormLife)return;
  const pos=this.siltStorm.geometry.attributes.position as THREE.BufferAttribute;
  let alive=0;
  for(let i=0;i<pos.count;i++){
   if(this.siltStormLife[i]<=0)continue;
   this.siltStormLife[i]-=dt;
   // Coarse-ish fall after initial loft (gameplay Stokes, not hours).
   this.siltStormVel[i*3+1]-=2.8*dt;
   this.siltStormVel[i*3]*=Math.exp(-dt*.55);
   this.siltStormVel[i*3+2]*=Math.exp(-dt*.55);
   let x=pos.getX(i)+this.siltStormVel[i*3]*dt;
   let y=pos.getY(i)+this.siltStormVel[i*3+1]*dt;
   let z=pos.getZ(i)+this.siltStormVel[i*3+2]*dt;
   if(y<FLOOR_Y+.05){y=FLOOR_Y+.05;this.siltStormVel[i*3+1]=0;this.siltStormLife[i]*=Math.exp(-dt*2.5);}
   pos.setXYZ(i,x,y,z);
   if(this.siltStormLife[i]>0)alive++;
  }
  pos.needsUpdate=true;
  const mat=this.siltStorm.material as THREE.PointsMaterial;
  mat.opacity=Math.min(.95,.12+optical*.85);
  mat.size=.07+optical*.16;
  this.siltStorm.visible=alive>0||optical>.05;
 }
 buildCave(){
  const {rock:rockMaps,sand:sandMaps,moss:mossMaps}=this.rockMaps;
  // Near-white tints so Poly Haven albedo dominates; ceiling kept cooler/darker
  const floor=this.material(0xc9c4b8,'sand',.88,3.4,sandMaps,mossMaps);
  const rock=this.material(0xb4c0c4,'rock',.86,1.6,rockMaps,mossMaps);
  const ceiling=this.material(0x6a7882,'rock',.9,.6,rockMaps,mossMaps);
  const floors:THREE.BufferGeometry[]=[],roofs:THREE.BufferGeometry[]=[],walls:THREE.BufferGeometry[]=[],details:THREE.BufferGeometry[]=[];
  for(const key of cells){const [c,r]=key.split(',').map(Number),p=world(c,r);
   const fg=new THREE.PlaneGeometry(CELL,CELL,2,2);fg.rotateX(-Math.PI/2);fg.translate(p.x,0,p.z);floors.push(fg);
   if(!(c===19&&r===3)){const cg=fg.clone();cg.rotateZ(Math.PI);cg.translate(p.x*2,8,0);roofs.push(cg);}
   for(const [dc,dr] of [[1,0],[-1,0],[0,1],[0,-1]])if(!cells.has(`${c+dc},${r+dr}`)){
    const g=new THREE.BoxGeometry(dc?1:CELL+.05,8.5,dr?1:CELL+.05);g.translate(p.x+dc*2.5,4,p.z-dr*2.5);walls.push(g);
    for(let n=0;n<3;n++){const stone=new THREE.IcosahedronGeometry(1,1);stone.scale(dc?.7:1.7,1.3+(n%2)*.5,dr?.7:1.7);stone.translate(p.x+dc*2.45,1.3+n*2.5,p.z-dr*2.45);details.push(stone);}
   }
  }
  for(const [geos,mat] of [[floors,floor],[roofs,ceiling],[walls,rock],[details,rock]] as const){
   const merged=mergeGeometries(geos);if(!merged)continue;
   const mesh=new THREE.Mesh(merged,mat);mesh.castShadow=true;mesh.receiveShadow=true;this.scene.add(mesh);
   geos.forEach(g=>g.dispose());
  }
  const bone=this.material(0xc8c0a8,'rock',.82,1.5,rockMaps,mossMaps);for(let i=0;i<6;i++)for(const s of [-1,1]){
   const rib=this.tube([V(-3+i*.75,.25,-113),V(-3+i*.75,1.3,-113+s*1.2),V(-3+i*.75,.3,-113+s*2.2)],[.12,.09,.025],bone,12,5);
   rib.castShadow=true;rib.receiveShadow=true;this.scene.add(rib);
  }
  const plinth=new THREE.Mesh(new THREE.CylinderGeometry(1.1,1.5,1.2,7),rock);plinth.position.set(RELIC.x,.6,RELIC.z);
  plinth.castShadow=true;plinth.receiveShadow=true;this.scene.add(plinth);
 }
 beamMaterial(color:THREE.ColorRepresentation,opacity:number){
  return new THREE.ShaderMaterial({
   uniforms:{uTime:this.uniforms.uTime,uColor:{value:new THREE.Color(color)},uOpacity:{value:opacity}},
   transparent:true,depthWrite:false,side:THREE.DoubleSide,blending:THREE.AdditiveBlending,
   vertexShader:shaftVert,fragmentShader:shaftFrag,
  });
 }
 /** Dive-torch volume cone — scatter fade along range; shafts keep beamMaterial(). */
 torchBeamMaterial(color:THREE.ColorRepresentation,opacity:number){
  return new THREE.ShaderMaterial({
   uniforms:{
    uTime:this.uniforms.uTime,
    uColor:{value:new THREE.Color(color)},
    uOpacity:{value:opacity},
    uBeta:{value:.12},
    uBeamLen:{value:20},
   },
   transparent:true,depthWrite:false,depthTest:true,side:THREE.DoubleSide,blending:THREE.AdditiveBlending,
   vertexShader:torchBeamVert,fragmentShader:torchBeamFrag,
  });
 }
 addShaft(x:number,y:number,z:number,len:number,topR:number,botR:number,color:number,opacity:number,tiltX=0,tiltZ=0){
  const mesh=new THREE.Mesh(new THREE.CylinderGeometry(topR,botR,len,28,1,true),this.beamMaterial(color,opacity));
  mesh.position.set(x,y,z);mesh.rotation.x=tiltX;mesh.rotation.z=tiltZ;this.scene.add(mesh);return mesh;
 }
 /** Procedural Diving Behemoth: battered safety-yellow dive lantern. Local −Z = beam. */
 buildTorchBody(){
  const group=new THREE.Group();
  // Worn paint — duller yellow with grit
  const yellow=new THREE.MeshStandardMaterial({color:0xd4a80e,metalness:.08,roughness:.62});
  const yellowDark=new THREE.MeshStandardMaterial({color:0xb8890a,metalness:.06,roughness:.7});
  const yellowStain=new THREE.MeshStandardMaterial({color:0x8a7020,metalness:.05,roughness:.82});
  const black=new THREE.MeshStandardMaterial({color:0x141618,metalness:.2,roughness:.68});
  const blackWorn=new THREE.MeshStandardMaterial({color:0x2a2e32,metalness:.15,roughness:.78});
  const chrome=new THREE.MeshStandardMaterial({color:0xa8b0b8,metalness:.88,roughness:.32});
  const chromeRust=new THREE.MeshStandardMaterial({color:0x6a5a48,metalness:.55,roughness:.55});
  const bareMetal=new THREE.MeshStandardMaterial({color:0x4a5056,metalness:.7,roughness:.45});
  const scratchMat=new THREE.MeshStandardMaterial({color:0x2a2c28,metalness:.4,roughness:.35});
  const moss=new THREE.MeshStandardMaterial({color:0x3a6a38,metalness:0,roughness:.95});
  const mossDark=new THREE.MeshStandardMaterial({color:0x2a4a2c,metalness:0,roughness:.98});
  const kelp=new THREE.MeshStandardMaterial({color:0x4a7a3a,metalness:0,roughness:.85,side:THREE.DoubleSide});
  const kelpBright=new THREE.MeshStandardMaterial({color:0x5a8a42,metalness:0,roughness:.8,side:THREE.DoubleSide});
  const reflector=new THREE.MeshStandardMaterial({color:0xd0d8e0,metalness:.92,roughness:.22});
  this.torchLensMat=new THREE.MeshStandardMaterial({color:0xe8f0f4,emissive:0xb8d8f0,emissiveIntensity:1.4,metalness:.05,roughness:.28,transparent:true,opacity:.9});
  const alongZ=(geo:THREE.BufferGeometry)=>{geo.rotateX(Math.PI/2);return geo;};

  const barrel=new THREE.Mesh(alongZ(new THREE.CylinderGeometry(.055,.058,.42,24)),yellow);
  barrel.position.set(0,0,-.08);group.add(barrel);
  for(let i=0;i<7;i++){
   const rib=new THREE.Mesh(alongZ(new THREE.CylinderGeometry(.062,.062,.012,20)),i%3===0?yellowStain:yellowDark);
   rib.position.set(0,0,.04-i*.038);group.add(rib);
  }
  const neck=new THREE.Mesh(alongZ(new THREE.CylinderGeometry(.07,.055,.06,20)),yellowDark);
  neck.position.set(0,0,-.31);group.add(neck);

  // Paint chips — bare metal showing through yellow
  for(const [x,y,z,sx,sy] of [[.05,-.02,-.12,.022,.012],[-.048,.025,0,.018,.01],[.03,.04,.05,.025,.014],[-.04,-.035,-.22,.02,.011],[.045,.01,-.28,.016,.009]] as const){
   const chip=new THREE.Mesh(new THREE.SphereGeometry(1,6,5),bareMetal);
   chip.scale.set(sx,sy,.008);chip.position.set(x,y,z);group.add(chip);
  }

  // Deep scratches / scrapes along the barrel (visible gouges)
  for(const [y,z,len,ang] of [[.052,-.05,.16,.15],[-.05,-.14,.13,-.2],[.025,.02,.14,.35],[-.035,-.24,.1,.05],[.04,-.2,.11,-.4]] as const){
   const scratch=new THREE.Mesh(new THREE.BoxGeometry(.0045,.0022,len),scratchMat);
   scratch.position.set(Math.cos(ang)*.059,y,z);scratch.rotation.z=ang*.5;group.add(scratch);
   // Bright metal lip beside the gouge
   const lip=new THREE.Mesh(new THREE.BoxGeometry(.002,.0015,len*.85),bareMetal);
   lip.position.set(Math.cos(ang)*.061,y+.003,z);lip.rotation.z=ang*.5;group.add(lip);
  }
  // Gouge on the bezel rim
  const gouge=new THREE.Mesh(new THREE.BoxGeometry(.036,.014,.01),blackWorn);
  gouge.position.set(.09,.05,-.41);gouge.rotation.z=.4;group.add(gouge);
  const gougeMetal=new THREE.Mesh(new THREE.BoxGeometry(.02,.008,.006),bareMetal);
  gougeMetal.position.set(.095,.055,-.408);gougeMetal.rotation.z=.4;group.add(gougeMetal);

  const bezel=new THREE.Mesh(alongZ(new THREE.CylinderGeometry(.118,.112,.07,28)),blackWorn);
  bezel.position.set(0,0,-.38);group.add(bezel);
  const bezelRim=new THREE.Mesh(alongZ(new THREE.CylinderGeometry(.122,.122,.014,28)),black);
  bezelRim.position.set(0,0,-.415);group.add(bezelRim);
  for(let i=0;i<8;i++){
   const a=(i/8)*Math.PI*2;
   const screw=new THREE.Mesh(new THREE.CylinderGeometry(.008,.008,.016,6),i%3===0?chromeRust:chrome);
   screw.rotation.x=Math.PI/2;screw.position.set(Math.cos(a)*.1,Math.sin(a)*.1,-.425);group.add(screw);
  }

  const cup=new THREE.Mesh(new THREE.SphereGeometry(.095,20,12,0,Math.PI*2,0,Math.PI*.55),reflector);
  cup.scale.set(1,1,.55);cup.rotation.x=Math.PI;cup.position.set(0,0,-.36);group.add(cup);
  const lens=new THREE.Mesh(new THREE.CircleGeometry(.088,28),this.torchLensMat);
  lens.position.set(0,0,-.432);group.add(lens);
  // Cracked / cloudy lens edge smear
  const smear=new THREE.Mesh(new THREE.RingGeometry(.06,.086,20),new THREE.MeshStandardMaterial({color:0x6a7880,metalness:.1,roughness:.85,transparent:true,opacity:.35}));
  smear.position.set(0,0,-.433);group.add(smear);

  const switchBase=new THREE.Mesh(new THREE.BoxGeometry(.028,.04,.055),yellowStain);
  switchBase.position.set(.065,.01,-.2);group.add(switchBase);
  const switchKnob=new THREE.Mesh(new THREE.BoxGeometry(.022,.028,.03),yellowDark);
  switchKnob.position.set(.078,.01,-.2);group.add(switchKnob);

  const tail=new THREE.Mesh(alongZ(new THREE.CylinderGeometry(.06,.058,.08,20)),blackWorn);
  tail.position.set(0,0,.18);group.add(tail);
  for(let i=0;i<4;i++){
   const knurl=new THREE.Mesh(alongZ(new THREE.CylinderGeometry(.063,.063,.008,16)),black);
   knurl.position.set(0,0,.15+i*.018);group.add(knurl);
  }
  const tailEnd=new THREE.Mesh(alongZ(new THREE.CylinderGeometry(.052,.055,.02,16)),black);
  tailEnd.position.set(0,0,.225);group.add(tailEnd);

  const bracketPlate=new THREE.Mesh(new THREE.BoxGeometry(.035,.012,.1),chromeRust);
  bracketPlate.position.set(0,.07,-.28);group.add(bracketPlate);
  const bracketArm=new THREE.Mesh(new THREE.BoxGeometry(.035,.055,.012),chrome);
  bracketArm.position.set(0,.095,-.235);group.add(bracketArm);
  for(const z of [-.3,-.26]){
   const bolt=new THREE.Mesh(new THREE.CylinderGeometry(.006,.006,.014,8),chromeRust);
   bolt.rotation.x=Math.PI/2;bolt.position.set(0,.077,z);group.add(bolt);
  }

  const handlePts=[V(0,.078,-.32),V(0,.155,-.22),V(0,.17,-.05),V(0,.14,.1),V(0,.075,.16)];
  group.add(new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(handlePts),24,.018,10,false),blackWorn));

  // Moss clumps — wet growth on handle, bezel crease, and grip ribs
  const mossSpots:[number,number,number,number][]=[
   [0,.12,-.08,.022],[.02,.14,-.2,.018],[-.015,.1,.08,.016],
   [.08,-.02,-.36,.02],[-.07,.04,-.39,.017],[.06,.06,-.4,.014],
   [-.05,-.04,.02,.019],[.04,-.05,-.18,.015],[0,.02,.2,.018],
   [-.04,.08,-.28,.012],[.05,.09,-.12,.014],
  ];
  for(const [x,y,z,s] of mossSpots){
   const clump=new THREE.Mesh(new THREE.IcosahedronGeometry(1,0),((x*10+z*3)&1)?moss:mossDark);
   clump.scale.set(s,s*(.75+((x*5)&1)*.35),s*(.85+((z*7)&1)*.3));
   clump.position.set(x,y,z);clump.rotation.set(x*4,y*5,z*3);group.add(clump);
  }

  // Kelp / seaweed strands trailing from handle and bezel (thick enough to read in FPS)
  const strand=(pts:THREE.Vector3[],r:number)=>{
   group.add(new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts),14,r,6,false),kelp));
  };
  strand([V(.02,.17,-.2),V(.05,.14,-.12),V(.08,.06,-.05),V(.1,-.04,.02),V(.09,-.12,.06),V(.06,-.18,.08)],.007);
  strand([V(-.02,.16,-.08),V(-.04,.11,0),V(-.06,.02,.06),V(-.05,-.08,.1),V(-.03,-.14,.12)],.006);
  strand([V(.1,.03,-.39),V(.12,-.02,-.33),V(.11,-.09,-.27),V(.08,-.14,-.22)],.0055);
  strand([V(-.09,.06,-.41),V(-.11,.01,-.35),V(-.1,-.06,-.3),V(-.07,-.11,-.26)],.005);
  strand([V(0,.15,.05),V(.03,.08,.1),V(.04,-.02,.14),V(.02,-.1,.16)],.005);
  // Leaf flaps on strands
  for(const [x,y,z,rx,ry] of [[.09,-.02,0,.6,.2],[-.05,.05,.05,-.5,-.3],[.11,-.07,-.28,.9,.4],[-.09,-.04,-.32,-.7,.2],[.07,-.14,.07,.3,-.5]] as const){
   const leaf=new THREE.Mesh(new THREE.PlaneGeometry(.028,.045),kelpBright);
   leaf.position.set(x,y,z);leaf.rotation.set(rx,ry,.15);group.add(leaf);
  }

  // Dirt / algae film patches on yellow body
  for(const [a,z,s] of [[.8,-.1,.02],[2.2,-.2,.016],[4.0,.05,.018],[5.5,-.28,.014]] as const){
   const film=new THREE.Mesh(new THREE.SphereGeometry(1,5,4),mossDark);
   film.scale.set(s*.6,s*.4,s*.15);
   film.position.set(Math.cos(a)*.06,Math.sin(a)*.06,z);group.add(film);
  }

  group.position.copy(this.torchRestPos);group.rotation.copy(this.torchRestRot);group.scale.setScalar(1.15);
  return group;
 }
 /** Presentation-only hand/lantern drift in camera space (torch is a camera child — camera bob alone leaves it screen-locked). */
 applyTorchHover(bobBlend:number){
  const s=bobBlend;
  this.torchBody.position.set(
   this.torchRestPos.x+Math.sin(this.time*.7)*.028*s,
   this.torchRestPos.y+Math.sin(this.time*1.05)*.036*s,
   this.torchRestPos.z+Math.cos(this.time*.55)*.02*s,
  );
  this.torchBody.rotation.set(
   this.torchRestRot.x+Math.sin(this.time*.9)*.055*s,
   this.torchRestRot.y+Math.sin(this.time*.45)*.03*s,
   this.torchRestRot.z+Math.cos(this.time*.75)*.065*s,
  );
 }
 holdingKnife(){return this.mission.inventory[this.mission.selected]==='knife';}
 /** Hide lantern meshes while knife is held; SpotLight stays parented and can stay on. */
 setTorchMeshesVisible(show:boolean){
  this.torchBody.traverse(o=>{if(o instanceof THREE.Mesh)o.visible=show;});
 }
 /** Knife hand sway — same spirit as torch hover, only while the knife is the held prop. */
 applyKnifeHover(bobBlend:number){
  if(!this.knifeVisual)return;
  const s=bobBlend;
  this.knifeVisual.position.set(
   KNIFE_HOLD_POS.x+Math.sin(this.time*.7)*.024*s,
   KNIFE_HOLD_POS.y+Math.sin(this.time*1.05)*.03*s,
   KNIFE_HOLD_POS.z+Math.cos(this.time*.55)*.018*s,
  );
  this.knifeVisual.rotation.set(
   KNIFE_HOLD_ROT.x+Math.sin(this.time*.9)*.045*s,
   KNIFE_HOLD_ROT.y+Math.sin(this.time*.45)*.025*s,
   KNIFE_HOLD_ROT.z+Math.cos(this.time*.75)*.05*s,
  );
 }
 buildLights(){
  this.scene.add(this.camera);
  // Lantern first — spot + volume share its aim so there is only one beam.
  this.torchBody=this.buildTorchBody();
  this.camera.add(this.torchBody);

  // Soft spot wash — high penumbra so walls get light without a hard white disk.
  // Intensity/distance/decay/color are overwritten each frame from torchModulation (shared β).
  const torch0=torchModulation(3,0);
  this.torchLight.color.setRGB(torch0.r,torch0.g,torch0.b);
  this.torchLight.intensity=torch0.intensity;this.torchLight.distance=torch0.distance;
  this.torchLight.angle=.32;this.torchLight.penumbra=.95;this.torchLight.decay=torch0.decay;
  // Lens tip in lantern local space (body aims −Z).
  this.torchLight.position.set(0,0,-.45);
  this.torchLight.target.position.set(0,0,-22);
  this.torchBody.add(this.torchLight,this.torchLight.target);
  // Torch shadows: modest 512² map; lantern mesh itself must not cast (near-field acne).
  this.torchLight.castShadow=true;
  this.torchLight.shadow.mapSize.set(512,512);
  this.torchLight.shadow.bias=-.00035;
  this.torchLight.shadow.normalBias=.035;
  this.torchLight.shadow.radius=1.5;
  this.torchLight.shadow.camera.near=.35;
  this.torchLight.shadow.camera.far=Math.max(12,torch0.distance);
  this.torchLight.shadow.camera.updateProjectionMatrix();
  this.torchBody.traverse(o=>{if(o instanceof THREE.Mesh){o.castShadow=false;o.receiveShadow=false;}});

  const cone=new THREE.CylinderGeometry(.018,3.2,20,28,1,true);cone.rotateX(Math.PI/2);
  this.beam=new THREE.Mesh(cone,this.torchBeamMaterial(0xd4eaf8,.09));
  this.beam.castShadow=false;this.beam.receiveShadow=false;this.beam.frustumCulled=false;
  // Base length 20 along −Z; tip kept at the lens via position (updated with range each frame).
  this.beam.position.set(0,0,-10.45);
  this.torchBody.add(this.beam);

  // Soft path markers (dimmer so shafts remain the hero)
  const lamp=(x:number,z:number,color:number)=>{
   const mesh=new THREE.Mesh(new THREE.SphereGeometry(.1,8,6),new THREE.MeshBasicMaterial({color}));
   mesh.position.set(x,.55,z);mesh.add(new THREE.PointLight(color,.85,5.5,1.5));this.scene.add(mesh);
  };
  for(const [x,z] of [[0,-18],[0,-28],[0,-40],[-12,-48],[-22,-60],[-22,-78],[-16,-90],[0,-98],[0,-108]])lamp(x,z,0x5ad4c4);
  for(const [x,z] of [[12,-94],[24,-87],[30,-80],[32,-65],[32,-49],[32,-33],[32,-19]])lamp(x,z,0xe0a858);

  // Extraction pool — one hero god-ray (was a 3-shaft stack)
  const exit=new THREE.Group();exit.position.set(EXIT.x,.65,EXIT.z);
  const ring=new THREE.Mesh(new THREE.TorusGeometry(1.6,.05,8,48),new THREE.MeshBasicMaterial({color:0xb9ffdc}));
  ring.rotation.x=Math.PI/2;exit.add(ring);this.scene.add(exit);
  const sunlight=new THREE.SpotLight(0xd2f8f4,420,24,.72,.8,1);
  sunlight.position.set(32,12,-12);sunlight.target.position.set(32,0,-12);this.scene.add(sunlight,sunlight.target);
  const poolFill=new THREE.PointLight(0xa8f0e8,28,16,1.1);poolFill.position.set(32,5,-12);this.scene.add(poolFill);
  this.addShaft(32,5.2,-12,9,.7,2.8,0xd8faf4,.22);

  // Main cavern ceiling shafts — half the previous density
  const cavern:[number,number,number,number,number,number,number][]=[
   [2,6.2,-52,9,.5,2.4,.16],[6,6,-64,9.5,.55,2.6,.15],
   [4,6.5,-78,9,.45,2.3,.14],[0,6.4,-96,8,.35,1.8,.1],
  ];
  for(const [x,y,z,len,top,bot,op] of cavern){
   this.addShaft(x,y,z,len,top,bot,0xb8ebe4,op,(Math.random()-.5)*.12,(Math.random()-.5)*.1);
   const spot=new THREE.SpotLight(0xb0ece4,55+op*500,15,.5,.85,1.15);
   spot.position.set(x,8.2,z);spot.target.position.set(x,0,z);this.scene.add(spot,spot.target);
  }

  // Entrance corridor soft shaft
  this.addShaft(0,6.3,-22,8,.45,2.2,0xa8e0d8,.1);
  const entrance=new THREE.SpotLight(0xa8e4dc,70,13,.48,.8,1.1);
  entrance.position.set(0,8.5,-22);entrance.target.position.set(0,0,-22);this.scene.add(entrance,entrance.target);

  // Relic alcove pale shaft
  this.addShaft(0,5.8,-110,7.5,.3,1.5,0xc4d4b0,.08);
 }
 buildComposer(){
  const w=this.host.clientWidth,h=this.host.clientHeight;
  this.composer=new EffectComposer(this.renderer);
  this.composer.addPass(new RenderPass(this.scene,this.camera));
  this.bloom=new UnrealBloomPass(new THREE.Vector2(w,h),.18,.65,.92);
  this.composer.addPass(this.bloom);
  this.composer.addPass(new OutputPass());
 }
 resize(){
  if(!this.alive)return;
  const w=this.host.clientWidth,h=this.host.clientHeight;
  this.camera.aspect=w/h;this.camera.updateProjectionMatrix();
  this.renderer.setSize(w,h);this.composer?.setSize(w,h);this.bloom?.resolution.set(w,h);
 }
 syncPickups(){
  for(const [id,group] of this.pickupMeshes)if(!this.mission.pickups.some(p=>p.id===id)){this.scene.remove(group);group.traverse(o=>{if(o instanceof THREE.Mesh){o.geometry.dispose();(o.material as THREE.Material).dispose();}});this.pickupMeshes.delete(id);}
  for(const p of this.mission.pickups){let group=this.pickupMeshes.get(p.id);if(!group){group=new THREE.Group();const mat=new THREE.MeshStandardMaterial({color:p.item==='relic'?0xe2b65e:0x82c8b7,emissive:p.item==='relic'?0x6b3c07:0x153c36,emissiveIntensity:.7,metalness:.4,roughness:.45});
    if(p.item==='relic'){const points:THREE.Vector3[]=[],radii:number[]=[];for(let i=0;i<=72;i++){const t=i/72,a=t*Math.PI*4.5,r=.03+t*t*.62;points.push(V(Math.cos(a)*r,Math.sin(a)*r,0));radii.push(.01+t*.12);}group.add(this.tube(points,radii,mat,90,8));group.add(new THREE.PointLight(0xefbb68,3.5,7));}else group.add(new THREE.Mesh(new THREE.IcosahedronGeometry(.3,1),mat));
    group.traverse(o=>{if(o instanceof THREE.Mesh){o.castShadow=true;o.receiveShadow=true;}});
    this.scene.add(group);this.pickupMeshes.set(p.id,group);
   }group.position.set(p.position.x,p.position.y+Math.sin(this.time*1.7+p.id)*.12,p.position.z);group.rotation.y=this.time*.45;
  }
 }
 publish(){this.ui({mission:this.mission,playing:this.playing,started:this.started,pointerLocked:this.pointerLocked,error:this.error,audioNotice:this.audioNotice,yaw:this.yaw});}
 bind(){
  const on=(target:EventTarget,type:string,fn:EventListener,options?:AddEventListenerOptions)=>{target.addEventListener(type,fn,options);this.listeners.push(()=>target.removeEventListener(type,fn,options));};
  on(window,'keydown',((e:KeyboardEvent)=>{
   if(!this.playing)return;
   if(['Space','ArrowUp','ArrowDown','ArrowLeft','ArrowRight','Tab'].includes(e.code))e.preventDefault();
   this.keys.add(e.code);if(e.repeat)return;
   if(e.code==='Escape'){if(this.mission.pending!==null){this.mission.pending=null;this.publish();}else this.pause();}
   // Inventory keys bind on window (not the canvas), so select/use/drop work without canvas focus.
   if(/^Digit[1-5]$/.test(e.code)){
    if(this.mission.select(Number(e.code.slice(-1))-1))this.playSelectClick();
   }
   if(e.code==='KeyE')this.mission.interact();if(e.code==='KeyF')this.mission.torch=!this.mission.torch;
   if(e.code==='KeyR')this.mission.use();if(e.code==='KeyG')this.mission.drop();if(e.code==='KeyM')this.setSound(!this.sound);
   this.publish();
  }) as EventListener);
  on(window,'keyup',((e:KeyboardEvent)=>{this.keys.delete(e.code);}) as EventListener);
  on(window,'blur',(()=>this.pause()) as EventListener);on(document,'visibilitychange',(()=>{if(document.hidden)this.pause();}) as EventListener);
  const canvas=this.renderer.domElement;
  on(canvas,'pointerdown',((e:PointerEvent)=>{
   if(!this.playing)return;
   try{canvas.setPointerCapture(e.pointerId);}catch{/* unsupported */}
   if(document.pointerLockElement!==canvas)this.requestLookLock(false);
   // Primary click while knife selected → stab (knife is the held FPS prop).
   if(e.button===0)this.tryStab();
  }) as EventListener);
  on(document,'pointermove',((e:PointerEvent)=>{if(!this.playing)return;
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
  on(canvas,'wheel',((e:WheelEvent)=>{if(!this.playing)return;e.preventDefault();const scale=e.deltaMode===1?16:e.deltaMode===2?200:1;const delta=lookDelta(this.targetYaw,this.targetPitch,e.deltaX*scale,e.deltaY*scale);this.targetYaw=delta.yaw;this.targetPitch=delta.pitch;}) as EventListener,{passive:false});
  on(document,'pointerlockchange',(()=>{const was=this.pointerLocked;this.pointerLocked=document.pointerLockElement===canvas;if(this.pointerLocked){this.everLocked=true;this.lockDenied=false;this.lookPointer=null;this.fallbackTurn=0;}if(was&&!this.pointerLocked)this.pause();this.publish();}) as EventListener);
  on(document,'pointerlockerror',(()=>{this.lockDenied=true;this.mission.say('360° free look active. Steer left or right of center to keep turning — pointer stays in the dive.');this.publish();}) as EventListener);
  on(canvas,'webglcontextlost',((e:Event)=>{e.preventDefault();this.error='The graphics connection was lost. Reload the page to restart the dive.';this.pause();this.publish();}) as EventListener);
 }
 requestLookLock(announce=true){
  if(!this.playing||document.pointerLockElement===this.renderer.domElement)return;
  const fail=()=>{this.lockDenied=true;if(announce){this.mission.say('360° free look active. Steer left or right of center to keep turning — pointer stays in the dive.');this.publish();}};
  try{const result=this.renderer.domElement.requestPointerLock?.();result?.catch(fail);}catch{fail();}
 }
 initAudio(){
  if(this.audioContext)return;
  try{
   const Ctx=window.AudioContext||(window as unknown as {webkitAudioContext:typeof AudioContext}).webkitAudioContext;
   const ctx=new Ctx();this.audioContext=ctx;this.master=ctx.createGain();this.master.gain.value=this.sound?.7:0;
   this.audioProbe=buildDiveAudio(ctx,this.master);
   this.backgroundMusic=new BackgroundMusic(ctx,this.master);
   this.swimWater=new SwimWaterAudio(ctx,this.master);
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
 playSelectClick(){
  if(!this.playing||!this.sound)return;
  const ctx=this.audioContext,master=this.master;
  if(!ctx||!master||ctx.state!=='running')return;
  playInventoryClick(ctx,master);
 }
 tryStab(){
  if(!this.playing||this.mission.outcome!=='playing')return;
  if(this.mission.inventory[this.mission.selected]!=='knife')return;
  this.camera.getWorldDirection(this.forward);
  const result=this.mission.stab({x:this.forward.x,y:this.forward.y,z:this.forward.z});
  if(result==='blocked'||result==='cooldown'){this.publish();return;}
  this.flashKnife();
  this.consumeCombatCue(result==='hit');
  this.publish();
 }
 flashKnife(){
  if(!this.knifeVisual)return;
  this.knifeVisual.visible=true;
  this.knifeFlashUntil=this.time+.28;
  // Quick thrust along look axis in local space.
  this.knifeVisual.position.z=KNIFE_STAB_Z;
 }
 consumeCombatCue(connected:boolean){
  const cue=this.mission.combatCue;this.mission.combatCue='';
  const ctx=this.audioContext,master=this.master;
  const audible=!!(this.sound&&ctx&&master&&ctx.state==='running');
  if(cue==='stab-miss'||(cue===''&&!connected)){
   if(audible)playStabSound(ctx!,master!,false);
   return;
  }
  if(cue==='stab-hit'||cue==='break'||cue==='kill'){
   if(audible)playStabSound(ctx!,master!,true);
   this.shakeAmp=Math.max(this.shakeAmp,cue==='kill'?.55:.32);
   if(cue==='kill'){
    if(audible)playGuardianDeath(ctx!,master!);
    this.spawnBlood(this.mission.predator.position);
   }
  }
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
  if(this.mission.outcome!=='playing')this.reset();
  // One-time tip is already on this mission when tipsSeen is false; persist so the next launch stays quiet.
  if(!this.mission.tipsSeen)writeInventoryTipsSeen();
  this.playing=true;this.started=true;this.keys.clear();this.clock.getDelta();this.testingAudio=false;if(this.sound)this.enableAudio(true);
  this.lookPointer=null;this.fallbackTurn=0;this.requestLookLock(true);this.publish();
 }
 pause(){if(!this.playing)return;this.testingAudio=false;window.clearTimeout(this.audioTestTimer);this.playing=false;this.lookPointer=null;this.fallbackTurn=0;this.keys.clear();this.velocity.set(0,0,0);this.swimWater?.update(0,false);if(document.pointerLockElement===this.renderer.domElement)document.exitPointerLock();this.audioContext?.suspend().catch(()=>{});this.publish();}
 reset(){
  this.backgroundMusic?.reset();this.swimWater?.update(0,false);this.mission=new Mission(readInventoryTipsSeen());
  this.position.copy(this.mission.position);this.camera.position.copy(this.position);this.yaw=this.targetYaw=0;this.pitch=this.targetPitch=0;this.lookPointer=null;this.fallbackTurn=0;this.lockDenied=false;this.velocity.set(0,0,0);this.time=0;this.lastSent=0;this.keys.clear();
  if(this.torchBody){this.torchBody.position.copy(this.torchRestPos);this.torchBody.rotation.copy(this.torchRestRot);}
  this.shakeAmp=0;this.knifeFlashUntil=0;
  if(this.knifeVisual){poseKnife(this.knifeVisual);this.knifeVisual.visible=this.holdingKnife();}
  this.setTorchMeshesVisible(!this.holdingKnife());
  if(this.blood){this.blood.visible=false;this.bloodLife=0;}
  this.mission.silt=createSiltPlume(this.mission.position);
  if(this.siltStorm&&this.siltStormLife){
   for(let i=0;i<this.siltStormLife.length;i++)this.siltStormLife[i]=0;
   this.siltStorm.visible=false;(this.siltStorm.material as THREE.PointsMaterial).opacity=0;
  }
  this.syncPickups();this.publish();
 }
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
   // Kick = look / strafe only. Space/Q drive BCD buoyancy, not equal XYZ thrust.
   this.move.copy(this.forward).multiplyScalar(pressed('KeyW')-pressed('KeyS')).addScaledVector(this.right,pressed('KeyD')-pressed('KeyA'));
   const bcd=pressed('Space')-pressed('KeyQ','ControlLeft','ControlRight');
   m.buoyancy=updateBuoyancy(m.buoyancy,bcd,dt);
   const sprint=!!pressed('ShiftLeft','ShiftRight')&&m.stamina>3&&this.move.lengthSq()>.01;
   stepSwimVelocity(this.velocity,this.move,m.buoyancy,sprint,dt);
   moveBody(m.position,this.velocity.x*dt,this.velocity.y*dt,this.velocity.z*dt);
   stepSilt(m.silt,m.position,{x:this.velocity.x,y:this.velocity.y,z:this.velocity.z},sprint,dt);
   const siltOptical=siltAt(m.silt,m.position);
   if(m.silt.bed>.05)this.emitSiltBurst(Math.min(1,m.silt.bed*dt*24));
   m.update(dt,sprint,siltOptical);this.position.copy(m.position);
   // Presentation-only hover bob when nearly still — never moves mission.position.
   // ~2.6× 0.1.18 amplitudes so the murk drift reads; torch gets extra local sway (mesh+light+beam).
   const speed=this.velocity.length();
   const bobBlend=1-THREE.MathUtils.smoothstep(speed,.06,.5);
   const bobY=Math.sin(this.time*1.1)*.13*bobBlend;
   const bobSide=Math.sin(this.time*.65)*.065*bobBlend;
   const bobFwd=Math.cos(this.time*.5)*.065*bobBlend;
   this.camera.position.copy(this.position).addScaledVector(this.upAxis,bobY).addScaledVector(this.right,bobSide).addScaledVector(this.forward,bobFwd);
   // Light combat shake (decays); applied after bob so it does not fight hover.
   if(this.shakeAmp>0.001){
    const s=this.shakeAmp;
    this.camera.position.addScaledVector(this.right,Math.sin(this.time*48)*s*.04);
    this.camera.position.addScaledVector(this.upAxis,Math.cos(this.time*37)*s*.03);
    this.shakeAmp=Math.max(0,this.shakeAmp-dt*2.8);
   }
   const knifeHeld=this.holdingKnife();
   this.applyTorchHover(bobBlend);
   if(this.knifeVisual){
    if(knifeHeld){
     this.knifeVisual.visible=true;
     if(this.time>=this.knifeFlashUntil){
      this.applyKnifeHover(bobBlend);
     }else{
      // Ease thrust back toward rest while stabbing.
      const t=1-Math.max(0,(this.knifeFlashUntil-this.time)/.28);
      this.knifeVisual.position.set(KNIFE_HOLD_POS.x,KNIFE_HOLD_POS.y,THREE.MathUtils.lerp(KNIFE_STAB_Z,KNIFE_HOLD_POS.z,t));
      this.knifeVisual.rotation.set(KNIFE_HOLD_ROT.x,KNIFE_HOLD_ROT.y,KNIFE_HOLD_ROT.z);
     }
    }else{
     this.knifeVisual.visible=false;
     this.knifeFlashUntil=0;
     poseKnife(this.knifeVisual);
    }
   }
   this.swimWater?.update(speed,this.sound&&this.audioContext?.state==='running');
   this.updateBlood(dt);
   this.updateSiltStorm(dt,siltAt(m.silt,m.position));

   if(m.outcome!=='playing')this.pause();
  }else this.swimWater?.update(0,false);
  // Atmosphere: cyan-teal murk (reference palette), denser in deep chambers, clears at exit
  const deep=THREE.MathUtils.smoothstep(-this.position.z,35,100);
  const nearExit=1-THREE.MathUtils.smoothstep(distance(this.position,EXIT),4,22);
  const siltFog=this.playing?siltAt(this.mission.silt,this.mission.position):0;
  const fog=this.scene.fog as THREE.FogExp2;
  fog.color.set(0x0c3540).lerp(new THREE.Color(0x062430),deep).lerp(new THREE.Color(0x1a5a62),nearExit*.65)
   .lerp(new THREE.Color(0xb8c8d0),siltFog*.55);
  fog.density=.032+.022*deep-.014*nearExit+siltFog*.085;
  (this.scene.background as THREE.Color).copy(fog.color);
  this.uniforms.uTime.value=this.time;
  const torchOn=this.mission.torch;
  const knifeHeld=this.holdingKnife();
  // Knife selected → hide lantern mesh + beam; SpotLight stays on if F torch is on.
  this.setTorchMeshesVisible(!knifeHeld);
  if(this.knifeVisual&&!this.playing){
   this.knifeVisual.visible=knifeHeld;
   if(knifeHeld)poseKnife(this.knifeVisual);
  }
  this.torchLight.visible=torchOn;this.beam.visible=torchOn&&!knifeHeld;
  this.torchBody.visible=true;
  this.torchLensMat.emissiveIntensity=torchOn?1.25:.06;
  this.torchLensMat.emissive.set(torchOn?0xc8e4ff:0x223038);
  if(torchOn){
   // Shared Beer–Lambert murk + local silt storm on β^B / range.
   const torch=applySiltToTorch(torchModulation(this.position.y,this.pitch),siltFog);
   this.torchLight.intensity=torch.intensity;this.torchLight.distance=torch.distance;this.torchLight.decay=torch.decay;
   this.torchLight.color.setRGB(torch.r,torch.g,torch.b);
   // Keep shadow frustum matched to the attenuated range (avoids wasted Safari fill).
   const far=Math.max(10,Math.min(48,torch.distance+2));
   if(Math.abs(this.torchLight.shadow.camera.far-far)>.5){
    this.torchLight.shadow.camera.far=far;this.torchLight.shadow.camera.updateProjectionMatrix();
   }
   const beamMat=this.beam.material as THREE.ShaderMaterial;
   const betaB=(torch.betaBackscatter.r+torch.betaBackscatter.g+torch.betaBackscatter.b)/3;
   // Physical length tracks attenuated spot range; tip stays on the lens.
   const beamLen=Math.max(8,Math.min(28,torch.distance*.82));
   const sz=beamLen/20;
   this.beam.scale.set(1,1,sz);
   this.beam.position.set(0,0,-(beamLen*.5+.45));
   beamMat.uniforms.uOpacity.value=torch.beamOpacity*1.35;
   beamMat.uniforms.uColor.value.setRGB(torch.beamR,torch.beamG,torch.beamB);
   beamMat.uniforms.uBeta.value=betaB;
   beamMat.uniforms.uBeamLen.value=beamLen;
   // No camera-forward particle cone — that was a second beam fighting the lantern aim.
   (this.particles.material as THREE.ShaderMaterial).uniforms.uTorch.value=0;
  }else (this.particles.material as THREE.ShaderMaterial).uniforms.uTorch.value=0;
  // Soft bloom on shafts only — keep torch hotspots from blowing out; silt whiteout blooms harder
  this.bloom.strength=(torchOn?.2:.14)+siltFog*.35;
  const p=this.mission.predator;this.guardian.group.position.copy(p.position);
  if(p.state==='dead'){
   // Corpse settles; limp fins, no chase heading lerp.
   this.guardian.group.rotation.z=THREE.MathUtils.lerp(this.guardian.group.rotation.z,.55,Math.min(1,dt*1.4));
   this.guardian.fins.forEach(f=>f.rotation.x*=Math.exp(-dt*2));
   this.guardian.tail.rotation.y*=Math.exp(-dt*2);
  }else{
   const diff=Math.atan2(Math.sin(p.heading-this.guardian.group.rotation.y),Math.cos(p.heading-this.guardian.group.rotation.y));
   this.guardian.group.rotation.y+=diff*Math.min(1,dt*5);
   this.guardian.group.rotation.z=THREE.MathUtils.lerp(this.guardian.group.rotation.z,p.flinch>0?.35:0,Math.min(1,dt*8));
   const thrash=p.raged&&p.state==='chase'?1.55:p.state==='damaged'?.55:1;
   this.guardian.fins.forEach(f=>f.rotation.x=Math.sin(this.time*2*thrash+(f.userData.phase||0))*.25*(f.userData.side||1)*thrash);
   this.guardian.tail.rotation.y=Math.sin(this.time*3*thrash)*.22*thrash;
  }
  this.syncPickups();this.decoyMesh.visible=!!this.mission.decoy;if(this.mission.decoy)this.decoyMesh.position.copy(this.mission.decoy.position);
  if(this.time-this.lastSent>.05){this.lastSent=this.time;this.publish();}
  this.composer.render();
 }
 dispose(){window.clearTimeout(this.audioTestTimer);if(this.audioContext)this.audioContext.onstatechange=null;this.swimWater?.dispose();this.swimWater=null;this.backgroundMusic?.dispose();this.pause();this.composer?.dispose();super.dispose();}
}
