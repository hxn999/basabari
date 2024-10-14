import React from 'react'

export function Loading({text}) {
    return (
        <div className="col-span-3">
            <div className='flex flex-col items-center gap-8 py-10'>

                <h1 className='text-xl'>{text}</h1> <span className="loading loading-dots loading-lg bg-green-500 border border-black"></span>

            </div>
        </div>

    )
}
