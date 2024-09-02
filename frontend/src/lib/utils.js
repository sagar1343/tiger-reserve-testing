import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import moment from 'moment-timezone'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

// Calculate initial time left based on the timerStartAt
export function calculateTimeLeft(totalDuration) {
  const timerStartAt = JSON.parse(sessionStorage.getItem('timerStartAt'))
  const startTime = moment.tz(timerStartAt, 'Asia/Kolkata')
  const now = moment.tz('Asia/Kolkata')
  const timeElapsed = now.diff(startTime, 'seconds')
  return totalDuration - timeElapsed
}
