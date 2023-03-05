import { useState } from "react";
import { ContainerDiario } from "../../components/Diario";
import { Header } from "../../components/Header";
import { DiarioContainer } from "./styles";


export function Diario(){
    const [state, setState] = useState<Date>();

    // como fazer para enviar o metodo setDay para o header
   

    return(
        <div>
        <Header onDateChange={setState} />
        
        <DiarioContainer>
            <ContainerDiario day={state}/>

        </DiarioContainer>

       
        </div>
    )
}