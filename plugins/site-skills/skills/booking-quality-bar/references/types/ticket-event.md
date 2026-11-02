# チケット・イベント（公演、展示、スポーツ）

## この下位タイプで特に見ること
日時と席種、販売段階（先行・一般）、枚数の上限、同じ演目の回の並べ方、手数料の含め方、配慮の回（字幕・音声ガイド）

## 見本の実測
### DICE（https://dice.fm/ ・2026-10-25・チケット販売サービス）
条件：トップ・ロンドンの一覧（/browse/london-54d8a23438fe5d27d500001c）・公演 /event/6a8eff68…（Ministry of Sound・10/30）・ヘルプ /help。PC 1440 と SP 390 で計測。

- **検索**：条件ボタン3つ「場所／日付／価格」が横一列（高さ50px・角8px・#222・12px 700 大文字・padding 12/14/12/10px、PC y=105）。開く・選ぶと 1px の白い枠、選んだ後は「26 OCT ×」。その下にジャンルのタイル（本家 CSS：`min-width:72px;padding:12px;border-radius:8px;background:#222;font-size:11px`）、選ぶと白地＋×、SP では下に下位ジャンルの行が出る。人数・枚数は探す段で聞かない。並べ替えのボタンは無い。
- **日付**：白い面 345×316（SP 幅358px・全画面ではない）、1か月・月曜始まり・過去日は灰。上に白いピル TODAY／TOMORROW／THIS WEEK（高さ32px）。公演のある日の印は無い。選ぶと URL に `?from=2026-10-26&until=2026-10-26`（2,574ms・+236KB）。from／until の2つを持つ＝範囲を表せる形。ジャンルは `/culture/comedy` をパスに足す。
- **価格**：白い面 345×132、黒丸のつまみ2つ、下の黒いピルが「FREE → ANY AMOUNT」と範囲を読む。
- **一覧**：PC 4列・画像 263.5px 四方（角8px）・列の間32px・行の送り 390〜411px。SP は 96px の画像（角8px）＋右に4行・送り120px・右端にハート30px。4行は 題名16/20・日付14/17.5 #f2ef1d・会場・値段（「From £6.50」「Free」「£17.54」の1つ）。件数は出さない。見出しは「Popular Events」→日付を入れると「Upcoming Events」、後半「in London」は白33%（2.77:1）。
- **詳細**：PC は写真 328px（角10px）＋本文 704px、間48px。題名 64px/70.4px 大文字（SP 35px/42px）、会場 24px 白、日付 24px #f2ef1d 字間0.48px（「Fri 30 Oct, 10:30 pm GMT」とタイムゾーンまで）。口コミは無い。地図は埋め込まず「OPEN IN MAPS」（156×32）で外へ。
- **値段と買う枠**：題名の下（PC y=547）に 704×140・#1a1a1a・角10px。「From £36.05」24px 700 白66%＋「The price you’ll pay. No surprises later.」14px＋右にボタン 115×40・角20px。下段「Got a code? ／ For discounts or locked tickets」。SP は枠を画面下に固定（高さ74px）。
- **空き**：見えた値は「From £36.05」1つ。ボタンは #333 に #666（2.2:1）で、中の ◆（`.kqBHKx` 26px・`rotateY 0→360deg rotateZ(45deg)` 5s infinite＋opacity 2s）が回り続け、10秒待っても押せない（PC・SP）。「Got a code?」は電話番号でのログインの窓を開く。券種・残りの画面には届かなかった。ページの文言辞書に「Selling fast」「Sold out」「wait list」（画面では未確認）。
- **予約前の不安**：払い戻し（購入24時間以内／中止・延期は可、開演24時間前以降は不可）は本文の下（PC y=1034、SP y=1128）。枠から487px下で、PC の最初の画面に入らない。支払い方法の表示は公演ページに無い。
- **データ**：`MusicEvent`（startDate・endDate・eventStatus・eventAttendanceMode・image 3枚）＋`Place`/`PostalAddress`/`GeoCoordinates`＋`AggregateOffer`（lowPrice＝highPrice＝36.05 GBP）。券種ごとの `Offer`・availability は無い。他のページは Organization・WebSite・SearchAction だけ。
- **見た目**：トップとヘルプは白地、一覧と公演は黒地（ヘッダーの形は同じ）。色リテラル上位は #fff・#000・#333・白66%・#666・#222。有彩色は CSS 変数で6つ（--brand-yellow #f2ef1d など）、画面に出るのは日付の黄とトップの #4bfa94。書体は ABC Favorit（見出し 350〜400、太字700は12pxの大文字ボタンだけ）、トップ h1 だけ Foggy 106px/88px。ボタンは角20px・12px 700・字間0.72px。
- **動き**：`background-color .3s ease, color .3s ease`（トップで68要素）、`opacity .2s`、下から出る `translateY(100%)→0` .25s `cubic-bezier(.39,.575,.565,1)`。`prefers-reduced-motion` の指定は0件。
- **重さ（PC / SP）**：トップ 14.42 / 13.85MB（動画 3.98MB）、一覧 10.99 / 10.03MB、公演 10.47 / 9.51MB、ヘルプ 8.33 / 7.47MB。JS が7割前後。全ページで Stripe 1.1MB と reCAPTCHA（約840KB）×3 を読む（ヘルプでも）。一覧の写真 30件は imgix の avif で 312KB。

