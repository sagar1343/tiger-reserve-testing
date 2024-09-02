import express from 'express'
import {
  getBookings,
  createBlog,
  updateBlog,
  createUpdate,
  changeUpdate,
} from '../controllers/dashboardController.js'

const router = express.Router()

router.get('/bookings', getBookings)
router.post('/blogs', createBlog)
router.post('/blogs/:id', updateBlog)
router.post('/updates', createUpdate)
router.post('/updates/:id', changeUpdate)

export default router
