# 納品前チェックリスト

- [ ] `SKILL.md` の表で下位タイプを選び、その見本の値を出発点にした
- [ ] 本文：`viewpoints.md` の問いに答えを決めてから作った
- [ ] 記事の頭：`viewpoints.md` の問いに答えを決めてから作った
- [ ] 目次：`viewpoints.md` の問いに答えを決めてから作った
- [ ] 部品：`viewpoints.md` の問いに答えを決めてから作った
- [ ] 記事の終わり：`viewpoints.md` の問いに答えを決めてから作った
- [ ] 広告と同意：`viewpoints.md` の問いに答えを決めてから作った
- [ ] データと重さ：`viewpoints.md` の問いに答えを決めてから作った
- [ ] `rules.md` の各項目に反していない（反する場合は理由を書いた）
- [ ] スマホ幅（390px）で横スクロールが出ない。主な行動のボタンが親指で押せる
- [ ] `prefers-reduced-motion` で動きが止まる
- [ ] ダミー文（lorem ipsum）を使っていない。題材固有の言葉・数字が入っている

- [ ] アイキャッチと本文画像に width/height か aspect-ratio を付け、読み込みで本文がずれない（メルカリエンジニアリングは無しで PC CLS 0.064）
- [ ] 一覧のサムネイル・本文画像を表示幅に合った大きさで出し、2枚目以降は `loading="lazy"`（メルカリエンジニアリングは 2,560px を 196〜780px で表示）
- [ ] コードブロックに言語を明示し、色づけは使う言語だけ読む（メルカリエンジニアリングは自動判定で 1.2MB・誤判定あり）
- [ ] SP で横に送る表・コードには、続きがあることが分かる手がかりを付ける（メルカリエンジニアリングは右端で切れるだけ）
- [ ] 「もっと見る」で増える一覧でも、2ページ目以降に URL がある（メルカリエンジニアリングは無い）
- [ ] 記事の頭に、日付を時刻まで書く（ProPublica は「October 5, 2026, 5:00 am」。更新日を出さないなら、直した記事に「更新」を足す決めを置く）
- [ ] 本文の段落の間を行間より広く取る（ProPublica：PC 32px・SP 24px、字下げ無し。行間は PC 1.6）
- [ ] 画面の下に固定する帯（購読・同意）は閉じられ、高さを決める（ProPublica：PC 135px・SP 217px。閉じると transform .2s）
- [ ] 長い調査記事に目次を付け、いま読む節を示す（ProPublica は高さ 21,446px でも無し）
- [ ] 広告枠に min-height を先に置き、中身が届いても本文が動かない（ProPublica は min-height 0 で 170px → 約330px、記事 PC の CLS 0.0885）
- [ ] 読者のページに編集画面の JS（WordPress なら wp-includes/js/dist の editor 系）を読ませていない（ProPublica は 2.8MB を全ページで読む）
- [ ] フォームの防御（reCAPTCHA など）はフォームに触れたときに1回だけ読む（ProPublica は 834KB×3）
- [ ] 色を役割名のトークン（題・リード・本文・罫）で持ち、ダークは明暗の対で切り替える（ProPublica：light-dark() 73回、Auto／Light／Dark を選べる）
- [ ] ホバーの変化を `@media (hover:hover)` で囲む（ProPublica は :hover 159か所に対し 0か所）
- [ ] 白文字を赤・橙の地に載せるボタンは 4.5:1 を計算で確かめる（ProPublica の Donate：#fff／#ff4c3c で 3.31:1）

- [ ] 記事の頭に公開日を置く。日付を記事の最後にしか置かない作りにしない（北欧、暮らしの道具店は終わりに 12px だけ）
- [ ] キャプション・日付など補足の文字も 4.5:1 を計算で確かめる（北欧、暮らしの道具店：#808080 3.95:1・#888 3.54:1・#999 2.85:1）
- [ ] レシピ・手順の記事は、材料を dl か ul、手順を ol で組み、Recipe の JSON-LD を付ける（北欧、暮らしの道具店は p＋br と文字の「1.」・JSON-LD 無し）
- [ ] viewport に user-scalable=no・maximum-scale=1 を入れない（北欧、暮らしの道具店は入れている）
- [ ] 本番の CSS・JS にソースマップを埋め込まない（北欧、暮らしの道具店は CSS 1,326KB のうち 886KB）
- [ ] 解析タグを自社ドメインから配るときも、その重さを測る（北欧、暮らしの道具店：/scripts/ の GTM・gtag で 2.28MB。外部ホストを除く計測では見落とす）
- [ ] 連載のもくじでは、いま読んでいる話に印を付ける（北欧、暮らしの道具店は印無し・自分へのリンク）
- [ ] 一覧のサムネイルを srcset と sizes で表示の大きさに合わせる（北欧、暮らしの道具店：180w／360w・sizes 180px／87px が見本）

