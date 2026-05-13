export function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max)
}

export function once<T extends (...args: any[]) => any>(fn: T) {
  let called = false
  let result: ReturnType<T>

  return function (...args: Parameters<T>) {
    if (!called) {
      called = true
      result = fn(...args)
    }

    return result
  }
}

export function debounce<T extends (...args: any[]) => void>(fn: T, wait = 100) {
  let timer: ReturnType<typeof setTimeout> | null = null

  return function (...args: Parameters<T>) {
    if (timer) {
      clearTimeout(timer)
    }

    timer = setTimeout(() => fn(...args), wait)
  }
}

export function throttle<T extends (...args: any[]) => void>(fn: T, wait = 100) {
  let lastCall = 0

  return function (...args: Parameters<T>) {
    const now = Date.now()

    if (now - lastCall >= wait) {
      lastCall = now
      fn(...args)
    }
  }
}

export function toArray<T>(value: T | T[]) {
  return Array.isArray(value) ? value : [value]
}
