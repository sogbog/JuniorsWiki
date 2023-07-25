import { Link } from "react-router-dom"
import { Tag } from "../Tag"

export function TechCard({name, img, tags}: {name: string, img: string, tags: string[]}) {
    return(
        <div className="mt-4">
            <Link to={`/JuniorsWiki/${name}`}>
                <img className="w-28 max-h-28 rounded border border-eerieBlack-200 dark:border-snow-700 object-cover" src={img} alt={name} width={30} height={30}/>
            </Link>

            <Link to={`/JuniorsWiki/${name}`}>
                <h2 className="text-lg text-center">{name}</h2>
            </Link>

            <div className="flex flex-wrap justify-around gap-0.5 max-w-[7rem] py-1 px-2 relative">                
                {
                    tags.map((tag, i) => {
                        while (i < 3) {
                            return <Tag key={i} name={tag}/>
                        }
                    })
                }
            </div>
        </div>       
    )
}