import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6"

export function ReturnArrow({href}: {href: String}){
    return(
        <div className="w-fit">
            <Link to={href} className="w-fit">
                <FaArrowLeftLong className="ml-5 md:text-2xl md:ml-7 lg:text-3xl lg:ml-9"/>
            </Link>
        </div>
    )
}