# イベント・ライブ（フェス、ライブ、展示、eスポーツ）

## この下位タイプで特に見ること
日程と会場、チケットの販売段階、当日の案内

## 見本の実測

### Lollapalooza 公式（https://www.lollapalooza.com/ ・ 2026-10-25 解剖、会期 2026-07-30〜08-02 の約3か月後。歩いた5ページ：/・/beyond-the-music・/lineup・/schedule・/tickets）
- **枠**：5ページとも「告知帯 48px（SP 72px、#dbafe0、Inter 16/24 #000）→ 固定ヘッダー 92px（SP 78px）→ 本文 → 協賛 1,014px → フッター 536px」。下層の見出し区画は「h1 62/68.2 → h2 38/41.8（2行）→ 青いボタン1つ」で揃う（SP 46/50.6・28/30.8）。
- **最初の画面**：開催後は物販（h1「NEW MERCH DROP」、左に文・右に商品写真、背景はモノクロの街並み 3000×1921 を 1440×771 で）。ヘッダーはロゴ 230×48＋1px の縦線（60px）＋「Chicago, IL／Grant Park／July 30–Aug 2, 2026」の3行（Golos Text 16/20・500、SP 12/16.8）、右端に TICKETS 117×56（SP 89×46）。
- **ヒーローの配置**：CMS の `data-alignment`（left／center／right）・`data-poster`（horizontal／vertical／slider／空）・`data-vertical-padding`（small 2rem／medium 4rem／large 5rem 0 20rem）を CSS だけで受ける。横長の絵は文を最大幅 50%・すき間 48px 5%。
- **部品の値**：地 #17120f、文字 #f6f6f6（17.2:1）、青 #32c3e2（文字 #17120f で 8.89:1、ホバー #22a0bb）、ティール #00ae99（リンクのホバー #11d6be）、黄 #d7df17、ピンク #dbafe0、赤 #fb4a40、灰 #b6b6b6。見出し Anton 400 だけ（大文字・行間110%・`text-wrap:balance`）、本文 Golos Text 16/24、ボタン Anton 28/28・字間 .01em・padding 12px 16px・角 2px・高さ 56px（SP 18.08・46px）。CSS の transition は .2s が 24 か所で最多。
- **スクロール演出（top）**：GSAP＋ScrollTrigger＋SplitType。見出しを pin（`+=2.5×svh`、PC で約3,150px）し、1字ずつ #686868 → #fff（stagger .075、1.5×svh で全字）。動画の枠は幅 60% → 100%・角 .75rem（start top 50%〜top 0%、scrub 1）。続いて1枚＝100vh の色箱4枚（写真 y 110%→0 .6s、見出しの行 y 100%→0 .4s、箱の色 .4s：#e2abe2 → #d0df00 → #fb4a40 → #00ae99、下端は破れ目）。
- **進捗バー**：ヘッダー直下に sticky（top はヘッダーの高さを JS で代入）、高さ 1rem、塗りは #00ae99 の幅 = 演出区画の progress×100%（区画は約7,800px）。
- **ナビ**：左の3本線 → 幅 400px（25rem、SP は全幅 100dvh）のドロワー、transform .4s（押して画面に入るまで 501〜510ms）。主項目 8件 Golos 20/20・間 1rem（SP 16）、白線のあと副項目 16px（SP 12.8）と TICKETS。左端に白黒ゼブラ帯、左上に赤・青の切り欠き。
- **動画**：`autoplay muted loop playsinline preload=metadata`、poster なし。PC 用 4,303KB・SP 用 4,090KB の2本で、PC 幅では2本とも取得、SP 幅は SP 用だけ。
- **出演者・時間割**：ラインナップは画像1枚（1440×1800 を 592×740、alt 空）、時間割は日ごとの画像4枚（表示 864×1080）を `<a href="#">` のタブ4つで切り替え（最初は最終日、60〜96ms）。タブは Anton 28/28・枠 2px #f6f6f6・選択中は地 #f6f6f6、SP は全幅・高さ 44px の縦並び。4枚とも `loading=eager` で見えない3枚も取得。共有ボタンは画像を File にして `navigator.share`。
- **世界観（beyond-the-music）**：体験カード45枚を3列（間 1rem／行間 1.5rem、地 #f6f6f6、画像の内側余白 1rem、h3 Anton 32/35.2、本文 16/24、矢印つきリンク Anton 20・下線 1px・矢印 .25rem を .2s）。
- **買う**：開催後の /tickets は黄 #d7df17 の帯（12.8:1）に h1・h2・お知らせ登録ボタンだけ。券種・価格・次回の日付なし。ヘッダー・ドロワー・top の演出後・各ページの見出し・フッターの5か所から /tickets か /signup へ。
- **協賛**：45社を #f6f6f6 の 112px 角・8列・間 32px（SP 80px・4列・間 16px）、ロゴは grayscale・最大幅 7rem、alt あり。27枚が `sizes="100vw"` で、1社のロゴは 1,328KB の PNG を 112px で表示。
- **表記**：`lang="en"` のみ・hreflang なし。JSON-LD は Event／Place／PostalAddress（開催後も EventScheduled、offers・performer なし）。下層4ページの h2 が「…KNOW ABOUT KNOW ABOUT…」と重複。
- **安全**：`prefers-reduced-motion` は CSS・ページ内とも 0件。991px 以下で `*:focus{outline:none}`、PC はメニューボタンだけ `outline:2px solid blue`（2.16:1）。スライダーの自動送り（4,000ms）は IntersectionObserver で画面内だけ。
- **重さ**（展開後・解析タグ除く）：top PC 21.21MB（動画 8,392KB・画像 9,057KB・JS 3,467KB）／SP 14.01MB、beyond 12.51／4.74MB、schedule 6.23／4.68MB、lineup 5.49／4.37MB、tickets 5.44／4.61MB。どのページも JS 3.2〜3.5MB（Zendesk 1.2MB・Mailchimp 0.7MB・OneTrust 0.5MB）。top PC は 42 ホストと通信、tickets PC の転送 3.74MB のうち 57% が Webflow 以外。Oswald を6太さ読むが歩いた5ページでは見えない。

