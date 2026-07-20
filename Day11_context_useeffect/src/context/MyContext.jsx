import { createContext, useState } from "react";

export const MyStore = createContext()

export const ContextProvider = ({children})=>{
    const [count , setCount] = useState(0)
    console.log("Context rendring..");
    
    return <MyStore.Provider value={{count,setCount}}>
        {children}
    </MyStore.Provider>
}