"""
The Temple, photoreal (path-traced) — the hero scene as a pre-rendered scroll sequence.

Real-time WebGL on an integrated GPU cannot look like a photograph, so the hall is
rendered offline in Cycles and the site plays the frames back as you scroll (the camera
walks down the nave). The browser only shows images: cheap on any GPU.

Original scene, composed after the brief's reference (mood/composition only): a short
nave of fluted Ionic columns in warm stone, statues on pedestals along the aisle, and a
rotunda whose coffered glass dome pours daylight onto a colossal torch-bearing figure.

Real-world detail comes from CC0 scans (Poly Haven, see fetch_assets.py): a marble bust
gives every figure a real carved head; cream ashlar walls, a terrazzo floor, a clear-sky
HDRI. Architecture reuses the modules in temple.py.

Each frame is rendered square once and cropped twice (desktop 16:9 and phone 9:16): the
camera is level and uses lens shift (like an architectural photograph), so the vanishing
point lands left of centre for desktop and in the upper third for the phone crop.

  python source/blender/temple_photoreal.py <out_dir> --assets <cc0_dir> [--frames 36] [--size 1280]
         [--samples 40] [--poster-only] [--review]

Writes <out>/frames/{desktop,phone}/NN.webp, <out>/poster-{desktop,phone}.webp,
<out>/camera.json (per-frame camera for overlays) and <out>/temple_photoreal.blend.
"""
import importlib.util
import json
import math
import os
import sys

import bpy
import bmesh
from mathutils import Vector

HERE = os.path.dirname(os.path.abspath(__file__))
argv = sys.argv[sys.argv.index("--") + 1:] if "--" in sys.argv else sys.argv[1:]


def arg(name, default):
    return type(default)(argv[argv.index(name) + 1]) if name in argv else default


OUT = [a for a in argv if not a.startswith("--") and (argv.index(a) == 0 or not argv[argv.index(a) - 1].startswith("--"))][0]
ASSETS = arg("--assets", os.path.join(os.path.expanduser("~"), "portfolio-3d", "cc0"))
FRAMES = arg("--frames", 36)
SIZE = arg("--size", 1280)
POSTER = arg("--poster-size", 2048)
SAMPLES = arg("--samples", 40)

# Load the architecture modules from temple.py (its build() only runs as __main__).
spec = importlib.util.spec_from_file_location("temple", os.path.join(HERE, "temple.py"))
T = importlib.util.module_from_spec(spec)
_argv = sys.argv
sys.argv = [sys.argv[0], OUT, "--no-render"]
spec.loader.exec_module(T)
sys.argv = _argv

BAY = T.BAY
BAYS = 6                                  # a shorter nave: the statue reads large, as in the reference
NAVE_END = BAY * BAYS
ROT_R = 7.4                               # rotunda colonnade radius
ROT_C = NAVE_END + ROT_R + 0.9            # rotunda centre (y)
DRUM_R = ROT_R + 2.0
SPRING = 12.6                             # dome springing height
STATUE_H = 5.6

# Camera: level, lens shift; see module docstring. Square sensor, 63° covers a 38° (vertical)
# 16:9 crop and a 38° (horizontal) 9:16 crop.
FOV = 63.0
SHIFT_X, SHIFT_Y = 0.0, -0.16          # desktop: the statue stands in the gap between headline and portrait
# Vanishing point as a fraction of the square image (x right, y down): a positive shift_x moves the
# frame right (scene appears left); a negative shift_y moves it down (horizon appears higher).
VP = (0.5 - SHIFT_X, 0.5 + SHIFT_Y)
CAM_Z = 1.7
WALK = (-3.0, 12.5)                       # camera y at scroll 0 and 1


# ================================================================ materials
def img(path, colorspace="sRGB"):
    im = bpy.data.images.load(path, check_existing=True)
    im.colorspace_settings.name = colorspace
    return im


