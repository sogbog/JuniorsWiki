export function Tag({name}: {name: string}){
    return(
        <span className="text-xs bg-satinGold-400 dark:bg-satinGold-600 rounded-full px-1.5 whitespace-nowrap">
            {name}
        </span>
    )
}