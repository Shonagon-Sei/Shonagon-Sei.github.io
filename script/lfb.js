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
  
  se.textContent = teb.value;
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
