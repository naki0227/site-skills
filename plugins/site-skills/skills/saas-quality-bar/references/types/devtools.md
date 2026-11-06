# 開発者向け（API、開発ツール、インフラ）

## この下位タイプで特に見ること
コードの見せ方、ドキュメントへの近さ、無料枠

## 見本の実測
### Resend https://resend.com/ — 2026-10-25
- **最初の画面**：h1「Email for developers」96px/行高96px/字間 -0.96px（見出しは serif の Domaine、h2 は ABCFavorit 56px/字間 -2.8px、本文は Inter 16/24）。背景 #000・文字 #f0f0f0・副文 #a1a4a5（18/27）。主「Get started」（/signup）と副「Documentation」（枠なしの文字）。ボタンは高48・角16・横20・枠2px（白5%）・transition 0.2s cubic-bezier(.4,0,.2,1)。右に黒い立方体の3D（Spline 2.7MB）。製品画面は最初の画面に無い。
- **製品の見せ方**：2画面目に「Integrate this weekend」。言語13個（60×56）→フレームワーク9個の2段タブで同じ送信コードを切り替え、行番号つき・14px/20px・等幅（Commit Mono）・コピーボタン。機能ページはエディタのメニューや分析を DOM のモックで見せる。
- **機能の並べ方**：機能別7本（Broadcasts・Audiences・Automations・Templates・Webhooks・Inbound・Dedicated IPs）。1機能は h1 → h2＋一文 → 画面 → API の呼び出し例（Create/Update/Send）→「Start sending this weekend」。
- **料金表**：Free $0（3,000通/月）／Pro $20（50,000通）／Scale $90（100,000通）／Custom の4枚（4列299px・角16・中央ぞろえ、価格 Inter 36/61.2）。上に「Transactional／Marketing」の切り替えと9段のスライダー（3,000〜3,000,000+）。動かすと合うプランだけ h3 内の「Recommended」（地 緑12%・字 緑83%・12px/600）が opacity 0→1（.2s cubic-bezier(.36,.66,.6,1)）、ほかのカードは opacity .4（ホバー .8、.15s）。SP（390px）では沈むカードを display:none にし、合うカードだけ残す。価格は Pro 50,000通 $20→100,000通 $35、Scale 200,000通 $160／500,000 $350／1,000,000 $650／1,500,000 $825／2,500,000 $1,150。Marketing は8段（1,000〜200,000+ 連絡先、Pro marketing $40〜$650）。目盛りは PC「3,000」、SP「3K」。従量課金（超過 $0.90/1,000通）とアドオン（Domains $20・Dedicated IPs $30・SSO $150）は表の外の別枠。比較表は6区分45行（10/5/13/10/6/1）を全部開いたまま。年払いは無く、FAQ 1問目で「月払いのみ」。FAQ 15問（角16・枠 #212629・地 #141517→ホバー #191b1e）に FAQPage。税・通貨の注記は無い。
- **事例と信頼**：一覧は絞り込み11（Featured・AI・Creators・Media・Developer Tools・Fintech・Healthcare・Open Source・SaaS・Studios・Travel）、ロゴだけの3列の大きなカード。詳細は /customers/<名前>。
- **ドキュメント**：別デザイン（明るい背景）。左に目次、右に「On this page」、上に Documentation／Guides／API Reference、検索（Ctrl K）、AI への質問欄、ページのコピーボタン。導入は「必要なもの2つ→言語別 Quickstart 14本」。
- **データと重さ**：PC で top 22.04MB / features 11.47MB / pricing 10.95MB / customers 10.74MB / docs 9.38MB。JS が各ページ 7.7〜10.5MB。構造化データは SoftwareApplication・Offer・BreadcrumbList、料金は FAQPage、ドキュメントは TechArticle。
- **配色**（2026-10-25 測り直し）：地 #000、面 #141517・#191b1e・#212629（gray-1〜3）、文字 #f0f0f0（18.43:1）と #a1a4a5（8.37:1）、枠は灰でなく半透明の青白 rgba(214,235,253,.19)（slate-6、トップで69要素）と rgba(217,237,254,.145)。CSS 6本（1,035KB）の色リテラル 2,937個・790種のうち上位は #fff 258・透明 242・#000 230。色相は #62ffb3（20回）など状態とモックだけ。コードの構文色は灰3段（#EBECED・#A0A0A0・#6C6C6C、予約語は 4.00:1）、行番号 #464A4D。
- **文字**：serif（Domaine）は h1 だけ（トップ 96/96・下層 76.8、SP 64/64）。h2 は ABC Favorit 56/67.2・字間 −2.8px（−.05em、SP 48）、料金の区分 36/46.8。見出しはすべて weight 400、白→白50%の斜めグラデーションで塗る。本文 Inter 18/27（リード）・16/24・14/20、コード Commit Mono 14/20。
- **動き**：既定 .15s cubic-bezier(.4,0,.2,1)、ボタン .2s で白90%に反転＋光る影3重。登場は 1s（文字 16px 上へ、3D は .7→1）。流れ続けるもの scroll-x 180s・disco 6s（選択中タブの縁）。reduce では流れを paused、登場を fade-in に差し替えるが、3D 2,758KB と動画5本の読み込みは減らない。:hover 851 に (hover:hover) 38。
- **重さの内訳**：トップ PC は JS 10,542KB・3D 2,758KB＋展開 2,733KB・動画 2,369KB。3D は SP では読まない（SP 15.59MB）。CSS 2本（512KB・515KB）が全ページで読まれ、規則 3,535 が重複。ドキュメントは RSC の先読みだけで 4,088KB。

