import { ContainerDiario } from "./Diario/ContainerDiario";
import { Header } from "./Header/Header";
import { DiarioContainer } from "./styles";

export function Diario(){
    return(
        <>
            <Header/>
        <DiarioContainer>
            <ContainerDiario/>

        </DiarioContainer>

        </>
    )
}