
import { useSelector } from "react-redux"
import { Card } from "./card.jsx"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBangladeshiTakaSign, faBath, faBed, faLocationDot } from "@fortawesome/free-solid-svg-icons";

import url from "../../../assets/img/basa-pic.webp"


export function Result() {

    let data = useSelector(state=> state.fetching)
    return (
        <>
            <section className="mx-auto max-w-7xl mt-4 px-8">
                <h3><span className="text-green-600 font-bold">1107</span> homes <span className="text-green-600 font-bold">found </span>
                    in Kazipara ... </h3>

                <div className="grid grid-cols-3 gap-4 mt-5 max-[1024px]:grid-cols-2 max-[700px]:grid-cols-1">
            { data.post.map((e)=>{
                return <>
                <Link to={`details/${e._id}`}>
                    <div className="flex flex-col p-3 rounded-xl gap-3 shadow-xl  border-2 border-gray-100">
                        <img className="rounded-xl h-52 object-cover" src={data.isSent ? `http://localhost:3000${e.images[0]}`:null} alt="" />
                        <div className="flex gap-4 items-center"><FontAwesomeIcon icon={faLocationDot} /> Kazipara , Mirpur</div>
                        <div className="flex gap-3 items-center flex-wrap"><FontAwesomeIcon icon={faBed} />Bedroom <span
                            className="font-bold">  {data.isSent ? e.bed :null}</span> <FontAwesomeIcon icon={faBath} /> Bathroom <span
                                className="font-bold">{data.isSent ? e.bath :null}</span>
                            <div className="flex items-center gap-3">
    
                                <img src="img/size.png" className="w-6 h-6" alt="" /> Floor Size <span className="font-bold">{data.isSent ? e.floorSize :null}</span>
                            </div>
                        </div>
                        <div className="flex gap-3 items-center">
                            <div className="h-4 w-4 rounded-full bg-green-500"></div> Available
                        </div>
                        <div className="flex gap-2 items-center">Rent <span className="font-bold text-xl">{data.isSent ? e.rent :null}</span>
                            <FontAwesomeIcon icon={faBangladeshiTakaSign} /> / <sub>month</sub></div>
                        <button className="bg-green-600 rounded-xl py-2">See Details</button>
                    </div>
                </Link>
            </>
            })}

                </div>
            </section>
        </>
    )
}