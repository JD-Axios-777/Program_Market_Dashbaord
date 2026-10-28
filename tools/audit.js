const fs=require('fs'),path=require('path');
global.window={};const dir=process.argv[2];
const html=fs.readFileSync(dir+'/index.html','utf8');
const P=eval(html.match(/const PROGRAMS=(\[[\s\S]*?\]);/)[1]);const NAME=Object.fromEntries(P.map(p=>[p[1],p[0]]));
for(const f of fs.readdirSync(dir+'/data')) eval(fs.readFileSync(dir+'/data/'+f,'utf8'));
const out={};const flag=(id,cat,msg)=>((out[id]=out[id]||{})[cat]=(out[id][cat]||[])).push(msg);
function expand(s){ // list of sets {load,lo,hi,e,rest}
  if(!s) return [];const r=[];
  for(const tok of s.split(',')){const m=tok.match(/^(?:(\d+)\*)?([^~]*)~([^e r]*?)(e?)(?:r(\d+))?$/);if(!m){r.push({bad:tok});continue}
   const n=+(m[1]||1);let [lo,hi]=m[3].replace(/[a-z]+$/,'').split('-').map(Number);hi=hi||lo;
   for(let i=0;i<n;i++)r.push({load:m[2],amt:m[3],lo,hi,e:!!m[4],rest:m[5]?+m[5]:null});}
  return r;}
