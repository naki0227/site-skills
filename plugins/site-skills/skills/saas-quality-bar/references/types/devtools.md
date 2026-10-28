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

## 真似る型
見本2つ（Resend・microCMS）に共通するもの、または1つで測った値を出発点にするもの。値の出どころを添える。
1. **行動は「試す」が主、副は読み手で決める**：Resend は「Documentation」（開発者がそのまま読む）、microCMS は「ビジネス職向けページ」（決める人を分ける）。主は塗り、副は枠か文字。登録の欄はメールとパスワードほどに少なく、カード欄なし（microCMS は「＼ クレジットカードの登録不要 ／」をボタンの直前に）。
2. **コードをどこに置くかを先に決める**：使う人が開発者だけなら2画面目に言語の切り替えのあるコード欄（Resend 13言語）。編集者や決める人も読むなら、トップは「管理画面 → API」の1枚にして、コードはドキュメントへ（microCMS は4ページでコード0、機能のカードの最後にドキュメントの「設定方法」）。
3. **料金は4枚、最後は「お問い合わせ」**：Resend（Free・Pro・Scale・Custom）、microCMS（Hobby・Team・Business・Enterprise）。入口の文言は3枚で同じ。従量の単価と、上限を超えたらどうなるか（Resend の超過 $0.90/1,000通、microCMS の「超過時はAPI停止」「+20円/GB」）を表の中に書く。
4. **比較表は区分ごとに見出し、行の名前から説明へ**：Resend 6区分45行（全部開いたまま）、microCMS 8区分46行（`<details open>`・見出しの行 sticky・42行がヘルプへ）。SP は横スクロールにせず、行の名前を残して1プランずつ見せる（microCMS の 1024px の横スクロールは行の名前が流れる）。
5. **ドキュメントは別のサイトにして、製品サイトから深いリンクで入る**：Resend は明るい別デザイン（目次・On this page・検索・AI への質問）、microCMS は別の Next.js のサイト（チュートリアル8・APIドキュメント3）。どちらもヘッダーに戻り道（ログイン・新規登録）を持つ。

## 反面教師
- 実績「17,000社以上・継続率99%」に時点・数え方なし。10月28日のトップに3月・2月のセミナーを「終了」の印なく出す（microCMS）。
- 比較表の × #adb5bd が 2.07:1、? の説明32個がホバーだけ、SP は 1024px の横スクロールで行の名前が消える。SP の本文 14.2px・注 12.4px（microCMS）。
- 事例の一覧に58件の本文 672KB を埋め、HTML 1,118KB。「リセット」が span、検索欄に label なし。PC の全ページで HubSpot の会話 約 2.5MB（microCMS）。
- トップに 3D（2.7MB）と JS 10.5MB を置き、22MB にする（Resend）。
- 料金のスライダーにラベルが無い（Resend、measure の inputsWithoutLabel=1）。
- 「Recommended」を4枚とも h3 の中に opacity 0 で置き、読み上げでは全プランが「Recommended」になる（Resend）。
- reduce でも 3D（2.7MB）と動画を読み込む。CSS 2本で規則 3,535 が重複（Resend）。
