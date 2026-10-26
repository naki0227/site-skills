# site-skills

種類ごとのリポジトリで、実在のサイトを毎日解剖して育てている**専用のスキル**を1か所に集めたもの。
最初に使う「どのスキルを使うか選ぶ」スキル（`site-skills`）が、作るものに合うスキルを選ぶ。

**目的**：AIっぽくない、質の高いスキルを集めること。どのスキルも、実在のサイトで測った値と、そこから引き出した判断（どのサイトの値か）だけでできている。AIがサイトを見なくても書ける一般論は入れない。

| スキル | 種類 | 育てているリポジトリ |
|---|---|---|
| `site-skills` | どれを使うか選ぶ | このリポジトリ |
| `lp-quality-bar` | LP・特設ページ・ブランドサイトのトップ | `naki0227/lp-anatomy` |
| `ec-quality-bar` | EC（通販） | `naki0227/ec-anatomy` |
| `game-quality-bar` | ゲーム・エンタメ公式 | `naki0227/game-anatomy` |
| `corporate-quality-bar` | コーポレート（会社・採用） | `naki0227/corporate-anatomy` |
| `saas-quality-bar` | SaaS・プロダクト | `naki0227/saas-anatomy` |
| `media-quality-bar` | メディア・読みもの | `naki0227/media-anatomy` |
| `booking-quality-bar` | 予約（宿・飲食・チケット） | `naki0227/booking-anatomy` |

## 使い方
- **Claude Code のプラグインとして入れる**（どのプロジェクトでも使える）：
  ```
  /plugin marketplace add naki0227/site-skills
  /plugin install site-skills@site-skills
  ```
- **1つのプロジェクトにだけ入れる**：`plugins/site-skills/skills/` の中のフォルダを、そのプロジェクトの `.claude/skills/` にコピーする。`site-skills` と使いたいスキルを一緒に入れる。

## 中身
- `plugins/site-skills/skills/`：集めたスキル。`site-skills` 以外は `tools/sync.sh` が元のリポジトリから写す。**ここで直さない**（元のリポジトリで直す）。
- `plugins/site-skills/skills/site-skills/`：選ぶスキル。ここだけはこのリポジトリで直す。
- `SYNCED.md`：どのコミットから写したか。
- `sources.json`：集める元のリポジトリと接頭辞。種類を足すときはここに1行足し、選ぶスキルの表にも1行足す。
- `SYNC.md`：毎日の集め直しの手順。

## ライセンスと出典
- スキル・道具・使用例の HTML は MIT License（`LICENSE`）。
- 使用例の写真（`examples/*/photos/`）は MIT ではなく、それぞれの Creative Commons ライセンス（CC0・CC BY・CC BY-SA）で使っている。一覧は `CREDITS.md`。
- 参考にしたスキル（[Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill)、[elayadesign/ai-design-skills](https://github.com/elayadesign/ai-design-skills)、どちらも MIT）と、何を取り入れたか・取り入れなかったかも `CREDITS.md` に書いている。taste-skill の「色・書体を配る」仕組みと見た目の決まり、ai-design-skills のフォント・余白・色を固定する決まりは、実測値でスキルを作る方針とぶつかるので取り入れていない。
