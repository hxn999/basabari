import { useDispatch, useSelector } from "react-redux"
import { PostFilter } from "./filters/postFilter.jsx"
import { Result } from "./homeCards/homeResult.jsx"
import { fetchPost } from "../../../redux/slice/fetchSlice.js"
import { useEffect } from "react"


export function Posts()
{
    
    const dispatch = useDispatch()
    let data = useSelector(state=>state.fetching)
    console.log(data);
    

    useEffect(()=>{
        dispatch(fetchPost({area:data.area,lt:data.lt,gt:data.gt,floor:data.floor,bed:data.bed}))
    },[dispatch,data.area,data.lt,data.gt,data.floor,data.bed])


    return(
        <>
        <PostFilter/>
        <Result/>
        </>
    )
}