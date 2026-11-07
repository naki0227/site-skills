# オウンドメディア（企業・ブランドの読みもの）

## この下位タイプで特に見ること
本文の美しさ、ブランドとの距離、製品への導線

## 見本の実測
### 北欧、暮らしの道具店（https://hokuohkurashi.com/note ・2026-10-26 計測）
PC 1440×900 / SP 390×844。見たページ：読みもののトップ（/note・日付の川60本）、カテゴリ「レシピ」（/note/tag/recipe）、取材記事（/note/1000001003・高さ 16,318px）、レシピ記事（/note/1000001022・写真15枚）、ストアのトップ（/）。本文は Storyblok、画面は Rails（Turbo＋Stimulus）。選んだ理由：運営のクラシコムがカラーミーショップ大賞2014の大賞（読みものとブランディングが評価されたと報道）、MarkeZine が「コンテンツマーケティングのお手本」と紹介。
- **本文**：箱 PC max-width 518px（1行 約32字）・SP 358px（左右16px）。16px / 28px（1.75）、段落の間 PC 32px・SP 16px、字下げ無し。本文 #444（9.74:1）。書体は端末の Yu Gothic Medium → ヒラギノ → Noto Sans JP → メイリオ。題と見出しだけ先頭に YakuHanJPs（かっこ18字・`unicode-range`）で、フォントの通信は 6KB。iOS では `@supports (font:-apple-system-subheadline)` で本文に `font:-apple-system-subheadline` を当て、端末の文字サイズに追従させる。
- **記事の頭**：連載名（15px）→ 題（PC 20px/32px・700・#000、SP 18px/28.8px）→ 書き手（15px「編集スタッフ 山本」）の3つだけ。PC はアイキャッチを `display:none` にして本文の写真から始め、SP だけ 100px の正方形を題の左に置く。日付は頭に無く、記事の終わり（編集部のおすすめの下）に 12px 右寄せ。
- **見出し**：h2 18px/29px・700。左 43px に 35px のアイコンを置き、アイコンは15種（家・食・葉・服・本など）から記事ごとに1つ選んでその記事の h2 にそろえる。レシピ記事は上下を hr で挟んだ中央寄せの2行の h2 も使う。
- **目次**：本文の見出しの目次は無い（16,318px・h2 5つ）。本文の最後に連載のもくじ（「第1話（10月21日）」＋題の2行を1組）。いま読んでいる話の印は無い。
- **部品**：写真は本文幅いっぱい・imgix の w=1130・avif・下 5px。キャプションは写真の直後に「▲」で始まる 12px/21.6px・#808080（3.95:1）。話者は「**岩佐さん**：」＋改行。区切りは「＊＊＊」。ルビ rt 8px。材料は `<p>` に「焼き海苔…4枚」を `<br>` で並べ、手順は「1.」と文字で書いた段落（ol を使わない）。表・引用・コードは出てこなかった。
- **記事の終わり**：連載のもくじ → 取材相手の profile（写真 160px・名前・紹介）→ 感想を送る（Google フォームに記事の URL と題を差し込む・461×58）→ 本日の編集部recommends！（4件：商品の特集3＋動画1、帯 1504×702）→ 日付 → 同じ分類の最新4本 → 新着4本（各「もっと見る」200×50）。シェアのボタンと書き手の紹介は無い。
- **一覧**：トップは日付の川。「10月26日(月)」24px 太字（単位の字だけ16px）→ カード（写真 180px 角・分類の札 12px #f7f7f7 角24px・題 16px/25.6px・日付 13px #888・抜粋 13px 3行）。SP は写真 87px・題 14px と日付だけ。サムネイルは srcset 180w／360w・`sizes="(min-width: 965px) 180px, 87px"`。次のページは「次へ」で `/note/page/2`（rel="next"）。種類のタブ（すべて／記事／ビデオ／ラジオ／特集）はいまの種類だけ #444 の丸い札、切り替えはページ移動（PC 4.4秒）。
- **ブランドとの距離**：記事もストアも同じヘッダー（買いもの／コンテンツ／カート／メニュー）。記事の終わりの4件が商品の特集。新商品の記事は「こんにちは、商品プランナーの〇〇です」で始め、着用レビュー記事と対で出す。スポンサー記事は分類の札と題の前に「SPONSORED」。
- **広告と同意**：他社の広告は 0。ヘッダー下にお知らせの帯（PC 46px）、SP でキャンペーンの札（下に固定 362×99・× 30px）、記事の SP で「アプリで見る」（138×38・角 20px）。同意バナーは出なかった。
- **色**：灰の役割名の変数（--color-text-muted #444 が 242回、#000・#f7f7f7・枠 #aaa）。オレンジ #f39800 はカートだけ。ダークモード無し。
- **動き**：transition 50個のうち `opacity .2s linear` 17個。メニューは scaleY .28s cubic-bezier(.22,.61,.36,1)＋中身 .25s を .28s 遅れて、閉じるのは transition:none。ヘッダーは PC 100px → 70px。reduced-motion はメニューだけ、`:hover` 166・`(hover:hover)` 0。
- **データと重さ**：JSON-LD 0件（Recipe も無い）、canonical 無し、OGP あり。viewport に `user-scalable=no, maximum-scale=1.0`。重さ（解析の外部ホストを除く）PC top 4.23MB / list 4.61MB / article 5.25MB / long 5.80MB / home 9.52MB（SP 4.42 / 4.69 / 5.33 / 6.57 / 9.31MB）。全部込みの記事 PC 6.30MB・99リクエスト・31ホスト。GTM と gtag 3本（2.28MB）を自社ドメインの /scripts/ から配る。CSS 1,326KB のうち 886KB が埋め込みソースマップ。本文の写真に width/height・lazy が無く PC の CLS 0.0642（article）・0.0766（long）、SP 0。

