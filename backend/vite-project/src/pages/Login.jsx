import { faRightToBracket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { TextField } from '@mui/material'
import { PasswordTwoTone } from '@mui/icons-material'
import { useLoginMutation } from '../../redux/slice/apiSlice.js'
import { toast, Toaster } from 'sonner'
import { Checkbox, CircularProgress, FormControl, FormControlLabel, InputLabel, MenuItem, Select } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import OutlinedInput from '@mui/material/OutlinedInput';


export function Login() {

    


    const textFiledSettings = {
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'green', // Default border color
            },
            '&:hover fieldset': {
                borderColor: 'green', // Border color on hover
            },
            '&.Mui-focused fieldset': {
                borderColor: 'green', // Border color when focused
            },
        },
    }


    const [ login,{data,error,isError,isLoading,isSuccess} ] = useLoginMutation()
    // let login = useSelector(state => state.auth)
    // const dispatch = useDispatch()


    const [emailPhone, setEmailPhone] = useState(null)
    const [password, setPassword] = useState(null)
    const [showPassword, setShowPassword] = useState(false)
    const [tried, setTried] = useState(null)

    const errors={
        emailPhone:"Please Enter Email of Phone number",
        password:"Please Enter your password"
    }

    function submitHandler(e) {
        e.preventDefault()
        console.log("hi");

        if(!emailPhone||!password)
        {
            setTried(true)
        }
        else{

            login({
                emailPhone,
                password
            })

        }
        
        // window.location.replace('http://localhost:5173/');
    }

    if(isSuccess)
        {
            toast.success("Logged in Successfully !!")
            localStorage.setItem('user',JSON.stringify( data.userInfo))
            window.location.replace('http://localhost:5173/');
        }
        if(isError)
        {
            // toast.error(error.data.err)
        }


    return (
        <div className='flex-1'>
            <section className='mx-auto max-w-7xl  px-8 my-16 flex flex-col items-center gap-4 flex-1'>
                <h1 className='text-center text-3xl font-bold'> Sign in to your account</h1>
                <form action="" className='flex flex-col gap-7 mt-7 justify-center items-center w-96' onSubmit={submitHandler}>

                    {/* ---------------------email phone---------------------------- */}
                    <TextField error={(!emailPhone && tried)} helperText={(!emailPhone && tried) ? errors.emailPhone : null} className='w-full' color='success' id="outlined-basic" value={emailPhone} onChange={(e) => {
                        setEmailPhone((v) => e.target.value)

                    }}
                        label={<div className='flex'> <p>Email or Phone</p></div>} variant="outlined" InputProps={{ style: { borderRadius: "10px", borderColor: "green" } }} sx={textFiledSettings} />
                    {/* ------------------------ password --------------------------------------- */}
                    <FormControl className='relative' sx={{ ...textFiledSettings, width:1,borderRadius: '16px'}} error={(!password&& tried)} InputProps={{ style: { borderRadius: "10px", borderColor: "green" } }} variant="outlined" >
                            <InputLabel htmlFor="outlined-adornment-password"><div className='flex'> <p> Password</p></div></InputLabel>
                            <p className='absolute -bottom-5 left-3 text-xs text-red-700'>{(!password && tried) ? errors.password : null}</p>
                            <OutlinedInput
                            sx={{borderRadius: '10px'}}
                                onChange={(e) => {
                                    setPassword(e.target.value)
                                }}
                                id="outlined-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={() => setShowPassword((v) => !v)}
                                            onMouseDown={(e) => e.preventDefault()}
                                            onMouseUp={(e) => e.preventDefault()}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label={<div className='flex'> <p> Password </p></div>}
                            />
                        </FormControl>

                        <p className='text-red-600'>{error?.data.err}</p>

                        {/* -------------------- sign in ----------------------------------------------- */}
                  <div className='flex'>

                    <button type='submit' className="btn w-full bg-green-400 p-3 rounded-full px-5 hover:cursor-pointer hover:bg-green-600">Sign In <FontAwesomeIcon className="text-black" icon={faRightToBracket} /></button>
                  </div>
                </form>
                <p>Don't have an account ?<Link to="/create"> <span className='text-green-500 underline hover:font-bold hover:cursor-pointer'>Create Account</span></Link></p>
                <Toaster richColors closeButton position="bottom-right" />
            </section>
        </div>
    )
}
