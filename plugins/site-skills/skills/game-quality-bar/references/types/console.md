# 家庭用・PCゲーム（据え置き・携帯機・PC のゲーム）

## この下位タイプで特に見ること
対応機種ごとの購入導線、体験版、DLC・特典、版（通常・限定・デジタル）ごとの同梱物、店舗特典

## 見本の実測

### 『Pokémon LEGENDS Z-A』公式（https://www.pokemon.co.jp/ex/legends_z-a/ja/ ・2026-10-24 解剖、発売後約1年）
- **最初の画面**：描き下ろしキービジュアル。PC はロゴ中央上、左の縦帯に「好評発売中！」「購入はこちら！」「オールインワン版 予約受付中！」「予約はこちら！」とトレーラーのサムネ。左上に対応機種ロゴ（Switch 2 / Switch）。発売日は出さず「好評発売中！」のみ。SP はキャッチ→絵→ロゴ→購入ボタンで1画面目に購入が入る。購入ボタンの行き先はストア1つ（ポケモンセンターオンラインの検索結果、別タブ）。右下に追加コンテンツのバナー（×で消せるが、消した状態は保存しない）。
- **トップの作り**：仮想スクロール（`loop:true, speed:.45`、ページの高さは 900px 固定、中身を transform で動かす）。区画は KV→News→舞台→遊び方→メガシンカ→ポケモン→登場人物→商品・特典→KV に戻る。商品・特典はおよそ 18,100px 先。
- **動画**：`<video muted loop playsinline>` 2本（`autoplay` 属性なし、見えている区画だけ JS で再生）。ただし2本とも読み込み時に取得し PC 6.1MB。トレーラーは `<button data-vid>` を押した時に `youtube.com/iframe_api` を差し込み、`autoplay:1, rel:0` でモーダル再生、閉じると一時停止。
- **キャラクター**：3グループ（5人・2人・14人＝21人）。一覧は PC 3列（カード幅385px）／SP 2列。1人ずつ別ページ（`/characters/250227_02/`、番号は公開日）。詳細は立ち絵→名前（h1）→紹介文1段落→ゲーム画面2枚。ボイス・声優表記なし、前後の人物へのリンクなし。
- **ナビ**：右上に固定の五角形メニュー（PC 85px／SP 49px）、8項目＋言語＋権利表記。下層ページ末尾に同じ7項目のボタン列。ボタンは内部＝矢印、外部＝窓アイコン。
- **ニュース**：67件を5タブ（すべて67／ゲーム情報27／ニュース18／動画15／キャンペーン7、件数をタブに表示）。最初12件、「もっと見る」で12件ずつ。タブで URL の `#movie` などが変わる。動画カードはその場でモーダル再生。
- **買う**：商品5枚（PC 2列／SP 1列）＋特典5枚（PC 4列／SP 1列）。商品カードは全部1つの詳細ページの `#anc01〜04` へ。詳細は定義リスト（タイトル・発売日・予約開始日・希望小売価格・発売・販売・企画開発・対応機種・ジャンル・プレイ人数・通信機能・販売形態・対応言語・CERO）。価格はパッケージ 7,128円／8,128円（Switch 2 Edition）、DL 7,100円／8,100円、オールインワン版 11,128円。終了品は赤字で「生産を終了しました」。買う場所はボタンではなく店名リスト（ダウンロードカード 16チェーン、ダウンロード番号 3商品×6ショップ）。
- **表記**：CERO（A）は商品詳細の仕様表だけ。権利表記は下層フッターとトップのメニュー内。言語は ja／簡体／繁体の3つ（`hreflang`＋`aria-label`）。JSON-LD なし。
- **安全と重さ**：`prefers-reduced-motion` の扱いなし（CSS・JS とも。reduce を指定しても動きは同じ）。トップ PC 32.95MB／SP 32.67MB（WebP 25.1MB・連番画像160枚、MP4 6.1MB）。下層 PC 2.25〜5.81MB、うち Google Fonts の Noto Sans JP の CSS が毎ページ約560KB。SP の横スクロールなし。

