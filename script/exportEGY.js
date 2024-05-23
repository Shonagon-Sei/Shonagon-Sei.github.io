function div_img() {
  var d_ = document.getElementById('img_');
  var n_ = document.getElementById('nub');



  d_.style.border = '0';
  n_.style.transform = "translate(0 , -1.2px)";
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
    
  });
}

document.getElementById('exp').addEventListener('click', div_img);

