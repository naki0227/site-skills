# 毎日の集め直し

1. `sources.json` の各リポジトリを `add_repo`（読むだけでよい）でつなぎ、`/home/user/<リポジトリ名>` に `git clone --depth 1` する。
2. `tools/sync.sh` を実行する。元のリポジトリのスキルの形が崩れていたら止まるので、そのリポジトリ名と理由を報告して終わる（元のリポジトリは直さない）。
3. `node tools/catalog.js --check` を通す。選ぶスキルの表に無いスキルがあると言われたら、`plugins/site-skills/skills/site-skills/SKILL.md` の表に1行足す（元のリポジトリで新しいスキルが増えたとき）。
4. 差分が無ければ何もせずに終わる。差分があれば、`plugins/site-skills/.claude-plugin/plugin.json` の `version` の3つ目の数字を1つ上げ、`sync: スキルを集め直す (YYYY-MM-DD)` でコミットして main に push する。
5. 日本語で2〜4行報告する：どのスキルが変わったか（`git diff --stat` の要約）、新しく増えたスキル、止まった理由があればそれ。
