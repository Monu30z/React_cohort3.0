import React, { useContext, useEffect } from "react";
import { createContext, useState } from "react";
import ProductCard from "../componenet/ProductCard";

import axios from "axios";
import { MyStore } from "../context/MyContext";

const Home = () => {
    const { product, setProduct } = useContext(MyStore);

  let getProductData = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      console.log(res.data);
      setProduct(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  return (
     <div className="grid grid-cols-4 gap-4 p-2 mt-5">
        {
        product.map((elem)=>{
          return <ProductCard key={elem.id} product={elem}/>
        })
      }
    </div>
  )
}

export default Home