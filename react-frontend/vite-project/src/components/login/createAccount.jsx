import { faPlug, faPlus, faRightToBracket, faUpload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { AreaSelect } from '../postRent/areaSelect.jsx'
import { authActions, createUser, userLogin } from '../../../redux/slice/authSlice.js'
import { useCookies } from 'react-cookie'
import FileBase64 from 'react-file-base64';




export function CreateAccount() {

    let create = useSelector(state => state.auth.create)
    const dispatch = useDispatch()
    console.log(create);
    const [imgSrc,setImgSrc]=useState("")

    let [cookie, setCookie] = useCookies(['name'])
    function submitHandler(e) {

        e.preventDefault()
        // setCookie('hasan','hasibul',

        // )
        console.log("--------------------");

        // console.log(document.cookie);

        if (create.errorState.isValid) {
            dispatch(createUser(create))
        }
    }
    useEffect(() => {
        const input = document.querySelector("input[type='file']")
        input.accept = "image/*"
        input.id = "house"
        // console.log(input)
      

        


    }, [])

    return (
        <>
            <section className='mx-auto max-w-7xl  px-8 my-16 flex flex-col items-center gap-4'>
                <h1 className='text-center text-3xl font-bold'> Create Your Account</h1>
                <form action="" className='flex flex-col gap-7 mt-7 justify-center items-center w-full' onSubmit={submitHandler}>
                <div className='flex flex-col gap-4'>


                    <label className={`hover:cursor-pointer p-10 flex border-2 border-dashed rounded-3xl border-green-400 gap-5 justify-center items-center font-semibold text-2xl `} htmlFor="house"><FontAwesomeIcon className={`text-green-700 `} icon={faUpload} size="2xl" />Upload Your Images Here  <span className='text-red-700 text-lg'>*</span> </label>
                    <p className='pl-8 error text-lg text-red-700'>{}</p>
                    <FileBase64
                        className="bg-blue-700"
                        type="file"
                        multiple={false}
                        onDone={(e) => {

                            setImgSrc(e.base64)
                            dispatch(authActions.setCrString({ key: "pfp", value: e.base64 }))
                        }} />
                    <div className='grid grid-cols-8 gap-3' >
                        <img src={imgSrc} alt="" className='h-10 w-10' />


                    </div>
                </div>
                    <div className='grid grid-cols-2 gap-4 w-full'>


                        <div>

                            <input className='p-4 pl-8 rounded-full border-2 border-green-400 focus:outline-none focus:shadow-inner focus:border-green-700 w-full' type="text" name="Bath" id="" placeholder='First Name' value={create.firstName} onChange={(e) => {
                                dispatch(authActions.setCrString({ key: "firstName", value: e.target.value }))
                                dispatch(authActions.createValidate())
                            }} />
                            <p className='pl-8 error text-xs text-red-700'>{create.errorState.errors.firstName}</p>
                        </div>

                        <div>

                            <input className='p-4 pl-8 rounded-full border-2 border-green-400 focus:outline-none focus:shadow-inner focus:border-green-700 w-full' type="text" name="Bath" id="" placeholder='Last Name' value={create.lastName} onChange={(e) => {
                                dispatch(authActions.setCrString({ key: "lastName", value: e.target.value }))
                                dispatch(authActions.createValidate())
                            }} />
                            <p className='pl-8 error text-xs text-red-700'>{create.errorState.errors.lastName}</p>
                        </div>
                    </div>
                    <div className='w-full flex flex-col gap-1'>

                        <input className='p-4 pl-8 rounded-full border-2 border-green-400 focus:outline-none focus:shadow-inner focus:border-green-700 w-full' type="text" name="Bath" id="" placeholder='Full Address' value={create.address} onChange={(e) => {
                            dispatch(authActions.setCrString({ key: "address", value: e.target.value }))
                            dispatch(authActions.createValidate())
                        }} />
                        <p className='pl-8 error text-xs text-red-700'>{create.errorState.errors.address}</p>
                    </div>
                    <div className='w-full flex flex-col gap-1'>

                        <AreaSelect />
                        <p className='pl-8 error text-xs text-red-700'>{create.errorState.errors.area}</p>
                    </div>
                    <div className='w-full flex flex-col gap-1'>

                        <input className='p-4 pl-8 rounded-full border-2 border-green-400 focus:outline-none focus:shadow-inner focus:border-green-700 w-full' type="text" name="Bath" id="" placeholder='Enter Your Email' value={create.email} onChange={(e) => {
                            dispatch(authActions.setCrString({ key: "email", value: e.target.value }))
                            dispatch(authActions.createValidate())
                        }} />
                        <p className='pl-8 error text-xs text-red-700'>{create.errorState.errors.email}</p>
                    </div>
                    <div className='w-full flex flex-col gap-1'>

                        <input className='p-4 pl-8 rounded-full border-2 border-green-400 focus:outline-none focus:shadow-inner focus:border-green-700 w-full' type="text" name="Bath" id="" placeholder='Enter Your Mobile Phone Number' value={create.phone} onChange={(e) => {
                            dispatch(authActions.setCrString({ key: "phone", value: e.target.value }))
                            dispatch(authActions.createValidate())
                        }} />
                        <p className='pl-8 error text-xs text-red-700'>{create.errorState.errors.phone}</p>
                    </div>
                    <div className='w-full flex flex-col gap-1'>

                        <input className='p-4 pl-8 rounded-full border-2 border-green-400 focus:outline-none focus:shadow-inner focus:border-green-700 w-full' type="text" name="Bath" id="" placeholder='Create Password' value={create.password} onChange={(e) => {
                            dispatch(authActions.setCrString({ key: "password", value: e.target.value }))
                            dispatch(authActions.createValidate())
                        }} />
                        <p className='pl-8 error text-xs text-red-700'>{create.errorState.errors.password}</p>
                    </div>
                    <button type='submit' className="btn w-full bg-green-400 p-3 rounded-full px-5 hover:cursor-pointer hover:bg-green-600">Create Account <FontAwesomeIcon className="text-black border-2 border-black p-1 rounded-full aspect-square" icon={faPlus} /></button>
                </form>
                <p>Already have an account ?<Link to="/login"> <span className='text-green-500 underline hover:font-bold hover:cursor-pointer'>Sign In</span></Link></p>

            </section>
        </>
    )
}
