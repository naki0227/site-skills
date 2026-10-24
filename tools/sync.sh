#!/usr/bin/env bash
# 使い方: tools/sync.sh [clone を置いたフォルダ（既定 /home/user）]
# sources.json の各リポジトリの .claude/skills/<接頭辞>-*/ を plugins/site-skills/skills/ にそのまま写し、
# どのコミットから写したかを SYNCED.md に書き、カタログを作り直す。
# 元のリポジトリで消えたスキルは、ここからも消す（接頭辞が同じものだけ。選ぶスキル site-skills には触らない）。
set -euo pipefail
cd "$(dirname "$0")/.."
ROOT="$PWD"; SRC="${1:-/home/user}"
DEST=plugins/site-skills/skills
rows=""
while IFS=$'\t' read -r repo prefix; do
  name="${repo#*/}"; dir="$SRC/$name"
  if [ ! -d "$dir/.claude/skills" ]; then echo "✗ $dir/.claude/skills が無い（clone したか確かめる）" >&2; exit 1; fi
  (cd "$dir" && node "$ROOT/tools/check-skill.js" "$prefix") >/dev/null
  for old in "$DEST/$prefix"-*/; do [ -d "$old" ] && [ ! -d "$dir/.claude/skills/$(basename "$old")" ] && rm -rf "$old"; done
  for s in "$dir/.claude/skills/$prefix"-*/; do
    rm -rf "$DEST/$(basename "$s")"; cp -r "$s" "$DEST/"
  done
  rows+="| \`$repo\` | \`$(git -C "$dir" rev-parse --short HEAD)\` | $(git -C "$dir" log -1 --format=%cs) |"$'\n'
done < <(node -e 'for (const s of require("./sources.json")) console.log(s.repo + "\t" + s.prefix)')
printf '# 写した元\n\n`tools/sync.sh` が書く。手で直さない。\n\n| リポジトリ | コミット | 日付 |\n|---|---|---|\n%s' "$rows" > SYNCED.md
node tools/catalog.js
