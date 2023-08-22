import { useEffect, useState } from "react";
import { api } from "../services/api";
import { TechCard } from "./TechCard";
import { useUser } from "../hooks/useUser";
import { AddTech } from "./AddTech";

export function TechList({search}: {search: string}){
    
    const [techs, setTechs] = useState<Tech[]>([]);
    const { user } = useUser()

    useEffect(() => {

        async function fetchTechs() {
            const response = await api.get("/techs?search=" + search)

            const techs: Tech[] = response.data.map( current => {
                current.nicknames = current.nicknames.split(", ")
                current.tags = current.tags.split(", ")

                return current
            },[])

            setTechs(techs)
        }

        fetchTechs()
    }, [search])

    return(
        <div className="flex flex-wrap justify-around gap-6 px-4 lg:px-10 lg:gap-10">
            
            {user ? user.isAdmin ? <AddTech/> : "" : ""}

            {
                techs.map( (tech, i) => (
                    <TechCard name={tech.name} img={tech.img} tags={tech.tags} key={i}/>
                ))
            }

        </div>
    )
}