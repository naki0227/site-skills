# アニメ・音楽・映画（作品・アーティストの公式）

## この下位タイプで特に見ること
放送・配信・上映の情報、スタッフとキャスト、試聴、おうちで観る（配信・ディスク）の導線、音の扱い

## 見本の実測

### 映画『Wicked: For Good』公式（https://www.wickedmovie.com/ ・2026-10-27 解剖、米国版 en-US。2025-11-21 公開、配信・ディスク発売後。歩いた5ページ：/・/tour/emerald-city・/tour/glindas-quarters・/videos・/tickets/watch-at-home/、ほかに /synopsis と /ja）
- **枠**：Nuxt（Vue「3.5.18」）＋three.js（「178」）＋GSAP（「3.13.0」）＋Lenis＋Howler。購入の /tickets/ だけ Powster 社の Movie Platform（別の CSS、書体 century-gothic、緑 #137508）。ニュースのページは無い（/news は 404）。
- **最初の画面（top）**：3Dの「WONDERFUL WIZARD'S MAP OF OZ」（題 90px、975px 以下 54px）。入口に ENTER（72×72 の丸、音あり）と ENTER WITHOUT SOUND（192×48）。ロゴの下に「ON SALE NOW. DIGITAL, 4K UHD & BLU-RAY.」12px・字間 .12em（SP 9px）。キービジュアル・トレーラーは最初の画面に無い。
- **音**：BGM `/sounds/music-main.mp3` 8,762KB を、音を選ぶ前（読み込み約3.4秒）に PC・SP とも取る。音なしを選んでも取り消さない。部屋・動画のページも同じ。
- **世界観（部屋）**：地名ごとに URL（`/tour/emerald-city` など5部屋）。気球のローディング（％を円の両側に2つ、弧は conic のマスクを 10s ease）→「WELCOME TO＋地名（透明の webm）」→操作の説明3つ（CLICK & DRAG TO EXPLORE 360°／MOVE AROUND／CLICK ON HOTSPOTS、絵は各 1.1MB の webp）→ LET'S GO。中は撮影セットの 360° 写真（KTX2）。PC は low_ 3.1〜3.4MB を先に出し、続けて本番 41,208〜46,347KB を取る（LET'S GO を押す前に計 72〜74MB）。SP は mobile_ 3.1〜3.3MB だけ（計 24.9MB）。
- **輪（ホットスポット）とカード**：`button` 72×72、名前なし（emerald-city 5個・glinda 3個）。押すと `aspect-ratio:1048/540`（PC 1016×524）のカード：左に写真か動画（`rotate(.5deg)`）、右に紙（#fff→#eddbbc のグラデ＋質感 png）、題は desire-pro 大文字・字間 .1em・#272e16、本文 16px・行間 150%・最大幅 300px。中身はセットの寸法（幅・奥行き・高さ）と撮り方の1文。CLOSE は右上へ −1.25rem はみ出す。
- **人物**：人物のページ・一覧・声の表記は無い。部屋の名前（Glinda's Quarters・Elphaba's Retreat）と、/synopsis の本文のかっこ書き（人物名（俳優名））、JSON-LD の actor 8人で出る。
- **ナビ**：ヘッダーは丸いボタン（高さ 48px、975px 以下 40px・角 30px・jost 14px 500）。左 The Wizard・Watch at Home、中央ロゴ、右 パスポート 60×60・音・OPEN 126×48。OPEN で全画面のメニュー18項目（Explore Oz 8＋Tickets 他10）＋言語28地域＋法務5。項目は大 36px（4段で 18px まで）・字間 .16em、ホバーで .1em に詰める .3s `cubic-bezier(.33,1,.68,1)`。パスポート・音・地図の操作7つ・SP の丸4つに名前が無い。
- **動画（/videos）**：14本を自前の mp4 で横送り（「1 / 14」、PREV・NEXT 96×96）。`preload="metadata"`・poster なしで、1920px のサムネイル16枚（6,485KB）と背景 png 5,637KB を最初に取る。再生のひし形は `div`、押すと音つきで再生。題名は画面に無く、サムネイルの alt も空。YouTube の埋め込みは無い。
- **おうちで観る（/tickets/watch-at-home/）**：左にポスター、右に All・Digital・Disc（64〜84×51、選択はクラスだけ・URL 変わらず・outline:none）。Digital 8店・Disc 4店を白いタイル（約245×120）のロゴで3列、空きは灰色のダミー2つ。タイルは `div`（tabIndex −1）で Tab が届かず、押すと店の作品ページを新しいタブで開く。値段・版（4K UHD／Blu-ray／DVD）の違いは無い。
- **表記**：年齢区分（MPA）は歩いたページに無く、buy のフッターに Filmratings.com・MPA.ORG のリンクだけ。権利は Universal と POWSTER の2つ（buy の権利表記は #ffffff4d で 2.48:1）。hreflang は0件。日本語のブラウザで / を開くと /ja に移って 500 の画面、/ja の販売の文は「３月６日(金)より、全国ロードショー！」のまま。buy の JSON-LD の director が「$DIRECTOR_NAMES」。
- **配色**：暗い緑の4段（#1a1e10・#222815・#2c3417・#323a21）＋地 #0f1311、文字 #eddbbc（27回）、金 #e6b94f、カードの文字 #272e16（紙の上で 10.39:1）。
- **文字**：見出し desire-pro（Adobe Fonts）、本文 Jost 400・500 と斜体 Instrument Serif（自前の woff2）。`text-box-trim:trim-both`。
- **動き**：CSS のイージングは linear 43・`(.33,1,.68,1)` 19・ease-out 11。keyframes は shake（±5deg・1.8s 無限、パスポート）と light。`prefers-reduced-motion` は CSS に1件（ボタンの transition だけ）、JS に0件。
- **重さ**（解析タグ除く）：measure.js（5秒＋スクロール）world PC 34.55／SP 31.42MB、chara 35.90／29.77MB、videos 29.82／29.45MB、buy 3.59／3.06MB。押す前後まで待つと top en-US PC 35.9／SP 25.3MB、world PC 74.4MB、chara PC 72.3／SP 24.9MB。

