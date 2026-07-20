import { createContext, useState } from "react";

export const MyProduct = createContext();
export const ContextProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(true);

  const [cartData, setCartData] = useState([]);

  let incrementQuntity = (id) => {
    setCartData((prev) => {
      return prev.map((val) => {
        return val.id === id ? { ...val, quntity: val.quntity + 1 } : val;
      });
    });
  };
  let decrementQuntity = (id) => {
    setCartData((prev) => {
      return prev.map((val) => {
    
       
            return val.id === id ? { ...val,  quntity:  val.quntity - 1 } : val;
        
      }).filter((item) => item.quntity > 0);
    });
  };
  console.log(cartData);

  return (
    <MyProduct.Provider
      value={{
        isCartOpen,
        setIsCartOpen,
        cartData,
        setCartData,
        incrementQuntity,
        decrementQuntity
      }}
    >
      {children}
    </MyProduct.Provider>
  );
};
