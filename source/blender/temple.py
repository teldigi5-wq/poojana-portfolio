"""
The Temple — hero world asset for the portfolio (replaces the copper Gateway).

An ORIGINAL Greek temple interior, built entirely from code so it can be rebuilt and
reviewed: a nave of fluted Ionic columns with entasis, a continuous architrave with a
meander frieze, a coffered ceiling with a skylight, niches with bronze braziers, a
coffered dome with an oculus, a colossal torch-bearing figure on a carved plinth and
smaller figures on pedestals along the aisle. Figures are generic, not copies of any
known statue.

The hall is built from bay-length MODULES (column, entablature, ceiling, wall) repeated
as linked duplicates: the GLB stores each module once and Three.js draws every bay of a
module with one instanced draw call.

Baked light: ambient occlusion is baked with Cycles into vertex colours (R) and a
convexity term for edge wear is computed into (G). The low tier lights the scene with
these plus a couple of cheap lights; medium/high add PBR, real lights and bloom.

Outputs (in <output_dir>):
  export/temple.glb                geometry + baked vertex colours (no textures inside)
  export/temple-marble.webp        tileable statue marble (veins)        1024²
  export/temple-limestone.webp     tileable warm limestone (pores, wear)  512²
  export/temple-floor.webp         one bay of the patterned floor        2048×512
  export/temple-still.webp         Cycles render for reduced motion (desktop framing)
  export/temple-still-mobile.webp  Cycles render for reduced motion (phone framing)
  blend/temple.blend

Run (Blender 5.x, or the `bpy` 5.0 Python module):
  blender --background --python temple.py -- <output_dir> [--no-render] [--samples N]
  python temple.py <output_dir> [--no-render]          (bpy module)

Units: metres. Blender is Z-up with the nave running along +Y; glTF export is Y-up,
so Blender (x, y, z) becomes Three.js (x, z, -y).
"""
import math
import os
import sys

import bpy  # first: the bpy module provides bmesh/mathutils
import bmesh
import numpy as np
from mathutils import Matrix, Vector

# ---------------------------------------------------------------- arguments
argv = sys.argv[sys.argv.index("--") + 1:] if "--" in sys.argv else sys.argv[1:]
flags = [a for a in argv if a.startswith("--")]
positional = [a for a in argv if not a.startswith("--") and not a.lstrip("-").isdigit()]
OUTPUT_DIR = globals().get("OUTPUT_DIR") or (positional[0] if positional else os.path.join(os.path.expanduser("~"), "portfolio-3d"))
RENDER = "--no-render" not in flags
SAMPLES = 96
if "--samples" in argv:
    SAMPLES = int(argv[argv.index("--samples") + 1])
SEED = 7
rng = np.random.default_rng(SEED)

# ---------------------------------------------------------------- dimensions
BAY = 3.4               # column spacing along the nave
BAYS = 9                # column pairs
FAR_FROM = 6            # pairs from here on use the light column LOD (≥ 10 m from the camera)
COL_X = 3.5             # column centre line (each side)
WALL_X = 6.8            # inner face of the side walls
COL_R = 0.45            # lower shaft radius
COL_H = 7.2             # base + shaft + capital
ENT_TOP = 8.9           # top of the cornice / ceiling soffit
NAVE_END = BAYS * BAY   # y where the colonnade ends
STATUE_Y = NAVE_END + 2.4  # the colossal figure stands in the apse
STATUE_SCALE = 5.0      # colossal figure height (m)


# ================================================================ scene setup
def reset_scene():
    scene = bpy.context.scene
    for o in list(scene.objects):
        bpy.data.objects.remove(o, do_unlink=True)
    for block in (bpy.data.meshes, bpy.data.curves, bpy.data.materials, bpy.data.images,
                  bpy.data.cameras, bpy.data.lights, bpy.data.metaballs, bpy.data.worlds):
        for item in list(block):
            if item.users == 0:
                block.remove(item)
    scene.unit_settings.system = "METRIC"
    return scene


def link(obj):
    bpy.context.scene.collection.objects.link(obj)
    return obj


def mesh_object(name, verts, faces, mat=None, smooth_angle=None):
    mesh = bpy.data.meshes.new(name)
    mesh.from_pydata([tuple(v) for v in verts], [], [tuple(f) for f in faces])
    mesh.validate(clean_customdata=False)
    mesh.update()
    obj = link(bpy.data.objects.new(name, mesh))
    if mat:
        mesh.materials.append(mat)
    if smooth_angle is not None:
        smooth(obj, smooth_angle)
    return obj


def select_only(obj):
    for o in bpy.context.scene.objects:
        o.select_set(False)
    obj.select_set(True)
    bpy.context.view_layer.objects.active = obj


def smooth(obj, angle=35):
    select_only(obj)
    try:
        bpy.ops.object.shade_smooth_by_angle(angle=math.radians(angle))
    except Exception:
        bpy.ops.object.shade_smooth()


def join(objects, name):
    """Merge objects into one mesh (one draw call, one module)."""
    objects = [o for o in objects if o is not None]
    for o in bpy.context.scene.objects:
        o.select_set(False)
    for o in objects:
        o.select_set(True)
    bpy.context.view_layer.objects.active = objects[0]
    bpy.ops.object.join()
    obj = bpy.context.view_layer.objects.active
    obj.name = obj.data.name = name
    return obj


def apply_transform(obj):
    select_only(obj)
    bpy.ops.object.transform_apply(location=True, rotation=True, scale=True)


# ================================================================ primitives
def box(name, sx, sy, sz, loc, mat=None, bevel=0.0, segments=1):
    """Axis-aligned box: size (sx, sy, sz), centred at loc (x, y) with its base at loc z."""
    bm = bmesh.new()
    bmesh.ops.create_cube(bm, size=1.0)
    for v in bm.verts:
        v.co = Vector((v.co.x * sx + loc[0], v.co.y * sy + loc[1], (v.co.z + 0.5) * sz + loc[2]))
    if bevel:
        bmesh.ops.bevel(bm, geom=bm.edges[:], offset=bevel, segments=segments, affect="EDGES", profile=0.5)
    mesh = bpy.data.meshes.new(name)
    bm.to_mesh(mesh)
    bm.free()
    obj = link(bpy.data.objects.new(name, mesh))
    if mat:
        mesh.materials.append(mat)
    return obj


def lathe(name, profile, segments=48, mat=None, loc=(0, 0, 0), cap_top=True, cap_bottom=True, scale_xy=(1, 1)):
    """Revolve a (radius, z) profile around Z."""
    verts, faces = [], []
    n = len(profile)
    for i in range(segments):
        a = 2 * math.pi * i / segments
        c, s = math.cos(a), math.sin(a)
        for r, z in profile:
            verts.append((loc[0] + r * c * scale_xy[0], loc[1] + r * s * scale_xy[1], loc[2] + z))
    for i in range(segments):
        i2 = (i + 1) % segments
        for j in range(n - 1):
            faces.append((i * n + j, i2 * n + j, i2 * n + j + 1, i * n + j + 1))
    if cap_bottom:
        verts.append((loc[0], loc[1], loc[2] + profile[0][1]))
        c0 = len(verts) - 1
        for i in range(segments):
            faces.append((c0, ((i + 1) % segments) * n, i * n))
    if cap_top:
        verts.append((loc[0], loc[1], loc[2] + profile[-1][1]))
        c1 = len(verts) - 1
        for i in range(segments):
            faces.append((c1, i * n + n - 1, ((i + 1) % segments) * n + n - 1))
    return mesh_object(name, verts, faces, mat, smooth_angle=50)


def torus_profile(r_center, z_center, radius, steps=8, start=-90, end=90):
    """Half-round moulding profile points (outer half of a torus section)."""
    pts = []
    for k in range(steps + 1):
        a = math.radians(start + (end - start) * k / steps)
        pts.append((r_center + math.cos(a) * radius, z_center + math.sin(a) * radius))
    return pts


def tube_along(name, points, radius, sides=10, mat=None):
    """A round tube through 3D points (used for volutes, torches, spears)."""
    verts, faces = [], []
    pts = [Vector(p) for p in points]
    n = len(pts)
    for i, p in enumerate(pts):
        t = (pts[min(i + 1, n - 1)] - pts[max(i - 1, 0)]).normalized()
        up = Vector((0, 0, 1)) if abs(t.z) < 0.9 else Vector((1, 0, 0))
        a = t.cross(up).normalized()
        b = t.cross(a).normalized()
        r = radius(i / max(1, n - 1)) if callable(radius) else radius
        for k in range(sides):
            ang = 2 * math.pi * k / sides
            verts.append(tuple(p + (a * math.cos(ang) + b * math.sin(ang)) * r))
    for i in range(n - 1):
        for k in range(sides):
            k2 = (k + 1) % sides
            faces.append((i * sides + k, i * sides + k2, (i + 1) * sides + k2, (i + 1) * sides + k))
    verts.append(tuple(pts[0])); c0 = len(verts) - 1
    verts.append(tuple(pts[-1])); c1 = len(verts) - 1
    for k in range(sides):
        faces.append((c0, (k + 1) % sides, k))
        faces.append((c1, (n - 1) * sides + k, (n - 1) * sides + (k + 1) % sides))
    return mesh_object(name, verts, faces, mat, smooth_angle=60)


# ================================================================ textures (numpy, tileable)
def periodic_noise(size, scale, octaves=5, persistence=0.55, seed=0):
    """Tileable fractal noise: band-limited white noise filtered in the frequency domain."""
    r = np.random.default_rng(seed)
    h, w = size
    out = np.zeros((h, w))
    amp, total = 1.0, 0.0
    fy = np.fft.fftfreq(h)[:, None] * h
    fx = np.fft.fftfreq(w)[None, :] * w
    dist = np.sqrt((fx / max(1, w / h)) ** 2 + fy ** 2)
    for o in range(octaves):
        f0 = scale * (2 ** o)
        spectrum = np.exp(-((dist - f0) ** 2) / (2 * (f0 * 0.5) ** 2))
        noise = np.fft.ifft2(np.fft.fft2(r.standard_normal((h, w))) * spectrum).real
        noise /= noise.std() + 1e-9
        out += noise * amp
        total += amp
        amp *= persistence
    out /= total
    return (out - out.min()) / (out.max() - out.min())


