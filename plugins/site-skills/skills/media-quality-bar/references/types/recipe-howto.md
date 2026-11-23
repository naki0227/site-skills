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

### Great British Chefs（https://www.greatbritishchefs.com/ ・2026-11-04 計測）
PC 1440×900 / SP 390×844。見たページ：トップ、分類「Chicken recipes」（/collections/chicken-recipes・難しさの合計 345本）、ふつうのレシピ（/recipes/crab-burritos-recipe・材料21・手順11・組3）、長いレシピ（/recipes/raspberry-peach-melba-mille-feuille-…・材料22・手順18・組4・頭に動画）。同意の画面は「Reject all」で閉じてから測った。一覧の絞り込みと Load more は robots.txt が断る /api を動かすので押していない。選んだ理由：手順ごとの材料の枠と Metric／Imperial の切り替え、シェフを軸にした組み。The Good Web Guide Awards 2018 の Website of the Year。
- **手順の材料の枠**：手順の段落の下に ul（550px・左 40px・上 15px 下 16px・1px rgba(47,47,47,.1)・内 15px・行 15.2px）で、その手順で使う材料と量だけを書き直す。article 11手順のうち8、long 18手順のうち8（材料を使わない手順には付けない）。合計を割る：材料の列「14 fresh habanero chillies」→ 手順5「7」と手順6「7」、水「3l」→「1l」と「2l」。枠の中身は JSON-LD に入らない。
- **単位の切り替え**：材料の見出しの直下に「METRIC」「IMPERIAL」（h3・Lato 700 13.6px 大文字・選んだ側に下線）とつまみ（div role="button"・32×10.4px・白い玉の left を .25s linear で 16.8px）。材料の列と手順の枠が同時に替わる（200g → 7 1/16 oz、1l → 2 1/8 pints）。手順の文の中の「1 litre」「220°C」、long の「12cm x 30cm」は替わらない。localStorage に isMetricProbablyPreferred。つまみは tabIndex -1 で Tab が届かず、aria-pressed も無い。
- **本文**：手順の段落 PC 550px・SP 326px、Lato 400 15.2px／25px・#3e3e3e・下 16px（SP も 15.2px）。番号は div.float-left 27px の列に右寄せ・PT Serif 25.6px・#47af9d、本文は左 40px。ol は 0。
- **材料**：箱 322px（1px rgba(47,47,47,.1)・内 16px）→「Ingredients」PT Serif 21.6px → 単位 → 行（15.2px／24px・上下 4px）「200g of kohlrabi, (or jicama), peeled…」量が先、材料名は #0895c1 でその材料の分類 /collections/kohlrabi-recipes へ（21行中12）。組は h4・Lato 500 15.2px・#47af9d・大文字、組の間に 1px の罫。下に SAVE／PRINT／SHOPPING LIST（288×38）と Equipment。材料の列は固定しない。
- **記事の頭**：h1 PT Serif 500 25.6px／30.72px・中央（SP も 25.6px）→「by シェフ」（#ff8300 下線）→ 写真 859×572｜区分・難しさ・人数（Main・Easy・4）→ 時間「1 hour 40 minutes plus overnight soaking」（long「3 hours plus cooling time」）→ 星 → JUMP TO RECIPE（button 174×33・1px #3e3e3e、押すと約700ms で材料の箱へ。# は変わらない）→ リード（15.2px／24px）と本の出典 →「First published in 2026」（年だけ）→ DISCOVER MORE の札。SP はリードの後に「Not feeling this? See related recipes.」。
- **3列**：材料 322px｜手順 590px｜シェフの紹介 376px（モノクロ 374×249・名前・15.2px／25px の文）と sticky の広告 300×600。Related Recipes 5枚（232×155）は材料より前。
- **記事の終わり**：最後の手順の写真 550×367 → ニュースレター → Get in touch（コメントはログイン）→ You may also like（429×286 と 656×437 の混ぜ組み、レシピ・分類・読みもの）。次の1本の大きな導線は無い。
- **一覧**：h1 → 全幅写真 1440×720 → 説明5段落（レシピへのリンク10本）→ 関連の分類5枚 → 左 200px の絞り込み（「Easy (272)」「Main (265)」と件数を項目の中に、隠した checkbox）｜4列×2段＝8枚（aspect-3/2・250×167・題 PT Serif 16px／22.4px・by 13.6px #6a6a6a）→「Load more」（div・href 無し）。格子は JS が API から描く。h1 3つ、SP は絞り込み無し・横送りの1行、PC CLS 0.194。
- **トップ**：動画 1440×810（mp4 3,729KB・autoplay・loop・controls 無し）→「This week on Great British Chefs」→ 左に h1「Recommended this week」と特集名、右に今週のシェフ1人（写真 665×444・紹介・レシピ6枚）→ 縦長の動画カード 279×498 の送り。
- **広告と同意**：consentmanager の窓（PC 約500×500・SP 約350×590、全体をぼかす、「up to 494 third parties」、Accept／Reject／Settings を同じ形で）。JS 488KB＋191KB。広告：記事の PC はヘッダーの上 1440×260・右 300×600 sticky・下に固定 1440×110、SP は手順の間に 300×250 の枠4つと下に固定 390×110（ヘッダーと合わせて画面の 22%）。枠は高さを先に取り CLS は article PC 0.0134・SP 0.0488。自社の本の帯を記事に3回（SVG の object を HTML に9つ、PC の 241KB を3回読む）。
- **データ**：JSON-LD は @type ["Article","Recipe"]・datePublished と dateModified が同じ "2026-08-19T08:42:26"（時差無し）・totalTime だけ・recipeYield 無し・HowToStep 11（組の HowToSection 無し）・author の url が相対。og:type website。ダーク 0。
- **色と文字**：#3e3e3e（10.70:1）に役割の色3つ：緑 #47af9d（番号・組名・2.66:1）、橙 #ff8300（シェフ名・2.47:1）、青 #0895c1（材料名と分類・3.45:1）。Lato（300・400・400i・700）と PT Serif 400 を Google Fonts から。:hover 62 に (hover:hover) 11、reduced-motion 1、カードのホバーで skeleton-pulse 1.4s infinite。
- **重さ**：measure.js（広告を除く・展開後）PC top 9.20MB／list 4.91MB／article 5.47MB／long 5.16MB（SP 5.42／4.68／4.88／4.84MB）。全ページで自社 JS 1,918KB と Stripe 1,145KB。全部込みの転送 article PC 3,445KB・111件・23ホスト、SP 2,396KB・86件・11ホスト。写真は srcset と width/height で大きさが合っている。

