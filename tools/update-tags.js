// Rebuilds the equipment and goal tags for every program and writes them into site/index.html.
// Run: node tools/update-tags.js
const {execFileSync}=require('child_process'),fs=require('fs'),path=require('path');
const T=__dirname,page=path.join(T,'..','site','index.html');
execFileSync('node',[path.join(T,'equipment.js')]);execFileSync('node',[path.join(T,'goals.js')]);
let h=fs.readFileSync(page,'utf8');
const eq=fs.readFileSync(path.join(T,'equip.json'),'utf8'),go=fs.readFileSync(path.join(T,'goals.json'),'utf8');
h=h.replace(/const EQUIP=\{[\s\S]*?\};\n/,()=>'const EQUIP='+eq+';\n').replace(/const GOALS=\{[\s\S]*?\};\n/,()=>'const GOALS='+go+';\n');
fs.writeFileSync(page,h);fs.unlinkSync(path.join(T,'equip.json'));fs.unlinkSync(path.join(T,'goals.json'));
console.log('Equipment and goal tags updated for',Object.keys(JSON.parse(eq)).length,'programs.');
