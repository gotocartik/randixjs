import { randomInt } from './utils'

export function pick<T>(array: T[]): T {
  if (!array.length) {
    throw new Error('Array cannot be empty')
  }

  return array[randomInt(0, array.length - 1)]
}