### Ottolenghi（https://ottolenghi.co.uk/ ・2026-11-08 計測）
PC 1440×900 / SP 390×844。見たページ：トップ、分類「Mains」（/pages/mains-recipes）、ふつうのレシピ（/pages/recipes/fried-aubergines-zhoug-date-molasses・材料14行・手順4）、長いレシピ（/pages/recipes/parsnip-pear-tarte-tatin・材料13行・手順10）。Shopify のテーマ（制作 STUDIO GRAFT）。同意は Preferences → Reject all で閉じてから測った。選んだ理由：写真と題を割る記事の頭・材料の砂の面・細い数字の手順・大小を混ぜた一覧・赤い面に白い切り絵の食材辞典。受賞・事例集は確かめられなかった。
- **記事の頭**：grid 55fr 45fr・min-height calc(100vh − ヘッダー − 帯)。左に写真 744×993（1000×1334 を cover、上と左だけ 15px 空け、スライド）、右は上に丸いボタン4つ（80×44・地 #fcf7f2・角 40px）、下に NEW（50px の赤い丸）→ 題 h1 56px／56px 400 #cd001a・text-wrap:balance（SP 34.13px・写真の上）→ 罫 1px #f9f2ec → Serves 4 as a side／Prep 20 min／Cook 50 min（14px・space-between、SP は縦3行）。本から取った回だけ右下に本の表紙 100px。日付・書き手は画面に無い。
- **リード**：24px／28.8px 300・幅 900px 中央（SP 21.57px／25.88px で 13行）。
- **材料**：380px の面（地 #fcf7f2・内 40px 45px、SP 330px・内 20px）。table の2列で量の td 80px・nowrap、行 14px／18.2px・上下 6px。組の見出しは em の斜体・#1b1b1b80（3.27:1）・下に 1px 16% の罫。量はグラム・ml が先、さじは tsp／tbsp。自社で売る品だけ #cd001a の店へのリンク（article 2・long 6）。PC は面が sticky top 40px（long：面 649px＜手順 1,479px で効く。article：同じ高さで効かない）。
- **手順**：ol を counter で、::before に 22px 300 #cd001a・min-width 25px。文字 Riforma 300・18px／23.4px（1.3）・幅 825px（1行 約110字）、罫 1px #f9f2ec（白地 1.11:1）と上 30px・間 45px。SP 15px／19.5px・300・間 30px。工程の量は文の中だけ。
- **一手ずつ（Follow Mode）**：全画面の grid（header／steps／footer、PC は写真｜手順）、scroll-snap-type:y mandatory、まだの手順 opacity .25 を .5s、ホイールは 100ms debounce で1手、Back／Next step、進み具合の線（width を %）、開くと navigator.wakeLock.request()・visibilitychange で取り直し・閉じたら release。ただし入口 .js-recipe-follow-start が調べた6本とも無く、手順も「All done」だけ（data-steps="0"）。
- **目次**：無い（PC 4,941px／6,237px、本文の見出しは Ingredients と Method の2つ）。
- **記事の終わり**：Cooking notes（Commentify・Login で投稿）→ Share with friends（48px の丸5つ）→ You may also like（地 #f9f2ec・縦長 380/507・正方形・横長 582/435 を混ぜた横送り、幅 27.5%／45%）→ Instagram 6枚。次の1本の導線・同じ分類の一覧は無い。
- **一覧**：「← RECIPES」11px .08em と題 56px 赤｜説明 18px 300。Masonry 4列・間 30px、14枚に大 675×675 ×2・縦長 323×516 ×4・正方形 323×323 ×8。題 18px 300、ホバーで色 .2s と写真 scale(1.025) .2s。NEW の丸を写真の角に −10px。Load more（button 130×38）で +14枚・33〜71ms・URL が ?page=2→3→4。カードは配る HTML に0枚で、Storefront API の metaobjects を 250件ずつ3回（643件・470KB）取ってブラウザで分類に絞る。写真 1000px を 323px に・width/height 無し・alt 空 9／14。
- **絞り込み**（/pages/recipes）：上の帯に MEAL/COURSE 15・COLLECTION 6・MAIN INGREDIENT 8・SEASON/OCCASION 8・BOOK 13（12px .12em 大文字）。開くと地 #fcf7f2 に2列（771ms）。項目は button の中に四角の div（aria-pressed 無し）。選ぶと ?filter.main_ingredient=Aubergines（再読み込みで残る）、帯の下に選んだ名前と CLEAR ALL。件数は出ない。SP はアコーディオン。
- **トップ**：全幅スライド 1410×754（題 78px 白・小さなラベル）→ What to cook this week 3本 → レストランの帯（YouTube の背景動画2本で 8.5MB）→ 特集4本（頭に 6px の赤い点）→ 商品 → Substack の登録 → Foodipedia（282×440 の #cd001a に白い切り絵の食材5枚）。
- **広告と同意**：他社の広告 0。Pandectes の同意の最初の面は Accept と Preferences だけで、Reject all は Preferences の中（PC 1440×436）の href の無い a、黒い幕で本文を止める。記事を開いて約6秒で Klaviyo の窓を2枚重ねる（写真 2,466KB＋1,790KB の JPEG）。CLS PC 0.022〜0.025・SP 0.0004〜0.0013。
- **データ**：Recipe の JSON-LD は6本中3本が JSON として読めない（末尾のカンマ・生の改行）。読めるものも prepTime・cookTime・recipeYield・dateModified 無し、datePublished は日付だけ、author は Organization。og:image は http の .heic（*/* なら 2962×3950 の JPEG 1,695KB）。og:type website。lang="en"・ダーク 0。
- **色と文字**：#cd001a 85回・#fff 84・#f9f2ec 36・#fcf7f2 25・#1b1b1b。#cd001a は白地 5.82:1・砂 5.46:1。書体 Riforma（Lineto）の 300 と 400 の2つ（woff2 93KB）、大きさは Bootstrap の RFS（h1 1200px で 78px、h2 56px）、本文 18px（SP 15px）・行の高さ 1.3。
- **動き**：矢印リンクの下線 ::after scaleX .3s、カード color .2s＋scale(1.025) .2s、ボタン background-color .3s、スクロールで fadeIn .5s cubic-bezier(.37,0,.63,1)。:hover 149 に (hover:hover) 3、自前の部品に reduced-motion 0。
- **重さ**：measure.js PC top 21.49MB／list 11.59MB／article 16.73MB／long 13.42MB（SP 18.90／11.22／11.24／9.17MB）。全ページで checkout-web の JS 1,637KB。全部込み article PC 20,741KB・339件・23ホスト（自社 11,572KB・Klaviyo の写真 4,256KB・GTM 2,132KB）。

### dancyu（https://dancyu.jp/ ・2026-11-15 計測）
PC 1440×900 / SP 390×844。見たページ：トップ、「プロが教えるレシピ」の一覧（/recipe/・5,068件・19本×ページ）、ふつうのレシピ（/recipe/2026_00011091.html・材料5行・手順2・高さ 8,035px）、長いレシピ（/recipe/2026_00011025.html・材料16行・手順4・写真5・高さ 10,378px）。プレジデント社の食の雑誌の Web（Movable Type・lazysizes・Swiper）。同意の窓は出なかった（日本からの表示）。選んだ理由：写真に食い込む白い紙の記事の頭・マスキングテープを貼った生成りの材料の面・2px の枠の番号の手順・縦書きの日付と赤い下線のカード。受賞・事例集は確かめられなかった。
- **記事の頭**：全幅の写真 1440×570（SP 390×366）の下端に、幅 1000px の白い紙（上 −80px・内 45px 50px・下の罫 2px #e5e5e5、SP 366px・−30px）を重ね、中に 題 h1 34px／46px 700 中央（SP 23px／30px）→ 日付 14px Lato 700 #cc0700（SP 13px）→ 「連載：」とリンク 14px → リード 15px／26px（SP 14px／25px）。書き手と更新日は頭に無い（書き手は最後の箱、更新日は JSON-LD の dateModified だけ）。再配信の回は本文の頭に「2022年10月10日に配信した連載…からの再配信です」の small。
- **本文**：箱 PC 1000px・15px／24px（1行 約66字）、段落の下 25px。SP 343px（左右 23.4px）・14px／22.4px（約24字）。書体は游ゴシック Medium →ヒラギノ角ゴ Pro W3 →メイリオの端末の書体、数字と日付だけ Lato 700（Google Fonts・14KB）。Morisawa の TypeSquare を読み、リュウミン M-KL と丸アンチック M を class で使える。
- **見出し**：「”料理名”のつくり方」h2 28px／54px 700、下 14.6% だけ #e06a66 の帯（linear-gradient で下線、SP 21px／38px）。
- **材料**：地 #f5efda の面（PC 1000px・上下 20px、SP 内 20px）の上中央に、灰 rgba(0,0,0,.12) のマスキングテープの SVG（74×35・上 −20px）。左 184px に鍋のアイコンと「材料（2人分）」#cc0700 700、2px dotted #ccc の縦罫、右に table（th 名前・td 量）13px／24px（SP は見出しが上・12px／20px）。組は「★ 寿司飯」「・ 米」「A」「├ 米酢」「└ 塩」を文字で描く。注の「＊1」「＊2」は面の外の右寄せ 12px。人数の切り替え・単位の切り替え・材料のチェックは無い。
- **手順**：h2 の中に i（40×40・2px #000 の枠・Lato 22px 700）と span（22px 700・上の罫が枠からのびる）、本文は p 15px／24px（SP は i 32px・18px）。ol 0。工程の量は文の中だけ（地の色なし）。写真は工程の直後に 900×600（元 1440px 前後）。長いレシピでも目次・いまの手順の印は無い。
- **追従ヘッダー**：700px を過ぎて下へ送ると、1秒後に白い帯（PC 60px・SP 50px）が上から出て「連載名 15px｜題 22px 700」を1行で出す（transform translateY .5s cubic-bezier(.23,1,.32,1)・影 10px 10px 60px rgba(4,0,0,.08)）。上へ送ると帯は消え、200px を過ぎた所ではふつうのヘッダーが出る。window.onscroll で毎回 setTimeout。
- **記事の終わり**：黒い「この連載のほかのレシピを見る」480×54 → 教える人（地 #f5f2eb・赤 50px の罫を左に食い出させる・写真 120px）→ 掲載誌の注と本の帯（表紙・ISBN・770円・購入）→ 文と写真のクレジット 12px → 書き手の箱（2px #000 の枠、写真の角に −45° の黒い線2本、本文 13px／22px）→ #タグ 17px 700 → シェア（赤い丸 54px ×3）→ 「この連載の他の記事」（料理写真の全幅の帯に、−5° に傾けた白い札と 48px 白の連載名、カード3枚が帯から下へはみ出す）→ 赤 #950500 の全幅「編集部のおすすめ」6本（うち AD の札4本）→ 関連する記事 6本。
- **一覧**：頭は地 #f5efda に h1 36px と件数「5,068件」Lato 30px（SP 28px・16px）。1本目は全幅の写真 1320×704 に白い 446px の札（題 26px／34px）、以下 3列 380px（SP 2列 165px）。カードの写真 380×253、右の外に縦書きの日付（rotate(90deg)・Lato 13px #cc0700、SP 9px）、札の下に 2px #cc0700 の罫。連載名 14px → 題 20px／26px 700 → 要約 13px／19px #4c4c4c。題と要約は HTML の時点で「...」で切る（alt も切れる）。1枚に a が2つ（写真と札）。ページ送りは ?page=2〜11 の番号（SP 15×21px）で、2ページ目の canonical は /recipe/。rel=next 無し。
- **トップ**：全幅スライド（Swiper・自動 8秒・速さ 800ms、白い札 516px「今週のおすすめ」・矢印をかざすと円の線を stroke-dasharray 154 で描く）→ 予約購読の帯 → ピックアップ（地 #f5efda の面を斜めに敷き、写真と白い札を左右に組み替え）→ 食いしん坊倶楽部 → イベント（#950500 に日本地図の線、縦書きの見出し）→ 入部の帯 → 連載（写真の全幅の帯）→ キーワード → 編集部のおすすめ（#950500）→ 人気のキーワード。
- **広告と同意**：PC は記事の下に 300×250 が1つ。SP は記事の頭の下 390×100・タグの下 390×174・記事の下 390×250・300×250 の4つ。Teads・Yahoo!・AdSense・GPT・GeoEdge、Google の Funding Choices を読む（窓は出なかった）。CLS PC 0.047・SP 0.261（ナビと .contents が広告の高さで押される）。画像 38枚中 31枚に width/height 無し、loading=lazy 0（lazysizes の data-src）。
- **データ**：JSON-LD に Article（author Person・datePublished／dateModified に時差あり）・BreadcrumbList・Recipe。Recipe は name・image（URL の末尾に空白）・recipeYield・recipeIngredient だけで、article は recipeInstructions も無い。long は HowToStep 4つ。時間・author・nutrition 無し、材料に「&emsp;├ 米酢：大さじ3（＊1）」「★ 寿司飯：」がそのまま入る。og:type は記事でも website。ダーク 0・reduced-motion 0。
- **色と文字**：#fff 148・#000 133・#cc0700 108・#f5efda 13・#ccc 12・#262626 10・#e5e5e5 10・#e06a66 8・#4c4c4c 6・#f5f2eb 4・#950500 2。#cc0700 は白地 5.84:1・#f5efda 5.07:1、白／#950500 9.13:1、#e06a66 は線だけ（白地 3.27:1）。font-size は px と rem の2回書き、15段（9〜36px）。
- **動き**：transition は全部 cubic-bezier(.23,1,.32,1)（opacity .5s .1s ×14・color .5s ×12・background-color .5s ×10・transform .5s ×5・all .8s ×6）。カードは写真 scale3d(1.1) .8s と札の地が #cc0700・字が白に .5s。lazysizes の写真は opacity 2s。メニューの3本線は keyframes で ×に。:focus は検索欄だけ・(hover:hover) 0。
- **重さ**：measure.js PC top 21.29MB／list 5.36MB／article 8.09MB／long 8.96MB（SP 21.25／5.25／8.22／9.25MB）。トップは JPEG 20,054KB：写真を PC 用 m〜.jpg と SP 用 mm〜.jpg の両方読む（同じ写真で 541KB＋584KB、SP 用のほうが重い）。全部込み article PC 11,669KB（展開）・145件・51ホスト（自社 4,050KB・GTM 1,536KB・AdSense 1,176KB・GPT 1,067KB・Facebook 804KB・Yahoo! 647KB・Piano 491KB・Teads 451KB）。

### Nadia（https://oceans-nadia.com/ ・2026-11-19 計測）
PC 1440×900 / SP 390×844（全部込みは iPhone 13 の 390×664）。見たページ：トップ、食材の一覧（/recipe/tag/大根・区画11）、ふつうのレシピ（/user/500550/recipe/537439・材料9・手順4・高さ 3,973px）、読みもの（/user/10022/article/7254・編集部のコラム・レシピ3品・11,848px）。料理家（Nadia Artist）が載せるレシピのサイト（Next.js・CSS Modules）。同意の窓は出なかった（日本から）。選んだ理由：地に白い紙を積む型・作り手の吹き出しのリード・材料と手順の線と番号・用語集へのリンク・PC→スマホの QR・一覧の区画へ飛ぶ札。受賞・事例集は確かめられなかった。
- **画面の型**：地 #f8f3ea に白 #fefefe の紙（角 12px・内 40px、PC は本文 744px＋間 20px＋右の柱 336px の 1100px）。紙と紙の間 16px、記事は材料・作り方・ポイント・作ってみた！・質問をそれぞれ別の紙に。ヘッダー白 80px・影 0 0 6px rgba(160,131,91,.3)。
- **記事の頭**：分類の札（60×20・12px 700・白／rgba(255,172,91,.8)）→ 題 h1 28px／44.8px 700 #462416（SP 20px）→ 写真 500×500・角 6px（SP 390 全幅、LCP 804ms／964ms）→ お気に入り 500×52（数入り）→ 行動5つ（スマホで見る・シェア・印刷・埋め込む・メール、13px 700）→ 時間の札「20分」13px 700・地 #eee7dd＋「目安。コンロでの加熱時間を含みます。」15px／24px → 説明の吹き出し（1px #eeddc5・角 4px・内 10px・15px／24px、下に 10px の三角のしっぽ。SP ではしっぽの下に料理家の箱）。日付は紙の下の右に「更新日」「投稿日」13px。
- **材料**：h2「材料」20px／32px＋「（3〜4人分）」15px 400。ul＞li flex・内 14px 0・16px／25.6px・下 1px #eeddc5（白地 1.33:1）。組の列 40px（印 12px 700）・名前 calc(50% − 16px)・量 40% 右寄せ。SP は内 12px・15px。材料の後に「! 安全に料理をするための注意事項」13px（橙の丸 18px）。人数・単位の切り替え・チェック無し。SP の材料の見出しは y＝2,084px（844px の 2.5画面目）。
- **手順**：ul（ol でない）＞li・内 14px 0・下の線（最後は無し）。番号 span 26×27・地 #462416・白 12px 700・角 4px、列 40px。写真 100×100・角 4px を文の右（SP は 326×326 を文の下）。文の中の料理用語を /wordlist/細切り へ（1px dashed rgba(70,36,22,.5)・下 2px）。材料と作り方の紙の間に 300×250 の広告2つ。
- **読みもの**：題の上に「公開日」「更新日」の札（13px 700・白／#462416）と日付。リードは地 rgba(70,36,22,.1)・内 20px・右上に 15px の折り返しの角（border の三角）。本文 632px・16px／28.8px・段落の下 16px。h2 24px／38.4px・下 4px #ffedb6 に ::after で左 20% の #ffc500、h3 20px／30px・左 5px #ffc500。保存のボタン 400×62＋桃 #ffcdcd の吹き出しを頭と終わりに2回。目次無し（h2 に scroll-margin-top 80px はある、id 無し）。
- **記事の終わり**：レシピはポイント → 料理の基礎のスライド → レシピID・更新日・投稿日 → 作ってみた！の投稿（500×50・角 50px）→ 質問（編集部への問い合わせ）→ パンくず2段。右の柱は料理家（写真・Artist の札 #ff828d・プロフィール／レシピ一覧）と「いま見ているレシピで夕飯が決まる！」の献立の誘い。次の1本の大きな導線は無い。
- **一覧**：h1 24px／40.8px、説明の面。区画へ飛ぶ札6（a・高さ 44px・角 50px・#f5a000・白 14px・#section-0〜5、SP は2列）。人気4本は地 #fff9e2・1px #eeddc5・角 6px で、小見出しに蛍光ペン（linear-gradient(transparent 65%, #ffef87 65%)・15px 700 #744b3b）。区画の h2 20px・下 4px #462416、カードは3列・写真 203×203、写真の下端に「作ってみた！ 38件」の帯（12px 700・rgba(65,33,10,.6)）、題 15px／21px 700 を 3行（63px）で止める。最後に切り方の札15（料理の基礎へ）。区画ごと6本で、全件の一覧もページ送りも無い。SP で区画の札を押すと全画面広告（#google_vignette）が先に出た。
- **広告と同意**：PC は下に固定 1440×90。SP は上のアプリの誘い 54px＋下のアプリ 40px＋下の広告 116px＝390×664 の 32%。CLS PC 0.0026・SP 0.0017（枠を先に取る）。Funding Choices を読むが窓は出ない。PR の札 白／#9bce00 1.87:1。
- **データ**：Recipe（recipeIngredient・HowToStep 4・画像4種・cookTime／totalTime PT20M・author Person・LikeAction）と BreadcrumbList（2段）。recipeYield "0人分"、datePublished "2026-11-19 07:11:04"（T・時差無し）、手順の text に a タグ。コラムは Article（ISO・+09:00）に加えて中身の無い Recipe、一覧も ItemList と Recipe。og:type は website。ダーク 0・reduced-motion 0・:focus-visible 0。「スマホで見る」の QR の窓（360×371・閉じる #966233）は Esc で閉じない。
- **色と文字**：変数 67個、上位は --baseBrown #462416 135・--yellowL #ffc500 84・--orange #f5a000 62・--borderColor #eeddc5 48・--baseBrown-opa1 43・--lightBrown #966233 36。#462416 は白 13.78:1・地 12.46:1、白／#f5a000 2.12:1（主なボタン全部）、ナビの #a0968f 2.89:1。書体はヒラギノ角ゴ Pro → メイリオ（Web フォント 0）、html 62.5% の rem で 1.6rem ×220・1.4rem ×212。
- **動き**：all .2s ×190（かざすと opacity .7〜.8）、all .6s ease-in-out ×15、ラジオとチェックの印 transform .4s cubic-bezier(.45,1.8,.5,.75)。:hover 419 の多くを @media (hover:hover)（148）の中に。keyframes 25（窓の fade・アプリの slide-up .5s）。
- **重さ**：measure.js PC top 2.80MB／list 7.93MB／article 12.79MB／long 15.94MB（SP 2.31／8.36／9.90／8.31MB）。article PC の全部込み 11,378KB・766応答・160ホスト・自社 1,809KB（16%）。JS 11,207KB（prebid を2版・apstag 2回・yads 5回）、画像は AVIF で 156KB。トップは広告を読まず 86リクエスト。

### キャンプ飯（LOGOS・https://www.campjo.com/campmeshi ・2026-11-23 計測）
PC 1440×900 / SP 390×844。見たページ：トップ（/campmeshi・278本）、分類「メイン料理」（/campmeshi/recipe/3・105本）、ふつうのレシピ（/campmeshi/290・材料19行・手順5＋完成・高さ 8,127px）、長いレシピ（/campmeshi/241・材料33行・手順14＋完成・14,607px。103本の手順の数を数えて一番多いもの）。アウトドア用品の会社の自前の CMS（jQuery・Swiper）。同意の窓は出ない。選んだ理由：黄の額縁と鉛筆画・手順を追う縦の点・材料と使用アイテムの2列。Web Design Clip に載っている。受賞は確かめられなかった。
- **額縁**：#wrapper に border 15px #ffff01（SP 10px）、ヘッダーは白 112px（SP 64px）・下に 1px #000、右上に同じ黄の 64×64 のメニュー。足もとも黄。色は黒・白・黄の3つで、黄は面にだけ使い字には使わない（黒／黄 19.56:1）。
- **記事の頭**：中央に「#0290」12.8px 700 → 題 h2 27.2px 700 → 副題 12.8px 700 → 札（span・1px・角 3.2px・内 4.8px 12.8px）→ 写真 987×658・角 3px。日付・時間・書き手は無い。人数は材料の見出し「材料（3人分）」だけ。
- **材料｜使用アイテム**：987px の箱・上下 2px・左右の間に 1px の縦線、左右 444px。見出し 18.72px 800・中央・上下 18.72px・下に 2px dashed。材料は div を並べ「キャベツ…３枚」と名前と量を「…」でつなぐ（16px・行 22px、組は「〈肉団子〉」の行）。使用アイテムは店の商品ページへ、下に「※このページの後半にも…」9.6px を #productsarea へ。箱の左上の線に鉛筆画 125×99 を −30px 重ね、右下にトングの絵。SP は1列。
- **手順**：section#stepN ごとに 写真 761×508（3:2・角 3px）→ 文の箱（左 32px・上 16px）→「Step N」h3 18.72px 700 下線 → 文 p 14.4px・行の高さ normal（20px）。手順の間 48px、section の padding-top 112px／margin −112px で固定ヘッダーの分を飛び先で空ける。完成は id="complete" の「Complete!」。ol 0。SP は写真 333×222・文の箱の左 0。
- **縦の点（目次）**：#cd-vertical-nav を fixed・left 40px・top 50%。window.onload で section の数だけ li＞a href="#stepN" を足し、最後に COMPLETE。点は 17px・1px #000 を scale(.6)、間に 1px×10px の線。いまの手順は a.is-selected で点 scale(1)・黒、ラベル「STEP 1」11.2px の opacity 0→1（transform .2s・background-color .5s）。scroll のたびに全 section の位置を測り、画面の真ん中がある section を選ぶ。押すと jQuery で 600ms 送る（# は変わらない）。手順14でも 367px の高さに収まる。SP は display:none。
- **記事の終わり**：PRODUCT 今回使用したロゴス製品（Swiper・カード 277×222・名前 14px・「￥4,565 (税込)」12px）→ 前後の2本（通し番号の前と後ろ、434×130＝写真 194×130＋番号＋題 14.4px 700、2本の間に 1px）→「一覧に戻る」150×42 黒 → 番組の宣伝 → 関連6本（3列 342px・.fadein で opacity と translateY 20px .5s）。
- **一覧と絞り込み**：札13（a href="#"・12.8px 700）を複数選ぶと JS が style に黒地を書く（aria-pressed 無し）→「検索」（div 175×44 黒）で POST /search、#recipelist を JSON から描き直す（+2KB・URL は変わらない）。「リセット」は #e9eaec。/recipe/3 のように分類を選んだ状態の URL もある。カード 3列 342px（写真 270×173・角 3px・#0303 12.8px・題 16px 700・札）、最初の6枚の後ろを「もっと見る」で全部出す（6 → 278）。写真のホバーは scale(1.1)・.3s cubic-bezier(.215,.61,.355,1)。件数・0件の文・並べ替え無し。
- **トップ**：鍋の鉛筆画（PNG 1531×1772・5,027KB を 766×887）・英字の題 OUTDOOR COOKING RECIPE・縦書きの「キャンプ飯。」（PNG）・黄の丸 160px「278 現在のレシピ数」（transition 1s cubic-bezier(.38,.01,.54,1.41)＝行き過ぎて戻る）→ RANKING（集計期間「11/10 〜11/23」・写真の右下に「RANKING 1」の札：白・2px の枠・上の縁だけ太い）→ 全レシピ。
- **広告と同意**：他社の広告 0。自社の宣伝は使用アイテム・PRODUCT・番組・会員。500px 送ると共有の黄の帯（PC 右端 80×192・SP 左下 176×59＝3%）。ABOUT の窓は Esc で閉じない。CLS 記事 PC 0.172・SP 0、トップ PC 0.183（img 45／374枚とも width/height 無し）。
- **データ**：JSON-LD 0（Recipe 無し）。BreadcrumbList の microdata だけ。og:title が同じ会社の別のサイトの名前（「…│まめ知識│キャンプ場ドットコム」）、og:image の URL の前に空白、og:type website。題が h2（h1 はロゴ）。画像 45枚：寸法 0・lazy 0・alt 無し 18。ダーク・文字サイズ 0。* に word-break:break-all（「キャン／プ飯」と語の途中で折れる）。
- **文字**：欧文 urw-din（Adobe Fonts）、和文は font-family に指定が無く端末の書体。ボタンだけ見出ゴMB31。大きさは rem と em が混ざって 10段（27.2・18.72・17.6・16・14.4・12.8・12・11.2・9.6px）。読み込むが使っていない garamond-premier-pro。
- **動き**：写真 scale(1.1) .3s、.fadein .5s、点 .2s／.5s、丸 1s の行き過ぎ、jQuery の送り 600ms。keyframes 0・prefers-reduced-motion 0・:focus 0・(hover:hover) 0。
- **重さ**：measure.js PC top 89.48MB／list 42.16MB／article 20.51MB／long 20.14MB（SP も同じ値：画像の出し分け無し）。全部込みの転送 article PC 21,517KB・95件・16ホスト（自社 72%）、top 91,810KB・382件。上位は Font Awesome Pro の all.min.js 4,990KB（使用0・gzip 無し・Cache-Control no-cache）、閉じた ABOUT の窓の絵 i_9.png 3,165KB と i_12.png 2,680KB を全ページ、Adobe Fonts の和文の動的分割 features=ALL 2.4〜4.0MB×2。トップは 278本の写真（600×400・約 340KB）を全部読む。

## 真似る型
見本7つ（King Arthur Baking・白ごはん.com・Great British Chefs・Ottolenghi・dancyu・Nadia・キャンプ飯）から。作るときの出発点。
- 記事の頭に「時間」を大きく置き、その横に要約を開くボタン（King Arthur Baking：HANDS-ON／BAKE／TOTAL TIME の欄、白ごはん.com：「調理時間：40分」19px 700＋「大まかな流れをチェック」）。要約は工程を2組（下ごしらえ／調理と仕上げ）・8行前後に縮める（白ごはん.com）。
- 工程を読みながら材料を見られるようにする。PC は材料の列を手順の横に（King Arthur Baking：材料 325px・手順の面 785px。固定はしない）、SP は右下の丸いボタン（60px）から下のシート（max 60vh）で呼び戻す（白ごはん.com）。作るときは PC の材料の列を sticky にする（2サイトとも固定していない）。
- 工程の中で、その工程で使う量をもう一度書く。文の中に書いて地の色で目立たせる（白ごはん.com：.bg 地 #fffadf）か、手順の下に枠で書き直す（Great British Chefs：550px の枠・11手順のうち8）。合計の量は使う手順ごとに割る（同：14本 → 7本と7本）。
- 単位の切り替えは材料の見出しの直下に置き、材料の列・工程の枠・工程の文の中の量を一度に替える。button 2つと aria-pressed で、選んだ側を覚える（Great British Chefs の Metric／Imperial は文の中が替わらず、Tab も届かない）。日本向けは「グラム ⇔ 計量スプーン」、粉と削り物は重さのまま。
- 材料名は、その材料の分類一覧へのリンクにする（Great British Chefs：21行中12）。書き手（シェフ）は題の下・材料の横・トップの「今週」の3か所に（同）。
- 材料は組に分けて印を付ける（白ごはん.com：● 具・○ 水・A 合わせ調味料。King Arthur Baking：Filling／Crust の組名）。工程では組の名前と量をもう一度書き、量を地の色で目立たせる（白ごはん.com：.bg 地 #fffadf）。
- 量はグラムを先に（白ごはん.com：「500g（3〜4個ほど）」、King Arthur Baking は「3 1/2 cups (397g)」の体積が先。日本向けはグラムが先）。
- 手順の文字はリードより大きく、段落の間を広く（King Arthur Baking：20px／31.2px、白ごはん.com PC：16px／26.88px・段落の間 21px）。SP でも本文は 16px を保つ（白ごはん.com SP の 14px は小さい）。
- 工程の写真はその節の直後に、表示の倍の大きさで揃える（白ごはん.com：元 448×298 を PC 195×130・SP 342×227、King Arthur Baking：1024×684 を 522×349）。番号は ol と counter（King Arthur Baking の丸 20px）。
- 一覧のカードは比率の箱で写真の寸法を決める（白ごはん.com：2:3・padding-top 148.333%、縦長に撮った別カット）。
- 保存の目安・時短のような使う人の条件を、分類の札と同じ形で題の下に置く（白ごはん.com：「冷蔵で3〜4日保存可能」）。
- 手順の見出しのそばに、画面を消さない切り替え（Wake Lock）と、手順の写真の出し入れ（King Arthur Baking）。手順を1つずつ全画面で送る形にするなら、scroll-snap で1手ずつ・まだの手順は opacity .25・下に戻る／次へと進み具合の線（Ottolenghi の Follow Mode。入口のボタンを必ず出す）。
- 記事の頭は写真と題を 55:45 に割って画面の高さいっぱいに置き、題の下は「量・下ごしらえ・加熱」の時間の1行だけ（Ottolenghi：min-height calc(100vh − 帯)・題 56px・14px の3つ）。
- 材料は量の列を固定幅（80〜96px）にした2列で、砂色の面に。手順より短いときだけ sticky が効くので、面の高さと手順の高さを比べて決める（Ottolenghi：380px・top 40px）。
- 手順の番号は数字だけを細く色で（counter・22px 300）、手順の間は罫と 45px（Ottolenghi）。罫は白地で 1.3:1 以上（同 #f9f2ec は 1.11:1）。
- 一覧は大きな札（2列×2段）・縦長・正方形を混ぜ、間 30px（Ottolenghi：14枚に 2・4・8）。絞り込みと「もっと見る」は URL（?filter.〜・?page=2）に残す（同）。件数と aria-pressed は足す。
- 分類の入口を、ブランドの一色の面に白い切り絵の食材の札にする（Ottolenghi の Foodipedia：282×440）。

- 記事の頭は全幅の料理写真の下端に白い紙を食い込ませ（−80px・SP −30px）、紙の中に題・日付（数字の書体と色）・連載・リードを中央に積む。紙の幅は本文の箱と同じにする（dancyu：1000px・内 45px 50px）。
- 材料の面は生成りの地に、上の中央へ半透明のテープ（rgba(0,0,0,.12)・74×35・上 −20px）を貼って「台所に貼った紙」にする。左の見出しの列（184px・アイコン・人数）と右の表を点線で分ける（dancyu：#f5efda・2px dotted #ccc）。組と注は文字の「├」「＊1」で描かず、組の見出し行と注の番号の対応で組む。
- 手順の番号は四角の枠（40×40・2px・数字の書体）と見出しの語を並べ、見出しの上の罫を枠からのばす（dancyu）。数字は ol の counter で出す。
- 読み進めたら、上に「連載名｜題」の細い帯（50〜60px）を出し、上へ送ると隠す。出すのは IntersectionObserver で記事の頭が見えなくなったときにし、待ち時間は置かない（dancyu は 700px と 1秒の setTimeout を毎回の scroll で）。
- 一覧のカードの日付は写真の右の外に縦書きで、色は分類の色（dancyu：rotate(90deg)・Lato 13px #cc0700）。札の下に 2px の色の罫を引き、かざすと札の地をその色に・写真を 1.1 倍（.5s／.8s・cubic-bezier(.23,1,.32,1)）。SP の日付は 12px 以上に（dancyu は 9px）。
- 記事の終わりは「同じ連載の他の回」を料理写真の全幅の帯に載せ、傾けた札（−5°）と連載名を大きく、カード3枚を帯から下へはみ出させる（dancyu）。教える人（料理家）と書いた人（編集者）を別の箱で並べる（同）。

- 時間の札の横に「何を含む時間か」を1文で（Nadia：「20分」13px 700・地 #eee7dd＋「目安。コンロでの加熱時間を含みます。」）。白ごはん.com の「調理時間」・King Arthur Baking の HANDS-ON／TOTAL と並べ、合計の時間を1つ出すなら中身を書く。
- リード（料理の説明）は作り手の言葉にし、吹き出しのしっぽを作り手の名前へ向ける（Nadia：1px #eeddc5・角 4px・10px の三角を ::before と ::after で重ねる）。
- 材料は「組の列 40px・名前 50%・量 40% 右寄せ」の3列、行は内 14px と 1px の線だけ（Nadia）。量の列を広く取ると「大さじ3（なくてもOK）」まで1行に入る。SP で材料の見出しが2画面を超えないよう、材料の前には時間と説明だけを置く（Nadia は 2.5画面目）。
- 手順の文の中の料理用語（細切り・面取り）を、点線の下線で用語の説明へつなぐ（Nadia：1px dashed・字の色の 50%・/wordlist/）。
- PC で開いたレシピを台所のスマホへ渡す QR のボタンを、写真の下の行動の列に（Nadia の「スマホで見る」・360px の窓）。dialog・Esc・戻り先を付ける。
- 食材の一覧は、頭に「区画へ飛ぶ札」（高さ 44px・SP は2列）を並べ、区画を 6本ずつで止める。カードの題は 3行の高さで止めて下の行をそろえる（Nadia：15px／21px・63px）。写真の下端に作った人の数の帯（12px 700・rgba(65,33,10,.6)）。

- 手順の数だけ点を縦に並べて左に固定し、いまの手順を示す（キャンプ飯：left 40px・top 50%、点 17px を scale(.6)、いまの点は scale(1)・黒、ラベル「STEP 3」11.2px を opacity で出す、点の間に 1px の線、手順14でも高さ 367px）。拾うのは IntersectionObserver（rootMargin −50% 0 −50% 0）で aria-current="step"、SP は下に「STEP 3／7」の帯と進み具合の線（キャンプ飯は SP で消す）。King Arthur Baking・Great British Chefs・dancyu は長い手順でも目次も印も無かった。
- 材料の横の列に「使う道具」を同じ箱で並べ（キャンプ飯：987px・上下 2px・真ん中 1px・見出しの下 2px dashed）、手順の後に同じ道具を名前と値段で並べ直す（PRODUCT・「￥4,565 (税込)」12px）。店の宣伝が読む流れの中に入り、他社の広告を置かずに済む（キャンプ飯は他社の広告 0）。
- 手順は「写真 3:2 → Step N の下線 → 文」で、文の箱を写真の左から 32px 入れる（キャンプ飯：写真 761×508・Step 18.72px 700）。文は 17px 以上に（同 14.4px は小さい）。
- 全部の回に通し番号を振り、記事の頭・カード・前後の2本で同じ番号を出す。記事の終わりの前後は番号の前と後ろ（キャンプ飯：「#0290」、#0289｜#0291 の 434×130・間に 1px）。
- 画面を一色の 15px の枠で囲み（SP 10px）、右上のメニューと足もとを同じ色の面に。色は黒・白・その1色だけで、その色を字に使わない（キャンプ飯：#ffff01、黒／黄 19.56:1）。
- 料理の写真と別に、道具を鉛筆で描いた絵を、箱の線や見出しの角に重ねる（キャンプ飯：材料の箱の左上 125×99・右下のトング・一覧の題の右の鍋 215×206）。絵は小さく表示の2倍まで（キャンプ飯のトップの鍋は 5,027KB の PNG）。
- 人気の回には集計期間を書き、写真の角に番号の札を差す（キャンプ飯：「集計期間： 11/10 〜11/23」、白・2px・上の縁だけ太い札）。

## 反面教師
- 単位のつまみが div role="button"・tabIndex -1、手順の文の中の量と温度は替わらない、換算が「7 1/16 oz」（Great British Chefs）。
- 手順18・SP 15,224px で目次もいまの手順の印も無い。手順を div の番号で書き ol 0（Great British Chefs）。
- 同意の窓が 494社を並べて全体をぼかし、閉じても SP の下に 110px の広告（ヘッダーと合わせて 22%）（Great British Chefs）。
- 自社の本の帯を1本に3回、SVG の object を9つ（Great British Chefs）。
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
- Follow Mode（手順を1つずつ・Wake Lock）を全レシピに配るのに入口のボタンが無く、手順も入っていない（Ottolenghi）。
- 分類の一覧が全レシピ 643件の JSON（470KB）を取ってから絞り、カードを HTML に1枚も配らない（Ottolenghi）。
- Recipe の JSON-LD が6本中3本で JSON として読めない（末尾のカンマ・生の改行）、時間と量が無い（Ottolenghi）。
- 同意の最初の面に Reject が無く、記事を開いて6秒で全面の窓を2枚重ねる（写真 4.2MB）（Ottolenghi）。
- SP の手順 15px／19.5px（1.3）・300、手順の罫 1.11:1（Ottolenghi）。
- 本文 PC 15px／24px を 1000px の箱で 1行 約66字、SP 14px。材料 SP 12px・一覧の縦書きの日付 SP 9px・ページ送りの数字 SP 15×21px（dancyu）。
- 手順の番号を h2 の中の i で描き ol 0、長いレシピでも目次・いまの手順の印が無い（dancyu）。
- Recipe の JSON-LD に手順が無い回がある（article）。時間・author 無し、材料に「&emsp;├」「★」の記号がそのまま入る、image の URL の末尾に空白（dancyu）。
- 写真を PC 用と SP 用の2枚とも読む（is-pc／is-sp を display で隠すだけ）。トップ 21.29MB の 94% が JPEG（dancyu）。
- SP に広告を4枠、高さが決まらず CLS 0.261。画像 38枚中 31枚に寸法無し（dancyu）。
- 一覧の題と要約を HTML の時点で「...」で切る。カード1枚に a が2つで Tab が倍、2ページ目の canonical が1ページ目（dancyu）。
- 主なボタン（会員登録・レシピ一覧・作ってみた！・区画の札）が白／#f5a000 で 2.12:1、分類の札 1.64:1（Nadia）。
- SP の固定の帯が 390×664 の 32%（上のアプリ 54px・下のアプリ 40px・下の広告 116px）。区画の札を押すと全画面広告が先に出る（Nadia）。
- Recipe の recipeYield "0人分"・日付に T と時差が無い・手順の text に a タグ。一覧とコラムも Recipe と名乗る（Nadia）。
- 手順が ul と span の番号で ol 0。QR の窓が Esc で閉じない・:focus-visible 0・reduced-motion 0（Nadia）。
- レシピ1本で 160ホスト・転送 11.4MB、自社は 16%（Nadia）。
- トップに全レシピ 278本のカードを書き、写真を全部読んで「もっと見る」で隠すだけ（キャンプ飯：89.48MB・JPEG 64.9MB）。
- 使っていない Font Awesome Pro 4,990KB を gzip 無し・no-cache で全ページ、閉じた窓の絵 5.8MB の PNG を全ページ（キャンプ飯）。
- 手順の文 14.4px・行の高さ normal、注記 9.6px、* に word-break:break-all で語の途中で折れる（キャンプ飯）。
- 手順を追う縦の点を SP で消す。Recipe の JSON-LD 0・題が h2・材料が div・手順が ol でない・日付も時間も無い、og:title が別のサイトの名前（キャンプ飯）。
- 分類の札と「検索」が a href="#" と div、選んだ札は style の書き換えだけ、結果は POST で URL に残らず件数も出ない（キャンプ飯）。
