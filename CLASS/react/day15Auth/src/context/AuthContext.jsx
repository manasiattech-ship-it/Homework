import { Children, createContext, useState } from "react";

export const Auth = createContext();

export const AuthProvider = ({children}) => {
   
   const [registeredUsers, setRegisteredUsers] = useState(JSON.parse(localStorage.getItem('registeredUsers')) || [])
   const [loggedInUser, setloggedInUser] = useState(JSON.parse(localStorage.getItem("loggedInUser")) || null)

    console.log(registeredUsers)
    console.log(loggedInUser)



   return <Auth.Provider value={{registeredUsers, setRegisteredUsers, loggedInUser, setloggedInUser}}> {children} </Auth.Provider>
}