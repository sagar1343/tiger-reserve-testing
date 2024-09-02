import mongoose from 'mongoose'
import Joi from 'joi'

const safariSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, minlength: 3, maxlength: 255 },
    description: { type: String },
    image: { type: String },
    location: { type: String, required: true },
    adultPerSeat: { type: Number, required: true },
    childPerSeat: { type: Number, required: true },
    seats: { type: Number, require: true },
  },
  { timestamps: true }
)

const Safari = mongoose.model('Safari', safariSchema)

function validateSafari(safari) {
  const schema = Joi.object({
    title: Joi.string().min(3).max(255).required(),
    description: Joi.string().optional(),
    image: Joi.string().uri().optional(),
    location: Joi.string().required(),
    adultPerSeat: Joi.number().positive().required(),
    childPerSeat: Joi.number().positive().required(),
    seats: Joi.number().positive().required(),
  })
  return schema.validate(safari)
}

export { Safari, validateSafari }