def save_image(name, rgb, path, quality=82, alpha=None):
    h, w, _ = rgb.shape
    img = bpy.data.images.new(name, width=w, height=h, alpha=alpha is not None, float_buffer=False)
    a = alpha if alpha is not None else np.ones((h, w))
    px = np.dstack([np.clip(rgb, 0, 1), np.clip(a, 0, 1)])[::-1]  # Blender rows are bottom-up
    img.pixels.foreach_set(px.astype(np.float32).ravel())
    img.filepath_raw = path
    img.file_format = "WEBP"
    scene = bpy.context.scene
    scene.render.image_settings.file_format = "WEBP"
    scene.render.image_settings.quality = quality
    scene.render.image_settings.color_mode = "RGBA" if alpha is not None else "RGB"
    img.save_render(path, scene=scene)
    img.filepath = path
    img.source = "FILE"
    return img


def marble_texture(path):
    """Ivory statuary marble: soft grey veins, faint warm clouds."""
    n = 1024
    yy, xx = np.mgrid[0:n, 0:n] / n
    warp = periodic_noise((n, n), 3, seed=11)
    warp2 = periodic_noise((n, n), 6, seed=12)
    clouds = periodic_noise((n, n), 4, seed=13)
    # Veins: integer frequencies keep the pattern tileable.
    v1 = np.abs(np.sin(2 * np.pi * (2 * xx + 1 * yy + 1.6 * warp + 0.4 * warp2)))
    v2 = np.abs(np.sin(2 * np.pi * (3 * yy - 1 * xx + 1.2 * warp2)))
    veins = np.clip(1 - v1, 0, 1) ** 26 * 0.55 + np.clip(1 - v2, 0, 1) ** 40 * 0.3
    base = np.array([0.86, 0.83, 0.77])
    warm = np.array([0.80, 0.72, 0.62])
    vein = np.array([0.48, 0.47, 0.46])
    rgb = base[None, None] * (1 - 0.35 * clouds[..., None]) + warm[None, None] * 0.35 * clouds[..., None]
    rgb = rgb * (1 - veins[..., None]) + vein[None, None] * veins[..., None]
    rgb *= 0.96 + 0.06 * periodic_noise((n, n), 60, octaves=2, seed=14)[..., None]
    return save_image("TempleMarble", rgb, path, quality=80)


def limestone_texture(path):
    """Warm limestone: mottled tone, fine pores, a few darker weathering streaks."""
    n = 512
    mott = periodic_noise((n, n), 3, seed=21)
    fine = periodic_noise((n, n), 40, octaves=3, seed=22)
    pores = (periodic_noise((n, n), 90, octaves=1, seed=23) > 0.78).astype(float)
    streak = periodic_noise((n, n * 1), 2, octaves=3, seed=24)
    tone = 0.80 + 0.16 * mott + 0.08 * (fine - 0.5) - 0.12 * pores - 0.07 * np.clip(streak - 0.6, 0, 1) * 3
    base = np.array([0.76, 0.66, 0.53])
    rgb = base[None, None] * tone[..., None]
    return save_image("TempleLimestone", rgb, path, quality=80)


def meander_mask(u, v, period, band):
    """Greek-key (meander) band: u along the band, v across it (both metres)."""
    p = (u % period) / period          # 0..1 along one key
    q = v / band                       # 0..1 across the band
    line = 0.11                        # stroke width (fraction of band)
    m = np.zeros_like(u, dtype=bool)
    # Classic single-meander key drawn on a 5x5 grid, then strokes.
    def hseg(x0, x1, y):
        return (p >= x0) & (p <= x1) & (np.abs(q - y) < line / 2)
    def vseg(x, y0, y1):
        return (np.abs(p - x) < line * (band / period) / 2) & (q >= y0) & (q <= y1)
    m |= hseg(0.0, 1.0, 0.05)          # rails
    m |= hseg(0.0, 1.0, 0.95)
    m |= vseg(0.05, 0.05, 0.80)
    m |= hseg(0.05, 0.80, 0.80)
    m |= vseg(0.80, 0.25, 0.80)
    m |= hseg(0.30, 0.80, 0.25)
    m |= vseg(0.30, 0.25, 0.60)
    m |= hseg(0.30, 0.58, 0.60)
    return m


def floor_texture(path):
    """One bay of the floor (x −7..7 m, y 0..BAY m): pale slabs, a central square-and-disc
    pattern in darker stone, meander borders along the aisle, joints and wear."""
    h, w = 512, 2048
    yy, xx = np.mgrid[0:h, 0:w].astype(float)
    x = xx / w * 14.0 - 7.0          # metres across
    y = yy / h * BAY                 # metres along (one bay, tiles seamlessly)
    clouds = periodic_noise((h, w), 6, seed=31)
    fine = periodic_noise((h, w), 70, octaves=2, seed=32)
    ivory = np.array([0.66, 0.60, 0.51])
    warm = np.array([0.22, 0.12, 0.09])      # deep porphyry (copper family, subdued)
    char = np.array([0.10, 0.105, 0.10])     # dark grey-green stone
    grey = np.array([0.36, 0.34, 0.31])
    rgb = np.ones((h, w, 3)) * ivory
    ax = np.abs(x)
    # Central panel: charcoal square with a terracotta disc and a thin ivory ring.
    cy = BAY / 2
    sq = (ax < 1.45) & (np.abs(y - cy) < 1.45)
    rgb[sq] = char
    d = np.sqrt(x ** 2 + (y - cy) ** 2)
    rgb[d < 1.12] = warm
    rgb[np.abs(d - 1.2) < 0.03] = ivory
    # Small charcoal discs at the corners between panels.
    for cx in (-1.85, 1.85):
        for yy0 in (0.0, BAY):
            dd = np.sqrt((x - cx) ** 2 + (y - yy0) ** 2)
            rgb[dd < 0.32] = grey
    # Meander borders along the aisle edge.
    for s in (-1, 1):
        u = y
        v = (s * x) - 2.35
        band = (v >= 0) & (v <= 0.42)
        mm = meander_mask(u, v, BAY / 4, 0.42) & band
        rgb[band] = ivory * 0.93
        rgb[mm] = char
    # Column stylobate strip and side-aisle running bond.
    strip = (ax > 2.95) & (ax < 4.05)
    rgb[strip] = ivory * 0.88
    side = ax >= 4.05
    rgb[side] = ivory * 0.83
    # Slab tone variation (each slab slightly different), then veining and fine grain.
    slab_id = (np.floor((x + 7) / 1.15) * 7 + np.floor(y / 1.7)).astype(int)
    tones = 0.93 + 0.1 * np.random.default_rng(5).random(slab_id.max() + 1)
    rgb *= tones[slab_id][..., None]
    rgb *= (0.92 + 0.12 * clouds)[..., None] * (0.97 + 0.05 * fine)[..., None]
    # Joints: aisle slabs 1.15 x 1.7, side-aisle running bond.
    jx = np.abs(((x + 7) / 1.15) % 1 - 0.5) > 0.5 - 0.006 / 1.15 * 3
    jy = np.abs((y / 1.7) % 1 - 0.5) > 0.5 - 0.006 / 1.7 * 3
    joints = (jx | jy) & ~sq & ~(ax < 2.35) | (np.abs(ax - 2.35) < 0.006) | (np.abs(ax - 2.77) < 0.006) \
        | (np.abs(ax - 2.95) < 0.006) | (np.abs(ax - 4.05) < 0.006)
    rgb[joints] *= 0.55
    # Foot traffic: the centre line is a little polished and darker with use.
    rgb *= (1 - 0.05 * np.exp(-(x / 1.6) ** 2))[..., None]
    # Alpha = roughness (joints and side aisles rougher; polished centre).
    rough = 0.32 + 0.25 * (ax > 2.9) + 0.35 * joints + 0.08 * (fine - 0.5)
    return save_image("TempleFloor", rgb, path, quality=82, alpha=rough)


# ================================================================ materials (Blender render)
def principled(name, base, roughness=0.6, metallic=0.0, emission=None, strength=0.0, subsurface=0.0):
    mat = bpy.data.materials.new(name)
    mat.use_nodes = True
    bsdf = mat.node_tree.nodes.get("Principled BSDF")
    bsdf.inputs["Base Color"].default_value = (*base, 1.0)
    bsdf.inputs["Roughness"].default_value = roughness
    bsdf.inputs["Metallic"].default_value = metallic
    if subsurface:
        bsdf.inputs["Subsurface Weight"].default_value = subsurface
        bsdf.inputs["Subsurface Radius"].default_value = (0.4, 0.3, 0.2)
        bsdf.inputs["Subsurface Scale"].default_value = 0.03
    if emission is not None:
        bsdf.inputs["Emission Color"].default_value = (*emission, 1.0)
        bsdf.inputs["Emission Strength"].default_value = strength
    return mat


