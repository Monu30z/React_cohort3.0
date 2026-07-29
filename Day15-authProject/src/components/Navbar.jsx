import { LogOut } from "lucide-react";
import React, { useContext } from "react";
import { Navigate, NavLink } from "react-router";
import { Auth } from "../context/AuthContext";
import {toast} from "react-toastify"

const Navbar = () => {
 const {setLoggedInUser}= useContext(Auth)
  return (
    <div className="flex flex-col justify-between  gap-10 border-r border-r-gray-500">
     <div className="flex flex-col gap-10">
         <h1 className="text-3xl font-semibold">Logo</h1>
      <div className="flex flex-col gap-4 ml-5">
        <NavLink className={({isActive})=> isActive ? 'text-blue-600 font-semibold border-b border-b-gray-600 text-xl':'text-black font-semibold border-b border-b-gray-400 text-xl'} to={"/main"} end>Home</NavLink>
        <NavLink className={({isActive})=> isActive ? 'text-blue-600 font-semibold border-b border-b-gray-600 text-xl':'text-black font-semibold border-b border-b-gray-400 text-xl'} to={"/main/users"}>User</NavLink>
        <NavLink className={({isActive})=> isActive ? 'text-blue-600 font-semibold border-b border-b-gray-600 text-xl':'text-black font-semibold border-b border-b-gray-400 text-xl'} to={"/main/products"}>Products</NavLink>
      </div>
     </div>
      <button  onClick={
        ()=> {
          localStorage.removeItem("loggedInUser")
         toast.warn("use is logged out")
        setLoggedInUser(null)
        }
      }
       className="flex items-center gap-2.5 justify-center font-bold p-3  bg-red-400 mr-1.5 border rounded-2xl border-red-600 text-red-900">LogOut <LogOut/></button>
    </div>
  );
};

export default Navbar;
