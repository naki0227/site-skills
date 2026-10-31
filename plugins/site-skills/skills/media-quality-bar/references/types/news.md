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

## 真似る型
ProPublica と The Markup（どちらも米国の非営利の調査報道）から。
1. **本文は 620〜754px・18〜20px・行間 1.6〜1.7・段落の間は行間より広く（30〜32px）**。字下げ無し。SP も本文を小さくしすぎない（The Markup は 18px のまま、ProPublica は 16px）。
2. **色は役割の少ない組で持つ**：本文・題の濃い色、リード・日時の灰1段、罫の灰1段、アクセント1色。ProPublica は灰6段＋青＋赤、The Markup は紺・灰・桃の3つ。アクセントを文字に使うなら 4.5:1 まで濃くする（両サイトとも 3.3〜3.6:1 で足りていない）。
3. **記事の頭は 分類 → 題 → リード → 書き手 → 日時（タイムゾーンか時刻まで）**。日時は「October 5, 2026, 5:00 am」（ProPublica）「8:00 a.m. UTC」（The Markup）のように時刻まで書く。更新日はどちらも画面に無いので、足す。
4. **題の書体で個性を出し、本文と UI は読みやすい組に任せる**：ProPublica は可変フォントの幅の軸（wdth 70）、The Markup は Ivar Display と点の帯。h2 だけ書体を替えて節の頭を示す（The Markup：セリフの本文にサンセリフの h2）。
5. **広告を置かないなら、外のホストを1つ2つに抑える**：The Markup は記事 2.38MB・3ホスト。ProPublica は記事 12.66MB・148ホスト（広告1枠と同期）。
6. **動きは transform と opacity だけ・keyword か linear のイージング・reduced-motion で止める**：ProPublica は reduced-motion で animation:none、The Markup は no-preference の中にだけ書く（21か所）。
7. **記事の終わりで書き手と編集者を見せ、同じ連載・最新へ回す**。ただし「次の1本」の大きな帯はどちらにも無い（横断ルール3の Quanta Magazine を足す）。
8. **転載の条件を記事から1押しで出す**：ProPublica は無料転載のボタン、The Markup は CC BY-NC-ND の条件と HTML をその場でコピー。

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
