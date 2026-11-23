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

### TVアニメ『ダンダダン』公式（https://anime-dandadan.com/ ・2026-11-14 解剖、第1期・第2期の配信中、第3期 2027年放送決定の告知中。歩いた5ページ：/・/story/（第24話）・/character/・/news/・購入はナビの BD&DVD から https://www.aniplex.co.jp/dandadan/2nd.html）
- **枠**：WordPress＋jQuery＋slick（bundle.js 146KB）、style.css 245KB。aniplex は jQuery 3.6・GSAP・pixi.js 605KB。書体は DotGothic16・Dela Gothic One・Inter（Google Fonts）と Bonny・Striper（Fontshare の自前 woff2）の5種。html 62.5%、768px 以下は 428px 基準の vw。
- **最初の画面（top）**：PC は左の列（x40・幅336）にロゴ h1 432×319 → 「第3期 2027年放送決定」の SVG 336×67 → VISUAL CHANGE の button 8つ 166×54（2列、img alt="" で名前なし）→ PV のサムネ 336×194、右に絵 1024×1448。左の列は translateY(10%)→0・.3s・遅れ 1.5s。SP は絵 390×606 が先で、ロゴは絵の中。ローディング（NOW LOADING の1字ずつ Bonny と Striper を 1.4s で入れ替え、ol_001.mp4 3,050KB）が消えるまで PC 9.0s・SP 8.3s。
- **動画**：PV は `data-youtubeid` のサムネで、押すまで YouTube 0件、押すとモーダルに embed（SP +1,024KB）。モーダルは Esc で閉じない。全ページに `ol_002.mp4` 2,914KB を fixed 全面・mix-blend soft-light・contrast(300%)・opacity .2/.75 で重ねる。
- **人物（/character/）**：17人。顔の button（上2人 102×78、15人 64×64 の3列、alt に名前）→ slick の fade 400ms、押して 157ms で current。URL は /character/ のまま。立ち絵の左右に縦書きの名札（Dela 42px、黒／#ceff00 で 17.93:1、top:20%）と CV の札。プロフィール DotGothic16 24px。CAST COMMENT（270×58 の #ceff00）は Q1・Q2 のモーダルで role なし・Esc で閉じない。ボイスなし。
- **各話（/story/）**：1話1URL（/story/24-2/ など24本）。話数の列 24〜01 は Bonny 40px（68×40）、いまの話は #ceff00 で aria-current なし。場面写真 1920×1080 の JPEG（1,143〜1,515KB）を 1030×579 で出す。
- **配信（top の #TopOnair）**：払い方で3段（無料配信4・見放題20・各話購入4＝28本）、DotGothic16 14px（SP 10.02px）の点線の枠 235×43。16本はサービスのトップへ。開始日・最速・TV の局は無く、見出しは「第1期、第2期各配信サイトにて全話配信中」の1文。
- **円盤（aniplex 2nd.html）**：Blu-ray 8,800円・DVD 7,700円（税込）・品番 ANZX-16939〜 を文字で、巻5〜8の発売日（2025年10月8日〜2026年1月7日、水）。期は 1st.html／2nd.html で別 URL、巻のボタンで #package7 へ移り URL に残る。巻ごとの店は「アニプレックス オンライン」1つ、店別の特典10店のリンクは5巻の商品だけ。読み込みに擬似の端末の文「異星人からのアクセスを検知…」。
- **ニュース**：12件・3列のカード 279×407、頭に日付の帯（DotGothic16 15px #ceff00／#0d0d0f 16.58:1）。ページ送り 1・2・3（WordPress、aria-current なし）。絞り込みなし。最新 2026.08.19 で約3か月止まる。
- **ナビ**：PC は fixed の帯に13項目（Inter 15px 900）、いまのページは #ceff00 の文字だけ。SP は右下 64×64 の三本線。a は outline:none、SP は閉じたメニューに Tab が届く。
- **表記**：フッターに「©龍幸伸／集英社・ダンダダン製作委員会」。JSON-LD 0件、hreflang 0件（/en/ はある）。
- **配色**：#ceff00（56回）・#fff（26）・#000（24）・#0d0d0f（14）・#730000（13）・#767681（8、4.33:1）・#e60013（7）・#0ff（7）。
- **動き**：cubic-bezier(.455,.03,.515,.955) 38回、.3s 41回・.2s 29回。ホバーの shake（±2deg・.1s）。reduce は0件。
- **重さ**（measure.js）：top PC 14.95／SP 13.98MB、STORY 13.80／14.06MB、CHARACTER 7.47／7.93MB、NEWS 9.48／9.74MB、aniplex 22.02／21.97MB（JPEG 20,143KB）。inspect.js（top）FAIL 3 / WARN 13。

