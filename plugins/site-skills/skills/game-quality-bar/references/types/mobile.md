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

## 真似る候補（1サイトだけで見たもの。2つ目で確かめたら「真似る型」へ上げる）
- 人物の色を CSS 変数2つ（main・sub）で持ち、詳細ページの面・札・ボタン・枠を全部それで塗る。テンプレートは1枚（ウマ娘）。
- ボイスは CV 表記の横の丸ボタンにし、押したときに音声を読む（ウマ娘：27.8px・mp3 119KB）。
- 衣装・姿の切り替えは同じ枠で、丸いサムネに種類名を付ける（ウマ娘：4種・99px）。2枚目以降は押したときに読む方がよい。
- ストアボタンは全ページのフッター直前に同じ帯で置く（ウマ娘：5ストア・PC 68px 1行／SP 2・2・1）。
- お知らせは種類2つのタブ（URL つき）と、後から書き足した日時の帯（ウマ娘：[追記]）。
- 区画の見出しを、区画ごとの色の斜めの札にし、下層ページの見出しにも同じ色を使う（ウマ娘：6区画6色）。
- 一覧に並べ替えと、題材の数値（身長など）の範囲検索を付ける（ウマ娘：5種・135〜180cm）。
- 章に番号を振り、トップの順・ヘッダーの順・下層ページの見出しの札の番号をそろえる。右端に縦の章送り（ZZZ：Characters 02〜Game Features 06、45×200）。
- 紹介文を「ほかの人物からの一言」（引用＋— 名前）で書く（ZZZ：Robin 4件）。
- トレーラーを開いている間、BGM を 0 に下げて閉じたら戻す（ZZZ：Howler 0.8 → 0）。

## 真似る型（ウマ娘・ゼンレスゾーンゼロの2つで確かめた）
1. **入手の導線を全ページの同じ場所に置く。** ウマ娘はフッター直前のストア5つの帯（PC 68px 1行／SP 2・2・1）、ZZZ はヘッダー右の地色の丸「Download Now」（93×25）から 72ms のモーダル（QR＋ストア7つ＋ESRB）。どちらも全ページで同じ位置。作るときは、ヘッダーのボタン → モーダル（Esc で閉じる）と、最初の画面の下端の列の2つを置く。
2. **最初の画面の下端に、ストアの全部と年齢区分の箱を1列に。** ZZZ：ESRB（区分・内容記述・In-Game Purchases (Includes Random Items)）＋QR＋ストア 4＋3。ウマ娘は最初の画面にストアが無かった（y=2,960）ので、ZZZ の置き方を採る。
3. **人物は1人1URL、人物の色を詳細の面に。** ウマ娘 `/character/specialweek`＋`--color-main`/`--color-sub`、ZZZ `?id=166651`＋斜めの色の面（15rem 角・skewX(−45deg)）と章札。どちらも色の上の文字の比が足りない人がいる（ウマ娘の札 2.44〜2.73、ZZZ の Sunbringer 2.30）ので、文字は面に乗せないか色ごとに選ぶ。
4. **ボイスは CV 表記の横のボタンで。** ウマ娘 27.8px の丸（押して mp3 119KB）、ZZZ 32px のマイク（押すたびに次の台詞、再生中は帯が揺れる）。押すまで声を取らない方（ウマ娘）を採る。
5. **お知らせの種類タブは URL つきのリンク。** ウマ娘 `?t=game`、ZZZ `?category=295`。運営のお知らせ（ウマ娘の [追記] の帯、ZZZ のガチャ提供割合の先頭固定 `/news/public`）は一覧の中で目立たせる。
6. **人物が数十人を超えたら、まとまり（陣営・グループ）で先に絞る。** ウマ娘 175人を2グループ＋並べ替え5種＋身長の範囲、ZZZ 65人を陣営22 → 同じ陣営のサムネ。

## 反面教師
- ページを移るたびに 3〜4 秒のローディング画面を出す（ウマ娘：top PC 3,833ms、一覧 6,556ms）。最初の1回だけにする。
- 世界観ページの冒頭に 74.5MB の動画を置いてすぐ再生する（ウマ娘：10秒で 44〜50MB）。poster を出し、押してから再生。
- 色札・ラベルの白文字が地と 1.5〜2.8（ウマ娘：GAME 1.63、Goods 1.55、人物の札 2.44〜2.73）。
- ストアボタン・ボイス・衣装の丸に名前が無い（ウマ娘：img の alt なし、`<a href="#">`）。人物名が h1 でない。
- 年齢区分と「基本無料・アイテム課金」の表記がストアボタンの近くに無い（ウマ娘）。
- 読み込み中に、見えない人物の大きな絵まで全部取る（ZZZ：65人ぶん 149枚・92.1MB をローディングの7秒で、top PC 116MB）。表示中と前後の3人だけ。
- ストアボタン・年齢区分を alt 空の img にし、リンクにしない（ZZZ：7つとも Tab が届かず outline: none）。モーダルが Esc で閉じない（ZZZ）。
- BGM のファイルを全ページで取り、ページのどこかを押しただけで鳴らす（ZZZ：3,429KB、最初のクリックで音量 0.8）。音のボタンを押してから取る。
- ページ送り・章のナビが href の無い a や `<nav>` 要素（ZZZ：2ページ目でも URL が変わらない）。
- 言語の札を押しても切り替わらない（ZZZ の EN）。
