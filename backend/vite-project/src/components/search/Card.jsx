import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBangladeshiTakaSign, faBath, faBed, faClock, faLocationDot, faPersonDress, faUser, faUsers, faVenus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import moment from "moment/moment";


export function Card({ post }) {
    const dispatch = useDispatch()
    const [type, setType] = useState("Any")
    let time = moment(post?.date)
    const batchelor = "Bachelor"
    const sublet = "Sublet"
    const family = "Family"

    useEffect(() => {


        switch (post?.type) {
            case batchelor:
                setType(<div className=""><FontAwesomeIcon icon={faUser} /> Bachelor</div>)
                break;
            case family:
                setType(<div><FontAwesomeIcon icon={faUsers} />  Family</div>)
                break;
            case "SubletF":
                setType(<div className=""><FontAwesomeIcon icon={faPersonDress} />  <FontAwesomeIcon icon={faVenus} />Female Room </div>)
                break;
            case sublet:
                setType(<div className=""><FontAwesomeIcon icon={faUser} /> Sublet</div>)
                break;

            default:
                break;
        }
    }, [])

    return (
        <>
            <Link onClick={()=> window.scrollTo({ top: 0, left: 0,behavior:"instant" })} to={`/post/${post._id}`}>
                <div className="flex flex-col p-3 rounded-xl gap-3 shadow-xl relative border-2 border-gray-100 ">

                    <div className="absolute top-8 right-8 bg-green-500 p-1 rounded-md text-xs">{type}</div>

                    <img className="rounded-xl h-52 object-cover" src={`http://localhost:3000${post.images[0]}`} alt="" />

                    <div className="flex gap-4 justify-between items-center font-bold">
                        <div className="flex items-center gap-2">
                            <FontAwesomeIcon icon={faLocationDot} /> {post.area}
                        </div>
                        <p className="text-xs font-light flex items-center gap-1" >
                            <FontAwesomeIcon icon={faClock} size="" />{post.date ? time.fromNow() : "Recent"}
                        </p>
                    </div>
                    <div className="flex gap-3 items-center flex-wrap">
                        <FontAwesomeIcon icon={faBed} />Bedroom <span className="font-bold">  {post.bed}</span>
                        <FontAwesomeIcon icon={faBath} /> Bathroom <span className="font-bold">{post.bath}</span>
                        <div className="flex items-center gap-3">

                            <img src="img/size.png" className="w-6 h-6" alt="" /> Floor Size <span className="font-bold">{post.floorSize} sqft</span>
                        </div>
                    </div>
                    <div className="flex gap-3 items-center">
                        <div className={post.available ? "h-4 w-4 rounded-full bg-green-500" : "h-4 w-4 rounded-full bg-red-500"}></div>{post.available ? "Available" : "Booked"}
                    </div>
                    <div className="flex gap-2 items-center">Rent <span className="font-bold text-xl">{post.rent}</span>
                        <FontAwesomeIcon icon={faBangladeshiTakaSign} /> / <sub>month</sub></div>
                    <button className="btn flex hover:cursor-pointer bg-green-500 hover:bg-green-700 rounded-xl py-2">See Details</button>
                </div>
            </Link>
        </>
    )
}