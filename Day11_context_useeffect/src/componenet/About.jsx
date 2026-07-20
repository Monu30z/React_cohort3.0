import React, { useEffect } from 'react'

const About = () => {

 let interval = setInterval(()=>{
   console.log("Hi i'm About ...................");
   
},1000)
useEffect(()=>{
    console.log("About rendring...");

    return ()=>{
      clearInterval(interval);
      console.log("exit form About Compnenet..........");
      

    }

  })
  return (
    <div>About</div>
  )
}

export default About