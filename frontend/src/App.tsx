import { Header } from "./components/Header"
import { Outlet } from "react-router-dom"
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { AppContainer } from "./style";



function App() {

  
  const {theme}:any=useContext(ThemeContext)
  
  
  return (
    <div className="App" >
      
      <Header />
      <AppContainer>
      <Outlet  />
      </AppContainer>
     
    </div>
  )
}

export default App
