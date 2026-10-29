# AIプロダクト（生成AI・AIを中心にした製品）

## この下位タイプで特に見ること
できることの例の見せ方、利用量と料金、データの扱い

## 見本の実測

### Nani翻訳（合同会社Kioku）https://nani.now/ja — 2026-10-26
- **最初の画面＝製品**：PC は左 298px の固定サイドバー＋中央 752px の列（アプリと同じ骨組み）。h1 はロゴ画像、一文は h2「AIが解説付きでバシッと翻訳！」21.04px/600 の1行だけ。主役は本物の翻訳の入力欄（textarea 741×158px・17.37px、placeholder「好きな言語で入力…」）で、未ログインで翻訳・添削できる。手書き風の注記「ログインなしで無料で翻訳できます」（#099bff・17.37px・600＋SVG の矢印）が入力欄を指す。ボタン型の「試す」は無く、サイドバー下の「無料ではじめる」（255×49px・pill・地 #099bff・青20%の輪 4px）が副。入力すると Cloudflare Turnstile「人間かチェック中…」。
- **データの扱い**：サイドバー上の点線カードに「翻訳データはこの端末に保存され、当社のサーバーには保存されません」「AIモデルの学習にも使用されません」を全ページ常設。添削ページは入力欄の下にも「入力内容や添削結果は、端末に保存され、二次利用はされません。詳しく」。
- **できることの見せ方**：機能別のカード8枚（2列、画像の枠は角 64px・白い縁 5px・影 `0 2px 5px -2px rgba(0,20,40,.08)`、webp 1200px 幅・lazy）＋「もっと表示する」。動画は押して再生（7本）。見出しは動詞で終える（「@で翻訳の意図を追加」）。独立した機能ページは「添削モード」だけで、そこも h1 直下に入力欄、説明はその下。対応言語はチップで翻訳11・添削34＋「自動判定」。
- **料金表**：無料（¥0「ずっと無料」）と PRO の2枚だけ。比較表・FAQ は料金ページに無い。月年は `role="tab"` の2択で初期は年ごと（¥1,000/月・「￥12,000 年払い」）、月ごと ¥1,250（「月払い」）。割引はタブの中の青い札「-20%」。PRO は名前のグラデーション文字・幅 388px（無料 338px）・塗りのボタン、無料カードにボタン無し。上限は ? の吹き出し（地 #26262b・12.53px）で換算：「1か月に2,000,000以上のトークン」→「450字の英和翻訳なら約2,500回」、「翻訳は4,000字 → 100,000字に」→「25,000字超は分割、添削は3,500字まで」。税込／税抜の表記は無い。
- **法人**：/team は「Proと同じ機能、同じ上限を席数分」「¥1,000 / 月 × 席数」（2席から）。料金ページからはカード下の帯「複数人でProプランを使うには…」＋「チームで利用」だけでつなぐ。
- **事例と信頼**：ロゴの列は無い。トップは X の投稿15件を2段の帯（48s linear、上下逆向き、カード 317×228px・角 28px）で流し「35万人以上が利用」（時点の注記なし）。/team は効果の数字「約 -74%」「約 -62%」に「調査内容」の開閉（6人・ChatGPT デスクトップ／DeepL と比較、別の比べ方で約45%・約80%以上）。障害情報（status.nani.now）とセキュリティページはフッター。
- **配色・文字・動き**：地 `linear-gradient(0deg,#f8fcff,#e4f2ff 85%)`、文字 #080d12（top で639要素）・見出し #262e35、青 #24afff／#099bff。部品は「青5%の層（`rgba(41,108,147,.06)`・内側 6px・角 27/33px）の中に白（角 27px）」の二重の枠。書体は OS（Hiragino）＋自前の Inter 400/600、太さは 400 と 600 だけ。html の大きさを 16 → 16.4（390px〜）→ 16.7px（420px〜）。既定 .15s cubic-bezier(.4,0,.2,1)、主ボタン .25s、入力のボタン .3s cubic-bezier(.23,1,.32,1)、サイドバーのボタンは `linear()` のばね .2s。CSS に reduce は0件、Motion は `reducedMotion:"never"`。
- **データと重さ**：PC で top 4.61MB / 添削 8.03MB / 料金 1.07MB / 法人 8.96MB / ヘルプ 1.10MB（SP top 5.28MB）。重さは Turnstile（入力欄のあるページだけ、約1.2〜1.6MB）と自動再生の動画1本（添削 2580×2160 の 4,239KB、法人 7,730KB、poster なし）。JS は 0.87〜1.54MB。構造化データは全ページ WebSite だけ（FAQ はトップ13・ヘルプ26問あるのに FAQPage なし）。

