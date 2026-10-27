# 食品ブランド・レトロな手描き（パッケージの色）（調味料・食品・飲料の D2C、商品が少なく「瓶・缶・袋」が主役のブランド）
Graza（graza.co、米国のオリーブオイル）の実測。パッケージの色と線を、そのままページの部品にする型。
- 色は4種類だけ：地 `#f6e6d9`、文字・線・イラストは墨 `#3c422e` の1色（地と 8.57:1、ライム・黄・若葉の上でも 7.2〜7.5:1）。章の地は**パッケージの色**（ライム `#d1e030`・黄 `#fbd535`・若葉 `#9eef80`）、ボタンの面 `#fff4ec`。白の文字は動画の上だけ（黒40% を敷く）。描画後の文字色は `#3c422e` が130回、ほかは `#fff4ec` 11回だけ（`data-mood="pack"`）。
- 線は2つ：`1px dashed`（章の区切り・写真の枠・下線・脚注の縦罫）と `1px solid`（ボタン・入力欄）。影は0。角丸は写真・カード 20px、矢印の組 10px（左右で `10px 0 0 10px`／`0 10px 10px 0`）、ボタンは 9999px。
- ボタンの影は**市松**：`::after` に 6px の市松（`linear-gradient(45deg…)` ×4、`background-size:6px 6px`）を 4px（大きいボタンは 6px）右下へずらし、面（`::before`、`content:attr(data-content)`）がホバーで `translate(4px,4px)` に沈む（.3s ease-in-out、1024px 以上だけ）。フォーカスは面に `2px dotted`（`.lpa-offset[data-checker]`）。
- 文字は2書体：本文・ナビ・ボタンはタイプライター体（GT Alpina Typewriter、400 / 500、PC 16px・行間1.5、SP 15px）、見出しは細身のセリフ（ITC Garamond Condensed、400）を詰める：表紙 72px／1・字間 −2.16px（−.03em）、章 102px／.9、大見出し 120px／1・−3.6px、SP は 46 / 72px。小見出しは本文と同じ 16px の大文字。代わりは Google Fonts の Courier Prime と Instrument Serif。
- 構成：動画の表紙（100vh・黒40%・左下に見出し）→ 「いま使っている産地と収穫期」の帯（5秒で2つ）→ 3枚の切り替え（左に見出し・ボタン・矢印の組、右に 1:1 の写真）→ 手描きの物語（2451px：滴が上で止まったまま 0→1→.5 に伸び縮みする scrub）→ 巨大ロゴ（スクロールで skewX −5→5→0°）＋商品3つ（味の札 PUNCHY／MELLOW・容量・一行）→ 豆知識（Lottie＋5枚の文章）→ 料理の動詞7つ（押すと章の地がパッケージの色に .25s で変わり、レシピが替わる）→ 産地の写真＋札 → 写真の帯 → 脚注。
- 動きは ease-in-out に .25s（色・線）・.3s（ボタンの沈み）・.4〜.5s（スライド）。常に動くもの：帯 20s linear、星の回転 3s、点の点滅 2s、表紙と商品の動画。スクロールは GSAP の ScrollTrigger（scrub）。
- **止める仕組みがある**：`<body>` の最初のスキップリンクの次に「Pause animations」ボタン（脚注にも1つ）。押すと `html.motion-paused`、自動再生の video と Lottie を止め、`aria-pressed` とラベルを替え、localStorage `graza-pause-motion` に残す。初期値は保存値 → なければ `prefers-reduced-motion`。reduce の環境では最初から全部止まる（`LPA.motionToggle`）。
- **反面教師**：動画8本が 1080p・7.2Mbps で、PC もスマホも同じファイル（転送 73MB／全体 80MB。スクロールしなくても 55MB）。そのうち4本（36.4MB）は**閉じたメニューの中の 160×190px のサムネ**で、止まったまま全部読まれる。表紙の動画は同じファイルを `<video>` 2つで置く。スマホは Cookie のバナーが画面の約40%を覆う。本文の78%が中央揃え、SP の本文 15px。saveData には対応していない。
- 部品：`data-mood="pack"`、`.lpa-offset[data-checker]`、`LPA.motionToggle(btn)`、帯は `LPA.marquee`。
