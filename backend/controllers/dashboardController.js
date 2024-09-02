import { Booking } from '../models/bookingModel.js'
import { Blog } from '../models/blogModel.js'
import { Update } from '../models/updateModel.js'

// GET bookings?date=YYYY-MM-DD
async function getBookings(req, res) {
  const { date } = req.query

  if (!date) {
    return res.status(400).json({ message: 'Date is required' })
  }

  try {
    const bookings = await Booking.find({ bookingDate: date })
      .populate(
        'user',
        'firstName lastName email phone adhaar country countryCode'
      )
      // .populate('safari', 'name location') // Assuming you want safari details as well
      .exec()

    if (!bookings || bookings.length === 0) {
      return res
        .status(404)
        .json({ message: 'No bookings found for this date' })
    }
    res.status(200).json(bookings.reverse())
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server Error' })
  }
}

// Create Blog
async function createBlog(req, res) {
  try {
    const { title, description, author, link } = req.body
    console.log(title, description, author, link)
    const newBlog = new Blog({
      title,
      description,
      author,
      link,
    })
    await newBlog.save()
    res.status(200).json({ message: 'Blog Created' })
  } catch (error) {
    console.error('Error creating blog:', error)
    res.status(500).json({ message: 'Server Error', error })
  }
}

// Update Blog
async function updateBlog(req, res) {
  const { id } = req.params
  const { title, description, link } = req.body

  try {
    const updatedBlog = await Blog.findByIdAndUpdate(
      id,
      { title, description, link },
      { new: true, runValidators: true } // `new: true` returns the updated document, `runValidators: true` ensures validations are applied
    )

    if (!updatedBlog) {
      return res.status(404).json({ message: 'Blog not found' })
    }

    res.status(200).json({ message: 'Blog Updated' })
  } catch (error) {
    console.error('Error updating blog:', error)
    res.status(500).json({ message: 'Server Error', error })
  }
}

// Create Update
async function createUpdate(req, res) {
  try {
    const { title, description, date } = req.body
    const newUpdate = new Update({
      title,
      description,
      date,
    })
    await newUpdate.save()
    res.status(200).json({ message: 'Update Created' })
  } catch (error) {
    console.error('Error creating update:', error)
    res.status(500).json({ message: 'Server Error', error })
  }
}

// Change Update
async function changeUpdate(req, res) {
  const { id } = req.params
  const { title, description } = req.body

  try {
    const changedUpdate = await Blog.findByIdAndUpdate(
      id,
      { title, description },
      { new: true, runValidators: true } // `new: true` returns the updated document, `runValidators: true` ensures validations are applied
    )

    if (!changedUpdate) {
      return res.status(404).json({ message: 'Update not found' })
    }

    res.status(200).json({ message: 'Changed Update' })
  } catch (error) {
    console.error('Error updating Update:', error)
    res.status(500).json({ message: 'Server Error', error })
  }
}

export { getBookings, createBlog, updateBlog, createUpdate, changeUpdate }
