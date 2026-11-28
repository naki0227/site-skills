# 公共の場所のプロジェクト・番号の地図が目次（地図・一覧・メニューを同じ番号で結ぶ）
THE TOKYO TOILET（tokyotoilet.jp、渋谷区の17の公共トイレを16人のクリエイターが作り直したプロジェクトのトップ。WordPress の自作テーマ＋jQuery＋Velocity＋Google Maps JavaScript API、2026-11-28 実測）の型。場所に通し番号を振り、地図のピン・一覧の札・吹き出し・メニューの目録を全部その番号でつなぐ。色は建物と写真が持ち、UI は白・黒とピンの橙1色。

- **通し番号で結ぶ**：01〜17 を地図のピン（52×70 の PNG、1000px 未満は .7倍）と一覧の札のピン（40×54）に。番号はおおむね地図の西から東。開いた所は橙、まだの所は灰のピン。
- **左に地図・右に一覧**：#map は flex row-reverse で 50%／50%。一覧は説明 15px のあと2列（50% − 10px）、札は名前 16px／作り手 12px／開いた日 11px。札を押すと地図が panTo して InfoWindow（名前 15・住所 12・作り手 12・詳細をみる・写真 200px）。SP は地図だけ 450px（一覧は消える → 反面教師）。部品 `LPA.pinIndex`。
- **地図の地を薄く**：styles で全体 lightness 35、行政界の線・poi・transit・道路の印を非表示。駅と公園の名前は自前の札（画像6枚）を Marker で重ねる。縮尺は PC 15・1000px 未満 12、最後に fitBounds(余白 5)。
- **表紙**：撮る人を1人に決め（Jiro Takano / Nacása）、同じ目の高さで場所を巡る 14.7秒の1本の動画（muted・loop・preload="none"・poster）。真ん中に白の名前の SVG（幅の 48%）、左下に撮影者 10px、左上に白 .7 の札でお知らせ1件。ボタンは置かない。
- **about**：左に一言 34px と文 22px（行の高さ 42px）、右に 1px #aaa・角丸 10px の枠で作り手16人を五十音順の2列（16px・行 40px）。枠はページでこの1つだけ。
- **保守に1章**：#maintenance 850px、清掃の人の手元の動画（2本から来るたびに1本）を全幅に、左に白の題・文 16px・枠のボタン（2px・角丸 5px、乗ると白黒反転 filter invert(100%)）。
- **メニュー＝目録**：開くと #main・header・footer を隠して scrollTop 0、17か所を3列の札（写真 140×100・名前 14px・住所・作り手）で。閉じると元の scrollTop へ戻す。
- **一覧の札**：200px の横長、左に名前 18／住所 12／作り手 15px、右半分に写真（黒 .3 の膜）、角丸 6px・地 #f5f5f5、2列・間 50px。順は開いた日の新しい順。
- 動き：CSS の transition 0、keyframes は opacity の2つだけ。動画は scroll ごとに画面の上下 400px に入ったものだけ play()、外は pause()（部品 `LPA.nearPlay` は IntersectionObserver の rootMargin で同じことをし、reduce・saveData・タブが裏で止める）。乗るとリンク .7・札 .95。
- 文字：CSS は Helvetica Neue → Arial → 游ゴシックの1系統、字間 .06em。Noto Sans JP を2つの形で読むが使わない。英字の題はすべて SVG。
- 色：#000 53 回・#fff 23 回・灰の段、有彩色は #dd6b47（ピン・一覧の字）、:visited #fca287、::selection #a6d1ce。#50974b は保守のページ用。
- 重さ：PC 16.27MB・SP 16.00MB（measure.js）、下りきると 27.15MB／18.92MB。2000px の JPEG 17枚 9.4MB を 255px の札で、保守の章の動画 7.9MB（PC だけ）、YouTube 約 4.3MB、GTM 2.1MB、Noto Sans JP の CSS 979KB。
- **反面教師**：本文 PC 12px・SP 10px（13px 未満 51%／82%、inspect FAIL 4）／`:focus,a{outline:none}`／橙の字 3.18:1／使わない Noto Sans JP を2回／写真に srcset・lazy なし、閉じたメニューの写真まで最初に読む／YouTube を最初から埋め込む／reduced-motion 0／SP で一覧が消える・札の字が切れる／h1 が2つ。
- **作例で確かめた翻訳**（電停の屋根・函館市電の11の電停の待合所を11人が作り直す架空の企画、2026-11-28）：番号 01〜11 を湯の川から振り、路線図（線と点だけの模式）と一覧を同じ番号のピンで結び、系統（2系統 谷地頭・5系統 どつく前）で絞れるようにした。保守の章は「始発の前の除雪」。名前は書体で大きく置かず、停留場の縦長の札の中に縦書きで。色は雪の白 #f4f6f3・濃い緑の墨 #14231c・8000形の緑 #1f7a43、書体は BIZ UDPGothic と Overpass。inspect FAIL 0・WARN 11（番号・札の題・合う写真の無い枠4つ）。
