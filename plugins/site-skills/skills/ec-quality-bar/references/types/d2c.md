# 単品・D2C（少ない商品を深く売るブランド）

## この下位タイプで特に見ること
1商品の詳細を LP のように長く作るか、定期購入の見せ方、比較表

## 見本の実測

### Our Place（https://fromourplace.com/ ・2026-10-26 計測・調理器具・US・Shopify）
- **位置づけ**：看板商品 Always Pan を中心にした直営。今は鍋・家電・食器まで広がり /collections/cookware だけで44点あるが、詳細は LP のように長い（PC 高さ 9,503px：買う欄 3,161px → 部位説明 → 拡大写真 → レビュー 2,118px → 動画 → FAQ → Pairs Well With）。Shopify の顧客事例に掲載。
- **一覧**（/collections/cookware）：PC 3列（432px・列間24px・行間48px）・SP 2列（163px・16px・40px）。カードは 正方形の写真（台 #F6F3EB）→ 左上の札（BESTSELLER #6C674D／「$247 SET SAVINGS」#35312E、12px 600 字間0.08em）→ 右下 Quick add（44px）→ 名前（セリフ 16px）→ 入り数「8 piece」→ 一行の説明 → 価格（セールは #AF5A3C、横に「($897 Value)†」）→ 色の丸。12枠に3枠、商品でない読み物のカード（「100-Day Money Back Guarantee」ほか）を混ぜる。最初12点、「LOAD MORE」で12点ずつ（1.31秒・約0.78MB）。件数の表示は無い。並べ替えは Featured 初期値の5種。Quick add は選択の窓を出さず初めの色で入れてドロワーを開く。
- **絞り込み**：「FILTER」（113×32、2px の枠）で PC は左に幅296px の列が開く。SP は全画面シートで下に「SHOW PRODUCTS」。群は MATERIAL 4・COLOR 12＋View more・SIZE・PRICE。**選んだ瞬間に反映**（Titanium で PC 0.45秒・約0.62MB）、URL に ?material=titanium。上に「Applied Filters」の「Titanium ×」と Clear all。**ほかの群の選択肢も減る**（Titanium で COLOR が9色に）。分類のチップ7つ（33px・角丸30px・2px の枠）は帯ごと sticky top:65px。
- **詳細のファーストビュー**：PC は左に写真の列（主写真 764×577＋374px の正方形2列、列ごと sticky）、右の列 x=928・幅464 に 名前（セリフ 36px）→ 一行（20px #60605E）→ 星4.6・40,368件 → $135 → Size → Select Option。900px の中に1枚目の選択肢カードと色まで入り、ADD TO CART は y=1385 で入らない。SP は写真 390×390（4枚スワイプ）→ 名前 24px（y=502）→ $135（y=621）、ADD TO CART は最初から下に固定（358×48）。
- **サイズ**：8.5"・10.5"・12.5" の3つ割り（約149×43、選択中は #35312E の地に白）。中身は別の商品ページへのリンクで、詳細はその2ページの HTML（1.4MB ずつ）を先読みする。
- **単品とセット（選択肢のカード）**：幅464px のカード3枚「単品 $135／Cookware Duo 7点 $239.95（$284 Value・BEST SELLER）／Cookware Set 13点 $359.95（$518 Value・MOST SAVINGS）」。未選択は 2px #D2D5D8 の枠で畳み（113〜129px）、選んだ1枚だけ 3px #35312E の枠で開いて「Color:」と色の丸を出す（195〜203px、grid の .3s ease-in-out）。下に「Add Accessories」のチェックボックスのカード2枚（$99・$49）。Duo を選んでも主写真は単品のまま。
- **色と在庫**：直径30px の丸、外に 1px の輪・内に 3px のすき間、.3s cubic-bezier(.4,0,.2,1)。名前は「Color: Spice」の行で言い直す。選ぶと写真と URL（&variant=）が変わる。**売り切れの色は画面から消す**：8色中3色が JSON-LD で OutOfStock、画面は5色、読み上げ用に「5 of 5 Color options available」。入荷通知の入口は無い。
- **カートボタンの位置**：PC はボタンが流れると、ヘッダーの下（top:64px）に高さ65px の帯（名前・価格・ADD TO CART 184×48）を translateY(-65px)→0 の .15s で下ろす。SP は最初から bottom:0 に固定。
- **カートに入れる**：ページは移らず、PC 約0.56秒・SP 約0.61秒で右から幅422px（SP 全幅）のドロワー。上に「Congrats! You've unlocked free standard shipping」「$165 away from free Perfect Pot Pro 7 qt.」とバー、「$135 | FREE SHIPPING」「$300 | Perfect Pot Pro 7 qt.」の**2段の目標**。数量（高さ32px の − 1 ＋）を増やすと $270・「$30 away」に言い直す。下は Pairs Well With（「17% off when bundling cart items」）→ Add gift note → Subtotal → CONTINUE TO CHECKOUT。送料の行は無い。落ち着いた後の通信 約1.21MB。/cart は robots.txt が禁止。
- **買う前の不安**：「Free shipping $135+／100 day trial／Free returns」を告知バー（40px、3本が回る）・トップの帯（109px）・詳細のボタンの下と3つの印・ドロワーで繰り返す（0手）。ボタンの下の郵便番号（最初から 94104-4901 が入っていた）を押すと欄と「Check Shipping」。返品の条件（発送から100日・送料は返金しない・1つずつ別の箱）はフッター Support → Returns の先だけで、詳細の印「Free Shipping & Returns」はリンクではない。$135 未満の送料の金額は見つからなかった。Klarna「From $23/month」。
- **見た目**：地 #FCFAF6・文字 #35312E（12.36）・説明 #595752／#60605E・ボタンとセール価格 #AF5A3C（白文字 4.83）・札 #6C674D。ドロワーの「Congrats!」だけ #080AE9 の青。見出しは ITC Cheltenham（Light 300 を 48〜60px、行間1.1）、UI は Calibre（ボタン・ナビ・札は 600 大文字・字間0.08em）。動きは cubic-bezier(.4,0,.2,1) が21回、.15s が23回・.3s が4回。prefers-reduced-motion はカートの数の点滅だけを止める1か所。
- **データ**：詳細は ProductGroup（variesBy Color・hasVariant 8、売り切れも Offer に残る）＋AggregateRating（4.6・40,368）＋BreadcrumbList（アプリ「SchemaPlus」）＋FAQPage。一覧は OfferCatalog＋FAQPage。alt の無い img は0。
- **重さ**：PC top 20.93MB / list 17.97MB / item 29.34MB / guide 16.57MB（SP 19.44 / 18.04 / 28.98 / 17.00MB）、解析・広告タグ（約5.3MB）を除いて。JS が毎ページ約12〜15MB（Yotpo 2本・Attentive・bundler・Amplitude・Klaviyo・Klarna・PDQ ほか）、詳細は56ホスト。同意バーは SP 195px（画面の23%）、割引の窓は SP で全画面。

## 真似る型
（見本が1つ（Our Place）だけ。2つ以上そろったら、共通する型をここにまとめる。）

## 反面教師
- 売り切れの色を画面から消し、入荷通知も無い。8色中3色が見えない（Our Place）。丸を残して斜線、選んだら入荷通知に（Allbirds の型）。
- 一覧に件数が無い。44点を12点ずつ LOAD MORE、絞っても何点か出ない（Our Place）。
- セットを選んでも主写真が単品のまま（Our Place）。
- ドロワーの目標の文字と札だけ、配色の外の青 #080AE9（Our Place）。
- サイズ違いを別の商品ページにし、その HTML を1.4MBずつ先読みする。詳細 29.3MB・56ホスト（Our Place）。
- 未選択の選択肢カードの枠 #D2D5D8／白が 1.47 で、選べる部品の境目として弱い（Our Place）。
- SP の最初の画面を割引の窓（全画面）と同意バー（195px）が覆う。reduced-motion で動画も告知バーの回転も止まらない（Our Place）。
