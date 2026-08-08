const ProductCard = ({ product }) => {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      {/* Product Image */}
      <div className="flex h-56 items-center justify-center bg-gray-50 p-4">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full w-full object-contain"
        />
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h2 className="truncate text-lg font-semibold text-gray-800">
          {product.title}
        </h2>

        <div className="mt-2 flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">
            ${product.price}
          </span>

          <span className="rounded-full bg-yellow-100 px-2.5 py-1 text-sm font-medium text-yellow-700">
            ⭐ {product.rating}
          </span>
        </div>

        <p
          className={`mt-3 text-sm font-medium ${
            product.availabilityStatus === "In Stock"
              ? "text-green-600"
              : "text-red-600"
          }`}
        >
          {product.availabilityStatus}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;