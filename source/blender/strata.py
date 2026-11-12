"""
The Strata — Depth world asset for the portfolio (immersive v3, phase 2).

A physically plausible three-layer stack, modelled like real hardware:

  03 Foundation  dark anodised housing on rubber feet, a recessed circuit board with
                 IC packages, copper traces, vias and electrolytic capacitors.
  02 Trust       a brass plate with a counterbored lock cylinder (keyway, pin holes)
                 and a ring of socket-head bolts.
  01 Experience  a machined bezel with a recessed display: a dark panel, a wireframe
                 interface in light lines, and a pane of smoked glass on top.

The three slabs slide on four steel guide rods, separated by turned spacer collars,
so the exploded view is a real mechanism rather than floating pieces. Edges are
machined (bevelled), holes are cut, fasteners have sockets, lettering is applied.

Everything is generated from code so it can be rebuilt and reviewed.
Run in Blender 4.2+/5.x:  blender --background --python strata.py -- <output_dir>
or exec it in Blender's Python with OUTPUT_DIR (and optionally PREVIEW) set.
Units: arbitrary "metres" (the slab is 1.8 wide). glTF export is Y-up.
"""
import math
import os
import sys

import bmesh
import bpy
from mathutils import Euler, Matrix, Vector

OUTPUT_DIR = globals().get("OUTPUT_DIR")
if OUTPUT_DIR is None:
    argv = sys.argv[sys.argv.index("--") + 1:] if "--" in sys.argv else []
    OUTPUT_DIR = argv[0] if argv else os.path.join(os.path.expanduser("~"), "portfolio-3d")

W, D = 1.8, 1.2                      # slab footprint
HX, HY = W / 2, D / 2
RODS = [(sx * 0.80, sy * 0.50) for sx in (-1, 1) for sy in (-1, 1)]
HOLE_R, ROD_R, COLLAR_R = 0.024, 0.018, 0.044
COLLAR_H = 0.035
POCKET = (1.5, 0.9)                  # recess for the display / circuit board

# Layer origins (assembled). Each layer's geometry is modelled in local space, z = 0 at its lowest point.
LAYER_Z = {"foundation": 0.0, "trust": 0.10, "experience": 0.195}
# Slab body thickness per layer and where the body starts (collars sit below it).
FOUNDATION_T = 0.10
TRUST_T, TRUST_BODY0 = 0.060, COLLAR_H
EXP_T, EXP_BODY0 = 0.050, COLLAR_H

ACC = {}      # (layer, material) -> bmesh accumulator


# ---------------------------------------------------------------- scene and materials
def reset_scene():
    old = bpy.data.scenes.get("Strata")
    if old is not None:
        for o in list(old.objects):
            bpy.data.objects.remove(o, do_unlink=True)
        bpy.data.scenes.remove(old)
    for block in (bpy.data.meshes, bpy.data.curves, bpy.data.materials, bpy.data.cameras, bpy.data.lights, bpy.data.worlds):
        for item in list(block):
            if item.users == 0:
                block.remove(item)
    try:
        bpy.ops.outliner.orphans_purge(do_local_ids=True, do_linked_ids=True, do_recursive=True)
    except Exception:
        pass
    scene = bpy.data.scenes.new("Strata")
    bpy.context.window.scene = scene
    scene.unit_settings.system = "METRIC"
    return scene


def make_material(name, base, metallic, roughness, emission=None, strength=0.0, alpha=None):
    mat = bpy.data.materials.new(name)
    mat.use_nodes = True
    bsdf = mat.node_tree.nodes.get("Principled BSDF")
    bsdf.inputs["Base Color"].default_value = (*base, 1.0)
    bsdf.inputs["Metallic"].default_value = metallic
    bsdf.inputs["Roughness"].default_value = roughness
    if emission is not None:
        bsdf.inputs["Emission Color"].default_value = (*emission, 1.0)
        bsdf.inputs["Emission Strength"].default_value = strength
    if alpha is not None:
        bsdf.inputs["Alpha"].default_value = alpha
    return mat


