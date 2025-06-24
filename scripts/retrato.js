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

const abrirDropdown = document.querySelector('.abrir-dropdown')
const conteinerDropdown = document.querySelector('.conteiner-dropdown')
const iconeDropdown = document.querySelector('.icone-dropdown')

abrirDropdown.addEventListener('click', () => {
  conteinerDropdown.classList.toggle('esconder')
  iconeDropdown.classList.toggle('rodar')
})
