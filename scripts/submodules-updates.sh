#!/usr/bin/env bash
set -euo pipefail
# submodules-updates.sh — Safe submodule update with local work protection
#
# Options:
#   --force      Skip dirty checks and stash automatically
#   --rebase     Use rebase instead of merge when pulling
#   --push       Push any local submodule commits before updating
#   <name>       Update only the named submodule

FORCE=false
REBASE_FLAG=""
PUSH=false
TARGET=""

for arg in "$@"; do
  case "$arg" in
    --force)  FORCE=true ;;
    --rebase) REBASE_FLAG="--rebase" ;;
    --push)   PUSH=true ;;
    *)        TARGET="$arg" ;;
  esac
done

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

# ── Safety check: detect dirty submodules ──────────────────────────
DIRTY_SUBS=()
while IFS= read -r line; do
  sub_path="$(echo "$line" | awk '{print $2}')"
  [ -z "$sub_path" ] && continue
  [ -n "$TARGET" ] && [ "$sub_path" != "$TARGET" ] && continue

  if [ -d "$sub_path" ]; then
    if (cd "$sub_path" && ! git diff --quiet 2>/dev/null) || \
       (cd "$sub_path" && ! git diff --cached --quiet 2>/dev/null); then
      DIRTY_SUBS+=("$sub_path")
    fi
    if (cd "$sub_path" && [ -n "$(git log --oneline @{upstream}..HEAD 2>/dev/null)" ]); then
      DIRTY_SUBS+=("$sub_path (unpushed commits)")
    fi
  fi
done < <(git submodule status --recursive 2>/dev/null)

DIRTY_SUBS=($(printf '%s\n' "${DIRTY_SUBS[@]}" 2>/dev/null | sort -u)) || true

if [ ${#DIRTY_SUBS[@]} -gt 0 ]; then
  echo ""
  echo "⚠️  LOCAL WORK DETECTED in submodules:"
  for s in "${DIRTY_SUBS[@]}"; do echo "   • $s"; done
  echo ""

  if [ "$FORCE" = true ]; then
    echo "🔸 --force: stashing changes before update..."
    git submodule foreach --recursive \
      'if ! git diff --quiet 2>/dev/null || ! git diff --cached --quiet 2>/dev/null; then
        echo "  Stashing in $name...";
        git stash push -m "auto-stash before submodule update $(date +%Y%m%d-%H%M%S)";
      fi'
  else
    echo "   Options:"
    echo "     1. Commit & push your submodule work first"
    echo "     2. Run with --force to auto-stash changes"
    echo "     3. Run with --push to push local commits then update"
    echo ""
    echo "❌ Aborting to protect your work."
    exit 1
  fi
fi

if [ "$PUSH" = true ]; then
  echo "📤 Pushing local submodule commits..."
  git submodule foreach --recursive \
    'if [ -n "$(git log --oneline @{upstream}..HEAD 2>/dev/null)" ]; then
      branch=$(git rev-parse --abbrev-ref HEAD 2>/dev/null || echo "");
      if [ -n "$branch" ] && [ "$branch" != "HEAD" ]; then
        echo "  Pushing $name ($branch)..."; git push origin "$branch";
      else
        echo "  ⚠️  $name in detached HEAD — skip push";
      fi
    fi'
fi

echo "📡 Syncing submodule URLs..."
git submodule sync --recursive

echo "📦 Initializing submodules..."
git submodule update --init --recursive

echo "⬇️  Pulling latest from remote..."
if [ -n "$TARGET" ]; then
  git submodule update --remote --merge $REBASE_FLAG -- "$TARGET"
else
  git submodule update --remote --merge $REBASE_FLAG --recursive
fi

echo ""
echo "=== Submodule status ==="
git submodule status --recursive
echo ""
echo "✅ Submodules updated safely."
