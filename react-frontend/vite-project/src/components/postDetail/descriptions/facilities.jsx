
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBath, faBed, faCircleCheck, faList } from "@fortawesome/free-solid-svg-icons"
import { Facility } from "./facility.jsx"


export function Facilities() {

    return (
        <>
            <div className="flex items-center gap-3 my-4 font-bold">
                <FontAwesomeIcon icon={faList} style={{ color: "#1e9471", }} size="xl" /> Facilities
            </div>
            <div className="grid grid-cols-2 gap-3 mb-5">
                <Facility/>
                <Facility/>
                <Facility/>
                <Facility/>
                <Facility/>

            </div>
            <hr />
        </>
    )
}