def pbr(name, tex_name, scale=1.0, uv=False, tint=None, rough_mul=1.0, normal_strength=1.0, bump_wear=False):
    """A Poly Haven PBR set, box-projected (or UV) with optional tint."""
    base = os.path.join(ASSETS, tex_name, tex_name)
    mat = bpy.data.materials.new(name)
    mat.use_nodes = True
    nt = mat.node_tree
    bsdf = nt.nodes["Principled BSDF"]
    coord = nt.nodes.new("ShaderNodeTexCoord")
    mapping = nt.nodes.new("ShaderNodeMapping")
    mapping.inputs["Scale"].default_value = (scale, scale, scale)
    nt.links.new(coord.outputs["UV" if uv else "Object"], mapping.inputs["Vector"])

    def tex(suffix, cs="Non-Color"):
        t = nt.nodes.new("ShaderNodeTexImage")
        t.image = img(f"{base}_{suffix}_2k.jpg", cs)
        if not uv:
            t.projection = "BOX"
            t.projection_blend = 0.3
        nt.links.new(mapping.outputs["Vector"], t.inputs["Vector"])
        return t
    diff = tex("diff", "sRGB")
    color = diff.outputs["Color"]
    if tint is not None:
        mix = nt.nodes.new("ShaderNodeMix"); mix.data_type = "RGBA"; mix.blend_type = "MULTIPLY"
        mix.inputs["Factor"].default_value = 1.0
        mix.inputs["B"].default_value = (*tint, 1)
        nt.links.new(color, mix.inputs["A"])
        color = mix.outputs["Result"]
    nt.links.new(color, bsdf.inputs["Base Color"])
    rough = tex("rough")
    rm = nt.nodes.new("ShaderNodeMath"); rm.operation = "MULTIPLY"; rm.inputs[1].default_value = rough_mul
    nt.links.new(rough.outputs["Color"], rm.inputs[0])
    nt.links.new(rm.outputs["Value"], bsdf.inputs["Roughness"])
    nor = tex("nor_gl")
    nmap = nt.nodes.new("ShaderNodeNormalMap"); nmap.inputs["Strength"].default_value = normal_strength
    nt.links.new(nor.outputs["Color"], nmap.inputs["Color"])
    nt.links.new(nmap.outputs["Normal"], bsdf.inputs["Normal"])
    return mat


def stone_columns(lime_img):
    """Joint-free warm limestone for columns and mouldings: the generated limestone colour,
    real scanned surface relief (sandstone normal, small scale) and bevel-based edge wear."""
    mat = T.textured(T.principled("ColumnStone", (0.80, 0.70, 0.56), roughness=0.7), lime_img, scale=0.45, wear=True)
    nt = mat.node_tree
    bsdf = nt.nodes["Principled BSDF"]
    coord = nt.nodes.new("ShaderNodeTexCoord")
    mapping = nt.nodes.new("ShaderNodeMapping"); mapping.inputs["Scale"].default_value = (1.6, 1.6, 1.6)
    nt.links.new(coord.outputs["Object"], mapping.inputs["Vector"])
    t = nt.nodes.new("ShaderNodeTexImage")
    t.image = img(os.path.join(ASSETS, "large_sandstone_blocks_01", "large_sandstone_blocks_01_nor_gl_2k.jpg"), "Non-Color")
    t.projection = "BOX"; t.projection_blend = 0.3
    nt.links.new(mapping.outputs["Vector"], t.inputs["Vector"])
    nmap = nt.nodes.new("ShaderNodeNormalMap"); nmap.inputs["Strength"].default_value = 0.6
    nt.links.new(t.outputs["Color"], nmap.inputs["Color"])
    # The wear setup already drives Normal with a bump; chain the scanned normal into it.
    bump = next((n for n in nt.nodes if n.type == "BUMP"), None)
    if bump:
        nt.links.new(nmap.outputs["Normal"], bump.inputs["Normal"])
    else:
        nt.links.new(nmap.outputs["Normal"], bsdf.inputs["Normal"])
    return mat


