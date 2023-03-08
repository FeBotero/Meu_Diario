import { ReactNode, createContext,useState } from "react";

type UserContextProps = {
    children:ReactNode
}

const info:any = localStorage.getItem("user")
const userLogged = JSON.parse(info)
export const UserContext = createContext(userLogged)

export const UserProvider = ({children}:UserContextProps)=>{
    const [user,setUser]=useState("")

    const toggleUser=()=>{
        setUser(!userLogged?"":userLogged.id)
    }


    return(
        <UserContext.Provider value={{user,toggleUser}}>
            {children}
        </UserContext.Provider>

    )
}