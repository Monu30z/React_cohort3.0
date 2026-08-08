import React, { useEffect, useState } from 'react'
// import { getProducts } from './Api/getProductApi'
import ProductCard from './component/ProductCard'
import axios from "axios";


const App = () => {
  let limit =10;
       const [productData, setProductData] = useState(null)
       const [page, setPage] = useState(0)
   const getProducts = async ()=>{
     try {
        let res =await axios.get(`https://dummyjson.com/products?limit=${limit}&skip=${page * limit}`)
        setProductData(res.data)
        
    } catch (error) {
        console.log("Error in Api call",error);
        
        
    }
   }


    useEffect(()=>{
        getProducts()
    },[page])


    let totalPages = Math.ceil(productData?.total/ limit);
    console.log(totalPages);
    
    

  return (
   productData?.total/ limitproductData?.total/ limitproductData?.total/ limitproductData?.total/ limitproductData?.total/ limitproductData?.total/ limitproductData?.total/ limitproductData?.total/ limitproductData?.total/ limitproductData?.total/ limitproductData?.total/ limitproductData?.total/ limitproductData?.total/ limitproductData?.total/ limitproductData?.total/ limitproductData?.total/ limitproductData?.total/ limitproductData?.total/ limitproductData?.total/ limitproductData?.total/ limitproductData?.total/ limitproductData?.total/ limitproductData?.total/ limit
  )
}

export default App