import { faBath, faCube, faGear } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight, faBangladeshiTakaSign, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Slider from '@mui/material/Slider';
import { faBed } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { fetchingActions } from "../../../redux/slice/fetchSlice";
import { useDispatch, useSelector } from "react-redux";
import { Autocomplete, TextField, InputAdornment } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { styled } from '@mui/material/styles';
import { place } from "../../assets/assets";
// Styled TextField to customize border color and rounded corners
const StyledTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
        borderRadius: '60px',
        padding: "5px 20px"
        , // Rounded corners
        '& fieldset': {
            borderColor: 'green', // Green border
        },
        '&:hover fieldset': {
            borderColor: 'green',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'green',
        },
    },
    '& .MuiAutocomplete-popupIndicator': {
        display: 'none', // Hide the dropdown icon
    },
});
const StyledTextField2 = styled(TextField)({
    '& .MuiOutlinedInput-root': {
        borderRadius: '60px',
        padding: "2px 20px"
        , // Rounded corners
        '& fieldset': {
            borderColor: 'green', // Green border
        },
        '&:hover fieldset': {
            borderColor: 'green',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'green',
        },
    },
    '& .MuiAutocomplete-popupIndicator': {
        display: 'none', // Hide the dropdown icon
    },
});
const StyledAutocomplete = styled(Autocomplete)({
    '& .MuiAutocomplete-popupIndicator': {
        display: 'none', // Hide the dropdown icon
    },
});













