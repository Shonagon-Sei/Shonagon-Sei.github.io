//import * as windows1251 from './windows-1251.mjs';
/// <reference lib="es2021" />
//Input//
var ip1 = document.getElementById('power');
var ip2 = document.getElementById('cn');
var ip3 = document.getElementById('race');
var ip4 = document.getElementById('shield');
var teb = document.getElementById('teb');
var nation = document.getElementById('ns');
var sp = document.getElementById('sp');
var ipillust = document.getElementById('il');
var ipset = document.getElementById('s');
var ipflavor = document.getElementById('flb');

var ipsub = document.getElementById('odst');
var subtype = document.getElementById('odType');

var darkMode = document.getElementById('dark');

var illust = document.getElementById('illust');
var set = document.getElementById('set');

var illusto = document.getElementById('illusto');
var seto = document.getElementById('seto');

var flavor = document.getElementById('flavorFrame')
var flavText = document.getElementById('flavortext')
var flavTexto = document.getElementById('flavortextO')

var note = document.getElementById('note');

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
var glitter = document.getElementById('glitter');
var clan = document.getElementById('cl')

//Power | Update//
ip1.addEventListener('input', function() {
  pw.textContent = ((ip1.value != '') ? ip1.value: '0' );
  pw1.textContent = ((ip1.value != '') ? ip1.value: '0');

    if(type.value === 'tk'){
      pw.style.transform = 'translate(117px, -2px) skewX(-13deg)'
      pw1.style.transform = 'translate(117px, -2px) skewX(-13deg)'
    }else{
      pw.style.transform = 'translate(83px, -2px) skewX(-13deg)'
      pw1.style.transform = 'translate(83px, -2px) skewX(-13deg)'
    }
  
});

//Set and Illust | Update//
ipset.addEventListener('input', function() {
  set.textContent = ipset.value;  
  seto.textContent = ipset.value;  
});

ipillust.addEventListener('input', function() {
  illust.textContent = "Illust / " + ipillust.value;   
  illusto.textContent = "Illust / " + ipillust.value;   
});

ipsub.addEventListener('input', function(){
  if (type.value === 'no'){
    if(ipsub.value == ""){
      subtype.innerHTML = 'นอมอลออเดอร์'
      subtype.style.webkitTextStroke = '2px #002f69'
      subtype.style.transform = `translate(-14.2px, -39.5px) scaleX(1) scaleY(1)`
      return
    }
    const textLegnth = getTextWidth(`นอมอลออเดอร์/${ipsub.value}`, "12px DSNSR", "0.3px");
    console.log(textLegnth)
    //59
    if (textLegnth > 59){
      var scale = 59 / textLegnth
      var tlx = (textLegnth - 59) * scale
      console.log(scale)  
    }else{
      scale = 1
      var tlx = 0;
    }    
    //var scl = (textLegnth / 59) * 90
    subtype.innerHTML = `นอมอลออเดอร์/${ipsub.value}`
    //subtype.style.scale = `${scale} 1`
    subtype.style.transform = `translate(-14.2px, -39.5px) scaleX(${scale}) scaleY(1)`
    subtype.style.webkitTextStroke = '2px #002f69'
  }
  else if (type.value === 'bo'){
    if(ipsub.value == ""){
      subtype.textContent = 'บลิทช์ออเดอร์'
      subtype.style.transform = `translate(-14.2px, -39.5px) scaleX(1.1) scaleY(1)`
      subtype.style.webkitTextStroke = '2px #901d22'
      return
    }
    const textLegnth = getTextWidth(`บลิทช์ออเดอร์/${ipsub.value}`, "12px DSNSR", "0.3px");
    console.log(textLegnth)
    //59
    if (textLegnth > 59){
      var scale = 59 / textLegnth
      console.log(scale)  
    }else if (textLegnth < 59){
      var scale = 59 / textLegnth
      console.log(scale)  
    }
    else{
      scale = 1
      var tlx = 0;
    }    
    //var scl = (textLegnth / 59) * 90
    subtype.textContent = `บลิทช์ออเดอร์/${ipsub.value}`
    //subtype.style.scale = `${scale} 1`
    subtype.style.transform = `translate(-14.2px, -39.5px) scaleX(${scale}) scaleY(1)`
    subtype.style.webkitTextStroke = '2px #901d22'
  }
  else if (type.value === 'so'){
    if(ipsub.value == ""){
      subtype.textContent = 'เซ็ทออเดอร์'
      subtype.style.transform = `translate(-14.2px, -39.5px) scaleX(1.1) scaleY(1)`
      subtype.style.webkitTextStroke = '2px #243033'
      return
    }
    const textLegnth = getTextWidth(`เซ็ทออเดอร์/${ipsub.value}`, "12px DSNSR", "0.3px");
    console.log(textLegnth)
    //59
    if (textLegnth > 59){
      var scale = 59 / textLegnth 
    }else if (textLegnth < 59){
      var scale = 59 / textLegnth  
    }
    else{
      scale = 1
      var tlx = 0;
    }    
    //var scl = (textLegnth / 59) * 90
    subtype.textContent = `เซ็ทออเดอร์/${ipsub.value}`
    //subtype.style.scale = `${scale} 1`
    subtype.style.transform = `translate(-14.2px, -39.5px) scaleX(${scale}) scaleY(1)`
    subtype.style.webkitTextStroke = '2px #243033'
  }

})