### Shakespeare's Globe（https://www.shakespearesglobe.com/ ・2026-10-29・劇場の自社サイト。席の画面は basket.shakespearesglobe.com）
条件：トップ・What's On（/whats-on/）・公演 The Seagull（/whats-on/the-seagull/、70回）・Globe Theatre Guided Tour（毎日の枠）・規約（/policies/terms-conditions/）。PC 1440 と SP 390 で計測。席の画面はボット対策の確認ページが出るので開いていない。What's On の日付の一覧と絞り込みは、この環境では Algolia が 405 を返し中身を確かめられなかった。

- **検索**：What's On の上に「By Event／By Date」の2つのタブ（選んでいる方が白地、選んでいない方が赤地 #C91517）。By Date は月のチップ（24か月）と日の升 40×53（日 21.6px・曜日 10.8px）の横帯で、**押した日＋7日の8日分**が選ばれる（今日は赤地、間は inRange、終わりは rangeEnd）。選んだ日は URL に残らず `#day` だけ（問い合わせの中で `unixDay>=…`・`<=…+604800`）。絞り込みは Event Type／Venue／Access Type の3つ（react-select 170×38）。SP は「Filter events」で開く。人数の欄は無い。
- **一覧**：劇場ごとの見出し（Globe Theatre・Sam Wanamaker Playhouse）の下にカード。PC 433×615（写真 433×270）・SP 323×483、題 30px（SP 24px）700。カードに値段・次の回・空きは無い。配慮の回の印 AD／R／BSL／CAP は 35×20・12px sans-serif・白 on #797676（4.5:1）。ボタンは「INFO & TICKETS」、会員の先行中は「PRIORITY BOOKING FOR MEMBERS」。
- **詳細**：頭は演目の写真と演目ごとの地の色（The Seagull は red-black #370F10、ツアーは teal-black #17313A）。右下に「PRICES: £89.00 - £5.00」と BOOK NOW 208×60（SP 187×55）、押すと同じページの #book へ飛ぶ。頭が画面から出ると予約の帯が貼り付く：**SP は画面の上（ヘッダー60pxの直下 y=70）に 370×54**、PC は (1220,120) に 200×58。右の DETAILS（350px、red-black 地）に席種ごとの値段幅と手数料（「£89–£29* *includes a £3 per order transaction fee and a £1 per ticket restoration levy」「Standing £10, £5」）。
- **空きと料金（公演日の表）**：DATES & TICKETS は**1行1回**の表。The Seagull は70行（1月14・2月14・3月31・4月11、7.30 PM 43・2.00 PM 27）。土曜の昼夜は同じ日付の行が2つ。行 656×110（SP 351×89）、日付 20px 700（SP 11.52px）、時刻のボタン 120×43（白地・1px #C91517・角4px・16px 700 #000、ホバーで赤地白字 .2s ease-out、SP 120×34・11.52px）、その下に値段の幅「PRICES: £89.00 - £29.00* | STANDING: £5.00, £10.00」13px 700 字間 .5px（SP 11.52px）。**残りは「LIMITED TICKETS」の一言**（70行中1行、13px／SP 8.32px）だけで、残数・席種別の空きは出ない。回の注記「Filmed performance」12px（SP 7.68px）。表の上に手数料の面（656×152・#F9F4F2・16px）。表の長さ PC 7,688px・SP 6,245px。BOOK NOW から表まで PC 4,461px・SP 6,670px 下。
- **空きと料金（毎日の枠＝ガイドツアー）**：FullCalendar 3 の月表示（PC 656×586・升 93×80、SP 351×469・升 50×64）。回のある日に 32×30 の赤い丸（白い矢印、**名前も aria-label も無い**）。92日分（10/29〜1/31、12/25・12/26・1/1 は無し）を HTML に配列で持ち、月送り 72〜81ms・通信なし。時刻・値段・残りはカレンダーに無い。今日は #FCF8E3、TODAY は今月なら押せない。開くと今月なので、過ぎた4週は印なし。頭のボタンは「VIEW DATES」。
- **配慮の回**：リラックス（R）・字幕（CAP）・音声ガイド（AD）を、70行の表の注記と、表の上の3つの「Show dates & times」（212×38・#E30614 on #F9F9F9 4.64:1・開閉 max-height .2s ease-out）の両方で引ける（The Seagull：R 2・CAP 4・AD 2）。Access Scheme に登録した人向け。
- **予約前の不安**：払い戻しなし・**公演48時間前までクレジットに返券**（£10 以下 £2、それより上 £3 の手数料／枚）・48時間を切ったら完売の回だけ再販売・天気に関わらず上演・遅れたら幕間まで待つことがある・6人以上はウェブ不可、はチケットの規約にだけある。公演ページで見えるのは手数料（DETAILS と表の上の面）と16歳未満の同伴だけ。
- **データ**：JSON-LD は5ページとも無い（Event・Offer 無し）。地図の埋め込みも無い。公演日は HTML の行（席の画面の URL は `/<演目の番号>/<回の番号>`）。
- **見た目**：色は名前つきの組（赤10・黒6・白5、`u-*-bg`）。主ボタン #C91517（白字 5.83:1）、小見出しの赤 #E30614。書体は Effra（Adobe Fonts、300/400/700/900）だけ。CSS の font-size は割合（80%・90%・120%）で、SP は全体がおよそ0.8倍、公演日の表だけ 0.58倍。本文の最初の1文字を #C91517・530% の飾り文字にする。
- **動き**：all 200〜300ms ease-out が主。頭の BOOK NOW は fadeInUp 600ms cubic-bezier(.42,.01,.23,1) を 1000ms 遅らせる。ロゴの輪がスクロールの割合で回り、一番下で scale 3.5・50度（GSAP）。**ロゴの回転・スムーズスクロール・動画を JS でも `prefers-reduced-motion` で止める**、CSS も reduce で .01ms。
- **重さ（PC / SP）**：規約の入口 3.65 / 3.76MB、公演 5.51 / 5.19MB、What's On 8.88 / 6.49MB、トップ 9.85 / 8.81MB、ガイドツアー 13.30 / 11.47MB。いちばん重いのは写真（ツアーの JPEG 8.9MB、トップの「?resize=16%2C10」の GIF が 2,985KB のまま）。全ページで OneTrust 850KB・Font Awesome 約500KB・`/wp-json/wp/v2/` 195KB。