def make_materials():
    return {
        "copper": make_material("copper", (0.80, 0.48, 0.30), 1.0, 0.30),
        "brass": make_material("brass", (0.78, 0.60, 0.30), 1.0, 0.26),
        "anodised": make_material("anodised", (0.030, 0.029, 0.031), 0.9, 0.42),
        "steel": make_material("steel", (0.62, 0.63, 0.65), 1.0, 0.28),
        "rubber": make_material("rubber", (0.012, 0.012, 0.012), 0.0, 0.92),
        "glass": make_material("glass", (0.03, 0.028, 0.026), 0.0, 0.03, alpha=0.28),
        "silicon": make_material("silicon", (0.010, 0.010, 0.012), 0.0, 0.38),
        "panel": make_material("panel", (0.018, 0.017, 0.018), 0.2, 0.6),
        "glow": make_material("glow", (0, 0, 0), 0.0, 1.0, emission=(1.0, 0.66, 0.40), strength=3.0),
        "lettering": make_material("lettering", (0.86, 0.66, 0.46), 0.7, 0.34),
    }


# ---------------------------------------------------------------- geometry helpers
def bm_for(layer, mat):
    key = (layer, mat)
    if key not in ACC:
        ACC[key] = bmesh.new()
    return ACC[key]


def put(layer, mat, mesh, loc=(0, 0, 0), rot=(0, 0, 0)):
    """Append a temporary mesh into the (layer, material) accumulator, transformed."""
    bm = bm_for(layer, mat)
    n0 = len(bm.verts)
    bm.from_mesh(mesh)
    bm.verts.ensure_lookup_table()
    m = Matrix.Translation(loc) @ Euler(rot, "XYZ").to_matrix().to_4x4()
    bmesh.ops.transform(bm, matrix=m, verts=list(bm.verts)[n0:])
    bpy.data.meshes.remove(mesh)


def _to_mesh(bm):
    me = bpy.data.meshes.new("tmp")
    bm.to_mesh(me)
    bm.free()
    return me


def _flat_edges(bm, h):
    """Edges lying wholly in the top or bottom plane (the outline of a slab)."""
    out = []
    for e in bm.edges:
        a, b = e.verts[0].co.z, e.verts[1].co.z
        if abs(abs(a) - h / 2) < 1e-6 and abs(abs(b) - h / 2) < 1e-6 and a * b > 0:
            out.append(e)
    return out


def prim_box(size, bevel=0.0, corner=0.0, seg=2):
    bm = bmesh.new()
    bmesh.ops.create_cube(bm, size=1.0)
    for v in bm.verts:
        v.co = Vector((v.co.x * size[0], v.co.y * size[1], v.co.z * size[2]))
    if corner:
        vertical = [e for e in bm.edges if abs(e.verts[0].co.z - e.verts[1].co.z) > 1e-6]
        bmesh.ops.bevel(bm, geom=vertical, offset=corner, segments=6, affect="EDGES", profile=0.5)
    if bevel:
        bmesh.ops.bevel(bm, geom=_flat_edges(bm, size[2]) if corner else list(bm.edges), offset=bevel, segments=seg, affect="EDGES", profile=0.5)
    return _to_mesh(bm)


def prim_cyl(r, h, seg=24, bevel=0.0, r2=None):
    bm = bmesh.new()
    bmesh.ops.create_cone(bm, cap_ends=True, segments=seg, radius1=r, radius2=r if r2 is None else r2, depth=h)
    if bevel:
        bmesh.ops.bevel(bm, geom=_flat_edges(bm, h), offset=bevel, segments=2, affect="EDGES", profile=0.5)
    return _to_mesh(bm)


def prim_tube(r_out, r_in, h, seg=28):
    bm = bmesh.new()
    rings = []
    for z in (-h / 2, h / 2):
        rings.append(([bm.verts.new((math.cos(2 * math.pi * i / seg) * r_out, math.sin(2 * math.pi * i / seg) * r_out, z)) for i in range(seg)],
                      [bm.verts.new((math.cos(2 * math.pi * i / seg) * r_in, math.sin(2 * math.pi * i / seg) * r_in, z)) for i in range(seg)]))
    (bo, bi), (to, ti) = rings
    for i in range(seg):
        j = (i + 1) % seg
        bm.faces.new((bo[i], bo[j], to[j], to[i]))      # outer wall
        bm.faces.new((bi[j], bi[i], ti[i], ti[j]))      # inner wall
        bm.faces.new((to[i], to[j], ti[j], ti[i]))      # top annulus
        bm.faces.new((bi[i], bi[j], bo[j], bo[i]))      # bottom annulus
    return _to_mesh(bm)


