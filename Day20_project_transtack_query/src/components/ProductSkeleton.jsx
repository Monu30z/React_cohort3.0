const ProductSkeleton = () => {
  return (
    <div className="bg-zinc-900 rounded-2xl overflow-hidden animate-pulse shadow-lg">
      {/* Image */}
      <div className="bg-zinc-800 h-60 w-full"></div>

      {/* Content */}
      <div className="p-5 space-y-4">
        {/* Brand */}
        <div className="h-3 w-20 bg-zinc-700 rounded"></div>

        {/* Title */}
        <div className="space-y-2">
          <div className="h-5 bg-zinc-700 rounded w-full"></div>
          <div className="h-5 bg-zinc-700 rounded w-3/4"></div>
        </div>

        {/* Description */}
        <div className="space-y-2">
          <div className="h-3 bg-zinc-700 rounded"></div>
          <div className="h-3 bg-zinc-700 rounded w-5/6"></div>
        </div>

        {/* Rating & Stock */}
        <div className="flex justify-between">
          <div className="h-4 w-16 bg-zinc-700 rounded"></div>
          <div className="h-5 w-20 bg-zinc-700 rounded-full"></div>
        </div>

        {/* Price */}
        <div className="flex justify-between">
          <div className="space-y-2">
            <div className="h-6 w-20 bg-zinc-700 rounded"></div>
            <div className="h-3 w-16 bg-zinc-700 rounded"></div>
          </div>

          <div className="space-y-2">
            <div className="h-3 w-12 bg-zinc-700 rounded"></div>
            <div className="h-5 w-10 bg-zinc-700 rounded"></div>
          </div>
        </div>

        {/* Shipping */}
        <div className="h-4 w-full bg-zinc-700 rounded"></div>

        {/* Buttons */}
        <div className="flex gap-3">
          <div className="flex-1 h-11 bg-zinc-700 rounded-lg"></div>
          <div className="w-20 h-11 bg-zinc-700 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductSkeleton;
