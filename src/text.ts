import { pick } from './pick'

const words = ['solar', 'pixel', 'nova', 'echo', 'shadow', 'drift', 'storm', 'pulse', 'glow', 'swift', 'lunar', 'spark', 'flare', 'zephyr', 'orbit', 'vision', 'matrix', 'sparkle', 'tide', 'mystic']

export function phrase(wordCount = 3) {
  return Array.from({ length: wordCount }, () => pick(words)).join(' ')
}

export function sentence(wordCount = 6) {
  const value = phrase(wordCount)
  return `${value.charAt(0).toUpperCase()}${value.slice(1)}.`
}

export function paragraph(sentenceCount = 3) {
  return Array.from({ length: sentenceCount }, () => sentence(6)).join(' ')
}
