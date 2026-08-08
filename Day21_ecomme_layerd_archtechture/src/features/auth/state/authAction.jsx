import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../config/api";
import { toast } from "react-toastify";


export const loginUserAction =createAsyncThunk("auth/login", async (credentials,thunkApi)=>{
    try {
        console.log("thunk action trigger...");
        
            let res = await api.post("/auth/login",credentials);
            toast.success("User Loggined in")
            localStorage.setItem("accessToken",res.data.accessToken)
            return res.data;
            
            
        } catch (error) {
            toast.error("login failed")
            return thunkApi.rejectWithValue("login fail");
            
            
        } 

})



export const hydrateUserAction = createAsyncThunk('login/hydrate', async(_, thunkApi)=>{
        let token = localStorage.getItem("accessToken");
    try {
        let res = await api.get("/auth/me",{
             headers: {
    'Authorization': `Bearer ${token}`, // Pass JWT via Authorization header
  }
        });
       
        return res.data;
        
    } catch (error) {
        toast.error("Unauthorized user")
     return  thunkApi.rejectWithValue("unauthorized user")
        
        
    }

})