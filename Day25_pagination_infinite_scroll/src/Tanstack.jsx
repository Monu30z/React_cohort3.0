import { keepPreviousData, useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { getProducts } from "./Api/getProductApi";
import ProductCard from './component/ProductCard'

const Tanstack = () => {
    let limit =10;
const [page, setPage] = useState(0)
  const {data,isPending,error,isPlaceholderData} =  useQuery({
        queryKey:['getProducts',page],
        queryFn:()=> getProducts(limit,page),
        placeholderData:keepPreviousData,
    })
 if(isPending) return <h1>product is loading...</h1>
 if(error) return <h1>Something want wrong.....</h1>


 let totalPages = Math.ceil(data.total/limit)
//  console.log(totalPages);
 
  return (
    <div>
      <div style={{ opacity: isPlaceholderData ? 0.3 :1}} className="grid grid-cols-4 gap-4 p-4" >
       
        {data?.products.map((val) => {
          return <ProductCard key={val.id} product={val} />;
        })}
      </div>

      <div  className="flex items-center justify-center gap-4 p-4">
        <button
          disabled={page == 0}
          className="px-4 py-2 bg-red-700 text-white rounded-xl"
          onClick={() => setPage(page - 1)}
        >
          Prev
        </button>
        <p>
          page {page + 1} of {totalPages}
        </p>
        <button
          disabled={page >= totalPages - 1}
          className="px-4 py-2 bg-red-700 text-white rounded-xl"
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Tanstack;
