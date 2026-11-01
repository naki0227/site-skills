// 手本のサイトを測る：地・文字・差し色・書体と太さ・ボタン・全幅の罫・本文の大きさ（1440px）。使い方：node sample.js <URL...>（shots/ に最初の画面を保存）
const {chromium}=require('playwright');require('fs').mkdirSync('shots',{recursive:true});
const urls=process.argv.slice(2);
(async()=>{const b=await chromium.launch();const out=[];
await Promise.all(urls.map(async(u,ix)=>{const p=await b.newPage({viewport:{width:1440,height:900}});
 try{await p.goto(u,{waitUntil:'domcontentloaded',timeout:45000});await p.waitForTimeout(5000);
 for(let y=0;y<5;y++){await p.mouse.wheel(0,900);await p.waitForTimeout(400)}await p.evaluate(()=>scrollTo(0,0));await p.waitForTimeout(800);
 const name=new URL(u).hostname.replace('www.','');
 await p.screenshot({path:require('path').join(process.cwd(),'shots',name+'.png')});
 const r=await p.evaluate(()=>{
  const vis=e=>{const s=getComputedStyle(e);if(s.display==='none'||s.visibility==='hidden'||+s.opacity===0)return null;const r=e.getBoundingClientRect();return r.width>0&&r.height>0?r:null};
  const P=c=>{const m=c.match(/[\d.]+/g);if(!m)return null;const a=m[3]===undefined?1:+m[3];return a<.5?null:'#'+m.slice(0,3).map(x=>(+x).toString(16).padStart(2,'0')).join('')};
  const bg={},tx={};let fam={},btn=[],seps=0,bands=[];
  const all=[...document.body.querySelectorAll('*')];
  for(const e of all){const r=vis(e);if(!r)continue;const s=getComputedStyle(e);
   const c=P(s.backgroundColor);if(c){bg[c]=(bg[c]||0)+r.width*r.height}
   const own=[...e.childNodes].filter(n=>n.nodeType===3).map(n=>n.textContent.trim()).join('');
   if(own.length){const t=P(s.color);if(t)tx[t]=(tx[t]||0)+own.length;const f=s.fontFamily.split(',')[0].replace(/["']/g,'').trim()+' '+s.fontWeight;fam[f]=(fam[f]||0)+own.length}
   if(r.width>1100&&(parseFloat(s.borderTopWidth)>0&&s.borderTopStyle!=='none'&&P(s.borderTopColor)||e.tagName==='HR'))seps++;
   if((e.tagName==='A'||e.tagName==='BUTTON')&&own.length<20&&own.length>0){const hasBg=!!P(s.backgroundColor),bd=parseFloat(s.borderTopWidth)>0&&s.borderTopStyle!=='none';
     if(hasBg||bd)btn.push({t:own.slice(0,14),bg:P(s.backgroundColor),bd:bd?s.borderTopWidth+' '+P(s.borderTopColor):'',rad:s.borderTopLeftRadius,fs:s.fontSize,pad:s.paddingTop+'/'+s.paddingLeft})}}
  // body text size
  let sizes={};for(const e of all){const r=vis(e);if(!r)continue;const own=[...e.childNodes].filter(n=>n.nodeType===3).map(n=>n.textContent.trim()).join('');if(own.length>=30){const f=getComputedStyle(e).fontSize;sizes[f]=(sizes[f]||0)+own.length}}
  const top=(o,n)=>Object.entries(o).sort((a,b)=>b[1]-a[1]).slice(0,n);
  const tot=Object.values(bg).reduce((a,b)=>a+b,0);
  return {bg:top(bg,6).map(([c,v])=>c+' '+Math.round(v/tot*100)+'%'),tx:top(tx,5).map(([c,v])=>c+' '+v),fam:top(fam,6),sizes:top(sizes,3),btn:btn.slice(0,6),btnN:btn.length,seps,h:document.body.scrollHeight,fonts:[...new Set([...document.fonts].filter(f=>f.status==='loaded').map(f=>f.family.replace(/"/g,'')))].slice(0,8)}});
 out[ix]={u,...r}}catch(e){out[ix]={u,err:String(e).slice(0,80)}}await p.close()}));
console.log(JSON.stringify(out,null,1));await b.close()})();
