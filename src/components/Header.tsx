import { useRef, useState } from "react"
import { MobileLogin } from "./MobileLogin"
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md"
import { DesktopLogin } from "./DesktopLogin"
import { api } from "../services/api"

export function Header(){

    const [theme, setTheme] = useState('light')

    function handleTheme() {
        theme == "light" ? setTheme("dark") : setTheme("light")
        document.getElementById('root').classList.toggle("dark")
    }

    return(
        <header className='bg-snow-500 dark:bg-eerieBlack-300 mb-6 md:pb-3'>
            <div className="flex flex-col gap-1 p-2">
                <div className='flex justify-between'>
                    <h1 className='text-2xl font-spaceMono md:text-4xl md:pl-2 lg:text-5xl lg:pl-3'>Wiki do Dev Junior</h1>
                </div>

                <div className="md:pl-2 lg:pl-3">
                    <MobileLogin/>
                    <DesktopLogin/>
                </div>
            </div>

            <button onClick={handleTheme} className="text-2xl p-1 absolute right-1 top-2.5 lg:top-3 lg:right-2">
                {theme == "dark" ? <MdOutlineDarkMode className="md:text-3xl lg:text-4xl"/> : <MdOutlineLightMode className="md:text-3xl lg:text-4xl"/>}
            </button>
        </header>
    )
}