const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const menuNav = document.getElementById('menu-nav');
const menuItems = document.querySelectorAll('.menu-items');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.add('d-none');
  closeBtn.classList.remove('d-none');
  menuNav.classList.remove('d-none');
});

closeBtn.addEventListener('click', () => {
  menuBtn.classList.remove('d-none');
  closeBtn.classList.add('d-none');
  menuNav.classList.add('d-none');
});

menuItems.forEach((link) => {
  link.addEventListener('click', () => {
    menuBtn.classList.remove('d-none');
    closeBtn.classList.add('d-none');
    menuNav.classList.add('d-none');
  });
});