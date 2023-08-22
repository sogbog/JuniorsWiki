import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { ReturnArrow } from "../components/ReturnArrow";
import { Add } from "../components/Add";
import { Added } from "../components/Added";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../services/api";
import { MdImageNotSupported } from "react-icons/md";


export function EditTech(){

    const params = useParams()
    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [nicknames, setNicknames] = useState<String[]>([])
    const [tags, setTags] = useState<String[]>([])
    const [img, setImg] = useState("")
    const [isValid, setIsValid] = useState(true)

    useEffect(() => {
        async function fetchTechInfo(){
            const response = await api.get("/techs/" + params.name)

            const tech = response.data
            
            setName(tech.name)
            setNicknames(tech.nicknames.split(", "))
            setDescription(tech.description)
            setTags(tech.tags.split(", "))
            setImg(tech.img)

        }

        fetchTechInfo()
    }, [])

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

        const trimmed = value.replace(/ /g, "")

        setNicknames(prev => [...prev, trimmed])
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

        const trimmed = value.replace(/ /g, "")

        setTags(prev => [...prev, trimmed])
    }

    function removeNickname(value: String){
        setNicknames(prev => prev.filter(current => current !== value))
    }

    function removeTag(value: String){
        setTags(prev => prev.filter(current => current !== value))
    }

    async function save(){

        const techInfo = {
            name,
            img,
            description,
            nicknames: nicknames.join(", "),
            tags: tags.join(", ")
        }

        await api.put(`/techs/${params.name}`, techInfo)
        alert("Tecnologia atualizada com sucesso")
        navigate("/JuniorsWiki/" + name)
    }

    async function deleteTech(){
        if(confirm("Tem certeza que deseja excluir essa tecnologia?")){
            await api.delete("/techs/" + params.name)
        }
        navigate("/JuniorsWiki")
    }

    return(
        <div className="bg-snow-400 dark:bg-eerieBlack-400 font-notoSans text-eerieBlack-400 dark:text-snow-400 transition min-h-full">
            <Header/>

            <div className="mt-2 md:mb-8">
                <ReturnArrow href={"/JuniorsWiki/" + params.name}/>
            </div>

            <div className="px-5 md:px-8">
                <h1 className="text-2xl my-3 md:text-3xl lg:text-4xl">Editar tecnologia</h1>

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

                        <div className="w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 mx-auto flex">
                            {
                                isValid ? 

                                <img src={img} onError={() => setIsValid(false)} className="w-28 max-h-28 object-cover md:w-36 md:max-h-36 lg:w-40 lg:max-h-40 mx-auto"/>

                                :

                                <MdImageNotSupported className="w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 mx-auto"/>
                            }
                        </div>

                    </div>
                        
                    <div className="flex gap-8 justify-center md:gap-16 lg:gap-32">

                        <button onClick={save} className="max-w-fit rounded-md p-1 text-lg mt-10 bg-seaGreen-300 dark:bg-seaGreen-500 mb-20 md:p-2 lg:text-2xl lg:p-3">Salvar</button>

                        <button onClick={deleteTech} className="max-w-fit rounded-md p-1 text-lg mt-10 bg-red-400 dark:bg-red-700 mb-20 md:p-2 lg:text-2xl lg:p-3">Excluir</button>
                        
                    </div>        

                </div>
            </div>
        </div>
    )
}