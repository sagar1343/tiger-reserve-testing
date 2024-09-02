import mongoose from 'mongoose'

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, minlength: 3, maxlength: 255 },
    description: { type: String, required: true },
    author: { type: String, required: true },
    image: { type: String },
    link: { type: String, required: true },
  },
  { timestamps: true }
)

const Blog = mongoose.model('blog', blogSchema)
export { Blog }
