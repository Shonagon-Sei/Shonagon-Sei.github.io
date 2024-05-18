import Cookies from 'js-cookie'

const wcbutton = document.getElementById('closew');
const woverlay = document.getElementById('overlay');
const welcome = document.getElementById('welcome');

wcbutton.addEventListener('click', () => closewModal())

function openwModal(){
  welcome.classList.add('active')
  overlay.classList.add('active')
}

function closewModal(){
  welcome.classList.remove('active')
  woverlay.classList.remove('active')
}

woverlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.welcome.active')
  modals.forEach(welcome => {
    closeModal(welcome)
  })
})


const hasVisited = Cookies.get("has-visit") == undefined;
if (hasVisited) {
  Cookies.set("has-visit", "true");
  openwModal()
}