// 使い方: node tools/check-skill.js <接頭辞>   例: node tools/check-skill.js ec
// .claude/skills/ の各スキルが、site-skills に集められる形になっているかを確かめる（docs/site-skills.md の約束）。
//   - SKILL.md に name と description があり、name がフォルダ名と同じで、接頭辞で始まる
//   - SKILL.md は 80 行以内（記録は notes/ に置き、入口は選び方と手順だけにする）
//   - SKILL.md に書いた references/ のファイルが実在し、references/ のファイルは全部 SKILL.md から辿れる
const fs = require('fs');
const path = require('path');
const prefix = process.argv[2];
if (!prefix) { console.error('usage: node tools/check-skill.js <prefix>'); process.exit(1); }
const root = '.claude/skills';
const errors = [];
const skills = fs.existsSync(root) ? fs.readdirSync(root).filter(d => fs.statSync(path.join(root, d)).isDirectory()) : [];
if (!skills.length) errors.push(`${root} にスキルが無い`);
const walk = d => fs.existsSync(d) ? fs.readdirSync(d).flatMap(f => { const p = path.join(d, f); return fs.statSync(p).isDirectory() ? walk(p) : [p]; }) : [];
for (const dir of skills) {
  const base = path.join(root, dir);
  const file = path.join(base, 'SKILL.md');
  if (!fs.existsSync(file)) { errors.push(`${file} が無い`); continue; }
  const text = fs.readFileSync(file, 'utf8');
  const fm = text.match(/^---\n([\s\S]*?)\n---\n/);
  if (!fm) { errors.push(`${file}: 先頭に frontmatter（--- で囲む）が無い`); continue; }
  const meta = Object.fromEntries(fm[1].split('\n').map(l => l.match(/^(\w+):\s*(.*)$/)).filter(Boolean).map(m => [m[1], m[2].trim()]));
  if (meta.name !== dir) errors.push(`${file}: name（${meta.name}）がフォルダ名（${dir}）と違う`);
  if (!dir.startsWith(prefix + '-')) errors.push(`${file}: スキル名は「${prefix}-」で始める`);
  if (!meta.description || meta.description.length < 40) errors.push(`${file}: description が無いか短すぎる（何を作る・直すときに使うかを書く）`);
  const lines = text.split('\n').length;
  if (lines > 80) errors.push(`${file}: ${lines} 行。80 行以内にする（詳細は references/ へ）`);
  const mentioned = new Set([...text.matchAll(/`((?:references\/)?[\w./-]+\.md)`/g)].map(m => m[1].startsWith('references/') ? m[1] : 'references/' + m[1]));
  for (const m of mentioned) if (!fs.existsSync(path.join(base, m))) errors.push(`${file}: ${m} が無い`);
  for (const f of walk(path.join(base, 'references'))) {
    const rel = path.relative(base, f).split(path.sep).join('/');
    if (!mentioned.has(rel)) errors.push(`${file}: ${rel} が SKILL.md から辿れない（表か手順に書く）`);
  }
}
if (errors.length) { console.error(errors.map(e => '✗ ' + e).join('\n')); process.exit(1); }
console.log(`✓ ${skills.length} スキル: ${skills.join(', ')}`);
