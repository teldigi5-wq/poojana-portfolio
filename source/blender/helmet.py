"""
Corinthian (Spartan-style) bronze helmet for the Hellenic hero.

Built from code so it can be rebuilt and reviewed:

  Shell   one parametric surface. Each azimuth has its own lower edge, which carves the
          classic Corinthian silhouette: arched brow, open eye region, a narrow nose guard,
          long cheek guards that curve in toward the mouth, and a flared neck guard.
  Rim     a rolled bronze edge swept round the whole opening, plus an inset bead line.
  Crest   a longitudinal horsehair crest on a bronze rail, with grooved strands.

Run in Blender 4.2+/5.x with OUTPUT_DIR set (exec the file) or:
  blender --background --python helmet.py -- <output_dir>
Front of the helmet is -Y in Blender, which becomes +Z in the Y-up glTF export.
"""
import math
import os
import random
import sys

import bmesh
import bpy
from mathutils import Vector

OUTPUT_DIR = globals().get("OUTPUT_DIR")
if OUTPUT_DIR is None:
    argv = sys.argv[sys.argv.index("--") + 1:] if "--" in sys.argv else []
    OUTPUT_DIR = argv[0] if argv else os.path.join(os.path.expanduser("~"), "portfolio-3d")
PREVIEW = globals().get("PREVIEW", True)

RX, RY, RZ = 0.092, 0.114, 0.116          # skull ellipsoid radii (width, depth, height)
NP, NT = 168, 34                          # azimuth and polar resolution
rad = math.radians


def sstep(a, b, x):
    t = max(0.0, min(1.0, (x - a) / (b - a)))
    return t * t * (3 - 2 * t)


def lerp(a, b, t):
    return a + (b - a) * t


# ---------------------------------------------------------------- shape
def edge_theta(phi):
    """Polar angle (radians) of the lower edge at azimuth phi (0 = front)."""
    a = abs(math.degrees(phi))
    nose = 131.0
    brow = 83.0 - 6.0 * math.sin(max(0.0, min(1.0, (a - 9.0) / 31.0)) * math.pi)
    cheek = lerp(142.0, 128.0, sstep(70.0, 118.0, a))
    e = lerp(nose, brow, sstep(6.5, 10.5, a))
    e = lerp(e, cheek, sstep(40.0, 47.0, a))
    return rad(e)


def surface(theta, phi):
    """Point on the helmet outer surface."""
    t = max(0.0, (theta - rad(90.0)) / rad(52.0))           # 0 above the equator, 1 at the lowest edge
    s = math.sin(theta) if theta < rad(90.0) else 1.0 - 0.20 * t * t
    a = abs(math.degrees(phi))
    cheek_mask = sstep(34.0, 52.0, a) * (1.0 - sstep(88.0, 116.0, a))
    neck_mask = sstep(96.0, 150.0, a)
    m = 1.0 - 0.34 * cheek_mask * sstep(0.1, 0.7, t)        # cheek guards curve in toward the face
    m *= 1.0 + 0.16 * neck_mask * sstep(0.2, 0.9, t)        # neck guard flares out
    # a slight brow bulge so the forehead reads as a separate form
    brow = sstep(0.0, 30.0, 32.0 - a) * sstep(rad(60.0), rad(86.0), theta) * (1 - sstep(rad(86.0), rad(100.0), theta))
    x = RX * s * math.sin(phi) * m
    y = -RY * s * math.cos(phi) * m - 0.006 * brow
    # neck guard also sweeps back a little
    y += 0.018 * neck_mask * sstep(0.2, 1.0, t)
    z = RZ * math.cos(theta)
    return Vector((x, y, z))


# ---------------------------------------------------------------- scene and materials
def reset_scene():
    for coll in list(bpy.data.collections):
        if coll.name.startswith("Helmet"):
            bpy.data.collections.remove(coll)
    for o in [o for o in bpy.data.objects if o.name.startswith(("Helmet", "HM_", "Preview_"))]:
        bpy.data.objects.remove(o, do_unlink=True)
    for block in (bpy.data.meshes, bpy.data.curves, bpy.data.materials):
        for item in list(block):
            if item.users == 0:
                block.remove(item)


