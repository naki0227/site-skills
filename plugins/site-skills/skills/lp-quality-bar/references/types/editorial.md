# 読みもの・エディトリアル（メディア、メルマガ、コラム、ブランドの読みもの）
ほぼ日（1101.com）の実測。毎日見に来る人のために、記事の色を主役にしてUIは白に引く型。
- UIは白 `#fff`・罫 `#d9d9d9`・文字 `#3e3e3e`・補助 `#939393`・薄面 `#f7f6f6`。青 `#1979b9` はリンクとピル（高さ32px・角丸3em・薄い青の地）だけ。色は記事が持つ。
- ヒーローは記事ごとに地色（`data-bg-color`）を持ち、切り替えで背景が `.3s ease` で変わる。写真は右から `clip-path: inset(0 0 0 100%)` → `inset(0)`（.2s ease）、文章は `animation-delay .2s`。8秒送り。明るい地色の記事には `.dark-text` を付けて文字を `#3e3e3e` に反転する（`:has(.is-active.dark-text)`）。
- ヘッダーは fixed。ヒーローが見えている間は透明＋白文字、外れたら白＋影 `0 6px 6px rgba(0,0,0,.1)`＋文字 `#3e3e3e`（背景・影・文字色を `.3s ease`）。右に「いまの日付」（日本時間）を出す。
- 文字は Noto Sans / Noto Sans JP の1書体。weight 600 が主。大きさは rem の段（12/13/14/15/16/20/24px）で、見出しは20pxと16pxの2段。字間は触らない。本文行間1.8〜2。
- 見出しの型は全セクション共通：小さな四角（アイコン）＋題（20px/600）＋下に罫 `#d9d9d9`＋右にピル。セクション幅は 71.25rem（1140px）、ピックアップ系は 61.25rem（980px）。
- 横レールはPC3枚ずつ。右10%をのぞかせ、**最後のページだけ左10%・右0に入れ替える**。最近の更新だけ自動送り（4秒・速度1秒、SPは止める）。
- 日付を使う：イベントは `dayjs(from).isAfter(dayjs(today))` で「準備中／開催中」。毎日更新の連載を正方形カードに並べ、投稿ボタンはピルで下に。
- イージングは `ease` に統一、時間は .2 / .3 / .4s。reduced-motion は `*{animation-duration:.01ms!important;transition-duration:.01ms!important}` の1か所。Splide の既定（speed 0・autoplay 停止）にも任せる。
- 構成：透明ヘッダー → ヒーロー（記事8本）→ ピックアップ → 最近の更新 → おでかけ → 毎日更新 → 募集 → サービス → フッター。
- **反面教師**：広告・同意JS（popfind 835KB・poplink 176KB・cookiebot 118KB）で約1.1MB（全体の16%）。日本語Webフォント（Google Fonts）が約1.1MB。PNGのバナー（218KB）。`srcset` は0（`?width=600` の指定と `<picture>` の出し分けで代用）。
- 部品：`data-mood="read"`、`.lpa-tint`、`LPA.tintCarousel`。
