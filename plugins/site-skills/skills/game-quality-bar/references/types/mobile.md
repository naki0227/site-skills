# スマホゲーム（iOS・Android のゲーム）

## この下位タイプで特に見ること
ストアボタン、事前登録の報酬と人数、運営のお知らせ

## 見本の実測

### ウマ娘 プリティーダービー 公式ポータル（https://umamusume.jp/ ・2026-10-26 解剖、2021年配信の運営中タイトル。歩いた5ページ：/・/about/・/character/specialweek・/news/・/contents/game/、ほかに一覧 /character/）
- **枠**：Nuxt の SPA。全ページ「ローディング（全面・白）→ 固定ヘッダー 48.75px（SP 60px、青 #2a5dfa 系、右端に濃紺 #20283b の WebStore 156px）→ 本文 → 青い帯『ダウンロードはこちら』＋ストア5つ → フッター #efecfb」。文字の大きさは vw（PC は 1920px 幅基準：1.0416667vw ＝ 1440px で 15px、1920px 以上は px 固定。SP は 375px 基準：3.4666667vw ＝ 390px で 13.52px）。
- **ローディング**：HTML に直書きの50人の webp から `Math.random()` で1人（PC 188px／SP 130px の丸）＋蹄鉄の点14個（1.5s 無限）。top PC は 1,148ms で出て 2,630ms で引っ込み、3,833ms で消える。どのページも毎回出る（PC 3.1〜3.8s、一覧 6.6s）。
- **最初の画面（top PC）**：左に幅 199px の青い列（ロゴ2行＋縦メニュー7項目＋SNS3つ）、右にキービジュアル（kv_pc.jpg 924KB、高さ 717px）、タイトルロゴは KV 左下、右上に課金ストアのバナー 213×80、右下に縦書き SCROLL。固定ヘッダーは top だけ隠し、ScrollTrigger `start:"top-=10"` で 0.6s `cubic-bezier(.19,1,.22,1)` で降ろす。発売日・対応機種・ストアボタンは最初の画面に無い（top のストアボタンは y=2,960）。
- **区画の見出し**：skewX(−15deg) の色札（中は +15deg で戻し、英字 Raleway italic 34.5px）＋同じ色の枠 4px の箱。6区画6色：News #ff79d0／About #3cb032／Contents #4caeff／Character #8c83ff／Special #ff712f／Goods #ffc833。札は clip-path inset で 0.4s（0.3s 遅れ）、箱は y 37.5px から 0.5〜0.7s。IntersectionObserver rootMargin −20% で1回だけ。
- **キャラクター詳細**：1人1URL（`/character/specialweek`）。左 57% に立ち絵 510×897（元 1125×1980）と縦書きの台詞、右に英字名 → 名前 48px 700 −.05em（SP 33.28px）→「CV：〇〇」24px＋ボイスの丸 27.8px → プロフィール4行（札 131×18、リボン形 clip-path）→ 紹介文 → 紹介動画のサムネ 420×236。人物色は要素の style の `--color-main`／`--color-sub`（スペシャルウィーク #EE6DCB/#FFDEF9、サイレンススズカ main #29BD70）で、背景の斜めの帯・札・ボイス・枠を塗る。VISUAL CHANGE は丸 99px（SP 91px）×4（制服・勝負服・原案・STARTING FUTURE）、4枚とも最初に取得、切り替え 66〜356ms・通信 0KB。ボイスは押すと mp3（119KB）を `audio.play()`。前後の矢印 34×51（左右端の上下中央、SP は下に 32px の丸）は本物のリンクで端で一周（最初の前は最後の人）。「一覧に戻る」368×68 #8c83ff。JSON-LD Person（url が `undefined/…` と壊れている）。
- **キャラクター一覧**：175人を2グループ（146＋29）、PC 7列、カード 154×248（人物色の地・右端に白い帯の縦書き英字名・下に名前と CV・人物色の影）。並べ替え5種（デフォルト／名前 昇降／身長 昇降）、検索モーダル（フリーワード＋身長 135〜180cm の範囲）。画像 198枚中 175枚 lazy。グループ見出しは画像で、2つ目（その他）の alt も「ウマ娘」。
- **ニュース**：種類は GAME／MEDIA の2つ。タブは本物のリンク（`/news?t=game`、PC 263×40・角 40px、選択中 #ff79d0）、10件ずつ・34ページ（`?p=2`）。カードは白・角 9px、ラベル 187×28.5（GAME #b5d913・MEDIA #ff911c、日付も同色）。後から書き足したお知らせは公開日の上に「[追記] 日時」の #4d4d4d の帯（不具合・脆弱性の連絡など）。SP はタブが選択の部品 346×36 に変わる。
- **世界観（/about/）**：文字入りの動画（74.5MB、`muted loop playsinline preload=metadata`、poster なし、JS で再生）→ `.js-pin` を 10画面ぶんピン留めして4場面を `snap(1/3)` で切り替え、右端に点4つ（今の場面だけ蹄鉄）と SCROLL（+3画面を 0.3s）。場面2 は左の画像の列を y −50% 50s で流す（900px 以上だけ）、場面3 は地 #ff6ecb＋黄 #ffee48 の帯＋蹄鉄の粒（tsParticles 8個）。本文 18px・行間 2.3・字間 .06em。
- **ストア・課金**：ストアボタン5つ（App Store・Google Play・DMM GAMES・Steam・Google Play Games〔PC〕）を全ページのフッター直前の帯（PC 高さ 68px で1行、SP 47〜50px で 2・2・1）と、/contents/game/ の動画の下端（PC 60px）に置く。全部 `target="_blank"`、img に alt なし。課金（Cygames WebStore のジュエル）はヘッダー右端・KV 右上のバナー・SP メニューの3か所。事前登録は無い（配信中）。
- **表記**：年齢区分・価格（基本無料・課金）は歩いたページに無い。権利はフッターの「利用規約・権利表記」リンクだけ。`lang="ja"`、hreflang なし、英語版は別サイト。5ページとも h1 が無い。
- **動き**：GSAP 3.12.3＋ScrollTrigger、Splide（バナー `type:"loop", autoplay:true, perPage:4`、900px 未満 1.5枚 center）、tsParticles。CSS の transition は .5s 79回・.3s 37回、イージングは `cubic-bezier(.19,1,.22,1)` 141回。ボタンは transform .3s `(.175,.885,.32,1.275)` で弾む。`prefers-reduced-motion` はサイトに 0件（Splide の内蔵だけで、reduce ではスライダーだけ止まる）。
- **重さ**（CDP 転送、読み込み後10秒、解析タグ除く）：top PC 8.98MB／SP 6.71MB、world 57.95／58.37MB（動画 44.2／50.4MB、15秒で 104.5MB）、chara 4.61／3.07MB、news 4.17／2.63MB、buy 22.12／22.44MB（動画 16.6／18.5MB）。全ページ HTML に `__NUXT_DATA__` 529KB、背景 bg.jpg 1,347KB。YouTube はサムネだけで押すまで埋め込まない。

