import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { useCookies } from "react-cookie"
// let [cookie,setCookie] = useCookies(['name'])



// initial state
const initialState = {
    emailPhone: "",
    password: "",
    create: {
        email: "",
        phone: "",
        pfp: "",
        evidence: [],
        firstName: "",
        lastName: "",
        area: "",
        lat: null,
        long: null,
        password: "",
        address:"",
        errorState: {
            isValid: false,
            isSending: false,
            isSent: false,
            errors: {
                email: "",
                phone: "",
                area: "",
                address: "",
                evidence: "",
                password: "",
                firstName: "",
                lastName: "",
            },

        },
        accessToken:null,
        refreshToken:null,

    },
    isLoggedIn:false,
    loginError:""

}

// asynchronus

const fetchPost = createAsyncThunk('fetching/fetchPost', async (formData) => {

    const res = await fetch('http://localhost:3000/posts')
    const data = await res.json()
    return data
})
const userLogin = createAsyncThunk('auth/userLogin', async (formData) => {

    const res = await fetch('http://localhost:3000/auth/login', {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        credentials: "include",
    })
    const data = await res.json()
    return data
})
const userLogout = createAsyncThunk('auth/userLogout', async () => {

    const res = await fetch('http://localhost:3000/auth/login', {
        method: "DELETE",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        credentials: "include",
        
    })
    const data = await res.json()
    return data
})
const createUser = createAsyncThunk('auth/createUser', async (formData) => {

    const res = await fetch('http://localhost:3000/auth/create', {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        credentials: "include",
    })
    const data = await res.json()
    return data
})
const singlePost = createAsyncThunk('fetching/singlePost', async (formData) => {

    const res = await fetch('http://localhost:3000/posts/single', {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({ _id: formData }),
    })
    const data = await res.json()
    return data
})


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setString: (state, action) => {


            state[action.payload.key] = action.payload.value

        },
        setCrString: (state, action) => {


            state.create[action.payload.key] = action.payload.value

        },
        createValidate: (state, action) => {
            if(state.create.address=="" )
                {
                    state.create.errorState.errors.address="Please Enter Your Full Address"
                    state.create.errorState.isValid=false
                }
                else{
                    state.create.errorState.errors.address=""
                    
                }
            if(state.create.firstName=="" )
                {
                    state.create.errorState.errors.firstName="Please Enter Your First Name"
                    state.create.errorState.isValid=false
                }
                else{
                    state.create.errorState.errors.firstName=""
                    
                }
            if(state.create.lastName=="" )
                {
                    state.create.errorState.errors.lastName="Please Enter Your Last Name"
                    state.create.errorState.isValid=false
                }
                else{
                    state.create.errorState.errors.lastName=""
                    
                }
            if(state.create.email=="" )
                {
                    state.create.errorState.errors.email="Please Enter Your Email Address"
                    state.create.errorState.isValid=false
                }
                else{
                    state.create.errorState.errors.email=""
                    
                }
            if(state.create.password.length<8 )
                {
                    state.create.errorState.errors.password="Your password must be at least 8 characters"
                    state.create.errorState.isValid=false
                }
                else{
                    state.create.errorState.errors.password=""
                    
                }
                // if(state.area=="select" )
                // {
                //     state.errorState.errors.area="Please Enter Residence Area"
                //     state.errorState.isValid=false
                // }
                // else{
                //     state.errorState.errors.area=""
                    
                // }
                if(state.create.phone=="" )
                {
                    state.create.errorState.errors.phone="Please Enter Your Phone Number"
                    state.create.errorState.isValid=false
                }
                else{
                    state.create.errorState.errors.phone=""
                    
                }
                if(state.create.errorState.errors.email=="" && state.create.errorState.errors.phone=="" && state.create.errorState.errors.address=="" && state.create.errorState.errors.password=="" && state.create.errorState.errors.firstName=="" && state.create.errorState.errors.lastName=="" )
                {
                    state.create.errorState.isValid=true
                }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(userLogin.pending, (state, action) => {

            })
            .addCase(userLogin.fulfilled, (state, action) => {
                localStorage.setItem('user',JSON.stringify( action.payload.userInfo))
                state.loginError=action.payload.error
            })
            .addCase(userLogin.rejected, (state, action) => {

            })
            .addCase(userLogout.pending, (state, action) => {

            })
            .addCase(userLogout.fulfilled, (state, action) => {

            })
            .addCase(userLogout.rejected, (state, action) => {

            })
            .addCase(createUser.pending, (state, action) => {

            })
            .addCase(createUser.fulfilled, (state, action) => {
                state.create.accessToken=action.payload.accessToken
                state.create.refreshToken=action.payload.refreshToken
                localStorage.setItem('user',JSON.stringify( action.payload.userInfo))
            })
            .addCase(createUser.rejected, (state, action) => {

            })
    }
}
)


const authActions = authSlice.actions
const authReducers = authSlice.reducer

export default authReducers
export { authActions, userLogin, createUser ,userLogout}