def material(name, base, metallic, roughness, sheen=0.0):
    m = bpy.data.materials.new(name)
    m.use_nodes = True
    b = m.node_tree.nodes["Principled BSDF"]
    b.inputs["Base Color"].default_value = (*base, 1.0)
    b.inputs["Metallic"].default_value = metallic
    b.inputs["Roughness"].default_value = roughness
    if sheen and "Sheen Weight" in b.inputs:
        b.inputs["Sheen Weight"].default_value = sheen
        b.inputs["Sheen Roughness"].default_value = 0.5
    return m


def make_materials():
    return {
        "bronze": material("bronze", (0.66, 0.38, 0.15), 1.0, 0.30),
        "bronze_dark": material("bronze_dark", (0.30, 0.16, 0.07), 0.9, 0.46),
        "hair": material("horsehair", (0.30, 0.008, 0.008), 0.0, 0.92, sheen=0.6),
    }


def mesh_object(name, bm, mat, smooth=True):
    me = bpy.data.meshes.new(name)
    bm.to_mesh(me)
    bm.free()
    me.materials.append(mat)
    if smooth:
        for p in me.polygons:
            p.use_smooth = True
    ob = bpy.data.objects.new(name, me)
    bpy.context.scene.collection.objects.link(ob)
    return ob


# ---------------------------------------------------------------- parts
def build_shell(mat):
    bm = bmesh.new()
    rows = []
    for j in range(NP):
        phi = -math.pi + 2 * math.pi * j / NP
        tmax = edge_theta(phi)
        col = []
        for i in range(NT + 1):
            u = i / NT
            theta = tmax * (u ** 0.92)
            col.append(bm.verts.new(surface(theta, phi)))
        rows.append(col)
    for j in range(NP):
        k = (j + 1) % NP
        for i in range(NT):
            try:
                bm.faces.new((rows[j][i], rows[k][i], rows[k][i + 1], rows[j][i + 1]))
            except ValueError:
                pass
    bmesh.ops.remove_doubles(bm, verts=bm.verts, dist=1e-6)
    bmesh.ops.recalc_face_normals(bm, faces=bm.faces)
    # thin wall so the edge is not paper
    ob = mesh_object("HM_Shell", bm, mat)
    solid = ob.modifiers.new("wall", "SOLIDIFY")
    solid.thickness = 0.0032
    solid.offset = -1.0
    return ob


def edge_points(offset_theta=0.0, lift=0.0, step=1):
    pts = []
    for j in range(0, NP, step):
        phi = -math.pi + 2 * math.pi * j / NP
        theta = max(0.05, edge_theta(phi) + offset_theta)
        p = surface(theta, phi)
        n = Vector((p.x / RX ** 2, p.y / RY ** 2, p.z / RZ ** 2)).normalized()
        pts.append(p + n * lift)
    return pts


def tube(name, pts, radius, mat, cyclic=True):
    cu = bpy.data.curves.new(name, "CURVE")
    cu.dimensions = "3D"
    cu.bevel_depth = radius
    cu.bevel_resolution = 4
    cu.use_fill_caps = True
    sp = cu.splines.new("POLY")
    sp.points.add(len(pts) - 1)
    for p, v in zip(sp.points, pts):
        p.co = (v.x, v.y, v.z, 1.0)
    sp.use_cyclic_u = cyclic
    ob = bpy.data.objects.new(name, cu)
    ob.data.materials.append(mat)
    bpy.context.scene.collection.objects.link(ob)
    return ob


