// 使い方: node tools/catalog.js [--check]
// plugins/site-skills/skills/ に集めたスキルの frontmatter から、選ぶスキルが読むカタログを作る。
// --check のときは書かずに、カタログが最新か・選ぶスキルの表に全部のスキルが載っているかだけを確かめる（CI 用）。
const fs = require('fs');
const path = require('path');
const DIR = 'plugins/site-skills/skills';
const ROUTER = 'site-skills';
const OUT = path.join(DIR, ROUTER, 'references/catalog.md');
const sources = require('../sources.json');
const errors = [];
const skills = fs.readdirSync(DIR).filter(d => d !== ROUTER && fs.existsSync(path.join(DIR, d, 'SKILL.md'))).sort();
const meta = name => {
  const fm = fs.readFileSync(path.join(DIR, name, 'SKILL.md'), 'utf8').match(/^---\n([\s\S]*?)\n---\n/);
  return Object.fromEntries((fm ? fm[1] : '').split('\n').map(l => l.match(/^(\w+):\s*(.*)$/)).filter(Boolean).map(m => [m[1], m[2].trim()]));
};
const rows = skills.map(name => {
  const src = sources.find(s => name.startsWith(s.prefix + '-'));
  if (!src) errors.push(`${name}: sources.json のどの接頭辞にも当たらない`);
  return `| \`${name}\` | ${src ? src.kind : '?'} | \`${src ? src.repo : '?'}\` | ${(meta(name).description || '').replace(/\|/g, '／')} |`;
});
const text = `# カタログ：集めたスキルの一覧

\`tools/catalog.js\` が各スキルの \`description\` から作る。手で直さない。
選ぶときは、まず \`SKILL.md\` の表で候補を絞り、迷ったらここの説明を読み比べる。

| スキル | 種類 | 元のリポジトリ | いつ使うか（description） |
|---|---|---|---|
${rows.join('\n')}
`;
const router = fs.readFileSync(path.join(DIR, ROUTER, 'SKILL.md'), 'utf8');
for (const name of skills) if (!router.includes('`' + name + '`')) errors.push(`選ぶスキルの SKILL.md に \`${name}\` が無い（表に1行足す）`);
for (const s of sources) if (!skills.some(n => n.startsWith(s.prefix + '-'))) errors.push(`${s.repo} のスキルがまだ集まっていない（tools/sync.sh）`);
if (process.argv.includes('--check')) {
  if (!fs.existsSync(OUT) || fs.readFileSync(OUT, 'utf8') !== text) errors.push(`${OUT} が古い（node tools/catalog.js で作り直す）`);
} else fs.writeFileSync(OUT, text);
if (errors.length) { console.error(errors.map(e => '✗ ' + e).join('\n')); process.exit(1); }
console.log(`✓ ${skills.length} スキル: ${skills.join(', ')}`);