### Quanta Magazine（https://www.quantamagazine.org/ ・2026-10-29 計測）
PC 1440×900 / SP 390×844。見たページ：トップ（/）、数学の一覧（/mathematics/・71ページ）、ふつうの記事（マラリア原虫・671語・高さ 12,051px）、図の多い記事（投票とクラインの壺・1,015語・12,366px）。シモンズ財団が支える科学の読みもの、WordPress（テーマ quanta2024）。選んだ理由：記事ごとの描き下ろしの絵、PC 用と SP 用を描き分けた図、読み始めると入れ替わる読書帯。サイトのデザインの事例集・賞は確かめられなかった（about に書き手の 2022 Pulitzer Prize for Explanatory Reporting）。
- **本文**：列 PC 560px（1行 約65字、右に補足があると約50字）・SP 350px（左右20px）。Merriweather 16px/30px（1.875）、段落の間 30px、本文 #1a1a1a（17.40:1）。h2 は本文書体 22px/30.8px・700（SP 18px/25.2px）。列の左 160px に書き手、右 64px あけて 300px に補足（ポッドキャスト・人物写真・RELATED）を置き、本文の幅は変えない。
- **記事の頭**：札（Pangram 10px・600・字間 3px・大文字・下に記事の色の線）→ 題 Noe Display 40px/46px（SP 24.96px/28.7px）→ リード Merriweather italic 16.8px/29.4px・opacity .65 → 操作の列（コメント数・保存）→ 主役の絵 1300×731。書き手と日付は PC では本文の左の列（写真 100px の丸・日付 10px）、SP は題の下。画面に更新日は無い（JSON-LD は dateModified 2026-10-27、画面は October 23 だけ）。
- **目次**：無い。本文の h2 は2〜3個で id も無い。代わりに読書帯：読み始めると全体ナビ（80px）が上に抜け、60px の帯（ロゴの印・ポッドキャストの再生・題・コメント数・保存・SHARE）に替わる（transform .5s cubic-bezier(.09,.47,.18,.99)、隠すとき translateY(-105%)）。帯の下端に進み具合の線（PC 4px・SP 2px・記事の色・translateX・transform .2s）。値は scroll のたびに jQuery で style を書く。
- **記事ごとの色**：記事の要素の style に --theme-accent／--theme-background／--theme-text の3つを置き、線・点・進み具合・下線を全部それで塗る（3記事とも #ff8600／#FFFFFF／#1a1a1a）。CSS の色は #1a1a1a 74回・#fff 72回・#ff8600 61回・#efefef 26回でほぼ全部。橙は白地で 2.42:1 なので文字には使わず、暗い地（メニュー・フッター）でだけ文字にする（7.18:1）。
- **部品**：図は本文幅 560px と列外 920px の2段。図1枚ごとに Desktop と Mobile の SVG を描き分ける（投票の記事は Fig1〜6）が、両方を img で読み片方を隠す（SVG 合計 1,207KB）。キャプションは本文書体 13px/21.45px → 幅 12px・opacity .2 の罫 → クレジット Pangram 10px。本文中の動画は autoplay muted loop（記事 SP で 2本 15,987KB）。表・引用・コードは無い。
- **記事の終わり**：最後の段落の後ろに記事の色の点（.tombstone::after 10px・右 −18px）→ 編集注記（財団の資金と編集の独立）→ ニュースレター（#efefef・288px）→ Also in 分類（3本・画像 360×202）→ コメント（#efefef・閉じた状態で「Show comments」）→ 全幅の NEXT ARTICLE（高さ PC 400px・SP 323px・題は白の Noe Display）→ フッター。著者紹介とシェアは終わりに無い。
- **一覧**：頭は淡い地に「WHAT'S UP IN」10px と h1 45px/47.25px。カードは「画像 360×202｜文 360px」の横組みを縦に積む（題 Noe Display 22px/30.8px・ホバーで #767676 へ .2s、日付 9px・大文字・字間 1.8px）。右に 260px の列。ページ送りは /mathematics/page/2 と rel="next"、SP では番号の ul に hide が付き NEXT だけ。
- **ブランドとの距離**：財団の名前はフッターと記事の終わりの編集注記にだけ出る（「editorially independent」）。製品への導線は無く、自社の告知はポッドキャストとニュースレター。
- **広告と同意**：広告 0。CookieYes の下の帯（PC 1440×117・SP 390×290＝画面の34%）、文は「We do not sell data」、ボタンは「Do Not Share My Personal Information」と ×。隠れた設定の箱が SP で横幅 395px にはみ出す。
- **動き**：keyframes 0。color .2s ease-in-out 13回・opacity .2s 10回、大きな出入りは .5s。メニューは全画面 #1a1a1a・opacity .5s cubic-bezier(.4,0,.2,1)、Esc で閉じない。:hover 136 に (hover:hover) 2。prefers-reduced-motion 0（動画も止まらない）。
- **データと重さ**：JSON-LD は Yoast の @graph で、記事は WebPage（datePublished・dateModified・author Person）。Article は無い。og:image は記事ごとに 1200×630＋alt。ダーク無し、印刷用の組み（VIEW PDF/PRINT MODE・@media print 7）。重さ（解析を除く）PC top 27.74MB / list 8.48MB / article 14.14MB / long 7.77MB（SP 27.00 / 8.48 / 21.05 / 5.87MB）。全部込みの記事 PC 15.43MB・110リクエスト・19ホスト。重い理由は自動再生の mp4（トップ 8.7MB）、トップの YouTube 4本（16.5MB）、閉じたコメントの Disqus（2.42MB）。CLS は記事 0.0013 以下。

