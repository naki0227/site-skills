# ニュース（新聞・ニュースサイト）

## この下位タイプで特に見ること
速報と一覧の密度、更新日時、写真のキャプション

## 見本の実測
### ProPublica（https://www.propublica.org/ ・2026-10-25 計測、同日に測り直し）
PC 1440×900 / SP 390×844。見たページ：トップ、連載（/series/life-of-the-mother）、ふつうの記事（/article/enid-oklahoma-oil-disposal-well-plugged・高さ 8,012px）、長い記事（Machine Bias・高さ 21,446px・2016年の旧テンプレート）。選んだ理由：ProPublica の告知に SND Best of Digital Design の Awards of Excellence 35件の回があり、対象にサイトの作り直しが入る（年は未確認）。
- **本文（記事）**：箱 PC 754px（1行 約55字）・SP 332px（左右29px・約37字）。PC 20px / 32px（1.6）、SP 16px / 25.6px。段落の間 PC 32px・SP 24px、字下げ無し。本文色 #31302d（13.20:1）。本文中のリンクは同じ色で下線だけ、ホバーでも変わらない。書体は Tiempos Text、題は Feature Headline（可変・wght/wdth/opsz、257KB）、UI は Brut Grotesque。
- **本文（長い記事・旧）**：地 #222・文字 #bbb（8.29:1）。箱 PC 810px。21.25px / 35.06px、冒頭の段落 27.5px / 41.25px。見出しは jaf-bernina-sans-condensed（Typekit）。
- **題の幅の軸**：記事の題 PC 48px/48px・500・字間 -0.48px・`"wdth" 70`、SP 28px/33.6px・`"wdth" 100`。CSS 全体で "wdth" 100 が 85回、70 が 22回（48px 以上の見出しと数字だけ詰める）。
- **記事の頭**：分類（20px/28px・700・下線）→ 題 → リード（20px/28px・#5f5e59・6.50:1）→ 写真（キャプション 14px/19.6px、クレジット 10px/14px 大文字）→ 著者（14px・700「by 名前, 共同発行元」）→ 日時（October 5, 2026, 5:00 am）→ Listen 05:39 と Change Appearance（Auto／Light／Dark）。SP はリードを写真の下へ回す（`.p-opener__dek{order:4}`）。画面に更新日は出ない。
- **ヘッダー**：トップは 278px（ロゴ SVG 952×163）。スクロールで 57px の固定帯（下に 1px #e3e2dd・`transform .3s`）が出る。記事は最初から 57px、SP は 144px（2段）。メニューは全面 #111110・`opacity .2s`。
- **目次**：無い（長い記事 21,446px でも）。
- **部品**：図は本文幅・上下 64px・キャプション上 12px。Read More 枠は上下 1px 罫・内 24px・題＋写真 456×304。広告枠は全幅・#f7f7f7・外 64px・内 40px・`::before` に「Advertisement」10px／字間 1px。広告枠は min-height 0 で、計測時 170px → 中身が届くと約 330px。記事 PC の CLS 0.0885。
- **記事の終わり**：Contributors＋無料転載（159×32）→ More in 分類（6本）→ Most Read（9本・2列・`grid-auto-flow:column`・5行、番号は CSS カウンターの `::before` 48px・wdth 70・#006eb7、SP 32px）→ 支援の帯（#bcd9ed・上下 64px・見出し 120px/120px wdth 70、2行目だけ #006eb7 で 210px 字下げ・ボタン 38px 黒／白）→ フッター #111110。シェア・著者紹介・「次の記事」の大きな導線は無い。
- **一覧（トップ）**：主役の組 2列 555：754・すき間 32/40px、題 32px/38.4px・700、リード 16px/22.4px。関連は縦罫の右に1行の題、先頭に太字の言葉。Our Biggest Stories は 357px 角（SP 240px）・角 8px・`scroll-snap-type:x mandatory`。Browse Topics は札 67枚が2段で逆向きに `90s linear infinite`（reduced-motion で `animation:none`＋横スクロール）。
- **連載ページ**：683px の暗い写真に中央寄せで 分類 → 縦罫 → 題 80px/96px → 副題 24px → 縦罫 → 導入 20px/28px。注目5本は写真 654 と文 282 を左右交互。川24本は 日付 141px｜158×106｜題 20px/24px。次のページへのリンクはページ内に見つからなかった。
- **広告と同意**：同意バナーは出ない（日本から）。下に固定の購読の帯（PC 135px・SP 217px・#f2f1ed・×40px で閉じる・`transform .2s ease-out, opacity .1s ease-out`）。SP は入力とボタンを1本の丸い棒につなぐ。広告は記事に1枠、トップ・連載は 0。
- **色**：役割名のトークン（text-hed／text-dek／text-body／divider）を灰6段（#e3e2dd〜#22221f）に割り当て、`light-dark()` で明暗を一組に持つ（73回）。ダークは地 #000・本文 #c8c6c0・題 #dddbd4。色は Donate の #ff4c3c（白文字 3.31:1・16px 太字）と青 #006eb7 だけ。
- **動き**：opacity と transform だけ・keyword のイージング（cubic-bezier 0回）。ホバーは題・ナビが下線、ボタンが opacity .5。`:hover` 159か所、`(hover:hover)` 0。
- **データと重さ**：JSON-LD は Article・Person・BreadcrumbList・WebSite（連載は CollectionPage）。重さ（解析・広告を除く）PC top 10.25MB / list 9.65MB / article 12.66MB / long 10.94MB（SP 9.65 / 9.24 / 10.68 / 10.13MB）。全部込みの記事 PC は 15.41MB・626リクエスト・148ホスト（広告の同期で 400件以上増える）。4ページとも上位は WordPress の編集用 JS（block-editor 1,031KB・editor 1,022KB・components 786KB）と reCAPTCHA 834KB×3。
- **画像**：記事の写真は webp・srcset・width/height あり。長い記事は元 300px を 810px に拡大・width 無し。

