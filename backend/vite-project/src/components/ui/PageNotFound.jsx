import React from 'react'
import { img } from '../../assets/assets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export function PageNotFound() {
    return (
        <div className='mx-auto max-w-7xl  px-8  flex flex-col items-center gap-4 flex-1'>
            <img src={img.page404} className='h-[50vh] ' alt="" />
            <h1 className='text-xl font-medium'>Page Not Found</h1>
           <Link to='/'><button className='btn bg-green-500 hover:bg-green-700 rounded-full'>Go to Home <FontAwesomeIcon icon={faArrowRight} /></button></Link> 
        </div>
    )
}
