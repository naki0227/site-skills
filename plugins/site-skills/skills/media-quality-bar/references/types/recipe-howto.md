# レシピ・ハウツー（レシピ、手順の説明）

## この下位タイプで特に見ること
材料と手順の組み方、手順の写真、Recipe の構造化データ、台所で読むための切り替え（画面を消さない・写真を隠す）、量の単位

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

## 真似る型
（見本が2つ以上そろったら、共通する型をここにまとめる。いまは King Arthur Baking だけ。作るときの出発点は次の値。）
- 材料は左の列（325px・地の色1段）、手順は右の白い面（文の幅 520px 前後）。SP は材料 → 手順の1列（King Arthur Baking）。
- 手順の文字はリードより大きく（20px／31.2px）、番号は ol と counter の丸（20px・数字 14px）（King Arthur Baking）。
- 題の横に、手を動かす時間・焼く時間・合計・出来上がりの欄（King Arthur Baking）。
- 量は2つの単位を同じ行に（「3 1/2 cups (397g)」）。日本向けならグラムを先に（King Arthur Baking の形を翻訳）。
- 手順の見出しのそばに、画面を消さない切り替え（Wake Lock）と、手順の写真の出し入れ（King Arthur Baking）。

## 反面教師
- Recipe の datePublished を "September 9, 2026 at 7:13pm" と書く・dateModified 無し・手順を文字列の配列で持つ（King Arthur Baking）。
- 一覧のページ送りが href の無い button（King Arthur Baking）。
- 手順の途中で画面の72%を覆うメール登録のポップアップ、その写真 1,126KB を全ページで読む（King Arthur Baking）。
- 高さ 1万px・手順17でも目次も材料の固定も無い（King Arthur Baking）。
- 材料を p＋br、手順を文字の「1.」で書き、Recipe の構造化データも無い（北欧、暮らしの道具店のレシピ記事。オウンドメディアの中のレシピ）。
