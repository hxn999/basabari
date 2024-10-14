import { faBars, faRightToBracket, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, useMatch } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { img } from '../../assets/assets.js'


export function NavBar() {
    let [classNav, setClassNav] = useState("pb-2 z-[100] sticky top-0 max-[700px]:pb-1 bg-white  pt-2 shadow-sm")

    let match = useMatch("/")
    let loggedIn = false
    const dispatch = useDispatch()
    useEffect(() => {
        if (match) {
            let newclass = "pb-2 sticky z-[100] top-0  max-[700px]:pb-2  pt-2 "
            setClassNav(newclass)
        }
        else {
            let newclass = "pb-2 sticky z-[100] top-0 max-[700px]:pb-2 bg-white pt-2  shadow-sm"
            setClassNav(newclass)
        }
    }, [match])
    let user = localStorage.getItem("user")
    let userObj = null
    if (user) {
        loggedIn = true
        userObj = JSON.parse(user)
    }

    let element = !loggedIn ? <Link to="/login"><li className="flex gap-2 items-center text-green-600 hover:text-green-700 hover:cursor-pointer hover:underline "><FontAwesomeIcon icon={faRightToBracket} /> Sign In</li></Link> : <Link to={`/profile/${userObj?.userId}`}> <li className="flex gap-2 items-center text-green-600 hover:text-green-700 hover:cursor-pointer hover:underline " ><img className='rounded-full w-8 object-cover aspect-square' src={`http://localhost:3000/${userObj.pfpSrc}`} /> <span className='max-[700px]:hidden'> {userObj?.name.split(" ")[0]}</span></li></Link>
    return (
        <>
            <header className={classNav}>
                <nav className=" flex justify-between items-center mx-auto max-w-7xl px-8 ">
                    <Link to="/">
                        <h1 className=" flex gap-2 items-center"> <img className='w-10 max-[700px]:w-8  ' src={img.logo} alt="" /> <span className='text-xl  font-bold max-[700px]:text-base'>Basa<span className="text-green-600">Bari</span></span></h1>
                    </Link>
                    <ul className="flex gap-14 items-center text-md ">
                        <Link to="/post/create">
                            <li className="btn  bg-green-400 flex rounded-full px-4 hover:cursor-pointer hover:bg-green-600 max-[700px]:btn-sm max-[700px]:text-xs max-[700px]:p-1 max-[700px]:px-3">Post a Rent</li>
                        </Link>
                        <li className="hover:text-green-600 hover:cursor-pointer hover:underline max-[700px]:hidden">Contact</li>
                        {element}
                    </ul>
                    
                </nav>
            </header>
        </>
    )
}