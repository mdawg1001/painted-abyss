/**
 * The Soviet bunker kit binary (scripts/build_bunker_kit.py): pure parsing, no THREE, no DOM.
 * Pieces are Quaternius's Modular Sci-Fi MegaKit (CC0), node transforms already applied.
 */
export const BUNKER_KIT_BASE = '/assets/soviet-bunker-kit/';
/** Vertex count of kit.bin; part of the bake signature (a new kit means a new bake). */
export const KIT_VERTICES = 16825;
export type Sheet = 'T1' | 'T2' | 'T3' | 'none';
export const SHEETS: Sheet[] = ['T1', 'T2', 'T3', 'none'];

/** Kit material slot → trim sheet its UVs index. Slots without textures shade from geometry. */
export function sheetOf(slot: string): Sheet {
 if (slot.startsWith('MI_Trim_01')) return 'T1';
 if (slot.startsWith('MI_Trim_03_Cables')) return 'none';
 if (slot.startsWith('MI_Trim_02')) return 'T2';
 if (slot.startsWith('MI_Trim_03')) return 'T3';
 return 'none';
}

// ── Kit geometry ─────────────────────────────────────────────────────────────
export type KitPrim = { slot: string; sheet: Sheet; pos: Float32Array; nor: Float32Array; uv: Float32Array; idx: Uint16Array };
export type KitPiece = { min: number[]; max: number[]; prims: KitPrim[] };
export type BunkerKit = Map<string, KitPiece>;

export function parseBunkerKit(buf: ArrayBuffer): BunkerKit {
 const hl = new DataView(buf).getUint32(0, true);
 const header = JSON.parse(new TextDecoder().decode(new Uint8Array(buf, 4, hl))) as {
  vertices: number; indices: number;
  pieces: Record<string, { min: number[]; max: number[]; prims: { slot: string; v0: number; vn: number; i0: number; in: number }[] }>;
 };
 const nv = header.vertices;
 let o = 4 + hl;
 const P = new Float32Array(buf, o, nv * 3); o += nv * 12;
 const N = new Float32Array(buf, o, nv * 3); o += nv * 12;
 const U = new Float32Array(buf, o, nv * 2); o += nv * 8;
 const I = new Uint16Array(buf, o, header.indices);
 const kit: BunkerKit = new Map();
 for (const [name, p] of Object.entries(header.pieces)) {
  kit.set(name, {
   min: p.min, max: p.max,
   prims: p.prims.map(q => ({
    slot: q.slot, sheet: sheetOf(q.slot),
    pos: P.subarray(q.v0 * 3, (q.v0 + q.vn) * 3), nor: N.subarray(q.v0 * 3, (q.v0 + q.vn) * 3),
    uv: U.subarray(q.v0 * 2, (q.v0 + q.vn) * 2), idx: I.subarray(q.i0, q.i0 + q.in),
   })),
  });
 }
 return kit;
}

export async function loadBunkerKit(base = BUNKER_KIT_BASE): Promise<BunkerKit> {
 const res = await fetch(base + 'kit.bin');
 if (!res.ok) throw new Error(`bunker kit ${res.status}`);
 return parseBunkerKit(await res.arrayBuffer());
}

