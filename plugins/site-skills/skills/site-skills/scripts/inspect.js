// 使い方: node tools/inspect.js <html のパス か URL> [--allow id,id] [--out フォルダ]
// 作ったページを PC（1440px）とスマホ（390px）で開き、AIっぽさの癖を測って FAIL / WARN で返す。
// FAIL が1つでも残っていれば終了コード 1。WARN は「理由を1文で言えないなら直す」。
// しきい値の出典：site-skills の ai-tells.md（使用例5つと実サイトの計測、2026-10-26）と、
// taste-skill（Leonxlnx/taste-skill, MIT）の 247 サイト調査。どの値も下の RULES に出典を書いている。
const path = require('path');
const fs = require('fs');
const { execSync } = require('child_process');
let pw; try { pw = require('playwright'); } catch (e) { pw = require(execSync('npm root -g').toString().trim() + '/playwright'); }

const args = process.argv.slice(2);
const opt = k => { const i = args.indexOf('--' + k); return i >= 0 ? args[i + 1] : null; };
const target = args.find((a, i) => !a.startsWith('--') && !(i > 0 && args[i - 1].startsWith('--')));
const allow = (opt('allow') || '').split(',').filter(Boolean);
const out = opt('out');
if (!target) { console.error('usage: node tools/inspect.js <file.html|url> [--allow id,id] [--out dir]'); process.exit(2); }
const url = /^https?:/.test(target) ? target : 'file://' + path.resolve(target);

