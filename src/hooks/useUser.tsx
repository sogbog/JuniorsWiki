import { ReactNode, createContext, useState, useContext, useEffect } from "react";
import { User } from "../types/user";
import { api } from "../services/api";

interface UserFunctions {
    user: User,
    createUser(username: string, password: string): Promise<boolean>,
    login(username: string, password: string): Promise<boolean>,
    logout(): void,
    deleteUser(): Promise<void>
}


const UserContext = createContext<UserFunctions>(null);

export function UserProvider({children}: {children: ReactNode}) {
    
    const [user, setUser] = useState<User>(null);

    async function createUser(username: string, password: string): Promise<boolean>{
        if(!username || !password) {
            alert("Nome de usuário e senha são obrigatórios")
            return
        }

        try{

            await api.post("/users", {username, password});
            
            login(username, password);
            
            alert("Usuário criado com sucesso!")

            return true;

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

    async function login(username: string, password: string):Promise<boolean> {
        
        if(!username || !password) {
            alert("Nome de usuário e senha estão vazios")
            return
        }
        
        try {
            
            const response = await api.post("/session", {username, password})
            const {user: loggedUser, jwt} = response.data
            localStorage.setItem("@JuniorsWiki:user", JSON.stringify(loggedUser));
            localStorage.setItem("@JuniorsWiki:token", jwt);

            setUser(loggedUser);

            api.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;

            return true;

        } catch (error) {
            if(error.response){
                alert(error.response.data.message)
                return false;
            } else {
                alert("Ocorreu um erro ao fazer login")
                return false;
            }
        }
        
    }

    function logout(){
        localStorage.removeItem("@JuniorsWiki:user")
        localStorage.removeItem("@JuniorsWiki:token")
        setUser(null)
    }

    async function deleteUser(){
        if(confirm("Tem certeza que deseja excluir o usuário?")){
            try {

                const response = await api.delete("/users/" + user.id.toString())
                const deleted = response.data

                logout()

                alert(`Usuário ${deleted.name} deletado com sucesso!`)

            } catch (error) {
                if(error.response){
                    alert(error.response.data.message)
                } else {
                    alert("Ocorreu um erro ao deletar o usuário")
                }
            }
        }
    }

    useEffect(() => {
        const retrievedUser = localStorage.getItem("@JuniorsWiki:user");
        const token = localStorage.getItem("@JuniorsWiki:token");

        if(retrievedUser && token){
            api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
            setUser(JSON.parse(retrievedUser));
        }
    }, [])

    return(
        <UserContext.Provider value={{user, createUser, login, logout, deleteUser}}>
            {children}
        </UserContext.Provider>
    )
    
}

export function useUser(){
    return useContext(UserContext)
}