### TVアニメ「チ。 ―地球の運動について―」公式（https://anime-chi.jp/ ・2026-11-19 解剖、全25話の放送・Blu-ray BOX 発売後。歩いた5ページ：/・/story/・/story/detail.php?id=1・/news/・/bd/。人物のページは無く、top の #character のモーダル）
- **枠**：自前の webpack（ページ名で `./top/main.js` など8つの chunk を読み分け）＋jQuery・GSAP（ScrollTrigger・ScrollTo）・Lenis・lottie。vendors.js 1,227KB、style.css 337KB。書体は Google Fonts の Shippori Mincho（描いた字の72%）と EB Garamond（28%）。媒体の切り替えは 820px の1か所、SP の字は 3.2vw 系。
- **形をそろえる**：「軌道の点が付いた円」を Menu（button 130×130・SP 62×62、外の円と点）、章題の右肩の番号の弧、トレーラーの円窓、CV の青い弧、BD の発売日の丸い札、Page Top に使い回す。ヘッダーの帯は無く、ナビは右上の丸だけ（全面のメニュー、EB Garamond 32px・番号つき2列・11項目）。
- **最初の画面（top）**：初回は白地にロゴの線を描く mp4（1920×1080・5.0s・530KB）→ 星の軌跡の絵 kv_layer1（621KB）が blur(100px)・scale 1.4 から 2s、縦書き5行の惹句（画像・alt あり）。PC はそのあとロゴ h1 の位置（y 823）まで scrollTo 1.4s。放送日・配信は最初の画面に無い。2回目（sessionStorage）とハッシュ付きの URL はオープニングを飛ばす。
- **オープニングの競争**：読み込みの部品は img 101枚がそろう（1枚2秒で打ち切り）のを待って**から** `#op` に ended の聞き手を付ける。測った回は ended 7.8s・そろうのは 8.3〜8.8s で、PC・SP とも 45秒以上白いまま、wheel・touchmove も preventDefault のまま（inspect.js も明るさ 255・何も無い面 100% を測った）。
- **動画**：01 Movie は目盛りの輪の中の円窓（747×747 に `clip-path:circle(30.5%)`）で YouTube を `mute=1&autoplay=1&loop=1&controls=0` で読み込み時から流す（押す前 4,662KB）。play の button 183×183 で 996px のモーダルにもう1つ埋め込む（+1,254KB）。章題「M o v i e」は1字ずつの画像を軌道の上に。OTHERS 3本は題名つき。
- **人物**：8人を3つの時代の帯（3・3・2人、紺の帯は立ち絵の腰から下）に。名前は縦書き Shippori Mincho 600・70px（SP 24.44px）。一覧は div 338×565 で Tab が届かない。押すと全面のモーダル：左半分は白（name・名前 42px・場面写真・CV #2471c0 20px）、右半分は紺の星空（立ち絵・About 16px）、下に丸い顔8つと Prev／Next。URL は変わらず、Esc で閉じない。ボイスなし。
- **各話**：1話1URL（`/story/detail.php?id=1〜25`）、第◯話の札・題 h2・場面写真・あらすじ、Back to list と Prev／Next（端は片方）。title は5ページ同じ。第1話は同じ場面写真を `?ver=1.1025` と `?ver=1.0` で2回取る。
- **配信（top の 06 On air）**：「01 見放題」15件・「02 都度課金」6件（段の見出し 21px 700 #2471c0・丸い番号）。21件のうち作品のページは7件、短縮 URL 1、トップなど13。開始日・最速の別なし。放送は画像1枚（alt に局・曜日・時刻・初回の日付を全部）。
- **円盤（/bd/）**：Blu-ray BOX 1点。発売日の丸い札 30px、品番 ZMAZ-18481・価格（税込）￥38,500・収録を黒い札のラベル＋文字。店別特典の3店のボタンは3つとも「予約／購入はこちら」。タブ2つは同じページ内（`?id=` でも同じ HTML）。top の 09 Blu-ray のサムネは発売14か月後も「Now Printing」、OP・ED の CD も「Coming Soon」の灰色。
- **ニュース**：1ページ9件・10ページ、日付の札（EB Garamond 16px 700）＋題（18px・行間 2・4行で切る、SP 10.92px）。最新 2025.08.22。絞り込みなし。
- **表記**：権利表記はフッター1行。JSON-LD 0、hreflang 0、年齢区分なし（TV アニメ）。
- **配色**：#000（142）・#fff（125）・#ad9d9d 系（21、線だけ・2.6:1）・#2471c0（8、5.0:1）・#67717e（5、4.95:1）。紺の帯・メニュー・フッターは webp。
- **動き**：transition は background-color .3s ease（84）・transform .3s ease-out（63）・opacity .6s easeInOutQuart＋filter（18）。keyframes 82。視差5枚（y −30〜−200・scrub 3）、本文は1行ずつ span（PC と SP で改行を別に組む）。reduce 0件、reduce で開いても getAnimations 77。
- **重さ**（measure.js）：top PC 16.87／SP 16.79MB、/story/ 7.80、第1話 7.39、/news/ 6.84、/bd/ 7.40MB。フッターの飾りの字が動く WebP（640×300・150コマ×67ms・4,169KB）を親 opacity .15 で全ページに（下層の 53〜61%）。GTM 533KB も全ページ。inspect.js（top）PC FAIL 0 / WARN 4、SP FAIL 2（本文 11px）/ WARN 4。

