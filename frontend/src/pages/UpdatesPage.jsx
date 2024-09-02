import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import Footer from '../components/Footer'
import Container from '../components/Container'
import Navbar from '../components/Navbar'
import H2 from '../components/H2'
import UpdateCard from '../components/UpdateCard'
import scrollToTop from '@/utility/scrollToTop'
import BlogContainer from '@/components/BlogContainer'

function UpdatesPage() {
  useEffect(() => scrollToTop(), [])
  const data = [
    {
      date: '2021-03-30',
      title:
        '6 eco-development committees to assist wildlife conservation programs in Pilibhit tiger reserve',
      description:
        'PILIBHIT: World Wide Fund for Nature (WWF-India) constituted six eco-development committees (EDC) in villages falling under the eco-sensitive zone of Pilibhit tiger reserve (PTR) on Sunday, on the occasion of the World Forestry Day.The move is aimed at involving the locals in wildlife conservation programme and protecting the forest from the timber mafia. The committees have been registered under the Societies Registration Act and will work in coordination with PTR, which is facing an acute staff crunch. Naveen Khandelwal, deputy director of PTR, said each committee would comprise six elected villagers and a forest inspector of PTR as secretary. â€œThe need for the EDCs was felt after the forestry project of JICA (Japan International Cooperation Agency) expired in 2017. We have a plan to constitute 90 EDCs in villages declared by PTR as â€˜sensitiveâ€™ and â€˜highly sensitiveâ€™ from the viewpoint of man-tiger conflict,â€said Khandelwal. Naresh Kumar, WWFâ€™s senior project officer, said that the forest department and the WWF would provide the necessary revolving funds to the EDCs to carry out employment and sustenance-based programmes to ensure the linkage of communities living in eco-sensitive zone of PTR to income generation sources. The EDCs would be linked directly with over 10 government departments like health, education, development, public distribution, woman and child care, horticulture, sericulture and Khadi and village industries board to extend direct benefits of the government-sponsored welfare schemes to village people. After setting a concrete platform of development and income generation, the EDCs would expand their activities up to the doorstep at their respective villages as a link between the government departments and the village people for their welfare, Kumar said.',
    },
  ]
  return (
    <div className='bg-[#00171B]'>
      <Navbar />
      <Container
        theme='dark2'
        paddingBottomOnly={false}
      >
        <H2 className='text-white'>Latest Updates</H2>
        <div className='space-y-8'>
          {data.map((item, index) => (
            <UpdateCard
              key={index}
              data={item}
            />
          ))}
        </div>
        <div className='mt-10 space-y-2'>
          <a
            href='https://pilibhittigerreserve.in/images/Advertisement.pdf'
            target='_blank'
            className=' flex items-center text-white gap-2'
          >
            <FaArrowRight className='text-[#A8A8A8]' />
            Conservation Biologist cum Sociologist opening
          </a>
          <a
            href='https://pilibhittigerreserve.in/images/job_opening.pdf'
            target='_blank'
            className=' flex items-center text-white gap-2'
          >
            <FaArrowRight className='text-[#A8A8A8]' />
            List of Applicants for Conservation Biologist cum Sociologist
          </a>
        </div>
      </Container>

      <Container
        theme='dark2'
        paddingBottomOnly={false}
      >
        <H2 className='text-[#F5B206]'>
          <span id='tourist-info'>Tourist Information</span>
        </H2>
        <div className='space-y-10'>
          <div className='space-y-4'>
            <h5 className='text-2xl font-semibold'>Opening Time</h5>
            <p>
              The tiger reserve is open for the tourists from 15th of November
              to 15th of June every year. The gypsy safaris are conducted for
              3.5 hours in the morning and evening shifts.
            </p>
          </div>
          <div className='space-y-4'>
            <h5 className='text-2xl font-semibold'>
              Location of booking counters
            </h5>
            <p>
              There are two places from where tourists can start journey for the
              reserve. The main entry gate is located at Mustafabad, 40 km from
              the headquarter town of Pilibhit and 23 km from Puranpur.
              Mustafabad falls on the road running to Khatima from Puranpur.
              Limited numbers of gypsies are also available for visitors at
              Pilibhit city near Nehru park garden from where they enter the
              forest at Mahof and reach Mustafabad on the forest road. Only the
              registered safari vehicles of the reserve are permitted inside the
              forest.
            </p>
          </div>
          <div className='space-y-4'>
            <h5 className='text-2xl font-semibold'>Connectivity</h5>
            <p>
              Pilibhit and Puranpur towns are well connected with all means of
              communications with New Delhi and Lucknow. Road connectivity is
              excellent both from Lucknow via Kheri and Delhi via Bareilly.
              Trains are available on a daily basis directly to Delhi and
              Lucknow from Pilibhit, and to Lucknow from Puranpur. Bareilly
              airport is located 85km from Mustafabad and 50 from Pilibhit town
              and has flights from Delhi and some other major cities of the
              country. The last mile connectivity is poor and public transport
              is not available from Puranpur to Mustafabad and reliance on
              private booked vehicles is the only option available.
            </p>
          </div>
          <div className='space-y-4'>
            <h5 className='text-2xl font-semibold'>Safari routes</h5>
            <p>
              There are mainly two safari routes in the tiger reserve, the Mahof
              side (Zone 1) and the Barahi side (Zone 2).
            </p>
          </div>
          <div className='space-y-4'>
            <h5 className='text-2xl font-semibold'>Accommodation</h5>
            <p>
              Tourists can avail stay at Chuka eco-tourism spot where tharu
              huts, water hut, tree hut etc are available. Accommodation can be
              booked online from the website of UP tourism. Home stays and
              resorts near the Mustafabad gate are numerous and can be booked on
              call with their owners. <br />
              Food- food canteen is available at Mustafabad and Chuka spot, and
              lunch and dinner are prepared at latter place on order only.
            </p>
          </div>
        </div>
      </Container>

      <Container paddingBottomOnly={false}>
        <h2 className='mb-8 leading-tight text-[1.6rem] lg:text-[2.9rem] font-bold bg-gradient-to-r from-[#D88202] to-[#D88202] inline-flex bg-clip-text text-transparent'>
          <span id='blogs'>Blogs</span>
        </h2>
        <BlogContainer />
      </Container>
      <Footer />
    </div>
  )
}

export default UpdatesPage
