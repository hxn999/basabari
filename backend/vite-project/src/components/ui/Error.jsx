import React from 'react'
import { img } from '../../assets/assets'
export function Error({text,area}) {
    return (
        <div className="col-span-3 row-span-2">
            <div className='flex flex-col items-center'>
                <img src={img.notFound} className='w-40' alt="" />
                <h1>{text} {area}</h1>
            </div>
        </div>
    )
}
