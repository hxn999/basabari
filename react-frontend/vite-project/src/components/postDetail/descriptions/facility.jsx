import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBath, faBed, faCircleCheck, faList } from "@fortawesome/free-solid-svg-icons"



export function Facility() {

    return (
        <>
            <div className="flex items-center gap-3">
                <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1ac18f" }} /> 24/7 Electricity supply
            </div>

        </>
    )
}