- [ ] Recipe・Article の datePublished と dateModified を ISO 8601（2026-09-09T19:13:00-04:00）で書く（King Arthur Baking は "September 9, 2026 at 7:13pm"・dateModified 無し）
- [ ] レシピの手順は JSON-LD でも HowToSection／HowToStep で持ち、画面の段（下ごしらえ・焼くなど）と合わせる（King Arthur Baking は文字列の配列）
- [ ] レシピは材料の列と手順の面を分け、手順の文字をリードより大きくする（King Arthur Baking：材料 325px・手順 20px／31.2px、リード 18px）
- [ ] 量は2つの単位を同じ行に書く（King Arthur Baking：「3 1/2 cups (397g)」）。日本向けはグラムを先に
- [ ] 手順の見出しのそばに、画面を消さない切り替え（Wake Lock。使えない端末では理由を出す）と、手順の写真の出し入れを置く（King Arthur Baking：Bake Mode・Hide images）
- [ ] 手順を読んでいる人に、画面の大半を覆うポップアップを出さない（King Arthur Baking：1180×793 で画面の72%）。出すなら写真は表示の大きさで（同：1400×1400 の JPEG 1,126KB を全ページで読む）
- [ ] 白文字を橙の地に載せる札も 4.5:1 を計算で確かめる（King Arthur Baking：#fff／#e25c2a で 3.62:1）
- [ ] 動画の埋め込みは再生を押すまでサムネイルだけにする（King Arthur Baking のトップ：YouTube 3,683KB を最初から読む）

- [ ] 見出しの id を読める言葉で付ける。日本語を落とすスラッグで ""・"-1" にしない（LINEヤフー Tech Blog は h2・h3 17個のうち読める id が5つ）
- [ ] SP でも h1 を一番大きくする（LINEヤフー Tech Blog の SP は h1 20px・h2 32px）
- [ ] 公開日を配る HTML に書く。JS で入れない。一覧と記事で日付の形をそろえる（LINEヤフー Tech Blog は `<time dateTime="">` が空、「2026.10.27」と「2026-10-19」）
- [ ] 本文の図は SP で字が読めるかを 390px で見る。読めないなら押して拡大できるようにし、キャプションを付ける（LINEヤフー Tech Blog：1600px の図を 350px に 0.22倍）
- [ ] ページ送りの前後の矢印が、ほかのページがあるときに押せる（LINEヤフー Tech Blog はいつも aria-disabled・href="#"）
- [ ] トップと一覧に Article の JSON-LD を置かない。一覧は CollectionPage か Blog（LINEヤフー Tech Blog は datePublished "" の Article）
- [ ] コードの帯を出すなら、言語名とコピーを入れる。空の帯を出さない（LINEヤフー Tech Blog）
- [ ] 全ページ同じ CSS を HTML に埋め込まず、外部ファイルにしてキャッシュを効かせる（LINEヤフー Tech Blog：237KB を毎ページ）
- [ ] フォーカスの印を :focus-visible で付ける。opacity を下げるだけにしない（LINEヤフー Tech Blog：:focus で opacity .6、:focus-visible 0）

