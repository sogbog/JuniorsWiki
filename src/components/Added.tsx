import { MdClose } from "react-icons/md";

export function Added({name, remove} : {name: String, remove(name: String): void}){
    return(
        <div className="flex items-center w-fit px-1 bg-satinGold-400 dark:bg-satinGold-600 rounded lg:px-1.5">
            <span className="bg-transparent pl-1 md:text-lg lg:text-xl"> {name} </span>
            <button onClick={() => remove(name)} className="ml-1">
                <MdClose className="md:text-lg lg:text-xl"/>
            </button>
        </div>
    )
}