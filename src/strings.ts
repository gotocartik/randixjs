export function capitalize(value: string) {
  if (!value) return value
  return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
}

export function camelCase(value: string) {
  return value
    .replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ''))
    .replace(/^(.)/, (match) => match.toLowerCase())
}

export function kebabCase(value: string) {
  return value
    .trim()
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[_\s]+/g, '-')
    .toLowerCase()
}

export function titleCase(value: string) {
  return value
    .split(/\s+/)
    .map((word) => capitalize(word))
    .join(' ')
}

export function truncate(value: string, length = 30, suffix = '...') {
  if (value.length <= length) {
    return value
  }

  return `${value.slice(0, length)}${suffix}`
}
