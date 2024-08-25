import {  faPuzzlePiece } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export function FloorSize() {

    return (
        <div className="bg-white p-3 h-11 rounded-xl flex justify-around items-center gap-2 w-max max-[700px]:hidden">
            <FontAwesomeIcon icon={faPuzzlePiece} />
            Floor Size
            <input className="focus:outline-none bg-slate-200 text-center w-20 rounded-lg p-1" type="number"
                min="1"  max="500000" name="" id="" />
        </div>
    )
}