### 『ペルソナ３ リロード』公式（https://p3re.jp/ ・2026-10-28 解剖、2024-02-02 発売・Switch 2 版も発売中。歩いた5ページ：/・/expansion/・/switch2/・p-ch.jp/news/titles/p3r/・/stores/）
- **枠**：トップは高さ 21,166px（SP 28,001px・750px 組み）の1ページに、ローディング → ポップアップ → fv → トレーラー → 版のタブと ○×表 → 特典 → DLC → 物語 → 人物 → SPEC。購入（y=1,139）が物語（y=5,653）より先。jQuery＋GSAP ScrollTrigger＋slick＋Fancybox 3。`<meta name="viewport" content="width=750">` で SP は 0.52 倍に縮める（20px 指定の本文が実寸 10.4px）。ニュースはシリーズ全体の別サイト（ペルソナチャンネル）。
- **最初の画面**：白い地のローディング（「Memento Mori」＋SVG の波4枚、3s・5.5s・13s・20s）が PC 6.4〜6.6秒、SP 6.3秒。消えると動画のキービジュアル（`fv_movie1` 1回→`fv_movie2` loop、muted・`preload="auto"`・JS で再生）。PC はロゴ中央右 303×211、左上に細いセリフの「PERSONA3 RELOAD / NOW ON SALE」、右下に賞のバッジ 100×103 とバナー 150×87 を4つ。発売日・機種・価格は無い。ローディングの 1.8秒後に Switch 2 版の告知 1280×790（閉じる 60×63、href なしの a）を毎回出す（localStorage・cookie の読み書きなし）。
- **トレーラー**：fv 直下の帯 1440×240「PLAY TRAILER →」に YouTube 14本（Fancybox、URL に `#pv-1`）。帯の背景に読み込み時から `youtube-nocookie.com/embed`（enablejsapi）の iframe を入れ、押す前に 1,102KB＋サムネ 395KB。
- **キャラクター**：13人（S.E.E.S. 10＋STREGA 3）。PC は区画を固定し、縦 約11,200px で横 −10,480px 送る。真ん中の人に合わせて地の色 `.chara.bgN` を替える（11色。Hero #86edfc・Yukari #fc93ff … STREGA #93cc96）。選ばれていない人は単色の `_off` 画像。カードは href の無い `a` で、押すとモーダル（88ms・0KB）：立ち絵 547×900＋縦書きの英名、名前 39px 700 字間 3px → CV（Syncopate 14px）→ PROFILE → 紹介 17px／32.3px → 動画1＋画像5。詳細の波の色は一覧の色と同じか RGB で4暗い。CHANGE VISUAL 236×61（制服⇔戦闘服、0KB）。URL・前後の矢印・Esc は無い。/switch2/ は 72×41 のサムネ10個（`li`）で同じ枠を切り替える。
- **ナビ**：top の PC ヘッダーは固定しない（absolute）、6項目は base64 の画像。SP は右上に固定の三角 162×162「MENU」。特設は「購入はこちら」を固定：/expansion/ 右上 300×97 → `#purchase`、/switch2/ 右下 257×51 → `#product`。top.css で `a` の outline を消している。
- **買う**：「BUY NOW!」の下にタブ2つ（パッケージ版／ダウンロード版、640×60、選択中 #1d384a に白＋16px の三角、他 #eee）。パッケージ4版（豪華版 17,380円・Dショップ限定2種・通常版 9,680円）、DL 3版（プレミアム 13,728円・デラックス 10,406円・通常 7,678円）。同梱物は開閉リストと 4版×6品の ○×表（ul と背景の絵）。値段8つは base64 の画像で alt 空。DL は版ごとに XBOX・Windows・PS・STEAM の4ボタン（295×55）。パッケージは /stores/：PS5／PS4 のタブ（MixItUp）で26店ずつ、店舗オリジナル特典と「豪華版」「通常版」のボタン。店へのリンク117個すべて alt 空の画像だけで名前が無い。/switch2/ は値段が文字で、タブは button。
- **表記**：CERO C はフッターの SPEC（タイトル・発売日・レーティング・ジャンル・価格・プレイ人数・対応機種の7項目、文字）だけ。/stores/・/expansion/ は0件。権利は「©ATLUS ©SEGA」＋機種の商標4行。言語は JA・EN・TC・SC・KO と、FR〜ES の4つが同じ1ページ。JSON-LD は0件、見出しは SVG・画像で top の h1〜h3 のうち13個が空。
- **安全と重さ**：`prefers-reduced-motion` は5ページの CSS・JS に0件、reduce でもローディング・動画・横送りが同じ。measure.js：top PC 36.99／SP 37.08MB（mp4 9,335KB＝PC 用と SP 用の4本とも、Noto Sans JP の OTF 2本 8,970KB、WebP 8,899KB、HTML 1,111KB のうち base64 約955KB）、/expansion/ 25.22／29.29MB、/switch2/ 27.40／26.63MB（LINE Seed JP の OTF 7,803KB＋Material Symbols 3,912KB）、ニュース 6.42／6.45MB、/stores/ 10.23MB（88% がフォント）。

