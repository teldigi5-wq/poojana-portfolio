"""
The Gateway — hero world asset for the portfolio (immersive v3, phase 1).

Builds a machined copper portal arch with an emissive inner seam, engraved ticks
and a dark-metal plinth, then exports a compact GLB for Three.js.

Run in Blender 4.2+ / 5.x:
  blender --background --python gateway.py -- <output_dir>
or paste into Blender's Python console with OUTPUT_DIR set.

Everything is generated from code so the asset can be rebuilt and reviewed.
Units: metres. glTF export is Y-up.
"""
import math
import os
import sys

import bmesh
import bpy
from mathutils import Vector

OUTPUT_DIR = globals().get("OUTPUT_DIR")
if OUTPUT_DIR is None:
    argv = sys.argv[sys.argv.index("--") + 1:] if "--" in sys.argv else []
    OUTPUT_DIR = argv[0] if argv else os.path.join(os.path.expanduser("~"), "portfolio-3d")

# Arch proportions
WIDTH = 2.4          # inner width between legs (centre line)
LEG_HEIGHT = 2.3     # straight part of the legs
RADIUS = WIDTH / 2   # semicircular head
FRAME_W = 0.16       # face width of the frame
FRAME_D = 0.34       # depth of the frame
SEAM_R = 0.018       # radius of the emissive seam
TICKS = 29


def reset_scene():
    """Build in a fresh, dedicated scene so an open Blender session is never wiped."""
    old = bpy.data.scenes.get("Gateway")
    if old is not None:
        for o in list(old.objects):
            bpy.data.objects.remove(o, do_unlink=True)
        bpy.data.scenes.remove(old)
    for block in (bpy.data.meshes, bpy.data.curves, bpy.data.materials, bpy.data.cameras, bpy.data.lights, bpy.data.worlds):
        for item in list(block):
            if item.users == 0:
                block.remove(item)
    scene = bpy.data.scenes.new("Gateway")
    bpy.context.window.scene = scene
    scene.unit_settings.system = "METRIC"
    return scene


def material(name, base, metallic, roughness, emission=None, strength=0.0):
    mat = bpy.data.materials.new(name)
    mat.use_nodes = True
    bsdf = mat.node_tree.nodes.get("Principled BSDF")
    bsdf.inputs["Base Color"].default_value = (*base, 1.0)
    bsdf.inputs["Metallic"].default_value = metallic
    bsdf.inputs["Roughness"].default_value = roughness
    if emission is not None:
        bsdf.inputs["Emission Color"].default_value = (*emission, 1.0)
        bsdf.inputs["Emission Strength"].default_value = strength
    return mat


def arch_points(inset=0.0, segments=48):
    """Centre-line of the arch: left leg up, semicircle over, right leg down."""
    r = RADIUS - inset
    pts = [Vector((-r, 0.0, 0.0)), Vector((-r, LEG_HEIGHT, 0.0))]
    for i in range(1, segments):
        a = math.pi - math.pi * i / segments
        pts.append(Vector((math.cos(a) * r, LEG_HEIGHT + math.sin(a) * r, 0.0)))
    pts += [Vector((r, LEG_HEIGHT, 0.0)), Vector((r, 0.0, 0.0))]
    return pts


def curve_object(name, points, bevel_obj=None, bevel_depth=0.0):
    data = bpy.data.curves.new(name, "CURVE")
    data.dimensions = "3D"
    spline = data.splines.new("POLY")
    spline.points.add(len(points) - 1)
    for p, co in zip(spline.points, points):
        p.co = (co.x, co.y, co.z, 1.0)
    if bevel_obj is not None:
        data.bevel_mode = "OBJECT"
        data.bevel_object = bevel_obj
        data.use_fill_caps = True
    else:
        data.bevel_depth = bevel_depth
        data.bevel_resolution = 3
        data.use_fill_caps = True
    obj = bpy.data.objects.new(name, data)
    bpy.context.collection.objects.link(obj)
    return obj


