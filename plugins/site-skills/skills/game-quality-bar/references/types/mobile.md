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

### プロジェクトセカイ カラフルステージ！ feat. 初音ミク 公式（https://pjsekai.sega.jp/ ・2026-11-09 解剖、2020年配信の運営中タイトル。iOS・Android。歩いた5ページ：/・/story/・/character/unite01/・/news/・/webstore、ほかに1人 /character/unite01/ichika/）
- **枠**：jQuery＋Swiper＋magnificPopup＋Lottie の静的 HTML。全ページ「ローディング（Lottie、地 `linear-gradient(90deg,#b3fffd,#e3e6ff,#fde5f5)`）→ 左上のロゴ h1・右上の白い丸のメニュー（PC 64×64／SP 41.6、`<p>` 要素）・PC だけ左の固定 SHARE 57×262 → 本文 → OFFICIAL SNS → 注記・権利」。文字は全部 vw（CSS の vw 2,904か所・rem 0）で 1400px 以上は px に固定。html の文字 #557（白の上 7.11）。
- **ローディング**：window の load を待つ（PC 6,188ms／SP 5,770ms）。セッションの Cookie `visit` があると、load の後さらに 1,200ms 待つ（2回目 2,277ms）。
- **最初の画面**：キービジュアル（`bg_pc.jpg.webp` 791KB、動画なし）・ロゴ h1 の画像 287×107（左上）・キャッチ h1 の画像 637×73（中央上）・右に `position:fixed` の「好評配信中！」の箱 220×409（アイコン・App Store 170×62.5・Google Play 170×63.5・公式ストア）・下にバナー9枚（297×106、5秒で自動送り、9枚とも alt 空）。SP はロゴが絵の下（y338）、箱は白い 265×81 にストア1つ、公式ストアは右の丸 97.5px（fixed）。発売日・価格・年齢区分は無い。
- **ストア**：UA で片方だけ（`DEVICE.isIos` で Google Play を、Android で App Store を `js-hide`）。PC は両方。2つとも同じ `app.adjust.com/2oye363`、img は alt 空でリンクの名前なし。下層ページの本文・フッターにストアボタンは0個（メニューの中に公式ストアのバナーだけ）。「基本無料」「アイテム課金」の文字はどのページにも無い。
- **キャラクター**：一覧 → 6ユニット → 1人の3段。ユニット `/character/unite01/` は5人の立ち絵を並べて1人ずつリンク（PC 260〜380×905〜930、名前と CV は画像の中で、リンクの名前は5つとも空）。1人1URL `/character/unite01/ichika/`（title も人名、名前は h2 56px 700／SP 37.44px、h1 はロゴと CHARACTER）。PROFILE 7項目・紹介文 16px/28px（SP 14.56px）・紹介動画（押して magnificPopup の iframe、サムネは YouTube の maxresdefault 255KB）。ボイスは無い。
- **PAST／NOW**：ユニットと1人のページに2つのボタン（240×45、選んだ方は #446 の地に #0cb 4.57）。立ち絵・縦書きの台詞・プロフィールの値（身長 161cm→162cm、学年 1-C→2-A）・紹介文・紹介動画・前後の矢印を両方 DOM に置き、`.js-change.past/.now` の display で替える。押すと opacity 0・translateY(30px) → 600ms で入れ替え → 800ms で戻す。`?year=past` は開いたときに読むだけで、押しても URL は変わらない。前後の矢印（PC 26×40、名前なし）は本物のリンクでユニットの中を一周（一歌の前は志歩・次は咲希、`#unit_logo`）、PAST 用は `?year=past` つき。flow.js：PAST 118ms・0KB、次の人 PC 5,903ms・+1,191KB／SP 3,303ms・+416KB。
- **人物の色**：ユニットの色 `.unite01`〜`05`＝#45d・#8d4・#e16・#f90・#849（バーチャル・シンガーは白の帯に #0cb）。ユニットのページの縦書きのコピー（51px 600、白文字）の帯を塗る。白文字の比は #45d 5.85・#849 6.30・#e16 4.28・#f90 2.14・#8d4 1.68。
- **ニュース**：`news.js` が `/master-data/json/news/index.json?now=時刻`（毎回キャッシュを外す）から、トップは6件・一覧は409件全部を li の clone で描く。サムネは CSS の background-image（372×210）で lazy 0、409枚を全部取る（最大 2,796KB）。一覧は PC 84.07MB・459件・高さ 54,687px、カードがそろうまで 3,627ms。カードの帯 32px に日付（Montserrat 14px 700）と種類の札（6種6色の gradient、白文字 2.08〜3.63）。絞り込みは右下の丸（`<p>` 64×64）→ 右の板 392px にカテゴリ7・公開時期8（a 155×32）、押して 81ms で hide／show。URL は変わらず、0件の文も無い。公開時期は 2025〜2019 だけで、2026年の52件を年で選べない。1件は `/news/archive/index.html?hash=…`。
- **公式ストア**（`/webstore`、Next.js、Colorful Palette 運営）：タブ3つ（button、URL は変わらない）・クリスタル9（￥160〜￥50,000、初回18〜20%増量の札）・ミッションパス3（[毎月更新]、セット ￥4,000→￥3,500）・エブリデイパス4。button の名前に札・品名・値段まで入る（「初回20%増量 クリスタルA ￥160 購入する」）。画像28枚とも alt あり、特定商取引法・資金決済法のリンクあり、年齢・未成年の文は0件。6.03MB（JS 1,351KB）。
- **表記**：年齢区分は6ページで0件。権利は © SEGA / © Colorful Palette Inc. / © Crypton Future Media, INC.、設定の注記1文、電気通信事業法の外部送信の表示。top の h1 が3つ（どれも画像）、JSON-LD 0件。
- **動き**：transition 110か所（.2s 60・.6s 8・.3s `cubic-bezier(.2,.65,.36,1)` 4）、keyframes 2。全ページの背景の飾りを scroll のたびに3層 translateY(−1.2y／−1y／−0.4y)、`.js-scroll` は毎回 offset を読む。メニューは .3s で opacity、後ろを blur(5px)、Esc で閉じず、閉じたメニューの9リンクに Tab が入る。`:focus{outline:0}`。`prefers-reduced-motion` は CSS・JS とも0件。
- **重さ**（measure.js、解析タグ除く）：top PC 7.37MB／SP 6.74MB、world 3.32／3.18MB、ユニット 6.88／6.11MB、news 84.07／84.01MB、公式ストア 6.03MB。全ページで Google Fonts の CSS 496KB（M PLUS 1・Montserrat・Nanum Gothic）・share.css 385KB・lib.js 302KB・lottie.min.js 298KB。top は `?from=official_store_banner` のときだけ出す窓の絵 411KB も毎回取る。