## 真似る候補（見本1つ。2つ目で確かめたら「真似る型」へ上げる）
- 入口で音の有無を選ばせ、音なしを文字のボタンにする（Wicked：72px の丸＋192×48）。音のファイルは「音あり」を押してから取る。
- 世界観は場所の単位で URL を切り、どの場所にも同じ入口（ようこそ＋地名＋操作の説明3つ＋始める）を置く（Wicked：5部屋）。
- 人物を場所に結びつける（Wicked：Glinda's Quarters）。作るときは人物の詳細と場所を同じ URL にして、前後の移動と声の表記を足す。
- 重い絵は低い解像度を先に出す2段にし、SP は本番を取らない（Wicked：low_ 3.1〜3.4MB → 本番 41〜46MB、SP は mobile_ だけ）。
- 輪のカードは「写真1枚＋紙の上の題と、数字の入った制作の事実1文」（Wicked：1048:540・本文 16px・最大幅 300px）。
- ロゴの下に「いま何ができるか」を1行で出し、公開前・上映中・発売後で替える（Wicked：「ON SALE NOW. DIGITAL, 4K UHD & BLU-RAY.」12px、日本版は公開日の告知のまま残っていた）。

## 真似る型
（見本が2つ以上そろったら、共通する型をここにまとめる。）

## 反面教師
- 音なしを選んでも BGM 8,762KB を取る（Wicked）。
- PC で部屋に入る前に本番の 360° 写真 41〜46MB を取り始める（Wicked：world 74.4MB）。
- 輪・音・パスポート・地図の操作に名前が無い（Wicked）。
- おうちで観るが店のロゴの格子だけで、値段・版・年齢区分が無く、店のタイルに Tab が届かない（Wicked：12店とも div）。
- 動画の題名が無く、再生が div（Wicked：14本）。
- 言語の振り分けに失敗すると 500 の画面（Wicked：ja-JP で /）。
