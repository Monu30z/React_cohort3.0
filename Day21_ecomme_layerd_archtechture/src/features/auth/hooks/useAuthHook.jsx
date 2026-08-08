import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
// import { loginUserApi } from "../api/AuthApi";
import { useDispatch } from "react-redux";
import { addUser } from "../state/authSlice";
import { toast } from "react-toastify";
import { loginUserAction } from "../state/authAction";

export const useAuth = () => {
  let navigate = useNavigate();
  const  dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const registerForm = (data) => {
    console.log("register form  data", data);
  };

  const loginForm = async (data) => {
    try {
    // api call
   
      dispatch(loginUserAction(data))
   

    } catch (error) {
      console.log("login api erroe", error);
    }
    reset()
  };

  return {
    navigate,
    register,
    handleSubmit,
    errors,
    registerForm,
    loginForm,
  };
};
