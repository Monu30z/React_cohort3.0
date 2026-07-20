import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div className='flex justify-between rounded items-center p-2 bg-slate-500 mb-5'>
        <div> <NavLink to='/'>Logo</NavLink></div>
        <div className='flex gap-6'>
            <NavLink to='/'  className={({isActive})=> 
            isActive ? "text-blue-500 text-white font-bold" :'font-bold'} >Home</NavLink>
            <NavLink to='/about' className={({isActive})=> 
            isActive ? "text-blue-500 text-white font-bold" :'font-bold'} >About</NavLink>
            <NavLink to='/contact' className={({isActive})=> 
            isActive ? "text-blue-500 text-white font-bold" :'font-bold'} >Contact</NavLink>
        </div>
        <button className='px-2 bg-blue-500 rounded'>Login</button>
    </div>
  )
}

export default Navbar