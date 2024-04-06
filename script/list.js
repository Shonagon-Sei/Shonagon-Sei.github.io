

function typeSet() {
  var type = document.getElementById('cts');
  var nation = document.getElementById('ns');
  var image = document.getElementById('gn');
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
  var clanImage = document.getElementById('encounter-clan');

  var se = document.getElementById('nub');
  var nuborder = document.getElementById('nubo');
  
  type.addEventListener('change', update);
  nation.addEventListener('change', update);
  clan.addEventListener('change', update);
  encounter.addEventListener('change', update);

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
      enc.style.display = 'flex'
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

      image.src = src_;
    }
    else
    {
      if ($("#ns option[value='nl']").length <= 0){
        $("#ns").prepend("<option value='nl'>No Nation</option>");
      }
      race1.style.display = 'block'
      raceinner1.style.display = 'block'
      clanImage.style.display = 'none'
      enrace1.style.display = 'none'
      enraceinner1.style.display = 'none'  
      var src_ = "assets/" + select2 + select1 + ".png";
      image.src = src_;
    }
    
    grade.style.display = tri1;
    grade1.style.display = tri1;
    trigger.style.display = tri;
    trigger1.style.display = tri;
    triggerImage.src = im
  }
}

window.addEventListener('DOMContentLoaded', typeSet);



//Critical//
window.addEventListener('DOMContentLoaded', function() {
  var cri = document.getElementById('c');
  var image = document.getElementById('crs');
  
  cri.addEventListener('change', update);
  
  function update() {
    var select = cri.value;
    var src_ = "assets/" + select + ".png";
    image.src = src_;
  }
});

window.addEventListener('DOMContentLoaded', function() {
  var trg = document.getElementById('trg');
  var image = document.getElementById('trigger');
  
  trg.addEventListener('change', update);
  
  function update() {
    var select = trg.value;
    var src_ = "assets/" + select + ".png";
    image.src = src_;
  }
});

//Grade//
window.addEventListener('DOMContentLoaded', function() {
  var type = document.getElementById('cts');
  var grade = document.getElementById('g');
  var image = document.getElementById('si');
  var image1 = document.getElementById('gs'); 
  var image2 = document.getElementById('si1');
  
  grade.addEventListener('change', update);

  function update() {
    var select = grade.value;
    var _src_ = "assets/grade" + select + ".png";
    var src_ = "";
    var src__ = "assets/none_.png";
    var ty = type.value;

    if (select === "_0") {
      src_ = "assets/bts.png";
      src__ = "assets/none_.png"; 
    } 
    else if (select === "_1") {
      src_ = "assets/bts.png";
      src__ = "assets/none_.png";
    }
    else if (select === "_2") {
      src_ = "assets/itc.png";
      src__ = "assets/none_.png";
    }
    else if (select === "_3") {
      src_ = "assets/twd.png";
      src__ = "assets/none_.png";
    }
    else if (select === "_3P") {
      _src_ = "assets/grade_3.png";
      src_ = "assets/twd.png";
      src__ = "assets/psr.png";
    }
    else if (select === "_4") {
      src_ = "assets/tpd.png";
      src__ = "assets/none_.png";
    }
    else if (select === "_4P") {
      _src_ = "assets/grade_4.png";
      src_ = "assets/tpd.png";
      src__ = "assets/psr.png";
    }
    else if (select === "_10") {
      src_ = "assets/twd.png";
      src__ = "assets/none_.png";
    }
    else if (select === "_10P") {
      _src_ = "assets/grade_10.png";
      src_ = "assets/twd.png";
      src__ = "assets/psr.png";
    }
    else if (select === "_11") {
      src_ = "assets/twd.png";
      src__ = "assets/none_.png";
    }
    else if (select === "_11P") {
      _src_ = "assets/grade_11.png";
      src_ = "assets/twd.png";
      src__ = "assets/psr.png";
    }
    image1.src = _src_;
    image.src = src_;
    image2.src = src__;
  }
});