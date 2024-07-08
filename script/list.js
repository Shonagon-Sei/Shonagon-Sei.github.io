/// <reference lib="es2021" />

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
  var glab = document.getElementById('g_');
  var grade1 = document.getElementById('gs');
  var triggerImage = document.getElementById('trigger')
  var image0 = document.getElementById('si');
  var image1 = document.getElementById('gs'); 
  var image2 = document.getElementById('si1');
  var flagC = document.getElementById('flag');
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
  var glitterlab = document.getElementById('glitterlab');
  var dual = document.getElementById('dual')
  var glitter = document.getElementById('glitter');

  var se = document.getElementById('nub');
  var nuborder = document.getElementById('nubo');

  var ip1 = document.getElementById('power');
  var ip2 = document.getElementById('cn');
  var ip3 = document.getElementById('race');
  var ip4 = document.getElementById('shield');
  var ipsub = document.getElementById('odst');

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
  glitter.addEventListener('change', update);
  flagC.addEventListener('change', update);
  

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
    }else if (select1 === 'tk' || select1 === 'nudsr'){
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

    var outer = document.getElementById('outerColor')
      var inner = document.getElementById('innerColor')
      var labelIn1 = document.getElementById('inner')
      var outerIn1 = document.getElementById('outer1')
      var outerIn2 = document.getElementById('outer2')
      var nName = document.getElementById('nname')
      var nName1 = document.getElementById('nname1')
      var nNameo = document.getElementById('nnameo')
      var nName1o = document.getElementById('nname1o')
      var svg = document.getElementById('customNation')
      var svg2 = document.getElementById('customNationOrder')
      var ipCustom = document.getElementById('customText')
      var ipCustoml = document.getElementById('customTextL')
      var stroke = document.getElementById('stroke');
      var strokel = document.getElementById('strokeL');
      var divs = document.getElementById('customcolor')
      var nlabel = document.getElementById('nlabel')
      var cbar = document.getElementById('customBG');
      var customGrade = document.getElementById('customGrade')
      var barIMG = document.getElementById('barIMG')
      var flaglab = document.getElementById('flaglab');
      
      
    if (nation.value == 'cs'){
      
      ipCustom.style.display = ''
      divs.style.display = ''
      ipCustoml.style.display = ''
      stroke.style.display = ''
      strokel.style.display = ''
      if(type.value == "nu" || type.value == "tu"){
        svg.style.display = ''
        svg2.style.display = 'none'
        nlabel.src = 'assets/label.png'
        nName.style.display = ''
        nName1.style.display = ''
        nNameo.style.display = 'none'
        nName1o.style.display = 'none'
      }else{
        svg2.style.display = ''
        svg.style.display = 'none'
        nlabel.src = 'assets/labelo.png'
        nName.style.display = 'none'
        nName1.style.display = 'none'
        nNameo.style.display = ''
        nName1o.style.display = ''
      }
      
      
      customGrade.style.display = 'flex'
      nlabel.style.display = ''
      cbar.style.display = ''
      barIMG.style.display = ''
      flaglab.style.display = ''

      if(flagC.checked){
        barIMG.src = `assets/cswf${type.value}.png`
      }
      else
      {
        barIMG.src = `assets/csnf${type.value}.png`
      }

      
    }
    else{
      ipCustom.style.display = 'none'
      divs.style.display = 'none'
      ipCustoml.style.display = 'none'
      stroke.style.display = 'none'
      strokel.style.display = 'none'

      svg2.style.display = 'none'
      svg.style.display = 'none'
      nName.style.display = 'none'
      nName1.style.display = 'none'
      nNameo.style.display = 'none'
      nName1o.style.display = 'none'
      customGrade.style.display = 'none'
      nlabel.style.display = 'none'
      cbar.style.display = 'none'
      barIMG.style.display = 'none'
      flaglab.style.display = 'none'
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
      glab.style.display = ''
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

      glab.style.display = 'none'
      

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
      glab.style.display = ''
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
      glitterlab.style.display = 'flex'
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

      if (type.value != 'nu' && type.value != 'gu'){
        glitterlab.style.display = 'none' 
      }else{
        glitterlab.style.display = 'flex' 
      }
      
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
  ipsub.dispatchEvent(new Event('input'))
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

    

    if(type.value === 'tk' || type.value === 'nudsr'){
      image.classList.add('TK')
    }else{
      image.classList.remove('TK')
    }
    image.src = src_;
  }
});

