import { configureStore } from "@reduxjs/toolkit";
import fetchingReducers from "./slice/fetchSlice.js";
import { apiSlice } from "./slice/apiSlice.js";



const store = configureStore({
    reducer:{
        fetching:fetchingReducers,
        [apiSlice.reducerPath]:apiSlice.reducer,
        
    },
    middleware:(getDefaultMiddleware)=>{
      return  getDefaultMiddleware().concat(apiSlice.middleware)
    }
})

export default store