def statue_marble(bust_diffuse):
    """Body marble matched to the scanned bust: its mean colour, soft veins, subsurface."""
    px = list(bust_diffuse.pixels[:])
    n = len(px) // 4
    mean = [sum(px[i::4][::97]) / len(px[i::4][::97]) for i in range(3)]
    mat = bpy.data.materials.new("StatueMarble")
    mat.use_nodes = True
    nt = mat.node_tree
    bsdf = nt.nodes["Principled BSDF"]
    noise = nt.nodes.new("ShaderNodeTexNoise"); noise.inputs["Scale"].default_value = 3.0; noise.inputs["Detail"].default_value = 8
    ramp = nt.nodes.new("ShaderNodeValToRGB")
    ramp.color_ramp.elements[0].color = (*[c * 0.9 for c in mean], 1)
    ramp.color_ramp.elements[1].color = (*[min(1, c * 1.08) for c in mean], 1)
    nt.links.new(noise.outputs["Fac"], ramp.inputs["Fac"])
    nt.links.new(ramp.outputs["Color"], bsdf.inputs["Base Color"])
    bsdf.inputs["Roughness"].default_value = 0.42
    bsdf.inputs["Subsurface Weight"].default_value = 0.12
    bsdf.inputs["Subsurface Radius"].default_value = (0.5, 0.4, 0.3)
    bsdf.inputs["Subsurface Scale"].default_value = 0.02
    bump = nt.nodes.new("ShaderNodeBump"); bump.inputs["Strength"].default_value = 0.12; bump.inputs["Distance"].default_value = 0.002
    n2 = nt.nodes.new("ShaderNodeTexNoise"); n2.inputs["Scale"].default_value = 90
    nt.links.new(n2.outputs["Fac"], bump.inputs["Height"])
    nt.links.new(bump.outputs["Normal"], bsdf.inputs["Normal"])
    return mat


def thin_glass():
    """Glass panes that let light through cheaply: shadow rays pass, camera rays see glossy glass."""
    mat = bpy.data.materials.new("DomeGlass")
    mat.use_nodes = True
    nt = mat.node_tree
    out = nt.nodes["Material Output"]
    nt.nodes.remove(nt.nodes["Principled BSDF"])
    lp = nt.nodes.new("ShaderNodeLightPath")
    tr = nt.nodes.new("ShaderNodeBsdfTransparent"); tr.inputs["Color"].default_value = (0.93, 0.96, 1.0, 1)
    gl = nt.nodes.new("ShaderNodeBsdfGlossy"); gl.inputs["Roughness"].default_value = 0.05
    fres = nt.nodes.new("ShaderNodeFresnel"); fres.inputs["IOR"].default_value = 1.45
    mix1 = nt.nodes.new("ShaderNodeMixShader")
    nt.links.new(fres.outputs["Fac"], mix1.inputs["Fac"])
    nt.links.new(tr.outputs["BSDF"], mix1.inputs[1])
    nt.links.new(gl.outputs["BSDF"], mix1.inputs[2])
    mix2 = nt.nodes.new("ShaderNodeMixShader")
    nt.links.new(lp.outputs["Is Shadow Ray"], mix2.inputs["Fac"])
    nt.links.new(mix1.outputs["Shader"], mix2.inputs[1])
    nt.links.new(tr.outputs["BSDF"], mix2.inputs[2])
    nt.links.new(mix2.outputs["Shader"], out.inputs["Surface"])
    return mat


# ================================================================ geometry
def scan_head(bust_objs, mat_override=None):
    """The CC0 bust cut below the shoulders (its socle and lower chest removed)."""
    src = bust_objs[0]
    obj = src.copy(); obj.data = src.data.copy()
    T.link(obj)
    obj.hide_render = False
    obj.hide_set(False)
    obj.parent = None
    obj.matrix_world = src.matrix_world.copy()
    T.apply_transform(obj)                  # bisect in world-aligned metres (the glTF import rotates Y-up → Z-up)
    bm = bmesh.new(); bm.from_mesh(obj.data)
    geom = bm.verts[:] + bm.edges[:] + bm.faces[:]
    bmesh.ops.bisect_plane(bm, geom=geom, plane_co=(0, 0, 0.2), plane_no=(0, 0, 1), clear_inner=True)
    bm.to_mesh(obj.data); bm.free()
    return obj


