import { useContext, useState,useEffect } from "react"
import { HeaderContainer, HeaderHome, HeaderUser, Profile } from "./styles"
import logo from "../../assets/logo.svg"

import { ThemeContext } from "../../context/ThemeContext"
import { dateContext } from "../../context/DateContext"
import { UserContext } from "../../context/UserContext"
import { useNavigate,Link } from "react-router-dom"
import { Moon, Sun} from "@phosphor-icons/react";

const getInfo:any = localStorage.getItem("user")


export function Header(){  
  const [selectUser,setSelectUser]=useState()
  const navigate = useNavigate()


  const { setDate } = useContext(dateContext)  
  

    const {theme,changeTheme} = useContext(ThemeContext)

    const{user,setUser}:any = useContext(UserContext)
    // const userInfo = JSON.parse(getInfo)

    function handleChangeTheme() {
      changeTheme();
      // handleToggleMenu();
    }

    function handleDateChange(newDate:Date) {      
        
        setDate(newDate)
      }   
  
      function Login(){
        navigate("/login")
        window.location.href=window.location.href
      }
      
      function LogOut(){
        setUser()
        localStorage.removeItem("user")
        navigate("/")
        window.location.href=window.location.href
        navigate("/")
      }
      function getUser(){
        setSelectUser(user)
      }

      useEffect(()=>{
        getUser()
      },[user])


    return(
        <HeaderContainer>
          <div >

         <Link to="/"> <img src={logo} alt="" />
          <h1>uerido diario</h1>  </Link>
         
          
          </div>

          {!user?
          "":
          <input type="datetime-local"   onChange={e=>handleDateChange(new Date(e.target.value))} />
          }
      
        {
            !user
            ?
            <HeaderHome>
               <button className="toggle" onClick={handleChangeTheme}>{theme=="light"?<Sun size={32} fill="white" />:<Moon size={32} />}</button>
              <button className="login" onClick={Login} >Login</button>
              
            </HeaderHome>
            :
            <HeaderUser>
             
             
              <Profile>
              <button className="toggle" onClick={handleChangeTheme}>{theme=="light"?<Sun size={32} />:<Moon size={32} />}</button>
                <div>
                <button className="login" onClick={LogOut} >Logout</button>
                </div>
            </Profile>
            </HeaderUser>
        }

        </HeaderContainer>
    )
}

