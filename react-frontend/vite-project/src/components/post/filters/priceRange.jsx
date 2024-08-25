import { faArrowRight, faBangladeshiTakaSign, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export function Price() {

    return (
        <div className="bg-white p-2 pl-3 rounded-xl h-11  flex gap-3 items-center max-[700px]:h-9 max-[700px]:text-[12px] w-[365px] max-[700px]:w-max">
            <FontAwesomeIcon icon={faBangladeshiTakaSign}/>
            Price Range<i className="fa-solid fa-caret-left fa-flip-horizontal"></i>
            <input className="focus:outline-none bg-slate-200 text-center w-20 rounded-lg p-1 max-[700px]:text-[12px] max-[700px]:w-14" type="number"
                min="1000"  name="" id="" />
            <FontAwesomeIcon icon={faArrowRight}/>
            <input className="focus:outline-none bg-slate-200 text-center w-20 rounded-lg p-1 max-[700px]:text-[12px] max-[700px]:w-14" type="number"
                min="1000" name="" id="" />
        </div>
    )
}