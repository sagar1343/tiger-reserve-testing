import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Container from '@/components/Container'
import adminHierarchy from '../assets/adminHierarchy.webp'
import scrollToTop from '@/utility/scrollToTop'
import H2 from '@/components/H2'

export default function BlogDetails({ data }) {
  useEffect(() => scrollToTop(), [])
  return (
    <div className='bg-[#00171B]'>
      <Navbar />
      <Container
        theme='dark2'
        paddingBottomOnly={false}
      >
        <div className='space-y-10'>
          <H2 className='text-[#F5B206]'>
            Pilibhit Tiger Reserve bags a global award TX2 Award for doubling
            Tiger
          </H2>
          <p>
            The greatest achievement for Pilibhit Tiger Reserve and Uttar
            Pradesh Government...!!!{' '}
          </p>
          <p>
            The greatest achievement for Pilibhit Tiger Reserve and Uttar
            Pradesh Government...!!! Pilibhit Tiger Reserve (PTR) and Uttar
            Pradesh Forest Department have bagged the global award TX2, for
            doubling the number of tigers in a short span of just four years
            against a target of 10 years. Among other 13 tiger range countries,
            PTR was the first to receive this prestigious award.
          </p>
          <p>
            PTR had 25 tigers in 2014 after which due to continuous monitoring
            and proactive steps taken by wildlife officers, the number of tigers
            reached up to 65 in 2018. The award was presented virtually to the
            principal Chief Conservator of Forest (Wildlife) of the state, Sunil
            Pandey, by UNDP's (United Nations Development Program) head of
            ecosystems and biodiversity, Mindori Paxton.{' '}
          </p>
          <p>
            Mr. Pandey further stated that the target for doubling the tiger
            population was set in 2010 by the partners of TX2 Award - UNDP,
            International Union for Conservation of Nature, World Wide Fund for
            Nature, Global Tiger Forum, Conservation Assured/Tiger Standards,
            and the Lion's State. Mr. Naveen Khandelwal, the deputy director of
            Pilibhit Tiger Reserve, had applied for this award in September this
            year after the National Tiger Conservation Authority (NTCA) released
            this year's state-wise figures of the tiger estimation based on the
            census in 2018 in all tiger reserves across the country.
          </p>
          <p>
            It is one of the biggest achievements for PTR and UP State as no
            other tiger reserves among all the 13 tiger range countries could
            succeed in doubling the tiger population in a span of 10 years. The
            rapid growth of 40 tigers in a short span of 4 years was set forth
            as the base for the TX2 award.
          </p>{' '}
          <p>
            Pilibhit Tiger Reserve attains constant use of Monitoring System for
            Tiger-Intensive Protection and strict action is taken against
            wildlife criminals, poachers, etc time to time. The big credit of
            this award goes to the dedicated efforts of forest staff, local
            stakeholders, and wildlife enthusiasts towards tiger conservation,
            the official said.
          </p>
        </div>
      </Container>
      <Footer />
    </div>
  )
}