### ブルーアーカイブ -Blue Archive- 公式（https://bluearchive.jp/ ・2026-11-17 解剖、2021年配信の運営中タイトル。iOS・Android・Windows。歩いた4ページ：/・/system・/character・/news/newsJump。世界観と購入のページは無い）
- **枠**：Vue 2.6 の SPA（vue-router、Vue・vuex・axios は jsDelivr）。どのページも 1440×810 の1画面＋フッター（高さ 1053px、縦に流さない）。`html{font-size}` を幅/64（1440px で 22.5px、390px で 6.09px）にして全部 rem。h1〜h3・main・nav・button は4ページとも0、title も4ページ同じ。
- **最初の画面**：背景の mp4 1本（1,501KB、autoplay・muted・loop、poster なし）＋網点の PNG、中央にロゴ 438×128（画面の 30% の幅）、右に縦書きのコピーの画像 117×374、左下に入手4つ（チャージセンター 240×70・Windows 版 338×100・App Store 165×50・Google Play 165×49 で 337×235 の塊）、右下にバナー3つ。SP は動画を描かず、左下は予告の絵 139×70＋チャージ＋ストア2つ（Windows 版は出さない、Google Play は iPhone でも出す）。
- **予告**：PC はヘッダーの YouTube のリンク（別タブ）だけ。SP は絵を押すと rgba(0,0,0,.6) の幕に YouTube の iframe（幅90%・高さ30%）。押す前の DOM に iframe は無い。閉じるは名前の無い div、Esc なし。
- **キャラクター**：4校（アビドス4・ゲヘナ3・ミレニアム3・トリニティ4＝14人）→ 顔 → カード。左の列 254px の校章 img（opacity .6／今の学園 1）、下の顔 122×122（ホバーで rgba(0,0,0,.3) .3s）、中央のカード 575×320（上に斜めの暗い帯・名前の前に水色の棒、名前と CV 29.25px 600 #7b7b7b、項目 19.5px／行 30px）と右の立ち絵。`slideTo(i,1000)`。14人とも URL は /character。`autoplay:3e3` があるが6秒で送られない。校章を押すと SP は +3,097KB（その学園の絵と wav）、PC は +84KB。
- **ボイス**：カード右下のマイク＋波形の絵、押すと `pause()`→`currentTime=0`→`play()`。`<audio preload="">` を全員ぶん置くので押す前に取る（PC 58KB／SP 416KB）。
- **ニュース**：API `api-web.bluearchive.jp/api/news/list?typeId=&pageNum=&pageIndex=`。すべて 597・お知らせ 318・メンテナンス 168・イベント 111（2026-11-17）。PC 16件＝黒い冊子の見開き 8件×2列（「連邦生徒会」の透かし）、SP 8件。タブ4つ・番号送り « 1〜9 »、どちらも URL は変わらず件数も出ない。札は #fff／#56dbfb（1.63）9px、題 12px 500、日時 8.25px（SP 6.5／7.58／6.14px）。記事は PC だけ `window.open(_blank)`、SP は同じタブで /news/newsJump/712。
- **システム**：Swiper coverflow（PC horizontal・slidesPerView 2・stretch −140・depth 160、SP vertical・3・−38）、16枚のうち複製 10＝6枚。先生の端末の画面の絵の上。
- **入手・表記**：ストアのボタンは top だけで、a の中の alt 空の img（名前なし）。App Store は bit.ly、Google Play は adjust、Windows 版は .exe へ直接。「基本無料」・年齢区分（CERO／IARC）は4ページで0件。© は画像だけ。`lang="ja_JP"`。
- **書体と重さ**（measure.js、解析タグ除く）：top PC 13.29MB／SP 12.55MB、system 12.42／7.13MB、character 15.79／16.48MB、news 20.80／16.83MB。Adobe Fonts のキット2つ（18ファミリー）の字の追加分＋opentype が 9,623〜17,837KB（71〜84%）で、描いている書体は Google Fonts の Noto Sans JP だけ。自社の絵・JS・CSS は 1.3〜2.3MB。keyframes 0・transition は opacity .3s が中心・reduced-motion 0件。inspect.js（top）：390 本文 9px で FAIL 1。

