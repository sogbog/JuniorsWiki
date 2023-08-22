import { ReturnArrow } from "../components/ReturnArrow";
import { Header } from "../components/Header";
import { Tech } from "../components/Tech";
import { useEffect, useState } from "react";
import { api } from "../services/api";
import { Link, useParams } from "react-router-dom";
import { MdEdit } from "react-icons/md";
import { useUser } from "../hooks/useUser";

export function Techs(){

    const [tech, setTech] = useState<Tech>()
    const { user } = useUser()
    const params = useParams()

    useEffect(() => {

        async function fetchTech(){
            const response = await api.get("/techs/" + params.name)

            const tech = response.data

            tech.nicknames = tech.nicknames.split(", ")
            tech.tags = tech.tags.split(", ")

            setTech(tech)
        }
    
        fetchTech()
    }, [])

    return(
        <div className="bg-snow-400 dark:bg-eerieBlack-400 font-notoSans text-eerieBlack-400 dark:text-snow-400 transition min-h-full">
            <Header/>

            {tech ? 
                
                <div>
                    <div className="mr-3 mt-2 flex justify-between">
                        <ReturnArrow href={"/JuniorsWiki"}/>
                        {user ? user.isAdmin ? 
                        
                        <Link to={"/JuniorsWiki/EditTech/" + tech.name}>
                            <MdEdit className="md:text-2xl md:mr-5 lg:text-3xl lg:mr-9"/>
                        </Link>

                        : "" : ""}

                    </div>

                    <div className="mt-6">
                        
                        <Tech tech={tech}/>
                        
                    </div>
                </div>

                :
                
                <h1 className="text-5xl text-center lg:text-6xl">Carregando...</h1>
            }
            
        </div>
    )
}