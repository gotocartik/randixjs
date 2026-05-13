import { randomInt } from './utils'

export function number(lengthOrOptions: number | { min: number; max: number }) {
  if (typeof lengthOrOptions === 'number') {
    let result = ''

    for (let i = 0; i < lengthOrOptions; i++) {
      result += randomInt(0, 9)
    }

    return Number(result)
  }

  return randomInt(lengthOrOptions.min, lengthOrOptions.max)
}
