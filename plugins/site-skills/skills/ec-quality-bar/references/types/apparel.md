# アパレル・靴（服、靴、バッグ、アクセサリー）

## この下位タイプで特に見ること
サイズ表と在庫の組み合わせ、着用写真（モデルの身長）、色違いの見せ方、詳細の頭に編集の写真を置くか（置くなら購入の列が最初の画面から落ちないか）。鞄なら、何が入るか（A4・PC のインチ・ボトル）を絞り込みと詳細の両方に出すか。シャツなら、身幅と丈（袖丈）を別の軸で選ばせるか、品切れの組み合わせをどちらの軸で見せるか。値段の中身（原価・工程・取引先）を詳細に出すか

## 見本の実測

### Allbirds（https://www.allbirds.com/ ・2026-10-24・靴・US・Shopify）
- **一覧**（/collections/mens）：PC 4列・SP 2列。カードは画像・商品名・色名・価格・色スウォッチ（SPは5個＋「+7」）・「11 sizes」。39件をページ送りなしで1ページに出す（img 83枚中69枚が lazy）。並べ替えは初期値 Featured、全9種。
- **絞り込み**：5群（サイズ26・色10・価格5段・種類8・素材7）。PC は一覧の上に全群を開いた横長パネル、チェックした瞬間にページごと再読み込み（約2MB）。SP は全画面フォームで、選んでも通信せず「APPLY FILTERS」で反映。選んだ条件は一覧の上にチップで並ぶ。サイズ群の上に「ハーフサイズの人は近い整数サイズも選んで」の一文。
- **カードから買う**：SP の「ADD」で下から窓が出て、色5つとサイズ表をその場で選べる。
- **詳細のファーストビュー**：PC は名前・価格・「+ FREE SHIPPING」・色・サイズ表・カートボタン・「$100以上送料無料」まで入る。SP は名前と価格を画像の上に置き、画像（1:1、点5つのスワイプ）と色の一部まで。SP のカートボタンは画面下に固定で、スクロールすると現れる。
- **色**：直径36pxの丸ボタン。アッパー色とソール色を斜めに2分割して塗る。素材ごとの群（Tree 13 / Jersey 3 / Stripe 1）に見出し。色ごとに別の商品URL。
- **サイズと在庫**：14個の四角。在庫切れは斜線＋薄く、ただし押せる。押すとボタンが「NOTIFY ME」に変わる。サイズを選ぶと、そのサイズが無い色のスウォッチにも斜線。未選択のボタンは「SELECT A SIZE」で押せない。選ぶと URL に ?size=…&variant=…。
- **カートに入れる**：ページは移らず右からドロワー（PC 約530px、SP 全画面）。見出しに「あと$86で送料無料」、太い進捗バー。数量を増やすと約90msで金額とバーを言い直す。数量1のとき − がごみ箱になる。送料の行は無料になったときだけ「$5.00（打ち消し）FREE」。
- **買う前の不安**：送料は詳細の中に2か所（0手）。返品の規約はフッターの「Refund policy」の窓（30日）で、詳細本文には無い。「Returns/Exchanges」ページは注文番号で入る返品手続きの窓口。
- **データ**：詳細は ProductGroup（size・color、hasVariant 180件）＋ AggregateRating（4.2・139件）。一覧は CollectionPage（numberOfItems 148 で画面の39件と不一致）＋ FAQPage。BreadcrumbList は無い。alt の無い img は0枚。
- **重さ**：top 13.6MB / list 16.7MB（HTMLだけで3.9MB）/ item 14.5MB / 返品窓口 16.8MB（PC）。JS が毎ページ約8.6MB。

### Tracksmith（https://www.tracksmith.com/ ・2026-10-28 計測・ランニングウェアと靴・US・Astro＋Shopify）
- **位置づけ**：ボストンのランニングの店。Astro の画面に Shopify の購入手続き（checkout.tracksmith.com）。ecomm.design に掲載。白の地・紺 #0a1e32・灰 #6c7884・金茶 #857151 の1色だけが彩り（主のボタン・告知の帯・件数・星・選んだ枠）。
- **一覧**（/collections/men）：PC 3列（267px・列の間 80px、左に絞り込みの列 240px）・SP 2列（153px・12px）。写真の枠 3:4（地 #F8F8F9 に平置き 251×251）→ 上の中央に札（NEW STYLE・MADE IN USA・LIMITED EDITION など 10px の大文字）→ 色の丸 24px（PC 8色まで、SP 4色＋「+2」）→ 名前 19px（SP 16px）→ 1文 13px → 星と件数 → 値段 19px → QUICK BUY（SP は写真の右下の丸）。79枚を1ページ（画像 173枚中 164枚 lazy）。「145 RESULTS」と出すがカードは79枚で、スクロールで URL だけ ?page=9 まで進む。ホバーで着用の写真を opacity .1s で重ね、平置きは scale 1.035・.5s。
- **絞り込み**：6群（CATEGORY 5・STYLE 19・COLLECTIONS・SIZE〔SHOE SIZE／APPAREL SIZE／ACCESSORIES の見出し〕・COLOR 色の点つき・MATERIAL）。**選んだ瞬間に反映**、ページは読み直さず URL に ?color=yellow&style=tees、件数 145→19→3。結果の上に「TEES ×」「BROWN ×」と CLEAR、群の名前に「STYLE (1)」、ボタンに「HIDE FILTER (2)」。**色で絞るとカードの選ばれた色の丸と平置きの写真がその色に移る**（Yellow で Harrier Tee・Van Cortlandt Tee・Session Tee が黄に）。並べ替えは Recommended 初期値の5種、0KB で URL に残らない。SP は全画面に CLOSE と金茶の APPLY（件数を言わない）。0件は札と「0 RESULTS」だけで商品の欄は白い。色に件数が無く、0件になる色も選べる。
- **詳細のファーストビュー**：Van Cortlandt Tee は最初の画面が全面の着用の写真だけ（PC 778px・SP 804px）。名前（34px／SP 24px）y=1115／1317、値段 y=1251／1455、ボタン y=1505／1738。靴の Eliot Runner は写真の段が無く、名前から「SELECT A SIZE」まで最初の画面に入る（品ごとに付け外し）。
- **色とサイズ**：色の丸 36px（SP 40px）が7つ、上に「COLOR: NAVY/IVORY」。押すと 0.15秒で主の写真と小窓が替わる（3→4枚）、URL は変わらない。サイズは 50×32 の丸い枠（枠 1px #ced2d6、選ぶと金茶）、選ぶと URL に ?sku=MT21303NAW、ボタンが「SELECT A SIZE」（押せない・opacity .2 で白の文字 1.28:1）→「$80 — ADD TO CART」。
- **品切れ**：Black の L・XL だけ。**斜線で残して押せる**。押すとボタンが消え、「This item is out of stock. Please enter your email address and we will notify you when it is back.」とメール・Or・電話の欄。入荷の時期は書かない。
- **着用の目安**：SIZING & FIT に5人「MATTHEW IS 5'9" AND WEARS A MEDIUM」など、レビューに RUNS SMALL — RUNS LARGE の目盛り。靴は「All Size Options are Displayed in US Sizing.」の一文。
- **カートに入れる**：入口は3つ（詳細のボタン・カードの QUICK BUY の窓 1060×690・固定のボタン）。どれもサイズを選ぶと type=submit になり、flow.js の止めで入れた後は画面で見ていない。JS では、入れると「JUST ADDED」の小窓（4秒・指を乗せると止まる・スクロールで閉じる・ドロワーが開いていれば出さない）。**固定のボタンは購入の列を過ぎてから出し**（IntersectionObserver、SP 390×74 の帯に 324×40・PC は右下 295×142 の札）、**サイズ未選択で押すと購入の列へ smooth で戻す**（StickyATC の scrollToProductPanel）。
- **カートのドロワー**：カートの印で PC は右に幅 840（transform .4s cubic-bezier(.76,0,.24,1)、約0.41秒）、SP は全画面。空のときから「ADD $200 TO YOUR CART TO RECEIVE FREE SHIPPING.」とバー、「30-DAY RETURNS & EXCHANGES」、支払いの印8つ、おすすめ4枚。目標は2つまで持てる作り（cartTotalThreshold）。/cart は 404。
- **買う前の不安**：$200 の送料無料は告知の帯（3つを矢印で送るうちの3つ目）・フッターの上の帯・ドロワー。**$200 未満の送料（米国 $10〜）は help.tracksmith.com の記事だけ（詳細から3手）**。返品はフッター → 案内（1手）：30日・米国 $8 の定額・海外 $25 相当・セール品は不可、靴は「100マイルか30日の早いほう」。詳細の購入の列に送料・返品の言葉は無い。
- **データ**：詳細は Product が1つ（Offer 1つで OutOfStock、別の SKU）、AggregateRating（4.75・106）は読み込んだ後にレビューの部品が足す。BreadcrumbList もパンくずも無い。h1 が3つ。一覧・トップ・案内は JSON-LD なし。
- **重さ**：PC top 5.67MB / list 10.6MB（HTML だけで 3.6MB）/ item 7.09MB / guide 4.02MB（SP 4.81 / 9.83 / 6.49 / 4.02MB）。毎ページ accessiBe 891KB とカートのおすすめの API 528KB（カートが空でも）。JS は約2.3MB で、写真は avif と webp。
- **見た目**：見出しも本文も SainteColombe（細いセリフ、300 の 34〜48px・字間 −1〜−2px、本文 16px／24px）、ラベルとボタンは akzidenz-grotesk-extended の大文字 10〜12px・字間 1〜1.2px（10px を CSS で46回、SP のトップは本文の32%が13px未満）。動きは cubic-bezier(.4,0,.2,1)（99回）と .3s、ヘッダーは top .5s cubic-bezier(.85,0,.15,1)。prefers-reduced-motion は Cookie の帯の1か所。

