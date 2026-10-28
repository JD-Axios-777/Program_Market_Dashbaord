// usage: node tools/cards.js site [slug ...]  — builds every data file; prints full cards for the slugs given
const fs=require("fs"),path=require("path");
const dir=path.resolve(process.argv[2]||path.join(__dirname,"..","site"));
global.window=globalThis;
require(path.join(dir,"engine.js"));
for(const f of fs.readdirSync(path.join(dir,"data"))) require(path.join(dir,"data",f));
const want=process.argv.slice(3);
let problems=0;
for(const [gid,rows] of Object.entries(RAW)){
  let r;
  try{ r=buildProgram(rows); }catch(e){ console.log("ERROR",gid,e.message); problems++; continue; }
  const empties=[];
  r.blocks.forEach(b=>b.days.forEach(d=>d[2].forEach(e=>{ if(/No sets saved/.test(e[2])) empties.push(`${b.title} D${d[0].split(" ")[0]} ${e[1]}`); })));
  console.log(`${gid}: ${r.blocks.length} rotation(s) [${r.blocks.map(b=>b.sub).join(" | ")}], ${r.facts.join(", ")}, ${r.progressions.reduce((n,p)=>n+p.rows.length,0)} progression rows${empties.length?", no-scheme: "+empties.join("; "):""}`);
  if(want.includes(gid)){
    for(const b of r.blocks){console.log("==",b.title,b.sub);for(const d of b.days){console.log(" ",d[0],"|",d[1]);for(const e of d[2])console.log("    ",e.join(" | "));}}
    for(const p of r.progressions){console.log("##",p.title);for(const x of p.rows)console.log("   ",x.join(" || "));}
  }
}
console.log(problems?`${problems} error(s)`:"all built");
