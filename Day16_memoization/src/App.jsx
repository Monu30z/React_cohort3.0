import React, { useCallback, useMemo, useState } from "react";
import Home from "./components/Home";
import About from "./components/About";

const App = () => {
  const [count, setCount] = useState(0);
  const [userName, setUserName] = useState({ name: "Monu", id: 12 });
  
  console.log("App is rendring..");
  
  const greet = useCallback(()=>{
    
    
  },[])


 const calculate = useMemo(()=>{
  let sum = 0
  for(let i =0 ; i<1000000; i++){
    sum += i
  }
  return sum
 },[])

 console.log(calculate);
 


  return (
    <div className="m-5 space-y-4">
      <h1>user {userName.name}</h1>
      <h1> count {count}</h1>

      <h1>
        calculation {calculate}
      </h1>

      <button
        className="py-2 px-5 rounded-2xl bg-yellow-500 "
        onClick={() => {
          setUserName({ ...userName, name: "Monu Singh" });
        }}
      >
        change usename
      </button>
      <button
        className="py-2 px-5 rounded-2xl bg-blue-500 "
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>

      <Home  greet={greet} />
      <About  greet={greet}  />
    </div>
  );
};

export default App;
