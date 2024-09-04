import { faRightToBracket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { authActions, userLogin } from '../../../redux/slice/authSlice.js'
import { Link } from 'react-router-dom'


export function Login() {

    let login = useSelector(state => state.auth)
    const dispatch = useDispatch()

    function submitHandler(e) {
        e.preventDefault()
        console.log("hi");
        
        dispatch(userLogin({emailPhone:login.emailPhone,password:login.password}))
    }


    return (
        <>
            <section className='mx-auto max-w-7xl  px-8 my-16 flex flex-col items-center gap-4'>
                <h1 className='text-center text-3xl font-bold'> Sign in to your account</h1>
                <form action="" className='flex flex-col gap-7 mt-7 justify-center items-center w-96' onSubmit={submitHandler}>
                    <input className='p-4 pl-8 rounded-full border-2 border-green-400 focus:outline-none focus:shadow-inner focus:border-green-700 w-full' type="text" name="Bath" id="" placeholder='Email or Mobile' value={login.emailPhone} onChange={(e) => {
                        dispatch(authActions.setString({ key: "emailPhone", value: e.target.value }))
                    }} />
                    <input className='p-4 pl-8 rounded-full border-2 border-green-400 focus:outline-none focus:shadow-inner focus:border-green-700 w-full' type="password" name="Bath" id="" placeholder='Password' value={login.password} onChange={(e) => {
                        dispatch(authActions.setString({ key: "password", value: e.target.value }))
                    }} />
                    <p className='text-red-900'>{login.loginError}</p>
                    <button type='submit' className="btn w-full bg-green-400 p-3 rounded-full px-5 hover:cursor-pointer hover:bg-green-600">Sign In <FontAwesomeIcon className="text-black" icon={faRightToBracket} /></button>
                </form>
                <p>Don't have an account ?<Link to="/create"> <span className='text-green-500 underline hover:font-bold hover:cursor-pointer'>Create Account</span></Link></p>

            </section>
        </>
    )
}
