# 開発者向け（API、開発ツール、インフラ）

## この下位タイプで特に見ること
コードの見せ方、ドキュメントへの近さ、無料枠

## 見本の実測
### Resend https://resend.com/ — 2026-10-25
- **最初の画面**：h1「Email for developers」96px/行高96px/字間 -0.96px（見出しは serif の Domaine、h2 は ABCFavorit 56px/字間 -2.8px、本文は Inter 16/24）。背景 #000・文字 #f0f0f0・副文 #a1a4a5（18/27）。主「Get started」（/signup）と副「Documentation」（枠なしの文字）。ボタンは高48・角16・横20・枠2px（白5%）・transition 0.2s cubic-bezier(.4,0,.2,1)。右に黒い立方体の3D（Spline 2.7MB）。製品画面は最初の画面に無い。
- **製品の見せ方**：2画面目に「Integrate this weekend」。言語13個（60×56）→フレームワーク9個の2段タブで同じ送信コードを切り替え、行番号つき・14px/20px・等幅（Commit Mono）・コピーボタン。機能ページはエディタのメニューや分析を DOM のモックで見せる。
- **機能の並べ方**：機能別7本（Broadcasts・Audiences・Automations・Templates・Webhooks・Inbound・Dedicated IPs）。1機能は h1 → h2＋一文 → 画面 → API の呼び出し例（Create/Update/Send）→「Start sending this weekend」。
- **料金表**：Free $0（3,000通/月）／Pro $20（50,000通）／Scale $90（100,000通）／Custom の4枚。上に「Transactional／Marketing」の切り替えと9段のスライダー（3,000〜3,000,000+）。Pro は 100,000 通で $35 に変わる。従量課金（超過 $0.90/1,000通）とアドオン（Domains $20・Dedicated IPs $30・SSO $150）は表の外の別枠。比較表は6区分。年払いは無く、FAQ に「月払いのみ」「無料トライアルは無いが無料プランがずっと使える」と書く。FAQ 15問に FAQPage。
- **事例と信頼**：一覧は絞り込み11（Featured・AI・Creators・Media・Developer Tools・Fintech・Healthcare・Open Source・SaaS・Studios・Travel）、ロゴだけの3列の大きなカード。詳細は /customers/<名前>。
- **ドキュメント**：別デザイン（明るい背景）。左に目次、右に「On this page」、上に Documentation／Guides／API Reference、検索（Ctrl K）、AI への質問欄、ページのコピーボタン。導入は「必要なもの2つ→言語別 Quickstart 14本」。
- **データと重さ**：PC で top 22.04MB / features 11.47MB / pricing 10.95MB / customers 10.74MB / docs 9.38MB。JS が各ページ 7.7〜10.5MB。構造化データは SoftwareApplication・Offer・BreadcrumbList、料金は FAQPage、ドキュメントは TechArticle。

## 真似る型
（見本が2つ以上そろったら、共通する型をここにまとめる。）

## 反面教師
- トップに 3D（2.7MB）と JS 10.5MB を置き、22MB にする（Resend）。
- 料金のスライダーにラベルが無い（Resend、measure の inputsWithoutLabel=1）。
- 料金カードの見出しが全プランとも「Recommended」付きで、強調が伝わらない（Resend）。
