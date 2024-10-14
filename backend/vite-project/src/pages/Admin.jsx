import React, { useState } from 'react'
import { Link, Route, Router, Routes } from 'react-router-dom'
import { AdminRoute } from '../components/AdminRoute.jsx'
import { AllUser } from '../components/admin/pages/AllUser.jsx'
import { PendUser } from '../components/admin/pages/PendUser.jsx'
import { PendPost } from '../components/admin/pages/PendPost.jsx'
import { AllPost } from '../components/admin/pages/AllPost.jsx'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function Admin() {

    const [page, setPage] = useState("pendPost")
    let content = null
    if (page == "pendPost") content = <PendPost />
    if (page == "pendUser") content = <PendUser />
    if (page == "allUser") content = <AllUser />
    if (page == "allPost") content = <AllPost />

    function handleLogout()
    {
        
        localStorage.removeItem(import.meta.env.VITE_REACT_APP_LOCAL_ADMIN)
    }

    return (
        <div className='flex-1'>


            <div className='mx-auto max-w-7xl  px-8 my-5 flex flex-col items-center gap-4 flex-1'>
                <div className='flex gap-4  bg-slate-200 p-2 rounded-full'>

                    <button onClick={() => setPage("pendPost")} className={`btn btn-sm rounded-3xl ${page == 'pendPost' ? 'bg-green-500 hover:bg-green-700 ' : "bg-green-200 hover:bg-green-500"}`}>
                        Pending Post
                    </button>


                    <button onClick={() => setPage("pendUser")} className={`btn  btn-sm rounded-3xl ${page == 'pendUser' ? 'bg-green-500 hover:bg-green-700 ' : "bg-green-200 hover:bg-green-500"}`}>
                        Pending User
                    </button>


                    <button onClick={() => setPage("allPost")} className={`btn  btn-sm rounded-3xl ${page == 'allPost' ? 'bg-green-500 hover:bg-green-700 ' : "bg-green-200 hover:bg-green-500"}`}>
                        All Post
                    </button>


                    <button onClick={() => setPage("allUser")} className={`btn  btn-sm rounded-3xl ${page == 'allUser' ? 'bg-green-500 hover:bg-green-700 ' : "bg-green-200 hover:bg-green-500"}`}>
                        All User
                    </button>

                </div>

                {/* -------------- selected page ------------------ */}
                {content}
            <div className='flex justify-end'>

                <button className="btn bg-red-400 p-3 rounded-full px-5 hover:cursor-pointer hover:bg-red-600 mt-5" onClick={handleLogout} > Log Out<FontAwesomeIcon icon={faRightFromBracket} /></button>
            </div>
            </div>

        </div>
    )
}
