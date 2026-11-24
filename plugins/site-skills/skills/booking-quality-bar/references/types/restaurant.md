# 飲食（レストラン、カフェの席予約）

## この下位タイプで特に見ること
時間帯の選び方、コースと席のみ、人数の上限、席を開ける時刻（毎朝◯時に◯日先）と人数で変わる空きの見せ方、1年先まで受け付ける店の営業日の暦と待ちの名簿、予約しない店の順番待ちの時刻と今日の日付の品書き

## 見本の実測

### TableCheck（https://www.tablecheck.com/ja/japan ・2026-10-26・飲食の予約サービス）
条件：赤坂・懐石・会席料理・2026/11/20 ディナー・2名（12件）。題材の店は日本料理「雲海」（/ja/anaintercontinentaltokyo-unkai）。予約フォームは /ja/shops/<店>/reserve。PC 1440 と SP 390 で計測。

- **検索フォーム**：PC は1本の帯に エリア・駅 → ジャンル → 来店日 → 人数 → 検索（紫 #8e4ae7）。欄の名前 12/18px 600、値 14/22px。SP は全画面の「検索」シートで同じ4つを1つずつ「次へ」、下に固定の検索 358×48。エリア未入力で検索すると赤字「エリア・駅を選択してください」。SP の候補は件数つき（「赤坂 エリア 161件」）、ジャンルのチップも件数つき（「和食 · 84」）。
- **日付**：面 420×643。チップ8つ（日付指定なし・今日・明日・今週末・来週末・来週・7日以内・期間を指定、高さ32px・角999px、選択は地 #f7efff・枠 #8e4ae7）＋1か月カレンダー（升 55×40）。「期間を指定」でカレンダーが消え、開始日・終了日の2つの日付入力になる。URL は `date=…&date_from=…&date_to=…`。
- **時刻**：時刻ではなく時間帯のチップで聞く（時間指定なし・朝食・ブランチ・ランチ・アフタヌーンティー・ディナー・深夜・時間を指定）→ `meal=dinner`。人数は −／＋（40×40）、初期2名 → `num_people=2`。
- **一覧**：PC は 絞り込み列／一覧（clamp(880px, 62svw, 1180px)）／地図。並べ替え4タブ 140×48（標準・距離が近い順・価格が安い順・価格が高い順）、件数「1～12 件を表示 ／ 全 12 件」12px。絞り込みの項目は全部に件数、0件は灰で押せない。カード：写真 200×150（大1＋小3、間2px）、店名 16px 700 紫、駅＋距離＋路線記号、説明 14px #666、ディナー（月 #54268e）とランチ（日 #bf7d33）の1名の目安、タグ最大4つ、**その日の空き時刻ボタン4つ＋「+」**（118×36・#292929・角4px、SP は 71×36）。時刻を押すと `start_date・start_time・num_people` を持って店の予約へ。カードにホバーで地図のピンに紫の輪。並べ替え 954ms・+7KB、個室で絞る 1,089ms・+193KB、どちらも読み直しなし（待つ間は一覧を薄くする）。SP は地図全面＋下から引き出し（角16px・最大 49.5svh）、地図を動かすと「このエリアを検索」。
- **詳細**：写真 544×380＋272×190×4。店名 28/32px 600。右に予約枠 360px・sticky（top 147px、影 0 0 12px rgba(0,0,0,.1)）。SP は下に固定バー 71px（紫のボタン 358×38）→ 引き出し 432px。口コミは無い。地図は MapLibre 680×342（y=1,629）。
- **空き（詳細）**：月カレンダー（升 44.6×48）に 紫の輪 ○／×／「定休日」。**凡例は無い**。日付を押すと +64KB、URL は変わらず時刻だけ差し替え。時刻は3列 96×36、満席は #f7f7f7 地に #bfbfbf で残す。今日が埋まっていると SP のボタンが「明日以降の予約が可能」になり、開くと翌日で開いて黄色の注意1行。「予約する」は白地の枠線ボタン 312×38（黒い時刻ボタンより弱い）。
- **空き（予約フォーム）**：別の仕組み（店のロゴの濃紺ヘッダー・Lato・金 #8e731b）。持ち込んだ大人・日付・時間が入った状態で開く。カテゴリー（テーブル席／個室／テイクアウト）→ 7日×12枠の空き表（升 79×28、○ #5cb85c on #def1de・× 灰・「-」閉店、選んだ枠は緑で塗る）→ プラン（「¥ 20,900 ⇒ ¥ 19,500 (税サ込)」、数量 1〜8）。**画面下の帯（PC 91px／SP 71px）が次の手順を言う**：黄 #ffefd0「カテゴリーを選択してください。」→「コース・プランを選択してください。」→ 緑 #def1de「必要事項を入力して確定画面へお進みください。」。
- **予約前の不安**：数量を選んでも合計は出ない。キャンセル規定は一部のプラン・オプションの説明の※1行（「当日は100%」「2日前から」）だけで、主な会席プランには無い。営業時間・定休日は予約フォーム最上部の「お店からのお知らせ」で初めて出る。支払い（事前決済・仮押さえ・後払い）とキャンセル料の請求元は特商法ページ /ja/policy/payment。
- **データ**：店ページだけ `Restaurant`（acceptsReservations・priceRange "¥15000 - ¥25000"・servesCuisine・geo・`potentialAction: ReserveAction → FoodEstablishmentReservation`）＋`BreadcrumbList`。openingHours・aggregateRating・Offer は無い。トップ・一覧・予約フォームは JSON-LD なし。
- **見た目**：IBM Plex Sans、本文 14/22px 400 が最多、字間 normal。文字 #292929（14.55:1）と #666（5.74:1）、紫は主ボタン・店名・選択の枠だけ（#8e4ae7＝4.9:1）。CSS 変数 1,223、紫 50〜950・灰 50〜950。
- **動き**：色 .3s ease-in-out（136要素）、写真 transform .3s ease、opacity .2s ease-in-out、チップ all 80ms linear、読み込み棒 1.2s、引き出し translateY .2s ease-out。reduce の指定6か所。トップ見出しの虹色の光（4s infinite）は reduce で止まらない。
- **重さ（PC / SP）**：トップ 14.88 / 15.24MB、一覧 13.94 / 14.36MB、店 15.60 / 15.92MB、予約フォーム 4.46 / 4.45MB、特商法 0.60 / 0.65MB。ポータルの3ページとも JS 1本 10.04MB（転送 2.38MB）。地図タイルを地図の無いトップ（781KB）や最初の画面の外の地図（店 1.8MB）でも最初に読む。写真は image.cdn で切って WebP（自動ブラウザでは 400 で、curl で 店 16枚 603KB）。

