var nav_btn, menu;

nav_btn = document.querySelector('.nav-btn');
menu = document.querySelector('.menu');

nav_btn.addEventListener('click', (e) => {
    nav_btn.classList.toggle('active');
    menu.classList.toggle('active');
});

menu.querySelector('ul').addEventListener('click', () => {
    nav_btn.classList.remove('active');
    menu.classList.remove('active');
})