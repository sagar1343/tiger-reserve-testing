import { useEffect } from 'react'
import fb from '../assets/fb.webp'
import ig from '../assets/ig.webp'
import x from '../assets/x.webp'
import yt from '../assets/youtube.webp'
import { Link } from 'react-router-dom'

// function loadTranslateScript() {
//   return new Promise((resolve, reject) => {
//     const script = document.createElement('script')
//     script.type = 'text/javascript'
//     script.src =
//       '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
//     script.onload = () => resolve()
//     script.onerror = () => reject(new Error('Failed to load Translate script'))
//     document.body.appendChild(script)
//   })
// }

function heading(content) {
  return <h4 className='font-semibold text-xl whitespace-nowrap'>{content}</h4>
}

function Footer() {
  // loadTranslateScript()

  return (
    <>
      <div className='text-white font-extralight w-screen bg-footer-gradient bg-cover bg-center bg-no-repeat'>
        <footer className='flex flex-wrap lg:flex-nowrap gap-10 px-10 py-20 md:p-16 lg:py-28 lg:px-24'>
          <div className='lg:w-[40%] space-y-4'>
            {heading('About Us')}
            <hr className=' border-t-[0.1px] border-white/40' />
            <p className='text-justify w-[90%]'>
              The Pilibhit Tiger Reserve is situated in the Pilibhit district
              and Shahjahanpur District of Uttar Pradesh, forming part of the
              Terai Arc Landscape, in the upper Gangetic Plain Biogeographic
              Province. Some river originating from the reserve, which is also
              the catchment of several others like Sharda, Chuka and Mala,
              Khannot. The habitat is characterized by sal forests, tall
              grasslands and swamp maintained by periodic flooding from rivers.
            </p>
          </div>
          <div className='lg:grow col-span-3 lg:col-span-1 space-y-4'>
            {heading('Quick links')}
            <hr className=' border-t-[0.1px] border-white/40' />
            <ul>
              <li className='hover:opacity-80 mb-1'>
                <Link to='/'>Home</Link>
              </li>
              <li className='hover:opacity-80 mb-1'>
                <Link to='/about'>About us</Link>
              </li>
              <li className='hover:opacity-80 mb-1'>
                <Link to='/updates'>Latest Updates</Link>
              </li>
              <li className='hover:opacity-80 mb-1'>
                <Link to='/updates#tourist-info'>Tourist Information</Link>
              </li>
              <li className='hover:opacity-80 mb-1'>
                <Link to='/gallery'>Gallery</Link>
              </li>
              <li className='hover:opacity-80 mb-1'>
                <Link to='/updates#blogs'>Blogs</Link>
              </li>
              <li className='hover:opacity-80 mb-1'>
                <Link to='/administration'>Administration</Link>
              </li>
              <li className='hover:opacity-80 mb-1'>
                <a
                  href='https://pilibhittigerreserve.in/images/Advertisement.pdf'
                  target='_blank'
                >
                  Job Openings
                </a>
              </li>
              <li className='hover:opacity-80 mb-1'>
                <a href='mailto:shlokbishtalm@gmail.com'>Contact Us</a>
              </li>
            </ul>
          </div>
          <div className='lg:grow space-y-4 col-span-2'>
            {heading('Get in Touch')}
            <hr className=' border-t-[0.1px] border-white/40' />
            <div className='space-y-8'>
              <ul className='space-y-3'>
                <li>Pilibhit Tiger Reserve</li>
                <li>District Pilibhit, Uttar Prasdesh 262122</li>
              </ul>
              <ul className='flex gap-4'>
                <a
                  href='https://www.facebook.com/pilibhittigerreserve.in'
                  target='_blank'
                >
                  <img src={fb} />
                </a>
                <a
                  href='https://www.instagram.com/pilibhittiger.reserve/'
                  target='_blank'
                >
                  <img src={ig} />
                </a>
                <a
                  href='https://x.com/PilibhitR'
                  target='_blank'
                >
                  <img src={x} />
                </a>
                <a
                  href='https://www.youtube.com/channel/UCMCfyY2Xn7vVxg0twh4XRzw?view_as=subscriber'
                  target='_blank'
                >
                  <img src={yt} />
                </a>
              </ul>
              {/* <div id='google_translate_element'></div> */}
            </div>
          </div>
        </footer>
        <hr className=' border-t-[0.1px] border-white/40' />
        <div className='px-10 md:px-16 lg:px-24 py-5 text-xs sm:text-lg'>
          © Copyright 2024 Pilibhit Tiger Reserve
        </div>
      </div>
    </>
  )
}

export default Footer
