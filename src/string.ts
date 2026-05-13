import { randomChar } from './utils'
import { StringOptions } from './types'

const LOWER = 'abcdefghijklmnopqrstuvwxyz'
const UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const NUMBERS = '0123456789'
const SYMBOLS = '!@#$%^&*()_+'
const SIMILAR = '0O1lI'

export function string(options: number | StringOptions = 10): string {
  if (typeof options === 'number') {
    options = { length: options }
  }

  const {
    length = 10,
    uppercase = true,
    lowercase = true,
    numbers = true,
    symbols = false,
    excludeSimilar = false
  } = options

  let chars = ''

  if (uppercase) chars += UPPER
  if (lowercase) chars += LOWER
  if (numbers) chars += NUMBERS
  if (symbols) chars += SYMBOLS

  if (excludeSimilar) {
    chars = chars
      .split('')
      .filter(c => !SIMILAR.includes(c))
      .join('')
  }

  if (!chars.length) {
    throw new Error('No character set selected')
  }

  let result = ''

  for (let i = 0; i < length; i++) {
    result += randomChar(chars)
  }

  return result
}