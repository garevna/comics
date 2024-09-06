export function getTop () {
  const height = parseInt(this.width * 0.75)
  const tmp = parseInt(window.innerHeight - height)

  // const top = tmp < this.boxBottom + height / 2
  //   ? Math.round(this.boxBottom + height / 2)
  //   : tmp > this.boxTop - height / 2
  //     ? Math.round(this.boxTop - height / 2)
  //     : tmp

  return tmp - 48
}
