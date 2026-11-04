# レンタル・体験（体験、レンタル、教室、時間指定の入場）

## この下位タイプで特に見ること
所要時間、集合場所、天候による中止、時間で区切った枠（1日の枠の並べ方・1枠の定員・受付の開始と締め・分かれた在庫）

## 見本の実測

### Othership（https://www.othership.us/ ・2026-10-27・サウナと氷風呂の時間枠。予約エンジンは Mariana Tek の iframe）
条件：NYC の Flatiron 店・2026-10-28（水）。時間割は othership.marianaiframes.com/iframe/schedule/daily、料金は /iframe/buy/48784。PC 1440 と SP 390 で計測。予約（RESERVE の先）は押していない。

- **検索フォーム**：日付より先に「Select Your Studio」（36/44px 700）で店を選ぶ。地域（22/28px 700）の下に店の行 520×85。選ぶと見出しが店名（36/44px 700）になり、その下に**7日の横帯**（1日 71×76、曜日 30/37px 700 大文字・日付 14px 700、選んだ日に 3px solid #372338 の下線、左右の矢印で1週ずつ）。SP は 1日 29〜42×71・曜日 16px、週送りの矢印は 7×13px。**人数の欄は無い**（1予約1人、連れは Top-Up の券）。URL は `/schedule/daily/48575?activeDate=2026-10-28&locations=48784`。店を押す 112〜130ms・+45KB、日を押す 90〜214ms（その日の枠の JSON 約125KB＋講師の写真で PC +723KB・SP +1,616KB）。
- **結果一覧（1日の時間割）**：時刻順の行。1行 = 時刻 14/20px 700・所要 12/16px #474747・店・講師の丸 62px・枠の名前（下線）・講師・部屋・**状態「56/60 Open」（残り／定員、14/20px 700 #474747）**・RESERVE 180×35（白地・1px solid #372338・13/20px 700 字間 .78px）。行の間隔 PC 117px・SP 220px（縦積み）。Flatiron の水曜は23枠（Free Flow 19・Guided 4）、定員は部屋ごとに 15〜64。**同じ Free Flow を Sauna 1〜6 の部屋ごとに別の行にし、20:00〜21:45 に15分おきの8本**。残り3席の「3/20 Open」も「59/64 Open」と同じ見た目。並べ替えは無く、絞り込みは Instructor・Class Type（49項目）・Rooms（109〜117×35、1px #e1e1e1・角5px）。行に値段は無い。
- **詳細**：枠の名前で同じ画面にダイアログ 605×683（171ms・通信なし）。上の帯 #372338 に 名前・日時（EDT）・「Flatiron · Sauna (Oct) · 60 min.」、下に説明（4行で切る）・講師・店の住所と電話・RESERVE（プラム地）。値段・必要な券・残り席・取り消し期限は無い。SP は題が×に重なり、時刻の後ろに「America/New_York」がそのまま出る。店ページ（/flatiron、12,381px）は h1 72/72px、地図は Google Maps 1296×500 `loading="lazy"`（y=7,645）、「BOOK A SESSION」は地域（NYC 2店）の時間割へ飛ぶ。
- **空きと料金**：空きは行の数字だけ（API の `available_spot_count`／`capacity`、`is_remaining_spot_count_public: true`）。**受付は43枠すべてが開始の14日前の同じ時刻**（`booking_start_datetime`、規約にも「up to 2 weeks in advance」）。キャンセル待ちの枠は API に 10（`waitlist_capacity`）。料金は別ページで券を買う方式。カードの帯（#a24e2b・白 12px 700・字間1px）に**「5 PACK | $57 PER PASS」と1回あたりの値段**、中は価格 36px 700｜回数 30px 700。Single $64（30日失効）→5回 $57→10回 $51→20回 $45、月4回 $42、Off peak $46（平日 7:00〜16:30 の枠だけ。時間割では区別されない）。税の扱いは画面に無い（JSON-LD の説明文にだけ「$135+tax」）。
- **予約前の不安**：規約（/policies）に 2週間前から予約・10〜15分前に到着（扉が閉まったら入れない）・12時間前まで無料で取り消し（以降は券を失う、Intro 2 week は $45）・無断欠席・返金なし など12項目。時間割の行とダイアログには何も出ず、条件が見えるのは店ページの料金カードの「12 HOUR LATE CANCEL WINDOW」だけ。
- **データ**：店ページは `HealthClub`（amenityFeature 4つ・priceRange "$$"・geo・hasMap）。openingHours・ReserveAction・枠の Event は無い。料金ページは `Product`＋`Offer` ×7（画面に無い「NY 100 Class Pack $3600」を含む）。トップの HealthClub はトロントの2店だけ。
- **見た目**：地 #ece8e3・文字 #372338（11.79:1）・主ボタン #dbf572（ライム、#372338 の字で 11.86:1、角30px・1px 黒枠・12px 500 字間1px 大文字）・帯 #a24e2b（白字 5.74:1）。見出しは Lido STF Cond 72/72px（SP 39px）、本文 Founders Grotesk 16/24px。区切りは 1px dashed。予約エンジンの中は白地・#000 と #474747（9.29:1）、プラムは RESERVE の枠とダイアログの帯だけ。
- **動き**：自社 CSS は color／background-color .2s・transform .3s、GSAP ScrollSmoother。予約エンジンは background-color, color 0.35s cubic-bezier(0.075, 0.82, 0.165, 1)（RESERVE のホバーで白地→#372338 地）。prefers-reduced-motion は自社 CSS・予約エンジンとも 0 か所。読み込みの 11.7〜14.3秒後に全画面の割引ダイアログ（時間割の上にも）。
- **重さ（PC / SP）**：トップ 9.75 / 12.34MB（さらに6秒待つと動画で 18.05MB）、時間割 9.49 / 14.89MB、店 12.89 / 15.13MB、料金 8.41 / 13.80MB、規約 6.13 / 8.88MB。どのページにも acsbapp 891KB・予約エンジンの /js 322KB・video.js 582KB（店ページでは4回）。GSAP を 3.13.0 と 3.15.0 の2版。講師の丸 62px に原寸の 0.55〜1.03MB の画像（8枚で 4.30MB）。

