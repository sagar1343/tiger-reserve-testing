import { Button } from '@mui/material'
import { useEffect } from 'react'
import logo from '@/assets/logo.webp'
function loadRazorpayScript() {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = 'https://checkout.razorpay.com/v1/checkout.js'
    script.onload = () => resolve()
    script.onerror = () => reject(new Error('Failed to load Razorpay script'))
    document.body.appendChild(script)
  })
}
function PaymentButton({
  unit_price,
  adultCount,
  childCount,
  totalPeople,
  date,
  slot,
  safari,
}) {
  useEffect(() => {
    loadRazorpayScript()
      .then(() => {
        console.log('Razorpay script loaded')
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])

  const handlePayment = async () => {
    if (!window.Razorpay) {
      console.error('Razorpay script is not loaded.')
      return
    }

    try {
      const response = await fetch(
        'http://localhost:8000/api/rpay/create-order',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            amount: unit_price[1] * adultCount + unit_price[0] * childCount,
            currency: 'INR',
            totalPeople: adultCount + childCount,
            date,
            safariId: safari?._id,
            slot,
          }),
        }
      )
      const data = await response.json()

      if (!data.id) {
        throw new Error('Order ID not received from server.')
      }

      const options = {
        key: 'rzp_test_U6vu7a465eTL2T',
        amount: unit_price[1] * adultCount + unit_price[0] * childCount,
        currency: 'INR',
        name: 'Safari Booking',
        description: 'Payment for Safari Reservation',
        image: logo,
        order_id: data.id,
        handler: function (response) {
          fetch('http://localhost:8000/api/rpay/verify-payment', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              payment_id: response.razorpay_payment_id,
              order_id: response.razorpay_order_id,
              signature: response.razorpay_signature,
              userData: {
                firstName: 'sagar',
                lastName: 'chakrawarti',
                email: 'sagar@gmail.com',
                phone: '1234567890',
                aadharNum: '1234567890',
                country: 'India',
                passportNum: '',
                expirationDate: '',
                countryCode: 'IN',
              },
              bookingData: {
                safari: safari?._id,
                childCount,
                adultCount,
                totalPeople: adultCount + childCount,
                totalPrice:
                  unit_price[1] * adultCount + unit_price[0] * childCount,
                bookingDate: date,
                slot,
              },
            }),
          })
            .then((response) => response.json())
            .then((data) => {
              if (data.success) {
                window.location.href = '/success'
              }
            })
        },
        prefill: {
          name: 'sagar',
          contact: '7999785088', // Ensure this is a string
        },
        theme: {
          color: '#fca311',
        },
      }

      const rzp = new window.Razorpay(options)
      rzp.open()
    } catch (error) {
      console.error(error)
    }
  }

  return <Button onClick={handlePayment}>PaymentButton</Button>
}
export default PaymentButton
