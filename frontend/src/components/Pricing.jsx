import React from 'react'

const Pricing = () => {
  const adultCount = JSON.parse(sessionStorage.getItem('adultCount'))
  const childCount = JSON.parse(sessionStorage.getItem('childCount'))
  const totalPrice = JSON.parse(sessionStorage.getItem('totalPrice'))
  const adultPerSeat = JSON.parse(sessionStorage.getItem('adultPerSeat'))
  const childPerSeat = JSON.parse(sessionStorage.getItem('childPerSeat'))

  return (
    <div className='book box rounded-xl border border-black h-max mt-5 '>
      <h2 className='text-2xl m-4'>Pricing Details</h2>
      <hr />
      <div className='flex flex-col m-3 text-sm '>
        <div className='my-2'>
          <p className='font-semibold'>
            Jungle Safari in Pilibhit Tiger Reserve
          </p>
          <p>
            {adultCount} adult {childCount ? `| ${childCount} child` : ''}
          </p>
        </div>
        {/* <div className='text-right my-2'>
          <p>Rs.2,895</p>
        </div> */}
        {/* <div className='col-span-4 my-2'>
          <p>Total</p>
          <p className='font-semibold'>with tax & fees</p>
        </div>
        <div className='text-right col-span-2 my-2 mrp'>
          <p>INR 3181.51</p>
        </div> */}
        <div className='flex justify-between'>
          <div className='my-2'>
            <p className='font-semibold'>Total due</p>
          </div>

          <div className='text-right my-2'>
            <p className='text-xl font-semibold text-red-500'>
              INR {childPerSeat * childCount + adultPerSeat * adultCount}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing
