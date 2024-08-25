import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"



// initial state
const initialState = {
    userid:"hasan",
    images:[],
    bed:null,
    bath:null,
    balcony:null,
    floorSize:null,
    description:"",
    facilities:[],
    address:"",
    mapSrc:"",
    rent:null,
    charges:null,
    chargeCategory:"",
    rentDate:"",
    errorState:{
        isValid:false,
        isSending:false,
        isSent:false,
        errors:{
            bed:"",
            bath:"",
            address:"",
            image:"",
            rent:"",
            rentDate:""
        },
        isLoading:false,
        post:[]
    
    }

}





const formSlice = createSlice(
    {
        name:"form",
        initialState,
        reducers:{
            pushing : (state,action)=>{
                state[action.payload.key].push(action.payload.data)
            },
            increment:(state,action)=>
            {
                state[action.payload.key]+=action.payload.value
            },
            decrement:(state,action)=>
            {
                state[action.payload.key]-=action.payload.value
            },
            setValue: (state,action)=>{
                if(action.payload.value>0){

                    state[action.payload.key]=action.payload.value
                }
            },  
            setString: (state,action)=>{
                

                    state[action.payload.key]=action.payload.value
                
            },
            deleteImage:(state,action) =>{
                state.images.splice(action.payload,1)
            },
            formValidate:(state,action)=>{
                if(state.bed==null || state.bed < 0)
                {
                    state.errorState.errors.bed="Please Enter Your Bedroom Number"
                    state.errorState.isValid=false
                }
                else{
                    state.errorState.errors.bed=""
                    
                }
                if(state.bath==null || state.bath < 0)
                {
                    state.errorState.errors.bath="Please Enter Your Bathroom Number"
                    state.errorState.isValid=false
                }
                else{
                    state.errorState.errors.bath=""
                    
                }
                if(state.rent==null || state.rent < 0)
                {
                    state.errorState.errors.rent="Please Enter Your Rent in taka"
                    state.errorState.isValid=false
                }
                else{
                    state.errorState.errors.rent=""
                    
                }
                if(state.address=="" )
                {
                    state.errorState.errors.address="Please Enter Your Full Address"
                    state.errorState.isValid=false
                }
                else{
                    state.errorState.errors.address=""
                    
                }
                if(state.rentDate=="" )
                {
                    state.errorState.errors.rentDate="Please Enter Rent Date"
                    state.errorState.isValid=false
                }
                else{
                    state.errorState.errors.rentDate=""
                    
                }
                if(state.errorState.errors.rent=="" && state.errorState.errors.rentDate=="" && state.errorState.errors.address=="" && state.errorState.errors.bed=="" && state.errorState.errors.bath=="" )
                {
                    state.errorState.isValid=true
                }
                
            }
        },
        extraReducers:(builder) => {
            
        }

    }
)

const formActions = formSlice.actions
const formReducer = formSlice.reducer

export default formReducer
export { formActions  }