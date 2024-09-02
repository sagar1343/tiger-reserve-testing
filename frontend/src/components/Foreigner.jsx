import React, { useState } from 'react'
import { TextField } from '@mui/material'

const Foreigner = ({ errors, formData, handleChange }) => {
  const [type, setType] = useState('text')

  return (
    <div className='contactinfo box col-span-3 rounded-xl mt-5 border mb-5 p-7 border-black'>
      <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-5'>
        <div>
          <TextField
            error={errors?.passportNum && true}
            helperText={
              errors?.passportNum &&
              'Your passport number must contain 8 characters'
            }
            label='Passport Number'
            margin='normal'
            variant='outlined'
            required
            name='passportNum'
            value={formData.passportNum}
            onChange={handleChange}
            onKeyPress={(e) => {
              if (!/[0-9]/.test(e.key)) {
                e.preventDefault()
              }
            }}
            inputProps={{
              minLength: 8,
              maxLength: 8,
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
                  borderColor: 'black',
                },
              },
            }}
          />
        </div>
        <div>
          <TextField
            error={errors?.expirationDate && true}
            helperText={errors?.expirationDate && 'Select Expiration date'}
            label='Expiration Date'
            type={type}
            onFocus={() => setType('date')}
            onBlur={() => setType('text')}
            margin='normal'
            variant='outlined'
            required
            name='expirationDate'
            value={formData.expirationDate}
            onChange={handleChange}
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
                  borderColor: 'black',
                },
              },
            }}
          />
        </div>

        {/* <div>
          <TextField
            label='Passport Nationality'
            margin='normal'
            variant='outlined'
            required
            name='passportNationality'
            value={formData.passportNationality}
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
                  borderColor: 'black',
                },
              },
            }}
          />
        </div> */}
      </div>
    </div>
  )
}
export default Foreigner
