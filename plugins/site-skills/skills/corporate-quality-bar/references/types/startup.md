# スタートアップ（新しい会社、プロダクトが1つの会社）

## この下位タイプで特に見ること
ミッションの言い方、プロダクトと会社の分け方、採用の熱量

## 見本の実測

### LayerX（https://layerx.co.jp/ ・採用 https://jobs.layerx.co.jp/ 、2026-10-24 解剖）
複数の事業（4つ）を持つスタートアップ。会社サイト・事業ごとのサイト・採用サイトが別。
- **ナビ（PC）**：私たちについて▼／事業内容／ニュース／お問い合わせ／採用情報▼ の5つ＋右端に「Join Us 採用情報」の丸いボタン。▼はホバーで横幅いっぱいのパネルが開くが、中は1列のリスト（5項目／3項目）。スクロールするとヘッダーは消え、左上の「ロゴ＋Menu」ボタンだけになる。SP はロゴと「Menu」だけ。
- **階層**：最大2段（/about/company/）。事業は1ページにまとめ、アンカー（#bakuraku など）で分ける。画面のパンくずは無く、JSON-LD の BreadcrumbList だけ。
- **トップの順番**：KV（h1「未来の希望を、実装しよう。」）→ ミッション1文 → What We Do（事業カード4枚）→ ニュース3件 → Join Us（採用）→ Contact の帯。数字の帯は無い。採用が問い合わせより先。
- **信頼の材料**：代表メッセージは会社概要の一番上に CEO・CTO の連名。会社概要は 住所（本社＋3支社、地図リンクと最寄り駅）・設立日・代表2名・グループ会社2社・所属協会3つ。社員数・資本金は無い。導入社数「20,000社以上」は事業内容の本文の中だけ。ISO 27001 は全ページのフッター。
- **採用への導線**：ヘッダーに2か所（ナビの▼と右端ボタン）＋トップの節。採用は別ドメイン（/jobs/ は jobs.layerx.co.jp へ301）、募集一覧は外部ATS。採用サイトは4段の質問（職種→職種詳細→サービス→働き方。2〜4段目は複数選択）で「あなたのための採用情報」を作り、該当0件の選択肢は薄くして選べなくする。結果ページに件数（例：ビジネス＋カスタマーサクセス＋バクラク＋リモートで8件）。1手の反応は SP 73〜194ms・通信の追加なし。
- **問い合わせ**：フォームの上で、4事業と採用を各サイトへ振り分ける（リンク5つ）。会社宛ての種別は6つ。入力→確認→完了の3段、入力欄8つ（必須5）＋「どこで知ったか」12択（必須）＋同意。
- **ニュース**：トップ3件、一覧10件×55ページ。select 3つ（事業6択・並べ替え2択・期間8択）で、選ぶとページを読み直し、URL に組み合わせが残る（?category=corporate&year=2020&sort=oldest）。事業の記事は各事業サイトへ直接リンクし外部の印、会社の記事だけ自サイトに持つ。事業内容ページにも事業ごとに最新3件。
- **データ**：Organization・WebSite・BreadcrumbList（Yoast）を全ページ。採用サイトは JSON-LD なし。lang="ja" のみで言語切り替え無し。
- **見た目の値（計算済みスタイル）**：文字 #152632、補助 #727888・#9EA2AD、線 #D3D4D9、面 #F6F6F7、事業の札 #CCEFD1（12px・角丸いっぱい）、アクセント #534DFF の1色（採用ボタン・現在地）。KV 60px（SP 34px）・行間1.4・字間0.04em、ミッション 32px・行間1.9。本文幅 1132px（1440px で左右154px）。事業とニュースはカードでなく全幅の行（内側 28px、PC で1行 192〜196px）。動きは文字せり上がり 0.8s cubic-bezier(.47,.16,.24,1)・1文字0.06sずらし、ホバーの不透明度 1.2s cubic-bezier(.18,.06,.23,1)。
- **重さ（PC/SP）**：top 4.90/4.55MB、about 2.44/2.44、business 3.61/3.60、採用 6.51/7.19（KV の webm 2本で約5MB）、news 2.20/2.20。会社サイトは全ページで共通JS 954KB を読む。