### The Markup（https://themarkup.org/ ・2026-10-31 計測）
PC 1440×900 / SP 390×844。見たページ：トップ、連載（/series/privacy）、ふつうの記事（/privacy/2026/10/14/…・高さ 4,596px）、長い調査記事（/pixel-hunt/2026/09/14/…・10,243px）、調べ方の記事（/show-your-work/2026/01/21/…・19,491px）。選んだ理由：記事の頭の点の枠・重ね紙のボタン・寄付への手描きの矢印。/awards に SND の Awards of Excellence 6件・Best of News Design 2件の見出し（年は未確認）。
- **本文**：箱 PC 620px・SP 351px（左右 20px）。Ivar Text 18px / 30.6px（1.7）を PC・SP 同じ値で。段落の間 30px、字下げ無し。本文色 #242a49（白地 13.98:1）。h2 は Messina 700 32px / 38.4px（SP 22px / 26.4px）で、上に幅25%・高さ12px の点の帯。本文のリンクは #ff335f・下線の代わりに桃の点（3px の SVG を repeat-x）。
- **記事の頭**：灰の面 #f3f2f1 に 分類（16px 700 桃）→ 題 h1 Ivar Display 38px / 41.8px（SP 32px / 35.2px）→ リード 18px / 25.2px #66615b（SP 16px）→ By＋名前 → 日時「October 14, 2026 8:00 a.m. UTC」。題の箱の右と下に 12px の点の帯。写真 620×349 は灰の面からはみ出し、面は写真の途中で白に変わる。更新日は無い。同じ題の h1 がもう1つ 0×0 で入る。
- **目次**：無い。調べ方の記事（h2 5・h3 11）も無いが、見出しの id は define-task のような読める言葉。
- **部品**：引用は 1px #cac7c3 の枠・内 15px・幅50% を float、PC は margin-left -180px で本文の列の外へ。本文中の関連カード（写真 308×174＋題 28px）を左右交互に浮かせる。手順は ol。図表は Datawrapper の iframe（620×336・620×601、loading 指定無し）。
- **記事の終わり**：寄付の箱 → You just read（題をもう一度 32px）＋シリーズ＋共有（Copy Link・Republish）｜桃の点線｜Credits（顔 58×58・肩書・Editing の2人）→ 中央の札 The Latest＋3枚。次の1本の大きな導線は無い。Republish は全画面の紺で CC BY-NC-ND の条件と貼るだけの HTML。
- **一覧**：横長カード 1140×256（写真 360×202、SP 97×55、題 28px / 30.8px）を 1px #cac7c3 で区切り、下に「Page 1 of 7」と Newer／Older の重ね紙ボタン。Older は /series/privacy/page/2 の href。rel="next" 無し、無効の Newer に /page/0 の href。
- **トップ**：使命の一文 h1 36px（SP 30px）を点の地に → This Just In（写真 798×449・題 30px、脇2本は 282×159・21px、桃の点線）→ 棚（Investigations・Impact・Blueprints・Tools・Inside）。ロゴの脇の言葉は開くたびに替わる。
- **広告と同意**：広告 0枠、同意バナーは出ない（日本から）。外のホストは解析 static.trueanthem.com 27KB だけ。寄付をヘッダー・トップの矢印（stroke-dashoffset の keyframes dash）・本文の後・フッターの4か所で頼む。
- **色**：#fff 160・#ff335f 149・#242a49 129・#66615b 85・#f3f2f1 73・#cac7c3 23・#fbd7de 17（main.css の回数）。変数は点の模様3つと --color-mid-tan だけ。桃の文字は白地 3.56:1・灰地 3.19:1、白文字／桃の Donate Now も 3.56:1。ダークモード無し。
- **文字**：自社の woff2（Ivar Display 32KB・Ivar Text 38KB・Messina 30KB ほか）。大きさの変数 --size-5〜--size07（calc((n/16)*1rem)）と行間 --lh-4 1.1〜--lh01 1.6 を持つが、16px 63回・14px 52回と直書きが多い。
- **動き**：transform を動かす宣言は 21か所すべて `@media (prefers-reduced-motion: no-preference)` の中。値は .2s linear（cubic-bezier 0回）。重ね紙のボタン：label＋::before（3px）＋::after（6px）の 1px 紺の線、ホバーで -3／-2／-1px、線は #ff335f・#d3315b・#922f54。カードは PC 690px 以上でホバーすると写真と文字の面が translate(-12px,-12px) し、下の点の地が見える。:hover 104か所に (hover:hover) 4。メニューは max-height .4s。:focus-visible 0。
- **データと重さ**：JSON-LD は5ページとも 0件。og: 4つ・twitter: 6つ、article:published_time だけ。`<time datetime="2026-10-14T08:00:00">` に時差無し。画像は width/height・srcset・lazy 無し。重さ PC top 3.63MB / list 2.24MB / article 2.38MB（17件・3ホスト、CLS 0）/ long 1.89MB / method 19.82MB（下まで送って 43.10MB・175件：Datawrapper 13枚が main.js 415KB を枚ごと、動画9本）。全ページで video.js 入りの main.js 1,041KB。トップ SP の CLS 0.1134。
- **キーボード**：Skip navigation あり。Menu は href も tabindex も無い `<a role="button">` で、Tab は閉じたメニュー（max-height 0）の中のリンクに入る。Esc でメニューは閉じる。

