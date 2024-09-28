

function typeSet() {
  var type = document.getElementById('cts');
  var nation = document.getElementById('ns');
  var nslab = document.getElementById('nslab');


  var fselect = document.getElementById('fns');
  var sselect = document.getElementById('sns');

  var trigger = document.getElementById('trg_');
  var trigger1 = document.getElementById('trg');

  var grade = document.getElementById('g');






  var encounter = document.getElementById('enc');
  var enc = document.getElementById('enclab')

  var clan = document.getElementById('cl');
  var clanlabel = document.getElementById('cll');

  var dualab = document.getElementById('dualab');
  var dual = document.getElementById('dual')





  
  type.addEventListener('change', update);
  nation.addEventListener('change', update);
  clan.addEventListener('change', update);
  encounter.addEventListener('change', update);
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


      encounter.style.display = 'none'
      enc.style.display = 'none'
      dual.checked = false
      dualab.style.display = 'none'
    }
    else if (select1 === 'nu') {
      tri = "none";
      tri1 = "flex";
      
      encounter.style.display = 'flex'
      enc.style.display = 'flex'
      dualab.style.display = 'flex'
    }
    else if (select1 === 'gu') {
      tri = "none";
      tri1 = "flex";
     
      encounter.style.display = 'flex'
      enc.style.display = 'none'
      encounter.checked = true
      dual.checked = false
      dualab.style.display = 'none'
    }
    else if (select1 === 'no') {
      tri = "none";
      tri1 = "flex";
     
      encounter.style.display = 'none'
      enc.style.display = 'none'
      dual.checked = false
      dualab.style.display = 'none'
    }
    else if (select1 === 'bo') {
      tri = "none";
      tri1 = "flex";
     
      encounter.style.display = 'none'
      enc.style.display = 'none'
      dual.checked = false
      dualab.style.display = 'none'
    }
    else if (select1 === 'so') {
      tri = "none";
      tri1 = "flex";
     
      encounter.style.display = 'none'
      enc.style.display = 'none'
      dual.checked = false
      dualab.style.display = 'none'
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
     

      clan.style.display = 'flex'
      clanlabel.style.display = 'flex'
    }
    else
    {
      if ($("#ns option[value='nl']").length <= 0){
        $("#ns").prepend("<option value='nl'>No Nation</option>");
      }
     
      clan.style.display = 'none'
      clanlabel.style.display = 'none'
      
    }

    if (dual.checked){

      fselect.style.display = 'flex'
      sselect.style.display = 'flex'
      nation.style.display = 'none'
      nslab.style.display = 'none'

      encounter.style.display = 'none'
      enc.style.display = 'none'
      encounter.checked = false
    }
    else
    {

      fselect.style.display = 'none'
      sselect.style.display = 'none'
      nation.style.display = 'flex'
      nslab.style.display = 'flex'

    }
    
    grade.style.display = tri1;
    trigger.style.display = tri;
    trigger1.style.display = tri;
  }
}

window.addEventListener('DOMContentLoaded', typeSet);