### microCMS（株式会社microCMS、APIベースの日本製ヘッドレスCMS）https://microcms.io/ — 2026-10-28
- **最初の画面**：h1「コンテンツ管理をアップデートしよう」52px/700・行の高さ 1.4（SP 37.4px）で、「コンテンツ管理」だけ #563bff。一文 17px。ボタンの直前に「＼ クレジットカードの登録不要 ／」（#495057・中央）。主「無料ではじめる」550×61px（地 #2b2c30・角 5px、app.microcms.io/signup を target="_blank"）、副「ビジネス職向けページ」550×61px の枠（/for-business）を**縦に**積む。副は資料ではなく「役割で分ける入口」。右は管理画面の静止画（826×612px・477KB・fetchpriority なし）。実績「ご利用企業数17,000社以上・継続率99%」は最初の画面の下で、時点・数え方の注記なし。
- **製品の見せ方**：トップ・機能・料金・事例の4ページに `<pre>`・`<code>` が0。仕組みは h2「管理画面から入稿、APIで取得」の画像1枚（503KB）で言い、コードはドキュメント（document.microcms.io、Next.js の別サイト）とブログへ。Resend の「2画面目に13言語のコード欄」と正反対。
- **機能の並べ方**：機能別10本（エディタ・カスタムフィールド・コンテンツAPI…）。1ページ＝枠の札「microCMSの機能」→ h1 → 2文 → お問い合わせ（枠）＋無料ではじめる（塗り）→ 中身のカード（コンテンツAPI は GET・POST・PUT・PATCH・DELETE・認証APIキーの6枚、各カードの最後にドキュメントの「〜の設定方法」）→ ブログ記事8件。
- **料金表**：Hobby 0円・Team 4,900円〜・Business 75,000円〜・Enterprise お見積もり（月額・税抜き、年払いなし）。カード 298×630px・角 8px・枠 #ced4da、名前 Sen 26px/800、価格 Lato 900。おすすめは Business だけ地 #2b2c30・scale(1.02)・右上に帯（SVG 89px）。入口は3枚「無料で始める」、Enterprise「お問い合わせ」。Team・Business に「＼ 14日間の無料トライアル ／」（※7「1サービスにつき、1回のみ」）。比較表は div の格子で8区分46行（○75・×52・ー3）、全部 `<details open>`、見出しの行（名前・価格・ボタン 200×38px）が `sticky; top: 80px`。追加の単価はセルの中に小さく（「200GB/月（+20円/GB）」「3人（+1,200円/人）」「20GB/月（超過時はAPI停止）」）。行の名前46のうち42がヘルプの記事へ。? の説明32個はホバーだけ。SP は 1024px の表を 337px の枠で横スクロール（行の名前も流れ、sticky も外れる）。FAQ は料金ページに置かずヘルプへ。
- **試すまで**：すべての入口が app.microcms.io/signup（新しいタブ）。登録はメール・パスワード・同意のスイッチ（同意まで登録ボタンは灰）。カード欄なし。
- **事例**：58件を5観点（課題8・用途11・業種22・活用機能14・技術36＝checkbox 91）＋キーワードで絞る。観点の中は OR、観点をまたぐと AND。件数は h2「該当する導入事例インタビュー 14件」、条件は URL（?issue=…）と「絞り込み条件（リセット）：…」の文。0件は件数とリセット（span・Tab で届かない）だけ。検索欄に label なし。Astro の島に58件の本文まで入れた props 672KB を埋める（HTML 1,118KB）。事例の詳細は h1（成果の一文）→ 会社名 → 日付 →「導入前の課題」3行・「導入後の効果」2行 → 目次 → 問答。
- **ドキュメント**：別のサイト・端末の書体・本文 #616269（6.07:1）・ボタンだけ紫 #563bff。左に検索と目次、チュートリアル8（Next.js・Astro・Nuxt・Gatsby・JavaScript・PHP・Ruby・Go）はロゴだけのタイル、APIドキュメント3、ヘルプセンターへ。
- **見た目の値**：色はトークン2層（primitive の slate-50〜900＋purple #563bff → text-primary などの役割名）。文字 #2b2c30（13.95:1）・#495057（8.18:1）、地 #fff／#f8f9fa／#2b2c30 の3段で章を分ける。× の印 #adb5bd は 2.07:1。書体 Noto Sans JP（本文）・Sen 800（プラン名）・Lato 900（価格）、字間は全体に .06em、本文 16px/28px（SP 14.2px、注 12.4px）、大きさは全部 clamp()。角はボタン 5px・面 8px。
- **動き**：押せる物のホバーは scale(1.02)＋影 -8px 8px 16px #00000014（左下に落ちる）、transform .2s（34規則）、写真は 1.05。登場は translateY(40px)→0・.4s ease-out・200ms ずつ（IntersectionObserver threshold .3）。reduce の規則は0。
- **データと重さ**：PC で top 5.69MB / features 3.87MB / pricing 3.87MB / customers 6.50MB / docs 4.47MB、SP で 3.08 / 1.26 / 1.26 / 3.83 / 1.81MB。自前の JS は 11本で約37KB（Astro）。PC だけ HubSpot の会話（visitor.js 1,404KB・CSS 537KB ほか約 2.5MB）を全ページで読み、features では PC の 69%。構造化データは5ページとも0。Astro の prefetch は読むが、対象のリンクが0で何も先読みしない。