ipflavor.addEventListener('input', function() {
  var list = []
  for (i of ipflavor.value.split('\n')){
    list.push(i)
  }

  const textLegnth = Math.ceil(getTextWidth(list.reduce(
    function (a, b) {
        return a.length > b.length ? a : b;
    }), "16px FTL") / 100);

  if (type.value === 'tu' || type.value === 'nu' || type.value === 'gu')
  {
    const linesCount = Math.round((se.offsetHeight / 16));
    flavText.textContent = ipflavor.value;
    const linesofFlav = Math.round((flavText.offsetHeight / 16));

    if (linesofFlav == 1){
      switch(textLegnth){
        case 0:
          flavor.src = "assets/none_.png";
          break;
        case 1:
          flavor.src = "assets/flavor/Sflavor.png";
          break;
        case 2:
          flavor.src = "assets/flavor/Mflavor.png";
          break;
        case 3:
          flavor.src = "assets/flavor/Bflavor.png";
          break;
      }
      if (encounter.checked){
        flavor.src = flavor.src.replace('flavor/', 'flavor/E')
        flavText.style.color = '#000'
        flavText.style.webkitTextStroke = '1.5px #fff'
      }else{
        flavText.style.color = '#fff'
        flavText.style.webkitTextStroke = '1.5px #000'
      }
    
      if (linesCount >= 1){
        flavor.style.transform = `translate(0, ${(185 - (linesCount * 16))}px)`  
        flavText.style.transform = `translate(0, ${(-115 - (linesCount * 16))}px)`
      }
      else{
        flavor.style.transform = `translate(0, 200px)`  
        flavText.style.transform = `translate(0, -100px)`
      }
    }
    else{
      switch(textLegnth){
        case 0:
          flavor.src = "assets/none_.png";
          break;
        case 1:
          flavor.src = "assets/flavor/2Sflavor.png";
          break;
        case 2:
          flavor.src = "assets/flavor/2Mflavor.png";
          break;
        case 3:
          flavor.src = "assets/flavor/2Bflavor.png";
          break;
      }
    
      if (encounter.checked){
        flavor.src = flavor.src.replace('flavor/', 'flavor/E')
        flavText.style.color = '#000'
        flavText.style.webkitTextStroke = '1.5px #fff'
      }else{
        flavText.style.color = '#fff'
        flavText.style.webkitTextStroke = '1.5px #000'
      }

      if (linesCount >= 1){
        flavor.style.transform = `translate(0, ${(177 - (linesCount * 16))}px)`  
        flavText.style.transform = `translate(0, ${(-115 - (linesCount * 16))}px)`
      }
      else{
        flavor.style.transform = `translate(0, 192px)`  
        flavText.style.transform = `translate(0, -100px)`
      }
    }
  
  }
  else{
    const linesCount = Math.round((seo.offsetHeight / 16));
    flavTexto.textContent = ipflavor.value;
    const linesofFlav = Math.round((flavTexto.offsetHeight / 16));

    if (linesofFlav == 1){
      switch(textLegnth){
        case 0:
          flavor.src = "assets/none_.png";
          break;
        case 1:
          flavor.src = "assets/flavor/Sflavor.png";
          break;
        case 2:
          flavor.src = "assets/flavor/Mflavor.png";
          break;
        case 3:
          flavor.src = "assets/flavor/Bflavor.png";
          break;
      }

    
      if (linesCount >= 1){
        flavor.style.transform = `translate(0, ${(205 - (linesCount * 16))}px)`  
        flavTexto.style.transform = `translate(0, ${(-95 - (linesCount * 16))}px)`
      }
      else{
        flavor.style.transform = `translate(0, 224px)`  
        flavTexto.style.transform = `translate(0, -76px)`
      }
    }
    else{
      switch(textLegnth){
        case 0:
          flavor.src = "assets/none_.png";
          break;
        case 1:
          flavor.src = "assets/flavor/2Sflavor.png";
          break;
        case 2:
          flavor.src = "assets/flavor/2Mflavor.png";
          break;
        case 3:
          flavor.src = "assets/flavor/2Bflavor.png";
          break;
      }  
      if (linesCount >= 1){
        flavor.style.transform = `translate(0, ${(201 - (linesCount * 16))}px)`  
        flavTexto.style.transform = `translate(0, ${(-91 - (linesCount * 16))}px)`
      }
      else{
        flavor.style.transform = `translate(0, 216px)`  
        flavTexto.style.transform = `translate(0, -76px)`
      }
    }
  }
  

  //138 and 212
  //ratio 2460 to 600

  //flavor.src   
});

