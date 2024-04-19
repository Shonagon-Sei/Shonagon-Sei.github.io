//import * as windows1251 from './windows-1251.mjs';
/// <reference lib="es2021" />
//Input//
var ip1 = document.getElementById('power');
var ip2 = document.getElementById('cn');
var ip3 = document.getElementById('race');
var ip4 = document.getElementById('shield');
var teb = document.getElementById('teb');
var nation = document.getElementById('ns');
//Effect//
var se = document.getElementById('se');
var se1 = document.getElementById('se_');
var seo = document.getElementById('seo');
var sec = document.getElementById('sec');

//Power//
var pw = document.getElementById('pw');
var pw1 = document.getElementById('pw1');

//Shield//
var sh1 = document.getElementById('sh');
var sh2 = document.getElementById('_sh');
var sh3 = document.getElementById('_sh1');

//Card Name//
var cn = document.getElementById('cns');
var cno = document.getElementById('cnso');
var cn_ = document.getElementById('cns_');
var cno_ = document.getElementById('cnso_')


//Race//
var rec = document.getElementById('rec');
var rec1 = document.getElementById('rec1');

var type = document.getElementById('cts');
var grade = document.getElementById('g');

var fselect = document.getElementById('fns');
var sselect = document.getElementById('sns');

var trigger = document.getElementById('trg_');
var trigger1 = document.getElementById('trg');

var encounter = document.getElementById('enc');
var dual = document.getElementById('dual')
var clan = document.getElementById('cl')


function CCUExport(){
  var fileName_ = prompt('Please Enter Card Number (If unsure just type in a placeholder text)')
  var strExport = `CardStat = ${fileName_}\n{\n`;
  strExport += `global.CardName[CardStat] = '${ip2.value}'\n`
  if (dual.checked){
    //fns sns
    strExport += `global.CardText[CardStat] = '${$("#fns option:selected").text()}/${$("#sns option:selected").text()}${((ip3.value != "") ? "/" : '')}${ip3.value}\n\n`
  }
  else
  {
    strExport += `global.CardText[CardStat] = '${((ns.value != 'nl') ? $("#ns option:selected").text() : "")}${((ns.value != 'nl' && encounter.checked != "") ? "/" : '')}${((encounter.checked) ? $("#clan option:selected").text() : "")}${((ns.value != 'nl' && ip3.value != "") ? "/" : '')}${ip3.value}\n\n`
  }

  /** @type{string}*/
  var effect = teb.value;
  var replacedEffect = effect
  replacedEffect = replacedEffect.replaceAll('(VC)', '[VC]');
  replacedEffect = replacedEffect.replaceAll('(RC)', '[RC]');
  replacedEffect = replacedEffect.replaceAll('(GC)', '[GC]');
  replacedEffect = replacedEffect.replaceAll('CB(', 'Counter Blast ');
  replacedEffect = replacedEffect.replaceAll('CC(', 'Counter Charge ');
  replacedEffect = replacedEffect.replaceAll('SB(', 'Soul Blast ');
  replacedEffect = replacedEffect.replaceAll('SC(', 'Soul Charge ');
  replacedEffect = replacedEffect.replaceAll('EB(', 'Energy Blast ');
  replacedEffect = replacedEffect.replaceAll('EC(', 'Energy Charge '); 
  replacedEffect = replacedEffect.replaceAll('GB', 'Generation Break '); 
  replacedEffect = replacedEffect.replaceAll('CB()', 'Counter Blast');
  replacedEffect = replacedEffect.replaceAll('CC()', 'Counter Charge');
  replacedEffect = replacedEffect.replaceAll('SB()', 'Soul Blast');
  replacedEffect = replacedEffect.replaceAll('SC()', 'Soul Charge');
  replacedEffect = replacedEffect.replaceAll('EB()', 'Energy Blast');
  replacedEffect = replacedEffect.replaceAll('EC()', 'Energy Charge'); 
  replacedEffect = replacedEffect.replaceAll('1)', '1')
  replacedEffect = replacedEffect.replaceAll('2)', '2')
  replacedEffect = replacedEffect.replaceAll('3)', '3')
  replacedEffect = replacedEffect.replaceAll('4)', '4')
  replacedEffect = replacedEffect.replaceAll('5)', '5')
  replacedEffect = replacedEffect.replaceAll('6)', '6')
  replacedEffect = replacedEffect.replaceAll('7)', '7')
  replacedEffect = replacedEffect.replaceAll('8)', '8')
  replacedEffect = replacedEffect.replaceAll('9)', '9')
  replacedEffect = replacedEffect.replaceAll('(', '[')
  replacedEffect = replacedEffect.replaceAll(')', ']')
  replacedEffect = replacedEffect.replaceAll("'", '');
  //replacedEffect = replacedEffect.replaceAll("'", '’');
  replacedEffect = replacedEffect.replaceAll("/i", '(');
  replacedEffect = replacedEffect.replaceAll("i/", ')');
  replacedEffect = replacedEffect.replaceAll("/*", '');
  replacedEffect = replacedEffect.replaceAll("*/", '');
  replacedEffect = replacedEffect.replaceAll("<<", '«');
  replacedEffect = replacedEffect.replaceAll(">>", '»');
  replacedEffect = replacedEffect.replaceAll("\n", '\n\n');

  strExport += replacedEffect + "'\n";
  strExport += `global.UnitGrade[CardStat] = ${grade.value.replaceAll('_' , '').replaceAll('P', '')}\n`
  
  if (dual.checked){
    //fns sns
    strExport += `global.DCards[CardStat] = ${nationId(fns.value)}\n}\n`
    strExport += `global.DCards2[CardStat] = ${nationId(sns.value)}\n}\n`
  }
  else
  {
    strExport += `global.DCards[CardStat] = ${nationId(nation.value)}\n}\n`
    if (nation.value === 'nl'){   
      strExport += `global.CardInClan[CardStat] = 25\n`
    }
  }

  if (encounter.checked){
    strExport += `global.CardInClan[CardStat] = ${clanId(clan.value)}\n`
  }
  
  
  if (grade.value.includes('P')){
    strExport += `global.PersonaRide[CardStat] = 1\n`
  }
  strExport += `global.PowerStat[CardStat] = ${ip1.value}\n`
  strExport += `global.DefensePowerStat[CardStat] = ${((ip4.value != '') ? ip4.value : '0')}\n`
  if (type.value === 'tu'){
    //order draw crit stand heal front over   
    strExport += `global.TriggerUnit[CardStat] = ${TriggerId(trigger1.value)}\n`
  }
  else if (type.value === 'gu')
  {
    strExport += `global.ExtraDeck[CardStat] = 1\n`
  }
  else if (type.value.includes('o')){
    if (nation.value === 'nl'){   
      strExport += `global.CardInClan2[CardStat] = 30\n`
    }else
    {
      strExport += `global.CardInClan[CardStat] = 30\n`
    }
  }

  //var test = windows1251.encode(strExport);
  //var test = encode(strExport);
  var test = strExport
  function download(content, fileName, contentType) {
    var a = document.createElement("a");
    var file = new Blob([content], {type: contentType});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
  }
  if (dual.checked){
    download(test, `${$("#fns option:selected").text()}.txt`, 'text/plain');
  }
  else{
    download(test, `${$("#ns option:selected").text()}.txt`, 'text/plain');
  }
  ccu_img(fileName_)
}

