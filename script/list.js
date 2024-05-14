

function typeSet() {
  var type = document.getElementById('cts');
  var nation = document.getElementById('ns');
  var nslab = document.getElementById('nslab');
  var image = document.getElementById('gn');
  var teb = document.getElementById('teb');
  var cn = document.getElementById('cns');

  var power = document.getElementById('pw');
  var power1 = document.getElementById('pw1');

  var fimage = document.getElementById('dnf');
  var simage = document.getElementById('dns');
  var ffimage = document.getElementById('dnfflag');
  var fsimage = document.getElementById('dnsflag');
  var gfimage = document.getElementById('dnfgrade');
  var gsimage = document.getElementById('dnsgrade');

  var fselect = document.getElementById('fns');
  var sselect = document.getElementById('sns');

  var trigger = document.getElementById('trg_');
  var trigger1 = document.getElementById('trg');
  var crs = document.getElementById('crs');
  var c = document.getElementById('c');
  var grade = document.getElementById('g');
  var grade1 = document.getElementById('gs');
  var triggerImage = document.getElementById('trigger')
  var image0 = document.getElementById('si');
  var image1 = document.getElementById('gs'); 
  var image2 = document.getElementById('si1');

  var race1 = document.getElementById('rec');
  var raceinner1 = document.getElementById('rec1');

  var enrace1 = document.getElementById('enrec');
  var enraceinner1 = document.getElementById('enrec1');

  var encounter = document.getElementById('enc');
  var enc = document.getElementById('enclab')

  var clan = document.getElementById('cl');
  var clanlabel = document.getElementById('cll');
  var clanImage = document.getElementById('encounter-clan');

  var dualab = document.getElementById('dualab');
  var dual = document.getElementById('dual')

  var se = document.getElementById('nub');
  var nuborder = document.getElementById('nubo');

  var ip1 = document.getElementById('power');
  var ip2 = document.getElementById('cn');
  var ip3 = document.getElementById('race');
  var ip4 = document.getElementById('shield');

  var ovlab = document.getElementById('ovlab');
  var overDress = document.getElementById('ov');

  var frame = document.getElementById('frame');

  
  type.addEventListener('change', update);
  nation.addEventListener('change', update);
  clan.addEventListener('change', update);
  encounter.addEventListener('change', update);
  overDress.addEventListener('change', update);
  dual.addEventListener('change', update);
  fselect.addEventListener('change', update);
  sselect.addEventListener('change', update);

  function update() {
    var select1 = type.value;
    var select2 = nation.value;
    var tri = "";
    var tri1 = "";
    
    var im = "";
    var im1 = "";
    var im2 = ""

    
    
    if (select1 === "tu") {
      tri = "flex";
      tri1 = "flex";
      im = `assets/${trigger1.value}.png`
      se.style.display = 'flex'
      nuborder.style.display = 'none'
      crs.style.display = 'flex'
      image0.style.display = 'flex'
      encounter.style.display = 'none'
      enc.style.display = 'none'
      dual.checked = false
      dualab.style.display = 'none'
      ovlab.style.display = 'none'
    }
    else if (select1 === 'nu') {
      tri = "none";
      tri1 = "flex";
      im = "assets/none_.png"
      se.style.display = 'flex'
      nuborder.style.display = 'none'
      crs.style.display = 'flex'
      image0.style.display = 'flex'
      encounter.style.display = 'flex'
      enc.style.display = 'flex'
      dualab.style.display = 'flex'
      ovlab.style.display = 'flex'
    }
    else if (select1 === 'gu') {
      tri = "none";
      tri1 = "flex";
      im = "assets/none_.png"
      se.style.display = 'flex'
      nuborder.style.display = 'none'
      crs.style.display = 'flex'
      image0.style.display = 'flex'
      encounter.style.display = 'flex'
      enc.style.display = 'none'
      encounter.checked = true
      dual.checked = false
      dualab.style.display = 'none'
      ovlab.style.display = 'none'
    }
    else if (select1 === 'no') {
      tri = "none";
      tri1 = "flex";
      im = "assets/none_.png"
      se.style.display = 'none'
      nuborder.style.display = 'flex'
      crs.style.display = 'none'
      image0.style.display = 'none'
      encounter.style.display = 'none'
      enc.style.display = 'none'
      dual.checked = false
      dualab.style.display = 'none'
      ovlab.style.display = 'none'
    }
    else if (select1 === 'bo') {
      tri = "none";
      tri1 = "flex";
      im = "assets/none_.png"
      se.style.display = 'none'
      nuborder.style.display = 'flex'
      crs.style.display = 'none'
      image0.style.display = 'none'
      encounter.style.display = 'none'
      enc.style.display = 'none'
      dual.checked = false
      dualab.style.display = 'none'
      ovlab.style.display = 'none'
    }
    else if (select1 === 'so') {
      tri = "none";
      tri1 = "flex";
      im = "assets/none_.png"
      se.style.display = 'none'
      nuborder.style.display = 'flex'
      crs.style.display = 'none'
      image0.style.display = 'none'
      encounter.style.display = 'none'
      enc.style.display = 'none'
      dual.checked = false
      dualab.style.display = 'none'
      ovlab.style.display = 'none'
    }else if (select1 === 'tk'){
      tri = "none";
      tri1 = "flex";
      im = "assets/none_.png"
      se.style.display = 'flex'
      nuborder.style.display = 'none'
      crs.style.display = 'flex'
      image0.style.display = 'flex'
      encounter.style.display = 'none'
      enc.style.display = 'none'
      dualab.style.display = 'none'
      dual.checked = false
      dualab.style.display = 'none'
      ovlab.style.display = 'none'
    }


    if (encounter.checked && (select1 === "nu" || select1 === "gu")){
      
      if (select2 === 'nl'){
        $("#ns option[value='nl']").remove();
        nation.value = 'de'
        select2 = 'de'
      }
      else{
        $("#ns option[value='nl']").remove();
      }
      var src_ = "assets/" + select2 + select1 + "e.png";
      race1.style.display = 'none'
      raceinner1.style.display = 'none'
      enrace1.style.display = 'block'
      enraceinner1.style.display = 'block'
      clanImage.style.display = 'flex'
      clanImage.src = "assets/" + clan.value + '.png';
      clan.style.display = 'flex'
      clanlabel.style.display = 'flex'
      image.src = src_;
      ovlab.style.display = 'none'
      power.style.display = ''
      power1.style.display = ''
    }else if (select1 === 'ma'){
      tri = "none";
      tri1 = "none";
      im = "assets/none_.png"
      se.style.display = 'flex'
      nuborder.style.display = 'none'
      crs.style.display = 'none'
      image0.style.display = 'none'
      encounter.style.display = 'none'
      enc.style.display = 'none'
      dualab.style.display = 'none'
      dual.checked = false
      dualab.style.display = 'none'
      ovlab.style.display = 'none'
      race1.style.display = 'none'
      raceinner1.style.display = 'none'
      power.style.display = 'none'
      power1.style.display = 'none'
      var src_ = 'assets/marker.png'

      grade.style.display = tri1;
      grade1.style.display = tri1;
      trigger.style.display = tri;
      trigger1.style.display = tri;
      triggerImage.src = im
      image.src = src_;

      

      ip1.dispatchEvent(new Event('input'))
      ip2.dispatchEvent(new Event('input'))
      ip3.dispatchEvent(new Event('input'))
      teb.dispatchEvent(new Event('input'))
      return
    }
    else
    {
      if ($("#ns option[value='nl']").length <= 0){
        $("#ns").prepend("<option value='nl'>No Nation</option>");
      }
      race1.style.display = 'block'
      raceinner1.style.display = 'block'
      clanImage.style.display = 'none'
      clan.style.display = 'none'
      clanlabel.style.display = 'none'
      enrace1.style.display = 'none'
      enraceinner1.style.display = 'none'
      power.style.display = ''
      power1.style.display = ''

      var src_ = "assets/" + select2 + select1 + ".png";

      if(overDress.checked){
       src_ = "assets/" + select2 + select1 + "ov.png";
      }

      if (/[\u0E00-\u0E7F]/.test(ip2.value)){
        src_ = "assets/TH/" + select2 + select1 + ".png";
      }
      
      image.src = src_;
    }

    if (dual.checked){
      image.style.display = 'none'
      fimage.style.display = 'flex'
      simage.style.display = 'flex'
      ffimage.style.display = 'flex'
      fsimage.style.display = 'flex'
      gfimage.style.display = 'flex'
      gsimage.style.display = 'flex'
      fselect.style.display = 'flex'
      sselect.style.display = 'flex'
      nation.style.display = 'none'
      nslab.style.display = 'none'
      fimage.src = `assets/dual nation/f${fselect.value}.png`
      simage.src = `assets/dual nation/s${sselect.value}.png`
      ffimage.src = `assets/dual nation/flag/f${fselect.value}.png`
      fsimage.src = `assets/dual nation/flag/s${sselect.value}.png`
      gfimage.src = `assets/dual nation/grade/f${fselect.value}.png`
      gsimage.src = `assets/dual nation/grade/s${sselect.value}.png`

      if (overDress.checked){
        frame.src = 'assets/OverDress Frame Remastered.png'
      }else{
        frame.src = 'assets/none_.png'
      }

      encounter.style.display = 'none'
      enc.style.display = 'none'
      encounter.checked = false
    }
    else
    {
      image.style.display = 'flex'
      fimage.style.display = 'none'
      simage.style.display = 'none'
      ffimage.style.display = 'none'
      fsimage.style.display = 'none'
      fselect.style.display = 'none'
      sselect.style.display = 'none'
      nation.style.display = 'flex'
      nslab.style.display = 'flex'
      gfimage.style.display = 'none'
      gsimage.style.display = 'none' 
      frame.src = 'assets/none_.png'   
    }
    
    grade.style.display = tri1;
    grade1.style.display = tri1;
    trigger.style.display = tri;
    trigger1.style.display = tri;
    triggerImage.src = im

    ip1.dispatchEvent(new Event('input'))
  ip2.dispatchEvent(new Event('input'))
  ip3.dispatchEvent(new Event('input'))
  teb.dispatchEvent(new Event('input'))
  }

  

}

