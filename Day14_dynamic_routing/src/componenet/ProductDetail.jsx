import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { MyStore } from "../context/MyContext";
import axios from "axios";

const ProductDetail = () => {
 const [singleProductData , setSingleProductData] = useState({})
  const { id } = useParams();

  const getSingleProduct =async ()=>{

    let res = await axios.get(`https://fakestoreapi.com/products/${id}`)
    
    
setSingleProductData(res.data)
    try {
        
    } catch (error) {
        console.log(error);
        
    }
  }

  useEffect(()=>{
      getSingleProduct()

  },[])


//   console.log(singleProductData.rating?.rate);

  return (
      <div className="max-w-6xl mx-auto p-6">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden grid md:grid-cols-2 gap-8">

        {/* Left Side - Image */}
        <div className="bg-gray-100 flex items-center justify-center p-8">
          <img
            src={singleProductData.image}
            alt={singleProductData.title}
            className="h-96 object-contain hover:scale-105 transition duration-300"
          />
        </div>

        {/* Right Side - Details */}
        <div className="p-8 flex flex-col justify-between">

          <div>

            {/* Category */}
            <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm capitalize mb-4">
              {singleProductData.category}
            </span>

            {/* Title */}
            <h1 className="text-3xl font-bold mb-4">
              {singleProductData.title}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-green-600 text-white px-3 py-1 rounded">
                ⭐ {singleProductData.rating?.rate}
              </span>

              <span className="text-gray-500">
                {singleProductData.rating?.count} Reviews
              </span>
            </div>

            {/* Price */}
            <h2 className="text-4xl font-bold text-green-600 mb-6">
              ${singleProductData.price}
            </h2>

            {/* Description */}
            <p className="text-gray-600 leading-7">
              {singleProductData.description}
            </p>

          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-8">

            <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition">
              Add to Cart
            </button>

            <button className="flex-1 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white py-3 rounded-lg font-semibold transition">
              Buy Now
            </button>

          </div>

        </div>

      </div>
    </div>
  );
};

export default ProductDetail;
