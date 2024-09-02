import React, { useState } from 'react'
import Button from './Button'
import { Link, useLocation } from 'react-router-dom'
import Edit from '../assets/edit.svg'

function BlogCard({ data }) {
  const { pathname } = useLocation()
  const [isHovered, setIsHovered] = useState(false)

  const handlClick = () => {
    console.log('click')
  }

  return (
    <div
      className={`card card-compact md:w-[31%] bg-base-100 shadow-xl ${
        pathname.includes('dashboard')
          ? 'hover:bg-[#0000003D] cursor-pointer relative'
          : ''
      }`}
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

      <figure>
        <img src={data.image} />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{data.title}</h2>
        <p>{data.description}</p>
        <div className='card-actions justify-stretch my-4'>
          <Button className={`w-full `}>
            <Link to='/blog-details'>Read More</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default BlogCard
