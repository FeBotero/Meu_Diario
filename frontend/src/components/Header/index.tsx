import profile from "../../assets/user16.svg"
import { getUser } from "../../utils/getUser"
import { HeaderContainer, Profile } from "./styles"

const getInfo:any = localStorage.getItem("user")
export function Header(){
    if(!getInfo){

        const userId = getInfo!=undefined?JSON.parse(getInfo).id:""
        getUser(userId)
    }



    return(

        <HeaderContainer>
        <h1>Querido diario</h1>  
        {/* Logo do projeto acima */}
        <input type="date" name="selectDay" id="selectDay" />

        <Profile>
            <p>Felipe Botero</p>
            <button>
                <img src={profile} alt="" />
            </button>
        </Profile>
        </HeaderContainer>
    )
}