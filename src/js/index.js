import '../scss/style.scss'

import { content } from '../js/hide_contents.js'
import { brSlider } from '../js/brands_slider.js'
import { eqSlider } from '../js/equipments_slider.js'
import { prSlider } from '../js/prices_slider.js'

//check if the paragraph of about us is shown on hidden and
//place the right button according to the results
let second_part = getComputedStyle(
  document.getElementById('about-us__second-part')
).getPropertyValue('position')

if (second_part == 'static') {
  document.getElementById('about-us__img').src = 'img/read-less.png'
  document.getElementById('about-us-link').innerText = 'Read Less'
} else if (second_part == 'static') {
  document.getElementById('about-us__img').src = 'img/read-more.png'
  document.getElementById('about-us-link').innerText = 'Read More'
}
console.log('Works!')