def figure(name, marble, bust_objs, pose, height):
    """Draped body (temple.py, no procedural head) + the scanned head and shoulders."""
    body = T.metaball_figure(name + "Body", marble, pose, height, head=False)
    head = scan_head(bust_objs)
    s = (height / 7.4) / 0.2                # bust head ≈ 0.2 m; a classical head is 1/7.4 of the figure
    head.scale = (s, s, s)
    head.location = (0, 0.0, height * 1.0 - 0.515 * s)
    T.apply_transform(head)
    for o in list(bpy.context.scene.objects):
        o.select_set(False)
    body.select_set(True); head.select_set(True)
    bpy.context.view_layer.objects.active = body
    bpy.ops.object.join()
    fig = bpy.context.view_layer.objects.active
    fig.name = name
    return fig


def rotunda(stone, walls, glass, column):
    """Ring of columns, a drum in ashlar and a coffered glass dome, joined to the nave by an
    end wall with an arch the width of the vault."""
    parts = []
    # Columns on the back 300° of the ring (the front opens to the nave).
    n = 14
    for i in range(n):
        a = math.radians(90 + 360 * i / n)
        if abs(math.degrees(a) % 360 - 270) < 32:
            continue
        c = column.copy(); T.link(c)
        c.location = (ROT_R * math.cos(a), ROT_C + ROT_R * math.sin(a), 0)
        c.rotation_euler = (0, 0, a + math.pi / 2)
    # Ring entablature (architrave + frieze + cornice) on the colonnade.
    for z0, h, r_in, r_out in ((T.COL_H, 0.65, ROT_R - 0.5, ROT_R + 0.5), (T.COL_H + 0.65, 0.55, ROT_R - 0.42, ROT_R + 0.42),
                               (T.COL_H + 1.2, 0.3, ROT_R - 0.7, ROT_R + 0.6)):
        parts.append(T.lathe("RingEnt", [(r_in, 0), (r_out, 0), (r_out, h), (r_in, h)], 72, stone, loc=(0, ROT_C, z0),
                             cap_top=False, cap_bottom=False))
    # Ring soffit between the colonnade and the drum.
    parts.append(T.lathe("RingSoffit", [(ROT_R + 0.5, 0), (DRUM_R, 0), (DRUM_R, 0.25), (ROT_R + 0.5, 0.25)], 72, stone,
                         loc=(0, ROT_C, T.COL_H + 1.5), cap_top=False, cap_bottom=False))
    # Drum wall (ashlar), full height to the dome, open towards the nave.
    v, f = [], []
    segs, rings = 64, 6
    for j in range(rings + 1):
        z = SPRING * j / rings
        for i in range(segs + 1):
            a = math.radians(270 + 32 + (360 - 64) * i / segs)
            v.append((DRUM_R * math.cos(a), ROT_C + DRUM_R * math.sin(a), z))
    w = segs + 1
    for j in range(rings):
        for i in range(segs):
            f.append((j * w + i, (j + 1) * w + i, (j + 1) * w + i + 1, j * w + i + 1))
    drum = T.mesh_object("Drum", v, f, walls, smooth_angle=60)
    parts.append(drum)
    # Dome ring cornice.
    parts.append(T.lathe("DomeCornice", [(DRUM_R - 0.6, 0), (DRUM_R + 0.1, 0), (DRUM_R + 0.1, 0.5), (DRUM_R - 0.8, 0.5)], 72, stone,
                         loc=(0, ROT_C, SPRING - 0.5), cap_top=False, cap_bottom=False))
    # Coffered glass dome: bronze-dark stone ribs, glass panes, an open oculus.
    bm = bmesh.new()
    rows, cols = 7, 32
    R = DRUM_R - 0.3
    centre = Vector((0, ROT_C, SPRING))
    grid = [[bm.verts.new(centre + Vector((R * math.cos(math.radians(80 * j / rows)) * math.cos(2 * math.pi * i / cols),
                                              R * math.cos(math.radians(80 * j / rows)) * math.sin(2 * math.pi * i / cols),
                                              R * 0.82 * math.sin(math.radians(80 * j / rows)))))
             for i in range(cols)] for j in range(rows + 1)]
    faces = []
    for j in range(rows):
        for i in range(cols):
            faces.append(bm.faces.new((grid[j][i], grid[j][(i + 1) % cols], grid[j + 1][(i + 1) % cols], grid[j + 1][i])))
    res = bmesh.ops.inset_individual(bm, faces=faces, thickness=0.12, depth=0.0)
    for f_ in faces:
        f_.material_index = 1          # the inset centres become glass
        nrm = (f_.calc_center_median() - centre).normalized()
        for vv in f_.verts:
            vv.co += nrm * 0.18
    mesh = bpy.data.meshes.new("Dome"); bm.to_mesh(mesh); bm.free()
    dome = T.link(bpy.data.objects.new("Dome", mesh))
    dome.data.materials.append(stone); dome.data.materials.append(glass)
    T.smooth(dome, 30)
    # End wall between the nave and the rotunda, with an arch the width of the vault.
    R0 = T.COL_X - 0.5
    for sgn in (-1, 1):
        parts.append(T.box("EndWall", DRUM_R + 1.0 - R0, 0.7, SPRING + 1.0, (sgn * (R0 + (DRUM_R + 1.0 - R0) / 2), NAVE_END + 0.35, 0), walls))
    parts.append(T.tube_along("Archivolt", [(-(R0 + 0.15) * math.cos(math.pi * k / 24), NAVE_END - 0.02, T.ENT_TOP + (R0 + 0.15) * math.sin(math.pi * k / 24))
                                            for k in range(25)], 0.18, 10, stone))
    parts.append(T.box("Tympanum", 2 * R0 + 1.0, 0.7, SPRING + 1.0 - (T.ENT_TOP + R0) + 0.2, (0, NAVE_END + 0.35, T.ENT_TOP + R0 - 0.2), walls))
    # The rotunda floor extends the nave floor (one big plane is built in build()).
    return parts, dome


