const burgerBtn = document.querySelector('.burger-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCloseBtn = document.querySelector('.menu-close-btn');
const backdrop = document.querySelector('.backdrop');
const heroButton = document.querySelector('.hero-button');
const modalCloseBtn = document.querySelector('.icon-close');

burgerBtn.addEventListener('click', () => {
  toggleMobileMenu();
});

menuCloseBtn.addEventListener('click', () => {
  toggleMobileMenu();
});

heroButton.addEventListener('click', () => {
  toggleBackdrop();
});

modalCloseBtn.addEventListener('click', () => {
  toggleBackdrop();
});

function toggleMobileMenu() {
  mobileMenu.classList.toggle('is-open');
}

function toggleBackdrop() {
  backdrop.classList.toggle('is-open');
}
