export function seed(seedValue: string) {
  let seed = 0

  for (let i = 0; i < seedValue.length; i++) {
    seed += seedValue.charCodeAt(i)
  }

  function seededRandom() {
    const x = Math.sin(seed++) * 10000
    return x - Math.floor(x)
  }

  return {
    number(min = 0, max = 100) {
      return Math.floor(seededRandom() * (max - min + 1)) + min
    },

    string(length = 10) {
      const chars = 'abcdefghijklmnopqrstuvwxyz0123456789'
      let result = ''

      for (let i = 0; i < length; i++) {
        result += chars[Math.floor(seededRandom() * chars.length)]
      }

      return result
    }
  }
}
