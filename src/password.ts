import { PasswordOptions } from './types'
import { string } from './string'

export function password(options: PasswordOptions = {}) {
  const {
    length = 16,
    symbols = true,
    strict = true
  } = options

  const value = string({
    length,
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols
  })

  if (!strict) return value

  const hasUpper = /[A-Z]/.test(value)
  const hasLower = /[a-z]/.test(value)
  const hasNumber = /\d/.test(value)
  const hasSymbol = symbols ? /[^A-Za-z0-9]/.test(value) : true

  if (!(hasUpper && hasLower && hasNumber && hasSymbol)) {
    return password(options)
  }

  return value
}