### YAMAP MAGAZINE（https://yamap.com/magazine ・2026-11-03 計測）
PC 1440×900 / SP 390×844。見たページ：トップ（/magazine）、分類「登る」（/magazine/categories/2）、スポンサー記事（/magazine/76697・福岡の六ヶ岳・写真29枚・高さ 20,883px）、編集部の長い記事（/magazine/41571・涸沢の紅葉・19,708px）。登山アプリ YAMAP を運営するヤマップのオウンドメディア。本文は WordPress、画面は Next.js（記事の HTML に本文まで入れて配る）。選んだ理由：写真の説明からアプリの地図・活動日記へつなぐ、記事の頭の目次、本文の途中から出す自社の保険の帯、フッターのダーク切り替え。親の yamap.com が SANKOU! に載る（MAGAZINE 単独の事例集・受賞は確かめられなかった）。
- **本文**：PC 728px（1行 約38字）・18px／36px（2.0）・字間 1px（.1rem）・段落の間 60px。SP 358px（左右 16px・約21字）・16px／32px・段落の間 32px。文字 #222（白地 15.91:1）。リードも本文と同じ組み。h1 28px／45px（SP 20px／35px）、h2 24px／36px・上下 40px（SP 20px／30px）、h3 18px／27px（**SP 15px で本文より小さい**）。書体は Helvetica Neue → Arial → ヒラギノ角ゴ → Hiragino Sans → メイリオ、@font-face 0。太さは 400 と 700 だけ。
- **記事の頭**：アイキャッチ 728×485（元 1500×1000・width/height あり）→ パンくず 14px 700 →「投稿日 2026.10.27（#545454）　更新日 2026.10.29（#222）」14px・右端に「Sponsored」→ 分類 16px 700 #545454 → 題 → リード → 目次。書き手は本文の左 100px の欄（丸 100px・肩書・名前 14px 700）。共有は PC の右 45px の欄に丸 45px が3つ（ついてこない）、SP は左下に固定。
- **目次**：リードの直後、#fafafa・内 40px（SP 20px）の箱に h2 だけ（long は h2 3・h3 8 のうち3項目）。項目は `<button>` 14px 700・palt・間に 1px #ddd。見出しに id が無く、押すと見出しを上 100px の位置へ 0ms で飛ばす。URL は変わらない。固定・いまの節は無い。フォーカスの印は outline none。
- **部品**：写真は本文幅・元 850px の1種類（srcset 0）・lazy。説明は `<p><img><span style="color:dimgray;font-size:small">`（5.49:1）で figure 0、alt は article 29枚中23が空。説明の終わりに「YAMAPの地図はこちら」「モデルコースはこちら」「〇〇さんの活動日記より」（article 2・long 20、うち活動日記 15）。特典の箱は本文に style を直書き（#f6f6f6・1px #e0e0e0・角 8px、説明 12px・10px）。表・引用・番号の手順・コードは無い。
- **記事の終わり**：クレジット（撮影・編集協力・協力）→ 書き手の箱 728×293（紹介 14px／28px・「この筆者の記事をもっと読む」）→ タグ（12px 700・#ececec・角 15px）→ 公式SNS 5つ → 関連記事3（372×445・写真 360×240）→ 編集部おすすめ4（横組み 384×130）→ アプリの帯 729×340 → ストア。**関連記事のカードに Sponsored の場所が無く、long の関連3本はどれもスポンサー記事**。スポンサー記事の終わりには関連もおすすめも無い。
- **一覧**：パンくず → h1 28px／42px → 説明 14px／28px → 下の分類13 → 横組みのカード（写真 344×229 の div 背景｜文 390px、分類 12px と右端に Sponsored、題 h5 18px／27px、日付 12px、書き手 30px の丸）17本 →「もっと見る」215×43・角 30px（17 → 27本、URL は変わらない、PC +617KB）。題は配る HTML で約40字に切って「...」。右の欄 310px に広告 310×220（自社の配信 r.yamap.com）。トップには h1 が無い。
- **ブランドとの距離**：スポンサー記事が多い（トップの新着 17本中9、一覧「登る」17本中7）。本文の途中（PC y 7,349px の高さ 0 の印）を越えると、自社の登山保険の帯を下から出す（PC 1440×186・SP 390×147＝画面の17%、transform .5s cubic-bezier(.2,0,0,1)、× で戻す）。SP ではそのとき共有の丸が opacity 0 に（.3s・.5s 遅れ）。終わりにアプリとストア。
- **広告と同意**：本文に他社の広告 0。右の欄に4〜5枠。同意の帯は出ない（GTM・Clarity・LINE のタグは最初から）。
- **色**：変数 --color-white 25・--color-text #222 18・--color-black-lighter #545454 12・--color-meta #adadad 9・--color-whisper #fafafa 8。赤 #e60012 はロゴの印だけ、ストアへのリンクに #cf0010（5.74:1）。検索の placeholder #adadad は 2.24:1。
- **ダーク**：フッターのつまみで .dark（地 #1a1a1a・面 #222・本文 #d1d1d1 11.40:1・罫 #404040）、再読み込みでも残る。prefers-color-scheme 0。ロゴは img の SVG のまま黒（#000／#1a1a1a 1.20:1）、ナビの端に白の面が残る。
- **動き**：ほぼ opacity .1s ease-in。帯だけ .5s。SP のメニューは display の切り替えで動かず、Esc で閉じない。ヘッダーは absolute で固定しない。:hover 44 に (hover:hover) 19、reduced-motion 1か所。
- **データと重さ**：JSON-LD 0（4ページとも）、記事に meta description・og:description 無し、time 無し。重さ（解析を除く）PC top 4.65MB／list 5.38MB／article 3.10MB／long 3.69MB（SP 4.59／5.40／3.82／4.34MB）。全部込みの article PC（下まで読む）5.84MB・64件・15ホスト（写真 3,836KB・GTM 1,193KB・Next.js 515KB）。CSS 33KB が1本、フォント 0。読み込みの CLS は list PC 0.0234 のほかは 0。一気に最後まで飛ばすと long PC 0.0840・SP 0.1654。