const uni=/single-leg|one-arm|one arm|single-arm|split squat|lunge|\brfe\b|\bffe\b|kickstand|alternating|cossack|step-up|off-set|offset|suitcase|copenhagen|side plank|90\/90|iso hold|split good/i;
for(const id of Object.keys(window.RAW)){
  const rows=window.RAW[id];const nm=NAME[id];
  const weekCount=Math.max(...rows.flatMap(r=>r[6].split('|').map(x=>+x.split(':')[0])));
  const slotWeeks={};const dayMv={};
  for(const r of rows){
    const [d,act,st,g,mn,mv,ws]=r;let prev=null;const per={};
    for(const part of ws.split('|')){const [w,s]=[+part.split(':')[0],part.slice(part.indexOf(':')+1)];const v=s==='='?prev:s;per[w]=v;prev=v;}
    const weeks=Object.keys(per).map(Number);
    const key=`D${d}|${act}|${g}.${mn}`;(slotWeeks[key]=slotWeeks[key]||new Set());weeks.forEach(w=>slotWeeks[key].add(w));
    const cardio=st==='C'||/cardio|endurance|interval|aerobic|steady state/i.test(act);
    weeks.forEach(w=>{const k=`W${w} D${d} ${mv}`;dayMv[k]=(dayMv[k]||0)+1});
    const sets=Object.fromEntries(weeks.map(w=>[w,expand(per[w])]));
    // each-side consistency
    const eAny=weeks.some(w=>sets[w].some(x=>x.e)),eAll=weeks.every(w=>sets[w].length===0||sets[w].every(x=>x.e));
    if(eAny&&!eAll){const noE=weeks.filter(w=>sets[w].length&&!sets[w].every(x=>x.e));flag(id,'Each-side flag inconsistent',`Day ${d} ${mv}: "/ side" missing in week(s) ${noE.join(', ')} but present in others`);}
    if(!cardio&&!eAny&&uni.test(mv)&&weeks.some(w=>sets[w].length)) flag(id,'Unilateral lift without "/ side"',`Day ${d} ${mv}`);
    // load type
    const loads=new Set(weeks.flatMap(w=>sets[w].map(x=>x.load)));
    const pct=[...loads].some(l=>/%$/.test(l));
    if(!cardio){
      if(/^BW\b/.test(mv)&&[...loads].some(l=>l&&l!=='BW')) flag(id,'Load type mismatch',`Day ${d} ${mv}: bodyweight lift prescribed with ${[...loads].join('/')}`);
      if(/^(DB|BB|Cable|Seated|Smith|Leg Press|Landmine|Trap Bar)\b/.test(mv)&&[...loads].some(l=>['BW','KB','MB'].includes(l))) flag(id,'Load type mismatch',`Day ${d} ${mv}: prescribed with ${[...loads].join('/')}`);
      if(/^(KB|Double KB)\b/.test(mv)&&pct) flag(id,'Load type mismatch',`Day ${d} ${mv}: KB lift prescribed as %`);
      if(/^MB\b/.test(mv)&&[...loads].some(l=>l!=='MB')) flag(id,'Load type mismatch',`Day ${d} ${mv}: ${[...loads].join('/')}`);
      if(/^(Pull-up|Parallel Bar Dip|Hanging|GHD Glute|Supine|Copenhagen|Hip )/i.test(mv)&&pct) flag(id,'Load type mismatch',`Day ${d} ${mv}: % on a bodyweight movement`);
    } else {
      if([...loads].some(l=>l==='BW')) flag(id,'Cardio stored with BW load',`Day ${d} ${act}`);
      const rests=new Set(weeks.flatMap(w=>sets[w].map(x=>x.rest)));
      [...rests].filter(x=>x!=null&&(x%15!==0||x>300)).forEach(x=>flag(id,'Odd cardio rest',`Day ${d} ${act} ${mv}: ${x} sec rest`));
    }
    // regression across weeks (top %)
    if(pct){const top=w=>Math.max(...sets[w].filter(x=>/%$/.test(x.load)).map(x=>parseFloat(x.load)));const avg=w=>{const a=sets[w].filter(x=>/%$/.test(x.load));return a.reduce((s,x)=>s+parseFloat(x.load),0)/a.length};
      const ws2=weeks.filter(w=>sets[w].length);
      for(let i=1;i<ws2.length;i++){const a=ws2[i-1],b=ws2[i];
        if(top(b)<top(a)||(avg(b)<avg(a)-0.01&&top(b)===top(a))){
          // ignore if rep target also changed upward meaningfully
          const repUp=Math.max(...sets[b].map(x=>x.hi))>Math.max(...sets[a].map(x=>x.hi));
          flag(id,'Load drops week to week',`Day ${d} ${mv}: week ${a} ${per[a]} → week ${b} ${per[b]}${repUp?' (reps go up)':''}`);}
        if(per[a]===per[b]&&i===ws2.length-1&&ws2.length>=3&&per[ws2[i-2]]!==per[a]) flag(id,'Progression stalls in final week',`Day ${d} ${mv}: week ${b} repeats week ${a} (${per[b]})`);
      }
      // within-session: % up while reps up
      ws2.forEach(w=>{const s=sets[w].filter(x=>/%$/.test(x.load));for(let i=1;i<s.length;i++){const p0=parseFloat(s[i-1].load),p1=parseFloat(s[i].load);if(p1>p0&&s[i].lo>s[i-1].lo){flag(id,'Load and reps both rise within a session',`Day ${d} ${mv} week ${w}: ${per[w]}`);break}
        if(p1<p0&&s[i].hi<s[i-1].hi){flag(id,'Load and reps both drop within a session',`Day ${d} ${mv} week ${w}: ${per[w]}`);break}}});
    }
    // odd rep ranges
    weeks.forEach(w=>sets[w].forEach(x=>{if(x.bad)flag(id,'Unparsed',`${mv} ${x.bad}`);else if(x.hi<x.lo)flag(id,'Bad range',`${mv} ${x.amt}`)}));
  }
  // slot gaps
  for(const [k,s] of Object.entries(slotWeeks)){const miss=[];for(let w=1;w<=weekCount;w++)if(!s.has(w))miss.push(w);if(miss.length&&!/cardio|interval|aerobic|steady|conditioning/i.test(k))flag(id,'Slot empty in some weeks',`${k} empty in week(s) ${miss.join(', ')}`);}
  Object.entries(dayMv).filter(([k,n])=>n>1).forEach(([k])=>flag(id,'Same lift twice in one day',k));
}
for(const id of Object.keys(out).sort((a,b)=>NAME[a].localeCompare(NAME[b]))){console.log(`\n#### ${NAME[id]} (${id})`);for(const [c,m] of Object.entries(out[id])){console.log(`  [${c}]`);m.forEach(x=>console.log('    - '+x))}}
