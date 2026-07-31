import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
    name:"auth",
    initialState:{
        user:null,
        isAuthenticated:false,
    },
    
    reducers:{
        addUser:(state,action)=>{
            state.user = action.payload;
            state.isAuthenticated = true;
        },
        removeUser:(state,action)=>{
            state.user = null;
            state.isAuthenticated = false;
        },
    }

})



export const {addUser,isAuthenticated} = AuthSlice.actions;
export default AuthSlice.reducer