//Type//
window.addEventListener('DOMContentLoaded', function() {
  var type = document.getElementById('cts');
  var nation = document.getElementById('ns');
  var image = document.getElementById('gn');
  var trigger = document.getElementById('trg_');
  var trigger1 = document.getElementById('trg');
  var grade = document.getElementById('g');
  var grade1 = document.getElementById('gs');
  var triggerImage = document.getElementById('trigger')
  var image0 = document.getElementById('si');
  var image1 = document.getElementById('gs'); 
  var image2 = document.getElementById('si1');

  var se = document.getElementById('se');
  
  type.addEventListener('change', update);
  nation.addEventListener('change', update);
  
  function update() {
    var select1 = type.value;
    var select2 = nation.value;
    var tri = "";
    var tri1 = "";
    var src_ = "assets/" + select2 + select1 + ".png";
    var im = "";
    var im1 = "";
    var im2 = ""

    
    
    if (select1 === "tu") {
      tri = "flex";
      tri1 = "none";
      im = `assets/${trigger1.value}.png`
      grade.src = "assets/grade_0.png"
    }
    else {
      tri = "none";
      tri1 = "flex";
      im = "assets/none_.png"
      grade1.src = `assets/grade_${grade.value}.png`
    }

    image.src = src_;
    grade.style.display = tri1;
    grade1.style.display = tri1;
    trigger.style.display = tri;
    trigger1.style.display = tri;
    triggerImage.src = im
  }
});

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
      src_ = "assets/twd.png";
      src__ = "assets/none_.png";
    }
    else if (select === "_4P") {
      _src_ = "assets/grade_4.png";
      src_ = "assets/twd.png";
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
    image.src = _src_;
    image1.src = src_;
    image2.src = src__;
  }
});