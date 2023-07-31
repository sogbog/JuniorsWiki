import { useState } from "react"
import { MdAdd } from "react-icons/md"

export function Add({add} : {add(name:String)}){
    const [name, setName] = useState("")

    function handleSet(name: String){
        add(name)
        setName("")
    }


    return(
        <div className="rounded border-dashed flex items-center border-eerieBlack-400 dark:border-snow-400 border w-fit px-1 lg:px-1.5">
            <input type="text" autoComplete="off" onChange={e => setName(e.target.value)} value={name} className="w-16 bg-transparent md:text-lg md:w-20 lg:text-xl lg:w-24"/>
            <button className="ml-1" onClick={() => handleSet(name)}>
                <MdAdd className="md:text-lg lg:text-xl"/>
            </button>
        </div>
    )
}