### Philharmonie de Paris（https://philharmoniedeparis.fr/en ・2026-11-02・コンサートホールの自社サイト。席の画面は billetterie.philharmoniedeparis.fr＝SecuTix）
条件：トップ・カレンダー（/en/calendar?genreGps=1&types=1 と /en/calendar）・公演 /en/activite/29624（Orchestre de Paris / Klaus Mäkelä、2026年12月2日・3日の2回）・席の画面（perfId=10229442289070）・Subscriptions and discounts（＋仏語の CGV）。PC 1440 と SP 390 で計測。席の画面で枚数を選ぶまでで、Add to cart は押していない。

- **検索**：ヘッダーの「CALENDAR」185×56（角28px・#be244f）から。紺の日付の帯（「MONDAY, 2 NOVEMBER 2026」32px）の右に When｜What｜Advanced filters｜検索。When は白い面 312×534 に**1か月・月曜始まり・日 32×32**、選んだ日は口紅色の丸。**公演のある日の印は無い**。日を押すと 683ms で URL が `?startDate=2026-11-19` になり、「from 19/11/2026 ⊗」のチップ（40px）。**終わりの日は持たない**。What は7項目。人数・枚数は探す段で聞かない。件数「4168 results」は画面の外に置き読み上げだけ。
- **一覧**：日ごとの紺の帯 72px（SP 22.4px）→ 時刻 36px → カード 1368×343（写真 323｜本文 784｜灰 #edeff1 の面 261）。灰の面に会場・**席種6つの値段「€13｜€27｜€42｜€62｜€78｜€88」16px/25px、売り切れた席種だけ取り消し線（400、`aria-label="Unavailable price"`）、残りは 600**・空き・「Info & Tickets」160×40（角20px）。空きは丸 17px＋14px の言葉で3段：GOOD＝何も出さない／LIMITED＝「Last tickets」緑 #238044／NONE＝「Sold Out」「Sold Out – Waiting List」赤 #da2320（11月2日〜の22公演で 13／4／3／2）。値段と空きはカードを出した後に22件分を1回の JSON（`level`・`label`・`buttonType`）でまとめて差し込む。並べ替え・地図は無い。
- **詳細**：写真の頭（題 38px/40px Bold 大文字、SP 22px）の下に**回のチップ**「2 Dec / 8:00 pm / ● Last tickets」（選んだ回は白地、約118×99。空きは 12px）。右に白い枠 432×555（角16px）：日付の select 380×47（24px で「— 8:0」と切れる）→ ● Last tickets → **Book my ticket 380×60**（角30px・18px 600、PC y=687）→ SEAT CATEGORIES AND PRICES（席種6つを2列、色の丸＋「Catégorie 1 €78.00」、売り切れは線）。チップを押すと **349ms・通信 0KB・URL は替わらず**、select と席種の線が替わる（3日は Catégorie 1 も売り切れ）。SP は**紺の帯 80px に Book my ticket 370×60 を画面下に固定**（最初の画面から。帯に日付・値段は無い）。地図は埋め込まない。口コミは無い。
- **買うまでの段**：Book my ticket → **4択のモーダル**（個別の券／定期会員を作る 3〜5公演15%・6公演以上25%／28歳未満 1枚 €9／会員に足す）→ 個別の券は新しいタブで席の画面へ。
- **席の画面**：「1人9枚まで」の説明（14px #1675e1、4.50:1）→ **席種×料金区分の表**（Seat Category｜Tariff｜Unit Price｜Quantity）。席種は左の線 4px の色（1 #ff9090・2 #ffc080・3 #ff90ff・4 #60b0ff。**詳細の丸と同じ色**）。行は「Jeunes de 16 à 27 ans 11.00 EUR」と「Full price 78.00 EUR」。**枚数の select（80×40・角6px）の上限がその席種の残り**（12月2日：Catégorie 1＝1・2＝3・3＝4。残りが9を超える席種は9まで）。数字は画面に書かない。売り切れは「Sold out」ピル（#bc1c00 on 5%、77×32）。枚数を選ぶと約1.5秒・通信 0KB で**「TOTAL　2 TICKETS　136.00 EUR」＋Add to cart の帯が sticky で画面下**（PC 1038×72・SP 358×104、#f4f5ff）。Add to cart（#b3d6fd に黒）は0枚でも同じ色。11月2日の回には区画（1er Balcon impair - courbe など）を選ぶ「Preference」の列があり、座席表は無く自動で割り当て。
- **予約前の不安**：払い戻し不可・**2025-26年から同じか高い席へ公演の48時間前まで交換、手数料は券の10%**・定期会員は1シーズン4回無料・7日前を切った注文はすぐ払う、は**仏語の CGV だけ**。英語の案内は会員の特典に「up to 3 times」と書き回数が合わず、見出しも「SEASON 2025-26」のまま。公式の転売（額面以下・買う人が1枚 €1）は案内の y=4,330 と詳細の y=2,943。席の画面には右下の「General terms & conditions」のリンク（y=1,011）と支払いの印5つだけ。
- **データ**：詳細に**回ごとの `MusicEvent`（2つ）と、席種ごとの `Offer`（price・EUR・券売り場の url・`availability` InStock／OutOfStock・validFrom＝販売開始）**。`"EventStatus"` と大文字で始まり綴りが違う、3日の endDate が空文字。トップ・一覧・案内は JSON-LD 無し。
- **見た目**：紺 #001b3b（白地で 17.21:1）が文字と帯、口紅色 #be244f が押すもの（白字 5.91:1、ホバー #b9204a）、灰の地 #d4d9de・#edeff1、白いカード角16px。見出しは自社の Philharmonique（細い大文字。CALENDAR 90px／SP 50px）、本文は Source Sans Pro（Google Fonts）。券売り場は Montserrat・水色 #b3d6fd で、紺と口紅色は消える。
- **動き**：主ボタンは `transition: all`（0s）で色が一瞬で替わる。CSS は box-shadow .3s ease が主。頭のスライドは自動で、prefers-reduced-motion は自社・券売り場とも0か所。
- **重さ（PC / SP）**：トップ 10.70 / 4.21MB（テーマの中の JPEG 1枚 7,019KB、SP は読まない）、一覧 5.30 / 5.30MB、公演 4.27 / 3.94MB、席の画面 5.70 / 5.53MB（CSS 1本 2,341KB・JS 1,084KB）、案内 3.22 / 3.22MB。どのページにも同意の SDK（sdk.privacy-center.org、展開後 674KB）。sprite.svg 187KB を2つの URL で2回読む。

