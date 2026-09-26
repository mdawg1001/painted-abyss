/**
 * War FX (Jean Moreno, Unity Asset Store, Standard EULA) — textures only.
 * The Unity particle prefabs do not carry over; their flipbook/cards do. Source textures are
 * converted by `scripts/import-war-fx.py` into `public/assets/war_fx/` (white RGB + shape alpha
 * for the additive cards, colour RGBA for bullet holes and smoke).
 *
 *  - Muzzle flash: a hard star card (3 variants) and a spark star on top of the soft glow.
 *  - Bullet impacts: a concrete bullet-hole decal on the rock face (pooled, the oldest recycles),
 *    plus a quick spark star.
 *  - Smoke grenades: the War FX smoke puff replaces the procedural puff.
 */
import * as THREE from 'three';
import { FLOOR_Y, SURFACE_Y, isOpen } from './simulation';

export const WAR_FX_SOURCE = 'https://assetstore.unity.com/packages/vfx/particles/war-fx-5669';
export const WAR_FX_AUTHOR = 'Jean Moreno (JMO Assets)';
const BASE = '/assets/war_fx/';

/** Warm muzzle-flash tint (cards are white; colour comes from here). */
export const FLASH_TINT = 0xffc27a;
export const SPARK_TINT = 0xffd9a0;
/** Bullet holes kept on the walls at once (oldest recycles). */
export const MAX_HOLES = 48;
/** Decal size (m) and its lift off the surface (m). */
export const HOLE_SIZE = 0.18;
export const HOLE_LIFT = 0.012;

const loader = new THREE.TextureLoader();
function tex(name: string) {
 const t = loader.load(BASE + name);
 t.colorSpace = THREE.SRGBColorSpace;
 return t;
}

export type WarFxTextures = {
 flash: THREE.Texture[];
 sparks: THREE.Texture[];
 holes: THREE.Texture;
 smoke: THREE.Texture;
 glow: THREE.Texture;
};

let shared: WarFxTextures | null = null;
/** Load once; textures fill in when the PNGs arrive (materials render nothing until then). */
export function warFxTextures(): WarFxTextures {
 if (shared) return shared;
 shared = {
  flash: [1, 2, 3].map(i => tex(`muzzle_front_${i}.png`)),
  sparks: [1, 2, 3].map(i => tex(`muzzle_sparks_${i}.png`)),
  holes: tex('bullet_holes_concrete.png'),
  smoke: tex('smoke_puff.png'),
  glow: tex('glow_circle.png'),
 };
 return shared;
}

/**
 * Which way the surface at an impact point faces. Floor and ceiling are horizontal; the rock
 * walls and cover are axis-aligned boxes on the bunker grid, so the blocked neighbour tells the
 * face. `from` (the shooter) breaks ties at corners.
 */
export function impactNormal(p: { x: number; y: number; z: number }, from: { x: number; z: number }) {
 if (p.y <= FLOOR_Y + 0.05) return { x: 0, y: 1, z: 0 };
 if (p.y >= SURFACE_Y - 0.05) return { x: 0, y: -1, z: 0 };
 const probe = 0.3;
 const blocked = [
  { x: 1, z: 0 }, { x: -1, z: 0 }, { x: 0, z: 1 }, { x: 0, z: -1 },
 ].filter(d => !isOpen(p.x + d.x * probe, p.z + d.z * probe));
 if (!blocked.length) {
  // Open all round (a grazing hit on a corner): face back toward the shooter.
  const dx = from.x - p.x, dz = from.z - p.z;
  return Math.abs(dx) > Math.abs(dz) ? { x: Math.sign(dx), y: 0, z: 0 } : { x: 0, y: 0, z: Math.sign(dz) };
 }
 // Prefer the blocked side that faces the shooter.
 blocked.sort((a, b) => ((from.x - p.x) * a.x + (from.z - p.z) * a.z) - ((from.x - p.x) * b.x + (from.z - p.z) * b.z));
 const d = blocked[0];
 return { x: -d.x || 0, y: 0, z: -d.z || 0 };
}

/** Slide an impact point onto the blocking face along −normal (grid walls are exact). */
export function onSurface(p: { x: number; y: number; z: number }, n: { x: number; y: number; z: number }) {
 if (n.y !== 0) return { x: p.x, y: n.y > 0 ? FLOOR_Y : SURFACE_Y, z: p.z };
 let x = p.x, z = p.z;
 for (let i = 0; i < 40; i++) {
  const nx = x - n.x * 0.01, nz = z - n.z * 0.01;
  if (!isOpen(nx, nz)) break;
  x = nx; z = nz;
 }
 return { x, y: p.y, z };
}

type Flash = { sprite: THREE.Sprite; life: number; max: number; s0: number; s1: number };