### 『Clair Obscur: Expedition 33』公式（https://www.expedition33.com/ ・2026-11-02 解剖、2025-04-24 発売・海外。歩いた5ページ：/・/overview・/overview/characters・/latest-news・/collectors-edition）
- **枠**：Wix（Studio）の5ページ。専用の購入ページは無く（/buy は 404）、店はヘッダーの Out Now と機種の帯。地 #000、文字は白と金 #ECCFA3（14.02:1）、ナビ #EDCD9D。見出しは全部 Trajan Pro の大文字を « » で挟む。本文 IM FELL Double Pica 18.5px、紹介・日付は Palatino Linotype Italic、機種・タブは Portmanteau（5書体とも Wix にあげた woff2、太さは 400 だけ）。
- **最初の画面**：絵の具のかすれの縁で切り抜いた無音のループ動画（1080p、`autoplay muted loop preload="auto"`、poster なし）の中央上にロゴ、下に « Tomorrow Comes »＋AVAILABLE NOW（Portmanteau 34.5px）。直下 y=828 に機種4つのリンク（234×91、新しいタブ）。発売日は出さない。SP は機種のロゴ4つが1画面目に入る。PC は Cookie の帯 64px が機種の帯にかぶる。
- **動画**：top は2本とも読み込み時に取る（最初の画面 8,321KB、Launch Trailer の背景 9,126KB は `preload="none"` でも autoplay）。トレーラーは金の線の菱形（div、aria-label「… Play video」）を押して `iframe_api` → `autoplay=1&mute=1&controls=1&loop=1`、押す前の YouTube の通信 0。reduce では top の動画が paused・0.0s（ただし 8.5MB は取る）。
- **キャラクター**：8人を1ページの `role="tab"`（div、aria-selected・aria-controls）で。高さ 30px・角丸 50px・Portmanteau 14.25px、選んでいない札は #ECCFA3 の地に黒、選んだ札は地を抜いて白。roving tabindex（選んだ札 0・他 −1）で、→ はフォーカスだけ移す。切り替え PC 60〜148ms・57〜81KB／SP 50〜151ms・6〜8KB。URL は変わらず、前後のリンク・声優表記は無い。中身は « 名前 »（Trajan 42.6px）→ 紹介3段落（Palatino 斜体 18.5px）→ CHARACTER TRAILER（YouTube へ）・COSPLAY GUIDE → 立ち絵 648×587。
- **ナビ**：高さ 56px の固定（地は透明）、IM FELL 15px の7項目＋右端の Out Now だけ 20px 斜体で札の絵の上（132×56）。Out Now はリンク（/linkhub）＋ `button aria-label="More Out Now pages" aria-expanded` で、ホバーで Steam・Xbox・PlayStation・Epic（各 100×41、新しいタブ）。SP は 22×22 のメニューボタン。
- **買う**：/collectors-edition に4版（Standard Game・Digital Deluxe・Lumiere Edition・Collector's Edition〔Sold Out〕）×6品の比較。PC は1枚の画像（`SKU_Matrix.png`、alt はファイル名）、SP は button 4つ（362×46、aria-expanded、1つだけ開く、288ms）。値段は5ページで0件、このページの本文に店のボタンは無い。地域ごとの販売元を文で（米国は限定2版が GameStop だけ、欧州の Collector's は Laced Records だけ、日本は SEGA の通常版だけ）。注記は PC 10.27px／SP 8px。
- **表記**：ESRB M をフッターの画像 168×112（元は 108×48、alt「Jpeg V1.jpg」、リンクなし）で全ページに。文字の年齢区分は0件。権利は PC 13.86px／SP 9px（Privacy Policy は SP 6px）。hreflang は en-us と x-default だけ。h1 は5ページとも0。
- **重さ**：measure.js：top PC 41.55／SP 35.41MB（mp4 17,448KB、JS 11,215KB、JSON 5,857KB、HTML 2,813KB はインラインの CSS 1,339KB を含む）、world 20.02MB、chara 13.91MB、news 13.55MB、buy 9.08MB。Typeform の renderer 1,603KB を top・world・chara で毎回。画像は Wix の変換で AVIF。

