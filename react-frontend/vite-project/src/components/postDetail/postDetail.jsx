import { useDispatch } from "react-redux"
import { PostPic } from "./postPic.jsx"
import { RentDetails } from "./rentDetail.jsx"
import { fetchPost, singlePost } from "../../../redux/slice/fetchSlice.js"
import { useEffect } from "react"
import { useParams } from "react-router-dom"



export function PostDetail() {

    const dispatch = useDispatch()
    let params = useParams()
    console.log(params)

    useEffect(()=>{
        dispatch(singlePost(params.post_id))
    },[dispatch])

    return (
        <>
            <PostPic/>
            <RentDetails/>

        </>
    )
}