### 「ぼっち・ざ・ろっく！」公式（https://bocchi.rocks/ ・2026-11-23 解剖。トップは2027年公開の映画「星のあしあと」の告知、同じドメインに TV（/tv/）・劇場総集編（/omnibus/）・作中のバンド「結束バンド」（/kessokuband/）。歩いた5ページ：/・/tv/introduction/・/tv/character/・/tv/news/・/kessokuband/discography/ と ?article_id=kessoku）
- **枠**：自前の webpack のビルド（GSAP・ScrollTrigger・SplitText、Swiper）。小さなサイトごとに CSS・JS・色・書体を総入れ替え：映画は紺 #090836・水色 #6898ff・黄、Outfit＋Noto Serif JP、TV は黒・白・黄 #fff000、Barlow Condensed、結束バンドは白地・黒、futura-pt（Adobe Fonts）・中央 500px の列。和文は3つとも Noto Sans JP＋YakuHanJP。行き来はフッターのバナー3つ。
- **最初の画面（top）**：PC は左に場面の絵（819px）、右 621px の列にロゴ（h1、601×259）・「2027年映画化決定」の SVG・News 3件、右下に sticky の丸「ムビチケ情報」168×168（SP 119）。SP は絵の下にロゴ。音は鳴らない。
- **ロゴを手で書く**：ロゴの webp に、筆の線21本（stroke 44・viewBox 2048×890）を SVG の mask として重ね、stroke-dashoffset で筆順どおりに出す（1画目 .4s sine.in、全体 2.5倍速）。区画の題も4〜14画を3倍速、書き始めに流れ星。初回は演出の間 body の overflow hidden で、止めが解けるのは PC 6,149ms・SP 8,341ms（DOMContentLoaded から）。sessionStorage `hoshinoashiato:intro-played` で2回目は止めない。reduce でも同じ。
- **予告**：背景に YouTube（mute・controls=0、tabindex −1）を HTML に置き、読み込み時に PC 24件・1,373KB を取る。再生のボタン 1440×307（名前なし）を押すと `<dialog>` の showModal で youtube-nocookie の autoplay を開き、フォーカスは閉じるへ、Esc で閉じて src を外し再生のボタンへ戻る。重ねている間とタブを隠した間は背景を pauseVideo。
- **ムビチケ**：Movie Ticket / 01 の dl に「発売開始 11月6日(金)～／価格 各1,600円(税込)／特典 イラストステッカー（2種）／販売場所 映画館／オンライン」を文字で、店はメイジャー・ムービーウォーカーの名前つきボタン（269×67、白 on #6898ff で 2.79:1）。#ticket が画面に入ると右下の丸を隠す。
- **世界観**：TV の /tv/introduction/ は引用符の中の4段落（強調は黄）だけ。映画のトップの INTRODUCTION は本文 18px 500 #6898ff（6.84:1）を SplitText で1字ずつ opacity .4s・stagger .6 from random。区画で body の data-background を top→introduction→light と替え、夜空から明けていく。
- **人物（TV）**：4人を1人1URL（hitori.html・nijika.html・ryo.html・ikuyo.html）、タブは本物のリンク。人の色の帯（#ff2291・#ffb400・#02d1e0・#ff4637）の左右に前後、端で一周。帯の名前は黒で 5.89〜11.78:1。前後の矢印は img alt="" で名前が空、題は4人とも同じ、名前は profile.svg の alt だけ。読み直しで 2,636ms。
- **ニュース（TV）**：303件（2021.12.18〜2026.11.16）の題と本文を `window.btrNews` の JSON 1,259,186B で HTML に入れ（HTML 1,444KB）、href の無い a 303個を押して右の枠を入れ替える。URL は変わらないが ?id= で開くとその記事。ALL・INFORMATION・GOODS は本物のリンク（GOODS 1件）、記事の categories は全部空。SP は 31,569px の1列。映画・結束バンドのニュースは1件1URL のリンク。
- **結束バンドの DISCOGRAPHY**：24作を ALBUM 4・SINGLE 10・LIVE 2・Blu-ray&DVD 2・OST/LP/etc. 6。絞り6つは本物のリンク（./?category=OPENING で4件）。1作1URL で版ごとに 品番・発売日・「4,070円（税抜価格3,700円）」・仕様・収録曲、店舗共通特典（15店の名前）と店舗別特典（店名のリンク＋特典の写真）。動画 ID の無い YouTube の埋め込みを読み込み時に作り、JS 3,391KB。
- **表記**：権利はフッター1行（10〜11px）。言語・hreflang・JSON-LD 0。TV の h1 は alt 空の img。TV の共有の文が全ページ劇場総集編のまま。
- **安全**：3サイトとも初期化の CSS に `a{outline:none} a:focus{outline:none} button{outline:none}`。reduce は取った CSS 8・JS 9ファイルで0件。コメントの重ね6つは div（Esc 不可・フォーカスは body）。CSS・JS の URL に開いた時刻（`?20261123081423`）を付け、画像は no-cache、webp を application/octet-stream で返す。
- **重さ**（measure.js）：top PC 14.35／SP 14.80MB（bg_stars.png 2,790KB・YouTube・Google Fonts の CSS 562＋460KB）、world 2.81／2.62、chara 2.83／2.70、news 4.69／4.55、buy 7.88／7.87MB。

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