### Resy（https://resy.com/ ・2026-10-31・飲食の予約サービス・ニューヨーク）
条件：Italian・2026/11/12・2名（一覧 `/cities/new-york-ny/search?date=…&seats=2&facet=cuisine:Italian`）。店は Nonna Dora's Tribeca と Carne Mare。PC 1440 と SP 390 で計測。

- **検索フォーム**：場所は都市で先に決まり、帯は 人数（select 1〜20名、初期2）・日付（101×40、押すと1か月 350×396・升 39×39）・時刻（select 42項目：All Day＋30分刻み）の3つ。変えると URL の `seats=4`・`date=2026-11-19`・`time=1900` を書き換え、一覧だけ差し替える（+2〜3KB、時刻は +128KB）。SP は画面下の固定の帯に赤い字で「2 ｜ Thu, 12 Nov ｜ All Day」＋上に浮いた「地図」。
- **一覧**：左 720px にカード20件、右 720px に固定の地図。カード 211〜221px：写真 約180×180・店名 18px 700（字間 −0.25px）・★と件数・料理・$〜$$$$・地域・説明2行・**空き時刻のボタン4つ**（101×40・#336dde・白 16px 700・角4px、2行目に席の名前 11px「Dining Room／Bar」）＋「…」40×40。時刻を 7:00 PM にすると前後の4つ（6:15〜7:00 PM）に入れ替わる。空きが少ないとベル／「Notify」。SP は3つ＋「…」。絞り込み4つ（42px・角113px、かかっているものは枠 #2a2a2a＋×）、**並べ替えは無い**。値段は $ の段だけ。
- **詳細**：PC 左 799px に店名 44/50px 700（字間 −1px）・Why We Like It・人数と日付と時刻の帯（799×59・sticky）・時刻の格子、右 476px に写真・Maps Embed 474×150・住所。口コミの本文は無い。SP の画面下に予約の固定ボタンは無い。
- **空き**：店ページは Lunch／Dinner の見出しの下に、1日の空き時刻を**全部4列の格子**（192×40、SP 113×40の3列）で並べる（Nonna Dora's 60枠・Carne Mare 31枠）。空きの無い時間帯の終わりに Notify を同じ大きさ（白地・青枠）。店のカレンダーは升を4つに分ける：空き（白地・#336dde 700・淡い輪）／一部（1px dashed #638fe5、予約は sold-out でイベントだけ空き）／休み（取り消し線）／受付の外（#cacaca＋取り消し線、1.64:1）。**凡例は無い**。受付は1年分（`/4/venue/calendar` の end_date が1年後）。時刻が出ないことが多い（Nonna Dora's PC 4回中3回・SP 4回中4回、25秒待って赤い点だけ・文なし）。
- **予約前の不安**：店ページにキャンセル規定も金額も無い。枠を押すと iframe のパネル（700×951）に「Cancellation policy」が出て、**枠の日時から締めを計算**して書く（Carne Mare 5:30 PM：「before Wed, Nov. 11 at 5:30pm」＝24時間前、以後 1名 $25.00＋税）。規定 y=246 は Reserve Now y=886 より上。ただし PC 900px の画面ではボタンが y=926 ではみ出す。規定の無い店（Nonna Dora's）は行ごと無い。FAQ は「確認メールを見て」「店に聞いて」。SP（タッチ）では枠を押して7秒たってもパネルが開かなかった。
- **データ**：店だけ `Restaurant`（address・geo・priceRange "$$$"・servesCuisine・telephone）＋`ReserveAction → FoodEstablishmentReservation`。`urlTemplate` が `"undefined//undefinedundefined"`。openingHours・aggregateRating は無い。
- **見た目**：Beatrice（見出し・ボタン、字間マイナス）＋GT America（本文 18/25.92px）。色は #fff 781・#2a2a2a 376・#336dde 362・#eaeaea 322 回。ボタン白/#336dde 4.79:1、ホバー #2b5cbc。フォーカスは `0 0 0 2px hsla(0,0%,100%,.85), 0 0 0 3px #336dde`（63回）。
- **動き**：ボタン `background .15s ease-out, color .25s ease-out…`（34回）、keyframes 10（skeletonLoading・pulsate 1s など）。prefers-reduced-motion 0。
- **重さ（PC / SP）**：都市トップ 22.63 / 22.71MB、一覧 23.94 / 23.89MB、店 21.92 / 21.79MB、FAQ 19.63 / 19.63MB。全ページで JS 11.5MB（modules.js 4.85MB・転送 1.71MB）、全都市の一覧 JSON `/3/location/config` 3.39MB（転送 153KB）、Amplitude 1.59MB、Stripe 1.15MB、reCAPTCHA 836KB。

### ポケットコンシェルジュ（https://pocket-concierge.jp/ ・2026-11-03・高級店の予約・決済サービス）
条件：六本木・麻布・広尾・2名（一覧 `/restaurants?area=2&page=1&partySize=2`）。店は西麻布 鮨いち（/restaurants/244425）とフロリレージュ。PC 1440 と SP 390 で計測。「予約する」は押していない。

