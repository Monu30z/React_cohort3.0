import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div className='flex gap-4 text-bold text-black text-4xl'>
        <NavLink to="/" >Home</NavLink>
        <NavLink to="/about" >About</NavLink>
        <NavLink to="/contact" >Contact</NavLink>
    </div>
  )
}

export default Navbar