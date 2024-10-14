import { faClock, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import moment from 'moment'
import React from 'react'
import { toast, Toaster } from 'sonner'
import { useAdminUserEditMutation } from '../../../../redux/slice/apiSlice.js'
import { Link } from 'react-router-dom'

export function AdminUserCard({ user }) {

    const [adminUserEdit,{data,error,isLoading,isSuccess,isError }] = useAdminUserEditMutation()
    
    if(isSuccess)
        {
            toast.success("Post status changed !")
        }
        if(isError)
        {
            toast.error("Cannot change post status")
        }

    return (
        <div className="flex flex-col p-3 rounded-xl gap-3 shadow-md border-2 border-gray-100" alt="">
            {/* ----------cover image------------------- */}
            <img className="rounded-xl h-32 object-cover" src={`http://localhost:3000${user.pfpSrc}`} alt="" />
           
            <div className="flex g justify-between items-center"><span className='flex gap-2 items-center'><FontAwesomeIcon icon={faLocationDot} />{user?.area}</span>
                <p className='flex gap-2 items-center'><FontAwesomeIcon icon={faClock} />{user.date ? moment(user.date).fromNow() : "Recent"}</p>
            </div>
            {/* ----------------infos------------------------------------- */}
            {/* <div className="flex gap-3 items-center flex-wrap"><FontAwesomeIcon icon={faBed} /> Bed <span
                className="font-bold">{user.bed}</span> <FontAwesomeIcon icon={faBath} /> Bath <span
                    className="font-bold">{user.bath}</span>
            </div> */}
            <p>Name : {user.name}</p>
            <p>User Id : {user.userId}</p>
            <p>Phone : {user.phone}</p>

            {/* ---------------availability-------------------------------- */}
            {/* <div className="flex gap-3 items-center">
                <div className={user.available ? "h-4 w-4 rounded-full bg-green-500" : "h-4 w-4 rounded-full bg-red-500"}></div>{user.available ? "Available" : "Booked"}
            </div> */}
            {/* <div className="flex gap-2 items-center">Rent <span className="font-bold text-xl">{user.rent}</span> <FontAwesomeIcon icon={faBangladeshiTakaSign} /> / <sub>month</sub></div> */}

            <Link to={`/admin${import.meta.env.VITE_REACT_APP_ADMIN_URL}/profile/${user.userId}`} relative='/'>
                <button className="bg-green-600 rounded-xl py-2 w-full btn hover:bg-green-700">View user</button>
            </Link>
            <Link to={`/admin${import.meta.env.VITE_REACT_APP_ADMIN_URL}/profile/edit/${user.userId}`} relative='/'>
                <button className="bg-green-600 rounded-xl py-2 w-full btn hover:bg-green-700">Edit user</button>
            </Link>

            {
                // user.available ? <button className="bg-red-400 rounded-xl py-2 w-full btn hover:bg-red-700" onClick={() => {
                //     adminuserEdit({
                //         _id: user._id,
                //         data: {
                //             available: false
                //         }
                //     })
                // }}>Disable user</button>
                //     : <button className="bg-green-400 rounded-xl py-2 w-full btn hover:bg-green-700" onClick={() => {
                //         adminuserEdit({
                //             _id: user._id,
                //             data: {
                //                 available: true
                //             }
                //         })
                //     }}>Enable user</button>
            }
            {
                user.isVerified ? <button className="bg-red-400 rounded-xl py-2 w-full btn hover:bg-red-700" onClick={() => {
                    adminUserEdit({
                        userId: user.userId,
                        data: {
                            isVerified: false
                        }
                    })
                }}>Deny Verification</button>
                    : <button className="bg-green-400 rounded-xl py-2 w-full btn hover:bg-green-700" onClick={() => {
                        adminUserEdit({
                            userId: user.userId,
                            data: {
                                isVerified: true
                            }
                        })
                    }}>Verify user</button>
            }

            <Toaster richColors closeButton position="bottom-right" />
        </div>
    )
}