def build_crest(mats):
    # path over the top, front (alpha < 0) to back (alpha > 0)
    a0, a1 = rad(-30.0), rad(88.0)
    n_u, n_a = 200, 12
    rnd = random.Random(7)
    rail_pts, base_pts = [], []

    def base(alpha):
        p = Vector((0.0, RY * math.sin(alpha) * (1.0 + 0.10 * max(0.0, math.sin(alpha))), RZ * math.cos(alpha)))
        n = Vector((0.0, p.y / RY ** 2, p.z / RZ ** 2)).normalized()
        return p, n

    for i in range(n_u + 1):
        alpha = lerp(a0, a1, i / n_u)
        p, n = base(alpha)
        base_pts.append((p, n))
        rail_pts.append(p + n * 0.003)
    rail = tube("HM_Rail", rail_pts, 0.0065, mats["bronze"], cyclic=False)

    bm = bmesh.new()
    cols = []
    seed_jitter = [rnd.random() for _ in range(n_u + 1)]
    for i, (p, n) in enumerate(base_pts):
        u = i / n_u
        env = math.sin(math.pi * min(1.0, max(0.0, (u - 0.015) / 0.97))) ** 0.5
        h = 0.010 + 0.068 * env
        w = 0.0105 * (0.7 + 0.3 * env)
        # sweep backwards: front leans slightly forward, back streams down and out
        lean = Vector((0.0, 1.0, 0.0)) * (0.12 + 0.85 * max(0.0, u - 0.5) ** 1.3)
        d = (n + lean - Vector((0.0, 0.0, 0.55 * max(0.0, u - 0.6))))
        d.normalize()
        col = []
        for k in range(n_a + 1):
            a = math.pi * k / n_a
            top = math.sin(a) ** 0.45
            hh = h * top * (0.94 + 0.12 * seed_jitter[i]) if top > 0.001 else 0.0
            groove = 0.0011 * math.sin(i * 1.7 + a * 4.0) + 0.0007 * math.sin(i * 0.43)
            x = w * math.cos(a) + groove
            col.append(bm.verts.new(p + n * 0.002 + d * hh + Vector((x, 0.0, 0.0))))
        cols.append(col)
    for i in range(n_u):
        for k in range(n_a):
            try:
                bm.faces.new((cols[i][k], cols[i + 1][k], cols[i + 1][k + 1], cols[i][k + 1]))
            except ValueError:
                pass
    bmesh.ops.recalc_face_normals(bm, faces=bm.faces)
    crest = mesh_object("HM_Crest", bm, mats["hair"])
    return rail, crest


def build_details(mats):
    objs = []
    objs.append(tube("HM_Rim", edge_points(lift=0.0006), 0.0036, mats["bronze"]))
    objs.append(tube("HM_Bead", edge_points(offset_theta=-rad(5.2), lift=0.0014), 0.0016, mats["bronze_dark"]))
    # brow ridge: a raised band across the forehead, above the eye openings
    ridge = []
    for j in range(NP + 1):
        phi = -rad(46.0) + rad(92.0) * j / NP
        p = surface(rad(70.0), phi)
        n = Vector((p.x / RX ** 2, p.y / RY ** 2, p.z / RZ ** 2)).normalized()
        ridge.append(p + n * 0.0012)
    objs.append(tube("HM_BrowRidge", ridge, 0.0026, mats["bronze"], cyclic=False))
    # small rivets along the cheek guards and neck guard
    for sign in (-1, 1):
        for deg, tdeg in ((58, 126), (70, 130), (84, 128), (100, 120), (118, 112), (136, 108)):
            phi = sign * rad(deg)
            p = surface(rad(tdeg - 8), phi)
            n = Vector((p.x / RX ** 2, p.y / RY ** 2, p.z / RZ ** 2)).normalized()
            bm = bmesh.new()
            bmesh.ops.create_uvsphere(bm, u_segments=10, v_segments=6, radius=0.0042)
            for v in bm.verts:
                v.co += p + n * 0.0008
            objs.append(mesh_object(f"HM_Rivet_{sign}_{deg}", bm, mats["bronze_dark"]))
    return objs


# ---------------------------------------------------------------- assemble, export, preview
def join(objs, name):
    bpy.ops.object.select_all(action="DESELECT")
    for ob in objs:
        if ob.type == "MESH" and ob.modifiers:
            bpy.context.view_layer.objects.active = ob
            for mod in list(ob.modifiers):
                bpy.ops.object.modifier_apply(modifier=mod.name)
    for ob in objs:
        if ob.type == "CURVE":
            bpy.context.view_layer.objects.active = ob
            ob.select_set(True)
            bpy.ops.object.convert(target="MESH")
            ob.select_set(False)
    for ob in objs:
        ob.select_set(True)
    bpy.context.view_layer.objects.active = objs[0]
    bpy.ops.object.join()
    ob = bpy.context.view_layer.objects.active
    ob.name = name
    ob.data.name = name
    return ob


