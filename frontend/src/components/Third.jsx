import React, { useEffect, useState } from 'react'
import confirm from '../animations/confirm.json'
import Lottie from 'lottie-react'
import { Button } from '@mui/material'
import logo2 from '../assets/logo2.png'
import { useNavigate } from 'react-router-dom'
import { useBookingContext } from '@/context/BookingContext'

const Confirmation = () => {
  const { successData } = useBookingContext()
  const navigate = useNavigate()

  function generatePDF() {
    var pdfObject = jsPDFInvoiceTemplate.default(props) //returns number of pages created
  }

  if (successData) {
    var { user, paymentDate, bookingId, totalPrice, booking } = successData

    // PDF details
    var props = {
      outputType: jsPDFInvoiceTemplate.OutputType.Save,
      returnJsPDFDocObject: true,
      fileName: 'Safari Invoice',
      orientationLandscape: false,
      compress: true,
      logo: {
        src: logo2,
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
  }

  if (!successData) return navigate('/')
  return (
    <>
      <div className='text-center mt-5'>
        <h1 className='font-semibold text-2xl mt-11 mb-6'>Check your Email!</h1>
        <div className='confirmp flex justify-center'>
          <p>
            Your booking details and ticket have been sent to your email. Please
            check your inbox for confirmation and instructions. If you don't
            receive it, email us at{' '}
            <a
              href='mailto:shlokbishtalm@gmail.com'
              className='font-bold'
            >
              shlokbishtalm@gmail.com
            </a>{' '}
            with your payment screenshot and phone number or ID , We'll get back
            to you there.
          </p>
        </div>
      </div>
      <div className='confirm flex justify-center items-center'>
        <Lottie
          animationData={confirm}
          style={{ width: '400px' }}
          loop={false}
        />
      </div>
      <div className='flex mb-5 download justify-center'>
        <Button
          variant='contained'
          size='large'
          style={{
            width: 'auto',
            height: '50px',
            color: 'white',
            backgroundColor: 'black',
          }}
          onClick={generatePDF}
        >
          Download Ticket
        </Button>
      </div>
    </>
  )
}
export default Confirmation
