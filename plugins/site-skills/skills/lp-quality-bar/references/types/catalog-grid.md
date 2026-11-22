# 器のメーカー・同じ台で撮った商品の格子が表紙
マルヒロ（hasamiyaki.jp、波佐見焼。WordPress の自作テーマ・jQuery・Masonry・PreloadJS・pjax、2026-11-22 実測）の型。商品を全部同じ白い台・同じ光で撮っておき、表紙は説明の文を置かずに商品の写真の格子だけにする。来るたびに撮り方と並びが替わる。
- **格子の表紙**：札は幅の10%（767px 以上で10列、1440px で 144px 角）、それより狭いと20%（5列）。64点＋白い 2×2 の札4枚＝80マス（PC 1,152px）。Masonry（`transitionDuration:0`）で詰める。CSS grid の `grid-auto-flow:dense` でも同じ見え方になる。
- **撮り方を2つ**：`imageTypeArr=['imageHorizontal','imageOverlook']`（真横・真上）から来るたびに1つ選ぶ。撮り方がそろっているので、382点を混ぜても1枚の絵になる。撮れていない品（真上 8点・真横 14点）は数えずに引き直す。
- **毎回引き直す**：`/api/items/`（382点・359KB）から部分 Fisher-Yates で64点を重ならずに引く。白い札（ブランド3つ・ONLINE SHOP）は 11・22（SP 23）・34（SP 33）・45 番目の前に差して、入口の場所はあまり動かさない。
- **色違いのコマ送り**：1品に色違い1〜18枚（真横で2枚以上が250点）。乗っている間だけ `setInterval(200ms)` で display を切り替え、順番は毎回まぜる。タッチの端末は1枚だけ読む（PC 209枚→SP 119枚）。
- **黄の線のホバー**：4本の疑似要素（太さ .3em・#e7ff00）を、上は左から・右は上から・下は右から・左は下から `.6s cubic-bezier(.19,1,.22,1)` で入れ（時計回り）、離れると同じ向きに抜く。`mouseenter touchstart` で `hover mouseout`、`mouseleave touchend` で hover だけ外すので、乗っていない札は抜けない。
- **入る順**：灰 #999 の地に 20px の黄の点（1s ease-in-out infinite）→ 札は読めた順に opacity .6s ease .2s、白い札は100msずつ 1.2s、中の印は .6s 遅れ。
- **引き出し**：Brands とメニューは右から幅 20%（最小 300px）、transform .9s。裏の頁に `filter:blur(.2rem) saturate(90)` をかけ、白い器が蛍光色に化ける。
- 色：#e7ff00 45回（今いる項目・黄の帯・線・リンクの蛍光ペン `a.hover{background:#e7ff00}`・読み込みの点）、#bfbfbf 44回（罫）、#ccc 13（ヘッダー・フッターの地）、#999 7（格子の地・Online Store の札）、white 27・black 39。色は器の釉薬が持ち、UI の灰は写真の床の灰に寄せる。
- 文字：Apercu（Regular・Bold・Mono、自前 woff 44KB）＋Typekit の A-OTF ゴシックBBB・見出ゴMB31（2本 3.75MB）。太さは全部 400、太字は Bold の別書体。ルートは `fitText(html,12,{minFontSize:"13px"})`＝幅/120・最小13px、寸法は全部 rem。名前 26px・.06em、題 16.25px、本文 13px（行間 1.8・palt）。代用は Albert Sans と BIZ UDPGothic。
- 重さ：PC 10.05MB・476件（measure.js。うち写真の blob: の二重 2.47MB、写真の実転送は PC 2.47MB・209枚／SP 1.31MB・119枚）、SP 7.77MB。和文書体 3.75MB が最大。写真は 600×600 の JPEG（約12KB）を 144px の札に。
- **反面教師**：最初の3秒以上、格子が灰色のまま（3秒で0枚・6秒で55枚）／reduced-motion の指定が無い／ヘッダー・フッターの白字 on #ccc が 1.61:1、今いる項目の黄は 1.43:1／本文 13px（SP は inspect の FAIL）／XHR→blob の写真で lazy・srcset・優先度が使えない／札のリンクが `javascript:void(0)` から始まる。
- 部品：`patterns/` の `.lpa-edge`（黄の線が四辺を時計回り、CSS＋クラス2つ）と `LPA.flick(el,{step})`（乗っている間だけ子を 200ms ごとに送る）。
- **作例で確かめた翻訳**（天満 蓋刷り会・マンホールの蓋の拓本を刷る会・架空、2026-11-22）：蓋は真上から撮るとどの町のものも同じ丸にそろうので、Wikimedia Commons の本物の蓋18枚で格子（PC 8列・SP 4列）を作った。撮り方の2つは「写真／拓本（写真を白黒に強めたもの）」に置き換え、来るたびに6枚を拓本の側で出す。名前は蓋の縁の丸ゴシックの字を刷った拓本の SVG（feTurbulence でむらを出す）にして 2×2 の札へ、もう1枚の札は次の刷り会（日・集合だけ、左に道路の黄線の太い帯）。色違いの無い題材なので、コマ送りは「押すと写真 ⇄ 拓本」にした。
