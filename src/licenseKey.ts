import { hex } from './hex'

export function licenseKey(groups = 4, length = 4) {
  return Array.from({ length: groups }, () => hex(length)).join('-')
}
