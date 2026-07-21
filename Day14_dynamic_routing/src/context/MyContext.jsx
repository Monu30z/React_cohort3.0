import { createContext, useState } from "react";


export const MyStore = createContext()

export const ContextProvider = ({ children })=>{
 const [product,setProduct]=useState([]);

    return <MyStore.Provider value={{product,setProduct}}>
        {children}
    </MyStore.Provider>
}