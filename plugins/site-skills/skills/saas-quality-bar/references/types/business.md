# 業務SaaS（営業・人事・会計・社内ツール・製品開発）

## この下位タイプで特に見ること
役割別の訴求、導入の相談、セキュリティ資料、乗り換え（移行）の手間

## 見本の実測

### Backlog（ヌーラボ）https://backlog.com/ja/ — 2026-10-24
- **最初の画面**：h1「AIで進める プロジェクト管理なら（ロゴ）」。主「まずは無料で試してみる」（橙の塗り）と副「資料をダウンロードする」（橙の枠線）を横並びにし、どちらもボタン内の上段に小さく理由（「支払い情報の入力不要」「Backlogがよくわかる！」）。右に PC＋スマホの実画面キャプチャ1枚（webp・`fetchpriority="high"`）と「デモを体験する」（外部の操作デモを iframe のダイアログで開く）。実績の数字3つ（有料契約数・有料利用ユーザー数・継続率）に、時点（2026年6月末）と数え方の注記。
- **機能の並べ方**：機能ページの h1 は「開発からマーケティング、人事・総務まで様々な職種で使われている」＝役割の広さを先に。課題別の4ブロック（小見出し→成果の見出し→3〜4文→チェック箇条書き2〜3行→詳細リンク＋実画面、左右交互）→ 機能カード8枚。「Jira・Redmineからの移行」を機能カードの1枚として並べる。
- **料金表**：カードは有料4プラン、フリーは注記1行と比較表の1列だけ。強調は1枚（枠と帯の色だけ、「おすすめ」の文字なし）。月払い／年払いは visually-hidden の radio 2つで作ったスイッチ、ラベルに「(5%オフ)」、年払いのときだけカードに年額の行。「￥」「/月」「税抜」を、カード下の注記と比較表の行見出しの両方に書く。料金表の上にページ内目次4つ（比較・見積書・導入までの流れ・FAQ）。比較表は PC で5区分35行を全部開き、SP では同じ35項目を `<details>` にして「月払い料金」だけ開く。問い合わせだけのプランは無く、見積書を料金ページからダウンロードできる。
- **選べない人へ**：「最適プラン診断」4問（置き場所／セキュリティ資料の要否／2段階認証の必須化／31人以上か）→ プラン名・月額・主な機能3つ・試すボタン。各問に「前の質問へ戻る」「始めからやり直す」。
- **試すまで**：カード4枚と比較表の「まずは無料で試す」は全部同じトライアル（最上位プランの機能で30日）へ。プランごとの入口は「すぐに契約を始める」だけ。冒頭に「プランは正式登録時にお選びください」。導入までの流れ4ステップ（申し込み→お試し→契約→正式導入、データは引き継ぎ）。申込フォームは robots.txt で禁止のため未確認。
- **事例と信頼**：事例一覧は上にカルーセル4件、絞り込み（業種13・職種11・従業員数5・使い方10）、1ページ15件。事例詳細は h1 に成果の数字 →「導入前の課題」「導入後の効果」の箇条書きを先に → インタビュー。セキュリティページと稼働状況（status.nulab.com）はフッターから。
- **データと重さ**：PC で top 12.16MB / features 7.97MB / pricing 8.33MB / customers 10.53MB / docs 3.36MB。全ページで最大は商談予約ウィジェット（2,037KB）。構造化データは WebPage・CollectionPage・BreadcrumbList まで、FAQPage・SoftwareApplication は無し。他ページの先読みなし。

### CoDMON（コドモン、保育・教育施設向け ICT）https://www.codmon.com/ — 2026-10-26
- **最初の画面**：h1 は3行で大きさを変える（PC 30／48／56px、SP 22／30／40px）。行の中の助詞「と・の・を」だけを一段小さく（PC 38・48px）。行動は資料請求（白地に #007392）とお問い合わせ（#e22066 に白）の2つで、桃の上に「今なら4月開始もスムーズです」の吹き出し。SP ではボタンの順が逆（お問い合わせが上）。「No.1」は調査名・調査会社・年月を最初の画面の下に 12px で書く。
- **見た目の値**：
  - 配色（トップ PC、文字の出現数）：#4d4c4b 291（本文）・#007392 45（見出し）・#676767 32（注記）・#0084a3 15（リンク）・#01a2c1（強調の水色）。地の面積は #fff・#f2fcfe・#e3f8fc・#f8f8f8 の順で、章は地の段の交互で区切る。主ボタン #e22066（白 4.53:1）、ホバー #cb1a5a（5.48:1）。大きな価格 #ff3c82（3.38:1、88px なので可）。リンク #0084a3 は 4.35:1、必須の＊ #f35b7a は 3.19:1、入力欄の枠 #b8bdc9 は 1.88:1、フォーカスの輪 #58c2d4 は 2.08:1 で不足。
  - 文字：Noto Sans JP（＋YakuHanJP）1書体、太さ 400／700（価格だけ 600）、字間 normal、行間 1.5。h2 38px（SP 26px）、h3 16〜24px、本文 16px／24px（SP 14px／21px）、注記 12px／18px、価格 88px（SP 48px）。
  - 余白：章の上下 80px（SP 48px）、h2→リード 24px（SP 16px）、h2→カード 40px。中身の幅 1040px と 1152px（SP 最大 448px）。ヘッダー 74px（SP 58px）。
  - 角：8px（カード・タイル・写真、トップ PC で93要素）、40px（ボタン9）、4px（札・入力欄）。中くらいの角（12〜16px）は使わない。
  - ボタン：主・副とも 272×62・20px 700・角 40px・影 0 4px 0 rgba(0,102,133,.3)（ぼかさない）。ヘッダーの入口は 160×74 の角なしの四角2つ（#e3f8fc と #eb0054）。
  - 動き：color／transform／all の .3s ease。矢印は translateX(4px)、写真は scale(1.1)、カードは 4px の輪 #58c2d4。主ボタンの地は瞬時に変わる。数字の円グラフだけ @property で 1s ease-out。ロゴの帯は 100s linear。prefers-reduced-motion のルール 7つ。
