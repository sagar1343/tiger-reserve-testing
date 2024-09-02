import express from 'express'
import {
  createSafari,
  getAllSafaris,
  getAvailableSeats,
} from '../controllers/safariController.js'

const router = express.Router()

router.get('/', getAllSafaris)
router.post('/', createSafari)
router.get('/available-seats', getAvailableSeats)

export default router