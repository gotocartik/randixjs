import { randomInt } from './utils'

export function date(start = '2000-01-01', end = '2030-12-31') {
  const startTimestamp = new Date(start).getTime()
  const endTimestamp = new Date(end).getTime()

  if (Number.isNaN(startTimestamp) || Number.isNaN(endTimestamp)) {
    throw new Error('Invalid date range')
  }

  if (startTimestamp > endTimestamp) {
    throw new Error('Start date must be before end date')
  }

  return new Date(randomInt(startTimestamp, endTimestamp)).toISOString()
}
