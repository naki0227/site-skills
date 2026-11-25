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

### 『Sea of Stars』公式（https://seaofstarsgame.co/ ・2026-11-13 解剖、2023 年発売・海外〔Sabotage Studio、カナダ〕・最後の無料更新 Sunset Edition 配信後。歩いた4ページ：/・/throes-of-the-watchmaker-dlc/・compendium.seaofstarsgame.co/valere・/faq/。ニュースの一覧と購入の専用ページは無い）
- **枠**：WordPress＋jQuery＋Barba.js（PJAX）。地は砂の紙 #fffaf4 と夜空 #082136 の2枚を破れた紙の縁で交互に。見出し orpheuspro・本文 neusa-next-std-condensed（Adobe Fonts）。h1 は top・DLC・図鑑で 0（FAQ だけ）。
- **最初の画面**：キービジュアル 1920×1000 を x=−240・y=−100 にはみ出させ、ロゴ 520×170 を y=660、リボン「SUNSET EDITION」は #ffb561→#ff5bd3。ナビ 1306×90（y=16）は下へ送ると −90px に隠れる。発売日・値段 0。音は鳴らない。
- **下端の固定の帯**：全4ページで同じ。PC 1090×70（y=830・z 997）に、左は 18 曲の音楽プレーヤー（再生 50×50、押して mp3 3,480KB）、右は Steam・eShop・PS Store・Xbox ＋ App Store・Google Play の 54×54 を6つ（`aria-label` 付き・新しいタブ）。SP 390×58 はストアだけ。PJAX なのでページを移っても曲が止まらず、DLC のページでは曲目が DLC の曲に替わる。
- **動画**：区画の mp4 7本（`autoplay muted loop preload="auto"`）を読み込み後 5.9〜7.8s で全部取る（PC 16,095KB、SP は7本とも再生して mp4 23,033KB＋webm 1,396KB）。トレーラーは `a.magnific-video`（href は YouTube の watch）で、押す前の YouTube 0件 → 押して 100ms（SP 131ms）で embed、PC 1,406KB。重ねの × は 44×44・Esc で閉じ、閉じると押した a へ戻る（role・aria-modal なし）。
- **世界観のしくみ**：Dynamic Lighting は直径 566px の輪に 250×250 の PNG 99 コマ（3,399KB）を重ね、50×50 のつまみの角度から `Math.floor(角度/360×99)` 番目を出す（jQuery UI rotatable、絵は 500×500 に `crisp-edges`）。つまみは div で Tab・矢印キー不可。
- **キャラクター**：top は6人のタブ（button 150×146、中はドット絵の img で alt 空＝名前なし）、押して PC 73ms・SP 166ms、通信 0、URL は `/` のまま。詳細は名前 52px 700 字間 1px #524e47、肩書き 18px 字間 7px 大文字 #b8af9d（2.10:1）、本文 16px／31.04px。図鑑 Compendium（Vue）は 33件（人物 18・敵 15）を JSON 1つ（9KB）から1件1URL（`/garl`、題「Compendium - Garl」）、押して 21〜23ms・1,085KB。ただし replaceState なので戻るでサイトの外へ、知らない名前は `/valere` へ、顔の列は `li`／`div`（tabindex −1）。SNS の登録者 1,000〜80,000 人ごとに1件ずつ解けた。BGM（ogg 68KB）は押して鳴り、YouTube を再生すると止める。
- **DLC**：悪役の札はトランプの形（4:5、角 14px）で、hover で rotateY(180deg) .5s ease・translateZ 50px、裏は webm（7本 5,478KB を読み込み時に）。
- **買う**：値段 0件。ストアは下端の帯、グッズは top の6タブ（180×50、Plush・Mobile・Art Books・Physical・Soundtrack・Wallpapers、role なし）で「Buy on Fangamer」「Buy on iam8bit」「Buy on 3dtotal」の店名入りボタン。機種9つは FAQ の1問目の文だけ（GOG・Switch 2 は帯に無い）。図鑑の下は発売後も「Wishlist on Steam／PS Store／eShop」。
- **表記**：ESRB E10+ の画像を top に5か所（What's New の動画3つと受賞のリールの隅に 134×68、フッター 158×80）、alt「ESRB Rating: Everyone 10+ with Fantasy Violence, Mild Blood and Mild Language」。英語だけ。
- **お知らせ**：一覧なし。top の What's New 3枚（日付なし、題は SVG で `<title>` がファイル名）と、FAQ の最後の問いに更新3つを年つきで（2024・2025年5月・2026、「これ以上の更新は予定なし」）。
- **安全と重さ**：reduce は Bootstrap の既定 17件だけ（雲 110s・55s・動画・札は止まらない）。Tab の14手とも outline none。scroll のたびに全 `.scroll-appear` を計算。measure.js：top PC 32.22／SP 39.23MB（mp4 16,095KB、受賞の PNG 18枚 6,223KB、遊び方の PNG 20枚 4,891KB）、DLC 15.66／17.90MB、図鑑 2.82／2.76MB、FAQ 3.28／3.60MB。