// ページの中で測る（ブラウザで実行する）
function probe() {
  const vw = innerWidth, vh = innerHeight;
  const visible = el => { const s = getComputedStyle(el); if (s.display === 'none' || s.visibility === 'hidden' || +s.opacity === 0) return false; const r = el.getBoundingClientRect(); return r.width > 0 && r.height > 0; };
  // 表・入力欄・コード・本物の画面の部品（data-ui）は、線や等幅があって当然なので数えない
  const exempt = el => !!el.closest('table,form,input,select,textarea,pre,code,[data-ui],[aria-hidden="true"]');
  const rgb = c => { const m = c.match(/[\d.]+/g); return m ? m.map(Number) : [0, 0, 0, 0]; };
  // rgb() は不透明の色で3つの数しか返さない。透明度は無ければ 1
  const alpha = c => { const a = rgb(c); return a.length > 3 ? a[3] : 1; };
  const lum = ([r, g, b]) => { const f = v => { v /= 255; return v <= .03928 ? v / 12.92 : ((v + .055) / 1.055) ** 2.4; }; return .2126 * f(r) + .7152 * f(g) + .0722 * f(b); };
  const ratio = (a, b) => { const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p); return +((x + .05) / (y + .05)).toFixed(2); };
  const bgOf = el => { for (let e = el; e; e = e.parentElement) { const s = getComputedStyle(e); if (s.backgroundImage !== 'none' && !/gradient/.test(s.backgroundImage)) return null; const c = rgb(s.backgroundColor); if (c[3] === undefined || c[3] > .9) return c; } return [255, 255, 255, 1]; };

  const m = { chars: 0, runChars: 0, runSizes: {}, runTiny: 0, runCenter: 0, tightBottom: [], greySlots: [], photos: 0, monoMeta: [], softPhotos: 0, iconCards: 0, filler: [], twinCta: 0, greyRun: 0, badBreaks: [], hues: {}, pills: 0, softRadius: 0, sizes: {}, tiny: 0, families: {}, lowContrast: [], unreadable: [], eyebrows: [], numbering: [], bordered: 0, boxes: 0, gradients: 0, gradientText: 0, softShadows: 0, emoji: [], headings: [], svgHero: 0, statRows: 0, bodyBg: getComputedStyle(document.body).backgroundColor };
  const textEls = [];
  for (const el of document.body.querySelectorAll('*')) {
    if (!visible(el)) continue;
    const s = getComputedStyle(el);
    // 線と箱（実サイトの 7〜27 個は最初の3画面で数えた値なので、同じ範囲で数える）
    const inFirst3 = el.getBoundingClientRect().top + scrollY < vh * 3;
    if (!exempt(el) && inFirst3) {
      const sides = ['Top', 'Right', 'Bottom', 'Left'].filter(d => parseFloat(s['border' + d + 'Width']) > 0 && s['border' + d + 'Style'] !== 'none' && rgb(s['border' + d + 'Color'])[3] !== 0).length;
      if (sides) m.bordered++;
      if (sides === 4 && !/^(BUTTON|A|IMG|HR)$/.test(el.tagName)) m.boxes++;
      if (/gradient/.test(s.backgroundImage)) m.gradients++;
      const pos = s.position;
      if (s.boxShadow !== 'none' && pos !== 'fixed' && pos !== 'sticky' && !el.matches('dialog,[role=dialog],[role=menu]')) {
        // ぼかしのある影だけ（Oatly の 2px 2px 0 のような硬い影は世界観として使われるので数えない）
        const blurs = [...s.boxShadow.matchAll(/(-?[\d.]+)px\s+(-?[\d.]+)px\s+([\d.]+)px/g)].map(x => +x[3]);
        if (blurs.some(b => b > 0) && !/inset/.test(s.boxShadow)) m.softShadows++;
      }
    }
    if (s.webkitBackgroundClip === 'text' || s.backgroundClip === 'text') m.gradientText++;
    // 色相の数：彩度のある文字色・地の色を 30° ごとに数える（写真・本物の画面の部品は除く）
    if (!exempt(el) && !/^(IMG|VIDEO|CANVAS|PICTURE)$/.test(el.tagName)) {
      for (const c of [s.color, s.backgroundColor]) {
        const [r, g, b, a] = rgb(c); if (a === 0) continue;
        const mx = Math.max(r, g, b) / 255, mn = Math.min(r, g, b) / 255, l = (mx + mn) / 2, d = mx - mn;
        const sat = d === 0 ? 0 : d / (1 - Math.abs(2 * l - 1));
        if (sat < .35 || l < .12 || l > .93) continue;
        let h = mx === r / 255 ? ((g - b) / 255 / d) % 6 : mx === g / 255 ? (b - r) / 255 / d + 2 : (r - g) / 255 / d + 4; h = Math.round((h * 60 + 360) % 360 / 30);
        m.hues[h % 12] = (m.hues[h % 12] || 0) + 1;
      }
      const rad = parseFloat(s.borderTopLeftRadius) || 0, r0 = el.getBoundingClientRect();
      const filled = rgb(s.backgroundColor)[3] !== 0 || parseFloat(s.borderTopWidth) > 0;
      // 丸いラベル（「お得」「営業中」のような短い語のピル）
      if (filled && r0.height < 30 && rad >= r0.height / 2 - 1 && el.innerText.trim().length <= 8 && !/^(BUTTON|A|INPUT)$/.test(el.tagName)) m.pills++;
      // 中くらいの角丸（9〜16px）の面：taste-skill の調査で上位のボタン 6%・下位 24%
      if (filled && rad >= 9 && rad <= 16 && r0.width > 120 && r0.height > 60) m.softRadius++;
    }
    // 文字
    let own = ''; for (const n of el.childNodes) if (n.nodeType === 3) own += n.textContent;
    own = own.replace(/\s+/g, ' ').trim();
    if (own) textEls.push([el, s, own]);
  }
  for (const [el, s, own] of textEls) {
    const fs = Math.round(parseFloat(s.fontSize)); const k = own.length;
    const fam = s.fontFamily.split(',')[0].replace(/["']/g, '').trim();
    m.chars += k; m.sizes[fs] = (m.sizes[fs] || 0) + k; m.families[fam] = (m.families[fam] || 0) + k;
    // 本文＝ナビ・フッター以外の、30字以上の文（実サイトはフッターやナビに12px の小さな文字が多く、それを数えると本文を見誤る）
    const chrome = el.closest('nav,footer,header,[role=navigation],[role=contentinfo]');
    if (!chrome && !exempt(el) && k >= 30 && !/^H[1-6]$/.test(el.tagName)) { m.runChars += k; /* 写真の出典・注記は本文の大きさの多数決に入れない（2026-11-09：どの章にも人の写真と出典を書くと、13px の出典が本文より多くなり FAIL になった）。13px 未満の割合には入れる */ if (!(el.closest('figcaption,small,[data-credit],.credit,.cap,.hcap,.photo-credit') || /^(写真|出典|Photo)[：:]/.test((el.textContent || '').trim()))) m.runSizes[fs] = (m.runSizes[fs] || 0) + k; if (fs < 13) m.runTiny += k; if (s.textAlign === 'center') m.runCenter += k; }
    const bg = bgOf(el);
    // 本文の灰色：地との差が 7:1 未満の本文（実測のファッション10件は本文を #000〜#1e1e1e で組み、灰色は注記だけ）
    if (!chrome && !exempt(el) && k >= 30 && !/^H[1-6]$/.test(el.tagName) && bg && ratio(rgb(s.color), bg) < 7) m.greyRun += k;
    // 日本語の折り返し：語の途中で行が分かれる・最後の行が1〜3字だけ（「す。」）
    if (!chrome && !exempt(el) && k >= 20 && /[\u3040-\u30ff\u4e00-\u9fff]/.test(own) && s.writingMode.startsWith('horizontal') && typeof Intl.Segmenter === 'function') {
      const lines = []; const rg = document.createRange();
      for (const n of el.childNodes) { if (n.nodeType !== 3) continue; for (let i = 0; i < n.length; i++) { rg.setStart(n, i); rg.setEnd(n, i + 1); const rc = rg.getClientRects()[0]; if (!rc) continue; const ch = n.data[i]; const L = lines[lines.length - 1]; if (/\s/.test(ch)) { if (L) L.t += ' '; continue; } if (!L || rc.top > L.top + rc.height * .5) lines.push({ top: rc.top, t: ch }); else L.t += ch; } }
      if (lines.length > 1) {
        const last = lines[lines.length - 1].t; if (last.replace(/[。、」）]/g, '').length <= 2) m.badBreaks.push(`「…${lines[lines.length - 2].t.slice(-6)}／${last}」最後の行が${last.length}字`);
        const seg = new Intl.Segmenter('ja', { granularity: 'word' }); let joined = '', cuts = [];
        for (const L of lines) { L.t = L.t.trim(); if (/[A-Za-z0-9.,]$/.test(joined) && /^[A-Za-z0-9]/.test(L.t)) joined += ' '; joined += L.t; cuts.push(joined.length); } cuts.pop();
        for (const w of seg.segment(joined)) { if (!w.isWordLike || w.segment.length < 2) continue; for (const c of cuts) if (c > w.index && c < w.index + w.segment.length) m.badBreaks.push(`「${joined.slice(Math.max(0, c - 5), c)}／${joined.slice(c, c + 5)}」語「${w.segment}」の途中`); }
      }
    }
    if (bg && k > 1) {
      const r = ratio(rgb(s.color), bg); const large = fs >= 24 || (fs >= 19 && +s.fontWeight >= 700);
      // 1.3 未満は、写真や動画の上の文字（地の色を CSS から取れない）か、隠した文字であることが多いので数えない
      if (r < 1.3) {} else if (r < 2.6) m.unreadable.push(`"${own.slice(0, 20)}" ${r}:1`);
      else if (r < (large ? 3 : 4.5)) m.lowContrast.push(`"${own.slice(0, 20)}" ${r}:1`);
    }
    const emo = own.match(/\p{Emoji_Presentation}|[\u{1F300}-\u{1FAFF}]/gu); if (emo) m.emoji.push(...emo);
    // 見出しの上の小さなラベル（英字の小見出し・字間を広げた短い語）
    const ls = parseFloat(s.letterSpacing) || 0;
    const next = el.nextElementSibling || el.parentElement?.nextElementSibling;
    const nextIsHead = next && (/^H[1-3]$/.test(next.tagName) || next.querySelector?.(':scope > h1, :scope > h2, :scope > h3'));
    if (fs <= 15 && k <= 28 && nextIsHead && !exempt(el) && (/^[A-Z0-9 &.\/·—-]{3,}$/.test(own) || ls / fs >= .08)) m.eyebrows.push(own);
    // 飾りの通し番号（01 / 02、(001)、STEP 02）
    if (/^(\(?0\d{1,2}\)?|No\.\s?\d+|STEP\s?\d+|\d{2}\s?\/)$/i.test(own) && !el.closest('ol,table,time') && !exempt(el)) m.numbering.push(own);
  }
  // 箱の中の余白のつり合い：枠か地の色のある箱で、中の文字の下の空き（見た目）が、上の空きや左右の空きより狭いもの
  // （ユーザーの A/B 判定：上下 10px・左右 14px の箱は「下が小さすぎて気持ち悪い」。下は上と同じか少し広く、左右より狭くしない）
  for (const el of document.body.querySelectorAll('*')) {
    if (!visible(el) || exempt(el) || /^(BUTTON|A|INPUT|SELECT|TEXTAREA|IMG|SVG|svg)$/.test(el.tagName)) continue;
    const s = getComputedStyle(el); const r = el.getBoundingClientRect();
    // ボタン・ラベルのような1行の部品は、左右を広く取るのが普通なので数えない（2行以上の中身を持つ箱だけ）
    // 画面幅いっぱいの帯（左右の空きは中央寄せの容れ物のぶん）は箱ではないので数えない
    if (r.height < 56 || r.width < 120 || r.width > vw * .9 || r.height > vh * 1.2 || /^inline/.test(s.display)) continue;
    const framed = ['Top', 'Right', 'Bottom', 'Left'].every(d => parseFloat(s['border' + d + 'Width']) > 0 && s['border' + d + 'Style'] !== 'none') || (alpha(s.backgroundColor) > .9 && s.backgroundColor !== getComputedStyle(el.parentElement || el).backgroundColor);
    if (!framed) continue;
    // 中身の端：中の要素の箱（枠・罫を含む）と文字の行の箱。箱の内側（枠線の内側）から測る
    const inner = { top: r.top + parseFloat(s.borderTopWidth), bottom: r.bottom - parseFloat(s.borderBottomWidth), left: r.left + parseFloat(s.borderLeftWidth) };
    const kidsEls = [...el.querySelectorAll('*')].filter(c => { const cs = getComputedStyle(c); return cs.position !== 'absolute' && cs.position !== 'fixed' && visible(c); });
    // 写真・動画・図が箱の下の端まで届いているカード（全幅の画像で終わる箱）は、余白の問題ではないので数えない
    const lastEl = kidsEls.reduce((p, c) => !p || c.getBoundingClientRect().bottom > p.getBoundingClientRect().bottom ? c : p, null);
    if (lastEl && (/^(IMG|PICTURE|VIDEO|CANVAS|svg|IFRAME)$/.test(lastEl.tagName) || /url\(/.test(getComputedStyle(lastEl).backgroundImage))) continue;
    const parts = kidsEls.map(c => c.getBoundingClientRect());
    const rng = document.createRange(); rng.selectNodeContents(el); parts.push(...[...rng.getClientRects()].filter(x => x.width > 2 && x.height > 4));
    if (!parts.length) continue;
    const gT = Math.min(...parts.map(x => x.top)) - inner.top, gB = inner.bottom - Math.max(...parts.map(x => x.bottom)), gL = Math.min(...parts.map(x => x.left)) - inner.left;
    if (gT < 0 || gB < 0 || gL < 0) continue;
    const lhPx = parseFloat(s.lineHeight) || parseFloat(s.fontSize) * 1.5; if (r.height - gT - gB < lhPx * 1.8) continue;
    if (gL >= 8 && (gB + 1 < gT * .8 || gB + 1 < gL * .8)) m.tightBottom.push(`${el.tagName.toLowerCase()}「${el.innerText.replace(/\s+/g, ' ').slice(0, 12)}」上${Math.round(gT)}・下${Math.round(gB)}・左${Math.round(gL)}`);
  }
  // 写真の枠のまま残った箱：「写真の枠」「撮る写真」と書かれ（aria-label・文字・::before）、中に写真・動画が無いもの
  // （ユーザーの見比べ 2026-10-26：灰色の写真の枠より、自由に使える実在の写真＋出典を選んだ。tools/photos.js で探す）
  for (const el of document.body.querySelectorAll('div,figure,section,aside,span,p')) {
    if (!visible(el) || exempt(el)) continue; const r = el.getBoundingClientRect(); if (r.width * r.height < vw * vh * .04) continue;
    if (el.querySelector('img,video,canvas,picture') || /url\(/.test(getComputedStyle(el).backgroundImage)) continue;
    const label = (el.getAttribute('aria-label') || '') + ' ' + (getComputedStyle(el, '::before').content || '');
    const own = [...el.childNodes].map(n => n.nodeType === 3 ? n.textContent : (n.children?.length ? '' : n.textContent)).join('');
    if (!/写真/.test(label) && !/写真の枠|撮る写真|撮るべき写真|ここに写真/.test(own)) continue;
    if (el.parentElement?.closest('[aria-label*="写真"]')) continue; // 外側の枠だけ数える
    m.greySlots.push((el.innerText || label).replace(/\s+/g, ' ').trim().slice(0, 24));
  }
  for (const im of document.images) if (visible(im) && im.naturalWidth >= 300 && !/\.svg/.test(im.currentSrc)) m.photos++;
  // ユーザーの見比べ第2回（2026-11-01）で AI っぽいと選ばれた側を測る
  // 等幅の小さな英字のメタ情報（EST. 1957 · TOKYO / 01 — SAUNA）
  for (const [el, s, own] of textEls) {
    if (exempt(el) || own.length < 3) continue;
    if (/mono|courier|menlo|consolas/i.test(s.fontFamily) && parseFloat(s.fontSize) <= 13 && /[A-Z0-9]/.test(own)) m.monoMeta.push(own.slice(0, 24));
    // 形容の多い呼びかけの言葉
    const hits = own.match(/至福|こだわり抜|極上|ひととき|上質な時間|あなただけの|心と体|ととのう時間|新しい体験|シームレス|革新的|次世代|唯一無二|〜を、もっと|をもっと自由に/g);
    if (hits) m.filler.push(...hits);
  }
  // 写真の角を丸めて影を付ける
  for (const el of document.querySelectorAll('img,picture,figure,[style*="background-image"],div')) {
    if (!visible(el) || exempt(el)) continue; const s = getComputedStyle(el); const r = el.getBoundingClientRect();
    const isPhoto = el.tagName === 'IMG' || el.tagName === 'PICTURE' || /url\(/.test(s.backgroundImage);
    if (!isPhoto || r.width < 160 || r.height < 100) continue;
    const box = el.tagName === 'IMG' && el.parentElement ? [s, getComputedStyle(el.parentElement)] : [s];
    if (box.some(b => parseFloat(b.borderTopLeftRadius) >= 12) && box.some(b => /\d+px\s+\d+px\s+[1-9]\d*px/.test(b.boxShadow))) m.softPhotos++;
  }
  // アイコン付きの特徴カードの横並び（3枚以上の兄弟の箱が、それぞれ上に小さな四角や丸の飾り／絵文字を持つ）
  for (const p of document.body.querySelectorAll('*')) {
    const kids = [...p.children].filter(visible); if (kids.length < 3 || kids.length > 6 || exempt(p)) continue;
    const tops = kids.map(c => Math.round(c.getBoundingClientRect().top)); if (new Set(tops).size !== 1) continue;
    const iconTop = c => { const f = [...c.querySelectorAll('*')].find(x => visible(x)); if (!f) return false; const r = f.getBoundingClientRect(), cs = getComputedStyle(f); return (r.width <= 64 && r.height <= 64 && Math.abs(r.width - r.height) < 6 && (alpha(cs.backgroundColor) > 0 || f.tagName === 'svg' || f.tagName === 'IMG')) || /\p{Emoji_Presentation}/u.test(f.textContent.trim().slice(0, 2)); };
    const boxed = c => { const cs = getComputedStyle(c); return alpha(cs.backgroundColor) > 0 || parseFloat(cs.borderTopWidth) > 0; };
    if (kids.filter(c => boxed(c) && iconTop(c)).length >= 3) m.iconCards++;
  }
  // 最初の画面に並んだ主ボタンと副ボタン
  { const btns = [...document.querySelectorAll('a,button')].filter(b => { if (!visible(b) || exempt(b)) return false; const r = b.getBoundingClientRect(), cs = getComputedStyle(b); return r.top < vh && r.height >= 36 && r.height <= 72 && r.width >= 96 && (alpha(cs.backgroundColor) > 0 || parseFloat(cs.borderTopWidth) >= 1.5) && !b.closest('nav,header') && !b.matches('[aria-pressed],[role=radio],[role=tab],[role=option],[aria-selected]') && !b.closest('[role=radiogroup],[role=tablist],fieldset') && b.innerText.trim().length >= 2; });
    for (let i = 0; i < btns.length; i++) for (let j = i + 1; j < btns.length; j++) { const a = btns[i].getBoundingClientRect(), b = btns[j].getBoundingClientRect(); if (Math.abs(a.top - b.top) < 8 || (Math.abs(a.left - b.left) < 8 && Math.abs(a.bottom - b.top) < 32)) m.twinCta++; } }
  // 情報の密度：画面1枚（高さ1画面分）ごとの、文字数と塊（段落・項目・セル・見出し・ボタン）の数。ヘッダー・ナビ・フッター、隠れている物は数えない
  {
    const H = document.documentElement.scrollHeight, n = Math.max(1, Math.ceil(H / vh)); const ch = Array(n).fill(0), bl = Array(n).fill(0);
    for (const el of document.body.querySelectorAll('*')) {
      if (!visible(el) || el.closest('footer,nav,header,[aria-hidden="true"],[hidden]')) continue;
      let own = ''; for (const c of el.childNodes) if (c.nodeType === 3) own += c.textContent; own = own.replace(/\s+/g, ''); if (!own) continue;
      const rc = el.getBoundingClientRect(); if (rc.right <= 0 || rc.left >= vw) continue;
      let clip = false; for (let a = el.parentElement; a; a = a.parentElement) { const as = getComputedStyle(a); if (as.overflow !== 'visible') { const ar = a.getBoundingClientRect(); if (ar.width < 2 || ar.height < 2 || rc.bottom < ar.top || rc.top > ar.bottom || rc.right < ar.left || rc.left > ar.right) { clip = true; break; } } } if (clip) continue;
      const i = Math.min(n - 1, Math.max(0, Math.floor((rc.top + scrollY) / vh))); ch[i] += own.length;
      if (/^(P|LI|TD|DD|DT|H1|H2|H3|H4|BUTTON|A|LABEL|FIGCAPTION|BLOCKQUOTE)$/.test(el.tagName)) bl[i]++;
    }
    const med = a => [...a].sort((x, y) => x - y)[Math.floor(a.length / 2)];
    m.density = { screens: n, medChars: med(ch), medBlocks: med(bl), firstChars: ch[0], firstBlocks: bl[0] };
  }
  // 見出しの行数
  for (const h of document.querySelectorAll('h1,h2,h3')) {
    if (!visible(h)) continue; const s = getComputedStyle(h); const lh = parseFloat(s.lineHeight) || parseFloat(s.fontSize) * 1.4;
    const vertical = /^vertical/.test(s.writingMode); // 縦書きの行は横に並ぶので、幅で数える
    m.headings.push({ tag: h.tagName.toLowerCase(), text: h.innerText.replace(/\s+/g, ' ').slice(0, 30), lines: Math.round((vertical ? h.getBoundingClientRect().width : h.getBoundingClientRect().height) / lh), size: Math.round(parseFloat(s.fontSize)) });
  }
  // 最初の画面の主役が SVG の絵になっていないか
  for (const sv of document.querySelectorAll('svg')) {
    const r = sv.getBoundingClientRect(); if (r.top < vh && r.bottom > 0 && r.width * r.height > vw * vh * .2 && visible(sv) && !sv.closest('[data-ui]')) m.svgHero++;
  }
  // 最初の画面の「大きな数字の横並び」（3つ以上の兄弟が、それぞれ数字が主役）
  const bigNum = el => [...el.querySelectorAll('*')].some(c => { const t = [...c.childNodes].filter(n => n.nodeType === 3).map(n => n.textContent).join('').trim(); return /^[\d.,]+\s?[%万件人社年+]*$/.test(t) && t.length <= 8 && parseFloat(getComputedStyle(c).fontSize) >= 28; });
  for (const p of document.body.querySelectorAll('*')) {
    const kids = [...p.children].filter(visible); if (kids.length < 3 || kids.length > 6) continue;
    const r = p.getBoundingClientRect(); if (r.top > vh * 1.5 || p.closest('table,[data-ui]')) continue;
    const tops = kids.map(c => Math.round(c.getBoundingClientRect().top)); if (new Set(tops).size !== 1) continue;
    if (kids.filter(bigNum).length >= 3) { m.statRows++; }
  }
  const body = Object.entries(m.runChars ? m.runSizes : m.sizes).sort((a, b) => b[1] - a[1])[0];
  m.bodySize = body ? +body[0] : null;
  m.sizeCount = Object.keys(m.sizes).filter(k => m.sizes[k] / m.chars >= .005).length;
  m.familyCount = Object.values(m.families).filter(v => v / m.chars >= .03).length;
  m.familyNames = Object.entries(m.families).filter(([, v]) => v / m.chars >= .03).map(([k]) => k);
  // 表記：実在の日本語サイト275件（8業種、2026-11-02）でほぼ必ずひらいて書かれる言葉が、漢字で出ていないか
  { const T = (document.body.innerText || '');
    const H = [[/下さい/g, 'ください'], [/頂(?:く|き|け|いた)/g, 'いただく'], [/出来(?:る|ま|た|な|れ)/g, 'できる'], [/致(?:しま|す|し)/g, 'いたします'],
      [/(?<![\u4e00-\u9fff])事(?=[がをはにでも])/g, 'こと'], [/(?<![\u4e00-\u9fff])為(?=[にの])/g, 'ため'], [/迄/g, 'まで'], [/私達/g, '私たち']];
    m.hyouki = []; for (const [re, w] of H) { const n = (T.match(re) || []).length; if (n) m.hyouki.push(`${(T.match(re) || [])[0]}→${w}（${n}）`); } }
  // 第3回の見比べ（2026-11-02、7業種の作例に繰り返し出たもの）で AI っぽいと選ばれた3つ
  { const big = [...document.querySelectorAll('h1,h2,p,div,span')].filter(e => { const r = e.getBoundingClientRect(); return r.top + scrollY < vh && r.width && parseFloat(getComputedStyle(e).fontSize) >= 28 && e.innerText.trim().length >= 2 && e.innerText.trim().length <= 40; });
    m.accentWord = []; for (const h of big) { const c = getComputedStyle(h).color; for (const k of h.querySelectorAll('*')) { const t = [...k.childNodes].filter(n => n.nodeType === 3).map(n => n.textContent).join('').trim(); if (t && getComputedStyle(k).color !== c && t.length < h.innerText.trim().length) { m.accentWord.push(`「${t.slice(0, 10)}」`); break; } } }
    m.accentWord = [...new Set(m.accentWord)];
    m.numLead = null; for (const e of document.querySelectorAll('p')) { const r = e.getBoundingClientRect(); if (r.top + scrollY > vh || !r.width) continue; const t = e.innerText.trim(); if (t.length < 20 || e.closest('header,nav,footer') || parseFloat(getComputedStyle(e).fontSize) < 14) continue; const nums = t.replace(/\d{2,4}年\d{1,2}月\d{1,2}日|\d{1,2}月\d{1,2}日|\d{1,2}[:：]\d{2}|\d{4}[\/.-]\d{1,2}[\/.-]\d{1,2}|\d{1,2}[\/.]\d{1,2}/g, '日').match(/\d+(?:[.,]\d+)*/g) || []; if (nums.length >= 3) { m.numLead = `「${t.slice(0, 28)}…」の数字 ${nums.length}個`; break; } }
    m.orangeCta = []; for (const e of document.querySelectorAll('a,button')) { const r = e.getBoundingClientRect(); if (r.top + scrollY > vh || !r.width || r.height < 28 || !e.innerText.trim()) continue; const [R, G, B, A] = rgb(getComputedStyle(e).backgroundColor); if (A === 0) continue; const mx = Math.max(R, G, B) / 255, mn = Math.min(R, G, B) / 255, l = (mx + mn) / 2, d = mx - mn; if (!d) continue; const sat = d / (1 - Math.abs(2 * l - 1)); let h = mx === R / 255 ? ((G - B) / 255 / d) % 6 : mx === G / 255 ? (B - R) / 255 / d + 2 : (R - G) / 255 / d + 4; h = (h * 60 + 360) % 360; if (h >= 8 && h <= 56 && sat > .6 && l > .4 && l < .72) m.orangeCta.push(`「${e.innerText.trim().slice(0, 10)}」`); }
    // 第5回の見比べ（2026-11-04）：残りの日数・問いかけの見出し・英字の日付
    { const T = document.body.innerText || ''; const c = T.match(/あと\s*\d+\s*日/); m.countdown = c ? c[0] : null;
      const e = T.match(/\d{4}\.\d{1,2}\.\d{1,2}\s*(?:MON|TUE|WED|THU|FRI|SAT|SUN)/i); m.engDate = e ? e[0] : null;
      const hq = [...document.querySelectorAll('h1,h2')].find(h => /[か？?][。]?$/.test(h.innerText.trim()) && h.innerText.trim().length > 6); m.quesHead = hq ? hq.innerText.trim().replace(/\s+/g, '').slice(0, 24) : null; }
    // 本物か作例か 第4回（2026-11-06）：題の下に説明の文（2〜3行）を置いた4つが選ばれ、説明が1行（20字）だけの学童アプリは本物として通った
    { let ex = 0; const ps = []; for (const e of document.querySelectorAll('p')) { const r = e.getBoundingClientRect(); if (!r.width || r.top + scrollY > vh || r.bottom + scrollY < 60) continue; if (e.closest('header,nav,footer,figure,aside,[aria-hidden="true"]')) continue; const st = getComputedStyle(e); if (st.visibility === 'hidden' || parseFloat(st.fontSize) >= 24) continue; const t = e.innerText.trim(); if (t.length < 12 || /Wikimedia|CC BY|CC0|写真/.test(t)) continue; ex += t.length; ps.push(t.slice(0, 16)); } m.explainFirst = ex >= 22 ? { n: ex, ex: ps.slice(0, 2) } : null; }
    // 本物か作例か 第6回（2026-11-06）：実在22件の最初の画面は、写真が画面の 55% 以上を覆うのが19件（中央値 100%）、作例5つは 15〜50%。日本語の一番大きな字は実在 19〜56px（中央値 38px。142px・144px は英字のロゴの題だけ）、作例は 66〜96px
    { let cov = 0; for (const e of document.querySelectorAll('img,video,canvas,picture,div,section,figure,span,a')) { const cs = getComputedStyle(e); const isP = /^(IMG|VIDEO|CANVAS)$/.test(e.tagName) || (cs.backgroundImage.includes('url(') && !/\.svg/.test(cs.backgroundImage)); if (!isP || cs.visibility === 'hidden' || +cs.opacity < .05) continue; if (e.tagName === 'IMG' && /\.svg(\?|$)/.test(e.currentSrc || e.src)) continue; const r = e.getBoundingClientRect(); const a = Math.max(0, Math.min(r.right, vw) - Math.max(r.left, 0)) * Math.max(0, Math.min(r.bottom, vh) - Math.max(r.top, 0)); if (a < vw * vh * .01) continue; if (e.querySelector('img,video,canvas') && !/^(IMG|VIDEO|CANVAS)$/.test(e.tagName)) continue; cov += a; } m.photoCover = Math.min(1, cov / (vw * vh));
      let big = 0, bt = ''; const tw = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT); let n; while ((n = tw.nextNode())) { const t = n.textContent.trim(); if ((t.match(/[\u3040-\u30ff\u4e00-\u9fff]/g) || []).length < 2) continue; const e = n.parentElement; const cs = getComputedStyle(e); if (cs.visibility === 'hidden' || +cs.opacity < .05 || e.closest('[aria-hidden="true"]')) continue; const rg = document.createRange(); rg.selectNodeContents(n); const r = rg.getBoundingClientRect(); if (!r.width || r.top > vh || r.bottom < 0) continue; const f = parseFloat(cs.fontSize); if (f > big) { big = f; bt = t.slice(0, 12); } } m.jpHead = big > 56 ? { px: Math.round(big), t: bt } : null; }
    // 本物か作例か 第7回（2026-11-06）：その日の作例7つのうち6つが題を地の色の箱（画面の12〜22%）に入れて写真に載せ、5つが題のすぐ上に短い日付を置いた。実在19件は題の箱0件・題の上の日付1件（ニュースの日付）
    { const op = c => { const x = (c || '').match(/rgba?\(([^)]+)\)/); if (!x) return 0; const v = x[1].split(','); return v.length < 4 ? 1 : +v[3]; };
      let big = null, bf = 0; for (const e of document.querySelectorAll('h1,h2,h3,p,div,span,a,strong')) { if (![...e.childNodes].some(n => n.nodeType === 3 && n.textContent.trim().length > 1)) continue; const r = e.getBoundingClientRect(); if (!r.width || r.top > vh || r.bottom < 60) continue; const cs = getComputedStyle(e); if (cs.visibility === 'hidden' || +cs.opacity < .05) continue; const f = parseFloat(cs.fontSize); if (f > bf) { bf = f; big = e; } }
      m.titleBox = null; m.titleDate = null;
      if (big && bf >= 28) { let a = big.parentElement; while (a && a !== document.body) { const r = a.getBoundingClientRect(); const ar = r.width * r.height / (vw * vh); if (ar >= .4) break; if (op(getComputedStyle(a).backgroundColor) > .85 && ar > .04) { m.titleBox = Math.round(ar * 100); break; } a = a.parentElement; }
        const br = big.getBoundingClientRect(); const tw = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT); let n; while ((n = tw.nextNode())) { const t = n.textContent.trim(); if (t.length > 40 || !/\d{1,2}月\d{1,2}日|\d{4}[.\/]\d{1,2}[.\/]\d{1,2}|\d{4}年\d{1,2}月/.test(t)) continue; const rg = document.createRange(); rg.selectNodeContents(n); const r = rg.getBoundingClientRect(); if (r.bottom <= br.top + 4 && br.top - r.bottom < 120 && Math.abs(r.left - br.left) < 60) { m.titleDate = t; break; } } } }
    const h1 = document.querySelector('h1'); m.heavyTitle = h1 && +getComputedStyle(h1).fontWeight >= 800 ? `h1 の太さ ${getComputedStyle(h1).fontWeight}` : null; }
  m.overflowX = document.documentElement.scrollWidth > innerWidth + 1;
  m.bodyBgRgb = rgb(m.bodyBg);
  return m;
}

// 測った値を FAIL / WARN にする。出典は各行に書く。
function judge(m, width) {
  const f = []; const add = (lv, id, msg, fix) => { if (!allow.includes(id)) f.push({ lv, id, width, msg, fix }); };
  const sp = width < 600;
  if (m.overflowX) add('FAIL', 'overflow', '横スクロールが出ている', 'はみ出している要素の幅を max-width:100% にする');
  // 本文の大きさ：使用例は中央値12px で「小さすぎる」と言われた。taste-skill の調査で本文の中央値は16px
  if (m.bodySize && m.bodySize < 14) add('FAIL', 'body-size', `本文（30字以上の文）の大きさが ${m.bodySize}px`, '本文は16px以上。注記も13px以上');
  else if (m.bodySize && m.bodySize < 16) add('WARN', 'body-size', `本文（30字以上の文）の大きさが ${m.bodySize}px`, '本文は16px以上');
  const tinyPct = m.runChars ? Math.round(m.runTiny / m.runChars * 100) : 0;
  // 使用例は13px未満が57%。taste-skill：上位のサイトの欠点として 9〜13px の文字（真似しない）
  if (tinyPct > 15) add('FAIL', 'tiny-text', `本文のうち13px未満が ${tinyPct}%`, '13px未満は使わない。注記は本文の1段下（14px）まで');
  else if (tinyPct > 5) add('WARN', 'tiny-text', `本文のうち13px未満が ${tinyPct}%`, '13px未満は使わない');
  // 線と箱：実サイトのトップで枠線のある要素は 7〜27 個、使用例は 75〜167 個（2026-10-26 の計測）
  if (m.bordered > 27) add('FAIL', 'borders', `最初の3画面で枠線のある要素が ${m.bordered} 個（実サイトは 7〜27 個）`, '区切りは余白か地の色の1段の差で。囲むのは表・入力欄・押せるものだけ');
  else if (m.bordered > 15) add('WARN', 'borders', `最初の3画面で枠線のある要素が ${m.bordered} 個`, '区切りを余白か地の色に替えられないか');
  if (m.boxes >= 6) add('WARN', 'boxes', `四辺を囲んだ箱が ${m.boxes} 個`, '箱で囲まず、余白と見出しで分ける');
  // taste-skill：グラデーションの面は上位22%・下位52%、文字のグラデーションは 2%・13%
  if (m.gradientText) add('FAIL', 'gradient-text', `グラデーションの文字が ${m.gradientText} か所`, '文字は1色');
  if (m.gradients >= 2) add('WARN', 'gradient', `グラデーションの面が ${m.gradients} か所`, '平らな色か写真に。写真の上の文字を読ませる暗幕だけは可');
  // taste-skill：止まっている要素の影は 上位24%・下位48%
  if (m.softShadows >= 3) add('WARN', 'shadow', `ぼかした影が ${m.softShadows} か所`, '面の区別は地の色の差で。影は浮いているもの（メニュー・ダイアログ）だけ');
  // taste-skill：字間を広げた小さな英字は 上位16%・下位57%、3つ以上は 6%・43%
  if (m.eyebrows.length >= 3) add('FAIL', 'eyebrow', `見出しの上の小さなラベルが ${m.eyebrows.length} 個（${m.eyebrows.slice(0, 4).join(' / ')}）`, '消す。中身があるなら見出しか最初の1文に入れる');
  else if (m.eyebrows.length) add('WARN', 'eyebrow', `見出しの上の小さなラベル：${m.eyebrows.join(' / ')}`, '手本のサイトが使っていないなら消す');
  if (m.numbering.length >= 3) add('WARN', 'numbering', `飾りの通し番号が ${m.numbering.length} 個（${m.numbering.slice(0, 4).join(' ')}）`, '順番に意味があるなら <ol> か言葉で。無いなら消す');
  if (m.emoji.length) add('FAIL', 'emoji', `絵文字：${[...new Set(m.emoji)].join(' ')}`, '言葉か本物の絵に');
  if (m.unreadable.length) add('WARN', 'contrast', `読めない文字：${m.unreadable.slice(0, 3).join('; ')}`, '本文 4.5:1、大きな文字 3:1 以上');
  else if (m.lowContrast.length) add('WARN', 'contrast', `コントラスト不足：${m.lowContrast.slice(0, 3).join('; ')}`, '本文 4.5:1、大きな文字 3:1 以上');
  // taste-skill：大きさは5段が上限の目安（中央値8）。9を超えたら段が決まっていない
  if (m.sizeCount > 9) add('WARN', 'size-count', `文字の大きさが ${m.sizeCount} 段`, '見出し・小見出し・本文・注記の4〜6段に寄せる');
  if (m.familyCount > 3) add('FAIL', 'font-count', `書体が ${m.familyCount} 種（${m.familyNames.join(', ')}）`, '役目ごとに1つ、合わせて3つまで');
  // ai-tells：SVG の平たい絵を主役にしない
  if (m.svgHero) add('WARN', 'svg-hero', `最初の画面で SVG が画面の2割以上を占めている（${m.svgHero} 個）`, '絵が主役なら、本物の写真の枠か、題材の情報そのもの（表・地図・時刻）に');
  // ai-tells：数字3つの横並びを最初の画面に置かない
  if (m.statRows) add('WARN', 'stat-row', '最初の画面の近くに、大きな数字の横並びがある', '数字はそれを確かめたい場所（料金・募集要項・時刻表）へ');
  const longH = m.headings.filter(h => h.size >= 24 && h.lines > (sp ? 3 : 2));
  if (longH.length) add('WARN', 'headline-lines', '行の多い見出し：' + longH.slice(0, 3).map(h => `${h.tag}「${h.text}」${h.lines}行`).join('、'), '見出しは題。文にしない。続きは本文へ');
  // 以下はユーザーの A/B 判定（2026-10-26、十条湯の見本9組で7組が想定どおり）で AI っぽいと選ばれた側
  const centerPct = m.runChars ? Math.round(m.runCenter / m.runChars * 100) : 0;
  if (centerPct > 40) add('WARN', 'centered', `本文の ${centerPct}% が中央揃え`, '本文は左揃え。中央にするのは1か所（題か一文）だけ');
  const hueN = Object.values(m.hues).filter(v => v >= 2).length;
  if (hueN > 4) add('WARN', 'many-hues', `彩りのある色相が ${hueN} 系統`, '色は1色を広い面で。状態の色は小さな点だけ');
  if (m.pills >= 3) add('WARN', 'pill-chips', `丸いラベル（短い語のピル）が ${m.pills} 個`, '言葉を文の中に戻すか、文字の色だけにする');
  if (m.softRadius >= 4) add('WARN', 'soft-radius', `9〜16px の角丸の面が ${m.softRadius} 個`, '角は「四角」か「まる」に1回で決める。カードを丸めて浮かせない');
  if (m.tightBottom.length >= 2) add('WARN', 'tight-bottom', `下の余白が上や左右より狭い箱が ${m.tightBottom.length} 個（${m.tightBottom.slice(0, 2).join('、')}）`, '箱の中の余白は、下を上と同じか少し広く、左右より狭くしない（最後の要素の margin-bottom も確かめる）');
  // 情報の密度（2026-10-26 の計測）：実サイトの画面1枚あたりの塊は中央値 3〜6（とらや4・ほぼ日3・Apple 3・Linear 3・SmartHR 6。宿の検索のじゃらん は21）、
  // 最初の画面の文字は 56〜368字。使用例は塊 8〜36・最初の画面 331〜756字で、小さな物を1画面に詰めすぎていた
  const d = m.density;
  if (d && d.medBlocks > 12) add('WARN', 'dense-screen', `画面1枚あたりの塊が中央値 ${d.medBlocks} 個（実サイトは 3〜6、宿の検索結果で 21）`, '1画面に主役を1つ。塊を減らし、残した物を大きくする。一覧・検索結果なら理由を書いて残す');
  if (d && !sp && d.firstChars > 450) add('WARN', 'dense-first', `最初の画面の文字が ${d.firstChars} 字（実サイトは 56〜368 字）`, '最初の画面は、題・何かを言う1文・主な行動・主役の物だけ。説明は下の章へ');
  if (m.greySlots.length) add('WARN', 'grey-slot', `写真の入っていない写真の枠が ${m.greySlots.length} 個（${m.greySlots.slice(0, 2).map(t => '「' + t + '」').join('')}）`, '題材のまわりの世界の本物の写真（tools/photos.js、出典を画面に書く）か、題材の情報そのもの（図・表）に替える');
  // ユーザーの見比べ第2回（2026-11-01）：等幅の英字メタ・アイコン付きカード・数字のカウンター（stat-row）・写真の角丸と影・ボタン2つ並び・飾りの言葉は AI っぽいと選ばれた
  if (m.monoMeta.length >= 2) add('WARN', 'mono-meta', `等幅の小さな英字のメタ情報が ${m.monoMeta.length} 個（${m.monoMeta.slice(0, 3).join(' / ')}）`, '消す。中身があるなら和文の本文に入れる。等幅はコードと揃える数字だけ');
  if (m.iconCards) add('WARN', 'icon-cards', `アイコン付きの特徴カードの横並びが ${m.iconCards} か所`, '言葉と値の一覧（表）か、1つずつの章にする');
  if (m.softPhotos) add('WARN', 'soft-photo', `角を丸めて影を付けた写真が ${m.softPhotos} 枚`, '写真は四角のまま、影なしで置く');
  if (m.twinCta) add('WARN', 'twin-cta', '最初の画面に、塗りと縁のボタンが2つ並んでいる', '主な行動は1つ。もう1つは文字のリンクに下げる');
  if (m.runChars && m.greyRun / m.runChars > .4) add('WARN', 'grey-body', `本文の ${Math.round(m.greyRun / m.runChars * 100)}% が灰色（地との差 7:1 未満）`, '本文は地との差が大きい色（黒・白に近い色）で。灰色は注記・値の補足だけ');
  if (m.badBreaks.length) add('WARN', 'line-break', `変な所で折り返す文 ${m.badBreaks.length}か所：${m.badBreaks.slice(0, 3).join('; ')}`, '文節で折り返す（html に lang="ja" と word-break:auto-phrase、要所は <wbr> か改行）。最後の行が数字だけにならない幅や言い回しにする');
  if (m.accentWord && m.accentWord.length) add('WARN', 'accent-word', `大きな題の一語だけ色を替えている：${m.accentWord.slice(0, 3).join('・')}`, '題は1色で組む（第3回の見比べで AI っぽいと選ばれた。7業種の作例のうち6つで同じ作り方だった）');
  if (m.numLead) add('WARN', 'number-lead', `最初の画面の文に数字を詰めている：${m.numLead}`, '最初の一文の数字は1つまで。残りは下の章の表や本文へ（第3回の見比べ）');
  if (m.orangeCta && m.orangeCta.length) add('WARN', 'orange-cta', `最初の画面のボタンが橙・黄：${m.orangeCta.slice(0, 2).join('・')}`, '題材から取った色にする。橙・黄を使うなら、題材のどこの色かを1文で言える場合だけ（第3回で橙、第4回で黄が AI っぽいと選ばれた。橙をやめたら黄にそろった）');
  if (width >= 1000 && m.photoCover != null && m.photoCover < .5) add('WARN', 'photo-cover', `最初の画面を写真が覆うのは ${Math.round(m.photoCover * 100)}%（実在22件は19件が 55% 以上、中央値 100%）`, '写真を小さな枠に切って地の上に並べない。1枚を画面いっぱい（か画面の半分を2枚）に敷くか、主役を切り抜いて大きく置く（aesthetic.md「最初の画面の作り方の方向」なら --allow photo-cover でよい）。絵が主役の店（実在 tanpopo.day・yamatokogyo.co.jp/recruit）なら理由を1文で書いて --allow photo-cover。小さな要素を足して覆う面を増やさない（aesthetic.md「本物か作例か 第6回」）');
  if (width >= 1000 && m.jpHead) add('WARN', 'jp-head-size', `最初の画面の日本語の一番大きな字が ${m.jpHead.px}px（「${m.jpHead.t}」。実在の日本語は 19〜56px、中央値 38px）`, '日本語の一言は 30〜50px にし、目を引くのは写真に任せる。大きく遊ぶのは英字のロゴの題か、文字を絵にした題（画像・SVG）だけ（aesthetic.md「本物か作例か 第6回」）');
  if (width >= 1000 && m.titleBox) add('WARN', 'title-box', `題が地の色の箱（画面の ${m.titleBox}%）の中にある`, '題を色の箱に入れて写真に載せない（2026-11-06 の作例7つのうち6つがこの形で、4つ並べて「わかりやすすぎる」と全部見抜かれた。実在19件は0件）。題は写真の上にじかに置くか（tetetoco・shuku-kokon・ichinobo）、写真の外の地に置く。作例どうしで最初の画面の形をそろえない（aesthetic.md「本物か作例か 第7回」）');
  if (width >= 1000 && m.titleDate) add('WARN', 'title-date', `題のすぐ上に日付「${m.titleDate}」`, '題の上に短い日付を置かない（その日の作例7つのうち5つ、実在19件では1件だけ）。日付が商品そのもの（発売日・開催日）なら、題の下か、別の札で（aesthetic.md「本物か作例か 第7回」）');
  if (m.explainFirst) add('WARN', 'explain-first', `最初の画面に説明の文が ${m.explainFirst.n}字：${m.explainFirst.ex.map(x => '「' + x + '…」').join('・')}`, '最初の画面はキャッチーなもの1つ（店の言葉の短い一言か、目を引く絵）とボタンにし、説明の文は下の章へ。残すなら1行・22字未満（本物か作例か 第4回：通った学童アプリは20字）');
  if (m.countdown) add('WARN', 'countdown', `残りの日数を出している：「${m.countdown}」`, '締め切りや開催は日付で書く（第5回の見比べで「あと26日」が AI っぽいと選ばれた）');
  if (m.engDate) add('WARN', 'eng-date', `英字の形の日付：「${m.engDate}」`, '「11月4日（水）」の形にする（第5回の見比べ）');
  if (m.quesHead) add('WARN', 'question-head', `問いかけの見出し：「${m.quesHead}」`, '何の店・何の道具かを言う見出しにする（第5回の見比べ）');
  if (m.heavyTitle) add('WARN', 'heavy-title', `題が極太：${m.heavyTitle}`, '題は手本の業種の太さに（ファッション80件は 400 が中央値）。極太のゴシック体は第3回の見比べで AI っぽいと選ばれた');
  if (m.hyouki && m.hyouki.length) add('WARN', 'hyouki', `漢字で書いた補助動詞・形式名詞：${m.hyouki.join('・')}`, 'ひらく（実在の日本語サイト275件では、どの業種もほぼひらがな。references/ai-tells.md「表記」）');
  if (m.filler.length) add('WARN', 'filler-words', `飾りの言葉：${[...new Set(m.filler)].join('・')}`, '事実（温度・年・数・場所）に書き換える');
  // ai-tells：淡いベージュ・ピンクの無難な地。taste-skill：黄みのクリーム地（WARN）
  const [r, g, b] = m.bodyBgRgb; const mx = Math.max(r, g, b), mn = Math.min(r, g, b);
  if (mx > 235 && mx - mn >= 8 && mx - mn <= 40 && r >= g && g >= b) add('WARN', 'cream-ground', `地が淡いベージュ（${m.bodyBg}）`, '地は白か、題材の現場の色から');
  return f;
}

(async () => {
  const b = await pw.chromium.launch({ args: ['--ignore-certificate-errors'], proxy: /^https?:/.test(url) && process.env.HTTPS_PROXY ? { server: process.env.HTTPS_PROXY } : undefined });
  const all = []; const errors = [];
  for (const [name, vp] of [['pc', { width: 1440, height: 900 }], ['sp', { width: 390, height: 844 }]]) {
    const p = await b.newPage({ viewport: vp, locale: 'ja-JP', reducedMotion: 'reduce' });
    p.on('pageerror', e => errors.push(`${name}: ${e.message}`));
    await p.goto(url, { waitUntil: 'load', timeout: 90000 }).catch(e => errors.push(`${name}: ${e.message.slice(0, 120)}`));
    await p.waitForTimeout(1500);
    if (out) { fs.mkdirSync(out, { recursive: true }); await p.screenshot({ path: path.join(out, `${name}-top.png`) }); await p.screenshot({ path: path.join(out, `${name}-full.png`), fullPage: true }); }
    const m = await p.evaluate(probe);
    all.push(...judge(m, vp.width));
    // 最初の画面の明るさ（本物か作例か 第1回、2026-11-05：作例4つは明るさ 68〜84・白っぽい部分 2〜6%、同じ業種の実在4つは 151〜214・28〜74%。ユーザーは4つとも作例と見抜いた）
    try {
      await p.evaluate(() => scrollTo(0, 0));
      const shot = (await p.screenshot({ type: 'jpeg', quality: 60 })).toString('base64');
      const lum = await p.evaluate(async (b64) => { const im = new Image(); im.src = 'data:image/jpeg;base64,' + b64; await im.decode(); const c = document.createElement('canvas'); c.width = 180; c.height = Math.round(180 * im.height / im.width); const x = c.getContext('2d'); x.drawImage(im, 0, 0, c.width, c.height); const d = x.getImageData(0, 0, c.width, c.height).data; let s = 0, w = 0, n = 0; for (let i = 0; i < d.length; i += 4) { const v = (d[i] + d[i + 1] + d[i + 2]) / 3; s += v; if (v > 200) w++; n++; } let pl = 0, bl = 0; const W = c.width, H = c.height; for (let y = Math.round(H * .09); y + 4 <= H; y += 4) for (let x = 0; x + 4 <= W; x += 4) { let a = 0, a2 = 0; for (let j = 0; j < 4; j++) for (let k = 0; k < 4; k++) { const o = ((y + j) * W + x + k) * 4, v = (d[o] + d[o + 1] + d[o + 2]) / 3; a += v; a2 += v * v; } const m = a / 16; if (Math.sqrt(Math.max(0, a2 / 16 - m * m)) < 4) pl++; bl++; } const fv = innerHeight; const deco = [...document.querySelectorAll('svg,canvas,img[src$=".svg"],img[src$=".png"],img[src^="data:image/svg"],img[src^="data:image/png"],[data-object]')].filter(e => { const r = e.getBoundingClientRect(); return r.width >= 48 && r.height >= 48 && r.top < fv && r.bottom > 0; }).length; const h1 = document.querySelector('h1'); let hb = null; if (h1) { let e = h1; while (e && e !== document.documentElement) { const s = getComputedStyle(e); if (s.backgroundColor !== 'rgba(0, 0, 0, 0)' || s.backgroundImage !== 'none') { hb = e; break; } e = e.parentElement; } } const onGround = !hb || hb === document.body || hb.tagName === 'MAIN' || (hb.getBoundingClientRect().width >= innerWidth * .95 && hb.getBoundingClientRect().height >= innerHeight * .8 && getComputedStyle(hb).backgroundImage === 'none');
      const vis = [...document.querySelectorAll('img,video,canvas,svg,picture,[data-object]')].map(e => e.getBoundingClientRect()).filter(r => r.width > 150 && r.height > 100 && r.top < innerHeight && r.bottom > 0).length; return { mean: Math.round(s / n), white: Math.round(w / n * 100), plain: Math.round(pl / bl * 100), vis, deco, onGround }; }, shot);
      console.log(`${name} 最初の画面の明るさ ${lum.mean}・白っぽい部分 ${lum.white}%・何も無い面 ${lum.plain}%・写真や絵 ${lum.vis}個`);
      // 本物か作例か 第2回（2026-11-06）：作例5つは何も無い面 47〜72%・写真や絵 1〜2個、同じ業種の実在5つは 28〜54%（中央値 31%）・1〜9個（中央値 4個）
      // 本物か作例か 第3回（2026-11-06）：写真と文字だけで、題が地の無地の上にある作例3つが「明らかに AI」と選ばれた。絵・札・手書き・製品の画面を重ねた2つは選ばれなかった
      if (vp.width >= 1000 && lum.deco === 0 && !allow.includes('photo-text-only')) all.push({ lv: 'WARN', id: 'photo-text-only', width: vp.width, msg: `最初の画面が写真と文字だけ（絵・札・手書き・製品の画面などの SVG・canvas・透過画像・data-object の要素が0個${lum.onGround ? '。題も地の無地の上' : ''}）`, fix: '手本と並べて、本物の店にある物（製品の画面・商品・店の札や刻印など）を本物の形で重ねる。WARN を消すための飾りは足さない（下足札「六」・張り紙は「いらん」と言われた。aesthetic.md「本物か作例か 第3回・第5回」、critique.md の見方15）' });
      if (vp.width >= 1000 && lum.plain > 45 && lum.vis <= 2 && !allow.includes('sparse-first')) all.push({ lv: 'WARN', id: 'sparse-first', width: vp.width, msg: `最初の画面が空いていて、写真や絵が少ない：何も無い面 ${lum.plain}%・写真や絵 ${lum.vis}個（実在のサイトは 31%・4個が中央値）`, fix: '写真・切り抜き・絵・製品の画面・色の面を3つ以上、大きさを変えて重ねる。左に文字・右に写真の行儀のよい2列にしない（references/aesthetic.md「本物か作例か 第2回」）' });
      if (lum.mean < 110 && lum.white < 15 && !allow.includes('dark-first')) all.push({ lv: 'WARN', id: 'dark-first', width: vp.width, msg: `最初の画面が暗い：明るさ ${lum.mean}・白っぽい部分 ${lum.white}%（同じ業種の実在のサイトは 151〜214・28〜74%）`, fix: '明るい地に、色のある写真を余白で囲んで置き、文字は写真の外に濃い色で（references/aesthetic.md「本物か作例か」）。暗い写真の全面に白い題を重ねるのは、ポスター・告知・夜の催しなど題材に理由があるときだけ' });
    } catch (e) { errors.push(`${name}: 明るさを測れない ${String(e).slice(0, 60)}`); }
    // 写真や色の面の上の字が、人の目で読めるか（2026-11-09、ユーザー「後ろと見比べた時にすごい字が見にくい」「人間が見た時に見えそうな色とかも意識して」。
    // hair-salon の大きな Perm が、写真の暗い服の上で消えていた。contrast は字の色と親の背景色しか比べないので、写真・絵・グラデーションの上の字を見落とす）
    // 字を透明にして撮り、字の箱の下に描かれている物の明るさ（明るい側と暗い側の15%）と字の色を比べる。縁取り・影のある字は除く
    try {
      await p.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 700) { scrollTo(0, y); await new Promise(r => setTimeout(r, 60)); } scrollTo(0, 0); });
      await p.waitForTimeout(400);
      const boxes = await p.evaluate(() => { const out = []; let id = 0; const lin = v => { v /= 255; return v <= .03928 ? v / 12.92 : ((v + .055) / 1.055) ** 2.4; };
        for (const e of document.body.querySelectorAll('*')) { const own = [...e.childNodes].filter(n => n.nodeType === 3 && n.textContent.trim()).map(n => n.textContent.trim()).join(''); if (own.length < 1 || e.closest('svg')) continue;
          const s = getComputedStyle(e); if (s.visibility === 'hidden' || +s.opacity === 0 || s.display === 'none') continue; if (parseFloat(s.webkitTextStrokeWidth) > 0 || (s.textShadow && s.textShadow !== 'none')) continue;
          const rg = document.createRange(); let r = null; for (const n of e.childNodes) if (n.nodeType === 3 && n.textContent.trim()) { rg.selectNodeContents(n); const q = rg.getBoundingClientRect(); if (q.width) r = r ? { left: Math.min(r.left, q.left), top: Math.min(r.top, q.top), right: Math.max(r.right, q.right), bottom: Math.max(r.bottom, q.bottom) } : { left: q.left, top: q.top, right: q.right, bottom: q.bottom }; } if (!r) continue; r.width = r.right - r.left; r.height = r.bottom - r.top; if (r.width < 8 || r.height < 8) continue; const m = s.color.match(/[\d.]+/g); if (!m || (m[3] !== undefined && +m[3] < .5)) continue;
          const fs = parseFloat(s.fontSize), big = fs >= 24 || (fs >= 18.66 && +s.fontWeight >= 700);
          const ix = 0, iy = 0; out.push({ x: r.left + scrollX + ix, y: r.top + scrollY + iy, w: Math.min(r.width - 2 * ix, 900), h: Math.min(r.height - 2 * iy, 600), L: .2126 * lin(+m[0]) + .7152 * lin(+m[1]) + .0722 * lin(+m[2]), big, t: own.slice(0, 14) }); if (++id > 4000) break; }
        return out; });
      const shotShow = (await p.screenshot({ fullPage: true, type: 'png' })).toString('base64');
      await p.addStyleTag({ content: '*{color:transparent!important;-webkit-text-fill-color:transparent!important;text-shadow:none!important;caret-color:transparent!important}', }).then(h => h.evaluate(n => n.id = '__insp_hide'));
      const shotFull = (await p.screenshot({ fullPage: true, type: 'png' })).toString('base64');
      await p.evaluate(() => document.getElementById('__insp_hide')?.remove());
      const bad = await p.evaluate(async ({ b64, show, boxes }) => { const im = new Image(); im.src = 'data:image/png;base64,' + b64; await im.decode(); const c = document.createElement('canvas'); c.width = im.width; c.height = im.height; const x = c.getContext('2d', { willReadFrequently: true }); x.drawImage(im, 0, 0);
        const im2 = new Image(); im2.src = 'data:image/png;base64,' + show; await im2.decode(); const c2 = document.createElement('canvas'); c2.width = im2.width; c2.height = im2.height; const x2 = c2.getContext('2d', { willReadFrequently: true }); x2.drawImage(im2, 0, 0);
        const k = im.width / document.documentElement.clientWidth; const lin = v => { v /= 255; return v <= .03928 ? v / 12.92 : ((v + .055) / 1.055) ** 2.4; }; const cr = (a, b) => (Math.max(a, b) + .05) / (Math.min(a, b) + .05); const res = [];
        for (const b of boxes) { const X = Math.max(0, Math.round(b.x * k)), Y = Math.max(0, Math.round(b.y * k)), W = Math.max(1, Math.round(b.w * k)), H = Math.max(1, Math.round(b.h * k)); if (Y + H > c.height || X + W > c.width) continue;
          // 字の画素（字を出した画像と消した画像で色が違う所）だけを見て、その下の明るさと字の色を比べる
          const d = x.getImageData(X, Y, W, H).data, d2 = x2.getImageData(X, Y, W, H).data; const Ls = []; const st = Math.max(1, Math.floor(Math.sqrt(W * H / 6000))); for (let yy = 0; yy < H; yy += st) for (let xx = 0; xx < W; xx += st) { const o = (yy * W + xx) * 4; if (Math.abs(d[o] - d2[o]) + Math.abs(d[o + 1] - d2[o + 1]) + Math.abs(d[o + 2] - d2[o + 2]) < 90) continue; Ls.push(.2126 * lin(d[o]) + .7152 * lin(d[o + 1]) + .0722 * lin(d[o + 2])); }
          if (Ls.length < 20) continue;
          // 字の箱の下で、字の色と字の画素のうち、下の物と見分けにくい所が15%を超えたら読みにくいとする（縁や端に少しかかるだけのものは数えない）
          const need = b.big ? 3 : 4.5; const badPx = Ls.filter(l => cr(b.L, l) < need).length / Ls.length; Ls.sort((a, b) => a - b); const lo = Ls[Math.floor(Ls.length * .1)], hi = Ls[Math.floor(Ls.length * .9)];
          if (badPx > .15 && hi - lo > .04) res.push(`「${b.t}」見分けにくい所 ${Math.round(badPx * 100)}%`); }
        return res; }, { b64: shotFull, show: shotShow, boxes });
      if (bad.length && !allow.includes('text-on-photo')) all.push({ lv: 'WARN', id: 'text-on-photo', width: vp.width, msg: `写真・絵・色の境目の上で読みにくい字が ${bad.length} か所：${bad.slice(0, 5).join('; ')}`, fix: '字の下が明るい所と暗い所にまたがっている。字を写真から外すか、字に地の色の縁（-webkit-text-stroke と paint-order）を付けるか、写真のその部分を字の色と反対の明るさにする。スクリーンショットで、その字を人の目で読めるか確かめる' });
      // カードの横の縦線（2026-11-09、ユーザー「カードの横に縦線とかめっちゃAI」）
      const bars = await p.evaluate(() => [...document.body.querySelectorAll('*')].filter(e => { const s = getComputedStyle(e); const r = e.getBoundingClientRect(); const L = parseFloat(s.borderLeftWidth), R = parseFloat(s.borderRightWidth), T = parseFloat(s.borderTopWidth), B = parseFloat(s.borderBottomWidth); return r.height >= 40 && r.width >= 120 && ((L >= 2 && !R && !T && !B) || (R >= 2 && !L && !T && !B)) && s.borderLeftStyle !== 'dashed'; }).length);
      if (bars && !allow.includes('side-bar')) all.push({ lv: 'WARN', id: 'side-bar', width: vp.width, msg: `箱やカードの片側だけに縦の線が ${bars} 個`, fix: 'カードの横の縦線は「めっちゃAI」と言われた（2026-11-09）。線を外し、余白・地の色・大きな字で分ける' });
    } catch (e) { errors.push(`${name}: 写真の上の字を測れない ${String(e).slice(0, 80)}`); }
    // 実際に描かれた書体（CSS の指定でなく、ブラウザが字を描いた書体）。標準の書体・どこでも使われる定番は使わない
    try {
      await p.evaluate(() => { let n = 0; for (const e of document.querySelectorAll('h1,h2,h3,p,a,button,li,dd,dt,figcaption,span')) { if (n > 80) break; const t = [...e.childNodes].some(x => x.nodeType === 3 && x.textContent.trim()); const r = e.getBoundingClientRect(); if (t && r.width && r.height) { e.setAttribute('data-insp-font', ''); n++; } } });
      const c = await p.context().newCDPSession(p); await c.send('DOM.enable'); await c.send('CSS.enable');
      const { root } = await c.send('DOM.getDocument', { depth: -1 }); const { nodeIds } = await c.send('DOM.querySelectorAll', { nodeId: root.nodeId, selector: '[data-insp-font]' });
      const used = {}; for (const id of nodeIds) { const { fonts } = await c.send('CSS.getPlatformFontsForNode', { nodeId: id }); for (const f of fonts) { if (/emoji|icon|symbol/i.test(f.familyName)) continue; const k = f.familyName.replace(/ (Thin|Light|Regular|Medium|SemiBold|Semibold|Bold|ExtraBold|Black|Italic|W\d)+$/g, '') + (f.isCustomFont ? '' : '（端末の標準）'); used[k] = (used[k] || 0) + f.glyphCount; } }
      const tot = Object.values(used).reduce((x, y) => x + y, 0) || 1;
      // 定番の Web フォント（Noto Sans JP・Inter など）は、手本の業種で使われていればよい（ユーザーの許可 2026-11-02、ファッション80件の実測で Noto Sans JP が最多）。
      // ここで止めるのは、Web フォントを指定せず端末の標準で描かれた字だけ（書体を決めていない）
      const NG = /端末の標準/;
      const bad = Object.entries(used).filter(([k, v]) => NG.test(k) && v / tot >= .05).sort((x, y) => y[1] - x[1]);
      console.log(`${name} 描かれた書体：${Object.entries(used).sort((x, y) => y[1] - x[1]).map(([k, v]) => `${k} ${Math.round(v / tot * 100)}%`).join('・')}`);
      const plex = Object.entries(used).filter(([k, v]) => /IBM Plex Sans JP|Dela Gothic One|Zen Kaku Gothic New/.test(k) && v / tot >= .03);
      if (plex.length && !allow.includes('ai-font')) all.push({ lv: 'WARN', id: 'ai-font', width: vp.width, msg: `作例でくり返し選ばれ、見比べで AI っぽいと選ばれた書体：${plex.map(([k, v]) => `${k} ${Math.round(v / tot * 100)}%`).join('・')}`, fix: '手本の業種で実際に使われている書体に替える（第3回：本文の IBM Plex Sans JP・題の Dela Gothic One、第4回：本文の Zen Kaku Gothic New。どれも作例でくり返し選ばれていた）' });
      if (bad.length && !allow.includes('default-font')) all.push({ lv: 'WARN', id: 'default-font', width: vp.width, msg: `端末の標準の書体で描かれている（書体を指定していない）：${bad.map(([k, v]) => `${k} ${Math.round(v / tot * 100)}%`).join('・')}`, fix: '手本の業種で使われている書体を指定する（references/aesthetic.md「書体」）。Webフォントが読めているかも確かめる' });
    } catch (e) { errors.push(`${name}: 書体を調べられない ${String(e).slice(0, 80)}`); }
    console.log(`${name} ${vp.width}px  本文 ${m.bodySize}px・本文の13px未満 ${m.runChars ? Math.round(m.runTiny / m.runChars * 100) : 0}%・大きさ ${m.sizeCount}段・書体 ${m.familyCount}・枠線 ${m.bordered}・箱 ${m.boxes}・影 ${m.softShadows}・グラデ ${m.gradients}・小ラベル ${m.eyebrows.length}・番号 ${m.numbering.length}・中央 ${m.runChars ? Math.round(m.runCenter / m.runChars * 100) : 0}%・色相 ${Object.values(m.hues).filter(v => v >= 2).length}・ピル ${m.pills}・角丸 ${m.softRadius}・下が詰まった箱 ${m.tightBottom.length}・写真 ${m.photos}・灰色の枠 ${m.greySlots.length}・等幅メタ ${m.monoMeta.length}・アイコンカード ${m.iconCards}・角丸写真 ${m.softPhotos}・ボタン2つ ${m.twinCta ? 'あり' : 'なし'}・飾りの言葉 ${m.filler.length}・塊/画面 ${m.density?.medBlocks}・最初の画面 ${m.density?.firstChars}字`);
    await p.close();
  }
  await b.close();
  if (errors.length && !allow.includes('pageerror')) all.unshift({ lv: 'FAIL', id: 'pageerror', width: '-', msg: errors.slice(0, 3).join(' | '), fix: 'スクリプトのエラーを直す' });
  for (const x of all) console.log(`${x.lv.padEnd(4)} ${String(x.width).padStart(4)} ${x.id}: ${x.msg}\n          → ${x.fix}`);
  const fails = all.filter(x => x.lv === 'FAIL').length, warns = all.length - fails;
  console.log(`\nFAIL ${fails} / WARN ${warns}${fails ? '（FAIL を直してからもう一度）' : ''}`);
  process.exit(fails ? 1 : 0);
})();
