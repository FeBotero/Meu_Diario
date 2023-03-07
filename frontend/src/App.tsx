import { Header } from "./components/Header"
import { Outlet } from "react-router-dom"
import { useState } from "react";
import "./App.css"

function App() {
  const [state, setState] = useState<Date>();

  // como fazer para enviar o metodo setDay para o header


  return (
    <div className="App">
      <Header onDateChange={setState} />
        <Outlet/>
        
    </div>
  )
}

export default App