### ゼンレスゾーンゼロ 海外公式（https://zenless.hoyoverse.com/en-us/main ・2026-10-29 解剖、2024年配信の運営中タイトル。iOS・Android・PC・PS5・Xbox。歩いた5ページ：/en-us/main・/en-us/world・/en-us/character?id=166651・/en-us/news・/en-us/〔ドメインの / の行き先〕）
- **枠**：Nuxt。`/` は cookie `mi18nLang`（無ければ en-us）で `/en-us/`（Version 3.3 の告知。1440×810 の16:9 の舞台・7画面ホイール・背景動画）へ、本体は `/en-us/main`。SP は iPhone の UA で `/m/en-us/…` の別の作り。html の font-size を JS で決め、1440px で 1rem＝56.25px。ヘッダー固定 56px・黒、章は `<nav>` 要素（リンクでない）。5ページとも h1〜h3 が 0。
- **ローディング**：白地に「NOW LOADING」とバンブーの連番 30コマ（`steps(30)` 0.5s）。PC top は 1.3秒で出て 7.0秒で消える（reduce でも 6.1秒）。その7秒で 118.6MB を取り切る。
- **最初の画面（PC）**：KV 1080×864（Cunning Hares）、左上に大きなロゴ、左に再生ボタン 45px、下端 y=541〜641 に ESRB 153×98（T・内容記述4つ・In-Game Purchases (Includes Random Items)・Users Interact）・QR 94×94・ストア 131×41 を 4＋3（PS5・Xbox・App Store・Google Play／HoYoPlay・Epic・Steam）。右端に縦の章送り（45×200、いまの番号 #d8fa00）。全部 alt 空の img で、ストアはリンクでも button でもない（Tab が届かない）。SP の最初の画面はヘッダーの DOWNLOAD NOW（画像 122×35）だけで ESRB・ストアは無い。
- **入手のモーダル**：全ページのヘッダー右「Download Now」93×25（#d8fa00・角 67.5px・11.25px 700）→ 72ms・120KB で 1035×377 のモーダル（題 28px・QR・ストア 4＋3・外の右下に ESRB 251×160）。Esc では閉じない（× だけ）。SP の DOWNLOAD NOW は新しいタブを開く。
- **章の番号**：トップの章 Characters 02・Videos 03・News & Info 04・Background 05・Game Features 06 の札（Impact 36.56px＋番号 104.6px、地 #d8fa00、文字 #222122）を、下層ページの左上にも同じ番号で出す。
- **キャラクター**：65人を「陣営 22 → 人」の2段。右端に陣営の縦の列（164×730、1枠 148×204、More Factions で 4列の一覧）、下に同じ陣営の人の平行四辺形のサムネ。1人1URL（`?id=166651`）で題も「Robin | Zenless Zone Zero Official Site」。同じ陣営の人へは 488ms・0KB、別の陣営へは約3秒・4,881KB。名前 45px/54px（hongmengti）→ CV の行（マイク 32px・CV 名 11.25px 700・言語の札 EN）→ 属性と特性のアイコン 26px×2 → 台詞 15.75px → 「ほかの人物からの一言」12.375px/22.5px #a6a6a6（Robin 4件、高さを決めてスクロール）。人物の色は `.character-color-block`（15rem 角・skewX(−45deg)・background-color .3s）と章札の地（Robin #b3acf1・Kafka #df267c・Severian #1566b8 ほか）。サムネ・陣営・マイク・言語は全部 div（tabIndex −1）。言語の札は押しても EN のまま。
- **ボイスと BGM**：BGM は Howler の mp3 3,429KB を全ページで読み込み時に取り、loop・音量 0.8。AudioContext が suspended のうちは鳴らないが、ページのどこかを1回クリックすると鳴り始める。BGM のアイコンは鳴っている間 heartbeat 0.8s。KV のトレーラーは押してから YouTube の iframe（720×405、1,268KB）で、開いている間 BGM の volume を 0 に下げる。ボイスは人物ページの読み込み時に取り（約 293KB）、マイクを押すと再生、再生中にもう一度押すと次の台詞（`switchSubCv`）。マイクの中は GSAP の `--progress` を1秒周期で揺らす。
- **ニュース**：種類タブ Latest・News・Notices・Events は本物の a（`?category=295`／296／297）。先頭に「Signal Search Probability Details」（ガチャの提供割合、2024/07/04、URL `/news/public`）を固定。PC は9件・180ページで、ページ送りは href の無い a（2ページ目でも URL が変わらない）。SP は10件＋Load More。種類の札 6.75px。
- **世界観（/en-us/world）**：ぼかした背景の上にカード3枚（Hollow・Bangboo・The City Life、中央 299×545・左右 207×377）の横送り。説明は 9px・#7a7979 on #000。
- **表記**：ESRB は最初の画面・モーダル・フッター・入口の4か所（どれも img・alt 空）。フッターに SIE・Epic の商標の注記と「Copyright © COGNOSPHERE」。言語は地球の丸のボタン。値段は無く、課金は More → Top-Up（`/payment`）。
- **動き**：ヘッダーのピル background・color・transform .5s、人物色 .3s、言語のつまみ left .2s ease-in-out、ニュースの題の流れ wordsLoop 20s linear。`prefers-reduced-motion` は5ページの CSS に 0件。入口の背景動画 9,542KB は reduce でも再生。
- **重さ**（measure.js、解析タグ除く）：top PC 116.06MB（291件）／SP 62.81MB、world 14.88／14.82MB、chara 17.69／14.79MB、news 15.62／15.62MB、入口 /en-us/ 44.62／16.30MB（同じ mp3 6,088KB を2回）。top の PNG 99,094KB のうち、横送りの65人ぶんの絵 149枚が 92.1MB。全ページで hongmengti.woff2 3,747KB（font-display: block）・JS 3,507KB・BGM 3,429KB。