### Grist（https://grist.org/ ・2026-11-02 計測）
PC 1440×900 / SP 390×844。見たページ：トップ、分類の一覧（/energy/）、ふつうの記事（/extreme-heat/as-extreme-heat-worsens-…/・高さ 10,380px）、長い調査記事（/culture/hidden-history-american-dream-…/・38,482px）、データ記事（/energy/power-bills-electricity-prices-…/・22,882px）。選んだ理由：記事の終わりの Next Article・本文の長さで割る進み具合の線・ライムの丸の繰り返し。事例集・受賞歴は確かめられなかった。
- **本文**：列 PC 600px（英語で約57字）・SP 351px。GT Super Text Book（300）22px／35.2px（1.6）を **SP でも同じ大きさで**。段落は上 18px・字下げ無し。本文色 #3c3830（地 #f0f0f0 で 10.23:1）。本文のリンクは同じ色で border-bottom 1px、ホバーは border-bottom .1s cubic-bezier(.645,.045,.355,1)。h2（long）PolySans 500 40px／48px・上 60px・下 12px（SP 24px／28.8px）。データ記事の頭の段落は PolySans 90px の飾り文字（float）。
- **引用符のぶら下げ**：段落が “ " ‹ „ で始まると text-indent -0.35em、‘ ' ‚ は -0.175em、« は -0.45em（hang-punctuation.js 2KB がクラスを付ける。見出しは header- の別の値）。
- **記事の頭**：題 PolySans 500 60px／66px・字間 -1.2px・中央（SP 40px／44px）→ リード GT Super 300 24px／33.6px・中央（SP 20px／28px。h2 で組む）→ 写真 850×478（width 1600 height 900）＋クレジット Basis 13px 斜体 → 本文の左 300px の欄に書き手（顔 26×33・角 13px＋名前 14px 700）と `dl`（Published｜Oct 27, 2026、Topic｜Climate + Extreme Heat、Share/Republish｜3つ）。dt 14px 700・dd 14px 400 右寄せ・行ごとに罫。欄は absolute で sticky ではない。SP は写真の下に全幅。`<time>` 0・画面に更新日無し（JSON-LD の dateModified は 2026-10-28T22:29）。
- **目次**：無い（long 38,482px・SP 53,769px・h2 4・見出しの id 無し）。代わりに画面の上に 2px の進み具合の線（fixed・z-index 99999999）。割る数は「本文の高さ＋記事の頭の高さ − 画面の高さ＋100」で、本文の終わりで 100%。ただし scroll のたびに style.width を書き、100% を超えても書き続ける（article の最後で 2,016px）。色はライム → 読み始めの帯が出ると #3c3830。
- **ヘッダー**：PC 70px（中央にロゴ、左に「25 Years on the Climate Beat」、右に Follow・Donate・3本線）。600px 送ると、ライム #e6ffa0 の帯（fixed・71px・下に 1px の点線）が top -75px → 0（transition top .3s）で下りる。帯にはロゴ・Donate・「Sign up for The Weekly」（SVG の線が縁を 4s linear infinite で回る）。メニューは幅 700px のライムの引き出し（transform .2s cubic-bezier(.645,.045,.355,1)・遅れ .25s、Esc で閉じる、分類は PolySans 60px 級）。
- **部品**：本文の中に広告 600×250 ×2（下に「Grist thanks its sponsors. Become one.」13px）とラベンダー #d3c8ff のニュースレターの囲み（7.48:1）。右の欄に 300×300 と 300×600（上下 1px の罫・sticky top 43.2px）。広告枠は min-height 0 だが、記事 PC の CLS 0.0062。データ記事の図は d3 7.8.5（cdnjs）の SVG で、select 2つ（州・需要家）と押して出し入れできる凡例、枠 2px #9e9c98・角 4px。
- **記事の終わり**：点線 → 「The climate news you need, right in your inbox. Always free.」と白いカード2枚（内 24/24/24/36px・題 32px／38.4px）→ **Next Article**（ラベル 14px 700 → 写真 706×397〔2000×1125〕→ 題 PolySans 50px／60px・字間 -1px〔SP 32px／38.4px〕→ 書き手・分類）→ 同じ分類（大1＋小3）｜Latest（大1＋小3）、小見出し 14px 700＋下 1px 点線 → 寄付の1段落と赤いボタン → 3列のフッター → 大きな G（306×298）。書き手の紹介・コメントは無い。本文の終わり近くで Wisepops の丸いポップアップ（直径 約346px）がページを暗くする。
- **一覧**：h1「Climate + Energy」PolySans 500 90px／90px・字間 -1.8px（SP 50px）、後ろにライムの大きな丸（太陽）がヘッダーごと重なる。Featured 1本（写真＋本文の頭を2段・飾り文字 90px）→ All Stories 10本（題 40px／48px・リード GT Super 18px・顔＋名前＋分類 13px 700｜写真 322×181、SP は写真を出さず題を GT Super 22px／30.8px に）→ ページ送り「Previous｜1 2 3 … 196｜Next」（/energy/page/2/ の href・`<link rel="next">`・いまのページは 30px の丸 #3c3830 に #f0f0f0、SP は「1 of 196」）。
- **トップ**：h1 0（主役の題も h3 の 50px／60px）。日付「Sunday, November 1st」と4分類の帯 → 主役（写真 795px）｜Latest 6本（GT Super 18px）｜連載3本 → Newsletters → Recent（行）→ 暗い帯（#3c3830 にライムの題）→ Energy｜Solutions → Staff Picks → 白い角丸の特集の面 → Watch This（ライムの再生の丸）。題にマウスを載せると 30px のライムの丸が GSAP で5倍に広がって付いてくる（.3s、離すと .1s）。
- **広告と同意**：Cookiebot の枠（画面の下の中央 864×約215、cc.js 443KB）。UserWay（上掛け）482KB、Wisepops 565KB、Google の広告（ufs_web_display.js 240KB を複数回）。広告は記事 4枠・トップ 5枠・一覧 2枠。
- **色**：変数はほぼ無く直書き（single.css で #3c3830 251回・#fff 91・#e6ffa0 60・#000 38・#f0f0f0 26・#f5515b 20・#ff6d72 18・#d3c8ff 14）。文字と罫は #3c3830 の1色で、面だけを替える（ライム 10.65:1・ラベンダー 7.48:1・長い記事の地 #ffd1df 8.57:1。長い記事は body の style に地の色を書く）。白／#f5515b の Donate 3.38:1、#9e9c98 の薄い文字 2.40:1。ダークモード無し。
- **文字**：PolySans Median（題・見出し）、GT Super Text Book 300（本文・リード・一覧の小さな題）、Basis Grotesque Pro（ラベル・日付・ボタン）。自社の woff2 10本・約459KB・font-display swap。題の字間は大きさの -2%（60px で -1.2px、90px で -1.8px）。段は 90／60／50／40／32／24／22／18／14／13。
- **動き**：ボタンは白・1px #3c3830・影 1px 1px（ぼかし無し）、押すと ::after のライムの丸が中心から width と padding-bottom 0→150%（.2s cubic-bezier(.06,.43,.98,.09)）。single.css で :hover 191 に (hover:hover) 0、:focus-visible 2（js-focus-visible の補い）、prefers-reduced-motion 0、keyframes 16、cubic-bezier 72回。
- **データと重さ**：記事に Yoast の Article（wordCount・articleSection）と別の NewsArticle の JSON-LD を両方。日付は ISO（+00:00）。一覧は CollectionPage。og: 10・twitter: 6。データ記事は図の題も h1 で h1 9つ、全ページの頭に空の h2 が4つ。重さ（解析・広告を除く）PC top 10.34MB / list 6.48MB / article 6.20MB / long 10.14MB / data 10.98MB（SP 7.98 / 5.88 / 5.88 / 7.05 / 10.92MB）。全部込みで下まで送ると article PC 8.88MB・177件・37ホスト、top 14.97MB・229件。CLS PC 0.0049〜0.0709、SP top 0.3450（書き手の行）・list 0.2403・article 0.1134。自社の JS は小さく（app.js 127KB・vendor.js 163KB）、部品の JS は `querySelector(…) && import()` でその部品があるページだけで読む。一覧の顔は表示 26×33 なのに元の jpg を CSS の背景で配る（1,329KB・651KB）。画像の width/height 無しは article 57枚中 45。

