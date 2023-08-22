import { useEffect, useState } from "react";
import { Add } from "../components/Add";
import { Added } from "../components/Added";
import { Header } from "../components/Header";
import { ReturnArrow } from "../components/ReturnArrow";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { MdImageNotSupported } from "react-icons/md";


export function NewTech(){

    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [nicknames, setNicknames] = useState<String[]>([])
    const [tags, setTags] = useState<String[]>([])
    const [img, setImg] = useState("")
    const [isValid, setIsValid] = useState(false)

    useEffect(() => {

        setIsValid(true)

    }, [img])


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

    async function add(){

        const techInfo = {
            name,
            img,
            description,
            nicknames: nicknames.join(", "),
            tags: tags.join(", ")
        }

        try{

            await api.post("/techs", techInfo)
            alert("Tecnologia adicionada com sucesso")
            navigate("/JuniorsWiki/" + name)

        } catch(error) {

            if(error.response){
                alert(error.response.data.message)
                return false;
            } else {
                alert("Ocorreu um erro ao criar o usuário")
                return false;
            }

        }
    }


    return(
        <div className="bg-snow-400 dark:bg-eerieBlack-400 font-notoSans text-eerieBlack-400 dark:text-snow-400 transition min-h-full">
            <Header/>

            <div className="mt-2 md:mb-8">
                <ReturnArrow href={"/JuniorsWiki"}/>
            </div>

            <div className="px-5 md:px-8 lg:px-11">
                <h1 className="text-2xl my-3 md:text-3xl lg:text-4xl">Adicionar tecnologia</h1>

                <div className="flex flex-col">
                    <label htmlFor="name" className="md:text-xl lg:text-2xl">Nome da tecnologia:</label>
                    <input type="text" id="name" autoComplete="off" value={name} onChange={e => setName(e.target.value)} className="bg-gray-300 dark:bg-eerieBlack-600 h-10 p-2 rounded mb-4 md:text-xl lg:text-2xl"/>

                    <label htmlFor="description" className="md:text-xl lg:text-2xl">Descrição:</label>
                    <textarea id="description" autoComplete="off" value={description} onChange={e => setDescription(e.target.value)} className="resize-none bg-gray-300 dark:bg-eerieBlack-600 h-32 p-2 rounded mb-4 md:text-xl md:h-40 md:px-3 lg:text-2xl lg:px-4 lg:h-48"/>

                    <label htmlFor="nicknames" className="md:text-xl lg:text-2xl">Também conhecida como:</label>
                    <div id="nicknames" className="bg-gray-300 dark:bg-eerieBlack-600 min-h-10 p-2 rounded flex gap-2 mb-4 flex-wrap">
                        {
                            nicknames.map((nickname, i )=>
                                <Added key={i} name={nickname} remove={removeNickname}/>
                            )
                        }

                        <Add add={addNickname}/>
                    </div>

                    <label htmlFor="tags" className="md:text-xl lg:text-2xl">Tags</label>
                    <div id="tags" className="bg-gray-300 dark:bg-eerieBlack-600 min-h-10 p-2 rounded flex gap-2 mb-4 flex-wrap">
                        {
                            tags.map((tag, i )=>
                                <Added key={i} name={tag} remove={removeTag}/>
                            )
                        }

                        <Add add={addTag}/>
                    </div>

                    <label htmlFor="img" className="md:text-xl lg:text-2xl">Imagem</label>
                    <div id="img" className="flex gap-2 flex-col w-fit">
                        <input type="text" placeholder="Cole o URL da imagem aqui" autoComplete="off" value={img} onChange={e => setImg(e.target.value)} className="bg-gray-300 dark:bg-eerieBlack-600 h-10 p-2 rounded mb-4 md:text-xl"/>

                        <div className="w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 mx-auto">
                            {
                                isValid ? 

                                <img src={img} onError={() => setIsValid(false)} className="w-28 max-h-28 object-cover md:w-36 md:max-h-36 lg:w-40 lg:max-h-40 mx-auto"/>

                                :

                                <MdImageNotSupported className="w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 mx-auto"/>
                            }
                        </div>

                    </div>


                    <button onClick={add} className="max-w-fit rounded-md p-1 md:text-xl mt-10 mx-auto bg-seaGreen-300 dark:bg-seaGreen-500 mb-20 md:p-2 lg:text-2xl lg:p-3">Adicionar</button>
                </div>
            </div>
        </div>
    )
}