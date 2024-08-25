import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchPost } from "../../../redux/slice/fetchSlice"


export function PostPic()
{
    let data = useSelector(state=> state.fetching)
    if(data.isSinglePost){

        console.log(data.singlePost)
    }
    
    return(
        <>
        <section className="mx-auto max-w-7xl mt-2 px-8">
                <h1 className="my-4 text-2xl font-semibold">Flat rent in Kazipara,Mirpur</h1>
                <div className="flex gap-3 h-96 max-[700px]:flex-col max-[700px]:h-auto">
                    <div className="w-3/5 max-[700px]:w-full">
                        <img className="w-full h-full object-cover  rounded-xl" src={data.isSinglePost?`http://localhost:3000${data.singlePost.post[0].images[0]}` :null}  alt=""/>
                    </div>
                    <div
                        className="grid grid-cols-2 w-2/5 gap-3 h-96 grid-rows-3 max-[700px]:w-full max-[700px]:grid-cols-6 max-[700px]:grid-rows-none max-[700px]:h-auto">
                            {
                               data.isSinglePost? 

                                    data.singlePost.post[0].images.map((src)=>{
                                        return <div className="max-[700px]:aspect-square"><img className="w-full h-full object-cover rounded-xl" src={data.isSinglePost?`http://localhost:3000${src}` :null}  alt=""/></div>
                                    }) : null
                                }
                                
                            
                       

                    </div>
                </div>
            </section>
        </>
    )
}