### 学園アイドルマスター 公式（https://gakuen.idolmaster-official.jp/ ・2026-11-01 解剖、2024-05-16 配信の運営中タイトル。App Store・Google Play・DMM GAMES。歩いた5ページ：/・/introduction/・/idol/・/idol/kotone/・レーベル公式 gakuen-label.idolmaster-official.jp/news）
- **枠**：WordPress＋jQuery・Swiper。全ページ「ローディング（load の 500ms 後、上限 4s）→ 固定ヘッダー（#ff7600 の帯・右下だけ角丸）→ 本文 → 下層5つへのカード → フッター（ランダムな生徒1人＋ストア＋仕様表）→ バンダイナムコの共通フッター」。文字は全部 vw（PC 1400px 基準 1vw＝14px、SP 375px 基準 3.2vw＝12px）で、SP の紹介文・動画の題は 10.4px。h1 は全ページでロゴの画像（alt「学園アイドルマスター」）、人名は div。
- **ナビ**：5項目すべてを学園の言葉に、英字で役割：学園長挨拶 / Introduction・プロデューサー科 / Game System・学園名簿 / Idol・学園案内 / Media・在校生のみなさまへ / Road to A+。ヘッダー・下層の下のカード・フッターで同じ5つ。SP は MENU ボタン、文字を 200ms 消して CLOSE に。
- **最初の画面**：角丸の枠（左上だけ大きく丸い）に無音のループ動画（PC 1236×661・mv_pc.mp4 4,447,616B／SP 353×206・mv.mp4 1,786,639B、load の後に幅 750px を境に片方だけ src、poster なし、止めるボタンなし）、左に縦書きのコピー（画像）、中央に校章。配信日・価格は無いが、左下に固定の帯（PC 545×218：WEB SHOP 411×84＋QR＋App Store・Google Play・DMM GAMES／SP 302×180）。帯はフッターが見えたら消す（毎フレームの scroll ハンドラ、transition .4s）。
- **動画**：トップの「初星学園公式動画」は playlist.json の最新4本を YouTube へのリンクにする（埋め込まない、サムネ 829KB）。人物の「紹介PV」「3D view」は `a.js-modal` を押した時に `youtube-nocookie.com/embed` の iframe を作る（PC 85ms・SP 72ms、押す前 0B）。Shorts は縦長のモーダル（PC 337×600）。閉じると 100ms で中身を空に。Esc では閉じず、閉じるは `a`「CLOSE」。
- **キャラクター**：一覧ページは無く、/idol/ が花海咲季の詳細。1人1URL（`/idol/kotone/`、title も人名）。左に立ち絵（黄の帯の縦書きの台詞・丸 82px の 3D view）、右にリング穴の付いた「名簿の紙」：英字名 → 名前（PC 65.83px・200・字間 .06em／SP 41.6px）→ CV（16.46px・.3em）→ 自己紹介1・2 → プロフィール11項目の表 → 紹介文（PC 14.4px・行間 2.93）→ 紹介PV → 「この生徒をシェアする」。ボイスは `a href="#"` を押した時に `new Audio('data/voice/kotone/voice_1.mp3')`（62,868B）、前の音は止める。下に名簿の帯（Swiper loop・loopedSlides 15、カード 174×244、今の人は opacity .3・pointer-events none）。次の人へはページ遷移（flow.js：SP 4,324ms・+662KB／PC 5,173ms・+859KB）。フッターの生徒は13人から `Math.random()` で1人。
- **入手**：買う・登録のページは無い。top 左下の固定の帯と全ページのフッターの QR＋ストア3つ（img の alt あり：「App Storeからダウンロード」「Google Playで手に入れよう」）。フッターの仕様表5項目：タイトル・ジャンル・価格（基本無料 ※一部有料アイテムがございます。）・配信プラットフォーム・配信日。
- **ニュース**：本体の /news/ は 301 でトップへ。運営のお知らせは本体に無い。トップから行けるレーベル公式（Next.js）の NEWS は音楽の発売だけで6件×14ページ、絞り込みなし。
- **表記**：年齢区分は5ページの HTML・JS に0件。権利は「THE IDOLM@STER™& ©Bandai Namco Entertainment Inc.」。JSON-LD 0件、lang="ja" のみ。
- **色と文字**：白・#f39800（126回）・#ff7600（61回）・文字 #535353（白地 7.69）。#f39800 の見出し・日付は白地で 2.26、ヘッダーの白文字は #ff7600 の上で 2.68。IBM Plex Sans JP（html の font-weight 200）・Zen Antique Soft（挨拶文 20.57px・行間 2.4・字間 .3em）・Poppins。Google Fonts の CSS 1本が展開後 1,249KB（転送 325KB）。
- **動き**：transition .4s が88回、keyframes 4つ。区画は `.scroll{opacity:0}` を毎回の scroll ハンドラで点ける。コピーは1字ずつ span。バナーは Swiper autoplay。`prefers-reduced-motion` は全ファイルで0件。`:focus{outline:0}`。
- **重さ**（measure.js）：top PC 10.85MB／SP 10.70MB（PNG 6,083KB。PC の mp4 は別の計測で 10秒に 8,853,632B をループで取り直し）、world 7.02／5.57MB、/idol/ 7.15／6.11MB、/idol/kotone/ 7.14／6.03MB、レーベル news 6.55／6.62MB（woff2 4,086KB）。全ページで three.min.js 400KB（学園案内の3Dの冊子用）・canvas-confetti・OneTrust 492KB を読む。

