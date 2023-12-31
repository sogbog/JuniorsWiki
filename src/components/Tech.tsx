import { useState } from "react";
import { Tag } from "./Tag";
import { MdImage } from "react-icons/md";

export function Tech({tech}: {tech: Tech}){
    
    const [isValid, setIsValid] = useState(true)

    return(
        <div className="px-8 pb-12 lg:px-20">
            <h1 className="text-5xl text-center lg:text-6xl">{tech.name}</h1>
            
            <div className="md:flex md:justify-start md:gap-10 my-6 lg:my-8">
                
                <div className="w-72 h-72 mb-4 md:m-0 lg:w-80 lg:h-80 flex">
                    {
                        isValid ? 

                        <img src={tech.img} onError={() => setIsValid(false)} className="w-72 max-h-72 rounded object-cover mx-auto md:m-0 lg:w-80 lg:max-h-80"/>

                        :

                        <MdImage className="w-full h-full max-w-[18rem] max-h-72 mx-auto md:m-0 lg:w-80 lg:max-h-80"/>
                    }
                </div>
            
                <div className="md:flex md:flex-col md:justify-around md:w-fit md:max-h-72 md:overflow-y-auto lg:max-h-80">
                    <div className="p-2 bg-gray-300 dark:bg-eerieBlack-600 rounded md:p-4 md:w-full ">
                        <h2 className="text-xl md:text-2xl lg:text-3xl lg:mb-1">Também conhecido como:</h2>
                        {tech.nicknames.map((nickname, i) => <span key={i} className="md:text-lg lg:text-xl"> {nickname + (i == (tech.nicknames.length - 1) ? "" : ", ")} </span>)}
                    </div>
                    
                    <div className="my-4 p-2 bg-gray-300 dark:bg-eerieBlack-600 rounded md:w-fit md:p-4 md:m-0">
                        <h2 className="text-xl md:text-2xl mb-1 md:mb-2 lg:text-3xl">Tags</h2>

                        <div className="flex flex-wrap gap-2">
                            {tech.tags.map((tag, i) => <Tag key={i} name={tag}/>)}
                        </div>
                    </div>
                </div>
            </div>

            <p className="flex p-2 text-center bg-gray-300 dark:bg-eerieBlack-600 rounded md:text-lg mt-6 md:p-3 md:mt-0 lg:text-xl min-h-[5rem]">{tech.description}</p> 
            
        </div>
    )
}