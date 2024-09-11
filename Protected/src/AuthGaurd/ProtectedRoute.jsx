import { Navigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";


function ProtectedRoute({children}){
    console.log(useAuth())
    const {isAuthenticated}=useAuth();
    if(!isAuthenticated){
        return <Navigate to={'/login'}/>
    }
    return children;
}

export default ProtectedRoute;