def textured(mat, image, box_blend=0.25, scale=1.0, uv=False, rough_from_alpha=False, wear=False):
    """Box-projected (triplanar) image for the Blender render; Three.js does the same in a shader."""
    nt = mat.node_tree
    bsdf = nt.nodes.get("Principled BSDF")
    tex = nt.nodes.new("ShaderNodeTexImage")
    tex.image = image
    tex.extension = "REPEAT"
    coord = nt.nodes.new("ShaderNodeTexCoord")
    mapping = nt.nodes.new("ShaderNodeMapping")
    if uv:
        nt.links.new(coord.outputs["UV"], mapping.inputs["Vector"])
    else:
        tex.projection = "BOX"
        tex.projection_blend = box_blend
        nt.links.new(coord.outputs["Object"], mapping.inputs["Vector"])
        mapping.inputs["Scale"].default_value = (scale, scale, scale)
    nt.links.new(mapping.outputs["Vector"], tex.inputs["Vector"])
    if wear:
        # Edge wear and chips: convex arrises (pointiness) are paler and rougher, broken up by
        # noise into irregular chips; a fine bump keeps flat faces from looking like plastic.
        geo = nt.nodes.new("ShaderNodeNewGeometry")
        bevel = nt.nodes.new("ShaderNodeBevel")
        bevel.inputs["Radius"].default_value = 0.025
        dot = nt.nodes.new("ShaderNodeVectorMath"); dot.operation = "DOT_PRODUCT"
        nt.links.new(bevel.outputs["Normal"], dot.inputs[0])
        nt.links.new(geo.outputs["Normal"], dot.inputs[1])
        ramp = nt.nodes.new("ShaderNodeValToRGB")
        ramp.color_ramp.elements[0].position = 0.9      # dot = 1 on flat faces, < 1 near edges
        ramp.color_ramp.elements[0].color = (1, 1, 1, 1)
        ramp.color_ramp.elements[1].position = 0.985
        ramp.color_ramp.elements[1].color = (0, 0, 0, 1)
        noise = nt.nodes.new("ShaderNodeTexNoise")
        noise.inputs["Scale"].default_value = 28.0
        noise.inputs["Detail"].default_value = 6.0
        chips = nt.nodes.new("ShaderNodeMath"); chips.operation = "MULTIPLY"
        gate = nt.nodes.new("ShaderNodeMath"); gate.operation = "GREATER_THAN"; gate.inputs[1].default_value = 0.45
        nt.links.new(dot.outputs["Value"], ramp.inputs["Fac"])
        nt.links.new(noise.outputs["Fac"], gate.inputs[0])
        nt.links.new(ramp.outputs["Color"], chips.inputs[0])
        nt.links.new(gate.outputs["Value"], chips.inputs[1])
        mix = nt.nodes.new("ShaderNodeMix"); mix.data_type = "RGBA"; mix.blend_type = "MIX"
        mix.inputs["B"].default_value = (0.86, 0.79, 0.68, 1.0)
        nt.links.new(chips.outputs["Value"], mix.inputs["Factor"])
        nt.links.new(tex.outputs["Color"], mix.inputs["A"])
        nt.links.new(mix.outputs["Result"], bsdf.inputs["Base Color"])
        bump = nt.nodes.new("ShaderNodeBump")
        bump.inputs["Strength"].default_value = 0.25
        bump.inputs["Distance"].default_value = 0.004
        nt.links.new(noise.outputs["Fac"], bump.inputs["Height"])
        nt.links.new(bump.outputs["Normal"], bsdf.inputs["Normal"])
    else:
        nt.links.new(tex.outputs["Color"], bsdf.inputs["Base Color"])
    if rough_from_alpha:
        nt.links.new(tex.outputs["Alpha"], bsdf.inputs["Roughness"])
    return mat


# ================================================================ architecture
def flute_radius(theta, r, flutes=24, depth=0.075, fillet=0.16):
    """Fluted section: concave flutes separated by narrow flat fillets."""
    u = (theta / (2 * math.pi) * flutes) % 1.0
    if u < fillet:
        return r
    w = (u - fillet) / (1 - fillet)
    return r * (1 - depth * math.sin(math.pi * w) ** 0.8)


def column_shaft(name, mat, height, r0, r1, z0, per_flute=4, ring_steps=10):
    """Fluted shaft with entasis (straight lower third, then a gentle convex taper) and
    apophyge flares at both ends where the flutes die out."""
    around = 24 * per_flute
    rings = sorted(set([k / ring_steps for k in range(ring_steps + 1)] + [0.006, 0.02, 0.98, 0.994]))
    verts, faces = [], []
    for t in rings:
        z = z0 + t * height
        taper = max(0.0, (t - 0.3) / 0.7)
        r = r0 - (r0 - r1) * (taper ** 1.35)
        flare = 0.06 * r0 * math.exp(-t / 0.012) + 0.05 * r1 * math.exp(-(1 - t) / 0.012)
        flute_fade = min(1.0, t / 0.035, (1 - t) / 0.035)
        for i in range(around):
            th = 2 * math.pi * i / around
            rr = r + flare
            if flute_fade > 0:
                rr = rr - (rr - flute_radius(th + math.pi / around, rr, fillet=1.0 / per_flute)) * max(0.0, flute_fade)
            verts.append((rr * math.cos(th), rr * math.sin(th), z))
    for j in range(len(rings) - 1):
        for i in range(around):
            i2 = (i + 1) % around
            faces.append((j * around + i, j * around + i2, (j + 1) * around + i2, (j + 1) * around + i))
    return mesh_object(name, verts, faces, mat, smooth_angle=48)


def volute_points(cx, cy, cz, facing, turns=2.6, r_out=0.17, r_in=0.03, steps=28):
    """An Ionic volute spiral in the plane facing ±X, around (cy, cz)."""
    pts = []
    for k in range(steps + 1):
        t = k / steps
        a = -math.pi / 2 + t * turns * 2 * math.pi
        r = r_out * (1 - t) + r_in * t
        pts.append((cx + facing * 0.012 * t, cy + math.cos(a) * r * (1 if cy > 0 else -1), cz + math.sin(a) * r))
    return pts


def ionic_capital(stone, z, segs=32, vsteps=28, vsides=6):
    """Echinus, bolsters with volutes facing the aisle (±X), and a square abacus."""
    parts = []
    parts.append(lathe("Echinus", [(0.0, 0.0), (0.395, 0.0)] + torus_profile(0.395, 0.035, 0.035, 4, -90, 90)[1:]
                       + [(0.40, 0.07), (0.47, 0.14), (0.48, 0.17), (0.0, 0.17)], segs, stone, loc=(0, 0, z)))
    # Bolster block: a cushion spanning the column, rolled at both ends (Y) into volutes.
    cushion = box("Cushion", 0.62, 0.86, 0.16, (0, 0, z + 0.15), stone, bevel=0.02, segments=2)
    parts.append(cushion)
    for side in (-1, 1):
        roll = tube_along("Roll", [(-0.31, side * 0.43, z + 0.17), (0.31, side * 0.43, z + 0.17)],
                          lambda t: 0.16 - 0.02 * math.sin(math.pi * t) ** 2, sides=12, mat=stone)
        parts.append(roll)
        for facing in (-1, 1):
            spiral = tube_along("Volute", volute_points(facing * 0.315, side * 0.43, z + 0.17, facing, steps=vsteps),
                                lambda t: 0.022 * (1 - 0.5 * t), sides=vsides, mat=stone)
            parts.append(spiral)
            eye = lathe("VoluteEye", [(0.0, 0.0), (0.035, 0.0), (0.035, 0.012), (0.0, 0.02)], 8, stone)
            eye.rotation_euler = (0, math.radians(90 * facing), 0)
            eye.location = (facing * 0.322, side * 0.43, z + 0.17 + 0.0)
            apply_transform(eye)
            parts.append(eye)
    parts.append(box("Abacus", 0.98, 0.98, 0.075, (0, 0, z + 0.31), stone, bevel=0.015, segments=2))
    return parts


def column_module(stone, far=False):
    """far=True builds the distant LOD (last three pairs): fewer flute samples, rings and segments."""
    segs = 20 if far else 32
    base_profile = ([(0.0, 0.0), (0.62, 0.0), (0.62, 0.13)] +
                    torus_profile(0.56, 0.205, 0.075, 4 if far else 6, -90, 90) +
                    [(0.50, 0.29), (0.48, 0.31), (0.51, 0.33)] +
                    torus_profile(0.49, 0.37, 0.045, 3 if far else 4, -90, 90) +
                    [(0.47, 0.42), (0.0, 0.42)])
    plinth = box("Plinth", 1.28, 1.28, 0.16, (0, 0, 0), stone, bevel=0.012, segments=2)
    base = lathe("Base", base_profile[3:], segs, stone, loc=(0, 0, 0.0), cap_bottom=True)
    shaft_h = COL_H - 0.42 - 0.40
    shaft = column_shaft("Shaft", stone, shaft_h, COL_R, COL_R * 0.84, 0.42,
                         per_flute=2 if far else 4, ring_steps=6 if far else 10)
    neck_z = 0.42 + shaft_h
    astragal = lathe("Astragal", [(0.0, 0.0)] + torus_profile(COL_R * 0.84 + 0.01, 0.025, 0.025, 4) + [(0.0, 0.05)],
                     segs, stone, loc=(0, 0, neck_z - 0.04))
    cap = ionic_capital(stone, neck_z + 0.0, segs=segs, vsteps=14 if far else 28, vsides=4 if far else 6)
    col = join([plinth, base, shaft, astragal] + cap, "ColumnFar" if far else "Column")
    return col