- [ ] 読み始めたら全体ナビを、題と操作だけの細い帯（60px 前後）に入れ替え、下端に進み具合の線を付ける。線は transform だけで動かし、値は IntersectionObserver で進める（Quanta Magazine：PC 4px・SP 2px・translateX・.2s。値は scroll のたびに計算していた）
- [ ] 本文の補足（人物・音声・関連）は列の外に置き、本文の幅を変えない（Quanta Magazine：560px の右 64px に 300px）
- [ ] 最後の段落の後ろに「ここで終わり」の印を置く（Quanta Magazine：記事の色の 10px の点）
- [ ] 閉じたコメント欄・ニュースレターの部品は、開いたときに読む（Quanta Magazine：閉じたままで Disqus 2.42MB）
- [ ] PC 用と SP 用で描き分けた図は picture／media で片方だけ読む（Quanta Magazine：両方の SVG を読み 1,207KB）
- [ ] 全幅の帯に置く写真は、帯の幅に合った大きさで配る（Quanta Magazine：520×292 を 1440×600 に）
- [ ] 全画面メニューは Esc で閉じ、開いたボタンにフォーカスを戻す（Quanta Magazine は閉じない）
- [ ] 記事ごとに色を変えるなら、記事の要素に役割の変数（accent・background・text）を置き、線・点・帯をその変数で塗る（Quanta Magazine の --theme-accent ほか）

- [ ] レシピの頭に所要時間と、工程を2組・8行前後に縮めた「大まかな流れ」を開くボタンを置く（白ごはん.com：調理時間 19px 700＋193×41 の丸いボタン → モーダル）
- [ ] SP で工程を読んでいる途中に、材料と大まかな流れを呼び戻せる（白ごはん.com：右下 60px の丸2つ → max 60vh のシート）。シートは transform で動かし、Esc と暗幕で閉じ、開いたボタンにフォーカスを戻す（本家は bottom を .5s）
- [ ] 下に固定の帯があるなら、浮かせるボタンをその上に逃がす。固定の帯は合わせて画面の 1割まで（白ごはん.com：広告 122px＋タブ 51px で SP の 20%）
- [ ] 材料を組（具・水・合わせ調味料）に分けて印を付け、工程では組の名前と量をもう一度書いて地の色で目立たせる（白ごはん.com：● ○ A、.bg 地 #fffadf）
- [ ] 材料を2回 HTML に書かない。シートには本文の材料を写す（白ごはん.com は本文とシートで2回）
- [ ] PC と SP を別 URL・別 HTML にしない。viewport を固定幅（width=1024）にしない（白ごはん.com）
- [ ] 一覧を1ページに何百件も並べない。節ごとか2ページ目に URL を持たせ、写真は loading="lazy"（白ごはん.com：831件・PC 52,092px・写真 8,864KB）
- [ ] 題の書体を Web フォントで読むなら、使う字だけに分ける（白ごはん.com：NGT P明朝 676KB を全字で PC の全ページ）
- [ ] 自動で送るスライドには止めるボタンを付け、reduced-motion では止める（白ごはん.com：6秒・autoHover だけ）。SP で left を JS で動かさない（同：SP トップ CLS 0.083）

- [ ] 動きは `@media (prefers-reduced-motion: no-preference)` の中で足す。外には色の変化だけを書けば、reduced-motion の人には何もしなくても動かない（The Markup：transform の宣言 21か所すべて）
- [ ] 押せるものは影でなく線で見せてよい：1px の線を 3px・6px ずらした紙を2枚重ね、ホバーで上の紙ほど戻す（The Markup：-3／-2／-1px・.2s linear）
- [ ] 記事に h1 を1つだけ置く。同じ題の隠れた h1 を残さない（The Markup：0×0 の h1 がもう1つ）
- [ ] `<time datetime>` に時差まで書く（The Markup：画面は「8:00 a.m. UTC」なのに datetime は「2026-10-14T08:00:00」）
- [ ] 調べ方（データ・手順・限界）を別の記事にするなら、頭に本編への導線、本編から調べ方への導線を両方置く（The Markup：Show Your Work の「Have you read this article yet?」）
- [ ] 図表の iframe（Datawrapper など）は loading="lazy" か押してから読む（The Markup：13枚 × main.js 415KB で 19.82MB）
- [ ] 全ページ共通の JS に、一部のページでしか使わない部品（動画の再生など）を入れない（The Markup：video.js 入りの main.js 1,041KB を全ページで）
- [ ] 閉じたメニューの中のリンクを Tab に入れない（inert か visibility:hidden）。開閉は transform で（The Markup：max-height 0 のまま Tab が入る、max-height .4s）
- [ ] 一覧のページ送りで、無効のボタンに href を残さない。rel="next" を付ける（The Markup：無効の Newer に /page/0、rel="next" 無し）
- [ ] 本文の引用と関連カードは、PC で本文の列の外へ出し、本文の幅を変えない（The Markup：margin-left -180px・関連 308px を左右交互）
- [ ] 転載を許すなら、条件と貼るだけの HTML を記事から1押しで出す（The Markup：Republish の全画面の面と Copy HTML）

