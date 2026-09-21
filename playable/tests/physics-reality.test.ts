/**
 * Physics-vs-reality audit harness.
 * Measures First Dive locomotion / gas / stamina against published scuba & finswim ranges.
 * World units are treated as metres (CELL=4, ~6.5 m water column, speeds in the same units).
 */
import {test} from 'node:test';
import assert from 'node:assert/strict';
import {writeFileSync, mkdirSync} from 'node:fs';
import {Mission,START,RELIC,EXIT,moveBody,distance,CELL,torchModulation} from '../src/simulation';

/** Cruise / sprint match CaveWorld animate (not exported constants). */
const CRUISE=2.8;
const SPRINT=4.8;
const VEL_K=4; // velocity.lerp(move, 1-exp(-4*dt))
/** HUD depth in main.tsx — theatrical, not hydrostatic. */
const hudDepth=(z:number,y:number)=>Math.max(1,Math.round(10+(-z)*.22+(5-y)*2.4));

/** Recreational scuba / finswim reference ranges (open literature, shallow water). */
const REAL={
 cruiseMs:[0.25,0.5] as const,          // PADI-style relaxed finning ~0.5 kn → ~0.25 m/s; typical 0.3–0.5
 hardKickMs:[0.8,1.2] as const,         // strong recreational kick with fins
 competitiveMs:[2.0,3.0] as const,      // elite monofin / finswim burst (surface)
 airMinutesShallow:[40,60] as const,    // AL80 @ ~1–1.5 ATA, moderate SAC
 airDepthFactorPer10m:2,                // ambient pressure ≈ +1 ATA / 10 m
 verticalControlledMs:[0.2,0.5] as const,
 coastMetresFrom1ms:[0.3,1.5] as const, // order-of-magnitude water coast after stop kicking
};

function integrateDistance(speed:number,seconds:number,dt=1/60){
 let pos=0,v=0;
 const frames=Math.round(seconds/dt);
 for(let i=0;i<frames;i++){
  const a=1-Math.exp(-VEL_K*dt);
  v+=(speed-v)*a;
  pos+=v*dt;
 }
 return{distance:pos,finalSpeed:v};
}

function coastFrom(speed:number,dt=1/60){
 let v=speed,dist=0,t=0;
 while(v>0.01&&t<10){const a=1-Math.exp(-VEL_K*dt);v+=(0-v)*a;dist+=v*dt;t+=dt;}
 return{coastMetres:dist,coastSeconds:t};
}

