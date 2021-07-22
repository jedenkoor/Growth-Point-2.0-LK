import 'swiper/swiper-bundle.css'
document.querySelector('.header-nav__theme').addEventListener('click', () => {
  document.querySelector('html').classList.toggle('dark-theme')
})

document.querySelector('.header-menu__item .header-nav__theme').addEventListener('click', () => {
  document.querySelector('html').classList.toggle('dark-theme')
})

document.querySelector('.header-nav__burger').addEventListener('click', () => {
  document.querySelector('.header__nav').classList.toggle('header__nav--open')
})

document.querySelector('.mobile-menu__item:last-child .mobile-menu__link').addEventListener('click', () => {
  document.querySelector('.header__nav').classList.toggle('header__nav--open')
})

document.querySelector('.header-sidebar__btn').addEventListener('click', function () {
  this.closest('.header-sidebar__wrap').classList.toggle('header-sidebar__wrap--active')
})

document.querySelector('.header-sidebar__close').addEventListener('click', function () {
  this.closest('.header-sidebar__wrap').classList.toggle('header-sidebar__wrap--active')
})