- [ ] 目次を押したときの飛び先より下に「いまの節」の監視の線を置き、押した項目は先に印を付ける（DeNA Engineering：線 90px・飛び先 100px で前の節が残る）
- [ ] h3 は h2 より一段小さくし、太さだけで分けない（DeNA Engineering：h2・h3 とも 33px）
- [ ] コードの行間は本文と別に 1.5〜1.6 にする（DeNA Engineering：本文の 2.0 を継いで 26行が 924px）。コメント・数の色も地で 4.5:1（同：2.58:1・2.84:1）
- [ ] 数式の JS（MathJax・KaTeX）は数式のある記事だけで読み、$ を区切りにしない（DeNA Engineering：数式 0 の記事でも 780KB）
- [ ] html に lang を書き、h1 は題の1つだけ（DeNA Engineering：lang 無し・ロゴと見出しの画像も h1 で記事に4つ）
- [ ] 開閉は button と aria-expanded で作り、開くと印を変える（DeNA Engineering：checkbox と label、＋が開いても＋のまま）
- [ ] ページ送りは前後の矢印の場所を invisible で取っておき、ページを進めても番号の位置を変えない（DeNA Engineering：60px の丸・上 5px の罫・/page/2/。rel="next" は足す）
- [ ] 記事の description を本文の頭の自動で作るなら、見出しの語を落とす（DeNA Engineering：「はじめに こんにちは。…」）

- [ ] 記事の日付・分類・共有を1か所（本文の左の `dl` など）にまとめるなら、更新日の行と `<time datetime>` も入れる（Grist：dl は Published・Topic・Share/Republish だけで、JSON-LD の dateModified が画面に無い）
- [ ] 進み具合の線は本文の長さで割り、本文の終わりで 1 に止める。scroll のたびに width を書かない（Grist：width を毎回、最後に 140%）
- [ ] 引用の多い本文は、段落の頭の “ ‘ 「 をぶら下げて左の縁をそろえる（Grist：-0.35em・-0.175em を JS で付ける）
- [ ] 図の題を h1 にしない。トップにも h1 を1つ置く（Grist：データ記事に h1 9つ、トップに 0）
- [ ] 表示の大きさ（26×33 など）の顔写真は、その2倍までに縮めて配る。CSS の背景でも同じ（Grist：1,329KB の jpg）
- [ ] 本文の途中で、ページを暗くするポップアップを出さない。誘いは記事の終わりのカードに置く（Grist：本文の終わり近くで丸いポップアップ）
- [ ] 記事ごとに地の色を替えるなら、文字の色は1色のまま、どの地でも 7:1 を超えるか計算する（Grist：#3c3830 が #f0f0f0 10.23:1・#e6ffa0 10.65:1・#ffd1df 8.57:1・#d3c8ff 7.48:1）