export function PostFilter() {
    let [suggestion, setSuggestion] = useState([])
    const [location, setLocation] = useState("")
    const [bed, setBed] = useState(1)
    const [bath, setBath] = useState(1)
    const [floor, setFloor] = useState(1)
    const [gt, setGt] = useState(0)
    const [lt, setLt] = useState(50000)
    const [filter, setFilter] = useState(false)
    const [sort, setSort] = useState(false)
    const [sortText, setSortText] = useState(<>Date : Newest </>)
    const [mobile, setMobile] = useState(false)


    function checkMobile(m) {
        if (m.matches) {
            setMobile(true)
        }
        else {
            setMobile(false)
        }
    }
    let media = window.matchMedia("(max-width: 700px)")
    media.addEventListener("change",checkMobile)




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
    useEffect(() => {

        checkMobile(media)
      
        
    }, [])

    return (
        <section className="mx-auto max-w-7xl mt-2 max-[700px]:mt-0 px-8 max-[700px]:flex-col flex gap-5 max-[700px]:gap-2 justify-center items-center ">
            {/* -------------- modal ----------------------------- */}
            <h3 onClick={() => setFilter((v) => !v)} className="btn max-[700px]:btn-sm bg-green-400 hover:bg-green-700 rounded-3xl"><FontAwesomeIcon icon={faGear} spin />Filters</h3>

            {/* ----------------------- location search -------------------------------------------- */}
            <Autocomplete
                options={place}
                value={data.area}
                onChange={(e, v) => v != null ? dispatch(fetchingActions.set({ key: "area", value: v })) : dispatch(fetchingActions.set({ key: "area", value: "" }))}
                sx={{ width: {sm:1,lg:0.6,xs:1}, }}
                renderInput={(params) => (
                    <StyledTextField
                        {...params}

                        placeholder="Location"
                        variant="outlined"
                        InputProps={{
                            ...params.InputProps,
                            startAdornment: (
                                <InputAdornment position="start">
                                    <LocationOnIcon style={{ color: '#3a3a3a' }} />
                                </InputAdornment>
                            ),
                        }}
                    />
                )}
            />

            {/* ------------------------------ sorter ----------------------------- */}
            <div className="flex relative">


                <button onClick={() => setSort(v => !v)} className={`${sort?"max-[700px]:mb-24":null} sticky top-0 btn max-[700px]:btn-sm  bg-green-500 hover:bg-green-700 rounded-3xl z-10`}>Sort By : {sortText}
                </button>
                <div className={`absolute transition-all bg-green-100 overflow-hidden ${!sort ? "h-0" : "h-[190px] max-[700px]:h-[175px] pt-7"} w-full flex flex-col gap-2 max-[700px]:gap-1 rounded-b-3xl top-7  max-[700px]:top-2 -z-10  px-3`}>
                    <button disabled={!sort} onClick={() => {
                        setSort(v => !v)
                        setSortText(<>Price: Low <FontAwesomeIcon icon={faArrowRight} /> High</>)
                        dispatch(fetchingActions.sort("pra"))
                        dispatch(fetchingActions.set({ key: "sort", value: "pra" }))
                    }} className="btn max-[700px]:btn-sm w-full bg-green-400 hover:bg-green-600 rounded-3xl z-50">Price: Low <FontAwesomeIcon icon={faArrowRight} /> High</button>
                    <button disabled={!sort} onClick={() => {
                        setSort(v => !v)
                        setSortText(<>Price: High <FontAwesomeIcon icon={faArrowRight} /> Low</>)
                        dispatch(fetchingActions.sort("prd"))
                        dispatch(fetchingActions.set({ key: "sort", value: "prd" }))
                    }} className="btn max-[700px]:btn-sm w-full bg-green-400 hover:bg-green-600 rounded-3xl">Price: High <FontAwesomeIcon icon={faArrowRight} /> Low</button>
                    <button disabled={!sort} onClick={() => {
                        setSort(v => !v)
                        setSortText(<>Date: Newest</>)
                        dispatch(fetchingActions.set({ key: "sort", value: "new" }))
                    }} className="btn max-[700px]:btn-sm w-full bg-green-400 hover:bg-green-600 rounded-3xl">Date: Newest</button>
                    <button disabled={!sort} onClick={() => {
                        setSort(v => !v)
                        setSortText(<>Date: Oldest</>)
                        dispatch(fetchingActions.set({ key: "sort", value: "old" }))
                    }} className="btn max-[700px]:btn-sm w-full bg-green-400 hover:bg-green-600 rounded-3xl">Date: Oldest</button>
                </div>
            </div>


                    {/* -------------------- modal filter -------------------------------------------- */}
            <div className={`absolute z-30 transition-all flex flex-col gap-4 duration-500 bg-white border border-black w-4/5 p-5 rounded-2xl ${!filter ? "-top-[1000px]" : "top-24"}`}>

                <div>
                    <div className="flex gap-2 flex-col justify-center max-[700px]:gap-1 ">


                        {/* --------------------- price range ------------------------------------------ */}
                        <div className="bg-white text-xs p-2 border-2 border-green-600 rounded-3xl font-semibold  h-11  flex gap-3 items-center max-[700px]:h-9 max-[700px]:text-[12px]   px-6 justify-around">

                            Price Range<i className="fa-solid fa-caret-left fa-flip-horizontal"></i>
                            <span className="px-3 w-24 max-[700px]:hidden"> {gt} <FontAwesomeIcon icon={faBangladeshiTakaSign} /></span>
                            <Slider
                                sx={{ width: 0.6, color: 'success.main' ,height:4}}
                                className="text-green-400"
                                getAriaLabel={() => 'Temperature range'}
                                value={[lt, gt]}
                                onChange={handleChange}
                                valueLabelDisplay={mobile?"on":"off"}
                                marks
                                step={500}
                                min={0}
                                max={40000}
                            />
                            <span className="px-3 max-[700px]:hidden  w-24"> {lt} <FontAwesomeIcon icon={faBangladeshiTakaSign} /></span>
                        </div>





                        <div id="up" className="grid grid-cols-2 gap-3 max-[700px]:gap-1 max-[700px]:grid-cols-1 ">





                            {/*-------------------------------- BedCount----------------------------------------------  */}
                            <div className="bg-white  p-3 text-xs  px-6 h-11 rounded-3xl flex border-2 border-green-600  justify-around items-center gap-4 ">
                                <FontAwesomeIcon icon={faBed} />
                                Bedroom (minimum)
                                <Slider
                                    sx={{ width: 0.4, color: 'success.main' }}
                                    className="text-green-400"
                                    getAriaLabel={() => 'Temperature range'}
                                    value={bed}
                                    onChange={(e, v) => {
                                        dispatch(fetchingActions.set({ key: "bed", value: v }))
                                        setBed(v)
                                    }}

                                    marks
                                    step={1}
                                    min={1}
                                    max={10}
                                />
                                <span className="px-3 text-lg font-semibold w-8">{bed}</span>
                            </div>

                            {/*-------------------------------- bathroom count----------------------------------------------  */}
                            <div className="bg-white  p-3 text-xs px-6 h-11 rounded-3xl flex border-2 border-green-600  justify-around items-center gap-4 ">
                                <FontAwesomeIcon icon={faBath} />
                                Bathroom (minimum)
                                <Slider
                                    sx={{ width: 0.4, color: 'success.main' }}
                                    className="text-green-400"
                                    getAriaLabel={() => 'Temperature range'}
                                    value={bath}
                                    onChange={(e, v) => {
                                        dispatch(fetchingActions.set({ key: "bath", value: v }))
                                        setBath(v)
                                    }}

                                    marks
                                    step={1}
                                    min={1}
                                    max={10}
                                />
                                <span className="px-3 text-lg font-semibold w-8">{bath}</span>
                            </div>


                        </div>
                        <div className="flex gap-2">

                            {/* ------------------------ floor Size --------------------------------------------------------- */}

                            <div className="bg-white p-3 text-xs  h-11 rounded-3xl flex border-2 border-green-600 justify-around   items-center max-[700px]:text-[8px] flex-1">
                                <FontAwesomeIcon icon={faCube} />
                                FloorSize (minimum)
                                <Slider
                                    sx={{ width: 0.6, color: 'success.main' }}
                                    className="text-green-400"
                                    getAriaLabel={() => 'Temperature range'}
                                    value={floor}
                                    onChange={(e, v) => {
                                        dispatch(fetchingActions.set({ key: "floor", value: v }))
                                        setFloor(v)
                                    }}
                                    marks
                                    step={100}
                                    min={500}
                                    max={5000}
                                />
                                <span className="px-3 text-lg font-semibold w-16 flex items-center gap-1">{floor} <span className="text-xs">sqft.</span></span>
                            </div>
                        </div>
                        <div id="down" className="flex gap-2">




                        </div>
                        {/* ------------------------------ location search ------------------------------------------ */}
                        <Autocomplete
                            options={place}
                            value={data.area}
                            onChange={(e, v) => v != null ? dispatch(fetchingActions.set({ key: "area", value: v })) : dispatch(fetchingActions.set({ key: "area", value: "" }))}
                            sx={{ width: 1, }}
                            renderInput={(params) => (
                                <StyledTextField2
                                    {...params}

                                    placeholder="Location"
                                    variant="outlined"
                                    InputProps={{
                                        ...params.InputProps,
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <LocationOnIcon style={{ color: '#3a3a3a' }} />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            )}
                        />
                    </div>
                </div>

                <button className="btn btn-sm rounded-full bg-red-100 hover:bg-red-200" onClick={() => setFilter((v) => !v)} >Close</button>
            </div>
            <div className="flex justify-center">
                <form action="POST" className="flex  p-2 rounded-xl mt-3 gap-2" onSubmit={filterHandler}>

                </form>
            </div>
        </section>
    )
}