import { createContext, useContext, useState } from "react";
const Auth = createContext();

export const useAuth=()=> {
    return useContext(Auth);
}

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = () => setIsAuthenticated(true);
    const logout = () => setIsAuthenticated(false);
    return (
        <Auth.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </Auth.Provider>
    )
}