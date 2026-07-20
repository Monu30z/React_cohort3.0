import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Navbar from "./component/Navbar";
import ProductCard from "./component/ProductCard";
import Cartscreen from "./pages/Cartscreen";
import { MyProduct } from "./context/ContextProvider";

const App = () => {
  const [productData, setProductData] = useState([]);

 const {isCartOpen,cartData}=useContext(MyProduct)

  // console.log(cartData);

  const getProductData = async () => {
    try {
      let res = await axios.get("https://fakestoreapi.com/products");

      setProductData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);
  return (
    <div className=" h-screen p-4">
      <Navbar  />
      {isCartOpen ? (
        <div className="grid grid-cols-4 gap-3 p-3">
          {productData.map((elem) => {

            let isInCart =  cartData.find((val)=> val.id === elem.id)
            // console.log(isInCart);
            
            return <ProductCard key={elem.id} productData={elem} isInCart={isInCart}  />;
          })}
        </div>
      ) : (
        <div>
          <Cartscreen/>
        </div>
      )}
    </div>
  );
};

export default App;
