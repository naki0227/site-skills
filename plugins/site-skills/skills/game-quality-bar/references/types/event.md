# イベント・ライブ（フェス、ライブ、展示、eスポーツ）

## この下位タイプで特に見ること
日程と会場、チケットの販売段階、当日の案内

## 下位の型
同じ「イベント」でも、見本で別れた。作るものがどちらに近いかを先に決める。
- **チケット制のフェス・ライブ**（Lollapalooza、Primavera Sound、Tomorrowland Thailand Barcelona）：最初の画面は出演者のポスターかチケット、出演者の一覧と時間割が中心、購入ボタンが全ページに。
- **配信が主の授賞式・ショーケース**（見本は The Game Awards）：会場の券は少なく、主な行動は「カレンダーに入れる・どこで見るか」。中心は本番までの日数・候補と受賞者・過去の回。トップは本番の前・最中・後で形を替える。
- **入場無料か少額の、日本の地方の催し**（陶器市・祭り・マルシェ。見本は笠間の陶炎祭）：買うボタンは無い。中心は会場図・出店者一覧・行き方と駐車場・雨の扱い。出店者は数十〜数百件、会場図は印刷物（PDF）が正本になりやすい。

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

### Primavera Sound Barcelona 公式（https://www.primaverasound.com/en/barcelona ・ 2026-10-31 解剖、2027-06-02〜06 の約7か月前・一般発売中。歩いたページ：/en/barcelona・/en/nobody-is-normal・/en/barcelona/lineup・/en/artist/massive-attack・/en/news・/en/barcelona/tickets-info-barcelona）
- **枠**：React の SPA（Tailwind＋Radix）。ヘッダー 72px（SP 96px）は固定しない。Barcelona のトップは「ポスター 1440×620 → チケットの帯 → Revolut の帯 → YouTube 1440×810 → ショップの帯 → News → メール登録 → Relive → 協賛4段 → フッター」。title・description とも「Tickets for…」で、トップはチケット売り場の顔。
- **最初の画面**：点の色と出演者の名前（大きさ3段・closing set・日曜の別枠）を焼き込んだ jpg（PC 2000×861・SP 800×1067 の別画像）。alt は画像の URL、リンクなし。日付・会場は画像の中のカタルーニャ語だけで、文字で出るのはメガメニューの「02 - 06 JUN, 2027 PARC DEL FÒRUM, ES」（12px 等幅）。SP 画像のいちばん小さい名前は画面で約 6px。
- **出演者一覧（Artists A-Z、/en/barcelona/lineup）**：150組を、地 #efeae7 の上で GT America Standard Black 30px／50.7px（1.69）・中央揃え・「•」区切りの1本の文字の流れに。名前は全部 h2。PC は `a href="/en/artist/<slug>?e=primavera-sound-2027-barcelona"`、SP（24px／40.56px）は span でリンクでない。ホバーから 68ms で約 296×220 の写真のカード（濃い帯に名前 16px・VIEW PROFILE、星と ×）。ホバー色 #7dd6ad は地と 1.45:1、フォーカスではカードが出ない、SP の VIEW PROFILE は 103×16px。見出し 360px にポスターの点。トップの本文から A-Z へのリンクは0本（メガメニューの中だけ）。
- **1組（/en/artist/massive-attack）**：白黒写真 1400×620 に h1 40px・900 白。左に NEXT DATES（白い札「Primavera Sound Barcelona 2027」・会場 10px・TICKETS 128×32）と PREVIOUS CONCERTS（日付｜フェス名）、右に本文を5つの問いで（Where to start?／What you should know／What you don't need to know but is cool／Why are they at Primavera Sound?／You'll like them if you like...）。前後の出演者へのリンクは無く、パンくずの /en/artist は 404。YouTube は autoplay=0 だが iframe は読み込み時に作る。
- **ナビ**：FESTIVALS（`aria-expanded`・`aria-controls`）のメガメニューに、フェス5つのタブ（等幅 14px・字間 .7px、他は #b8c2cc＝白と 1.81:1）、名前 60px Black、日付と会場の1行、黒い丸の TICKETS、5列の目次（2027 EDITION／TICKETS 5／INFO 5／ACCESSTICKET 2／YOU MAY ALSO LIKE 4）。SP は検索・アカウント・3本線が各 32×32（3本線に名前なし）。
- **チケット**：タブ2つ（GENERAL SALE／PRIMAVERA PRO、716×56・SP 143／154×36、選択中は黒地白字、他 #e4dfda、押して 110ms で中身が替わる）の下に、券種1行（白・64px・間 8px）＝赤い＋・名前 18px 700・「|」・札（等幅 12px・角 8px、On Sale #7dd6ad／VIP #f8d628）・FROM 12px 等幅＋値段 22px 900＋「+ fees」16px・BUY 128×32（丸・#7dd6ad・12px）。行を押して 64〜82ms で Radix の Accordion が 0.3s で開き、説明1文。BUY は 103ms で「Select your selling platform」（892×772）に Fever と Installment Plan（AccessTicket）の2行、どちらも新しいタブ。一般4券種は Revolut 払いが €20 安い（€330／€350、VIP €525／€545）。
- **チケット案内（Tickets Info）**：左に「\ GENERAL SALE・\ MINORS・\ ACCESSIBLE TICKET・\ FAQS」（等幅 16px・#f60）、右に本文 Tiempos 14px／21px と同じ帯。地元割はバルセロナ都市圏 10%（住民登録の証明を出し、割引コードがメールで来る）、未成年は 0〜12歳無料（大人の券に紐づけ）・13〜17歳割引・15歳以下は保護者同伴、車いすは申込フォーム、FAQ 5問。本文の値段（一般 €360・VIP €560）が帯の FROM（€350・€545）と食い違う。
- **世界観（Nobody is Normal）**：性暴力・差別のない祭りの約束のページ。h1 1つ・本文 14px、相談のブース2か所と監修団体を書く。
- **ニュース**：全フェス共通のモザイク3列（大カード：写真の上に白 26px／37.18px、小カード：写真半分＋16px）。BY EVENT の6つで絞る（押して 86ms で一覧を読み直す、選択中 #7dd6ad、`aria-pressed` なし、URL は変わらない）。最初 18件・LOAD MORE。カードに日付が無い。札は白 10px on #7dd6ad（1.74:1）。英語版にスペイン語の見出しが混ざる。
- **部品の値**：地 #efeae7、行・ヘッダー #fff、文字 rgba(0,0,0,.87)（地と 13.93:1）、ミント #7dd6ad（黒文字 12.09:1）、本文のリンク #f60（地と 2.46:1）。書体は自前の woff2 で GT America Mono（ナビ・ラベル 14px 大文字・字間 .7px）、GT America Standard（名前・値段）、Tiempos Text（本文 14／21）。body の既定は Roboto 14px で読み込んでいない。
- **表記**：`<html>` の lang が空（6ページとも）、hreflang 4本（en・es・ca-es・pt）と canonical はある。言語の切り替えはフッターの ES｜EN｜CA｜PT だけ。viewport は `maximum-scale=1.0, user-scalable=0`。JSON-LD 0件。
- **ポップアップ**：Cookiebot（Marketing 75件）を拒否しても、読み込みから 7.0〜7.3 秒で Braze のニュースレターの全画面 iframe（1440×900／390×844、見出しに絵文字、閉じるは名前なしの button、Esc で閉じる）。
- **動き**：ほとんど動かない。行の開閉 0.3s・BUY のダイアログ・カード。`prefers-reduced-motion` は CSS に2件（トーストとメニューの引き出し）だけ。top の YouTube は `autoplay=1&mute=1&controls=0` で読み込み時に埋め込む。
- **重さ**（展開後・解析タグ除く）：top PC 23.80MB／SP 23.97MB、1組 20.55／20.80、news 18.10／19.46、buy 16.88／17.19、world 16.82／17.21、A-Z 16.72／17.00。どのページも JS 13.0〜16.5MB（vendor.bundle.js 5,585KB・main.bundle.js 2,421KB・Stripe 3.7MB）と CSS 2.9MB（Tailwind の全クラス、規則 61,950）。top は YouTube 5,113KB と、PC 用・SP 用の帯の画像を両方（1,268KB）。転送は br で vendor 1,210KB・CSS 412KB。`tools/inspect.js` は top で FAIL 5（横スクロール 4px・書体 7種・SP で 13px 未満 24%）／WARN 9。