def cut(mesh, cutters):
    """Boolean difference. cutters: [(mesh, (x, y, z))]. Returns a new mesh."""
    target = bpy.data.objects.new("cut_target", mesh)
    bpy.context.collection.objects.link(target)
    made = [target]
    for i, (cm, loc) in enumerate(cutters):
        co = bpy.data.objects.new("cutter", cm)
        co.location = loc
        bpy.context.collection.objects.link(co)
        made.append(co)
        md = target.modifiers.new(f"b{i}", "BOOLEAN")
        md.operation, md.solver, md.object = "DIFFERENCE", "EXACT", co
    bpy.context.view_layer.update()
    result = bpy.data.meshes.new_from_object(target.evaluated_get(bpy.context.evaluated_depsgraph_get()))
    for o in made:
        data = o.data
        bpy.data.objects.remove(o, do_unlink=True)
        bpy.data.meshes.remove(data)
    return result


def box(layer, mat, size, loc, bevel=0.0, corner=0.0, rot=(0, 0, 0)):
    put(layer, mat, prim_box(size, bevel, corner), loc, rot)


def cyl(layer, mat, r, h, loc, seg=24, bevel=0.0, r2=None):
    put(layer, mat, prim_cyl(r, h, seg, bevel, r2), loc)


def text(layer, mat, body, size, loc, extrude=0.0025, align="LEFT"):
    curve = bpy.data.curves.new("txt", "FONT")
    curve.body, curve.size, curve.extrude, curve.align_x = body, size, extrude, align
    curve.resolution_u = 3
    obj = bpy.data.objects.new("txt", curve)
    bpy.context.collection.objects.link(obj)
    bpy.context.view_layer.update()
    mesh = bpy.data.meshes.new_from_object(obj.evaluated_get(bpy.context.evaluated_depsgraph_get()))
    bpy.data.objects.remove(obj, do_unlink=True)
    bpy.data.curves.remove(curve)
    put(layer, mat, mesh, loc)


def socket_bolt(layer, head_mat, loc, r=0.02, h=0.013):
    """A socket-head cap screw: bevelled head with a recessed socket."""
    bm = bmesh.new()
    bmesh.ops.create_cone(bm, cap_ends=True, segments=20, radius1=r, radius2=r, depth=h)
    bmesh.ops.bevel(bm, geom=_flat_edges(bm, h), offset=0.0025, segments=2, affect="EDGES", profile=0.5)
    top = max(bm.faces, key=lambda f: f.calc_center_median().z)
    res = bmesh.ops.inset_region(bm, faces=[top], thickness=r * 0.55, depth=0.0)
    for v in top.verts:
        v.co.z -= h * 0.55
    bmesh.ops.recalc_face_normals(bm, faces=list(bm.faces))
    put(layer, head_mat, _to_mesh(bm), loc)
    cyl(layer, "silicon", r * 0.3, 0.0008, (loc[0], loc[1], loc[2] + h * 0.5 - h * 0.55 + 0.0006), seg=6)


def trace(layer, pts, width=0.012, thick=0.003, z=0.0):
    """A copper trace along axis-aligned points, with a round joint at every corner."""
    for (x0, y0), (x1, y1) in zip(pts, pts[1:]):
        length = abs(x1 - x0) + abs(y1 - y0)
        box(layer, "copper", (length if y0 == y1 else width, width if y0 == y1 else length, thick), ((x0 + x1) / 2, (y0 + y1) / 2, z + thick / 2))
    for x, y in pts[1:-1]:
        cyl(layer, "copper", width / 2, thick, (x, y, z + thick / 2), seg=10)


def via(layer, loc, r=0.014):
    cyl(layer, "copper", r, 0.004, (loc[0], loc[1], loc[2] + 0.002), seg=14)
    cyl(layer, "silicon", r * 0.45, 0.0012, (loc[0], loc[1], loc[2] + 0.0042), seg=10)


def outline(layer, mat, x0, y0, x1, y1, t, z, thick=0.0012):
    cx, cy = (x0 + x1) / 2, (y0 + y1) / 2
    w, h = x1 - x0, y1 - y0
    box(layer, mat, (w, t, thick), (cx, y0, z))
    box(layer, mat, (w, t, thick), (cx, y1, z))
    box(layer, mat, (t, h, thick), (x0, cy, z))
    box(layer, mat, (t, h, thick), (x1, cy, z))