### 『Baldur's Gate 3』公式（https://baldursgate3.game/ ・2026-11-06 解剖、2023 年発売・海外〔Larian Studios〕。歩いた5ページ：/・/about・/news・/news/hotfix-36-now-live_149・/merch。人物と購入は top の区画で独立したページなし）
- **最初の画面**：`<video autoplay muted loop playsinline preload="metadata">` の全面（PC 1440×855）。`Homepage_All_2.mp4` 19,163,715B を読み込み 9.1 秒（SP 10.0 秒）から取る。評の一文（GameSpot）は動画に焼き込みで文字なし。その下に再生の輪 137×137 → h1「It's party time!」48.9px（SP 38px）→ 菱形の角の Get it now 246×58 → 「AVAILABLE NOW」13px・字間 3px → 機種のロゴ5つ（Steam・GOG・PS5 Pro Enhanced・Xbox Series X|S・Windows、y 745〜751）→ Deluxe edition。発売日は書かない。ヘッダー右に Buy now 144×58（SP はカートの絵 80×58）。
- **トップの作り**：1枚に11区画（PC 12,133px）。Hero → Awards（受賞の画像22個）→ Origins（人物7人）→ 種族11・職業12 → Buy Now（y=3,332）→ Merch → News → Fanart 17枚 → Media → FAQ（機種・PC と Mac の必要環境・課金なし）→ フッター。
- **動画**：トレーラーは `<a href="#" class="play">` を押して `youtube.com/embed/XuCfkgaaa08` の iframe をモーダルに作る。押す前の YouTube 0件、押して3秒で 1,155KB。モーダルは Esc で閉じず、閉じるは `div.modal-close` 20×24（名前なし・Tab 不可）、開いてもフォーカスは押した a のまま。/about は区画ごとの mp4 7本がすべて autoplay muted loop で 88,269KB（同じ 12,396KB を2回）。
- **キャラクター**：7人を top の1区画で。PC は右の縦の列（Swiper、タイル約160×200、`swiper-slide` は role=group・aria-label「1 / 7」・tabindex −1）、SP は上の横の列。左に肩書き 13px・名前 h2 54.8px（SP 58px、135deg #fff→#fbcea0 66% のグラデーションの字）・紹介文 Gothic A1 14.99px／行 1.444・白 70%、その下に金の枠の札（Class・Race・Subrace の絵つき3つ＋Skill Proficiencies・Languages・Background）。文の入れ替えは opacity .4s、押して 35ms（矢印 80ms）、追加の通信 0KB。上下の矢印は `a href="#"` 17×32 で名前なし。URL は `/` のままで1人を指せない。声優・ボイスなし。
- **ナビ**：`nav.menu` は position:fixed で地が無く、下がると金の字が本文の絵に重なる。項目は About（中に「Subpage 1〜4」の `href="#"` が残り Tab で止まる）・News & Updates・Press（`href="#"`）・Support・Merch・Mods・More。SP は `div.mobile-menu` 42×75（button でない・名前なし）で SITEMAP の開閉9項目。フォーカスは `a:focus{outline:0}` で Tab の40手とも枠なし。
- **買う**：版3つ（Standard・Digital Deluxe・Physical Deluxe、200×66）を押すと 92ms で箱の絵・説明・同梱物（1行・6行・9行）・機種のボタンの行き先が替わる。Standard と Digital Deluxe は Steam・GOG・PS Store・Xbox・Windows の5つ（Windows は Xbox と同じ URL）、Physical Deluxe は PC・PS5・Xbox の3つで行き先は地域の Larian の店（`${region.hostname}`、この環境は eu.merch.larian.com）。版のボタンは href の無い `a` で Tab が届かない。機種のボタンは SVG だけで名前なし。値段は top に0件（/merch に Deluxe €79.99 だけ）。Digital Deluxe の同梱物の1行目は Steam を選んでも「Baldur's Gate 3 for PS5™ - Base Game」。フッターの `#buy-standard`・`#buy-dde`・`#buy-de` で版を選んだ状態に飛べる。
- **ニュース**：/news は最新1件の大きな帯 → 検索・Hotfix／Patch・LATEST／OLDEST → 9枚の格子 → 11ページ。開くと URL が `?query=&order=az&categories=&page=1` になり、Hotfix で 148ms・`categories=1`。日付は英字 13px・字間 3px で `time` 0個、題は2行で切る。
- **表記**：年齢区分はフッターだけに地域別4つ（ESRB US/Canada 181×86・PEGI Europe・USK Germany・ACB Australia / New Zealand、各 86×86）で、img に alt なし・地域名は下の文字。権利表記は Larian と Wizards of the Coast の2社。言語の切り替えは歩いたページに無い。
- **安全と重さ**：CSS（412KB）に `prefers-reduced-motion` 0件、reduce でも最初の画面の mp4 は再生。top PC 47.26MB（measure.js、mp4 は別に 18.3MB）／SP 57.86MB、/about 94.92MB、/news 19.89MB、/merch 5.24MB。ニュースの絵が PNG で 2,565〜3,591KB、SP は PC 用と SP 用の両方を取る（cmsapi.larian.com PC 10件 14,516KB → SP 19件 25,441KB）。SP は top・news・article が幅 481px で横にはみ出し、/about は PC でも 1,489px。h1 は About・News・ニュース1件で0。/merch に CMS の空欄「[Missing Label]」が5か所。
- **文字と色**：題は QuadraatOffcPro Demibold の大文字、本文は Gothic A1。大きさは 970〜1920px で伸びる clamp の7段（14–16〜48–60）。色は #fff 83・#000 63・#b1906a 39・#fbcea0 36・#c19976 17（#fbcea0／#000 14.44、#c19976／#000 8.09）。Cookie の帯のボタンは白／#c19976 で 2.60。

