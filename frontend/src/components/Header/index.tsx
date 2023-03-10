import { useContext, useState } from "react"

import { HeaderContainer, HeaderHome, HeaderUser, Profile } from "./styles"
import logo from "../../assets/logo.svg"

import { ThemeContext } from "../../context/ThemeContext"
import { dateContext } from "../../context/DateContext"
import { UserContext } from "../../context/UserContext"
import { useNavigate } from "react-router-dom"
import { Moon, Sun} from "@phosphor-icons/react";

const getInfo:any = localStorage.getItem("user")


export function Header(){  

  const navigate = useNavigate()


  const { setDate } = useContext(dateContext)  
  

    const {theme,toggleTheme}:any = useContext(ThemeContext)

    // const{user,toggleUser}:any = useContext(UserContext)
    const user = JSON.parse(getInfo)


    function handleDateChange(newDate:Date) {
        




        
        
        console.log(` Data atual ${newDate}`)
       
        setDate(newDate)
    
       
      }   
  
      function Login(){
        navigate("/login")
        window.location.href=window.location.href
      }
      
      function LogOut(){
        // toggleUser()
        localStorage.removeItem("user")
        navigate("/")
        window.location.href=window.location.href
        navigate("/")
      }

    return(
        <HeaderContainer>
          <div >

          <img src={logo} alt="" />
          <h1>uerido diario</h1>  
         
          
          </div>

          {!user?
          "":
          <input type="datetime-local"   onChange={e=>handleDateChange(new Date(e.target.value))} />
          }
      
        {
            !user
            ?
            <HeaderHome>
               <button className="toggle" onClick={toggleTheme}>{theme=="light"?<Moon size={32} />:<Sun size={32} />}</button>
                  <button className="login" onClick={Login} >Login</button>
              
            </HeaderHome>
            :
            <HeaderUser>
             
             
              <Profile>
              <button className="toggle" onClick={toggleTheme}>{theme=="light"?<Moon size={32} />:<Sun size={32} />}</button>
                <div>
                <button className="login" onClick={LogOut} >Logout</button>
                </div>
            </Profile>
            </HeaderUser>
        }
        
        </HeaderContainer>
    )
}

