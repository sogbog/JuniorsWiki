import { MdSearch } from "react-icons/md"
import { Header } from "../components/Header"
import { TechList } from "../components/TechList"
import { useState } from "react"


export function Home() {

    const [search, setSearch] = useState("")

    return (
        <div className="bg-snow-400 dark:bg-eerieBlack-400 font-notoSans text-eerieBlack-400 dark:text-snow-400 transition min-h-full">
        <Header/>

        <div className="mt-10 mb-2 pl-9 flex justify-center relative w-fit rounded-lg bg-gray-300 dark:bg-eerieBlack-600 mx-auto md:mt-8 md:mb-7 lg:pl-12">
          <MdSearch className="text-3xl absolute top-0.5 left-1 md:top-1 lg:text-4xl lg:top-1.5 lg:left-2"/>
          <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" className="p-1 bg-transparent md:text-lg lg:text-2xl lg:p-2"/>
        </div>

        <main>

            <TechList search={search}/>

        </main>
      </div>
    )
  }