export function merge<T extends object>(...objects: T[]) {
  return Object.assign({}, ...objects)
}

export function omit<T extends object, K extends keyof T>(obj: T, keys: K[]) {
  const result = { ...obj } as T

  for (const key of keys) {
    delete result[key]
  }

  return result
}

export function pickProps<T extends object, K extends keyof T>(obj: T, keys: K[]) {
  const result = {} as Pick<T, K>

  for (const key of keys) {
    if (key in obj) {
      result[key] = obj[key]
    }
  }

  return result
}

export function mapValues<T extends object, U>(obj: T, fn: (value: T[keyof T], key: keyof T) => U) {
  const result: Record<string, U> = {}

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      result[key] = fn(obj[key], key)
    }
  }

  return result as { [K in keyof T]: U }
}

export function invert(obj: Record<string, string | number | boolean>) {
  const result: Record<string, string> = {}

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      result[String(obj[key])] = key
    }
  }

  return result
}