### Mistral AI（https://mistral.ai/ 、2026-10-28 解剖。選んだ理由：パリの AI スタートアップで、会社・事業・採用・ブログ・相談を1つのドメインに持ち、トークンの配色・Matter.js の積み木・貼りつく目次・手元で絞るブログを作り込んでいる。受賞歴・事例集は確かめられなかった）
Astro＋Netlify。採用の募集は外の Ashby（2026-10-28 に 226件）。
- **ナビ（PC）**：fixed・48px・地 #fbfbf8・罫 1px #e4e3de で項目を区切る。ロゴ 120px → Research／Sovereign AI／Cloud／Customers／Company（ALTMistral 16px/500）→ 右に Get in touch と黒 #09090b の Login。800〜1,600px スクロールしても隠さない。▾は項目の下の小さな窓（幅 240〜345px・1行 57px・右に ›、題も1文も無い）でメガメニューにしない。採用は Company の4項目目だけ。SP はロゴ・中央に Get in touch・3×3 の点 48px、開くと全画面で1段目5項目 57px → 2段目へ横送り。
- **トップの順番**：1文「Mistral is #1 in Sovereign AI.」96px（`<p aria-hidden>`、h1 無し）＋120px の色の箱が Matter.js で積み上がる＋下に最新の記事の札 → 顧客ロゴの帯 272px（流れる）→ 何を守るかの札13 → 事業4つ（左に 226×52px の目次が top 44px で貼りつき現在地が替わる、右に「We make the models. You keep them.」の対の文）→ 業種タブ4つ（1行 約156px、#ffaf01 の棒が約10秒で伸びて次へ）→ 暗い #151524 の入口3つ。数字の帯も採用の入口も本文に無い。最初の画面の文字は8字。
- **信頼の材料**：会社ページは使命（200dvh の間スクロールで文が中央へ育つ）→ 成り立ち2区画 → 年表18枚（幅 500px・日付は Space Mono 11px の黒い札・題だけ）→ 創業者3人 → 顧客ロゴ → 最新3件。会社概要の表・所在地・社員数は無く、社員「900+」は採用ページ、Paris と設立 2023-04 は JSON-LD にだけ。
- **採用**：Apply now 2つ（Ashby へ）。班4つは押すと 110×40→392×132px に開いて1文だけ、件数とリンクは無い。数字 900+・30+・50%（232px のタイル・72px）、価値4つ（色の面に黒字）、福利3組（育休 20週・401k 6%・英年金 5% と数字で書く）、選考は職の系統で2本（GTM 4段・技術 3段）、最後に応募者の個人情報の方針。
- **相談**：左に Looking for help?（Support・Press・Privacy・Vulnerability の4つ）、右に営業の5欄（名・姓・会社のメール・役職・相談 1,000字、全部必須、autocomplete 無し）。採用の振り分けは無い。
- **ニュース**：/news/ に 92件を全部 HTML に持つ（1,220KB）。分類5つ（Space Mono 11px の札、選ぶと分類の色）は複数選べ、件数「92 results」とページ数が替わる。押して 57〜70ms・通信 0KB、URL に `?categories=research,company&search=Large`、0件は「No results」。検索欄は label 無し。1枚目だけ 960×643 の大きいカード。
- **データ**：トップだけ Organization（創業者3人・foundingDate・PostalAddress・sameAs 5）。他は WebPage／CollectionPage。lang="en"＋hreflang en・fr・it。トップに h1 が無い。alt 無し 0／475枚。
- **見た目の値**：トークンで光・闇・反転の3組。地 #fbfbf8・面 #f5f4ef・#ebe9e0、文字 #18181b（438回）・#3f3f47・#71717b（4.66:1）、暗 #151524、色は #ffaf01→#ff8204→#ff5229→#e51300 の4段。書体は自前の ALTMistral 500（460要素）・Inter・Space Mono。段は display 96／h1 72／h2 56・60／h3 44・52／h4 32／h5 24／本文 16・24／札 11（字間 -.02〜0em）。色の変化は .15s cubic-bezier(.4,0,.2,1)。inspect.js：最初の3画面の枠線 PC 75・SP 80。
- **重さ（PC/SP）**：top 5.23/4.51MB、about 6.97/5.15、products 3.95/3.79、careers 6.53/4.22、news 6.13/4.87（GTM 除く）。全ページに共通 JS 1,216KB（Matter.js・three.js・Swiper・GSAP 入り）＋同意の窓 axept.io 1,445KB＋GTM 1,014KB。画像は srcset と lazy（トップ 114枚中 111枚が lazy、SP の画像は PC の約1/5）。
- **動き**：reduce を見ているのはグラフ・地球の回転・視差の3か所だけで、1文の出し方・積み木・10秒のタブ・ロゴの帯は reduce でも動く。