def meander_relief(name, mat, length, height, x_face, z0, depth=0.035, period=0.62):
    """Raised meander along Y on a vertical face at x_face (facing -X)."""
    strokes = []
    w = 0.045
    # Key strokes in (u, v) unit cell coordinates: u along, v up.
    cell = [((0.0, 0.08), (1.0, 0.08)), ((0.0, 0.92), (1.0, 0.92)),
            ((0.08, 0.08), (0.08, 0.78)), ((0.08, 0.78), (0.78, 0.78)), ((0.78, 0.78), (0.78, 0.28)),
            ((0.78, 0.28), (0.32, 0.28)), ((0.32, 0.28), (0.32, 0.56)), ((0.32, 0.56), (0.56, 0.56))]
    n = int(round(length / period))
    period = length / n
    verts, faces = [], []
    for c in range(n):
        for (u0, v0), (u1, v1) in cell:
            ya, yb = sorted([u0 * period, u1 * period])
            za, zb = sorted([v0 * height, v1 * height])
            ya -= w / 2 if ya != yb or True else 0
            yb += w / 2
            if za == zb:
                za -= w / 2; zb += w / 2
            else:
                za -= w / 2; zb += w / 2
            if u0 == u1:
                ya, yb = u0 * period - w / 2, u0 * period + w / 2
            y0 = -length / 2 + c * period
            b = len(verts)
            for (yy, zz) in ((ya, za), (yb, za), (yb, zb), (ya, zb)):
                verts.append((x_face, y0 + yy, z0 + zz))
                verts.append((x_face - depth, y0 + yy, z0 + zz))
            # 4 side faces + front face (back hidden against the frieze)
            q = [b + 2 * i for i in range(4)]
            faces.append((q[0] + 1, q[1] + 1, q[2] + 1, q[3] + 1))
            for i in range(4):
                a0, a1 = q[i], q[(i + 1) % 4]
                faces.append((a0, a1, a1 + 1, a0 + 1))
    return mesh_object(name, verts, faces, mat, smooth_angle=30)


def entablature_module(stone):
    """One bay of architrave (three fasciae), meander frieze, dentils and cornice, for the
    right-hand colonnade; the inner face (towards the aisle) is at x = COL_X − 0.5."""
    L = BAY
    z = COL_H + 0.075 + 0.31 - 0.31  # top of abacus ≈ COL_H
    z = COL_H
    inner = COL_X - 0.5
    parts = []
    # Architrave: three stepped fasciae, each projecting a little more.
    fz = z
    for k, (hgt, proj) in enumerate(((0.18, 0.0), (0.2, 0.025), (0.22, 0.05))):
        parts.append(box(f"Fascia{k}", 1.0 + 2 * proj, L, hgt, (COL_X, 0, fz), stone))
        fz += hgt
    parts.append(box("ArchCrown", 1.16, L, 0.06, (COL_X, 0, fz), stone, bevel=0.01))
    fz += 0.06
    # Frieze with a raised meander on both faces.
    frieze_h = 0.52
    parts.append(box("Frieze", 1.0, L, frieze_h, (COL_X, 0, fz), stone))
    parts.append(meander_relief("MeanderIn", stone, L, frieze_h * 0.74, inner, fz + frieze_h * 0.13))
    out = meander_relief("MeanderOut", stone, L, frieze_h * 0.74, inner, fz + frieze_h * 0.13)
    out.scale = (-1, 1, 1)
    out.location = (2 * COL_X, 0, 0)
    apply_transform(out)
    parts.append(out)
    fz += frieze_h
    # Dentils under the cornice.
    parts.append(box("DentilBand", 1.18, L, 0.04, (COL_X, 0, fz), stone))
    n = int(L / 0.17)
    for i in range(n):
        yy = -L / 2 + (i + 0.5) * L / n
        for x in (inner - 0.06, inner + 1.06):
            parts.append(box("Dentil", 0.09, 0.09, 0.13, (x, yy, fz + 0.04), stone))
    fz += 0.17
    # Cornice: a corona with a cyma on top.
    parts.append(box("Corona", 1.42, L, 0.16, (COL_X, 0, fz), stone, bevel=0.01))
    fz += 0.16
    parts.append(box("Cyma", 1.52, L, 0.07, (COL_X, 0, fz), stone, bevel=0.03, segments=3))
    fz += 0.07
    ent = join(parts, "Entablature")
    return ent, fz


def vault_module(stone, glass, spring_z, skylight=False):
    """One bay of a coffered barrel vault spanning the nave (x −3..3), springing just above
    the cornice. The skylight bay glazes its upper coffers: cool daylight pours in."""
    R = COL_X - 0.5
    L = BAY

    def point(u, v):
        a = math.pi * u
        return Vector((-R * math.cos(a), -L / 2 + L * v, spring_z + R * math.sin(a))), None
    bm_point = point
    def outward(face):
        c = face.calc_center_median()
        return Vector((c.x, 0, c.z - spring_z)).normalized()

    cols, rows = 9, 2
    bm = bmesh.new()
    grid = [[bm.verts.new(bm_point(i / cols, j / rows)[0]) for i in range(cols + 1)] for j in range(rows + 1)]
    faces, glazed = [], []
    for j in range(rows):
        for i in range(cols):
            f = bm.faces.new((grid[j][i], grid[j][i + 1], grid[j + 1][i + 1], grid[j + 1][i]))
            (glazed if skylight and 3 <= i <= 5 else faces).append(f)
    bmesh.ops.inset_individual(bm, faces=faces + glazed, thickness=0.11, depth=0.0)
    for f in faces + glazed:
        n = outward(f)
        for v in f.verts:
            v.co += n * (0.22 if f in faces else 0.32)
        if f in glazed:
            f.material_index = 1
    # Second, smaller step inside each coffer for depth.
    bmesh.ops.inset_individual(bm, faces=faces, thickness=0.07, depth=0.0)
    for f in faces:
        n = outward(f)
        for v in f.verts:
            v.co += n * 0.1
    # Spring course (a small moulding) along both sides.
    mesh = bpy.data.meshes.new("Vault")
    bm.to_mesh(mesh)
    bm.free()
    obj = link(bpy.data.objects.new("Vault", mesh))
    obj.data.materials.append(stone)
    obj.data.materials.append(glass)
    select_only(obj)
    bpy.ops.object.mode_set(mode="EDIT")
    bpy.ops.mesh.select_all(action="SELECT")
    bpy.ops.mesh.normals_make_consistent(inside=True)
    bpy.ops.object.mode_set(mode="OBJECT")
    parts = [obj]
    # Rosettes in each stone coffer.
    for j in range(rows):
        for i in range(cols):
            if skylight and 3 <= i <= 5:
                continue
            u, v = (i + 0.5) / cols, (j + 0.5) / rows
            c, _ = point(u, v)
            n = Vector((c.x, 0, c.z - spring_z)).normalized()
            ros = lathe("Rosette", [(0.0, 0.0), (0.08, 0.0), (0.1, 0.03), (0.06, 0.055), (0.0, 0.065)], 12, stone)
            ros.rotation_euler = Vector((0, 0, -1)).rotation_difference(-n).to_euler()
            ros.location = c + n * 0.32
            apply_transform(ros)
            parts.append(ros)
    # Spring course and the flat aisle soffits beside the vault.
    for s in (-1, 1):
        parts.append(box("Spring", 0.3, L, 0.16, (s * (R + 0.1), 0, spring_z - 0.16), stone, bevel=0.02))
        parts.append(box("AisleSoffit", WALL_X - 3.9, L, 0.3, (s * (3.9 + (WALL_X - 3.9) / 2), 0, spring_z - 0.3), stone))
        parts.append(box("Haunch", 0.9, L, R * 0.75, (s * (R + 0.45), 0, spring_z), stone))
    vault = join(parts, "VaultSky" if skylight else "Vault")
    smooth(vault, 30)
    return vault


def wall_module(stone, bronze, niche=True):
    """Right-hand side wall for one bay (x = WALL_X), with a pilaster behind the column and
    optionally an arched niche holding a bronze brazier."""
    L = BAY
    parts = []
    t = 0.5
    x = WALL_X + t / 2
    top = ENT_TOP + 0.3
    if niche:
        nw, nz0, nz1 = 1.5, 0.9, 3.9
        # Wall around the niche opening.
        parts.append(box("WallLow", t, L, nz0, (x, 0, 0), stone))
        parts.append(box("WallHigh", t, L, top - nz1, (x, 0, nz1), stone))
        for s in (-1, 1):
            parts.append(box("WallSide", t, (L - nw) / 2, nz1 - nz0, (x, s * (nw / 2 + (L - nw) / 4), nz0), stone))
        # Niche recess with a semicircular head (stepped approximation, small) and a sill.
        parts.append(box("NicheBack", 0.2, nw, nz1 - nz0, (x + t / 2 + 0.1, 0, nz0), stone))
        for s in (-1, 1):
            parts.append(box("NicheJamb", 0.5, 0.06, nz1 - nz0, (x + 0.2, s * (nw / 2 + 0.03), nz0), stone))
        parts.append(box("NicheTop", 0.5, nw + 0.12, 0.06, (x + 0.2, 0, nz1 - 0.06), stone))
        parts.append(box("Sill", 0.75, nw + 0.3, 0.1, (x - 0.12, 0, nz0 - 0.1), stone, bevel=0.015))
        # A small pediment cornice over the niche.
        parts.append(box("NicheCornice", 0.22, nw + 0.5, 0.12, (x - t / 2 - 0.08, 0, nz1 + 0.18), stone, bevel=0.02))
        # Bronze brazier: tripod bowl on the sill.
        bz = nz0
        bowl = lathe("BrazierBowl", [(0.0, 0.0), (0.06, 0.0), (0.22, 0.12), (0.3, 0.26), (0.31, 0.3), (0.27, 0.3), (0.2, 0.16), (0.0, 0.08)],
                     28, bronze, loc=(x - 0.05, 0, bz + 0.55))
        stem = lathe("BrazierStem", [(0.0, 0.0), (0.16, 0.0), (0.16, 0.03), (0.05, 0.08), (0.035, 0.45), (0.07, 0.55), (0.0, 0.56)],
                     20, bronze, loc=(x - 0.05, 0, bz))
        parts += [bowl, stem]
    else:
        parts.append(box("Wall", t, L, top, (x, 0, 0), stone))
    # Pilaster at the bay boundary (behind the column) with a simple base and capital.
    for y in (-L / 2,):
        parts.append(box("Pilaster", 0.18, 0.8, COL_H, (WALL_X - 0.09, y + 0.4 if False else y, 0), stone))
        parts.append(box("PilBase", 0.26, 0.96, 0.32, (WALL_X - 0.13, y, 0), stone, bevel=0.02))
        parts.append(box("PilCap", 0.28, 0.98, 0.26, (WALL_X - 0.14, y, COL_H - 0.26), stone, bevel=0.02))
    # Dado moulding running along the wall.
    parts.append(box("Dado", 0.08, L, 0.08, (WALL_X - 0.04, 0, 0.82), stone, bevel=0.02))
    parts.append(box("Skirting", 0.06, L, 0.22, (WALL_X - 0.03, 0, 0), stone))
    name = "WallNiche" if niche else "WallPlain"
    return join(parts, name)


