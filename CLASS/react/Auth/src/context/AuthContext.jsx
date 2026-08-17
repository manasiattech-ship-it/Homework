import { createContext, useState } from "react";


export const Auth = createContext();

export const AuthProvider = ({children}) => {

    const [registeredUsers, setRegisteredUsers] = useState(JSON.parse(localStorage.getItem("registeredUsers")) || []) 
    const [loggedinUser, setLoggedinUser] = useState(
			JSON.parse(localStorage.getItem("loggedinUser")) || null,
		) 
    return <Auth.Provider value={{registeredUsers, setRegisteredUsers, loggedinUser, setLoggedinUser}}> {children}</Auth.Provider>
}