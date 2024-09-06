import { getAngle } from './getAngle'

export function setStyle () {
  this.width = Math.round(Math.max(80, Math.random() * 180))
  Object.assign(this.style, {
    top: `${this.getTop()}px`,
    left: `${this.getLeft()}px`,
    transform: 'scale(-1)'
  })
}
