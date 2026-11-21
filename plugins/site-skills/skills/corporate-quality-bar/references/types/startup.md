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

### Runway（https://runway.com/ 、2026-11-09 解剖。選んだ理由：ニューヨークの動画生成 AI のスタートアップ。1つのモデルから Creative・Dev・Robotics の3製品に分け、文字の段を clamp の14段と固定 px の5段の2系統で持ち、板・ニュース・採用・問い合わせを同じ部品（16px の角・黒10%の縁・#0c0c0c）でそろえる。受賞歴・事例集は確かめられなかった）

- **ナビ（PC）**：上に告知の帯 48px（SP は iPhone のアプリの帯 72px）、その下に fixed 68px（地は白95%＋blur(12px)の層）。送ると top 48 → 0 で、隠さない。Creative▾／Dev▾／Robotics▾／Research▾／Resources▾／Enterprise▾／Pricing ｜ Enterprise Sales（#eef1f5）・Login・Try Runway（#262626）。▾ は乗せると開く板（左右 20px 内側・角 16px・縁 黒10%・影 0 25px 50px −12px）で、上に題 24px＋1文、群の名前 12px #666e7a、項目は名前 16px＋説明 13px、Creative の板の下に「Used by 65M+ creators worldwide」の帯。開くとほかの項目を opacity .5、後ろを黒20%＋blur(4px)。項目は a href（Enter で /product へ移る）で、キーボードでは板に入れない。**会社（About Us・Careers）は Resources の板の3列目「Company」だけ**。SP は「Menu」の button 39×25px → 7項目を 36px で縦に。フッター 8群・69本。
- **トップの順番**：1400×600 の角の丸い動画（Mux・autoplay）に h1 56px／61.6px／−0.84px＋1文 16px＋ボタン1つ → ロゴの帯 → h2 56px「同じモデルの上に3つ」＋3列（題 24px・写真 461×259・1文 24px・説明 14px・ボタン3つ）→ 縦の tablist 5項目（選んでいない項目 .3）と 16:9 の絵 → 研究の帯（1段落＋右に3行）→ 最新4件（日付なし）。見出しは 5,144px に5つ。数字の帯・採用・会社の区画は無い。
- **信頼の材料**：/about は h1 80px の使命 → 1段落 → 研究の動画 → 拠点7都市を1文 → 写真の帯 → 募集5件＋View all openings → 研究3件（2023-12〜2025-07）。会社概要の表・設立年・社員数・代表の名前は画面に無く、foundingDate 2018・founders 3人・legalName はトップの JSON-LD だけ。/careers に受賞4つ（いちばん新しいのが 2024）と In the Press 10件（月まで）。利用者の数は3か所で 60m+ creatives・60M+ users・65M+ creators。
- **採用**：/careers（PC 12,858px・SP 21,526px）。使命の h1（/about と同じ文）→ 拠点の1文 → 募集53件を13部門の div 30px の下に、職名・部門・勤務地・Apply の4列（14px）。件数・絞り込み・検索なし、Remote を含む46件。Apply は新しいタブで Ashby 49件・Google フォーム 4件（Runway Studios）。JobPosting 53件。手当10項目を数字で（15日・16週・100%・$600×2・$250／月・3%・$500）。
- **問い合わせ**：/enterprise-contact に「two business days」の1文、14欄（使う人数 select 5段・使い道 select 6つ・製品の checkbox 5）、* 9つ、required 0、文字の欄の label の結びつき 0。入口は告知の帯・右上・Enterprise の板の3か所。
- **ニュース**：分類7つを /news/research のようなパス（読み直し 1.57秒）、選んでいない分類 opacity .4（2.68:1）・aria-current なし。type=search（sr-only の label）はその分類の中をその場で絞る、0件で文なし。Grid／List は aria-pressed で URL に残らない。1ページ 大きな1件＋12件、ページ番号 1〜15 の button（URL は /news のまま）。日付「November 5, 2026 • Research」13px 黒50%（3.64:1）。写真は 1,600〜3,200px の PNG を 422×237px に。
- **データ**：JSON-LD はトップ（Organization・Person×3・ContactPoint・SoftwareApplication・WebSite）と /careers（JobPosting×53）だけ。hreflang はトップ・会社・製品が en・ja・ko・fr・pt-BR、採用・ニュースは en だけ。/about と /careers の見出しは h1 だけ。h1 は 0.28〜1.21秒で見える。Cookiebot の窓は4つのトグルが全部オンで出る。
- **見た目の値**：#0c0c0c（字・ボタン・フッターの地）、本文 #404040（10.37:1）、#666e7a（白地 5.15:1・黒地 3.80:1）、#7c7c7c（4.17:1）、#e4e5e6・#f7f7f7・#eef1f5、色相のある色は告知の帯の #2b22fa だけ。書体 ABC Normal（300・400・500/600、3本 185KB、swap、代わり Arial size-adjust 100.46%）と記事用の JHA Times Now。段は rw-display-xl〜micro（clamp。xl 48〜80px・字間 −.02em／l 36〜56px −.015em／xs 20〜24px）と rw-h1〜h5（固定 px）。速さ .15s×10・.2s、cubic-bezier(.4,0,.2,1)×10。fadeIn .3s（translateY(10px)）・ruleDraw .24s。
- **動き**：reduce は2つの utility だけ（トップで使う要素 0）。CSS の動きは reduce で止まるが、トップの Mux の動画は reduce でも autoplay。
- **重さ（PC/SP、measure.js・タグ除く・最後まで送る）**：top 55.67/40.04MB、about 56.11/58.28、product 114.07/34.57（動画の断片 49,068KB）、careers 40.01/26.69、news 89.32/92.15（PNG 61,723KB）。送らずに8秒で top 19.31MB・news 37.60MB。画面に無い PNG 2枚（5,357KB・3,505KB）を全ページで preload。/careers の写真 7,008×4,672 を 536×359px（11,425KB）。inspect.js：トップ FAIL 0・WARN 21（コントラスト・文字の段 10・SP の本文 14px）。

