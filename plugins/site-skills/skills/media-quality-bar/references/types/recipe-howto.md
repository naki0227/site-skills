# レシピ・ハウツー（レシピ、手順の説明）

## この下位タイプで特に見ること
材料と手順の組み方、工程の途中から材料と要約を呼び戻せるか、手順の写真、Recipe の構造化データ、台所で読むための切り替え（画面を消さない・写真を隠す）、量の単位

## 見本の実測
### King Arthur Baking（https://www.kingarthurbaking.com/ ・2026-10-27 計測）
PC 1440×900 / SP 390×844。見たページ：トップ、カテゴリ「Bread」（/recipes/bread・525件）、ふつうのレシピ（/recipes/mini-apple-pies-recipe・手順17・高さ 10,852px）、長いレシピ（/recipes/pain-de-campagne-country-bread-recipe・手順17・合計21時間5分）。Drupal＋React の部品（検索・保存・メモ）。選んだ理由：材料と手順の2列・体積とグラムの併記・Bake Mode。サイトのデザインでの受賞は確かめられなかった（同じ会社のポッドキャストが 2026年 Webby 賞）。
- **2列の組み**：記事の頭のあと、地 #f8f5f0 の帯の上に、左 材料の列 325px（padding 70px 10px 70px 0）、右 手順の白い面 785px（padding 70px 115px、文の幅 522px）。SP は材料 → 手順の1列（手順の面 padding 40px 10px 40px 30px）。材料の列は固定しない（position:static）。
- **手順の文字**：20px／31.2px（1.56）・brandon-grotesque 300（段落 390）・字間 0.256px、手順の間 20px。SP 18px／28.08px。リード（18px／28px）より手順のほうが大きい。
- **番号**：ol.list--numbers に CSS の counter。::before が 20×20px の丸・1px #000・数字 14px、左 28px の余白。17手順のうち4手順は段落の頭に太字の小見出し（To make the filling:）。
- **材料**：ul の各行 18px／28.08px・左 35px、印は ::before の 12×1px・#da1a32、行の間 20px。グループ名（Filling／Crust／For finishing）は p 18px・500。量は「3 1/2 cups (397g)」の形で体積が先・グラムがかっこ。長いレシピの脚注は「For best results, measure ingredients by weight.」。材料名が店の商品へのリンク（data-sku・data-price）。
- **記事の頭**：写真の横送り（PC 795×530 を3枚・SP 330×220）→ 左 805px：パンくず 12px 大文字・字間 1.504px → 題 Para Supreme 60px／64.8px（SP 32px）→「Updated on September 30, 2026」16px 斜体 → 星と件数 → リード。右 489px：書き手（顔 70px・RECIPE BY 11px）→ 時間（HANDS-ON／BAKE／TOTAL TIME：札 12px 字間 1.504px＋値 Para Supreme 20px／24px、間 32px）→ YIELD → 5つの操作（SAVE／PRINT／SHARE／NOTES／LIVE CHAT、32px の丸＋12px）。公開日は画面に無い。
- **台所の切り替え**：手順の見出しの右に「Hide images」（18px の下線リンク、押すと手順の写真が消え Show images）。見出しの下、上下 2px #cbcbcb の罫の間に「Bake Mode」（46×24 のつまみ＋Para Supreme 18px＋説明 15px 斜体）。中身は NoSleep.js：navigator.wakeLock.request('screen')、無い端末は見えない動画を流す。
- **手順の写真**：手順の中に 1024×684（width/height・lazy）を2枚、表示 522×349（SP 355×237）。ブログへの「Learn more」の札（141×95）も手順の中。
- **目次**：無い（PC 10,852px／10,297px）。ページ内リンクはリードの tips → #bakers-tips、星 → #review-section の2つ。左端の縦のシェアだけがスクロールについてくる。
- **記事の終わり**：手順の面の中で Tips from our Bakers（ul・3項目）→ My Notes（自分用のメモ・React 240KB）→ Baker's Resources（リンク9本）。面の外で 店の4点 → メール登録 → Recommended Recipes 4本 → レビュー（Yotpo・1360×1380）。「次はこれ」の1本は無い。
- **一覧**：頭 地 #eae3d1・478px（題 60px・説明 20px／31.2px・写真）→ 分類の札 213×92・角 12px・「Bread (525)」の件数つき、いまの札は #e25c2a に白文字（3.62:1）→ FILTER BY 6項目＋SORT → カード 4列（325×317・枠 1px #c1c1c1・写真 323×218 に width/height 無し・題 Para Supreme 20px／24px・星と件数）30件 → ページ送り 1〜18（Para Supreme 24px）。カードのホバーは影 0 4px 12px rgba(0,0,0,.1) を .2s と題 #da1a32。ページ送りは href の無い button で、URL の ?page=2 は history で書く。配られた HTML にカードは無い（JS が描く）。
- **SP**：操作の帯を下に固定（390×78・SAVE／PRINT／SHARE／NOTES／LIVE CHAT）、body に padding-bottom 78px。
- **広告と同意**：他社の広告は 0。自社の帯「Our Best Products」1130×214、SHOP THIS RECIPE（315×37・#da1a32）。Osano の同意 PC 1440×92・SP 390×152（約4秒で出る）。メール登録のポップアップ 1180×793（画面の72%）を記事の途中で出し、写真は 1400×1400 の JPEG 1,126KB を全ページで読む。
- **データ**：JSON-LD に Recipe（recipeIngredient・recipeInstructions・prepTime PT1H15M など ISO の時間・recipeYield ["24","24 mini pies"]・nutrition・aggregateRating）。ただし datePublished が "September 9, 2026 at 7:13pm"（ISO 8601 でない）、dateModified 無し、recipeInstructions は文字列の配列（HowToStep でない）。長いレシピの author は Organization。ダークモード 0、viewport は拡大を止めていない。
- **色と動き**：#da1a32 367回・#fff 318・#000 289・#f8f5f0 97。transition は .2〜.3s の ease、:hover 516か所に (hover:hover) 0、reduced-motion 2か所。
- **重さ**：解析を除く PC top 12.04MB／list 5.77MB／article 8.67MB／long 8.88MB（SP 10.02／5.52／7.58／7.80MB）。全部込み article PC 13.28MB・192リクエスト・44ホスト（GTM 3.47MB）、top 17.31MB・77ホスト（YouTube の埋め込み 3.68MB を最初から読む）。CSS 600KB 台を2本。SP の article で CLS 0.0851（3.6秒、文字の差し替え）。

