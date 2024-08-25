import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBangladeshiTakaSign, faBath, faBed, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import url from "../../../assets/img/basa-pic.webp"

export function Card({data}) {

    console.log(data.images)
    return (
        <>
            <Link to="details">
                <div className="flex flex-col p-3 rounded-xl gap-3 shadow-xl  border-2 border-gray-100">
                    <img className="rounded-xl h-52" src={data.isSent ? `http://localhost:3000${data.images[0]}`:null} alt="" />
                    <div className="flex gap-4 items-center"><FontAwesomeIcon icon={faLocationDot} /> Kazipara , Mirpur</div>
                    <div className="flex gap-3 items-center flex-wrap"><FontAwesomeIcon icon={faBed} /> Bed <span
                        className="font-bold">2</span> <FontAwesomeIcon icon={faBath} /> Bath <span
                            className="font-bold">2</span>
                        <div className="flex items-center gap-3">

                            <img src="img/size.png" className="w-6 h-6" alt="" /> Floor Size <span className="font-bold">950sqft</span>
                        </div>
                    </div>
                    <div className="flex gap-3 items-center">
                        <div className="h-4 w-4 rounded-full bg-green-500"></div> Available
                    </div>
                    <div className="flex gap-2 items-center">Rent <span className="font-bold text-xl">5500</span>
                        <FontAwesomeIcon icon={faBangladeshiTakaSign} /> / <sub>month</sub></div>
                    <button className="bg-green-600 rounded-xl py-2">See Details</button>
                </div>
            </Link>
        </>
    )
}