### ほぼ日（https://www.1101.com/ ・2026-11-07 計測）
PC 1440×900 / SP 390×844。見たページ：トップ（/home.html）、読みもの一覧（/article.html）、記事（/n/s/amuhito/2026-11-06.html・編む人。後編・写真13枚）、長い記事（/n/s/5080/tsukamotoshinya/2026-11-06.html・対談 3,068字）、写真の多い記事（/n/s/josetu/shozokan/2026-11-06.html・鼎談）。糸井重里さんの会社ほぼ日が 1998年から毎日更新する読みもの。記事は WordPress のテーマ ns_2018、トップと一覧は 2025年の作り（Alpine.js・Splide）。選んだ理由：連載ごとに書体・地・話し手の色を替える作り込みを、1つのテーマと属性で回している。事例集・受賞は確かめられなかった。
- **連載の意匠**：`#wrap` の data 属性（`data-c_bgc` 地・`data-c_bgi`／`data-c_bgs` 固定の背景写真と敷き方・`data-c_link` リンク・`data-c_bdc` 罫・`data-t_color` 話し手の色・`data-share_color`）を common.js が読んで当てる。書体と幅は連載ごとの CSS（patternA.css 1,288B＋index.css 1,425B、custom.css 2,846〜3,519B）。3本で本文の書体が全部ちがう：Toppan Bunkyu Mincho R JIS2004（編む人。）・Yu Gothic Pr6N M（50/80）・TBGothic M（常設展へ行こう!）。50/80 は固定の写真の上に 740px の面 rgba(35,24,21,.9)。
- **本文**：3本とも 16px／32px（2.0）、dd の間 32px。字間 明朝 .05em（0.8px）・ゴシック .02em。dd の幅 PC 490〜700px、SP 330〜358px・14.4px／25.92px・間 28.8px。PC は編集の人が `<br>` で1行 20〜26字に区切り、SP ではその br を全部 display:none（article 75・long 138・photo 120 → SP で 0）。行頭の括弧は AutoIndent が span で包んで margin-left:-.5em（10〜14か所）。文字 #000／#fff 21:1、50/80 は #fff／#231815 90% 17.71:1。
- **記事の頭**：連載の写真（h1、alt 空。PC 1000×664〜1440×810）→ 連載の紹介（毎回同じ文・幅 359〜438px）→ 前へ・目次ページへ・次へ の丸 67px（SP 42px、上下 1px #000、ul の左右 50px、字 12px・.15em）→ 回の題の GIF／PNG（PC 480〜560px、alt に題）→ 話し手。日付・聞き手・読む時間は頭に無い。
- **対談**：dl＞dt（話し手）＋dd。dt は PC 175〜250px の列・700・16px、SP は dd の上の行。「──」の dt に JS が t_h を付ける（ほぼ日の聞き手）。話し手の色：田中 #9e3204（#f2f2f2 で 6.44:1）・山田 #0a8a93（3.70:1）・上嶋 #022d77（11.41:1）。
- **目次・部品**：見出し 0・目次 0（高さ PC 17,059〜21,572px）。部品は写真と説明だけ：写真 1280px を srcset 無しで、PC 1000px（列いっぱい）か 600〜620px、SP は画面の端まで。説明 13px／20.8px #666（SP 12px、50/80 の濃い面で 3.08:1）。img に width・height 無しで CLS PC 0.25〜0.34・SP 0.46〜0.99。
- **記事の終わり**：結びの1行（「（伊藤さん、ありがとうございました。）」「（つづきます）」16px 中央）→ 撮影者 14px 左寄せ → 日付「2026-11-06-FRI」→ 丸い3つ（最新回は次へを visibility:hidden・href="#"）→ 自社の本・イベントの告知（1,292〜2,260px）→ SHARE と「感想をおくる」（mailto・13px）。ほかの連載・関連は無い。連載の目次ページは題の画像・話し手・日付 13px（.1em・#666）を 1px #000 の罫で区切るだけ（記事から PC 4,291ms・+594KB）。
- **トップ**：ヒーロー 720px（SP 672px）に今日の12本。スライドの data-bg-color（#1c0c00・#b4bbbb・#c1ab53 など12色）を background-color .3s で、data-text-color（白8・黒4）で文字を替える。自動送り 8秒、Splide に reducedMotion:{autoplay:"pause",speed:0}。縮小写真 40px×5 を縦に。次に糸井さんの毎日のコラム（1,472px）、読むもの・観るもの、お買いもの…の 12区画。区画見出し 20px・600、本文 Noto Sans JP 16px／24px #3e3e3e（SP 15px）。ヘッダー 60px に「11/7」30px・600 と「土」15px、横に日替わりのトマトの絵（date_261107.png 2363px・482KB を 36px）。
- **一覧**：/article.html の最初の 3,978px（SP 4,277px）が今日の「3分コラム」の本文そのもの（地 #fbd2d5）。その下に50本：大 2（478×251）＋4列 48（228×120・間 20px）、aspect-ratio 1200/630 で CLS 0.014。題 15px／22.5px・600（手で改行）、説明 12.7px／19.05px #939393（3.07:1）。ページ送り無し・canonical 無し、最後に著者名・タイトル別・年代別。
- **ブランドとの距離**：他社の広告 0。告知はすべて自社（ほぼ日手帳の帯 980×90、記事の終わりの本・イベント）。トップに自社の商品枠（rmn.1101.com 215KB）。
- **広告と同意**：Cookiebot uc.js 118KB を全ページで読むが、同意の画面は出なかった。トップ・一覧で検索候補の popfind.min.js（展開 835KB）。
- **データと重さ**：記事は Article＋BreadcrumbList（author は Organization、datePublished＝dateModified、long の description は空）、トップ・一覧は 0。ダーク 0、記事のテーマの reduced-motion 0。書体は webfont-2.0.js（69KB・2,213書体の名前）がページの字だけを API に送り、base64 の CSS を JSON で受ける：article 473字 119KB・long 585字 702KB・photo 547字 71KB。重さ（measure.js）PC top 8.02MB／list 5.93MB／article 4.52MB／long 2.39MB／photo 3.19MB（SP 6.63／5.65／4.52／2.19／2.53MB）。全部込みの転送 article 7,006KB・107件、top 7,263KB・339件。重い理由は srcset の無い写真、告知の GIF 599KB、書体の API、トップの検索候補の JS。

