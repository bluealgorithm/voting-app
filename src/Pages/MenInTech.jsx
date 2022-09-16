import React from 'react'
import Card from '../Components/Card'

const MenInTech = () => {
  return (
      <div className='mx-auto w-5/6'>
      <h1 className='text-center font-bold text-2xl my-5'>Select Candidate</h1>

      <div className="flex gap-3">
          <Card name='Femmyte' project='self driving drone' />
          <Card name='Shegzy' project='dynamic Waste basket' />
          <Card name='Tunmise' project='self driving drone' />
          </div>
    </div>
  )
}

export default MenInTech