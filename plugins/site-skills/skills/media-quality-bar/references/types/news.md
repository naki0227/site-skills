# ニュース（新聞・ニュースサイト）

## この下位タイプで特に見ること
速報と一覧の密度、更新日時、写真のキャプション

## 見本の実測
### ProPublica（https://www.propublica.org/ ・2026-10-25 計測）
PC 1440×900 / SP 390×844。見たページ：トップ、連載（/series/life-of-the-mother）、ふつうの記事（約800語・高さ7,736px）、長い記事（Machine Bias・高さ21,446px）。選んだ理由：Society for News Design の Best of Digital Design で 35 件の Awards of Excellence、2026年5月にホーム・ブランドを作り直した。
- **本文（ふつうの記事）**：箱 PC 754px・SP 332px（左右29px）。PC 20px / 32px（1.6）、SP 16px / 25.6px。段落の間 PC 32px・SP 24px、字下げ無し。本文色 #31302d、地は白。書体は Tiempos Text（セリフ）、見出しは Feature Headline（幅を詰めたセリフ）、補助は Brut Grotesque。
- **本文（長い記事）**：暗い地に #bbb。箱 PC 810px・SP 358px。PC 21.25px / 35.06px、SP 17px / 25.5px。冒頭の段落だけ PC 27.5px。小見出し（h3）24px。写真は本文より広く出し、PC で 432px 幅の写真を x=189 と x=819 に並べる。
- **記事の頭**：分類（太字 20px・下線）→ 題（PC 48px/48px・字間 -0.48px・weight 500、SP 28px/33.6px）→ リード（20px/28px・#5f5e59）→ 写真（本文幅・キャプション 14px/19.6px・灰）→ 著者（14px 太字）「Co-published with …」→ 日時（October 5, 2026, 5:00 am。14px 灰）。画面に更新日は出ない（article:modified_time は meta にある）。
- **ヘッダー**：高さ 57px の固定、白、影なし。トップの先頭だけ巨大なロゴ、スクロールすると 57px の細いロゴに替わる。
- **目次**：無い（高さ 21,446px の長い記事でも）。
- **記事の終わり**：Read More → 無料転載（Republish This Story for Free）→ More in 分類 → Most Read（10件・青い大きな数字・PC 2列）→ 支援（背景 rgb(188,217,237)・上下 64px・特大見出し）→ 黒いフッター（5列＋ニュースレター）。「次の記事」の大きな導線は無い。シェアのボタンは 0 個。
- **一覧（トップ）**：主役1本は「左に題とリード・右に画像」（PC：題 x=46〜、画像 x=641〜1394）。副記事は 題・画像 357px・右に縦罫で関連2本の3列。関連の先頭に「2 Weeks Ago:」など時間の距離を太字で付ける。
- **連載ページ**：全幅の暗い写真に中央寄せで 分類 → 縦罫 → 大見出し → 副題 → 縦罫 → 導入文。
- **広告と同意**：画面に出る広告は無し（ソースに ad-slot の文字は9回）。同意バナーの代わりに、下に固定のニュースレター帯（PC 135px・SP 217px・背景 #f2f1ed・×で閉じる・transform .2s ease-out）。
- **データと重さ**：JSON-LD は Article・BreadcrumbList・WebPage・Person・Organization。og:type は article。重さ PC top 10.23MB / list 9.65MB / article 12.06MB / long 10.94MB（SP 9.64 / 9.24 / 10.65 / 11.28MB）。JS が約8MB で、ログイン無しの訪問者に WordPress の編集用 JS（block-editor 1,031KB・editor 1,022KB・components 786KB）が配られ、reCAPTCHA 834KB が3回。
- **画像**：ふつうの記事の写真は width/height あり・srcset あり。長い記事の写真は width/height 無し（1200px の元画像を PC で 1440px に伸ばして出す）。

## 真似る型
（見本が2つ以上そろったら、共通する型をここにまとめる。）

## 反面教師
- 編集用 JS（約2MB）を訪問者に配り、1ページ 10〜12MB になる（ProPublica）。
- 長い記事に目次が無い（ProPublica：高さ 21,446px）。
- 長い記事の画像に width/height が無く、元画像を拡大して出す（ProPublica：1200px を 1440px に）。
- 記事の終わりに「次の1本」への大きな導線が無い（ProPublica：Read More の小さな一覧と Most Read）。
