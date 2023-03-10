import {createContext,ReactNode, useState} from "react"

type ThemeContextProps={
    children:ReactNode
}
type ThemeContextType={
    theme:string,
    setTheme:(newState:string)=>void
}

const initialValue={
    theme:"light",
    setTheme:()=>{}
}


export const ThemeContext = createContext<ThemeContextType>(initialValue)

export const ThemeContextProvider = ({children}:ThemeContextProps)=>{
    
    const [theme,setTheme] = useState(initialValue.theme)
    return(
        <ThemeContext.Provider value={{theme,setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}