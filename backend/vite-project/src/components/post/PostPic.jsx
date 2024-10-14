import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"

// `http://localhost:3000${}`

export function PostPic({ imgs, area, fbLink }) {

    const [cover, setCover] = useState(imgs[0])

    // left right photo slider
    const left = (e) => {
        setCover((img) => {
            const i = imgs.indexOf(img)
            if (i == 0) {
                return imgs[imgs.length - 1]
            } else {

                return imgs[(i - 1) % imgs.length]
            }
        })
    }
    const right = (e) => {
        setCover((img) => imgs[(imgs.indexOf(img) + 1) % imgs.length])
    }

    // all photos modal 
    let allPhoto = <dialog id="my_modal_4" className="modal">
        <div className="modal-box relative  w-11/12  max-w-5xl">
            <div className="flex sticky top-0 items-center justify-between">

                <h3 className="font-bold text-lg">All Photos</h3>
                <form method="dialog">
                    <button className="btn bg-red-400 hover:bg-red-600">Close</button>
                </form>
            </div>
            {
                imgs.map((src, index) => {

                    return (<img key={index} id={index}
                        className="w-full transition-all mb-2 duration-200 h-full object-cover rounded-xl active:scale-110"
                        src={`http://localhost:3000${src}`} alt="house-rooms" />)
                })
            }

        </div>

        <div className="modal-action">

        </div>
    </dialog>






    return (
        <>
            <section className="w-2/3 max-[1024px]:w-full">

                {/* // title */}
                <h1 className="mt-1 mb-2 pl-1 text-xl font-semibold">Home rent in {area} </h1>


                <div className="flex flex-col gap-3 w-full max-[1024px]:w-full  max-[700px]:flex-col max-[700px]:h-auto">


                    <div className="w-full relative h-96 max-[700px]:h-60  max-[700px]:w-full">
                        {/* -------left slider------------------------ */}
                        <span onClick={left} style={{ top: `calc(50% - 18px)` }} className="absolute hover:cursor-pointer active:scale-110 transition-all duration-200 hover:-translate-x-1 bg-green-500/50 w-9 rounded-full text-xl h-9 flex items-center justify-center left-5">
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </span>
                        {/* ------------ cover image -------------------------- */}
                        <img className="w-full h-full object-cover  rounded-xl" src={`http://localhost:3000${cover}`} alt="" />
                        {/* -----------------right slider ----------------------------- */}
                        <span onClick={right} style={{ top: `calc(50% - 18px)` }} className="absolute hover:cursor-pointer active:scale-110 transition-all duration-200 bg-green-500/50 w-9 hover:translate-x-1 rounded-full text-xl h-9 flex items-center justify-center right-5">
                            <FontAwesomeIcon icon={faArrowRight} />
                        </span>
                    </div>


                    <div
                        className={`flex w-full gap-3 flex-wrap  max-[700px]:w-full max-[700px]:grid-cols-6 max-[700px]:grid-rows-none max-[700px]:h-auto`}>
                        {
                            imgs.map((src, index) => {
                                return <div key={index} className={`w-16 aspect-square ${cover == src ? "border-[3px] rounded-xl border-black" : null} p-[1px] max-[700px]:w-12 max-[700px]:h-12  max-[700px]:aspect-square hover:cursor-pointer`}>
                                    <img key={index} id={index} onClick={(e) => setCover((v) => imgs[parseInt(e.target.id)])}
                                        className="w-full transition-all duration-200 h-full object-cover rounded-xl active:scale-110 hover:border-2 border-black" src={`http://localhost:3000${src}`} alt="house-rooms" />
                                </div>
                            })
                        }
                        {/* ------------- all photo opener ------------------------ */}
                        <div onClick={() => document.getElementById('my_modal_4').showModal()} className={`w-16 max-[700px]:w-12  transition-all duration-200 active:scale-110 max-[700px]:h-12 max-[700px]:text-[10px] text-center max-[700px]:aspect-square border border-black bg-slate-400 p-1 rounded-xl hover:cursor-pointer`}>
                            See All Photos
                        </div>
                    </div>

                    {allPhoto}
                </div>
            </section>
        </>
    )
}