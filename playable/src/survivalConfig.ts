/**
 * SURVIVAL FIREFIGHT — every balancing number for the escalating guard assault in one place.
 *
 * Tune here; nothing else in the game hard-codes these. Distances are metres, times
 * seconds, damage in health points (player and guards both use 0–max hp).
 */

export type GuardRole='assault'|'rusher'|'flanker'|'heavy';

export const SURVIVAL={
 /** Hard cap on guards alive at once (also the size of the visual pool). */
 maxGuards:10,

 // ── Player weapon: TT-33 (baseline) ─────────────────────────────────────────────
 pistol:{
  /** Damage to a standard guard's head at close range, and the multiplier beyond falloff. */
  headDamage:78,
  bodyDamage:30,
  /** Full damage out to `falloffStart`, easing to `falloffMin`× at `falloffEnd`. */
  falloffStart:9,falloffEnd:24,falloffMin:.72,
  magazine:8,
  startReserve:40,
  reserveMax:64,
 },
 /** Knife on guards: a panic tool at arm's length. Stabbing an unaware back is lethal. */
 knife:{guardDamage:55,backstabMultiplier:3,backstabArc:100*Math.PI/180},

 // ── Guard durability by role (standard guard = assault) ────────────────────────
 roles:{
  assault:{hp:150,headMult:1,speed:2.19,combatSpeed:1.44,range:9,burst:[3,3] as [number,number],burstGap:.16,restMin:1.0,restMax:1.7,accuracy:.6,damage:12,reaction:[.5,.85] as [number,number],armed:true},
  flanker:{hp:130,headMult:1,speed:2.88,combatSpeed:1.84,range:7,burst:[2,3] as [number,number],burstGap:.15,restMin:.9,restMax:1.5,accuracy:.56,damage:12,reaction:[.45,.8] as [number,number],armed:true},
  rusher:{hp:110,headMult:1,speed:3.62,combatSpeed:3.62,range:0,burst:[0,0] as [number,number],burstGap:1,restMin:1,restMax:1,accuracy:0,damage:0,reaction:[.2,.35] as [number,number],armed:false},
  /** Heavy: helmet and flak — headshots do 60 %; long suppressive bursts, slow walk. */
  heavy:{hp:280,headMult:.6,speed:1.5,combatSpeed:1.21,range:11,burst:[5,7] as [number,number],burstGap:.13,restMin:1.4,restMax:2.2,accuracy:.5,damage:18,reaction:[.7,1.05] as [number,number],armed:true},
 },

 // ── Guard fire discipline (why a crowd stays survivable) ───────────────────────
 /** At most this many guards may be shooting at you at the same moment. */
 maxShooters:3,
 maxShootersFinal:4,
 /** Accuracy lost per round later in a burst (muzzle climb). */
 burstClimb:.12,
 /** Guard pistol magazine and reload; a downed guard's pistol always has at least `dropRounds`. */
 guardMagazine:8,dropRounds:5,
 guardReload:2.2,

 // ── Close-range attacks (every guard can strike; rushers stab) ─────────────────
 melee:{
  /** Simultaneous close-range attackers allowed. Others circle and wait. */
  maxAttackers:2,
  /** Wind-up (readable), reach at the moment of the strike, frontal arc, damage, cooldown. */
  rusher:{windup:.55,reach:1.6,arc:70*Math.PI/180,damage:26,cooldown:1.5,lunge:1.4},
  other:{windup:.6,reach:1.6,arc:60*Math.PI/180,damage:18,cooldown:1.8,lunge:0},
  /** Start the wind-up from this far (rushers lunge the last bit). */
  startRange:2.3,
  /** Rushers without an attack slot circle at this distance. */
  waitRadius:4.6,
 },
 /** A hit staggers a guard: cancels a melee wind-up and delays his trigger. */
 hitFlinch:.28,

 // ── Director: pacing ───────────────────────────────────────────────────────────
 director:{
  /** Guards placed at mission start (rooms along the way). */
  initial:6,
  /** Phase lengths (s) and how many guards the director keeps hunting you in each. */
  buildSeconds:32,peakSeconds:28,lullSeconds:13,
  buildTarget:4,peakTarget:7,finalTarget:10,
  /** Each cycle after the first adds this many to the build and peak targets. */
  escalation:1,
  /** Seconds between reinforcement arrivals (random in range) per phase. */
  buildInterval:[6,9] as [number,number],
  peakInterval:[3.5,6] as [number,number],
  finalInterval:[2.6,4.2] as [number,number],
  /** Telegraph: door/shout this long before the guard steps through. */
  warnSeconds:2.4,
  /** A reinforcement door must be at least this far from you… */
  spawnMinDistance:16,
  /** …and out of your line of sight unless farther than this. */
  spawnVisibleOk:34,
  /** No arrivals within this arc behind you (radians) closer than `behindSafeDistance`. */
  behindArc:110*Math.PI/180,behindSafeDistance:26,
  /** Took this much damage in the last `mercyWindow` s: next arrival waits `mercyDelay` longer. */
  mercyDamage:55,mercyWindow:8,mercyDelay:4,
  /** Role mix for reinforcements (weights), and heavy limits. */
  roleWeights:{assault:45,rusher:25,flanker:20,heavy:10} as Record<GuardRole,number>,
  maxHeavy:1,maxHeavyFinal:2,
  /** Downed bodies are recycled after this long if you are not looking at them. */
  corpseSeconds:18,
 },

 // ── Perception ─────────────────────────────────────────────────────────────────
 /** Your pistol is heard this far (through walls: sound carries). Hearing gives position, not sight. */
 gunshotHearing:30,
 /** Sight lost this long → he goes to where he last saw you and searches. */
 loseSightSeconds:2.2,
 searchSeconds:7,
 /** While the bunker is on alert, searchers sweep toward your area with this much error (m). */
 huntError:7,

 // ── Movement ───────────────────────────────────────────────────────────────────
 /** Patrol posts keep at least this far off walls and cover. */
 postClearance:1.4,
 /** Guards push apart inside this separation (m). */
 separation:1.15,
 /** No progress for this long while trying to move → unstick manoeuvre. */
 stuckSeconds:1.2,
 /** Nav targets are recomputed at most this often per guard (s). */
 navRefresh:.22,

 // ── Smoke ──────────────────────────────────────────────────────────────────────
 smoke:{
  radius:4.6,grow:1.2,hold:9,fade:3,
  /** Clouds alive at once (oldest is removed). */
  maxClouds:4,
  /** Throw range and time in the air. */
  throwRange:12,flight:.8,
  /** Grenades you carry at start / at most. */
  start:2,max:3,
  /** Guards throw smoke to cover an advance: shared cooldown across the squad. */
  guardCooldown:22,
  /** Sight through a cloud of density above this is blocked (except point blank). */
  blockDensity:.35,pointBlank:1.8,
 },

 // ── Supplies (walk over to collect) ────────────────────────────────────────────
 supplies:{
  ammo:20,medkit:40,smoke:1,
  pickupRadius:1.3,
  /** At each lull the director restocks this many caches at least `restockMinDistance` away. */
  restockPerLull:2,restockMinDistance:12,
 },

 // ── Player ─────────────────────────────────────────────────────────────────────
 /** Damage direction indicator lifetime (s). */
 damageIndicator:1.4,
} as const;

