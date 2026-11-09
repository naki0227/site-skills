# 技術ブログ（開発者のブログ・技術記事）

## この下位タイプで特に見ること
コードの組み方、目次、長い記事の読みやすさ

## 見本の実測

### メルカリエンジニアリング（https://engineering.mercari.com/ ・2026-10-24 計測）
PC 1440×900 / SP 390×844、ja-JP。見たページ：トップ、カテゴリ一覧（/blog/category/backend/）、ふつうの記事、長い記事（コード8・表2、高さ15,659px）。
- **本文**：箱 PC 780px（1行 約43字）・SP 348px（左右21px、約21字）。PC 18px / 行間36px（2.0）、SP 16.64px / 29.12px（1.75）。段落の間 PC 35px・SP 31.2px。Webフォントは読まず、Avenir/Arial → 游ゴシック体のシステム書体。
- **見出し**：h1 PC 40px/64px、SP 29.12px/32px。h2 PC 36px、上に margin 120px＋padding 60px と赤い短い線。h3 PC 28px、上 padding 80px。節の切れ目を大きな余白で見せる。
- **記事の頭**：灰色の帯に 日付 → 題 → カテゴリ1つ → 「Author: 名前, 日付」。更新日・リード枠・パンくずは無い。アイキャッチは本文より広い 1044px（PC）。
- **目次**：無い（長い記事でも）。固定表示は右下の「上へ戻る」だけ。
- **コード**：左に灰色の太線（PC 27px・SP 12px）、等幅 16.2px、行間1.2。`white-space: pre-wrap` で SP でも折り返す。言語ラベル・コピーボタン無し。色づけは highlight.js の自動判定（194言語を登録した 1.2MB の JS を記事ごとに読む。疑似コードを inform7 と誤判定）。
- **表**：SP では表そのものを `overflow-x: scroll; white-space: nowrap` にして 470px を 348px の中で横に送る。続きの手がかりは右端で切れて見えることだけ。
- **記事の終わり**：シェア（X・Facebook・LinkedIn・はてブ件数つき）→ タグ → 色を変えた帯に関連記事3件。関連は「同じカテゴリの新しい順から自分を除いた3本」。著者紹介・次の記事・購読の誘いは無い（RSS はヘッダーのアイコン）。
- **一覧**：10件＋「もっと見る」で +10件（API取得）。URL は変わらず、2ページ目以降に URL が無い。カードは 日付 → サムネ → 題 → カテゴリ → 著者。検索とカテゴリ別件数を横（SP は下）に置く。
- **広告と同意**：広告・同意バナーとも無し。PC の CLS 0.064（width/height の無いアイキャッチが本文を押し下げる）、SP は 0。
- **データと重さ**：JSON-LD 無し、記事でも `og:type` website、hreflang en が日本語記事と同じ URL。ダークモード無し。重さ（解析タグを除く・展開後）top 0.82MB、list 2.34MB、記事 3.90MB、長い記事 3.35MB（PC/SP ほぼ同じ＝画像の出し分け無し）。本文画像・サムネは 2,560px を 196〜780px で表示。

