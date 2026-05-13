import { randomInt } from './utils'

const HEX_CHARS = '0123456789abcdef'

export function hex(length = 6) {
  let result = ''

  for (let i = 0; i < length; i++) {
    result += HEX_CHARS[randomInt(0, HEX_CHARS.length - 1)]
  }

  return result
}
