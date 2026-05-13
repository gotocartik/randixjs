import { randomChar } from './utils'

const ID_CHARS = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

export function uniqueId(length = 10, prefix = '') {
  let id = ''

  for (let i = 0; i < length; i++) {
    id += randomChar(ID_CHARS)
  }

  return `${prefix}${id}`
}
