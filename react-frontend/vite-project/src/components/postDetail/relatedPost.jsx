
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RelatedCard } from "./relatedCard.jsx";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
export function RelatedPost()
{

    return(
        <>
        <div className="my-5 flex items-center gap-3"><FontAwesomeIcon icon={faMapLocationDot}/>Related homes</div>
        <div className="grid grid-cols-4 gap-3 max-[700px]:grid-cols-2">

           <RelatedCard/>

        </div>
        </>
    )
}