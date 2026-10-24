# テック・ダーク（開発ツール、SaaS、AI プロダクト、ダッシュボードの製品ページ）
Linear（linear.app）の実測。暗い面に製品の画面そのものを置き、色は足さず白の透明度で重ねる型。
- 面は4段の暗い灰：`#08090a`（地）・`#0f1011`・`#141516`・`#191a1b`。境界は白の透明度の4段（`#ffffff0d` / `14` / `1f` / `26`＝約5 / 8 / 12 / 15%）、カードは `linear-gradient(#ffffff08,#ffffff08)` を地に重ねる。文字は `#f7f8f8`（純白にしない）→ `#d0d6e0` → `#8a8f98` → `#62666d`。アクセントは藍1色（面 `#5e6ad2`・リンク `#7170ff`・ホバー `#828fff`）、暗い面でいちばん明るい1点は白ピル `#e5e5e6`（`data-mood="dark"`）。
- 文字は1書体の可変フォント（Inter・woff2 344KB）、太さは中間値 510 と 590。見出しは 64px・行間1・字間 −.022em、17〜24px は −.012em、本文 15px・行間1.6・−.011em と、**大きいほど詰める**。ID・コードだけ等幅。見出しは `text-box:trim-both cap alphabetic`（`@supports` の中）で上下の余白を揃える。
- 動きは3つ：色・filter は .16s（ホバーは `filter:brightness(1.3)` を .1s）、画像は `opacity` と `mask-position`（`linear-gradient(to right,#000 25%,#000000e6 50%,#0000) 150% 0/400%`）で左からにじむ .8s、流れる帯は 30s linear・gap 24px・両端64pxをマスクで消す。イージングは `(.25,.46,.45,.94)` に統一。すべて `prefers-reduced-motion:no-preference` の中（21か所）。
- 縁の光：罫線だけを `radial-gradient(ellipse 17.18% 28.57% at var(--edge-highlight-x,0) var(--edge-highlight-y,0))` のマスクで切り抜く。位置の既定は左上。
- 章の型は繰り返し：題（`max-width:18ch`）＋本文1〜2行＋アプリ画面。余白は上下128px（768px以下 48/96px）。写真・動画・3D は使わず、トップに canvas・video は0。画像は AVIF 438KB で、画像合計 約1.6MB。
- 構成：ヘッダー（白ピルの Sign up）→ ヒーロー（宣言＋アプリ画面）→ ロゴ帯 → 宣言 → 4つの章 → 更新履歴 → 導入企業 → 締め → 6列のフッター。
- **反面教師**：トップで検索の索引 JSON（1.09MB）と、リンク先ページの RSC の先読み（7.8MB）を取る。HTML 自体も 1.2MB、JS 250 本・4.5MB。PNG が1枚で 1.0MB（`f=auto` なのに PNG）。スマホでも 16MB。
- 部品：`data-mood="dark"`、`.lpa-wipe` / `LPA.wipe`、`.lpa-edge` / `LPA.edgeLight`、`.lpa-bright`、`.lpa-marquee[data-fade]`。
