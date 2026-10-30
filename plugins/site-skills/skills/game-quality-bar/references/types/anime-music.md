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

### TVアニメ『SAKAMOTO DAYS』公式（https://sakamotodays.jp/ ・2026-10-30 解剖、第2期 2027年1月放送の前。歩いた5ページ：/・/character/（と ?chara=taro）・/news/・/onair/・/movie/、比べるために第1期の /1st/onair/season1-part2/）
- **枠**：jQuery 4・GSAP 3（ScrollTrigger）・Swiper 8。書体は Adobe Fonts（urw-din-condensed と source-han-sans-japanese）。大きさは `min(calc(N/1200*100vw), N*1.6px)`、768px 以下は `N/750*100vw`。世界観のページは無く、トップの #introduction。
- **最初の画面（top）**：ロゴ 480×118（80,80）、左にビジュアルのサムネ3つ 48×48（`javascript:` の a・alt なし）、右に縦書きのビジュアル名 134.4px（替わると .45s ease・.15s 遅れ）、Swiper の10秒送り。日付は「2027.01.ON AIR」の画像 1402×273（y=1104 で PC の最初の画面の外）。ローディング（カタカナ7字）は window の load の後 2.2s、終わるのは PC 7.39s・SP 7.96s。
- **章の題**：英字 112px（SP 69.68px）＋和文を1字ずつ赤 #c30a14 の札（24px 700、白で 6.22）。メニューと見出しに PAGE 01〜10。見出しの番号は hgroup の data-title から出すので、CHARACTER 04→05・ON AIR 07→06 にずれていた。
- **人物**：23人を5陣営（黄 #ffd200・赤 #c30a14・白・水色 #0ac2c2・灰 #888）。一覧は黒地 230×192 の6列、名前は英字の縦書き 40.8px を陣営の色、ホバーで陣営の色の面が background-size 0→100% .4s。詳細は1人1URL（`?chara=taro`、題も人名、ページを読み直して 3.0〜3.2s・+2.5〜3.1MB）。番号 200.4px・英字名 134.4px・和名 h2 76.8px・CV・本文 19.2px（黄のマーカー）。差分は VISUAL CHANGE（taro の3枚、先に取るので押しても通信0）。前後のボタンは無く、下に23人の列。
- **予告**：/movie/ は3本、題名は文字、押すまで iframe なし、押すとモーダルで autoplay・音つき。top は読み込み 4.0s（SP 3.8s）で YouTube の iframe_api と埋め込みを取り、MOVIE の区画が見えると無音で流す（controls:0・disablekb:1、PC 4,761KB・SP 5,701KB）。
- **放送・配信（/onair/）**：第2期は「第2期2027年1月放送決定！ 第1期はNetflixほかにて好評配信中！」の1文だけで、配信へのリンク0件。第1期の ON AIR は TV 20局（局ごとに開始日・曜日・時刻）と配信29件（Netflix の1話先行配信を先頭の別の列、残りを五十音順の文字リンク、外へのリンク24）。
- **ニュース**：WordPress の API を ajax で取って組む（HTML に一覧なし）。25件・10件ずつ・`?page=N` の本物のリンク。種類の絞り込みなし。失敗は console だけ。
- **表記**：権利表記はフッターに1つ。言語 JPN／ENG（/en/）、hreflang 0、JSON-LD 0。「LANGAGE」の綴り。
- **ナビ・操作**：メニューボタン 96×96（SP 49.9）に名前・aria-expanded なし、Esc で閉じない。開くと21通りから乱数の人物の絵（1440×900 で項目に重なる）。全体に `*{outline:none}`。PC だけ 100px の追いかける輪（left・top を毎フレーム）。
- **配色**：#000 78回・#fff 68回・赤の変数 23・黄の変数 20。地は黄の質感の画像（jpg 386KB と webp 289KB を両方取る）。
- **文字**：SP の本文 12.48px（24/750×390）、人物の本文も 12.48px、MV の小見出し 6.24px。PC の本文 16px・行間 1.8・字間 .05em。
- **動き**：ease 105・linear 33。背景の英字の帯 29.42s、回る輪 16s。`prefers-reduced-motion` は CSS・JS とも0件（reduce でもビジュアルが送られ、輪が付いてくる）。
- **重さ**（解析タグ除く）：top PC 13.61／SP 13.59MB（youtube.com 4,761KB・use.typekit.net 4,495KB・自前 3,838KB）、character 4.32、news 4.07、onair 3.58、movie 4.11MB。どのページもフォント約 2MB と、開いていないメニューの人物 289KB を取る。