def profile_rect(name, w, d, r):
    """Rounded rectangle cross-section (machined edges)."""
    data = bpy.data.curves.new(name, "CURVE")
    data.dimensions = "2D"
    spline = data.splines.new("POLY")
    pts = []
    for cx, cy, a0 in ((w / 2 - r, d / 2 - r, 0), (-w / 2 + r, d / 2 - r, 90), (-w / 2 + r, -d / 2 + r, 180), (w / 2 - r, -d / 2 + r, 270)):
        for k in range(4):
            a = math.radians(a0 + k * 30)
            pts.append((cx + math.cos(a) * r, cy + math.sin(a) * r))
    spline.points.add(len(pts) - 1)
    for p, (x, y) in zip(spline.points, pts):
        p.co = (x, y, 0.0, 1.0)
    spline.use_cyclic_u = True
    obj = bpy.data.objects.new(name, data)
    bpy.context.collection.objects.link(obj)
    return obj


def to_mesh(obj):
    bpy.ops.object.select_all(action="DESELECT")
    obj.select_set(True)
    bpy.context.view_layer.objects.active = obj
    bpy.ops.object.convert(target="MESH")
    return bpy.context.view_layer.objects.active


def shade_smooth_by_angle(obj, angle=35):
    bpy.ops.object.select_all(action="DESELECT")
    obj.select_set(True)
    bpy.context.view_layer.objects.active = obj
    try:
        bpy.ops.object.shade_auto_smooth(angle=math.radians(angle))
    except Exception:
        bpy.ops.object.shade_smooth()


def box(name, size, loc, bevel=0.012, mat=None):
    mesh = bpy.data.meshes.new(name)
    bm = bmesh.new()
    bmesh.ops.create_cube(bm, size=1.0)
    for v in bm.verts:
        v.co = Vector((v.co.x * size[0], v.co.y * size[1], v.co.z * size[2]))
    if bevel:
        bmesh.ops.bevel(bm, geom=bm.edges[:], offset=bevel, segments=2, affect="EDGES", profile=0.5)
    bm.to_mesh(mesh)
    bm.free()
    obj = bpy.data.objects.new(name, mesh)
    obj.location = loc
    if mat:
        obj.data.materials.append(mat)
    bpy.context.collection.objects.link(obj)
    return obj


def build():
    scene = reset_scene()
    copper = material("Copper", (0.80, 0.48, 0.30), 1.0, 0.30)
    dark = material("DarkMetal", (0.045, 0.038, 0.034), 0.85, 0.48)
    glow = material("Glow", (0.0, 0.0, 0.0), 0.0, 1.0, emission=(1.0, 0.66, 0.40), strength=6.0)

    # Frame: rounded-rectangle profile swept along the arch.
    profile = profile_rect("FrameProfile", FRAME_W, FRAME_D, 0.022)
    frame = to_mesh(curve_object("Frame", arch_points(), bevel_obj=profile))
    bpy.data.objects.remove(profile, do_unlink=True)
    frame.data.materials.append(copper)
    shade_smooth_by_angle(frame)

    # Emissive seam on the inner face.
    seam = to_mesh(curve_object("Seam", arch_points(inset=FRAME_W / 2 + 0.004), bevel_depth=SEAM_R))
    seam.data.materials.append(glow)
    shade_smooth_by_angle(seam, 80)

    # Engraved ticks along the outer face (front), a measured, instrument-like rhythm.
    outer = arch_points(inset=-(FRAME_W / 2 - 0.035), segments=TICKS - 1)[1:-1]  # on the front face, near the outer edge
    ticks = []
    for i, p in enumerate(outer):
        major = i % 7 == 0
        t = box(f"Tick{i}", (0.01, 0.05 if major else 0.028, 0.012), (p.x, p.y, FRAME_D / 2 + 0.004), bevel=0.002, mat=glow if major else copper)
        centre = Vector((0, LEG_HEIGHT if p.y > LEG_HEIGHT else p.y, 0))
        direction = (p - centre)
        t.rotation_euler = (0, 0, math.atan2(direction.y, direction.x) - math.pi / 2)
        ticks.append(t)

    # Plinth: two feet and a low step.
    feet = [box(f"Foot{s}", (0.42, 0.16, 0.56), (s * RADIUS, -0.08, 0), bevel=0.014, mat=dark) for s in (-1, 1)]
    step = box("Step", (WIDTH + 1.3, 0.07, 1.1), (0, -0.195, 0), bevel=0.01, mat=dark)

    # Join copper parts into one mesh to keep draw calls low.
    bpy.ops.object.select_all(action="DESELECT")
    for o in [frame, *ticks]:
        o.select_set(True)
    bpy.context.view_layer.objects.active = frame
    bpy.ops.object.join()
    frame.name = "GatewayFrame"
    bpy.ops.object.select_all(action="DESELECT")
    for o in [*feet, step]:
        o.select_set(True)
    bpy.context.view_layer.objects.active = step
    bpy.ops.object.join()
    step.name = "GatewayPlinth"
    seam.name = "GatewaySeam"

    root = bpy.data.objects.new("Gateway", None)
    bpy.context.collection.objects.link(root)
    for o in (frame, step, seam):
        o.parent = root
    root.rotation_euler = (math.radians(90), 0, 0)  # build plane was XY; stand it up in Blender's Z-up world
    return scene, root


