// 使い方:
//   node scripts/photos.js search "<英語の検索語>" <出力フォルダ>   … Wikimedia Commons の自由に使える写真を探す（CC0・CC BY・CC BY-SA だけ）
//   node scripts/photos.js get <番号> <出力フォルダ> [幅]            … 直前の検索の <番号> を幅 1280px（既定。500/960/1280/1920 のどれか）で取り、credits.json に出典を書く
// 候補を見比べるときは、作業用のフォルダ（work/ の下）に search・get して見て、使う物だけ作例の photos/ に search・get し直す（候補が credits.json に入らないように）。
// 直前の検索は <出力フォルダ>/.photos-last.json に置く（並行して動く作り手どうしで上書きしないため。2026-11-07 の一発テストで4人がぶつかった）。
// 出力フォルダを付けずに search したときだけ、共有の一時ファイルを使う。
// 写真の枠を灰色の箱のままにしないための道具。題材そのものの写真が無いとき、題材の「まわりの世界」（産地・道具・素材・町）の本物の写真を使う。
// 出典：ユーザーの見比べ（2026-10-26、4案から「実在の写真＋出典」を選んだ）と、taste-skill（Leonxlnx/taste-skill, MIT）の assets.mjs の考え方。
// 決まり：解剖した相手のサイトの画像は使わない。架空の題材の物（店・人・商品）として見せない。出典（題・作者・ライセンス・元のページ）を必ず画面に書く。
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const UA = 'site-skills-photos/0.1 (https://github.com/naki0227/site-skills)';
const SHARED_LAST = path.join(require('os').tmpdir(), 'site-skills-photos-last.json');
const lastFor = dir => dir ? path.join(dir, '.photos-last.json') : SHARED_LAST;
// 取った物が本当に画像か（Wikimedia は取りすぎのとき HTML のエラーページを返す。それを .jpg として残していた）
const isImage = f => { try { const b = fs.readFileSync(f).subarray(0, 4); return (b[0] === 0xff && b[1] === 0xd8) || (b[0] === 0x89 && b[1] === 0x50) || (b[0] === 0x52 && b[1] === 0x49); } catch (e) { return false; } };
const [cmd, a, b, c] = process.argv.slice(2);

// Node の fetch がプロキシを通らない環境があるので、curl に任せる
const curlJSON = u => JSON.parse(execSync(`curl -s -m 30 -A ${JSON.stringify(UA)} ${JSON.stringify(u)}`).toString());
// Wikimedia は続けて取ると 429（取りすぎ）を返すので、2・4・8・16秒あけて4回まで取り直す
const sleep = s => execSync(`sleep ${s}`);
function curlFile(u, f) {
  for (let i = 0; ; i++) {
    const code = execSync(`curl -s -m 60 -A ${JSON.stringify(UA)} -o ${JSON.stringify(f)} -w "%{http_code}" ${JSON.stringify(u)}`).toString().trim();
    if (code === '200') return;
    if ((code === '429' || code.startsWith('5')) && i < 4) { sleep(2 ** (i + 1)); continue; }
    throw new Error(`${code} ${u}`);
  }
}

// Wikimedia の元画像の URL から、指定の幅の縮小版の URL を作る
function thumb(url, w) {
  const m = url.match(/upload\.wikimedia\.org\/wikipedia\/commons\/(\w)\/(\w\w)\/(.+)$/);
  if (!m) return url;
  return `https://upload.wikimedia.org/wikipedia/commons/thumb/${m[1]}/${m[2]}/${m[3]}/${w}px-${m[3]}`;
}

