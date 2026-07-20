import React, { useContext } from "react";
import { MyProduct } from "../context/ContextProvider";

const ProductCard = ({ productData, isInCart }) => {
  const { setCartData,incrementQuntity,decrementQuntity } = useContext(MyProduct);

  return (
    <div className="p-2 bg-slate-400 flex flex-col gap-2.5 rounded">
      <div className="h-32 rounded-xl bg-slate-500 p-3 ">
        <img
          className="w-full h-full rounded"
          src={productData.image}
          alt="imag loading...."
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <p className="font-semibold text-sm">{productData.title}</p>
        <p className="font-extralight text-[10px] text-slate-400 tracking-tight">
          {productData.description.slice(0, 100)}...
        </p>
        <p className="w-fit bg-orange-700 px-2 rounded-3xl text-[10px]">
          {productData.category}
        </p>
        <p className="text-yellow-500 font-bold">${productData.price}</p>
      </div>
      {isInCart ? (
        <button className="bg-orange-400 flex items-center rounded-2xl justify-center gap-5">
          <span className="text-2xl" onClick={()=> decrementQuntity(productData.id)}>-</span>
          <span>{isInCart.quntity}</span>
          <span className="text-2xl" onClick={()=> incrementQuntity( productData.id)}>+</span>
        </button>
      ) : (
        <button
          className="bg-blue-500 p-1.5 rounded-2xl"
          onClick={() => setCartData((prev) => [...prev, {...productData , quntity:1}])}
        >
          Add to cart
        </button>
      )}
    </div>
  );
};

export default ProductCard;
