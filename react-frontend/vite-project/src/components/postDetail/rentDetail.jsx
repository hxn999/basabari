import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBath, faBed, faCircleCheck, faList } from "@fortawesome/free-solid-svg-icons"
import { Verify } from "./descriptions/verify.jsx"
import { HouseDetails } from "./descriptions/houseDetails.jsx"
import { Facilities } from "./descriptions/facilities.jsx"
import { RentCard } from "./rentCard.jsx"
import { Map } from "./map.jsx"
import { RelatedPost } from "./relatedPost.jsx"
export function RentDetails() {

    return (
        <>
            <section className="mx-auto max-w-7xl mt-5 px-8">

                <div className="flex gap-3 max-[700px]:flex-col">
                    <div className="w-3/5 max-[700px]:w-full">

                        <Verify />
                        <HouseDetails />
                        <Facilities/>
                        
                    </div>
                    <RentCard/>
                </div>
                <Map/>
                <RelatedPost/>

            </section>
        </>
    )
}