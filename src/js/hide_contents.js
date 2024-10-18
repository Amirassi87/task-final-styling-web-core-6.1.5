let desktopSize = window.matchMedia('(min-width: 1120px)')
let minTabletSize = window.matchMedia('(min-width: 768px)')
let maxTabletSize = window.matchMedia('(max-width: 1119px)')
let mobileSize = window.matchMedia('(max-width: 767px)')
let containerVal
let mainVal
let scrollHeight = Math.max(
  document.body.scrollHeight,
  document.documentElement.scrollHeight,
  document.body.offsetHeight,
  document.documentElement.offsetHeight,
  document.body.clientHeight,
  document.documentElement.clientHeight
)

console.log(scrollHeight)
console.log(desktopSize)

if (desktopSize.matches) {
  document.getElementById('navbar').style.height = scrollHeight
}
export function toggleParagraph() {
  let second_part = getComputedStyle(
    document.getElementById('about-us__second-part')
  ).getPropertyValue('position')

  if (second_part == 'fixed') {
    document.getElementById('about-us__second-part').style.position = 'static'
    document.getElementById('about-us__third-part').style.position = 'static'
    document.getElementById('about-us__img').src = 'img/read-less.png'
    document.getElementById('about-us-link').innerText = 'Read Less'
  } else if (second_part == 'static') {
    document.getElementById('about-us__second-part').style.position = 'fixed'
    document.getElementById('about-us__second-part').style.left = '-1000px'
    document.getElementById('about-us__third-part').style.position = 'fixed'
    document.getElementById('about-us__third-part').style.left = '-1000px'
    document.getElementById('about-us__img').src = 'img/read-more.png'
    document.getElementById('about-us-link').innerText = 'Read More'
  }
}

export function openMenu() {
  document.getElementById('navbar').style.position = 'absolute'
  document.getElementById('navbar').style.zIndex = 10
  document.getElementById('navbar').style.top = 0
  document.getElementById('navbar').style.left = 0
  document.getElementById('navbar').style.bottom = 0
  document.getElementById('main').style.opacity = 0.1
  document.getElementById('navbar').classList.add('sidebar--transition--in')

  if (minTabletSize.matches || maxTabletSize.matches || mobileSize.matches) {
    document.getElementById('html_content').style.overflowY = 'hidden'
  }
}

export function closeMenu() {
  document.getElementById('navbar').style.position = 'absolute'
  document.getElementById('navbar').style.left = '-1000px'
  document.getElementById('main').style.opacity = 1
  document.getElementById('navbar').classList.add('sidebar--transition--out')
  document.getElementById('html_content').style.overflowY = 'auto'
}

export function openFeedBack() {
  document.getElementById('feedback').style.position = 'absolute'
  document.getElementById('feedback').style.zIndex = 30
  document.getElementById('feedback').style.top = 0
  document.getElementById('feedback').style.right = 0
  document.getElementById('container').style.opacity = 0.1
  document.getElementById('feedback').classList.add('feedback--transition--in')

  if (minTabletSize.matches || maxTabletSize.matches || mobileSize.matches) {
    document.getElementById('html_content').style.overflowY = 'hidden'
  }
}

export function closeFeedBack() {
  document.getElementById('feedback').style.position = 'absolute'
  document.getElementById('feedback').style.right = '-1000px'
  document.getElementById('container').style.opacity = 1
  document.getElementById('feedback').classList.add('feedback--transition--out')
  document.getElementById('html_content').style.overflowY = 'auto'
}

export function openOrderCall() {
  document.getElementById('order-call').style.position = 'absolute'
  document.getElementById('order-call').style.zIndex = 20
  document.getElementById('order-call').style.top = 0
  document.getElementById('order-call').style.right = 0
  document.getElementById('container').style.opacity = 0.1
  document
    .getElementById('order-call')
    .classList.add('order-call--transition--in')

  if (minTabletSize.matches || maxTabletSize.matches || mobileSize.matches) {
    document.getElementById('html_content').style.overflowY = 'hidden'
  }
}

export function closeOrderCall() {
  document.getElementById('order-call').style.position = 'absolute'
  document.getElementById('order-call').style.right = '-1000px'
  document.getElementById('container').style.opacity = 1
  document
    .getElementById('order-call')
    .classList.add('order-call--transition--out')
  document.getElementById('html_content').style.overflowY = 'auto'
}

document
  .getElementById('container')
  .addEventListener('click', function (event) {
    let windowSize = window.matchMedia('(min-width: 1120px)')

    mainVal = getComputedStyle(
      document.getElementById('main')
    ).getPropertyValue('opacity')

    containerVal = getComputedStyle(
      document.getElementById('container')
    ).getPropertyValue('opacity')

    let menu = getComputedStyle(
      document.getElementById('navbar')
    ).getPropertyValue('left')

    let call = getComputedStyle(
      document.getElementById('order-call')
    ).getPropertyValue('right')

    let feedback = getComputedStyle(
      document.getElementById('feedback')
    ).getPropertyValue('right')

    if (menu == '0px' && !windowSize.matches && mainVal == 0.1) {
      window.closeMenu()
    } else if (call == '0px' && containerVal == 0.1) {
      window.closeOrderCall()
    } else if (feedback == '0px' && containerVal == 0.1) {
      window.closeFeedBack()
    }
  })

//make the function global
window.toggleParagraph = toggleParagraph
window.openMenu = openMenu
window.closeMenu = closeMenu
window.openFeedBack = openFeedBack
window.closeFeedBack = closeFeedBack
window.openOrderCall = openOrderCall
window.closeOrderCall = closeOrderCall
