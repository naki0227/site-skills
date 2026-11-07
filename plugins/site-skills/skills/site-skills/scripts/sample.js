// 手本のサイトを測る（runs・heads の fam は CSS で指定した書体の先頭。この環境に無いヒラギノ・游ゴシックも名前で数えられる）：余白（何も無い帯の高さ）・文字の左端・本文と見出しの大きさ／行間／字間／太さ・実際に描かれた書体（和文と英字）・商品一覧（列・間・写真の縦横・商品名）・罫・ボタン・地の色（PC 1440px）
// 使い方：node scripts/sample.js <URLを1行ずつ書いたファイル> <出力.jsonl> [並列数]。出力は毎回書き直す。最初の画面は <出力.jsonl と同じフォルダ>/shots2/ に保存
const { chromium } = require('playwright');
const fs = require('fs');
const [, , listFile, outFile, par = '8'] = process.argv;
const urls = fs.readFileSync(listFile, 'utf8').split(/\s+/).filter(Boolean);
const SHOTS = require('path').join(require('path').dirname(outFile || '.'), 'shots2'); fs.mkdirSync(SHOTS, { recursive: true });

function probe() {
  const vis = e => { const s = getComputedStyle(e); if (s.display === 'none' || s.visibility === 'hidden' || +s.opacity === 0) return null; const r = e.getBoundingClientRect(); return r.width > 0 && r.height > 0 ? r : null; };
  const rgb = c => { const m = c.match(/[\d.]+/g); return m ? m.map(Number) : [0, 0, 0, 0]; };
  const hex = c => { const [r, g, b, a] = rgb(c); return (a === undefined || a >= .5) ? '#' + [r, g, b].map(x => Math.round(x).toString(16).padStart(2, '0')).join('') : null; };
  const sy = scrollY, H = document.documentElement.scrollHeight, W = innerWidth;
  const jp = /[぀-ヿ一-鿿]/;
  const ivs = []; const lefts = []; const rights = []; const runs = []; const heads = []; let firstChars = 0;
  let k = 0;
  for (const e of document.body.querySelectorAll('*')) {
    const r = vis(e); if (!r) continue;
    const s = getComputedStyle(e);
    const top = r.top + sy, bot = r.bottom + sy;
    if (/^(IMG|VIDEO|CANVAS|PICTURE|IFRAME)$/.test(e.tagName) || (e.tagName === 'svg' && r.width > 40)) { if (r.width > 40 && r.height > 40) ivs.push([top, bot]); continue; }
    if (s.backgroundImage !== 'none' && /url\(/.test(s.backgroundImage) && r.width > 100 && r.height > 100) ivs.push([top, bot]);
    let own = ''; for (const n of e.childNodes) if (n.nodeType === 3) own += n.textContent; own = own.replace(/\s+/g, ' ').trim();
    if (!own) continue;
    const rg = document.createRange(); let tr = null;
    for (const n of e.childNodes) if (n.nodeType === 3 && n.textContent.trim()) { rg.selectNodeContents(n); const b = rg.getBoundingClientRect(); if (b.width) { tr = tr ? { top: Math.min(tr.top, b.top), bottom: Math.max(tr.bottom, b.bottom), left: Math.min(tr.left, b.left), right: Math.max(tr.right, b.right) } : { top: b.top, bottom: b.bottom, left: b.left, right: b.right }; } }
    if (!tr) continue;
    ivs.push([tr.top + sy, tr.bottom + sy]);
    const chrome = e.closest('header,nav,footer,[role=navigation],[role=contentinfo]');
    if (!chrome) { lefts.push(Math.round(tr.left)); rights.push(Math.round(W - tr.right)); }
    if (tr.top + sy < 900) firstChars += own.length;
    const fs_ = parseFloat(s.fontSize), lh = s.lineHeight === 'normal' ? 1.4 : parseFloat(s.lineHeight) / fs_, ls = s.letterSpacing === 'normal' ? 0 : parseFloat(s.letterSpacing) / fs_;
    if (!chrome && own.length >= 30 && !/^H\d$/.test(e.tagName)) runs.push({ n: own.length, fam: s.fontFamily.split(',')[0].replace(/["']/g, '').trim(), fs: fs_, lh: +lh.toFixed(2), ls: +ls.toFixed(3), w: +s.fontWeight, jp: jp.test(own), color: hex(s.color), width: Math.round(tr.right - tr.left) });
    if (/^H[1-3]$/.test(e.tagName) || (fs_ >= 28 && own.length <= 40)) heads.push({ tag: e.tagName, fam: s.fontFamily.split(',')[0].replace(/["']/g, '').trim(), fs: fs_, w: +s.fontWeight, ls: +ls.toFixed(3), lh: +lh.toFixed(2), jp: jp.test(own), t: own.slice(0, 20) });
    if (k++ < 400) e.setAttribute('data-m', jp.test(own) && own.replace(/[\x00-\x7f]/g, '').length >= own.length * .3 ? 'jp' : 'lat');
  }
  // 縦の余白：何も無い帯の高さ
  ivs.sort((a, b) => a[0] - b[0]); const gaps = []; let end = ivs.length ? ivs[0][1] : 0;
  for (const [a, b] of ivs) { if (a > end + 1) gaps.push(Math.round(a - end)); end = Math.max(end, b); }
  // 商品カード：値段（¥・円）を含み、画像を持つ繰り返しの要素
  const cards = [];
  for (const e of document.body.querySelectorAll('li,article,div,a')) {
    const r = vis(e); if (!r || r.width < 100 || r.width > W * .5 || r.height > 1200) continue;
    const t = e.innerText || ''; if (!/[¥￥]\s?[\d,]+|[\d,]+\s?円|JPY|\$\s?[\d,.]+/.test(t) || t.length > 200) continue;
    const img = e.querySelector('img'); if (!img) continue;
    if ([...e.children].some(c => cards.includes(c))) continue;
    if (cards.some(c => c.contains(e))) continue;
    cards.push(e);
  }
  let grid = null;
  if (cards.length >= 3) {
    const rs = cards.map(c => c.getBoundingClientRect()); const row = rs.filter(r => Math.abs(r.top - rs[0].top) < 4).sort((a, b) => a.left - b.left);
    const colGap = row.length > 1 ? Math.round(row[1].left - row[0].right) : null;
    const img = cards[0].querySelector('img').getBoundingClientRect();
    const texts = [...cards[0].querySelectorAll('*')].filter(x => [...x.childNodes].some(n => n.nodeType === 3 && n.textContent.trim())).map(x => ({ t: x.textContent.trim().slice(0, 16), fs: parseFloat(getComputedStyle(x).fontSize), w: +getComputedStyle(x).fontWeight }));
    grid = { n: cards.length, cols: row.length, cardW: Math.round(rs[0].width), colGap, imgRatio: +(img.height / img.width).toFixed(2), texts: texts.slice(0, 5) };
  }
  // 区切りの罫・ボタン
  let rules = 0, btns = 0, radius = [];
  for (const e of document.body.querySelectorAll('*')) { const r = vis(e); if (!r) continue; const s = getComputedStyle(e);
    if (r.width > W * .7 && ((parseFloat(s.borderTopWidth) > 0 && s.borderTopStyle !== 'none') || e.tagName === 'HR')) rules++;
    if (/^(A|BUTTON)$/.test(e.tagName) && e.innerText.trim().length && e.innerText.trim().length < 20 && (hex(s.backgroundColor) || parseFloat(s.borderTopWidth) > 0) && r.height >= 30) { btns++; radius.push(parseFloat(s.borderTopLeftRadius) || 0); } }
  const med = a => { if (!a.length) return null; const b = [...a].sort((x, y) => x - y); return b[Math.floor(b.length / 2)]; };
  const pct = (a, p) => { if (!a.length) return null; const b = [...a].sort((x, y) => x - y); return b[Math.floor(b.length * p)]; };
  const header = document.querySelector('header'); const hr = header ? header.getBoundingClientRect() : null;
  return {
    title: document.title.slice(0, 60), H, lang: document.documentElement.lang,
    bg: hex(getComputedStyle(document.body).backgroundColor) || hex(getComputedStyle(document.documentElement).backgroundColor),
    gaps: { n: gaps.length, big: gaps.filter(g => g >= 40).length, p50: pct(gaps.filter(g => g >= 16), .5), p75: pct(gaps.filter(g => g >= 16), .75), p90: pct(gaps.filter(g => g >= 16), .9), max: Math.max(0, ...gaps) },
    gutter: med(lefts.filter(x => x > 0 && x < W / 3)), gutterR: med(rights.filter(x => x > 0 && x < W / 3)), headerH: hr ? Math.round(hr.height) : null,
    runs, heads: heads.slice(0, 12), grid, rules, btns, btnRadius: med(radius), firstChars
  };
}

(async () => {
  const b = await chromium.launch({ args: ['--ignore-certificate-errors'] });
  const q = [...urls]; const out = fs.createWriteStream(outFile, { flags: 'w' });
  async function one(u) {
    const ctx = await b.newContext({ viewport: { width: 1440, height: 900 }, locale: 'ja-JP' }); const p = await ctx.newPage();
    const res = { u };
    try {
      const resp = await p.goto(u, { waitUntil: 'domcontentloaded', timeout: 40000 }); res.status = resp ? resp.status() : null; res.final = p.url();
      await p.waitForTimeout(4500);
      for (let i = 0; i < 6; i++) { await p.mouse.wheel(0, 900); await p.waitForTimeout(300); }
      await p.evaluate(() => scrollTo(0, 0)); await p.waitForTimeout(900);
      const name = new URL(u).hostname.replace('www.', '') + (new URL(u).pathname.length > 1 ? '_' + new URL(u).pathname.replace(/\W+/g, '_').slice(0, 30) : '');
      res.shot = `${SHOTS}/${name}.jpg`; await p.screenshot({ path: res.shot, type: 'jpeg', quality: 60 });
      Object.assign(res, await p.evaluate(probe));
      // 実際に描かれた書体（和文の塊・英字の塊に分けて）
      const c = await ctx.newCDPSession(p); await c.send('DOM.enable'); await c.send('CSS.enable');
      const { root } = await c.send('DOM.getDocument', { depth: -1 }); const fonts = { jp: {}, lat: {} };
      for (const kind of ['jp', 'lat']) {
        const { nodeIds } = await c.send('DOM.querySelectorAll', { nodeId: root.nodeId, selector: `[data-m=${kind}]` });
        for (const id of nodeIds.slice(0, 150)) { try { const { fonts: f } = await c.send('CSS.getPlatformFontsForNode', { nodeId: id }); for (const x of f) { if (/emoji|icon|symbol|fontawesome/i.test(x.familyName)) continue; const k = x.familyName + (x.isCustomFont ? '' : '*'); fonts[kind][k] = (fonts[kind][k] || 0) + x.glyphCount; } } catch (e) { } }
      }
      res.fonts = fonts;
    } catch (e) { res.err = String(e).slice(0, 100); }
    out.write(JSON.stringify(res) + '\n'); await ctx.close();
  }
  await Promise.all(Array.from({ length: +par }, async () => { while (q.length) await one(q.shift()); }));
  out.end(); await b.close();
})();
