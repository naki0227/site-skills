# site-skills

- 目的は、AIっぽくない質の高いスキルを集めること。集めたスキルに、出典（どのサイトの値か）の無い一般論が混ざっていたら、元のリポジトリで直すよう報告する。
- Webサイト・ページ・画面を作る・直すときは、まず `.claude/skills/site-skills/SKILL.md` で使うスキルを選ぶ。
- `plugins/site-skills/skills/` の中の、`site-skills` 以外のスキルは手で直さない。元のリポジトリ（`sources.json`）で直し、`tools/sync.sh` で写す。
- 集め直しを頼まれたら `SYNC.md` の手順に従う。
- 種類を足すときは、`sources.json`・選ぶスキルの表（`plugins/site-skills/skills/site-skills/SKILL.md`）・`README.md` の表をそろえて直す。
- 使用例に写真を足したら、`examples/<slug>/photos/credits.json` に出典を書き、`node tools/credits.js` で `CREDITS.md` を作り直す。写真は CC0・CC BY・CC BY-SA だけ。
- push 前に `node tools/catalog.js --check` と `node tools/credits.js --check` を通す。このリポジトリは main に直接 push してよい。