### 土屋鞄製造所 公式オンラインストア（https://tsuchiya-kaban.jp/ ・2026-10-31 計測・革の鞄と小物・日本・Shopify テーマ Prestige 10.0.2）
- **位置づけ**：東京・西新井の工房から始まった革の鞄の店。Shopify の公式の導入事例に掲載。白の地・墨 #222・主のボタンだけ藍 #004b87、パンくずと店の在庫の帯は #efefef。見出しは秀英明朝、本文は秀英角ゴシック銀（Adobe Fonts）、和文に字間 1.4〜1.6px。全国14店。
- **一覧**（/collections/backpack）：PC 4列（219px・列の間 60px、左に絞り込みの列 240px）・SP 2列（180px・10px）。写真 1:1 の切り抜き → 名前 12px → 価格 16px（SP 14px）・字間 1.6px → 色の丸 22px。札は「予約販売」「売り切れ」11px。42品を1ページ（画像 105 枚中 89 枚 lazy）、**件数の表示なし**。指を乗せると2枚目の**内装の写真**（alt「ダークブラウン／内装」）を opacity .1s で重ねる。カードの丸を押すと写真だけ替わり URL は不変。一覧の下に、全ファセットと件数のリンクを2列の行でもう一度並べる。
- **絞り込み**：10群。**収納サイズ（A4ファイル 3・A4クリアファイル 5・B5クリアファイル 5・A5手帳カバー 5・600mlペットボトル 5・長財布 5）と PC対応サイズ（15inch 6・14inch 32・13inch 38・iPad mini 40）**、PCポケット・防水の切り替え、色の丸 34px（13系統、丸に名前なし）、価格のつまみ。PC は選ぶたびに一覧のセクションだけ取り直し（約1.1MB、URL に filter.v.availability=1）、上に「× 鞄カテゴリー: 防水バッグ」と「全てをクリアする」、ほかの値の件数も数え直す。SP は全画面のドロワーで選んだ瞬間に反映し、藍の「検索」は閉じるだけ（件数を言わない）。並べ替え9種、初期値「オススメ」。
- **詳細のファーストビュー**：PC は名前（18px）y=238・価格 y=310・在庫の1語 y=354・色 y=427・ラッピングの select・カートに追加 y=593（413×52）・店舗の在庫の帯 y=678・返品の1行 y=755 まで最初の画面（900px）に入る。**SP は写真 390×390 と33枚の小窓の列（74px）で、名前 y=602・ボタン y=941 と最初の画面（844px）から落ちる**。
- **色と在庫**：丸 34px・10px あき、上に「Color: 【数量限定色】シェードウォームグレー」（品の色の名前）。品切れの色は**斜線で残して押せる**。押すと「在庫なし」#a82020、ボタンは押せない白の「売り切れ」（藍の枠）、下に藍の「入荷お知らせ登録」413×48。窓はメールの欄と、**最初からチェックの入ったメールマガジンの登録**。入荷の時期は書かない。残りわずかの色は「残りわずか」#ed8a00（白に 2.55）。色を選ぶと購入の列の HTML を取り直して差し替え（replaceState で ?variant=）、名前が替わるまで PC 1.0〜2.0秒・SP 1.0〜2.6秒、待つ間の印なし。
- **店の在庫**：カートのボタンの下に「お取り扱い店舗の在庫をチェック」413×45。開くと14店「西新井本店 - 在庫 - ×」…と注意4行、赤 #990000 で「最新の在庫状況については、ご利用店舗に直接お問い合わせください」。在庫は最初の HTML に入っていて開いても通信しない。品切れの色では帯が消える。
- **カートに入れる**：テーマの cartType が "page" で、成功すると /cart へ移る（theme.js。テーマには CartDrawer と FreeShippingBar があるが使っていない）。固定の帯は購入のフォームが上へ抜け、フッターが見えない間だけ（IntersectionObserver、PC は scrollY 1,000）。PC 1440×97 に写真・名前・価格・「購入する」150×48、SP 390×84 に 350×44 だけ。「購入する」は名前の位置へのアンカーで、カートには入れない。
- **買う前の不安**：カートのボタンの 110px 下に「到着後7日以内・未使用であれば返品可能」（ご利用ガイド #refund へのリンク）。**送料（750円、沖縄 1,600円、50,000円以上無料）は詳細にもカートにも無く**、ご利用ガイドの中だけ（詳細の y=3,544 の「配送について」から1手）。出荷は確認の翌営業日（朝 8:00 締め）。ナビの「永久サポート」に、品ごとの修理の参考価格（ファスナー交換 41,000円ほど など）と預かりの目安（2週間〜4ヶ月）。
- **データ**：詳細は ProductGroup（7色、色ごとに gtin・availability）＋同じ @id の Product（AggregateRating 5.00・2件）＋ BreadcrumbList。一覧・カート・案内も BreadcrumbList。写真の alt は色の名前だけ。
- **重さ**：PC top 38.62MB / list 20.10MB / item 29.62MB / cart 14.11MB / guide 28.93MB（SP もほぼ同じ）。**主因は和文の Web フォント**：Adobe Fonts の動的サブセットが 5.3〜13.9MB（1本 3〜7MB）、アイコン数個のための Material Symbols（可変4軸）3.9MB。トップは Klaviyo の画像 7.5MB。jQuery 3.6.0 を2回読む。

