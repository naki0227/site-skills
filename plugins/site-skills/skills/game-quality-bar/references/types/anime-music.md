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

### アニメ『【推しの子】』公式（https://ichigoproduction.com/ ・2026-11-03 解剖、第3期 2026年1月放送の完結後・第4期の告知中。歩いた5ページ：/・/Season3/story/・/Season3/chara/・/Season3/news/・/streaming/、ほかに /Season3/onair/・/Season3/bd/・/talent/・/news/）
- **枠**：CMS「Coreblo」＋jQuery 3.6・Swiper（`swiper@12` を版を固定せず jsdelivr から）・Magnific Popup。期ごとに `/Season1/`〜`/Season4/` の別の木、ポータル（/）は5項目（NEWS・MOVIE・STREAMING・TALENT・BOOKS）。
- **作中の組織のページ**：`/talent/` は作中の芸能事務所の所属タレント6人（顔・キャッチ1行・手書き風の英字名 Hachi Maru Pop 40px を人ごとの色）と「お問い合わせは法人様のみ」。作中のイベント名「苺プロダクション☆ファン感謝祭2026」が Blu-ray の特典（優先販売申込券）とニュースにそのまま出る。英字名の色は白地で Aqua #49c5eb 2.01・Ruby #fb528d 3.14。
- **最初の画面（top）**：左の固定の列（338px、ロゴ 280×68・ナビ Urbanist 900 30px）と、期のビジュアル 546×772 を2枚（768px 未満は1枚 390×551）。Swiper speed 1000・loop、autoplay 4,000 を作ってすぐ stop、矢印・ドットなし。8枚とも `<a><img alt=""></a>` で「Season 3」の文字はリンクの外（リンクの名前が空）。放送日は最初の画面に無い。
- **動画**：top の MOVIE は読み込み時に `iframe_api` → `autoplay:1・controls:0・loop:1` を作り、PC は `setVolume(0)` で流し続ける。上位10のうち YouTube 6件で 4,143KB。押すと Magnific の音つきモーダル（149ms、Esc で閉じる）。各話のページも本文に YouTube の iframe をそのまま置く。
- **世界観**：`/Season3/story/` は INTRO＋第二十五話〜第三十五話を1話1URL（`25.html`〜`35.html`）、メニューの STORY は最新話 `35.html` へ。題 40px・本文 PC 25px／SP 11.7px（html 9px の rem）。
- **人物**：6人を1人1URL（`/Season3/chara/`＝アクア、`ruby.html` ほか）。右に顔 70×70 の列（alt 空・名前なし、前後の矢印なし）。和名 64px（頭の1字だけ #e3007f）・CV 24px・紹介文 15.2px 300（SP 12.825px）。6人ともページの題が同じで、人名は p（h1 は CHARACTER）。切り替えは 2,407〜2,528ms（うち 200ms は全リンクに掛かる幕 `#shutter`）、+100〜296KB。立ち絵 1s `cubic-bezier(.25,1,.5,1)` で滑り込む。SP は名前が y859 で最初の画面の外。
- **ナビ**：期のサイトは右上の丸 72×72（SP 50）`#e2007e`、10項目を2列（Century Gothic 指定・読み込まない）。丸に名前・aria-expanded なし、Esc で閉じない。閉じたメニューは opacity 0 だけで、ロゴ・10項目・共有3つの14か所に Tab が止まる（枠は消していない）。
- **見る（/streaming/）**：3期ぶん 67個の同じピンクのボタン（340×73、文字 20px、別窓のしるし、本物のリンク）。第３期 見放題18・都度課金5、第２期 17・6、第１期 16・5。多くがサービスのトップへ（作品ページは3つだけ）、日付・最速の別なし。一方 `/Season3/onair/` は TV 36局を開始日・曜日・時刻つき、「ABEMA 地上波同時・単独最速 1月14日(水)より毎週水曜 23:00～」を先頭に別扱い、残りを見放題18・都度課金5、注記1行。
- **買う（/Season3/bd/）**：巻ごとに発売日・品番・税込の値段（BD 15,400円・DVD 13,200円）・収録話・初回生産特典・毎回特典を文字で。店へのリンク0件。
- **ニュース**：ポータル /news/（最新 2026.11.02）と /Season3/news/（20件×5ページ、最新 2026/08/07）の2系統。日付の札は白／#ff00a0 で 3.65。種類の絞り込みなし。
- **配色**：白・黒とピンク。ピンクがデザインの CSS に8通り（#e3007f 34・#e2007e 11・#ff008e 5・#ff008f 4・#ff00a0 4・#e1007c 3・#ff0a93 2・#ff008c 2）。
- **動き**：星の地 `bg-anim-02` 10s linear（301px／−305px、全画面 fixed）と `bg-anim-01` 3s（75px、NEWS の面）が無限。reduce は CSS・JS・HTML とも0件。
- **表記**：権利はフッター1行（ポータル 10px）。言語・hreflang・JSON-LD なし。top は h1 なし。スクリプトのエラー2種（`twTimeline is not defined` ほか）。
- **重さ**（解析タグ除く）：top PC 8.24／SP 8.27MB、world 1.76、chara 2.33、news 2.19、buy 3.92MB（PC では隠れた期のビジュアル4枚 2,051KB を取る）。どのページも Google Fonts の CSS 224KB・utility.css 191KB・第3期は背景の写真 406KB。

