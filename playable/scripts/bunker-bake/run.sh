#!/usr/bin/env bash
# Rebake the bunker lighting. Needs Blender 4.2 LTS, Node, Python 3 with numpy + Pillow, and toktx.
#   BLENDER=/path/to/blender scripts/bunker-bake/run.sh [work-dir]
# About an hour on 2 CPU cores for the expanded map. Rerun whenever the bunker layout, the kit or the lamps change
# (tests/bunker-lightmap.test.ts fails until you do).
set -euo pipefail
cd "$(dirname "$0")/../.."
WORK=${1:-bake-work}
BLENDER=${BLENDER:-blender}
BLENDER_LIB=${BLENDER_LIB:-$(dirname "$(readlink -f "$(command -v "$BLENDER")")")/lib}
mkdir -p "$WORK"
node --import tsx scripts/bunker-bake/export.ts "$WORK"
"$BLENDER" -b --factory-startup -P scripts/bunker-bake/bake.py -- "$WORK" 1280 20 10
python3 scripts/bunker-bake/encode.py "$WORK" "$BLENDER_LIB" public/assets/soviet-bunker-kit/baked