- 最初の画面の左の列に「ロゴ→いまの告知→ビジュアルの切り替え→PV」を縦に積み、右に絵を大きく置く（ダンダダン：左 336px・右 1024px）。SAKAMOTO DAYS もビジュアルのサムネ3つ（48×48）を最初の画面に置く。2つとも切り替えのボタンに名前が無いので、真似るときは aria-label と aria-pressed を付ける。
- 配信を払い方（無料・見放題・各話購入）で段に分ける（ダンダダン：4・20・4本）。【推しの子】の /Season3/onair/ は最速1つ＋見放題18・都度課金5で同じ分け方。段ごとに開始日を書く。
- 作品の画面の質感を全ページに薄く重ねる（ダンダダン：ol_002.mp4 を soft-light・opacity .2）。真似るなら canvas の粒にして止める手段を付ける。見本1つ。
- 題材の道具の形を1つ決め、メニュー・章の番号・トレーラーの窓・声の札・発売日の札で同じ形を使い回す（チ。：軌道の点つきの円）。値（直径・線・点）を表にしてから作る。見本1つ。
- トレーラーを道具の枠の中の窓（円・扇形）に置き、押したら大きく（チ。：円窓 clip-path circle(30.5%)、押すと 996px）。窓は poster だけにして押してから読む。見本1つ。
- 人物を物語の区切り（時代・章）の帯で分け、名前を縦書きで立ち絵に重ねる（チ。：3時代・紺の帯・70px）。見本1つ。
- 人物の詳細を「文字の面＋絵の面」の2分割にし、全員の顔の列と前後を下に（チ。：左白・右紺、顔8つ、Prev／Next）。見本1つ。

