import { useState } from "react";
import { createContext, useContext } from "react";

export const BigContext = createContext();

export const useBigContext = () => {
    return useContext(BigContext);
}

const BigContextProvider = ({ children }) => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    //loggedUser keeps all the data about the currently logged user
    const [loggedUser, setLoggedUser] = useState({
        id: '', 
        email: '',
        firstName: '',
        lastName: '', 
        phoneNumber: '',
        isAdmin: false,
    });

    return (
        <BigContext.Provider value={{ isLoggedIn, setIsLoggedIn, loggedUser, setLoggedUser, isAdmin, setIsAdmin }} >
            {children}
        </BigContext.Provider >
    )
}

export default BigContextProvider;