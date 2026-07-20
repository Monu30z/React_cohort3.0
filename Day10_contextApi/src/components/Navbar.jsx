import React, { useContext } from 'react'
import { MyShop } from '../context/MyWebsite'

const Navbar = () => {

  const {setToggle}=useContext(MyShop)
  return (
    <div className='bg-gray-800 p-5 rounded flex justify-between text-white items-center'>
        <h1>Logo</h1>
        <div className='flex gap-10'>
            <p className='text-[20px] font-bold cursor-pointer' onClick={()=> setToggle(false)} >Home</p>
            <p className='text-[20px] font-bold cursor-pointer' onClick={()=> setToggle(true)}>Cart</p>
        </div>
        <button className='px-4 py-2 rounded bg-blue-600 cursor-pointer'>Login</button>
    </div>
  )
}

export default Navbar