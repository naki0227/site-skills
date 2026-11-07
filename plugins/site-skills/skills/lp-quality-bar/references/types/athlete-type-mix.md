# スポーツ選手の個人サイト・2書体を1文に混ぜる（暗い緑とライム）
Lando Norris 公式サイト（landonorris.com、OFF+BRAND 制作・Webflow、2026-11-07 実測）の型。選手1人のサイトで、ヘルメット・サイン・次のレースを部品にし、章ごとに地を暗い緑と白っぽい色で入れ替える。PC 13,577px・12 の章（SP 9,429px）。
- **名前のロゴを2書体で積む**：上の段をセリフ（LANDO・Brier Bold）、下の段を太いサンセリフ（NORRIS・Mona Sans）、同じ幅で左上に。
- **1文の中で書体と色を替える**：宣言は Mona Sans 660・`font-variation-settings:"wdth" 93`・大文字 105.8px（PC。7.9375rem）、行間 .9、字間 −.0079em。`<strong>` の語だけ Brier（110px）＋ `#b2c73a`（暗い緑と 7.56:1）。章の題も「Mona Sans の語＋Brier の語」（HELMETS／Hall of Fame 60／62.5px、ON／TRACK 93〜97px）。強調は太さでなく書体の切り替えで。
- **行ごとに色の帯で拭いて出す**：SplitText で行に分け、行ごとに `clip-path: inset(0 100% 0 0)`→0 を .6s、重ねた色の板を `scaleX` 1→0（右を軸）で .6s、行の遅れ .15s、power2.out。見えたら1回（top 95%、once）。色は属性で lime・lime-off・dark-green-tint-1 から（HTML に 40 か所）。
- **地を2つにして章ごとに入れ替え、境目で混ぜる**：`#282c20`（暗い緑）と `#f4f4ed`（白っぽい・純白でない）。写真の帯の章で ScrollTrigger の進みに合わせて暗い緑→白へ補間（本家は WebGL の背景の色）。ライム `#d2ff00` は暗い地の上・ボタン・帯だけ（明るい地とは 1.05:1）。UI の色は `--color--*` 15個、有彩色はライム3段と McLaren の橙だけ。
- **縦のスクロールで横に送る写真の帯**：pin・scrub 1、x = −(帯の幅 − 画面の幅)。写真 13 枚を高さと位置を変えて散らし、上に「Qatar, 2024」のように地名と年だけ。間に Brier の引用とサイン。
- **殿堂の格子を列ごとにずらして戻す**：4列、列 i を i×5rem 下に置き、通り過ぎる間に 0 へ（scrub・ease none）。
- **札の扇**：SNS の縦長の札7枚を rotation ±7/14/21°・scale 1/.9346/.8498/.7756・x ±11/22/30・y 1.3/4/7.3（991px 以下は x ±6/11/15）・z 10/3/2/1。
- **左下の「次」の札**：NEXT RACE（コースの線・開催地・所属）。1px の線で上の角を斜めに切る。中身は毎週替わる。
- **サインを線で描く**（Rive）、**暗い大きな札で閉じる**（ライムの縁、一言 70px・サイン・左右のリンク）。ストアの章は上の縁を `clip-path: ellipse(70% 0% at 50% 0%)`→`100%` でバイザーのように開く。
- 文字：大きさは rem で、`html{font-size: clamp(min,100vw,max)/1728 × unit}`（992–1920px は unit 16 → 1440px で 13.33px）。本文 1.25rem（PC 16.7px）・行間 1.25、札 .625rem（8.3px）、ボタン 1rem・800・wdth 86・大文字。書体は Webflow の CDN から woff2 2本（187KB）。代わりは DM Serif Display（Brier）と Mona Sans（Google Fonts にある）。
- 動き：GSAP 3.13（ScrollTrigger・SplitText）＋ Lenis ＋ three.js ＋ Rive。イージング15種（power2.out 36回が最多）、時間15種。CSS の transition は `background-color .1s, color .1s` ほか2つ、keyframes は読み込みの spin だけ。帯（marquee）は画面外では始めない。
- 重さ：PC 10.04MB・SP 11.1MB。うち 3D（glb・HDR・テクスチャ・KTX2）と JS は itsoffbrand.io から PC 5.5MB・SP 7.3MB、Rive の wasm 529KB を unpkg から、JS 1本 1.32MB。写真は WebP で、load で読むのは1枚だけ（残り lazy）。
- **反面教師**：`prefers-reduced-motion` が 0 か所（慣性・scrub・3D・帯・扇が全部動く）／文字の大きさを画面の幅から計算するので SP の本文 13.5px・札 8.7px（PC の札も 8.3px）／明るい地のキャプション `#b4b8a5` が 1.84:1／`screen.orientation.type` が landscape と返る環境では縦の 390px でも「Please rotate your device」の画面だけ／img 133 個のうち 115 個が alt 空／大きさの段 PC 16・SP 13（inspect の WARN 8）。
- 部品：`patterns/` の `LPA.barLines(el,{color,stagger})`（行ごとに色の帯で拭く。reduce・saveData なら最初から全文）、`LPA.fan(list,{onPick})`（札の扇。押した札を真ん中へ、←→ で選ぶ）。
- **作例で確かめた翻訳**（汐田 楓・架空のボートレーサーの公式サイト、2026-11-07）：名前を「Kaede（DM Serif Display）／SHIOTA（Mona Sans wdth 75・900）」で積み、宣言は Noto Sans JP 900 の文に明朝（Shippori Mincho B1）＋差し色の語を混ぜた。扇の札は枠番の6色＋全コースの7枚にし、押すとコース別の成績が替わる（触れる1つ）。次の出走の札に今期の平均スタート 0.14、殿堂の格子は「整備の帳面」（号機・2連率）に。色は地 #f3f5f2・主の藍 #10283a・差し色はヘルメットの蛍光ピンク #ff4a8d。