### Granola（Granola, Inc.）https://www.granola.ai/ — 2026-10-29
- **最初の画面＝DOM のモックの1巡**：左に「New」の札（#d1e043）・h1「The AI notepad for back-to-back meetings」Quadrant 86.4px/400・行間 .93・字間 -1.728px（SP 48px）・一文2行「Notes, actions and memory. / Without a meeting bot.」20px・主ボタン「Download for free ↓」199×56px（地 #5b6f00・文字 #fcfcf8 で 5.49:1）だけ。右は画像でなく HTML の Mac の窓で、空（0〜2.2秒）→ メモを打つ＋「Transcribing」→「Generate notes」（4.4秒）→「Enhancing notes」（5.8秒、3.6秒続く）→「My notes / Enhanced」（9.4秒）を約8.6秒で繰り返す。reduce でも同じ時間で回る。トップの `<video>` は0本。
- **機能の並べ方**：機能の名前で並べず、時間（Before／In／After the meeting、Chat の Before／During／After）と問いかける範囲（During a meeting／In a folder／Across all meetings）で3つずつ。1つの型は「Quadrant の見出し＋2〜3行＋DOM の画面」。Chat の「Get anything done」は頼めることの札（文字 16px）を3段で流す（marquee-seamless 30s）。
- **データの扱い**：最初の画面の下の約束3行（computer audio で bot を呼ばない／Private by default／どの会議アプリでも）、比較表の Trust & Control 11行（Audio deleted after transcription・Model training opt-out「Per user／Workspace-wide」・Configurable transcript retention・Let people know you're using Granola）、料金の FAQ「Do you train any models on my data?」。
- **料金表**：Basic $0／Business $14／Enterprise $35「per user per month」の3枚が同じ 382px・枠 1px・角 0・影なし、ボタンも同じ 326×56px のオリーブ（Basic・Business「Download for Mac」、Enterprise「Sign-up in app」＋「Learn more」）。おすすめの印なし、月年の切り替えなし（annual・yearly の語も0）、税・通貨の表記なし。比較表は `<table>` で5区分35行（11・3・8・11・2）、thead sticky（top 64px、SP 56px）、行 57px（SP 73px）、値 14px #72726e、無いところは「–」＋読み上げ用「Not included」。SP は行の名前を全幅に、値3つを下の3列に組み替え、横スクロールにしない。FAQ「Things worth noting」8問（Quadrant 24px、accordion .2s ease-out）、FAQPage なし。
- **試すまで**：サイトに登録の欄は0。主ボタンは全部 notes.granola.ai/download、相談はヘッダーの「Talk to sales」（/contact/sales?source=nav）だけ。カードの要否の記載なし。無料の範囲は「Upgrade to view and work with notes older than 30 days」と比較表の「Meeting history 30 days」。SP（iPhone）でも料金のボタンは「Download for Mac」。
- **事例と信頼**：ロゴ 6×2（暗い帯、160px の「For the doers」の下から出る）、声2枚、X の投稿6件（2024年5〜9月）。事例は4件で、Vanta は数字3つ（260+ 時間／69%／61%、数字 Quadrant 32px・説明 16px）→ 引用 → Challenge／Solution／Results。数字に時点・数え方なし。SOC 2 Type II は全プラン、HIPAA は Enterprise。
- **ヘルプ**：docs.granola.ai（Mintlify 系）でも h1 は同じ Quadrant、ボタンはオリーブ。タイル9枚（267×74px・角 14px）と「Chat with AI support」。
- **見た目**：地 #fff・#f7f7f2・暗い帯 #292929・Chat の帯 #b2c248、文字 #292929（14.55:1）・#72726e（4.83:1）、主の色はオリーブ #5b6f00 だけ。色は `--oats-*` のトークンから Tailwind の `--color-*` を作る2層。見出しは全部 Quadrant 400（160／108／86.4／68／48／36／32／24px、字間は大きさの -1.5〜-2%）、本文 Melange 16px、ナビと表 14px。ボタンは全部 9999px の丸。
- **動き**：スクロールの演出は CSS の `animation-timeline: scroll(root)`／`view()`／名前付きの view timeline で12個（窓が縮む translateY(-6vh) scale(1.2)→0・1、前中後の線 scaleX、ロゴが文字の下から）、`@supports not` で古いブラウザに戻す。イージングは out-expo cubic-bezier(.16,1,.3,1) が最多。CSS の reduce の規則は6つで、scroll timeline も帯もモックも止まらない。
- **データと重さ**：PC で top 7.86MB / chat 14.82MB / pricing 13.85MB / 事例 13.63MB / ヘルプ 2.55MB（SP 5.60／7.55／5.63／6.06／2.54MB）。PC は Next.js の Link が画面のリンク先の RSC を先読みし、フッターの「License」（/third-party-licenses）だけで 6,158KB（/pricing の 44%）。自前の JS 約 4.3MB。構造化データは SoftwareApplication＋AggregateRating 4.9／39件だが、評価は画面に出ていない。解析は Plausible、cookie の同意は「Reject all」と「Accept all」が同じ黒の塗り。

