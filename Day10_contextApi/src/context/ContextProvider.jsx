import { createContext, useState } from "react";
import Textcomponent from "../components/Textcomponent";


export const MyStore = createContext()


export const ContextProvider =({children})=>{
  const [centralData,setCentralData]  = useState("central data")
    return <MyStore.Provider value={centralData}>{children} </MyStore.Provider>
}