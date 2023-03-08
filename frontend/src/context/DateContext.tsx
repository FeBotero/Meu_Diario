import { ReactNode, createContext,useState } from "react";

type dateContextProps = {
    children:ReactNode
}

const dateNow = new Date()

export const dateContext = createContext<any>(null)

export const DateProvider = ({children}:dateContextProps)=>{
    const [date,setDate]=useState()

    // const toggledate=(e:any)=>{
    //     setdate(e.target.value)
    // }


    return(
        <dateContext.Provider value={{date,setDate}}>
            {children}
        </dateContext.Provider>

    )
}