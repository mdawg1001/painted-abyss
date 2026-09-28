"""
Step 2 of the bunker light bake, run inside Blender 4.2 (Cycles):

    blender -b --factory-startup -P scripts/bunker-bake/bake.py -- <work-dir> [size] [samples]

Reads <work-dir>/bake-in.bin (export.ts), builds the bunker with its lights and solid props,
unwraps one shared lightmap, bakes indirect (bounced) irradiance and ambient occlusion, and
writes <work-dir>/lit-geometry.bin plus lm_indirect.npy / lm_ao.npy / lm_mask.npy for encode.py.

Only bounced light is baked. Direct light stays real time in the game, so lamps still swing,
flicker and turn red on the relic slam; the lightmap adds what real time lights cannot: light
bouncing off the whitewash, colour bleeding off the painted walls, and occlusion in every corner.

Units: three.js lights are candela with 1/d^decay falloff. A calibration bake measures what
Cycles returns for 1 W at 1 m, so the baked irradiance lands in the same units as three's
direct `irradiance` (E = I cos / d^2) and the shader can simply add it.
"""
import bpy, bmesh, json, math, os, struct, sys, time
import numpy as np

argv = sys.argv[sys.argv.index('--') + 1:]
WORK = argv[0]
SIZE = int(argv[1]) if len(argv) > 1 else 1024      # indirect light (smooth)
AO_SIZE = SIZE * 2                                     # occlusion needs the finer grid
SAMPLES = int(argv[2]) if len(argv) > 2 else 32
AO_SAMPLES = int(argv[3]) if len(argv) > 3 else 16
MATCH_R = 4.0  # decay != 2 lights are matched to Cycles' inverse square at this distance (m)
T0 = time.time()
def log(*a): print(f'[bake {time.time() - T0:6.1f}s]', *a, flush=True)

# three (Y up) -> Blender (Z up)
def to_b(v): return (v[..., 0], -v[..., 2], v[..., 1])
def srgb_to_linear(c): return np.where(c <= .04045, c / 12.92, ((c + .055) / 1.055) ** 2.4)
def hexcol(h):
    h = h.lstrip('#'); return srgb_to_linear(np.array([int(h[i:i + 2], 16) / 255 for i in (0, 2, 4)]))

# ── Read ─────────────────────────────────────────────────────────────────────
raw = open(os.path.join(WORK, 'bake-in.bin'), 'rb').read()
hl = struct.unpack_from('<I', raw, 0)[0]
H = json.loads(raw[4:4 + hl])
off = 4 + hl
def take(dtype, n):
    global off
    a = np.frombuffer(raw, dtype=dtype, count=n, offset=off); off += a.nbytes; return a
