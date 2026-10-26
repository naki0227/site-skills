// 使い方: node tools/credits.js [--check]
// 参考にしたスキルのライセンス表示と、examples/*/photos/credits.json に書いた写真の出典から CREDITS.md を作る。
// --check のときは書かずに、CREDITS.md が最新か・写真に出典が欠けていないかだけを確かめる（CI 用）。
// 写真は MIT ではなく、それぞれの Creative Commons ライセンスで使っている（LICENSE の末尾）。
const fs = require('fs');
const path = require('path');
const errors = [];
const rows = [];
for (const ex of fs.readdirSync('examples').sort()) {
  const dir = path.join('examples', ex, 'photos');
  if (!fs.existsSync(dir)) continue;
  const cfile = path.join(dir, 'credits.json');
  const credits = fs.existsSync(cfile) ? JSON.parse(fs.readFileSync(cfile, 'utf8')) : [];
  const photos = fs.readdirSync(dir).filter(f => /\.(jpe?g|png|webp|avif)$/i.test(f));
  for (const f of photos) {
    const c = credits.find(x => x.file === f);
    if (!c) { errors.push(`${dir}/${f} の出典が credits.json に無い`); continue; }
    for (const k of ['title', 'creator', 'license', 'page']) if (!c[k]) errors.push(`${dir}/${f} の credits.json に ${k} が無い`);
    if (c.license && !/^(CC0|CC BY|CC BY-SA)\b/.test(c.license)) errors.push(`${dir}/${f} のライセンス（${c.license}）は使えない（CC0・CC BY・CC BY-SA だけ）`);
    rows.push(`| \`${ex}\` | \`photos/${f}\` | ${String(c.title).replace(/\|/g, '／')} | ${String(c.creator).replace(/\|/g, '／')} | ${c.license} | ${c.page} |`);
  }
}
const text = `# 出典とライセンス

\`tools/credits.js\` が作る。手で直さない。

## このリポジトリ
- スキル・道具・使用例の HTML は MIT License（\`LICENSE\`）。
- 写真（\`examples/*/photos/\`）は MIT ではない。下の表のとおり、それぞれの Creative Commons ライセンスで使っている。使うときは、そのライセンスの条件（作者の表示、CC BY-SA は同じライセンスで公開）に従う。
- スキルの値は、各 anatomy リポジトリで実在のサイトを測った数値と、そこから引き出した判断。相手のサイトの画像・ロゴ・フォントファイル・文章は入れていない。

## 参考にしたスキル（MIT License）
どちらも、日本語で書き直して取り入れた。文章や値をそのまま写してはいない。
- [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) — Copyright (c) 2026 Leonxlnx。作る前の棚卸しと考え（\`references/make.md\`）、批評（\`references/critique.md\`）、自動チェック（\`scripts/inspect.js\`）の組み立てと、247サイトの調査の数値。
- [elayadesign/ai-design-skills](https://github.com/elayadesign/ai-design-skills) — Copyright (c) 2026 Elaya。「作る前に決めること」の最初の形と、作例の決まり（本物らしい中身・状態の網羅・動かすのは transform と opacity だけ）。

## 写真
${rows.length ? '| 使用例 | ファイル | 題 | 作者 | ライセンス | 元のページ |\n|---|---|---|---|---|---|\n' + rows.join('\n') : 'まだ無い。'}
`;
if (process.argv.includes('--check')) {
  if (!fs.existsSync('CREDITS.md') || fs.readFileSync('CREDITS.md', 'utf8') !== text) errors.push('CREDITS.md が古い（node tools/credits.js で作り直す）');
} else fs.writeFileSync('CREDITS.md', text);
if (errors.length) { console.error(errors.map(e => '✗ ' + e).join('\n')); process.exit(1); }
console.log(`✓ 写真 ${rows.length} 枚の出典`);
