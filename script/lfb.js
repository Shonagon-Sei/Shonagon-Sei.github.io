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

var tc = cn.textContent;

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

//Power | Update//
ip1.addEventListener('input', function() {
  pw.textContent = ip1.value;
  pw1.textContent = ip1.value;  
  if (/[\u0E00-\u0E7F]/.test(ip2.value))
  {
    pw.style.transform = 'translate(83px, 0px) skewX(-13deg)'
    pw1.style.transform = 'translate(83px, 0px) skewX(-13deg)'
  }
  else{
    pw.style.transform = 'translate(83px, -2px) skewX(-13deg)'
    pw.style.transform = 'translate(83px, -2px) skewX(-13deg)'
  }
  
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

	if (/[\u0E00-\u0E7F]/.test(ip2.value))
  {
    cn.textContent = ip2.value;

		cn.style.fontFamily = 'pslxol'
    cn.style.fontSize = '24px'
  	cn.style.transform = "scaleX(" + _sc_ + ")" + "scaleY(1) translate(0, 3px) skewX(-13deg)";
  	cn.style.width = scl + "px";
    cn_.style.tranform = 'translate(0, -53)';
    
  	cno.textContent = ip2.value;

  	cno.style.transform = "scaleX(" + _sc_ + ")" + "scaleY(1) translate(0, 3px) skewX(-13deg)";
  	cno.style.width = scl + "px";
  	console.log(tpx_);
  }else{
    cn.textContent = ip2.value;
		cn.style.fontFamily = 'imp'
    cn.style.fontSize = '18px'
    cn.style.transform = "scaleX(" + _sc_ + ")" + "scaleY(1) translate(0, 3px) skewX(-18deg)";
    cn.style.width = scl + "px";
    cn_.style.tranform = 'translate(0, -55)';
    
    cno.textContent = ip2.value;
  
    cno.style.transform = "scaleX(" + _sc_ + ")" + "scaleY(1) translate(0, 3px) skewX(-18deg)";
    cno.style.width = scl + "px";
    console.log(tpx_);
  }
  ip1.dispatchEvent(new Event('input'));
      ip3.dispatchEvent(new Event('input'));
      ip4.dispatchEvent(new Event('input'));
      teb.dispatchEvent(new Event('input'));
      
      var types = document.getElementById('cts');
      types.dispatchEvent(new Event('change'))
      var criss = document.getElementById('c');
      criss.dispatchEvent(new Event('change'))      
      var gradess = document.getElementById('g');
      gradess.dispatchEvent(new Event('change'))
});

