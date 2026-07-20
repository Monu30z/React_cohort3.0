import React, { useContext } from 'react'
import { MyProduct } from '../context/ContextProvider'

const Cart = ({cartData}) => {

    // const {cartData} = useContext(MyProduct)
    
  return (
 <div className="p-2  bg-slate-700 w-2/3 flex gap-2.5 rounded">

              <div className="h-32 w-xs rounded-xl bg-slate-500 p-3 ">
                <img
                  className="w-full h-full rounded"
                  src={cartData.image}
                  alt="imag loading...."
                />
              </div>
              <div className="flex flex-col">
                <p className="w-fit bg-orange-700 px-2 mt-2.5 rounded-3xl text-[10px]">
                  {cartData.category}
                </p>
                <p className="font-semibold text-sm  mt-1.5">{cartData.title}</p>
                <p className="font-extralight text-[10px] text-slate-400 tracking-tight">
                  {cartData.description} ...
                </p>
                <p className="text-yellow-500 font-bold text-xl mt-1">
                  ${cartData.price}
                </p>
              </div>
            </div>
  )
}

export default Cart