### Arknights: Endfield 海外公式（https://endfield.gryphline.com/en-us ・2026-11-22 解剖、2026年配信の運営中タイトル。iOS・Android・Windows・Steam・Epic・Google Play Games・PS5、14言語。歩いた5ページ：/en-us・/en-us/operator・/en-us/news・/en-us/news/9569・/en-us/video。世界観と入手は top の中だけ）
- **枠**：Next.js（App Router）。top は1枚に8区画（home 900・operator 892・lore 930・Media 810・calendar 2,555・gameplay 943・aic 695・news 767、PC 9,170px）。`html{font-size:min(.625vw,1.111111vh)}`（PC 1440×900 で 9px）・SP `min(1.481481vw,.833333vh)`（390px で 5.78px）の rem で全部組む。`html{user-select:none}`。
- **部品の型**：白 #fff・墨 #191919（88回）・黄 #fffa00（60回、面だけ）。名前の両側の「[ ]」、「01 / 37」の通し番号（Gilroy 9px）、名前の下の三色の線（border-image：#ff00f0 11.25rem／#fffa00 〜22.56rem／#00ffa2）、黒い札「Faction」「Race」＋灰 #f2f2f2 の値（12.375px・行 20.25px）を top・一覧・詳細で同じ寸法に。
- **最初の画面**：静止画 4,274KB のキービジュアル＋版の題の PNG（言語ごと、en-us 2,069KB）、左に固定の縦の列 67.5px（7項目の絵、ホバーで 203px に開いて名前）、右下に Download の箱 505×112（店7つ 110×33）。ローディング PC 6.6〜7.2s・SP 6.8s。Sound: On が初期値で、どこかを1回押すと bgm.mp3 2,765KB を取って鳴る。
- **動画**：Media の背景 mp4 は poster・preload="metadata" で、区画に来たら無音で再生、送りを押すとその予告の短い mp4 に替わる。▶（div 40.5×40.5）を押して初めて `youtube.com/embed/{id}` の iframe（押す前 0件）。Esc で閉じず role なし。gameplay のプレイ動画 `01.mp4`（y=6,379）は preload="auto" で読み込み 3〜6秒に 51,934KB を全部取る（PC・SP・reduce とも）。
- **キャラクター**：37人。top は1人の立ち絵＋左の縦の顔の列（77×77 の丸、12個見える、上下の矢印 42×42）で1人ずつ送る。/operator は 6列の札 171×218、Class（All＋6）・Element（All＋5）の Dropdown（開く札は role=button・tabIndex 0、項目は role=option・tabIndex −1）、札を押すと同じページで詳細（Back to Operator List）。URL・題はどこでも同じで、戻るでトップへ出る。Caster×Physical の0件は白紙。CV は英語版の声優名の文字、ボイスの再生なし。37人×14言語のデータを全ページ共通の layout の JS 1,610KB に JSON で（1,067,485字）。
- **ナビ**：PC の縦の列の今の区画は灰の地＋左の黒い線、SP は全面のメニューで今の項目を黄 #fffa00。下の段（Account・Top-up Center・Creators・Sound）と SP の三本線・音は div で名前なし。top で Tab が止まるのは13か所。
- **入手・表記**：基本無料で値段0件。店7つ（Steam・Epic・GPG・App Store・Google Play・PS5・Windows）は `div` の中の alt つき img で、押すと JS で新しいタブ。iPhone の UA では App Store と課金のページ（topup.gryphline.com）の2つだけ。年齢区分はフッターの ESRB TEEN の画像1つ（内容記述と In-Game Purchases (Includes Random Items) も画像の中）。版の予定表（Version Calendar）は 1850×3146 の jpg 1枚で alt「calendar.content」。
- **ニュース**：API `web-news.gryphline.com/api/bulletin?…&page=&pageSize=9&tabs[]=`。Latest 135・Notices 97・Events 12・News 26（2026-11-22）、sticky の3件が先頭。札は div、日付は文字（time なし）、札も番号送り 01｜02 も URL は変わらない。カードの絵は CMS の原寸 PNG（2MB 前後）。
- **安全と重さ**：CSS 9ファイルに prefers-reduced-motion 0件、framer-motion に `reducedMotion:"never"`。区画に入るたび左の飾りを 1s で3回明滅（0→.5→0）。measure.js：top PC 43.69／SP 41.11MB、operator 10.31、news 17.10、記事 5.62、video 16.44MB。CDP で top を20秒数えると PC 92.88MB・SP 90.18MB（差は 01.mp4）。

