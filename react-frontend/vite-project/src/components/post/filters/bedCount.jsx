import { faBed } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export function Bed() {

    return (
        <div className="bg-white p-3 h-11 rounded-xl flex justify-around items-center gap-2 max-[700px]:hidden">
            <FontAwesomeIcon icon={faBed}/>
            Bedroom
            <input className="focus:outline-none bg-slate-200 text-center w-15 rounded-xl p-1" type="number"
                min="1"  max="5" name="" id=""/>
        </div>
    )
}