# ---------------------------------------------------------------- the three layers
def hole_cutters(thickness):
    return [(prim_cyl(HOLE_R, thickness * 4, 24), (x, y, thickness / 2)) for x, y in RODS]


def build_foundation():
    L = "foundation"
    body = prim_box((W, D, FOUNDATION_T), corner=0.04, bevel=0.007)
    pocket = prim_box((POCKET[0], POCKET[1], 0.1), corner=0.02)
    body = cut(body, [*hole_cutters(FOUNDATION_T), (pocket, (0, 0, FOUNDATION_T / 2 - 0.012 + 0.05))])
    put(L, "anodised", body, (0, 0, FOUNDATION_T / 2))
    for fx in (-0.65, 0.65):
        for fy in (-0.38, 0.38):
            cyl(L, "rubber", 0.07, 0.025, (fx, fy, -0.0125), seg=28, bevel=0.005)

    board_top = FOUNDATION_T - 0.012 + 0.006                       # board seated in the pocket
    box(L, "panel", (POCKET[0] - 0.02, POCKET[1] - 0.02, 0.006), (0, 0, FOUNDATION_T - 0.012 + 0.003), bevel=0.001)
    z = board_top
    # Three IC packages in a row with gull-wing leads, pin-1 dots and markings.
    names = ("DATA", "STATE", "EVENTS")
    for ci, cx in enumerate((-0.48, 0.0, 0.48)):
        cy = 0.12
        box(L, "silicon", (0.30, 0.22, 0.016), (cx, cy, z + 0.008), bevel=0.004)
        text(L, "lettering", names[ci], 0.04, (cx, cy - 0.018, z + 0.016), extrude=0.0012, align="CENTER")
        cyl(L, "lettering", 0.007, 0.0012, (cx - 0.12, cy + 0.075, z + 0.0166), seg=12)
        xs = [cx - 0.126 + k * 0.028 for k in range(10)]
        for x in xs:
            for sign in (-1, 1):
                box(L, "copper", (0.012, 0.024, 0.004), (x, cy + sign * 0.118, z + 0.003))
        # bottom leads fan out to three short buses, then down to the rail
        for k, x in enumerate(xs):
            end = (-0.20, -0.20, -0.20, -0.26, -0.26, -0.26, -0.32, -0.32, -0.32, -0.32)[k]
            trace(L, [(x, cy - 0.118), (x, end)], z=z)
        for a, b, y in ((0, 2, -0.20), (3, 5, -0.26), (6, 9, -0.32)):
            trace(L, [(xs[a], y), (xs[b], y)], z=z)
            trace(L, [((xs[a] + xs[b]) / 2, y), ((xs[a] + xs[b]) / 2, -0.42)], z=z)
        # top leads run up to vias
        for k, x in enumerate(xs):
            top = 0.285 + (k % 3) * 0.02
            trace(L, [(x, cy + 0.118), (x, top)], z=z)
            via(L, (x, top, z))
    trace(L, [(-0.62, -0.42), (0.62, -0.42)], width=0.016, z=z)
    for x in (-0.62, 0.62):
        via(L, (x, -0.42, z), 0.02)
    # electrolytic capacitors and chip resistors along the back edge
    for i, x in enumerate((-0.62, -0.46, 0.46, 0.62)):
        cyl(L, "steel", 0.032, 0.05, (x, 0.385, z + 0.025), seg=28, bevel=0.003)
        cyl(L, "silicon", 0.022, 0.0012, (x, 0.385, z + 0.0506), seg=24)
    for i in range(8):
        x = -0.30 + i * 0.085
        box(L, "silicon", (0.032, 0.016, 0.007), (x, 0.385, z + 0.0035), bevel=0.0015)
        box(L, "copper", (0.006, 0.016, 0.0075), (x - 0.013, 0.385, z + 0.00375))
        box(L, "copper", (0.006, 0.016, 0.0075), (x + 0.013, 0.385, z + 0.00375))
    text(L, "lettering", "03 / FOUNDATION", 0.052, (-0.75, -0.545, FOUNDATION_T))
    text(L, "lettering", "PK-003", 0.052, (0.75, -0.545, FOUNDATION_T), align="RIGHT")
    for x, y in RODS:
        cyl(L, "steel", 0.034, 0.003, (x, y, FOUNDATION_T + 0.0015), seg=24)     # washer under the rod


