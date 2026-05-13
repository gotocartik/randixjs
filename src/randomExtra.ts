import { randomChar, randomInt } from './utils'

const HEX_CHARS = '0123456789abcdef'

export function randomBytes(length = 16) {
  let result = ''

  for (let i = 0; i < length; i++) {
    result += randomChar(HEX_CHARS)
  }

  return result
}

export function randomHexBytes(length = 16) {
  return randomBytes(length)
}

export function randomSubset<T>(array: T[], count: number) {
  if (count <= 0) {
    return []
  }

  return shuffle(array).slice(0, Math.min(count, array.length))
}

function shuffle<T>(items: T[]) {
  const arr = [...items]

  for (let i = arr.length - 1; i > 0; i--) {
    const j = randomInt(0, i)
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }

  return arr
}
