import { useEffect } from 'react'
import AboutHero from '../components/AboutHero'
import React from 'react'
import H2 from '../components/H2'
import Container from '../components/Container'
import Footer from '../components/Footer'
import BlogContainer from '../components/BlogContainer'
import flora1 from '../assets/flora1.webp'
import flora2 from '../assets/flora2.webp'
import flora3 from '../assets/flora3.webp'
import flora4 from '../assets/flora4.webp'
import fauna1 from '../assets/fauna1.webp'
import fauna2 from '../assets/fauna2.webp'
import fauna3 from '../assets/fauna3.webp'
import fauna4 from '../assets/fauna4.webp'
import fauna5 from '../assets/fauna5.webp'
import fauna6 from '../assets/fauna6.webp'
import fauna7 from '../assets/fauna7.webp'
import fauna8 from '../assets/fauna8.webp'
import Grid from '@/components/Grid'
import LazyLoaded from '@/components/LazyLoaded'
import scrollToTop from '@/utility/scrollToTop'

function AboutPage() {
  useEffect(() => scrollToTop(), [])
  const floaraArr = [flora1, flora2, flora3, flora4]
  const faunaArr = [
    fauna1,
    fauna2,
    fauna3,
    fauna4,
    fauna5,
    fauna6,
    fauna7,
    fauna8,
  ]
  return (
    <>
      <AboutHero />
      <Container paddingBottomOnly={false}>
        <h2 className='mb-4 leading-tight text-[1.6rem] lg:text-[2.9rem] font-bold bg-gradient-to-r from-[#002C33] to-[#018399] inline-flex bg-clip-text text-transparent'>
          Physical Geography
        </h2>
        <p>
          Pilibhit TR is located in the terai region of northern India which is
          the northern most part of the Gangetic plains. The ground slopes very
          gently from 208 meter above mean sea level in the extreme northern
          point of the landscape near Uttarakhand boundary, to 158 meter in the
          south-eastern tip near Sarda River. The reserve can be conveniently
          divided into two regions: the upland and the lowland. The uplands are
          mostly flat and remain dry throughout the year except during the
          monsoons. They are covered with Sal forests (Shorea robusta) with many
          grassy blanks, which often break the monotony of the woodlands. The
          Sarda main branch canal and its smaller branches traverse the
          interiors of the Sal jungles for over 70 km and are an important
          feature of this tiger reserve. The lowlands, on the other hands are
          rendered waterlogged during monsoon and large area remains under
          quagmire, oxbow lakes and impenetrable marshes throughout the year.
          Miscellaneous mixed forests, grasslands, wetlands and khair-sissoo
          forests characterize the habitat in lowlands, while a large portion of
          the reserve forests is occupied by great sand plains and the bed of
          Sarda River.
        </p>
      </Container>

      <LazyLoaded>
        <Container>
          <h2 className='mb-4 leading-tight text-[1.6rem] lg:text-[2.9rem] font-bold bg-gradient-to-r from-[#EB008D] to-[#850050] inline-flex bg-clip-text text-transparent'>
            Flora
          </h2>
          <p>
            This reserve is one of the finest examples of the highly diversified
            and productive Terai-Duar savanna and grasslands eco-system. The
            forest vegetation is of the North Indian moist deciduous type,
            having the finest sal Shorea robusta forests of the country. The
            Terai forests and grasslands constitute habitat for over 127
            animals, 556 bird species and 2,100 flowering plants. The sal
            woodland is very dense with good natural regeneration, amounting to
            almost 76% of the reserve area. The forest patches are interspersed
            with grass meadows with several like{' '}
            <span className='font-bold'>
              Saccharum, Sclerostachya, Imperata, Themeda, Bothriochloa,
              Vetiveria, Apluda, Dichanthium, Digitaria and Cyperus.
            </span>
            The grasslands are subjected to seasonal flooding water l Broadly,
            such waterlogged grasslands and water bodies constitute the wetland
            of the habitat.
          </p>
          <Grid arr={floaraArr} />
        </Container>
      </LazyLoaded>

      <LazyLoaded>
        <Container>
          <h2 className='mb-4 leading-tight text-[1.6rem] lg:text-[2.9rem] font-bold bg-gradient-to-r from-[#D88202] to-[#D88202] inline-flex bg-clip-text text-transparent'>
            Fauna
          </h2>
          <p>
            PTR is rich in its faunal component and hosts presence of more than
            42 species of mammals, 350 of birds, around 100 of butterflies, 12
            of frogs and 30 of reptiles. Tiger Panthera tigris tigris is the
            most important flagship species of the area. Leopard Panthera
            pardus, leopard cat Prionailrus bengalensis, fishing cat Prionailrus
            viverrinus, rusty spotted cat Prionailrus rubiginosa and jungle cat
            Felis chaus, are the other species of felidae family found here.
            Jackal Canis aureus, Indian fox Vulpes bengalensis, sloth bear
            Melursus ursinus, Asian palm civet Paradoxurus hermaphroditus, small
            Indian civet Viverricula indica, small Indian mongoose Herpestes
            javanicus, common mongoose Herpestes edwardsii, smooth coated otter
            Lutrogale perspicillata and ratel/honey badger Mellivora capensis
            are other major carnivores. This landscape hosts the presence of
            five deer species namely barking deer Muntiacus muntjac, sambhar
            Rusa unicolor, spotted deer Axis axis, hog deer Axis porcinus and
            swamp deer Rucervus duvaucelii, and two species of antelope the
            bluebull Boselaphus tragocamelus and chausingha Tetracerus
            quadricornis. Indian pangolin Manis crassicaudata, Indian porcupine
            Hystrix indica, rhesus macaque Macaca mulatta, terai grey langur
            Semnopithecus hector, northern palm squirrel Funabulus pennantii are
            the other interesting faces of wilderness in this landscape.
            Elephant Elephas maximus and One-horned Rhinoceros Rhinoceros
            unicornis visit the Barahi range seasonally from Shuklaphanta
            National Park of Nepal. The reserve hosts the presence of 350 bird
            species. Some rare birds seen here are grey-headed fish eagle
            Icthyophaga ichthyaetus, osprey Pandion haliaetus, Eurasian eagle
            owl Bubo bengalensis, spot-bellied eagle owl Bubo nipalensis, Bengal
            florican Houbaropsis bengalensis, lesser florican Sypheotides
            indicus, swamp francolin Francolinus gularis, red spurfowl
            Galloperdix spadicea, great slaty woodpecker Mulleripicus
            pulverulentus, jerdon’s bushchat Saxicola jerdoni, great pied
            hornbill Buceros bicornis, black necked stork Ephippiorhynchu
            sasiaticus, painted stork Mycteria leucocephala, lesser adjutant
            Leptoptilos javanicus etc. Lowlands of Pilibhit and North-Kheri is
            stronghold for red-headed vulture Sarcogyps calvus, cinereous
            vulture Aegypius monachus, Himalayan griffon Gyps himalayensis,
            Eurasian griffon Gyps fulvus and black-rumped vulture Gyps
            bengalensis. Among the reptiles, Burmese python Python bivittatus,
            Bengal monitor lizard Varanus bengalensis and mugger crocodile
            Crocodylus palustris are the most common names. Spectacled cobra
            Naja naja, banded krait Bungarus fasciatus, common krait Bungarus
            caeruleus, Indian rat snake Ptyas mucosa, sand boa Eryx conicus etc
            are the major snakes, while lizards are represented by oriental
            garden lizard Calotes versicolor, northern-house gecko Hemydactylus
            flavivirdis, brooke’s house gecko Hemidactylis brookii, common snake
            skink Lygosma punctata, many-keeled grass skink Eutropis carinata
            etc.
          </p>
          <Grid arr={faunaArr} />
        </Container>
      </LazyLoaded>

      <Container>
        <h2 className='mb-4 leading-tight text-[1.6rem] lg:text-[2.9rem] font-bold bg-gradient-to-r from-[#EB008D] to-[#850050] inline-flex bg-clip-text text-transparent'>
          Forest Types and Vegetation
        </h2>
        <p>
          The classification of Champion & Seth (1968) places the forests into
          four major sub-groups, the northern moist deciduous forest, northern
          tropical semi-evergreen forests, tropical seasonal swamp forests and
          northern tropical dry deciduous forest. The high bank forests located
          on old alluvium consists of Sal Shorea robusta forests while the
          lowland areas are of typical terai-savannah and grasslands always
          straddling on the banks of Sarda River or mutilated in small chunks
          around it. These riverine new alluvium country (or lowland) is
          dominated with large grasslands, marshy areas, khair-sissoo and mixed
          deciduous forests. The associates of Sal are Lagerstroemia parviflora,
          Terminalia alata, T. bellirica, Mallotus philippensis, Bridelia
          retusa, Diospyros melanoxylon, Miliusa velutina, Ficus rumphii, F.
          bengalensis, Semecarpus anacardium, Bauhinia malabarica etc. The
          lowland forests are mainly of two compositions, the khair-sissoo
          forest and the mixed woodlands. Mixed patches are composed of
          Dalbergia sissoo, Acacia catechu, Trewia nudiflora, Hymenodictyon
          excelsum, Bridelia retusa, Ficus palmata, F. hispida, F. glomerata,
          Celtis tetrandra, Aldina cordifolia etc.
        </p>
      </Container>

      <Container>
        <h2 className='mb-4 leading-tight text-[1.6rem] lg:text-[2.9rem] font-bold bg-gradient-to-r from-[#D88202] to-[#D88202] inline-flex bg-clip-text text-transparent'>
          <span id='blogs'>Blogs</span>
        </h2>
        <BlogContainer />
      </Container>
      <Footer />
    </>
  )
}

export default AboutPage