### 怪獣８号 THE GAME 公式（https://kj8-thegame.com/ ・2026-11-05 解剖、2025年配信の運営中タイトル〔2026-08 に1周年〕。iOS・Android・Steam。歩いた4ページ：/・/1stanniversary・サポート support.kj8-thegame.com/hc/ja・Web Store webstore.kj8-thegame.com/?language=ja。Web Design Clip 掲載）
- **枠**：Vite の1枚のトップに7章（TOP・TRAILER・CONCEPT・STORY・CHARACTER・SYSTEM・CAMPAIGN）＋SPEC・X・フッター。sitemap は /・/privacypolicy/・/terms/ だけで、世界観・人物・ニュースの別ページは無い。main.js 879KB に GSAP＋ScrollTrigger・Lenis・Swiper・keen-slider・three.js。html の font-size は PC `.7320644217vw`（1366px で 10px）／SP `min(2.5445vw,10px)`。768px をまたぐと `location.reload()`。
- **ナビ**：PC は右の固定の列（幅 13.32vw＝1440px で 192px、左 1px #5e625f、項目 8vh＝72px、今の章は #00eee0 の地に黒・比 14.31）に言語・章7つ・ストア3つ・Web Store の帯。横長（1366/620 より）のときは1章1画面の送り（ホイール |Δ|≥20・↑↓キー）。SP はハンバーガー 24.8×15.9（名前なし）で全画面の黒のメニュー。6言語は別 URL（/en/ ほか）。
- **最初の画面**：アニメの絵の KV、h1 はロゴ画像 422×188（KV の下中央、y624）と標語の画像。発売日・リリース日はページのどこにも無い。左下に1周年の札 230×182。SP は下端に「今すぐダウンロード」とボタン 108×40 を固定し、開くたびに Web Store のポップアップ（保存なし、閉じるは名前なし 30×30、Esc 不可）。PC は `?f=app` のときだけ。
- **ストア**：UA で出し分け。iPhone は App Store＋Steam、Android は Google Play＋Steam、PC は3つ（img の alt はストア名、本物のリンク）。トップに値段の文字は無く、SPEC の「価格：基本無料（アイテム課金制）」だけ。
- **Web Store**（Xsolla）：パック5・次元晶17を値段の文字（¥160〜¥30,000）・「あと1回」・「あと25日」・Web Storeボーナス ×150 と並べる。カードを押して 113ms で購入確認（品名・説明・獲得可能アイテム一覧〔数だけ〕・「価格：¥3,000」・Cancel/OK、サインインが要る）。Esc で閉じない。画像106枚とも alt なし。viewport は `user-scalable=no` だけ。Google Fonts の CSS 1本が 881KB（Noto Sans JP・TC・SC・KR・Noto Sans）。
- **動画**：TRAILER の枠は three.js の WebGL（780×439）で mp4 3本（各 1.3〜1.5MB）をテクスチャにしてサムネで切り替える。PLAY で初めて `youtube.com/embed/{id}?autoplay=1&enablejsapi=1`（押す前の YouTube 0件、押して PC 4,658KB）。背景・SYSTEM・人物の動画は `data-src`＋`preload="none"`＋poster。
- **キャラクター**：27人を keen-slider の横送りと全員の格子で切り替え（CHANGE VIEW、27.4×18.9 のボタン2つ・名前なし）。カードは `li`（Tab が届かない）。押して 262〜274ms で詳細のモーダル：左に立ち絵・[ BIRTHDAY ]・CV（Roboto Mono 12.65px の札）・名前（見出ゴ 900・PC 81.17px・#00eee0）・英字、右にゲーム内の動画（PLAY で本編 mp4・音あり）・紹介文（PC 13.70px／SP 12.90px）・[ LIKES ]。前後は PC 左右 40×351、SP 下の PREV/NEXT 146×36。role・aria-modal・フォーカス移動・Esc・URL（`#character` のまま）がどれも無い。次の人へ送ると サムネ mp4 1,954KB。
- **ローディング**：トレーラー3本のテクスチャを読み終えてから演出（ロゴ 1.4s＋blur 1.4s → 文字 .5s → 全体 1s）。この環境で PC 20.9〜22.7s・SP 22.7〜23.3s、その間に PC 19.3MB。reduce でも同じ。
- **表記**：年齢区分は4ページで0件。権利 ©防衛隊第３部隊 ©松本直也／集英社・©Akatsuki Games Inc.／TOHO CO., LTD.／Production I.G。ニュースは公式に無く、サポート（Zendesk）の「重要なお知らせ」1件だけ。1周年の特設（Astro）は lang="jp"、ただし `time datetime`・aria-label「X（別タブで開く）」・言語の aria-current は手本。
- **色と文字**：#000（89回）・#00eee0（82回）・#e6e9e9（53回）。英字の題 Source Sans 3 700（PC 75.90〜84.33px／SP 55.57px）、和文の見出し toppan-bunkyu-midashi-go-std 900（Adobe Fonts、OTF features=ALL 3,067KB）、札は Roboto Mono 12.65px、本文 noto-sans-cjk-jp。
- **動き**：GSAP の power2.out 49回・duration .6 が42回、CSS は .3s ease-out。題の右のカーソル text_flash、PLAY の丸の dotsRotate／frameRotate。`prefers-reduced-motion` は CSS・JS とも0件、SP は animation 850 が動く。Tab の12手とも outline none。
- **重さ**（measure.js、解析・広告を除く）：top PC 22.05MB／SP 16.50MB（webp 9,785KB・mp4 7,923KB・OTF 3,067KB）、/1stanniversary 3.90／3.46MB、サポート 0.90MB、Web Store 3.84MB。広告タグは別に Meta 1,778KB・TikTok 1,232KB・GTM 1,119KB（PC で操作した1回）。