### 『Cyberpunk 2077』公式（https://www.cyberpunk.net/us/en/ ・2026-11-18 解剖、2020 年発売・海外〔CD PROJEKT RED、ポーランド〕・拡張 Phantom Liberty 2023 年・無料更新 2.5 配信後。歩いた5ページ：/us/en/・/us/en/cyberpunk-2077・/us/en/phantom-liberty・/en/news/・/us/en/buy）
- **枠**：自前の webpack＋Swiper。地 #000、主の黄 #fcee0a（CSS で 186回）、水色 #00f0ff（109回）、拡張の調書だけ赤 #fc012a。書体は自前の Refinery-25（h1・h2）と Blender Pro Book／Bold（本文・ボタン）。全部の部品が「角を落とした形」：ボタン cp-btn（高さ 48px・最小幅 232px、左右 20px の SVG border-image で左に切り欠き・右下を落とす）、ナビ（`clip-path:polygon(16px 0,100% 0,100% 30px,calc(100% - 18px) 48px,…)`）、タブ枠、購入の札。title は4ページ同じ文、chara・buy は h1 なし、JSON-LD 0件。
- **最初の画面**：右半分に人物のキービジュアルを少し動かした webm（1920×1080、903KB、`autoplay muted loop`、poster あり）、左の列に上からプレスの評3つ（月桂樹の枠 254×64、y=119）→ h1 88px／0.9 の大文字3行（x=191）→ BUY NOW・WATCH TRAILER（232×48）→ 機種のロゴ8つ（高さ 32px、2段）。発売日・値段は無い。ナビは右上 760×40、右端の BUY NOW 140×38 は top・chara で #fcee0a、world で #00f0ff。下へ行ってもナビは上から 36px に残る。SP は h1 32px の白を動画の上に、ボタン縦2つ。
- **動画**：予告は YouTube の watch へのリンク（target=_blank）で、ページに埋め込みなし＝押す前の YouTube 0件。拡張の KV は webm 2,915KB。world のタロットの区画の webm 392KB は止まったまま読み込み時に取る。MEDIA の区画は「inappropriate for minors」の幕と OK（押すと大人と認めた扱い。押していない）。
- **キャラクター**：world は黄の面に6人の立ち絵（各 240×540）を横一列、名前の札（180〜230×48）を押すとその場で `.expanded` が付き、350ms で名前 44px・文 22px 700 が開く。拡張は赤の面に5人の「調書」：文の中の固有名に白い帯（`::after` #e6e9e9、`skewY(-15deg) rotate(15deg)`、幅 104%・高さ 1.2em）、下に AUTHORIZED BY／DATE の空欄（14px・字間 .1em・白 40%）、閉じる札は CLOSE THE DOSSIER。札はどちらも `div`（tabIndex −1）で Tab が届かず、Esc で閉じず、URL は変わらない。声・声優なし。
- **世界観**：world の5つのタブ（What’s New・Story・Night City・Gameplay・Phantom Liberty、高さ 46px）で横に 0.3s ease、選んだタブの地を #fcee0a に（押して 134ms）。先頭は最新の無料更新の告知。タブは `li`（PC は JS のあと tabIndex −1、aria-current は付け替わらない）。
- **ニュース**：最初に17件（最新1を大きく・黄の面に1＋6・暗い面に9）、全カードに「29.10.2026」の日付。LOAD MORE NEWS は `span` で、押して9件足す（URL は変わらない）。絵は PNG（1440 幅を 373px で 1,385KB）。カードのホバーで glitch（clip-path の帯を 2s linear infinite alternate、±5px）。
- **買う**：赤い札「DISCOUNTS UP TO -50%」→ SELECT GAME（Ultimate・Phantom Liberty・本編の3つ、467×262、`div` で Tab 不可。拡張の下に「本編が要る」1行）→ SELECT PLATFORM（Ultimate は5機種、本編は6機種。200×52 の button だが機種のロゴが背景の絵で名前なし、PS5 は角の札「-50%」が名前になる）→ Digital／Retail → 店（200×52 の a、alt は店名、新しいタブ）。押して 58ms。店のデータは `storeData` をページに直書きで、4版×機種×形の70行（売り切れ16行は URL なし）。値段の項目は無く、5ページで値段0件。何を選んでも URL は `/us/en/buy`。国の切り替え53か国。
- **表記**：ESRB M はフッターの `div` の背景の絵だけ（文字・alt なし）。16言語、URL は `/us/ja/` のように国／言語。
- **安全と重さ**：`prefers-reduced-motion` 0件、reduce でも KV の動画は再生。news 以外の4ページにニュースレターの欄と reCAPTCHA があり、`recaptcha__ja.js` 846KB を4回＝3,384KB（buy 5.53MB の 61%）。measure.js：top PC 8.56／SP 7.65MB、world 10.29／10.70MB、chara 10.59／10.37MB、news 4.85／4.63MB、buy 5.53／5.53MB。