meshes = []
for m in H['meshes']:
    n, k = m['vertices'], m['indices']
    rec = dict(m, pos=take('<f4', n * 3).reshape(-1, 3), nor=take('<f4', n * 3).reshape(-1, 3),
               uv=take('<f4', n * 2).reshape(-1, 2), surf=take('<f4', n * 4).reshape(-1, 4), idx=take('<u4', k))
    rec['seen'] = take('u1', ((k // 3 + 3) // 4) * 4)[:k // 3].astype(bool)
    meshes.append(rec)
log(f"{len(meshes)} meshes, {sum(len(m['idx']) for m in meshes) // 3} tris, signature {H['signature']}")

# ── Scene ────────────────────────────────────────────────────────────────────
bpy.ops.wm.read_factory_settings(use_empty=True)
scene = bpy.context.scene
scene.render.engine = 'CYCLES'
scene.cycles.device = 'CPU'
scene.cycles.samples = SAMPLES
scene.cycles.use_denoising = False
scene.cycles.max_bounces = 4
scene.cycles.diffuse_bounces = 3
scene.cycles.glossy_bounces = 0
scene.cycles.transmission_bounces = 0
scene.cycles.transparent_max_bounces = 0
scene.cycles.caustics_reflective = False
scene.cycles.caustics_refractive = False
scene.render.threads_mode = 'AUTO'
world = bpy.data.worlds.new('World'); scene.world = world
world.use_nodes = True
world.node_tree.nodes['Background'].inputs['Strength'].default_value = 0.0
world.light_settings.distance = 1.1  # AO reach (m)

def material_bunker():
    """Diffuse albedo the game paints: the per-vertex tint, whitewash above the dado on painted walls."""
    mat = bpy.data.materials.new('bunker'); mat.use_nodes = True
    nt = mat.node_tree; N = nt.nodes; L = nt.links
    for n in list(N): N.remove(n)
    out = N.new('ShaderNodeOutputMaterial')
    bsdf = N.new('ShaderNodeBsdfDiffuse')
    attr = N.new('ShaderNodeAttribute'); attr.attribute_name = 'surf'
    geo = N.new('ShaderNodeNewGeometry')
    sep = N.new('ShaderNodeSeparateXYZ')
    height = N.new('ShaderNodeMath'); height.operation = 'SUBTRACT'; height.inputs[1].default_value = H['floorY']
    above = N.new('ShaderNodeMath'); above.operation = 'GREATER_THAN'; above.inputs[1].default_value = H['dado']
    paint = N.new('ShaderNodeMath'); paint.operation = 'LESS_THAN'; paint.inputs[1].default_value = .5
    both = N.new('ShaderNodeMath'); both.operation = 'MULTIPLY'
    mix = N.new('ShaderNodeMix'); mix.data_type = 'RGBA'
    ww = hexcol(H['whitewash'])
    mix.inputs['B'].default_value = (*ww, 1)
    L.new(geo.outputs['Position'], sep.inputs[0]); L.new(sep.outputs['Z'], height.inputs[0]); L.new(height.outputs[0], above.inputs[0])
    L.new(attr.outputs['Alpha'], paint.inputs[0]); L.new(above.outputs[0], both.inputs[0]); L.new(paint.outputs[0], both.inputs[1])
    L.new(both.outputs[0], mix.inputs['Factor']); L.new(attr.outputs['Color'], mix.inputs['A'])
    L.new(mix.outputs['Result'], bsdf.inputs['Color']); L.new(bsdf.outputs[0], out.inputs[0])
    return mat

MAT = material_bunker()
GREY = bpy.data.materials.new('occluder'); GREY.use_nodes = True
GREY.node_tree.nodes['Principled BSDF'].inputs['Base Color'].default_value = (.22, .2, .17, 1)
GREY.node_tree.nodes['Principled BSDF'].inputs['Roughness'].default_value = 1

def build(m):
    p = np.stack(to_b(m['pos']), -1).astype(np.float32)
    nrm = np.stack(to_b(m['nor']), -1).astype(np.float32)
    me = bpy.data.meshes.new(f"{m['bucket']}|{m['key']}")
    nv, nt = len(p), len(m['idx']) // 3
    me.vertices.add(nv); me.vertices.foreach_set('co', p.ravel())
    me.loops.add(nt * 3); me.loops.foreach_set('vertex_index', m['idx'].astype(np.int32))
    me.polygons.add(nt)
    me.polygons.foreach_set('loop_start', np.arange(0, nt * 3, 3, dtype=np.int32))
    me.update(calc_edges=True)
    me.validate(clean_customdata=False)
    me.normals_split_custom_set_from_vertices(nrm.tolist())
    uv0 = me.uv_layers.new(name='UV0')
    uv0.data.foreach_set('uv', m['uv'][m['idx']].astype(np.float32).ravel())
    col = me.color_attributes.new('surf', 'FLOAT_COLOR', 'POINT')
    col.data.foreach_set('color', m['surf'].astype(np.float32).ravel())
    me.materials.append(MAT)
    ob = bpy.data.objects.new(me.name, me); scene.collection.objects.link(ob)
    return ob

objs = [build(m) for m in meshes]
lit = [o for o, m in zip(objs, meshes) if m['key'] != 'cable']
log(f'built {len(objs)} objects ({len(lit)} lightmapped)')

for b in H['boxes']:
    c, h = b['c'], b['h']
    bpy.ops.mesh.primitive_cube_add(size=2, location=(c[0], -c[2], c[1]), scale=(h[0], h[2], h[1]))
    bpy.context.active_object.data.materials.append(GREY)

# ── Calibration: what Cycles bakes for 1 W at 1 m ─────────────────────────────
def calibrate():
    bpy.ops.mesh.primitive_plane_add(size=2, location=(1000, 1000, 0))
    plane = bpy.context.active_object
    plane.data.materials.append(MAT)
    plane.data.color_attributes.new('surf', 'FLOAT_COLOR', 'POINT')
    ld = bpy.data.lights.new('cal', 'POINT'); ld.energy = 1; ld.shadow_soft_size = 0
    lo = bpy.data.objects.new('cal', ld); lo.location = (1000, 1000, 1); scene.collection.objects.link(lo)
    img = bpy.data.images.new('cal', 8, 8, float_buffer=True)
    tex = MAT.node_tree.nodes.new('ShaderNodeTexImage'); tex.image = img
    MAT.node_tree.nodes.active = tex
    hide = [o for o in scene.objects if o not in (plane, lo)]
    for o in hide: o.hide_render = True
    bpy.ops.object.select_all(action='DESELECT'); plane.select_set(True); bpy.context.view_layer.objects.active = plane
    scene.cycles.samples = 16
    bpy.ops.object.bake(type='DIFFUSE', pass_filter={'DIRECT'}, margin=0)
    v = np.array(img.pixels[:]).reshape(8, 8, 4)[3:5, 3:5, 0].mean()
    for o in hide: o.hide_render = False
    bpy.data.objects.remove(plane); bpy.data.objects.remove(lo)
    MAT.node_tree.nodes.remove(tex)
    scene.cycles.samples = SAMPLES
    return float(v)

CAL = calibrate()
log(f'calibration: 1 W at 1 m bakes {CAL:.5f}')

# ── Lights ───────────────────────────────────────────────────────────────────
LIGHTS = []
for i, l in enumerate(H['lights']):
    decay, dist = l['decay'], l['distance']
    # Match three's falloff at MATCH_R: I / R^decay * cutoff window  ==  P / R^2 (inverse square).
    window = (max(0, 1 - (MATCH_R / dist) ** 4)) ** 2 if dist > 0 else 1
    power = l['intensity'] * MATCH_R ** (2 - decay) * window
    ld = bpy.data.lights.new(f'L{i}', 'SPOT' if l['type'] == 'spot' else 'POINT')
    ld.energy = power / CAL  # so 1 cd at 1 m bakes exactly 1
    ld.color = tuple(hexcol(l['color']))
    ld.shadow_soft_size = .08
    if l['type'] == 'spot':
        ld.spot_size = 2 * (l.get('angle') or .6)
        ld.spot_blend = l.get('penumbra') or .5
    lo = bpy.data.objects.new(ld.name, ld)
    lo.location = (l['pos'][0], -l['pos'][2], l['pos'][1])
    scene.collection.objects.link(lo)
    LIGHTS.append((lo, bool(l.get('mask'))))
log(f"{len(H['lights'])} lights")

# ── Lightmap UVs: one shared atlas for every lightmapped mesh ───────────────
area = 0.0
for o in lit:
    me = o.data
    lm = me.uv_layers.new(name='LM'); me.uv_layers.active = lm
    a = np.zeros(len(me.polygons)); me.polygons.foreach_get('area', a); area += a.sum()
texels = area and SIZE * SIZE * .62 / area
log(f'lightmapped area {area:.0f} m2 -> about {math.sqrt(texels):.1f} texels/m at {SIZE}^2')
# Faces that look into rock get no space: zero their UVs and leave them unselected.
seen_area = 0.0
for o, m in ((o, m) for o, m in zip(objs, meshes) if m['key'] != 'cable'):
    me = o.data
    me.polygons.foreach_set('select', m['seen'])
    zero = np.zeros(len(me.loops) * 2, np.float32)
    me.uv_layers['LM'].data.foreach_set('uv', zero)
    a = np.zeros(len(me.polygons)); me.polygons.foreach_get('area', a); seen_area += a[m['seen']].sum()
log(f'visible area {seen_area:.0f} m2 -> about {math.sqrt(SIZE * SIZE * .62 / seen_area):.1f} texels/m indirect, {math.sqrt(AO_SIZE * AO_SIZE * .62 / seen_area):.1f} AO')
bpy.ops.object.select_all(action='DESELECT')
for o in lit: o.select_set(True)
bpy.context.view_layer.objects.active = lit[0]
bpy.ops.object.mode_set(mode='EDIT')
bpy.context.tool_settings.mesh_select_mode = (False, False, True)
bpy.ops.uv.smart_project(angle_limit=math.radians(60), island_margin=0.0, area_weight=0.0, correct_aspect=True, scale_to_bounds=False)
log('smart project done')
margin = 3 / SIZE
bpy.ops.uv.pack_islands(udim_source='CLOSEST_UDIM', rotate=True, rotate_method='CARDINAL', scale=True, merge_overlap=False,
                        margin_method='FRACTION', margin=margin, pin=False, shape_method='AABB')
bpy.ops.object.mode_set(mode='OBJECT')
log('packed')

# ── Bake ─────────────────────────────────────────────────────────────────────
def bake(kind, name, size, **kw):
    img = bpy.data.images.new(name, size, size, float_buffer=True, alpha=True)
    img.generated_color = (0, 0, 0, 0)
    tex = MAT.node_tree.nodes.new('ShaderNodeTexImage'); tex.image = img
    MAT.node_tree.nodes.active = tex
    for o in lit: o.data.uv_layers.active = o.data.uv_layers['LM']
    bpy.ops.object.select_all(action='DESELECT')
    for o in lit: o.select_set(True)
    bpy.context.view_layer.objects.active = lit[0]
    bpy.ops.object.bake(type=kind, margin=0, use_clear=False, **kw)
    MAT.node_tree.nodes.remove(tex)
    px = np.empty(size * size * 4, dtype=np.float32); img.pixels.foreach_get(px)
    return px.reshape(size, size, 4)

# Coverage: the bake writes alpha 1 only on texels a triangle covers.
scene.cycles.samples = AO_SAMPLES
aob = bake('AO', 'ao', AO_SIZE)
ao, mask = aob[..., 0], aob[..., 3] > .5
log('AO baked')
# Shadow mask of the fixed point lamps: their direct light with shadows over the same light with
# nothing casting shadows. The game multiplies those lamps by it (their light stays real time).
scene.cycles.samples = AO_SAMPLES
for lo, mask_light in LIGHTS: lo.hide_render = not mask_light
casters = [o for o in scene.objects if o.type == 'MESH']
shad = bake('DIFFUSE', 'direct_shadowed', AO_SIZE, pass_filter={'DIRECT'})[..., :3]
for o in casters: o.visible_shadow = False
free = bake('DIFFUSE', 'direct_free', AO_SIZE, pass_filter={'DIRECT'})[..., :3]
for o in casters: o.visible_shadow = True
for lo, _ in LIGHTS: lo.hide_render = False
np.save(os.path.join(WORK, 'lm_direct_shadowed.npy'), shad.astype(np.float32))
np.save(os.path.join(WORK, 'lm_direct_free.npy'), free.astype(np.float32))
log('shadow mask baked')
scene.cycles.samples = SAMPLES
indb = bake('DIFFUSE', 'indirect', SIZE, pass_filter={'INDIRECT'})
ind, ind_mask = indb[..., :3], indb[..., 3] > .5
np.save(os.path.join(WORK, 'lm_indirect_mask.npy'), ind_mask)
ind = ind  # three units: light power carries 1/CAL
log('indirect baked')
np.save(os.path.join(WORK, 'lm_indirect.npy'), ind.astype(np.float32))
np.save(os.path.join(WORK, 'lm_ao.npy'), ao.astype(np.float32))
np.save(os.path.join(WORK, 'lm_mask.npy'), mask)

# ── Export geometry with lightmap UVs (three space) ─────────────────────────
recs, blobs = [], []
for o, m in zip(objs, meshes):
    me = o.data
    nl = len(me.loops)
    vi = np.empty(nl, np.int32); me.loops.foreach_get('vertex_index', vi)
    co = np.empty(len(me.vertices) * 3, np.float32); me.vertices.foreach_get('co', co); co = co.reshape(-1, 3)
    cn = np.empty(nl * 3, np.float32); me.corner_normals.foreach_get('vector', cn); cn = cn.reshape(-1, 3)
    uv0 = np.empty(nl * 2, np.float32); me.uv_layers['UV0'].data.foreach_get('uv', uv0); uv0 = uv0.reshape(-1, 2)
    if 'LM' in me.uv_layers:
        lmuv = np.empty(nl * 2, np.float32); me.uv_layers['LM'].data.foreach_get('uv', lmuv); lmuv = lmuv.reshape(-1, 2)
    else:
        lmuv = np.zeros((nl, 2), np.float32)
    sf = m['surf'][vi]
    pos = np.stack([co[vi, 0], co[vi, 2], -co[vi, 1]], -1)  # back to three (Y up)
    nor = np.stack([cn[:, 0], cn[:, 2], -cn[:, 1]], -1)
    # Loop order is triangle order (we built one polygon per triangle), so loops map 1:1 to corners.
    rows = np.concatenate([pos, nor, uv0, lmuv, sf], 1).astype(np.float32)
    uniq, inv = np.unique(rows.view([('', np.float32)] * rows.shape[1]).ravel(), return_inverse=True)
    verts = uniq.view(np.float32).reshape(-1, rows.shape[1])
    recs.append({'bucket': m['bucket'], 'key': m['key'], 'lm': m['key'] != 'cable', 'vertices': len(verts), 'indices': nl})
    blobs.append((verts, inv.astype(np.uint32)))
header = {'version': 1, 'signature': H['signature'], 'size': SIZE, 'aoSize': AO_SIZE, 'meshes': recs}
with open(os.path.join(WORK, 'lit-geometry.json'), 'w') as f: json.dump(header, f)
with open(os.path.join(WORK, 'lit-geometry.npz'), 'wb') as f:
    np.savez(f, **{f'v{i}': v for i, (v, _) in enumerate(blobs)}, **{f'i{i}': ix for i, (_, ix) in enumerate(blobs)})
log('exported', sum(r['vertices'] for r in recs), 'vertices')
