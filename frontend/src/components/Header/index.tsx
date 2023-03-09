import { useContext, useState } from "react"
import profile from "../../assets/user16.svg"
import { getUser } from "../../utils/getUser"
import { HeaderContainer, HeaderHome, HeaderUser, Profile } from "./styles"
import logo from "../../assets/logo.svg"
import { Link } from "react-router-dom"
import { ThemeContext } from "../../context/ThemeContext"
import { dateContext } from "../../context/DateContext"
import { UserContext } from "../../context/UserContext"
import { useNavigate } from "react-router-dom"

const getInfo = localStorage.getItem("user")


export function Header(){  
  const navigate = useNavigate()
  const [data,setData]=useState<Date>()

  const { setDate } = useContext(dateContext)  
  

    const {toggleTheme}:any = useContext(ThemeContext)

    const{user,toggleUser}:any = useContext(UserContext)

    function handleDateChange(newDate:Date) {
        

        // const newDateTime = new Date(newDate.toUTCString())

        // // const newValue = new Date(newDateTime.setMinutes(newDateTime.getMinutes()+new Date().getTimezoneOffset()))


        // // setDate(new Date(newDateValue.))
        console.log(new Date(newDate.setUTCDate(0)))
      }   
  
      function Login(){
        navigate("/login")
      }
      // 

      // {e=>setData(new Date(e.target.value))}
    return(
        <HeaderContainer>
          <div >

          <img src={logo} alt="" />
          <h1>uerido diario</h1>  
          <button onClick={toggleTheme}>Toggle</button>
          
          </div>

          {user?
          "":
          <input type="date"  onChange={e=>handleDateChange(new Date(e.target.value))} />
          }
      
        {
            !user
            ?
            <HeaderHome>
              <button onClick={Login} >Login</button>
            </HeaderHome>
            :
            <HeaderUser>
             
             
              <Profile>
                <Link to={"/"}><p>Felipe Botero</p></Link>
                <Link to={"/diary"}><button>
                    <img src={profile} alt="" />
                </button></Link>
            </Profile>
            </HeaderUser>
        }
        
        </HeaderContainer>
    )
}