## 真似る型（Z-A・P3R・Expedition 33・Baldur's Gate 3 の4つで確かめた）
- **機種×版の値段・発売日・年齢区分を、1か所に文字で並べる。**Z-A は商品詳細の仕様表（14項目の定義リスト）、P3R は全ページ末尾の SPEC（7項目、価格は全版を1つの欄に）。どちらも値段と CERO が文字で読めるのはそこだけだった。作るときは、その表を購入の区画にも置き、年齢区分を値段の横に出す。
- **パッケージの買う先は、ストアのボタン1つでなく店の一覧にする。**Z-A はダウンロードカード16チェーン＋ダウンロード番号6ショップの店名リスト、P3R は26店のカード（店舗オリジナル特典つき）を PS5／PS4 で切り替え。店ごとの特典があるなら、店のカードに特典名と版のボタンを入れる。ボタンの名前には店・版・機種を書く（P3R は117個とも名前が無い）。
- **版は「パッケージ／ダウンロード」の2つのタブか区画で分ける。**Z-A は商品5枚を1つの詳細ページの `#anc01〜04` に分け、価格をパッケージ・DL・Switch 2 Edition の別に書く、P3R は 640×60 のタブ2つ。限定版の同梱物は版×品の ○×表にする（P3R：4版×6品）。
- **トップの最初の数画面に「購入」への入口を置く。**Z-A は左の縦帯に「購入はこちら！」「予約はこちら！」、P3R は2画面目（y=1,139）に「BUY NOW!」。特設ページは「購入はこちら」を固定する（P3R：/expansion/ 300×97、/switch2/ 257×51）。
- **最初の画面の真下に機種のリンクを並べ、ヘッダーの右端に買う入口を1つだけ別扱いで置く。**Expedition 33 は AVAILABLE NOW の帯の直下 y=828 に機種4つ（234×91）、ヘッダーは他 15px に対して Out Now だけ 20px の札（132×56）で、▾ の button（aria-expanded）から店4つ（100×41、新しいタブ）。Baldur's Gate 3 も AVAILABLE NOW の下 y 745〜751 に機種5つ、ヘッダー右に Buy now 144×58。Z-A の縦帯・P3R の2画面目の BUY NOW! と同じく、入口は最初の数画面に。
- **版×品の比較は、PC は表、SP は版ごとに開く。**P3R は 4版×6品の ○×（ul と背景の絵）、Expedition 33 は 4版×6品（PC は画像1枚、SP は 362×46 の button 4つで1つだけ開く）。どちらも表が文字の table でないので、作るときは table と `button[aria-expanded]` を同じデータから作る。
- **トレーラーは押してから埋め込む。**Z-A はサムネの `<button>` を押して `iframe_api`、Expedition 33 は菱形の再生を押して `iframe_api` → `autoplay=1&mute=1`。どちらも押す前の YouTube の通信は 0（P3R は読み込み時に iframe で 1.5MB）。Baldur's Gate 3 も再生の輪を押して embed の iframe（押す前 0件、押して 1,155KB）。


