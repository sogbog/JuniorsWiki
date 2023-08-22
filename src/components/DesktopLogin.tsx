import { useReducer } from "react"
import { useUser } from "../hooks/useUser"


export function DesktopLogin(){

    const {user, createUser, login, logout, deleteUser} = useUser()

    const [userInfo, dispatch] = useReducer((userInfo, overwrite) => {
        return {
            ...userInfo,
            ...overwrite
        }
    }, {username: "", password: ""})

    async function handleCreate(){
        const success =  await createUser(userInfo.username, userInfo.password)
        if(success){
            dispatch({username: "", password: ""})
        }
    }
    
    async function handleLogin(){
        const success =  await login(userInfo.username, userInfo.password)
        if(success){
            dispatch({username: "", password: ""})
        }
    }

    return(
        
        <div className="hidden md:flex mt-3 gap-6">               

                {user ? 
                    <span className="text-center w-fit py-1 px-12 text-lg rounded-md bg-seaGreen-200 dark:bg-seaGreen-600 lg:text-xl">
                        {(user.isAdmin ? "ADM " : "") + user.name}
                    </span>
                : 
                    <div className='flex justify-center gap-4'>
                        <input type="text" placeholder="username" value={userInfo.username} onChange={e => dispatch({username: e.target.value})} className="bg-snow-600 dark:bg-eerieBlack-200 rounded-md p-1 placeholder:text-eerieBlack-300 placeholder:dark:text-snow-500 text-lg lg:text-xl lg:p-1.5"/>
                        <input type="password" placeholder="password" value={userInfo.password} onChange={e => dispatch({password: e.target.value})} className="bg-snow-600 dark:bg-eerieBlack-200 rounded-md p-1 placeholder:text-eerieBlack-300 placeholder:dark:text-snow-500 text-lg lg:text-xl lg:p-1.5"/>
                    </div>
                }


                {user ? 
                    <div className='flex gap-2'>
                        <button onClick={logout} className="max-w-fit rounded-md px-3 bg-yaleBlue-200 dark:bg-yaleBlue-500 lg:text-lg">Logout</button>

                        <button onClick={deleteUser} className='max-w-fit rounded-md px-4 bg-red-400 dark:bg-red-700 whitespace-nowrap lg:text-lg'>Deletar conta</button>
                    </div>
                : 
                    <div className='flex gap-2'>
                        <button onClick={handleLogin} className="max-w-fit rounded-md px-3 bg-yaleBlue-200 dark:bg-yaleBlue-500 lg:text-lg">Login</button>

                        <button onClick={handleCreate} className="max-w-fit rounded-md px-4 bg-seaGreen-300 dark:bg-seaGreen-500 lg:text-lg">Criar conta</button>
                    </div>
                }
        </div>
    )
}