import { Slide } from './Slide'
const { typeWriter } = require('../helpers').default

const { sliderStyles } = require('../css').default
const { slides, subtitles } = require('../configs').default

const host = location.href
const numberOfSlides = 21

const getSlide = slideNum => `${host}/slides/${(slideNum + 1).toString().padStart(2, '0')}.jpg`

class PictureSlider extends HTMLElement {
  constructor () {
    super()

    Object.assign(this, {
      subtitles,
      container: this.createElem('figure'),
      currentIndex: 0,
      currentSlide: 0
    })

    this.init()

    const shadow = this.attachShadow({ mode: 'open' })
    shadow.appendChild(this.container)
    const style = this.createElem('style', shadow)
    style.textContent = sliderStyles

    this.btnLeft = Object.assign(this.createElem('button', this.container), {
      id: 'left',
      innerHTML: '<',
      onclick: () => this.changePicture('left')
    })

    this.btnRight = Object.assign(this.createElem('button', this.container), {
      id: 'right',
      innerHTML: '>',
      onclick: () => this.changePicture('right')
    })

    this.subtitle = Object.assign(this.createElem('pre', this.container), {
      className: 'picture-subtitles'
    })
  }

  connectedCallback () {
    window.dispatchEvent(new Event('slider-connected'))
  }

  createElem (tagName, container) {
    return (!container ? document.body : container)
      .appendChild(document.createElement(tagName))
  }

  init () {
    Object.assign(this, {
      slides: [
        new Slide(getSlide(0), this.container),
        new Slide(getSlide(1), this.container)
      ]
    })
    this.slides[0].mcFromTo(100, 10)
    this.slides[1].init(100)
  }

  changePicture (direction) {
    const to = direction === 'left' ? 100 : -100
    const nextSlide = this.currentSlide === 0 ? 1 : 0
    const nextIndex = this.getNextIndex(direction)
    this.slides[nextSlide].setPicture(getSlide(nextIndex))
    this.slides[nextSlide].init(-to)
    this.slides[this.currentSlide].mcFromTo(10, to, 0)
    this.slides[nextSlide].mcFromTo(-to, 10, 1)
    setTimeout(function () {
      this.currentSlide = nextSlide
      this.currentIndex = nextIndex
      typeWriter(this.subtitles[this.currentIndex], this.subtitle)
    }.bind(this), 1000)
  }

  getNextIndex (dir) {
    return dir === 'left'
      ? this.currentIndex === 0
        ? numberOfSlides - 1
        : this.currentIndex - 1
      : this.currentIndex === numberOfSlides - 1
        ? 0
        : this.currentIndex + 1
  }

  getBoundingRect () {
    return this.container.querySelector('div').getBoundingClientRect()
  }
}

customElements.define('picture-slider', PictureSlider)