## 真似る型
見本4つ（北欧、暮らしの道具店・Quanta Magazine・YAMAP MAGAZINE・ほぼ日）から。
1. **本文は細い列に、行間 1.75〜2.0**：518px・16/28（北欧）、560px・16/30（Quanta）、728px・18/36・字間 1px（YAMAP）、490〜700px・16/32・字間 .05em（ほぼ日、PC は手で 20〜26字に改行）。段落の間は行の高さ以上（北欧 PC 32px、Quanta 30px、YAMAP 60px、ほぼ日 32px）。補足は列の外に出し、本文の幅を変えない（Quanta：右 64px あけて 300px、YAMAP：書き手は左 100px・共有は右 45px）。
2. **色は墨と灰に、ブランドの色を1つだけ**：北欧は灰の変数 #444 が 242回で橙 #f39800 はカートだけ、Quanta は #1a1a1a・#fff と橙 #ff8600 を線と点にだけ、YAMAP は #222・#545454・#fafafa で、赤はロゴの印とストアへのリンクだけ。ブランドの色を白地の小さな文字に使わない（Quanta の橙は 2.42:1）。
3. **運営の関わりを札と本文の外で言う**：北欧は「SPONSORED」の札、Quanta は記事の終わりの編集注記、YAMAP は記事の頭と一覧のカードの右端に「Sponsored」とタグ「PR」。札はすべてのカードに（YAMAP は関連のカードで抜けた）。
4. **一覧の次のページに URL を持たせる**：/note/page/2（北欧）、/mathematics/page/2（Quanta）、どちらも rel="next"。YAMAP は「もっと見る」で URL が変わらない（真似しない）。
5. **記事の終わりに「同じ分類の続き」を置く**：同じ分類の最新4本（北欧）、Also in 分類 3本＋全幅の NEXT ARTICLE（Quanta）、関連3本＋おすすめ4本（YAMAP）。全幅の次の1本まで置くのは Quanta だけ。
6. **記事とサービスをつなぐ場所を決める**：北欧は記事の終わりの商品の特集4件、YAMAP は写真の説明の終わりにアプリの地図・活動日記へのリンクと、本文の途中から出す自社の帯。Quanta は製品への導線を置かない。
7. **連載ごとの意匠は、骨組み1つと属性で**：ほぼ日は地・リンク・罫・話し手の色を #wrap の data 属性に、書体と幅を連載ごとの 0.5〜3.5KB の CSS に置き、dl の組みと終わりの型は全連載で同じ。北欧も連載名を記事の頭に置き、題材アイコン15種で記事ごとの印を替える（骨組みは同じ）。
8. **聞き書き・対談の組み**：話し手を dl の dt にして名前で色を替え、聞き手は「──」（ほぼ日）。北欧は「**岩佐さん**：」＋改行で、話し手を組みで区別しない。SP では名前を上の行に回す（ほぼ日）。
9. **記事の終わりを毎回同じ順に**：結びの1行（「（つづきます）」）→ 写真の担当 → 日付 → 前へ・目次・次へ（ほぼ日）。北欧は連載のもくじ → 取材相手 → 感想を送る。どちらも、ほかの連載の1本は Quanta の NEXT ARTICLE を足す。

