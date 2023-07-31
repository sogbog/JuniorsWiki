import { AiOutlinePlus } from "react-icons/ai"
import { Link } from "react-router-dom"

export function AddTech(){
    return(
        <div className="mt-4">
            <Link to={`/JuniorsWiki/NewTech`}>
                <div className = "w-28 h-28 flex items-center justify-center rounded border border-eerieBlack-200 dark:border-snow-700 md:w-36 md:h-36 lg:w-40 lg:h-40">
                    <AiOutlinePlus className="w-10 h-10 text-eerieBlack-200"/>
                </div>
            </Link>

            <Link to={`/JuniorsWiki/NewTech`}>
                <h2 className="text-lg text-center md:text-xl md:py-0.5 lg:text-2xl lg:py-1">Adicionar</h2>
            </Link>
        </div>
    )
}