//trigger
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

//rarity
window.addEventListener('DOMContentLoaded', function() {
  var rarity = document.getElementById('rare');
  var rimage = document.getElementById('rarity');
  rarity.addEventListener('change', update);

  function update(){
    rimage.src = `assets/rarity/${rarity.value}.png`
  }
  
})

//Grade//
window.addEventListener('DOMContentLoaded', function() {
  var type = document.getElementById('cts');
  var grade = document.getElementById('g');
  var image = document.getElementById('si');
  var image1 = document.getElementById('gs');
  var image11 = document.getElementById('gs2');  
  var image2 = document.getElementById('si1');
  var bg1 = document.getElementById('ficon'); 
  var bg2 = document.getElementById('sicon');
  var csk = document.getElementById('csk');
  var ask = document.getElementById('ask');
  var glitter = document.getElementById('glitter');
  var encounter = document.getElementById('enc');
  var nation = document.getElementById('ns');
  var dual = document.getElementById('dual');
  var fselect = document.getElementById('fns');
  var sselect = document.getElementById('sns');
  var gfimage = document.getElementById('dnfgrade');
  var gsimage = document.getElementById('dnsgrade');
  var overDress = document.getElementById('ov');
  grade.addEventListener('change', update);
  csk.addEventListener('change', update);
  ask.addEventListener('change', update);
  glitter.addEventListener('change', update);
  encounter.addEventListener('change', update());
  nation.addEventListener('change', update());
  dual.addEventListener('change', update());
  type.addEventListener('change', update())

  

  function update() {
    var select = grade.value;



    var _src_ = "assets/grade" + select + ((type.value == 'nudsr') ? "dsr" : "") + ".png";
    var src_ = "assets/" + csk.value + ((type.value == 'nudsr') ? "dsr" : "") + ".png";
    var src__ = "assets/" + ask.value + ((type.value == 'nudsr' && ask.value != 'none_') ? "dsr" : "") + ".png";

    if(nation.value == 'cs'){
      bg1.src = "assets/none_.png"
      image1.src = _src_;
      image.src = src_;
      image2.src = src__;
      return;
    }

    if (glitter.checked && !encounter.checked && !dual.checked){
      _src_ = `assets/dual nation/number/${nation.value}${select}.png`
      image11.src = "assets/none_.png"
      bg1.src = `assets/grade/glitter.png`
      bg2.src = "assets/none_.png"

    }
    else if(dual.checked && glitter.checked)
    {
      _src_ = `assets/dual nation/number/f${fselect.value}${select}.png`
      image11.src = `assets/dual nation/number/s${sselect.value}${select}.png`
      bg1.src = `assets/grade/glitter.png`
      bg2.src = "assets/none_.png"
      gfimage.src = "assets/none_.png"
      gsimage.src = "assets/none_.png"
      
    }
    else if(dual.checked)
    {
      bg1.src = "assets/none_.png"
      _src_ = `assets/dual nation/number/nonGlitter/f${fselect.value}${select}.png`
      image11.src = `assets/dual nation/number/s${sselect.value}${select}.png`
      gfimage.src = `assets/dual nation/grade/f${fselect.value}.png`
      gsimage.src = `assets/dual nation/grade/s${sselect.value}.png`
    }
    else if(!encounter.checked && !overDress.checked && !type.value.includes('o') && type.value != 'ma' && type.value != 'tk' && type.value != 'nudsr'){
      bg1.src = `assets/grade/${nation.value}.png`
      image11.src = "assets/none_.png"
      bg2.src = "assets/none_.png"
    }else{
      bg1.src = `assets/none_.png`
      image11.src = "assets/none_.png"
      bg2.src = "assets/none_.png"
    }

    
    var ty = type.value;

    image1.src = _src_;
    image.src = src_;
    image2.src = src__;
  }
});