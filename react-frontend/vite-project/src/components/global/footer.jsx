import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import {faFacebook}
import { faCaretRight } from "@fortawesome/free-solid-svg-icons"
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { useMatch } from "react-router-dom"
import { useEffect, useState } from "react"


export function Footer() {
    let [classN,setClassN] = useState("bottom-0  w-full")

    let match = useMatch("/")
    const line =  <hr className="mt-6"/>
    useEffect(()=>{
        if(match){
            let newclass = "bottom-0 absolute w-full"
            setClassN(newclass)
        }
        else{
            let newclass = "bottom-0 w-full"
            setClassN(newclass)
        }
    },[match])

    return (
        <>
        {match ? null :line}
            <footer className={classN}>
                <div
                    className="mx-auto  max-w-7xl px-8 flex justify-between items-center my-6 max-[700px]:flex-col max-[700px]:gap-5 ">

                    <ul className="flex gap-10">
                        <li className="hover:text-green-600 hover:cursor-pointer hover:underline">About Us</li>
                        <li className="hover:text-green-600 hover:cursor-pointer hover:underline">Our Policy</li>
                    </ul>
                    <div className="flex items-center gap-3">
                        Follow Us On
                        <FontAwesomeIcon icon={faCaretRight} />                        
                        <div className="flex gap-4">
                            <FontAwesomeIcon icon={faFacebook} className="hover:text-blue-700  hover:cursor-pointer" size="xl" />
                            <FontAwesomeIcon icon={faInstagram} className="hover:text-red-400 hover:cursor-pointer" size="xl" />
                            <FontAwesomeIcon icon={faLinkedin} className="hover:text-blue-900 hover:cursor-pointer" size="xl" />
                            
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}