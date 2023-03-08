import { Header } from "./components/Header"
import { Outlet } from "react-router-dom"
import { useContext, useState } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { dateContext } from "./context/DateContext"
import "./App.css"


function App() {
  const day = new Date()
  const [state, setState] = useState<Date>(day);

  // como fazer para enviar o metodo setDay para o header
  const {theme}:any=useContext(ThemeContext)
  const {toggleDate}:any=useContext(dateContext)
  
  return (
    <div className={`App ${theme==="dark"?"dark-theme":"light"}`}>
      <Header onDateChange={setState} />
        <Outlet  />
       
    </div>
  )
}

export default App
