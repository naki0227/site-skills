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

## 真似る型
見本2つ（北欧、暮らしの道具店・Quanta Magazine）に共通すること。
1. **本文は細い列に 16px、行間 1.75〜1.9**：518px・16/28（北欧）、560px・16/30（Quanta）。補足は列の外に出し、本文の幅を変えない（Quanta：右 64px あけて 300px）。
2. **色は墨と灰に、ブランドの色を1つだけ**：北欧は灰の変数 #444 が 242回で橙 #f39800 はカートだけ、Quanta は #1a1a1a・#fff と橙 #ff8600 を線と点にだけ。ブランドの色を白地の小さな文字に使わない（Quanta の橙は 2.42:1）。
3. **他社の広告を置かない。運営の関わりを本文の外で言う**：北欧は「SPONSORED」の札、Quanta は記事の終わりの編集注記（資金と編集の独立）。どちらも広告 0。
4. **一覧の次のページに URL を持たせる**：/note/page/2（北欧）、/mathematics/page/2（Quanta）、どちらも rel="next"。SP でも番号を消さない（Quanta は SP で NEXT だけ）。
5. **記事の終わりに「同じ分類の続き」を置く**：同じ分類の最新4本（北欧）、Also in 分類 3本＋全幅の NEXT ARTICLE（Quanta）。全幅の次の1本まで置くのは Quanta だけ。

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
