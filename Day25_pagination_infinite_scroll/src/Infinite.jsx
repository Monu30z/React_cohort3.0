import { useInfiniteQuery } from '@tanstack/react-query'
import React from 'react'
import { getProducts } from './Api/getProductApi'
import ProductCard from './component/ProductCard'

const Infinite = () => {
    let limit = 40;
 const {data,isLoading,error,fetchNextPage,hasNextPage,isFetchingNextPage}=   useInfiniteQuery({
        queryKey:['getProducts'],
        queryFn:({pageParam})=> getProducts(limit,pageParam),
        initialPageParam:0, 
        getNextPageParam:(lastPage,allPage)=>{
            
            console.log(allPage);

            
            let loadedData =allPage.length * limit;
            if(loadedData < lastPage.total) return loadedData;
            return undefined

        }
    })

    if (isLoading) {
        return <h1>Loading.....</h1>
    }

    console.log(data);
    const allProductData = data?.pages.flatMap( val => val.products);

    console.log(allProductData);
    
    
  return (
    <div className='flex flex-col items-center p-5'>
        <div className=' w-full grid grid-cols-4 gap-4 p-4'>
            {
                allProductData.map((val)=>{
                    return <ProductCard key={val.id} product={val}/>
                })
        }
        </div>
        {
            hasNextPage && <button onClick={()=> fetchNextPage() }>{
            isFetchingNextPage ? "Loading..." : "Load more"
            }</button>
        }
    </div>
  )
}

export default Infinite