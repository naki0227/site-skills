// いまの作例の主の色と色相の一覧を出す（2026-11-09。SKILL.md に手で書いた一覧が、作例が増えるたびに古くなっていたので、毎回数える）
// 使い方：node scripts/colors.js [作例のフォルダ。既定は リポジトリの examples/]
// 各作例の index.html の先頭のコメント「主の色：#xxxxxx（由来）」を読む。無い作例は「主の色の行が無い」と出す
const fs = require('fs'), path = require('path');
const dir = process.argv[2] || path.join(__dirname, '../../../../../examples');
const hue = h => { const r = parseInt(h.slice(1, 3), 16) / 255, g = parseInt(h.slice(3, 5), 16) / 255, b = parseInt(h.slice(5, 7), 16) / 255; const mx = Math.max(r, g, b), mn = Math.min(r, g, b), d = mx - mn; if (!d) return null; let x = mx === r ? ((g - b) / d) % 6 : mx === g ? (b - r) / d + 2 : (r - g) / d + 4; x *= 60; return Math.round(x < 0 ? x + 360 : x); };
const rows = [];
for (const n of fs.readdirSync(dir)) { const f = path.join(dir, n, 'index.html'); if (!fs.existsSync(f)) continue; const m = fs.readFileSync(f, 'utf8').match(/主の色：\s*(#[0-9a-fA-F]{6})([^\n<]*)/); rows.push(m ? { n, c: m[1], h: hue(m[1]), why: m[2].replace(/-->.*/, '').trim() } : { n, c: null }); }
rows.sort((a, b) => (a.h ?? 999) - (b.h ?? 999));
for (const r of rows) console.log(r.c ? `${String(r.h).padStart(3)}°  ${r.c}  ${r.n}  ${r.why}` : `  ?   ------   ${r.n}  主の色の行が無い`);
console.log('\n主の色は、ここに出た色相から20°以上離す。同時にいくつも作るときは、先に色相の範囲を割り振る。');
// 空いている色相（どの作例からも20°以上離れる範囲）。割り振りはこの中からにする（第6回で、割り振った範囲に空きが無かった）
const hs = [...new Set(rows.filter(r => r.h !== null).map(r => r.h))].sort((a, b) => a - b);
const gaps = d => { const out = []; for (let i = 0; i < hs.length; i++) { const a = hs[i], b = i + 1 < hs.length ? hs[i + 1] : hs[0] + 360; if (b - a >= 2 * d) out.push([(a + d) % 360, (b - d) % 360]); } return out; };
let d = 20, free = gaps(d); if (!free.length) { d = 15; free = gaps(d); }
console.log(`空いている色相（どの作例からも${d}°以上離れる）：` + (free.length ? free.map(([a, b]) => `${a}°〜${b}°`).join('、') : '無い'));
if (d < 20) console.log('色相の空きが少ない。色相が近くなるときは、明るさか鮮やかさで分ける（淡い地の色にする・くすませる・ほぼ黒にする）。');
