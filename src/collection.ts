import { randomInt } from './utils'

export function chunk<T>(array: T[], size: number) {
  if (size <= 0) {
    throw new Error('Chunk size must be greater than zero')
  }

  const result: T[][] = []

  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size))
  }

  return result
}

export function compact<T>(array: T[]) {
  return array.filter(Boolean) as T[]
}

export function sampleSize<T>(array: T[], count: number) {
  if (count <= 0) {
    return []
  }

  return shuffle(array).slice(0, Math.min(count, array.length))
}

export function unique<T>(array: T[]) {
  return Array.from(new Set(array))
}

export function partition<T>(array: T[], predicate: (value: T) => boolean) {
  const truthy: T[] = []
  const falsy: T[] = []

  for (const item of array) {
    if (predicate(item)) {
      truthy.push(item)
    } else {
      falsy.push(item)
    }
  }

  return [truthy, falsy] as const
}

function shuffle<T>(items: T[]) {
  const arr = [...items]

  for (let i = arr.length - 1; i > 0; i--) {
    const j = randomInt(0, i)
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }

  return arr
}
