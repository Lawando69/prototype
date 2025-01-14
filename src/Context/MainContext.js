import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const MainContext = createContext();

export function MainProvider({children}){
    const navigate = useNavigate();

    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );

    function login(userData){
        localStorage.setItem("user", JSON.stringify(userData))
        setUser(userData);
        navigate("./profile");
    }

    function logout(){
        localStorage.removeItem("user")
        setUser(null); //NOTE: Sets the user to not logged in.
        navigate("./join");
    }

    return(
        <UserContext.Provider value={{user, login, logout}}>{children}</UserContext.Provider>
    )

}

