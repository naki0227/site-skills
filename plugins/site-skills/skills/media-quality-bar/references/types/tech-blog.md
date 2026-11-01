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

## 真似る型
見本3つ（メルカリエンジニアリング・LINEヤフー Tech Blog・DeNA Engineering）から。作るときの出発点。
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