### The Game Awards 公式（https://thegameawards.com/ ・ 2026-11-04 解剖、本番 2026-12-10 の38日前・ノミネート発表の前。歩いた5ページ：/・/about・/rewind/year-2025・/news・/faq）
- **枠**：Next.js（App Router）。5ページとも「sticky のヘッダー 90px（SP 80px）＋日数の帯 54px ＝ 144px → 本文 → フッター」。地 #0a1011、カード #283f43、枠 #3b5e64、金 #f2a366（CSS の色で最多 31回）。
- **日数の帯**：layout の JS が CMS の `tgaTickerDate`・`tgaTickerText`（既定「DAYS UNTIL LIVE SHOW」）・`tgaTickerLink`・`tgaTickerColor`／`tgaTickerTextColor` を読み、`Math.max(0, Math.ceil((日付−今)/864e5))` を毎回計算。地 #639da7 に #0a1011（6.31:1、白なら 3.04）・gellix 500 20px・大文字。リンクがあれば a、無ければ div。全ページで固定。
- **トップの状態**：ヒーローは `home-hero--announcement`（いま）／`--live`／`--post-show` の3つで、CSS の規則が 79／80／66 か所。告知は中身 min(713px, 37.135vw)・左揃え・右寄せ、生放送中は高さ 900px・中央・下寄せ・暗い幕、放送後は中央・min-height 560px。
- **最初の画面**：トロフィーの背景動画 1440×675 の右に、ロゴ SVG 487×166（alt 空）・「DECEMBER 10」（serif 56.25px、p）・会場 22.46px 字間 2px・ADD EVENT TO CALENDAR 283×62（AddEvent、新しいタブ）の1つだけ。年と時刻（7:30p ET）は最初の画面に無い。h1 は 1×1 の画面外の文字。
- **動画**：`<video muted loop playsInline preload=metadata>` を 16:9（6,296KB）と 4:5（5,425KB）の2本、JS が `max-width:767px` で片方を play・片方を pause。poster は背景画像の PNG（PC 8,333KB）。右下に 44×44 の button「Pause background animation」→ 押して 103ms で止まりラベルが Play に。reduce は見ておらず、reduce でも PC 3.49s・SP 4.14s まで再生。トレーラー・前年の映像・見どころは全部 YouTube へのリンク（押す前の YouTube の通信 0）。
- **過去の回（Rewind）**：/rewind に 2018〜2025 の8年を帯で（放送日・視聴数・REWIND TO 2025）。1年1URL `/rewind/year-2025`、PREVIOUS YEAR は a・最新の NEXT YEAR は `span role="link"` の無効の札。章ナビ RECAP・HIGHLIGHTS・WINNERS は sticky top 90px（SP 80px）で `aria-current="location"`、押して 46〜61ms。受賞30部門は li 409×339（SP 170×471）・3列（SP 2列）、部門 18px・作品 24px 700・作り手 18px の大文字。カードにリンク・候補は無く、絵は alt 空。SP で作り手名が語の途中で折れる。
- **ナビ**：PC は5項目 16px・字間 1.6px、いまのページは `aria-current="page"`＋1.5px #f2a366 の下線。SP の3本線 40×40 は aria-label「Menu」→「Close menu」・`aria-expanded`・`aria-controls`、Esc で閉じてボタンへ戻る。SKIP TO MAIN CONTENT 255×56。外へのリンクには sr-only の「(opens in new tab)」を JS で足す。
- **見る・行く**：/faq の THE EVENT 5問（いつ・どう見る・同時配信・何がある・会場に行けるか）を審査の13問より先に。会場の券は「少しだけ売る」の文と Peacock Theater の公演ページへのリンク1本、配信先の名前・値段は0件。カードは 400×291・枠 1px #3b5e64・地 rgba(7,37,51,.4)・内側 30px・3列 間 48px、見出し #f2a366 24px、答えは開閉しない。
- **ニュース**：2件。年の絞り込みは button `role=combobox`・`aria-haspopup=listbox`（ALL／2026／2025）、選んで 53〜87ms、PC は URL が `?year=2025`。カードに日付が無い。
- **文字**：gellix（自前 woff2 400／600／700、Arial に size-adjust 104.87% の代わり）と、名前が `"ABC Arizona Serif Unlicensed Trial"` の serif（年 100px・日付 56px・About の h1 100px #f2a366）。章の題 75px／82.5 大文字（SP 36〜40）、本文 20px／22px。transition は .2s ease が96回、ボタンのホバーは `inset 0 0 0 2px #fff`。フォーカスは変数1つ（白 2px・offset 3px）。
- **重さ**（展開後）：top PC 14.26MB／SP 10.12MB（動画を流すと PC 転送 12秒で 17.4MB）、about 7.88／3.19、faq 7.31／4.62、rewind 5.73／2.73、news 5.35／3.64。各ページの背景を PNG のまま（top の poster 8,333KB と登録の帯 3,169KB、faq 5,003KB、about 3,368KB）。Rewind の絵は w=1920 の webp を 196px で。全ページで BugHerd（不具合報告）の embed.js を2回、SP は Firebase の認証 iframe 283KB。JSON-LD 0件、`lang="en"` のみ。`tools/inspect.js` は top で FAIL 0／WARN 13（Cookie の帯を含む）。