- **製品画面の見せ方**：歩いた4ページすべて画像。最初の画面は人がタブレットを持つ写真（トップ 505×544・学童 532×457）、端末の合成画像（424×242）、機能ごとの画面の切り抜き（398×204〜291）、紹介動画は YouTube へのリンク（688×387 のサムネイル）。DOM の画面模型は無く、画像の中の文字は読めない大きさ。数字が主役の比較図（料金の積み木 800×325）は alt に金額を全部書く。
- **機能の並べ方**：施設の種類の入口8つ（写真カード 242×153）→ 機能タイル18枚（330×80・角8・ホバーで枠 #58c2d4／地 #f2fcfe／文字 #007392）。施設ごとのページ（学童保育）は、その現場の言葉で6つに絞り直す（01〜06 の番号つき、左右交互）。
- **料金の決め方**：入力欄・スライダー・診断・表は無い。定員3段（〜30名 3,300円／31〜60名 5,500円／61〜100名 8,800円、101名以上は100名ごとに 5,500円加算、税込・月額）を並べ、真ん中の段だけ 88px、ほかは 30px。段の名前は 12px の札（地 #ebebeb・角 4px）。おすすめのパックプラン（27,500／33,000／38,500円）は、オプションを全部足した 69,300円の積み木と、パック 33,000円の1枚を並べた図で比べる。月払い／年払いの切り替えは無い。料金表 PDF はフォームの後。
- **試すまで（フォーム）**：無料で試す入口は無く、資料請求・料金表・問い合わせの3つが同じ JotForm の2段（「1. お問い合わせ内容」「2. 施設情報」）。1段目6項目（必須4：関心のあるサービス・導入時期・乗り換えの有無・きっかけ）、2段目11項目（必須9：施設種別・施設数・民間／公立・事業者名・施設名・都道府県・担当者名・電話・メール）と画像認証。必須は見出しの後ろの「＊」、任意は「（任意）」。説明文は欄の上（「ハイフンなしで」「未定なら『未定』と」）。送信ボタンの文に同意を入れる（「個人情報の取り扱いに同意して送信する」）。
- **状態**：必須エラーは「この項目は必須です」の吹き出し（12px 白・地 #ff7496・2.56:1）で、次の項目の見出しに重なる。欄の地は淡い桃に。ヘルプ検索の0件は見出し「“…”の検索結果：0件」だけで次の手が無い。事例の絞り込みはページごと移り（1.74秒）、骨組みは無い。3つのタブで選んでも、開いていたタブの1条件だけで絞られた。
- **事例と信頼**：事例76件、タブ3つ（施設種別10・利用サービス16・成果11）で絞り込み。実績の数字（25,696施設・768自治体・継続利用率 99.7%）はどれも「2026年10月1日時点」と ※ の数え方つき。
- **情報の密度**（tools/inspect.js）：トップの画面1枚あたりの塊は中央値 PC 9・SP 8、最初の画面の文字 PC 302字・SP 210字。最初の画面のすぐ下に実績 No.1 の横並び・ロゴの帯・施設別8枚が続く。
- **データと重さ**：PC で top 11.09MB / features 8.88MB / pricing 6.96MB / customers 11.11MB / ヘルプ 1.74MB。全ページで最大は商談予約 immedio（2,037KB、Backlog と同じ）。構造化データはトップに Organization・Service・OfferCatalog・Offer、学童ページに FAQPage。料金ページには無い。

### Linear（製品開発の課題管理、海外）https://linear.app/ — 2026-10-31
- **最初の画面**：h1「The product development system for teams and agents」64px／510／字間 -0.022em（SP 38px・4行）、下に 15px #8a8f98 の一文と右端の「New Loops →」だけ。行動のボタンは最初の画面の中に無く、ヘッダー（73px・blur 20px）の Sign up 73×32（#e5e5e6 に黒、15.83:1）だけ。h1 は style 属性の opacity:0・blur(10px)・translateY(20%) から JS で出し、この環境では読み込みから 7.1〜8.2秒見えない（JS なしでは見えないまま）。
- **製品画面**：画像ではなく 3,369 要素の DOM。課題「DRV-8852 Faster app launch」の本文・活動・コメントと、右下の AI のパネル（「Thinking...」→「Worked for 10 sec」）。82 の animation（5×5 のドット 75個は steps(1,end) で reduce でも回る）。止めるボタンなし。
- **機能の並べ方**：トップは仕事の順に4章（Intake → Planning → AI → Build）を同じ型で：左に2行の h2 48px、右に 24px の一文＋「Learn more →」、下に画面、最後に「Features」の行の「＋」4〜6個（計20）。「＋」は URL を変えず、幅 640px・角 8px のシート「TECH SPECS」を開き、Esc で閉じるとフォーカスが押したボタンに戻る。機能ページはカード8枚（976px 幅2・476×400 が6、地 #0f1011・角 16px）。
- **料金表**：4列（Free $0／Basic $10／Business $16／Enterprise Custom、per user/month）をカードの箱にせず縦の線で分ける。「おすすめ」の札は無く、強調は Business の塗った Get started（133×40）だけ。年払いが初めで、Basic と Business のスイッチは連動。月払いは $12／$18（年払いは 16.7%／11.1% 安い）だが率は書かず、月払いにしてもラベルは「Billed yearly」のまま。スイッチの checkbox は readonly で名前なし。税・通貨の書き方なし、FAQ なし。
- **比較表**：名前なしの区分4行＋8区分＝55行（Core 14・AI 7・Integrations 4・Team 3・Analytics 3・Asks 6・Security 10・Support 4）。div に role="table"、✓×に「Included／Not included」の読み上げ。見出しの行は PC top:72px・56px で sticky、SP は top:64px の select（label なし）で1プランずつ、行の名前を左・値を右。開閉なし。
- **試すまで**：入口は /signup の1つ（文言は Sign up と Get started）。クレジットカードの要否はどのページにも書かない。
- **事例と信頼**：/customers はタブ8つがリンク（/customers/ai など、1回目 1,528ms・2回目 83ms）。カード12枚（384×338、動画6・記事6）→ 数字3つ（2.0x・3.3x・50%、時点も出典も無い）→ 一覧16社と最後の行「Your company ― Make the switch」。実績の言い方は「40,000 product teams／companies／organizations」の3通りで時点なし。
- **ドキュメント**：同じドメイン・書体・色。⌘K の検索の0件は何も出ない。索引 /api/search-index 1,107KB を全ページで先に読む。
- **見た目の値**：地 #08090a・#0f1011・#141516・#191a1b の4段、文字 #f7f8f8・#d0d6e0・#8a8f98（6.13:1）・#62666d（3.45:1、12px の日付に使う）。主ボタンは紫でなく白 #e5e5e6、紫 #5e6ad2 はスイッチの入。書体は Inter Variable（344KB）＋ Berkeley Mono、太さ 400／510／590。文字の段は変数で title-1〜9（17〜72px、字間 -0.012em／32px からは -0.022em）・text 10〜17px。ボタンは角 9999px・高さ 40px、動きは .16s cubic-bezier(.25,.46,.45,.94)。
- **データと重さ**：PC で top 11.43MB / features 15.66MB / pricing 13.22MB / customers 17.00MB / docs 8.32MB（SP はトップ 14.90MB）。重さの半分は Next.js の先読み（トップ 42件 7,717KB＝44%、事例 61件 54%）。チャット・商談のウィジェットは無く、第三者は事例ページの LinkedIn 61KB だけ。構造化データは料金の WebPage だけ。