### Linear（https://linear.app/ 、2026-11-01 解剖。選んだ理由：色・文字・速さ・イージングを CSS 変数のトークンで持ち、会社・採用・ニュースを製品の LP と同じ部品で組む。860px のメガメニュー、トップに架空の1件を通す見本、パスで持つニュースの分類。受賞歴・事例集は確かめられなかった）
課題管理の製品の会社（2019年創業・フルリモート）。Next.js。会社・採用・ニュース（Now）・変更履歴・相談をすべて linear.app に持ち、応募だけ Ashby。
- **ナビ（PC）**：fixed 73px・地なし＋blur(20px)・下線 1px rgba(255,255,255,.08)。3,000px 送っても隠さない。Product▾／Resources▾／Customers／Pricing／Now／Contact ｜ Log in／Sign up（#e5e5e6 の地）。項目は 13px・#8a8f98・高さ 32px のピル、ホバーで #f7f8f8＋白 8% を .1s。Product▾ は 860×281px の板（地 rgba(8,9,10,.9)＋blur(32px)・角 14px・影 0 8px 32px）に「2行の段階4つ＋1語4つ＋下に New と最新の更新」。opacity と scale(.98→1) 約 .16s、板の大きさの替わり .22s。Enter で開き Tab で中へ。**採用は Resources▾ の2番目だけ**。SP は三本線（aria-label なし）→全画面 15項目（Careers を含む）。フッター6列 37リンク。
- **トップの順番**：h1 64px/510/−.022em ＋1文 15px ＋「New Loops →」→ HTML で組んだ製品の画面（架空の課題 DRV-8852）→ 顧客ロゴ7つ → 2色の h2（主の1文 #f7f8f8・続き #8a8f98、48px）＋FIG 0.1〜0.3 → 柱4本（各 約1,240px）→ Features → 変更履歴4件（点と線・日付 12px 大文字）→ 72px の CTA。同じ架空のアプリが Slack の会話→課題→計画→エージェント→差分まで全区画に続く。数字の帯・採用の入口・会社の話はトップに無い。
- **h1**：見た目の2系統（SP 4行・PC 2行、どちらも aria-hidden）＋読み上げ用の visuallyHidden の1文。行ごとに opacity 0・blur(10px)・translateY(20%) から出すが JS を待つので、計測環境で PC 7.15s に出始め 8.19s に出そろう（load 1.85s）。reduce でも 6.45s まで見えない。
- **信頼の材料**：About の本文に「Founded in 2019」「more than 40,000 companies」（募集の詳細では同じ数が 25,000）。写真 269px の8人（共同創業3・COO・責任者4）＋名前だけ173人（4段組み・行 39px）＋出資者22人。会社概要の表・所在地・社員数の数字は無い。
- **相談**：Contact に Sales（4欄・必須3：名前・仕事のメール・会社の規模 select・要件）／Support／その他はメール、＋資料4つ（Slack・Docs・Developers・Status）。採用の振り分けは無い。
- **採用**：h1＋「Open roles ↓」→ 動画 6:06（preload=metadata）→ 3段落 → 外の記事5本 → 原則 01.〜11. → 募集 23件・部署9つ。行 1312×72px（職種／場所／Learn more #828fff）。件数・絞り込み・検索は無い。詳細は自サイト `/careers/〈uuid〉` にパンくず「Careers / Sales」・「Full-time (Singapore)」・福利（有給5週・育休4か月・4年ごとに1か月）。給与の数字・JobPosting は無い。Apply で Ashby。
- **ニュース（Now）**：分類6つ（All・Changelog・Product launches・From the team・From the community・Press）を `/now/team` のようなパスで持つ。1回目 1.3〜1.6s（+0.27〜1.24MB）、先読み済みなら 62〜140ms・0KB。件数なし。札 384×417px → Archive の行 1280×56px → Load more。日付は「Oct 29, 2026」で `<time>` 0。変更履歴は URL に日付（`/changelog/2026-10-22-…`）、ただしトップと /changelog で題と日付が食い違う（SEP 10 と September 14）。
- **データ**：JSON-LD は5ページと募集の詳細で 0。lang="en"、言語の切り替え無し。alt 無し 0。
- **見た目の値**：地 #08090a・#0f1011・#141516・#191a1b、文字 #f7f8f8（18.73:1）・#d0d6e0・#8a8f98（6.13:1）・#62666d（3.45:1、トップで132要素）、アクセント #7170ff／#828fff、フォーカス 1px #5e69d1。Inter Variable（300/400/510/590/680）と Berkeley Mono。`--title-1〜9` は 17〜72px、本文 15px・行間 1.6・字間 −.011em。速さ `.1s`／`.25s`、`--ease-out-quad cubic-bezier(.25,.46,.45,.94)`。
- **動き**：@keyframes 61。reduce を CSS で 42か所（no-preference 27・reduce 15）見るのは解剖した中で最多。ただし `@media (prefers-reduced-motion:reduced)` の書き間違いが1か所あり流れる帯の複製が消えない、点の格子 75個は reduce でも動く。
- **重さ（PC/SP、measure.js）**：top 11.55/16.13MB、about 14.10/13.54、plan 13.26/6.39、careers 18.30/16.14、now 20.80/10.99。うち Next.js の先読み（RSC）が top 36%・about 48%・careers 47%・now 59%。転送量では top が開いて 3,142KB、下まで送ると 5,999KB（先読み42本 1,148KB）。全ページで検索の索引 1,107KB。/plan は PC で PNG 4枚 5,509KB、SP は AVIF 642KB。

