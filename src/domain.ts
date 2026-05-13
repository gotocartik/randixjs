import { pick } from './pick'

const domains = ['moon', 'orbit', 'pixel', 'nova', 'stellar', 'spark', 'wave', 'echo', 'cloud', 'matrix']
const tlds = ['com', 'dev', 'app', 'io', 'tech', 'site', 'studio', 'blog', 'design']

export function domain() {
  return `${pick(domains)}.${pick(tlds)}`
}
