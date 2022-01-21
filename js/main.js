let elSearch = document.getElementById('searchBtn');
let elClose = document.getElementById('closeBtn');
let elModal = document.getElementById('searchModal');
let elUser = document.getElementById('userBtn');
let elUserModal = document.getElementById('userModal');
let elSignModal = document.getElementById('signModal');
let elClose2 = document.getElementById('closeBtn2');
let elHero1 = document.getElementById('hero-part');
let elHero2 = document.getElementById('hero-part2');
let elNext=document.getElementById('nextBtn')
let elPrevious=document.getElementById('previousBtn')

elSearch.addEventListener('click', function(){
  elModal.classList.add('show')
})
elClose.addEventListener('click', function(){
  elModal.classList.remove('show');
})
elUser.addEventListener('click', function(){
  elUserModal.classList.add('modal-add');
  elSignModal.classList.add('sign-add');
})
elClose2.addEventListener('click', function(){
  elUserModal.classList.remove('modal-add');
  elSignModal.classList.remove('sign-add');
})
elNext.addEventListener('click', function(){
  elHero2.classList.toggle('index');
})
elPrevious.addEventListener('click', function(){
  elHero2.classList.toggle('index');
})

let className = "header-color";
let scrollTrigger = 60;

window.onscroll = function() {
  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    document.getElementsByTagName("header")[0].classList.add(className);
  } else {
    document.getElementsByTagName("header")[0].classList.remove(className);
  }
};