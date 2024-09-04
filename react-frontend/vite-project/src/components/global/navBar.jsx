import { faRightToBracket, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, useMatch } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { userLogout } from '../../../redux/slice/authSlice.js'


export function NavBar() {
    let [classNav, setClassNav] = useState("pb-3 bg-white sticky top-0 pt-3  shadow-sm")

    let match = useMatch("/")
    let loggedIn=false
    const dispatch = useDispatch()
    useEffect(() => {
        if (match) {
            let newclass = "pb-4  pt-3 "
            setClassNav(newclass)
        }
        else {
            let newclass = "pb-3 sticky bg-white pt-3 top-0 shadow-sm"
            setClassNav(newclass)
        }
    }, [match])
    let user = localStorage.getItem("user")
    let userObj=null
    if(user){
        loggedIn=true
         userObj=JSON.parse(user)
    }

    function handleLogout()
    {
        localStorage.removeItem("user")
        dispatch(userLogout())
    }
    let element=!loggedIn ? <Link to="/login"><li className="flex gap-2 items-center text-green-600 hover:text-green-700 hover:cursor-pointer hover:underline "><FontAwesomeIcon icon={faRightToBracket} /> Sign In</li></Link> : <Link to={`/profile/${userObj?.user_id}`}> <li className="flex gap-2 items-center text-green-600 hover:text-green-700 hover:cursor-pointer hover:underline " ><FontAwesomeIcon icon={faUser}  /> {userObj?.name}</li></Link>
    return (
        <>
            <header className={classNav}>
                <nav className="flex justify-between items-center mx-auto max-w-7xl px-8 ">
                    <Link to="/">
                        <h1 className="text-3xl font-bold max-[700px]:text-2xl">Basa<span className="text-green-600">Bari</span></h1>
                    </Link>
                    <ul className="flex gap-14 items-center text-md max-[700px]:hidden">
                        <Link to="/postRent">
                            <li className="btn bg-green-400 p-3 rounded-full px-5 hover:cursor-pointer hover:bg-green-600">Post a Rent</li>
                        </Link>
                        <li className="hover:text-green-600 hover:cursor-pointer hover:underline">Contact</li>
                        { element
                                }
                    </ul>
                    <button
                        className="bg-green-400 p-3 rounded-full px-5 hover:cursor-pointer hover:bg-green-600 flex items-center gap-3 hidden max-[700px]:block">
                        <i className="fa-solid fa-bars "></i> Menu </button>
                </nav>
            </header>
        </>
    )
}