## 真似る候補（見本1つ。2つ目で確かめたら「真似る型」へ上げる）
- 入口で音の有無を選ばせ、音なしを文字のボタンにする（Wicked：72px の丸＋192×48）。音のファイルは「音あり」を押してから取る。
- 世界観は場所の単位で URL を切り、どの場所にも同じ入口（ようこそ＋地名＋操作の説明3つ＋始める）を置く（Wicked：5部屋）。
- 人物を場所に結びつける（Wicked：Glinda's Quarters）。作るときは人物の詳細と場所を同じ URL にして、前後の移動と声の表記を足す。
- 重い絵は低い解像度を先に出す2段にし、SP は本番を取らない（Wicked：low_ 3.1〜3.4MB → 本番 41〜46MB、SP は mobile_ だけ）。
- 輪のカードは「写真1枚＋紙の上の題と、数字の入った制作の事実1文」（Wicked：1048:540・本文 16px・最大幅 300px）。
- ロゴの下に「いま何ができるか」を1行で出し、公開前・上映中・発売後で替える（Wicked：「ON SALE NOW. DIGITAL, 4K UHD & BLU-RAY.」12px、日本版は公開日の告知のまま残っていた）。
- 和文の小見出しを1字ずつ地色の札に入れ、巨大な英字の章題に重ねる（SAKAMOTO DAYS：24px 700 白／#c30a14 で 6.22、英字 112px）。札の並びに aria-label で元の語を付ける。
- 章に番号（PAGE 01〜10）を振り、メニューと見出しに同じ番号を1つの表から出す（SAKAMOTO DAYS は2ページでずれた）。
- 人物の陣営ごとに色を1つ、一覧の名前とホバーの面に使う（SAKAMOTO DAYS：5陣営、background-size 0→100% .4s）。
- 同じ人物の差分を「VISUAL CHANGE 1/3」で替え、差分は詳細を開いたときに先に取る（SAKAMOTO DAYS：押しても通信0）。

## 真似る型（Wicked と SAKAMOTO DAYS の2つで確かめた）
- 「いま何ができるか」をロゴの近くに日付で出し、時期で替える（Wicked：「ON SALE NOW. DIGITAL, 4K UHD & BLU-RAY.」12px、SAKAMOTO DAYS：「2027.01.ON AIR」1402×273）。どちらも弱点があった（Wicked は 12px、SAKAMOTO DAYS は画像で最初の画面の外）ので、文字で組み、最初の画面に入る大きさで、日・曜日・時刻まで書く。
- 予告の一覧は押すまで埋め込みを作らず、押すとモーダルか同じ場所で音つき再生（SAKAMOTO DAYS /movie/：3本・題名つき、Wicked /videos：自前の mp4 14本だが題名なし）。題名と長さを文字で出す。トップでも同じにする（SAKAMOTO DAYS の top は開くだけで YouTube 4,761KB）。
- 見る・買う先（配信・店）は「版や先行の別」を先に分け、店ごとに文字のリンクで並べる。2つとも第2期・発売後のページは弱く（Wicked：ロゴの格子で値段・版なし、SAKAMOTO DAYS：第2期 ON AIR はリンク0件）、手本は SAKAMOTO DAYS 第1期の ON AIR（先行配信 Netflix を先頭、残り28件を五十音順、TV 20局を開始日・曜日・時刻つき）。
- 人物はページの単位で URL を持つ（Wicked：人物の部屋 /tour/glindas-quarters、SAKAMOTO DAYS：`?chara=taro`）。前後の移動はどちらにも無いので足す。

## 反面教師
- 和文の本文を画面比で縮め、SP で 16px を割る（SAKAMOTO DAYS：750px 基準で 12.48px）。
- 見出しの番号とメニューの番号を別の場所から出してずれる（SAKAMOTO DAYS：CHARACTER 04／05、ON AIR 07／06）。
- 第2期の ON AIR に配信のリンクが無く、第1期のページへの案内も無い（SAKAMOTO DAYS）。
- トップを開くだけで YouTube を取り無音で流す、止める手段なし（SAKAMOTO DAYS：controls:0）。
- 音なしを選んでも BGM 8,762KB を取る（Wicked）。
- PC で部屋に入る前に本番の 360° 写真 41〜46MB を取り始める（Wicked：world 74.4MB）。
- 輪・音・パスポート・地図の操作に名前が無い（Wicked）。
- おうちで観るが店のロゴの格子だけで、値段・版・年齢区分が無く、店のタイルに Tab が届かない（Wicked：12店とも div）。
- 動画の題名が無く、再生が div（Wicked：14本）。
- 言語の振り分けに失敗すると 500 の画面（Wicked：ja-JP で /）。
