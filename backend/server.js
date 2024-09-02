import 'dotenv/config'
import app from './app.js'
import mongoose from 'mongoose'

mongoose
  .connect(process.env.MOGODB_CLOUD_CONNECTION_URL)
  .then(() => console.log('connected to db....'))
  .catch(() => console.log('connection failed...'))

const PORT = process.env.PORT || 8000
app.listen(PORT, () => console.log(`listening to port: ${PORT}...`))
