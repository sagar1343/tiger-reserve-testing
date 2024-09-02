import express from 'express'
import {
  createOrderHandler,
  verifyPaymentHandler,
  lockSeatsHandler,
  // releaseSeatsHandler,
} from '../controllers/rpayController.js'

const router = express.Router()

router.post('/create-order', createOrderHandler)
router.post('/verify-payment', verifyPaymentHandler)
router.get('/lock-seats', lockSeatsHandler)
// router.get('/release-seats', releaseSeatsHandler)

export default router