### Tansa（https://tansajp.org/ ・2026-11-05 計測）
PC 1440×900 / SP 390×844。見たページ：トップ、連載の一覧（/investigativejournal_category/union/）、ふつうの記事（/investigativejournal/15477/・高さ 8,501px）、長い記事（/investigativejournal/13400/・13,224px）。東京の非営利の探査報道。選んだ理由：連載のページ（写真の扉・部の帯・並べ替え）と、記事の終わりの寄付の欄。デザインの事例集・受賞歴は確かめられなかった。
- **本文**：列 PC 720px（1行 約42字）・SP 360px（左右 15px）。游ゴシック体（Web フォント無し）16px／25.6px（1.6）・字間 .06em・#000、地 #f5f5f5（19.26:1）。段落の下 30px・字下げ無し。h2 PC 30px／48px・SP 20px／32px、`::after` に 2px #0095b4 の線、下 35px。キャプション 11.9px／19.04px。html は 10px（62.5%）。
- **記事の頭**：連載名（17px 700 #0095b4・3.23:1）→ 題（**h2**・PC 38px／53.2px・SP 24px／33.6px・700・字間 .06em）→「2026年10月23日 17時26分　書き手」12px #333（`<time>` 無し・更新日無し）→ 共有6つ（32×32）→ 写真 720×480（srcset・width/height あり）。h1 はヘッダーとフッターのロゴ。
- **目次**：無い（long 13,224px・h2 6・id はどれも空）。
- **部品**：引用は白い面・文字 #0095b4（3.52:1）・内 25px 40px。long では出席者の名前と肩書の名簿に使う。開閉の箱（Easy Accordion：#eee・1px #e2e2e2・見出し 58px）に 44団体の一覧（開くと PC 2,286px）を畳む。写真 14枚中 alt="" 8。
- **連載の扉（list）**：写真 PC 1440×828（ヘッダーの下端から画面の下端まで JS で実測）・SP 390×520（3:4）。文字の側だけに暗い帯（0→.88、SP は上から下へ 0→.94）。「シリーズ」12.15px・字間 .48em → 題 h1 Noto Serif JP 400 76.42px／91.7px・字間 .08em（SP 52.26px）→ 副題 28.81px・.1em → 写真の右下に撮影者 12.96px。明朝はこの4か所だけ（series.css のコメント）。大きさは `--u: min(1vw,.6vh)` に連載ごとの倍率。
- **連載の帯**：扉の下に #14110f の帯「このシリーズの連載」。PC は1行 92px（部の名前 19px 700＋記事数 12.5px、縦の罫 白 .18）、SP は 54px の行。押すと `scrollIntoView`（reduced-motion なら auto）＋`pushState` で #id。
- **部の束**：部の名前 30px（SP 24px）＋「29記事　最終更新 2026年10月4日」13px＋説明の全文 15px／28.5px → 先頭1本（題 23px・写真 520×347・関連2本）｜行（題 15px／23.25px 700＋日付 12px｜写真 124×83）。「初回から／最新から」75×36 は記事の日付で並べ替え（全ての記事は最新から、部は初回から）。class="on" だけで aria-pressed 無し。「もっと見る」+4（行は全部 HTML に入っていて通信無し）、「閉じる」で頭へ戻る。
- **記事の終わり**：共有6つ → 前後の帯（上下 2px #d7d7d7、「次の記事へ」は1つ古い記事・rel="next" も古い方）→「（連載名）一覧へ」→ もっと読む（同じ連載の6本、PC 220px×3列・SP 写真 88×59 の行、連載名 12.5px #0095b4）→ 広告を取らない理由の白い面 → 寄付の欄。本文の終わりから下まで PC 3,151px（ページの37%）。本文の最後の段落に次の裁判の日。
- **寄付の欄**：マンスリー（500〜10,000円の6つ）・ワンタイム（3,000〜50,000円の5つ）・年間（10,000〜300,000円の6つ）で金額の組が替わり、毎月の 2,000円に「いちばん多い金額」の札（11px・#0095b4）。「決済手数料を負担する」（3.6%）。Stripe Elements。フォームだけで PC 1,783px・SP 2,336px。送るボタン #ffd905 19px 700。
- **広告と同意**：広告 0枠。Cookie Notice の帯（SP 390×116）。最初の h2 を過ぎると、画面の下の中央に誘いの画像（PC 540×323・SP 351×210、z-index 9999997、opacity .3s）。文字もボタンも PNG 1枚（PC も SP 用の 244KB）、行き先はメルマガ、外を押すとその回だけ消え、× で localStorage。Tab の最初が名前の無い ×。
- **色**：#fff 39・#0095b4 23・#000 16・#d7d7d7 8・#ffd905 4・#f5f5f5 3（CSS 4本の回数）。連載のページは変数（--accent #5080a8 4.03:1／--accent-text #31566e 7.48:1／--text #16181c／--bg #f9fafc）。ダークモード無し。
- **動き**：連載のページは opacity と transform だけ（扉の文字 1.1〜1.3s・遅れ .35〜1.3s、セクション translateY(24px) .65s を IntersectionObserver）で reduced-motion で止める。記事のテーマは reduced-motion 0、:focus-visible 0。
- **データと重さ**：記事の JSON-LD は WebPage（ISO・+09:00）、description は写真のキャプションから始まり2つ。連載の一覧は JSON-LD 0・datetime の無い time 131個。CLS 0.0001〜0.0118。転送（解析込み・PC）：article 2,970KB／85件（SP 2,326KB）・long 2,835KB・list 20,068KB／284件（Stripe 1,978KB・hCaptcha 1,581KB・YouTube のサムネイル 1,526KB・Donorbox 1,141KB）・top 20,867KB（カードの PNG 2160×1440 を 341×227 で、最大 5,555KB）。jQuery 2本・Swiper 2組・GA 3つ。

