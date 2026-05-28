#!/usr/bin/env bash
set -euo pipefail
# Initialize and update all submodules (run after cloning)
# Usage: ./scripts/init-submodules.sh
git submodule update --init --recursive
