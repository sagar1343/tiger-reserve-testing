import React from 'react'
import First from '../components/First'
import Confirmation from '../components/Third'
import { useEffect, useState } from 'react'
import ShowDetails from '../components/ShowDetails'
import scrollToTop from '@/utility/scrollToTop'
import { useNavigate } from 'react-router-dom'
import Timer from '@/components/Timmer'
import { useBookingContext } from '@/context/BookingContext'

const PaymentPage = () => {
  const navigate = useNavigate()
  const { setBookingId, setTimerStartAt } = useBookingContext()

  useEffect(() => {
    scrollToTop()
    if (!sessionStorage.getItem('bookingId')) {
      navigate('/')
    }
  }, [])

  // async function releaseSeats() {
  //   console.log('failed')
  //   const totalPeople = adultCount + childCount
  //   try {
  //     const res = await fetch(
  //       `http://localhost:8000/api/rpay/release-seats?totalPeople=${totalPeople}&date=${date}&safariId=${safariId}&slot=${slot}`
  //     )
  //     if (res.ok) {
  //       window.location.href = '/'
  //     }
  //   } catch (err) {
  //     console.error('Error:', err)
  //   }
  // }

  const handleTimerComplete = () => {
    console.log('Timer completed!')
    sessionStorage.clear()
    setBookingId(null)
    setTimerStartAt(null)
    navigate('/')
  }

  const [currentStep, setCurrentStep] = useState(1)
  // const [showDetails, setShowDetails] = useState(false)

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    adhaar: '',
    country: 'India',
    passportNum: '',
    expirationDate: '',
    countryCode: '+91',
  })
  const showStep = (step) => {
    switch (step) {
      case 1:
        return (
          <First
            formData={formData}
            setFormData={setFormData}
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
          >
            <Timer onComplete={handleTimerComplete} />
          </First>
        )
      default:
        return null
    }
  }
  return (
    <>
      {/* <div className='showdetail ms-10 mt-10 me-10 pe-5 flex justify-between'>
        <div
          className='ms-6'
          sx={{ color: '#383838' }}
        >
          <p className='font-normal text-xl'>
            Show more Details
            <span>
              <button
                className='mt-2'
                onClick={() => setShowDetails(!showDetails)}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className={`h-5 ms-3 w-6 transform transition-transform ${
                    showDetails ? 'rotate-180' : ''
                  }`}
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={1}
                    d='M19 9l-7 7-7-7'
                  />
                </svg>
              </button>
            </span>
          </p>
        </div>
        <div>
          <p className='text-green-950 mt-2 font-semibold text-xl'>$12000</p>
        </div>
      </div>
      {showDetails && <ShowDetails />} */}
      {/* <div className="flex justify-center items-center m-5">
                <ul className="steps text-sm custom-steps"
                >
                    <li className={`step ${currentStep >= 1 ? 'step-neutral' : ''}`}>Payment Information</li>
                    <li className={`step ${currentStep >= 2 ? 'step-neutral' : ''}`}>Customer Information</li>
                    <li className={`step ${currentStep >= 3 ? 'step-neutral' : ''}`}>Booking is Confirmed</li>
                </ul>
            </div>
            <hr /> */}
      {showStep(currentStep)}
    </>
  )
}

export default PaymentPage
