const fs=require('fs');global.window={};const path=require('path');const dir=path.join(__dirname,'..','site');const h=fs.readFileSync(dir+'/index.html','utf8');
for(const f of fs.readdirSync(dir+'/data'))eval(fs.readFileSync(dir+'/data/'+f,'utf8'));
const P=eval(h.match(/const PROGRAMS=(\[[\s\S]*?\]);/)[1]);
const D=eval('('+h.match(/const DETAILS=(\{[\s\S]*?\n\});/)[1]+')');
const POWER=/burpee|clap|jump|throw|slam|toss|snatch|clean|swing|explosive|sled push|high pull|thruster|devils/i;
const CORE=/crunch|plank|hollow|jack kni|knives|leg raise|knee raise|tuck|sit-up|toe touch|chop|rotation|boat|bridge|copenhagen|^hip |quadruped|stretch|mobility|cat to camel|\bcar\b|airplane|flutter|bear|mountain|dog|windmill|adductor|90\/90|trunk|side-lying|ankle|mcgill|v-up|spinal|frog|knee fold/i;
const GOALS=["Muscle Gain","Strength","Fat Loss","Weight Loss","Aerobic Endurance","Fitness Maintenance","Total Body Power","Mobility / Core Strength","Metabolic Conditioning"];
function metrics(lifts,cond,blocks){ // lifts: [{name,rx}] where rx is raw string ; cond: {days, aerobicMin, hard, metab}
 const n=lifts.length||1;
 const heavy=lifts.filter(l=>[...l.rx.matchAll(/(\d+(?:\.5)?)%\D{0,4}?(?:x |~)(\d+)(?:[-–](\d+))?/g)].some(m=>+m[1]>=80&&+(m[3]||m[2])<=5)).length;
 const hyp=lifts.filter(l=>/(?:~| x )(1[0-9]|20)[-–]/.test(l.rx)).length;
 const power=lifts.filter(l=>POWER.test(l.name)).length, core=lifts.filter(l=>CORE.test(l.name)).length;
 return {heavyPct:100*heavy/n,hypPct:100*hyp/n,powerPct:100*power/n,corePct:100*core/n,...cond,blocks};
}
function goalsFor(m){const g=[];
 if(m.blocks.includes('HYP')&&m.hypPct>=30)g.push("Muscle Gain");
 if(m.blocks.includes('STR')||m.heavyPct>=5)g.push("Strength");
 if(m.days>=2)g.push("Fat Loss");
 if(m.days>=3||m.metab||m.hard)g.push("Weight Loss");
 if(m.aerobicMin>=75)g.push("Aerobic Endurance");
 if(m.days>=2&&m.days<=3&&!m.metab&&!m.hard&&m.heavyPct<=15&&m.corePct<40&&m.powerPct<25&&m.hypPct<65)g.push("Fitness Maintenance");
 if(m.powerPct>=15)g.push("Total Body Power");
 if(m.corePct>=20)g.push("Mobility / Core Strength");
 if(m.metab||m.hard)g.push("Metabolic Conditioning");
 return g;}
const out={},M={};
for(const p of P){const id=p[1];let m;
 if(window.RAW[id]){const R=window.RAW[id];const lifts=[],cd=new Set();let aer=0,hard=false,metab=false;
  for(const r of R){const cardio=r[2]==='C'||/cardio|endurance|interval|aerobic|steady state/i.test(r[1]);
   if(/metabolic|circuit/i.test(r[1]))metab=true;
   if(cardio){cd.add(r[0]);if(/hard/i.test(r[5])||/sprint|max effort|power|high-intensity|metabolic/i.test(r[1]))hard=true;
     const w1=r[6].split('|')[0];const s=w1.slice(w1.indexOf(':')+1);
     if(!/hard/i.test(r[5])&&!/sprint|max effort/i.test(r[1]))for(const t of s.split(',')){const mm=t.match(/^(?:(\d+)\*)?[^~]*~(\d+)s/);if(mm)aer+=(+(mm[1]||1))*(+mm[2])/60;}
     continue}
   if(/hard/i.test(r[5]))hard=true;
   const per=r[6].split('|').map(x=>x.slice(x.indexOf(':')+1)).filter(x=>x&&x!=='=').join(',');lifts.push({name:r[5],rx:per});}
  m=metrics(lifts,{days:cd.size,aerobicMin:Math.round(aer),hard,metab},p[4]);}
 else if(D[id]){const d=D[id];const lifts=[];const cd=new Set();let aer=0,hard=false;
  d.blocks.forEach(b=>b.days.forEach(day=>{day[2].forEach(e=>lifts.push({name:e[1].replace(/\*$/,''),rx:e[2]}));if(day[1]){cd.add(day[0]);if(/hard/i.test(day[1]))hard=true;for(const mm of day[1].matchAll(/(\d+) x (\d+) (min|sec) (?:ON|EASY)/g))aer+=(+mm[1])*(+mm[2])*(mm[3]==='min'?1:1/60);for(const mm of day[1].matchAll(/(?:^|: )(\d+) min(?! HARD)/g))aer+=+mm[1];}}));
  const p2=(d.progressions||[]).flatMap(pr=>pr.rows.map(r=>({name:r[0],rx:r.slice(1).join(',')})));
  m=metrics(lifts.concat(p2),{days:cd.size,aerobicMin:Math.round(aer/d.blocks.length),hard,metab:false},p[4]);}
 else continue;
 M[id]=m;out[id]=goalsFor(m);}
fs.writeFileSync(path.join(__dirname,'goals.json'),JSON.stringify(out));
for(const p of P)if(out[p[1]]){const m=M[p[1]];console.log(p[0].padEnd(33),`hv${m.heavyPct.toFixed(0)} hy${m.hypPct.toFixed(0)} pw${m.powerPct.toFixed(0)} co${m.corePct.toFixed(0)} cd${m.days} aer${m.aerobicMin} ${m.hard?'H':''}${m.metab?'M':''}`.padEnd(38),out[p[1]].join(', '))}
for(const g of GOALS)console.log(g.padEnd(26),Object.values(out).filter(v=>v.includes(g)).length);
