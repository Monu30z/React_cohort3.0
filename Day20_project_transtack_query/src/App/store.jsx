import { configureStore} from '@reduxjs/toolkit'
import countReducer from '../features/counterSlice'
import authReducer from '../features/AuthSlice'

export const store = configureStore({
    reducer:{
        counter:countReducer,
        auth:authReducer,

    }

})