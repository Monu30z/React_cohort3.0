import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name:"counter",
    initialState:{
        count:0
    },

    reducers:{
        decrement:(state)=>{
            state.count--;
        },
        increment:(state)=>{
            state.count++;
        },
        incrementByValue:(state,action)=>{
            state.count += action.payload
        }
    }
})




export const {increment,decrement , incrementByValue} = counterSlice.actions
export default counterSlice.reducer