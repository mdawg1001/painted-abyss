/**
 * Soviet-era skeleton key — weathered dark iron with a gold-and-red emblem on the bow.
 * Solid Three mesh (no glTF): held FPS prop, ground pickup, and inventory thumb all share
 * the same silhouette (bit + oval bow + hammer-and-sickle wreath + red star).
 */
import * as THREE from 'three';

const IRON = () =>
 new THREE.MeshStandardMaterial({
  color: 0x3a3d42,
  metalness: 0.72,
  roughness: 0.48,
  emissive: 0x0a0b0c,
  emissiveIntensity: 0.15,
 });
const IRON_DARK = () =>
 new THREE.MeshStandardMaterial({
  color: 0x26282c,
  metalness: 0.65,
  roughness: 0.55,
 });
const GOLD = () =>
 new THREE.MeshStandardMaterial({
  color: 0xc9a227,
  metalness: 0.85,
  roughness: 0.32,
  emissive: 0x3a2808,
  emissiveIntensity: 0.35,
 });
const RED = () =>
 new THREE.MeshStandardMaterial({
  color: 0x8b1a1a,
  metalness: 0.35,
  roughness: 0.45,
  emissive: 0x4a0808,
  emissiveIntensity: 0.25,
 });

/** Hammer + sickle + wheat wreath + red star on a gold disc (local Z facing out). */
function sovietEmblem(scale = 1): THREE.Group {
 const g = new THREE.Group();
 g.name = 'sovietEmblem';
 const disc = new THREE.Mesh(new THREE.CircleGeometry(0.045 * scale, 20), GOLD());
 disc.position.z = 0.012 * scale;
 g.add(disc);
 const field = new THREE.Mesh(new THREE.CircleGeometry(0.036 * scale, 20), RED());
 field.position.z = 0.014 * scale;
 g.add(field);
 // Wheat wreath (two arcs of small beads)
 const wheat = GOLD();
 for (const side of [-1, 1]) {
  for (let i = 0; i < 7; i++) {
   const t = (i / 6) * Math.PI * 0.95 - Math.PI * 0.48;
   const r = 0.03 * scale;
   const bead = new THREE.Mesh(new THREE.SphereGeometry(0.0045 * scale, 6, 5), wheat);
   bead.position.set(Math.cos(t) * r * side * 0.55 + side * 0.012 * scale, Math.sin(t) * r, 0.016 * scale);
   g.add(bead);
  }
 }
 // Hammer handle + head
 const handle = new THREE.Mesh(new THREE.BoxGeometry(0.004 * scale, 0.028 * scale, 0.004 * scale), GOLD());
 handle.position.set(-0.006 * scale, -0.002 * scale, 0.018 * scale);
 handle.rotation.z = 0.55;
 g.add(handle);
 const head = new THREE.Mesh(new THREE.BoxGeometry(0.014 * scale, 0.006 * scale, 0.005 * scale), GOLD());
 head.position.set(0.004 * scale, 0.01 * scale, 0.018 * scale);
 head.rotation.z = 0.55;
 g.add(head);
 // Sickle blade (thin torus arc)
 const sickle = new THREE.Mesh(
  new THREE.TorusGeometry(0.014 * scale, 0.0022 * scale, 6, 14, Math.PI * 1.15),
  GOLD(),
 );
 sickle.position.set(0.004 * scale, -0.002 * scale, 0.018 * scale);
 sickle.rotation.z = -0.4;
 g.add(sickle);
 // Red star
 const starShape = new THREE.Shape();
 for (let i = 0; i < 5; i++) {
  const a = -Math.PI / 2 + (i * 2 * Math.PI) / 5;
  const r = i % 2 === 0 ? 0.012 * scale : 0.005 * scale;
  const x = Math.cos(a) * r;
  const y = Math.sin(a) * r + 0.002 * scale;
  if (i === 0) starShape.moveTo(x, y);
  else starShape.lineTo(x, y);
 }
 starShape.closePath();
 const star = new THREE.Mesh(new THREE.ShapeGeometry(starShape), GOLD());
 star.position.z = 0.02 * scale;
 g.add(star);
 return g;
}

/**
 * Authored skeleton key in metres: ~18 cm long.
 * Local: shaft along +Y (bow at +Y), bit toward −X, emblem on +Z of the bow.
 */