- **検索フォーム**：トップは写真の上に5つ（日付・エリア27項目・人数1〜8・キーワード・検索）各 205×42・角6px。日付は1か月の暦（升 36×36）で**1日だけ**、「クリア」334×42。一覧では9つの欄（＋ジャンル13・時間 11:00〜23:30 の26・価格帯4・座席指定6・即時予約）。URL は `area・page・partySize・date・time`。
- **一覧**：3列のカード 341×366（写真 339×192 lazy、即時予約 12px 600 #1d1a16 on #c1a06c、店名 16px 600、太陽＝ランチ・月＝ディナーの値段の幅 12px 700）。**カードに空き時刻は無く、並べ替えも無い**。日付と時刻を入れると件数だけ減る（97件 → 53件）。見出し h1〜h3 が0。
- **詳細**：左 697px に写真の送り・紹介文（薄れて「記事を展開」）・タブ（コース・情報・アクセス・レビュー）、右に予約の枠 339×770（#342f28、**static で貼り付かない**）。レビューは年代・訪問日・目的・本文で、星は無い。SP は画面下の帯 390×58 と「予約」374×42 → 全画面の予約の面（帯に日付・値段なし）。
- **空き**：暦のデータは `reservationDates`（空きのある日の一覧、56日）と `waitlistDates` だけで残りの数を持たない。暦は升 36×36 の丸、空き＝2px #c1a06c の輪・選んだ日＝金の塗り・無い日＝2.24:1。**凡例は暦の面のすぐ下に常に**（12px「利用可能な座席・ウェイティングリスト」）。日を押すと `AvailabilitySearch` 301ms・約1KBで人数・時刻・座席・コースだけ差し替え、URL に `partySize・date・time・serviceType・seatingType`。**人数のボタンはその日の枠の min〜max の外を押せなくする**（11/5・11/13 は2名だけ、11/12・11/19 は2〜4名）が、1.31:1 で理由の文なし。今日空きが無いと「直近の予約可能日」の2日をボタンで出す。
- **値段**：コースの行は「☾ ¥22,000 / 人」だけで、人数を替えても合計は出ない。「※消費税・サービス料を含みます」「※2.5時間制」はコースの「詳細を見る」の面（頭が金の帯）だけ。
- **予約前の不安**：予約の枠に取り消し・支払いの語が0。規定は店の文「お店からのお願い」の中（フロリレージュ「来店日の3営業日前より予約総額の50%、1営業日前より100%」）か、「こちら」のリンク → `/term#cancel-policy` が `/terms` に転送されて節の印が消え、19ページの PDF（SP はダウンロードのリンクだけ）。規約の既定は 3〜2営業日前 50%・1営業日前と当日 100%・無断 100%、**日数は店休日を含まない**。支払いは予約が成立した時点でカード（スマート決済）。
- **データ**：店だけ `Restaurant`＋`ReserveAction`（urlTemplate は店の URL だけ）＋`BreadcrumbList`、JS で書き込むので curl の HTML には無い。openingHours・aggregateRating・Offer は無い。
- **見た目**：初期値はダーク（端末の設定を見ずに html に class="dark"）。地 #1d1a16・面 #342f28・金 #c1a06c・枠 #736b60・注記 #c9c3ba。金のボタンは #1d1a16 の字で 7.03:1、ライトでは白字で 2.47:1。Open Sans＋Noto Sans JP、本文 14px/20px、注記・値段 12px、字間 normal。
- **動き**：チップ・ボタンは transition 0s でホバーも変わらない。つまみ transform .2s cubic-bezier(.4,0,.2,1)、skeleton-pulse 1.75s infinite。reduce は Font Awesome の印だけ。フォーカスは既定の 1px #101010 で暗い地では見えない。
- **重さ（PC / SP）**：トップ 8.52 / 8.52MB、一覧 10.36 / 10.36MB、店 8.42 / 8.31MB、規約 5.45 / 5.40MB。JS 4.57〜6.38MB（共通 734.js 1,341KB・Stripe 1,149KB・同意管理 UCM.js 521KB を全ページ）、店は Maps の JS 約1.4MB、Google Fonts の CSS 472KB。写真は幅720の1種類。

### Dishoom（https://www.dishoom.com/ ＋ 予約 SevenRooms ・2026-11-08・ロンドンのボンベイ風カフェ13店）
条件：Covent Garden・2026/11/19（木）・2名（`sevenrooms.com/explore/dishoomcoventgarden/reservations/create/search?date=2026-11-19&party_size=2`）。人数 1・4・6・8・10・16 は SevenRooms の公開の API（`/api-yoa/availability/ng/widget/range`、ログイン不要の GET）でも読んだ。枠のボタンは押していない。PC 1440 と SP 390 で計測。

- **検索フォーム**：人数・日付・時刻の3つを1本の帯（PC 920×66・角 50px、欄の名前 12px＋値 15px／SP 358×52 で「2 ｜ 19 Nov ｜ All Times」）。人数は 1〜16 の一覧（max_guests 16、17名以上は店ページの文だけ）。日付は2か月（面 802×423・升 44×44）、過去と休業日（12/25・26）は灰で押せない、受付は123日先まで、凡例なし。時刻は All Times＋08:00〜22:00 の30分刻み。URL は `date`・`party_size`（人数を替えると +198KB）。
- **一覧（複数店）**：/reservations/ に iframe 584×700。13店を1行ずつ（店名 15px の下線リンク＋住所 12px＋矢印 40×40×2）、升 150×55 を横に送る（PC で5つ半）。**並べ替え・絞り込みは無く、時刻を選んでもどの行も 08:00 から**（13店で558枠）。店の情報 `venue_info` 975KB を一度に読む。
- **詳細**：公式サイトの店ページ（15,110px）。店ごとの物語（Covent Garden は「1949年のボンベイのトーキー」）を、ピンク #f4a6a2 の二重線・砂時計の印・アーチの線画と店の書体で組む。ヘッダーの「Book a table」（133×32、角 9999px）で**右の引き出し**（iframe PC 649×900＝45%・SP 全面、後ろに rgba(196,191,175,.5)）。iframe は押すまで0個で、押してから PC +6.99MB・SP +12.1MB。PC は画面下に節の帯 32px（FOOD & DRINK ◆ RESERVATIONS ◆ VISIT US ◆ FAQS）。口コミなし。
- **空き**：**空いている枠だけ**を 4列 221×55（SP 2列 173×55・間 12px・角 12px・#353839 に白字 11.82:1）、時刻 14px＋時間帯 12px（Breakfast・Christmas Feasting）。11/19・2名は15分刻み65枠のうち book 33 を出し、**request 32（16:15〜21:15 など）は升ごと消す**。理由は升の上の1行（14px）「6pm から 9.30pm はほとんどの席を歩いて来る客に残す」だけ。API の枠には `pacing_covers_remaining`／`pacing_limit`（11:15 は 2/10、15:30 は 64/66）があるが、画面は全部同じ黒。閉じた「Other dates with availability」に前3日と後の日を1日1行（白地・1px 枠の升で形を変え、間に「After Thu 19 Nov」）。空きが0の日は「Simply come along, queues move swiftly.」。
- **人数で変わるもの**：席の時間 `duration` が 1〜2名 90分・4名 105分・6〜8名 120分・10名以上 150分（FAQ の目安と一致）。**4名から同じ時刻に「Christmas Feasting」の枠が並び**（require_credit_card true）、取り消しは「24時間を切る・来ないと £50」、6名からは「72時間を切ると £50」。どれも升の見た目は同じで、画面の升の段には0語（6名で「15:00」と「15:00 Christmas Feasting」が隣に並ぶ）。
- **予約前の不安**：取り消し・遅刻（15分）・席を返す時間（5名以下1.5時間・6名以上2時間）・現金不可は、API の `cancellation_policy`・`policy`（確認の文）だけ。夕方に何人から予約できるかの文が3通り（/reservations/ と店ページ「6pm から6名以上」、FAQ「5.45pm から6名以上、Manchester と Birmingham は例外」、SevenRooms「6pm〜9.30pm は歩いて来る客に」）で、API は Covent Garden・2名で 16:15〜21:15 が無く、Glasgow は FAQ の例外に無いのに 17:00〜21:00 に11枠。店の1日は 06:00 に始まり（start_of_day_time）、ロンドン 01:13 に開くと帯は「7 Nov」、ほかの日の行は「Today 8 Nov」。
- **データ**：店ページに FAQPage（11問）と Organization の department に `Restaurant`（acceptsReservations true・priceRange "££"・openingHoursSpecification・hasMenu）。ReserveAction なし。SevenRooms は JSON-LD 0。
- **見た目**：地 #f0ece0・文字 #353839（10.01:1）の2色が主。SevenRooms を店の色で塗り直す（color_primary・button #353839、地 #f0ece0、罫 #dad6c8、error #aa0e17）。本文 Cheltenham BT、見出し gill-sans-nova の大文字（字間 0.12〜0.26em）、店の題は店ごとの書体（@font-face 31種、店のページでだけ読む）。升は Polymath 14px 500。
- **動き**：色 .15s cubic-bezier(.4,0,.2,1)、ヘッダーの地 .5s、段落 opacity 1s ease-in-out 1s、升 .25s。FAQ は1つだけ開く。reduce の指定は1か所で動画・線画は止まらない。
- **重さ（PC / SP）**：トップ 54.66 / 23.32MB（Mux の動画 43.4MB）、予約 17.55 / 16.75MB、店 23.01 / 13.75MB、SevenRooms の店の面 11.31 / 11.21MB（JS 9.3MB、Stripe 1,148KB・Maps 約1.1MB・FullStory 308KB を空きを見るだけで読む）、FAQ 20.78 / 13.53MB。

