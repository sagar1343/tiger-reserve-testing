import React from 'react'
import Navbar from './Navbar'
import BannerHead2 from './BannerHead2'

function AboutHero() {
  return (
    <div className='bg-about-banner bg-opacity-85 w-full sm:aspect-video bg-center bg-cover bg-no-repeat'>
      <Navbar />
      <div className='py-12 md:py-16 px-6 md:px-16 lg:px-24 flex flex-col'>
        <div className='text-white'>
          <BannerHead2 className='text-white font-bold'>About Us</BannerHead2>
          <p>
            Pilibhit TR is located in the heart of Himalayan terai region in
            Uttar Pradesh. It is an integral part of tarai arc landscape and is
            well connected to other reserve forests in India and Nepal. The
            total area of the reserve is 730 sq.km and given the variety of
            geographical attributes and forest types, it hosts a rich
            biodiversity of both flora and fauna. It is home to more than 42
            species of mammals, 350 of birds, around 100 of butterflies and 30
            of reptiles. Moreover, till date more than 550 species of flowering
            plants have been reported from the Pilibhit tiger reserve, including
            122 species of trees. Pilibhit is also a promising site for tiger
            conservation and the population estimation of 2018 puts the figure
            to 65, this has further increased to 71 as of 2022. Beside tigers,
            Pilibhit is also renowned in the country for one of the healthiest
            populations of hog deer, swamp deer, honey badger, Indian pangolin
            among others. It is also the only place in Tarai landscape where
            chausinga or four-hourned antelope has been rediscovered.<br />{' '}
            <br /> The study done by the Wildlife Institute of India (WII) shows
            that Dudhwa-Pilibhit population has high conservation value as it
            represents the only tiger population with the ecological and
            behavioral adaptations of the tiger unique to the Tarai region.
            <br /> <br />
            It is home to a habitat for over 127 animals, 326 bird species and
            2,100 flowering plants. It is a mosaic of high sal forests,
            plantation and grasslands with several water bodies. The jungles are
            home to a myriad of wild animals including the endangered tiger,
            swamp deer, Bengal florican, hog deer, leopard, etc. The large
            carnivores are supported by a very large prey base consisting of
            cheetal, sambar, wild boar, hog deer, swamp deer, blue bull, etc.
            The bird life is very rich and diverse and hundreds of species of
            birds can be seen round. The Chuka Interpretation Zones with nature
            interpretation center, cottages & edge of huge water body is unique
            & very popular with visitors. <br /> <br /> Pilibhit Tiger Reserve
            is 45th tiger reserve project in India. It is located in Pilibhit
            District, Lakhimpur Kheri District and Bahraich District in the
            state of Uttar Pradesh. It is covered under Project Tiger since
            2008. The place is famous for its diversified ecosystems. The Terai
            area includes vast and open spaces of land and many water bodies.
            While the northern area of reserve touches the Indo-Nepal border,
            the southern edge is connected to Khakhra and Sharda river.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutHero
