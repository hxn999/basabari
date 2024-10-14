import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useGetSinglePostQuery } from '../../redux/slice/apiSlice.js'
import { Error } from '../components/ui/Error.jsx'
import { Loading } from '../components/ui/Loading.jsx'
import { PostPic } from '../components/post/postPic.jsx'
import { RentCard } from '../components/post/rentCard.jsx'
import { RentDetails } from '../components/post/RentDetail.jsx'
import { Amenities } from '../components/post/Amenities.jsx'

export function Post() {
    const [mobile, setMobile] = useState()
    let _id = useParams().postId
    let content = null
    const { data, error, isSuccess, isError, isLoading } = useGetSinglePostQuery(_id)

    console.log(data)


    // media query

    function checkMobile(m) {
        if (m.matches) {
            setMobile(true)
        }
        else {
            setMobile(false)
        }
    }
    let media = window.matchMedia("(max-width: 1024px)")
    media.addEventListener("change", checkMobile)
    useEffect(() => {
        checkMobile(media)
    }, [])



    // setting content according to server response

    if (isLoading) {
        content = <Loading text={"Fetching Post"} />
    }
    else if (isError) {
        content = <Error text={"Failed to load your post"} />
    }
    else if (isSuccess) {
        const { address, advance, amenities, area, available, balcony, bed, bath, date, description, dining, living, fbLink, floorSize, images, impression, lat, long, postId, rent, rentDate, type, utilityBills } = data.singlePost
        content =

            <>
                <div className='w-full flex gap-5 overflow-y-auto'>

                    <PostPic area={area} imgs={images} />

                    { mobile ? null : <RentCard mobile={mobile} impression={impression} advance={advance} date={date} rentDate={rentDate} available={available} owner={data.owner} rent={rent} utility={utilityBills} /> }
                </div>


                <div className='w-full flex  gap-5 max-[900px]:flex-col-reverse'>
                    <div className=' flex flex-col max-[1024px]:flex-1 w-2/3 max-[900px]:w-full  mt-5'>
                        <RentDetails bed={bed} bath={bath} floorSize={floorSize} balcony={balcony} living={living} dining={dining} description={description}/>
                        <Amenities amenities={amenities} />
                    </div>
                    { !mobile ? null : <RentCard mobile={mobile} impression={impression} advance={advance} date={date} rentDate={rentDate} available={available} owner={data.owner} rent={rent} utility={utilityBills} /> }
                </div>
            </>
    }




    return (
        <div className='flex-1'>
            <div className='mx-auto max-w-7xl mt-2 px-8'>

                {/* ------------------ breadcrumbs-----------------------------------  */}
                <div className="breadcrumbs text-sm">
                    <ul>
                        <li className='hover:text-green-500'><Link to='/'>Home</Link></li>
                        <li className='hover:text-green-500'><Link to='/search'>Search</Link></li>
                        <li className='hover:text-green-500'>{isSuccess ? data.singlePost.area : null}</li>
                        <li>{isSuccess ? (data.singlePost.description?.length > 20 ? data.singlePost.description.slice(0,20) : "Home rent") : "Flat rent"}</li>
                    </ul>
                </div>


                {content}


            </div>
        </div>
    )
}
