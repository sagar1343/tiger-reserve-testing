import mongoose from 'mongoose'
import Joi from 'joi'

const SLOT_TIMINGS = ['morning', 'evening']
const BOOKING_STATUS = ['reserved', 'confirmed', 'cancelled']
const PAYMENT_STATUS = ['pending', 'completed', 'cancelled']

const bookingSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    safari: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Safari',
      required: true,
    },
    payment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Payment',
    },
    childCount: { type: Number, required: true },
    adultCount: { type: Number, required: true },
    totalPeople: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
    bookingDate: { type: String, required: true },
    timerStartAt: { type: String, required: true },
    status: {
      type: String,
      enum: BOOKING_STATUS,
      default: 'reserved',
    },
    paymentStatus: {
      type: String,
      enum: PAYMENT_STATUS,
      default: 'pending',
    },
    slot: { type: String, enum: SLOT_TIMINGS, required: true },
  },
  { timestamps: true }
)

const Booking = mongoose.model('Booking', bookingSchema)

function validateBooking(booking) {
  const schema = Joi.object({
    user: Joi.string().length(24).hex().required(),
    safari: Joi.string().length(24).hex().required(),
    childCount: Joi.number().positive().min(1).required(),
    adultCount: Joi.number().positive().min(1).required(),
    totalPeople: Joi.number().positive().min(1).required(),
    totalPrice: Joi.number().positive().required(),
    bookingDate: Joi.string().required(),
    status: Joi.string()
      .valid(...PAYMENT_STATUS)
      .default(PAYMENT_DEFAULT)
      .required(),
    slot: Joi.string()
      .valid(...SLOT_TIMINGS)
      .required(),
  })
  return schema.validate(booking)
}

export { Booking, validateBooking }
