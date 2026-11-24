# 自然の家の共同所有・幕と中身を逆に動かす表紙と、最後に今の時刻
SANU 2nd Home Co-Owners（sa-nu.com、自然の中の別荘を年8泊から共同で持つサービス。Astro＋Splide＋GSAP ScrollTrigger＋Lenis、2026-11-24 実測）の型。白と生成りの帯に写真を全幅で挟み、UI の色は墨 `#322e21` と橙 `#ec572e` の2つ。仕組み（何を・どれだけ持つか）を番号と図の4段で説き、ページはフッターの後ろの全画面の写真と「今の時刻」で終える。

- **幕と中身を逆に動かす送り**：Splide の fade を使いつつ CSS で `opacity:1!important` に固定し、来る1枚は `clip-path: inset(0 0 0 100%) → inset(0)`（右から開く）、その中の写真は `translate(3%) scale(1.1) → translate(0) scale(1)`、どちらも 2.4s `cubic-bezier(.23,1,.32,1)`。前の1枚は `is-close` で下に残して transitionend で外す。最初の1枚は `is-first-load` で動かさない。表紙は 5s ごと、最後の画面は 6s ごと。
- **writing-mode を使わない縦書き**：1行を `display:block;width:1em;line-height:1.1;text-align:center` の span にして、行を `flex-direction:row-reverse` で右から並べる（間 1.53vw、2行目は `padding-top:2.78vw` 下げる）。句読点だけ `<span class="yakuhan">` で `writing-mode:vertical-lr; font-feature-settings:"vert","palt","vrt2"; height:.51em`。出方は右から `clip-path: inset(0 0 0 100%) → 0` .6s ease。
- **流れる写真の帯**：縦に長い1枚（868×5250）を2回重ねて `translate3d(0,-100%,0)` 60s linear infinite、2列、間 .21vw、文の横で右へ −13.9vw はみ出す。
- **仕組みの4段**：「01.」（StahlKl）＋2行の題 24px・600｜右に本文 18px、下に図（一般的な別荘｜Co-Owners の円を並べて比べる、41 拠点 251 室と地図、清掃・修繕の斜線、売却・相続の○）。段の区切りは罫 `#d1c8a6` だけ。
- **数は英字で大きく橙、単位は和文で 1/4**：41（80px）拠点（20px・600）、注記「*2026年11月時点」14px。価格は「本体価格」小・295（28px）・「万円〜」小、横に（月々 27,346 円〜）。
- **最後の画面**：フッターの後ろに `height:100dvh` の写真3枚、`radial-gradient(137.58% 137.58% at 50% 50%, transparent 0, rgba(0,0,0,.7) 100%)` で周辺を暗く、右上に縦書きの一言、左下に DSEG14 の HH:MM:SS（1.39vw・字間 .1em、`setInterval` 1s）とロゴ。
- **売り物の札**：写真 916×1200、左上に状態の帯（販売中＝橙・完売＝灰 `#b7b6b6`）、名前は英字の型名（StahlKl 30px）と和文の地名の2段、本体価格と月々、設備の札。
- **入口は2つ1組で2回**：資料請求（橙の塗り＋墨の丸「無料」）と 1泊から（橙の線）を1つの箱にし、物件の後と、仕組み・人の後に同じ形で置く。右下の丸 138px は表紙の間 opacity 0。
- 文字：dnp 秀英ゴシック銀（Typekit）400／500／600、見出しは 600・字間 .01em。英字と数は StahlKl（16KB）、時計は DSEG14 Classic（6KB）。PC 80／34／30／24／22／18／16／14px、SP 60／24／22／20／18／16／14px。代用は Noto Sans JP 500・Tenor Sans・CSS の7本の棒。
- 色：墨 `#322e21`（字 645回）、白、橙 `#ec572e`（字 36・地 10・枠 8）、罫 `#d1c8a6`（21）、生成り `#e9e3d1`（物件の章）・`#f2eee4`。墨 on 白 13.56:1、白 on 橙 3.52:1。
- 重さ：PC 26.33MB・123件、SP 22.48MB・125件（measure.js、解析タグを除く）。load の時点で解析タグ込み 19.57MB。和文書体3本 7.77MB（features=ALL・2.6MB ずつ）、商談の SDK 2.0MB、最後の画面の写真 3枚 3.93MB。動画は `preload="none"` で近づいてから src を入れる。
- **反面教師**：reduced-motion 0（送り・60s の帯・動画7本・自動の帯が止まらない）／和文書体を間引かず 7.77MB／13px 未満の字 19%（inspect FAIL）／完売 2.02:1・LINE の字 2.17:1・白 on 橙 3.52:1／時計の setInterval が画面外・タブが裏でも回る／h1 が3つ／地図の4つのボタンの aria-label がどれも「切り替える」／ヘッダーのロゴが `fetchpriority="high"` と `loading="lazy"` を同時に／SP で単語の途中の改行 17か所。
- 部品：`patterns/` の `LPA.wipeSlides(el,{interval,dur})`（幕と中身を逆に動かす送り。画面外・タブが裏・reduce で止まる）と `.lpa-tate[data-lines]`（小杉湯の縦書きのオプション。writing-mode を使わない行と句読点）と `LPA.liveClock(el,{tz})`（7本の棒の時計。見えている間だけ進む）。
- **作例で確かめた翻訳**（沢上の棚田 オーナー田・新潟の山あい・架空、2026-11-24）：別荘の「年8泊」を、棚田の「一枚を一年」に置き換えた。表紙は SANU どおり白い帯の真ん中に小さな名前と、9px の余白を残した全幅の写真（水を張った5月の棚田、Wikimedia Commons）。重ねたのはオーナー田に本当に立つ杉板の立て札1本（筆の字はその中だけ、下端は写真の外へ）。触れる1つは田の地図：4段32枚のうち空いている田を押すと、面積・水口からの順・日当たり・届く米・会費が札に出て、申し込みの欄に入る。最後の画面は日本時間の時刻と、その月の田のようす（11月「刈り跡に／藁を戻す」）を縦書きで。