def flame_mesh(name, mat, loc, scale=1.0):
    """A teardrop flame card set (crossed) — emissive; Three.js animates it in a shader."""
    prof = [(0.0, 0.0), (0.09, 0.05), (0.13, 0.16), (0.1, 0.3), (0.05, 0.44), (0.0, 0.55)]
    prof = [(r * scale, z * scale) for r, z in prof]
    return lathe(name, prof, 12, mat, loc=loc)


# ================================================================ figures (original)
def metaball_figure(name, mat, pose="torch", height=1.0, head=True):
    """An original draped classical figure built from metaballs (body) plus a lathed,
    fold-displaced robe. pose: 'torch' (right arm raised), 'vessel' (jar on shoulder),
    'offering' (a shallow bowl held forward). All figures are draped."""
    mb = bpy.data.metaballs.new(name + "Meta")
    mb.resolution = mb.render_resolution = 0.011 if height > 3 else 0.016
    mb.threshold = 0.6
    obj = link(bpy.data.objects.new(name + "Meta", mb))

    def ball(p, r, scale=(1, 1, 1)):
        e = mb.elements.new()
        e.type = "ELLIPSOID"
        e.co = p
        e.radius = r
        e.size_x, e.size_y, e.size_z = scale
        e.stiffness = 2.0

    def capsule(a, b, r):
        a, b = Vector(a), Vector(b)
        d = b - a
        e = mb.elements.new()
        e.type = "CAPSULE"
        e.co = (a + b) / 2
        e.radius = r
        e.size_x = d.length / 2
        e.rotation = Vector((1, 0, 0)).rotation_difference(d.normalized())
        e.stiffness = 2.0

    male = False   # every figure is draped: cloth reads as marble far better than procedural anatomy
    # Head: cranium, jaw, hair mass and (for the goddess) a low bun. head=False leaves the
    # neck open for a scanned head (temple_photoreal.py mounts a CC0 marble bust there).
    if not head:
        ball = (lambda real: (lambda p, r, scale=(1, 1, 1): None if p[2] > 0.84 else real(p, r, scale)))(ball)
    ball((0, -0.005, 0.93), 0.085, (0.74, 0.84, 1.0))
    ball((0, -0.03, 0.893), 0.05, (0.78, 0.8, 0.9))
    ball((0, -0.072, 0.922), 0.022, (0.6, 1.0, 1.3))        # nose: a shadow line at distance
    ball((0, 0.02, 0.952), 0.084, (0.84, 0.9, 0.82))
    if not male:
        ball((0, 0.075, 0.922), 0.056)
        ball((0, 0.06, 0.962), 0.05, (1.1, 0.8, 0.6))
    if head:
        capsule((0, 0.0, 0.83), (0, 0.006, 0.885), 0.05)
    # Torso masses that blend into one body.
    ball((0, 0.012, 0.818), 0.14, (1.25 if male else 1.15, 0.5, 0.45))       # trapezius / shoulder line
    ball((0, 0, 0.75), 0.15, (1.08 if male else 1.0, 0.6, 0.85))            # chest
    if not male:
        for sx in (-1, 1):
            ball((sx * 0.05, -0.058, 0.742), 0.06)
    ball((0, 0, 0.645), 0.12, (0.9 if male else 0.85, 0.6, 0.9))            # waist
    ball((0, 0, 0.55), 0.16, (1.05, 0.72, 0.7))                             # hips
    for sx in (-1, 1):
        ball((sx * 0.13, 0, 0.80), 0.066)                                    # deltoids
    # Arms.
    R, Lf = (1, -1)
    if pose == "torch":
        capsule((0.12, 0, 0.8), (0.17, -0.01, 0.93), 0.050)
        capsule((0.17, -0.01, 0.93), (0.16, -0.02, 1.06), 0.042)
        ball((0.16, -0.02, 1.075), 0.041)
        capsule((-0.12, 0, 0.8), (-0.16, 0.01, 0.65), 0.050)
        capsule((-0.16, 0.01, 0.65), (-0.12, -0.08, 0.57), 0.042)
        ball((-0.11, -0.1, 0.565), 0.038)
    elif pose == "vessel":
        capsule((0.12, 0, 0.8), (0.18, 0.0, 0.88), 0.049)
        capsule((0.18, 0.0, 0.88), (0.12, 0.02, 0.98), 0.042)
        ball((0.11, 0.03, 0.99), 0.041)
        capsule((-0.12, 0, 0.8), (-0.15, 0.0, 0.64), 0.049)
        capsule((-0.15, 0.0, 0.64), (-0.15, -0.02, 0.5), 0.042)
        ball((-0.15, -0.02, 0.49), 0.041)
    elif pose == "rest":   # both arms down; the right hand gathers the drapery at the hip
        capsule((0.12, 0, 0.8), (0.15, 0.0, 0.64), 0.05)
        capsule((0.15, 0.0, 0.64), (0.13, -0.05, 0.53), 0.042)
        ball((0.12, -0.06, 0.52), 0.04)
        capsule((-0.12, 0, 0.8), (-0.15, 0.01, 0.64), 0.05)
        capsule((-0.15, 0.01, 0.64), (-0.15, 0.0, 0.5), 0.042)
        ball((-0.15, 0.0, 0.49), 0.04)
    else:  # offering: right forearm forward holding a shallow bowl, left arm relaxed
        capsule((0.12, 0, 0.8), (0.16, -0.02, 0.66), 0.05)
        capsule((0.16, -0.02, 0.66), (0.12, -0.15, 0.62), 0.042)
        ball((0.11, -0.17, 0.62), 0.04)
        capsule((-0.12, 0, 0.8), (-0.15, 0.01, 0.64), 0.05)
        capsule((-0.15, 0.01, 0.64), (-0.14, -0.01, 0.5), 0.042)
        ball((-0.14, -0.01, 0.49), 0.04)
    select_only(obj)
    bpy.ops.object.convert(target="MESH")
    body = bpy.context.view_layer.objects.active
    body.name = name + "Body"
    body.data.materials.clear()
    body.data.materials.append(mat)
    parts = [body]

    # Robe: a lathed skirt displaced into deep vertical folds, longer at the back.
    sides, rings = 96, 30
    top = 0.62 if not male else 0.58
    hem = 0.0 if not male else 0.36
    verts, faces = [], []
    folds = 17
    for j in range(rings):
        t = j / (rings - 1)               # 0 hem → 1 waist
        z = hem + (top - hem) * t
        if male:
            r = 0.13 - 0.02 * t
        else:
            r = 0.165 * (1 - t) ** 1.2 + 0.105 * (1 - (1 - t) ** 1.2) + 0.02 * math.sin(math.pi * t) * (1 - t)
        # Contrapposto: the free (left) knee pushes the cloth forward.
        knee = math.exp(-((z - 0.3) / 0.12) ** 2) if not male else 0
        for i in range(sides):
            th = 2 * math.pi * i / sides
            amp = (0.016 + 0.022 * (1 - t)) * (0.6 + 0.4 * math.sin(th * 3 + 1.3))
            fold = amp * math.sin(folds * th + 1.7 * math.sin(th * 2 + t * 2.5) + 0.8 * t)
            rr = r + fold
            x = rr * math.cos(th) * 1.08
            y = rr * math.sin(th) * 0.8
            if not male:
                y -= knee * 0.045 * max(0.0, -math.sin(th)) * max(0.0, -math.cos(th) + 0.3)
            zz = z
            if j == 0:
                zz = z + 0.012 * math.sin(th * 5) + (0.02 * max(0.0, math.sin(th)))
            verts.append((x, y, zz))
    for j in range(rings - 1):
        for i in range(sides):
            i2 = (i + 1) % sides
            faces.append((j * sides + i, j * sides + i2, (j + 1) * sides + i2, (j + 1) * sides + i))
    robe = mesh_object(name + "Robe", verts, faces, mat, smooth_angle=70)
    sol = robe.modifiers.new("Solid", "SOLIDIFY")
    sol.thickness = 0.008
    parts.append(robe)

    if not male:
        # Overfold (apoptygma): hangs from under the arms to the hips, follows the body, its
        # hem dipping at the sides; then a himation sash crosses the torso diagonally.
        v2, f2 = [], []
        r2 = 9
        for j in range(r2):
            t = j / (r2 - 1)                       # 0 hem → 1 top
            for i in range(sides):
                th = 2 * math.pi * i / sides
                hem = 0.5 - 0.065 * abs(math.cos(th)) + 0.012 * math.sin(th * 7)
                z = hem + (0.79 - hem) * t
                r = 0.158 - 0.05 * t + 0.012 * math.sin(math.pi * t) + 0.02 * (1 - t) ** 3
                fold = (0.014 * (1 - t) ** 1.5 + 0.003) * math.sin(15 * th + 0.6 + 0.8 * t)
                v2.append(((r + fold) * math.cos(th) * 1.05, (r + fold) * math.sin(th) * 0.7, z))
        for j in range(r2 - 1):
            for i in range(sides):
                i2 = (i + 1) % sides
                f2.append((j * sides + i, j * sides + i2, (j + 1) * sides + i2, (j + 1) * sides + i))
        over = mesh_object(name + "Overfold", v2, f2, mat, smooth_angle=70)
        over.modifiers.new("Solid", "SOLIDIFY").thickness = 0.006
        parts.append(over)
        sash = tube_along(name + "Sash", [(-0.14, 0.0, 0.84), (-0.08, -0.085, 0.78), (0.0, -0.105, 0.70), (0.08, -0.1, 0.63),
                                          (0.15, -0.07, 0.58), (0.18, 0.0, 0.56), (0.13, 0.09, 0.61), (0.02, 0.1, 0.71), (-0.1, 0.07, 0.8),
                                          (-0.15, 0.02, 0.85)],
                          lambda t: 0.017 + 0.009 * math.sin(math.pi * t), sides=10, mat=mat)
        parts.append(sash)
    else:
        cloak = tube_along(name + "Cloak", [(-0.13, 0.02, 0.83), (-0.16, 0.05, 0.7), (-0.18, 0.06, 0.55), (-0.17, 0.05, 0.42)],
                           lambda t: 0.035 + 0.02 * t, sides=10, mat=mat)
        parts.append(cloak)

    # Attributes.
    if pose == "torch":
        stick = tube_along(name + "Torch", [(0.16, -0.02, 0.98), (0.16, -0.02, 1.16)], 0.012, 8, mat)
        cup = lathe(name + "TorchCup", [(0.0, 0.0), (0.015, 0.0), (0.04, 0.035), (0.042, 0.045), (0.0, 0.03)], 16, mat,
                    loc=(0.16, -0.02, 1.15))
        parts += [stick, cup]
    elif pose == "vessel":
        jar = lathe(name + "Jar", [(0.0, 0.0), (0.03, 0.0), (0.06, 0.04), (0.065, 0.08), (0.04, 0.12), (0.025, 0.14), (0.035, 0.155), (0.0, 0.155)],
                    20, mat, loc=(0.09, 0.05, 0.96))
        jar.rotation_euler = (0.2, -0.5, 0)
        parts.append(jar)
    elif pose == "offering":
        bowl = lathe(name + "Bowl", [(0.0, 0.0), (0.03, 0.0), (0.075, 0.025), (0.08, 0.03), (0.0, 0.012)], 20, mat,
                     loc=(0.11, -0.19, 0.645))
        parts.append(bowl)

    # Sculpted base the figure is carved with.
    parts.append(lathe(name + "Base", [(0.0, 0.0), (0.22, 0.0), (0.22, 0.035), (0.2, 0.045), (0.0, 0.045)], 32, mat, loc=(0, 0, -0.04)))
    for p in parts:
        for m in list(p.modifiers):
            select_only(p)
            bpy.ops.object.modifier_apply(modifier=m.name)
    fig = join(parts, name)
    fig.scale = (height, height, height)
    apply_transform(fig)
    # Merge metaball seams and keep the mesh lean.
    dec = fig.modifiers.new("Lean", "DECIMATE")
    dec.ratio = 0.4 if height > 3 else 0.2
    select_only(fig)
    bpy.ops.object.modifier_apply(modifier="Lean")
    smooth(fig, 70)
    return fig