/** Grid side of a wall a door is set into: W = −col, E = +col, S = −row (south, +z), N = +row. */
export type DoorSide='W'|'E'|'S'|'N';
/** Reinforcement doors: steel bulkheads set into the bunker walls (grid cell + wall side). */
export const SURVIVAL_DOORS:{name:string;col:number;row:number;side:DoorSide}[]=[
 {name:'hatch corridor',col:10,row:-6,side:'W'},
 {name:'west chamber',col:8,row:3,side:'W'},
 {name:'east chamber',col:14,row:2,side:'E'},
 {name:'approach corridor',col:10,row:8,side:'W'},
 {name:'west shelf',col:4,row:14,side:'W'},
 {name:'west deep',col:4,row:22,side:'W'},
 {name:'south-east cavern',col:18,row:23,side:'E'},
 {name:'fissure',col:19,row:9,side:'E'},
 {name:'bone alcove west',col:8,row:29,side:'W'},
 {name:'bone alcove east',col:14,row:28,side:'E'},
 {name:'extraction pool',col:21,row:3,side:'E'},
];

/**
 * Cover: floor-to-head-height blockers (stacked ammo crates, cardboard piles, metal desk, concrete blast walls).
 * World-space axis-aligned boxes; they block movement and sight for everyone.
 * Placed off cell centres so every room keeps a way round them.
 */
export const SURVIVAL_COVER:{x:number;z:number;hx:number;hz:number;kind:'crates'|'wall'|'cardboard'|'desk'}[]=[
 // Entrance chamber: the first contact.
 {x:-6,z:-10,hx:.7,hz:.7,kind:'crates'},
 {x:6,z:-14,hx:1.2,hz:.35,kind:'wall'},
 {x:5,z:-12,hx:.55,hz:.5,kind:'cardboard'},
 {x:-10,z:-18,hx:1,hz:.48,kind:'desk'},
 // Approach corridor.
 {x:-4,z:-16,hx:.55,hz:.5,kind:'cardboard'},
 {x:-6,z:-26,hx:.5,hz:.55,kind:'cardboard'},
 // Main cavern.
 {x:-2,z:-50,hx:.7,hz:.7,kind:'crates'},
 {x:-18,z:-50,hx:.7,hz:.7,kind:'crates'},
 {x:14,z:-50,hx:1.2,hz:.35,kind:'wall'},
 {x:10,z:-62,hx:.55,hz:.5,kind:'cardboard'},
 {x:-22,z:-70,hx:.35,hz:1.2,kind:'wall'},
 {x:18,z:-70,hx:.7,hz:.7,kind:'crates'},
 {x:-12,z:-66,hx:.5,hz:.55,kind:'cardboard'},
 {x:-15,z:-82,hx:.7,hz:.7,kind:'crates'},
 {x:10,z:-90,hx:1.2,hz:.35,kind:'wall'},
 // Bone alcove round the relic.
 {x:-6,z:-108,hx:.7,hz:.7,kind:'crates'},
 {x:6,z:-114,hx:1.2,hz:.35,kind:'wall'},
 {x:0,z:-98,hx:.55,hz:.5,kind:'cardboard'},
 {x:-4,z:-104,hx:.5,hz:.55,kind:'cardboard'},
 // Extraction pool.
 {x:26,z:-6,hx:.7,hz:.7,kind:'crates'},
 {x:22,z:-14,hx:.55,hz:.5,kind:'cardboard'},
];

/** Supply caches: kind and world position. Risky spots: open floor, crossfire lanes. */
export const SURVIVAL_CACHES:{kind:'ammo'|'medkit'|'smoke';x:number;z:number}[]=[
 {kind:'ammo',x:0,z:-6},
 {kind:'smoke',x:0,z:-30},
 {kind:'medkit',x:-20,z:-60},
 {kind:'ammo',x:20,z:-58},
 {kind:'ammo',x:-4,z:-86},
 {kind:'medkit',x:16,z:-94},
 {kind:'smoke',x:-24,z:-94},
 {kind:'ammo',x:0,z:-100},
 {kind:'medkit',x:32,z:-40},
 {kind:'ammo',x:32,z:-72},
];