- 同じドメインの中で、作品（映画・TV・作中のバンド）ごとに色・書体・組み方を総入れ替えし、フッターのバナーで行き来する（ぼっち・ざ・ろっく！：紺と明朝／黒と黄と Barlow Condensed／白と futura-pt の中央 500px）。【推しの子】の期ごとの木と同じ考えを、色まで分けた形。
- ロゴの画像に筆の線の mask をかけ、筆順どおりに引いて出す（ぼっち・ざ・ろっく！：21画・2.5倍速、区画の題も3倍速）。初回だけにし、スクロールは止めず、reduce では最初から全部。見本1つ。
- 作中のバンド・組織のサイトに、円盤を1作1URL で品番・税込と税抜・仕様・収録曲・店ごとの特典まで文字で（ぼっち・ざ・ろっく！ /kessokuband/discography/）。【推しの子】の /talent/ と同じ「作中の組織のサイト」で、こちらは買う段まである。
- 区画ごとに地の色を替え、作品の時間（夜空→明け）を見せる（ぼっち・ざ・ろっく！：data-background top／introduction／light）。見本1つ。

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
- （ダンダダンで5つ目）予告を押すまで埋め込まないのは、ダンダダンの top（data-youtubeid、押す前の YouTube 0件）で2つ目。トップでもできる。ただしモーダルは Esc で閉じない。
- （ダンダダンで5つ目、反対の例）人物を1ページの切り替えだけにするサイトがまた1つ（17人とも /character/）。各話は1話1URL（/story/24-2/）なのに人物は無い。
- （チ。で6つ目、反対の例）人物を1ページのモーダルだけにするサイトがまた1つ（8人とも / のまま、一覧は div で Tab が届かず、Esc で閉じない）。各話は1話1URL（id=1〜25）で、ダンダダンと同じく各話と人物で割れた。
- （チ。で6つ目）配信を払い方で段に分けるのは3つ目（01 見放題 15・02 都度課金 6）。ダンダダン・【推しの子】と同じく、半分以上（21件中13件）がサービスのトップへ。
- （チ。で6つ目）円盤の値段・品番・発売日を文字で書くのは2つ目（￥38,500・ZMAZ-18481）。黒い札のラベル＋値の行が読みやすい。店のボタンの名前が3つとも同じ文なのは直す。
- （ダンダダンで5つ目）円盤は値段・品番・発売日を文字で、期ごとに URL（aniplex の 1st.html・2nd.html、巻に #package7）。【推しの子】の Blu-ray のページ（店のリンク0件）より進んでいるが、店10の行き先は5巻だけ。

- （ぼっち・ざ・ろっく！で7つ目）人物は1人1URL＋前後で一周（hitori.html 〜 ikuyo.html）。前後を付けたのは7サイトで初めて。ただし前後の矢印は名前が空、題は4人とも同じ。
- （ぼっち・ざ・ろっく！で7つ目）予告を押してから開くのは dialog の showModal が手本（Esc・src を外す・押したボタンへ戻る）。ただし同じページの背景に YouTube を読み込み時から流し、押す前に 1,373KB。
- （ぼっち・ざ・ろっく！で7つ目）値段を文字で書くのは3つ目（ムビチケ「各1,600円(税込)」、結束バンドの CD「4,070円（税抜価格3,700円）」）。店ごとの特典を店名のリンクで並べたのは初めて。

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
- 見えないほど薄い砂嵐の mp4 2,914KB を全ページで取り、止められない（ダンダダン）。
- 配信28本のうち16本がサービスのトップへ、開始日なし（ダンダダン）。
- VISUAL CHANGE 8つ・メニューなど top の button 13個のうち11個に名前なし（ダンダダン）。
- 場面写真 1920×1080 を 1030×579 で出し、STORY が 13.80MB（ダンダダン）。
- 初回のオープニングの終わりを、画像の読み込みのあとに付けた ended の聞き手で待ち、画像が動画より遅いと白いまま止まる（チ。：ended 7.8s・画像 8.3〜8.8s、45秒以上・スクロール不可）。
- 飾りの字を動く WebP（4,169KB・150コマ）にして opacity .15 で全ページに置き、下層の重さの半分以上（チ。）。
- 発売・リリース後もトップの円盤・CD のサムネが「Now Printing」「Coming Soon」の仮画像のまま（チ。：BD は発売14か月後）。
- 円窓の YouTube を読み込み時から無音で流し、止める手段なし（チ。：押す前 4,662KB）。
- 初回の演出の間、スクロールを止める（ぼっち・ざ・ろっく！：PC 6.1s・SP 8.3s、reduce でも）。
- ニュース303件の本文を毎回 HTML に入れ（1,444KB）、一覧は href の無い a で Tab が届かない（ぼっち・ざ・ろっく！ /tv/news/）。
- 同じページで予告の重ねは dialog、コメントの重ねは div（Esc 不可）と、作りがそろっていない（ぼっち・ざ・ろっく！）。
- CSS・JS の URL に秒の時刻を付け、画像は no-cache で、ページを移るたびにまた取る（ぼっち・ざ・ろっく！）。
