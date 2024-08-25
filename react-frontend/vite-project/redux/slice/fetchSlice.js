import { faLinesLeaning } from "@fortawesome/free-solid-svg-icons"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"



// initial state
const initialState = {
    isValid:false,
    isSending:false,
    isSent:false,
    isLoading:false,
    post:[],
    singlePost:null,
    isSinglePost:false

}

// asynchronus

const fetchPost = createAsyncThunk('fetching/fetchPost',async (formData)=>{
    
    const res = await fetch('http://localhost:3000/posts')
    const data = await res.json()
    return data
})
const formPost = createAsyncThunk('fetching/formPost',async (formData)=>{
    
    const res = await fetch('http://localhost:3000/posts',{
        method: "POST",
        headers:{Accept:"application/json", "Content-Type":"application/json"} ,
        body: JSON.stringify(formData),
      })
    const data = await res.json()
    return data
})
const singlePost = createAsyncThunk('fetching/singlePost',async (formData)=>{
    
    const res = await fetch('http://localhost:3000/posts/single',{
        method: "POST",
        headers:{Accept:"application/json", "Content-Type":"application/json"} ,
        body: JSON.stringify({_id:formData}),
      })
    const data = await res.json()
    return data
})


const fetchingSlice = createSlice({
    name:'fetching',
    initialState,
    reducers:{
        
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchPost.pending , (state,action)=>{
            state.isSending=true
        })
        .addCase(fetchPost.fulfilled , (state,action)=>{
            state.isSending=false
            state.isSent = true
            state.post=action.payload.posts
        })
        .addCase(fetchPost.rejected , (state,action)=>{
            state.isSending=false
            state.err="Could not send the form!"
        })
        builder.addCase(formPost.pending , (state,action)=>{
            state.isSending=true
        })
        .addCase(formPost.fulfilled , (state,action)=>{
            state.isSending=false
            state.isSent = true
            // state.post=action.payload.posts
        })
        .addCase(formPost.rejected , (state,action)=>{
            state.isSending=false
            state.err="Could not send the form!"
        })
        builder.addCase(singlePost.pending , (state,action)=>{
            
        })
        .addCase(singlePost.fulfilled , (state,action)=>{
            
            state.singlePost=action.payload
            state.isSinglePost=true
        })
        .addCase(singlePost.rejected , (state,action)=>{
            
        })
    }
})


const fetchingActions = fetchingSlice.actions
const fetchingReducers = fetchingSlice.reducer

export default fetchingReducers
export { fetchingActions ,fetchPost,formPost,singlePost}