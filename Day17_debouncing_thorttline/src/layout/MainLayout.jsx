import React from 'react'
import { NavLink, Outlet } from 'react-router'

const MainLayout = () => {
  return (
    <div className='p-4 '>
        <nav className='p-4 rounded-2xl bg-slate-500 text-white flex items-center gap-4 mb-3'>
            <NavLink to={'/'}>App</NavLink>
            <NavLink to={'/about'}>About</NavLink>
            <NavLink to={'/contact'}>Contact</NavLink>
        </nav>
        <Outlet/>
    </div>
  )
}

export default MainLayout