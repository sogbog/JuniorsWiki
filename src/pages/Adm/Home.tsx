import { MdSearch } from "react-icons/md"
import { AddTech } from "../../components/AddTech"
import { Header } from "../../components/Header"
import { TechCard } from "../../components/TechCard"

export function Home() {
    return (
      <div className="bg-snow-400 dark:bg-eerieBlack-400 font-notoSans text-eerieBlack-400 dark:text-snow-400 transition min-h-full">
        <Header/>

        <div className="mt-10 mb-2 pl-9 flex justify-center relative w-fit rounded-lg bg-gray-300 dark:bg-eerieBlack-600 mx-auto md:mt-8 md:mb-7 lg:pl-12">
          <MdSearch className="text-3xl absolute top-0.5 left-1 md:top-1 lg:text-4xl lg:top-1.5 lg:left-2"/>
          <input type="text" className="p-1 bg-transparent md:text-lg lg:text-2xl lg:p-2"/>
        </div>

        <main className="flex flex-wrap justify-around gap-6 pb-10 pt-1 px-4 lg:px-10 lg:gap-10">

          <AddTech/>

          <TechCard name="JavaScript" img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" tags={["linguagem", "web", "popular", "multi-paradigma", "interpretada"]}/>

          <TechCard name="Typescript" img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" tags={["linguagem", "web", "popular", "superset", "compilada"]}/>
          
          <TechCard name="React" img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" tags={["biblioteca", "web", "popular", "frontend", "open-source"]}/>
        </main>
      </div>
    )
  }