(async () => {
  if (cmd === 'search' && a) {
    // 前の検索の結果が残っていると、この検索が時間切れになったときに get が前の写真を取ってしまう（町工場の作り直しで起きた）。先に消す
    const LAST = lastFor(b); if (b) fs.mkdirSync(b, { recursive: true });
    const q = encodeURIComponent(a);
    const d = curlJSON(`https://api.openverse.org/v1/images/?q=${q}&license=cc0,by,by-sa&source=wikimedia&page_size=12`);
    const clean = t => (t || '').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
    const rows = (d.results || []).map((r, i) => ({ n: i + 1, title: clean(r.title), creator: clean(r.creator) || '作者不明（Commons に記載なし）', license: `${r.license === 'cc0' ? 'CC0' : 'CC ' + r.license.toUpperCase()} ${r.license_version}`, url: r.url, page: r.foreign_landing_url, w: r.width, h: r.height }));
    // 見つからなかったときは、前の検索の結果をそのまま残す（0件で上書きして、前の番号で get できなくなっていた）。見つかったときだけ書き直す
    if (rows.length) fs.writeFileSync(LAST, JSON.stringify({ q: a, rows }, null, 1));
    for (const r of rows) console.log(`${String(r.n).padStart(2)}. ${r.title.slice(0, 50)}｜${(r.creator || '').slice(0, 24)}｜${r.license}｜${r.w}×${r.h}\n    ${r.page}`);
    if (!rows.length) console.log('見つからなかった（前の検索の結果はそのまま残した）。英語の別の言い方（素材・道具・地名）で探す');
    return;
  }
  if (cmd === 'get' && a && b) {
    const LAST = fs.existsSync(lastFor(b)) ? lastFor(b) : SHARED_LAST;
    let saved; try { saved = JSON.parse(fs.readFileSync(LAST, 'utf8')); } catch (e) { console.error('直前の検索の結果が無い（検索が失敗した）。もう一度 search する'); process.exit(1); }
    const rows = saved.rows || saved; if (saved.q) console.error(`検索語「${saved.q}」の ${a} 番を取る`); const r = rows.find(x => x.n === +a);
    if (!r) { console.error('その番号は直前の検索に無い'); process.exit(1); }
    // Wikimedia の縮小版は決まった幅（500・960・1280・1920）だけ出せる。元より大きい幅は頼まない
    const STEPS = [500, 960, 1280, 1920]; const want = +c || 1280; const w = STEPS.filter(x => x <= (r.w || 1920)).reduce((p, x) => Math.abs(x - want) < Math.abs(p - want) ? x : p, 500); fs.mkdirSync(b, { recursive: true });
    // 日本語の題は記号だけになるので「photo」を頭に付ける（「-2023.jpg」は ls や rm がオプションと間違えた）。同じ名前があれば番号を足す
    let base = r.title.replace(/^File:/, '').replace(/\.[a-z]+$/i, '').replace(/[^\w-]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 60);
    if (!/[A-Za-z0-9]{3}/.test(base)) base = 'photo-' + (r.page.match(/curid=(\d+)/) || [, Date.now()])[1] + (base ? '-' + base : '');
    // 同じ写真（同じ元のページ）を取り直したときは、同じ名前に上書きし、credits.json にも二重に書かない
    const creditsPath = path.join(b, 'credits.json');
    const prev = fs.existsSync(creditsPath) ? JSON.parse(fs.readFileSync(creditsPath, 'utf8')).find(x => x.page === r.page) : null;
    let name = prev ? prev.file : base + '.jpg'; if (!prev) for (let k = 2; fs.existsSync(path.join(b, name)); k++) name = `${base}-${k}.jpg`;
    const file = path.join(b, name);
    // 頼んだ幅で失敗したら、小さい幅、元の画像の順に取り直す。画像でない物は消して、出典も書かない
    const tries = [...STEPS.filter(x => x <= w).reverse().map(x => thumb(r.url, x)), r.url];
    let ok = false;
    for (const u of tries) { try { curlFile(u, file); if (isImage(file)) { ok = true; break; } } catch (e) { } try { fs.unlinkSync(file); } catch (e) { } sleep(2); }
    if (!ok) { console.error('取れなかった（取りすぎで断られた）。少し待つか、別の番号を取る'); process.exit(1); }
    const credits = path.join(b, 'credits.json');
    const list = fs.existsSync(credits) ? JSON.parse(fs.readFileSync(credits, 'utf8')) : [];
    const at = list.findIndex(x => x.page === r.page); const row = { file: name, title: r.title, creator: r.creator, license: r.license, page: r.page };
    if (at >= 0) list[at] = row; else list.push(row);
    fs.writeFileSync(credits, JSON.stringify(list, null, 1));
    console.log(`${file}\n出典の書き方：写真：${r.creator}／Wikimedia Commons／${r.license}（${r.page}）`);
    return;
  }
  console.error('usage: node scripts/photos.js search "<query>" <outdir> | get <n> <outdir> [width]'); process.exit(2);
})();
