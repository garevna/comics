const { mouseTailColors } = require('../configs').default
const { logoStyle } = require('../css').default

export function createMouseTail (text) {
  const colors = mouseTailColors
  const letters = text.split('')
  let currentMousePosition = { x: 0, y: 0 }
  let currentTime = new Date().getTime()
  const elems = []

  const parentElem = document.createElement('div')
  document.body.insertBefore(parentElem, document.body.firstChild)

  const shadow = parentElem.attachShadow({ mode: 'closed' })
  Object.assign(shadow.appendChild(document.createElement('div')), {
    className: 'logo',
    link: 'https://www.tiktok.com/@whisperr_of_solitude/photo/7365279245402115346',
    onclick () {
      window.open(this.link, '_blank')
    }
  })
  shadow
    .appendChild((() => {
      const style = document.createElement('style')
      style.textContent = logoStyle
      return style
    })())

    function appendLetter () {
      const getColor = () => colors[Math.round(Math.random() * 8)]
      elems.push(Object.assign(document.createElement('p'), {
        className: 'letters',
        innerHTML: letters[elems.length],
        style: `color: ${getColor()}`
      }))

      shadow.appendChild(elems[elems.length - 1])
    }

    const dist = event => Math.max(Math.abs(currentMousePosition.x - event.clientX ), Math.abs(currentMousePosition.y - event.clientY))

    const test = event => dist(event) > 10 && new Date().getTime() - currentTime > 50

    function redraw () {
      for (let i = elems.length - 1; i > 0; i--) {
        [elems[i].style.top, elems[i].style.left] = [elems[i-1].style.top, elems[i-1].style.left]
      }
      elems[0].style.top = arguments[1] + 'px'
      elems[0].style.left = arguments[0] + 'px'
    }

    return function (event) {
      if (!test(event)) return
      currentTime = new Date().getTime()
      currentMousePosition = { x: event.clientX, y: event.clientY }
      elems.length < letters.length && appendLetter()
      requestAnimationFrame(redraw.bind(null, event.clientX, event.clientY))
    }
}

document.body.onmousemove = createMouseTail('⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆')
