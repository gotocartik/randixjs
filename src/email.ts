import { username } from './username'
import { domain } from './domain'

export function email() {
  return `${username()}@${domain()}`
}