### Mercury（https://mercury.com/ 、2026-11-05 解剖。選んだ理由：米国の法人向けの銀行サービス。色・速さを6系統×光と闇の CSS 変数で持ち、Radix の押して開く全幅のメガメニュー、スクロールで送る最初の画面の動画、区画の地に .5s で色を合わせるヘッダー、決まりの断り書きを最初の画面に貼る作り。受賞歴・事例集は確かめられなかった）
2017年創業（JSON-LD）。Next.js。会社・事業・採用・ブログを mercury.com に持ち、募集の詳細と応募だけ Greenhouse（新しいタブ）。
- **ナビ（PC）**：sticky 72px で隠さない。Products▾／Solutions▾／Resources▾／About▾／Pricing ｜ Log in／Open account（#5266eb・40px・角 32px・白で 4.71:1）。▾ はホバーで開かず、押すか Enter で開く。Esc で閉じてフォーカスはボタンに残る。板は幅 1440px・地 #272735・下の角 12px、列 415px×3（480px おき）、各列に「18px の大きな項目＋14px #c3c3cc の1文（8.40:1）＋14px 大文字のラベルと 14px の項目」、下の行に別の客（Personal Banking →／Contact us →）。高さ 320〜646px、リンク 7〜15。fadeIn .15s ease-out（.15s 遅れ）。
- **ヘッダーの地**：区画に合わせて 透明 → #171721 → #f6f5f2 → #fbfcfd と替わる（scrollY 0・600・2,600・5,000 で測った）。`--theme-transition-duration:.5s`・`cubic-bezier(0,0,.6,1)`。
- **トップの順番**：h1「Radically different banking」49.35px/480（SP 28px、300ms で opacity 1）＋1文＋メール欄つきの Open account＋Launch demo → 製品の画面の動画 → 左に開閉4項目・右に画面の動画 → 「Loved by 450K+…」の h2 と顧客ロゴ・社長の声の動画3つ（自動で送らない）→ 開閉6項目 → 題が数字のニュースのカード3枚（「$1B in annualized revenue and 4+ years profitable」「$5.2B valuation」）→ business／personal → 脚注18個。最初の画面は sticky 900px／箱 2,250px で、動画（PC 4,681KB・SP 2,346KB）を止めたままスクロールで currentTime を進める（400px で 1.89秒）。
- **断り書き**：「Mercury is a fintech company, not an FDIC-insured bank…」を最初の画面の下に sticky（PC 1376×41px・12px、SP 342×66px・10px）。本文の数字に上付きの番号（トップに sup 14）、最後に脚注18個・9,402字（PC 12px・SP 10px、区画 1,225／1,559px）。
- **信頼の材料**：会社ページは記事の引用6枚（Fortune は「in 2023」）と出資者のロゴ・「2,500+ community members」・「1,000+ employees」。会社概要の表・沿革・創業者・創業年は画面に無く、JSON-LD の Organization にだけ（founders 3・address 3・foundingDate 2017）。社員数は /jobs で「1000+」と書き方が違う。
- **採用**：ヘッダーは About▾ の CONNECT の3番目（14px）だけ、トップの本文に入口なし。/jobs は See open roles ↓ → 価値観 → 勤務地3つ → 福利11行（育休 12週以上・$600・$1K/年・$100/週・401K 4% と数字で書く）→ 文化 → 募集77件を部署15の見出しで（Engineering 18 ほか）。件数・絞り込み・検索なし、行は 職種／勤務地（Any office or remote）／›（Greenhouse へ target=_blank）。JobPosting 0。
- **問い合わせ**：会社ページに Say hello（hello@）・Press inquiries（press@）の2枚、mailto だけ。営業は事業ページの Contact sales。採用の振り分けなし。
- **ニュース（ブログ）**：2段目のナビ（Library・Meridian・Inside Mercury・Topics▾・検索）。Topics▾ は14分類を2列＋絵つきの札2枚。分類はパス（/blog/categories/…・/blog/topics/…）で、件数・組み合わせなし。札 28枚、分類の札 14px 大文字 #5266eb（4.59:1）、題は Tiempos Headline 21px。一覧に日付が無い（記事に「November 4, 2026」、`<time>` 0）。Company News で同じ記事が2回並ぶ。
- **データ**：トップは Organization・FinancialService（award・OfferCatalog 17）・MobileApplication（AggregateRating 4.9・22,915件、画面に出ない）。ブログの一覧は JSON-LD 0、h2 43。lang="en" だけ。alt 無し 0（5ページ）。メール欄は placeholder だけで label なし。
- **見た目の値**：`--color-{neutral,purple,blue,green,orange,beige}-base-0〜1000` と `--background-default` など役割の変数を光と闇の2組。地 #fbfcfd・見出し #272735（14.32:1）・本文 18px #535461（7.28:1）・暗 #171721 に #ededf3（15.25:1）。書体は自前の Arcadia（Text 360〜500・Display 320〜480）と Tiempos（ブログ）、全部 `font-display: optional`・代わりは `local(Arial)`。段は h1 49〜57／h2 42（SP 28）／カード 28／本文 18／ナビ 16／札 14／注 12（SP 10）。速さ .15s `cubic-bezier(.4,0,.2,1)`・ボタン .3s・地の色 .5s。
- **動き**：reduce で、最初の画面の sticky を外し（`motion-safe:sticky`）、動画を最後の絵（6.38秒）で止め、区画の動画も 0秒で止める。桁が回る部品は fade に替え、View Transitions も 0s。@keyframes 43。
- **重さ（PC/SP、measure.js・タグ除く）**：top 22.26/16.16MB、about 36.33/23.29、business 22.92/13.73、jobs 33.21/9.84（Mux の動画 23,822KB、SP は 1,754KB）、blog 38.99/17.50（先読み 27,131KB）。先読み（`?_rsc=`）は blog で 92本 18,435KB、Topics▾ を開くだけで +1,829KB。タグは GTM 2.4〜2.9MB・segment・facebook・同意の窓（transcend）0.5MB ほか約30ホスト。inspect.js：トップは FAIL 5（横スクロール scrollWidth 3,431px・本文 12px／SP 10px・13px 未満 55%）・WARN 6。

