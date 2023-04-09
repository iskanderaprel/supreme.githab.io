const login__popapEl = document.querySelector('.login__popap');
const button_enterEl = document.querySelector('.button_enter');

button_enterEl.addEventListener('click', function (e) {
login__popapEl.classList.toggle('visible');
});


const burgerEl = document.querySelector('.burger');
const menuEl = document.querySelector('.menu');
burgerEl.addEventListener('click', function (e) {
  menuEl.classList.toggle('menu_show');
}); 