### 白ごはん.com（https://www.sirogohan.com/ ・2026-10-30 計測）
PC 1440×900 / SP 390×844（iPhone の UA）。見たページ：トップ、分類「おかず」（/okazu/・831件を1ページ）、ふつうのレシピ（/recipe/nikujaga/・工程2節・写真21枚）、長いレシピ（/recipe/kuromame/・工程6節・3〜4時間煮る）。PC と SP は別 HTML（iPhone・Android の UA は 302 と JS で /sp/ へ）。選んだ理由：大まかな流れ・SP の材料を呼び戻す丸いボタン・材料の印・工程の中の量の色。受賞・事例集は確かめられなかった。
- **本文**：PC 箱 800px（1行 約50字）・16px／26.88px（1.68）・工程の段落の間 21px。SP 箱 342px（左右 24px・約24字）・**14px／21px**・段落の間 24px。文字 #000／地 #fff。注記は「※」で始める 13px／18.2px。注意は #900（8.92:1）。
- **題と見出し**：PC は NGT P明朝 300（ngt.woff 676KB・全字）。題 34px／47.6px・字間 .13em、節（材料・作り方）29px／49.3px・字間 .1em・下に 1px #707070、工程の節 24px／40.8px・.1em・番号 28px。SP は全部ゴシック 700（題 17px、節 16px）。
- **記事の頭**：題 → 分類の札3（12px・1px #a9a59c・角 2px。3つ目が「冷蔵で3〜4日保存可能」）→ 写真 800×532 → 「調理時間：40分」19px 700 ＋「▸ 大まかな流れをチェック」（14px 700・1px #a9a59c・角 100px・193×41）＋動画へ → 説明 437px｜お気に入り 7024件・メモ・キーワード8・シェア3・印刷 320px。公開日・更新日・書き手は画面に無い。
- **大まかな流れ**：工程を2組（下ごしらえ2行／調理と仕上げ6行）に縮めた要約。PC は remodal（白・角 7px・内 40px・影 0 0 10px 5px rgba(0,0,0,.1)）、組の名前は 14px 700 に下半分 #fffd96 のマーカー、組の間に 1px #e5e5de。中身は HTML に最初から入っている。見出しの目次は無い（PC 8,674px・SP 11,780px）。
- **SP の材料の呼び戻し**：右下に 60×60 の丸2つ（「材料を見る」「大まかレシピ」・#ebe7ce・12px／18px 700・右 15px）。少しスクロールすると出る。押すと白いシート（max-height 60vh・暗幕 rgba(0,0,0,.2)）が下から出る。シートは bottom を .5s で動かす（transform でない）。下に固定の広告の帯の高さを JS で測り、丸いボタンを帯の上（高さ×倍率＋60px）へ逃がす。材料の HTML はシート用にもう一度書いている。flow.js：開く 169ms・閉じる 55ms。
- **材料**：h2 の下に 358px の列2つ。● 具（ul.disc-list）、○ 水（circle-list）、A 合わせ調味料（::before に "A"・Helvetica 700・padding-left 1.25em。B・C もある）。「じゃが芋（男爵芋）　…　500g（3〜4個ほど）」とグラムが先・個数はかっこ。名前はキーワード検索へのリンク。
- **工程**：.howto-block ＞ h3（番号は icomoon のアイコンフォント .icon-num01::before・speak:none。ol でない）＋ p ＋ 写真の ul。写真は元 448×298（width/height あり・lazy 無し）を PC 195×130 で4枚／行、SP 342×227 で1列。工程の中で量をもう一度書き、.bg（地 #fffadf・padding 4px 2px・太字）で目立たせる（肉じゃが3か所・黒豆4か所。「A の調味料（砂糖大さじ3、…）」と組の名前で呼ぶ）。長い黒豆は工程の1節目が「はじめに黒豆の煮方のまとめ」（1：1：6 を #900 太字で一行）。
- **記事の終わり**：動画（YouTube 800×450・最初から読む）＋「上のレシピに戻る」→ 補足（四辺 1px #e5e5de の箱・内 34px・最後に「レシピ更新情報：…(2025.5)」）→ お気に入り・メモ → パンくず → 広告2 → キーワード → 関連（PC 右の列4本・SP 縦長 100×150 の6本）→ ランキング10 → 献立・特集。次の1本の大きな導線と書き手の紹介は無い。
- **一覧**：題 34px NGT＋手描きのアイコン → 説明 14px → 節へのページ内リンクの帯（7つ・地 #f6f5f0・1px #e5e5de・角 3px）→ 節ごとに 2:3 のカード5列（li 19%＋右 1%、a に padding-top 148.333%・img absolute・object-fit cover。縦長に撮った別カット 209×314 を 152×225）。題 14px／16.8px・下線。読み込むと opacity 0→1・1s。831件を1ページ・PC 52,092px、ページ送り無し。class は lazyload だが src に直書きで全部読む（webp 8,864KB）。
- **広告と同意**：記事の本文の間は材料の直後の1枠（728px）だけ、工程の途中には挟まない。下に固定の広告 PC 1440×90・SP 390×122（50px スクロールで出る）。SP は下のタブ 51px（字 9px）と合わせて画面の下 173px（20%）が固定。日本からは同意の画面無し（Funding Choices 171〜180KB は読む）。CLS：記事 PC 0.0067・SP 0、トップ PC 0.286（3.0秒に本文が動く）・SP 0.083（送りを jQuery の left で動かす）。
- **データ**：JSON-LD 0件。microdata の Recipe は name・image・description だけ（材料・手順・時間・日付無し）。PC はパンくずの BreadcrumbList。og:type article。PC の viewport は width=1024・min-width 1024px、SP の HTML は device-width、SP の canonical は PC の URL。ダーク・文字サイズの切り替え無し。
- **色と動き**：#e5e5de 39回・#fff 34・#000 25・#f6f5f0 13（右の列 27%）・#c6bda0 12（ボタンの地・黒文字 11.19:1）・#a9a59c 10（札と丸いボタンの枠）。:hover 25 に (hover:hover) 0、reduced-motion 0、:focus-visible 0。トップの送りは6秒・autoHover・止めるボタン無し。
- **重さ**：measure.js（AdSense・yads は含む）PC top 6.09MB／list 15.41MB／article 11.25MB／long 11.83MB（SP 3.29／3.56／8.87／8.06MB）。全部込みの転送 article PC 4.73MB・271リクエスト・48ホスト（自社 2,051KB・YouTube 980KB）。記事の上位は YouTube の JS 1,630KB・920KB、ngt.woff 676KB、Facebook 558KB。