//Card Name | Update//
ip2.addEventListener('input', function() {

  var tpx = ip2.value.length * 8;
  var tpx_ = "";
  var scl = "250";
  var _sc_ = 1;
  var tlx = 0
  const textLegnth = Math.ceil(getTextWidth(ip2.value, "24px pslxol"));
  if (dual.checked){
    
    if(textLegnth > 192){
      if (textLegnth > 221){
        _sc_ = 221 / textLegnth
        tlx = (221 - 192) / 2
      }else{
        tlx = (textLegnth - 192) / 2
      }
      
      /*
      
      */
      scl = (textLegnth / 192) * 250
      
      
    }
    else
    {
      _sc_ = 1
      scl = 250
    }

    console.log(textLegnth)
  }
  else{
    if(textLegnth > 249){
      _sc_ = 249 / textLegnth
      scl = (textLegnth / 249) * 250
    }
    else
    {
      _sc_ = 1
      scl = 250
    }
    console.log(textLegnth)
  }
  cn.textContent = ((ip2.value != '') ? ip2.value : "Card Name");
  cno.textContent = ((ip2.value != '') ? ip2.value : "Card Name");


    cn.classList.remove('TK')
    cn.classList.remove('MA');
    cn.textContent = ip2.value;

		cn.style.fontFamily = 'pslxol'
    cn.style.fontSize = '24px'
  	cn.style.transform = "scaleX(" + _sc_ + ")" + "scaleY(1) translate(0, 0px) skewX(-13deg)";
  	cn.style.width = scl + "px";
    cn_.style.transform = 'translate(0px, -53px)';
    
  	cno.textContent = ip2.value;

  	cno.style.transform = "scaleX(" + _sc_ + ")" + "scaleY(1) translate(0, 0px) skewX(-13deg)";
  	cno.style.width = scl + "px";
  	console.log(tpx_);
    
    if(type.value === 'tk'){
      cn.classList.add('TK')
      cn.classList.remove('MA');
      note.style.display = 'none'
      cn.style.fontSize = '18px'
      cn.style.transform = "scaleX(" + _sc_ + ")" + "scaleY(1) translate(0, 7px) skewX(-18deg)";
      cn.style.width = scl + "px";
      cn_.style.transform = 'translate(0, -55)';
    
      cno.style.transform = "scaleX(" + _sc_ + ")" + "scaleY(1) translate(0, 7px) skewX(-18deg)";
      cno.style.width = scl + "px";
    }
    else if(type.value === 'ma'){
      cn.classList.add('MA');
      cn.classList.remove('TK');
      cn.style.fontSize = '18px'
      cn.style.transform = "scaleX(" + _sc_ + ")" + "scaleY(1) translate(0, 26px) skewX(-18deg)";
      cn.style.width = scl + "px";
      cn_.style.transform = 'translate(0, -55)';
    }

      var criss = document.getElementById('c');
      criss.dispatchEvent(new Event('change'))      
      var gradess = document.getElementById('g');
      gradess.dispatchEvent(new Event('change'))
});

