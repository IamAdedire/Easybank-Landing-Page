const menuToggle = document.getElementById('menu-toggle');
const overlay = document.querySelector('.overlay');
const mobileMenu = document.querySelector('.menu-container');
const body = document.querySelector('body');



menuToggle.addEventListener('click', toggleMenu);



function toggleMenu() {
    menuToggle.classList.toggle('is-active');
    overlay.classList.toggle('show-overlay');
    mobileMenu.classList.toggle('menu-open');
    body.classList.toggle('no-scroll')
}