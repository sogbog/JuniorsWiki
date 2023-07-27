import { useState } from "react";
import { Header } from "../../components/Adm/Header";
import { ReturnArrow } from "../../components/ReturnArrow";
import { Add } from "../../components/Add";
import { Added } from "../../components/Added";

const response = {
    name:"JavaScript",
    description: "JavaScript (frequentemente abreviado como JS) é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma (protótipos, orientado a objeto, imperativo e funcional). Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web. JavaScript permite páginas da Web interativas e, portanto, é uma parte essencial dos aplicativos da web. A grande maioria dos sites usa, e todos os principais navegadores têm um mecanismo JavaScript dedicado para executá-lo.",
    img:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    tags:["linguagem", "web", "popular", "multi-paradigma", "interpretada"],
    nicknames: ["JS"]
}

export function EditTech(){

    const [nicknames, setNicknames] = useState<String[]>([...response.nicknames])
    const [tags, setTags] = useState<String[]>([...response.tags])
    const [name, setName] = useState(response.name)
    const [img, setImg] = useState(response.img)


    function addNickname(value: String){
        if (!value){
            alert("O campo precisa estar preenchido!")
            return
        }
        
        if (nicknames.includes(value)){
            alert("Esse nome já foi adicionado!")
            return
        }

        setNicknames(prev => [...prev, value])
    }

    function addTag(value: String){
        if (!value){
            alert("O campo precisa estar preenchido!")
            return
        }
        
        if (nicknames.includes(value)){
            alert("Essa tag já foi adicionada!")
            return
        }

        setTags(prev => [...prev, value])
    }

    function removeNickname(value: String){
        setNicknames(prev => prev.filter(current => current !== value))
    }

    function removeTag(value: String){
        setTags(prev => prev.filter(current => current !== value))
    }

    return(
        <div className="bg-snow-400 dark:bg-eerieBlack-400 font-notoSans text-eerieBlack-400 dark:text-snow-400 transition min-h-full">
            <Header/>

            <div className="ml-3 mt-2">
                <ReturnArrow/>
            </div>

            <div className="px-3">
                <h1 className="text-2xl my-3">Editar tecnologia</h1>

                <div className="flex flex-col">
                    <label htmlFor="name">Nome da tecnologia:</label>
                    <input type="text" id="name" autoComplete="off" value={name} onChange={e => setName(e.target.value)} className="bg-gray-300 dark:bg-eerieBlack-600 h-10 p-2 rounded mb-4"/>

                    <label htmlFor="nicknames">Também conhecida como:</label>
                    <div id="nicknames" className="bg-gray-300 dark:bg-eerieBlack-600 min-h-10 p-2 rounded flex gap-2 mb-4 flex-wrap">
                        {
                            nicknames.map((nickname, i )=>
                                <Added key={i} name={nickname} remove={removeNickname}/>
                            )
                        }

                        <Add add={addNickname}/>
                    </div>

                    <label htmlFor="tags">Tags</label>
                    <div id="tags" className="bg-gray-300 dark:bg-eerieBlack-600 min-h-10 p-2 rounded flex gap-2 mb-4 flex-wrap">
                        {
                            tags.map((tag, i )=>
                                <Added key={i} name={tag} remove={removeTag}/>
                            )
                        }

                        <Add add={addTag}/>
                    </div>

                    <label htmlFor="img">Imagem</label>
                    <div id="img" >
                        <input type="text" placeholder="Cole o URL da imagem aqui" autoComplete="off" value={img} onChange={e => setImg(e.target.value)} className="bg-gray-300 dark:bg-eerieBlack-600 h-10 p-2 rounded mb-4"/>
                    </div>

                    <button className="max-w-fit rounded-md p-1 text-lg mt-10 mx-auto bg-seaGreen-300 dark:bg-seaGreen-500 mb-20">Salvar</button>
                </div>
            </div>
        </div>
    )
}