def collars(L):
    for x, y in RODS:
        put(L, "steel", prim_tube(COLLAR_R, ROD_R + 0.0035, COLLAR_H, 32), (x, y, COLLAR_H / 2))


def build_trust():
    L = "trust"
    collars(L)
    top = TRUST_BODY0 + TRUST_T
    body = prim_box((W, D, TRUST_T), corner=0.04, bevel=0.006)
    bore = prim_cyl(0.31, 0.2, 64)
    body = cut(body, [*hole_cutters(TRUST_T), (bore, (0, 0, TRUST_T / 2 - 0.02 + 0.1))])
    put(L, "brass", body, (0, 0, TRUST_BODY0 + TRUST_T / 2))
    floor = top - 0.02
    # Lock cylinder: steel shell, brass plug with keyway, pin holes and a knurled-looking ring.
    cyl(L, "steel", 0.288, 0.018, (0, 0, floor + 0.009), seg=64, bevel=0.003)
    put(L, "steel", prim_tube(0.288, 0.256, 0.0016, 64), (0, 0, floor + 0.0188))
    plug = cut(prim_cyl(0.185, 0.012, 64, bevel=0.0025), [(prim_box((0.034, 0.2, 0.05)), (0, -0.03, 0)), (prim_box((0.1, 0.034, 0.05)), (0, 0.04, 0))])
    put(L, "brass", plug, (0, 0, floor + 0.018 + 0.006))
    for i in range(7):
        a = math.radians(90 + i * 360 / 7)
        cyl(L, "silicon", 0.0095, 0.002, (math.cos(a) * 0.23, math.sin(a) * 0.23, floor + 0.0185), seg=14)
    for i in range(8):                                                       # ring of cap screws
        a = math.radians(22.5 + i * 45)
        socket_bolt(L, "steel", (math.cos(a) * 0.425, math.sin(a) * 0.425, top + 0.0065))
    text(L, "lettering", "02 / TRUST", 0.052, (-0.75, -0.545, top))
    text(L, "lettering", "PK-002", 0.052, (0.75, -0.545, top), align="RIGHT")
    for x, y in RODS:
        cyl(L, "steel", 0.034, 0.003, (x, y, top + 0.0015), seg=24)


def build_experience():
    L = "experience"
    collars(L)
    top = EXP_BODY0 + EXP_T
    body = prim_box((W, D, EXP_T), corner=0.04, bevel=0.006)
    pocket = prim_box((POCKET[0], POCKET[1], 0.1), corner=0.025)
    body = cut(body, [*hole_cutters(EXP_T), (pocket, (0, 0, EXP_T / 2 - 0.014 + 0.05))])
    put(L, "copper", body, (0, 0, EXP_BODY0 + EXP_T / 2))
    floor = top - 0.014
    box(L, "panel", (POCKET[0] - 0.02, POCKET[1] - 0.02, 0.002), (0, 0, floor + 0.001), bevel=0.0005)
    z = floor + 0.0026
    # The interface under the glass: header, nav, a hero card, three cards and a button, as light lines.
    px, py = (POCKET[0] - 0.02) / 2, (POCKET[1] - 0.02) / 2
    outline(L, "glow", -px + 0.04, py - 0.13, px - 0.04, py - 0.04, 0.004, z)                 # header
    for i in range(4):
        box(L, "glow", (0.09, 0.006, 0.0012), (-px + 0.18 + i * 0.13, py - 0.085, z))           # nav items
    box(L, "glow", (0.10, 0.04, 0.0012), (px - 0.12, py - 0.085, z))                          # call to action
    outline(L, "glow", -px + 0.04, py - 0.42, 0.10, py - 0.17, 0.004, z)                     # hero card
    for i, w in enumerate((0.50, 0.38, 0.44)):
        box(L, "glow", (w, 0.012, 0.0012), (-px + 0.07 + w / 2, py - 0.23 - i * 0.05, z))     # headline lines
    box(L, "glow", (0.16, 0.05, 0.0012), (-px + 0.15, py - 0.36, z))                          # button
    cx0 = 0.16
    for i in range(3):
        x0 = cx0 + i * 0.17
        if x0 + 0.15 > px - 0.04:
            break
    outline(L, "glow", 0.14, py - 0.42, px - 0.04, py - 0.17, 0.004, z)                        # side card
    for i in range(2):
        box(L, "glow", (0.30 - i * 0.08, 0.010, 0.0012), (0.14 + 0.18 + (0.0 - i * 0.04), py - 0.23 - i * 0.045, z))
    for i in range(3):
        x0 = -px + 0.04 + i * 0.485
        outline(L, "glow", x0, -py + 0.04, x0 + 0.44, py - 0.50, 0.004, z)                     # three cards
        cyl(L, "glow", 0.022, 0.0012, (x0 + 0.06, py - 0.60, z), seg=18)
        box(L, "glow", (0.22, 0.010, 0.0012), (x0 + 0.26, py - 0.595, z))
        box(L, "glow", (0.30, 0.008, 0.0012), (x0 + 0.22, py - 0.63, z))
    # Smoked glass pane in the recess.
    box(L, "glass", (POCKET[0] - 0.012, POCKET[1] - 0.012, 0.009), (0, 0, top - 0.0065), bevel=0.0012, corner=0.02)
    text(L, "lettering", "01 / EXPERIENCE", 0.052, (-0.75, -0.545, top))
    text(L, "lettering", "PK-001", 0.052, (0.75, -0.545, top), align="RIGHT")
    for x, y in RODS:
        cyl(L, "steel", 0.034, 0.003, (x, y, top + 0.0015), seg=24)


