import _ from 'lodash'
import { Safari, validateSafari } from '../models/safariModel.js'
import moment from 'moment-timezone'
import { SafariAvailability } from '../models/safariAvailabilityModel.js'

// Create
async function createSafari(req, res) {
  const { error } = validateSafari(req.body)
  if (error) return res.status(400).send(error.details[0].message)

  let safari = new Safari(
    _.pick(req.body, [
      'title',
      'description',
      'location',
      'seats',
      'image',
      'adultPerSeat',
      'childPerSeat',
    ])
  )
  safari = await safari.save()
  res.status(200).send(safari)
}

// Get all
async function getAllSafaris(req, res) {
  const safaris = await Safari.find()
  res.status(200).send({ result: safaris.length, safaris: safaris })
}

async function getAvailableSeats(req, res) {
  try {
    const safaris = await Safari.find().lean()
    if (!safaris.length) {
      return res.status(404).json({ message: 'Currently No safari available' })
    }

    const data = await Promise.all(
      safaris.map(async (safari) => {
        const safariData = {
          safariId: safari._id,
          safariName: safari.title,
          slots: [],
        }

        for (let i = 1; i <= 7; i++) {
          const bookingDate = moment()
            .tz('Asia/Kolkata')
            .add(i, 'days')
            .format('YYYY-MM-DD')

          const availability = await SafariAvailability.findOne({
            safari: safari._id,
            date: bookingDate,
          }).lean()

          const slotData = {
            morning: availability ? availability.morningSeats : safari.seats,
            evening: availability ? availability.eveningSeats : safari.seats,
          }

          safariData.slots.push({
            date: bookingDate,
            availability: slotData,
          })
        }

        return safariData
      })
    )

    res.status(200).json({ success: true, data })
  } catch (error) {
    res.status(500).json({ message: 'Server error', error })
  }
}

export { createSafari, getAllSafaris, getAvailableSeats }
