import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Edit from '../assets/edit.svg'

function UpdateCard({ data }) {
  const { pathname } = useLocation()
  const [isHovered, setIsHovered] = useState(false)

  const handlClick = () => {
    console.log('click')
  }

  return (
    <div
      className={`${
        pathname.includes('dashboard')
          ? 'hover:bg-[#0000003D] cursor-pointer relative'
          : ''
      } card space-y-4 w-full p-4 sm:p-8 bg-green-1 text-[#E7E7E7] border-[1px] border-[#E7E7E7] border-opacity-40 shadow-xl`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={pathname.includes('dashboard') && handlClick}
    >
      {pathname.includes('dashboard') && (
        <div
          className={`absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 z-10  ${
            isHovered ? 'block' : 'hidden'
          }`}
        >
          <img
            src={Edit}
            alt=''
          />
        </div>
      )}
      
      <h6 className='text-[#F5B206] text-2xl'>{data.date}</h6>
      <h5 className='text-2xl font-semibold'>{data.title}</h5>
      <p>{data.description}</p>
    </div>
  )
}

export default UpdateCard
