# チケット・イベント（公演、展示、スポーツ）

## この下位タイプで特に見ること
日時と席種、販売段階（先行・一般）、枚数の上限

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

## 真似る型
（見本が2つ以上そろったら、共通する型をここにまとめる。見本は今 DICE の1つ。）

## 反面教師
- 買うボタンが読み込み中（◆ が回る・#666／#333＝2.2:1）のまま止まり、券種に届けない（DICE。PC・SP とも10秒待って変化なし）。
- 割引コードを入れる前に電話番号のログインを求める（DICE「Got a code?」）。
- 払い戻しの条件が買う枠より下（DICE：枠は y=563、条件は y=1034）。枠の中に1行で入れる。
- 日付のカレンダーに、公演のある日の印が無い（DICE。押す前に空きの有無が分からない）。
- 1ページ 10MB 前後。決済とボット対策を全ページで読み、文字だけのヘルプでも 8.33MB（DICE）。
- 一覧の見出しの後半が白33%（2.77:1）、件数も並べ替えも無い（DICE）。