### 『FINAL FANTASY VII REBIRTH』公式（https://www.jp.square-enix.com/ffvii_rebirth/ ・2026-11-21 解剖、PS5 2024-02-29・Steam／Epic 2025-01-23・Switch 2／Xbox／Windows 2026-06-03 発売・国内〔スクウェア・エニックス〕。歩いた5ページ：/・/about/・/character/・/character/tifa.html・/news/。購入は top の #products で独立したページなし）
- **枠**：自前の HTML＋Swiper・swup（ページ移り）・Magnific Popup・PhotoSwipe（vendor.js 371KB）。地 #000、紺 #002343・#10305e の箱、水色 #268dac・#439bb5 の枠、赤 #850303・#a40000。書体は Google Fonts の M PLUS 1p（6太さ）・Noto Sans JP（4）・Oswald（3）を1本の CSS（1,119KB・@font-face 1,267）で全ページ。大きさは全部 vw（PC は 1920 幅基準で 1440 では 13.5px、SP は 375 基準で 390 では 11.44px）。
- **最初の画面**：最上段に会社のヘッダー 35px と3部作の帯 73px（EPISODE 1 緑・2 赤・3 青、1作 480×34）。静止画のキービジュアル 1440×951 の中央上にロゴ 452×252、右下に機種の行＋AVAILABLE NOW（画像 347×128）→ #a40000 の丸「ご購入はこちら」368×30 → 体験版の箱 413×139（Switch 2・Xbox の2ボタン）を縦に積む。ローディング PC 8.0秒・SP 5.2秒。
- **動画**：背景の video 9本（muted loop playsinline preload="metadata"、poster なし、見えたら再生）。9本とも読み込みから約10秒で取りに行き、SP は 38,546KB。予告は YouTube の watch へのリンクを押すと 150ms で embed の iframe（押す前 0件）、閉じるは 45×45 の名前の無い div（Esc は効く）。
- **物語**：トップに背景動画＋物語の一文の画像＋言葉の札4つ（#神羅カンパニー など、li）。押すと説明の画像が opacity 0→1（.23s）。ABOUT は3部作の中の位置（1作目→2作目→3作目）と各作の説明で、本文の文字 41字に対し alt 1,295字。
- **キャラクター**：16人を「神羅に対抗する仲間たち（9）」「世界を支配する神羅カンパニー（神羅を統べる者1・タークス4・ソルジャー2）」の陣営→小見出しで、1人1URL（/character/tifa.html）。顔の札は 31.5×31.5、swup で押して 650ms。名前 M PLUS 1p 300 28.5px（-.05em）、英名 Oswald 12px、「Voice Cast」の赤い札、台詞と武器の説明は画像。人物相関図は「ネタバレ要素を含みます。閲覧をされますか？」→「開く／閉じる」を挟む。
- **ナビ**：PC は下端に固定 1440×60 の二重枠のボタン6つ（150×45、外の左右 .26vw #268dac・内 1px・四隅の十字、ホバー scale(1.06) 下を軸に .1s）。SP は右上 42×42 の三本線。今のページは li.--current。
- **買う**：機種4つ（Switch 2・Xbox/Windows・PS5・PC）→ その機種で出ている版だけ（Switch 2 3・Xbox 2・PS5 6・PC 3、出ない版は width 0）→ 値段と店。値段は会社共通の `/pricelist/api/public/product/36`（23件の {id,skuName,price}）から文字で入れる：通常 6,578円、Digital Deluxe 8,201円（Nintendo・Xbox）／8,140円（PS・Steam・Epic）、PS5 Deluxe 15,800円・Collector's 49,800円・アップグレード 1,624円。パッケージは e-STORE・Amazon・ファミリーマートの店ごと特典、PC は Steam と Epic の値段を2つ並べる。PS5 の Deluxe・Collector's は値段だけで店のボタンが無い。札は li で Tab 0、URL は変わらない、店のボタンは outline none。機種ごとの3項目（携帯モード・PS5 Pro・Steam Deck Verified）は別の区画。
- **ニュース**：entrylist.json の50件（お知らせ36・キャンペーン8・ムービー6）を12件ずつ PREV／NEXT。記事ごとに対象機種のフラグ4つを持ち、カードの下に機種の札。絞り込みは種類4×機種5で、0件になる機種の札は opacity .5 で押せない（空の画面を出さない）。ただし種類を押すと機種が「すべて」に戻り、URL も変わらない。最新は 2026/06/03。
- **表記**：仕様の表に文字で CERO C・ボイス4言語・字幕は機種で2行（8言語／11言語）・発売日を機種ごと。フッターに CERO と IARC 12 の印と機種のロゴ。JSON-LD 0、h1・h2 は img。
- **安全と重さ**：`prefers-reduced-motion` 0件、reduce でも背景動画は再生。measure.js：top PC 34.69／SP 54.57MB（SP は mp4 38,546KB、PC は webp 13,127KB・mp4 9,886KB、1920×1080 の PNG 4,949KB を 434×244 のカードに）、about 6.00／4.46MB、人物 4.69〜4.80／4.41〜4.49MB、news 9.57／9.55MB。inspect（top）FAIL 5／WARN 10。

