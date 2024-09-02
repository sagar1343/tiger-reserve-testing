import { FaBars } from 'react-icons/fa6'
import Button from './Button'
import arrowDown from '../assets/arrowDown.webp'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.webp'
import { useSafariContext } from '@/context/SafariContext'
import { useLocation } from 'react-router-dom'

function Navbar() {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const safaris = useSafariContext()
  return (
    <nav
      className={`flex justify-between items-center px-8 ${
        pathname.includes('dashboard') ? 'bg-green-1' : ''
      }`}
    >
      <Link
        to='/'
        className='w-full'
      >
        <img
          src={logo}
          alt='logo'
          className='h-14 sm:h-20 lg:h-24 rounded-b-xl'
        />
      </Link>
      {/* phone */}
      <div className='drawer drawer-end'>
        <input
          id='my-drawer-4'
          type='checkbox'
          className='drawer-toggle'
        />
        <div className='drawer-content flex flex-col items-end justify-center'>
          <label htmlFor='my-drawer-4'>
            <FaBars
              color='white'
              className='lg:hidden size-6 sm:size-8 cursor-pointer'
            />
          </label>
        </div>
        <div className='drawer-side z-40'>
          <label
            htmlFor='my-drawer-4'
            aria-label='close sidebar'
            className='drawer-overlay'
          ></label>
          <ul className='menu bg-white min-h-full w-56 md:w-80 p-4'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About Us</Link>
            </li>
            <li>
              <Link to='/updates'>Latest Updates</Link>
            </li>
            <li>
              <Link to='/gallery'>Gallery</Link>
            </li>
            <li>
              <Link to='/updates#blogs'>Blogs</Link>
            </li>
            <li>
              <a
                href='https://pilibhittigerreserve.in/images/Advertisement.pdf'
                target='_blank'
              >
                Job Openings
              </a>
            </li>
            <li>
              <Link to='/administration'>Administration</Link>
            </li>
          </ul>
        </div>
      </div>
      {pathname.includes('dashboard') ? (
        <ul className='hidden lg:flex text-white text-nowrap font-medium font-montserrat justify-center items-center gap-6'>
          {/* <li>
            <Link to='/'>Home</Link>
          </li> */}
        </ul>
      ) : (
        <ul className='hidden lg:flex text-white text-nowrap font-medium font-montserrat justify-center items-center gap-6'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About Us</Link>
          </li>
          <li>
            <div className='dropdown dropdown-hover'>
              <div
                tabIndex={0}
                className='flex items-center gap-1 cursor-pointer'
              >
                Places to visit
                <img
                  src={arrowDown}
                  alt='arrowDown'
                />
              </div>
              <ul
                tabIndex={0}
                className='dropdown-content menu bg-[#002C33] text-white rounded-box z-[1] w-40 p-2 shadow'
              >
                {safaris.map((safari, index) => (
                  <li
                    key={index}
                    className='hover:opacity-80'
                  >
                    <Link to={`/safari/${safari._id}`}>{safari.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <li>
            <div className='dropdown dropdown-hover cursor-pointer'>
              <div
                tabIndex={0}
                className='flex items-center gap-1 '
              >
                Extras
                <img
                  src={arrowDown}
                  alt='arrowDown'
                />
              </div>
              <ul
                tabIndex={0}
                className='dropdown-content menu bg-[#002C33] text-white rounded-box z-[1] w-40 p-2 shadow'
              >
                <li className='hover:opacity-80'>
                  <Link to='/updates'>Latest Updates</Link>
                </li>
                <li className='hover:opacity-80 mb-1'>
                  <Link to='/updates#tourist-info'>Tourist Information</Link>
                </li>
                <li className='hover:opacity-80'>
                  <Link to='/gallery'>Gallery</Link>
                </li>
                <li className='hover:opacity-80'>
                  <Link to='/updates#blogs'>Blogs</Link>
                </li>
                <li className='hover:opacity-80'>
                  <a
                    href='https://pilibhittigerreserve.in/images/Advertisement.pdf'
                    target='_blank'
                  >
                    Job Openings
                  </a>
                </li>
                <li className='hover:opacity-80'>
                  <Link to='/administration'>Administration</Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Button
              onClickHandler={() => navigate('/#book')}
              size='sm'
              type='gold'
              className='font-medium'
            >
              Book Safari
            </Button>
          </li>
        </ul>
      )}
    </nav>
  )
}

export default Navbar