### Clay（https://www.clay.com/ 、2026-11-17 解剖。選んだ理由：ニューヨーク〔ブルックリン生まれ〕の営業データの会社。最初の画面を粘土の模型の写真〔Hudson Christie〕で組み、色を果物の名前の 11系統 102段のトークンで持つ。4つの柱に別々の3色の組、列の数で幅の替わるメガメニューと動く尾、月ごとの棒の年表、3都市の時計の拠点のタブ。事例集・受賞歴は確かめられなかった）
見たページ：トップ・/about・/workflows（事業の代表）・/careers・/press（＋ /jobs・/blog・/contact・/demo）。
- **ナビ（PC）**：白の帯 1,368×57px・下の角 24px・貼りつく。Product▾・Solutions▾・Resources▾・Company▾・Pricing、右に ⌘K・Log in 12.8px・Get a demo（#f3f2ed、角 12px）・Start free trial（黒）。板は列の数で幅が替わる（Product 4列 1,219px、Company 3列 約990px）、右に記事の札1枚。上辺の尾 25×9px が開いた項目の真下へ動く。ホバーでも押しても開き `aria-expanded`、Esc で閉じて押した項目へ戻る。押して 168ms・切り替え 110ms・+0KB。SP は ≡ で5行 → 中へ入る板と「Go back」。会社は Company▾ に About・Careers・Open roles・Blog・Contact・Press。
- **トップの順番**：h1「Build systems to grow revenue」88px（SP 41.6px）・575・字間 -0.04em＋1文 24px＋ボタン2つ → 顧客のモザイク（ロゴ・数字・発言、「500,000」）→ 用途のタブ7つ → 入力欄 → 柱4つ → 営業担当 → 顧客の動画2本 → 学ぶ（催し・配信・地域の話・採用の札）→ 最後の行動。会社の紹介の文は無い。
- **柱の色の組**：Data #001433/#395afa/#f0f8ff、Agents #381005/#b53d0a/#fff3ed、Orchestration #102b03/#808000/#fcfee2、Activation #46022f/#cc089e/#fff0fa。どれも札 12px 600 字間 3px → h3 48px（2行目だけ差し色）→ 本文 16px → 顧客の結果3つ → 差し色のボタンと白のボタン → 1,000px の webm。白字は #808000 だけ 4.20:1。
- **信頼の材料**：Press に数字の札6枚（2列、数 52px＋1文：2017＋創業者2人とブルックリン・500+＋部署・500K +＋顧客7社・NYC, SF, LDN・GTM engineering・100+ Clay clubs）。About に月ごとの棒の年表（2017〜2027、1年12本、括弧 EXPLORING・BUILDING・OFFICIAL LAUNCH・$100M、Roobert mono 12px 字間 1.44px）、出資者6社と「$115M at a $7.1B valuation」。会社概要の表・代表の言葉は無い。
- **採用への導線**：About の h1 の下の最初のボタンが「Explore open roles」（ライム #cbd810）、途中にも2回。トップの「Come and join us」の札、Company▾ の Careers・Open roles。Careers は原則2つ・6人の前職→いま・約100人の名前・拠点のタブ（時計 72px、押すと都市・その地の時刻・住所・1文）・福利9つ・選考4段（Intro call → 課題か追加の面談 → オンサイト 3〜5回 → リファレンス、増減ありと断る）。募集は /jobs の Ashby の埋め込み：62件・絞り込み4つ・部署の見出し、米国 50件に給与の幅、London 12件は無し。
- **問い合わせ**：/contact はフォームなし（ログインして ? か support@ への1文）。営業は /demo の3段（名・姓・メール・電話の4欄が全部必須）。取材は Press の press@ とロゴの zip、ロゴを右クリックで「Copy logo to clipboard (png)」。
- **ニュース**：Press は外の記事 19件（大きな札6＋行13）で日付 0、Podcast・Article の札だけ。自社の記事は Blog（1ページ100件・分類5つ、押すと分類のページへ移り PC 2,688ms・+2,086KB）。
- **データ**：JSON-LD はトップ SoftwareApplication・AggregateRating・Organization など、About AboutPage・Organization、Careers WebPage・PostalAddress、Workflows と Press は WebSite だけ。BreadcrumbList 0・hreflang 0。トップの画像 262枚のうち alt なし 69。
- **見た目の値**：Roobert VF の1書体（年表だけ Roobert mono）。h1 147px（Press、300）・120px（About・Careers、600）・88px、h2 72px 500 字間 -0.03em 行間 1.0、柱の h3 48px、本文 16/20px。地 #fff・オーツ #f4f3f0・#fefdfb、字 #000・#1b1a18、面の角 24px・ボタン 12px。イージングは `cubic-bezier(.165,.84,.44,1)` 29回・`(.075,.82,.165,1)` 21回・`(.19,1,.22,1)` 11回、開閉は `grid-template-rows ease-out 250ms`。GSAP（3.14.1 と 3.15.0 を2回）。
- **重さ（PC/SP）**：top 23.60/21.77MB（webm 5本 9.1MB）、about 34.12/32.10（動画1本 12,225KB）、workflows 14.26/14.48、careers 74.25/69.80（avif 40,683KB・jpeg 13,282KB・697本）、press 11.16/10.71。どのページもチャットの JS 1,616KB・sequel.js 953KB・reCAPTCHA 846KB・共有 CSS 813KB。本家のトップの inspect は FAIL 5 / WARN 19。

