// HTML elements
const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".site-header__top-menu-list")
const menuActiveLinks = document.querySelectorAll('.site-header__top-link');
const menuActiveLink = document.querySelector('.site-header__top-link');
const toUp = document.querySelector('.toUp');
const btn = document.querySelectorAll('.pricing--btn');
const btn1 = document.querySelector('.disable1');
const btn2 = document.querySelector('.disable2');
const btnClose = document.querySelector('.btn--close')
const monthlyCard = document.querySelector('.Monthly-card');
const annualyCard = document.querySelector('.Annualy-card');
const disable = btnClose.getAttribute('disable');
const actionBtn = document.querySelectorAll('.action-button') 


// Slide show
let cardPosition = 0;
const actionCards = document.getElementsByClassName('attitude-item'); 
const totalActionCards = actionCards.length;
const attitudInner = document.getElementsByClassName('attitude--inner');
const slide = document.getElementsByClassName('attitude-carusel')


document.getElementById('actions-next').addEventListener('click', function(){
  moveToNextCard();
})
document.getElementById('actions-prev').addEventListener('click', function(){
  moveToPrevCard();
})
function updateCardPosition(){
  for (let card of actionCards ){
    card.classList.remove('card--visibile');
    card.classList.add('attitude--hidden')
  }
  actionCards[cardPosition].classList.add('card--visibile')
}
function moveToNextCard(){
  if(cardPosition === totalActionCards - 1 ){
    cardPosition = 0;
  }else{
    cardPosition ++;
  }
  updateCardPosition();
}
function moveToPrevCard(){
  if(cardPosition === 0){
    cardPosition = totalActionCards - 1;
  } else {
    cardPosition--;
  }
  updateCardPosition();
}

function autoPlay(){
  moveToNextCard();
}
let time = setInterval(autoPlay, 4000)
// --------------------------------------------------------------------------------
// Click FUNCTIONS 
menuToggle.addEventListener('click', function(){
  menuToggle.classList.toggle('active');
  menu.classList.toggle('sitenav--open')
  menu.classList.toggle('sitenav--close')
})

function changeActiveLink(){
  menuActiveLinks.forEach(link => link.classList.remove('site-menu__active'));
  this.classList.add('site-menu__active');
  menuToggle.classList.remove('active');
  menu.classList.toggle('sitenav--open')
  menu.classList.toggle('sitenav--close')
}



function changeActiveBtn(){
  btn.forEach(b => b.classList.remove('btn--close'));
  this.classList.add('btn--close');
  if(btn1.hasAttribute('disabled')){
    btn1.removeAttribute('disabled');
    btn2.setAttribute('disabled', 'disabled')
  }else{
    btn2.removeAttribute('disabled')
    btn1.setAttribute('disabled', 'disabled')
  }
  monthlyCard.classList.toggle('select');
  annualyCard.classList.toggle('select');
}

function changeBtn() {
  actionBtn.forEach(a => a.classList.remove('action--active'));
  this.classList.add('action--active');
}



actionBtn.forEach(a => a.addEventListener('click', changeBtn))

btn.forEach(b => b.addEventListener('click', changeActiveBtn));

menuActiveLinks.forEach(link => link.addEventListener('click', changeActiveLink));
// Scroll functions


window.addEventListener('scroll', ()=>{
  const scrol = window.scrollY;
  if(scrol > 70){
    toUp.classList.add('toUp-active')
  }else{
    toUp.classList.remove('toUp-active')
  }
})

