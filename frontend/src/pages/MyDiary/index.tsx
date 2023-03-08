import { useContext, useState } from "react";
import { Diary } from "../../components/Diario";

import { DiarioContainer } from "./styles";
import { dateContext } from "../../context/DateContext";

export function Diario(){
    
   
    

    return(
        <div>
        <h1>Diario</h1>
        
        <DiarioContainer>
            <Diary />

        </DiarioContainer>

       
        </div>
    )
}