### チームラボプラネッツ TOKYO DMM（https://teamlabplanets.dmm.com/ ・2026-10-30・ミュージアムの時間指定入場。自社のチケットストア＋展示ページ https://www.teamlab.art/jp/e/planets/）
条件：2026年11月20日（金）・エントランスパス 11:00 - 11:30・大人2＋子ども1。入場日時は /ticket/admission_date/<32桁>、枚数は /ticket/items/<32桁>。PC 1440 と SP 390 で計測。同意のチェックと、その先（お客様・お支払い情報）には触れていない。

- **検索フォーム**：施設が1つなので検索・一覧は無い。入口は「入場日時の選択」の**価格つきカレンダー**だけで、人数はここで聞かない。PC は2か月を横に（1か月 355px）、3か月目は矢印 50×50 で 790px の帯を transform .5s で送る。SP は3か月を縦に積み、上に月の飛び先。升 PC 51×67・SP 50×62、日 Helvetica 15px 300、**値段「4,800~」12px 300＝その日のエントランスパス（大人）のいちばん安い枠の値段**。印は ○（2px #6abadf の輪）・△（#e57571）・×（#e2e2e2）・休館日は地 #f7f7f7。販売は月ごと（「1月のチケットは10月末頃販売予定」）。日を押すとページ全体を読み直し（PC 1,601ms・SP 1,637ms）、時間枠まで自動で下がる。URL は開くたびに替わる32桁で、日付を持たない。
- **結果一覧（1日の時間枠）**：時間指定なしのプレミアムパス1行（08:00 - 21:00・12,000円）の下に、エントランスパスの**30分ごとの26行**（08:00〜21:00）。行 492×55（SP 334×53）・padding 16・線 1px #d9d9d9・角 4px・間 16px、時刻 14px と値段 14px だけ。**値段は時刻で5段に下がる**（5,200→5,000→4,800→4,600→4,400円）。残りは26行中2行だけ「残り28枚」「残り48枚」14px #f04137（境目は不明）。売り切れ4行は消さず、時刻 #e0e0e0・「売り切れ」#999・pointer-events:none。人数・合計は無い。
- **詳細**：別ドメインの teamlab.art（Next.js・地 #0e0f0e）。全画面の動画（fixed）、頭の「チケット購入」96×30（SP 82×30）が残る。来場案内（y=22,675）に住所・駅3つ・タクシー・シャトルバス・駐車場、地図は埋め込まずリンク。所要は2時間〜2時間半（ヘルプ）。口コミは無い。
- **空きと料金（枚数）**：枠を押すと「枚数の選択」へ（PC 3,580ms・+2,828KB、うち reCAPTCHA 839KB×3）。券種4行（大人 5,200・中高 2,800・子ども 1,500・障がい者割引 2,600円）に 0〜10 の選択 90×50。**選ぶと読み直さずに「大人 5,200円 x 2枚 10,400円」の明細と「合計 11,900円」（20px #444、地 #f2f2f2）**。入場日時「2026/11/20 (金) 11:00 - 11:30」が明細の頭。頭の下に `<progress>` 3px（32→48）。
- **予約前の不安**：枚数の画面に**注意事項7つの同意チェック**（会場の取り違え・膝丈まで水・かかとの無い履き物・学生証・保護者同伴・子ども3名に保護者1名・公式の注意事項）。全部入れるまで「お客様・お支払い情報の入力へ」260×48 は disabled（opacity .2）。**返金不可と日時変更（エントランスパスは入場開始の2時間前まで・3回、プレミアムは当日8時まで）は、入場日時・時間枠・枚数の3画面に0語**。展示ページの来場案内の FAQ、DMM ヘルプ 47958、利用規約 第4・5条にだけある。支払い方法は2か所で食い違う（会員：ヘルプはカード・PayPay・ペイディ、展示ページはカードだけ）。
- **データ**：チケットストアは JSON-LD 無し。展示ページは `Event`（startDate・endDate・住所が空文字、Place の name は null）と `ImageObject`。時間枠はサーバーの HTML（`data-entry_time_id`・`data-ticket_id`）、残りは文字だけ。
- **見た目**：白地・文字 #1f1f1f（16.48:1）・主ボタン #171717・面 #f2f2f2・注記 #999（2.85:1）。システムのヒラギノ角ゴ、数字だけ Helvetica 300。CSS の font-size は 12px 94・14px 82・16px 42。トップの頭は黒地に黄 #fff100（17.83:1）。
- **動き**：ストアはカレンダーの transform .5s と行の矢印 all .4s ease だけ、ボタンのホバーは opacity .85 で即時。teamlab.art は opacity .36s・transform 1s を cubic-bezier(.215,.61,.355,1) で（178回）、keyframes 26。prefers-reduced-motion はどちらも 0。
- **重さ（PC / SP）**：入場日時 0.84 / 0.80MB（自社のファイルは jQuery 85KB と JS 62KB）、トップ 13.13 / 8.48MB（YouTube の base.js 1,630KB を2回）、展示ページ 103.84 / 20.32MB（HLS の mp4 80.4MB・AVIF 18.0MB・reCAPTCHA 4.3MB）、ヘルプ 4.00 / 1.71MB。タグを含めると入場日時でも Google Tag Manager 5本で 3.8MB。