## 真似る型（LayerX・Mistral AI・Linear・Mercury の4つで確かめた）
- 会社サイトは「志・事業の地図・ニュース・連絡先」に絞り、事業は1ページ（LayerX：アンカー、Mistral：/products/ のタイル5枚・2,344px、Linear：トップの柱4本＋柱ごとのページ）で並べ、プロダクトの本体と採用の応募は外へ渡す（LayerX：別ドメインと外部ATS、Mistral：Ashby、Linear：募集の詳細は自サイト・Apply だけ Ashby）。
- ヘッダーの右端に、目立つ形の行動を置く（LayerX：Join Us の丸いボタン、Mistral：黒の Login と Get in touch、Linear：#e5e5e6 の Sign up）。ヘッダーは隠さない（Mistral 48px、Linear 73px・blur(20px)・下線 白8%）。下がり窓は、項目が8つ以下なら1列の小さな窓（LayerX 5項目、Mistral 1行 57px）、段階と1語の項目が混ざるなら1枚の板（Linear：860px に2行4つ＋1語4つ＋「New と最新の更新」の行、opacity と scale(.98→1) .16s、大きさの替わり .22s）。
- トップは1文で始め、数字の帯を置かない（LayerX：h1 60px、Mistral：96px の1文＋最新の1件、Linear：h1 64px＋1文＋「New Loops →」）。1文は h1 にし、最初から見える状態で HTML に置く（Mistral は aria-hidden の p、Linear は JS を待って 6.4〜8.2 秒見えない）。
- トップの見本は架空の1件を全区画に通す（Linear：課題 DRV-8852 と同じ架空のアプリが、会話→課題→計画→エージェント→差分まで続く）。
- 事業は対の文か2色の文で書く（Mistral：「We make the models. You keep them.」×4、Linear：h2 の主の1文を #f7f8f8・続きを #8a8f98）。左に貼りつく目次（226×52px・top 44px）で今どこかを見せる（Mistral）。
- 更新の速さは日付つきの変更履歴で見せる（Linear：トップに4件、点と線、URL に日付 `/changelog/2026-10-22-…`）。題と日付は1か所から出す（Linear はトップと一覧で食い違った）。
- ニュースの絞り込みは URL に組み合わせを残す（LayerX：?category=…&year=…&sort=…、Mistral：?categories=a,b&search=x、Linear：/now/team のパス）。件数が数百までなら全部持って手元で絞るか先読みする（Mistral 92件・57〜70ms・0KB、Linear 先読み済みで 62〜140ms・0KB。LayerX は読み直しで +1.3MB）。どれも分類の件数は出していないので、作るときは足す。
- 相談のフォームの前で用件を振り分ける（LayerX：リンク5つ、Mistral：4つ、Linear：Sales・Support・メールの3つ＋資料4つ、営業は4欄）。3つとも採用の振り分けが無かったので、作るときは採用を足す。
- 色・文字の段・速さを CSS 変数のトークンで持ち、会社・採用・ニュースを製品と同じ部品で組む（Mistral：光・闇・反転の3組、Linear：地4段・文字4段・見出し9段・速さ2つ）。文字の4段目は 4.5:1 まで上げる（Linear #62666d は 3.45:1）。
- 採用の福利は組に分けて数字で書き、選考は職の系統ごとに段の数を書く（Mistral：福利3組、選考 4段と3段。Linear：有給5週・育休4か月・4年ごとに1か月）。募集は部署の見出しと 72px の行で並べる（Linear）が、件数と絞り込みを足す。
- 人の多さは名前の量で見せる（Linear：写真8人＋名前173人＋出資者22人）。数字で書くなら会社概要の表の上に「いつの値か」を添える。