def stats():
    tris = 0
    for o in bpy.context.scene.objects:
        if o.type == "MESH":
            o.data.calc_loop_triangles()
            tris += len(o.data.loop_triangles)
    return tris


def export(root):
    os.makedirs(os.path.join(OUTPUT_DIR, "export"), exist_ok=True)
    os.makedirs(os.path.join(OUTPUT_DIR, "blend"), exist_ok=True)
    glb = os.path.join(OUTPUT_DIR, "export", "gateway.glb")
    bpy.ops.object.select_all(action="DESELECT")
    bpy.ops.export_scene.gltf(
        filepath=glb, export_format="GLB", use_selection=False, export_apply=True,
        export_yup=True, export_materials="EXPORT", export_cameras=False, export_lights=False,
        export_animations=False, export_draco_mesh_compression_enable=False, use_active_scene=True,
    )
    bpy.ops.wm.save_as_mainfile(filepath=os.path.join(OUTPUT_DIR, "blend", "gateway.blend"), copy=True)
    return glb


def preview_render():
    """A small EEVEE still for review (not shipped)."""
    scene = bpy.context.scene
    scene.render.engine = "BLENDER_EEVEE_NEXT" if "BLENDER_EEVEE_NEXT" in {e.identifier for e in bpy.types.RenderSettings.bl_rna.properties["engine"].enum_items} else "BLENDER_EEVEE"
    scene.render.resolution_x, scene.render.resolution_y = 960, 960
    scene.render.film_transparent = False
    world = bpy.data.worlds.new("Studio")
    world.use_nodes = True
    world.node_tree.nodes["Background"].inputs[0].default_value = (0.012, 0.009, 0.008, 1)
    scene.world = world
    cam_data = bpy.data.cameras.new("Cam")
    cam_data.lens = 50
    cam = bpy.data.objects.new("Cam", cam_data)
    cam.location = (-2.6, -6.4, 2.2)
    bpy.context.collection.objects.link(cam)
    target = bpy.data.objects.new("Target", None)
    target.location = (0, 0, 1.8)
    bpy.context.collection.objects.link(target)
    c = cam.constraints.new("TRACK_TO")
    c.target = target
    scene.camera = cam
    for loc, energy, color in (((-3, -3, 5), 900, (1, 0.8, 0.62)), ((4, 2, 3), 400, (0.6, 0.7, 0.9)), ((0, 3, 4), 600, (1, 0.6, 0.35))):
        light = bpy.data.lights.new("L", "AREA")
        light.energy, light.color, light.size = energy, color, 2.5
        lo = bpy.data.objects.new("L", light)
        lo.location = loc
        bpy.context.collection.objects.link(lo)
        tc = lo.constraints.new("TRACK_TO")
        tc.target = target
    path = os.path.join(OUTPUT_DIR, "renders", "gateway-preview.png")
    os.makedirs(os.path.dirname(path), exist_ok=True)
    scene.render.filepath = path
    bpy.ops.render.render(write_still=True)
    return path


scene, root = build()
triangles = stats()
glb_path = export(root)
preview = preview_render() if globals().get("PREVIEW", True) else None
result = {"glb": glb_path, "bytes": os.path.getsize(glb_path), "triangles": triangles, "preview": preview}
print(result)
