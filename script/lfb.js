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
var tc = cn.textContent;

//Race//
var rec = document.getElementById('rec');
var rec1 = document.getElementById('rec1');

var type = document.getElementById('cts');
var grade = document.getElementById('g');

//Power | Update//
ip1.addEventListener('input', function() {
  pw.textContent = ip1.value;
  pw1.textContent = ip1.value;  
});

//Card Name | Update//
ip2.addEventListener('input', function() {
  var tpx = ip2.value.length * 8;
  var tpx_ = "";
  var scl = "220";
  var _sc_ = 1;

  if (tpx > 220) {
    tpx_ = (tpx - 200)/400;
    scl = 250 + (tpx - 200)/.4
    _sc_ = 1.08 - tpx_;
  }

  cn.textContent = ip2.value;

  cn.style.transform = "scaleX(" + _sc_ + ")" + "scaleY(1) translate(0, 3px) skewX(-18deg)";
  cn.style.width = scl + "px";
  cno.textContent = ip2.value;

  cno.style.transform = "scaleX(" + _sc_ + ")" + "scaleY(1) translate(0, 3px) skewX(-18deg)";
  cno.style.width = scl + "px";
  console.log(tpx_);
});

//Race | Update//
ip3.addEventListener('input', function() {
  rec1.textContent = ip3.value;
  rec.textContent = ip3.value;
  var enrace1 = document.getElementById('enrec');
  var enraceinner1 = document.getElementById('enrec1');
  enrace1.textContent = ip3.value;
  enraceinner1.textContent = ip3.value;
});

