import { PropStreaming } from './propStreaming';
import { PALETTE } from './artPalette';
import { DRY_DENSITY, DRY_FIELD, FLUORESCENT, GRADE_LIGHTS, WATER_FIELD, createClipGradePass, createGradeClock, gradeDensity, gradeField, gradeSlam, practicalColor, practicalGlow, resetGradeClock, stepFrameGrade, waterSheet, waterVeilOpacity, type FrameGrade } from './frameGrade';
import * as THREE from 'three';
import { applyGuardCombatPose, updateGuardMoveFrame } from './guardCombatPose';
import { PISTOL } from './playerPistol';
import { SurvivalFx } from './survivalFx';
import { survivalDoors } from './survival';
import { makeGuardCombatState } from './guardCombatPose';
import { ShaderChunk } from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { OceanWorld } from './legacy/ocean';
import { buildDiveAudio, playDiveChime, playInventoryClick, playStabSound, playGuardianDeath, playFootstep, playGunshot, playRicochet, playHitMarker, playPistolClick, playSquadCall, pannedBus, playDoorBang, playSmokePop, playGrunt, playMeleeHit, playFleshHit, playSupply, playValveStroke, playValveSeat, playStashOpen, playStashClose, playStashDeposit, playStashWithdraw } from './diveAudio';
import { Gait, wadingDrag, runWeight, WALK_CAMERA_MOTION, type GaitEvent } from './gait';
import { BackgroundMusic } from './backgroundMusic';
import { loadCaveRockMaps, type CaveRockMaps } from './rockMaps';
import { KNIFE_CLICK_BUFFER, createKnifeVisual, upgradeKnifeVisual, applyKnifeEnvMap, poseKnife, knifeMeshReady, HELD_VIEW_POS, HELD_VIEW_ROT, KNIFE_HOLD_POS, KNIFE_HOLD_ROT, KNIFE_STAB_TIME, KNIFE_EQUIP_TIME, stabOffset, equipOffset } from './knifeAsset';
import { createSovietKeyHeld, createSovietKeyPickup } from './sovietKeyAsset';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { loadBloodMaps, makeSoftBlobTexture, type BloodMaps } from './bloodAsset';
import { loadCausticAtlas, makeCausticFallbackTexture } from './causticAsset';
import { createChestVisual, upgradeChestVisual, syncChestOpen, type ChestVisual } from './chestAsset';
import { createScrollVisual, upgradeScrollVisual, scrollShouldShow, syncScrollPresent, type ScrollVisual } from './scrollAsset';
import {
 createLifebuoyVisual, upgradeLifebuoyVisual,
 LIFEBUOY_POS, LIFEBUOY_YAW, type LifebuoyVisual,
} from './lifebuoyAsset';
import { createWallSconces, upgradeWallSconces, wallSconceMounts, type SconceLight } from './sconceAsset';
import { createHangingLights, stepHangingLights, upgradeHangingLights, type HangingLights } from './hangingLightAsset';
import { createWallPosters, upgradeWallPosters, type WallPosters } from './posterAsset';
import { createCopperPipe, upgradeCopperPipe, upgradeCopperPipeDetail, updateCopperPipe, type CopperPipe } from './copperPipeAsset';
import { createWallPipe, upgradeWallPipe, setPipeWheel, PIPE_MOUNT, type WallPipe } from './pipeAsset';
import { startStroke, stepStroke, handPoses, smootherstep, VALVE_STAND, WHEEL_CENTRE, BREAKAWAY_TIME, REGRIP_TIME, type ValveStroke } from './valve';
import { createValveHands, poseValveHands, resetValveHands, type ValveHandsRig } from './valveHands';
import { applyHandEnvMap } from './diverHand';
import {
 createSovietGuardVisual, upgradeSovietGuardVisual, syncGuardGear, updateGuardLocomotion, applyGuardAim,
 type SovietGuardVisual,
} from './sovietGuardAsset';
import { mountTt33 } from './gunAsset';
import { Mission, cells, world, CELL, EXIT, RELIC, RELIC_PLINTH, FLOOR_Y, moveBody, lookDelta, edgeTurn, FREE_LOOK_RATE, torchModulation, torchShouldShine, holdingTorchItem, readInventoryTipsSeen, writeInventoryTipsSeen, updateBuoyancy, updateBuoyancyTrim, stepSwimVelocity, breathHatchSpawn, breathTankMounts, breathFootprint, breathZone, canWalkBreath, canWalk, inBreathCorridor, breathingFreeAir, floodColumnY, WALK_EYE_Y, WALK_SPEED, WALK_SPRINT, SURFACE_Y, GUARD_COUNT, STASH_POSITION, STASH_YAW, GAME_TIME_SCALE, MAX_FRAME_DT, type BreathFootprint, type BreathTankMount } from './simulation';
export type Snapshot={mission:Mission;playing:boolean;started:boolean;pointerLocked:boolean;error:string;audioNotice:string;yaw:number;onFoot:boolean;
 /** Head above the bunker waterline (free air). */
 airborne:boolean;
 /** Both hands are on the leak valve wheel. */
 atWheel:boolean};
/** Point lights packed per cave chunk. 24 covers every light whose range reaches a chunk; the rest of the set still exists in the scene for spots/shadows. */
const POINT_CULL_MAX=24;
type PointCull={box:THREE.Box3;count:{value:number};pos:THREE.Vector3[];col:THREE.Vector3[];dist:Float32Array;decay:Float32Array};
function pointCullLightsChunk(){
  const src=ShaderChunk.lights_fragment_begin;
  const start=src.indexOf('#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )');
  const end=src.indexOf('#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )');
  if(start<0||end<0) throw new Error('Three.js light chunk layout changed');
  const block=`#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	for ( int i = 0; i < ${POINT_CULL_MAX}; i ++ ) {
		if ( i >= uCullCount ) break;
		pointLight.position = ( viewMatrix * vec4( uCullPos[ i ], 1.0 ) ).xyz;
		pointLight.color = uCullCol[ i ];
		pointLight.distance = uCullDist[ i ];
		pointLight.decay = uCullDecay[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
#endif

`;
  return src.slice(0,start)+block+src.slice(end);
}
const POINT_CULL_LIGHTS=pointCullLightsChunk();
const V=(x=0,y=0,z=0)=>new THREE.Vector3(x,y,z);
/** Soft underwater blood: droplets + plume (Kenney alpha maps, not square Points). */
type BloodLayer={points:THREE.Points;vel:Float32Array;baseSize:number;uniforms:{uMap:{value:THREE.Texture};uColor:{value:THREE.Color};uOpacity:{value:number};uSize:{value:number};uPixelRatio:{value:number}}};

const bloodVert=`uniform float uSize;uniform float uPixelRatio;
void main(){
  vec4 mv=modelViewMatrix*vec4(position,1.);
  gl_PointSize=clamp(uSize*180./-mv.z,2.,96.)*uPixelRatio;
  gl_Position=projectionMatrix*mv;
}`;
/** Soft disc × Kenney map — never solid square point sprites. */
const bloodFrag=`uniform sampler2D uMap;uniform vec3 uColor;uniform float uOpacity;
void main(){
  vec2 pc=gl_PointCoord-.5;
  float soft=smoothstep(.5,.12,length(pc));
  if(soft<.01)discard;
  vec4 tex=texture2D(uMap,gl_PointCoord);
  float a=soft*tex.a*uOpacity;
  if(a<.02)discard;
  // Tint map luminance into deep blood red (maps are white soft sprites).
  float lum=dot(tex.rgb,vec3(.3,.5,.2));
  vec3 col=uColor*(.55+.45*lum);
  gl_FragColor=vec4(col,a);
}`;

/** Ceiling god-ray volume: soft radial density + particulate noise + Beer–Lambert fade from aperture. */
const shaftVert=`varying vec2 vUv;varying vec3 wPos;
void main(){
  vUv=uv;wPos=(modelMatrix*vec4(position,1.)).xyz;
  gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);
}`;
const shaftFrag=`varying vec2 vUv;varying vec3 wPos;
uniform float uTime;uniform vec3 uColor;uniform float uOpacity;uniform float uBeta;
float hash(vec3 p){return fract(sin(dot(p,vec3(127.1,311.7,74.7)))*43758.5453);}
float vnoise(vec3 p){
  vec3 i=floor(p);vec3 f=fract(p);f=f*f*(3.-2.*f);
  float n000=hash(i),n100=hash(i+vec3(1.,0.,0.)),n010=hash(i+vec3(0.,1.,0.)),n110=hash(i+vec3(1.,1.,0.));
  float n001=hash(i+vec3(0.,0.,1.)),n101=hash(i+vec3(1.,0.,1.)),n011=hash(i+vec3(0.,1.,1.)),n111=hash(i+vec3(1.,1.,1.));
  float nx00=mix(n000,n100,f.x),nx10=mix(n010,n110,f.x),nx01=mix(n001,n101,f.x),nx11=mix(n011,n111,f.x);
  return mix(mix(nx00,nx10,f.y),mix(nx01,nx11,f.y),f.z);
}
void main(){
  // Cylinder UV: y≈1 at top (ceiling aperture), y≈0 at floor.
  float along=1.-vUv.y;
  float scatter=exp(-uBeta*along*8.5);
  // Hot under the opening; soft residual glow toward the floor.
  float aperture=mix(.22,1.,pow(clamp(vUv.y,0.,1.),.55));
  // Soft tube wall — feathered radial, not a hard lit shell.
  float radial=pow(max(0.,sin(vUv.x*3.14159)),1.05);
  float core=pow(max(0.,1.-abs(vUv.x-.5)*2.15),2.6)*.7;
  // Particulate scatter scrolling down the column (marine snow in-beam).
  float n=vnoise(vec3(wPos.xz*.42,wPos.y*.6-uTime*.2));
  float n2=vnoise(vec3(wPos.xz*1.05+1.7,wPos.y*1.1-uTime*.38));
  float particulate=.52+.38*n+.22*n2;
  // Prefer looking across the shaft (Mie-ish); dims when staring up the bore.
  vec3 V=normalize(cameraPosition-wPos);
  float across=mix(.38,1.,pow(1.-abs(V.y),.72));
  float pulse=.9+sin(wPos.y*.35+uTime*.28+vUv.x*6.28)*.07;
  float a=(radial*.5+core)*scatter*aperture*particulate*across*pulse*uOpacity;
  if(a<.0025)discard;
  gl_FragColor=vec4(uColor,a);
}`;
/** Soft additive floor caustic pool — 4×4 atlas frames under a shaft. */
const causticPoolVert=`varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`;
const causticPoolFrag=`varying vec2 vUv;uniform sampler2D uMap;uniform float uTime;uniform vec3 uColor;uniform float uOpacity;
void main(){
  float mask=smoothstep(1.,.22,length(vUv-.5)*2.);
  if(mask<.01)discard;
  float frame=mod(floor(uTime*11.),16.);
  float col=mod(frame,4.);
  float row=3.-floor(frame/4.);
  vec2 atlasUv=(vUv+vec2(col,row))*.25;
  vec4 tex=texture2D(uMap,atlasUv);
  float lum=max(tex.a,max(tex.r,max(tex.g,tex.b)));
  float a=lum*mask*uOpacity;
  if(a<.01)discard;
  gl_FragColor=vec4(uColor*mix(vec3(1.),tex.rgb,max(tex.a,.35)),a);
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
float hash(vec3 p){return fract(sin(dot(p,vec3(127.1,311.7,74.7)))*43758.5453);}
void main(){
  // Cylinder UV: y=1 at tip (+Z), y=0 at far end. along 0→1 tip→far.
  float along=1.-vUv.y;
  float dist=along*uBeamLen;
  // Backscatter column: bright near the lamp, dies with β^B · range (Sea-thru / Beer–Lambert).
  float scatter=exp(-uBeta*dist);
  float tip=smoothstep(0.,.06,along);
  float endFade=1.-smoothstep(.55,1.,along);
  // Soft radial core — wider penumbra feather (reads as spot falloff, not a solid tube).
  float axis=length(vLocal.xy);
  float coneR=mix(.02,3.15,along);
  float radial=1.-smoothstep(coneR*.1,coneR*.98,axis);
  radial=pow(radial,1.35);
  // Prefer looking across the shaft (cheap Mie-ish); dims when staring straight down the bore.
  vec3 Vn=normalize(vView);
  float across=1.-pow(abs(Vn.z),.85);
  float pulse=.88+sin(dist*.35+uTime*.55+axis*2.2)*.1;
  // Sparse in-beam marine snow (cone only — not the removed silt system).
  float cell=hash(floor(vec3(vLocal.xy*48.,dist*3.2)+vec3(0.,0.,uTime*1.8)));
  float speck=smoothstep(.9,.98,cell)*(1.-along*.55);
  float particulate=1.+speck*.7;
  float a=scatter*tip*endFade*radial*across*pulse*particulate*uOpacity;
  if(a<.002)discard;
  gl_FragColor=vec4(uColor,a);
}`;

