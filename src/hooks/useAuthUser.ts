import { createContext, useContext } from "react";

type AuthContextType = {
    isAuthenticated: boolean;
    setIsAuthenticated: (isAuthenticated: boolean) => void;
};
  
const AuthContext = createContext<AuthContextType>({
    isAuthenticated: false,
    setIsAuthenticated: () => {},
});

const useContextAuth = () => {
    return useContext(AuthContext);
}


export { useContextAuth, AuthContext }