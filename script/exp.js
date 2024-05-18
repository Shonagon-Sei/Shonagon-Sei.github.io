function div_img() {
  var d_ = document.getElementById('img_');
  var n_ = document.getElementById('nub');
  var no = document.getElementById('nubo');
  var s = document.getElementById('eb');
  var type = document.getElementById('cts');

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

  illust.style.transform = "translate(-12px, -9.2px)";
  set.style.transform = "translate(25px, -9.2px)";
  flavText.style.transform = "translate(0 , -1.2px)";
  se.style.transform = `translate(0px, ${((type.value === 'ma') ? '20px':'0px')})`
  pw.style.translate = "translate(83px, -3.2px)";
  pw1.style.translate = "translate(83px, -3.2px)";
  cn.style.translate = `0px, ${((type.value === 'ma') ? '24px':'1.8px')}`
  rec.style.transform = `translate(${((type.value === 'tk') ? '257px, -21px' :  '242.75px, -22.2px')})`;
  rec1.style.transform = `translate(${((type.value === 'tk') ? '257px, -21px' :  '242.75px, -22.2px')})`;
  eb.style.transform = `translate(0px, ${((type.value === 'ma') ? '18.8px':'-1.2px')})`



  d_.style.border = '0';
  no.style.transform = "translate(0 , -1.2px)";
  //s.style.transform = "translate(0 , -1.2px)";
  //
  var fileName = prompt('Please Enter File Name')
  html2canvas(d_, { scale: 6.665 ,backgroundColor: null}).then(function(canvas) {
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
    
  });
}

document.getElementById('exp').addEventListener('click', div_img);

function div_img1() {
  var d_ = document.getElementById('img_');
  var n_ = document.getElementById('nub');
  var no = document.getElementById('nubo');
  var s = document.getElementById('eb');

  d_.style.border = '0';
  //
  var fileName = prompt('Please Enter File Name')

  html2canvas(d_, { scale: 6.665 ,backgroundColor: null}).then(function(canvas) {
    var image = new Image();
    image.src = canvas.toDataURL();

    var link = document.createElement('a');
    link.href = image.src;
    link.download =  `${fileName}.png`;
    link.click();

    d_.style.border = '';
    n_.style.transform = 'translate(0, 0.5px)';
    no.style.transform = 'translate(0, 0.5px)';
    
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
