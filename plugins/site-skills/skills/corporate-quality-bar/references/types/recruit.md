# 採用サイト（採用だけの特設サイト）

## この下位タイプで特に見ること
社員の声、職種の探し方、応募までの手順（見学・選考の流れ・フォーム）、職場の数字の出し方

## 見本の実測

### HILLTOP 採用サイト（https://recruit.hilltop21.co.jp/ 、2026-10-27 解剖。選んだ理由：中小の製造業〔京都府宇治市・アルミの切削加工〕の採用サイトで、社員の声・クロストーク4部署・数字のタイル9つ・募集要項5件・エントリーまで公開ページで歩ける。制作会社の事例集「Web幹事」の制作実績に掲載。Web の賞は確かめられなかった）
WordPress。会社サイト hilltop21.co.jp とは別ドメインで、会社概要は持たず会社サイトへ別タブで渡す。
- **ナビ（PC）**：6項目、うち4つが「〜を知る」（トップメッセージ／仕事を知る▾／ヒトを知る▾／働く場所を知る／よくある質問／ジョブリスト）、Noto Sans JP 14.4px/500・#555・押せる範囲 155×81px。右に離して ENTRY（100×80px のグラデーションの四角、ホバーで 180°回る）。▾は画面幅の帯 rgba(0,0,0,.5)・all .2s ease-in に名前だけ（一言なし、ホバーだけで開く）。「仕事を知る」は `javascript:void(0)`。
- **ヘッダー**：position:static・80px。スクロールすると PC ではナビへ戻る手段が無い。SP はハンバーガー（30×30px・#da338a の丸）だけ fixed、メニューは白 .8＋.9 の全画面で、項目が translateY(200px)→0・1s ease・遅れ .1〜.5s。
- **トップの順番**：動画 811px（文なし。最初の画面の文字 PC 0字）→ About us 712（社屋の写真＋トップメッセージへ）→ Interview 707（社員カード 300px が流れ続ける）→ 仕事を知る（部署ボタン4つ 230×58px）→ Culture 393 → Join Us! 480 → フッター 413。全 4,577px。何の会社かの文はトップに無い。
- **応募の入口**：ヘッダーの ENTRY（スクロールで消える）と、全ページ最後の Join Us! の帯（480px／SP 359px、エントリー・ジョブリスト一覧のボタン＋「よくある質問 →」の文字リンク）。トップの途中には無い。
- **社員の声**：インタビュー3人は全員に同じ5問（自己紹介と業務→入社理由→入社後のギャップ→やりがい→求める人物像）、答え 約270〜380字、問い 28.8px/700（SP 17.6px）、英字の小見出し 16px（SP 11.2px）。クロストークは部署ごと4人、PROFILE（丸写真 200px・入社年・前の専攻・趣味）→ dl（名前 10%・発言 85%）→ 募集要項へ＋他部署3つ。トップのカードは名前を出さず部署の札だけ、写真の alt は3人とも「開発エンジニア」。
- **職場の数字（/culture/）**：灰 #f1f2f3・角丸 10px のタイル9つ（幅 347／540／734px）を、値ごとに形を変える（男女比＝帯、構成＝円、年齢＝棒5本、比率＝アイコン2つ、食堂＝表と「0円」、服装＝横棒）。数字は Hanken Grotesk 800・112px／72px・#e4007f、単位 32px/700。JS が見えたときに 0 から 2500ms で数え上げ、`Math.ceil` のため 17.3（残業 時間/月）が「18」で止まる。reduced-motion でも数える。どの数字にも日付が無い。
- **募集要項**：一覧は2列のカード 520px（写真の左上に白い札で職種と部署、新卒／キャリアの札 #da338a）＋「募集要項を見る」416×68px。詳細は見出し8つ（仕事内容・資格・勤務地・勤務時間・給与・諸手当・昇給・休日休暇、#da338a 24px・下線 3px、全部 h1）。仕事内容に【具体的には】【配属先の編成】【将来のキャリアパス】、勤務地に「屋内全面禁煙」。給与は「当社規定で決定」＋固定残業 10H/40H（金額なし）。選考フローは無い（FAQ は「募集要項ページより選考フローをご確認下さい」と案内している）。
- **見学**：申し込む場所は無い。FAQ の1文「会社見学も可能ですのでご相談ください」と、社員の話（会社見学で入社を決めた）にだけ出る。
- **エントリー**：MW WP Form、入力→確認→送信。9項目（お名前・ふりがな・生年月日〔年月日の3欄〕・ご住所〔任意〕・電話・メール・希望職種〔select 5つ〕・志望動機・自己PR）のうち8つ必須（dt::after の「※」#e1007f 12.8px）。label 0・required 0・autocomplete 0、電話もメールも type="text"、入力欄の書体は Arial（textarea は monospace）。誤りは上に #e1007f の帯の1文＋欄に赤 2px の枠（欄ごとの文は隠す）。個人情報の扱いの文は無い。FAQ の「お問い合わせはこちらから」もこのフォームへ来る。
- **ニュース**：無い（説明会・見学会の日程を載せる場所が無い）。
- **データ**：lang="ja"、JSON-LD 無し（JobPosting も無い）、トップの h1 が6つ、title「HILLTOP株式会社 | HILLTOP株式会社」、meta description に別ページの題「玲司さんHILLTOP株式会社」が混入。
- **見た目の値**：#333（15回）・白（31）・灰 #f1f2f3（13）・札 #da338a（12）・数字 #e4007f（7）、グラデーション #fdca62→#e73394 に noise.png を color-burn。英字の題 Montserrat 80px/700（SP 40px）、本文 16px/300・行間 2（SP 14.4px）。白字の札 #da338a で 4.36:1、縦の札 2.75:1、Join Us! の帯の中央で白字 2.94:1、フッターのリンク rgba(51,51,51,.6) で 3.69:1。
- **重さ（PC/SP、動画を除く）**：top 3.85/3.63MB、メッセージ 1.82、数字 1.53、ジョブリスト 3.79、社員の声 3.07。動画は PC 用 60.7MB（1920×1080・30秒）・SP 用 27.9MB だが、`<source>` を読み込み開始のあとに JS で消すため SP でも PC 用を読み、開いて10秒で PC 42.0MB・SP 43.4MB。社員カード 300px に 2560px の写真（948KB）、img の loading="lazy" 0／11。