### Septime（https://www.septime-charonne.fr/en/ ＋ 予約 Zenchef https://bookings.zenchef.com/results?rid=356354 ・2026-11-16・パリの1店、昼5皿 85€・夜7皿 135€）
条件：2名と4名、2026/11/17〜12/4。値は 2026-11-16 01:04 UTC の API と、Playwright（timezoneId Europe/Paris・Asia/Tokyo・America/New_York）。PC 1440 と SP 390。Reserve の手前で止めた。

- **入口**：トップの右上 BOOKING 79×36 → 右上から #f6f6f6 の板（PC 400×346・SP 320×844、`transform .4s`）。文「Reservations open every day at 10am for the next three weeks.」とボタン BOOK ONLINE 123×34（新しいタブで Zenchef）。一覧・詳細のページは無く、トップが品書き・時間・住所を兼ねる。
- **開ける時刻**：API の `bookable_from` は日ごとに「21日前の 10:00」、締め `bookable_to` は昼 12:00・夜 19:15（最初の回の15分前）。トップ FR／EN は「10h／10am・3週間」、Zenchef の文は「every day, for the next 3 weeks (D+21)」で時刻が無い。開ける前の日（12/7〜）は `closed: true` で、暦では休みと同じ線なし。
- **人数**：1〜8 のボタン 56×56 を横1列（上限は `capacity.max: 8`）。選ぶと日の行が開き、直近の空きの日が選ばれた状態になる（SP 152ms・PC 460ms、+14KB・2本）。空きは食事ごとの `possible_guests`（11/17 昼 [4]・11/18 昼 [3]・12/1 昼 [3〜8]・12/2 昼 [4〜6]・11/30 夜 [5,6]）。2名は2か月に0日、3名・4名・5名・6名は3日、7・8名は1日。
- **暦の輪**：升 40×40・角 240px。この人数で空き＝1px solid 白 .32、別の人数なら空き＝1px dashed .32、満席＝solid .32＋斜線、今日＝2px、休み・開ける前＝線なし（字 .48）、選んだ日＝地 #fff。凡例は無く、2名（0日）のときだけ暦の下に「— Full —」（DM Mono 12px）。輪の線 .32 は #1c1c1b に 2.92:1。
- **次の空き**：暦の上に札「Next availability」（DM Mono 12px・地 白 .24・7.81:1）と 187×68 のチップ3つ（4名：「Tue 17 Tomorrow」「Tue 1 Dec Next month」「Other」）。2名では押せない Today・Tomorrow が残る。
- **時刻**：空いた回だけ、食事の見出し（Déjeuner／Dîner、英語の画面でも仏語）の下に 568×40 の行（線 .64・角 8px・左に緑 #24a83a の点 8×8）。12/1 昼は15分ごと8回のうち上限0の4回を出さず 12:15・12:30・13:00・13:30。空きの無い食事は「Not available for 4」の1行。回の上限 `total_per_slot` 8〜14 は出さない。日を押す 35〜59ms・+14KB、時刻 86〜103ms・0KB。URL は最後まで変わらない。
- **空きなし**：「No online openings for 2 guests over the next 2 months.／Explore other dates or try again later.」。人数を変えれば入れることは破線の輪だけ。
- **予約前の不安**：API に `charge_per_guests` 85（昼）／135（夜）、`enduser_cancelable_before: 86400`（基準 shift）、`confirmation.is_auto: false`、`prepayment_param: null`。Reserve の手前まで画面に0語、店のサイトにも無い。
- **時間帯**：同じ 01:04 UTC・2名で、端末が Paris・New York なら最初のチップ「Mon 16 Today」、Tokyo なら「Sun 15 Yesterday」（過ぎた休みの日）。時刻にパリ時間と書かない。
- **データ**：JSON-LD はトップ・Zenchef とも0。Zenchef は見出し要素も0。地図は Google Maps へのリンクだけ。空きは月の要約 10〜19KB を3か月分先に読み、日の回は選んだ日だけ `getAvailabilities` 14KB。
- **見た目**：店は Prestige Elite（自社配信 woff2 2本 31KB）1本、本文 14px（SP の造り手の列 13px）、白・黒・#f6f6f6 の3色。Zenchef は面 #1c1c1b・地 #2c3037、白の不透明度 .8／.64／.48／.32／.16、DM Sans 14〜16px と DM Mono 12px。押せない Reserve は 白 .48 on 白 .24＝3.17:1。
- **動き**：トップは映像129本を順につなぐ（残り10秒で次を読み、入れ替え。最初は fadeIn 200ms）。fullPage.js 2.9.4 で章に吸い付く。Zenchef は `all .2s ease-in-out`。reduced-motion の指定はどちらも0。
- **重さ（PC / SP）**：トップは読み込み直後 0.65 / 6.26MB、映像を流して 60秒で 28.83 / 18.84MB（映像1本 2000k で 155〜387MB）。Zenchef 4.91 / 4.91MB（JS 2,844KB・CSS 787KB・AWS WAF 873KB・訳の JSON 96KB×2）。