## 真似る型
（見本が2つ以上そろったら、共通する型をここにまとめる。）

## 真似る候補（見本1つ）
- 会場・日付を、固定ヘッダーのロゴの横に常時置き、右に購入ボタンを1つ置く（Lollapalooza）。
- 約束は数字1つの文にして、色の違う箱に1枚ずつ載せる。長い演出にはヘッダー直下に高さ 16px の進捗バーを貼る（Lollapalooza）。
- 下層ページの頭を「h1 → 2行の h2 → ボタン1つ」の同じ区画で始める（Lollapalooza の4ページ）。
- ヒーローの配置は CMS の data 属性（揃え・絵の向き・上下の余白）で決め、CSS だけで組み替える（Lollapalooza）。
- 販売前・販売中・終了後で、チケットのページに何を出すかを決めておく。終了後も「次回のお知らせ登録」を残す（Lollapalooza の終了後はこれだけ）。
- 協賛は本文に混ぜず、フッター直前に正方形のロゴ枠で集める（Lollapalooza）。

## 反面教師
- ラインナップ・時間割を画像1枚で出し、alt を空にする（Lollapalooza）。検索・読み上げ・出演者ごとのURLが無い。
- 日付タブを `<a href="#">` で作り、ARIA・URL を持たせない（Lollapalooza）。
- 開催後も JSON-LD が EventScheduled、h1 が物販のまま、見出し文言が重複したまま残る（Lollapalooza）。
- 時間割の4日分の画像を eager で読み、見えない3枚も取る。112px の協賛ロゴに `sizes="100vw"`（Lollapalooza）。
- 991px 以下で `*:focus{outline:none}` にしてフォーカスを消す（Lollapalooza）。
