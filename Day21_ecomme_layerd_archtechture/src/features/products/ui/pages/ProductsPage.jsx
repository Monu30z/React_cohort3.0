import React from 'react'
import { useAllProduct, useProductCategory } from '../../hooks/useProductHook'
import ProductCard from '../components/ProductCart';
import Filter from '../components/Filter';

const ProductsPage = () => {
const {data,isPending,error,search,setSearch}=  useAllProduct()

const {data:productBycategory,category,setCategory} =useProductCategory()

if(isPending) return <h1>Products are loading...</h1>




 return (
    <div className="max-w-7xl mx-auto p-6">
      <Filter category={category} setCategory={setCategory} search={search} setSearch={setSearch} />
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {
          productBycategory?.products.length  ? productBycategory?.products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))  : data.products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))
        }
      </div>
    </div>
  );
}

export default ProductsPage