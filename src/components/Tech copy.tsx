import { Tag } from "./Tag";

export function Tech({tech}: {tech: {name: string, description: string, img: string, tags: string[], nicknames: string[]}}){
    
    return(
        <div className="px-8 pb-12">
            <h1 className="text-5xl text-center lg:text-6xl">{tech.name}</h1>
            
            <div className="md:flex md:justify-between md:gap-10 my-6 lg:my-8">
                
                <img src={tech.img} alt="" className="w-72 max-h-72 rounded object-cover m-auto lg:w-80 lg:max-h-80"/>

                <p className="flex p-2 text-center bg-gray-300 dark:bg-eerieBlack-600 rounded md:text-lg mt-6 md:max-h-72 md:p-3 md:overflow-y-auto md:mt-0 lg:max-h-80 lg:text-xl">{tech.description}</p>    
            
            </div>

            <div className="md:flex md:flex-col md:items-start md:w-fit">

                <div className="p-2 bg-gray-300 dark:bg-eerieBlack-600 rounded md:p-4 md:w-full">
                    <h2 className="text-xl md:text-2xl lg:text-3xl lg:mb-1">Também conhecido como:</h2>
                    {tech.nicknames.map((nickname, i) => <span key={i} className="md:text-lg lg:text-xl"> {nickname + (i == (tech.nicknames.length - 1) ? "" : ", ")} </span>)}
                </div>
                
                <div className="my-4 p-2 bg-gray-300 dark:bg-eerieBlack-600 rounded md:w-fit md:p-4">
                    <h2 className="text-xl md:text-2xl mb-1 md:mb-2 lg:text-3xl">Tags</h2>

                    <div className="flex flex-wrap gap-2">
                        {tech.tags.map((tag, i) => <Tag key={i} name={tag}/>)}
                    </div>
                </div>
            </div>
                
                  
            
        </div>
    )
}