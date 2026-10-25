# 大企業・上場（事業が多い会社、上場企業）

## この下位タイプで特に見ること
事業の多さの整理、IR とサステナビリティ、多言語

## 見本の実測

### Valmont Industries（https://www.valmont.com/ 、2026-10-25 解剖。選んだ理由：Webby Awards 2024 コーポレートコミュニケーション部門の受賞、IR Magazine Awards の Best IR Website も受賞と事例集 Digital Synopsis に載る）
米国のメーカー（NYSE:VMI）。事業は インフラ と 農業 の2本。IR（investors.valmont.com）とサステナビリティは別ドメイン。今回 IR は 403 で開けず、ニュースは自サイトの「Projects」を見た。
- **ナビ（PC）**：左に Infrastructure▾／Agriculture▾／Sustainability↗、右に Careers▾／Company▾／Investors↗、右端に検索。高さ 76px・白文字（不透明度 .8）。▾はホバーで黒（#0d0d0d 付近）のパネルが全幅（余白10px・角丸8px・高さ約520px）で開く。中は左に題＋一文＋Learn more、下に2列のリスト（列幅 355px・24px・字間 -0.02em）で項目は4〜7個。上場の表示「NYSE:VMI」をメニュー内に置く。SP はロゴとハンバーガー。
- **階層**：最大2段（/company, /infrastructure, /careers, /projects, /contact-us）。事業の中身はアンカー（#categoryname1〜4）。画面のパンくず無し。
- **トップの順番**：h1「Conserving Resources. Improving Life.」（76.5px・行間80.3px・字間 -2.295px・400）の全面写真 → 1文（46.8px・字間 -1.404px、「何の会社か」を5行）→ 入口3つ（01 About Us／02 Infrastructure／03 Agriculture、写真つき・幅448px・間隔21px）→ 最近のプロジェクト5件 → 3つ（Leadership／News／Investors）→「We're here to answer your questions」の帯＋Get in touch。数字の帯はトップに無い。
- **信頼の材料**：会社ページに 数字4列（$4.1B 売上・11,000+ 従業員・21 拠点国・100+ 取引国）→ 市場6つ → 価値観4語（Passion／Integrity／Continuous Improvement／Deliver Results）→ 年表14個（1946〜2026、年を選ぶと写真と1文が替わる）。代表メッセージは会社ページに無く、Leadership は IR 側。本社住所はフッターだけ。会社概要の表（設立・資本金）は無い。
- **採用への導線**：ヘッダー右の Careers▾、トップの入口、Company のメニューに文言。採用トップの見出し直下に「US／AUS・NZ／Global の求人検索」の下線リンク3つ（Workday と LinkedIn へ）。募集一覧は自サイトに無い。
- **問い合わせ**：全ページ末尾の帯＋Get in touch。フォームは /contact-form を iframe で埋め込み、拠点検索は外部サービス（MetaLocator）の iframe。
- **ニュース**：自サイトのは「Projects」で、日付（10px 大文字）・分類・題（24.3px）・右に画像（308×166）の1行 210px、10件×3ページ。絞り込み無し。最新は 2025年2月17日（2026年10月時点で約20か月前）。プレスリリースは IR 側。
- **データ**：構造化データ無し、`lang` 空、多言語切り替え無し、メタ description あり。
- **重さ（PC/SP）**：top 6.77/6.77MB、about 12.71/10.66、business 8.41/8.41、採用 14.85/14.36（写真33枚）、projects 8.61/8.61。画像の alt 無し：top 14枚中9、business 24枚中24、採用 33枚中33。
- **見た目の値**：Roboto 400 の1書体、黒 #000・白・灰（数字の説明）。写真が主役でアクセント色は使わない。

## 真似る型（1サイト目。2つ目で確かめる）
- 会社ページは「1文→数字4つ→価値観4語→年表」の順。数字は売上・従業員・拠点国・取引国の4つに絞る（Valmont）。
- 年表は「年の縦並び＋右に絵と1文」の切り替えで見せ、14個でも1画面に収める（Valmont）。
- 見出しは大きく、字間をきつく（-0.03em）し、書体は1つに絞る（Valmont）。

## 反面教師
- トップの1文の誤字「has a been」、数字の説明が薄い灰、`lang` 空、構造化データ無し（Valmont 2026-10-25）。
- 採用ページ 14.85MB・写真33枚で alt 無し。画像が全部 alt 無しの事業ページ（Valmont）。
- 自サイトのニュース（Projects）が2025年2月で止まり、絞り込みも無い（Valmont）。
- 会社ページに設立・資本金・本社の表が無く、代表メッセージも自サイトに無い（Valmont）。