test('measure locomotion, gas, stamina, and depth against real diving ranges',()=>{
 const cruiseSteady=integrateDistance(CRUISE,5);
 const sprintSteady=integrateDistance(SPRINT,5);
 // After 2 s should be near terminal speed
 assert.ok(cruiseSteady.finalSpeed>CRUISE*.95);
 assert.ok(sprintSteady.finalSpeed>SPRINT*.95);

 const coast=coastFrom(CRUISE);
 const tau=1/VEL_K;
 const timeTo95=-Math.log(0.05)/VEL_K;

 // Stamina: drain 18/s while sprinting, regen 17/s otherwise
 const m=new Mission(true);
 let sprintSeconds=0;
 while(m.stamina>3&&sprintSeconds<30){m.update(1/60,true);sprintSeconds+=1/60;}
 const staminaEmpty=sprintSeconds;
 m.update(0); // keep playing
 let regen=0;
 while(m.stamina<99.5&&regen<30){m.update(1/60,false);regen+=1/60;}

 // Air: flat 1:1 with wall clock, independent of depth / exertion
 const airMission=new Mission(true);
 airMission.position={...START,y:0.8}; // deep end of band
 for(let i=0;i<60;i++)airMission.update(1/60,true);
 const airAfterSprintDeep=airMission.air;
 const airMission2=new Mission(true);
 airMission2.position={...START,y:6.5};
 for(let i=0;i<60;i++)airMission2.update(1/60,false);
 const airAfterCruiseShallow=airMission2.air;
 assert.equal(Math.round(airAfterSprintDeep),239);
 assert.equal(Math.round(airAfterCruiseShallow),239);

 // No buoyancy / gravity: held keys produce equal |vy| and |vz|
 const body={...START};
 moveBody(body,0,2.8/60,0);
 const upStep=body.y-START.y;
 const body2={...START};
 moveBody(body2,0,0,-2.8/60);
 const fwdStep=START.z-body2.z;
 assert.ok(Math.abs(upStep-fwdStep)<1e-9,'vertical and horizontal step size identical — no buoyancy bias');

 // Depth band
 const depthBand=7.1-0.65;
 const horiz=Math.abs(RELIC.z-START.z);
 const routeCruise=horiz/CRUISE;
 const routeSprint=horiz/SPRINT;

 // Omnidirectional speed vs recreational cruise
 const cruiseVsRealMin=CRUISE/REAL.cruiseMs[0];
 const cruiseVsRealMax=CRUISE/REAL.cruiseMs[1];
 const sprintVsHard=SPRINT/REAL.hardKickMs[1];

 // Torch clarity vs y (aesthetic, not Beer–Lambert)
 const torchFloor=torchModulation(0.8,1.2);
 const torchCeil=torchModulation(6.5,-1.2);

 // Depth HUD mixes −Z progress and y; playable column is only ~6.5 m
 const hudAtStart=hudDepth(START.z,START.y);
 const hudAtRelic=hudDepth(RELIC.z,RELIC.y);
 const hudFloor=hudDepth(START.z,0.65);
 const hudCeil=hudDepth(START.z,7.1);
 assert.equal(hudAtStart,17);
 assert.ok(hudAtRelic>hudAtStart,'HUD depth rises mainly from cavern −Z, not hydrostatics');
 assert.ok(hudFloor-hudCeil>depthBand,'HUD vertical span exaggerates the real y band');

 const report={
  generatedAt:new Date().toISOString(),
  unitAssumption:'1 world unit ≈ 1 metre (CELL=4 m tiles, playable y ∈ [0.65, 7.1])',
  measured:{
   cruiseMs:CRUISE,
   sprintMs:SPRINT,
   cruiseKmh:+(CRUISE*3.6).toFixed(2),
   sprintKmh:+(SPRINT*3.6).toFixed(2),
   velocityTimeConstantS:tau,
   timeTo95pctTargetS:+timeTo95.toFixed(3),
   coastFromCruiseM:+coast.coastMetres.toFixed(3),
   coastFromCruiseS:+coast.coastSeconds.toFixed(3),
   staminaSprintWindowS:+staminaEmpty.toFixed(2),
   staminaRegenFullS:+regen.toFixed(2),
   airBudgetS:240,
   airBudgetMin:4,
   airReserveS:60,
   airIndependentOfDepthAndExertion:true,
   depthBandM:+depthBand.toFixed(2),
   startToRelicHorizontalM:horiz,
   cruiseTimeStartToRelicS:+routeCruise.toFixed(1),
   sprintTimeStartToRelicS:+routeSprint.toFixed(1),
   equalVerticalHorizontalThrust:true,
   gravityOrBuoyancyForce:false,
   predatorChaseMs:3.4,
   predatorPatrolMs:1.8,
   playerCanOutSprintChase:SPRINT>3.4,
   playerCruiseSlowerThanChase:CRUISE<3.4,
   torchIntensityFloorAim:torchFloor.intensity,
   torchIntensityCeilingAim:torchCeil.intensity,
   cellSizeM:CELL,
   exitDistanceFromStartM:+distance(START,EXIT).toFixed(1),
   hudDepthAtStartM:hudAtStart,
   hudDepthAtRelicM:hudAtRelic,
   hudDepthFloorEntranceM:hudFloor,
   hudDepthCeilingEntranceM:hudCeil,
   hudDepthFormula:'max(1, round(10 + (-z)*0.22 + (5-y)*2.4))',
   hudDepthIsHydrostatic:false,
  },
  reality:{
   recreationalCruiseMs:REAL.cruiseMs,
   hardKickMs:REAL.hardKickMs,
   competitiveBurstMs:REAL.competitiveMs,
   shallowTankMinutes:REAL.airMinutesShallow,
   notes:[
    'Ambient pressure ≈ 1 + depth_m/10 ATA; gas use scales roughly with ATA.',
    'Neutral buoyancy + BCD control dominate vertical motion; divers do not fly with equal XYZ thrust.',
    'Water drag is roughly quadratic; free coast after stopping kick is short.',
   ],
  },
  ratios:{
   gameCruiseOverRealCruiseMin:+cruiseVsRealMin.toFixed(1),
   gameCruiseOverRealCruiseMax:+cruiseVsRealMax.toFixed(1),
   gameSprintOverHardKickMax:+sprintVsHard.toFixed(1),
   gameAirMinutesOverRealShallowMin:+(4/REAL.airMinutesShallow[1]).toFixed(2),
   gameAirMinutesOverRealShallowMax:+(4/REAL.airMinutesShallow[0]).toFixed(2),
  },
  verdicts:{
   swimSpeed:'ARCADE — cruise ~6–11× recreational finning; sprint exceeds elite finswim.',
   gasModel:'COMPRESSED — 4 min flat timer; no depth/exertion scaling (Boyle / SAC omitted).',
   buoyancy:'OMITTED — free 6DOF flight with identical vertical/horizontal thrust; no weight/BCD.',
   dragCoast:'PLAUSIBLE ORDER — ~0.7 m coast from cruise with τ=0.25 s (arcade-responsive).',
   depthScale:'SHALLOW CAVE — ~6.5 m playable y band; torch murk is stylistic, not optical attenuation law.',
   depthHud:'THEATRICAL — reads ~17 m at start and ~42 m at the relic while collision y spans only ~6.5 m; −Z progress inflates the gauge.',
   predatorPacing:'DESIGNED CHASE — chase 3.4 m/s beats cruise 2.8, loses to sprint 4.8 (~5.4 s stamina).',
   overall:'Gameplay-first survival pacing, not a scuba physics simulator.',
  },
 };

 mkdirSync('/opt/cursor/artifacts',{recursive:true});
 writeFileSync('/opt/cursor/artifacts/physics_reality_measurements.json',JSON.stringify(report,null,2));
 writeFileSync(new URL('../../docs/verification/physics-reality.json',import.meta.url),JSON.stringify(report,null,2));

 // Soft structural asserts — document gaps without requiring realism
 assert.ok(CRUISE>REAL.cruiseMs[1]*3,'cruise is several× recreational (expected arcade)');
 assert.ok(240/60<REAL.airMinutesShallow[0]/5,'air budget is heavily time-compressed');
 assert.equal(report.measured.gravityOrBuoyancyForce,false);
 console.log(JSON.stringify({
  cruiseMs:CRUISE,sprintMs:SPRINT,
  vsRecCruise:`${cruiseVsRealMax.toFixed(0)}–${cruiseVsRealMin.toFixed(0)}×`,
  airMin:4,coastM:coast.coastMetres.toFixed(2),
  staminaSprintS:staminaEmpty.toFixed(1),
  verdict:report.verdicts.overall,
 },null,2));
});
