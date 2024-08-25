import { faLocationDot, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";



export function Home() {


    return (
        <>
            <div className=" h-[74vh] mt-6 pt-16 bg-no-repeat bg-cover lel" >
                <section className="mx-auto max-w-7xl mt-2 px-8 flex flex-col items-center justify-center gap-10   ">


                    <h1 className="pb-2 text-5xl font-black max-[700px]:text-3xl max-[400px]:text-xl">Looking for a home?</h1>
                    <form action="POST" className=" flex flex-col gap-3  p-2 bg-green-800/35 rounded-full  w-4/5 max-[700px]:w-full" >


                        <div className="bg-white p-2  rounded-full flex justify-between  items-center w-full max-[700px]:h-9">
                            <div className="flex items-center w-4/5 gap-8  pl-5 max-[700px]:pl-2 max-[700px]:justify-start max-[700px]:gap-4">
                                <FontAwesomeIcon icon={faLocationDot} size="xl" />
                                <input className="w-4/5 focus:outline-none  text-xl max-[700px]:text-xs" type="text" name=""
                                    placeholder="Search Places" id="" />
                            </div>
                            
                            <Link to="/posts" >
                                <button className=" btn flex items-center w-12 justify-center h-12 rounded-full max-[700px]:w-7 max-[700px]:h-7  bg-green-400  hover:cursor-pointer hover:bg-green-600" type="submit">
                                    <FontAwesomeIcon icon={faMagnifyingGlass} size="lg"/>
                                </button>
                            </Link>

                        </div>

                    </form>


                </section>
            </div>
        </>
    )
}