### Attio（CRM、海外）https://attio.com/ — 2026-11-04
- **最初の画面**：黒いお知らせの帯 48px → ピル 283×30（角 13px）→ h1 64px／行間 0.95／600／字間 -1.28px（interDisplay、SP 40px）→ 一文 18px／23.4px #6f7988（4.41:1）・最大幅 486px → Talk to sales（白・縁 #cad0d9）と Start for free（#202124・縁 #505967）を 108×36・110×36 で並べる。SP は同じ題のまま、メール欄 320×40＋「Send me a demo」320×40＋文字の Talk to sales に入れ替える。
- **製品画面**：画像でなく DOM（トップ 4,232要素、img 70枚は顔とロゴの小片）。最初の窓は sticky（1440×900）で、質問欄に文字が入り、記録の画面が開く。下の「眠らない仕組み」は売上の仕事の順に5章（Build pipeline・Convert leads・Run sales motions・Forecast revenue・Retain and expand）で、章ごとに表（ICP Score 98〜91）・ワークフロー・SQL・ARR のグラフと模型を替える。SP は窓を縮めるだけで、中の文字が 7px（133個）・6px・4px になる。
- **機能の並べ方**：トップの5章は左の目次（348px・sticky top:116px）で今を示す：今 #1c1d1f、ほか #d3d8df（#fafafb の上で 1.37:1）、2px の印 #709ff5、色 .32s cubic-bezier(.33,1,.68,1)。見出しは1文の2トーン（頭の数語 #1c1d1f＋続き #6f7988、h3 24px／27.6px）。機能ページ /platform/data は h1 が 13px のピル「Data model」で、題 56px は h2。頭に物どうしの図（Company・Deal・Person＝Standard、Partnership・Invoices＝Custom、各「12 More Attributes」）。
- **料金表**：4枚（Free $0／Plus $35〔月払い $44〕／Pro $79〔$99〕／Enterprise Custom、per user/month、ドルのみ・税の記載なし）。Annual で開き、Plus と Pro にだけ札「Save 20%」（12px・#538bf3 on #e8f0ff・2.89:1）。切り替えは 94×36 の2つで白い板が .5s cubic-bezier(.2,0,0,1)。価格は月と年の数字を両方 DOM に置き、inline-grid の同じ升で、出る方 -100%・来る方 +100%→0 を 500ms ease-out。カード 271×398・角 20px、Pro だけ縁 #94b9ff＋4px の輪 rgba(83,139,243,.1)＋塗りのボタン。カードの後ろの格子の線（横2・縦5）が 1.5s linear、0〜600ms ずらして引かれる。
- **比較表**：8区分76行（Credits 3＋追加4段・Workspace 16・Automations 3・Email and calendar 10・Enrichment 小見出し3＋23・Reporting 7・Security and admin 10・Support 4）。PC は「払い方の切り替え＋4つの価格とボタン」の帯 1116×199 を top:116px、区分名 h2 を top:313px に2段で sticky。Pro の列は地 #fafafb、行の名前の右に ⓘ 48個。SP は1行ずつ開閉し、開くと4プランを縦に並べる。PC の区分の開閉なし。FAQ 12問（base-ui の aria-expanded、FAQPage なし）。
- **試すまで**：Start for free・Continue with Plus／Pro は1手で app.attio.com/welcome/sign-in（別ドメイン）。カード不要は料金ページの題の下の一文だけ、試用は FAQ で「Pro を14日」。
- **事例と信頼**：トップのロゴは 5×2 の格子（1マス 278×96・地 #fafafb・線 #d3d8df）で、事例のある4社だけ右上に ↗。数字は「30,000+ customers」1つ（時点なし）。事例一覧は7件を全幅 1388×460・半分 578×460 ×2 の交互、札は等幅の大文字 12px／14px／600／字間 .72px で「業種 / 調達額 [段階]」。詳細は左に About・Industry・Company size・Headquarters・Founded・Funding raised・Key features、右に Challenge・Solution・Results（3行）→ 本文。
- **ドキュメント**：/help は左の目次（Academy 5・Reference 14）、題 56px、検索 320×46 と ⌘K、よく探す語3つ、入口3枚（Academy・Reference・Developers）。開発者の文書は docs.attio.com。
- **見た目の値**：地 #fff・帯 #fafafb・面 #f3f4f6、文字 #1c1d1f（16.87:1）・#505967（7.08:1）・#6f7988（4.41:1）・#b5bdc9。線 #e4e7ec・#cad0d9。青は印だけ（#266df0 4.64:1）。書体は inter・interDisplay・JetBrains Mono・tiemposText（引用）をすべて自前の woff2（348KB）。ボタンは全ページ 高さ36・角10・14px／500、hover 50ms・戻り .3s cubic-bezier(.2,0,0,1)。色の既定 .2s cubic-bezier(.33,1,.68,1)。reduce で keyframes（レーダー・ロール）は止まるが、窓の文字打ちなど JS の書き換えは5秒で 345回残る（no-preference 1,775回）。
- **データと重さ**：PC で top 13.97MB / features 21.58MB / pricing 15.41MB / customers 16.29MB / help 15.58MB（展開後。トップの転送は約 6.25MB・37ホスト）。全ページ共通の JS 2,675KB、reCAPTCHA の recaptcha__ja.js 836KB を3回、Intercom、RSC の先読み トップ 52本・料金 59本（機能ページは /apps を 1,235KB）。構造化データはトップだけ Organization・WebSite・SoftwareApplication・Offer。

### Plain（B2B のサポート基盤、海外）https://www.plain.com/ — 2026-11-08
- **最初の画面**：帯 40px（#0a2414、札「RSVP」#1ad379。SP は帯の文が PC と違う）→ ヘッダー 70px（白 .92・SIGN IN 枠 88×36・BOOK A DEMO 塗り 120×36）。h1 42/46px・Medium 500・字間 -1px（SP 38/42px）、説明 18/28px の3行、主「BOOK A DEMO」#1b6646 の塗りと副「TRY FOR FREE」枠線を 36px・角 100px・Geist Mono 13px 大文字で並べる。右半分は WebGL の canvas 664×600px の放射の図（中心にロゴ、点線と緑の実線、カーソルに線が寄る）。SP は canvas を出さない。Framer 製。
- **製品画面**：「One place…」の下に DOM の窓（左に端末、右にアプリ）で、空の窓 → 0.3〜2秒でスレッドと顧客情報 → 5秒で返答の案。Sidekick の章は灰の面 #f7f5f3 の中の DOM（「Thinking…」→ Datadog・Linear・ヘルプを調べた3行 → 答え）と、下のタブ3つ（約15.7・12.0・15.3秒で送る、非選択 opacity .5）。features（/overview）の先頭は Mux の動画（1,593KB＋プレイヤー 1,113KB）。
- **機能の並べ方**：トップは機能6を3列×2段（点のアイコン → 題 18px → 説明 15px → 「SEE CHANNELS →」）、その下にエージェント3つを「枠の札（SIDEKICK AGENT）＋ h3 32/36px（左）／説明2行＋リンク（右）→ 幅いっぱいの面 → 小見出し3」で。/overview は Platform（大2＋小6）・Automation 2・AI Suite（タブ4）・Integrations 4・暗い面の4区分16項目。ページの終わりに次の行き先の3色タイル（深緑・紺・葡萄色）。
- **料金表**：3枚（Foundation $45 年払い／$55 月払い・Horizon $99・Frontier Custom、per user per month、USD・税の記載なし）。373×630px・#f3fbe9・角 9px。年払いのトグルは Foundation のカードの中だけで、Horizon は「Billed annually」の $99 だけ（月払いの値は画面にも構造化データにも無い）。札「SAVE 20%」は Geist Mono 13px・rgba(0,0,0,.45)（3.32:1）で、実際は 18.2%。切り替えると数字の列が縦に 32px・約 250ms 動く。トグルは div に tabindex="0" だけ（role・aria-checked なし）。8回開くと3回だけ Horizon に「MOST POPULAR」の札と 1.5px の枠（サーバーの HTML はこの版）、5回は札なしで Frontier のボタンが塗りになる。
- **比較表**：13区分69行（Seats 2・Credits 5〔追加 +1,000〜+10,000 credits を $10〜$100 で表の中に〕・AI agents 2・Infrastructure 1・Automation 5・Channels 9・Support operations 7・Slack operations 3・Customer context 7・Integrations 10・Importers 4・Developer platform 5・Security 9）。区分名は Geist Mono 13px 大文字、行ごとに i の印。プラン名の行は PC で sticky top:69px、Horizon の列だけ #f3fbe9。開閉なし。SP は表の頭をプラン名3つのタブにして1列。FAQ 10問（FAQPage なし）。
- **試すまで**：/get/trial は「Your work email *」「How did you hear about us? *」の2項目（ラベルなし・placeholder だけ）→ GET STARTED。/get/demo も同じ2項目。「7 day free trial・no credit card required」を料金の一文・カードの下の1行・FAQ の最初・trial のページの4か所に書く。
- **事例と信頼**：トップの葡萄色の面 #28060e に Vercel の動画と、題が数字の3社（「20x volume with just 2x the team」「3x automated resolution」「First response in 3 min, down from an hour」）。その下に「Migrate in days.」3行（5 → 1 tools・2 days・99% of tickets、会社名つき）と、SOC2 Type II・GDPR の2列。/customers は濃い緑の大カード4（588×240）と 3列の格子34枚で、記事のある13枚にだけ丸い札「CASE STUDY」、21枚は「CUSTOMER」と会社の説明だけ。
- **ドキュメント**：Mintlify（/docs）。ヘッダーに Search（Ctrl K）と Ask Assistant（Ctrl+I）、最初のページの画像の下にも質問の欄。/llms.txt 9,159B（競合との位置づけまで）と /docs/llms.txt 100,014B、robots.txt で GPTBot・ClaudeBot を名指しで Allow。
- **見た目の値**：地 #fff、文字 #252d2a（14.12:1）、帯とカード #0a2414、ボタン #1b6646（白 6.92:1）、点と札だけ #1ad379（白地の文字にすると 1.97:1）、料金の面 #f3fbe9、窓の面 #f7f5f3、線 rgba(10,36,20,.1)（450回）、締めの #193227 に #9af6bb（912回）。書体は ABC Favorit（Medium の題・Regular の本文 15/20px -0.15px）と Geist Mono 13px +0.2px 大文字（札・ボタン・区分）と製品の窓の Inter。--ease cubic-bezier(0.22,1,0.36,1)、opacity 300〜400ms、窓の部品は blur から現れる keyframes 13種。reduce で WebGL と Sidekick は止まり、受付の窓は transition を切って中身だけ進む。
- **データと重さ**：PC で top 8.31MB / features 10.60MB / pricing 7.89MB / customers 7.60MB / docs 4.15MB（解析を除く）。JS が7〜8割（Framer の部品 1,310KB＋依存 1,101KB）、自社のチャット 1,297KB を全ページ（docs も）。解析を含めると1ページ 31〜37ホスト、GTM 2,336KB。同意の帯を押す前に解析の cookie が入る。構造化データは WebApplication と、料金に Offer 3つ（「$45…or $55 billed monthly」）。

