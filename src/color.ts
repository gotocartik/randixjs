import { randomInt } from './utils'

export function color(type: 'hex' | 'rgb' = 'hex') {
  const r = randomInt(0, 255)
  const g = randomInt(0, 255)
  const b = randomInt(0, 255)

  if (type === 'rgb') {
    return `rgb(${r}, ${g}, ${b})`
  }

  return `#${[r, g, b]
    .map(x => x.toString(16).padStart(2, '0'))
    .join('')}`
}
