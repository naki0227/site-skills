# 再生素材の一点物の店・コードと値段だけの正方形の格子と 0.8px の線
FREITAG（freitag.ch、トラックの幌から一点物のバッグを作るスイスの会社。Next.js＋Tailwind＋Frontastic、2026-11-25 実測）の型。白い地に `#cacaca` の 1px の線の格子だけでページを組み、一点物の商品を「型番と値段だけを等幅で書いた正方形」に1つずつ入れる。UI は黒・白・灰で、色は商品（幌）と写真にだけある。

- **線は outline で重ねて1本に**：全部の章が12列のセル（`col-span-12 md:col-span-6 lg:col-span-4`）で、セルに `outline:1px solid #cacaca`。border でないので隣と重なって二重にならない。左右の端から `.7rem` に 0.8px の縦線（`#cacaca`）を通し、ページ全体を方眼紙にする。表紙だけ `width:100vw;margin-left:-50vw` で枠の外へ。
- **一点物の正方形**：PC 6列 232px・SP 2列 195px。左上 12px に型番と値段（AkkStdMn 11.28px・字間 .02em、SP は 15.5px）「F49 FRINGE／370.00 USD」。写真（`#efefef` の地で撮った商品、cloudimg `w=300&h=300`）はマスいっぱい。カートの錠剤は `lg:opacity-0 lg:group-hover:opacity-100 duration-200`、売れ筋だけ右下に線の錠剤「ベストセラー」。24マスの下に黒い帯「+ 全ての商品を見る」（32.4px）。
- **2:1 の送りと細い目盛り**：3枚（動画は Cloudflare Stream の HLS、autoplay・muted・loop）。目盛りは高さ 2px・間 6px・左右 48px・上 24px、今 1／ほか .35。`setTimeout(next, 1e4)`（押すと数え直し）、送りは `translate3d(-100%·i)` .9s `cubic-bezier(.4,0,.2,1)`、登場は `opacity 0→1・scale 1.02→1` .6s ease-out。矢印は 48px の丸 `rgba(202,202,202,.75)`、送りに乗ったときだけ出て、乗ると黒。暗幕は下から `rgba(0,0,0,.5) 0%→.4 20%→.1 100%`。SP は 1:1。
- **■ の札**：8.3px（.52rem）の四角＋等幅の大文字 11.28px を見出しの上に（■ PRODUCT STORIES）。見出しは太さ 400 のまま。
- **錠剤のボタン**：高さ 38px・`border-radius:9999px`・白・影 `2px 2px 10px rgba(0,0,0,.12)`・ブランド書体 F-Regular 9.9px・字間 .05em。HTML の字は `≥` で、書体がそれを矢印に描く。
- **黒い面をトンボで囲う**：ニュースレターの黒い面で、札（最新の FREITAG ニュースを入手する）の上下の外側に 50px の L 字を4つ、内向きに。
- **色の名前を題材の語で**：`--traffic-yellow:#fd0`・`--signal-orange:#ff5b27`・`--industrial-green:#bec8af`・`--line-grid-gray-light:#cacaca`・`--lines-grid-on-black:#616161`。
- 文字：自前の otf 8本。トップは AkkStdRg（見出し・本文）・AkkStdMn（型番・札）・FRg（ボタン）で、全部 400。段は 76.1／48／32.4／24px（行間 97%・字間 -.02〜-.005em）、長い文 23.9px（行間 115%・字間 .02em、SP 18.3px）。Akkurat に仮名が無く、日本語は OS の書体。代用は Inter・IBM Plex Mono。
- 重さ：PC 22.26MB・231件、SP 20.41MB・201件（measure.js）。_app.js 1本 3.93MB、動画 7.40MB（SP も 1080p）、CMS の JSON 807KB を3回。画像は Cloudinary `f_auto,c_fill,g_auto,w_640,ar_1:1` で表示幅に近い WebP。
- **反面教師**：inspect FAIL 5（SP の本文 11px＝クッキーの同意の文・13px 未満 PC 39%／SP 85%・SP の書体4種・React #418）／reduced-motion は送り・動画に無く、画面外でも 10 秒ごとに送る／フッターの見出し `#616161` on 黒 3.39:1／日本語の改行が語の途中（SP 13か所）／SP にも 1080p の動画。
- **作例で確かめた翻訳**（潮目旗布・銚子の大漁旗の袋・架空、2026-11-25）：幌を「漁船から引退した大漁旗」に置き換えた。正方形のマスの写真の代わりに、旗1枚の中で「どこを裁ったか」を色の四角で示す裁ち図を入れ、型番は「旗の番号-品の番号（0412-03）」。表紙の写真（CC0 の大漁旗）には袋を裁つ白い点線と寸法の札を重ね、作り手の手を見せた。字と線は旗の藍、差し色は旗の朱だけ。
