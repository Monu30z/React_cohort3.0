import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { store } from './app/store'
import { decrement, incerment } from './features/counterSlice'

const App = () => {
  const dispatch = useDispatch()
 const {count }= useSelector((store)=> store.counter)

 console.log(count);
 
  return (
    <div>
      <h1>My count is {count}</h1>

      <button onClick={()=> dispatch(decrement())}>decrement  </button>
      <button onClick={()=> dispatch(incerment("chill..."))}>increment </button>
    </div>
  )
}

export default App