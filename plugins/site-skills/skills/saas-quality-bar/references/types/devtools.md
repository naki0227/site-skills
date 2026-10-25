# 開発者向け（API、開発ツール、インフラ）

## この下位タイプで特に見ること
コードの見せ方、ドキュメントへの近さ、無料枠

## 見本の実測
### Resend https://resend.com/ — 2026-10-25
- **最初の画面**：h1「Email for developers」96px/行高96px/字間 -0.96px（見出しは serif の Domaine、h2 は ABCFavorit 56px/字間 -2.8px、本文は Inter 16/24）。背景 #000・文字 #f0f0f0・副文 #a1a4a5（18/27）。主「Get started」（/signup）と副「Documentation」（枠なしの文字）。ボタンは高48・角16・横20・枠2px（白5%）・transition 0.2s cubic-bezier(.4,0,.2,1)。右に黒い立方体の3D（Spline 2.7MB）。製品画面は最初の画面に無い。
- **製品の見せ方**：2画面目に「Integrate this weekend」。言語13個（60×56）→フレームワーク9個の2段タブで同じ送信コードを切り替え、行番号つき・14px/20px・等幅（Commit Mono）・コピーボタン。機能ページはエディタのメニューや分析を DOM のモックで見せる。
- **機能の並べ方**：機能別7本（Broadcasts・Audiences・Automations・Templates・Webhooks・Inbound・Dedicated IPs）。1機能は h1 → h2＋一文 → 画面 → API の呼び出し例（Create/Update/Send）→「Start sending this weekend」。
- **料金表**：Free $0（3,000通/月）／Pro $20（50,000通）／Scale $90（100,000通）／Custom の4枚（4列299px・角16・中央ぞろえ、価格 Inter 36/61.2）。上に「Transactional／Marketing」の切り替えと9段のスライダー（3,000〜3,000,000+）。動かすと合うプランだけ h3 内の「Recommended」（地 緑12%・字 緑83%・12px/600）が opacity 0→1（.2s cubic-bezier(.36,.66,.6,1)）、ほかのカードは opacity .4（ホバー .8、.15s）。SP（390px）では沈むカードを display:none にし、合うカードだけ残す。価格は Pro 50,000通 $20→100,000通 $35、Scale 200,000通 $160／500,000 $350／1,000,000 $650／1,500,000 $825／2,500,000 $1,150。Marketing は8段（1,000〜200,000+ 連絡先、Pro marketing $40〜$650）。目盛りは PC「3,000」、SP「3K」。従量課金（超過 $0.90/1,000通）とアドオン（Domains $20・Dedicated IPs $30・SSO $150）は表の外の別枠。比較表は6区分45行（10/5/13/10/6/1）を全部開いたまま。年払いは無く、FAQ 1問目で「月払いのみ」。FAQ 15問（角16・枠 #212629・地 #141517→ホバー #191b1e）に FAQPage。税・通貨の注記は無い。
- **事例と信頼**：一覧は絞り込み11（Featured・AI・Creators・Media・Developer Tools・Fintech・Healthcare・Open Source・SaaS・Studios・Travel）、ロゴだけの3列の大きなカード。詳細は /customers/<名前>。
- **ドキュメント**：別デザイン（明るい背景）。左に目次、右に「On this page」、上に Documentation／Guides／API Reference、検索（Ctrl K）、AI への質問欄、ページのコピーボタン。導入は「必要なもの2つ→言語別 Quickstart 14本」。
- **データと重さ**：PC で top 22.04MB / features 11.47MB / pricing 10.95MB / customers 10.74MB / docs 9.38MB。JS が各ページ 7.7〜10.5MB。構造化データは SoftwareApplication・Offer・BreadcrumbList、料金は FAQPage、ドキュメントは TechArticle。
- **配色**（2026-10-25 測り直し）：地 #000、面 #141517・#191b1e・#212629（gray-1〜3）、文字 #f0f0f0（18.43:1）と #a1a4a5（8.37:1）、枠は灰でなく半透明の青白 rgba(214,235,253,.19)（slate-6、トップで69要素）と rgba(217,237,254,.145)。CSS 6本（1,035KB）の色リテラル 2,937個・790種のうち上位は #fff 258・透明 242・#000 230。色相は #62ffb3（20回）など状態とモックだけ。コードの構文色は灰3段（#EBECED・#A0A0A0・#6C6C6C、予約語は 4.00:1）、行番号 #464A4D。
- **文字**：serif（Domaine）は h1 だけ（トップ 96/96・下層 76.8、SP 64/64）。h2 は ABC Favorit 56/67.2・字間 −2.8px（−.05em、SP 48）、料金の区分 36/46.8。見出しはすべて weight 400、白→白50%の斜めグラデーションで塗る。本文 Inter 18/27（リード）・16/24・14/20、コード Commit Mono 14/20。
- **動き**：既定 .15s cubic-bezier(.4,0,.2,1)、ボタン .2s で白90%に反転＋光る影3重。登場は 1s（文字 16px 上へ、3D は .7→1）。流れ続けるもの scroll-x 180s・disco 6s（選択中タブの縁）。reduce では流れを paused、登場を fade-in に差し替えるが、3D 2,758KB と動画5本の読み込みは減らない。:hover 851 に (hover:hover) 38。
- **重さの内訳**：トップ PC は JS 10,542KB・3D 2,758KB＋展開 2,733KB・動画 2,369KB。3D は SP では読まない（SP 15.59MB）。CSS 2本（512KB・515KB）が全ページで読まれ、規則 3,535 が重複。ドキュメントは RSC の先読みだけで 4,088KB。

## 真似る型
（見本が2つ以上そろったら、共通する型をここにまとめる。）

## 反面教師
- トップに 3D（2.7MB）と JS 10.5MB を置き、22MB にする（Resend）。
- 料金のスライダーにラベルが無い（Resend、measure の inputsWithoutLabel=1）。
- 「Recommended」を4枚とも h3 の中に opacity 0 で置き、読み上げでは全プランが「Recommended」になる（Resend）。
- reduce でも 3D（2.7MB）と動画を読み込む。CSS 2本で規則 3,535 が重複（Resend）。
