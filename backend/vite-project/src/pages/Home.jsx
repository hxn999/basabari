import { faLocationDot, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchingActions } from "../../redux/slice/fetchSlice.js";
import {place} from '../assets/assets.js'
import basa from '../assets/basa.jpg'


export function Home() {
    let [search, setSearch] = useState("")
    const [mobile, setMobile] = useState(false)
    let [suggestion, setSuggestion] = useState([])
    let [visibility, setVisibility] = useState("hidden")
    const dispatch = useDispatch()

    // function for doing media query css
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

    

    // preparing suggestion on user's input
    function searchPlace(e) {
        setSearch(e.target.value)
        const regex =  new RegExp(`${e.target.value}\\s*`, "i");
        let lol = place.filter(e => e.match(regex))
        setSuggestion((arr) => lol)
        if (e.target.value == '') {
            setSuggestion([])
        }
    }

    // launching search
    function searchHandler(e) {
        e.preventDefault()
        dispatch(fetchingActions.set({ key: "area", value: "search" }))
    }



    // hiding or showing suggestions 
    useEffect(() => {
        
        console.log("hi")
        checkMobile(media)
        console.log(mobile)

        if (search != '') {
            let h = "absolute"
            setVisibility(h)
        } else {
            let a = "hidden"
            setVisibility(a)
        }
        
    }, [search])

  


    return (
        <div className="flex-1">
            <div  className=" h-[74vh] mt-6 pt-16 max-[700px]:pt-24  bg-cover  lel " onClick={() => setVisibility("hidden")} >
                <section className="mx-auto max-w-7xl mt-2 px-8 flex flex-col items-center justify-center gap-10   ">


                    <h1 style={{ WebkitTextStrokeWidth: '1px', WebkitTextStrokeColor: 'black', }} className="pb-2 text-5xl font-bold  stroke-slate-700 stroke text-green-600 max-[700px]:text-3xl max-[400px]:text-xl">Looking for a home?</h1>
                    <form action="POST" className=" flex flex-col gap-3 border border-slate-700  p-1 max-[1024px]:p-1 bg-green-500/35 rounded-full  w-4/5 max-[700px]:w-full" onSubmit={searchHandler} >

                        <div className=" flex flex-col relative ">
                            <div className="bg-white p-2  rounded-full flex justify-between  items-center w-full max-[700px]:h-9">
                                {/* ----------------------- search input --------------------------------------- */}
                                <div className="flex items-center flex-1 gap-8  pl-5 max-[700px]:pl-2 max-[700px]:justify-start max-[700px]:gap-4">
                                    <FontAwesomeIcon icon={faLocationDot} size={mobile?'sm':"xl"} />
                                    <input className="flex-1 focus:outline-none  text-xl max-[700px]:text-xs" type="text" name=""
                                        placeholder="Search Places" id="" value={search} onChange={searchPlace} />
                                </div>
                                {/* --------------------- search button ------------------------------------- */}
                                <Link to="/search" >
                                    <button onClick={() => dispatch(fetchingActions.set({ key: "area", value: search }))} className=" btn btn-sm flex items-center w-12 justify-center h-12 rounded-full max-[700px]:w-8 max-[700px]:h-4 max-[700px]:p-2   bg-green-400  hover:cursor-pointer hover:bg-green-600" type="submit">
                                        <FontAwesomeIcon icon={faMagnifyingGlass} size={mobile?'sm':"lg"} />
                                    </button>
                                </Link>
                            </div>


                            <div key={"hi"} className={`${visibility} max-[700px]:top-6 max-[700px]:left-6  bg-white rounded-xl top-12 left-16 px-5  max-[700px]:px-2  max-[700px]:max-h-40 w-4/5  p-3 overflow-y-scroll max-h-60`}>

                                {
                                    // creating suggestions 

                                    suggestion.length == 0 ? (<div key={"hi"} className="p-4 rounded-xl max-[700px]:text-xs max-[700px]:p-2 text-base w-full flex gap-2 items-center border-b " >
                                        <FontAwesomeIcon icon={faLocationDot} />
                                        No Place Found
                                    </div>)
                                        :
                                        suggestion.map((e,i) => {
                                            return <Link to="/search" >
                                                <div key={i} className="p-4 rounded-xl text-base w-full flex max-[700px]:text-xs max-[700px]:p-2 gap-2 items-center border-b hover:cursor-pointer hover:bg-slate-100"
                                                    onClick={() => dispatch(fetchingActions.set({ key: "area", value: e }))}
                                                >
                                                    <FontAwesomeIcon icon={faLocationDot} />
                                                    {e}
                                                </div>
                                            </Link>
                                        })
                                }


                            </div>

                        </div>


                    </form>


                </section>
            </div>
        </div>
    )
}