### Ramp（法人カード・経費・支払いの財務 SaaS、海外）https://ramp.com/ — 2026-11-16
- **最初の画面**：黒い帯 40px → 白いヘッダー 62px（fixed、「See a demo」黄緑 107×34・「Get started」黒 103×34・角 6px）。h1「Time is money. Save both.」64/64px・太さ 400・字間 -0.01px（SP 40/42px）、一文 18px・黒の 60%。h1 の上に 10px 大文字の札「US corporate payments processed by Ramp:」＋ number-flow の割合 0.9886820%（約2〜3秒ごとに末尾が増え、aria-label に今の値、reduce でも増える）。行動はメール欄と「Get started for free」（176×52・角 8px・黄緑 #e4f222）を枠 450px・角 12px の中に一体で（SP は 43px の欄と 358×42 のボタンを縦に）。下に position:fixed・高さ 40px の白い帯「AGENTS AT WORK TODAY」と数字7つ（3秒で 3,012,791→3,022,806）。地は白に 1px の点の格子。
- **製品画面**：最初の画面は動画 webm（PC 1,844KB・1310×584、SP 用 1,265KB は PC でも読んで 0×0 で止める）、Stack の章は mp4 1,972KB。ベントのカード 2＋3枚（角 12px・地 #f4f2f0・題 24px を「黒の名詞＋60% の続き」、右上の矢印はホバーで右上へ抜けて戻る）に DOM の吹き出しと Lottie。dotLottie の wasm 1,771KB を同じ URL で2回。動画は reduce でも再生。
- **機能の並べ方**：1製品1ページ（/expense-management）。h2 48px の章5つ（動詞の命令形）の中に h2 28px の対・18px の3つ組。「The old way. / The Ramp way.」（h3 28px、Lottie）。FAQ 6問（FAQPage）。どのページも最後は h1 と同じ一文＋メール欄。
- **料金表**：3枚（Free $0・Plus $15・Enterprise Custom、/mo/user、値段は 28px・黒の 60%）。カードの上辺に跨ぐ札 175×32・角 8px（AI-assisted #f4f2f0／AI-powered 黄緑／AI-tailored #1a1919）。強調は Plus の黄緑の枠（約3px）と塗りのボタンだけ。月払い／年払いの切り替えは無く、Plus の下に 13px で「+ Platform fee based on team size」「Save 20% with annual billing」だけ（年払いの値・基本料の額は出さない）。カードの中に各1つのメール欄、箇条は「All the features of Free, and:」で区分つき。カードの箇条の順が開くたびに違った（3通りを観察）。FAQ 4問（FAQPage）。税の語なし。
- **比較表**：14区分95行（6・4・12・18・6・8・5・9・3・8・4・4・3・5）を全部開いて始め、区分は button aria-expanded で grid-template-rows 0.2s で閉じる。PC はプラン名とボタンの行（133px）を top:62px で sticky、行の名前は破線の下線で Radix の吹き出し、行のホバーで地 #f4f2f0。SP は別の table（幅 540px・109行）を横スクロール、行の名前の列を left:0 で sticky。
- **試すまで**：メール欄がトップ5・機能4・料金6・事例4。label は visually-hidden、aria-label「Enter your work email」、action は JS 必須。「credit card」の語は4ページで0回。
- **事例と信頼**：/customers は幅いっぱいの「Customer Stories」、ロゴ2段、大1＋小4のカード（GIF 4枚 計 268,465KB、最大は表示 310×413 に 1080×1440 の 148,168KB）、数字の壁（274×274・75.79px・71.43s linear・reduce で止まる。SP は 148px に縮めて説明 7.71px）、検索＋Company size 3・Industry 20・Ramp product used 19（選ぶとボタンに「1 ×」、URL に ?industry=Education&company-size=Enterprise#all-stories）、26件＋Load more で +3。「85,000+」に時点・数え方なし。
- **ドキュメント**：docs.ramp.com（開発者向け、左 215px の目次、h1 56px）。右上に Copy Markdown、各ページの .md、/llms.txt 14,613B、Ctrl K の検索、sierra.chat のチャット 2,481KB。ヘルプ support.ramp.com は Chromium でリダイレクトが回って白い画面。
- **見た目の値**：字は #0c0a08 と、その `/ 0.6`（白の上 #6d6c6b 5.24:1、#f4f2f0 の上 5.04:1）、黒い面の上は白と白の 60%（6.95:1）。面は白・#f4f2f0・#1a1919、差し色は黄緑 #e4f222 だけ（地の面積で白の 1%、字には使わない：白の上 1.23:1）。書体は TWK Lausanne 400 だけ（見出しも 400）。大きさ 64・48・40・28・24・18・14（本文、最多）・13・10px。transition は色 0.3s cubic-bezier(0.4,0,0.2,1)、カード transform 0.4s ease、表の行 all 0.2s。
- **データと重さ**：PC で top 19.86MB / features 13.51MB / pricing 11.14MB / customers 273.45MB / docs 11.75MB。トップは78ホスト（Chili Piper 2,191KB を全ページ、GTM 2,105KB、Facebook 1,954KB、AdSense 871KB）。構造化データは Organization と、機能・料金の FAQPage だけ。フォントは woff2 19KB。