//Card Effect | Update//
teb.addEventListener('input', function() {
  
  
  /** @type{string}*/
  var effect = teb.value;

  effect = effect.replaceAll('<<', '&#12298;')
  effect = effect.replaceAll('>>', '&#12299;')

  while (effect.indexOf('<') != -1){

    if(effect.indexOf('>') == -1){
      break;
    }
    var newString = ""
    var index = effect.indexOf('<') + 1;
    while(effect.charAt(index) != '>'){
      newString += effect.charAt(index);
      effect = effect.replaceAt(index, '')
    }
    effect = effect.replaceAt(index, '')
    effect = effect.replaceAt(effect.indexOf('<'), `《span class=\'quitt\'》&lt;《/span》${newString}《span class=\'quitt\'》&gt;《/span》`);   
  }
  

  
  effect = effect.replaceAll('《', '<')
  effect = effect.replaceAll('》', '>')
  
  
  
  
  //Box Icons
  effect = effect.replaceAll('AUTO', '<span class=\'image-wrapper\'><img src=\'assets/AUTO.png\' alt=\'Image\' class=\'skill\' id=\'auto\'></span>');
  effect = effect.replaceAll('ACT', '<span class=\'image-wrapper\'><img src=\'assets/ACT.png\' alt=\'Image\' class=\'skill\' id=\'auto\'></span>');
  effect = effect.replaceAll('CONT', '<span class=\'image-wrapper\'><img src=\'assets/CONT.png\' alt=\'Image\' class=\'skill\' id=\'auto\'></span>');
  effect = effect.replaceAll('Stand', '<span class=\'image-wrapper\'><img src=\'assets/Stand Icon.png\' alt=\'Image\' class=\'skill\' id=\'auto\'></span>');
  effect = effect.replaceAll('Rest', '<span class=\'image-wrapper\'><img src=\'assets/Rest Icon.png\' alt=\'Image\' class=\'skill\' id=\'auto\'></span>');
  effect = effect.replaceAll('1/Turn', '<span class=\'image-wrapper\'><img src=\'assets/1 per turn.png\' alt=\'Image\' class=\'skill\' id=\'auto\'></span>');
  effect = effect.replaceAll('1/Fight', '<span class=\'image-wrapper\'><img src=\'assets/1 per fight.png\' alt=\'Image\' class=\'skill\' id=\'auto\'></span>');
  effect = effect.replaceAll('Critical Trigger', '<span class=\'image-wrapper\'><img src=\'assets/Trigger Crit mini icon.png\' alt=\'Image\' class=\'skill\' id=\'auto\'></span>');
  effect = effect.replaceAll('Draw Trigger', '<span class=\'image-wrapper\'><img src=\'assets/Trigger Draw mini icon.png\' alt=\'Image\' class=\'skill\' id=\'auto\'></span>');
  effect = effect.replaceAll('Heal Trigger', '<span class=\'image-wrapper\'><img src=\'assets/Trigger Heal mini icon.png\' alt=\'Image\' class=\'skill\' id=\'auto\'></span>');
  effect = effect.replaceAll('Front Trigger', '<span class=\'image-wrapper\'><img src=\'assets/Trigger Front mini icon-29.png\' alt=\'Image\' class=\'skill\' id=\'auto\'></span>');
  effect = effect.replaceAll('Over Trigger', '<span class=\'image-wrapper\'><img src=\'assets/Trigger Over mini icon.png\' alt=\'Image\' class=\'skill\' id=\'auto\'></span>');

  //Specific
  effect = effect.replaceAll('Regalis Piece', '<span class=\'image-wrapper\'><img src=\'assets/Regalis Piece Icon.png\' alt=\'Image\' class=\'skill\' id=\'auto\'></span>');
  effect = effect.replaceAll('Revoldress', '<span class=\'image-wrapper\'><img src=\'assets/RevolDress Icon.png\' alt=\'Image\' class=\'skill\' id=\'auto\'></span>');
  effect = effect.replaceAll('Overdress', '<span class=\'image-wrapper\'><img src=\'assets/o-Dress icon EN.png\' alt=\'Image\' class=\'skill\' id=\'auto\'></span>');
  effect = effect.replaceAll('Divine Skill', '<span class=\'image-wrapper\'><img src=\'assets/Divine.png\' alt=\'Image\' class=\'mskill\' id=\'auto\'></span>');
  effect = effect.replaceAll('Stride', '<span class=\'image-wrapper\'><img src=\'assets/Stride EN.png\' alt=\'Image\' class=\'mskill\' id=\'auto\'></span>');

  //Power Shield Critical
  var encounter = document.getElementById('enc');
  if (encounter.checked){
    effect = effect.replaceAll('Power', '<span class=\'image-wrapper\'><img src=\'assets/Power Icon.png\' alt=\'Image\' class=\'evalue\' id=\'auto\'></span>');
    effect = effect.replaceAll('Shield', '<span class=\'image-wrapper\'><img src=\'assets/Shield Icon.png\' alt=\'Image\' class=\'evalue\' id=\'auto\'></span>');
    effect = effect.replaceAll('Critical', '<span class=\'image-wrapper\'><img src=\'assets/Critical Icon.png\' alt=\'Image\' class=\'evalue\' id=\'auto\'></span>');
  }
  else{
    effect = effect.replaceAll('Power', '<span class=\'image-wrapper\'><img src=\'assets/Power Icon.png\' alt=\'Image\' class=\'value\' id=\'auto\'></span>');
    effect = effect.replaceAll('Shield', '<span class=\'image-wrapper\'><img src=\'assets/Shield Icon.png\' alt=\'Image\' class=\'value\' id=\'auto\'></span>');
    effect = effect.replaceAll('Critical', '<span class=\'image-wrapper\'><img src=\'assets/Critical Icon.png\' alt=\'Image\' class=\'value\' id=\'auto\'></span>');
  }
  
  
  //Circles
  effect = effect.replaceAll('VC', '<span class=\'image-wrapper\'><img src=\'assets/VC.png\' alt=\'Image\' class=\'circle\' id=\'auto\'></span>');
  effect = effect.replaceAll('RC', '<span class=\'image-wrapper\'><img src=\'assets/RC.png\' alt=\'Image\' class=\'circle\' id=\'auto\'></span>');
  effect = effect.replaceAll('GC', '<span class=\'image-wrapper\'><img src=\'assets/GC.png\' alt=\'Image\' class=\'circle\' id=\'auto\'></span>');
  effect = effect.replaceAll('COST', '<span class=\'image-wrapper\'><img src=\'assets/COST.png\' alt=\'Image\' class=\'circle\' id=\'auto\'></span>');

  effect = effect.replaceAll('EB(1)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/EB1.png\' alt=\'Image\' class=\'circle\' id=\'auto\'></span>');
  effect = effect.replaceAll('EB(2)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/EB2.png\' alt=\'Image\' class=\'circle\' id=\'auto\'></span>');
  effect = effect.replaceAll('EB(3)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/EB3.png\' alt=\'Image\' class=\'circle\' id=\'auto\'></span>');
  effect = effect.replaceAll('EB(4)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/EB4.png\' alt=\'Image\' class=\'circle\' id=\'auto\'></span>');
  effect = effect.replaceAll('EB(5)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/EB5.png\' alt=\'Image\' class=\'circle\' id=\'auto\'></span>');
  effect = effect.replaceAll('EB(6)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/EB6.png\' alt=\'Image\' class=\'circle\' id=\'auto\'></span>');
  effect = effect.replaceAll('EB(7)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/EB7.png\' alt=\'Image\' class=\'circle\' id=\'auto\'></span>');
  effect = effect.replaceAll('EB(8)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/EB8.png\' alt=\'Image\' class=\'circle\' id=\'auto\'></span>');
  effect = effect.replaceAll('EB(9)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/EB9.png\' alt=\'Image\' class=\'circle\' id=\'auto\'></span>');

  effect = effect.replaceAll('EC(1)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/EC1.png\' alt=\'Image\' class=\'circle\' id=\'auto\'></span>');
  effect = effect.replaceAll('EC(2)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/EC2.png\' alt=\'Image\' class=\'circle\' id=\'auto\'></span>');
  effect = effect.replaceAll('EC(3)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/EC3.png\' alt=\'Image\' class=\'circle\' id=\'auto\'></span>');
  effect = effect.replaceAll('EC(4)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/EC4.png\' alt=\'Image\' class=\'circle\' id=\'auto\'></span>');
  effect = effect.replaceAll('EC(5)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/EC5.png\' alt=\'Image\' class=\'circle\' id=\'auto\'></span>');
  effect = effect.replaceAll('EC(6)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/EC6.png\' alt=\'Image\' class=\'circle\' id=\'auto\'></span>');
  effect = effect.replaceAll('EC(7)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/EC7.png\' alt=\'Image\' class=\'circle\' id=\'auto\'></span>');
  effect = effect.replaceAll('EC(8)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/EC8.png\' alt=\'Image\' class=\'circle\' id=\'auto\'></span>');
  effect = effect.replaceAll('EC(9)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/EC9.png\' alt=\'Image\' class=\'circle\' id=\'auto\'></span>');

  effect = effect.replaceAll('CB(1)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/CB1.png\' alt=\'Image\' class=\'circle\' id=\'auto\'></span>');
  effect = effect.replaceAll('CB(2)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/CB2.png\' alt=\'Image\' class=\'circle\' id=\'auto\'></span>');
  effect = effect.replaceAll('CB(3)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/CB3.png\' alt=\'Image\' class=\'circle\' id=\'auto\'></span>');
  effect = effect.replaceAll('CB(4)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/CB4.png\' alt=\'Image\' class=\'circle\' id=\'auto\'></span>');
  effect = effect.replaceAll('CB(5)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/CB5.png\' alt=\'Image\' class=\'circle\' id=\'auto\'></span>');

  effect = effect.replaceAll('CC(1)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/CC1.png\' alt=\'Image\' class=\'circle\' id=\'auto\'></span>');
  effect = effect.replaceAll('CC(2)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/CC2.png\' alt=\'Image\' class=\'circle\' id=\'auto\'></span>');
  effect = effect.replaceAll('CC(3)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/CC3.png\' alt=\'Image\' class=\'circle\' id=\'auto\'></span>');
  effect = effect.replaceAll('CC(4)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/CC4.png\' alt=\'Image\' class=\'circle\' id=\'auto\'></span>');
  effect = effect.replaceAll('CC(5)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/CC5.png\' alt=\'Image\' class=\'circle\' id=\'auto\'></span>');

  effect = effect.replaceAll('SB(1)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/SB1.png\' alt=\'Image\' class=\'circle\' id=\'auto\'></span>');
  effect = effect.replaceAll('SB(2)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/SB2.png\' alt=\'Image\' class=\'circle\' id=\'auto\'></span>');
  effect = effect.replaceAll('SB(3)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/SB3.png\' alt=\'Image\' class=\'circle\' id=\'auto\'></span>');
  effect = effect.replaceAll('SB(4)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/SB4.png\' alt=\'Image\' class=\'circle\' id=\'auto\'></span>');
  effect = effect.replaceAll('SB(5)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/SB5.png\' alt=\'Image\' class=\'circle\' id=\'auto\'></span>');
  effect = effect.replaceAll('SB(6)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/SB6.png\' alt=\'Image\' class=\'circle\' id=\'auto\'></span>');
  effect = effect.replaceAll('SB(7)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/SB7.png\' alt=\'Image\' class=\'circle\' id=\'auto\'></span>');
  effect = effect.replaceAll('SB(8)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/SB8.png\' alt=\'Image\' class=\'circle\' id=\'auto\'></span>');
  effect = effect.replaceAll('SB(9)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/SB9.png\' alt=\'Image\' class=\'circle\' id=\'auto\'></span>');

  effect = effect.replaceAll('SC(1)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/SC1.png\' alt=\'Image\' class=\'circle\' id=\'auto\'></span>');
  effect = effect.replaceAll('SC(2)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/SC2.png\' alt=\'Image\' class=\'circle\' id=\'auto\'></span>');
  effect = effect.replaceAll('SC(3)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/SC3.png\' alt=\'Image\' class=\'circle\' id=\'auto\'></span>');
  effect = effect.replaceAll('SC(4)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/SC4.png\' alt=\'Image\' class=\'circle\' id=\'auto\'></span>');
  effect = effect.replaceAll('SC(5)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/SC5.png\' alt=\'Image\' class=\'circle\' id=\'auto\'></span>');
  effect = effect.replaceAll('SC(6)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/SC6.png\' alt=\'Image\' class=\'circle\' id=\'auto\'></span>');
  effect = effect.replaceAll('SC(7)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/SC7.png\' alt=\'Image\' class=\'circle\' id=\'auto\'></span>');
  effect = effect.replaceAll('SC(8)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/SC8.png\' alt=\'Image\' class=\'circle\' id=\'auto\'></span>');
  effect = effect.replaceAll('SC(9)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/SC9.png\' alt=\'Image\' class=\'circle\' id=\'auto\'></span>');

  effect = effect.replaceAll('/*', '<span class=\'red-text\'>');
  effect = effect.replaceAll('*/', '</span>');

  
  /*
  effect = effect.replaceAll('[', '<span class=\'under-line\'>[');
  effect = effect.replaceAll(']', ']</span>');
  */
  //fcm
  if (encounter.checked){
    effect = effect.replaceAll('"', '<span class=\'equote\'>"</span>');
  }
  else{
    effect = effect.replaceAll('"', '<span class=\'quote\'>"</span>');
  }
  

  //【
  effect = effect.replaceAll('(', '<span class=\'image-wrapper\'><img src=\'assets/LSB.png\' alt=\'Image\' class=\'brack\' id=\'auto\'></span>');
  effect = effect.replaceAll(')', '<span class=\'image-wrapper\'><img src=\'assets/RSB.png\' alt=\'Image\' class=\'brack\' id=\'auto\'></span>');
  
  effect = effect.replaceAll('/i', '<span class=\'italic\'>(');
  effect = effect.replaceAll('i/', ')</span>');

  se.innerHTML = effect;
  seo.innerHTML = effect;

  var eb = document.getElementById('eb');
    
  if (type.value === 'tu' || type.value === 'nu')
  {
    const linesCount = Math.round((se.offsetHeight / 16))
    
    if (encounter.checked){
      eb.src = `assets/textbox/etextbox_${linesCount}.png`
      se.style.color = "#FFFFFF"
    }else{
      eb.src = `assets/textbox/textbox_${linesCount}.png`
      se.style.color = "#000000"
    }
    
  }
  else if(type.value === 'gu')
  {
    const linesCount = Math.round((se.offsetHeight / 16));    
    eb.src = `assets/textbox/etextbox_${linesCount}.png`
    se.style.color = "#FFFFFF"
  }
  else
  {
    const linesCount = Math.round((seo.offsetHeight / 16));
    eb.src = `assets/textbox/otextbox_${linesCount}.png`
  }
  
});

