import { faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {Bed} from './bedCount.jsx'
import { Search } from "./searchBtn.jsx";
import { Location } from "./locationFind.jsx";
import { Price } from "./priceRange.jsx";
import { FloorSize } from "./floorSize.jsx";
import { HomeType } from "./homeType.jsx";

export function PostFilter() {

function lel(){}
    return (
        <section className="mx-auto max-w-7xl mt-2 px-8">
            <h3 className=""><FontAwesomeIcon icon={faGear} /> Filters</h3>
            <div className="flex justify-center">
                <form action="POST" className="bg-green-200 flex  p-2 rounded-xl mt-3 gap-2  " onChange={lel}>
                    <div className="flex gap-2 flex-col justify-center max-[700px]:gap-1 ">
                        <div id="up" className="flex gap-2 max-[700px]:gap-1 ">

                            <Location/>


                            <Bed/>


                            <FloorSize/>

                        </div>
                        <div id="down" className="flex gap-2">

                            <HomeType/>

                            <Price/>


                            <Search/>


                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}