# ブランド・ZINE調の窓（個性派の食品・飲料ブランド、カルチャー、キャンペーン）
Oatly（oatly.com）の実測。ページ全体を「ブラウザの窓」にする。外は方眼の机、中は紙色の窓。UIは黒と白だけ、色はタグ・フォーカス・写真が持つ。
- 枠：外側は方眼の背景画像、窓は `#fffef6`・`border:1px solid #000`。PC は窓が `max-height:calc(100vh − gutter)`・`overflow-y:scroll` で、窓の中だけがスクロールする（外側の余白 20.7px）。SP は枠も方眼も無い。部品：`.lpa-frame` / `.lpa-win`。
- 帯：高さ 43px・下に 1px の黒い線。四角いアイコン（42×42px・1px の線で区切る）が両端、ナビは5等分・大文字・16px。SP はハンバーガー。
- カード：`border:1px solid #000; box-shadow:2px 2px 0 #000`。`:active` で `box-shadow:0 0 0; transform:translate(2px,2px)`（沈む量＝影の量）。下の帯（上に 1px の線）に題とタグ。角丸なし。部品：`.lpa-offset[data-press]`。
- タグ：padding 3/4px・大文字・line-height 1・黒文字。色はデータが選ぶ：水色 `#98c5d3`・桃 `#f8c8d8`・黄 `#fdcf85`・灰 `#c6c6c6`・緑 `#68c74e`・紫 `#a67eb1`・茶 `#a0632d`。**茶は黒との比 4.32:1 で小さい字は不足**、紺 `#24356a` は白でないと読めない。部品：`.lpa-tag`。
- 色：CSS は `#000` 307回・`#fff` 268回・水色 101回（フォーカス `0 0 0 4px` は32回）。パステルに白文字は 1.5〜1.9:1 で使えない。部品：`data-mood="zine"`。
- 文字：画面に出る字は Margo Pro Regular の1書体・大文字・400（388個中387個）。見出しは文字でなく画像（SVG、`alt` あり）で、ページの `<h1>` は画面に出さない。見出しの clamp は6段（xs 1.75→2.125／s 2→3／m 2.125→4.25／l 3→6／xl 4.25→9／xxl 5.5→11.5rem、768px から 1680px）、行間は大きいほど詰まる（.94 / .833 / .778 / .833 / .778 / .74）。
- タイル：4列の格子。高さは列の幅 u の 1・2・3 倍＋すき間（PC 303 / 643 / 983px）。すき間・外の余白は `clamp(1rem, 1rem + (100vw − 48rem)·1.75/57, 2.75rem)`（1440幅 36.6px）。部品：`.lpa-tiles`。
- 動き：`box-shadow .1s ease-out`・`transform .3s ease`・`background .2s ease-in-out`。遷移の keyframes は `darken`（opacity→.5・.5s ease-in-out）・`fillScreen`（→全面・.5s ease-out .3s）・`shrink`（scaleY→0・.5s ease-in-out .25s）。`cubic-bezier` は `(.34,1.56,.64,1)` と `(.45,0,.55,1)` だけ。
- 声：Cookie も「We know you didn’t come here for cookies」。「拒否」と「同意」は同じ見た目・同じ大きさ。法的な画面でも窓と同じ線・字で出す。
- 重さ：PC 31.5MB・SP 22.96MB。**動画 mp4 が PC 16.4MB・SP 11.5MB**（Vimeo の iframe 6本、`loading` 指定なし、スクロール前から読む）。Oatly 自身（oatly.com＋Storyblok）は約4.3MB。静止画は WebP 523KB・AVIF 47KB・SVG 614KB。
- **反面教師**：`reduced-motion` は CSS で進捗バーを消すだけ、動画は止まらず（reducedMotion でも Vimeo 由来 9.1MB）、`saveData` は Next.js の先読みだけ。`:hover` 174か所に `hover:hover` は1か所。最初の画面を Cookie と国の吹き出しがふさぐ。
- 部品：`data-mood="zine"`、`.lpa-frame` / `.lpa-win`、`.lpa-offset[data-press]`、`.lpa-tag`、`.lpa-tiles`。
