# 映画の配信・名画座・スチルの章と切符の札
MUBI（mubi.com、映画の配信。Next.js＋emotion の自作のトップ、2026-11-23 実測）の型。章の背景をその週に配信している映画の1コマ（スチル）にし、UI の色は紺1色に絞る。お知らせ（今週の映画館の1本）は、映画館の切符の形の札で写真に貼る。

- **共通の語を残して題を入れ替える**：「WATCH GREAT CINEMA」→「CINEMA LIKE NOWHERE ELSE」。2s 待って前の2語を `opacity` .3s ease-out で消し、共通の語を .7s ease-out で前の語の幅だけ左へ寄せ、2.7s から後ろの語を 1s ease-out・`translateY(-5px)→0` で出す。幅は `document.fonts.ready` のあとで測って CSS 変数（`--fade-width-left`）に入れ、`h1:not([data-animation-ready]) span{animation-play-state:paused}` でそれまで止める。本家は `left` を動かす → transform で寄せる。
- **ミシン目の切符**：朱 `#FF4238`、高さ 165px、左の帯 10.63px に半円 r≈4.45px を間隔 ≈16.1px（穴 8.9px＋地 7.22px）で SVG の clipPath。`rotate(-20deg)` で写真の右下に貼る。字は 24px・300・大文字・行間 .9（本家の #FFA49B は 1.81:1 で読めない → 白）。CSS なら `mask: radial-gradient(circle at 0 50%, #0000 r, #000 r+.5px) 0 0/100% 16.1px repeat-y`。
- **スチルの章と視差**：背景の div を `inset:-150px 0`（上下 150px 大きく）にして、react-scroll-parallax で `translateY(150px → -150px)`。暗くしたスチルに白い大文字 32px を1行だけ。2枚（どの画面でも・話し合う）。
- **SP の幕**：1,186px 未満では表紙（844px）を `position:fixed` にして 2,600px の区間を作り、区間のあと白い章が幕のように上へ重なる。区間の中は行ごとに opacity と translateY を書き換える（scroll を 25ms で間引き＋rAF）。
- **章の地を1段ずつ**：動画 → スチル → 白 → `#2D2420`（MUBI GO・黄 `#FFC000` の見出し 34px・300）→ `#EAEAEA`（Notebook）→ スチル → 白 → `#EAEAEA`。線や箱で区切らない。
- **入口は2回**：表紙と最後に同じ形（メール欄 64px・枠 `#C8C8C8`＋紺 `#001489` のボタン 216×64・角丸 0・24px 500、ホバー `#001AAF`）。間の章の行動は文字リンク（GO GO GO・SEE THE NEW ISSUE、18px）だけ。
- **今の3本**：16:9 のスチル 372×209 を 3px 間隔で3枚、題 22px・500 と監督（700）・国・年 12px を下端に重ね、乗ると暗い面と再生の丸を opacity .6s ease-out。
- 文字：Riforma（LL）1書体を Regular・Medium・Bold だけ読む（Heavy・Italic・KCompress・Tiempos は登録だけで unloaded）。Arial に `size-adjust:106.7%`・`ascent-override:90.91%` の代わりの書体を作り、読み込み前後の行のずれを止める。題は大文字・字間 0、PC 60／34／32／26／24／22／18／16px、SP 30／24／18／16／14px。代用は Archivo。
- 中身の幅：`max-width` 375（412px〜）→ 792（810px〜）→ 1,168（1,186px〜）→ 1,544（1,562px〜）→ 1,920px（1,938px〜）、左右 20〜22px。
- 重さ：PC 14.16MB・250件、SP 12.05MB・216件（measure.js）。JS 7.4MB（Stripe 1.19MB・castlabs 589KB・reCAPTCHA 846KB×3・GTM）、表紙の10秒の動画 3.16MB（SP は H.265 の 1.93MB。端末3種×符号化2種）、6拠点の `/blip/100KB.data`×3＝1.8MB。
- **反面教師**：reduced-motion 0（動画の loop・題・視差・幕が止まらず、動画に止めるボタンも無い）／題を `left` で動かす／切符の字 1.81:1、フッター #7D7D7D on #EAEAEA 3.42:1、注記 12px・10px／メール欄が `type="text"`・label なし・枠 1.67:1／今の3本の札が a でも button でもなく tabIndex −1／ハンバーガーが `href="#"`／表紙で決済・DRM の再生器・reCAPTCHA×3 を読む／1280px の QR を 85px で表示／HeadlessChrome の UA には「access blocked」を返す（inspect.js で測れない）。
- 部品：`patterns/` の `.lpa-ticket`（ミシン目の切符、CSS の mask）と `LPA.morphTitle(el,{wait,fade,move,enter})`（共通の語を残して題を入れ替える。transform で寄せ、reduce では最後の形）。
- **作例で確かめた翻訳**（七条シネマ・旭川の98席の名画座・架空、2026-11-23）：スチルの代わりに本物の映写機の写真（Wikimedia Commons、光劇場の物と明記）を全面に敷き、名前と題は「もぎりの半券」に刷ってはみ出させた（看板の字を大きく置かない）。題は「フィルムで 二本立て」→「二本立て 千三百円」と共通の語を残して入れ替え。触れる1つは今週の時刻：回を押す → 空席を確かめる（.6s）→ 列と番 → 「もぎる」で半券の右が外れる。ふさがった席はとなりの空きを言い、始まった回は日本時間で選べなくする。視差は最終回のあとの夜の写真の章に1つだけ。
