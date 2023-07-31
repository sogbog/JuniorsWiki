import { ReturnArrow } from "../../components/ReturnArrow";
import { Header } from "../../components/Header";
import { Tech } from "../../components/Tech";
import { MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";

const response = {
    name:"JavaScript",
    description: "JavaScript (frequentemente abreviado como JS) é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma (protótipos, orientado a objeto, imperativo e funcional). Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web. JavaScript permite páginas da Web interativas e, portanto, é uma parte essencial dos aplicativos da web. A grande maioria dos sites usa, e todos os principais navegadores têm um mecanismo JavaScript dedicado para executá-lo.",
    img:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    tags:["linguagem", "web", "popular", "multi-paradigma", "interpretada"],
    nicknames: ["JS"]
}

export function Techs(){

    return(
        <div className="bg-snow-400 dark:bg-eerieBlack-400 font-notoSans text-eerieBlack-400 dark:text-snow-400 transition min-h-full">
            <Header/>

            <div className="mr-3 mt-2 flex justify-between">
                <ReturnArrow href={"/JuniorsWiki"}/>
                <Link to={"/JuniorsWiki/EditTech/" + response.name}>
                    <MdEdit className="md:text-2xl md:mr-5 lg:text-3xl lg:mr-9"/>
                </Link>
            </div>
            
            <div className="mt-6">
                <Tech tech={response}/>
            </div>
        </div>
    )
}