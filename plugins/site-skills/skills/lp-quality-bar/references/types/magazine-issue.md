# 雑誌・季刊誌・号の表紙をめくると目次の札
Kinfolk（kinfolk.com、WordPress＋WooCommerce の自作テーマ・GSAP 3.12.5＋ScrollTrigger・Lenis 1.0.42・Flickity・Barba、制作 Six、2026-11-21 実測）の型。号の表紙そのものを1枚目にし、表紙をめくると下で止まっていた「最新の物語」（全面の写真＋目次の札）が現れる。色は白黒で、写真と1章だけの地の色に任せる。太さは全部 400。
- **号の表紙が1枚目**（ProductHero、PC 850px・SP 506px）：白い地に h1「ISSUE 61」＋「THE PLAY ISSUE」の2行（Serif-Deck 50/52px・uppercase・−.01em、SP 25px）、真ん中に表紙の写真1枚（313×405、Flickity で見開き10枚）、下に「Buy ｜ Read」の2語の文字リンクだけ。塗ったボタンは無い。
- **表紙をめくる**：表紙は `position:absolute; z-index:1; background:#fff`。ScrollTrigger で表紙を trigger（start "top top"・end "bottom top"）に、次の章を `pin`（pinSpacing true）。PC（medium より上）だけ、SP は普通に流す。JS なしなら、下の章を `position:sticky; top:0; margin-top:-100svh` にして、後ろに画面1つ分の走る区間を置けば同じ見え方になる。
- **目次の札と8秒の輪**（StoryModule）：全面の写真（PC 100vh・SP 90svh）の右下に「LATEST STORIES」（Serif-Text 15px・uppercase）と札8つ。札は分類（幅 30%・Sans 15px）｜題（Serif-Text 15px）の2列、選んでいない札は opacity .4、乗ると 1（.3s ease・hover:hover かつ pointer:fine だけ）。左の 14px の円（r 6.5・dasharray 45）を `setInterval(40ms)` で .5% ずつ描いて 8秒で次へ。輪は選んだ札の高さへ .5s で動く。左下の題は2段（大文字＋文、32/38px）、替わるときは opacity .6s ease を .6s 待って。章が画面に入ってから回し（start "bottom 75%"）、出ると止める。写真の明暗で `data-colour-state` を持ち、ヘッダーを白に替える。
- **題の2段**：1行目は大文字の題、2行目は同じ大きさの文（特集 60/60px・行間 1.0、SP 30/30）。太さも大きさも変えず、uppercase の有無で題と文を分ける。
- **章の頭**：題（Serif-Deck 32px）・右に View All（15px）・`border-bottom:2px solid #000`・下を 80px（1440px）あけて札の列。
- **札**：写真 29:39（296×398）・分類と号「Arts & Culture, Issue 61」（13px・.03em）・大文字の題（15px）・一文（15px）。乗ると題だけ `#606060`。
- **指につく番号**：見開きの上で「1 / 10」（Sans 25px）がポインターへ毎フレーム距離の .4 だけ近づく（数字の下端がポインター）。`(hover:hover)` だけ、reduce・タッチでは出さない。
- **見出しの行を幅いっぱいに**（FlexibleTitle）：行ごとに 容器の幅 ÷ 行の幅 を測り、最小の倍率で全行を scale、容器の高さを書き直す。
- **長い写真の横で止まる題**（LargeFeaturedStory）：1,865px の写真の上で、題の箱（900px）が sticky で止まる。
- 色：#000 166回・#fff 102回（29本の CSS）。罫とフォームの字 `#d0d0d0`、乗った題 `#606060`、1章だけ sage `#dbded5`（黒で 15.42:1）、エッセイの記事の地 `#d8d4d1`。有彩色の UI なし。
- 文字：自前の woff2 4本（Sans・Serif-Deck・Serif-Display・Serif-Text、計 107KB、`font-display:fallback`）。セリフを大きさ別に3本持つ。太字ゼロ（`b,strong` も 400）。大きさは `calc(.13793vw + 12.24138px)` を 1440px で 15px・739px 以下で 13px に止める。代用は Newsreader（opsz で Text／Deck／Display）と、和文なら明朝 400（Shippori Mincho）。
- 動き：`opacity .5s cubic-bezier(.25,1,.5,1)` が 49 回（transition 143 のうち 100 が opacity から）。keyframes は fadeIn の1つ。Lenis duration .5・mouseMultiplier .5。広告の視差 y −45%→−65%（1200px 以上）。
- 重さ：PC 7.38MB・145件（写真 AVIF 5.8MB・CSS 903KB・JS 524KB・書体 107KB）、SP 6.05MB。写真は ImageKit が .jpg の URL のまま AVIF で返す。
- **反面教師**：目次の自動送り（setInterval）が reduced-motion でも止まらず、止めるボタンも無い（CSS の一括 .01ms は JS の送りを止めない）／写真の上の白い題が 1.96〜2.58:1、非選択の札は .4 でさらに薄い／SP の本文 13px・PC 15px／SP でも物語の写真の原寸を11枚（load 直後の写真 4.06MB、PC の倍）／`play()` を `pause()` が中断するエラー／pace.js を `@latest` で読む／フォームのラベル #d0d0d0（1.54:1）／h1 が2つ／指につく黒い番号が表紙の緑の上で 2.05:1。
- 部品：`patterns/` の `.lpa-turn`（表紙をめくる、CSS だけ）と `LPA.ringIndex(list,{interval,onPick,pause})`（目次の札と輪の送り）。
- **作例で確かめた翻訳**（金沢の町の季刊誌「用水」・架空、2026-11-21）：号の表紙は全面の写真に、雑誌の背（苔の緑の帯に誌名 56px・号・季節を縦に）と、写真の下の帯（特集名と「この号を買う｜目次を読む」）。目次は写真 61.8%＋苔の緑の柱 38.2% に分け、白い題は写真の下の膜の上だけに置いた（本家の 1.96:1 を避ける）。札は用水の名前｜題｜ページ。定期購読は郵便番号から「どの号から届くか」を日本時間の今日で出す。
