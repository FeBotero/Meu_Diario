import { useState } from "react";
import { Diary } from "../../components/Diario";

import { DiarioContainer } from "./styles";


export function Diario(){
   
   

    return(
        <div>
        <h1>Diario</h1>
        
        <DiarioContainer>
            {/* <Diary day={state}/> */}

        </DiarioContainer>

       
        </div>
    )
}