import { randomInt } from './utils'

export function randomDatePast(yearsBack = 10) {
  const now = Date.now()
  const past = new Date()
  past.setFullYear(past.getFullYear() - yearsBack)
  return new Date(randomInt(past.getTime(), now)).toISOString()
}

export function randomDateFuture(yearsAhead = 10) {
  const now = Date.now()
  const future = new Date()
  future.setFullYear(future.getFullYear() + yearsAhead)
  return new Date(randomInt(now, future.getTime())).toISOString()
}

export function randomTimestamp(start: string | number = '1970-01-01', end: string | number = Date.now()) {
  const startTime = typeof start === 'number' ? start : new Date(start).getTime()
  const endTime = typeof end === 'number' ? end : new Date(end).getTime()

  if (Number.isNaN(startTime) || Number.isNaN(endTime)) {
    throw new Error('Invalid timestamp bounds')
  }

  return randomInt(startTime, endTime)
}
