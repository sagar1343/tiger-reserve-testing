import React, { useState, createContext, useContext } from 'react'

const BookingContext = createContext()

export const BookingProvider = ({ children }) => {
  const [safariId, setSafariId] = useState('')
  const [unitPrice, setUnitPrice] = useState([])
  const [seats, setSeats] = useState(null)
  const [date, setDate] = useState(null)
  const [adultCount, setAdultCount] = useState(0)
  const [childCount, setChildCount] = useState(0)
  const [slot, setSlot] = useState()
  const [successData, setSuccessData] = useState(null)
  const [paymentDone, setPaymentDone] = useState(false)
  const [bookingId, setBookingId] = useState(null)
  const [timerStartAt, setTimerStartAt] = useState(null)

  return (
    <BookingContext.Provider
      value={{
        safariId,
        setSafariId,
        unitPrice,
        setUnitPrice,
        seats,
        setSeats,
        date,
        setDate,
        adultCount,
        setAdultCount,
        childCount,
        setChildCount,
        slot,
        setSlot,
        successData,
        setSuccessData,
        paymentDone,
        setPaymentDone,
        bookingId,
        setBookingId,
        timerStartAt,
        setTimerStartAt,
      }}
    >
      {children}
    </BookingContext.Provider>
  )
}

export const useBookingContext = () => useContext(BookingContext)
