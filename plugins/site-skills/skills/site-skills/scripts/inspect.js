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
  const lum = ([r, g, b]) => { const f = v => { v /= 255; return v <= .03928 ? v / 12.92 : ((v + .055) / 1.055) ** 2.4; }; return .2126 * f(r) + .7152 * f(g) + .0722 * f(b); };
  const ratio = (a, b) => { const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p); return +((x + .05) / (y + .05)).toFixed(2); };
  const bgOf = el => { for (let e = el; e; e = e.parentElement) { const s = getComputedStyle(e); if (s.backgroundImage !== 'none' && !/gradient/.test(s.backgroundImage)) return null; const c = rgb(s.backgroundColor); if (c[3] === undefined || c[3] > .9) return c; } return [255, 255, 255, 1]; };

  const m = { chars: 0, runChars: 0, runSizes: {}, runTiny: 0, runCenter: 0, hues: {}, pills: 0, softRadius: 0, sizes: {}, tiny: 0, families: {}, lowContrast: [], unreadable: [], eyebrows: [], numbering: [], bordered: 0, boxes: 0, gradients: 0, gradientText: 0, softShadows: 0, emoji: [], headings: [], svgHero: 0, statRows: 0, bodyBg: getComputedStyle(document.body).backgroundColor };
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
    if (!chrome && !exempt(el) && k >= 30 && !/^H[1-6]$/.test(el.tagName)) { m.runChars += k; m.runSizes[fs] = (m.runSizes[fs] || 0) + k; if (fs < 13) m.runTiny += k; if (s.textAlign === 'center') m.runCenter += k; }
    const bg = bgOf(el);
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
  // 見出しの行数
  for (const h of document.querySelectorAll('h1,h2,h3')) {
    if (!visible(h)) continue; const s = getComputedStyle(h); const lh = parseFloat(s.lineHeight) || parseFloat(s.fontSize) * 1.4;
    m.headings.push({ tag: h.tagName.toLowerCase(), text: h.innerText.replace(/\s+/g, ' ').slice(0, 30), lines: Math.round(h.getBoundingClientRect().height / lh), size: Math.round(parseFloat(s.fontSize)) });
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
    console.log(`${name} ${vp.width}px  本文 ${m.bodySize}px・本文の13px未満 ${m.runChars ? Math.round(m.runTiny / m.runChars * 100) : 0}%・大きさ ${m.sizeCount}段・書体 ${m.familyCount}・枠線 ${m.bordered}・箱 ${m.boxes}・影 ${m.softShadows}・グラデ ${m.gradients}・小ラベル ${m.eyebrows.length}・番号 ${m.numbering.length}・中央 ${m.runChars ? Math.round(m.runCenter / m.runChars * 100) : 0}%・色相 ${Object.values(m.hues).filter(v => v >= 2).length}・ピル ${m.pills}・角丸 ${m.softRadius}`);
    await p.close();
  }
  await b.close();
  if (errors.length && !allow.includes('pageerror')) all.unshift({ lv: 'FAIL', id: 'pageerror', width: '-', msg: errors.slice(0, 3).join(' | '), fix: 'スクリプトのエラーを直す' });
  for (const x of all) console.log(`${x.lv.padEnd(4)} ${String(x.width).padStart(4)} ${x.id}: ${x.msg}\n          → ${x.fix}`);
  const fails = all.filter(x => x.lv === 'FAIL').length, warns = all.length - fails;
  console.log(`\nFAIL ${fails} / WARN ${warns}${fails ? '（FAIL を直してからもう一度）' : ''}`);
  process.exit(fails ? 1 : 0);
})();