## 真似る候補（1サイトだけで見たもの。2つ目で確かめたら「真似る型」へ上げる）
- 人物の色を CSS 変数2つ（main・sub）で持ち、詳細ページの面・札・ボタン・枠を全部それで塗る。テンプレートは1枚（ウマ娘）。
- 衣装・姿の切り替えは同じ枠で、丸いサムネに種類名を付ける（ウマ娘：4種・99px）。2枚目以降は押したときに読む方がよい。
- お知らせは種類2つのタブ（URL つき）と、後から書き足した日時の帯（ウマ娘：[追記]）。
- 区画の見出しを、区画ごとの色の斜めの札にし、下層ページの見出しにも同じ色を使う（ウマ娘：6区画6色）。
- 一覧に並べ替えと、題材の数値（身長など）の範囲検索を付ける（ウマ娘：5種・135〜180cm）。
- 章に番号を振り、トップの順・ヘッダーの順・下層ページの見出しの札の番号をそろえる。右端に縦の章送り（ZZZ：Characters 02〜Game Features 06、45×200）。
- 紹介文を「ほかの人物からの一言」（引用＋— 名前）で書く（ZZZ：Robin 4件）。
- トレーラーを開いている間、BGM を 0 に下げて閉じたら戻す（ZZZ：Howler 0.8 → 0）。
- ナビの項目を作品の世界の言葉にし、英字で役割を添える。ヘッダー・下層の下のカード・フッターで同じ項目（学マス：学園長挨拶 / Introduction ほか5つ）。
- 人物の詳細を、その世界の紙もの（名簿）の形にする。リング穴の列・英字名 → 名前 → CV → ボイス2つ → プロフィール表 → 紹介 → PV → シェア（学マス）。
- 詳細の下に全員の帯を置き、今の人を opacity .3 にする。一覧ページが無くても全員へ届く（学マス：15人のループ）。
- ページごとにフッターで別の人物を1人出し、その人の詳細へリンク（学マス：13人から1人）。
- 入手の帯を左下に固定し、フッターの仕様表が見えたら消す（学マス：PC 545×218／SP 302×180、.4s。作るときは IntersectionObserver で）。
- 端末の UA でストアの組を替える（怪獣８号：iPhone は App Store＋Steam、Android は Google Play＋Steam、PC は3つ）。作るときは、ほかの端末のストアへも1手で届くようにする。
- PC のナビを右の固定の列にし、章・ストア・課金ストアの帯を常に出す（怪獣８号：192px・項目 72px・今の章は主の色の地に黒）。
- 課金の買い物を Web Store に分け、値段・回数・期間を文字で、押すと購入確認に中身と価格（怪獣８号：¥160〜¥30,000・あと1回・あと25日、113ms）。
- 周年の特設は小さな別ページ（Astro）にし、配信の日時を `time datetime` で（怪獣８号 /1stanniversary 3.90MB）。

