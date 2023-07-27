import { AiOutlinePlus } from "react-icons/ai"
import { Link } from "react-router-dom"

export function AddTech(){
    return(
        <div className="mt-4">
            <Link to={`/JuniorsWiki/NewTech`}>
                <div className = "w-28 h-28 flex items-center justify-center rounded border border-eerieBlack-200 dark:border-snow-700">
                    <AiOutlinePlus className="w-10 h-10 text-eerieBlack-200"/>
                </div>
            </Link>

            <Link to={`/JuniorsWiki/NewTech`}>
                <h2 className="text-lg text-center">Adicionar</h2>
            </Link>
        </div>
    )
}