### Life at Spotify（https://www.lifeatspotify.com/ 、2026-10-30 解剖。選んだ理由：大きな会社の採用だけのサイトで、最初の画面が募集の束と検索になり、絞り込みの選択肢に件数が付き、応募を自サイトの中の4段で済ませる。Awwwards の作品ページに Honorable Mention〔2026年1月25日〕として掲載。Webby・FWA の受賞は確かめられなかった）
Next.js＋WordPress（headless、募集は api.lifeatspotify.com/wp-json/animal/v1/job/search の JSON 28,761 バイト）。lang="en"。会社概要・数字・沿革・代表のことばのページは無い。
- **ナビ（PC）**：fixed・地なし。ロゴ 40px の丸、中央にピル3つ（The Way We Play 152×42・Find Your Team 139×42・Start Your Journey 161×42、14px、左右 20px、角 100px、すき間 8px、地 rgba(41,41,41,.68)、ホバー #404040、今いる区画 rgba(242,242,242,.92)＋blur 20px）、右端に離して All Jobs 93×42px（いつも明るい地）。PC に下がり窓は無い。区画のトップでは2段目（↳ の丸＋Culture・Benefits & Perks など）が出て、600px 下へ読むと1段目が 40→−51px、2段目が 88→39px に上がって残る。ピルが本文の見出しに重なる。
- **SP のメニュー**：全画面のぼかし、4項目（▾で小項目）、画面の下に緑 #19b551 の帯「All Jobs［79］→」。件数が出るのはここだけ。
- **トップの順番**：写真＋h1「Join the band」128px → 1秒で写真の箱が 470×470px・角 12px に縮み（GSAP、width/height を動かす）、h1 は scale .35、1.5秒で募集の束（Swiper coverflow・rotate 45・depth 100・4,000ms ごとに送る・speed 800）と検索の帯 1424×98px → Find your stage 716 → Built for how you work and live 948 → Go deeper の6枚 920 → Our 3 Values 1,012 → Latest jobs 837 → Wanna join us? 698 → Quick clicks 427（全幅の行3本）→ フッター。全 7,701px。何の会社かの文は無い。h1 は約5秒で visibility:hidden。
- **信頼の材料**：数字は無い。価値観3つ（#c87dff の3枚、題 28〜40px が上・文 20px が下、top と about で同じ）、都市名の帯（80px・wdth 150 の白い札と写真の札、約 131px/秒＋スクロール連動、reduce で止まる）、フッターの報告書 PDF 2本（大きさの表示なし）。
- **募集の一覧（/jobs）**：h1 無し（見出しは input の value を1文字ずつ打つ）。窓3つ（Location・Category・Job type、306×78px、div と p で Tab では届かない）。選択肢に件数：London (41)・Stockholm (31)・New York (23)・Los Angeles (4)・Jakarta (2)・Tokyo (2)・Toronto (2)・Berlin (1)・Ho Chi Minh (1)。上に「79 jobs in all locations in all categories in all job types」24px。URL は ?l=london&c=…&q=…、読み直しても残る。選ぶと 800ms で +15〜16KB。行は白 946×186px・角 24px、職種名 20px、場所、札2つ、Permanent、ホバーで地が #89bcf8。行は div role="link"（href 無し）。5件ずつ「Load more jobs」、「Showing 5 of out 79」（誤字）。SP は全画面の白いシートで「Clear all」「See 79 jobs」。言葉「design」で 79件中 50件。
- **応募**：募集の詳細の「Apply now」（708×98px の帯）で白いシートが下から上がり、上に「Application 職種名」と 1 Information・2 Links・3 Qualifications・4 Demographic survey。外の採用システムへ渡さない。欄：履歴書・代名詞の checkbox 11・Full name*・Email*・Phone*・Current company*・Current location*・LinkedIn・GitHub・Portfolio・Other・自由記述・在留資格の問い3つ。label は全部あるが、電話もメールも type="text"、required 0（* の文字だけ）、autocomplete は name と email だけ、案内の同意に aria-required="true"。詳細のページに JobPosting は無い。
- **ニュース（/latest）**：全部 Podcast、日付に年が無い（40個、「October 13」が2回）、行の先は全部 open.spotify.com（外の印なし）、画像 139枚で lazy 0。トップにニュースの欄は無い。
- **データ**：JSON-LD 0（全ページ）、top の img 31のうち alt 属性なし 21、トップでスクリプトのエラー（reading 'innerHTML' of null）。開くと _next/data の JSON 5本を先読み。
- **見た目の値**：地 #000、面 #89bcf8（黒字 10.61:1）・#c87dff（7.83）・#19b551（7.77）、行 #fff、フッターの面 #1a1a1a、ボタン #191414。補助 rgba(255,255,255,.82)（13.77:1）、副の札 rgba(0,0,0,.6)（5.74:1）。書体は SpotifyMixVariable 1本（572KB、wght 40–257・wdth・slnt）：本文 wdth 100・wght 70、見出し wdth 120・wght 182、特大と地名 wdth 120〜150・wght 218。大きさは calc(最小 + 差×(100vw − 48rem)/42)（display-3 64→32px、headline-4 20→16px、paragraph-2 24→16px）。角 24px（SP 16px）、面のすき間 8px。
- **動き**：CSS の reduced-motion 0か所。reduce で止まるのは都市の帯だけで、最初の画面の縮み・束の4秒送り・2秒送りのスライダー・出てくる絵（transform .4s,opacity .2s が CSS に 2,568回）・見出しを打つ動きは動く。開閉 .35s cubic-bezier(.645,.045,.355,1)、ホバーは背景色 .25s。
- **重さ（PC/SP）**：top 14.50/14.18MB（jpeg 10,049KB、束の写真 2000px 573〜924KB を SP でも同じ、表示 125〜583px、lazy 0/31）、価値観 7.19/6.71、チーム 6.91/6.60、募集の一覧 3.77/3.77（写真 0）、最新 5.92/5.92。タグ：GTM 933KB＋OneTrust 763KB（/jobs では自身 3,042KB の 56%）。同じ CSS 133KB を2回読むページあり。

