import { calculateTimeLeft } from '@/lib/utils'
import { TimerIcon } from 'lucide-react'
import React, { useState, useEffect } from 'react'

const Timer = ({ onComplete }) => {
  const totalDuration = 7 * 60 // Total duration in seconds (7 minutes 20 seconds)

  const [time, setTime] = useState(calculateTimeLeft(totalDuration))

  useEffect(() => {
    if (time > 0) {
      const timerId = setInterval(() => {
        setTime((prevTime) => prevTime - 1)
      }, 1000)

      // Clear interval on component unmount
      return () => clearInterval(timerId)
    } else {
      onComplete() // Call the onComplete function when timer finishes
    }
  }, [time, onComplete])

  useEffect(() => {
    if (time > 0) {
      const timerId = setInterval(() => {
        setTime(time - 1)
      }, 1000)

      // Clear interval on component unmount
      return () => clearInterval(timerId)
    } else {
      onComplete() // Call the onComplete function when timer finishes
    }
  }, [time, onComplete])

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`
  }

  return (
    <div className='text-red-500 font-bold flex justify-start items-center gap-1 my-2'>
      <TimerIcon />
      <p>{formatTime(time)}</p>
    </div>
  )
}

export default Timer
