import { useState } from "react"
import React  from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  const [user, setUser] = useState({
    name: "Monu",
  })
 return(
  <div>
<h1>count - {count}</h1>
<h1>Change user - {user.name}</h1>

<button onClick={()=>{
  setCount(count+1)
}}>Incease</button>
<button onClick={()=>{
   
  setUser()
}}>Change</button>
  </div>
 );
  
}

export default App