### Studio（Studio株式会社、ノーコードのWeb制作・国内）https://studio.design/ja — 2026-11-01
- **最初の画面**：h1「理想を叶える／Webサイトを、／最速で公開。」40px/48px・500・字間 -0.88px（SP 36/43.2）、締めの「最速で公開」だけ `border-bottom: 3px dotted #222`。一文 15px/24px。主「無料ではじめる」158×47（#222・角 8px → app.studio.design/ja/signup）、副「製品資料をダウンロード」274×47（青い絵のボタン）を横に（SP は 358×58 で縦）。左上に記章「ノーコードCMS 国内利用数 No.1」、出典は右下に4行（東京商工リサーチ調べ・2025年12月末時点）。画面の下端に【重要】のお知らせ1行（2026年10月の不正アクセス）。ヘッダーは白い板 1300×64・角 12px を上 32px に浮かせる。
- **製品の見せ方**：編集画面でなく「Studio で作られたサイト」を傾けて並べた動画 1920×1080・9,620KB（autoplay muted loop・poster なし・SP も同じ・reduce でも再生）。機能ページも作られたサイトの動画 2本（12,305KB・2,905KB）と編集画面の静止画。DOM のモックは無い。
- **機能の並べ方**：トップは工程別3枚（構築・公開・運用改善）。デザインエディタのページは英語の章名（Next Creation・Free Layout・Editor AI・Visual Design・Creative Assets・Collaboration・Data）の下に和文2行の h2、機能は「英語 34px/600 の名前 → 和文の一言 → 画面」で 4〜6個ずつ。トップの最初の画面の直下に「サイト種別・業種・課題から探す」の入口（3列）。
- **料金表**：h1「料金のお支払いはサイト単位で」56px。黒い帯の中で、切り替えは**ビジネス利用／個人利用**（#personal が URL に残る）。ビジネス：Business ¥3,980（月払い ¥5,460）／Business Plus ¥9,980（¥12,900）／Enterprise お問い合わせ。個人：Free ¥0／Mini ¥590（¥1,290）／Personal ¥1,190（¥1,720）。年払いの月額を 40px、下に「月払いの場合：」12px #555。率はカードに書かない（計算で 22.6〜54.3%）。名前の下に「［札］＋一言」（［小規模サイト］のスモールスタートに最適）。上のプランで増える行だけ #0f70eb。アドオン（カスタムプロキシ ¥39,800）は表の外。比較表は div の格子で 6列 8区分 32行、**4区分（便利機能・セキュリティ・サポート・お支払い）は閉じて始まる**。見出しの行 sticky top:104px、Business の列だけ地 #f6f6f6 と上に黒い札「最もオススメ」。比較表の価格には「（年払い）」が付かない。税の表記なし。FAQ 10問（年払い→月払いは不可、返金なし）。複数サイトをまとめるワークスペースは別契約で、ここだけ年払い／月払いの切り替えと「20%以上お得」の札（Team ¥1,450／¥1,980・1名・最低3名）。
- **試すまで**：入口はどれも app.studio.design/ja/signup。文言は料金ページだけで5通り。カードの要否は書かず「Studioは無料でお使いいただけます」。締めの帯は全ページ「無料で試す／テンプレート（400超）から／プロ（認定パートナー 200以上）に頼む」の3つの道。
- **事例と信頼**：一覧は 59件、カード 437×562（ロゴ → サイト種別の札 → 会社名 → 数字入りの成果の一文 → 規模｜業種）。絞り込みは窓で3観点20条件（サイト種別7・業種8・従業員規模5）から**1つだけ**、条件ごとに別の URL（/customer-story/filter/industry/finance）。詳細は 業種・従業員数・利用用途 → 黒い面に課題・解決策・効果 各4行 → 問答。数字 900,000人・220,000件・30,000社は時点なし。比較表に ISO/IEC 27001・27017、Enterprise に SLA 99.9%。
- **ヘルプ**：help.studio.design は Intercom のヘルプセンター。黒い帯に検索、分類21・記事511件のタイル。製品サイトの書体・地を引き継がず、ヘッダーに登録の入口なし。構造化データは WebSite＋SearchAction（製品サイトの4ページは 0）。
- **見た目の値**：地 #f6f6f6（トップ・料金）／#f7f7f7（機能）、面 #fff・#f0f0f0、文字 #222（14.72:1）・#555（6.90:1）、黒い帯 #222。彩りは青だけ（#0f70eb は 4.28:1）。書体は Google Fonts の Inter＋Noto Sans JP、字間 -0.02em（52規則）・-0.04em（32）。角はボタン 8px・カード 12〜16px。部品すべてに `transition: all .3s cubic-bezier(.4,.4,0,1)`、:hover 595規則のうち opacity .75 が 97。keyframes 0。サイト自体が Studio 製（generator「Studio.Design.HRC」、CSS は HTML 内の style 19個・228KB）。
- **データと重さ**：PC で top 17.56MB / features 20.30MB / pricing 4.40MB / customers 33.94MB / docs 2.28MB（SP 14.97 / 19.78 / 4.29 / 33.73 / 2.87MB）。事例一覧の題の帯が SVG 1枚 27,995KB（1440×385 に約 3,200×2,000 の PNG 7枚を base64 で埋めた書き出し）。アイコンに Material Symbols 1,469KB を全ページで読み、ボタンの名前に「arrow_forward」が入る。解析は GTM・Meta・Pinterest・HubSpot・OpenAI の計測・FirstPromoter。inspect：PC FAIL 1、SP FAIL 3（本文 13px・13px 未満 25%）。

