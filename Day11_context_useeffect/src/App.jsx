import React, { useContext, useEffect, useState } from 'react'
import Home from './componenet/Home'
import About from './componenet/About'
import Contect from './componenet/Contect'
import { MyStore } from './context/MyContext'
import axios  from "axios"


const App = () => {
 const [apiData,setApiData]= useState(null)
console.log(apiData);

  let getData = async ()=>{
    let res = await axios.get("https://fakestoreapi.com/products")
    // console.log(res.data);
    setApiData(res)
    
  }

  useEffect(()=>{

    getData()
  },[])
  
  
  const [count , setCount ]=useState(0)
  
  const [toggle, setToggle] = useState(true)
  useEffect(()=>{
    console.log("App reendring...");

  },[])
  // const  {count, setCount} = useContext(MyStore)
  console.log("Hello");

 
  return (
    <div>
 <h1>conut is {count}</h1>


      <button onClick={()=> setCount(count + 1)}> increase</button>
      <br />

       {
        toggle ? <Contect/>  : <About/>
      }

      <button onClick={()=> setToggle( prev => !prev)}>Toggle button</button>

      {/* <h1>count {count}</h1>

      <button onClick={()=> setCount(count +  1)}>count increase</button>
   
      <Home/>
      <About/> */}

     
      
    </div>
  )
}

export default App