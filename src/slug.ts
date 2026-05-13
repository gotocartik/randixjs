import { pick } from './pick'

const adjectives = ['silent', 'dark', 'fast', 'smart', 'red']
const nouns = ['tiger', 'river', 'hawk', 'fox', 'lion']

export function slug() {
  return `${pick(adjectives)}-${pick(nouns)}-${Date.now()}`
}