## 反面教師
- 日付を記事の最後に置く。頭では「いつの話か」が分からない（北欧、暮らしの道具店：編集部のおすすめの下に 12px）。
- 本文の写真に width/height も lazy も無い（北欧、暮らしの道具店：PC CLS 0.0642・long の SP で写真 1.68MB）。
- 解析タグを自社ドメイン経由で 2.28MB 配る、CSS にソースマップを 886KB 埋め込む（北欧、暮らしの道具店）。
- 読みもののページで決済のトークン JS を読む（北欧、暮らしの道具店：mul-pay 79KB）。
- 材料を p＋br、手順を文字の「1.」で書き、Recipe の構造化データも無い（北欧、暮らしの道具店のレシピ記事）。
- 補足の文字を薄い灰にする（北欧、暮らしの道具店：キャプション #808080 3.95:1・日付 #888 3.54:1・#999 2.85:1）。
- ピンチでの拡大を止める（北欧、暮らしの道具店：user-scalable=no）。
- 画面に更新日を出さない（Quanta Magazine：dateModified 2026-10-27・画面は公開日だけ）。
- 本文の動画を自動再生で読み、reduced-motion でも止めない（Quanta Magazine：記事 SP 15,987KB・prefers-reduced-motion 0か所）。
- 閉じたコメント欄の部品を最初から読む（Quanta Magazine：Disqus 2.42MB）。
- PC 用と SP 用の図を両方読み、片方を隠す（Quanta Magazine：SVG 合計 1,207KB）。
- 全幅の「次の記事」に小さい画像を引き伸ばす（Quanta Magazine：520×292 を 1440×600）。
- 全画面メニューが Esc で閉じない（Quanta Magazine：PC・SP とも）。
- 目次を button で作り、見出しに id を付けない。h2 だけで、押すと 0ms で飛び、URL もいまの節も無い（YAMAP MAGAZINE）。
- 写真の説明を p の中の span に style で書き、figure を使わない。alt をほぼ空にする（YAMAP MAGAZINE：article 29枚中23）。
- SP の h3 を本文より小さくする（YAMAP MAGAZINE：15px と 16px）。
- 関連記事のカードだけ Sponsored の札が抜ける（YAMAP MAGAZINE：long の関連3本がすべてスポンサー記事）。
- 「もっと見る」で URL を変えない（YAMAP MAGAZINE）。カードの題を HTML で約40字に切る。
- SP で自社の帯が画面の17%を覆い続ける（YAMAP MAGAZINE：390×147）。
- ダークでロゴが黒のまま残り（1.20:1）、端末の設定を見ない（YAMAP MAGAZINE）。
- JSON-LD 0・記事の meta description 無し・トップの h1 0（YAMAP MAGAZINE）。
- 題を GIF にし、h1 に alt の空の写真を入れる（ほぼ日：h1 の文字が空、回の題は alt にだけ）。
- 記事の頭に日付も聞き手も置かず、終わりに英字の曜日つき「2026-11-06-FRI」だけ（ほぼ日）。
- 書体を毎回 API で作り、body の字を丸ごと送る（ほぼ日：long 585字で 702KB）。
- 話し手の色・カードの説明・ヒーローの白字を地で計算しない（ほぼ日：#0a8a93 3.70:1・#939393 3.07:1・白／#c1ab53 2.28:1）。
- SP の本文を 14.4px にする（ほぼ日：PC 16px を SP で 0.9倍）。
