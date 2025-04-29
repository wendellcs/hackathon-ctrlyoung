const menuToggle = document.getElementById('menu-toggle')
const fecharMenu = document.querySelector('.menu-X')
const headerLinks = document.querySelector('.header-links')
const mobileMenu = document.querySelector('.mobile-menu')

fecharMenu.addEventListener('click', () => {
  mobileMenu.style.display = 'none'
})

menuToggle.addEventListener('click', () => {
    mobileMenu.style.display = 'block'
});