### 『ドラゴンクエストVII Reimagined』公式（https://www.dragonquest.jp/dq7r/ ・2026-11-25 解剖、2026-02-05 発売〔Steam は 2-06〕・国内〔スクウェア・エニックス〕。歩いた5ページ：/・/story/・/character/maribel.html・/news/・/reimagined/。購入は top の #products で独立したページなし）
- **枠**：自前の HTML＋jQuery 3.6＋GSAP（ScrollTrigger・ScrollTo・CustomEase）・Swiper・Magnific Popup（vendor.js 296KB）。ナビ・見出し・タブ・札をぜんぶ「金の額縁のゲームの窓」の画像でそろえる：ナビの額縁 1440×76 に札 135×53 ×9（英字小＋日本語、いまのページは緑の面）、見出しの札 461×165（全ページ同じ形）、お知らせの札 405×366（二重の金の縁・生成り #e3d399）、地は緑のフェルト #154517。色は画像の中にあり、CSS の色は #000（34回）と mask の透明度ばかり。
- **最初の画面**：静止画のキービジュアルを背景・船・しぶきの3層に分け（744＋665＋444KB）、ロゴ 710×375 を中央上、左上に機種6つの画像 638×60、「好評発売中」314×71、「はじめての人向け」の巻物の札 342×153（→ /beginner/）、体験版の箱 336×390（機種6つのボタン 240×27、機種の色 #ce0101・#026fbc・#029919・#524589、「詳しくはこちら」で商品情報の体験版のタブを選んでから飛ぶ）、右に縦書きの言葉 2行（mask で下から 3s）。発売日は最初の画面に無い。ローディングの GIF のあと 0.5s 待って約 4.5s の入場、船は 3s ずつ yoyo で揺れ続ける。
- **動画**：video・iframe 0。予告8本は YouTube の watch へのリンクで、押して Magnific が embed（autoplay=1・rel=0）。読み込み＋8秒の YouTube の通信 0件。
- **キャラクター**：6人を1人1URL（/character/kiefer.html …）、title に名前、前後の矢印 75×416（SP 31×354、a の中が空で名前なし）は一周、下に顔のメダル 149×131 ×6（SP 103×90 の3列）。背景は人ごと（マリベルは海の中、ガボは山）。名前と CV は1枚の画像（alt に両方）、紹介文も画像。切り替えはページの読み直しで 2.2〜2.5s・+666〜1,366KB、入場は背景 scaleY 0.8s → 立ち絵 x −40・blur 10px 1.4s → 名前 1s。
- **買う**：機種のタブ8つ（Switch 2・Switch・PS5・Xbox/Windows・Steam・体験版・DLC・特典早見表）→ その機種で選べる版のタブ（5・5・5・2・2、残り3つは版のタブを隠す）→ 版の1枚 → 店ごとの特典の札。機種ごとに最後に選んだ版を覚える（Switch 2 でデジタルデラックス → PS5 → Switch 2 でデジタルデラックスのまま）。押して 59〜92ms・0KB。版のタブは 0.2s で消して入れ替え、高さを 0.3s で合わせ、新しい1枚は y 2em・scale 1.05 から 0.6s。`?product=ps5` を読むが押しても書かない。タブはすべて div（tabIndex −1、role なし）。値段は画像だけで、通常版の画像 8,778円に alt は8か所とも 8,878円（e-STORE の値は 8,778）。店ごとの特典は店の色の札（e-STORE #2681ac・Amazon #c16708・イオン #b3007e）で、配り終えた札も「特典の配布は終了いたしました」（22.5px・600・#dedede）を重ねて残す。会社共通ヘッダーの「ご予約・ご購入はこちら」（span の画像）は5商品×店の文字リンクの横送り。
- **ニュース**：会社サーバーの list.json（18件：お知らせ10・キャンペーン2・ムービー6）を3列で一度に。タブ4つ（すべて 緑・お知らせ 赤・キャンペーン 橙・ムービー 青、325×56 の div）は札の種類の色とそろえ、件数0の種類は押せない（最初は全部 --disabled、データにある種類だけ外す）。押して 58〜113ms・0KB、URL は変わらない。サムネは原寸（3840 幅 2,049KB を 361px）。
- **表記**：CERO B は会社フッターの画像と仕様の画像の alt。仕様（機種・言語〔機種ごと2通り〕・発売日・CERO）は1枚の画像。物語の8行も画像で alt=""（本文 0字）。JSON-LD 0、h1・h2 は全部 img。
- **安全と重さ**：reduced-motion 0件（サイトの CSS 7本・JS 6本）、reduce でも船が揺れ続ける。Tab の最初の18手は閉じた購入の重ねの店リンク、40手とも outline none。字は全部 vw で SP の日付・注記 10.4px、body に書体なし。Google Fonts（M PLUS 1p 6太さ＋Noto Sans JP 4太さ）の CSS 1,113KB を全ページ。measure.js：top PC 24.47／SP 18.63MB、story 3.44、chara 4.49、news 10.02（サムネ JPEG 6,570KB）、reimagined 8.08MB。PC のローディングが消えるまで 16.8s（この環境）。

