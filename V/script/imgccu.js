//By ChatGPT

var dropzone = document.getElementById('img_');
var imageContainer = document.getElementById('imh');
var droppedImage = document.getElementById('dpim');

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
  if (event.target !== droppedImage) return;

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
  event.preventDefault();

  // Adjust the zoom level based on the scroll wheel delta
  zoomLevel += event.deltaY * -0.001;

  // Clamp the zoom level within a specified range
  zoomLevel = Math.min(Math.max(0.01, zoomLevel), 3);

  // Apply the zoom level as a CSS transform to the content
  document.getElementById("imh").style.transform = "scale(" + zoomLevel + ")";
});

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