//Race | Update//
ip3.addEventListener('input', function() {
  
  var enrace1 = document.getElementById('enrec');
  var enraceinner1 = document.getElementById('enrec1');
  rec1.textContent = ((ip3.value != '') ? ip3.value: "Card Race");
  rec.textContent = ((ip3.value != '') ? ip3.value: "Card Race");
  enrace1.textContent = ((ip3.value != '') ? ip3.value: "Card Race");
  enraceinner1.textContent = ((ip3.value != '') ? ip3.value: "Card Race");

  if(type.value === 'tk'){
    rec.classList.add('TK')
    rec1.classList.add('TK')
  }else{
    rec.classList.remove('TK')
    rec1.classList.remove('TK')
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
  effect = effect.replaceAll('AUTO', '<span class=\'image-wrapper\'><img src=\'assets/AUTO.png\' alt=\'Image\' class=\'Iskill\' id=\'auto\'></span>');
  effect = effect.replaceAll('ACT', '<span class=\'image-wrapper\'><img src=\'assets/ACT.png\' alt=\'Image\' class=\'Iskill\' id=\'auto\'></span>');
  effect = effect.replaceAll('CONT', '<span class=\'image-wrapper\'><img src=\'assets/CONT.png\' alt=\'Image\' class=\'Iskill\' id=\'auto\'></span>');
  effect = effect.replaceAll('Stand', '<span class=\'image-wrapper\'><img src=\'assets/Stand Icon.png\' alt=\'Image\' class=\'skill\' id=\'auto\'></span>');
  effect = effect.replaceAll('Rest', '<span class=\'image-wrapper\'><img src=\'assets/Rest Icon.png\' alt=\'Image\' class=\'skill\' id=\'auto\'></span>');
  effect = effect.replaceAll('1/Turn', '<span class=\'image-wrapper\'><img src=\'assets/TH/1 per turn.png\' alt=\'Image\' class=\'skill\' id=\'auto\'></span>');
  effect = effect.replaceAll('1/Fight', '<span class=\'image-wrapper\'><img src=\'assets/1 per fight.png\' alt=\'Image\' class=\'nskill\' id=\'auto\'></span>');
  effect = effect.replaceAll('Critical Trigger', '<span class=\'image-wrapper\'><img src=\'assets/Trigger Crit mini icon.png\' alt=\'Image\' class=\'skill\' id=\'auto\'></span>');
  effect = effect.replaceAll('Draw Trigger', '<span class=\'image-wrapper\'><img src=\'assets/Trigger Draw mini icon.png\' alt=\'Image\' class=\'skill\' id=\'auto\'></span>');
  effect = effect.replaceAll('Heal Trigger', '<span class=\'image-wrapper\'><img src=\'assets/Trigger Heal mini icon.png\' alt=\'Image\' class=\'skill\' id=\'auto\'></span>');
  effect = effect.replaceAll('Front Trigger', '<span class=\'image-wrapper\'><img src=\'assets/Trigger Front mini icon-29.png\' alt=\'Image\' class=\'skill\' id=\'auto\'></span>');
  effect = effect.replaceAll('Over Trigger', '<span class=\'image-wrapper\'><img src=\'assets/Trigger Over mini icon.png\' alt=\'Image\' class=\'skill\' id=\'auto\'></span>');

  //Specific
  effect = effect.replaceAll('Regalis Piece', '<span class=\'image-wrapper\'><img src=\'assets/Regalis Piece Icon.png\' alt=\'Image\' class=\'mskill\' id=\'auto\'></span>');
  effect = effect.replaceAll('Revoldress', '<span class=\'image-wrapper\'><img src=\'assets/RevolDress Icon.png\' alt=\'Image\' class=\'skill\' id=\'auto\'></span>');
  effect = effect.replaceAll('Overdress', '<span class=\'image-wrapper\'><img src=\'assets/o-Dress icon EN.png\' alt=\'Image\' class=\'sskill\' id=\'auto\'></span>');
  effect = effect.replaceAll('Divine Skill', '<span class=\'image-wrapper\'><img src=\'assets/Divine.png\' alt=\'Image\' class=\'divine\' id=\'auto\'></span>');
  effect = effect.replaceAll('Stride', '<span class=\'image-wrapper\'><img src=\'assets/Stride EN.png\' alt=\'Image\' class=\'mskill\' id=\'auto\'></span>');
  effect = effect.replaceAll('Xodress', '<span class=\'image-wrapper\'><img src=\'assets/xodress.png\' alt=\'Image\' class=\'sXskill\' id=\'auto\'></span>')
  effect = effect.replaceAll('Glitter', '<span class=\'image-wrapper\'><img src=\'assets/glitter.png\' alt=\'Image\' class=\'glitter\' id=\'auto\'></span>')
  effect = effect.replaceAll('Unisondress', '<span class=\'image-wrapper\'><img src=\'assets/Unison.png\' alt=\'Image\' class=\'bskill\' id=\'auto\'></span>')
  effect = effect.replaceAll('Dressboost', '<span class=\'image-wrapper\'><img src=\'assets/dressboost.png\' alt=\'Image\' class=\'sskill\' id=\'auto\'></span>')


  //Power Shield Critical
  var encounter = document.getElementById('enc');
  
  
  
  //Circles
  effect = effect.replaceAll('VC', '<span class=\'image-wrapper\'><img src=\'assets/VC.png\' alt=\'Image\' class=\'circle\' id=\'auto\'></span>');
  effect = effect.replaceAll('RC', '<span class=\'image-wrapper\'><img src=\'assets/RC.png\' alt=\'Image\' class=\'circle\' id=\'auto\'></span>');
  effect = effect.replaceAll('GC', '<span class=\'image-wrapper\'><img src=\'assets/GC.png\' alt=\'Image\' class=\'circle\' id=\'auto\'></span>');
  effect = effect.replaceAll('COST', '<span class=\'image-wrapper\'><img src=\'assets/COST.png\' alt=\'Image\' class=\'skill\' id=\'auto\'></span>');


  effect = effect.replaceAll('EB(1)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/EB1.png\' alt=\'Image\' class=\'CCskill\' id=\'auto\'></span>');
  effect = effect.replaceAll('EB(2)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/EB2.png\' alt=\'Image\' class=\'CCskill\' id=\'auto\'></span>');
  effect = effect.replaceAll('EB(3)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/EB3.png\' alt=\'Image\' class=\'CCskill\' id=\'auto\'></span>');
  effect = effect.replaceAll('EB(4)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/EB4.png\' alt=\'Image\' class=\'CCskill\' id=\'auto\'></span>');
  effect = effect.replaceAll('EB(5)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/EB5.png\' alt=\'Image\' class=\'CCskill\' id=\'auto\'></span>');
  effect = effect.replaceAll('EB(6)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/EB6.png\' alt=\'Image\' class=\'CCskill\' id=\'auto\'></span>');
  effect = effect.replaceAll('EB(7)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/EB7.png\' alt=\'Image\' class=\'CCskill\' id=\'auto\'></span>');
  effect = effect.replaceAll('EB(8)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/EB8.png\' alt=\'Image\' class=\'CCskill\' id=\'auto\'></span>');
  effect = effect.replaceAll('EB(9)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/EB9.png\' alt=\'Image\' class=\'CCskill\' id=\'auto\'></span>');
  effect = effect.replaceAll('EB()', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/EB.png\' alt=\'Image\' class=\'CCskill\' id=\'auto\'></span>');
  
  
  effect = effect.replaceAll('EC(1)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/EC1.png\' alt=\'Image\' class=\'CCskill\' id=\'auto\'></span>');
  effect = effect.replaceAll('EC(2)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/EC2.png\' alt=\'Image\' class=\'CCskill\' id=\'auto\'></span>');
  effect = effect.replaceAll('EC(3)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/EC3.png\' alt=\'Image\' class=\'CCskill\' id=\'auto\'></span>');
  effect = effect.replaceAll('EC(4)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/EC4.png\' alt=\'Image\' class=\'CCskill\' id=\'auto\'></span>');
  effect = effect.replaceAll('EC(5)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/EC5.png\' alt=\'Image\' class=\'CCskill\' id=\'auto\'></span>');
  effect = effect.replaceAll('EC(6)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/EC6.png\' alt=\'Image\' class=\'CCskill\' id=\'auto\'></span>');
  effect = effect.replaceAll('EC(7)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/EC7.png\' alt=\'Image\' class=\'CCskill\' id=\'auto\'></span>');
  effect = effect.replaceAll('EC(8)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/EC8.png\' alt=\'Image\' class=\'CCskill\' id=\'auto\'></span>');
  effect = effect.replaceAll('EC(9)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/EC9.png\' alt=\'Image\' class=\'CCskill\' id=\'auto\'></span>');
  effect = effect.replaceAll('EC()', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/EC.png\' alt=\'Image\' class=\'CCskill\' id=\'auto\'></span>');
  
  
  effect = effect.replaceAll('CB(1)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/CB1.png\' alt=\'Image\' class=\'CCskill\' id=\'auto\'></span>');
  effect = effect.replaceAll('CB(2)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/CB2.png\' alt=\'Image\' class=\'CCskill\' id=\'auto\'></span>');
  effect = effect.replaceAll('CB(3)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/CB3.png\' alt=\'Image\' class=\'CCskill\' id=\'auto\'></span>');
  effect = effect.replaceAll('CB(4)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/CB4.png\' alt=\'Image\' class=\'CCskill\' id=\'auto\'></span>');
  effect = effect.replaceAll('CB(5)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/CB5.png\' alt=\'Image\' class=\'CCskill\' id=\'auto\'></span>');
  effect = effect.replaceAll('CB()', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/CB.png\' alt=\'Image\' class=\'CCskill\' id=\'auto\'></span>');
  
  
  effect = effect.replaceAll('CC(1)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/CC1.png\' alt=\'Image\' class=\'CCskill\' id=\'auto\'></span>');
  effect = effect.replaceAll('CC(2)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/CC2.png\' alt=\'Image\' class=\'CCskill\' id=\'auto\'></span>');
  effect = effect.replaceAll('CC(3)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/CC3.png\' alt=\'Image\' class=\'CCskill\' id=\'auto\'></span>');
  effect = effect.replaceAll('CC(4)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/CC4.png\' alt=\'Image\' class=\'CCskill\' id=\'auto\'></span>');
  effect = effect.replaceAll('CC(5)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/CC5.png\' alt=\'Image\' class=\'CCskill\' id=\'auto\'></span>');
  effect = effect.replaceAll('CC()', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/CC.png\' alt=\'Image\' class=\'CCskill\' id=\'auto\'></span>');
  
  
  effect = effect.replaceAll('SB(1)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/SB1.png\' alt=\'Image\' class=\'CCskill\' id=\'auto\'></span>');
  effect = effect.replaceAll('SB(2)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/SB2.png\' alt=\'Image\' class=\'CCskill\' id=\'auto\'></span>');
  effect = effect.replaceAll('SB(3)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/SB3.png\' alt=\'Image\' class=\'CCskill\' id=\'auto\'></span>');
  effect = effect.replaceAll('SB(4)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/SB4.png\' alt=\'Image\' class=\'CCskill\' id=\'auto\'></span>');
  effect = effect.replaceAll('SB(5)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/SB5.png\' alt=\'Image\' class=\'CCskill\' id=\'auto\'></span>');
  effect = effect.replaceAll('SB(6)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/SB6.png\' alt=\'Image\' class=\'CCskill\' id=\'auto\'></span>');
  effect = effect.replaceAll('SB(7)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/SB7.png\' alt=\'Image\' class=\'CCskill\' id=\'auto\'></span>');
  effect = effect.replaceAll('SB(8)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/SB8.png\' alt=\'Image\' class=\'CCskill\' id=\'auto\'></span>');
  effect = effect.replaceAll('SB(9)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/SB9.png\' alt=\'Image\' class=\'CCskill\' id=\'auto\'></span>');
  effect = effect.replaceAll('SB(10)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/SB10.png\' alt=\'Image\' class=\'CCskill\' id=\'auto\'></span>');
  effect = effect.replaceAll('SB()', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/SB.png\' alt=\'Image\' class=\'CCskill\' id=\'auto\'></span>');
  
  
  effect = effect.replaceAll('SC(1)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/SC1.png\' alt=\'Image\' class=\'CCskill\' id=\'auto\'></span>');
  effect = effect.replaceAll('SC(2)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/SC2.png\' alt=\'Image\' class=\'CCskill\' id=\'auto\'></span>');
  effect = effect.replaceAll('SC(3)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/SC3.png\' alt=\'Image\' class=\'CCskill\' id=\'auto\'></span>');
  effect = effect.replaceAll('SC(4)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/SC4.png\' alt=\'Image\' class=\'CCskill\' id=\'auto\'></span>');
  effect = effect.replaceAll('SC(5)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/SC5.png\' alt=\'Image\' class=\'CCskill\' id=\'auto\'></span>');
  effect = effect.replaceAll('SC(6)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/SC6.png\' alt=\'Image\' class=\'CCskill\' id=\'auto\'></span>');
  effect = effect.replaceAll('SC(7)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/SC7.png\' alt=\'Image\' class=\'CCskill\' id=\'auto\'></span>');
  effect = effect.replaceAll('SC(8)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/SC8.png\' alt=\'Image\' class=\'CCskill\' id=\'auto\'></span>');
  effect = effect.replaceAll('SC(9)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/SC9.png\' alt=\'Image\' class=\'CCskill\' id=\'auto\'></span>');
  effect = effect.replaceAll('SC(10)', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/SC10.png\' alt=\'Image\' class=\'CCskill\' id=\'auto\'></span>');
  effect = effect.replaceAll('SC()', '<span class=\'image-wrapper\'><img src=\'assets/BlastCharge/SC.png\' alt=\'Image\' class=\'CCskill\' id=\'auto\'></span>');
  
  effect = effect.replaceAll('GB1', '<span class=\'image-wrapper\'><img src=\'assets/GB/GB1.png\' alt=\'Image\' class=\'skill\' id=\'auto\'></span>');
  effect = effect.replaceAll('GB2', '<span class=\'image-wrapper\'><img src=\'assets/GB/GB2.png\' alt=\'Image\' class=\'skill\' id=\'auto\'></span>');
  effect = effect.replaceAll('GB3', '<span class=\'image-wrapper\'><img src=\'assets/GB/GB3.png\' alt=\'Image\' class=\'skill\' id=\'auto\'></span>');
  effect = effect.replaceAll('GB4', '<span class=\'image-wrapper\'><img src=\'assets/GB/GB4.png\' alt=\'Image\' class=\'skill\' id=\'auto\'></span>');
  effect = effect.replaceAll('GB5', '<span class=\'image-wrapper\'><img src=\'assets/GB/GB5.png\' alt=\'Image\' class=\'skill\' id=\'auto\'></span>');
  effect = effect.replaceAll('GB6', '<span class=\'image-wrapper\'><img src=\'assets/GB/GB6.png\' alt=\'Image\' class=\'skill\' id=\'auto\'></span>');
  effect = effect.replaceAll('GB7', '<span class=\'image-wrapper\'><img src=\'assets/GB/GB7.png\' alt=\'Image\' class=\'skill\' id=\'auto\'></span>');
  effect = effect.replaceAll('GB8', '<span class=\'image-wrapper\'><img src=\'assets/GB/GB8.png\' alt=\'Image\' class=\'skill\' id=\'auto\'></span>');


  effect = effect.replaceAll('/*', '<span class=\'red-text\'>');
  effect = effect.replaceAll('*/', '</span>');

  
  
  effect = effect.replaceAll('[', '<span class=\'under-line\'>[');
  effect = effect.replaceAll(']', ']</span>');
  
  //fcm
  
  

  //【
  
  
  

  var eb = document.getElementById('eb');
  var eb2 = document.getElementById('eb2');

  if (sp.checked || type.value === 'tk'){
    eb.style.display = 'none'
    se.classList.add('SP')

    effect = effect.replaceAll('[Power]', '<span class=\'image-wrapper\'><img src=\'assets/ePower Icon.png\' alt=\'Image\' class=\'value\' id=\'auto\'></span>');
    effect = effect.replaceAll('[Shield]', '<span class=\'image-wrapper\'><img src=\'assets/eShield Icon.png\' alt=\'Image\' class=\'value\' id=\'auto\'></span>');
    effect = effect.replaceAll('[Critical]', '<span class=\'image-wrapper\'><img src=\'assets/eCritical Icon.png\' alt=\'Image\' class=\'value\' id=\'auto\'></span>');
    effect = effect.replaceAll('"', '<span class=\'equote\'>"</span>');
    effect = effect.replaceAll('(', '<span class=\'image-wrapper\'><img src=\'assets/ELSB.png\' alt=\'Image\' class=\'brack\' id=\'auto\'></span>');
    effect = effect.replaceAll(')', '<span class=\'image-wrapper\'><img src=\'assets/ERSB.png\' alt=\'Image\' class=\'brack\' id=\'auto\'></span>')
    effect = effect.replaceAll('/i', '<span class=\'italic\'>(');
    effect = effect.replaceAll('i/', ')</span>');
    //skill //circle //mskill //sskill //value
    effect = effect.replaceAll("class='value'", "class='value SP'")
    effect = effect.replaceAll("class='skill'", "class='skill SP'")
    effect = effect.replaceAll("class='Iskill'", "class='Iskill SP'")
    effect = effect.replaceAll("class='circle'", "class='circle SP'")
    effect = effect.replaceAll("class='mskill'", "class='mskill SP'")
    effect = effect.replaceAll("class='sskill'", "class='sskill SP'")
    effect = effect.replaceAll("class='bskill'", "class='bskill SP'")
    effect = effect.replaceAll("class='brack'", "class='brack SP'")
    effect = effect.replaceAll(".png'", "SP.png'")
    se.style.color = "#FFFFFF"
    se.innerHTML = effect;
  }
  else
  {
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
    effect = effect.replaceAll('/i', '<span class=\'italic\'>(');
    effect = effect.replaceAll('i/', ')</span>');
    eb.style.display = 'flex'
    se.classList.remove('SP')

    se.innerHTML = effect;
    seo.innerHTML = effect;

    if (type.value === 'tu' || type.value === 'nu')
    {

      var complicated = effect.split('\n\n')

      if (complicated.length > 1){
        
        console.log(complicated)

        se.innerHTML = complicated[0]

        const linesCount = countWrappedLines(se) + (se.innerHTML.split('\n').length - 1)
        console.log(linesCount)

        se.innerHTML = complicated[1]

        const linesCount2 = countWrappedLines(se) + (se.innerHTML.split('\n').length - 1)
        console.log(linesCount2)

        se.innerHTML = effect
      
        if (encounter.checked){
          
          eb.src = `assets/textbox/etextbox_${linesCount2}.png`
          eb2.src = `assets/textbox/etextbox_${linesCount}.png`
          eb2.style.transform = `translate(0px, ${-(linesCount2 * 16) - 16}px)`
          se.style.color = "#FFFFFF"
        }
        else{
          if (dual.checked){
            eb.src = `assets/textbox/${((glitter.checked) ? sselect.value : "")}textbox_${linesCount2}.png`
          }else{
            eb.src = `assets/textbox/${((glitter.checked) ? nation.value : "")}textbox_${linesCount2}.png`
          }
          
          eb2.src = `assets/textbox/textbox_${linesCount}.png`
          eb2.style.transform = `translate(0px, ${-(linesCount2 * 16) - 16}px)`
          se.style.color = "#000000"

        }
      }
      else{
        
        const linesCount = countWrappedLines(se) + (se.innerHTML.split('\n').length - 1)
        console.log(linesCount)

        if (encounter.checked){
          eb.src = `assets/textbox/etextbox_${linesCount}.png`
          eb2.src = `assets/textbox/textbox_0.png`
          eb2.style.transform = ``
          se.style.color = "#FFFFFF"
        }
        else{
          eb.src = `assets/textbox/textbox_${linesCount}.png`
          eb2.src = `assets/textbox/textbox_0.png`
          eb2.style.transform = ``
          se.style.color = "#000000"

        }
      }

      
      se.style.transform = '' //+20
      eb.style.transform = '' //+20
    
    }else if(type.value === 'ma'){
      var complicated = effect.split('\n\n')

      if (complicated.length > 1){
        
        console.log(complicated)

        se.innerHTML = complicated[0]

        const linesCount = countWrappedLines(se) + (se.innerHTML.split('\n').length - 1)
        console.log(linesCount)

        se.innerHTML = complicated[1]

        const linesCount2 = countWrappedLines(se) + (se.innerHTML.split('\n').length - 1)
        console.log(linesCount2)

        se.innerHTML = effect

        
        eb.src = `assets/textbox/${((glitter.checked && dual.checked) ? sselect.value : "")}textbox_${linesCount2}.png`
        eb2.src = `assets/textbox/textbox_${linesCount}.png`
        se.style.color = "#000000"
        se.style.transform = 'translate(0px, 22px)' //+20
        eb.style.transform = 'translate(0px, 20px)' //+20
        eb2.style.transform = `translate(0px, ${-(linesCount2 * 16) + 6}px)`
      }
      else
      {
        const linesCount = countWrappedLines(se) + (se.innerHTML.split('\n').length - 1)
        eb.src = `assets/textbox/textbox_${linesCount}.png`
        eb2.src = `assets/textbox/textbox_0.png`
        se.style.color = "#000000"
        se.style.transform = 'translate(0px, 22px)' //+20
        eb.style.transform = 'translate(0px, 20px)' //+20
        eb2.style.transform = ''
      }

      
    }
    else if(type.value === 'gu')
    {
      var complicated = effect.split('\n\n')

      if (complicated.length > 1){
        
        console.log(complicated)

        se.innerHTML = complicated[0]

        const linesCount = countWrappedLines(se) + (se.innerHTML.split('\n').length - 1)
        console.log(linesCount)

        se.innerHTML = complicated[1]

        const linesCount2 = countWrappedLines(se) + (se.innerHTML.split('\n').length - 1)
        console.log(linesCount2)

        se.innerHTML = effect

        
        eb.src = `assets/textbox/etextbox_${linesCount2}.png`
        eb2.src = `assets/textbox/etextbox_${linesCount}.png`
        se.style.color = "#FFFFFF"
        se.style.transform = '' //+20
        eb.style.transform = '' //+20
        eb2.style.transform = `translate(0px, ${-(linesCount2 * 16) - 16}px)`
      }
      else
      {
        const linesCount = countWrappedLines(se) + (se.innerHTML.split('\n').length - 1)
        eb.src = `assets/textbox/etextbox_${linesCount}.png`
        eb2.src = `assets/textbox/textbox_0.png`
        se.style.color = "#FFFFFF"
        se.style.transform = '' //+20
        eb.style.transform = '' //+20
        eb2.style.transform = ''
      }
    }
    else
    {
      var complicated = effect.split('\n\n')

      if (complicated.length > 1){
        
        console.log(complicated)

        seo.innerHTML = complicated[0]

        const linesCount = countWrappedLines(seo) + (seo.innerHTML.split('\n').length - 1)
        console.log(linesCount)

        seo.innerHTML = complicated[1]

        const linesCount2 = countWrappedLines(seo) + (seo.innerHTML.split('\n').length - 1)
        console.log(linesCount2)

        seo.innerHTML = effect

        
        eb.src = `assets/textbox/otextbox_${linesCount2}.png`
        eb2.src = `assets/textbox/otextbox_${linesCount}.png`
        se.style.color = "#FFFFFF"
        se.style.transform = '' //+20
        eb.style.transform = '' //+20
        eb2.style.transform = `translate(0px, ${-(linesCount2 * 16) - 16}px)`
      }
      else
      {
        const linesCount = countWrappedLines(seo) + (seo.innerHTML.split('\n').length - 1)
        eb.src = `assets/textbox/otextbox_${linesCount}.png`
        eb2.src = `assets/textbox/textbox_0.png`
        se.style.color = "#FFFFFF"
        se.style.transform = '' //+20
        eb.style.transform = '' //+20
        eb2.style.transform = ''
      }
    }
    ipflavor.dispatchEvent(new Event('input'));
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

sp.addEventListener('change', SP);

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

  teb.dispatchEvent(new Event('input'))
}

dark.addEventListener('change', DM);

function DM(){
  var hd = document.getElementById('h_1');
  var mx = document.getElementById('main_x');
  var img = document.getElementById('img_');

  if (dark.checked == true){
    document.body.classList.add('dark')
    hd.classList.add('dark')
    mx.classList.add('dark')
    img.classList.add('dark')
    ta.classList.add('dark')
  } else {
    document.body.classList.remove('dark')
    hd.classList.remove('dark')
    mx.classList.remove('dark')
    img.classList.remove('dark')
  }

  teb.dispatchEvent(new Event('input'))
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
    this.shields
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
    this.image
    this.flavor
    this.set
    this.illust
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
  save.set = ipset.value;
  save.illust = ipillust.value;
  save.flavor = ipflavor.value;
  const image = document.getElementById('dpim');
  save.image = image.src;

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
      ipflavor.value = savefiles.flavor;
      ipset.value = savefiles.set;
      ipillust.value = savefiles.illust;


      const image = document.getElementById('dpim');
      image.src = savefiles.image
      image.style.height = "613.5px";

      ip1.dispatchEvent(new Event('input'));
      ip2.dispatchEvent(new Event('input'));
      ip3.dispatchEvent(new Event('input'));
      ip4.dispatchEvent(new Event('input'));
      ipillust.dispatchEvent(new Event('input'));
      ipset.dispatchEvent(new Event('input'));
      ipflavor.dispatchEvent(new Event('input'));
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
    image.src = canvas.toDataURL('image/jpeg');

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
    image.src = canvas.toDataURL('image/jpeg');

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

function getTextWidth(text, font, spacing = '0px') {
  // re-use canvas object for better performance
  const canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));
  const context = canvas.getContext("2d");
  context.font = font;
  context.letterSpacing = spacing;
  const metrics = context.measureText(text);
  return metrics.width;
}





function getCssStyle(element, prop) {
    return window.getComputedStyle(element, null).getPropertyValue(prop);
}

function getCanvasFont(el = document.body) {
  const fontWeight = getCssStyle(el, 'font-weight') || 'normal';
  const fontSize = getCssStyle(el, 'font-size') || '16px';
  const fontFamily = getCssStyle(el, 'font-family') || 'Times New Roman';
  
  return `${fontWeight} ${fontSize} ${fontFamily}`;
}

function countWrappedLines(element) {
  const computedStyle = getComputedStyle(element);
  const lineHeight = parseFloat(computedStyle.lineHeight);

  // Create a temporary clone element to measure the text without wrapping
  const tempElement = document.createElement('div');
  tempElement.style.cssText = `
      width: ${element.clientWidth}px;
      white-space: pre-wrap;
      visibility: hidden;
      position: absolute;
  `;
  tempElement.textContent = element.textContent;
  document.body.appendChild(tempElement);

  const wrappedHeight = element.offsetHeight;
  const tempWrappedHeight = tempElement.offsetHeight;

  document.body.removeChild(tempElement);

  const wrappedLines = Math.round(wrappedHeight / lineHeight);
  const tempWrappedLines = Math.round(tempWrappedHeight / lineHeight);

  // Calculate number of newlines
  const newLineCount = (element.textContent.match(/\n/g) || []).length;

  // Adjust for newlines in wrapped text
  const adjustedWrappedLines = wrappedLines - newLineCount;

  return adjustedWrappedLines;
}