//Race | Update//
ip3.addEventListener('input', function() {
  
  if (/[\u0E00-\u0E7F]/.test(ip2.value))
  {
    rec1.textContent = ip3.value;
  	rec.textContent = ip3.value;
    rec1.style.transform = 'translate(242.75px, -20px)'
    rec1.style.fontFamily = 'pslxim'
    rec.style.transform = 'translate(242.75px, -20px)'
    rec.style.fontFamily = 'pslxim'
    rec.style.fontSize = '13px'
    rec1.style.fontSize = '13px'
    
  	var enrace1 = document.getElementById('enrec');
  	var enraceinner1 = document.getElementById('enrec1');
  	enrace1.textContent = ip3.value;
  	enraceinner1.textContent = ip3.value;
    
    enrace1.style.transform = 'translate(275.75px, -19px)'
    enrace1.style.fontFamily = 'pslxim'
    enraceinner1.style.transform = 'translate(275.75px, -19px)'
    enraceinner1.style.fontFamily = 'pslxim'
    enrace1.style.fontSize = '13px'
    enraceinner1.style.fontSize = '13px'
  }
  else
  {
    rec1.textContent = ip3.value;
  	rec.textContent = ip3.value;
    rec1.style.transform = 'translate(242.75px, -21px)'
    rec1.style.fontFamily = 'cslr'
    rec.style.transform = 'translate(242.75px, -21px)'
    rec.style.fontFamily = 'cslr'
    
    rec1.style.fontSize = '9px'
    rec.style.fontSize = '9px'
    
  	var enrace1 = document.getElementById('enrec');
  	var enraceinner1 = document.getElementById('enrec1');
  	enrace1.textContent = ip3.value;
  	enraceinner1.textContent = ip3.value;
    
    enrace1.style.transform = 'translate(275.75px, -20px)'
    enrace1.style.fontFamily = 'cslr'
    enraceinner1.style.transform = 'translate(275.75px, -20px)'
    enraceinner1.style.fontFamily = 'cslr'
    
    enrace1.style.fontSize = '8px'
    enraceinner1.style.fontSize = '8px'
  }
    
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
    effect = effect.replaceAll('[Power]', '<span class=\'image-wrapper\'><img src=\'assets/ePower Icon.png\' alt=\'Image\' class=\'value\' id=\'auto\'></span>');
    effect = effect.replaceAll('[Shield]', '<span class=\'image-wrapper\'><img src=\'assets/eShield Icon.png\' alt=\'Image\' class=\'value\' id=\'auto\'></span>');
    effect = effect.replaceAll('[Critical]', '<span class=\'image-wrapper\'><img src=\'assets/eCritical Icon.png\' alt=\'Image\' class=\'value\' id=\'auto\'></span>');
  }
  else{
    effect = effect.replaceAll('[Power]', '<span class=\'image-wrapper\'><img src=\'assets/Power Icon.png\' alt=\'Image\' class=\'value\' id=\'auto\'></span>');
    effect = effect.replaceAll('[Shield]', '<span class=\'image-wrapper\'><img src=\'assets/Shield Icon.png\' alt=\'Image\' class=\'value\' id=\'auto\'></span>');
    effect = effect.replaceAll('[Critical]', '<span class=\'image-wrapper\'><img src=\'assets/Critical Icon.png\' alt=\'Image\' class=\'value\' id=\'auto\'></span>');
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
  effect = effect.replaceAll('EB()', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/EB.png\' alt=\'Image\' class=\'circle\' id=\'auto\'></span>');
  
  
  effect = effect.replaceAll('EC(1)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/EC1.png\' alt=\'Image\' class=\'circle\' id=\'auto\'></span>');
  effect = effect.replaceAll('EC(2)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/EC2.png\' alt=\'Image\' class=\'circle\' id=\'auto\'></span>');
  effect = effect.replaceAll('EC(3)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/EC3.png\' alt=\'Image\' class=\'circle\' id=\'auto\'></span>');
  effect = effect.replaceAll('EC(4)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/EC4.png\' alt=\'Image\' class=\'circle\' id=\'auto\'></span>');
  effect = effect.replaceAll('EC(5)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/EC5.png\' alt=\'Image\' class=\'circle\' id=\'auto\'></span>');
  effect = effect.replaceAll('EC(6)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/EC6.png\' alt=\'Image\' class=\'circle\' id=\'auto\'></span>');
  effect = effect.replaceAll('EC(7)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/EC7.png\' alt=\'Image\' class=\'circle\' id=\'auto\'></span>');
  effect = effect.replaceAll('EC(8)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/EC8.png\' alt=\'Image\' class=\'circle\' id=\'auto\'></span>');
  effect = effect.replaceAll('EC(9)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/EC9.png\' alt=\'Image\' class=\'circle\' id=\'auto\'></span>');
  effect = effect.replaceAll('EC()', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/EC.png\' alt=\'Image\' class=\'circle\' id=\'auto\'></span>');
  
  
  effect = effect.replaceAll('CB(1)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/CB1.png\' alt=\'Image\' class=\'circle\' id=\'auto\'></span>');
  effect = effect.replaceAll('CB(2)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/CB2.png\' alt=\'Image\' class=\'circle\' id=\'auto\'></span>');
  effect = effect.replaceAll('CB(3)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/CB3.png\' alt=\'Image\' class=\'circle\' id=\'auto\'></span>');
  effect = effect.replaceAll('CB(4)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/CB4.png\' alt=\'Image\' class=\'circle\' id=\'auto\'></span>');
  effect = effect.replaceAll('CB(5)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/CB5.png\' alt=\'Image\' class=\'circle\' id=\'auto\'></span>');
  effect = effect.replaceAll('CB()', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/CB.png\' alt=\'Image\' class=\'circle\' id=\'auto\'></span>');
  
  
  effect = effect.replaceAll('CC(1)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/CC1.png\' alt=\'Image\' class=\'circle\' id=\'auto\'></span>');
  effect = effect.replaceAll('CC(2)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/CC2.png\' alt=\'Image\' class=\'circle\' id=\'auto\'></span>');
  effect = effect.replaceAll('CC(3)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/CC3.png\' alt=\'Image\' class=\'circle\' id=\'auto\'></span>');
  effect = effect.replaceAll('CC(4)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/CC4.png\' alt=\'Image\' class=\'circle\' id=\'auto\'></span>');
  effect = effect.replaceAll('CC(5)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/CC5.png\' alt=\'Image\' class=\'circle\' id=\'auto\'></span>');
  effect = effect.replaceAll('CC()', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/CC.png\' alt=\'Image\' class=\'circle\' id=\'auto\'></span>');
  
  
  effect = effect.replaceAll('SB(1)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/SB1.png\' alt=\'Image\' class=\'circle\' id=\'auto\'></span>');
  effect = effect.replaceAll('SB(2)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/SB2.png\' alt=\'Image\' class=\'circle\' id=\'auto\'></span>');
  effect = effect.replaceAll('SB(3)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/SB3.png\' alt=\'Image\' class=\'circle\' id=\'auto\'></span>');
  effect = effect.replaceAll('SB(4)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/SB4.png\' alt=\'Image\' class=\'circle\' id=\'auto\'></span>');
  effect = effect.replaceAll('SB(5)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/SB5.png\' alt=\'Image\' class=\'circle\' id=\'auto\'></span>');
  effect = effect.replaceAll('SB(6)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/SB6.png\' alt=\'Image\' class=\'circle\' id=\'auto\'></span>');
  effect = effect.replaceAll('SB(7)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/SB7.png\' alt=\'Image\' class=\'circle\' id=\'auto\'></span>');
  effect = effect.replaceAll('SB(8)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/SB8.png\' alt=\'Image\' class=\'circle\' id=\'auto\'></span>');
  effect = effect.replaceAll('SB(9)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/SB9.png\' alt=\'Image\' class=\'circle\' id=\'auto\'></span>');
  effect = effect.replaceAll('SB()', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/SB.png\' alt=\'Image\' class=\'circle\' id=\'auto\'></span>');
  
  
  effect = effect.replaceAll('SC(1)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/SC1.png\' alt=\'Image\' class=\'circle\' id=\'auto\'></span>');
  effect = effect.replaceAll('SC(2)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/SC2.png\' alt=\'Image\' class=\'circle\' id=\'auto\'></span>');
  effect = effect.replaceAll('SC(3)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/SC3.png\' alt=\'Image\' class=\'circle\' id=\'auto\'></span>');
  effect = effect.replaceAll('SC(4)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/SC4.png\' alt=\'Image\' class=\'circle\' id=\'auto\'></span>');
  effect = effect.replaceAll('SC(5)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/SC5.png\' alt=\'Image\' class=\'circle\' id=\'auto\'></span>');
  effect = effect.replaceAll('SC(6)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/SC6.png\' alt=\'Image\' class=\'circle\' id=\'auto\'></span>');
  effect = effect.replaceAll('SC(7)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/SC7.png\' alt=\'Image\' class=\'circle\' id=\'auto\'></span>');
  effect = effect.replaceAll('SC(8)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/SC8.png\' alt=\'Image\' class=\'circle\' id=\'auto\'></span>');
  effect = effect.replaceAll('SC(9)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/SC9.png\' alt=\'Image\' class=\'circle\' id=\'auto\'></span>');
  effect = effect.replaceAll('SC()', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/SC.png\' alt=\'Image\' class=\'circle\' id=\'auto\'></span>');
  
  effect = effect.replaceAll('GB1', '<span class=\'image-wrapper\'><img src=\'assets/GB/GB1.png\' alt=\'Image\' class=\'circle\' id=\'auto\'></span>');
  effect = effect.replaceAll('GB2', '<span class=\'image-wrapper\'><img src=\'assets/GB/GB2.png\' alt=\'Image\' class=\'circle\' id=\'auto\'></span>');
  effect = effect.replaceAll('GB3', '<span class=\'image-wrapper\'><img src=\'assets/GB/GB3.png\' alt=\'Image\' class=\'circle\' id=\'auto\'></span>');
  effect = effect.replaceAll('GB4', '<span class=\'image-wrapper\'><img src=\'assets/GB/GB4.png\' alt=\'Image\' class=\'circle\' id=\'auto\'></span>');
  effect = effect.replaceAll('GB5', '<span class=\'image-wrapper\'><img src=\'assets/GB/GB5.png\' alt=\'Image\' class=\'circle\' id=\'auto\'></span>');
  effect = effect.replaceAll('GB6', '<span class=\'image-wrapper\'><img src=\'assets/GB/GB6.png\' alt=\'Image\' class=\'circle\' id=\'auto\'></span>');
  effect = effect.replaceAll('GB7', '<span class=\'image-wrapper\'><img src=\'assets/GB/GB7.png\' alt=\'Image\' class=\'circle\' id=\'auto\'></span>');
  effect = effect.replaceAll('GB8', '<span class=\'image-wrapper\'><img src=\'assets/GB/GB8.png\' alt=\'Image\' class=\'circle\' id=\'auto\'></span>');


  effect = effect.replaceAll('/*', '<span class=\'red-text\'>');
  effect = effect.replaceAll('*/', '</span>');

  
  
  effect = effect.replaceAll('[', '<span class=\'under-line\'>[');
  effect = effect.replaceAll(']', ']</span>');
  
  //fcm
  if (encounter.checked){
    effect = effect.replaceAll('"', '<span class=\'equote\'>"</span>');
    effect = effect.replaceAll('(', '<span class=\'image-wrapper\'><img src=\'assets/ELSB.png\' alt=\'Image\' class=\'brack\' id=\'auto\'></span>');
  effect = effect.replaceAll(')', '<span class=\'image-wrapper\'><img src=\'assets/ERSB.png\' alt=\'Image\' class=\'brack\' id=\'auto\'></span>')
  }
  else{
    effect = effect.replaceAll('"', '<span class=\'quote\'>"</span>');
    effect = effect.replaceAll('(', '<span class=\'image-wrapper\'><img src=\'assets/LSB.png\' alt=\'Image\' class=\'brack\' id=\'auto\'></span>');
  effect = effect.replaceAll(')', '<span class=\'image-wrapper\'><img src=\'assets/RSB.png\' alt=\'Image\' class=\'brack\' id=\'auto\'></span>')
  }
  

  //【
  
  
  effect = effect.replaceAll('/i', '<span class=\'italic\'>(');
  effect = effect.replaceAll('i/', ')</span>');

  se.innerHTML = effect;
  seo.innerHTML = effect;
  sec.innerHTML = effect;

  var eb = document.getElementById('eb');
  var sp = document.getElementById('sp');
  if (sp.checked){
    eb.style.display = 'none'
    se.style.color = "#FFFFFF"
    sec.style.display = 'flex'
  }
  else
  {
    eb.style.display = 'flex'
    sec.style.display = 'none'

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
  
  }
  
  if (/[\u0E00-\u0E7F]/.test(ip2.value))
  {
    se.style.fontFamily = 'pslxim'
    se.style.fontSize = '18px'
  }
  else{
    se.style.fontFamily = 'cslb'
    se.style.fontSize = '12px'
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
  if (/[\u0E00-\u0E7F]/.test(ip2.value)){
    src = src.slice(0, 7) + "TH/" + src.slice(7)

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
    this.trigger
    this.encounter
    this.clan
    this.dual
    this.fnation
    this.snation
  }
}

function save() {
  var save = new savefile();
  save.name = ip2.value;
  save.power = ip1.value;
  save.type = type.value;
  save.nation = nation.value;
  save.shield = ip4.value;
  save.effect = teb.value;
  save.grade = grade.value;
  save.race = ip3.value;
  save.encounter = encounter.checked;
  save.dual = dual.checked;
  save.trigger = trigger1.value;
  save.fnation = fselect.value;
  save.snation = sselect.value;
  save.clan = clan.value;

  var jsonData = JSON.stringify(save);
  var fileName_ = prompt('Please Enter File Name')
  function download(content, fileName, contentType) {
    var a = document.createElement("a");
    var file = new Blob([content], {type: contentType});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
  }
  download(jsonData, `${fileName_}.json`, 'text/plain');
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

      //power name race shield
      
      ip2.value = savefiles.name;
      ip1.value = savefiles.power;
      type.value = savefiles.type;
      nation.value = savefiles.nation;
      ip4.value = savefiles.shield;
      teb.value = savefiles.effect;
      grade.value = savefiles.grade;
      ip3.value = savefiles.race;
      encounter.checked = savefiles.encounter;
      dual.checked = savefiles.dual;
      clan.value = savefiles.clan;
      fselect.value = savefiles.fnation;
      sselect.value = savefiles.snation;

      ip1.dispatchEvent(new Event('input'));
      ip2.dispatchEvent(new Event('input'));
      ip3.dispatchEvent(new Event('input'));
      ip4.dispatchEvent(new Event('input'));
      teb.dispatchEvent(new Event('input'));
      
      var types = document.getElementById('cts');
      types.dispatchEvent(new Event('change'))
      var criss = document.getElementById('c');
      criss.dispatchEvent(new Event('change'))
      
      if (savefiles.type === 'tu'){        
        var trgss = document.getElementById('trg');
      	trgss.dispatchEvent(new Event('change'))
      }
      
      var gradess = document.getElementById('g');
      gradess.dispatchEvent(new Event('change'))
    }
    
  }
  input.click();
  
}