### Resend（https://resend.com/ 、2026-11-21 解剖。選んだ理由：サンフランシスコの開発者向けのメール配信のスタートアップ。黒の地に Domaine・ABC Favorit・Inter・Commit Mono の4書体、Spline の立方体、端末の時刻で替わる見出しと動画、書いた人と日付つきの手紙の形の価値観、CLI と API でも出せる応募を作り込んでいる。事例集・受賞歴は確かめられなかった）
見たページ：トップ・/about・/features/email-api（事業の代表）・/careers・/blog（＋募集の詳細 /careers/<uuid>）。Next.js＋Tailwind＋Base UI。
- **ナビ（PC）**：sticky 58px、地は透明のまま（送っても背景・ぼかし無し）。Features▾・Company▾・Enterprise▾・Help▾・Docs▾・AI▾・Pricing、右に Log in と Get started（#111・角 12px）。板は Base UI、地 黒60%・枠 1px rgba(176,199,217,.145)・角 24px、項目ごとに幅が替わる（Features 559px・Company 482px・AI 540px、高さ 216px）、開閉と大きさは `.35s cubic-bezier(.22,1,.36,1)`。Company▾ は文字の項目5（About・Blog・Careers・Customers・Humans）＋絵つきの札2（Handbook「How we work」・Philosophy「What we value」256×83px）。Enter で開き Tab で中へ、Esc で閉じてボタンへ戻る。SP は ≡ で全画面、Get started・Log in の下に7行（57px・→）。
- **トップの順番**：h1「Email for developers」Domaine 96px（SP 64px）＋1文2行＋Get started・Documentation、右に立方体（PC は Spline の canvas＋splinecode 504KB、SP は mp4 338KB）、上に催しの札 → 顧客ロゴ12 → 「Integrate ___」＋13言語のタブとコード → 開発の体験（Test mode・Webhooks）→ 書く画面 → 連絡先と分析 → React → 届く率の h3 9つ → 顧客の声 → 最後の行動。数字の帯は無い。「Integrate ___」は JS の前は「in minutes」、読み込むと端末の時刻で替わる：土日 this weekend（#E131F3→#59B2EA→#A7FC8F）・平日 12時前 this morning（#FFFF92→#EE8912）・18時前 this afternoon（#FFC446→orange）・それ以降 tonight（#9281F7→#9A54DC）、動画も4本から選ぶ（`3d-integrate-night.mp4` ほか）。
- **信頼の材料**：About に成り立ち3段落（2022年に OSS、2023年に配信の基盤と YC 冬の組）・創業者3人の写真1枚・価値観4通（題＋書いた人＋`<zeno@resend.com>` の形のアドレス＋「Dec 6th, 2022」の日付の窓）・集合写真・出資 3社のロゴと個人 32人。会社概要の表は無く、所在地はフッターだけ。人数「team of 50 spans 15 countries」と「Over 4M developers」は募集の詳細の本文にだけ。
- **採用への導線**：Company▾ の3番目・About の「We're hiring」・フッター。トップの本文に無い。/careers は About・Philosophy の札2 → 福利9つ（札に Global 6・US-only 3）→ タブ All・Engineering・Sales（件数なし、`?department=` を URL に残す）→ 部署の見出し＋13行（6職×Europe・Americas＋1）→ 顧客の声6つ（社員の声は0）。募集の詳細は自サイト：本文に「Comp: $160,000 - $220,000 USD OTE」、フォーム12欄（Ashby の欄名 `_systemfield_*`、画面の * 9）、「Apply via UI／CLI／API」で `resend careers apply <id>` と `curl -X POST https://api.resend.com/careers/<id>` も出せる。JobPosting 0。
- **ニュース**：/blog に検索（Ctrl K で dialog）・Subscribe・分類7つ（a で `?category=company`、`aria-current`、件数なし）、Featured 11件（日付順でない：10-27・10-23・11-12…）、「Humans behind Resend」に入った人の記事6件（Welcoming 名前, our new 職種）。About の From our blog は 2024年12月が最新。
- **データ**：Organization・WebSite・SoftwareApplication・BreadcrumbList などを全ページ、事業は FAQPage を足す。/careers と募集の詳細は JSON-LD 0。About に h1 と同じ文の h2（0×0）。lang="en" のみ。alt なし 0。
- **見た目の値**：地 #000、本文 rgb(161,164,165) 8.37:1、見出し #f0f0f0 に白→白50% の斜めのグラデーションを切り抜く、日付 #6c6c6c 4.00:1・行番号 rgb(70,74,77) 2.35:1。h2 Favorit 56px 字間 -0.05em（About・Careers 36px）、h3 20px、本文 Inter 14/22.4、リード 18/27（SP 16/24）、コード Commit Mono 12〜16px。速さ .15s／.2s cubic-bezier(.4,0,.2,1)、板 .35s、SP のメニュー .5s cubic-bezier(.36,.66,.6,1)。reduce の CSS は2つで、動画は読まないが rotate・disco が残る（走るアニメ 8 → 4）。
- **重さ（PC/SP）**：top 13.67/9.91MB（Spline 1,968KB の JS は PC だけ）、about 7.12/7.30、email-api 8.62/8.21、careers 9.50/9.34、blog 9.33/11.77（札の先読み RSC 1,803／2,237KB）。どのページも JS 4.4〜7.6MB（89〜96本）・CSS 1,032〜1,045KB（Tailwind のビルド2つ 511＋508KB、規則 3,782 が重なる）・fp.resend.com の指紋 246KB・PostHog の録画 210KB。外のホストは3つだけ。本家のトップの inspect は FAIL 3 / WARN 18。

