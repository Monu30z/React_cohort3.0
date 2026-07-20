import React, { useContext } from "react";
import { MyShop } from "../context/MyWebsite";

const Cart = () => {

  const{ cartItems} = useContext(MyShop)

 let price =  cartItems.reduce( (ele,cart)=>{
    return ele += cart.price 
 },0)

 console.log(price);


 

  return (
    <div className="p-5">
 <div className="bg-amber-950 p-7 rounded-2xl text-xl font-semibold">
          <h1>Total product in cart <span className="text-red-600 text-2xl">{cartItems.length}</span></h1>
        </div>

{cartItems.length === 0 ? (<div className="bg-gray-300 p-8 text-2xl rounded mt-8">
            <h1>Cart is Empty</h1>
        </div> ): 
        
       ( <div>
       

        <div  className="flex gap-3">

           <div className="flex flex-col w-2/3">
             {
                cartItems.map( (ele) =>{
                return <div className="flex  p-6  bg-gray-300 mt-3 rounded-2xl ">
          <div className="w-1/3 flex justify-center bg-slate-500 p-4 rounded-2xl ">
            <img  src={ele.image} alt="" />
          </div>
          <div className="px-4 flex flex-col gap-2.5">
           
            <p className="bg-slate-500 text-blue-900  w-fit px-1 rounded ">{ele.category}</p>
          
            <p className="text-2xl font-bold">{ele.title}</p>
            <p className="text-m text-slate-400">{ele.description}</p>
           <div className="flex justify-between">
            <div></div>
             <p className="text-yellow-400 font-bold text-2xl">${ele.price}</p>
           </div>
          </div>
        </div>
                })
            }
           </div>

        <div className="w-1/3 h-36 bg-gray-300 p-5 mt-2.5 rounded-2xl">
            <p className="text-2xl uppercase">total price {price}</p>
            <button className="p-2 border rounded bg-green-500">Check out</button>
        </div>
        </div>
      </div>) }
      

    
    </div>
  );
};

export default Cart;
