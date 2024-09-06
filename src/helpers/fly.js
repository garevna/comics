import { getStep } from './getStep'
import { setStyle } from './setStyle'

export function fly () {
  if (!this) return console.warn('Butterfly does not exist.')

  const { top: flyTop, left: flyLeft } = this.style
  const [top, left] = [flyTop, flyLeft].map(param => parseInt(param))

  this.width = Math.max(48, this.width  + getStep())

  const height = Math.round(this.width * 0.75)

  const [maxTop, maxRight] = [
    window.innerHeight - height,
    window.innerWidth - this.width
  ]

  Object.assign(this.style, {
    top: Math.min(maxTop, Math.max(0, top + getStep())) + 'px',
    left: Math.min(maxRight, Math.max(0, left + getStep())) + 'px'
  })
  if (!top || !left || top > maxTop || left > maxRight) setStyle(this)

  requestAnimationFrame(fly.bind(this))
}