## 真似る型
（Nani翻訳・Granola の2件から。AI が働く様子を、最初の画面で本物か本物に近い形で見せる2つの方法がある。）
- **最初の画面の右（または中央）は、AI が働く製品そのものにする。**登録なしで動く入力欄（Nani翻訳：textarea 741×158px、「ログインなしで無料で翻訳できます」）か、DOM で組んだ画面の1巡（Granola：入れる前 → 「Enhancing notes」の待ち → 結果と元のメモの切り替え、約8.6秒）。画像や動画1本で済ませない。どちらの場合も、行動のボタンは1つ（Nani翻訳はボタン型の「試す」が無く、Granola は「Download for free」だけ）。
- **データの扱い（保存先・学習に使うか・音声を残すか）を、最初の画面の近くと料金の両方に書く。**Nani翻訳はサイドバーに全ページ常設、Granola はトップの約束3行と比較表の Trust & Control 11行（「Model training opt-out：Per user／Workspace-wide」）。
- **料金はカードを少なくし、上限は利用者の単位で書く。**Nani翻訳は2枚（トークン → 「450字の英和翻訳なら約2,500回」）、Granola は3枚（履歴 30日 → 無制限、「Auto only／Auto + model selection」）。どちらも税の表記と FAQPage が無い（真似しない）。
- **機能は「いつ・どこで使うか」で3つに切る**（Granola の Before／In／After、範囲の During a meeting／In a folder／Across all meetings）。Nani翻訳は機能別カード8枚で、AI の使い方の動詞を見出しにする（「@で翻訳の意図を追加」）。

## 反面教師
- 主ボタンの白文字が地 #099bff で 2.94:1、PRO の名前 #24afff が 2.43:1、注記 #7f8b91 が 3.50:1（Nani翻訳）。
- reduce で何も止まらない：声の帯 48s も FAQ の開閉 .27s もそのまま（Nani翻訳）。
- 料金ページに税の表記・比較表・FAQ が無く、上限の細部はホバーの吹き出しの中だけ。価格の桁区切りがページでずれる（料金「1000」、法人「1,000」）（Nani翻訳）。
- 表示 518〜737px 幅に 4〜7.7MB の動画を poster なしで自動再生（Nani翻訳）。
- reduce で、DOM のモックの1巡（約8.6秒）、scroll timeline の12個、札の帯（30s）がすべて動く。止めるボタンも無い（Granola）。
- PC でフッターの「License」の先を 6,158KB 先読みし、料金ページの 44% になる（Granola）。
- SP（iPhone）でも料金のボタンが「Download for Mac」。AggregateRating 4.9／39件を構造化データにだけ書き、画面に出していない。事例の数字（260+ 時間・69%・61%）に時点と数え方が無い（Granola）。