window.addEventListener('DOMContentLoaded', typeSet);



//Critical//
window.addEventListener('DOMContentLoaded', function() {
  var cri = document.getElementById('c');
  var image = document.getElementById('crs');
  var type = this.document.getElementById('cts');

  cri.addEventListener('change', update);
  var ip2 = document.getElementById('cn');
  function update() {
    var select = cri.value;
    var src_ = "assets/" + select + ".png";

    

    if(type.value === 'tk'){
      image.classList.add('TK')
    }else{
      image.classList.remove('TK')
    }
    image.src = src_;
  }
});

window.addEventListener('DOMContentLoaded', function() {
  var trg = document.getElementById('trg');
  var image = document.getElementById('trigger');
  var type = this.document.getElementById('cts');


  trg.addEventListener('change', update);
  
  function update() {

    if (type.value == 'tu'){
      var select = trg.value;
      var src_ = "assets/" + select + ".png";
      image.src = src_;
    }else{
      var src_ = "assets/" + "none" + ".png";
    }
    
  }
});

//Grade//
window.addEventListener('DOMContentLoaded', function() {
  var type = document.getElementById('cts');
  var grade = document.getElementById('g');
  var image = document.getElementById('si');
  var image1 = document.getElementById('gs'); 
  var image2 = document.getElementById('si1');
  var csk = document.getElementById('csk');
  var ask = document.getElementById('ask');
  grade.addEventListener('change', update);
  csk.addEventListener('change', update);
  ask.addEventListener('change', update);

  function update() {
    var select = grade.value;
    var _src_ = "assets/grade" + select + ".png";
    var src_ = "assets/" + csk.value + ".png";
    var src__ = "assets/" + ask.value + ".png";
    var ty = type.value;
    var ip2 = document.getElementById('cn');

    

    if (/[\u0E00-\u0E7F]/.test(ip2.value)){
      _src_ = _src_.slice(0, 7) + "TH/" + _src_.slice(7)
      src_ = src_.slice(0, 7) + "TH/" + src_.slice(7)
      src__ = src__.slice(0, 7) + "TH/" + src__.slice(7)
    }

    image1.src = _src_;
    image.src = src_;
    image2.src = src__;
  }
});