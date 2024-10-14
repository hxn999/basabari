
import { faBangladeshiTakaSign, faBath, faBed, faClock, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import { useEditPostMutation } from "../../../redux/slice/apiSlice";
import { Toaster ,toast} from "sonner";


export function PostedCard({ post }) {
    const [editPost, { data, error, isError, isLoading, isSuccess }] = useEditPostMutation()

    if(isSuccess)
    {
        toast.success("Post status changed !")
    }
    if(isError)
    {
        toast.error("Cannot change post status")
    }
    return (

        <>
            <div className="flex flex-col p-3 rounded-xl gap-3 shadow-md border-2 border-gray-100" alt="">
                {/* ----------cover image------------------- */}
                <img className="rounded-xl h-32 object-cover" src={`http://localhost:3000${post?.images[0]}`} alt="" />
                {/* --------------- area and passed time ---------------------- */}
                <div className="flex g justify-between items-center"><span className='flex gap-2 items-center'><FontAwesomeIcon icon={faLocationDot} />{post?.area}</span>
                    <p className='flex gap-2 items-center'><FontAwesomeIcon icon={faClock} />{post.date ? moment(post.date).fromNow() : "Recent"}</p>
                </div>
                {/* ----------------infos------------------------------------- */}
                <div className="flex gap-3 items-center flex-wrap"><FontAwesomeIcon icon={faBed} /> Bed <span
                    className="font-bold">{post.bed}</span> <FontAwesomeIcon icon={faBath} /> Bath <span
                        className="font-bold">{post.bath}</span>
                </div>

                {/* ---------------availability-------------------------------- */}
                <div className="flex gap-3 items-center">
                    <div className={post.available ? "h-4 w-4 rounded-full bg-green-500" : "h-4 w-4 rounded-full bg-red-500"}></div>{post.available ? "Available" : "Booked"}
                </div>
                <div className="flex gap-2 items-center">Rent <span className="font-bold text-xl">{post.rent}</span> <FontAwesomeIcon icon={faBangladeshiTakaSign} /> / <sub>month</sub></div>

                <Link to={`/post/${post?._id}`} relative='/'>
                    <button className="bg-green-600 rounded-xl py-2 w-full btn hover:bg-green-700">View Post</button>
                </Link>
                <Link to={`/post/edit/${post?._id}`} relative='/'>
                    <button className="bg-green-600 rounded-xl py-2 w-full btn hover:bg-green-700">Edit Post</button>
                </Link>

                {
                    post.available ? <button className="bg-red-400 rounded-xl py-2 w-full btn hover:bg-red-700" onClick={() => {
                        editPost({
                            _id:post._id,
                            data:{
                                available:false
                            }
                        })
                    }}>Disable Post</button>
                        : <button className="bg-green-400 rounded-xl py-2 w-full btn hover:bg-green-700" onClick={() => {
                            editPost({
                                _id:post._id,
                                data:{
                                    available:true
                                }
                            })
                        }}>Enable Post</button>
                }

            <Toaster richColors closeButton position="bottom-right" />
            </div>
        </>

    )
}