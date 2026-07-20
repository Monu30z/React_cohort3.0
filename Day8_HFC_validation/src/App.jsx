import React, { useState } from 'react'
import Navbar from './componenets/Navbar'
import Usercard from './componenets/Usercard'
import Form from './componenets/Form'

const App = () => {
  const [toggle,setToggle] = useState(true)
  const [user, setUser] = useState([])
 
  
  return (
    <div className='bg-gray-800 h-screen text-white'>
      <Navbar setToggle={setToggle}/>

      {
        toggle ? <div className='p-4 flex gap-4'> {
          user.map((elem,idx)=>{
           return  <Usercard key={idx} data={elem}/>
          })
        }</div> : <div className='h-[70%] flex justify-center items-center'><Form setUser={setUser} setToggle={setToggle}/> </div>
      }
   

  
    </div>
  )
}

export default App