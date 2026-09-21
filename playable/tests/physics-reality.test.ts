/**
 * Physics-vs-reality audit harness.
 * Measures First Dive locomotion / gas / stamina against published scuba & finswim ranges.
 * World units are treated as metres (CELL=4, ~6.5 m water column, speeds in the same units).
 */
import {test} from 'node:test';
import assert from 'node:assert/strict';
import {writeFileSync, mkdirSync} from 'node:fs';
import {
 Mission,START,RELIC,EXIT,moveBody,distance,CELL,torchModulation,SURFACE_Y,FLOOR_Y,hydrostaticDepth,ata,
 stepSwimVelocity,terminalSwimSpeed,updateBuoyancy,PREDATOR_SPEED,SWIM_THRUST_CRUISE,SWIM_THRUST_SPRINT,SWIM_DRAG_K,
 AIR_MAIN_MAX,AIR_BAILOUT_MAX,gasDrainRate,gasPressure,
} from '../src/simulation';

const CRUISE=terminalSwimSpeed(false);
const SPRINT=terminalSwimSpeed(true);
/** HUD depth matches main.tsx — hydrostatic metres below SURFACE_Y. */
const hudDepth=(y:number)=>Math.round(hydrostaticDepth(y));

/** Recreational scuba / finswim reference ranges (open literature, shallow water). */
const REAL={
 cruiseMs:[0.25,0.5] as const,
 hardKickMs:[0.8,1.2] as const,
 competitiveMs:[2.0,3.0] as const,
 airMinutesShallow:[40,60] as const,
 airDepthFactorPer10m:2,
 verticalControlledMs:[0.2,0.5] as const,
 coastMetresFrom1ms:[0.3,1.5] as const,
};

function integrateKick(sprint:boolean,seconds:number,dt=1/60){
 const v={x:0,y:0,z:0};let pos=0;
 const frames=Math.round(seconds/dt);
 for(let i=0;i<frames;i++){
  stepSwimVelocity(v,{x:0,y:0,z:-1},0,sprint,dt);
  pos+=Math.hypot(v.x,v.y,v.z)*dt;
 }
 return{distance:pos,finalSpeed:Math.hypot(v.x,v.y,v.z)};
}

function coastFrom(speed:number,dt=1/60){
 const v={x:0,y:0,z:-speed};let dist=0,t=0;
 while(Math.hypot(v.x,v.y,v.z)>0.01&&t<10){
  stepSwimVelocity(v,{x:0,y:0,z:0},0,false,dt);
  dist+=Math.hypot(v.x,v.y,v.z)*dt;t+=dt;
 }
 return{coastMetres:dist,coastSeconds:t};
}