### ASKET（https://www.asket.com/en-us ・2026-11-05 計測・服（シャツ・ニット・デニム）・スウェーデン・自社の React＋Centra）
- **位置づけ**：ストックホルムの服の店。1つの定番の服を版を重ねて直す（The Oxford Shirt は 2016 / 1.5）。地 #fff・文字 #000 と黒の透明度の段（.04・.15・.3・.54・.8）だけで組み、書体は Neue Haas Grotesk Display 45 Light と Text 55 Roman の2つ（13.5px・16px・22px・28px、字間 -0.01em）。
- **一覧**（/en-us/mens/shirts）：PC 4列（345×566、写真 345×518 の 2:3、間 12px）・SP 2列（180×373）。型ごとの h2（The Oxford Shirt 6・Flannel 4・Denim 2・Overshirt 5・Wool Overshirt - Coming Soon 3）の下に色ごとに1枚。カードは左に名前・値段、右に色見本3つ（8px）＋「+3」と色名（灰）。指を乗せると着用 → 平置き（opacity .2s cubic-bezier(.35,0,.15,1)）。20枚を1ページ、img 123枚のうち 107枚 lazy。件数の表示なし、並べ替えなし。
- **表示の切り替え**：View: 2（702px）・4（345px）・6（226px、名前と値段を消す）・List（1416px の行に Garment・Color・Price・Material・Released / Version）。URL は変わらない。SP には無い。
- **絞り込み**：「+ Filters」で右から 791px（SP 全画面）。6群（Categories・Colors〔Blue 8・Green 4 …の件数〕・Sizes〔XS-Short〜XXL-Long の18〕・Material・Function〔Building Blocks 13・Occasional Pieces 7〕・Season）、下に Clear all filters／See all results（件数なし）。**Blue を選ぶと URL に ?filterColor=Blue が付くだけで、20枚のまま・チェックも付かない**（2026-11-05 の Chromium で2回。サーバーの HTML も同じ）。
- **詳細のファーストビュー**：左右半分。PC は名前（h1 22px）y=150・値段・3行の説明・色（14×14 の生地の写真、alt=""）y=656・開く行4つ（Reviews 4.7 / 5.0 (831)・Size & Fit・Shipping & Returns・Store Availability、各 647×33）・Select size 647×41 y=841 まで最初の画面（900px）に入る。SP は写真 390×585 の下に名前 y=673、Select size は購入の列の中で sticky（y=779、列が上へ抜けると消える）。
- **寸法の二軸**：Select size（XS〜XXL の6）と Select length（Short・Regular・Long、着丈 ±3cm・袖丈 ±2cm）を右から 791px のパネルで選ぶ。身幅を選ぶと、その身幅で品切れの丈だけ打ち消し線（灰）＋黒の「Notify Me」（白のオックスで XL → Short・Long、L → Long）。身幅の側には印が出ない。選ぶまで「Add to cart」は #b2b2b2 に白（2.12:1）で、何を選ぶかを言わない。role="radio" なのに aria-checked が false のまま。
- **入荷通知**：Notify Me で同じパネルが「Notify me / Available: Spring 2027」とメールの欄1つ・ボタン・**未チェック**のメルマガの1行に替わる。
- **店の在庫**：開く行の4行目「Store Availability」で身幅と丈を選び直すと、3店に In stock／Out of stock（XL-Long：通販0、ロンドンの Brewer Street に In stock）。寸法のパネルの Notify Me の横には出ない。ページの state に倉庫ごとの数（"1" が通販）。
- **カートに入れる**：ボタンの中に 14px の回る印 → PC 1.46秒・SP 1.64秒で同じパネルが「Added to cart」（品・Size M-Regular・色・値段）と View Cart（白・黒の枠）／Go to checkout（#333）に替わる。role="status" なし。
- **カート**：ページは無く、右のパネル PC 720px・SP 全画面。「− 1 ＋」で 1.23秒。Shipping・Sales tax は「Calculated in checkout」、送料無料（150 USD）までの残りを言わない。合計の下に斜体で「No other fees will be added at checkout or upon delivery.」と支払い・運送会社の印9つ。
- **買う前の不安**：帯（黒）で「関税込み」「Free shipping from 150 USD」「Always free exchanges」を回す。詳細の Shipping & Returns の1手で、DDP・支払い7種・返品30日（返品は 8 USD を引く、交換と店での返品は無料）。送料の金額は案内のページの Ingrid の部品だけ（FedEx Standard $15・3〜4営業日、DHL Express $20・1〜2営業日・13.37 kg CO2e）。
- **原価と工程**：詳細の下半分に工程の表（白のオックスで17行：取引先・国・最後に行った日 2026-07-22 など、分からない所は「Unknown (Turkey)」、取引先を押すと従業員 690人・月給 1,185 EUR）と原価の表（Assembly 16.2・Main Fabric 12.2・Trims 4.5・Transport 1、計 33.9 EUR、CO2 7.84kg・水 31.63l・電気 35.65kWh）。引き取りの券は Underwear 0〜Outerwear 25 USD の6段。
- **データ**：詳細に ProductGroup（variesBy size・color、hasVariant は色の5つだけ）・Offer 1つ・BreadcrumbList。AggregateRating なし。WebSite の SearchAction の target が「/en-usnull?search=」。トップに h1 が3つ。
- **重さ**：PC top 5.97MB / list 5.64MB / item 5.63MB / guide 6.04MB（SP 5.98 / 5.74 / 5.99 / 6.44）。JS 毎ページ約3.5〜3.8MB（自社のドメインから出す GTM 570KB・gtag 551KB を含む）、HTML 1.2〜1.7MB（うち __INITIAL_STATE__ 993KB に関連の品の全在庫）。写真は avif で item 199KB。書体は約85KB、和文の Web フォントなし。動きは cubic-bezier(.35,0,.15,1) と 0.2s・0.5s・0.8s の変数、prefers-reduced-motion は外部の相談の部品だけ。

