import { useState } from "react";
import { FormContainer } from "./styles";


export function Form(){
    const [content,setContent]=useState<string>()

    return(
        <FormContainer>
            
            <textarea placeholder="Três motivos para agradecer" onChange={e=>setContent(e.target.value)}/>
            <button>Salvar</button>
        </FormContainer>
    )
}