### Disfrutar（https://www.disfrutarbarcelona.com/ ＋ 予約 CoverManager https://www.covermanager.com/reservation/module_restaurant/resaurante-disfrutar/english ・2026-11-20・バルセロナの1店、コース 325€）
条件：2026-11-20 01:00〜02:00 UTC。Playwright（locale en-GB・timezoneId Europe/Madrid）、PC 1440 と SP（iPhone 13）。月送り12回で 2026-11〜2027-12 の `/reservation/highlight` を全部読み、空きの6日を押して人数と時刻の欄まで。時刻は押していない（押すと席を確かめる `/reservs/avaible_reserv_module/` へ進む）。

- **入口**：トップ・どのページも右上に BOOKINGS（黒 1px の線・地は透明）。予約のページ `/bookings` は黒い帯「ONLINE BOOKINGS」1,296×49 → 注意6行（公式だけ・12か月先まで・電話・場所は選べない・人数は変えられない・8歳未満はすすめない）→ GASTRONOMIC OFFER と CALENDAR 416×38 → 凡例の白い帯 1,296×41（y=554）→ iframe 1,296×400（SP 350×650）。
- **営業日の年の暦**（`/calendar`）：jquery.bootstrap.year.calendar で12か月を4列（升 60×31・1か月 440×295、SP は1列で升 50×31・ページ 4,347px）。2018-01-01〜2027-12-31 の3,652日の JSON 591,064 バイトを HTML に埋め込み、Opened #E08633／Closed #fff の2つだけ。今年の1月1日から始まり、11/20 に開くと過ぎた10か月が先に並ぶ。2026 は Opened 227日（月〜金、土は2日）。日を押しても何も起きない。上に「Lunch 12:30h a 13:00h／Dinner 19:15h a 20:00h」。
- **予約の暦**（CoverManager・jQuery UI datepicker）：升 33×27・Verdana 13.86px。complete #ecaca1 に白字（1.91:1）・close_date #000 に #555（2.82:1）・空き #fff・今日 #ccc に白（1.61:1）。凡例は iframe の外のすぐ上（closed／fully booked／available）。月ごとに `/reservation/highlight`（`people=0`、949〜992 バイト）。maxDate 2027-11-20（365日先）。12か月の営業日はすべて complete で、空きは 2027-11-01・09・15〜18 の6日だけ。
- **2つの暦の食い違い**：営業日は 2026-11-20〜2027-11-21 で一致。受付の端より先の営業日 23日（2027-11-22〜）を、年の暦は Opened、予約の暦は close_date の黒にする。毎朝何時に開けるかは書かれない（規約「365 days in advance」）。
- **人数**：開いた時は人数の欄が空（option 0）。日を押すと `/reservation/update_hour_people/` が人数の選択肢と時刻の欄の HTML を返す（265〜332ms）。6日の人数は 4／4／5／4・5／4・5／4・5 で、2名・3名は12か月で0日。言葉の説明は無し。設定 `default_people_motor: "2"`・`activeCalendarColorPeople: "0"`。
- **時刻**：基準 `hoursall` は昼 12:30〜13:30・夜 19:15〜20:30 の15分おき11本。select 333×34（SP 130×34）に空いた1〜5本だけ、昼と夜の見出しなし。4→5名に替えても 11/16 は同じ4本。
- **満席の日**：押せる。時刻の欄が「Unavailable bookings via web for this day.」、Book 696×34 は同じ見た目のまま、57px 下に「Sign up for the waiting list」と Waiting List 696×34。待ちの名簿の有無を昼と夜で別に持つ（11/1・11/9 は昼だけ）。押すと名前・姓・メール・電話・国・郵便番号・人数・時刻の欄（取り消し・値段の語は0）。
- **予約前の不安**：値段はトップ #offers（y=2,631）に Classic 325€・Festival 325€・ワイン 180€、どれも「Price valid until 07/08/2027」（受付は 11/20 まで続く）。取り消しは規約 §3.1（y=1,287）だけ：15日前まで無料、以降と来なかったら €150／名、カード必須、変更は電話（月〜金 10:30〜22:00）。予約のページと部品の最初の画面に cancel の語0（PC・SP）。
- **データ**：JSON-LD 0・h1 0（5ページとも）。部品は開いた時に店の設定 `/reservation/ibox2/0` 207KB。トップの HTML に PHP の print_r の跡（見えない要素）。
- **見た目**：地 #f2f1e2・字 #000、色は年の暦の #E08633 と予約の暦の #ecaca1 だけ。Graphik（自社 woff2、太さごとに別の書体名）本文 18px／予約のページ 14px、足元 10px #a3a196（2.28:1）。部品は Helvetica 14px と Verdana。
- **動き**：ヘッダーが下へのスクロールで縮む（margin-top 30px→0、all .5s、scroll の検知を毎回）。メニュー .5s／.25s ease-in-out。prefers-reduced-motion 0。
- **重さ（PC / SP 同じ）**：トップ 27.43MB（jpeg 26,248KB、原寸 4414×2970 の1枚 8,720KB を幅 416px に、img 524個で lazy 0）・年の暦 1.75MB（HTML 622KB）・予約のページ 6.78MB・部品だけ 4.49MB（Adyen 1,325KB・Stripe 1,184KB・Mercado Pago 318KB を時刻の前から）・規約 1.18MB。

### Padella（https://www.padella.co/ ＋ 予約・順番待ち Dojo https://web.dojo.app/ ・2026-11-24・ロンドンの手打ちパスタ3店、予約を取らない1店と4週間先まで取る2店）
条件：2026-11-24 01:00〜02:00 UTC（ロンドン時間も同じ）。tools/measure.js と tools/flow.js（PC 1440・SP 390、FLOW_SAVE_JSON で GraphQL の応答を保存）。人数・日・時刻・席の場所まで選び、Continue（type=submit）は flow.js が止めたので押していない。

