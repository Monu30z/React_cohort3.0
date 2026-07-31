import React from 'react'
import { useProductApi } from '../hooks/productHook'

const Filters = ({filterProducts}) => {

  return (
    <div className='bg-black border border-white/30 flex w-full gap-3 p-3 rounded mb-5 '>
        <div className='w-full flex gap-4'>
            <input type="text" className='w-full border border-white/30 outline-none rounded p-3' onChange={(e)=> filterProducts(e.target.value)}/>
            <button className='p-3 rounded  bg-white text-black'>Search</button>
        </div>
        <div>
            <select className='p-4 border outline-none text-black bg-white rounded'>
                <option value="beauty">Beauty</option>
                <option value="fragrances">Fragrances</option>
                <option value="furniture">Furniture</option>
                <option value="groceries">Groceries</option>
            </select>
        </div>
    </div>
  )
}

export default Filters