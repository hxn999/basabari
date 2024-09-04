import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userLogout } from '../../../redux/slice/authSlice.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBangladeshiTakaSign, faBath, faBed, faHouse, faLocationCrosshairs, faMapLocationDot, faRightFromBracket, faRightToBracket } from '@fortawesome/free-solid-svg-icons'

import { PostedCard } from './postedCard.jsx'
import { fetchingActions, profile, singlePost, updatePost } from '../../../redux/slice/fetchSlice.js'
import { useParams } from 'react-router-dom'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons/faLocationDot'
import { Link } from 'react-router-dom'
import { FaRightFromBracket } from 'react-icons/fa6'
import { formActions } from '../../../redux/slice/formSlice.js'

export function Profile() {
    const dispatch = useDispatch()
    let user = localStorage.getItem('user')
    let params = useParams()

    let userObj = JSON.parse(user)
    function handleLogout() {
        localStorage.removeItem("user")
        dispatch(userLogout())
    }

    let data = useSelector(state => state.fetching)

    function handleEdit(id) {
        dispatch(singlePost(id))
        dispatch(formActions.setValue({ key: "bath", value: fetchState?.singlePost?.post[0].bed }))
    }
    useEffect(() => {

        dispatch(profile(params.profileId))



    }, [dispatch])
    console.log(data.profile.userPost)

    return (
        <>
            <section className='mx-auto max-w-7xl mt-8 px-8 '>
                {/* info */}
                <div className='flex gap-8'>
                    <div className='w-32 aspect-square rounded-full'>

                        <img src={`http://localhost:3000/${userObj.imgSrc}.jpg`} alt="" className='w-full h-full object-cover rounded-full' />
                    </div>

                    <div className='pt-4 flex flex-col gap-4'>
                        <h1 className='text-2xl font-medium'>{userObj?.name}</h1>
                        <div className='grid grid-cols-2 gap-10'>
                            <p>
                                <FontAwesomeIcon icon={faLocationCrosshairs} /> <span className='font-bold'> Address</span> : {data.profile?.user?.address}
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faLocationCrosshairs} /> <span className='font-bold'> Area</span> : {data.profile?.user?.area}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="my-5 flex items-center gap-3"><FontAwesomeIcon icon={faHouse} />Your Posted Homes</div>
                <div className="grid grid-cols-4 gap-3 max-[700px]:grid-cols-2">

                    {
                        
                        data.profile?.userPost?.map((post,i) => {
                            
                            return (
                                <>

                                    <div className="flex flex-col p-3 rounded-xl gap-3 shadow-md border-2 border-gray-100" alt="">
                                        <img className="rounded-xl h-32 object-cover" src={`http://localhost:3000${post?.images[0]}`} alt="" />
                                        <div className="flex gap-4 items-center"><FontAwesomeIcon icon={faLocationDot} />{post?.area}</div>
                                        <div className="flex gap-3 items-center flex-wrap"><FontAwesomeIcon icon={faBed} /> Bed <span
                                            className="font-bold">{post.bed}</span> <FontAwesomeIcon icon={faBath} /> Bath <span
                                                className="font-bold">{post.bath}</span>
                                        </div>
                                        <div className="flex gap-3 items-center">
                                            <div className={data.profile.userPost[i].available? "h-4 w-4 rounded-full bg-green-500" : "h-4 w-4 rounded-full bg-red-500"}></div>{data.profile.userPost[i].available ? "Available" : "Booked"}
                                        </div>
                                        <div className="flex gap-2 items-center">Rent <span className="font-bold text-xl">{post.rent}</span> <FontAwesomeIcon icon={faBangladeshiTakaSign} /> / <sub>month</sub></div>
                                        <Link to={`/posts/edit/${post?._id}`} relative='/'>
                                            <button className="bg-green-600 rounded-xl py-2 w-full" onClick={() => handleEdit(post?._id)}>Edit Post</button>
                                        </Link>
                                        <Link to={`/posts/details/${post?._id}`} relative='/'>
                                            <button className="bg-green-600 rounded-xl py-2 w-full">View Post</button>
                                        </Link>

                                        {
                                            post.available ? <button className="bg-red-400 rounded-xl py-2 w-full" onClick={() =>{ dispatch(updatePost({ id: post._id, data: { available: false } }))
                                            dispatch(fetchingActions.update({index:i,key:"available",value:false}))
                                        }}>Disable Post</button>
                                                : <button className="bg-green-400 rounded-xl py-2 w-full" onClick={() =>{dispatch(updatePost({ id: post._id, data: { available: true } }))
                                                dispatch(fetchingActions.update({index:i,key:"available",value:true}))
                                                 } }>Enable Post</button>
                                        }

                                    </div>

                                </>
                            )
                        })
                    }


                </div>

                <div className='flex justify-end'>

                    <button className="btn bg-red-400 p-3 rounded-full px-5 hover:cursor-pointer hover:bg-red-600 mt-5" onClick={handleLogout} > Log Out<FontAwesomeIcon icon={faRightFromBracket} /></button>
                </div>
            </section>



        </>
    )
}
