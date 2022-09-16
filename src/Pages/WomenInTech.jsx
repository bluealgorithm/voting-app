import React from 'react'
import Card from '../Components/Card'

const WomenInTech = () => {
  return (
      <div className='mx-auto w-5/6'>
      <h1 className='text-center font-bold text-2xl my-5'>Select Candidate</h1>

      <div className="flex gap-3">
          <Card name='Issabela' project='self driving drone' />
          <Card name='Ruth' project='dynamic Waste basket' />
          <Card name='Ogie' project='self driving drone' />
          </div>
    </div>
  )
}

export default WomenInTech