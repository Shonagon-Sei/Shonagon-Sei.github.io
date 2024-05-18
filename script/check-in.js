
const cbutton = document.getElementById('closew');
const overlay = document.getElementById('overlay');
const welcome = document.getElementById('welcome');

cbutton.addEventListener('click', () => closeModal())

function openModal(){
  welcome.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(){
  welcome.classList.remove('active')
  overlay.classList.remove('active')
}

overlay.addEventListener('click', () => {
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