def build_rod_parts():
    """Prototypes the runtime clones: a unit-length shaft (origin at its foot) and an acorn nut."""
    R = "rod"
    put(R, "steel", prim_cyl(ROD_R, 1.0, 16), (0, 0, 0.5))
    nut = bmesh.new()
    bmesh.ops.create_cone(nut, cap_ends=True, segments=6, radius1=0.034, radius2=0.034, depth=0.03)
    bmesh.ops.bevel(nut, geom=_flat_edges(nut, 0.03), offset=0.005, segments=2, affect="EDGES", profile=0.5)
    put("nut", "steel", _to_mesh(nut), (0, 0, 0.015))
    cyl("nut", "steel", 0.02, 0.012, (0, 0, 0.034), seg=18, r2=0.012)


# ---------------------------------------------------------------- assemble, export, preview
def smooth_by_angle(obj, angle=32):
    bpy.ops.object.select_all(action="DESELECT")
    obj.select_set(True)
    bpy.context.view_layer.objects.active = obj
    try:
        bpy.ops.object.shade_auto_smooth(angle=math.radians(angle))
    except Exception:
        bpy.ops.object.shade_smooth()


def assemble(mats):
    parents = {}
    for layer, z in LAYER_Z.items():
        p = bpy.data.objects.new(f"Layer_{layer.capitalize()}", None)
        p.location = (0, 0, z)
        bpy.context.collection.objects.link(p)
        parents[layer] = p
    objects = []
    for (layer, mat), bm in ACC.items():
        me = bpy.data.meshes.new(f"{layer}_{mat}")
        bm.to_mesh(me)
        bm.free()
        me.materials.append(mats[mat])
        o = bpy.data.objects.new(f"{layer}_{mat}", me)
        bpy.context.collection.objects.link(o)
        if layer in parents:
            o.parent = parents[layer]
        elif layer == "rod":
            o.name = "RodShaft"
        elif layer == "nut":
            o.name = f"RodNut_{mat}"
        smooth_by_angle(o, 25 if mat in ("lettering", "glow") else 32)
        objects.append(o)
    ACC.clear()
    return parents, objects


def stats():
    tris = 0
    parts = {}
    for o in bpy.context.scene.objects:
        if o.type == "MESH":
            o.data.calc_loop_triangles()
            n = len(o.data.loop_triangles)
            tris += n
            parts[o.name] = n
    return tris, parts


def export():
    os.makedirs(os.path.join(OUTPUT_DIR, "export"), exist_ok=True)
    os.makedirs(os.path.join(OUTPUT_DIR, "blend"), exist_ok=True)
    glb = os.path.join(OUTPUT_DIR, "export", "strata.glb")
    bpy.ops.object.select_all(action="DESELECT")
    bpy.ops.export_scene.gltf(
        filepath=glb, export_format="GLB", use_selection=False, export_apply=True, export_yup=True,
        export_materials="EXPORT", export_cameras=False, export_lights=False, export_animations=False,
        export_draco_mesh_compression_enable=False, use_active_scene=True, export_texcoords=False,
    )
    bpy.ops.wm.save_as_mainfile(filepath=os.path.join(OUTPUT_DIR, "blend", "strata.blend"), copy=True)
    return glb


