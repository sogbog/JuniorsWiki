import { useRef, useState } from "react"
import { MobileLogin } from "../MobileLogin"
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md"


export function Header(){

  const [theme, setTheme] = useState('light')

  function handleTheme() {
    theme == "light" ? setTheme("dark") : setTheme("light")
    document.getElementById('root').classList.toggle("dark")
  }

  return(
    <header className='bg-snow-500 dark:bg-eerieBlack-300 mb-6'>
      <div className="flex flex-col gap-1 p-2">
        <div className='flex justify-between'>
          <h1 className='text-2xl font-spaceMono'>Wiki do Dev Junior</h1>
        </div>

        <div>
          <MobileLogin/>
        </div>
      </div>

      <button onClick={handleTheme} className="text-2xl p-1 absolute right-1 top-2.5">
        {theme == "dark" ? <MdOutlineDarkMode /> : <MdOutlineLightMode/>}
      </button>
    </header>
  )
}