- **入口**：トップに予約のボタンは0。予約への道は、全ページで1日1回だけ出る窓「GROUP BOOKINGS」（470px、cookie hasVisitedBefore が翌0時まで）の「here」1語で、どの店のページでも Soho の予約へ。店のページは RESERVATIONS（PC y=1,216）の本文リンクと、右の箱の BOOK A TABLE 307×64（白 2px の線・地は透明、y=1,531、貼り付かない）。
- **今日の日付の品書き**：3店のページとトップに「Tuesday 24th November」（トップ 40px／49px・店 24px、Oswald 500）。店で品と値段が違う（Pici £13.5／Soho £13、Pappardelle £16.5／Soho £15.5、パスタ 10・9・9品、パルメザンの注記が Soho だけ逆）。トップの品は Borough Market と同じ。FOOD／DRINK のタブ（22px、選んでいない側は白の 60%）。
- **予約の欄**：1ページに縦の欄（group は店 → 人数 → 日 → 時刻）、欄 358×48（PC 400×48）、前の欄を選ぶまで次は押せない。暦は面 312×374（#003f33）・升 40×40、見出し「11 2026」、選んだ日は「28 11 2026」。開くたびに BookingCalendarAvailability（1日〜翌月1日、空いている日の並びだけ）。2名は 11/24〜30・12/1〜21、7名は 11/28（土）だけ押せない（理由の文なし）。
- **受付の幅**：店のページ「up to 4 weeks」＝ Dojo の bookingMaximumMinutesAhead 40,320分（28日）。端の日（12/21）と、その先が受付前であることは画面に無い（過ぎた日・受付前・満席の日が同じ #196254 on #003f33＝1.66:1）。
- **時刻**：15分ごと、bookingDuration 90 は API だけ（画面に終わりの時刻なし、displayAvailabilitySlotEndTime: true なのに）。select の言葉が「12:00 noon」「12:15 noon」「13:00 PM」。日を選んでから時刻が入るまで SP 247ms・PC 753ms。選ぶと「You are booking for 12:15 local time for Padella」14px。
- **満席の時刻**：API は FULLY_BOOKED_PARTIES で持つが select から消す。Soho 11/28・2名：38枠中16枠（17:00〜20:45）が消え、15:30 の次が 21:00。Shoreditch 同日：34枠中11枠（17:45〜20:15）。空白の理由も順番待ちへの道も出ない。
- **席の場所**（Shoreditch だけ allowAreaSelection）：時刻を選ぶと「Seating area」にチップ（Kitchen Counter 131×36 塗り #3ceac7／Standard Seating 140×36 線、角 8px）と説明1行 14px 500。17:30 は空いた場所が1つ（areasAvailable 1）。API の場所は6つ（Bakery・Bar Counter・Counter Seating・Covered Terrace ほか、それぞれ説明つき）。
- **人数の上限**：Shoreditch は予約 1〜6・問い合わせ 7〜30（enabled false）で本文「7名からはメール、22名まで」と一致。Soho は予約 1〜7・問い合わせ 6〜99 で、本文「7名からはメール」と食い違う。団体は3品のセット £40pp。
- **順番待ち**（予約を取らない Borough Market）：店先の QR 11:00／席 11:30／遠隔 11:45、夜 16:30／17:00／17:15。遠隔は店から 2km 以内、6名まで、スマホが無ければ店の人へ。Shoreditch・Soho も混んだ時だけ順番待ち。JSON-LD は Borough も acceptsReservations "True" で、ReserveAction の先は順番待ちのアプリ。
- **予約前の不安**：取り消し・預かりの語は公式の4ページと Dojo の画面に0（API の bookingConfigurationWithMenus は slots［］・menus null）。遅れ「10分お待ちします」は Shoreditch のページだけ。Shoreditch は paymentAccountId あり・規約 URL あり、Soho は両方 null。1回目に開くと「This restaurant is not accepting online bookings currently.」（2回目から欄が出た）。
- **営業の時間**：公式の本文・JSON-LD・Dojo の operatingTimes が5か所で食い違う（Soho 昼 15:45／Dojo 15:30、Soho 木〜土 23:00／22:30、Shoreditch 夜 22:00／21:45 ほか）。Dojo の close は最後に入れる時刻に近い値で、店ごとに意味がそろわない（Shoreditch は close 21:45 で最後の枠 21:30、Soho は close 22:30 で最後の枠 22:30）。
- **見た目**：公式は地 #000・字 #fff の2色、Oswald（題）と Roboto Condensed 18px／25.74px（本文）、品書きは白 2px の枠。Dojo は地 #001a15・欄の線 #196254・主 #3ceac7（Continue 358×44 角 40px、字 #001a15 で 11.9:1）、Roobert（otf 75KB×2）。
- **動き**：トップの全画面の動画 timelapse.mp4（13.6MB、autoplay・loop、止める手段なし）。窓 .25s（opacity と top）。prefers-reduced-motion 0。
- **重さ（PC）**：トップ 1.59MB（webp 3枚 1,101KB、動画は別）・店 1.08MB・Borough 0.89MB。Dojo 7.72MB（SP 8.12MB）：JS 1本 6,395KB、全言語の文言 321KB を3回、ロゴ PNG 123KB、Font Awesome 4.7 の CSS。

## 真似る型
見本：TableCheck・Resy・ポケットコンシェルジュ・Dishoom・Septime・Disfrutar・Padella。

