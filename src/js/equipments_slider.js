import Swiper from 'swiper'
import { Pagination } from 'swiper/modules'
import 'swiper/scss'
import 'swiper/scss/pagination'

const swiper2 = new Swiper('.eq_swiper', {
  modules: [Pagination],
  // Optional parameters
  direction: 'horizontal',
  loop: false,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets'
  }
})

//enabling the swiper in mobile size windows only
export function checkWindowSize(windowSize) {
  if (windowSize.matches) {
    swiper2.disable()
  } else {
    swiper2.enable()
  }
}

let windowSize = window.matchMedia('(min-width: 481px)')

checkWindowSize(windowSize)

windowSize.addEventListener('change', function () {
  checkWindowSize(windowSize)
})

//check the height value of the swiper block and show/hide brand images according to height value retrieved
export function showAll() {
  const checkHeight = document.getElementById('eq_swiper').style.height

  if (checkHeight == 'auto') {
    document.getElementById('eq_swiper').style.height = '11.875em'
    document.getElementById('equipments__btn__show-hide').src =
      'img/ReadMore.png'
  } else {
    document.getElementById('eq_swiper').style.height = 'auto'
    document.getElementById('equipments__btn__show-hide').src = 'img/hide.png'
  }
}

window.checkWindowSize = checkWindowSize
window.showAll = showAll