### 攻殻機動隊グローバルサイト（https://theghostintheshell.jp/ ・2026-11-07 解剖、シリーズ全体のポータル。2026年7月放送の TV アニメの特設は別ドメイン theghostintheshell-anime.jp。歩いた5ページ：/・/introduction・/series/theghostintheshell・/news・/videogram、ほかに /streaming。Web Design Clip 掲載）
- **枠**：Next.js（_next/static・_next/data の JSON）＋Swiper。画像は WordPress の CMS（cms.theghostintheshell.jp）と CloudFront。書体は Adobe Fonts（urw-din・roc-grotesk-wide）と Google Fonts（Inter・Noto Sans JP・Libre Barcode 128）。
- **最初の画面（top）**：士郎正宗の絵を20枚の層（背景・人物・光の点5・煙4・題の文字の PNG 3・「WORLD of SHIROW MASAMUNE」の PNG 3、計 2,618KB）に分けて重ねる。スクロール 400px で背景 160px（0.4倍）・題 50px（0.125倍）、マウスでも動く。放送日・ボタンは無く、h1 は左上のロゴ（89×95、alt「攻殻機動隊 GHOST IN THE SHELL」）。PC も SP も両方の版の層を取る。
- **オープニング**：初回だけ mp4 7.893s（muted、Content-Length 16,229,408B）を全面に流し、2.0〜9.0s は body overflow hidden。Cookie `firstVisit=visited` で2回目は出さない。飛ばすボタンなし、reduce でも流れる。
- **動画**：top の MOVIE GALLERY は左に YouTube 640×362、右に PV 5本（日付・種類・題の文字）。行は `li`（tabIndex −1）で、押すと src を `autoplay=1` に替える。PC は読み込み 2.0s で1本、SP は5本とも iframe にする（YouTube 47件・2,373KB）。
- **人物**：一覧ページは無く、作品のページの「// CHARACTER」に大きな絵（1273×716 を 631px）・名前 32px・紹介文 16px/31px、下にサムネ 121×121 を6列×2段で11人。Swiper（loop・speed 300ms・keyboard／a11y なし）。サムネは `li`（tabIndex −1）で Tab が届かず、選ぶと暗くするだけ。URL は変わらない。声優は STAFF_CAST に役名と2列で。
- **ナビ**：右上の斜線3本（PC 125×86・SP 70×58）が横線3本になり、ヘッダーの下に14項目＋SNS が横一列で下りる（height .6s・遅れ .3s）。開閉は href なしの `a`（名前なし）で Tab が届かず、閉じたメニューの14項目には Tab が止まる。Esc で閉じない。項目のホバーは赤 #f00e0e99・青 #4413e366 の影を .69s で揺らす。
- **見る・買う**：/streaming は10作×4〜5社の文字のリンク47本（Netflix・バンダイチャンネル・Hulu・dアニメストア・Prime Video）、/videogram は Blu-ray 9点で、店のリンクは9本とも文字「SHOP」（品番つき URL・新しいタブ）。値段・発売日は2ページとも0件。2026年7月放送の TV アニメの行が2ページとも無い（ニュースには Blu-ray BOX BCXA-2098 のお知らせ）。
- **ニュース**：Series 8・Categories 9 の17個の radio（label for つきの本物の input）。選ぶと 25→20枚に絞るが URL は変わらない。ページ送りは `/news/page/2` の本物のリンク。カード 270×265 は右下を 45.986px で切った SVG の線3本の枠で、ホバーで stroke-dashoffset 299→0、角の 8×8 の四角が 4.5s（ホバーで .9s）で点滅しながら落ちる。日付 10px #646464（3.19:1）、題 12px/21px、`time` 0件。
- **配色**：地 #111・文字 #fff（68回）、差し色 #32f5c8（7回）は M.M.A. の記事と作品のページの見出しだけ。色は絵に任せる。
- **文字**：章の題は roc-grotesk-wide 32px 400＋「_」（NEWS_）、シリーズ名 62px 900。本文 urw-din→Noto Sans JP 16px/31px・字間 .64px、ニュースの題 12px。inspect：本文 12px・13px 未満 97%。
- **動き**：keyframes 175個（CSS Modules で同じ5つを複製）、linear 22・ease-out 2・cubic-bezier(.165,.84,.44,1) 2。光の点 2.4s（遅れ 0／.7／1／1.8／2s）、煙 5〜6s（不透明度 1→.8）。reduced-motion は CSS 7ファイルに0件、reduce でも animation 33個。
- **表記**：権利表記8行（12px）をフッターに。JP／EN の切り替え（11px、選んでいない方 #595959 で 2.7:1）。帯の画像の alt が「/」。
- **重さ**（measure.js、解析タグ除く）：top PC 58.95／SP 72.89MB（mp4 12,786KB、SP は JS 16.6MB）、world 3.02、chara 16.89、news 27.20（PNG 20,569KB、Lee.png 4,842KB）、buy 7.92MB。CMS の絵を原寸 PNG のまま background-image に（1000×1414 の 2,683KB を 256×144 のカードに）。

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
- キービジュアルを層の画像に分け、背景 0.4倍・題 0.125倍の視差と、光の点（2.4s・遅れをずらす）・煙（5〜6s）を重ねる。動画1本より軽い（攻殻機動隊：20枚 2,618KB）。reduce で止め、片方の版だけ取る。
- オープニングは初回だけ、Cookie で覚える（攻殻機動隊：7.9s・`firstVisit`）。真似るときは飛ばすボタンと reduce の分岐を足す。
- ニュースの絞り込みを label つきの radio で作り、Tab と矢印で選べるようにする（攻殻機動隊：17個）。選んだ値は URL に残す。
- 配信を作品×社の文字のリンクで（攻殻機動隊 /streaming：10作×4〜5社・47本）。表にすると欠けている社が分かる。

