import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name:'counter',
    initialState:{
        count:0,
    },

    reducers:{
        incerment:(state,action)=>{
            console.log("this is action =>", action);
            
            state.count++;
        },

        decrement:(state)=>{
            state.count--;
        },
    },
});

console.log("slice -> ", counterSlice);

export const {incerment,decrement} = counterSlice.actions;
export default counterSlice.reducer;