document.getElementById('ccu').addEventListener('click', CCUExport);

function ccu_img(fileName) {
  var d_ = document.getElementById('img_');



  d_.style.border = '0';

  //

  html2canvas(d_, { scale: 0.71230643846 ,backgroundColor: null}).then(function(canvas) {
    var image = new Image();
    image.src = canvas.toDataURL();

    var link = document.createElement('a');
    link.href = image.src;
    link.download = `n${fileName}.jpg`;
    link.click();

    d_.style.border = '';

    
  });

  html2canvas(d_, { scale: 0.17766911165 ,backgroundColor: null}).then(function(canvas) {
    var image = new Image();
    image.src = canvas.toDataURL();

    var link = document.createElement('a');
    link.href = image.src;
    link.download = `n${fileName}mini.jpg`;
    link.click();

    d_.style.border = '';

    
  });
}

String.prototype.replaceAt = function(index, replacement) {
  return this.substr(0, index) + replacement + this.substr(index + 1);
}

function nationId(nation){
  var n = 0
  switch(nation){
    case 'de':
      n = 1
      break
    case 'ds':
      n = 2
      break
    case 'ks':
      n = 3
      break
    case 'sc':
      n = 4
      break
    case 'bg':
      n = 5
      break
    case 'lm':
      n = 6
      break
    case 'nl':
      n = 8
      break
  }
  return n
}

function TriggerId(trigger){
  var t = 0
  switch(trigger){
    case 'crit':
      t = 2
      break
    case 'draw':
      t = 1
      break
    case 'heal':
      t = 4
      break
    case 'front':
      t = 5
      break
    case 'over':
      t = 6
      break
  }
  return t
}

function clanId(clan){
  var c = 0
  switch(clan){
    case 'ott':
      c = 10
      break
    case 'spd':
      c = 1
      break
    case 'rpd':
      c = 15
      break
    case 'gpd':
      c = 5
      break
    case 'agf':
      c = 16
      break
    case 'gns':
      c = 21
      break
    case 'dir':
      c = 11
      break
    case 'gcl':
      c = 26
      break
    case 'spk':
      c = 14
      break
    case 'plm':
      c = 18
      break
    case 'dmp':
      c = 6
      break
    case 'ljk':
      c = 24
      break
    case 'nvg':
      c = 4
      break
    case 'kgr':
      c = 12
      break
    case 'mrk':
      c = 20
      break
    case 'nrk':
      c = 19
      break
    case 'nub':
      c = 23
      break
    case 'tcz':
      c = 17
      break
    case 'grn':
      c = 7
      break
    case 'mcl':
      c = 2
      break
    case 'neo':
      c = 9
      break
    case 'bmt':
      c = 13
      break
    case 'gbl':
      c = 8
      break
    case 'aqf':
      c = 3
      break    
  }
  return c
}

