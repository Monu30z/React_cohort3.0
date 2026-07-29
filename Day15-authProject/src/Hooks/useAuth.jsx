import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Navigate, useNavigate } from "react-router";
import { Auth } from "../context/AuthContext";

export const useAuth = ()=>{
   const { registerUser, loggedInUser, setLoggedInUser } = useContext(Auth);

    let navigate = useNavigate();
     const { 
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();
    
      let loginFormSubmit = (data) => {
        let user = registerUser.find((val) => {
          return val.email === data.email && val.password === data.password;
        });
    
        if (!user) {
          toast.error("User not found or invalid credetinals");
          reset();
          return;
        }
        setLoggedInUser(user);
        localStorage.setItem("loggedInUser", JSON.stringify(user));
        toast.success("User loggedIn");
        Navigate("/main");
        reset();
      };

       let registerFormSubmit = (data) => {
          let arr = [...registerUser, data];
          setRegisterUser(arr);
          setLoggedInUser(data);
          localStorage.setItem("loggedInUser", JSON.stringify(data));
          toast.info("user register successfully");
      
          localStorage.setItem("registerdUsers", JSON.stringify(arr));
      
          navigate("/main");
          reset();
        };



        return {
          register,handleSubmit,
          errors,navigate,loginFormSubmit,registerFormSubmit,navigate
        }
}