### Supabase（Supabase Pte. Ltd.、Postgres を中心にした開発基盤・海外）https://supabase.com/ — 2026-11-06
- **最初の画面**：h1「Build in a weekend／Scale to millions」Manrope 46px/46px・500（SP 34/37.8）、2行目だけ #0e7e4e（5.02:1、暗い地では #4acd8b）。一文は右の列に #696969（5.40:1）で製品名6つ。主「Start your project」（地 #0e7e4e・字 #fafcfb 4.96:1・14px・高さ 38px・角 9.29px → /dashboard/sign-up）、副「Request a demo」（白に枠）。題の下 y=451 から製品7枚のカード（Database 538px・ほか 262px）で、中は SVG と DOM の模型。明暗は OS の設定に合わせる（地 #fdfdfd／#131413）。inspect の最初の画面 319字。
- **製品の見せ方**：動画・canvas は5ページとも0。トップのカードの中で帯（marquee 35s×2・30s×3）と点（pulse .6s×9）が動く。/database の題の下は DOM の表（Filter・Sort・Insert、列 id int8・created_at timestamptz・email text・is_active bool、20行、13px、NULL は斜体の灰）。下の機能は PNG を明暗2枚ずつ（sql-editor.png 576KB と sql-editor-light.png）。トップに React のコード欄（6タブ・18行・「Read docs for React」）。
- **機能の並べ方**：製品別6本（Database・Auth・Storage・Edge Functions・Compute・Realtime）をページ上のサブナビで行き来、いまのページに下線。1本の中は h1（黒→灰の2行）→ DOM の表 → 「2行の見出し＋一文＋左に4タブの名前（22px・500）＋右に画面」×3。タブは 8.0秒ごとに自動で送り、reduce でも止まらない。role="tab"・aria-selected なし。
- **料金表**：FREE $0／PRO From $25（Most Popular）／TEAM From $599／ENTERPRISE Custom。プラン名も価格も Source Code Pro（価格 46px）。4列を線で分けた1枚の板で、PRO だけ 32px 上に出して 2px の濃い灰の縁と札（13px・地 oklch(0.394 0 0)）。ボタンは3枚が緑の塗り（15px・高さ 42px・角 9.72px）、Enterprise は白。月払いだけ（annual・yearly の語が0）、税は FAQ 1問（請求先の住所に応じて）。各行に超過の単価（100,000 MAU then $0.00325 per MAU）。Free は「1週間使わないと止まる・2つまで」を 14px の灰で。
- **見積もり**：「How compute pricing works」で 1.プラン（Pro／Team の radio）2.プロジェクトごとの 11段のスライダー（Micro $10・Small $15・Medium $60・Large $110・XL $210・2XL $410・4XL $960・8XL $1,870・12XL $2,800・16XL $3,730）、段ごとに札（MICRO・LARGE）と中身の一行（8 GB RAM / 2 vCPUs / 接続数）。左に Plan subscription・Total Compute・Compute Credits −$10・Total（Pro・Micro 1つで $25、Large で $125、2つで $35、Team で $599）。Add Project は上限なし・消せない。合計の欄だけ桁区切りなし（$3745）。
- **比較表**：8区分（Database・Auth・Storage・Realtime・Edge Functions・Dashboard・Platform Security and Compliance・Support）、PC は1つの table の tbody 78行（区分の行8を含む）で thead が top 62px・区分の th が top 135px の2段 sticky。SP は区分ごとの8つの表（2列・計62行）と「Change plan」の select が top 56px。行の名前の横に「About …」のボタン。FAQ 11問。
- **AI 向け**：料金と事例の詳細に「Copy as Markdown・Ask ChatGPT・Ask Claude」、/pricing.md（How billing works の計算例つき）、/llms.txt、robots.txt に Content-Signal（ai-train・search・ai-input すべて yes）。ドキュメントの最初は「Agent Prompt／CLI」のタブとコピー。
- **試すまで**：どのページからも1手で /dashboard/sign-up（Continue with GitHub／ChatGPT／SSO、または Email・Password）。カードの要否は書いていない。
- **事例と信頼**：トップにロゴ12（6列2段）と、5社のアコーディオン（開いた1枚 752×480px・閉じた4枚 76px・角 8px・div role="button" aria-expanded・押すと .15s で幅が入れ替わる・自動では回らない）。/customers は47件・3列（347×176px・角 10.67px）、業種18・製品7の select に件数を添え、URL に ?industry=saas（30件）。詳細は h1 成果の一文 → 右に Company size・Use case・Products used → 引用 → 章5つ → Key results。ヘッダーに GitHub の星 114.5K。
- **ドキュメント**：/docs は別の Next.js（CSS も別）。ヘッダーに Search ⌘K・Ask AI・Sign up。入口はフレームワーク15枚。
- **見た目の値**：文字 #030303（20.28:1）・#696969・注 #a0a0a0（2.57:1）、枠は黒 8%（トップで91要素）、緑はボタン #0e7e4e と印 #3ecf8e、コードの予約語 #6b35dc。書体 Manrope（見出し 46・34・16）・Inter 450（本文 14〜15px が最多）・Source Code Pro（価格・コード 13px）、字間 normal。ボタン .2s cubic-bezier(.22,1,.36,1)・押すと scale .97（motion-safe の中だけ）、既定 .15s cubic-bezier(.4,0,.2,1)。reduce の規則は4種だけで、トップの animation 15個は reduce でも動く。
- **データと重さ**：PC で top 8.07MB / features 7.42MB / pricing 5.40MB / customers 14.63MB / docs 34.76MB（SP 7.87 / 7.16 / 5.38 / 9.60 / 34.68MB）。docs は RSC の先読み 26,157KB（reference/javascript/introduction 8,309KB ほか言語別9本）、customers は Pages Router の _next/data の JSON 2,672KB。解析は自分のサブドメイン ss.supabase.com（GTM と gtag、853KB）を全ページで。構造化データはトップに Organization・WebSite・SoftwareApplication・Service＋OfferCatalog（価格なし）、料金・事例は BreadcrumbList だけ。inspect：PC FAIL 1（投稿の中の絵文字）・WARN 10。