export function createSovietKeyMesh(): THREE.Group {
 const root = new THREE.Group();
 root.name = 'sovietKey';
 const iron = IRON();
 const dark = IRON_DARK();

 // Shaft
 const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.006, 0.007, 0.11, 8), iron);
 shaft.position.y = 0.02;
 root.add(shaft);

 // Bit (ward cuts)
 const bit = new THREE.Group();
 bit.name = 'keyBit';
 const bitBody = new THREE.Mesh(new THREE.BoxGeometry(0.028, 0.012, 0.008), dark);
 bitBody.position.set(-0.014, -0.04, 0);
 bit.add(bitBody);
 const tooth1 = new THREE.Mesh(new THREE.BoxGeometry(0.01, 0.014, 0.007), dark);
 tooth1.position.set(-0.022, -0.05, 0);
 bit.add(tooth1);
 const tooth2 = new THREE.Mesh(new THREE.BoxGeometry(0.008, 0.01, 0.007), dark);
 tooth2.position.set(-0.01, -0.052, 0);
 bit.add(tooth2);
 root.add(bit);

 // Oval bow (torus)
 const bow = new THREE.Mesh(new THREE.TorusGeometry(0.028, 0.007, 8, 20), iron);
 bow.position.y = 0.085;
 bow.rotation.x = Math.PI / 2;
 root.add(bow);
 // Inner fill disc so the emblem mounts cleanly
 const bowPlate = new THREE.Mesh(new THREE.CircleGeometry(0.022, 16), dark);
 bowPlate.position.set(0, 0.085, 0.004);
 root.add(bowPlate);

 const emblem = sovietEmblem(1);
 emblem.position.set(0, 0.085, 0.008);
 root.add(emblem);

 root.traverse((o) => {
  if (o instanceof THREE.Mesh) {
   o.castShadow = true;
   o.receiveShadow = true;
  }
 });
 return root;
}

/** Floor pickup: key lying flat, emblem up. */
export function createSovietKeyPickup(): THREE.Group {
 const g = new THREE.Group();
 g.name = 'sovietKeyPickup';
 const key = createSovietKeyMesh();
 key.rotation.z = Math.PI / 2;
 key.rotation.y = 0.35;
 key.position.y = 0.04;
 g.add(key);
 g.position.y = 0.42;
 return g;
}

/** FPS held prop — low-right, shaft angled like a pocket key between fingers. */
export function createSovietKeyHeld(): THREE.Group {
 const g = new THREE.Group();
 g.name = 'sovietKeyHeld';
 const key = createSovietKeyMesh();
 key.scale.setScalar(1.15);
 key.rotation.set(0.4, 0.8, 0.15);
 g.add(key);
 g.position.set(0.28, -0.22, -0.42);
 return g;
}

/** Officer peaking cap — distinct silhouette on the main guard. */
export function createOfficerCap(height = 1.9): THREE.Group {
 const cap = new THREE.Group();
 cap.name = 'officerCap';
 const crown = new THREE.Mesh(
  new THREE.CylinderGeometry(0.11, 0.13, 0.08, 12),
  new THREE.MeshStandardMaterial({ color: 0x1e2420, roughness: 0.75, metalness: 0.08 }),
 );
 crown.position.y = height * 0.97;
 cap.add(crown);
 const peak = new THREE.Mesh(
  new THREE.BoxGeometry(0.16, 0.02, 0.1),
  new THREE.MeshStandardMaterial({ color: 0x121614, roughness: 0.7, metalness: 0.05 }),
 );
 peak.position.set(0, height * 0.94, 0.08);
 cap.add(peak);
 // Red band + gold star badge
 const band = new THREE.Mesh(
  new THREE.TorusGeometry(0.125, 0.012, 6, 16),
  new THREE.MeshStandardMaterial({ color: 0x7a1212, roughness: 0.55, metalness: 0.15 }),
 );
 band.rotation.x = Math.PI / 2;
 band.position.y = height * 0.94;
 cap.add(band);
 const badge = sovietEmblem(0.55);
 badge.position.set(0, height * 0.96, 0.12);
 badge.scale.setScalar(0.9);
 cap.add(badge);
 cap.visible = false;
 return cap;
}
