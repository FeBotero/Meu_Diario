import { useContext, useState } from "react"
import profile from "../../assets/user16.svg"
import { getUser } from "../../utils/getUser"
import { HeaderContainer, HeaderHome, HeaderUser, Profile } from "./styles"
import logo from "../../assets/logo.svg"
import { Link } from "react-router-dom"
import { ThemeContext } from "../../context/ThemeContext"
import { dateContext } from "../../context/DateContext"
import { UserContext } from "../../context/UserContext"
const getInfo = localStorage.getItem("user")
interface Props {
    onDateChange: (date: Date) => void;
  }

export function Header(props:Props){  
  const { date, setDate } = useContext(dateContext)  
  const [dateSelect, setDateSelect] = useState<Date>(new Date());

    const {toggleTheme}:any = useContext(ThemeContext)

    const{user,toggleUser}:any = useContext(UserContext)

  


    function handleDateChange(newDate:Date) {
        
        setDate(newDate)
        
      }   
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
            user
            ?
            <HeaderHome>
              <button>Login</button>
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

