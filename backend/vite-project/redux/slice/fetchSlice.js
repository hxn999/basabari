
import {  createSlice } from "@reduxjs/toolkit"



// initial state
const initialState = {
    post:[],
    singlePost:null,
    error:" ",
    area:"",
    bed:1,
    gt:0,
    lt:50000,
    floor:0,
    sort:"new",
}


const fetchingSlice = createSlice({
    name:'fetching',
    initialState,
    reducers:{
        update:(state,action)=>{
            state.profile.userPost[action.payload.index][action.payload.key]=action.payload.value
        },
        set:(state,action)=>{
            state[action.payload.key]=action.payload.value
        },
        sort:(state,action)=>
        {

            if (action.payload == "pra") {
                state.post=state.post.sort((a, b) => a.rent- b.rent)
            }
            else if(action.payload == "prd")
            {
                state.post=state.post.sort((a, b) => b.rent- a.rent)
            }
        }
    },
   
})


const fetchingActions = fetchingSlice.actions
const fetchingReducers = fetchingSlice.reducer

export default fetchingReducers
export { fetchingActions }