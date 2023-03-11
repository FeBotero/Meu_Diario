import { Header } from "./components/Header"
import { Outlet } from "react-router-dom"
import { useContext, useState } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { ThemeProvider } from "styled-components";
import light from "./styles/themes/light";


function App() {

  
  const {theme}:any=useContext(ThemeContext)
  console.log(typeof(theme))
  
  return (
    <div className="App" >
      
      <Header />
      <Outlet  />
     
    </div>
  )
}

export default App
