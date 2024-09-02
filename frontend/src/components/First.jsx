import React, { useState } from 'react'
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  InputAdornment,
} from '@mui/material'
import BookingSummary from './BookingSummary'
import Pricing from './Pricing'
import Foreigner from './Foreigner'
import NextButton from './NextButton'
import userSchemaZod from '@/hooks/userSchemaZod'
import { z } from 'zod'

const First = ({
  children,
  formData,
  setFormData,
  setCurrentStep,
  currentStep,
}) => {
  const [validated, setValidated] = useState(false)
  const [errors, setErrors] = useState(null)
  const [open, setOpen] = useState(false)
  const [countryPicked, setCountryPicked] = useState(false)
  const schema = userSchemaZod(countryPicked)

  // Filtering the error to show in UI
  const handleValidation = () => {
    try {
      const validatedData = schema.parse(formData) // Validate the data
      setValidated(true)
      setErrors(null)
    } catch (error) {
      setOpen(false)
      if (error instanceof z.ZodError) {
        const fieldErrors = {}
        error.errors.forEach((err) => {
          fieldErrors[err.path[0]] = err.message
        })
        setErrors(fieldErrors)
      }
    }
  }

  const countries = [
    'United States',
    'Canada',
    'United Kingdom',
    'Australia',
    'Germany',
    'France',
    'India',
    'China',
    'Japan',
    'Brazil',
    'Mexico',
    'Russia',
    'Italy',
    'Spain',
    'South Korea',
    'Netherlands',
    'Turkey',
    'Saudi Arabia',
    'Switzerland',
    'Argentina',
    'South Africa',
    'Sweden',
    'Poland',
    'Belgium',
    'Norway',
    'Austria',
    'Denmark',
    'Finland',
    'Ireland',
    'New Zealand',
    'Singapore',
    'Malaysia',
    'Thailand',
    'Indonesia',
    'Philippines',
    'Vietnam',
    'Pakistan',
    'Bangladesh',
    'Nigeria',
    'Egypt',
  ]
  const countryCodes = {
    'United States': '+1',
    Canada: '+1',
    'United Kingdom': '+44',
    Australia: '+61',
    Germany: '+49',
    France: '+33',
    India: '+91',
    China: '+86',
    Japan: '+81',
    Brazil: '+55',
    Mexico: '+52',
    Russia: '+7',
    Italy: '+39',
    Spain: '+34',
    'South Korea': '+82',
    Netherlands: '+31',
    Turkey: '+90',
    'Saudi Arabia': '+966',
    Switzerland: '+41',
    Argentina: '+54',
    'South Africa': '+27',
    Sweden: '+46',
    Poland: '+48',
    Belgium: '+32',
    Norway: '+47',
    Austria: '+43',
    Denmark: '+45',
    Finland: '+358',
    Ireland: '+353',
    'New Zealand': '+64',
    Singapore: '+65',
    Malaysia: '+60',
    Thailand: '+66',
    Indonesia: '+62',
    Philippines: '+63',
    Vietnam: '+84',
    Pakistan: '+92',
    Bangladesh: '+880',
    Nigeria: '+234',
    Egypt: '+20',
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
    if (name === 'country') {
      const isIndia = value === 'India'
      setCountryPicked(!isIndia)
      setFormData({
        ...formData,
        [name]: value,
        countryCode: countryCodes[value],
      })
    }
  }

  return (
    <main className='grid md:grid-cols-12 text-base gap-10 m-6 md:m-12'>
      <div className='col-span-7'>
        <div className='contactinfo box md:col-span-8 sm:col-span-6  rounded-xl border md:ps-4 md:pt-4 md:pe-4 lg:p-6 border-black '>
          {children}
          <div className='flex justify-between'>
            <h2 className='text-2xl font-semibold'>Contact Details</h2>
          </div>
          <p className='mt-3  font-semibold'>
            Fill the Details of Lead Traveller
          </p>
          <p className='text-sm mb-6 md:mb-2'>
            This information will be used to send you confirmation and update
            your booking
          </p>
          <div className='grid md:grid-cols-2 lg:grid-cols-2 md:gap-5'>
            <div className='flex'>
              <TextField
                error={errors?.firstName && true}
                helperText={
                  errors?.firstName &&
                  'Your first name must contain at least 3 letters'
                }
                type='text'
                label='First Name'
                margin='normal'
                variant='outlined'
                required
                className='grow'
                name='firstName'
                value={formData.firstName}
                onChange={handleChange}
                onKeyPress={(e) => {
                  if (/[0-9]/.test(e.key)) {
                    e.preventDefault()
                  }
                }}
                InputProps={{ style: { fontSize: 16, color: 'black' } }}
                InputLabelProps={{ style: { fontSize: 16, color: 'black' } }}
                sx={{
                  width: '100%',
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#A8A8A8', // Change border color
                    },
                    '&:hover fieldset': {
                      borderColor: 'black', // Change border color on hover
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'black', // Change border color when focused
                    },
                  },
                }}
              />
            </div>
            <div>
              <TextField
                error={errors?.lastName && true}
                helperText={
                  errors?.lastName &&
                  'Your last name must contain at least 2 letters'
                }
                label='Last Name'
                margin='normal'
                variant='outlined'
                required
                name='lastName'
                value={formData.lastName}
                onChange={handleChange}
                onKeyPress={(e) => {
                  if (/[0-9]/.test(e.key)) {
                    e.preventDefault()
                  }
                }}
                InputProps={{ style: { fontSize: 16, color: 'black' } }}
                InputLabelProps={{ style: { fontSize: 16, color: 'black' } }}
                sx={{
                  width: '100%',
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#A8A8A8',
                    },
                    '&:hover fieldset': {
                      borderColor: 'black',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'black', // Change border color when focused
                    },
                  },
                }}
              />
            </div>
            <div>
              <TextField
                error={errors?.email && true}
                helperText={errors?.email && 'Enter a valid email'}
                type='email'
                label='Email'
                margin='normal'
                variant='outlined'
                required
                name='email'
                value={formData.email}
                onChange={handleChange}
                InputProps={{ style: { fontSize: 16, color: 'black' } }} // Increase input text size
                InputLabelProps={{ style: { fontSize: 16, color: 'black' } }} // Increase label text size
                sx={{
                  width: '100%',
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#A8A8A8', // Change border color
                    },
                    '&:hover fieldset': {
                      borderColor: 'black', // Change border color on hover
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'black', // Change border color when focused
                    },
                  },
                }}
              />
            </div>
            <div>
              <FormControl
                margin='normal'
                sx={{ width: '100%' }}
              >
                <InputLabel sx={{ color: 'black', fontSize: '14px' }}>
                  Country
                </InputLabel>
                <Select
                  label='Country'
                  defaultValue='India'
                  name='country'
                  value={formData.country}
                  onChange={handleChange}
                >
                  {countries.map((country, index) => (
                    <MenuItem
                      key={index}
                      value={country}
                    >
                      {country}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div>
              <TextField
                error={errors?.phone && true}
                helperText={
                  errors?.phone && 'Your phone number must contain 10 digits'
                }
                type='tel'
                label='Phone Number'
                margin='normal'
                variant='outlined'
                required
                name='phone'
                value={formData.phone}
                onChange={handleChange}
                onKeyPress={(e) => {
                  if (!/[0-9]/.test(e.key)) {
                    e.preventDefault()
                  }
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      {formData.countryCode}
                    </InputAdornment>
                  ),
                  style: { fontSize: 16, color: 'black' },
                  inputMode: 'numeric',
                }}
                InputLabelProps={{
                  style: { fontSize: 16, color: 'black' },
                }}
                inputProps={{
                  minLength: 10,
                  maxLength: 10,
                }}
                sx={{
                  width: '100%',
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#A8A8A8', // Change border color
                    },
                    '&:hover fieldset': {
                      borderColor: 'black', // Change border color on hover
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'black', // Change border color when focused
                    },
                  },
                }}
              />
            </div>
            <div>
              <TextField
                className={`${countryPicked ? 'opacity-50' : ''}`}
                error={!countryPicked && errors?.adhaar && true}
                helperText={
                  !countryPicked &&
                  errors?.adhaar &&
                  'Your Aadhaar number must contain 12 digits'
                }
                label='Aadhar Number'
                margin='normal'
                variant='outlined'
                required
                disabled={countryPicked}
                name='adhaar'
                value={formData.adhaar}
                onChange={handleChange}
                onKeyPress={(e) => {
                  if (!/[0-9]/.test(e.key)) {
                    e.preventDefault()
                  }
                }}
                inputProps={{
                  minLength: 12,
                  maxLength: 12,
                }}
                InputProps={{
                  style: { fontSize: '14px', color: 'black' },
                  inputMode: 'numeric',
                }}
                InputLabelProps={{
                  style: { fontSize: '14px', color: 'black' },
                }}
                sx={{
                  width: '100%',
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#A8A8A8',
                    },
                    '&:hover fieldset': {
                      borderColor: 'black',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'black',
                    },
                  },
                }}
              />
            </div>
          </div>
        </div>
        <div>
          <p className=' p-1 note-payment text-red-500'>
            <span className='font-semibold text-stone-950 note'>Note:</span>{' '}
            Each candidate must carry their ID card at the time of visit.
          </p>
        </div>
        {formData.country && formData.country !== 'India' && (
          <Foreigner
            errors={errors}
            formData={formData}
            setFormData={setFormData}
            handleChange={handleChange}
          />
        )}
        <div className='mt-4 text-center md:text-start md:mt-0 next-buttonbox'>
          <NextButton
            formData={formData}
            className='next-button'
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            style={{
              padding: '12px 24px',
              fontSize: '16px',
              borderRadius: '8px',
            }}
            validated={validated}
            handleValidation={handleValidation}
            open={open}
            setOpen={setOpen}
          />
        </div>
      </div>
      <div className='col-span-5 space-y-6 bookprice '>
        <BookingSummary />
        <Pricing />
      </div>
    </main>
  )
}

export default First
