import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import ProductSkeleton from "../components/ProductSkeleton";
import getProductsDataApi from "../api/ProductApi";
import { useQuery } from "@tanstack/react-query";
import { useProduct, useProductApi } from "../hooks/productHook";
import Filters from "../components/FIlters";

const Shoppage = () => {
  let {
   filterProducts,
   isLoading,
   filteredProducts,
   
  } = useProduct();

  return (
    <div className="min-h-screen bg-black p-8">
      <Filters filterProducts={filterProducts} />
      <div className="max-w-7xl mx-auto grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {isLoading
          ? [...Array(8)].map((_, index) => <ProductSkeleton key={index} />)
          : filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </div>
    </div>
  );
};

export default Shoppage;
