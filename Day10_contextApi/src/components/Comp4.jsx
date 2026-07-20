import React, { useContext } from 'react'
import { MyStore } from '../context/ContextProvider'

const Comp4 = () => {

 const cd =  useContext(MyStore)
    
  return (
    <div>Comp4 {cd}</div>
  )
}

export default Comp4