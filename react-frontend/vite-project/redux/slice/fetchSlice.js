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
    isSinglePost:false,
    error:" ",
    profile:{
        user:null,
        userPost:null
    },
    area:"",
    bed:1,
    gt:0,
    lt:50000,
    floor:0,



}

// asynchronus

const fetchPost = createAsyncThunk('fetching/fetchPost',async ({area,lt,gt,bed,floor})=>{
    
    const res = await fetch(`http://localhost:3000/posts?area=${area}&lt=${lt}&gt=${gt}&bed=${bed}&floor=${floor}`,{
        credentials:"include"
    })
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
const updatePost = createAsyncThunk('fetching/updatePost',async ({id,data})=>{
    
    const res = await fetch('http://localhost:3000/posts',{
        method: "PUT",
        headers:{Accept:"application/json", "Content-Type":"application/json"} ,
        body: JSON.stringify({query:id,data:data}),
        credentials:"include"
      })
    const resData = await res.json()
    return resData
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
const profile = createAsyncThunk('fetching/profile',async (id)=>{
    
    const res = await fetch('http://localhost:3000/auth/profile',{
        method: "POST",
        headers:{Accept:"application/json", "Content-Type":"application/json"} ,
        body: JSON.stringify({user_id:id}),
        credentials:"include"
      })
    const data = await res.json()
    return data
})


const fetchingSlice = createSlice({
    name:'fetching',
    initialState,
    reducers:{
        update:(state,action)=>{
            state.profile.userPost[action.payload.index][action.payload.key]=action.payload.value
        },
        set:(state,action)=>{
            state[action.payload.key]=action.payload.value
        }
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
            state.error="No post found"
        })
        builder.addCase(updatePost.pending , (state,action)=>{
            
        })
        .addCase(updatePost.fulfilled , (state,action)=>{
            
        })
        .addCase(updatePost.rejected , (state,action)=>{
           
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
        builder.addCase(profile.pending , (state,action)=>{
            
        })
        .addCase(profile.fulfilled , (state,action)=>{
            
            state.profile=action.payload
           
        })
        .addCase(profile.rejected , (state,action)=>{
            
        })
    }
})


const fetchingActions = fetchingSlice.actions
const fetchingReducers = fetchingSlice.reducer

export default fetchingReducers
export { fetchingActions ,fetchPost,formPost,singlePost,profile,updatePost}