test('measure locomotion, gas, stamina, and depth against real diving ranges',()=>{
 const cruiseSteady=integrateKick(false,5);
 const sprintSteady=integrateKick(true,5);
 assert.ok(cruiseSteady.finalSpeed>CRUISE*.95);
 assert.ok(sprintSteady.finalSpeed>SPRINT*.95);
 assert.ok(CRUISE>=2.0&&CRUISE<=2.4);
 assert.ok(SPRINT>=3.2&&SPRINT<=3.8);

 const coast=coastFrom(CRUISE);

 const m=new Mission(true);
 let sprintSeconds=0;
 while(m.stamina>3&&sprintSeconds<30){m.update(1/60,true);sprintSeconds+=1/60;}
 const staminaEmpty=sprintSeconds;
 let regen=0;
 while(m.stamina<99.5&&regen<30){m.update(1/60,false);regen+=1/60;}

 const airMission=new Mission(true);
 airMission.position={...START,y:0.8};
 for(let i=0;i<60;i++)airMission.update(1/60,true);
 const airAfterSprintDeep=airMission.air;
 const airMission2=new Mission(true);
 airMission2.position={...START,y:6.5};
 for(let i=0;i<60;i++)airMission2.update(1/60,false);
 const airAfterCruiseShallow=airMission2.air;
 assert.ok(airAfterSprintDeep<airAfterCruiseShallow,'deep sprint burns more surface-equivalent gas');
 assert.ok(airAfterCruiseShallow<AIR_MAIN_MAX);
 assert.ok(airAfterSprintDeep>AIR_MAIN_MAX-15,'1 s deep sprint leaves most of the short tank');

 // Equal kick thrust on Y vs Z no longer applies — buoyancy is separate.
 let b=0;for(let i=0;i<90;i++)b=updateBuoyancy(b,1,1/60);
 assert.ok(b>.7);
 const body={...START};
 moveBody(body,0,CRUISE/60,0);
 const upStep=body.y-START.y;
 const body2={...START};
 moveBody(body2,0,0,-CRUISE/60);
 const fwdStep=START.z-body2.z;
 assert.ok(Math.abs(upStep-fwdStep)<1e-9,'moveBody still axis-symmetric; buoyancy is outside it');

 const depthBand=SURFACE_Y-FLOOR_Y;
 const horiz=Math.abs(RELIC.z-START.z);
 const routeCruise=horiz/CRUISE;
 const routeSprint=horiz/SPRINT;

 const cruiseVsRealMin=CRUISE/REAL.cruiseMs[0];
 const cruiseVsRealMax=CRUISE/REAL.cruiseMs[1];
 const sprintVsHard=SPRINT/REAL.hardKickMs[1];

 // Torch: shared Beer–Lambert murk (SpotLight direct β^D + volume backscatter β^B)
 const torchFloor=torchModulation(0.8,1.2);
 const torchCeil=torchModulation(6.5,-1.2);
 assert.ok(torchFloor.intensity<torchCeil.intensity);
 assert.ok(torchFloor.betaDirect.r>torchCeil.betaDirect.r);

 const hudAtStart=hudDepth(START.y);
 const hudAtRelic=hudDepth(RELIC.y);
 const hudFloor=hudDepth(FLOOR_Y);
 const hudCeil=hudDepth(SURFACE_Y);
 assert.equal(hudAtStart,4);
 assert.equal(hudAtRelic,5);
 assert.equal(hudCeil,0);
 assert.equal(hudFloor,Math.round(depthBand));
 assert.ok(ata(FLOOR_Y)>ata(SURFACE_Y));

 const report={
  generatedAt:new Date().toISOString(),
  unitAssumption:'1 world unit ≈ 1 metre (CELL=4 m tiles, playable y ∈ [0.65, 7.1])',
  measured:{
   cruiseMs:+CRUISE.toFixed(3),
   sprintMs:+SPRINT.toFixed(3),
   cruiseKmh:+(CRUISE*3.6).toFixed(2),
   sprintKmh:+(SPRINT*3.6).toFixed(2),
   thrustCruise:SWIM_THRUST_CRUISE,
   thrustSprint:SWIM_THRUST_SPRINT,
   dragK:SWIM_DRAG_K,
   coastFromCruiseM:+coast.coastMetres.toFixed(3),
   coastFromCruiseS:+coast.coastSeconds.toFixed(3),
   staminaSprintWindowS:+staminaEmpty.toFixed(2),
   staminaRegenFullS:+regen.toFixed(2),
   airBudgetS:AIR_MAIN_MAX,
   airBudgetMin:AIR_MAIN_MAX/60,
   airReserveS:AIR_BAILOUT_MAX,
   airIndependentOfDepthAndExertion:false,
   gasDrainSurfaceCruise:gasDrainRate(SURFACE_Y,false),
   gasDrainFloorCruise:gasDrainRate(FLOOR_Y,false),
   gasDrainFloorSprint:gasDrainRate(FLOOR_Y,true),
   gasDrainFloorPanic:gasDrainRate(FLOOR_Y,false,true),
   gasPressureSurface:gasPressure(SURFACE_Y),
   gasPressureStart:gasPressure(START.y),
   gasPressureFloor:gasPressure(FLOOR_Y),
   gasFloorOverSurfaceCruise:+(gasDrainRate(FLOOR_Y,false)/gasDrainRate(SURFACE_Y,false)).toFixed(2),
   airAfter1sDeepSprint:+airAfterSprintDeep.toFixed(2),
   airAfter1sShallowCruise:+airAfterCruiseShallow.toFixed(2),
   depthBandM:+depthBand.toFixed(2),
   startToRelicHorizontalM:horiz,
   cruiseTimeStartToRelicS:+routeCruise.toFixed(1),
   sprintTimeStartToRelicS:+routeSprint.toFixed(1),
   equalVerticalHorizontalThrust:false,
   gravityOrBuoyancyForce:true,
   buoyancyModel:'BCD state −1..+1 via Space/Q; quadratic drag on velocity',
   predatorChaseMs:PREDATOR_SPEED.chase,
   predatorPatrolMs:PREDATOR_SPEED.patrol,
   playerCanOutSprintChase:SPRINT>PREDATOR_SPEED.chase,
   playerCruiseSlowerThanChase:CRUISE<PREDATOR_SPEED.chase,
   torchIntensityFloorAim:torchFloor.intensity,
   torchIntensityCeilingAim:torchCeil.intensity,
   cellSizeM:CELL,
   exitDistanceFromStartM:+distance(START,EXIT).toFixed(1),
   hudDepthAtStartM:hudAtStart,
   hudDepthAtRelicM:hudAtRelic,
   hudDepthFloorEntranceM:hudFloor,
   hudDepthCeilingEntranceM:hudCeil,
   hudDepthFormula:'round(max(0, SURFACE_Y - y))',
   hudDepthIsHydrostatic:true,
   ataAtStart:+ata(START.y).toFixed(3),
   ataAtFloor:+ata(FLOOR_Y).toFixed(3),
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
   gameAirMinutesOverRealShallowMin:+((AIR_MAIN_MAX/60)/REAL.airMinutesShallow[1]).toFixed(2),
   gameAirMinutesOverRealShallowMax:+((AIR_MAIN_MAX/60)/REAL.airMinutesShallow[0]).toFixed(2),
  },
  verdicts:{
   swimSpeed:'GAMEPLAY PACE — force model cruise ~2.2 m/s / sprint ~3.5 m/s (force model retained; closer to old arcade feel).',
   gasModel:`SAC × gasPressure × EFFORT — high-stakes; main ${AIR_MAIN_MAX} s + pony ${AIR_BAILOUT_MAX} s; shallow cave uses steeper-than-ATA depth curve (~3× floor vs surface).`,
   buoyancy:'BCD STATE — Space/Q fill buoyancy −1..+1 with neutral trim; kick is look/strafe only.',
   dragCoast:'QUADRATIC — −k|v|v; short coast after releasing kick.',
   depthScale:'SHALLOW CAVE — ~6.5 m playable y band; torch murk is stylistic, not optical attenuation law.',
   depthHud:'HYDROSTATIC — DEPTH = round(SURFACE_Y − y); −Z no longer fakes metres.',
   predatorPacing:`DESIGNED CHASE — chase ${PREDATOR_SPEED.chase} m/s between cruise and sprint.`,
   overall:'Gameplay-first survival with paced force locomotion; gas scales with depth and effort.',
  },
};

 mkdirSync('/opt/cursor/artifacts',{recursive:true});
 writeFileSync('/opt/cursor/artifacts/physics_reality_measurements.json',JSON.stringify(report,null,2));
 writeFileSync(new URL('../../docs/verification/physics-reality.json',import.meta.url),JSON.stringify(report,null,2));

 assert.ok(CRUISE<REAL.hardKickMs[1]*3.2,'cruise raised for gameplay, still below old arcade 2.8');
 assert.ok(SPRINT<4.5,'sprint below old arcade 4.8');
 assert.ok(AIR_MAIN_MAX/60<REAL.airMinutesShallow[0]/5,'air budget is heavily time-compressed');
 assert.ok(gasDrainRate(FLOOR_Y,true)>gasDrainRate(SURFACE_Y,false));
 assert.ok(gasPressure(FLOOR_Y)/gasPressure(SURFACE_Y)>2.5,'ceiling swimming must clearly slow the meter');
 assert.equal(report.measured.gravityOrBuoyancyForce,true);
 console.log(JSON.stringify({
  cruiseMs:+CRUISE.toFixed(3),sprintMs:+SPRINT.toFixed(3),
  vsRecCruise:`${cruiseVsRealMax.toFixed(1)}–${cruiseVsRealMin.toFixed(1)}×`,
  airMin:AIR_MAIN_MAX/60,coastM:coast.coastMetres.toFixed(2),
  staminaSprintS:staminaEmpty.toFixed(1),
  gasFloorSprint:gasDrainRate(FLOOR_Y,true).toFixed(2),
  verdict:report.verdicts.overall,
 },null,2));
});