### Reverse: 1999 海外公式（https://re1999.bluepoch.com/en/home/ ・2026-11-26 解剖、2023年配信の運営中タイトル〔Ver. 3.9〕。iOS・Android・PC。歩いた6ページ：入口 /en/・/en/home/〔#0〜#4 の5画面〕・detail.html#news・detail.html#newsId?325・/payment/）
- **枠**：jQuery 1.11.3＋Swiper。本体は1つの HTML を縦の Swiper（`speed:300, mousewheel:true`）で HOME・NEWS・CAST・BACKSTORY・GALLERY の5画面に分け、`router.js` は読み込み時に `#0〜#4` を読むだけ（動いても書かない）。PC は `html` の font-size を JS で `innerWidth/1920×16`（1440px で 12px）。版の告知は別の入口 `/en/`（3.9 の題・新しい人物2人・特徴6枚・SNS、右上の OFFICIAL SITE で本体へ）。
- **部品の形**：細い軌道の円（`changeRotate` 60s linear）と、頭の1字だけ #b55829 で大きいセリフ体の題（CAST の名前・BACKSTORY の章・GALLERY の VIDEO／WALLPAPER／MUSIC、どれも画像）と、右上だけ丸めた枠（物語の絵 100px・ニュースのバナー 75px）。地は #131818 系の絵、字は #bba893（7.80:1）・#e9dccd（13.30:1）。
- **最初の画面（PC 1440）**：雨の窓ごしの通りの mp4（1920×1080・14.17s・muted loop、poster あり、止めるボタンなし）。題・告知は置かず、右下に入手の塊：QR 128×125（x814 y730）・PC 100×90（exe を直接）・App Store／Google Play 148×44 の2段・PV の丸 131×125。入口 `/en/` も同じ並び。ストアの img は alt 空、PV は div。
- **カーソル**：`body{cursor:none}`。mousemove で動く div が、ふつう 12px・枠の上 12〜18px・物語の絵の上 50px（`ball2` 0.3s）。絵の上では円の背景に色を反転した版（`p1c.png`）を `background-position:-offsetX -offsetY` で入れ、円の中だけネガが見える。円の左上を点に合わせるので中身は 25px ずれる。
- **人物**：10人。左に顔の札 106×106 を x90／x165 の交互・129.5px おきに積んだ縦のループ（`slidesPerView:5, loop:true`）、選んだ人だけ色・ほかはセピア。押して 515〜539ms で入れ替え（out 左へ／`selfFadeInRight` 0.5s）、1人ごとに 2.7〜4.0MB。名前は画像（alt 空）、台詞は文字 12px／22.5px、ボイス 62×45（押して mp3、4.mp3 353KB）、Live2D 78×45（待機と立ち絵の2本の動きを切り替え）。URL は `#2` のまま。
- **立ち絵の動き**：webm 940×2320 の上半分に色・下半分に白黒の型を積み、`canvas.js` が毎フレーム `getImageData` で下の赤 ≤ 90 を透明、それ以外を不透明（0／255 の2段）にして上の色を移す。CAST 以外の画面では `cancelAnimationFrame`。SP は `5m.gif`（4,146KB）で、この gif を PC でも取る。
- **物語**：本文は文字（Ⅰ The Storm は2段落）。章8つをローマ数字の画像Ⅰ〜Ⅷと前後の矢印で（次へ 21KB）。絵 720×432 を押すと 3000×1385 の拡大（5,329KB、拡大・縮小・保存、Esc で閉じない）。
- **ニュース**：`detail.html#news`。種類 LATEST・NOTICE・EVENTS・NEWS（div、16.47px）、2列×5件・ページ 1〜3、どれも URL に残らない。1件は div の onclick で別タブの `detail.html#newsId?325`（開き直しても同じ記事）。サムネは 1920×1080 を 149×84 に、同じ NOTICE の絵 3,217KB を別 URL で4回。
- **入手・課金**：値段の文字 0件。Official Top-up はヘッダーの唯一の a で、`/payment/info` の Top-up Center（ゲームを選ぶ → ログイン）。SP は最初の画面の下に DOWNLOAD NOW 197×41 と端末の絵 30×25 を3つ。
- **表記**：年齢区分・課金の注記は6ページで0件。© は入口のフッターだけ。英語のページの `lang="zh-cn"`、ロゴの alt「重返未来logo」、入口の h2「游戏特色」「官方社群」。
- **操作**：押せる物 125個（div 52・img 63・a 10）、button 0。Tab はロゴ・Top-up・ストア3つ・物語の前後・cookie の8手。reduce は animate.css の既定だけで、KV・軌道の円・人物の webm は動き続ける。
- **書体と重さ**：SourceHanSerifCN を使う字だけに間引いた Serif.ttf 66,020B の1本。measure.js：入口 PC 13.54／SP 6.08MB、top 38.61／28.64MB、#3 29.20／28.64、#2 32.71／28.71、detail 24.02／15.64、/payment/ 1.00／0.99。KV の mp4 9,887KB と 9,375KB を2回、BGM 3,518KB は鳴らさないのに読み込み 4.3s で取る。PV の YouTube は押してから（1,245KB）。

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
- 周年の特設は小さな別ページ（Astro）にし、配信の日時を `time datetime` で（怪獣８号 /1stanniversary 3.90MB）。
- 人物を2つの時点（物語の前と今）で持ち、立ち絵・台詞・プロフィールの値・紹介動画・前後のリンクをまとめて替える（プロジェクトセカイ：PAST／NOW 240×45、身長 161→162cm・学年 1-C→2-A）。作るときは時点を URL（`?year=`）に書く。
- ページの題を、同じ英字をくり返した縁取りの大きな字の上に重ね、全ページの帯で同じ型にする（プロジェクトセカイ：STORY 80px 700）。
- 選んだものの色を1組に決め、時点・メニュー・絞り込みで同じに使う（プロジェクトセカイ：#446 の地に #0cb、4.57）。