# ================================================================ build
def build():
    T.reset_scene()
    scene = bpy.context.scene
    tex_out = os.path.join(OUT, "tex"); os.makedirs(tex_out, exist_ok=True)
    lime_img = T.limestone_texture(os.path.join(tex_out, "limestone.webp"))

    bpy.ops.import_scene.gltf(filepath=os.path.join(ASSETS, "marble_bust_01", "marble_bust_01.gltf"))
    bust = [o for o in bpy.context.selected_objects if o.type == "MESH"]
    for o in bust:
        o.hide_render = True; o.hide_set(True)
    bust_diff = next(n.image for n in bust[0].active_material.node_tree.nodes if n.type == "TEX_IMAGE" and "diff" in n.image.name)

    stone = stone_columns(lime_img)
    walls = pbr("Ashlar", "marble_01", scale=0.42, tint=(1.0, 0.93, 0.82), normal_strength=0.8)
    floor_mat = pbr("Terrazzo", "marble_mosaic_tiles", scale=1.0, uv=True, tint=(0.9, 0.82, 0.74), rough_mul=0.75, normal_strength=0.5)
    marble = statue_marble(bust_diff)
    bronze = T.principled("Bronze", (0.45, 0.27, 0.14), roughness=0.35, metallic=1.0)
    flame = T.principled("Flame", (0, 0, 0), emission=(1.0, 0.58, 0.26), strength=40.0)
    glass = thin_glass()

    column = T.column_module(stone)
    entab, ent_top = T.entablature_module(stone)
    vault = T.vault_module(stone, glass, ent_top, skylight=False)
    wall_n = T.wall_module(walls, bronze, niche=True)
    wall_p = T.wall_module(walls, bronze, niche=False)
    for o in (column, entab, wall_n, wall_p):
        T.smooth(o, 40)
    for k in range(-1, BAYS):
        y = BAY / 2 + k * BAY
        for side in (1, -1):
            rot = 0 if side == 1 else math.pi
            for t, loc in ((column, (side * T.COL_X, y, 0)), (entab, (0, y, 0)), (wall_n if k % 2 == 0 else wall_p, (0, y + BAY / 2, 0))):
                c = t.copy(); T.link(c); c.location = loc; c.rotation_euler = (0, 0, rot)
        cl = vault.copy(); T.link(cl); cl.location = (0, y, 0)
    rot_parts, dome = rotunda(stone, walls, glass, column)
    for t in (column, entab, vault, wall_n, wall_p):
        t.hide_render = True; t.hide_set(True)

    floor = T.mesh_object("Floor", [(-10, -8, 0), (10, -8, 0), (10, ROT_C + DRUM_R + 1, 0), (-10, ROT_C + DRUM_R + 1, 0)], [(0, 1, 2, 3)], floor_mat)
    uv = floor.data.uv_layers.new(name="UVMap")
    for loop in floor.data.loops:
        co = floor.data.vertices[loop.vertex_index].co
        uv.data[loop.index].uv = (co.x / 1.2, co.y / 1.2)

    # The colossus at the centre of the rotunda, on the carved plinth.
    T.statue_plinth(stone, bronze, ROT_C)
    colossus = figure("Colossus", marble, bust, "torch", STATUE_H)
    colossus.location = (0, ROT_C, 1.96)
    colossus.rotation_euler = (0, 0, math.radians(180 + 180))   # face the nave (−Y)
    torch_tip = Vector((0.16 * STATUE_H, ROT_C - 0.02 * STATUE_H, 1.96 + 1.16 * STATUE_H))
    T.flame_mesh("StatueFlame", flame, tuple(torch_tip), 1.0)

    # Figures on pedestals in the aisle, in front of the columns, both sides, alternating poses.
    ped = T.pedestal(stone, bronze)
    ped.scale = (1.0, 1.0, 1.35); T.apply_transform(ped)
    poses = {"rest": figure("FigRest", marble, bust, "rest", 2.5), "offering": figure("FigOffering", marble, bust, "offering", 2.45)}
    # Five figures, staggered left/right like a gallery (not a wall of statues).
    for k, side, pose in ((1, -1, "rest"), (2, 1, "offering"), (3, -1, "offering"), (4, 1, "rest"), (5, -1, "rest")):
        y = k * BAY
        if True:
            p = ped.copy(); T.link(p); p.location = (side * 2.25, y, 0)
            f = poses[pose].copy(); T.link(f); f.location = (side * 2.25, y, 1.08 * 1.35)
            # Local front is −Y: face the aisle, turned a little towards the visitor.
            f.rotation_euler = (0, 0, math.radians(-90 if side == 1 else 90) + math.radians(22 * side))
    for t in [ped] + list(poses.values()):
        t.hide_render = True; t.hide_set(True)

    # Brazier flames in the niches.
    for k in range(-1, BAYS):
        if k % 2 != 0:
            continue
        y = BAY / 2 + k * BAY + BAY / 2
        for side in (1, -1):
            T.flame_mesh("BrazierFlame", flame, (side * (T.WALL_X + 0.2), y, 0.9 + 0.55 + 0.27), 0.75)
    return dict(scene=scene, torch_tip=torch_tip)


