import Swiper from 'swiper'
import { Pagination } from 'swiper/modules'
import 'swiper/scss'
import 'swiper/scss/pagination'

const swiper3 = new Swiper('.pr_swiper', {
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
    swiper3.disable()
  } else {
    swiper3.enable()
  }
}

let windowSize = window.matchMedia('(min-width: 481px)')

checkWindowSize(windowSize)

windowSize.addEventListener('change', function () {
  checkWindowSize(windowSize)
})

window.checkWindowSize = checkWindowSize