def statue_plinth(stone, bronze, y):
    """The carved plinth under the colossal figure: base mouldings, a frieze band with
    a bronze meander inlay, and a cornice."""
    parts = []
    w, d = 3.0, 2.2
    parts.append(box("PlinthFoot", w + 0.5, d + 0.5, 0.25, (0, y, 0), stone, bevel=0.02))
    parts.append(box("PlinthTorus", w + 0.3, d + 0.3, 0.12, (0, y, 0.25), stone, bevel=0.05, segments=3))
    parts.append(box("PlinthDie", w, d, 1.35, (0, y, 0.37), stone, bevel=0.01))
    # Frieze band of figures-in-relief is suggested by rhythmic panels (abstract, not copied).
    for i in range(7):
        px = -w / 2 + 0.3 + i * (w - 0.6) / 6
        parts.append(box("ReliefPanel", 0.22, 0.04, 0.5, (px, y - d / 2 - 0.02, 0.62), stone, bevel=0.03, segments=2))
        parts.append(lathe("ReliefHead", [(0.0, 0.0), (0.06, 0.0), (0.075, 0.07), (0.05, 0.13), (0.0, 0.14)], 12, stone,
                           loc=(px, y - d / 2 - 0.03, 1.12)))
    inlay = meander_relief("PlinthMeander", bronze, w - 0.2, 0.16, 0, 0, depth=0.02, period=0.3)
    inlay.rotation_euler = (0, 0, math.radians(90))
    inlay.location = (0, y - d / 2 - 0.0, 1.47 - 0.2)
    apply_transform(inlay)
    parts.append(box("PlinthCornice", w + 0.25, d + 0.25, 0.14, (0, y, 1.72), stone, bevel=0.03, segments=2))
    parts.append(box("PlinthCap", w + 0.4, d + 0.4, 0.1, (0, y, 1.86), stone, bevel=0.015))
    plinth = join(parts, "StatuePlinth")
    return plinth


def pedestal(stone, bronze):
    parts = [
        box("PedFoot", 0.95, 0.95, 0.14, (0, 0, 0), stone, bevel=0.02),
        box("PedDie", 0.78, 0.78, 0.82, (0, 0, 0.14), stone, bevel=0.008),
        box("PedBand", 0.8, 0.8, 0.06, (0, 0, 0.56), bronze, bevel=0.01),
        box("PedCap", 0.95, 0.95, 0.12, (0, 0, 0.96), stone, bevel=0.025, segments=2),
    ]
    return join(parts, "Pedestal")


def apse(stone, glass, spring_z):
    """Far end: an end wall with an arched opening the width of the vault, an apse whose
    half-dome (conch) is coffered, and an oculus over the statue for the cool key light."""
    R = COL_X - 0.5
    y0 = NAVE_END + 0.2
    parts = []
    top = spring_z + R + 0.6
    # End wall either side of the opening (closes the side aisles).
    for s in (-1, 1):
        parts.append(box("EndWall", WALL_X - R + 0.6, 0.6, top, (s * (R + (WALL_X - R + 0.6) / 2), y0 + 0.3, 0), stone))
        parts.append(box("EndPilaster", 0.5, 0.8, spring_z, (s * (R + 0.25), y0 + 0.2, 0), stone, bevel=0.02))
    # Apse: a half cylinder behind the opening.
    depth = R * 1.15
    cyl_v, cyl_f = [], []
    segs, levels = 24, 10
    for j in range(levels + 1):
        z = spring_z * j / levels
        for i in range(segs + 1):
            a = math.pi * i / segs
            cyl_v.append((-R * math.cos(a), y0 + 0.6 + depth * math.sin(a), z))
    for j in range(levels):
        for i in range(segs):
            w = segs + 1
            cyl_f.append((j * w + i, (j + 1) * w + i, (j + 1) * w + i + 1, j * w + i + 1))
    wall = mesh_object("ApseWall", cyl_v, cyl_f, stone, smooth_angle=40)
    parts.append(wall)
    # Banded entablature around the apse at column-capital height (continuity with the nave).
    for z0, h, dr in ((COL_H, 0.6, 0.0), (COL_H + 0.6, 0.55, 0.06), (spring_z - 0.25, 0.25, 0.14)):
        band_v, band_f = [], []
        for k, zz in enumerate((z0, z0 + h)):
            for i in range(segs + 1):
                a = math.pi * i / segs
                band_v.append((-(R - dr - 0.12) * math.cos(a), y0 + 0.6 + (depth - dr - 0.12) * math.sin(a), zz))
        w = segs + 1
        for i in range(segs):
            band_f.append((i, w + i, w + i + 1, i + 1))
        for i in range(segs + 1):
            a = math.pi * i / segs
            band_v.append((-(R - 0.01) * math.cos(a), y0 + 0.6 + (depth - 0.01) * math.sin(a), z0))
            band_v.append((-(R - 0.01) * math.cos(a), y0 + 0.6 + (depth - 0.01) * math.sin(a), z0 + h))
        base = 2 * w
        for i in range(segs):
            band_f.append((base + 2 * i, i, i + 1, base + 2 * i + 2))
            band_f.append((w + i, base + 2 * i + 1, base + 2 * i + 3, w + i + 1))
        parts.append(mesh_object("ApseBand", band_v, band_f, stone, smooth_angle=40))
    # Conch: a coffered quarter sphere over the apse.
    bm = bmesh.new()
    rows, cols = 5, 10
    centre = Vector((0, y0 + 0.6, spring_z))

    def sp(u, v):
        a = math.pi * u            # around
        e = math.pi / 2 * v        # elevation
        return centre + Vector((-R * math.cos(a) * math.cos(e), depth * math.sin(a) * math.cos(e), R * math.sin(e)))
    grid = [[bm.verts.new(sp(i / cols, j / rows)) for i in range(cols + 1)] for j in range(rows + 1)]
    faces = []
    for j in range(rows):
        for i in range(cols):
            if j == rows - 1:
                continue        # leave the crown open: the oculus
            faces.append(bm.faces.new((grid[j][i], grid[j][i + 1], grid[j + 1][i + 1], grid[j + 1][i])))
    bmesh.ops.inset_individual(bm, faces=faces, thickness=0.09, depth=0.0)
    for f in faces:
        n = (f.calc_center_median() - centre).normalized()
        for v in f.verts:
            v.co += n * 0.2
    mesh = bpy.data.meshes.new("Conch")
    bm.to_mesh(mesh)
    bm.free()
    conch = link(bpy.data.objects.new("Conch", mesh))
    conch.data.materials.append(stone)
    select_only(conch)
    bpy.ops.object.mode_set(mode="EDIT")
    bpy.ops.mesh.select_all(action="SELECT")
    bpy.ops.mesh.normals_make_consistent(inside=True)
    bpy.ops.object.mode_set(mode="OBJECT")
    parts.append(conch)
    # The arch over the opening (archivolt): a half ring.
    ring = tube_along("Archivolt", [(-(R + 0.12) * math.cos(math.pi * k / 24), y0 + 0.02, spring_z + (R + 0.12) * math.sin(math.pi * k / 24))
                                    for k in range(25)], 0.16, 10, stone)
    parts.append(ring)
    # Close the gap above the arch up to the side walls' top.
    parts.append(box("Tympanum", 2 * R + 0.8, 0.5, top - spring_z - R + 0.1, (0, y0 + 0.25, spring_z + R - 0.1), stone))
    out = join(parts, "Apse")
    smooth(out, 35)
    oc = sp(0.5, 1.0)
    glass_disc = lathe("OculusGlass", [(0.0, 0.0), (1.3, 0.0), (0.0, 0.02)], 24, glass, loc=(oc.x, oc.y - 0.6, oc.z + 0.6))
    return out, glass_disc, oc