function overDress()
{
  var checkBox = document.getElementById("oD");
  // Get the output text
  var img = document.getElementById("frame");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
    img.src = "assets/OverDress Frame Remastered.png"
  } else {
    img.src = "assets/none_.png"
  }
}

function SP(){
  var checkBox = document.getElementById("sp");
  var eb = document.getElementById("eb");
  var se = document.getElementById("se");

  if (checkBox.checked == true){
    eb.style.display = 'none'
    se.classList.add('SP')
  } else {
    eb.style.display = 'flex'
    se.classList.remove('SP')
  }
}

//Shield | Update//
ip4.addEventListener('input', function() {
  var sh_ = ip4.value;
  var sv = parseInt(sh_);
  var src = "assets/none_.png";

  sh2.textContent = ip4.value;
  sh3.textContent = ip4.value;  
  
  if (sv === 0) {
    src = "assets/ssh.png";
  }
  else if (sv > 0 ) {
    src = "assets/nsh.png";
  }
  else if (sv < 0 ) {
    src = "assets/none_.png";
  }

  sh1.src = src;
  
});


class savefile{
  constructor(){
    this.name
    this.power
    this.type
    this.nation
    this.shield
    this.effect
    this.grade
    this.nation
    this.race
  }
}

function save() {
  var save = new savefile();
  save.name = cn.textContent;
  save.power = ip1.value;
  save.type = type.value;
  save.nation = nation.value;
  save.shield = ip4.value;
  save.effect = teb.value;
  save.grade = grade.value;
  save.race = ip3.value;

  var jsonData = JSON.stringify(save);

  function download(content, fileName, contentType) {
    var a = document.createElement("a");
    var file = new Blob([content], {type: contentType});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
  }
  download(jsonData, 'save.json', 'text/plain');
}

