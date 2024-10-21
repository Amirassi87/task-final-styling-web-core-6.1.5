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
  let windowEqSize = window.matchMedia(
    '(min-width: 1896px) and (max-width: 2559px)'
  )
  let windowBrSize = window.matchMedia('(min-width: 2560px)')

  let checkBtn = document.getElementById('swiper__btn__show-hide').src
  let btnVal = 'http://' + location.host + '/img/hide.png'

  console.log(checkBtn)
  //console.log(btnVal)

  if (checkHeight == 'auto') {
    document.getElementById('eq_swiper').style.height = '11.875em'
    document.getElementById('equipments__btn__show-hide').src =
      'img/ReadMore.png'

    if (checkBtn == btnVal) {
      if (windowEqSize.matches) {
        document.getElementById('nav-footer').style.marginTop = '65em'
        // } else {
        //   document.getElementById('nav-footer').style.marginTop = '70em'
      } else if (windowBrSize.matches) {
        document.getElementById('nav-footer').style.marginTop = '65em'
      } else {
        document.getElementById('nav-footer').style.marginTop = '65em'
      }
    } else {
      if (windowEqSize.matches) {
        document.getElementById('nav-footer').style.marginTop = '65em'
        // } else {
        //   document.getElementById('nav-footer').style.marginTop = '65em'
        // }
      } else if (windowBrSize.matches) {
        document.getElementById('nav-footer').style.marginTop = '80em'
      } else {
        document.getElementById('nav-footer').style.marginTop = '65em'
      }
    }
  } else {
    document.getElementById('eq_swiper').style.height = 'auto'
    document.getElementById('equipments__btn__show-hide').src = 'img/hide.png'

    if (checkBtn == btnVal) {
      if (windowEqSize.matches) {
        document.getElementById('nav-footer').style.marginTop = '75em'
        // } else {
        //   document.getElementById('nav-footer').style.marginTop = '90em'
        // }
      } else if (windowBrSize.matches) {
        document.getElementById('nav-footer').style.marginTop = '90em'
      } else {
        document.getElementById('nav-footer').style.marginTop = '90em'
      }
    } else {
      if (windowEqSize.matches) {
        document.getElementById('nav-footer').style.marginTop = '75em'
        // } else {
        //   document.getElementById('nav-footer').style.marginTop = '85em'
        // }
      } else if (windowBrSize.matches) {
        document.getElementById('nav-footer').style.marginTop = '90em'
      } else {
        document.getElementById('nav-footer').style.marginTop = '85em'
      }
    }
  }
}

window.checkWindowSize = checkWindowSize
window.showAll = showAll