### Lost Shore Surf Resort（https://www.lostshore.com/ ・2026-11-04・エディンバラの波のプールの時間枠。予約エンジンは wave7 の booking.lostshore.com）
条件：Plan & book（/activity-agenda）の 2026-11-02〜08 の週。PC 1440 と SP 390 で計測。升を押したモーダルの＋は押したが（通信なし）、Confirm は押さず、カートに入れていない。

- **検索フォーム**：日付と人数の欄は無い。Plan & book の頭に分類のタブ Surf／Resort／Surfskate（80×53・#f26122・角5px、選んだ物は 2px 黒枠）、絞り込みの帯に **Spaces left（At least 1〜N entries left＝残りの下限）**・Session（12種＋Check all／Uncheck all／Confirm）・View by・Reset、その下に段のチップ 150×29（角15px・13px、12色）。週は › で送り（POST `setAgendaDates`、約330ms、URL は変わらない）、月のボタン 193×47 のメニューに Current week〜8週先。
- **結果一覧（週の升）**：**資源ごとに別の升**（Reef Left - Sessions・Reef Right - Sessions・Beginner lessons・Lessons Reef Left／Right・Surf Weekends、1つ 423px、頭の帯 18px 800 に Reef Left #59c4f6・Reef Right #63c465）。行＝時刻（**1時間 45px**、`position:absolute;top:45px`）、列＝7日（曜日の頭 40×58.6 #dedede、今日は桃色）。**升 40×40・角9px・15px の中に残りの人数だけ**、地は波の段の色。今週 109升（未来 78・過ぎた 31）。過ぎた升は消さずに opacity .5。ホバーで升に #f26122 の輪と吹き出し 229×98（From・To・Spaces left・Price category・Session）。
- **色の切り替え**：View by＝Wave setting（12色）／£ Price category（全部 #00405b、区分は Std の1つ）／availability（#82cf2e・#f0e36b・#ff574d、凡例 Mainly available／Averagely／Mainly unavailable）。描き直し約1,050ms。**availability の境目は画面に無い定員との比**で、Manoeuvres の残り4が緑と赤、Turns の8が黄で Cruiser の7が緑。
- **詳細**：施設側の surf-sessions（7,080px）。60分・プールに20人・10〜15本。9つの波を h3 22px 800・「From £60 (£50 child)」16px 600・説明・Suitable for・Wave height（Thigh to waist〜Head high +）・券の種類（Intermediate／Advanced）の**同じ並び**で。Book now 125×54（SP 319×54）は Air Wave 以外の8つとも同じ /surf-sessions。SP に貼り付く予約の帯は無い。予約エンジン側の surf-sessions に「Lefts or Rights?」（Regular／Goofy × Forehand／Backhand の 2×2）と Winter Surf Safety（7℃・4℃・2℃）。
- **空きと料金（券と数量）**：升を押すと同じ画面のモーダル 992×572（PC 851〜1,354ms、POST `modalBookingVoucherActivity` +1.6KB）。頭に「New booking: Nov. 4, 2026 at 9:00 am」24px と「**10** entries left ● Reef Left - Sessions ［Turns to Tubes］」20px。券の行は ADULT £70.00・CHILD £60.00（#f26122 の値札）と − 41×35／欄 70×34（入力不可）／＋。**大人を10にすると大人・子どもの両方の＋が disabled（opacity .65）＝上限は残りを券種で分け合う**。＋で通信は無く、合計は出ない。下に Cancel・Confirm and continue my bookings 265×42・Confirm and pay 144×42。
- **予約前の不安**：升とモーダルに取り消しの語が0。FAQ の「How do I cancel or amend my booking?」は Surfing ではログインと Cove T&Cs へのリンク、Stay では泊の規定（14日以内なし・15〜28日 50%・28日より前 全額）。活動の規定は Cove T&Cs のページ（本文1行）の先の11ページの PDF（110KB）の 2.3：**7日以内は移動も返金も無し、7日より前は移動・クレジット・全額返金**。支払いは予約時に全額。悪天候は施設が閉まったときだけ返金。冷水の基準は FAQ（数字なし）・予約エンジン（大人の初心者4℃）・PDF（大人のレッスン2℃）で食い違う。
- **データ**：予約エンジンに JSON-LD 無し（枠は `data-available_entries`・吹き出しの HTML・onclick の ID）。施設側は Yoast の WebPage・Organization・BreadcrumbList、用語のページに FAQPage。Event・Offer・Product は無い。
- **SP**：6つの升を1つの横スクロール（2,531/356px）に並べ、最初の升も 399px で土日が切れる。全部見える升は109個中35個、送れる印は無い。
- **見た目**：地 #f5edea・文字 #3d3b33（9.71:1）・主 #f26122（白字 3.23:1）。施設側は PP Mori（400・600・800）、予約エンジンは Helvetica（h1 52px 900 字間 -2.34px、本文・升 15px）。トップの頭の h1 は Open Sans の指定で読めず標準の書体、同じ文の h1 が3つ。過ぎた升の白字は 1.62〜1.85:1。
- **動き**：升は transform・box-shadow・border-color .14s、Book now は .3s。予約エンジンの keyframes 35・reduced-motion 7か所（Bootstrap など）。トップの最初の画面に10%割引の登録の面と Cookie の面が重なる。
- **重さ（PC / SP、展開後）**：トップ 3.91 / 3.37MB、週の升 2.56 / 2.56MB（うち Adyen の決済 SDK 536KB・決済と会員の CSS 313KB）、施設の surf-sessions 4.46 / 4.21MB（PNG 866KB）、エンジンの surf-sessions 3.12MB、FAQ 3.63 / 3.13MB。転送量はトップ 1.18MB・週の升 1.65MB（うち Google Tag Manager 664KB）。

