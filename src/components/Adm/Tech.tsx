import { Tag } from "../Tag";

export function Tech({tech}: {tech: {name: string, description: string, img: string, tags: string[], nicknames: string[]}}){
    
    return(
        <div className="px-5 pb-12">
            <h1 className="text-5xl text-center mb-3">{tech.name}</h1>

            <img src={`${tech.img}`} alt="" className="w-72 max-h-72 rounded object-cover m-auto"/>

            <p className="flex my-4 p-2 text-center bg-gray-300 dark:bg-eerieBlack-600 rounded">{tech.description}</p>

            <div className="p-2 bg-gray-300 dark:bg-eerieBlack-600 rounded">
                <h2 className="text-xl">Também conhecido como:</h2>
                {tech.nicknames.map((nickname, i) => <span key={i} > {nickname + (i == (tech.nicknames.length - 1) ? "" : ", ")} </span>)}
            </div>

            

            <div className="my-4 p-2 bg-gray-300 dark:bg-eerieBlack-600 rounded">
                <h2 className="text-xl mb-1">Tags</h2>

                <div className="flex flex-wrap gap-2">
                    {tech.tags.map((tag, i) => <Tag key={i} name={tag}/>)}
                </div>
            </div>

        </div>
    )
}