export function Tag({name}: {name: string}){
    return(
        <span className="text-xs bg-satinGold-400 dark:bg-satinGold-600 rounded-full px-1.5 whitespace-nowrap md:text-base md:px-2 lg:text-lg">
            {name}
        </span>
    )
}