export class WarFx {
 readonly t = warFxTextures();
 private holes: THREE.Mesh[] = [];
 private nextHole = 0;
 private flashes: Flash[] = [];
 private holeGeo: THREE.PlaneGeometry[];
 private holeMat: THREE.MeshStandardMaterial;
 constructor(private scene: THREE.Scene) {
  // The concrete sheet is a 2×2 atlas: one quad geometry per cell.
  this.holeGeo = [0, 1, 2, 3].map(i => {
   const g = new THREE.PlaneGeometry(HOLE_SIZE, HOLE_SIZE);
   const u0 = (i % 2) * 0.5, v0 = Math.floor(i / 2) * 0.5;
   const uv = g.getAttribute('uv') as THREE.BufferAttribute;
   for (let k = 0; k < uv.count; k++) uv.setXY(k, u0 + uv.getX(k) * 0.5, v0 + uv.getY(k) * 0.5);
   return g;
  });
  // Lit like the rock around it, so a hole in a dark corner stays dark and one in a lamp pool reads.
  this.holeMat = new THREE.MeshStandardMaterial({
   map: this.t.holes, transparent: true, depthWrite: false, roughness: 0.95, metalness: 0,
   polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2,
  });
 }
 /** A War FX flash card that lives `max` seconds, growing from s0 to s1 and fading. */
 spawnCard(map: THREE.Texture, at: THREE.Vector3 | { x: number; y: number; z: number }, max: number, s0: number, s1: number, tint: number) {
  let f = this.flashes.find(q => q.life <= 0);
  if (!f) {
   const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, fog: true }));
   sprite.visible = false;
   this.scene.add(sprite);
   f = { sprite, life: 0, max: 1, s0: 0, s1: 0 };
   this.flashes.push(f);
  }
  const m = f.sprite.material;
  m.map = map; m.color.setHex(tint); m.rotation = Math.random() * Math.PI * 2; m.needsUpdate = true;
  f.sprite.position.set(at.x, at.y, at.z);
  f.life = f.max = max; f.s0 = s0; f.s1 = s1;
  f.sprite.visible = true;
 }
 /** A guard's shot: star flash and spark star at his muzzle (~60 ms). */
 guardShot(muzzle: THREE.Vector3) {
  this.spawnCard(pick(this.t.flash), muzzle, 0.06, 0.34, 0.2, FLASH_TINT);
  this.spawnCard(pick(this.t.sparks), muzzle, 0.08, 0.2, 0.42, SPARK_TINT);
 }
 /**
  * Your round hits rock or cover: a hole on the face and a spark star. `surface` is the real
  * rendered hit (raycast point + world normal) when the renderer found one; otherwise the
  * bunker grid gives the face.
  */
 impact(p: { x: number; y: number; z: number }, from: { x: number; z: number }, surface?: { point: THREE.Vector3; normal: THREE.Vector3 } | null) {
  const n = surface ? { x: surface.normal.x, y: surface.normal.y, z: surface.normal.z } : impactNormal(p, from);
  const at = surface ? { x: surface.point.x, y: surface.point.y, z: surface.point.z } : onSurface(p, n);
  const spark = { x: at.x + n.x * 0.05, y: at.y + n.y * 0.05, z: at.z + n.z * 0.05 };
  this.spawnCard(pick(this.t.sparks), spark, 0.09, 0.12, 0.38, SPARK_TINT);
  // Without a real hit, the sim's ceiling line sits below the rendered roof: sparks only.
  if (!surface && n.y < 0) return { at, n };
  let mesh = this.holes[this.nextHole];
  if (!mesh) {
   mesh = new THREE.Mesh(this.holeGeo[0], this.holeMat);
   mesh.renderOrder = 2;
   mesh.name = 'bulletHole';
   this.scene.add(mesh);
   this.holes[this.nextHole] = mesh;
  }
  mesh.geometry = this.holeGeo[Math.floor(Math.random() * 4)];
  mesh.position.set(at.x + n.x * HOLE_LIFT, at.y + n.y * HOLE_LIFT, at.z + n.z * HOLE_LIFT);
  mesh.lookAt(mesh.position.x + n.x, mesh.position.y + n.y, mesh.position.z + n.z);
  mesh.rotateZ(Math.random() * Math.PI * 2);
  const s = 0.8 + Math.random() * 0.5;
  mesh.scale.set(s, s, 1);
  mesh.visible = true;
  this.nextHole = (this.nextHole + 1) % MAX_HOLES;
  return { at, n };
 }
 /** Fresh dive: walls come back clean. */
 clear() {
  for (const h of this.holes) if (h) h.visible = false;
  for (const f of this.flashes) { f.life = 0; f.sprite.visible = false; }
 }
 update(dt: number) {
  for (const f of this.flashes) {
   if (f.life <= 0) continue;
   f.life = Math.max(0, f.life - dt);
   const k = f.life / f.max;
   f.sprite.visible = k > 0;
   f.sprite.material.opacity = k;
   f.sprite.scale.setScalar(f.s1 + (f.s0 - f.s1) * k);
  }
 }
}

export function pick<T>(list: T[]): T {
 return list[Math.floor(Math.random() * list.length)];
}
