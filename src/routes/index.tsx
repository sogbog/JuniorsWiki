import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useUser } from "../hooks/useUser";
import { Home } from "../pages/Home";
import { Techs } from "../pages/Techs";
import { NewTech } from "../pages/NewTech";
import { EditTech } from "../pages/EditTech";


export function AppRoutes(){
    const { user } = useUser()

    return(
        <BrowserRouter>
            <Routes>
                <Route path='/JuniorsWiki' element={<Home/>}/>
                <Route path='/JuniorsWiki/:name' element={<Techs/>}/>
                <Route path="/JuniorsWiki/NewTech" element={<NewTech/>}/>
                <Route path="/JuniorsWiki/EditTech/:name" element={<EditTech/>}/>
            </Routes>
        </BrowserRouter>
    )
}