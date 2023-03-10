import nuvem from "../../assets/Nuvem.svg"
import { HomeContainer } from "./styles"



export function Home(){
    return(
        <HomeContainer>
        <h1>Vamos por para fora o que esta transbordando aí dentro?</h1>
        <img src={nuvem} alt="" />
        

        </HomeContainer>
    )
}