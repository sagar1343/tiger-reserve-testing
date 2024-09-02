import mongoose from 'mongoose'
import Joi from 'joi'

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, minlength: 3, maxlength: 10, required: true },
    lastName: { type: String, minlength: 2, maxlength: 20, required: true },
    email: { type: String, unique: true, required: true },
    phone: { type: Number, minlength: 10, maxlength: 10, required: true },
    password: { type: String },
    bookings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Booking' }], // not necessary for now
    adhaar: { type: String, required: true }, 
    country: { type: String, required: true },
    passportNum: { type: String },
    expirationDate: { type: String },
    countryCode: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
)

const User = mongoose.model('User', userSchema)

function validateUser(user) {
  const schema = Joi.object({
    firstName: Joi.string().min(3).max(10).required(),
    lastName: Joi.string().min(2).max(20).required(),
    email: Joi.string().email().required(),
    phone: Joi.string().length(10).pattern(/^\d+$/).required(),
    password: Joi.string(),
    aadhar: Joi.string().required(),
    country: Joi.string().required(),
    passportNum: Joi.string().optional(),
    expirationDate: Joi.string().optional(),
    passportNationality: Joi.string().optional(),
    countryCode: Joi.string().length(4).optional(),
    isAdmin: Joi.boolean().optional(),
  })
  return schema.validate(user)
}

export { User, validateUser }
