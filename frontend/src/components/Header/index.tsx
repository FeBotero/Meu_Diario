import { useContext, useState } from "react"
import profile from "../../assets/user16.svg"
import { getUser } from "../../utils/getUser"
import { HeaderContainer, HeaderHome, HeaderUser, Profile } from "./styles"
import logo from "../../assets/logo.svg"
import { Link } from "react-router-dom"
import { ThemeContext } from "../../context/ThemeContext"
const getInfo = localStorage.getItem("user")
interface Props {
    onDateChange: (date: Date) => void;
  }

export function Header(props:Props){
    const [user,setUser]=useState()
    
    const [date, setDate] = useState<Date>(new Date());

  const {theme,toggleTheme}:any = useContext(ThemeContext)



    function handleDateChange(event:any) {
        //Coleta a data e armazena em um estado desse componente
        const date = new Date(event.target.value);
        setDate(date);
        //Passa para o Diario qual a data selecionada
        if (props.onDateChange) {
          props.onDateChange(date);
        }
        
      }   
    return(
        <HeaderContainer>
          <div className={theme==="dark"?"dark-theme":""}>

          <img src={logo} alt="" />
          <h1>uerido diario</h1>  
          <button onClick={toggleTheme}>Toggle</button>
          <p>O tema atual é :{theme}</p>
          </div>

          {user?
          "":
          <input type="date" value={date.toISOString().substr(0, 10)} onChange={handleDateChange} />
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

