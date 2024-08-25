import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./slice/formSlice.js";
import fetchingReducers from "./slice/fetchSlice.js";



const store = configureStore({
    reducer:{
        form:formReducer,
        fetching:fetchingReducers
    }
})

export default store