### Clay（GTM のデータと自動化、海外）https://www.clay.com/ — 2026-11-20
- **最初の画面**：上 6割はクレイアニメの動画（1440×1072・17.1秒ループ・9,097KB・poster なし。漏斗・虫めがね・郵便受け・棒グラフの粘土が丘に並ぶ）、その下の緑 #035d44 に h1「Build systems to grow revenue」Roobert VF 575・88px・字間 -0.04em（SP 41.6px）を左寄せ。右の列に一文 24px（3行）と「Start free trial →」白 175×47・「Get a demo →」#cbd810 157×47（角 12px）、下に「or install directly with」＋アイコン3つ。ヘッダーは白の帯 58px（左右 36px あけて角を丸める）に ⌘K・Log in・Get a demo・Start free trial（黒）。
- **機能の並べ方**：トップは用途別のタブ7つ（TAM Sourcing〜Rep Productivity、押すと一文と画面の動画が替わる。role なし）→「What do you want to build?」の textarea 624×144 とチップ3つ（例文の placeholder が替わる、ラベル0）→ 機能別の4章（DATA・AGENTS・ORCHESTRATION・ACTIVATION）を sticky top:72px で重ねる（高さ 771px、角 48px は最初の上と最後の下だけ）。章ごとに「淡い地＋同じ色相のごく暗い字＋強い差し色」（#f0f8ff／#001433／#395afa、#fff3ed／#381005／#b53d0a、#fcfee2／#102b03／#808000、#fff0fa／#46022f／#cc089e。字／地 14.58〜17.05:1）、差し色は h3 48px の後半と塗りボタン。機能ページ（/waterfall-enrichment）は h1 64px → 620×620 の動画 → 仕組み → 用途3つ（左右交互、静止画 JPEG 798〜1,080KB）→ データの種類ごとの提供元の札。
- **料金表**：4枚（Free／Launch／Growth「Recommended」／Enterprise Custom）、頭は色の面 136px（#3859f9・#02693e・#cc089e・#6d4cd6、白字 5.13〜6.79:1）で角 18/18/18/9.95px、アイコンを上辺に跨がせる。値段 28px・500・-0.03em。Launch と Growth は「Actions」と「Data credits」の2つの select の和が値段（Launch 5段×5段：Actions $54〜$486・Credits $113〜$1,913／月あたり年払い、既定 $167／月払い $185。Growth 4段×4段、既定 $446／$495）。option の文に量と値段を両方（「480K/yr ($135/mo)」）。月年の切り替えは button 2つ＋白いピル（地 #f4f3f0・角 8px・内 2px、ピル 176px・縁 #eee9df・角 6px、transform .3s cubic-bezier(.175,.885,.094,1.131)）、「Annual ∙ Save 10%」の率だけ緑 #078a52。切り替えても選んだ段は残る（Monthly 60K $325 → Annual 720K/yr $293）。SP は切り替えが fixed top:48px。カードの下に「Usage-based pricing」の2行と docs・Pricing calculator への2リンク。
- **比較表**：「See full plan comparison」で開いて始まる（閉じた高さ 0）。7区分44行（7・5・4・10・8・6・4）、頭の行 sticky top:58px（SP 56px でプラン名をプラン色の字で）。✓ と「-」に「Included／Not included」の読み上げ。PC の字 13px、SP は行の名前を全幅にして下に4つの値（10px）。
- **試すまで**：どのボタンも app.clay.com/signup へ1手（source=nav／website／marketing-buy-now）。カードは「Start 14-day trial」の下に文字リンク「or buy now」（選んだ段の priceId つき）。フッター「Start for free today. No credit card required.」。Free のカードにも「Start 14-day trial」。
- **事例と信頼**：事例一覧は全面の動画に h1 201.6px（13個の span で1字ずつ）、題が数字のスライダー5件、36社のカード（会社名・業種・Read Story、USE CASE のチップ9つ・Grid／List）、数字の章 100.8px（5B・13.7M・58M、時点なし）。料金ページに事例7枚（数字の題＋粘土の 3D ロゴ）と安全の5つ（SOC 2 Type II・GDPR・CCPA・ISO 27001・ISO 42001 を花びらの記章で）、FAQ 7問（FAQPage なし）。
- **ドキュメント**：Clay University（university.clay.com、別の Webflow）。#005870 の面に h1 104px「Hello, how can we help?」、「Shape your question here」の AI に聞く欄 914×58＋トピックのチップ4つ、左の目次はトピック10個を色の字で（sticky top:72px）、トピック9枚に粘土の積み木の絵。構造化データは TechArticle・FAQPage まで厚い。
- **見た目の値**：地 #fefdfb と #f4f3f0、字は #000・#1b1a18（17.39:1）・#55534e（白 7.68:1）・#7b7974（4.35:1）、線 #e0dedc。色は CSS 変数 190個。書体は Roobert VF（Webflow の CDN）だけで、太さ 575（h1）・600・500・400。大きな字は字間 -0.03〜-0.04em・行間 1.0、本文 16px／1.5。動きはリンクの色 .1s ease-out、ボタンの地 .3s cubic-bezier(.075,.82,.165,1)、比較表の行 max-height .3s cubic-bezier(.785,.135,.15,.86)、GSAP（3.15.0 と 3.14.1 の2版）。
- **データと重さ**：PC で top 37.18MB（動画 23.9MB）/ features 27.68MB / pricing 14.00MB / customers 20.59MB / docs 9.76MB。どのページも 42〜44ホスト、Inkeep の AI 検索 1,616KB・Sequel 953KB・reCAPTCHA 846KB を読む（フォームの無い料金ページでも）。章の動画は preload none。トップの構造化データは SoftwareApplication と AggregateRating 4.9／ratingCount "1000"（出典なし）、Offer「14-day Pro trial」（Pro は無い）。

### Dovetail（顧客の声を集めて AI に渡す基盤、海外）https://dovetail.com/ — 2026-11-24
- **最初の画面**：地 #0a0a0a に canvas 1440×1439 の ASCII（0 1 / : % = + < >）が約1秒ごとに替わる（reduce で止まる）。上に一文 Inter 20px・白 64%（170字）、頭の分類名「The Customer Context Layer」だけ PP Mondwest（ドットの字）25px・#fafafa。その下に Book a demo（#0044ff・120×42・角 8）と Start free trial（地 #1e1e1e の 85%・縁 白 24%、新しいタブで /auth/signup/）。右に星3（G2・Capterra・TrustRadius、数値なし）。h1「Feed the facts machine」Inter 600・160px／140px・字間 −2.3px を画面の下半分（y=468）に置き、「Feed」と「the」の間に目のある複写機 188×199px。瞳はポインタの方へ最大 ±5.7px。下にロゴ 10（各 90×40）。SP は h1 70.48px。
- **製品の見せ方**：h1 の下に DOM の会話の窓（問い→答え4行→「5 sources from Sales calls and Customer success」）、字を打つ演出は var(--play) で見えるまで paused。章の画面は PNG 1232×800 ×4 をタブで、処理10種は canvas 400×438 ×12。機能ページは 10.0秒の mp4 827×465（855KB）を見えたら再生、reduce では再生しない。
- **機能の並べ方**：機能ページ（Digital Twins）は地 #7d00d6、h1 72px の中の「talk to them.」だけ Mondwest 84px、間に拡声器の絵。使い道は役割9つの 3×3（397×364、線 白 8%）：札（JetBrains Mono 12px 大文字）→ 題（動詞の句 22〜24px）→ 一文 #a7a7a7。ホバーで中身が「Try Digital Twin」の面に替わる。FAQ 6問（FAQPage）。
- **料金表**：3枚 376×1,242px（Bronze 5 users／Silver 25+／Gold 100+）。印はコイン 64px、地は #121212→#191919→#212121。値段の大きな数字は無く、Bronze の箇条の1行目「$4,800 a year for the platform, plus credits at 15c each」だけ。その Bronze のボタンは disabled の「Coming soon」、Silver・Gold は「Talk to sales」（Gold だけ白の塗り）。月年の切り替え・おすすめの札・税の語・通貨の切り替えは無い（年払いのみ、FAQ に billed annually）。Gold に 30-day free trial。
- **比較表**：table を使わず section ごとに主張の h2＋一文（6区分 8・8・7・4・15・5 行＝47行、「Not included」30個、Add-on 2）。行の名前は Inter 20px に点線の下線、ホバーで説明 280px・14px・地 #212121（46行。span でキーボード不可）。比較表に入るとプランの頭（名前・人数・ボタン）が固定で出る（PC 169px、隠れるとき top −240px。SP 71px は名前を押して1プランを選ぶ）。Silver の列だけ地 #141414。
- **クレジット**：1 data point＝1 credit（文字起こし・翻訳・要約・分類・索引をまとめて）、黒塗りは＋1、Chat・Twin・Agents は Variable。15¢ は全プラン同じ。失敗・取り消し・止めた Chat・適用しなかった黒塗りの提案は数えない。超えたら overage が既定でオン・月ごとに請求。FAQ 9問中8問がクレジット。「Get an estimate」はリンクで計算の部品は無い。
- **試すまで**：Start free trial → Auth0 の画面で入力は Email の1つ（ほか Google・Microsoft）。カードの要否は4ページで書いていない（「credit card」0回）。Book a demo はトップに9か所。
- **事例と信頼**：事例一覧 40件、業種のチップ 13（button・aria-pressed・32px、選ぶと地 白 8%→16%、URL は変わらず件数も出さない。Technology 19・Manufacturing 4・Financial Services 4…）。カード 376×414 は引用が先頭。h1 は顧客の引用 96px で読み込みごとに替わり、字を打つ演出で最初は空。料金に引用＋数字（30hrs／週、66% faster shipping、Forrester TEI へ）。認証（SOC 2 Type II・ISO 27001・ISO 42001・GDPR）は比較表の1行。
- **ドキュメント**：docs.dovetail.com は Mintlify（白い地、左の目次 16区分、Ctrl K の検索、「Open in ChatGPT」、Yes／No、system／light／dark）。/llms.txt あり、/pricing.md は 404。
- **見た目の値**：字 #fafafa（18.97:1）・#a7a7a7＝白 64%（8.23:1）、線 白 8%、段は白の透明度 8・16・24・64%。色相は主ボタンの青 #0044ff（字 6.15:1）と機能ページの紫 #7d00d6 だけ。書体は自前の /fonts/ の Inter 400・500・600、JetBrains Mono、PP Mondwest（計 136KB）。transition は all 300ms（18）、color/background/opacity 200ms（11）、transform 150ms cubic-bezier(.2,.6,.6,1)（11）、説明は opacity 150ms。reduce で animation 30本→0。
- **データと重さ**：PC で top 15.00MB / features 21.24MB / pricing 18.89MB / customers 32.42MB / docs 3.31MB（SP 6.02／12.20／11.12／17.04／3.80MB）。どのページも RSC の先読み 50本（転送 3,169KB）、Intercom 約 2.7MB（料金で読み込みから 4.4〜6.1秒で Fin の3択を開く）、解析 27ホスト。下へ 63〜65% で「Introducing Digital Twins」のダイアログが出て、事例の業種のボタンを覆う。構造化データは料金に Offer 3つ（Bronze だけ price 4800・InStock）と FAQPage。本家のトップの inspect は FAIL 2（横スクロール PC・SP）。

