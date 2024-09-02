import mongoose from 'mongoose'

const safariAvailabilitySchema = new mongoose.Schema(
  {
    safari: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Safari',
      required: true,
    },
    date: { type: String, required: true },
    morningSeats: { type: Number, required: true },
    eveningSeats: { type: Number, required: true },
  },
  { timestamps: true }
)

const SafariAvailability = mongoose.model(
  'safariAvailability',
  safariAvailabilitySchema
)
export { SafariAvailability }
