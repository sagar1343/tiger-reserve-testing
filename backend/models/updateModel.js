import mongoose from 'mongoose'

const updateSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, minlength: 3, maxlength: 255 },
    description: { type: String, required: true },
    date: { type: String, required: true },
  },
  { timestamps: true }
)

const Update = mongoose.model('update', updateSchema)
export { Update }

