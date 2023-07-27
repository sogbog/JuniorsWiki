import { AddTech } from "../../components/Adm/AddTech"
import { Header } from "../../components/Adm/Header"
import { TechCard } from "../../components/Adm/TechCard"

export function Home() {
    return (
      <div className="bg-snow-400 dark:bg-eerieBlack-400 font-notoSans text-eerieBlack-400 dark:text-snow-400 transition min-h-full">
        <Header/>

        <div className="mt-3 flex justify-center">
          <input type="text" className="rounded-lg p-1 my-2 bg-gray-300 dark:bg-eerieBlack-600"/>
        </div>

        <main className="flex flex-wrap justify-around gap-6 pb-10 pt-1 px-3">

          <AddTech/>

          <TechCard name="JavaScript" img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" tags={["linguagem", "web", "popular", "multi-paradigma", "interpretada"]}/>

          <TechCard name="Typescript" img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" tags={["linguagem", "web", "popular", "superset", "compilada"]}/>
          
          <TechCard name="React" img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" tags={["biblioteca", "web", "popular", "frontend", "open-source"]}/>
        </main>
      </div>
    )
  }