### VEJA（https://www.veja-store.com/en_us/ ・2026-11-09 計測・スニーカー・フランス（米国版）・Salesforce Commerce Cloud＋Bootstrap 4）
- **位置づけ**：ブラジルで作るスニーカーの店。ecomm.design に掲載。地 #fff・文字 #000／#212529・灰 #888・帯 #4d4d4d に白、誤りだけ #d80000。Web フォント0本（Helvetica,-apple-system,Arial）、700 と 400、大文字を多く使う。サイズは男女共通の1列（W4〜W7.5・「W8 / M6」〜「W11.5 / M9.5」・M10〜M14）。
- **一覧**（/en_us/men）：PC 4列（346px・列の間 5px）・SP 2列（170px・10px）。写真 346×410 → 名前 11px 大文字 → 値段 14px。札・色数・星なし。36枚ずつ「LOAD MORE (36/297)」（0.485秒で 72/297・+2,072KB・URL ?page=2）、件数は一覧の頭に無い。img 159 のうち 144 lazy。右上で 4列 ⇄ 3列（463px）。**指を乗せると写真が上へ縮み（下端 約55px）、サイズ14の列（11px、品切れは灰）が出て、押すとその場でカートへ（1.10秒でドロワー）**。一覧の HTML 1,263KB（カードごとにサイズのボタンを埋め込む）。
- **絞り込み**：FILTERS 152×28 で右から 535px（SP 全画面）、transform .3s cubic-bezier(.66,.61,.35,1)。7群（SIZE 33〔靴下 36/40・ベルト 45 IN・O.S も混ざる〕・MATERIAL 6・COLOR 14〔文字だけ・件数なし〕・FAMILY 19・ACTIVITY 2・FASTENER 2・SORT BY 4〔初期の checked なし〕）。選ぶたびに Search-ShowAjax?…prefn1= を取りに行き「SEE RESULTS (297)」を言い直す（この URL は robots.txt の /*pref*1=* で、計測では止めた）。閉じた後のチップは無い。色の SEO 用 URL /men/f/black は 36/61。
- **詳細のファーストビュー**（ATLAS SUEDE EAGLE BLACK）：PC は左 770×765 の写真6枚、右に名前（30px／700／大文字）y=154・値段 25px y=195・色の見本 y=244・サイズ（101×30 の6列）y=381・ADD TO CART 629×40 y=531・送料無料の1行 y=589 まで 900px に入る。SP は写真 390×400、名前 y=555、ボタンは下の帯。パンくず・星なし。
- **色**：色ごとに別の商品。見本は品の写真 65×65（SP 105×105）、選ぶと下に 2px の黒、押すと 0.48秒でページを移る（選んだサイズは引き継がない）。色の名前は 13px #b3b3b3（2.10:1）。
- **サイズと在庫**：HTML の class で low-stock・sold-out。**PC の格子は「Low stock」を出さない**（7つが「あり」と同じ）。品切れは #888 の文字と枠（3.54:1）・斜線なしで押せ、押すと灰に塗られて黒の「NOTIFY ME」。選ばずに押すと「*Please select a size」11px #d80000、role なし。URL は変わらない。
- **SP**：最初から sticky; bottom:0 の 390×81 の帯に「SELECT A SIZE」350×40。押すと全画面のサイズの一覧（14行・約57px、右に「Low stock」と下線の「Notify me」）、選ぶと帯が「W4」と「ADD TO BAG」の2段。待ちの窓は Email＊・未チェックのニュースレター・JOIN THE WAITLIST、入荷の時期なし。
- **カートに入れる**：0.059秒で .frozen（見た目は変わらない）→ 0.746秒でドロワーが出始め → 1.019秒に右 535px で止まる（SP 0.778秒・全画面）。/cart は /?cartLayer=true のドロワー。中身：品・Size・数量・「Complete with」（紐 $10・靴下 $30）・Subtotal・Shipping・Tax（Calculated at checkout）・TOTAL（#f4f4f6 の地）・CHECKOUT。数量の＋は 0.58〜0.64秒、印なし。**送料は金額で出す**：靴下 $30 で $15・$90 でも $15（TOTAL $105）・$120 で Free。無料までの残りは言わない。
- **買う前の不安**：帯とボタンの下に「FREE SHIPPING AND RETURNS ON ALL ORDERS OVER $95」（#888 14px）。開閉 SHIPPING AND RETURN は「FEDEX Standard : 2 to 7 days」で金額なし（案内は $15・2〜5／4〜7営業日、Express $20）。返品28日・$95 以上で無料、交換はアカウントで store credit を選び注文し直す、店での返品不可、取り消しは4時間。
- **素材**：PRODUCT DETAILS に部位ごとの％（Atlas の Insole：Amazonian rubber 13%・bio-based E.V.A. 67%〔sugarcane 53%〕・organic cotton 11%・others 9%、Outsole：Amazonian rubber 50%・mineral silica 26%・synthetic rubber 5%・others 19%）と産地・なめしの段落。文の中の数で、表や図は無い。
- **データ**：詳細は Product と Offer 1つ（USD 260.00・InStock）。size・color・AggregateRating・BreadcrumbList なし。一覧は ItemList（297）。Campo のパンくずは MEN から入っても「HOME WOMEN」。alt は品番と向き（Lateral view）。
- **重さ**：PC top 6.61MB / list 5.94MB / item 6.44MB / cart 6.72MB / guide 3.51MB（SP 5.56 / 7.88 / 6.11 / 5.68 / 3.51）。毎ページ accessiBe 891KB・OneTrust 862KB・Klaviyo 約200KB。**詳細は店の在庫の開閉のため Google Maps 1,482KB を開く前から読む**。動きはパネル3つが同じ transform .3s cubic-bezier(.66,.61,.35,1)、prefers-reduced-motion は Bootstrap の10行だけでパネルは止まらない。

### SOU・SOU netshop（https://www.sousou.co.jp/ ・2026-11-16 計測・地下足袋・和装・洋装・日本（京都）・Shopify テーマ Focal 10.3.1 を作り替え）
- **位置づけ**：脇阪克二のテキスタイルを地下足袋から和菓子まで同じ柄で売る京都の店。8言語。白・#222・#f5f5f5 の3段に、購入と選んだ印だけ金茶 #c1a443。書体は全部 Noto Serif JP（値段だけ Noto Sans JP 13px #888）、字間 .08em。海外の接続で日本語だと /ja-us（ドル）へ 302 で移すので ?country=JP で測った。
- **一覧**（/collections/jikatabi）：頭に**まとめのカード15枚**（柄違いを別の商品にしているので、形ごとに「貼付地下足袋 計19商品 ¥12,870より」）。PC 4列 300×482・SP 2列 189×339、右上に「計○商品」、左に柄の写真を縮めた 19px（SP 15px）の見本を4つまで。その下に「商品一覧」：PC 5列 240px・SP 2列 188px、写真・名前 14px・星と件数・値段 13px #888 だけ（色・在庫・新着の印なし）。149品を25件ずつ足し「すべての商品を表示しました」で終わる、**件数の表示なし**。レビューの件数の言葉が同じ一覧で「件」「Reviews」「条评论」と混ざる。画像 98枚中 88 lazy、表示 240px に元 252px（SP 188px に 171px で引き伸ばし）。
- **絞り込み**：左から出る窓に7群（キーワード・在庫2・カテゴリー3・分類3・**寸法33**〔S〜XL・17.0〜30.0cm・女性F…〕・色8・価格・素材1）。選んだ瞬間に一覧を替え、下の「絞り込む」は閉じるだけ。17.0cm で商品のカードが8点（こどもじか足袋）になるが、まとめのカード15枚は減らない。件数・選んだ条件のチップは出ない。開くボタンは type="submit"。並べ替え9種・初期は「ベストセラー順」。
- **詳細のファーストビュー**：PC の最初の 900px は #f5f5f5 の地の品の全面の写真と左下の小さな名前・値段だけ。購入の列は名前 y=1,050（SP 980）・値段 1,090・柄の写真 約1,300・サイズの表 1,738・ボタン 2,506（SP 2,437）。PC は StickySidebar（1,000px 以上・上 10px）で列が付いてくる、SP にボタンの固定の帯は無い。
- **柄**：名前の下に同じ形の柄の写真18枚（PC 90px 5列・SP 97px 3列）、15枚まで見せて「続きを見る」。押すと別の商品ページへ移り PC 8.7秒・+6.6MB（SP 9.2秒・+5.6MB）、選んだサイズは消える。柄の名前は写真に書かない。
- **サイズの表**：600px・1行ずつ。在庫の行 61px＝寸法（左の欄 #f5f5f5）・¥12,870・50×38 の「選択」。在庫の少ない行だけ「※残り在庫数：8」12px #888（data-inventory-quantity は 13・0・13・8・0・0・13・20 で、8 は出て 13 は出ない）。**売り切れの行は 73px で残し、寸法を打ち消し（#888／#f5f5f5 3.25:1）、「売り切れ 再入荷確認中」と押せない ×**。入荷の予定・通知は無い。選ぶと 157ms（SP 165ms）でボタンが「サイズを選択する」（disabled）→「買い物かごに入れる」、選んだ行は金茶の地に白い √、URL に ?variant=。
- **カートに入れる**：600×72・#c1a443 に白 20px（2.43:1）。type="submit"。テーマの cartType が "page" で、/cart/add.js の後に /cart へ移る（ドロワーと「カートに追加されました！」の言葉はテーマにあるが使わない）。flow.js はここで止まり、入れた後のカートは見ていない。空のカートは「カートが空です」と「ショッピングを続ける」だけ。
- **買う前の不安**：ボタンの下に地 #f5f5f5 の見出しと 14px の値の3行（発送目安「ご注文日より約2〜3日 ※発送場所：関西」・海外発送「可」・返品「商品到着後1週間以内、未使用」＋「＞詳しくはこちら」）。**送料の行は無い**：全国一律 ¥500 はお買物案内の「国内発送」の＋の中（詳細から3手）。頭の帯は「送料無料キャンペーン中 12.4（金）まで ¥5,000以上（海外は¥10,000以上）」。海外は地域ごとの表（アジア ¥900〜南米・アフリカ ¥1,700、DHL は合計額で ¥2,000〜¥7,000）、関税は店の負担。返品の日数は詳細と案内で同じ（1週間）。交換は 2020-10-01 で終了、キャンセルは15分以内。
- **寸法表**：サイズ・素材のタブに JP 22〜29 と US men・US women・US kids・EU・UK。「29cm は 29.5cm 相当」の注記。US kids の 28 の欄が「59Y」。
- **データ**：詳細は Product に Offer 8（サイズごとの在庫は正しい）だが gtin13 が8つとも同じ。AggregateRating あり。BreadcrumbList は ホーム→商品の2段で、画面の3段と違う。alt 無しは詳細 13/99・トップ 20/241。
- **重さ**（解析・広告のタグを除く）：PC top 22.85MB / list 18.18MB / item 18.85MB / cart（空）15.72MB / guide 16.73MB（SP 25.43 / 19.86 / 18.27 / 15.81 / 16.65MB）。JS 約 11MB（checkout-web 41〜43本・約 2.3MB を毎ページ）、言語の切り替え LangShop の国旗 SVG 235枚・2.18MB を毎ページ、和文フォント 0.9〜2.6MB、ライブ配信の embed.js 715KB をトップで3回。横送りは Splide 4.1.4（loop・5秒・800ms、送りは数字で #888／いまの1枚 #c1a443）とテーマの Flickity の2種。

### スキマ Hender Scheme Official Online Shop（https://online.henderscheme.com/ ・2026-11-20 計測・革の靴と鞄・日本（東京）・jQuery＋Foundation の自前の仕組み）
- **位置づけ**：Hender Scheme の直営の通販。地 #fff・字 #000 だけで、灰は写真の台（約 #ebebeb）・品切れの幕 rgba(255,255,255,.8)・押せないボタン #ccc の3つの働き。書体は Josefin Sans（描いた字の94%）と Noto Sans JP、英字は小文字、本文 11px（13px 未満が本文の97%）。日本語の端末でも最初は英語（lang="en"）で、「ja」で Cookie lang=ja。
- **一覧**（/item?category_id=503）：PC 4列 347×522・間 17px・左右の余白 0。**カードは写真だけ**で、指を乗せると名前 14px・値段 12px（字間 .08rem）が左上 25px に浮かび写真が .5 に（all .75s cubic-bezier(.77,0,.175,1)）。SP 2列 191×287 で名前・値段 9px を常に。**色ごとに別のカード・別の URL**（balmoral 4色＝4枚、値段は同じ ¥99,638）。品切れも残して rgba(255,255,255,.8) の幕と「sold out」14px（1ページ目40枚中15枚）。40枚ずつ「1 2 3 4 &gt;」、件数なし、lazy 0枚、写真 665×1000・約35KB。
- **絞り込み**：左上の ＋（14×20）で白 .8 の窓 200×552 に色の系統11（natural〜multi）と effect_lab。押すとすぐ ?color_search_group_ids=5 で読み直し（PC 1.66秒・SP 1.71秒）、件数・選んだ条件の印なし。サイズで絞れない。並べ替えは右上 ↑↓ の4つ（new release・price の昇降）。
- **詳細のファーストビュー**：PC は左に写真 356×535 の2列（4色×4枚＋共通5枚＝21枚、lazy なし）、右 480px の列が sticky。名前 y=150（18px）・値段 191（11px）・換算の値段（$626.72 USD・€570.93 EUR と換算の時刻）・color 753・size 903・**add to cart 300×43 は y=1,445**。SP は名前 750・ボタン 2,145、固定の帯なし。PC で色を選んでも写真は替わらない（SP は大きな写真が替わる）。URL は /black のまま。
- **在庫**：HTML の item_stock に4色×7サイズ＝28通りの在庫・値段・USD・EUR・入荷通知の旗。**在庫が1サイズだけの色は開いた時点でそのサイズを選ぶ**（black は4だけ在庫2）。**色を替えても選んだサイズを保ち**、その組み合わせが0なら灰の add to cart（#ccc に黒 13.08:1・押せない）。品切れの色・サイズは opacity .4・打ち消し線・pointer-events:none で押せない。ボタンは6つを HTML に持ち1つだけ見せる（add to cart・灰の add to cart・sold out・restock request・arrival Request・comming soon）。restock_request_flag が1の品だけ、打ち消したものが押せて入荷通知になる。
- **付け足し**：size とボタンの間に「option」と half rubber option ＋¥5,500 (tax inc)・お預かり1週間・説明2行・image sample（3枚 3.34MB を窓を開く前から読む）、select は最初オフ。size guide は窓で JP（22.5-23.0cm〜28.5-29.0cm）・US 5〜11・EU 38〜44。
- **カートに入れる**：押して 37ms で POST /cart/add、370ms で /cart?…&price[0]=66000 へ移る（画面と JSON-LD は ¥99,638、解析タグは 72600。どれが何の値かは確かめられなかった）。カートは行（写真 70×105・color・size・price・quantity の select・delete）と total と continue shopping／order だけで、**送料・送料無料の残りの行なし**。
- **買う前の不安**：日本語の詳細の shipping の段に「全国一律660円・北海道、沖縄、離島 1,100円・33,000円以上で無料・日本国外 2,750円」「ご注文から1-3営業日以内に発送」「お客様都合の返品、交換はお受けしておりません」。英語（最初の表示）は送料が「Please see the "guide"」で、発送は「2-3 business days」。ガイドに靴のサイズ交換（国内発送の靴だけ・1回・7日以内・往復送料はお客）。
- **データ**：Product の JSON-LD は description の生の改行で壊れて読めない。Offer 1つ。BreadcrumbList は3段で画面にパンくずなし。トップの6枚の alt が「{$alt}」。
- **重さ**（解析・広告のタグを除く。PC＝SP）：top 18.69MB（店の写真 2.86MB・2.45MB）／ list 3.24MB ／ item 8.57MB（お手本写真 3.34MB）／ cart 2.09MB ／ guide 1.83MB。Google Fonts の Noto Sans JP 100〜900 の CSS 672KB と googletagmanager 894KB を毎ページ。prefers-reduced-motion 0か所、トップの写真送りは3秒ごと。

### minä perhonen オンラインストア（https://www.mina-perhonen.jp/online_store/ ・2026-11-24 計測・テキスタイルの服・小物・日本（東京）・Nuxt 3＋Strapi、かごだけ 2020年の別の仕組み）
- **位置づけ**：皆川明のテキスタイルのブランドの直営。白の地・字 #212121・押せないもの #bdbdbd、黄 #fcff6e は「かごへ入れる」「ご注文手続きへ」の2つだけ。英字は adobe-garamond-pro、和文は游明朝、ボタンとナビの英字は Helvetica Neue（字間 .1〜.2em）。左に 170px の縦のナビ、右に 875px の列。
- **一覧**（/fashion/）：PC 4列・札 200×258（写真 200×200・角 3px）・列の間 25px、SP 2列 173px・間 15px。札は写真→図案の名前→品の種類（明朝 16px）→季節「2026-27 a/w」（Garamond 斜体 14px）で、**値段・色数は無い**。品切れは写真の左下に「sold out」（地 #bdbdbd・白 12px、1.88:1）。売り場のタブ11個（Garamond 18px、いまの売り場に 1px の下線）、押すと URL だけ替わり PC 1.19秒・SP 0.69秒は前の札のまま。件数・並べ替え・絞り込みは無く、下へ送ると Strapi から約100件ずつ（89→189→…→545、最後に「No more results!」）。img 101枚中100枚を遅延、small_ 50〜71KB。
- **詳細**（starry ブラウス AEA1467）：名前を「starry／ブラウス／2026-27 a/w」の3段・24px。PC は右の 275px の列が position:sticky; top:0、値段 y=296、ボタン y=1,018（画面 900px の外）。SP は写真7枚の後で値段 **y=4,015**・ボタン y=4,712、固定の帯なし。写真は 2:3 を7枚縦に積む（1枚目 575×863）。
- **色×サイズ**：1色＝1行。左に **その色の生地の写真 50×50**（色ごとの画像）、横に色名（Garamond 18px）、右の端にサイズのボタン 76×30 を縦に 15px あけて3つ。品切れは字と線 #bdbdbd の disabled で押せず、入荷通知も店の在庫の案内も無い（打ち消し線の CSS は持っているが使わない）。全色品切れの品（HAMAGURI SCARF）も灰の FREE が4つ並ぶだけ。選ぶとボタンが黒地・白字になり、かごのボタンが白・灰の線から黄 #fcff6e に（15.08:1）。**写真・値段・URL は替わらない**。
- **かごへ入れる**：POST /online_store/cart/add.json、471ms で頭の袋の印に点、**485ms（SP 432ms）でボタンの言葉が「追加しました」**、1,473ms（SP 1,431ms）でその下に「かごを見る」275×46。ページは移らず、ドロワーもトーストも role="status" も無い（頭に小さなかごの部品はあるが 0×0）。
- **かご**：赤 #f00 の「発送などご注意事項」の開閉、品の行（125px・削除・サイズ・カラー・単価・数量の select）、**ギフト包装 ●なし ○あり(¥1650)**、ありで数量と水引（なし／あり）が開き、合計の上に「ギフト包装 ¥1650×1」（¥85,800→¥87,450）。送料の行は「¥0」だけで、11,000円までの残りは言わない。数量を変えるとフォームの送信で読み直す。CSS の和名の書体名が文字化け（游明朝の位置に「雋ゑｽｸ隴丞叙謔…」（末尾は U+FFFD））。
- **買う前の不安**：詳細から「ご利用案内」1手＋開閉で2手。送料 770円・11,000円以上無料、発送 5営業日以内、返品は到着から7営業日以内に連絡（都合の返品は往路の送料も客の負担）、支払いはカード・振込・代引（330〜1,100円）。品切れの色・サイズは「インフォメーションデスクで直営店の在庫をお調べ」と案内の中にだけ書く。
- **データ**：5ページとも JSON-LD 0。パンくずは SP だけ。詳細の alt 欠け8（色の見本は alt=""）。
- **重さ**：top 3.14MB / list 5.49MB / item 5.19MB / 空のかご 0.92MB / guide 4.14MB（PC）。entry.js 640KB と jQuery 1.12.3 を毎ページ、詳細は large_ の写真7枚（〜574KB）と Noto Serif JP の切れ端 810KB、案内はサイズ表の画像 638KB を2回。prefers-reduced-motion の規則 0。

### AURALEE ONLINE STORE（https://auralee.jp/ ・2026-11-28 計測・服・日本（東京）・jQuery 3.7.1＋Foundation＋FuelPHP の自前の仕組み。Cookie lang=ja・debug_language=JP で日本・円の画面）
- **位置づけ**：地 #fbfbfb・字 #6c6c6c（5.07:1）の1色、色は品の点だけ。品名・ボタンは Marcellus、本文は gill-sans-nova の 300・字間 0.07em、和文は端末の游ゴシック（Web フォントは2本で約76KB）。押せる言葉を全部「( LOG IN )」「( Search )」「( View Bag )」「( Remove )」と括弧でそろえる。枠線・影・角丸 0。
- **一覧**（/item?category_id=3・MEN 149品）：PC 4列 352×604（隣と 1px）・写真 352×469（3:4）、SP 2列 195×402。札は写真・8×8 の色の点（右寄せ・間 12px）・品名 Marcellus 13px・「¥154,000 tax in」12px の4つだけ（新着・在庫・残りわずかの印は無い）。**「View: Outfit | Product」で、同じ枠の2枚の写真（着た姿／物だけ）の opacity を jQuery animate 400ms で入れ替える**。PC は指を乗せたカードだけ逆の写真へ。選んだ表示は URL にも端末にも残らず、読み直すと Outfit。件数「See 32 of 149」は HTML にあるが hidden。infinite-scroll で 32品ずつ（32→64）、img 67枚中40枚が lazysizes。
- **絞り込み**：「+ Filters」（43×12 の文字）で一覧を覆う #f3f3f3 の窓、PC は Sort by（Newest・In stock・Coming soon）・Size 8・Color 13（9px の点）の3列、SP は縦に積んで見出しで開閉。チェックの箱を「( ○ )」と括弧で描く。選んでも件数は出ず、「( Search )」で GET の読み直し（In stock 111・Blue 37・両方 15、0件は「ご指定の条件に一致する商品が見つかりませんでした。」の1行）。値段の並べ替えは無い。絞った条件のチップも無い。Blue で絞るとカードのリンクは青の色へ替わるが写真は替わらない。
- **詳細**（FINE CALF LEATHER DOWN BLOUSON ¥363,000・3色×4サイズ）：PC は右の 386px の列に名前 y=187（18px）・値段 y=258（右寄せ 14px）・色の見本 12×12 y=333（選んだ色に 1px の輪、下に色名 12px）・サイズ y=413（文字 16px、選んだものに 1px の下線）・タブ（Description／Material／Care／Size Guide）・「ギフトラッピング対象外」y=774・ADD TO BAG 386×40 y=797（#666 に白 5.74:1）。SP は名前 y=692・ボタン y=1,302、固定の帯なし。
- **色×サイズ**：**URL /2000（BEIGE・4サイズとも在庫0）を開くと、JS が在庫のある最初の色（ROYAL BLUE）とサイズ（3）を選び直す。URL は /2000 のまま**で、Product の JSON-LD も BEIGE・OutOfStock。品切れのサイズ（class no_stock）と品切れの色の見本は、在庫ありと同じ見た目（CSS なし）。押すとボタンが「REMIND ME」（同じ #666）に替わる。ボタンは状態ごとに8つ（ADD TO BAG・REMIND ME×2・COMING SOON・SOLD OUT・抽選に応募する×2・YOU ARE ON THE LIST）を持ち hide を付け替える。REMIND ME は未ログインならログインへ（item_detail.js）。色を替えてもサイズの選択を保つ。値段・URL は替わらない。
- **サイズの表**：Size Guide のタブに、各サイズの実寸（着丈・身幅・裄丈、cm／inch の切り替え）と、換算「Auralee 3・4・5・6 ＝ Japan Men S・M・L・XL ＝ Inter Men XS・S・M・L」。選んだサイズの列に active。
- **かごへ入れる**：POST /apis/cart/add.json、**1,342ms は何も変わらず**、そのあとボタンが「ADDED」（#d5d5d5 に #6c6c6c・3.58:1・pointer-events:none）、**ボタンの真上に 386×182 の小窓が translateY(50%)→0・opacity を 0.6s ease-out**（写真・名前・値段・( View Bag )・×）、袋の数 0→1。小窓は閉じるまで残る。小窓の写真はサーバーが URL の色で書くので、/2000 で BLACK を入れても BEIGE の写真が出た。
- **カート**（/cart・2.64秒）：行に Size・Color・Qty（− ＋）・「ギフトラッピング対象外」・( Remove )・Move to wishlist、下に「Total: ¥363,000 tax in」と CHECK OUT。送料の行・返品の言葉・案内へのリンクは無い。空は「カートの中身がありません。」と「ショッピングを続ける」。
- **買う前の不安**：詳細のボタンの 39px 下「Shopping guide」で1手。送料 国内 770円一律（無料の条件は書かれていない）・通貨ごとに14の額、代引き 330円、出荷 2〜4日、返品・交換は不良と誤配送だけ（到着7日以内）、ギフトラッピング 330円（自分で包む・1注文1点）、購入には会員登録が必要、「カートに入れても在庫は確保されない」。
- **データ**：Product の JSON-LD は description の改行で壊れる（スキマと同じ）。BreadcrumbList は5ページとも読める。詳細の alt 欠け6。
- **重さ**：top 19.78MB（SP 26.94MB）/ list 5.62MB / item 8.04MB / cart 3.73MB / guide 1.07MB（PC）。トップは PROJECTS の PNG 4枚（1.0〜1.3MB）と YouTube の埋め込み（消音の自動再生、SP は youtubei/v1/next 2.1MB×4）。詳細の写真8枚は lazy なし。facebook 1.05MB・GTM 0.96MB を毎ページ。prefers-reduced-motion の規則 0。

## 真似る型
見本は Allbirds・Tracksmith・土屋鞄製造所・ASKET・VEJA・SOU・SOU・スキマ・minä perhonen・AURALEE の9つ。2つ以上で同じだったことを型にする（値はどれのものかを添える）。
1. **品切れのサイズ・色は消さずに斜線で残し、押せるようにする。押したら購入のボタンを入荷通知に替える**（Allbirds：14個の四角に斜線＋薄く、押すと「NOTIFY ME」。Tracksmith：50×32 の枠に 1px の斜線、押すとメールか電話の欄。土屋鞄：34px の丸に斜線、押すと「在庫なし」と白の「売り切れ」＋藍の「入荷お知らせ登録」413×48）。ASKET：丈の格子で打ち消し線（灰）＋黒の「Notify Me」、押すと「Available: Spring 2027」）。VEJA：#888 の枠で残して押せ、押すと黒の「NOTIFY ME」（斜線なし・3.54:1＝斜線は足す）。入荷の時期を書いたのは ASKET だけ（季節で）。作るときは時期を書き、メールマガジンの登録を最初からチェックしない（ASKET は未チェック、土屋鞄は入っている）。
2. **サイズを選ぶまで、購入のボタンに何を選ぶかを書いて押せなくする**（Allbirds・Tracksmith とも「SELECT A SIZE」）。選ぶと URL にバリエーションを残す（Allbirds ?size=…&variant=…、Tracksmith ?sku=…、土屋鞄 ?variant=）。VEJA は押せるまま、押すとサイズの下に「*Please select a size」11px #d80000（13px 以上にする）。押せない状態の文字は読めるように（Tracksmith は opacity .2 で 1.28:1、ASKET は「Add to cart」のまま #b2b2b2 に白で 2.12:1 で、何を選ぶかも言わない＝反面教師）。
3. **色は丸い見本、選んだ色の名前を上の行で言い直す**（Allbirds 36px の丸を2色に斜めに塗り分け、Tracksmith 36px（SP 40px）に「COLOR: NAVY/IVORY」、土屋鞄 34px に「Color: 【数量限定色】シェードウォームグレー」）。色ごとに写真が替わる。見本には枠を付ける（土屋鞄のアクアグリーン #88bfbf は白に 2.05 で溶ける）。
4. **一覧は1ページに出し切り、画像は lazy**（Allbirds 39件・69/83、Tracksmith 79枚・164/173、土屋鞄 42品・89/105）。VEJA は 36枚ずつ「LOAD MORE (36/297)」で足し 144/159 lazy、件数はボタンの中だけ。件数をカードの数と合わせて一覧の上に出す（Allbirds の JSON-LD 148、Tracksmith の「145 RESULTS」はずれる、土屋鞄・ASKET は件数そのものが無い＝反面教師。ASKET は20枚・107/123 lazy）。
5. **絞り込みで選んだ条件を結果の上に × つきで並べ、まとめて外すボタンを置く**（Allbirds：SP の APPLY FILTERS の後のチップ、Tracksmith：TEES × と CLEAR、土屋鞄：「× 鞄カテゴリー: 防水バッグ」と「全てをクリアする」）。Tracksmith・土屋鞄は選ぶたびに一覧だけ差し替え、ページを読み直さない。ASKET は URL に ?filterColor=Blue が付くだけで一覧が絞られず、チップも出ない（反面教師）。
6. **カートは右からのドロワーで、送料無料までの残りを金額とバーで頭に置く**（Allbirds 約530px・「あと$86で送料無料」、Tracksmith 840px・「ADD $200 TO YOUR CART…」を空のときから）。土屋鞄は /cart へ移り、送料の言葉も無い（反面教師）。ASKET は 720px のパネルだが送料を「Calculated in checkout」と言うだけ（反面教師、$15 と決まっている）。VEJA は 535px のドロワーに Subtotal・Shipping（$15／Free）・Tax・TOTAL の4行で送料を金額で言うが、$90 で残り $5 を言わない（残りの額とバーを足す）。
7. **固定の購入のボタンは、購入の列を過ぎてから出す。未選択なら押すと列へ戻す**（Allbirds：スクロールすると現れる、Tracksmith：IntersectionObserver で列を過ぎてから・未選択なら列へ smooth、土屋鞄：IntersectionObserver でフォームが上へ抜けた後、「購入する」は名前へのアンカー）。ただし SP の最初の画面にボタンが無いなら最初から出す（土屋鞄は SP のボタン y=941 で、最初の画面ではどちらも見えない）。ASKET は購入の列の中で sticky（SP y=779）にして、列を過ぎると一緒に消える。VEJA は SP で最初から sticky; bottom:0 の 390×81 の帯（「SELECT A SIZE」→ 選ぶと選んだサイズの行と「ADD TO BAG」の2段）で、最初の画面にボタンが無い店はこの形にする。
8. **着用の目安・入る物を書く**：Tracksmith は人ごとに身長と着たサイズ（5人）、Allbirds はサイズ群の上に「ハーフサイズの人は近い整数も選んで」。鞄は土屋鞄の収納サイズ（A4ファイル・600mlペットボトル・長財布）と PC対応サイズ（13〜15inch・iPad）を絞り込みの群に。
9. **詳細の購入の列の近くに返品の条件を1行で**（土屋鞄：カートのボタンの 110px 下に「到着後7日以内・未使用であれば返品可能」）。Tracksmith は列に無くドロワーに「30-DAY RETURNS & EXCHANGES」。ASKET は購入のボタンの真上の開く行「Shipping & Returns」1手で返品30日・8 USD・交換無料・支払い7種。送料も同じ場所に（4つとも詳細に送料の金額の行が無い、Allbirds は「+ FREE SHIPPING」だけ、ASKET は案内のページの部品だけ）。
10. **実店舗があるなら、オンラインの在庫の下に店ごとの在庫**（土屋鞄：14店を開閉、通信なし）。ASKET：購入の列の4行目「Store Availability」で3店に In stock／Out of stock。オンラインが品切れの色・寸法でも出し、入荷通知の横にも書く（土屋鞄は品切れの色で帯が消える、ASKET は Notify Me の横に出ない）。
11. **一覧のカードに指を乗せたら、写真を縮めてサイズの列を出し、その場でカートに入れる**（VEJA：346×410 の写真が上へ縮み、サイズ14を 11px で、品切れは灰、押して 1.10秒でドロワー）。Allbirds は SP の「ADD」で下からの窓に色とサイズ、Tracksmith は QUICK BUY の窓 1060×690（どれもカードから選ばせる）。指を乗せられない SP では窓かボタンにする。
12. **値段や素材の中身を数で書く**（ASKET：原価 33.9 EUR の内訳と工程17行、VEJA：部位ごとの素材を％で Insole 13%・67%・11%・9%）。表か横棒にし、文の中に埋めない（VEJA は段落の文）。
13. **男女でサイズの表記が違う靴は、1列にまとめて重なる所に2つの表記を並べる**（VEJA：W4〜W7.5・「W8 / M6」〜「W11.5 / M9.5」・M10〜M14 の19）。Allbirds は PC と SP で男女の表記の出し方が違う（反面教師）。
14. **柄・色違いを別の商品にするなら、一覧の頭に形ごとのまとめのカードを置く**（SOU・SOU：15枚・PC 4列 300px、右上に「計19商品」、左に柄の写真の 19px の見本を4つ、「¥12,870より」）。まとめのカードは絞り込みでも減らないので、絞った条件で数を言い直す（直し）。
15. **サイズは1行ずつの表にし、行に値段・残りの数・選ぶボタン、売り切れの行は打ち消して残す**（SOU・SOU：在庫の行 61px・売り切れ 73px・地 #f5f5f5・「※残り在庫数：8」・選ぶと 157ms でボタンが「買い物かごに入れる」）。売り切れの行には次に入る日か通知を足す（SOU・SOU は「再入荷確認中」と押せない × だけ）。
16. **寸法表に自国の寸法と US（男・女・子）・EU・UK を並べ、実寸との差を1行で書く**（SOU・SOU：「29cm は 29.5cm 相当」）。
17. **在庫が1サイズしかない色は、開いた時点でそのサイズを選んでおく。色を替えても選んだサイズを保ち、その組み合わせが品切れならボタンを押せなくする**（スキマ：black はサイズ4だけ在庫2で、開くと4に枠・黒の add to cart。yellow brown へ替えると4のまま #ccc に黒の灰のボタン 13.08:1）。勝手に別のサイズへ移さない。押せなくするなら、型1のとおり次の入荷か通知を同じ場所に出す（スキマは出さない＝直し）。
18. **色ごとに別のカードにする一覧は、品切れの色も残し、写真に幕をかけて品切れと書く**（スキマ：rgba(255,255,255,.8) の幕と「sold out」14px、写真の色は幕越しに見える。SOU・SOU は柄違いをまとめのカードでくくる＝型14）。
19. **有料の付け足し（底の補強・名入れ）は購入の列の中に、値段・お預かりの日数・説明・お手本を並べ、最初はオフ**（スキマ：half rubber option ＋¥5,500 (tax inc)・1 week・説明2行・image sample）。お手本の写真は窓を開いたときに読む（スキマは 3.34MB を先に読む）。
20. **柄の服の色の選択肢は、その色の生地の写真を見本にし、1色＝1行に色名とその色のサイズを並べる**（minä perhonen：50×50 の生地の写真・Garamond 18px の色名・76×30 のボタンを縦に3つ、行 151px。SOU・SOU：柄ごとに 19px の柄の見本、サイズは1行ずつの表）。丸い単色の見本では柄の違いが分からない。行に品切れの次の手（打ち消し線で押せて店の在庫・入荷通知）を置く。
21. **品の名前を「図案（柄）・品の種類・季節」の段に分け、一覧と詳細で同じ段にする**（minä perhonen：詳細 24px×3段、一覧は名前・種類・季節の斜体 14px。同じ図案の品が「関連アイテム」でつながる）。一覧の札には値段の行を足す（minä perhonen は一覧に値段が無い）。
22. **かごへ入れたら、ボタンの言葉で答え、続けて「かごを見る」を足し、頭の袋に印を付ける**（minä perhonen：485ms で「追加しました」、1,473ms で「かごを見る」、471ms で袋に点）。言葉は role="status" で読み上げ、品・合計・送料の残りも言う。
23. **一覧に「着た姿｜物」の切り替えを置き、同じ枠の中の写真だけを替える**（AURALEE：View: Outfit | Product、400ms、カードの大きさ・名前・値段は動かさない。PC は指を乗せたカードだけ逆の写真に）。選んだ表示は URL か端末に残す（AURALEE は読み直すと戻る＝直し。横断ルール42）。
24. **開いた色が全部品切れなら、在庫のある色と在庫のあるサイズを選んで開く。そのとき URL・小窓の写真・構造化データも選んだ色にそろえ、「この色は品切れ」を1行で言う**（AURALEE：/2000 の BEIGE を開くと ROYAL BLUE・3 に選び直すが、URL と小窓の写真は BEIGE のまま＝直し。スキマの型17と同じく、勝手に移すなら言う）。
25. **入れたらボタンの真上に小窓を上げ、品・値段・「かごを見る」を出し、閉じるまで残す**（AURALEE：386×182・0.6s ease-out・translateY(50%)→0、ボタンは「ADDED」）。小窓の写真は入れた色から取り、返事を待つあいだはボタンの言葉を替える（AURALEE は 1.34秒そのまま＝直し）。2点目を入れられるようにボタンは押せるまま残す（AURALEE は ADDED で押せない）。
26. **押せる言葉の形を1つにそろえる**（AURALEE：( LOG IN )・( Search )・( Reset )・( View Bag )・( Remove ) と括弧で囲む。字の色を #6c6c6c の1つにしても押せる物が分かる）。ただし購入のボタンだけは地の色の面にする（ADD TO BAG は #666 の面）。

## 反面教師
- 有料の返品保証（$4.98）を込みにした金額を、いちばん目立つ購入ボタンに出し、保証なしを文字リンクにする（Allbirds）。
- 「Returns/Exchanges」のリンク先が説明ではなくログイン窓口で、返品条件はフッターの小さな窓にしかない（Allbirds）。
- 一覧に全件のサイズ表を HTML で埋め込み、HTML だけで3.9MB（Allbirds）。
- PC とスマホでサイズの選択肢が違う（PC は男女表記を別の選択肢、SP は自動で両方足す）（Allbirds）。
- 詳細の最初の画面が全面の写真だけで、名前・値段・サイズ・ボタンが PC y=1115〜1505・SP y=1317〜1738（Tracksmith の Van Cortlandt Tee）。同じ店の靴の詳細は写真の段が無く全部入る。写真の段は説明の下へ。
- $200 未満の送料が別のサブドメインのヘルプ記事にだけあり、詳細の購入の列に送料・返品の1行が無い（Tracksmith）。
- 「145 RESULTS」と言ってカードは79枚。送らないのに URL だけ ?page=9 まで書き替える（Tracksmith）。
- 絞り込みの0件で何も言わず、色の選択肢に件数が無く0件になる色も選べる。サイズの群に容量（18L・20oz）、分類に「Uncategorized」（Tracksmith）。
- 10px の大文字のラベルを CSS で46回。SP のトップの本文の32%が13px未満（Tracksmith）。
- JSON-LD の Offer が1つで OutOfStock（画面では買える）、BreadcrumbList もパンくずも無い（Tracksmith）。
- カートに入れると /cart へ移り、送料（750円・50,000円以上無料）が詳細にもカートにも無い。ご利用ガイドの中だけ（土屋鞄）。
- 「残りわずか」の橙 #ed8a00 が白に 2.55。色見本に枠が無く、アクアグリーン 2.05・タン 2.92（土屋鞄）。
- 色を選ぶたびに購入の列の HTML を取り直し、1.0〜2.6秒、待つ間の印なし（土屋鞄）。
- 入荷お知らせの窓でメールマガジンの登録が最初からチェック済み（土屋鞄）。
- 和文の Web フォント（Adobe Fonts の動的サブセット）と Material Symbols で1ページ 9〜18MB。パンくず 10px・札 11px・カードの名前 12px（土屋鞄）。
- 色で絞ると URL に ?filterColor=Blue が付くだけで一覧の20枚が変わらず、チェックも付かない（ASKET、2026-11-05 の Chromium）。
- カートで送料を「Calculated in checkout」と言い、150 USD までの残りも言わない（送料は FedEx $15 と決まっている）（ASKET）。
- 色見本が 14×14 で alt=""、リンクに色の名前が無い。本文・値段・ボタンが 13.5px（ASKET）。
- カードに指を乗せてその場で入れられるが、件数は一覧の頭に無く「LOAD MORE (36/297)」の中だけ（VEJA）。
- 「Low stock」を SP のサイズの一覧にだけ出し、PC の格子では残りわずかの7つが「あり」と同じ見た目（VEJA）。
- 品切れのサイズが #888 の文字と枠だけ（3.54:1・斜線なし）、色の名前が 13px の #b3b3b3（2.10:1）、選び忘れの1行が 11px で role なし（VEJA）。
- ドロワーで $90 のとき「Shipping $15・TOTAL $105」とだけ言い、あと $5 で無料になることを言わない。詳細の開閉の送料は日数だけで、日数も案内と違う（VEJA）。
- 店の在庫の開閉のため Google Maps 1,482KB を詳細ごとに開く前から読む。右・下から出すパネルが prefers-reduced-motion で止まらない（VEJA）。
- 絞り込みの SIZE に靴下（36/40）・ベルト（45 IN）・O.S が混ざり、値の横に件数が無く、閉じると選んだ条件が見えない（VEJA）。
- 入れると /cart へ移る（テーマの cartType "page"）。購入のボタンが #c1a443 に白 20px で 2.43:1。SP にボタンの固定の帯が無く、表の頭からボタンまで 765px（SOU・SOU）。
- 送料 ¥500 が詳細の3行（発送目安・海外発送・返品）に無く、お買物案内の開閉の中だけ。頭の帯はキャンペーンの条件だけ（SOU・SOU）。
- 柄の写真を押すと別のページへ移り 8.7〜9.2秒、選んだサイズが消える。一覧に件数が無く、レビューの件数の言葉が「件」「Reviews」「条评论」と混ざる（SOU・SOU）。
- 海外から日本語で開くと /ja-us（ドル）へ 302 で移し、Cookie を置いても戻らない。国旗 SVG 235枚・2.18MB を毎ページ。gtin13 が8サイズで同じ、寸法表の US kids に「59Y」（SOU・SOU）。
- PC の一覧のカードが写真だけで、名前と値段は指を乗せるまで出ない（タッチの PC では見えない）。SP は 9px（スキマ）。
- 詳細の add to cart が PC y=1,445・SP y=2,145 で、SP に固定の帯が無い。PC で色を選んでも左の写真が替わらない（スキマ）。
- 品切れの色・サイズを pointer-events:none で押せなくし、入荷通知の旗が無い品では次の手が何も無い（スキマ）。
- 入れると /cart へ移り、カートに送料・送料無料の残りが無い。日本語の詳細に書いた送料が、最初に出る英語では「see the guide」、発送も 1-3 と 2-3 営業日で違う（スキマ）。
- Product の JSON-LD が説明の改行で壊れて読めない。トップの alt が「{$alt}」。ボタンの綴り「comming soon」（スキマ）。
- 一覧（545品）に値段・件数・並べ替え・絞り込みが無い。タブを押すと 0.69〜1.19秒、前の売り場の札のまま（minä perhonen）。
- SP の詳細で値段が y=4,015・ボタンが y=4,712（写真7枚の後）、固定の帯なし。PC もボタンは y=1,018 で最初の画面の外（minä perhonen）。
- 色を選んでも写真が替わらない（khaki を選んで black の写真のまま）。品切れのサイズは #bdbdbd の disabled で押せず、全色品切れの品も言葉なし。店の在庫を調べられることは案内の開閉の中だけ（minä perhonen）。
- sold out の札が白字と #bdbdbd で 1.88:1。かごの注意が #f00 の 14px で 4.0:1（minä perhonen）。
- かごに送料の行はあるが 11,000円までの残りを言わず、送料 770円は案内の開閉の中だけ。構造化データ 0（minä perhonen）。
- 品切れのサイズ（class no_stock）と品切れの色の見本が在庫ありと同じ見た目で、押してボタンが REMIND ME に替わるまで分からない（AURALEE）。
- URL の色（/2000＝品切れの BEIGE）と画面で選ばれる色（ROYAL BLUE）がずれ、入れた後の小窓に URL の色の写真を出す（BLACK を入れて BEIGE の写真）。Product の JSON-LD も BEIGE・OutOfStock だけ（AURALEE）。
- 件数「See 32 of 149」を hidden にし、絞り込みの窓は選んでも件数を言わず、結果の上に条件のチップも無い。値段の並べ替えが無い（AURALEE）。
- 送料 770円・返品は不良のみが、詳細にもカートにも無く案内のページだけ。購入に会員登録が必要（AURALEE）。
- 本文の 100% が 13px 未満（トップ、inspect）、薄い字 #a5a5a5 は 2.38:1、ADDED は 3.58:1（AURALEE）。