## 真似る型
見本4つ（Resend・microCMS・Studio・Supabase）に共通するもの、または1つで測った値を出発点にするもの。値の出どころを添える。
1. **行動は「試す」が主、副は読み手で決める**：Resend は「Documentation」（開発者がそのまま読む）、microCMS は「ビジネス職向けページ」（決める人を分ける）。Studio は「製品資料をダウンロード」（決める人へ渡す資料）。主は塗り、副は枠か文字（Studio は副を青い絵のボタンにして、主より目立つ）。登録の欄はメールとパスワードほどに少なく、カード欄なし（microCMS は「＼ クレジットカードの登録不要 ／」をボタンの直前に）。
2. **コードをどこに置くかを先に決める**：使う人が開発者だけなら2画面目に言語の切り替えのあるコード欄（Resend 13言語）。編集者や決める人も読むなら、トップは「管理画面 → API」の1枚にして、コードはドキュメントへ（microCMS は4ページでコード0、機能のカードの最後にドキュメントの「設定方法」）。
3. **料金は4枚、最後は「お問い合わせ」**：Resend（Free・Pro・Scale・Custom）、microCMS（Hobby・Team・Business・Enterprise）。個人と法人の両方が使うなら、Studio のように最初の切り替えを「ビジネス利用／個人利用」にして3枚ずつ（Enterprise は法人側の最後）。入口の文言は3枚で同じ。従量の単価と、上限を超えたらどうなるか（Resend の超過 $0.90/1,000通、microCMS の「超過時はAPI停止」「+20円/GB」）を表の中に書く。
4. **比較表は区分ごとに見出し、行の名前から説明へ**：Resend 6区分45行（全部開いたまま）、microCMS 8区分46行（`<details open>`・見出しの行 sticky・42行がヘルプへ）。SP は横スクロールにせず、行の名前を残して1プランずつ見せる（microCMS の 1024px の横スクロールは行の名前が流れる）。
5. **ドキュメントは別のサイトにして、製品サイトから深いリンクで入る**：Resend は明るい別デザイン（目次・On this page・検索・AI への質問）、microCMS は別の Next.js のサイト（チュートリアル8・APIドキュメント3）。どちらもヘッダーに戻り道（ログイン・新規登録）を持つ。