1. **一覧のカードに、その日の空き時刻を4つのボタンで並べ、「+」「…」で残りへ。** 押すと日付・時刻・人数を持って予約へ進む（TableCheck 118×36・SP 71×36／Resy 101×40・SP 3つ）。時刻を指定したら、その前後の4つに入れ替える（Resy：7:00 PM で 6:15〜7:00 PM）。ポケットコンシェルジュはカードに時刻を出さず件数だけ減らす（97→53件）ので、作るときは時刻のボタンの型にする。
2. **席の種類で在庫が分かれるなら、時刻ボタンの2行目に席の名前を書く。**（Resy：11px「Dining Room／Bar／Patio」。TableCheck は予約フォームでカテゴリーを先に、ポケットコンシェルジュは時刻の下の「座席指定」チップ 96×34 で選ぶ）
3. **人数・日付・時間（帯）を1本の帯にし、URL に残す。** 飲食は時間帯で聞く（TableCheck `meal=dinner`・ポケットコンシェルジュ `serviceType=DINNER`）か、All Day＋30分刻み（Resy `time=1900`）。店ページの予約の状態も URL に持つ（ポケットコンシェルジュ：partySize・date・time・serviceType・seatingType の5つ）。SP は画面下の帯（TableCheck 71px／ポケットコンシェルジュ 58px）。
4. **店ページは1日の空き時刻を全部、格子で並べる。** 4列 192×40（Resy）・3列 96×36（TableCheck）・4列 73×34（ポケットコンシェルジュ）。空きの無い時間帯には「空いたら知らせる」を時刻と同じ大きさで（Resy の Notify・ポケットコンシェルジュの空席通知）。日を替えたら読み直さずに時刻だけ差し替える（TableCheck +64KB・ポケットコンシェルジュ 301ms・約1KB）。
5. **人数のボタンは、その日の枠で入れない数を押せなくし、理由を1行書く。**（ポケットコンシェルジュ：min〜max の外を disabled、11/5 は2名だけ・11/12 は2〜4名。ただし 1.31:1 で理由なし——作るときは 3:1 以上と「この日は2名だけ」）
6. **取り消しの条件は、枠の日時から計算した「◯月◯日 ◯時まで無料」で出す。**（Resy：「before Wed, Nov. 11 at 5:30pm」。TableCheck は「当日は100%」の※だけ）。日数を営業日で数える店なら、定休日を除いて日付にする（ポケットコンシェルジュの規約：3〜2営業日前 50%・1営業日前 100%、店休日を含まない）。どの見本も枠を選ぶ前の店ページには出ない（Dishoom：枠ごとに「24時間」「24時間を切ると £50」「72時間を切ると £50」が API にあり、升の画面は0語）——作るときは合計のすぐ下に1行。
7. **カレンダーの升は、空き・一部・休み・受付外を見た目で分け、凡例を暦の面の中に置く。**（Resy の4つ。TableCheck は ○・×・定休日の3つで、どちらも凡例なし。ポケットコンシェルジュは金の輪・ウェイティングリストの2つを暦のすぐ下 12px に常に）。今日空きが無ければ、直近の空きの日を2つボタンで出す（ポケットコンシェルジュ「直近の予約可能日」）。
8. **夜の店は暗い地にして、色は押すもの・選んだものだけに使う。**（ポケットコンシェルジュ：地 #1d1a16・面 #342f28・金 #c1a06c、金の上の字は #1d1a16 で 7.03:1）。金や淡い色の上に白字を置かない（ライトで 2.47:1）。初めは端末の明暗の設定に従う。
9. **受付しない時間帯（歩いて来る客の席）は升ごと消し、空白の位置と升の上に理由を1行で書く。**（Dishoom：11/19・2名は 16:00 の次が 21:30、理由は升の上の 14px「6pm〜9.30pm は歩いて来る客に残す」だけ。空きが0なら「並んで入れる」と次の手を言う）。受付の時間帯の文は、空きのデータから作る（Dishoom は3つのページで境目が 17:45・18:00・18:00〜21:30 と違った）。
10. **人数で席の時間が変わるなら、人数の欄のそばに「6名・2時間の席」と出す。**（Dishoom：duration 90／105／120／150分は API と FAQ だけ。ポケットコンシェルジュの「※2.5時間制」もコースの詳細の面だけ）
11. **同じ時刻に条件の違う枠（カード預かり・コース）が並ぶなら、升の2行目に条件を書き、形か色を変える。**（Dishoom：4名から「15:00」と「15:00 Christmas Feasting」が同じ黒の 221×55。Resy の席の名前 11px の2行目と同じ置き方で、預かり・料金も書く）
12. **複数店の一覧は店ごとに横へ送る行にし、選んだ時刻の升から始める。**（Dishoom：13店・升 150×55・矢印 40×40。どの行も 08:00 から始まり558枠を送らせる）
13. **予約の部品は店の2色で塗り、店ページの中の引き出しで開き、iframe は押してから読む。**（Dishoom：SevenRooms を #353839／#f0ece0 に。引き出し PC 649px・SP 全面）

14. **席を毎朝決まった時刻に◯日先まで開けるなら、入口と暦の両方に同じ文で書き、開ける前の日の升に「◯日 10:00 に開く」を出す。**（Septime：API は「21日前の 10:00」。トップは時刻つき、Zenchef の文は時刻なし、12/7 は休みと同じ線なし）
15. **人数を先に聞き、暦の升の線の形で「この人数で空き（実線）」「別の人数なら空き（破線）」「満席（斜線）」を分け、凡例を暦の面に常に置く。**（Zenchef 40×40。凡例が無く、線は 2.92:1——作るときは 3:1 以上。破線の日を押すと「3名なら空き」と出す）
16. **人数を選んだら、直近の空きの日を選んだ状態で開き、暦の上に空きの日を2つ言葉つきのチップで出す。**（Zenchef：「Next availability」の札と 187×68 の「Tue 17 Tomorrow」「Tue 1 Dec Next month」。空きの無い人数では押せないチップを残さない）
17. **時刻は空いた回だけを食事の見出しで分けて縦の行にし、空きの無い食事は見出しの下に「4名では空きなし」の1行。**（Zenchef：568×40・緑の点 8×8、12/1 昼は8回中4回だけ）。空きが全く無いときは人数と範囲を言い、人数を変えれば入れる日の数まで書く（Zenchef は「2 guests over the next 2 months」まで）。
18. **カードの預かり・取り消しの締め・店の確認待ちがあるなら、時刻を選んだ時点で「340€ を預かる／11/30 12:15 まで無料／店が確かめて返事」を予約ボタンの上に。**（Zenchef：API に 85€／名・86400秒・is_auto false、画面は Reserve の手前まで0語）
19. **「今日」は店の時間帯の暦の日で決め、時刻に店の時間帯を書く。**（Zenchef：端末が東京だと「Sun 15 Yesterday」。Dishoom の 06:00 区切りと同じ食い違い）
20. **1年先まで受け付ける店は、今日の月から12か月を1枚に並べ、休み・満席・空き・まだ開けていない日を同じ暦の4つの見た目で分ける。**（Disfrutar：営業日の年の暦 60×31 を12か月4列で持つが、今年の1月から始まり Opened／Closed の2つだけ。空きは別の CoverManager の暦で、白の意味が逆になり、受付の端より先の営業日23日を休みと同じ黒にした）
21. **日を先に選ばせるなら、その日に残る卓の人数を言葉で書き、人数ごとに入れる日の数を一覧で言う。**（Disfrutar：12か月の空き6日は 4名か5名だけで2名は0日だが、人数の欄に 4 しか出ないことで気づくしかない。Septime の破線の輪・ポケットコンシェルジュの disabled と同じ穴）
22. **満席の日も押せるようにし、時刻の欄のすぐ下に待ちの名簿を昼と夜で分けて置く。**（Disfrutar：Book の 57px 下に Waiting List 696×34、昼・夜の受け付けを `waiting_list_lunch／dinner` で別に持つ。ただし押せない Book が同じ見た目で残る）
23. **コースの値段に「◯月◯日の席まで」の有効期限を添え、受付の幅がそれを越えるなら、選んだ日の値段を出す。**（Disfrutar：「Price valid until 07/08/2027」325€、受付は 2027-11-20 まで）

