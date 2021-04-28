const btnMenu = document.querySelector('.btn-menu')
const menuList = document.querySelector('.menu-list')

function openMenu() {
  menuList.classList.toggle('active')
}

function closeMenu(event) {
  if (event.target !== btnMenu) {
    menuList.classList.remove('active')
  }
}

btnMenu.addEventListener('click', openMenu)
window.addEventListener('click', closeMenu)
