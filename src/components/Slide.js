export function Slide (imageURL, container) {
  this.imageURL = imageURL
  const elem = container.appendChild(document.createElement('div'))
  elem.style = `background-image: url(${imageURL});`
  this.init = x => Object.assign(elem.style, { left: x + '%' })
  this.setPicture = pictureURL => Object.assign(elem.style, {
    backgroundImage: `url(${pictureURL})`
  })

  this.mcFromTo = function (from, to, finalOpacity) {
    Object.assign(elem.style, {
      transition: 'none',
      left: from + '%',
      opacity: 1 - finalOpacity
    })
    setTimeout ( function () {
      Object.assign(elem.style, {
        transition: 'all 0.8s',
        left: to + '%',
        opacity: finalOpacity
      })
    }, 50)
  }
}
