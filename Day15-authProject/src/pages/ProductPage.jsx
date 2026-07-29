import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { axiosInstance } from "../config/axiosInstance";

const ProductPage = () => {
  const [productData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  let getProductData = async () => {
    try {
      let res = await axiosInstance.get("/products");
      console.log(res.data);
      setProductData(res.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  if (isLoading) return <h1 className=" text-4xl">Product is loading...</h1>;
  return (
    <div className="grid grid-cols-4 gap-4">
      {productData.map((val) => {
        return <ProductCard product={val} key={val.id} />;
      })}
    </div>
  );
};

export default ProductPage;
