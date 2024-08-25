import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export function Search() {

    return (
        <div id="search" className="flex">
            <button type="submit"className="bg-green-400 flex gap-2 px-3 h-11 items-center justify-center rounded-xl  w-[115px] max-[700px]:w-[90px] max-[700px]:text-[12px] max-[700px]:h-9">
            <FontAwesomeIcon icon={faMagnifyingGlass}/>
                Search
                </button>

        </div>
    )
}