## 真似る候補（見本1つ。2つ目で確かめたら「真似る型」へ上げる）
- 版を選ぶと、箱の絵・同梱物・店のリンクの行き先が一緒に替わる。売っていない機種のボタンは消す（Baldur's Gate 3：Standard 1行・Digital Deluxe 6行・Physical Deluxe 9行、Physical は Steam・GOG が消えて3つ。92ms）。作るときは版を button（aria-pressed）にし、消すだけでなく理由と代わりの版を書き、値段を出す。
- 版を選んだ状態をハッシュで指せる（Baldur's Gate 3：`#buy-standard`・`#buy-dde`・`#buy-de`）。
- 人物は一覧の列と1人の詳細を同じ画面に置き、PC は右の縦の列・SP は上の横の列にする。詳細は能力の札（職・生まれ・得意）で（Baldur's Gate 3：7人、opacity .4s、押して 35ms）。作るときは列を名前のある button、1人を hash で。
- 年齢区分を地域ごとに並べる（Baldur's Gate 3：ESRB・PEGI・USK・ACB の4つに地域名。ただしフッターだけで画像に alt なし）。
- 人物のタブは `role="tab"` の roving tabindex（選んだ札だけ 0、← → でフォーカス）にし、選んだ札は面を抜いて文字だけにする（Expedition 33：8人、高さ 30px、他の札は #ECCFA3 の面）。ただし URL は変えていないので、作るときは #名前 を足す。
- 写真・動画を作品の画風の縁（Expedition 33 は絵の具のかすれの PNG）で切り抜き、見出しを1つの記号（« »）で挟んで、全ページの部品をそろえる。
- キャラクターは1人1URL、一覧はグループ見出しで分ける（Z-A。P3R はモーダルで URL なし、組の見出し S.E.E.S.／STREGA は同じ）。
- ニュースは種類のタブに件数を出し、12件ずつ増やす（Z-A）。
- 人物ごとに色を1つ決め、一覧の地と詳細の面を同じ色で塗る。選ばれていない人は単色にする（P3R：11色、`_off` 画像）。文字は濃紺（#1d384a なら全色で 4.46 以上）。
- 人物の詳細は「名前（一番大きく）→ CV → PROFILE → 紹介5〜7行 → 動画と画像」（P3R：39px 700 字間 3px、紹介 17px／1.9）。
- 作品のモチーフ（P3R は水）をローディングとモーダルの縁の部品にする。SVG の path 1本を速さ違いで4回使う（3・5.5・13・20秒）。

