import mongoose from 'mongoose'
import Joi from 'joi'

const PAYMENT_STATUS = ['pending', 'completed', 'cancelled']

const paymentSchema = new mongoose.Schema(
  {
    razorpay_order_id: { type: String, required: true },
    razorpay_payment_id: { type: String, required: true },
    razorpay_signature: { type: String, required: true },
    booking: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Booking',
      required: true,
    },
    paymentDate: { type: String, required: true },
    // paymentMethod: { type: String, required: true },
    status: { type: String, enum: PAYMENT_STATUS, default: 'pending' },
  },
  { timestamps: true }
)

const Payment = mongoose.model('Payment', paymentSchema)

function validatePayment(payment) {
  const schema = Joi.object({
    razorpay_order_id: Joi.string().required(),
    razorpay_payment_id: Joi.string().required(),
    razorpay_signature: Joi.string().required(),
    booking: Joi.string().length(24).hex().required(),
    // paymentMethod: Joi.string(),
    paymentDate: Joi.string().required(),
    status: Joi.string()
      .valid(...PAYMENT_STATUS)
      .default(PAYMENT_DEFAULT)
      .required(),
  })

  return schema.validate(payment)
}

export { Payment, validatePayment }