def preview(parents, mats):
    scene = bpy.context.scene
    scene.render.engine = "BLENDER_EEVEE"
    scene.render.resolution_x, scene.render.resolution_y = 1280, 900
    try:
        scene.eevee.taa_render_samples = 48
    except Exception:
        pass
    world = bpy.data.worlds.new("Studio")
    world.use_nodes = True
    bg = world.node_tree.nodes["Background"]
    bg.inputs[0].default_value = (0.05, 0.045, 0.042, 1)
    bg.inputs[1].default_value = 0.6
    scene.world = world
    floor_mat = make_material("floor", (0.02, 0.018, 0.017), 0.0, 0.32)
    plane = bpy.data.objects.new("Floor", bpy.data.meshes.new("Floor"))
    bm = bmesh.new()
    bmesh.ops.create_grid(bm, x_segments=1, y_segments=1, size=12)
    bm.to_mesh(plane.data); bm.free()
    plane.data.materials.append(floor_mat)
    plane.location.z = -0.025
    bpy.context.collection.objects.link(plane)

    shaft = bpy.data.objects["RodShaft"]
    nut_parts = [o for o in bpy.data.objects if o.name.startswith("RodNut")]
    shaft.hide_render = True
    for n in nut_parts:
        n.hide_render = True
    clones = []

    def place_rods(shaft_len):
        for c in clones:
            bpy.data.objects.remove(c, do_unlink=True)
        clones.clear()
        for x, y in RODS:
            s = shaft.copy(); s.data = shaft.data
            s.location, s.scale, s.hide_render = (x, y, 0), (1, 1, shaft_len), False
            bpy.context.collection.objects.link(s); clones.append(s)
            for n in nut_parts:
                c = n.copy(); c.data = n.data
                c.location, c.hide_render = (x, y, shaft_len - 0.005), False
                bpy.context.collection.objects.link(c); clones.append(c)

    cam_data = bpy.data.cameras.new("Cam")
    cam_data.lens = 55
    cam = bpy.data.objects.new("Cam", cam_data)
    cam.location = (2.7, -3.4, 1.9)
    bpy.context.collection.objects.link(cam)
    target = bpy.data.objects.new("Target", None)
    bpy.context.collection.objects.link(target)
    t = cam.constraints.new("TRACK_TO"); t.target = target
    scene.camera = cam
    for loc, energy, color, size in (((-2.8, -2.0, 4.2), 700, (1, 0.86, 0.7), 3.0), ((3.6, 1.5, 2.4), 260, (0.7, 0.8, 1.0), 2.4), ((0, 3.4, 2.6), 380, (1, 0.62, 0.36), 2.4)):
        light = bpy.data.lights.new("L", "AREA")
        light.energy, light.color, light.size = energy, color, size
        lo = bpy.data.objects.new("L", light)
        lo.location = loc
        bpy.context.collection.objects.link(lo)
        tc = lo.constraints.new("TRACK_TO"); tc.target = target

    outputs = {}
    for state, lift, shaft_len, tz in (("assembled", (0, 0), 0.31, 0.12), ("exploded", (0.55, 1.1), 1.42, 0.62)):
        parents["trust"].location.z = LAYER_Z["trust"] + lift[0]
        parents["experience"].location.z = LAYER_Z["experience"] + lift[1]
        target.location = (0, 0, tz)
        place_rods(shaft_len)
        path = os.path.join(OUTPUT_DIR, "renders", f"strata-{state}.png")
        os.makedirs(os.path.dirname(path), exist_ok=True)
        scene.render.filepath = path
        bpy.ops.render.render(write_still=True)
        outputs[state] = path
    return outputs


reset_scene()
mats = make_materials()
build_foundation()
build_trust()
build_experience()
build_rod_parts()
parents, objects = assemble(mats)
triangles, parts = stats()
glb_path = export()
previews = preview(parents, mats) if globals().get("PREVIEW", True) else None
result = {"glb": glb_path, "bytes": os.path.getsize(glb_path), "triangles": triangles, "parts": parts, "previews": previews}
print(result)
