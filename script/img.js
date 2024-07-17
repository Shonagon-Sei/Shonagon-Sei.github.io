//By ChatGPT

var dropzone = document.getElementById('img_');
var imageContainer = document.getElementById('imh');
var droppedImage = document.getElementById('dpim');
var lock = document.getElementById('lock');

dropzone.addEventListener('dragenter', preventDefault, false);
dropzone.addEventListener('dragover', preventDefault, false);
dropzone.addEventListener('dragleave', preventDefault, false);
dropzone.addEventListener('drop', preventDefault, false);

// Handle dragenter event
dropzone.addEventListener('dragenter', handleDragEnter, false);

// Handle dragover event
dropzone.addEventListener('dragover', handleDragOver, false);

// Handle dragleave event
dropzone.addEventListener('dragleave', handleDragLeave, false);

// Handle drop event
dropzone.addEventListener('drop', handleDrop, false);

// Prevent default drag behaviors
function preventDefault(event) {
  event.preventDefault();
}

// Handle dragenter event
function handleDragEnter(event) {
  dropzone.classList.add('drag-over');
}

// Handle dragover event
function handleDragOver(event) {
  event.preventDefault();
}

// Handle dragleave event
function handleDragLeave(event) {
  dropzone.classList.remove('drag-over');
}

// Handle drop event
function handleDrop(event) {
  event.preventDefault();
  dropzone.classList.remove('drag-over');

  var file = event.dataTransfer.files[0];

  // Display the dropped image
  var reader = new FileReader();
  reader.onload = function() {
    var img = document.createElement('img');
    img.src = reader.result;
    img.alt = 'dpim';
    img.className = 'dpim';
    imageContainer.innerHTML = '';
    imageContainer.appendChild(img);
  };
  reader.readAsDataURL(file);
}

// Variables for tracking the drag operation
var isDragging = false;
var startCoords = {};
var startImagePosition = {};

// Handle mousedown event
function handleMouseDown(event) {
  if ((event.target !== droppedImage) || lock.checked) return;

  isDragging = true;
  startCoords.x = event.clientX;
  startCoords.y = event.clientY;
  startImagePosition.left = droppedImage.offsetLeft;
  startImagePosition.top = droppedImage.offsetTop;
  dropzone.style.cursor = 'grabbing';

  // Prevent default dragging behavior
  event.preventDefault();
}

var zoomLevel = 100;

document.getElementById("img_").addEventListener("wheel", function(event) {
  

  if(lock.checked){
    return
  }
  event.preventDefault();
  // Adjust the zoom level based on the scroll wheel delta
  zoomLevel += event.deltaY * -0.001;

  // Clamp the zoom level within a specified range
  zoomLevel = Math.min(Math.max(0.01, zoomLevel), 3);

  // Apply the zoom level as a CSS transform to the content
  document.getElementById("imh").style.transform = "scale(" + zoomLevel + ")";
});

/* var slider = document.getElementById("xOffset");
let startScrollY = parseInt(dropzone.scrollTop, 10);
let startScrollX = parseInt(dropzone.scrollLeft, 10);

slider.oninput = function(){
  
  let scroll_obj = {
    behavior: 'smooth'
  };
  console.log(startScrollX)

  scroll_obj.left = startScrollX + (slider.value - 1);
  console.log(scroll_obj.left)
  dropzone.scroll(scroll_obj)
} */

//Import By Click//
document.getElementById('imp').addEventListener('click', function() {
  const fileInput = document.createElement('input');
  fileInput.type = 'file';
  fileInput.accept = 'image/*';

  fileInput.addEventListener('change', function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
      const image = document.getElementById('dpim');
      image.src = e.target.result;
      image.style.height = "613.5px";
    };

    reader.readAsDataURL(file);
  });

  fileInput.click();
});

document.getElementById('custom').addEventListener('click', function() {
  const fileInput = document.createElement('input');
  var bg1 = document.getElementById('ficon'); 
  fileInput.type = 'file';
  fileInput.accept = 'image/*';

  fileInput.addEventListener('change', function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
      const image = document.getElementById('gn');
      image.src = e.target.result;
      image.style.height = "613.5px";
    };

    reader.readAsDataURL(file);
    bg1.style.display = 'none'
  });

  fileInput.click();
});

document.getElementById('customIcon').addEventListener('click', function() {
  const fileInput = document.createElement('input');
  fileInput.type = 'file';
  fileInput.accept = 'image/*';

  fileInput.addEventListener('change', function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
      const image = document.getElementById('customGrade');
      image.src = e.target.result;
      image.style.height = "613.5px";
    };

    reader.readAsDataURL(file);
  });

  fileInput.click();
});

document.getElementById('customNEWIcon').addEventListener('click', function() {
  const fileInput = document.createElement('input');
  fileInput.type = 'file';
  fileInput.accept = 'image/*';

  fileInput.addEventListener('change', function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
      var fileName = prompt('Please Enter Keyword')
      var icon = new customIcon();
      icon.image = e.target.result;
      icon.text = fileName
      allCustoms.push(icon)
      
    };

    reader.readAsDataURL(file);
  });

  fileInput.click();
});


