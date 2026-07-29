import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'

const MainLayout = () => {
  return (
    <div className='h-screen p-2 grid grid-cols-[1fr_6fr]'>
      <Navbar/>
      <div className='h-full p-2 overflow-auto'>
      <Outlet/>
      </div>
    </div>
  )
}

export default MainLayout