import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Children } from 'react'
import Button from './Button'

export default function TabWrapper({ children, keyTitles }) {
  const tabContent = Children.map(children, (child) => child)

  return (
    <Tabs
      defaultValue={keyTitles[0]}
      className='flex flex-col h-full'
    >
      <TabsList className='flex border-b-2 py-6 m-0 shadow-none justify-start gap-6 !bg-none border-gray-200'>
        {keyTitles.map((title) => (
          <TabsTrigger
            className='px-8 py-2 text-xl items-stret m-0 font-bold text-gray-600 hover:text-green-1 focus:outline-none shadow-none data-[state=active]:text-green-1 data-[state=active]:bg-[#F0F0F066] data-[state=active]:border-b-[3px] data-[state=active]:border-green-1'
            value={title}
          >
            {title}
          </TabsTrigger>
        ))}
        <div className='grow flex justify-end'>
          <Button
            // onClickHandler={onClickHandler}
            className='bg-green-1 text-white rounded-lg'
          >
            +New
          </Button>
        </div>
      </TabsList>

      {keyTitles.map((title, index) => (
        <TabsContent
          className='grow'
          value={title}
        >
          {tabContent[index]}
        </TabsContent>
      ))}
    </Tabs>
  )
}