### LINEヤフー Tech Blog（https://techblog.lycorp.co.jp/ja ・2026-10-28 計測）
PC 1440×900 / SP 390×844。見たページ：トップ（/ja）、分類「Frontend」の一覧（/ja/tag/Frontend・12本×5ページ）、ふつうの記事（/ja/20261027a・図6枚・高さ 9,347px）、長い記事（/ja/20261019a・コード18・表1・h2 6・h3 14・高さ 14,750px／SP 21,153px）。Gatsby 5.16.1。選んだ理由：題も本文も自社書体 LINE Seed JP（2023年度グッドデザイン賞）、色を灰17段の変数に絞り、区切りを太い罫1本に任せる。サイトの受賞は確かめられなかった。
- **本文**：箱 PC 790px（1行 約49字）・SP 350px（左右20px・約21字）。16px／28px（1.75）・字間 -0.4px、段落の間 20px、字下げ無し。本文 #616161（6.19:1）、題・見出し #1f1f1f（16.48:1）。太字は本文と同じ色。リンク #4270ed（4.40:1）・下線。書体は Google Fonts の LINE Seed JP 400・700（CSS 224KB・@font-face 278個、記事で woff2 1.04〜1.09MB）。
- **見出し**：h1 PC 42px／64px（右 86px あけて改行を早める）・SP **20px**／26px。h2 32px／51.2px・上 40px・下 14px（SP も 32px のままで h1 より大きい）。h3 26px／41.6px・上 20px。見出しの id は日本語を落として ""・"-1"・"-2"…。
- **共通の帯**：会社のヘッダー（sticky・PC 100px／SP 70px・白 95%・下 1px #efefef）→ ブログ名（トップ・一覧 54px／記事 32px・400）＋説明 18px（SP 12px）＋下に 8px #1f1f1f の罫（SP 6px）。区切りの太い線はこれ1本だけ。
- **記事の頭**：翻訳の案内（English・Korean、#949494 3.03:1）→ h1 → 日付「2026-10-19」18px #616161 とシェア5つ（40×40・#777）を1行 → 下に 1px #e8e8e8・内 53px・外 80px。著者・分類・アイキャッチ・リード・更新日は無い。日付は配られる HTML では `<time dateTime="">` が空で、JS が入れる。
- **目次**：無い（long 14,750px でも）。CSS に .mce-toc（地 #f9f9f9・内 50px・項目 18px／22px の下線）があるが、日本語の記事 667本から40本を見て使用 0。
- **コード**：Prism。言語は class="language-swift" で書き手が指定（自動判定しない）。地 #272822・14px／21px（SP 12px／18px）・内 14px・角 4.2px・上下 20px・折り返さず横送り。ツールバーの div は空（言語名・コピー無し）。キーワード #f92672 は 3.93:1。インラインは 13.6px・地 #eeeff1・0 6px・角 4px。
- **表**：th 地 #fcfcfc・#111・700、td #444・内 10px、罫 1px #e1e1e1。SP は 490px の表を 350px の .table_area（overflow auto）で横送り、手がかり無し。
- **図**：width="1000" height="auto"・lazy 無し、1600px の PNG（179〜240KB）を PC 790px・SP 350px で出す。キャプション無し（alt だけ）、拡大も無い。
- **記事の終わり**：著者（写真 80px の丸・名前 #777・一言）→ シェア5つ → Related Post（h3 20px）3本 380×276（写真 380×200・題 20px／30px・500・2行）。次の記事・この人の記事・タグは無い。
- **一覧・トップ**：トップは「最新記事」3本を日付 16px＋題 18px の行（1px #e8e8e8 で区切る・写真無し）→ 分類ごとに h2 32px・カード3枚・「〇〇の記事をさらに見る」18px 太字 → 技術カテゴリの札（380×130・#f5f5f5・角 4px）。カードは写真 760×400 を 380×200 で、padding-bottom 52.6316% の箱に absolute（img に寸法無しでも CLS PC 0.0012・SP 0）。題 20px／26px・500・2行、日付「2026.10.13」を下に。ホバーは写真に hsla(0,0%,100%,.4) を .2s。ページ送りは /ja/tag/Frontend/page/2 の本物の a（32px 角・いまは #111）、ただし前後の矢印はいつも aria-disabled・href="#"。トップに h1 無し。
- **広告と同意**：他社の広告 0、同意バナー無し。解析は gtag（540KB）・Yahoo（97KB）・Sentry。サイト内検索は search.yahoo.co.jp へ移る。
- **データ**：記事の JSON-LD は Article（datePublished "2026-10-19T02:00:00Z"・author Person・publisher）、dateModified 無し。トップと一覧にも Article（datePublished ""）。og:type article。RSS あり。ダーク 0。
- **動き**：a・button のホバーとフォーカスで opacity .6。ナビの下線 scaleX .4s cubic-bezier(.645,.045,.355,1)。SP のメニューは3本線を keyframes で×に。:hover 26か所に (hover:hover) 0、reduced-motion 0、:focus-visible 0。
- **重さ**：解析を除く PC top 2.78MB／list 3.02MB／article 4.37MB／long 3.47MB（SP 2.86／3.03／4.35／3.45MB）。全部込み article PC 4.96MB・105リクエスト・9ホスト。HTML ごとに同じ 237KB の CSS を埋め込む。PC のカードのホバーで次のページのデータ 318KB を先読み。

### DeNA Engineering（https://engineering.dena.com/blog/ ・2026-11-01 計測）
PC 1440×900 / SP 390×844。見たページ：トップ（/blog/・20本×39ページ）、分類「技術記事」（/blog/categories/technology/・20本×16ページ）、ふつうの記事（/blog/2026/10/gce-e2-memory-rightsizing/・h2 7・コード3・高さ 10,843px）、長い記事（/blog/2026/09/bigquery-editions-migration/・h2 8・h3 10・コード13・表6・高さ 25,036px／SP 33,478px）。Hugo＋Tailwind。選んだ理由：日本語の見出し id で作った追いかける目次、黒い帯に食い込む白い紙、青 #0e00de 1色。受賞・事例集は確かめられなかった。
- **組み**：外の地 #e7edff → 黒 #222 の帯（PC 上 110・下 120px）→ 帯に -50px 食い込む白い紙（1330px・内 PC 100px/55px、SP 40px/20px）→ 本文の列＋右 280px。ヘッダーは白・sticky・PC 80px／SP 60px。
- **本文**：箱 PC 870px（1行 約51字）・SP 310px（約20字）。17px／34px（line-height 2）、SP 15px／30px。段落の間 30px／20px。本文 #222（15.91:1）。html 62.5%（1rem＝10px）。Google Fonts の Montserrat → Noto Sans JP。
- **見出し**：h1 43px／64.5px・700・#0e00de（SP 33px、記事の題は SP で7行）。h2 33px・700・青・span に左 4px の線＋10px・上 100px（SP 28px・上 60px）。h3 も **33px**（400）で、h2 と太さと線だけが違う。
- **記事の頭**：日付「2026.10.02」15px（time 要素無し・更新日無し）＋分類の札（12px・2px 青の線・丸）→ 題 → 「by 名前」17px（著者の記事一覧へ）→ タグ 15px／30px。アイキャッチ・リード無し。
- **目次**：ある。見出しの id は Hugo が日本語のまま（#はじめに）。PC は右 280px・sticky top 90px・上下 2px #222 の罫・「Contents」24px・項目 15px #666（5.74:1）・nowrap で省略・h3 は左 20px・いまの節は 700 #0e00de。scroll.js（約3KB）が本文の全要素を IntersectionObserver（rootMargin "-10% 0px -90%"）で見る。押すと見出しを上から 100px（ヘッダー＋20px）へ smooth・pushState。監視の線（90px）が飛び先（100px）より上なので、押した節の1つ前が太字のまま残る。smooth は reduced-motion を見ない。SP は題と本文の間に置き固定しない（long で 655px）。
- **コード**：Hugo の Chroma が inline style（long の HTML 137KB、ふつうの記事 48KB）。言語は書き手が指定（language-sql）だが画面に言語名・コピー無し。pre に tabindex="0"。行間は本文の 2.0 を継いで 17px／34px（26行で 924px）。地 #f0f0f0 でコメント #60a0b0 2.58:1・数 #40a070 2.84:1・キーワード #007020 5.52:1。SP は long の13本すべてが横送りで、手がかり無し。
- **表・部品**：表は上 1px #666・見出しの下 2px・セル 5px 10px・縦罫無し。SP は 310px に押し込む（6つのうち1つだけ 332px）。外部リンクはカード（2px #dbdbdb・地 #f8f8f8・写真 40:21・題 17px 青 2行）。脚注は doc-endnotes で、h2「脚注」として目次にも出る。図に寸法・キャプション無し。
- **記事の終わり**：#f3f6ff の面（内 35px）に「最後まで読んでいただき…」とシェア4つ（60px）→ Related Articles 3本（タグで選ぶ。article では 2022・2020・2019年）→ 右に分類・連載 → 黒い採用の帯（白 5px の罫＋See more →、矢印は .15s で 10px）。次の記事・著者紹介無し。
- **一覧**：写真 320×168（aspect-ratio 40/21・object-fit cover・1200×628 の PNG）＋日付 15px・札・題 28px／35px 400・タグ。行の間 30px（SP 縦積み 60px・題 24px）。img に寸法無しでも CLS top 0.0022・list 0.0005・SP 0。右 330px に Category（8分類と件数）・Series（4）を checkbox で開閉（＋の印が開いても変わらない）。ページ送りは上 5px の青い罫・60px の丸（SP 40px）・いまは塗り、前後の位置を invisible で保持、href は /blog/page/2/、rel="next" 無し。
- **広告と同意**：広告 0・同意バナー無し。GTM 313KB・GA 18〜20KB（転送）。
- **データ**：JSON-LD 0件（4ページ）・html に lang 無し・記事の h1 4つ（ロゴ・BLOG の画像・題・recruit の画像）・og:type article・description は本文の頭（「はじめに こんにちは。…」）。RSS あり。ダーク無し。
- **動き**：keyframes 0。transition は See more の矢印（.15s cubic-bezier(.4,0,.2,1)）だけ。ホバーは時間なしの反転と opacity .5。:hover 20か所のうち本文のリンクと目次の2つは (pointer:fine) の中で、(pointer:coarse) には :active。:focus-visible 0・reduced-motion 0。
- **重さ**：解析を除く・展開後 top 3.40MB／list 2.36MB／article 2.37MB／long 2.45MB（PC=SP）。記事の中で MathJax 3.0.1 780KB（数式 0 でも全記事・$ を区切りに）と Noto Sans JP 884KB（long 1,046KB）、Google Fonts の CSS 244KB。サイトの JS は scroll.js だけ・CSS 43KB。全部込みの転送 article 2,146KB・83件・8ホスト。トップの cover PNG は最大 877KB。

