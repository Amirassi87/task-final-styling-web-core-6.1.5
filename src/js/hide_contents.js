export function showParagraph() {
  document.getElementById('about-us__second-part').style.position = 'static'
  document.getElementById('about-us__third-part').style.position = 'static'
}

export function openMenu() {
  document.getElementById('navbar').style.position = 'absolute'
  document.getElementById('navbar').style.zIndex = 10
  document.getElementById('navbar').style.top = 0
  document.getElementById('navbar').style.left = 0
  document.getElementById('main').style.opacity = 0.1

  document.getElementById('navbar').classList.add('sidebar--transition--in')
}

export function closeMenu() {
  document.getElementById('navbar').style.position = 'absolute'
  document.getElementById('navbar').style.left = '-1000px'
  document.getElementById('main').style.opacity = 1
  document.getElementById('navbar').classList.add('sidebar--transition--out')
}

export function openFeedBack() {
  document.getElementById('feedback').style.position = 'absolute'
  document.getElementById('feedback').style.zIndex = 30
  document.getElementById('feedback').style.top = 0
  document.getElementById('feedback').style.right = 0

  document.getElementById('main').style.opacity = 0.1
  document.getElementById('navbar').style.opacity = 0.1

  document.getElementById('feedback').classList.add('feedback--transition--in')
}

export function closeFeedBack() {
  document.getElementById('feedback').style.position = 'absolute'
  document.getElementById('feedback').style.right = '-1000px'
  document.getElementById('main').style.opacity = 1
  document.getElementById('navbar').style.opacity = 1

  document.getElementById('feedback').classList.add('feedback--transition--out')
}

export function openOrderCall() {
  document.getElementById('order-call').style.position = 'absolute'
  document.getElementById('order-call').style.zIndex = 30
  document.getElementById('order-call').style.top = 0
  document.getElementById('order-call').style.right = 0

  document.getElementById('main').style.opacity = 0.1
  document.getElementById('navbar').style.opacity = 0.1

  document
    .getElementById('order-call')
    .classList.add('order-call--transition--in')
}

export function closeOrderCall() {
  document.getElementById('order-call').style.position = 'absolute'
  document.getElementById('order-call').style.right = '-1000px'
  document.getElementById('main').style.opacity = 1
  document.getElementById('navbar').style.opacity = 1

  document
    .getElementById('order-call')
    .classList.add('order-call--transition--out')
}

//check the current mouse click value and close menues if click is on blur area
window.addEventListener('click', function (event) {
  let menu = getComputedStyle(
    document.getElementById('navbar')
  ).getPropertyValue('left')

  let call = getComputedStyle(
    document.getElementById('order-call')
  ).getPropertyValue('right')

  let feedback = getComputedStyle(
    document.getElementById('feedback')
  ).getPropertyValue('right')

  if (menu == '0px') {
    window.closeMenu()
  } else if (call == '0px') {
    window.closeOrderCall()
  } else if (feedback == '0px') {
    window.closeFeedBack()
  }
})

//fix the sidebar menu in desktop size windows only
// export function changeSidebarPos(windowSize) {
//   if (windowSize.matches) {
//     document.getElementById('navbar').style.position = 'static'
//   } else {
//     document.getElementById('navbar').style.position = 'absolute'
//   }
// }

// let windowSize = window.matchMedia('(min-width: 1024px)')

// changeSidebarPos(windowSize)

// windowSize.addEventListener('change', function () {
//   changeSidebarPos(windowSize)
// })

//make the function global
window.showParagraph = showParagraph
window.openMenu = openMenu
window.closeMenu = closeMenu
window.openFeedBack = openFeedBack
window.closeFeedBack = closeFeedBack
window.openOrderCall = openOrderCall
window.closeOrderCall = closeOrderCall
// window.changeSidebarPos = changeSidebarPos