- 作中の物をサイトの部品にする：学園の切り替えは校章、人物の詳細は名簿のカード、ニュースは生徒会の冊子の見開き、遊び方は先生の端末の画面（ブルーアーカイブ）。
- どのページも 1440×810 の1画面に収め、縦に流さない（ブルーアーカイブ：4ページとも高さ 1053px）。作るときは SP で字が縮まないよう、1画面にこだわらず流す。
- ニュースを冊子の見開き（左右8件ずつ）にし、種類の4タブと番号で送る（ブルーアーカイブ：597件・16件ずつ）。件数と URL を足す。

- 世界観を小さな部品の形にそろえる：「[ 名前 ]」・「01 / 37」・名前の下の三色の線・黒い札＋灰の値の行を、top・一覧・詳細で同じ寸法に（Endfield）。作るときは題材の世界の目盛り・番号（工事なら標高と打設ブロック）に置き換える。
- 左の縦の列のナビ（PC 67.5px、開いて 203px）で今の区画を地の色＋左の線で示す（Endfield）。名前はホバーだけでなく Tab で入ったときも出す。
- 人物を「今の1人＋縦の顔の列」で1人ずつ送る（Endfield：77×77 の丸を12個、上下の矢印、番号）。顔は button にし、URL に1人を残す。