### Smashing Magazine（https://www.smashingmagazine.com/ ・2026-11-06 計測）
PC 1440×900 / SP 390×844、lang="en"。見たページ：トップ、分類「CSS」の一覧（/category/css/・500本を10本ずつ）、記事（/2026/05/building-self-correcting-color-systems-contrast-color/・15 min read・コード9・表1・h2 7・h3 9・高さ 17,647px）、長い記事（/2026/11/modern-css-might-make-your-front-end-more-complex/・コード8・表1・引用6・プルクオート2・CodePen 7枚・h2 10・h3 6・PC 28,255px／SP 34,620px）。選んだ理由：赤 #d33a2c の帯と猫の絵、Mija と Elena の2書体、写真の枠・上へ戻る・引用の印に繰り返す −11° の傾き。事例集・受賞歴は確かめられなかった。
- **本文**：基準を `body{font-size:calc(.35842vw + .95296em)}`（1440px で 20.41px・390px で 18px）にし、本文はその 1.1倍。PC 700px の列（英文 約54字）・Elena 22.45px／34.80px（1.55）・#333（12.63:1）・段落の下 31.43px。SP 345px・19.8px／30.69px。`font-feature-settings:"onum" 1` で本文の数字も旧体。リンク #006fc6（5.14:1）・下線 1px。インラインのコードは Fira Code・地 #fff2ea。
- **見出し**：h1 Mija 700・49.04px／58.85px（SP 32.24px）、幅 1176px で本文より広い。h2 Elena 700・27.6／41.4・上 41.4・capitalize（SP 24.98）。h3 Elena 700・21.6／32.4・uppercase・字間 1px（SP 18.98）。ol は ol のまま、CSS の counter で「01」を赤 0.7em。
- **記事の頭**：書き手（Mija 18.37px・赤）/ 日付（small-caps 風・字間 1px・#585858）/ コメント数 → h1 → 灰の箱（#f6f6f6・角 11px・max-content）に「15 min read」・分類3つ・共有 → Quick summary（斜体 23.47px・#666・頭に赤 16px・字間 2px の「QUICK SUMMARY ↬」・下に 3px #e5e5e5）。右の列 336px（本文との間 140px）に書き手の写真 192px：赤 8px の枠を scale(.84) translateX(15%) rotate(−11deg)、中の写真を scale(1.2) rotate(11deg) で戻す。アイキャッチと画面の更新日は無い。
- **目次**：無い（long 28,255px でも）。見出しの id は読める英語のスラッグで、題の後ろに `<a class="anchor">#</a>`（#767676・4.54:1）。`h2:target` に .4s の `fadeOut-headings`（#ffde95 → #fff1d2、左に 10px 張り出す影）と `scroll-margin-top:2rem`。いまの節・進み具合の線は無い。
- **コード**：Fira Code 20.41／30.61（SP 18／27）。地 linear-gradient(#f5f2f0 → #fff)・1px #eee・角 11px・影3重。`resize:both` で読む人が広げられる。折り返さず横送り。break-out で 798px（本文 700px）。Prism のツールバーの Copy は `opacity:0` で `.code-toolbar:hover` のときだけ出る（SP・キーボードでは見えない）。言語名は出さない。Prism 30KB はコードのある記事だけで読む。色づけは #f5f2f0 に対して selector 3.20・keyword 3.94・comment 3.13・operator 3.25:1。
- **表と引用**：表は th Mija 700・下 4px #ddd、偶数行 #f7f7f7。767px 以下で thead を消し、tr を 1px #eee・角 11px の箱に積み、td::before に data-label（4列×5行が SP で 345×1,968px・横送り無し）。引用は斜体 21.43／35.36・左 11px #e6e4e1・角 11px。プルクオートは Mija 700・32／48・字間 −.75px・左 80px に赤い引用符の札で、文全体が Twitter で共有するリンク。
- **記事の終わり**：署名（赤いロゴ 35×46＋編集者の頭文字「(gg, yk)」#c0c0c0・1.82:1）→「Explore more on」と緑の札3つ（#137d54／#d6f3e7・4.36:1）→ 灰 8px の線 →「Our friends and supporters」の協賛 → 自社の宣伝3つ → コメントの欄（右 5/12、左 7/12 は空）。関連記事・次の記事・同じ書き手の記事は無い。
- **一覧**：「CATEGORY」→ h1 → 関連の分類8つの緑の札 →「500 ARTICLES」。カードは写真 71px（赤い枠・−11°）＋「名前 wrote」→ 題 Mija 32.4／38.88 → 日付＋要約 20.4／33.5 → Read more…。間 81.63px（SP 45px）。写真10枚とも loading=eager・fetchpriority=high。ページ送りのリンクは `/categories/css/page/2/` → 301 → `/category/css/page/2/`、2ページ目の canonical は1ページ目（それ自体 301）、rel="next" 無し。
- **右の列と広告**：書き手 → ニュースレター → 自社の宣伝3枚（336×797・412・849）。列ごと position:sticky・top −71px。SP は書き手の箱が本文の3画面ほど後に出て、宣伝は本文の途中 345×57 と終わり 381×93。配信タグの広告は無い。同意の窓は PC 右下 402×176、SP 下に全幅 390×168（20%）、「It’s okay.」は緑に白 2.75:1。gtag.js 166KB は同意の前に読む。
- **データと重さ**：JSON-LD 0件（4ページとも）。article:published_time は `2026-11-03 10:00:00 +0000 UTC`（ISO でない）、modified_time は頭に空白で公開日と同じ。ダークモードは記事だけ（article-dark-mode-v3.css 11KB を media で読み、50の変数・地 #162c35・本文 #e5e5e5 11.53:1・h1 は虹のグラデーション）。展開後・解析除く：top 2.20MB、list 1.99MB、記事 PC 2.11MB／SP 1.80MB、long 1.89／1.80MB。JS 1,209KB（app.js 492KB・formik などの vendors 108KB・会員と決済の部品）。HTML 248KB（br 51KB）のうち `window.PRODUCTS` 128,756字を、同じ商品データ 129KB を API からもう一度。app.js は `<script delay>` で最初の操作か5秒後まで読まない。Web フォントはサブセット 15〜18KB×5 を FontFace で全部読み終えてから html に class を付けて切り替え、sessionStorage で2回目は最初から（saveData なら読まない）。それでも差し替えで article PC の CLS 0.1171。reduced-motion・(hover:hover)・:focus-visible はどれも 0件。メニューは aria-expanded と矢印キーに応じるが Esc で閉じない。

### SmartHR Tech Blog（https://tech.smarthr.jp/ ・2026-11-09 計測）
PC 1440×900 / SP 390×844。見たページ：トップ、分類の一覧（/archive/category/フロントエンド・30本）、ふつうの記事（/entry/2026/05/12/153901・17,428px）、図と表の記事（/entry/2025/07/22/175455・11,600px）。はてなブログの公式テーマ Block Memo の後ろに、自前の CSS 4,817 バイトを足しただけの技術ブログ。選んだ理由：小さな CSS でデザインシステムの色を持ち込み、地の色と枠の紙で会社の見え方にしている。事例集・受賞歴は確かめられなかった。
- **地と紙**：body の地 rgb(0,196,204)（--smarthr-blue）、記事も一覧のカードも同じ紙：白・5px solid #4e4c49・角 15px・内 0 80px 80px・下 48px、日付は紙の上から 80px。#container 1,120px。ブログ名の画像は上 156px・下 48px。
- **本文**：930px（18px で1行 約51字）。18px（calc(18 / 16 * 1rem)）／行間 1.8・字間 .01em・#23221f（15.91:1）、段落の後 2em（36px）。p + ul は上 -1.5em（段落とリストの間 9px）。リスト 18px／30.6px。リンク #0f7f85（4.78:1）・text-underline-position: under。hanging-punctuation: last allow-end。書体は端末の游ゴシック体・メイリオ・ヒラギノ（Web フォント 0）。
- **見出し**：題 32px／38.4px・700・palt・字間 .02em・#4e4c49。h2 28.8px／36px・palt・.02em・上 64px 下 16px・下罫 1px #aaa69f。h3 23.148px・上 48px。見出しが続くとき（h2 + h3 など）は上を 1rem。id は はてなが見出しの文字から作る日本語（「実装1-Navigation-APIによるシンプルな実装」、重なりは「コードの解説-1」「-2」）。
- **記事の頭**：公開日（14px 700・2px #ff9900 の下線）→ 回る矢印と更新日（#00aa8c）→ 題 → 分類（13.02px #8c8c8c・3.36:1）。書き手は頭に無く、本文1行目で名乗る。記事の下は共用アカウント「smarthr_dev 180日前」。
- **目次**：無い（article h2 8・h3 7、long h2 6・h3 4）。
- **コード**：地 --stone-04 #4e4c49・白字（8.56:1）・16.74px／28.458px・内 10px・角 2px。はてなの色づけの class（Vim の構文名）7つに、デザインシステムの -02／-03 の段：synIdentifier sky-02 5.89・synComment grass-02 5.66・synSpecial sakura-02 5.07・synConstant momiji-02 4.33・synType grass-03 4.08・synStatement orange 4.00・synPreProc galaxy-02 3.12（:1、計算値）。Ruby だけ synSpecial を momiji-02 に。本文中のコード #f5f5f5・1px #dcdcdc・角 3px。
- **図と表**：図は Mermaid 10 の sequenceDiagram をブラウザで SVG に（pre.code.mermaid の地と枠を消す）。表はテーマのまま：セル 18px・内 5px 10px・1px #dcdcdc・見出しの行 #f5f5f5。
- **記事の終わり**：「We Are Hiring!」の h2（本文の見出しと同じ段）→ 書き手と相対時刻 → 共有（X・Mastodon 40px）→ 関連記事5本（100×100・日付 11px 700・要約1行、5本とも同じブログの古い記事）→ 紙の外に前後の記事（« 新しい／古い »、題を約20字で切る）→ サイドバー6箱 2,752px（カテゴリーだけで 2,174px）。article では埋め込みの記法が崩れ「[https://hello-world.smarthr.co.jp/:embed:cite]」と文字のまま。
- **一覧**：トップ 7枚・分類 30枚（14,027px）。カード 約432px：日付 → 題 32px → 分類 → 120×120 の写真（background-image・cover・alt 無し）と要約 14px。?page=2・`<link rel="next">`。h1 は一覧で 31。
- **SP**：iPhone の UA には touch/theme/normal/normal.css（88,410B）だけを配り、自前の CSS を読まない。地は白・本文 16px／28px #3d4245・h2 26px・コードは白地 1px #ddd で色づけ無し。上に 56px の はてなの帯。読み進むと題の帯（.article-bar-inner：opacity 0・translateY(20%) → .25s）。article の高さ 21,333px。
- **広告と同意**：広告 0・同意のバナー 0・本文の途中の差し込み 0。GTM 521KB・GA・moshimo を読む。CLS 0（4ページ×PC・SP）。
- **色**：:root に 44 色（smarthr-blue・white・black・orange と、stone・aqua・sakura・momiji・sunlight・grass・sky・marine・galaxy・earth の4段）。var() は 14種・19か所で、地・枠・文字の3つと差し色 orange、残りはコードの色づけ。
- **動き**：自前の CSS に transition・keyframes 0。はてなの部品だけ（.3s ease・background-color .2s・skeleton-flash）。prefers-reduced-motion・:focus-visible・(hover:hover)・prefers-color-scheme はどの CSS にも 0。
- **データと重さ**：記事の JSON-LD は Article（datePublished・dateModified とも ISO・+09:00、author と publisher 無し）。画面の更新日と dateModified がそろう。一覧は BreadcrumbList。転送（解析込み・PC）：top 1,391KB／38件・list 1,396KB・article 1,449KB／47件・long 1,435KB。measure.js の展開後は PC 2.56〜2.71MB で JS が 2.37MB：Font Awesome 5.0.8 all.js 665KB（HTML に fa- の class 0）・Mermaid 327KB（図の無いページでも）・hatenablog.js 316KB・vendors.js 303KB（帯の iframe でもう一度）。

## 真似る型
見本5つ（メルカリエンジニアリング・LINEヤフー Tech Blog・DeNA Engineering・Smashing Magazine・SmartHR Tech Blog）から。作るときの出発点。
- 本文の箱は 780〜790px、16〜18px、行間 1.75〜2.0、段落の間は 20〜35px。1行は約43〜49字（メルカリエンジニアリング 780px・18px／36px、LINEヤフー Tech Blog 790px・16px／28px・字間 -0.4px）。DeNA Engineering の 870px・17px は約51字で長い。
- 本文の色は題より1段薄い灰にし、比は 6:1 以上を保つ（LINEヤフー Tech Blog：本文 #616161 6.19:1・題 #1f1f1f 16.48:1）。
- 節の切れ目は罫でなく上の余白で見せる（メルカリエンジニアリング：h2 の上 120px＋60px、DeNA Engineering：h2 の上 100px＋左 4px の線、LINEヤフー Tech Blog：h2 の上 40px）。h3 は h2 より一段小さく（DeNA Engineering は h2 と同じ 33px で崩れる）。SP でも h1 を一番大きく。
- 長い記事には、読める言葉の見出し id で目次を作り、PC は右 280px 前後で sticky にして、いまの節を色と太さで示す（DeNA Engineering：top 90px・上下 2px の罫・項目 15px・IntersectionObserver）。監視の線は、目次を押したときの飛び先より下に置く（本家は 90px と 100px で前の節が残る）。
- コードの言語は書き手が書き、色づけは使う言語だけ読む（LINEヤフー Tech Blog：Prism、DeNA Engineering：Chroma で JS 0）。行間は本文と切り離して 1.5〜1.6（DeNA Engineering は本文の 2.0 を継いで 34px）。言語名とコピーを帯に出す（3サイトとも無い）。pre に tabindex="0"（DeNA Engineering）。
- 一覧のカードの写真は比率の箱に入れて CLS を 0 にし、表示の2倍で出す（LINEヤフー Tech Blog：padding-bottom 52.6316%、DeNA Engineering：aspect-ratio 40/21 で CLS 0.0005〜0.0022。どちらも元画像は大きすぎる）。
- ブログ全体の区切りは太い罫1本か、帯と紙の重なりで（LINEヤフー Tech Blog：ブログ名の下 8px、DeNA Engineering：黒い帯に白い紙を 50px 食い込ませ、ページ送りの上に 5px の青い罫）。
- アクセント色を濃くして、文字に使える1色にする（DeNA Engineering：#0e00de が白地で 10.13:1。題・リンク・札・いまの節・いまのページを同じ色で）。
- ページ送りは本物の URL を持ち、前後の位置を invisible で取っておく（DeNA Engineering：60px の丸・いまは塗り、/page/2/）。
- 記事の終わりに著者の顔（80px の丸・名前・一言）を置き、そのあと関連3本（LINEヤフー Tech Blog）。メルカリエンジニアリング・DeNA Engineering は著者紹介無し。

- 本文を1本の式で伸び縮みさせ、行間は PC と SP で同じ比にする（Smashing Magazine：基準 calc(.35842vw + .95296em) の 1.1倍で PC 22.45px・SP 19.8px、行間 1.55。英文の 700px は約54字）。日本語なら 680px 前後で約36〜40字。
- 本文より広く出すものを決める（Smashing Magazine：本文 700px、題 1176px、コード・図・表は break-out で 798px）。右の列がある組みでは、列との間に食い込ませる幅までにする。
- 見出しの id と「#」を全部の h2・h3 に付け、飛んだ先を :target で一瞬だけ光らせる（Smashing Magazine：.4s・#ffde95 → #fff1d2・scroll-margin-top 2rem）。目次と組み合わせる。
- コードの箱は読む人が広げられるようにし（Smashing Magazine：resize:both）、コピーはいつも見せる（Smashing Magazine はホバーでだけ出し、SP とキーボードで見えない）。
- SP の表は1行を1つの箱に積み、td::before に列の名前を出す（Smashing Magazine：767px 以下で thead を消し data-label）。
- リードに名前を付けて本文と分ける（Smashing Magazine：「QUICK SUMMARY ↬」赤 16px・字間 2px、斜体 23.47px、下に 3px の線）。読む時間は記事の頭の灰の箱に1行で（「15 min read」・分類・共有）。

- 会社の色の地に、太い枠の紙を1枚置き、一覧のカードも記事も同じ紙にする（SmartHR Tech Blog：地 rgb(0,196,204)、白・5px #4e4c49・角 15px・内 0 80px 80px）。貸しブログのテーマでも、自前の CSS 約 5KB でここまで変えられる。
- 段落の後を 2em にするなら、段落に続くリストは p + ul で -1.5em 引き上げる（SmartHR Tech Blog：36px → 9px）。見出しが続くときは上の余白を 1rem に詰める（h2 + h3）。
- 公開日の横に更新日を並べ、JSON-LD の dateModified と同じ日にする（SmartHR Tech Blog：「2026-05-12 ↻ 2026-10-02」と "2026-10-02T15:35:20+09:00"）。
- コードの色づけは、会社のデザインシステムの色の段から選ぶと、ブログの色と揃う（SmartHR Tech Blog：Vim の構文名7つに sky・grass・sakura・momiji・galaxy・orange の -02／-03）。ただし地で 4.5:1 を計算する（7色中4色が 3.12〜4.33:1）。
- 差し色は日付の 2px の下線だけに使う（SmartHR Tech Blog：orange は日付とコードの1色だけ）。文字に使わないので比の問題が出ない。

## 反面教師
- コードの言語を書かずに自動判定させ、全言語分の色づけ JS を全記事で読む（メルカリエンジニアリング：1.2MB、判定も外れる）。言語は書き手が指定し、使う言語だけ読む。
- 長い技術記事に目次が無い（メルカリエンジニアリング：本文の h2 8・h3 8、高さ15,659px でも無し）。
- アイキャッチに width/height も aspect-ratio も無い（メルカリエンジニアリング：PC CLS 0.064）。
- 「もっと見る」で増やした分に URL が無い（メルカリエンジニアリング：`/page/2/` は404、`?page=2` は1ページ目と同じ）。
- 長い記事に目次が無い（LINEヤフー Tech Blog：PC 14,750px・SP 21,153px。CSS に目次の箱があるのに40本で使用 0）。
- 見出しの id が日本語を落とした ""・"-1"・"-2"（LINEヤフー Tech Blog）。節へのリンクを共有できない。
- SP で h1（20px）が h2（32px）より小さい（LINEヤフー Tech Blog）。
- 日付を JS で入れ、配られる HTML の `<time>` が空。一覧「2026.10.27」と記事「2026-10-19」で形が違い、更新日も dateModified も無い（LINEヤフー Tech Blog）。
- 本文の図を 1600px の PNG・width="1000" height="auto"・lazy 無しで出し、SP では図が 0.22倍に縮んで字が読めない（LINEヤフー Tech Blog：1枚 179〜240KB×6）。
- 日本語の Web フォントで記事1本 1.26MB（LINEヤフー Tech Blog：CSS 224KB＋woff2 1.04MB）、全ページ同じ 237KB の CSS を HTML に埋め込む。
- ページ送りの前後の矢印がいつも aria-disabled・href="#"（LINEヤフー Tech Blog）。
- コードの帯（Prism のツールバー）を出しているのに中身が空（LINEヤフー Tech Blog）。
- 数式の無い記事でも MathJax 780KB を読み、$ を行内の数式の区切りにする（DeNA Engineering）。数式のある記事だけで読む。
- 目次を押すと、監視の線（上から 90px）が飛び先（100px）より上にあり、押した節の1つ前が太字のまま残る（DeNA Engineering）。
- コードが本文の行間 2.0 を継ぎ、コメント 2.58:1・数 2.84:1（DeNA Engineering の Chroma）。
- h3 が h2 と同じ 33px（DeNA Engineering）。
- 関連が古い3本（2019〜2022年）だけで、次の記事・著者紹介が無い（DeNA Engineering）。
- 開閉を checkbox と label で作り、＋の印が開いても変わらない。:focus-visible 0（DeNA Engineering）。
- JSON-LD 0件・html に lang 無し・記事に h1 が4つ・time 要素も更新日も無い（DeNA Engineering）。
- コピーのボタンを opacity:0 にしてホバーでだけ出す。SP とキーボードでは見えない（Smashing Magazine）。
- 目次も関連も次の記事も無く、記事の終わりは分類の札3つと宣伝・コメントだけ（Smashing Magazine：long 28,255px・h2 10）。
- 一覧の2ページ目の canonical が1ページ目（しかも 301 する URL）、ページ送りのリンクも 301（Smashing Magazine）。
- 記事を読むだけで会員・決済・カートの JS（formik・yup・Checkout）と、商品データを HTML の中と API の2回（Smashing Magazine：128,756字＋129KB）。
- Web フォントの差し替えで記事 PC の CLS 0.1171（Smashing Magazine）。size-adjust・ascent-override で端末の書体の寸法を合わせる。
- 押す緑のボタンの白文字 2.75:1、署名 #c0c0c0 1.82:1（Smashing Magazine）。
- 自前の CSS が SP に当たらず、貸しブログの標準の見た目に戻る（SmartHR Tech Blog：SP は normal.css だけ。地・紙・本文 18px・コードの色が消える）。
- 17,428px の記事に目次が無い。見出しの id はあるのに使わない（SmartHR Tech Blog：h2 8・h3 7）。
- 書き手が記事の頭に無く、記事の下も共用アカウント名、JSON-LD に author が無い（SmartHR Tech Blog：本文1行目で名乗るだけ）。
- 使っていないアイコンの JS（Font Awesome all.js 665KB・fa- の class 0）と、図の無いページの Mermaid 327KB を全ページで読む（SmartHR Tech Blog）。
- 採用の案内を本文と同じ h2 にし、埋め込みの記法が崩れて文字のまま出る（SmartHR Tech Blog：「We Are Hiring!」と「[…:embed:cite]」）。
- 一覧のカードの題が h1 で、一覧に h1 が 31（SmartHR Tech Blog）。
