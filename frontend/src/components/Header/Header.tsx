import profile from "../../assets/user16.svg"
import { HeaderContainer, Profile } from "./styles"

export function Header(){
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