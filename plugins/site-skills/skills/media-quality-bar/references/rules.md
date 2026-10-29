# 横断ルール：メディアのサイトをまたいで効いていること

2つ以上のサイトで同じ結果になったことだけを、番号つきで書く。1サイトだけの発見は `types/<slug>.md` に置く。
書くときは（〇〇と△△で確認）のように、元になったサイトを添える。

1. 長い記事でも目次を付けないサイトがある。高さ1万px超の記事は目次と「いま読む節」の印を付ける（メルカリエンジニアリング：高さ 15,659px、ProPublica：高さ 21,446px、北欧、暮らしの道具店：高さ 16,318px、King Arthur Baking：レシピ 10,852px・手順17、LINEヤフー Tech Blog：PC 14,750px・SP 21,153px、Quanta Magazine：PC 12,051px・SP 16,623px、6サイトとも本文の目次無し。LINEヤフー Tech Blog は CSS に目次の箱があるのに40本で使用 0）。
2. 画像の width/height が抜けると、記事の途中で寸法が決まらず、元画像を引き伸ばしたり本文を押し下げたりする。全画像に寸法を付ける（メルカリエンジニアリング：アイキャッチ無しで PC CLS 0.064、ProPublica：長い記事の写真が元 300px を 810px に拡大、北欧、暮らしの道具店：本文の写真13枚に寸法無しで PC CLS 0.0642、King Arthur Baking：一覧のカードの写真 323×218 と自社の帯に寸法無し、LINEヤフー Tech Blog：本文の図が width="1000" height="auto"。height="auto" は寸法にならない）。守れている見本は LINEヤフー Tech Blog の一覧（写真を padding-bottom 52.6316% の箱に入れ、CLS PC 0.0012・SP 0）。
3. 記事の終わりに「次の1本」へ進む大きな導線を置く。関連は小さな一覧だけのサイトが続いた（メルカリエンジニアリング：関連3件の帯、ProPublica：Read More 枠・More in 分類6本・Most Read 9本、LINEヤフー Tech Blog：Related Post 3本だけ。3サイトのうち著者紹介は LINEヤフー Tech Blog にだけある）。守れている見本は Quanta Magazine（全幅の NEXT ARTICLE：PC 400px・SP 323px、題は白の 40px 級。その前に同じ分類の3本）。
4. 一覧の2ページ目以降に URL を持たせる（メルカリエンジニアリング：「もっと見る」で増やした分に URL 無し、ProPublica：連載の川24本で終わり、次のページへのリンクが見つからない、King Arthur Baking：ページ送りが href の無い button で、?page=2 は history で書くだけ）。守れている見本は北欧、暮らしの道具店（「次へ」で /note/page/2・rel="next"）。LINEヤフー Tech Blog は番号に /page/2 の URL があるが、前後の矢印がいつも aria-disabled・href="#"。Quanta Magazine は /mathematics/page/2・rel="next" があるが、SP で番号を隠して NEXT だけにする。
5. 記事に Article の JSON-LD（公開日・更新日・書き手）を入れる。読みもののサイトでも 0件のことがある（メルカリエンジニアリング：JSON-LD 無し、北欧、暮らしの道具店：5ページとも 0件・レシピ記事にも Recipe 無し、Quanta Magazine：記事も WebPage で、日付と author を WebPage に載せる）。
6. ホバーの変化は `@media (hover:hover)` で囲む。囲まないサイトが続いた（ProPublica：:hover 159か所に 0、北欧、暮らしの道具店：:hover 166か所に 0、King Arthur Baking：:hover 516か所に 0、LINEヤフー Tech Blog：:hover 26か所に 0、Quanta Magazine：:hover 136か所に 2）。
7. 日本語の本文は端末の書体で組み、Web フォントは読まないか約物だけにする（メルカリエンジニアリング：Web フォント無しで游ゴシック体、北欧、暮らしの道具店：かっこ18字の YakuHanJPs だけで 6KB）。日本語の Web フォントを本文まで使うと記事1本で 1MB を超える（LINEヤフー Tech Blog：LINE Seed JP の CSS 224KB・@font-face 278個＋woff2 1.04MB）。
8. 記事の重さは、解析・広告のタグを外した値と全部込みの値の両方で測る。タグの分を外して測ると見落とす（ProPublica：記事 148ホスト・626リクエスト、北欧、暮らしの道具店：記事 PC 5.25MB → 全部込み 6.30MB、自社ドメインの /scripts/ から GTM と gtag 2.28MB、King Arthur Baking：記事 PC 8.67MB → 全部込み 13.28MB・44ホスト、GTM だけで 3.47MB、LINEヤフー Tech Blog：記事 PC 4.37MB → 全部込み 4.96MB・9ホスト、Quanta Magazine：記事 PC 14.14MB → 全部込み 15.43MB・19ホスト）。
9. SP で表やコードを横に送るときは、はみ出したときだけ続きの手がかりを出す。右端で切れるだけのサイトが続いた（メルカリエンジニアリング：表 470px を 348px で、LINEヤフー Tech Blog：表 490px を 350px で、どちらも手がかり無し）。
10. 記事の更新日を、画面と JSON-LD の dateModified の両方に書く。無いサイトが続いた（King Arthur Baking：dateModified 無し・datePublished も ISO でない、LINEヤフー Tech Blog：画面にも JSON-LD にも更新日が無く、公開日も配られる HTML では空、Quanta Magazine：JSON-LD に dateModified 2026-10-27 があるのに画面は公開日 October 23 だけ）。
11. 動画は押すまで、または見える範囲に来るまで読まない。最初から読む埋め込み・自動再生が、ページの重さの半分を超えた（King Arthur Baking：トップの YouTube 3,683KB、Quanta Magazine：トップの YouTube 4本で 16,483KB・主役の mp4 8,746KB、記事 SP の自動再生 mp4 2本で 15,987KB）。自動再生を残すなら prefers-reduced-motion で止める（Quanta Magazine は 0か所）。