### Notion（チームとエージェントの共有ワークスペース、海外）https://www.notion.com/ — 2026-11-28
- **最初の画面**：h1 Die Grotesk 500・80/80px の2行（SP 600・40px の3行）＋一文 18/28px＋ピル2つ（黒 #000／#f6f5f4、44px・padding 6px 23px・角 9999px）。ヘッダーの「Try Notion」は最初 rgba(0,0,0,.05) の淡いピル 32px で、下へ動くと黒に替わる。
- **製品の見せ方**：壁紙 1,252×783px（角 16px）の上に DOM の窓 1,037×648px・45要素と Dock 5つ。窓は「It all starts with an idea…」→ 題を打つ（2.4s）→ 箇条（4.4〜6.5s）→ サイドバー（9.5s）→ 段落（21.7s）。一時停止のボタン3つ、reduce では最初から最後の形。動きの時間はどれも 45ms の倍数（.54・.855・.405・.9・.18・.225s）。連携は「Slack 22,224 messages」のようなアプリ名＋件数のカード4枚（件数は読み込みごとに違う）。
- **機能の並べ方**：/product/ai はブロック4つ（244×100px・角 12px・選んだ1つだけ #fff＋2px rgba(0,0,0,.08)、ほか #f6f5f4、.15s ease-out）でパネルを替え、パネルの地をブロックごとの色に。自動送りなし。ブロックは tabindex -1 の div で Tab が届かない。機能の章は4つ（h2 42/48px＋一文＋Learn more＋手描きの顔＋動画）。
- **料金表**：4プランを2つの箱に束ねる（「Essentials for staying organized.」Free・Plus／「The AI workspace for work that matters.」Business・Enterprise）。箱の題 32/40px 700、左は白＋2px #f6f5f4、右は #f9f9f8。年払いで開く radio の fieldset（billingInterval）。Plus $10／$12・Business $20／$24（16.7%）、Enterprise は「Custom pricing」だがページの JSON では $28／$35（20.0%）で、「Save up to 20% with yearly」はその率。おすすめは札（黒 12px 600）と黒いボタンだけで、カードの大きさは同じ。
- **比較表**：8区分59行（6・6・9・5・7・5・18・3）、開閉なし。頭（名前・値段・30px のボタン）144px を top:-1px、区分名 44px を top:60px。行の名前は点線、ホバーとフォーカスで説明（rgba(0,0,0,.8)）。SP では表ごと高さ 0。FAQ は details 17問、FAQPage なし。
- **試すまで**：Get Notion free・Try Notion・Sign up は /signup、Plus と Business の Get started は同じ /signup?target=plans。カードの要否の表記は無い。Request a demo・Contact Sales は /contact-sales。
- **事例と信頼**：/customers は全82件・1ページ9枚・カードは media（写真＋題＋数字）／quote（灰の面＋Lyon Text の引用）／stats（数字3つ）の3種。絞り込みは規模3・業種11で、印を付けると Reset と Apply が出て、Apply まで一覧は変わらない。h1 は文字が絵でテキストが空。/product/ai に信頼6項目（学習に使わない・SOC 2 Type 2・ISO 27001・GDPR・HIPAA など）。
- **ドキュメント**：/help は左に17区分、h1＋検索の欄 735px、よく見る4語、人気の6枚（手描きの小さな絵）。BreadcrumbList。
- **見た目の値**：字は黒の .95（19.44:1）・.898・.54（4.61:1）、面は暖かい灰のトークン9段（#f9f9f8・#f6f5f4・#dfdcd9 … #191919）。差し色は製品の窓の中だけ（#2383e2・印 #ffcb001f＋下線 #ffcb0059）。月年の切り替えの選んでいない方 3.93:1。トップ・料金は新しい組み（Die Grotesk・黒いピル）、機能・事例・ヘルプは前の組み（NotionInter・青 #0075de 角 8px、白字 4.57:1）。
- **データと重さ**：PC で top 9.69MB / features 31.92MB（動画5本 17,757KB）/ pricing 8.59MB / customers 9.93MB / docs 9.87MB（解析除く）。CSS はどのページも約2MB、実験の JSON 1.2MB を全ページ。top は解析込み 35ホスト・約13.7MB（GTM 2,705KB）。JSON-LD は top の SoftwareApplication（price 0）だけ。/llms.txt は「More than 50 million」、事例の帯は「100M Users」。

