const { butterfly, slider } = require('./components').default

Object.assign(document.body.style, {
  background: '#000',
  color: '#eee',
  fontFamily: 'Montserrat'
})

function connected (event) {
  document.body.appendChild(butterfly)
  const rect = document.querySelector('picture-slider').getBoundingRect()
  butterfly.init(rect)
  butterfly.setStyle()
  requestAnimationFrame(butterfly.fly.bind(butterfly))
}

function resized (event) {
  const rect = document.querySelector('picture-slider').getBoundingRect()
  init(butterfly, rect)
  setStyle(butterfly)
}

window.addEventListener('slider-connected', connected)
window.addEventListener('resize', resized)
