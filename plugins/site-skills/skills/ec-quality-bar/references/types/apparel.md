# アパレル・靴（服、靴、バッグ、アクセサリー）

## この下位タイプで特に見ること
サイズ表と在庫の組み合わせ、着用写真（モデルの身長）、色違いの見せ方、詳細の頭に編集の写真を置くか（置くなら購入の列が最初の画面から落ちないか）

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

## 真似る型
見本は Allbirds と Tracksmith の2つ。どちらでも同じだったことを型にする（値はどちらのものかを添える）。
1. **品切れのサイズは消さずに斜線で残し、押せるようにする。押したら購入のボタンを入荷通知に替える**（Allbirds：14個の四角に斜線＋薄く、押すと「NOTIFY ME」。Tracksmith：50×32 の枠に 1px の斜線、押すとメールか電話の欄）。Tracksmith は入荷の時期を書かない。作るときは時期も書く。
2. **サイズを選ぶまで、購入のボタンに何を選ぶかを書いて押せなくする**（どちらも「SELECT A SIZE」）。選ぶと URL にバリエーションを残す（Allbirds ?size=…&variant=…、Tracksmith ?sku=…）。押せない状態の文字は読めるように（Tracksmith は opacity .2 で 1.28:1）。
3. **色は丸い見本、選んだ色の名前を上の行で言い直す**（Allbirds 36px の丸を2色に斜めに塗り分け、Tracksmith 36px（SP 40px）に「COLOR: NAVY/IVORY」）。色ごとに写真が替わる。
4. **一覧は1ページに出し切り、画像は lazy**（Allbirds 39件・69/83 lazy、Tracksmith 79枚・164/173 lazy）。件数はカードの数と合わせる（Allbirds の JSON-LD 148、Tracksmith の「145 RESULTS」はどちらもずれる＝反面教師）。
5. **絞り込みで選んだ条件を結果の上に × つきの札で並べ、外せるようにする**（Allbirds：SP の APPLY FILTERS の後のチップ、Tracksmith：TEES × と CLEAR、群の名前に「(1)」）。Tracksmith は色で絞るとカードの色見本と写真もその色に移す（作るなら真似る）。
6. **カートは右からのドロワーで、送料無料までの残りを金額とバーで頭に置く**（Allbirds 約530px・「あと$86で送料無料」、Tracksmith 840px・「ADD $200 TO YOUR CART…」を空のときから）。
7. **SP の購入のボタンは、流したら下に固定で出す**（Allbirds：スクロールすると現れる、Tracksmith：購入の列を過ぎてから、未選択なら押すと列へ戻す）。
8. **着用の目安を書く**：Tracksmith は人ごとに身長と着たサイズ（5人）、Allbirds はサイズ群の上に「ハーフサイズの人は近い整数も選んで」の一文。作るときは身長・普段のサイズ・着たサイズを人ごとに。

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