### Tomorrowland Thailand 公式（https://thailand.tomorrowland.com/en/welcome/ ・ 2026-11-08 解剖、本番 2026-12-11〜13 の33日前・4券種とも売り切れ。歩いたページ：/en/welcome/・テーマの世界 consciencia.tomorrowland.com・/en/line-up/・stories.tomorrowland.com/news・/en/tickets/festival-passes/）
- **枠**：Thailand は Next.js、テーマの世界と Stories は Webflow。全体のナビ・フッター・出演者の一覧を components.tomorrowland.com の web component（`tml-footer`・`tml-live-lineup event="TL26TH"`）で4フェス共通に差し込む。PC のナビは 72px の帯1本（点9つ 38×38・ロゴ・8項目 europa 16px・言語・アカウント）、いまのページは 700＋下線 2px。SP は全体の帯 56px＋フェスの帯 72px。
- **最初の画面**：写真1枚（webp 2880×1920・599KB、動画なし）に中央揃えで h1 48px（SP 32px）・日付と会場の1行（14px/24px・700・字間 3px・大文字）・状態の文「…is officially sold out.」16px/24px。購入ボタンなし。
- **テーマの世界（Consciencia）**：3フェス共通の2026年のテーマを別サイトで。Province 6つ（Sadness〜Desire）は Webflow Tabs の `a role="tab"`・`aria-selected`・roving tabindex、→ キーで選択も移る（URL は変わらない）。額縁の avif 501KB の中に 3:4 の mp4 557×742。地 #fff4df・文字 #3b311a（11.74:1）、見出し owners-xwide／owners-text（Adobe Fonts）。h1 はロゴ画像で alt 空、`lang` 空。
- **動画**：Thailand の3ページは0本。Consciencia は8本とも `autoplay muted loop preload="metadata"`・poster なしで、読み込みの 1.2〜1.8s（SP 0.9〜1.3s）に全部取りに行く（見えないタブの5本 14,036KB、予告 18,524KB の応答）。reduce でも同じ。
- **出演者**：`tml-live-lineup` が config・stages・本体の JSON（45,690B、performances 124件・120組・b2b 8）を取って組む。STAGES／ARTISTS の button 2つ（106〜110×49・12px・700・字間 2px・角 100px・枠 1px #eb8100、選んだ方は地が linear-gradient(90deg,#8a3900,#eb8100)）、日の button 3つ（74〜119ms で入れ替え、`?day=2026-12-12`、通信 0KB）。STAGES は白いカード 548px に日の帯と名前の button を「 . 」でつないだ流れ（16px/48px・字間 2px）、ARTISTS は頭文字のリンク 25 と4列の masonry。状態は class だけ（aria-pressed なし）。config は `withTimetable:false`、stages は日の名前の仮、124件とも 12:00〜12:01、見出しは「MORE ARTISTS TO BE ANNOUNCED」。
- **1組**：名前を押すと 442ms（SP 1,494ms）で重ね（写真 300×300・名前 h2 40px 字間 4px・SNS のアイコン・日の札「FRIDAY／Week 1／Friday, Dec 11」）、URL に `&artist=1262705358`、直接開いても出る。role なし・Esc 不可・閉じる 14×14 で名前なし・フォーカスは body、外を押すと閉じる。写真に alt 属性なし（22件は写真なし）、1週末なのに「Week 1」。
- **買う**：Festival Passes は券4種の説明 → 値段の表2つ（通し・1日）。行の右に SOLD OUT の札（グラデーション）と値段の札（14px・700・字間 1px・padding 6px 12px・角 100px）、値段は「฿ 12500.00」「฿ 20200.00」「฿ 5100.00」「฿ 8200.00」、表の下に「*Prices include VAT and service fees」。Treasure Case は「570 THB」「1,150 THB」と表記がぶれる。リセール・次回の案内は歩いたページに無い。
- **ニュース**：Thailand のサイトに無く、全体のナビの Stories の News 4件（本の案内が中心、日付なし、登録フォームは Cookie を全部許すまで出ない）。
- **表記**：言語は English・ไทย・「中國人」（言語名の誤り）。年齢の条件は歩いた5ページに無い。JSON-LD 0。
- **安全**：reduced-motion は Thailand・Stories の CSS に0件。Cookie の帯で何も押す前に analytics.tiktok.com 288KB・connect.facebook.net 227KB を取る。メニューのリンクは `:focus-visible{outline:none;text-decoration:underline}`。
- **重さ**（展開後）：top PC 5.32／SP 5.01MB、line-up 4.57／4.27、buy 5.05／4.75、news 5.46／3.27、Consciencia 24.29／17.83（mp4 19,102KB）。Thailand の3ページは JS が 3.8MB で、うち `tml-live-lineup` 1,353KB を一覧の無い top・buy でも取る。

