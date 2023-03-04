import profile from "../../assets/user16.svg"
import { HeaderContainer } from "./styles"

export function Header(){
    return(

        <HeaderContainer>
        <h1>Meu querido diario</h1>  
        {/* Logo do projeto acima */}

        <p>Felipe Botero</p>
        <img src={profile} alt="" />
        </HeaderContainer>
    )
}