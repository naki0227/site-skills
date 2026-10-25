# イベント・ライブ（フェス、ライブ、展示、eスポーツ）

## この下位タイプで特に見ること
日程と会場、チケットの販売段階、当日の案内

## 見本の実測

### Lollapalooza 公式（https://www.lollapalooza.com/ ・ 2026-10-25 解剖、会期 2026-07-30〜08-02 の約3か月後）
- **最初の画面**：開催後は物販（h1「NEW MERCH DROP」、左に見出し・右に商品写真・下にモノクロの街並み）。最上部にピンクの帯（#DBAFE0・高さ48px）で物販の告知。ロゴ＋縦線＋「Chicago, IL／Grant Park／July 30–Aug 2, 2026」の3行を全ページの固定ヘッダーに入れ、右に常時「TICKETS」。
- **ヘッダー・部品の値**：地 #17120F、文字 #F6F6F6、青 #32C3E2（ホバー #22A0BB）、黄 #D7DF17、ピンク #DBAFE0、赤 #FB4A40、ティール #00AE99。見出し Anton（h1 62px/68.2px、h2・h3 38px/41.8px、SP は 28px/30.8px、大文字）、本文 Golos Text 16px。ボタンは Anton 28px/28px・字間 .28px・padding 12px 16px・高さ56px（SP は 18.08px・高さ46px）、角丸 0。transition は .2s／.25s。
- **進捗バー**：ヘッダー直下に `position:sticky; top:5.75rem`（SP は 4.875rem）、高さ 1rem、塗りは #00AE99 の幅 %。トップの動画・紙片カードの区画（高さ約7849px）の中でだけ伸びる。
- **ナビ**：左のハンバーガー→幅400pxのドロワー（左端に白黒ゼブラ帯と赤の切り欠き）。項目は 20px/36px で 8 件、区切り線のあとにヘルプ・アプリ・TICKETS。
- **動画**：`<video autoplay muted loop playsinline preload=metadata>`、ポスターなし。PC 用と SP 用の2本を、どちらの画面幅でも両方取得（PC top の mp4 は約4.3MB）。
- **世界観**：全幅写真の上に、不揃いに切った紙片のカードを置く（黄の見出し 40px、「170+ artists across 8 stages」のように数字で約束する）。協賛は 112px 角の白い正方形を 8 列・間隔 32px で全ページ下部に並べる（alt はすべて入っている）。
- **出演者・時間割**：ラインナップは 1440×1800 の画像1枚（alt 空）。時間割は日ごとの画像（PC 表示 864×1080、最大幅 54rem）をタブで切り替え（60〜96ms）。タブは `<a href="#">` で ARIA・URL なし。SP のタブは全幅・高さ44px の縦並び。
- **買う**：開催後は /tickets に価格・券種が無く、お知らせ登録ボタンのみ（黄の見出し帯）。ニュース一覧・キャラクターに当たるページは無い。
- **表記**：JSON-LD は Event／Place／PostalAddress のみ（offers・performer なし、開催後も EventScheduled）。4ページで見出しが「BE FIRST TO KNOW ABOUT KNOW ABOUT」と重複。
- **重さ**：PC top 17.22MB（WebP 5.99MB・MP4 4.30MB・JS 3.01MB）／SP 14.21MB。lineup 5.49MB、schedule 6.23MB、tickets 5.44MB（うち JS 約2.7〜3.0MB：チャット・クッキー同意・メール登録）、beyond-the-music 12.51MB。横スクロールなし。

## 真似る型
（見本が2つ以上そろったら、共通する型をここにまとめる。）

## 真似る候補（見本1つ）
- 会場・日付を、固定ヘッダーのロゴの横に常時置き、右に購入ボタンを1つ置く（Lollapalooza）。
- 販売前・販売中・終了後で、チケットのページに何を出すかを決めておく。終了後も「次回のお知らせ登録」を残す（Lollapalooza の終了後はこれだけ）。
- 協賛は本文に混ぜず、フッター直前に正方形のロゴ枠で集める（Lollapalooza）。

## 反面教師
- ラインナップ・時間割を画像1枚で出し、alt を空にする（Lollapalooza）。検索・読み上げ・出演者ごとのURLが無い。
- 日付タブを `<a href="#">` で作り、ARIA・URL を持たせない（Lollapalooza）。
- 開催後も JSON-LD が EventScheduled、h1 が物販のまま、見出し文言が重複したまま残る（Lollapalooza）。