## 真似る型
見本は DICE（販売サービス）・Shakespeare's Globe（劇場の自社サイト）・Philharmonie de Paris（コンサートホールの自社サイト＋SecuTix）の3つ。

1. **値段は手数料込みで出し、含んだことを1文で添える**。DICE は「From £36.05」の下に「The price you'll pay. No surprises later.」、Globe は「£89–£29*」の * で「£3 per order・£1 per ticket を含む、立ち見は除く」を DETAILS と公演日の表の上の面（656×152）の2か所で言う。作るときは、合計の下に内訳の1行を置く。
2. **公演日がいくつもある演目は、1行1回の表**（Globe：行 656×110、日付・時刻のボタン 120×43・値段の幅 13px 700、同じ日の2回は2行）。DICE は1公演1ページなので表が無い。作るときは、行に「日付・時刻のボタン・席種ごとの値段（と残り）」を並べ、配慮の回の印も行に入れる。
3. **買う入口は1つにして、題名のすぐ下に置き、SP は画面に貼り付ける**。DICE は題名の下（y=547）の枠で、SP は画面下 74px に固定。Globe は頭の右下（y=675）で、SP は**画面の上**に 370×54。どちらも値段（DICE「From £36.05」、Globe「PRICES: £89.00 - £5.00」）を入口の横に出す。 Philharmonie は右の白い枠 432×555 の Book my ticket 380×60（y=687）で、SP は画面下の紺の帯 80px（値段は入れていない）。
4. **日付は「始まり」と「終わり」の範囲で持つ**。DICE は URL に `?from=…&until=…`、Globe は選んだ日＋7日（`unixDay` の範囲）。作るときは URL に from／until で残す（Globe は残らなかった）。 Philharmonie は `startDate` だけで終わりを持たない。
5. **毎日ある枠（ツアー・体験）は月のカレンダーに印**（Globe：升 93×80、休みの日は印なし、データは HTML に持って月送りで通信しない）。DICE のカレンダーには印が無かった。作るときは印に回の数・最初の時刻・残りを入れ、読み上げの名前を付ける。
6. **配慮の回（字幕・音声ガイド・リラックス）は、行の印と種類ごとの絞り込みの両方で引ける**（Globe：表の注記と3つの開く枠）。印は本文と同じ書体で、14px 以上。

