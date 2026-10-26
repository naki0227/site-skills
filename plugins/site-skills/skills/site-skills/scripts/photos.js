// 使い方:
//   node tools/photos.js search "<英語の検索語>"            … Wikimedia Commons の自由に使える写真を探す（CC0・CC BY・CC BY-SA だけ）
//   node tools/photos.js get <番号> <出力フォルダ> [幅]       … 直前の検索の <番号> を幅 1280px（既定。500/960/1280/1920 のどれか）で取り、credits.json に出典を書く
// 写真の枠を灰色の箱のままにしないための道具。題材そのものの写真が無いとき、題材の「まわりの世界」（産地・道具・素材・町）の本物の写真を使う。
// 出典：ユーザーの見比べ（2026-10-26、4案から「実在の写真＋出典」を選んだ）と、taste-skill（Leonxlnx/taste-skill, MIT）の assets.mjs の考え方。
// 決まり：解剖した相手のサイトの画像は使わない。架空の題材の物（店・人・商品）として見せない。出典（題・作者・ライセンス・元のページ）を必ず画面に書く。
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const UA = 'site-skills-photos/0.1 (https://github.com/naki0227/site-skills)';
const LAST = path.join(require('os').tmpdir(), 'site-skills-photos-last.json');
const [cmd, a, b, c] = process.argv.slice(2);

// Node の fetch がプロキシを通らない環境があるので、curl に任せる
const curlJSON = u => JSON.parse(execSync(`curl -s -m 30 -A ${JSON.stringify(UA)} ${JSON.stringify(u)}`).toString());
const curlFile = (u, f) => execSync(`curl -s -m 60 -f -A ${JSON.stringify(UA)} -o ${JSON.stringify(f)} ${JSON.stringify(u)}`);

// Wikimedia の元画像の URL から、指定の幅の縮小版の URL を作る
function thumb(url, w) {
  const m = url.match(/upload\.wikimedia\.org\/wikipedia\/commons\/(\w)\/(\w\w)\/(.+)$/);
  if (!m) return url;
  return `https://upload.wikimedia.org/wikipedia/commons/thumb/${m[1]}/${m[2]}/${m[3]}/${w}px-${m[3]}`;
}

(async () => {
  if (cmd === 'search' && a) {
    const q = encodeURIComponent(a);
    const d = curlJSON(`https://api.openverse.org/v1/images/?q=${q}&license=cc0,by,by-sa&source=wikimedia&page_size=12`);
    const rows = (d.results || []).map((r, i) => ({ n: i + 1, title: r.title, creator: r.creator, license: `${r.license === 'cc0' ? 'CC0' : 'CC ' + r.license.toUpperCase()} ${r.license_version}`, url: r.url, page: r.foreign_landing_url, w: r.width, h: r.height }));
    fs.writeFileSync(LAST, JSON.stringify(rows, null, 1));
    for (const r of rows) console.log(`${String(r.n).padStart(2)}. ${r.title.slice(0, 50)}｜${(r.creator || '').slice(0, 24)}｜${r.license}｜${r.w}×${r.h}\n    ${r.page}`);
    if (!rows.length) console.log('見つからなかった。英語の別の言い方（素材・道具・地名）で探す');
    return;
  }
  if (cmd === 'get' && a && b) {
    const rows = JSON.parse(fs.readFileSync(LAST, 'utf8')); const r = rows.find(x => x.n === +a);
    if (!r) { console.error('その番号は直前の検索に無い'); process.exit(1); }
    // Wikimedia の縮小版は決まった幅（500・960・1280・1920）だけ出せる。元より大きい幅は頼まない
    const STEPS = [500, 960, 1280, 1920]; const want = +c || 1280; const w = STEPS.filter(x => x <= (r.w || 1920)).reduce((p, x) => Math.abs(x - want) < Math.abs(p - want) ? x : p, 500); fs.mkdirSync(b, { recursive: true });
    const name = r.title.replace(/^File:/, '').replace(/\.[a-z]+$/i, '').replace(/[^\w-]+/g, '-').slice(0, 60) + '.jpg';
    const file = path.join(b, name);
    try { curlFile(thumb(r.url, w), file); } catch (e) { curlFile(r.url, file); }
    const credits = path.join(b, 'credits.json');
    const list = fs.existsSync(credits) ? JSON.parse(fs.readFileSync(credits, 'utf8')) : [];
    list.push({ file: name, title: r.title, creator: r.creator, license: r.license, page: r.page });
    fs.writeFileSync(credits, JSON.stringify(list, null, 1));
    console.log(`${file}\n出典の書き方：写真：${r.creator}／Wikimedia Commons／${r.license}（${r.page}）`);
    return;
  }
  console.error('usage: node tools/photos.js search "<query>" | get <n> <outdir> [width]'); process.exit(2);
})();
