import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBath, faBed, faCircleCheck, faList } from "@fortawesome/free-solid-svg-icons"
import { useSelector } from "react-redux"


export function HouseDetails() {

    let data = useSelector(state=> state.fetching)

    return (
        <>
            <div className="flex items-center gap-3 my-4 font-bold">
                <FontAwesomeIcon icon={faList} style={{ color: "#1e9471", }} size="xl" /> Description
            </div>
            <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center gap-3">
                    <FontAwesomeIcon icon={faBed} size="lg" /> Bedroom <span className="font-bold">{data.isSinglePost? data.singlePost.post[0].bed : null}</span>
                </div>
                <div className="flex items-center gap-3">
                    <FontAwesomeIcon icon={faBath} size="lg" /> Bathroom <span className="font-bold">{data.isSinglePost? data.singlePost.post[0].bath : null}</span>
                </div>
                <div className="flex items-center gap-3">
                    <img className="w-6 h-6" src="img/balcony.png" alt="" /> Balcony <span className="font-bold">{data.isSinglePost? data.singlePost.post[0].balcony : null}</span>
                </div>
                <div className="flex items-center gap-3">
                    <img className="w-6 h-6" src="img/size.png" /> Floorsize <span className="font-bold">{data.isSinglePost? data.singlePost.post[0].floorSize : null}</span>
                </div>

            </div>
            <p className="my-5">
                {data.isSinglePost? data.singlePost.post[0].description:null}
            </p>
            <hr />
        </>
    )
}