### 笠間の陶炎祭（ひまつり）公式（https://www.himatsuri.net/ ・ 2026-10-26 解剖、第45回 2026-04-29〜05-05 の約5か月半後。歩いた5ページ：/・/about/・/syutten/・/blog/・/access/ と、会場図・ハウツー・バス路線図の PDF 3本）
- **下位の型**：入場料 1日500円（18歳以下無料）の地方の陶器市。会場は笠間芸術の森公園、来場8万人（閉幕あいさつ）。
- **最初の画面**：黒 #000 のヘッダー 70px（SP 56px 固定）→ 写真4枚のフェード 80vh（PC 720px・SP 591px）。日付・時刻・会場はその下にロゴ画像と横並びで、PC は日付 18px が y=892px（1440×900 の折り目の下）、SP は 34px（時刻・会場 24px）が y=734px。曜日は 6px（SP 12px）の黒い札。入場料は上下 3px double の囲み。
- **会場図**：Web には 900×620 の縮小画像（PC 916px・SP 286px 幅で表示）だけ、押すと PDF（1,547.7×1,082.8pt・2ページ・1.69MB）を別タブ。PDF は店番 1〜211、凡例5種（企画展・フードコート・飲食店・ふるさと納税商品券の使える店・案内ポール A〜K）、飲食は区画から吹き出しで品名、2ページ目に「出店名・店番」の名簿（☆は飲食）。店名は 5.8〜6.5pt で、390px の画面に収めると 6.5pt＝1.64px、16px にするには約9.8倍。雨の日の別配置は無い。
- **出店者一覧**：226件を五十音11段（あ44・か40・さ32・た28・な14・は20・ま17・や7・ら7・わ4、新人の「笠間のたまご」13）の CSS だけのアコーディオン。段の見出し 21px 太字・LightGray・高さ 56px、同時に複数開ける。1件は角丸 8px の箱に屋号（#deefeb の帯）と作り手の2段、14px 太字、PC 4列・SP 2列。作家ポータルへのリンク 94本。店番・出店場所・ジャンル・絞り込み・検索・件数・0件の画面は無い。
- **雨天**：判断の時刻・段階・中止の基準は書いていない。トップ下部の本文（16px）に「雨なら長靴、朝晴れていても夕立があるので折り畳み傘・レインコート」、ハウツーPDFの持ち物に「雨具」。雨の日に開いたことは会期中のブログ（「朝からしっかり雨の一日でしたが」）でだけ分かる。
- **行き方**：Google マップ 600px → 電車（友部駅・笠間駅）→ バス（details の入れ子5つ：臨時バス4路線は約30分間隔・大人100円・小人50円、路線ごとに始発・最終、友部駅線の中に夜まつりの増便4本／路線バス／周遊バス／益子陶器市との直行便 1日3往復・予約制 500円／やきものライナー）→ 駐車場（有料500円と無料の色分けと Google マイマップ 480px。台数・満車の目安は無い）→ 自転車2種。運賃は 36px・太さ 800 の数字に 14px の札。渋滞はトップのボタン（市役所へ）とハウツーQ&A「ピークは？→ほぼ終日」。
- **回る順**：お気に入り・マイリストの部品は無い。ハウツーPDFの持ち物の1つ目が「油性ペン・蛍光ペン：気に入った作家のブース位置などを会場マップに書き込もう」。
- **ナビ**：PC は6項目 14px、300px スクロールで rgba(0,0,0,.7) の固定 55px に（top 0.65s）。SP の3本線は `div#nav-toggle`、開くと rgba(0,0,0,.9) の全画面に 30px・太さ 900 の6項目（opacity 1s）。
- **部品の値**：html 10px、本文 16px/30.4px・字間 .8px、見出しは游明朝（h1 48px・SP 32px、h2 24px）。本文は Quicksand を先頭に書くが読み込んでおらず游ゴシックに落ちる。ボタン #2d343c（白文字 12.59:1）、作家リンク #036eb8（5.35:1）、注意の赤 #f00 14px（4.0:1）。
- **動き**：Swiper 4.5.1 の fade（1,500ms・8,000ms ごと）と写真の zoomUp（scale 1→1.15・12s linear）。`prefers-reduced-motion` は 0件で、reduce でも両方続く。
- **重さ**（解析タグ除く・最下部までスクロール）：top PC 4.92MB／SP 4.74MB、about 4.72／4.55、syutten 3.06／2.88、blog 5.06／4.86、access 8.38／7.86（Google マップ3つで JS 6,068KB）。全ページのフッターに `loading=lazy` の Google マップ（最下部で約1.5MB）。GTM 1.35MB は別。
- **表記**：`lang="ja"` のみ。JSON-LD は Yoast の WebPage・Organization だけで Event なし。2026年のバス路線図の alt が「第44回笠間の陶炎祭会場マップ」。`tools/inspect.js` はトップで FAIL 0 / WARN 2（ブログの日付を通し番号と誤検出）。情報の密度は、画面1枚の塊が中央値 PC 6・SP 3、最初の画面の文字 PC 52字・SP 68字（写真のフェードが最初の画面を占める）。

