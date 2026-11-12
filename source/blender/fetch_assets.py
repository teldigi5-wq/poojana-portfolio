"""
Downloads the CC0 assets the photoreal temple render uses, from Poly Haven
(https://polyhaven.com — every asset there is CC0 1.0, public domain).

Nothing downloaded here ships on the site: only the rendered frames do. The files stay
next to the Blender build so the render can be reproduced.

  python source/blender/fetch_assets.py <asset_dir>

Writes <asset_dir>/<asset>/... and <asset_dir>/CREDITS.txt.
"""
import hashlib
import json
import os
import sys
import urllib.request

OUT = sys.argv[1] if len(sys.argv) > 1 else os.path.join(os.path.expanduser("~"), "portfolio-3d", "cc0")
UA = {"User-Agent": "portfolio-temple-build"}
RES = "2k"

MODELS = ["marble_bust_01", "antique_ceramic_vase_01", "brass_vase_03", "lion_head"]
TEXTURES = ["marble_01", "large_sandstone_blocks_01", "floor_pattern_01", "marble_mosaic_tiles", "plastered_stone_wall"]
HDRIS = ["kloofendal_43d_clear_puresky"]


def get_json(url):
    with urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=60) as r:
        return json.load(r)


def fetch(url, path, md5=None):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    if os.path.exists(path) and (md5 is None or hashlib.md5(open(path, "rb").read()).hexdigest() == md5):
        return
    with urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=300) as r:
        data = r.read()
    if md5 and hashlib.md5(data).hexdigest() != md5:
        raise RuntimeError(f"checksum mismatch: {url}")
    open(path, "wb").write(data)
    print(f"  {os.path.relpath(path, OUT)} ({len(data) // 1024} KB)")


def main():
    credits = []
    for name in MODELS:
        files = get_json(f"https://api.polyhaven.com/files/{name}")
        entry = files["gltf"][RES]["gltf"]
        base = os.path.join(OUT, name)
        fetch(entry["url"], os.path.join(base, f"{name}.gltf"), entry.get("md5"))
        for rel, inc in entry.get("include", {}).items():
            fetch(inc["url"], os.path.join(base, rel), inc.get("md5"))
        credits.append(name)
    for name in TEXTURES:
        files = get_json(f"https://api.polyhaven.com/files/{name}")
        for key, label in (("Diffuse", "diff"), ("Rough", "rough"), ("nor_gl", "nor_gl"), ("Displacement", "disp"), ("AO", "ao")):
            if key in files and RES in files[key]:
                f = files[key][RES]["jpg"]
                fetch(f["url"], os.path.join(OUT, name, f"{name}_{label}_{RES}.jpg"), f.get("md5"))
        credits.append(name)
    for name in HDRIS:
        files = get_json(f"https://api.polyhaven.com/files/{name}")
        f = files["hdri"]["2k"]["hdr"]
        fetch(f["url"], os.path.join(OUT, name, f"{name}_2k.hdr"), f.get("md5"))
        credits.append(name)
    with open(os.path.join(OUT, "CREDITS.txt"), "w") as fh:
        fh.write("CC0 1.0 assets from Poly Haven (https://polyhaven.com/license):\n")
        fh.writelines(f"  https://polyhaven.com/a/{n}\n" for n in credits)
    print("done:", ", ".join(credits))


if __name__ == "__main__":
    main()
