import { Header } from "./components/Header"
import { Outlet } from "react-router-dom"
import { useContext, useState } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { GlobalStyle } from "./styles/global";
// import "./App.css"

document.getElementById

function App() {
  const day = new Date()
  const [state, setState] = useState<Date>(day);

  // como fazer para enviar o metodo setDay para o header
  const {theme}:any=useContext(ThemeContext)
  
  return (
    <GlobalStyle className={`App ${theme==="dark"?"dark-theme":"light"}`}>
      <Header />
        <Outlet  />
       
    </GlobalStyle>
  )
}

export default App
