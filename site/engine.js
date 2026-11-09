/* Turns raw Volt rows into the program-card structure used by the page.
   Row: [day, activityName, "W"|"C", grouping, movementNum, movementName, "wk:set,set|wk:set,..."]
   Set token: "<load>~<amount>[e][r<rest>]"  e.g. "65%~6-8e", "BW~10-20", "~90sr90" */
(function(root){
const LETTERS="ABCDEFGHIJKLMNOP";
function parseSet(t){
  const m=t.match(/^(.*?)~(.*?)(e?)(?:r(\d+))?$/);
  if(!m) return {load:"",amt:t,e:false,rest:null,key:t};
  return {load:m[1],amt:m[2],e:m[3]==="e",rest:m[4]!=null?+m[4]:null,key:t};
}
const dash=s=>s.replace(/-/g,"–");
function fmtTime(sec){sec=+sec; if(sec>=60&&sec%60===0) return (sec/60)+" min"; return sec+" sec";}
function fmtAmt(a){
  if(/^\d+(-\d+)?m$/.test(a)) return dash(a.slice(0,-1))+" m";
  if(/^\d+s$/.test(a)) return fmtTime(a.slice(0,-1));
  return dash(a);
}
function fmtLoad(l){ if(!l) return ""; if(l==="0%") return "BW"; if(l==="CARDIO") return ""; if(/^BAND$/i.test(l)) return "Band"; if(/^PLATE$/i.test(l)) return "Plate"; return l; }
function fmtSets(sets){
  if(!sets.length) return "No sets saved in the program";
  const allE=sets.every(s=>s.e);
  const runs=[];
  sets.forEach(s=>{const k=s.load+"|"+s.amt; const last=runs[runs.length-1]; if(last&&last.k===k) last.n++; else runs.push({k,n:1,s});});
  const uniform=runs.length===1;
  const parts=runs.map(r=>{
    const load=fmtLoad(r.s.load), amt=fmtAmt(r.s.amt);
    const effort=/^(HARD|EASY)$/i.test(load);
    const body=effort?`${/^\d+$/.test(r.s.amt)?fmtTime(r.s.amt):amt} ${load.toUpperCase()}`:load?`${load} x ${amt}`:amt;
    return (r.n>1||uniform&&r.n>1)?`${r.n} x ${body}`:body;
  });
  return parts.join(", ")+(allE?" / side":"");
}
function fmtCond(name,sets){
  if(!sets.length) return name;
  const tag=/\[hard\]/i.test(name)?"HARD":/\[easy\]/i.test(name)?"EASY":/\[mod/i.test(name)?"MODERATE":null;
  const restLbl=tag==="HARD"?"EASY":"OFF";
  const runs=[];
  sets.forEach((s,i)=>{
    const rest=i===sets.length-1?null:s.rest; // rest after the last effort doesn't define the interval
    const last=runs[runs.length-1];
    if(last&&last.amt===s.amt&&(rest===null||last.rest===rest)) last.n++;
    else runs.push({amt:s.amt,rest:rest,n:1,load:s.load});
  });
  return runs.map(r=>{
    const work=fmtAmt(r.amt)+(tag?` ${tag}`:(r.rest?" ON":(r.n===1?"":"")));
    const restTxt=r.rest?` / ${fmtTime(r.rest)} ${restLbl}`:"";
    return `${r.n>1?r.n+" x ":""}${work}${restTxt}`;
  }).join(", then ");
}
function isCardio(row){ return row[2]==="C"||(/^(.*cardio.*|.*endurance|.*interval.*|.*aerobic.*|steady state.*)$/i.test(row[1].trim())&&!/circuit|metabolic/i.test(row[1])); }

function build(rows,weekLabels){
  const items=rows.map(r=>{
    const wk={}; let prev=[];
    (r[6]||"").split("|").forEach(seg=>{ if(!seg) return; const i=seg.indexOf(":"); const w=+seg.slice(0,i); const body=seg.slice(i+1);
      if(body==="="){wk[w]=prev;return}
      const sets=[]; if(body) body.split(",").forEach(t=>{const m=t.match(/^(\d+)\*(.*)$/); if(m){for(let k=0;k<+m[1];k++) sets.push(parseSet(m[2]));} else sets.push(parseSet(t));});
      wk[w]=sets; prev=sets; });
    return {day:r[0],act:r[1].replace(/\s+/g," ").trim(),st:r[2],g:r[3],m:r[4],name:r[5],cardio:isCardio(r),wk};
  });
  const nWeeks=Math.max(...items.flatMap(it=>Object.keys(it.wk).map(Number)));
  const weeks=[...Array(nWeeks)].map((_,i)=>i+1);
  const liftItems=items.filter(it=>!it.cardio), condItems=items.filter(it=>it.cardio);
  // group weeks with identical lifting lineups (conditioning changes are shown as progression instead)
  const sig=w=>liftItems.filter(it=>w in it.wk).map(it=>`${it.day}|${it.act}|${it.g}|${it.m}|${it.name}`).join("#");
  const groups=[];
  weeks.forEach(w=>{const s=sig(w); const g=groups.find(x=>x.sig===s); if(g) g.weeks.push(w); else groups.push({sig:s,weeks:[w]});});
  const multi=groups.length>1;
  function condText(d,w,hasLifts){
    const cs=condItems.filter(c=>c.day===d&&(w in c.wk));
    if(!cs.length) return "";
    const acts=[...new Set(cs.map(c=>c.act))];
    return acts.map(a=>{
      const ca=cs.filter(c=>c.act===a);
      const gs=[...new Set(ca.map(c=>c.g))];
      const body=gs.map(g=>{
        const cg=ca.filter(c=>c.g===g);
        const hard=cg.find(c=>/\[hard\]/i.test(c.name)), easy=cg.find(c=>/\[easy\]/i.test(c.name));
        if(cg.length===2&&hard&&easy&&hard.wk[w].length===easy.wk[w].length&&hard.wk[w].length){
          const n=hard.wk[w].length;
          return `${n>1?n+" x ":""}${fmtAmt(hard.wk[w][0].amt)} HARD / ${fmtAmt(easy.wk[w][0].amt)} EASY`;
        }
        // several efforts done in sequence each round (e.g. EASY → HARD → EASY → HARD)
        const ns=cg.map(c=>c.wk[w].length);
        if(cg.length>2&&ns[0]>0&&ns.every(n=>n===ns[0])){
          const tag=c=>/\[hard\]/i.test(c.name)?"HARD":/\[easy\]/i.test(c.name)?"EASY":"";
          const parts=cg.map(c=>`${fmtAmt(c.wk[w][0].amt)}${tag(c)?" "+tag(c):""}`);
          const restAfter=cg[cg.length-1].wk[w][0].rest;
          return `${ns[0]} rounds of ${parts.join(" → ")}${restAfter>15?`, ${fmtTime(restAfter)} rest between rounds`:""}`;
        }
        return cg.map(c=>fmtCond(c.name,c.wk[w])).join(", then ");
      }).join(", then ");
      const named=hasLifts||acts.length>1||!/^cardio$/i.test(a.trim());
      return (named?`${titleCase(a)}: `:"")+body;
    }).join(" · ");
  }
  /* AAA/BBB-style programs (each rotation is a run of consecutive weeks) are labelled Block A / Block B; A/B/A/B programs stay Week A / Week B. */
  const blockMode=multi&&groups.every(g=>g.weeks.length>1&&g.weeks.every((w,i)=>i===0||w===g.weeks[i-1]+1));
  const blocks=groups.map((grp,gi)=>{
    const inBlock=it=>grp.weeks.some(w=>w in it.wk);
    const its=liftItems.filter(it=>grp.weeks[0] in it.wk);
    const first=grp.weeks[0];
    const rx=(it,w)=>fmtSets(it.wk[w]);
    const varies=it=>new Set(grp.weeks.map(w=>rx(it,w))).size>1;
    const dayNums=[...new Set([...its.map(i=>i.day),...condItems.filter(inBlock).map(c=>c.day)])].sort((a,b)=>a-b);
    const condProg=[];
    const days=dayNums.map(d=>{
      const lifts=its.filter(i=>i.day===d);
      const actNames=[...new Set(lifts.map(i=>i.act))];
      const title=actNames.length?actNames.join(" + "):"Cardio";
      const keys=[];lifts.forEach(i=>{const k=i.act+"|"+i.g; if(!keys.includes(k)) keys.push(k);});
      const ex=lifts.map(i=>{
        const L=LETTERS[keys.indexOf(i.act+"|"+i.g)]||"?";
        const idx=lifts.filter(j=>j.act===i.act&&j.g===i.g).indexOf(i)+1;
        return [L+idx,i.name+(varies(i)?"*":""),rx(i,first)];
      });
      const perWeek=grp.weeks.map(w=>condText(d,w,lifts.length>0));
      const cVaries=new Set(perWeek).size>1;
      if(cVaries) condProg.push({label:`Day ${d} conditioning`,vals:perWeek});
      const shown=perWeek.find(Boolean)||"";
      return [`${d} ${titleCase(title)}`,shown+(cVaries?"*":""),ex];
    });
    // progression
    const prog=[];
    const addRow=(label,vals)=>{
      const cells=[];const seen=[];
      vals.forEach((v,k)=>{v=v||"—"; const j=seen.indexOf(v); cells.push(j>=0&&k>0?`Same as Week ${grp.weeks[j]}`:v); seen.push(v);});
      const keyCells=cells.join("§");
      const ex=prog.find(p=>p.key===keyCells);
      if(ex) ex.label+=" · "+label; else prog.push({label,key:keyCells,cells});
    };
    its.filter(varies).forEach(it=>addRow(it.name,grp.weeks.map(w=>rx(it,w))));
    condProg.forEach(c=>addRow(c.label,c.vals));
    const title=multi?`${blockMode?"Block":"Week"} ${LETTERS[gi]}`:"All weeks";
    return {title,sub:`Week${grp.weeks.length>1?"s":""} ${grp.weeks.join(" / ")}`,days,
      progression:prog.length?{title:`Progression · ${title}`,cols:["Lift",...grp.weeks.map(w=>`Week ${w}${weekLabels&&weekLabels[w-1]?" · "+weekLabels[w-1]:""}`)],rows:prog.map(p=>[p.label,...p.cells])}:null};
  });
  const maxOf=f=>Math.max(...blocks.map(b=>f(b.days)));
  const nDays=maxOf(ds=>ds.length), liftDays=maxOf(ds=>ds.filter(d=>d[2].length).length), condCount=maxOf(ds=>ds.filter(d=>d[1]).length);
  return {
    nWeeks,
    facts:[`${nWeeks} weeks`,`${nDays} days/week`,`${liftDays} lifts / ${condCount} conditioning`],
    notes:[
      "All % = % of estimated 1RM.",
      multi?`The program runs ${blocks.length} ${blockMode?"blocks":"rotations"}: ${blocks.map(b=>`${b.title} in ${b.sub.toLowerCase()}`).join(", ")}.`:"The same exercises run every week.",
      `Starred lifts change load or reps week to week; the first week of each ${blockMode?"block":"rotation"} is shown. See progression.`
    ],
    blocks:blocks.map(b=>({title:b.title,sub:b.sub,days:b.days})),
    progressions:blocks.map(b=>b.progression).filter(Boolean)
  };
}
function tidy(s){return s.replace(/\s+—\s+/g," – ").trim();}
function titleCase(s){
  if(/[a-z]/.test(s)) return tidy(s);
  return tidy(s).toLowerCase().replace(/\b([a-z])/g,c=>c.toUpperCase()).replace(/\b(Kb|Db|Bb|Mb|Bw|Ppl|Rdl)\b/g,m=>m.toUpperCase()).replace(/\s*\/\s*/g,"/");
}
root.buildProgram=build;
})(typeof window!=="undefined"?window:globalThis);
