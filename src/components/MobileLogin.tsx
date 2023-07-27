import { MdKeyboardArrowDown } from 'react-icons/md'



const authenticated = true
const user = {name: "Jooj"}
const adm = true


export function MobileLogin() {

    function handleDropDown(){
        const dropDown = document.getElementById("dropDown")!
        dropDown.classList.toggle("h-0")
        dropDown.classList.toggle("h-24")
        
        const arrow = document.getElementById("arrow")!
        arrow.classList.toggle("rotate-180")
    }

    return(
        <div className="md:hidden flex flex-col justify-center absolute w-full left-0 right-0 mx-auto bg-snow-500 dark:bg-eerieBlack-300">

            <div id='dropDown' className="flex flex-col items-center gap-1 overflow-hidden h-0 pt-2 transition-[height] duration-300">
                

                {authenticated ? 
                        <span className="text-center rounded-md p-1 w-full py-4">
                            {(adm ? "ADM " : "") + user.name}
                        </span>
                : 
                    <div className='flex justify-center flex-col gap-1'>
                        <input type="text" placeholder="username" className="bg-snow-600 dark:bg-eerieBlack-200 rounded-md p-1 text-sm placeholder:text-eerieBlack-300 placeholder:dark:text-snow-600"/>
                        <input type="password" placeholder="password" className="bg-snow-600 dark:bg-eerieBlack-200 rounded-md p-1 text-sm placeholder:text-eerieBlack-300 placeholder:dark:text-snow-600"/>
                    </div>
                }


                {authenticated ? 
                    <div className='flex gap-2'>
                        <button className="max-w-fit rounded-md p-1 text-xs bg-yaleBlue-200 dark:bg-yaleBlue-500">Logout</button>

                        <button className='max-w-fit rounded-md p-1 text-xs bg-red-400 dark:bg-red-700'>Deletar conta</button>
                    </div>
                : 
                    <div className='flex gap-2'>
                        <button className="max-w-fit rounded-md p-1 text-xs bg-yaleBlue-200 dark:bg-yaleBlue-500">Login</button>

                        <button className="max-w-fit rounded-md p-1 text-xs bg-seaGreen-300 dark:bg-seaGreen-500">Criar conta</button>
                    </div>
                }

            </div>
            
            <button onClick={() => handleDropDown()} className='self-center'>
                <MdKeyboardArrowDown id='arrow' className='transition-[transform] duration-300'/>
            </button>

        </div>
    )
}