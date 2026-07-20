import React, { useState } from "react";

const Form = () => {
  //    const [name,setName] = useState('');
  //    const [email, setEmail] = useState('')
  //    const [password, setPassword] = useState('')
  //    console.log(name);
  //    console.log(email);

  const [formData, setFormData] = useState({});

  console.log(formData);
  
  const handleChange = (e) => {
            const {name,value} = e.target;
          setFormData({ ...formData, [name]:value });
        }

  return (
    <div className="form">
      {/* -------------------Brute -force---------------------- */}
      {/* //     <input onChange={
            (e)=>{setName(e.target.value);
        }
        } type="text" placeholder='name' />

        <input type="email"
         onChange={(e)=>{
            setEmail(e.target.value)

         }}
         placeholder='Email'
        />
        <input type="text" onChange={(e)=>{
            setPassword(e.target.value)
        }}


        placeholder='Password' /> */}
      {/* <h1>Name - {name}</h1>
        <h1>Name - {email}</h1>
        <h1>Name - {password}</h1> */}

      {/* -------------------Better Approch ------------------------------------- */}

{/* <input
  onChange={(e) => {
    setFormData({ ...formData, password: e.target.value });
  }}
  type="password"
/> */}



{/* -----------------Optimized Approch----------- */}
      <input
      name="name"
        onChange={handleChange}
        type="text"
      />

      <input
      name="email"
        onChange={handleChange}
        type="email"
      />
      <input
      name="password"
        onChange={handleChange}
        type="password"
      />


      <h1>Name - {formData.name}</h1>
      <h1>Email - {formData.email}</h1>
      <h1>Password - {formData.password}</h1>
      <h1></h1>
      <h1></h1>
    </div>
  );
};

export default Form;
