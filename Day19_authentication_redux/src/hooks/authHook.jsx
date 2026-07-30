import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import {useDispatch} from 'react-redux'
import { addUser } from "../features/AuthSlice";

export const useAuth = () => {
      let dispatch = useDispatch()
    const [registerUsers, setRegisterUsers] = useState(JSON.parse(localStorage.getItem('registerUsers')) || [])
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();


  const registerForm = (data)=>{
    console.log(data);
    let arr = [...registerUsers,data]
    setRegisterUsers(arr);
    localStorage.setItem('registerUsers',JSON.stringify(arr))
    toast.success("User register sucessfully!")
    reset()
    
  }


  const loginForm= (data)=>{
    console.log(data);
    console.log(registerUsers);
    
    let user = registerUsers.find((val)=>{
        return val.email === data.email && val.password === data.password;
    })

    console.log(user);
    

    if(!user){
        toast.error("invalid user");
        return
    }
   dispatch(addUser(user))
    localStorage.setItem("loggedInUser",JSON.stringify(user));
    toast.success("user logged in")
    reset()
    
  }


  return {
    navigate,
     register,
    handleSubmit,
    reset,
    errors,
    loginForm,
    registerForm,
  };
};
