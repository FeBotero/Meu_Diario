import { Header } from "./components/Header"
import { Outlet } from "react-router-dom"
import { useContext, useState } from "react";
import { ThemeContext } from "./context/ThemeContext";

function App() {

  
  const {theme}:any=useContext(ThemeContext)
  
  
  return (
    <div className={`App ${theme==="dark"?"dark-theme":"light"}`}>
      <Header />
      <Outlet  />
    </div>
  )
}

export default App