## 真似る型（ウマ娘・ゼンレスゾーンゼロ・学園アイドルマスター・怪獣８号 THE GAME で確かめた）
1. **入手の導線を全ページの同じ場所に置く。** ウマ娘はフッター直前のストア5つの帯（PC 68px 1行／SP 2・2・1）、ZZZ はヘッダー右の地色の丸「Download Now」（93×25）から 72ms のモーダル（QR＋ストア7つ＋ESRB）。学マスは全ページのフッターの QR＋ストア3つと、top 左下の固定の帯（PC 545×218）。怪獣８号は PC が右の固定の列にストア3つ、SP が下端の固定の帯（108×40）。どれも全ページ・全章で同じ位置。作るときは、ヘッダーのボタン → モーダル（Esc で閉じる）と、最初の画面の下端の列の2つを置く。
2. **最初の画面の下端に、ストアの全部と年齢区分の箱を1列に。** ZZZ：ESRB（区分・内容記述・In-Game Purchases (Includes Random Items)）＋QR＋ストア 4＋3。ウマ娘は最初の画面にストアが無かった（y=2,960）ので、ZZZ の置き方を採る。
3. **人物は1人1URL、人物の色を詳細の面に。** 怪獣８号は1人1URL が無く（詳細のモーダルで URL は #character のまま）、人に送れない反対の例。学マスも `/idol/kotone/`（title も人名）。ウマ娘 `/character/specialweek`＋`--color-main`/`--color-sub`、ZZZ `?id=166651`＋斜めの色の面（15rem 角・skewX(−45deg)）と章札。どちらも色の上の文字の比が足りない人がいる（ウマ娘の札 2.44〜2.73、ZZZ の Sunbringer 2.30）ので、文字は面に乗せないか色ごとに選ぶ。
4. **ボイスは CV 表記の横のボタンで。** ウマ娘 27.8px の丸（押して mp3 119KB）、ZZZ 32px のマイク（押すたびに次の台詞、再生中は帯が揺れる）。押すまで声を取らない方を採る（ウマ娘、学マス：`new Audio()` を押した時に作り 62,868B、前の音は止める）。学マスは自己紹介を2つ並べる。
5. **お知らせの種類タブは URL つきのリンク。** ウマ娘 `?t=game`、ZZZ `?category=295`。運営のお知らせ（ウマ娘の [追記] の帯、ZZZ のガチャ提供割合の先頭固定 `/news/public`）は一覧の中で目立たせる。
6. **人物が数十人を超えたら、まとまり（陣営・グループ）で先に絞る。** ウマ娘 175人を2グループ＋並べ替え5種＋身長の範囲、ZZZ 65人を陣営22 → 同じ陣営のサムネ。まとまりが無い数十人なら、横送りと全員の格子の2つの見え方を切り替える（怪獣８号 27人・CHANGE VIEW。ボタンには名前と aria-pressed を付ける）。

