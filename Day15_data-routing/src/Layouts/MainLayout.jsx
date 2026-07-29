import React from 'react'
import Home from '../pages/Home'
import Navbar from '../component/Navbar'
import { Outlet } from 'react-router'

const MainLayout = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default MainLayout