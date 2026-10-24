# エンタメ・ゲーム（ゲーム、イベント、音楽、アニメ、キャラクターの特設ページ）
スプラトゥーン3（任天堂）の実測。地は黒、色は「塗るもの」（インク画像）が持ち、動きは跳ねる。
- UIは白と黒だけ：地 `#181818` と `#000`、文字 `#fff`、罫 `#484848`。CSS の色の出現は `#fff` 30・`#000` 18・`#484848` 3・`#eafe3d` 2。黄・藤 `#603afe`・珊瑚 `#fe585f`・ミント `#6af7cd` は画像で、章ごとに1〜2色（`data-mood="ent"`）。購入の章だけ紙の地 `#ecece2`、「購入する」だけ赤 `#e70012`、補助枠は `rgba(204,204,161,.5)`。
- 見出しは「黄の小さなラベル → 灰のテープに白の巨大文字」を傾けて重ねる（回転は −0.7 / −1.7 / −3.88 / −6°）。本文は Noto Sans 系・字間 .02em・行間 1.66・`palt`。大きさは `vw` で書く（PC 1920 幅、SP 380 幅が基準：`6.5104166667vw` ＝ 125px、`12.8947368421vw` ＝ 49px）。部品：`.lpa-tape`。
- 章の境目は `clip-path: polygon(0 0,100% 15.8%,100% 100%,0 100%)`（12%・6.7% もある）で斜めに切る。ヒーローとモーダルの枠は `mask-image: url(mask.svg)` でインクのように抜く。部品：`.lpa-slant` / `.lpa-slant-b`。
- 登場は「少し行き過ぎて戻る」3種に絞る：`ink`（scale 1.15→1・`Back.easeOut.config(4)`）、`upScaleFadeOutBack`（scale .5→1・`Back.easeOut.config(1.4)`）、`upFade`（y 15→0・`Power2.easeOut`）。発火は GSAP ScrollTrigger の `start:'top 85%'`・`once:true`、長さの既定は .35s。ほかに `battleBand`（帯が左右から）・`downScaleFade`。部品：`LPA.pop`。
- ホバーも跳ねる：`transform 250ms cubic-bezier(.34,1.3,.64,1)`、`scale(1.05)`。`@media (hover:hover)` の中に閉じる。部品：`.lpa-bounce`。
- 動きの遊び：ネオン看板 `a-neon 3s linear infinite`（31〜34%・41〜42% だけ消える）、`a-flash 9s / 6s`、`a-elect 4s`（PCだけ）。トップへ戻るイカが `a-ika-jump .6s`（`scale(1.15,.65)` → `scale(.85,1.15)`、`transform-origin:50% 100%`）。武器の箱の帯は `28s linear infinite`（開始を `-12.84s` ずらす）と `36s`。部品：`.lpa-neon`、`.lpa-squash`、`LPA.marquee`。
- 固定：`pin:true, pinSpacing:false` で背景を固定し、前面だけを流す。スマホは MENU の見出しだけ固定。
- 読み込み：画像は `<picture>` 100個すべてが PC/SP の出し分け（`media="(min-width: 760px)"`）。HTML は PNG 198個の参照だが、通信は `image/avif` 4.2MB。画像は JS の `LazyLoad`（`threshold:600`）、動画10本は `preload="none"`。
- 構成：ヒーロー（キービジュアル＋お知らせ＋スライダー）→ MOVIE → バトル → スタイル（ブキ・ギア）→ バンカラ街 → MENU → 購入（紙の地）→ イベントアーカイブ → 動画モーダル・ikatohito。
- **反面教師**：`prefers-reduced-motion` も `saveData` も CSS・JS のどこにも無い（点滅・帯・跳ねが止められない）。見出しが全部画像。共通ヘッダー・アカウントの JS が約3.3MB（スマホでも同じ）。`loading="lazy"` は0個で JS が代行。
- 部品：`data-mood="ent"`、`.lpa-bounce`、`.lpa-tape`、`.lpa-slant`、`.lpa-neon`、`.lpa-squash`、`LPA.pop`。
