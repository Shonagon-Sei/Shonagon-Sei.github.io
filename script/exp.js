function div_img() {
  var d_ = document.getElementById('img_');
  var n_ = document.getElementById('nub');
  var no = document.getElementById('nubo');
  var s = document.getElementById('eb');
  var type = document.getElementById('cts');
  var dpim = document.getElementById('dpim')
  var illust = document.getElementById('illust');
  var set = document.getElementById('set');
  var flavText = document.getElementById('flavortext')
  var se = document.getElementById('se');
  var pw = document.getElementById('pw');
  var pw1 = document.getElementById('pw1');
  var cn = document.getElementById('cns');
  var rec = document.getElementById('rec');
  var rec1 = document.getElementById('rec1');
  var eb = document.getElementById('eb');
  var eb2 = document.getElementById('eb2');
  var nName = document.getElementById('nname')
var nName1 = document.getElementById('nname1')

  var scrollT = d_.scrollTop
  var scrollL = d_.scrollLeft

  console.log(scrollL, scrollT)

  illust.style.transform = "translate(-12px, -9.2px)";
  set.style.transform = "translate(25px, -9.2px)";
  
  se.style.transform = `translate(0px, ${((type.value === 'ma') ? '20px':'0px')})`
  pw.style.translate = "0px -1.2px";
  pw1.style.translate = "0px -1.2px";
  cn.style.translate = `0px -2px`
  rec.style.transform = `translate(${((type.value === 'tk') ? '257px, -21px' :  '242.75px, -22.2px')})`;
  rec1.style.transform = `translate(${((type.value === 'tk') ? '257px, -21px' :  '242.75px, -22.2px')})`;
  nName.style.transform = `translate(242.75px, -37.2px)`
  nName1.style.transform = `translate(242.75px, -37.2px)`
  eb.style.transform = `translate(0px, ${((type.value === 'ma') ? '18.8px':'-1.2px')})`


  d_.style.border = '0';

  
  //s.style.transform = "translate(0 , -1.2px)";

  var svgElements = document.body.querySelectorAll('svg');
  svgElements.forEach(function(item) {
    item.setAttribute("width", item.getBoundingClientRect().width);
    item.setAttribute("height", item.getBoundingClientRect().height);
    item.style.width = null;
    item.style.height= null;
  });

  //
  var fileName = prompt('Please Enter File Name')
  html2canvas(d_, { scale: 6.665 ,backgroundColor: null, allowTaint:true}).then(function(canvas) {
    var image = new Image();
    image.src = canvas.toDataURL();

    var link = document.createElement('a');
    link.href = image.src;
    link.download = `${fileName}.png`;
    link.click();

    d_.style.border = '';
    n_.style.transform = '';
    no.style.transform = '';
    s.style.transform = '';
    se.style.transform = ''
    pw.style.translate = ''
    pw1.style.translate = ''
    cn.style.translate = ''
    rec.style.transform = ''
    rec1.style.transform = ''
    nname.style.transform = ''
    nname1.style.transform = ''
    eb.style.transform = ''
    
  });
}

document.getElementById('exp').addEventListener('click', div_img);

function div_img1() {
  var d_ = document.getElementById('img_');
  var n_ = document.getElementById('nub');
  var no = document.getElementById('nubo');
  var s = document.getElementById('eb');
  var type = document.getElementById('cts');
  var dpim = document.getElementById('dpim')
  var illust = document.getElementById('illust');
  var set = document.getElementById('set');
  var flavText = document.getElementById('flavortext')
  var se = document.getElementById('se');
  var pw = document.getElementById('pw');
  var pw1 = document.getElementById('pw1');
  var cn = document.getElementById('cns');
  var rec = document.getElementById('rec');
  var rec1 = document.getElementById('rec1');
  var eb = document.getElementById('eb');
  var eb2 = document.getElementById('eb2');
  var nName = document.getElementById('nname')
var nName1 = document.getElementById('nname1')

  var scrollT = dpim.scrollTop
  var scrollL = dpim.scrollLeft

  illust.style.transform = "translate(-12px, -9.2px)";
  set.style.transform = "translate(25px, -9.2px)";
  
  se.style.transform = `translate(0px, ${((type.value === 'ma') ? '20px':'0px')})`
  pw.style.translate = "0px -1.2px";
  pw1.style.translate = "0px -1.2px";
  cn.style.translate = `0px -2px`
  rec.style.transform = `translate(${((type.value === 'tk') ? '257px, -21px' :  '242.75px, -22.2px')})`;
  rec1.style.transform = `translate(${((type.value === 'tk') ? '257px, -21px' :  '242.75px, -22.2px')})`;
  nName.style.transform = `translate(242.75px, -37.2px)`
  nName1.style.transform = `translate(242.75px, -37.2px)`
  eb.style.transform = `translate(0px, ${((type.value === 'ma') ? '18.8px':'-1.2px')})`
  //

  d_.style.border = '0';
  no.style.transform = "translate(0 , -1.2px)";
  let scroll_obj = {
    behavior: 'smooth',
    top: scrollL,
    left: scrollT
  };

  
  dpim.scroll(scroll_obj)
  var fileName = prompt('Please Enter File Name')

  html2canvas(d_, { scale: 6.665 ,backgroundColor: null, scrollX: scrollL, scrollY:scrollT}).then(function(canvas) {
    var image = new Image();
    image.src = canvas.toDataURL();

    var link = document.createElement('a');
    link.href = image.src;
    link.download =  `${fileName}.png`;
    link.click();

    d_.style.border = '';
    n_.style.transform = '';
    no.style.transform = '';
    s.style.transform = '';
    se.style.transform = ''
    pw.style.translate = ''
    pw1.style.translate = ''
    cn.style.translate = ''
    rec.style.transform = ''
    rec1.style.transform = ''
    nname.style.transform = ''
    nname1.style.transform = ''
    eb.style.transform = ''
    
  });
}

document.getElementById('exp1').addEventListener('click', div_img1);






const hbutton = document.getElementById('how');
const cbutton = document.getElementById('close');
const overlay = document.getElementById('overlay');
const modal = document.getElementById('modal');

hbutton.addEventListener('click', () => openModal())
cbutton.addEventListener('click', () => closeModal())

function openModal(){
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(){
  modal.classList.remove('active')
  overlay.classList.remove('active')
}

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})