### 比べたページ：有田陶器市の駐車場情報（https://www.arita-toukiichi.or.jp/parking/ ・ 2026-10-26、1ページの記事一覧と記事1本）
- 記事1本が1回の更新。第122回（2026-04-29〜05-05）の7日で63本、早いものは 5:00・遅いものは 17:00（日ごと 12・4・7・15・4・13・8）。
- 1本は「番号・駐車場名（収容台数）・開く時刻・状況・ナビ」の表。16か所・計4,870台。状況は ○ 空きあり・△ 空き50％以下・× 満車。注記に「雨天時使用禁止」（白磁ヶ丘公園 100台）、「4月30日、5月1日は駐車できません」「初日は 3:00〜」。「携帯電話によっては過去の情報のまま表示する場合がございます」と書いている。

## 真似る型
- 日付・会場は、PC・SP とも最初の画面に**文字で**入れる（Lollapalooza はヘッダーに常時。陶炎祭は PC で折り目の下、Primavera はポスター画像の中とメガメニューの中だけ。The Game Awards は文字だが年と時刻が無い。Tomorrowland Thailand は h1 の真下に 14px・700・字間 3px・大文字の1行で PC y=327・SP y=282、ただし曜日・時刻なし）。年・曜日・開始時刻（地域の時刻）まで書く。
- 本番までの「いま」を、固定ヘッダーの中の帯に全ページで出す（Lollapalooza：ヘッダーに会場・日付の3行、The Game Awards：54px の帯に「38 DAYS UNTIL LIVE SHOW」を CMS の日付から毎回計算）。文・色・リンクは CMS で替え、当日と後の文も決めておく（TGA は 0 のときの文の出し分けが JS に無い）。
- （チケット制のフェス）出演者は「全員の名前の一覧」を1ページ持ち、1組1URL にする。一覧は文字で組む（Primavera の A-Z：150組・30px／50.7px の流れ・1組ずつ a）。ポスター・時間割を画像だけで出すと名前が読めず押せない（Lollapalooza：ラインナップ・時間割が alt 空の画像、Primavera：トップのポスターの alt が画像の URL）。Tomorrowland Thailand は1つの JSON（124件に日・ステージ・開始・終了・写真・SNS）から日の流れと A-Z を作り、日・見え方・1組を query（`?day=`・`?page=artists`・`&artist=`）に残す。1組1URL は別ページでなく query でもよいが、そのときは重ねを dialog にする（Tomorrowland の重ねは Esc 不可・閉じる 14×14 で名前なし）。
- （チケット制のフェス）チケットのページは「券種・値段」の上に、販売前・販売中・終了後の段階を決めて出し分ける。終了後も次回のお知らせ登録を残し（Lollapalooza の /tickets）、販売中は券種1行に「名前｜状態の札｜値段＋手数料｜BUY」（Primavera：64px・On Sale／VIP の札・FROM €350.00 + fees）。売り切れても値段の文字は残し、行に SOLD OUT の札を並べる（Tomorrowland Thailand：4種とも ฿ 12500.00 などを文字で、表の下に「*Prices include VAT and service fees」）。売り切れの後の次の一手（リセールの日時・次回の登録）も行の下に書く（Tomorrowland は歩いたページに無かった）。
- （チケット制のフェス）購入の入口を全ページの同じ場所に置く（Lollapalooza：固定ヘッダー右の TICKETS 117×56、Primavera：ヘッダー右の TICKETS と、メガメニューの祭りの名前の下の黒い丸）。