## 真似る型（2サイトから。どちらの値かを添える）
- 応募の入口だけを別の形・別の地でナビの右に離す（HILLTOP：ENTRY 100×80px のグラデーション、Spotify：All Jobs 93×42px の明るい地）。件数を添える（Spotify は SP のメニューの緑の帯にだけ「79」。PC にも出す）。
- 最初の画面で「どんな募集があるか」に答える（Spotify：写真が 470px の札に縮んで募集の束＋検索の帯 1424×98px）。HILLTOP は最初の画面が文字0の動画で、何の会社かも募集も出なかった。h1 は消さずに残す。
- 全ページの最後に同じ誘いの帯を置き、行動は3つまで（HILLTOP：Join Us! 480px にボタン2つ＋文字のリンク1つ、Spotify：Wanna join us? の紫の帯に All jobs 1つ＋Sound Good? に Start Your Journey・Read our FAQ）。
- 募集の一覧は、窓の選択肢に件数（London (41)）、上に今の条件を読む1文（「79 jobs in all locations…」）、URL に残す（?l=…&c=…&q=…）、SP は全画面のシートで「See N jobs」（Spotify /jobs）。窓は button と checkbox で作る。
- 応募は名前のついた段に分け、上に段の列を出す（Spotify：Information・Links・Qualifications・Demographic survey）。中小は1段目を見学にする（HILLTOP の社員は見学で入社を決めた）。
- 価値観や職場の話は色の面に入れ、題を上・文を下に寄せる（Spotify：#c87dff の3枚）。職場の数字はタイルにして値ごとに形を変える（HILLTOP /culture/ の9枚）。ただし数え上げず、日付を添える。
- インタビューは全員に同じ問いを同じ順で（HILLTOP：5問）。部署の話は4人前後のクロストークで、PROFILE を先に置く。
- 募集要項に条件の表の外の具体（配属先の編成・キャリアの道・禁煙・食堂の負担）を小見出しで書く（HILLTOP 製造系総合職）。
- 場所は地名を特大の札にして写真の札と交互に流す（Spotify：80px・wdth 150、約 131px/秒、reduce で止まる）。止めるボタンも付ける。

