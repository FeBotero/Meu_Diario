import { ContainerDiario } from "../../components/Diario";
import { Header } from "../../components/Header";
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