## 真似る型
見本9つ（Backlog・コドモン・Linear・Attio・Plain・Ramp・Clay・Dovetail・Notion）に共通するもの、または1つで測った値を出発点にするもの。値の出どころを添える。
1. **行動の数は、試す入口の有無で決める**：試せる製品は「試す」を主に（Backlog は試す＋資料、Linear は Get started と Contact sales）、試せない製品は資料請求＋問い合わせ（コドモン）。主は塗り、副は白地か枠か半透明。Linear のように最初の画面から行動を消さない（ヘッダーの 73×32 だけでは小さい）。
2. **実績の数字には時点と数え方**：Backlog「2026年6月末」、コドモン「2026年10月1日時点」＋※の数え方と調査元。Linear は「40,000」を3通りに言い、時点なし（真似ない）。
3. **料金は規模で決める**：Backlog は「31人以上か」を診断の1問に、コドモンは定員3段、Linear と Attio は per user/month の4列（Attio は 4列とも同じ 271×398 のカード）。人数で決まるなら、入力させる前に段を見せ、大きく出す価格は1つ（コドモン 88px、ほか 30px）。
4. **強調は1枚だけ、文字の札に頼らない**：Backlog は枠と帯の色、Linear は塗ったボタン1つ（ほかは白5%の半透明）、Attio は縁 #94b9ff＋4px の淡い輪＋塗りのボタン（札「Popular」は比較表の見出しだけ）。列はカードの箱にせず線で分けてもよい（Linear の縦線 白8%）。
5. **見た目の出発点**：明るい現場向けはコドモン（地は白と淡い水色2段、本文 #4d4c4b、本文 16px／行間 1.5、角 8px と 40px、影はぼかさない 0 4px 0）。開発・企画の職種向けは Linear（地 #08090a から4段、文字4段、主ボタンは白、Inter 510、字間 -0.022em、.16s ease-out-quad）。
6. **製品画面**：Backlog は実画面キャプチャ、コドモンは写真と端末の合成、Linear は DOM の画面（3,369要素）で仕事の文まで本物らしく埋める。DOM にするなら止めるボタンを付け、reduce では止める（Linear は止まらない）。
7. **機能の詳しい説明はページを移らずに開く**：Linear の「＋」20個 → 640px のシート（Esc で閉じ、フォーカスは押したボタンへ）。機能が多い製品は、章の最後に機能名の行を置き、押すと説明が出る形にする。
8. **比較表**：Backlog は 5区分35行・SP は details、Linear は 9区分55行・見出しの行 sticky（PC top:72px）・SP は select で1プラン、Attio は 8区分76行で「払い方の切り替え＋価格＋ボタン」の帯と区分名を2段で sticky（top:116px・313px）・SP は1行ずつ開閉、Plain は 13区分69行を全部開き、プラン名の行を top:69px で sticky・おすすめの列だけ淡い面・SP はプラン名のタブで1列。✓×に読み上げの文字（Linear「Included／Not included」）。
9. **フォームは2段**：1段目は選ぶだけの質問、2段目に組織と個人の情報（コドモン 6＋11項目）。任意を「（任意）」と書き、説明文は欄の上。エラーは欄の下に、何をすればよいかまで書く。
10. **事例の一覧の終わりを入口にする**：Linear は一覧16社の最後に灰色の「Your company ― Make the switch」。絞り込みは URL のあるリンク（/customers/ai）。
11. **製品の窓は仕事ごとに入れ替える**：Attio はトップの5章（売上の仕事の順）それぞれに表・ワークフロー・SQL・グラフの DOM の模型を置き、左の目次（sticky、今だけ濃く・2px の印）で今の章を示す。章の見出しは「黒の一言＋灰の続き」の1文。目次の非選択は 3:1 以上にする（Attio は 1.37:1）。
12. **月年の価格を入れ替える動き**：Attio は両方の数字を同じ升に置き、上下に 500ms ease-out で入れ替える。読み上げは見えている方だけにし、reduce では入れ替えずに書き換える。
13. **SP では最初の画面の行動を替えてよい**：Attio は PC の「相談＋試す」を、SP では「メール欄＋1つのボタン＋文字のリンク」に。題と一文は変えない。

14. **製品の窓は3段で進める**：Plain はトップの窓を 受信（0.3秒）→ 調べる（2秒）→ 返す（5秒）で進め、右に顧客の情報（会社・層・SLA）を置く。reduce では動きを切って最後の状態を出す（Plain は transition を切って中身は進める）。
15. **機能の章は「札＋題／説明＋リンク」の頭、幅いっぱいの面、下のタブ3つ**：Plain の Sidekick はタブを進む線つきで約12〜16秒ごとに送り、reduce では送らない。非選択は opacity で薄くするなら 4.5:1 を守る（Plain は 2.99:1）。
16. **乗り換えと安全を1つの帯に2列**：Plain は事例の直後に「Migrate in days.」（5 → 1 tools・2 days・99%、会社名つき）と SOC2・GDPR を並べる。業務SaaS の「乗り換えの手間」と「預けて大丈夫か」を1か所で片づける。
17. **試すフォームは2項目、カード不要は4か所**：Plain の /get/trial はメールと「どこで知ったか」だけ。ラベルは欄の上に出す（Plain は placeholder だけ、真似ない）。
18. **事例の題を数字にし、記事のある事例にだけ札**：Plain は「First response in 3 min, down from an hour」、一覧34枚のうち記事のある13枚にだけ丸い札。
19. **ページの終わりに次の行き先**：Plain は料金・機能・事例のページの最後に3色のタイル（Product／Pricing・Customers・Changelog）。

20. **灰の字は「黒の 60%」で作る**：Ramp は字を #0c0a08 とその `/ 0.6` の2つにし、白の上 5.24:1・#f4f2f0 の上 5.04:1。地ごとに灰の値を作り直さない。
21. **差し色1色は押す物と選ばせたい1枚だけ**：Ramp の黄緑は主なボタン・Plus の枠と札・「See a demo」だけ（地の面積で白の 1%）。太さは見出しも 400 のまま、大きさと「黒＋60%」で段を作る。
22. **メール欄とボタンを1つの枠にして、どのページも最初と最後に**：Ramp は枠 450px・角 12px の中に欄と 176×52 のボタン（SP は 43px と 42px の2段）。4ページとも最後の章は h1 と同じ一文＋同じ欄。
23. **料金の3枚の上辺に性格の札を跨がせる**：Ramp は 175×32・角 8px・地を灰／黄緑／黒の3段にし、選ばせたい1枚の札だけ差し色。箇条は「All the features of Free, and:」で増える分だけ。
24. **題材の数字を「今」として動かす**：Ramp は h1 の上に処理した割合（小数7桁）、下に固定 40px の帯で今日の処理数7つ（number-flow・aria-label に今の値）。作るときは数え方の注と止めるボタンを付け、reduce では送らない（Ramp は増え続ける）。

25. **使用量が2種類なら、2つの select の和を値段にする**：Clay の Launch は Actions 5段＋Data credits 5段、option の文に量と値段を両方（「480K/yr ($135/mo)」）、値段の下に「Starts at …」の最小の量と額。月払い／年払いを替えても選んだ段を保ち、「or buy now」の行き先も段に合わせる。
26. **月年は2つの button と滑るピル**：Clay は地 #f4f3f0・角 8px・内 2px、白いピル・縁 1px #eee9df・角 6px、transform .3s cubic-bezier(.175,.885,.094,1.131)（終わりで少し行き過ぎる）。割引の語だけ色を変える。aria-pressed を付ける（Clay は無い）。SP では fixed で付いてこさせる（Clay top:48px）。
27. **プランの頭を色の面にし、角を1つだけ崩す**：Clay は 136px の4色、角 18/18/18/9.95px、アイコンを上辺に跨がせる。おすすめは面の中の白い札 12px と、ボタンを1枚だけ黒く塗ること。
28. **機能の章を sticky で重ね、章ごとに3色の組**：Clay は top:72px・高さ 771px、角 48px は最初の上と最後の下だけ。「淡い地＋同じ色相のごく暗い字（14.6〜17.1:1）＋強い差し色（見出しの後半と塗りボタン）」。差し色の上の白字は 4.5:1 を確かめる（Clay の #808000 は 4.20:1）。
29. **最初の画面は「上に世界、下に題」**：Clay は上 6割を作り込んだ絵の動画、h1 88px（-0.04em）を左下、右の列に一文 24px とボタン2つ。絵が題材そのもの（漏斗・虫めがね＝データを集めて絞る）であること。
30. **何を作りたいかを聞く欄**：Clay の textarea 624×144 とチップ3つで例文を替える。作るときは label・空のときの文・送ってからの骨組みを足す。