# ================================================================ baking
def convexity_to_colors(obj, ao_name="Col"):
    """G channel = convexity (0.5 neutral, >0.5 convex edges) for edge wear in the shader."""
    me = obj.data
    bm = bmesh.new()
    bm.from_mesh(me)
    bm.verts.ensure_lookup_table()
    conv = np.zeros(len(bm.verts))
    for v in bm.verts:
        if not v.link_edges:
            continue
        acc = 0.0
        for e in v.link_edges:
            o = e.other_vert(v)
            d = o.co - v.co
            if d.length > 1e-6:
                acc += -v.normal.dot(d) / d.length
        conv[v.index] = acc / len(v.link_edges)
    bm.free()
    g = np.clip(0.5 + conv * 1.6, 0, 1)
    attr = me.color_attributes.get(ao_name)
    data = np.zeros(len(attr.data) * 4, dtype=np.float32)
    attr.data.foreach_get("color", data)
    data = data.reshape(-1, 4)
    data[:, 1] = g
    data[:, 2] = 1.0
    data[:, 3] = 1.0
    attr.data.foreach_set("color", data.ravel())


def bake_vertex_ao(objects, samples=48, distance=1.4):
    scene = bpy.context.scene
    scene.render.engine = "CYCLES"
    scene.cycles.device = "CPU"
    scene.cycles.samples = samples
    scene.world.light_settings.distance = distance
    scene.render.bake.target = "VERTEX_COLORS"
    for obj in objects:
        me = obj.data
        if me.color_attributes.get("Col") is None:
            me.color_attributes.new("Col", "FLOAT_COLOR", "POINT")
        me.color_attributes.active_color = me.color_attributes["Col"]
        me.attributes.default_color_name = "Col"
        select_only(obj)
        bpy.ops.object.bake(type="AO")
        convexity_to_colors(obj)
        print(f"  baked AO: {obj.name} ({len(me.vertices)} verts)")


# ================================================================ build
def build():
    scene = reset_scene()
    out = os.path.join(OUTPUT_DIR, "export")
    os.makedirs(out, exist_ok=True)
    os.makedirs(os.path.join(OUTPUT_DIR, "blend"), exist_ok=True)

    print("textures…")
    marble_img = marble_texture(os.path.join(out, "temple-marble.webp"))
    lime_img = limestone_texture(os.path.join(out, "temple-limestone.webp"))
    floor_img = floor_texture(os.path.join(out, "temple-floor.webp"))

    stone = textured(principled("Limestone", (0.76, 0.66, 0.53), roughness=0.78), lime_img, scale=0.45, wear=True)
    marble = textured(principled("Marble", (0.86, 0.83, 0.77), roughness=0.36, subsurface=0.15), marble_img, scale=0.55)
    bronze = principled("Bronze", (0.55, 0.30, 0.16), roughness=0.38, metallic=1.0)
    flame = principled("Flame", (0, 0, 0), emission=(1.0, 0.62, 0.3), strength=30.0)
    glass = principled("Glass", (0, 0, 0), emission=(0.75, 0.86, 1.0), strength=12.0)
    floor_mat = textured(principled("FloorStone", (0.8, 0.74, 0.64), roughness=0.3), floor_img, uv=True, rough_from_alpha=True)

    print("modules…")
    column = column_module(stone)
    column_far = column_module(stone, far=True)
    entab, ent_top = entablature_module(stone)
    spring_z = ent_top
    ceiling = vault_module(stone, glass, spring_z, skylight=False)
    ceiling_sky = vault_module(stone, glass, spring_z, skylight=True)
    wall_n = wall_module(stone, bronze, niche=True)
    wall_p = wall_module(stone, bronze, niche=False)
    for o in (column, column_far, entab, wall_n, wall_p):
        smooth(o, 40)

    # Place modules down the nave as linked duplicates (one mesh, many nodes). Bay k is
    # centred on its column pair; wall modules are offset half a bay so their niches sit
    # between the columns and their pilasters behind them. Bay −1 frames the entrance.
    sky_bay = 4
    for k in range(-1, BAYS):
        y = BAY / 2 + k * BAY
        for side in (1, -1):
            rot = 0 if side == 1 else math.pi
            c = (column if k < FAR_FROM else column_far).copy(); link(c)
            c.location = (side * COL_X, y, 0); c.rotation_euler = (0, 0, rot)
            e = entab.copy(); link(e); e.location = (0, y, 0); e.rotation_euler = (0, 0, rot)
            w_t = wall_n if k % 2 == 0 else wall_p
            w = w_t.copy(); link(w); w.location = (0, y + BAY / 2, 0); w.rotation_euler = (0, 0, rot)
        cl_t = ceiling_sky if k == sky_bay else ceiling
        cl = cl_t.copy(); link(cl); cl.location = (0, y, 0)
    # Templates stay at the origin for now (hidden); they are moved into place to bake.
    for t in (column, column_far, entab, ceiling, ceiling_sky, wall_n, wall_p):
        t.hide_render = True
        t.hide_set(True)
        t.name = t.name + "Template"

    # Floor (unique; the pattern is a per-bay texture in the shader / UV-tiled for the render).
    y0, y1 = -6.0, NAVE_END + 5.0
    floor = mesh_object("Floor", [(-7, y0, 0), (7, y0, 0), (7, y1, 0), (-7, y1, 0)], [(0, 1, 2, 3)], floor_mat)
    uv = floor.data.uv_layers.new(name="UVMap")
    for loop in floor.data.loops:
        co = floor.data.vertices[loop.vertex_index].co
        uv.data[loop.index].uv = ((co.x + 7) / 14, co.y / BAY)

    # Far end.
    apse_obj, oculus, oculus_pos = apse(stone, glass, spring_z)
    plinth = statue_plinth(stone, bronze, STATUE_Y)
    print("figures…")
    colossus = metaball_figure("Colossus", marble, "torch", STATUE_SCALE)
    colossus.location = (0, STATUE_Y, 1.96)
    colossus.rotation_euler = (0, 0, math.radians(180))
    torch_tip = Vector((-0.16 * STATUE_SCALE, STATUE_Y + 0.02 * STATUE_SCALE, 1.96 + 1.16 * STATUE_SCALE))
    statue_flame = flame_mesh("StatueFlame", flame, tuple(torch_tip), 0.9)

    small = {"vessel": metaball_figure("FigureVessel", marble, "vessel", 2.05),
             "offering": metaball_figure("FigureOffering", marble, "offering", 2.1)}
    ped = pedestal(stone, bronze)
    figures = []
    # Statues stand in the side aisles at the niche bays, facing the nave.
    for k, pose in ((1, "offering"), (3, "vessel"), (5, "offering"), (7, "vessel")):
        y = BAY / 2 + k * BAY + BAY / 2
        for side in (1, -1):
            p = ped.copy(); link(p); p.location = (side * 5.35, y, 0)
            f = small[pose if side == 1 else ("vessel" if pose == "offering" else "offering")].copy(); link(f)
            f.location = (side * 5.35, y, 1.08)
            # Local front is −Y: turn it to face the aisle (towards x = 0), angled a little towards the visitor.
            f.rotation_euler = (0, 0, math.radians(-90 if side == 1 else 90) + math.radians(-16 * side))
            figures.append(f)
    for t in (ped, small["vessel"], small["offering"]):
        t.hide_render = True
        t.hide_set(True)
        t.name = t.name + "Template"

    # Flames in each niche brazier (one per niche bay, both sides).
    flames = []
    flame_t = flame_mesh("BrazierFlame", flame, (0, 0, 0), 0.75)
    for k in range(BAYS):
        if k % 2 != 0:
            continue
        y = BAY / 2 + k * BAY + BAY / 2
        for side in (1, -1):
            f = flame_t.copy(); link(f)
            f.location = (side * (WALL_X + 0.2), y, 0.9 + 0.55 + 0.27)
            flames.append(f)
    flame_t.hide_render = True
    flame_t.hide_set(True)
    flame_t.name = "BrazierFlameTemplate"

    # ---------- bake AO into the module templates in place (middle bay) ----------
    print("baking…")
    # Bake needs the templates visible and positioned inside the hall: move each template
    # temporarily onto a middle bay instance's transform.
    mid_y = BAY / 2 + 4 * BAY

    def bake_in_place(template, loc, rot=0.0):
        template.hide_set(False)
        template.hide_render = False
        template.location = loc
        template.rotation_euler = (0, 0, rot)
        bake_vertex_ao([template])
        template.hide_set(True)
        template.hide_render = True
        template.location = (0, 0, -50)

    world = bpy.data.worlds.new("TempleWorld")
    scene.world = world
    world.use_nodes = True
    bake_in_place(column, (COL_X, mid_y, 0))
    bake_in_place(column_far, (COL_X, BAY / 2 + 7 * BAY, 0))
    bake_in_place(entab, (0, mid_y, 0))
    bake_in_place(ceiling, (0, mid_y - BAY, 0))
    bake_in_place(ceiling_sky, (0, mid_y, 0))
    bake_in_place(wall_n, (0, mid_y + BAY / 2, 0))
    bake_in_place(wall_p, (0, mid_y - BAY / 2, 0))
    bake_in_place(ped, (5.35, BAY * 4 + BAY, 0))
    bake_in_place(small["vessel"], (5.35, BAY * 4 + BAY, 1.08), math.radians(-106))
    bake_in_place(small["offering"], (5.35, BAY * 2 + BAY, 1.08), math.radians(-106))
    bake_vertex_ao([apse_obj, plinth, colossus], samples=48, distance=2.0)

    return dict(scene=scene, stone=stone, marble=marble, bronze=bronze, glass=glass, flame=flame,
                ent_top=ent_top, spring_z=spring_z, oculus=oculus_pos, torch_tip=torch_tip, sky_bay=sky_bay, figures=figures,
                templates=[column, column_far, entab, ceiling, ceiling_sky, wall_n, wall_p, ped, small["vessel"], small["offering"], flame_t])


