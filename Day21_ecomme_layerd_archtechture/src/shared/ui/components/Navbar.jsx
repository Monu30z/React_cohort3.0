import { BoxIcon, ShoppingCart } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-4 px-10 bg-[#363636] text-white '>
        <h1>
            Logo
        </h1>
        <div className='flex items-center gap-10'>
            <NavLink className={({isActive})=> isActive ? "text-[#95ff01] font-semibold" : "text-white font-semibold"} to={"/main"} end>Home</NavLink>
            <NavLink className={({isActive})=> isActive ? "text-[#95ff01] font-semibold" : "text-white font-semibold"} to={"/main/product"}>Shop</NavLink>
            <NavLink className={({isActive})=> isActive ? "text-[#95ff01] font-semibold" : "text-white font-semibold"} to={"/main/about"}>About</NavLink>
        </div>
        <div className=' flex items-center gap-6'>
            <NavLink className={({isActive})=> isActive ? "text-[#95ff01] font-semibold" : "text-white font-semibold"} to={"/main/cart"}> <ShoppingCart/></NavLink>
            <NavLink className={({isActive})=> isActive ? "text-[#95ff01] font-semibold" : "text-white font-semibold"} to={"/main/order"}><BoxIcon/> </NavLink>
            <button className='px-2 py-3 bg-red-700 rounded-xl'>Logout</button>

        </div>
    </div>
  )
}

export default Navbar