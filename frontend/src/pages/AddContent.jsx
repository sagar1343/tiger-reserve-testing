import { TextField, Select, MenuItem } from '@mui/material'
import H2 from '@/components/H2'
import React, { useState } from 'react'
import { z } from 'zod'
import Button from '@/components/Button'

export default function AddContent() {
  const [link, setLink] = useState('')
  const [isValid, setIsValid] = useState(true)

  // Zod schema to validate URLs
  const urlSchema = z.string().url()
  const handleChange = (e) => {
    const value = e.target.value
    setLink(value)
    try {
      urlSchema.parse(value) // Validate the URL
      setIsValid(true) // If the URL is valid, set isValid to true
    } catch (error) {
      setIsValid(false) // If the URL is invalid, set isValid to false
    }
  }

  // Submit
  const onClickHandler = () => {
    console.log('submit')
  }

  return (
    <section className='container-padding flex flex-col gap-6'>
      <H2 className='gradient-text-1 !mb-0'>Blogs or Latest Updates</H2>
      <div className='p-10 flex flex-col gap-8 bg-white rounded-xl'>
        <div className='flex'>
          <div className='flex flex-wrap gap-8 grow'>
            <div className='flex flex-col gap-2 w-[10%]'>
              <p>Publishing As</p>
              <Select
                name='country'
                // Blog or Updates
                // value={}
                // disabled
              >
                <MenuItem value='blog'>Blog</MenuItem>
                <MenuItem value='update'>Update</MenuItem>
              </Select>
            </div>
            <div className='flex flex-col gap-2'>
              <p>Content writer</p>
              <TextField
                // error={errors?.firstName && true}
                // helperText={errors?.firstName && errors?.firstName}
                type='text'
                margin='normal'
                placeholder='Add Name...'
                required
                className='grow !m-0'
                name='author'
                // value={}
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
            <div className='grow flex flex-col gap-2'>
              <p>Title</p>
              <TextField
                // error={errors?.firstName && true}
                // helperText={errors?.firstName && errors?.firstName}
                type='text'
                margin='normal'
                placeholder='Add Title...'
                required
                className='grow !m-0'
                name='title'
                // value={}
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
          </div>
          {/* <div>
            <img
              src=''
              alt=''
            />
          </div> */}
        </div>
        <div className='grow flex flex-col gap-2'>
          <p>Description</p>
          <TextField
            // error={errors?.firstName && true}
            // helperText={errors?.firstName && errors?.firstName}
            type='text'
            margin='normal'
            placeholder='Add Title...'
            required
            className='grow !m-0'
            name='description'
            // value={}
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
        <div className='grow flex flex-col gap-2'>
          <p>Link</p>
          <TextField
            error={!isValid}
            helperText={!isValid && 'Please enter a valid URL'}
            type='text'
            margin='normal'
            placeholder='Add Link...'
            required
            className='grow !m-0'
            name='link'
            value={link}
            onChange={handleChange}
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
      </div>
      <div className='flex justify-end'>
        <Button
          onClickHandler={onClickHandler}
          className='bg-green-1 text-white rounded-lg'
        >
          Publish
        </Button>
      </div>
    </section>
  )
}

//  async function getBookings() {
//    try {
//      const res = await fetch(
//        'http://localhost:8000/api/dashboard/blogs/66c6ee766264f86aa43aec23',
//        {
//          method: 'POST',
//          headers: {
//            'Content-Type': 'application/json',
//          },
//          body: JSON.stringify({
//            title: 'Safari Updated',
//          }),
//        }
//      )

//      const data = await res.json()
//      console.log(data)
//    } catch (error) {
//      console.log(error)
//    }
//  }