def export(parts):
    path = os.path.join(OUTPUT_DIR, "assets", "helmet.glb")
    os.makedirs(os.path.dirname(path), exist_ok=True)
    bpy.ops.object.select_all(action="DESELECT")
    for ob in parts:
        ob.select_set(True)
    bpy.ops.export_scene.gltf(filepath=path, use_selection=True, export_format="GLB", export_apply=True,
                              export_yup=True, export_image_format="NONE", export_cameras=False, export_lights=False)
    return path


def preview(parts):
    sc = bpy.context.scene
    sc.render.engine = "CYCLES"
    sc.cycles.samples = 48
    sc.cycles.use_denoising = True
    sc.render.resolution_x, sc.render.resolution_y = 720, 720
    sc.render.film_transparent = False
    world = bpy.data.worlds.new("Preview_World")
    world.use_nodes = True
    world.node_tree.nodes["Background"].inputs[0].default_value = (0.16, 0.14, 0.12, 1)
    world.node_tree.nodes["Background"].inputs[1].default_value = 1.2
    sc.world = world
    # emissive softboxes give the bronze something to reflect
    for name, loc, size, strength, tint in (("Preview_L", (-0.6, -0.5, 0.25), 0.5, 14, (1, 0.82, 0.62)),
                                            ("Preview_R", (0.6, -0.4, 0.1), 0.4, 9, (0.7, 0.8, 1.0)),
                                            ("Preview_T", (0.0, -0.1, 0.8), 0.6, 10, (1, 0.95, 0.9)),
                                            ("Preview_B", (0.0, 0.7, 0.3), 0.5, 6, (1, 0.7, 0.5))):
        bpy.ops.mesh.primitive_plane_add(size=size, location=loc)
        pl = bpy.context.active_object
        pl.name = name
        pl.visible_camera = False
        direction = Vector((0, 0, 0.03)) - Vector(loc)
        pl.rotation_euler = direction.to_track_quat("-Z", "Y").to_euler()
        mat = bpy.data.materials.new(name)
        mat.use_nodes = True
        nt = mat.node_tree
        for n in list(nt.nodes):
            nt.nodes.remove(n)
        em = nt.nodes.new("ShaderNodeEmission")
        em.inputs[0].default_value = (*tint, 1)
        em.inputs[1].default_value = strength
        out = nt.nodes.new("ShaderNodeOutputMaterial")
        nt.links.new(em.outputs[0], out.inputs[0])
        pl.data.materials.append(mat)
    cam_data = bpy.data.cameras.new("Preview_Cam")
    cam_data.lens = 70
    cam = bpy.data.objects.new("Preview_Cam", cam_data)
    sc.collection.objects.link(cam)
    sc.camera = cam
    os.makedirs(os.path.join(OUTPUT_DIR, "renders"), exist_ok=True)
    for label, azim, elev in (("front", 0, 6), ("three_quarter", 38, 12), ("side", 90, 4), ("rear", 150, 16)):
        r = 0.78
        cam.location = (math.sin(rad(azim)) * r, -math.cos(rad(azim)) * r, 0.03 + math.sin(rad(elev)) * r)
        cam.rotation_euler = (Vector((0, 0, 0.03)) - cam.location).to_track_quat("-Z", "Y").to_euler()
        sc.render.filepath = os.path.join(OUTPUT_DIR, "renders", f"helmet_{label}.png")
        bpy.ops.render.render(write_still=True)


def main():
    reset_scene()
    mats = make_materials()
    shell = build_shell(mats["bronze"])
    details = build_details(mats)
    rail, crest = build_crest(mats)
    bronze = join([shell, rail] + details, "Helmet_Bronze")
    crest.name = "Helmet_Crest"
    path = export([bronze, crest])
    tris = sum(len(o.data.polygons) for o in (bronze, crest))
    if PREVIEW:
        preview([bronze, crest])
    return {"glb": path, "polygons": tris, "size": os.path.getsize(path)}


result = main()
