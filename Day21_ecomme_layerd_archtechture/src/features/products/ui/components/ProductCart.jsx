import { ShoppingCart, Star } from "lucide-react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">

      {/* Product Image */}
      <div className="bg-gray-100 h-60 flex items-center justify-center p-4">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full object-contain hover:scale-105 transition duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-4">

        {/* Category */}
        <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full capitalize">
          {product.category}
        </span>

        {/* Title */}
        <h2 className="mt-3 text-lg font-semibold text-gray-800 line-clamp-2">
          {product.title}
        </h2>

        {/* Rating & Stock */}
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-1 text-yellow-500">
            <Star size={16} fill="currentColor" />
            <span className="text-sm">{product.rating}</span>
          </div>

          <span
            className={`text-xs font-medium ${
              product.stock > 0
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {product.stock > 0 ? "In Stock" : "Out of Stock"}
          </span>
        </div>

        {/* Price */}
        <div className="mt-3">
          <h3 className="text-2xl font-bold text-gray-900">
            ${product.price}
          </h3>
        </div>

        {/* Button */}
        <button className="w-full mt-5 bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg font-medium flex items-center justify-center gap-2 transition">
          <ShoppingCart size={18} />
          Add to Cart
        </button>

      </div>
    </div>
  );
};

export default ProductCard;