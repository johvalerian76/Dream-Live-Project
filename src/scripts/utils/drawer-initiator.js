const menu = document.querySelector('.menu-toggle');
const input = document.querySelector('.menu-toggle input');
const hero = document.querySelector('.hero');
const main = document.querySelector('main');
const drawer = document.querySelector('.nav__list');

menu.addEventListener('click', (event) => {
  drawer.classList.toggle('slide');
  event.stopPropagation();
});

hero.addEventListener('click', () => {
  drawer.classList.remove('slide');
});

main.addEventListener('click', () => {
  drawer.classList.remove('slide');
});
