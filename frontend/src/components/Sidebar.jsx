import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Sidebar() {
  return (
    <section className='bg-green-1 sidebar overflow-hidden'>
      <div className='flex flex-col gap-2 text-white mt-20 text-lg'>
        <NavLink
          className='px-8 my-2'
          to='/dashboard/bookings'
        >
          Bookings
        </NavLink>
        <NavLink
          className='px-8 my-2'
          to='/dashboard/publish-content'
        >
          Publish Content
        </NavLink>
        {/* <NavLink
          className='px-8 my-2'
          to='/dashboard/upload-images'
        >
          Upload Images
        </NavLink> */}
      </div>
    </section>
  )
}