- ▾ は押して開く全幅の板にし、列ごとに「大きな1項目＋1文＋小さな項目」、下の行に別の客の入口を置く（Mercury：列 415px×3・下に Personal Banking →、Linear：860px の板に段階4つ＋1語4つ＋「New」の行）。Esc で閉じてボタンへ戻す。
- ヘッダーは隠さず、下の区画の地の色に .5s で合わせる（Mercury：透明 → #171721 → #f6f5f2 → #fbfcfd、`cubic-bezier(0,0,.6,1)`）。
- 最初の画面は1文＋メール欄つきのボタン1つ（Mercury：Open account。Launch demo は2つ目）。製品は左の開閉4項目と右の画面の組で見せる（Mercury：開いた項目に点、右の動画が替わる）。
- 規模の数字はニュースの題にし、記事へつなぐ（Mercury：「$1B in annualized revenue and 4+ years profitable」「$5.2B valuation」）。題の数字と記事の日付をそろえる。
- 決まりの断り（銀行でない・計量の検定でない など）は最初の画面の下に1行、条件は上付きの番号で最後の脚注へ（Mercury：sticky の帯・脚注18個）。字は 14px 以上（Mercury は 12px／SP 10px で inspect の FAIL）。
- reduce では、スクロールで送る動画を最後の絵で止め、sticky の箱を外す（Mercury：`motion-safe:sticky`、6.38秒で停止）。