## 真似る型
（見本：Othership・チームラボプラネッツ・Lost Shore Surf Resort。2つ以上で同じだったことを先に、1つだけの型は出典を添えて書く。）

1. **枠は時刻順に全部並べ、満員・過ぎた枠も消さずに残す。** 1日なら時刻の行（Othership：23行・行の間 117px／プラネッツ：26行・492×55）、1週間を見せるなら行＝時刻・列＝7日の升（Lost Shore：1時間 45px・升 40×40）。満員・過ぎた枠の文字は 4.5:1 以上にする（プラネッツ #e0e0e0＝1.32:1、Lost Shore の opacity .5 で白字 1.62〜1.85:1 は直す）。
2. **在庫が場所で分かれるなら、場所ごとに別の行・別の升にする。** Othership：Sauna 1〜6 を別の行／Lost Shore：Reef Left・Reef Right・教室を別の升（423px、頭の帯に名前と色）。日付より先に場所を選ばせる形もある（Othership の店）。SP は升を幅に収めて場所をタブで替える（Lost Shore の横 2,531px は反面教師）。
3. **残りは数で。** Othership 全行「56/60 Open」、Lost Shore 升の中に残りの数、プラネッツは一部の行だけ「残り28枚」。作るときは全部の枠に数を出し、少ない枠は色と言葉を替え、境目を数で凡例に書く（Lost Shore の availability は定員との比で、同じ4が緑と赤）。
4. **人数は「残りの下限」として枠を絞る。** Lost Shore：At least 1〜N entries left。作るときは人数の欄からそのまま下限にし、足りない枠は押せなくして理由を出す。
5. **枠を選んだら、その場で券種ごとの単価と数量、上限は残りの数。合計もそこで出す。** Lost Shore：モーダルに ADULT £70／CHILD £60、上限は残り10を共有（合計は無い）／プラネッツ：次の画面で「単価 x 枚数」と合計。Othership は1予約1人で値段が別ページ（反面教師）。
6. **取り消しの期限は、枠の日時から日付に直して合計のすぐ下に。** 3つとも枠の画面に無い（Othership：規約の12時間前／プラネッツ：入場2時間前・3回はヘルプだけ／Lost Shore：7日は PDF の 2.3 だけ）。
7. **段・種類の色で升を塗るなら、説明のページも同じ色と同じ列にそろえる。** Lost Shore：12色のチップ・9つの波を Wave height・Suitable for・From £ の同じ並び。色の数は増やしすぎない（12色に似た色の組が3つ）。升の中にも段の短い名前を入れる。
8. **日付で値段が変わるなら、日を選ぶ前に升に最安値を出す。時刻で変わるなら行ごとに値段。**（プラネッツ：升に「4,400~」、5,200→4,400円の5段。Othership の Off peak $46 は時間割に出ず反面教師）
9. **時間指定の無い上の券は、枠の表の頭に1行で。**（プラネッツ：プレミアムパス 08:00 - 21:00・12,000円）
10. **当日の困りごと（足元・年齢・泳力・水温）は申し込みのそばで確認にし、数字は1か所に決める。**（プラネッツ：7項目の同意、全部入れるまでボタン opacity .2／Lost Shore：7歳以上・25m・冬の 7℃・4℃・2℃ が3か所で食い違う）
11. **受付の開き方と週の送り方を、枠のそばに書く。**（Othership：開始の14日前の同時刻・画面に無い／プラネッツ：月ごとに販売／Lost Shore：8週先までの週のメニュー。週は URL に残らない）
12. **体のくせで選ぶもの（左右・利き足）は、升の横に小さな表で。**（Lost Shore：「Lefts or Rights?」 Regular／Goofy × Forehand／Backhand の 2×2）

