import { useQuery } from "@tanstack/react-query";
import { getAllProductsApi, getProductByCategory, getProductsCategories } from "../api/productApis";
import { useEffect, useState } from "react";
export const useAllProduct = () => {
  const [search, setSearch] = useState(null);
  const [debounceing, setDebounceing] = useState(null);

  useEffect(()=>{
  let timeout= setTimeout(() => {
    setDebounceing(search)
      
    }, 1000);

    return ()=>clearTimeout(timeout)

  },[search])

  let {data,isPending,error}= useQuery({
    queryKey:["produts",debounceing],
    queryFn: ()=> getAllProductsApi(debounceing),

  });
  return{
    data,isPending,error,search,setSearch
  }
};


export const useProductCategories = ()=>{
  return useQuery({
    queryKey:["AllCategories"],
    queryFn:getProductsCategories,
   })
}



export const useProductCategory = ()=>{
  const [category, setCategory] = useState(null)

const {data} =  useQuery({
    queryKey:["ProductByCategory",category],
    queryFn:()=> getProductByCategory(category),
  })

  return{
    data,category,setCategory,
  }
}