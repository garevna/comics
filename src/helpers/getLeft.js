export function getLeft () {
  const tmp = Math.round(window.innerWidth - this.width)

  // const left = tmp < this.boxLeft - this.width / 2 || tmp > this.boxRight
  //   ? tmp
  //   : Math.random(Math.random() > 0.5 ? this.boxRight : this.boxLeft - this.width / 2)

  return tmp - 48
}