## 真似る候補（見本1つ）
- トップの最初の画面を「告知・本番中・終了後」の3状態で持ち、同じ部品の class だけを替える（The Game Awards：`home-hero--announcement／--live／--post-show`）。
- 背景の動画には最初の画面の右下に 44×44 の停止 button、ラベルを止める／再開で入れ替える（The Game Awards）。reduce なら最初から止める。
- 過去の回は1年1URL で、年の一覧（放送日・視聴数）から入り、ページ内は sticky の章ナビ3つに `aria-current="location"`（The Game Awards の Rewind）。受賞はカードをリンクにし、候補も並べる。
- 「どこで見る・行けるか」を FAQ の最初の段に置く（The Game Awards の THE EVENT 5問）。ただし値段・配信先は表で。
- 会場・日付を、固定ヘッダーのロゴの横に常時置き、右に購入ボタンを1つ置く（Lollapalooza）。
- 出演者の名前にホバー・タップすると、一覧の上に写真のカード（名前・プロフィールへ）を重ね、一覧から離れない（Primavera：68ms・約 296×220）。フォーカスでも出し、色ではなく下線で示す。
- 1組の紹介を決まった問いで書く（Primavera：どこから聴くか／知っておくこと／知らなくていいが面白いこと／なぜ出るのか／これが好きなら）。
- 売り場の種類（一般／業界向け）を帯の最上段のタブ2つに、買う先が複数なら BUY を押してから販売先を選ばせる（Primavera：716×56 のタブ、Fever と分割払いの2行のダイアログ）。
- 地元割・未成年・車いす・FAQ をチケットのページの章立てで同じページに（Primavera の Tickets Info：\ GENERAL SALE・\ MINORS・\ ACCESSIBLE TICKET・\ FAQS）。
- メガメニューを祭りごとの目次にし、名前 60px・日付と会場の1行・TICKETS を頭に置く（Primavera の FESTIVALS、5列）。
- 約束は数字1つの文にして、色の違う箱に1枚ずつ載せる。長い演出にはヘッダー直下に高さ 16px の進捗バーを貼る（Lollapalooza）。
- 下層ページの頭を「h1 → 2行の h2 → ボタン1つ」の同じ区画で始める（Lollapalooza の4ページ）。
- ヒーローの配置は CMS の data 属性（揃え・絵の向き・上下の余白）で決め、CSS だけで組み替える（Lollapalooza）。
- 販売前・販売中・終了後で、チケットのページに何を出すかを決めておく。終了後も「次回のお知らせ登録」を残す（Lollapalooza の終了後はこれだけ）。
- 協賛は本文に混ぜず、フッター直前に正方形のロゴ枠で集める（Lollapalooza）。陶炎祭もフッター直前に6社のロゴ。
- 会場図は「番号つき区画＋凡例＋案内の柱＋飲食は吹き出しで品名」で組む（陶炎祭のPDF：店番 1〜211・凡例5種・柱 A〜K）。Web で組むときは HTML の番号ボタンにし、一覧の店番と往復させる。
- 出店者は段（五十音・区画）に分け、件数と新人の段を別に出す。1件は屋号の帯＋作り手、作家ページへのリンク（陶炎祭：11段・226件・リンク94本）。
- 行き方は手段ごとの開閉の入れ子にし、路線ごとに始発・最終、時間帯で変わる便（夜の増便）はその路線の中に書く（陶炎祭）。
- 駐車場は「台数・開く時刻・○△×」の表を、時刻つきで当日に何度も出し直す（有田：7日で63回）。
- 雨は「持ち物」と「場所ごとの可否」として書く（陶炎祭の長靴・傘、有田の「雨天時使用禁止」）。判断の時刻と段階はどちらにも無いので、作るときは決めて書く（例：6:00 判断・6:15 掲出、開催／縮小／中止）。
- 自分の回る順は、店番を紙の会場図に書き写せる形にする（陶炎祭のハウツー「ペンでブース位置を書き込もう」）。
- テーマの世界の区画（感情・地域・章）は、本物のタブ（role=tab・aria-selected・roving tabindex・矢印キー）で切り替える（Tomorrowland の Consciencia の Province 6つ）。URL にも区画を残す。
- 主の色をグラデーション1本（Tomorrowland：90deg #8a3900→#eb8100）に決め、ボタン・選んだタブ・日の帯・状態の札の4か所に同じものを使う。白い文字は濃い側に（#8a3900 で 7.23:1、#eb8100 では 2.51:1）。
- いくつものフェス・回で同じ部品（ナビ・フッター・出演者の一覧）を web component にし、使うページでだけ読む（Tomorrowland の `tml-*`。一覧の無いページでも 1,353KB を取るのは反面教師）。

