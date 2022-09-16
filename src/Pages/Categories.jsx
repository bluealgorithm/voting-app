import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../Components/Card'
const Categories = () => {
  return (
      <div className='w-[350px] mx-auto'>
      <h1 className='text-center font-bold my-8 text-3xl'>Categories</h1>

      <div className="flex gap-3">
        <Link to='/women-in-tech'>
          <Card title={'Women in Tech'} type='cat' />
        </Link>
        <Link to='/men-in-tech'>
          <Card title={'Men in Tech'} type='cat' />
      </Link>
      </div>
    </div>
  )
}

export default Categories