## 反面教師
- トップで、最初の画面に要らない連番画像・動画をスクロール前に全部読む（Z-A：33MB）。
- 仮想スクロールとループ動画に reduced-motion の逃げ道が無い（Z-A）。
- CERO が購入の入口（トップの購入ボタン付近・フッター）に無く、商品詳細の奥だけにある（Z-A）。
- キャラクター詳細に前後の人物へのリンクが無く、一覧に戻らないと次へ行けない（Z-A、P3R のモーダルも）。
- 開くたびに告知のポップアップで最初の画面を覆い、閉じたことを覚えない（P3R：6.4秒のローディングのあと 1280×790）。
- 値段を alt の空の画像にする（P3R：top の8つ）。販売店のボタンに名前が無い（P3R：117個）。
- 人物のカードが href の無い `a` で、キーボードでは開けない。モーダルは Esc で閉じない（P3R）。
- SP を `width=750` の固定の viewport で縮める（P3R：本文が実寸 10.4px）。
- 年齢区分をフッターの画像1枚だけにする（Expedition 33：ESRB M、168×112 に引き伸ばしてぼやけ、alt「Jpeg V1.jpg」）。値段を1つも書かない（Expedition 33：5ページで0件）。
- 版の比較表を画像1枚にする（Expedition 33：`SKU_Matrix.png`、alt はファイル名）。人物のタブに URL が無い（Expedition 33：8人とも同じ URL）。
- 見えていない区画の背景動画を読み込み時に取る（Expedition 33：Launch Trailer の背景 1080p 9,126KB、`preload="none"` でも autoplay）。
- 日本語フォントを全字形の OTF のまま毎ページ取る（P3R：8,970KB、/stores/ の 88%）。PC でも SP 用の動画を取る（P3R：4本 9,335KB）。
- 版と機種を選ばせて、値段を1つも出さない（Baldur's Gate 3：top 0件、/merch の Deluxe €79.99 だけ）。店のボタンを SVG のロゴだけにする（同：最初の画面5つ・購入5〜3つ）。版のボタンを href の無い `a` にして Tab が届かない（同）。
- 固定のナビに地を敷かず、下がると本文に重なる（Baldur's Gate 3）。CMS の空欄（「[Missing Label]」「Subpage 1〜4」）を出したまま公開する（同）。
- 区画ごとの動画を全部 autoplay にして読み込み時に取る（Baldur's Gate 3 の /about：7本 88,269KB、1本は2回）。
