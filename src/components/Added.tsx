import { MdClose } from "react-icons/md";

export function Added({name, remove} : {name: String, remove(name: String): void}){
    return(
        <div className="flex items-center w-fit px-1 bg-satinGold-400 dark:bg-satinGold-600 rounded">
            <span className="min-w-16 bg-transparent pl-1"> {name} </span>
            <button onClick={() => remove(name)} className="ml-1">
                <MdClose/>
            </button>
        </div>
    )
}