- 世界観の言葉（Reverse＝反転）を1つの操作に落とす：物語の絵の上でカーソルが 50px の円になり、円の中だけ色を反転した版が見える（Reverse: 1999）。作るときは中心を合わせ、キーボード用に全部を切り替えるボタンを置く。
- 立ち絵を透過で動かすのに、色と型（マスク）を上下に積んだ1本の動画を canvas で抜く（Reverse: 1999：webm 940×2320）。型の明るさをそのまま不透明度にし（しきい値の2段にしない）、見えている間だけ回す。
- 人物の一覧を縦のジグザグの札にし、選んだ人だけ色・ほかはセピア（Reverse: 1999：106×106 を x90／x165 の交互）。
- 版の告知を本体と別の入口ページにし、同じ入手の塊を両方に置く（Reverse: 1999：/en/ と /en/home/）。
- 書体を使う字だけに間引いて1本で配る（Reverse: 1999：Serif.ttf 66KB）。

## 真似る型（ウマ娘・ゼンレスゾーンゼロ・学園アイドルマスター・怪獣８号 THE GAME・プロジェクトセカイ・ブルーアーカイブ・Arknights: Endfield・Reverse: 1999 で確かめた）
1. **入手の導線を全ページの同じ場所に置く。** ウマ娘はフッター直前のストア5つの帯（PC 68px 1行／SP 2・2・1）、ZZZ はヘッダー右の地色の丸「Download Now」（93×25）から 72ms のモーダル（QR＋ストア7つ＋ESRB）。学マスは全ページのフッターの QR＋ストア3つと、top 左下の固定の帯（PC 545×218）。怪獣８号は PC が右の固定の列にストア3つ、SP が下端の固定の帯（108×40）。どれも全ページ・全章で同じ位置。作るときは、ヘッダーのボタン → モーダル（Esc で閉じる）と、最初の画面の下端の列の2つを置く。 ブルーアーカイブは top の左下に4つ（PC 337×235 の塊、SP は予告＋3つ）で、下層ページには0個。
2. **最初の画面の下端に、ストアの全部と年齢区分の箱を1列に。** ZZZ：ESRB（区分・内容記述・In-Game Purchases (Includes Random Items)）＋QR＋ストア 4＋3。ウマ娘は最初の画面にストアが無かった（y=2,960）ので、ZZZ の置き方を採る。 （追記 2026-11-26 Reverse: 1999：最初の画面の右下に QR 128×125・PC 100×90・App Store／Google Play 148×44 の2段・PV 131×125 を1列に置き、版の告知の入口 /en/ でも同じ並び。ただし年齢区分は0件で、ストアは alt 空の img。並びは手本、区分と名前を足す）
3. **人物は1人1URL、人物の色を詳細の面に。** 怪獣８号は1人1URL が無く（詳細のモーダルで URL は #character のまま）、人に送れない反対の例。学マスも `/idol/kotone/`（title も人名）。プロジェクトセカイは `/character/unite01/ichika/`（title も人名）でユニットの色（#45d ほか5色）を帯に塗り、前後の矢印はユニットの中で一周する（ウマ娘も端で一周）。ウマ娘 `/character/specialweek`＋`--color-main`/`--color-sub`、ZZZ `?id=166651`＋斜めの色の面（15rem 角・skewX(−45deg)）と章札。どちらも色の上の文字の比が足りない人がいる（ウマ娘の札 2.44〜2.73、ZZZ の Sunbringer 2.30）ので、文字は面に乗せないか色ごとに選ぶ。
4. **ボイスは CV 表記の横のボタンで。** ウマ娘 27.8px の丸（押して mp3 119KB）、ZZZ 32px のマイク（押すたびに次の台詞、再生中は帯が揺れる）。押すまで声を取らない方を採る（ウマ娘、学マス：`new Audio()` を押した時に作り 62,868B、前の音は止める）。学マスは自己紹介を2つ並べる。 ブルーアーカイブはカードの右下のマイクで、押すたび `pause()`→`currentTime=0`→`play()`（頭から）。ただし `preload` で先に取る（SP 416KB）ので、取るのは押してからにする。
5. **お知らせの種類タブは URL つきのリンク。** ウマ娘 `?t=game`、ZZZ `?category=295`。運営のお知らせ（ウマ娘の [追記] の帯、ZZZ のガチャ提供割合の先頭固定 `/news/public`）は一覧の中で目立たせる。
6. **人物が数十人を超えたら、まとまり（陣営・グループ・ユニット）で先に絞る。** プロジェクトセカイは 6ユニット → 1人。 ウマ娘 175人を2グループ＋並べ替え5種＋身長の範囲、ZZZ 65人を陣営22 → 同じ陣営のサムネ。まとまりが無い数十人なら、横送りと全員の格子の2つの見え方を切り替える（怪獣８号 27人・CHANGE VIEW。ボタンには名前と aria-pressed を付ける）。。ブルーアーカイブは14人でも 4校 → 顔 の2段にし、同じ画面の左の列（校章4つ）と下の帯（顔）で選ぶ（URL には残らない）。

