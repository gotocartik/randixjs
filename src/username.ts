import { pick } from './pick'
import { number } from './number'

const names = ['shadow', 'neo', 'alpha', 'ghost', 'storm']
const animals = ['tiger', 'wolf', 'hawk', 'lion', 'fox']

export function username() {
  return `${pick(names)}_${pick(animals)}${number(2)}`
}