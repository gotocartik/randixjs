import { randomInt } from './utils'

export function chance(percentage = 50) {
  if (percentage < 0 || percentage > 100) {
    throw new Error('Percentage must be between 0 and 100')
  }

  return randomInt(1, 100) <= percentage
}
