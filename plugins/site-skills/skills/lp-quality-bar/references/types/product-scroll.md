# 製品・スクロール演出（ガジェット、家電、自動車、製品の特設ページ）
Apple の AirPods Pro 3（日本）の実測。製品の写真と動画が主役で、章を同じ型で繰り返し、動きは1つの型だけ。
- UIは白 `#fff` と薄灰 `#f5f5f7` を章ごとに交互、暗い章だけ黒。文字 `#1d1d1f`、補助 `#6e6e73`、青 `#0071e3` はボタンとリンクだけ（hover `#0076DF`、active `#006EDB`）。カードの影は `8px 8px 16px 0 rgba(0,0,0,.08)`、角丸は28px。色は製品写真が持つ（`data-mood="product"`）。
- 章の型は全章共通：**小見出し（28px・600）→ 巨大な見出し（96→80→48px・600、和文89px）→ 灰の本文（24px、先頭の1文だけ `<strong>` で `#1d1d1f`）→ 大きな数字（80px・字間 −.015em）**。欧文は字間をマイナス、和文は `letter-spacing:0em` に戻す（`:lang(ja)`）。太さは600と400だけ。見出しは U+FEFF を挟んで、語の途中で折り返さない。
- 登場は1つの型：`[data-staggered-item]` を **.15秒ずつ遅らせ、opacity 0→1 を .9s、translateY 30px→0 を .7s、`easeInOutQuad`**。要素の上端が画面の下から15%（`t - 85vh`）に来たとき1回だけ。登場前は `visibility:hidden;opacity:0`。ページ全体で19か所に同じ値。部品：`LPA.stagger()`。
- 視差は画像だけ：枠は動かさず、中の画像を `y: 20px か 30px → 0`（`start: t - 100vh`）。部品：`LPA.parallax()`。
- **動きは「足す」**：HTML は `no-js` で始まり、読み込み時の検証（`ReducedMotion` ほか）を全部通ったときだけ `html.enhanced` が付く。視差は `enhanced` でなければ作らない。`?no-enhanced` で強制的に静かなページにもできる。止める作りでなく、最初から足さない作り。
- スクリム：写真の上の文字は、画像を暗くせず `backdrop-filter: blur(20px)`＋白（または黒）＋**16段のマスク**（透明→不透明）で読ませる。部品：`.lpa-scrim`。
- ローカルナビは製品名＋目次＋青いピル（購入）を固定。章は16（Welcome → Highlights → Product Viewer → Product Stories → 機能7章 → Incentive → Contrast → Environment → Values → Index）。
- 動画は `preload="none"`、スマホの計測には1本も出ない。画像は `_large` / `_small` の2種。
- **反面教師**：画像が PNG だけ（4.8MB、WebP・AVIF なし）。トップ専用CSSが1本で約970KB。日本語フォントが約1MB。スマホでも動画モーダルJS（519KB）と分析JS（455KB）を取る。`loading="lazy"` は0個でJSが代行。
- 部品：`data-mood="product"`、`.lpa-scrim`、`LPA.stagger`、`LPA.parallax`。
