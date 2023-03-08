import { ReactNode, createContext,useState } from "react";
import { ThemeProvider } from "styled-components";
import { DefaultTheme } from "../styles/themes/DefaultTheme";
import { DarkTheme } from "../styles/themes/DarkTheme";

type ThemeContextProps = {
    children:ReactNode
}


export const ThemeContext = createContext("light")

export const ThemeContextProvider= ({children}:ThemeContextProps)=>{
    const [theme,setTheme]=useState("light")

    const toggleTheme=()=>{
        const newValue = theme==="light"?"dark":"light"
        setTheme(newValue)

        localStorage.setItem("theme",newValue)
    }


    return(
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            <ThemeProvider theme={theme==="light"? DefaultTheme : DarkTheme}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>

    )
}