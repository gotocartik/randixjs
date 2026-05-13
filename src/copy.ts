export function shallowCopy<T>(value: T): T {
  if (Array.isArray(value)) {
    return [...value] as unknown as T
  }

  if (value && typeof value === 'object') {
    return { ...(value as Record<string, unknown>) } as T
  }

  return value
}

export function deepCopy<T>(value: T): T {
  if (typeof structuredClone !== 'undefined') {
    return structuredClone(value)
  }

  return JSON.parse(JSON.stringify(value)) as T
}