7. **入手の箱を PC の右に固定し、SP は端末のストアを先に出す。** 怪獣８号は右の固定の列 192px（章・ストア3つ・Web Store）、プロジェクトセカイは右の固定の箱 220×409（App Store・Google Play・公式ストア）。SP はどちらも UA でストアを絞る（怪獣８号：iPhone は App Store＋Steam、プロジェクトセカイ：iPhone は App Store だけ）。どちらも、ほかの端末のストアへ届く道が無い（rules 28）ので、作るときは「ほかの端末のストア」のリンクを1つ残す。 （追記 2026-11-22 Arknights: Endfield：固定の列ではなく最初の画面の右下の箱 505×112 に店7つ〔110×33 を4列2段〕、iPhone の UA では App Store と課金の2つだけ。7つとも div＋img で Tab が届かないので、作るときは店ごとの a にする）
8. **課金の買い物は公式の Web ストアに分け、値段と札を文字で出す。** 怪獣８号の Web Store（Xsolla）は ¥160〜¥30,000・あと1回・あと25日、プロジェクトセカイの公式ストアはクリスタル9（￥160〜￥50,000、初回18〜20%増量）とパス7で、購入の button の名前に札・品名・値段まで入る。どちらも年齢・未成年の文は無いので、作るときは購入の確認に「12+・未成年は保護者の同意」を書く。

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
- ニュースを1ページに全件描き、サムネを出す大きさに縮めずに全部取る（プロジェクトセカイ：409件・84.07MB・高さ 54,687px、2.8MB の絵を 372×210 に、JSON は `?now=` で毎回取り直し）。10件ずつ・縮小版の img・lazy。
- 年の絞り込みの選択肢が今年に追いついていない（プロジェクトセカイ：2025〜2019 だけで、2026年の52件を選べない）。選択肢はデータの年から作る。
- 2回目の訪問の方がローディングが長い（プロジェクトセカイ：Cookie があると load の後 1,200ms 待つ）。
- 人物の時点（PAST／NOW）・ニュースの絞り込みを押しても URL が変わらない（プロジェクトセカイ）。
- メニュー・絞り込みの開閉が `<p>` で、閉じたメニューのリンクに Tab が入る（プロジェクトセカイ：最初の8手）。
- 使っていない Web フォントのキットを全ページで読む（ブルーアーカイブ：Adobe Fonts 18ファミリーで 9.6〜17.8MB、描くのは Noto Sans JP だけ）。
- 字を幅/64 の rem で縮め、SP のニュースの題 7.58px・日時 6.14px（ブルーアーカイブ）。
- ナビ・校章・顔・ボイス・タブ・番号が li・img・div の click で、Tab がナビに届かない（ブルーアーカイブ）。
- 記事の開き方が PC は別タブ・SP は同じタブ（ブルーアーカイブ）。
- 「基本無料」も年齢区分も無く、ストアのボタンは名前の無い画像のリンク（ブルーアーカイブ）。
- 見えない区画のプレイ動画を preload="auto" で読み込みの数秒に全部取る（Endfield：y=6,379 の 01.mp4 51,934KB、top を20秒で PC 92.88MB）。preload="none" にし、区画の手前で src を入れる。
- 37人×14言語のデータを全ページ共通の JS に入れ、文字だけの記事でも取る（Endfield：layout 1,610KB、記事 5.62MB のうち JS 4.6MB）。
- framer-motion に `reducedMotion:"never"` を渡し、動きを減らす設定を消す（Endfield）。"user" にする。
- 版の予定表を1枚の絵にし、alt が翻訳の鍵のまま（Endfield：1850×3146、alt「calendar.content」）。
- 人物の絞り込みが0件のとき白紙（Endfield：Caster×Physical）。「0人。条件を外す」の文とボタンを出す。
- 5画面を1つの HTML にし、どの画面から入っても 29〜39MB を取る（Reverse: 1999：KV の mp4 を2回・SP 用の gif を PC でも）。画面ごとに分けるか、見えた画面の分だけ取る。
- カーソルを消して自前の円にし、押せる物 125個を div・img の onclick にする（Reverse: 1999：button 0、Tab は8手）。
- 英語のページの `lang` と alt と見出しが中国語のまま（Reverse: 1999：`zh-cn`・「重返未来logo」・「游戏特色」）。