## 反面教師
- 枠の行にも詳細にも、値段・必要な券・取り消し期限が無い（Othership）。枠を選んだら、合計と「◯月◯日 ◯時まで無料」を同じ枠の中に出す。
- 安い時間帯の値段（Off peak $46、平日 7:00〜16:30）が時間割の枠に出ない（Othership）。対象の枠の値段に割引を自動で入れて見せる。
- 残り3席と59席が同じ見た目（Othership、14px 700 #474747）。残りが定員の2割以下なら色と言葉（「あと3席」）を替える。
- 共有した URL（`?activeDate=…&locations=…`）を直接開くと条件が外れ、今日の地域全体に戻る。店ページのボタンも店の ID を渡さない（Othership）。
- SP の週送りの矢印が 7×13px、ダイアログの題が閉じるボタンに重なる、タイムゾーン名をそのまま出す（Othership）。
- 62px の丸に原寸の写真（0.55〜1.03MB）を読み、日を替えるたび SP で +1.6MB（Othership）。
- 同じ店ページに電話番号が2つ（381-0172 と 381-1699）（Othership）。
- 返金不可・日時変更の締め（2時間前・3回）が、入場日時・時間枠・枚数の3画面に無い（プラネッツ）。選んだ枠から締めの時刻を計算し、合計のすぐ下に出す。
- 価格カレンダーの凡例に ○ が無く（△ × ■ の3つ）、PC では凡例がカレンダーの下（プラネッツ）。○ #6abadf 2.16:1・△ #e57571 2.95:1。
- 日を押すたびにページ全体を読み直し（約1.6秒）、URL は開くたびに替わる32桁で日付を持たない（プラネッツ）。
- 支払い方法の説明が展示ページとヘルプで食い違う（プラネッツ）。
- 展示ページの Event の startDate・endDate・住所が空文字（プラネッツ）。
- モーダルに合計・税・取り消しの条件が無く、活動の取り消し（7日）は空のページの先の11ページの PDF だけ。FAQ の取り消しは泊の規定（14日・28日）で、活動と取り違えやすい（Lost Shore）。
- 空きの色の境目が画面に無い定員との比で、同じ残り4が緑と赤になる（Lost Shore）。境目を数で決めて凡例に書くか、「4/20」と定員を添える。
- SP で升を横に 2,531px 並べ、最初の升も 399px で土日が切れる（Lost Shore）。7列を幅に収め、場所はタブで替える。
- 波の説明の Book now 8つが同じ一覧へ飛び、波を渡さない（Lost Shore）。
- 週の升のページで決済の SDK（Adyen 536KB）と会員・決済の CSS を読む（Lost Shore）。
- 白字 on #f26122 が 3.23:1（Book now・値札・Confirm）、Cookie のボタン 2.79:1（Lost Shore）。