## 真似る型
見本2つ（King Arthur Baking・白ごはん.com）から。作るときの出発点。
- 記事の頭に「時間」を大きく置き、その横に要約を開くボタン（King Arthur Baking：HANDS-ON／BAKE／TOTAL TIME の欄、白ごはん.com：「調理時間：40分」19px 700＋「大まかな流れをチェック」）。要約は工程を2組（下ごしらえ／調理と仕上げ）・8行前後に縮める（白ごはん.com）。
- 工程を読みながら材料を見られるようにする。PC は材料の列を手順の横に（King Arthur Baking：材料 325px・手順の面 785px。固定はしない）、SP は右下の丸いボタン（60px）から下のシート（max 60vh）で呼び戻す（白ごはん.com）。作るときは PC の材料の列を sticky にする（2サイトとも固定していない）。
- 材料は組に分けて印を付ける（白ごはん.com：● 具・○ 水・A 合わせ調味料。King Arthur Baking：Filling／Crust の組名）。工程では組の名前と量をもう一度書き、量を地の色で目立たせる（白ごはん.com：.bg 地 #fffadf）。
- 量はグラムを先に（白ごはん.com：「500g（3〜4個ほど）」、King Arthur Baking は「3 1/2 cups (397g)」の体積が先。日本向けはグラムが先）。
- 手順の文字はリードより大きく、段落の間を広く（King Arthur Baking：20px／31.2px、白ごはん.com PC：16px／26.88px・段落の間 21px）。SP でも本文は 16px を保つ（白ごはん.com SP の 14px は小さい）。
- 工程の写真はその節の直後に、表示の倍の大きさで揃える（白ごはん.com：元 448×298 を PC 195×130・SP 342×227、King Arthur Baking：1024×684 を 522×349）。番号は ol と counter（King Arthur Baking の丸 20px）。
- 一覧のカードは比率の箱で写真の寸法を決める（白ごはん.com：2:3・padding-top 148.333%、縦長に撮った別カット）。
- 保存の目安・時短のような使う人の条件を、分類の札と同じ形で題の下に置く（白ごはん.com：「冷蔵で3〜4日保存可能」）。
- 手順の見出しのそばに、画面を消さない切り替え（Wake Lock）と、手順の写真の出し入れ（King Arthur Baking）。

