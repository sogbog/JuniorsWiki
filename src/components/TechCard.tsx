import { Link } from "react-router-dom"
import { Tag } from "./Tag"
import { useState } from "react"
import { MdImage } from "react-icons/md"

export function TechCard({name, img, tags}: {name: string, img: string, tags: string[]}) {
    
    const [isValid, setIsValid] = useState(true)
    
    
    return(

        <div className="mt-4 flex flex-col items-center">
            <Link to={`/JuniorsWiki/${name}`}>

            <div className="w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 flex">
                {
                    isValid ? 

                    <img onError={() => setIsValid(false)} className="w-28 max-h-28 rounded  object-cover md:w-36 md:max-h-36 lg:w-40 lg:max-h-40" src={img} alt={name} width={30} height={30}/>

                    :

                    <MdImage className="w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40"/>
                }  
            </div>
            

            </Link>

            <Link to={`/JuniorsWiki/${name}`}>
                <h2 className="text-lg text-center md:text-xl md:py-0.5 lg:text-2xl lg:py-1">{name}</h2>
            </Link>

            <div className="flex flex-wrap justify-around gap-0.5 max-w-[7rem] py-1 px-2 relative md:max-w-[9rem] lg:max-w-[10rem] lg:gap-1">                
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