7. **一覧の段で、席種ごとの値段を全部並べ、売り切れた席種だけ取り消し線で残す**（Philharmonie：「€13｜€27｜€42｜€62｜€78｜€88」16px/25px、線は 400＋`aria-label="Unavailable price"`、残りは 600。Globe は行に値段の幅「£89.00 - £29.00*」、DICE は「From」の1つ）。作るときは値段の幅だけで済ませず、どの席種が残っているかまで一覧で見せる。
8. **同じ演目の回が少ない（2〜5回）なら、題の下に「日・時刻・空き」のチップ**を並べ、押すと読み直さずに右の枠の空きと席種を替える（Philharmonie：約118×99、349ms・0KB）。回が多いなら Globe の1行1回の表。
9. **席の画面は「席種×料金区分」の行で、枚数の上限をその席種の残りの数にする**（Philharmonie：上限 1・3・4、1人9枚まで）。上限を数字でも横に書く（本家は書かない）。枚数を選んだら「◯枚　合計」と買うボタンの帯を画面下に貼り付ける（PC 1038×72・SP 358×104）。
10. **席種は1つの色を持ち、詳細と席の画面で同じ色を使う**（Philharmonie：1 #ff9090・2 #ffc080・3 #ff90ff・4 #60b0ff、詳細の丸 16px と席の画面の左の線 4px）。
11. **構造化データは回ごとの Event に、席種ごとの Offer と availability（InStock／OutOfStock）を入れる**（Philharmonie。DICE は AggregateOffer だけ、Globe は無し）。

