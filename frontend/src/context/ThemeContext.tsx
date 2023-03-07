import { ReactNode, createContext,useState } from "react";

type ThemeContextProps = {
    children:ReactNode
}


export const ThemeContext = createContext("light")

export const ThemeProvider = ({children}:ThemeContextProps)=>{
    const [theme,setTheme]=useState("light")

    const toggleTheme=()=>{
        setTheme(theme==="light"?"dark":"light")
    }


    return(
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>

    )
}