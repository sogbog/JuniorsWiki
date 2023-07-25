import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6"

export function ReturnArrow(){
    return(
        <div>
            <Link to={"/JuniorsWiki"}>
                <FaArrowLeftLong/>
            </Link>
        </div>
    )
}