import 'dotenv/config'
import cors from 'cors'
import express from 'express'
import morgan from 'morgan'
import safariRouter from './routes/safariRouter.js'
import paymentRouter from './routes/rpayRoute.js'
import dashboardRouter from './routes/dashboardRoute.js'
import nodemailer from 'nodemailer'
import jsPDFInvoiceTemplate from 'jspdf-invoice-template-nodejs'
import fs from 'fs'
import path from 'path'

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

app.use('/api/rpay', paymentRouter)
app.use('/api/safari', safariRouter)
app.use('/api/dashboard', dashboardRouter)
app.get('/api/getkey', (req, res) =>
  res.status(200).json({ key: process.env.RAZORPAY_KEY_ID })
)
app.post('/api/send-email', (req, res) => {
  const { user, paymentDate, bookingId, totalPrice, booking } = req.body
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: process.env.SENDER_EMAIL,
      pass: process.env.APP_PASSWORD,
    },
  })
  const logoBase64 = getImageAsBase64('./logo.png')

  // PDF details
  var props = {
    outputType: jsPDFInvoiceTemplate.OutputType.dataUriString,
    returnJsPDFDocObject: true,
    fileName: 'Safari Invoice',
    orientationLandscape: false,
    compress: true,
    logo: {
      src: logoBase64,
      type: 'PNG', //optional, when src= data:uri (nodejs case)
      width: 53.33, //aspect ratio = width/height
      height: 26.66,
      margin: {
        top: 0, //negative or positive num, from the current position
        left: 0, //negative or positive num, from the current position
      },
    },
    // stamp: {
    //   inAllPages: true, //by default = false, just in the last page
    //   src: 'https://raw.githubusercontent.com/edisonneza/jspdf-invoice-template/demo/images/qr_code.jpg',
    //   type: 'JPG', //optional, when src= data:uri (nodejs case)
    //   width: 20, //aspect ratio = width/height
    //   height: 20,
    //   margin: {
    //     top: 0, //negative or positive num, from the current position
    //     left: 0, //negative or positive num, from the current position
    //   },
    // },
    business: {
      name: 'Pilibhit Tiger Reserve',
      address: 'District Pilibhit, Uttar Prasdesh 262122',
      phone: 'Help Line No.: (+91) 7521899188',
      // email: 'email@example.com',
      website: 'pilibhit.vercel.app', //change site
    },
    contact: {
      label: 'Invoice issued for:',
      name: user.name,
      address: `${user.country} | ID Proof: ${user.idProof}`, //Used as Country
      phone: `(${user.countryCode}) ${user.phone}`,
      email: user.email,
    },
    invoice: {
      label: 'Booking ID: ',
      num: bookingId,
      invDate: `Payment Date/Time: ${paymentDate}`,
      headerBorder: false,
      tableBodyBorder: false,
      header: [
        {
          title: '#',
          style: {
            width: 10,
            margin: {
              top: 50,
            },
          },
        },
        {
          title: 'Safari',
          style: {
            width: 30,
            margin: {
              top: 50,
            },
          },
        },
        {
          title: 'Date',
          style: {
            margin: {
              top: 50,
            },
          },
        },
        {
          title: 'Slot',
          style: {
            margin: {
              top: 50,
            },
          },
        },
        {
          title: 'Timming',
          style: {
            width: 40,
            margin: {
              top: 50,
            },
          },
        },
        {
          title: 'Adult/Child',
          style: {
            margin: {
              top: 50,
            },
          },
        },
        {
          title: 'Status',
          style: {
            margin: {
              top: 50,
            },
          },
        },
      ],
      table: [booking],
      additionalRows: [
        {
          col1: 'Total:',
          col2: `${totalPrice} INR`,
          col3: 'Paid',
          style: {
            fontSize: 14, //optional, default 12
          },
        },
      ],
      invDescLabel: 'Invoice Note',
      invDesc:
        'Thank you for your booking. Please keep this invoice as proof of payment and present it at the time of your visit along with Each candidate must carry their ID card. If you have any questions, feel free to contact us at 7521899188.',
    },
    // footer: {
    //   text: 'The invoice is created on a computer and is valid without the signature and stamp.',
    // },
    pageEnable: true,
    pageLabel: 'Page ',
  }

  const pdfDataUri = generatePDF(props)
  const pdfBase64 = pdfDataUri.split(',')[1]
  const pdfBuffer = Buffer.from(pdfBase64, 'base64')

  // Email content
  var mailOptions = {
    from: {
      name: 'Pilibhit Tiger Reserve',
      address: process.env.SENDER_EMAIL,
    },
    to: user.email, //user email
    subject: 'Invoice of Safari Booking',
    text: 'Plaintext version of the message',
    html: '<p>Your Safari booking is confirmed! Get ready for an adventure!</p>',
    attachments: [
      {
        filename: 'Safari Invoice.pdf',
        content: pdfBuffer,
        contentType: 'application/pdf',
      },
    ],
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ success: false, error })
    }
    res.status(200).json({ success: true, info })
  })
})

// admin credantial
const adminCredentials = {
  email: 'pilibhit@gmail.com',
  password: 'password123'
};

// Login route
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (email === adminCredentials.email && password === adminCredentials.password) {
    res.status(200).json({ message: 'Login successful' });
  } else {
    res.status(401).json({ message: 'Invalid email or password' });
  }
});


export default app

// Function to load and convert image to Base64
function getImageAsBase64(imagePath) {
  const filePath = path.resolve(imagePath)
  try {
    const imageData = fs.readFileSync(filePath)
    return `data:image/png;base64,${imageData.toString('base64')}`
  } catch (error) {
    console.error('Error reading the image file:', error)
    return null // Handle the error gracefully
  }
}

// Generate PDF
function generatePDF(props) {
  var pdfObject = jsPDFInvoiceTemplate.default(props)
  return pdfObject.jsPDFDocObject.output('datauristring')
}
