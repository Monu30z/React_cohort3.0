import React from 'react'

const Usercard = ({data}) => {
  return (
    <div className='w-65  flex flex-col bg-gray-300 gap-2 text-black p-4 rounded'>
        <div className='w-full h-50'>
            <img src={data.image} alt="" />
        </div>
        <div className='flex flex-col gap-1'>
            <h3 className='font-semibold'>{data.name}</h3>
            <p className='font-semibold'>{data.email}</p>
            <p className='font-semibold'>{data.number}</p>
        </div>
       <div className='flex justify-between w-full'>
         <button className='py-2 px-4 border rounded bg-yellow-500 text-white font-semibold'>Update</button>
        <button className='py-2 px-4 border rounded bg-red-500 text-white font-semibold'>Delete</button>
       </div>
    </div>
  )
}

export default Usercard