## 真似る型（Wicked と SAKAMOTO DAYS の2つで確かめた）
- 「いま何ができるか」をロゴの近くに日付で出し、時期で替える（Wicked：「ON SALE NOW. DIGITAL, 4K UHD & BLU-RAY.」12px、SAKAMOTO DAYS：「2027.01.ON AIR」1402×273）。どちらも弱点があった（Wicked は 12px、SAKAMOTO DAYS は画像で最初の画面の外）ので、文字で組み、最初の画面に入る大きさで、日・曜日・時刻まで書く。
- 予告の一覧は押すまで埋め込みを作らず、押すとモーダルか同じ場所で音つき再生（SAKAMOTO DAYS /movie/：3本・題名つき、Wicked /videos：自前の mp4 14本だが題名なし）。題名と長さを文字で出す。トップでも同じにする（SAKAMOTO DAYS の top は開くだけで YouTube 4,761KB）。
- 見る・買う先（配信・店）は「版や先行の別」を先に分け、店ごとに文字のリンクで並べる。2つとも第2期・発売後のページは弱く（Wicked：ロゴの格子で値段・版なし、SAKAMOTO DAYS：第2期 ON AIR はリンク0件）、手本は SAKAMOTO DAYS 第1期の ON AIR（先行配信 Netflix を先頭、残り28件を五十音順、TV 20局を開始日・曜日・時刻つき）。
- 人物はページの単位で URL を持つ（Wicked：人物の部屋 /tour/glindas-quarters、SAKAMOTO DAYS：`?chara=taro`）。前後の移動はどちらにも無いので足す。