# ================================================================ light & render
def light(ctx):
    scene = ctx["scene"]
    world = bpy.data.worlds.new("Sky")
    scene.world = world
    world.use_nodes = True
    nt = world.node_tree
    env = nt.nodes.new("ShaderNodeTexEnvironment")
    env.image = img(os.path.join(ASSETS, "kloofendal_43d_clear_puresky", "kloofendal_43d_clear_puresky_2k.hdr"), "Linear Rec.709")
    nt.links.new(env.outputs["Color"], nt.nodes["Background"].inputs["Color"])
    nt.nodes["Background"].inputs["Strength"].default_value = 1.4
    # Sun through the dome onto the colossus (from behind-right, high), and the warm amber side light.
    sun = bpy.data.lights.new("Sun", "SUN"); sun.energy = 9.0; sun.angle = math.radians(0.8); sun.color = (1.0, 0.95, 0.88)
    so = T.link(bpy.data.objects.new("Sun", sun))
    so.rotation_euler = (math.radians(24), math.radians(-14), math.radians(160))
    for side, energy in ((1, 1100), (-1, 260)):
        for k in range(BAYS):
            a = bpy.data.lights.new("Amber", "AREA"); a.energy = energy / BAYS * 2; a.color = (1.0, 0.62, 0.32); a.size = 2.5
            ao = T.link(bpy.data.objects.new("Amber", a))
            ao.location = (side * (T.WALL_X - 0.6), BAY / 2 + k * BAY, 5.0)
            ao.rotation_euler = (0, math.radians(-90 * side), 0)
    for k in range(-1, BAYS):
        if k % 2 != 0:
            continue
        for side in (1, -1):
            b = bpy.data.lights.new("Brazier", "POINT"); b.energy = 160; b.color = (1.0, 0.55, 0.25); b.shadow_soft_size = 0.2
            bo = T.link(bpy.data.objects.new("Brazier", b))
            bo.location = (side * (T.WALL_X - 0.1), BAY / 2 + k * BAY + BAY / 2, 1.95)
    t = bpy.data.lights.new("Torch", "POINT"); t.energy = 300; t.color = (1.0, 0.6, 0.3)
    to = T.link(bpy.data.objects.new("Torch", t)); to.location = ctx["torch_tip"] + Vector((0, -0.3, 0.5))
    # Haze for visible light shafts.
    haze = bpy.data.materials.new("Haze"); haze.use_nodes = True
    hn = haze.node_tree; hn.nodes.remove(hn.nodes["Principled BSDF"])
    vol = hn.nodes.new("ShaderNodeVolumePrincipled")
    vol.inputs["Density"].default_value = 0.016
    vol.inputs["Anisotropy"].default_value = 0.6
    hn.links.new(vol.outputs["Volume"], hn.nodes["Material Output"].inputs["Volume"])
    T.box("HazeVolume", 2 * DRUM_R + 2, ROT_C + DRUM_R + 10, SPRING + 9, (0, (ROT_C + DRUM_R + 10) / 2 - 8, 0.02), haze)

    scene.render.engine = "CYCLES"
    scene.cycles.device = "CPU"
    scene.cycles.use_adaptive_sampling = True
    scene.cycles.adaptive_threshold = 0.03
    scene.cycles.use_denoising = True
    scene.cycles.max_bounces = 5
    scene.cycles.diffuse_bounces = 3
    scene.cycles.glossy_bounces = 2
    scene.cycles.transparent_max_bounces = 6
    scene.cycles.volume_bounces = 0
    scene.cycles.volume_step_rate = 4.0
    scene.view_settings.view_transform = "AgX"
    looks = [i.identifier for i in scene.view_settings.bl_rna.properties["look"].enum_items_static]
    scene.view_settings.look = "AgX - Medium High Contrast" if "AgX - Medium High Contrast" in looks else "None"
    scene.view_settings.exposure = -0.9
    cam_data = bpy.data.cameras.new("Cam")
    cam_data.sensor_fit = "VERTICAL"
    cam_data.angle = math.radians(FOV)
    cam_data.shift_x, cam_data.shift_y = SHIFT_X, SHIFT_Y
    cam_data.clip_end = 150
    cam = T.link(bpy.data.objects.new("Cam", cam_data))
    cam.rotation_euler = (math.radians(90), 0, 0)   # level, looking down +Y
    scene.camera = cam
    return cam


