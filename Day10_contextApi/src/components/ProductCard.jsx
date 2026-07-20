import React, { useContext } from "react";
import { MyShop } from "../context/MyWebsite";

const ProductCard = ({ product}) => {

    
  const {setCartItems}=  useContext(MyShop)

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <div className="h-60 p-6 flex items-center justify-center bg-gray-500">
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-5">
        <span className="inline-block px-3 py-1 text-xs bg-blue-100 text-blue-600 rounded-full capitalize">
          {product.category}
        </span>

        <h2 className="mt-3 font-semibold text-lg line-clamp-2">
          {product.title}
        </h2>

        <p className="text-gray-500 text-sm mt-2 line-clamp-3">
          {product.description}
        </p>

        <div className="flex items-center justify-between mt-4">
          <span className="text-2xl font-bold text-green-600">
            ${product.price}
          </span>

          <div className="flex items-center gap-1">
            ⭐
            <span className="font-medium">{product.rating.rate}</span>
            <span className="text-gray-400">
              ({product.rating.count})
            </span>
          </div>
        </div>

        <button className="w-full mt-5 bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition" onClick={()=> setCartItems( prev=> [...prev,product])}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;