6. **年払いの値を大きく、もう一方の値を同じカードに小さく**：Studio は ¥3,980 /月（年払い）40px の下に「月払いの場合：¥5,460/月」12px。切り替えを押さなくても両方読める。比較表の価格にも払い方を書く（Studio は書き忘れ）。
7. **比較表は決め手の区分だけ開いて始める**：Studio は8区分のうち公開・CMS・フォーム・ユーザー管理を開き、便利機能・セキュリティ・サポート・お支払いを閉じる（button＋aria-expanded）。microCMS は全部 `<details open>`。
8. **最後の帯は3つの道**：Studio は「無料で試す／テンプレートから／プロに頼む」を全ページの最後に。作る道具なら「自分で・見本から・人に頼む」で、使う人の手間の順に並べる。

9. **使う量で値段が変わるなら、料金の下に「プラン＋使う量−含まれる分」の見積もりを置く**：Supabase は Pro／Team と、プロジェクトごとの11段のスライダー（Micro $10〜16XL $3,730）、左に Plan・Compute・Credits −$10・Total。Resend は件数の9段のスライダーで合うプランだけを残す。どちらも段ごとに中身（Supabase は RAM・CPU・接続数）を出す。足した行は外せるようにし、数の書式を1つにそろえる（Supabase は消せず、合計だけ $3745）。
10. **価格とプラン名を等幅の書体で組む**：Supabase は Source Code Pro で FREE・PRO と $0・$25・$599 を 46px。開発者向けなら、コードと同じ書体で桁をそろえる。
11. **機能ページの題の下に、本物と同じ型の DOM の表かコード**：Supabase /database は列の型（int8・timestamptz・bool）と NULL まで再現した20行。Resend は2画面目に13言語のコード欄。画像にせず文字にすると、選べて軽い。
12. **AI に読ませる道を料金・事例・ドキュメントに**：Supabase は「Copy as Markdown・Ask ChatGPT・Ask Claude」と /pricing.md、ドキュメントの最初に Agent Prompt。Resend のドキュメントにも AI への質問欄とページのコピー。