## 真似る型
ProPublica・The Markup・Grist（米国の非営利の報道）と Tansa（日本の非営利の探査報道）から。
1. **本文は 600〜754px・18〜22px・行間 1.6〜1.7・段落の間を取り、SP で縮めすぎない**。字下げ無し。SP は The Markup が 18px、Grist が 22px のまま、ProPublica は 16px。段落の間は 18〜32px（Grist は上 18px＝行間の半分）。
2. **色は役割の少ない組で持つ**：本文・題の濃い色、リード・日時の灰1段、罫の灰1段、アクセント1色。ProPublica は灰6段＋青＋赤、The Markup は紺・灰・桃の3つ、Grist は文字と罫を #3c3830 の1色にして面（ライム・ラベンダー・桃）だけを替える。アクセントを文字の地に使うなら 4.5:1 まで濃くする（3サイトとも Donate が 3.3〜3.6:1）。
3. **記事の頭は 分類 → 題 → リード → 書き手 → 日時（タイムゾーンか時刻まで）**。Tansa は「2026年10月23日 17時26分」と日本語で時分まで。日時は「October 5, 2026, 5:00 am」（ProPublica）「8:00 a.m. UTC」（The Markup）のように時刻まで書く。Grist は日付・分類・共有を本文の左 300px の `dl` にまとめる。更新日は3サイトとも画面に無いので、足す。
4. **題の書体で個性を出し、本文と UI は読みやすい組に任せる**：ProPublica は可変フォントの幅の軸（wdth 70）、The Markup は Ivar Display と点の帯、Grist は PolySans の題を大きさの -2% の字間で詰める。本文はセリフ、ラベルと日付はサンセリフで3書体まで。
5. **広告を置かないなら、外のホストを1つ2つに抑える**：The Markup は記事 2.38MB・3ホスト。ProPublica は記事 12.66MB・148ホスト、Grist は全部込み 8.88MB・37ホスト（同意・上掛け・ポップアップ・広告で 1.5MB 超）。
6. **動きは transform と opacity だけ・keyword か linear のイージング・reduced-motion で止める**：ProPublica は reduced-motion で animation:none、The Markup は no-preference の中にだけ書く（21か所）。Grist は reduced-motion 0 で、回り続ける線や付いてくる丸が止まらない。
7. **記事の終わりで、本文と同じ幅の「次の1本」に渡す**：Grist の Next Article（写真 706×397・題 50px、SP 32px）。その前にニュースレター、その後に同じ分類と最新。書き手と編集者を見せるなら The Markup の Credits。
8. **転載の条件を記事から1押しで出す**：ProPublica は無料転載のボタン、The Markup は CC BY-NC-ND の条件と HTML をその場でコピー、Grist は dl の Share/Republish に。
9. **引用の多い本文は引用符をぶら下げる**：Grist は “ を -0.35em、‘ を -0.175em（段落の最初の字を見て JS がクラスを付ける）。
10. **ページ送りに URL と rel="next"**：Grist は /energy/page/2/・`<link rel="next">`、SP は「1 of 196」と前後だけ。
11. **連載は扉と部の帯と部の束で見せる**：Tansa は写真だけで1画面の扉（題だけ明朝 400・76px）→「この連載の部」の帯（部の名前と記事数、押すと #id）→ 部ごとに記事数・最終更新・説明の全文・先頭1本・行、「初回から／最新から」は記事の日付で並べ替え。
12. **寄付の欄は種類で金額の組を替え、手数料の負担を選ばせ、広告を取らない理由を前に置く**（Tansa：毎月 500〜10,000円・1回 3,000〜50,000円・年間 10,000〜300,000円、手数料 3.6%）。決済の JS はこの欄に触れてから読む。
13. **長い名簿・一覧は開閉の箱1行に畳む**（Tansa：44団体 2,286px を 58px に）。

