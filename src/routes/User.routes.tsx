import { Route, Routes} from 'react-router-dom'
import { Home } from '../pages/User/Home'
import { Techs } from '../pages/User/Techs'

export function UserRoutes(){
    return(
        <Routes>
            <Route path='/JuniorsWiki' element={<Home/>}/>
            <Route path='/JuniorsWiki/:name' element={<Techs/>}/>
        </Routes>
    )
}