## 真似る型（LayerX・Mistral AI・Linear・Mercury・Runway・Clay・Resend の7つで確かめた）
- 会社サイトは「志・事業の地図・ニュース・連絡先」に絞り、事業は1ページ（LayerX：アンカー、Mistral：/products/ のタイル5枚・2,344px、Linear：トップの柱4本＋柱ごとのページ、Runway：トップの3製品の3列＋製品ごとのページ）で並べ、プロダクトの本体と採用の応募は外へ渡す（LayerX：別ドメインと外部ATS、Mistral：Ashby、Linear：募集の詳細は自サイト・Apply だけ Ashby、Runway：Ashby と Google フォーム）。
- ヘッダーの右端に、目立つ形の行動を置く（LayerX：Join Us の丸いボタン、Mistral：黒の Login と Get in touch、Linear：#e5e5e6 の Sign up）。ヘッダーは隠さない（Mistral 48px、Linear 73px・blur(20px)・下線 白8%、Runway 68px・白95%＋blur(12px)、上の告知の帯 48px だけ送ると流れる）。下がり窓は、項目が8つ以下なら1列の小さな窓（LayerX 5項目、Mistral 1行 57px）、段階と1語の項目が混ざるなら1枚の板（Linear：860px に2行4つ＋1語4つ＋「New と最新の更新」の行、opacity と scale(.98→1) .16s、大きさの替わり .22s）。
- トップは1文で始め、数字の帯を置かない（LayerX：h1 60px、Mistral：96px の1文＋最新の1件、Linear：h1 64px＋1文＋「New Loops →」、Runway：動画の上に h1 56px＋1文 16px＋ボタン1つ）。1文は h1 にし、最初から見える状態で HTML に置く（Mistral は aria-hidden の p、Linear は JS を待って 6.4〜8.2 秒見えない）。
- トップの見本は架空の1件を全区画に通す（Linear：課題 DRV-8852 と同じ架空のアプリが、会話→課題→計画→エージェント→差分まで続く）。
- 事業は対の文か2色の文で書く（Mistral：「We make the models. You keep them.」×4、Linear：h2 の主の1文を #f7f8f8・続きを #8a8f98）。左に貼りつく目次（226×52px・top 44px）で今どこかを見せる（Mistral）。
- 更新の速さは日付つきの変更履歴で見せる（Linear：トップに4件、点と線、URL に日付 `/changelog/2026-10-22-…`）。題と日付は1か所から出す（Linear はトップと一覧で食い違った）。
- ニュースの絞り込みは URL に組み合わせを残す（LayerX：?category=…&year=…&sort=…、Mistral：?categories=a,b&search=x、Linear：/now/team のパス、Runway：/news/research のパス。ただしページ番号・格子／行は残らない）。件数が数百までなら全部持って手元で絞るか先読みする（Mistral 92件・57〜70ms・0KB、Linear 先読み済みで 62〜140ms・0KB。LayerX は読み直しで +1.3MB）。どれも分類の件数は出していないので、作るときは足す。
- 相談のフォームの前で用件を振り分ける（LayerX：リンク5つ、Mistral：4つ、Linear：Sales・Support・メールの3つ＋資料4つ、営業は4欄）。3つとも採用の振り分けが無かったので、作るときは採用を足す。
- 色・文字の段・速さを CSS 変数のトークンで持ち、会社・採用・ニュースを製品と同じ部品で組む（Mistral：光・闇・反転の3組、Linear：地4段・文字4段・見出し9段・速さ2つ）。文字の4段目は 4.5:1 まで上げる（Linear #62666d は 3.45:1）。
- 採用の福利は組に分けて数字で書き、選考は職の系統ごとに段の数を書く（Mistral：福利3組、選考 4段と3段。Linear：有給5週・育休4か月・4年ごとに1か月。Mercury：育休 12週以上・$600。Runway：15日・16週・$600×2・$250／月・3%・$500）。募集は部署の見出しと 72px の行で並べる（Linear）が、件数と絞り込みを足す。
- 人の多さは名前の量で見せる（Linear：写真8人＋名前173人＋出資者22人）。数字で書くなら会社概要の表の上に「いつの値か」を添える。