## 反面教師
- 選考フローが募集要項に無く、FAQ が無い場所を案内する（HILLTOP）。流れは `<ol>` で募集要項に書き、見学をその1段目にする。
- 見学の入口が無い。中小の製造業では見学が応募の手前の行動になる（HILLTOP の社員も見学で決めている）。見学の日を選べる入口を、最初の画面と募集要項に置く。
- 給与を「当社規定で決定」にし、固定残業代の時間だけ書く（HILLTOP）。月給の下限と固定残業代の時間・金額を書く。
- 数え上げの `Math.ceil` で小数が変わる（17.3→18）、reduced-motion でも数える（HILLTOP）。
- エントリーが9項目・8必須・label 無し・電話もメールも text（HILLTOP）。
- SP でも PC 用の 60.7MB の動画を読む、最初の画面に文が無い（HILLTOP）。
- 止まらない社員カードの流れ（slick：pauseOnHover/Focus false・swipe false）（HILLTOP）。
- 最初の画面の h1 を演出のあとで隠す（Spotify：「Join the band」が約5秒で visibility:hidden）。募集の一覧に h1 が無い（Spotify /jobs）。
- 絞り込みの窓が div で Tab で届かず、募集の行が div role="link"（Spotify /jobs）。窓は button＋checkbox、行は a href。
- 自動で送る束・スライダーが reduce でも動く（Spotify：4,000ms と 2,000ms。CSS の reduced-motion 0か所）。
- 応募の電話・メールが type="text"、必須は * の文字だけ、宣伝の同意に aria-required（Spotify）。
- ニュースの日付に年が無く、全部外のサイトへ印なしで出る（Spotify /latest）。
- 募集の詳細に JobPosting の構造化データが無い（HILLTOP・Spotify とも0）。

