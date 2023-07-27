import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Adm/Home";
import { Techs } from "../pages/Adm/Techs";
import { NewTech } from "../pages/Adm/NewTech";
import { EditTech } from "../pages/Adm/EditTech";

export function AdmRoutes(){
    return(
        <Routes>
            <Route path='/JuniorsWiki' element={<Home/>}/>
            <Route path='/JuniorsWiki/:name' element={<Techs/>}/>
            <Route path="/JuniorsWiki/NewTech" element={<NewTech/>}/>
            <Route path="/JuniorsWiki/EditTech/:name" element={<EditTech/>}/>
        </Routes>
    )
}