document.getElementById('save').addEventListener('click', save);

//Type//
function load(){
  var input = document.createElement('input');
  input.type = 'file';

  input.onchange = e => { 

    // getting a hold of the file reference
    var file = e.target.files[0]; 
 
    // setting up the reader
    var reader = new FileReader();
    reader.readAsText(file,'UTF-8');
 
    // here we tell the reader what to do when it's done reading...
    reader.onload = readerEvent => {
      var content = readerEvent.target.result; // this is the content!
      console.log( content );
      var savefiles = JSON.parse(content)

      console.log( savefiles.name );

      cn.textContent = savefiles.name;
      ip1.value = savefiles.power;
      type.value = savefiles.type;
      nation.value = savefiles.nation;
      ip4.value = savefiles.shield;
      teb.value = savefiles.effect;
      grade.value = savefiles.grade;
      ip3.value = savefiles.race;
      
      var types = document.getElementById('cts');
      types.dispatchEvent(new Event('change'))
      var criss = document.getElementById('c');
      criss.dispatchEvent(new Event('change'))
      var trgss = document.getElementById('trg');
      trgss.dispatchEvent(new Event('change'))
      var gradess = document.getElementById('g');
      gradess.dispatchEvent(new Event('change'))
    }
    
  }
  input.click();
  
}

document.getElementById('load').addEventListener('click', load);

String.prototype.replaceAt = function(index, replacement) {
  return this.substr(0, index) + replacement + this.substr(index + 1);
}

