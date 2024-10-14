import { PostFilter } from "../components/search/postFilter.jsx"
import { useEffect } from "react"
import { Result } from "../components/search/Result.jsx"


export function Search()
{
    
 


    return(
        <div className="flex-1   pt-2">
            <PostFilter />
            <Result/>
        </div>
    )
}