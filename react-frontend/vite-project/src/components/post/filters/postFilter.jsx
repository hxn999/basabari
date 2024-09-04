import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faPerson } from "@fortawesome/free-solid-svg-icons";
import { faPuzzlePiece } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight, faBangladeshiTakaSign, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Slider from '@mui/material/Slider';
import { faBed } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { fetchingActions } from "../../../../redux/slice/fetchSlice.js";
import { useDispatch, useSelector } from "react-redux";



export function PostFilter() {

    const [location, setLocation] = useState("")
    const [bed, setBed] = useState(1)
    const [bath, setBath] = useState(1)
    const [floor, setFloor] = useState(1)
    const [gt, setGt] = useState(0)
    const [lt, setLt] = useState(50000)

    let dispatch = useDispatch()
    let data = useSelector(state => state.fetching)



    const handleChange = (event, newValue) => {
        setGt(newValue[0]);
        setLt(newValue[1]);
        dispatch(fetchingActions.set({ key: "gt", value: newValue[0] }))
        dispatch(fetchingActions.set({ key: "lt", value: newValue[1] }))
      };



    function filterHandler(e) {
        e.preventDefault()

    }
    return (
        <section className="mx-auto max-w-7xl mt-2 px-8">
            <h3 className=""><FontAwesomeIcon icon={faGear} /> Filters</h3>
            <div className="flex justify-center">
                <form action="POST" className="bg-green-200 flex  p-2 rounded-xl mt-3 gap-2" onSubmit={filterHandler}>
                    <div className="flex gap-2 flex-col justify-center max-[700px]:gap-1 ">
                        <div id="up" className="flex gap-2 max-[700px]:gap-1 ">

                            <Slider
                                sx={{ width: 400, color: 'success.main' }}
                                className="text-green-400"
                                getAriaLabel={() => 'Temperature range'}
                                value={[lt,gt]}
                                onChange={handleChange}
                                valueLabelDisplay="on"
                                // getAriaValueText={valuetext}
                                marks
                                step={500}
                                min={0}
                                max={5000}
                            />

                            {/* Location  */}

                            <div className="bg-white px-3 h-11 rounded-xl flex justify-start gap-4  items-center  max-[700px]:h-9 w-[238px] max-[700px]:w-[190px]">

                                <FontAwesomeIcon icon={faLocationDot} />
                                <input value={data.area} onChange={(e) => dispatch(fetchingActions.set({ key: "area", value: e.target.value }))} className="w-full focus:outline-none max-[700px]:text-[12px] " type="text" name="" placeholder="Location" id="" />

                            </div>

                            {/* BedCount  */}
                            <div className="bg-white p-3 h-11 rounded-xl flex justify-around items-center gap-2 max-[700px]:hidden">
                                <FontAwesomeIcon icon={faBed} />
                                Bedroom
                                <input value={bed} onChange={(e) => {
                                    setBed(e.target.value)
                                    dispatch(fetchingActions.set({ key: "bed", value: e.target.value }))

                                }
                                } className="focus:outline-none bg-slate-200 text-center w-15 rounded-xl p-1" type="number"
                                    min="1" max="5" name="" id="" />
                            </div>

                            {/* FloorSize  */}

                            <div className="bg-white p-3 h-11 rounded-xl flex justify-around items-center gap-2 w-max max-[700px]:hidden">
                                <FontAwesomeIcon icon={faPuzzlePiece} />
                                Floor Size
                                <input value={floor} onChange={(e) => {
                                    setFloor(e.target.value)
                                    dispatch(fetchingActions.set({ key: "floor", value: e.target.value }))
                                }} className="focus:outline-none bg-slate-200 text-center w-20 rounded-lg p-1" type="number"
                                    min="1" max="500000" name="" id="" />
                            </div>

                        </div>
                        <div id="down" className="flex gap-2">

                            <div className="bg-white p-3 h-11 rounded-xl flex justify-around items-center max-[700px]:hidden w-[150px]" >
                                <FontAwesomeIcon icon={faPerson} />
                                <select className="focus:outline-none" id="">
                                    <option >Bachelor</option>
                                    <option > Family</option>
                                </select>
                            </div>

                            {/* priceRange  */}

                            <div className="bg-white p-2 pl-3 rounded-xl h-11  flex gap-3 items-center max-[700px]:h-9 max-[700px]:text-[12px] w-[365px] max-[700px]:w-max">
                                <FontAwesomeIcon icon={faBangladeshiTakaSign} />
                                Price Range<i className="fa-solid fa-caret-left fa-flip-horizontal"></i>
                                <input value={gt} onChange={(e) => {
                                    setGt(e.target.value)
                                    dispatch(fetchingActions.set({ key: "gt", value: e.target.value }))
                                }} className="focus:outline-none bg-slate-200 text-center w-20 rounded-lg p-1 max-[700px]:text-[12px] max-[700px]:w-14" type="number"
                                    min="1" name="" id="" step={500} />
                                <FontAwesomeIcon icon={faArrowRight} />
                                <input value={lt} onChange={(e) => {
                                    setLt(e.target.value)
                                    dispatch(fetchingActions.set({ key: "lt", value: e.target.value }))
                                }} className="focus:outline-none bg-slate-200 text-center w-20 rounded-lg p-1 max-[700px]:text-[12px] max-[700px]:w-14" type="number"
                                    min="1000" name="" id="" step={500} />
                            </div>

                            {/* search button  */}



                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}