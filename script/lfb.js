/// <reference lib="es2021" />
//Input//
var ip1 = document.getElementById('power');
var ip2 = document.getElementById('cn');
var ip3 = document.getElementById('race');
var ip4 = document.getElementById('shield');
var teb = document.getElementById('teb');

//Effect//
var se = document.getElementById('se');
var se1 = document.getElementById('se_');

//Power//
var pw = document.getElementById('pw');
var pw1 = document.getElementById('pw1');

//Shield//
var sh1 = document.getElementById('sh');
var sh2 = document.getElementById('_sh');
var sh3 = document.getElementById('_sh1');

//Card Name//
var cn = document.getElementById('cns');
var tc = cn.textContent;

//Race//
var rec = document.getElementById('rec');
var rec1 = document.getElementById('rec1');

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

  cn.style.transform = "scaleX(" + _sc_ + ")" + "scaleY(1) translate(0, 3px) skewX(-18deg";
  cn.style.width = scl + "px";
  console.log(tpx_);
});

//Race | Update//
ip3.addEventListener('input', function() {
  rec1.textContent = ip3.value;
  rec.textContent = ip3.value;  
});

//Race | Update//
ip3.addEventListener('input', function() {
  rec1.textContent = ip3.value;
  rec.textContent = ip3.value;  
});

//Card Effect | Update//
teb.addEventListener('input', function() {
  var eb = document.getElementById('eb');
  /** @type{string}*/
  var effect = teb.value;

  //Box Icons
  effect = effect.replaceAll('AUTO', '<span class="image-wrapper"><img src="assets/AUTO.png" alt="Image" class="skill" id="auto"></span>');
  effect = effect.replaceAll('ACT', '<span class="image-wrapper"><img src="assets/ACT.png" alt="Image" class="skill" id="auto"></span>');
  effect = effect.replaceAll('CONT', '<span class="image-wrapper"><img src="assets/CONT.png" alt="Image" class="skill" id="auto"></span>');
  effect = effect.replaceAll('Stand', '<span class="image-wrapper"><img src="assets/Stand Icon.png" alt="Image" class="skill" id="auto"></span>');
  effect = effect.replaceAll('Rest', '<span class="image-wrapper"><img src="assets/Rest Icon.png" alt="Image" class="skill" id="auto"></span>');
  effect = effect.replaceAll('1/Turn', '<span class="image-wrapper"><img src="assets/1 per turn.png" alt="Image" class="skill" id="auto"></span>');
  effect = effect.replaceAll('1/Fight', '<span class="image-wrapper"><img src="assets/1 per fight.png" alt="Image" class="skill" id="auto"></span>');
  effect = effect.replaceAll('Critical Trigger', '<span class="image-wrapper"><img src="assets/Trigger Crit mini icon.png" alt="Image" class="skill" id="auto"></span>');
  effect = effect.replaceAll('Draw Trigger', '<span class="image-wrapper"><img src="assets/Trigger Draw mini icon.png" alt="Image" class="skill" id="auto"></span>');
  effect = effect.replaceAll('Heal Trigger', '<span class="image-wrapper"><img src="assets/Trigger Heal mini icon.png" alt="Image" class="skill" id="auto"></span>');
  effect = effect.replaceAll('Front Trigger', '<span class="image-wrapper"><img src="assets/Trigger Front mini icon-29.png" alt="Image" class="skill" id="auto"></span>');
  effect = effect.replaceAll('Over Trigger', '<span class="image-wrapper"><img src="assets/Trigger Over mini icon.png" alt="Image" class="skill" id="auto"></span>');

  //Specific
  effect = effect.replaceAll('Regalis Piece', '<span class="image-wrapper"><img src="assets/Regalis Piece Icon.png" alt="Image" class="skill" id="auto"></span>');
  effect = effect.replaceAll('Revoldress', '<span class="image-wrapper"><img src="assets/RevolDress Icon.png" alt="Image" class="skill" id="auto"></span>');
  effect = effect.replaceAll('Overdress', '<span class="image-wrapper"><img src="assets/o-Dress Icon EN.png" alt="Image" class="skill" id="auto"></span>');

  //Power Shield Critical
  effect = effect.replaceAll('Power', '<span class="image-wrapper"><img src="assets/Power Icon.png" alt="Image" class="skill" id="auto"></span>');
  effect = effect.replaceAll('Shield', '<span class="image-wrapper"><img src="assets/Shield Icon.png" alt="Image" class="skill" id="auto"></span>');
  effect = effect.replaceAll('Critical', '<span class="image-wrapper"><img src="assets/Critical Icon.png" alt="Image" class="skill" id="auto"></span>');
  
  //Circles
  effect = effect.replaceAll('VC', '<span class="image-wrapper"><img src="assets/VC.png" alt="Image" class="circle" id="auto"></span>');
  effect = effect.replaceAll('RC', '<span class="image-wrapper"><img src="assets/RC.png" alt="Image" class="circle" id="auto"></span>');
  effect = effect.replaceAll('GC', '<span class="image-wrapper"><img src="assets/RC.png" alt="Image" class="circle" id="auto"></span>');
  effect = effect.replaceAll('COST', '<span class="image-wrapper"><img src="assets/COST.png" alt="Image" class="circle" id="auto"></span>');

  //【
  effect = effect.replaceAll('(', '<span class="image-wrapper"><img src="assets/LSB.png" alt="Image" class="brack" id="auto"></span>');
  effect = effect.replaceAll(')', '<span class="image-wrapper"><img src="assets/RSB.png" alt="Image" class="brack" id="auto"></span>');
  

  se.innerHTML = effect;
  var lines = se.getClientRects().length;
  const linesCount = Math.round(se.offsetHeight / 15.8);
  eb.src = `assets/textbox/textbox_${linesCount}.png`
});

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
