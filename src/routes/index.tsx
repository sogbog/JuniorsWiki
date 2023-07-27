import { BrowserRouter} from "react-router-dom";
import { AdmRoutes } from "./Adm.routes";
import { UserRoutes } from "./User.routes";

export function AppRoutes(){
    //const { user } = useAuth()
    const user = {
        isAdm: true
    }

    return(
        <BrowserRouter>
            {user.isAdm ? <AdmRoutes/> : <UserRoutes/>}
        </BrowserRouter>
    )

}