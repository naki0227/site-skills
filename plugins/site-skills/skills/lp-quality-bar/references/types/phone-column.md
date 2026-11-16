# 化粧品・ヘアケアのブランド・スマホ幅の柱と左右の袖、3つの動詞の手順
MEGAMIS（megamis.lion.co.jp、ライオン、Astro＋Tailwind v4＋GSAP ScrollTrigger＋Swiper、2026-11-16 実測）の型。PC の 1440px でも真ん中の 390px の柱だけがスクロールし、左右の袖（525px ずつ）は固定。商品の手順「ひらく・いれる・とじる」を、袖・ピン留め・使い方で3回くり返す。
- **PC でもスマホ幅の柱1本**：`main{width:min(calc(var(--vw)*390),390px)}`、左の `aside.links`（ロゴ・案内 Marcellus 24／16px・QR・注記 ※1〜4）と右の `aside.products`（手順の3本の瓶をアーチの額に＋賞のバッジ）は `position:fixed`、高さ `calc(100% - 70px)`。SP は袖を消して柱だけ。袖が「目次」と「商品の手順」をずっと見せるので、柱の中は1本の物語に専念できる。
- **寸法は `min(calc(var(--vw)*N), calc(var(--rem)*N))`**：`--vw = 100vw / --comp-w`（柱 390、袖の絵 1400／1440）。390px 未満で比で縮み、それより広いと N px で止まる。字は `calc(var(--rem)*N)` で縮めない（ただし本文 13px）。
- **手順は3つの動詞**：「ひらく」22px 500 の「」、前に 10px の「シャンプーで」、下に1行の説明 11px。題材の主題（鍵と扉）から動詞を作り、袖・FEATURE・HOW TO USE で同じ3語。
- **ピン留めの3段は、クラス1つで全部切り替える**：`pin:true, end:"+=400%", scrub:true`、進み具合 1/3・2/3 で `step-1/2/3`。弧の3点の札（左下 `translate:-50% 15%`・上 `-50% -75%`・右下 `50% 15%`）は rotateY 180°→0・opacity 1s、商品は rotate 8／−8／8°、窓の背景と説明も CSS が同じクラスで替える。
- **窓の形を2つに決める**：上が丸いアーチ `9999px 9999px 0 0`（窓・額・袖の瓶）と下が丸い半円 `0 0 9999px 9999px`（説明の面）。商品の額は 2px の点線を内側に。
- 色：Tailwind の `@theme` に7色。字は powder `#043a69`（白 11.57:1、HTML で 42回）、地は白と powder を交互、淡い地 aqua `#ddf3f7`、飾り blush `#ffbfd7`（powder の上 7.54:1、白の上 1.53:1 なので字にしない）、罫 `#cecece`。
- 文字：Marcellus 45px（章の題・行間 1・字間 .65px）／25px（STEP）、Noto Serif JP 20px、Noto Sans JP 22／13／11／10px、Zen Kaku Gothic New 11px 700。字間 .05em と .08em。
- 動き：章の題は opacity と translateX −20px を 2s power3.out＋マスク 1.2s（`top 80%`・once）、題の下の星は rotateY 4s ease-in infinite、袖の鍵は swing 10s・2s 遅れ・linear・alternate（0→−40°→0→40°、`transform-origin:0 0`）、花は translateY 8%／12% を 6s、章の境目の波は mask-position 10s。HOW TO USE の縦線は scrub .5 で 0→100%。商品は Swiper 1.34枚・中央・間 12px・1000ms・5秒。乗ったときは全部 `hover:hover` の中（浮く −2/−4px .4s・.6・1.05・90°）。共通のカーブ `cubic-bezier(.22,.61,.36,1)` .6s。
- 重さ：PC 44.09MB（166件）・SP 40.94MB。動画 15.6MB（SP も PC 版の FEATURE 5.8MB）、和文の書体4本を間引かず全部 preload 9.48MB、閉じたモーダルの YouTube 4つ 8.4MB。
- **反面教師**：reduced-motion が CSS・JS とも0／本文 13px・注記 10px・上付き 7.8px／見出しの白→blush のグラデの文字（1.81:1）／キービジュアルの見出しが画像の中で alt に無い／中央揃え 49%／ピン留めの段をキーボードで選べない／自動送りに止めるボタンが無い。
- 部品：`patterns/` の `.lpa-pcol`（柱と袖の枠）・`LPA.pinSteps()`（ピン留めの区間を n 等分して data-step を替える）。
- **作例で確かめた翻訳**（元町 三宅文具店「波止場インク」・架空、2026-11-16）：手順の3語は万年筆にインクを入れる「ひたす・すう・ぬぐう」に、アーチの窓はコンバーターの写真とインクの量の面に、袖の鍵はペン先（最初の画面で ±3° に揺れる唯一の物）に、注記は「乾く時間は上質紙 79g/m² に F で測った値」に。触れる1つは、色ごとの乾く秒数（11／14／19秒）で色が変わる試し書きの紙。最初の画面は青緑 #4cc3cf の1色の地に、白い地のペン先の写真を multiply で沈めた主役と、幅いっぱいの「波止場インク」。