## 真似る型（Z-A・P3R・Expedition 33・Baldur's Gate 3・Sea of Stars・Cyberpunk 2077・FINAL FANTASY VII REBIRTH・ドラゴンクエストVII Reimagined の8つで確かめた）
- **機種×版の値段・発売日・年齢区分を、1か所に文字で並べる。**Z-A は商品詳細の仕様表（14項目の定義リスト）、P3R は全ページ末尾の SPEC（7項目、価格は全版を1つの欄に）。どちらも値段と CERO が文字で読めるのはそこだけだった。作るときは、その表を購入の区画にも置き、年齢区分を値段の横に出す。
- **パッケージの買う先は、ストアのボタン1つでなく店の一覧にする。**Z-A はダウンロードカード16チェーン＋ダウンロード番号6ショップの店名リスト、P3R は26店のカード（店舗オリジナル特典つき）を PS5／PS4 で切り替え。店ごとの特典があるなら、店のカードに特典名と版のボタンを入れる。ボタンの名前には店・版・機種を書く（P3R は117個とも名前が無い）。
- **版は「パッケージ／ダウンロード」の2つのタブか区画で分ける。**Z-A は商品5枚を1つの詳細ページの `#anc01〜04` に分け、価格をパッケージ・DL・Switch 2 Edition の別に書く、P3R は 640×60 のタブ2つ。限定版の同梱物は版×品の ○×表にする（P3R：4版×6品）。
- **トップの最初の数画面に「購入」への入口を置く。**Z-A は左の縦帯に「購入はこちら！」「予約はこちら！」、P3R は2画面目（y=1,139）に「BUY NOW!」。特設ページは「購入はこちら」を固定する（P3R：/expansion/ 300×97、/switch2/ 257×51）。
- **最初の画面の真下に機種のリンクを並べ、ヘッダーの右端に買う入口を1つだけ別扱いで置く。**Expedition 33 は AVAILABLE NOW の帯の直下 y=828 に機種4つ（234×91）、ヘッダーは他 15px に対して Out Now だけ 20px の札（132×56）で、▾ の button（aria-expanded）から店4つ（100×41、新しいタブ）。Baldur's Gate 3 も AVAILABLE NOW の下 y 745〜751 に機種5つ、ヘッダー右に Buy now 144×58。Cyberpunk 2077 も題の下 y=584 に機種のロゴ8つ（高さ 32px・2段）、ナビ右端に BUY NOW 140×38 だけ地を塗る。Z-A の縦帯・P3R の2画面目の BUY NOW! と同じく、入口は最初の数画面に。
- **版×品の比較は、PC は表、SP は版ごとに開く。**P3R は 4版×6品の ○×（ul と背景の絵）、Expedition 33 は 4版×6品（PC は画像1枚、SP は 362×46 の button 4つで1つだけ開く）。どちらも表が文字の table でないので、作るときは table と `button[aria-expanded]` を同じデータから作る。
- **トレーラーは押してから埋め込む。**Z-A はサムネの `<button>` を押して `iframe_api`、Expedition 33 は菱形の再生を押して `iframe_api` → `autoplay=1&mute=1`。どちらも押す前の YouTube の通信は 0（P3R は読み込み時に iframe で 1.5MB）。Baldur's Gate 3 も再生の輪を押して embed の iframe（押す前 0件、押して 1,155KB）。 Sea of Stars も `a.magnific-video` を押して 100ms で embed（押す前 0件、押して 1,406KB）。Cyberpunk 2077 は埋め込まず YouTube の watch へ新しいタブで（押す前 0件）。 FINAL FANTASY VII REBIRTH（2026-11-21）も押す前 0件、押して 150ms で embed（Magnific Popup）。
- **人物は一覧の列と1人の詳細を同じ画面に置く。**Baldur's Gate 3 は右の縦の列 7人と能力の札（押して 35ms）、Sea of Stars は上にドット絵のタブ 6つ（150×146）と下に名前 52px の詳細（押して 73ms）。Cyberpunk 2077 は横一列の立ち絵 6人（240×540）の名前の札を押すと、その場で 350ms で名前 44px・文 22px が開く。3つとも URL がそのまま・札が button でないので、作るときは名前のある button と `?chara=`（pushState）を足す。
- **買うは「版 → 機種 → 形 → 店」の段で選ばせ、版に無い機種・形は出さない。**Baldur's Gate 3 は版3つで同梱物と店が替わり Physical では Steam・GOG が消える、Cyberpunk 2077 は版3つ→機種（Ultimate 5・本編 6）→ Digital／Retail → 店（押して 58ms）。どちらも値段0件・選んだ値が URL に残らない・版の部品に Tab が届かないので、作るときは版と機種を button（aria-pressed）にし、値段を出し、`?edition=&platform=` に残す。 FINAL FANTASY VII REBIRTH（2026-11-21）は逆の「機種 → 版 → 店」で、機種4つごとに出ている版だけを残す（Switch 2 3・Xbox 2・PS5 6・PC 3）。機種が4つ以上で版の揃い方が機種ごとに違うときは機種を先に、版が主役（Ultimate・拡張）のときは版を先に。FF7 は値段を会社共通の API の23件から文字で入れており、値段0件の2つより一歩進んでいる。

