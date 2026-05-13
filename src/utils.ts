import crypto from 'crypto'

export function randomInt(min: number, max: number) {
  return crypto.randomInt(min, max + 1)
}

export function randomChar(chars: string) {
  return chars[randomInt(0, chars.length - 1)]
}

export function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array]

  for (let i = arr.length - 1; i > 0; i--) {
    const j = randomInt(0, i)
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }

  return arr
}
