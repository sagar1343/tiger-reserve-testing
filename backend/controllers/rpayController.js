import 'dotenv/config'
import Razorpay from 'razorpay'
import { v4 as uuidv4 } from 'uuid'
import crypto from 'crypto'
import { User } from '../models/userModel.js'
import { Booking } from '../models/bookingModel.js'
import { Payment } from '../models/paymentModel.js'
import { Safari } from '../models/safariModel.js'
import { SafariAvailability } from '../models/SafariAvailabilityModel.js'
import moment from 'moment-timezone'

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET,
})

// Seats locked
async function lockSeatsHandler(req, res) {
  const {
    totalPeople,
    date,
    safariId,
    slot,
    adultCount,
    childCount,
    totalPrice,
  } = req.query

  const timerStartAt = moment().tz('Asia/Kolkata').format('YYYY-MM-DD HH:mm:ss')

  const bookingData = {
    safari: safariId,
    childCount,
    adultCount,
    totalPeople: totalPeople,
    totalPrice: totalPrice,
    bookingDate: date,
    slot,
    timerStartAt: timerStartAt,
  }

  if (!date || !safariId || !totalPeople || !slot) {
    return res.status(400).json({ message: 'Data is required' })
  }

  const randomNum = Math.floor(Math.random() * 4)
  await delay(randomNum * 1000)

  try {
    let availability = await SafariAvailability.findOne({
      date: date,
      safari: safariId,
    })

    const safari = await Safari.findById(safariId)
    if (!safari) {
      return res.status(404).json({ message: 'Safari not found' })
    }

    if (!availability) {
      availability = new SafariAvailability({
        safari: safariId,
        date,
        morningSeats: safari.seats,
        eveningSeats: safari.seats,
      })
      await availability.save()
    }

    const seatField = slot === 'morning' ? 'morningSeats' : 'eveningSeats'
    if (totalPeople <= availability[seatField]) {
      // create booking
      const newBooking = new Booking(bookingData)
      await newBooking.save()

      availability[seatField] -= totalPeople
      await availability.save()

      // run timer and check booking status when timer ends and also release seats if not booked
      setTimeout(
        async (bookingId) => {
          const newBooking = await Booking.findById(bookingId).exec()
          if (newBooking.status === 'reserved') {
            const seatField =
              slot === 'morning' ? 'morningSeats' : 'eveningSeats'
            availability[seatField] += newBooking.totalPeople
            await availability.save()
            // Update the newBooking status to 'cancelled'
            newBooking.status = 'cancelled'
            newBooking.paymentStatus = 'cancelled'
            await newBooking.save()
          }
        },
        (7 * 60 + 10) * 1000,
        newBooking._id
      ) // given 1min extra

      // send bookingId & timerStartAt
      return res.status(200).json({
        bookingId: newBooking._id,
        timerStartAt: timerStartAt,
        bookingDate: newBooking.bookingDate,
        slot: newBooking.slot,
        adultCount: newBooking.adultCount,
        childCount: newBooking.childCount,
        totalPrice: newBooking.totalPrice,
        adultPerSeat: safari.adultPerSeat,
        childPerSeat: safari.childPerSeat,
        safariId: safari._id,
        message: 'Seat Locked',
      })
    } else {
      return res.status(404).json({ message: 'No seats available' })
    }
  } catch (error) {
    console.error('Error fetching safari availability:', error)
    res.status(500).json({ message: 'Server Error', error })
  }
}

// Checkout
async function createOrderHandler(req, res) {
  const { amount, currency } = req.body

  const options = {
    amount: amount * 100,
    currency: currency,
    receipt: uuidv4(),
  }

  try {
    const order = await razorpay.orders.create(options)
    return res.json(order)
  } catch (error) {
    res.status(500).send('Error creating order')
  }
}