## 反面教師
- 会社概要に規模の数字（社員数・資本金）が無く、導入社数が本文に埋もれる（LayerX）。数字は会社概要かトップに置く。
- 見出しを1文字ずつ span に分けて動かし、読み上げで切れて見える。PC 用と SP 用の見出しを二重に置く（LayerX）。
- 絞り込み1回でページ全体を読み直す（SP で1回最大 +1.3MB）。文字だけのページでも約1MBの共通JSを読む（LayerX）。
- トップのニュース枠が同じ事業の外部記事で埋まり、会社の重要なお知らせがトップに出ない（LayerX、2026-10-24時点）。
- トップに h1 が無く、1文が aria-hidden（Mistral）。読み上げの最初の見出しが3つ目の区画になる。
- 採用への入口がトップの本文・フッター・相談の振り分けに無く、採用ページに募集の件数も出ない（Mistral：下がり窓の1項目だけ、Ashby に 226件）。
- 会社ページに会社概要の表が無く、社員数は採用ページ、所在地は JSON-LD にだけ（Mistral）。
- reduce でも積み木が落ち、タブが10秒で回り、ロゴが流れる（Mistral）。同意の窓 1.45MB と GTM 1.0MB を全ページで最初に読む（Mistral）。
- フッターの「Privacy choices」の href が `/javascript:openAxeptioCookies()/` で 404（Mistral）。
- h1 を JS の演出に預け、計測環境で 6.4〜8.2 秒（reduce でも 6.45 秒）見えない（Linear）。
- 採用がヘッダーに無く（Resources▾ の2番目）、トップの本文・Contact にも無い。23件の募集に件数・絞り込みが無い（Linear）。
- 同じ数・題・日付が場所で違う：40,000社と 25,000社、変更履歴の題2つ、SEP 10 と September 14（Linear）。
- `prefers-reduced-motion:reduced` の書き間違いで reduce の1行が効かない。JSON-LD・`<time>` が全ページで 0。見えたリンクを全部先読みし、トップで 42本・1,148KB（Linear）。
- 採用はヘッダーの About▾ の3番目（14px）とフッターだけ、トップの本文に無い。77件・部署15に件数・絞り込みが無い（Mercury）。
- ブログの一覧の札に日付が無く、記事にも `<time>` が無い。脚注と断り書きが 12px／SP 10px（Mercury）。
- 会社ページに会社概要の表・沿革・創業者が無く JSON-LD にだけ。「1,000+」と「1000+」、会社ページの賞が 2023年のまま（Mercury）。
- 先読みとタグで重い：blog の先読み 92本 18,435KB、Topics▾ を開くだけで +1,829KB、タグ約30ホスト（Mercury）。書体が全部 `font-display: optional`＋`local(Arial)` で、Arial の無い端末では既定の書体になる（Mercury）。
