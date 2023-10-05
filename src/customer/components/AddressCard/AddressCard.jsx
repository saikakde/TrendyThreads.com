import React from 'react'

const AddressCard = () => {
  return (
    <div>
      <div className='space-y-3 flex flex-col items-start'>
        <p className='font-semibold'>Ram Kapoor</p>
        <p>Mumbai, Andheri East, 400001</p>
        <div className='space-y-1'>
          <p className='font-semibold'>Phone Number</p>
          <p className='flex flex-col items-start'>9785786423</p>
        </div>
      </div>
    </div>
  )
}

export default AddressCard