- **人物は1人1URL にし、顔の札を陣営→小見出しで分けて詳細の下に常に置く。**Z-A は3グループ（5・2・14人）で1人1ページ、FINAL FANTASY VII REBIRTH は「仲間たち 9」「神羅カンパニー（統べる者1・タークス4・ソルジャー2）」の見出しの下に 31.5px の顔の札16個を、どの人物のページにも出す（swup で 650ms）。札は名前のある a にし、今の人に aria-current を付ける（FF7 は class だけ）。

- **機種を先に選ばせ、その機種で出ている版だけを出し、機種ごとに選んだ版を覚える。**FINAL FANTASY VII REBIRTH は機種4 → 版（3・2・6・3、出ない版は width 0）、ドラゴンクエストVII Reimagined は機種8 → 版（5・5・5・2・2、体験版・DLC・特典早見表は版を隠す）で、機種を行き来しても版が残る（押して 59〜92ms・0KB）。作るときは role="tab" と矢印キー、選んだ機種と版を `?product=&edition=` に書く（DQVII R は読むだけ）。
- **ニュースの種類（や機種）の札は、0件になるものを押せなくする。**FINAL FANTASY VII REBIRTH は機種の札（opacity .5）、ドラゴンクエストVII Reimagined は種類のタブ（JSON にある種類だけ --disabled を外す）。DQVII R はタブの色（緑・赤・橙・青）と札の種類の色をそろえる。作るときは件数を札に書き、disabled の字も 4.5:1 を保つ。
- **全ページの部品を、作品の世界の1つの形にそろえる。**Cyberpunk 2077 は角を落とした cp-btn 232×48 と切り欠きのナビ、ドラゴンクエストVII Reimagined はゲームの窓の金の額縁（ナビ 1440×76・見出し 461×165・お知らせの札 405×366）と緑のフェルトの地。ただし DQVII R のように字まで画像にしない（値段・物語が読めない）。
- **最初の画面に体験版の箱を、機種のボタンごと置く。**ドラゴンクエストVII Reimagined：336×390 に機種6つ（240×27、機種の色）と「詳しく」→ 商品情報の体験版のタブ。FINAL FANTASY VII REBIRTH：最初の画面の右下に体験版の箱 413×139（Switch 2・Xbox の2ボタン）。

## 真似る候補（見本1つ。2つ目で確かめたら「真似る型」へ上げる）
- 3部作・シリーズの帯を全ページの最上段に置き、本作の色を替える（FINAL FANTASY VII REBIRTH：73px、1作 480×34、作の色 #107c0f・#850303・#013f99）。まだ出ていない作はリンクにしない。
- 値段は会社共通の値段の表（API）から文字で入れ、版の札とは別に持つ（FINAL FANTASY VII REBIRTH：/pricelist/api/public/product/36 の23件、data-priceid で結ぶ）。値段の改定が全ページに一度で効く。
- ニュースの記事ごとに対象機種のフラグを持たせ、カードに機種の札を出し、機種で絞る（FINAL FANTASY VII REBIRTH：50件。0件の札を押せなくする所は「真似る型」へ上げた）。種類と機種はどちらを押しても互いに残す（FF7 は種類で機種が戻るので直す）。
- 物語の章に、押すと意味が出る言葉の札を4つ置く（FINAL FANTASY VII REBIRTH：#神羅カンパニー・#セフィロス・#クラウド・#鋼鉄の都市ミッドガル、.23s）。札は button と aria-pressed に。
- 人物相関図など先の話を含む物は、開く前に「ネタバレを含みます。開きますか」を挟む（FINAL FANTASY VII REBIRTH）。dialog にして Esc とフォーカスを戻す。
- 機種ごとの違い（携帯モード・PS5 Pro・Steam Deck）を、買う欄の手前に機種ごと3項目で並べる（FINAL FANTASY VII REBIRTH の byPlatformSec）。
- 人物を作品の書類の形で見せる：固有名を帯で隠し、開くと読める。下に署名と日付の空欄（Cyberpunk 2077 の Phantom Liberty の DOSSIERS）。
- 割引はページ上の札と、機種・店のボタンの角の札の2か所に（Cyberpunk 2077：DISCOUNTS UP TO -50% と PS5 の角の -50%）。
- 発売から時間のたった作品は、最初の画面に発売日の代わりにプレスの評3つ、紹介のタブの先頭に最新の無料更新（Cyberpunk 2077）。
- 全ページの下端に、音楽プレーヤーとストア6つを1本の固定の帯で（Sea of Stars：PC 1090×70、SP 390×58 はストアだけ。ストアは aria-label 付き）。作るときは音は押してから取り、動画を開いたら止める。
- 世界のしくみ（昼夜）を、回せるつまみで見せる（Sea of Stars：99 コマ、直径 566px）。作るときはつまみを `role="slider"` と矢印キーに。
- 終わった作品のお知らせは、FAQ の1問に更新の歴史を年つきでまとめ「これ以上の予定なし」と書く（Sea of Stars）。
- 版を選ぶと、箱の絵・同梱物・店のリンクの行き先が一緒に替わる（Baldur's Gate 3：Standard 1行・Digital Deluxe 6行・Physical Deluxe 9行、Physical は Steam・GOG が消えて3つ。92ms。段の選び方は Cyberpunk 2077 でも確かめて真似る型へ）。作るときは版を button（aria-pressed）にし、消すだけでなく理由と代わりの版を書き、値段を出す。
- 版を選んだ状態をハッシュで指せる（Baldur's Gate 3：`#buy-standard`・`#buy-dde`・`#buy-de`）。
- 年齢区分を地域ごとに並べる（Baldur's Gate 3：ESRB・PEGI・USK・ACB の4つに地域名。ただしフッターだけで画像に alt なし）。
- 人物のタブは `role="tab"` の roving tabindex（選んだ札だけ 0、← → でフォーカス）にし、選んだ札は面を抜いて文字だけにする（Expedition 33：8人、高さ 30px、他の札は #ECCFA3 の面）。ただし URL は変えていないので、作るときは #名前 を足す。
- 写真・動画を作品の画風の縁（Expedition 33 は絵の具のかすれの PNG）で切り抜き、見出しを1つの記号（« »）で挟んで、全ページの部品をそろえる。
- ニュースは種類のタブに件数を出し、12件ずつ増やす（Z-A）。
- 人物ごとに色を1つ決め、一覧の地と詳細の面を同じ色で塗る。選ばれていない人は単色にする（P3R：11色、`_off` 画像）。文字は濃紺（#1d384a なら全色で 4.46 以上）。
- 人物の詳細は「名前（一番大きく）→ CV → PROFILE → 紹介5〜7行 → 動画と画像」（P3R：39px 700 字間 3px、紹介 17px／1.9）。
- 作品のモチーフ（P3R は水）をローディングとモーダルの縁の部品にする。SVG の path 1本を速さ違いで4回使う（3・5.5・13・20秒）。

