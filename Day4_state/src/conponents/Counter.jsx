import React, { useState } from 'react'

function Counter() {
   const [count, setcount] = useState(0)
   const [flag, setflag] = useState(true)
//    console.log(useState);

console.log(count);
console.log(flag);
   
  return (
    <div>
 <h1>Counter {count}</h1>
 <button onClick={()=>{
    setcount(count+1)
    
 }}> Count </button>


 <button onClick={()=>[
    setflag(false)
 ]}>Status</button>
    </div>
  )
}

export default Counter