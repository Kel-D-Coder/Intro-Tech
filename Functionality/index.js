//Responsive Nav
const toggleNav = document.querySelector('.menu-toggle')
const responsiveLinks = document.querySelector('.responsive-links')

toggleNav.addEventListener('click', () => {
  if (!responsiveLinks.classList.contains('toggle')) {
    responsiveLinks.classList.add('toggle')
  } else  {
    responsiveLinks.classList.remove('toggle')
  }
})

// swiper
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});