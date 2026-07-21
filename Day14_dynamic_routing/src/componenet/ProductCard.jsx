import React from "react";
import { useNavigate } from "react-router";

const ProductCard = ({ product }) => {

   const navigate= useNavigate()
  return (
<div className="bg-white rounded-2xl shadow hover:shadow-2xl transition-all duration-300 p-4 group" onClick={()=> navigate(`/detail/${product.id}`)}>
  <div className="h-52 flex items-center justify-center overflow-hidden">
    <img
      src={product.image}
      alt={product.title}
      className="h-44 object-contain group-hover:scale-110 transition duration-300"
    />
  </div>

  <div className="mt-4">
    <span className="text-xs bg-indigo-100 text-indigo-600 px-2 py-1 rounded-full">
      {product.category}
    </span>

    <h2 className="font-semibold mt-2 line-clamp-2 h-12">
      {product.title}
    </h2>

    <div className="flex items-center mt-2">
      <span className="text-yellow-500">
        ⭐ {product.rating.rate}
      </span>

      <span className="text-gray-400 text-sm ml-2">
        ({product.rating.count})
      </span>
    </div>

    <div className="flex items-center justify-between mt-4">
      <p className="text-2xl font-bold text-green-600">
        ${product.price}
      </p>

      <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">
        Add
      </button>
    </div>
  </div>
</div>
  );
};

export default ProductCard;