- （【推しの子】で3つ目の確かめ）「見る先は最速・先行を先に分け、残りを文字で」は `/Season3/onair/` が手本（最速1つ＋見放題18・都度課金5、TV 36局を開始日・曜日・時刻つき）。同じサイトのポータル `/streaming/` は日付も最速の別も無いボタン67個で、同じ期でもページで書き方が割れた。作るときは1つの表から両方に出す。
- （【推しの子】で3つ目）人物は1人1URL（`ruby.html`）。前後の移動は3サイトとも無く、【推しの子】は顔の列 70×70 で全員へ1手。顔に名前を付け、題を人名にする。
- （【推しの子】で3つ目、反対の例）予告を押すまで埋め込まないのは SAKAMOTO DAYS の /movie/ だけで、【推しの子】は top も各話も読み込み時に埋め込む。
- 作中の組織（事務所・局・学校）のサイトという体裁のページを1枚持つ（【推しの子】/talent/：所属6人・法人向けの問い合わせ）。見本1つ。
- 期ごとに URL の木を分け、ポータルで期を並べる（【推しの子】/Season1/〜/Season4/）。見本1つ。
- （攻殻機動隊で4つ目、反対の例）人物を1ページの中の切り替えだけにすると、1人を URL で指せない（攻殻機動隊：11人とも `/series/theghostintheshell` のまま、サムネは li で Tab も届かない）。
- （攻殻機動隊で4つ目、反対の例）予告の一覧を読み込み時に埋め込むサイトがまた1つ（攻殻機動隊：PC 1本・SP 5本）。押すまで作らないのは SAKAMOTO DAYS の /movie/ だけ。
- （攻殻機動隊で4つ目）見る・買う先を文字のリンクで並べるのは手本どおり（47本）だが、値段・発売日・最新作の行が無い。

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
- トップを開くだけで YouTube（4,143KB 以上）を取り、無音で流し続ける（【推しの子】）。
- 全リンクに 200ms の幕を掛け、人物を替えるのに 2.4〜2.5秒（【推しの子】）。
- 配信のボタンの多くがサービスのトップへ行き、日付・最速の別が無い。Blu-ray のページに店のリンクが0件（【推しの子】）。
- 同じピンクが CSS に8通りの値（【推しの子】）。
- 買う・観るのページが新作に追いついていない（攻殻機動隊：2026年7月放送の TV アニメが /videogram・/streaming に0行）。
- 人物のサムネ・動画の一覧・メニューの開閉が li・href なしの a で、キーボードで1つも選べない（攻殻機動隊）。
- オープニングに飛ばすボタンが無く、reduce でも流す（攻殻機動隊：7.9s）。
- 店のリンクの名前が9本とも「SHOP」（攻殻機動隊 /videogram）。
