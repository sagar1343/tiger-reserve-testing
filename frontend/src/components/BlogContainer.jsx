import React from 'react'
import BlogCard from './BlogCard'
import blogImage from '../assets/blogImage.webp'
function BlogContainer() {
  const blogArr = [
    {
      title:
        'Pilibhit Tiger Reserve bags a global award TX2 Award for doubling Tiger',
      description:
        'The greatest achievement for Pilibhit Tiger Reserve and Uttar Pradesh Government...!!!',
      image: blogImage,
    },
  ]

  return (
    <div className='flex flex-col flex-wrap items-center sm:flex-row gap-8'>
      {blogArr.map((blog, index) => (
        <BlogCard
          key={index}
          data={blog}
        />
      ))}
    </div>
  )
}

export default BlogContainer
