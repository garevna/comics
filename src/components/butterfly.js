const {
  getLeft,
  getTop,
  init,
  setStyle,
  fly
} = require('../helpers').default

export const butterfly = Object.assign(new Image(), {
  src: `${location.href}/images/butterfly-on-dark.gif`,
  style: `
    position: fixed;
    transition: all .5s;
    z-index: -1;
  `,
  getTop,
  getLeft,
  init,
  setStyle,
  fly
})
