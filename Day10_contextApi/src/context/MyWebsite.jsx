import { createContext ,useState } from "react";

export const MyShop = createContext()

export const MyshopProvider =({children})=>{
      const [toggle,setToggle]=useState(false)
   const [cartItems, setCartItems] = useState([])
    return <MyShop.Provider value={{toggle,setToggle, cartItems ,setCartItems}}>
{children}
    </MyShop.Provider>
 }