- [ ] 目次の項目は `<a href="#見出しの id">` にする。button で位置を計算して飛ばさない。h3 も入れ、押したら URL の # を変える（YAMAP MAGAZINE：button・id 0・h2 だけ・0ms で飛び URL は変わらない）
- [ ] 写真の説明は figure と figcaption で組み、style の直書き（`span style="color:dimgray;font-size:small"`）にしない。alt に写っている物を書く（YAMAP MAGAZINE：figure 0・article の alt 29枚中23が空）
- [ ] 写真の説明の終わりに、サービスの該当の画面（地図・コース・記録）へのリンクを置くと、記事がサービスの入口になる（YAMAP MAGAZINE：article 2・long 20）
- [ ] SP でも h3 を本文より大きくする（YAMAP MAGAZINE：SP の h3 15px・本文 16px）
- [ ] 本文の途中から出す自社の帯は、SP で画面の1割まで、×で閉じたら出しなおさない、reduced-motion では動かさない（YAMAP MAGAZINE：390×147＝17%・transform .5s cubic-bezier(.2,0,0,1) が止まらない）
- [ ] ダークに切り替えるとき、ロゴ（img の SVG）と横スクロールのナビの端の面も替わるかを見る。既定は端末の設定に従う（YAMAP MAGAZINE：ロゴが黒のまま #000／#1a1a1a 1.20:1、ナビの端に白の面、prefers-color-scheme 0）
- [ ] カードの題を配る HTML で字数で切って「...」を付けない。全部配り、CSS の行数で切る（YAMAP MAGAZINE：約40字で切る）
- [ ] 写真を 1種類の大きさ（850px）で配らない。srcset と sizes で SP の 358px に合わせる（YAMAP MAGAZINE：article の本文 29枚とも srcset 0）

- [ ] 工程に、その工程で使う材料と量を書き直す。合計は使う工程ごとに割る（Great British Chefs：手順の下に 550px の枠・11手順のうち8・「14」を「7」と「7」に）
- [ ] 単位の切り替えは button と aria-pressed で、材料・工程の枠・工程の文の中の量・温度を一緒に替える。換算は台所で量れる刻みに丸める（Great British Chefs：div・tabIndex -1、文の中の「1 litre」「220°C」は替わらず、「7 1/16 oz」）
- [ ] 手順が10を超えるレシピに、手順の番号の帯（いまの手順の印つき）を付いてこさせる（Great British Chefs：手順18・SP 15,224px で JUMP TO RECIPE だけ）
- [ ] 同意の画面は本文を読めるまま下の帯にし、ページ全体をぼかさない（Great British Chefs：494社・全体をぼかす窓・JS 488KB＋191KB）
- [ ] 画面の公開日に月日まで書く。年だけにしない（Great British Chefs：「First published in 2026」）
- [ ] 隠すための object・img を並べて CSS で切り替えない。picture と media で1枚だけ読む（Great British Chefs：本の帯の SVG を object 3つ×3回、241KB を3回）
- [ ] 決済の JS（Stripe など）は、決済の画面だけで読む（Great British Chefs：全ページで js.stripe.com/v3 1,145KB）
- [ ] ホバーに読み込み中の点滅（skeleton-pulse）を使わない（Great British Chefs：1.4s infinite・reduced-motion でも止まらない）

- [ ] 連載の前後の記事は「第3回 10月22日」のように回の番号と日付で書き、rel="prev／next" を読む順に合わせる（Tansa：「次の記事へ」が1つ古い記事）
- [ ] 連載のページは、扉のすぐ下に部の名前と記事数の帯を置き、押すと #id へ飛んで URL に残す（Tansa：PC 92px・SP 54px の行、reduced-motion なら smooth にしない）
- [ ] 並べ替え（初回から／最新から）は記事の日付で並べ、選んだボタンに aria-pressed を付ける（Tansa：日付で並べるが class="on" だけ）
- [ ] 部ごとの束に、記事数と最終更新の日付を見出しの行に書く（Tansa：「29記事　最終更新 2026年10月4日」13px）
- [ ] 誘い（メルマガ・寄付）を画像の中の文字で作らない。× に「閉じる」の名前を付け、Tab の最初に置かない（Tansa：PNG 1枚・× は alt 無しの画像）
- [ ] picture の source に media を書く。書かないと PC でも SP 用の画像を読む（Tansa：donation_request_sp.png 244KB を PC でも）
- [ ] トップ・一覧のカードの写真を PNG のまま配らない（Tansa：2160×1440 の PNG 5,555KB を 341×227 に）
- [ ] 同じライブラリを2本読まない。CDN から読むならバージョンを固定する（Tansa：jQuery 3.7.1 と 3.2.1、unpkg の swiper はバージョン無し）
- [ ] meta description を1つにし、写真のキャプションでなくリードから作る（Tansa：空の1つと、キャプションから始まる1つ）

