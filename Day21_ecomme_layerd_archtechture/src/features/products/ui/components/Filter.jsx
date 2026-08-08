import React from 'react'
import { useProductCategories } from '../../hooks/useProductHook';

const Filter = ({setSearch,search,category,setCategory}) => {
    
   
   const {isPending,data,error} = useProductCategories();

if(isPending) return <h1>Products loading...</h1>


   
    
  return (
    <div className='bg-[#747474] flex w-full items-center justify-between gap-10 p-4 rounded-2xl border'>
        <div className='w-full'>
            <input type="text" value={search} placeholder='Product Search...' onChange={(e)=> setSearch(e.target.value)}
             className='w-full bg-[#aca9a9] outline-none  rounded p-3' />
        </div>
      <div className='w-1/4'>
          <select value={category} onChange={(e)=> setCategory(e.target.value)} className='w-full border px-6 py-3  rounded outline-none bg-[#aca9a9] '>
            <option value="">All Categories</option>
            {
                data.map((val)=>{
                    return <option key={val.slug} value={val.slug}>{val.slug}</option>
                })
            }
        </select>
      </div>
    </div>
  )
}

export default Filter