24. **品書きに今日の日付を入れ、店ごとに中身と値段を持ち、予約の入口のそばに置く。**（Padella：3店とトップに「Tuesday 24th November」、Pici £13.5／Soho £13。ただし予約の入口とは離れている——作るときは予約のボタンのすぐ下に「今朝の品書き ◯月◯日」）
25. **予約を取らない店（時間帯）は、並ぶ方法ごとに始まる時刻を書き分ける。**（Padella Borough Market：店先の QR 11:00・席 11:30・遠隔 11:45、夜 16:30・17:00・17:15、遠隔は 2km 以内・6名まで。作るときは予約の画面の満席の時間帯からも、この案内へつなぐ）
26. **席の場所は、選んだ時刻の空きでチップにし、選んだ側の説明を1行出す。**（Dojo・Padella Shoreditch：131×36／140×36、17:30 は場所が1つ。作るときはチップに残りの卓の数と「この時刻はカウンターだけ」を）
27. **大人数の道（メール・セット）と予約の人数の上限を同じ数にする。**（Padella Shoreditch：予約 1〜6・問い合わせ 7〜。Soho は予約 1〜7 で本文の「7名から」と食い違う）
28. **知らせの窓は1日1回にし、閉じたら翌0時まで出さない。ただし予約の入口を窓の中だけに置かない。**（Padella：cookie hasVisitedBefore。トップの予約の入口は窓の「here」だけで、閉じると0）

## 反面教師
- 数量を選んでも合計を出さない（TableCheck の予約フォーム）。人数×単価の合計（税サ込）を時刻の下に常に出す。
- キャンセル規定をプラン説明の※1行に散らし、主なプランには書かない（TableCheck）。合計のすぐ下に、日付で「◯月◯日まで無料」と1行で出す。
- 空きの印（○・×・定休日）に凡例が無い（TableCheck の詳細）。
- 満席の時刻 #bfbfbf on #f7f7f7＝1.72:1、空き表の ○ 2.10:1・× 1.63:1（TableCheck）。
- 「予約する」を白地の枠線にして、黒い時刻ボタンより弱くする（TableCheck、312×38）。
- お知らせ文（「日曜のディナーは休業」）と空きの表示（11/22(日) 夜に○）が食い違う（TableCheck）。休業は空きの元データから出す。
- 予約フォームの入力欄 84 のうち 52 にラベルが無い（TableCheck）。
- 金額をどこにも出さない（Resy：$〜$$$$ の段だけ。キャンセル料 $25 だけが金額）。コースのある店は1名と人数分の合計を出す。
- 規定を枠を押したパネルの中にだけ置き、規定の無い店は行ごと消す（Resy）。店ページに1行、料金の無い店も「料金はかかりません」と書く。
- 予約ボタンがパネルの下で画面の外（Resy：iframe 951px／画面 900px、ボタン y=926）。
- 空き時刻の読み込みが止まっても、点の動きだけで文を出さない（Resy：25秒待って4回中3回出ない）。
- 構造化データの予約 URL が壊れている（Resy：`"undefined//undefinedundefined"`）。
- 一覧のカードに空き時刻も並べ替えも無い（ポケットコンシェルジュ：日付と時刻で件数が 97→53 に減るだけ）。
- コースの行が「¥22,000 / 人」だけで人数分の合計が無く、税サ込は詳細の面の中だけ（ポケットコンシェルジュ）。
- 規定のリンクが PDF の規約に転送されて節の印 `#cancel-policy` が消え、SP はダウンロードのリンクだけ（ポケットコンシェルジュ）。
- 押せない人数・ランチを #342f28 on #1d1a16＝1.31:1 にして理由を書かない（ポケットコンシェルジュ）。
- PC の予約の枠が貼り付かず、紹介文・FAQ・レビューを読み終えたところに入口が無い（ポケットコンシェルジュ：2,000px 送ると y=-1,855）。
- 暗い地でフォーカスがブラウザ既定の 1px #101010（ポケットコンシェルジュ）。
- 受付しない時間帯の境目を、ページごとに違う文で書く（Dishoom：6pm／5.45pm／6pm〜9.30pm、API はどれとも違う）。
- 残りの席数（pacing 2/10）とカード預かり・£50 の条件を持っているのに、升を全部同じ黒にする（Dishoom）。
- 複数店の行がどれも開店の時刻から始まり、夜の枠まで行ごとに送らせる（Dishoom：13店・558枠）。
- 店の1日の始まり（06:00）で既定の日を決め、下の行は暦の「Today」と言う（Dishoom：深夜 01時に「7 Nov」と「Today 8 Nov」）。
- 空きを見るだけの段で Stripe・地図・操作記録を読む（Dishoom の SevenRooms：1,148KB・約1.1MB・308KB）。
- 暦の輪の破線（別の人数なら空き）に凡例も説明も無く、押しても何も出ない（Zenchef・Septime）。
- 預かり 85€／名・24時間前・店の確認待ちを Reserve の先まで出さない（Zenchef・Septime）。
- 席を開ける時刻（10:00）を予約の画面の文から落とし、開ける前の日を休みと同じ見た目にする（Zenchef・Septime）。
- 人数・日・時刻を選んでも URL が変わらず、戻る・共有ができない（Zenchef）。
- 店のトップの全画面の映像を止める手段がなく、60秒で 28.83MB を読む（Septime）。
- 同じサイトの2つの暦で色の意味を逆にする（Disfrutar：年の暦は白＝Closed、予約の暦は白＝available・黒＝closed）。
- 年の暦を今年の1月から始め、過ぎた10か月を営業日と同じ色で塗る（Disfrutar の /calendar）。
- 満席 #fff / #ecaca1＝1.91:1・休み #555 / #000＝2.82:1・今日 #fff / #ccc＝1.61:1（CoverManager・Disfrutar）。
- 取り消し（15日前・€150／名）と値段（325€）を、予約のページにも部品にも出さない（Disfrutar：規約 §3.1 とトップの #offers だけ）。
- 時刻を選ぶ前から決済の SDK 3つ（2.8MB）を読む（CoverManager・Disfrutar）。
- 満席の時刻を select から黙って消し、夜の空白の理由を言わない（Dojo・Padella Soho：11/28 は 15:30 の次が 21:00、16枠）。
- 時刻を「12:15 noon」「13:00 PM」、日を「28 11 2026」、暦の見出しを「11 2026」と書く（Dojo）。
- 過ぎた日・受付前の日・満席の日を同じ #196254 on #003f33（1.66:1）にする（Dojo）。
- トップの予約の入口が、1日1回の窓の中の「here」1語だけで、どの店から開いても Soho の予約（Padella）。
- 営業の時間を公式の本文・JSON-LD・予約の設定で別々に持ち、5か所で食い違う（Padella・Dojo）。
- 取り消し・遅れ・預かりの語が予約の画面に0（Dojo・Padella。遅れの10分は Shoreditch のページだけ）。
- 予約の画面で JS 1本 6,395KB と全言語の文言 321KB×3 を読む（Dojo）。