## 反面教師
- 編集用 JS（block-editor・editor・components で 2.8MB）を訪問者に配り、1ページ 10〜13MB になる（ProPublica）。
- 長い記事に目次が無い（ProPublica：高さ 21,446px）。
- 長い記事の画像に width/height が無く、元画像を拡大して出す（ProPublica：元 300px を 810px に）。
- 記事の終わりに「次の1本」への大きな導線が無い（ProPublica：Read More の小さな一覧と Most Read）。
- 広告枠の高さを取らない（ProPublica：min-height 0、170px → 約330px、記事 PC の CLS 0.0885）。
- 記事1本で 148ホスト・626リクエスト（ProPublica：広告の入札と同期）。
- reCAPTCHA をフォームの数だけ読む（ProPublica：834KB×3、全ページ）。
- JSON-LD を1件も置かない（The Markup：5ページとも 0件。meta の published_time だけ）。
- 記事に h1 が2つ（The Markup：同じ題の h1 が 0×0 でもう1つ）。
- 調べ方の記事で図表の iframe 13枚と動画9本を最初から読む（The Markup：19.82MB、下まで 43.10MB）。
- 動画の無いページにも動画の再生部品を配る（The Markup：video.js 入りの main.js 1,041KB を全ページで）。
- 360px 表示の写真を 574KB で配り、width/height・srcset・lazy が無い（The Markup）。
- メニューを開くボタンが Tab で届かない `<a role="button">`、閉じたメニューのリンクが Tab に入る（The Markup）。
- アクセントの桃を本文のリンク・分類の文字に使い 3.19〜3.56:1（The Markup：#ff335f）。
- 長い調査記事（38,482px・h2 4）に目次も見出しの id も無い（Grist）。
- 進み具合の線を scroll のたびに style.width で書き、100% を超えても書き続ける（Grist：article の最後で 2,016px）。
- prefers-reduced-motion が 0件で、購読ボタンの縁を回る線（4s linear infinite）と付いてくる丸が止まらない（Grist）。
- 図の題を h1 で組み、記事に h1 が9つ。トップは h1 が0（Grist）。
- Article と NewsArticle の JSON-LD を二重に置く（Grist：Yoast と独自の2組）。
- 表示 26×33 の書き手の顔に、元の jpg（1,329KB）を CSS の背景で配る（Grist のトップ）。
- 本文の終わり近くで、ページを暗くする丸いポップアップを出す（Grist：Wisepops 565KB）。
- 「次の記事へ」が1つ古い記事を指し、rel="next" も古い方（Tansa）。
- 記事の題が h2、h1 はヘッダーとフッターのロゴ（Tansa）。
- 最初の h2 を過ぎると、文字の入った画像の誘いを画面の下に出す（Tansa：SP 25%、同意の帯と合わせて 39%、× に名前無し）。
- 決済の JS を全記事で、連載の一覧で Donorbox・Stripe・hCaptcha を読む（Tansa：一覧の転送 20,068KB）。
- トップのカードの写真を PNG 2160×1440（最大 5,555KB）で 341×227 に（Tansa）。
- 並べ替えのボタンに aria-pressed が無く、選んだ方が読み上げられない（Tansa：class="on" だけ）。