def stats():
    tris = 0
    seen = set()
    for o in bpy.context.scene.objects:
        if o.type != "MESH" or o.data.name in seen:
            continue
        seen.add(o.data.name)
        o.data.calc_loop_triangles()
        tris += len(o.data.loop_triangles)
    print(f"unique meshes: {len(seen)}, unique triangles: {tris}")


def export(ctx):
    """GLB with geometry and baked vertex colours only. Templates (parked at z −50) are
    excluded: each bay node references its template's mesh."""
    out = os.path.join(OUTPUT_DIR, "export")
    glb = os.path.join(out, "temple.glb")
    for o in bpy.context.scene.objects:
        o.select_set(False)
    for o in bpy.context.scene.objects:
        if o.type == "MESH" and not o.name.endswith("Template") and not o.hide_get():
            o.select_set(True)
    kwargs = dict(
        filepath=glb, export_format="GLB", use_selection=True, export_apply=True,
        export_yup=True, export_materials="EXPORT", export_cameras=False, export_lights=False,
        export_animations=False, export_draco_mesh_compression_enable=False,
        export_texcoords=False, export_normals=True, export_image_format="NONE",
    )
    props = bpy.ops.export_scene.gltf.get_rna_type().properties.keys()
    if "export_vertex_color" in props:
        kwargs["export_vertex_color"] = "ACTIVE"
    if "export_all_vertex_colors" in props:
        kwargs["export_all_vertex_colors"] = False
    if "export_active_vertex_color_when_no_material" in props:
        kwargs["export_active_vertex_color_when_no_material"] = True
    bpy.ops.export_scene.gltf(**{k: v for k, v in kwargs.items() if k in props})
    print(f"exported {glb}: {os.path.getsize(glb)} bytes")
    bpy.ops.wm.save_as_mainfile(filepath=os.path.join(OUTPUT_DIR, "blend", "temple.blend"), copy=True)
    return glb


def render_stills(ctx):
    """Cycles stills for reduced motion and as the visual reference for the real-time scene.
    Camera matches the Three.js start pose (Blender (x, y, z) = Three (x, −z, y))."""
    scene = ctx["scene"]
    scene.render.engine = "CYCLES"
    scene.cycles.device = "CPU"
    scene.cycles.samples = SAMPLES
    scene.cycles.use_denoising = True
    scene.cycles.max_bounces = 6
    scene.view_settings.view_transform = "AgX"
    scene.view_settings.look = "AgX - Medium High Contrast" if "AgX - Medium High Contrast" in [
        i.identifier for i in scene.view_settings.bl_rna.properties["look"].enum_items_static] else "None"
    scene.view_settings.exposure = -0.7
    # World: very dark warm ambience.
    world = scene.world
    bg = world.node_tree.nodes.get("Background")
    bg.inputs["Color"].default_value = (0.006, 0.005, 0.004, 1)
    bg.inputs["Strength"].default_value = 1.0
    # Volumetric haze inside the hall for visible light shafts.
    haze_mat = bpy.data.materials.new("Haze")
    haze_mat.use_nodes = True
    nt = haze_mat.node_tree
    nt.nodes.remove(nt.nodes.get("Principled BSDF"))
    vol = nt.nodes.new("ShaderNodeVolumePrincipled")
    vol.inputs["Density"].default_value = 0.009
    vol.inputs["Anisotropy"].default_value = 0.55
    vol.inputs["Color"].default_value = (1, 0.95, 0.9, 1)
    nt.links.new(vol.outputs["Volume"], nt.nodes.get("Material Output").inputs["Volume"])
    box("Haze", 2 * WALL_X - 0.2, NAVE_END + 12, ctx["ent_top"] + 5, (0, (NAVE_END + 12) / 2 - 6, 0.05), haze_mat)

    # Cool daylight through the oculus (onto the statue) and the nave skylight.
    def spot(name, loc, target, energy, color, size, angle):
        data = bpy.data.lights.new(name, "SPOT")
        data.energy = energy
        data.color = color
        data.spot_size = math.radians(angle)
        data.spot_blend = 0.4
        data.shadow_soft_size = size
        obj = link(bpy.data.objects.new(name, data))
        obj.location = loc
        direction = Vector(target) - Vector(loc)
        obj.rotation_euler = direction.to_track_quat("-Z", "Y").to_euler()
        return obj
    oc = ctx["oculus"]
    spot("OculusSun", (0.5, STATUE_Y - 0.6, oc.z + 10), (0, STATUE_Y - 0.3, 4.5), 26000, (0.72, 0.83, 1.0), 0.3, 11)
    sky_y = BAY / 2 + ctx["sky_bay"] * BAY
    spot("SkylightSun", (1.6, sky_y - 3.0, ctx["ent_top"] + 16), (-0.4, sky_y + 2.0, 0), 22000, (0.76, 0.85, 1.0), 0.6, 12)
    # Warm braziers.
    for k in range(BAYS):
        if k % 2 != 0:
            continue
        y = BAY / 2 + k * BAY + BAY / 2
        for side in (1, -1):
            data = bpy.data.lights.new("Brazier", "POINT")
            data.energy = 170
            data.color = (1.0, 0.55, 0.25)
            data.shadow_soft_size = 0.25
            o = link(bpy.data.objects.new("Brazier", data))
            o.location = (side * (WALL_X - 0.15), y, 2.1)
    # The torch at the top of the colossus.
    data = bpy.data.lights.new("TorchLight", "POINT")
    data.energy = 220
    data.color = (1.0, 0.6, 0.3)
    data.shadow_soft_size = 0.2
    o = link(bpy.data.objects.new("TorchLight", data))
    o.location = ctx["torch_tip"] + Vector((0, -0.3, 0.4))
    # Low warm fill from the entrance (the visitor's side).
    data = bpy.data.lights.new("EntranceFill", "AREA")
    data.energy = 160
    data.color = (1.0, 0.74, 0.52)
    data.size = 6
    o = link(bpy.data.objects.new("EntranceFill", data))
    o.location = (0, -4, 4.5)
    o.rotation_euler = (math.radians(-80), 0, 0)

    cam_data = bpy.data.cameras.new("Cam")
    cam_data.sensor_fit = "VERTICAL"
    cam_data.clip_end = 120
    cam = link(bpy.data.objects.new("Cam", cam_data))
    scene.camera = cam
    out = os.path.join(OUTPUT_DIR, "export")

    def shoot(name, res, fov_deg, loc, look, shift_x=0.0, shift_y=0.0):
        scene.render.resolution_x, scene.render.resolution_y = res
        scene.render.resolution_percentage = 100
        cam_data.angle = math.radians(fov_deg)
        cam_data.shift_x, cam_data.shift_y = shift_x, shift_y
        cam.location = loc
        cam.rotation_euler = (Vector(look) - Vector(loc)).to_track_quat("-Z", "Y").to_euler()
        scene.render.image_settings.file_format = "WEBP"
        scene.render.image_settings.quality = 72
        scene.render.image_settings.color_mode = "RGB"
        scene.render.filepath = os.path.join(out, name)
        bpy.ops.render.render(write_still=True)
        print(f"rendered {name}")

    # Desktop: matches temple.js start pose and its view offset (scene shifted right).
    if "--review-only" not in flags and "--mobile-only" not in flags:
        # Three.js: camera (0, 1.72, 3.2) → lookAt (0, 3.1, −22), fov 38, setViewOffset(+7 % width).
        shoot("temple-still.webp", (1600, 900), 38, (0.0, -3.2, 1.72), (0.0, 22.0, 3.1), shift_x=0.07)
    if "--closeup" in flags:   # review only, not shipped
        shoot("review-colossus.webp", (800, 800), 30, (2.5, STATUE_Y - 9.0, 4.0), (0, STATUE_Y, 4.6))
        fy = BAY / 2 + 1 * BAY + BAY / 2
        shoot("review-figure.webp", (800, 800), 34, (2.0, fy - 1.0, 2.1), (5.35, fy, 2.1))
    if "--desktop-only" not in flags and "--review-only" not in flags:
        # Three.js (aspect < 0.9): camera (0, 1.8, 4.6) → lookAt (0, 3.6, −22), fov 50, setViewOffset(+16 % height).
        shoot("temple-still-mobile.webp", (720, 1280), 50, (0.0, -4.6, 1.8), (0.0, 22.0, 3.6), shift_y=-0.16)


if __name__ == "__main__":
    ctx = build()
    stats()
    export(ctx)
    if RENDER:
        render_stills(ctx)
