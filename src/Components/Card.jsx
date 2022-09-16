import React from 'react'

const Card = ({ title, type, name, project }) => {
    return (
        <div className={`${type ? 'w-[300px]' : 'w-[500px] bg-red-500 text-center'}  bg-green-400 p-5 rounded text-white`}>
            <h3 className='text-center text-gray-100 text-2xl font-bold'>{type ? title : name}</h3>
        <p className='mt-2'>{ project}</p>
</div>
  )
}

export default Card