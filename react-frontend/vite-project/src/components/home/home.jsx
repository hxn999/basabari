import { faLocationDot, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchingActions } from "../../../redux/slice/fetchSlice.js";



export function Home() {
    let [search, setSearch] = useState("")
    let place = ["Adabor", "Adabor", "Airport", "Badda", "Banani", "Bangshal", "Bhashantek", "Cantonment", "Chawkbazar", "Darussalam", "Daskhinkhan", "Demra", "Dhamrai", "Dhanmondi", "Dohar", "Gandaria", "Gulshan", "Hazaribag", "Jatrabari", "Kafrul", "Kalabagan", "Kamrangirchar", "Keraniganj", "Khilgaon", "Khilkhet", "Kotwali", "Lalbag", "Mirpur", "Mohammadpur", "Motijheel", "Mugda", "Nawabganj", "New Market", "Others", "Pallabi", "Paltan", "Purbachal", "Ramna", "Rampura", "Rupnagar", "Sabujbag", "Savar", "Shah Ali", "Shahbag", "Shahjahanpur", "Sher-E-Bangla Nagar", "Shyampur", "Sutrapur", "Tejgaon", "Tejgaon I/A", "Turag", "Uttara", "Uttara West", "Uttarkhan", "Vatara", "Wari"]
    let [suggestion, setSuggestion] = useState([])
    let [visibility, setVisibility] = useState("hidden")
    let fetchData = useSelector(state=>state.fetching)
    const dispatch = useDispatch()
    function searchPlace(e) {

        setSearch(e.target.value)
        const regex = new RegExp(escape(search), "i");
        let lol = place.filter(e => e.match(regex))
        setSuggestion(lol)
        if(search=='')
        {
            setSuggestion([])
        }
        console.log(search)
        
    }
    function searchHandler(e)
    {
        e.preventDefault()
        
        dispatch(fetchingActions.set({key:"area",value:"search"}) )


    }
    console.log(suggestion)
    useEffect(()=>{
        if(search!='')
        {
            let h="absolute"
            setVisibility(h)
        }else{
            let a="hidden"
            setVisibility(a)
        }
    },[search])

    return (
        <>
            <div className=" h-[74vh] mt-6 pt-16 bg-no-repeat bg-cover lel" onClick={()=>setVisibility("hidden")} >
                <section className="mx-auto max-w-7xl mt-2 px-8 flex flex-col items-center justify-center gap-10   ">


                    <h1 className="pb-2 text-5xl font-black max-[700px]:text-3xl max-[400px]:text-xl">Looking for a home?</h1>
                    <form action="POST" className=" flex flex-col gap-3  p-2 bg-green-800/35 rounded-full  w-4/5 max-[700px]:w-full" onSubmit={searchHandler} >


                        <div className=" flex flex-col relative ">
                            <div className="bg-white p-2  rounded-full flex justify-between  items-center w-full max-[700px]:h-9">

                                <div className="flex items-center w-4/5 gap-8  pl-5 max-[700px]:pl-2 max-[700px]:justify-start max-[700px]:gap-4">
                                    <FontAwesomeIcon icon={faLocationDot} size="xl" />
                                    <input className="w-4/5 focus:outline-none  text-xl max-[700px]:text-xs" type="text" name=""
                                        placeholder="Search Places" id="" value={search} onChange={searchPlace} />



                                </div>

                                <Link to="/posts" >
                                    <button onClick={()=>dispatch(fetchingActions.set({key:"area",value:search}) )} className=" btn flex items-center w-12 justify-center h-12 rounded-full max-[700px]:w-7 max-[700px]:h-7  bg-green-400  hover:cursor-pointer hover:bg-green-600" type="submit">
                                        <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
                                    </button>
                                </Link>
                            </div>
                            <div className={`${visibility} bg-white rounded-xl top-12 left-16 px-5 w-4/5  p-3 overflow-y-scroll max-h-60`}>

                            {
                                suggestion.map((e)=>{
                                    return  <Link to="/posts" >  <div className="p-4 rounded-xl text-base w-full flex gap-2 items-center border-b hover:cursor-pointer hover:bg-slate-100" onClick={()=>dispatch(fetchingActions.set({key:"area",value:e}) )}><FontAwesomeIcon icon={faLocationDot}/>  {e}</div></Link>
                                })
                            }
                                      
                                      
                                    </div>

                        </div>


                    </form>


                </section>
            </div>
        </>
    )
}