export class CaveWorld extends OceanWorld {
 audioNotice='';audioProbe:AnalyserNode|null=null;audioTestTimer=0;
 backgroundMusic:BackgroundMusic|null=null;
 mission=new Mission(readInventoryTipsSeen());ui:(snapshot:Snapshot)=>void;error='';pointerLocked=false;everLocked=false;lastSent=0;
 fallbackTurn=0;lockDenied=false;lookPointer:{x:number;y:number}|null=null;
 torchLight=new THREE.SpotLight(0xeaf6ff,210,34,.38,.55,1.05);
 beam!:THREE.Mesh;torchBody!:THREE.Group;torchLensMat!:THREE.MeshStandardMaterial;
 /** Rest pose for the camera-parented lantern (local space). */
 torchRestPos=V(HELD_VIEW_POS.x,HELD_VIEW_POS.y,HELD_VIEW_POS.z);torchRestRot=new THREE.Euler(HELD_VIEW_ROT.x,HELD_VIEW_ROT.y,HELD_VIEW_ROT.z);
 composer!:EffectComposer;
 guardian!:ReturnType<OceanWorld['ichthyosaur']>;pickupMeshes=new Map<number,THREE.Group>();decoyMesh!:THREE.Mesh;
 /** Five Soviet guards (Quaternius soldier, dyed kits). */
 sovietGuards:SovietGuardVisual[]=[];
 get sovietGuard(){return this.sovietGuards[0]??null;}
 /** Muzzle flash light + glow at the firing guard's pistol; per-guard shot counters. */
 /** Your TT-33: muzzle flash (light + glow on the viewmodel), view recoil, viewmodel kick. */
 playerFlash!:THREE.PointLight;playerFlashGlow!:THREE.Sprite;playerFlashT=0;
 /** Viewmodel kick 0..1 (decays), and pitch still owed back by recoil recovery (rad). */
 gunKick=0;recoilDebt=0;
 /** A click that landed inside the semi-auto interval fires as soon as it opens. */
 triggerBufferUntil=-1;
 pistolReloadSeen=0;
 /** Per guard: hit stagger 0..1 (decays) and death fall progress 0..1. */
 guardJolt:number[]=[];guardFall:number[]=[];pistolHitSeen=0;
 /** Per guard: the red "!" detection notice over his helmet. */
 guardNotice:THREE.Sprite[]=[];squadAlertSeen=-1;
 /** Survival firefight visuals (cover, doors, caches, smoke, sparks, light pool). */
 fx!:SurvivalFx;
 guardLifeSeen:number[]=[];guardWindupSeen:number[]=[];guardStrikeSeen:number[]=[];
 cueSeen=-1;cloudSeen=-1;impactSeen=-1;hitFxSeen=-1;knifeFxSeen=-1;supplySeen=-1;
 guardFlash!:THREE.PointLight;guardFlashGlow!:THREE.Sprite;guardFlashT=0;guardRecoil:number[]=[];guardShotsSeen:number[]=[];
 private _aimTarget=new THREE.Vector3();private _muzzle=new THREE.Vector3();private _shotOrigin=new THREE.Vector3();private _aimDir=new THREE.Vector3();
 /** World crates / suitcase (Poly Haven) keyed by mission chest id. */
 chestVisuals=new Map<number,ChestVisual>();
 /** Chart-scrap scrolls nested in each crate (visible until taken). */
 scrollVisuals=new Map<number,ScrollVisual>();
 /** Persistent hatch stash (military crate, no chart scrap). */
 stashVisual:ChestVisual|null=null;
 /** QA: when true, animate() leaves camera pose alone (Playwright framing). */
 holdCamera=false;
 /** Decorative Poly Haven life ring on the start-chamber floor. */
 lifebuoyVisual:LifebuoyVisual|null=null;
 /** Poly Haven caged sconces mounted on the cave walls; their warm point lights flicker. */
 wallSconceLights:SconceLight[]=[];
 /** Poly Haven caged hanging lamps: swinging, flickering tungsten pools with shadows. */
 hanging:HangingLights|null=null;
 hangingSeen:{pistol:number;guards:number[];impact:number}={pistol:0,guards:[],impact:-1};
 /** Sketchfab PotatoWit soviet posters hung on one cave wall. */
 wallPosters:WallPosters|null=null;
 /** Sketchfab gleb_tihon pipe run hidden on the far south-west cavern wall. */
 wallPipe:WallPipe|null=null;
 /** Tiled pixol3d copper run along the hand-wheel wall in the far south-west cavern. */
 copperPipe:CopperPipe|null=null;
 /** Both arms, shown only while the leak valve is being worked. */
 valveHands:ValveHandsRig|null=null;
 /** Active hand-over-hand turn on the leak valve (null when not at the wheel). */
 valveStroke:ValveStroke|null=null;
 /** Where the eye and look were when the hands went to the wheel, and time since. */
 valveFrom={x:0,y:0,z:0,yaw:0,pitch:0};valveClock=0;
 /** Held FPS knife when inventory knife is selected; torch meshes hide meanwhile. */
 knifeVisual:THREE.Group|null=null;knifeFlashUntil=0;
 /** Time the knife was last drawn (equip animation); null while holstered. */
 knifeEquipAt:number|null=null;
 /** Held gun. Visible only while that slot is selected. It does not fire. */
 gunVisual:THREE.Group|null=null;
 keyVisual:THREE.Group|null=null;
 /** PMREM for Poly Haven metal/wood specular on the held knife. */
 knifeEnvMap:THREE.Texture|null=null;
 shakeAmp=0;
 /** Soft additive caustic floor pools under major light shafts. */
 causticPools:THREE.Mesh[]=[];
 /** Rising water in the breath corridor only. */
 breathWater!:THREE.Mesh;
 breathVolume!:THREE.Mesh;
 breathTank!:THREE.Group;
 /** True while the corridor is still dry enough to walk. */
 onFoot=false;
 /** Human gait: stride phase, speed controller, and the head pose the camera rides on. */
 gait=new Gait();
 /** Head above the bunker waterline last frame (drives fog, music filter, HUD). */
 airborne=true;
 /** Lights near the camera that may shade the bunker-wide water surface. Moves with the player. */
 floodLightBox=new THREE.Box3();
 /** World XZ bounds of every open bunker cell (corridor + cave). */
 bunkerBounds={minX:0,maxX:0,minZ:0,maxZ:0,cx:0,cz:0,width:1,depth:1};
 /** Previous-frame walk flag — detects the flood-forced swim handoff. */
 wasOnFoot=true;
 /** Per-chunk point-light lists. Same BRDF as the full set, only lights that can reach the chunk. */
 pointCullTargets:PointCull[]=[];
 pointCullSyncs:(()=>void)[]=[];
 pointCullSaturated=false;
 _cullLights:THREE.PointLight[]=[];
 _cullWp:THREE.Vector3[]=[];
 /** World box around the held torch / knife. Refreshed every frame. */
 heldLightBox=new THREE.Box3();
 /** World box around the guardian. Refreshed every frame. */
 guardianLightBox=new THREE.Box3();
 /** Corridor footprint and tank mounts. Computed once — the map does not move. */
 breathFoot!:BreathFootprint;
 breathMounts:BreathTankMount[]=[];
 /**
  * Meshes the corridor mouth can fully hide. Hiding one does not change a pixel:
  * the test keeps any box a ray from the camera can see through the opening.
  */
 portalItems:{obj:THREE.Object3D;box:THREE.Box3;side:'cave'|'breath';hidden:boolean}[]=[];
 _portalN=[new THREE.Vector3(),new THREE.Vector3(),new THREE.Vector3(),new THREE.Vector3()];
 _portalD=[0,0,0,0];
 _pcx=[0,0,0,0];
 _pcy=[0,0,0,0];
 _adoptTmp=new THREE.Box3();
 propStreaming=new PropStreaming(performance.now()/1000);
 lastPropCheck=0;
 alarmFixtures:{light:THREE.PointLight;lens:THREE.MeshBasicMaterial}[]=[];
 gradeHemi!:THREE.HemisphereLight;gradeAmbient!:THREE.AmbientLight;gradeSky!:THREE.DirectionalLight;
 waterMat!:THREE.MeshBasicMaterial;volMat!:THREE.MeshBasicMaterial;
 gradeClock=createGradeClock();frameGrade:FrameGrade='dry';
 clipPass!:ReturnType<typeof createClipGradePass>;
 gradeSpots:{light:THREE.Light;rest:number}[]=[];
 /** Soft blood cloud group (droplets + plume); hidden until hit/kill. */
 bloodGroup:THREE.Group|null=null;
 bloodLayers:BloodLayer[]=[];
 bloodLife=0;bloodPeakLife=14;
 rockMaps:CaveRockMaps;
 constructor(host:HTMLDivElement,ui:(snapshot:Snapshot)=>void){
  super(host,{onReady:()=>{},onPause:()=>{},onStatus:()=>{},onToggleUI:()=>{},onGlide:()=>{},onError:()=>{}},{deferStart:true});
  this.ui=ui;this.rockMaps=loadCaveRockMaps(this.renderer);this.position.copy(this.mission.position);this.camera.position.copy(this.position);this.pitch=this.targetPitch=0;
  // Dirty ivory field. The three grades assign this color; they do not blend it.
  this.scene.background=new THREE.Color(DRY_FIELD);this.scene.fog=new THREE.FogExp2(DRY_FIELD,DRY_DENSITY);
  this.camera.far=130;this.camera.fov=64;this.camera.updateProjectionMatrix();
  // No filmic shoulder — the clip pass clamps contrast.
  this.renderer.toneMappingExposure=1;this.renderer.toneMapping=THREE.NoToneMapping;
  this.setPixelRatio();
  // Modest torch shadows only (no other casters) — 512² map for Safari cost.
  this.renderer.shadowMap.enabled=true;
  this.renderer.shadowMap.type=THREE.PCFShadowMap;
  const dry=GRADE_LIGHTS.dry;
  this.gradeHemi=new THREE.HemisphereLight(dry.sky,dry.ground,dry.hemi);
  this.gradeAmbient=new THREE.AmbientLight(dry.ambient,dry.ambientI);
  this.gradeSky=new THREE.DirectionalLight(dry.sun,dry.sunI);this.gradeSky.position.set(-8,30,-20);
  this.scene.add(this.gradeHemi,this.gradeAmbient,this.gradeSky);
  this.buildCave();this.buildBreath();this.buildLights();this.buildComposer();
  loadCausticAtlas().then(tex=>{
   if(!this.alive)return;
   for(const pool of this.causticPools){
    const mat=pool.material as THREE.ShaderMaterial;
    if(mat.uniforms.uMap)mat.uniforms.uMap.value=tex;
   }
  });
  this.guardian=this.ichthyosaur(.9);this.scene.add(this.guardian.group);
  this.guardian.group.traverse(o=>{if(o instanceof THREE.Mesh){o.castShadow=true;o.receiveShadow=true;}});
  const eyeMat=new THREE.MeshBasicMaterial({color:0xe0a772});
  for(const side of [-1,1])this.ellipsoid(this.guardian.group,eyeMat,1.8,.27,side*.5,.1,.1,.04);
  this.sovietGuards=Array.from({length:GUARD_COUNT},(_,i)=>createSovietGuardVisual(i));
  for(const visual of this.sovietGuards)this.scene.add(visual.root);
  this.guardRecoil=this.sovietGuards.map(()=>0);
  this.guardShotsSeen=this.sovietGuards.map(()=>0);
  // Muzzle flash: a short, hot point light and an additive glow card at the barrel.
  this.guardFlash=new THREE.PointLight(0xffb45a,0,7,1.8);this.guardFlash.castShadow=false;
  const flashTex=(()=>{const c=document.createElement('canvas');c.width=c.height=64;const g=c.getContext('2d')!;const gr=g.createRadialGradient(32,32,0,32,32,32);gr.addColorStop(0,'rgba(255,245,210,1)');gr.addColorStop(.35,'rgba(255,170,70,.8)');gr.addColorStop(1,'rgba(255,120,30,0)');g.fillStyle=gr;g.fillRect(0,0,64,64);return new THREE.CanvasTexture(c);})();
  this.guardFlashGlow=new THREE.Sprite(new THREE.SpriteMaterial({map:flashTex,color:0xffffff,transparent:true,depthWrite:false,blending:THREE.AdditiveBlending,opacity:0}));
  this.guardFlashGlow.scale.setScalar(.55);this.guardFlashGlow.visible=false;
  this.scene.add(this.guardFlash,this.guardFlashGlow);
  this.guardJolt=this.sovietGuards.map(()=>0);this.guardFall=this.sovietGuards.map(()=>0);
  this.fx=new SurvivalFx(this.scene,this.sovietGuards,flashTex,o=>this.adoptPointCull(o,this.worldBox(o),true,true));
  this.guardLifeSeen=this.sovietGuards.map(()=>-1);this.guardWindupSeen=this.sovietGuards.map(()=>0);this.guardStrikeSeen=this.sovietGuards.map(()=>-1);
  // Detection notice: a hard red "!" that pops over a guard's helmet when he is called in.
  const noticeTex=(()=>{const c=document.createElement('canvas');c.width=64;c.height=128;const g=c.getContext('2d')!;
   g.font='bold 112px sans-serif';g.textAlign='center';g.textBaseline='middle';
   g.lineWidth=12;g.strokeStyle='rgba(20,4,2,.9)';g.strokeText('!',32,68);g.fillStyle='#ff3b2a';g.fillText('!',32,68);
   return new THREE.CanvasTexture(c);})();
  this.guardNotice=this.sovietGuards.map(v=>{
   const s=new THREE.Sprite(new THREE.SpriteMaterial({map:noticeTex,transparent:true,depthWrite:false,depthTest:false,fog:false}));
   s.scale.set(.2,.4,1);s.position.set(0,2.35,0);s.visible=false;s.renderOrder=11;
   v.root.add(s);return s;
  });
  this.playerFlash=new THREE.PointLight(0xffb45a,0,6,1.8);this.playerFlash.castShadow=false;
  this.playerFlashGlow=new THREE.Sprite(new THREE.SpriteMaterial({map:flashTex,color:0xffffff,transparent:true,depthWrite:false,depthTest:false,blending:THREE.AdditiveBlending,opacity:0}));
  this.playerFlashGlow.visible=false;this.playerFlashGlow.renderOrder=10;
  Promise.all(this.sovietGuards.map(v=>upgradeSovietGuardVisual(v))).then(()=>{
   if(!this.alive)return;
   this.syncSovietGuard(0);
  });
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
  loadBloodMaps().then(maps=>{if(this.alive)this.applyBloodMaps(maps);});
  // Mount knife stub immediately so selecting slot 1 always shows a held prop;
  // Poly Haven glTF upgrades the mesh when ready (with RoomEnvironment specular).
  const pmrem=new THREE.PMREMGenerator(this.renderer);
  this.knifeEnvMap=pmrem.fromScene(new RoomEnvironment(),.04).texture;
  pmrem.dispose();
  this.knifeVisual=createKnifeVisual();
  this.camera.add(this.knifeVisual);
  // Stay hidden until glTF upgrades — stub + bright envMap flashed white.
  this.knifeVisual.visible=false;
  this.gunVisual=this.makeHeldGun();
  this.camera.add(this.gunVisual);
  // Muzzle sits just past the TT-33's barrel (viewmodel faces −Z).
  this.playerFlash.position.set(0,.05,-.34);this.playerFlashGlow.position.set(0,.05,-.34);
  this.gunVisual.add(this.playerFlash,this.playerFlashGlow);
  this.keyVisual=createSovietKeyHeld();
  this.camera.add(this.keyVisual);
  this.keyVisual.visible=false;
  this.syncHeldTorch();
  upgradeKnifeVisual(this.knifeVisual,this.knifeEnvMap).then(()=>{
   if(!this.alive||!this.knifeVisual)return;
   applyKnifeEnvMap(this.knifeVisual,this.knifeEnvMap!);
   poseKnife(this.knifeVisual);
   this.knifeVisual.visible=this.holdingKnife();
   this.syncHeldTorch();
   this.adoptPointCull(this.knifeVisual,this.heldLightBox,false,false);
  });
  this.mountChests();
  this.mountStash();
  this.mountLifebuoy();
  this.mountWallSconces();
  this.mountHangingLights();
  this.mountWallPosters();
  this.mountWallPipe();
  this.mountCopperPipe();
  this.valveHands=createValveHands();
  this.scene.add(this.valveHands.root);
  if(this.knifeEnvMap)applyHandEnvMap(this.valveHands.root,this.knifeEnvMap);
  this.adoptPointCull(this.valveHands.root,this.heldLightBox,false,false);
  this.pointCullSyncs.push(()=>{
   const p=this.camera.position;
   this.heldLightBox.min.set(p.x-2.2,p.y-2.2,p.z-2.2);
   this.heldLightBox.max.set(p.x+2.2,p.y+2.2,p.z+2.2);
  });
  this.pointCullSyncs.push(()=>{
   const p=this.guardian.group.position;
   this.guardianLightBox.min.set(p.x-6,p.y-4,p.z-6);
   this.guardianLightBox.max.set(p.x+6,p.y+4,p.z+6);
  });
  this.adoptPointCull(this.torchBody,this.heldLightBox,false,false);
  this.adoptPointCull(this.guardian.group,this.guardianLightBox,false,true);
  this.bind();this.observer=new ResizeObserver(()=>this.resize());this.observer.observe(host);this.syncPickups();this.animate();this.publish();
 }
 /** Place the Poly Haven lifebuoy on the start-chamber floor and upgrade in the background. */
 mountLifebuoy(){
  const visual=createLifebuoyVisual();
  visual.root.position.set(LIFEBUOY_POS.x,LIFEBUOY_POS.y,LIFEBUOY_POS.z);
  visual.root.rotation.y=LIFEBUOY_YAW;
  this.scene.add(visual.root);
  this.lifebuoyVisual=visual;
  this.propStreaming.add('lifebuoy',LIFEBUOY_POS,async()=>{
   const ok=await upgradeLifebuoyVisual(visual);
   if(!ok||!this.alive)return ok;
   this.adoptPointCull(visual.root,this.worldBox(visual.root),false,true);
   return ok;
  },40);
 }
 /** Bolt Poly Haven caged sconces to spaced wall faces; warm lights show at once, meshes upgrade in. */
 mountWallSconces(){
  const mounts=wallSconceMounts();
  const {group,lights}=createWallSconces(mounts);
  this.scene.add(group);
  this.wallSconceLights=lights;
  upgradeWallSconces(group,mounts,lights).then(ok=>{
   if(!ok||!this.alive)return;
   for(const child of group.children){
    if((child as THREE.Light).isLight||child.name==='sconceStub')continue;
    this.adoptPointCull(child,this.worldBox(child),true,true);
   }
  });
 }
 /** Hang the caged ceiling lamps on their cables; stubs light at once, the glTF upgrades in. */
 mountHangingLights(){
  const h=createHangingLights();
  this.scene.add(h.group);
  this.hanging=h;
  upgradeHangingLights(h).then(ok=>{if(!ok||!this.alive)return;});
 }
 /** Gunfire and impacts this frame shake the lamps; the final wave makes them stutter. */
 stepHanging(dt:number,slamTint:number|null){
  const h=this.hanging,m=this.mission;if(!h)return;
  const kicks:{x:number;z:number;power?:number}[]=[];
  const seen=this.hangingSeen;
  if(m.pistol.shots!==seen.pistol){if(m.pistol.shots>seen.pistol)kicks.push({x:m.position.x,z:m.position.z,power:1});seen.pistol=m.pistol.shots;}
  m.guards.forEach((g,i)=>{const prev=seen.guards[i]??g.shots;if(g.shots>prev)kicks.push({x:g.position.x,z:g.position.z,power:.6});seen.guards[i]=g.shots;});
  if(m.lastImpact&&m.lastImpact.at!==seen.impact){seen.impact=m.lastImpact.at;kicks.push({x:m.lastImpact.point.x,z:m.lastImpact.point.z,power:.7});}
  const panic=m.director.phase==='final'?1:0;
  stepHangingLights(h,dt,this.time,this.camera.position,kicks,panic,slamTint);
 }
 /** Hang PotatoWit soviet posters on one solid wall face (stub → PNG albedos). */
 mountWallPosters(){
  const visual=createWallPosters();
  this.scene.add(visual.group);
  this.wallPosters=visual;
  this.propStreaming.add('posters',visual.group.userData.mount,async()=>{
   const ok=await upgradeWallPosters(visual);
   if(!ok||!this.alive)return ok;
   this.adoptPointCull(visual.group,this.worldBox(visual.group),true,true);
   return ok;
  },40);
 }
 /** Repeat the Sketchfab copper section along the hand-wheel wall. */
 mountCopperPipe(){
  const visual=createCopperPipe();
  this.scene.add(visual.group);
  this.copperPipe=visual;
  this.propStreaming.add('copper-pipe',PIPE_MOUNT,async()=>{
   const ok=await upgradeCopperPipe(visual,this.knifeEnvMap);
   if(!ok||!this.alive)return ok;
   this.adoptPointCull(visual.group,this.worldBox(visual.group),true,true);
   return ok;
  },48);
 }
 /** Bolt the Sketchfab pipe to the blind south-west wall (stub → decimated GLB). */
 mountWallPipe(){
  const visual=createWallPipe();
  this.scene.add(visual.group);
  this.wallPipe=visual;
  this.propStreaming.add('valve-pipe',PIPE_MOUNT,async()=>{
   const ok=await upgradeWallPipe(visual);
   if(!ok||!this.alive)return ok;
   this.adoptPointCull(visual.group,this.worldBox(visual.group),true,true);
   return ok;
  },48);
 }
 /** Place the three Poly Haven chests and upgrade stubs to glTF in the background. */
 mountChests(){
  for(const chest of this.mission.chests){
   const visual=createChestVisual(chest.kind);
   visual.root.position.set(chest.position.x,chest.position.y,chest.position.z);
   visual.root.rotation.y=chest.yaw;
   const scroll=createScrollVisual(true);
   this.scene.add(visual.root);
   // Inside the body, so it inherits the crate yaw and stays in the cavity.
   visual.pivot.add(scroll.root);
   this.chestVisuals.set(chest.id,visual);
   this.scrollVisuals.set(chest.id,scroll);
   this.propStreaming.add(`chest-${chest.id}`,chest.position,async()=>{
    const ok=await upgradeChestVisual(visual);
    if(!this.alive)return ok;
    const live=this.mission.chests.find(c=>c.id===chest.id);
    if(visual.lid)visual.lid.rotation.copy(live?.open?visual.openRot:visual.closedRot);
    if(ok)this.adoptPointCull(visual.root,this.worldBox(visual.root),false,true);
    return ok;
   },40);
   this.propStreaming.add(`scroll-${chest.id}`,chest.position,()=>upgradeScrollVisual(scroll),40);
  }
 }
 syncChests(dt:number){
  for(const chest of this.mission.chests){
   const visual=this.chestVisuals.get(chest.id);if(!visual)continue;
   visual.root.position.set(chest.position.x,chest.position.y,chest.position.z);
   visual.root.rotation.y=chest.yaw;
   syncChestOpen(visual,chest.open,dt);
   const scroll=this.scrollVisuals.get(chest.id);
   if(scroll){
    const want=scrollShouldShow(chest.kind,chest.open,this.mission.hasMapFragment(chest.fragment));
    syncScrollPresent(scroll,want,dt,chest.kind);
    // Shared scroll material would otherwise light every parchment with all 48 point lights.
    if(scroll.ready&&!scroll.root.userData.pointReady){
     scroll.root.userData.pointReady=true;
     const box=new THREE.Box3().setFromCenterAndSize(new THREE.Vector3(chest.position.x,chest.position.y+.6,chest.position.z),new THREE.Vector3(1.8,1.8,1.8));
     this.adoptPointCull(scroll.root,box,true,true);
    }
   }
  }
  this.syncStash(dt);
 }
 /** Poly Haven military crate at the hatch — player bank, no chart scrap. */
 mountStash(){
  const visual=createChestVisual('military');
  visual.root.position.set(STASH_POSITION.x,STASH_POSITION.y,STASH_POSITION.z);
  visual.root.rotation.y=STASH_YAW;
  visual.root.name='hatchStash';
  this.scene.add(visual.root);
  this.stashVisual=visual;
  upgradeChestVisual(visual).then(ok=>{
   if(!this.alive||!this.stashVisual)return;
   if(visual.lid)visual.lid.rotation.copy(this.mission.stashOpen?visual.openRot:visual.closedRot);
   if(ok)this.adoptPointCull(visual.root,this.worldBox(visual.root),false,true);
  });
 }
 syncStash(dt:number){
  const visual=this.stashVisual;if(!visual)return;
  visual.root.position.set(STASH_POSITION.x,STASH_POSITION.y,STASH_POSITION.z);
  visual.root.rotation.y=STASH_YAW;
  syncChestOpen(visual,this.mission.stashOpen,dt);
 }
 /** Soft blood Points (shader discs × Kenney maps — never square sprites). */
 buildBlood(){
  const blob=makeSoftBlobTexture(48);
  const group=new THREE.Group();group.name='bloodCloud';group.visible=false;
  const pr=Math.min(typeof window!=='undefined'?window.devicePixelRatio:1,2);
  const mk=(n:number,size:number,color:number,map:THREE.Texture):BloodLayer=>{
   const pos=new Float32Array(n*3);const vel=new Float32Array(n*3);
   for(let i=0;i<n;i++){pos[i*3]=0;pos[i*3+1]=-40;pos[i*3+2]=0;}
   const geo=new THREE.BufferGeometry();
   geo.setAttribute('position',new THREE.BufferAttribute(pos,3));
   const uniforms={
    uMap:{value:map},
    uColor:{value:new THREE.Color(color)},
    uOpacity:{value:0},
    uSize:{value:size},
    uPixelRatio:{value:pr},
   };
   const mat=new THREE.ShaderMaterial({
    uniforms,vertexShader:bloodVert,fragmentShader:bloodFrag,
    transparent:true,depthWrite:false,depthTest:true,blending:THREE.NormalBlending,
   });
   const points=new THREE.Points(geo,mat);points.frustumCulled=false;
   group.add(points);
   return {points,vel,baseSize:size,uniforms};
  };
  // Droplets + plume + faint glow — ~118 points total, light for the prototype.
  this.bloodLayers=[
   mk(64,.28,0x7a1218,blob),
   mk(36,.72,0x5c0e14,blob),
   mk(18,.4,0x9a1e28,blob),
  ];
  this.bloodGroup=group;this.scene.add(group);
 }
 applyBloodMaps(maps:BloodMaps){
  if(this.bloodLayers.length<3)return;
  this.bloodLayers[0].uniforms.uMap.value=maps.droplet;
  this.bloodLayers[1].uniforms.uMap.value=maps.plume;
  this.bloodLayers[2].uniforms.uMap.value=maps.glow;
 }
 /** Floating blood near the guardian — `hit` is a small puff; `kill` a lingering cloud. */
 spawnBlood(at:THREE.Vector3|{x:number;y:number;z:number},kind:'hit'|'kill'='kill'){
  if(!this.bloodGroup||!this.bloodLayers.length)return;
  const spread=kind==='kill'?.85:.35;
  const up=kind==='kill'?.28:.14;
  const life=kind==='kill'?16:4.5;
  const opac=kind==='kill'?.88:.7;
  const sizeMul=kind==='kill'?1:.55;
  const drift=kind==='kill'?.42:.22;
  for(const layer of this.bloodLayers){
   const pos=layer.points.geometry.attributes.position as THREE.BufferAttribute;
   for(let i=0;i<pos.count;i++){
    pos.setXYZ(
     i,
     at.x+(Math.random()-.5)*spread,
     at.y+(Math.random()-.5)*spread*.55,
     at.z+(Math.random()-.5)*spread,
    );
    layer.vel[i*3]=(Math.random()-.5)*drift;
    layer.vel[i*3+1]=.03+Math.random()*up;
    layer.vel[i*3+2]=(Math.random()-.5)*drift;
   }
   pos.needsUpdate=true;
   layer.uniforms.uSize.value=layer.baseSize*sizeMul*(.85+Math.random()*.25);
   layer.uniforms.uOpacity.value=opac;
  }
  this.bloodGroup.visible=true;this.bloodLife=life;this.bloodPeakLife=life;
 }
 updateBlood(dt:number){
  if(!this.bloodGroup||!this.bloodGroup.visible||!this.bloodLayers.length)return;
  this.bloodLife-=dt;
  const fade=Math.max(0,Math.min(1,this.bloodLife/Math.max(.01,this.bloodPeakLife*.45)));
  for(const layer of this.bloodLayers){
   const pos=layer.points.geometry.attributes.position as THREE.BufferAttribute;
   for(let i=0;i<pos.count;i++){
    let x=pos.getX(i)+layer.vel[i*3]*dt;
    let y=pos.getY(i)+layer.vel[i*3+1]*dt;
    let z=pos.getZ(i)+layer.vel[i*3+2]*dt;
    // Drag + gentle buoyancy drift so it hangs in the water column.
    layer.vel[i*3]*=Math.exp(-dt*.45);
    layer.vel[i*3+1]=layer.vel[i*3+1]*Math.exp(-dt*.32)+Math.sin(this.time*1.4+i)*.025*dt;
    layer.vel[i*3+2]*=Math.exp(-dt*.45);
    if(y<FLOOR_Y+.15){y=FLOOR_Y+.15;layer.vel[i*3+1]=Math.abs(layer.vel[i*3+1])*.25;}
    pos.setXYZ(i,x,y,z);
   }
   pos.needsUpdate=true;
   layer.uniforms.uOpacity.value=fade*(layer===this.bloodLayers[1]?.75:.9);
  }
  if(this.bloodLife<=0){
   this.bloodGroup.visible=false;
   for(const layer of this.bloodLayers)layer.uniforms.uOpacity.value=0;
  }
 }
 /** Pack only point lights that reach this chunk. Spot/hemi/ambient/shadows stay on the shared shader. */
 trackPointCull(mat:THREE.Material,box:THREE.Box3){
  if(mat.userData.pointCulled)return;
  const count={value:0};
  const pos=Array.from({length:POINT_CULL_MAX},()=>new THREE.Vector3());
  const col=Array.from({length:POINT_CULL_MAX},()=>new THREE.Vector3());
  const dist=new Float32Array(POINT_CULL_MAX);
  const decay=new Float32Array(POINT_CULL_MAX);
  const prev=mat.onBeforeCompile?.bind(mat);
  const prevKey=mat.customProgramCacheKey.bind(mat);
  mat.onBeforeCompile=(shader,renderer)=>{
   prev?.(shader,renderer);
   shader.uniforms.uCullCount=count;
   shader.uniforms.uCullPos={value:pos};
   shader.uniforms.uCullCol={value:col};
   shader.uniforms.uCullDist={value:dist};
   shader.uniforms.uCullDecay={value:decay};
   shader.fragmentShader=`uniform int uCullCount;uniform vec3 uCullPos[${POINT_CULL_MAX}];uniform vec3 uCullCol[${POINT_CULL_MAX}];uniform float uCullDist[${POINT_CULL_MAX}];uniform float uCullDecay[${POINT_CULL_MAX}];\n`+shader.fragmentShader;
   shader.fragmentShader=shader.fragmentShader.replace('#include <lights_fragment_begin>',POINT_CULL_LIGHTS);
  };
  mat.customProgramCacheKey=()=>prevKey()+':pt'+POINT_CULL_MAX;
  mat.userData.pointCulled=true;
  this.pointCullTargets.push({box,count,pos,col,dist,decay});
 }
 /** World AABB of every mesh under root. Lights that miss this box cannot shade it. */
 worldBox(root:THREE.Object3D){
  root.updateWorldMatrix(true,true);
  const box=new THREE.Box3();
  const tmp=this._adoptTmp;
  root.traverse(o=>{
   if(!(o instanceof THREE.Mesh))return;
   const geo=o.geometry;
   if(!geo.boundingBox)geo.computeBoundingBox();
   if(!geo.boundingBox)return;
   tmp.copy(geo.boundingBox).applyMatrix4(o.matrixWorld);
   box.union(tmp);
  });
  if(box.isEmpty())box.setFromObject(root);
  return box.expandByScalar(.25);
 }
 /**
  * Same BRDF, but the material only loops point lights that reach `box`.
  * Shared glTF materials must be cloned per instance or every copy would share one box.
  */
 adoptPointCull(root:THREE.Object3D,box:THREE.Box3,cloneMats=false,frustum=true){
  const seen=new Map<THREE.Material,THREE.Material>();
  root.traverse(o=>{
   if(!(o instanceof THREE.Mesh))return;
   const src=Array.isArray(o.material)?o.material:[o.material];
   const out=src.map(m=>{
    if(!m||!(m as THREE.MeshStandardMaterial).isMeshStandardMaterial)return m;
    const std=m as THREE.MeshStandardMaterial;
    if(std.userData.pointCulled&&!cloneMats)return std;
    if(!cloneMats){this.trackPointCull(std,box);return std;}
    let copy=seen.get(std);
    if(!copy){
     copy=std.clone();
     if(std.onBeforeCompile)copy.onBeforeCompile=std.onBeforeCompile;
     copy.customProgramCacheKey=std.customProgramCacheKey.bind(std);
     this.trackPointCull(copy,box);
     seen.set(std,copy);
    }
    return copy;
   });
   if(cloneMats)o.material=Array.isArray(o.material)?out as THREE.Material[]:out[0];
   if(frustum){
    if(!o.geometry.boundingSphere)o.geometry.computeBoundingSphere();
    o.frustumCulled=true;
   }
  });
 }
 /** Refresh packed point lights. A light outside its cutoff cannot change a pixel inside the chunk box. */
 updatePointCull(){
  for(const sync of this.pointCullSyncs)sync();
  const lights=this._cullLights;lights.length=0;
  const wp=this._cullWp;
  this.scene.traverse(o=>{
   const light=o as THREE.PointLight;
   if(!light.isPointLight)return;
   for(let p:THREE.Object3D|null=light;p;p=p.parent)if(!p.visible)return;
   const i=lights.length;
   lights.push(light);
   const v=wp[i]??(wp[i]=new THREE.Vector3());
   light.getWorldPosition(v);
  });
  for(const t of this.pointCullTargets){
   let n=0;
   for(let i=0;i<lights.length;i++){
    const light=lights[i];
    const dist=light.distance;
    if(dist>0&&t.box.distanceToPoint(wp[i])>=dist-1e-3)continue;
    if(n>=POINT_CULL_MAX){
     if(!this.pointCullSaturated){this.pointCullSaturated=true;console.warn('Point-light cull hit the cap; a chunk is missing a light.');}
     break;
    }
    t.pos[n].copy(wp[i]);
    t.col[n].set(light.color.r*light.intensity,light.color.g*light.intensity,light.color.b*light.intensity);
    t.dist[n]=dist;
    t.decay[n]=light.decay;
    n++;
   }
   t.count.value=n;
  }
 }
 /** Hide meshes the corridor mouth (or the cave looking back) completely covers. */
 updatePortalPlanes(cam:THREE.Vector3,zP:number){
  const foot=this.breathFoot;
  const x0=foot.minX-.5,x1=foot.maxX+.5,y0=-.6,y1=9;
  const xs=this._pcx,ys=this._pcy;
  xs[0]=x0;xs[1]=x1;xs[2]=x1;xs[3]=x0;
  ys[0]=y0;ys[1]=y0;ys[2]=y1;ys[3]=y1;
  const cx=(x0+x1)*.5,cy=(y0+y1)*.5;
  for(let i=0;i<4;i++){
   const j=(i+1)%4;
   const ax=xs[i]-cam.x,ay=ys[i]-cam.y,az=zP-cam.z;
   const bx=xs[j]-cam.x,by=ys[j]-cam.y,bz=zP-cam.z;
   let nx=ay*bz-az*by,ny=az*bx-ax*bz,nz=ax*by-ay*bx;
   const len=Math.hypot(nx,ny,nz)||1;
   nx/=len;ny/=len;nz/=len;
   if(nx*(cx-xs[i])+ny*(cy-ys[i])<0){nx=-nx;ny=-ny;nz=-nz;}
   this._portalN[i].set(nx,ny,nz);
   this._portalD[i]=-(nx*xs[i]+ny*ys[i]+nz*zP);
  }
 }
 boxOutsidePortal(box:THREE.Box3,zP:number){
  if(box.max.z>zP-.25&&box.min.z<zP+.25)return false;
  for(let i=0;i<4;i++){
   const n=this._portalN[i];
   const x=n.x>=0?box.max.x:box.min.x;
   const y=n.y>=0?box.max.y:box.min.y;
   const z=n.z>=0?box.max.z:box.min.z;
   if(n.x*x+n.y*y+n.z*z+this._portalD[i]<-.02)return true;
  }
  return false;
 }
 applyPortalOcclusion(){
  const cam=this.camera.position;
  const foot=this.breathFoot;
  if(!foot)return;
  const zP=foot.minZ;
  const nearDoor=Math.abs(cam.z-zP)<1.25;
  const inCorr=cam.x>foot.minX-.4&&cam.x<foot.maxX+.4&&cam.z>zP-.15&&cam.z<foot.maxZ+1.2&&cam.y>-.6&&cam.y<8.8;
  const inCave=cam.z<zP-.15&&cam.y>-2&&cam.y<12;
  const hideSide:''|'cave'|'breath'=nearDoor||(!inCorr&&!inCave)?'':inCorr?'cave':'breath';
  if(!hideSide){
   for(const item of this.portalItems)if(item.hidden){item.obj.visible=true;item.hidden=false;}
   return;
  }
  this.updatePortalPlanes(cam,zP);
  for(const item of this.portalItems){
   const hide=item.side===hideSide&&this.boxOutsidePortal(item.box,zP);
   if(hide){if(item.obj.visible){item.obj.visible=false;item.hidden=true;}}
   else if(item.hidden){item.obj.visible=true;item.hidden=false;}
  }
 }
 buildCave(){
  const {rock:rockMaps,sand:sandMaps,moss:mossMaps}=this.rockMaps;
  // Same meshes as one merged cave, split on a 2-cell grid so each draw only shades point lights that reach it.
  type Bucket={floors:THREE.BufferGeometry[];roofs:THREE.BufferGeometry[];walls:THREE.BufferGeometry[];details:THREE.BufferGeometry[];breath:boolean};
  const buckets=new Map<string,Bucket>();
  const take=(c:number,r:number)=>{
   // Corridor cells stay in their own meshes. Sharing a 16 m chunk with the
   // entrance cave forced every occluded cave triangle into the hatch view.
   const breath=breathZone(c,r)!=='';
   const key=`${breath?'b':'c'}:${c>>2},${r>>2}`;
   let b=buckets.get(key);
   if(!b){b={floors:[],roofs:[],walls:[],details:[],breath};buckets.set(key,b);}
   return b;
  };
  for(const key of cells){const [c,r]=key.split(',').map(Number),p=world(c,r);
   const b=take(c,r);
   // The floor surface is the simulation's floor (FLOOR_Y): everything that stands, lies or walks uses that height.
   const fg=new THREE.PlaneGeometry(CELL,CELL,2,2);fg.rotateX(-Math.PI/2);fg.translate(p.x,FLOOR_Y,p.z);b.floors.push(fg);
   if(!(c===19&&r===3)){const cg=fg.clone();cg.rotateZ(Math.PI);cg.translate(p.x*2,8+FLOOR_Y,0);b.roofs.push(cg);}
   for(const [dc,dr] of [[1,0],[-1,0],[0,1],[0,-1]])if(!cells.has(`${c+dc},${r+dr}`)){
    const g=new THREE.BoxGeometry(dc?1:CELL+.05,8.5,dr?1:CELL+.05);g.translate(p.x+dc*2.5,4,p.z-dr*2.5);b.walls.push(g);
    for(let n=0;n<3;n++){const stone=new THREE.IcosahedronGeometry(1,1);stone.scale(dc?.7:1.7,1.3+(n%2)*.5,dr?.7:1.7);stone.translate(p.x+dc*2.45,1.3+n*2.5,p.z-dr*2.45);b.details.push(stone);}
   }
  }
  for(const b of buckets.values()){
   const floor=this.material(PALETTE.floor,'sand',.88,0,sandMaps,mossMaps);
   const rock=this.material(PALETTE.stone,'rock',.86,1.6,rockMaps,mossMaps);
   const ceiling=this.material(PALETTE.ceiling,'rock',.9,.6,rockMaps,mossMaps);
   const box=new THREE.Box3();
   const add=(geos:THREE.BufferGeometry[],mat:THREE.Material)=>{
    if(!geos.length)return;
    const merged=mergeGeometries(geos);if(!merged)return;
    merged.computeBoundingBox();merged.computeBoundingSphere();
    if(merged.boundingBox)box.union(merged.boundingBox);
    const mesh=new THREE.Mesh(merged,mat);mesh.castShadow=true;mesh.receiveShadow=true;
    mesh.matrixAutoUpdate=false;mesh.updateMatrix();
    this.scene.add(mesh);
    const pb=merged.boundingBox?.clone();
    if(pb)this.portalItems.push({obj:mesh,box:pb,side:b.breath?'breath':'cave',hidden:false});
    geos.forEach(g=>g.dispose());
   };
   add(b.floors,floor);add(b.roofs,ceiling);add(b.walls,rock);add(b.details,rock);
   box.expandByScalar(.05);
   this.trackPointCull(floor,box);this.trackPointCull(rock,box);this.trackPointCull(ceiling,box);
  }
  const bone=this.material(0xc8c0a8,'rock',.82,1.5,rockMaps,mossMaps);
  const boneBox=new THREE.Box3();
  for(let i=0;i<6;i++)for(const s of [-1,1]){
   // Rib roots bed a few centimetres into the floor sediment, as a fossil would.
   const rib=this.tube([V(-3+i*.75,FLOOR_Y+.08,-113),V(-3+i*.75,FLOOR_Y+1.08,-113+s*1.2),V(-3+i*.75,FLOOR_Y+.06,-113+s*2.2)],[.12,.09,.025],bone,12,5);
   rib.castShadow=true;rib.receiveShadow=true;rib.geometry.computeBoundingBox();
   if(rib.geometry.boundingBox)boneBox.union(rib.geometry.boundingBox);
   this.scene.add(rib);
  }
  boneBox.expandByScalar(.05);this.trackPointCull(bone,boneBox);
  const plinthMat=this.material(PALETTE.stone,'rock',.86,1.6,rockMaps,mossMaps);
  // Relic rests on the plinth top (RELIC_PLINTH.height above the floor).
  const plinth=new THREE.Mesh(new THREE.CylinderGeometry(1.1,1.5,RELIC_PLINTH.height,7),plinthMat);plinth.position.set(RELIC.x,FLOOR_Y+RELIC_PLINTH.height/2,RELIC.z);
  plinth.castShadow=true;plinth.receiveShadow=true;plinth.updateMatrixWorld();
  plinth.geometry.computeBoundingBox();
  const pbox=plinth.geometry.boundingBox?.clone().applyMatrix4(plinth.matrixWorld).expandByScalar(.05)??new THREE.Box3();
  this.trackPointCull(plinthMat,pbox);this.scene.add(plinth);
 }
 /** Hatch, wall tank, and the corridor water volume. Cave meshes stay as built. */
 buildBreath(){
  const foot=breathFootprint();
  this.breathFoot=foot;
  this.breathMounts=breathTankMounts();
  // Unlit sheet: one blue-green, not a lit translucent blend.
  this.waterMat=new THREE.MeshBasicMaterial({
   color:WATER_FIELD,transparent:true,opacity:.93,depthWrite:false,side:THREE.DoubleSide,fog:false,
  });
  this.volMat=new THREE.MeshBasicMaterial({
   color:WATER_FIELD,transparent:true,opacity:waterVeilOpacity('water'),depthWrite:false,side:THREE.BackSide,fog:false,
  });
  const waterMat=this.waterMat,volMat=this.volMat;
  // The leak floods the whole bunker, so the surface spans every open cell.
  let bx0=Infinity,bx1=-Infinity,bz0=Infinity,bz1=-Infinity;
  for(const key of cells){
   const [c,r]=key.split(',').map(Number);const w=world(c,r);
   bx0=Math.min(bx0,w.x-CELL/2);bx1=Math.max(bx1,w.x+CELL/2);bz0=Math.min(bz0,w.z-CELL/2);bz1=Math.max(bz1,w.z+CELL/2);
  }
  this.bunkerBounds={minX:bx0,maxX:bx1,minZ:bz0,maxZ:bz1,cx:(bx0+bx1)/2,cz:(bz0+bz1)/2,width:bx1-bx0,depth:bz1-bz0};
  this.floodLightBox.set(new THREE.Vector3(foot.minX,-.3,foot.minZ),new THREE.Vector3(foot.maxX,8.7,foot.maxZ));
  // Unlit water does not sample point lights, so it stays one flat field.
  const bb=this.bunkerBounds;
  this.breathWater=new THREE.Mesh(new THREE.PlaneGeometry(bb.width,bb.depth),waterMat);
  this.breathWater.rotation.x=-Math.PI/2;
  this.breathWater.position.set(bb.cx,0,bb.cz);
  this.breathWater.visible=false;
  this.breathWater.renderOrder=2;
  this.breathVolume=new THREE.Mesh(new THREE.BoxGeometry(1,1,1),volMat);
  this.breathVolume.visible=false;
  this.breathVolume.renderOrder=1;
  this.scene.add(this.breathVolume,this.breathWater);

  const steel=new THREE.MeshStandardMaterial({color:PALETTE.steel,metalness:.72,roughness:.42});
  const spawn=breathHatchSpawn();
  const hatchBox=new THREE.Box3(
   new THREE.Vector3(spawn.x-2.2,0,spawn.z+1.6),
   new THREE.Vector3(spawn.x+2.2,3.4,spawn.z+2.8),
  );
  this.trackPointCull(steel,hatchBox);
  const ring=new THREE.MeshBasicMaterial({color:0xf0d48a});
  const hatch=new THREE.Group();
  const door=new THREE.Mesh(new THREE.BoxGeometry(3.6,2.6,.22),steel);
  door.position.y=1.65;
  const wheel=new THREE.Mesh(new THREE.TorusGeometry(.42,.055,8,18),ring);
  wheel.position.set(0,1.7,.16);
  const rim=new THREE.Mesh(new THREE.TorusGeometry(.95,.04,8,24),ring);
  rim.position.set(0,1.65,.13);
  hatch.add(door,wheel,rim);
  hatch.position.set(spawn.x,FLOOR_Y,spawn.z+2.2);
  this.scene.add(hatch);


  const tank=new THREE.Group();
  tank.name='breathTank';
  const body=new THREE.Mesh(new THREE.CylinderGeometry(.17,.17,.74,14),new THREE.MeshBasicMaterial({color:PALETTE.green}));
  const stripe=new THREE.Mesh(new THREE.CylinderGeometry(.178,.178,.14,14),new THREE.MeshBasicMaterial({color:PALETTE.ivory}));
  stripe.position.y=.08;
  const valveMat=new THREE.MeshStandardMaterial({color:0xd5dde2,metalness:.82,roughness:.22});
  const valveBox=new THREE.Box3();
  this.trackPointCull(valveMat,valveBox);
  this.pointCullSyncs.push(()=>{
   const p=this.breathTank.position;
   valveBox.min.set(p.x-.45,p.y-.2,p.z-.45);
   valveBox.max.set(p.x+.45,p.y+1.3,p.z+.45);
  });
  const valve=new THREE.Mesh(new THREE.BoxGeometry(.14,.16,.14),valveMat);
  valve.position.y=.44;
  const collar=new THREE.Mesh(new THREE.TorusGeometry(.2,.035,6,12),new THREE.MeshBasicMaterial({color:PALETTE.ivory}));
  collar.rotation.x=Math.PI/2;collar.position.y=.22;
  tank.add(body,stripe,valve,collar);
  this.breathTank=tank;
  this.scene.add(tank);
  // Short-range practicals. Distances stay inside corridor chunks so the cave sconce budget is left alone.
  // Light only: the old box housings hung unmounted in mid-air at head height (read as floating
  // black-and-cream slabs), so the corridor keeps the glow without the fixtures.
  const lamps=[{z:spawn.z-2,d:12},{z:16,d:11},{z:8,d:5}];
  for(const lamp of lamps){
   const light=new THREE.PointLight(PALETTE.amber,14,lamp.d,2);
   light.position.set(foot.cx,2.4,lamp.z);
   const lens=new THREE.MeshBasicMaterial({color:PALETTE.amberGlow});
   this.alarmFixtures.push({light,lens});this.scene.add(light);
  }
  this.syncBreathProps();
 }
 syncBreathProps(){
  for(const fixture of this.alarmFixtures){
   fixture.light.color.setHex(practicalColor(this.frameGrade));
   fixture.lens.color.setHex(practicalGlow(this.frameGrade));
  }
  const sheet=waterSheet(this.frameGrade);
  this.waterMat.color.setHex(sheet);
  this.volMat.color.setHex(sheet);
  this.volMat.opacity=waterVeilOpacity(this.frameGrade);
  const y=this.mission.breathWaterY;
  const foot=this.breathFoot;
  // Water below the floor surface is under the slab, not in the room.
  const show=y>FLOOR_Y+.02;
  if(this.breathWater.visible!==show){
   this.breathWater.visible=show;
   this.breathVolume.visible=show;
  }
  if(show){
   this.breathWater.position.set(this.bunkerBounds.cx,y+.02,this.bunkerBounds.cz);
   const h=Math.max(.08,y-FLOOR_Y);
   this.breathVolume.scale.set(foot.width*.94,h,foot.depth*.96);
   this.breathVolume.position.set(foot.cx,FLOOR_Y+h*.5,foot.cz);
  }
  // Floor caustics fade in once there is real water over the floor.
  const cover=THREE.MathUtils.smoothstep(y-FLOOR_Y,.08,.6);
  for(const pool of this.causticPools){
   pool.visible=cover>.01;
   ((pool.material as THREE.ShaderMaterial).uniforms.uOpacity).value=(pool.userData.baseOpacity??.3)*cover;
  }
  const mounts=this.breathMounts;
  const mount=mounts[this.mission.breathTankIndex%mounts.length];
  if(mount){
   this.breathTank.position.set(mount.x,mount.y,mount.z);
   this.breathTank.rotation.set(0,mount.yaw,0);
  }
 }
 applyBreathRespawn(){
  this.endValve();
  this.mission.respawnAtHatch();
  this.mission.mapOpen=false;
  this.resetSurvivalFx();
  this.position.copy(this.mission.position);
  this.velocity.set(0,0,0);
  this.yaw=this.targetYaw=0;
  this.pitch=this.targetPitch=0;
  this.camera.rotation.set(0,0,0);
  this.camera.position.copy(this.position);
  this.gait.reset();
  this.onFoot=true;
  this.wasOnFoot=true;
  this.syncBreathProps();
  this.syncSovietGuard(0);
  this.backgroundMusic?.setDry(true);
 }
 /** Place each Soviet guard mesh on the bunker floor from sim state. */
 /** Restart / respawn: clear smoke, sparks, door swings and the seen-event markers. */
 resetSurvivalFx(){
  this.fx?.reset();
  this.cueSeen=this.mission.elapsed;this.cloudSeen=-1;this.impactSeen=-1;this.hitFxSeen=-1;this.knifeFxSeen=-1;this.supplySeen=-1;
  this.guardLifeSeen=this.sovietGuards.map(()=>-1);
 }
 /** Stereo position of a world point relative to where you look: −1 left … +1 right. */
 panFor(p:{x:number;z:number}){
  const dx=p.x-this.position.x,dz=p.z-this.position.z,l=Math.hypot(dx,dz)||1;
  return Math.max(-1,Math.min(1,(dx*this.right.x+dz*this.right.z)/l));
 }
 /** Per-frame survival presentation: cues, smoke, impacts, supplies, effects. */
 syncSurvival(dt:number){
  const m=this.mission;
  // Keep the sim told where you look (the director never sends a door close behind you).
  this.camera.getWorldDirection(this._aimDir);
  m.facing=Math.atan2(this._aimDir.x,this._aimDir.z);
  const a=this.audible(),ctx=this.audioContext,master=this.master;
  // Door warnings: lamp, swing, bang and a shout from that direction.
  for(const c of m.director.cues){
   if(c.at<=this.cueSeen)continue;
   if(c.kind==='door'){
    const i=survivalDoors().findIndex(d=>d.door.x===c.x&&d.door.z===c.z);
    if(i>=0)this.fx.cueDoor(i,c.at);
    if(a){
     const far=Math.hypot(c.x-this.position.x,c.z-this.position.z);
     const bus=pannedBus(ctx!,master!,this.panFor(c),Math.max(.25,1-far/60),3);
     playDoorBang(ctx!,bus);
     setTimeout(()=>{if(this.audible())playSquadCall(ctx!,bus,far);},350);
    }
   }
  }
  const lastCue=m.director.cues.reduce((t,c)=>Math.max(t,c.at),this.cueSeen);
  this.cueSeen=lastCue;
  // New smoke clouds pop and hiss where they land.
  for(const c of m.clouds){
   if(c.id<=this.cloudSeen)continue;
   this.cloudSeen=c.id;
   if(a)playSmokePop(ctx!,pannedBus(ctx!,master!,this.panFor(c),Math.max(.3,1-Math.hypot(c.x-this.position.x,c.z-this.position.z)/40),3));
  }
  // Your rounds: sparks and dust on rock, blood and a thwack on a guard.
  const imp=m.lastImpact;
  if(imp&&imp.shot!==this.impactSeen){this.impactSeen=imp.shot;this.fx.burst(imp.point,'spark',8);this.fx.burst(imp.point,'dust',6);}
  const hit=m.lastPistolHit;
  if(hit&&hit.shot!==this.hitFxSeen){
   this.hitFxSeen=hit.shot;this.fx.burst(hit.point,'blood',hit.killed?16:9);
   const g=m.guards[hit.guard];
   if(a&&g)playFleshHit(ctx!,pannedBus(ctx!,master!,this.panFor(g.position),.9),hit.headshot&&(g.role==='heavy'||g.role==='officer'));
  }
  const kh=m.lastKnifeHit;
  if(kh&&kh.at!==this.knifeFxSeen){
   this.knifeFxSeen=kh.at;const g=m.guards[kh.guard];
   if(g)this.fx.burst({x:g.position.x,y:FLOOR_Y+1.3,z:g.position.z},'blood',kh.killed?18:10);
  }
  const sup=m.supplyTaken;
  if(sup&&sup.at!==this.supplySeen){this.supplySeen=sup.at;if(a)playSupply(ctx!,master!,sup.kind);}
  const stashCue=m.stashCue;
  if(stashCue){
   m.stashCue='';
   if(a&&ctx&&master){
    if(stashCue==='open')playStashOpen(ctx,master);
    else if(stashCue==='close')playStashClose(ctx,master);
    else if(stashCue==='deposit')playStashDeposit(ctx,master);
    else if(stashCue==='withdraw')playStashWithdraw(ctx,master);
   }
  }
  this.fx.syncCaches(m.caches,this.time,o=>this.adoptPointCull(o,this.worldBox(o),true,true),c=>m.canTakeCache(c));
  this.fx.update(dt,this.time,m.elapsed,this.camera,this.sovietGuards,m.guards,m.clouds,m.grenades);
 }
 syncSovietGuard(dt:number){
  if(!this.sovietGuards.length)return;
  // The squad calling each other in: one shout from the nearest caller.
  const call=this.mission.squadAlertAt;
  if(call>=0&&call!==this.squadAlertSeen){
   this.squadAlertSeen=call;
   let near=Infinity;
   for(const g of this.mission.guards)if(g.hp>0&&g.noticeAt===call)near=Math.min(near,Math.hypot(g.position.x-this.position.x,g.position.z-this.position.z));
   if(this.audible()&&near<Infinity)playSquadCall(this.audioContext!,this.master!,near);
  }
  this._aimTarget.set(this.position.x,this.position.y-.15,this.position.z);
  let flashFrom=-1;
  for(let i=0;i<this.sovietGuards.length;i++){
   const visual=this.sovietGuards[i];
   const g=this.mission.guards[i];if(!visual||!g)continue;
   // A fresh life in this slot (reinforcement or restart): clear his fall and pose state.
   if(g.life!==this.guardLifeSeen[i]){
    this.guardLifeSeen[i]=g.life;this.guardFall[i]=0;this.guardRecoil[i]=0;this.guardJolt[i]=0;
    this.guardShotsSeen[i]=g.shots;this.guardStrikeSeen[i]=g.strikeAt;visual.pose=makeGuardCombatState(i);
   }
   if(!g.active){visual.root.visible=false;continue;}
   visual.root.position.set(g.position.x,FLOOR_Y,g.position.z);
   // Shot down: he topples backward from the boots (gravity: slow start, fast finish),
   // with a slight twist so a squad of bodies does not fall identically.
   if(g.hp<=0)this.guardFall[i]=Math.min(1,(this.guardFall[i]??0)+dt/.65);else this.guardFall[i]=0;
   const fall=(this.guardFall[i]??0)**2;
   // Detection notice: pops in with a little overshoot, holds, then fades (1.8 s).
   const notice=this.guardNotice[i];
   if(notice){
    const age=g.noticeAt>=0?this.mission.elapsed-g.noticeAt:99;
    const show=g.hp>0&&age>=0&&age<1.8;
    notice.visible=show;
    if(show){
     const pop=age<.18?THREE.MathUtils.lerp(.4,1.25,age/.18):age<.3?THREE.MathUtils.lerp(1.25,1,(age-.18)/.12):1;
     notice.scale.set(.2*pop,.4*pop,1);
     notice.material.opacity=age>1.3?1-(age-1.3)/.5:1;
    }
   }
   visual.root.rotation.order='YXZ';
   visual.root.rotation.set(-fall*1.48,g.heading,fall*(i%2?.22:-.22));
   syncGuardGear(visual,{gun:g.gun,bottle:g.bottle,coat:g.coat});
   // Legs follow real ground velocity (strafe / backpedal while firing), chest follows you.
   const gaitDir=updateGuardMoveFrame(visual.pose,g.vx,g.vz,g.heading,g.speed,dt);
   if(visual.loco){
    updateGuardLocomotion(visual.loco,dt,{moving:g.speed>.02,speed:g.speed,state:g.state,turnRate:g.turnRate,direction:gaitDir});
   }
   if(g.shots!==this.guardShotsSeen[i]){
    const fresh=g.shots>this.guardShotsSeen[i];
    this.guardShotsSeen[i]=g.shots;
    if(fresh&&dt>0){
     this.guardFlashT=1;this.guardRecoil[i]=1;flashFrom=i;
     const ctx=this.audioContext,master=this.master;
     if(this.sound&&ctx&&master&&ctx.state==='running'){
      const bus=pannedBus(ctx,master,this.panFor(g.position),1,2.5);
      playGunshot(ctx,bus,Math.hypot(g.position.x-this.position.x,g.position.z-this.position.z));
      if(!g.lastShotHit)playRicochet(ctx,master);
     }
     this.shakeAmp=Math.max(this.shakeAmp,g.lastShotHit?.5:.12);
    }
   }
   this.guardRecoil[i]=Math.max(0,(this.guardRecoil[i]??0)-dt*6);
   // Your round landing: a hard stagger through chest and head.
   const hit=this.mission.lastPistolHit;
   if(hit&&hit.guard===i&&hit.shot!==this.pistolHitSeen){this.pistolHitSeen=hit.shot;this.guardJolt[i]=1;}
   this.guardJolt[i]=Math.max(0,(this.guardJolt[i]??0)-dt*4);
   const kick=Math.max(this.guardRecoil[i]??0,this.guardJolt[i]??0);
   // Close attack: grunt at the wind-up, thud or swish at the blow.
   const winding=g.windup>0;
   if(winding&&!this.guardWindupSeen[i]&&this.audible())playGrunt(this.audioContext!,pannedBus(this.audioContext!,this.master!,this.panFor(g.position),1));
   this.guardWindupSeen[i]=winding?1:0;
   if(g.strikeAt!==this.guardStrikeSeen[i]){
    this.guardStrikeSeen[i]=g.strikeAt;
    const landed=this.mission.lastStrike?.at===g.strikeAt&&this.mission.lastStrike.landed;
    if(this.audible())playMeleeHit(this.audioContext!,pannedBus(this.audioContext!,this.master!,this.panFor(g.position),1),!!landed);
    if(landed)this.shakeAmp=Math.max(this.shakeAmp,.7);
   }
   const strikeAge=this.mission.elapsed-g.strikeAt;
   if(visual.rig&&visual.loco){
    applyGuardCombatPose(visual.rig,visual.pose,visual.gun,{
     target:this._aimTarget,aim:g.gun?g.aim:0,engaged:g.hp>0&&g.state!=='patrol',
     recoil:kick,speed:g.speed,dt,down:g.hp>0?0:1,
     melee:winding&&g.windupTotal>0?1-g.windup/g.windupTotal:0,
     strike:g.strikeAt>=0&&strikeAge>=0&&strikeAge<.3?1-strikeAge/.3:0,
    });
   }else applyGuardAim(visual,this._aimTarget,g.aim,kick);
   let muzzle:THREE.Vector3|null=null;
   if(g.gun&&this.guardShotsSeen[i]===g.shots&&flashFrom===i){
    muzzle=visual.gun.getWorldPosition(new THREE.Vector3());
    muzzle.addScaledVector(this._aimTarget.clone().sub(muzzle).normalize(),.28);
   }
   this.fx.syncGuard(i,visual,g,this.mission.elapsed,flashFrom===i,muzzle,dt);
   if(flashFrom===i||(flashFrom<0&&i===0)){
    visual.gun.getWorldPosition(this._muzzle);
    this._muzzle.addScaledVector(this._aimTarget.clone().sub(this._muzzle).normalize(),.28);
    this.guardFlash.position.copy(this._muzzle);this.guardFlashGlow.position.copy(this._muzzle);
   }
  }
  const f=this.guardFlashT;
  this.guardFlash.intensity=f>0?40*f*f:0;
  // Each guard now draws his own muzzle glow (survivalFx); the shared card stays hidden.
  this.guardFlashGlow.visible=false;
  (this.guardFlashGlow.material as THREE.SpriteMaterial).opacity=f;
  this.guardFlashGlow.scale.setScalar(.18+.24*f);
  this.guardFlashT=Math.max(0,f-dt/.06);
 }
 beamMaterial(color:THREE.ColorRepresentation,opacity:number,beta=.38){
  return new THREE.ShaderMaterial({
   uniforms:{
    uTime:this.uniforms.uTime,
    uColor:{value:new THREE.Color(color)},
    uOpacity:{value:opacity},
    uBeta:{value:beta},
   },
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
 /** Dual-layer soft god-ray + ceiling aperture halo (+ optional floor caustic pool). */
 addShaft(x:number,y:number,z:number,len:number,topR:number,botR:number,color:number,opacity:number,tiltX=0,tiltZ=0,opts?:{caustic?:boolean;causticR?:number}){
  const group=new THREE.Group();
  group.position.set(x,y,z);group.rotation.x=tiltX;group.rotation.z=tiltZ;
  // Outer haze shell — wider, dimmer.
  const haze=new THREE.Mesh(
   new THREE.CylinderGeometry(topR*1.18,botR*1.22,len,28,1,true),
   this.beamMaterial(color,opacity*.42,.32),
  );
  haze.renderOrder=1;haze.frustumCulled=true;
  // Inner core — tighter, brighter cyan-white.
  const coreCol=new THREE.Color(color).lerp(new THREE.Color(0xeafdff),.45).getHex();
  const core=new THREE.Mesh(
   new THREE.CylinderGeometry(topR*.55,botR*.62,len,24,1,true),
   this.beamMaterial(coreCol,opacity*.9,.45),
  );
  core.renderOrder=2;core.frustumCulled=true;
  // Ceiling aperture disc — additive halo so openings bloom without UnrealBloomPass.
  const discMat=new THREE.MeshBasicMaterial({
   color:0xe8fff9,transparent:true,opacity:Math.min(.72,opacity*2.4),
   depthWrite:false,blending:THREE.AdditiveBlending,side:THREE.DoubleSide,
  });
  const disc=new THREE.Mesh(new THREE.CircleGeometry(topR*1.45,32),discMat);
  disc.position.y=len*.5-.02;disc.rotation.x=-Math.PI/2;disc.renderOrder=3;
  const discSoft=new THREE.Mesh(
   new THREE.CircleGeometry(topR*2.1,32),
   new THREE.MeshBasicMaterial({
    color:0xb8f5ec,transparent:true,opacity:Math.min(.35,opacity*1.1),
    depthWrite:false,blending:THREE.AdditiveBlending,side:THREE.DoubleSide,
   }),
  );
  discSoft.position.y=len*.5-.04;discSoft.rotation.x=-Math.PI/2;discSoft.renderOrder=2;
  group.add(haze,core,discSoft,disc);
  this.scene.add(group);
  if(opts?.caustic!==false&&(opts?.caustic||opacity>=.14)){
   this.addCausticPool(x,z,opts?.causticR??botR*2.4,opacity);
  }
  return group;
 }
 /** Animated atlas caustic projected onto the floor under a shaft. */
 addCausticPool(x:number,z:number,radius:number,strength:number){
  const mat=new THREE.ShaderMaterial({
   uniforms:{
    uTime:this.uniforms.uTime,
    uMap:{value:makeCausticFallbackTexture()},
    uColor:{value:new THREE.Color(0xc8fff4)},
    uOpacity:{value:Math.min(.55,strength*1.6)},
   },
   transparent:true,depthWrite:false,depthTest:true,side:THREE.DoubleSide,
   blending:THREE.AdditiveBlending,
   vertexShader:causticPoolVert,fragmentShader:causticPoolFrag,
  });
  const mesh=new THREE.Mesh(new THREE.PlaneGeometry(radius*2,radius*2),mat);
  mesh.rotation.x=-Math.PI/2;
  mesh.position.set(x,FLOOR_Y+.05,z);
  mesh.renderOrder=1;mesh.frustumCulled=true;
  mesh.userData.baseOpacity=mat.uniforms.uOpacity.value;
  // Caustics need water over the floor; the leak brings them in as it rises.
  mesh.visible=false;
  this.scene.add(mesh);
  this.causticPools.push(mesh);
  return mesh;
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
  const s=bobBlend,a=this.heldArmOffset();
  this.torchBody.position.set(
   this.torchRestPos.x+Math.sin(this.time*.7)*.028*s+a.x,
   this.torchRestPos.y+Math.sin(this.time*1.05)*.036*s+a.y,
   this.torchRestPos.z+Math.cos(this.time*.55)*.02*s+a.z,
  );
  this.torchBody.rotation.set(
   this.torchRestRot.x+Math.sin(this.time*.9)*.055*s+a.pitch,
   this.torchRestRot.y+Math.sin(this.time*.45)*.03*s+a.yaw,
   this.torchRestRot.z+Math.cos(this.time*.75)*.065*s+a.roll,
  );
 }
 /** Latest gait pose while on foot (null when swimming). Drives the held item's arm motion. */
 handSwing:ReturnType<Gait['pose']>|null=null;
 /**
  * Camera-space offset for the object in the right hand while walking.
  * A held object damps the natural arm swing, but the hand still carries the
  * shoulder's fore-aft swing, the trunk's counter-rotation and the step impact.
  */
 heldArmOffset(){
  const p=this.handSwing;
  if(!p)return{x:0,y:0,z:0,pitch:0,yaw:0,roll:0};
  const sh=p.shoulderRight*.35;           // carried object: about a third of free arm swing
  const impact=Math.min(0,p.pelvis.y)*.5; // hand dips a little with each loading response
  return{
   x:-p.thoraxYaw*.12,
   y:impact+Math.abs(sh)*.02,
   z:-sh*.12,
   pitch:sh*.35,
   yaw:p.thoraxYaw*.35,
   roll:p.pelvis.obliquity*.25,
  };
 }
 holdingKnife(){return this.mission.inventory[this.mission.selected]==='knife';}
 holdingGun(){return this.mission.inventory[this.mission.selected]==='gun';}
 holdingKey(){return this.mission.inventory[this.mission.selected]==='sovietKey';}
 holdingTorch(){return holdingTorchItem(this.mission.inventory[this.mission.selected]);}
 /** Unlit pistol in the lower-right. Stub boxes until the TT-33 glTF replaces them. */
 makeHeldGun(){
  const g=new THREE.Group();
  g.name='gunVisual';
  g.userData.gunAlive=true;
  const stub=new THREE.Group();
  stub.name='gunStub';
  stub.userData.gunStub=true;
  const steel=new THREE.MeshBasicMaterial({color:0xb8c0c6});
  const body=new THREE.Mesh(new THREE.BoxGeometry(.09,.11,.28),steel);
  const barrel=new THREE.Mesh(new THREE.BoxGeometry(.04,.04,.24),new THREE.MeshBasicMaterial({color:0x8e969c}));
  barrel.position.set(.01,.03,-.22);
  const grip=new THREE.Mesh(new THREE.BoxGeometry(.05,.16,.07),new THREE.MeshBasicMaterial({color:0x3a3028}));
  grip.position.set(0,-.12,.05);
  grip.rotation.x=.35;
  stub.add(body,barrel,grip);
  g.add(stub);
  mountTt33(g,'held');
  g.position.set(.32,-.28,-.55);
  g.rotation.set(.2,.55,.08);
  g.visible=false;
  return g;
 }
 /** Floor props for corridor gear. Unlit so they read before the torch is out. */
 gearPickupMesh(item:'gun'|'bottle'|'coat'){
  const g=new THREE.Group();
  if(item==='gun'){
   const stub=new THREE.Group();
   stub.name='gunStub';
   stub.userData.gunStub=true;
   const body=new THREE.Mesh(new THREE.BoxGeometry(.46,.14,.12),new THREE.MeshBasicMaterial({color:0x9aa3aa}));
   const barrel=new THREE.Mesh(new THREE.BoxGeometry(.5,.06,.06),new THREE.MeshBasicMaterial({color:0xd5dbe0}));
   barrel.position.set(.4,.04,0);
   stub.add(body,barrel);
   g.add(stub);
   g.userData.gunAlive=true;
   mountTt33(g,'pickup');
  }else if(item==='bottle'){
   const cyl=new THREE.Mesh(new THREE.CylinderGeometry(.11,.13,.46,10),new THREE.MeshBasicMaterial({color:0x3d8f62}));
   const cap=new THREE.Mesh(new THREE.CylinderGeometry(.045,.045,.09,8),new THREE.MeshBasicMaterial({color:0xe4e8ea}));
   cap.position.y=.26;
   g.add(cyl,cap);
  }else{
   const fold=new THREE.Mesh(new THREE.BoxGeometry(.62,.14,.4),new THREE.MeshBasicMaterial({color:0xc49662}));
   const collar=new THREE.Mesh(new THREE.BoxGeometry(.24,.1,.16),new THREE.MeshBasicMaterial({color:0x6e5340}));
   collar.position.set(0,.1,.02);
   g.add(fold,collar);
  }
  g.position.y=.42;
  return g;
 }
 /** Hide lantern meshes while a non-torch prop occupies the hand. SpotLight is gated separately. */
 setTorchMeshesVisible(show:boolean){
  this.torchBody.traverse(o=>{if(o instanceof THREE.Mesh)o.visible=show;});
 }
 /** Beam, SpotLight, and lens glow only while the dive torch is the held prop and F is on. */
 syncHeldTorch(){
  const selected=this.mission.inventory[this.mission.selected];
  const torchHeld=this.holdingTorch();
  const shine=torchShouldShine(this.mission.torch,selected);
  this.setTorchMeshesVisible(torchHeld);
  this.torchLight.visible=shine;
  this.beam.visible=shine;
  this.torchLensMat.emissiveIntensity=shine?1.25:.06;
  this.torchLensMat.emissive.set(shine?0xc8e4ff:0x223038);
 }
 /**
  * Knife viewmodel pose: rest + idle sway + walk arm swing + draw + stab.
  * Sway is kept small — a gripped knife is steadier than a swinging lantern.
  */
 applyKnifeHover(bobBlend:number){
  if(!this.knifeVisual)return;
  const s=bobBlend,a=this.heldArmOffset();
  const eq=equipOffset(this.knifeEquipAt===null?1:(this.time-this.knifeEquipAt)/KNIFE_EQUIP_TIME);
  const st=stabOffset(this.knifeFlashUntil>this.time?1-(this.knifeFlashUntil-this.time)/KNIFE_STAB_TIME:1);
  this.knifeVisual.position.set(
   KNIFE_HOLD_POS.x+Math.sin(this.time*.7)*.012*s+a.x*.6+eq.x+st.x,
   KNIFE_HOLD_POS.y+Math.sin(this.time*1.05)*.016*s+a.y*.6+eq.y+st.y,
   KNIFE_HOLD_POS.z+Math.cos(this.time*.55)*.01*s+a.z*.6+eq.z+st.z,
  );
  this.knifeVisual.rotation.set(KNIFE_HOLD_ROT.x,KNIFE_HOLD_ROT.y,KNIFE_HOLD_ROT.z);
  // Offsets are camera-space (pitch about X, yaw about Y, roll about Z), applied on top of the hold.
  this._kq.setFromEuler(this._ke.set(
   Math.sin(this.time*.9)*.03*s+a.pitch*.6+eq.pitch+st.pitch,
   Math.sin(this.time*.45)*.02*s+a.yaw*.6+eq.yaw+st.yaw,
   Math.cos(this.time*.75)*.03*s+a.roll*.6+eq.roll+st.roll,
  ));
  this.knifeVisual.quaternion.premultiply(this._kq);
 }
 _kq=new THREE.Quaternion();_ke=new THREE.Euler();
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


  // Extraction pool — hero cenote god-ray + floor caustics
  const exit=new THREE.Group();exit.position.set(EXIT.x,.65,EXIT.z);
  const ring=new THREE.Mesh(new THREE.TorusGeometry(1.6,.05,8,48),new THREE.MeshBasicMaterial({color:PALETTE.ivory}));
  ring.rotation.x=Math.PI/2;exit.add(ring);this.scene.add(exit);
  const sunlight=new THREE.SpotLight(PALETTE.ivory,480,26,.72,.8,1);
  sunlight.position.set(32,12,-12);sunlight.target.position.set(32,0,-12);this.scene.add(sunlight,sunlight.target);
  const poolFill=new THREE.PointLight(WATER_FIELD,34,16,1.1);poolFill.position.set(32,5,-12);this.scene.add(poolFill);
  this.addShaft(32,5.2,-12,9,.75,2.9,PALETTE.ivory,.3,0,0,{caustic:true,causticR:5.2});

  // Cavern ceiling fill + floor caustic. No volumetric column — the only god ray is the exit.
  const cavernX=6,cavernZ=-64,cavernOp=.18,cavernBot=2.6;
  this.addCausticPool(cavernX,cavernZ,cavernBot*2.6,cavernOp);
  const spot=new THREE.SpotLight(FLUORESCENT,70+cavernOp*520,15,.5,.85,1.15);
  spot.position.set(cavernX,8.2,cavernZ);spot.target.position.set(cavernX,0,cavernZ);this.scene.add(spot,spot.target);

  // Entrance corridor fill. No god ray in the tight tunnel.
  const entrance=new THREE.SpotLight(FLUORESCENT,80,13,.48,.8,1.1);
  entrance.position.set(0,8.5,-22);entrance.target.position.set(0,0,-22);this.scene.add(entrance,entrance.target);
  this.gradeSpots=[
   {light:sunlight,rest:PALETTE.ivory},
   {light:poolFill,rest:WATER_FIELD},
   {light:spot,rest:FLUORESCENT},
   {light:entrance,rest:FLUORESCENT},
  ];
 }
 buildComposer(){
  this.composer=new EffectComposer(this.renderer);
  this.composer.addPass(new RenderPass(this.scene,this.camera));
  // UnrealBloomPass skipped: bright-pass + 5 mip blurs on Retina made swim frames hitch.
  // Clip sits in front of output. Tone mapping is off, so this clamp is the grade.
  this.clipPass=createClipGradePass();
  this.composer.addPass(this.clipPass);
  this.composer.addPass(new OutputPass());
  this.setPixelRatio();
 }
 setPixelRatio(){
  const dpr=Math.min(window.devicePixelRatio||1,1.5);
  this.renderer.setPixelRatio(dpr);
  this.composer?.setPixelRatio(dpr);
 }
 resize(){
  if(!this.alive)return;
  const w=this.host.clientWidth,h=this.host.clientHeight;
  this.camera.aspect=w/h;this.camera.updateProjectionMatrix();
  this.setPixelRatio();
  this.renderer.setSize(w,h);this.composer?.setSize(w,h);
 }
 syncPickups(){
  for(const [id,group] of this.pickupMeshes)if(!this.mission.pickups.some(p=>p.id===id)){this.scene.remove(group);group.traverse(o=>{o.userData.gunAlive=false;if(o instanceof THREE.Mesh){o.geometry.dispose();(o.material as THREE.Material).dispose();}});this.pickupMeshes.delete(id);}
  for(const p of this.mission.pickups){let group=this.pickupMeshes.get(p.id);if(!group){group=new THREE.Group();const mat=new THREE.MeshStandardMaterial({color:p.item==='relic'?0xe2b65e:0x82c8b7,emissive:p.item==='relic'?0x6b3c07:0x153c36,emissiveIntensity:.7,metalness:.4,roughness:.45});
    if(p.item==='relic'){const points:THREE.Vector3[]=[],radii:number[]=[];for(let i=0;i<=72;i++){const t=i/72,a=t*Math.PI*4.5,r=.03+t*t*.62;points.push(V(Math.cos(a)*r,Math.sin(a)*r,0));radii.push(.01+t*.12);}group.add(this.tube(points,radii,mat,90,8));group.add(new THREE.PointLight(0xefbb68,3.5,7));}
    else if(p.item==='gun'||p.item==='bottle'||p.item==='coat')group.add(this.gearPickupMesh(p.item));
    else if(p.item==='sovietKey')group.add(createSovietKeyPickup());
    else group.add(new THREE.Mesh(new THREE.IcosahedronGeometry(.3,1),mat));
    group.traverse(o=>{if(o instanceof THREE.Mesh){o.castShadow=true;o.receiveShadow=true;}});
    const pickup=group;
    const box=new THREE.Box3();
    this.pointCullSyncs.push(()=>{
     box.min.set(pickup.position.x-1,pickup.position.y-1,pickup.position.z-1);
     box.max.set(pickup.position.x+1,pickup.position.y+1,pickup.position.z+1);
    });
    this.adoptPointCull(pickup,box,false,true);
    // Sim y is the item's underside: lift the mesh so its lowest point sits exactly there.
    group.rotation.y=(p.id*2.399)%(Math.PI*2);group.updateMatrixWorld(true);
    group.userData.bottom=-new THREE.Box3().setFromObject(group).min.y;
    this.scene.add(group);this.pickupMeshes.set(p.id,group);
   }
   // Streamed glTFs replace stubs after spawn, so re-measure the underside now and then.
   const nowMs=performance.now();if(!(group.userData.bottomAt>nowMs-1000)){group.position.set(0,0,0);group.updateMatrixWorld(true);const bb=new THREE.Box3().setFromObject(group);if(!bb.isEmpty())group.userData.bottom=-bb.min.y;group.userData.bottomAt=nowMs;}
   group.position.set(p.position.x,p.position.y+(group.userData.bottom??0),p.position.z);
  }
 }
 publish(){this.ui({mission:this.mission,playing:this.playing,started:this.started,pointerLocked:this.pointerLocked,error:this.error,audioNotice:this.audioNotice,yaw:this.yaw,onFoot:this.onFoot,airborne:this.airborne,atWheel:!!this.valveStroke});}
 bind(){
  const on=(target:EventTarget,type:string,fn:EventListener,options?:AddEventListenerOptions)=>{target.addEventListener(type,fn,options);this.listeners.push(()=>target.removeEventListener(type,fn,options));};
  on(window,'keydown',((e:KeyboardEvent)=>{
   if(!this.playing)return;
   if(['Space','ArrowUp','ArrowDown','ArrowLeft','ArrowRight','Tab'].includes(e.code))e.preventDefault();
   this.keys.add(e.code);if(e.repeat)return;
   // Both hands are on the valve wheel: only pause and mute get through.
   if(this.valveStroke&&e.code!=='Escape'&&e.code!=='KeyM'){this.publish();return;}
   if(e.code==='Escape'){
    if(this.mission.mapOpen){this.mission.mapOpen=false;this.requestLookLock(false);this.publish();return;}
    if(this.mission.stashOpen){this.mission.closeStash();this.publish();return;}
    if(this.mission.pending!==null){this.mission.pending=null;this.publish();}else this.pause();
   }
   // Inventory keys bind on window (not the canvas), so select/use/drop work without canvas focus.
   if(/^Digit[1-5]$/.test(e.code)){
    if(this.mission.select(Number(e.code.slice(-1))-1))this.playSelectClick();
   }
   if(e.code==='Tab'){
    const opening=!this.mission.mapOpen;
    this.mission.toggleMap();
    if(opening&&document.pointerLockElement===this.renderer.domElement)document.exitPointerLock();
    else if(!opening)this.requestLookLock(false);
    this.publish();return;
   }
   if(this.mission.mapOpen){this.publish();return;}
   if(e.code==='KeyE'){if(this.mission.nearValve())this.beginValve();else this.mission.interact();}
   if(e.code==='KeyF')this.mission.torch=!this.mission.torch;
   if(e.code==='KeyT'){this.camera.getWorldDirection(this._aimDir);this.mission.throwSmoke(this._aimDir.x,this._aimDir.z);}
   if(e.code==='KeyR')this.mission.use();if(e.code==='KeyG')this.mission.drop();if(e.code==='KeyM')this.setSound(!this.sound);
   this.publish();
  }) as EventListener);
  on(window,'keyup',((e:KeyboardEvent)=>{this.keys.delete(e.code);}) as EventListener);
  on(window,'blur',(()=>this.pause()) as EventListener);on(document,'visibilitychange',(()=>{if(document.hidden)this.pause();}) as EventListener);
  const canvas=this.renderer.domElement;
  on(canvas,'pointerdown',((e:PointerEvent)=>{
   if(!this.playing||this.mission.mapOpen)return;
   try{canvas.setPointerCapture(e.pointerId);}catch{/* unsupported */}
   if(document.pointerLockElement!==canvas)this.requestLookLock(false);
   // Primary click: pistol in hand fires; knife in hand stabs.
   if(e.button===0){if(this.holdingGun())this.pullTrigger();else this.tryStab();}
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
  on(document,'pointerlockchange',(()=>{const was=this.pointerLocked;this.pointerLocked=document.pointerLockElement===canvas;if(this.pointerLocked){this.everLocked=true;this.lockDenied=false;this.lookPointer=null;this.fallbackTurn=0;}if(was&&!this.pointerLocked&&!this.mission.mapOpen)this.pause();this.publish();}) as EventListener);
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
   if(this.playing)this.backgroundMusic?.start().then(()=>{
    if(this.alive)this.backgroundMusic?.setDry(this.airborne);
   }).catch(()=>{if(this.alive){this.audioNotice='Background music could not load. Pause and resume to retry.';this.publish();}});
   this.publish();
  }).catch(()=>{if(this.alive){this.audioNotice='Sound is blocked. Pause and choose Test sound.';this.publish();}});
 }
 /** Footfalls: heel strikes play a step matched to speed, gait and water depth. */
 onGaitEvent(e:GaitEvent,waterDepth:number){
  if(e.kind!=='heel-strike'||!this.playing||!this.sound)return;
  const ctx=this.audioContext,master=this.master;
  if(!ctx||!master||ctx.state!=='running')return;
  playFootstep(ctx,master,{speed:e.speed,run:e.run,waterDepth,foot:e.foot});
 }
 playSelectClick(){
  if(!this.playing||!this.sound)return;
  const ctx=this.audioContext,master=this.master;
  if(!ctx||!master||ctx.state!=='running')return;
  playInventoryClick(ctx,master);
 }
 /** Both hands go to the leak valve's wheel. Holding E keeps turning; letting go releases it. */
 beginValve(){
  const m=this.mission;
  if(this.valveStroke||!m.nearValve()||!this.valveHands)return;
  this.valveStroke=startStroke(m.valveTurned,m.valveTurnDir);
  this.valveFrom={x:m.position.x,y:m.position.y,z:m.position.z,yaw:this.yaw,pitch:this.pitch};
  this.valveClock=0;
  this.velocity.set(0,0,0);
  resetValveHands(this.valveHands);
  this.valveHands.root.visible=true;
  this.knifeFlashUntil=0;
  if(m.valveStuck&&(!m.tipsSeen||m.noticeUntil<=m.elapsed))m.say('The wheel is seized. Keep holding E and put your weight into it.','ok');
  else if(m.valveSealed&&(!m.tipsSeen||m.noticeUntil<=m.elapsed))m.say('The gate is wedged in its seat. Opening it lets the sea back in.','blocked');
 }
 endValve(){
  if(!this.valveStroke)return;
  this.valveStroke=null;
  if(this.valveHands)this.valveHands.root.visible=false;
  this.targetYaw=this.yaw;this.targetPitch=this.pitch;
  this.gait.reset();
  if(this.torchBody){this.torchBody.position.copy(this.torchRestPos);this.torchBody.rotation.copy(this.torchRestRot);}
 }
 /** Eye height for working the wheel: standing on the floor, or hovering level with it once flooded. */
 valveEyeY(){return this.onFoot?WALK_EYE_Y:WHEEL_CENTRE.y+.31;}
 /**
  * One frame at the valve. The stroke machine (valve.ts) owns timing and wheel
  * travel; this places the body, head and arms and applies the effort.
  */
 updateValve(dt:number){
  const m=this.mission,s=this.valveStroke!;
  this.valveClock+=dt;
  this.onFoot=canWalk(m.position,m.breathWaterY);
  this.wasOnFoot=this.onFoot;
  this.velocity.set(0,0,0);
  this.gait.step(0,0,false,dt);
  this.handSwing=null;
  const hold=this.keys.has('KeyE')&&m.outcome==='playing';
  // Stuck: a stem never moved since the flood began, or a gate wedged hard into its seat.
  const stuck=s.dir>0?m.valveStuck:m.valveSealed;
  const stepped=stepStroke(s,dt,m.valveTurned,hold,stuck);
  if(stepped.turn!==0)m.turnValve(stepped.turn);
  const ctx=this.audioContext,master=this.master;
  const audible=!!(this.sound&&ctx&&master&&ctx.state==='running');
  if(stepped.strokeStarted&&audible){
   const strain=s.stage==='breakaway'?1:Math.min(1,Math.max(0,(s.driveTime/.9-1)*1.5));
   playValveStroke(ctx!,master!,s.stage==='breakaway'?BREAKAWAY_TIME+s.driveTime:s.driveTime,strain);
  }
  if(stepped.seated){
   if(audible)playValveSeat(ctx!,master!);
   this.shakeAmp=Math.max(this.shakeAmp,.35);
  }
  // Step square to the wheel over the first half-second; stay there until the hands are off.
  const k=smootherstep(this.valveClock/.45);
  const f=this.valveFrom;
  const eyeY=this.valveEyeY();
  m.position.x=THREE.MathUtils.lerp(f.x,VALVE_STAND.x,k);
  m.position.z=THREE.MathUtils.lerp(f.z,VALVE_STAND.z,k);
  m.position.y=THREE.MathUtils.lerp(f.y,eyeY,k);
  if(!this.onFoot){m.buoyancy=0;m.buoyancyTrim=0;}
  // Hard work on a stiff wheel is exertion: breathing (gas) and legs pay for it.
  m.update(dt,stepped.effort);
  this.position.set(m.position.x,m.position.y,m.position.z);
  // Head: square on the wheel, eyes a little above the hub.
  const dx=WHEEL_CENTRE.x-this.position.x,dz=WHEEL_CENTRE.z-this.position.z;
  const lookYaw=Math.atan2(-dx,-dz);
  const lookPitch=Math.atan2(WHEEL_CENTRE.y+.05-this.position.y,Math.hypot(dx,dz));
  const dy=Math.atan2(Math.sin(lookYaw-f.yaw),Math.cos(lookYaw-f.yaw));
  this.yaw=f.yaw+dy*k;this.pitch=THREE.MathUtils.lerp(f.pitch,lookPitch,k);
  this.targetYaw=this.yaw;this.targetPitch=this.pitch;
  // Body English: lean into each drive, twist a touch with the wheel, tremble while the stem is seized.
  let lean=0,roll=0,tremor=0;
  if(s.stage==='drive'){const u=Math.min(1,s.t/s.driveTime);lean=Math.sin(Math.PI*u)*.014;roll=-Math.sin(Math.PI*u)*.018;}
  else if(s.stage==='breakaway'){const u=Math.min(1,s.t/BREAKAWAY_TIME);lean=.02*u;roll=-.012*u;tremor=.0022*u;}
  else if(s.stage==='regripRight'||s.stage==='regripLeft'){const u=Math.min(1,s.t/REGRIP_TIME);roll=(s.stage==='regripRight'?.006:-.006)*Math.sin(Math.PI*u);}
  const breathe=Math.sin(this.time*1.9)*.003;
  this.camera.rotation.set(this.pitch-s.seatedPulse*.03,this.yaw,roll);
  this.camera.getWorldDirection(this.forward);this.right.crossVectors(this.forward,this.upAxis).normalize();
  this.camera.position.set(this.position.x,this.position.y+breathe,this.position.z)
   .addScaledVector(this.forward,lean)
   .addScaledVector(this.right,Math.sin(this.time*47)*tremor)
   .addScaledVector(this.upAxis,Math.cos(this.time*41)*tremor);
  if(this.shakeAmp>.001){
   this.camera.position.addScaledVector(this.upAxis,Math.cos(this.time*37)*this.shakeAmp*.02);
   this.shakeAmp=Math.max(0,this.shakeAmp-dt*2.8);
  }
  if(this.wallPipe)setPipeWheel(this.wallPipe,m.valveTurned);
  // Torch hangs clipped to the chest harness, angled past the wheel so its spill (not the hot spot) lights the hands.
  this.torchBody.position.set(.06,-.33,.02);
  this.torchBody.rotation.set(.3,.38,0);
  const poses=handPoses(s);
  poseValveHands(this.valveHands!,this.camera,poses.right,poses.left);
  if(stepped.finished)this.endValve();
 }
 /** Clicks that arrived while the arm was still recovering; each becomes its own stab. */
 stabQueue=0;
 /** Click handler: land a stab now if ready; otherwise buffer so click-click-click = stab-stab-stab. */
 tryStab(){
  if(!this.playing||this.mission.outcome!=='playing')return;
  if(this.mission.inventory[this.mission.selected]!=='knife')return;
  // Always try to fire on the click itself — never wait a frame because the queue is non-empty.
  if(this.fireStab())return;
  this.stabQueue=Math.min(KNIFE_CLICK_BUFFER,this.stabQueue+1);
 }
 /** Drain buffered clicks as soon as the arm is ready. Called every frame. */
 drainStabQueue(){
  if(this.stabQueue<=0)return;
  if(!this.playing||this.mission.outcome!=='playing'||this.mission.inventory[this.mission.selected]!=='knife'){this.stabQueue=0;return;}
  if(this.fireStab())this.stabQueue--;
 }
 /** One stab. Returns false only while the arm is still recovering (click can be buffered). */
 fireStab():boolean{
  this.camera.getWorldDirection(this.forward);
  const result=this.mission.stab({x:this.forward.x,y:this.forward.y,z:this.forward.z});
  if(result==='cooldown')return false;
  if(result==='blocked'){this.publish();return true;}
  this.flashKnife();
  this.consumeCombatCue(result==='hit');
  this.publish();
  return true;
 }
 /**
  * One trigger pull (semi-automatic: one click, one round). Hitscan runs in the sim from
  * the centre of the screen: the camera's world position along its forward vector.
  */
 pullTrigger(){
  if(!this.playing||this.mission.outcome!=='playing')return;
  this.camera.updateMatrixWorld();
  this.camera.getWorldPosition(this._shotOrigin);
  this.camera.getWorldDirection(this.forward);
  const o=this._shotOrigin,d=this.forward;
  const result=this.mission.firePistol({x:o.x,y:o.y,z:o.z},{x:d.x,y:d.y,z:d.z});
  if(result==='cooldown'){this.triggerBufferUntil=this.time+.14;return;}
  this.triggerBufferUntil=-1;
  if(result==='fired'){
   this.pistolMuzzleFlash();
   this.pistolRecoil();
   this.pistolCameraShake();
   if(this.audible())playGunshot(this.audioContext!,this.master!,0);
  }
  this.consumePistolCue();
  this.publish();
 }
 audible(){const ctx=this.audioContext;return !!(this.sound&&ctx&&this.master&&ctx.state==='running');}
 /** Juice hook: muzzle flash. A hot point light and an additive glow card at the barrel, ~50 ms. */
 pistolMuzzleFlash(){
  this.placePlayerMuzzle();
  this.playerFlashT=1;
  this.playerFlashGlow.material.rotation=Math.random()*Math.PI*2;
 }
 /**
  * Put the flash at the real muzzle: the front-centre of the TT-33's bounds in the
  * viewmodel's own frame (barrel along −Z). Measured once the glTF has replaced the stub.
  */
 placePlayerMuzzle(){
  const gun=this.gunVisual;if(!gun||gun.userData.muzzleMeasured)return;
  const box=new THREE.Box3(),tmp=new THREE.Box3(),inv=new THREE.Matrix4(),rel=new THREE.Matrix4();
  gun.updateMatrixWorld(true);inv.copy(gun.matrixWorld).invert();
  let real=false;
  gun.traverse(o=>{
   const mesh=o as THREE.Mesh;
   if(!mesh.isMesh)return;
   for(let a:THREE.Object3D|null=o;a&&a!==gun;a=a.parent)if(a.userData.gunStub)return;
   mesh.geometry.computeBoundingBox();
   tmp.copy(mesh.geometry.boundingBox!).applyMatrix4(rel.multiplyMatrices(inv,mesh.matrixWorld));
   box.union(tmp);real=true;
  });
  if(!real)return;
  // Bore line: upper part of the slide, just past its front face.
  const at=new THREE.Vector3((box.min.x+box.max.x)/2,box.max.y-(box.max.y-box.min.y)*.18,box.min.z-.02);
  this.playerFlash.position.copy(at);this.playerFlashGlow.position.copy(at);
  gun.userData.muzzleMeasured=true;
 }
 /**
  * Juice hook: view recoil. The view kicks up (with a little random yaw) and most of the
  * climb recovers by itself over ~0.25 s, like a real pistol settling back on target.
  */
 pistolRecoil(){
  this.targetPitch=Math.min(1.4,this.targetPitch+PISTOL.recoilPitch);
  this.targetYaw+=(Math.random()*2-1)*PISTOL.recoilYaw;
  this.recoilDebt+=PISTOL.recoilPitch*PISTOL.recoilRecover;
  this.gunKick=1;
 }
 /** Juice hook: camera shake, a short sharp punch rather than a long wobble. */
 pistolCameraShake(){this.shakeAmp=Math.max(this.shakeAmp,.22);}
 /** Sounds and feedback for the pistol's combat cue. */
 consumePistolCue(){
  const cue=this.mission.combatCue;
  if(!cue.startsWith('pistol-'))return;
  this.mission.combatCue='';
  const a=this.audible(),ctx=this.audioContext!,master=this.master!;
  if(cue==='pistol-dry'){if(a)playPistolClick(ctx,master);return;}
  if(cue==='pistol-reload'){if(a)playPistolClick(ctx,master);return;}
  if(cue==='pistol-hit'||cue==='pistol-head'||cue==='pistol-kill'){
   if(a)playHitMarker(ctx,master,cue==='pistol-kill'?'kill':cue==='pistol-head'?'head':'hit');
  }
 }
 /** Per-frame pistol feel: buffered pull, recoil recovery, flash decay, reload snap. */
 updatePistolFeel(dt:number){
  // Sights: resting the crosshair on a guard is a threat he and his squad react to.
  if(this.holdingGun()&&this.mission.outcome==='playing'){
   this.camera.getWorldPosition(this._shotOrigin);this.camera.getWorldDirection(this._aimDir);
   const o=this._shotOrigin,d=this._aimDir;
   this.mission.aimAt({x:o.x,y:o.y,z:o.z},{x:d.x,y:d.y,z:d.z},dt);
  }
  if(this.triggerBufferUntil>=0){
   if(this.time>this.triggerBufferUntil||!this.holdingGun())this.triggerBufferUntil=-1;
   else if(this.mission.pistol.cool<=0)this.pullTrigger();
  }
  if(this.recoilDebt>0){
   const back=Math.min(this.recoilDebt,this.recoilDebt*dt*9+dt*.01);
   this.targetPitch-=back;this.recoilDebt-=back;
  }
  this.gunKick=Math.max(0,this.gunKick-dt*7);
  const f=this.playerFlashT;
  this.playerFlash.intensity=f>0?26*f*f:0;
  this.playerFlashGlow.visible=f>0;
  this.playerFlashGlow.material.opacity=f;
  this.playerFlashGlow.scale.setScalar(.05+.08*f);
  this.playerFlashT=Math.max(0,f-dt/.05);
  // Magazine seats: heavier click when a reload finishes.
  const r=this.mission.pistol.reload;
  if(this.pistolReloadSeen>0&&r===0&&this.audible())playPistolClick(this.audioContext!,this.master!,true);
  this.pistolReloadSeen=r;
 }
 flashKnife(){
  if(!this.knifeVisual||!knifeMeshReady(this.knifeVisual))return;
  this.knifeVisual.visible=true;
  this.knifeFlashUntil=this.time+KNIFE_STAB_TIME;
 }
 consumeCombatCue(connected:boolean){
  const cue=this.mission.combatCue;this.mission.combatCue='';
  const ctx=this.audioContext,master=this.master;
  const audible=!!(this.sound&&ctx&&master&&ctx.state==='running');
  if(cue==='stab-miss'||(cue===''&&!connected)){
   if(audible)playStabSound(ctx!,master!,false);
   return;
  }
  if(cue==='stab-guard'||cue==='stab-guard-kill'){
   if(audible)playStabSound(ctx!,master!,true);
   this.shakeAmp=Math.max(this.shakeAmp,cue==='stab-guard-kill'?.45:.3);
   return;
  }
  if(cue==='stab-hit'||cue==='break'||cue==='kill'){
   if(audible)playStabSound(ctx!,master!,true);
   this.shakeAmp=Math.max(this.shakeAmp,cue==='kill'?.55:.32);
   if(cue==='kill'){
    if(audible)playGuardianDeath(ctx!,master!);
    this.spawnBlood(this.mission.predator.position,'kill');
   }else{
    this.spawnBlood(this.mission.predator.position,'hit');
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
  this.rockMaps.startDetail();
  this.playing=true;this.started=true;this.keys.clear();this.clock.getDelta();this.testingAudio=false;
  this.onFoot=canWalk(this.mission.position,this.mission.breathWaterY);
  this.wasOnFoot=this.onFoot;
  this.airborne=breathingFreeAir(this.mission.position,this.mission.breathWaterY);
  this.backgroundMusic?.setDry(this.airborne);
  if(this.sound)this.enableAudio(true);
  this.lookPointer=null;this.fallbackTurn=0;this.requestLookLock(true);this.publish();
  // QA: `?bloodTest=1` spawns a kill-scale blood cloud ahead of the diver (no combat required).
  if(typeof location!=='undefined'&&new URLSearchParams(location.search).has('bloodTest')){
   window.setTimeout(()=>{
    if(!this.alive||!this.playing)return;
    this.camera.getWorldDirection(this.forward);
    this.spawnBlood({
     x:this.position.x+this.forward.x*2.2,
     y:this.position.y+this.forward.y*2.2,
     z:this.position.z+this.forward.z*2.2,
    },'kill');
   },400);
  }
 }
 pause(){if(!this.playing)return;this.testingAudio=false;window.clearTimeout(this.audioTestTimer);this.playing=false;this.lookPointer=null;this.fallbackTurn=0;this.keys.clear();this.velocity.set(0,0,0);if(document.pointerLockElement===this.renderer.domElement)document.exitPointerLock();this.audioContext?.suspend().catch(()=>{});this.publish();}
 reset(){
  this.endValve();
  this.backgroundMusic?.reset();this.mission=new Mission(readInventoryTipsSeen());
  resetGradeClock(this.gradeClock);this.frameGrade='dry';
  this.resetSurvivalFx();
  this.position.copy(this.mission.position);this.camera.position.copy(this.position);this.yaw=this.targetYaw=0;this.pitch=this.targetPitch=0;this.lookPointer=null;this.fallbackTurn=0;this.lockDenied=false;this.velocity.set(0,0,0);this.time=0;this.lastSent=0;this.keys.clear();
  this.onFoot=true;this.wasOnFoot=true;this.gait.reset();
  if(this.torchBody){this.torchBody.position.copy(this.torchRestPos);this.torchBody.rotation.copy(this.torchRestRot);}
  this.shakeAmp=0;this.knifeFlashUntil=0;this.knifeEquipAt=null;this.stabQueue=0;
  if(this.knifeVisual){poseKnife(this.knifeVisual);this.knifeVisual.visible=this.holdingKnife()&&knifeMeshReady(this.knifeVisual);}
  if(this.gunVisual)this.gunVisual.visible=this.holdingGun();
  if(this.keyVisual)this.keyVisual.visible=this.holdingKey();
  this.syncHeldTorch();
  if(this.bloodGroup){
   this.bloodGroup.visible=false;this.bloodLife=0;
   for(const layer of this.bloodLayers)layer.uniforms.uOpacity.value=0;
  }
  this.syncPickups();this.syncChests(0);this.syncBreathProps();this.backgroundMusic?.setDry(true);this.publish();
 }
 animate=()=>{
  if(!this.alive)return;
  const propNow=performance.now()/1000;
  if(propNow-this.lastPropCheck>=.25){this.lastPropCheck=propNow;this.propStreaming.update(this.position,propNow);}
  if(this.copperPipe&&updateCopperPipe(this.copperPipe,this.position)){
   const visual=this.copperPipe;
   void upgradeCopperPipeDetail(visual,this.knifeEnvMap).then(parts=>{
    if(!this.alive)return;
    for(const part of parts)this.adoptPointCull(part,this.worldBox(part),true,true);
    updateCopperPipe(visual,this.position);
   });
  }
  this.frame=requestAnimationFrame(this.animate);const dt=Math.min(this.clock.getDelta(),MAX_FRAME_DT)*GAME_TIME_SCALE;
  if(this.playing){this.time+=dt;const m=this.mission;this.drainStabQueue();
   const pressed=(...keys:string[])=>keys.some(k=>this.keys.has(k))?1:0;
   if(m.mapOpen){
    // Chart reading: hold still, but the dive clock / gas / predator keep running.
    this.onFoot=canWalk(m.position,m.breathWaterY);
    this.velocity.set(0,0,0);this.keys.clear();
    this.gait.step(0,0,false,dt);
    m.update(dt,false);this.position.copy(m.position);
    this.camera.getWorldDirection(this.forward);this.right.crossVectors(this.forward,this.upAxis).normalize();
   }else if(this.valveStroke){
    this.updateValve(dt);
   }else if(!this.holdCamera){
   if(!this.pointerLocked&&this.lookPointer){const bounds=this.renderer.domElement.getBoundingClientRect();this.fallbackTurn=edgeTurn(this.lookPointer.x,bounds.left,bounds.width);}
   else if(!this.pointerLocked&&!this.lookPointer)this.fallbackTurn=0;
   const horizontalLook=pressed('ArrowRight')-pressed('ArrowLeft')+(!this.pointerLocked?this.fallbackTurn*FREE_LOOK_RATE:0);
   const delta=lookDelta(this.targetYaw,this.targetPitch,horizontalLook*dt*650,(pressed('ArrowDown')-pressed('ArrowUp'))*dt*650);this.targetYaw=delta.yaw;this.targetPitch=delta.pitch;
   this.yaw=THREE.MathUtils.lerp(this.yaw,this.targetYaw,1-Math.exp(-16*dt));this.pitch=THREE.MathUtils.lerp(this.pitch,this.targetPitch,1-Math.exp(-16*dt));this.camera.rotation.set(this.pitch,this.yaw,0);
   this.camera.getWorldDirection(this.forward);this.right.crossVectors(this.forward,this.upAxis).normalize();
   const walking=canWalk(m.position,m.breathWaterY);
   this.onFoot=walking;
   // Flood forces swim: sink the eye under the waterline and clear walk velocity.
   if(this.wasOnFoot&&!walking){
    this.velocity.set(0,0,0);
    m.buoyancy=0;m.buoyancyTrim=0;
    if(inBreathCorridor(m.position)){
     const swimY=Math.max(FLOOR_Y+.55,m.breathWaterY-.35);
     m.position.y=Math.min(m.position.y,swimY);
     if(!m.tipsSeen||m.noticeUntil<=m.elapsed)m.say('Water is over you — swim. Space / Q for buoyancy.','ok');
    }
   }else if(!this.wasOnFoot&&walking){
    this.velocity.set(0,0,0);
    this.gait.reset();
    m.buoyancy=0;m.buoyancyTrim=0;
    m.position.y=WALK_EYE_Y;
   }
   this.wasOnFoot=walking;
   if(walking){
    // On foot (corridor or cave): a human gait drives speed, stride and the head.
    // Look pitch never lifts you off the floor; W/S/A/D are intent, not velocity.
    const flat=Math.hypot(this.forward.x,this.forward.z)||1;
    const fx=this.forward.x/flat,fz=this.forward.z/flat;
    this.right.set(-fz,0,fx);
    const localZ=pressed('KeyW')-pressed('KeyS'),localX=pressed('KeyD')-pressed('KeyA');
    const wantRun=!!pressed('ShiftLeft','ShiftRight')&&m.stamina>3&&localZ>0;
    const wadeDepth=Math.max(0,m.breathWaterY-FLOOR_Y);
    const events=this.gait.step(localX,localZ,wantRun,dt,wadingDrag(wadeDepth));
    const v=this.gait.instantaneousSpeed(),d=this.gait.dir;
    // Body frame → world: x = right, z = forward.
    this.velocity.set((this.right.x*d.x+fx*d.z)*v,0,(this.right.z*d.x+fz*d.z)*v);
    const before=m.position.x,beforeZ=m.position.z;
    moveBody(m.position,this.velocity.x*dt,0,this.velocity.z*dt);
    // Pushing into a wall: feet stop stepping instead of treading in place at full cadence.
    const moved=Math.hypot(m.position.x-before,m.position.z-beforeZ),meant=v*dt;
    if(meant>1e-4&&moved<meant*.35)this.gait.speed=Math.max(0,this.gait.speed-6*dt);
    m.position.y=WALK_EYE_Y;
    for(const e of events)this.onGaitEvent(e,wadeDepth);
    m.update(dt,runWeight(this.gait.speed)>.5);this.position.copy(m.position);
   }else{
   // Kick = look / strafe only. Space/Q drive BCD buoyancy, not equal XYZ thrust.
   this.move.copy(this.forward).multiplyScalar(pressed('KeyW')-pressed('KeyS')).addScaledVector(this.right,pressed('KeyD')-pressed('KeyA'));
   const bcd=pressed('Space')-pressed('KeyQ','ControlLeft','ControlRight');
   // ] / [ lock a non-zero idle bias; X clears back to neutral.
   if(pressed('KeyX'))m.buoyancyTrim=0;
   else{
    const trimAdj=pressed('BracketRight','Equal','NumpadAdd')-pressed('BracketLeft','Minus','NumpadSubtract');
    m.buoyancyTrim=updateBuoyancyTrim(m.buoyancyTrim,trimAdj,dt);
   }
   m.buoyancy=updateBuoyancy(m.buoyancy,bcd,dt,m.buoyancyTrim);
   const sprint=!!pressed('ShiftLeft','ShiftRight')&&m.stamina>3&&this.move.lengthSq()>.01;
   stepSwimVelocity(this.velocity,this.move,m.buoyancy,sprint,dt);
   moveBody(m.position,this.velocity.x*dt,this.velocity.y*dt,this.velocity.z*dt);
   // Corridor flood is a local ceiling. The cave column is unchanged.
   if(inBreathCorridor(m.position)&&m.breathWaterY<SURFACE_Y-.35){
    const cap=Math.max(FLOOR_Y+.35,m.breathWaterY-.28);
    if(m.position.y>cap){m.position.y=cap;if(this.velocity.y>0)this.velocity.y=0;}
   }
   m.update(dt,sprint);this.position.copy(m.position);
   }
   }else{
    // holdCamera: keep mission clock + chests syncing, but leave look/swim alone.
    this.onFoot=canWalk(m.position,m.breathWaterY);
    this.velocity.set(0,0,0);
    this.gait.step(0,0,false,dt);
    m.update(dt,false);this.position.copy(m.position);
    this.camera.getWorldDirection(this.forward);this.right.crossVectors(this.forward,this.upAxis).normalize();
   }
   // Presentation-only hover bob when nearly still — never moves mission.position.
   // Walk bob is a light stride; swim keeps the stronger murk drift.
   if(!this.holdCamera&&!this.valveStroke){
   const speed=this.velocity.length();
   let bobBlend=1-THREE.MathUtils.smoothstep(speed,.06,.5);
   let eyeX:number,eyeY:number,eyeZ:number;
   if(this.onFoot){
    // The eye rides the gait: pelvis rise/fall and sway through the trunk and neck,
    // with gaze stabilisation leaving only a small residual nod, roll and yaw.
    const pose=this.gait.pose();
    // Camera takes only WALK_CAMERA_MOTION of the head path (70 % less shake than the raw body).
    const k=WALK_CAMERA_MOTION,raw=pose.head;
    const h={x:raw.x*k,y:raw.y*k,z:raw.z*k,pitch:raw.pitch*k,roll:raw.roll*k,yaw:raw.yaw*k};
    // Quiet standing: slow breathing (~0.25 Hz) and a few millimetres of postural sway.
    const still=1-this.gait.moving;
    const breathe=Math.sin(this.time*1.6)*.004*still*k;
    const sway=Math.sin(this.time*.45)*.003*still*k;
    const flat=Math.hypot(this.forward.x,this.forward.z)||1;
    const fx=this.forward.x/flat,fz=this.forward.z/flat;
    eyeX=this.position.x+(-fz)*(h.x+sway)+fx*h.z;
    eyeY=this.position.y+h.y+breathe;
    eyeZ=this.position.z+fx*(h.x+sway)+fz*h.z;
    this.camera.rotation.set(this.pitch+h.pitch,this.yaw+h.yaw,h.roll);
    this.handSwing=pose;
    bobBlend=still;
   }else{
    this.handSwing=null;
    const bobY=Math.sin(this.time*1.1)*.13*bobBlend;
    const bobSide=Math.sin(this.time*.65)*.065*bobBlend;
    const bobFwd=Math.cos(this.time*.5)*.065*bobBlend;
    eyeX=this.position.x+this.upAxis.x*bobY+this.right.x*bobSide+this.forward.x*bobFwd;
    eyeY=this.position.y+this.upAxis.y*bobY+this.right.y*bobSide+this.forward.y*bobFwd;
    eyeZ=this.position.z+this.upAxis.z*bobY+this.right.z*bobSide+this.forward.z*bobFwd;
   }
   // Translation only — look-stick (yaw/pitch) stays as-is. Cap follow-dt so a hitch frame cannot teleport the eye.
   const follow=this.onFoot?1:1-Math.exp(-80*Math.min(dt,.018*GAME_TIME_SCALE));
   this.camera.position.x=THREE.MathUtils.lerp(this.camera.position.x,eyeX,follow);
   this.camera.position.y=THREE.MathUtils.lerp(this.camera.position.y,eyeY,follow);
   this.camera.position.z=THREE.MathUtils.lerp(this.camera.position.z,eyeZ,follow);
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
    if(knifeHeld&&knifeMeshReady(this.knifeVisual)){
     if(this.knifeEquipAt===null)this.knifeEquipAt=this.time;
     this.knifeVisual.visible=true;
     this.applyKnifeHover(bobBlend);
    }else{
     this.knifeVisual.visible=false;
     this.knifeFlashUntil=0;
     this.knifeEquipAt=null;
     poseKnife(this.knifeVisual);
    }
   }
   if(this.gunVisual){
    this.gunVisual.visible=this.holdingGun();
    if(this.gunVisual.visible){
     // Kick: slide back and muzzle flip on each shot; reload: tip the gun down and in.
     const k=this.gunKick*this.gunKick,p=this.mission.pistol;
     const rl=p.reload>0?Math.sin(Math.PI*(1-p.reload/PISTOL.reloadSeconds)):0;
     this.gunVisual.position.set(.32+Math.sin(this.time*.7)*.02*bobBlend-.05*rl,-.28+Math.sin(this.time*1.05)*.02*bobBlend+.02*k-.12*rl,-.55+.07*k);
     this.gunVisual.rotation.set(.2+.32*k-.7*rl,.55+.25*rl,.08+.3*rl);
    }
   }
   if(this.keyVisual){
    this.keyVisual.visible=this.holdingKey();
    if(this.keyVisual.visible){
     this.keyVisual.position.set(.28+Math.sin(this.time*.7)*.012*bobBlend,-.22+Math.sin(this.time*1.05)*.014*bobBlend,-.42);
    }
   }
   this.updatePistolFeel(dt);
   this.updateBlood(dt);
   }

   if(m.outcome==='lost')this.applyBreathRespawn();
   else if(m.outcome!=='playing')this.pause();
  }
  // Three fields, assigned. Depth and the exit do not tint the fog.
  const fog=this.scene.fog as THREE.FogExp2;
  const corridorAir=breathingFreeAir(this.position,this.mission.breathWaterY);
  if(corridorAir!==this.airborne){
   this.airborne=corridorAir;
   this.backgroundMusic?.setDry(corridorAir);
  }
  this.frameGrade=stepFrameGrade(this.gradeClock,this.mission.floodTriggered,corridorAir,this.playing?dt:0);
  const field=gradeField(this.frameGrade);
  fog.color.setHex(field);
  fog.density=gradeDensity(this.frameGrade);
  (this.scene.background as THREE.Color).copy(fog.color);
  const lights=GRADE_LIGHTS[this.frameGrade];
  this.gradeHemi.color.setHex(lights.sky);
  this.gradeHemi.groundColor.setHex(lights.ground);
  this.gradeHemi.intensity=lights.hemi;
  this.gradeAmbient.color.setHex(lights.ambient);
  this.gradeAmbient.intensity=lights.ambientI;
  this.gradeSky.color.setHex(lights.sun);
  this.gradeSky.intensity=lights.sunI;
  const slam=gradeSlam(this.frameGrade);
  for(const spot of this.gradeSpots)spot.light.color.setHex(slam?field:spot.rest);
  if(this.clipPass)this.clipPass.uniforms.uSlam.value=slam;
  this.uniforms.uTime.value=this.time;
  this.stepHanging(this.playing?dt:0,slam?field:null);
  for(const s of this.wallSconceLights){
   if(s.state==='off')continue;
   if(s.state==='flicker'){
    // Failing-tube flicker: mostly lit with erratic dips toward near-dark.
    const t=this.time,p=s.phase;
    const f=Math.max(.08,Math.min(1.3,.72+.5*Math.sin(t*11+p)+.3*Math.sin(t*27+p*1.7)+.2*Math.sin(t*53+p*2.3)));
    s.light.intensity=s.base*f;
   }else s.light.intensity=s.base;
  }
  const selected=this.mission.inventory[this.mission.selected];
  const knifeHeld=this.holdingKnife();
  const torchOn=torchShouldShine(this.mission.torch,selected);
  this.syncHeldTorch();
  if(this.wallPipe)setPipeWheel(this.wallPipe,this.mission.valveTurned);
  if(this.valveStroke){
   // Torch rides on its lanyard/chest clip while both hands work: light stays, lantern mesh goes.
   this.setTorchMeshesVisible(false);
   if(this.knifeVisual)this.knifeVisual.visible=false;
   if(this.gunVisual)this.gunVisual.visible=false;
   if(this.keyVisual)this.keyVisual.visible=false;
  }
  if(this.knifeVisual&&!this.playing&&!this.valveStroke){
   this.knifeVisual.visible=knifeHeld&&knifeMeshReady(this.knifeVisual);
   if(knifeHeld)poseKnife(this.knifeVisual);
  }
  if(this.gunVisual&&!this.playing&&!this.valveStroke)this.gunVisual.visible=this.holdingGun();
  if(this.keyVisual&&!this.playing&&!this.valveStroke)this.keyVisual.visible=this.holdingKey();
  this.torchBody.visible=true;
  if(torchOn){
   // Torch murk follows water over the lens: free air reads as the clear surface response.
   const torchY=floodColumnY(this.position,this.mission.breathWaterY);
   const torch=torchModulation(torchY,this.pitch);
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
  this.syncSovietGuard(dt);
  if(this.fx)this.syncSurvival(dt);
  this.syncBreathProps();
  this.syncPickups();this.syncChests(dt);this.decoyMesh.visible=!!this.mission.decoy;if(this.mission.decoy)this.decoyMesh.position.copy(this.mission.decoy.position);
  if(this.time-this.lastSent>.05){this.lastSent=this.time;this.publish();}
  this.updatePointCull();
  this.applyPortalOcclusion();
  this.composer.render();
 }
 dispose(){if(this.copperPipe)this.copperPipe.disposed=true;this.rockMaps.dispose();this.propStreaming.dispose();window.clearTimeout(this.audioTestTimer);if(this.audioContext)this.audioContext.onstatechange=null;this.backgroundMusic?.dispose();this.pause();this.composer?.dispose();super.dispose();}
}