- ▾ は押して開く全幅の板にし、列ごとに「大きな1項目＋1文＋小さな項目」、下の行に別の客の入口を置く（Mercury：列 415px×3・下に Personal Banking →、Linear：860px の板に段階4つ＋1語4つ＋「New」の行、Runway：板の上に題 24px＋1文、群の名前 12px、項目は名前 16px＋説明 13px、下に利用者の帯。開くとほかの項目 .5・後ろを黒20%＋blur(4px)）。Esc で閉じてボタンへ戻す（Runway はホバーだけで、Enter は行き先へ移ってしまう）。
- ヘッダーは隠さず、下の区画の地の色に .5s で合わせる（Mercury：透明 → #171721 → #f6f5f2 → #fbfcfd、`cubic-bezier(0,0,.6,1)`）。
- 最初の画面は1文＋メール欄つきのボタン1つ（Mercury：Open account。Launch demo は2つ目）。製品は左の開閉4項目と右の画面の組で見せる（Mercury：開いた項目に点、右の動画が替わる）。
- 規模の数字はニュースの題にし、記事へつなぐ（Mercury：「$1B in annualized revenue and 4+ years profitable」「$5.2B valuation」）。題の数字と記事の日付をそろえる。
- 決まりの断り（銀行でない・計量の検定でない など）は最初の画面の下に1行、条件は上付きの番号で最後の脚注へ（Mercury：sticky の帯・脚注18個）。字は 14px 以上（Mercury は 12px／SP 10px で inspect の FAIL）。
- reduce では、スクロールで送る動画を最後の絵で止め、sticky の箱を外す（Mercury：`motion-safe:sticky`、6.38秒で停止）。