document.getElementById('load').addEventListener('click', load);

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
  replacedEffect = replacedEffect.replaceAll("'", '');
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

  function download(content, fileName, contentType) {
    var a = document.createElement("a");
    var file = new Blob([content], {type: contentType});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
  }
  if (dual.checked){
    download(strExport, `${$("#fns option:selected").text()}.txt`, 'text/plain;');
  }
  else{
    download(strExport, `${$("#ns option:selected").text()}.txt`, 'text/plain;');
  }
  
}

document.getElementById('ccu').addEventListener('click', CCUExport);

function ccu_img(fileName) {
  var d_ = document.getElementById('img_');
  var n_ = document.getElementById('nub');
  var no = document.getElementById('nubo');
  var s = document.getElementById('eb');

  d_.style.border = '0';
  n_.style.transform = "translate(0 , -1.2px)";
  no.style.transform = "translate(0 , -1.2px)";
  s.style.transform = "translate(0 , -1.2px)";
  //

  html2canvas(d_, { scale: 0.71230643846 ,backgroundColor: null}).then(function(canvas) {
    var image = new Image();
    image.src = canvas.toDataURL();

    var link = document.createElement('a');
    link.href = image.src;
    link.download = `n${fileName}.jpg`;
    link.click();

    d_.style.border = '';
    n_.style.transform = 'translate(0, 0.5px)';
    no.style.transform = 'translate(0, 0.5px)';
    s.style.transform = '';
    
  });

  html2canvas(d_, { scale: 0.17766911165 ,backgroundColor: null}).then(function(canvas) {
    var image = new Image();
    image.src = canvas.toDataURL();

    var link = document.createElement('a');
    link.href = image.src;
    link.download = `n${fileName}mini.jpg`;
    link.click();

    d_.style.border = '';
    n_.style.transform = 'translate(0, 0.5px)';
    no.style.transform = 'translate(0, 0.5px)';
    s.style.transform = '';
    
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