// Payment verification
async function verifyPaymentHandler(req, res) {
  const {
    payment_id,
    order_id,
    signature,
    userData,
    bookingId,
    safariId,
    // paymentMethod,
    paymentDate,
  } = req.body

  // Validate input
  if (
    !payment_id ||
    !order_id ||
    !signature ||
    !userData ||
    !bookingId ||
    !safariId ||
    !paymentDate
  ) {
    return res
      .status(400)
      .json({ success: false, message: 'Invalid request data' })
  }

  try {
    // Generate signature using Razorpay secret
    const generatedSignature = crypto
      .createHmac('sha256', process.env.RAZORPAY_SECRET)
      .update(order_id + '|' + payment_id)
      .digest('hex')

    // Verify the signature
    if (generatedSignature === signature) {
      // Check if user exists
      let user = await User.findOne({ email: userData.email }).exec()

      if (!user) {
        user = new User(userData)
        await user.save()
      }

      // Create and save the payment record
      const paymentData = {
        razorpay_order_id: order_id,
        razorpay_payment_id: payment_id,
        razorpay_signature: signature,
        booking: bookingId,
        paymentDate: paymentDate,
        // paymentMethod: paymentMethod,
        status: 'completed',
      }
      const newPayment = new Payment(paymentData)
      await newPayment.save()

      // Updating booking details
      const newBooking = await Booking.findById(bookingId).exec()
      newBooking.user = user._id
      newBooking.status = 'confirmed'
      newBooking.payment = newPayment._id
      newBooking.paymentStatus = 'completed'
      await newBooking.save()

      const safari = await Safari.findById(safariId).exec()

      let data = {}
      data['user'] = {
        name: user.firstName + ' ' + user.lastName,
        phone: user.phone,
        email: user.email,
        countryCode: user.countryCode,
        country: user.country,
        idProof: user.country === 'India' ? user.adhaar : user.passportNum,
      }
      data['paymentDate'] = String(paymentDate)
      data['bookingId'] = String(newBooking._id)
      data['totalPrice'] = String(newBooking.totalPrice)
      data['booking'] = [
        1,
        safari.title,
        newBooking.bookingDate,
        newBooking.slot,
        newBooking.slot === 'morning'
          ? '9:30 AM - 11:30 AM'
          : '3:00 PM - 5:00 PM',
        `${newBooking.adultCount}/${newBooking.childCount}`,
        newBooking.status,
      ]

      const emailRes = await fetch('http://localhost:8000/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      const resData = await emailRes.json()
      if (resData.success) {
        res.status(200).json({
          success: true,
          message: 'Email sent successfully!',
          successData: data,
        })
      } else {
        return res
          .status(400)
          .json({ success: false, message: 'Error in email sending' })
      }
    } else {
      // Invalid signature
      return res
        .status(400)
        .json({ success: false, message: 'Invalid signature' })
    }
  } catch (error) {
    // Handle errors
    console.error('Error verifying payment:', error)
    return res.status(500).json({ success: false, message: 'Server error' })
  }
}

export default verifyPaymentHandler

export {
  createOrderHandler,
  verifyPaymentHandler,
  lockSeatsHandler,
  // releaseSeatsHandler,
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

// Seats released
// async function releaseSeatsHandler(req, res) {
//   const { totalPeople, date, safariId, slot } = req.query

//   if (!date || !safariId || !totalPeople || !slot) {
//     return res.status(400).json({ message: 'Data is required' })
//   }

//   try {
//     const availability = await SafariAvailability.findOne({
//       date: date,
//       safari: safariId,
//     })

//     if (!availability) {
//       return res.status(404).json({
//         message: 'Availability not found for the given date and safari ID',
//       })
//     }

//     const safari = await Safari.findById(safariId)
//     if (!safari) {
//       return res.status(404).json({ message: 'Safari not found' })
//     }

//     const seatField = slot === 'morning' ? 'morningSeats' : 'eveningSeats'
//     const maxSeats = safari.seats // Total seats available for the safari

//     // Ensure that availability does not exceed the total seats
//     const newSeatCount = availability[seatField] + parseInt(totalPeople, 10)
//     if (newSeatCount > maxSeats) {
//       return res.status(400).json({
//         message: `Cannot release more seats than the total available seats).`,
//       })
//     }

//     availability[seatField] = newSeatCount
//     await availability.save()

//     return res.status(200).json({ message: 'Seat Released' })
//   } catch (error) {
//     console.error('Error fetching safari availability:', error)
//     return res.status(500).json({ message: 'Server Error', error })
//   }
// }