31. **説明の一文の頭の分類名だけ書体を替えて 1.25 倍**：Dovetail は「The Customer Context Layer」を PP Mondwest 25px・#fafafa、残りを Inter 20px・白 64%（SP 20px／16px）。長い一文でも、何の道具かが名前だけで入る。
32. **大きな題の語の間に題材の物を1つ**：Dovetail の h1 160px「Feed [複写機 188×199、瞳がポインタを ±5.7px 追う] the facts machine」、機能ページの「let you [拡声器] talk to them.」。物は題材の世界から（声を吸い込む機械・拡声器）。
33. **プランを素材の段で名づけ、地の明るさで段を見せる**：Dovetail は Bronze／Silver／Gold とコイン 64px、地 #121212→#191919→#212121、最上段だけボタンを白で塗る。値段は箇条の1行目。値段を大きく出すときは、買えるプランに出す（Dovetail は買えない Bronze にだけ値段がある：真似ない）。
34. **比較表の区分を主張の h2 にし、入ったらプランの頭を出す**：Dovetail は6区分の h2＋一文、47行中46行に点線の説明 280px、固定の頭 PC 169px・SP 71px（名前を押して1プラン）。説明は button にして Tab で届くように（本家は span）。
35. **使った分は1つの単位にし、数えない場合を FAQ に書く**：Dovetail は「1 data point＝1 credit・15¢ 全プラン同じ」、失敗・取り消し・途中で止めた Chat・適用しなかった提案は数えない、超えたら月ごと。FAQ 9問中8問。
36. **使い道を役割の 3×3 に、札→題→一文**：Dovetail の機能ページ 397×364 ×9、札 Mono 12px、題は動詞の句。ホバーで試す面に替える。

37. **プランを「基本」と「AI（上の段）」の2つの箱に束ね、箱に題を付ける**：Notion は Free・Plus を白＋2px の縁の箱、Business・Enterprise を #f9f9f8 の面の箱に入れ、箱の題 32/40px 700。4列を同じ大きさで並べたまま、どこで性格が変わるかを見せる。
38. **最初の画面の製品の窓は、空のページから打ち始める**：Notion は「It all starts with an idea…」の薄い字 → 題 → 箇条 → サイドバー → 段落を約22秒。reduce では最後の形で始め、一時停止のボタンを置く。時間は 45ms の倍数でそろえる。
39. **機能のブロックで切り替え、パネルの地をブロックごとの色に**：Notion /product/ai は 244×100px のブロック4つ、選んだ1つだけ白＋2px の縁、パネルは紙の質感の色の面。作るときは role=tab と矢印キー（本家は Tab が届かない）。
40. **ヘッダーの主ボタンは、最初は淡く、下へ動くと濃くする**：Notion「Try Notion」rgba(0,0,0,.05) → #000。最初の画面では本文の主ボタンと競わせない。

## 反面教師
- 商談予約ウィジェットを全ページで読み込み、どのページでも一番重いファイルにする。診断の途中で日時の枠を開いて結果と重ねる（Backlog）。
- カルーセルの複製で同じ事例見出しの h2 を3回ずつ出す（Backlog トップ）。
- 料金ページに FAQ 10問があるのに FAQPage を置かない（Backlog）。
- エラーの吹き出しを見出しの下に重ねて出し、白 12px を #ff7496 の地に置く（2.56:1）。入力欄の枠 1.88:1、フォーカスの輪 2.08:1（コドモン）。
- 検索の0件を見出しだけで終える（コドモンのヘルプ）。
- SP で最初の画面のボタンの順を PC と逆にする。SP の h1 で助詞1字を次の行に落とす（コドモン）。
- h1 を opacity:0 で始めて JS で出す。この環境では 7.1〜8.2秒見えず、JS なしでは見えない（Linear）。
- 左の目次の非選択を 1.37:1、割引の札を 2.89:1、一文を 4.41:1 にする。SP で製品の窓を縮めて中の文字を 4〜7px にする。reCAPTCHA を3回読む（Attio）。
- 年払いの割引率を書かず、月払いにしてもラベルが「Billed yearly」のまま。2つのスイッチが連動することも、名前も無い（Linear）。
- リンクが見えるたびに行き先を先読みし、ページの半分がまだ行っていないページ（Linear のトップ 44%）。検索の索引 1,107KB を検索を開く前に読む。
- 年払いの切り替えを一番安いプランのカードの中にだけ置き、ほかのプランの月払いの値を出さない。札「SAVE 20%」は実際 18.2%。トグルは div に tabindex だけ（Plain）。
- 料金のカードを読み込んだ後にブラウザで入れ替え、8回中3回だけ「MOST POPULAR」の札が出る（Plain）。
- 試すフォームの欄にラベルが無く placeholder だけ。機能の説明の灰 2.99:1、明るい緑のリンク 1.97:1。同意の帯を押す前に解析の cookie を書く。自社のチャット 1,297KB を docs まで全ページで読む（Plain）。
- 事例の一覧のカードを GIF にし、表示 310×413 に 1080×1440 の 148,168KB ほか、4枚で 268,465KB（ページ 273.45MB）。lazy でも最初の2画面にあるので効かない（Ramp）。
- 年払いを「Save 20% with annual billing」の一文だけにし、年払いの値も基本料の額も出さない。料金のカードの箇条の順が開くたびに変わる（Ramp）。
- SP の比較表を幅 540px の横スクロールに、事例の数字の壁を縮めて説明 7.71px に。動画3本と数字の帯が reduce でも動く。同じ wasm 1,771KB を2回、SP 用の動画も PC で読む（Ramp）。
- 「Save 10%」が実際は 9.73%（Launch $185→$167）・9.90%（Growth）、同じ 120K credits/yr が Launch $414・Growth $413、Growth だけ年払いで「Starts at $…/mo」が消える（Clay）。
- 料金の select を color:transparent にしてラベル0、月年の button に aria-pressed なし、比較表の button に aria-expanded なし、FAQ はラベルの無い checkbox を被せて outline:none（Clay）。
- 導入数を 500,000／16,000+／500,000+ とページで違え、構造化データに出典の無い星 4.9・1000件と、無いプラン名「Pro」の試用を書く（Clay）。
- ヒーローの動画 9.1MB に poster も止めるボタンも無く reduce でも再生、事例の h1 を1字ずつの span にして読み上げを崩す、動画を個人の GitHub（jsDelivr gh）から・開発用の vercel.app の JS を本番で読む（Clay）。
- 値段を、まだ買えない「Coming soon」のプランにだけ書き、買えるプランは「Talk to sales」で値段0。構造化データはその準備中のプランを InStock と書く（Dovetail）。
- 下へ 63〜65% で告知のダイアログを開き、事例の絞り込みのボタンを覆う。チャット（Intercom Fin）は読み込みから 4〜6秒で3択を開く。事例一覧の h1 を読み込みごとに違う顧客の引用にし、字を打つ演出で最初は空、同じ文を h1 に2回（Dovetail）。
- 「Save up to 20% with yearly」の20%は値段を出さない Enterprise の率で、見えるプランは 16.7%。トップ・料金と、機能・事例・ヘルプで見た目の組み（書体・ボタンの色と角）が違う。SP で比較表が丸ごと無い。機能のブロックに Tab が届かず、事例の絞り込みは Apply まで効かない。/product/ai は「per member」、/pricing は「per seat」（Notion）。