def crops(src, name_desktop, name_phone, out_desktop=(1600, 900), out_phone=(720, 1280), quality=70):
    """Cut the square render into the desktop (16:9) and phone (9:16) frames around the vanishing point."""
    from PIL import Image  # noqa: E402  (pillow is installed next to bpy for the build)
    im = Image.open(src).convert("RGB")
    S = im.size[0]
    h = round(S * 9 / 16)
    # Horizon two-thirds down the desktop frame (as in the reference): more vault and dome, less floor.
    top = max(0, min(S - h, round(VP[1] * S - h * 0.66)))
    im.crop((0, top, S, top + h)).resize(out_desktop, Image.LANCZOS).save(name_desktop, "WEBP", quality=quality, method=6)
    w = round(S * 9 / 16)
    left = max(0, min(S - w, round(VP[0] * S - w / 2)))
    im.crop((left, 0, left + w, S)).resize(out_phone, Image.LANCZOS).save(name_phone, "WEBP", quality=quality, method=6)
    return dict(desktop_top=top / S, phone_left=left / S)


def render(cam, ctx):
    scene = ctx["scene"]
    os.makedirs(os.path.join(OUT, "frames", "desktop"), exist_ok=True)
    os.makedirs(os.path.join(OUT, "frames", "phone"), exist_ok=True)
    tmp = os.path.join(OUT, "tmp.png")
    manifest = {"fov_deg": FOV, "shift": [SHIFT_X, SHIFT_Y], "vp": VP, "frames": []}

    def shoot(y, size, samples):
        cam.location = (0, y, CAM_Z)
        scene.render.resolution_x = scene.render.resolution_y = size
        scene.cycles.samples = samples
        scene.render.image_settings.file_format = "PNG"
        scene.render.filepath = tmp
        bpy.ops.render.render(write_still=True)

    if "--review" in argv:
        for y, tag in ((WALK[0], "start"), (WALK[1], "end")):
            shoot(y, 900, SAMPLES)
            crops(tmp, os.path.join(OUT, f"review-{tag}-desktop.webp"), os.path.join(OUT, f"review-{tag}-phone.webp"), quality=85)
            import shutil; shutil.copy(tmp, os.path.join(OUT, f"review-{tag}-square.png"))
            print(f"rendered review {tag}", flush=True)
        return
    shoot(WALK[0], POSTER, max(SAMPLES, 64))
    c = crops(tmp, os.path.join(OUT, "poster-desktop.webp"), os.path.join(OUT, "poster-phone.webp"), (1920, 1080), (900, 1600), 72)
    manifest["crop"] = c
    print("rendered poster", flush=True)
    if "--poster-only" not in argv:
        for i in range(FRAMES):
            t = i / (FRAMES - 1)
            e = t * t * (3 - 2 * t)        # ease in/out along the walk
            y = WALK[0] + (WALK[1] - WALK[0]) * e
            shoot(y, SIZE, SAMPLES)
            crops(tmp, os.path.join(OUT, "frames", "desktop", f"{i:02d}.webp"), os.path.join(OUT, "frames", "phone", f"{i:02d}.webp"),
                  (1280, 720), (720, 1280), 62)
            manifest["frames"].append({"i": i, "y": y, "t": t})
            print(f"rendered frame {i + 1}/{FRAMES}", flush=True)
    manifest["camera"] = {"z": CAM_Z, "walk": WALK, "note": "Blender coords (x, y forward, z up); camera level, looking +Y"}
    with open(os.path.join(OUT, "camera.json"), "w") as fh:
        json.dump(manifest, fh, indent=1)


if __name__ == "__main__":
    ctx = build()
    cam = light(ctx)
    bpy.ops.wm.save_as_mainfile(filepath=os.path.join(OUT, "temple_photoreal.blend"), copy=True)
    render(cam, ctx)
