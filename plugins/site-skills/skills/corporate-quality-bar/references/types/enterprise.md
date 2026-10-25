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
- **見た目の値（2026-10-25 に測り直し）**：文字は Roboto 400 だけ（PC 332要素・SP 301要素すべて）。html の font-size が画面幅に比例（1200px 以上 clamp(7.5px, .625vw, 48px)＝1440px で 9px、744〜1199px は .977vw、743px 以下は 2.667vw＝390px で 10.4px）し、段は clamp(最小, Xrem, 最大) の10段：76.5（h1）／63（帯）／46.8（1文・見出し・数字）／32.4／27.9／24.3（ニュースの題・メガメニューのリスト）／18（本文・行間1.5）／16.65／14.5／10px（大文字のラベル）。見出しは行間 1.05・字間 -0.03em、本文 -0.01em。色は oklch の黒・白と彩度 0 の灰4段（#636363／#828282／#a6a6a6／#c0c0c0）、パネルとバーは #0e0e0e、ニュースのホバーだけ #dde6eb。CSS の色リテラル 677個のうち黒 264・白 263。
- **骨組みの部品**：section の id が部品名（HeroColor1・EntryPointImageGrid1・Banner3・NewsListing1 など、5ページで19種）。全ページ「HeroColor1（720px）で始まり、入口3つ → Banner3（348px）→ フッター」で終わる。入口3つは見ているページ以外へ差し替え。
- **ナビの動き**：76px を過ぎると translateY(-100%)（200ms ease-out・200ms 遅れ）、上へ 38px（高さの半分）戻すと 10px 内側・56px・角丸 8px の黒い浮きバーで戻る。メガメニューは 1,420×520px（10px 内側・角丸 8px）・opac 1.5s、中は題 27.9px＋1文 18px＋Learn more → リスト 24.3px（1行 29px・列幅 355px・2列×4行）、触っていない項目は opacity .7。スクロール・Esc・↗で閉じる。
- **動き**：GSAP（初期値 expo.out・0.5s）＋ScrollTrigger＋Lenis（lerp 0.085、SP 0.12）＋SplitType。行の出し方は yPercent 100→0・1.1s・0.1s ずつ・scrub 0.46・start "top 98%"。視差は scale 1.09・yPercent -8→8。最初の画面は写真 blur 12px→0・scale 1.05→1（0.72s power2.out）。reduced-motion を見るのは最初の画面だけ。
- **年表と数字の寸法**：数字 4列（列幅 325px）・46.8px、説明 14.5px #828282（3.84:1）。年表は年 18px を横一列（間 21.6px、選んでいない年 #c0c0c0＝1.82:1）、1文 18px・幅 385px、写真 385×230px。
- **重さの中身**：PC と SP で同じ画像（top・business・projects は SP＝PC）。ニュースの写真は 308×188 で出すのに 418〜1,577KB。同じ写真を staging と production の2ホストから2回（採用で skill_machining 731KB・skill_welding 671KB）。事業ページは _opt でない原寸 4,109KB。GTM 1,433KB（gtag 2本）・global.css 643KB を全ページ。問い合わせフォームは5欄（入力4＋CAPTCHA）で用件の選択無し。

## 真似る型（1サイト目。2つ目で確かめる）
- ナビは左に事業（▾）、右に用事（Careers・Company・Investors）。別ドメインは↗で区別する（Valmont）。
- メガメニューは画面の端を 10px 残した黒いパネル（角丸 8px）、中は「題＋1文＋Learn more → 2列のリスト（4行まで）」。SP は同じ中身を全画面の開閉で出す（Valmont）。
- ナビは下へのスクロールで隠し、上へ高さの半分戻したら黒い浮きバーで出す（Valmont：76px／38px）。
- ページは名前つきの部品で組み、始まり（全面写真）と終わり（入口3つ→問い合わせの帯→フッター）を全ページで固定する（Valmont）。
- 会社ページは「1文→数字4つ→価値観4語→年表」の順。数字は売上・従業員・拠点国・取引国の4つに絞る（Valmont）。
- 年表は年を横一列に並べ、選ぶと1文と写真が替わる形で、14個でも 571px に収める（Valmont）。
- 書体は1つ・太さ 400 だけ。大きさは画面幅に比例する root × clamp の段で持ち、見出しは行間 1.05・字間 -0.03em（Valmont）。

## 反面教師
- トップの1文の誤字「has a been」（HTML に PC 用・SP 用の2つの文があり、画面に出る方だけ誤り）、「infastructure」「reimbursment」、Company のメガメニューの1文が Careers の流用。白地の文字に #828282（3.84:1）・#c0c0c0（1.82:1）。`lang` 空、構造化データ無し（Valmont 2026-10-25）。
- 行の出し方が scrub なので、スクロールを止めると本文が半透明のまま残る。reduced-motion で止まるのは最初の画面だけ（Valmont）。
- PC と SP で同じ画像、一覧の小さな写真に原寸、同じ画像を2つのホストから二重に読む（Valmont）。
- 採用ページ 14.85MB・写真33枚で alt 無し。画像が全部 alt 無しの事業ページ（Valmont）。
- 自サイトのニュース（Projects）が2025年2月で止まり、絞り込みも無い（Valmont）。
- 会社ページに設立・資本金・本社の表が無く、代表メッセージも自サイトに無い（Valmont）。
