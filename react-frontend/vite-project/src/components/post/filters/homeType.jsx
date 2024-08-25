import {  faPerson } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export function HomeType() {

    return (
        <div className="bg-white p-3 h-11 rounded-xl flex justify-around items-center max-[700px]:hidden w-[150px]" >
            <FontAwesomeIcon icon={faPerson}/>
            <select className="focus:outline-none" id="">
                <option >Bachelor</option>
                <option > Family</option>
            </select>
        </div>
    )
}