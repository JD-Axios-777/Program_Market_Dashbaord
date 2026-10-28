const fs=require('fs');global.window={};const path=require('path');const dir=path.join(__dirname,'..','site');const h=fs.readFileSync(dir+'/index.html','utf8');
for(const f of fs.readdirSync(dir+'/data'))eval(fs.readFileSync(dir+'/data/'+f,'utf8'));
const D=eval('('+h.match(/const DETAILS=(\{[\s\S]*?\n\});/)[1]+')');
const P=eval(h.match(/const PROGRAMS=(\[[\s\S]*?\]);/)[1]);
const RULES=[
 ['Barbell',/^BB\b|Landmine/],
 ['Dumbbell',/^DB\b|^GHD DB/],
 ['Kettlebell',/\bKB\b/],
 ['Cable',/^Cable\b|^Lat Pulldown/],
 ['Weight Machines',/^Seated (Chest|Lat|Leg|Machine|Overhead Press|Single-Leg)|^Leg Press|Smith Machine|^Single-Leg Seated Leg Extension/],
 ['Med ball',/^MB\b/],
 ['Band',/^Band\b/],
 ['Pull-up Bar',/pull-?up|Hanging|Active Hang/i],
 ['Glute-Ham Developer',/^GHD\b/],
 ['Incline Bench',/Incline|Chest-Supported|Head-Supported/],
 ['Bench',/^(BB|DB)( Pause)? (Bench|Close-Grip Bench)|^DB One-Arm Bench|Lying Triceps|^DB One-Arm Row$|RFE|^DB Seated(?! Incline)|^DB (Step-up)|Explosive (Lateral )?Step-up|Decline Push-up|from Bench/],
 ['Squat rack',/^BB (Pause |Tempo |Quasi-Iso |Box )?(Back )?Squat|^BB Box Squat|^BB Standing Press|^BB (Pause )?(Incline )?Bench|^BB Close-Grip (Incline )?Bench|^BB Pause Incline|^BB (Split )?Good-morning|^(Pause )?Supine Row|Rack Triceps/],
 ['Trap bar',/Trap Bar/],
 ['Landmine',/Landmine/],
 ['Dip Bar',/Parallel Bar Dip/],
];
const OTHER=[['Sled',/Sled/],['Suspension trainer',/Suspension/],['Weight plate',/^Plate\b|Weighted Straddle/],['Stability ball',/^SB\b/],['Plyo box',/Box Jump/]];
function equipFor(name){const e=RULES.filter(([,re])=>re.test(name)).map(([k])=>k);const o=OTHER.filter(([,re])=>re.test(name)).map(([k])=>k);return [e,o]}
const names=new Map();
const out={};
for(const p of P){const id=p[1];let list=null;
 if(window.RAW[id])list=window.RAW[id].filter(r=>!(r[2]==='C'||/cardio|endurance|interval|aerobic|steady state/i.test(r[1]))&&r[6].split('|').some(x=>x.split(':')[1]!==undefined)).map(r=>r[5]);
 else if(D[id])list=D[id].blocks.flatMap(b=>b.days.flatMap(d=>d[2].map(e=>e[1].replace(/\*$/,''))));
 if(!list)continue;const E=new Set(),O=new Set();
 for(const n of list){const [e,o]=equipFor(n);e.forEach(x=>E.add(x));o.forEach(x=>O.add(x));names.set(n,e.concat(o.map(x=>'+'+x)))}
 const order=RULES.map(r=>r[0]);out[id]=[order.filter(x=>E.has(x)),[...O]];}
fs.writeFileSync(path.join(__dirname,'equip.json'),JSON.stringify(out));
if(process.argv[2]==='names')for(const [n,e] of [...names].sort())console.log(n.padEnd(55),e.join(', ')||'—');
else for(const p of P)console.log(p[0].padEnd(38),out[p[1]]?out[p[1]][0].join(', ')+(out[p[1]][1].length?'  | also: '+out[p[1]][1].join(', '):''):'(no data)');