## 反面教師
- 残りが「LIMITED TICKETS」の一言だけで、SP は 8.32px。席種ごとの残りは席の画面まで出ない（Globe）。
- SP の公演日の表の字が 11.52px、注記が 7.68px（Globe。PC の 0.58倍に縮む）。
- BOOK NOW から公演日の表まで PC 4,461px・SP 6,670px（Globe。間に出演・ほかの演目・配慮の回）。
- 返券（48時間前まで・クレジットのみ・1枚 £2〜£3）が規約のページにしか無い（Globe）。
- 月カレンダーの印が名前の無い 32×30 の丸で、時刻も残りも無い。開くと過ぎた4週から（Globe のツアー）。
- 選んでいるタブが白、選んでいないタブが赤で、逆に見える（Globe の By Event／By Date）。
- 買うボタンが読み込み中（◆ が回る・#666／#333＝2.2:1）のまま止まり、券種に届けない（DICE。PC・SP とも10秒待って変化なし）。
- 割引コードを入れる前に電話番号のログインを求める（DICE「Got a code?」）。
- 払い戻しの条件が買う枠より下（DICE：枠は y=563、条件は y=1034／Globe：公演ページに無く規約だけ）。枠の中に1行で入れる。
- 日付のカレンダーに、公演のある日の印が無い（DICE。押す前に空きの有無が分からない）。Globe の What's On の日の帯にも印は無い。
- 1ページ 10MB 前後。決済とボット対策を全ページで読み、文字だけのヘルプでも 8.33MB（DICE）。
- 一覧の見出しの後半が白33%（2.77:1）、件数も並べ替えも無い（DICE）。
- 残りが少ないことを緑 #238044 の「Last tickets」で言う。写真の上のチップでは 12px・3.48:1（Philharmonie）。少ないは赤い側の色で、数で言う。
- 席の画面に残りの数も払い戻しの条件も無い。上限は select を開くまで分からず、払い戻し不可・48時間前の交換・手数料10%は仏語の CGV だけ（Philharmonie）。合計の帯の下に、回の日時から計算した交換の締めを1行で出す。
- 予約の入口の後に4択のモーダルがもう1段あり、個別の券は新しいタブで開く（Philharmonie）。いちばん多い選択肢は直接、ほかは文字のリンクに下げる。
- SP の固定の帯がボタンだけで、どの回の、いくらの券か書かない（Philharmonie：80px）。DICE のように値段を入れる。
- 日付の select が自分の幅に収まらない（Philharmonie：24px・380px で「— 8:0」）。
- 暦に公演の印が無く、`startDate` だけで終わりの日を持たない（Philharmonie）。
- 英語の案内と販売条件で交換の回数が食い違う（Philharmonie：3回と4回）。規定は1か所から引く。
