import { useDispatch } from "react-redux"
import { PostFilter } from "./filters/postFilter.jsx"
import { Result } from "./homeCards/homeResult.jsx"
import { fetchPost } from "../../../redux/slice/fetchSlice.js"
import { useEffect } from "react"


export function Posts()
{
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchPost())
    },[dispatch])


    return(
        <>
        <PostFilter/>
        <Result/>
        </>
    )
}