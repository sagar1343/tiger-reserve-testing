import React from 'react'
import TabWrapper from '@/components/TabWrapper'
import UpdateCard from '@/components/UpdateCard'
import BlogContainer from '@/components/BlogContainer'

export default function PublishContent() {
  const data = [
    {
      date: '2024-03-30',
      title:
        '6 eco-development committees to assist wildlife conservation programs in Pilibhit tiger reserve',
      description:
        'PILIBHIT: World Wide Fund for Nature (WWF-India) constituted six eco-development committees (EDC) in villages falling under the eco-sensitive zone of Pilibhit tiger reserve (PTR) on Sunday, on the occasion of the World Forestry Day. The move is aimed at involving the locals in wildlife conservation programme and protecting the forest from the timber mafia. The committees have been registered under the Societies Registration Act and will work in coordination with PTR, which is facing an acute staff crunch...',
    },
    {
      date: '2020-11-24',
      title:
        'The Pilibhit Tiger Reserve and Uttar Pradesh Forest department have bagged the first-ever international award, TX2, for doubling the number of tigers',
      description:
        'PILIBHIT: World Wide Fund for Nature (WWF-India) constituted six eco-development committees (EDC) in villages falling under the eco-sensitive zone of Pilibhit tiger reserve (PTR) on Sunday, on the occasion of the World Forestry Day. The move is aimed at involving the locals in wildlife conservation programme and protecting the forest from the timber mafia. The committees have been registered under the Societies Registration Act and will work in coordination with PTR, which is facing an acute staff crunch...',
    },
    {
      date: '2020-11-24',
      title:
        'The Pilibhit Tiger Reserve and Uttar Pradesh Forest department have bagged the first-ever international award, TX2, for doubling the number of tigers',
      description:
        'PILIBHIT: World Wide Fund for Nature (WWF-India) constituted six eco-development committees (EDC) in villages falling under the eco-sensitive zone of Pilibhit tiger reserve (PTR) on Sunday, on the occasion of the World Forestry Day. The move is aimed at involving the locals in wildlife conservation programme and protecting the forest from the timber mafia. The committees have been registered under the Societies Registration Act and will work in coordination with PTR, which is facing an acute staff crunch...',
    },
    {
      date: '2020-11-24',
      title:
        'The Pilibhit Tiger Reserve and Uttar Pradesh Forest department have bagged the first-ever international award, TX2, for doubling the number of tigers',
      description:
        'PILIBHIT: World Wide Fund for Nature (WWF-India) constituted six eco-development committees (EDC) in villages falling under the eco-sensitive zone of Pilibhit tiger reserve (PTR) on Sunday, on the occasion of the World Forestry Day. The move is aimed at involving the locals in wildlife conservation programme and protecting the forest from the timber mafia. The committees have been registered under the Societies Registration Act and will work in coordination with PTR, which is facing an acute staff crunch...',
    },
  ]
  
  return (
    <section className='container-padding flex flex-col'>
      <div className='grow'>
        <TabWrapper keyTitles={['Blogs', 'Latest Updates']}>
          {/* <div className='flex flex-wrap gap-6'></div> */}
          <BlogContainer />
          <div className='py-8 flex flex-col gap-8'>
            {data.map((item, index) => (
              <UpdateCard
                key={index}
                data={item}
              />
            ))}
          </div>
        </TabWrapper>
      </div>
    </section>
  )
}
