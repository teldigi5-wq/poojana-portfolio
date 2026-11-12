"""
Matcaps for the world stage's lightweight tier (immersive v3).

A matcap is a picture of a lit sphere; the GPU looks up each pixel's normal in it.
That reproduces studio-lit metal with no lights, no environment map and very small
shaders — ideal for integrated GPUs and phones.

Renders copper.png and darkmetal.png (256×256) with EEVEE into <output_dir>/export.
Run: blender --background --python matcaps.py -- <output_dir>
"""
import math
import os
import sys

import bpy

OUTPUT_DIR = globals().get("OUTPUT_DIR")
if OUTPUT_DIR is None:
    argv = sys.argv[sys.argv.index("--") + 1:] if "--" in sys.argv else []
    OUTPUT_DIR = argv[0] if argv else os.path.join(os.path.expanduser("~"), "portfolio-3d")

SPECS = {
    "copper": dict(base=(0.66, 0.30, 0.15), metallic=1.0, roughness=0.38),
    "darkmetal": dict(base=(0.018, 0.015, 0.013), metallic=0.8, roughness=0.55),
}


def fresh_scene():
    old = bpy.data.scenes.get("Matcaps")
    if old is not None:
        for o in list(old.objects):
            bpy.data.objects.remove(o, do_unlink=True)
        bpy.data.scenes.remove(old)
    scene = bpy.data.scenes.new("Matcaps")
    bpy.context.window.scene = scene
    return scene


def build(scene):
    scene.render.engine = "BLENDER_EEVEE"
    scene.render.resolution_x = scene.render.resolution_y = 256
    scene.render.film_transparent = False
    scene.view_settings.view_transform = "Standard"   # keep colours literal for the lookup
    world = bpy.data.worlds.new("MatcapWorld")
    world.use_nodes = True
    world.node_tree.nodes["Background"].inputs[0].default_value = (0.010, 0.008, 0.007, 1)
    world.node_tree.nodes["Background"].inputs[1].default_value = 1.0
    scene.world = world

    bpy.ops.mesh.primitive_uv_sphere_add(segments=96, ring_count=48, radius=1.0)
    sphere = bpy.context.active_object
    bpy.ops.object.shade_smooth()

    cam_data = bpy.data.cameras.new("MatcapCam")
    cam_data.type = "ORTHO"
    cam_data.ortho_scale = 2.0
    cam = bpy.data.objects.new("MatcapCam", cam_data)
    cam.location = (0, -5, 0)
    cam.rotation_euler = (math.radians(90), 0, 0)
    scene.collection.objects.link(cam)
    scene.camera = cam

    # One large soft key (upper right), a long vertical strip on the left for the machined-edge
    # highlight, a cool rim from behind, and a warm dim world for the bounce. Rounded/elongated
    # shapes so reflections never read as distinct "blobs".
    world.node_tree.nodes["Background"].inputs[0].default_value = (0.05, 0.028, 0.016, 1)
    for name, loc, energy, color, shape, size, size_y in (
        ("Key", (2.4, -2.6, 2.6), 900, (1.0, 0.84, 0.68), "DISK", 3.6, 3.6),
        ("Strip", (-3.2, -1.6, 0.4), 520, (1.0, 0.93, 0.85), "RECTANGLE", 0.22, 5.0),
        ("Rim", (-1.8, 3.2, 2.2), 900, (0.66, 0.76, 0.95), "DISK", 2.5, 2.5),
    ):
        light = bpy.data.lights.new(name, "AREA")
        light.energy, light.color, light.shape = energy, color, shape
        light.size = size
        if shape == "RECTANGLE":
            light.size_y = size_y
        obj = bpy.data.objects.new(name, light)
        obj.location = loc
        scene.collection.objects.link(obj)
        track = obj.constraints.new("TRACK_TO")
        track.target = sphere
    return sphere


def render(scene, sphere, name, spec):
    mat = bpy.data.materials.get(f"Matcap_{name}") or bpy.data.materials.new(f"Matcap_{name}")
    mat.use_nodes = True
    bsdf = mat.node_tree.nodes.get("Principled BSDF")
    bsdf.inputs["Base Color"].default_value = (*spec["base"], 1)
    bsdf.inputs["Metallic"].default_value = spec["metallic"]
    bsdf.inputs["Roughness"].default_value = spec["roughness"]
    sphere.data.materials.clear()
    sphere.data.materials.append(mat)
    path = os.path.join(OUTPUT_DIR, "export", f"matcap-{name}.png")
    os.makedirs(os.path.dirname(path), exist_ok=True)
    scene.render.filepath = path
    bpy.ops.render.render(write_still=True)
    return path


scene = fresh_scene()
sphere = build(scene)
paths = [render(scene, sphere, name, spec) for name, spec in SPECS.items()]
result = {"matcaps": paths}
print(result)
