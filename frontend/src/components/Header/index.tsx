import { useState } from "react"
import profile from "../../assets/user16.svg"
import { getUser } from "../../utils/getUser"
import { HeaderContainer, HeaderHome, HeaderUser, Profile } from "./styles"

const getInfo = localStorage.getItem("user")
interface Props {
    onDateChange: (date: Date) => void;
  }

export function Header(props:Props){
    const [user,setUser]=useState()
    
    const [date, setDate] = useState<Date>(new Date());

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
      
          <h1>Querido diario</h1>  
      
        {
            user
            ?
            <HeaderHome>
              <button>Login</button>
            </HeaderHome>
            :
            <HeaderUser>
              <input type="date" value={date.toISOString().substr(0, 10)} onChange={handleDateChange} />
              <Profile>
                <p>Felipe Botero</p>
                <button>
                    <img src={profile} alt="" />
                </button>
            </Profile>
            </HeaderUser>
        }
        
        </HeaderContainer>
    )
}