- 店ごとの特典は店の色の札で縦に並べ、配り終えた札も消さずに「配布終了」を重ねて残す（ドラゴンクエストVII Reimagined：e-STORE #2681ac・Amazon #c16708・イオン #b3007e、終了は 22.5px・600・#dedede）。
- シリーズの古い作品の作り直しは、最初の画面に「はじめての人向け」の入口を置く（ドラゴンクエストVII Reimagined：巻物の札 342×153 → /beginner/）。
- 人物の詳細の背景を人ごとの場所にする（ドラゴンクエストVII Reimagined：マリベルは海の中、ガボは山）。

## 反面教師
- 値段の画像と alt が食い違う（ドラゴンクエストVII Reimagined：画像 8,778円・alt 8,878円が8か所）。物語の8行を alt="" の画像にする（同 /story/、本文 0字）。
- 閉じている購入の重ねの店リンク18個が、Tab の最初に入る（ドラゴンクエストVII Reimagined の会社共通ヘッダー）。閉じた重ねは inert に。
- 買う導線に値段を1つも出さない。店のデータ70行にも値段の項目が無い（Cyberpunk 2077 の /buy）。版を選ぶ3つの箱が `div` で Tab が届かず、機種のボタン5つはロゴが背景の絵で名前が無い（同）。
- ニュースレターの欄のために、全ページで reCAPTCHA 3,384KB を読み込み時に取る（Cyberpunk 2077、buy の 61%）。
- 4ページの title が同じ文、拡張と購入のページに h1 が無い（Cyberpunk 2077）。年齢区分がフッターの背景の絵だけ（同：ESRB M）。
- 図鑑を1件1URLにしても replaceState で替え、戻るでサイトの外へ出る。知らない名前を 404 にせず最初の人へ送る（Sea of Stars の Compendium）。発売後も図鑑の下が「Wishlist」のまま（同）。
- 見えない区画の動画7本を読み込み後に全部取り、SP では全部再生する（Sea of Stars：SP 24.4MB）。
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
- 値段は出るのに店のボタンが無い版を、販売終了とも書かずに残す（FINAL FANTASY VII REBIRTH：PS5 の Deluxe 15,800円・Collector's 49,800円は体験版のボタンだけ）。終わったなら「受付を終えました（日付）」の押せないボタンを置く。
- 見えない区画の mp4 まで SP で全部取り、SP が PC より重い（FINAL FANTASY VII REBIRTH：top SP 54.57MB／PC 34.69MB、mp4 9本 38,546KB。SP 用の属性があるのに main story は _pc の mp4）。
