import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBath, faBed, faCircleCheck, faCircleInfo, faCouch, faCube, faList, faUtensils } from "@fortawesome/free-solid-svg-icons"
import { img } from "../../assets/assets.js"
export function RentDetails({ bed, bath, balcony, dining, living, floorSize, description }) {

    return (
        <>
            <section className="flex flex-col gap-3">
                <h1 className='font-medium text-xl'>
                    <FontAwesomeIcon icon={faCircleInfo} />  Details
                </h1>
                {/* <div className="flex gap-3 max-[700px]:flex-col">
                    <div className="w-3/5 max-[700px]:w-full">

                        <Verify />
                        <HouseDetails />
                        <Facilities />

                    </div>
                    <RentCard />
                </div>
                <Map />
                <RelatedPost /> */}


                <div className="flex flex-wrap gap-4">
                    <div className="bg-green-500 p-2 flex gap-2 items-center  px-4 rounded-3xl">
                        <FontAwesomeIcon icon={faBed} /> Bedroom <span className="font-semibold px-3 bg-green-400 rounded-xl   asp ">{bed}</span>
                    </div>
                    <div className="bg-green-500 p-2 flex gap-2 items-center  px-4 rounded-3xl">
                        <FontAwesomeIcon icon={faBath} /> Bathroom <span className="font-semibold px-3 bg-green-400 rounded-xl   asp ">{bath}</span>
                    </div>
                    {
                        living ? <div className="bg-green-500 p-2 flex gap-2 items-center  px-4 rounded-3xl">
                            <FontAwesomeIcon icon={faCouch} /> Living Room
                        </div> : null
                    }
                    {
                        dining ? <div className="bg-green-500 p-2 flex gap-2 items-center  px-4 rounded-3xl">
                            <FontAwesomeIcon icon={faUtensils} /> Dining Room
                        </div> : null
                    }

                    <div className="bg-green-500 p-2 flex gap-2 items-center px-4 rounded-3xl">
                        <img src={img.balcony} className="w-5 h-5" alt="" /> Balcony <span className="font-semibold px-3 bg-green-400 rounded-xl   asp ">{balcony}</span>
                    </div>
                    <div className="bg-green-500 p-2 flex gap-2 items-center  px-4 rounded-3xl">
                        <FontAwesomeIcon icon={faCube} /> Floor Area <span className="font-semibold px-3 bg-green-400 rounded-xl   asp ">{floorSize}</span>Sqft.
                    </div>
                </div>

                <h1 className='font-medium text-xl'>
                    <FontAwesomeIcon icon={faCircleInfo} />  Description
                </h1>
                <p>
                    {description?description:<span className="text-xs italic">Owner didn't added description</span>}
                </p>

            </section>
        </>
    )
}