## 反面教師
- 最初の画面の行動を「カレンダーに入れる」だけにし、配信先・券・値段をどこにも表で出さない（The Game Awards：配信先の名前0・値段0、時刻は FAQ の文の中）。
- 背景を PNG のまま置き、poster の PNG と動画の両方を取る（The Game Awards：top PC 8,333KB＋mp4 6,296KB）。本番に不具合報告の道具（BugHerd）を残す。
- ラインナップ・時間割を画像1枚で出し、alt を空にする（Lollapalooza）。検索・読み上げ・出演者ごとのURLが無い。
- 日付タブを `<a href="#">` で作り、ARIA・URL を持たせない（Lollapalooza）。
- 開催後も JSON-LD が EventScheduled、h1 が物販のまま、見出し文言が重複したまま残る（Lollapalooza）。
- 時間割の4日分の画像を eager で読み、見えない3枚も取る。112px の協賛ロゴに `sizes="100vw"`（Lollapalooza）。
- 991px 以下で `*:focus{outline:none}` にしてフォーカスを消す（Lollapalooza）。
- 店番を PDF の中だけに置き、Web の出店者一覧に番号・場所を出さない。一覧ページの地図ボタンを消したまま「公開予定」の文を閉幕後も残す（陶炎祭）。
- アコーディオンの checkbox を `display:none` にしてキーボードで開けない。閉じた段の中のリンクに Tab が入る（陶炎祭の94本）。
- 駐車場を地図の埋め込みだけにして台数・満車を書かず、地図3つで 8.38MB（陶炎祭の access）。
- 出演者一覧へ、トップの本文から1本もリンクしない（Primavera：A-Z はメガメニューの中だけ）。ポスターの名前をそのまま一覧・1組へのリンクにする。
- 同じページで値段を2通り書く（Primavera の Tickets Info：帯は FROM €350／€545、本文は €360／€560）。値段は1つの表から出す。
- ホバー色をブランドの淡い色にして、地と 1.45:1（Primavera の A-Z の #7dd6ad on #efeae7）。SP では名前が span でリンクにならない。
- 文字だけのページでも決済 SDK・全クラスの CSS を読み 16.7MB（Primavera：Stripe 3.7MB・CSS 2.9MB・JS 13MB を全ページ）。
- 1組の重ねを div にして Esc で閉じず、閉じるを 14×14 の名前なしにする。別のフェスの部品の言葉（1週末なのに「Week 1」）を残す（Tomorrowland Thailand の Line-Up）。
- 見えないタブの動画まで読み込み時に取り、reduce でも流す（Tomorrowland の Consciencia：5本 14,036KB）。
- 本番の1か月前・売り切れ後に、ステージと時刻を仮の値（日の名前のステージ・全組 12:00〜12:01）のまま「MORE ARTISTS TO BE ANNOUNCED」と出す。いつ出すかの日付が無い（Tomorrowland Thailand）。
