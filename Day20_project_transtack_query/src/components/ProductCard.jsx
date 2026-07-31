import { Heart, ShoppingCart, Star, Truck } from "lucide-react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-zinc-900 text-white rounded-2xl overflow-hidden shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-2">

      {/* Image */}
      <div className="relative bg-zinc-800">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-60 object-contain p-5"
        />

        {/* Category */}
        <span className="absolute top-3 left-3 bg-cyan-500 text-black text-xs px-3 py-1 rounded-full font-semibold capitalize">
          {product.category}
        </span>

        {/* Wishlist */}
        <button className="absolute top-3 right-3 bg-zinc-700 p-2 rounded-full hover:bg-red-500 transition">
          <Heart size={18} />
        </button>
      </div>

      {/* Content */}
      <div className="p-5 space-y-4">

        {/* Brand */}
        <p className="text-cyan-400 text-sm font-medium">
          {product.brand}
        </p>

        {/* Title */}
        <h2 className="font-bold text-lg line-clamp-2">
          {product.title}
        </h2>

        {/* Description */}
        <p className="text-gray-400 text-sm line-clamp-2">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center justify-between">

          <div className="flex items-center gap-1 text-yellow-400">
            <Star size={16} fill="currentColor" />
            <span className="text-sm">
              {product.rating}
            </span>
          </div>

          <span
            className={`text-xs px-2 py-1 rounded-full ${
              product.stock > 0
                ? "bg-green-500/20 text-green-400"
                : "bg-red-500/20 text-red-400"
            }`}
          >
            {product.availabilityStatus}
          </span>

        </div>

        {/* Price */}
        <div className="flex items-center justify-between">

          <div>
            <h3 className="text-2xl font-bold text-cyan-400">
              ${product.price}
            </h3>

            <p className="text-xs text-green-400">
              {product.discountPercentage}% OFF
            </p>
          </div>

          <div className="text-right">
            <p className="text-xs text-gray-400">Stock</p>
            <p className="font-semibold">
              {product.stock}
            </p>
          </div>

        </div>

        {/* Shipping */}
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <Truck size={16} />
          <span>{product.shippingInformation}</span>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">

          <button className="flex-1 bg-cyan-500 hover:bg-cyan-600 text-black font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition">
            <ShoppingCart size={18} />
            Add to Cart
          </button>

          <button className="border border-zinc-700 hover:border-cyan-400 px-4 rounded-lg transition">
            View
          </button>

        </div>

      </div>
    </div>
  );
};

export default ProductCard;