## 反面教師
- Recipe の datePublished を "September 9, 2026 at 7:13pm" と書く・dateModified 無し・手順を文字列の配列で持つ（King Arthur Baking）。
- 一覧のページ送りが href の無い button（King Arthur Baking）。
- 手順の途中で画面の72%を覆うメール登録のポップアップ、その写真 1,126KB を全ページで読む（King Arthur Baking）。
- 高さ 1万px・手順17でも目次も材料の固定も無い（King Arthur Baking）。
- 材料を p＋br、手順を文字の「1.」で書き、Recipe の構造化データも無い（北欧、暮らしの道具店のレシピ記事。オウンドメディアの中のレシピ）。
- PC と SP を別 URL・別 HTML に分け、UA で /sp/ に送る。PC の HTML は viewport width=1024（白ごはん.com）。
- Recipe の構造化データが microdata の name・image・description だけで、材料・手順・時間・日付が無い。JSON-LD 0件（白ごはん.com）。
- 工程の番号をアイコンフォントの ::before（speak:none）で描き、ol で持たない（白ごはん.com）。
- SP の本文 14px／21px・下のタブ 9px、固定の広告とタブで画面の下 20%（白ごはん.com）。
- 一覧 831件を1ページ（PC 52,092px・15.41MB）、lazyload の class なのに src 直書き（白ごはん.com）。
- YouTube の埋め込みを最初から読む（白ごはん.com：記事で転送 約1MB・展開 3.5MB）。
