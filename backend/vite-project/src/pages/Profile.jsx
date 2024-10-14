import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBangladeshiTakaSign, faBath, faBed, faClock, faFile, faFileImage, faHouse, faLocationCrosshairs, faMapLocationDot, faPhone, faRightFromBracket, faRightToBracket } from '@fortawesome/free-solid-svg-icons'
import Skeleton from '@mui/material/Skeleton';
import { PostedCard } from '../components/profile/PostedCard.jsx'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import {  useLogoutMutation, usePfpPostQuery } from '../../redux/slice/apiSlice.js'
import { Loading } from '../components/ui/Loading.jsx'
import { Error } from '../components/ui/Error.jsx'
import { toast, Toaster } from 'sonner';


export function Profile() {
    const [logout,{data:logoutData,error:logoutError,isError:isLogoutErr,isSuccess:isLogoutSuccess}]= useLogoutMutation()
    let params = useParams()
    const { data, isError, error, isLoading, isSuccess } = usePfpPostQuery(params.userId)
    let user = localStorage.getItem('user')
    let userObj = JSON.parse(user)
    let profilePost = null
    let documents = null


    function handleLogout() {
        logout()
    }


    if (isLoading) {
        profilePost = <Loading text={"Getting Your Posts"} />
    }
    if (isSuccess && data?.posts.length > 0) {
        profilePost = <div className="grid grid-cols-4 max-[1024px]:grid-cols-2 gap-3 max-[700px]:grid-cols-1">
            {
                [...data.posts].sort((a, b) => b.date - a.date).map((post) => <PostedCard post={post} />)
            }
        </div>



    }
    if (isSuccess && data.user.evidence) {
        documents = <div className='flex gap-4 flex-wrap'>
            {data.user.evidence.map((doc, i) => <>
                <img onClick={() => document.getElementById(`my_modal_${i}`).showModal()} className='w-32 h-32 object-cover rounded-xl hover:cursor-pointer' src={`http://localhost:3000${doc}`} />
                <dialog id={`my_modal_${i}`} className="modal">
                    <div className="modal-box w-11/12 max-w-5xl">
                        <h3 className="font-bold text-lg flex justify-between">Your Document                          <form method="dialog">
                            {/* if there is a button, it will close the modal */}
                            <button className="btn">Close</button>
                        </form></h3>
                        <p className="py-4">Click the button below to close</p>
                        <img className='w-full' src={`http://localhost:3000${doc}`} alt="" />
                        <div className="modal-action">

                        </div>
                    </div>
                </dialog>
            </>)}
        </div>
    }
    if(isSuccess&&data.user.evidence.length==0)
    {
        documents = <Error text={"You Have No Documents"}/>
    }
    if (isSuccess && data.posts.length == 0) {
        profilePost = <Error text={"You Did not Uploaded any Post"} />

    }
    if (isError) {
        profilePost = <Error text={error.data.err} />
    }

    if(isLogoutErr)
    {
        toast.error("Logout Failed!")
        console.log(logoutError.data.err)
    }
    if(isLogoutSuccess)
    {
        localStorage.removeItem("user")
        window.location.replace('http://localhost:5173/');
    }


    return (
        <div className='flex-1  '>
            <section className='mx-auto max-w-7xl mt-8 px-8 '>
                {/* info */}
                <div className='flex gap-10 max-[900px]:flex-col w-full'>

                    <div className='flex gap-10'>

                        {/* -------------------------- profile picture ------------------------------------- */}
                        <img src={`http://localhost:3000/${userObj.pfpSrc}`} alt="" className='w-32 h-32 object-cover max-[700px]:w-24 max-[700px]:h-24 rounded-full' />


                        <h1 className='text-2xl max-[800px]:text-base font-medium flex  flex-col pt-4 gap-5 '>
                            {/* ------------ name ------------------------------- */}
                            <div className='flex gap-5 items-center max-[800px]:gap-2 '>{userObj?.name}

                                {/* ------------- checking verified or not ----------------------------------------     */}
                                {!data?.user.isVerified ?
                                    <div className='text-slate-700 flex border border-slate-800 text-[8px] leading-[8px] px-2 rounded-3xl p-1'>
                                        Verification Pending</div>
                                    : <div className='text-green-600 border-2 leading-[8px] text-[8px]  border-green-500 rounded-3xl p-1'>
                                        Verified</div>}
                            </div>
                            <Link to={`/profile/edit`}>  <button className='btn btn-sm text-xs rounded-3xl'  >Edit Profile</button></Link>
                        </h1>

                    </div>
                    {/* ------------------ owner info address, phone , area------------------------------- */}
                    <div className='pt-4 flex flex-col gap-4 flex-1'>
                        <div className='grid grid-cols-2 gap-10 max-[800px]:gap-5'>
                            {isLoading ? <Skeleton className='col-span-2' /> :
                                <p className='col-span-2 max-[800px]:text-xs'>
                                    <FontAwesomeIcon icon={faLocationCrosshairs} /> <span className='font-bold'> Address</span> : {data?.user.address}
                                </p>}
                            {isLoading ? <Skeleton className='' /> :
                                <p className='max-[800px]:text-xs'>
                                    <FontAwesomeIcon icon={faLocationCrosshairs} /> <span className='font-bold'> Area</span> : {data?.user.area}
                                </p>
                            }
                            {isLoading ? <Skeleton className='' /> :
                                <p className='max-[800px]:text-xs'>
                                    <FontAwesomeIcon icon={faPhone} /> <span className='font-bold'> Phone</span> : {data?.user.phone}
                                </p>
                            }
                        </div>
                    </div>
                </div>

                <div className="my-5 flex items-center gap-3"><FontAwesomeIcon icon={faHouse} />My Posted Homes</div>

                {/* ------------------ all post of owner -------------------- */}
                {profilePost}


                <div className="my-5 flex items-center gap-3"><FontAwesomeIcon icon={faFile} />My Documents <span className='text-xs text-slate-600'>(click to Open)</span></div>
                {documents}

                <div className='flex justify-end'>

                    <button className="btn bg-red-400 p-3 rounded-full px-5 hover:cursor-pointer hover:bg-red-600 mt-5" onClick={handleLogout} > Log Out<FontAwesomeIcon icon={faRightFromBracket} /></button>
                </div>
            </section>

<Toaster richColors closeButton position="bottom-right" />

        </div>
    )
}
