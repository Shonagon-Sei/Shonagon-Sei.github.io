function div_img() {
  var d_ = document.getElementById('img_');
  var n_ = document.getElementById('nub');

  d_.style.border = '0';
  n_.style.transform = "translate(0 , -1.2px)";

  html2canvas(d_, { scale: 6.665 ,backgroundColor: null}).then(function(canvas) {
    var image = new Image();
    image.src = canvas.toDataURL();

    var link = document.createElement('a');
    link.href = image.src;
    link.download = 'CFV fanmade.png';
    link.click();

    d_.style.border = '';
    n_.style.transform = '';
    
  });
}

document.getElementById('exp').addEventListener('click', div_img);

function div_img1() {
  var d_ = document.getElementById('img_');
  var n_ = document.getElementById('nub');

  d_.style.border = '0';
  n_.style.transform = "translate(0 , 0)";

  html2canvas(d_, { scale: 6.665 ,backgroundColor: null}).then(function(canvas) {
    var image = new Image();
    image.src = canvas.toDataURL();

    var link = document.createElement('a');
    link.href = image.src;
    link.download = 'CFV fanmade.png';
    link.click();

    d_.style.border = '';
    n_.style.transform = '';
    
  });
}

document.getElementById('exp1').addEventListener('click', div_img1);
