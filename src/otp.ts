import { number } from './number'

export function otp(length = 6) {
  return number(length).toString()
}