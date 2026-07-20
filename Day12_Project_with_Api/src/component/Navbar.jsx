import React, { useContext } from 'react'
import { MyProduct } from '../context/ContextProvider'

const Navbar = () => {

   const {setIsCartOpen} =useContext(MyProduct)
  return (
    <div className='bg-slate-600 flex items-center justify-between py-2  px-4 rounded'>
        <div>
            <h1>Logo</h1>
        </div>
        <div className='flex gap-6'>
            <p className='cursor-pointer' onClick={()=> setIsCartOpen(true)}>Home</p>
            <p className='cursor-pointer' onClick={()=> setIsCartOpen(false)}>Cart</p>
           
        </div>
        <button className='px-4 py-1 rounded bg-blue-600'>Login</button>
    </div>
  )
}

export default Navbar