## 反面教師
- ページを移るたびに 3〜4 秒のローディング画面を出す（ウマ娘：top PC 3,833ms、一覧 6,556ms）。最初の1回だけにする。
- 年齢区分がどこにも無い（学マス：5ページで0件。仕様表に価格まであるのに対象年齢の行が無い）。
- 文字を全部 vw で縮め、SP の本文が 10.4px（学マス）。`:focus{outline:0}`（学マス）。
- 運営のお知らせを公式サイトに置かない（学マス：/news/ は 301 でトップへ、レーベルの NEWS は音楽だけ）。
- 3Dの冊子・紙吹雪の JS を、使わない全ページで読む（学マス：three.min.js 400KB＋canvas-confetti）。
- 世界観ページの冒頭に 74.5MB の動画を置いてすぐ再生する（ウマ娘：10秒で 44〜50MB）。poster を出し、押してから再生。
- 色札・ラベルの白文字が地と 1.5〜2.8（ウマ娘：GAME 1.63、Goods 1.55、人物の札 2.44〜2.73）。
- ストアボタン・ボイス・衣装の丸に名前が無い（ウマ娘：img の alt なし、`<a href="#">`）。人物名が h1 でない。
- 年齢区分と「基本無料・アイテム課金」の表記がストアボタンの近くに無い（ウマ娘）。
- 読み込み中に、見えない人物の大きな絵まで全部取る（ZZZ：65人ぶん 149枚・92.1MB をローディングの7秒で、top PC 116MB）。表示中と前後の3人だけ。
- ストアボタン・年齢区分を alt 空の img にし、リンクにしない（ZZZ：7つとも Tab が届かず outline: none）。モーダルが Esc で閉じない（ZZZ）。
- BGM のファイルを全ページで取り、ページのどこかを押しただけで鳴らす（ZZZ：3,429KB、最初のクリックで音量 0.8）。音のボタンを押してから取る。
- ページ送り・章のナビが href の無い a や `<nav>` 要素（ZZZ：2ページ目でも URL が変わらない）。
- 言語の札を押しても切り替わらない（ZZZ の EN）。
- ローディングが WebGL のテクスチャ（トレーラーの mp4 3本）と window の load を待ち、さらに演出を足す（怪獣８号：PC 20.9〜22.7s・その間 19.3MB）。最初の画面の絵だけで出す。
- 人物のカードが `li` で、詳細のモーダルも role・Esc・フォーカス・URL が無い（怪獣８号：27人とも）。カードは button、詳細は `<dialog>`、hash で1人を指す。
- 年齢区分も運営のお知らせも公式サイトに無い（怪獣８号：4ページで0件、お知らせはサポートの1件だけ）。
- 課金ストアの画像に alt が無く、拡大を禁じる（怪獣８号の Web Store：106枚・`user-scalable=no`）。
