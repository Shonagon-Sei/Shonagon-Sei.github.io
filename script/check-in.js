
const wcbutton = document.getElementById('closew');
const woverlay = document.getElementById('overlay');
const welcome = document.getElementById('welcome');

wcbutton.addEventListener('click', () => closeModal())

function openModal(){
  welcome.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(){
  welcome.classList.remove('active')
  woverlay.classList.remove('active')
}

woverlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.welcome.active')
  modals.forEach(welcome => {
    closeModal(welcome)
  })
})


const hasVisited = Cookies.get("has-visited") == undefined;
if (hasVisited) {
  Cookies.set("has-visited", "true");
  openModal()
}