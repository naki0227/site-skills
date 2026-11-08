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

## 真似る型
見本5つ（Backlog・コドモン・Linear・Attio・Plain）に共通するもの、または1つで測った値を出発点にするもの。値の出どころを添える。
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