- 1つのモデルから製品が分かれるときは、トップで3製品を同じ順の部品（題 24px → 写真 461×259 → 1文 24px → 説明 14px → ボタン3つ）で並べ、上に「同じモデルの上に」の h2 56px を1文（Runway）。研究は濃い帯に1段落と3行で、事業の区画と分ける（Runway）。
- 問い合わせの前置きに返事までの日数を1文で書き、使う人数と使い道を select で聞く（Runway：「two business days」、人数 5段・使い道 6つ）。

- メガメニューの板の幅は列の数で決め、上辺の尾を開いた項目の真下に動かす（Clay：Product 4列 1,219px・Company 3列 約990px、尾 25×9px）。ホバーと押すの両方で開き、Esc で閉じて押した項目へ戻す（Clay。Runway の「ホバーだけ」の直し）。
- 事業の柱が4つまでなら、柱ごとに「濃い字・差し色・淡い地」の3色の組を当て、部品の順はそろえる（Clay：Data #395afa・Agents #b53d0a・Orchestration #808000・Activation #cc089e）。差し色のボタンの白字を組ごとに 4.5:1 まで測る（Clay の #808000 は 4.20:1）。
- 会社の数字は Press か About に「大きな数＋何の数かの1文」の札で（Clay：2017＋創業者と場所、500+＋部署）。時点を添え、ほかのページの数とそろえる（Clay：500K + と 17k が食い違う）。
- 沿革は月ごとの棒と時期の括弧で（Clay：1年12本・括弧4つ・等幅 12px）。今月で止める。
- 会社のページの最初の行動を採用にする（Clay：About の h1 の下が「Explore open roles」）。拠点はタブにして、住所・時刻帯を拠点ごとに（Clay は3つとも NY の住所）。