## 反面教師
- 実績「17,000社以上・継続率99%」に時点・数え方なし。10月28日のトップに3月・2月のセミナーを「終了」の印なく出す（microCMS）。
- 比較表の × #adb5bd が 2.07:1、? の説明32個がホバーだけ、SP は 1024px の横スクロールで行の名前が消える。SP の本文 14.2px・注 12.4px（microCMS）。
- 事例の一覧に58件の本文 672KB を埋め、HTML 1,118KB。「リセット」が span、検索欄に label なし。PC の全ページで HubSpot の会話 約 2.5MB（microCMS）。
- トップに 3D（2.7MB）と JS 10.5MB を置き、22MB にする（Resend）。
- 料金のスライダーにラベルが無い（Resend、measure の inputsWithoutLabel=1）。
- 「Recommended」を4枚とも h3 の中に opacity 0 で置き、読み上げでは全プランが「Recommended」になる（Resend）。
- reduce でも 3D（2.7MB）と動画を読み込む。CSS 2本で規則 3,535 が重複（Resend）。
- 事例一覧の題の帯を、PNG 7枚入りの SVG（27,995KB）で書き出す。表示 1440×385 なら webp 1枚で足りる（Studio）。
- reduce でも 9,620KB の動画を読み、再生する。SP も同じ 1920×1080（Studio）。
- 事例一覧の h1 が閉じた窓の中の「条件で探す」で、見えている題は div。アイコンの文字「arrow_forward」がボタンの名前に入る（Studio）。
- 料金ページに税込み・税抜きの表記がない。比較表の価格に「（年払い）」がない。カードの割引率は計算で 22.6〜54.3% とばらつき、書かれない（Studio）。
- SP の本文 13px、13px 未満が 25%（Studio、inspect の FAIL）。
- reduce でもトップの帯・点（animation 15個）と機能ページのタブの 8秒の自動送りが動き、止めるボタンが無い。自動で送るタブに role="tab"・aria-selected が無い（Supabase）。
- ドキュメントのトップが先読みで 34.76MB（RSC 26,157KB）、事例一覧がほかのページの JSON を 2,672KB 先読み（Supabase）。
- 見積もりのプロジェクトを消せず、合計の欄だけ桁区切りが無い（$3745）。注の灰 #a0a0a0 が 2.57:1（Supabase）。
