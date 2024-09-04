import { faBangladeshiTakaSign, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";

export function RentCard() {

    const data = useSelector(state=>state.fetching)
    console.log(data)

    return (
        <>
            <div className="w-2/5 max-[700px]:w-full">
                <div
                    className="p-3 rounded-xl flex flex-col gap-3  shadow-lg border-2 border-gray-100">
                    <div className="text-xl">Rent starting from <span className="font-bold">{data.isSinglePost? data.singlePost.post[0].rentDate :null}</span></div>
                    <div className="flex gap-3 items-center">
                        <div className="h-4 w-4 rounded-full bg-green-500"></div> Available
                    </div>
                    <div className="flex gap-2 items-center">Rent <span className="font-bold text-xl">{data.isSinglePost? data.singlePost.post[0].rent :null}</span> <FontAwesomeIcon icon={faBangladeshiTakaSign} /> / <sub>month</sub></div>
                    <div className="flex gap-2 items-center flex-wrap">Service Charges <span
                        className="font-bold text-xl">{data.isSinglePost? data.singlePost.post[0].charges :null}</span> <FontAwesomeIcon icon={faBangladeshiTakaSign} /> /
                        <sub>month</sub> (Security Guard ,Water ,Gas)</div>
                    <button className="btn btn-lg bg-green-400 rounded-xl py-4 flex gap-3 justify-center hover:bg-green-600 items-center font-semibold"><FontAwesomeIcon icon={faPhone} size="xl"/> Contact Owner</button>

                </div>
            </div>
        </>
    )
}