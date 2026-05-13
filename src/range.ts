export function range(start: number, end: number, step = 1) {
  if (step === 0) {
    throw new Error('Step cannot be zero')
  }

  const result: number[] = []
  const ascending = start <= end
  const normalizedStep = Math.abs(step) * (ascending ? 1 : -1)

  for (let value = start; ascending ? value <= end : value >= end; value += normalizedStep) {
    result.push(value)
  }

  return result
}