- [ ] コードのコピーのボタンをいつも見せる。ホバーでだけ出すなら :focus-within と SP（hover:none）でも出す（Smashing Magazine：opacity:0 で .code-toolbar:hover のときだけ）
- [ ] すべての h2・h3 に読める id と「#」のリンクを付け、飛んだ先を :target で短く光らせ、scroll-margin-top を帯の高さ＋余白にする（Smashing Magazine：.4s・#ffde95 → #fff1d2・2rem）
- [ ] SP で表を横に送らずに読めるか。列が4つ以上なら1行を1つの箱に積み、列の名前を data-label で出す（Smashing Magazine：767px 以下・4列×5行）
- [ ] 一覧の2ページ目以降の canonical が自分の URL か。ページ送りのリンクが 301 しないか（Smashing Magazine：2ページ目の canonical が1ページ目の 301 する URL）
- [ ] Web フォントに切り替えるときの CLS を測る。size-adjust・ascent-override で端末の書体と寸法を合わせる（Smashing Magazine：2段の読み込みでも記事 PC 0.1171）
- [ ] 同じデータを HTML の中と API の両方で配らない（Smashing Magazine：商品の JSON 128,756字と 129KB）

- [ ] 題を画像にしない。h1 に写真を入れて alt を空にしない（ほぼ日：h1 は alt="" の写真で文字が空、回の題は h2 の GIF で alt にだけ）
- [ ] 連載ごとに意匠を替えるなら、骨組みは1つにし、色は data 属性か CSS の変数、書体と幅は連載ごとの小さな CSS にする（ほぼ日：#wrap の data-c_bgc・data-c_link・data-t_color、連載の CSS 0.5〜3.5KB）
- [ ] 対談は dl・dt・dd で組み、話し手の色はその地で 4.5:1 を計算する（ほぼ日：田中 #9e3204 6.44:1・山田 #0a8a93 3.70:1 on #f2f2f2）
- [ ] PC で手で改行するなら、SP ではその br を消して流す（ほぼ日：br 75 → SP で見えるのは 0）
- [ ] 行頭の括弧（「（『）は margin-left:-.5em で半字出し、字下げの線をそろえる（ほぼ日：AutoIndent、記事1本で 10〜14か所）
- [ ] 連載の最新回は「次へ」を隠すだけにせず、次の回の公開日と、別の連載の1本を出す（ほぼ日：visibility:hidden・href="#"）
- [ ] 毎回作る書体の部分集合は、集める字を表示される要素だけにし、キャッシュが効く URL にする（ほぼ日：body の textContent ごと送り、long で 585字 702KB）
- [ ] ヘッダーの小さな絵（日替わりの絵など）を、表示の何十倍もの大きさで配らない（ほぼ日：date_261107.png 2363px・482KB を 36px で）
- [ ] 枚ごとに地の色を替えるヒーローは、文字の色も枚ごとに持たせ、その組で 4.5:1 を計算する（ほぼ日：data-text-color、白／#c1ab53 2.28:1）

- [ ] 手順を1つずつ見せる画面を作ったら、入口のボタンを手順の見出しのそばに出し、手順の数が入っているかを確かめる（Ottolenghi：Follow Mode の JS・CSS・HTML を配るのに入口 0・data-steps="0"）
- [ ] 分類の一覧は、その分類の最初のページを HTML で配る。全件の JSON を取ってからブラウザで絞らない（Ottolenghi：643件・470KB で 14枚）
- [ ] JSON-LD を JSON として読めるか、公開前にパースして確かめる（Ottolenghi：6本中3本が末尾のカンマ・生の改行で読めない）
- [ ] 材料の面を sticky にするなら、面が手順より短い記事で効くかを確かめる（Ottolenghi：long 面 649px＜手順 1,479px で効き、article は同じ高さで効かない）
- [ ] 絞り込みの項目は button と aria-pressed で、選んだ後の件数を出す（Ottolenghi：四角の div だけ・件数無し。URL ?filter.〜 に残すのは良い）
- [ ] 同意の最初の面に、Accept と同じ大きさの Reject を button で置く（Ottolenghi：Reject all は Preferences の中の href の無い a）
- [ ] og:image を 1200×630 前後の JPEG か PNG にする（Ottolenghi：http の .heic・2962×3950・1,695KB）

解剖で裏づけた項目が増えたら、ここに足す（どのサイトで確かめたかを添える）。
