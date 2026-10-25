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

## 真似る型
（見本が2つ以上そろったら、共通する型をここにまとめる。）

## 反面教師
- 編集用 JS（block-editor・editor・components で 2.8MB）を訪問者に配り、1ページ 10〜13MB になる（ProPublica）。
- 長い記事に目次が無い（ProPublica：高さ 21,446px）。
- 長い記事の画像に width/height が無く、元画像を拡大して出す（ProPublica：元 300px を 810px に）。
- 記事の終わりに「次の1本」への大きな導線が無い（ProPublica：Read More の小さな一覧と Most Read）。
- 広告枠の高さを取らない（ProPublica：min-height 0、170px → 約330px、記事 PC の CLS 0.0885）。
- 記事1本で 148ホスト・626リクエスト（ProPublica：広告の入札と同期）。
- reCAPTCHA をフォームの数だけ読む（ProPublica：834KB×3、全ページ）。
