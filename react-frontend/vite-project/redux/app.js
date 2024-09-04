import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./slice/formSlice.js";
import fetchingReducers from "./slice/fetchSlice.js";
import authReducers from "./slice/authSlice.js";



const store = configureStore({
    reducer:{
        form:formReducer,
        fetching:fetchingReducers,
        auth:authReducers
    }
})

export default store