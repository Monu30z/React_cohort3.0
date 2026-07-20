import React, { useContext } from "react";
import Cart from "../component/Cart";
import { MyProduct } from "../context/ContextProvider";

const Cartscreen = () => {

    const { cartData } = useContext(MyProduct)


  return (
    <div className="text-4xl p-4 flex flex-col gap-4">

        <h1>Products in Cart <span className="text-red-900"> {cartData.length}</span></h1>
      {cartData.length === 0 ? (
        <div> Cart is empty</div>
      ) : (
     
        cartData.map((elem) => {
          return (
           <Cart key={elem.id} cartData={elem}/>
          );
        })
      )}
    </div>
  );
};

export default Cartscreen;
