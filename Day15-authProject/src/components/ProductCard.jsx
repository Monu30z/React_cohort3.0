import React from "react";
import { Star } from "lucide-react";

const ProductCard = ({ product }) => {
  return (
    <div className=" bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
      {/* Product Image */}
      <div className="bg-gray-100 h-64 flex items-center justify-center overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="h-52 object-contain group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Product Details */}
      <div className="p-5 space-y-3">
        {/* Category */}
        <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full capitalize">
          {product.category}
        </span>

        {/* Title */}
        <h2 className="text-lg font-bold text-gray-800 line-clamp-2">
          {product.title}
        </h2>

        {/* Description */}
        <p className="text-sm text-gray-500 line-clamp-3">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Star className="text-yellow-500 fill-yellow-500" size={18} />
            <span className="font-semibold">{product.rating.rate}</span>
            <span className="text-gray-500 text-sm">
              ({product.rating.count} Reviews)
            </span>
          </div>

          {/* Price */}
          <h3 className="text-2xl font-bold text-green-600">
            ${product.price}
          </h3>
        </div>

        {/* Button */}
        <button className="w-full bg-black text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;