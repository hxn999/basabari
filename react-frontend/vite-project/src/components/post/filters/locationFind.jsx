import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export function Location() {

    return (
        <div className="bg-white px-3 h-11 rounded-xl flex justify-start gap-4  items-center  max-[700px]:h-9 w-[238px] max-[700px]:w-[190px]">

            <FontAwesomeIcon icon={faLocationDot}/>
            <input className="w-full focus:outline-none max-[700px]:text-[12px] " type="text" name="" placeholder="Location" id=""/>

        </div>
    )
}