- 最初の画面の近くの一言を、見る人の端末の時刻で替え、色と絵を組で替える。JS の前は時刻の入らない文を HTML に置く（Resend：土日・平日 12時前・18時前・それ以降の4つ、グラデーション4組と動画4本、JS の前は「in minutes」）。
- 会社の▾の板は「文字の項目＋考え方のページへの絵つきの札」に分ける（Resend：Company▾ に5項目＋Handbook・Philosophy の札 256×83px）。板の幅は項目ごとに替え、大きさの替わりを .35s で動かす（Resend 559／482／540px）。
- 価値観は、書いた人・アドレス・日付つきの手紙として並べる（Resend の About：4通・3人＋1人・2022年12月〜2023年5月）。
- 製品が API や CLI なら、応募も同じ使い方で受ける（Resend：Apply via UI／CLI／API）。福利の札に適用範囲を付ける（Global 6・US-only 3）。新しく入った人をニュースの列にする（Blog「Humans behind Resend」）。

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
- メガメニューがホバーだけで、項目が行き先の a なので Enter で移ってしまい、キーボードでは板の20本に届かない。採用は Resources の板の3列目とフッターだけ（Runway）。
- 53件の募集を部門名（div）の下に並べるだけで、件数・絞り込みが無い。4件は Google フォーム（Runway）。
- 画面に無い PNG 2枚 8.9MB を全ページで preload、/careers の写真 7,008px・11,425KB を 536px に、ニュースの 422px の枠に 2MB 前後の PNG（Runway）。
- 利用者の数が3通り（60m+／60M+／65M+）、社名が JSON-LD と画面で2通り、/about の研究が 2023〜2025 のまま（Runway）。
- 選んでいない分類・タブを opacity .3〜.4 で 1.71〜2.68:1、ページ番号と並べ方が URL に残らず、0件の文が無い（Runway）。
- ナビの HTML に下書きの文が 40か所（「Link long form description will go in this slot here.」）、説明文の使い回し4項目、トップのボタン27個の名前が「text」、テストの人名が19回（Clay）。
- Careers の拠点の札が3つとも NY の住所、ロンドンの時刻帯が EST。Press の外の記事 19件に日付が無い。年表が 2027 年まで（Clay）。
- Careers 74.25MB（写真 731枚、avif 40.7MB）、チャットの JS 1.6MB を全ページで最初に読む。顧客の数字の下の語 9.6px、SP の Careers 本文 13.05px、札 2.59〜3.57:1。reduce は CSS 1行で、最初の画面の動画は止まらない（Clay）。
- 採用がトップの本文に無く、/careers のタブに件数が無い。1つの職を地域ごとに2行にして 13行のうち12行が6職の重なり。給与は詳細の本文にだけ、JobPosting 0（Resend）。
- Careers の「声」が6つとも顧客の会社で、社員の声が無い。規模の数（50人・15か国）が募集の詳細の本文にだけで、About に無い（Resend）。
- 同じ Tailwind の CSS を2つのビルドで全ページに読み（511KB＋508KB、規則 3,782 が重なる）、会社・採用のページでも端末の指紋 246KB と録画 210KB を読む（Resend）。
