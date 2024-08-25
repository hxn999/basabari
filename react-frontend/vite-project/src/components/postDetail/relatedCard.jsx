
import { faBangladeshiTakaSign, faBath, faBed, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export function RelatedCard()
{

    return(
        <>
         <div className="flex flex-col p-3 rounded-md gap-3 shadow-md border-2 border-gray-100"  alt="">
                <div className="flex gap-4 items-center"><FontAwesomeIcon icon={faLocationDot}/>Kazipara , Mirpur</div>
                <div className="flex gap-3 items-center flex-wrap"><FontAwesomeIcon icon={faBed}/> Bed <span
                        className="font-bold">2</span> <FontAwesomeIcon icon={faBath}/> Bath <span
                        className="font-bold">2</span>
                </div>
                <div className="flex gap-3 items-center">
                    <div className="h-4 w-4 rounded-full bg-green-500"></div> Available
                </div>
                <div className="flex gap-2 items-center">Rent <span className="font-bold text-xl">5500</span> <FontAwesomeIcon icon={faBangladeshiTakaSign}/> / <sub>month</sub></div>
                <button className="bg-green-600 rounded-md py-2">See Details</button>
            </div>
        </>
    )
}